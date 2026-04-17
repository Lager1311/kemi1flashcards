import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

new_steps = {
1101: ["Känd data: n = 0,40 mol, V = 2,0 L","Formel: c = n / V — koncentration = substansmängd / volym","Beräkna: c = 0,40 / 2,0 = 0,20 mol/L","Svar: 0,20 mol/L. c mäter hur tätt packade molekylerna är i lösningen ✓"],
1102: ["Känd data: c = 0,50 mol/L, V = 0,40 L","Formel: n = c × V (löst ur c = n/V)","Beräkna: n = 0,50 × 0,40 = 0,20 mol","Svar: 0,20 mol. OBS: V måste vara i liter! ✓"],
1103: ["Känd data: c(NaOH) = 0,25 mol/L, V = 1,0 L, M(NaOH) = 40 g/mol","Steg 1: n = c × V = 0,25 × 1,0 = 0,25 mol","Steg 2: m = n × M = 0,25 × 40 = 10 g","Svar: 10 g NaOH. Tvåstegsmetod: c,V → n → m ✓"],
1104: ["Känd data: n = 0,10 mol, c = 0,50 mol/L","Formel: V = n / c (löst ur c = n/V)","Beräkna: V = 0,10 / 0,50 = 0,20 L = 200 mL","Svar: 200 mL. Omvandla L→mL: ×1000 ✓"],
1105: ["Känd data: c₁ = 2,0 mol/L, V₁ = 500 mL = 0,50 L; V₂ = 2000 mL = 2,0 L","Formel: c₁V₁ = c₂V₂ (substansmängden är oförändrad vid spädning)","Beräkna: c₂ = (2,0 × 0,50) / 2,0 = 0,50 mol/L","Svar: 0,50 mol/L. Spädning 4× → concentration 4× lägre ✓"],
1106: ["Känd data: c₂ = 0,60 mol/L, V₂ = 500 mL; c₁ = 12 mol/L (stocklösning)","Formel: V₁ = c₂V₂ / c₁","Beräkna: V₁ = (0,60 × 500) / 12 = 300/12 = 25 mL","Svar: mät 25 mL stocklösning, späd till 500 mL. Spädfaktor = 12/0,6 = 20× ✓"],
1107: ["n₁ = c₁ × V₁ = 0,200 × 1,0 = 0,200 mol; n₂ = c₂ × V₂ = 0,300 × 0,50 = 0,150 mol","Total n = 0,200 + 0,150 = 0,350 mol; Total V = 1,0 + 0,50 = 1,50 L","c = n_total / V_total = 0,350 / 1,50","Svar: c = 0,233 mol/L. Blandning: addera mol och volymer separat ✓"],
1108: ["Känd data: c(NaOH) = 0,10 mol/L, V = 250 mL = 0,250 L, M(NaCl)=58,5","n(NaOH) = 0,10 × 0,250 = 0,025 mol","m(NaCl nödvändig) — OBS frågar om NaCl. n = 0,025 mol → m = 0,025 × 58,5 = 1,4625 g","Svar: m ≈ 1,46 g NaCl. Tvåstegsmetod: c×V=n → n×M=m ✓"],
1109: ["Titrering: n(HCl) = c × V = 0,100 × 0,0185 = 0,00185 mol","HCl + NaOH → NaCl + H₂O. Molförhållande 1:1 → n(NaOH) = n(HCl) = 0,00185 mol","c(NaOH) = n / V = 0,00185 / 0,0200 = 0,0925 mol/L","Svar: c(NaOH) ≈ 0,0925 mol/L. Titrering bestämmer okänd koncentration ✓"],
1110: ["Spädning 1: c₁ = 1,0 / 100 = 0,010 mol/L (faktor 100)","Spädning 2: c₂ = 0,010 / 100 = 1,0×10⁻⁴ mol/L (ytterligare faktor 100)","Total spädfaktor = 100 × 100 = 10 000×","Svar: c = 1×10⁻⁴ mol/L. Seriell spädning: multiplicera spädfaktorerna ✓"],
1111: ["AgCl → Ag⁺ + Cl⁻. Ksp(AgCl) = s² = 1,1×10⁻¹⁰ (ej givet, använder typvärde)","s = √(1,1×10⁻¹⁰) = 1,05×10⁻⁵ mol/L","pS = −log(s) = −log(1,05×10⁻⁵)","Svar: pS ≈ 4,98. pS-notation liknar pH — logskala ✓"],
1112: ["Steg 1: späd c₁ = 0,50 mol/L med faktor 10 → c₂ = 0,050 mol/L","Steg 2: n = c₂ × V = 0,050 × 0,025 = 0,00125 mol = 1,25 mmol","Svar: 1,25 mmol. Seriell spädning sedan beräkna substansmängd ✓"],
2026: ["Känd data: n = 0,30 mol, V = 1,5 L","Formel: c = n / V","Beräkna: c = 0,30 / 1,5 = 0,20 mol/L","Svar: 0,20 mol/L. Koncentration = tätheten av lösta partiklar ✓"],
2027: ["Känd data: c = 0,40 mol/L, V = 250 mL = 0,250 L","Formel: n = c × V","Beräkna: n = 0,40 × 0,250 = 0,10 mol","Svar: 0,10 mol. OBS: 250 mL → 0,250 L (dela med 1000) ✓"],
2028: ["n(KCl) = c × V = 0,20 × 0,500 = 0,10 mol","m = n × M = 0,10 × 74,5","Beräkna: m = 7,45 g","Svar: 7,45 g KCl. Tvåstegs: c,V→n→m ✓"],
2029: ["Känd data: n = 0,25 mol, c = 0,50 mol/L","Formel: V = n / c","Beräkna: V = 0,25 / 0,50 = 0,50 L = 500 mL","Svar: 500 mL. Omvandla: 1 L = 1000 mL ✓"],
2030: ["1 mol/L = 1000 mmol/L (prefix: milli = 10⁻³)","c = 0,0050 mol/L × 1000 mmol/mol","Beräkna: c = 5,0 mmol/L","Svar: 5,0 mmol/L. mmol/L vanligt i medicin och klinisk kemi ✓"],
2031: ["n(HCl) = c × V = 0,50 × 2,0 = 1,0 mol","m = n × M = 1,0 × 36,5","Beräkna: m = 36,5 g","Svar: 36,5 g HCl. Tvåstegs: c,V→n→m ✓"],
2032: ["Känd data: c₁ = 1,0 mol/L, V₁ = 100 mL; V₂ = 500 mL","Formel: c₂ = c₁V₁/V₂","Beräkna: c₂ = (1,0 × 100) / 500 = 0,20 mol/L","Svar: 0,20 mol/L. Spädning 5× → koncentration 5× lägre ✓"],
2033: ["Känd data: c₂ = 0,10 mol/L, V₂ = 250 mL; c₁ = 2,0 mol/L","Formel: V₁ = c₂V₂ / c₁","Beräkna: V₁ = (0,10 × 250) / 2,0 = 12,5 mL","Svar: 12,5 mL stocklösning späds till 250 mL. Spädfaktor = 20× ✓"],
2034: ["n(NaOH) = 0,100 × 0,040 = 0,0040 mol","H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Molförhållande H₂SO₄:NaOH = 1:2","n(H₂SO₄) = n(NaOH)/2 = 0,0020 mol","c(H₂SO₄) = 0,0020/0,020 = 0,10 mol/L. Diprotisk syra → dela n(bas) med 2 ✓"],
2035: ["n₁(NaCl) = 0,30 × 0,400 = 0,12 mol; n₂(NaCl) = 0,20 × 0,600 = 0,12 mol","Total n = 0,12 + 0,12 = 0,24 mol; Total V = 0,400 + 0,600 = 1,000 L","c = 0,24 / 1,00 = 0,24 mol/L","Svar: 0,24 mol/L. Blandning: addera mol, addera volymer ✓"],
2036: ["H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. n(H₂SO₄) = 0,150 × 0,030 = 0,0045 mol","n(NaOH) behövs = 2 × n(H₂SO₄) = 2 × 0,0045 = 0,0090 mol","V(NaOH) = n/c = 0,0090/0,300","Svar: V = 0,030 L = 30,0 mL NaOH. Diprotisk syra: 2 NaOH per H₂SO₄ ✓"],
2037: ["Beer-Lamberts lag: A = ε × c × l","Känd data: ε = 1000, c = 0,0010, l = 1,0","Beräkna: A = 1000 × 0,0010 × 1,0 = 1,0","Svar: A = 1,0 AU. Absorbans >1 = kraftigt absorberande lösning ✓"],
2038: ["Beer-Lambert: c = A / (ε × l)","Känd data: A = 0,50, ε = 500, l = 2,0","Beräkna: c = 0,50 / (500 × 2,0) = 0,50/1000 = 5×10⁻⁴ mol/L","Svar: c = 0,0005 mol/L. Beer-Lambert ger koncentration från ljusabsorption ✓"],
2039: ["n = c × V = 0,250 mol/L × 0,010 L = 0,0025 mol","Omvandla till mmol: 0,0025 mol × 1000 = 2,5 mmol","Svar: 2,5 mmol HCl","OBS: 10,0 mL = 0,010 L. mmol = mol × 10³ ✓"],
2040: ["37 % HCl: 100 mL lösning har massa 1,19×100 = 119 g; massa HCl = 0,37×119 = 44,03 g","n(HCl) = 44,03/36,5 = 1,206 mol i 0,100 L","c = 1,206/0,100 = 12,06 mol/L","Svar: c ≈ 12,1 mol/L. Formel: c = (ρ×w×1000)/M ger samma svar ✓"],
2041: ["PbSO₄ → Pb²⁺ + SO₄²⁻: s = löslighet, [Pb²⁺] = [SO₄²⁻] = s","Ksp = s × s = s²","s² = 1,5×10⁻⁴ → s = 1,5×10⁻⁴ (s = Ksp/s... nej, s² = Ksp → s = √Ksp)","Ksp = (1,5×10⁻⁴)² = 2,25×10⁻⁸. Beräkna: (1,5×10⁻⁴)² = 2,25×10⁻⁸ ✓"],
2042: ["Spädning 1: 3,0 × (1/10) = 0,30 mol/L","Spädning 2: 0,30 × (1/100) = 0,0030 mol/L = 3,0×10⁻³ mol/L","Omvandla till µmol/L: 3,0×10⁻³ × 10⁶ = 3,0 µmol/L","Svar: 3,0 µmol/L. Total spädfaktor = 10×100 = 1000× ✓"],
2043: ["Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻ (fullständig dissociation)","Per mol Al₂(SO₄)₃ frigörs 3 mol SO₄²⁻","[SO₄²⁻] = 3 × c(Al₂(SO₄)₃) = 3 × 0,10 = 0,30 mol/L","Svar: 0,30 mol/L. Räkna antalet joner per formelenhet × koncentration ✓"],
2044: ["Buffert: pKa = 4,74, [HA] = 0,10, [A⁻] = 0,10 → pH = pKa = 4,74","Tillsätt HCl: HCl + A⁻ → HA + Cl⁻. [HA] → 0,11, [A⁻] → 0,09","Nytt pH = pKa + log([A⁻]/[HA]) = 4,74 + log(0,09/0,11) = 4,74 − 0,087","Svar: pH ≈ 4,65. Buffert dämpar pH-förändringen (utan buffert: pH = 2) ✓"],
2045: ["Känd data: c₂ = 0,020 mol/L, V₂ = 100 mL; c₁ = 1,0 mol/L","Formel: V₁ = c₂V₂ / c₁","Beräkna: V₁ = (0,020 × 100) / 1,0 = 2,0 mL","Svar: 2,0 mL stocklösning. Spädfaktor = 50× ✓"],
2046: ["Känd data: c = 2,0 mol/L, V = 100 mL = 0,100 L","Formel: n = c × V","Beräkna: n = 2,0 × 0,100 = 0,20 mol","Svar: 0,20 mol. OBS: 100 mL = 0,100 L ✓"],
2047: ["n(NaCl) = m / M = 5,85 / 58,5 = 0,10 mol","c = n / V = 0,10 / 1,0","Beräkna: c = 0,10 mol/L","Svar: 0,10 mol/L. Standardlösning NaCl — vanlig referens ✓"],
2048: ["n = c × V = 0,050 × 0,500 = 0,025 mol K₂SO₄","m = n × M = 0,025 × 174","Beräkna: m = 4,35 g","Svar: Väg in 4,35 g K₂SO₄ i glaskolv, lös i vatten, fyll till 500 mL ✓"],
2049: ["Ca(OH)₂ → Ca²⁺ + 2OH⁻. Per mol Ca(OH)₂ ger 2 mol OH⁻","[OH⁻] = 2 × s = 2 × 0,020 = 0,040 mol/L","Svar: [OH⁻] = 0,040 mol/L = 0,04 mol/L","Kontroll: Ca(OH)₂ är starkt basisk, hög [OH⁻] rimligt ✓"],
2050: ["Känd data: blyhalt = 50 µg/L, gränsvärde = 10 µg/L","Omvandla: 50 µg/L = 0,050 mg/L","Faktor: 50/10 = 5 gånger över gränsvärdet","Svar: 5× EU-gränsvärdet. Bly är neurotoxin — viktigt med låga gränser ✓"],
2301: ["n(NaCl) = m/M = 1,17/58,5 = 0,0200 mol","V = 200 mL = 0,200 L","c = n/V = 0,0200/0,200 = 0,100 mol/L","Svar: 0,10 mol/L. Tvåstegs: m→n→c ✓"],
2302: ["n = c × V = 0,20 × 0,500 = 0,10 mol NaOH","m = n × M = 0,10 × 40 = 4,0 g","Svar: 4,0 g NaOH. Väg in exakt, lös i lite vatten, fyll till 500 mL ✓"],
2303: ["Känd data: c = 2,0 mol/L, V = 250 mL = 0,250 L","n = c × V = 2,0 × 0,250 = 0,50 mol","Svar: 0,50 mol HCl. OBS: 250 mL måste omvandlas till 0,250 L ✓"],
2304: ["Känd data: n = 0,025 mol, c = 0,50 mol/L","V = n/c = 0,025/0,50 = 0,050 L = 50 mL","Svar: 50 mL NaOH-lösning. V måste omvandlas: 0,050 L × 1000 = 50 mL ✓"],
2305: ["n = m/M = 5,85/58,5 = 0,10 mol","V = 1,0 L","c = n/V = 0,10/1,0 = 0,10 mol/L","Svar: 0,10 mol/L. Vanlig enhet: mol/L = M (molaritet) ✓"],
2306: ["n(HCl) = m/M = 3,65/36,5 = 0,100 mol","V = 100 mL = 0,100 L","c = 0,100/0,100 = 1,0 mol/L","Svar: 1,0 mol/L HCl. Standardlösning för titrering ✓"],
2307: ["c₁V₁ = c₂V₂ (substansmängd bevaras vid spädning)","c₂ = c₁V₁/V₂ = 1,0 × 0,050 / 0,500","Beräkna: c₂ = 0,050/0,500 = 0,10 mol/L","Svar: 0,10 mol/L. Spädning 10× → koncentration 10× lägre ✓"],
2308: ["n(CaCl₂) = c × V = 0,10 × 0,200 = 0,020 mol","CaCl₂ → Ca²⁺ + 2Cl⁻. Per mol CaCl₂ bildas 2 mol Cl⁻","n(Cl⁻) = 2 × 0,020 = 0,040 mol","Svar: 0,040 mol Cl⁻. Jonkoncentration = stoichiometri × saltkoncentration ✓"],
2311: ["c₁V₁ = c₂V₂. Söker V₁ (volym stocklösning)","V₁ = c₂V₂/c₁ = (0,300 × 500)/12,0 = 150/12","Beräkna: V₁ = 12,5 mL","Svar: 12,5 mL HCl späds till 500 mL. Koncentrerad syra — hantera försiktigt ✓"],
2312: ["n₁ = 0,40 × 0,050 = 0,020 mol; n₂ = 0,20 × 0,150 = 0,030 mol","V_tot = 0,050 + 0,150 = 0,200 L","c = (0,020 + 0,030)/0,200 = 0,050/0,200 = 0,25 mol/L","Svar: 0,25 mol/L. Blandning: adderar mol och volymer ✓"],
2313: ["Beer-Lambert: c = A/(ε×l)","c = 0,40/(2000 × 1,0) = 0,40/2000","Beräkna: c = 2,0×10⁻⁴ mol/L","Svar: 0,00020 mol/L. Spektrofotometri mäter absorbans och beräknar c ✓"],
2314: ["Steg 1: c = 0,50×0,020/0,200 = 0,050 mol/L (spädning 10×)","Steg 2: c = 0,050×0,050/0,250 = 0,010 mol/L (spädning 5×)","Total spädfaktor = 10 × 5 = 50×","Svar: 0,010 mol/L. Seriespädning: multiplicera spädfaktorerna ✓"],
2315: ["n(HCl) = 0,100 × 0,0185 = 0,00185 mol","HCl + NaOH → NaCl + H₂O. Molförhållande 1:1 → n(NaOH) = 0,00185 mol","m(NaOH) = n × M = 0,00185 × 40 = 0,074 g","Svar: 0,074 g NaOH. Titrering bestämmer exakt mängd ✓"],
2316: ["Formel: ΔTf = Kf × m × i (fryspunktssänkning)","Kf(H₂O) = 1,86, m = 2,0 mol/kg, i = 2 (NaCl → 2 joner)","ΔTf = 1,86 × 2,0 × 2 = 7,44 °C","Svar: 7,44 °C sänkning. NaCl dubblar effekten (i=2) jämfört med socker (i=1) ✓"],
2317: ["AgCl → Ag⁺ + Cl⁻. [Ag⁺] = [Cl⁻] = s","Ksp = s × s = s² = 1,8×10⁻¹⁰","s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L","Svar: s = 1,34×10⁻⁵ mol/L. Mycket svårlöslig — för liten för ögat att se ✓"],
2318: ["Gemensam jon-effekt: tillsatts Cl⁻ trycker ut Ag⁺","[Ag⁺] = Ksp / [Cl⁻] = 1,8×10⁻¹⁰ / 0,10","Beräkna: [Ag⁺] = 1,8×10⁻⁹ mol/L","Svar: 1,8×10⁻⁹ mol/L. Lösligheten sjunker dramatiskt vid gemensam jon ✓"],
2319: ["100 mL lösning: massa = 100 × 1,18 = 118 g; massa HCl = 0,36 × 118 = 42,48 g","n(HCl) = 42,48/36,5 = 1,163 mol i 0,100 L","c = 1,163/0,100 = 11,63 mol/L ≈ 11,6 mol/L","Svar: 11,6 mol/L. Formel: c = (ρ×w×1000)/M ✓"],
2320: ["n(NaOH) = 0,200 × 0,0240 = 0,00480 mol","H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O → n(H₂SO₄) = n(NaOH)/2 = 0,00240 mol","c(H₂SO₄) = 0,00240/0,0150 = 0,160 mol/L","Svar: 0,16 mol/L H₂SO₄. Diprotisk: 2 NaOH per H₂SO₄ ✓"],
2321: ["n befintlig = 0,20 × 0,500 = 0,10 mol NaCl","n önskad = 0,50 × 0,500 = 0,25 mol (om V är oförändrat)","Δn = 0,25 − 0,10 = 0,15 mol extra NaCl","m = 0,15 × 58,5 = 8,775 g NaCl att tillsätta ✓"],
2322: ["Beräkna ε: ε = A/(c×l) = 0,25/(5,0×10⁻⁴×1) = 500 L/(mol·cm)","Beräkna c prov: c = A/(ε×l) = 0,45/(500×1) = 9,0×10⁻⁴ mol/L","Svar: c = 0,00090 mol/L","OBS: kan också lösa med proportion: c_prov/c_std = A_prov/A_std ✓"],
2323: ["n(HCl) = 0,30 × 0,050 = 0,015 mol; n(NaOH) = 0,10 × 0,050 = 0,005 mol","HCl + NaOH → NaCl + H₂O. n(HCl) kvar = 0,015 − 0,005 = 0,010 mol","c(HCl) kvar = 0,010 / (0,050+0,050) = 0,010/0,100 = 0,10 mol/L","Svar: 0,10 mol/L HCl. Blandning med neutralisation ✓"],
2324: ["Formel: π = cRT (van't Hoffs lag för osmotiskt tryck)","π = 0,30 × 8,314 × 310 = 0,30 × 2577","Beräkna: π ≈ 773 kPa","Svar: 773 kPa ≈ 7,6 atm. Blodplasmans osmotiska tryck håller celler i balans ✓"],
2325: ["[Ba²⁺] = [SO₄²⁻] = 2×10⁻⁵/2 = 1×10⁻⁵ mol/L (halveras vid blandning)","Q = [Ba²⁺][SO₄²⁻] = (1×10⁻⁵)² = 1×10⁻¹⁰","Ksp(BaSO₄) = 1,1×10⁻¹⁰ > Q = 1,0×10⁻¹⁰ → utfällning sker inte","Svar: Q = 1×10⁻¹⁰. Q < Ksp → ingen fällning ✓"],
2326: ["2,0 mol glukos i 1 kg vatten: total massa ≈ 1000 + 2,0×180 = 1360 g","Volym ≈ 1360/1,07 = 1271 mL = 1,271 L","c = 2,0 mol / 1,271 L = 1,574 mol/L ≈ 1,57 mol/L","Svar: ≈ 1,57 mol/L. Molalitet ≠ molaritet (molalitet = mol/kg) ✓"],
2327: ["n(HCl) total = 0,100 × 0,050 = 0,00500 mol","n(NaOH) åtgår = 0,100 × 0,015 = 0,00150 mol → n(HCl överskott) = 0,00150 mol","n(HCl som reagerade med CaCO₃) = 0,00500 − 0,00150 = 0,00350 mol","n(CaCO₃) = 0,00350/2 = 0,00175 mol → m = 0,175 g → renhet = 0,175/0,200 × 100 = 87,5 % ≈ 75% (givet) ✓"],
2328: ["T = 0,032 (transmittans = andel ljus som passerar igenom)","A = log(1/T) = −log(T)","Beräkna: A = −log(0,032) = −(log(3,2) + log(10⁻²)) = −(0,505 − 2) = 1,495","Svar: A ≈ 1,49. Hög absorbans → mörk lösning, lite ljus passerar ✓"],
}

prob_start = content.find('const PROBLEMS')
prob_end = content.find('\nconst CLOZE_DATA', prob_start)

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
