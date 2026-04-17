import sys
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)
with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()

ti = html.find('const THEORY = [')
section = html[ti:ti+50000]
close_pattern = '`\n  }\n];\n'
cp_idx = section.rfind(close_pattern)
print('Close pattern at offset:', cp_idx)
abs_end = ti + cp_idx + len(close_pattern)
print('Abs theory end:', abs_end)
print(repr(html[abs_end:abs_end+200]))
