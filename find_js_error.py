import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

script_m = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
script = script_m.group(1)
new_code = script[520553:]

BACKSLASH = chr(92)
issues = []

# Scan for newlines inside single/double quoted strings (not template literals)
i = 0
in_str = False
str_char = None
str_start = 0
esc = False
in_line_comment = False
in_block_comment = False

while i < len(new_code):
    c = new_code[i]

    if in_line_comment:
        if c == '\n': in_line_comment = False
    elif in_block_comment:
        if c == '*' and new_code[i+1:i+2] == '/':
            in_block_comment = False; i += 1
    elif esc:
        esc = False
    elif in_str:
        if c == BACKSLASH:
            esc = True
        elif c == '\n' and str_char != '`':
            # Newline inside non-template string - invalid!
            ctx = new_code[max(0, str_start-20):i+20]
            issues.append(f'NEWLINE IN STRING at pos {520553+i}: {repr(ctx[:100])}')
        elif c == str_char:
            in_str = False
    else:
        if c == '/' and new_code[i+1:i+2] == '/':
            in_line_comment = True
        elif c == '/' and new_code[i+1:i+2] == '*':
            in_block_comment = True
        elif c in ('"', "'", '`'):
            in_str = True
            str_char = c
            str_start = i
    i += 1

if issues:
    print(f'Found {len(issues)} issues:')
    for iss in issues[:10]:
        print(iss)
else:
    print('No newline-in-string issues found.')

# Also check for any 'use strict' violations - octal literals
octals = list(re.finditer(r"'0[0-7]+\b", new_code))
print(f'Potential octal literals: {len(octals)}')

# Check for zero-width or unusual Unicode chars that JS doesn't allow
bad_chars = []
for idx, ch in enumerate(new_code):
    code_pt = ord(ch)
    # Zero-width, BOM, or other problematic chars
    if code_pt in (0xFEFF, 0x200B, 0x200C, 0x200D, 0x2028, 0x2029):
        ctx = new_code[max(0,idx-20):idx+20]
        bad_chars.append(f'U+{code_pt:04X} at pos {idx}: {repr(ctx)}')

print(f'Problematic Unicode chars: {len(bad_chars)}')
for b in bad_chars[:5]:
    print(b)
