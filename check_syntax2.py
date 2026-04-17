import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Check THEORY section for unescaped backticks INSIDE html content
theory_start = content.find('const THEORY')
theory_end = content.find('\nconst CARDS', theory_start)
theory_section = content[theory_start:theory_end]

# Split on html: ` to get each entry's html content
parts = theory_section.split('html: `')
print(f'Theory parts: {len(parts)-1}')

for i, part in enumerate(parts[1:], 1):
    # Find closing backtick (the one that ends the template literal)
    # It should be followed by \n  },  or \n];
    # Simple approach: find first backtick
    first_bt = part.find('`')
    if first_bt == -1:
        print(f'Entry {i}: NO CLOSING BACKTICK!')
        continue
    html = part[:first_bt]
    # Check if there are any backticks inside
    inner_bt = [m.start() for m in re.finditer('`', html)]
    if inner_bt:
        print(f'Entry {i}: {len(inner_bt)} unescaped backtick(s) inside html!')
        for pos in inner_bt[:3]:
            print(f'  pos {pos}: {repr(html[max(0,pos-60):pos+60])}')
    else:
        print(f'Entry {i}: OK (len={len(html)})')

# Also check for </script> inside theory sections which would break HTML parsing
if '</script>' in theory_section:
    idx = theory_section.find('</script>')
    print(f'WARNING: </script> found in THEORY at offset {idx}')
    print(repr(theory_section[max(0,idx-100):idx+100]))

# Check for ${} template expressions that might be unintentional
dollar_exprs = re.findall(r'\$\{[^}]+\}', theory_section)
print(f'Template expressions in THEORY: {len(dollar_exprs)}')
for e in dollar_exprs[:5]:
    print(' ', repr(e))

print('Done.')
