"""
build.py – Bygger två versioner av kemi1-flashcards:
  index.html            – slim version för webbserver (58 KB)
  kemi1-flashcards.html – inlinead standalone-version för direkt filöppning

Kör: python build.py
"""
import os, shutil, re

base = os.path.dirname(os.path.abspath(__file__))
src  = os.path.join(base, 'src')

template_path = os.path.join(src, 'main-template.html')
tq_path       = os.path.join(src, 'theory-questions.js')
prob_path     = os.path.join(src, 'problems.js')
tg_path       = os.path.join(src, 'teori-fran-grunden-content.js')
css_path      = os.path.join(src, 'styles.css')

js_files = [
    os.path.join(src, 'data', 'flashcards.js'),
    os.path.join(src, 'js', 'storage.js'),
    os.path.join(src, 'js', 'navigation.js'),
    os.path.join(src, 'js', 'flashcards.js'),
    os.path.join(src, 'js', 'quiz.js'),
    os.path.join(src, 'js', 'calculator.js'),
    os.path.join(src, 'js', 'theory.js'),
]

def read(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

# ── index.html (slim, for server) ────────────────────────────────────────────
index_path = os.path.join(base, 'index.html')
shutil.copy2(template_path, index_path)
size_index = os.path.getsize(index_path)

# ── kemi1-flashcards.html (standalone, for file://) ──────────────────────────
template = read(template_path)

# Inline CSS
css_text = read(css_path)
template = template.replace(
    '<link rel="stylesheet" href="src/styles.css">',
    f'<style>\n{css_text}</style>'
)

# Inline each <script src="..."> with its content
def inline_script(m):
    src_attr = m.group(1)
    # Resolve path relative to project root
    file_path = os.path.join(base, src_attr.replace('/', os.sep))
    if os.path.exists(file_path):
        return f'<script>\n{read(file_path)}\n</script>'
    return m.group(0)  # leave unchanged if file not found

template = re.sub(
    r'<script src="([^"]+)"></script>',
    inline_script,
    template
)

# Inline problems.js and theory-questions.js as data vars,
# and teori-fran-grunden lazily (replace dynamic script load with direct assignment)
tg_text = read(tg_path).rstrip('\n')
tq_text = read(tq_path).rstrip('\n')
prob_text = read(prob_path).rstrip('\n')

# Replace the lazy tgInit with a version that uses inlined TG_RAW_HTML
OLD_LAZY = (
    "function tgInit() {\n"
    "  if (_tgInited) return;\n"
    "  _tgInited = true;\n"
    "  var s = document.createElement('script');\n"
    "  s.src = 'src/teori-fran-grunden-content.js';\n"
    "  s.onload = function() {\n"
    "    document.getElementById('tgContentArea').innerHTML = TG_RAW_HTML;\n"
    "    tgSetupObserver();\n"
    "  };\n"
    "  document.head.appendChild(s);\n"
    "}"
)
INLINE_TGINIT = (
    "function tgInit() {\n"
    "  if (_tgInited) return;\n"
    "  _tgInited = true;\n"
    "  document.getElementById('tgContentArea').innerHTML = TG_RAW_HTML;\n"
    "  tgSetupObserver();\n"
    "}"
)
template = template.replace(OLD_LAZY, INLINE_TGINIT)

# Prepend TG_RAW_HTML + PROBLEMS + THEORY_QUESTIONS before closing </body>
# (they were stripped from js files; inject them back as inline script)
extra = (
    '\n<script>\n'
    + tg_text + '\n'
    + prob_text + '\n'
    + tq_text + '\n'
    + '</script>\n'
)
template = template.replace('</body>', extra + '</body>')

out_path = os.path.join(base, 'kemi1-flashcards.html')
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(template)

size_out = os.path.getsize(out_path)
print(f'index.html            {size_index:,} bytes  ({size_index/1024:.0f} KB)  – server')
print(f'kemi1-flashcards.html {size_out:,} bytes ({size_out/1024:.0f} KB) – standalone')
print('Klar!')
