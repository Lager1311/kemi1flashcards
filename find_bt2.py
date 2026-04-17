import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

script_start = content.find('<script>')
script_end = content.rfind('</script>')
main_js = content[script_start+8:script_end]

# Find order of const declarations
consts = ['const CARDS', 'const MNEMONICS', 'const PROBLEMS', 'const THEORY']
for c in consts:
    idx = main_js.find(c)
    print(f'{c}: pos={idx}')

# THEORY is last - find its actual end
t_start = main_js.find('const THEORY')
# Find the closing ]; of THEORY
# It's a big array ending with ];
# Look for ];\n\n and take the first one after theory start
t_end_candidates = [m.start() for m in re.finditer(r'\];\s*\n', main_js[t_start:])]
print(f'\nPotential THEORY ends (relative): {t_end_candidates[:5]}')

# Actually find the closing ]; - THEORY ends with "];  \n" or "];\n"
# The entries look like: { cat: '...', icon: '...', html: `...` },
# The array ends with: ];
# Find the correct end
theory_section_raw = main_js[t_start:]
# Find end by counting brackets? Too complex.
# Find last occurrence of "` },\n];" or "`\n};\n" pattern
end_marker = re.search(r'`\s*\}\s*\n\];', theory_section_raw)
if end_marker:
    t_end_rel = end_marker.end()
    print(f'THEORY end at: {t_start + t_end_rel}')
    theory_js = main_js[t_start:t_start+t_end_rel]
else:
    print('Could not find THEORY end')
    # Try simpler: find ];\n\nfunction or ];\n\n//
    end2 = re.search(r'\];\s*\n\s*\n\s*(function|//|const|let|var)', theory_section_raw)
    if end2:
        t_end_rel = end2.start() + 2
        print(f'THEORY end (alt) at relative {t_end_rel}')
        theory_js = main_js[t_start:t_start+t_end_rel]
    else:
        theory_js = theory_section_raw[:5000]

bt_count = theory_js.count('`')
print(f'Backticks in THEORY: {bt_count} ({"ODD!" if bt_count%2 else "even - OK"})')
print(f'THEORY length: {len(theory_js)}')

# Now find which html entry has unmatched backtick
parts = theory_js.split('html: `')
print(f'Theory entries: {len(parts)-1}')
for i, part in enumerate(parts[1:], 1):
    first_bt = part.find('`')
    if first_bt == -1:
        print(f'Entry {i}: NO CLOSING BACKTICK - PROBLEM!')
        print('Start:', repr(part[:200]))
        continue
    html = part[:first_bt]
    inner = html.count('`')
    if inner > 0:
        print(f'Entry {i}: {inner} inner backtick(s)!')
        idx2 = html.find('`')
        print(repr(html[max(0,idx2-80):idx2+80]))
    # Check what comes after the closing backtick
    after = part[first_bt:first_bt+20]
    print(f'Entry {i}: len={len(html)}, after_bt={repr(after)}')
