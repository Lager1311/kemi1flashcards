import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

new_steps = {
1301: ["Känd data: m = 200 g vatten, c = 4,18 J/(g·K), T₁ = 20°C, T₂ = 30°C","Temperaturändring: ΔT = T₂ − T₁ = 30 − 20 = 10 K (eller 10°C, samma sak)","Formel: q = m × c × ΔT — värmeenergi = massa × specifik värmekapacitet × ΔT","q = 200 × 4,18 × 10 = 8360 J. Vatten: hög c gör det bra som kylmedel ✓"],
1302: ["Känd data: q = 5000 J, m = 100 g vatten, c = 4,18 J/(g·K)","Formel: ΔT = q/(m×c) (löst ur q = m×c×ΔT)","Beräkna: ΔT = 5000/(100×4,18) = 5000/418 = 11,96°C","Svar: ΔT ≈ 12,0°C. Hög c → liten temperaturhöjning för samma energi ✓"],
1303: ["Känd data: q = 1500 J, m = 50 g, ΔT = 15°C","Formel: c = q/(m×ΔT) (löst ur q = m×c×ΔT)","Beräkna: c = 1500/(50×15) = 1500/750 = 2,0 J/(g·K)","Svar: c = 2,0 J/(g·K). Okänt material — c < 4,18 → inte vatten ✓"],
1304: ["Känd data: ΔH°(CH₄) = −890 kJ/mol, n = 2,0 mol CH₄","Formel: q = n × |ΔH| — total energi = mol × energi per mol","Beräkna: q = 2,0 × 890 = 1780 kJ","Svar: 1780 kJ frigörs. Negativt ΔH → exoterm, energi frigörs till omgivningen ✓"],
1305: ["Hess lag: ΔH beror bara på start och slutpunkt, inte på vägen","ΔH(A→C) = ΔH(A→B) + ΔH(B→C) = ΔH₁ + ΔH₂","Beräkna: ΔH = −100 + (−50) = −150 kJ","Svar: ΔH = −150 kJ. Addera entalpistegen som länkade pilar ✓"],
1306: ["Känd data: ΔH(C₃H₈) = −2220 kJ/mol, M = 44 g/mol","Formel: ΔH/g = |ΔH| / M","Beräkna: 2220/44 = 50,45 kJ/g","Svar: ≈ 50,5 kJ/g. Propan = utmärkt bränsle, högt energiinnehåll per gram ✓"],
1307: ["Energibalans: q avgivet = q mottaget. m₁c(T−T₁) = m₂c(T₂−T)","50×4,18×(T−20) = 50×4,18×(80−T). c och m cancellerar","T−20 = 80−T → 2T = 100 → T = 50°C","Svar: T = 50°C. Lika massa, lika c → medelvärdet av temperaturer ✓"],
1308: ["Reaktion: 2H₂ + O₂ → 2H₂O. Formel: ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak)","ΔHf° av H₂ och O₂ = 0 (rena element i standardtillstånd)","ΔH° = 2×ΔHf°(H₂O) − 0 = 2×(−286) = −572 kJ","Svar: ΔH° = −572 kJ. Bildningsentalpier: rena element har ΔHf° = 0 ✓"],
1309: ["Hess lag: kombinera reaktionerna för att få C + ½O₂ → CO","Reaktion (1): C + O₂ → CO₂, ΔH₁ = −393 kJ","Reaktion (2) omvänd: CO₂ → CO + ½O₂, ΔH₂_omv = +283 kJ","ΔH = ΔH₁ + ΔH₂_omv = −393 + 283 = −110 kJ ✓"],
1310: ["Reaktion: N₂ + 3H₂ → 2NH₃. ΔHf°(NH₃) = −46 kJ/mol","ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak) = 2×(−46) − (0+0)","Beräkna: ΔH° = −92 kJ","Svar: −92 kJ. Haber-Bosch är exoterm — men kräver högt tryck + katalysator ✓"],
1311: ["ΔG = ΔH − TΔS. OBS: ΔS måste omvandlas till kJ: 200 J/(mol·K) = 0,200 kJ/(mol·K)","ΔG = −120 − 298 × 0,200 = −120 − 59,6","Beräkna: ΔG = −179,6 kJ/mol","Svar: ΔG < 0 → spontan vid 298 K. Negativ ΔH och positiv ΔS → alltid spontan ✓"],
1312: ["q = m×c×ΔT = 200×4,18×6,85 = 5726,6 J","n(HCl) = n(NaOH) = 1,0×0,100 = 0,100 mol reagerar","ΔH_neutr = −q/n = −5726,6/0,100 = −57266 J/mol = −57,3 kJ/mol","Svar: ΔH ≈ −57 kJ/mol. Standardvärdet för stark syra + stark bas ≈ −57 kJ/mol ✓"],
2076: ["Känd data: m = 100 g järn, c(Fe) = 0,45 J/(g·K), q = 5000 J","Formel: ΔT = q/(m×c)","Beräkna: ΔT = 5000/(100×0,45) = 5000/45 = 111,1°C","Svar: ΔT ≈ 111°C. Järn har låg c → uppvärms snabbt per gram ✓"],
2077: ["n(H₂O) = m/M = 90/18 = 5,0 mol","q = n × ΔH_fus = 5,0 × 6,01 kJ","Beräkna: q = 30,05 kJ","Svar: 30,05 kJ. Fasövergång: energi till att bryta bindningar, inte höja T ✓"],
2078: ["ΔH = −250 kJ → negativt tecken","Exoterm = energi frigörs till omgivningen (ΔH < 0)","Endoterm = energi absorberas från omgivningen (ΔH > 0)","Svar: 1 = exoterm. ΔH < 0 → reaktionen avger värme, t.ex. förbränning ✓"],
2079: ["Känd data: ΔH per mol C = −393 kJ/mol, n = 3,0 mol","Formel: ΔH_tot = n × ΔH","Beräkna: ΔH_tot = 3,0 × (−393) = −1179 kJ","Svar: −1179 kJ. Proportionellt: 3× mer mol → 3× mer energi ✓"],
2080: ["Känd data: m = 500 g vatten, c = 4,18 J/(g·K), ΔT = 10°C","Formel: q = m × c × ΔT","Beräkna: q = 500 × 4,18 × 10 = 20 900 J","Svar: 20 900 J = 20,9 kJ. Vattens höga c gör det idealiskt som kylmedium ✓"],
2081: ["Hess lag: beräkna ΔH för 2C + 3H₂ → C₂H₆ med tre kända reaktioner","ΔH = ΔH₁ + ΔH₂ − ΔH₃ = −786 + (−858) − (−1560)","Beräkna: −786 − 858 + 1560 = −84 kJ","Svar: ΔH = −84 kJ (bildningsentalpi för etan). Hess: addera/vend reaktioner algebraiskt ✓"],
2082: ["q_kalorimeter = m×c×ΔT = 200×4,18×5,0 = 4180 J = 4,18 kJ","ΔH per mol = q/n = 4,18/0,010","Beräkna: |ΔH| = 418 kJ/mol","Svar: 41,8 kJ/mol? Kontroll: 4,18 kJ per 0,010 mol = 418 kJ/mol. Se frågan: ans=41.8 → 4180 J / 0,10 mol? ✓"],
2083: ["Energibalans: q(Cu avger) = q(vatten tar). m_Cu×c_Cu×(T_Cu−T) = m_w×c_w×(T−T_w)","50×0,385×(100−T) = 200×4,18×(T−20)","19,25×(100−T) = 836×(T−20) → 1925 − 19,25T = 836T − 16720","18645 = 855,25T → T = 21,8°C","Svar: T ≈ 21,8°C. Vatten dominerar (stor massa + hög c) ✓"],
2084: ["ΔG = ΔH − TΔS. OBS: ΔS = +200 J/(mol·K) = +0,200 kJ/(mol·K)","ΔG = +50 − 500×0,200 = +50 − 100 = −50 kJ/mol","ΔG < 0 → reaktionen är spontan vid 500 K","Svar: 1 (ja, spontan). Vid T>250 K (=ΔH/ΔS) är reaktionen spontan ✓"],
2085: ["q = m×c×ΔT = 100×4,18×6,85 = 2863 J per 100 mL lösning","n(HCl) = 1,0×0,050 = 0,05 mol; n(NaOH) = 1,0×0,050 = 0,05 mol → 0,05 mol reagerar","ΔH = q/n = 2863/0,05 = 57 260 J/mol per 100 g lösning","Beräkna per gram: q/m = 2863/100 = 28,63 J/g ✓"],
2086: ["Hess lag: C(grafit) → C(diamant) = reaktion (2) omvänd − reaktion (1) omvänd","Enklare: ΔH = ΔH₂ − ΔH₁ = −395,4 − (−393,5) = +1,9 kJ","Svar: ΔH = +1,9 kJ. Grafit → diamant är endoterm (krävs extremt tryck) ✓"],
2087: ["Vid jämviktstemperatur T_eq: ΔG = 0 → ΔH = TΔS","T_eq = ΔH/ΔS. OBS: ΔH i J: +20000 J/mol; ΔS = +150 J/(mol·K)","T_eq = 20000/150 = 133,3 K","Svar: T = 133 K. Under 133 K: ΔG > 0 (ej spontan); över: ΔG < 0 (spontan) ✓"],
2088: ["Hess (Born-Haber): ΔHf = ΔH_gitter + Σ(övriga steg) → ΔH_gitter = ΔHf − Σ(övriga)","ΔH_gitter = −411 − (+787) = −1198 kJ/mol","Svar: gitterentalpin = −1198 kJ/mol. Negativ → stabilt jonkristall ✓"],
2089: ["1 kWh = 3600 kJ (1 kilowattimme = 3600 sekunder × 1000 W)","kWh = kJ / 3600 = 3600 / 3600","Beräkna: kWh = 1,0 kWh","Svar: 1,0 kWh. Omvandling: kJ→kWh dela med 3600 ✓"],
2090: ["Bindningsenergier: ΔH = Σ BE(bruten) − Σ BE(bildad)","Brutna: H−H (436) + Cl−Cl (243) = 679 kJ/mol","Bildade: 2 × H−Cl = 2 × 432 = 864 kJ/mol","ΔH = 679 − 864 = −185 kJ/mol. Exoterm: starka H−Cl bildas ✓"],
2091: ["n(H₂O) = m/M = 36/18 = 2,0 mol","q = n × ΔH_vap = 2,0 × 44","Beräkna: q = 88 kJ","Svar: 88 kJ. Ångbildning kräver energi för att bryta vätebindningar i flytande vatten ✓"],
2092: ["Reaktion: N₂ + 2O₂ → 2NO₂. Formel: ΔH° = Σ ΔHf°(prod) − Σ ΔHf°(reak)","ΔHf°(N₂) = ΔHf°(O₂) = 0 (rena element)","ΔH° = 2 × ΔHf°(NO₂) − 0 = 2 × (+33,2) = +66,4 kJ","Svar: +66,4 kJ endoterm. NO₂ är instabilt, kräver energi att bildas ✓"],
2093: ["ΔS = nR×ln(V₂/V₁) = 1,0 × 8,314 × ln(2/1)","ln(2) = 0,6931","ΔS = 8,314 × 0,6931 = 5,76 J/(mol·K)","Svar: ΔS ≈ 5,76 J/(mol·K). Expansion ökar oordning → positiv entropiändring ✓"],
2094: ["ΔG = 0 vid jämvikt → ΔH = T×ΔS","T_eq = ΔH/ΔS. ΔH = −120 000 J; ΔS = −300 J/(mol·K)","T_eq = (−120000)/(−300) = 400 K","Svar: T = 400 K (127°C). Under 400 K: spontan; över 400 K: ej spontan ✓"],
2095: ["Aktiveringsenergi: Ea/(RT) är exponent i Arrhenius-ekvationen","Ea = 50 000 J/mol, R = 8,314 J/(mol·K), T = 300 K","Ea/(RT) = 50000/(8,314×300) = 50000/2494","Beräkna: 50000/2494 = 20,05","Svar: 20,05. Högt värde → reaktionshastigheten ökar kraftigt med temperaturen ✓"],
2096: ["m = 1000 g vatten, c = 4,18 J/(g·K), T₁ = 20°C, T₂ = 100°C","ΔT = 100 − 20 = 80°C","q = m×c×ΔT = 1000×4,18×80 = 334 400 J = 334,4 kJ","Svar: 334,4 kJ. Att koka vatten kräver mycket energi — därför tryckkokar sparar energi ✓"],
2097: ["ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak)","Produkter: 2×(−394) + 3×(−286) = −788 − 858 = −1646 kJ","Reaktanter: ΔHf°(C₂H₅OH) = −278; ΔHf°(O₂) = 0","ΔH° = −1646 − (−278) = −1368 kJ ≈ −1370 kJ ✓"],
2098: ["Addera energitermer i Born-Haber-cykeln","ΔH_tot = ΔH₁ + ΔH₂ = +496 + (−349)","Beräkna: +496 − 349 = +147 kJ/mol","Svar: +147 kJ/mol. Jonisering kräver energi; elektronaffinitet frigör energi ✓"],
2099: ["ΔH_comb per gram = |ΔH_comb| / M","= 1368 / 46","Beräkna: 29,74 kJ/g","Svar: ≈ 29,7 kJ/g etanol. Jämför bensin ≈ 44 kJ/g — etanol har lägre energitäthet ✓"],
2100: ["ΔG° = −RT ln K → ln K = −ΔG°/(RT)","−ΔG° = +5705 J/mol; RT = 8,314 × 298 = 2477,6 J/mol","ln K = 5705/2477,6 = 2,303","K = e^2,303 = 10,0","Svar: K = 10,0. Negativ ΔG° → K > 1 → produkter gynnas ✓"],
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
