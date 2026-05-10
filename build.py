"""
build.py – Kopierar src/main-template.html till index.html / kemi1-flashcards.html.
Kör: python build.py
"""
import os, shutil

base  = os.path.dirname(os.path.abspath(__file__))
src   = os.path.join(base, 'src', 'main-template.html')
out   = os.path.join(base, 'kemi1-flashcards.html')
index = os.path.join(base, 'index.html')

shutil.copy2(src, out)
shutil.copy2(src, index)

size = os.path.getsize(index)
print(f'Byggd: {out} + {index}')
print(f'Storlek: {size:,} bytes ({size/1024:.1f} KB)')
print('Klar!')
