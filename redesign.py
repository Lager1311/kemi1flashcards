# -*- coding: utf-8 -*-
import sys
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()

# ══════════════════════════════════════════════════════════════════════
# 1. FIX: Bottom nav täcker innehåll
#    padding-bottom måste inkludera safe-area och nav-höjd
# ══════════════════════════════════════════════════════════════════════

html = html.replace(
    '.app { padding-bottom: 76px; }',
    '.app { padding-bottom: calc(80px + env(safe-area-inset-bottom, 0px)); }'
)

html = html.replace(
    '  .bottom-nav-wrap {\n    position: fixed; bottom: 0; left: 0; right: 0; z-index: 300;\n    background: var(--surface); border-top: 1px solid var(--border);\n    box-shadow: 0 -2px 20px rgba(0,0,0,0.08);\n  }',
    '  .bottom-nav-wrap {\n    position: fixed; bottom: 0; left: 0; right: 0; z-index: 300;\n    background: var(--nav-bg);\n    backdrop-filter: blur(20px) saturate(180%);\n    -webkit-backdrop-filter: blur(20px) saturate(180%);\n    border-top: 1px solid var(--border);\n    box-shadow: 0 -2px 30px rgba(0,0,0,0.15);\n    padding-bottom: env(safe-area-inset-bottom, 0px);\n  }'
)

html = html.replace(
    '  .bottom-nav {\n    max-width: 800px; margin: 0 auto;\n    display: flex; padding: 6px 4px 10px; gap: 2px;\n  }',
    '  .bottom-nav {\n    max-width: 800px; margin: 0 auto;\n    display: flex; padding: 8px 8px 10px; gap: 4px;\n  }'
)

# ══════════════════════════════════════════════════════════════════════
# 2. REDESIGN: CSS – moderna variabler, gradients, glassmorfism
# ══════════════════════════════════════════════════════════════════════

OLD_VARS = '''  :root {
    --bg: #f0f4f8;
    --surface: #ffffff;
    --surface2: #e8edf3;
    --border: #d1dbe8;
    --text: #1a2332;
    --text2: #4a5568;
    --accent: #2563eb;
    --accent-light: #dbeafe;
    --accent-dark: #1d4ed8;
    --green: #16a34a;
    --green-light: #dcfce7;
    --red: #dc2626;
    --red-light: #fee2e2;
    --yellow: #d97706;
    --yellow-light: #fef3c7;
    --shadow: 0 4px 24px rgba(0,0,0,0.08);
    --shadow-lg: 0 8px 40px rgba(0,0,0,0.14);
    --radius: 16px;
    --radius-sm: 10px;
    --transition: 0.2s ease;
  }
  [data-theme="dark"] {
    --bg: #0f1724;
    --surface: #1a2540;
    --surface2: #243050;
    --border: #2d3f5e;
    --text: #e8edf5;
    --text2: #94a3b8;
    --accent: #3b82f6;
    --accent-light: #1e3a6e;
    --accent-dark: #60a5fa;
    --green: #22c55e;
    --green-light: #14532d;
    --red: #f87171;
    --red-light: #7f1d1d;
    --yellow: #fbbf24;
    --yellow-light: #78350f;
    --shadow: 0 4px 24px rgba(0,0,0,0.4);
    --shadow-lg: 0 8px 40px rgba(0,0,0,0.6);
  }'''

NEW_VARS = '''  :root {
    --bg: #f0f4ff;
    --bg-grad: linear-gradient(135deg, #e8f0ff 0%, #f0e8ff 50%, #e8fff4 100%);
    --surface: rgba(255,255,255,0.85);
    --surface2: rgba(235,240,255,0.8);
    --nav-bg: rgba(255,255,255,0.75);
    --border: rgba(180,200,255,0.5);
    --text: #1a1f36;
    --text2: #5a6478;
    --accent: #4f46e5;
    --accent2: #7c3aed;
    --accent-grad: linear-gradient(135deg, #4f46e5, #7c3aed);
    --accent-light: rgba(79,70,229,0.1);
    --accent-dark: #3730a3;
    --green: #059669;
    --green-light: rgba(5,150,105,0.12);
    --red: #dc2626;
    --red-light: rgba(220,38,38,0.1);
    --yellow: #d97706;
    --yellow-light: rgba(217,119,6,0.12);
    --shadow: 0 4px 24px rgba(79,70,229,0.1);
    --shadow-lg: 0 12px 48px rgba(79,70,229,0.18);
    --shadow-card: 0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(180,200,255,0.4);
    --glow: 0 0 30px rgba(79,70,229,0.25);
    --radius: 20px;
    --radius-sm: 12px;
    --transition: 0.22s cubic-bezier(0.4,0,0.2,1);
  }
  [data-theme="dark"] {
    --bg: #0a0e1a;
    --bg-grad: linear-gradient(135deg, #0a0e1a 0%, #120a1f 50%, #091a12 100%);
    --surface: rgba(20,28,54,0.9);
    --surface2: rgba(28,36,68,0.85);
    --nav-bg: rgba(15,20,40,0.85);
    --border: rgba(60,80,140,0.4);
    --text: #e8ecf8;
    --text2: #8892b0;
    --accent: #6366f1;
    --accent2: #a855f7;
    --accent-grad: linear-gradient(135deg, #6366f1, #a855f7);
    --accent-light: rgba(99,102,241,0.15);
    --accent-dark: #818cf8;
    --green: #10b981;
    --green-light: rgba(16,185,129,0.15);
    --red: #f87171;
    --red-light: rgba(248,113,113,0.15);
    --yellow: #fbbf24;
    --yellow-light: rgba(251,191,36,0.15);
    --shadow: 0 4px 24px rgba(0,0,0,0.5);
    --shadow-lg: 0 12px 48px rgba(0,0,0,0.7);
    --shadow-card: 0 2px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(60,80,140,0.3);
    --glow: 0 0 40px rgba(99,102,241,0.3);
    --radius: 20px;
    --radius-sm: 12px;
    --transition: 0.22s cubic-bezier(0.4,0,0.2,1);
  }'''

html = html.replace(OLD_VARS, NEW_VARS)

# ── Body: gradient background ─────────────────────────────────────────────────
html = html.replace(
    '  body {\n    font-family: \'Inter\', sans-serif;\n    background: var(--bg);\n    color: var(--text);\n    min-height: 100vh;\n    transition: background var(--transition), color var(--transition);\n  }',
    '  body {\n    font-family: \'Inter\', sans-serif;\n    background: var(--bg-grad);\n    background-attachment: fixed;\n    color: var(--text);\n    min-height: 100vh;\n    transition: background var(--transition), color var(--transition);\n  }'
)

# ── Logo: gradient text ───────────────────────────────────────────────────────
html = html.replace(
    '  .logo { font-size: 1.4rem; font-weight: 700; color: var(--accent); }\n  .logo span { color: var(--text); }',
    '  .logo { font-size: 1.45rem; font-weight: 800; background: var(--accent-grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: -0.02em; }\n  .logo span { background: none; -webkit-text-fill-color: var(--text); color: var(--text); }'
)

# ── Header buttons: glassmorfism ──────────────────────────────────────────────
html = html.replace(
    '  .icon-btn {\n    background: var(--surface); border: 1px solid var(--border);\n    border-radius: var(--radius-sm); padding: 8px 12px; cursor: pointer;\n    font-size: 1rem; color: var(--text); transition: all var(--transition);\n    display: flex; align-items: center; gap: 6px;\n  }\n  .icon-btn:hover { background: var(--surface2); }',
    '  .icon-btn {\n    background: var(--surface); border: 1px solid var(--border);\n    border-radius: var(--radius-sm); padding: 8px 14px; cursor: pointer;\n    font-size: 1rem; color: var(--text); transition: all var(--transition);\n    display: flex; align-items: center; gap: 6px;\n    backdrop-filter: blur(12px); box-shadow: var(--shadow-card);\n  }\n  .icon-btn:hover { background: var(--surface2); transform: translateY(-1px); box-shadow: var(--shadow); }'
)

# ── Cards: glassmorfism + bättre skuggor ──────────────────────────────────────
html = html.replace(
    '  .welcome-card {\n    background: var(--surface); border-radius: var(--radius);\n    padding: 28px; margin-bottom: 20px; box-shadow: var(--shadow);\n    border: 1px solid var(--border);\n  }',
    '  .welcome-card {\n    background: var(--surface); border-radius: var(--radius);\n    padding: 28px; margin-bottom: 20px; box-shadow: var(--shadow-card);\n    border: 1px solid var(--border);\n    backdrop-filter: blur(20px);\n    position: relative; overflow: hidden;\n  }\n  .welcome-card::before {\n    content: ""; position: absolute; top: -60px; right: -60px;\n    width: 200px; height: 200px; border-radius: 50%;\n    background: var(--accent-grad); opacity: 0.07; pointer-events: none;\n  }'
)

# ── Stat cards: gradient accent number ───────────────────────────────────────
html = html.replace(
    '  .stat-num { font-size: 1.8rem; font-weight: 700; color: var(--accent); }',
    '  .stat-num { font-size: 1.9rem; font-weight: 800; background: var(--accent-grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }'
)
html = html.replace(
    '  .stat-card {\n    background: var(--surface); border: 1px solid var(--border);\n    border-radius: var(--radius-sm); padding: 16px; text-align: center;\n    box-shadow: var(--shadow);\n  }',
    '  .stat-card {\n    background: var(--surface); border: 1px solid var(--border);\n    border-radius: var(--radius-sm); padding: 16px; text-align: center;\n    box-shadow: var(--shadow-card); backdrop-filter: blur(12px);\n    transition: transform var(--transition), box-shadow var(--transition);\n  }\n  .stat-card:hover { transform: translateY(-2px); box-shadow: var(--shadow); }'
)

# ── Category cards: hover glow ────────────────────────────────────────────────
html = html.replace(
    '  .cat-card {\n    background: var(--surface); border: 2px solid var(--border);\n    border-radius: var(--radius-sm); padding: 16px; cursor: pointer;\n    transition: all var(--transition); position: relative; overflow: hidden;\n  }\n  .cat-card:hover { border-color: var(--accent); transform: translateY(-2px); box-shadow: var(--shadow); }\n  .cat-card.selected { border-color: var(--accent); background: var(--accent-light); }\n  .cat-card.all-selected { border-color: var(--green); background: var(--green-light); }',
    '  .cat-card {\n    background: var(--surface); border: 2px solid var(--border);\n    border-radius: var(--radius-sm); padding: 16px; cursor: pointer;\n    transition: all var(--transition); position: relative; overflow: hidden;\n    backdrop-filter: blur(12px); box-shadow: var(--shadow-card);\n  }\n  .cat-card:hover { border-color: var(--accent); transform: translateY(-3px); box-shadow: var(--shadow), var(--glow); }\n  .cat-card.selected { border-color: var(--accent); background: var(--accent-light); box-shadow: var(--shadow), 0 0 0 1px var(--accent); }\n  .cat-card.all-selected { border-color: var(--green); background: var(--green-light); }'
)

# ── Prob card / quiz card: glassmorfism ───────────────────────────────────────
html = html.replace(
    '  .prob-card {\n    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);\n    padding: 22px; margin-bottom: 14px; box-shadow: var(--shadow);\n  }',
    '  .prob-card {\n    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);\n    padding: 22px; margin-bottom: 14px; box-shadow: var(--shadow-card);\n    backdrop-filter: blur(16px); transition: box-shadow var(--transition);\n  }\n  .prob-card:hover { box-shadow: var(--shadow); }'
)

# ── Nav buttons: pill with gradient active ───────────────────────────────────
html = html.replace(
    '  .nav-btn {\n    flex: 1; padding: 6px 4px 4px; border: none; background: none;\n    cursor: pointer; border-radius: 10px; transition: all var(--transition);\n    display: flex; flex-direction: column; align-items: center; gap: 2px;\n  }\n  .nav-btn-icon { font-size: 1.3rem; display: block; transition: transform var(--transition); }\n  .nav-btn-label { font-size: 0.62rem; font-weight: 600; color: var(--text2); white-space: nowrap; }\n  .nav-btn:hover { background: var(--surface2); }\n  .nav-btn.active .nav-btn-label { color: var(--accent); }\n  .nav-btn.active .nav-btn-icon { transform: scale(1.15); }',
    '  .nav-btn {\n    flex: 1; padding: 6px 4px 4px; border: none; background: none;\n    cursor: pointer; border-radius: 14px; transition: all var(--transition);\n    display: flex; flex-direction: column; align-items: center; gap: 3px;\n    position: relative;\n  }\n  .nav-btn-icon { font-size: 1.35rem; display: block; transition: transform var(--transition); }\n  .nav-btn-label { font-size: 0.63rem; font-weight: 600; color: var(--text2); white-space: nowrap; transition: color var(--transition); }\n  .nav-btn:hover { background: var(--surface2); }\n  .nav-btn.active { background: var(--accent-light); }\n  .nav-btn.active .nav-btn-label { color: var(--accent); font-weight: 700; }\n  .nav-btn.active .nav-btn-icon { transform: scale(1.2); filter: drop-shadow(0 0 6px var(--accent)); }'
)

# ── Section headers: gradient pill ────────────────────────────────────────────
html = html.replace(
    '  .section-header {\n    display: flex; align-items: center; gap: 10px;\n    margin: 20px 0 12px;\n  }\n  .section-header:first-child { margin-top: 0; }\n  .section-header-icon {\n',
    '  .section-header {\n    display: flex; align-items: center; gap: 10px;\n    margin: 24px 0 12px;\n  }\n  .section-header:first-child { margin-top: 0; }\n  .section-header-icon {\n'
)

# ── Buttons: gradient primary ─────────────────────────────────────────────────
# prob-check button
html = html.replace(
    '  .prob-check {',
    '  .prob-check {'
)

# Find and update the prob-check style
old_check = '''  .prob-check {
    padding: 10px 20px; background: var(--accent); color: #fff;
    border: none; border-radius: var(--radius-sm); cursor: pointer;
    font-weight: 600; transition: all var(--transition);
  }
  .prob-check:hover { background: var(--accent-dark); }'''
new_check = '''  .prob-check {
    padding: 10px 24px; background: var(--accent-grad); color: #fff;
    border: none; border-radius: var(--radius-sm); cursor: pointer;
    font-weight: 700; transition: all var(--transition);
    box-shadow: 0 4px 14px rgba(79,70,229,0.35);
    letter-spacing: 0.01em;
  }
  .prob-check:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(79,70,229,0.45); }
  .prob-check:active { transform: translateY(0); }'''
if old_check in html:
    html = html.replace(old_check, new_check)

# ── Quiz card: bigger, more impressive ───────────────────────────────────────
old_quiz = '''  .quiz-card {
    background: var(--surface); border-radius: var(--radius);
    padding: 32px; margin-bottom: 20px;
    box-shadow: var(--shadow-lg); border: 1px solid var(--border);
    min-height: 180px; display: flex; flex-direction: column; justify-content: center;
  }'''
new_quiz = '''  .quiz-card {
    background: var(--surface); border-radius: var(--radius);
    padding: 36px 32px; margin-bottom: 20px;
    box-shadow: var(--shadow-lg); border: 1px solid var(--border);
    min-height: 180px; display: flex; flex-direction: column; justify-content: center;
    backdrop-filter: blur(20px); position: relative; overflow: hidden;
  }
  .quiz-card::after {
    content: ""; position: absolute; bottom: -40px; left: -40px;
    width: 160px; height: 160px; border-radius: 50%;
    background: var(--accent-grad); opacity: 0.05; pointer-events: none;
  }'''
if old_quiz in html:
    html = html.replace(old_quiz, new_quiz)

# ── Answer buttons: glassmorfism pill ─────────────────────────────────────────
old_ans_btn = '''  .answer-btn {
    padding: 14px 20px; border: 2px solid var(--border);
    border-radius: var(--radius-sm); background: var(--surface);
    cursor: pointer; font-size: 0.92rem; text-align: left;
    transition: all var(--transition); color: var(--text);
    width: 100%;
  }
  .answer-btn:hover { border-color: var(--accent); background: var(--accent-light); }
  .answer-btn.correct { border-color: var(--green); background: var(--green-light); color: var(--green); }
  .answer-btn.wrong { border-color: var(--red); background: var(--red-light); color: var(--red); }'''
new_ans_btn = '''  .answer-btn {
    padding: 14px 20px; border: 2px solid var(--border);
    border-radius: var(--radius-sm); background: var(--surface);
    cursor: pointer; font-size: 0.93rem; text-align: left;
    transition: all var(--transition); color: var(--text);
    width: 100%; backdrop-filter: blur(8px);
    box-shadow: var(--shadow-card);
  }
  .answer-btn:hover { border-color: var(--accent); background: var(--accent-light); transform: translateX(3px); box-shadow: var(--shadow); }
  .answer-btn.correct { border-color: var(--green); background: var(--green-light); color: var(--green); font-weight: 600; }
  .answer-btn.wrong { border-color: var(--red); background: var(--red-light); color: var(--red); }'''
if old_ans_btn in html:
    html = html.replace(old_ans_btn, new_ans_btn)

# ── Mode buttons: gradient selected ──────────────────────────────────────────
old_mode = '''  .mode-btn {
    padding: 12px 16px; border: 2px solid var(--border);
    border-radius: var(--radius-sm); background: var(--surface);
    cursor: pointer; font-size: 0.85rem; font-weight: 600;
    transition: all var(--transition); color: var(--text);
    display: flex; flex-direction: column; align-items: center; gap: 4px;
  }
  .mode-btn.active { border-color: var(--accent); background: var(--accent-light); color: var(--accent); }
  .mode-btn:hover { transform: translateY(-1px); }'''
new_mode = '''  .mode-btn {
    padding: 12px 16px; border: 2px solid var(--border);
    border-radius: var(--radius-sm); background: var(--surface);
    cursor: pointer; font-size: 0.85rem; font-weight: 600;
    transition: all var(--transition); color: var(--text);
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    backdrop-filter: blur(10px); box-shadow: var(--shadow-card);
  }
  .mode-btn.active { border-color: var(--accent); background: var(--accent-light); color: var(--accent); box-shadow: var(--shadow), 0 0 0 1px var(--accent); }
  .mode-btn:hover { transform: translateY(-2px); box-shadow: var(--shadow); }'''
if old_mode in html:
    html = html.replace(old_mode, new_mode)

# ── Theory nav buttons ─────────────────────────────────────────────────────────
old_theory_btn = '''  .theory-nav-btn {
    padding: 6px 14px; border: 1px solid var(--border); border-radius: 20px;
    background: var(--surface); cursor: pointer; font-size: 0.82rem; font-weight: 600;
    transition: all var(--transition); white-space: nowrap; color: var(--text);
  }
  .theory-nav-btn:hover { border-color: var(--accent); }
  .theory-nav-btn.active { border-color: var(--accent); background: var(--accent); color: #fff; }'''
new_theory_btn = '''  .theory-nav-btn {
    padding: 7px 16px; border: 1px solid var(--border); border-radius: 20px;
    background: var(--surface); cursor: pointer; font-size: 0.82rem; font-weight: 600;
    transition: all var(--transition); white-space: nowrap; color: var(--text);
    backdrop-filter: blur(10px);
  }
  .theory-nav-btn:hover { border-color: var(--accent); transform: translateY(-1px); }
  .theory-nav-btn.active { border: none; background: var(--accent-grad); color: #fff; box-shadow: 0 4px 14px rgba(79,70,229,0.35); }'''
if old_theory_btn in html:
    html = html.replace(old_theory_btn, new_theory_btn)

# ── Progress bar: gradient ─────────────────────────────────────────────────────
html = html.replace(
    '  .cat-progress-fill { height: 100%; border-radius: 2px; background: var(--green); transition: width 0.4s; }',
    '  .cat-progress-fill { height: 100%; border-radius: 2px; background: var(--accent-grad); transition: width 0.5s cubic-bezier(0.4,0,0.2,1); }'
)

# ── Formula screen cards ─────────────────────────────────────────────────────
old_formula_section = '  .formula-section { margin-bottom: 24px; }'
new_formula_section = '  .formula-section { margin-bottom: 28px; }'
if old_formula_section in html:
    html = html.replace(old_formula_section, new_formula_section)

# ── Cloze card ───────────────────────────────────────────────────────────────
html = html.replace(
    '  .cloze-card { background:var(--surface); border-radius:var(--radius); padding:24px; box-shadow:var(--shadow); margin-bottom:16px; }',
    '  .cloze-card { background:var(--surface); border-radius:var(--radius); padding:26px; box-shadow:var(--shadow-card); margin-bottom:16px; backdrop-filter:blur(16px); border:1px solid var(--border); }'
)

# ── Section header icon: gradient bg ──────────────────────────────────────────
old_sec_icon = '''  .section-header-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: var(--accent-light); display: flex; align-items: center;
    justify-content: center; font-size: 1rem; flex-shrink: 0;
  }'''
new_sec_icon = '''  .section-header-icon {
    width: 34px; height: 34px; border-radius: 10px;
    background: var(--accent-grad); display: flex; align-items: center;
    justify-content: center; font-size: 1rem; flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(79,70,229,0.25);
  }'''
if old_sec_icon in html:
    html = html.replace(old_sec_icon, new_sec_icon)

# ── Formula box ──────────────────────────────────────────────────────────────
old_fbox = '''  .formula-box {
    background: var(--surface2); border-left: 4px solid var(--accent);
    border-radius: var(--radius-sm); padding: 14px 16px;
    font-family: monospace; font-size: 0.9rem; line-height: 1.7;
    white-space: pre-wrap; margin: 14px 0; color: var(--text);
  }'''
new_fbox = '''  .formula-box {
    background: var(--surface2); border-left: 4px solid var(--accent);
    border-radius: var(--radius-sm); padding: 16px 18px;
    font-family: 'Courier New', monospace; font-size: 0.9rem; line-height: 1.8;
    white-space: pre-wrap; margin: 16px 0; color: var(--text);
    backdrop-filter: blur(8px); box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
  }'''
if old_fbox in html:
    html = html.replace(old_fbox, new_fbox)

# ── Badges/tags: gradient ─────────────────────────────────────────────────────
html = html.replace(
    '    background: var(--accent-light); color: var(--accent);\n  }',
    '    background: var(--accent-light); color: var(--accent);\n  }',
)

# ── Level buttons ─────────────────────────────────────────────────────────────
old_level_btn = '''  .level-btn {
    padding: 16px 10px; border: 2px solid var(--border); border-radius: 14px;
    background: var(--surface); cursor: pointer; text-align: center;
    transition: all var(--transition); display: flex; flex-direction: column; align-items: center; gap: 4px;
  }
  .level-btn:hover { transform: translateY(-2px); box-shadow: var(--shadow); }
  .level-btn.active { border-color: var(--accent); background: var(--accent-light); }'''
new_level_btn = '''  .level-btn {
    padding: 16px 10px; border: 2px solid var(--border); border-radius: 16px;
    background: var(--surface); cursor: pointer; text-align: center;
    transition: all var(--transition); display: flex; flex-direction: column; align-items: center; gap: 4px;
    backdrop-filter: blur(12px); box-shadow: var(--shadow-card);
  }
  .level-btn:hover { transform: translateY(-3px); box-shadow: var(--shadow), var(--glow); }
  .level-btn.active { border-color: var(--accent); background: var(--accent-light); box-shadow: var(--shadow), 0 0 0 1px var(--accent); }'''
if old_level_btn in html:
    html = html.replace(old_level_btn, new_level_btn)

# ── Nav btn primary (next/prev) ────────────────────────────────────────────────
html = html.replace(
    '  .prob-nav-btn.primary { background: var(--accent); color: #fff; border-color: var(--accent); }\n  .prob-nav-btn.primary:hover { background: var(--accent-dark); }',
    '  .prob-nav-btn.primary { background: var(--accent-grad); color: #fff; border: none; box-shadow: 0 4px 14px rgba(79,70,229,0.35); }\n  .prob-nav-btn.primary:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(79,70,229,0.45); }'
)

# ── Summary screen ─────────────────────────────────────────────────────────────
old_summary = '''  .summary-card {
    background: var(--surface); border-radius: var(--radius);
    padding: 32px; text-align: center; box-shadow: var(--shadow-lg);
    border: 1px solid var(--border);
  }'''
new_summary = '''  .summary-card {
    background: var(--surface); border-radius: var(--radius);
    padding: 36px 32px; text-align: center; box-shadow: var(--shadow-lg);
    border: 1px solid var(--border); backdrop-filter: blur(20px);
    position: relative; overflow: hidden;
  }
  .summary-card::before {
    content: ""; position: absolute; top: -80px; right: -80px;
    width: 250px; height: 250px; border-radius: 50%;
    background: var(--accent-grad); opacity: 0.06; pointer-events: none;
  }'''
if old_summary in html:
    html = html.replace(old_summary, new_summary)

# ── Score number: gradient ─────────────────────────────────────────────────────
old_score = '  .score-num { font-size: 4rem; font-weight: 800; color: var(--accent); line-height: 1; }'
new_score = '  .score-num { font-size: 4.5rem; font-weight: 900; background: var(--accent-grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }'
if old_score in html:
    html = html.replace(old_score, new_score)

# ── Add keyframe animations ───────────────────────────────────────────────────
anim_css = '''
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(79,70,229,0.3); }
    50%       { box-shadow: 0 0 0 8px rgba(79,70,229,0); }
  }
  .quiz-card, .prob-card, .cloze-card, .welcome-card {
    animation: fadeInUp 0.35s cubic-bezier(0.4,0,0.2,1);
  }
  .nav-btn.active .nav-btn-icon { animation: none; }
'''

# Insert before closing </style>
html = html.replace('</style>', anim_css + '</style>', 1)

# ── Add Google font: also load Outfit for headings ────────────────────────────
html = html.replace(
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" media="print" onload="this.onload=null;this.media=\'all\'">',
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@700;800&display=swap" media="print" onload="this.onload=null;this.media=\'all\'">'
)

# Use Plus Jakarta Sans for headings
heading_css = '''  h1, h2, h3 { font-family: \'Plus Jakarta Sans\', \'Inter\', sans-serif; }
'''
html = html.replace('  * { box-sizing: border-box; margin: 0; padding: 0; }', heading_css + '  * { box-sizing: border-box; margin: 0; padding: 0; }')

# ── Theory table ─────────────────────────────────────────────────────────────
old_theory_table = '''  .theory-table {
    width: 100%; border-collapse: collapse; margin: 14px 0; font-size: 0.88rem;
  }
  .theory-table th {
    background: var(--surface2); padding: 8px 12px; text-align: left;
    font-weight: 600; border-bottom: 2px solid var(--border);
  }
  .theory-table td { padding: 7px 12px; border-bottom: 1px solid var(--border); }
  .theory-table tr:last-child td { border-bottom: none; }
  .theory-table tr:hover td { background: var(--surface2); }'''
new_theory_table = '''  .theory-table {
    width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 0.88rem;
    border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-card);
  }
  .theory-table th {
    background: var(--accent-light); padding: 10px 14px; text-align: left;
    font-weight: 700; border-bottom: 2px solid var(--border); color: var(--accent);
  }
  .theory-table td { padding: 8px 14px; border-bottom: 1px solid var(--border); }
  .theory-table tr:last-child td { border-bottom: none; }
  .theory-table tr:hover td { background: var(--surface2); }'''
if old_theory_table in html:
    html = html.replace(old_theory_table, new_theory_table)

print(f"Redesign klar!")
print(f"Filstorlek: {len(html)} chars / {len(html.encode('utf-8'))//1024} KB")

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)
