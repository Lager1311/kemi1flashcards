# -*- coding: utf-8 -*-
import sys, re
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

# ── Load sections from both theory files ──────────────────────────────────────
def load_sections(filename):
    with open(filename, encoding='utf-8') as f:
        lines = f.readlines()
    # Strip sys.stdout reassignment and any print() lines to avoid side effects
    filtered = []
    for line in lines:
        stripped = line.lstrip()
        if stripped.startswith('sys.stdout') or stripped.startswith('print('):
            filtered.append('\n')  # blank line to keep line numbers
        else:
            filtered.append(line)
    code = ''.join(filtered)
    ns = {}
    exec(code, ns)
    return ns['sections']

secs1 = load_sections('big_theory1.py')
secs2 = load_sections('big_theory2.py')

all_sections = secs1 + secs2
print(f"Sections loaded: {len(all_sections)}")
for i, (title, icon, _) in enumerate(all_sections):
    print(f"  {i+1}. {title} {icon}")

# ── Build JS THEORY array ─────────────────────────────────────────────────────
def js_str(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

parts = []
for title, icon, html_content in all_sections:
    # Escape backticks and ${} in html content for JS template literal
    safe_html = html_content.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    entry = '  { cat: ' + js_str(title) + ', icon: ' + js_str(icon) + ', html: `' + safe_html + '` }'
    parts.append(entry)

NEW_THEORY = 'const THEORY = [\n' + ',\n'.join(parts) + '\n]'

# ── Read HTML ─────────────────────────────────────────────────────────────────
with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()

THEORY_START = 'const THEORY = ['
THEORY_END   = '];\n\nlet theoryIdx'

ti = html.find(THEORY_START)
te = html.find(THEORY_END, ti)

if ti == -1 or te == -1:
    print("ERROR: Could not find THEORY anchors!")
    sys.exit(1)

print(f"Old THEORY: chars {ti} to {te+2} ({te-ti} chars)")

html = html[:ti] + NEW_THEORY + html[te:]

# Fix accidental double ]] if any
fixed = html.replace(']];\n\nlet theoryIdx', '];\n\nlet theoryIdx', 1)
if fixed != html:
    html = fixed
    print("Fixed double ]] at THEORY end")

# ── Verify ────────────────────────────────────────────────────────────────────
bt = html[html.find('const THEORY = ['):html.find('];\n\nlet theoryIdx', html.find('const THEORY = ['))].count('`')
print(f"THEORY backticks: {bt} (even={bt%2==0})")
double_close = html.count(']];\n\nlet theoryIdx')
print(f"Double ]]: {double_close} (should be 0)")

# ── Write ─────────────────────────────────────────────────────────────────────
with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"File size: {len(html)} chars / {len(html.encode('utf-8'))//1024} KB")
print("Done!")
