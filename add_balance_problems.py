import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()

# ── 1. Add 'bal' to CAT_INFO ─────────────────────────────────────────────────
old_catinfo = """  stoik:   { icon:'🔢',  label:'Stoikiometri' },
};"""
new_catinfo = """  stoik:   { icon:'🔢',  label:'Stoikiometri' },
  bal:     { icon:'⚖️',  label:'Balansering' },
};"""
html = html.replace(old_catinfo, new_catinfo, 1)

# ── 2. Add balance problems to PROBLEMS array ────────────────────────────────
# Each problem has:
#   type:'balance'  - triggers special rendering
#   eq: array of sides, each side = array of {coef, formula}
#     coef: the correct coefficient (integer), 'coef' can be 1 (shown as blank too)
#   blanks: array of indices into the flat coef list that are blanks (0=first coef overall)
#   Note: we store the equation as left/right arrays and mark which are blank

BALANCE_PROBLEMS = r"""
  // ── BALANSERING ──
  { id:3001, lv:1, cat:'bal', type:'balance', title:'Magnesium brinner',
    eq:[ [{c:2,f:'Mg'},{c:1,f:'O₂'}], [{c:2,f:'MgO'}] ],
    blanks:[0,1,2], hint:'Mg har 2 valenselektroner; O₂ behöver 2 Mg-atomer',
    steps:['2 Mg + O₂ → 2 MgO','Kontroll: 2 Mg på varje sida, 2 O på varje sida'] },

  { id:3002, lv:1, cat:'bal', type:'balance', title:'Vatten bildas',
    eq:[ [{c:2,f:'H₂'},{c:1,f:'O₂'}], [{c:2,f:'H₂O'}] ],
    blanks:[0,1,2], hint:'H₂ + O₂ → H₂O — börja med O',
    steps:['2 H₂ + O₂ → 2 H₂O','4 H och 2 O på varje sida'] },

  { id:3003, lv:1, cat:'bal', type:'balance', title:'Järn oxideras',
    eq:[ [{c:4,f:'Fe'},{c:3,f:'O₂'}], [{c:2,f:'Fe₂O₃'}] ],
    blanks:[0,1,2], hint:'Balansera O₂ sist',
    steps:['4 Fe + 3 O₂ → 2 Fe₂O₃','4 Fe och 6 O på varje sida'] },

  { id:3004, lv:1, cat:'bal', type:'balance', title:'Kol brinner',
    eq:[ [{c:1,f:'C'},{c:1,f:'O₂'}], [{c:1,f:'CO₂'}] ],
    blanks:[0,1,2], hint:'Alla koefficienter är 1 — kontrollera ändå!',
    steps:['C + O₂ → CO₂','1 C och 2 O på varje sida'] },

  { id:3005, lv:1, cat:'bal', type:'balance', title:'Natriumklorid bildas',
    eq:[ [{c:2,f:'Na'},{c:1,f:'Cl₂'}], [{c:2,f:'NaCl'}] ],
    blanks:[0,1,2], hint:'Cl₂ har 2 klor → behöver 2 NaCl',
    steps:['2 Na + Cl₂ → 2 NaCl'] },

  { id:3006, lv:1, cat:'bal', type:'balance', title:'Magnesiumoxid bildas med N₂',
    eq:[ [{c:3,f:'Mg'},{c:1,f:'N₂'}], [{c:1,f:'Mg₃N₂'}] ],
    blanks:[0,1,2], hint:'Mg₃N₂ innehåller 3 Mg och 2 N',
    steps:['3 Mg + N₂ → Mg₃N₂'] },

  { id:3007, lv:2, cat:'bal', type:'balance', title:'Förbränning av metan',
    eq:[ [{c:1,f:'CH₄'},{c:2,f:'O₂'}], [{c:1,f:'CO₂'},{c:2,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'Balansera C, sedan H, till sist O',
    steps:['CH₄ + 2 O₂ → CO₂ + 2 H₂O','1C, 4H, 4O på varje sida'] },

  { id:3008, lv:2, cat:'bal', type:'balance', title:'Förbränning av etan',
    eq:[ [{c:2,f:'C₂H₆'},{c:7,f:'O₂'}], [{c:4,f:'CO₂'},{c:6,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'C₂H₆ har 2C och 6H; balansera C, H, O i den ordningen',
    steps:['2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O'] },

  { id:3009, lv:2, cat:'bal', type:'balance', title:'Järnsulfid bildas',
    eq:[ [{c:1,f:'Fe'},{c:1,f:'S'}], [{c:1,f:'FeS'}] ],
    blanks:[0,1,2], hint:'Alla 1:1 – enkelt!',
    steps:['Fe + S → FeS'] },

  { id:3010, lv:2, cat:'bal', type:'balance', title:'Aluminiumoxid bildas',
    eq:[ [{c:4,f:'Al'},{c:3,f:'O₂'}], [{c:2,f:'Al₂O₃'}] ],
    blanks:[0,1,2], hint:'Al₂O₃ kräver jämnt antal O: LGN(2,3)=6 → 2 Al₂O₃ och 3 O₂',
    steps:['4 Al + 3 O₂ → 2 Al₂O₃','4 Al och 6 O på varje sida'] },

  { id:3011, lv:2, cat:'bal', type:'balance', title:'Kalciumhydroxid + saltsyra',
    eq:[ [{c:1,f:'Ca(OH)₂'},{c:2,f:'HCl'}], [{c:1,f:'CaCl₂'},{c:2,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'OH behöver matchas av H; Cl-balansen ger 2 HCl',
    steps:['Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O'] },

  { id:3012, lv:2, cat:'bal', type:'balance', title:'Natriumhydroxid + svavelsyra',
    eq:[ [{c:2,f:'NaOH'},{c:1,f:'H₂SO₄'}], [{c:1,f:'Na₂SO₄'},{c:2,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'Na₂SO₄ kräver 2 Na → 2 NaOH',
    steps:['2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O'] },

  { id:3013, lv:2, cat:'bal', type:'balance', title:'Zinksulfid bildas',
    eq:[ [{c:2,f:'Zn'},{c:1,f:'S₈'}], [{c:8,f:'ZnS'}] ],
    blanks:[0,1,2], hint:'S₈ är ringformigt svavel med 8 S-atomer → 8 ZnS krävs',
    steps:['Behövs 8 Zn för 8 ZnS; 8 Zn + S₈ → 8 ZnS'] },

  { id:3014, lv:3, cat:'bal', type:'balance', title:'Förbränning av propan',
    eq:[ [{c:1,f:'C₃H₈'},{c:5,f:'O₂'}], [{c:3,f:'CO₂'},{c:4,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'C₃H₈: 3C → 3CO₂; 8H → 4H₂O; O: 3×2+4×1=10=5×2 ✓',
    steps:['C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O'] },

  { id:3015, lv:3, cat:'bal', type:'balance', title:'Dikopparsulfid oxideras',
    eq:[ [{c:2,f:'Cu₂S'},{c:3,f:'O₂'}], [{c:4,f:'Cu'},{c:2,f:'SO₂'}] ],
    blanks:[0,1,2,3], hint:'Cu₂S: 2Cu + 1S; balansera S, sedan Cu, till sist O',
    steps:['2 Cu₂S + 3 O₂ → 4 Cu + 2 SO₂'] },

  { id:3016, lv:3, cat:'bal', type:'balance', title:'Kvävgas + väte → ammoniak',
    eq:[ [{c:1,f:'N₂'},{c:3,f:'H₂'}], [{c:2,f:'NH₃'}] ],
    blanks:[0,1,2], hint:'NH₃ har 1N och 3H; N₂ ger 2NH₃ → 6H = 3H₂',
    steps:['N₂ + 3 H₂ → 2 NH₃','2N och 6H på varje sida'] },

  { id:3017, lv:3, cat:'bal', type:'balance', title:'Fosforbränning',
    eq:[ [{c:4,f:'P'},{c:5,f:'O₂'}], [{c:2,f:'P₂O₅'}] ],
    blanks:[0,1,2], hint:'P₂O₅: 2P, 5O; LGN(2,5)=10 → 4P och 5O₂',
    steps:['4 P + 5 O₂ → 2 P₂O₅','4P och 10O på varje sida'] },

  { id:3018, lv:3, cat:'bal', type:'balance', title:'Glukosförbränning',
    eq:[ [{c:1,f:'C₆H₁₂O₆'},{c:6,f:'O₂'}], [{c:6,f:'CO₂'},{c:6,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'6C → 6CO₂; 12H → 6H₂O; O: 6+6=12, finns 6 i glukos, behövs 6 O₂',
    steps:['C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O'] },
"""

# Insert before end of PROBLEMS array
old_end = '];\n\nconst CLOZE_DATA'
html = html.replace(old_end, BALANCE_PROBLEMS + '\n];\n\nconst CLOZE_DATA', 1)

# ── 3. Update renderProblem to handle type:'balance' ─────────────────────────
old_renderproblem = """function renderProblem() {
  const container = document.getElementById('probContainer');
  if (!container || !_probList.length) return;

  const prob = _probList[_curProbIdx];
  _probAnswered = false;
  const total = _probList.length;
  const li = LEVEL_INFO[prob.lv];
  const qHtml = prob.q.replace(/\\n/g, '<br>');

  container.innerHTML = `
    <div class="prob-card">
      <div class="prob-meta">
        <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
        <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
      </div>
      <div class="prob-q">${prob.title}</div>
      <p style="font-size:0.92rem;line-height:1.65;margin:8px 0 14px;color:var(--text)">${qHtml}</p>
      <div class="prob-input-row">
        <input type="number" id="probInput" class="prob-input" placeholder="Svar…" step="any">
        <span class="prob-unit">${prob.unit}</span>
        <button class="prob-check" id="probCheckBtn">Kontrollera</button>
      </div>
      <div class="prob-feedback" id="probFeedback"></div>
      <div class="prob-hint" id="probHintBox" style="display:none">💡 ${prob.hint}</div>
      <div class="prob-nav-row">
        <button class="prob-nav-btn" id="probHintBtn">💡 Tips</button>
        <button class="prob-nav-btn" id="probPrev" ${_curProbIdx===0?'disabled':''}>← Föregående</button>
        <button class="prob-nav-btn" id="probNext" ${_curProbIdx===total-1?'disabled':''}>Nästa →</button>
      </div>
    </div>`;

  document.getElementById('probCheckBtn').addEventListener('click', () => checkProblem(prob));
  document.getElementById('probInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkProblem(prob);
  });
  document.getElementById('probHintBtn').addEventListener('click', () => {
    const hb = document.getElementById('probHintBox');
    hb.style.display = hb.style.display === 'none' ? 'block' : 'none';
  });
  const pBtn = document.getElementById('probPrev');
  const nBtn = document.getElementById('probNext');
  if (pBtn && !pBtn.disabled) pBtn.addEventListener('click', () => { _curProbIdx--; renderProblem(); });
  if (nBtn && !nBtn.disabled) nBtn.addEventListener('click', () => { _curProbIdx++; renderProblem(); });
}"""

new_renderproblem = """function buildBalanceEqHTML(prob, interactive) {
  // Build the visual equation with input boxes for blanks
  let html = '<div class="bal-eq">';
  let globalIdx = 0;
  prob.eq.forEach((side, sideIdx) => {
    if (sideIdx === 1) html += '<span class="bal-arrow">→</span>';
    side.forEach((term, termIdx) => {
      if (termIdx > 0) html += '<span class="bal-plus">+</span>';
      const isBlank = interactive && prob.blanks.includes(globalIdx);
      if (isBlank) {
        html += `<span class="bal-term"><input class="bal-input" data-idx="${globalIdx}" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="?"><span class="bal-formula">${term.f}</span></span>`;
      } else {
        const coef = term.c === 1 ? '' : term.c;
        html += `<span class="bal-term"><span class="bal-coef">${coef}</span><span class="bal-formula">${term.f}</span></span>`;
      }
      globalIdx++;
    });
  });
  html += '</div>';
  return html;
}

function checkBalance(prob) {
  if (_probAnswered) return;
  const inputs = document.querySelectorAll('.bal-input');
  let allFilled = true;
  let allCorrect = true;

  inputs.forEach(inp => {
    const idx = parseInt(inp.dataset.idx);
    // Find correct coef for this global idx
    let globalIdx = 0;
    let correctCoef = null;
    for (const side of prob.eq) {
      for (const term of side) {
        if (globalIdx === idx) correctCoef = term.c;
        globalIdx++;
      }
    }
    const val = parseInt(inp.value);
    if (isNaN(val) || inp.value.trim() === '') { allFilled = false; return; }
    if (val === correctCoef) {
      inp.classList.add('bal-correct');
      inp.classList.remove('bal-wrong');
    } else {
      inp.classList.add('bal-wrong');
      inp.classList.remove('bal-correct');
      allCorrect = false;
    }
  });

  if (!allFilled) { showToast('Fyll i alla rutor'); return; }

  _probAnswered = true;
  const fb = document.getElementById('probFeedback');
  fb.className = 'prob-feedback show ' + (allCorrect ? 'ok' : 'fail');
  const sol = prob.steps ? prob.steps.join(' | ') : '';
  if (allCorrect) {
    fb.innerHTML = `<strong>✅ Rätt!</strong><br><small style="color:var(--green)">${sol}</small>`;
    inputs.forEach(inp => inp.disabled = true);
  } else {
    // Show correct equation
    fb.innerHTML = `<strong>❌ Inte helt rätt.</strong><br><small>Rätt svar:</small><br>` + buildBalanceEqHTML(prob, false) + `<br><small style="color:var(--text2)">${sol}</small>`;
  }
}

function renderProblem() {
  const container = document.getElementById('probContainer');
  if (!container || !_probList.length) return;

  const prob = _probList[_curProbIdx];
  _probAnswered = false;
  const total = _probList.length;
  const li = LEVEL_INFO[prob.lv];

  if (prob.type === 'balance') {
    container.innerHTML = `
      <div class="prob-card">
        <div class="prob-meta">
          <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
          <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
        </div>
        <div class="prob-q">${prob.title}</div>
        <p style="font-size:0.88rem;color:var(--text2);margin:6px 0 16px">Fyll i koefficienterna (skriv 1 om koefficienten är 1):</p>
        ${buildBalanceEqHTML(prob, true)}
        <div style="margin-top:16px">
          <button class="prob-check" id="probCheckBtn">Kontrollera</button>
        </div>
        <div class="prob-feedback" id="probFeedback"></div>
        <div class="prob-hint" id="probHintBox" style="display:none">💡 ${prob.hint}</div>
        <div class="prob-nav-row">
          <button class="prob-nav-btn" id="probHintBtn">💡 Tips</button>
          <button class="prob-nav-btn" id="probPrev" ${_curProbIdx===0?'disabled':''}>← Föregående</button>
          <button class="prob-nav-btn" id="probNext" ${_curProbIdx===total-1?'disabled':''}>Nästa →</button>
        </div>
      </div>`;
    document.getElementById('probCheckBtn').addEventListener('click', () => checkBalance(prob));
    document.querySelectorAll('.bal-input').forEach(inp => {
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkBalance(prob); });
    });
    document.getElementById('probHintBtn').addEventListener('click', () => {
      const hb = document.getElementById('probHintBox');
      hb.style.display = hb.style.display === 'none' ? 'block' : 'none';
    });
    const pBtn = document.getElementById('probPrev');
    const nBtn = document.getElementById('probNext');
    if (pBtn && !pBtn.disabled) pBtn.addEventListener('click', () => { _curProbIdx--; renderProblem(); });
    if (nBtn && !nBtn.disabled) nBtn.addEventListener('click', () => { _curProbIdx++; renderProblem(); });
    return;
  }

  const qHtml = prob.q.replace(/\\n/g, '<br>');

  container.innerHTML = `
    <div class="prob-card">
      <div class="prob-meta">
        <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
        <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
      </div>
      <div class="prob-q">${prob.title}</div>
      <p style="font-size:0.92rem;line-height:1.65;margin:8px 0 14px;color:var(--text)">${qHtml}</p>
      <div class="prob-input-row">
        <input type="number" id="probInput" class="prob-input" placeholder="Svar…" step="any">
        <span class="prob-unit">${prob.unit}</span>
        <button class="prob-check" id="probCheckBtn">Kontrollera</button>
      </div>
      <div class="prob-feedback" id="probFeedback"></div>
      <div class="prob-hint" id="probHintBox" style="display:none">💡 ${prob.hint}</div>
      <div class="prob-nav-row">
        <button class="prob-nav-btn" id="probHintBtn">💡 Tips</button>
        <button class="prob-nav-btn" id="probPrev" ${_curProbIdx===0?'disabled':''}>← Föregående</button>
        <button class="prob-nav-btn" id="probNext" ${_curProbIdx===total-1?'disabled':''}>Nästa →</button>
      </div>
    </div>`;

  document.getElementById('probCheckBtn').addEventListener('click', () => checkProblem(prob));
  document.getElementById('probInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkProblem(prob);
  });
  document.getElementById('probHintBtn').addEventListener('click', () => {
    const hb = document.getElementById('probHintBox');
    hb.style.display = hb.style.display === 'none' ? 'block' : 'none';
  });
  const pBtn = document.getElementById('probPrev');
  const nBtn = document.getElementById('probNext');
  if (pBtn && !pBtn.disabled) pBtn.addEventListener('click', () => { _curProbIdx--; renderProblem(); });
  if (nBtn && !nBtn.disabled) nBtn.addEventListener('click', () => { _curProbIdx++; renderProblem(); });
}"""

html = html.replace(old_renderproblem, new_renderproblem, 1)

# ── 4. Add CSS for balance equation display ───────────────────────────────────
old_css_marker = "  /* ── Category manage button ── */"
new_css = """  /* ── Balance equation ── */
  .bal-eq {
    display: flex; align-items: center; flex-wrap: wrap; gap: 6px;
    padding: 18px 16px; background: var(--surface2); border-radius: 14px;
    border: 1px solid var(--border); margin: 8px 0;
    font-size: 1.05rem; font-family: 'Courier New', monospace;
  }
  .bal-term { display: inline-flex; align-items: baseline; gap: 2px; }
  .bal-coef { font-size: 1.1rem; font-weight: 700; color: var(--accent); min-width: 12px; }
  .bal-formula { font-size: 1rem; font-weight: 600; color: var(--text); }
  .bal-plus, .bal-arrow { font-size: 1.1rem; font-weight: 700; color: var(--text2); padding: 0 4px; }
  .bal-arrow { color: var(--accent); font-size: 1.3rem; }
  .bal-input {
    width: 44px; height: 44px; text-align: center;
    border: 2px solid var(--accent); border-radius: 10px;
    background: var(--surface); color: var(--text);
    font-size: 1.2rem; font-weight: 700; font-family: 'Courier New', monospace;
    transition: all var(--transition); outline: none;
    box-shadow: 0 0 0 0 var(--accent);
  }
  .bal-input:focus { border-color: var(--accent2); box-shadow: 0 0 0 3px rgba(79,70,229,0.2); }
  .bal-input.bal-correct { border-color: var(--green); background: var(--green-light); color: var(--green); }
  .bal-input.bal-wrong { border-color: var(--red); background: var(--red-light); color: var(--red); animation: shake 0.3s; }
  @keyframes shake {
    0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)}
  }

  /* ── Category manage button ── */"""

html = html.replace(old_css_marker, new_css, 1)

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f'Klart! Filstorlek: {len(html)} chars / {len(html)//1024} KB')
