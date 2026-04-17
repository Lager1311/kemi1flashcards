import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# bal problems are multi-line; use direct string replacement of the steps line
replacements = {
3001: ("steps:['2 Mg + O₂ → 2 MgO','Kontroll: 2 Mg på varje sida, 2 O på varje sida']",
       "steps:['Obalanserat: Mg + O₂ → MgO. O₂ har 2 O-atomar men MgO bara 1 — obalans!','Sätt 2 MgO på höger → behöver 2 Mg på vänster','Balanserad: 2 Mg + O₂ → 2 MgO','Kontroll: Mg: 2=2 ✓  O: 2=2 ✓  Koefficienterna är de minsta möjliga heltalen']"),
3002: ("steps:['2 H₂ + O₂ → 2 H₂O','Kontroll: 4 H och 2 O på varje sida']",
       "steps:['Obalanserat: H₂ + O₂ → H₂O. O: 2 vänster, 1 höger — obalans!','Sätt 2 H₂O höger → 2 O höger. Nu H: 2 vänster, 4 höger → sätt 2 H₂','Balanserad: 2 H₂ + O₂ → 2 H₂O','Kontroll: H: 4=4 ✓  O: 2=2 ✓  Vattenbildning — exoterm ✓']"),
3003: ("steps:['4 Fe + 3 O₂ → 2 Fe₂O₃','Kontroll: 4 Fe och 6 O på varje sida']",
       "steps:['Fe + O₂ → Fe₂O₃. Fe: 1 vs 2; O: 2 vs 3 — båda obalanserade','LCM(2,3)=6 syreatomer: sätt 3 O₂ och 2 Fe₂O₃ → 4 Fe behövs','Balanserad: 4 Fe + 3 O₂ → 2 Fe₂O₃','Kontroll: Fe: 4=4 ✓  O: 6=6 ✓  Rost = järn + syre ✓']"),
3004: ("steps:['C + O₂ → CO₂','Kontroll: 1 C och 2 O på varje sida']",
       "steps:['C + O₂ → CO₂. Räkna: C: 1=1 ✓  O: 2=2 ✓','Redan balanserad! Inga koefficienter behöver ändras','Balanserad: C + O₂ → CO₂','Kontroll: C: 1=1 ✓  O: 2=2 ✓  Kolets förbränning — ger CO₂ ✓']"),
3005: ("steps:['2 Na + Cl₂ → 2 NaCl','Kontroll: 2 Na och 2 Cl på varje sida']",
       "steps:['Na + Cl₂ → NaCl. Cl: 2 vänster, 1 höger — obalans!','Sätt 2 NaCl höger → 2 Na vänster','Balanserad: 2 Na + Cl₂ → 2 NaCl','Kontroll: Na: 2=2 ✓  Cl: 2=2 ✓  NaCl = bordssalt ✓']"),
3006: ("steps:['3 Mg + N₂ → Mg₃N₂','Kontroll: 3 Mg och 2 N på varje sida']",
       "steps:['Mg + N₂ → Mg₃N₂. Mg: 1 vs 3; N: 2=2 ✓ men Mg obalanserat','Sätt 3 Mg vänster för att matcha Mg₃N₂','Balanserad: 3 Mg + N₂ → Mg₃N₂','Kontroll: Mg: 3=3 ✓  N: 2=2 ✓  Magnesiumnitrid bildas ✓']"),
3007: ("steps:['CH₄ + 2 O₂ → CO₂ + 2 H₂O','Kontroll: 1 C, 4 H och 4 O på varje sida']",
       "steps:['CH₄ + O₂ → CO₂ + H₂O. C: 1=1 ✓  H: 4 vs 2 — obalans!','Sätt 2 H₂O → H balanserat (4=4). O höger: 2+2=4 → 2 O₂','Balanserad: CH₄ + 2 O₂ → CO₂ + 2 H₂O','Kontroll: C:1=1 ✓  H:4=4 ✓  O:4=4 ✓  Metanförbränning ✓']"),
3008: ("steps:['2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O','Kontroll: 4 C, 12 H och 14 O på varje sida']",
       "steps:['C₂H₆ → 2 CO₂ (C-balans). H: 6 → 3 H₂O. O höger: 4+3=7 → 7/2 O₂ (bråk!)','Multiplicera allt med 2: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O','Balanserad: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O','Kontroll: C:4=4 ✓  H:12=12 ✓  O:14=14 ✓  Etanförbränning ✓']"),
3009: ("steps:['Fe + S → FeS','Kontroll: 1 Fe och 1 S på varje sida']",
       "steps:['Fe + S → FeS. Räkna: Fe: 1=1 ✓  S: 1=1 ✓','Redan balanserad! Inga ändringar behövs','Balanserad: Fe + S → FeS','Kontroll: Fe: 1=1 ✓  S: 1=1 ✓  Järnsulfid bildas direkt ✓']"),
3010: ("steps:['4 Al + 3 O₂ → 2 Al₂O₃','Kontroll: 4 Al och 6 O på varje sida']",
       "steps:['Al + O₂ → Al₂O₃. Al: 1 vs 2; O: 2 vs 3 — båda obalanserade','LCM(2,3)=6 O: sätt 3 O₂ och 2 Al₂O₃ → behöver 4 Al','Balanserad: 4 Al + 3 O₂ → 2 Al₂O₃','Kontroll: Al:4=4 ✓  O:6=6 ✓  Aluminiumoxid: extremt stabilt ✓']"),
3011: ("steps:['Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O','Kontroll: 1 Ca, 2 Cl, 4 H och 2 O på varje sida']",
       "steps:['Ca(OH)₂ + HCl → CaCl₂ + H₂O. Cl: 1 vs 2 — obalans!','Sätt 2 HCl → 2 Cl höger OK. H: 2+2=4 vs 2 — sätt 2 H₂O','Balanserad: Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O','Kontroll: Ca:1=1 ✓  Cl:2=2 ✓  H:4=4 ✓  O:2=2 ✓  Syrbasneutralisation ✓']"),
3012: ("steps:['2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O','Kontroll: 2 Na, 2 H (bas), 1 S, 4 O (sulfat) och 2 H₂O på varje sida']",
       "steps:['NaOH + H₂SO₄ → Na₂SO₄ + H₂O. Na: 1 vs 2 — obalans!','Sätt 2 NaOH → 2 Na höger OK. H: 2+2=4 vs 2 → sätt 2 H₂O','Balanserad: 2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O','Kontroll: Na:2=2 ✓  H:4=4 ✓  S:1=1 ✓  O:6=6 ✓  Svavelsyraneutralisering ✓']"),
3013: ("steps:['Zn + S → ZnS','Kontroll: 1 Zn och 1 S på varje sida']",
       "steps:['Zn + S → ZnS. Räkna: Zn: 1=1 ✓  S: 1=1 ✓','Redan balanserad! Enkel additionsreaktion','Balanserad: Zn + S → ZnS','Kontroll: Zn: 1=1 ✓  S: 1=1 ✓  Zinksulfid bildas ✓']"),
3014: ("steps:['C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O','Kontroll: 3 C, 8 H och 10 O på varje sida']",
       "steps:['C₃H₈ → 3 CO₂ (C-balans). H: 8 → 4 H₂O. O höger: 6+4=10 → 5 O₂','Balanserad: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O','Kontroll: C:3=3 ✓  H:8=8 ✓  O:10=10 ✓','Propanförbränning — gasspis och gasol ✓']"),
3015: ("steps:['Cu₂S + O₂ → 2 Cu + SO₂','Kontroll: 2 Cu, 1 S och 2 O på varje sida']",
       "steps:['Cu₂S + O₂ → Cu + SO₂. Cu: 2 vs 1 — obalans!','Sätt 2 Cu höger. S: 1=1 ✓  O: 2=2 ✓','Balanserad: Cu₂S + O₂ → 2 Cu + SO₂','Kontroll: Cu:2=2 ✓  S:1=1 ✓  O:2=2 ✓  Kopparframställning via rostning ✓']"),
3016: ("steps:['N₂ + 3 H₂ → 2 NH₃','Kontroll: 2 N och 6 H på varje sida']",
       "steps:['N₂ + H₂ → NH₃. N: 2 vs 1; H: 2 vs 3 — båda obalanserade','Sätt 2 NH₃ → 2 N höger OK. H: 2×3=6 → 3 H₂','Balanserad: N₂ + 3 H₂ → 2 NH₃','Kontroll: N:2=2 ✓  H:6=6 ✓  Haber-Bosch — ammoniaksyntes ✓']"),
3017: ("steps:['4 P + 5 O₂ → 2 P₂O₅','Kontroll: 4 P och 10 O på varje sida']",
       "steps:['P + O₂ → P₂O₅. P: 1 vs 2; O: 2 vs 5 — båda obalanserade','LCM: sätt 2 P₂O₅ → 4 P; O: 10 → 5 O₂','Balanserad: 4 P + 5 O₂ → 2 P₂O₅','Kontroll: P:4=4 ✓  O:10=10 ✓  Fosfor brinner intensivt i O₂ ✓']"),
3018: ("steps:['C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O','Kontroll: 6 C, 12 H och 18 O på varje sida']",
       "steps:['C₆H₁₂O₆ + O₂ → CO₂ + H₂O. C:6→6CO₂ ✓  H:12→6H₂O ✓','O höger: 12+6=18. O vänster: 6 (i glukos) + n×2 = 18 → n=6 O₂','Balanserad: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O','Kontroll: C:6=6 ✓  H:12=12 ✓  O:18=18 ✓  Cellandning = glukosförbränning ✓']"),
}

replaced = 0
for pid, (old_str, new_str) in replacements.items():
    if old_str in content:
        content = content.replace(old_str, new_str, 1)
        replaced += 1
    else:
        print(f"MISS: id:{pid}")
        # Try to find the steps line
        import re
        pat = re.compile(r"id:" + str(pid) + r".*?steps:\[([^\n]+)\]", re.DOTALL)
        m = pat.search(content)
        if m:
            print(f"  Found: {repr(m.group(1)[:100])}")

print(f"Replaced {replaced}/{len(replacements)}")
with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Saved.")
