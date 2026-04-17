import sys, re
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)
with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()
ti = html.find('const THEORY = [')
te = html.find('];\n\nlet theoryIdx', ti)
theory = html[ti:te+2]
bt_count = theory.count('`')
print(f'Backtick count in THEORY: {bt_count}')
dollar = theory.count('${')
print(f'Dollar-brace count: {dollar}')
# Split by html: ` to find sections
parts = theory.split('html: `')
print(f'Parts after split: {len(parts)}')
for i, part in enumerate(parts[1:], 1):
    closing = part.find('`')
    inner = part[:closing] if closing >= 0 else part
    extra_bt = inner.count('`')
    extra_dollar = inner.count('${')
    cat_match = re.search(r'cat: "([^"]+)"', parts[i-1][-200:])
    cat = cat_match.group(1) if cat_match else f'section {i}'
    print(f'  {cat}: closing at {closing}, inner backticks: {extra_bt}, inner ${{: {extra_dollar}')
    if extra_bt > 0 or extra_dollar > 0:
        for m in re.finditer(r'`|\${', inner):
            print(f'    Problem at {m.start()}: {repr(inner[max(0,m.start()-30):m.start()+30])}')
