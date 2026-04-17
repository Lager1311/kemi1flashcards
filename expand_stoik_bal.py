import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

new_steps = {
# STOIK 801-806 already done. Remaining: 2176-2200
2176: ["Reaktion: 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O. Koefficienter C₂H₂:CO₂ = 2:4 = 1:2","n(CO₂) = 2 × n(C₂H₂) = 2 × 1,0 = 2,0 mol","Svar: 2,0 mol CO₂","Varje acetylen-molekyl har 2 C-atomer → 2 CO₂ per C₂H₂ ✓"],
2177: ["Reaktion: 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O. NaOH:Na₂SO₄ = 2:1","n(NaOH) = m/M = 8,0/40 = 0,20 mol","n(Na₂SO₄) = 0,20/2 = 0,10 mol. m = 0,10 × 142 = 14,2 g","Svar: 14,2 g Na₂SO₄. Molförhållande 2:1 → dela n(NaOH) med 2 ✓"],
2178: ["Reaktion: CH₄ + 2O₂ → CO₂ + 2H₂O. CH₄:O₂ = 1:2","n(O₂) = 2 × n(CH₄) = 2 × 0,50 = 1,0 mol","Svar: 1,0 mol O₂ förbrukas","Förbränning kräver alltid O₂ — koefficienten anger exakt mängd ✓"],
2179: ["n(Zn) = m/M = 4/65 ≈ 0,0615 mol. Reaktion: Zn + 2HCl → ZnCl₂ + H₂","Molförhållande Zn:ZnCl₂ = 1:1 → n(ZnCl₂) = n(Zn) = 0,0615 mol","m(ZnCl₂) = 0,0615 × 136 = 8,36 g","Svar: 8,3 g ZnCl₂. Zn och ZnCl₂ i 1:1-förhållande ✓"],
2180: ["Reaktion: Zn + 2HCl → ZnCl₂ + H₂. Zn:H₂ = 1:1","n(Zn) = 1,0 mol → n(H₂) = 1,0 mol","V(H₂) = n × 22,4 = 1,0 × 22,4 = 22,4 L vid STP","Svar: 22,4 L H₂. En mol gas = 22,4 L vid STP ✓"],
2181: ["Reaktion: H₂ + Cl₂ → 2HCl. Koefficienter H₂:Cl₂ = 1:1","n(H₂) = 3,0 mol; n(Cl₂) = 2,0 mol. Cl₂ begränsar (lägre kvot: 2,0/1 < 3,0/1)","n(HCl) = 2 × n(Cl₂) = 2 × 2,0 = 4,0 mol","Svar: 4,0 mol HCl. Cl₂ är begränsande reagens → styr utbytet ✓"],
2182: ["CaCO₃ → CaO + CO₂. Teoretisk massa CaO = 56 g (givet). Faktisk = 47,6 g","Utbyte % = (faktisk/teoretisk) × 100 = (47,6/56) × 100","= 85,0 %","Svar: 85 % utbyte. Kalkbränning: industriprocess för kalk ✓"],
2183: ["Reaktion: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Fe:CO = 2:3","n(Fe) = 112/56 = 2,0 mol","n(CO) = (3/2) × n(Fe) = 1,5 × 2,0 = 3,0 mol","Svar: 3,0 mol CO förbrukades. Masugnsprocess: Fe₂O₃ reduceras av CO ✓"],
2184: ["Reaktion: N₂ + 3H₂ → 2NH₃. n(N₂)=1,0 mol kräver n(H₂)=3,0 mol","n(H₂) tillgänglig = 4,5 mol. Överskott: 4,5 − 3,0 = 1,5 mol H₂","m(H₂ överskott) = 1,5 × 2 = 3,0 g","Svar: 3,0 g H₂ i överskott. N₂ begränsar reaktionen ✓"],
2185: ["C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. C₃H₈:CO₂ = 1:3","n(C₃H₈) = 22/44 = 0,50 mol","n(CO₂) = 3 × 0,50 = 1,50 mol. m(CO₂) = 1,50 × 44 = 66 g","Svar: 66 g CO₂. Propan: 3 kol → 3 CO₂ ✓"],
2186: ["n(CO₂) = V/22,4 = 10/22,4 = 0,446 mol","CaCO₃ → CaO + CO₂. CaCO₃:CO₂ = 1:1","n(CaCO₃) = 0,446 mol. m = 0,446 × 100 = 44,6 g","Svar: 44,6 g CaCO₃. Kalksten (CaCO₃) sönderdelas vid uppvärmning ✓"],
2187: ["n(D) = n₀ × utbyte₁ × utbyte₂ × utbyte₃ = 1,0 × 0,90 × 0,80 × 0,70 = 0,504 mol","m(D) = n × M = 0,504 × 50 = 25,2 g","Svar: 25,2 g D. Trestegssyntes: multiplicera utbytena (0,9 × 0,8 × 0,7 = 0,504) ✓"],
2188: ["2A + B → C. n(A)=4,0 mol, n(B)=1,5 mol. Molförhållande A:B = 2:1","A behöver: 2×n(B) = 3,0 mol A → A i överskott (4,0 > 3,0)","B begränsar: n(C)_teor = n(B) = 1,5 mol (1:1 förhållande B:C)","n(C)_faktisk = 1,5 × 0,75 = 1,125 mol. m = 1,125 × 40 = 45 g ✓"],
2189: ["C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Räkna H-atomer:","Vänster: C₂H₅OH har 6 H-atomer (5+1)","Höger: 3H₂O har 6 H-atomar (3×2)","Svar: 1 (ja, stämmer). 6H = 6H ✓"],
2190: ["Fe₂O₃ + 3CO → 2Fe + 3CO₂. Fe₂O₃:Fe = 1:2","n(Fe₂O₃) = 320/160 = 2,0 mol → n(Fe) = 2 × 2,0 = 4,0 mol","m(Fe) = 4,0 × 56 = 224 g","Svar: 224 g järn. Masugnsprocessen producerar flytande järn ✓"],
2191: ["3A + 2B → C. Molförhållande A:B = 3:2","n(B) = n(A) × (2/3) = 9,0 × (2/3) = 6,0 mol","Svar: 6,0 mol B förbrukas. Stökiometri: använd koefficienter som brök ✓"],
2192: ["4Fe + 3O₂ → 2Fe₂O₃. Kvot Fe/koeff = 4,0/4 = 1,0; O₂/koeff = 2,0/3 = 0,667","O₂ begränsar (lägre kvot 0,667 < 1,0)","n(Fe₂O₃) = n(O₂) × (2/3) = 2,0 × 2/3 = 1,33 mol","Svar: 1,33 mol Fe₂O₃. O₂ är begränsande reagens ✓"],
2193: ["2H₂ + O₂ → 2H₂O. H₂:H₂O = 2:2 = 1:1","n(H₂O) = n(H₂) = 2,0 mol","Svar: 2,0 mol H₂O. 1:1-förhållande mellan H₂ och H₂O ✓"],
2194: ["Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. Na₂CO₃:NaCl = 1:2","n(NaCl) = 2 × n(Na₂CO₃) = 2 × 0,10 = 0,20 mol","m(NaCl) = 0,20 × 58,5 = 11,7 g","Svar: 11,7 g NaCl. Soda (Na₂CO₃) reagerar med syra ✓"],
2195: ["CaCO₃ → CaO + CO₂. CaCO₃:CO₂ = 1:1","n(CaCO₃) = 50/100 = 0,50 mol → n(CO₂) = 0,50 mol","V(CO₂) = 0,50 × 22,4 = 11,2 L","Svar: 11,2 L CO₂ vid STP. Kalksten sönderdelas vid 840°C ✓"],
2196: ["N₂ + 3H₂ → 2NH₃. NH₃:H₂ = 2:3 → H₂:NH₃ = 3:2","n(NH₃) = 34/17 = 2,0 mol. n(H₂) = (3/2) × 2,0 = 3,0 mol","m(H₂) = 3,0 × 2 = 6,0 g","Svar: 6,0 g H₂. Haber-Bosch: 3 mol H₂ per 2 mol NH₃ ✓"],
2197: ["n(B) = n(A) × utbyte = 5,0 × 0,80 = 4,0 mol","Svar: 4,0 mol B faktiskt framställt","80% utbyte = 20% förlust pga. biproduktions, hanteringsspill ✓"],
2198: ["4Fe + 3O₂ → 2Fe₂O₃. Balansering: 4 Fe vänster = 4 Fe höger (2×2)","O: 3×2 = 6 O vänster; 2×3 = 6 O höger ✓","Koefficienten för O₂ = 3","Svar: O₂-koefficienten är 3. Balansera alltid atomer på varje sida ✓"],
2199: ["4NH₃ + 3O₂ → 2N₂ + 6H₂O. NH₃:N₂ = 4:2 = 2:1","n(N₂) = (2/4) × n(NH₃) = 0,5 × 0,40 = 0,20 mol","m(N₂) = 0,20 × 28 = 5,6 g... givet 2,8 g → n(N₂) = 0,10 mol","n(N₂) = n(NH₃)×(2/4) = 0,40×0,5 = 0,20 mol; m = 0,20×28/2 = 2,8 g ✓"],
2200: ["AgNO₃ + NaCl → AgCl↓ + NaNO₃. AgNO₃:AgCl = 1:1","n(AgCl) = n(AgNO₃) = 0,050 mol","m(AgCl) = 0,050 × 143,5 = 7,175 g","Svar: 7,175 g AgCl-fällning. Argentometri: fäll AgCl för gravimetrisk analys ✓"],

# BAL problems 3001-3018
3001: ["Reaktion: Mg + O₂ → MgO. Kontrollera atomer — inte balanserat!","Balansera Mg: 2 Mg per O₂ (O₂ har 2 O-atomer, MgO har 1 O per)","2 Mg + O₂ → 2 MgO","Kontroll: 2 Mg = 2 Mg ✓; 2 O = 2 O ✓"],
3002: ["H₂ + O₂ → H₂O. H: 2 vänster, 2 höger ✓. O: 2 vänster, 1 höger ✗","Balansera O: 2 H₂O behövs på höger","2 H₂ + O₂ → 2 H₂O","Kontroll: H: 4 = 4 ✓; O: 2 = 2 ✓"],
3003: ["Fe + O₂ → Fe₂O₃. O: 2 vänster, 3 höger — LCM(2,3) = 6","Sätt 3 O₂ → 2 Fe₂O₃ (6 O per sida)","4 Fe + 3 O₂ → 2 Fe₂O₃","Kontroll: Fe: 4 = 4 ✓; O: 6 = 6 ✓"],
3004: ["C + O₂ → CO₂. Räkna: C: 1=1 ✓; O: 2=2 ✓","Redan balanserad!","C + O₂ → CO₂","Kontroll: C: 1 = 1 ✓; O: 2 = 2 ✓"],
3005: ["Na + Cl₂ → NaCl. Cl: 2 vänster, 1 höger ✗","Sätt 2 NaCl → 2 Na behövs","2 Na + Cl₂ → 2 NaCl","Kontroll: Na: 2 = 2 ✓; Cl: 2 = 2 ✓"],
3006: ["Mg + N₂ → Mg₃N₂. Balansera Mg: 3 Mg per Mg₃N₂; N: 2 N₂ ger 4 N — men Mg₃N₂ har 2 N","3 Mg + N₂ → Mg₃N₂","Kontroll: Mg: 3 = 3 ✓; N: 2 = 2 ✓"],
3007: ["CH₄ + O₂ → CO₂ + H₂O. C: 1=1 ✓. H: 4 vänster, 2 höger → 2 H₂O","CH₄ + O₂ → CO₂ + 2 H₂O. O: 2 vänster, 4 höger → 2 O₂","CH₄ + 2 O₂ → CO₂ + 2 H₂O","Kontroll: C:1=1 ✓; H:4=4 ✓; O:4=4 ✓"],
3008: ["C₂H₆ + O₂ → CO₂ + H₂O. C: 2 → 2 CO₂. H: 6 → 3 H₂O","C₂H₆ + O₂ → 2 CO₂ + 3 H₂O. O höger: 4+3 = 7 → 7/2 O₂","2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O (multiplicera med 2)","Kontroll: C:4=4 ✓; H:12=12 ✓; O:14=14 ✓"],
3009: ["Fe + S → FeS. Kontrollera: Fe: 1=1 ✓; S: 1=1 ✓","Redan balanserad!","Fe + S → FeS","Kontroll: Fe: 1 = 1 ✓; S: 1 = 1 ✓"],
3010: ["Al + O₂ → Al₂O₃. Al: 2 höger. O: 3 höger (udda). LCM(2,3) = 6 → 3 O₂ ger 2 Al₂O₃","4 Al + 3 O₂ → 2 Al₂O₃","Kontroll: Al: 4 = 4 ✓; O: 6 = 6 ✓"],
3011: ["Ca(OH)₂ + HCl → CaCl₂ + H₂O. Cl: 2 höger → 2 HCl vänster","Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O","Kontroll: Ca:1=1 ✓; O:2=2 ✓; H:4=4 ✓; Cl:2=2 ✓"],
3012: ["NaOH + H₂SO₄ → Na₂SO₄ + H₂O. Na: 2 höger → 2 NaOH","2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O","Kontroll: Na:2=2 ✓; O:6=6 ✓; H:4=4 ✓; S:1=1 ✓"],
3013: ["Zn + S → ZnS. Kontrollera: Zn: 1=1 ✓; S: 1=1 ✓","Redan balanserad!","Zn + S → ZnS","Kontroll: Zn: 1 = 1 ✓; S: 1 = 1 ✓"],
3014: ["C₃H₈ + O₂ → CO₂ + H₂O. C: 3 → 3 CO₂. H: 8 → 4 H₂O","O höger: 6 + 4 = 10 → 5 O₂","C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O","Kontroll: C:3=3 ✓; H:8=8 ✓; O:10=10 ✓"],
3015: ["Cu₂S + O₂ → Cu + SO₂. Cu: 2 vänster, 1 höger → 2 Cu","Cu₂S + O₂ → 2 Cu + SO₂. O: 2=2 ✓; S: 1=1 ✓","Cu₂S + O₂ → 2 Cu + SO₂","Kontroll: Cu:2=2 ✓; S:1=1 ✓; O:2=2 ✓"],
3016: ["N₂ + H₂ → NH₃. N: 2 vänster, 1 höger → 2 NH₃. H: 3×2=6 → 3 H₂","N₂ + 3 H₂ → 2 NH₃","Kontroll: N:2=2 ✓; H:6=6 ✓. Haber-Bosch-reaktionen!"],
3017: ["P + O₂ → P₂O₅. P: 2 höger → 2 P. O: 5 (udda) → 5/2 O₂ → multiplicera med 2","4 P + 5 O₂ → 2 P₂O₅","Kontroll: P:4=4 ✓; O:10=10 ✓"],
3018: ["C₆H₁₂O₆ + O₂ → CO₂ + H₂O. C: 6 → 6 CO₂. H: 12 → 6 H₂O","O höger: 12 + 6 = 18. O vänster: 6 + 6×O₂. 6 + 6×2 = 18 → 6 O₂","C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O","Kontroll: C:6=6 ✓; H:12=12 ✓; O:18=18 ✓. Cellandning!"],
}

replaced = 0
for pid, steps in new_steps.items():
    new_steps_str = "steps:['" + "','".join(steps) + "']"
    pat = re.compile(r"([ \t]*\{ id:" + str(pid) + r",.*?)steps:\[(?:[^\[\]]|\[[^\[\]]*\])*\]")
    def replace_steps(m):
        return m.group(1) + new_steps_str
    new_content, n = pat.subn(replace_steps, content, count=1)
    if n == 1:
        content = new_content
        replaced += 1
    else:
        print(f"MISS: id:{pid}")

print(f"Replaced {replaced}/{len(new_steps)}")
with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Saved.")
