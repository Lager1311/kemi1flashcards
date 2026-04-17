# -*- coding: utf-8 -*-
import sys
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

with open('kemi1-flashcards.html', 'r', encoding='utf-8') as f:
    html = f.read()
print(f"Input: {len(html)} chars")

# ── 1. Non-blocking Google Fonts ──────────────────────────────────────────
OLD_FONT = '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">'
NEW_FONT = '''<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" media="print" onload="this.onload=null;this.media='all'">
<noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></noscript>'''
assert OLD_FONT in html, "Font anchor not found"
html = html.replace(OLD_FONT, NEW_FONT, 1)
print("1. Font: non-blocking ✓")

# ── 2. Defer category grid build (fix "flashcards not visible") ──────────
OLD_INIT = '''loadState();
applyTheme();
buildCategoryGrid();
updateHomeStats();'''
NEW_INIT = '''loadState();
applyTheme();
// Defer DOM-heavy init so browser paints HTML before JS blocks
setTimeout(function() {
  buildCategoryGrid();
  updateHomeStats();
}, 0);'''
assert OLD_INIT in html, "Init anchor not found"
html = html.replace(OLD_INIT, NEW_INIT, 1)
print("2. Init: deferred ✓")

# ── 3. Fix checkProblem: show steps instead of undefined prob.sol ────────
OLD_CHECK = '''  fb.className = `prob-feedback show ${correct ? 'ok' : 'fail'}`;
  fb.innerHTML = correct
    ? `<strong>✅ Rätt!</strong><br><strong>Lösning:</strong> ${prob.sol}`
    : `<strong>❌ Fel.</strong> Ditt svar: ${val} ${prob.unit}<br>Rätt svar: ${prob.ans} ${prob.unit}<br><strong>Lösning:</strong> ${prob.sol}`;'''
NEW_CHECK = '''  fb.className = `prob-feedback show ${correct ? 'ok' : 'fail'}`;
  const _sol = prob.sol || (prob.steps ? prob.steps.join(' \u2192 ') : '');
  fb.innerHTML = correct
    ? `<strong>\u2705 R\u00e4tt!</strong><br><small style="color:var(--green)">${_sol}</small>`
    : `<strong>\u274c Fel.</strong> Ditt svar: ${val}\u00a0${prob.unit}<br>R\u00e4tt svar: <strong>${prob.ans}\u00a0${prob.unit}</strong><br><small>${_sol}</small>`;'''
assert OLD_CHECK in html, "checkProblem anchor not found"
html = html.replace(OLD_CHECK, NEW_CHECK, 1)
print("3. checkProblem: steps display fixed ✓")

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Output: {len(html)} chars")
print("Done!")
