═══════════════════════════════════════════════════════════════════════════
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
    showToast('🎉 Välkommen ' + username + '! Konto skapat.', 'success');
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
  const loginBtn = document.getElementById('loginHeaderBtn');

  if (user) {
    // Show user badge in header
    if (!badge) {
      badge = document.createElement('button');
      badge.id = 'userBadgeBtn';
      badge.className = 'user-badge';
      badge.onclick = () => navTo('profileScreen');
      if (headerActions) headerActions.insertBefore(badge, headerActions.firstChild);
    }
    const initials = user.substring(0, 2).toUpperCase();
    badge.innerHTML = '<div class="user-avatar">' + initials + '</div><span>' + user + '</span>';
    badge.style.display = 'flex';
    if (loginBtn) loginBtn.style.display = 'none';

    // Hide guest banner
    const gb = document.getElementById('guestBanner');
    if (gb) gb.style.display = 'none';

    // Show change password section
    const cps = document.getElementById('changePassSection');
    if (cps) cps.style.display = '';
  } else {
    if (badge) badge.style.display = 'none';
    if (loginBtn) { loginBtn.style.display = ''; loginBtn.textContent = '👤 Logga in'; }
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


function updatePomoSettings() {
  const workRadio = document.querySelector('input[name="pomoWork"]:checked');
  const breakRadio = document.querySelector('input[name="pomoBreak"]:checked');
  const widgetToggle = document.getElementById('pomoWidgetToggle');

  const workMins = workRadio ? parseInt(workRadio.value) : 25;
  const breakMins = breakRadio ? parseInt(breakRadio.value) : 5;
  const showWidget = widgetToggle ? widgetToggle.checked : true;

  const ud = getUserData();
  ud.pomoSettings = ud.pomoSettings || {};
  ud.pomoSettings.work = workMins;
  ud.pomoSettings.breakTime = breakMins;
  ud.pomoSettings.showWidget = showWidget;
  saveUserData(ud);

  // Update pomoState if not running
  if (!pomoState.running) {
    pomoState.totalSeconds = workMins * 60;
    pomoState.remainingSeconds = workMins * 60;
    updatePomoDisplay();
  }
  showToast('⏱️ Pomodoro-inställningar sparade', 'success');
}

function loadPomoSettings() {
  const ud = getUserData();
  const settings = ud.pomoSettings || { work: 25, breakTime: 5, showWidget: true };
  const workRadios = document.querySelectorAll('input[name="pomoWork"]');
  workRadios.forEach(r => { r.checked = (parseInt(r.value) === settings.work); });
  const breakRadios = document.querySelectorAll('input[name="pomoBreak"]');
  breakRadios.forEach(r => { r.checked = (parseInt(r.value) === settings.breakTime); });
  const widgetToggle = document.getElementById('pomoWidgetToggle');
  if (widgetToggle) widgetToggle.checked = settings.showWidget !== false;
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

function startSession(planConfig) {
  sessionState.active = true;
  sessionState.startTime = Date.now();
  sessionState.targetMinutes = planConfig && planConfig.minutesPerDay ? planConfig.minutesPerDay : 45;
  sessionState.tasksTotal = planConfig && planConfig.tasks ? planConfig.tasks.length : 0;
  sessionState.tasksDone = 0;
  sessionState.cardsSeenThisSession = new Set();
  sessionState.lastActivity = Date.now();

  const bar = document.getElementById('sessionBar');
  if (bar) bar.style.display = 'flex';
  showPomoWidget(true);
  updatePomoDisplay();

  if (sessionState.intervalId) clearInterval(sessionState.intervalId);
  sessionState.intervalId = setInterval(sessionTick, 60000);
  updateSessionBar();
}

function endSession() {
  if (!sessionState.active) return;
  sessionState.active = false;
  clearInterval(sessionState.intervalId);
  sessionState.intervalId = null;

  const elapsed = Math.round((Date.now() - sessionState.startTime) / 60000);
  if (elapsed > 0 && getSession()) {
    const ud = getUserData();
    ud.sessions.push({
      date: dateStr(new Date()),
      duration: elapsed,
      cards: sessionState.cardsSeenThisSession.size,
      topics: [],
    });
    ud.totalMinutes = (ud.totalMinutes || 0) + elapsed;
    const today = dateStr(new Date());
    ud.weeklyData[today] = (ud.weeklyData[today] || 0) + elapsed;
    // Keep only last 60 sessions
    if (ud.sessions.length > 60) ud.sessions = ud.sessions.slice(-60);
    saveUserData(ud);
    updateStreak();
  }

  const bar = document.getElementById('sessionBar');
  if (bar) bar.style.display = 'none';
  showPomoWidget(false);

  if (elapsed > 0) {
    showSessionSummary(elapsed, sessionState.cardsSeenThisSession.size, pomoState.sessionPomos);
  }
}


function showSessionSummary(minutes, cards, pomos) {
  const backdrop = document.getElementById('sessionSummaryBackdrop');
  const grid = document.getElementById('sessionSummaryGrid');
  const msg = document.getElementById('sessionSummaryMsg');
  if (!backdrop) return;

  // Count mastered this session
  const ud = getUserData();
  let mastered = 0;
  CARDS.forEach(c => {
    const lc = ud.leitner && ud.leitner[c.id];
    if (lc && lc.box >= 4) mastered++;
  });

  // Motivational message
  let motivation = 'Bra jobbat! Varje session tar dig ett steg närmre målet.';
  if (minutes >= 45) motivation = '🔥 Fantastisk session! Du är på rätt väg mot toppbetyg!';
  else if (minutes >= 25) motivation = '💪 Solid session! Konsistens är nyckeln till framgång.';
  else if (cards >= 20) motivation = '🃏 Du gick igenom massor av kort – hjärnan lär sig!';
  if (msg) msg.textContent = motivation;

  if (grid) {
    grid.innerHTML = [
      { label: 'Minuter pluggat', value: minutes, color: 'var(--accent)' },
      { label: 'Kort genomgångna', value: cards, color: 'var(--green)' },
      { label: 'Pomodoros klara', value: pomos || 0, color: '#f59e0b' },
      { label: 'Kort bemästrade', value: mastered, color: 'var(--green)' },
    ].map(s => `<div style="background:var(--surface2);border-radius:var(--radius-sm);padding:14px;">
      <div style="font-size:1.6rem;font-weight:800;color:${s.color};">${s.value}</div>
      <div style="font-size:0.75rem;color:var(--text2);margin-top:3px;">${s.label}</div>
    </div>`).join('');
  }

  backdrop.style.display = 'flex';
}

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

const TOPIC_MAP = {
  'Materia & atomstruktur': { cats: ['Atomens byggnad', 'Materia & faser', 'Grundämnen'] },
  'Kemiska reaktioner': { cats: ['Reaktioner & stökiometri', 'Redox & elektrokemi'] },
  'Syror, baser & pH': { cats: ['Syror & baser', 'Vanliga syror & baser'] },
  'Kemisk bindning': { cats: ['Kemisk bindning'] },
  'Lösningar & koncentration': { cats: ['Lösningar & koncentration'] },
  'Organisk kemi': { cats: ['Organisk kemi'] },
  'Biokemi': { cats: ['Biokemi'] },
  'Termokemi & energi': { cats: ['Termokemi & energi'] },
  'Laborativ kemi & säkerhet': { cats: ['Laborativ kemi & säkerhet'] },
};

let p