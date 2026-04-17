#!/usr/bin/env python3
import json, re

# Check all JSONL files for the most complete version of kemi1-flashcards.html
jsonl_files = [
    r'C:\Users\ad87599\.claude\projects\C--Users-ad87599-OneDrive---Stockholm-Kommun-Claude-code\990cd602-e051-4ca2-9483-9a55b4fbe674.jsonl',
    r'C:\Users\ad87599\.claude\projects\C--Users-ad87599-OneDrive---Stockholm-Kommun-Claude-code\7a20de0c-06d9-48f7-bbe5-fd8b2136bcad.jsonl',
]

best_html = ''
best_len = 0

def find_html_in_obj(node):
    if isinstance(node, str):
        if '<!DOCTYPE' in node and '</html>' in node and 'PROBLEMS' in node and 'initExercise' in node:
            return node
    elif isinstance(node, dict):
        for v in node.values():
            r = find_html_in_obj(v)
            if r: return r
    elif isinstance(node, list):
        full = '\n'.join(str(x) for x in node)
        if '<!DOCTYPE' in full and '</html>' in full and 'PROBLEMS' in full:
            return full
        for v in node:
            r = find_html_in_obj(v)
            if r: return r
    return None

for jsonl_path in jsonl_files:
    print(f'\nSearching {jsonl_path.split(chr(92))[-1]}...')
    try:
        with open(jsonl_path, encoding='utf-8', errors='replace') as f:
            for i, line in enumerate(f):
                if 'PROBLEMS' in line and 'initExercise' in line and len(line) > 50000:
                    try:
                        obj = json.loads(line.rstrip('\n'))
                        content = find_html_in_obj(obj)
                        if content and len(content) > best_len:
                            best_len = len(content)
                            best_html = content
                            print(f'  Found at line {i}: {len(content)} chars')
                    except:
                        pass
    except Exception as e:
        print(f'  Error: {e}')

print(f'\nBest HTML found: {best_len} chars')
if best_len > 100000:
    # Clean line numbers
    lines = best_html.split('\n')
    cleaned = []
    for line in lines:
        m = re.match(r'^\s*\d+\t(.*)', line)
        cleaned.append(m.group(1) if m else line)
    html = '\n'.join(cleaned)
    print('Cleaned:', len(html), 'chars')
    print('Has PROBLEMS:', 'const PROBLEMS' in html)
    print('Has initExercise:', 'initExercise' in html)
    print('Has loadState:', 'loadState();' in html)
    print('Ends with:', html[-80:])

    out = r'C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html'
    with open(out, 'w', encoding='utf-8') as f:
        f.write(html)
    print('Written!')
