"""
extract.py — splits src/main-template.html into separate CSS and JS files.
Run once from the project root: python extract.py
"""
import os, re

BASE = os.path.dirname(os.path.abspath(__file__))
SRC  = os.path.join(BASE, 'src')

with open(os.path.join(SRC, 'main-template.html'), 'r', encoding='utf-8') as f:
    lines = f.readlines()

def get(start, end):
    """Return lines[start:end] joined, stripping @@PLACEHOLDER@@ lines."""
    result = []
    for l in lines[start:end]:
        if re.search(r'/\* @@\w+@@ \*/', l):
            continue
        result.append(l)
    return ''.join(result)

os.makedirs(os.path.join(SRC, 'data'), exist_ok=True)
os.makedirs(os.path.join(SRC, 'js'), exist_ok=True)

# ── CSS (file lines 12–2651, 0-indexed 11–2650) ──────────────────────────────
with open(os.path.join(SRC, 'styles.css'), 'w', encoding='utf-8') as f:
    f.write(get(11, 2651))
print(f'styles.css  {os.path.getsize(os.path.join(SRC, "styles.css")):,} bytes')

# ── CARDS + MNEMONICS (file lines 3676–4350, 0-indexed 3675–4349) ───────────
with open(os.path.join(SRC, 'data', 'flashcards.js'), 'w', encoding='utf-8') as f:
    f.write(get(3675, 4350))
print(f'data/flashcards.js  {os.path.getsize(os.path.join(SRC, "data", "flashcards.js")):,} bytes')

# ── flashcards.js (STATE/THEME/HOME/SESSION/RENDER + NEW SESSION + methods) ──
with open(os.path.join(SRC, 'js', 'flashcards.js'), 'w', encoding='utf-8') as f:
    f.write(get(4350, 5097))   # STATE … TOAST
    f.write('\n')
    f.write(get(6808, 8082))   # NEW SESSION SYSTEM + methods 1-5
print(f'js/flashcards.js  {os.path.getsize(os.path.join(SRC, "js", "flashcards.js")):,} bytes')

# ── quiz.js (ÖVNINGSUPPGIFTER + FORMULA SHEET + LÄGESVÄXLING + TQ + INFÖR PROV)
with open(os.path.join(SRC, 'js', 'quiz.js'), 'w', encoding='utf-8') as f:
    f.write(get(5097, 6418))   # ÖVNINGSUPPGIFTER incl. THEORY array
    f.write('\n')
    f.write(get(9038, 11778))  # FORMULA SHEET … INFÖR PROV
print(f'js/quiz.js  {os.path.getsize(os.path.join(SRC, "js", "quiz.js")):,} bytes')

# ── theory.js (theory search helpers + teori-fran-grunden + lazy tgInit) ─────
# Script 3 content: file lines 12960–13446 (0-indexed 12959–13445)
script3_lines = lines[12959:13446]

# Replace original tgInit() (lines 12975-12979, 0-indexed) with lazy version.
# Simple string replacement on the joined text:
script3_text = ''.join(script3_lines)

# Remove the placeholder line
script3_text = re.sub(r'.*?/\* @@TEORI_GRUND_CONTENT@@ \*/.*?\n', '', script3_text)

# Replace the original 4-line tgInit with a lazy-loading version
OLD_TGINIT = (
    'function tgInit() {\n'
    '  _tgInited = true;\n'
    '  document.getElementById(\'tgContentArea\').innerHTML = TG_RAW_HTML;\n'
    '  tgSetupObserver();\n'
    '}'
)
NEW_TGINIT = (
    'function tgInit() {\n'
    '  if (_tgInited) return;\n'
    '  _tgInited = true;\n'
    '  var s = document.createElement(\'script\');\n'
    '  s.src = \'src/teori-fran-grunden-content.js\';\n'
    '  s.onload = function() {\n'
    '    document.getElementById(\'tgContentArea\').innerHTML = TG_RAW_HTML;\n'
    '    tgSetupObserver();\n'
    '  };\n'
    '  document.head.appendChild(s);\n'
    '}'
)
script3_text = script3_text.replace(OLD_TGINIT, NEW_TGINIT)

with open(os.path.join(SRC, 'js', 'theory.js'), 'w', encoding='utf-8') as f:
    f.write(get(6418, 6785))   # theory search index & helpers
    f.write('\n')
    f.write(script3_text)
print(f'js/theory.js  {os.path.getsize(os.path.join(SRC, "js", "theory.js")):,} bytes')

# ── navigation.js (navTo + init nav buttons) ─────────────────────────────────
with open(os.path.join(SRC, 'js', 'navigation.js'), 'w', encoding='utf-8') as f:
    f.write(get(6785, 6808))   # NAVIGATION section (navTo)
    f.write('\n')
    f.write(get(8082, 8113))   # Init: nav buttons
print(f'js/navigation.js  {os.path.getsize(os.path.join(SRC, "js", "navigation.js")):,} bytes')

# ── storage.js (STUDY SYSTEM: data model, auth, localStorage, utilities) ─────
with open(os.path.join(SRC, 'js', 'storage.js'), 'w', encoding='utf-8') as f:
    f.write(get(8113, 9038))
print(f'js/storage.js  {os.path.getsize(os.path.join(SRC, "js", "storage.js")):,} bytes')

# ── calculator.js (Script 2: file lines 11860–12956, 0-indexed 11859–12955) ──
with open(os.path.join(SRC, 'js', 'calculator.js'), 'w', encoding='utf-8') as f:
    f.write(get(11859, 12956))
print(f'js/calculator.js  {os.path.getsize(os.path.join(SRC, "js", "calculator.js")):,} bytes')

print('\nAll files written.')
