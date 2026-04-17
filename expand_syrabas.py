import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

new_steps = {
1401: ["Känd data: [H⁺] = 0,010 mol/L = 10⁻² mol/L","Formel: pH = −log[H⁺] — pH-skalan är logaritmisk (bas 10)","Beräkna: pH = −log(10⁻²) = −(−2) = 2","Svar: pH = 2. Tumregel: om [H⁺] = 10⁻ⁿ mol/L → pH = n ✓"],
1402: ["Känd data: pOH = 3,0 vid 25°C","Samband: pH + pOH = 14 (vid 25°C, gäller för Kw = 10⁻¹⁴)","pH = 14 − pOH = 14 − 3,0 = 11,0","Svar: pH = 11,0 (basisk lösning). pH > 7 = basisk vid 25°C ✓"],
1403: ["Känd data: pH = 4,0","Formel: [H⁺] = 10^(−pH)","Beräkna: [H⁺] = 10⁻⁴ mol/L → x = 4","Svar: x = 4. Logaritmsamband: varje pH-enhet = 10× ändring i [H⁺] ✓"],
1404: ["Neutral lösning: [H⁺] = [OH⁻]. Kw = [H⁺][OH⁻] = 10⁻¹⁴ vid 25°C","[H⁺]² = 10⁻¹⁴ → [H⁺] = 10⁻⁷ mol/L","pH = −log(10⁻⁷) = 7,0","Svar: pH = 7. Neutral = lika många H⁺ och OH⁻ joner ✓"],
1405: ["Ka(HF) = 6,8×10⁻⁴, c = 0,10 mol/L. Svag syra: partiell protolys","Approximation: [H⁺] = √(Ka × c) = √(6,8×10⁻⁴ × 0,10)","= √(6,8×10⁻⁵) = 8,25×10⁻³ mol/L","pH = −log(8,25×10⁻³) = 3 − log(8,25) = 3 − 0,916 = 2,08 ✓"],
1406: ["Buffer: [CH₃COOH] = [CH₃COO⁻] = 0,10 mol/L (lika koncentrationer!)","Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])","log([A⁻]/[HA]) = log(1) = 0","pH = pKa + 0 = 4,74. Vid lika konc: pH = pKa alltid ✓"],
1407: ["n(HCl) = c × V = 0,100 × 0,025 = 0,00250 mol","HCl + NaOH → NaCl + H₂O. Molförhållande 1:1","n(NaOH) behövs = 0,00250 mol","V(NaOH) = n/c = 0,00250/0,200 = 0,01250 L = 12,5 mL ✓"],
1408: ["[H⁺] = 10^(−pH) = 10⁻³ = 0,001 mol/L","Ka ≈ [H⁺]²/c = (10⁻³)²/0,050 = 10⁻⁶/0,050 = 2×10⁻⁵","pKa = −log(Ka) = −log(2×10⁻⁵) = 5 − log(2) = 5 − 0,30 = 4,70","Svar: pKa ≈ 4,70. Bakräkning: pH → [H⁺] → Ka → pKa ✓"],
1409: ["n₁ = c₁V₁ = 0,20×0,050 = 0,010 mol HCl; n₂ = c₂V₂ = 0,10×0,050 = 0,005 mol HCl","Total n = 0,015 mol HCl; Total V = 0,100 L","[H⁺] = 0,015/0,100 = 0,15 mol/L","pH = −log(0,15) = −log(1,5×10⁻¹) = 1 − log(1,5) ≈ 0,82 ✓"],
1410: ["Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])","log([A⁻]/[HA]) = pH − pKa = 5,0 − 4,75 = 0,25","[A⁻]/[HA] = 10^0,25 = 1,778","[A⁻] = [HA] × 1,778 = 0,10 × 1,778 = 0,178 mol/L ✓"],
1411: ["CH₃COO⁻ hydrolyserar: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻","Kb(CH₃COO⁻) = Kw/Ka = 10⁻¹⁴/1,8×10⁻⁵ = 5,56×10⁻¹⁰","[OH⁻] = √(Kb×c) = √(5,56×10⁻¹⁰×0,10) = √(5,56×10⁻¹¹) = 7,45×10⁻⁶","pOH = −log(7,45×10⁻⁶) = 5,13; pH = 14 − 5,13 = 8,87 ✓"],
1412: ["Vid halvvägspunkt i titrering: hälften av syran har neutraliserats","[A⁻] = [HA] (lika konc av konjugatparet)","Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa + 0","Svar: pH = pKa = 4,74. Halvvägspunkten används för att bestämma pKa experimentellt ✓"],
1413: ["Vid 80°C: Kw = 10⁻¹³. pKw = 13","Neutral: [H⁺] = [OH⁻] → pH = ½ × pKw","pH_neutral = 13/2 = 6,5","Svar: pH = 6,5. OBS: vatten är fortfarande neutralt! Det är bara pH-skalan som förändras ✓"],
2101: ["Känd data: c(HCl) = 0,001 mol/L = 10⁻³ mol/L. Stark syra: fullständig dissociation","[H⁺] = c = 10⁻³ mol/L","pH = −log(10⁻³) = 3,0","Svar: pH = 3,0. Stark syra = fullständig protolys → [H⁺] = c ✓"],
2102: ["Känd data: pOH = 5,0","Samband: pH + pOH = pKw = 14 (vid 25°C)","pH = 14 − 5,0 = 9,0","Svar: pH = 9,0 (basisk). pH > 7 → fler OH⁻ än H⁺ ✓"],
2103: ["pOH = 14 − pH = 14 − 13 = 1","[OH⁻] = 10^(−pOH) = 10⁻¹ = 0,10 mol/L","Svar: [OH⁻] = 0,10 mol/L","Kontroll: pH = 13 → starkt basisk → [OH⁻] = 0,10 mol/L (t.ex. NaOH 0,10 M) ✓"],
2104: ["c(NaOH) = 0,050 mol/L. Stark bas: [OH⁻] = c = 0,050 mol/L","pOH = −log(0,050) = −log(5×10⁻²) = 2 − log(5) = 2 − 0,699 = 1,301","pH = 14 − pOH = 14 − 1,30 = 12,70","Svar: pH = 12,70. Stark bas: full dissociation → [OH⁻] = c ✓"],
2105: ["Brønsted-Lowry: syra avger H⁺ → konjugatbas","HCl → H⁺ + Cl⁻. Cl⁻ är konjugatbasen (tog emot H⁺ möjligheten)","Konjugatbasen = syran minus H⁺: HCl − H⁺ = Cl⁻","Svar: 1 = Cl⁻. Syra/konjugatbas-par skiljs alltid av en H⁺ ✓"],
2106: ["[H⁺] = 10^(−pH) = 10⁻³ mol/L (pH = 3,0)","Ka = [H⁺]²/c ≈ (10⁻³)²/0,20 = 10⁻⁶/0,20 = 5×10⁻⁶","Svar: Ka = 5×10⁻⁶","Approximation giltig om α = [H⁺]/c = 10⁻³/0,20 = 0,5% < 5% ✓"],
2107: ["Buffer: [HA] = 0,20, [A⁻] = 0,10, pKa = 5,0","Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])","= 5,0 + log(0,10/0,20) = 5,0 + log(0,5) = 5,0 − 0,301","Svar: pH ≈ 4,70. log(0,5) = −0,301 ✓"],
2108: ["Formel: pKa = −log(Ka)","Ka = 1,8×10⁻⁵","pKa = −log(1,8×10⁻⁵) = −(log1,8 + log10⁻⁵) = −(0,255 − 5) = 4,745","Svar: pKa ≈ 4,74. Ättiksyra: pKa 4,74 — viktigt värde att känna ✓"],
2109: ["Utspädning 10×: ny c = 0,001/10 = 0,0001 = 10⁻⁴ mol/L","Stark syra: [H⁺] = 10⁻⁴ mol/L","pH = −log(10⁻⁴) = 4,0","Svar: pH = 4,0. 10× spädning → pH ökar med 1 enhet ✓"],
2110: ["n(HCl) = c × V = 0,200 × 0,050 = 0,010 mol","HCl + NaOH → NaCl + H₂O. 1:1 → n(NaOH) = 0,010 mol","V(NaOH) = n/c = 0,010/0,100 = 0,100 L = 100 mL","Svar: 100 mL NaOH. Dubbel volym eftersom c(NaOH) = halva c(HCl) ✓"],
2111: ["Kb(NH₃) = 1,8×10⁻⁵, c = 0,10 mol/L","[OH⁻] = √(Kb×c) = √(1,8×10⁻⁵×0,10) = √(1,8×10⁻⁶) = 1,342×10⁻³","pOH = −log(1,342×10⁻³) = 3 − log(1,342) = 3 − 0,128 = 2,872","pH = 14 − 2,872 = 11,13 ✓"],
2112: ["Stark syra + stark bas i lika mol → neutralisation komplett","HCl + NaOH → NaCl + H₂O. NaCl är neutralt salt","[H⁺] = [OH⁻] i lösningen → pH = 7,0","Svar: pH = 7,0. Ekvivalenspunkt stark/stark = alltid pH 7 ✓"],
2113: ["H₂CO₃ är diprotisk: Ka₁ = 4,3×10⁻⁷, c = 0,040 mol/L","Första dissociationen dominerar: [H⁺] ≈ √(Ka₁×c)","= √(4,3×10⁻⁷ × 0,040) = √(1,72×10⁻⁸) = 1,31×10⁻⁴","pH = −log(1,31×10⁻⁴) ≈ 4,42 ✓"],
2114: ["Buffert: pKa = 4,74, [HA]₀ = [A⁻]₀ = 0,15 mol/L i 1 L","Tillsätt 0,05 mol NaOH: NaOH + HA → A⁻ + H₂O","[HA]_ny = 0,15 − 0,05 = 0,10; [A⁻]_ny = 0,15 + 0,05 = 0,20","pH = 4,74 + log(0,20/0,10) = 4,74 + 0,301 = 5,04 ✓"],
2115: ["Samband: pKa + pKb = pKw = 14 (vid 25°C)","pKb(NH₃) = pKw − pKa(NH₄⁺) = 14 − 9,26 = 4,74","Svar: pKb(NH₃) = 4,74","OBS: NH₃/NH₄⁺ är ett konjugatsyra-baspar. pKa(NH₄⁺) + pKb(NH₃) = 14 ✓"],
2116: ["NH₄⁺ är syra: NH₄⁺ ⇌ H⁺ + NH₃. Ka = 5,6×10⁻¹⁰","[H⁺] = √(Ka×c) = √(5,6×10⁻¹⁰ × 0,10) = √(5,6×10⁻¹¹)","= 7,48×10⁻⁶ mol/L","pH = −log(7,48×10⁻⁶) ≈ 5,13. NH₄Cl-lösning är svagt sur ✓"],
2117: ["pH = 2,0 → [H⁺] = 10⁻² = 0,010 mol/L","V = 500 mL = 0,500 L","n(H⁺) = c × V = 0,010 × 0,500 = 0,005 mol = 5 mmol","Svar: 5 mmol H⁺. pH 2 = ganska sur, men volymen är liten ✓"],
2118: ["HNO₃ är stark syra: fullständig dissociation → [H⁺] = c = 0,050 mol/L","pH = −log(0,050) = −log(5×10⁻²) = 2 − log(5) = 2 − 0,699","Beräkna: pH = 1,30","Svar: pH = 1,30 ✓"],
2119: ["H₂SO₃ diprotisk: Ka₁ = 1,5×10⁻², Ka₂ = 6,3×10⁻⁸","Ka₁ >> Ka₂ (faktor 10⁶ skillnad)","Första dissociationen dominerar pH-beräkning","Svar: 1 (Ka₁ dominerar). Andra dissociationen är försumbar ✓"],
2120: ["Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])","log([A⁻]/[HA]) = pH − pKa = 6,0 − 5,5 = 0,5","[A⁻]/[HA] = 10^0,5 = 3,162","Svar: kvoten = 3,162. pH > pKa → mer basform än syraform ✓"],
2121: ["Halvvägspunkten: 50% av syran neutraliserad → [HA] = [A⁻]","Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1)","= pKa + 0 = 4,20","Svar: pH = 4,20 = pKa. Halvvägspunkt = enklaste metod att mäta pKa ✓"],
2122: ["Kw = 2,9×10⁻¹⁴ vid 40°C (högre T → Kw ökar)","pKw = −log(2,9×10⁻¹⁴) = 14 − log(2,9) ≈ 14 − 0,462 = 13,54","pH_neutral = ½ × pKw = 13,54/2 = 6,77","Svar: pH = 6,77. Vid 40°C är neutral lösning pH 6,77 (inte 7) ✓"],
2123: ["Buffert fungerar effektivt inom pH = pKa ± 1","Övre gränsen = pKa + 1","pKa(fosfat) = 7,2 → övre gräns = 7,2 + 1 = 8,2","Svar: pH = 8,2. Fosfatbuffert används i biologi (pH 7–8) ✓"],
2124: ["pH = 8,5 vid 25°C. Jämför med neutralt pH = 7","8,5 > 7 → fler OH⁻ än H⁺ → basisk","Svar: 3 = basisk","pH-skala: <7 sur, =7 neutral, >7 basisk ✓"],
2125: ["Vid ekvivalenspunkten: CH₃COOH → CH₃COO⁻ (salt). c_salt ≈ 0,050 mol/L","Kb(CH₃COO⁻) = Kw/Ka = 10⁻¹⁴/1,8×10⁻⁵ = 5,56×10⁻¹⁰","[OH⁻] = √(Kb × 0,050) = √(2,78×10⁻¹¹) = 5,27×10⁻⁶","pOH = 5,28; pH = 14 − 5,28 = 8,72. Svag syra/stark bas → pH > 7 ✓"],
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
