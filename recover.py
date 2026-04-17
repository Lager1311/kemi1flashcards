#!/usr/bin/env python3
import re

jsonl = r'C:\Users\ad87599\.claude\projects\C--Users-ad87599-OneDrive---Stockholm-Kommun-Claude-code\990cd602-e051-4ca2-9483-9a55b4fbe674.jsonl'

best = ''
best_len = 0

with open(jsonl, encoding='utf-8', errors='replace') as f:
    for line in f:
        if 'DOCTYPE' in line and 'kemi1' in line and len(line) > best_len:
            best_len = len(line)
            best = line

print('Best raw line length:', best_len)

idx = best.find('<!DOCTYPE')
end = best.rfind('<\\/html>')
if end >= 0:
    raw = best[idx:end + 8]  # include <\/html>
else:
    end = best.rfind('</html>')
    raw = best[idx:end + 7]

print('Raw extract length:', len(raw))

# Decode JSON string escapes manually
html = raw
html = html.replace('\\/','/')
html = html.replace('\\n', '\n')
html = html.replace('\\t', '\t')
html = html.replace('\\"', '"')
html = html.replace('\\\\', '\\')

print('Decoded length:', len(html))
print('Starts with:', html[:50])
print('Ends with:', html[-50:])

if '<!DOCTYPE' in html and '</html>' in html:
    out = r'C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html'
    with open(out, 'w', encoding='utf-8') as f:
        f.write(html)
    print('File written! Size:', len(html), 'chars')
else:
    print('HTML markers missing')
