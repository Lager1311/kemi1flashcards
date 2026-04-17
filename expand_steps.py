import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# ══════════════════════════════════════════════════════════════════════════
# NEW EXPANDED STEPS – dictionary id → list of step strings
# Each step follows format: "Label: explanation + calculation"
# ══════════════════════════════════════════════════════════════════════════

NEW_STEPS = {

# ── MOL & MASSA ──────────────────────────────────────────────────────────
101: [
  "Känd data: massa m = 36 g, molmassa M(H₂O) = 18 g/mol",
  "Formel: n = m/M  (substansmängd = massa delat med molmassa; enheten g ÷ g/mol = mol)",
  "Beräkna: n = 36 g ÷ 18 g/mol = 2,0 mol",
  "Svar: 2,0 mol vatten. Varje mol väger 18 g, så 36 g = 2 portioner om 18 g = 2 mol"
],
102: [
  "Känd data: substansmängd n = 3 mol NaCl, molmassa M(NaCl) = 23+35,5 = 58,5 g/mol",
  "Formel: m = n × M  (massa = substansmängd × molmassa; enheten mol × g/mol = g)",
  "Beräkna: m = 3 mol × 58,5 g/mol = 175,5 g",
  "Svar: 175,5 g NaCl. 3 mol innebär 3 × Avogadros tal (≈1,8×10²⁴) formelenheter"
],
103: [
  "Känd data: n = 2 mol, Avogadros tal Nₐ = 6,022×10²³ mol⁻¹",
  "Formel: N = n × Nₐ  (antal partiklar = mol × antal per mol)",
  "Beräkna: N = 2 × 6,022×10²³ = 12,044×10²³ = 1,2044×10²⁴",
  "Svar: 1,2044×10²⁴ partiklar (≈12,044 × 10²³). Avogadros tal är antalet atomer i 12 g ¹²C"
],
104: [
  "Känd data: massa m = 5,85 g, substansmängd n = 0,100 mol",
  "Formel: M = m/n  (molmassa = massa / substansmängd; g ÷ mol = g/mol)",
  "Beräkna: M = 5,85 g ÷ 0,100 mol = 58,5 g/mol",
  "Svar: 58,5 g/mol → detta stämmer med NaCl (Na=23 + Cl=35,5 = 58,5 g/mol)"
],
105: [
  "Känd data: H = 14,3 %, C = 85,7 %; räkna molförhållande H:C",
  "Beräkna molantal: n(H) = 14,3/1 = 14,3 mol; n(C) = 85,7/12 = 7,14 mol",
  "Kvot: n(H)/n(C) = 14,3/7,14 ≈ 2,0 → dvs 2 H per C-atom",
  "Svar: Empirisk formel CH₂ (alkener och cykloalkaner). Divisionen visar hur många mol av varje atom det finns relativt varandra"
],
106: [
  "Känd data: empirisk formel CH₂O (M_emp = 12+2+16 = 30 g/mol), mätt molmassa M_mol = 180 g/mol",
  "Beräkna multiplikator: n = M_mol / M_emp = 180 / 30 = 6",
  "Molekylformel = n × empirisk formel = 6 × CH₂O = C₆H₁₂O₆",
  "Svar: C₆H₁₂O₆ = glukos. Den empiriska formeln ger bara atomförhållandet; molekylformeln ger det faktiska antalet"
],

# ── KONCENTRATION ─────────────────────────────────────────────────────────
201: [
  "Känd data: substansmängd n = 2 mol NaOH, volym V = 4,0 L",
  "Formel: c = n/V  (koncentration = mol löst ämne per liter lösning; enhet mol/L = M)",
  "Beräkna: c = 2 mol ÷ 4,0 L = 0,50 mol/L",
  "Svar: 0,50 mol/L. Det innebär 0,50 mol NaOH i varje liter av lösningen"
],
202: [
  "Känd data: c = 2,0 mol/L, V = 500 mL → omvandla: 500 mL ÷ 1000 = 0,500 L",
  "Formel: n = c × V  (substansmängd = koncentration × volym; mol/L × L = mol)",
  "Beräkna: n = 2,0 mol/L × 0,500 L = 1,0 mol",
  "Svar: 1,0 mol NaCl. OBS: alltid omvandla mL till L innan beräkning (÷ 1000)"
],
203: [
  "Känd data: c₁ = 5,0 mol/L, V₁ = 100 mL = 0,10 L; V₂ = 500 mL = 0,50 L",
  "Princip: substansmängden n ändras EJ vid spädning → c₁V₁ = c₂V₂",
  "Beräkna: c₂ = c₁V₁/V₂ = (5,0 × 0,10) / 0,50 = 0,50/0,50 = 1,0 mol/L",
  "Svar: 1,0 mol/L. Volymen femfaldigades → koncentrationen minskade till 1/5"
],
204: [
  "Känd data: lösning 1: c₁=1,0 mol/L, V₁=200 mL=0,20 L; lösning 2: c₂=3,0 mol/L, V₂=300 mL=0,30 L",
  "Beräkna total substansmängd: n_tot = c₁V₁ + c₂V₂ = (1,0×0,20) + (3,0×0,30) = 0,20 + 0,90 = 1,10 mol",
  "Total volym: V_tot = 0,20 + 0,30 = 0,50 L",
  "Svar: c = n_tot/V_tot = 1,10/0,50 = 2,2 mol/L. Blandning av lösningar: räkna alltid total n och total V separat"
],
205: [
  "Känd data: HCl-lösning; V(bas)=25,00 mL=0,02500 L, c(NaOH)=0,100 mol/L; V(syra)=20,00 mL=0,02000 L",
  "Vid neutralisation: n(HCl) = n(NaOH) (1:1 reaktion, HCl + NaOH → NaCl + H₂O)",
  "Beräkna n(NaOH): n = 0,100 × 0,02500 = 0,00250 mol",
  "Beräkna c(HCl): c = n/V = 0,00250/0,02000 = 0,125 mol/L. Titrering ger exakt koncentration när ekvivalenspunkten nås"
],
206: [
  "Känd data: H₂SO₄ är diprotisk (tvåprotonig) → 1 mol H₂SO₄ neutraliserar 2 mol NaOH",
  "Reaktion: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O; molförhållande 1:2",
  "Om V(NaOH)=30,0 mL=0,030 L, c(NaOH)=0,200 mol/L: n(NaOH)=0,200×0,030=0,00600 mol",
  "n(H₂SO₄) = n(NaOH)/2 = 0,00600/2 = 0,00300 mol. OBS: diprotisk syra kräver dubbelt NaOH"
],

# ── GASLAGAR ──────────────────────────────────────────────────────────────
301: [
  "Varför Kelvin? Gaslagar kräver absolut temperaturskala. Vid 0 K = −273,15 °C: inga molekylrörelser alls",
  "Formel: T(K) = T(°C) + 273,15",
  "Beräkna: T = 25 + 273,15 = 298,15 K",
  "Svar: 298,15 K ≈ 298 K (standardtemperatur 25 °C = 298 K används ofta i termodyn. beräkningar)"
],
302: [
  "Känd data: p₁=200 kPa, V₁=4,0 L, p₂=400 kPa, T=konstant",
  "Boyles lag: vid konstant T gäller p₁V₁ = p₂V₂. Trycket fördubblas → volymen halveras (omvänt proportionellt)",
  "Beräkna: V₂ = p₁V₁/p₂ = (200×4,0)/400 = 800/400 = 2,0 L",
  "Svar: 2,0 L. Kontroll: p₁V₁=800, p₂V₂=400×2,0=800 ✓. Tryckökning komprimerar gasen"
],
303: [
  "Känd data: V₁=3,0 L, T₁=300 K, T₂=450 K; p=konstant (isobar process)",
  "Charles lag: vid konstant p gäller V₁/T₁ = V₂/T₂. Temperatur och volym proportionella",
  "Beräkna: V₂ = V₁×T₂/T₁ = 3,0 × 450/300 = 3,0 × 1,5 = 4,5 L",
  "Svar: 4,5 L. T ökade 50 % → V ökade 50 %. OBS: måste använda Kelvin, aldrig Celsius!"
],
304: [
  "Känd data: n=0,50 mol, T=300 K, p=100 kPa=100×10³ Pa; R=8,314 J/(mol·K)",
  "Ideala gaslagen: pV = nRT (kombinerar Boyle, Charles och Avogadros lag)",
  "Beräkna: V = nRT/p = (0,50 × 8,314 × 300) / (100×10³) = 1247,1/100000 = 0,01247 m³",
  "Omvandla: 0,01247 m³ = 12,47 L. Svar: 12,47 L. (1 m³ = 1000 L)"
],
305: [
  "Känd data: p₁=100 kPa, T₁=300 K, T₂=450 K; V=konstant (isokor process)",
  "Gay-Lussacs lag: vid konstant V gäller p₁/T₁ = p₂/T₂. Temperatur och tryck proportionella",
  "Beräkna: p₂ = p₁×T₂/T₁ = 100 × 450/300 = 100 × 1,5 = 150 kPa",
  "Svar: 150 kPa. T ökade 50 % → p ökade 50 %. Mer rörelseenergi = fler kollisioner med väggarna"
],
306: [
  "Känd data: p₁=100 kPa, V₁=5,0 L, T₁=300 K; p₂=200 kPa, T₂=400 K",
  "Kombinerade gaslagen: (p₁V₁)/T₁ = (p₂V₂)/T₂ — gäller när alla tre variabler ändras",
  "Beräkna: V₂ = (p₁V₁T₂)/(T₁p₂) = (100×5,0×400)/(300×200) = 200000/60000 = 3,33 L",
  "Svar: 3,33 L. Tryckfördubbling halverar volymen men temperaturökning motverkar. Nettoresultat: 3,33 L"
],

# ── TERMODYNAMIK ──────────────────────────────────────────────────────────
401: [
  "Känd data: m=500 g vatten, c(H₂O)=4,18 J/(g·K), T₁=20°C, T₂=100°C",
  "Beräkna temperaturändring: ΔT = T₂−T₁ = 100−20 = 80 K (eller 80°C, samma ΔT)",
  "Formel: Q = mcΔT  (värmeenergi = massa × specifik värmekapacitet × temperaturändring)",
  "Beräkna: Q = 500 × 4,18 × 80 = 167 200 J = 167,2 kJ",
  "Svar: 167,2 kJ. Vatten har hög c → kräver mycket energi att värma (bra värmelager)"
],
402: [
  "Känd data: m=100 g järn, c(Fe)=0,450 J/(g·K), Q=2700 J tillförs",
  "Formel omskriven: ΔT = Q/(m×c)  (isolera ΔT ur Q=mcΔT)",
  "Beräkna: ΔT = 2700 / (100 × 0,450) = 2700 / 45 = 60 K",
  "Svar: temperaturen stiger 60°C/K. Jämför: samma Q till 100g vatten → ΔT=2700/(100×4,18)≈6,5°C. Järn värms lättare"
],
403: [
  "Känd data: kalorimeter med 200 g vatten, c=4,18 J/(g·K); mätt ΔT=5,0°C; reaktion sker",
  "Formel: Q_reaktion = −Q_vatten = −mcΔT (energin reaktionen avger = energin vattnet tar upp, tecken byter)",
  "Beräkna: Q_vatten = 200 × 4,18 × 5,0 = 4180 J",
  "Svar: ΔH_rxn = −4180 J = −4,18 kJ (exoterm; minustecken = energi avges till omgivningen)"
],
404: [
  "Känd data: standardbildningsentalpier ΔH°f; Hess lag: ΔH°rxn = ΣΔH°f(prod) − ΣΔH°f(reak)",
  "Exempel: CH₄(g)+2O₂(g)→CO₂(g)+2H₂O(l); ΔH°f: CO₂=−393,5; H₂O=−285,8; CH₄=−74,8; O₂=0",
  "Beräkna: ΔH°rxn = [−393,5 + 2×(−285,8)] − [−74,8 + 2×0] = [−965,1] − [−74,8]",
  "Svar: ΔH°rxn = −965,1 + 74,8 = −890,3 kJ/mol. Exoterm förbränning. Hess lag: reaktionsvägen spelar ingen roll, bara start- och slutstatus"
],
405: [
  "Känd data: ΔH = −86 kJ/mol, ΔS = −170 J/(mol·K) = −0,170 kJ/(mol·K), T = 298 K",
  "Formel: ΔG = ΔH − TΔS  (Gibbs fria energi avgör spontanitet: ΔG < 0 = spontan)",
  "Beräkna: ΔG = −86 − (298 × (−0,170)) = −86 − (−50,66) = −86 + 50,66",
  "Svar: ΔG = −35,3 kJ/mol < 0 → spontan vid 298 K. ΔH gynnar (neg) men ΔS missgynnar (neg) → nettot avgör"
],
406: [
  "Spontanitetsgränsen: ΔG = 0 ↔ ΔH = TΔS → T_gräns = ΔH/ΔS",
  "Känd data: ΔH = +120 kJ/mol, ΔS = +400 J/(mol·K) = +0,400 kJ/(mol·K)",
  "Beräkna: T = ΔH/ΔS = 120/0,400 = 300 K",
  "Svar: T > 300 K → spontan (entropin dominerar vid hög T). T < 300 K → ej spontan. Vid exakt 300 K: ΔG=0, jämvikt"
],

# ── SYRA-BAS ──────────────────────────────────────────────────────────────
501: [
  "Känd data: [H⁺] = 0,01 mol/L = 10⁻² mol/L",
  "Formel: pH = −log[H⁺]  (logaritmisk skala: varje pH-enhet = 10× skillnad i [H⁺])",
  "Beräkna: pH = −log(10⁻²) = −(−2) = 2",
  "Svar: pH = 2 (starkt sur). Regel: om [H⁺] = 10⁻ⁿ → pH = n. Kontroll: sur lösning → pH < 7 ✓"
],
502: [
  "Känd data: pH = 3",
  "Formel: [H⁺] = 10⁻ᵖᴴ  (omvändning av pH-definitionen; antilogaritm)",
  "Beräkna: [H⁺] = 10⁻³ = 0,001 mol/L = 1,0×10⁻³ mol/L",
  "Svar: [H⁺] = 1,0×10⁻³ mol/L. Varje pH-enhet = 10× ändring. pH 3 → 10× mer H⁺ än pH 4"
],
503: [
  "Känd data: pOH = 5,0; sambandet pH + pOH = 14 (vid 25°C, Kw = 10⁻¹⁴)",
  "Formel: pH = 14 − pOH  (härleds ur Kw = [H⁺][OH⁻] = 10⁻¹⁴ → pH + pOH = 14)",
  "Beräkna: pH = 14 − 5,0 = 9,0",
  "Svar: pH = 9,0 (basisk lösning). pOH lågt = hög [OH⁻] = basisk. OBS: sambandet gäller bara vid 25°C!"
],
504: [
  "Känd data: svag syra HA med Ka=1,8×10⁻⁵ (ättiksyra), c=0,10 mol/L",
  "Svag syra: delvis protolys → HA ⇌ H⁺ + A⁻. Approximation: [H⁺] ≈ √(Ka×c) om α < 5%",
  "Beräkna: [H⁺] = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶) = 1,34×10⁻³ mol/L",
  "pH = −log(1,34×10⁻³) = 2,87. Kontroll α: 1,34×10⁻³/0,10 = 1,34% < 5% → approximation ok ✓"
],
505: [
  "Känd data: stark bas NaOH, c=0,050 mol/L (fullständig dissociation: NaOH→Na⁺+OH⁻)",
  "Steg 1 – [OH⁻]: [OH⁻] = 0,050 mol/L (1:1 dissociation, stark bas → 100%)",
  "Steg 2 – pOH: pOH = −log(0,050) = −log(5,0×10⁻²) = 1,30",
  "Steg 3 – pH: pH = 14 − pOH = 14 − 1,30 = 12,70. Svar: pH = 12,7 (starkt basisk lösning)"
],
506: [
  "Känd data: buffert med HA/A⁻; [HA]=0,20 mol/L; [A⁻]=0,10 mol/L; Ka=1,8×10⁻⁵ (pKa=4,74)",
  "Formel: Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])",
  "Beräkna: pH = 4,74 + log(0,10/0,20) = 4,74 + log(0,50) = 4,74 + (−0,301) = 4,44",
  "Svar: pH = 4,44. Mer HA än A⁻ → pH < pKa. Om [A⁻]=[HA] → pH = pKa. H-H gäller bäst i intervallet pKa±1"
],

# ── JÄMVIKT ───────────────────────────────────────────────────────────────
601: [
  "Känd data: N₂+3H₂⇌2NH₃; vid jämvikt: [N₂]=0,50; [H₂]=0,50; [NH₃]=1,0 mol/L",
  "Kc-uttryck: Kc = [NH₃]² / ([N₂][H₂]³)  (produkter i täljaren, reaktanter i nämnaren; upphöjda med koefficienter)",
  "Beräkna täljaren: [NH₃]² = (1,0)² = 1,0",
  "Beräkna nämnaren: [N₂][H₂]³ = 0,50 × (0,50)³ = 0,50 × 0,125 = 0,0625",
  "Svar: Kc = 1,0/0,0625 = 16. Kc>1 → produkterna gynnas. Kc>>1 → nästan fullständig reaktion"
],
602: [
  "Känd data: N₂O₄⇌2NO₂; [NO₂]=0,40; [N₂O₄]=0,20 mol/L; beräkna Q och avgör riktning",
  "Q-uttryck (reaktionskvot): Q = [NO₂]² / [N₂O₄] (samma form som Kc men med aktuella, ej jämviktskonc.)",
  "Beräkna Q: Q = (0,40)² / 0,20 = 0,16/0,20 = 0,80",
  "Jämför med Kc=0,36: Q=0,80 > Kc → reaktionen går bakåt (mot reaktanter) för att nå jämvikt"
],
603: [
  "Känd data: H₂+I₂⇌2HI; start: [H₂]=[I₂]=1,0; [HI]=0; Kc=49",
  "ICE-tabell: I: 1,0 / 1,0 / 0;  C: −x / −x / +2x;  E: (1−x) / (1−x) / 2x",
  "Kc = (2x)² / (1−x)² = 49 → √Kc = 7 = 2x/(1−x) → 2x = 7−7x → 9x = 7 → x = 0,778",
  "Svar: [HI] = 2×0,778 = 1,556 mol/L ≈ 1,56 mol/L. [H₂]=[I₂]=0,222 mol/L"
],
604: [
  "Känd data: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq); Ksp(AgCl)=1,8×10⁻¹⁰",
  "Löslighet s: om s mol AgCl löses → [Ag⁺]=s och [Cl⁻]=s (1:1 dissociation)",
  "Ksp = [Ag⁺][Cl⁻] = s×s = s² → s = √Ksp",
  "Beräkna: s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L. Svar: lösligheten är 1,34×10⁻⁵ mol/L (mycket svårlösligt)"
],
605: [
  "Känd data: PbSO₄(s) ⇌ Pb²⁺(aq) + SO₄²⁻(aq); Ksp(PbSO₄)=1,6×10⁻⁸",
  "Löslighet s: [Pb²⁺]=s, [SO₄²⁻]=s → Ksp = s²",
  "Beräkna: s = √(1,6×10⁻⁸) = 1,26×10⁻⁴ mol/L",
  "Svar: lösligheten är 1,26×10⁻⁴ mol/L. Jämför med AgCl (1,34×10⁻⁵): PbSO₄ löser sig ~10× mer"
],
606: [
  "Känd data: PCl₃+Cl₂⇌PCl₅; start: [PCl₃]=[Cl₂]=1,0 mol/L; [PCl₅]=0; Kc=1,0",
  "ICE: I: 1,0/1,0/0;  C: −x/−x/+x;  E: (1−x)/(1−x)/x",
  "Kc = x/(1−x)² = 1,0 → x = (1−x)² → x = 1−2x+x² → x²−3x+1=0",
  "Lös: x = (3−√5)/2 = (3−2,236)/2 = 0,382. Svar: [PCl₅]=0,38; [PCl₃]=[Cl₂]=0,62 mol/L"
],

# ── ELEKTROKEMI ───────────────────────────────────────────────────────────
701: [
  "Känd data: I=2,0 A, t=30 min=1800 s, M(Cu)=63,5 g/mol, n_e=2 (Cu²⁺+2e⁻→Cu)",
  "Faradays lag: m = (I×t×M)/(n_e×F)  (F=96485 C/mol; I×t=laddning i Coulomb)",
  "Beräkna laddning: Q = I×t = 2,0 × 1800 = 3600 C",
  "Beräkna massa: m = (3600 × 63,5)/(2 × 96485) = 228600/192970 = 1,185 g ≈ 1,19 g Cu"
],
702: [
  "Känd data: katod=Cu²⁺/Cu (E°=+0,34 V), anod=Zn/Zn²⁺ (E°=−0,76 V)",
  "Formel: E°cell = E°(katod) − E°(anod)  (reduktionspotentialer; högt E° = reduceras hellre)",
  "Beräkna: E°cell = (+0,34) − (−0,76) = 0,34 + 0,76 = 1,10 V",
  "Svar: E°cell = 1,10 V (standard Daniell-element). Positiv EMK → spontan reaktion. Zn oxideras, Cu²⁺ reduceras"
],
703: [
  "Känd data: m=1,08 g Ag; M(Ag)=107,9 g/mol; n_e=1 (Ag⁺+e⁻→Ag); I=0,500 A",
  "Faradays lag omskriven: t = (m×F×n_e)/(M×I)",
  "Beräkna: t = (1,08 × 96485 × 1)/(107,9 × 0,500) = 104203/53,95 = 1931 s",
  "Svar: t ≈ 1930 s ≈ 32 min. Kontroll: n(Ag)=1,08/107,9=0,01001 mol → Q=nFn_e=0,01001×96485×1=966 C → t=966/0,5=1932 s ✓"
],
704: [
  "Känd data: E°cell=1,10 V (Zn-Cu-element); n=2 (2 elektroner per formelenhet); F=96485 C/mol",
  "Formel: ΔG° = −nFE°cell  (Gibbs energi kopplat till elektromotorisk kraft)",
  "Beräkna: ΔG° = −2 × 96485 × 1,10 = −212267 J/mol = −212,3 kJ/mol",
  "Svar: ΔG° = −212 kJ/mol (starkt negativ → mycket spontan reaktion). Kopplingen: negativt ΔG ↔ positivt E°cell"
],
705: [
  "Känd data: I=3,0 A; t=2,0 h=7200 s; M(Ag)=107,9 g/mol; n_e=1",
  "Faradays lag: m = (I×t×M)/(n_e×F)",
  "Beräkna: m = (3,0 × 7200 × 107,9)/(1 × 96485) = 2330280/96485 = 24,15 g",
  "Svar: 24,2 g silver avsätts. Varje mol e⁻ (=96485 C) avsätter 1 mol Ag (=107,9 g). Industriell silverblästring"
],
706: [
  "Känd data: Zn-Cu-element; n=2; E°=1,10 V; aktuella konc: [Zn²⁺]=0,10; [Cu²⁺]=1,0 mol/L",
  "Nernst ekvation: E = E° − (0,0592/n)×log Q vid 25°C",
  "Beräkna Q: Q = [Zn²⁺]/[Cu²⁺] = 0,10/1,0 = 0,10",
  "Beräkna E: E = 1,10 − (0,0592/2)×log(0,10) = 1,10 − 0,0296×(−1) = 1,10 + 0,030 = 1,13 V"
],

# ── STÖKIOMETRI ───────────────────────────────────────────────────────────
801: [
  "Reaktion: 2H₂ + O₂ → 2H₂O; m(H₂)=4,0 g; M(H₂)=2,0 g/mol; M(H₂O)=18 g/mol",
  "Beräkna n(H₂): n = m/M = 4,0/2,0 = 2,0 mol H₂",
  "Molförhållande: 2 mol H₂ ger 2 mol H₂O → n(H₂O) = n(H₂) × (2/2) = 2,0 mol",
  "Beräkna massa: m(H₂O) = n × M = 2,0 × 18 = 36 g. Svar: 36 g vatten bildas"
],
802: [
  "Reaktion: CH₄ + 2O₂ → CO₂ + 2H₂O; m(CH₄)=16 g; M(CH₄)=16 g/mol; M(CO₂)=44 g/mol",
  "Beräkna n(CH₄): n = 16/16 = 1,0 mol",
  "Molförhållande: 1 mol CH₄ → 1 mol CO₂ (koefficient 1:1)",
  "Beräkna: m(CO₂) = 1,0 × 44 = 44 g. Svar: 44 g CO₂. Förbränning av metan: 1 C-atom in → 1 CO₂-molekyl ut"
],
803: [
  "Reaktion: N₂ + 3H₂ → 2NH₃; n(N₂)=2,0 mol; n(H₂)=4,5 mol",
  "Beräkna vad varje reagens räcker till: N₂ behöver 3× → räcker för 2,0×(3/1)=6,0 mol H₂",
  "Tillgängligt H₂=4,5 mol < 6,0 mol → H₂ är begränsande reagens",
  "n(NH₃) = n(H₂) × (2/3) = 4,5 × 2/3 = 3,0 mol. Svar: 3,0 mol NH₃ bildas; N₂ är i överskott"
],
804: [
  "Känd data: teoretisk massa = 10,0 g; faktisk (uppmätt) massa = 7,5 g",
  "Formel: Utbyte% = (faktisk massa / teoretisk massa) × 100%",
  "Beräkna: Utbyte = (7,5/10,0) × 100 = 75%",
  "Svar: 75% utbyte. Ej 100% pga: sidoreaktioner, ofullständig reaktion, förluster vid upparbetning"
],
805: [
  "Förbränningsanalys: CₓHᵧ + O₂ → CO₂ + H₂O. Mäter CO₂ och H₂O för att bestämma C och H",
  "Från CO₂: n(C) = n(CO₂). Från H₂O: n(H) = 2×n(H₂O) (2 H per H₂O)",
  "Exempel: 0,44 g CO₂ → n(C)=0,44/44=0,010 mol C; 0,18 g H₂O → n(H)=2×0,18/18=0,020 mol H",
  "Kvot n(H)/n(C) = 0,020/0,010 = 2 → empirisk formel CH₂ (om ingen annan info)"
],
806: [
  "Känd data: reaktion ger n mol gas; vid STP (0°C, 101,3 kPa): Vm = 22,4 L/mol",
  "Formel: V = n × Vm(STP)  (molvolym vid STP: 1 mol idealgas = 22,4 L)",
  "Exempel: n=0,50 mol gas → V = 0,50 × 22,4 = 11,2 L",
  "Svar: 11,2 L. OBS: vid SATP (25°C, 100 kPa): Vm=24,8 L/mol. Välj rätt standardtillstånd!"
],
}

# ═════════════════════════════════════════════════════════════════
# Now apply the replacements to the HTML file
# ═════════════════════════════════════════════════════════════════
count = 0
for prob_id, new_steps in NEW_STEPS.items():
    # Build the new steps array string
    steps_str = "steps:['" + "','".join(s.replace("'", "\\'") for s in new_steps) + "']"

    # Find the old steps for this problem id
    # Pattern: id:NNN, ... steps:[...] (possibly multiline)
    # Find the problem block
    id_marker = f"id:{prob_id},"
    idx = content.find(f" id:{prob_id},")
    if idx == -1:
        idx = content.find(f"\tid:{prob_id},")
    if idx == -1:
        print(f"  NOT FOUND: id:{prob_id}")
        continue

    # Find the steps:[ within this problem's block
    # The block ends at the next problem's id: or at ];
    block_end = content.find('\n  { id:', idx + 1)
    if block_end == -1:
        block_end = content.find('\n];', idx)

    block = content[idx:block_end]

    # Find steps in this block
    steps_match = re.search(r"steps:\[([^\]]*(?:'[^']*'[,\s]*)*)\]", block, re.DOTALL)
    if not steps_match:
        print(f"  NO steps found for id:{prob_id}")
        continue

    old_steps_str = steps_match.group(0)
    content = content[:idx] + content[idx:block_end].replace(old_steps_str, steps_str, 1) + content[block_end:]
    count += 1

print(f'\nReplaced steps for {count}/{len(NEW_STEPS)} problems')

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Saved.')
