import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Use regex to replace steps in multi-line bal problems
new_steps_map = {
3002: "steps:['Obalanserat: H₂ + O₂ → H₂O. O: 2 vänster, 1 höger — obalans!','Sätt 2 H₂O höger → O-balans. Nu H: 2 vänster, 4 höger → sätt 2 H₂','Balanserad: 2 H₂ + O₂ → 2 H₂O','Kontroll: H: 4=4 ✓  O: 2=2 ✓  Vattenbildning — exoterm reaktion ✓']",
3003: "steps:['Fe + O₂ → Fe₂O₃. Fe: 1 vs 2; O: 2 vs 3 — båda obalanserade','LCM(2,3)=6 O-atomer: sätt 3 O₂ och 2 Fe₂O₃ → behöver 4 Fe','Balanserad: 4 Fe + 3 O₂ → 2 Fe₂O₃','Kontroll: Fe:4=4 ✓  O:6=6 ✓  Rost = Fe₂O₃ ✓']",
3004: "steps:['C + O₂ → CO₂. Räkna: C: 1=1 ✓  O: 2=2 ✓','Redan balanserad! Inga koefficienter behöver ändras','Balanserad: C + O₂ → CO₂','Kontroll: C: 1=1 ✓  O: 2=2 ✓  Kolets förbränning ✓']",
3005: "steps:['Na + Cl₂ → NaCl. Cl: 2 vänster, 1 höger — obalans!','Sätt 2 NaCl höger → 2 Na vänster','Balanserad: 2 Na + Cl₂ → 2 NaCl','Kontroll: Na: 2=2 ✓  Cl: 2=2 ✓  NaCl = koksalt ✓']",
3006: "steps:['Mg + N₂ → Mg₃N₂. Mg: 1 vs 3 — obalans!','Sätt 3 Mg vänster för att matcha Mg₃N₂. N: 2=2 ✓','Balanserad: 3 Mg + N₂ → Mg₃N₂','Kontroll: Mg: 3=3 ✓  N: 2=2 ✓  Magnesiumnitrid ✓']",
3007: "steps:['CH₄ + O₂ → CO₂ + H₂O. C:1=1 ✓  H: 4 vs 2 — obalans!','Sätt 2 H₂O → H:4=4 ✓. O höger: 2+2=4 → 2 O₂','Balanserad: CH₄ + 2 O₂ → CO₂ + 2 H₂O','Kontroll: C:1=1 ✓  H:4=4 ✓  O:4=4 ✓  Metanförbränning ✓']",
3008: "steps:['C₂H₆ → 2 CO₂ (C-balans). H:6 → 3 H₂O. O höger: 4+3=7 → 7/2 O₂ (bråk!)','Multiplicera allt med 2: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O','Balanserad: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O','Kontroll: C:4=4 ✓  H:12=12 ✓  O:14=14 ✓  Etanförbränning ✓']",
3009: "steps:['Fe + S → FeS. Räkna: Fe: 1=1 ✓  S: 1=1 ✓','Redan balanserad! Enkel additionsreaktion','Balanserad: Fe + S → FeS','Kontroll: Fe: 1=1 ✓  S: 1=1 ✓  Järnsulfid bildas direkt ✓']",
3010: "steps:['Al + O₂ → Al₂O₃. Al: 1 vs 2; O: 2 vs 3 — båda obalanserade','LCM(2,3)=6 O: sätt 3 O₂ och 2 Al₂O₃ → 4 Al behövs','Balanserad: 4 Al + 3 O₂ → 2 Al₂O₃','Kontroll: Al:4=4 ✓  O:6=6 ✓  Aluminiumoxid: extremt stabilt ✓']",
3011: "steps:['Ca(OH)₂ + HCl → CaCl₂ + H₂O. Cl: 1 vs 2 — obalans!','Sätt 2 HCl → 2 Cl höger OK. H: 2+2=4 vs 2 → sätt 2 H₂O','Balanserad: Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O','Kontroll: Ca:1=1 ✓  Cl:2=2 ✓  H:4=4 ✓  O:2=2 ✓  Syra-basneutralisation ✓']",
3012: "steps:['NaOH + H₂SO₄ → Na₂SO₄ + H₂O. Na: 1 vs 2 — obalans!','Sätt 2 NaOH → 2 Na. H: 2+2=4 vs 2 → sätt 2 H₂O','Balanserad: 2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O','Kontroll: Na:2=2 ✓  H:4=4 ✓  S:1=1 ✓  O:6=6 ✓  Svavelsyra + natriumlut ✓']",
3013: "steps:['Zn + S → ZnS. Räkna: Zn: 1=1 ✓  S: 1=1 ✓','Redan balanserad! (S₈ i frågan är en allotrop men förenklas till S)','Balanserad: Zn + S → ZnS','Kontroll: Zn: 1=1 ✓  S: 1=1 ✓  Zinksulfid bildas ✓']",
3014: "steps:['C₃H₈ → 3 CO₂ (C-balans). H:8 → 4 H₂O. O höger: 6+4=10 → 5 O₂','Balanserad: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O','Kontroll: C:3=3 ✓  H:8=8 ✓  O:10=10 ✓','Propanförbränning — gasol och gasspis ✓']",
3015: "steps:['Cu₂S + O₂ → Cu + SO₂. Cu: 2 vs 1 — obalans!','Sätt 2 Cu höger. S:1=1 ✓  O:2=2 ✓. (Eller 2 Cu₂S + 3 O₂ → 4 Cu + 2 SO₂ för balanserad version)','Balanserad: 2 Cu₂S + 3 O₂ → 4 Cu + 2 SO₂','Kontroll: Cu:4=4 ✓  S:2=2 ✓  O:6=6 ✓  Kopparframställning ✓']",
3016: "steps:['N₂ + H₂ → NH₃. N: 2 vs 1; H: 2 vs 3 — båda obalanserade','Sätt 2 NH₃ → N:2=2 ✓. H höger: 6 → 3 H₂','Balanserad: N₂ + 3 H₂ → 2 NH₃','Kontroll: N:2=2 ✓  H:6=6 ✓  Haber-Bosch-reaktionen! ✓']",
3017: "steps:['P + O₂ → P₂O₅. P: 1 vs 2; O: 2 vs 5 — båda obalanserade','LCM: sätt 2 P₂O₅ → 4 P; O: 10 → 5 O₂','Balanserad: 4 P + 5 O₂ → 2 P₂O₅','Kontroll: P:4=4 ✓  O:10=10 ✓  Fosforpentoxid bildas ✓']",
3018: "steps:['C₆H₁₂O₆ + O₂ → CO₂ + H₂O. C:6→6CO₂ ✓  H:12→6H₂O ✓','O höger: 12+6=18. O vänster: 6 (glukos) + n×2=18 → n=6 O₂','Balanserad: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O','Kontroll: C:6=6 ✓  H:12=12 ✓  O:18=18 ✓  Cellandning = glukosförbränning ✓']",
}

replaced = 0
for pid, new_steps_str in new_steps_map.items():
    # Match steps:[...] for this specific problem (may span or be in same line as steps)
    # Find the problem block first
    pid_pat = re.compile(r"id:" + str(pid) + r",")
    m = pid_pat.search(content)
    if not m:
        print(f"Problem id:{pid} not found!")
        continue
    start = m.start()
    # Find next problem start
    next_prob = re.search(r"\n  \{ id:\d+,", content[start+1:])
    if next_prob:
        end = start + 1 + next_prob.start()
    else:
        end = start + 2000
    block = content[start:end]
    # Replace steps:[...] within block
    new_block, n = re.subn(r"steps:\[[^\]]*(?:'[^']*'[,\s]*)*\]", new_steps_str, block, count=1)
    if n == 1:
        content = content[:start] + new_block + content[end:]
        replaced += 1
    else:
        # Try simpler: find steps:[ and match to its closing ]
        si = block.find("steps:[")
        if si >= 0:
            # scan for matching ]
            i = si + 7
            depth = 0
            in_str = False
            sc = None
            esc = False
            while i < len(block):
                ch = block[i]
                if esc: esc = False
                elif in_str:
                    if ch == '\\': esc = True
                    elif ch == sc: in_str = False
                else:
                    if ch in ('"',"'"): in_str=True; sc=ch
                    elif ch == '[': depth+=1
                    elif ch == ']':
                        if depth == 0: break
                        depth -= 1
                i += 1
            old_steps = block[si:i+1]
            new_block = block[:si] + new_steps_str + block[i+1:]
            content = content[:start] + new_block + content[end:]
            replaced += 1
        else:
            print(f"MISS: id:{pid}")

print(f"Replaced {replaced}/{len(new_steps_map)}")
with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Saved.")
