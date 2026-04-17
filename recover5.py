#!/usr/bin/env python3
import json, re

# The Python script ran at lines 254/288 but the HTML was probably read AFTER that
# Let's scan ALL lines after 254 that are large and contain HTML
jsonl = r'C:\Users\ad87599\.claude\projects\C--Users-ad87599-OneDrive---Stockholm-Kommun-Claude-code\990cd602-e051-4ca2-9483-9a55b4fbe674.jsonl'

best_html = ''
best_len = 0

def extract_html(obj, min_len=100000):
    """Recursively find the longest HTML content in a JSON object"""
    candidates = []
    def walk(node):
        if isinstance(node, str) and len(node) > min_len:
            if '<!DOCTYPE' in node or 'PROBLEMS' in node:
                candidates.append(node)
        elif isinstance(node, dict):
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)
            # Also try joining list elements as lines
            if len(node) > 100:
                joined = '\n'.join(str(x) for x in node)
                if len(joined) > min_len and ('<!DOCTYPE' in joined or 'PROBLEMS' in joined):
                    candidates.append(joined)
    walk(obj)
    return max(candidates, key=len) if candidates else None

with open(jsonl, encoding='utf-8', errors='replace') as f:
    lines = list(f)

print(f'Total lines: {len(lines)}')

# Search lines after the Python script ran (after line 254)
for i in range(255, len(lines)):
    line = lines[i]
    if len(line) > 150000 and ('DOCTYPE' in line or 'PROBLEMS' in line):
        try:
            obj = json.loads(line.rstrip('\n'))
            content = extract_html(obj, min_len=50000)
            if content and len(content) > best_len:
                best_len = len(content)
                best_html = content
                print(f'Line {i}: {len(content)} chars')
        except Exception as e:
            # Try raw extraction
            idx = line.find('<!DOCTYPE')
            if idx >= 0:
                # Find the end
                end = line.rfind('<\\/html>')
                if end < 0:
                    end = line.rfind('</html>')
                if end > 0:
                    raw = line[idx:end+8]
                    if len(raw) > best_len:
                        best_len = len(raw)
                        best_html = raw
                        print(f'Line {i} (raw): {len(raw)} chars, error was: {e}')

print(f'\nBest found: {best_len} chars')
if best_html:
    # Clean up: decode JSON escapes
    html = best_html
    html = html.replace('\\/','/')
    html = html.replace('\\n', '\n')
    html = html.replace('\\t', '\t')
    html = html.replace('\\"', '"')
    html = html.replace('\\\\', '\\')

    # Clean line number prefixes
    lns = html.split('\n')
    cleaned = []
    for ln in lns:
        m = re.match(r'^\s*\d+\t(.*)', ln)
        cleaned.append(m.group(1) if m else ln)
    html = '\n'.join(cleaned)

    print('After cleaning:', len(html), 'chars')
    print('Has CAT_INFO:', 'CAT_INFO' in html)
    print('Has PROBLEMS (48 probs):', html.count("cat:'mol'") + html.count("cat:'konc'"))

    if len(html) > 160000:
        out = r'C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html'
        with open(out, 'w', encoding='utf-8') as f:
            f.write(html)
        print('Written!')
