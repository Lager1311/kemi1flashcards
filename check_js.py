import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Find all <script> blocks
scripts = list(re.finditer(r'<script[^>]*>(.*?)</script>', content, re.DOTALL))
print(f'Script blocks: {len(scripts)}')
for i, s in enumerate(scripts):
    js = s.group(1)
    print(f'Script {i}: {len(js)} chars')

# Get the main script (largest)
main_js = max(scripts, key=lambda s: len(s.group(1))).group(1)
print(f'\nMain script: {len(main_js)} chars')

# Check for unclosed template literals by counting backticks
# outside of strings (very rough check)
bt_count = main_js.count('`')
print(f'Backticks in main script: {bt_count} ({"even - OK" if bt_count % 2 == 0 else "ODD - PROBLEM!"})')

# Find THEORY array boundaries
t_start = main_js.find('const THEORY')
t_end = main_js.find('\nconst CARDS', t_start)
theory_js = main_js[t_start:t_end]
bt_theory = theory_js.count('`')
print(f'Backticks in THEORY: {bt_theory} ({"even" if bt_theory % 2 == 0 else "ODD!"})')

# Find remaining JS (after THEORY, CARDS, etc.)
cards_start = main_js.find('const CARDS')
cards_end = main_js.find('\nconst MNEMONICS', cards_start)
cards_js = main_js[cards_start:cards_end]
bt_cards = cards_js.count('`')
print(f'Backticks in CARDS: {bt_cards} ({"even" if bt_cards % 2 == 0 else "ODD!"})')

# Check the PROBLEMS array for issues
prob_start = main_js.find('const PROBLEMS')
prob_end = main_js.find('\nconst THEORY', prob_start)
prob_js = main_js[prob_start:prob_end]
bt_prob = prob_js.count('`')
print(f'Backticks in PROBLEMS: {bt_prob} ({"even" if bt_prob % 2 == 0 else "ODD!"})')

# Look for ] }; or ];\n  { patterns that indicate missing commas
# between PROBLEMS entries
bad_in_problems = re.findall(r'\}\s*\n\s*\{', prob_js)
print(f'Potential missing commas in PROBLEMS: {len(bad_in_problems)}')
if bad_in_problems:
    for b in bad_in_problems[:3]:
        idx = prob_js.find(b)
        print(f'  at: {repr(prob_js[max(0,idx-100):idx+100])}')

# Check for unterminated strings by looking for patterns that break
# Find if there's a // comment or issues near end of PROBLEMS
print('\nLast 500 chars of PROBLEMS:')
print(repr(prob_js[-500:]))
