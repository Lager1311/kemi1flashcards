import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

script_m = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
script = script_m.group(1)

# New code starts at pos 520553
orig = script[:520553]
new_code = script[520553:]

BACKSLASH = chr(92)

def count_structure(code, label):
    braces = parens = brackets = 0
    in_str = False; str_char = None; esc = False
    in_line_comment = False; in_block_comment = False
    issues = []
    i = 0
    while i < len(code):
        c = code[i]
        if in_line_comment:
            if c == '\n': in_line_comment = False
        elif in_block_comment:
            if c == '*' and code[i+1:i+2] == '/':
                in_block_comment = False; i += 1
        elif esc:
            esc = False
        elif in_str:
            if c == BACKSLASH: esc = True
            elif c == str_char: in_str = False
        else:
            if c == '/' and code[i+1:i+2] == '/': in_line_comment = True
            elif c == '/' and code[i+1:i+2] == '*': in_block_comment = True
            elif c in ('"', "'", '`'): in_str = True; str_char = c
            elif c == '{': braces += 1
            elif c == '}': braces -= 1
            elif c == '(': parens += 1
            elif c == ')': parens -= 1
            elif c == '[': brackets += 1
            elif c == ']': brackets -= 1
        i += 1
    print(f'{label}: braces={braces} parens={parens} brackets={brackets}')
    return braces, parens, brackets

b1, p1, br1 = count_structure(orig, 'Original code')
b2, p2, br2 = count_structure(new_code, 'New code')
print(f'TOTAL: braces={b1+b2} parens={p1+p2} brackets={br1+br2}')
