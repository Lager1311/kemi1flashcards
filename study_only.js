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

let planWizardState = {
  goal: 'all',           // 'all' | 'topics'
  selectedTopics: [],
  days: 14,
  minutesPerDay: 45,
  generatedSchedule: null,
};

function planSetGoal(goal) {
  planWizardState.goal = goal;
  const allBtn = document.getElementById('planGoalAll');
  const topicsBtn = document.getElementById('planGoalTopics');
  const topicList = document.getElementById('planTopicList');
  if (allBtn) allBtn.classList.toggle('active', goal === 'all');
  if (topicsBtn) topicsBtn.classList.toggle('active', goal === 'topics');
  if (topicList) topicList.style.display = goal === 'topics' ? '' : 'none';
}

function planInitTopicList() {
  const list = document.getElementById('planTopicList');
  if (!list) return;
  const div = list.querySelector('div');
  // Remove old items
  while (list.children.length > 1) list.removeChild(list.lastChild);
  Object.keys(TOPIC_MAP).forEach(topic => {
    const item = document.createElement('label');
    item.className = 'plan-topic-item';
    const isSelected = planWizardState.selectedTopics.includes(topic);
    if (isSelected) item.classList.add('selected');
    item.innerHTML = '<input type="checkbox" ' + (isSelected ? 'checked' : '') + '> <span class="plan-topic-name">' + topic + '</span>';
    const cb = item.querySelector('input');
    cb.addEventListener('change', function() {
      if (this.checked) {
        if (!planWizardState.selectedTopics.includes(topic)) planWizardState.selectedTopics.push(topic);
        item.classList.add('selected');
      } else {
        planWizardState.selectedTopics = planWizardState.selectedTopics.filter(t => t !== topic);
        item.classList.remove('selected');
      }
    });
    list.appendChild(item);
  });
}

function planNextStep(step) {
  if (step === 3) {
    const days = parseInt(document.getElementById('planDays').value) || 14;
    const minsPerDay = parseInt(document.getElementById('planMinutesPerDay').value) || 45;
    planWizardState.days = Math.max(1, Math.min(60, days));
    planWizardState.minutesPerDay = Math.max(15, Math.min(240, minsPerDay));

    const topics = planWizardState.goal === 'all' ? Object.keys(TOPIC_MAP) : planWizardState.selectedTopics;
    if (planWizardState.goal === 'topics' && topics.length === 0) {
      showToast('Välj minst ett ämne.', 'warning');
      return;
    }
    planWizardState.generatedSchedule = generateSchedule(topics, planWizardState.days, planWizardState.minutesPerDay);
    renderSchedulePreview(planWizardState.generatedSchedule);
  }

  // Update step buttons
  [1, 2, 3].forEach(s => {
    const btn = document.getElementById('planStepBtn' + s);
    const panel = document.getElementById('planPanel' + s);
    if (btn) btn.classList.toggle('active', s === step);
    if (panel) panel.classList.toggle('active', s === step);
    if (btn && s < step) btn.classList.add('done');
    else if (btn) btn.classList.remove('done');
  });
}

function generateSchedule(topics, days, minutesPerDay) {
  const schedule = [];
  const taskTypes = ['Teori', 'Flashcards', 'Räkneuppgifter', 'SR-repetition', 'Blandad träning', 'Totalrepetition'];

  for (let day = 1; day <= days; day++) {
    const topicIdx = (day - 1) % topics.length;
    const topic = topics[topicIdx];
    let tasks = [];

    if (day === days) {
      // Last day: full review
      tasks = [
        { type: 'Totalrepetition', content: 'Gå igenom alla ämnen med flashcards och SR-repetition', duration: Math.round(minutesPerDay * 0.5) },
        { type: 'SR-repetition', content: 'Repetera alla kort som förfallit', duration: Math.round(minutesPerDay * 0.3) },
        { type: 'Räkneuppgifter', content: 'Svårare räkneuppgifter – blanda alla nivåer', duration: Math.round(minutesPerDay * 0.2) },
      ];
    } else if (day % 5 === 0) {
      // Every 5th day: mixed
      tasks = [
        { type: 'SR-repetition', content: 'Repetera förfallna kort (Leitner)', duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Räkneuppgifter', content: 'Svårare räkneuppgifter – ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Blandad träning', content: 'Blanda alla ämnen', duration: Math.round(minutesPerDay * 0.2) },
      ];
    } else if (day % 3 === 0) {
      // Every 3rd day: SR + medium
      tasks = [
        { type: 'SR-repetition', content: 'Repetition med Leitner-systemet', duration: Math.round(minutesPerDay * 0.35) },
        { type: 'Räkneuppgifter', content: 'Medelsvåra uppgifter – ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Flashcards', content: 'Flashcards – ' + topic, duration: Math.round(minutesPerDay * 0.25) },
      ];
    } else if (day % 2 === 0) {
      // Even days: flashcards + exercises
      tasks = [
        { type: 'Flashcards', content: 'Flashcards – ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Räkneuppgifter', content: 'Enklare räkneuppgifter – ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'SR-repetition', content: 'Snabb SR-runda', duration: Math.round(minutesPerDay * 0.2) },
      ];
    } else {
      // Odd days: theory first
      tasks = [
        { type: 'Teori', content: 'Läs teoriavsnittet om ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Flashcards', content: 'Flashcards – ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Räkneuppgifter', content: 'Enkla räkneuppgifter – ' + topic, duration: Math.round(minutesPerDay * 0.2) },
      ];
    }

    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + day - 1);
    schedule.push({ day, date: dateStr(dateObj), topic, tasks });
  }
  return schedule;
}

function renderSchedulePreview(schedule) {
  const preview = document.getElementById('planSchedulePreview');
  if (!preview) return;
  preview.innerHTML = '';

  const TASK_ICONS = { 'Teori': '📖', 'Flashcards': '🃏', 'Räkneuppgifter': '🧮', 'SR-repetition': '🔄', 'Blandad träning': '🔀', 'Totalrepetition': '⭐' };
  const TASK_TARGETS = { 'Teori': 'theoryScreen', 'Flashcards': 'homeScreen', 'Räkneuppgifter': 'exerciseScreen', 'SR-repetition': 'homeScreen', 'Blandad träning': 'homeScreen', 'Totalrepetition': 'homeScreen' };

  schedule.slice(0, 7).forEach(dayPlan => {
    const div = document.createElement('div');
    div.className = 'plan-schedule-day';
    const total = dayPlan.tasks.reduce((s, t) => s + t.duration, 0);
    const tasksHtml = dayPlan.tasks.map(t => {
      const icon = TASK_ICONS[t.type] || '📌';
      const target = TASK_TARGETS[t.type] || 'homeScreen';
      return '<div class="plan-schedule-task" style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border);">'
        + '<span style="font-size:1rem;">' + icon + '</span>'
        + '<span style="flex:1;font-size:0.82rem;">' + t.type + ': ' + t.content + '</span>'
        + '<span style="font-size:0.75rem;color:var(--text2);white-space:nowrap;">' + t.duration + ' min</span>'
        + '<button onclick="navTo('' + target + '')" style="padding:3px 8px;background:var(--accent);color:#fff;border:none;border-radius:6px;font-size:0.72rem;cursor:pointer;">Starta</button>'
        + '</div>';
    }).join('');
    div.innerHTML = '<div class="plan-schedule-day-title" style="font-weight:700;font-size:0.88rem;padding:6px 0 4px;color:var(--accent);">Dag ' + dayPlan.day + ' – ' + dayPlan.date + ' (' + total + ' min)</div>'
      + '<div style="font-size:0.78rem;color:var(--text2);margin-bottom:6px;">Ämne: ' + dayPlan.topic + '</div>'
      + tasksHtml;
    preview.appendChild(div);
  });
  if (schedule.length > 7) {
    const more = document.createElement('div');
    more.style.cssText = 'font-size:0.8rem;color:var(--text2);padding:8px;text-align:center;';
    more.textContent = '... och ' + (schedule.length - 7) + ' fler dagar';
    preview.appendChild(more);
  }
}

function planActivate() {
  if (!planWizardState.generatedSchedule) return;
  const topics = planWizardState.goal === 'all' ? Object.keys(TOPIC_MAP) : planWizardState.selectedTopics;

  const planConfig = {
    goal: planWizardState.goal,
    topics,
    daysToExam: planWizardState.days,
    minutesPerDay: planWizardState.minutesPerDay,
    startDate: dateStr(new Date()),
    schedule: planWizardState.generatedSchedule,
  };

  if (getSession()) {
    const ud = getUserData();
    ud.studyPlan = planConfig;
    saveUserData(ud);
  }

  showToast('📅 Plan aktiverad! ' + planWizardState.days + ' dagar, ' + planWizardState.minutesPerDay + ' min/dag.', 'success');
  renderPlanWizard();
  renderStudySessionCard();
}

function cancelPlan() {
  if (!confirm('Avbryt den aktiva planen?')) return;
  if (getSession()) {
    const ud = getUserData();
    ud.studyPlan = null;
    saveUserData(ud);
  }
  renderPlanWizard();
  renderStudySessionCard();
}

function startSessionFromPlan() {
  const ud = getUserData();
  if (ud.studyPlan) {
    startSession(ud.studyPlan);
    showPomoWidget(true);
    navTo('homeScreen');
  }
}

function renderPlanWizard() {
  if (!getSession()) {
    // Guest
    const ud = getUserData();
    if (ud.studyPlan) {
      renderActivePlan(ud.studyPlan);
    }
  } else {
    const ud = getUserData();
    const wizard = document.getElementById('planPanel1');
    const wizard2 = document.getElementById('planPanel2');
    const wizard3 = document.getElementById('planPanel3');
    const stepsDiv = document.querySelector('.plan-steps-indicator');
    const activeDisplay = document.getElementById('planActiveDisplay');

    if (ud.studyPlan) {
      // Show active plan
      if (stepsDiv) stepsDiv.style.display = 'none';
      [wizard, wizard2, wizard3].forEach(p => { if (p) p.style.display = 'none'; });
      if (activeDisplay) activeDisplay.style.display = '';
      renderActivePlan(ud.studyPlan);
    } else {
      // Show wizard
      if (stepsDiv) stepsDiv.style.display = '';
      [wizard, wizard2, wizard3].forEach(p => { if (p) p.style.display = ''; });
      if (activeDisplay) activeDisplay.style.display = 'none';
      planNextStep(1);
    }
  }
  planInitTopicList();
}

function renderActivePlan(plan) {
  const activeDisplay = document.getElementById('planActiveDisplay');
  if (!activeDisplay) return;
  activeDisplay.style.display = '';

  const summaryEl = document.getElementById('planActiveSummary');
  if (summaryEl) {
    const elapsed = Math.round((Date.now() - new Date(plan.startDate).getTime()) / 86400000);
    summaryEl.innerHTML = `
      <strong>Mål:</strong> ${plan.goal === 'all' ? 'Hela kursen' : 'Valda ämnen'}<br>
      <strong>Startdatum:</strong> ${plan.startDate}<br>
      <strong>Dagar till prov:</strong> ${plan.daysToExam}<br>
      <strong>Minuter per dag:</strong> ${plan.minutesPerDay}<br>
      <strong>Dag i planen:</strong> ${Math.min(elapsed + 1, plan.daysToExam)} av ${plan.daysToExam}
    `;
  }

  const tasksEl = document.getElementById('planTodayTasks');
  if (tasksEl && plan.schedule) {
    const todayPlan = plan.schedule[Math.min(Math.max(0, Math.round((Date.now() - new Date(plan.startDate).getTime()) / 86400000)), plan.schedule.length - 1)];
    if (todayPlan) {
      tasksEl.innerHTML = todayPlan.tasks.map(t =>
        '<div class="checklist-item"><div class="checklist-dot"></div><span>' + t.type + ': ' + t.content + ' (' + t.duration + ' min)</span></div>'
      ).join('');
    }
  }
}

// ── 7. STATISTICS & PROFILE ───────────────────────────────────────────────


function renderStudySessionCard() {
  const el = document.getElementById('studySessionCardContent');
  if (!el) return;
  const ud = getUserData();

  if (ud && ud.studyPlan) {
    // Show today's tasks as mini checklist
    const plan = ud.studyPlan;
    const elapsed = Math.round((Date.now() - new Date(plan.startDate).getTime()) / 86400000);
    const todayPlan = plan.schedule && plan.schedule[Math.min(Math.max(0, elapsed), plan.schedule.length - 1)];
    const dayNum = Math.min(elapsed + 1, plan.daysToExam);

    const TASK_ICONS = { 'Teori': '📖', 'Flashcards': '🃏', 'Räkneuppgifter': '🧮', 'SR-repetition': '🔄', 'Blandad träning': '🔀', 'Totalrepetition': '⭐' };
    const TASK_TARGETS = { 'Teori': 'theoryScreen', 'Flashcards': 'homeScreen', 'Räkneuppgifter': 'exerciseScreen', 'SR-repetition': 'homeScreen', 'Blandad träning': 'homeScreen', 'Totalrepetition': 'homeScreen' };

    const tasksHtml = todayPlan ? todayPlan.tasks.map(t =>
      `<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border);">
        <span style="font-size:1.1rem;">${TASK_ICONS[t.type] || '📌'}</span>
        <span style="flex:1;font-size:0.85rem;">${t.type}: ${t.content}</span>
        <span style="font-size:0.75rem;color:var(--text2);white-space:nowrap;">${t.duration} min</span>
        <button onclick="navTo('${TASK_TARGETS[t.type] || 'homeScreen'}')" style="padding:4px 10px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:0.75rem;cursor:pointer;">Starta</button>
      </div>`
    ).join('') : '<div style="color:var(--text2);font-size:0.85rem;">Plan avslutad!</div>';

    el.innerHTML = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
      <span style="font-size:1.2rem;">📅</span>
      <strong style="font-size:0.95rem;">Dag ${dayNum} av ${plan.daysToExam} – ${plan.minutesPerDay} min/dag</strong>
    </div>
    ${tasksHtml}
    <button onclick="startSessionFromPlan();navTo('homeScreen');" style="width:100%;margin-top:10px;padding:10px;background:var(--accent);color:#fff;border:none;border-radius:var(--radius-sm);font-size:0.9rem;font-weight:700;cursor:pointer;">▶ Starta session</button>`;
  } else {
    el.innerHTML = `<div style="display:flex;align-items:center;gap:12px;">
      <span style="font-size:1.8rem;">🎯</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:0.95rem;margin-bottom:4px;">Starta studiesession</div>
        <div style="font-size:0.8rem;color:var(--text2);">Skapa en personlig plan mot provet</div>
      </div>
      <button onclick="navTo('planScreen')" style="padding:10px 16px;background:var(--accent);color:#fff;border:none;border-radius:var(--radius-sm);font-size:0.85rem;font-weight:600;cursor:pointer;white-space:nowrap;">Skapa plan →</button>
    </div>`;
  }
}

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
      dueEl.textContent = '✅ Inga kort att repetera idag – bra jobbat!';
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

// headerActionsDiv is already set in HTML

// Nav click handlers for new screens
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const t = this.dataset.target;
    if (t === 'profileScreen') renderProfile();
    if (t === 'planScreen') renderPlanWizard();
    if (t === 'homeScreen') renderStudySessionCard();
  });
});

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
  renderStudySessionCard();
}, 500);

