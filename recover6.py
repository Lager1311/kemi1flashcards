#!/usr/bin/env python3
import json, re

# Current session is writing to 990cd602 JSONL - check recent lines
jsonl = r'C:\Users\ad87599\.claude\projects\C--Users-ad87599-OneDrive---Stockholm-Kommun-Claude-code\990cd602-e051-4ca2-9483-9a55b4fbe674.jsonl'

best_html = ''
best_len = 0

def extract_html(obj, min_len=50000):
    candidates = []
    def walk(node):
        if isinstance(node, str) and len(node) > min_len:
            candidates.append(node)
        elif isinstance(node, dict):
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)
            if len(node) > 50:
                joined = '\n'.join(str(x) for x in node)
                if len(joined) > min_len:
                    candidates.append(joined)
    walk(obj)
    return max(candidates, key=len) if candidates else None

with open(jsonl, encoding='utf-8', errors='replace') as f:
    lines = list(f)

print(f'Total lines: {len(lines)}')
print('Checking last 200 lines for large HTML content...')

for i in range(max(0, len(lines)-200), len(lines)):
    line = lines[i]
    # Look for content with PROBLEMS cat:'mol' indicating 48-problem version
    if ("cat:'mol'" in line or "cat:\"mol\"" in line) and len(line) > 10000:
        print(f'Line {i}: {len(line)} chars - has mol cat')
        try:
            obj = json.loads(line.rstrip('\n'))
            content = extract_html(obj, 5000)
            if content:
                print(f'  -> content {len(content)} chars')
                if len(content) > best_len:
                    best_len = len(content)
                    best_html = content
        except Exception as e:
            # Raw extract
            if "cat:'mol'" in line:
                print(f'  -> parse error: {e}, line snippet: {line[:100]}')

print(f'\nBest: {best_len}')

# Also check ALL large lines (>100K) in the whole file
print('\nAll lines > 100K chars:')
for i, line in enumerate(lines):
    if len(line) > 100000:
        has_mol = "cat:'mol'" in line or 'cat:"mol"' in line
        has_cat_info = 'CAT_INFO' in line
        print(f'  Line {i}: {len(line)} chars, mol={has_mol}, CAT_INFO={has_cat_info}')
