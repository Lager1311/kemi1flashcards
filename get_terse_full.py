import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

terse_ids = [1606,1607,1608,1609,1610,1611,1612,1613,
             1701,1702,1703,1704,1705,1706,1707,1708,1710,1711,1712,1713]

for pid in terse_ids:
    m = re.search(r'\bid:' + str(pid) + r',', content)
    if m:
        block = content[m.start():m.start()+600]
        print(f'=== id:{pid} ===')
        print(repr(block[:500]))
        print()
