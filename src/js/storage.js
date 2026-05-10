// ═══════════════════════════════════════════════════════════════════════════
//  STUDY SYSTEM – Added by build_study_system.py
// ═══════════════════════════════════════════════════════════════════════════

// ── UTILITY: Fisher-Yates shuffle ──────────────────────────────────────────
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

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
  const loginBtn = document.getElementById('loginHeaderBtn');

  if (user) {
    // Show user badge
    if (!badge) {
      badge = document.createElement('button');
      badge.id = 'userBadgeBtn';
      badge.className = 'user-badge';
      badge.onclick = () => { navTo('profileScreen'); renderProfile(); };
      headerActions.insertBefore(badge, headerActions.firstChild);
    }
    const initials = user.substring(0, 2).toUpperCase();
    badge.innerHTML = '<div class="user-avatar">' + initials + '</div><span>' + user + '</span>';
    badge.style.display = 'flex';

    // Hide login button when logged in
    if (loginBtn) loginBtn.style.display = 'none';

    // Hide guest banner
    const gb = document.getElementById('guestBanner');
    if (gb) gb.style.display = 'none';

    // Show change password section
    const cps = document.getElementById('changePassSection');
    if (cps) cps.style.display = '';
  } else {
    if (badge) badge.style.display = 'none';
    // Show login button when logged out
    if (loginBtn) loginBtn.style.display = '';
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
  // Disabled: flip mode now uses the simplified Right/Wrong buttons only.
  // The fc-answer-btns handle rating via markAnswer() -> fcMarkAnswer().
}

function checkDueCards() {
  // Toast notification removed – due cards info is available on the profile screen
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
function endStudySession() {
  sessionState.active = false;
  if (sessionState.intervalId) { clearInterval(sessionState.intervalId); sessionState.intervalId = null; }
  const bar = document.getElementById('sessionBar');
  if (bar) bar.style.display = 'none';
  showToast('Session avslutad – bra jobbat!', 'success');
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
  if (masteredEl) masteredEl.textContent = '—';
  if (sessionsEl) sessionsEl.textContent = (ud.sessions && ud.sessions.length) || 0;

  // Due cards – improved display
  const dueEl = document.getElementById('dueCardsInfo');
  if (dueEl) {
    const ud2 = getUserData();
    const due = getDueCards();
    const totalSR = Object.keys(ud2.leitner || {}).length;

    if (totalSR === 0) {
      dueEl.innerHTML = '<span style="color:var(--text2);font-style:italic;">Du har inga begrepp schemalagda för repetition än. Börja en flashcard-session för att komma igång.</span>';
    } else {
      // Find next upcoming review among non-due cards
      const now = Date.now();
      let nextDate = null;
      CARDS.forEach(c => {
        const lc = ud2.leitner[c.id];
        if (lc && lc.nextReview > now) {
          if (nextDate === null || lc.nextReview < nextDate) nextDate = lc.nextReview;
        }
      });
      const nextStr = nextDate ? new Date(nextDate).toLocaleDateString('sv-SE') : '–';

      if (due.length === 0) {
        dueEl.innerHTML =
          '<div style="color:var(--green);font-weight:700;margin-bottom:8px;">&#10004; Inga kort att repetera idag – bra jobbat!</div>' +
          '<div style="font-size:0.84rem;color:var(--text2);">Nästa repetition: <strong style="color:var(--text)">' + nextStr + '</strong></div>' +
          '<div style="font-size:0.84rem;color:var(--text2);margin-top:4px;">Totalt i repetitionssystemet: <strong style="color:var(--text)">' + totalSR + ' kort</strong></div>';
      } else {
        dueEl.innerHTML =
          '<div style="color:var(--accent);font-weight:700;margin-bottom:8px;">&#128218; ' + due.length + ' kort redo för repetition idag</div>' +
          '<div style="font-size:0.84rem;color:var(--text2);">Nästa planerade repetition: <strong style="color:var(--text)">' + nextStr + '</strong></div>' +
          '<div style="font-size:0.84rem;color:var(--text2);margin-top:4px;">Totalt i repetitionssystemet: <strong style="color:var(--text)">' + totalSR + ' kort</strong></div>';
      }
    }
  }

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
  const vals = days.map(d => (ud.weeklyData && ud.weeklyData[d.date]) ? ud.weeklyData[d.date] : 0);
  const totalActivity = vals.reduce((a, b) => a + b, 0);

  // Empty state
  if (totalActivity === 0) {
    chart.innerHTML = '<div style="width:100%;text-align:center;padding:16px 0;font-size:0.84rem;color:var(--text2);font-style:italic;">Ingen aktivitet de senaste 7 dagarna. Starta en session för att börja bygga din streak.</div>';
    return;
  }

  const maxVal = Math.max(...vals, 1);

  chart.innerHTML = days.map((d, i) => {
    const pct = Math.round(vals[i] / maxVal * 100);
    const isToday = i === 6;
    const minLabel = vals[i] > 0 ? vals[i] + ' min' : '';
    return `<div class="week-bar-col">
      <div class="week-bar-wrap">
        <div class="week-bar" style="height:${pct}%;${isToday ? 'opacity:1;' : 'opacity:0.65;'}min-height:${vals[i]>0?6:0}px;background:${vals[i]>0?'var(--accent-grad)':'var(--surface2)'};"></div>
      </div>
      <div class="week-label" style="${isToday ? 'font-weight:700;color:var(--accent);' : ''}font-size:0.6rem;">${d.label}</div>
      ${minLabel ? `<div style="font-size:0.55rem;color:var(--text2);text-align:center;">${minLabel}</div>` : ''}
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
  if (cardScene) {
    cardScene.removeEventListener('click', flipCard);
    cardScene.addEventListener('click', window._studyFlipCardPatched);
  }
}

const ELEMENTS_RAW = [
  [1,'H','Väte',1.008,2.20,'nm',1,1],[2,'He','Helium',4.003,null,'nb',1,18],
  [3,'Li','Litium',6.941,0.98,'ak',2,1],[4,'Be','Beryllium',9.012,1.57,'ae',2,2],
  [5,'B','Bor',10.811,2.04,'ml',2,13],[6,'C','Kol',12.011,2.55,'nm',2,14],
  [7,'N','Kväve',14.007,3.04,'nm',2,15],[8,'O','Syre',15.999,3.44,'nm',2,16],
  [9,'F','Fluor',18.998,3.98,'hl',2,17],[10,'Ne','Neon',20.180,null,'nb',2,18],
  [11,'Na','Natrium',22.990,0.93,'ak',3,1],[12,'Mg','Magnesium',24.305,1.31,'ae',3,2],
  [13,'Al','Aluminium',26.982,1.61,'pt',3,13],[14,'Si','Kisel',28.086,1.90,'ml',3,14],
  [15,'P','Fosfor',30.974,2.19,'nm',3,15],[16,'S','Svavel',32.065,2.58,'nm',3,16],
  [17,'Cl','Klor',35.453,3.16,'hl',3,17],[18,'Ar','Argon',39.948,null,'nb',3,18],
  [19,'K','Kalium',39.098,0.82,'ak',4,1],[20,'Ca','Kalcium',40.078,1.00,'ae',4,2],
  [21,'Sc','Skandium',44.956,1.36,'tr',4,3],[22,'Ti','Titan',47.867,1.54,'tr',4,4],
  [23,'V','Vanadin',50.942,1.63,'tr',4,5],[24,'Cr','Krom',51.996,1.66,'tr',4,6],
  [25,'Mn','Mangan',54.938,1.55,'tr',4,7],[26,'Fe','Järn',55.845,1.83,'tr',4,8],
  [27,'Co','Kobolt',58.933,1.88,'tr',4,9],[28,'Ni','Nickel',58.693,1.91,'tr',4,10],
  [29,'Cu','Koppar',63.546,1.90,'tr',4,11],[30,'Zn','Zink',65.38,1.65,'tr',4,12],
  [31,'Ga','Gallium',69.723,1.81,'pt',4,13],[32,'Ge','Germanium',72.630,2.01,'ml',4,14],
  [33,'As','Arsenik',74.922,2.18,'ml',4,15],[34,'Se','Selen',78.971,2.55,'nm',4,16],
  [35,'Br','Brom',79.904,2.96,'hl',4,17],[36,'Kr','Krypton',83.798,3.00,'nb',4,18],
  [37,'Rb','Rubidium',85.468,0.82,'ak',5,1],[38,'Sr','Strontium',87.62,0.95,'ae',5,2],
  [39,'Y','Yttrium',88.906,1.22,'tr',5,3],[40,'Zr','Zirkonium',91.224,1.33,'tr',5,4],
  [41,'Nb','Niob',92.906,1.60,'tr',5,5],[42,'Mo','Molybden',95.96,2.16,'tr',5,6],
  [43,'Tc','Teknetium',98,1.90,'tr',5,7],[44,'Ru','Rutenium',101.07,2.20,'tr',5,8],
  [45,'Rh','Rodium',102.906,2.28,'tr',5,9],[46,'Pd','Palladium',106.42,2.20,'tr',5,10],
  [47,'Ag','Silver',107.868,1.93,'tr',5,11],[48,'Cd','Kadmium',112.411,1.69,'tr',5,12],
  [49,'In','Indium',114.818,1.78,'pt',5,13],[50,'Sn','Tenn',118.710,1.96,'pt',5,14],
  [51,'Sb','Antimon',121.760,2.05,'ml',5,15],[52,'Te','Tellur',127.60,2.10,'ml',5,16],
  [53,'I','Jod',126.904,2.66,'hl',5,17],[54,'Xe','Xenon',131.293,2.60,'nb',5,18],
  [55,'Cs','Cesium',132.905,0.79,'ak',6,1],[56,'Ba','Barium',137.327,0.89,'ae',6,2],
  [57,'La','Lantan',138.905,1.10,'ln',8,3],[58,'Ce','Cerium',140.116,1.12,'ln',8,4],
  [59,'Pr','Praseodym',140.908,1.13,'ln',8,5],[60,'Nd','Neodym',144.242,1.14,'ln',8,6],
  [61,'Pm','Prometium',145,1.13,'ln',8,7],[62,'Sm','Samarium',150.36,1.17,'ln',8,8],
  [63,'Eu','Europium',151.964,1.20,'ln',8,9],[64,'Gd','Gadolinium',157.25,1.20,'ln',8,10],
  [65,'Tb','Terbium',158.925,1.20,'ln',8,11],[66,'Dy','Dysprosium',162.500,1.22,'ln',8,12],
  [67,'Ho','Holmium',164.930,1.23,'ln',8,13],[68,'Er','Erbium',167.259,1.24,'ln',8,14],
  [69,'Tm','Tulium',168.934,1.25,'ln',8,15],[70,'Yb','Ytterbium',173.045,1.10,'ln',8,16],
  [71,'Lu','Lutetium',174.967,1.27,'ln',8,17],
  [72,'Hf','Hafnium',178.49,1.30,'tr',6,4],[73,'Ta','Tantal',180.948,1.50,'tr',6,5],
  [74,'W','Wolfram',183.84,2.36,'tr',6,6],[75,'Re','Rhenium',186.207,1.90,'tr',6,7],
  [76,'Os','Osmium',190.23,2.20,'tr',6,8],[77,'Ir','Iridium',192.217,2.20,'tr',6,9],
  [78,'Pt','Platina',195.084,2.28,'tr',6,10],[79,'Au','Guld',196.967,2.54,'tr',6,11],
  [80,'Hg','Kvicksilver',200.592,2.00,'tr',6,12],[81,'Tl','Tallium',204.383,1.62,'pt',6,13],
  [82,'Pb','Bly',207.2,2.33,'pt',6,14],[83,'Bi','Vismut',208.980,2.02,'pt',6,15],
  [84,'Po','Polonium',209,2.00,'ml',6,16],[85,'At','Astat',210,2.20,'hl',6,17],
  [86,'Rn','Radon',222,null,'nb',6,18],
  [87,'Fr','Francium',223,0.70,'ak',7,1],[88,'Ra','Radium',226,0.90,'ae',7,2],
  [89,'Ac','Aktinium',227,1.10,'ac',9,3],[90,'Th','Torium',232.038,1.30,'ac',9,4],
  [91,'Pa','Protaktinium',231.036,1.50,'ac',9,5],[92,'U','Uran',238.029,1.38,'ac',9,6],
  [93,'Np','Neptunium',237,1.36,'ac',9,7],[94,'Pu','Plutonium',244,1.28,'ac',9,8],
  [95,'Am','Americium',243,1.30,'ac',9,9],[96,'Cm','Curium',247,1.30,'ac',9,10],
  [97,'Bk','Berkelium',247,1.30,'ac',9,11],[98,'Cf','Californium',251,1.30,'ac',9,12],
  [99,'Es','Einsteinium',252,1.30,'ac',9,13],[100,'Fm','Fermium',257,1.30,'ac',9,14],
  [101,'Md','Mendelevium',258,1.30,'ac',9,15],[102,'No','Nobelium',259,1.30,'ac',9,16],
  [103,'Lr','Lawrencium',266,null,'ac',9,17],
  [104,'Rf','Rutherfordium',267,null,'tr',7,4],[105,'Db','Dubnium',268,null,'tr',7,5],
  [106,'Sg','Seaborgium',271,null,'tr',7,6],[107,'Bh','Bohrium',270,null,'tr',7,7],
  [108,'Hs','Hassium',277,null,'tr',7,8],[109,'Mt','Meitnerium',278,null,'tr',7,9],
  [110,'Ds','Darmstadtium',281,null,'tr',7,10],[111,'Rg','Röntgenium',282,null,'tr',7,11],
  [112,'Cn','Kopernicum',285,null,'tr',7,12],[113,'Nh','Nihonium',286,null,'pt',7,13],
  [114,'Fl','Flerovium',289,null,'pt',7,14],[115,'Mc','Moskovium',290,null,'pt',7,15],
  [116,'Lv','Livermorium',293,null,'pt',7,16],[117,'Ts','Tennessen',294,null,'hl',7,17],
  [118,'Og','Oganesson',294,null,'nb',7,18],
];

const EL_CAT = {
  nm:{ cls:'cat-nm', label:'Icke-metall' },
  nb:{ cls:'cat-ng', label:'Ädelgas' },
  ak:{ cls:'cat-al', label:'Alkalimetall' },
  ae:{ cls:'cat-ae', label:'Jordalkalimetall' },
  ml:{ cls:'cat-me', label:'Metalloid' },
  hl:{ cls:'cat-ha', label:'Halogen' },
  tr:{ cls:'cat-tr', label:'Övergångsmetall' },
  pt:{ cls:'cat-pt', label:'Post-överg.metall' },
  ln:{ cls:'cat-la', label:'Lantanid' },
  ac:{ cls:'cat-ac', label:'Aktinid' },
};

const ELEMENTS_MAP = {};
ELEMENTS_RAW.forEach(([z,sym,name,mass,en,cat,row,col]) => {
  ELEMENTS_MAP[z] = {z,sym,name,mass,en,cat,row,col};
});

const CAT_GLOW = {
  nm:'#ca8a04', nb:'#e11d48', ak:'#dc2626', ae:'#ea580c',
  ml:'#16a34a', hl:'#7c3aed', tr:'#1d4ed8', pt:'#0891b2',
  ln:'#7c3aed', ac:'#4338ca'
};

function initPeriodic() {
  const grid = document.getElementById('periodicGrid');
  if (!grid || grid.children.length > 0) return;

  let _activeCat = null;

  function _applyFilters() {
    const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
    grid.querySelectorAll('.el-cell:not(.el-placeholder)').forEach(cell => {
      const cat = cell.dataset.cat;
      const z = parseInt(cell.querySelector('.el-z') && cell.querySelector('.el-z').textContent);
      const el = ELEMENTS_MAP[z];
      const matchCat = !_activeCat || cat === _activeCat;
      const matchSearch = !q || (el && (
        el.sym.toLowerCase().startsWith(q) ||
        el.name.toLowerCase().includes(q)
      ));
      cell.classList.toggle('dimmed', !(matchCat && matchSearch));
    });
  }

  const legend = document.getElementById('periodicLegend');
  if (legend) {
    legend.innerHTML = Object.entries(EL_CAT).map(([k,v]) =>
      `<button class="legend-tag ${v.cls}" data-cat="${k}">${v.label}</button>`
    ).join('');
    legend.addEventListener('click', e => {
      const btn = e.target.closest('.legend-tag');
      if (!btn) return;
      const cat = btn.dataset.cat;
      _activeCat = _activeCat === cat ? null : cat;
      legend.querySelectorAll('.legend-tag').forEach(b =>
        b.classList.toggle('active', b.dataset.cat === _activeCat));
      _applyFilters();
    });
  }

  const grpLabels = document.getElementById('groupLabels');
  if (grpLabels) {
    grpLabels.innerHTML = Array.from({length:18},(_,i) =>
      `<div class="pg-label">${i+1}</div>`).join('');
  }

  const searchInput = document.getElementById('periodicSearch');
  if (searchInput) {
    searchInput.addEventListener('input', _applyFilters);
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') { searchInput.value = ''; _applyFilters(); }
    });
  }

  // f-block placeholders in main table
  const lnPh = document.createElement('div');
  lnPh.className = 'el-cell el-placeholder cat-la';
  lnPh.style.cssText = 'grid-column:3;grid-row:6;';
  lnPh.textContent = '57\u201371';
  grid.appendChild(lnPh);

  const acPh = document.createElement('div');
  acPh.className = 'el-cell el-placeholder cat-ac';
  acPh.style.cssText = 'grid-column:3;grid-row:7;';
  acPh.textContent = '89\u2013103';
  grid.appendChild(acPh);

  ELEMENTS_RAW.forEach(([z,sym,name,mass,en,cat,row,col]) => {
    const c = EL_CAT[cat];
    const cell = document.createElement('div');
    cell.className = `el-cell ${c.cls}`;
    cell.style.cssText = `grid-column:${col};grid-row:${row};`;
    cell.dataset.cat = cat;
    cell.style.setProperty('--cat-glow', CAT_GLOW[cat] || '#6366f1');
    cell.innerHTML = `<span class="el-z">${z}</span><span class="el-sym">${sym}</span>` +
      `<span class="el-name">${name}</span>` +
      (en != null ? `<span class="el-mass">${en}</span>` : '');
    cell.addEventListener('click', () => showElementModal(z));
    grid.appendChild(cell);
  });
}

function showElementModal(z) {
  const el = ELEMENTS_MAP[z];
  if (!el) return;
  const c = EL_CAT[el.cat];
  const period = el.row <= 7 ? el.row : el.row === 8 ? 6 : 7;
  const content = document.getElementById('elModalContent');
  content.innerHTML = `
    <div class="el-modal-header ${c.cls}">
      <div class="el-modal-sym">${el.sym}</div>
      <div class="el-modal-name">${el.name}</div>
    </div>
    <div class="el-modal-z">Atomnummer ${el.z} &bull; Atommassa ${el.mass} u</div>
    <div class="el-modal-grid">
      <div class="el-modal-item"><div class="el-modal-label">Period</div><div class="el-modal-value">${period}</div></div>
      <div class="el-modal-item"><div class="el-modal-label">Grupp</div><div class="el-modal-value">${el.col}</div></div>
      <div class="el-modal-item"><div class="el-modal-label">Atommassa</div><div class="el-modal-value">${el.mass} u</div></div>
      <div class="el-modal-item"><div class="el-modal-label">Elektronegativitet</div><div class="el-modal-value">${el.en != null ? el.en + ' (Pauling)' : '\u2013'}</div></div>
    </div>
    ${el.en != null ? `<div style="margin-top:14px">
      <div class="el-modal-label" style="margin-bottom:6px">EN-skala (Pauling, 0\u20134,0)</div>
      <div style="background:var(--surface2);border-radius:8px;height:16px;overflow:hidden">
        <div style="height:100%;width:${(el.en/4)*100}%;background:linear-gradient(90deg,#3b82f6,#a855f7,#ef4444);border-radius:8px"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.68rem;color:var(--text2);margin-top:3px"><span>0 (låg)</span><span>4,0 – F (hög)</span></div>
    </div>` : ''}
    <span class="el-modal-cat-badge ${c.cls}" style="margin-top:14px;display:inline-block">${c.label}</span>`;

  const backdrop = document.getElementById('elModalBackdrop');
  backdrop.classList.add('open');
  document.getElementById('elModalClose').addEventListener('click',
    () => backdrop.classList.remove('open'), { once: true });
  backdrop.addEventListener('click',
    e => { if (e.target === backdrop) backdrop.classList.remove('open'); }, { once: true });
}

