"""
build.py  –  Sätter ihop kemi1-flashcards.html från källfilerna i src/
Kör:  python build.py
"""
import os, sys

base = os.path.dirname(os.path.abspath(__file__))
src  = os.path.join(base, 'src')

template_path = os.path.join(src, 'main-template.html')
tq_path       = os.path.join(src, 'theory-questions.js')
prob_path     = os.path.join(src, 'problems.js')
out_path      = os.path.join(base, 'kemi1-flashcards.html')
index_path    = os.path.join(base, 'index.html')

def read(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

template   = read(template_path)
tq_text    = read(tq_path).rstrip('\n')
prob_text  = read(prob_path).rstrip('\n')

# Ersätt platshållare
if '/* @@PROBLEMS@@ */' not in template:
    print('FEL: Platshållare @@PROBLEMS@@ saknas i mallen!')
    sys.exit(1)
if '/* @@THEORY_QUESTIONS@@ */' not in template:
    print('FEL: Platshållare @@THEORY_QUESTIONS@@ saknas i mallen!')
    sys.exit(1)

result = template.replace('/* @@PROBLEMS@@ */',          prob_text)
result = result.replace('/* @@THEORY_QUESTIONS@@ */', tq_text)

with open(out_path, 'w', encoding='utf-8') as f:
    f.write(result)
with open(index_path, 'w', encoding='utf-8') as f:
    f.write(result)

print(f'Byggd: {out_path} + {index_path}')
print(f'Storlek: {len(result):,} tecken')
print('Klar!')
