#!/usr/bin/env python3
"""
Final diagnostic: checks all 417 calculation problems for step mismatches.
Handles ×10^N unit scaling (ans=1.34 with unit='×10⁻⁵') correctly.
Skips ans=0/tol=0 conceptual problems that have no numeric answer.
"""

import re
import sys
from collections import defaultdict

HTML_PATH = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html"
OUTPUT_PATH = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\steps_errors.txt"

# ---------------------------------------------------------------------------
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

# ---------------------------------------------------------------------------
def extract_field_num(text, field):
    pat = re.compile(r'\b' + re.escape(field) + r'\s*:\s*(-?[\d]+(?:[\.,][\d]+)?(?:[eE][+-]?\d+)?)')
    m = pat.search(text)
    return float(m.group(1).replace(',', '.')) if m else None

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
                    sj += 2; continue
                if steps_block[sj] == "'":
                    steps.append(steps_block[si+1:sj])
                    si = sj; break
                sj += 1
        si += 1
    return steps

SUPERSCRIPT_MAP = str.maketrans('⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻', '0123456789+-')

def parse_superscript(s):
    return s.translate(SUPERSCRIPT_MAP)

def extract_numbers(text):
    """Extract all numeric values including scientific notation."""
    results = set()
    text = text.replace('\u2212', '-')

    sci_pat = re.compile(
        r'(-?[\d]+(?:[,\.][\d]+)?)\s*[×\*xX]\s*10([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻\+\-]?\d*[⁰¹²³⁴⁵⁶⁷⁸⁹]*)'
    )
    for m in sci_pat.finditer(text):
        mantissa_str = m.group(1).replace(',', '.')
        exp_raw = parse_superscript(m.group(2))
        try:
            mantissa = float(mantissa_str)
            exp = int(exp_raw) if exp_raw and exp_raw not in ('+', '-', '') else 0
            results.add(mantissa * (10 ** exp))
        except (ValueError, OverflowError):
            pass

    std_sci_pat = re.compile(r'(-?[\d]+(?:[,\.][\d]+)?)[eE]([+-]?\d+)')
    for m in std_sci_pat.finditer(text):
        try:
            val = float(m.group(1).replace(',', '.')) * (10 ** int(m.group(2)))
            results.add(val)
        except (ValueError, OverflowError):
            pass

    space_thou_pat = re.compile(r'(-?\d{1,3}(?: \d{3})+(?:[,\.]\d+)?)')
    for m in space_thou_pat.finditer(text):
        raw = m.group(1).replace(' ', '').replace(',', '.')
        try:
            results.add(float(raw))
        except ValueError:
            pass

    cleaned = sci_pat.sub(' SCINOTATION ', text)
    cleaned = std_sci_pat.sub(' SCINOTATION ', cleaned)
    cleaned = space_thou_pat.sub(' SPACENUM ', cleaned)

    num_pat = re.compile(r'(?<![a-zA-Z\d])(-?\d+(?:[,\.]\d+)?)(?![a-zA-Z\d])')
    for m in num_pat.finditer(cleaned):
        raw = m.group(1).replace(',', '.')
        try:
            results.add(float(raw))
        except ValueError:
            pass

    return sorted(results)

def unit_scale_factor(unit_str):
    """
    If unit contains ×10^N notation, return the scale so that
    ans_display × scale = ans_SI.
    e.g. unit='×10⁻⁵ mol/L' → scale=1e-5, so ans=1.34 actually means 1.34e-5.
    """
    if not unit_str:
        return 1.0
    unit_str_norm = unit_str.replace('\u2212', '-')
    m = re.search(
        r'[×\*xX]\s*10([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻\+\-]?\d*[⁰¹²³⁴⁵⁶⁷⁸⁹]*)',
        unit_str_norm
    )
    if m:
        exp_raw = parse_superscript(m.group(1))
        try:
            return 10 ** int(exp_raw)
        except (ValueError, TypeError):
            return 1.0
    return 1.0

def numbers_match_ans(nums, ans, tol):
    if not nums:
        return False, None
    best = min(nums, key=lambda x: abs(x - ans))
    if abs(best - ans) <= tol:
        return True, best
    return False, best

# ---------------------------------------------------------------------------
parsed = []
skipped = []

for raw in problems_raw:
    pid_m = re.search(r'\bid\s*:\s*(\d+)', raw)
    pid = int(pid_m.group(1)) if pid_m else None

    type_m = re.search(r"\btype\s*:\s*'([^']+)'", raw)
    if type_m and type_m.group(1) == 'balance':
        skipped.append(('balance', pid))
        continue

    ans = extract_field_num(raw, 'ans')
    tol = extract_field_num(raw, 'tol')
    unit = extract_field_str(raw, 'unit')
    cat = extract_field_str(raw, 'cat')
    steps = extract_steps(raw)

    if pid is None or ans is None or tol is None:
        skipped.append(('no_ans_tol', pid))
        continue

    # Skip conceptual problems with ans=0, tol=0 (no numeric answer expected)
    if ans == 0.0 and tol == 0.0:
        skipped.append(('conceptual_ans0', pid))
        continue

    scale = unit_scale_factor(unit or '')

    parsed.append({
        'id': pid,
        'ans': ans,
        'ans_si': ans * scale,       # ans in SI units (what will appear in steps)
        'tol': tol,
        'tol_si': tol * scale,       # tolerance in SI units
        'unit': unit or '',
        'cat': cat or 'unknown',
        'steps': steps,
        'scale': scale,
    })

print(f"Parsed: {len(parsed)} calculation problems")
print(f"Skipped: {len(skipped)} (balance + no_ans_tol + conceptual_ans0)")

# ---------------------------------------------------------------------------
mismatches = []
false_pos_notes = []

for p in parsed:
    ans = p['ans']
    ans_si = p['ans_si']
    tol = p['tol']
    tol_si = p['tol_si']
    steps = p['steps']

    # For matching: try both ans (display units) and ans_si (SI)
    def check_match(nums):
        if not nums:
            return False, None, None
        # Try display-unit match
        best_disp = min(nums, key=lambda x: abs(x - ans))
        if abs(best_disp - ans) <= tol:
            return True, best_disp, 'display_unit'
        # Try SI-unit match (for ×10^N unit problems)
        if p['scale'] != 1.0:
            best_si = min(nums, key=lambda x: abs(x - ans_si))
            if abs(best_si - ans_si) <= tol_si:
                return True, best_si, 'si_unit'
        return False, best_disp, None

    if len(steps) < 4:
        step4_text = steps[-1] if steps else ''
        step3_text = steps[2] if len(steps) > 2 else (steps[-1] if steps else '')
        step4_nums = extract_numbers(step4_text)
        step3_nums = extract_numbers(step3_text)
        step4_ok, step4_best, _ = check_match(step4_nums)
        step3_ok, step3_best, _ = check_match(step3_nums)

        mismatches.append({
            'id': p['id'], 'cat': p['cat'], 'ans': ans, 'tol': tol, 'unit': p['unit'],
            'issue': f'Only {len(steps)} steps (expected 4)',
            'classification': 'WRONG_STEPS_CONTENT',
            'step4_nums': step4_nums, 'step4_best': step4_best, 'step4_ok': step4_ok,
            'step3_nums': step3_nums, 'step3_best': step3_best, 'step3_ok': step3_ok,
            'step4_text': step4_text, 'step3_text': step3_text,
        })
        continue

    step4_text = steps[3]
    step3_text = steps[2]
    step4_nums = extract_numbers(step4_text)
    step3_nums = extract_numbers(step3_text)
    step4_ok, step4_best, step4_match_type = check_match(step4_nums)
    step3_ok, step3_best, step3_match_type = check_match(step3_nums)

    if not step4_ok:
        # Classify
        if step3_ok:
            cls = 'ANSWER_ONLY_IN_STEP3'
        elif step4_best is not None and abs(abs(step4_best) - abs(ans)) <= tol:
            cls = 'SIGN_MISMATCH'
        elif step4_best is not None and abs(abs(step4_best) - abs(ans_si)) <= tol_si:
            cls = 'SIGN_MISMATCH'
        else:
            cls = 'WRONG_PROBLEM_DATA_IN_STEPS'

        mismatches.append({
            'id': p['id'], 'cat': p['cat'], 'ans': ans, 'tol': tol, 'unit': p['unit'],
            'issue': 'Step 4 (last) does not contain ans within tol',
            'classification': cls,
            'step4_nums': step4_nums, 'step4_best': step4_best, 'step4_ok': step4_ok,
            'step3_nums': step3_nums, 'step3_best': step3_best, 'step3_ok': step3_ok,
            'step4_text': step4_text, 'step3_text': step3_text,
            'scale': p['scale'],
        })

print(f"Mismatches: {len(mismatches)}")

# ---------------------------------------------------------------------------
by_cat = defaultdict(list)
by_class = defaultdict(list)
for m in mismatches:
    by_cat[m['cat']].append(m)
    by_class[m['classification']].append(m)

# ---------------------------------------------------------------------------
lines = []
lines.append("=" * 76)
lines.append("CHEMISTRY FLASHCARD — STEP DIAGNOSTIC REPORT (FINAL)")
lines.append(f"File: {HTML_PATH}")
lines.append(f"Total problems parsed (calculation type): {len(parsed)}")
lines.append(f"Skipped (balance/conceptual/unparseable): {len(skipped)}")
lines.append(f"Problems with step-4 mismatch: {len(mismatches)}")
lines.append("=" * 76)
lines.append("")
lines.append("CLASSIFICATION KEY:")
lines.append("  WRONG_PROBLEM_DATA_IN_STEPS — Steps contain data from a different problem")
lines.append("  ANSWER_ONLY_IN_STEP3        — Correct answer in step 3 but absent from step 4")
lines.append("  SIGN_MISMATCH               — Answer has wrong sign")
lines.append("  WRONG_STEPS_CONTENT         — Only 3 steps present (4th step absent/collapsed)")
lines.append("")

for cat in sorted(by_cat.keys()):
    items = sorted(by_cat[cat], key=lambda x: x['id'])
    lines.append(f"{'─'*70}")
    lines.append(f"CATEGORY: {cat}  ({len(items)} mismatches)")
    lines.append(f"{'─'*70}")
    for p in items:
        scale_note = f" [unit scale ×{p.get('scale',1)}]" if p.get('scale', 1.0) != 1.0 else ""
        lines.append(f"\n  ID {p['id']}  |  Expected ans={p['ans']} ± {p['tol']} {p['unit']}{scale_note}")
        lines.append(f"  Classification: {p['classification']}")

        s3t = p['step3_text']
        s3n = p.get('step3_nums', [])
        s3b = p.get('step3_best')
        s3ok = p.get('step3_ok', False)
        lines.append(f"  Step 3 text: {s3t}")
        if s3n:
            nums_str = ', '.join(f"{x:g}" for x in s3n[:12])
            flag = 'MATCH' if s3ok else (f"closest={s3b:g} diff={abs(s3b-p['ans']):g}" if s3b is not None else 'none')
            lines.append(f"  Step 3 nums: [{nums_str}]  -> {flag}")
        else:
            lines.append(f"  Step 3 nums: (none found)")

        s4t = p['step4_text']
        s4n = p.get('step4_nums', [])
        s4b = p.get('step4_best')
        lines.append(f"  Step 4 text: {s4t}")
        if s4n:
            nums_str4 = ', '.join(f"{x:g}" for x in s4n[:12])
            diff4 = f"{abs(s4b - p['ans']):g}" if s4b is not None else '?'
            lines.append(f"  Step 4 nums: [{nums_str4}]  -> closest={s4b:g} diff={diff4}")
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
    for item in items:
        lines.append(f"    ID {item['id']}: ans={item['ans']} ± {item['tol']} {item['unit']}")
        lines.append(f"      Step3: {item['step3_text'][:100]}")
        lines.append(f"      Step4: {item['step4_text'][:100]}")
lines.append(f"\nTOTAL MISMATCHES: {len(mismatches)}")

report = "\n".join(lines)
with open(OUTPUT_PATH, "w", encoding="utf-8") as fh:
    fh.write(report)

print(f"\nReport written to: {OUTPUT_PATH}")

# Print ASCII-safe summary to console
print("\n--- SUMMARY BY CATEGORY ---")
for cat in sorted(by_cat.keys()):
    ids = sorted(x['id'] for x in by_cat[cat])
    print(f"  {cat} ({len(ids)}): {ids}")

print("\n--- SUMMARY BY CLASSIFICATION ---")
for cls in sorted(by_class.keys()):
    items = sorted(by_class[cls], key=lambda x: x['id'])
    print(f"  {cls}: {[x['id'] for x in items]}")

print(f"\nTotal mismatches: {len(mismatches)}")
