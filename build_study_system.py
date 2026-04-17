#!/usr/bin/env python3
"""
build_study_system.py
Inserts a comprehensive interactive study system into kemi1-flashcards.html.
Adds: auth (SubtleCrypto SHA-256 + localStorage), Leitner SR, Pomodoro,
session bar, profile screen, plan screen, toast system, and injectSRRatingUI.
"""

import re, sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
from pathlib import Path

HTML_FILE = Path(r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html")

# ──────────────────────────────────────────────────────────────────────────────
# A. CSS
# ──────────────────────────────────────────────────────────────────────────────
NEW_CSS = r"""
/* ═══════════════════════════════════════════════════════════
   STUDY SYSTEM – Added by build_study_system.py
═══════════════════════════════════════════════════════════ */

/* Auth modal */
.auth-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,0.55);
  z-index: 8000; display: flex; align-items: center; justify-content: center;
  padding: 20px; backdrop-filter: blur(6px);
}
.auth-modal {
  background: var(--surface); border-radius: var(--radius);
  padding: 28px; width: 100%; max-width: 380px;
  box-shadow: var(--shadow-lg); border: 1px solid var(--border);
  animation: fadeInUp 0.3s ease;
}
.auth-tabs {
  display: flex; gap: 4px; background: var(--surface2);
  border-radius: 12px; padding: 4px; margin-bottom: 20px;
}
.auth-tab {
  flex: 1; padding: 10px; border: none; background: transparent;
  color: var(--text2); font-size: 0.88rem; font-weight: 600;
  border-radius: 9px; cursor: pointer; transition: all var(--transition);
  font-family: inherit;
}
.auth-tab.active { background: var(--surface); color: var(--text); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.auth-input {
  width: 100%; padding: 12px 14px; border: 2px solid var(--border);
  border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit;
  background: var(--surface); color: var(--text); outline: none;
  transition: border-color var(--transition); margin-bottom: 10px; display: block;
}
.auth-input:focus { border-color: var(--accent); }
.auth-remember {
  display: flex; align-items: center; gap: 8px; font-size: 0.85rem;
  color: var(--text2); margin-bottom: 14px; cursor: pointer;
}
.auth-error {
  color: var(--red); font-size: 0.82rem; margin-bottom: 10px;
  min-height: 18px; font-weight: 500;
}
.auth-btn-primary {
  width: 100%; padding: 13px; background: var(--accent); color: #fff;
  border: none; border-radius: var(--radius-sm); font-size: 0.95rem;
  font-weight: 600; cursor: pointer; transition: all var(--transition);
  font-family: inherit; margin-bottom: 8px;
}
.auth-btn-primary:hover { background: var(--accent-dark); transform: translateY(-1px); }
.auth-btn-ghost {
  width: 100%; padding: 11px; background: transparent; color: var(--text2);
  border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: 0.88rem;
  font-weight: 500; cursor: pointer; transition: all var(--transition); font-family: inherit;
}
.auth-btn-ghost:hover { background: var(--surface2); }

/* User badge in header */
.user-badge {
  display: flex; align-items: center; gap: 7px; padding: 7px 12px;
  background: var(--accent-light); border: 1px solid var(--accent);
  border-radius: var(--radius-sm); font-size: 0.82rem; font-weight: 600;
  color: var(--accent); cursor: pointer; transition: all var(--transition);
}
.user-badge:hover { background: var(--accent); color: #fff; }
.user-avatar {
  width: 24px; height: 24px; border-radius: 50%; background: var(--accent);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 700; color: #fff; flex-shrink: 0;
}

/* Guest banner */
.guest-banner {
  background: var(--yellow-light); border: 1px solid var(--yellow);
  border-radius: var(--radius-sm); padding: 12px 16px; margin-bottom: 16px;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  font-size: 0.85rem; color: var(--text); flex-wrap: wrap;
}
.guest-banner button {
  padding: 7px 14px; background: var(--yellow); color: #fff; border: none;
  border-radius: 8px; font-size: 0.82rem; font-weight: 600; cursor: pointer;
  transition: all var(--transition); white-space: nowrap; font-family: inherit;
}
.guest-banner button:hover { opacity: 0.9; transform: translateY(-1px); }

/* Session progress bar */
.session-bar {
  background: var(--accent); color: #fff; padding: 10px 16px;
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  position: sticky; top: 0; z-index: 500; border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  box-shadow: 0 4px 16px rgba(79,70,229,0.35); margin-bottom: 12px;
}
.session-bar-info {
  display: flex; align-items: center; justify-content: space-between; flex: 1;
  gap: 8px; font-size: 0.85rem; font-weight: 600; min-width: 140px;
}
.session-bar-progress {
  flex: 2; min-width: 100px; height: 6px; background: rgba(255,255,255,0.3);
  border-radius: 3px; overflow: hidden;
}
.session-bar-fill { height: 100%; background: #fff; border-radius: 3px; transition: width 0.5s; }
.session-bar-end {
  padding: 6px 14px; background: rgba(255,255,255,0.2); color: #fff;
  border: 1px solid rgba(255,255,255,0.4); border-radius: 8px; font-size: 0.82rem;
  font-weight: 600; cursor: pointer; transition: all var(--transition); white-space: nowrap;
  font-family: inherit;
}
.session-bar-end:hover { background: rgba(255,255,255,0.35); }

/* Pomodoro widget */
.pomo-widget {
  position: fixed; bottom: calc(var(--navbar-height) + 16px); left: 16px;
  z-index: 700; background: var(--surface); border: 1px solid var(--border);
  border-radius: 18px; padding: 12px; box-shadow: var(--shadow-lg);
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  min-width: 80px; backdrop-filter: blur(16px);
}
.pomo-ring { position: relative; width: 56px; height: 56px; }
.pomo-svg { width: 56px; height: 56px; transform: rotate(-90deg); }
.pomo-track {
  fill: none; stroke: var(--surface2); stroke-width: 3;
}
.pomo-fill {
  fill: none; stroke: var(--accent); stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 100; stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear, stroke 0.3s;
}
.pomo-fill.break-mode { stroke: var(--green); }
.pomo-time {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  font-size: 0.68rem; font-weight: 800; color: var(--text); white-space: nowrap;
}
.pomo-label { font-size: 0.65rem; font-weight: 700; color: var(--text2); text-align: center; }
.pomo-controls { display: flex; gap: 4px; }
.pomo-controls button {
  padding: 4px 8px; border: 1px solid var(--border); border-radius: 8px;
  background: var(--surface2); color: var(--text); font-size: 0.78rem;
  cursor: pointer; transition: all var(--transition); font-family: inherit;
}
.pomo-controls button:hover { background: var(--accent-light); border-color: var(--accent); }

/* SR Rating row */
.sr-rating {
  display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;
}
.sr-btn {
  flex: 1; min-width: 80px; padding: 12px 8px; border: none; border-radius: var(--radius-sm);
  font-size: 0.88rem; font-weight: 700; cursor: pointer; transition: all var(--transition);
  font-family: inherit; line-height: 1.3;
}
.sr-fail { background: var(--red-light); color: var(--red); }
.sr-fail:hover { background: var(--red); color: #fff; transform: translateY(-1px); }
.sr-unsure { background: var(--yellow-light); color: var(--yellow); }
.sr-unsure:hover { background: var(--yellow); color: #fff; transform: translateY(-1px); }
.sr-knew { background: var(--green-light); color: var(--green); }
.sr-knew:hover { background: var(--green); color: #fff; transform: translateY(-1px); }

/* Toast notifications */
.notif-toast {
  background: var(--text); color: var(--bg); padding: 11px 20px;
  border-radius: 24px; font-size: 0.86rem; font-weight: 500;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25); pointer-events: auto;
  animation: toastIn 0.3s ease; max-width: 320px; text-align: center;
  line-height: 1.4;
}
.notif-toast.success { background: var(--green); color: #fff; }
.notif-toast.warning { background: var(--yellow); color: #fff; }
@keyframes toastIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: translateY(0); } }
@keyframes toastOut { from { opacity:1; } to { opacity:0; transform: translateY(8px); } }
.notif-toast.hiding { animation: toastOut 0.3s ease forwards; }

/* Profile screen */
.profile-screen-wrap { padding-bottom: 24px; }
.profile-hero {
  background: var(--accent-grad); color: #fff; border-radius: var(--radius);
  padding: 24px; margin-bottom: 16px; text-align: center; position: relative; overflow: hidden;
}
.profile-hero::before {
  content: ''; position: absolute; top: -40px; right: -40px;
  width: 150px; height: 150px; border-radius: 50%;
  background: rgba(255,255,255,0.1); pointer-events: none;
}
.profile-avatar-big {
  width: 64px; height: 64px; border-radius: 50%; background: rgba(255,255,255,0.25);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem; font-weight: 800; color: #fff; margin: 0 auto 10px;
  border: 3px solid rgba(255,255,255,0.5);
}
.profile-username { font-size: 1.3rem; font-weight: 800; margin-bottom: 4px; }
.profile-since { font-size: 0.82rem; opacity: 0.8; }
.streak-badge {
  display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px;
  background: rgba(255,255,255,0.2); border-radius: 20px; font-size: 0.88rem;
  font-weight: 700; color: #fff; margin-top: 10px;
}

.profile-section {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 18px; margin-bottom: 14px;
  box-shadow: var(--shadow-card);
}
.profile-section h3 {
  font-size: 0.8rem; font-weight: 700; color: var(--text2);
  text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 14px;
}

/* Leitner visualization */
.leitner-viz {
  display: flex; gap: 6px; align-items: flex-end;
  min-height: 80px; padding: 8px 0;
}
.leitner-box-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; }
.leitner-bar-wrap { width: 100%; background: var(--surface2); border-radius: 6px; overflow: hidden; height: 60px; display: flex; align-items: flex-end; }
.leitner-bar { width: 100%; background: var(--accent); border-radius: 6px; transition: height 0.5s; }
.leitner-bar-0 { background: #ef4444; }
.leitner-bar-1 { background: #f97316; }
.leitner-bar-2 { background: #eab308; }
.leitner-bar-3 { background: #22c55e; }
.leitner-bar-4 { background: #6366f1; }
.leitner-count { font-size: 0.75rem; font-weight: 700; color: var(--text); }
.leitner-label { font-size: 0.65rem; color: var(--text2); text-align: center; }

/* Weekly chart */
.weekly-chart { display: flex; gap: 6px; align-items: flex-end; height: 70px; padding: 4px 0; }
.week-bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; }
.week-bar-wrap { width: 100%; background: var(--surface2); border-radius: 4px; height: 50px; display: flex; align-items: flex-end; }
.week-bar { width: 100%; background: var(--accent-grad); border-radius: 4px; min-height: 2px; transition: height 0.4s; }
.week-label { font-size: 0.6rem; color: var(--text2); }

/* Plan wizard */
.plan-wizard-wrap { padding-bottom: 24px; }
.plan-hero {
  background: var(--accent-grad); color: #fff; border-radius: var(--radius);
  padding: 22px; margin-bottom: 16px; text-align: center;
}
.plan-hero h1 { font-size: 1.3rem; font-weight: 800; margin-bottom: 4px; }
.plan-hero p { font-size: 0.88rem; opacity: 0.88; }

.plan-steps-indicator {
  display: flex; gap: 0; margin-bottom: 20px; background: var(--surface2);
  border-radius: 12px; padding: 4px;
}
.plan-step-btn {
  flex: 1; padding: 9px 6px; border: none; background: transparent;
  color: var(--text2); font-size: 0.78rem; font-weight: 600; border-radius: 9px;
  cursor: default; font-family: inherit; transition: all var(--transition);
}
.plan-step-btn.active { background: var(--surface); color: var(--text); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.plan-step-btn.done { color: var(--green); }

.plan-panel { display: none; }
.plan-panel.active { display: block; }
.plan-panel-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 20px; margin-bottom: 14px;
  box-shadow: var(--shadow-card);
}
.plan-panel-card h3 { font-size: 1rem; font-weight: 700; margin-bottom: 14px; }
.plan-topic-list { display: flex; flex-direction: column; gap: 8px; }
.plan-topic-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  border: 2px solid var(--border); border-radius: 10px; cursor: pointer;
  transition: all var(--transition); background: var(--surface);
}
.plan-topic-item:hover { border-color: var(--accent); }
.plan-topic-item.selected { border-color: var(--accent); background: var(--accent-light); }
.plan-topic-item input[type=checkbox] { accent-color: var(--accent); width: 16px; height: 16px; cursor: pointer; }
.plan-topic-name { font-size: 0.9rem; font-weight: 600; flex: 1; }

.plan-goal-row { display: flex; gap: 8px; margin-bottom: 16px; }
.plan-goal-btn {
  flex: 1; padding: 13px 10px; border: 2px solid var(--border); border-radius: 12px;
  background: var(--surface); cursor: pointer; text-align: center;
  transition: all var(--transition); font-family: inherit;
}
.plan-goal-btn:hover { border-color: var(--accent); }
.plan-goal-btn.active { border-color: var(--accent); background: var(--accent-light); }
.plan-goal-icon { font-size: 1.4rem; display: block; margin-bottom: 4px; }
.plan-goal-label { font-size: 0.82rem; font-weight: 700; color: var(--text); }

.plan-input-row { display: flex; gap: 12px; margin-bottom: 14px; flex-wrap: wrap; }
.plan-input-group { flex: 1; min-width: 120px; }
.plan-input-group label { display: block; font-size: 0.8rem; font-weight: 600; color: var(--text2); margin-bottom: 6px; }
.plan-number-input {
  width: 100%; padding: 11px 13px; border: 2px solid var(--border);
  border-radius: 10px; font-size: 1rem; font-family: inherit;
  background: var(--surface); color: var(--text); outline: none;
  transition: border-color var(--transition);
}
.plan-number-input:focus { border-color: var(--accent); }

.plan-schedule-preview { display: flex; flex-direction: column; gap: 8px; max-height: 300px; overflow-y: auto; }
.plan-schedule-day {
  background: var(--surface2); border-radius: 10px; padding: 12px 14px;
  border-left: 3px solid var(--accent);
}
.plan-schedule-day-title { font-size: 0.82rem; font-weight: 700; color: var(--accent); margin-bottom: 6px; }
.plan-schedule-task { font-size: 0.82rem; color: var(--text); margin-bottom: 3px; }

.plan-nav-row { display: flex; gap: 10px; margin-top: 16px; }
.plan-nav-btn {
  flex: 1; padding: 13px; border: 1px solid var(--border); border-radius: var(--radius-sm);
  background: var(--surface); color: var(--text); cursor: pointer; font-size: 0.88rem;
  font-weight: 600; transition: all var(--transition); font-family: inherit;
}
.plan-nav-btn:hover { background: var(--surface2); }
.plan-nav-btn.primary { background: var(--accent); color: #fff; border: none; }
.plan-nav-btn.primary:hover { background: var(--accent-dark); }

/* Study checklist */
.study-checklist { display: flex; flex-direction: column; gap: 6px; }
.checklist-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  background: var(--surface2); border-radius: 8px; font-size: 0.85rem;
}
.checklist-item.done { opacity: 0.55; text-decoration: line-through; }
.checklist-dot {
  width: 10px; height: 10px; border-radius: 50%; background: var(--accent); flex-shrink: 0;
}
.checklist-item.done .checklist-dot { background: var(--green); }

@media (max-width: 480px) {
  .pomo-widget { left: 8px; bottom: calc(var(--navbar-height) + 8px); }
  .session-bar { padding: 8px 12px; font-size: 0.8rem; }
  .sr-btn { font-size: 0.8rem; padding: 10px 6px; }
  .plan-input-row { flex-direction: column; }
  .plan-goal-row { gap: 6px; }
}
"""

# ──────────────────────────────────────────────────────────────────────────────
# B. HTML ADDITIONS
# ──────────────────────────────────────────────────────────────────────────────
AUTH_MODAL_HTML = """
<div id="authBackdrop" class="auth-backdrop" style="display:none;">
  <div class="auth-modal">
    <div class="auth-tabs">
      <button class="auth-tab active" id="authTabLogin" onclick="authSwitchTab('login')">Logga in</button>
      <button class="auth-tab" id="authTabReg" onclick="authSwitchTab('register')">Registrera</button>
    </div>
    <div id="authFormLogin">
      <input type="text" id="authLoginUser" placeholder="Användarnamn" class="auth-input">
      <input type="password" id="authLoginPass" placeholder="Lösenord" class="auth-input">
      <label class="auth-remember"><input type="checkbox" id="authRemember"> Kom ihåg mig (30 dagar)</label>
      <div id="authLoginError" class="auth-error"></div>
      <button class="auth-btn-primary" onclick="authLogin()">Logga in</button>
      <button class="auth-btn-ghost" onclick="closeAuth()">Fortsätt som gäst</button>
    </div>
    <div id="authFormReg" style="display:none;">
      <input type="text" id="authRegUser" placeholder="Välj användarnamn" class="auth-input">
      <input type="password" id="authRegPass" placeholder="Välj lösenord (minst 4 tecken)" class="auth-input">
      <input type="password" id="authRegPass2" placeholder="Upprepa lösenord" class="auth-input">
      <div id="authRegError" class="auth-error"></div>
      <button class="auth-btn-primary" onclick="authRegister()">Skapa konto</button>
      <button class="auth-btn-ghost" onclick="closeAuth()">Fortsätt som gäst</button>
    </div>
  </div>
</div>
"""

SESSION_BAR_HTML = """
<div id="sessionBar" class="session-bar" style="display:none;">
  <div class="session-bar-info">
    <span id="sessionBarLabel">📚 Studiesession aktiv</span>
    <span id="sessionBarTime">0 min</span>
  </div>
  <div class="session-bar-progress">
    <div class="session-bar-fill" id="sessionBarFill" style="width:0%"></div>
  </div>
  <button class="session-bar-end" onclick="endSession()">Avsluta</button>
</div>
"""

POMO_WIDGET_HTML = """
<div id="pomoWidget" class="pomo-widget" style="display:none;">
  <div class="pomo-ring">
    <svg viewBox="0 0 36 36" class="pomo-svg">
      <circle class="pomo-track" cx="18" cy="18" r="15.9"/>
      <circle class="pomo-fill" id="pomoCircle" cx="18" cy="18" r="15.9"/>
    </svg>
    <div class="pomo-time" id="pomoTime">25:00</div>
  </div>
  <div class="pomo-label" id="pomoLabel">Fokus</div>
  <div class="pomo-controls">
    <button onclick="pomoToggle()" id="pomoBtn">&#9654;</button>
    <button onclick="pomoReset()">&#8635;</button>
  </div>
</div>
"""

TOAST_CONTAINER_HTML = """
<div id="toastContainer" style="position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column;gap:8px;align-items:center;pointer-events:none;"></div>
"""

GUEST_BANNER_HTML = """    <div id="guestBanner" class="guest-banner" style="display:none;">
      <span>🔒 Logga in för att spara framsteg permanent</span>
      <button onclick="openAuth()">Logga in</button>
    </div>
"""

PROFILE_SCREEN_HTML = """
  <!-- PROFILE & STATS SCREEN -->
  <div id="profileScreen" class="screen">
    <div class="profile-screen-wrap">
      <div id="profileHeroDiv" class="profile-hero">
        <div class="profile-avatar-big" id="profileAvatar">?</div>
        <div class="profile-username" id="profileUsername">Gäst</div>
        <div class="profile-since" id="profileSince"></div>
        <div class="streak-badge" id="profileStreakBadge">🔥 0 dagars streak</div>
      </div>

      <!-- Stats row -->
      <div class="stats-row" style="margin-bottom:14px;">
        <div class="stat-card">
          <div class="stat-num s-blue" id="profileTotalMinutes">0</div>
          <div class="stat-label">Minuter pluggat</div>
        </div>
        <div class="stat-card">
          <div class="stat-num s-green" id="profileMastered">0</div>
          <div class="stat-label">Kort bemästrade</div>
        </div>
        <div class="stat-card">
          <div class="stat-num" id="profileSessions">0</div>
          <div class="stat-label">Sessioner</div>
        </div>
      </div>

      <!-- Leitner boxes -->
      <div class="profile-section">
        <h3>Leitner-systemet (upprepning)</h3>
        <div class="leitner-viz" id="leitnerViz"></div>
        <div style="font-size:0.75rem;color:var(--text2);margin-top:8px;">
          Lådorna representerar hur väl du kan korten. Kort i låda 5 = bemästrade.
        </div>
      </div>

      <!-- Weekly activity -->
      <div class="profile-section">
        <h3>Aktivitet – senaste 7 dagarna</h3>
        <div class="weekly-chart" id="weeklyChart"></div>
      </div>

      <!-- Due cards info -->
      <div class="profile-section" id="dueCardsSection">
        <h3>Repetition idag</h3>
        <div id="dueCardsInfo" style="font-size:0.9rem;color:var(--text2);">Laddar...</div>
      </div>

      <!-- Change password -->
      <div class="profile-section" id="changePassSection" style="display:none;">
        <h3>Ändra lösenord</h3>
        <input type="password" id="newPassInput" placeholder="Nytt lösenord" class="auth-input">
        <input type="password" id="newPassInput2" placeholder="Upprepa nytt lösenord" class="auth-input">
        <div id="changePassError" class="auth-error"></div>
        <button class="auth-btn-primary" onclick="changePassword()" style="margin-top:4px;">Uppdatera lösenord</button>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="auth-btn-ghost" style="flex:1;min-width:120px;" onclick="authLogout()">Logga ut</button>
        <button class="auth-btn-ghost" style="flex:1;min-width:120px;color:var(--red);border-color:var(--red);" onclick="confirmResetProgress()">Återställ framsteg</button>
      </div>
    </div>
  </div>
"""

PLAN_SCREEN_HTML = """
  <!-- STUDY PLAN WIZARD SCREEN -->
  <div id="planScreen" class="screen">
    <div class="plan-wizard-wrap">
      <div class="plan-hero">
        <h1>[CAL] Studieplan</h1>
        <p>Bygg en personlig plan mot provet</p>
      </div>

      <div class="plan-steps-indicator">
        <button class="plan-step-btn active" id="planStepBtn1">1. Mål</button>
        <button class="plan-step-btn" id="planStepBtn2">2. Schema</button>
        <button class="plan-step-btn" id="planStepBtn3">3. Förhandsvisning</button>
      </div>

      <!-- Step 1: Goal -->
      <div class="plan-panel active" id="planPanel1">
        <div class="plan-panel-card">
          <h3>Vad är ditt mål?</h3>
          <div class="plan-goal-row">
            <button class="plan-goal-btn active" id="planGoalAll" onclick="planSetGoal('all')">
              <span class="plan-goal-icon">🌟</span>
              <span class="plan-goal-label">Hela kursen</span>
            </button>
            <button class="plan-goal-btn" id="planGoalTopics" onclick="planSetGoal('topics')">
              <span class="plan-goal-icon">🎯</span>
              <span class="plan-goal-label">Valda ämnen</span>
            </button>
          </div>
          <div id="planTopicList" class="plan-topic-list" style="display:none;">
            <div style="font-size:0.82rem;color:var(--text2);margin-bottom:8px;">Välj vilka områden du vill fokusera på:</div>
          </div>
        </div>
        <div class="plan-nav-row">
          <button class="plan-nav-btn primary" onclick="planNextStep(2)">Nästa →</button>
        </div>
      </div>

      <!-- Step 2: Schedule params -->
      <div class="plan-panel" id="planPanel2">
        <div class="plan-panel-card">
          <h3>Hur lång tid har du?</h3>
          <div class="plan-input-row">
            <div class="plan-input-group">
              <label>Dagar till prov</label>
              <input type="number" class="plan-number-input" id="planDays" min="1" max="60" value="14">
            </div>
            <div class="plan-input-group">
              <label>Minuter per dag</label>
              <input type="number" class="plan-number-input" id="planMinutesPerDay" min="15" max="240" value="45">
            </div>
          </div>
          <div style="font-size:0.82rem;color:var(--text2);">
            Tips: 30–60 minuter per dag är mer effektivt än en lång session per vecka.
          </div>
        </div>
        <div class="plan-nav-row">
          <button class="plan-nav-btn" onclick="planNextStep(1)">← Tillbaka</button>
          <button class="plan-nav-btn primary" onclick="planNextStep(3)">Generera schema →</button>
        </div>
      </div>

      <!-- Step 3: Preview -->
      <div class="plan-panel" id="planPanel3">
        <div class="plan-panel-card">
          <h3>Ditt studieprogram</h3>
          <div id="planSchedulePreview" class="plan-schedule-preview"></div>
        </div>
        <div class="plan-nav-row">
          <button class="plan-nav-btn" onclick="planNextStep(2)">← Ändra</button>
          <button class="plan-nav-btn primary" onclick="planActivate()">[OK] Aktivera plan</button>
        </div>
      </div>

      <!-- Active plan display -->
      <div id="planActiveDisplay" style="display:none;">
        <div class="profile-section">
          <h3>Aktiv plan</h3>
          <div id="planActiveSummary" style="font-size:0.88rem;color:var(--text2);line-height:1.6;"></div>
          <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
            <button class="plan-nav-btn primary" style="flex:1;" onclick="startSessionFromPlan()">▶ Starta session</button>
            <button class="plan-nav-btn" style="flex:1;" onclick="cancelPlan()">✕ Avbryt plan</button>
          </div>
        </div>
        <div class="profile-section">
          <h3>Dagens uppgifter</h3>
          <div id="planTodayTasks" class="study-checklist"></div>
        </div>
      </div>
    </div>
  </div>
"""

# ──────────────────────────────────────────────────────────────────────────────
# C. NEW NAV BUTTONS
# ──────────────────────────────────────────────────────────────────────────────
PROFILE_NAV_BTN = '      <button class="nav-btn" data-target="profileScreen"><span class="nav-btn-icon">👤</span><span class="nav-btn-label">Profil</span></button>'
PLAN_NAV_BTN    = '      <button class="nav-btn" data-target="planScreen"><span class="nav-btn-icon">[CAL]</span><span class="nav-btn-label">Plan</span></button>'

# ──────────────────────────────────────────────────────────────────────────────
# D. JAVASCRIPT
# ──────────────────────────────────────────────────────────────────────────────
NEW_JS = r"""
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

  if (elapsed > 0) showToast('[PASS] Session avslutad! ' + elapsed + ' min pluggat, ' + sessionState.cardsSeenThisSession.size + ' kort.', 'success', 5000);
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

  showToast('[CAL] Plan aktiverad! ' + planWizardState.days + ' dagar, ' + planWizardState.minutesPerDay + ' min/dag.', 'success');
  renderPlanWizard();
}

function cancelPlan() {
  if (!confirm('Avbryt den aktiva planen?')) return;
  if (getSession()) {
    const ud = getUserData();
    ud.studyPlan = null;
    saveUserData(ud);
  }
  renderPlanWizard();
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
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const t = this.dataset.target;
    if (t === 'profileScreen') renderProfile();
    if (t === 'planScreen') renderPlanWizard();
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
    showToast('[CAL] Du har en aktiv studieplan. Gå till Plan-fliken.', 'info', 4000);
  }

  updatePomoDisplay();
  pomoReset();
}, 500);
"""

# ──────────────────────────────────────────────────────────────────────────────
# MAIN TRANSFORMATION
# ──────────────────────────────────────────────────────────────────────────────

def transform(html: str) -> str:
    changed = html

    # ── A. Insert CSS before </style> ──
    css_target = '</style>'
    if css_target not in changed:
        print("WARNING: Could not find </style> tag")
    else:
        changed = changed.replace(css_target, NEW_CSS + '\n' + css_target, 1)
        print("[OK] CSS inserted before </style>")

    # ── B1. Insert auth modal + session bar just after <body> ──
    # The HTML has <body>\n<div class="app">
    # Insert right after <body>
    body_tag = '<body>'
    if body_tag in changed:
        insert_after_body = AUTH_MODAL_HTML + '\n' + SESSION_BAR_HTML
        changed = changed.replace(body_tag, body_tag + '\n' + insert_after_body, 1)
        print("[OK] Auth modal and session bar inserted after <body>")
    else:
        print("WARNING: Could not find <body> tag")

    # ── B2. Insert guest banner inside #homeScreen, after the stats-row ──
    # Find the stats-row div inside homeScreen and insert after it
    stats_row_end = '    </div>\n\n    <!-- Category -->'
    if stats_row_end in changed:
        changed = changed.replace(
            stats_row_end,
            '    </div>\n\n' + GUEST_BANNER_HTML + '\n    <!-- Category -->',
            1
        )
        print("[OK] Guest banner inserted in homeScreen")
    else:
        # Alternative: insert after homeScreen opening
        home_screen_div = '<div class="screen active" id="homeScreen">'
        if home_screen_div in changed:
            changed = changed.replace(
                home_screen_div,
                home_screen_div + '\n' + GUEST_BANNER_HTML,
                1
            )
            print("[OK] Guest banner inserted in homeScreen (alternative location)")
        else:
            print("WARNING: Could not find homeScreen stats-row end")

    # ── B3. Insert pomo widget and toast container before </body> ──
    # The </body> is followed by </html> but studieplanScreen is AFTER </html>
    # So insert before the </script> closing tag region
    # Actually the </body></html> appears at line 5789-5790
    close_body = '</script>\n</body>'
    if close_body in changed:
        changed = changed.replace(
            close_body,
            '</script>\n' + POMO_WIDGET_HTML + '\n' + TOAST_CONTAINER_HTML + '\n</body>',
            1
        )
        print("[OK] Pomo widget and toast container inserted before </body>")
    else:
        # Try alternative
        close_body2 = '</script>\r\n</body>'
        if close_body2 in changed:
            changed = changed.replace(
                close_body2,
                '</script>\r\n' + POMO_WIDGET_HTML + '\n' + TOAST_CONTAINER_HTML + '\n</body>',
                1
            )
            print("[OK] Pomo widget and toast container inserted before </body> (CRLF)")
        else:
            print("WARNING: Could not find </script>\\n</body> — trying simpler pattern")
            if '</body>' in changed:
                changed = changed.replace(
                    '</body>',
                    POMO_WIDGET_HTML + '\n' + TOAST_CONTAINER_HTML + '\n</body>',
                    1
                )
                print("[OK] Pomo widget and toast container inserted before </body> (simple)")

    # ── B4. Insert profile and plan screens ──
    # Insert before the </div><!-- /app-content --> closing tag
    # or before the EXERCISE SCREEN comment
    app_content_end = '  <!-- EXERCISE SCREEN -->'
    if app_content_end in changed:
        changed = changed.replace(
            app_content_end,
            PROFILE_SCREEN_HTML + '\n' + PLAN_SCREEN_HTML + '\n\n  <!-- EXERCISE SCREEN -->',
            1
        )
        print("[OK] Profile and Plan screens inserted before Exercise screen")
    else:
        # Alternative: insert before </div><!-- /app-content -->
        app_end = '</div><!-- /app-content -->'
        if app_end in changed:
            changed = changed.replace(
                app_end,
                PROFILE_SCREEN_HTML + '\n' + PLAN_SCREEN_HTML + '\n' + app_end,
                1
            )
            print("[OK] Profile and Plan screens inserted before /app-content (alternative)")
        else:
            print("WARNING: Could not find insertion point for profile/plan screens")

    # ── B5. Insert new nav buttons ──
    # The existing studieplan nav button:
    old_nav_btn = '<button class="nav-btn" data-target="studieplanScreen"><span>🎯</span><span>Plan</span></button>'
    new_nav_btns = PROFILE_NAV_BTN + '\n' + PLAN_NAV_BTN + '\n    ' + old_nav_btn
    if old_nav_btn in changed:
        changed = changed.replace(old_nav_btn, new_nav_btns, 1)
        print("[OK] Profile and Plan nav buttons inserted")
    else:
        # Try to append before </nav>
        nav_end = '    </nav>'
        if nav_end in changed:
            # Find the last occurrence (bottom nav)
            idx = changed.rfind(nav_end)
            changed = changed[:idx] + PROFILE_NAV_BTN + '\n' + PLAN_NAV_BTN + '\n' + changed[idx:]
            print("[OK] Profile and Plan nav buttons appended to nav (alternative)")
        else:
            print("WARNING: Could not insert nav buttons")

    # ── C. Insert JavaScript before </script> ──
    # Find the last </script> tag (the one in the main script block)
    # There's only one <script> block in the file
    close_script = '\n</script>'
    last_idx = changed.rfind(close_script)
    if last_idx != -1:
        changed = changed[:last_idx] + '\n' + NEW_JS + close_script + changed[last_idx + len(close_script):]
        print("[OK] JavaScript inserted before </script>")
    else:
        print("WARNING: Could not find </script> tag for JS insertion")

    return changed


def count_js_functions(html: str) -> int:
    """Count number of function declarations in the new JS block."""
    return len(re.findall(r'\bfunction\s+\w+\s*\(', NEW_JS))


def main():
    if not HTML_FILE.exists():
        print(f"ERROR: File not found: {HTML_FILE}")
        sys.exit(1)

    print(f"Reading {HTML_FILE} ...")
    original = HTML_FILE.read_text(encoding='utf-8')
    print(f"Original file size: {len(original):,} bytes, {original.count(chr(10)):,} lines")

    # Back up
    backup = HTML_FILE.with_suffix('.html.bak')
    backup.write_text(original, encoding='utf-8')
    print(f"Backup saved to {backup}")

    transformed = transform(original)

    HTML_FILE.write_text(transformed, encoding='utf-8')
    print(f"\n[OK] Saved {HTML_FILE}")
    print(f"New file size: {len(transformed):,} bytes, {transformed.count(chr(10)):,} lines")

    # Count new functions
    fn_count = count_js_functions(transformed)
    print(f"\n[CHART] New JS functions added: {fn_count}")

    # Basic sanity checks
    checks = [
        ('Auth modal present', 'id="authBackdrop"'),
        ('Session bar present', 'id="sessionBar"'),
        ('Pomo widget present', 'id="pomoWidget"'),
        ('Toast container present', 'id="toastContainer"'),
        ('Profile screen present', 'id="profileScreen"'),
        ('Plan screen present', 'id="planScreen"'),
        ('SR rating function', 'function injectSRRatingUI'),
        ('Leitner function', 'function getLeitnerStats'),
        ('Pomodoro function', 'function pomoToggle'),
        ('Auth function', 'async function authLogin'),
        ('Toast function', 'function showToast'),
        ('Profile render', 'function renderProfile'),
        ('Schedule gen', 'function generateSchedule'),
        ('Guest banner', 'id="guestBanner"'),
        ('User badge', 'class="user-badge"'),
        ('Nav profile btn', 'data-target="profileScreen"'),
        ('Nav plan btn', 'data-target="planScreen"'),
        ('CSS auth-modal', '.auth-modal'),
        ('CSS pomo-widget', '.pomo-widget'),
        ('CSS sr-rating', '.sr-rating'),
        ('CSS leitner-viz', '.leitner-viz'),
    ]

    print("\n── Sanity checks ──")
    all_ok = True
    for name, pattern in checks:
        found = pattern in transformed
        status = "[OK]" if found else "[FAIL]"
        if not found:
            all_ok = False
        print(f"  {status} {name}")

    if all_ok:
        print("\n[PASS] All checks passed!")
    else:
        print("\n[WARN]  Some checks failed — review the warnings above.")

    # Check for backtick imbalance (rough check)
    bt_count = transformed.count('`')
    if bt_count % 2 == 0:
        print(f"[OK] Backtick count is even ({bt_count})")
    else:
        print(f"[WARN]  Backtick count is odd ({bt_count}) — possible template literal issue")

    print(f"\nDone. File size: ~{len(transformed) // 1024} KB")


if __name__ == '__main__':
    main()
