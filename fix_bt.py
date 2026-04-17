import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

script_start = content.find('<script>')
script_end = content.rfind('</script>')
main_js = content[script_start+8:script_end]

t_start = main_js.find('const THEORY')
theory_section_raw = main_js[t_start:]

# Find entry 8 (Elektrokemi)
parts = theory_section_raw.split('html: `')
entry8 = parts[8]  # index 8 = entry 8 (0-indexed, parts[0] is before first html: `)

first_bt = entry8.find('`')
html_content = entry8[:first_bt]
after = entry8[first_bt:first_bt+30]
print(f'Entry 8 html length: {len(html_content)}')
print(f'After first bt: {repr(after)}')

# Show around the problematic backtick
print(f'\nContext around unescaped backtick:')
print(repr(html_content[max(0, first_bt-100):first_bt+20]))
print()
print(repr(html_content[-200:]))

# Find the actual position in the original content
theory_abs = content.find('const THEORY', content.find('<script>'))
# Find Elektrokemi entry
ek_idx = content.find("cat: 'Elektrokemi'")
html_start = content.find('html: `', ek_idx) + 7
first_bt_abs = content.find('`', html_start)
print(f'\nAbsolute position of unescaped backtick in file: {first_bt_abs}')
print(f'Context in file:')
print(repr(content[max(0, first_bt_abs-100):first_bt_abs+100]))
