import re, sys
sys.stdout.reconfigure(encoding='utf-8')
with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

check_ids = [303, 701, 802, 104, 403, 506, 602, 405, 1601, 1109]
for pid in check_ids:
    # Find problem block
    m = re.search(r'\bid:' + str(pid) + r',\s*lv:', content)
    if not m:
        print(f'id:{pid}: NOT FOUND')
        continue
    pos = m.start()
    # Get ans
    ans_m = re.search(r'ans:([-\d.e+]+)', content[pos:pos+300])
    ans = ans_m.group(1) if ans_m else '?'
    # Get steps
    si = content.find('steps:[', pos)
    if si == -1 or si > pos + 1000:
        print(f'id:{pid}: steps not found')
        continue
    # Extract steps content using bracket counting
    j = si + 7
    depth = 0; in_str = False; str_char = None; esc = False; bs = chr(92)
    while j < len(content):
        ch = content[j]
        if esc: esc = False
        elif ch == bs: esc = True
        elif in_str:
            if ch == str_char: in_str = False
        else:
            if ch in ("'", '"'): in_str = True; str_char = ch
            elif ch == '[': depth += 1
            elif ch == ']':
                if depth == 0: break
                depth -= 1
        j += 1
    steps_str = content[si+7:j]
    # Split steps by separator ',\' or ',' between strings
    # Simple: split on ','  then clean
    # Count commas between steps (not inside strings)
    step_texts = []
    cur = ''
    in_s = False; sc = None; es = False
    for ch in steps_str:
        if es: es = False; cur += ch
        elif ch == bs: es = True; cur += ch
        elif in_s:
            cur += ch
            if ch == sc: in_s = False
        else:
            if ch in ("'", '"'): in_s = True; sc = ch; cur += ch
            elif ch == ',':
                step_texts.append(cur.strip().strip("'"))
                cur = ''
            else:
                cur += ch
    if cur.strip():
        step_texts.append(cur.strip().strip("'"))

    print(f'id:{pid} (ans={ans}): {len(step_texts)} steps')
    for i, st in enumerate(step_texts):
        print(f'  [{i+1}] {st[:90]}')
    print()
