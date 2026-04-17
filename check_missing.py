import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Find the PROBLEMS array more carefully
# Find where it starts and where it ends
start_m = re.search(r'const PROBLEMS\s*=\s*\[', content)
if not start_m:
    print('PROBLEMS not found!')
    sys.exit(1)

start = start_m.end() - 1  # position of '['

# Find matching ']' (the array close)
i = start + 1
depth = 0
in_str = False
str_char = None
esc = False
backslash = chr(92)
while i < len(content):
    ch = content[i]
    if esc:
        esc = False
    elif ch == backslash:
        esc = True
    elif in_str:
        if ch == str_char:
            in_str = False
    else:
        if ch in ("'", '"', '`'):
            in_str = True
            str_char = ch
        elif ch == '[':
            depth += 1
        elif ch == ']':
            if depth == 0:
                break
            depth -= 1
    i += 1

end = i
problems_str = content[start+1:end]
print(f'PROBLEMS array: chars {start} to {end}, length {len(problems_str)}')

# Now find all problem IDs
all_ids = re.findall(r'\bid:(\d+),', problems_str)
print(f'Problem objects: {len(all_ids)}')

# Find problems with terse/missing steps
terse = []
no_steps = []
for m in re.finditer(r'\bid:(\d+),', problems_str):
    pid = int(m.group(1))
    pos = m.start()
    # Get block until next problem
    next_m = re.search(r'\bid:\d+,', problems_str[pos+1:])
    block_end = pos + 1 + next_m.start() if next_m else pos + 5000
    block = problems_str[pos:block_end]

    si = block.find('steps:[')
    if si == -1:
        no_steps.append(pid)
        continue

    # Count step separators
    step_seps = block[si:si+600].count("','")
    if step_seps < 2:
        terse.append((pid, step_seps + 1))

print(f'\nProblems with no steps field: {len(no_steps)}')
if no_steps:
    print(f'  First 20 IDs: {sorted(no_steps)[:20]}')
    print(f'  Last 20 IDs: {sorted(no_steps)[-20:]}')

print(f'\nProblems with < 3 steps: {len(terse)}')
if terse:
    print('  IDs with terse steps:')
    for pid, cnt in terse:
        print(f'    id:{pid} ({cnt} steps)')

# Check actual categories for terse/missing
print('\nLooking at a sample terse problem...')
if terse:
    pid = terse[0][0]
    m = re.search(r'\bid:' + str(pid) + r',', problems_str)
    if m:
        print(repr(problems_str[m.start():m.start()+200]))
