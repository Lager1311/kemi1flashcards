import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Get problem details for terse problems
terse_ids = [1606,1607,1608,1609,1610,1611,1612,1613,
             1701,1702,1703,1704,1705,1706,1707,1708,1710,1711,1712,1713]

for pid in terse_ids:
    m = re.search(r'\bid:' + str(pid) + r',', content)
    if m:
        block = content[m.start():m.start()+400]
        # Extract key fields
        cat_m = re.search(r"cat:'([^']+)'", block)
        title_m = re.search(r"title:'([^']+)'", block)
        steps_m = re.search(r'steps:\[([^\]]+)\]', block)
        cat = cat_m.group(1) if cat_m else '?'
        title = title_m.group(1) if title_m else '?'
        steps = steps_m.group(1)[:80] if steps_m else '?'
        print(f'id:{pid} cat:{cat} title:{title[:40]}')
        print(f'  steps: {steps}')
        print()
