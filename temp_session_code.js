let ssState = {
  minutes: 45,
  tags: [],
  method: null,
  step: 1,
};

let sovState = {
  running: false,
  totalSeconds: 0,
  remainingSeconds: 0,
  timerInterval: null,
  stepIndex: 0,
  steps: [],
  results: { done: 0, correct: 0, incorrect: 0, topics: {} },
};

// ── AUTOCOMPLETE DATA ──────────────────────────────────
const SS_SUGGESTIONS = [
  'R\u00e4kneuppgifter \u2013 Alla',
  'R\u00e4kneuppgifter \u2013 Syror & baser',
  'R\u00e4kneuppgifter \u2013 Molber\u00e4kningar',
  'R\u00e4kneuppgifter \u2013 Gaser',
  'R\u00e4kneuppgifter \u2013 Termokemi',
  'R\u00e4kneuppgifter \u2013 J\u00e4mvikt',
  'R\u00e4kneuppgifter \u2013 Elektrokemi',
  'R\u00e4kneuppgifter \u2013 St\u00f6kiometri',
  'Flashcards \u2013 Alla',
  'Flashcards \u2013 Atomens byggnad',
  'Flashcards \u2013 Syror & baser',
  'Flashcards \u2013 Kemisk bindning',
  'Flashcards \u2013 Organisk kemi',
  'Flashcards \u2013 Termokemi & energi',
  'Flashcards \u2013 L\u00f6sningar & koncentration',
  'Flashcards \u2013 Biokemi',
  'Blandat \u2013 Alla \u00e4mnen',
  'Blandat \u2013 Syror & baser',
  'Blandat \u2013 Organisk kemi',
];

// ── STEP 1: Time & topic setup ─────────────────────────
function ssSetTime(mins) {
  ssState.minutes = mins;
  document.querySelectorAll('.ss-time-btn').forEach(b => b.classList.remove('active'));
  const btns = document.querySelectorAll('.ss-time-btn');
  const map = { 15: 0, 30: 1, 45: 2, 60: 3 };
  if (map[mins] !== undefined) btns[map[mins]].classList.add('active');
}

function ssAddTag(tag) {
  if (!ssState.tags.includes(tag)) {
    ssState.tags.push(tag);
    ssRenderTags();
  }
  const inp = document.getElementById('ssTopicInput');
  if (inp) inp.value = '';
  const sug = document.getElementById('ssSuggestions');
  if (sug) sug.style.display = 'none';
}

function ssRemoveTag(tag) {
  ssState.tags = ssState.tags.filter(t => t !== tag);
  ssRenderTags();
}

function ssRenderTags() {
  const el = document.getElementById('ssSelectedTags');
  if (!el) return;
  el.innerHTML = ssState.tags.map(t =>
    '<div class="ss-tag">' + t + '<button onclick="ssRemoveTag(\'' + t.replace(/'/g, "\\'") + '\')">&#215;</button></div>'
  ).join('');
}

function ssSuggest() {
  const inp = document.getElementById('ssTopicInput');
  const val = (inp ? inp.value : '').toLowerCase();
  const box = document.getElementById('ssSuggestions');
  if (!val) { if (box) box.style.display = 'none'; return; }
  const matches = SS_SUGGESTIONS.filter(s => s.toLowerCase().includes(val) && !ssState.tags.includes(s));
  if (!matches.length) { if (box) box.style.display = 'none'; return; }
  if (box) {
    box.innerHTML = matches.slice(0, 8).map(s =>
      '<div class="ss-sug-item" onclick="ssAddTag(\'' + s.replace(/'/g, "\\'") + '\')">' + s + '</div>'
    ).join('');
    box.style.display = 'block';
  }
}

function ssTagKeydown(e) {
  if (e.key === 'Enter') {
    const val = e.target.value.trim();
    if (val) { ssAddTag(val); }
  }
  if (e.key === 'Escape') {
    const sug = document.getElementById('ssSuggestions');
    if (sug) sug.style.display = 'none';
  }
}

function ssStep1Next() {
  if (ssState.tags.length === 0) {
    ssState.tags = ['Blandat \u2013 Alla \u00e4mnen'];
    ssRenderTags();
  }
  ssGoTo(2);
  ssRenderMethodCards();
}

// ── STEP 2: Method cards ────────────────────────────────
const SS_METHODS = [
  {
    id: 'active_recall',
    icon: '\uD83C\uDCCF',
    name: 'Aktiv \u00e5terkallning',
    tagline: 'Testa dig sj\u00e4lv \u2013 2\u20133x effektivare \u00e4n att l\u00e4sa om',
    badge: 'B\u00e4st f\u00f6r memorering',
    badgeClass: 'badge-memory',
    bullets: [
      'Snabbast s\u00e4tt att bef\u00e4sta flashcards',
      'Direkt feedback p\u00e5 vad du kan',
      'Skapar starka minnesspar',
    ],
    meta: 'B\u00e4st f\u00f6r: Flashcards, begrepp, formler \u00b7 Fr\u00e5n 10 min+',
    minMins: 10,
    goodFor: ['flashcard', 'alla', 'blandat', 'begrepp'],
  },
  {
    id: 'problem',
    icon: '\uD83E\uDDEE',
    name: 'Problembaserat l\u00e4rande',
    tagline: 'L\u00f6s verkliga uppgifter \u2013 tr\u00e4nar exakt det som testas',
    badge: 'B\u00e4st f\u00f6r f\u00f6rst\u00e5else',
    badgeClass: 'badge-best',
    bullets: [
      'Tr\u00e4nar exakt det som testas p\u00e5 prov',
      'Kopplar teori till praktisk r\u00e4kning',
      'Avsl\u00f6jar formelbrister direkt',
    ],
    meta: 'B\u00e4st f\u00f6r: R\u00e4kneuppgifter, st\u00f6kiometri, molber\u00e4kningar \u00b7 Fr\u00e5n 20 min+',
    minMins: 15,
    goodFor: ['r\u00e4kne', 'mol', 'problem', 'stoik', 'gas', 'termo', 'j\u00e4mv', 'elek'],
  },
  {
    id: 'feynman',
    icon: '\uD83D\uDCAC',
    name: 'Feynman-tekniken',
    tagline: 'F\u00f6rklara h\u00f6gt \u2013 avsl\u00f6jar exakt vad du inte f\u00f6rst\u00e5r',
    badge: 'B\u00e4st f\u00f6r djupf\u00f6rst\u00e5else',
    badgeClass: 'badge-best',
    bullets: [
      'Bygger djup f\u00f6rst\u00e5else, inte ytlig memorering',
      'Identifierar kunskapsluckor direkt',
      'S\u00e4rskilt effektiv f\u00f6r kemi-begrepp',
    ],
    meta: 'B\u00e4st f\u00f6r: Teori, begrepp, reaktioner \u00b7 Fr\u00e5n 20 min+',
    minMins: 20,
    goodFor: ['flashcard', 'teori', 'begrepp', 'alla', 'blandat'],
  },
  {
    id: 'interleaving',
    icon: '\uD83D\uDD00',
    name: 'Interleaving',
    tagline: 'Blanda \u00e4mnen \u2013 ger b\u00e4ttre provresultat \u00e4n blockvis plugg',
    badge: 'B\u00e4st vid blandad tr\u00e4ning',
    badgeClass: 'badge-focus',
    bullets: [
      'Tr\u00e4nar hj\u00e4rnan att k\u00e4nna igen metoder',
      'F\u00f6rhindrar falsk trygghet',
      'Ger b\u00e4ttre provresultat',
    ],
    meta: 'B\u00e4st f\u00f6r: Flera \u00e4mnen samtidigt \u00b7 B\u00e4st vid 30 min+',
    minMins: 25,
    goodFor: ['blandat', 'alla'],
  },
  {
    id: 'pomodoro',
    icon: '\uD83C\uDF45',
    name: 'Pomodoro + Aktiv \u00e5terkallning',
    tagline: 'Strukturerade fokusblock \u2013 perfekt vid exakt X minuter',
    badge: 'B\u00e4st vid tidsbrist',
    badgeClass: 'badge-time',
    bullets: [
      'Inbyggda pauser f\u00f6rhindrar utmattning',
      'Strukturerad fokustid',
      'Fungerar f\u00f6r allt material',
    ],
    meta: 'B\u00e4st f\u00f6r: Allt \u00b7 Perfekt f\u00f6r 25\u201350 min',
    minMins: 20,
    goodFor: ['alla', 'blandat', 'r\u00e4kne', 'flashcard'],
  },
];

function ssRenderMethodCards() {
  const tagsLower = ssState.tags.join(' ').toLowerCase();
  const mins = ssState.minutes;

  const scored = SS_METHODS.map(m => {
    let score = 0;
    if (m.minMins <= mins) score += 2;
    m.goodFor.forEach(kw => { if (tagsLower.includes(kw)) score += 3; });
    return Object.assign({}, m, { score: score });
  }).sort((a, b) => b.score - a.score);

  const top4 = scored.slice(0, 4);
  ssState.method = top4[0].id;

  const subtitle = document.getElementById('ssMethodSubtitle');
  if (subtitle) subtitle.textContent = 'Baserat p\u00e5 ' + mins + ' min och: ' + ssState.tags.join(', ');

  const container = document.getElementById('ssMethodCards');
  if (!container) return;

  container.innerHTML = top4.map((m, i) => [
    '<div class="ss-method-card' + (i === 0 ? ' selected' : '') + '" id="ssmc_' + m.id + '" onclick="ssSelectMethod(\'' + m.id + '\')">',
    '  <div class="ss-method-card-header">',
    '    <span class="ss-method-icon">' + m.icon + '</span>',
    '    <div>',
    '      <div class="ss-method-name">' + m.name + '</div>',
    '      <div class="ss-method-tagline">' + m.tagline + '</div>',
    '    </div>',
    '    <span class="ss-method-badge ' + m.badgeClass + '">' + m.badge + '</span>',
    '  </div>',
    '  <ul class="ss-method-bullets">',
    m.bullets.map(b => '    <li>' + b + '</li>').join('\n'),
    '  </ul>',
    '  <div class="ss-method-meta">\u23f1\ufe0f ' + m.meta + '</div>',
    '</div>',
  ].join('\n')).join('\n');
}

function ssSelectMethod(id) {
  ssState.method = id;
  document.querySelectorAll('.ss-method-card').forEach(c => c.classList.remove('selected'));
  const el = document.getElementById('ssmc_' + id);
  if (el) el.classList.add('selected');
}

// ── Navigation ─────────────────────────────────────────
function ssGoTo(step) {
  document.querySelectorAll('.ss-step').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('ssStep' + step);
  if (el) el.classList.add('active');
  ssState.step = step;
}

// ── STEP 3: Active session ─────────────────────────────
function ssStartSession() {
  if (!ssState.method) { showToast('V\u00e4lj en studieteknik', 'warning'); return; }

  const steps = ssBuildSteps(ssState.method, ssState.tags, ssState.minutes);
  if (!steps.length) { showToast('Hittade inget material f\u00f6r de valda \u00e4mnena.', 'warning'); return; }

  sovState.running = true;
  sovState.totalSeconds = ssState.minutes * 60;
  sovState.remainingSeconds = ssState.minutes * 60;
  sovState.stepIndex = 0;
  sovState.steps = steps;
  sovState.results = { done: 0, correct: 0, incorrect: 0, topics: {} };

  const overlay = document.getElementById('sessionOverlay');
  if (overlay) overlay.style.display = 'flex';

  const nav = document.querySelector('nav.navbar, nav, .navbar');
  if (nav) nav.style.display = 'none';

  if (sovState.timerInterval) clearInterval(sovState.timerInterval);
  sovState.timerInterval = setInterval(sovTimerTick, 1000);

  sovRenderStep();
  sovUpdateHeader();

  try {
    if (typeof getSession === 'function' && getSession()) {
      const ud = getUserData();
      if (ud) {
        ud.sessions = ud.sessions || [];
        ud._sessionStart = Date.now();
        saveUserData(ud);
      }
    }
  } catch(e) {}
}

function ssBuildSteps(method, tags, minutes) {
  const steps = [];
  const tagsLower = tags.join(' ').toLowerCase();

  const wantProblems = tagsLower.includes('r\u00e4kne') || tagsLower.includes('problem') ||
                       tagsLower.includes('mol') || tagsLower.includes('blandat') || tagsLower.includes('alla');
  const wantCards = tagsLower.includes('flashcard') || tagsLower.includes('begrepp') ||
                    tagsLower.includes('blandat') || tagsLower.includes('alla');

  const cardsCatMap = {
    'syror': ['Syror & baser', 'Vanliga syror & baser'],
    'mol': ['Reaktioner & stökiometri'],
    'stoik': ['Reaktioner & stökiometri'],
    'gas': ['Termokemi & energi'],
    'termo': ['Termokemi & energi'],
    'jämv': ['Reaktioner & stökiometri'],
    'elek': ['Redox & elektrokemi'],
    'organ': ['Organisk kemi'],
    'atom': ['Atomens byggnad'],
    'bindning': ['Kemisk bindning'],
    'lösnin': ['Lösningar & koncentration'],
    'bioke': ['Biokemi'],
  };
  const problemsCatMap = {
    'syror': ['syrabas'],
    'mol': ['mol', 'stoik'],
    'stoik': ['stoik', 'bal'],
    'gas': ['gas'],
    'termo': ['termo'],
    'jämv': ['jamvikt'],
    'elek': ['elkem'],
    'konc': ['konc'],
    'lösnin': ['konc'],
  };
  let filteredCardsCats = new Set();
  let filteredProbCats = new Set();
  Object.keys(cardsCatMap).forEach(function(kw) {
    if (tagsLower.includes(kw)) cardsCatMap[kw].forEach(function(c) { filteredCardsCats.add(c); });
  });
  Object.keys(problemsCatMap).forEach(function(kw) {
    if (tagsLower.includes(kw)) problemsCatMap[kw].forEach(function(c) { filteredProbCats.add(c); });
  });

  let problems = typeof PROBLEMS !== 'undefined' ? PROBLEMS : [];
  if (filteredProbCats.size > 0) problems = problems.filter(p => filteredProbCats.has(p.cat));
  problems = problems.slice().sort(() => Math.random() - 0.5);

  let cards = typeof CARDS !== 'undefined' ? CARDS : [];
  if (filteredCardsCats.size > 0) cards = cards.filter(c => filteredCardsCats.has(c.cat));
  cards = cards.slice().sort(() => Math.random() - 0.5);

  const estStepsPerMin = method === 'feynman' ? 0.5 : method === 'problem' ? 0.7 : 2;
  const maxSteps = Math.max(5, Math.round(minutes * estStepsPerMin));

  if (method === 'active_recall') {
    cards.slice(0, maxSteps).forEach(c => steps.push({ type: 'recall', card: c }));
    if (steps.length > 4) steps.splice(Math.floor(steps.length / 2), 0, { type: 'recall_summary' });

  } else if (method === 'feynman') {
    cards.slice(0, Math.min(maxSteps, 8)).forEach(c => steps.push({ type: 'feynman', card: c }));

  } else if (method === 'problem') {
    problems.slice(0, maxSteps).forEach(p => steps.push({ type: 'problem', problem: p }));

  } else if (method === 'interleaving') {
    const mixed = [];
    const pPool = problems.slice(0, maxSteps);
    const cPool = cards.slice(0, maxSteps);
    const total = Math.min(maxSteps, pPool.length + cPool.length);
    let pi = 0; let ci = 0;
    for (let i = 0; i < total; i++) {
      if (pi < pPool.length && (ci >= cPool.length || i % 3 !== 2)) {
        mixed.push({ type: 'problem', problem: pPool[pi++] });
      } else if (ci < cPool.length) {
        mixed.push({ type: 'recall', card: cPool[ci++] });
      }
    }
    mixed.sort(() => Math.random() - 0.5);
    mixed.forEach(s => steps.push(s));

  } else if (method === 'pomodoro') {
    steps.push({ type: 'pomo_work_start', duration: 25 * 60 });
    cards.slice(0, Math.round(maxSteps * 0.6)).forEach(c => steps.push({ type: 'recall', card: c }));
    problems.slice(0, Math.round(maxSteps * 0.4)).forEach(p => steps.push({ type: 'problem', problem: p }));
    if (minutes > 30) steps.push({ type: 'pomo_break', duration: 5 * 60 });
  }

  steps.push({ type: 'session_end' });
  return steps;
}

// ── Session rendering ───────────────────────────────────
function sovRenderStep() {
  const content = document.getElementById('sovContent');
  if (!content) return;

  const step = sovState.steps[sovState.stepIndex];
  if (!step) { ssEndSession(false); return; }

  sovUpdateHeader();

  if (step.type === 'recall') sovRenderRecall(step.card);
  else if (step.type === 'recall_summary') sovRenderRecallSummary();
  else if (step.type === 'feynman') sovRenderFeynman(step.card);
  else if (step.type === 'problem') sovRenderProblem(step.problem);
  else if (step.type === 'pomo_work_start') sovRenderPomoStart();
  else if (step.type === 'pomo_break') sovRenderPomoBreak();
  else if (step.type === 'session_end') ssEndSession(false);
}

function sovNext() {
  sovState.stepIndex++;
  sovState.results.done++;
  const content = document.getElementById('sovContent');
  if (content) content.scrollTop = 0;
  sovRenderStep();
}

function sovUpdateHeader() {
  const total = sovState.steps.filter(s => !['recall_summary','pomo_work_start','pomo_break','session_end'].includes(s.type)).length;
  const done = sovState.results.done;
  const pct = total > 0 ? Math.min(100, Math.round(done / total * 100)) : 0;

  const bar = document.getElementById('sovProgressBar');
  if (bar) bar.style.width = pct + '%';

  const label = document.getElementById('sovStepLabel');
  if (label) {
    const methodObj = SS_METHODS.find(m => m.id === ssState.method);
    const methodName = methodObj ? methodObj.name : 'Session';
    label.textContent = methodName + ' \u00b7 Uppgift ' + (done + 1) + ' av ' + total;
  }
}

function sovTimerTick() {
  if (!sovState.running) return;
  sovState.remainingSeconds--;
  const m = Math.floor(sovState.remainingSeconds / 60);
  const s = sovState.remainingSeconds % 60;
  const el = document.getElementById('sovTimer');
  if (el) el.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  if (sovState.remainingSeconds <= 0) ssEndSession(false);
}

// ── Render: Active Recall ──────────────────────────────
function sovRenderRecall(card) {
  const content = document.getElementById('sovContent');
  if (!content || !card) return;

  const catShort = card.cat ? card.cat.split('&')[0].trim() : '';
  const question = card.q || card.term || '';
  const answer = card.a || card.def || '';
  const cardId = card.id || 0;

  content.innerHTML = [
    '<div style="font-size:0.75rem;color:var(--text2);margin-bottom:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">' + catShort + ' \u00b7 Lv ' + (card.lv || 1) + '</div>',
    '<div class="sov-flashcard" id="sovCard">',
    '  <div class="fc-q">' + question + '</div>',
    '</div>',
    '<button class="sov-action-btn" id="sovShowAnswerBtn" onclick="sovRevealRecallAnswer(' + cardId + ')">Visa svar</button>',
    '<div id="sovAnswerSection" style="display:none;">',
    '  <div class="sov-reveal-box">',
    '    <h4>Svar</h4>',
    '    <p>' + answer + '</p>',
    '  </div>',
    '  <div class="sov-rating-row">',
    '    <button class="sov-rating-btn sov-rating-fail" onclick="sovRateRecall(' + cardId + ',0)">\u274c Kunde inte</button>',
    '    <button class="sov-rating-btn sov-rating-unsure" onclick="sovRateRecall(' + cardId + ',1)">\uD83E\uDD14 Os\u00e4ker</button>',
    '    <button class="sov-rating-btn sov-rating-knew" onclick="sovRateRecall(' + cardId + ',2)">\u2705 Kunde</button>',
    '  </div>',
    '</div>',
  ].join('\n');
}

function sovRevealRecallAnswer(cardId) {
  const ans = document.getElementById('sovAnswerSection');
  const btn = document.getElementById('sovShowAnswerBtn');
  if (ans) ans.style.display = 'block';
  if (btn) btn.style.display = 'none';
}

function sovRateRecall(cardId, rating) {
  try {
    if (typeof getUserData === 'function' && typeof saveUserData === 'function') {
      const ud = getUserData();
      if (ud && ud.leitner !== undefined) {
        const cid = parseInt(cardId);
        if (!ud.leitner[cid]) ud.leitner[cid] = { box: 0, nextReview: 0, history: [] };
        const lc = ud.leitner[cid];
        if (rating === 0) { lc.box = 0; lc.nextReview = Date.now() + 86400000; }
        else if (rating === 2) { lc.box = Math.min(lc.box + 1, 4); lc.nextReview = Date.now() + [1,3,7,14,30][lc.box] * 86400000; }
        lc.history = lc.history || [];
        lc.history.push({ date: Date.now(), rating: rating });
        if (lc.history.length > 50) lc.history = lc.history.slice(-50);
        saveUserData(ud);
      }
    }
  } catch(e) {}

  if (rating >= 1) sovState.results.correct++;
  else sovState.results.incorrect++;

  if (rating === 0 && sovState.steps.length < 50) {
    const currentStep = sovState.steps[sovState.stepIndex];
    const insertAt = Math.min(sovState.stepIndex + 3, sovState.steps.length - 1);
    sovState.steps.splice(insertAt, 0, { type: 'recall', card: currentStep.card });
  }

  sovNext();
}

// ── Render: Recall summary ─────────────────────────────
function sovRenderRecallSummary() {
  const content = document.getElementById('sovContent');
  if (!content) return;
  const total = sovState.results.correct + sovState.results.incorrect;
  const pct = total > 0 ? Math.round(sovState.results.correct / total * 100) : 0;
  const emoji = pct >= 70 ? '\uD83D\uDD25' : pct >= 40 ? '\uD83D\uDCAA' : '\uD83D\uDCDA';
  content.innerHTML = [
    '<div class="sov-mini-summary">',
    '  <div style="font-size:1.8rem;margin-bottom:8px;">' + emoji + '</div>',
    '  <div style="font-size:1.2rem;font-weight:800;color:var(--accent);">' + pct + '% r\u00e4tt hittills</div>',
    '  <div style="font-size:0.85rem;color:var(--text2);margin-top:4px;">Du kan ' + sovState.results.correct + ' av ' + total + ' begrepp</div>',
    '  <div style="font-size:0.8rem;color:var(--text2);margin-top:8px;">Forts\u00e4tt \u2013 svaga kort\u00e5terkommer!</div>',
    '</div>',
    '<button class="sov-action-btn" onclick="sovNext()">Forts\u00e4tt sessionen &#8594;</button>',
  ].join('\n');
}

// ── Render: Feynman ────────────────────────────────────
function sovRenderFeynman(card) {
  const content = document.getElementById('sovContent');
  if (!content || !card) return;
  const question = card.q || card.term || 'Begrepp';
  const answer = card.a || card.def || '';
  const cardId = card.id || 0;
  content.innerHTML = [
    '<div class="sov-concept-title">' + question + '</div>',
    '<div class="sov-instruction">\u270f\ufe0f F\u00f6rklara detta med egna ord, som om du l\u00e4r ut till en 12-\u00e5ring. Skriv din f\u00f6rklaring nedan.</div>',
    '<textarea class="sov-textarea" id="sovFeynmanText" placeholder="Skriv din f\u00f6rklaring h\u00e4r..."></textarea>',
    '<button class="sov-action-btn" id="sovFeynmanRevealBtn" onclick="sovRevealFeynman(' + cardId + ')">Visa modellsvar &#8594;</button>',
    '<div id="sovFeynmanReveal" style="display:none;">',
    '  <div class="sov-reveal-box">',
    '    <h4>Modellsvar</h4>',
    '    <p>' + answer + '</p>',
    '  </div>',
    '  <div style="margin-top:14px;font-size:0.9rem;font-weight:600;">Vad missade du?</div>',
    '  <div style="display:flex;gap:8px;margin-top:8px;">',
    '    <button class="sov-rating-btn sov-rating-fail" style="flex:1" onclick="sovRateFeynman(0)">Mycket att l\u00e4ra</button>',
    '    <button class="sov-rating-btn sov-rating-unsure" style="flex:1" onclick="sovRateFeynman(1)">Ungef\u00e4r r\u00e4tt</button>',
    '    <button class="sov-rating-btn sov-rating-knew" style="flex:1" onclick="sovRateFeynman(2)">F\u00f6rklarade bra</button>',
    '  </div>',
    '</div>',
  ].join('\n');
}

function sovRevealFeynman(cardId) {
  const rev = document.getElementById('sovFeynmanReveal');
  const btn = document.getElementById('sovFeynmanRevealBtn');
  if (rev) rev.style.display = 'block';
  if (btn) btn.style.display = 'none';
}

function sovRateFeynman(rating) {
  if (rating >= 1) sovState.results.correct++;
  else sovState.results.incorrect++;
  sovNext();
}

// ── Render: Problem ────────────────────────────────────
function sovRenderProblem(problem) {
  const content = document.getElementById('sovContent');
  if (!content || !problem) return;

  const questionText = problem.q || (problem.steps && problem.steps[0]) || ('Uppgift ' + problem.id + ' \u2013 ' + (problem.cat || ''));
  const stepsHtml = (problem.steps || []).map(s => '<li>' + s + '</li>').join('');

  content.innerHTML = [
    '<div style="font-size:0.75rem;color:var(--text2);margin-bottom:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">' + (problem.cat || '') + ' \u00b7 Niv\u00e5 ' + (problem.lv || 1) + '</div>',
    '<div class="sov-problem-box">',
    '  <div class="sov-problem-text">' + questionText + '</div>',
    '</div>',
    '<button class="sov-action-btn" id="sovShowSolutionBtn" onclick="sovRevealProblem()">Visa l\u00f6sning &#8594;</button>',
    '<div id="sovSolutionSection" style="display:none;">',
    '  <div class="sov-reveal-box">',
    '    <h4>Svar: ' + (problem.ans !== undefined ? problem.ans : '') + (problem.unit ? ' ' + problem.unit : '') + '</h4>',
    stepsHtml ? '    <ul class="sov-steps-list">' + stepsHtml + '</ul>' : '',
    '  </div>',
    '  <div style="margin-top:14px;font-size:0.9rem;font-weight:600;">Hur gick det?</div>',
    '  <div class="sov-rating-row">',
    '    <button class="sov-rating-btn sov-rating-fail" onclick="sovRateProblem(0)">\u274c F\u00f6rst\u00f6d inte</button>',
    '    <button class="sov-rating-btn sov-rating-unsure" onclick="sovRateProblem(1)">\uD83E\uDD14 Delvis</button>',
    '    <button class="sov-rating-btn sov-rating-knew" onclick="sovRateProblem(2)">\u2705 F\u00f6rst\u00f6d allt</button>',
    '  </div>',
    '</div>',
  ].join('\n');
}

function sovRevealProblem() {
  const sol = document.getElementById('sovSolutionSection');
  const btn = document.getElementById('sovShowSolutionBtn');
  if (sol) sol.style.display = 'block';
  if (btn) btn.style.display = 'none';
}

function sovRateProblem(rating) {
  if (rating >= 1) sovState.results.correct++;
  else sovState.results.incorrect++;
  sovNext();
}

// ── Render: Pomodoro ───────────────────────────────────
function sovRenderPomoStart() {
  const content = document.getElementById('sovContent');
  if (!content) return;
  content.innerHTML = [
    '<div style="text-align:center;padding:20px 0;">',
    '  <div style="font-size:3rem;margin-bottom:12px;">\uD83C\uDF45</div>',
    '  <div style="font-size:1.3rem;font-weight:800;">Fokusblock startar!</div>',
    '  <div style="color:var(--text2);font-size:0.9rem;margin:8px 0 20px;">25 minuter koncentrerat pluggande. Du klarar det!</div>',
    '</div>',
    '<button class="sov-action-btn" onclick="sovNext()">Starta fokusblocket &#8594;</button>',
  ].join('\n');
}

function sovRenderPomoBreak() {
  const content = document.getElementById('sovContent');
  if (!content) return;
  let breakSecs = 5 * 60;
  content.innerHTML = [
    '<div style="text-align:center;padding:20px 0;">',
    '  <div style="font-size:3rem;margin-bottom:12px;">\u2615</div>',
    '  <div style="font-size:1.3rem;font-weight:800;">Obligatorisk paus!</div>',
    '  <div style="color:var(--text2);font-size:0.9rem;margin:8px 0 16px;">Titta bort fr\u00e5n sk\u00e4rmen. Ta ett glas vatten.</div>',
    '  <div id="sovBreakTimer" style="font-size:2rem;font-weight:800;color:var(--accent);">5:00</div>',
    '</div>',
    '<button class="sov-action-btn" id="sovSkipBreak" onclick="sovNext()">Hoppa \u00f6ver paus &#8594;</button>',
  ].join('\n');
  const t = setInterval(function() {
    breakSecs--;
    const el = document.getElementById('sovBreakTimer');
    if (el) el.textContent = Math.floor(breakSecs / 60) + ':' + String(breakSecs % 60).padStart(2, '0');
    if (breakSecs <= 0) { clearInterval(t); sovNext(); }
  }, 1000);
}

// ── Session end ─────────────────────────────────────────
function ssEndSession(manual) {
  sovState.running = false;
  if (sovState.timerInterval) { clearInterval(sovState.timerInterval); sovState.timerInterval = null; }

  const elapsed = ssState.minutes - Math.floor(sovState.remainingSeconds / 60);

  try {
    if (typeof getSession === 'function' && getSession()) {
      const ud = getUserData();
      ud.sessions = ud.sessions || [];
      ud.sessions.push({ date: dateStr(new Date()), duration: Math.max(1, elapsed), cards: sovState.results.correct });
      ud.totalMinutes = (ud.totalMinutes || 0) + Math.max(1, elapsed);
      const today = dateStr(new Date());
      ud.weeklyData = ud.weeklyData || {};
      ud.weeklyData[today] = (ud.weeklyData[today] || 0) + Math.max(1, elapsed);
      if (ud.sessions.length > 60) ud.sessions = ud.sessions.slice(-60);
      saveUserData(ud);
      if (typeof updateStreak === 'function') updateStreak();
    }
  } catch(e) {}

  const content = document.getElementById('sovContent');
  if (content) {
    const total = sovState.results.correct + sovState.results.incorrect;
    const pct = total > 0 ? Math.round(sovState.results.correct / total * 100) : 0;
    const emoji = pct >= 80 ? '\uD83C\uDFC6' : pct >= 60 ? '\uD83C\uDF89' : pct >= 40 ? '\uD83D\uDCAA' : '\uD83D\uDCDA';
    const msg = pct >= 80 ? 'Utm\u00e4rkt session \u2013 du beh\u00e4rskar materialet!' :
                pct >= 60 ? 'Bra jobbat! Konsistens \u00e4r nyckeln.' :
                pct >= 40 ? 'Solid session. Forts\u00e4tt repetera svaga delar.' :
                'Bra start! Varje session tar dig fram\u00e5t.';

    content.innerHTML = [
      '<div class="sov-end-card">',
      '  <div class="sov-end-emoji">' + emoji + '</div>',
      '  <div class="sov-end-title">Session klar!</div>',
      '  <div class="sov-end-msg">' + msg + '</div>',
      '  <div class="sov-stats-grid">',
      '    <div class="sov-stat-cell"><div class="sov-stat-val">' + Math.max(1, elapsed) + '</div><div class="sov-stat-label">Minuter pluggat</div></div>',
      '    <div class="sov-stat-cell"><div class="sov-stat-val">' + sovState.results.done + '</div><div class="sov-stat-label">Uppgifter genomf\u00f6rda</div></div>',
      '    <div class="sov-stat-cell"><div class="sov-stat-val" style="color:#22c55e;">' + sovState.results.correct + '</div><div class="sov-stat-label">R\u00e4tt / F\u00f6rst\u00f6d</div></div>',
      '    <div class="sov-stat-cell"><div class="sov-stat-val" style="color:#ef4444;">' + sovState.results.incorrect + '</div><div class="sov-stat-label">Att \u00f6va mer</div></div>',
      '  </div>',
      sovState.results.incorrect > 0 ? '  <div class="sov-areas"><div class="sov-area-row"><div class="sov-area-dot weak"></div><span>Repetera svaga delar i n\u00e4sta session</span></div></div>' : '',
      '  <button class="sov-action-btn" onclick="ssNewSession()">\uD83D\uDD04 Starta ny session</button>',
      '  <button class="sov-secondary-btn" onclick="ssDone()">\u2713 Avsluta f\u00f6r idag</button>',
      '</div>',
    ].join('\n');

    const timerEl = document.getElementById('sovTimer');
    if (timerEl) timerEl.textContent = '0:00';
  }
}

function ssNewSession() {
  ssState.tags = [];
  ssState.method = null;
  ssRenderTags();
  ssGoTo(1);

  const overlay = document.getElementById('sessionOverlay');
  if (overlay) overlay.style.display = 'none';
  const nav = document.querySelector('nav.navbar, nav, .navbar');
  if (nav) nav.style.display = '';
}

function ssDone() {
  const overlay = document.getElementById('sessionOverlay');
  if (overlay) overlay.style.display = 'none';
  const nav = document.querySelector('nav.navbar, nav, .navbar');
  if (nav) nav.style.display = '';
  navTo('homeScreen');
  showToast('Bra jobbat idag! \uD83C\uDF89', 'success');
}

// ── Init: attach to nav button ─────────────────────────
(function() {
  document.querySelectorAll('.nav-btn').forEach(function(btn) {
    if (btn.dataset.target === 'planScreen') {
      btn.addEventListener('click', function() {
        ssGoTo(1);
        ssRenderTags();
      });
    }
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.ss-tag-input-wrap')) {
      const sug = document.getElementById('ssSuggestions');
      if (sug) sug.style.display = 'none';
    }
  });
})();




// ═══════════════════════════════════════════════════════════════════════════
//  STUDY SYSTEM – Added by build_study_system.py
// ═══════════════════════════════════════════════════════════════════════════

// ── 1. DATA MODEL ──────────────────────────────────────────────────────────

const LEITNER_INTERVALS = [1, 3, 7, 14, 30]; // days per box 0-4

const EMPTY_USER_DATA = () => ({
  leitner: {},        // { [cardId]: { box, nextReview, history } }
  sessions: [],       // [{ date, duration, cards, topics }]
  streak: { current: 0, max: 0, lastDate: '' },
  totalMinutes: 0,
  studyPlan: null,
  pomoCounts: 0,
  pomoSettings: { work: 25, breakTime: 5 },
  weeklyData: {},     // { 'YYYY-MM-DD': minutes }
  seenToday: [],
});

// ── 2. AUTH ────────────────────────────────────────────────────────────────

async function hashPassword(pass) {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(pass + 'kemi1_salt_2024');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch (e) {
    // Fallback for environments without SubtleCrypto
    let h = 0;
    for (let i = 0; i < pass.length; i++) h = (Math.imul(31, h) + pass.charCodeAt(i)) | 0;
    return 'fallback_' + Math.abs(h).toString(16);
  }
}

function getUsers() {
  try { return JSON.parse(localStorage.getItem('kemi1_users') || '{}'); } catch { return {}; }
}
function saveUsers(u) { localStorage.setItem('kemi1_users', JSON.stringify(u)); }

function getSession() {
  try {
    const s = JSON.parse(localStorage.getItem('kemi1_session') || 'null');
    if (!s) return null;
    if (s.expiresAt && Date.now() > s.expiresAt) { localStorage.removeItem('kemi1_session'); return null; }
    return s.username || null;
  } catch { return null; }
}

function setSession(username, remember) {
  const expiresAt = remember ? Date.now() + 30 * 24 * 60 * 60 * 1000 : null;
  localStorage.setItem('kemi1_session', JSON.stringify({ username, expiresAt }));
}

function getUserData() {
  const user = getSession();
  if (!user) return EMPTY_USER_DATA();
  try {
    const raw = localStorage.getItem('kemi1_ud_' + user);
    if (!raw) return EMPTY_USER_DATA();
    const d = JSON.parse(raw);
    // Ensure all fields exist
    const empty = EMPTY_USER_DATA();
    return Object.assign(empty, d);
  } catch { return EMPTY_USER_DATA(); }
}

function saveUserData(data) {
  const user = getSession();
  if (!user) return;
  localStorage.setItem('kemi1_ud_' + user, JSON.stringify(data));
}

function openAuth() {
  document.getElementById('authBackdrop').style.display = 'flex';
  document.getElementById('authLoginUser').value = '';
  document.getElementById('authLoginPass').value = '';
  document.getElementById('authLoginError').textContent = '';
}

function closeAuth() {
  document.getElementById('authBackdrop').style.display = 'none';
}

function authSwitchTab(tab) {
  const loginForm = document.getElementById('authFormLogin');
  const regForm = document.getElementById('authFormReg');
  const tabLogin = document.getElementById('authTabLogin');
  const tabReg = document.getElementById('authTabReg');
  if (tab === 'login') {
    loginForm.style.display = '';
    regForm.style.display = 'none';
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
  } else {
    loginForm.style.display = 'none';
    regForm.style.display = '';
    tabLogin.classList.remove('active');
    tabReg.classList.add('active');
  }
}

async function authRegister() {
  const username = document.getElementById('authRegUser').value.trim();
  const pass = document.getElementById('authRegPass').value;
  const pass2 = document.getElementById('authRegPass2').value;
  const errEl = document.getElementById('authRegError');
  errEl.textContent = '';

  if (!username || username.length < 2) { errEl.textContent = 'Användarnamnet måste vara minst 2 tecken.'; return; }
  if (username.length > 32) { errEl.textContent = 'Användarnamnet får max vara 32 tecken.'; return; }
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) { errEl.textContent = 'Bara bokstäver, siffror, _ och - är tillåtna.'; return; }
  if (pass.length < 4) { errEl.textContent = 'Lösenordet måste vara minst 4 tecken.'; return; }
  if (pass !== pass2) { errEl.textContent = 'Lösenorden matchar inte.'; return; }

  const users = getUsers();
  if (users[username]) { errEl.textContent = 'Det användarnamnet är redan taget.'; return; }

  try {
    const hash = await hashPassword(pass);
    users[username] = { hash, createdAt: Date.now() };
    saveUsers(users);
    setSession(username, false);
    closeAuth();
    updateAuthUI();
    showToast('[PARTY] Välkommen ' + username + '! Konto skapat.', 'success');
  } catch (e) {
    errEl.textContent = 'Ett fel uppstod. Försök igen.';
  }
}

async function authLogin() {
  const username = document.getElementById('authLoginUser').value.trim();
  const pass = document.getElementById('authLoginPass').value;
  const remember = document.getElementById('authRemember').checked;
  const errEl = document.getElementById('authLoginError');
  errEl.textContent = '';

  if (!username || !pass) { errEl.textContent = 'Fyll i användarnamn och lösenord.'; return; }

  const users = getUsers();
  if (!users[username]) { errEl.textContent = 'Fel användarnamn eller lösenord.'; return; }

  try {
    const hash = await hashPassword(pass);
    if (hash !== users[username].hash) { errEl.textContent = 'Fel användarnamn eller lösenord.'; return; }
    setSession(username, remember);
    closeAuth();
    updateAuthUI();
    showToast('👋 Välkommen tillbaka, ' + username + '!', 'success');
    checkDueCards();
  } catch (e) {
    errEl.textContent = 'Ett fel uppstod. Försök igen.';
  }
}

function authLogout() {
  localStorage.removeItem('kemi1_session');
  updateAuthUI();
  showToast('Du har loggat ut.', 'info');
  navTo('homeScreen');
}

async function changePassword() {
  const user = getSession();
  if (!user) return;
  const p1 = document.getElementById('newPassInput').value;
  const p2 = document.getElementById('newPassInput2').value;
  const errEl = document.getElementById('changePassError');
  errEl.textContent = '';
  if (p1.length < 4) { errEl.textContent = 'Minst 4 tecken.'; return; }
  if (p1 !== p2) { errEl.textContent = 'Lösenorden matchar inte.'; return; }
  try {
    const hash = await hashPassword(p1);
    const users = getUsers();
    if (users[user]) { users[user].hash = hash; saveUsers(users); }
    showToast('Lösenord uppdaterat!', 'success');
    document.getElementById('newPassInput').value = '';
    document.getElementById('newPassInput2').value = '';
  } catch (e) {
    errEl.textContent = 'Fel uppstod.';
  }
}

function updateAuthUI() {
  const user = getSession();
  const headerActions = document.getElementById('headerActionsDiv');
  let badge = document.getElementById('userBadgeBtn');

  if (user) {
    // Show user badge
    if (!badge) {
      badge = document.createElement('button');
      badge.id = 'userBadgeBtn';
      badge.className = 'user-badge';
      badge.onclick = () => navTo('profileScreen');
      headerActions.insertBefore(badge, headerActions.firstChild);
    }
    const initials = user.substring(0, 2).toUpperCase();
    badge.innerHTML = '<div class="user-avatar">' + initials + '</div><span>' + user + '</span>';
    badge.style.display = 'flex';

    // Hide guest banner
    const gb = document.getElementById('guestBanner');
    if (gb) gb.style.display = 'none';

    // Show change password section
    const cps = document.getElementById('changePassSection');
    if (cps) cps.style.display = '';
  } else {
    if (badge) badge.style.display = 'none';
    const gb = document.getElementById('guestBanner');
    if (gb) gb.style.display = '';
    const cps = document.getElementById('changePassSection');
    if (cps) cps.style.display = 'none';
  }
}

function confirmResetProgress() {
  if (confirm('Återställ all SR-data och sessioner? Detta kan inte ångras.')) {
    const user = getSession();
    if (user) {
      localStorage.removeItem('kemi1_ud_' + user);
    }
    showToast('Framsteg återställda.', 'info');
    renderProfile();
  }
}

// ── 3. LEITNER / SPACED REPETITION ────────────────────────────────────────

function getLeitnerCard(cardId) {
  const ud = getUserData();
  if (!ud.leitner[cardId]) {
    ud.leitner[cardId] = { box: 0, nextReview: 0, history: [] };
  }
  return ud.leitner[cardId];
}

function rateCard(cardId, rating) {
  // rating: 0=fail, 1=unsure, 2=knew
  const ud = getUserData();
  if (!ud.leitner[cardId]) ud.leitner[cardId] = { box: 0, nextReview: 0, history: [] };
  const lc = ud.leitner[cardId];

  if (rating === 0) {
    lc.box = 0;
    lc.nextReview = Date.now() + LEITNER_INTERVALS[0] * 86400000;
  } else if (rating === 1) {
    // Stay in same box, review again after same interval
    const interval = LEITNER_INTERVALS[Math.min(lc.box, 4)];
    lc.nextReview = Date.now() + interval * 86400000;
  } else {
    // Advance box
    lc.box = Math.min(lc.box + 1, 4);
    lc.nextReview = Date.now() + LEITNER_INTERVALS[lc.box] * 86400000;
  }

  lc.history.push({ date: Date.now(), rating });
  if (lc.history.length > 50) lc.history = lc.history.slice(-50);

  // Track consecutive streak
  if (rating === 2) {
    srConsecutive = (srConsecutive || 0) + 1;
    if (srConsecutive === 3) showToast('🔥 3 rätt i rad! Du behärskar det här!', 'success');
    else if (srConsecutive === 5) showToast('🌟 5 i rad – utmärkt!', 'success');
  } else {
    if (rating === 0) showToast('💡 Det här kortet kommer tillbaka snart – så funkar inlärning!', 'info');
    srConsecutive = 0;
  }

  // Update session tracking
  sessionState.cardsSeenThisSession.add(cardId);
  if (!ud.seenToday) ud.seenToday = [];
  if (!ud.seenToday.includes(cardId)) ud.seenToday.push(cardId);

  saveUserData(ud);

  // Auto-advance to next card
  const existingRating = document.getElementById('srRatingRow');
  if (existingRating) existingRating.remove();

  // Reset card and advance
  const wrap = document.getElementById('cardWrap');
  if (wrap && wrap.classList.contains('flipped')) {
    wrap.classList.remove('flipped');
    session.flipped = false;
    document.getElementById('btnCorrect').disabled = true;
    document.getElementById('btnWrong').disabled = true;
  }
  setTimeout(() => { markAnswer(rating >= 1); }, 100);
}

let srConsecutive = 0;

function getDueCards() {
  const ud = getUserData();
  const now = Date.now();
  const todayStr = dateStr(new Date());
  return CARDS.filter(c => {
    const lc = ud.leitner[c.id];
    if (!lc) return true; // Never seen = due
    if (lc.box >= 4 && lc.nextReview > now) return false; // Mastered, not due
    return lc.nextReview <= now;
  }).map(c => c.id);
}

function getLeitnerStats() {
  const ud = getUserData();
  const stats = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
  CARDS.forEach(c => {
    const lc = ud.leitner[c.id];
    const box = lc ? Math.min(lc.box, 4) : 0;
    stats[box]++;
  });
  return stats;
}

function injectSRRatingUI() {
  // Remove existing if present
  const existing = document.getElementById('srRatingRow');
  if (existing) existing.remove();

  const currentCard = session.queue && session.queue[session.idx - 1];
  if (!currentCard) return;

  const ratingDiv = document.createElement('div');
  ratingDiv.className = 'sr-rating';
  ratingDiv.id = 'srRatingRow';
  ratingDiv.innerHTML = `
    <button class="sr-btn sr-fail" onclick="rateCard(${currentCard.id}, 0)">&#10060; Kunde inte</button>
    <button class="sr-btn sr-unsure" onclick="rateCard(${currentCard.id}, 1)">&#129300; Osäker</button>
    <button class="sr-btn sr-knew" onclick="rateCard(${currentCard.id}, 2)">&#9989; Kunde</button>
  `;

  const flipMode = document.getElementById('flipMode');
  if (flipMode) {
    const flipActions = flipMode.querySelector('.flip-actions');
    if (flipActions) {
      flipActions.insertAdjacentElement('afterend', ratingDiv);
    } else {
      flipMode.appendChild(ratingDiv);
    }
  }
}

function checkDueCards() {
  const due = getDueCards();
  if (due.length > 0) {
    showToast('📚 Du har ' + due.length + ' begrepp att repetera idag!', 'info', 5000);
  }
}

// ── 4. POMODORO ────────────────────────────────────────────────────────────

let pomoState = {
  running: false,
  totalSeconds: 25 * 60,
  remainingSeconds: 25 * 60,
  isBreak: false,
  sessionPomos: 0,
};
let pomoInterval = null;

function showPomoWidget(show) {
  const w = document.getElementById('pomoWidget');
  if (w) w.style.display = show ? 'flex' : 'none';
}

function updatePomoDisplay() {
  const mins = Math.floor(pomoState.remainingSeconds / 60);
  const secs = pomoState.remainingSeconds % 60;
  const timeStr = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  const timeEl = document.getElementById('pomoTime');
  if (timeEl) timeEl.textContent = timeStr;

  const circle = document.getElementById('pomoCircle');
  if (circle) {
    const circumference = 2 * Math.PI * 15.9;
    const fraction = pomoState.remainingSeconds / pomoState.totalSeconds;
    const dashoffset = circumference * (1 - fraction);
    circle.style.strokeDasharray = circumference.toFixed(2);
    circle.style.strokeDashoffset = dashoffset.toFixed(2);
    if (pomoState.isBreak) circle.classList.add('break-mode');
    else circle.classList.remove('break-mode');
  }

  const labelEl = document.getElementById('pomoLabel');
  if (labelEl) labelEl.textContent = pomoState.isBreak ? 'Paus' : 'Fokus';

  const btnEl = document.getElementById('pomoBtn');
  if (btnEl) btnEl.textContent = pomoState.running ? '⏸' : '▶';
}

function pomoToggle() {
  if (pomoState.running) {
    clearInterval(pomoInterval);
    pomoInterval = null;
    pomoState.running = false;
  } else {
    showPomoWidget(true);
    pomoState.running = true;
    pomoInterval = setInterval(pomoTick, 1000);
  }
  updatePomoDisplay();
}

function pomoReset() {
  clearInterval(pomoInterval);
  pomoInterval = null;
  pomoState.running = false;
  pomoState.isBreak = false;
  const ud = getUserData();
  pomoState.totalSeconds = (ud.pomoSettings && ud.pomoSettings.work ? ud.pomoSettings.work : 25) * 60;
  pomoState.remainingSeconds = pomoState.totalSeconds;
  updatePomoDisplay();
}

function pomoTick() {
  if (pomoState.remainingSeconds <= 0) {
    pomoComplete();
    return;
  }
  pomoState.remainingSeconds--;
  updatePomoDisplay();
}

function pomoComplete() {
  clearInterval(pomoInterval);
  pomoInterval = null;
  pomoState.running = false;

  if (!pomoState.isBreak) {
    // Work session completed
    pomoState.sessionPomos++;
    const ud = getUserData();
    ud.pomoCounts = (ud.pomoCounts || 0) + 1;
    const workMins = ud.pomoSettings && ud.pomoSettings.work ? ud.pomoSettings.work : 25;
    ud.totalMinutes = (ud.totalMinutes || 0) + workMins;
    const today = dateStr(new Date());
    ud.weeklyData[today] = (ud.weeklyData[today] || 0) + workMins;
    saveUserData(ud);

    // Switch to break
    pomoState.isBreak = true;
    const breakMins = ud.pomoSettings && ud.pomoSettings.breakTime ? ud.pomoSettings.breakTime : 5;
    pomoState.totalSeconds = breakMins * 60;
    pomoState.remainingSeconds = pomoState.totalSeconds;
    showToast('🍅 Pomodoro klar! Ta en paus på ' + breakMins + ' min.', 'success');
  } else {
    // Break completed
    pomoState.isBreak = false;
    const ud = getUserData();
    const workMins = ud.pomoSettings && ud.pomoSettings.work ? ud.pomoSettings.work : 25;
    pomoState.totalSeconds = workMins * 60;
    pomoState.remainingSeconds = pomoState.totalSeconds;
    showToast('⚡ Pausen slut! Dags att fokusera igen.', 'info');
  }

  updatePomoDisplay();
  // Auto-start next phase
  pomoState.running = true;
  pomoInterval = setInterval(pomoTick, 1000);
}

// ── 5. SESSION MANAGEMENT ─────────────────────────────────────────────────

let sessionState = {
  active: false,
  startTime: null,
  targetMinutes: 0,
  tasksTotal: 0,
  tasksDone: 0,
  cardsSeenThisSession: new Set(),
  lastActivity: Date.now(),
  intervalId: null,
};

function sessionTick() {
  if (!sessionState.active) return;
  updateSessionBar();
}

function updateSessionBar() {
  if (!sessionState.active) return;
  const elapsed = Math.round((Date.now() - sessionState.startTime) / 60000);
  const pct = sessionState.targetMinutes > 0 ? Math.min(100, Math.round(elapsed / sessionState.targetMinutes * 100)) : 0;
  const timeEl = document.getElementById('sessionBarTime');
  const fillEl = document.getElementById('sessionBarFill');
  if (timeEl) timeEl.textContent = elapsed + ' / ' + sessionState.targetMinutes + ' min';
  if (fillEl) fillEl.style.width = pct + '%';
}

// ── 6. STUDY PLAN WIZARD ──────────────────────────────────────────────────

// ── 7. STATISTICS & PROFILE ───────────────────────────────────────────────

function renderProfile() {
  const user = getSession();
  const ud = getUserData();

  const avatarEl = document.getElementById('profileAvatar');
  const usernameEl = document.getElementById('profileUsername');
  const sinceEl = document.getElementById('profileSince');
  const streakEl = document.getElementById('profileStreakBadge');
  const minutesEl = document.getElementById('profileTotalMinutes');
  const masteredEl = document.getElementById('profileMastered');
  const sessionsEl = document.getElementById('profileSessions');

  if (user) {
    if (avatarEl) avatarEl.textContent = user.substring(0, 2).toUpperCase();
    if (usernameEl) usernameEl.textContent = user;
    const users = getUsers();
    if (sinceEl && users[user]) {
      sinceEl.textContent = 'Sedan ' + new Date(users[user].createdAt).toLocaleDateString('sv-SE');
    }
    const cps = document.getElementById('changePassSection');
    if (cps) cps.style.display = '';
  } else {
    if (avatarEl) avatarEl.textContent = '?';
    if (usernameEl) usernameEl.textContent = 'Gäst';
    if (sinceEl) sinceEl.textContent = 'Inte inloggad';
    const cps = document.getElementById('changePassSection');
    if (cps) cps.style.display = 'none';
  }

  if (streakEl) streakEl.textContent = '🔥 ' + (ud.streak.current || 0) + ' dagars streak';
  if (minutesEl) minutesEl.textContent = ud.totalMinutes || 0;

  // Count mastered (box 4)
  let mastered = 0;
  CARDS.forEach(c => {
    const lc = ud.leitner && ud.leitner[c.id];
    if (lc && lc.box >= 4) mastered++;
  });
  if (masteredEl) masteredEl.textContent = mastered;
  if (sessionsEl) sessionsEl.textContent = (ud.sessions && ud.sessions.length) || 0;

  // Due cards
  const dueEl = document.getElementById('dueCardsInfo');
  if (dueEl) {
    const due = getDueCards();
    if (due.length === 0) {
      dueEl.textContent = '[PASS] Inga kort att repetera idag – bra jobbat!';
    } else {
      dueEl.textContent = '📚 Du har ' + due.length + ' kort att repetera idag.';
    }
  }

  renderLeitnerViz();
  renderWeeklyChart();
}

function renderLeitnerViz() {
  const viz = document.getElementById('leitnerViz');
  if (!viz) return;
  const stats = getLeitnerStats();
  const total = CARDS.length || 1;
  const maxCount = Math.max(...Object.values(stats), 1);
  const labels = ['Ny', 'Låda 1', 'Låda 2', 'Låda 3', 'Bemästrad'];
  const colors = ['leitner-bar-0', 'leitner-bar-1', 'leitner-bar-2', 'leitner-bar-3', 'leitner-bar-4'];

  viz.innerHTML = [0, 1, 2, 3, 4].map(box => {
    const count = stats[box] || 0;
    const pct = maxCount > 0 ? Math.round(count / maxCount * 100) : 0;
    return `<div class="leitner-box-col">
      <div class="leitner-bar-wrap">
        <div class="leitner-bar ${colors[box]}" style="height:${pct}%;min-height:${count>0?4:0}px;"></div>
      </div>
      <div class="leitner-count">${count}</div>
      <div class="leitner-label">${labels[box]}</div>
    </div>`;
  }).join('');
}

function renderWeeklyChart() {
  const chart = document.getElementById('weeklyChart');
  if (!chart) return;
  const ud = getUserData();
  const days = [];
  const dayNames = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push({ date: dateStr(d), label: dayNames[d.getDay()] });
  }
  const vals = days.map(d => ud.weeklyData && ud.weeklyData[d.date] ? ud.weeklyData[d.date] : 0);
  const maxVal = Math.max(...vals, 1);

  chart.innerHTML = days.map((d, i) => {
    const pct = Math.round(vals[i] / maxVal * 100);
    const isToday = i === 6;
    return `<div class="week-bar-col">
      <div class="week-bar-wrap">
        <div class="week-bar" style="height:${pct}%;${isToday ? 'opacity:1;' : 'opacity:0.6;'}min-height:${vals[i]>0?4:0}px;"></div>
      </div>
      <div class="week-label" style="${isToday ? 'font-weight:700;color:var(--accent);' : ''}">${d.label}</div>
    </div>`;
  }).join('');
}

function updateStreak() {
  if (!getSession()) return;
  const ud = getUserData();
  const today = dateStr(new Date());
  const yesterday = dateStr(new Date(Date.now() - 86400000));

  if (!ud.streak) ud.streak = { current: 0, max: 0, lastDate: '' };

  if (ud.streak.lastDate === today) {
    // Already updated today
  } else if (ud.streak.lastDate === yesterday) {
    ud.streak.current = (ud.streak.current || 0) + 1;
    ud.streak.max = Math.max(ud.streak.max || 0, ud.streak.current);
    ud.streak.lastDate = today;
  } else if (!ud.streak.lastDate) {
    ud.streak.current = 1;
    ud.streak.max = 1;
    ud.streak.lastDate = today;
  } else {
    // Streak broken
    ud.streak.current = 1;
    ud.streak.lastDate = today;
  }

  saveUserData(ud);
}

// ── 8. TOAST NOTIFICATIONS ────────────────────────────────────────────────

function showToast(msg, type, duration) {
  if (type === undefined) type = 'info';
  if (duration === undefined) duration = 3000;
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'notif-toast' + (type !== 'info' ? ' ' + type : '');
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(function() {
    toast.classList.add('hiding');
    setTimeout(function() {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, duration);
}

// ── 9. INACTIVITY WARNING ────────────────────────────────────────────────

let lastInteraction = Date.now();
document.addEventListener('click', function() { lastInteraction = Date.now(); });
document.addEventListener('keydown', function() { lastInteraction = Date.now(); });

setInterval(function() {
  if (sessionState.active && Date.now() - lastInteraction > 3 * 60 * 1000) {
    showToast('⏸ Är du kvar? Inaktivitet räknas inte som pluggtid.', 'warning');
    lastInteraction = Date.now();
  }
}, 30000);

// ── 10. UTILITIES ─────────────────────────────────────────────────────────

function dateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

// ── 11. PATCH FLIPCARD TO INJECT SR RATING ───────────────────────────────

// Wrap the existing markAnswer to inject SR rating UI after card flip
// We do this by patching the flipCard function
const _origFlipCard = typeof flipCard === 'function' ? flipCard : null;
if (_origFlipCard) {
  // Override flipCard to show SR rating when card is flipped to back
  window._studyFlipCardPatched = function() {
    _origFlipCard();
    if (session && session.flipped) {
      // Card was just flipped to show answer
      setTimeout(injectSRRatingUI, 50);
    } else {
      // Card was unflipped, remove rating
      const existing = document.getElementById('srRatingRow');
      if (existing) existing.remove();
    }
  };

  // Re-bind the card flip handlers
  const cardScene = document.getElementById('cardScene');
  const btnFlip = document.getElementById('btnFlip');
  if (cardScene) {
    cardScene.removeEventListener('click', flipCard);
    cardScene.addEventListener('click', window._studyFlipCardPatched);
  }
  if (btnFlip) {
    btnFlip.removeEventListener('click', flipCard);
    btnFlip.addEventListener('click', window._studyFlipCardPatched);
  }
}

// ── 12. INITIALIZATION ───────────────────────────────────────────────────

// Make header actions div identifiable
(function() {
  const ha = document.querySelector('.header-actions');
  if (ha && !ha.id) ha.id = 'headerActionsDiv';
})();

// Nav click handlers for new screens

// Init on page load (deferred so existing init runs first)
setTimeout(function() {
  updateAuthUI();
  updateStreak();
  checkDueCards();

  const ud = getUserData();
  if (ud && ud.studyPlan) {
    // Restore session bar if plan is active
    const bar = document.getElementById('sessionBar');
    // Don't auto-start session, just notify
    showToast('📅 Du har en aktiv studieplan. Gå till Plan-fliken.', 'info', 4000);
  }

  updatePomoDisplay();
  pomoReset();
}, 500);

