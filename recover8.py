#!/usr/bin/env python3
import json, re

jsonl = r'C:\Users\ad87599\.claude\projects\C--Users-ad87599-OneDrive---Stockholm-Kommun-Claude-code\990cd602-e051-4ca2-9483-9a55b4fbe674.jsonl'

with open(jsonl, encoding='utf-8', errors='replace') as f:
    lines = list(f)

print(f'Total: {len(lines)} lines')

# Check ALL lines - find any that contain PROBLEMS with 48 problems (mol, konc, gas, etc.)
all_cats = "cat:'mol'"
target_markers = ["cat:'stoik'", "cat:'elkem'", "cat:'jamvikt'"]

for i, line in enumerate(lines):
    has_all = all(m in line for m in target_markers)
    if has_all:
        print(f'Line {i}: {len(line)} chars - has all target cats!')
        try:
            obj = json.loads(line.rstrip('\n'))
            def find_strings(n, min_len=5000):
                r = []
                if isinstance(n, str) and len(n) >= min_len: r.append(n)
                elif isinstance(n, dict):
                    for v in n.values(): r.extend(find_strings(v, min_len))
                elif isinstance(n, list):
                    for v in n: r.extend(find_strings(v, min_len))
                    j = '\n'.join(str(x) for x in n)
                    if len(j) >= min_len: r.append(j)
                return r
            strings = find_strings(obj)
            for s in strings:
                if "cat:'stoik'" in s:
                    lns = s.split('\n')
                    cleaned = [re.sub(r'^\s*\d+\t', '', ln) for ln in lns]
                    html = '\n'.join(cleaned)
                    print(f'  String: {len(html)} chars, loadState={("loadState();" in html)}')
                    if len(html) > 10000:
                        # Check if it has PROBLEMS with all cats
                        print(f'  Has PROBLEMS: {"const PROBLEMS" in html}')
                        print(f'  Has CAT_INFO: {"CAT_INFO" in html}')
                        if 'loadState();' in html and 'CAT_INFO' in html:
                            out = r'C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html'
                            with open(out, 'w', encoding='utf-8') as f:
                                f.write(html)
                            print(f'  WRITTEN! {len(html)} chars')
        except Exception as e:
            print(f'  error: {e}')

# Also check lines 384+ (current session reads)
print('\nChecking lines 380+:')
for i in range(380, len(lines)):
    line = lines[i]
    if "cat:'stoik'" in line or 'stoik' in line:
        print(f'Line {i}: {len(line)} chars, stoik found')
