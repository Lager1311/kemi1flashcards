//  STATE
// ═══════════════════════════════════════════════════════
const CATEGORIES = [...new Set(CARDS.map(c => c.cat))];
const STORAGE_KEY = 'kemi1_v3';

let state = {
  theme: 'dark',
  selectedCats: new Set(),   // empty = none selected by default
  mode: 'flip',    // flip | mc | ft
  direction: 'term', // term | def | random
  cardData: {}, // id -> { correct, wrong, mastered, nextRound }
  currentRound: 0,
  mutedCards: new Set(), // muted card ids
};

let session = {
  queue: [],
  idx: 0,
  correct: 0,
  wrong: 0,
  wrongItems: [],
  flipped: false,
};

// ── Persistence ──
function saveState() {
  const toSave = {
    theme: state.theme,
    cardData: state.cardData,
    currentRound: state.currentRound,
    mutedCards: [...state.mutedCards],
    selectedCats: [...state.selectedCats],
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.theme) state.theme = saved.theme;
    if (saved.cardData) state.cardData = saved.cardData;
    if (saved.currentRound) state.currentRound = saved.currentRound;
    if (saved.mutedCards) state.mutedCards = new Set(saved.mutedCards);
    // selectedCats intentionally NOT restored — always starts with 0 selected
  } catch(e) {}
}

function getCardData(id) {
  if (!state.cardData[id]) state.cardData[id] = { correct:0, wrong:0, nextRound:0 };
  return state.cardData[id];
}

// ═══════════════════════════════════════════════════════
//  THEME
// ═══════════════════════════════════════════════════════
const themeBtn = document.getElementById('themeBtn');
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  themeBtn.textContent = state.theme === 'dark' ? '☀️ Ljust' : '🌙 Mörkt';
}
themeBtn.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(); saveState();
});

// ═══════════════════════════════════════════════════════
//  SCREENS
// ═══════════════════════════════════════════════════════
const SCREEN_TITLES = {
  homeScreen: 'Flashcards', theoryScreen: 'Teorigenomgång',
  tqScreen: 'Övningsfrågor', examScreen: 'Inför prov',
  formulaScreen: 'Formelsamling', tablesScreen: 'Tabeller',
  calcScreen: 'Kalkylator', periodicScreen: 'Periodiska systemet',
  planScreen: 'Studieplan', profileScreen: 'Profil', exerciseScreen: 'Räkna'
};
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const title = SCREEN_TITLES[id] || id;
  const el = document.getElementById('topbarTitle');
  if (el) el.textContent = title;
  document.title = 'Kemi 1 \u2013 ' + title;
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.screen === id);
  });
}

// ═══════════════════════════════════════════════════════
//  HOME SCREEN
// ═══════════════════════════════════════════════════════
function buildCategoryGrid() {
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = '';

  // "Alla" card
  const allCard = document.createElement('div');
  allCard.className = 'cat-card all-btn' + (state.selectedCats.size === 0 ? ' selected' : '');
  allCard.dataset.cat = '__all__';
  allCard.title = 'Alla kategorier';
  const allActive = CARDS.filter(c => !state.mutedCards.has(c.id)).length;
  allCard.innerHTML = `
    <div class="cat-card-top">
      <div class="cat-name">🌟 Alla kategorier</div>
      <div class="cat-count">${allActive} kort</div>
    </div>`;
  allCard.addEventListener('click', () => {
    if (state.selectedCats.size > 0) {
      state.selectedCats = new Set();   // reset – "Alla" = ingen specifik filtrering
    } else {
      state.selectedCats = new Set(CATEGORIES);  // om redan tomt → välj alla explicit
    }
    saveState();
    updateCatGrid();
  });
  grid.appendChild(allCard);

  CATEGORIES.forEach(cat => {
    const cards = CARDS.filter(c => c.cat === cat && !state.mutedCards.has(c.id));
    const allCatCards = CARDS.filter(c => c.cat === cat);
    const mutedCount = allCatCards.length - cards.length;
    const div = document.createElement('div');
    div.className = 'cat-card' + (state.selectedCats.has(cat) ? ' selected' : '');
    div.dataset.cat = cat;
    div.title = cat;
    div.innerHTML = `
      <div class="cat-card-top">
        <div class="cat-name">${cat}</div>
        <div class="cat-count">${cards.length} kort${mutedCount ? ' • <span style="color:var(--text2)">'+mutedCount+' tysta</span>' : ''}</div>
      </div>
      <button class="cat-manage-btn" data-cat="${cat}" title="Hantera kort i denna kategori">⚙️ Hantera</button>`;
    div.addEventListener('click', (e) => {
      if (e.target.closest('.cat-manage-btn')) return;
      if (state.selectedCats.has(cat)) {
        state.selectedCats.delete(cat);
      } else {
        state.selectedCats.add(cat);
      }
      saveState();
      updateCatGrid();
    });
    div.querySelector('.cat-manage-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openManageModal(cat);
    });
    grid.appendChild(div);
  });
  updateHomeStats();
}

function updateCatGrid() {
  document.querySelectorAll('.cat-card[data-cat]').forEach(el => {
    const cat = el.dataset.cat;
    if (cat === '__all__') {
      el.className = 'cat-card all-btn' + (state.selectedCats.size === 0 ? ' selected' : '');
    } else {
      el.className = 'cat-card' + (state.selectedCats.has(cat) ? ' selected' : '');
    }
  });
  updateHomeStats();
}

function openManageModal(cat) {
  const cards = CARDS.filter(c => c.cat === cat);
  document.getElementById('manageModalTitle').textContent = '⚙️ ' + cat;
  const muted = cards.filter(c => state.mutedCards.has(c.id)).length;
  document.getElementById('manageModalSubtitle').textContent =
    cards.length + ' kort  •  ' + muted + ' tysta  •  ' + (cards.length - muted) + ' aktiva';

  const list = document.getElementById('manageCardList');
  list.innerHTML = '';
  cards.forEach(card => {
    const isMuted = state.mutedCards.has(card.id);
    const item = document.createElement('div');
    item.className = 'manage-card-item' + (isMuted ? ' is-muted' : '');
    item.innerHTML = `
      <div class="manage-card-item-text">
        <div class="manage-card-term">${card.term}</div>
        <div class="manage-card-def">${card.def}</div>
      </div>
      <button class="mute-toggle ${isMuted ? '' : 'active'}" data-id="${card.id}">
        ${isMuted ? '🔇 Tyst' : '🔊 Aktiv'}
      </button>`;
    item.querySelector('.mute-toggle').addEventListener('click', () => {
      if (state.mutedCards.has(card.id)) {
        state.mutedCards.delete(card.id);
      } else {
        state.mutedCards.add(card.id);
      }
      saveState();
      openManageModal(cat); // re-render
      buildCategoryGrid();  // update counts
    });
    list.appendChild(item);
  });

  document.getElementById('muteAllBtn').onclick = () => {
    cards.forEach(c => state.mutedCards.add(c.id));
    saveState(); openManageModal(cat); buildCategoryGrid();
  };
  document.getElementById('unmuteAllBtn').onclick = () => {
    cards.forEach(c => state.mutedCards.delete(c.id));
    saveState(); openManageModal(cat); buildCategoryGrid();
  };

  document.getElementById('manageModalBackdrop').style.display = 'block';
}

document.getElementById('manageModalClose').addEventListener('click', () => {
  document.getElementById('manageModalBackdrop').style.display = 'none';
});
document.getElementById('manageModalBackdrop').addEventListener('click', (e) => {
  if (e.target === document.getElementById('manageModalBackdrop')) {
    document.getElementById('manageModalBackdrop').style.display = 'none';
  }
});

function updateHomeStats() {
  const all = CARDS.filter(c => !state.mutedCards.has(c.id));
  const sel = CARDS.filter(c => (state.selectedCats.size === 0 || state.selectedCats.has(c.cat)) && !state.mutedCards.has(c.id));
  document.getElementById('totalCards').textContent = all.length;
  document.getElementById('selectedCards').textContent = sel.length;
  document.getElementById('selectedCats').textContent =
    state.selectedCats.size === 0 ? 'Alla' : state.selectedCats.size;
}

// Mode buttons
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.mode;
  });
});

// Direction buttons
document.querySelectorAll('.dir-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dir-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.direction = btn.dataset.dir;
  });
});

// Reset
document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Återställa ALL framsteg? Detta kan inte ångras.')) {
    state.cardData = {};
    state.currentRound = 0;
    saveState();
    buildCategoryGrid();
    updateHomeStats();
    showToast('Framsteg återställt!');
  }
});

// Start
let _luckorFromHome = false;
document.getElementById('startBtn').addEventListener('click', () => {
  if (state.mode === 'luckor') {
    // Show exerciseScreen but keep Flashcards tab active
    _luckorFromHome = true;
    showScreen('exerciseScreen');
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.target === 'homeScreen');
    });
    // Hide Räkna-specific UI
    var _exHdr = document.querySelector('#exerciseScreen > .section-header');
    if (_exHdr) _exHdr.style.display = 'none';
    document.getElementById('exModeRow').style.display = 'none';
    if (!_exInited) { _exInited = true; initExercise(); }
    switchExMode('luckor');
    window.scrollTo(0, 0);
  } else {
    startSession();
  }
});

// ═══════════════════════════════════════════════════════
//  SESSION SETUP
// ═══════════════════════════════════════════════════════

// New one-pass session state
let _fcQueue = [];
let _fcCorrect = [];
let _fcWrong = [];
let _fcCurrentCard = null;
let _fcOriginalPool = [];

function startSession(wrongOnly = false) {
  state.currentRound++;

  let pool;
  if (wrongOnly && _fcWrong.length) {
    pool = _fcWrong.slice();
  } else {
    pool = CARDS.filter(c => (state.selectedCats.size === 0 || state.selectedCats.has(c.cat)) && !state.mutedCards.has(c.id));
  }

  if (state.mode === 'flip') {
    fcStartSession(pool);
  } else {
    // MC and FT modes use the old queue-based approach
    pool = shuffleArray([...pool]);
    session.queue = pool;
    session.idx = 0;
    session.correct = 0;
    session.wrong = 0;
    session.wrongItems = [];
    session.flipped = false;
    showScreen('quizScreen');
    showModeUI();
    renderCurrent();
  }
}

function fcStartSession(cardPool) {
  _fcOriginalPool = cardPool.slice();
  _fcQueue = shuffleArray(cardPool.slice());
  _fcCorrect = [];
  _fcWrong = [];
  _fcCurrentCard = null;

  // Also sync legacy session state so progress display works
  session.queue = _fcQueue.slice();
  session.idx = 0;
  session.correct = 0;
  session.wrong = 0;
  session.wrongItems = [];
  session.flipped = false;

  showScreen('quizScreen');
  showModeUI();
  fcShowNextCard();
}

function fcShowNextCard() {
  if (_fcQueue.length === 0) {
    fcShowResults();
    return;
  }
  _fcCurrentCard = _fcQueue.shift();

  // Unflip card
  const wrap = document.getElementById('cardWrap');
  if (wrap) wrap.classList.remove('flipped');
  session.flipped = false;
  document.getElementById('btnCorrect').disabled = true;
  document.getElementById('btnWrong').disabled = true;

  // Update progress
  const total = _fcCorrect.length + _fcWrong.length + _fcQueue.length + 1;
  const done = _fcCorrect.length + _fcWrong.length;
  document.getElementById('progressText').textContent = `Kort ${done + 1} av ${total}`;
  document.getElementById('progressPct').textContent = `${Math.round(done / total * 100)}%`;
  document.getElementById('progressFill').style.width = `${Math.round(done / total * 100)}%`;
  document.getElementById('scoreCorrect').textContent = `✓ ${_fcCorrect.length} rätt`;
  document.getElementById('scoreWrong').textContent = `✗ ${_fcWrong.length} fel`;
  document.getElementById('scoreRemain').textContent = `↻ ${_fcQueue.length + 1} kvar`;

  // Render card faces
  const dir = getDirection(_fcCurrentCard);
  renderFlip(_fcCurrentCard, dir);
}

function fcMarkAnswer(correct) {
  if (!_fcCurrentCard) return;
  if (correct) {
    _fcCorrect.push(_fcCurrentCard);
    session.correct++;
    const cd = getCardData(_fcCurrentCard.id);
    cd.correct++;
  } else {
    _fcWrong.push(_fcCurrentCard);
    session.wrong++;
    const cd = getCardData(_fcCurrentCard.id);
    cd.wrong++;
    if (!session.wrongItems.includes(_fcCurrentCard.id)) session.wrongItems.push(_fcCurrentCard.id);
  }
  saveState();
  _fcCurrentCard = null;
  fcShowNextCard();
}

function fcShowResults() {
  const total = _fcCorrect.length + _fcWrong.length;
  const pct = total > 0 ? Math.round(_fcCorrect.length / total * 100) : 0;

  const wrongListHTML = _fcWrong.length > 0
    ? '<p style="font-weight:600;margin-bottom:8px;text-align:left;">Kort du missade:</p>' +
      _fcWrong.map(c => `<div class="fc-wrong-card">❓ <strong>${c.term}</strong> – ${c.def}</div>`).join('')
    : '<p style="color:var(--accent);font-weight:600;">🎉 Inga fel – perfekt genomgång!</p>';

  const wrongBtnStyle = _fcWrong.length === 0 ? 'display:none;' : '';

  const html = `<div class="fc-results-screen">
    <div class="fc-results-hero">
      <div class="fc-results-score">${_fcCorrect.length} av ${total} rätt</div>
      <div class="fc-results-pct">${pct}%</div>
    </div>
    <div class="fc-results-wrong-list">${wrongListHTML}</div>
    <div class="fc-results-btns">
      <button class="fc-result-btn fc-btn-again-all" onclick="fcRestartAll()">🔁 Kör igen – alla kort</button>
      <button class="fc-result-btn fc-btn-again-wrong" style="${wrongBtnStyle}" onclick="fcRestartWrong()">❌ Kör igen – bara fel-korten</button>
      <button class="fc-result-btn fc-btn-quit" onclick="fcQuit()">← Tillbaka till menyn</button>
    </div>
  </div>`;

  // Show results inside quizScreen (replace flip mode area)
  const quizScreen = document.getElementById('quizScreen');
  let resultsDiv = document.getElementById('fcResultsContainer');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'fcResultsContainer';
    quizScreen.appendChild(resultsDiv);
  }
  resultsDiv.innerHTML = html;
  resultsDiv.style.display = 'block';

  // Hide the card/buttons area
  document.getElementById('flipMode').style.display = 'none';
  const header = quizScreen.querySelector('.quiz-header');
  if (header) header.style.display = 'none';
  const badges = quizScreen.querySelector('.score-badges');
  if (badges) badges.style.display = 'none';

  updateHomeStats();
}

function fcRestartAll() {
  _fcHideResults();
  fcStartSession(_fcOriginalPool);
}

function fcRestartWrong() {
  if (_fcWrong.length === 0) return;
  const wrongPool = _fcWrong.slice();
  _fcHideResults();
  fcStartSession(wrongPool);
}

function fcQuit() {
  _fcHideResults();
  navTo('homeScreen');
}

function _fcHideResults() {
  const resultsDiv = document.getElementById('fcResultsContainer');
  if (resultsDiv) resultsDiv.style.display = 'none';
  const quizScreen = document.getElementById('quizScreen');
  const header = quizScreen ? quizScreen.querySelector('.quiz-header') : null;
  if (header) header.style.display = '';
  const badges = quizScreen ? quizScreen.querySelector('.score-badges') : null;
  if (badges) badges.style.display = '';
}

function showModeUI() {
  document.getElementById('flipMode').style.display = state.mode === 'flip' ? 'block' : 'none';
  document.getElementById('mcMode').style.display = state.mode === 'mc' ? 'block' : 'none';
  document.getElementById('ftMode').style.display = state.mode === 'ft' ? 'block' : 'none';
}

// ═══════════════════════════════════════════════════════
//  RENDER CURRENT CARD
// ═══════════════════════════════════════════════════════
function getDirection(card) {
  if (state.direction === 'random') return Math.random() < 0.5 ? 'term' : 'def';
  return state.direction;
}

function renderCurrent() {
  if (session.idx >= session.queue.length) {
    endSession();
    return;
  }

  const card = session.queue[session.idx];
  const dir = getDirection(card);
  const total = session.queue.length;
  const done = session.idx;
  const pct = Math.round(done / total * 100);

  // Progress
  document.getElementById('progressText').textContent = `Kort ${done + 1} av ${total}`;
  document.getElementById('progressPct').textContent = `${pct}%`;
  document.getElementById('progressFill').style.width = `${pct}%`;
  document.getElementById('scoreCorrect').textContent = `✓ ${session.correct} rätt`;
  document.getElementById('scoreWrong').textContent = `✗ ${session.wrong} fel`;
  document.getElementById('scoreRemain').textContent = `↻ ${total - done} kvar`;

  if (state.mode === 'flip') renderFlip(card, dir);
  else if (state.mode === 'mc') renderMC(card, dir);
  else renderFT(card, dir);
}

// ── FLIP MODE ──
function renderFlip(card, dir) {
  const wrap = document.getElementById('cardWrap');
  wrap.classList.remove('flipped');
  session.flipped = false;

  const frontTerm = document.getElementById('cardTermText');
  const backDef = document.getElementById('cardDefText');
  const labelFront = document.getElementById('cardLabelFront');
  const labelBack = document.getElementById('cardLabelBack');
  const mn = document.getElementById('cardMnemonic');

  document.getElementById('cardCatFront').textContent = card.cat;
  document.getElementById('cardCatBack').textContent = card.cat;

  if (dir === 'term') {
    labelFront.textContent = 'TERM';
    labelBack.textContent = 'DEFINITION';
    frontTerm.textContent = card.term;
    backDef.textContent = card.def;
  } else {
    labelFront.textContent = 'DEFINITION';
    labelBack.textContent = 'TERM';
    frontTerm.textContent = card.def;
    backDef.textContent = card.term;
  }

  const tip = MNEMONICS[card.id];
  if (tip) { mn.textContent = tip; mn.className = 'card-mnemonic visible'; }
  else { mn.className = 'card-mnemonic'; }

  document.getElementById('btnCorrect').disabled = true;
  document.getElementById('btnWrong').disabled = true;
}

document.getElementById('cardScene').addEventListener('click', flipCard);

document.addEventListener('keydown', function(e) {
  // ── Flashcard shortcuts (flip mode only) ──────────────────
  const quizActive = document.getElementById('quizScreen') &&
                     document.getElementById('quizScreen').classList.contains('active');
  if (quizActive && state.mode === 'flip') {
    const tag = (e.target.tagName || '').toUpperCase();
    const inInput = tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable;
    if (!inInput) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        flipCard();
        return;
      }
      if ((e.key === 'ArrowRight' || e.key === '1') && session.flipped) {
        e.preventDefault();
        markAnswer(true);
        return;
      }
      if ((e.key === 'ArrowLeft' || e.key === '2') && session.flipped) {
        e.preventDefault();
        markAnswer(false);
        return;
      }
    }
  }

  // ── Escape: close any open modal / overlay ────────────────
  if (e.key === 'Escape') {
    // Periodic element detail modal
    var periodicBackdrop = document.getElementById('elModalBackdrop');
    if (periodicBackdrop && periodicBackdrop.classList.contains('open')) {
      periodicBackdrop.classList.remove('open');
      return;
    }
    // Exam prep popup overlay
    var examOv = document.getElementById('examPopupOverlay');
    if (examOv && examOv.style.display !== 'none' && typeof examClosePopup === 'function') {
      examClosePopup();
      return;
    }
    // Theory guide sidebar (mobile)
    var tgSidebar = document.getElementById('tgSidebar');
    if (tgSidebar && tgSidebar.classList.contains('open') && typeof tgCloseSidebar === 'function') {
      tgCloseSidebar();
      return;
    }
    // Mobile navigation sidebar
    var navSidebar = document.querySelector('.sidebar');
    if (navSidebar && navSidebar.classList.contains('open')) {
      navSidebar.classList.remove('open');
      var navOverlay = document.getElementById('sidebarOverlay');
      if (navOverlay) navOverlay.classList.remove('active');
      return;
    }
    // Suggestion dropdown in study session builder
    var sug = document.getElementById('ssSuggestions');
    if (sug && sug.style.display !== 'none') {
      sug.style.display = 'none';
    }
  }
});

function flipCard() {
  const wrap = document.getElementById('cardWrap');
  wrap.classList.toggle('flipped');
  session.flipped = !session.flipped;
  document.getElementById('btnCorrect').disabled = !session.flipped;
  document.getElementById('btnWrong').disabled = !session.flipped;
}

// btnCorrect and btnWrong use inline onclick handlers

function markAnswer(correct) {
  // In flip mode, use the new one-pass fc logic
  if (state.mode === 'flip') {
    fcMarkAnswer(correct);
    return;
  }
  // MC / FT modes use legacy queue logic
  const card = session.queue[session.idx];
  const cd = getCardData(card.id);
  if (correct) {
    cd.correct++;
    session.correct++;
  } else {
    cd.wrong++;
    session.wrong++;
    if (!session.wrongItems.includes(card.id)) session.wrongItems.push(card.id);
  }
  saveState();
  session.idx++;
  renderCurrent();
}

// ── MC MODE ──
function renderMC(card, dir) {
  const prompt = document.getElementById('mcPrompt');
  const tag = document.getElementById('mcTag');
  const term = document.getElementById('mcTerm');
  const optsDiv = document.getElementById('mcOptions');
  const feedback = document.getElementById('mcFeedback');
  const nextBtn = document.getElementById('mcNext');

  feedback.className = 'mc-feedback';
  nextBtn.className = 'next-btn';

  tag.textContent = card.cat;

  // Build options: 1 correct + 3 distractors from same or all cats
  let pool = CARDS.filter(c => c.id !== card.id);
  // Prefer same cat
  let sameCat = pool.filter(c => c.cat === card.cat);
  let others = pool.filter(c => c.cat !== card.cat);
  let distractors = [...sameCat, ...others].sort(() => Math.random() - 0.5).slice(0, 3);

  const options = [card, ...distractors].sort(() => Math.random() - 0.5);

  if (dir === 'term') {
    prompt.textContent = 'Vilken definition matchar termen?';
    term.textContent = card.term;
    optsDiv.innerHTML = options.map(o =>
      `<button class="mc-option" data-id="${o.id}">${o.def}</button>`
    ).join('');
  } else {
    prompt.textContent = 'Vilken term matchar definitionen?';
    term.textContent = card.def;
    optsDiv.innerHTML = options.map(o =>
      `<button class="mc-option" data-id="${o.id}">${o.term}</button>`
    ).join('');
  }

  optsDiv.querySelectorAll('.mc-option').forEach(btn => {
    btn.addEventListener('click', function() {
      const chosen = parseInt(this.dataset.id);
      const isCorrect = chosen === card.id;
      optsDiv.querySelectorAll('.mc-option').forEach(b => {
        b.disabled = true;
        if (parseInt(b.dataset.id) === card.id) b.classList.add('correct');
        else if (parseInt(b.dataset.id) === chosen && !isCorrect) b.classList.add('wrong');
      });
      const correctLabel = dir === 'term' ? card.def : card.term;
      const tipMC = MNEMONICS[card.id];
      feedback.innerHTML = (isCorrect
        ? `✓ Rätt! <strong>${dir==='term'?card.term:card.def}</strong>`
        : `✗ Fel. Rätt svar: <strong>${correctLabel}</strong>`)
        + (tipMC ? `<div class="mnemonic-chip">💡 ${tipMC}</div>` : '');
      feedback.className = 'mc-feedback show ' + (isCorrect ? 'ok' : 'fail');
      nextBtn.className = 'next-btn show';
      // Record
      const cd = getCardData(card.id);
      if (isCorrect) {
        cd.correct++; session.correct++;
      } else {
        cd.wrong++; session.wrong++;
        if (!session.wrongItems.includes(card.id)) session.wrongItems.push(card.id);
      }
      saveState();
    });
  });
}

document.getElementById('mcNext').addEventListener('click', () => { session.idx++; renderCurrent(); });

// ── FREE TEXT MODE ──
function renderFT(card, dir) {
  const prompt = document.getElementById('ftPrompt');
  const tag = document.getElementById('ftTag');
  const term = document.getElementById('ftTerm');
  const input = document.getElementById('ftInput');
  const feedback = document.getElementById('ftFeedback');
  const nextBtn = document.getElementById('ftNext');

  feedback.className = 'mc-feedback';
  nextBtn.className = 'next-btn';
  input.value = '';
  input.className = 'ft-input';
  input.disabled = false;
  document.getElementById('ftSubmit').disabled = false;
  document.getElementById('ftSkip').textContent = 'Visa svar';

  tag.textContent = card.cat;

  if (dir === 'term') {
    prompt.textContent = 'Vad är definitionen av termen?';
    term.textContent = card.term;
    input.placeholder = 'Beskriv vad termen betyder...';
  } else {
    prompt.textContent = 'Vilken term beskrivs?';
    term.textContent = card.def;
    input.placeholder = 'Skriv termen...';
  }

  function checkAnswer(skipped) {
    const answer = input.value.trim().toLowerCase();
    const correct = dir === 'term' ? card.def.toLowerCase() : card.term.toLowerCase();
    let isCorrect = false;
    if (!skipped) {
      // Fuzzy: check if key words match
      const keyWords = correct.split(/\s+/).filter(w => w.length > 3);
      const matches = keyWords.filter(w => answer.includes(w));
      isCorrect = matches.length >= Math.max(1, Math.floor(keyWords.length * 0.4));
    }
    input.disabled = true;
    document.getElementById('ftSubmit').disabled = true;
    if (!skipped) {
      input.className = 'ft-input ' + (isCorrect ? 'correct' : 'wrong');
    }
    const correctText = dir === 'term' ? card.def : card.term;
    const tipFT = MNEMONICS[card.id];
    const mnFT = tipFT ? `<div class="mnemonic-chip">💡 ${tipFT}</div>` : '';
    feedback.innerHTML = (skipped
      ? `Rätt svar: <strong>${correctText}</strong>`
      : (isCorrect ? `✓ Bra! Rätt svar: <strong>${correctText}</strong>` : `✗ Rätt svar: <strong>${correctText}</strong>`))
      + mnFT;
    feedback.className = 'mc-feedback show ' + (skipped ? 'fail' : (isCorrect ? 'ok' : 'fail'));
    nextBtn.className = 'next-btn show';
    document.getElementById('ftSkip').textContent = 'Hoppa över';

    const cd = getCardData(card.id);
    if (!skipped && isCorrect) {
      cd.correct++; session.correct++;
    } else {
      cd.wrong++; session.wrong++;
      if (!session.wrongItems.includes(card.id)) session.wrongItems.push(card.id);
    }
    saveState();
  }

  document.getElementById('ftSubmit').onclick = () => checkAnswer(false);
  document.getElementById('ftSkip').onclick = () => {
    if (input.disabled) return;
    checkAnswer(true);
  };
  input.onkeydown = (e) => { if (e.key === 'Enter' && !input.disabled) checkAnswer(false); };
  setTimeout(() => input.focus(), 100);
}

document.getElementById('ftNext').addEventListener('click', () => { session.idx++; renderCurrent(); });

// ═══════════════════════════════════════════════════════
//  END SESSION / SUMMARY
// ═══════════════════════════════════════════════════════
function endSession() {
  // Used by MC and FT modes only (flip mode uses fcShowResults)
  const total = session.correct + session.wrong;
  const pct = total ? Math.round(session.correct / total * 100) : 0;

  document.getElementById('sumCorrect').textContent = session.correct;
  document.getElementById('sumWrong').textContent = session.wrong;
  document.getElementById('sumMastered').textContent = 0;

  let icon = '😐', title = 'Bra jobbat!', sub = '';
  if (pct >= 90) { icon = '🏆'; title = 'Utmärkt!'; }
  else if (pct >= 70) { icon = '🎉'; title = 'Bra jobbat!'; }
  else if (pct >= 50) { icon = '📚'; title = 'Fortsätt öva!'; }
  else { icon = '💪'; title = 'Håll ut!'; }
  sub = `${pct}% rätt (${session.correct} av ${total})`;

  document.getElementById('summaryIcon').textContent = icon;
  document.getElementById('summaryTitle').textContent = title;
  document.getElementById('summarySubtitle').textContent = sub;

  const wrongOnlyBtn = document.getElementById('sumWrongOnly');
  wrongOnlyBtn.style.display = session.wrongItems.length ? 'block' : 'none';

  // Wrong list
  const wrongList = document.getElementById('wrongList');
  if (session.wrongItems.length) {
    wrongList.innerHTML = `<h3>Gå igenom igen (${session.wrongItems.length} kort):</h3>` +
      session.wrongItems.map(id => {
        const c = CARDS.find(x => x.id === id);
        return `<div class="wrong-item"><div class="wrong-item-term">${c.term}</div><div class="wrong-item-def">${c.def}</div></div>`;
      }).join('');
  } else {
    wrongList.innerHTML = '';
  }

  showScreen('summaryScreen');
  updateHomeStats();
}

document.getElementById('sumHome').addEventListener('click', () => navTo('homeScreen'));
document.getElementById('sumRestart').addEventListener('click', () => startSession(false));
document.getElementById('sumWrongOnly').addEventListener('click', () => startSession(true));
document.getElementById('quitBtn').addEventListener('click', () => navTo('homeScreen'));

// ═══════════════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════════════



// ═══════════════════════════════════════════════════════
//  NEW SESSION SYSTEM v2
// ═══════════════════════════════════════════════════════

// ── Session state ──────────────────────────────────────
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
  sovMethod: 'active_recall',
};

// ── AUTOCOMPLETE DATA ──────────────────────────────────
const SS_SUGGESTIONS = [
  'R\u00e4kneuppgifter \u2013 Alla',
  'R\u00e4kneuppgifter \u2013 Syror & baser',
  'R\u00e4kneuppgifter \u2013 Molber\u00e4kningar',
  'R\u00e4kneuppgifter \u2013 Termokemi',
  'R\u00e4kneuppgifter \u2013 Elektrokemi',
  'R\u00e4kneuppgifter \u2013 St\u00f6kiometri',
  'Flashcards \u2013 Alla',
  'Flashcards \u2013 \u00c4mnen, faser och reaktioner',
  'Flashcards \u2013 Atomer och periodiska systemet',
  'Flashcards \u2013 Kemiska bindningar',
  'Flashcards \u2013 Organiska \u00e4mnen \u00e4r kolf\u00f6reningar',
  'Flashcards \u2013 Kemiska ber\u00e4kningar',
  'Flashcards \u2013 Syror och baser',
  'Flashcards \u2013 Energi och kemi',
  'Flashcards \u2013 Reduktion och oxidation',
  'Blandat \u2013 Alla \u00e4mnen',
  'Blandat \u2013 Syror och baser',
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
    '<div class="ss-tag">' + t + '<button onclick="ssRemoveTag(\'' + t.replace(/'/g, "\'") + '\')">&#215;</button></div>'
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
      '<div class="ss-sug-item" onclick="ssAddTag(\'' + s.replace(/'/g, "\'") + '\')">' + s + '</div>'
    ).join('');
    box.style.display = 'block';
  }
}

function ssTagKeydown(e) {
  if (e.key === 'Enter') {
    const val = e.target.value.trim();
    if (val) { ssAddTag(val); }
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
    color: '#0f172a',
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
    color: '#1e3a8a',
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
    color: '#451a03',
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
    color: '#4c1d95',
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
    color: '#064e3b',
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
    '<div class="ss-method-card' + (i === 0 ? ' selected' : '') + '" id="ssmc_' + m.id + '" onclick="ssSelectMethod(\'' + m.id + '\')" style="border-left: 5px solid ' + (m.color || '#4f46e5') + '">',
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
  sovState.sovMethod = ssState.method;

  // Reset per-method state
  _arStreak = 0; _arBestStreak = 0; _arTimesPerCard = [];
  _wildScore = 0;

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
    'syror': ['Syror och baser'],
    'baser': ['Syror och baser'],
    'mol': ['Kemiska beräkningar'],
    'stoik': ['Kemiska beräkningar'],
    'ber\u00e4kn': ['Kemiska beräkningar'],
    'koncentr': ['Kemiska beräkningar'],
    'energi': ['Energi och kemi'],
    'termo': ['Energi och kemi'],
    'redox': ['Reduktion och oxidation'],
    'elek': ['Reduktion och oxidation'],
    'oxidat': ['Reduktion och oxidation'],
    'organ': ['Organiska ämnen är kolföreningar'],
    'kolv': ['Organiska ämnen är kolföreningar'],
    'atom': ['Atomer och periodiska systemet'],
    'period': ['Atomer och periodiska systemet'],
    'bindning': ['Kemiska bindningar'],
    'faser': ['Ämnen, faser och reaktioner'],
    '\u00e4mnen': ['Ämnen, faser och reaktioner'],
    'arbetsmet': ['Kemins arbetsmetoder'],
    'labb': ['Kemins arbetsmetoder'],
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

  // Hide navbar during session
  const nav = document.querySelector('.bottom-nav-wrap');
  if (nav) nav.style.display = 'none';

  if (step.type === 'session_end') { ssEndSession(false); return; }
  if (step.type === 'recall_summary') { sovRenderRecallSummary(); return; }
  if (step.type === 'pomo_work_start') { sovRenderPomoStart(); return; }
  if (step.type === 'pomo_break') { sovRenderPomoBreak(); return; }

  const method = sovState.sovMethod || 'active_recall';

  if (method === 'active_recall' || method === 'spaced_repetition') {
    if (step.type === 'recall' && step.card) sovRenderActiveRecall(step.card);
    else sovNext();
  } else if (method === 'feynman') {
    if (step.type === 'feynman' && step.card) sovRenderFeynmanMethod(step.card);
    else if (step.type === 'recall' && step.card) sovRenderFeynmanMethod(step.card);
    else sovNext();
  } else if (method === 'problem') {
    if (step.type === 'problem' && step.problem) sovRenderLabProblem(step.problem);
    else if (step.type === 'recall' && step.card) sovRenderActiveRecall(step.card);
    else sovNext();
  } else if (method === 'interleaving') {
    sovRenderWildcard(step);
  } else if (method === 'pomodoro') {
    sovRenderPomoStart();
  } else {
    // fallback to legacy renderers
    if (step.type === 'recall' && step.card) sovRenderRecall(step.card);
    else if (step.type === 'feynman' && step.card) sovRenderFeynman(step.card);
    else if (step.type === 'problem' && step.problem) sovRenderProblem(step.problem);
    else sovNext();
  }
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

// ── Render: Pomodoro (Sprintläget) ─────────────────────
function sovRenderPomoStart() {
  const content = document.getElementById('sovContent');
  if (!content) return;
  const total = sovState.totalSeconds;
  const remaining = sovState.remainingSeconds;
  const pct = total > 0 ? remaining / total : 1;
  const circumference = 565;
  const offset = circumference * (1 - pct);

  const elapsed = total - remaining;
  let zoneLabel = 'Zon 1 \u00b7 Flashcards', zoneClass = '';
  if (elapsed >= 20 * 60) { zoneLabel = 'Zon 3 \u00b7 Feynman'; zoneClass = 'zone3'; }
  else if (elapsed >= 8 * 60) { zoneLabel = 'Zon 2 \u00b7 R\u00e4kneuppgifter'; zoneClass = 'zone2'; }

  const m = Math.floor(remaining / 60);
  const s = String(remaining % 60).padStart(2, '0');

  content.innerHTML =
    '<div class="pomo-sprint">' +
    '  <h2 style="font-size:1rem;color:#64748b;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">\uD83C\uDF45 Sprintl\u00e4get</h2>' +
    '  <div class="pomo-big-timer">' +
    '    <svg width="200" height="200" viewBox="0 0 200 200">' +
    '      <circle class="pomo-circle-bg" cx="100" cy="100" r="90"/>' +
    '      <circle class="pomo-circle-fill ' + zoneClass + '" cx="100" cy="100" r="90" stroke-dasharray="' + circumference + '" stroke-dashoffset="' + offset + '"/>' +
    '    </svg>' +
    '    <div class="pomo-timer-center">' +
    '      <div class="pomo-timer-big">' + m + ':' + s + '</div>' +
    '      <div class="pomo-timer-zone">' + zoneLabel + '</div>' +
    '    </div>' +
    '  </div>' +
    '  <div class="pomo-zone-bar" style="max-width:300px">' +
    '    <div class="pomo-zone-seg z1" style="flex:8"></div>' +
    '    <div class="pomo-zone-seg z2" style="flex:12"></div>' +
    '    <div class="pomo-zone-seg z3" style="flex:5"></div>' +
    '  </div>' +
    '  <div class="pomo-content-area" id="pomoContentArea">' +
    '    <p style="text-align:center;color:#64748b;font-size:0.9rem">Laddar uppgift...</p>' +
    '  </div>' +
    '</div>';

  setTimeout(function() {
    const step = sovState.steps[sovState.stepIndex];
    const area = document.getElementById('pomoContentArea');
    if (!area || !step) return;
    if (step.type === 'recall' && step.card) {
      area.innerHTML =
        '<div class="ar-question" style="color:#1e293b;font-size:1.3rem;text-align:center;margin-bottom:16px">' + (step.card.term || step.card.q || '') + '</div>' +
        '<button class="ar-show-btn" style="background:#6366f1;display:block;margin:0 auto" onclick="pomoShowAnswer()">Visa svar</button>' +
        '<div id="pomoAnswer" style="display:none">' +
        '  <div style="background:#f1f5f9;border-radius:10px;padding:16px;margin:12px 0;text-align:center;color:#1e293b">' + (step.card.def || step.card.a || '') + '</div>' +
        '  <div class="ar-rate-row"><button class="ar-btn-wrong" onclick="pomoRate(false)">\u2717 Fel</button><button class="ar-btn-right" onclick="pomoRate(true)">\u2713 R\u00e4tt</button></div>' +
        '</div>';
    } else if (step.type === 'problem' && step.problem) {
      area.innerHTML =
        '<div style="background:#fff;border-radius:12px;padding:16px;border:1px solid #e2e8f0;margin-bottom:12px;color:#1e293b">' + (step.problem.q || '') + '</div>' +
        '<button class="ar-show-btn" style="background:#3b82f6;display:block;margin:0 auto" onclick="pomoShowAnswer()">Visa svar</button>' +
        '<div id="pomoAnswer" style="display:none">' +
        '  <div style="background:#f1f5f9;border-radius:10px;padding:16px;margin:12px 0;font-family:monospace;color:#1e293b">' + (step.problem.steps || []).join('<br>') + '<br><strong>Svar: ' + (step.problem.ans || '') + '</strong></div>' +
        '  <div class="ar-rate-row"><button class="ar-btn-wrong" onclick="pomoRate(false)">\u2717 Fick inte r\u00e4tt</button><button class="ar-btn-right" onclick="pomoRate(true)">\u2713 L\u00f6ste det!</button></div>' +
        '</div>';
    } else {
      area.innerHTML = '<button class="sov-action-btn" onclick="sovNext()">N\u00e4sta \u2192</button>';
    }
  }, 50);
}

function pomoShowAnswer() {
  const el = document.getElementById('pomoAnswer');
  const btn = document.querySelector('#pomoContentArea .ar-show-btn');
  if (el) el.style.display = 'block';
  if (btn) btn.style.display = 'none';
}

function pomoRate(correct) {
  if (correct) sovState.results.correct++;
  else sovState.results.incorrect++;
  sovNext();
}

function sovRenderPomoBreak() {
  const content = document.getElementById('sovContent');
  if (!content) return;
  const doneCards = sovState.steps.filter(function(s) { return s.type === 'recall' && s.card; }).slice(0, 5);
  const randCard = doneCards[Math.floor(Math.random() * doneCards.length)];
  content.innerHTML =
    '<div class="pomo-sprint">' +
    '  <div class="pomo-break-screen">' +
    '    <div style="font-size:3rem">\u2615</div>' +
    '    <h2 style="font-size:1.5rem;font-weight:800;color:#1e293b;margin:12px 0">5 minuters paus!</h2>' +
    '    <p style="color:#64748b">Str\u00e4ck p\u00e5 dig och drick lite vatten.</p>' +
    (randCard ?
      '<div class="pomo-break-q">Innan du pausar \u2013 vad \u00e4r definitionen av:<br><strong>' + (randCard.card.term || '') + '</strong></div>' +
      '<button class="ar-show-btn" style="background:#22c55e;margin:0 auto;display:block" onclick="pomoBreakReveal()">Visa svar</button>' +
      '<div id="pomoBreakAnswer" style="display:none;margin-top:12px;background:#dcfce7;border-radius:10px;padding:14px;color:#15803d">' + (randCard.card.def || '') + '</div>'
      : '') +
    '    <button style="margin-top:20px;background:#6366f1;color:#fff;border:none;border-radius:10px;padding:12px 28px;font-size:1rem;font-weight:700;cursor:pointer" onclick="sovNext()">Forts\u00e4tt sessionen \u2192</button>' +
    '  </div>' +
    '</div>';
}

function pomoBreakReveal() {
  const el = document.getElementById('pomoBreakAnswer');
  const btn = document.querySelector('.pomo-break-screen .ar-show-btn');
  if (el) el.style.display = 'block';
  if (btn) btn.style.display = 'none';
}

// ── Session end ─────────────────────────────────────────
function ssEndSession(manual) {
  sovState.running = false;
  if (sovState.timerInterval) { clearInterval(sovState.timerInterval); sovState.timerInterval = null; }
  if (_arTimer) { clearInterval(_arTimer); _arTimer = null; }
  if (_feynTimer) { clearInterval(_feynTimer); _feynTimer = null; }

  // Restore navbar
  const nav = document.querySelector('.bottom-nav-wrap');
  if (nav) nav.style.display = '';

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
      _buildMethodEndStats(),
      '  <button class="sov-action-btn" onclick="ssNewSession()">\uD83D\uDD04 Starta ny session</button>',
      '  <button class="sov-secondary-btn" onclick="ssDone()">\u2713 Avsluta f\u00f6r idag</button>',
      '</div>',
    ].join('\n');

    const timerEl = document.getElementById('sovTimer');
    if (timerEl) timerEl.textContent = '0:00';
  }
}

// ── Method-specific end-of-session stats helper ────────
function _buildMethodEndStats() {
  const method = sovState.sovMethod || 'active_recall';
  if (method === 'active_recall' || method === 'spaced_repetition') {
    const avgTime = _arTimesPerCard.length > 0
      ? (_arTimesPerCard.reduce(function(a, b) { return a + b.elapsed; }, 0) / _arTimesPerCard.length).toFixed(1)
      : '–';
    return '<div style="background:rgba(99,102,241,0.08);border-radius:10px;padding:12px 16px;margin-bottom:12px;font-size:0.85rem;color:var(--text2);text-align:left">' +
      '<strong style="color:var(--text1)">\uD83D\uDD25 F\u00f6rh\u00f6rsl\u00e4get</strong><br>' +
      'B\u00e4sta streak: <strong>' + _arBestStreak + ' i rad</strong> &nbsp;\u00b7&nbsp; Snittid per kort: <strong>' + avgTime + 's</strong>' +
      '</div>';
  }
  if (method === 'interleaving') {
    return '<div style="background:rgba(124,58,237,0.08);border-radius:10px;padding:12px 16px;margin-bottom:12px;font-size:0.85rem;color:var(--text2);text-align:left">' +
      '<strong style="color:var(--text1)">\uD83C\uDCCF Wildcardl\u00e4get</strong><br>' +
      'Slutpo\u00e4ng: <strong>' + _wildScore + ' po\u00e4ng</strong>' +
      (_wildHighScore > _wildScore ? ' &nbsp;\u00b7&nbsp; Rekord: <strong>' + _wildHighScore + '</strong>' : ' &nbsp;\u00b7&nbsp; \uD83C\uDFC6 Nytt rekord!') +
      '</div>';
  }
  return '';
}

// ══════════════════════════════════════════════════════
// METHOD 1: Active Recall – Förhörsläget
// ══════════════════════════════════════════════════════
let _arTimer = null;
let _arSeconds = 0;
let _arStreak = 0;
let _arBestStreak = 0;
let _arTimesPerCard = [];
let _arCardStartTime = 0;

function arGetTime(card) {
  const isFormula = ((card.def || card.a || '').length > 80);
  const base = isFormula ? 30 : 15;
  const reduction = Math.floor(_arStreak / 5) * 2;
  return Math.max(8, base - reduction);
}

function sovRenderActiveRecall(card) {
  const content = document.getElementById('sovContent');
  if (!content) return;
  // Override sovContent padding for full-bleed dark screen
  content.style.padding = '0';
  content.style.maxWidth = 'none';
  const totalSecs = arGetTime(card);
  _arSeconds = totalSecs;
  _arCardStartTime = Date.now();
  const circumference = 314;

  content.innerHTML =
    '<div class="ar-screen" id="arScreen">' +
    '  <div class="ar-streak" id="arStreak">\uD83D\uDD25 ' + _arStreak + ' i rad</div>' +
    '  <div class="ar-timer-ring">' +
    '    <svg width="120" height="120" viewBox="0 0 120 120">' +
    '      <circle class="ar-timer-bg" cx="60" cy="60" r="50"/>' +
    '      <circle class="ar-timer-fill" id="arTimerFill" cx="60" cy="60" r="50" stroke-dasharray="' + circumference + '" stroke-dashoffset="0"/>' +
    '    </svg>' +
    '    <div class="ar-timer-text" id="arTimerText">' + totalSecs + '</div>' +
    '  </div>' +
    '  <div class="ar-question" id="arQuestion">' + (card.term || card.q || '') + '</div>' +
    '  <button class="ar-show-btn" onclick="arShowAnswer()">Visa svar</button>' +
    '</div>';

  if (_arTimer) clearInterval(_arTimer);
  _arTimer = setInterval(function() {
    _arSeconds--;
    const el = document.getElementById('arTimerText');
    const fill = document.getElementById('arTimerFill');
    if (el) el.textContent = Math.max(0, _arSeconds);
    if (fill) {
      const pct = _arSeconds / totalSecs;
      fill.style.strokeDashoffset = circumference * (1 - pct);
      const cls = 'ar-timer-fill' + (_arSeconds <= 5 ? ' ar-low' : _arSeconds <= totalSecs / 2 ? ' ar-half' : '');
      fill.className = cls;
    }
    if (_arSeconds <= 0) {
      clearInterval(_arTimer);
      _arTimer = null;
      arShowAnswer(true);
    }
  }, 1000);
}

function arShowAnswer(timedOut) {
  if (_arTimer) { clearInterval(_arTimer); _arTimer = null; }
  const step = sovState.steps[sovState.stepIndex];
  if (!step || !step.card) return;
  const card = step.card;
  const screen = document.getElementById('arScreen');
  if (!screen) return;
  const showBtn = screen.querySelector('.ar-show-btn');
  if (showBtn) showBtn.style.display = 'none';
  const answerDiv = document.createElement('div');
  answerDiv.className = 'ar-answer';
  answerDiv.textContent = card.def || card.a || '';
  const rateRow = document.createElement('div');
  rateRow.className = 'ar-rate-row';
  rateRow.innerHTML = '<button class="ar-btn-wrong" onclick="arRate(false)">\u2717 Fel</button><button class="ar-btn-right" onclick="arRate(true)">\u2713 R\u00e4tt</button>';
  screen.appendChild(answerDiv);
  screen.appendChild(rateRow);
  if (timedOut) { setTimeout(function() { arRate(false); }, 600); }
}

function arRate(correct) {
  const elapsed = (Date.now() - _arCardStartTime) / 1000;
  _arTimesPerCard.push({ elapsed: elapsed, correct: correct });
  const screen = document.getElementById('arScreen');
  if (correct) {
    _arStreak++;
    if (_arStreak > _arBestStreak) _arBestStreak = _arStreak;
    sovState.results.correct++;
    if (screen) { screen.classList.add('ar-flash'); setTimeout(function() { screen.classList.remove('ar-flash'); }, 400); }
  } else {
    _arStreak = 0;
    sovState.results.incorrect++;
    if (screen) { screen.classList.add('ar-shake'); setTimeout(function() { screen.classList.remove('ar-shake'); }, 400); }
  }
  // Reset content padding for non-AR steps
  const content = document.getElementById('sovContent');
  if (content) { content.style.padding = ''; content.style.maxWidth = ''; }
  setTimeout(function() { sovNext(); }, correct ? 300 : 500);
}

// ══════════════════════════════════════════════════════
// METHOD 2: Feynman – Lärarrummet
// ══════════════════════════════════════════════════════
let _feynTimer = null;
let _feynSeconds = 0;

const FEYN_KEYWORDS = {
  'Atomens byggnad': ['proton','neutron','elektron','k\u00e4rna','orbital','energiniv\u00e5','skal'],
  'Kemisk bindning': ['bindning','elektron','jon','kovalent','metall','elektronegativitet'],
  'Syror & baser': ['v\u00e4tejon','hydroxidjon','pH','koncentration','logaritm','buffertsystem'],
  'Reaktioner & st\u00f6kiometri': ['mol','reaktant','produkt','koefficient','balansering','molf\u00f6rh\u00e5llande'],
  'Termokemi & energi': ['entalpi','exoterm','endoterm','aktiveringsenergi','hess','kalorimetri'],
  'L\u00f6sningar & koncentration': ['l\u00f6sningsmedel','l\u00f6sning','koncentration','mol','volym','utsp\u00e4dning'],
  'Redox & elektrokemi': ['oxidation','reduktion','elektron','elektrod','anode','katod','halvreaktion'],
  'Organisk kemi': ['kolatom','kolv\u00e4te','funktionell grupp','isomer','polymer','reaktion'],
  'Biokemi': ['protein','enzym','substrat','aminosyra','DNA','metabolism'],
};

function sovRenderFeynmanMethod(card) {
  const content = document.getElementById('sovContent');
  if (!content) return;
  content.style.padding = '0';
  content.style.maxWidth = 'none';
  _feynSeconds = 0;
  const cat = card.cat || '';
  const keywords = FEYN_KEYWORDS[cat] || [];
  const modelAnswer = card.def || card.a || '';

  content.innerHTML =
    '<div class="feyn-screen">' +
    '  <div class="feyn-layout">' +
    '    <div class="feyn-concept">' +
    '      <h3>\uD83C\uDF93 F\u00f6rklara detta begrepp</h3>' +
    '      <div class="feyn-term">' + (card.term || card.q || '') + '</div>' +
    '      <div class="feyn-instruction">F\u00f6rklara som om du undervisar en 12-\u00e5ring. Anv\u00e4nd enkla ord och egna exempel. Inga l\u00e4rob\u00f6cker \u2013 bara din f\u00f6rst\u00e5else.</div>' +
    '    </div>' +
    '    <div class="feyn-write-panel">' +
    '      <div class="feyn-timer" id="feynTimer">\u23f1 0:00</div>' +
    '      <textarea class="feyn-textarea" id="feynText" placeholder="Skriv din f\u00f6rklaring h\u00e4r..." oninput="feynCheckKeywords(this.value)"></textarea>' +
    '      <div id="feynKwPanel" class="feyn-keywords" style="display:none"></div>' +
    '      <button class="feyn-done-btn" onclick="feynShowModel()">Klar \u2013 visa modellsvar</button>' +
    '    </div>' +
    '  </div>' +
    '  <div id="feynModelPanel" class="feyn-model">' +
    '    <strong>\uD83D\uDCD6 Modellf\u00f6rklaring:</strong><br><br>' + modelAnswer +
    '    <div class="feyn-rate-row">' +
    '      <button class="feyn-rate-btn" style="background:#fee2e2;color:#dc2626" onclick="feynRate(0)">\uD83D\uDE15 Missade helt</button>' +
    '      <button class="feyn-rate-btn" style="background:#fef9c3;color:#d97706" onclick="feynRate(1)">\uD83E\uDD14 Ungef\u00e4r r\u00e4tt</button>' +
    '      <button class="feyn-rate-btn" style="background:#dcfce7;color:#15803d" onclick="feynRate(2)">\uD83C\uDFAF Spot on!</button>' +
    '    </div>' +
    '  </div>' +
    '</div>';

  window._feynKeywords = keywords;
  if (_feynTimer) clearInterval(_feynTimer);
  _feynTimer = setInterval(function() {
    _feynSeconds++;
    const el = document.getElementById('feynTimer');
    if (el) el.textContent = '\u23f1 ' + Math.floor(_feynSeconds / 60) + ':' + String(_feynSeconds % 60).padStart(2, '0');
  }, 1000);
}

function feynCheckKeywords(text) {
  const keywords = window._feynKeywords || [];
  if (!keywords.length) return;
  const lower = text.toLowerCase();
  const panel = document.getElementById('feynKwPanel');
  if (!panel) return;
  panel.style.display = 'block';
  panel.innerHTML = '<strong style="font-size:0.8rem;color:#78716c">Nyckelord:</strong><br>' +
    keywords.map(function(kw) {
      return '<span class="' + (lower.includes(kw.toLowerCase()) ? 'feyn-kw-found' : 'feyn-kw-missing') + '">' + kw + '</span>';
    }).join(' ');
}

function feynShowModel() {
  if (_feynTimer) { clearInterval(_feynTimer); _feynTimer = null; }
  const panel = document.getElementById('feynModelPanel');
  if (panel) { panel.style.display = 'block'; panel.scrollIntoView({ behavior: 'smooth' }); }
}

function feynRate(score) {
  const content = document.getElementById('sovContent');
  if (content) { content.style.padding = ''; content.style.maxWidth = ''; }
  if (score >= 1) sovState.results.correct++;
  else sovState.results.incorrect++;
  sovNext();
}

// ══════════════════════════════════════════════════════
// METHOD 3: Problem – Labbet
// ══════════════════════════════════════════════════════
let _labCurrentStep = 0;
let _labFormulaSelected = false;
let _labStepAnswers = [];

function sovRenderLabProblem(problem) {
  const content = document.getElementById('sovContent');
  if (!content) return;
  content.style.padding = '0';
  content.style.maxWidth = 'none';
  _labCurrentStep = 0;
  _labFormulaSelected = false;
  _labStepAnswers = [];

  const steps = problem.steps || [];
  const formulaOptions = _labGetFormulaOptions(problem);

  content.innerHTML =
    '<div class="lab-screen">' +
    '  <div class="lab-header">' +
    '    <h2>\u2697\uFE0F Laborationsuppgift</h2>' +
    '    <div class="lab-scenario">' + (problem.q || '') + '</div>' +
    '  </div>' +
    '  <div class="lab-tools">' +
    '    <h3>\uD83E\uDDF0 Dina verktyg \u2013 v\u00e4lj r\u00e4tt formel:</h3>' +
    '    <div id="labFormulas">' +
    formulaOptions.map(function(f) {
      return '<div class="lab-formula-card" onclick="labSelectFormula(this,\'' + f.id + '\')" data-correct="' + f.correct + '" data-wrong-msg="' + (f.wrongMsg || '') + '">' + f.formula + '</div>';
    }).join('') +
    '    </div>' +
    '  </div>' +
    '  <div class="lab-steps" id="labSteps" style="display:none">' +
    steps.map(function(step, i) {
      return '<div class="lab-step ' + (i === 0 ? 'active' : '') + '" id="labStep' + i + '">' +
        '<div class="lab-step-label">Steg ' + (i + 1) + '</div>' +
        '<div style="font-size:0.95rem;margin-bottom:8px;color:#374151">' + step + '</div>' +
        (i < steps.length - 1
          ? '<input class="lab-step-input" id="labInput' + i + '" type="text" placeholder="Ditt svar..." onkeydown="if(event.key===\'Enter\')labCheckStep(' + i + ')">' +
            '<div class="lab-step-hint" id="labHint' + i + '"></div>' +
            '<button class="lab-next-btn" onclick="labCheckStep(' + i + ')" style="margin-top:8px">Kontrollera \u2192</button>'
          : '<div style="color:#15803d;font-weight:600;font-size:1.1rem" id="labFinalAnswer"></div>') +
        '</div>';
    }).join('') +
    '    <div class="ar-rate-row" id="labRateRow" style="display:none;margin-top:16px">' +
    '      <button class="ar-btn-wrong" onclick="labRate(false)">\u2717 Fick inte r\u00e4tt</button>' +
    '      <button class="ar-btn-right" onclick="labRate(true)">\u2713 L\u00f6ste uppgiften</button>' +
    '    </div>' +
    '  </div>' +
    '</div>';

  if (steps.length > 0) {
    const lastEl = document.getElementById('labFinalAnswer');
    if (lastEl) lastEl.textContent = '\u2713 Svar: ' + (problem.ans || '');
  }
}

function labSelectFormula(el, id) {
  const isCorrect = el.dataset.correct === 'true';
  if (!isCorrect) {
    el.classList.add('wrong-formula');
    const wrongMsg = el.getAttribute('data-wrong-msg') || 'Den formeln passar inte h\u00e4r. F\u00f6rs\u00f6k igen.';
    showToast(wrongMsg, 'warning');
    setTimeout(function() { el.classList.remove('wrong-formula'); }, 600);
    return;
  }
  document.querySelectorAll('.lab-formula-card').forEach(function(c) { c.classList.remove('selected'); });
  el.classList.add('selected');
  _labFormulaSelected = true;
  const stepsEl = document.getElementById('labSteps');
  if (stepsEl) { stepsEl.style.display = 'block'; stepsEl.scrollIntoView({ behavior: 'smooth' }); }
}

function labCheckStep(idx) {
  const input = document.getElementById('labInput' + idx);
  const stepEl = document.getElementById('labStep' + idx);
  if (!input || !stepEl) return;
  const val = input.value.trim();
  if (!val) { showToast('Skriv ett svar f\u00f6rst', 'warning'); return; }
  stepEl.classList.remove('active');
  stepEl.classList.add('verified');
  const badge = document.createElement('div');
  badge.className = 'lab-verified-badge';
  badge.textContent = '\u2713 OK';
  stepEl.appendChild(badge);
  input.disabled = true;
  const btn = stepEl.querySelector('.lab-next-btn');
  if (btn) btn.style.display = 'none';
  const nextStep = document.getElementById('labStep' + (idx + 1));
  if (nextStep) {
    nextStep.classList.add('active');
    const nextInput = document.getElementById('labInput' + (idx + 1));
    if (nextInput) nextInput.focus();
  } else {
    const rateRow = document.getElementById('labRateRow');
    if (rateRow) rateRow.style.display = 'flex';
  }
}

function _labGetFormulaOptions(problem) {
  const catFormulas = {
    mol: [
      {id:'mol1',formula:'n = m / M',correct:true},
      {id:'mol2',formula:'c = n / V',correct:false,wrongMsg:'c=n/V anv\u00e4nds f\u00f6r koncentration, inte molber\u00e4kning.'},
      {id:'mol3',formula:'PV = nRT',correct:false,wrongMsg:'PV=nRT \u00e4r gaslagen \u2013 inte f\u00f6r massber\u00e4kning.'}
    ],
    syrabas: [
      {id:'ph1',formula:'pH = \u2212log[H\u207a]',correct:true},
      {id:'ph2',formula:'n = m / M',correct:false,wrongMsg:'n=m/M \u00e4r molformeln \u2013 inte pH-formeln.'},
      {id:'ph3',formula:'c = n / V',correct:false,wrongMsg:'Koncentrationsformeln ger inte pH direkt.'}
    ],
    gas: [
      {id:'gas1',formula:'PV = nRT',correct:true},
      {id:'gas2',formula:'n = m / M',correct:false,wrongMsg:'n=m/M ger mol fr\u00e5n massa, inte gasvolym.'},
      {id:'gas3',formula:'pH = \u2212log[H\u207a]',correct:false,wrongMsg:'pH-formeln anv\u00e4nds f\u00f6r syra-bas, inte gaser.'}
    ],
    konc: [
      {id:'konc1',formula:'c = n / V',correct:true},
      {id:'konc2',formula:'n = m / M',correct:false,wrongMsg:'n=m/M ger substansm\u00e4ngd \u2013 du s\u00f6ker koncentration.'},
      {id:'konc3',formula:'PV = nRT',correct:false,wrongMsg:'Gaslagen g\u00e4ller f\u00f6r gaser, inte f\u00f6r koncentration.'}
    ],
    stoik: [
      {id:'stk1',formula:'Molf\u00f6rh\u00e5llande fr\u00e5n reaktionsekvation',correct:true},
      {id:'stk2',formula:'c = n / V',correct:false,wrongMsg:'Koncentrationsformeln anv\u00e4nds f\u00f6r l\u00f6sningar, inte st\u00f6kiometri.'},
      {id:'stk3',formula:'PV = nRT',correct:false,wrongMsg:'Gaslagen passar inte f\u00f6r st\u00f6kiometriber\u00e4kning.'}
    ],
  };
  const options = catFormulas[problem.cat] || [
    {id:'gen1',formula:'V\u00e4lj formel utifr\u00e5n uppgiften',correct:true},
    {id:'gen2',formula:'n = m / M',correct:false,wrongMsg:'Kontrollera vilken formel som beh\u00f6vs.'},
    {id:'gen3',formula:'c = n / V',correct:false,wrongMsg:'Kontrollera vilken formel som beh\u00f6vs.'}
  ];
  return typeof shuffleArray === 'function' ? shuffleArray(options.slice()) : options;
}

function labRate(correct) {
  const content = document.getElementById('sovContent');
  if (content) { content.style.padding = ''; content.style.maxWidth = ''; }
  if (correct) sovState.results.correct++;
  else sovState.results.incorrect++;
  sovNext();
}

// ══════════════════════════════════════════════════════
// METHOD 5: Interleaving – Wildcardläget
// ══════════════════════════════════════════════════════
let _wildScore = 0;
let _wildHighScore = 0;
let _wildCardStartTime = 0;

function sovRenderWildcard(step) {
  const content = document.getElementById('sovContent');
  if (!content) return;
  content.style.padding = '0';
  content.style.maxWidth = 'none';

  const typeColors = { recall: 'type-recall', problem: 'type-problem', feynman: 'type-feynman' };
  const typeLabels = { recall: '\uD83C\uDCCF Flashcard', problem: '\uD83E\uDDEE R\u00e4kneuppgift', feynman: '\uD83C\uDF93 F\u00f6rklaring' };
  const cls = typeColors[step.type] || 'type-recall';
  _wildCardStartTime = Date.now();

  let innerHtml = '';
  if (step.type === 'recall' && step.card) {
    innerHtml =
      '<div class="ar-question wild-swoop">' + (step.card.term || step.card.q || '') + '</div>' +
      '<button class="ar-show-btn" onclick="wildShowAnswer()" style="margin:0 auto;display:block">Visa svar</button>' +
      '<div id="wildAnswer" style="display:none">' +
      '  <div class="ar-answer">' + (step.card.def || step.card.a || '') + '</div>' +
      '  <div class="ar-rate-row"><button class="ar-btn-wrong" onclick="wildRate(false)">\u2717 Fel</button><button class="ar-btn-right" onclick="wildRate(true)">\u2713 R\u00e4tt</button></div>' +
      '</div>';
  } else if (step.type === 'problem' && step.problem) {
    innerHtml =
      '<div class="ar-question wild-swoop">' + (step.problem.q || '') + '</div>' +
      '<button class="ar-show-btn" onclick="wildShowAnswer()" style="margin:0 auto;display:block">Visa svar</button>' +
      '<div id="wildAnswer" style="display:none">' +
      '  <div class="ar-answer">' + (step.problem.steps || []).join(' \u2192 ') + '<br><br><strong>Svar: ' + (step.problem.ans || '') + '</strong></div>' +
      '  <div class="ar-rate-row"><button class="ar-btn-wrong" onclick="wildRate(false)">\u2717 Fick inte r\u00e4tt</button><button class="ar-btn-right" onclick="wildRate(true)">\u2713 L\u00f6ste det!</button></div>' +
      '</div>';
  } else {
    innerHtml = '<button class="sov-action-btn" onclick="sovNext()">N\u00e4sta \u2192</button>';
  }

  content.innerHTML =
    '<div class="wild-screen ' + cls + '" id="wildScreen">' +
    '  <div class="wild-content">' +
    '    <div style="text-align:center"><span class="wild-type-badge" style="background:rgba(255,255,255,0.2)">' + (typeLabels[step.type] || 'Uppgift') + '</span></div>' +
    '    <div class="wild-score" id="wildScoreDisplay">' + _wildScore + '</div>' +
    '    <div class="wild-score-label">po\u00e4ng' + (_wildHighScore > 0 ? ' \u00b7 Rekord: ' + _wildHighScore : '') + '</div>' +
    innerHtml +
    '  </div>' +
    '</div>';
}

function wildShowAnswer() {
  const el = document.getElementById('wildAnswer');
  const btn = document.querySelector('#wildScreen .ar-show-btn');
  if (el) el.style.display = 'block';
  if (btn) btn.style.display = 'none';
}

function wildRate(correct) {
  const elapsed = (Date.now() - _wildCardStartTime) / 1000;
  let points = 0;
  if (correct) {
    points += 10;
    if (elapsed < 8) points += 5;
    sovState.results.correct++;
  } else {
    sovState.results.incorrect++;
  }
  _wildScore += points;
  if (_wildScore > _wildHighScore) {
    _wildHighScore = _wildScore;
    try {
      if (typeof getUserData === 'function' && typeof saveUserData === 'function') {
        const ud = getUserData();
        if (ud) { ud.wildcardHighScore = _wildHighScore; saveUserData(ud); }
      }
    } catch(e) {}
  }
  const scoreEl = document.getElementById('wildScoreDisplay');
  if (scoreEl) scoreEl.textContent = _wildScore;
  const content = document.getElementById('sovContent');
  if (content) { content.style.padding = ''; content.style.maxWidth = ''; }
  setTimeout(function() { sovNext(); }, 300);
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

