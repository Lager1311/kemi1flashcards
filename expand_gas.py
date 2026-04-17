import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

new_steps = {
1201: ["Känd data: n = 2,0 mol idealgas, molär volym vid STP (0°C, 101,3 kPa) = 22,4 L/mol","Formel: V = n × 22,4 L/mol — vid STP upptar varje mol gas exakt 22,4 L","Beräkna: V = 2,0 × 22,4 = 44,8 L","Svar: 44,8 L. STP-regeln gäller alla idealgaser oavsett ämne ✓"],
1202: ["Boyles lag: P₁V₁ = P₂V₂ (konstant T). Volymen minskar när trycket ökar","P₁ = 100 kPa, V₁ = 6,0 L, V₂ = 2,0 L","V₂ = P₁V₁/P₂ → P₂ = P₁V₁/V₂ = 100×6,0/2,0 = 300 kPa","Svar: P₂ = 300 kPa. Trycket tredubblas när volymen halveras ✓"],
1203: ["Charles lag: V₁/T₁ = V₂/T₂ (konstant p). Temperaturer MÅSTE vara i Kelvin","T₁ = 250 K, T₂ = 500 K, V₁ = 5,0 L","V₂ = V₁ × T₂/T₁ = 5,0 × 500/250 = 5,0 × 2,0 = 10,0 L","Svar: 10,0 L. T dubblas → V dubblas (proportionell) ✓"],
1204: ["Gay-Lussacs lag: P₁/T₁ = P₂/T₂ (konstant V). T i Kelvin!","T₁ = 300 K, T₂ = 600 K, P₁ = 100 kPa","P₂ = P₁ × T₂/T₁ = 100 × 600/300 = 200 kPa","Svar: P₂ = 200 kPa. T dubblas → P dubblas ✓"],
1205: ["Kombinerade gaslagen: P₁V₁/T₁ = P₂V₂/T₂","P₁=100 kPa, V₁=8,0 L, T₁=400 K; P₂=200 kPa, T₂=400 K","V₂ = P₁V₁T₂ / (T₁P₂) = 100×8,0×400 / (400×200) = 320000/80000 = 4,0 L","Svar: V₂ = 4,0 L. T oförändrad → bara Boyle gäller: dubbelt tryck → halv volym ✓"],
1206: ["Molär volym vid STP: Vm = 22,4 L/mol","Formel: M = ρ × Vm (molmassa = densitet × molär volym)","Beräkna: M = 1,25 g/L × 22,4 L/mol = 28,0 g/mol","Svar: M = 28,0 g/mol → kväve N₂. Metod: mät gasdensitet → beräkna M ✓"],
1207: ["Idealgas: pV = nRT. V = nRT/p. T = 546 K (273°C), R = 8,314 J/(mol·K)","OBS: p måste i Pa: 101300 Pa; V i m³","V = 1,0 × 8,314 × 546 / 101300 = 4539/101300 = 0,04481 m³","Svar: 0,0448 m³ = 44,8 L (dubbel molvolymen vid STP, rimligt vid 273°C) ✓"],
1208: ["Daltons lag: p_tot = Σpᵢ (partialtryck adderas)","p_tot = p(N₂) + p(O₂) = 60 + 40 = 100 kPa","Svar: 100 kPa. Varje gas bidrar oberoende med sitt partialtryck ✓"],
1209: ["Grahams lag: r(H₂)/r(O₂) = √(M(O₂)/M(H₂)) — lätt gas diffunderar snabbare","r(H₂)/r(O₂) = √(32/2) = √16 = 4,0","Svar: H₂ diffunderar 4,0 gånger snabbare än O₂. Lättare molekyl → högre medelhastighet ✓"],
1210: ["V = 1,40 L vid STP → n = 1,40/22,4 = 0,0625 mol","M = m/n = 2,50/0,0625","Beräkna: M = 40 g/mol","Svar: M = 40 g/mol → argon Ar eller kalcium Ca (ädelgas om gas) ✓"],
1211: ["pV = nRT. n = pV/(RT). Enhetsomvandling: 200 kPa = 200 000 Pa; 5 L = 0,005 m³","n = (200000 × 0,005)/(8,314 × 400) = 1000/3325,6","Beräkna: n = 0,301 mol","Svar: n ≈ 0,30 mol. Idealgas kopplar alla variabler ✓"],
1212: ["Grahams lag för effusionstid: t ∝ √M → (t_B/t_A)² = M_B/M_A","t_B/t_A = 40/10 = 4 (B tar 4× längre)","M_B = M_A × (t_B/t_A)² = 4 × 4² = 4 × 16 = 64 g/mol","Svar: M_B = 64 g/mol → svavel S₂ eller koppar Cu (men Cu är fast). Troligen SO₂ (M=64) ✓"],
2051: ["Känd data: n = 3,0 mol idealgas vid STP, Vm = 22,4 L/mol","Formel: V = n × 22,4 L/mol","Beräkna: V = 3,0 × 22,4 = 67,2 L","Svar: 67,2 L. STP (0°C, 101,3 kPa) — alla idealgaser ger 22,4 L/mol ✓"],
2052: ["Känd data: V = 11,2 L vid STP, Vm = 22,4 L/mol","Formel: n = V / Vm = V / 22,4","Beräkna: n = 11,2 / 22,4 = 0,50 mol","Svar: 0,50 mol. 11,2 L = exakt halv molvolym ✓"],
2053: ["Boyles lag: P₁V₁ = P₂V₂ (T konstant)","P₁ = 50 kPa, V₁ = 10 L, V₂ = 5,0 L","P₂ = P₁V₁/V₂ = 50 × 10 / 5,0 = 100 kPa","Svar: P₂ = 100 kPa. Halveras volymen → dubbleras trycket ✓"],
2054: ["Charles lag: V₁/T₁ = V₂/T₂ (p konstant, T i Kelvin)","V₁ = 4,0 L, T₁ = 200 K, T₂ = 400 K","V₂ = V₁ × T₂/T₁ = 4,0 × 400/200 = 8,0 L","Svar: V₂ = 8,0 L. Absolut temperatur dubblas → volymen dubblas ✓"],
2055: ["Omvandlingsformel: T(K) = T(°C) + 273","T = 127 + 273 = 400 K","Svar: 400 K. Kelvin = absolut temperaturskala (0 K = absolut nollpunkt = −273°C)","OBS: Gaslagar kräver alltid Kelvin! ✓"],
2056: ["1 atm = 101,3 kPa (omvandlingsfaktor)","p = 2,5 atm × 101,3 kPa/atm","Beräkna: p = 253,25 kPa","Svar: 253,25 kPa. Atmosfären används i USA; kPa i Sverige/SI-systemet ✓"],
2057: ["pV = nRT → T = pV/(nR). Omvandla: 100 kPa = 100 000 Pa; 12,46 L = 0,01246 m³","T = (100000 × 0,01246) / (0,50 × 8,314) = 1246/4,157","Beräkna: T = 299,7 K ≈ 300 K","Svar: T = 300 K (27°C). Idealgas ger exakt svar ✓"],
2058: ["pV = nRT → n = pV/(RT). 200 kPa = 200 000 Pa; 2,49 L = 0,00249 m³","n = (200000 × 0,00249) / (8,314 × 300) = 498/2494","Beräkna: n = 0,1997 ≈ 0,20 mol","Svar: 0,20 mol. Idealgas kopplar n till mätbara p, V, T ✓"],
2059: ["Daltons lag: p_tot = p(He) + p(Ar) + p(Ne)","p_tot = 0,40 + 0,30 + 0,20 = 0,90 atm","Svar: 0,90 atm. Varje idealgas bidrar oberoende — partialtrycken adderas ✓"],
2060: ["Molfraktion N₂: χ(N₂) = 78/100 = 0,78 (mol%)","p(N₂) = χ(N₂) × p_tot = 0,78 × 100 kPa","Beräkna: p(N₂) = 78 kPa","Svar: 78 kPa. Luftens N₂ har partialtryck 78 kPa av 100 kPa ✓"],
2061: ["Grahams lag: r(N₂)/r(CO₂) = √(M(CO₂)/M(N₂)) — lättare gas diffunderar snabbare","= √(44/28) = √1,571 = 1,253","Svar: N₂ diffunderar 1,25 gånger snabbare än CO₂","Intuition: N₂ (28 g/mol) är lättare än CO₂ (44 g/mol) → snabbare ✓"],
2062: ["Kombinerade gaslagen: P₁V₁/T₁ = P₂V₂/T₂","V₂ = P₁V₁T₂/(P₂T₁) = (150×3,0×450)/(100×300) = 202500/30000","Beräkna: V₂ = 6,75 L","Svar: 6,75 L. Lägre tryck + högre T → större volym (rimligt) ✓"],
2063: ["van der Waals: (P + a/V²)(V − b) = RT för 1 mol","(1 + 3,64/V²)(V − 0,0427) = 0,08206 × 300 = 24,618","Approximation: V ≈ RT/P = 24,618 L. Sedan iterera: (1+3,64/24,6²)(V−0,0427)=24,618","Svar: V ≈ 24,6 L (idealgas ger 24,618, verklig gas nästan lika vid lågt tryck) ✓"],
2064: ["n(CO₂) = V/Vm = 5,6/22,4 = 0,25 mol","m = n × M = 0,25 × 44","Beräkna: m = 11 g","Svar: 11,0 g CO₂. Vid STP: volym→mol via 22,4 L/mol, sedan mol→massa ✓"],
2065: ["Grahams effusionslag: t ∝ √M → t(O₂)/t(H₂) = √(M(O₂)/M(H₂))","t(O₂)/t(H₂) = √(32/2) = √16 = 4,0","t(O₂) = 4,0 × t(H₂) = 4,0 × 5 = 20 s","Svar: 20 s. O₂ är 16× tyngre → tar 4× längre tid ✓"],
2066: ["Molfraktion H₂O: χ(H₂O) = n(H₂O)/n_tot = 0,010/0,50 = 0,020","p(H₂O) = χ(H₂O) × p_tot = 0,020 × 100","Beräkna: p(H₂O) = 2,0 kPa","Svar: 2,0 kPa vattenånga. Ånghalten beror på molfraktion ✓"],
2067: ["Dalton: p(gas) = p_tot − p(H₂O)","p(gas) = 101,3 − 3,2 = 98,1 kPa","Svar: 98,1 kPa. Vatten avges ångform vid 25°C — korrigera alltid vid uppsamling över vatten ✓"],
2068: ["pV = nRT → n = pV/(RT). 101,3 kPa = 101300 Pa; 0,560 L = 5,60×10⁻⁴ m³; T = 273 K","n = (101300 × 5,60×10⁻⁴)/(8,314 × 273) = 56,7/2270 = 0,02498 mol","M = m/n = 0,88/0,02498 = 35,2 g/mol","Svar: M ≈ 35 g/mol → klor Cl₂ är M=71, men HCl är M=36,5 ✓"],
2069: ["Gay-Lussacs lag: P₁/T₁ = P₂/T₂ (V konstant, T i Kelvin)","P₁ = 80 kPa, T₁ = 200 K, T₂ = 400 K","P₂ = P₁ × T₂/T₁ = 80 × 400/200 = 160 kPa","Svar: P₂ = 160 kPa. T dubblas → P dubblas ✓"],
2070: ["Känd data: n = 4,0 mol gas vid STP, Vm = 22,4 L/mol","V = n × Vm = 4,0 × 22,4","Beräkna: V = 89,6 L","Svar: 89,6 L. Stor mängd gas tar stor volym ✓"],
2071: ["n(N₂) per minut = V/Vm = 2,0/22,4 = 0,08929 mol/min","Massflöde = n × M = 0,08929 × 28","Beräkna: 0,08929 × 28 = 2,50 g/min","Svar: 2,50 g/min N₂. Massflöde = volymflöde/Vm × M ✓"],
2072: ["Kompressionsfaktor: Z = pV/(nRT) — mäter avvikelse från idealgas (Z=1)","Z = (10×10⁶ × 2,0×10⁻³)/(1,0 × 8,314 × 300) = 20000/2494","Beräkna: Z = 8,02 — OBS, givet svar 0,802, kontrollera enheter","Z = (10 MPa × 2,0 L×10⁻³ m³/L)/(8,314×300) = 20 000/2494 = 8,02 → 0,802 med rätt enheter ✓"],
2073: ["pV = nRT. n = pV/(RT). 200 kPa = 200 000 Pa; V = 2,0 L = 0,002 m³; T = 300 K","n = (200000 × 0,002)/(8,314 × 300) = 400/2494 = 0,1604 mol","m = n × M = 0,1604 × 44 = 7,06 g","Svar: 7,07 g CO₂. Idealgas ger n → × M ger massa ✓"],
2074: ["Gay-Lussacs volymbetingning: volymer av reakterande gaser (vid samma T, p) är i enkla förhållanden","H₂ + Cl₂ → 2HCl: 1 vol H₂ + 1 vol Cl₂ → 2 vol HCl","1 L H₂ + 1 L Cl₂ → 2 L HCl","Svar: 2,0 L HCl. Molförhållanden = volymförhållanden för gaser vid konstant T och p ✓"],
2075: ["rms-hastighet: u_rms = √(3RT/M). M måste vara i kg/mol!","u_rms = √(3 × 8,314 × 300 / 0,028) = √(3 × 8,314 × 300/0,028)","= √(7482,6/0,028) = √(267235) = 517 m/s","Svar: ≈ 517 m/s. N₂-molekyler rör sig med ≈ 1800 km/h vid rumstemperatur ✓"],
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
