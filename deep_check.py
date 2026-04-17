import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

script_start = content.find('<script>')
script_end = content.rfind('</script>')
js = content[script_start+8:script_end]

# Find section boundaries
sections = {}
for name in ['const CARDS', 'const MNEMONICS', 'const PROBLEMS', 'const THEORY']:
    sections[name] = js.find(name)
    print(f'{name}: pos={sections[name]}')

# Check CARDS array end
cards_js = js[sections['const CARDS']:sections['const MNEMONICS']]
# Find the ];
end_marker = cards_js.rfind('];')
print(f'\nCARDS section length: {len(cards_js)}, ends at ]: {repr(cards_js[end_marker-20:end_marker+5])}')

# Check for missing commas: }  followed by { without comma
missing_commas = [(m.start(), m.group()) for m in re.finditer(r'\}\s*\n\s*\{', cards_js)]
print(f'Missing commas in CARDS: {len(missing_commas)}')
for pos, match in missing_commas[:3]:
    print(f'  pos {pos}: {repr(cards_js[max(0,pos-60):pos+60])}')

# Check MNEMONICS
mn_js = js[sections['const MNEMONICS']:sections['const PROBLEMS']]
end_mn = mn_js.rfind('};')
print(f'\nMNEMONICS section length: {len(mn_js)}')
# Check for syntax: all lines should be NUMBER:"string", or };
# Find any line that doesn't match
lines = mn_js.split('\n')
for i, line in enumerate(lines):
    stripped = line.strip()
    if stripped and not stripped.startswith('//') and not stripped.startswith('const') and not stripped == '};' and not stripped == '{':
        if not re.match(r'^\d+:"', stripped) and not re.match(r'^"', stripped) and not stripped.endswith(',') and stripped != '};':
            # Check if it's a continuation line (part of multi-line string)
            if not stripped.endswith('",') and not stripped.endswith('"'):
                pass  # might be continuation

# Check for unmatched quotes in MNEMONICS
# Count double quotes
dq = mn_js.count('"')
print(f'Double quotes in MNEMONICS: {dq} ({"even" if dq%2==0 else "ODD - PROBLEM!"})')

# Check the new mnemonics area
new_mn_start = mn_js.find('265:')
if new_mn_start != -1:
    print(f'\nNew mnemonics start at offset {new_mn_start}:')
    print(mn_js[new_mn_start:new_mn_start+500])

# Check for any unescaped special chars in new cards
new_cards_start = cards_js.find('// ── PPT-tillägg')
if new_cards_start != -1:
    new_cards = cards_js[new_cards_start:]
    dq2 = new_cards.count('"')
    print(f'\nNew PPT cards double quotes: {dq2} ({"even" if dq2%2==0 else "ODD!"})')
    # Check for backticks
    bt = new_cards.count('`')
    print(f'New PPT cards backticks: {bt} (should be 0)')
    # Check for unescaped single quotes
    # In JS object with double-quote strings, single quotes are fine
    # But check for actual syntax issues
    print('\nLast 200 chars of new cards:')
    print(repr(new_cards[-200:]))
