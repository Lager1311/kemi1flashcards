#!/usr/bin/env python3
import json, re

jsonl = r'C:\Users\ad87599\.claude\projects\C--Users-ad87599-OneDrive---Stockholm-Kommun-Claude-code\990cd602-e051-4ca2-9483-9a55b4fbe674.jsonl'

with open(jsonl, encoding='utf-8', errors='replace') as f:
    lines = list(f)

# Step 1: Get the best base HTML (165K version)
def find_best_html(line_str):
    try:
        obj = json.loads(line_str.rstrip('\n'))
        def find_strings(n, ml=50000):
            r = []
            if isinstance(n, str) and len(n) >= ml: r.append(n)
            elif isinstance(n, dict):
                for v in n.values(): r.extend(find_strings(v, ml))
            elif isinstance(n, list):
                for v in n: r.extend(find_strings(v, ml))
                j = '\n'.join(str(x) for x in n)
                if len(j) >= ml: r.append(j)
            return r
        strs = find_strings(obj)
        html_strs = [s for s in strs if '<!DOCTYPE' in s]
        return max(html_strs, key=len) if html_strs else None
    except:
        return None

# Best HTML base
best_base = None
for i, line in enumerate(lines):
    if len(line) > 150000 and 'DOCTYPE' in line:
        html = find_best_html(line)
        if html and 'ELEMENTS_RAW' in html:
            lns = html.split('\n')
            cleaned = [re.sub(r'^\s*\d+\t', '', ln) for ln in lns]
            html = '\n'.join(cleaned)
            if best_base is None or len(html) > len(best_base):
                best_base = html
                print(f'Base from line {i}: {len(html)} chars')

print(f'Best base: {len(best_base) if best_base else 0} chars')

# Step 2: Get the 48-problem PROBLEMS array from line 248
prob_line = lines[248]
try:
    obj = json.loads(prob_line.rstrip('\n'))
    def find_strings(n, ml=5000):
        r = []
        if isinstance(n, str) and len(n) >= ml: r.append(n)
        elif isinstance(n, dict):
            for v in n.values(): r.extend(find_strings(v, ml))
        elif isinstance(n, list):
            for v in n: r.extend(find_strings(v, ml))
            j = '\n'.join(str(x) for x in n)
            if len(j) >= ml: r.append(j)
        return r
    strs = find_strings(obj, 5000)
    problems_content = None
    for s in strs:
        if "cat:'stoik'" in s and "cat:'mol'" in s:
            lns = s.split('\n')
            cleaned = [re.sub(r'^\s*\d+\t', '', ln) for ln in lns]
            problems_content = '\n'.join(cleaned)
            print(f'PROBLEMS content: {len(problems_content)} chars')
            break
except Exception as e:
    print(f'Error getting PROBLEMS: {e}')
    problems_content = None

# Step 3: Combine - replace old PROBLEMS in base with new 48-problem version
if best_base and problems_content:
    # Find PROBLEMS array in base
    prob_start = best_base.find('const PROBLEMS = [')
    prob_end = best_base.find('];\n\nconst LEVEL_INFO', prob_start)
    if prob_start < 0 or prob_end < 0:
        # Try alternative ending
        prob_end = best_base.find('\n];\n\nlet _curLevel', prob_start)
        if prob_end < 0:
            prob_end = best_base.find('\n];', prob_start)
    print(f'PROBLEMS in base: {prob_start} to {prob_end}')
    print(f'Old PROBLEMS size: {prob_end - prob_start}')

    if prob_start > 0 and prob_end > 0:
        # Extract the 48-problem content (between [ and ])
        new_prob_start = problems_content.find('const PROBLEMS = [')
        new_prob_end = problems_content.rfind('];')
        if new_prob_start >= 0 and new_prob_end > 0:
            new_problems_block = problems_content[new_prob_start:new_prob_end+2]
            print(f'New PROBLEMS block: {len(new_problems_block)} chars')

            # Find the ending in the base
            rest_after = best_base[prob_end:]
            # rest_after starts with '];\n\n' or similar
            rest_start = rest_after.find('\n') + 1  # skip the '];
            # Actually just find where LEVEL_INFO starts
            level_info_idx = best_base.find('const LEVEL_INFO', prob_end)
            if level_info_idx < 0:
                level_info_idx = best_base.find('let _curLevel', prob_end)

            print(f'LEVEL_INFO at: {level_info_idx}')

            if level_info_idx > 0:
                combined = (
                    best_base[:prob_start] +
                    new_problems_block +
                    '\n\n' +
                    best_base[level_info_idx:]
                )
                print(f'Combined: {len(combined)} chars')
                print(f'Has CAT_INFO: {"CAT_INFO" in combined}')

                # If no CAT_INFO in base, add it
                if 'CAT_INFO' not in combined:
                    # Add CAT_INFO after LEVEL_INFO
                    cat_info = """
const CAT_INFO = {
  mol:     { icon:'\u2696\ufe0f',  label:'Mol & massa' },
  konc:    { icon:'\U0001f9ea',  label:'Koncentration' },
  gas:     { icon:'\U0001f4a8',  label:'Gaslagar' },
  termo:   { icon:'\U0001f321\ufe0f', label:'Termodynamik' },
  syrabas: { icon:'\u2697\ufe0f',  label:'Syra-bas' },
  jamvikt: { icon:'\U0001f504',  label:'J\u00e4mvikt' },
  elkem:   { icon:'\u26a1',  label:'Elektrokemi' },
  stoik:   { icon:'\U0001f522',  label:'St\u00f6kiometri' },
};
"""
                    # Find position after LEVEL_INFO block
                    li_end = combined.find('};', combined.find('const LEVEL_INFO'))
                    if li_end > 0:
                        combined = combined[:li_end+2] + cat_info + combined[li_end+2:]
                        print(f'CAT_INFO added: {len(combined)} chars')

                out = r'C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html'
                with open(out, 'w', encoding='utf-8') as f:
                    f.write(combined)
                print(f'Written! {len(combined)} chars')
