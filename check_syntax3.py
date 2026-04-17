import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Check for ${} template expressions INSIDE the html content parts of THEORY
theory_start = content.find('const THEORY')
theory_end = content.find('\nconst CARDS', theory_start)
theory_section = content[theory_start:theory_end]

parts = theory_section.split('html: `')
print('Checking for ${} inside html content...')
for i, part in enumerate(parts[1:], 1):
    first_bt = part.find('`')
    html = part[:first_bt]
    dollar_exprs = re.findall(r'\$\{[^}]*\}', html)
    if dollar_exprs:
        print(f'Entry {i}: found ${len(dollar_exprs)} template expr(s): {dollar_exprs[:3]}')

# Check the improve_theory_flow additions - look for any problematic chars
# Specifically check the new sections added

# Check NEW_KB_INTRO region
idx = content.find('elektronegativitet')
ctx = content[idx-200:idx+500]
print('\nKB intro context:')
print(repr(ctx[:300]))

# Find what changed in Materia section
idx2 = content.find('kinetisk energi')
ctx2 = content[idx2-100:idx2+400]
print('\nMateria agg context:')
print(repr(ctx2[:300]))
