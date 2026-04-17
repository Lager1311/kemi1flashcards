import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

new_steps = {
# ELKEM lv2-3 (1606-1613)
1606: [
    "Känd data: m=6,35 g Cu, M=63,5 g/mol, I=5,0 A. Cu²⁺+2e⁻→Cu (n=2 elektroner per Cu)",
    "Formel: t = m×n×F/(M×I) — Faradays elektrolyslag löst för tid",
    "Beräkna: mol Cu = 6,35/63,5 = 0,100 mol. Q = 0,100×2×96500 = 19300 C. t = 19300/5,0 = 3860 s",
    "Svar: t = 3860 s ≈ 64 min. Dubbel ström → halva tiden (Q = I×t) ✓"
],
1607: [
    "Känd data: E°(Au³⁺/Au)=+1,50 V (katod), E°(Cr³⁺/Cr)=−0,74 V (anod). Au reduceras, Cr oxideras",
    "Formel: E°cell = E°katod − E°anod — katoden har alltid den högre potentialen",
    "Beräkna: E°cell = +1,50 − (−0,74) = 1,50 + 0,74 = 2,24 V",
    "Svar: E°cell = 2,24 V. Positiv E° → spontan galvanisk cell. Stor spänningsskillnad ✓"
],
1608: [
    "Känd data: I=3,0 A, t=9650 s, M(Al)=27 g/mol. Al³⁺+3e⁻→Al (n=3 elektroner per Al-atom)",
    "Formel: m = I×t×M/(n×F) — Faradays massformel för elektrolys",
    "Beräkna: Q = 3,0×9650 = 28950 C. mol e⁻ = 28950/96500 = 0,300. mol Al = 0,300/3 = 0,100. m = 0,100×27 = 2,70 g",
    "Svar: m(Al) = 2,70 g. Aluminium kräver 3 elektroner — tre gånger mer laddning än Ag ✓"
],
1609: [
    "Känd data: E°cell = 1,10 V (Zn/Cu-cellen), n = 2 elektroner, F = 96500 C/mol",
    "Formel: ΔG° = −nFE° — samband elektrokemi och Gibbs fri energi",
    "Beräkna: ΔG° = −2 × 96500 × 1,10 = −212300 J = −212,3 kJ",
    "Svar: ΔG° = −212 kJ. Negativt → spontan reaktion. |ΔG°| = max nyttigt arbete ✓"
],
1610: [
    "Känd data: E°=+1,23 V, pH=7 → [H⁺]=10⁻⁷ M, p(O₂)=1 atm. O₂+4H⁺+4e⁻→2H₂O (n=4)",
    "Formel: E = E° − (0,0592/n)×log Q. Reaktionskvot Q = p(O₂)×[H⁺]⁴ i täljaren är 1/Q",
    "Beräkna: Q = 1/[H⁺]⁴ = (10⁷)⁴ = 10²⁸. E = 1,23 − (0,0592/4)×28 = 1,23 − 0,414 = 0,816 V",
    "Svar: E = 0,816 V vid pH 7. Neutral pH sänker potentialen med 0,41 V (Nernst-effekt) ✓"
],
1611: [
    "Känd data: I=2,0 A, t=4825 s, STP. Katodreaktion: 2H⁺+2e⁻→H₂ (2 elektroner per H₂)",
    "Formel: n(H₂) = Q/(2F), volym V = n × 22,4 L/mol vid STP",
    "Beräkna: Q = 2,0×4825 = 9650 C. mol e⁻ = 9650/96500 = 0,100. mol H₂ = 0,050. V = 0,050×22,4 = 1,12 L",
    "Svar: V(H₂) = 1,12 L. Anoden ger O₂: 0,025 mol = 0,56 L. H₂:O₂ = 2:1 volymförhållande ✓"
],
1612: [
    "Känd data: E°(Fe²⁺/Fe)=−0,44 V (katod/skyddas), E°(Zn²⁺/Zn)=−0,76 V (anod/korroderar)",
    "Formel: E°cell = E°katod − E°anod. Zink offeranod: lägre potential → oxideras först",
    "Beräkna: E°cell = (−0,44) − (−0,76) = −0,44 + 0,76 = +0,32 V",
    "Svar: E°cell = +0,32 V. Spontan cell: Zn korroderar och skyddar järnet katodiskt ✓"
],
1613: [
    "Känd data: Ag⁺+e⁻→Ag (n=1 elektron per Ag). 3,0 mol Ag ska deponeras. F = 96500 C/mol",
    "Formel: Q = n(Ag) × n_e × F — total laddning proportionell mot mol elektroner",
    "Beräkna: Q = 3,0 × 1 × 96500 = 289500 C",
    "Svar: Q = 289500 C = 289,5 kC. Silver kräver bara 1 elektron → effektivt plätering ✓"
],

# STOIK lv1-3 (1701-1708, 1710-1713)
1701: [
    "Känd data: 3,0 mol N₂ (överskott H₂). Balanserad reaktion: N₂ + 3H₂ → 2NH₃",
    "Stökiometri: molförhållande N₂:NH₃ = 1:2 (koefficienter). n(NH₃) = 2 × n(N₂)",
    "Beräkna: n(NH₃) = 2 × 3,0 = 6,0 mol",
    "Svar: n(NH₃) = 6,0 mol. Varje N₂-molekyl ger 2 NH₃ — Haber-Bosch ✓"
],
1702: [
    "Känd data: 2,0 mol C (kol), M(CO₂)=44 g/mol. Balanserad reaktion: C + O₂ → CO₂",
    "Stökiometri: C:CO₂ = 1:1. n(CO₂) = n(C) = 2,0 mol (direkt utbyte)",
    "Beräkna: m(CO₂) = n × M = 2,0 × 44 = 88 g",
    "Svar: m(CO₂) = 88 g. Kolets förbränning: 12 g C ger 44 g CO₂ (massökning pga O₂) ✓"
],
1703: [
    "Känd data: m(H₂O)=3,6 g, M(H₂O)=18 g/mol, M(H₂)=2 g/mol. Reaktion: 2H₂+O₂→2H₂O",
    "Stökiometri: H₂:H₂O = 2:2 = 1:1. n(H₂) = n(H₂O) (samma koefficienter)",
    "Beräkna: n(H₂O) = 3,6/18 = 0,20 mol. n(H₂) = 0,20 mol. m(H₂) = 0,20×2 = 0,40 g",
    "Svar: m(H₂) = 0,40 g. H₂ väger lite (M=2) — liten massa ger stor volym gas ✓"
],
1704: [
    "Känd data: 6,0 mol CO₂ bildas. Balanserad reaktion: Fe₂O₃ + 3CO → 2Fe + 3CO₂",
    "Stökiometri: Fe:CO₂ = 2:3. n(Fe) = n(CO₂) × (2/3)",
    "Beräkna: n(Fe) = 6,0 × (2/3) = 4,0 mol",
    "Svar: n(Fe) = 4,0 mol. Masugnsreaktion — reduktion av järnmalm med koks ✓"
],
1705: [
    "Känd data: 3,0 mol H₂, 1,0 mol N₂. Reaktion: 3H₂+N₂→2NH₃. Behövs: 3 mol H₂ per 1 mol N₂",
    "Kontroll: H₂/N₂ = 3,0/1,0 = 3,0 = exakt det krävda förhållandet → perfekt stökiometri",
    "Beräkna: n(NH₃) = 2 × n(N₂) = 2 × 1,0 = 2,0 mol. m = 2,0 × 17 = 34 g",
    "Svar: m(NH₃) = 34 g. Inget överskott, inget begränsande reagens — 100% utnyttjande ✓"
],
1706: [
    "Känd data: 2,0 mol Al, 2,0 mol Cl₂. M(AlCl₃)=133,5. Reaktion: 2Al+3Cl₂→2AlCl₃",
    "Begränsande reagens: 2,0 mol Al kräver 3,0 mol Cl₂. Bara 2,0 mol Cl₂ finns → Cl₂ begränsar",
    "Beräkna: n(AlCl₃) = n(Cl₂) × (2/3) = 2,0 × (2/3) = 1,333 mol. m = 1,333 × 133,5 = 178 g",
    "Svar: m(AlCl₃) = 178 g. Al är i överskott (0,667 mol Al används ej) ✓"
],
1707: [
    "Känd data: 2,0 mol CH₄, 6,0 mol O₂. M(O₂)=32 g/mol. Reaktion: CH₄+2O₂→CO₂+2H₂O",
    "Stökiometri: 1 mol CH₄ kräver 2 mol O₂ → 2,0 mol CH₄ förbrukar 4,0 mol O₂",
    "Beräkna: Överskott O₂ = 6,0 − 4,0 = 2,0 mol. m(överskott) = 2,0 × 32 = 64 g",
    "Svar: m(överskott O₂) = 64 g. CH₄ är begränsande reagens — 2 mol O₂ reagerar ej ✓"
],
1708: [
    "Känd data: 2,0 mol Fe (=112 g), M(Fe₂O₃)=160 g/mol. Reaktion: 4Fe+3O₂→2Fe₂O₃",
    "Stökiometri: Fe:Fe₂O₃ = 4:2 = 2:1. n(Fe₂O₃) = n(Fe)/2",
    "Beräkna: n(Fe₂O₃) = 2,0/2 = 1,0 mol. m = 1,0 × 160 = 160 g",
    "Svar: m(Fe₂O₃) = 160 g. Järn oxideras — massan ökar med O₂ från luften ✓"
],
1710: [
    "Känd data: 44 g CO₂ (M=44 g/mol), 18 g H₂O (M=18 g/mol). Bestäm n(H)/n(C)",
    "Formel: varje CO₂ ger 1 C-atom; varje H₂O ger 2 H-atomar",
    "Beräkna: n(C) = 44/44 = 1,0 mol. n(H₂O) = 18/18 = 1,0 mol → n(H) = 2×1,0 = 2,0 mol",
    "Svar: n(H)/n(C) = 2,0/1,0 = 2. Empirisk formel CH₂ (t.ex. eten C₂H₄ eller propen C₃H₆) ✓"
],
1711: [
    "Känd data: 1,0 mol A. Steg 1: A → 2B (utbyte 80%). Steg 2: B → C (utbyte 90%)",
    "Metod: multiplicera steg för steg — faktisk utmängd = teoretisk × utbyte",
    "Beräkna: n(B) = 1,0 × 2 × 0,80 = 1,6 mol. n(C) = 1,6 × 0,90 = 1,44 mol",
    "Svar: n(C) = 1,44 mol. Kumulativt utbyte: 80% × 90% = 72% av max 2,0 mol ✓"
],
1712: [
    "Känd data: faktisk massa = 7,4 g, procentuellt utbyte = 37% = 0,37",
    "Formel: utbyte = faktisk/teoretisk → m_teor = m_faktisk / utbyte",
    "Beräkna: m_teor = 7,4 / 0,37 = 20 g",
    "Svar: m_teor = 20 g. Bara 37% av teoretisk mängd erhölls — typiskt i organisk syntes ✓"
],
1713: [
    "Känd data: 4,0 mol A + 3,0 mol B. Reaktion: 2A+B→3C. Utbyte=75%, M(C)=30 g/mol",
    "Begränsande: 4,0 mol A kräver 4,0/2=2,0 mol B. Tillgängligt: 3,0 mol B → A begränsar",
    "Beräkna: n(C)_teor = 4,0×(3/2) = 6,0 mol. n(C)_faktisk = 6,0×0,75 = 4,5 mol. m = 4,5×30 = 135 g",
    "Svar: m(C) = 135 g. A är begränsande reagens; 25% förlust i utbyte ✓"
],
}

replaced = 0
for pid, steps in new_steps.items():
    new_steps_str = "steps:['" + "','".join(steps) + "']"
    pat = re.compile(r"([ \t]*\bid:" + str(pid) + r",.*?)steps:\[(?:[^\[\]]|\[[^\[\]]*\])*\]", re.DOTALL)
    def replace_steps(m, ns=new_steps_str):
        return m.group(1) + ns
    new_content, n = pat.subn(replace_steps, content, count=1)
    if n == 1:
        content = new_content
        replaced += 1
    else:
        print(f"MISS: id:{pid}")
        # Fallback: find steps:[ and match brackets
        m = re.search(r'\bid:' + str(pid) + r',', content)
        if m:
            block_start = m.start()
            si = content.find('steps:[', block_start)
            if si != -1 and si < block_start + 1000:
                j = si + 7
                depth = 0
                in_str = False
                str_char = None
                esc = False
                bs = chr(92)
                while j < len(content):
                    ch = content[j]
                    if esc: esc = False
                    elif ch == bs: esc = True
                    elif in_str:
                        if ch == str_char: in_str = False
                    else:
                        if ch in ("'", '"'): in_str = True; str_char = ch
                        elif ch == '[': depth += 1
                        elif ch == ']':
                            if depth == 0: break
                            depth -= 1
                    j += 1
                content = content[:si] + new_steps_str + content[j+1:]
                replaced += 1
                print(f"  Fixed via fallback: id:{pid}")

print(f"Replaced {replaced}/{len(new_steps)}")
with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Saved.")
