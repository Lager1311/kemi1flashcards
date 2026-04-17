import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

theory_start = content.find('const THEORY')
theory_end = content.find('\nconst CARDS', theory_start)
theory_section = content[theory_start:theory_end]

sb_idx = theory_section.find("cat: 'Syror & baser'")
sb_html_start = theory_section.find('html: `', sb_idx) + 7
sb_html_end = theory_section.find('`', sb_html_start)
sb_html = theory_section[sb_html_start:sb_html_end]

# Find pH section
ph_idx = sb_html.find('<h3>3. pH')
print('pH section (first 800):')
print(sb_html[ph_idx:ph_idx+800])
