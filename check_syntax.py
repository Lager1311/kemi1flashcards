import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Check THEORY backticks
theory_start = content.find('const THEORY')
theory_end = content.find('\nconst CARDS', theory_start)
theory_section = content[theory_start:theory_end]

entries = theory_section.split('html: `')
print(f'Theory entries: {len(entries)-1}')
for i, entry in enumerate(entries[1:], 1):
    end = entry.find('`')
    html_content = entry[:end]
    if '`' in html_content:
        idx2 = html_content.find('`')
        print(f'PROBLEM entry {i}: unescaped backtick')
        print(repr(html_content[max(0,idx2-80):idx2+80]))

# Check CARDS array - missing commas between entries
cards_start = content.find('const CARDS')
cards_end = content.find('\nconst MNEMONICS', cards_start)
cards_section = content[cards_start:cards_end]
# Look for }{ without comma
bad = re.findall(r'\}[\s\n]+\{', cards_section)
print(f'Missing commas in CARDS: {len(bad)}')

# Check PROBLEMS array
prob_start = content.find('const PROBLEMS')
prob_end = content.find('\nconst THEORY', prob_start)
prob_section = content[prob_start:prob_end]
bad2 = re.findall(r'\}[\s\n]+\{', prob_section)
print(f'Missing commas in PROBLEMS: {len(bad2)}')

# Check MNEMONICS
mn_start = content.find('const MNEMONICS')
mn_end = content.find('\nconst PROBLEMS', mn_start)
mn_section = content[mn_start:mn_end]
# look for "123:" patterns - count entries
entries_mn = re.findall(r'\d+:"', mn_section)
print(f'Mnemonics entries: {len(entries_mn)}')

print('Done.')
