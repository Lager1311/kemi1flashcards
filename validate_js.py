import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

script_m = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
script = script_m.group(1)

problems_m = re.search(r'const PROBLEMS\s*=\s*\[(.*)\];', script, re.DOTALL)
if not problems_m:
    print('PROBLEMS array not found!')
    sys.exit(1)

problems_str = problems_m.group(1)
print(f'PROBLEMS string length: {len(problems_str)}')
steps_count = problems_str.count('steps:[')
print(f'steps:[ count: {steps_count}')

# Find all problem blocks (IDs are 3-4 digit numbers)
errors = []
problem_ids = list(re.finditer(r'id:(\d{3,4}),', problems_str))
print(f'Problems found: {len(problem_ids)}')

for idx, m in enumerate(problem_ids):
    pid = m.group(1)
    pos = m.start()

    if idx + 1 < len(problem_ids):
        block_end = problem_ids[idx + 1].start()
    else:
        block_end = pos + 3000
    block = problems_str[pos:block_end]

    si = block.find('steps:[')
    if si == -1:
        errors.append(f'id:{pid}: no steps found')
        continue

    steps_start = block.find('[', si + 6)
    if steps_start == -1:
        errors.append(f'id:{pid}: no [ after steps:')
        continue

    j = steps_start + 1
    depth = 1
    in_str = False
    str_char = None
    esc = False
    backslash = chr(92)

    while j < len(block) and depth > 0:
        ch = block[j]
        if esc:
            esc = False
        elif ch == backslash:
            esc = True
        elif in_str:
            if ch == str_char:
                in_str = False
        else:
            if ch in ("'", '"'):
                in_str = True
                str_char = ch
            elif ch == '[':
                depth += 1
            elif ch == ']':
                depth -= 1
        j += 1

    if depth != 0:
        errors.append(f'id:{pid}: unbalanced brackets in steps (depth={depth})')

    # Check step content length (should have 4 steps with real content)
    steps_content = block[si:j]
    step_count = steps_content.count("','")
    if step_count < 2:
        errors.append(f'id:{pid}: only {step_count+1} steps (expected 4)')

if errors:
    print(f'\nERRORS: {len(errors)}')
    for e in errors[:30]:
        print(f'  {e}')
else:
    print('\nAll 435 steps arrays balanced and have content!')

# Check for word-apostrophe-word (unescaped apostrophes in strings)
print('\nScanning for unescaped apostrophes in steps content...')
apos_issues = []
for m in re.finditer(r"\w'\w", problems_str):
    pos = m.start()
    # Find which problem this is in
    pid_search = problems_str[:pos].rfind('id:')
    pid_val = re.match(r'id:(\d+),', problems_str[pid_search:])
    ctx = problems_str[max(0,pos-20):pos+20]
    if pid_val:
        apos_issues.append(f'id:{pid_val.group(1)} pos:{pos}: {repr(ctx)}')
    else:
        apos_issues.append(f'pos:{pos}: {repr(ctx)}')

if apos_issues:
    print(f'Potential apostrophe issues: {len(apos_issues)}')
    for a in apos_issues[:10]:
        print(f'  {a}')
else:
    print('No word-apostrophe-word patterns found.')
