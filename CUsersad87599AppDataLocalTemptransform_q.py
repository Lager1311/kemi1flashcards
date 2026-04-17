import re

html_path = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

changes = []

def transform_q(q_orig, prob_id):
    q = q_orig

    # ── Function-call patterns (highest priority) ──
    q = re.sub(r'\bM\(([^)]+)\)',   lambda m: 'molmassan (M) för ' + m.group(1), q)
    q = re.sub(r'\bn\(([^)]+)\)',   lambda m: 'substansmängden (n) för ' + m.group(1), q)
    q = re.sub(r'\bm\(([^)]+)\)',   lambda m: 'massan (m) för ' + m.group(1), q)
    q = re.sub(r'\bc\(([^)]+)\)',   lambda m: 'koncentrationen (c) för ' + m.group(1), q)
    q = re.sub(r'\bV\(([^)]+)\)',   lambda m: 'volymen (V) för ' + m.group(1), q)

    # ── Nₐ ──
    q = re.sub(r'\(Nₐ=([^)]+)\)', lambda m: '(Avogadros tal (Nₐ) = ' + m.group(1) + ')', q)
    q = re.sub(r'Nₐ\s*=\s*', 'Avogadros tal (Nₐ) = ', q)
    q = re.sub(r'\bNₐ\b', 'Avogadros tal (Nₐ)', q)

    # ── Full word already written + bare abbreviation → add parens ──
    q = re.sub(r'\bsubstansmängden\s+n\b', 'substansmängden (n)', q)
    q = re.sub(r'\bmassan\s+m\b',          'massan (m)', q)
    q = re.sub(r'\bmolmassan\s+M\b',       'molmassan (M)', q)
    q = re.sub(r'\bkoncentrationen\s+c\b', 'koncentrationen (c)', q)
    q = re.sub(r'\bvolymen\s+V\b',         'volymen (V)', q)
    q = re.sub(r'\bden nya koncentrationen\s+c₂\b', 'den nya koncentrationen (c₂)', q)

    # ── Beräkna X ──
    q = re.sub(r'\bBeräkna\s+n\b',        'Beräkna substansmängden (n)', q)
    q = re.sub(r'\bBeräkna\s+M\b',        'Beräkna molmassan (M)', q)
    q = re.sub(r'\bBeräkna\s+m\b',        'Beräkna massan (m)', q)
    q = re.sub(r'\bBeräkna\s+c\b',        'Beräkna koncentrationen (c)', q)
    q = re.sub(r'\bBeräkna\s+V\b',        'Beräkna volymen (V)', q)
    q = re.sub(r'\bBeräkna\s+pH(?!-)',     'Beräkna pH-värdet (pH)', q)
    q = re.sub(r'\bBeräkna\s+pOH(?!-)',    'Beräkna pOH-värdet (pOH)', q)
    q = re.sub(r'\bBeräkna\s+Kc\b',       'Beräkna jämviktskonstanten (Kc)', q)
    q = re.sub(r'\bBeräkna\s+ΔT\b',       'Beräkna temperaturförändringen (ΔT)', q)
    q = re.sub(r'\bBeräkna\s+ΔH\b',       'Beräkna entalpiändringen (ΔH)', q)
    q = re.sub(r'\bBeräkna\s+Q\b',        'Beräkna värmeenergin (Q)', q)
    q = re.sub(r'\bBeräkna\s+E°cell\b',   'Beräkna cellpotentialen (E°cell)', q)
    q = re.sub(r'\bBeräkna\s+E°_?cell\b', 'Beräkna cellpotentialen (E°cell)', q)

    # ── Standalone c =, n =, V = as given values (not in chemical formulas) ──
    q = re.sub(r'(?<![a-zA-Z₀-₉°])c\s*=\s*(\d)', lambda m: 'koncentrationen (c) = ' + m.group(1), q)
    q = re.sub(r'(?<![a-zA-Z₀-₉°])n\s*=\s*(\d)', lambda m: 'substansmängden (n) = ' + m.group(1), q)
    q = re.sub(r'(?<![a-zA-Z₀-₉°])V\s*=\s*(\d)', lambda m: 'volymen (V) = ' + m.group(1), q)

    # ── Parenthetical (M=X) → expand ──
    q = re.sub(r'\(M=(\d[^)]*)\)', lambda m: '(molmassan (M) = ' + m.group(1) + ' g/mol)', q)

    # ── Gas variables ──
    q = re.sub(r'\bp₁\s*=\s*', 'det ursprungliga trycket (p₁) = ', q)
    q = re.sub(r'\bp₂\s*=\s*', 'det nya trycket (p₂) = ', q)
    q = re.sub(r'\bT₁\s*=\s*', 'den ursprungliga temperaturen (T₁) = ', q)
    q = re.sub(r'\bT₂\s*=\s*', 'den nya temperaturen (T₂) = ', q)
    q = re.sub(r'\bV₁\s*=\s*', 'den ursprungliga volymen (V₁) = ', q)
    q = re.sub(r'\bV₂\s*=\s*', 'den nya volymen (V₂) = ', q)
    q = re.sub(r'\bc₁\s*=\s*', 'den ursprungliga koncentrationen (c₁) = ', q)
    q = re.sub(r'\bc₂\s*=\s*', 'den nya koncentrationen (c₂) = ', q)
    q = re.sub(r'\bp\s*=\s*(?=\d)', 'trycket (p) = ', q)
    q = re.sub(r'\bT\s*=\s*(?=\d)', 'temperaturen (T) = ', q)

    # ── Electrochemistry ──
    q = re.sub(r'E°cell\s*=\s*', 'cellpotentialen (E°cell) = ', q)
    q = re.sub(r'E°katod\s*=\s*', 'katodpotentialen (E°katod) = ', q)
    q = re.sub(r'E°anod\s*=\s*', 'anodpotentialen (E°anod) = ', q)
    q = re.sub(r'(?<![a-zA-Z])I\s*=\s*(\d)', lambda m: 'strömstyrkan (I) = ' + m.group(1), q)
    q = re.sub(r'(?<![a-zA-Z])t\s*=\s*(\d)', lambda m: 'tiden (t) = ' + m.group(1), q)
    q = re.sub(r'\bnₑ\s*=\s*', 'antalet överförda elektroner (nₑ) = ', q)
    q = re.sub(r'(?<![a-zA-Z₀-₉])F\s*=\s*(\d)', lambda m: 'Faradays konstant (F) = ' + m.group(1), q)

    # ── Thermochemistry ──
    q = re.sub(r'\bQ\s*=\s*(\d)', lambda m: 'värmeenergin (Q) = ' + m.group(1), q)
    q = re.sub(r'\bΔT\s*=\s*', 'temperaturförändringen (ΔT) = ', q)
    q = re.sub(r'\bΔH°rxn\s*=\s*', 'standardreaktionsentalpin (ΔH°rxn) = ', q)
    q = re.sub(r'\bΔH°f\s*=\s*', 'standardbildningsentalpin (ΔH°f) = ', q)
    q = re.sub(r'\bΔH°\s*=\s*', 'standardentalpin (ΔH°) = ', q)
    q = re.sub(r'\bΔH\s*=\s*', 'entalpiändringen (ΔH) = ', q)

    # ── pH/pOH standalone ──
    q = re.sub(r'(?<!\w)pH\s*=\s*(\d)', lambda m: 'pH-värdet (pH) = ' + m.group(1), q)
    q = re.sub(r'(?<!\w)pOH\s*=\s*(\d)', lambda m: 'pOH-värdet (pOH) = ' + m.group(1), q)
    q = re.sub(r'\bBeräkna pH\.', 'Beräkna pH-värdet (pH).', q)
    q = re.sub(r'\bBeräkna pOH\.', 'Beräkna pOH-värdet (pOH).', q)

    # ── Equilibrium ──
    q = re.sub(r'(?<!jämviktskonstanten \()Kc\s*=\s*', 'jämviktskonstanten (Kc) = ', q)

    return q

# ── Find and transform q: fields in PROBLEMS array ──
# Strategy: find each problem object and update only its q: value
# Pattern: q:'...' where ... can contain \n

prob_pattern = re.compile(
    r'''(id:(\d+),[^{]*?)'''  # capture from id: ...
    r'''(q:'((?:[^'\]|\.)*)'),''',  # capture q:'...'
    re.DOTALL
)

def replace_q(m):
    prefix = m.group(1)
    prob_id = m.group(2)
    q_full = m.group(3)   # q:'...'
    q_val = m.group(4)    # the value inside quotes

    new_q_val = transform_q(q_val, prob_id)

    if new_q_val != q_val:
        changes.append((int(prob_id), q_val[:60], new_q_val[:60]))
        return prefix + "q:'" + new_q_val + "',"
    return m.group(0)

# Only process within the PROBLEMS array
prob_start = html.find('const PROBLEMS = [')
prob_end = html.find('\n];\n', prob_start) + 4

before = html[:prob_start]
problems_section = html[prob_start:prob_end]
after = html[prob_end:]

new_problems = prob_pattern.sub(replace_q, problems_section)

new_html = before + new_problems + after

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(new_html)

print(f"Total changes: {len(changes)}")
for cid, old, new in changes[:30]:
    print(f"  id:{cid}: '{old}' -> '{new}'")
if len(changes) > 30:
    print(f"  ... and {len(changes)-30} more")
