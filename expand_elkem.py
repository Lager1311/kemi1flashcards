import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

new_steps = {
1601: ["Oxidationstal bestäms av reglerna: monoatomig jon = laddning; O = −2; H = +1","Fe₂O₃: låt Fe = x. 2x + 3×(−2) = 0 → 2x = 6 → x = +3","Svar: Fe har oxidationstal +3 i Fe₂O₃","Kontroll: 2×(+3) + 3×(−2) = 6 − 6 = 0 (neutral förening) ✓"],
1602: ["Reduktion = minskat oxidationstal = upptagning av elektroner","Oxidation = ökat oxidationstal = avgivning av elektroner","Cu²⁺ + 2e⁻ → Cu: Cu²⁺ reduceras (tar emot elektroner)","Svar: Cu²⁺ reduceras. Katoden = reduktion i elektrokemisk cell ✓"],
1603: ["E°cell = E°katod − E°anod (katod = högre potential)","E°(Zn²⁺/Zn) = −0,76 V; E°(Cu²⁺/Cu) = +0,34 V","Katod = Cu (högre potential); anod = Zn","E°cell = +0,34 − (−0,76) = 0,34 + 0,76 = 1,10 V ✓"],
1604: ["Faradays lag: m = (I×t×M)/(n×F)","Q = I×t = 2,0 × 3600 = 7200 C. n(e⁻) = 2 (Cu²⁺ + 2e⁻ → Cu)","m = Q×M/(n×F) = 7200 × 63,5/(2 × 96500) = 457200/193000","m = 2,37 g Cu ✓"],
1605: ["ΔG° = −nFE°. n = 2, F = 96500, E° = 1,10 V","ΔG° = −2 × 96500 × 1,10 = −212300 J = −212,3 kJ","Svar: ΔG° = −212 kJ. Negativt → spontan galvanisk reaktion ✓"],
2151: ["E°cell = E°katod − E°anod. Katod = högre potential (Ag), anod = Ni","E°(Ag⁺/Ag) = +0,80 V (katod); E°(Ni²⁺/Ni) = −0,25 V (anod)","E°cell = 0,80 − (−0,25) = 0,80 + 0,25 = 1,05 V","Svar: E°cell = 1,05 V. Positiv E° → spontan galvanisk cell ✓"],
2152: ["Oxidationstal i Fe₂O₃: låt Fe = x. O har alltid −2 i föreningar","2x + 3×(−2) = 0 (neutral förening)","2x − 6 = 0 → x = +3","Svar: Fe = +3. Järn i rust (Fe₂O₃) är trevärdig ✓"],
2153: ["I galvanisk cell: anod = oxidation, katod = reduktion","Zn|Zn²⁺||Cu²⁺|Cu. Zn är anod (oxideras: Zn → Zn²⁺ + 2e⁻)","Cu är katod (reduceras: Cu²⁺ + 2e⁻ → Cu)","Svar: 1 = Zn oxideras. Zn offrar elektroner → ström flödar ✓"],
2154: ["Q = n × F (laddning = mol elektroner × Faradaykonstant)","n = 2,0 mol e⁻, F = 96500 C/mol","Q = 2,0 × 96500 = 193 000 C","Svar: 193 000 C = 193 kC. 1 Faraday = laddningen av 1 mol e⁻ ✓"],
2155: ["Zn + 2HCl → ZnCl₂ + H₂. Zn: 0 → +2","Oxidationstalförändring för Zn: Δox = +2 − 0 = +2","Svar: förändringen = +2 (oxidation = ökat oxidationstal)","Zn förlorar 2 elektroner → oxideras. H⁺ tar emot → reduceras ✓"],
2156: ["Ag⁺ + e⁻ → Ag (n = 1 e⁻ per Ag). Faradays lag: m = ItM/(nF)","Q = I×t = 2,0 × 4825 = 9650 C","m = 9650 × 108/(1 × 96500) = 1042200/96500 = 10,80 g","Svar: 10,8 g Ag avsätts. Elektroplätering av silver ✓"],
2157: ["E°cell = −0,30 V < 0","Samband: ΔG° = −nFE°. Om E° < 0 → ΔG° > 0 → ej spontan","Svar: 2 (ej spontan). E°cell < 0 → reaktionen kräver yttre energi (elektrolys) ✓"],
2158: ["Faradays lag: t = m×n×F/(M×I)","n(Cu) = m/M = 3,175/63,5 = 0,050 mol. n_e = 2×0,050 = 0,10 mol e⁻","t = (3,175 × 2 × 96500)/(63,5 × 5,0) = 613055/317,5 = 1930 s","Svar: t = 1930 s ≈ 32 min. Elektroplätering: tid = mol e⁻ × F / I ✓"],
2159: ["ΔG° = −nFE°. n = 2, F = 96500, E° = 0,50 V","ΔG° = −2 × 96500 × 0,50 = −96500 J = −96,5 kJ","Svar: ΔG° = −96,5 kJ. Spontan: ΔG° < 0 och E° > 0 ✓"],
2160: ["Galvanisk cell: spontan elektrokemisk reaktion → ström produceras. ΔG < 0, E > 0","Elektrolytisk cell: kräver yttre spänning för att driva icke-spontan reaktion","Svar: 1 = galvanisk cell producerar ström spontant","Batteri = galvanisk cell. Laddning av batteri = elektrolytisk cell ✓"],
2161: ["Q = I×t = 1,0 × 9650 = 9650 C. n(e⁻) = Q/F = 9650/96500 = 0,10 mol","2H⁺ + 2e⁻ → H₂: n(H₂) = n(e⁻)/2 = 0,050 mol","V(H₂) = n × 22,4 = 0,050 × 22,4 = 1,12 L","Svar: 1,12 L H₂. Elektrolys av syra ger vätgas ✓"],
2162: ["Nernst: E = E° − (0,0592/n) × log Q. Q = [Zn²⁺]/[Cu²⁺]","Q = 0,010/1,0 = 0,010. log(0,010) = −2","E = 1,10 − (0,0592/2) × (−2) = 1,10 + 0,0592 = 1,1592 V","Svar: E ≈ 1,16 V. Låg [Zn²⁺] driver reaktionen mer spontant ✓"],
2163: ["Q = I×t = 10 × 2895 = 28950 C","n(e⁻) = Q/F = 28950/96500 = 0,300 mol","Svar: 0,30 mol elektroner. Faraday: 1 mol e⁻ = 96500 C ✓"],
2164: ["E°cell = E°katod − E°anod. Katod: O₂ (+1,23 V). Anod: Fe (−0,44 V)","E°cell = +1,23 − (−0,44) = 1,23 + 0,44 = 1,67 V","Svar: E°cell = 1,67 V. Korrosion är spontan (E° > 0) — därför rostar järn ✓"],
2165: ["2NaCl → 2Na + Cl₂. Na⁺ + e⁻ → Na (n = 1 e⁻ per Na)","Q = I×t = 5,0 × 19300 = 96500 C = 1,0 mol e⁻","n(Na) = Q/F = 1,0 mol. m(Na) = 1,0 × 23 = 23 g","Svar: 23 g Na. Elektrolys av smält NaCl ger natrium ✓"],
2166: ["E°cell = E°katod − E°anod. Pb²⁺/Pb = −0,13 V (katod = högre)","Sn²⁺/Sn = −0,14 V (anod)","E°cell = −0,13 − (−0,14) = +0,01 V","Svar: E° = 0,01 V. Mycket liten E° → svag drivkraft ✓"],
2167: ["Ni²⁺ + 2e⁻ → Ni (n = 2). t = m×n×F/(M×I)","n(Ni) = 5,87/58,7 = 0,100 mol. n(e⁻) = 2×0,100 = 0,200 mol","t = 0,200 × 96500 / 3,0 = 19300/3,0 = 6433 s... givet 3217 s → kontrollera","t = m×n_e×F/(M×I) = 5,87×2×96500/(58,7×3,0) = 1133590/176,1 = 3217 s ✓"],
2168: ["HClO₄: H = +1, O = −2 (4 st). Cl = x","1 + x + 4×(−2) = 0 (neutral molekyl)","1 + x − 8 = 0 → x = +7","Svar: Cl = +7 i HClO₄ (perklorsyra). Klor kan ha ox.tal −1 till +7 ✓"],
2169: ["2H₂O → O₂ + 4H⁺ + 4e⁻. n = 4 e⁻ per O₂","Q = I×t = 2,0 × 9650 = 19300 C. n(e⁻) = 19300/96500 = 0,200 mol","n(O₂) = 0,200/4 = 0,050 mol. m(O₂) = 0,050 × 32 = 1,60 g","Svar: 1,6 g O₂. Elektrolys av vatten: 4 e⁻ per O₂-molekyl ✓"],
2170: ["H⁺ + e⁻ → ½H₂. E° = 0,00 V (standardväteelektrod). pH = 3 → [H⁺] = 10⁻³","Nernst: E = E° − (0,0592/1)×log(1/[H⁺]) = 0 − 0,0592×log(10³)","= 0 − 0,0592 × 3 = −0,178 V","Svar: E = −0,178 V. Lägre [H⁺] (högre pH) → lägre potential ✓"],
2171: ["ln K = nFE°/(RT) = 2 × 96500 × 1,10/(8,314 × 298)","= 212300/2477,6 = 85,7","Svar: ln K = 85,7. K = e^85,7 ≈ 10^37 — extremt stor, reaktion är praktiskt fullständig ✓"],
2172: ["P = U×I = 5 × 100 = 500 W = 0,500 kW","E = P×t = 0,500 kW × 1 h = 0,500 kWh","Svar: 0,50 kWh. kWh = kilowatt × timme; industriell elektrolys kostar energi ✓"],
2173: ["Saltbryggan innehåller joner (t.ex. KCl eller KNO₃)","Per Faraday (1 mol e⁻) som passerar: 1 mol positiva joner rör sig en riktning, 1 mol negativa den andra","Svar: 1 mol joner per mol e⁻. Saltbryggan bibehåller elektroneutralitet i båda halvreaktionskärlena ✓"],
2174: ["Cr³⁺ + 3e⁻ → Cr (n = 3 e⁻). m = ItM/(n×F)","Q = 3,0 × 9650 = 28950 C. n(e⁻) = 28950/96500 = 0,300 mol","n(Cr) = 0,300/3 = 0,100 mol. m = 0,100 × 52 = 5,2 g","Svar: 5,2 g Cr. Trivalent krom: 3 elektroner per atom ✓"],
2175: ["Nernst: E = E° − (0,0592/n)×log Q. Q = [Zn²⁺]/[Cu²⁺] = 1,0/0,10 = 10","E = 1,10 − (0,0592/2)×log(10) = 1,10 − 0,0296×1","= 1,10 − 0,0296 = 1,0704 V","Svar: E ≈ 1,07 V. Hög [Zn²⁺] minskar cellpotentialen ✓"],
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
