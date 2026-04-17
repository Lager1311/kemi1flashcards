import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# ─────────────────────────────────────────────
# 1. CSS – lägg in direkt efter sista :root/body-blocket
# ─────────────────────────────────────────────
new_css = """
/* ═══════════════════════════════════════════
   STUDIEPLAN SCREEN
═══════════════════════════════════════════ */
#studieplanScreen { padding: 0 0 calc(var(--navbar-height) + 16px); }

.sp-hero {
  background: var(--accent-grad);
  color: #fff;
  padding: 36px 20px 28px;
  text-align: center;
}
.sp-hero h1 { font-size: 1.55rem; font-weight: 800; margin: 0 0 6px; }
.sp-hero p  { font-size: 0.95rem; opacity: 0.88; margin: 0; }

/* ── Tab switcher (Faser / Daglig / Betyg) ── */
.sp-tabs {
  display: flex;
  gap: 0;
  background: var(--surface2);
  margin: 0 16px 20px;
  border-radius: 14px;
  padding: 4px;
  box-shadow: var(--shadow-card);
}
.sp-tab {
  flex: 1;
  padding: 10px 6px;
  border: none;
  background: transparent;
  color: var(--text2);
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 11px;
  cursor: pointer;
  transition: var(--transition);
  font-family: inherit;
}
.sp-tab.active {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 2px 8px rgba(79,70,229,0.35);
}

/* ── Tab panels ── */
.sp-panel { display: none; padding: 0 16px; }
.sp-panel.active { display: block; }

/* ── Phase timeline ── */
.sp-timeline { display: flex; flex-direction: column; gap: 0; }

.sp-phase {
  position: relative;
  padding: 0 0 0 52px;
  margin-bottom: 8px;
}
.sp-phase:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 22px;
  top: 52px;
  bottom: -8px;
  width: 3px;
  background: linear-gradient(to bottom, var(--phase-color, var(--accent)), transparent);
  border-radius: 2px;
}
.sp-phase-dot {
  position: absolute;
  left: 0;
  top: 10px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--phase-color, var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1;
}
.sp-phase-card {
  background: var(--surface);
  border-radius: var(--radius-sm);
  padding: 16px;
  box-shadow: var(--shadow-card);
  border-left: 3px solid var(--phase-color, var(--accent));
}
.sp-phase-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--phase-color, var(--accent));
  margin-bottom: 2px;
}
.sp-phase-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 4px;
}
.sp-phase-sub {
  font-size: 0.82rem;
  color: var(--text2);
  margin-bottom: 12px;
}
.sp-steps { list-style: none; padding: 0; margin: 0 0 12px; display: flex; flex-direction: column; gap: 8px; }
.sp-step {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.88rem;
  color: var(--text);
  line-height: 1.4;
}
.sp-step-num {
  min-width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--accent-light);
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}
.sp-step-text { flex: 1; }
.sp-step strong { color: var(--text); }

.sp-nav-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
.sp-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: var(--transition);
  font-family: inherit;
}
.sp-chip:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.12); }
.chip-teori    { background: #ede9fe; color: #6d28d9; }
.chip-flash    { background: #e0f2fe; color: #0369a1; }
.chip-rakna    { background: #dcfce7; color: #15803d; }
.chip-formler  { background: #fef9c3; color: #92400e; }
.chip-pt       { background: #fee2e2; color: #b91c1c; }
[data-theme=dark] .chip-teori   { background: rgba(109,40,217,0.25); color: #c4b5fd; }
[data-theme=dark] .chip-flash   { background: rgba(3,105,161,0.25);  color: #7dd3fc; }
[data-theme=dark] .chip-rakna   { background: rgba(21,128,61,0.25);  color: #86efac; }
[data-theme=dark] .chip-formler { background: rgba(146,64,14,0.25);  color: #fde68a; }
[data-theme=dark] .chip-pt      { background: rgba(185,28,28,0.25);  color: #fca5a5; }

.sp-goal {
  margin-top: 14px;
  padding: 10px 12px;
  background: var(--accent-light);
  border-radius: 10px;
  font-size: 0.83rem;
  color: var(--accent-dark);
  display: flex;
  align-items: center;
  gap: 8px;
}
[data-theme=dark] .sp-goal { color: #a5b4fc; }

/* ── Daglig rutin ── */
.sp-routine-header {
  text-align: center;
  margin-bottom: 20px;
}
.sp-routine-header h2 { font-size: 1.2rem; font-weight: 800; color: var(--text); margin: 0 0 4px; }
.sp-routine-header p  { font-size: 0.87rem; color: var(--text2); margin: 0; }

.sp-day { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
.sp-day-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text2); margin-bottom: 2px; }

.sp-routine-item {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--surface);
  border-radius: var(--radius-sm);
  padding: 14px;
  box-shadow: var(--shadow-card);
}
.sp-routine-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}
.sp-routine-info { flex: 1; }
.sp-routine-title { font-size: 0.9rem; font-weight: 700; color: var(--text); }
.sp-routine-desc  { font-size: 0.8rem; color: var(--text2); margin-top: 2px; }
.sp-routine-time  {
  font-size: 0.78rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 20px;
  background: var(--accent-light);
  color: var(--accent);
  white-space: nowrap;
}
[data-theme=dark] .sp-routine-time { color: #a5b4fc; }

.sp-total-bar {
  background: var(--surface2);
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  box-shadow: var(--shadow-card);
}
.sp-total-bar span:first-child { font-size: 0.9rem; font-weight: 700; color: var(--text); }
.sp-total-bar span:last-child  { font-size: 0.9rem; font-weight: 800; color: var(--accent); }

/* ── Betyg-kort ── */
.sp-grade-cards { display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px; }

.sp-grade-card {
  border-radius: var(--radius-sm);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}
.sp-grade-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  cursor: pointer;
  user-select: none;
}
.sp-grade-badge {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 900;
  color: #fff;
  flex-shrink: 0;
}
.grade-e .sp-grade-badge { background: #10b981; }
.grade-c .sp-grade-badge { background: #3b82f6; }
.grade-a .sp-grade-badge { background: #8b5cf6; }
.grade-e .sp-grade-header { background: rgba(16,185,129,0.1); }
.grade-c .sp-grade-header { background: rgba(59,130,246,0.1); }
.grade-a .sp-grade-header { background: rgba(139,92,246,0.1); }
.sp-grade-title { flex: 1; }
.sp-grade-title strong { font-size: 1rem; font-weight: 800; color: var(--text); display: block; }
.sp-grade-title span   { font-size: 0.8rem; color: var(--text2); }
.sp-grade-arrow { font-size: 1rem; color: var(--text2); transition: transform 0.2s; }
.sp-grade-card.open .sp-grade-arrow { transform: rotate(180deg); }
.sp-grade-body {
  display: none;
  background: var(--surface);
  padding: 0 16px 16px;
  border-top: 1px solid var(--border);
}
.sp-grade-card.open .sp-grade-body { display: block; }
.sp-grade-list { list-style: none; padding: 12px 0 0; margin: 0; display: flex; flex-direction: column; gap: 9px; }
.sp-grade-list li { display: flex; gap: 8px; font-size: 0.87rem; color: var(--text); line-height: 1.4; }
.sp-grade-list li::before { content: '→'; color: var(--accent); font-weight: 800; flex-shrink: 0; }
.sp-focus-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }

/* ── Motivations-banner ── */
.sp-banner {
  background: var(--accent-grad);
  border-radius: var(--radius-sm);
  padding: 16px;
  text-align: center;
  color: #fff;
  margin-top: 8px;
}
.sp-banner p { margin: 0; font-size: 0.9rem; font-weight: 600; line-height: 1.5; }
"""

# Infoga CSS precis före avslutande </style>
style_close = '</style>'
idx = content.rfind(style_close)
content = content[:idx] + new_css + '\n' + content[idx:]
print("CSS added.")

# ─────────────────────────────────────────────
# 2. HTML – lägg studieplan-screen precis FÖRE </main>
# ─────────────────────────────────────────────
studieplan_html = """
  <!-- ══════════════════════════════════════════
       STUDIEPLAN SCREEN
  ══════════════════════════════════════════ -->
  <div id="studieplanScreen" class="screen">

    <!-- Hero -->
    <div class="sp-hero">
      <h1>🎯 Studieplan</h1>
      <p>Nå högsta betyg – ett steg i taget</p>
    </div>

    <!-- Tabs -->
    <div style="padding:16px 16px 0;">
      <div class="sp-tabs">
        <button class="sp-tab active" onclick="spTab('faser')">📅 Faser</button>
        <button class="sp-tab" onclick="spTab('daglig')">⏱️ Daglig rutin</button>
        <button class="sp-tab" onclick="spTab('betyg')">🏆 Betyg</button>
      </div>
    </div>

    <!-- ── PANEL: FASER ── -->
    <div id="spPanel-faser" class="sp-panel active">
      <div class="sp-timeline">

        <!-- FAS 1 -->
        <div class="sp-phase" style="--phase-color:#10b981;">
          <div class="sp-phase-dot">🌱</div>
          <div class="sp-phase-card">
            <div class="sp-phase-label">Fas 1</div>
            <div class="sp-phase-title">Grundförståelse</div>
            <div class="sp-phase-sub">Bygg upp grunden – ett område i taget</div>
            <ul class="sp-steps">
              <li class="sp-step">
                <div class="sp-step-num">1</div>
                <div class="sp-step-text">Läs igenom <strong>ett teoriavsnitt</strong> i taget – försök förstå helheten innan du memorerar</div>
              </li>
              <li class="sp-step">
                <div class="sp-step-num">2</div>
                <div class="sp-step-text">Kör <strong>flashcards</strong> på samma ämnesområde direkt efteråt, medan minnet är fräscht</div>
              </li>
              <li class="sp-step">
                <div class="sp-step-num">3</div>
                <div class="sp-step-text">Repetera tills du klarar <strong>80% utan att titta</strong> – gå sedan vidare till nästa område</div>
              </li>
            </ul>
            <div class="sp-nav-chips">
              <button class="sp-chip chip-teori"  onclick="navTo('theoryScreen')">📖 Teori</button>
              <button class="sp-chip chip-flash"  onclick="navTo('homeScreen')">🃏 Flashcards</button>
            </div>
            <div class="sp-goal">🎯 <span>Mål: klara 80% av flashcards i varje kategori utan hjälp</span></div>
          </div>
        </div>

        <!-- FAS 2 -->
        <div class="sp-phase" style="--phase-color:#f59e0b;">
          <div class="sp-phase-dot">🔥</div>
          <div class="sp-phase-card">
            <div class="sp-phase-label">Fas 2</div>
            <div class="sp-phase-title">Aktiv träning</div>
            <div class="sp-phase-sub">Koppla begrepp till beräkningar</div>
            <ul class="sp-steps">
              <li class="sp-step">
                <div class="sp-step-num">1</div>
                <div class="sp-step-text">Öppna <strong>Formler</strong> som referens – du ska lära dig dem, men ännu inte utantill</div>
              </li>
              <li class="sp-step">
                <div class="sp-step-num">2</div>
                <div class="sp-step-text">Gör <strong>räkneuppgifter</strong> dagligen, minst 20–30 min. Börja med lv 1, jobba uppåt</div>
              </li>
              <li class="sp-step">
                <div class="sp-step-num">3</div>
                <div class="sp-step-text">Använd <strong>periodiska systemet</strong> aktivt – slå upp atommassor och laddningar medan du räknar</div>
              </li>
              <li class="sp-step">
                <div class="sp-step-num">4</div>
                <div class="sp-step-text">Repetera flashcard-kategorier du fortfarande svarar fel på</div>
              </li>
            </ul>
            <div class="sp-nav-chips">
              <button class="sp-chip chip-formler" onclick="navTo('formulaScreen')">📐 Formler</button>
              <button class="sp-chip chip-rakna"   onclick="navTo('exerciseScreen')">🧮 Räkneuppgifter</button>
              <button class="sp-chip chip-pt"      onclick="navTo('periodicScreen')">⚗️ Periodiska systemet</button>
              <button class="sp-chip chip-flash"   onclick="navTo('homeScreen')">🃏 Flashcards</button>
            </div>
            <div class="sp-goal">🎯 <span>Mål: lösa lv 1–2 självständigt med formler som stöd</span></div>
          </div>
        </div>

        <!-- FAS 3 -->
        <div class="sp-phase" style="--phase-color:#8b5cf6;">
          <div class="sp-phase-dot">🏆</div>
          <div class="sp-phase-card">
            <div class="sp-phase-label">Fas 3</div>
            <div class="sp-phase-title">Befästning & A-nivå</div>
            <div class="sp-phase-sub">Utan hjälpmedel – som på provet</div>
            <ul class="sp-steps">
              <li class="sp-step">
                <div class="sp-step-num">1</div>
                <div class="sp-step-text"><strong>Stäng Formler-referensen</strong> – försök lösa uppgifterna utan stöd, precis som på ett prov</div>
              </li>
              <li class="sp-step">
                <div class="sp-step-num">2</div>
                <div class="sp-step-text">Kör flashcards med <strong>gömda ledtrådar</strong> – välj "Fri text"-läget för tuffare övning</div>
              </li>
              <li class="sp-step">
                <div class="sp-step-num">3</div>
                <div class="sp-step-text">Fokusera på <strong>räkneuppgifter lv 3</strong> – de du tidigare misslyckat med eller hoppat över</div>
              </li>
              <li class="sp-step">
                <div class="sp-step-num">4</div>
                <div class="sp-step-text">Snabbrepetition av <strong>teori-avsnitten</strong> – läs förklaringarna en gång till och koppla dem till räkneuppgifterna</div>
              </li>
            </ul>
            <div class="sp-nav-chips">
              <button class="sp-chip chip-rakna"  onclick="navTo('exerciseScreen')">🧮 Räkneuppgifter</button>
              <button class="sp-chip chip-flash"  onclick="navTo('homeScreen')">🃏 Fri text-läge</button>
              <button class="sp-chip chip-teori"  onclick="navTo('theoryScreen')">📖 Teori</button>
            </div>
            <div class="sp-goal">🎯 <span>Mål: klara lv 3-uppgifter utan formler – förstå VARFÖR, inte bara HUR</span></div>
          </div>
        </div>

      </div><!-- /.sp-timeline -->
    </div><!-- /#spPanel-faser -->

    <!-- ── PANEL: DAGLIG RUTIN ── -->
    <div id="spPanel-daglig" class="sp-panel">
      <div class="sp-routine-header">
        <h2>⏱️ Din dagliga 40-minutersrutin</h2>
        <p>Konsekvent liten insats slår intensiv plugghelg</p>
      </div>

      <div class="sp-day">
        <div class="sp-day-label">☀️ Morgon (10 min)</div>
        <div class="sp-routine-item">
          <div class="sp-routine-icon" style="background:#e0f2fe;">🃏</div>
          <div class="sp-routine-info">
            <div class="sp-routine-title">Flashcards – snabbrepetition</div>
            <div class="sp-routine-desc">Kör 10–15 kort. Fokusera på de du är osäker på sedan igår</div>
          </div>
          <div class="sp-routine-time">10 min</div>
        </div>
      </div>

      <div class="sp-day">
        <div class="sp-day-label">📚 Studiepass (20–25 min)</div>
        <div class="sp-routine-item">
          <div class="sp-routine-icon" style="background:#dcfce7;">🧮</div>
          <div class="sp-routine-info">
            <div class="sp-routine-title">Räkneuppgifter – aktivt</div>
            <div class="sp-routine-desc">Minst 5 uppgifter. Läs steg-för-steg-förklaringen om du fastnar</div>
          </div>
          <div class="sp-routine-time">20 min</div>
        </div>
        <div class="sp-routine-item">
          <div class="sp-routine-icon" style="background:#ede9fe;">📖</div>
          <div class="sp-routine-info">
            <div class="sp-routine-title">Teori eller PT</div>
            <div class="sp-routine-desc">Läs ett nytt avsnitt ELLER slå upp element/data du stötte på</div>
          </div>
          <div class="sp-routine-time">5 min</div>
        </div>
      </div>

      <div class="sp-day">
        <div class="sp-day-label">🌙 Kväll (10 min)</div>
        <div class="sp-routine-item">
          <div class="sp-routine-icon" style="background:#fef9c3;">🃏</div>
          <div class="sp-routine-info">
            <div class="sp-routine-title">Flashcards – dagens ämne</div>
            <div class="sp-routine-desc">Kör korten för det område du räknade på idag. Avsluta passet</div>
          </div>
          <div class="sp-routine-time">10 min</div>
        </div>
      </div>

      <div class="sp-total-bar">
        <span>⏱️ Total tid per dag</span>
        <span>~40 min</span>
      </div>

      <div style="margin-top:20px;">
        <div class="sp-day-label" style="margin-bottom:10px;">🔗 Starta direkt</div>
        <div class="sp-nav-chips">
          <button class="sp-chip chip-flash"  onclick="navTo('homeScreen')">🃏 Flashcards</button>
          <button class="sp-chip chip-rakna"  onclick="navTo('exerciseScreen')">🧮 Räkneuppgifter</button>
          <button class="sp-chip chip-teori"  onclick="navTo('theoryScreen')">📖 Teori</button>
          <button class="sp-chip chip-pt"     onclick="navTo('periodicScreen')">⚗️ Periodiska systemet</button>
          <button class="sp-chip chip-formler" onclick="navTo('formulaScreen')">📐 Formler</button>
        </div>
      </div>

      <div class="sp-banner" style="margin-top:20px;">
        <p>💡 <strong>Hjärnan lär sig bäst med upprepning över tid.</strong><br>
        40 min varje dag i 2 veckor > 8 timmar natten innan provet.</p>
      </div>
    </div><!-- /#spPanel-daglig -->

    <!-- ── PANEL: BETYG ── -->
    <div id="spPanel-betyg" class="sp-panel">

      <div class="sp-grade-cards">

        <!-- Betyg E -->
        <div class="sp-grade-card grade-e" onclick="spToggleGrade(this)">
          <div class="sp-grade-header">
            <div class="sp-grade-badge">E</div>
            <div class="sp-grade-title">
              <strong>Betyg E – Godkänt</strong>
              <span>Förstå begreppen och grundläggande räkning</span>
            </div>
            <span class="sp-grade-arrow">▼</span>
          </div>
          <div class="sp-grade-body">
            <ul class="sp-grade-list">
              <li>Läs igenom <strong>alla teoriavsnitt</strong> minst en gång – förstå vad varje begrepp betyder</li>
              <li>Klara <strong>flashcards lv 1</strong> i alla kategorier – du ska kunna förklara begreppen med egna ord</li>
              <li>Lös <strong>räkneuppgifter nivå 1</strong> med formelblad som stöd – fokusera på att använda rätt formel</li>
              <li>Använd <strong>steg-för-steg-förklaringarna</strong> flitigt – de visar exakt hur du ska tänka</li>
              <li>Slå upp atommassor i <strong>periodiska systemet</strong> – du behöver inte kunna dem utantill</li>
            </ul>
            <div class="sp-focus-chips">
              <button class="sp-chip chip-teori"  onclick="navTo('theoryScreen');event.stopPropagation()">📖 Teori</button>
              <button class="sp-chip chip-flash"  onclick="navTo('homeScreen');event.stopPropagation()">🃏 Flashcards lv 1</button>
              <button class="sp-chip chip-rakna"  onclick="navTo('exerciseScreen');event.stopPropagation()">🧮 Räkna lv 1</button>
            </div>
          </div>
        </div>

        <!-- Betyg C -->
        <div class="sp-grade-card grade-c" onclick="spToggleGrade(this)">
          <div class="sp-grade-header">
            <div class="sp-grade-badge">C</div>
            <div class="sp-grade-title">
              <strong>Betyg C – Väl godkänt</strong>
              <span>Bemästra formlerna och räkna självständigt</span>
            </div>
            <span class="sp-grade-arrow">▼</span>
          </div>
          <div class="sp-grade-body">
            <ul class="sp-grade-list">
              <li>Kunna <strong>alla formler utantill</strong> – du ska inte behöva slå upp dem under provet</li>
              <li>Klara <strong>räkneuppgifter nivå 1–2</strong> utan ledtrådar – välj rätt formel och utför beräkningen</li>
              <li>Klara <strong>alla flashcards</strong> (lv 1–2) i fri text-läget utan att se svaret</li>
              <li>Förstå sambanden: t.ex. koppla <strong>gaslagarna</strong> till kinetisk teori, pH till Ka-uttrycket</li>
              <li>Använda <strong>periodiska systemet</strong> för att förstå egenskapsmönster, inte bara atommassor</li>
            </ul>
            <div class="sp-focus-chips">
              <button class="sp-chip chip-formler" onclick="navTo('formulaScreen');event.stopPropagation()">📐 Formler utantill</button>
              <button class="sp-chip chip-rakna"   onclick="navTo('exerciseScreen');event.stopPropagation()">🧮 Räkna lv 2</button>
              <button class="sp-chip chip-flash"   onclick="navTo('homeScreen');event.stopPropagation()">🃏 Fri text-läge</button>
            </div>
          </div>
        </div>

        <!-- Betyg A -->
        <div class="sp-grade-card grade-a" onclick="spToggleGrade(this)">
          <div class="sp-grade-header">
            <div class="sp-grade-badge">A</div>
            <div class="sp-grade-title">
              <strong>Betyg A – Mycket väl godkänt</strong>
              <span>Förstå VARFÖR – djup och flexibel kunskap</span>
            </div>
            <span class="sp-grade-arrow">▼</span>
          </div>
          <div class="sp-grade-body">
            <ul class="sp-grade-list">
              <li>Förstå <strong>varför formlerna ser ut som de gör</strong> – härleda dem från grundprinciper om möjligt</li>
              <li>Klara <strong>räkneuppgifter nivå 3</strong> – multi-stegsuppgifter som kräver att du kombinerar flera koncept</li>
              <li>Kunna <strong>förklara kemiska fenomen</strong> på molekylnivå: varför kokar vatten vid 100°C, varför är HF en svag syra</li>
              <li>Klara <strong>alla flashcards utan ledtrådar</strong> – inklusive de svåraste lv 3-korten</li>
              <li>Se <strong>mönster och kopplingar</strong> mellan ämnesområden: termodynamik ↔ jämvikt ↔ elektrokemi</li>
              <li>Öva på att <strong>förklara högt</strong> – om du kan lära ut det kan du det</li>
            </ul>
            <div class="sp-focus-chips">
              <button class="sp-chip chip-rakna"  onclick="navTo('exerciseScreen');event.stopPropagation()">🧮 Räkna lv 3</button>
              <button class="sp-chip chip-teori"  onclick="navTo('theoryScreen');event.stopPropagation()">📖 Teori – djupläsning</button>
              <button class="sp-chip chip-flash"  onclick="navTo('homeScreen');event.stopPropagation()">🃏 Alla nivåer</button>
            </div>
          </div>
        </div>

      </div><!-- /.sp-grade-cards -->

      <div class="sp-banner">
        <p>🚀 <strong>Betyg A kräver inte mer tid – det kräver djupare förståelse.</strong><br>
        Fråga alltid &ldquo;varför?&rdquo; när du räknar och läser teori.</p>
      </div>

    </div><!-- /#spPanel-betyg -->

  </div><!-- /#studieplanScreen -->
"""

# Infoga precis före </main>
main_close = '</main>'
idx = content.rfind(main_close)
content = content[:idx] + studieplan_html + '\n  ' + content[idx:]
print("HTML screen added.")

# ─────────────────────────────────────────────
# 3. NAV-KNAPP – lägg till i nav-baren
# ─────────────────────────────────────────────
nav_button = '<button class="nav-btn" data-target="studieplanScreen"><span>🎯</span><span>Plan</span></button>'

# Hitta nav-baren (sista nav-btn)
last_nav_btn = content.rfind('</button>\n    </nav>')
if last_nav_btn == -1:
    # Försök alternativ
    last_nav_btn = content.rfind('data-target="theoryScreen"')
    end_of_btn = content.find('</button>', last_nav_btn)
    if end_of_btn != -1:
        content = content[:end_of_btn+9] + '\n    ' + nav_button + content[end_of_btn+9:]
        print("Nav button added (method 2).")
    else:
        print("WARNING: Could not find nav insertion point!")
else:
    content = content[:last_nav_btn] + f'</button>\n    {nav_button}\n    </nav>' + content[last_nav_btn + len('</button>\n    </nav>'):]
    print("Nav button added (method 1).")

# ─────────────────────────────────────────────
# 4. JAVASCRIPT – lägg till spTab och spToggleGrade funktioner
# ─────────────────────────────────────────────
new_js = """
// ── Studieplan tab-switcher ──
function spTab(name) {
  document.querySelectorAll('.sp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sp-panel').forEach(p => p.classList.remove('active'));
  const activeTab = document.querySelector(`.sp-tab[onclick*="'${name}'"]`);
  if (activeTab) activeTab.classList.add('active');
  const panel = document.getElementById('spPanel-' + name);
  if (panel) panel.classList.add('active');
}

// ── Studieplan grade accordion ──
function spToggleGrade(card) {
  card.classList.toggle('open');
}
"""

# Infoga JS precis före den sista avslutande </script>
script_close = '</script>'
last_script = content.rfind(script_close)
content = content[:last_script] + new_js + '\n' + content[last_script:]
print("JavaScript added.")

# ─────────────────────────────────────────────
# 5. SPARA
# ─────────────────────────────────────────────
with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Saved.")

# Snabb verifiering
import re
assert 'studieplanScreen' in content
assert 'spTab' in content
assert 'sp-phase' in content
print("Verification: OK")
print(f"File size: {len(content)//1024} KB")
