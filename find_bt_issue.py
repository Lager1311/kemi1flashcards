import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Find THEORY section in JS
script_start = content.find('<script>')
script_end = content.rfind('</script>')
main_js = content[script_start+8:script_end]

t_start = main_js.find('const THEORY')
t_end = main_js.find('\nconst CARDS', t_start)
theory_js = main_js[t_start:t_end]

# Find all backtick positions
bt_positions = [m.start() for m in re.finditer('`', theory_js)]
print(f'Total backticks: {len(bt_positions)} ({"ODD!" if len(bt_positions) % 2 else "even"})')

# Show each backtick with context to identify the odd one
for i, pos in enumerate(bt_positions):
    ctx = theory_js[max(0, pos-30):pos+30]
    print(f'BT {i+1:3d} pos={pos:6d}: {repr(ctx)}')
