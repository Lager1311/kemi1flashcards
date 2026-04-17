#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive fix script for kemi1-flashcards.html study system.
"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')

FILE = r'C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

original_len = len(content)
print(f"Original file: {original_len} chars, {content.count(chr(10))} lines")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 1: Emoji literal placeholders
# ─────────────────────────────────────────────────────────────────────────────
fixes = [
    ('[CAL]', '📅'),
    ('[PARTY]', '🎉'),
    ('[PASS]', '✅'),
    ('[OK]', '✅'),
    ('[CLOCK]', '⏱️'),
]
for placeholder, emoji in fixes:
    count = content.count(placeholder)
    if count:
        content = content.replace(placeholder, emoji)
        print(f"  Fixed {count}x {placeholder} → {emoji}")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 2: studieplanScreen is outside </body></html> — move it inside properly.
#   The screen is from sp_start to sp_end (inclusive), placed after </body>.
#   We need to:
#   a) Extract the studieplanScreen div
#   b) Remove it from its current location (after </body>)
#   c) Insert it before </div><!-- /app-content --> which is before the nav
# ─────────────────────────────────────────────────────────────────────────────

SP_MARKER_START = '<div id="studieplanScreen" class="screen">'
SP_MARKER_END = '</div><!-- /#studieplanScreen -->'

# Find the misplaced block (it's after </body>)
sp_idx = content.find(SP_MARKER_START, content.find('</body>'))
sp_end_idx = content.find(SP_MARKER_END, sp_idx)

if sp_idx > -1 and sp_end_idx > -1:
    # Extract the block
    sp_block = content[sp_idx : sp_end_idx + len(SP_MARKER_END)]
    # Remove it from current location (plus surrounding whitespace)
    tail = content[sp_end_idx + len(SP_MARKER_END):]
    content = content[:sp_idx].rstrip() + tail

    # Now find the insertion point: just before </div><!-- /app-content -->
    # which comes just before the bottom nav
    INSERT_BEFORE = '</div><!-- /app-content -->'
    ins_idx = content.find(INSERT_BEFORE)
    if ins_idx > -1:
        content = content[:ins_idx] + '\n\n' + sp_block + '\n\n' + content[ins_idx:]
        print("  Fixed: studieplanScreen moved inside app-content")
    else:
        print("  WARNING: could not find insertion point for studieplanScreen")
else:
    print("  NOTE: studieplanScreen not found after </body> (may already be fixed)")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 3: Duplicate nav buttons — remove the old studieplanScreen nav btn
#   and the malformed profileScreen/planScreen buttons (extra indent/spacing)
#   Replace the entire nav with a clean version
# ─────────────────────────────────────────────────────────────────────────────

OLD_NAV = '''      <button class="nav-btn active" data-target="homeScreen">
        <span class="nav-btn-icon">🃏</span><span class="nav-btn-label">Flashcards</span>
      </button>
      <button class="nav-btn" data-target="exerciseScreen">
        <span class="nav-btn-icon">🧮</span><span class="nav-btn-label">Räkna</span>
      </button>
      <button class="nav-btn" data-target="formulaScreen">
        <span class="nav-btn-icon">📐</span><span class="nav-btn-label">Formler</span>
      </button>
      <button class="nav-btn" data-target="periodicScreen">
        <span class="nav-btn-icon">⚗️</span><span class="nav-btn-label">PT</span>
      </button>
      <button class="nav-btn" data-target="theoryScreen">
        <span class="nav-btn-icon">📖</span><span class="nav-btn-label">Teori</span>
      </button>
          <button class="nav-btn" data-target="profileScreen"><span class="nav-btn-icon">👤</span><span class="nav-btn-label">Profil</span></button>
      <button class="nav-btn" data-target="planScreen"><span class="nav-btn-icon">📅</span><span class="nav-btn-label">Plan</span></button>
    <button class="nav-btn" data-target="studieplanScreen"><span>🎯</span><span>Plan</span></button>'''

NEW_NAV = '''      <button class="nav-btn active" data-target="homeScreen">
        <span class="nav-btn-icon">🃏</span><span class="nav-btn-label">Flashcards</span>
      </button>
      <button class="nav-btn" data-target="exerciseScreen">
        <span class="nav-btn-icon">🧮</span><span class="nav-btn-label">Räkna</span>
      </button>
      <button class="nav-btn" data-target="formulaScreen">
        <span class="nav-btn-icon">📐</span><span class="nav-btn-label">Formler</span>
      </button>
      <button class="nav-btn" data-target="periodicScreen">
        <span class="nav-btn-icon">⚗️</span><span class="nav-btn-label">PT</span>
      </button>
      <button class="nav-btn" data-target="theoryScreen">
        <span class="nav-btn-icon">📖</span><span class="nav-btn-label">Teori</span>
      </button>
      <button class="nav-btn" data-target="profileScreen">
        <span class="nav-btn-icon">👤</span><span class="nav-btn-label">Profil</span>
      </button>
      <button class="nav-btn" data-target="planScreen">
        <span class="nav-btn-icon">📅</span><span class="nav-btn-label">Plan</span>
      </button>'''

if OLD_NAV in content:
    content = content.replace(OLD_NAV, NEW_NAV)
    print("  Fixed: nav buttons cleaned up (removed duplicate studieplanScreen nav)")
else:
    print("  WARNING: old nav pattern not found exactly – trying partial fix")
    # Try to remove just the duplicate studieplanScreen button
    content = content.replace(
        '\n    <button class="nav-btn" data-target="studieplanScreen"><span>🎯</span><span>Plan</span></button>',
        ''
    )

# ─────────────────────────────────────────────────────────────────────────────
# FIX 4: Add login button to header
#   Find header-actions div and add login button if not present
# ─────────────────────────────────────────────────────────────────────────────

if 'id="loginHeaderBtn"' not in content:
    OLD_HEADER_ACTIONS = '''    <div class="header-actions">
      <button class="icon-btn" id="resetBtn" title="Återställ framsteg">🗑 Återställ</button>
      <button class="icon-btn" id="themeBtn">🌙 Mörkt</button>
    </div>'''
    NEW_HEADER_ACTIONS = '''    <div class="header-actions" id="headerActionsDiv">
      <button class="icon-btn" id="loginHeaderBtn" onclick="openAuth()" title="Logga in">👤 Logga in</button>
      <button class="icon-btn" id="resetBtn" title="Återställ framsteg">🗑 Återställ</button>
      <button class="icon-btn" id="themeBtn">🌙 Mörkt</button>
    </div>'''
    if OLD_HEADER_ACTIONS in content:
        content = content.replace(OLD_HEADER_ACTIONS, NEW_HEADER_ACTIONS)
        print("  Fixed: login button added to header")
    else:
        print("  WARNING: header-actions block not found exactly")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 5: Remove the second (duplicate) function showToast definition
#   There are two showToast functions. Keep the first (at ~line 3264)
#   which is the simpler one in the original code, but actually the SECOND one
#   (added by study system) is better — it supports types and containers.
#   Remove the first simple one and keep the second.
# ─────────────────────────────────────────────────────────────────────────────

# Find both showToast definitions
idx1 = content.find('function showToast(msg) {')
idx2 = content.find('function showToast(msg, type, duration) {')

if idx1 > -1 and idx2 > -1 and idx1 < idx2:
    # Remove the first simpler one
    # Find its end (closing brace)
    # The simple showToast ends after the setTimeout block
    # Let's find from idx1 to just before idx2, find the last closing brace
    segment = content[idx1:idx2]
    # Find the end of the first function — it ends with }
    # Count braces to find where function ends
    brace_count = 0
    end_pos = idx1
    for i, ch in enumerate(content[idx1:idx2+1]):
        if ch == '{': brace_count += 1
        elif ch == '}':
            brace_count -= 1
            if brace_count == 0:
                end_pos = idx1 + i + 1
                break

    if end_pos > idx1:
        old_func = content[idx1:end_pos]
        content = content.replace(old_func, '', 1)
        print(f"  Fixed: removed duplicate simple showToast function ({len(old_func)} chars)")
    else:
        print("  WARNING: could not find end of first showToast")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 6: updateAuthUI – the header div is now properly id'd; also fix the
#   loginHeaderBtn visibility toggle in updateAuthUI
# ─────────────────────────────────────────────────────────────────────────────

# Patch updateAuthUI to also toggle the loginHeaderBtn
OLD_UPDATE_AUTH_UI = '''function updateAuthUI() {
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
}'''

NEW_UPDATE_AUTH_UI = '''function updateAuthUI() {
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
}'''

if OLD_UPDATE_AUTH_UI in content:
    content = content.replace(OLD_UPDATE_AUTH_UI, NEW_UPDATE_AUTH_UI)
    print("  Fixed: updateAuthUI updated to handle loginHeaderBtn")
else:
    print("  WARNING: updateAuthUI pattern not found exactly")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 7: studieplanScreen needs class="screen" — it already has it
#   but verify it's correct after move
# ─────────────────────────────────────────────────────────────────────────────
sp_check = content.find('<div id="studieplanScreen" class="screen">')
if sp_check > -1:
    print("  OK: studieplanScreen has class='screen'")
else:
    print("  WARNING: studieplanScreen missing class='screen'")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 8: Add session summary popup — insert after endSession() function
# ─────────────────────────────────────────────────────────────────────────────

SESSION_SUMMARY_HTML = '''
<!-- SESSION SUMMARY MODAL -->
<div id="sessionSummaryBackdrop" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:800;display:none;align-items:center;justify-content:center;padding:20px;">
  <div id="sessionSummaryModal" style="background:var(--surface);border-radius:var(--radius);padding:32px;max-width:400px;width:100%;box-shadow:var(--shadow-lg);border:1px solid var(--border);text-align:center;">
    <div style="font-size:2.5rem;margin-bottom:8px;">🎉</div>
    <h2 style="font-size:1.5rem;font-weight:800;margin-bottom:6px;">Session klar!</h2>
    <p id="sessionSummaryMsg" style="color:var(--text2);margin-bottom:20px;"></p>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:20px;" id="sessionSummaryGrid"></div>
    <button onclick="document.getElementById('sessionSummaryBackdrop').style.display='none';" style="width:100%;padding:14px;background:var(--accent);color:#fff;border:none;border-radius:var(--radius-sm);font-size:1rem;font-weight:700;cursor:pointer;">Stäng</button>
  </div>
</div>
'''

# Insert session summary HTML before the pomoWidget
if 'sessionSummaryBackdrop' not in content:
    pomo_widget_idx = content.find('<div id="pomoWidget"')
    if pomo_widget_idx > -1:
        content = content[:pomo_widget_idx] + SESSION_SUMMARY_HTML + '\n' + content[pomo_widget_idx:]
        print("  Added: session summary modal HTML")

# Patch endSession() to show the summary popup
OLD_END_SESSION_TOAST = "  if (elapsed > 0) showToast('✅ Session avslutad! ' + elapsed + ' min pluggat, ' + sessionState.cardsSeenThisSession.size + ' kort.', 'success', 5000);"

NEW_END_SESSION_TOAST = '''  if (elapsed > 0) {
    showSessionSummary(elapsed, sessionState.cardsSeenThisSession.size, pomoState.sessionPomos);
  }'''

if OLD_END_SESSION_TOAST in content:
    content = content.replace(OLD_END_SESSION_TOAST, NEW_END_SESSION_TOAST)
    print("  Fixed: endSession now calls showSessionSummary()")
else:
    print("  WARNING: endSession toast line not found exactly")

# Add showSessionSummary function after endSession
SHOW_SESSION_SUMMARY_FN = '''
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
'''

# Insert after endSession function
end_session_end = content.find('function sessionTick()')
if end_session_end > -1 and 'function showSessionSummary' not in content:
    content = content[:end_session_end] + SHOW_SESSION_SUMMARY_FN + '\n' + content[end_session_end:]
    print("  Added: showSessionSummary() function")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 9: Add "Starta studiesession" card to home screen (after stats, before category grid)
# ─────────────────────────────────────────────────────────────────────────────

SESSION_CARD_HTML = '''    <!-- Study Session Card -->
    <div id="studySessionCard" style="background:var(--surface);border:2px solid var(--border);border-radius:var(--radius-sm);padding:16px;margin-bottom:16px;box-shadow:var(--shadow-card);">
      <div id="studySessionCardContent">
        <!-- filled by renderStudySessionCard() -->
      </div>
    </div>
'''

# Insert before category grid section
INSERT_BEFORE_CAT = '    <!-- Category -->'
if 'studySessionCard' not in content:
    if INSERT_BEFORE_CAT in content:
        content = content.replace(INSERT_BEFORE_CAT, SESSION_CARD_HTML + '    <!-- Category -->')
        print("  Added: study session card HTML on home screen")

# Add the renderStudySessionCard function
RENDER_SESSION_CARD_FN = '''
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
'''

if 'function renderStudySessionCard' not in content:
    # Insert before renderProfile
    render_profile_idx = content.find('function renderProfile()')
    if render_profile_idx > -1:
        content = content[:render_profile_idx] + RENDER_SESSION_CARD_FN + '\n' + content[render_profile_idx:]
        print("  Added: renderStudySessionCard() function")

# Hook renderStudySessionCard into navTo homeScreen calls and init
if 'renderStudySessionCard()' not in content:
    # Add to the navTo handler
    old_nav_handler = """  document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const t = this.dataset.target;
    if (t === 'profileScreen') renderProfile();
    if (t === 'planScreen') renderPlanWizard();
  });
});"""
    new_nav_handler = """  document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const t = this.dataset.target;
    if (t === 'profileScreen') renderProfile();
    if (t === 'planScreen') renderPlanWizard();
    if (t === 'homeScreen') renderStudySessionCard();
  });
});"""
    if old_nav_handler in content:
        content = content.replace(old_nav_handler, new_nav_handler)
        print("  Fixed: nav handler updated to call renderStudySessionCard()")

    # Also add to init setTimeout
    old_init = '''  updateAuthUI();
  updateStreak();
  checkDueCards();'''
    new_init = '''  updateAuthUI();
  updateStreak();
  checkDueCards();
  renderStudySessionCard();'''
    if old_init in content:
        content = content.replace(old_init, new_init)
        print("  Fixed: init calls renderStudySessionCard()")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 10: Add Pomodoro settings to profile screen
# ─────────────────────────────────────────────────────────────────────────────

POMO_SETTINGS_HTML = '''
      <!-- Pomodoro Settings -->
      <div class="profile-section">
        <h3>⏱️ Pomodoro-inställningar</h3>
        <div style="margin-bottom:12px;">
          <div style="font-size:0.82rem;color:var(--text2);margin-bottom:6px;font-weight:600;">Fokustid (minuter)</div>
          <div style="display:flex;gap:8px;">
            <label style="display:flex;align-items:center;gap:5px;cursor:pointer;"><input type="radio" name="pomoWork" value="15" onchange="updatePomoSettings()"> 15</label>
            <label style="display:flex;align-items:center;gap:5px;cursor:pointer;"><input type="radio" name="pomoWork" value="25" onchange="updatePomoSettings()" checked> 25</label>
            <label style="display:flex;align-items:center;gap:5px;cursor:pointer;"><input type="radio" name="pomoWork" value="45" onchange="updatePomoSettings()"> 45</label>
          </div>
        </div>
        <div style="margin-bottom:12px;">
          <div style="font-size:0.82rem;color:var(--text2);margin-bottom:6px;font-weight:600;">Paustid (minuter)</div>
          <div style="display:flex;gap:8px;">
            <label style="display:flex;align-items:center;gap:5px;cursor:pointer;"><input type="radio" name="pomoBreak" value="3" onchange="updatePomoSettings()"> 3</label>
            <label style="display:flex;align-items:center;gap:5px;cursor:pointer;"><input type="radio" name="pomoBreak" value="5" onchange="updatePomoSettings()" checked> 5</label>
            <label style="display:flex;align-items:center;gap:5px;cursor:pointer;"><input type="radio" name="pomoBreak" value="10" onchange="updatePomoSettings()"> 10</label>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:0.88rem;">
            <input type="checkbox" id="pomoWidgetToggle" onchange="updatePomoSettings()" checked>
            Visa Pomodoro-widget under session
          </label>
        </div>
      </div>
'''

# Insert before the "Actions" div in profile screen
PROFILE_ACTIONS_MARKER = '      <!-- Actions -->'
if 'Pomodoro-inställningar' not in content:
    if PROFILE_ACTIONS_MARKER in content:
        content = content.replace(PROFILE_ACTIONS_MARKER, POMO_SETTINGS_HTML + '\n' + PROFILE_ACTIONS_MARKER)
        print("  Added: Pomodoro settings to profile screen")

# Add updatePomoSettings function
UPDATE_POMO_SETTINGS_FN = '''
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
'''

if 'function updatePomoSettings' not in content:
    # Insert before updatePomoDisplay
    update_pomo_display_idx = content.find('function updatePomoDisplay()')
    if update_pomo_display_idx > -1:
        content = content[:update_pomo_display_idx] + UPDATE_POMO_SETTINGS_FN + '\n' + content[update_pomo_display_idx:]
        print("  Added: updatePomoSettings() and loadPomoSettings() functions")

# Hook loadPomoSettings into renderProfile
if 'loadPomoSettings()' not in content:
    old_render_leitner = '  renderLeitnerViz();\n  renderWeeklyChart();'
    new_render_leitner = '  renderLeitnerViz();\n  renderWeeklyChart();\n  loadPomoSettings();'
    if old_render_leitner in content:
        content = content.replace(old_render_leitner, new_render_leitner)
        print("  Fixed: renderProfile() now calls loadPomoSettings()")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 11: Enhance renderSchedulePreview to show task icons and Starta buttons
# ─────────────────────────────────────────────────────────────────────────────

OLD_RENDER_SCHEDULE = '''function renderSchedulePreview(schedule) {
  const preview = document.getElementById('planSchedulePreview');
  if (!preview) return;
  preview.innerHTML = '';
  schedule.slice(0, 7).forEach(dayPlan => {
    const div = document.createElement('div');
    div.className = 'plan-schedule-day';
    const tasksHtml = dayPlan.tasks.map(t =>
      '<div class="plan-schedule-task">• ' + t.type + ': ' + t.content + ' (' + t.duration + ' min)</div>'
    ).join('');
    div.innerHTML = '<div class="plan-schedule-day-title">Dag ' + dayPlan.day + ' – ' + dayPlan.date + ' – ' + dayPlan.topic + '</div>' + tasksHtml;
    preview.appendChild(div);
  });
  if (schedule.length > 7) {
    const more = document.createElement('div');
    more.style.cssText = 'font-size:0.8rem;color:var(--text2);padding:8px;text-align:center;';
    more.textContent = '... och ' + (schedule.length - 7) + ' fler dagar';
    preview.appendChild(more);
  }
}'''

NEW_RENDER_SCHEDULE = '''function renderSchedulePreview(schedule) {
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
        + '<button onclick="navTo(\'' + target + '\')" style="padding:3px 8px;background:var(--accent);color:#fff;border:none;border-radius:6px;font-size:0.72rem;cursor:pointer;">Starta</button>'
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
}'''

if OLD_RENDER_SCHEDULE in content:
    content = content.replace(OLD_RENDER_SCHEDULE, NEW_RENDER_SCHEDULE)
    print("  Fixed: renderSchedulePreview() now shows task icons and Starta buttons")
else:
    print("  WARNING: renderSchedulePreview() pattern not found exactly")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 12: Fix the headerActionsDiv — the old code has no id on the div,
#   so the new init code (Make header actions div identifiable) would try to
#   add one. But we've already added id="headerActionsDiv" in the HTML now,
#   so remove the JS that tries to assign it dynamically.
# ─────────────────────────────────────────────────────────────────────────────

OLD_HEADER_ID_ASSIGN = '''// Make header actions div identifiable
(function() {
  const ha = document.querySelector('.header-actions');
  if (ha && !ha.id) ha.id = 'headerActionsDiv';
})();'''

NEW_HEADER_ID_ASSIGN = '''// headerActionsDiv is already set in HTML'''

if OLD_HEADER_ID_ASSIGN in content:
    content = content.replace(OLD_HEADER_ID_ASSIGN, NEW_HEADER_ID_ASSIGN)
    print("  Fixed: removed dynamic headerActionsDiv id assignment (now in HTML)")

# ─────────────────────────────────────────────────────────────────────────────
# FIX 13: Add renderStudySessionCard call to planActivate and cancelPlan
#   so the home screen card updates after plan changes
# ─────────────────────────────────────────────────────────────────────────────

old_plan_activate_end = "  showToast('📅 Plan aktiverad! ' + planWizardState.days + ' dagar, ' + planWizardState.minutesPerDay + ' min/dag.', 'success');\n  renderPlanWizard();"
new_plan_activate_end = "  showToast('📅 Plan aktiverad! ' + planWizardState.days + ' dagar, ' + planWizardState.minutesPerDay + ' min/dag.', 'success');\n  renderPlanWizard();\n  renderStudySessionCard();"
if old_plan_activate_end in content:
    content = content.replace(old_plan_activate_end, new_plan_activate_end)
    print("  Fixed: planActivate() calls renderStudySessionCard()")

old_cancel_plan_end = "  renderPlanWizard();\n}\n\nfunction startSessionFromPlan()"
new_cancel_plan_end = "  renderPlanWizard();\n  renderStudySessionCard();\n}\n\nfunction startSessionFromPlan()"
if old_cancel_plan_end in content:
    content = content.replace(old_cancel_plan_end, new_cancel_plan_end)
    print("  Fixed: cancelPlan() calls renderStudySessionCard()")

# ─────────────────────────────────────────────────────────────────────────────
# Write the fixed file
# ─────────────────────────────────────────────────────────────────────────────

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

new_len = len(content)
print(f"\nDone! File: {new_len} chars ({new_len - original_len:+d}), {content.count(chr(10))} lines")

# Verification
print("\n=== VERIFICATION ===")
print("[CAL] remaining:", content.count('[CAL]'))
print("[PARTY] remaining:", content.count('[PARTY]'))
print("[PASS] remaining:", content.count('[PASS]'))
print("[OK] remaining:", content.count('[OK]'))
print("studieplanScreen after </body>:",
      content.find('id="studieplanScreen"') > content.find('</body>'))
print("showToast definitions:", content.count('function showToast'))
print("loginHeaderBtn present:", 'id="loginHeaderBtn"' in content)
print("sessionSummaryBackdrop present:", 'sessionSummaryBackdrop' in content)
print("studySessionCard present:", 'studySessionCard' in content)
print("Pomodoro settings in profile:", 'Pomodoro-inställningar' in content)
print("updatePomoSettings function:", 'function updatePomoSettings' in content)
print("renderStudySessionCard function:", 'function renderStudySessionCard' in content)
print("showSessionSummary function:", 'function showSessionSummary' in content)
# Count nav buttons with data-target
import re
nav_btns_with_target = re.findall(r'class="nav-btn[^"]*"[^>]*data-target="[^"]*"', content)
print("Nav buttons with data-target:", len(nav_btns_with_target))
