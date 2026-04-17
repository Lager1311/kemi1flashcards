#!/usr/bin/env python3
import json, re

jsonl = r'C:\Users\ad87599\.claude\projects\C--Users-ad87599-OneDrive---Stockholm-Kommun-Claude-code\990cd602-e051-4ca2-9483-9a55b4fbe674.jsonl'

with open(jsonl, encoding='utf-8', errors='replace') as f:
    lines = list(f)

# Line 244 has CAT_INFO - let's extract it
target = 244
line = lines[target]
print(f'Line {target}: {len(line)} chars')
print(f'Has CAT_INFO: {"CAT_INFO" in line}')
print(f'Has PROBLEMS: {"const PROBLEMS" in line}')

try:
    obj = json.loads(line.rstrip('\n'))
    print('Parsed OK')

    def find_all_strings(node, min_len=1000):
        results = []
        def walk(n):
            if isinstance(n, str) and len(n) >= min_len:
                results.append(n)
            elif isinstance(n, dict):
                for v in n.values(): walk(v)
            elif isinstance(n, list):
                for v in n: walk(v)
                joined = '\n'.join(str(x) for x in n)
                if len(joined) >= min_len:
                    results.append(joined)
        walk(node)
        return results

    all_strings = find_all_strings(obj, 10000)
    print(f'Large strings found: {len(all_strings)}')
    for s in all_strings:
        has_dt = '<!DOCTYPE' in s
        has_prob = 'const PROBLEMS' in s
        has_cat = 'CAT_INFO' in s
        has_el = 'ELEMENTS_RAW' in s
        print(f'  len={len(s)}, DOCTYPE={has_dt}, PROBLEMS={has_prob}, CAT_INFO={has_cat}, ELEMENTS={has_el}')
        if has_prob and has_cat:
            # This is our target!
            # Clean line number prefixes
            lns = s.split('\n')
            cleaned = []
            for ln in lns:
                m = re.match(r'^\s*\d+\t(.*)', ln)
                cleaned.append(m.group(1) if m else ln)
            html = '\n'.join(cleaned)
            print(f'  -> Cleaned: {len(html)} chars')
            print(f'  -> Has loadState: {"loadState();" in html}')
            print(f'  -> Ends with: {repr(html[-50:])}')
            if len(html) > 100000 and 'loadState()' in html:
                out = r'C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html'
                with open(out, 'w', encoding='utf-8') as f:
                    f.write(html)
                print(f'  -> Written! {len(html)} chars')

except Exception as e:
    print(f'Parse error: {e}')
    # Raw extract
    idx = line.find('<!DOCTYPE')
    if idx >= 0:
        end = line.rfind('<\\/html>')
        raw = line[idx:end+8] if end > 0 else line[idx:idx+200000]
        html = raw.replace('\\/','/')
        html = html.replace('\\n','\n')
        html = html.replace('\\t','\t')
        html = html.replace('\\"','"')
        html = html.replace('\\\\','\\')
        lns = html.split('\n')
        cleaned = []
        for ln in lns:
            m = re.match(r'^\s*\d+\t(.*)', ln)
            cleaned.append(m.group(1) if m else ln)
        html = '\n'.join(cleaned)
        print(f'Raw extracted: {len(html)} chars')
        print(f'Has CAT_INFO: {"CAT_INFO" in html}')
        print(f'Ends: {repr(html[-80:])}')
        if 'CAT_INFO' in html and len(html) > 150000:
            out = r'C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html'
            with open(out, 'w', encoding='utf-8') as f:
                f.write(html)
            print('Written!')
