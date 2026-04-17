lanWizardState = {
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

