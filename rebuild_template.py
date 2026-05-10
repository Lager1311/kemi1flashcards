"""
rebuild_template.py — rewrites src/main-template.html to be a slim HTML shell.
Run once: python rebuild_template.py
"""
import os, re

BASE = os.path.dirname(os.path.abspath(__file__))
SRC  = os.path.join(BASE, 'src')

with open(os.path.join(SRC, 'main-template.html'), 'r', encoding='utf-8') as f:
    lines = f.readlines()

def join(start, end):
    return ''.join(lines[start:end])

# HTML head (lines 1-10, 0-idx 0-9), minus the <style> line
head = join(0, 10).replace('<style>\n', '<link rel="stylesheet" href="src/styles.css">\n')

# HTML body (after </style> on line 2652, before <script> on line 3675)
# 0-indexed: 2651 = '</style>' line, 3674 = last line before <script>
body_html = join(2652, 3675)

# HTML between script1 and script2 (session summary, pomo, etc.)
# line 11813 to line 11858 (0-idx 11812-11857)
between_scripts_html = join(11813, 11858)

# INITIALIZATION block (file lines 11779–11811, 0-idx 11778–11810)
init_block = join(11778, 11811)

new_html = (
    head
    + '</head>\n'
    + '<body>\n'
    + body_html
    + '\n'
    + between_scripts_html
    + '\n'
    + '<!-- Data: loaded synchronously before logic -->\n'
    + '<script src="src/data/flashcards.js"></script>\n'
    + '<script src="src/problems.js"></script>\n'
    + '<script src="src/theory-questions.js"></script>\n'
    + '\n'
    + '<!-- Logic -->\n'
    + '<script src="src/js/storage.js"></script>\n'
    + '<script src="src/js/navigation.js"></script>\n'
    + '<script src="src/js/flashcards.js"></script>\n'
    + '<script src="src/js/quiz.js"></script>\n'
    + '<script src="src/js/calculator.js"></script>\n'
    + '<script src="src/js/theory.js"></script>\n'
    + '\n'
    + '<!-- Initialization -->\n'
    + '<script>\n'
    + init_block
    + '</script>\n'
    + '\n'
    + '</body>\n'
    + '</html>\n'
)

out = os.path.join(SRC, 'main-template.html')
with open(out, 'w', encoding='utf-8') as f:
    f.write(new_html)

size = os.path.getsize(out)
print(f'main-template.html rewritten: {size:,} bytes ({size/1024:.1f} KB)')
