#!/usr/bin/env python3
"""
Diagnostic script: finds problems where step3 (last) or step2 (3rd)
does NOT contain a number within tol of ans.
"""

import re
import sys
import json
from collections import defaultdict

HTML_PATH = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html"
OUTPUT_PATH = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\steps_errors.txt"

# ---------------------------------------------------------------------------
# 1.  Extract the raw text of the PROBLEMS array from the HTML
# ---------------------------------------------------------------------------
with open(HTML_PATH, encoding="utf-8") as fh:
    html = fh.read()

# Find the PROBLEMS array: everything between "const PROBLEMS = [" and the
# matching closing "];" (we look for the first "];" after the opening bracket).
m = re.search(r'const PROBLEMS\s*=\s*\[', html)
if not m:
    sys.exit("ERROR: could not find 'const PROBLEMS = [' in the file")

start = m.end() - 1          # position of the opening '['
# Walk forward to find the balanced closing ']'
depth = 0
pos = start
while pos < len(html):
    ch = html[pos]
    if ch == '[':
        depth += 1
    elif ch == ']':
        depth -= 1
        if depth == 0:
            end = pos + 1  # include the ']'
            break
    pos += 1
else:
    sys.exit("ERROR: could not find the closing ']' of PROBLEMS")

raw_array = html[start:end]
print(f"Extracted PROBLEMS block: {len(raw_array):,} characters")

# ---------------------------------------------------------------------------
# 2.  Parse each problem object from the raw JS array
# ---------------------------------------------------------------------------
# Strategy: find each { id:NNN ... } block by tracking brace depth.
problems_raw = []
i = 0
while i < len(raw_array):
    if raw_array[i] == '{':
        depth = 0
        j = i
        while j < len(raw_array):
            if raw_array[j] == '{':
                depth += 1
            elif raw_array[j] == '}':
                depth -= 1
                if depth == 0:
                    problems_raw.append(raw_array[i:j+1])
                    i = j
                    break
            j += 1
    i += 1

print(f"Found {len(problems_raw)} problem objects")

# ---------------------------------------------------------------------------
# 3.  Parse id, ans, tol, unit, cat from each raw object, plus 4 steps
# ---------------------------------------------------------------------------
def extract_field_str(text, field):
    """Return the string value for a JS property like  field:'...' """
    # Match field:'...' allowing for escaped quotes inside
    pat = re.compile(
        r'\b' + re.escape(field) + r'\s*:\s*\'((?:[^\'\\]|\\.)*)\'',
        re.DOTALL
    )
    m = pat.search(text)
    return m.group(1) if m else None

def extract_field_num(text, field):
    """Return the numeric value for a JS property like  field:3.14  or field:-3.14 """
    pat = re.compile(r'\b' + re.escape(field) + r'\s*:\s*(-?[\d]+(?:[\.,][\d]+)?(?:[eE][+-]?\d+)?)')
    m = pat.search(text)
    if m:
        return float(m.group(1).replace(',', '.'))
    return None

def extract_steps(text):
    """
    Extract the steps array: steps:['...','...','...','...']
    Returns a list of raw step strings.
    """
    # Find 'steps:['  then collect everything until the matching ']'
    m = re.search(r'\bsteps\s*:\s*\[', text)
    if not m:
        return []
    bracket_start = m.end() - 1  # position of '['
    depth = 0
    pos = bracket_start
    while pos < len(text):
        if text[pos] == '[':
            depth += 1
        elif text[pos] == ']':
            depth -= 1
            if depth == 0:
                steps_block = text[bracket_start+1:pos]
                break
        pos += 1
    else:
        return []

    # Now split the block into individual step strings.
    # Steps are JS string literals delimited by single quotes.
    # We need to handle escaped quotes inside.
    steps = []
    si = 0
    while si < len(steps_block):
        if steps_block[si] == "'":
            # find closing quote
            sj = si + 1
            while sj < len(steps_block):
                if steps_block[sj] == '\\':
                    sj += 2  # skip escaped char
                    continue
                if steps_block[sj] == "'":
                    steps.append(steps_block[si+1:sj])
                    si = sj
                    break
                sj += 1
        si += 1
    return steps

# ---------------------------------------------------------------------------
# 4.  Helper: extract all numbers from a text string
# ---------------------------------------------------------------------------
def extract_numbers(text):
    """
    Extract all numeric values from a text.
    Handles:
      - European decimals with comma:  3,14   175,5
      - Standard decimals:             3.14   175.5
      - Scientific notation:           1,2×10²³  (convert ×10^exp)
      - Fractions like 1/5, 2/3 (skip, too ambiguous)
      - Percentages, units attached
    Returns list of floats.
    """
    results = []

    # 1. Scientific notation with × or * : e.g. 12,044×10²³  or 2,50×10⁻³
    # Unicode superscripts
    superscript_map = str.maketrans('⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻', '0123456789+-')
    def parse_superscript(s):
        return s.translate(superscript_map)

    sci_pat = re.compile(
        r'(-?[\d]+(?:[,\.][\d]+)?)\s*[×\*]\s*10([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻\+\-\d]+)'
    )
    for m in sci_pat.finditer(text):
        mantissa = float(m.group(1).replace(',', '.'))
        exp_raw = parse_superscript(m.group(2))
        # exp_raw might be like "+23", "-3", "23"
        try:
            exp = int(exp_raw)
            results.append(mantissa * (10 ** exp))
        except ValueError:
            pass

    # Remove the ×10^... parts so they don't get double-counted
    cleaned = sci_pat.sub(' ', text)

    # 2. Standard/European numbers (possibly negative)
    #    Match digits with optional comma or dot decimal separator
    #    Avoid matching lone exponents or date-like things
    num_pat = re.compile(r'(?<![×\d\w])(-?\d{1,9}(?:[,\.]\d+)?)(?![\d,\.×])')
    for m in num_pat.finditer(cleaned):
        raw = m.group(1).replace(',', '.')
        try:
            val = float(raw)
            # Filter out obviously wrong things:
            # - years (4-digit > 1000) unless ans is in that range
            # - very large integers that are atom counts, not answers
            results.append(val)
        except ValueError:
            pass

    return results

# ---------------------------------------------------------------------------
# 5.  Parse all problems
# ---------------------------------------------------------------------------
parsed = []
parse_errors = []

for raw in problems_raw:
    pid = extract_field_num(raw, 'id')
    if pid is None:
        # try int pattern
        m = re.search(r'\bid\s*:\s*(\d+)', raw)
        pid = int(m.group(1)) if m else None
    else:
        pid = int(pid)

    ans = extract_field_num(raw, 'ans')
    tol = extract_field_num(raw, 'tol')
    unit = extract_field_str(raw, 'unit')
    cat = extract_field_str(raw, 'cat')
    steps = extract_steps(raw)

    if pid is None or ans is None or tol is None:
        parse_errors.append(f"Parse error in: {raw[:120]}")
        continue

    parsed.append({
        'id': pid,
        'ans': ans,
        'tol': tol,
        'unit': unit or '',
        'cat': cat or 'unknown',
        'steps': steps,
        'raw': raw
    })

print(f"Successfully parsed: {len(parsed)} problems, errors: {len(parse_errors)}")

# ---------------------------------------------------------------------------
# 6.  Check each problem
# ---------------------------------------------------------------------------
def numbers_match_ans(nums, ans, tol):
    """Return (matched: bool, best_num or None)"""
    if not nums:
        return False, None
    # Find the number closest to ans
    best = min(nums, key=lambda x: abs(x - ans))
    if abs(best - ans) <= tol:
        return True, best
    return False, best

mismatches = []

for p in parsed:
    pid = p['id']
    ans = p['ans']
    tol = p['tol']
    steps = p['steps']

    if len(steps) < 4:
        mismatches.append({
            'id': pid, 'cat': p['cat'], 'ans': ans, 'tol': tol,
            'unit': p['unit'],
            'issue': f'Only {len(steps)} steps (expected 4)',
            'step3_nums': [], 'step3_best': None,
            'step2_nums': [], 'step2_best': None,
            'step3_text': steps[-1] if steps else '',
            'step2_text': steps[2] if len(steps) > 2 else '',
        })
        continue

    step3_text = steps[3]  # last step (0-indexed)
    step2_text = steps[2]  # 3rd step

    step3_nums = extract_numbers(step3_text)
    step2_nums = extract_numbers(step2_text)

    step3_ok, step3_best = numbers_match_ans(step3_nums, ans, tol)
    step2_ok, step2_best = numbers_match_ans(step2_nums, ans, tol)

    if not step3_ok:
        mismatches.append({
            'id': pid, 'cat': p['cat'], 'ans': ans, 'tol': tol,
            'unit': p['unit'],
            'issue': 'Step 4 (last) does not contain ans within tol',
            'step3_nums': step3_nums, 'step3_best': step3_best,
            'step2_nums': step2_nums, 'step2_best': step2_best,
            'step3_ok': step3_ok, 'step2_ok': step2_ok,
            'step3_text': step3_text,
            'step2_text': step2_text,
        })

print(f"Problems with mismatches: {len(mismatches)}")

# ---------------------------------------------------------------------------
# 7.  Write report
# ---------------------------------------------------------------------------
by_cat = defaultdict(list)
for m in mismatches:
    by_cat[m['cat']].append(m)

lines = []
lines.append("=" * 72)
lines.append("CHEMISTRY FLASHCARD STEP DIAGNOSTIC REPORT")
lines.append(f"File: {HTML_PATH}")
lines.append(f"Total problems parsed: {len(parsed)}")
lines.append(f"Problems with mismatches in step 4 (last step): {len(mismatches)}")
lines.append("=" * 72)
lines.append("")

for cat in sorted(by_cat.keys()):
    items = sorted(by_cat[cat], key=lambda x: x['id'])
    lines.append(f"{'─'*60}")
    lines.append(f"CATEGORY: {cat}  ({len(items)} mismatches)")
    lines.append(f"{'─'*60}")
    for p in items:
        lines.append(f"\n  ID {p['id']}  |  Expected ans={p['ans']} ± {p['tol']} {p['unit']}")
        lines.append(f"  Issue: {p['issue']}")
        # Step 4
        s3t = p['step3_text']
        s3n = p.get('step3_nums', [])
        s3b = p.get('step3_best')
        lines.append(f"  Step 4 text : {s3t}")
        if s3n:
            nums_str = ', '.join(f"{x:g}" for x in s3n[:15])
            lines.append(f"  Step 4 nums : [{nums_str}]")
            if s3b is not None:
                lines.append(f"  Step 4 closest: {s3b:g}  (diff={abs(s3b - p['ans']):g})")
        else:
            lines.append(f"  Step 4 nums : (none found)")
        # Step 3
        s2t = p['step2_text']
        s2n = p.get('step2_nums', [])
        s2b = p.get('step2_best')
        s2ok = p.get('step2_ok', False)
        lines.append(f"  Step 3 text : {s2t}")
        if s2n:
            nums_str2 = ', '.join(f"{x:g}" for x in s2n[:15])
            lines.append(f"  Step 3 nums : [{nums_str2}]")
            if s2b is not None:
                match_flag = "MATCH" if s2ok else f"diff={abs(s2b - p['ans']):g}"
                lines.append(f"  Step 3 closest: {s2b:g}  ({match_flag})")
        else:
            lines.append(f"  Step 3 nums : (none found)")
    lines.append("")

lines.append("=" * 72)
lines.append("SUMMARY BY CATEGORY")
lines.append("=" * 72)
for cat in sorted(by_cat.keys()):
    ids = sorted(x['id'] for x in by_cat[cat])
    lines.append(f"  {cat}: {len(ids)} mismatches — IDs: {ids}")
lines.append("")
lines.append(f"TOTAL MISMATCHES: {len(mismatches)}")

if parse_errors:
    lines.append("")
    lines.append("PARSE ERRORS:")
    for e in parse_errors:
        lines.append(f"  {e}")

report = "\n".join(lines)

with open(OUTPUT_PATH, "w", encoding="utf-8") as fh:
    fh.write(report)

print(f"\nReport written to: {OUTPUT_PATH}")
print("\n--- SUMMARY ---")
for cat in sorted(by_cat.keys()):
    ids = sorted(x['id'] for x in by_cat[cat])
    print(f"  {cat}: {ids}")
print(f"\nTotal mismatches: {len(mismatches)}")
