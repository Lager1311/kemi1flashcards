# -*- coding: utf-8 -*-
"""
update_kemi2.py – Three improvements to kemi1-flashcards.html:
1. Move Luckor to the flashcards tab (homeScreen)
2. Clearer category filter for Räkna exercises
3. Expand all theory sections with longer texts
"""

with open('kemi1-flashcards.html', 'r', encoding='utf-8') as f:
    html = f.read()

print(f"Input: {len(html)} chars")

# ============================================================
# 1. MOVE LUCKOR TO FLASHCARDS TAB
# ============================================================

# 1a. Add Luckor mode button to homeScreen mode-row
OLD_MODE_ROW = '''      <button class="mode-btn" data-mode="ft">
        <span class="mode-icon">\u270f\ufe0f</span>
        <span class="mode-label">Fritext</span>
        <span class="mode-desc">Skriv svaret med egna ord</span>
      </button>
    </div>'''

NEW_MODE_ROW = '''      <button class="mode-btn" data-mode="ft">
        <span class="mode-icon">\u270f\ufe0f</span>
        <span class="mode-label">Fritext</span>
        <span class="mode-desc">Skriv svaret med egna ord</span>
      </button>
      <button class="mode-btn" data-mode="luckor">
        <span class="mode-icon">\u270d\ufe0f</span>
        <span class="mode-label">Lucktexter</span>
        <span class="mode-desc">Fyll i r\u00e4tt ord i meningarna</span>
      </button>
    </div>'''

if OLD_MODE_ROW in html:
    html = html.replace(OLD_MODE_ROW, NEW_MODE_ROW, 1)
    print("Step 1a OK: Luckor mode added to homeScreen")
else:
    print("ERROR 1a: mode-row end not found")

# 1b. Update startBtn handler to route luckor mode to exerciseScreen
OLD_STARTBTN = "getElementById('startBtn').addEventListener('click', startSession);"
NEW_STARTBTN = """getElementById('startBtn').addEventListener('click', () => {
  if (state.mode === 'luckor') {
    navTo('exerciseScreen');
    if (!_exInited) { _exInited = true; initExercise(); }
    switchExMode('luckor');
  } else {
    startSession();
  }
});"""

if OLD_STARTBTN in html:
    html = html.replace(OLD_STARTBTN, NEW_STARTBTN, 1)
    print("Step 1b OK: startBtn handler updated")
else:
    print("ERROR 1b: startBtn handler not found")

# 1c. Remove Luckor from exerciseScreen mode row (keep only Räkna and Memorera)
OLD_EX_MODES = """  modeRow.innerHTML = `
    <button class="ex-mode-btn active" data-mode="rakna">\U0001F9EE R\u00e4kna</button>
    <button class="ex-mode-btn" data-mode="luckor">\u270d\ufe0f Luckor</button>
    <button class="ex-mode-btn" data-mode="memorera">\U0001F4DA Memorera</button>`;"""
NEW_EX_MODES = """  modeRow.innerHTML = `
    <button class="ex-mode-btn active" data-mode="rakna">\U0001F9EE R\u00e4kna</button>
    <button class="ex-mode-btn" data-mode="memorera">\U0001F4DA Memorera</button>`;"""

if OLD_EX_MODES in html:
    html = html.replace(OLD_EX_MODES, NEW_EX_MODES, 1)
    print("Step 1c OK: Luckor removed from exerciseScreen modes")
else:
    print("ERROR 1c: exercise mode row not found")

# ============================================================
# 2. CATEGORY FILTER FOR RÄKNA EXERCISES
# ============================================================

# 2a. Add category row HTML to exRaknaSection
OLD_RAKNA_SEC = '    <div id="exRaknaSection">\n      <div class="level-row" id="levelRow"></div>'
NEW_RAKNA_SEC = '''    <div id="exRaknaSection">
      <div class="ex-cat-row" id="exRaknaCatRow"></div>
      <div class="level-row" id="levelRow"></div>'''

if OLD_RAKNA_SEC in html:
    html = html.replace(OLD_RAKNA_SEC, NEW_RAKNA_SEC, 1)
    print("Step 2a OK: cat row HTML added to exRaknaSection")
else:
    print("ERROR 2a: exRaknaSection HTML not found")

# 2b. Update initExercise to populate cat row and update selectLevel/renderProblem
OLD_SELECT_LEVEL = """function selectLevel(lv) {
  _curLevel = lv;
  _probList = PROBLEMS.filter(p => p.lv === lv);
  _curProbIdx = 0;
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.level) === lv);
  });
  renderProblem();
}"""

NEW_SELECT_LEVEL = """let _curCat = 'all';

function selectCat(cat) {
  _curCat = cat;
  document.querySelectorAll('#exRaknaCatRow .ex-cat-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat));
  _probList = PROBLEMS.filter(p => p.lv === _curLevel && (cat === 'all' || p.cat === cat));
  _curProbIdx = 0;
  renderProblem();
}

function selectLevel(lv) {
  _curLevel = lv;
  _probList = PROBLEMS.filter(p => p.lv === lv && (_curCat === 'all' || p.cat === _curCat));
  _curProbIdx = 0;
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.level) === lv);
  });
  renderProblem();
}"""

if OLD_SELECT_LEVEL in html:
    html = html.replace(OLD_SELECT_LEVEL, NEW_SELECT_LEVEL, 1)
    print("Step 2b OK: selectLevel/selectCat updated")
else:
    print("ERROR 2b: selectLevel not found")

# 2c. Populate cat row in initExercise (after mode row setup, before levelRow)
OLD_LEVELROW_INIT = "  levelRow.innerHTML = [1,2,3].map(lv => {"
NEW_LEVELROW_INIT = """  // Category filter row
  const catRow = document.getElementById('exRaknaCatRow');
  catRow.innerHTML = '<button class="ex-cat-filter-btn active" data-cat="all">\U0001f522 Alla kategorier</button>' +
    Object.entries(CAT_INFO).map(([k,v]) =>
      `<button class="ex-cat-filter-btn" data-cat="${k}">${v.icon} ${v.label}</button>`
    ).join('');
  catRow.querySelectorAll('.ex-cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => selectCat(btn.dataset.cat));
  });

  levelRow.innerHTML = [1,2,3].map(lv => {"""

if OLD_LEVELROW_INIT in html:
    html = html.replace(OLD_LEVELROW_INIT, NEW_LEVELROW_INIT, 1)
    print("Step 2c OK: cat row populated in initExercise")
else:
    print("ERROR 2c: levelRow.innerHTML not found")

# 2d. CSS for ex-cat-filter-btn (add alongside existing ex-cat-row styles)
OLD_CAT_ROW_CSS = ".ex-cat-row {\n    display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;\n  }"
NEW_CAT_ROW_CSS = """.ex-cat-row {
    display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;
  }
  .ex-cat-filter-btn {
    padding: 6px 13px; border-radius: 20px; border: 1.5px solid var(--border);
    background: var(--surface); color: var(--text); font-size: 0.82rem;
    cursor: pointer; transition: all var(--transition); white-space: nowrap;
  }
  .ex-cat-filter-btn.active {
    background: var(--primary); color: #fff; border-color: var(--primary);
  }"""

if OLD_CAT_ROW_CSS in html:
    html = html.replace(OLD_CAT_ROW_CSS, NEW_CAT_ROW_CSS, 1)
    print("Step 2d OK: CSS for cat filter added")
else:
    print("ERROR 2d: .ex-cat-row CSS not found")

# ============================================================
# 3. EXPAND THEORY SECTIONS
# ============================================================

THEORY_START = 'const THEORY = ['
THEORY_END_MARKER = '`\n  }\n];\n'

ti = html.find(THEORY_START)
# Find the end of THEORY array
section = html[ti:ti+50000]
cp_idx = section.rfind(THEORY_END_MARKER)
theory_end = ti + cp_idx + len(THEORY_END_MARKER)

NEW_THEORY = r"""const THEORY = [
  {
    cat: "Atomens byggnad",
    icon: "⚛️",
    html: `
<h2>⚛️ Atomens byggnad &amp; periodiska systemet</h2>
<p class="theory-intro">Allt materia är uppbyggt av atomer – otroligt små enheter som ändå har en rik inre struktur. Det här avsnittet förklarar atomens delar, hur elektroner ordnas i energinivåer, vad isotoper är och hur det periodiska systemet är organiserat.</p>

<h3>Atomens tre grunddelar</h3>
<p>En atom består av en <strong>kärna</strong> omgiven av ett <strong>elektronskal</strong>. Kärnan innehåller:</p>
<ul>
  <li><strong>Protoner</strong> (p⁺) – positivt laddade, laddning +1, massa ≈ 1 u. Antalet protoner = <em>atomnummer Z</em>. Z bestämmer vilket grundämne det är.</li>
  <li><strong>Neutroner</strong> (n⁰) – oladdade, massa ≈ 1 u. Stabiliserar kärnan mot protonernas repulsion.</li>
</ul>
<p>Runt kärnan befinner sig <strong>elektroner</strong> (e⁻) – negativt laddade, massa ≈ 1/1836 u (försumbar). En neutral atom har lika många elektroner som protoner.</p>
<div class="formula-box">Masstal A = protoner (Z) + neutroner (N)
Antal neutroner = A − Z
Laddning = (antal protoner) − (antal elektroner)</div>
<p><strong>Exempel:</strong> Natrium (Na, Z = 11, A = 23) → 11 protoner, 12 neutroner, 11 elektroner (neutral). Na⁺-jon → 10 elektroner.</p>

<h3>Isotoper</h3>
<p>Isotoper är atomer av <em>samma grundämne</em> (same Z) men med <em>olika antal neutroner</em> (different A). De har identiska kemiska egenskaper men olika massa och stabilitet.</p>
<table class="theory-table">
  <tr><th>Isotop</th><th>Z</th><th>N</th><th>A</th><th>Stabil?</th></tr>
  <tr><td>¹H (protium)</td><td>1</td><td>0</td><td>1</td><td>Ja</td></tr>
  <tr><td>²H (deuterium)</td><td>1</td><td>1</td><td>2</td><td>Ja</td></tr>
  <tr><td>³H (tritium)</td><td>1</td><td>2</td><td>3</td><td>Nej (β⁻)</td></tr>
  <tr><td>¹²C</td><td>6</td><td>6</td><td>12</td><td>Ja</td></tr>
  <tr><td>¹⁴C</td><td>6</td><td>8</td><td>14</td><td>Nej (β⁻, t½ 5730 år)</td></tr>
</table>
<p>Den <em>relativa atommassan</em> (Ar) i periodiska systemet är ett viktat medelvärde av alla naturliga isotoper. För kol: Ar = 12,011 (p.g.a. att ~99 % är ¹²C och ~1 % ¹³C).</p>

<h3>Elektronskal och elektronkonfiguration</h3>
<p>Elektroner befinner sig i diskreta <strong>energiskal</strong> (n = 1, 2, 3 …). Varje skal rymmer maximalt 2n² elektroner:</p>
<ul>
  <li>Skal 1: max <strong>2</strong> e⁻</li>
  <li>Skal 2: max <strong>8</strong> e⁻</li>
  <li>Skal 3: max <strong>18</strong> e⁻ (men fylls ofta bara till 8 i grundskola)</li>
</ul>
<p>Elektroner fyller de lägsta energinivåerna först (<em>Aufbau-principen</em>). <strong>Valenselektroner</strong> är elektroner i yttersta skalet – de avgör kemiska egenskaperna och placeringen i grupp i periodiska systemet.</p>
<table class="theory-table">
  <tr><th>Grundämne</th><th>Z</th><th>Konfiguration</th><th>Valenselektroner</th></tr>
  <tr><td>He</td><td>2</td><td>2</td><td>2 (fullt)</td></tr>
  <tr><td>Li</td><td>3</td><td>2, 1</td><td>1</td></tr>
  <tr><td>C</td><td>6</td><td>2, 4</td><td>4</td></tr>
  <tr><td>O</td><td>8</td><td>2, 6</td><td>6</td></tr>
  <tr><td>Na</td><td>11</td><td>2, 8, 1</td><td>1</td></tr>
  <tr><td>Cl</td><td>17</td><td>2, 8, 7</td><td>7</td></tr>
  <tr><td>Ar</td><td>18</td><td>2, 8, 8</td><td>8 (fullt)</td></tr>
  <tr><td>Ca</td><td>20</td><td>2, 8, 8, 2</td><td>2</td></tr>
</table>
<div class="tip-box"><strong>Regel:</strong> Ädelgaser (grupp 18) har fullt yttersta skal = extra stabila. Alla andra grundämnen strävar mot ädelgaskonfiguration genom att binda eller avge elektroner.</div>

<h3>Det periodiska systemet – organisation</h3>
<p>Periodiska systemet är ordnat efter <em>stigande atomnummer Z</em> och visar periodiska trender:</p>
<ul>
  <li><strong>Period</strong> (rad) = antal elektronskal. Period 2 → 2 skal.</li>
  <li><strong>Grupp</strong> (kolumn) = antal valenselektroner (för grupp 1–2 och 13–18). Grupp 1: 1 valenselektron, grupp 17: 7, grupp 18: 8.</li>
  <li><strong>Metaller</strong> (vänster + mitten): elektroner avges → katjoner. God ledare.</li>
  <li><strong>Icke-metaller</strong> (höger): elektroner tas upp → anjoner. Dåliga ledare.</li>
  <li><strong>Halvmetaller/metalloider</strong> (diagonalt): halvledare.</li>
</ul>

<h3>Periodiska trender</h3>
<table class="theory-table">
  <tr><th>Egenskap</th><th>Längs perioden →</th><th>Nedåt i grupp ↓</th></tr>
  <tr><td>Atomradie</td><td>Minskar (fler protoner drar e⁻ närmre)</td><td>Ökar (fler skal)</td></tr>
  <tr><td>Joniseringsenergi</td><td>Ökar (svårare att ta e⁻)</td><td>Minskar (yttre e⁻ längre bort)</td></tr>
  <tr><td>Elektronegativitet</td><td>Ökar (F störst = 4,0)</td><td>Minskar</td></tr>
  <tr><td>Metallkaraktär</td><td>Minskar</td><td>Ökar</td></tr>
</table>
<p><strong>Elektronegativitet</strong> (Paulingskalan) mäter ett atoms förmåga att attrahera elektroner i en bindning. F (4,0) &gt; O (3,5) &gt; N (3,0) &gt; Cl (3,2). Stor skillnad → jonbindning; liten → kovalent.</p>
`
  },
  {
    cat: "Kemisk bindning",
    icon: "🔗",
    html: `
<h2>🔗 Kemisk bindning</h2>
<p class="theory-intro">Atomer binds ihop för att nå lägre energi och uppnå stabil ädelgaskonfiguration. Bindningstypen beror på om atomer avger, tar upp eller delar elektroner.</p>

<h3>Jonbindning</h3>
<p>Uppstår mellan <strong>metall och icke-metall</strong> med stor elektronnegativitetsskillnad (> 1,7). Metallen avger en eller flera elektroner → katjon (+). Icke-metallen tar upp → anjon (−). De motsatt laddade jonerna attraherar varandra elektrostatiskt och bildar ett kristallgitter.</p>
<div class="formula-box">Na → Na⁺ + e⁻    (joniseringsenergi förbrukas)
Cl + e⁻ → Cl⁻   (elektronaffinitet frigörs)
Na⁺ + Cl⁻ → NaCl(s)   (gitterenergi frigörs – stor!)</div>
<p><strong>Egenskaper hos jonföreningar:</strong> höga smält- och kokpunkter, sprödhet, leder ström i smälta/lösning men inte som fast ämne, löser sig ofta i vatten.</p>
<div class="tip-box"><strong>Namngivning:</strong> katjonens namn oförändrat + anjonens namn med ändelsen -id (NaCl = natriumklorid) eller syraresten (Na₂SO₄ = natriumsulfat).</div>

<h3>Kovalent bindning</h3>
<p>Uppstår mellan <strong>icke-metaller</strong> (liten elektronnegativitetsskillnad < 1,7). Atomer <em>delar</em> elektronpar – varje delat par = en bindning.</p>
<ul>
  <li><strong>Enkelbindning</strong> (σ): ett delat elektronpar, t.ex. H−H, H−Cl, C−C</li>
  <li><strong>Dubbelbindning</strong> (σ + π): två delade par, t.ex. O=O, C=O, C=C</li>
  <li><strong>Trippelbindning</strong> (σ + 2π): tre delade par, t.ex. N≡N, C≡C</li>
</ul>
<p>Fler bindningar = kortare och starkare bindning. N≡N är extremt stark (945 kJ/mol) – därför är N₂ så reaktionströg.</p>

<h3>Polär och opolär kovalent bindning</h3>
<p>Om de bindande atomerna har <em>olika elektronegativitet</em> är bindningen <strong>polär</strong> – elektronparet dras mot den mer elektronegativa atomen, som får en partiell negativ laddning (δ−), och den andra en partiell positiv (δ+).</p>
<table class="theory-table">
  <tr><th>Molekyl</th><th>Bindning</th><th>Molekylform</th><th>Polär molekyl?</th></tr>
  <tr><td>H₂</td><td>Opolär kovalent</td><td>Linjär</td><td>Nej</td></tr>
  <tr><td>HCl</td><td>Polär kovalent (Δ=0,9)</td><td>Linjär</td><td>Ja</td></tr>
  <tr><td>CO₂</td><td>Polär bindning (Δ=1,0)</td><td>Linjär</td><td>Nej (dipol tar ut)</td></tr>
  <tr><td>H₂O</td><td>Polär kovalent (Δ=1,4)</td><td>V-formad</td><td>Ja</td></tr>
  <tr><td>NH₃</td><td>Polär kovalent</td><td>Trigonal pyramid</td><td>Ja</td></tr>
  <tr><td>CH₄</td><td>Svagt polär</td><td>Tetraeder</td><td>Nej (symmetri)</td></tr>
</table>

<h3>Metallbindning</h3>
<p>I en metall avger atomerna sina valenselektroner till ett gemensamt "elektronhav". De positivt laddade metalljonerna hålls ihop av detta hav av fria elektroner.</p>
<p><strong>Förklarar metallers egenskaper:</strong> god elektrisk och termisk ledning (fria e⁻), formbarhet (lager kan glida), metallglans (e⁻ absorberar och åter-emitterar ljus).</p>

<h3>Intermolekylära krafter</h3>
<p>Svagare än kemiska bindningar men avgör kokpunkter, löslighet m.m.:</p>
<ul>
  <li><strong>Van der Waals-krafter (London-dispersion)</strong>: temporära dipol–dipol-växelverkningar pga. elektronrörelser. Ökar med molekylmassan. Förklarar varför Xe (Ar ≈ 131) kokar vid −108 °C men He (Ar ≈ 4) vid −269 °C.</li>
  <li><strong>Permanenta dipol-dipol-krafter</strong>: polära molekyler attraherar varandra. HCl (bp −85 °C) jämfört med H₂ (bp −253 °C).</li>
  <li><strong>Vätebindningar</strong>: speciellt stark dipol–dipol när H är bundet till N, O eller F. H₂O har ovanligt hög bp (100 °C) tack vare vätebindningar.</li>
</ul>
<div class="tip-box"><strong>Minnesregel:</strong> Ju starkare intermolekylär kraft → desto högre kokpunkt och smältpunkt, desto mer energi krävs för fasövergång.</div>
`
  },
  {
    cat: "Reaktioner & stökiometri",
    icon: "⚗️",
    html: `
<h2>⚗️ Kemiska reaktioner &amp; stökiometri</h2>
<p class="theory-intro">Stökiometri är kemin bakom beräkningarna – hur mängder av reaktanter och produkter hänger ihop. Grunden är molbegreppet och balanseringen av reaktionsformler.</p>

<h3>Molbegreppet</h3>
<p>Ett <strong>mol</strong> (mol) är 6,022 × 10²³ partiklar (Avogadros tal, Nₐ). Det är kopplingen mellan mikrovärld (atomer) och makrovärld (gram).</p>
<div class="formula-box">n = m / M          (n = substansmängd i mol, m = massa i g, M = molmassa i g/mol)
m = n × M
M = summan av alla atomers Ar i formeln</div>
<p><strong>Exempel:</strong> M(H₂O) = 2×1,008 + 15,999 ≈ 18,0 g/mol. 36 g H₂O = 36/18 = 2,0 mol.</p>

<h3>Balansering av reaktionsformler</h3>
<p>En kemisk reaktion måste balanseras: lika många atomer av varje slag på båda sidor (massabevarande). Laddning måste också balanseras i jonreaktioner.</p>
<p><strong>Metod:</strong></p>
<ol>
  <li>Skriv upp obalanserad reaktion</li>
  <li>Börja med det mest komplexa ämnet</li>
  <li>Balansera ett grundämne i taget</li>
  <li>Kontrollera alla grundämnen</li>
</ol>
<div class="formula-box">Obalanserad: Fe + O₂ → Fe₂O₃
Balanserad:  4 Fe + 3 O₂ → 2 Fe₂O₃
Kontroll: 4 Fe på vardera sida, 6 O på vardera sida ✓</div>

<h3>Beräkningar med molförhållanden</h3>
<p>Koefficienterna i en balanserad reaktion anger <em>molförhållandena</em>. För N₂ + 3H₂ → 2NH₃ gäller att 1 mol N₂ reagerar med 3 mol H₂ och ger 2 mol NH₃.</p>
<div class="formula-box">Steg: massa → mol (÷M) → molförhållande (× koeff) → mol → massa (×M)</div>
<p><strong>Exempel:</strong> Hur mycket NH₃ bildas av 28 g N₂?<br>
n(N₂) = 28/28 = 1,0 mol → n(NH₃) = 2×1,0 = 2,0 mol → m(NH₃) = 2,0 × 17 = <strong>34 g</strong></p>

<h3>Begränsande reaktant och utbyte</h3>
<p>Den <strong>begränsande reaktanten</strong> är den som tar slut först och begränsar hur mycket produkt som bildas.</p>
<p><strong>Hitta begränsande reaktant:</strong> Beräkna hur mycket produkt varje reaktant skulle ge om den förbrukades helt. Reaktanten som ger <em>minst</em> produkt är den begränsande.</p>
<div class="formula-box">Procentuellt utbyte (%) = (verklig mängd produkt / teoretisk mängd) × 100</div>
<p><strong>Exempel:</strong> 2H₂ + O₂ → 2H₂O. Du har 4 g H₂ och 32 g O₂.<br>
n(H₂) = 4/2 = 2 mol → ger 2 mol H₂O<br>
n(O₂) = 32/32 = 1 mol → ger 2 mol H₂O<br>
Båda ger 2 mol – precis rätt förhållande, ingen överskott.</p>

<h3>Reaktionstyper</h3>
<table class="theory-table">
  <tr><th>Typ</th><th>Schema</th><th>Exempel</th></tr>
  <tr><td>Syntes</td><td>A + B → AB</td><td>2H₂ + O₂ → 2H₂O</td></tr>
  <tr><td>Sönderfall</td><td>AB → A + B</td><td>2H₂O₂ → 2H₂O + O₂</td></tr>
  <tr><td>Enkel substitution</td><td>A + BC → AC + B</td><td>Zn + H₂SO₄ → ZnSO₄ + H₂</td></tr>
  <tr><td>Dubbel substitution</td><td>AB + CD → AD + CB</td><td>NaCl + AgNO₃ → AgCl↓ + NaNO₃</td></tr>
  <tr><td>Förbränning</td><td>CₓHᵧ + O₂ → CO₂ + H₂O</td><td>CH₄ + 2O₂ → CO₂ + 2H₂O</td></tr>
</table>

<h3>Redoxreaktioner</h3>
<p>I en redoxreaktion överförs elektroner. <strong>Oxidation</strong> = elektroner avges (oxidationstal ökar). <strong>Reduktion</strong> = elektroner tas upp (oxidationstal minskar). OIL RIG: Oxidation Is Loss, Reduction Is Gain.</p>
<div class="formula-box">Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
Zn oxideras: Zn → Zn²⁺ + 2e⁻    (oxidationstal: 0 → +2)
Cu²⁺ reduceras: Cu²⁺ + 2e⁻ → Cu  (oxidationstal: +2 → 0)</div>
`
  },
  {
    cat: "Syror & baser",
    icon: "🧪",
    html: `
<h2>🧪 Syror &amp; baser</h2>
<p class="theory-intro">Syror och baser är centrala i kemin – från matsmältningen till industriprocesser. Det här avsnittet täcker Brønsted-Lowry-teorin, pH-beräkningar, starka och svaga syror, titrering, buffertlösningar och indikatorer.</p>

<h3>Brønsted-Lowry-teorin</h3>
<p>En <strong>syra</strong> är en <em>protondonator</em> – avger H⁺ (proton). En <strong>bas</strong> är en <em>protonacceptor</em> – tar emot H⁺. Reaktionen kallas <em>protolys</em>.</p>
<div class="formula-box">HA  +  B  ⇌  A⁻  +  BH⁺
(syra) (bas) (konj. bas) (konj. syra)

Exempel: CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺
         HCl + H₂O → Cl⁻ + H₃O⁺  (fullständig)</div>
<p><strong>Korresponderande syra-baspar</strong> skiljer sig med exakt ett H⁺: CH₃COOH/CH₃COO⁻ och H₃O⁺/H₂O är korresponderande par i reaktionen ovan.</p>
<p><strong>Amfolyter</strong> kan agera både som syra och bas beroende på motparten. Vatten är det viktigaste exemplet: reagerar med HCl som bas (tar H⁺), reagerar med NH₃ som syra (ger H⁺).</p>

<h3>pH-skalan och vattnets jonprodukt</h3>
<div class="formula-box">pH = −log[H₃O⁺]        pOH = −log[OH⁻]
pH + pOH = 14   (vid 25 °C)
Kw = [H₃O⁺][OH⁻] = 1,0 × 10⁻¹⁴  (vid 25 °C)</div>
<table class="theory-table">
  <tr><th>[H₃O⁺] (mol/L)</th><th>pH</th><th>Karaktär</th></tr>
  <tr><td>1,0 × 10⁻¹</td><td>1</td><td>Starkt sur (magsyra)</td></tr>
  <tr><td>1,0 × 10⁻³</td><td>3</td><td>Sur (vinäger ≈ 2,5)</td></tr>
  <tr><td>1,0 × 10⁻⁷</td><td>7</td><td>Neutral (rent vatten)</td></tr>
  <tr><td>1,0 × 10⁻¹⁰</td><td>10</td><td>Basisk (tvål ≈ 10)</td></tr>
  <tr><td>1,0 × 10⁻¹³</td><td>13</td><td>Starkt basisk (NaOH 0,1 M)</td></tr>
</table>
<p>Skalan är <em>logaritmisk</em>: varje heltalssteg = 10-faldig förändring av [H₃O⁺].</p>

<h3>Starka och svaga syror – Ka och pKa</h3>
<p><strong>Starka syror</strong> protolyseras fullständigt (→). <strong>Svaga syror</strong> protolyseras delvis (⇌) och befinner sig i jämvikt.</p>
<div class="formula-box">Ka = [H₃O⁺][A⁻] / [HA]    (syrajämviktskonstant)
pKa = −log Ka
Svag syra: Ka liten → pKa stor → svag syra</div>
<table class="theory-table">
  <tr><th>Syra</th><th>Ka (25°C)</th><th>pKa</th><th>Typ</th></tr>
  <tr><td>HCl</td><td>≫1</td><td>−7</td><td>Stark</td></tr>
  <tr><td>H₂SO₄ (1:a)</td><td>≫1</td><td>−3</td><td>Stark</td></tr>
  <tr><td>HNO₃</td><td>≫1</td><td>−1,3</td><td>Stark</td></tr>
  <tr><td>H₃PO₄</td><td>7,5×10⁻³</td><td>2,1</td><td>Svag</td></tr>
  <tr><td>CH₃COOH</td><td>1,8×10⁻⁵</td><td>4,76</td><td>Svag</td></tr>
  <tr><td>H₂CO₃</td><td>4,3×10⁻⁷</td><td>6,4</td><td>Svag</td></tr>
  <tr><td>HCN</td><td>6,2×10⁻¹⁰</td><td>9,2</td><td>Mycket svag</td></tr>
</table>
<p><strong>pH-beräkning, stark syra:</strong> 0,050 M HCl → [H₃O⁺] = 0,050 mol/L → pH = −log(0,050) = 1,3</p>
<p><strong>pH-beräkning, svag syra</strong> (approximation): [H₃O⁺] ≈ √(Ka × c) för svaga syror.<br>
0,10 M CH₃COOH: [H₃O⁺] = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶) ≈ 1,34×10⁻³ → pH ≈ 2,87</p>

<h3>Neutralisation och salter</h3>
<div class="formula-box">Syra + bas → salt + vatten
HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)
Nettoreaktion: H₃O⁺ + OH⁻ → 2H₂O</div>
<table class="theory-table">
  <tr><th>Reaktanter</th><th>Salt</th><th>Lösningens pH</th></tr>
  <tr><td>Stark syra + stark bas</td><td>Neutralt (NaCl)</td><td>≈ 7</td></tr>
  <tr><td>Svag syra + stark bas</td><td>Basiskt (CH₃COONa)</td><td>&gt; 7</td></tr>
  <tr><td>Stark syra + svag bas</td><td>Surt (NH₄Cl)</td><td>&lt; 7</td></tr>
</table>

<h3>Titrering</h3>
<p>Titrering bestämmer okänd koncentration. Från byretten tillsätts <em>titratorn</em> (känd c) till <em>titranden</em> (okänd c) tills <strong>ekvivalenspunkten</strong> nås.</p>
<div class="formula-box">Vid 1:1-reaktion:  n(syra) = n(bas)
c₁ × V₁ = c₂ × V₂

Exempel: 25,00 mL NaOH titreras av 20,50 mL HCl (c = 0,100 M)
n(HCl) = 0,100 × 0,02050 = 2,05×10⁻³ mol
c(NaOH) = 2,05×10⁻³ / 0,02500 = 0,082 mol/L</div>
<p><strong>Indikatorer:</strong> Fenolftalein (färglös→rosa, pH 8,2–10,0) används vid stark bas som titrerat. BTB (gult→blått, pH 6,0–7,6) vid neutralisationer nära pH 7.</p>

<h3>Buffertlösningar</h3>
<p>En buffert motstår pH-förändringar. Består av <strong>svag syra + dess konjugerade bas</strong> (eller omvänt). Henderson-Hasselbalch:</p>
<div class="formula-box">pH = pKa + log([A⁻]/[HA])

Blodbuffert: H₂CO₃/HCO₃⁻, pKa ≈ 6,1
Normal blod-pH ≈ 7,4 → [HCO₃⁻]/[H₂CO₃] ≈ 20/1</div>
<p>Om H⁺ tillsätts reagerar basen (A⁻ + H⁺ → HA). Om OH⁻ tillsätts reagerar syran (HA + OH⁻ → A⁻ + H₂O). pH ändras minimalt.</p>
`
  },
  {
    cat: "Organisk kemi",
    icon: "🌿",
    html: `
<h2>🌿 Organisk kemi</h2>
<p class="theory-intro">Organisk kemi studerar kol-föreningar – ca 10 miljoner kända, fler än alla andra ämnen sammantagna. Kolatomens unika förmåga att binda till fyra andra atomer och kedja sig med sig själv gör detta möjligt.</p>

<h3>Kolatomens speciella egenskaper</h3>
<ul>
  <li><strong>4 bindningar</strong>: Kan bilda enkelbindningar (C−C), dubbelbindningar (C=C), trippelbindningar (C≡C)</li>
  <li><strong>Kedjor och ringar</strong>: Kan bilda långa raka kedjor, grenade kedjor och ringar</li>
  <li><strong>Hybridisering</strong>: sp³ = tetraeder, sp² = plan (dubbelbindning), sp = linjär (trippelbindning)</li>
</ul>

<h3>Kolväten</h3>
<table class="theory-table">
  <tr><th>Grupp</th><th>Formeltyp</th><th>Bindning</th><th>Exempel</th></tr>
  <tr><td>Alkaner</td><td>CₙH₂ₙ₊₂</td><td>Bara enkelbindningar</td><td>CH₄, C₂H₆, C₃H₈</td></tr>
  <tr><td>Alkener</td><td>CₙH₂ₙ</td><td>≥1 C=C</td><td>C₂H₄ (eten), C₃H₆</td></tr>
  <tr><td>Alkyner</td><td>CₙH₂ₙ₋₂</td><td>≥1 C≡C</td><td>C₂H₂ (etyn/acetylen)</td></tr>
  <tr><td>Arener</td><td>t.ex. C₆H₆</td><td>Aromatisk ring</td><td>Bensen, toluen</td></tr>
</table>
<p><strong>Nomenklatur alkaner:</strong> Prefix anger antal C: met-(1), et-(2), prop-(3), but-(4), pent-(5), hex-(6), hept-(7), okt-(8). Suffix: -an (alkan), -en (alken), -yn (alkyn).</p>
<div class="tip-box"><strong>IUPAC-regel:</strong> Välj den längsta kolkedjan som bas. Numrera kedjans kol från det håll som ger substituenter lägst nummer.</div>

<h3>Funktionella grupper</h3>
<table class="theory-table">
  <tr><th>Grupp</th><th>Formel</th><th>Suffix/Prefix</th><th>Exempel</th></tr>
  <tr><td>Alkohol</td><td>−OH</td><td>-ol</td><td>CH₃OH (metanol), C₂H₅OH (etanol)</td></tr>
  <tr><td>Aldehyd</td><td>−CHO</td><td>-al</td><td>HCHO (metanal/formaldehyd)</td></tr>
  <tr><td>Keton</td><td>C=O (mitten)</td><td>-on</td><td>CH₃COCH₃ (propan-2-on/aceton)</td></tr>
  <tr><td>Karboxylsyra</td><td>−COOH</td><td>-syra</td><td>CH₃COOH (ättiksyra)</td></tr>
  <tr><td>Ester</td><td>−COO−</td><td>-oat</td><td>CH₃COOC₂H₅ (etylacetat)</td></tr>
  <tr><td>Amin</td><td>−NH₂</td><td>-amin</td><td>CH₃NH₂ (metylamin)</td></tr>
  <tr><td>Amid</td><td>−CONH₂</td><td>-amid</td><td>CH₃CONH₂ (etanamid)</td></tr>
</table>

<h3>Isomerer</h3>
<p>Isomerer har <em>samma molekylformel</em> men <em>olika struktur</em>.</p>
<ul>
  <li><strong>Strukturisomerer</strong>: Olika bindningsmönster. Butan (C₄H₁₀) kan vara rakt (n-butan) eller grenat (2-metylpropan/isobutan).</li>
  <li><strong>Stereoisomerer</strong>: Samma bindningsmönster men annan rumslig arrangemang (t.ex. cis/trans-isomerer runt C=C).</li>
</ul>

<h3>Viktiga reaktionstyper</h3>
<table class="theory-table">
  <tr><th>Reaktionstyp</th><th>Substrat</th><th>Schema</th></tr>
  <tr><td>Additionsreaktion</td><td>Alkener</td><td>C=C + HBr → C(H)(Br)C</td></tr>
  <tr><td>Substitutionsreaktion</td><td>Alkaner</td><td>CH₄ + Cl₂ → CH₃Cl + HCl (ljus)</td></tr>
  <tr><td>Eliminering</td><td>Alkoholer</td><td>R−OH → alkene + H₂O (H₂SO₄, värme)</td></tr>
  <tr><td>Förestring</td><td>Syra + alkohol</td><td>RCOOH + R'OH ⇌ RCOOR' + H₂O</td></tr>
  <tr><td>Hydrolys</td><td>Ester</td><td>RCOOR' + H₂O ⇌ RCOOH + R'OH</td></tr>
  <tr><td>Förbränning</td><td>Alla kolväten</td><td>CₓHᵧ + O₂ → CO₂ + H₂O</td></tr>
</table>

<h3>Polymerer</h3>
<p>Polymerer är makromolekyler byggda av upprepade <em>monomerer</em>. Additionspolymerer bildas från alkener: n(CH₂=CH₂) → (−CH₂−CH₂−)ₙ (polyeten, PE). Kondensationspolymerer (t.ex. nylon, polyester) bildas med avspjälkning av H₂O per bindning.</p>
<div class="tip-box"><strong>Biologiska polymerer:</strong> Proteiner = polyamider av aminosyror. DNA = polysackarid-liknande ryggrad med nukleotidbaser. Stärkelse/cellulosa = polysackarider av glukos.</div>
`
  },
  {
    cat: "Lösningar & koncentration",
    icon: "💧",
    html: `
<h2>💧 Lösningar &amp; koncentration</h2>
<p class="theory-intro">En lösning är ett homogent blandning där ett lösningsmedel löser ett lösningsämne. Koncentrationsbegreppet knyter ihop substansmängd, volym och massa.</p>

<h3>Molkoncentration (molaritet)</h3>
<p>Den vanligaste koncentrationsmåttet i kemi. Anger antalet mol löst ämne per liter lösning.</p>
<div class="formula-box">c = n / V          (c i mol/L eller M, V i liter)
n = c × V
V = n / c

Exempel: 5,85 g NaCl (M = 58,5 g/mol) löses i 500 mL lösning.
n = 5,85 / 58,5 = 0,100 mol
c = 0,100 / 0,500 = 0,200 mol/L = 0,200 M</div>

<h3>Masskoncentration och massfraktion</h3>
<div class="formula-box">Masskoncentration (ρ): ρ = m(lösningsämne) / V(lösning)  [g/L]
Massfraktion (w): w = m(lösningsämne) / m(lösning)       [0–1 eller %]

Samband: c = (w × ρ_lösning × 1000) / M
(där ρ_lösning i g/mL och M i g/mol)</div>

<h3>Spädning</h3>
<p>Vid spädning tillsätts mer lösningsmedel. Substansmängden är oförändrad men volymen ökar → koncentrationen minskar.</p>
<div class="formula-box">c₁ × V₁ = c₂ × V₂

Exempel: 50 mL HCl (c = 2,0 M) späds till 200 mL.
c₂ = (2,0 × 0,050) / 0,200 = 0,50 M</div>
<div class="tip-box"><strong>Laborationsregel:</strong> Häll alltid syra i vatten – aldrig vatten i syra (kraftig exoterm reaktion kan orsaka stänk).</div>

<h3>Löslighet och mättnad</h3>
<p>Lösligheten (g lösningsämne per 100 g vatten) beror på temperatur och ämne. En <strong>mättad lösning</strong> innehåller maximalt lösningsämne vid given temperatur. En <strong>övermättad lösning</strong> är instabil – tillsätts en kristall fälls överskottet ut.</p>
<p><strong>Faktorer som påverkar lösligheten:</strong></p>
<ul>
  <li>Temperatur: De flesta fasta ämnen löser sig bättre vid högre T. Gaser löser sig sämre (omvänt!)</li>
  <li>Poläritet: "Lika löser lika" – polära ämnen löses i polära lösningsmedel (vatten), opolära i opolära (hexan)</li>
  <li>Tryck (för gaser): Henrys lag: c(gas) = k × p. Mer CO₂ löst vid högt tryck (kolsyrat vatten).</li>
</ul>

<h3>Elektrolyter</h3>
<p>Elektrolyter är ämnen som dissocierar i joner i vatten och leder elektrisk ström.</p>
<ul>
  <li><strong>Starka elektrolyter</strong>: fullständig dissociation. NaCl → Na⁺ + Cl⁻. Alla starka syror och baser.</li>
  <li><strong>Svaga elektrolyter</strong>: partiell dissociation. CH₃COOH ⇌ H⁺ + CH₃COO⁻.</li>
  <li><strong>Icke-elektrolyter</strong>: ingen dissociation. Socker (C₁₂H₂₂O₁₁), etanol.</li>
</ul>

<h3>Fällningsreaktioner</h3>
<p>När joner blandas kan svårlösliga salter fällas ut som precipitat. Löslighetsprodukten Ksp avgör om fällning sker.</p>
<div class="formula-box">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)
Ksp(AgCl) = [Ag⁺][Cl⁻] = 1,8×10⁻¹⁰  (vid 25°C)
Fällning sker om [Ag⁺][Cl⁻] > Ksp</div>
<p>Vanliga fällningsreaktioner: BaSO₄ (vit), AgCl (vit), PbI₂ (gul) – alla svårlösliga i vatten.</p>
`
  },
  {
    cat: "Termokemi & energi",
    icon: "🌡️",
    html: `
<h2>🌡️ Termokemi &amp; energi</h2>
<p class="theory-intro">Termokemi studerar energiutbyte i kemiska reaktioner. Varje reaktion innebär att kemiska bindningar bryts (energikrävande) och nya bildas (energifrigivande). Nettot avgör om reaktionen är exoterm eller endoterm.</p>

<h3>Entalpi och reaktionsentalpi</h3>
<p>Entalpivärdet <em>H</em> är systemets inre energi + trycksvolymarbete. Entalpinförändringen ΔH anger energiutbytet vid konstant tryck (vanliga laborationsförhållanden).</p>
<div class="formula-box">ΔH = H(produkter) − H(reaktanter)
ΔH < 0: Exoterm reaktion (energi frigörs till omgivningen)
ΔH > 0: Endoterm reaktion (energi tas upp från omgivningen)</div>
<p><strong>Standardbildningsentalpi</strong> ΔHf° är entalpinförändringen när 1 mol förening bildas från grundämnena i sina standardtillstånd. ΔHf°(element i standardform) = 0 per definition.</p>
<div class="formula-box">ΔH°rxn = Σ ΔHf°(produkter) − Σ ΔHf°(reaktanter)

Exempel: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)
ΔH°rxn = [ΔHf°(CO₂) + 2×ΔHf°(H₂O)] − [ΔHf°(CH₄) + 2×ΔHf°(O₂)]
       = [−393,5 + 2×(−285,8)] − [−74,8 + 0]
       = −890,3 kJ/mol</div>

<h3>Hess's lag</h3>
<p>Entalpinförändringen för en reaktion är <strong>oberoende av reaktionsvägen</strong>. Den beror bara på start- och sluttillstånd. Man kan addera termokemiska ekvationer för att beräkna ΔH för svårmätta reaktioner.</p>
<div class="formula-box">Gegeven:
(1) C(s) + O₂(g) → CO₂(g)           ΔH₁ = −393 kJ
(2) CO(g) + ½O₂(g) → CO₂(g)         ΔH₂ = −283 kJ

Önskat: C(s) + ½O₂(g) → CO(g)
Lösning: (1) − (2): ΔH = −393 − (−283) = −110 kJ</div>

<h3>Bindningsentalpi</h3>
<p>Bindningsentalpi = energi som krävs för att bryta 1 mol bindningar i gasform. Läs av ur tabell. Approximativt:</p>
<div class="formula-box">ΔH ≈ Σ (bindningsentalpier brutna) − Σ (bildade)
= Σ D(reaktanter) − Σ D(produkter)</div>
<table class="theory-table">
  <tr><th>Bindning</th><th>D (kJ/mol)</th></tr>
  <tr><td>H−H</td><td>436</td></tr>
  <tr><td>O=O</td><td>498</td></tr>
  <tr><td>O−H</td><td>463</td></tr>
  <tr><td>C−H</td><td>413</td></tr>
  <tr><td>C−C</td><td>347</td></tr>
  <tr><td>C=C</td><td>614</td></tr>
  <tr><td>C≡C</td><td>839</td></tr>
  <tr><td>N≡N</td><td>945</td></tr>
</table>

<h3>Kalorimetri</h3>
<p>Energiutbytet mäts med kalorimeter. Värmemängden Q beräknas från temperaturförändringen:</p>
<div class="formula-box">Q = m × c_p × ΔT
(m = massa i g, c_p = specifik värmekapacitet, ΔT = temperaturändring i K eller °C)

c_p(vatten) = 4,18 J/(g·K)

Exempel: 100 g vatten värms 5,0 °C → Q = 100 × 4,18 × 5,0 = 2090 J = 2,09 kJ</div>

<h3>Entropi och Gibbs fria energi</h3>
<p><strong>Entropi</strong> (S) mäter oordning/spridning. Processer tenderar att öka entropin (2:a termodynamikens lag). ΔS > 0 = ökad oordning (t.ex. gas bildas, upplösning).</p>
<div class="formula-box">ΔG = ΔH − T × ΔS       (Gibbs fria energi, T i Kelvin)
ΔG < 0: Spontan reaktion
ΔG > 0: Icke-spontan (kräver energitillförsel)
ΔG = 0: Jämvikt</div>
<table class="theory-table">
  <tr><th>ΔH</th><th>ΔS</th><th>ΔG = ΔH − TΔS</th><th>Spontan?</th></tr>
  <tr><td>−</td><td>+</td><td>Alltid −</td><td>Ja, alltid</td></tr>
  <tr><td>−</td><td>−</td><td>− vid låg T</td><td>Ja vid låg T</td></tr>
  <tr><td>+</td><td>+</td><td>− vid hög T</td><td>Ja vid hög T</td></tr>
  <tr><td>+</td><td>−</td><td>Alltid +</td><td>Nej, aldrig</td></tr>
</table>
`
  },
  {
    cat: "Laborativ kemi & säkerhet",
    icon: "🔬",
    html: `
<h2>🔬 Laborativ kemi &amp; säkerhet</h2>
<p class="theory-intro">Säkerhet i laboratoriet är grundläggande. Det här avsnittet täcker skyddsregler, GHS-symboler, vanlig laboratorieutrustning, viktiga tekniker och felanalys.</p>

<h3>Grundläggande säkerhetsregler</h3>
<ul>
  <li>Skyddsglasögon bärs <strong>alltid</strong> i labbet – även åskådare</li>
  <li>Labbrock och slutna skor skyddar mot stänk och spill</li>
  <li>Inga drycker eller mat i labbet</li>
  <li>Lång hår ska bindas upp</li>
  <li>Läs säkerhetsdatabladet (SDS) för okända kemikalier</li>
  <li>Jobba alltid i dragskåp med flyktiga eller giftiga ämnen</li>
  <li>Häll alltid syra i vatten (aldrig tvärtom)</li>
  <li>Känn till var nöddusch, ögonsköljning, brandsläckare och första hjälpen finns</li>
</ul>

<h3>GHS-faropiktogram</h3>
<table class="theory-table">
  <tr><th>Symbol</th><th>Faroklass</th><th>Exempel</th></tr>
  <tr><td>💀 Dödskalle</td><td>Akut toxicitet (cat 1–3)</td><td>HCN, Cl₂</td></tr>
  <tr><td>❗ Utropstecken</td><td>Irriterande, skadlig</td><td>NaOH (sp. lösning), aceton</td></tr>
  <tr><td>🔥 Flamma</td><td>Brandfarlig</td><td>Etanol, aceton, hexan</td></tr>
  <tr><td>🧪 Frätande</td><td>Frätande för metaller/hud</td><td>H₂SO₄ konc., NaOH konc.</td></tr>
  <tr><td>💥 Explosion</td><td>Explosiv/oxiderande</td><td>KNO₃, H₂O₂ konc.</td></tr>
  <tr><td>⚠️ Miljö</td><td>Farlig för miljön</td><td>Kvicksilver, kloroform</td></tr>
  <tr><td>☢️ Radioaktiv</td><td>Radioaktiv</td><td>U, Ra, Cs-137</td></tr>
</table>

<h3>Laboratorieutrustning</h3>
<table class="theory-table">
  <tr><th>Utrustning</th><th>Användning</th><th>Precision</th></tr>
  <tr><td>Bägare</td><td>Blandning, uppvärmning</td><td>Låg (±5–10%)</td></tr>
  <tr><td>Erlenmeyerkolv</td><td>Titrering, reaktioner</td><td>Låg</td></tr>
  <tr><td>Mätkolv</td><td>Exakt volym – beredning av lösning</td><td>Hög (±0,01%)</td></tr>
  <tr><td>Pipett (volym)</td><td>Exakt volym av lösning</td><td>Hög</td></tr>
  <tr><td>Byrett</td><td>Titrering – mäta exakt volym</td><td>Hög (±0,05 mL)</td></tr>
  <tr><td>Graderat rör</td><td>Gasvolym (t.ex. eudiometer)</td><td>Medel</td></tr>
  <tr><td>Spektrofotometer</td><td>Absorbans → koncentration</td><td>Hög</td></tr>
  <tr><td>pH-meter</td><td>Exakt pH-mätning</td><td>Hög (±0,01 pH)</td></tr>
</table>

<h3>Viktiga laborationstekniker</h3>
<p><strong>Titrering:</strong> Fyll byretten med titratorlösning. Läs av nollpunkten. Tillsätt droppvis nära ekvivalenspunkten. Läs av slutvolymen. Beräkna c(okänd) = c(känd)×V(känd)/V(okänd).</p>
<p><strong>Filtrering:</strong> Separerar fast–flytande. Gravity filtration (filterpapper i tratt) eller vakuumfiltration (snabbare). Fälls ut vid fällningsreaktioner.</p>
<p><strong>Destillation:</strong> Separerar baserat på olika kokpunkter. Enkla destillationen för vätskor med >25°C bp-skillnad. Fraktionering för blandningar med liten bp-skillnad (t.ex. råolja).</p>
<p><strong>Kromatografi:</strong> Separerar baserat på olika affinitet för stationär/mobil fas. TLC (tunnskiktskromatografi) – snabb analys av organiska ämnen. GC/HPLC – instrumentanalys.</p>
<p><strong>Spektroskopi:</strong> Beer-Lamberts lag: A = ε × l × c (absorbans proportionell mot koncentration). Används för att bestämma obekanta koncentrationer med standardkurva.</p>

<h3>Felanalys</h3>
<p>I varje mätning finns osäkerhet. Det är viktigt att redovisa resultat korrekt:</p>
<ul>
  <li><strong>Systematiskt fel:</strong> Felkalibrerad våg, temperaturskillnad, ofullständig reaktion. Påverkar noggrannheten.</li>
  <li><strong>Slumpmässigt fel:</strong> Variation i avläsning, temperaturfluktuationer. Påverkar precisionen. Minskas med upprepade mätningar.</li>
  <li><strong>Procentuellt fel:</strong> |uppmätt − sann| / sann × 100 %</li>
</ul>
<div class="formula-box">Signifikanta siffror: Använd rätt antal för att ange mätprecision.
Våg med ±0,01 g → ange 2 decimaler.
Byrett ±0,05 mL → ange 2 decimaler.</div>
<div class="tip-box"><strong>Labrapportstruktur:</strong> Syfte → Teori → Metod → Resultat (tabeller/grafer) → Diskussion (felkällor) → Slutsats. Alla enheter ska anges och beräkningar visas.</div>
`
  },
];
"""

# Replace the old THEORY block
old_theory_block = html[ti:theory_end]
html = html[:ti] + NEW_THEORY + html[theory_end:]
print(f"Step 3 OK: Theory expanded (was {len(old_theory_block)}, now {len(NEW_THEORY)} chars)")

# ============================================================
# DONE
# ============================================================
with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\nDone! File size: {len(html)} chars")
