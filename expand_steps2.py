import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# Find PROBLEMS section boundaries
prob_section_start = content.find('const PROBLEMS')
prob_section_end = content.find('\nconst THEORY', prob_section_start)

NEW_STEPS = {
101: [
  "Känd data: massa m = 36 g, molmassa M(H₂O) = 18 g/mol",
  "Formel: n = m/M — substansmängd = massa delat med molmassa (g ÷ g/mol = mol)",
  "Beräkna: n = 36 g ÷ 18 g/mol = 2,0 mol",
  "Svar: 2,0 mol vatten. Varje mol H₂O väger 18 g, så 36 g = 2 portioner = 2 mol"
],
102: [
  "Känd data: n = 3 mol NaCl, molmassa M(NaCl) = 23 + 35,5 = 58,5 g/mol",
  "Formel: m = n × M — massa = substansmängd × molmassa (mol × g/mol = g)",
  "Beräkna: m = 3 mol × 58,5 g/mol = 175,5 g",
  "Svar: 175,5 g NaCl. 3 mol innebär 3 × 6,022×10²³ ≈ 1,8×10²⁴ formelenheter NaCl"
],
103: [
  "Känd data: n = 2 mol, Avogadros tal Nₐ = 6,022×10²³ mol⁻¹",
  "Formel: N = n × Nₐ — antal partiklar = substansmängd × antal per mol",
  "Beräkna: N = 2 × 6,022×10²³ = 12,044×10²³ = 1,2044×10²⁴ partiklar",
  "Svar: ≈ 12,044 × 10²³. Avogadros tal definieras som antalet atomer i exakt 12 g ¹²C"
],
104: [
  "Känd data: massa m = 5,85 g, substansmängd n = 0,100 mol",
  "Formel: M = m/n — molmassa = massa / substansmängd (g ÷ mol = g/mol)",
  "Beräkna: M = 5,85 g ÷ 0,100 mol = 58,5 g/mol",
  "Svar: 58,5 g/mol → identifierbar som NaCl (Na=23 + Cl=35,5 = 58,5 g/mol) ✓"
],
105: [
  "Känd data: procenthalt H = 14,3 %, C = 85,7 % — omvandla till molförhållande",
  "n(H) = 14,3/1,0 = 14,3 mol;  n(C) = 85,7/12,0 = 7,14 mol",
  "Kvot n(H)/n(C) = 14,3/7,14 ≈ 2,0 — dvs 2 väteatomer per kolatom",
  "Svar: Empirisk formel CH₂ (t.ex. eten C₂H₄ eller cyklohexan C₆H₁₂). Empirisk = enklaste heltalskvoter"
],
106: [
  "Känd data: empirisk formel CH₂O (M_emp = 12+2+16 = 30 g/mol); mätt M_mol = 180 g/mol",
  "Multiplikator n = M_mol / M_emp = 180 / 30 = 6",
  "Molekylformel = 6 × (CH₂O) = C₆H₁₂O₆",
  "Svar: glukos C₆H₁₂O₆. Empirisk formel ger bara atomförhållandet — molekylformeln ger faktiskt antal"
],

201: [
  "Känd data: n = 2 mol NaOH, V = 4,0 L lösning",
  "Formel: c = n/V — koncentration = mol löst ämne per liter lösning (enhet: mol/L = M)",
  "Beräkna: c = 2 mol ÷ 4,0 L = 0,50 mol/L",
  "Svar: 0,50 mol/L. Det innebär att varje liter lösning innehåller 0,50 mol NaOH"
],
202: [
  "Känd data: c = 2,0 mol/L NaCl; V = 500 mL → omvandla: 500 ÷ 1000 = 0,500 L",
  "Formel: n = c × V — substansmängd = koncentration × volym (mol/L × L = mol)",
  "Beräkna: n = 2,0 × 0,500 = 1,0 mol",
  "Svar: 1,0 mol NaCl. OBS: alltid omvandla mL → L (÷ 1000) innan beräkning!"
],
203: [
  "Känd data: c₁ = 5,0 mol/L; V₁ = 100 mL = 0,10 L; V₂ = 500 mL = 0,50 L",
  "Princip: substansmängden ändras INTE vid spädning → c₁V₁ = c₂V₂",
  "Beräkna: c₂ = c₁V₁/V₂ = (5,0 × 0,10) / 0,50 = 0,50/0,50 = 1,0 mol/L",
  "Svar: 1,0 mol/L. Volymen femfaldigades → koncentrationen minskade till 1/5"
],
204: [
  "Känd data: lösn 1: c₁=1,0 mol/L, V₁=200 mL=0,20 L; lösn 2: c₂=3,0 mol/L, V₂=300 mL=0,30 L",
  "Total substansmängd: n_tot = c₁V₁ + c₂V₂ = (1,0×0,20) + (3,0×0,30) = 0,20 + 0,90 = 1,10 mol",
  "Total volym: V_tot = 0,20 + 0,30 = 0,50 L",
  "Svar: c = 1,10/0,50 = 2,2 mol/L. Blandning av lösningar: räkna alltid n_tot och V_tot separat"
],
205: [
  "Känd data: NaOH: V=25,00 mL=0,02500 L, c=0,100 mol/L; HCl: V=20,00 mL=0,02000 L",
  "Vid neutralisation (1:1): n(HCl) = n(NaOH). HCl + NaOH → NaCl + H₂O",
  "n(NaOH) = 0,100 × 0,02500 = 2,50×10⁻³ mol = n(HCl)",
  "Svar: c(HCl) = n/V = 2,50×10⁻³ / 0,02000 = 0,125 mol/L. Titrering ger exakt c vid ekvivalenspunkten"
],
206: [
  "Känd data: H₂SO₄ är diprotisk (tvåprotonig) → 1 mol H₂SO₄ neutraliserar 2 mol NaOH",
  "Reaktion: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O — molförhållande 1:2",
  "n(NaOH) = 0,200 mol/L × 0,030 L = 0,00600 mol → n(H₂SO₄) = 0,00600/2 = 0,00300 mol",
  "Svar: c(H₂SO₄) = 0,00300 / V_syra. OBS: diprotisk syra kräver dubbelt så mycket NaOH per mol"
],

301: [
  "Varför Kelvin? Gaslagar kräver absolut temperaturskala. 0 K = absolut nollpunkt; inga molekylrörelser",
  "Formel: T(K) = T(°C) + 273,15 — omvandling Celsius till Kelvin",
  "Beräkna: T = 25 + 273,15 = 298,15 K",
  "Svar: 298,15 K ≈ 298 K. Standardtemperatur (25°C = 298 K) används ofta i termodynamiska beräkningar"
],
302: [
  "Känd data: p₁=200 kPa, V₁=4,0 L, p₂=400 kPa; temperatur konstant (isoterm process)",
  "Boyles lag: p₁V₁ = p₂V₂ — tryck och volym omvänt proportionella vid konstant T",
  "Beräkna: V₂ = p₁V₁/p₂ = (200 × 4,0) / 400 = 800/400 = 2,0 L",
  "Svar: 2,0 L. Trycket fördubblas → volymen halveras. Kontroll: 200×4,0 = 400×2,0 = 800 ✓"
],
303: [
  "Känd data: V₁=3,0 L, T₁=300 K, T₂=450 K; tryck konstant (isobar process)",
  "Charles lag: V₁/T₁ = V₂/T₂ — volym och temperatur direkt proportionella vid konstant p",
  "Beräkna: V₂ = V₁ × T₂/T₁ = 3,0 × 450/300 = 3,0 × 1,5 = 4,5 L",
  "Svar: 4,5 L. T ökade 50% → V ökade 50%. OBS: ALLTID Kelvin i gaslagsberäkningar!"
],
304: [
  "Känd data: n=0,50 mol; T=300 K; p=100 kPa=1,00×10⁵ Pa; R=8,314 J/(mol·K)",
  "Ideala gaslagen: pV = nRT — kombinerar Boyle, Charles och Avogadros lag",
  "Beräkna: V = nRT/p = (0,50 × 8,314 × 300) / (1,00×10⁵) = 1247,1/100000 = 0,01247 m³",
  "Omvandla: 0,01247 m³ × 1000 = 12,47 L. Svar: 12,47 L gas vid 300 K och 100 kPa"
],
305: [
  "Känd data: p₁=100 kPa, T₁=300 K, T₂=450 K; volym konstant (isokor process)",
  "Gay-Lussacs lag: p₁/T₁ = p₂/T₂ — tryck och temperatur direkt proportionella vid konstant V",
  "Beräkna: p₂ = p₁ × T₂/T₁ = 100 × 450/300 = 100 × 1,5 = 150 kPa",
  "Svar: 150 kPa. Mer rörelseenergi (hög T) → fler kollisioner med väggarna → högre tryck"
],
306: [
  "Känd data: p₁=100 kPa, V₁=5,0 L, T₁=300 K; p₂=200 kPa, T₂=400 K",
  "Kombinerade gaslagen: (p₁V₁)/T₁ = (p₂V₂)/T₂ — alla tre variabler ändras",
  "Beräkna: V₂ = (p₁V₁T₂)/(T₁p₂) = (100 × 5,0 × 400) / (300 × 200) = 200000/60000 = 3,33 L",
  "Svar: 3,33 L. Tryckfördubbling halverar volymen; temperaturökning (+33%) verkar mot. Netto: 3,33 L"
],

401: [
  "Känd data: m=500 g vatten, c(H₂O)=4,18 J/(g·K); T₁=20°C, T₂=100°C",
  "Temperaturändring: ΔT = T₂ − T₁ = 100 − 20 = 80 K (eller 80°C, ΔT är detsamma)",
  "Formel: Q = m·c·ΔT — värmeenergi = massa × specifik värmekapacitet × temperaturändring",
  "Beräkna: Q = 500 × 4,18 × 80 = 167 200 J = 167,2 kJ. Vatten har hög c → kräver mycket energi att värma"
],
402: [
  "Känd data: m=100 g järn, c(Fe)=0,450 J/(g·K), Q=2700 J tillförs",
  "Isolera ΔT ur Q=mcΔT: ΔT = Q/(m×c)",
  "Beräkna: ΔT = 2700 / (100 × 0,450) = 2700/45 = 60 K",
  "Svar: +60°C. Jämför med vatten: samma Q till 100g H₂O → ΔT=2700/(100×4,18)≈6,5°C. Järn värms ~10× lättare"
],
403: [
  "Känd data: m=200 g vatten i kalorimeter, c=4,18 J/(g·K); mätt ΔT=+5,0°C",
  "Q_vatten = m·c·ΔT = 200 × 4,18 × 5,0 = 4180 J (vattnet värms upp = tar emot energi)",
  "Reaktionens entalpiändring: ΔH_rxn = −Q_vatten = −4180 J = −4,18 kJ",
  "Svar: ΔH = −4,18 kJ (exoterm reaktion). Minustecken: reaktionen avger energi till vattnet"
],
404: [
  "Hess lag: ΔH°rxn = ΣΔH°f(produkter) − ΣΔH°f(reaktanter). Reaktionsvägen spelar ingen roll!",
  "Förbränning CH₄: CH₄ + 2O₂ → CO₂ + 2H₂O. ΔH°f: CO₂=−393,5; H₂O(l)=−285,8; CH₄=−74,8; O₂=0",
  "Produkter: −393,5 + 2×(−285,8) = −393,5 − 571,6 = −965,1 kJ",
  "Svar: ΔH° = −965,1 − (−74,8) = −890,3 kJ/mol. Exoterm förbränning frigör 890 kJ per mol metan"
],
405: [
  "Känd data: ΔH = −86 kJ/mol; ΔS = −170 J/(mol·K) = −0,170 kJ/(mol·K); T = 298 K",
  "Formel: ΔG = ΔH − TΔS. Om ΔG < 0 → spontan; ΔG > 0 → ej spontan; ΔG = 0 → jämvikt",
  "Beräkna TΔS: T×ΔS = 298 × (−0,170) = −50,7 kJ/mol",
  "Svar: ΔG = −86 − (−50,7) = −86 + 50,7 = −35,3 kJ/mol < 0 → spontan vid 298 K. ΔH gynnar, ΔS missgynnar"
],
406: [
  "Spontanitetsgräns: ΔG = 0 när ΔH = TΔS → T_gräns = ΔH/ΔS",
  "Känd data: ΔH = +120 kJ/mol; ΔS = +0,400 kJ/(mol·K)",
  "Beräkna: T_gräns = 120/0,400 = 300 K",
  "Svar: T > 300 K → spontan (entropin dominerar). T < 300 K → ej spontan. ΔG = 0 exakt vid 300 K"
],

501: [
  "Känd data: [H⁺] = 0,01 mol/L = 10⁻² mol/L",
  "Formel: pH = −log[H⁺]. pH-skalan är logaritmisk: varje steg = 10× ändring av [H⁺]",
  "Beräkna: pH = −log(10⁻²) = −(−2) = 2",
  "Svar: pH = 2 (starkt sur). Tumregel: om [H⁺] = 10⁻ⁿ mol/L → pH = n. Kontroll: pH < 7 → sur ✓"
],
502: [
  "Känd data: pH = 3",
  "Formel: [H⁺] = 10⁻ᵖᴴ — omvändning av pH-definitionen (antilogaritm)",
  "Beräkna: [H⁺] = 10⁻³ = 0,001 mol/L = 1,0×10⁻³ mol/L",
  "Svar: 1,0×10⁻³ mol/L. pH 3 → 10× mer H⁺ än pH 4. pH 3 → 1000× mer H⁺ än pH 6"
],
503: [
  "Känd data: pOH = 5,0. Samband: pH + pOH = 14 vid 25°C (härleds ur Kw=[H⁺][OH⁻]=10⁻¹⁴)",
  "Formel: pH = 14 − pOH",
  "Beräkna: pH = 14 − 5,0 = 9,0",
  "Svar: pH = 9,0 (basisk). Varför 14? −log(Kw) = −log(10⁻¹⁴) = 14. OBS: gäller bara vid 25°C!"
],
504: [
  "Känd data: svag syra (t.ex. ättiksyra) Ka=1,8×10⁻⁵; c=0,10 mol/L",
  "Svag syra: partiell protolys HA ⇌ H⁺ + A⁻. Approximation: [H⁺] ≈ √(Ka×c) om α < 5%",
  "Beräkna: [H⁺] = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶) = 1,34×10⁻³ mol/L",
  "pH = −log(1,34×10⁻³) = 2,87. Kontrollera α = 1,34×10⁻³/0,10 = 1,3% < 5% → approximation giltig ✓"
],
505: [
  "Känd data: stark bas NaOH c=0,050 mol/L → fullständig dissociation: [OH⁻] = 0,050 mol/L",
  "pOH = −log[OH⁻] = −log(0,050) = −log(5,0×10⁻²) = −(log5,0 + log10⁻²) = −(0,699−2) = 1,30",
  "pH = 14 − pOH = 14 − 1,30 = 12,70",
  "Svar: pH = 12,7 (starkt basisk). Stark bas = fullständig dissociation → enkel beräkning via pOH"
],
506: [
  "Känd data: buffert HA/A⁻; [HA]=0,20 mol/L; [A⁻]=0,10 mol/L; Ka=1,8×10⁻⁵ → pKa = −log(1,8×10⁻⁵) = 4,74",
  "Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) — använd för buffert",
  "Beräkna: pH = 4,74 + log(0,10/0,20) = 4,74 + log(0,50) = 4,74 − 0,301 = 4,44",
  "Svar: pH = 4,44. [HA]>[A⁻] → pH < pKa. Om [A⁻]=[HA]: pH=pKa. Buffert bäst vid pKa±1"
],

601: [
  "Reaktion: N₂ + 3H₂ ⇌ 2NH₃; Jämviktskoncentrationer: [N₂]=0,50; [H₂]=0,50; [NH₃]=1,0 mol/L",
  "Kc-uttryck: Kc = [NH₃]² / ([N₂]×[H₂]³) — produkter i täljaren, reaktanter i nämnaren; koefficienter som exponenter",
  "Beräkna täljaren: (1,0)² = 1,0. Beräkna nämnaren: 0,50 × (0,50)³ = 0,50 × 0,125 = 0,0625",
  "Svar: Kc = 1,0/0,0625 = 16. Kc > 1 → produkterna gynnas. Hög Kc → reaktionen gick långt åt höger"
],
602: [
  "Reaktion: N₂O₄ ⇌ 2NO₂; aktuella konc: [NO₂]=0,40; [N₂O₄]=0,20 mol/L; Kc=0,36",
  "Reaktionskvot Q = [NO₂]² / [N₂O₄] — samma form som Kc men med aktuella (ej nödvändigtvis jämvikts-)koncentrationer",
  "Beräkna Q: Q = (0,40)²/0,20 = 0,16/0,20 = 0,80",
  "Jämför: Q=0,80 > Kc=0,36 → för mycket produkter → reaktionen går BAKÅT för att nå jämvikt"
],
603: [
  "Reaktion: H₂ + I₂ ⇌ 2HI; start: [H₂]=[I₂]=1,0 mol/L; [HI]=0; Kc=49",
  "ICE-tabell: I:1,0/1,0/0  C:−x/−x/+2x  E:(1−x)/(1−x)/2x",
  "Kc=(2x)²/(1−x)²=49 → ta kvadratroten: 2x/(1−x)=7 → 2x=7−7x → 9x=7 → x=0,778 mol/L",
  "Svar: [HI]=2×0,778=1,556≈1,56 mol/L; [H₂]=[I₂]=0,222 mol/L. Kontroll: (1,556)²/(0,222)²=49 ✓"
],
604: [
  "Känd data: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq); Ksp=1,8×10⁻¹⁰",
  "Låt lösligheten = s mol/L → [Ag⁺]=s och [Cl⁻]=s (1:1 dissociation)",
  "Ksp = [Ag⁺][Cl⁻] = s×s = s² → s = √Ksp",
  "Svar: s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L. Liten Ksp → liten löslighet. AgCl är svårlösligt (vit fällning)"
],
605: [
  "Känd data: PbSO₄(s) ⇌ Pb²⁺(aq) + SO₄²⁻(aq); Ksp=1,6×10⁻⁸",
  "Löslighet s: [Pb²⁺]=s, [SO₄²⁻]=s → Ksp = s² → s = √Ksp",
  "Beräkna: s = √(1,6×10⁻⁸) = 1,26×10⁻⁴ mol/L",
  "Svar: 1,26×10⁻⁴ mol/L ≈ 0,126 mmol/L. Jämför med AgCl: PbSO₄ löser sig ~10× mer än AgCl"
],
606: [
  "Reaktion: PCl₃ + Cl₂ ⇌ PCl₅; start: [PCl₃]=[Cl₂]=1,0 mol/L; [PCl₅]=0; Kc=1,0",
  "ICE: I:1,0/1,0/0  C:−x/−x/+x  E:(1−x)/(1−x)/x",
  "Kc = x/(1−x)² = 1,0 → x=(1−x)² → x²−3x+1=0 → x=(3−√5)/2 = (3−2,236)/2 = 0,382",
  "Svar: [PCl₅]=0,38; [PCl₃]=[Cl₂]=0,62 mol/L. Andragradsekvation uppstår när man inte kan förenkla"
],

701: [
  "Känd data: I=2,0 A; t=30 min=1800 s; M(Cu)=63,5 g/mol; Cu²⁺+2e⁻→Cu (n_e=2 elektroner per Cu)",
  "Faradays lag: m = (I×t×M)/(n_e×F), F=96485 C/mol. Laddning Q=I×t=2,0×1800=3600 C",
  "Beräkna: m = (3600 × 63,5)/(2 × 96485) = 228600/192970 = 1,185 g",
  "Svar: 1,19 g koppar avsätts. Varje mol e⁻ (96485 C) avsätter 63,5/2=31,75 g Cu"
],
702: [
  "Känd data: katod: Cu²⁺+2e⁻→Cu, E°=+0,34 V;  anod: Zn→Zn²⁺+2e⁻, E°=−0,76 V",
  "Formel: E°cell = E°(katod) − E°(anod) — båda reduceringspositioner, subtrahera anodpotentialen",
  "Beräkna: E°cell = (+0,34) − (−0,76) = +0,34 + 0,76 = 1,10 V",
  "Svar: E°cell = +1,10 V. Positiv EMK → spontan reaktion. Zn är oädlare → oxideras; Cu²⁺ → reduceras"
],
703: [
  "Känd data: m=1,08 g Ag; M(Ag)=107,9 g/mol; Ag⁺+e⁻→Ag (n_e=1); I=0,500 A",
  "Faradays lag omskriven för tid: t = (m×F×n_e)/(M×I)",
  "Beräkna: t = (1,08 × 96485 × 1)/(107,9 × 0,500) = 104203/53,95 = 1931 s",
  "Svar: ≈1930 s ≈ 32 min. Kontroll: n(Ag)=1,08/107,9=0,01001 mol → Q=n×F=966 C → t=966/0,5=1932 s ✓"
],
704: [
  "Känd data: E°cell=1,10 V (Zn/Cu-cell); n=2 elektroner per formelenhet; F=96485 C/mol",
  "Formel: ΔG° = −nFE°cell — kopplar elektrokemi till termodyn. Positiv E° ↔ negativ ΔG°",
  "Beräkna: ΔG° = −2 × 96485 × 1,10 = −212267 J/mol = −212,3 kJ/mol",
  "Svar: ΔG° = −212 kJ/mol. Starkt negativ → mycket spontan. Sambandet: K = e^(−ΔG°/RT) → stor K"
],
705: [
  "Känd data: I=3,0 A; t=2,0 h = 7200 s; M(Ag)=107,9 g/mol; n_e=1 (Ag⁺+e⁻→Ag)",
  "Faradays lag: m = (I×t×M)/(n_e×F)",
  "Beräkna: m = (3,0 × 7200 × 107,9)/(1 × 96485) = 2330280/96485 = 24,15 g",
  "Svar: 24,2 g silver. Industriell användning: silverblästring. Varje Coulomb deponerar M/(n_e×F) gram"
],
706: [
  "Känd data: Zn/Cu-cell; E°=1,10 V; n=2; [Zn²⁺]=0,10 mol/L; [Cu²⁺]=1,0 mol/L",
  "Reaktionskvot Q = [Zn²⁺]/[Cu²⁺] = 0,10/1,0 = 0,10 (oxidation av Zn; reduktion av Cu²⁺)",
  "Nernst: E = E° − (0,0592/n)×log Q = 1,10 − (0,0592/2)×log(0,10)",
  "Svar: E = 1,10 − 0,0296×(−1) = 1,10 + 0,030 = 1,13 V. Låg [Zn²⁺] minskar back-reaktion → höjer EMK"
],

801: [
  "Reaktion: 2H₂ + O₂ → 2H₂O; m(H₂)=4,0 g; M(H₂)=2,0 g/mol; M(H₂O)=18 g/mol",
  "n(H₂) = m/M = 4,0/2,0 = 2,0 mol H₂",
  "Molförhållande från ekvationen: 2 mol H₂ → 2 mol H₂O (koeff. 2:2 = 1:1) → n(H₂O) = 2,0 mol",
  "Svar: m(H₂O) = 2,0 × 18 = 36 g vatten. Stökiometri: alltid via molförhållande från balanserad ekvation"
],
802: [
  "Reaktion: CH₄ + 2O₂ → CO₂ + 2H₂O; m(CH₄)=16 g; M(CH₄)=16 g/mol; M(CO₂)=44 g/mol",
  "n(CH₄) = 16/16 = 1,0 mol",
  "Molförhållande: 1 mol CH₄ → 1 mol CO₂ (koeff. 1:1)",
  "Svar: m(CO₂) = 1,0 mol × 44 g/mol = 44 g. Förbränning av metan: varje C-atom in → en CO₂-molekyl ut"
],
803: [
  "Reaktion: N₂ + 3H₂ → 2NH₃; n(N₂)=2,0 mol; n(H₂)=4,5 mol",
  "Hitta begränsande reagens: dividera tillgänglig mängd med koefficienten",
  "N₂: 2,0/1 = 2,0;  H₂: 4,5/3 = 1,5 → H₂ ger lägst kvot → H₂ är det begränsande reagenset",
  "n(NH₃) = n(H₂) × (2/3) = 4,5 × 2/3 = 3,0 mol. N₂ är i överskott: förbrukas 3,0/2×1=1,5 mol; 0,5 mol kvar"
],
804: [
  "Känd data: teoretisk (beräknad max) massa = 10,0 g; faktisk (mätt) massa = 7,5 g",
  "Formel: Utbyte % = (faktisk / teoretisk) × 100 %",
  "Beräkna: Utbyte = (7,5/10,0) × 100 = 75 %",
  "Svar: 75% utbyte. Förluster beror på: ofullständig reaktion, sidoreaktioner, förluster vid filtrering/omkristallisering"
],
805: [
  "Förbränningsanalys: bränn CₓHᵧ → mät massa CO₂ och H₂O för att bestämma C och H",
  "Från CO₂: n(C) = m(CO₂)/M(CO₂) = m/44. Från H₂O: n(H) = 2×m(H₂O)/M(H₂O) = 2×m/18",
  "Exempel: 0,44 g CO₂ → n(C)=0,010 mol; 0,18 g H₂O → n(H)=0,020 mol",
  "Svar: H/C = 0,020/0,010 = 2 → empirisk formel CH₂ (t.ex. eten C₂H₄). Om O: n(O)=n_total−n(C)−n(H)"
],
806: [
  "Känd data: n mol gas bildas; STP = 0°C (273 K) och 101,3 kPa; molvolym Vm = 22,4 L/mol",
  "Formel: V = n × Vm(STP) — en mol idealgas upptar 22,4 L vid STP",
  "Exempel: n=0,50 mol → V = 0,50 × 22,4 = 11,2 L",
  "Svar: 11,2 L. OBS: vid SATP (25°C, 100 kPa): Vm=24,8 L/mol. Viktigt att ange vilket standardtillstånd!"
],
}

count = 0
not_found = []

# Work only within PROBLEMS section
prob_section = content[prob_section_start:prob_section_end]

for prob_id, new_steps in NEW_STEPS.items():
    # Build new steps string (single-quoted to match existing style)
    steps_str = "steps:['" + "','".join(s.replace("'", "\\'") for s in new_steps) + "']"

    # Find this problem in the section
    # Problems look like: id:101, lv:
    id_pattern = f"id:{prob_id},"
    idx = prob_section.find(id_pattern)
    if idx == -1:
        not_found.append(prob_id)
        continue

    # Find end of this problem's block
    next_prob = prob_section.find('\n  { id:', idx + 1)
    if next_prob == -1:
        next_prob = len(prob_section)

    block = prob_section[idx:next_prob]

    # Find and replace the steps array
    # Handle both 'steps:[...]' and multiline versions
    steps_match = re.search(r"steps:\[(?:[^\[\]]|\[[^\[\]]*\])*\]", block, re.DOTALL)
    if not steps_match:
        not_found.append(f"{prob_id}(no steps)")
        continue

    old_steps = steps_match.group(0)
    new_block = block.replace(old_steps, steps_str, 1)
    prob_section = prob_section[:idx] + new_block + prob_section[idx + len(block):]
    count += 1

# Reconstruct content
content = content[:prob_section_start] + prob_section + content[prob_section_end:]

print(f'Replaced: {count}/{len(NEW_STEPS)} problems')
if not_found:
    print(f'Not found: {not_found}')

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Saved.')
