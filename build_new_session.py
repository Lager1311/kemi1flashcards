#!/usr/bin/env python3
"""
build_new_session.py
Replaces the old schedule-based plan wizard in kemi1-flashcards.html
with the new study session system v2.
"""

import re
import sys

HTML_FILE = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html"

# ── helpers ────────────────────────────────────────────────────────────────────

def find_closing_div(content, open_tag_pos):
    """Find the closing </div> that matches the <div> at open_tag_pos."""
    depth = 0
    pos = open_tag_pos
    while pos < len(content):
        if content[pos:pos+4] == '<div':
            depth += 1
        elif content[pos:pos+6] == '</div>':
            depth -= 1
            if depth == 0:
                return pos
        pos += 1
    raise ValueError(f"No matching </div> found from position {open_tag_pos}")


def remove_function(content, fn_name):
    """
    Remove a top-level JS function declaration by counting braces.
    Handles:  function foo(...) { ... }
    Returns (new_content, removed) tuple.
    """
    pattern = rf'function\s+{re.escape(fn_name)}\s*\('
    m = re.search(pattern, content)
    if not m:
        print(f"  WARN: function {fn_name} not found – skipping")
        return content, False

    # Walk back to include any leading comments on the same/previous line
    start = m.start()

    # Find the opening brace
    brace_start = content.index('{', m.end())
    depth = 0
    pos = brace_start
    while pos < len(content):
        if content[pos] == '{':
            depth += 1
        elif content[pos] == '}':
            depth -= 1
            if depth == 0:
                end = pos + 1
                # Consume trailing newline(s)
                while end < len(content) and content[end] in ('\n', '\r'):
                    end += 1
                content = content[:start] + content[end:]
                print(f"  Removed function {fn_name}")
                return content, True
        pos += 1
    print(f"  WARN: Could not find end of function {fn_name}")
    return content, False


def remove_let_const_declaration(content, var_name):
    """
    Remove a top-level let/const/var declaration block.
    Works for both single-line and multi-line object/array literals.
    """
    pattern = rf'(?:let|const|var)\s+{re.escape(var_name)}\s*='
    m = re.search(pattern, content)
    if not m:
        print(f"  WARN: declaration {var_name} not found – skipping")
        return content

    start = m.start()
    # Find the first { or [ after the =
    eq_pos = content.index('=', m.end() - 1)
    # scan forward for { or [
    opener = None
    closer_map = {'{': '}', '[': ']'}
    pos = eq_pos + 1
    while pos < len(content):
        if content[pos] in ('{', '['):
            opener = content[pos]
            break
        elif content[pos] == ';':
            # single-line: no braces
            end = pos + 1
            while end < len(content) and content[end] in ('\n', '\r'):
                end += 1
            content = content[:start] + content[end:]
            print(f"  Removed declaration {var_name} (single-line)")
            return content
        pos += 1

    if opener is None:
        print(f"  WARN: Could not parse declaration {var_name}")
        return content

    closer = closer_map[opener]
    depth = 0
    while pos < len(content):
        if content[pos] == opener:
            depth += 1
        elif content[pos] == closer:
            depth -= 1
            if depth == 0:
                end = pos + 1
                # consume optional ; then newlines
                if end < len(content) and content[end] == ';':
                    end += 1
                while end < len(content) and content[end] in ('\n', '\r'):
                    end += 1
                content = content[:start] + content[end:]
                print(f"  Removed declaration {var_name}")
                return content
        pos += 1
    print(f"  WARN: Could not find end of declaration {var_name}")
    return content


# ── NEW CONTENT ────────────────────────────────────────────────────────────────

NEW_PLAN_SCREEN_INNER = r"""
  <!-- STEP 1: Session setup -->
  <div id="ssStep1" class="ss-step active">
    <div class="ss-hero">
      <h1>&#128218; Starta en studiesession</h1>
      <p>Anpassa sessionen efter din tid och ditt m&#229;l</p>
    </div>

    <div class="ss-card">
      <div class="ss-section-title">&#9201;&#65039; Hur mycket tid har du?</div>
      <div class="ss-time-btns">
        <button class="ss-time-btn" onclick="ssSetTime(15)">15 min</button>
        <button class="ss-time-btn" onclick="ssSetTime(30)">30 min</button>
        <button class="ss-time-btn active" onclick="ssSetTime(45)">45 min</button>
        <button class="ss-time-btn" onclick="ssSetTime(60)">60 min</button>
      </div>
      <div class="ss-custom-time">
        <input type="number" id="ssCustomTime" min="5" max="180" placeholder="Egen tid (min)" oninput="ssSetTime(parseInt(this.value)||45)">
      </div>
    </div>

    <div class="ss-card">
      <div class="ss-section-title">&#127919; Vad vill du plugga?</div>
      <div class="ss-tag-input-wrap">
        <input type="text" id="ssTopicInput" placeholder="Skriv &#228;mne eller typ... (ex: Molber&#228;kningar, Syror)" oninput="ssSuggest()" onkeydown="ssTagKeydown(event)" autocomplete="off">
        <div id="ssSuggestions" class="ss-suggestions" style="display:none;"></div>
      </div>
      <div id="ssSelectedTags" class="ss-tags"></div>
      <div class="ss-quick-tags">
        <span class="ss-quick-label">Snabbval:</span>
        <button class="ss-qtag" onclick="ssAddTag('R&#228;kneuppgifter \u2013 Alla')">&#129518; R&#228;kneuppgifter</button>
        <button class="ss-qtag" onclick="ssAddTag('Flashcards \u2013 Alla')">&#127183; Flashcards</button>
        <button class="ss-qtag" onclick="ssAddTag('R&#228;kneuppgifter \u2013 Syror &amp; baser')">&#9878;&#65039; Syror &amp; baser</button>
        <button class="ss-qtag" onclick="ssAddTag('R&#228;kneuppgifter \u2013 Molber&#228;kningar')">&#9878;&#65039; Mol</button>
        <button class="ss-qtag" onclick="ssAddTag('Flashcards \u2013 Termokemi &amp; energi')">&#127777;&#65039; Termokemi</button>
        <button class="ss-qtag" onclick="ssAddTag('Blandat \u2013 Alla &#228;mnen')">&#128256; Blandat</button>
      </div>
    </div>

    <button class="ss-primary-btn" onclick="ssStep1Next()">Visa rekommenderade metoder &#8594;</button>
  </div>

  <!-- STEP 2: Method selection -->
  <div id="ssStep2" class="ss-step">
    <button class="ss-back-btn" onclick="ssGoTo(1)">&#8592; Tillbaka</button>
    <div class="ss-hero">
      <h1>&#129504; V&#228;lj studieteknik</h1>
      <p id="ssMethodSubtitle">Baserat p&#229; din tid och ditt m&#229;l</p>
    </div>
    <div id="ssMethodCards" class="ss-method-cards"></div>
    <button class="ss-primary-btn" id="ssStartBtn" onclick="ssStartSession()" style="margin-top:16px;">&#9654; Starta session</button>
  </div>

  <!-- STEP 3: Active session (rendered by JS in overlay) -->
"""

SESSION_OVERLAY_HTML = r"""
<div id="sessionOverlay" style="display:none;position:fixed;inset:0;background:var(--bg);z-index:900;flex-direction:column;">
  <div class="sov-header">
    <div class="sov-progress">
      <div id="sovProgressBar" class="sov-progress-fill" style="width:0%"></div>
    </div>
    <div class="sov-meta">
      <span id="sovStepLabel">Uppgift 1 av 8</span>
      <span id="sovTimer" class="sov-timer">45:00</span>
      <button class="sov-end-btn" onclick="ssEndSession(true)">Avsluta</button>
    </div>
  </div>
  <div id="sovContent" class="sov-content"></div>
</div>
"""

NEW_CSS = r"""
/* ═══════════════════════════════
   NEW SESSION SYSTEM
═══════════════════════════════ */

/* Steps */
.ss-step { display: none; padding: 0 0 calc(var(--navbar-height) + 20px); }
.ss-step.active { display: block; }
.ss-hero { background: var(--accent-grad); color: #fff; padding: 32px 20px 24px; text-align: center; }
.ss-hero h1 { font-size: 1.45rem; font-weight: 800; margin: 0 0 6px; }
.ss-hero p { font-size: 0.9rem; opacity: 0.88; margin: 0; }
.ss-card { background: var(--surface); border-radius: var(--radius-sm); margin: 16px 16px 0; padding: 18px; box-shadow: var(--shadow-card); }
.ss-section-title { font-size: 0.95rem; font-weight: 700; margin-bottom: 14px; color: var(--text1); }

/* Time buttons */
.ss-time-btns { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
.ss-time-btn { flex: 1; min-width: 60px; padding: 10px 6px; border: 2px solid var(--border); border-radius: 10px; background: var(--surface2); color: var(--text1); font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: var(--transition); font-family: inherit; }
.ss-time-btn.active { border-color: var(--accent); background: var(--accent); color: #fff; }
.ss-custom-time input { width: 100%; padding: 9px 12px; border: 1.5px solid var(--border); border-radius: 8px; background: var(--surface2); color: var(--text1); font-size: 0.9rem; font-family: inherit; box-sizing: border-box; }

/* Tag input */
.ss-tag-input-wrap { position: relative; margin-bottom: 10px; }
.ss-tag-input-wrap input { width: 100%; padding: 10px 12px; border: 1.5px solid var(--border); border-radius: 8px; background: var(--surface2); color: var(--text1); font-size: 0.88rem; font-family: inherit; box-sizing: border-box; }
.ss-suggestions { position: absolute; top: 100%; left: 0; right: 0; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; box-shadow: var(--shadow-lg); z-index: 100; max-height: 200px; overflow-y: auto; }
.ss-sug-item { padding: 10px 14px; cursor: pointer; font-size: 0.85rem; border-bottom: 1px solid var(--border); }
.ss-sug-item:hover, .ss-sug-item.focused { background: var(--accent); color: #fff; }
.ss-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; min-height: 0; }
.ss-tag { display: flex; align-items: center; gap: 6px; background: var(--accent); color: #fff; border-radius: 20px; padding: 5px 10px 5px 12px; font-size: 0.8rem; font-weight: 600; }
.ss-tag button { background: none; border: none; color: #fff; cursor: pointer; font-size: 0.9rem; line-height: 1; padding: 0; opacity: 0.8; }
.ss-quick-tags { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.ss-quick-label { font-size: 0.75rem; color: var(--text2); width: 100%; margin-bottom: 2px; }
.ss-qtag { padding: 5px 10px; border: 1.5px solid var(--border); border-radius: 16px; background: var(--surface2); color: var(--text2); font-size: 0.78rem; cursor: pointer; font-family: inherit; transition: var(--transition); }
.ss-qtag:hover { border-color: var(--accent); color: var(--accent); }

/* Primary button */
.ss-primary-btn { display: block; width: calc(100% - 32px); margin: 16px 16px 0; padding: 16px; background: var(--accent-grad); color: #fff; border: none; border-radius: var(--radius-sm); font-size: 1.05rem; font-weight: 700; cursor: pointer; font-family: inherit; transition: var(--transition); }
.ss-primary-btn:hover { opacity: 0.92; transform: translateY(-1px); }
.ss-back-btn { display: block; background: none; border: none; color: var(--text2); font-size: 0.9rem; cursor: pointer; padding: 16px 20px 0; font-family: inherit; }

/* Method cards */
.ss-method-cards { display: flex; flex-direction: column; gap: 12px; padding: 0 16px; }
.ss-method-card { background: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-sm); padding: 16px; cursor: pointer; transition: var(--transition); box-shadow: var(--shadow-card); }
.ss-method-card.selected { border-color: var(--accent); background: linear-gradient(135deg, rgba(79,70,229,0.06), rgba(139,92,246,0.06)); }
.ss-method-card-header { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; }
.ss-method-icon { font-size: 1.6rem; flex-shrink: 0; }
.ss-method-name { font-size: 1rem; font-weight: 700; color: var(--text1); }
.ss-method-tagline { font-size: 0.8rem; color: var(--text2); margin-top: 2px; }
.ss-method-badge { margin-left: auto; padding: 3px 8px; border-radius: 20px; font-size: 0.7rem; font-weight: 700; white-space: nowrap; }
.badge-best { background: #dcfce7; color: #166534; }
.badge-memory { background: #dbeafe; color: #1e40af; }
.badge-time { background: #fef9c3; color: #854d0e; }
.badge-focus { background: #ede9fe; color: #6d28d9; }
.ss-method-bullets { list-style: none; padding: 0; margin: 0 0 8px; }
.ss-method-bullets li { font-size: 0.8rem; color: var(--text2); padding: 2px 0 2px 16px; position: relative; }
.ss-method-bullets li::before { content: '\2713'; position: absolute; left: 0; color: var(--accent); font-weight: 700; }
.ss-method-meta { font-size: 0.75rem; color: var(--text2); border-top: 1px solid var(--border); padding-top: 8px; margin-top: 4px; }

/* Session Overlay */
#sessionOverlay { flex-direction: column; }
.sov-header { position: sticky; top: 0; z-index: 10; background: var(--surface); border-bottom: 1px solid var(--border); }
.sov-progress { height: 4px; background: var(--surface2); }
.sov-progress-fill { height: 100%; background: var(--accent-grad); transition: width 0.4s ease; }
.sov-meta { display: flex; align-items: center; gap: 10px; padding: 10px 16px; }
#sovStepLabel { flex: 1; font-size: 0.85rem; color: var(--text2); font-weight: 600; }
.sov-timer { font-size: 1rem; font-weight: 700; color: var(--accent); font-variant-numeric: tabular-nums; min-width: 48px; }
.sov-end-btn { padding: 5px 12px; background: var(--surface2); border: 1.5px solid var(--border); border-radius: 8px; font-size: 0.78rem; cursor: pointer; color: var(--text2); font-family: inherit; }
.sov-content { flex: 1; overflow-y: auto; padding: 20px 16px 40px; max-width: 680px; margin: 0 auto; width: 100%; }

/* Session content elements */
.sov-concept-title { font-size: 1.4rem; font-weight: 800; color: var(--text1); margin-bottom: 8px; }
.sov-concept-sub { font-size: 0.9rem; color: var(--text2); margin-bottom: 20px; }
.sov-instruction { background: linear-gradient(135deg, rgba(79,70,229,0.08), rgba(139,92,246,0.08)); border-left: 4px solid var(--accent); border-radius: 0 8px 8px 0; padding: 14px 16px; font-size: 0.9rem; color: var(--text1); margin-bottom: 16px; }
.sov-textarea { width: 100%; min-height: 120px; padding: 12px; border: 1.5px solid var(--border); border-radius: 10px; background: var(--surface2); color: var(--text1); font-size: 0.92rem; font-family: inherit; resize: vertical; box-sizing: border-box; }
.sov-reveal-box { background: var(--surface2); border: 1px solid var(--border); border-radius: 10px; padding: 16px; margin: 14px 0; }
.sov-reveal-box h4 { font-size: 0.85rem; font-weight: 700; color: var(--accent); margin: 0 0 8px; }
.sov-reveal-box p { font-size: 0.9rem; color: var(--text1); margin: 0; line-height: 1.5; }
.sov-action-btn { width: 100%; padding: 14px; background: var(--accent-grad); color: #fff; border: none; border-radius: var(--radius-sm); font-size: 1rem; font-weight: 700; cursor: pointer; font-family: inherit; margin-top: 14px; }
.sov-secondary-btn { width: 100%; padding: 12px; background: var(--surface2); color: var(--text1); border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-size: 0.95rem; font-weight: 600; cursor: pointer; font-family: inherit; margin-top: 10px; }
.sov-rating-row { display: flex; gap: 8px; margin-top: 12px; }
.sov-rating-btn { flex: 1; padding: 12px 6px; border: none; border-radius: 10px; font-size: 0.85rem; font-weight: 700; cursor: pointer; font-family: inherit; }
.sov-rating-fail { background: #fee2e2; color: #991b1b; }
.sov-rating-unsure { background: #fef9c3; color: #854d0e; }
.sov-rating-knew { background: #dcfce7; color: #166534; }
.sov-flashcard { background: var(--surface); border: 2px solid var(--border); border-radius: var(--radius); padding: 32px 20px; text-align: center; min-height: 160px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; box-shadow: var(--shadow-card); }
.sov-flashcard .fc-q { font-size: 1.15rem; font-weight: 700; color: var(--text1); line-height: 1.4; }
.sov-flashcard .fc-a { font-size: 1rem; color: var(--text2); line-height: 1.5; }
.sov-problem-box { background: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-sm); padding: 18px; margin-bottom: 14px; }
.sov-problem-text { font-size: 0.95rem; color: var(--text1); line-height: 1.5; }
.sov-steps-list { list-style: none; padding: 0; margin: 10px 0 0; }
.sov-steps-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.85rem; color: var(--text1); border-bottom: 1px solid var(--border); }
.sov-steps-list li::before { content: counter(step); counter-increment: step; position: absolute; left: 0; background: var(--accent); color: #fff; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; }
.sov-steps-list { counter-reset: step; }
.sov-mini-summary { background: linear-gradient(135deg, rgba(79,70,229,0.08), rgba(139,92,246,0.08)); border-radius: 12px; padding: 16px; margin-bottom: 16px; text-align: center; }
.sov-formulas-panel { position: fixed; bottom: 60px; right: 16px; width: 260px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow-lg); z-index: 950; display: none; max-height: 300px; overflow-y: auto; }
.sov-formulas-panel.open { display: block; }
.sov-formulas-toggle { position: fixed; bottom: 60px; right: 16px; padding: 8px 14px; background: var(--surface); border: 1.5px solid var(--border); border-radius: 20px; font-size: 0.8rem; font-weight: 600; cursor: pointer; box-shadow: var(--shadow-card); z-index: 960; color: var(--text1); font-family: inherit; display: none; }

/* Session end */
.sov-end-card { background: var(--surface); border-radius: var(--radius); padding: 28px 20px; text-align: center; box-shadow: var(--shadow-card); }
.sov-end-emoji { font-size: 3rem; margin-bottom: 10px; }
.sov-end-title { font-size: 1.5rem; font-weight: 800; margin-bottom: 6px; }
.sov-end-msg { color: var(--text2); font-size: 0.9rem; margin-bottom: 20px; }
.sov-stats-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 10px; margin-bottom: 20px; }
.sov-stat-cell { background: var(--surface2); border-radius: 10px; padding: 14px; }
.sov-stat-val { font-size: 1.6rem; font-weight: 800; color: var(--accent); }
.sov-stat-label { font-size: 0.75rem; color: var(--text2); margin-top: 3px; }
.sov-areas { text-align: left; margin-bottom: 20px; }
.sov-area-row { display: flex; align-items: center; gap: 8px; padding: 6px 0; font-size: 0.83rem; }
.sov-area-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.sov-area-dot.good { background: #22c55e; }
.sov-area-dot.weak { background: #ef4444; }
"""

NEW_JS = r"""
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
};

// ── AUTOCOMPLETE DATA ──────────────────────────────────
const SS_SUGGESTIONS = [
  'R\u00e4kneuppgifter \u2013 Alla',
  'R\u00e4kneuppgifter \u2013 Syror & baser',
  'R\u00e4kneuppgifter \u2013 Molber\u00e4kningar',
  'R\u00e4kneuppgifter \u2013 Gaser',
  'R\u00e4kneuppgifter \u2013 Termokemi',
  'R\u00e4kneuppgifter \u2013 J\u00e4mvikt',
  'R\u00e4kneuppgifter \u2013 Elektrokemi',
  'R\u00e4kneuppgifter \u2013 St\u00f6kiometri',
  'Flashcards \u2013 Alla',
  'Flashcards \u2013 Atomens byggnad',
  'Flashcards \u2013 Syror & baser',
  'Flashcards \u2013 Kemisk bindning',
  'Flashcards \u2013 Organisk kemi',
  'Flashcards \u2013 Termokemi & energi',
  'Flashcards \u2013 L\u00f6sningar & koncentration',
  'Flashcards \u2013 Biokemi',
  'Blandat \u2013 Alla \u00e4mnen',
  'Blandat \u2013 Syror & baser',
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
    '<div class="ss-tag">' + t + '<button onclick="ssRemoveTag(\'' + t.replace(/'/g, "\\'") + '\')">&#215;</button></div>'
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
      '<div class="ss-sug-item" onclick="ssAddTag(\'' + s.replace(/'/g, "\\'") + '\')">' + s + '</div>'
    ).join('');
    box.style.display = 'block';
  }
}

function ssTagKeydown(e) {
  if (e.key === 'Enter') {
    const val = e.target.value.trim();
    if (val) { ssAddTag(val); }
  }
  if (e.key === 'Escape') {
    const sug = document.getElementById('ssSuggestions');
    if (sug) sug.style.display = 'none';
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
    '<div class="ss-method-card' + (i === 0 ? ' selected' : '') + '" id="ssmc_' + m.id + '" onclick="ssSelectMethod(\'' + m.id + '\')">',
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

  const catMap = {
    'syror': ['Syror & baser', 'Vanliga syror & baser'],
    'mol': ['Reaktioner & st\u00f6kiometri'],
    'stoik': ['Reaktioner & st\u00f6kiometri'],
    'gas': ['Gaser & termodynamik'],
    'termo': ['Termokemi & energi'],
    'j\u00e4mv': ['Kemisk j\u00e4mvikt'],
    'elek': ['Redox & elektrokemi'],
    'organ': ['Organisk kemi'],
    'atom': ['Atomens byggnad'],
    'bindning': ['Kemisk bindning'],
    'l\u00f6snin': ['L\u00f6sningar & koncentration'],
    'bioke': ['Biokemi'],
  };
  let filteredCats = new Set();
  Object.entries(catMap).forEach(function(entry) {
    const kw = entry[0], cats = entry[1];
    if (tagsLower.includes(kw)) cats.forEach(c => filteredCats.add(c));
  });

  let problems = typeof PROBLEMS !== 'undefined' ? PROBLEMS : [];
  if (filteredCats.size > 0) problems = problems.filter(p => filteredCats.has(p.cat));
  problems = problems.slice().sort(() => Math.random() - 0.5);

  let cards = typeof CARDS !== 'undefined' ? CARDS : [];
  if (filteredCats.size > 0) cards = cards.filter(c => filteredCats.has(c.cat));
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

  if (step.type === 'recall') sovRenderRecall(step.card);
  else if (step.type === 'recall_summary') sovRenderRecallSummary();
  else if (step.type === 'feynman') sovRenderFeynman(step.card);
  else if (step.type === 'problem') sovRenderProblem(step.problem);
  else if (step.type === 'pomo_work_start') sovRenderPomoStart();
  else if (step.type === 'pomo_break') sovRenderPomoBreak();
  else if (step.type === 'session_end') ssEndSession(false);
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

// ── Render: Pomodoro ───────────────────────────────────
function sovRenderPomoStart() {
  const content = document.getElementById('sovContent');
  if (!content) return;
  content.innerHTML = [
    '<div style="text-align:center;padding:20px 0;">',
    '  <div style="font-size:3rem;margin-bottom:12px;">\uD83C\uDF45</div>',
    '  <div style="font-size:1.3rem;font-weight:800;">Fokusblock startar!</div>',
    '  <div style="color:var(--text2);font-size:0.9rem;margin:8px 0 20px;">25 minuter koncentrerat pluggande. Du klarar det!</div>',
    '</div>',
    '<button class="sov-action-btn" onclick="sovNext()">Starta fokusblocket &#8594;</button>',
  ].join('\n');
}

function sovRenderPomoBreak() {
  const content = document.getElementById('sovContent');
  if (!content) return;
  let breakSecs = 5 * 60;
  content.innerHTML = [
    '<div style="text-align:center;padding:20px 0;">',
    '  <div style="font-size:3rem;margin-bottom:12px;">\u2615</div>',
    '  <div style="font-size:1.3rem;font-weight:800;">Obligatorisk paus!</div>',
    '  <div style="color:var(--text2);font-size:0.9rem;margin:8px 0 16px;">Titta bort fr\u00e5n sk\u00e4rmen. Ta ett glas vatten.</div>',
    '  <div id="sovBreakTimer" style="font-size:2rem;font-weight:800;color:var(--accent);">5:00</div>',
    '</div>',
    '<button class="sov-action-btn" id="sovSkipBreak" onclick="sovNext()">Hoppa \u00f6ver paus &#8594;</button>',
  ].join('\n');
  const t = setInterval(function() {
    breakSecs--;
    const el = document.getElementById('sovBreakTimer');
    if (el) el.textContent = Math.floor(breakSecs / 60) + ':' + String(breakSecs % 60).padStart(2, '0');
    if (breakSecs <= 0) { clearInterval(t); sovNext(); }
  }, 1000);
}

// ── Session end ─────────────────────────────────────────
function ssEndSession(manual) {
  sovState.running = false;
  if (sovState.timerInterval) { clearInterval(sovState.timerInterval); sovState.timerInterval = null; }

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
      '  <button class="sov-action-btn" onclick="ssNewSession()">\uD83D\uDD04 Starta ny session</button>',
      '  <button class="sov-secondary-btn" onclick="ssDone()">\u2713 Avsluta f\u00f6r idag</button>',
      '</div>',
    ].join('\n');

    const timerEl = document.getElementById('sovTimer');
    if (timerEl) timerEl.textContent = '0:00';
  }
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

// ── Init: attach to nav button ─────────────────────────
(function() {
  document.querySelectorAll('.nav-btn').forEach(function(btn) {
    if (btn.dataset.target === 'planScreen') {
      btn.addEventListener('click', function() {
        ssGoTo(1);
        ssRenderTags();
      });
    }
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.ss-tag-input-wrap')) {
      const sug = document.getElementById('ssSuggestions');
      if (sug) sug.style.display = 'none';
    }
  });
})();
"""

# ── MAIN ───────────────────────────────────────────────────────────────────────

def main():
    print("Reading HTML file...")
    with open(HTML_FILE, encoding='utf-8') as f:
        content = f.read()
    original_len = len(content)
    print(f"  File size: {original_len:,} bytes")

    # ── 1. Replace planScreen inner content ───────────────────────────────────
    print("\n[1] Replacing planScreen inner content...")
    plan_id_idx = content.find('id="planScreen"')
    if plan_id_idx < 0:
        raise ValueError('Could not find id="planScreen"')
    div_open = content.rfind('<div', 0, plan_id_idx)
    # find where opening tag ends
    tag_end = content.index('>', div_open) + 1
    # find closing div
    closing_pos = find_closing_div(content, div_open)
    # Replace inner content (keep outer <div id="planScreen"...> and </div>)
    content = content[:tag_end] + '\n' + NEW_PLAN_SCREEN_INNER + '\n  ' + content[closing_pos:]
    print(f"  planScreen inner content replaced (inner was chars {tag_end}–{closing_pos})")

    # ── 2. Add session overlay before </body> ─────────────────────────────────
    print("\n[2] Adding session overlay before </body>...")
    body_close = content.rfind('</body>')
    if body_close < 0:
        raise ValueError('Could not find </body>')
    content = content[:body_close] + SESSION_OVERLAY_HTML + '\n' + content[body_close:]
    print("  Session overlay inserted")

    # ── 3. Add CSS before </style> ────────────────────────────────────────────
    print("\n[3] Adding CSS before </style>...")
    style_close = content.rfind('</style>')
    if style_close < 0:
        raise ValueError('Could not find </style>')
    content = content[:style_close] + '\n' + NEW_CSS + '\n' + content[style_close:]
    print("  CSS inserted")

    # ── 4. Remove old JS functions ────────────────────────────────────────────
    print("\n[4] Removing old JS functions and declarations...")

    # Remove declarations first
    content = remove_let_const_declaration(content, 'planWizardState')
    content = remove_let_const_declaration(content, 'TOPIC_MAP')

    # Remove the sessionState declaration (in section 5 – keep the functions
    # but NOT the planWizard ones; startStudySession/endStudySession are in sec 5)
    # Actually per spec: remove startStudySession, endStudySession
    fns_to_remove = [
        'renderPlanWizard',
        'renderActivePlan',
        'renderStudySessionCard',
        'planSetGoal',
        'planInitTopicList',
        'planNextStep',
        'generateSchedule',
        'renderSchedulePreview',
        'planActivate',
        'cancelPlan',
        'startSessionFromPlan',
        'startStudySession',
        'endStudySession',
    ]
    for fn in fns_to_remove:
        content, _ = remove_function(content, fn)

    # ── 5. Remove the setTimeout block that references renderStudySessionCard ──
    print("\n[5] Removing old setTimeout block with renderStudySessionCard...")
    # Pattern: setTimeout(function() { ... renderStudySessionCard(); ... }, 500);
    st_pat = re.compile(
        r'//\s*Init on page load.*?setTimeout\(function\(\)\s*\{.*?renderStudySessionCard\(\);.*?\},\s*500\);',
        re.DOTALL
    )
    content_new = st_pat.sub('', content)
    if content_new != content:
        print("  Removed old setTimeout block")
        content = content_new
    else:
        print("  WARN: old setTimeout block not found by pattern – trying simpler approach")
        # Try a simpler removal
        st_idx = content.find('renderStudySessionCard();')
        if st_idx >= 0:
            # Find the setTimeout that contains it
            set_idx = content.rfind('setTimeout', 0, st_idx)
            if set_idx >= 0:
                # Find closing ), 500);
                end_idx = content.find('}, 500);', st_idx)
                if end_idx >= 0:
                    end_idx += len('}, 500);')
                    content = content[:set_idx] + content[end_idx:]
                    print("  Removed old setTimeout block (fallback method)")

    # ── 6. Remove nav listener that references planScreen/renderPlanWizard ─────
    print("\n[6] Removing old nav listener block...")
    nav_pat = re.compile(
        r"document\.querySelectorAll\('\.nav-btn'\)\.forEach\(.*?btn\.addEventListener\(.*?renderPlanWizard\(\).*?\}\);\s*\}\);\s*",
        re.DOTALL
    )
    content_new = nav_pat.sub('', content)
    if content_new != content:
        print("  Removed old nav listener block")
        content = content_new
    else:
        print("  WARN: old nav listener not found by pattern")

    # ── 7. Add new JS before </script> ────────────────────────────────────────
    print("\n[7] Adding new JS before </script>...")
    script_close = content.rfind('</script>')
    if script_close < 0:
        raise ValueError('Could not find </script>')
    content = content[:script_close] + '\n' + NEW_JS + '\n' + content[script_close:]
    print("  New JS inserted")

    # ── 8. Save ───────────────────────────────────────────────────────────────
    print("\n[8] Saving file...")
    with open(HTML_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Saved. New size: {len(content):,} bytes (delta: {len(content)-original_len:+,})")

    # ── 9. Verify ─────────────────────────────────────────────────────────────
    print("\n[9] Verifying key patterns...")
    checks = [
        ('id="ssStep1"', 'ssStep1 div'),
        ('id="ssStep2"', 'ssStep2 div'),
        ('id="sessionOverlay"', 'sessionOverlay div'),
        ('id="sovProgressBar"', 'sovProgressBar'),
        ('id="sovContent"', 'sovContent'),
        ('ssStartSession', 'ssStartSession function'),
        ('ssEndSession', 'ssEndSession function'),
        ('sovRenderRecall', 'sovRenderRecall function'),
        ('sovRenderProblem', 'sovRenderProblem function'),
        ('sovRenderFeynman', 'sovRenderFeynman function'),
        ('SS_METHODS', 'SS_METHODS array'),
        ('SS_SUGGESTIONS', 'SS_SUGGESTIONS array'),
        ('ss-step active', 'ss-step active CSS'),
        ('sov-header', 'sov-header CSS'),
        ('sov-end-card', 'sov-end-card CSS'),
        ('.ss-method-card', 'ss-method-card CSS'),
    ]
    all_ok = True
    for pattern, label in checks:
        found = pattern in content
        status = 'OK' if found else 'MISSING'
        if not found:
            all_ok = False
        print(f"  [{status}] {label}")

    # Check old functions are gone
    old_fns = ['renderPlanWizard', 'renderActivePlan', 'renderStudySessionCard',
               'planSetGoal', 'planInitTopicList', 'planNextStep',
               'generateSchedule', 'renderSchedulePreview',
               'planActivate', 'cancelPlan', 'startSessionFromPlan']
    for fn in old_fns:
        found = f'function {fn}' in content
        status = 'STILL PRESENT (warn)' if found else 'OK (removed)'
        if found:
            all_ok = False
        print(f"  [{status}] function {fn}")

    print()
    if all_ok:
        print("All checks passed!")
    else:
        print("Some checks failed – review output above.")
    return all_ok


if __name__ == '__main__':
    ok = main()
    sys.exit(0 if ok else 1)
