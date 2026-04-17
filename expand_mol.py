import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Map of id -> new steps
new_steps = {
1001: ["Känd data: massa m = 44 g, molmassa M(CO₂) = 44 g/mol","Formel: n = m / M — substansmängd = massa delat med molmassa. M anger gram per mol","Beräkna: n = 44 / 44 = 1,0 mol","Svar: 1,0 mol CO₂. Tumregel: om m = M → n = 1 mol exakt ✓"],
1002: ["Känd data: n = 0,50 mol NaCl, M(NaCl) = 58,5 g/mol","Formel: m = n × M — massa = substansmängd × molmassa (omvänd formel)","Beräkna: m = 0,50 × 58,5 = 29,25 g","Svar: 29,3 g NaCl. Kontroll: halv mol → halv molmassa i gram ✓"],
1003: ["Räkna atomer i H₂SO₄: 2 st H, 1 st S, 4 st O","M = 2×M(H) + 1×M(S) + 4×M(O) = 2×1 + 1×32 + 4×16","Beräkna: 2 + 32 + 64 = 98 g/mol","Svar: M(H₂SO₄) = 98 g/mol. Vanlig syra — viktigt att kunna utantill ✓"],
1004: ["Känd data: m = 108 g H₂O, M(H₂O) = 18 g/mol","Formel: n = m / M","Beräkna: n = 108 / 18 = 6,0 mol","Svar: 6,0 mol vatten. Kontroll: 108 = 6 × 18 ✓"],
1005: ["Beräkna M(Fe₂O₃): 2×56 + 3×16 = 112 + 48 = 160 g/mol","Massa av Fe i 1 mol Fe₂O₃: 2 × 56 = 112 g (de två Fe-atomernas massa)","Procenthalt: %Fe = (massa Fe / M_förening) × 100 = (112/160) × 100","Svar: 70 % Fe. Metoden: massandel atom = (antal×atommassa) / molmassa × 100 ✓"],
1006: ["Känd data: m = 4,0 g He, M(He) = 4,0 g/mol","Formel: n = m / M","Beräkna: n = 4,0 / 4,0 = 1,0 mol","Svar: 1,0 mol He. He är ädelgas med låg molmassa — 4 g = 1 mol ✓"],
1007: ["Beräkna mol av varje grundämne per 100 g: n(C)=40/12=3,33; n(H)=6,7/1=6,7; n(O)=53,3/16=3,33","Dividera med minsta värdet (3,33): C:1,0 H:2,0 O:1,0","Empirisk formel: CH₂O (enklaste heltalsförhållandet)","Svar: CH₂O — t.ex. formaldehyd eller glukos (C₆H₁₂O₆ = 6×CH₂O). Metod: massa% → n → dela med minst ✓"],
1008: ["Reaktion: 2H₂ + O₂ → 2H₂O. Koefficienter: H₂:O₂:H₂O = 2:1:2","Hitta begränsande: n(H₂)=6,0 kräver n(O₂)=3,0 mol, men bara 2,0 mol O₂ finns","O₂ begränsar: 2,0 mol O₂ × (2 mol H₂O / 1 mol O₂) = 4,0 mol H₂O","Svar: 4,0 mol H₂O. H₂ är i överskott: 6,0 − 2×2,0 = 2,0 mol H₂ kvar ✓"],
1009: ["Känd data: m = 3,2 g, n = 0,10 mol okänd gas","Formel: M = m / n (omvänd av n = m/M)","Beräkna: M = 3,2 / 0,10 = 32 g/mol","Svar: M = 32 g/mol → svavel S eller O₂. Metod att identifiera okänt ämne via molmassa ✓"],
1010: ["Känd data: teoretisk massa = 8,0 g, faktisk massa = 6,0 g","Formel: utbyte % = (faktisk / teoretisk) × 100","Beräkna: utbyte = (6,0 / 8,0) × 100 = 75 %","Svar: 75 % utbyte. 100 % är teoretisk max — förluster beror på sidoreaktioner, hantering ✓"],
1011: ["Beräkna mol per grundämne: n(C) = 2,4/12 = 0,20 mol; n(H) = 0,6/1 = 0,60 mol","Kvot: n(H)/n(C) = 0,60/0,20 = 3,0","Empirisk formel: CH₃ (t.ex. C₂H₆ etan eller CH₄ utan O)","Svar: CH₃ (empirisk). Inga O-atomer → ren kolväte. Kontroll: H/C = 3 ✓"],
1012: ["Känd data: M(S) = 32 g/mol, massa S = 16 g → n = 16/32 = 0,50 mol","Formel: N = n × Nₐ — antal partiklar = mol × Avogadros tal","Beräkna: N = 0,50 × 6,022×10²³ = 3,011×10²³ atomer","Svar: x = 3,011 (dvs 3,011×10²³). Nₐ kopplar mol (makroskopisk) till antal (mikroskopisk) ✓"],
2001: ["Känd data: m = 54 g Al, M(Al) = 27 g/mol","Formel: n = m / M","Beräkna: n = 54 / 27 = 2,0 mol","Svar: 2,0 mol Al. Kontroll: 54 = 2 × 27 ✓"],
2002: ["Känd data: n = 0,25 mol CaCO₃, M(CaCO₃) = 100 g/mol","Formel: m = n × M","Beräkna: m = 0,25 × 100 = 25 g","Svar: 25 g CaCO₃. M = 100 gör beräkningen enkel ✓"],
2003: ["Räkna atomer: K(1) + O(1) + H(1)","M(KOH) = M(K) + M(O) + M(H) = 39 + 16 + 1","Beräkna: 39 + 16 + 1 = 56 g/mol","Svar: M(KOH) = 56 g/mol. KOH är stark bas — viktig att känna igen ✓"],
2004: ["Känd data: m = 64 g O₂, M(O₂) = 32 g/mol","Formel: n = m / M","Beräkna: n = 64 / 32 = 2,0 mol","Svar: 2,0 mol O₂. OBS: O₂ är en diatomig molekyl → M = 2×16 = 32 ✓"],
2005: ["Känd data: n = 3,0 mol Na, M(Na) = 23 g/mol","Formel: m = n × M","Beräkna: m = 3,0 × 23 = 69 g","Svar: 69 g Na. Natrium är mjuk alkalimetall, explosiv i vatten ✓"],
2006: ["Räkna atomer i MgCl₂: 1 Mg + 2 Cl","M(MgCl₂) = M(Mg) + 2×M(Cl) = 24 + 2×35,5","Beräkna: 24 + 71 = 95 g/mol","Svar: M(MgCl₂) = 95 g/mol. Klorider: Cl har M = 35,5 g/mol ✓"],
2007: ["Känd data: m = 160 g Fe₂O₃, M(Fe₂O₃) = 160 g/mol","Formel: n = m / M","Beräkna: n = 160 / 160 = 1,0 mol","Svar: 1,0 mol Fe₂O₃. m = M → exakt 1 mol ✓"],
2008: ["Känd data: n = 0,50 mol, m = 14 g","Formel: M = m / n (löser ut M ur n = m/M)","Beräkna: M = 14 / 0,50 = 28 g/mol","Svar: M = 28 g/mol → kväve N₂ eller kisel Si. Metod: känd n + känd m → M ✓"],
2009: ["M(NH₄NO₃) = 14+4 + 14+3×16 = 18+14+48 = 80 g/mol. Två N-atomer per formelenhet","Massa N per mol: 2×14 = 28 g","Procenthalt: %N = (28/80) × 100 = 35 %","Svar: 35 % kväve. NH₄NO₃ är kvävegödsel — hög kvävehalt är viktig ✓"],
2010: ["Omvandla antal till mol: n = N / Nₐ = 1,5×10²³ / 6,0×10²³ = 0,25 mol","Beräkna massa: m = n × M = 0,25 × 12","Beräkna: m = 3,0 g","Svar: 3,0 g kol. Nₐ kopplar antal atomer till mol: dela N med Nₐ ✓"],
2011: ["Beräkna mol: n(Cu) = 64/64 = 1,0 mol; n(S) = 32/32 = 1,0 mol","Kvot: n(Cu)/n(S) = 1,0/1,0 = 1,0","Empirisk formel: CuS (kopparsulfid)","Svar: kvot = 1 → CuS. Metod: massa → n → enklaste heltal ✓"],
2012: ["Reaktion: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Koefficienter: C₃H₈ : CO₂ = 1 : 3","n(C₃H₈) = 2,0 mol (given)","n(CO₂) = 3 × n(C₃H₈) = 3 × 2,0 = 6,0 mol","Svar: 6,0 mol CO₂. Varje propanmolekyl har 3 C-atomer → 3 CO₂ per CH₈ ✓"],
2013: ["Reaktion: CH₄ + 2O₂ → CO₂ + 2H₂O. Koefficienter: CH₄ : H₂O = 1 : 2","n(CH₄) = 4,0/16 = 0,25 mol","n(H₂O) = 2 × n(CH₄) = 2 × 0,25 = 0,50 mol","m(H₂O) = 0,50 × 18 = 9,0 g ✓"],
2014: ["Känd data: 18 g H₂O = 1,0 mol (M=18)","Formel: N = n × Nₐ","Beräkna: N = 1,0 × 6,022×10²³ = 6,022×10²³ molekyler","Svar: x = 6,022 (svar i ×10²³). En mol innehåller alltid Nₐ ≈ 6×10²³ enheter ✓"],
2015: ["M(Fe₃O₄) = 3×56 + 4×16 = 168 + 64 = 232 g/mol","I 1,0 mol Fe₃O₄: antal Fe-atomer = 3 per formelenhet → n(Fe) = 3,0 mol","Massa Fe: m(Fe) = 3,0 × 56 = 168 g","Svar: 168 g Fe. Fe₃O₄ är magnetit — innehåller Fe²⁺ och Fe³⁺ ✓"],
2016: ["Låt M(M) = x. MO har massandel O = 40 %","Formel: %O = M(O)/(x + M(O)) × 100 = 40","Löser: 16/(x+16) = 0,40 → 16 = 0,40x + 6,4 → 0,40x = 9,6 → x = 24","Svar: M = 24 g/mol → magnesium Mg. Kontroll: MgO har 40% O ✓"],
2017: ["M(empirisk CH₂O) = 12 + 2 + 16 = 30 g/mol","n = M_molekyl / M_empirisk = 180 / 30 = 6","Molekylformel: (CH₂O)₆ = C₆H₁₂O₆","Svar: 6 C-atomer → glukos C₆H₁₂O₆. Empirisk formel × n = molekylformel ✓"],
2018: ["Faktisk n = teoretisk n × utbyte = 5,0 × 0,90 = 4,5 mol","Massa: m = n × M = 4,5 × 46","Beräkna: 4,5 × 46 = 207 g","Svar: 207 g. 90% utbyte → 10% förlust. m = n_teor × utbyte × M ✓"],
2019: ["m(FeO) = n × M = 0,30 × 72 = 21,6 g","m(Fe₂O₃) = n × M = 0,20 × 160 = 32,0 g","Total massa = 21,6 + 32,0 = 53,6 g","Svar: 53,6 g. Addera massor för varje komponent i blandningen ✓"],
2020: ["O-atomer i H₂O: 1 per molekyl → n(O från H₂O) = 0,50 × 1 = 0,50 mol","O-atomer i CO₂: 2 per molekyl → n(O från CO₂) = 0,50 × 2 = 1,00 mol","Total n(O) = 0,50 + 1,00 = 1,50 mol","Svar: 1,50 mol O. Räkna atomer per molekyl × molantal ✓"],
2021: ["Känd data: m = 34 g NH₃, M(NH₃) = 14+3×1 = 17 g/mol","Formel: n = m / M","Beräkna: n = 34 / 17 = 2,0 mol","Svar: 2,0 mol ammoniak. NH₃ är viktig industrigas (Haber-Bosch) ✓"],
2022: ["Känd data: n = 0,10 mol glukos, M(C₆H₁₂O₆) = 180 g/mol","Formel: m = n × M","Beräkna: m = 0,10 × 180 = 18 g","Svar: 18 g glukos. Glukos är kroppens primära energikälla ✓"],
2023: ["Räkna atomer i H₃PO₄: 3H + 1P + 4O","M = 3×1 + 31 + 4×16 = 3 + 31 + 64","Beräkna: 3 + 31 + 64 = 98 g/mol","Svar: M(H₃PO₄) = 98 g/mol. Fosforsyra används i cola och gödsel ✓"],
2024: ["Känd data: n = 2,0 mol CO₂","Formel: N = n × Nₐ = 2,0 × 6,022×10²³","Beräkna: N = 12,044×10²³ = 1,2044×10²⁴","Svar: x = 1,2044 (svar i ×10²⁴). 2 mol = dubbelt Nₐ antal ✓"],
2025: ["Känd data: teoretisk = 18,0 g, faktisk = 14,4 g","Formel: utbyte % = (faktisk/teoretisk) × 100","Beräkna: (14,4/18,0) × 100 = 80 %","Svar: 80 % utbyte. Förlust på 20 % kan bero på kristallisationsförluster ✓"],
2401: ["Känd data: n = 3,0 mol Al, M(Al) = 27 g/mol","Formel: m = n × M — massa = substansmängd × molmassa","Beräkna: m = 3,0 × 27 = 81 g","Svar: 81 g Al. Kontroll: 3 mol × 27 g/mol = 81 g ✓"],
2402: ["Känd data: m = 80 g Ca, M(Ca) = 40 g/mol","Formel: n = m / M — substansmängd = massa / molmassa","Beräkna: n = 80 / 40 = 2,0 mol","Svar: 2,0 mol Ca. Kalcium är alkalisk jordartsmetall, M = 40 g/mol ✓"],
2403: ["Känd data: n = 0,50 mol Fe, Nₐ = 6,022×10²³ mol⁻¹","Formel: N = n × Nₐ — antal atomer = mol × Avogadros tal","Beräkna: N = 0,50 × 6,022×10²³ = 3,011×10²³ atomer","Svar: 3,011×10²³ Fe-atomer. Nₐ ≈ 6×10²³ är antalet per mol ✓"],
2404: ["Räkna atomer i CuSO₄: 1 Cu + 1 S + 4 O","M = M(Cu) + M(S) + 4×M(O) = 63,5 + 32 + 4×16","Beräkna: 63,5 + 32 + 64 = 159,5 g/mol","Svar: M(CuSO₄) = 159,5 g/mol. CuSO₄ är blå kristallin salt ✓"],
2405: ["Känd data: m = 22 g CO₂, M(CO₂) = 44 g/mol","Formel: n = m / M","Beräkna: n = 22 / 44 = 0,50 mol","Svar: 0,50 mol CO₂. Halv molmassa i gram → 0,5 mol ✓"],
2406: ["Räkna atomer i K₂SO₄: 2 K + 1 S + 4 O","M = 2×39 + 32 + 4×16 = 78 + 32 + 64","Beräkna: 78 + 32 + 64 = 174 g/mol","Svar: M(K₂SO₄) = 174 g/mol. Kaliumsulfat är gödningsmedel ✓"],
2407: ["6,022×10²³ molekyler = 1 mol (per definition av Avogadros tal)","n = 1,0 mol H₂O, M(H₂O) = 18 g/mol","Massa: m = n × M = 1,0 × 18 = 18 g","Svar: 18 g vatten. 1 mol vatten = 18 g — grundläggande samband ✓"],
2408: ["Känd data: n = 2,0 mol CO₂, molär volym vid STP = 22,4 L/mol","Formel: V = n × 22,4 L/mol","Beräkna: V = 2,0 × 22,4 = 44,8 L","Svar: 44,8 L vid STP (0°C, 101,3 kPa). STP = standardtryck och -temperatur ✓"],
2409: ["Känd data: V = 2,24 L gas vid STP, molär volym = 22,4 L/mol","Formel: n = V / 22,4","Beräkna: n = 2,24 / 22,4 = 0,10 mol","Svar: 0,10 mol. 2,24 L = 1/10 av 22,4 L → 0,10 mol ✓"],
2411: ["M(Fe₂O₃) = 2×56 + 3×16 = 112 + 48 = 160 g/mol","Massa Fe per mol: 2×56 = 112 g","Massandel Fe: %Fe = (112/160) × 100 = 70,0 %","Svar: 70 % Fe. Fe₂O₃ är rostfärgat — hematit, viktig järnmalm ✓"],
2412: ["n(C)=40/12=3,33; n(H)=6,71/1=6,71; n(O)=53,3/16=3,33 mol (per 100 g)","Dividera med minsta (3,33): C:1,0 H:2,0 O:1,0","Empirisk formel: CH₂O → kvoten C:H:O = 1:2:1","Svar: kvoten är 1 (C:H:O = 1:2:1). Metod: %→n→dela med min ✓"],
2413: ["M(empirisk CH₂O) = 12 + 2 + 16 = 30 g/mol","n = M_molekyl / M_empirisk = 180 / 30 = 6","Molekylformel: C₆H₁₂O₆","Svar: 6 C-atomer. C₆H₁₂O₆ = glukos, fruktos — sockret kroppen använder ✓"],
2414: ["n(Fe) = 5,6/56 = 0,10 mol. Reaktion: 4Fe + 3O₂ → 2Fe₂O₃","Molförhållande Fe:O₂ = 4:3 → n(O₂) = (3/4) × n(Fe)","n(O₂) = 0,75 × 0,10 = 0,075 mol","m(O₂) = 0,075 × 32 = 2,4 g O₂. Stökiometri via koefficienter ✓"],
2415: ["n(H₂) = 10/2 = 5,0 mol; n(O₂) = 80/32 = 2,5 mol","Reaktion: 2H₂ + O₂ → 2H₂O. H₂ kräver n(O₂) = 5,0/2 = 2,5 mol","Exakt 2,5 mol O₂ tillgängligt → ingen är i överskott, båda förbrukas helt","Svar: inget överskott (stökiometrisk blandning). H₂:O₂ = 2:1 uppfylls ✓"],
2416: ["Känd data: teoretisk = 34 g, faktisk = 27,2 g","Formel: Utbyte % = (faktisk/teoretisk) × 100","Beräkna: Utbyte = (27,2/34) × 100 = 80 %","Svar: 80 % utbyte. Haber-Bosch ger typiskt 10–15% per pass i praktiken ✓"],
2417: ["n(C₃H₈) = 11/44 = 0,25 mol. Reaktion: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O","Molförhållande C₃H₈:CO₂ = 1:3","n(CO₂) = 3 × 0,25 = 0,75 mol","m(CO₂) = 0,75 × 44 = 33 g. Propan har 3 C → 3 CO₂ per molekyl ✓"],
2418: ["Formel: n = pV / RT (idealgas). Enhetskoll: p i Pa, V i m³, R = 8,314 J/(mol·K)","p = 100 kPa = 100 000 Pa; V = 2,0 L = 0,002 m³; T = 300 K","Beräkna: n = (100000 × 0,002) / (8,314 × 300) = 200 / 2494 = 0,080 mol","Svar: 0,080 mol. Idealgas: pV = nRT kopplar tryck, volym, temperatur, mol ✓"],
2419: ["n(N₂) = 56/28 = 2,0 mol. Reaktion: N₂ + 3H₂ → 2NH₃","Molförhållande N₂:NH₃ = 1:2 → n(NH₃) = 2 × n(N₂)","n(NH₃) = 2 × 2,0 = 4,0 mol","m(NH₃) = 4,0 × 17 = 68 g. Haber-Bosch: N₂ + 3H₂ → 2NH₃ under högt tryck ✓"],
2421: ["n(Zn) = 3,00/65,4 = 0,0459 mol; n(S) = 5,00/32,1 = 0,1558 mol","Reaktion: Zn + S → ZnS. Molförhållande 1:1 → Zn begränsar","n(ZnS) = n(Zn) = 0,0459 mol","m(ZnS) = 0,0459 × 97,5 = 4,48 g. Zn begränsar: minst mol avgör ✓"],
2422: ["n(C) = n(CO₂) = 0,733/44 = 0,01666 mol (ett C per CO₂)","n(H) = 2 × n(H₂O) = 2 × 0,300/18 = 0,03333 mol (två H per H₂O)","Kvot n(C):n(H) = 0,01666:0,03333 = 1:2 → empirisk formel CH₂","Svar: n(C) ≈ 0,01665 mol. Förbränningsanalys: CO₂ → C, H₂O → H ✓"],
2423: ["n = V / 22,4 = 0,700 / 22,4 = 0,03125 mol (vid STP)","Formel: M = m / n","Beräkna: M = 2,10 / 0,03125 = 67,2 g/mol","Svar: M = 67,2 g/mol. Okänd gas kan identifieras via molmassan ✓"],
2424: ["n(CaCO₃) = 0,250/100 = 0,00250 mol. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂","n(HCl) tillsatt = 0,100 × 0,050 = 0,00500 mol","n(HCl) som reagerar med CaCO₃ = 2 × 0,00250 = 0,00500 mol → exakt förbrukat","Svar: 0 mL NaOH — inget HCl-överskott kvar! Kontroll: 2×0,00250 = 0,00500 ✓"],
2425: ["CaF₂ ⇌ Ca²⁺ + 2F⁻: [Ca²⁺] = s, [F⁻] = 2s","Ksp = s × (2s)² = 4s³ = 3,9×10⁻¹¹","s = (3,9×10⁻¹¹/4)^(1/3) = (9,75×10⁻¹²)^(1/3) ≈ 2,13×10⁻⁴ mol/L","m = s × M(CaF₂) = 2,13×10⁻⁴ × 78 = 0,0166 g/L ≈ 0,017 g/L. Svårlöslig salt ✓"],
}

prob_start = content.find('const PROBLEMS')
prob_end = content.find('\nconst CLOZE_DATA', prob_start)

replaced = 0
for pid, steps in new_steps.items():
    # Build new steps string
    new_steps_str = "steps:['" + "','".join(steps) + "']"

    # Find the problem line
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
