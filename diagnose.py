import sys, re, json
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()

print("=== FILE STATS ===")
print(f"Total chars: {len(html)}")

# Check all const declarations order
consts = []
for m in re.finditer(r'const (\w+)\s*=', html):
    consts.append((m.start(), m.group(1)))
print("\n=== CONST DECLARATIONS (first 20) ===")
for pos, name in consts[:20]:
    line = html[:pos].count('\n') + 1
    print(f"  line {line}: const {name}")

# Check for any JS syntax issues - unmatched brackets in CARDS
ci = html.find('const CARDS')
cp = html.find('const PROBLEMS', ci)
cards_raw = html[ci:cp]
# Count { and }
opens = cards_raw.count('{')
closes = cards_raw.count('}')
print(f"\n=== CARDS ===")
print(f"  {{ count: {opens}, }} count: {closes}, balance: {opens-closes}")

# Check PROBLEMS
pi = html.find('const PROBLEMS')
pe_m = re.search(r'\];\s*\n\s*\nconst ', html[pi:])
pe = pi + pe_m.start() + 2 if pe_m else -1
problems_raw = html[pi:pe]
opens = problems_raw.count('{')
closes = problems_raw.count('}')
probs = re.findall(r'{ id:(\d+)', problems_raw)
print(f"\n=== PROBLEMS ===")
print(f"  count: {len(probs)}, {{ count: {opens}, }} count: {closes}, balance: {opens-closes}")

# Check CLOZE_DATA
czi = html.find('const CLOZE_DATA')
if czi > 0:
    cze_m = re.search(r'\];\s*\n\s*\nconst |</script>', html[czi:])
    cze = czi + cze_m.start() + 2 if cze_m else -1
    cloze_raw = html[czi:cze]
    cloze_items = re.findall(r'{id:', cloze_raw)
    print(f"\n=== CLOZE_DATA ===")
    print(f"  count: {len(cloze_items)}")
else:
    print("\nNo CLOZE_DATA found")

# Check for missing 'cat' fields in CARDS
print("\n=== CHECKING CARD cat FIELDS ===")
card_entries = re.findall(r'\{ id:(\d+),\s*cat:"([^"]*)"', cards_raw)
print(f"  Cards with cat field: {len(card_entries)}")
total_cards = re.findall(r'\{ id:\d+', cards_raw)
print(f"  Total card entries: {len(total_cards)}")
if len(card_entries) != len(total_cards):
    print("  WARNING: Some cards may be missing cat!")

# Check for themeBtn in HTML
print("\n=== CHECKING KEY HTML ELEMENTS ===")
for elem_id in ['themeBtn', 'categoryGrid', 'totalCards', 'startBtn', 'exerciseScreen', 'exRaknaBtn']:
    if f'id="{elem_id}"' in html or f"id='{elem_id}'" in html:
        print(f"  {elem_id}: FOUND")
    else:
        print(f"  {elem_id}: MISSING!")

# Check the exercise screen
ex_idx = html.find('id="exerciseScreen"')
if ex_idx > 0:
    print(f"\n=== EXERCISE SCREEN at char {ex_idx} ===")
    print(html[ex_idx:ex_idx+300])
