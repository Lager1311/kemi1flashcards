#!/usr/bin/env python3
"""Investigate the 18 parse errors and a sample of mismatches."""
import re

HTML_PATH = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html"

with open(HTML_PATH, encoding="utf-8") as fh:
    html = fh.read()

m = re.search(r'const PROBLEMS\s*=\s*\[', html)
start = m.end() - 1
depth = 0; pos = start
while pos < len(html):
    ch = html[pos]
    if ch == '[': depth += 1
    elif ch == ']':
        depth -= 1
        if depth == 0: end = pos + 1; break
    pos += 1
raw_array = html[start:end]

problems_raw = []
i = 0
while i < len(raw_array):
    if raw_array[i] == '{':
        depth = 0; j = i
        while j < len(raw_array):
            if raw_array[j] == '{': depth += 1
            elif raw_array[j] == '}':
                depth -= 1
                if depth == 0:
                    problems_raw.append(raw_array[i:j+1])
                    i = j; break
            j += 1
    i += 1

print(f"Total raw objects: {len(problems_raw)}")

errors = []
ok = []
for raw in problems_raw:
    pid_m = re.search(r'\bid\s*:\s*(\d+)', raw)
    pid = int(pid_m.group(1)) if pid_m else None
    ans_m = re.search(r'\bans\s*:\s*(-?[\d]+(?:[,\.][\d]+)?(?:[eE][+-]?\d+)?)', raw)
    ans = float(ans_m.group(1)) if ans_m else None
    tol_m = re.search(r'\btol\s*:\s*(-?[\d]+(?:[,\.][\d]+)?(?:[eE][+-]?\d+)?)', raw)
    tol = float(tol_m.group(1)) if tol_m else None
    if pid is None or ans is None or tol is None:
        errors.append({'pid': pid, 'ans': ans, 'tol': tol, 'raw': raw})
    else:
        ok.append({'pid': pid, 'ans': ans, 'tol': tol, 'raw': raw})

print(f"\n=== PARSE ERRORS ({len(errors)}) ===")
for e in errors:
    print(f"\n  id={e['pid']} ans={e['ans']} tol={e['tol']}")
    # Show the id/ans/tol lines
    snippet = e['raw'][:500].replace('\n', ' ')
    print(f"  snippet: {snippet}")
