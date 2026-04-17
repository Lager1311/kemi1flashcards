# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

NEW_ELEKTROKEMI = """  { cat: 'Elektrokemi', icon: '⚡', html: `
<h2>⚡ Elektrokemi</h2>
<p class="theory-intro">Elektrokemi handlar om sambandet mellan kemiska reaktioner och elektrisk ström. Utgångspunkten är redoxreaktioner – reaktioner där elektroner överförs från ett ämne till ett annat. Den avgörande insikten är att om vi <em>skiljer</em> oxidationen och reduktionen åt rumsligt, kan vi tvinga elektronerna att flöda genom en yttre ledning: det är elektricitet. Förstår man det sambandet kan man förklara hur ett batteri fungerar, varför järn rostar och hur aluminium framställs industriellt.</p>

<h3>1. Grunden: redoxreaktioner och elektronöverföring</h3>
<p>En redoxreaktion innebär att elektroner överförs från ett ämne (<strong>reduktionsmedlet</strong> – oxideras) till ett annat (<strong>oxidationsmedlet</strong> – reduceras). <strong>Oxidationstal</strong> är ett verktyg för att spåra detta: ökat oxidationstal = oxidation; minskat oxidationstal = reduktion.</p>
<p>Minnesregel: <strong>OIL RIG</strong> – Oxidation Is Loss (of electrons), Reduction Is Gain. Eller: <strong>Leo</strong> säger <strong>Ger</strong> (Loss of Electrons = Oxidation; Gain of Electrons = Reduction).</p>
<div class="formula-box">Exempel – total redoxreaktion:
Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)

Halvreaktioner:
Oxidation:  Zn → Zn²⁺ + 2e⁻   (Zn: OT 0 → +2, avger e⁻ = reduktionsmedel)
Reduktion: Cu²⁺ + 2e⁻ → Cu    (Cu: OT +2 → 0, tar e⁻ = oxidationsmedel)

OBS: elektroner avges och tas upp LIKA MÅNGA – laddning är bevarad.</div>
<p>Om detta sker i samma kärl (Zn-bit i CuSO₄-lösning) sker elektronöverföringen direkt – ingen elektrisk ström uppstår. Men om vi <em>separerar</em> de två halvreaktionerna rumsligt och kopplar ihop dem med en ledning, tvingas elektronerna ta vägen via ledningen – och vi har elektrisk ström.</p>

<h3>2. Galvaniskt element – separerade halvreaktioner ger ström</h3>
<p>I ett <strong>galvaniskt element</strong> (voltaisk cell) placeras de två halvreaktionerna i separata halvkärlar förbundna med:</p>
<ul>
  <li><strong>En yttre metalledning</strong> – elektroner flödar från oxidationskärlet till reduktionskärlet (det vi kallar elektrisk ström).</li>
  <li><strong>En saltbrygga eller porös vägg</strong> – joner vandrar för att balansera laddningarna och hålla den inre kretsen sluten (utan saltbrygga byggs en laddningsgradient upp som stoppar reaktionen).</li>
</ul>
<p><strong>Anod</strong> är elektroden där oxidation sker – metallen löses upp och avger elektroner. I ett galvaniskt element är anoden den <em>negativa</em> polen (elektroner lämnar härifrån). <strong>Katod</strong> är elektroden där reduktion sker – joner tar upp elektroner och deponeras. I ett galvaniskt element är katoden den <em>positiva</em> polen (elektroner anländer hit).</p>
<p>Minnesregel: <strong>A</strong>nod = <strong>A</strong>vgång av elektroner (oxidation). <strong>K</strong>atod = <strong>K</strong>ommer elektroner (reduktion).</p>
<div class="formula-box">Daniell-cellen (Zn/Cu) – ett klassiskt galvaniskt element:
Anod (−):  Zn(s) → Zn²⁺(aq) + 2e⁻     (oxidation, zink löses upp)
Katod (+): Cu²⁺(aq) + 2e⁻ → Cu(s)     (reduktion, koppar fälls ut)
Total:     Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)

Elektronflöde (yttre ledning): Zn → Cu
Jonflöde (saltbrygga): SO₄²⁻ vandrar mot Zn-sidan
                        Zn²⁺/Cu²⁺ balanseras i lösningarna</div>

<h3>3. Cellschema – standardnotation</h3>
<p>Ett cellschema är en kompakt notation som tydliggör cellens uppbyggnad:</p>
<div class="formula-box">Notation: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)
         ↑              ↑    ↑↑             ↑
       anod         fas-   salt-        katod
                   gräns  brygga

Regler:
• Anod (oxidation) till VÄNSTER, katod (reduktion) till HÖGER
• | = fasgräns (t.ex. fast–lösning)
• || = saltbrygga
• Koncentrationer anges i parentes: Zn²⁺(aq, 0,10 M)

Annat exempel:
Fe(s) | Fe²⁺(aq) || Ag⁺(aq) | Ag(s)
→ järn oxideras (anod), silver reduceras (katod)</div>

<h3>4. Normalpotential E° och elektrokemiska spänningsserien</h3>
<p>Varje halvreaktion har en karakteristisk <strong>reduktionspotential</strong> – ett mått på hur benäget ett ämne är att reduceras (ta upp elektroner). För att jämföra dem mäts alla mot en gemensam referens.</p>
<p><strong>Normalvätgaselektroden (NHE)</strong> är referensen: en platinaplåt i kontakt med H₂(g) vid 1 atm och 1 mol/L H⁺-lösning. Dess potential definieras till exakt <strong>E° = 0,00 V</strong>. Alla halvreaktioners normalpotentialer mäts relativt NHE under standardförhållanden (25 °C, 1 mol/L, 1 atm).</p>
<ul>
  <li><strong>Positiv E°</strong> → ämnet reduceras hellre än H₂ reduceras → ädel metall, starkt oxidationsmedel</li>
  <li><strong>Negativ E°</strong> → ämnet oxideras hellre än H₂ → oädel metall, starkt reduktionsmedel</li>
</ul>
<table class="theory-table">
  <tr><th>Halvreaktion (alltid skriven som reduktion)</th><th>E° (V)</th></tr>
  <tr><td>F₂ + 2e⁻ → 2F⁻</td><td>+2,87</td></tr>
  <tr><td>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</td><td>+1,51</td></tr>
  <tr><td>Cl₂ + 2e⁻ → 2Cl⁻</td><td>+1,36</td></tr>
  <tr><td>Ag⁺ + e⁻ → Ag</td><td>+0,80</td></tr>
  <tr><td>Cu²⁺ + 2e⁻ → Cu</td><td>+0,34</td></tr>
  <tr><td><strong>2H⁺ + 2e⁻ → H₂</strong></td><td><strong>0,00 (referens)</strong></td></tr>
  <tr><td>Fe²⁺ + 2e⁻ → Fe</td><td>−0,44</td></tr>
  <tr><td>Zn²⁺ + 2e⁻ → Zn</td><td>−0,76</td></tr>
  <tr><td>Al³⁺ + 3e⁻ → Al</td><td>−1,66</td></tr>
  <tr><td>Li⁺ + e⁻ → Li</td><td>−3,04</td></tr>
</table>
<p><strong>Tolka spänningsserien:</strong> En halvreaktion med <em>lägre</em> E° agerar som anod (oxideras) i förhållande till en med <em>högre</em> E° som agerar katod. Zn (−0,76 V) reducerar Cu²⁺ (+0,34 V) spontant. Cu (+0,34 V) kan inte reducera Zn²⁺ (−0,76 V) – icke-spontant.</p>
<p>Halogener rangordnas (oxiderande styrka): F₂ > Cl₂ > Br₂ > I₂. Cl₂ kan oxidera Br⁻ och I⁻, men inte F⁻. Metaller under H₂ i serien reagerar med syra: Fe + 2HCl → FeCl₂ + H₂↑. Metaller ovanför H₂ (Cu, Ag, Au) reagerar inte med utspädd syra.</p>

<h3>5. EMK – hur man beräknar spänningen</h3>
<p>EMK (elektromotorisk kraft) är spänningen ett galvaniskt element levererar. Den beräknas som skillnaden i normalpotential:</p>
<div class="formula-box">E°cell = E°(katod) − E°(anod)
      (alltid: katod minus anod, båda skrivna som reduktionspotentialer)

Positiv E°cell → reaktionen är SPONTAN → cellen levererar el
Negativ E°cell → icke-spontan (omvända är spontan)

Exempel 1 – Daniell-cellen:
E°cell = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = +0,34 − (−0,76) = +1,10 V ✓

Exempel 2 – Fe–Ag-cell:
E°cell = E°(Ag⁺/Ag) − E°(Fe²⁺/Fe) = +0,80 − (−0,44) = +1,24 V
(järn = anod, silver = katod)

Sambandet med termokemi:
ΔG° = −n × F × E°cell
n = antal elektroner (t.ex. 2 för Zn→Cu²⁺)
F = 96 485 C/mol (Faradays konstant)
Negativt ΔG° bekräftar spontan reaktion</div>

<h3>6. Elektrolys – tvinga reaktioner med extern ström</h3>
<p><strong>Elektrolys</strong> är det omvända mot ett galvaniskt element: en extern strömkälla tvingar en icke-spontan redoxreaktion att ske. Strömkällan "pumpar" elektroner mot den naturliga riktningen.</p>
<p>I en elektrolyscell är polernas funktion:</p>
<ul>
  <li><strong>Katod</strong> (kopplad till −-pol) → elektroner levereras hit → <strong>reduktion</strong> sker</li>
  <li><strong>Anod</strong> (kopplad till +-pol) → elektroner dras härifrån → <strong>oxidation</strong> sker</li>
</ul>
<p>Vilken reaktion sker? Vid katoden reduceras den jon med <em>högst</em> normalpotential (lättast att reducera) föredrages. Vid anoden oxideras det ämne med <em>lägst</em> normalpotential (svårast att reducera = lättast att oxidera).</p>
<div class="formula-box">Elektrolys av CuSO₄(aq) med kopparelektroder:
Katod: Cu²⁺ + 2e⁻ → Cu(s)     (E° = +0,34 V, hellre än H₂O reduceras)
Anod: Cu(s) → Cu²⁺ + 2e⁻      (kopparanoden löses – används vid elraffining)

Elektrolys av vatten (med Na₂SO₄ som elektrolyt):
Katod: 2H₂O + 2e⁻ → H₂(g) + 2OH⁻
Anod:  2H₂O → O₂(g) + 4H⁺ + 4e⁻
Volymsförhållande: H₂:O₂ = 2:1 (speglar reaktionens stökiometri)</div>
<p><strong>Faradays lagar</strong> – mängden ämne som bildas beror på laddningen:</p>
<div class="formula-box">Q = I × t          (laddning i Coulomb = Ampere × sekunder)
n(e⁻) = Q / F      (mol elektroner, F = 96 485 C/mol)
n(ämne) = n(e⁻)/z  (z = elektroner per formelenhet, t.ex. 2 för Cu²⁺)
m = n × M          (massa i gram)

Exempel: Deponera Ag (z=1) vid I = 0,50 A i 10 min = 600 s
Q = 0,50 × 600 = 300 C
n(e⁻) = 300 / 96 485 = 3,11×10⁻³ mol
n(Ag) = 3,11×10⁻³ mol
m(Ag) = 3,11×10⁻³ × 107,9 = 0,335 g</div>
<p>Industriella tillämpningar: Aluminiumframställning (smält Al₂O₃, Hall-Héroult-processen); klor-alkali-industrin (NaCl + H₂O → Cl₂ + H₂ + NaOH); elektroplätering (skyddsbeläggningar, koppar/krom/guld).</p>

<h3>7. Korrosion – okontrollerad galvanism</h3>
<p>Korrosion är i grunden ett oönskat galvaniskt element som uppstår spontant. Järnrostning kräver <em>fukt</em> (elektrolyt) och <em>syre</em> (oxidationsmedel):</p>
<div class="formula-box">Anod (Fe-yta): Fe → Fe²⁺ + 2e⁻          E° = −0,44 V
Katod (O₂-yta): O₂ + 4H⁺ + 4e⁻ → 2H₂O  E° = +1,23 V
E°cell = 1,23 − (−0,44) = +1,67 V  → SPONTAN (järn rostar spontant!)

Fe²⁺ oxideras vidare: 4Fe²⁺ + O₂ + 8OH⁻ → 4Fe(OH)₂ → 2Fe₂O₃·H₂O (rost)</div>
<p>Rost är <em>porös</em> och skyddar inte järnet – korrosionen fortgår in på djupet. Det förklarar varför järn rostar igenom, men aluminium inte gör det trots att Al är mer oädelt (se passivering nedan).</p>
<p><strong>Galvanisk korrosion:</strong> När två metaller med olika E° är i elektrisk kontakt i fuktig miljö, fungerar den oädlare som anod och oxideras snabbare. Exempel: aluminium (E° = −1,66 V) och koppar (E° = +0,34 V) i kontakt → aluminium äts snabbt upp. Järnspik i kopparplåt = järn korroderar. Salt accelererar korrosion (bättre elektrolyt).</p>

<h3>8. Korrosionsskydd</h3>
<p>Varje skyddsmetod tar bort ett av korrosionens nödvändiga villkor (elektrolyt, syre, elektrokemisk krets) eller vänder spänningsserieprincipen till sin fördel:</p>
<ul>
  <li><strong>Passivering</strong> – metallen bildar spontant ett <em>tätt, vidhäftande</em> oxidskikt som blockerar vidare reaktion. Al → Al₂O₃ (tunt, genomskinligt, 4 nm). Cr → Cr₂O₃ (grunden för "rostfritt" stål). Passivering är varför aluminium tycks korrosionsbeständigt trots lågt E°. Skiktet läker sig självt om det skadas (i närvaro av O₂).</li>
  <li><strong>Galvanisering</strong> – belägga stål med zink. Zink (E° = −0,76 V) är mer oädelt än järn (−0,44 V). Om beläggningen skadas är zink fortfarande anod och skyddar järnet elektrochemiskt (katodiskt skydd). Används på bilar, räcken, plåttak.</li>
  <li><strong>Offeranod</strong> – en bult eller platta av Zn eller Mg ansluts elektriskt till konstruktionen. Offeranden fungerar som anod; konstruktionen är katod och korroderar inte. Används på fartyg, undervattensledningar, betong i havsvatten. Offeranodens E° måste vara lägre än konstruktionens (Mg: −2,37 V, Zn: −0,76 V, järn: −0,44 V). Byts ut regelbundet.</li>
  <li><strong>Ytbeläggning</strong> – färg, lack, emalj, plastbeläggning isolerar metallen från elektrolyt och syre (bryter kretsen). Kräver intakt beläggning; ett repat skikt ger ibland accelererad korrosion i repan.</li>
  <li><strong>Katodiskt skydd med extern ström</strong> – en extern strömkälla håller järnkonstruktionen som katod (negativ pol). Anoden (ett offerbart material) oxideras istället. Används för underjordiska rörledningar och betongkonstruktioner.</li>
</ul>

<h3>9. Sambandet – allt hänger ihop</h3>
<p>Elektrokemi är redoxkemins praktiska tillämpning. Elektronegativiteten (bindningsläran) bestämmer oxidationstal och reaktionstendenser → normalpotentialen är ett kvantitativt mått på detta. E°cell kopplas via ΔG° = −nFE° direkt till Gibbs fria energi (termokemi) och jämviktskonstanten K. En stor positiv E°cell ger ett stort negativt ΔG° och ett stort K – reaktionen är fullständig. Faradays lagar kopplar elektrokemi till stökiometri. Korrosionsskyddet är tillämpad spänningsserie: förstå varför metaller rangordnas som de gör, så förstår man varför offeranodens metall måste väljas noga. Hela batteriteknologin – från ett 1,5 V AA-batteri till ett modernt Li-ion-batteri – är elektrokemi i praktiken.</p>
`"""

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

start_marker = "  { cat: 'Elektrokemi', icon: '\u26a1', html: `"
end_marker   = "\n` },\n  { cat: 'Termokemi \u0026 energi'"

idx_s = content.find(start_marker)
idx_e = content.find(end_marker)
print(f"Elektrokemi idx_s={idx_s}, idx_e={idx_e}")

if idx_s > 0 and idx_e > idx_s:
    content = content[:idx_s] + NEW_ELEKTROKEMI + "\n` },\n  { cat: 'Termokemi \u0026 energi'" + content[idx_e + len("\n` },\n  { cat: 'Termokemi \u0026 energi'"):]
    with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done! Replaced Elektrokemi section.")
else:
    print("ERROR: markers not found")
    # Try alternate form
    idx_s2 = content.find("{ cat: 'Elektrokemi'")
    print(f"  Alternate search: {idx_s2}")
    if idx_s2 > 0:
        print(f"  Context: {content[idx_s2:idx_s2+60]!r}")
