import sys, re
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)
with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()
ti = html.find('const THEORY = [')
fd = html.find('const FORMULAS_DATA')
section = html[ti:fd]
for m in re.finditer(r'\];\n', section):
    pos = m.start()
    ctx = section[max(0,pos-60):pos+5]
    if '`' in ctx or 'html' in ctx:
        print(f'offset {pos}, abs {ti+pos}: {repr(ctx)}')
