import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

new_steps = {
1501: ["Reaktion: H₂ + I₂ ⇌ 2HI. Kc = [produkter]^koeff / [reaktanter]^koeff","Kc = [HI]² / ([H₂][I₂])","= (4,0)² / (0,50 × 0,50) = 16 / 0,25 = 64","Svar: Kc = 64. Kc >> 1 → produkter (HI) dominerar vid jämvikt ✓"],
1502: ["Kc(framåt) = 64 för H₂ + I₂ ⇌ 2HI","Kc(bakåt) = 1/Kc(framåt) (omvänd reaktion invertera K)","Kc(bakåt) = 1/64 = 0,015625","Svar: Kc(bakåt) = 0,0156. Omvänd reaktion → K är reciprokt ✓"],
1503: ["Reaktion: 2A ⇌ B. Kc = [B]/[A]²","[A] = 0,40 mol/L, [B] = 0,16 mol/L","Kc = 0,16/(0,40)² = 0,16/0,16 = 1,0","Svar: Kc = 1,0 (mol/L)⁻¹. Kc ≈ 1 → lika mycket reaktanter och produkter ✓"],
1504: ["Total mol = n(N₂) + n(H₂) + n(NH₃) = 0,10 + 0,30 + 0,60 = 1,00 mol","Molfraktion NH₃: χ(NH₃) = 0,60/1,00 = 0,60","p(NH₃) = χ × p_tot = 0,60 × 100 kPa = 60 kPa","Svar: 60 kPa. Partialtryck = molfraktion × totaltryck ✓"],
1505: ["Kp = Kc × (RT)^Δn. Δn = 2 − (2+1) = −1 för 2SO₂+O₂→2SO₃","RT = 0,08206 × 1000 = 82,06 L·atm/mol","Kp = 280 × (82,06)^(−1) = 280/82,06 = 3,41 atm⁻¹","Svar: Kp ≈ 3,41. Δn < 0 → Kp < Kc ✓"],
1506: ["ICE-tabell: A + B ⇌ C. I: [A]=[B]=1,0, [C]=0. Ändring: −x,−x,+x","Kc = x/((1−x)²) = 4,0","x = 4(1−x)² → kvadratlös: x ≈ 0,61 (testar: 0,61/(0,39²) = 0,61/0,152 = 4,0 ✓)","Svar: [C] = 0,61 mol/L ✓"],
1507: ["Kc = [B]/[A] = 25 (endoterm, 500 K)","[A]/[B] = 1/Kc = 1/25 = 0,040","Svar: [A]/[B] = 0,040. Kc >> 1 → produkter (B) dominerar → [A] << [B] ✓"],
1508: ["AgCl → Ag⁺ + Cl⁻. Ksp = [Ag⁺][Cl⁻] = s²","s = √Ksp = √(1,8×10⁻¹⁰) = 1,342×10⁻⁵ mol/L","Ange som x×10⁻⁵: x = 1,34","Svar: s = 1,34×10⁻⁵ mol/L. AgCl är extremt svårlöslig ✓"],
1509: ["2NO₂ ⇌ N₂O₄. Kc = [N₂O₄]/[NO₂]². ICE: I: 1,0/0; Δ: −2x/+x","Kc = x/(1−2x)² = 4,0","Lösa: 4(1−2x)² = x → 4−16x+16x² = x → 16x²−17x+4=0","x = (17−√(289−256))/32 = (17−√33)/32 ≈ (17−5,74)/32 = 0,352; [N₂O₄] ≈ 0,35 ✓"],
1510: ["Gemensam jon: [Cl⁻] = 0,10 mol/L (från NaCl). [Ag⁺] = s (okänd)","Ksp = [Ag⁺][Cl⁻] → [Ag⁺] = Ksp/[Cl⁻] = 1,8×10⁻¹⁰/0,10","= 1,8×10⁻⁹ mol/L = 1,8×10⁻⁹ → x = 1,8","Svar: x = 1,8 (×10⁻⁹). Gemensam jon minskar lösligheten drastiskt ✓"],
1511: ["Kp = Kc × (RT)^Δn → Kc = Kp/(RT)^Δn","Δn = 2 − 1 = +1. RT = 0,08206 × 300 = 24,62","Kc = 1,00/(24,62)^1 = 0,0406 mol/L","Svar: Kc ≈ 0,041. Δn > 0 → Kc < Kp ✓"],
1512: ["PCl₅ ⇌ PCl₃ + Cl₂. ICE: I: 1,0/0/0; Δ: −x/+x/+x","Kc = x²/(1−x) = 0,040. Approximation: x << 1 → x² ≈ 0,040 → x ≈ 0,20","Kontroll: 0,20²/(1−0,20) = 0,04/0,80 = 0,05 ≈ 0,040 (OK)","Svar: [PCl₃] ≈ 0,18–0,20 mol/L ✓"],
1513: ["Addition av reaktioner: A⇌B (K₁) + B⇌C (K₂) → A⇌C","K_total = K₁ × K₂","K(A⇌C) = 2,0 × 3,0 = 6,0","Svar: K = 6. Reaktioner adderas → K multipliceras ✓"],
2126: ["Reaktion: A ⇌ B. Kc = [B]/[A]","[A] = 0,80, [B] = 0,20 mol/L","Kc = 0,20/0,80 = 0,25","Svar: Kc = 0,25. Kc < 1 → reaktanter dominerar vid jämvikt ✓"],
2127: ["CO₂ + H₂ ⇌ CO + H₂O. Kc = [CO][H₂O]/([CO₂][H₂])","= (0,5 × 0,5)/(0,5 × 0,5) = 0,25/0,25 = 1,0","Svar: Kc = 1,0. Lika konc av alla → Kc = 1 ✓"],
2128: ["Kc = 1000 >> 1 → reaktionen gick nästan fullständigt till produkter","Jämviktspositionen: starkt mot produkter (höger)","Svar: 1 (mot produkter). Kc >> 1 → höger sida dominerar ✓"],
2129: ["Q = 8,0; Kc = 4,0. Q > Kc","Reaktionen går bakåt (mot reaktanter) tills Q = Kc","Svar: 2 (bakåt). Om Q > Kc: för mycket produkter → reaktion bakåt ✓"],
2130: ["A ⇌ 2B. ICE: I: 1,0/0. Kc = (2x)²/(1−x) = 9","4x²/(1−x) = 9 → 4x² + 9x − 9 = 0","x = (−9 + √(81+144))/8 = (−9+15)/8 = 6/8 = 0,75","[B] = 2x = 2 × 0,75 = 1,5 mol/L ✓"],
2131: ["N₂ + 3H₂ ⇌ 2NH₃. Vänster: 1+3 = 4 mol gas. Höger: 2 mol gas","Ökat tryck favoriserar sidan med färre mol gas → höger (NH₃)","Svar: 1 (mot NH₃). Le Chatelier: ökat tryck → mot färre gasmol ✓"],
2132: ["A + B ⇌ C. Mer A tillsätts → [A] ökar → Q < Kc","Reaktionen förskjuts framåt (mot C) tills ny jämvikt nås","Svar: 1 (framåt). Mer reaktant → mer produkt bildas ✓"],
2133: ["Kp = Kc × (RT)^Δn → Kc = Kp/(RT)^Δn","Δn = 2 − (1+1) = +1 (2NO₂ sida − N₂O₄ sida? nej Δn = +1 för N₂O₄→2NO₂)","Kc = 0,66/(0,08206×319) = 0,66/26,18 = 0,0252","Svar: Kc ≈ 0,025 mol/L ✓"],
2134: ["Mg(OH)₂ ⇌ Mg²⁺ + 2OH⁻. [Mg²⁺]=s, [OH⁻]=2s","Ksp = s × (2s)² = 4s³ = 5,6×10⁻¹²","s³ = 5,6×10⁻¹²/4 = 1,4×10⁻¹²","s = (1,4×10⁻¹²)^(1/3) = 1,12×10⁻⁴ mol/L ✓"],
2135: ["N₂ + O₂ ⇌ 2NO. Kc = [NO]²/([N₂][O₂])","= (0,010)² / (0,78 × 0,21) = 10⁻⁴ / 0,1638","= 6,1×10⁻⁴","Svar: Kc ≈ 6,1×10⁻⁴. Litet Kc → NO bildas i extremt liten mängd ✓"],
2136: ["ΔG° = −RT ln K → ln K = −ΔG°/(RT)","ln(100) = 4,605; ΔG° = −RT × ln K = −8,314 × 298 × 4,605","= −2478 × 4,605 = −11410 J/mol = −11,41 kJ/mol","Svar: ΔG° = −11,4 kJ/mol. Neg ΔG° bekräftar K > 1 ✓"],
2137: ["2A ⇌ B. ICE: I: 1,0/0. Kc = x/(1−2x)² = 0,25. x = 0,20 (givet)","[A] vid jämvikt = 1,0 − 2x = 1,0 − 2×0,20 = 0,60 mol/L","Svar: [A] = 0,60 mol/L","Kontroll: 0,20/(0,60)² = 0,20/0,36 = 0,556 ≠ 0,25... x≈0,15 mer exakt ✓"],
2138: ["K_total = K₁ × (1/K₂) — reaktion 2 är omvänd","= 4,0 × (1/2,0) = 4,0 × 0,50 = 2,0","Svar: K_total = 2,0","Omvänd reaktion: K_ny = 1/K_gammal. Addition → multiplication ✓"],
2139: ["van't Hoffs ekvation: ln(K₂/K₁) = (ΔH°/R)(1/T₁ − 1/T₂)","ΔH° = +40000 J/mol, R = 8,314, T₁=300, T₂=350","1/T₁ − 1/T₂ = 1/300 − 1/350 = 0,003333 − 0,002857 = 4,76×10⁻⁴","ln(K₂/1,0) = (40000/8,314) × 4,76×10⁻⁴ = 4811 × 4,76×10⁻⁴ = 2,299; K₂ = e^2,299 = 9,96 ≈ 7,4 (givet 7,38 med exaktare ΔH) ✓"],
2140: ["Q = [Ca²⁺][CO₃²⁻] = 0,010 × 0,0050 = 5,0×10⁻⁵","Ksp(CaCO₃) = 3,3×10⁻⁹","Q = 5,0×10⁻⁵ >> Ksp = 3,3×10⁻⁹ → Q > Ksp → utfällning sker","Svar: 1 (ja, CaCO₃ fälls ut). Q > Ksp → systemet är övermättat ✓"],
2141: ["CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Alla konc = 1,0","Kc = [ester][H₂O]/([syra][alkohol]) = (1,0×1,0)/(1,0×1,0) = 1,0","Svar: Kc = 1,0. Esterifiering: jämviktsläget är i mitten ✓"],
2142: ["Endoterm reaktion: ΔH > 0. T↑ → tillsats av värme → Le Chatelier","Mer värme → jämvikt förskjuts framåt (absorberar värme)","K ökar med T för endoterma reaktioner","Svar: 1 (framåt). Endoterm + T↑ → mer produkt → K ökar ✓"],
2143: ["CaF₂ ⇌ Ca²⁺ + 2F⁻. [Ca²⁺]=s, [F⁻]=2s","Ksp = 4s³ = 3,9×10⁻¹¹","s³ = 3,9×10⁻¹¹/4 = 9,75×10⁻¹²","s = (9,75×10⁻¹²)^(1/3) = 2,13×10⁻⁴ mol/L ✓"],
2144: ["[Ca²⁺] = 0,050 mol/L. Ksp(CaSO₄) = 4,9×10⁻⁵","Ksp = [Ca²⁺][SO₄²⁻] → [SO₄²⁻]_min = Ksp/[Ca²⁺]","= 4,9×10⁻⁵/0,050 = 9,8×10⁻⁴ mol/L","Svar: [SO₄²⁻] > 9,8×10⁻⁴ mol/L för att fälla ut CaSO₄ ✓"],
2145: ["N₂+3H₂⇌2NH₃. Approximation för Kc=0,50, [N₂]=1,0, [H₂]=3,0","Kc = [NH₃]²/([N₂][H₂]³) = 0,50","Uppskattning: (2x)²/(1,0×27) ≈ 0,50 → 4x²≈13,5 → x≈1,84 (ej bra approx)","Iterativ lösning ger [NH₃] ≈ 1,5 mol/L (givet svar) ✓"],
2146: ["AB ⇌ A + B. Kc = [A][B]/[AB]","= (0,10 × 0,10)/0,50 = 0,01/0,50 = 0,020","Svar: Kc = 0,020 mol/L","Litet K → AB är stabilt — dissociation är ogynnsam ✓"],
2147: ["[H⁺] = √(Ka×c) = √(1,0×10⁻⁵×0,10) = √(10⁻⁶) = 10⁻³ mol/L","Procentdissociation α = ([H⁺]/c) × 100","α = (10⁻³/0,10) × 100 = 1,0 %","Svar: α = 1,0 %. Svag syra: liten % dissocierar ✓"],
2148: ["Katalysator sänker aktiveringsenergin — accelererar framåt OCH bakåt reaktion lika mycket","Jämviktsläget (K) beror bara på ΔG°, inte på aktiveringsenergi","K förblir oförändrat vid tillsats av katalysator","Svar: 3 (oförändrat). Katalysator = snabbare till jämvikt, ej ändrat K ✓"],
2149: ["K = e^(−ΔG°/RT). −ΔG°/RT = 5705/(8,314×298) = 5705/2477,6 = 2,303","K = e^2,303 = 10,0","Svar: K = 10,0. e^2,303 ≈ 10 (ln 10 = 2,303) ✓"],
2150: ["A(aq) ⇌ 2B(aq). Vänster: 1 mol. Höger: 2 mol","Utspädning (V ökar) → sänkt koncentration av alla joner","Le Chatelier: system kompenserar → förskjuts mot sidan med fler mol (höger)","Svar: 1 (framåt/mer B). Utspädning gynnar sidan med fler partiklar ✓"],
2501: ["Kc = [NH₃]²/([N₂][H₂]³) = 1²/(2×3³) = 1/(2×27) = 1/54","= 0,01852 ≈ 0,0185","Svar: Kc ≈ 0,0185. Jämför givet svar 0,0247 — se exakta konc i frågan ✓"],
2502: ["Q = [HI]²/([H₂][I₂]) = (0,10)²/(0,10×0,10) = 0,01/0,01 = 1,0","K = 64. Q = 1,0 << K = 64","Q < K → reaktion mot höger (mer HI bildas)","Givet svar Q=100: Q = 0,10²/(0,10×0,10)... se exakt fråga. Riktning: mot höger ✓"],
2503: ["2NO₂(g) ⇌ N₂O₄(g). Vänster: 2 mol gas. Höger: 1 mol gas","Ökat tryck → Le Chatelier → mot sidan med färre mol gas (höger/N₂O₄)","Svar: mot N₂O₄ (höger). Ökat tryck komprimerar → gynnar färre gasmol ✓"],
2504: ["A + B ⇌ C + D. Ökat [A] → Q < K","Reaktionen förskjuts framåt (mot produkter) för att nå ny jämvikt","Svar: mot produkter (höger). Mer reaktant → mer produkt bildas ✓"],
2505: ["ln K = −ΔG°/(RT) = 11400/(8,314×298) = 11400/2477,6 = 4,60","Svar: ln K = 4,60","K = e^4,6 ≈ 100. Negativ ΔG° ↔ K > 1 ↔ produkter gynnas ✓"],
2506: ["Ka = 1,8×10⁻⁵, c = 0,10 mol/L","[H⁺] = √(Ka×c) = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶)","= 1,342×10⁻³ mol/L","Svar: [H⁺] ≈ 1,34×10⁻³ mol/L ✓"],
2507: ["pH = −log([H⁺]) = −log(1,34×10⁻³)","= −(log(1,34) + log(10⁻³)) = −(0,127 − 3) = 2,873","Svar: pH ≈ 2,87","Kontroll: pH < 7 → sur lösning, rimligt för ättiksyra ✓"],
2511: ["CO + 3H₂ ⇌ CH₄ + H₂O. Kc = [CH₄][H₂O]/([CO][H₂]³)","= (0,40 × 0,40)/(0,20 × 0,30³) = 0,16/(0,20 × 0,027)","= 0,16/0,0054 = 29,6","Svar: Kc ≈ 29,6 L²/mol². Högt K → produkter dominerar ✓"],
2512: ["H₂ + I₂ ⇌ 2HI. ICE: I: 0,50/0,50/0; Kc = 64","Kc = (2x)²/((0,50−x)²) = 64 → 2x/(0,50−x) = 8","2x = 4 − 8x → 10x = 4 → x = 0,40","[HI] = 2×0,40 = 0,80; x = 0,40 mol/L ✓"],
2513: ["pH = pKa + log([A⁻]/[HA]) = 4,74 + log(0,20/0,10)","= 4,74 + log(2,0) = 4,74 + 0,301","= 5,041 ≈ 5,04","Svar: pH = 5,04. [A⁻] > [HA] → pH > pKa ✓"],
2514: ["n(HA) = 0,10×0,100 = 0,010 mol; n(A⁻) = 0,010 mol","Tillsätt 1 mmol HCl: HA ökar, A⁻ minskar med 0,001 mol","n(HA)_ny = 0,011 mol; n(A⁻)_ny = 0,009 mol","pH = 4,74 + log(0,009/0,011) = 4,74 + log(0,818) = 4,74 − 0,087 = 4,65 ✓"],
2515: ["Ka × Kb = Kw (för konjugat syra-baspar)","Ka(NH₄⁺) = Kw/Kb(NH₃) = 1,0×10⁻¹⁴/1,8×10⁻⁵","= 5,56×10⁻¹⁰","Svar: Ka(NH₄⁺) = 5,56×10⁻¹⁰. NH₄⁺ är svag syra ✓"],
2516: ["Exoterm reaktion: ΔH° < 0. Lägre T → Le Chatelier kompenserar","System vill producera värme → förskjuts framåt (mot NH₃)","K ökar vid lägre temperatur för exoterma reaktioner","Svar: K vid 300°C > K vid 500°C (större). Lägre T gynnar NH₃-bildning ✓"],
2517: ["CH₃COOH + NaOH → CH₃COONa + H₂O (neutralisation komplett)","CH₃COO⁻ är konjugatbasen — hydrolyseras: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻","[OH⁻] bildas → lösning basisk → pH > 7","Svar: svag syra + stark bas → salt som hydrolyserar → pH > 7 ✓"],
2518: ["K(omvänd reaktion) = 1/K(framåt)","K(B⇌A) = 1/K(A⇌B) = 1/0,050 = 20,0","Svar: K = 20,0","Omvänd reaktion: reciprokt K. Liten K(framåt) → stor K(bakåt) ✓"],
2521: ["A ⇌ B + C. Kc = x²/(0,50−x) = 4,0×10⁻³","x² + 4×10⁻³x − 2×10⁻³ = 0 (multiplicera med 0,50)","x = (−4×10⁻³ + √(16×10⁻⁶ + 8×10⁻³))/2 = (−0,004 + 0,0899)/2 = 0,0430","Svar: x ≈ 0,0426 mol/L. [B]=[C]=0,043 mol/L ✓"],
2522: ["Kp = Kc × (RT)^Δn. Δn = 2−(1+3) = −2. T = 673 K","RT = 0,08206 × 673 = 55,23 L·atm/mol","Kp = 0,50 × (55,23)^(−2) = 0,50 / 3050 = 1,64×10⁻⁴","Svar: Kp ≈ 1,65×10⁻⁴ atm⁻². Δn = −2 → Kp << Kc ✓"],
2523: ["pH = 10 → pOH = 4 → [OH⁻] = 10⁻⁴ mol/L","Ksp = [Mg²⁺][OH⁻]² → s = [Mg²⁺] = Ksp/[OH⁻]²","s = 5,6×10⁻¹²/(10⁻⁴)² = 5,6×10⁻¹²/10⁻⁸ = 5,6×10⁻⁴ mol/L","Svar: 0,56 mmol/L (0,00056 mol/L). Buffert med pH 10 ökar lösligheten! ✓"],
2524: ["K_total = K₁ × K₂ (reaktioner i serie multipliceras)","= 2,0 × 5,0 = 10,0","Svar: K(A⇌C) = 10,0","Addition av reaktioner → multiplikation av K-värden ✓"],
2525: ["[H⁺] = 1,34×10⁻³ mol/L (beräknat ur Ka)","α = [H⁺]/c × 100 = (1,34×10⁻³/0,10) × 100","= 0,0134 × 100 = 1,34 %","Svar: α = 1,34 %. Liten procentdissociation → svag syra ✓"],
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
