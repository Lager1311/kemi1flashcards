# -*- coding: utf-8 -*-
"""Replaces THEORY array with ~1000-word sections for all 8 topics."""

with open('kemi1-flashcards.html', 'r', encoding='utf-8') as f:
    html = f.read()

print(f"Input: {len(html)} chars")

THEORY_START = 'const THEORY = ['
THEORY_END   = '];\n\nlet theoryIdx'

ti = html.find(THEORY_START)
te = html.find(THEORY_END, ti)
assert ti > 0 and te > 0, "Anchors not found!"
print(f"THEORY: {ti} -> {te} ({te-ti} chars)")

NEW_THEORY = r"""const THEORY = [
  {
    cat: "Atomens byggnad",
    icon: "⚛️",
    html: `
<h2>⚛️ Atomens byggnad &amp; periodiska systemet</h2>
<p class="theory-intro">All materia – allt vi kan se, ta på och andas – är uppbyggt av atomer. En atom är ofattbart liten: ungefär tio miljarder atomer sida vid sida täcker en centimeter. Ändå har varje atom en komplex inre struktur som avgör exakt hur ämnet beter sig kemiskt. Det är atomens byggnad som är grunden för all kemi.</p>

<h3>Atomens tre grunddelar</h3>
<p>En atom består av två delar: en tät <strong>kärna</strong> i mitten och ett <strong>elektronskal</strong> utanför. Kärnan innehåller <strong>protoner</strong> och <strong>neutroner</strong>. Protonerna är positivt laddade (laddning +1) och deras antal kallas <em>atomnumret Z</em> – det är unikt för varje grundämne och avgör exakt vilket ämne det är. Kol har alltid Z = 6, syre alltid Z = 8, guld alltid Z = 79. Neutronerna i kärnan är elektriskt neutrala och bidrar till massan men påverkar inte ämnets kemiska beteende. De stabiliserar kärnan mot den elektrostatiska repulsionen mellan de positivt laddade protonerna.</p>
<p>Runt kärnan rör sig <strong>elektroner</strong> – negativt laddade partiklar med en massa som är nästan 2000 gånger mindre än protonens massa, praktiskt taget försumbar. En neutral atom har exakt lika många elektroner som protoner. Tar atomen upp en extra elektron bildas en negativt laddad <em>anjon</em>. Avger den en elektron bildas en positivt laddad <em>katjon</em>.</p>
<div class="formula-box">Masstal: A = Z + N   (Z = protoner, N = neutroner)
Neutroner: N = A − Z
Laddning: q = protoner − elektroner

Exempel: ²³Na (Natrium, Z=11, A=23):
  11 protoner, 12 neutroner, 11 elektroner → neutral atom
  Na⁺: 11 protoner, 10 elektroner → katjon med laddning +1</div>

<h3>Isotoper</h3>
<p>Isotoper är atomer av <em>samma grundämne</em> (samma Z) men med <em>olika antal neutroner</em> (olika A). De beter sig identiskt kemiskt – en ¹²C-atom och en ¹⁴C-atom bildar exakt samma kemiska bindningar. Däremot skiljer de sig i massa och radioaktiva egenskaper. Kol-14 är radioaktivt med en halveringstid på 5 730 år och används för att datera organiskt material (radiokoldatering). Uran-235 och uran-238 är båda uran, men bara ²³⁵U är fissilt och används i kärnreaktorer.</p>
<p>Att atommassan i periodiska systemet inte är ett heltal beror på att den är ett viktat medelvärde av alla naturliga isotoper. Klor har A<sub>r</sub> = 35,45 för att naturen innehåller ungefär 75 % ³⁵Cl och 25 % ³⁷Cl. Genomsnittet hamnar därför mellan 35 och 37.</p>
<table class="theory-table">
  <tr><th>Isotop</th><th>Protoner</th><th>Neutroner</th><th>Stabil?</th><th>Användning</th></tr>
  <tr><td>¹H (protium)</td><td>1</td><td>0</td><td>Ja</td><td>Vanligast – 99,98 % av allt väte</td></tr>
  <tr><td>²H (deuterium)</td><td>1</td><td>1</td><td>Ja</td><td>Tungt vatten i kärnreaktorer</td></tr>
  <tr><td>¹²C</td><td>6</td><td>6</td><td>Ja</td><td>Referens för atommasseenheten</td></tr>
  <tr><td>¹⁴C</td><td>6</td><td>8</td><td>Nej (t½=5730 år)</td><td>Radiokoldatering</td></tr>
  <tr><td>²³⁵U</td><td>92</td><td>143</td><td>Nej (t½=703 Mår)</td><td>Kärnkraft, kärnvapen</td></tr>
</table>

<h3>Elektronskal och elektronkonfiguration</h3>
<p>Elektroner befinner sig inte slumpmässigt runt kärnan utan i diskreta <strong>energiskal</strong> med beteckningarna n = 1, 2, 3 … Lägre n = lägre energi = närmre kärnan. Varje skal rymmer maximalt 2n² elektroner: skal 1 tar 2, skal 2 tar 8, skal 3 tar 18. I enkel skolmodell räknar vi ska 3 som maximalt 8 elektroner för grundämnena upp till argon.</p>
<p>Elektroner fyller de lägsta tillgängliga energinivåerna först – det kallas <em>Aufbau-principen</em>. De elektroner som befinner sig i det yttersta skalet kallas <strong>valenselektroner</strong> och är de som deltar i kemiska bindningar. Antalet valenselektroner avgör hur ett ämne beter sig: natrium (2,8,1) har ett valenselektron och avger den gärna → Na⁺. Klor (2,8,7) saknar ett elektron för att fylla skalet och tar gärna upp ett → Cl⁻. Ädelgaser (He, Ne, Ar …) har fullt yttersta skal och är därför extremt oreaktiva.</p>
<table class="theory-table">
  <tr><th>Atom</th><th>Z</th><th>Konfiguration</th><th>Valenselektroner</th><th>Karaktär</th></tr>
  <tr><td>H</td><td>1</td><td>1</td><td>1</td><td>Bildar 1 bindning, kan avge eller ta upp</td></tr>
  <tr><td>C</td><td>6</td><td>2, 4</td><td>4</td><td>Bildar alltid 4 bindningar – organisk kemi</td></tr>
  <tr><td>N</td><td>7</td><td>2, 5</td><td>5</td><td>3 bindningar + 1 fritt elektronpar</td></tr>
  <tr><td>O</td><td>8</td><td>2, 6</td><td>6</td><td>2 bindningar + 2 fria par</td></tr>
  <tr><td>Na</td><td>11</td><td>2, 8, 1</td><td>1</td><td>Avger 1 e⁻ lätt → Na⁺ (metall)</td></tr>
  <tr><td>Cl</td><td>17</td><td>2, 8, 7</td><td>7</td><td>Tar upp 1 e⁻ → Cl⁻ (halogen)</td></tr>
  <tr><td>Ar</td><td>18</td><td>2, 8, 8</td><td>8 (fullt)</td><td>Oreaktiv ädelgas</td></tr>
  <tr><td>Ca</td><td>20</td><td>2, 8, 8, 2</td><td>2</td><td>Avger 2 e⁻ → Ca²⁺</td></tr>
</table>

<h3>Det periodiska systemet</h3>
<p>Det periodiska systemet ordnar alla kända grundämnen (118 st) efter stigande atomnummer Z. Periodiciteten – mönstret som upprepas – uppstår för att elektronkonfigurationen upprepas varje gång ett nytt skal börjar fyllas. Varje <strong>period</strong> (rad) innehåller grundämnen med samma antal elektronskal. Period 2 har 2 skal och rymmer Li, Be, B, C, N, O, F, Ne. Varje <strong>grupp</strong> (kolumn) innehåller grundämnen med samma antal valenselektroner, vilket ger liknande kemiska egenskaper. Grupp 1 (alkalimetaller) har alltid 1 valenselektron och reagerar våldsamt med vatten. Grupp 17 (halogener) har alltid 7 valenselektroner och bildar lätt anjoner med laddning −1.</p>
<p>Längs en period ökar atomnumret och kärnan attraherar elektronerna hårdare – <strong>atomradien minskar</strong> och <strong>joniseringsenergin ökar</strong> (det krävs mer energi för att ta bort ett elektron). Nedåt i en grupp tillkommer nya elektronskal, valenselektronerna befinner sig längre från kärnan – <strong>atomradien ökar</strong> och <strong>joniseringsenergin minskar</strong>. <strong>Elektronegativiteten</strong> (mätt på Paulingskalan 0–4) visar hur starkt en atom drar åt sig elektroner i en bindning: störst för fluor (4,0) och minskar nedåt i grupp och åt vänster i period.</p>

<h3>Sambandet</h3>
<p>Atomens byggnad är nyckeln till all kemi. Atomnumret Z bestämmer vilket grundämne det är – inga två grundämnen delar Z. Antalet valenselektroner avgör bindningsförmågan och reaktiviteten. Periodiska systemets mönster uppstår automatiskt ur elektronkonfigurationen: samma antalet valenselektroner i en grupp → liknande kemi. Isotoper visar att atomnumret definierar grundämnet, men neutronerna kan variera – med konsekvenser för massa och radioaktivitet. Förståelsen av atomens byggnad gör det möjligt att förutsäga hur ett ämne reagerar, vilka bindningar det bildar och var det placerar sig i periodiska systemet – utan att ha sett ämnet förut.</p>
`
  },
  {
    cat: "Kemisk bindning",
    icon: "🔗",
    html: `
<h2>🔗 Kemisk bindning</h2>
<p class="theory-intro">Kemisk bindning är kraften som håller atomer samman till molekyler, kristaller och material. Utan bindningar skulle universum bara innehålla fria atomer. Tre huvudtyper av bindningar finns: jonbindning, kovalent bindning och metallbindning. Typen beror på vilka atomer det handlar om och hur stor skillnad i elektronegativitet de har. Varje bindningstyp ger upphov till material med helt unika egenskaper.</p>

<h3>Jonbindning</h3>
<p>Jonbindning uppstår när en metall (låg elektronegativitet, avger elektroner gärna) möter en icke-metall (hög elektronegativitet, tar gärna upp elektroner). Metallen <em>avger</em> sina valenselektroner och bildar en positivt laddad <em>katjon</em>. Icke-metallen <em>tar upp</em> elektroner och bildar en negativt laddad <em>anjon</em>. De två motsatt laddade jonerna attraherar varandra elektrostatiskt och ordnar sig i ett regelbundet tredimensionellt <strong>kristallgitter</strong>.</p>
<p>Styrkan i jonbindningen beror på jonernas laddning och storlek. Desto högre laddning och desto mindre joner, desto starkare gitter. Natriumklorid (NaCl, laddningar +1 och −1) smälter vid 801 °C. Magnesiumoxid (MgO, laddningar +2 och −2) smälter vid 2852 °C. Jonföreningar är normalt hårda men spröda: om gittret utsätts för mekanisk kraft kan lager med lika laddning hamna bredvid varandra och repulsionen klyver kristallen. De leder ström i smälta tillstånd eller i lösning – men inte som fasta ämnen – eftersom jonerna då kan röra sig fritt och transportera laddning.</p>
<div class="formula-box">Na → Na⁺ + e⁻   (joniseringsenergi krävs)
Cl + e⁻ → Cl⁻   (elektronaffinitet frigörs)
Na⁺ + Cl⁻ → NaCl(s)  (gitterenergi frigörs – 787 kJ/mol)
Nettoresultat: exoterm process – stabilt jonkristall</div>

<h3>Kovalent bindning</h3>
<p>Kovalent bindning uppstår när icke-metaller delar elektronpar för att båda ska uppnå ädelgaskonfiguration. Istället för att avge eller ta upp elektroner <em>delar</em> atomerna ett eller flera elektronpar – varje delat par utgör en bindning. Dubbelbindningar (två delade par, C=C) och trippelbindningar (tre delade par, N≡N) är kortare och starkare än enkelbindningar.</p>
<p>Om de bindande atomerna har samma eller liknande elektronegativitet drar de jämnt i det delade elektronparet – <strong>opolär kovalent bindning</strong> (H₂, O₂, N₂). Om de har olika elektronegativitet förskjuts elektronparet mot den mer elektronegativa atomen – <strong>polär kovalent bindning</strong>. Den mer elektronegativa atomen får en partiell negativ laddning δ− och den andra δ+, vilket skapar en <em>dipol</em>.</p>
<p>Om en hel molekyl har dipoler som inte tar ut varandra (pga. asymmetrisk geometri) är molekylen polar. Vatten (H₂O) är vinkelformad med 104,5° och är kraftigt polär – det förklarar dess enastående egenskaper som lösningsmedel. Koldioxid (CO₂) har polära C=O-bindningar men är linjär och symmetrisk, så dipolerna tar ut varandra – opolär molekyl trots polära bindningar.</p>
<table class="theory-table">
  <tr><th>Bindning</th><th>Delade e⁻-par</th><th>Styrka (kJ/mol)</th><th>Längd (pm)</th></tr>
  <tr><td>C−C enkelbindning</td><td>1</td><td>347</td><td>154</td></tr>
  <tr><td>C=C dubbelbindning</td><td>2</td><td>614</td><td>134</td></tr>
  <tr><td>C≡C trippelbindning</td><td>3</td><td>839</td><td>120</td></tr>
  <tr><td>N≡N trippelbindning</td><td>3</td><td>945</td><td>110</td></tr>
  <tr><td>O−H</td><td>1</td><td>463</td><td>96</td></tr>
  <tr><td>H−H</td><td>1</td><td>436</td><td>74</td></tr>
</table>

<h3>Metallbindning</h3>
<p>I en metall avger atomerna sina valenselektroner till ett gemensamt "elektronhav" som rör sig fritt mellan de positivt laddade metalljonerna i gittret. Attraktionen mellan jonerna och det rörliga elektronhavet håller samman metallen. Det fria elektronhavet förklarar direkt metallers karakteristiska egenskaper: <strong>elektrisk ledning</strong> (elektroner rör sig under spänning), <strong>värmeledning</strong> (elektroner för vidare kinetisk energi), <strong>formbarhet och duktilitet</strong> (gitterlager kan glida utan att bindningarna bryts, till skillnad från jonkristaller), och <strong>metallglans</strong> (fria elektroner absorberar och återemitterar ljus i alla frekvenser).</p>

<h3>Intermolekylära krafter</h3>
<p>Inom molekyler finns starka kovalenta bindningar. <em>Mellan</em> molekyler finns svagare krafter som avgör kokpunkt, smältpunkt, löslighet och viskositet. Det finns tre typer:</p>
<p><strong>London-dispersions­krafter (van der Waals)</strong> finns i alla ämnen. De uppstår av tillfälliga ojämn­heter i elektronfördelningen som skapar momentana dipol–dipol-växelverkan. Styrkan ökar med molekylmassan och kontaktarean. Det förklarar varför kryptongasens (Ar=84) kokpunkt är −153 °C medan heliumets (Ar=4) är −269 °C – trots att båda är ädelgaser med inga permanenta dipoler.</p>
<p><strong>Permanenta dipol–dipol-krafter</strong> finns mellan polära molekyler. HCl-molekylerna attraherar varandra starkare än H₂-molekylerna, vilket ger HCl en kokpunkt på −85 °C jämfört med H₂:s −253 °C, trots att de har liknande molmassa.</p>
<p><strong>Vätebindningar</strong> är en speciellt stark form av dipol–dipol-kraft som uppstår när ett väteatom är kovalent bundet till N, O eller F – de tre mest elektronegativa atomerna – och attraheras av ett fritt elektronpar på ett N, O eller F på en grann­molekyl. Vätebindningar är ungefär 10–40 gånger starkare än vanliga London-krafter. Vatten kokar vid 100 °C trots sin låga molmassa (18 g/mol) – utan vätebindningar skulle det koka vid ungefär −80 °C och världshaven inte existera i flytande form. Vätebindningar håller även samman DNA-strängarnas baspar (A–T och G–C) och bestämmer proteiners tredimensionella struktur.</p>
<div class="tip-box"><strong>Minnesregel:</strong> Ju starkare intermolekylär kraft → desto högre kokpunkt. London &lt; Dipol–dipol &lt; Vätebindning.</div>

<h3>Molekylgeometri och VSEPR</h3>
<p>Formen på en molekyl bestäms av hur elektronparen runt centralatomen ordnar sig för att minimera repulsionen sinsemellan – <strong>VSEPR-modellen</strong> (Valence Shell Electron Pair Repulsion). Fria elektronpar tar mer plats än bindande par och tränger ihop bindningsvinklarna. Metan (CH₄) har 4 bindande par → tetraeder, 109,5°. Ammoniak (NH₃) har 3 bindande + 1 fritt par → trigonal pyramid, 107°. Vatten (H₂O) har 2 bindande + 2 fria par → vinkelformad, 104,5°. Formen avgör om molekylen är polar eller opolär.</p>

<h3>Sambandet</h3>
<p>Bindningstypen kopplar samman atomernas elektronstruktur med materialets makroskopiska egenskaper. En jonkristall är hård och sprött men löser sig i vatten och leder ström i smälta. En kovalent molekyl kan vara gas, vätska eller fast beroende på de intermolekylära krafternas styrka. En metall formas, leder och glänser. Poläritet och molekylform avgör löslighet ("lika löser lika"), kokpunkter och reaktivitet. Vätebindningar gör vatten unikt och möjliggör livet. Allt detta följer logiskt ur en enda fråga: hur delar eller överför dessa atomer sina elektroner?</p>
`
  },
  {
    cat: "Reaktioner & stökiometri",
    icon: "⚗️",
    html: `
<h2>⚗️ Kemiska reaktioner &amp; stökiometri</h2>
<p class="theory-intro">En kemisk reaktion innebär att atomer omgrupperas: gamla bindningar bryts och nya bildas. Det är aldrig atomer som försvinner eller skapas – <em>massan är bevarad</em>. Stökiometri är den kvantitativa disciplinen som beskriver exakt hur mycket av varje ämne som förbrukas och bildas. Grunden är molbegreppet, som kopplar den osynliga atomvärlden till den vägbara gramvärlden i laboratoriet.</p>

<h3>Molbegreppet</h3>
<p>Ett <strong>mol</strong> (mol) är 6,022 × 10²³ partiklar – Avogadros tal (N<sub>A</sub>). Det valdes så att ett mol av ett grundämne har en massa i gram som är numeriskt lika med atommassan A<sub>r</sub>. Ett mol kolatomer (A<sub>r</sub> = 12,011) väger 12,011 gram. Ett mol vattenmolekyler (M = 18,015 g/mol) väger 18,015 gram. Det är bryggan mellan mikrovärlden och laboratorievågens gramvärld.</p>
<div class="formula-box">n = m / M          [mol = gram / (gram per mol)]
m = n × M          [gram]
M = Σ(Ar för alla atomer i formeln)

Exempel:
M(H₂O)  = 2×1,008 + 16,00 = 18,02 g/mol
M(NaCl) = 22,99 + 35,45 = 58,44 g/mol
M(CaCO₃)= 40,08 + 12,01 + 3×16,00 = 100,09 g/mol

36,0 g H₂O = 36,0 / 18,02 = 2,00 mol H₂O
= 2,00 × 6,022×10²³ = 1,20×10²⁴ molekyler</div>

<h3>Balansering av reaktionsformler</h3>
<p>En kemisk reaktion beskrivs med en reaktionsformel där pilar separerar reaktanter (vänster) från produkter (höger). Formeln måste balanseras: lika många atomer av varje slag på båda sidor (massabevarande). Koefficienterna framför formlerna är de tal som balanserar.</p>
<p><strong>Systematisk balanseringsmetod:</strong> Börja med det mest komplexa ämnet. Sätt koefficient 1 och balansera ett grundämne i taget. Starta gärna med kol, sedan väte, och spara syre sist. Bråkkoefficienter kan förekomma, men multiplicera hela ekvationen med lämpligt tal för att få heltal.</p>
<div class="formula-box">Balansering av propanförbränning:
Obalanserad:  C₃H₈  +  O₂  →  CO₂  +  H₂O
Balansera C:  C₃H₈ + O₂ → 3CO₂ + H₂O
Balansera H:  C₃H₈ + O₂ → 3CO₂ + 4H₂O
Balansera O:  C₃H₈ + 5O₂ → 3CO₂ + 4H₂O
Kontroll: 3C=3C ✓  8H=8H ✓  10O=10O ✓</div>

<h3>Beräkningar med molförhållanden</h3>
<p>Koefficienterna i en balanserad reaktion anger <em>molförhållanden</em> – inte gram-förhållanden. Om reaktionen är 2H₂ + O₂ → 2H₂O betyder det att 2 mol H₂ reagerar med 1 mol O₂ och ger 2 mol H₂O. Strategin är alltid: konvertera massor till mol, tillämpa molförhållandet, konvertera tillbaka till massa.</p>
<div class="formula-box">Exempel: 4Fe + 3O₂ → 2Fe₂O₃
Fråga: Hur många gram Fe₂O₃ bildas av 55,85 g järn?
  n(Fe) = 55,85 / 55,85 = 1,000 mol
  Molförhållande Fe:Fe₂O₃ = 4:2 = 2:1
  n(Fe₂O₃) = 1,000 / 2 = 0,500 mol
  M(Fe₂O₃) = 2×55,85 + 3×16,00 = 159,70 g/mol
  m(Fe₂O₃) = 0,500 × 159,70 = 79,85 g</div>

<h3>Begränsande reaktant och procentuellt utbyte</h3>
<p>I praktiken är reaktanterna sällan i exakt stökiometriska mängder. Den reaktant som tar slut först begränsar hur mycket produkt som kan bildas – den kallas <strong>begränsande reaktant</strong>. Den andra reaktanten är i överskott och en del av den förblir oreagerad.</p>
<p>För att hitta den begränsande reaktanten: beräkna hur mycket produkt varje reaktant skulle ge om den vore den enda begränsningen. Den som ger <em>minst</em> produkt är begränsande. Industrin optimerar alltid för att minimera överskott av dyra reaktanter.</p>
<div class="formula-box">Procentuellt utbyte = (verklig mängd produkt / teoretisk mängd) × 100 %

Exempel: N₂ + 3H₂ → 2NH₃
  Ges: 28 g N₂ och 9,0 g H₂
  n(N₂) = 28/28 = 1,0 mol → ger 2,0 mol NH₃
  n(H₂) = 9,0/2,016 = 4,46 mol → ger 4,46/3×2 = 2,98 mol NH₃
  Begränsande reaktant: N₂ (ger minst)
  Teoretisk mängd: 2,0 mol × 17 g/mol = 34 g NH₃
  Om verklig mängd = 28 g: utbyte = 28/34 × 100% = 82%</div>

<h3>Reaktionstyper</h3>
<table class="theory-table">
  <tr><th>Typ</th><th>Schema</th><th>Exempel</th></tr>
  <tr><td>Syntes</td><td>A + B → AB</td><td>2H₂ + O₂ → 2H₂O</td></tr>
  <tr><td>Sönderfall</td><td>AB → A + B</td><td>CaCO₃ → CaO + CO₂</td></tr>
  <tr><td>Enkel substitution</td><td>A + BC → AC + B</td><td>Zn + 2HCl → ZnCl₂ + H₂</td></tr>
  <tr><td>Dubbel substitution</td><td>AB + CD → AD + CB</td><td>AgNO₃ + NaCl → AgCl↓ + NaNO₃</td></tr>
  <tr><td>Förbränning</td><td>CₓHᵧ + O₂ → CO₂ + H₂O</td><td>CH₄ + 2O₂ → CO₂ + 2H₂O</td></tr>
  <tr><td>Neutralisation</td><td>syra + bas → salt + H₂O</td><td>HCl + NaOH → NaCl + H₂O</td></tr>
  <tr><td>Redox</td><td>oxidation + reduktion</td><td>Zn + Cu²⁺ → Zn²⁺ + Cu</td></tr>
</table>

<h3>Redoxreaktioner</h3>
<p>I en redoxreaktion överförs elektroner från ett ämne (som <em>oxideras</em> och förlorar elektroner) till ett annat (som <em>reduceras</em> och vinner elektroner). Minnesregeln är <strong>OIL RIG</strong>: Oxidation Is Loss, Reduction Is Gain. Oxidationsmedlet är det ämne som tar upp elektroner (och reduceras självt). Reduktionsmedlet ger ifrån sig elektroner (och oxideras självt).</p>
<p>Oxidationstalet spårar elektronöverföringen. Fria element har oxidationstal 0. I föreningar gäller: O nästan alltid −2, H nästan alltid +1, och summan av alla oxidationstal = totala laddningen. En ökning av oxidationstalet = oxidation; minskning = reduktion.</p>
<div class="formula-box">Zn + Cu²⁺ → Zn²⁺ + Cu
Zn: 0 → +2  (oxideras; Zn är reduktionsmedel)
Cu²⁺: +2 → 0  (reduceras; Cu²⁺ är oxidationsmedel)

Halvreaktioner:
Oxidation:  Zn → Zn²⁺ + 2e⁻
Reduktion:  Cu²⁺ + 2e⁻ → Cu
Netto:      Zn + Cu²⁺ → Zn²⁺ + Cu</div>

<h3>Sambandet</h3>
<p>Stökiometri är den matematiska ryggraden i kemin. Molbegreppet kopplar atomernas värld till gramvågen i laboratoriet. Balanseringen av reaktionsformler är ett uttryck för massabevarandets naturlag. Molförhållandena berättar exakt hur mycket av varje ämne som krävs eller bildas – det är grundläggande för industriell kemisk produktion, läkemedelstillverkning och miljökemi. Den begränsande reaktanten förklarar varför reaktioner sällan ger 100 % utbyte och hur man optimerar processer. Redoxkemin binder samman elektrokemi, korrosion, biologisk metabolism och energilagring i ett och samma ramverk: elektronöverföring.</p>
`
  },
  {
    cat: "Syror & baser",
    icon: "🧪",
    html: `
<h2>🧪 Syror &amp; baser</h2>
<p class="theory-intro">Syror och baser är allestädes i vardagen: citronsyra i frukter, magsyra som smälter mat, bakpulver som lyfter bröd, tvål som rengör. Blodet i din kropp håller ett pH på exakt 7,35–7,45 med hjälp av buffertlösningar – avviker det med mer än 0,2 enheter kan det vara livshotande. Syra-baskemi handlar om protonöverföring, och det är ett av kemins mest grundläggande koncept.</p>

<h3>Brønsted-Lowry-teorin</h3>
<p>Enligt Brønsted-Lowry är en <strong>syra</strong> ett ämne som <em>donerar</em> en proton (H⁺) och en <strong>bas</strong> ett ämne som <em>accepterar</em> en proton. Reaktionen där detta sker kallas <strong>protolys</strong>. Varje syra-basreaktion bildar ett <em>korresponderande syra-baspar</em>: syrans konjugerade bas (HA/A⁻) och basens konjugerade syra (B/BH⁺) skiljer sig med exakt ett H⁺. <strong>Amfolyter</strong> kan agera som både syra och bas beroende på motparten – vatten är det viktigaste exemplet: det tar emot H⁺ från starka syror (agerar bas) och avger H⁺ till starka baser (agerar syra).</p>
<div class="formula-box">HA + B ⇌ A⁻ + BH⁺
(syra)(bas)(konj.bas)(konj.syra)

CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺
  syra      bas    konj.bas   konj.syra

HCl + H₂O → Cl⁻ + H₃O⁺  (stark syra, fullständig reaktion →)