#!/usr/bin/env python3
import json, re

jsonl = r'C:\Users\ad87599\.claude\projects\C--Users-ad87599-OneDrive---Stockholm-Kommun-Claude-code\990cd602-e051-4ca2-9483-9a55b4fbe674.jsonl'

target_lines = [216, 244]
results = {}

with open(jsonl, encoding='utf-8', errors='replace') as f:
    for i, line in enumerate(f):
        if i in target_lines:
            try:
                obj = json.loads(line.rstrip('\n'))
                def find_all_html(node, results_list):
                    if isinstance(node, str):
                        if '<!DOCTYPE' in node and 'PROBLEMS' in node:
                            results_list.append(node)
                    elif isinstance(node, dict):
                        for v in node.values():
                            find_all_html(v, results_list)
                    elif isinstance(node, list):
                        joined = '\n'.join(str(x) for x in node)
                        if '<!DOCTYPE' in joined and 'PROBLEMS' in joined:
                            results_list.append(joined)
                        for v in node:
                            find_all_html(v, results_list)

                found = []
                find_all_html(obj, found)
                if found:
                    best = max(found, key=len)
                    results[i] = best
                    print(f'Line {i}: found HTML {len(best)} chars')
            except Exception as e:
                print(f'Line {i}: error {e}')

# Use the longest one
if results:
    best_html = max(results.values(), key=len)
    print(f'\nBest: {len(best_html)} chars')

    # Clean line number prefixes
    lines = best_html.split('\n')
    cleaned = []
    for line in lines:
        m = re.match(r'^\s*\d+\t(.*)', line)
        cleaned.append(m.group(1) if m else line)
    html = '\n'.join(cleaned)

    print('Cleaned length:', len(html))
    print('Has PROBLEMS array:', 'const PROBLEMS = [' in html)
    # Check PROBLEMS size
    pi = html.find('const PROBLEMS = [')
    pe = html.find('];\n\nconst LEVEL_INFO', pi)
    if pi >= 0 and pe >= 0:
        print('PROBLEMS block size:', pe - pi, 'chars')
    print('Has initExercise:', 'function initExercise' in html)
    print('Has ELEMENTS_RAW:', 'ELEMENTS_RAW' in html)
    print('Has FORMULAS_DATA:', 'FORMULAS_DATA' in html)
    print('Has CAT_INFO:', 'CAT_INFO' in html)
    print('Last 100:', repr(html[-100:]))

    out = r'C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html'
    with open(out, 'w', encoding='utf-8') as f:
        f.write(html)
    print('\nWritten to file!')
