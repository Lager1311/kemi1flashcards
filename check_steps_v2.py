#!/usr/bin/env python3
"""
Diagnostic script v2: finds chemistry flashcard problems where
step 3 (Berakna) or step 4 (Svar) do NOT contain a number within tol of ans.

Improvements over v1:
- Handles Swedish thousands separator (space): "193 000" -> 193000
- Handles negative numbers prefixed with minus sign in text "−212" -> -212
- Handles ×10^N notation better (extracts final result)
- Classifies issues by likely root cause
"""

import re
import sys
from collections import defaultdict

HTML_PATH = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html"
OUTPUT_PATH = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\steps_errors.txt"

# ---------------------------------------------------------------------------
# 1.  Extract raw PROBLEMS array
# ---------------------------------------------------------------------------
with open(HTML_PATH, encoding="utf-8") as fh:
    html = fh.read()

m = re.search(r'const PROBLEMS\s*=\s*\[', html)
if not m:
    sys.exit("ERROR: could not find 'const PROBLEMS = [' in the file")

start = m.end() - 1
depth = 0; pos = start
while pos < len(html):
    ch = html[pos]
    if ch == '[': depth += 1
    elif ch == ']':
        depth -= 1
        if depth == 0: end = pos + 1; break
    pos += 1
else:
    sys.exit("ERROR: could not find closing ']'")

raw_array = html[start:end]

# ---------------------------------------------------------------------------
# 2.  Split into individual problem objects
# ---------------------------------------------------------------------------
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

print(f"Found {len(problems_raw)} problem objects")

# ---------------------------------------------------------------------------
# 3.  Parsers
# ---------------------------------------------------------------------------
def extract_field_num(text, field):
    pat = re.compile(r'\b' + re.escape(field) + r'\s*:\s*(-?[\d]+(?:[\.,][\d]+)?(?:[eE][+-]?\d+)?)')
    m = pat.search(text)
    if m:
        return float(m.group(1).replace(',', '.'))
    return None

def extract_field_str(text, field):
    pat = re.compile(r'\b' + re.escape(field) + r"\s*:\s*'((?:[^'\\]|\\.)*)'", re.DOTALL)
    m = pat.search(text)
    return m.group(1) if m else None

def extract_steps(text):
    m = re.search(r'\bsteps\s*:\s*\[', text)
    if not m:
        return []
    bracket_start = m.end() - 1
    depth = 0; pos = bracket_start
    while pos < len(text):
        if text[pos] == '[': depth += 1
        elif text[pos] == ']':
            depth -= 1
            if depth == 0:
                steps_block = text[bracket_start+1:pos]
                break
        pos += 1
    else:
        return []
    steps = []
    si = 0
    while si < len(steps_block):
        if steps_block[si] == "'":
            sj = si + 1
            while sj < len(steps_block):
                if steps_block[sj] == '\\':
                    sj += 2
                    continue
                if steps_block[sj] == "'":
                    steps.append(steps_block[si+1:sj])
                    si = sj
                    break
                sj += 1
        si += 1
    return steps

# ---------------------------------------------------------------------------
# 4.  Comprehensive number extractor
# ---------------------------------------------------------------------------
SUPERSCRIPT_MAP = str.maketrans('⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻', '0123456789+-')

def parse_superscript(s):
    return s.translate(SUPERSCRIPT_MAP)

def extract_numbers(text):
    """
    Extract all numeric values from a chemistry step text.
    Returns sorted list of unique floats (deduped to 6 sig figs).
    Handles:
      - European decimals with comma: 3,14  175,5
      - Standard decimals: 3.14  175.5
      - Swedish space thousands: 193 000  1 234,5
      - Scientific with ×10 and Unicode superscripts: 1,34×10⁻⁵
      - Negative numbers with Unicode minus (−) or hyphen (-)
      - Standard scientific notation: 1.34e-5
    """
    results = set()

    # Normalize Unicode minus sign to ASCII hyphen for easier processing
    text = text.replace('\u2212', '-')  # − -> -

    # 1. Scientific notation with × or * and Unicode/ASCII superscripts
    # e.g. 1,34×10⁻⁵  or  2,50×10-3
    sci_pat = re.compile(
        r'(-?[\d]+(?:[,\.][\d]+)?)\s*[×\*xX]\s*10([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻\+\-]?\d*[⁰¹²³⁴⁵⁶⁷⁸⁹]*)'
    )
    sci_positions = set()
    for m in sci_pat.finditer(text):
        mantissa_str = m.group(1).replace(',', '.')
        exp_raw = parse_superscript(m.group(2))
        try:
            mantissa = float(mantissa_str)
            exp = int(exp_raw) if exp_raw and exp_raw not in ('+', '-', '') else 0
            results.add(mantissa * (10 ** exp))
            # Track positions to avoid double-counting
            sci_positions.add(m.start())
            sci_positions.add(m.end() - 1)
        except (ValueError, OverflowError):
            pass

    # 2. Standard scientific notation: 1.34e-5  or  1,34E+3
    std_sci_pat = re.compile(r'(-?[\d]+(?:[,\.][\d]+)?)[eE]([+-]?\d+)')
    for m in std_sci_pat.finditer(text):
        try:
            val = float(m.group(1).replace(',', '.')) * (10 ** int(m.group(2)))
            results.add(val)
        except (ValueError, OverflowError):
            pass

    # 3. Swedish space-thousands separator: "193 000" or "1 234,5"
    # Must be: digit{1,3} SPACE digit{3} optionally more
    space_thou_pat = re.compile(r'(-?\d{1,3}(?: \d{3})+(?:[,\.]\d+)?)')
    for m in space_thou_pat.finditer(text):
        raw = m.group(1).replace(' ', '').replace(',', '.')
        try:
            results.add(float(raw))
        except ValueError:
            pass

    # 4. Regular numbers (after removing sci-notation constructs to avoid partial matches)
    cleaned = sci_pat.sub(' SCINOTATION ', text)
    cleaned = std_sci_pat.sub(' SCINOTATION ', cleaned)
    cleaned = space_thou_pat.sub(' SPACENUM ', cleaned)

    # Match: optional negative sign, digits, optional decimal (comma or dot)
    num_pat = re.compile(r'(?<![a-zA-Z\d])(-?\d+(?:[,\.]\d+)?)(?![a-zA-Z\d])')
    for m in num_pat.finditer(cleaned):
        raw = m.group(1).replace(',', '.')
        try:
            val = float(raw)
            # Skip obvious non-numeric artefacts
            results.add(val)
        except ValueError:
            pass

    return sorted(results)

def numbers_match_ans(nums, ans, tol):
    if not nums:
        return False, None
    best = min(nums, key=lambda x: abs(x - ans))
    if abs(best - ans) <= tol:
        return True, best
    return False, best

# ---------------------------------------------------------------------------
# 5.  Parse all problems and check
# ---------------------------------------------------------------------------
parsed = []
skipped_ids = []

for raw in problems_raw:
    pid_m = re.search(r'\bid\s*:\s*(\d+)', raw)
    pid = int(pid_m.group(1)) if pid_m else None

    # Skip "balance" type problems (no ans/tol)
    type_m = re.search(r"\btype\s*:\s*'([^']+)'", raw)
    if type_m and type_m.group(1) == 'balance':
        skipped_ids.append(pid)
        continue

    ans = extract_field_num(raw, 'ans')
    tol = extract_field_num(raw, 'tol')
    unit = extract_field_str(raw, 'unit')
    cat = extract_field_str(raw, 'cat')
    steps = extract_steps(raw)

    if pid is None or ans is None or tol is None:
        skipped_ids.append(pid)
        continue

    parsed.append({
        'id': pid,
        'ans': ans,
        'tol': tol,
        'unit': unit or '',
        'cat': cat or 'unknown',
        'steps': steps,
    })

print(f"Parsed: {len(parsed)} calculation problems, skipped: {len(skipped_ids)}")

# ---------------------------------------------------------------------------
# 6.  Mismatch detection with classification
# ---------------------------------------------------------------------------
mismatches = []

def classify_issue(p, step4_ok, step3_ok, step4_nums, step4_best, step3_nums, step3_best,
                   step4_text, step3_text, only3steps):
    """Determine the most likely root cause of the mismatch."""
    ans = p['ans']
    tol = p['tol']

    if only3steps:
        return 'WRONG_STEPS_CONTENT'  # step text is copy-pasted in only 3 steps

    # Step 4 contains the answer but it's in step 3 (answer in wrong step)
    if not step4_ok and step3_ok:
        return 'ANSWER_ONLY_IN_STEP3'

    # Step 4 has a number close-ish but wrong sign (negative not captured)
    if step4_best is not None and abs(abs(step4_best) - abs(ans)) <= tol:
        return 'SIGN_MISMATCH'

    # Both steps wrong — likely the steps contain a completely different problem
    if not step4_ok and not step3_ok:
        # Is there a number in step4 that's the ans of a DIFFERENT scenario?
        return 'WRONG_PROBLEM_DATA_IN_STEPS'

    return 'OTHER'

for p in parsed:
    ans = p['ans']
    tol = p['tol']
    steps = p['steps']

    if len(steps) < 4:
        # Check if steps[2] (index 2) is actually the final answer
        only3 = len(steps) == 3
        step4_text = steps[-1] if steps else ''
        step3_text = steps[2] if len(steps) > 2 else (steps[-1] if steps else '')

        step4_nums = extract_numbers(step4_text)
        step3_nums = extract_numbers(step3_text)
        step4_ok, step4_best = numbers_match_ans(step4_nums, ans, tol)
        step3_ok, step3_best = numbers_match_ans(step3_nums, ans, tol)

        if not step4_ok:
            mismatches.append({
                'id': p['id'], 'cat': p['cat'], 'ans': ans, 'tol': tol, 'unit': p['unit'],
                'issue': f'Only {len(steps)} steps (expected 4)',
                'classification': 'WRONG_STEPS_CONTENT',
                'step4_nums': step4_nums, 'step4_best': step4_best, 'step4_ok': step4_ok,
                'step3_nums': step3_nums, 'step3_best': step3_best, 'step3_ok': step3_ok,
                'step4_text': step4_text,
                'step3_text': step3_text,
            })
        continue

    step4_text = steps[3]
    step3_text = steps[2]

    step4_nums = extract_numbers(step4_text)
    step3_nums = extract_numbers(step3_text)

    step4_ok, step4_best = numbers_match_ans(step4_nums, ans, tol)
    step3_ok, step3_best = numbers_match_ans(step3_nums, ans, tol)

    if not step4_ok:
        classification = classify_issue(p, step4_ok, step3_ok,
                                        step4_nums, step4_best,
                                        step3_nums, step3_best,
                                        step4_text, step3_text, False)
        mismatches.append({
            'id': p['id'], 'cat': p['cat'], 'ans': ans, 'tol': tol, 'unit': p['unit'],
            'issue': 'Step 4 (last) does not contain ans within tol',
            'classification': classification,
            'step4_nums': step4_nums, 'step4_best': step4_best, 'step4_ok': step4_ok,
            'step3_nums': step3_nums, 'step3_best': step3_best, 'step3_ok': step3_ok,
            'step4_text': step4_text,
            'step3_text': step3_text,
        })

print(f"Mismatches found: {len(mismatches)}")

# ---------------------------------------------------------------------------
# 7.  Classify into "definite bugs" vs "format issues" vs "content mismatch"
# ---------------------------------------------------------------------------
# Definite bugs: step 4 answer is completely different from ans
# (step3 also doesn't match, or step4 answer is off by a large factor)
# Format false-positives: step has the right answer but in a format we couldn't parse

# Re-examine: for "Only 3 steps" where content repeats, it means step 3 and 4 are same
# — this means the 4th step is missing entirely (real bug: content pasted wrong)

by_class = defaultdict(list)
for m in mismatches:
    by_class[m['classification']].append(m)

# ---------------------------------------------------------------------------
# 8.  Write report
# ---------------------------------------------------------------------------
by_cat = defaultdict(list)
for m in mismatches:
    by_cat[m['cat']].append(m)

lines = []
lines.append("=" * 76)
lines.append("CHEMISTRY FLASHCARD — STEP DIAGNOSTIC REPORT v2")
lines.append(f"File: {HTML_PATH}")
lines.append(f"Total problems parsed (calculation type): {len(parsed)}")
lines.append(f"Balance-type / unparseable skipped: {len(skipped_ids)}")
lines.append(f"Problems with step-4 mismatch: {len(mismatches)}")
lines.append("=" * 76)
lines.append("")
lines.append("CLASSIFICATION KEY:")
lines.append("  WRONG_PROBLEM_DATA_IN_STEPS — Steps contain data from a different problem (copy-paste bug)")
lines.append("  ANSWER_ONLY_IN_STEP3        — Correct answer IS in step 3 but missing from step 4")
lines.append("  SIGN_MISMATCH               — Answer has wrong sign (e.g. -212 shown as 212)")
lines.append("  WRONG_STEPS_CONTENT         — Steps have only 3 entries (4th step absent/collapsed)")
lines.append("  OTHER                       — Other mismatch")
lines.append("")

for cat in sorted(by_cat.keys()):
    items = sorted(by_cat[cat], key=lambda x: x['id'])
    lines.append(f"{'─'*70}")
    lines.append(f"CATEGORY: {cat}  ({len(items)} mismatches)")
    lines.append(f"{'─'*70}")
    for p in items:
        lines.append(f"\n  ID {p['id']}  |  Expected: {p['ans']} ± {p['tol']} {p['unit']}")
        lines.append(f"  Classification: {p['classification']}")
        lines.append(f"  Step 3 text: {p['step3_text']}")
        s3n = p.get('step3_nums', [])
        s3b = p.get('step3_best')
        s3ok = p.get('step3_ok', False)
        if s3n:
            nums_str = ', '.join(f"{x:g}" for x in s3n[:12])
            flag = 'MATCH' if s3ok else f"closest={s3b:g} diff={abs(s3b - p['ans']):g}" if s3b is not None else 'no match'
            lines.append(f"  Step 3 nums: [{nums_str}]  -> {flag}")
        else:
            lines.append(f"  Step 3 nums: (none found)")
        lines.append(f"  Step 4 text: {p['step4_text']}")
        s4n = p.get('step4_nums', [])
        s4b = p.get('step4_best')
        if s4n:
            nums_str4 = ', '.join(f"{x:g}" for x in s4n[:12])
            diff4 = abs(s4b - p['ans']) if s4b is not None else '?'
            lines.append(f"  Step 4 nums: [{nums_str4}]  -> closest={s4b:g} diff={diff4:g}")
        else:
            lines.append(f"  Step 4 nums: (none found)")
    lines.append("")

lines.append("=" * 76)
lines.append("SUMMARY BY CATEGORY")
lines.append("=" * 76)
for cat in sorted(by_cat.keys()):
    ids = sorted(x['id'] for x in by_cat[cat])
    lines.append(f"  {cat}: {len(ids)} mismatches")
    lines.append(f"    IDs: {ids}")
lines.append("")

lines.append("=" * 76)
lines.append("SUMMARY BY CLASSIFICATION")
lines.append("=" * 76)
for cls in sorted(by_class.keys()):
    items = sorted(by_class[cls], key=lambda x: x['id'])
    ids = [x['id'] for x in items]
    lines.append(f"\n  {cls} ({len(ids)} problems):")
    lines.append(f"    IDs: {ids}")

lines.append("")
lines.append(f"\nTOTAL MISMATCHES: {len(mismatches)}")

report = "\n".join(lines)
with open(OUTPUT_PATH, "w", encoding="utf-8") as fh:
    fh.write(report)

print(f"\nReport written to: {OUTPUT_PATH}")
print("\n--- SUMMARY BY CATEGORY ---")
for cat in sorted(by_cat.keys()):
    ids = sorted(x['id'] for x in by_cat[cat])
    print(f"  {cat} ({len(ids)}): {ids}")
print("\n--- SUMMARY BY CLASSIFICATION ---")
for cls in sorted(by_class.keys()):
    items = sorted(by_class[cls], key=lambda x: x['id'])
    print(f"  {cls} ({len(items)} problems)")
    for item in items:
        print(f"    ID {item['id']}: ans={item['ans']}±{item['tol']} {item['unit']}")
        print(f"      Step3: {item['step3_text'][:80]}")
        print(f"      Step4: {item['step4_text'][:80]}")
print(f"\nTotal mismatches: {len(mismatches)}")
