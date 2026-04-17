#!/usr/bin/env python3
import json, re

jsonl = r'C:\Users\ad87599\.claude\projects\C--Users-ad87599-OneDrive---Stockholm-Kommun-Claude-code\990cd602-e051-4ca2-9483-9a55b4fbe674.jsonl'

best_line = ''
best_len = 0

with open(jsonl, encoding='utf-8', errors='replace') as f:
    for line in f:
        if 'DOCTYPE' in line and 'kemi1' in line and len(line) > best_len:
            best_len = len(line)
            best_line = line.rstrip('\n')

print('Best line length:', best_len)

# Parse the JSON object
try:
    obj = json.loads(best_line)
    # Walk the object recursively to find the largest HTML content
    def find_html(node, depth=0):
        if isinstance(node, str):
            if '<!DOCTYPE' in node and '</html>' in node:
                return node
            if '<!DOCTYPE' in node:
                return node
        elif isinstance(node, dict):
            for v in node.values():
                r = find_html(v, depth+1)
                if r:
                    return r
        elif isinstance(node, list):
            # Might be line-by-line content
            full = '\n'.join(str(x) for x in node)
            if '<!DOCTYPE' in full:
                return full
            for v in node:
                r = find_html(v, depth+1)
                if r:
                    return r
        return None

    content = find_html(obj)
    if content:
        print('Found HTML content, length:', len(content))
        # Clean up line number prefixes (cat -n format: "  1\t..." or "   1\tline")
        lines = content.split('\n')
        cleaned = []
        for line in lines:
            # Remove leading line number + tab
            m = re.match(r'^\s*\d+\t(.*)', line)
            if m:
                cleaned.append(m.group(1))
            else:
                cleaned.append(line)
        html = '\n'.join(cleaned)
        print('Cleaned HTML length:', len(html))
        print('Starts with:', html[:60])
        print('Ends with:', html[-60:])
        out = r'C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html'
        with open(out, 'w', encoding='utf-8') as f:
            f.write(html)
        print('Written!')
    else:
        print('HTML content not found in parsed JSON')
        print('Keys:', list(obj.keys()) if isinstance(obj, dict) else type(obj))
except json.JSONDecodeError as e:
    print('JSON parse error:', e)
    print('Trying to find partial...')
    # The line might be too large or have issues
    # Try finding content differently
    idx = best_line.find('"content"')
    print('content field at:', idx)
