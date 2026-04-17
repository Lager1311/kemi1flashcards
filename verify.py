import sys, re
from collections import Counter
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)
with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()
pi = html.find('const PROBLEMS')
m = re.search(r'\];\n\nconst CLOZE_DATA', html[pi:])
probs = html[pi:pi+m.start()]
ids = re.findall(r'id:(\d+)', probs)
cats = re.findall(r"cat:'([^']+)'", probs)
lvs = re.findall(r'lv:(\d)', probs)
print(f'Total problems: {len(ids)}')
print(f'Per category: {Counter(cats)}')
print(f'Per level: {Counter(lvs)}')
ti = html.find('const THEORY = [')
te = html.find('];\n\nlet theoryIdx', ti)
bt = html[ti:te].count('`')
print(f'THEORY backticks: {bt} (even={bt%2==0})')
print(f'File size: {len(html)} chars / {len(html.encode("utf-8"))//1024} KB')
# check double ]];
double_close = html.count(']];\n\nlet theoryIdx')
print(f'Double ]]: {double_close} (should be 0)')
