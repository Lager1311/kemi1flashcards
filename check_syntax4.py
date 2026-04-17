import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Find THEORY section
theory_start = content.find('const THEORY')
theory_end = content.find('\nconst CARDS', theory_start)
theory_section = content[theory_start:theory_end]

# Find Kemisk bindning theory entry
kb_idx = theory_section.find("cat: 'Kemisk bindning'")
kb_html_start = theory_section.find('html: `', kb_idx) + 7
kb_html_end = theory_section.find('`', kb_html_start)
kb_html = theory_section[kb_html_start:kb_html_end]

print('KB html intro (first 500):')
print(repr(kb_html[:500]))
print()

# Check if NEW_KB_INTRO was actually applied
if 'elektronegativitet' in kb_html:
    print('NEW KB INTRO: found elektronegativitet - replacement worked')
else:
    print('NEW KB INTRO: NOT FOUND - replacement may have failed')

# Check Materia section
mat_idx = theory_section.find("cat: 'Materia & faser'")
mat_html_start = theory_section.find('html: `', mat_idx) + 7
mat_html_end = theory_section.find('`', mat_html_start)
mat_html = theory_section[mat_html_start:mat_html_end]
print()
print('Materia html intro (first 300):')
print(repr(mat_html[:300]))
if 'kinetisk energi' in mat_html:
    print('NEW MATERIA AGG: found')
else:
    print('NEW MATERIA AGG: NOT found')
    # Check what aggregation text looks like
    agg_idx = mat_html.find('aggregation')
    if agg_idx != -1:
        print('Aggregation context:', repr(mat_html[agg_idx:agg_idx+300]))
