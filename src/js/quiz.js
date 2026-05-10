// ═══════════════════════════════════════════════════════
//  ÖVNINGSUPPGIFTER (PROBLEMS)
// ═══════════════════════════════════════════════════════


const THEORY = [
  { cat: 'Atomens byggnad', icon: '⚛️', html: `
<h2>⚛️ Atomens byggnad &amp; periodiska systemet</h2>
<p class="theory-intro">All materia runt om oss – luften vi andas, vattnet vi dricker, människokroppen själv – är uppbyggd av atomer. En atom är så liten att ungefär tio miljarder atomer sida vid sida skulle täcka en centimeter. Ändå har varje enskild atom en rik inre struktur som i detalj avgör hur ämnet beter sig: huruvida det är en metall eller icke-metall, hur det reagerar, vilka bindningar det bildar och var i periodiska systemet det hör hemma.</p>

<h3>1. Atomens historia och modeller</h3>
<p>Föreställningen om atomen är gammal. De grekiska filosoferna Leukippos och Demokritos föreslog redan på 400-talet f.Kr. att materia är diskontinuerlig – att man till slut når en minsta, odelbar enhet, <em>atomos</em> (gr. "odelbar"). Det dröjde dock två tusen år innan idén fick vetenskaplig grund.</p>
<p><strong>John Dalton</strong> (1803) formulerade den första moderna atomteorin: varje grundämne består av identiska atomer, och kemiska reaktioner är omgrupperingar av atomer – inga atomer skapas eller förstörs. Daltons modell var en massiv, odelbar sfär.</p>
<p><strong>J.J. Thomson</strong> (1897) upptäckte elektronen med hjälp av katodstrålsröret. Han föreslog "russinbulle-modellen": elektroner (russin) inbäddade i en positiv deg. Modellen var fel men revolutionerande – för första gången visste man att atomen <em>hade</em> delar.</p>
<p><strong>Ernest Rutherford</strong> (1911) genomförde sitt berömda guldfoliexperiment. Han sköt alfapartiklar mot ett 0,0001 mm tunt guldfolium. Om Thomsons modell stämde borde alla partiklar passera rakt igenom med små avböjningar. Istället studsade cirka en av 20 000 rakt tillbaka. Rutherfords slutsats: atomen består till nästan 100 % av tomrum, med all positiv laddning och nästan all massa koncentrerad i en oerhört liten, tät <strong>kärna</strong>. Elektroner rör sig i stort avstånd från kärnan.</p>
<p><strong>Niels Bohr</strong> (1913) kombinerade Rutherfords kärnmodell med den nyupptäckta kvantteorin. Han postulerade att elektroner rör sig i fasta cirkelbanor med specifika energier. En elektron kan bara ändra energi genom att hoppa mellan banor, och vid hoppet absorberas eller emitteras en foton vars energi exakt motsvarar energiskillnaden. Detta förklarade vätes diskreta spektrallinjer (Balmerserien) perfekt.</p>
<p>Den moderna <strong>kvantmekaniska modellen</strong> (Schrödinger, Heisenberg, de Broglie, 1920-talet) ersätter fasta banor med <em>orbitaler</em> – sannolikhetsmoln som beskriver var elektroner med störst sannolikhet befinner sig. Elektroner beter sig som både partiklar och vågor.</p>

<h3>2. Atomens uppbyggnad</h3>
<p>En atom har <strong>två regioner</strong>: en extremt liten, tät <strong>kärna</strong> och ett mycket större <strong>elektronskal</strong> utanför.</p>
<p>Kärnan innehåller <strong>protoner</strong> (laddning +1, massa 1,673×10⁻²⁷ kg) och <strong>neutroner</strong> (laddning 0, massa 1,675×10⁻²⁷ kg). Protonernas antal kallas <em>atomnumret Z</em> och är unikt för varje grundämne – det definierar vilket ämne atomen är. Antalet protoner plus neutroner kallas <em>masstålet A</em>.</p>
<p>Runt kärnan rör sig <strong>elektroner</strong> (laddning −1, massa 9,109×10⁻³¹ kg ≈ 1/1836 av protonmassan). En neutral atom har lika många elektroner som protoner. Om atomen förlorar en eller flera elektroner bildas en positivt laddad <em>katjon</em>; tar den upp elektroner bildas en negativt laddad <em>anjon</em>.</p>
<div class="formula-box">Atomnummer: Z = antal protoner
Masstal: A = Z + N (N = antal neutroner)
Neutroner: N = A − Z

Laddning: q = (antal protoner) − (antal elektroner)

Exempel ²³Na:
  Z = 11 (11 protoner), A = 23, N = 12 neutroner
  Neutral: 11 elektroner
  Na⁺: 10 elektroner (tappat 1 e⁻), laddning +1</div>

<h3>3. Isotoper</h3>
<p>Isotoper är atomer av <em>samma grundämne</em> (samma Z) men med <em>olika antal neutroner</em> (olika A). Eftersom kemiska egenskaper styrs av elektronkonfigurationen, och elektronkonfigurationen bestäms av protonantalet, har isotoper <strong>praktiskt taget identiska kemiska egenskaper</strong> men olika massa och ofta olika radioaktivitet.</p>
<p>Naturligt väte består av tre isotoper: protium (¹H, 99,98 %), deuterium (²H eller D, 0,02 %) och tritium (³H, spår). Deuterium används som bränsle i fusionsreaktorer och i "tungt vatten" (D₂O) som moderator i vissa kärnreaktorer. Tritium är radioaktivt (β-sönderfaller) med halveringstid 12,3 år.</p>
<p>Den atommassa som anges i periodiska systemet är ett <em>viktat medelvärde</em> över alla naturliga isotoper. Klors atommassa 35,45 g/mol beror på att ungefär 75 % är ³⁵Cl och 25 % är ³⁷Cl.</p>
<table class="theory-table">
  <tr><th>Isotop</th><th>Z</th><th>N</th><th>A</th><th>Stabil?</th><th>Användning / notering</th></tr>
  <tr><td>¹H (protium)</td><td>1</td><td>0</td><td>1</td><td>Ja</td><td>99,98 % av allt väte</td></tr>
  <tr><td>²H (deuterium)</td><td>1</td><td>1</td><td>2</td><td>Ja</td><td>Tungt vatten, fusionsreaktor</td></tr>
  <tr><td>¹²C</td><td>6</td><td>6</td><td>12</td><td>Ja</td><td>Referens för atommasseenheten u</td></tr>
  <tr><td>¹⁴C</td><td>6</td><td>8</td><td>14</td><td>Nej, t½ = 5 730 år</td><td>Radiokoldatering</td></tr>
  <tr><td>²³⁵U</td><td>92</td><td>143</td><td>235</td><td>Nej, t½ = 703 Mår</td><td>Kärnkraft, klyvbart</td></tr>
  <tr><td>²³⁸U</td><td>92</td><td>146</td><td>238</td><td>Nej, t½ = 4,47 Går</td><td>Vanligaste uranisotopen</td></tr>
</table>
<p><strong>Radiokoldatering</strong> fungerar så här: Kosmisk strålning i atmosfären skapar konstant nya ¹⁴C-atomer ur kväve. Levande organismer tar upp ¹⁴C genom mat och andning i samma proportion som atmosfären. När organismen dör upphör ¹⁴C-upptäcket och isotopen sönderfaller. Genom att mäta ¹⁴C/¹²C-kvoten kan man beräkna åldern på upp till ~50 000 år gamla organiska material.</p>

<h3>4. Elektronkonfiguration och skalmodellen</h3>
<p>Elektroner fördelar sig i <strong>energiskal</strong> (n = 1, 2, 3, …). Lägre skal = lägre energi = elektronen befinner sig statistiskt sett närmare kärnan. Maximalt antal elektroner per skal är 2n²: skal 1 klarar 2, skal 2 klarar 8, skal 3 klarar 18 osv.</p>
<p>Elektroner fyller alltid de lägsta tillgängliga energinivåerna först (<strong>Aufbau-principen</strong>). <strong>Paulis uteslutningsprincip</strong> säger att ingen två elektroner i en atom kan ha samma fullständiga kvanttillstånd. <strong>Hunds regel</strong> säger att elektroner föredrar att inta separata orbitaler med parallella spinn innan de paras ihop.</p>
<p><strong>Valenselektroner</strong> är de elektroner som befinner sig i det yttersta (val-ens-)skalet. De är avgörande för kemiska reaktioner och bindningsförmåga. Metaller i grupp 1 har 1 valenselektron, grupp 2 har 2, icke-metaller i grupp 17 har 7, ädelgaserna i grupp 18 har 8 (förutom He med 2).</p>
<table class="theory-table">
  <tr><th>Atom</th><th>Z</th><th>Skal 1</th><th>Skal 2</th><th>Skal 3</th><th>Val-e⁻</th></tr>
  <tr><td>H</td><td>1</td><td>1</td><td></td><td></td><td>1</td></tr>
  <tr><td>He</td><td>2</td><td>2</td><td></td><td></td><td>2</td></tr>
  <tr><td>Li</td><td>3</td><td>2</td><td>1</td><td></td><td>1</td></tr>
  <tr><td>C</td><td>6</td><td>2</td><td>4</td><td></td><td>4</td></tr>
  <tr><td>O</td><td>8</td><td>2</td><td>6</td><td></td><td>6</td></tr>
  <tr><td>Na</td><td>11</td><td>2</td><td>8</td><td>1</td><td>1</td></tr>
  <tr><td>Cl</td><td>17</td><td>2</td><td>8</td><td>7</td><td>7</td></tr>
  <tr><td>Ar</td><td>18</td><td>2</td><td>8</td><td>8</td><td>8</td></tr>
</table>
<p>Tendensen hos atomer att avge, ta upp eller dela elektroner för att uppnå ädelgasfördelningen (8 valenselektroner, <em>oktettregeln</em>) är drivkraften bakom nästan all kemi.</p>

<h3>5. Periodiska systemet – organisation och trender</h3>
<p>Periodiska systemet organiserar de 118 kända grundämnena efter stigande atomnummer. Dmitrij Mendelejev lade 1869 grunden när han ordnade de då kända 63 grundämnena och lämnade tomrum för ännu oupptäckta ämnen – vars egenskaper han förutsade med remarkabel noggrannhet.</p>
<p><strong>Perioder</strong> (horisontella rader) representerar ett nytt elektronskal: period 1 fyller skal 1, period 2 fyller skal 2, etc. <strong>Grupper</strong> (vertikala kolumner) samlar ämnen med samma antal valenselektroner och liknande kemiska egenskaper. Grupp 1 = alkalimetaller, grupp 2 = jordalkalimetaller, grupp 17 = halogener, grupp 18 = ädelgaser.</p>
<p><strong>Atomradie</strong> minskar åt höger längs en period (fler protoner drar elektronskalen närmare) och ökar nedåt i en grupp (nya skal läggs till). Li har atomradien 152 pm, Na 186 pm, K 227 pm.</p>
<p><strong>Joniseringsenergi</strong> (energin som krävs för att avlägsna en valenselektron) ökar åt höger i en period och minskar nedåt i en grupp. Hög joniseringsenergi → ämnet avger ogärna elektroner (icke-metaller). Låg → avger lätt elektroner (alkalimetaller). Fluors joniseringsenergi är 1681 kJ/mol; cesiums bara 376 kJ/mol.</p>
<p><strong>Elektronaffinitet</strong> är energiändringen när en neutral atom tar upp en elektron. Halogener har högst elektronaffinitet – de vinner mycket energi på att ta upp en elektron eftersom de då når ädelgaskonfiguration.</p>
<p><strong>Elektronegativitet</strong> (Paulingskalan) mäter en atoms förmåga att attrahera gemensamma elektroner i en kovalent bindning. Fluor har högst (4,0), francium lägst (0,7). Elektronegativitet används för att bestämma bindningstyp och polarfördelning.</p>
<table class="theory-table">
  <tr><th>Egenskap</th><th>Åt höger i period</th><th>Nedåt i grupp</th></tr>
  <tr><td>Atomradie</td><td>Minskar</td><td>Ökar</td></tr>
  <tr><td>Joniseringsenergi</td><td>Ökar</td><td>Minskar</td></tr>
  <tr><td>Elektronaffinitet</td><td>Ökar (grovt)</td><td>Minskar</td></tr>
  <tr><td>Elektronegativitet</td><td>Ökar</td><td>Minskar</td></tr>
  <tr><td>Metallkaraktär</td><td>Minskar</td><td>Ökar</td></tr>
</table>

<h3>6. Viktiga ämnesgrupper i periodiska systemet</h3>
<p><strong>Alkalimetaller (grupp 1: Li, Na, K, Rb, Cs, Fr)</strong> – en valenselektron, avger den lätt → är mycket reaktiva. Reagerar häftigt med vatten och bildar hydroxider (NaOH, KOH) + väte. Förvaras i fotogen. Metallerna är mjuka nog att skäras med kniv. Kännetecknas av låga joniseringsenergier och låg densitet.</p>
<p><strong>Halogener (grupp 17: F, Cl, Br, I, At)</strong> – sju valenselektroner, vill ta upp en → starka oxidationsmedel. Förekommer som diatomiska molekyler (F₂, Cl₂, Br₂, I₂). Fluor är det mest reaktiva av alla grundämnen och oxiderar praktiskt taget allt. Klor används i vattenrening och PVC-produktion. Jod är viktigt för sköldkirteln.</p>
<p><strong>Ädelgaser (grupp 18: He, Ne, Ar, Kr, Xe, Rn)</strong> – fullt ytterskal, är praktiskt taget inerta. Används i glödlampor (Ar), neonskyltar (Ne), ballonger (He), och svällnäskirurgi (Xe som anestetikum). Xenon bildar några få föreningar med fluor och syre under extrema betingelser.</p>
<p><strong>Övergångsmetaller (grupper 3–12)</strong> – fyller d-orbitaler. Bildar oftast flera oxidationstillstånd (Fe kan vara +2 eller +3). Bildar färgade joner (Cu²⁺ är blå, Fe³⁺ är gul-brun, Cr³⁺ är grön). Viktiga som katalysatorer (Fe i Haber-processen, Pt i bilkatalysatorer, Ni i hydrogenering). Bra elektriska ledare.</p>

<h3>7. Radioaktivitet och kärnreaktioner</h3>
<p>Instabila kärnor sönderfaller spontant och emitterar strålning. De tre vanligaste typerna:</p>
<p><strong>α-strålning</strong>: emission av en heliumkärna (⁴He, α-partikel). Rä cker bara några cm i luft, stoppas av ett papper. Z minskar med 2, A med 4.</p>
<p><strong>β-strålning</strong>: emission av en elektron (β⁻) eller positron (β⁺). β⁻: en neutron omvandlas till en proton + elektron. Z ökar med 1. Stoppas av aluminium.</p>
<p><strong>γ-strålning</strong>: emission av högenergetiska fotoner. Z och A förändras inte. Kräver bly eller tjock betong för att stoppas. Följer ofta α eller β.</p>
<p><strong>Halveringstid t½</strong> är den tid det tar för hälften av alla atomer i ett prov att sönderfalla. Täcker allt från mikrosekunders till miljarder år (U-238). Formeln: N(t) = N₀ × (½)^(t/t½). Radons t½ = 3,82 dygn – viktigt för inomhusluftmätning.</p>
<p><strong>Stråldos</strong> mäts i Sievert (Sv): biologisk effekt av joniserande strålning. Bakgrundsstrålning Sverige ≈ 2 mSv/år. Akut strålsjuka vid &gt;250 mSv. Yrkesverksamma max 50 mSv/år.</p>
<p><strong>E = mc²</strong> (Einstein, 1905): massa och energi är ekvivalenta. Energin som frigörs = massaförlusten × ljushastigheten². 1 kg massa = 9×10¹⁶ J – miljoner gånger mer än kemiska reaktioner per kg bränsle.</p>
<p><strong>Kärnfission (klyvning):</strong> En långsam neutron träffar U-235 → instabil kärna delar sig i två lättare kärnor + 2–3 nya neutroner + ~200 MeV per klyvning. Kedjereaktion möjliggör kärnkraft (kontrollerad) och atombomb (okontrollerad). Kärnavfall med lång halveringstid är ett kvarstående problem.</p>
<p><strong>Kärnfusion (sammanslagning):</strong> Deuterium (²H) + tritium (³H) → helium (⁴He) + neutron + 17,6 MeV. Kräver &gt;10⁷ °C – solens energikälla. Frigör mer energi per kg än fission, inga långlivade restprodukter. Kommersiell fusionskraft ej ännu genomförbar på jorden.</p>

<h3>8. Sambandet</h3>
<p>Atomens uppbyggnad är nyckeln som låser upp all övrig kemi. Antalet protoner (Z) bestämmer vilket grundämne det är. Elektronkonfigurationen – särskilt antalet valenselektroner – bestämmer hur atomen reagerar: om den avger elektroner (metall, låg joniseringsenergi), tar upp elektroner (icke-metall, hög elektronaffinitet) eller delar elektroner (kovalent bindning). Periodiska systemets perioder och grupper är en karta över dessa egenskaper. Elektronegativiteten styr hur elektroner fördelas i kemiska bindningar, vilket påverkar löslighet, kok- och smältpunkter, reaktivitet och molekylgeometri. Isotoper förklarar varför atommassor sällan är hela tal. Radioaktivitet visar att kärnan själv inte är oföränderlig. Utan förståelsen för atomstrukturen kan vi inte förklara varför koks glöder, varför salt löses i vatten, eller hur läkemedel binder till enzymer – allt hänger samman på atomnivå.</p>

<h3>9. Atomradie och effektiv kärnladdning</h3>
<p>Atomernas storlek varierar systematiskt i periodiska systemet:</p>
<ul>
  <li><strong>Åt höger i en period</strong> – radien <em>minskar</em>. Antalet protoner ökar men elektronerna läggs till i samma skal → kärnladdningen attraherar valenselektronerna starkare → atomen drar ihop sig.</li>
  <li><strong>Nedåt i en grupp</strong> – radien <em>ökar</em>. Nya elektronskal tillkommer → valenselektronerna befinner sig längre från kärnan.</li>
</ul>
<p><strong>Effektiv kärnladdning (Z_eff)</strong> är den nettoladdning en valenselektron "känner av" efter att inre elektroner skärmat bort en del av kärnladdningens dragningskraft. Exempel: Na har 11 protoner men 10 inre elektroner → Z_eff ≈ +1. Mg: Z_eff ≈ +2 → Mg är mindre än Na.</p>

<h3>10. Joniseringsenergi</h3>
<p><strong>Joniseringsenergi (I)</strong> är den energi som krävs för att ta bort en elektron från en gasformig atom:</p>
<div class="formula-box">
  Al(g) → Al⁺(g) + e⁻ &nbsp;&nbsp; I₁ = 580 kJ/mol<br>
  Al⁺(g) → Al²⁺(g) + e⁻ &nbsp; I₂ = 1 815 kJ/mol<br>
  Al²⁺(g) → Al³⁺(g) + e⁻ &nbsp; I₃ = 2 740 kJ/mol<br>
  Al³⁺(g) → Al⁴⁺(g) + e⁻ &nbsp; I₄ = 11 600 kJ/mol ← stort hopp (nytt skal!)
</div>
<p>Det stora hoppet i I₄ förklaras av att den fjärde elektronen måste lösryckas från ett inre, hårdare bundet skal. Joniseringsenergin <em>ökar åt höger i en period</em> (starkare effektiv kärnladdning) och <em>minskar nedåt i en grupp</em> (elektronen är längre från kärnan).</p>

<h3>11. Spektra och elektronhopp</h3>
<p>När en elektron absorberar energi hoppar den till ett yttre skal (<strong>excitering</strong>). När den faller tillbaka avges energin som ljus med en specifik våglängd (färg). Varje grundämne har ett unikt <strong>emissionsspektrum</strong> – en "fingeravtryck" som används för att identifiera ämnen i t.ex. stjärnor och flamfärgningsanalyser.</p>

` },
  { cat: 'Materia & faser', icon: '🧊', html: `
<h2>🧊 Materia, ämnen &amp; faser</h2>
<p class="theory-intro">All materia runt omkring oss – luften vi andas, vattnet vi dricker, berget vi klättrar på – är uppbyggd av atomer. Hur atomerna är sammansatta och arrangerade avgör <em>allt</em>: om ämnet är fast, flytande eller gas; om det leder ström; om det löser sig i vatten; om det brinner. Kemin börjar med att klassificera materia, fortsätter med att förstå varför ämnen beter sig som de gör, och kulminerar i att förutsäga och kontrollera omvandlingar.</p>

<h3>1. Atomer och grundämnen – det minsta</h3>
<p>All materia är uppbyggd av <strong>atomer</strong> – de minsta enheter av ett ämne som behåller ämnets kemiska egenskaper. Det finns 118 kända grundämnen, var och ett bestämt av antalet protoner i kärnan. Atomer är extremt små; ungefär 8 miljoner atomer sida vid sida ryms på en millimeter. Det är ändå dessa osynliga partiklar som avgör om ett ämne är guld eller bly, salt eller socker, syre eller kvävgas.</p>
<p>Grundämnen delas in i tre grupper:</p>
<ul>
  <li><strong>Metaller</strong> – leder ström och värme, glänser, är formbara. Ex: järn (Fe), koppar (Cu), guld (Au).</li>
  <li><strong>Halvmetaller</strong> – egenskaper mittemellan metaller och icke-metaller. Ex: kisel (Si), germanium (Ge).</li>
  <li><strong>Icke-metaller</strong> – leder inte ström, ofta gaser vid rumstemperatur. Ex: syre (O), kväve (N), svavel (S).</li>
</ul>

<h3>2. Grundämne, kemisk förening och molekyl</h3>
<ul>
  <li><strong>Grundämne</strong> – ett rent ämne som består av <em>endast en sorts atomer</em>, där alla atomer har samma antal protoner i atomkärnan. Ex: O₂, Fe, S₈.</li>
  <li><strong>Kemisk förening</strong> – ett ämne som består av <em>minst två olika sorters grundämnen</em> vars atomer är kemiskt bundna till varandra. Ex: H₂O, NaCl, CO₂.</li>
  <li><strong>Molekyl</strong> – en grupp av atomer som är kemiskt bundna till varandra. Kan vara ett grundämne (H₂, O₂) eller en kemisk förening (H₂O, CO₂).</li>
  <li><strong>Kemiska tecken</strong> – förkortningar för grundämnen, t.ex. H = väte, O = syre, C = kol, Fe = järn, Na = natrium.</li>
</ul>
<div class="formula-box">
  <strong>Exempel – läsa kemiska formler:</strong><br>
  H₂CO₃ = 2 väteatomer + 1 kolatom + 3 syreatomer<br>
  C₂H₄(OH)₂ = 2 kol + 6 väte + 2 syre
</div>

<h3>3. Ämnens egenskaper</h3>
<p>Varje ämne kännetecknas av specifika <strong>fysikaliska egenskaper</strong>:</p>
<ul>
  <li><strong>Lukt &amp; smak</strong> – karakteristiska för ämnet</li>
  <li><strong>Ledningsförmåga</strong> – förmågan att leda el eller värme</li>
  <li><strong>Densitet</strong> – massa per volym (kg/m³ eller g/cm³)</li>
  <li><strong>Kokpunkt &amp; smältpunkt</strong> – vid vilken temperatur ämnet byter fas</li>
  <li><strong>Hårdhet</strong> – motstånd mot repning</li>
</ul>

<h3>4. Aggregationstillstånd – hur rörelseenergi styr faserna</h3>
<p>Ämnen förekommer i olika <strong>aggregationstillstånd</strong> beroende på <em>rörelseenergin</em> hos partiklarna i förhållande till styrkorna som håller ihop dem. Temperatur är ett mått på genomsnittlig rörelseenergi – ju högre temperatur, desto rörligare partiklar, och desto mer kan de motstå de attraktiva krafterna.</p>
<ul>
  <li><strong>Fast tillstånd (s)</strong> – rörelseenergin är <em>lägre</em> än de intermolekylära krafterna. Partiklarna kan bara vibrera på plats i ett ordnat gitter. Bestämd form och volym. Exempel: is, salt, metaller.</li>
  <li><strong>Flytande tillstånd (l)</strong> – rörelseenergin är <em>jämförbar</em> med krafterna; partiklarna kan röra sig relativt varandra men lämnar inte varandra. Bestämd volym men ingen bestämd form – antar behållarens form. Exempel: vatten vid 20 °C, smält järn.</li>
  <li><strong>Gasformigt tillstånd (g)</strong> – rörelseenergin <em>övervinner</em> krafterna; partiklarna rör sig fritt och snabbt i alla riktningar. Varken bestämd form eller volym – expanderar för att fylla allt tillgängligt utrymme. Exempel: ånga, koldioxid, luft.</li>
</ul>
<p>Det finns även ett fjärde tillstånd: <strong>plasma</strong> – vid extremt hög temperatur joniseras gasen (elektroner slits loss). Förekommer i solen, blixtar och fusionsreaktorer.</p>
<p><strong>Varför är detta viktigt?</strong> Fasövergångar kräver energi (smältning, kokning) eller frigör energi (stelning, kondensation). Vattnets höga kokpunkt (100 °C jämfört med H₂S:s −60 °C) beror på starka vätebindningar – det krävs mer energi för att bryta dem, och det är det som ger vatten sina unika egenskaper som liv-stödjande lösningsmedel.</p>

<h3>5. Fasövergångar</h3>
<p>När ett ämne byter aggregationstillstånd sker en <strong>fasövergång</strong>:</p>
<ul>
  <li><strong>Smältning</strong> – fast → flytande (värme tillförs)</li>
  <li><strong>Stelning</strong> – flytande → fast (värme avges)</li>
  <li><strong>Förångning</strong> – flytande → gas vid kokpunkten (värme tillförs)</li>
  <li><strong>Avdunstning</strong> – flytande → gas under kokpunkten (ytan)</li>
  <li><strong>Kondensation</strong> – gas → flytande (värme avges)</li>
  <li><strong>Sublimering</strong> – fast → gas direkt (t.ex. torris, CO₂)</li>
  <li><strong>Deposition</strong> – gas → fast direkt</li>
  <li><strong>Jonisering</strong> – gas → plasma</li>
  <li><strong>Dejonisering</strong> – plasma → gas</li>
</ul>

<h3>6. Rena ämnen och blandningar</h3>
<p><strong>Rent ämne</strong> – består av en enda sorts atomer eller en enda sorts molekyler. Ex: rent guld, destillerat vatten, rent syre.</p>
<p><strong>Blandning</strong> – består av minst två rena ämnen. En blandning kan vara:</p>
<ul>
  <li><strong>Homogen blandning</strong> (lösning/legering) – man kan <em>inte</em> urskilja de olika ämnena med blotta ögat. Ser enhetlig ut överallt.</li>
  <li><strong>Heterogen blandning</strong> (emulsion/slamning) – man <em>kan</em> se de olika beståndsdelarna. Ex: sand i vatten, olja i vatten.</li>
</ul>

<h3>7. Lösningar</h3>
<p>En <strong>lösning</strong> är en homogen blandning av två eller flera ämnen. Det ämne som löser upp sig kallas <strong>löste</strong>, och det ämne som löser upp det kallas <strong>lösningsmedel</strong>.</p>
<p>Exempel på lösningar:</p>
<ul>
  <li>Sprit = vatten + etanol (två vätskor blandade)</li>
  <li>Läsk = vatten + socker + koldioxid (gas löst i vätska) – i ½ liter läsk finns ca 1,5 liter koldioxidgas!</li>
</ul>
<p>En lösnings <strong>koncentration</strong> beskriver hur mycket löste som finns per volym:</p>
<ul>
  <li><strong>Utspädd lösning</strong> – lite löste i förhållande till lösningsmedel</li>
  <li><strong>Koncentrerad lösning</strong> – mycket löste</li>
  <li><strong>Mättad lösning</strong> – maximalt med löste är upplöst vid given temperatur</li>
</ul>
<p><em>Temperatur och löslighet:</em> I varmt vatten kan man generellt lösa mer fast ämne än i kallt vatten.</p>

<h3>8. Legeringar</h3>
<p>En <strong>legering</strong> är en homogen blandning med metalliska egenskaper som består av två eller flera grundämnen, varav minst ett är metall.</p>
<ul>
  <li><strong>Mässing</strong> = koppar (Cu) + zink (Zn)</li>
  <li><strong>Stål</strong> = järn (Fe) + kol (C)</li>
  <li><strong>Brons</strong> = koppar (Cu) + tenn (Sn)</li>
</ul>

<h3>9. Heterogena blandningar</h3>
<ul>
  <li><strong>Slamning (suspension)</strong> – fasta partiklar som inte löser sig i vätskan; blandningen blir grumlig och partiklarna sjunker till slut. Ex: jord i vatten.</li>
  <li><strong>Emulsion</strong> – en vätska som innehåller små droppar av en annan vätska som inte kan lösa sig. Ex: mjölk (fettdroppar i vatten), salladsdressing (olja + vinäger).</li>
</ul>

<h3>10. Separationsmetoder – att skilja ämnen åt</h3>
<p>Blandningar kan separeras genom att utnyttja ämnenas olika egenskaper:</p>
<ul>
  <li><strong>Filtrering</strong> – skiljer fasta partiklar från en vätska med ett filter (t.ex. kaffefilter). Fast ämne stannar kvar, vätskan rinner igenom.</li>
  <li><strong>Dekantering</strong> – hälla av den klarare vätskan försiktigt från en utfällning eller sediment som sjunkit till botten.</li>
  <li><strong>Sedimentering</strong> – låta tyngre partiklar sjunka till botten av sig själva. Kan snabbas upp med centrifugering.</li>
  <li><strong>Indunstning</strong> – värma en lösning tills lösningsmedlet avdunstar och det lösta ämnet (t.ex. salt) blir kvar.</li>
  <li><strong>Destillation</strong> – skilja vätskor med olika kokpunkter. Blandningen värms, ångan leds genom en kylare och kondenseras. Ämnet med lägst kokpunkt destilleras först.</li>
  <li><strong>Kromatografi</strong> – skiljer ämnen baserat på hur de fördelas mellan en stationär fas och en rörlig fas (mobilfas). Används för att identifiera färgämnen, läkemedelssubstanser m.m.</li>
</ul>
<p>Val av metod beror på blandningens typ: filtrering för heterogena blandningar, destillation för homogena vätskeblandningar, indunstning för lösta fasta ämnen.</p>

<h3>11. Kvalitativ och kvantitativ analys</h3>
<p><strong>Kvalitativ analys</strong> svarar på frågan <em>vilka</em> ämnen som finns i ett prov – t.ex. flamfärgning (identifiera metalljoner), fällningsreaktioner, indikatortest.</p>
<p><strong>Kvantitativ analys</strong> svarar på frågan <em>hur mycket</em> av ett ämne som finns – t.ex. titrering, gravimetrisk analys, spektroskopi.</p>

<h3>12. Densitet</h3>
<p><strong>Densitet</strong> (ρ) anger hur mycket massa som ryms i en viss volym: ρ = m/V. Enhet: g/cm³ eller kg/m³. Vatten har densiteten 1,00 g/cm³ vid 4 °C. Ämnen med lägre densitet flyter på vatten (olja, trä, is), ämnen med högre densitet sjunker (järn, koppar). Densitet är en karaktäristisk egenskap som kan användas för att identifiera ämnen.</p>

<h3>13. Kemiska föreningar bildas vid kemiska reaktioner</h3>
<p>När grundämnen reagerar med varandra bildas <strong>kemiska föreningar</strong> med helt nya egenskaper.</p>
<div class="formula-box">
  <strong>Exempel – järnsulfid:</strong><br>
  Ordformel: järn + svavel → järnsulfid + energi<br>
  Teckenformel: Fe(s) + S(s) → FeS(s) + energi<br><br>
  <em>Reaktanter</em> (vänster led) → <em>Produkter</em> (höger led)
</div>
<p>Varken järn (grå metall) eller svavel (gult pulver) liknar den mörka järnsulfiden – ett helt nytt ämne med nya egenskaper har bildats.</p>

<h3>14. Kemisk reaktion vs fysikalisk förändring</h3>
<p>En <strong>kemisk reaktion</strong> bildar nya ämnen med nya egenskaper – bindningar bryts och nya bildas. Reaktanterna (utgångsämnena) omvandlas till produkter. Tecken på kemisk reaktion: gasutveckling, färgändring, temperaturändring, fällning bildas.</p>
<p>En <strong>fysikalisk förändring</strong> ändrar form eller fas men inte ämnets kemiska sammansättning. Exempel: is smälter till vatten (fortfarande H₂O), socker löses i vatten (fortfarande C₁₂H₂₂O₁₁).</p>

<h3>15. Energiprincipen</h3>
<p><strong>Energi kan inte skapas eller förstöras, bara omvandlas från en form till en annan.</strong> Vid kemiska reaktioner omvandlas kemisk energi till värme, ljus eller elektrisk energi (och tvärtom). Exoterma reaktioner frigör energi till omgivningen. Endoterma reaktioner tar upp energi från omgivningen. Den totala energin i ett slutet system är alltid konstant.</p>

<h3>16. Materiaträdet – sammanfattning</h3>
<ul>
  <li><strong>Materia</strong>
    <ul>
      <li><strong>Rent ämne</strong>
        <ul>
          <li>Grundämne → Metall / Halvmetall / Icke-metall</li>
          <li>Kemisk förening → Jonförening / Molekylförening</li>
        </ul>
      </li>
      <li><strong>Blandning</strong>
        <ul>
          <li>Homogen → Lösning / Legering</li>
          <li>Heterogen → Emulsion / Slamning</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
` },
  { cat: 'Kemisk bindning', icon: '🔗', html: `
<h2>🔗 Kemisk bindning</h2>
<p class="theory-intro">Atomer är sällan ensamma – de binder till varandra och bildar molekyler, kristaller och material. Kraften bakom all kemisk bindning är elektrostatisk: negativt laddade elektroner attraheras av positivt laddade atomkärnor. Det avgörande är <em>hur</em> elektronerna fördelas. Det beror på atomernas <em>elektronegativitet</em> (dragningskraft på elektroner). Elektronegativiteten beror på hur många protoner kärnan har och hur nära valenselektronerna sitter – det vill säga var i periodiska systemet atomen befinner sig. Bindningstypen → molekylens geometri (VSEPR) → molekylens polaritet → intermolekylära krafter → smält- och kokpunkter, löslighet, elektrisk ledning. Hela kedjan börjar med atomens position i periodiska systemet.</p><h3>1. Jonbindning – steg för steg</h3>
<p><strong>Varför uppstår jonbindning?</strong> Atomer strävar mot ädelgaskonfiguration (fullt ytterskal, oktettregeln). Metaller i grupp 1–2 har <em>låg joniseringsenergi</em> – det kostar lite energi att ta bort deras 1–2 valenselektroner. Icke-metaller i grupp 16–17 har <em>hög elektronaffinitet</em> – de vinner mycket energi på att ta upp 1–2 elektroner. Resultatet: elektroner överförs från metall till icke-metall, och bägge når ädelgaskonfiguration.</p>
<p><strong>Steg 1:</strong> Na (1 valenselektron) avger den → Na⁺ (Ne-konfiguration).<br>
<strong>Steg 2:</strong> Cl (7 valenselektroner) tar upp den → Cl⁻ (Ar-konfiguration).<br>
<strong>Steg 3:</strong> Na⁺ och Cl⁻ attraherar varandra elektrostatiskt (Coulombs lag) och ordnar sig i ett kristallgitter.<br>
<strong>Följden:</strong> Höga smältpunkter, sprödhet, ledning i smält tillstånd, löslighet i vatten.</p>
<p>Jonbindning uppstår när en metall avger en eller flera elektroner till en icke-metall. Metallatomens låga joniseringsenergi gör avgivningen energieffektiv; icke-metallens höga elektronaffinitet gör mottagandet energimässigt gynnsamt. Resultatet är en positiv katjon och en negativ anjon som attraherar varandra elektrostatiskt.</p>
<p>Exempel: Natrium (Na, [Ne]3s¹) avger sin valenselektron till klor (Cl, [Ne]3s²3p⁵). Na⁺ får Ne-konfiguration; Cl⁻ får Ar-konfiguration. De resulterande jonerna ordnar sig i ett tredimensionellt <strong>kristallgitter</strong> där varje Na⁺ omges av sex Cl⁻ och vice versa (NaCl-strukturen).</p>
<p>Gittrets stabilitet mäts av <strong>gitterentalpin</strong> – energin som krävs för att separera alla joner till gasform. För NaCl är den −1,2 MJ/mol; för MgO (två-valenta joner Mg²⁺ och O²⁻ med kortare jonbindning) är gitterentalpin −3,8 MJ/mol, vilket förklarar varför MgO smälter vid 2852 °C jämfört med NaCls 801 °C.</p>
<p><strong>Egenskaper hos jonföreningar:</strong></p>
<ul>
  <li>Höga smält- och kokpunkter (stark elektrostatisk attraktion kräver mycket energi att bryta)</li>
  <li>Spröda (när gittret förskjuts stöter likadana laddningar mot varandra → spjälkas)</li>
  <li>Leder el i smält tillstånd och i lösning (fria joner), men inte i fast tillstånd</li>
  <li>Löser sig i polara lösningsmedel (vatten) men inte i opolara (bensin)</li>
</ul>
<div class="formula-box">Coulombs lag (förenklad): E ∝ (q⁺ × q⁻) / r
Högre laddning → starkare bindning → högre smältpunkt
Kortare avstånd → starkare bindning → högre smältpunkt
NaCl (1+,1-): 801 °C
MgO (2+,2-): 2852 °C</div>

<h3>2. Kovalent bindning</h3>
<p>När två icke-metaller möts delar de elektroner istället för att överföra dem. En <strong>kovalent bindning</strong> är ett gemensamt elektronpar (bindningselektronpar) mellan två kärnor – båda kärnorna attraheras av paret och hålls samman. Atomer kan dela ett par (enkelbindning), två par (dubbelbindning) eller tre par (trippelbindning).</p>
<p>Enkelbindning (σ-bindning): överlappning längs bindningsaxeln. H—H, C—C, O—H. Fri rotation runt enkelbindningar.</p>
<p>Dubbelbindning: en σ + en π-bindning (sidoväges överlappning av p-orbitaler). C=C i eten, C=O i acetaldehyd. π-bindningar begränsar rotation → cis/trans-isomeri möjlig.</p>
<p>Trippelbindning: en σ + två π. N≡N i kvävegas (bindningsenergi 945 kJ/mol, mycket stark). C≡C i etyn (acetylen). Kortaste bindningslängd.</p>
<table class="theory-table">
  <tr><th>Bindningstyp</th><th>Elektronpar</th><th>Energi (C–C-typ)</th><th>Längd (C–C)</th><th>Rotation</th></tr>
  <tr><td>Enkel</td><td>1</td><td>~346 kJ/mol</td><td>154 pm</td><td>Fri</td></tr>
  <tr><td>Dubbel</td><td>2</td><td>~614 kJ/mol</td><td>134 pm</td><td>Nej (stel)</td></tr>
  <tr><td>Trippel</td><td>3</td><td>~839 kJ/mol</td><td>120 pm</td><td>Fri (axial)</td></tr>
</table>

<h3>3. Polara och opolara bindningar</h3>
<p>Om två atomer med <em>samma</em> elektronegativitet delar elektroner fördelas elektronparet jämnt – <strong>opolar kovalent bindning</strong> (t.ex. H₂, O₂, Cl₂). Om atomerna har <em>olika</em> elektronegativitet dras elektronparet mer mot den mer elektronegativa atomen – <strong>polar kovalent bindning</strong>. Den mer elektronegativa atomen får en partiell negativ laddning δ⁻, den andra får δ⁺.</p>
<p>Riktlinje baserat på elektronegativitetsskillnad ΔEN:</p>
<table class="theory-table">
  <tr><th>ΔEN</th><th>Bindningstyp</th><th>Exempel</th></tr>
  <tr><td>0</td><td>Opolar kovalent</td><td>H₂, Cl₂, C–C</td></tr>
  <tr><td>0,0–0,4</td><td>Knappt polar</td><td>C–H (ΔEN=0,4)</td></tr>
  <tr><td>0,4–1,7</td><td>Polar kovalent</td><td>H–O (ΔEN=1,4), H–Cl</td></tr>
  <tr><td>&gt;1,7</td><td>Jonbindning</td><td>Na–Cl (ΔEN=2,1)</td></tr>
</table>
<p>Obs: gränserna är riktlinjer, inte absoluta. Bindningstypen är ett kontinuum.</p>

<h3>4. VSEPR-teorin och molekylgeometri – varför formen beror på elektronparen</h3>
<p>Vi vet nu att atomer delar elektronpar (kovalenta bindningar). Men <em>hur</em> ordnas dessa bindningar i rummet? Det avgörs av att negativt laddade elektronpar stöter bort varandra – de vill ha maximalt avstånd till varandra. Det är VSEPR-principen (Valence Shell Electron Pair Repulsion).</p>
<p><strong>Nyckelinsikt:</strong> Det är <em>alla</em> elektronpar runt centralatomen som räknas – bindande par OCH fria par (lone pairs). Fria par tar mer plats än bindande par (de är inte bundna till en annan kärna) → de trycker ihop bindningsvinklarna lite extra.</p>
<p>Fria elektronpar (lone pairs) tar mer plats än bindande par och trycker samman bindningsvinklarna.</p>
<table class="theory-table">
  <tr><th>Elektron-grupper</th><th>Fria par</th><th>Geometri</th><th>Vinkel</th><th>Exempel</th></tr>
  <tr><td>2</td><td>0</td><td>Linjär</td><td>180°</td><td>CO₂, BeH₂</td></tr>
  <tr><td>3</td><td>0</td><td>Plan triangel</td><td>120°</td><td>BF₃, SO₃</td></tr>
  <tr><td>4</td><td>0</td><td>Tetraeder</td><td>109,5°</td><td>CH₄, SiCl₄</td></tr>
  <tr><td>4</td><td>1</td><td>Trigonal pyramid</td><td>107°</td><td>NH₃</td></tr>
  <tr><td>4</td><td>2</td><td>Vinkelformad</td><td>104,5°</td><td>H₂O</td></tr>
</table>
<p>Vattens 104,5°-vinkel (istället för tetraederns 109,5°) beror på att de två fria paren trycker ihop bindningsparen. Ammoniak 107° – ett fritt par trycker lite.</p>

<h3>5. Polara molekyler och dipolmoment</h3>
<p>En molekyl är <strong>polar</strong> om den har ett nettodipolögonblick – en asymmetrisk laddningsfördelning. Det räcker inte att bindningarna är polara; molekylens geometri måste även vara asymmetrisk så att bindningsdipolerna inte tar ut varandra.</p>
<p>CO₂ (O=C=O) är linjär. De två polara C=O-bindningarna pekar i exakt motsatta riktningar och tar ut varandra → <em>opolar molekyl</em> trots polara bindningar.</p>
<p>H₂O har vinkelform. De två O–H-bindningarnas dipoler pekar åt var sitt håll men adderas inte till noll → <em>polar molekyl</em> med stort dipolmoment (1,85 D). Detta förklarar varsin höga kokpunkt (100°C) jämfört med H₂S (−60°C).</p>

<h3>6. Intermolekylära krafter</h3>
<p>Utöver bindningarna <em>inom</em> molekyler finns svagare krafter <em>mellan</em> molekyler som avgör aggregationstillstånd, löslighet och kokpunkter.</p>
<p><strong>Vätebindning</strong> är den starkaste intermolekylära kraften (upp till ~40 kJ/mol). Uppstår när väte är kovalent bundet till N, O eller F (extremt elektronegativa atomer som gör H kraftigt δ⁺) och detta H attraheras av ett fritt elektronpar på N, O eller F i en annan molekyl. Förklarar:</p>
<ul>
  <li>Vattnets ovanligt höga kokpunkt (100°C) jämfört med H₂S (−60°C)</li>
  <li>Isens låga densitet (vätebindningar tvingar hexagonal struktur med hål)</li>
  <li>DNA:s dubbelhelix (baspar hålls av vätebindningar)</li>
  <li>Proteiners sekundärstruktur (α-helix och β-flak)</li>
</ul>
<p><strong>Dipol–dipol-krafter</strong> är attraktioner mellan permanenta dipoler i polara molekyler. Starkare ju större dipolmoment. Typisk styrka 5–25 kJ/mol. Aceton och HCl är exempel.</p>
<p><strong>London-dispersionskrafter</strong> (van der Waals) är universella – de finns i alla ämnen, även i ädelgaser och opolara molekyler. De uppstår av <em>momentana dipoler</em>: elektroners slumpmässiga rörelser skapar ögonblickliga ojämna fördelningar som inducerar dipol i grannatomen. Styrkan beror på hur lätt det är att "deformera" elektronmolnet (polariserbarhet) – vilket ökar med fler elektroner och större yta. Jod (I₂) är fast vid rumstemperatur trots att det är opolart, tack vare starka dispersionskrafter från 106 elektroner per molekyl.</p>
<table class="theory-table">
  <tr><th>Kraft</th><th>Finns i</th><th>Styrka</th><th>Typexempel</th></tr>
  <tr><td>Vätebindning</td><td>NH, OH, HF-grupper</td><td>10–40 kJ/mol</td><td>H₂O, NH₃, HF, DNA</td></tr>
  <tr><td>Dipol–dipol</td><td>Polara molekyler</td><td>3–25 kJ/mol</td><td>HCl, aceton, SO₂</td></tr>
  <tr><td>London-dispersion</td><td>Alla ämnen</td><td>0,1–40 kJ/mol</td><td>Ar, I₂, hexan</td></tr>
</table>

<h3>7. Metallbindning</h3>
<p>I metaller avger atomerna sina valenselektroner till ett gemensamt <strong>elektronhav</strong> som flödar fritt genom ett gitter av positivt laddade jon-kärnor. Denna "delokalisering" förklarar metallernas egenskaper: hög elektrisk ledning (elektroner rör sig fritt), hög värmeledning, metallglans (fria elektroner absörberar och emitterar fotoner), duktilitet och smäjlighet (gitterskikt kan glida utan att bindningen bryts). Wolframs extremt höga smältpunkt (3422°C) beror på att de 4 valenselektronerna ger ett enormt tätt elektronhav med stark attraktion.</p>

<h3>8. Sambandet</h3>
<p>Bindningstypen härstammar direkt från atomers elektronegativiteter och elektronkonfigurationer. Stor skillnad → joner och jonbindning. Liten skillnad mellan icke-metaller → kovalent delning. Metaller → elektronhav. Molekylens geometri (VSEPR) avgör om polara bindningar ger en polar eller opolar molekyl totalt. Intermolekylära krafter – vars styrka styrs av molekylstorlek, polaritet och vätegrupper – bestämmer om ämnet är gas, vätska eller fast vid rumstemperatur, och om det löser sig i vatten. Hela löslighetsbegreppet "lika löser lika" bygger på att polara molekyler interagerar gynnsamt med polara lösningsmedel och opolara med opolara. Bindningsläran är fundamentet för all biokemi, materialkemi och farmakologi.</p>


` },
  { cat: 'Reaktioner & stökiometri', icon: '⚗️', html: `
<h2>⚗️ Kemiska reaktioner &amp; stökiometri</h2>
<p class="theory-intro">Kemi är, i sin enklaste form, studiet av hur ämnen förändras. En kemisk reaktion bryter gamla bindningar och bildar nya. Stökiometri är den kvantitativa sidan av reaktioner: hur mycket av varje ämne är inblandat, hur mycket bildas, och vilket reagens tar slut först. Det är grunden för allt från industriell syntes av gödningsmedel till dosäringen av läkemedel.</p>

<h3>1. Reaktionstyper</h3>
<p>Kemiska reaktioner brukar klassas i åtta grundtyper, ofta överlappande:</p>
<p><strong>1. Syntesreaktioner (kombinationsreaktioner):</strong> A + B → AB. Två ämnen bildar ett. Exempel: 2Mg + O₂ → 2MgO (magnesium brinner i syre med bländvit låga). N₂ + 3H₂ → 2NH₃ (Haber-Bosch, industriell ammoniaksyntes).</p>
<p><strong>2. Sönderdelningsreaktioner:</strong> AB → A + B. Exempel: 2H₂O → 2H₂ + O₂ (elektrolys av vatten). CaCO₃ → CaO + CO₂ (kalcination av kalksten).</p>
<p><strong>3. Enkel substituering (förträngning):</strong> A + BC → AC + B. En mer reaktiv art förtränger en mindre reaktiv. Exempel: Zn + CuSO₄ → ZnSO₄ + Cu. Följer spänningsserien för metaller.</p>
<p><strong>4. Dubbel substituering (metates):</strong> AB + CD → AD + CB. Jonbyte. Exempel: AgNO₃ + NaCl → AgCl↓ + NaNO₃. Drivs av utfällning, gasbildning eller vattenbildning.</p>
<p><strong>5. Förbränningsreaktioner:</strong> Kolväten + O₂ → CO₂ + H₂O (fullständig). C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Energirik – basen för motorer och värmekällor.</p>
<p><strong>6. Syra-bas-reaktioner (neutralisering):</strong> HCl + NaOH → NaCl + H₂O. Utförligare i nästa avsnitt.</p>
<p><strong>7. Redoxreaktioner:</strong> Överföring av elektroner. Fe + CuSO₄ → FeSO₄ + Cu.</p>
<p><strong>8. Utfällningsreaktioner:</strong> Två jonlösningar blandas och en svårlöslig produkt fälls ut. BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl.</p>

<h3>2. Molbegreppet och Avogadros tal – bryggan mellan atomer och gram</h3>
<p><strong>Problemet:</strong> Reaktionsscheman talar om atomer och molekyler (t.ex. 2 H₂ + O₂ → 2 H₂O: 2 molekyler väte reagerar med 1 molekyl syre). Men i laboratoriet väger vi gram – inte enskilda atomer. Vi behöver ett begrepp som kopplar ihop de två nivåerna.</p>
<p><strong>Lösningen – molbegreppet:</strong> <strong>1 mol</strong> = 6,022×10²³ partiklar (Avogadros tal N_A). Varför just det antalet? För att 1 mol av C-12 (exakt 12 g) ska innehålla lika många atomer som massatalet antyder. Det innebär att molmassan M (g/mol) numeriskt är lika med relativmassan i periodiska systemet.</p>
<p>Nu kan vi räkna: koefficientsförhållanden i reaktionsscheman = molförhållanden = massornas förhållanden om vi omvandlar via molmassa. Det är kärnan i all stökiometrisk beräkning.</p>
<p>Atomer är så små att de måste räknas i enorma antal. <strong>Mole (mol)</strong> är SI-enheten för substansmängd: 1 mol = 6,022×10²³ enheter (<strong>Avogadros tal N₀</strong>). En mol kol-12 väger exakt 12 g. Avogadros tal valdes så att 1 mol av valfri atom väger lika många gram som atommassan i amu.</p>
<p><strong>Molmassa M</strong> (g/mol) är massan för 1 mol av ett ämne. För H₂O: M = 2×1 + 16 = 18 g/mol. För CaCO₃: M = 40 + 12 + 3×16 = 100 g/mol.</p>
<div class="formula-box">n = m / M           (mol = gram / molmassa)
m = n × M           (massa = mol × molmassa)
N = n × N_A         (antal partiklar)
N_A = 6,022 × 10²³ mol⁻¹

Exempel: 90 g H₂O → n = 90/18 = 5,0 mol
         5,0 mol × 6,022×10²³ = 3,011×10²⁴ molekyler</div>

<h3>3. Kemisk formel och sammansättning</h3>
<p><strong>Empirisk formel</strong> anger de enklaste heltalskvoterna mellan atomerna. H₂O₂ har empirisk formel HO. CH₂O är empirisk formel för både formaldehyd (CH₂O), ättiksyra (C₂H₄O₂) och glukos (C₆H₁₂O₆).</p>
<p><strong>Molekylformel</strong> anger det faktiska antalet atomer. För att bestämma molekylformeln från den empiriska formeln krävs molmassan: n = M_molekyl / M_emp. Glukos: M = 180 g/mol, M(CH₂O) = 30 ⇒ n = 6 ⇒ C₆H₁₂O₆.</p>
<p><strong>Procentuell sammansättning:</strong> %X = (n_X × M_X / M_förening) × 100. För Fe₂O₃: %Fe = (2×56/160)×100 = 70 %.</p>
<p><strong>Analys till empirisk formel:</strong> Omvandla massaprocenterna till mol (dividera med atommassa), finna minsta kvoten, dividera alla med det minsta möjliga. Exempel: 40 % C, 6,7 % H, 53,3 % O → n(C)=40/12=3,33, n(H)=6,7/1=6,7, n(O)=53,3/16=3,33. Dividera med 3,33: C:H:O = 1:2:1 ⇒ empirisk formel CH₂O.</p>

<h3>4. Balansering av reaktionsscheman</h3>
<p>Massebevarandets lag säger att atomer varken skapas eller förstörs i en kemisk reaktion – balanserade formler är en direkt följd. Steg:</p>
<ol>
  <li>Skriv korrekt formler för alla reaktanter och produkter.</li>
  <li>Balansera grundämnena med <em>stökiometriska koefficienter</em> (aldrig ändra formler!).</li>
  <li>Balansera metaller först, sedan icke-metaller, och slutligen väte och syre.</li>
  <li>Kontrollera: räkna varje atoms antal på båda sidor.</li>
</ol>
<p>Exempel: Fe + O₂ → Fe₂O₃. Syre: vänster 2, höger 3. LCM(2,3) = 6 ⇒ 3O₂ och 2Fe₂O₃. Då krävs 4Fe: <strong>4Fe + 3O₂ → 2Fe₂O₃</strong>. Kontroll: 4 Fe båda sidor, 6 O båda sidor. ✓</p>
<p>För komplexa redoxreaktioner används halfreaktionsmetoden (oxidationstaländring balanseras separat för oxidation och reduktion).</p>

<h3>5. Molöverföringar – stökiometriska beräkningar</h3>
<p>Reaktionsförmelns koefficienter anger <em>molförhållanden</em>, inte massförhållanden. N2 + 3H₂ → 2NH₃ säger: 1 mol N₂ reagerar med 3 mol H₂ och ger 2 mol NH₃.</p>
<p><strong>Standardprocedur:</strong></p>
<ol>
  <li>Balansera reaktionen.</li>
  <li>Omvandla given massa till mol: n = m/M.</li>
  <li>Använd koefficientsförhållandet för att beräkna mol produkt/reaktant.</li>
  <li>Omvandla till massa (eller volym): m = n×M.</li>
</ol>
<div class="formula-box">Exempel: Beräkna massa CO₂ från 88 g propan C₃H₈.
C₃H₈ + 5O₂ → 3CO₂ + 4H₂O  (M(C₃H₈)=44, M(CO₂)=44)
n(C₃H₈) = 88/44 = 2,0 mol
n(CO₂) = 3 × 2,0 = 6,0 mol
m(CO₂) = 6,0 × 44 = 264 g</div>

<h3>6. Begränsande reagens och överskott</h3>
<p>I praktiken är sällan reaktanterna i exakt stökiometriska proportioner. Det <strong>begränsande reagenset</strong> (limiting reagent) är det som tar slut först och därmed begränsar mängden produkt. Allt annat är i <strong>överskott</strong>.</p>
<p><strong>Hur man hittar begränsande reagenset:</strong></p>
<ol>
  <li>Beräkna mol av varje reaktant.</li>
  <li>Beräkna hur många mol produkt varje reaktant kan ge (om den vøre den enda begränsaren).</li>
  <li>Den reaktant som ger <em>minst</em> produkt är det begränsande reagenset.</li>
</ol>
<p>Alternativ: dividera tillgängliga mol med koefficienten. Den minsta kvoten pekar ut det begränsande reagenset.</p>
<div class="formula-box">Exempel: 10 g H₂ + 80 g O₂ → H₂O
n(H₂) = 10/2 = 5,0 mol; n(O₂) = 80/32 = 2,5 mol
2H₂ + O₂ → 2H₂O (koeff. 2:1:2)
Från H₂: 5,0/2 = 2,5 (mol/koeff.)
Från O₂: 2,5/1 = 2,5 (mol/koeff.)
Lika! I detta fall exakt stökiometriskt.
Om istället 3,0 mol O₂ används: från H₂ får vi 2,5; från O₂ får vi 3,0.
H₂ begränsar → n(H₂O)=5,0 mol</div>

<h3>7. Procentuellt utbyte</h3>
<p>Verkliga reaktioner ger sällan det teoretiska utbytet. Orsaker: sidoreaktioner, ofullständig reaktion, mekaniska förluster vid separation/rening, jämviktsreaktioner som inte går till fullständigt.</p>
<div class="formula-box">Procentuellt utbyte = (faktisk massa / teoretisk massa) × 100 %

Verklig avkastning (i mol): n_faktisk = n_teor × (utbyte/100)

Exempel: Teoretisk massa: 50 g. Faktisk: 40 g. Utbyte = 80 %.</div>
<p>I industrin är utbytet viktigt ekonomiskt och miljömässigt. Haber-Bosch-processen för ammoniaksyntes håller förändringsenheten runt 15–25 % per genomgång, men avskiljer och återcirkulerar ständigt omända reagens.</p>

<h3>8. Volymöverföringar – gaser och lösningar</h3>
<p>För gaser vid STP (0 °C, 101,3 kPa): 1 mol idealgas upptar 22,4 L (molär volym). Omvandling: n = V / 22,4.</p>
<p>För lösningar: n = c × V (mol = mol/L × L). Volymen måste anges i liter.</p>
<div class="formula-box">Stökiometri med lösning:
NaOH + HCl → NaCl + H₂O  (1:1)
c(NaOH)=0,100 mol/L, V=25,0 mL → n(NaOH)=0,00250 mol
n(HCl)=0,00250 mol
V(HCl) om c(HCl)=0,200 mol/L: V=n/c=0,0125 L=12,5 mL</div>

<h3>9. Redoxreaktioner och oxidationstal – steg för steg</h3>
<p><strong>Steg 1 – förstå varför elektroner överförs:</strong> Atomer med låg joniseringsenergi (metaller) avger gärna elektroner. Atomer med hög elektronaffinitet (halogener, syre) tar gärna upp elektroner. När de möts sker en elektronöverföring – en redoxreaktion.</p>
<p><strong>Steg 2 – identifiera vad som händer:</strong> Oxidation = avger elektroner (oxidationstalet ökar). Reduktion = tar upp elektroner (oxidationstalet minskar). De sker ALLTID ihop.</p>
<p><strong>Steg 3 – verktyget oxidationstal:</strong> Tilldela varje atom ett formellt laddningstal enligt reglerna → spåra förändringen för att avgöra vad som oxideras och vad som reduceras.</p>
<p><strong>Redoxreaktioner</strong> innebär överföring av elektroner från ett ämne till ett annat. Termen "redox" är en sammandragning av <em>reduktion</em> och <em>oxidation</em>, som alltid sker simultant:</p>
<ul>
  <li><strong>Oxidation</strong>: ett ämne <em>avger</em> elektroner → oxidationstalet ökar → kallas reduktionsmedel (det reducerar det andra ämnet)</li>
  <li><strong>Reduktion</strong>: ett ämne <em>tar upp</em> elektroner → oxidationstalet minskar → kallas oxidationsmedel (det oxiderar det andra ämnet)</li>
</ul>
<p>Minnesregel: <strong>OIL RIG</strong> – Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). Eller på svenska: <strong>FROS</strong> – Förlust av elektroner = Reduktionsmedel, Oxidation. Svinnet = oxidationsmedel.</p>

<h4>Oxidationstal</h4>
<p>Oxidationstalet är en formell laddning som tilldelats varje atom i en molekyl eller jon, baserat på en uppsättning regler. Det är ett verktyg för att hålla reda på elektronflödet i redoxreaktioner.</p>
<p><strong>Regler för oxidationstal (prioritetsordning):</strong></p>
<ol>
  <li>Fritt grundämne: oxidationstal = 0. (Fe, O₂, Cl₂ är alla 0)</li>
  <li>Enatomig jon: oxidationstal = jonens laddning. (Na⁺ = +1, Cl⁻ = −1, Fe³⁺ = +3)</li>
  <li>Syre: nästan alltid −2. Undantag: peroxider (H₂O₂: O = −1), OF₂ (O = +2)</li>
  <li>Väte: +1 när bundet till icke-metall (H₂O, HCl), −1 i metallhydrider (NaH)</li>
  <li>Fluor: alltid −1 (mest elektronegativa grundämnet)</li>
  <li>Alkalimetaller (grupp 1): alltid +1 i föreningar</li>
  <li>Jordalkalimetaller (grupp 2): alltid +2 i föreningar</li>
  <li>Summan av oxidationstalen = molekylens totala laddning (0 för neutrala, = jonladdning för joner)</li>
</ol>
<div class="formula-box">Exempel – bestäm oxidationstalet för Cr i K₂Cr₂O₇:
K₂Cr₂O₇ är neutral → summa = 0
K: +1 (regel 6), O: −2 (regel 3)
2(+1) + 2×Cr + 7(−2) = 0
2 + 2Cr − 14 = 0
2Cr = 12 → Cr = +6

Exempel – bestäm oxidationstal för S i SO₄²⁻:
Jonladdning = −2
S + 4(−2) = −2
S − 8 = −2 → S = +6</div>

<h4>Balansera redoxreaktioner med halfreaktionsmetoden</h4>
<p>Halfreaktionsmetoden delar upp en redoxreaktion i en oxidationshalfreakton och en reduktionshalfreakton, som balanseras separat och sedan adderas.</p>
<p><strong>Steg (sur lösning):</strong></p>
<ol>
  <li>Dela upp i oxidations- och reduktionshalfreaktioner</li>
  <li>Balansera alla atomer utom O och H</li>
  <li>Balansera O med H₂O</li>
  <li>Balansera H med H⁺</li>
  <li>Balansera laddning med e⁻</li>
  <li>Multiplicera halfreaktionerna så att e⁻ tar ut varandra</li>
  <li>Addera och förenkla</li>
</ol>
<div class="formula-box">Exempel: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (sur lösning)

Reduktion: MnO₄⁻ → Mn²⁺
  MnO₄⁻ → Mn²⁺ + 4H₂O    (balansera O)
  MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O  (balansera H)
  MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O  (balansera laddning, Mn: +7→+2)

Oxidation: Fe²⁺ → Fe³⁺ + e⁻  (Fe: +2→+3)

Multiplicera oxidation ×5:
5Fe²⁺ → 5Fe³⁺ + 5e⁻

Addera:
MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺</div>

<h4>Aktivitetsserien (spänningsserien) för metaller</h4>
<p>Metaller rangordnas efter sin tendens att oxideras (avge elektroner). En metall högre upp i serien kan förträngas ur lösning av en metall lägre upp.</p>
<table class="theory-table">
  <tr><th>Metall</th><th>Halvreaktion</th><th>Reaktivitet</th></tr>
  <tr><td>K, Na, Li</td><td>Me → Me⁺ + e⁻</td><td>Mycket aktiv – reagerar med vatten</td></tr>
  <tr><td>Mg, Al, Zn</td><td>Me → Me²⁺/³⁺ + ne⁻</td><td>Aktiv – reagerar med syra</td></tr>
  <tr><td>Fe, Ni, Sn, Pb</td><td>Me → Me²⁺ + 2e⁻</td><td>Måttligt aktiv</td></tr>
  <tr><td>H₂</td><td>H₂ → 2H⁺ + 2e⁻</td><td>Referenspunkt (E° = 0)</td></tr>
  <tr><td>Cu, Ag, Au, Pt</td><td>Me → Me⁺ + e⁻</td><td>Lite/ej aktiv – ädla metaller</td></tr>
</table>
<p>Exempel: Zn + CuSO₄ → ZnSO₄ + Cu. Zink är mer aktiv än koppar → Zn oxideras (Zn → Zn²⁺ + 2e⁻), Cu²⁺ reduceras (Cu²⁺ + 2e⁻ → Cu). Man ser hur koppar fälls ut som ett rödbrun beläggning på zinken.</p>

<h3>10. Sambandet</h3>
<p>Stökiometri är bron mellan det symboliska (reaktionsscheman) och det verkliga (massor, volymer, antal partiklar). Molbegreppet är nyckeln: det kopplar samman atomnivån (koefficienter = molförhållanden) med laboratorienivån (gram, milliliter). Begränsande reagens och utbytesberäkningar är särskilt viktiga i kemisk industri där även små förbättringar i utbyte kan spara miljonbelopp och minska avfall. Redoxkemi genomsyrar hela kemin: korrosion, batterier, biologisk cellandning, fotosyntes och industriella processer är alla redoxreaktioner. Oxidationstalet är ett oumbärligt verktyg för att snabbt identifiera vad som oxideras och reduceras, och halfreaktionsmetoden ger ett systematiskt sätt att balansera även komplexa redoxreaktioner.</p>

<h3>11. Begränsande reaktant och överskott</h3>
<p>I verkligheten finns sällan exakt rätt mängd av varje reaktant. Det ämne som <em>tar slut först</em> kallas <strong>begränsande reaktant</strong> (utbytesbestämmande ämne). Övriga ämnen befinner sig i <strong>överskott</strong>.</p>
<div class="formula-box">
  <strong>Exempel:</strong> 2 Cu(s) + S(s) → Cu₂S(s)<br>
  Du har 12,7 g Cu och 4,82 g S.<br>
  n(Cu) = 12,7/63,5 = 0,200 mol &nbsp;|&nbsp; n(S) = 4,82/32,1 = 0,150 mol<br>
  För 0,150 mol S behövs 2×0,150 = 0,300 mol Cu – men vi har bara 0,200 mol.<br>
  → <strong>Cu är begränsande reaktant.</strong><br>
  n(Cu₂S) = 0,200/2 = 0,100 mol → m = 0,100 × 159,1 = <strong>15,9 g</strong>
</div>

<h3>12. Utbyte (yield)</h3>
<p>En reaktion är sällan fullständig. <strong>Procentuellt utbyte</strong>:</p>
<div class="formula-box">
  Utbyte (%) = (faktisk massa / teoretisk massa) × 100
</div>
<p>Exempel: Teoretisk massa nickel = 117 g. Faktisk massa vid 75% utbyte = 0,75 × 117 = 88 g.</p>

<h3>13. Fällningsreaktioner</h3>
<p>När två saltlösningar blandas kan jonerna kombineras på nya sätt. Om kombinationen ger ett <strong>svårlösligt salt</strong>, fälls det ut som ett fast ämne (<strong>fällning/precipitat</strong>).</p>
<p>Exempel: AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq)</p>
<p><strong>Löslighetsregler</strong> (tumregler):</p>
<ul>
  <li><strong>Nästan alltid lättlösliga:</strong> Na⁺, K⁺, NH₄⁺-salter; nitrater (NO₃⁻); de flesta sulfater (SO₄²⁻); de flesta klorider (Cl⁻)</li>
  <li><strong>Undantag – svårlösliga:</strong> BaSO₄, AgCl, PbSO₄</li>
  <li><strong>Nästan alltid svårlösliga:</strong> karbonater (CO₃²⁻), fosfater (PO₄³⁻), hydroxider (OH⁻) – utom Na⁺/K⁺/NH₄⁺</li>
</ul>
<div class="formula-box">
  <strong>Beräkning – fällningens massa:</strong><br>
  25 cm³ BaCl₂(aq) med c = 0,10 mol/dm³ + överskott Na₂SO₄(aq)<br>
  BaCl₂ + Na₂SO₄ → BaSO₄(s)↓ + 2 NaCl<br>
  n(Ba²⁺) = 0,025 dm³ × 0,10 mol/dm³ = 0,0025 mol<br>
  m(BaSO₄) = 0,0025 × 233,1 g/mol = <strong>0,58 g</strong>
</div>

<h3>14. Masshalt och volymhalt</h3>
<p>Utöver mol/dm³ kan lösningens sammansättning anges som:</p>
<ul>
  <li><strong>Masshalt (w)</strong> = ämnes massa / lösningens totala massa (enhetslös, anges ofta i %). Havsvatten: w(salt) ≈ 3,5%.</li>
  <li><strong>Volymhalt (φ)</strong> = ämnes volym / lösningens totala volym (enhetslös, anges i %). Lättöl: φ(etanol) ≈ 2,2%.</li>
</ul>

<h3>15. Spädning</h3>
<p>Vid spädning av en lösning förblir <em>substansmängden</em> konstant medan volymen ökar och koncentrationen minskar:</p>
<div class="formula-box">
  c₁ · V₁ = c₂ · V₂
</div>
<p>Exempel: Hur stor volym 2,0 mol/dm³ NaOH behövs för att bereda 1,0 dm³ 0,10 mol/dm³ NaOH?<br>
V₁ = (0,10 × 1,0) / 2,0 = 0,050 dm³ = <strong>50 cm³</strong></p>

` },
  { cat: 'Syror & baser', icon: '🧪', html: `
<h2>🧪 Syror &amp; baser</h2>
<p class="theory-intro">Syra-bas-kemi är något vi möter överallt: citronsyrans syrlighet, bikarbonatets neutralisering av magsyra, blodets exakta pH-kontroll, surt regn och hur läkemedel absorberas i tarmen. Allt börjar med en enkel fråga: vad gör ett ämne surt? Svaret – protoner (H⁺) – leder till definitionen av syror och baser. Det leder i sin tur till jämviktskonstanter (Ka), som leder till pH-begreppet, som leder till buffertlösningarnas funktion, som leder till titrering och kvantitativ analys. Varje begrepp bygger på det föregående.</p>

<h3>1. Tre sätt att definiera syror och baser</h3>
<p><strong>Arrhenius (1884):</strong> En syra är ett ämne som avger H⁺-joner i vattenlösning; en bas avger OH⁻-joner. Enkel och användbar men begränsad till vattensystem. HCl → H⁺ + Cl⁻. NaOH → Na⁺ + OH⁻.</p>
<p><strong>Brønsted–Lowry (1923):</strong> En syra är en protongivare (H⁺-givare); en bas är en protontagängare. Vidgar definitionen till icke-vattensystem och inkluderar amfolyter. HCl + H₂O → H₃O⁺ + Cl⁻: här är HCl syra, H₂O bas. Omvändningen: H₃O⁺ + Cl⁻ → HCl + H₂O: H₃O⁺ är då syra, Cl⁻ bas. Varje syra har en <em>konjugatbas</em> (syran utan H⁺) och varje bas en <em>konjugatsyra</em> (basen + H⁺). Starkt parens konjugat är alltid svagt.</p>
<p><strong>Lewis (1923):</strong> En syra är en elektronparmottagare; en bas är en elektronpargivare. Vidgar ytterligare – inkluderar reaktioner utan H⁺, t.ex. BF₃ (Lewis-syra) + NH₃ (Lewis-bas) → F₃B←NH₃.</p>

<h3>2. Stark vs svag syra och bas – bindningsstyrka avgör</h3>
<p><strong>Varför är vissa syror starka och andra svaga?</strong> En stark syra har en <em>svag H-A-bindning</em> (lätt att bryta) och/eller en <em>stabil konjugatbas</em> A⁻ (laddningen stabiliseras av strukturen). HCl: H–Cl-bindningen är relativt svag → fullständig dissosiaton. CH₃COOH: karboxylgruppens C–O-bindning är starkare och laddningen i CH₃COO⁻ är resonansstabiliserad → bara partiell dissociation.</p>
<p><strong>Starka syror</strong> dissocierar fullständigt i vatten – reaktionspilen pekar åt höger: HCl + H₂O → H₃O⁺ + Cl⁻. De sex starka syrorna: HCl, HBr, HI, HNO₃, H₂SO₄ (1:a steget), HClO₄. En 0,10 mol/L HCl-lösning har [H₃O⁺] = exakt 0,10 mol/L – inga HCl-molekyler kvarstår.</p>
<p><strong>Svaga syror</strong> dissocierar ofullständigt – reaktionen är en jämvikt ⇌: CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻. En 0,10 mol/L ättiksyralösning har [H₃O⁺] ≈ 1,34×10⁻³ mol/L (bara ~1,3 % dissocierat). Ka = 1,8×10⁻⁵ – ett litet Ka-värde = svag syra = vill inte dissociera.</p>
<p><strong>Starka baser:</strong> NaOH, KOH, Ba(OH)₂ – dissocierar fullständigt, ger [OH⁻] = koncentrationen. <strong>Svaga baser:</strong> NH₃, aminer (R–NH₂) – tar upp proton med jämviktskonstant Kb. NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, Kb = 1,8×10⁻⁵.</p>
<p><strong>Konjugatsyra-baspar:</strong> Varje syra HA har en konjugatbas A⁻ (syran minus ett H⁺). En stark syra har en <em>mycket svag</em> konjugatbas (Cl⁻ är nästintill ingen bas alls). En svag syra har en <em>märkbart stark</em> konjugatbas (CH₃COO⁻ är en märkbar bas). Ka × Kb = Kw – relationen är exakt omvänd.</p>

<h3>3. pH, pOH och vattnets jonprodukt – logaritmskalan och varför pH 7 är neutralt</h3>
<p><strong>Varför en logaritmisk skala?</strong> [H₃O⁺] i vanliga lösningar varierar enormt – från 10 mol/L (starkt koncentrerad syra) till 10⁻¹⁴ mol/L (stark bas). Att skriva 0,00000001 är omständligt; pH-skalan komprimerar detta till ett enkelt tal (−8 → pH 8). pH = −log[H₃O⁺].</p>
<p><strong>Vattnets autoprotolys (autojonisering):</strong> Vatten reagerar med sig självt: 2H₂O ⇌ H₃O⁺ + OH⁻. Jämviktskonstanten Kw = [H₃O⁺][OH⁻] = 1,0×10⁻¹⁴ vid 25 °C. I rent vatten: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7. Tillsätts syra: [H₃O⁺] ökar → [OH⁻] minskar (kvoten Kw bevaras) → pH sjunker. Tillsätts bas: [OH⁻] ökar → [H₃O⁺] minskar → pH stiger.</p>
<div class="formula-box">pH = −log[H⁺]
pOH = −log[OH⁻]
pH + pOH = 14  (vid 25 °C)
[H⁺] = 10^(−pH)

Neutral (25 °C): pH = 7,0  ([H⁺]=[OH⁻]=10⁻⁷)
Sur: pH &lt; 7
Basisk: pH &gt; 7

Observera: pH 7 är neutral vid 25 °C, inte alltid!</div>

<h3>4. Stark och svag syra – vad avgör?</h3>
<p>En <strong>stark syra</strong> (HCl, HNO₃, H₂SO₄) protolyserar fullständigt i vatten – alla molekyler avger sin proton. En <strong>svag syra</strong> (CH₃COOH, H₂CO₃, HF) protolyserar bara delvis – jämvikt råder mellan HA och H⁺ + A⁻.</p>
<p><strong>Syrakonstanten Ka</strong> är ett mått på syrans styrka: stort Ka = stark syra, litet Ka = svag syra. pKa = −log(Ka); lågt pKa = stark syra.</p>
<table class="theory-table">
  <tr><th>Syra</th><th>Formel</th><th>Styrka</th><th>Protolys</th></tr>
  <tr><td>Saltsyra</td><td>HCl</td><td>Stark</td><td>Fullständig</td></tr>
  <tr><td>Svavelsyra</td><td>H₂SO₄</td><td>Stark</td><td>Fullständig (steg 1)</td></tr>
  <tr><td>Salpetersyra</td><td>HNO₃</td><td>Stark</td><td>Fullständig</td></tr>
  <tr><td>Ättiksyra</td><td>CH₃COOH</td><td>Svag</td><td>Delvis</td></tr>
  <tr><td>Kolsyra</td><td>H₂CO₃</td><td>Svag</td><td>Delvis</td></tr>
  <tr><td>Fluorvätesyra</td><td>HF</td><td>Svag</td><td>Delvis</td></tr>
</table>
<p>Samma princip gäller baser: NaOH och KOH är starka (fullständig dissociation), medan NH₃ är en svag bas.</p>

<h3>5. Buffertlösningar – varför pH inte ändras</h3>
<p>En <strong>buffertlösning</strong> motstår ändringar i pH när små mängder syra eller bas tillsätts. Den består av en svag syra och dess konjugatbas (t.ex. ättiksyra CH₃COOH + natriumacetat CH₃COONa) eller en svag bas och dess konjugatsyra (t.ex. ammoniak NH₃ + ammoniumklorid NH₄Cl).</p>
<p><strong>Hur bufferten fungerar:</strong> Tillsätter man H⁺ konsumeras det av basen A⁻ → HA (liten pH-ändring). Tillsätter man OH⁻ reagerar det med syran HA → A⁻ + H₂O (liten pH-ändring). Bufferten fungerar bäst när koncentrationerna av syra och bas är ungefär lika stora.</p>
<p><strong>Biologiska buffrar:</strong> Blodet hålls vid pH 7,35–7,45 av tre buffersystem: bikarbonat/kolsyra (dominerande), fosfatbuffert och proteiner (hemoglobin). En ändring till pH &lt; 7,2 (acidos) eller &gt; 7,6 (alkalos) är livshotande. CO₂-andning är kroppens snabbaste pH-reglering: ökat CO₂ → mer H₂CO₃ → lägre pH; snabb andning blåser ut CO₂ → höjer pH.</p>

<h3>6. Titrering</h3>
<p>Titrering är en kvantitativ analysteknik där en lösning med känd koncentration (titrant) tillsätts till en okänd lösning tills reaktionen är fullständig (<strong>ekvivalenspunkten</strong>). En <strong>indikator</strong> signalerar ekvivalenspunkten färgskärändrande.</p>
<p><strong>Stark syra – stark bas:</strong> pH = 7 vid ekvivalenspunkten (t.ex. HCl + NaOH → NaCl + H₂O). Använd fenolftalein (färgsängas 8,2–10) eller bromtymolblått.</p>
<p><strong>Svag syra – stark bas:</strong> pH > 7 vid ekvivalenspunkten (produkten är ett basalt salt, t.ex. CH₃COO⁻ hydrolyiserar). Använd fenolftalein.</p>
<p><strong>Stark syra – svag bas:</strong> pH < 7 vid ekvivalenspunkten (produkten NH₄⁺ är sur). Använd metylorange.</p>
<div class="formula-box">Grundformel vid 1:1-stoichiometri:
c₁ × V₁ = c₂ × V₂

Exempel: 25,0 mL NaOH titreras med 0,100 mol/L HCl.
Åtgår 18,5 mL HCl.
n(HCl) = 0,100 × 0,0185 = 1,85×10⁻³ mol
n(NaOH) = 1,85×10⁻³ mol
c(NaOH) = 1,85×10⁻³ / 0,025 = 0,074 mol/L</div>

<h3>7. Saltlösningar och hydrolys</h3>
<p>Salter är jonföreningar från syra-basneutralisering. Deras lösningar är inte alltid neutrala:</p>
<p><strong>Neutral:</strong> Salt av stark syra + stark bas. NaCl, KNO₃ – inga joner reagerar med vatten.</p>
<p><strong>Basisk:</strong> Salt av svag syra + stark bas. CH₃COONa – acetatjonen hydrolyserar: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. pH > 7.</p>
<p><strong>Sur:</strong> Salt av stark syra + svag bas. NH₄Cl – ammoniumjonen hydrolyserar: NH₄⁺ ⇌ NH₃ + H⁺. pH < 7.</p>

<h3>8. Indikatorer</h3>
<p>En syra-basindikatorer är själva en svag syra (HIn) där den söndrade (In⁻) och osöndrade formen (HIn) har olika färg. Färgändringen sker runt pKa(HIn) ± 1. Litmuspapperets färgändring vid pH 5–8 (rött i syra, blått i bas). Universalindikator visar ett spektrum från rött (pH 1) till violett (pH 14).</p>

<h3>9. Sambandet</h3>
<p>Syra-bas-kemi genomsyrar hela kemin och livet. pH styr enzymaktivitet, läkemedelslöslighet, korrosionshastigheter och säkerheten hos livsmedel. Buffertlösningar är livsnödvändiga – utan blodets noggranna pH-kontroll skulle kroppens enzymer sluta fungera. Titreringen är en av kemins mest använda kvantitativa metoder för att bestämma koncentrationer. Förståelsen av starka och svaga syror/baser, neutralisation och indikatorer ger eleven verktyg att förutsäga och förklara kemiska reaktioner i vardagen och i laboratoriet.</p>
` },
  { cat: 'Organisk kemi', icon: '🌿', html: `
<h2>🌿 Organisk kemi</h2>
<p class="theory-intro">Organisk kemi är kemin om kolföreningar. Kol (C) har fyra valenselektroner och kan bilda fyra kovalenta bindningar – inklusive till andra kolatomer. Det leder till att C kan bilda kedjor av godtycklig längd, grenar, ringar och dubbel-/trippelbindningar. Det leder i sin tur till att över 10 miljoner organiska föreningar är kända. Varje förening har en specifik 3D-struktur. Strukturen bestämmer reaktiviteten. Reaktiviteten bestämmer vilka reaktioner som är möjliga. Det är varför organisk kemi är grunden för läkemedelskemi, biokemi och plastindustri – allt hänger på strukturen.</p>

<h3>1. Kolatomens unikitet</h3>
<p>Kol (C, Z=6) har fyra valenselektroner och bildar alltid fyra kovalenta bindningar (tetravalent). Det innebär att varje C-atom kan binda till fyra andra atomer – inklusive andra kolatomer. Detta möjliggör:</p>
<ul>
  <li>Raka kedjor: metanol, etan, propan...</li>
  <li>Grenade kedjor: isobutan (2-metylpropan)</li>
  <li>Ringar: cyklohexan, bensen</li>
  <li>Dubbel- och trippelbindningar: eten (C=C), etyn (C≡C)</li>
  <li>Kombinationer av allt ovan: kolesterol, DNA, proteiner</li>
</ul>
<p>Kolväten som består enbart av C och H kallas <strong>kolväten</strong>; dessa delar sig i alkaner (enbart enkelbindningar), alkener (minst en C=C), alkyner (minst en C≡C) och aromater (bensen-ring). Alla övriga organiska ämnen har en eller flera <strong>funktionella grupper</strong> – atomgrupper som ger karakteristiska kemiska egenskaper.</p>

<h3>2. Alkaner – mättade kolväten</h3>
<p>Alkaner har formeln CₙH₂ₙ₊₂ och innehåller enbart C–C och C–H enkelbindningar. "Mättade" innebär att ingen mer väte kan adderas. Alla bindningar är σ-bindningar med fri rotation.</p>
<table class="theory-table">
  <tr><th>Namn</th><th>Formel</th><th>Kokpunkt</th><th>Aggregation (25°C)</th></tr>
  <tr><td>Metan</td><td>CH₄</td><td>−161 °C</td><td>Gas</td></tr>
  <tr><td>Etan</td><td>C₂H₆</td><td>−89 °C</td><td>Gas</td></tr>
  <tr><td>Propan</td><td>C₃H₈</td><td>−42 °C</td><td>Gas</td></tr>
  <tr><td>Butan</td><td>C₄H₁₀</td><td>0 °C</td><td>Gas</td></tr>
  <tr><td>Pentan</td><td>C₅H₁₂</td><td>36 °C</td><td>Vätska</td></tr>
  <tr><td>Hexan</td><td>C₆H₁₄</td><td>69 °C</td><td>Vätska</td></tr>
  <tr><td>Oktadekan</td><td>C₁₈H₃₈</td><td>316 °C</td><td>Fast</td></tr>
</table>
<p>Kokpunkten ökar med längre kolkedja (starkare Londonkrafter med för större molmassa). Grenad struktur sänker kokpunkten (minskar kontaktytan → svagare London-krafter). Alkaner brinner (exoterm förbränning): CH₄ + 2O₂ → CO₂ + 2H₂O, ΔH = −890 kJ/mol. De är annars kemiskt tröga (särskilt substitutionsreaktioner med halogener kräver UV-ljus).</p>

<h3>3. Alkener och alkyner – omättade kolväten</h3>
<p><strong>Alkener</strong> (formel CₙH₂ₙ) har minst en C=C-dubbelbindning (en σ + en π). π-bindningen är reaktiv och möjliggör additionsreaktioner: H₂, Br₂, HX och H₂O kan adderas över dubbelbindningen. Bromöverötter (Br₂ + CC=CC → BrCC-CCBr) färgar av bromvatten – ett enkelt test för omättnad.</p>
<p>Cis/trans-isomeri uppstår när ingen fri rotation finns runt dubbelbindningen och de båda sidorna av bindningen har olika substituenter. Cis-but-2-en och trans-but-2-en är olika ämnen med olika egenskaper.</p>
<p><strong>Alkyner</strong> (CₙH₂ₙ₋₂) har trippelbindning C≡C. Etyn (acetylen, H–C≡C–H) förbränns i ren syrgas och når temperaturer runt 3500°C, används för skärning och svetsning av metall.</p>

<h3>4. Aromater – bensenringen</h3>
<p>Bensen (C₆H₆) är det enklaste aromata systemet. Strukturen är en hexagonal ring med delokaliserade π-elektroner över alla sex kolatomerna. Var och en av de sex C–C-bindningarna är identiska med längd 140 pm (mellanting mellan 154 pm enkelbindning och 134 pm dubbelbindning). Bensenringen är exceptionellt stabil (aromatisk stabilisering, 150 kJ/mol mer stabil än ett hypotetiskt cyklohexatrien).</p>
<p>Bensen reagerar annorlunda jämfört med alkener. Istället för additionsreaktioner genomgår bensen <em>substitutionsreaktioner</em> – ett väteatom på ringen byts mot en annan grupp, så att den stabila aromatiska ringen bevaras.</p>
<p>Aromater förekommer i många naturliga och syntetiska föreningar: toluen (lösningsmedel), naftalen (malkula), styren (plastråvara). Bensen är cancerframkallande (CMR-ämne) och ska hanteras med stor försiktighet.</p>

<h3>5. Funktionella grupper och viktiga ämnesklasser</h3>
<p>Funktionella grupper är grupper av atomer som ger organiska molekyler karakteristiska kemiska egenskaper. Samma grundkolkedja med olika funktionell grupp ger helt andra egenskaper.</p>
<table class="theory-table">
  <tr><th>Klass</th><th>Grupp</th><th>Suffix/prefix</th><th>Exempel</th><th>Kokpunkt</th></tr>
  <tr><td>Alkohol</td><td>–OH</td><td>-ol</td><td>Etanol CH₃CH₂OH</td><td>78 °C</td></tr>
  <tr><td>Aldehyd</td><td>–CHO</td><td>-al</td><td>Etanal CH₃CHO</td><td>20 °C</td></tr>
  <tr><td>Keton</td><td>C=O (mitten)</td><td>-on</td><td>Propanon (aceton)</td><td>56 °C</td></tr>
  <tr><td>Karboxylsyra</td><td>–COOH</td><td>-syra</td><td>Ättiksyra CH₃COOH</td><td>118 °C</td></tr>
  <tr><td>Ester</td><td>–COO–</td><td>-at</td><td>Etylacetat</td><td>77 °C</td></tr>
  <tr><td>Amin</td><td>–NH₂</td><td>amin</td><td>Metylamin CH₃NH₂</td><td>−6 °C</td></tr>
  <tr><td>Amid</td><td>–CONH₂</td><td>amid</td><td>Acetamid CH₃CONH₂</td><td>222 °C</td></tr>
  <tr><td>Halogenid</td><td>–X (F,Cl,Br,I)</td><td>halo-</td><td>Klormetan CH₃Cl</td><td>−24 °C</td></tr>
</table>

<h3>6. Alkoholer</h3>
<p>Alkoholer (–OH) är polara och bildar vätebindningar – därför högre kokpunkt än jämförbara alkaner. Metanol (CH₃OH) och etanol (C₂H₅OH) är blandningsbara med vatten i alla proportioner. Längre alkaner blandas däremot mindre väl.</p>
<p>Alkoholer kan oxideras: primära (R-CH₂OH) → aldehyd → karboxylsyra. Sekundära (R₂CHOH) → keton. Tertiära oxideras inte lätt. Kaliumdikromat (K₂Cr₂O₇) oxiderar alkohol och ändrar färg från gul-orange till grön – principen bakom blodalkohol-testaren (alkotest).</p>
<p>Esterifiering: Alkohol + karboxylsyra ⇌ ester + vatten (med syrakatalys, återflöde). Omvändningen kallas hydrolys (eller försåpning med bas).</p>

<h3>7. Karboxylsyror och estrar</h3>
<p>Karboxylsyror (–COOH) är svaga syror. Kortkedjiga är blandningsbara med vatten och luktar starkt: myrsyra (HCOOH, myrstick), ättiksyra (CH₃COOH, vinäger), smörsyra (C₃H₇COOH, härsket smör). Långkedjiga är fettsyror: stearinsyra (C₁₇H₃₅COOH, mättad, fast), oljesyra (C₁₇H₃₃COOH, 1 dubbelbindning, flytande).</p>
<p>Estrar luktar fruktigt: etylacetat luktar nagellacksborttagare, amylacetat luktar banan. De bildas vid esterifiering och sönderdelas vid hydrolys med syre (syrahydrolys) eller bas (basisk hydrolys = försåpning → tvål + glycerol).</p>

<h3>8. Nomenklatur – IUPAC-systemet</h3>
<p>IUPAC-nomenklaturen ger varje organisk förening ett unikt namn:</p>
<ol>
  <li>Hitta den längsta kolkedjan med högst prioriterad funktionell grupp – det är stamkedjan (metan, etan, propan, butan, pentan, hexan, heptan, oktan, nonan, dekan).</li>
  <li>Numrera stamkedjan från det håll som ger lägst nummer till substituenter/funktionell grupp.</li>
  <li>Ange substituenter med prefix (metyl-, etyl-, klor-, brom-, etc.) och position.</li>
  <li>Ange funktionell grupp med suffix (–an, –en, –yn, –ol, –al, –on, -syre, etc.).</li>
</ol>
<p>Exempel: CH₃–CH(CH₃)–CH₂–OH = 2-metylpropan-1-ol. CH₃–CO–CH₂–CH₃ = butan-2-on.</p>

<h3>9. Isomeri</h3>
<p><strong>Konstitutionsisomerer</strong> (strukturisomerer): samma molekylformel, olika bindningsmönster. Butan (C₄H₁₀) och isobutan (2-metylpropan) är konstitutionsisomerer.</p>
<p><strong>Stereoisomerer</strong>: samma bindningar men olika rumslig ordning. I Kemi 1 är de viktigaste stereoisomererna <strong>cis/trans-isomerer</strong> som uppstår runt en dubbelbindning. Cis = substituenter på samma sida; trans = substituenter på motsatta sidor. Exempel: cis-2-buten och trans-2-buten har samma molekylformel men olika fysikaliska egenskaper (kokpunkt, smältpunkt).</p>

<h3>10. Polymerer – stora molekyler av upprepade enheter</h3>
<p>En <strong>polymer</strong> är en stor molekyl (makromolekyl) uppbyggd av många upprepade små enheter (<strong>monomerer</strong>) som kopplats samman kovalent.</p>
<ul>
  <li><strong>Additionspolymerisation</strong>: monomerer med dubbelbindning adderas till en kedja utan att något avspjälkas. Exempel: eten → polyeten (PE), propen → polypropen (PP), vinylklorid → PVC.</li>
  <li><strong>Kondensationspolymerisation</strong>: monomerer kopplas ihop och en liten molekyl (ofta H₂O) avspjälkas. Exempel: aminosyror → proteiner (peptidbindning), glukos → stärkelse (glykosidisk bindning).</li>
</ul>
<p>Plaster är syntetiska polymerer med anpassningsbara egenskaper. Återvinning av plast minskar miljöbelastningen.</p>

<h3>11. Fossila bränslen och biobränslen</h3>
<p><strong>Fossila bränslen</strong> (olja, kol, naturgas) består av organiska föreningar som bildats under miljontals år genom omvandling av döda organismer under högt tryck och temperatur. Förbränning av fossila bränslen frigör koldioxid som förstärker växthuseffekten.</p>
<p><strong>Biobränslen</strong> framställs från förnybar biomassa: etanol från jäsning av sockerarter, biogas (metan) från rötning av organiskt avfall, biodiesel från vegetabiliska oljor. Biobränslen är koldioxidneutrala i teorin eftersom växterna tagit upp CO₂ under sin livstid.</p>
<p><strong>CMR-ämnen</strong> (cancerogena, mutagena, reproduktionstoxiska) är organiska ämnen som kräver särskild försiktighet vid hantering. Exempel: bensen är cancerogent.</p>

<h3>12. Sambandet</h3>
<p>Organisk kemi är den breddaste grenen av kemin, och dess principer genomsyrar allt levande. Funktionella gruppers reaktivitet är förutsägbar: alkoholers oxidation, syrornas jonisering, estrars hydrolys – alla följer samma mönster oavsett kolkedjans längd. IUPAC-systemet gör det möjligt att kommunicera exakt om strukturer utan tvetydighet. Isomeri (konstitutionsisomerer och cis/trans-isomerer) visar att samma molekylformel kan ge ämnen med helt olika egenskaper. Organisk kemi kopplar samman med termokemi (förbränningsvärden), jämviktsläran (esterifieringsjämvikten) och syra-baskemi (karboxylsyror). Det är också grunden för polymerkemi: polyeten (additionspolymer av eten) och naturens egna polymerer – proteiner, kolhydrater, DNA. Fossila bränslen (olja, kol, naturgas) är organiska föreningar som bildats under miljontals år, medan biobränslen framställs från förnybar biomassa.</p>


` },
  { cat: 'Lösningar & koncentration', icon: '💧', html: `
<h2>💧 Lösningar &amp; koncentration</h2>
<p class="theory-intro">Lösningar är homogena blandningar där ett ämne (löst ämne, solut) är jämnt fördelat i ett annat (lösningsmedel, solvent) på molekylär nivå. Koncentration beskriver hur mycket löst ämne som finns i en given mängd lösning. Från laboratoriel analys till läkemedelsdäse och industriella processer är exakt koncentrationsmätning och -beräkning ett centralt verktyg.</p>

<h3>1. Lösningsprocessen på molekylär nivå</h3>
<p>När ett ämne löser sig bryts existerande interaktioner (endoterm) och nya bildas (exoterm). Nettoresultatet (lösningsentalpin ΔH_sol) bestämmer om lösningen känns kall (NH₄NO₃, ΔH_sol = +25 kJ/mol, endoterm – används i ispack) eller varm (NaOH, ΔH_sol = −44 kJ/mol, exoterm).</p>
<p>"Lika löser lika" är tumregeln: polara lösningsmedel (vatten) löser polara ämnen och jonföreningar. Opolara lösningsmedel (hexan, bensen) löser opolara ämnen (fetter, vaxer). Vatten löser NaCl genom att dess polara molekyler attraherar jonerna och bryter gittret; vatten omger varje jon med ett hydratiseringsskal (solvateringsenergi > gitterenergi).</p>
<p>Temperaturens inverkan: För fasta lösta ämnen i vatten ökar lösligheten generellt med temperatur. För gaser minskar lösligheten med temperatur (Henrys lag, särskilt relevant för CO₂ i drycker och O₂ i sjövatten).</p>

<h3>2. Koncentrationsmått</h3>
<p><strong>Molar koncentration c (mol/L, M)</strong> är den vanligaste enhetens i analytisk kemi: c = n/V. En 1,0 mol/L NaCl-lösning innehåller 58,5 g NaCl per liter.</p>
<div class="formula-box">c = n / V          (mol/L)
n = c × V          (mol)
V = n / c          (L)
m = c × V × M      (g)

Enhetsomvandling: mmol/L = µmol/mL = nmol/µL</div>
<p><strong>Massandel (m/m) eller massa/volym (m/v) i procent:</strong> 5 % NaCl (m/v) = 5 g NaCl per 100 mL. Används i medicinsk kemi (fysiologisk saltlösning = 0,9 % NaCl).</p>
<p><strong>ppm och ppb</strong> (delar per miljon/miljard): används för spårmängder. 1 ppm i vatten ≈ 1 mg/L. Dricksvattengränsen för bly (Pb) är 10 µg/L = 10 ppb.</p>
<p><strong>Molärbråk χ:</strong> χ_A = n_A / n_tot. Används i gasblandningsberäkningar (Raoults lag, Daltons lag).</p>
<p><strong>Molalitet m (mol/kg):</strong> mol löst ämne per kg lösningsmedel. Temperaturoberoende, används i kryoskopi och ebulioskopi.</p>

<h3>3. Bereda lösningar</h3>
<p><strong>Från fast ämne:</strong></p>
<ol>
  <li>Beräkna massa: m = c × V × M</li>
  <li>Väg in på analytisk våg</li>
  <li>Lös i ca halva volymen vatten (destillerat)</li>
  <li>Häll över i mätkolv av önskad volym</li>
  <li>Fyll på med vatten exakt till märkstrecket</li>
  <li>Blanda noggrant</li>
</ol>
<p><strong>Från stocklösning (spädning):</strong> Använd c₁V₁ = c₂V₂. Pipettera exakt V₁ av stocklösningen i mätkolven, fyll på till V₂.</p>
<div class="formula-box">Spädningsekvation: c₁V₁ = c₂V₂

Exempel: Bereda 500 mL av 0,10 mol/L HCl från 12 mol/L HCl:
V₁ = c₂V₂/c₁ = 0,10×500/12 = 4,2 mL
Pipettera 4,2 mL i mätkolv, fyll på till 500 mL.

OBS: Alltid syreämnet i vattnet (SAV = syra i vatten (häll alltid syran i vattnet)),
aldrig vatten i stark syra (skvättrisk)!</div>

<h3>4. Löslighet</h3>
<p><strong>Lösligheten</strong> är den maximala mängd av ett ämne som kan lösas i ett givet lösningsmedel vid en bestämd temperatur. En <strong>mättad lösning</strong> innehåller maximal mängd löst ämne; ytterligare tillsats fälls ut.</p>
<p>Lösligheten beror på temperatur: för de flesta fasta ämnen ökar lösligheten med temperaturen, medan gasers löslighet minskar med temperaturen. Lösligheten beror även på ämnenas polaritet (se avsnitt 5).</p>
<p>Om en lösning innehåller mer löst ämne än vad som normalt är möjligt kallas den <strong>övermättad</strong> – ett metastabilt tillstånd där kristallisering lätt kan utlösas.</p>

<h3>5. Lika löser lika – polaritet och löslighet</h3>
<p><strong>Principen:</strong> "Lika löser lika". Polära ämnen och joner löses bäst i polära lösningsmedel (vatten). Opolära ämnen löses bäst i opolära lösningsmedel (hexan, aceton, etylacetat).</p>
<p><strong>Varför?</strong> Löslighet uppstår när lösningsmedlets intermolekylära krafter kan konkurrenskraftigt ersätta de krafter som håller lösningsmedlets och löst ämnets partiklar samman. Vatten (dipol, vätebindare) kan bilda starka dipol–jon-interaktioner och vätebindningar → löser joner och polära molekyler. Hexan (opolärt) bildar bara svaga van der Waals-krafter → kan inte lösa joner.</p>
<p><strong>Hydratisering:</strong> NaCl(s) + vatten → Na⁺(aq) + Cl⁻(aq). O-sidan av vattenmolekyler orienteras mot Na⁺; H-sidan mot Cl⁻. Varje jon omges av ett hydratskal som stabiliserar dem i lösning. Hydratiseringsentalpin kan vara exoterm (NaOH, CaCl₂) eller endoterm (NH₄NO₃, NaCl).</p>
<p><strong>Gaser i vatten:</strong> Lösligheten ökar med trycket (Henrys lag) men minskar med temperatur. CO₂ under tryck i läsk; uppvärmd läsk förlorar CO₂. Polära gasmolekyler (HCl, NH₃) löses bättre än opolära (O₂, N₂).</p>

<h3>9. Legeringar – fasta lösningar av metaller</h3>
<p>En <strong>legering</strong> är en homogen blandning av metaller (eller metall + icke-metall) i fast form. Legeringar har vanligtvis bättre egenskaper än de ingående metallerna:</p>
<ul>
<li><strong>Brons</strong> (Cu + Sn): hårdare och mer korrosionsbeständig än koppar; använts sedan bronsåldern</li>
<li><strong>Mässing</strong> (Cu + Zn): glänsande, formbar, antimikrobiell</li>
<li><strong>Rostfritt stål</strong> (Fe + Cr ≥12 % + Ni): kromoxidskikt (Cr₂O₃) passiverar ytan → korrosionsbeständig</li>
<li><strong>Stål</strong> (Fe + C 0,05–2 %): hårdare och starkare än rent järn</li>
</ul>

<h3>10. Sambandet</h3>
<p>Lösningskemi är det praktiska ramverk som kopplar samman laboratoriet med teorin. Molkoncentrationen är det språk på vilket alla kvantitativa kemiska beräkningar uttrycks. Löslighetsregler förklarar varför vissa föreningar fälls ut och andra stannar kvar i lösning – avgörande för vattenrening och geologiska processer. Principen "lika löser lika" kopplar polaritet till löslighet och förklarar varför fetter inte löser sig i vatten men väl i organiska lösningsmedel. Koncentrationsberäkningar används i allt från laboratorieanalyser till läkemedelsdosering.</p>
` },
  { cat: 'Elektrokemi', icon: '⚡', html: `
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

<h3>2. Katod och anod – elektrodernas roller</h3>
<p>I all elektrokemi är det avgörande att veta <em>vilken elektrod som gör vad</em>. Reglerna är enkla och gäller alltid, oavsett celltyp:</p>
<ul>
  <li><strong>Katod</strong> = elektroden där <strong>reduktion</strong> sker (elektroner tas emot, joner reduceras)</li>
  <li><strong>Anod</strong> = elektroden där <strong>oxidation</strong> sker (elektroner avges, metall/joner oxideras)</li>
</ul>
<p><strong>Minnesregler:</strong></p>
<div class="formula-box"><strong>RedKat</strong> – Reduktion sker vid Katoden
<strong>OxAn</strong> – Oxidation sker vid Anoden

Dessa regler gäller ALLTID – i galvaniska element, elektrolysceller och korrosion.</div>

<p>Det som <em>skiljer sig</em> mellan celltyper är polariteten (+ eller −), inte vad som händer kemiskt:</p>
<table class="theory-table">
  <tr><th></th><th>Galvaniskt element (batteri)</th><th>Elektrolyscell</th></tr>
  <tr><td><strong>Anod</strong></td><td>Negativ pol (−)</td><td>Kopplad till positiv pol (+)</td></tr>
  <tr><td><strong>Katod</strong></td><td>Positiv pol (+)</td><td>Kopplad till negativ pol (−)</td></tr>
  <tr><td><strong>Vid anoden</strong></td><td>Oxidation (alltid!)</td><td>Oxidation (alltid!)</td></tr>
  <tr><td><strong>Vid katoden</strong></td><td>Reduktion (alltid!)</td><td>Reduktion (alltid!)</td></tr>
  <tr><td><strong>Elektronflöde</strong></td><td>Från anod → katod (yttre krets)</td><td>Från anod → katod (yttre krets)</td></tr>
  <tr><td><strong>Drivkraft</strong></td><td>Spontan reaktion (E°cell &gt; 0)</td><td>Extern strömkälla (tvingar icke-spontan)</td></tr>
</table>
<p><strong>Varför byter polariteten?</strong> I ett galvaniskt element <em>producerar</em> anoden elektroner spontant → den blir negativ. I en elektrolyscell <em>tvingar</em> strömkällan elektronerna åt rätt håll: den yttre +-polen drar bort elektroner från anoden (oxidation), och −-polen pumpar in elektroner vid katoden (reduktion).</p>

<div class="formula-box">Exempel – elektrolys av vatten (med Na₂SO₄ som elektrolyt):

Katod (−): 2H₂O + 2e⁻ → H₂(g) + 2OH⁻     (reduktion – vätgas bildas)
Anod (+):  2H₂O → O₂(g) + 4H⁺ + 4e⁻        (oxidation – syrgas bildas)

Elektronerna flödar från anoden (där vatten oxideras)
genom den yttre kretsen till katoden (där vatten reduceras).
Vid katoden: bubblor av H₂. Vid anoden: bubblor av O₂. Volym H₂:O₂ = 2:1.</div>

<p><strong>Koppling till redox och oxidationstal:</strong> Vid katoden <em>minskar</em> oxidationstalet (reduktion: t.ex. H från +1 till 0 i H₂). Vid anoden <em>ökar</em> oxidationstalet (oxidation: t.ex. O från −2 till 0 i O₂). Halvreaktionerna vid katod och anod är exakt samma halvreaktioner som i redoxkemi – skillnaden är att de sker vid separata elektroder istället för direkt kontakt.</p>

<h3>3. Galvaniskt element – separerade halvreaktioner ger ström</h3>
<p>I ett <strong>galvaniskt element</strong> (voltaisk cell) placeras de två halvreaktionerna i separata halvkärlar förbundna med:</p>
<ul>
  <li><strong>En yttre metalledning</strong> – elektroner flödar från oxidationskärlet till reduktionskärlet (det vi kallar elektrisk ström).</li>
  <li><strong>En saltbrygga eller porös vägg</strong> – joner vandrar för att balansera laddningarna och hålla den inre kretsen sluten (utan saltbrygga byggs en laddningsgradient upp som stoppar reaktionen).</li>
</ul>
<p><strong>Anod</strong> är elektroden där oxidation sker – metallen löses upp och avger elektroner. I ett galvaniskt element är anoden den <em>negativa</em> polen (elektroner lämnar härifrån). <strong>Katod</strong> är elektroden där reduktion sker – joner tar upp elektroner och deponeras. I ett galvaniskt element är katoden den <em>positiva</em> polen (elektroner anländer hit).</p>
<p>Minnesregler: <strong>RedKat</strong> (reduktion vid katoden), <strong>OxAn</strong> (oxidation vid anoden). Eller: <strong>A</strong>nod = <strong>A</strong>vgång av elektroner, <strong>K</strong>atod = <strong>K</strong>ommer elektroner.</p>
<div class="formula-box">Daniell-cellen (Zn/Cu) – ett klassiskt galvaniskt element:
Anod (−):  Zn(s) → Zn²⁺(aq) + 2e⁻     (oxidation, zink löses upp)
Katod (+): Cu²⁺(aq) + 2e⁻ → Cu(s)     (reduktion, koppar fälls ut)
Total:     Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)

Elektronflöde (yttre ledning): Zn → Cu
Jonflöde (saltbrygga): SO₄²⁻ vandrar mot Zn-sidan
                        Zn²⁺/Cu²⁺ balanseras i lösningarna</div>

<h3>4. Cellschema – standardnotation</h3>
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

<h3>5. Normalpotential E° och elektrokemiska spänningsserien</h3>
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

<h3>6. EMK – hur man beräknar spänningen</h3>
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

Tumregel: positivt E°cell → spontan reaktion (galvanisk cell)</div>

<h3>7. Elektrolys – tvinga reaktioner med extern ström</h3>
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

<h3>8. Korrosion – okontrollerad galvanism</h3>
<p>Korrosion är i grunden ett oönskat galvaniskt element som uppstår spontant. Järnrostning kräver <em>fukt</em> (elektrolyt) och <em>syre</em> (oxidationsmedel):</p>
<div class="formula-box">Anod (Fe-yta): Fe → Fe²⁺ + 2e⁻          E° = −0,44 V
Katod (O₂-yta): O₂ + 4H⁺ + 4e⁻ → 2H₂O  E° = +1,23 V
E°cell = 1,23 − (−0,44) = +1,67 V  → SPONTAN (järn rostar spontant!)

Fe²⁺ oxideras vidare: 4Fe²⁺ + O₂ + 8OH⁻ → 4Fe(OH)₂ → 2Fe₂O₃·H₂O (rost)</div>
<p>Rost är <em>porös</em> och skyddar inte järnet – korrosionen fortgår in på djupet. Det förklarar varför järn rostar igenom, men aluminium inte gör det trots att Al är mer oädelt (se passivering nedan).</p>
<p><strong>Galvanisk korrosion:</strong> När två metaller med olika E° är i elektrisk kontakt i fuktig miljö, fungerar den oädlare som anod och oxideras snabbare. Exempel: aluminium (E° = −1,66 V) och koppar (E° = +0,34 V) i kontakt → aluminium äts snabbt upp. Järnspik i kopparplåt = järn korroderar. Salt accelererar korrosion (bättre elektrolyt).</p>

<h3>9. Korrosionsskydd</h3>
<p>Varje skyddsmetod tar bort ett av korrosionens nödvändiga villkor (elektrolyt, syre, elektrokemisk krets) eller vänder spänningsserieprincipen till sin fördel:</p>
<ul>
  <li><strong>Passivering</strong> – metallen bildar spontant ett <em>tätt, vidhäftande</em> oxidskikt som blockerar vidare reaktion. Al → Al₂O₃ (tunt, genomskinligt, 4 nm). Cr → Cr₂O₃ (grunden för "rostfritt" stål). Passivering är varför aluminium tycks korrosionsbeständigt trots lågt E°. Skiktet läker sig självt om det skadas (i närvaro av O₂).</li>
  <li><strong>Galvanisering</strong> – belägga stål med zink. Zink (E° = −0,76 V) är mer oädelt än järn (−0,44 V). Om beläggningen skadas är zink fortfarande anod och skyddar järnet elektrochemiskt (katodiskt skydd). Används på bilar, räcken, plåttak.</li>
  <li><strong>Offeranod</strong> – en bult eller platta av Zn eller Mg ansluts elektriskt till konstruktionen. Offeranden fungerar som anod; konstruktionen är katod och korroderar inte. Används på fartyg, undervattensledningar, betong i havsvatten. Offeranodens E° måste vara lägre än konstruktionens (Mg: −2,37 V, Zn: −0,76 V, järn: −0,44 V). Byts ut regelbundet.</li>
  <li><strong>Ytbeläggning</strong> – färg, lack, emalj, plastbeläggning isolerar metallen från elektrolyt och syre (bryter kretsen). Kräver intakt beläggning; ett repat skikt ger ibland accelererad korrosion i repan.</li>
  <li><strong>Katodiskt skydd med extern ström</strong> – en extern strömkälla håller järnkonstruktionen som katod (negativ pol). Anoden (ett offerbart material) oxideras istället. Används för underjordiska rörledningar och betongkonstruktioner.</li>
</ul>

<h3>10. Sambandet – allt hänger ihop</h3>
<p>Elektrokemi är redoxkemins praktiska tillämpning. Elektronegativiteten (bindningsläran) bestämmer oxidationstal och reaktionstendenser → normalpotentialen är ett kvantitativt mått på detta. En stor positiv E°cell innebär en stark drivkraft för reaktionen. Faradays lagar kopplar elektrokemi till stökiometri. Korrosionsskyddet är tillämpad spänningsserie: förstå varför metaller rangordnas som de gör, så förstår man varför offeranodens metall måste väljas noga. Hela batteriteknologin – från ett 1,5 V AA-batteri till ett modernt Li-ion-batteri – är elektrokemi i praktiken.</p>
` },
  { cat: 'Termokemi & energi', icon: '🌡️', html: `
<h2>🌡️ Termokemi &amp; energi</h2>
<p class="theory-intro">All kemisk reaktion innebär energiöverföring – bindningar bryts (kräver energi) och nya bildas (frigör energi). Nettosumman avgör om reaktionen är exoterm (ger ifrån sig värme) eller endoterm (absorberar värme). Termokemi handlar om att mäta, beräkna och förutsäga dessa energiförändringar. Varför sker vissa reaktioner spontant? Svaret involverar både <em>energi</em> (entalpi) och <em>oordning</em> (entropi). Termokemi kopplar samman bindningsstyrkor, kalorimetri, standardentalpier och entropi i ett sammanhängande system.</p>

<h3>1. Grundbegrepp: system, omgivning, värme och arbete</h3>
<p>I termokemi definieras <strong>systemet</strong> som det vi studerar (reaktanterna och produkterna) och <strong>omgivningen</strong> som resten av universum. Energi kan överföras som <strong>värme (q)</strong> eller som <strong>arbete (w)</strong>. Termodynamikens första lag: energi är bevarad: ΔU = q + w.</p>
<p>I kemilaboratoriet utförs de flesta reaktioner vid konstant tryck (atmosfärtryck). Då är den relevanta energikvanditeten <strong>entalpi H</strong>: ΔH = q_p (värme vid konstant tryck). ΔH < 0 = exoterm (värme frigs till omgivningen). ΔH > 0 = endoterm (värme absorberas från omgivningen).</p>

<h3>2. Kalorimetri</h3>
<p>Värme mäts med en <strong>kalorimeter</strong>. Den enklaste (kaffekoppen) mäter värmeöverföringen vid konstant tryck i lösning. En bomb-kalorimeter mäter vid konstant volym (ΔU, förbränningsvärden).</p>
<div class="formula-box">q = m × c × ΔT

q = värme (J)
m = massa lösning (g)
c = specifik värmekapacitet (J/(g·K))
  c(vatten) = 4,18 J/(g·K)
ΔT = temperaturändring (°C eller K)

Neutralisering: 50 mL 1M HCl + 50 mL 1M NaOH
m=100 g, ΔT=6,85°C
q=100×4,18×6,85=2863 J
n(rxn)=0,050 mol
ΔH_neutr=2863/0,050=57260 J/mol≈57,3 kJ/mol</div>

<h3>3. Standardöenthalpier och Hess lag</h3>
<p><strong>Standardbildningsentalpin ΔH°f</strong> är entalpiförändringen när 1 mol av ett ämne bildas från sina element i standardtillstånd (25°C, 1 bar). Per definition är ΔH°f = 0 för alla grundämnen i sitt standardtillstånd (H₂(g), O₂(g), C(grafit), Na(s), osv.).</p>
<table class="theory-table">
  <tr><th>Ämne</th><th>ΔH°f (kJ/mol)</th></tr>
  <tr><td>H₂O(l)</td><td>−285,8</td></tr>
  <tr><td>H₂O(g)</td><td>−241,8</td></tr>
  <tr><td>CO₂(g)</td><td>−393,5</td></tr>
  <tr><td>NH₃(g)</td><td>−46,1</td></tr>
  <tr><td>NO(g)</td><td>+90,3</td></tr>
  <tr><td>C₂H₅OH(l)</td><td>−277,7</td></tr>
</table>
<p><strong>Hess lag:</strong> ΔH för en reaktion är summan av ΔH för stegen som överför reaktanter till produkter, oavsett väg. Entalpi är en tillståndsfunktion – beror bara på start- och slutläge, inte på vägen.</p>
<div class="formula-box">ΔH°rxn = Σ ΔH°f(produkter) − Σ ΔH°f(reaktanter)

Exempel: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)
ΔH°rxn = [ΔH°f(CO₂) + 2ΔH°f(H₂O)] − [ΔH°f(CH₄) + 0]
= [−393,5 + 2×(−285,8)] − [−74,8]
= (−393,5 − 571,6) − (−74,8)
= −965,1 + 74,8 = −890,3 kJ/mol</div>
<p>Hess lag används när direktmätning av ΔH är svår. Bildningsentalpier av alla ämnen är tabellerade och ger ΔH för godtyckliga reaktioner.</p>

<h3>4. Bindningsenergier</h3>
<p>En alternativ metod att beräkna ΔH är via bindningsenergier (BE). Att bryta en bindning är endotermt; att bilda en bindning är exotermt.</p>
<div class="formula-box">ΔH ≈ Σ BE(brutna bindningar) − Σ BE(bildade bindningar)

Typiska BE (kJ/mol):
C–H: 413   O=O: 498   C=O: 799
H–H: 436   O–H: 463   C–C: 346
N≡N: 945   C=C: 614   H–Cl: 431

Exempel: H₂ + Cl₂ → 2HCl
ΔH = [BE(H–H) + BE(Cl–Cl)] − [2×BE(H–Cl)]
= [436 + 243] − [2×431]
= 679 − 862 = −183 kJ</div>
<p>OBS: BE är medelvärden och ger approximativa ΔH; bildningsentralpimétodos ger mer exakta värden.</p>

<h3>5. Spontana reaktioner – varför sker vissa reaktioner av sig själva?</h3>
<p>En <strong>spontan reaktion</strong> sker av sig själv utan yttre energitillförsel (även om den kan vara långsam). De flesta exoterma reaktioner är spontana – energi frigörs till omgivningen. Men även vissa endoterma processer kan vara spontana, t.ex. is som smälter vid rumstemperatur.</p>
<p>Generellt gäller att reaktioner tenderar att gå mot: (1) <strong>lägre energi</strong> (exoterm, ΔH &lt; 0) och (2) <strong>större oordning</strong> (t.ex. fast → gas, ren substans → blandning). Dessa två drivkrafter samverkar eller motverkar varandra.</p>

<h3>7. Fasövergångar och lösningsentalpi</h3>
<p>Fasövergångar kräver energi för att bryta intermolekylära bindningar:</p>
<table class="theory-table">
  <tr><th>Process</th><th>Energi</th><th>Exempel</th></tr>
  <tr><td>Smältning (fusion)</td><td>ΔH_fus > 0</td><td>Is: 6,01 kJ/mol</td></tr>
  <tr><td>Stelning</td><td>−ΔH_fus &lt; 0</td><td>−6,01 kJ/mol</td></tr>
  <tr><td>Ångbildning (vaporisation)</td><td>ΔH_vap > 0</td><td>Vatten: 40,7 kJ/mol</td></tr>
  <tr><td>Kondensation</td><td>−ΔH_vap &lt; 0</td><td>−40,7 kJ/mol</td></tr>
  <tr><td>Sublimation</td><td>ΔH_sub > 0</td><td>Is → ånga</td></tr>
</table>
<p>Vattnets höga ΔH_vap (40,7 kJ/mol) är en direkt följd av starka vätebindningar – kräver mycket energi att brytas. Det är varför svettning käler kroppen effektivt och varför küstklimaten är mildare (havet lagrar och avger värme via ång/kondensation).</p>

<h3>8. Reaktionskinetik – hastighet och aktiveringsenergi</h3>
<p>Reaktionshastigheten beror på hur ofta partiklar kolliderar med tillräcklig energi. <strong>Aktiveringsenergin E_a</strong> är den minsta energi som krävs för att en reaktion ska starta.</p>
<p>Faktorer som påverkar reaktionshastigheten:</p>
<ul>
  <li><strong>Temperatur:</strong> Höjd temperatur → fler partiklar har tillräcklig energi → snabbare reaktion. En ökning med 10 °C ungefär fördubblar hastigheten.</li>
  <li><strong>Koncentration:</strong> Fler partiklar per volym → fler kollisioner → snabbare.</li>
  <li><strong>Yta/fördelning:</strong> Finfördelat material → större kontaktyta → snabbare (t.ex. puder vs klump).</li>
  <li><strong>Katalysator:</strong> Sänker aktiveringsenergin genom att erbjuda en alternativ reaktionsväg. Förbrukas inte själv.</li>
</ul>

<h3>9. Energikällor, fotosyntes och miljöpåverkan</h3>
<p><strong>Fossila bränslen</strong> (kol, olja, naturgas) bildades av organiska rester under 100-tals miljoner år. Förbränning frigör lagrad koldioxid på decennier: bränsle + O₂ → CO₂ + H₂O + ΔH. Problemet: CO₂ som lagrats länge ackumuleras i atmosfären → förstärkt växthuseffekt → global uppvärmning.</p>
<p><strong>Växthuseffekten:</strong> Växthusgaser (CO₂, CH₄, N₂O, H₂O) absorberar IR-strålning (värme) från jordytan och återstrålar en del tillbaka → atmosfären värms. Utan naturlig växthuseffekt: –18 °C i stället för +15 °C. Förstärkt effekt leder till klimatförändringar.</p>
<p><strong>Biobränsle:</strong> Förnybart bränsle från biomassa. Etanol (C₂H₅OH) via jäsning av socker/stärkelse: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Metan (biogas) via anaerob rötrötning. Betraktas som CO₂-neutralt – växterna tog upp lika mycket CO₂ under sin livstid.</p>
<p><strong>Fotosyntesen (energilagring):</strong> 6CO₂ + 6H₂O + ljus → C₆H₁₂O₆ + 6O₂.&nbsp; Endoterm (ΔH &gt; 0, ~2 800 kJ/mol glukos). Klorofyll absorberar rött och blått ljus → omvandlar ljusenergi till kemisk bindningsenergi. Fotosyntesen driver hela biosfären.</p>
<p><strong>Cellandning (energifrigörelse):</strong> C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi (ATP).&nbsp; Exoterm (ΔH ≈ −2 800 kJ/mol). Omvandlar kemisk energi till ATP som cellen kan använda. Pågår ständigt i mitokondrierna. Cellandning är termodynamiskt omvändningen av fotosyntesen.</p>
<p><strong>Verkningsgrad (η):</strong> η = uttagen nyttig energi / tillförd energi × 100 %. Termodynamikens andra lag: varje energiomvandling ger spillvärme → η &lt; 100 %. Kolkraftverk η ≈ 35–40 %; kombicykel (gas+ånga) η ≈ 55–60 %; värmepump η kan överskrida 100 % (transporterar värme, skapar den inte).</p>

<h3>10. Sambandet</h3>
<p>Termokemi binder ihop alla kemins grenar. ΔH-värden från kalorimetri används direkt i ingenjörs- och energiberäkningar. Hess lag gör det möjligt att beräkna ΔH för reaktioner som är praktiskt svåra att mäta direkt. Entropin förklarar varför vissa processer sker spontant trots att de inte frigör energi – t.ex. lösning av NaCl är nästan termoneutral men sker tack vare entropiökning (jonerna sprids ut). Förståelsen för aktiveringsenergi och kinetik förklarar varför bensin inte antänds spontant vid rumstemperatur trots att förbränningen är starkt exoterm.</p>
` },
  { cat: 'Laborativ kemi & säkerhet', icon: '🔬', html: `
<h2>🔬 Laborativ kemi &amp; säkerhet</h2>
<p class="theory-intro">Laboratoriet är platsen där kemisk teori möter verkligheten. Här utförs särskilt kvantitativa analyser, synteser av nya ämnen, och undersökningar av reaktionsmekanismer. Laborativ kompetens innefattar tre samverkande delar: säkerhet (förhindra skador), färdighet (korrekt användning av instrument och tekniker) och vetenskapligt tänkande (planera, genomföra, analysera, rapportera). I Sverige regleras kemilaboratoriet av Arbetsmiljölagen, REACH-förordningen och GHS-systemet.</p>

<h3>1. Den naturvetenskapliga metoden</h3>
<p>Naturvetenskap bygger på <strong>systematisk undersökning</strong> av naturen. Den naturvetenskapliga metoden följer en cykel:</p>
<ul>
  <li><strong>Observation</strong> – iaktta ett fenomen eller ett problem</li>
  <li><strong>Hypotes</strong> – formulera en testbar förklaring ("Om... så...")</li>
  <li><strong>Experiment</strong> – planera och genomföra ett kontrollerat försök som testar hypotesen. Variera bara en faktor i taget.</li>
  <li><strong>Analys</strong> – samla data, bearbeta resultat, gör beräkningar</li>
  <li><strong>Slutsats</strong> – stödjer eller förkastar data hypotesen? Formulera en alternativ hypotes vid behov.</li>
</ul>
<p>En <strong>teori</strong> är en väl beprövad förklaring som stöds av upprepade experiment. En <strong>modell</strong> är en förenklad bild av verkligheten som underlättar förståelse (t.ex. Bohrs atommodell).</p>

<h3>2. Objektiv och subjektiv kunskap</h3>
<p><strong>Objektiv kunskap</strong> är mätbar, testbar och oberoende av vem som observerar. Naturvetenskapliga resultat ska kunna upprepas av andra forskare och ge samma utfall – det kallas <strong>reproducerbarhet</strong>.</p>
<p><strong>Subjektiv kunskap</strong> beror på individens åsikter, värderingar och erfarenheter. Exempel: "den kemikalien luktar illa" (subjektivt) vs "kemikalien har en ångtryck på 15 kPa vid 20 °C" (objektivt).</p>
<p><strong>Källkritik:</strong> All information ska granskas kritiskt. Fråga: Vem har skrivit? Är källan vetenskapligt granskad (peer review)? Är informationen aktuell? Finns det ekonomiska intressen bakom påståendet?</p>

<h3>3. Riskbedömning och grön kemi</h3>
<p><strong>Riskbedömning</strong> görs innan varje laboration: identifiera kemikalier och deras faror (via SDS), bedöm risken, planera skyddsåtgärder och skriv ned dem i labprotokollet.</p>
<p><strong>Grön kemi</strong> är ett förhållningssätt som syftar till att minimera kemins miljöpåverkan. Principer: använd förnybar råvara, minimera avfall, undvik giftiga lösningsmedel, designa reaktioner med hög atomeffektivitet, använd katalysatorer istället för stökiometriska mängder reagenser.</p>

<h3>4. GHS – globalt harmoniserat system för klassificering av kemikalier</h3>
<p>GHS (Globally Harmonized System) är ett internationellt system för att klassificera och märka kemikalier enhetligt. Varje GHS-piktogram är en vit diamantform med röd kant och ett svart symbol i mitten.</p>
<table class="theory-table">
  <tr><th>Piktogram</th><th>Faroklass</th><th>Exempel</th></tr>
  <tr><td>Flamma</td><td>Brandfarligt, självantendbara, pyroföra</td><td>Etanol, aceton, magnesium</td></tr>
  <tr><td>Utfälld flamma</td><td>Oxiderande</td><td>H₂O₂, KMnO₄, HNO₃(konc.)</td></tr>
  <tr><td>Sprängning</td><td>Explosivt</td><td>TNT, aceton peroxid</td></tr>
  <tr><td>Gasflaska</td><td>Gas under tryck</td><td>Kvave, CO₂-flaskor</td></tr>
  <tr><td>Dödskalle</td><td>Akut toxicitet (hög)</td><td>HCN, As₂O₃</td></tr>
  <tr><td>Utropstecken</td><td>Akut toxicitet (lågre), irriterande</td><td>NaOH (spädd), HCl (utsp.)</td></tr>
  <tr><td>Ätande material</td><td>Frätsam</td><td>H₂SO₄, NaOH, HF</td></tr>
  <tr><td>Hälsofaror</td><td>Allvarliga hälsofaror, CMR-ämnen</td><td>Bensen (cancerframkallande)</td></tr>
  <tr><td>Miljö</td><td>Miljöfarligt</td><td>Kvicksilver, tributyltin</td></tr>
</table>
<p>Varje kemikalie har ett <strong>säkerhetsdatablad (SDS)</strong> med 16 sektioner: kemisk identitet, faror, försiktighetshåntering, första hjälpen, brandsläckningsmedel, läckage, förvaring, personlig skyddsutrustning, fysikaliska egenskaper, stabilitet, toxikologi, ekologi och avfallshantering.</p>

<h3>5. Personlig skyddsutrustning (PSU)</h3>
<p><strong>Skyddsglasögon</strong> är obligatoriska när kemikalier hanteras, även i sug. Ögonflödjning i 15 minuter (sköljstation) vid stänk av frätande ämnen, oavsett hur smärtsamt det verkar – underlåtenhet leder till permanenta skador.</p>
<p><strong>Skyddsrock</strong> sküdar hår, huden och kläder. Syntetfibrer bränner och smälter vid kontakt med låga; bomull ger bättre skydd. Aldrig labbar i kortärmat.</p>
<p><strong>Handskar:</strong> Nitrilgummi för de flesta kemikalier (särskilty syror, baser, organiska lösningsmedel). Latex (allergirisk). Neoprene för stärkare lösningsmedel. OBS: handskar skyddar mot stänk men inte långtids-permeation av lösningsmedel.</p>
<p><strong>Drag (frånluftskåpa):</strong> All hantering av flyktiga, giftiga eller luktande ämnen sker i drag. Frontglaslukas är sänkt till 10–15 cm från arbetsytan. Aldrig spjäll stängt.</p>

<h3>6. Viktiga laborativa tekniker</h3>
<p><strong>Vägning:</strong> Analytisk våg (0,0001 g noggrannhet) används för känsliga mätningar. Tara före vägning. Undvik statisk elektricitet (plastspatel). Väg inte direktinnehåll på vaggar utan ask/bägare.</p>
<p><strong>Mätning av volym:</strong></p>
<ul>
  <li><strong>Mätkolv:</strong> exakt volym (±0,1–0,3 mL beroende på storlek). Används för att bereda lösningar av exakt koncentration. Avläses vid meniskens nedre kant i ögonhöjd.</li>
  <li><strong>Byrett:</strong> för titrering, avläses med 0,01 mL. Fyll ny byrett, skölj med titrant, ställ menisk på 0,00. Töm långsamt när nära ekvivalenspunkten.</li>
  <li><strong>Pipett:</strong> för exakt volymöverföring. Skölj med lösningen, fyll med pumpkolv eller pipettgummi (aldrig muntill!). Sätt fingret på öppningen för att reglera flödet.</li>
  <li><strong>Mätcylinder:</strong> grov mätning (±1 mL).</li>
</ul>
<p><strong>Försäkra (uppvärmning):</strong> Bunsen-brännare, värmeplt (ingen låga), vättenbad (jämn temperatur). Använd kolbe med kokkroppar vid uppvärmning – undviker stötkokning. Vrängt glas mot värmekälla.</p>
<p><strong>Centrifugering:</strong> separerar fällning från lösning. Balansera med förrör av lika massa på motstående sidor.</p>
<p><strong>Filtrering:</strong> Vakuumfiltrering (Büchner-tratt) för snabb separation. Gravitationärt (veckfilterpapper i tratt) för fällningsanalys.</p>
<p><strong>Destillation:</strong> separerar ämnen efter kokpunkt. Enkel destillation för stora skillnader. Fraktionerad (kolonn) för nära kokpunkter (etanol/vatten: 78/100°C).</p>
<p><strong>Kromatografi:</strong> TLC (tunnskiktskromatografi) för snabb identifiering av organiska ämnen. Rf = avstånd substansen vandrat / avstånd lösningsfront.</p>

<h3>7. pH-mätning</h3>
<p><strong>pH-meter</strong> mäter potentialskillnaden över en glasmembranelektrod som är selektiv för H⁺-joner. Kalibrering med buffertlösningar (pH 4, 7, 10) före användning. Noggrannhet ±0,01 pH. Sköljis elektroden med destillerat vatten och törkas försiktigt. Förvara i KCl-lösning, aldrig torrt.</p>
<p><strong>Indikatorpapper</strong> (litmus, universalindikator) ger grov uppskattning (±1 pH). Användbart för fältprov eller när hög noggrannhet inte krävs.</p>

<h3>8. Felkällor och osäkerhet</h3>
<p><strong>Systematiska fel</strong> påverkar alla mätningar i samma riktning: felkalibrerad våg, bubba i byretten, färgändring missad vid titrering. Kan minskas med noggrant kalibrering och standardisering.</p>
<p><strong>Slumpmässiga fel</strong> varierar slumpmässigt: läsningslösfel, temperaturfluktuationer. Minskas med upprepade mätningar och statistisk analys (medelvärde, standardavvikelse).</p>
<p><strong>Rimlighetskontroll:</strong> Svarar experimentresultaten på den rätta storleksordningen? Är utbytet > 100 % (omöjligt, något är fel)? Stämmer mätvärdet mot tabellvärdet inom rimlig osäkerhet?</p>
<table class="theory-table">
  <tr><th>Instrument</th><th>Noggrannhet</th><th>Användning</th></tr>
  <tr><td>Analytisk våg</td><td>±0,0001 g</td><td>Exakt vägning av reagenser</td></tr>
  <tr><td>Mätkolv 100 mL</td><td>±0,1 mL</td><td>Exakt lösningsberedning</td></tr>
  <tr><td>Byrett 50 mL</td><td>±0,05 mL</td><td>Titrering</td></tr>
  <tr><td>Pipett 25 mL</td><td>±0,04 mL</td><td>Exakt volymöverföring</td></tr>
  <tr><td>Mätcylinder 50 mL</td><td>±0,5 mL</td><td>Ungefärlig mätning</td></tr>
  <tr><td>pH-meter</td><td>±0,01 pH</td><td>pH-mätning</td></tr>
</table>

<h3>9. Avfallshantering</h3>
<p>Kemikalieaväll ska sörteras efter typ och aldrig hällas i avloppet (lagstiftning, miljöskada). Typiska kategorier:</p>
<ul>
  <li>Halogenerade organiska lösningsmedel (kloroform, DCM): separat kärl</li>
  <li>Icke-halogenerade organiska (etanol, aceton): separat kärl</li>
  <li>Sura lösningar (pH &lt; 6): neutralisera och avlopp eller separat uppsamling</li>
  <li>Basiska lösningar (pH &gt; 8): neutralisera</li>
  <li>Tungmetaller (Pb, Hg, Cd, Cr): specialhantering</li>
  <li>Cyanidföreningar: extremt giftigt, speciell destruktion</li>
</ul>

<h3>10. Labrapportens struktur</h3>
<p>En vetenskaplig rapport bör följa en standardstruktur som gör resultaten reproducerbara och granskningsbara:</p>
<p><strong>Syfte/Hypotes:</strong> Vad ska undersökas? Vilken hypotes testas? Ange förväntat resultat och dess motivering.</p>
<p><strong>Bakgrund/Teori:</strong> Relevant kemi. Formler. Litteraturvärden. Reaktionsscheman.</p>
<p><strong>Material och metod:</strong> Lista över kemikalier (CAS-nr, klass, GHS), utrustning, detaljerat utförande. Tillräckligt detaljerat för att någon annan ska kunna upprepa experimentet.</p>
<p><strong>Resultat:</strong> Rådata i tabeller, utförda beräkningar (visa ekvationer), grafer (axlar, enheter, titel). Ingen tolkning här.</p>
<p><strong>Diskussion:</strong> Tolka resultaten. Jämför med teorivärden/litteratur. Analysera felkällor och deras påverkan. Förbättringsförslag.</p>
<p><strong>Slutsats:</strong> Svarar direkt på syftet. Kort och koncist. Dra slutsatser som stöds av data.</p>

<h3>11. Sambandet</h3>
<p>Laborativ kemi är direkt tillämpning av all kemisk teori. Titrering tillämpar syra-baskemi och stökiometri. Kalorimetri mäter termokemiska storheter. Kristallisering och utfällning tillämpar löslighetsregler. Säkerheten är inte en börda utan en integrerad del av god laborativ praxis – GHS-systemet är ett verktyg för att kommunicera kemisk kunskap om faror. Noggrannhet i labbet, från kalibrering till avsläsning och avfallshantering, räknas lika mycket som teorin bakom. Utan bra data kan ingen slutsats dras. Den vetenskapliga metoden – observera, hypotisera, experimentera, analysera, dra slutsatser – är kärnan som gör kemi till en naturvetenskap.</p>
` },
  { cat: 'Biokemi', icon: '🧬', html: `
<h2>🧬 Biokemi – livets molekyler</h2>
<p class="theory-intro">Biokemi är gränslandet mellan kemi och biologi. Alla levande organismer är uppbyggda av samma typer av biomolekyler: kolhydrater, proteiner, lipider och nukleinsyror. Dessa molekyler byggs upp och bryts ner genom kemiska reaktioner som styrs av enzymer.</p>

<h3>1. Kolhydrater – kroppens bränsle</h3>
<p>Kolhydrater har den allmänna formeln (CH₂O)ₙ och delas in i tre grupper:</p>
<ul>
  <li><strong>Monosackarider</strong> (enkla sockerarter): glukos (C₆H₁₂O₆, druvsocker), fruktos (fruktsocker), ribos (i RNA), deoxiribos (i DNA)</li>
  <li><strong>Disackarider</strong> (två monosackarider): sackaros = glukos + fruktos (vanligt socker), laktos = galaktos + glukos (mjölksocker), maltos = glukos + glukos (maltsocker)</li>
  <li><strong>Polysackarider</strong> (kedjor av monosackarider): stärkelse (energilagring i växter), glykogen (energilagring i djur), cellulosa (strukturmolekyl i växtcellväggar)</li>
</ul>
<p>Monosackarider kopplas ihop via <strong>glykosidiska bindningar</strong> (kondensationsreaktion, avspjälkar H₂O). De klyvs tillbaka vid <strong>hydrolys</strong> (vatten tillsätts).</p>

<h3>2. Proteiner – livets arbetare</h3>
<p>Proteiner är polymerer av <strong>aminosyror</strong> bundna via <strong>peptidbindningar</strong> (–CO–NH–). Det finns 20 standardaminosyror, alla med en aminogrupp (–NH₂), en karboxylgrupp (–COOH) och en unik sidokedja (R-grupp).</p>
<p>Proteiners funktion beror på deras tredimensionella struktur:</p>
<ul>
  <li><strong>Enzymer</strong>: biologiska katalysatorer (t.ex. amylas som bryter ner stärkelse)</li>
  <li><strong>Strukturproteiner</strong>: kollagen (hud, senor), keratin (hår, naglar)</li>
  <li><strong>Transportproteiner</strong>: hemoglobin (transporterar O₂ i blodet)</li>
  <li><strong>Antikroppar</strong>: del av immunförsvaret</li>
</ul>
<p><strong>Denaturering</strong> innebär att proteinet förlorar sin tredimensionella struktur (och därmed funktion) genom värme, extremt pH eller kemikalier. Exempel: ett kokt ägg kan inte bli rått igen.</p>

<h3>3. Lipider – energi och membran</h3>
<p>Lipider är opolära biomolekyler som inte löser sig i vatten. Viktigaste grupperna:</p>
<ul>
  <li><strong>Triglycerider</strong> (fetter och oljor): ester av glycerol + tre fettsyror. Mättade fettsyror = inga dubbelbindningar (fast, djuriskt fett). Omättade = en eller flera C=C (flytande, vegetabilisk olja).</li>
  <li><strong>Fosfolipider</strong>: bygger upp cellmembran; har en polär (hydrofil) huvudgrupp och två opolära (hydrofoba) fettsyresvansar</li>
</ul>
<p>Lipider lagrar energi mycket effektivt: 1 g fett ger ca 38 kJ, jämfört med ca 17 kJ per gram kolhydrat.</p>

<h3>4. Nukleinsyror – den genetiska koden</h3>
<p><strong>DNA</strong> (deoxiribonukleinsyra) lagrar genetisk information som en dubbelspiral med komplementära baspar: adenin–tymin (A–T) och guanin–cytosin (G–C). Sockret är deoxiribos.</p>
<p><strong>RNA</strong> (ribonukleinsyra) är enkelsträngat med ribos som socker och uracil (U) istället för tymin. RNA översätter DNAs kod till proteiner (mRNA, tRNA, rRNA).</p>
<p>Nukleinsyror är uppbyggda av <strong>nukleotider</strong>: en kvävebas + ett socker + en fosfatgrupp.</p>

<h3>5. Enzymer – biologiska katalysatorer</h3>
<p>Enzymer är proteiner som katalyserar biokemiska reaktioner genom att sänka aktiveringsenergin. Varje enzym är specifikt för sitt <strong>substrat</strong> (nyckelhålsmodellen: substratet passar i enzymets aktiva yta).</p>
<p>Enzymaktiviteten påverkas av: temperatur (optimal ca 37 °C för mänskliga enzymer), pH (optimal varierar, t.ex. pepsin pH 2, trypsin pH 8), och koncentrationer av substrat och enzym.</p>

<h3>6. Metabolism – cellens kemiska reaktioner</h3>
<p><strong>Metabolism</strong> är summan av alla kemiska reaktioner i en organism:</p>
<ul>
  <li><strong>Katabolism</strong> (nedbrytning): komplexa molekyler → enklare, frigör energi. Exempel: cellandning C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi (ATP)</li>
  <li><strong>Anabolism</strong> (uppbyggnad): enklare molekyler → komplexa, kräver energi. Exempel: fotosyntes 6CO₂ + 6H₂O + ljusenergi → C₆H₁₂O₆ + 6O₂</li>
</ul>
<p>ATP (adenosintrifosfat) är cellens energivaluta – den molekyl som transporterar kemisk energi mellan reaktioner.</p>

<h3>7. Sambandet</h3>
<p>Biokemi visar hur organisk kemi tillämpas i levande system. Peptidbindningen i proteiner är en kondensationsreaktion. Fettsyror i lipider följer samma namngivningsregler som i organisk kemi. DNA och RNA använder esterbindningar i sin stomme. Enzymers funktion illustrerar aktiveringsenergi och katalys. Fotosyntesen och cellandningen är redoxreaktioner som driver hela biosfären.</p>
` },
  { cat: 'Kemi & samhälle', icon: '🌍', html: `
<h2>🌍 Kemi och samhälle – miljö och hållbarhet</h2>
<p class="theory-intro">Kemi spelar en central roll i samhällets utmaningar: energiförsörjning, miljöproblem och hållbar utveckling. Att förstå de kemiska processerna bakom försurning, växthuseffekten och ozonnedbrytning är avgörande för att kunna fatta informerade beslut.</p>

<h3>1. Försurning och surt nedfall</h3>
<p>Förbränning av fossila bränslen frigör <strong>svaveldioxid (SO₂)</strong> och <strong>kväveoxider (NOₓ)</strong> som oxideras i atmosfären till svavelsyra (H₂SO₄) och salpetersyra (HNO₃). Dessa faller ner som <strong>surt nedfall</strong> (regn med pH &lt; 5,6) och skadar ekosystem, löser ut giftiga metallioner ur mark och skadar byggnader av kalksten.</p>
<p><strong>Motåtgärder:</strong> kalkning av sjöar (CaCO₃ neutraliserar), rökgasrening (tar bort SO₂), katalysatorer i bilar (omvandlar NOₓ → N₂).</p>

<h3>2. Växthuseffekten och klimatförändring</h3>
<p>Den <strong>naturliga växthuseffekten</strong> höjer jordens medeltemperatur med ca 33 °C (från −18 °C till +15 °C) genom att växthusgaser (CO₂, H₂O, CH₄, N₂O) absorberar IR-strålning från jordytan.</p>
<p>Den <strong>förstärkta växthuseffekten</strong> orsakas av ökade utsläpp av CO₂ (fossila bränslen), CH₄ (jordbruk, avfall) och N₂O (gödsel) → global uppvärmning.</p>

<h3>3. Ozonlagret</h3>
<p>Ozonlagret i stratosfären (15–35 km höjd) skyddar livet på jorden genom att absorbera skadlig UV-B-strålning. <strong>Klorfluorkarboner (CFC, freoner)</strong> – tidigare använda i kylmaskiner och sprayflaskor – bryter ner ozon katalytiskt:</p>
<p>Cl• + O₃ → ClO + O₂ (en kloratom kan förstöra tusentals ozonmolekyler). Montrealprotokollet (1987) fasade ut CFC-ämnen och ozonlagret håller på att återhämta sig.</p>

<h3>4. Hållbar kemi (grön kemi)</h3>
<p>Hållbar kemi syftar till att minimera kemins negativa miljöpåverkan genom bland annat:</p>
<ul>
  <li>Förebygga avfall snarare än att hantera det</li>
  <li>Använda förnyelsebara råvaror</li>
  <li>Designa nedbrytningsbara produkter</li>
  <li>Använda katalys istället för stökiometriska reagenser</li>
  <li>Minimera energiförbrukning</li>
</ul>
<p>Exempel: bioplast från stärkelse istället för oljebaserad plast, bioetanol som drivmedel, gröna lösningsmedel.</p>

<h3>5. Kemikaliesäkerhet och GHS</h3>
<p><strong>GHS</strong> (Globally Harmonized System) är ett internationellt system för klassificering och märkning av kemikalier. GHS-symbolerna (röda romber) varnar för specifika faror:</p>
<ul>
  <li>☠️ Akut toxicitet – dödsfara eller giftigt</li>
  <li>🔥 Brandfarligt – antänds lätt</li>
  <li>⚠️ Hälsofarligt – kan orsaka irritation eller allergier</li>
  <li>🧪 Frätande – kan skada hud, ögon eller metaller</li>
  <li>💀 Kronisk hälsofara – kan orsaka cancer, allergi eller organskada vid långvarig exponering</li>
  <li>🌊 Miljöfarligt – skadar vattenlevande organismer</li>
  <li>💥 Explosivt – risk för explosion</li>
  <li>⚗️ Oxiderande – avger syre och kan förvärra brand</li>
  <li>🫁 Gas under tryck – komprimerade gaser</li>
</ul>
<p><strong>Säkerhetsdatablad (SDB)</strong> innehåller fullständig information om varje kemikalies faror, skyddsåtgärder, förvaring och nödprocedurer.</p>

<h3>6. Sambandet</h3>
<p>Kemi och samhälle knyter ihop kemisk kunskap med verkliga utmaningar. Syra-baskemi förklarar försurning. Termokemi och redox förklarar energikällor och förbränning. Organisk kemi förklarar plast och biobränslen. Förståelsen av kemiska processer i samhället är central för att kunna bidra till en hållbar framtid.</p>
` }
];

let theoryIdx = 0;

function buildTheoryNav() {
  const nav = document.getElementById('theoryNav');
  nav.innerHTML = THEORY.map((t, i) =>
    `<button class="theory-nav-btn ${i===theoryIdx?'active':''}" data-idx="${i}">${t.icon} ${t.cat}</button>`
  ).join('');
  nav.querySelectorAll('.theory-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      theoryIdx = parseInt(btn.dataset.idx);
      renderTheory();
    });
  });
}


// ═══════════════════════════════════════════════════════
//  FORMULA SHEET
// ═══════════════════════════════════════════════════════

const FORMULAS_DATA = [
  { cat:'Mängd & massa', icon:'\u2696\ufe0f', items:[
    { name:'Molmassa', f:'M = m / n', v:'M=molmassa (g/mol), m=massa (g), n=substansmängd (mol)' },
    { name:'Substansmängd', f:'n = m / M', v:'n=mol, m=massa (g), M=molmassa (g/mol)' },
    { name:'Antal partiklar', f:'N = n \u00d7 N\u2090', v:'N\u2090 = 6,022 \u00d7 10\u00b2\u00b3 mol\u207b\u00b9 (Avogadros tal)' },
    { name:'Densitet', f:'\u03c1 = m / V', v:'\u03c1=densitet (g/cm\u00b3), m=massa (g), V=volym (cm\u00b3)' },
  ]},
  { cat:'Koncentration', icon:'\ud83e\uddea', items:[
    { name:'Molarkoncentration', f:'c = n / V', v:'c=konc. (mol/L), n=mol, V=volym (L)' },
    { name:'Substansmängd', f:'n = c \u00d7 V', v:'n=mol, c=konc. (mol/L), V=volym (L)' },
    { name:'Spädningslagen', f:'c\u2081V\u2081 = c\u2082V\u2082', v:'Koncentration \u00d7 volym är konstant vid spädning' },
    { name:'Massprocent', f:'w = m\u2097 / m_tot \u00d7 100%', v:'m\u2097=löst ämnets massa' },
  ]},
  { cat:'Gaslagar', icon:'\ud83d\udca8', items:[
    { name:'Ideala gaslagen', f:'pV = nRT', v:'p=tryck (Pa), V=volym (m\u00b3), n=mol, R=8,314 J/(mol\u00b7K), T=temp (K)' },
    { name:'Boyles lag', f:'p\u2081V\u2081 = p\u2082V\u2082', v:'Konstant temperatur (isoterm)' },
    { name:'Charles lag', f:'V\u2081/T\u2081 = V\u2082/T\u2082', v:'Konstant tryck (isobar)' },
    { name:'Gay-Lussacs lag', f:'p\u2081/T\u2081 = p\u2082/T\u2082', v:'Konstant volym (isokor)' },
    { name:'Kelvin \u2194 Celsius', f:'T(K) = T(\u00b0C) + 273,15', v:'Alltid Kelvin i gaslagarna' },
  ]},
  { cat:'Termodynamik', icon:'\ud83c\udf21\ufe0f', items:[
    { name:'Värmeenergi', f:'Q = mc\u0394T', v:'Q=energi (J), m=massa (g), c=spec. värmekapacitet (J/g\u00b7K), \u0394T=temp-förändring' },
    { name:'Hesss lag', f:'\u0394H\u00b0rxn = \u03a3\u0394H\u00b0f(prod) \u2212 \u03a3\u0394H\u00b0f(reak)', v:'Standardbildningsentalpier; element i standardtillstånd = 0' },
  ]},
  { cat:'Syra-bas', icon:'\u2697\ufe0f', items:[
    { name:'pH-definitionen', f:'pH = \u2212log[H\u207a]', v:'[H\u207a]=vätejonskoncentration (mol/L)' },
    { name:'pOH', f:'pOH = \u2212log[OH\u207b]', v:'pH + pOH = 14 (vid 25\u00b0C)' },
    { name:'Vattnets jonprodukt', f:'Kw = [H\u207a][OH\u207b] = 10\u207b\u00b9\u2074', v:'Vid 25\u00b0C; Kw = 1,0 \u00d7 10\u207b\u00b9\u2074 mol\u00b2/L\u00b2' },
    { name:'Syrakonstant Ka', f:'Ka = [H\u207a][A\u207b] / [HA]', v:'Ju större Ka, desto starkare syra' },
  ]},
  { cat:'Stökiometri', icon:'\ud83d\udd22', items:[
    { name:'Molförhållande', f:'n_A/a = n_B/b', v:'a, b = koefficienter i balanserad reaktion' },
    { name:'Procentuellt utbyte', f:'Utbyte = (faktisk/teoretisk) \u00d7 100%', v:'Teoretisk = beräknad från stökiometri' },
    { name:'Begränsande reagens', f:'n/koeff \u2192 minsta = begränsande', v:'Ämnet med lägst n/koefficient' },
    { name:'Empirisk formel', f:'Dividera mol med minsta mol-värde', v:'Ger heltalskvoter för enklaste formeln' },
  ]},
  { cat:'Elektrokemi', icon:'\u26a1', items:[
    { name:'Cellpotential', f:'E\u00b0cell = E\u00b0katod \u2212 E\u00b0anod', v:'E\u00b0cell > 0 \u2192 spontan reaktion (galvanisk cell)' },
  ]},
];

function initFormulas() {
  const nav = document.getElementById('formulaCatNav');
  const content = document.getElementById('formulaContent');
  if (!nav || !content || nav.children.length > 0) return;

  nav.innerHTML = FORMULAS_DATA.map((fd,i) =>
    `<button class="formula-cat-btn ${i===0?'active':''}" data-idx="${i}">${fd.icon} ${fd.cat}</button>`
  ).join('');

  renderFormulas(0);

  nav.querySelectorAll('.formula-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      nav.querySelectorAll('.formula-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFormulas(parseInt(btn.dataset.idx));
    });
  });
}

function renderFormulas(idx) {
  const content = document.getElementById('formulaContent');
  if (!content) return;
  const fd = FORMULAS_DATA[idx];
  content.innerHTML = fd.items.map(f => `
    <div class="formula-item">
      <div class="formula-name">${f.name}</div>
      <div class="formula-math">${f.f}</div>
      <div class="formula-vars">${f.v}</div>
    </div>`).join('');
}

const CLOZE_DATA = [
  {id:1,  cat:'syrabas', q:'En ___ är ett ämne som avger en proton (H⁺) till en protonacceptor.', a:'syra', hint:'Brønsted-Lowrys protondonator'},
  {id:2,  cat:'syrabas', q:'En ___ är ett ämne som tar emot en proton (H⁺) från en protondonator.', a:'bas', hint:'Brønsted-Lowrys protonacceptor'},
  {id:3,  cat:'syrabas', q:'Vatten kan fungera som både syra och bas – det är en ___.', a:'amfolyt', hint:'Amphi = båda sidor'},
  {id:4,  cat:'syrabas', q:'HCl, H₂SO₄ och HNO₃ är ___ syror som fullständigt dissocierar.', a:'starka', hint:'Hög dissociationsgrad – enriktad pil →'},
  {id:5,  cat:'syrabas', q:'CH₃COOH och HF är ___ syror – bara delvis protolyserade i jämvikt.', a:'svaga', hint:'Jämviktspil ⇌ används'},
  {id:6,  cat:'syrabas', q:'pH = −log[___]', a:'H₃O⁺', hint:'Oxoniumjonens koncentration'},
  {id:7,  cat:'syrabas', q:'pH + pOH = ___ (vid 25 °C)', a:'14', hint:'Summan av pH och pOH i vatten'},
  {id:8,  cat:'syrabas', q:'En sur lösning har pH ___ 7.', a:'under', hint:'Lägre pH = surare'},
  {id:9,  cat:'syrabas', q:'En basisk lösning har pH ___ 7.', a:'över', hint:'Högre pH = mer basiskt'},
  {id:10, cat:'syrabas', q:'Den hydratiserade protonen i vatten kallas ___.', a:'oxoniumjon', hint:'H₃O⁺ – proton + vattenmolekyl'},
  {id:11, cat:'syrabas', q:'OH⁻ kallas ___.', a:'hydroxidjon', hint:'Bildas vid basers protolys'},
  {id:12, cat:'syrabas', q:'Reaktion där H⁺ överförs från en syra till en bas kallas ___.', a:'protolys', hint:'Proton + lysis'},
  {id:13, cat:'syrabas', q:'CH₃COO⁻ är den ___ basen till CH₃COOH.', a:'korresponderande', hint:'Skiljer sig med ett H⁺'},
  {id:14, cat:'syrabas', q:'Vattnets autoprotolys: 2H₂O ⇌ H₃O⁺ + ___', a:'OH⁻', hint:'Hydroxidjon bildas'},
  {id:15, cat:'syrabas', q:'Kw = [H₃O⁺][OH⁻] = ___ vid 25 °C.', a:'1,0x10⁻¹⁴', hint:'Jämviktskonstant för vattnets autoprotolys'},
  {id:16, cat:'syrabas', q:'Titrering slutar vid ___ – exakt lika mol syra och bas har reagerat.', a:'ekvivalenspunkten', hint:'Ekvi = lika'},
  {id:17, cat:'syrabas', q:'Lösningen med okänd koncentration i en titrering kallas ___.', a:'titrand', hint:'Det som titreras'},
  {id:18, cat:'syrabas', q:'Lösningen med känd koncentration som tillsatts från byretten kallas ___.', a:'titrator', hint:'Det man tillsatter'},
  {id:19, cat:'syrabas', q:'Syra + bas → ___ + vatten (neutralisation).', a:'salt', hint:'Jonörening bildas'},
  {id:20, cat:'syrabas', q:'En ___ motstår pH-förändringar vid tillsats av syra eller bas.', a:'buffert', hint:'Svag syra + konjugerad bas'},
  {id:21, cat:'syrabas', q:'NH₄Cl är ett ___ salt (stark syra + svag bas).', a:'surt', hint:'pH < 7'},
  {id:22, cat:'syrabas', q:'CH₃COONa är ett ___ salt (svag syra + stark bas).', a:'basiskt', hint:'pH > 7'},
  {id:23, cat:'syrabas', q:'NaCl är ett ___ salt (stark syra + stark bas).', a:'neutralt', hint:'pH ≈ 7'},
  {id:24, cat:'syrabas', q:'En syra som avger ett proton per molekyl kallas ___.', a:'enprotonig', hint:'Mono = ett; t.ex. HCl, CH₃COOH'},
  {id:25, cat:'syrabas', q:'H₂SO₄ kan avge två protoner – det är en ___ syra.', a:'tvåprotonig', hint:'Di = två; kallas även diprotonisk'},
  {id:26, cat:'syrabas', q:'Andelen syra/bas-molekyler som pronolyserats kallas ___.', a:'protolysgrad', hint:'Bråkdel eller procent'},
  {id:27, cat:'syrabas', q:'Stark syra är ___ protolyserad – alla H⁺ avges.', a:'fullständigt', hint:'Enriktad pil, 100 %'},
  {id:28, cat:'syrabas', q:'Svag syra är ___ protolyserad – bara en del H⁺ avges.', a:'ofullständigt', hint:'Jämviktspil, < 100 %'},
  {id:29, cat:'syrabas', q:'Omslagsintervallet är det pH-intervall där en indikator ___.', a:'byter färg', hint:'Synlig förändring'},
  {id:30, cat:'syrabas', q:'SIV-regeln: S = syre balanseras med ___, I = väte med H⁺, V = laddning med elektroner.', a:'vatten', hint:'H₂O tillsatts'},
  {id:31, cat:'grundamnen', q:'Z=1: symbol H, svenska namn ___', a:'väte', hint:'Lättaste grundamnet'},
  {id:32, cat:'grundamnen', q:'Z=2: symbol He, svenska namn ___', a:'helium', hint:'Ädelgas i ballonger'},
  {id:33, cat:'grundamnen', q:'Z=3: symbol Li, svenska namn ___', a:'litium', hint:'Lättaste metallen'},
  {id:34, cat:'grundamnen', q:'Z=6: symbol C, svenska namn ___', a:'kol', hint:'Organisk kemi'},
  {id:35, cat:'grundamnen', q:'Z=7: symbol N, svenska namn ___', a:'kväve', hint:'78 % av luften'},
  {id:36, cat:'grundamnen', q:'Z=8: symbol O, svenska namn ___', a:'syre', hint:'Förbränning'},
  {id:37, cat:'grundamnen', q:'Z=11: symbol Na, svenska namn ___', a:'natrium', hint:'Latin: Natrium. Ingår i NaCl.'},
  {id:38, cat:'grundamnen', q:'Z=17: symbol Cl, svenska namn ___', a:'klor', hint:'Halogen, grön-gul gas'},
  {id:39, cat:'grundamnen', q:'Z=19: symbol K, svenska namn ___', a:'kalium', hint:'Latin: Kalium'},
  {id:40, cat:'grundamnen', q:'Z=20: symbol Ca, svenska namn ___', a:'kalcium', hint:'Kalksten och ben'},
  {id:41, cat:'grundamnen', q:'Symbol Fe, svenska namn ___', a:'järn', hint:'Latin: Ferrum. Stål.'},
  {id:42, cat:'grundamnen', q:'Symbol Cu, svenska namn ___', a:'koppar', hint:'Latin: Cuprum. Rödaktig metall.'},
  {id:43, cat:'grundamnen', q:'Symbol Au, svenska namn ___', a:'guld', hint:'Latin: Aurum.'},
  {id:44, cat:'grundamnen', q:'Symbol Ag, svenska namn ___', a:'silver', hint:'Latin: Argentum.'},
  {id:45, cat:'grundamnen', q:'Symbol Zn, svenska namn ___', a:'zink', hint:'Galvanisering av stål'},
  {id:46, cat:'grundamnen', q:'Symbol I, svenska namn ___', a:'jod', hint:'Halogen, fast vid rumstemperatur'},
  {id:47, cat:'grundamnen', q:'Symbol Br, svenska namn ___', a:'brom', hint:'Enda flytande icke-metallen vid 25 °C'},
  {id:48, cat:'grundamnen', q:'Symbol Mg (Z=12), svenska namn ___', a:'magnesium', hint:'Jordalkalimetall, period 3'},
  {id:49, cat:'grundamnen', q:'Symbol Al (Z=13), svenska namn ___', a:'aluminium', hint:'Vanligast bland metaller i jordskorpan'},
  {id:50, cat:'grundamnen', q:'Symbol Si (Z=14), svenska namn ___', a:'kisel', hint:'Halvledare, datorchip'},
  {id:51, cat:'syrorBaser', q:'HCl kallas ___ och är en stark syra.', a:'saltsyra', hint:'Finns i magsäcken'},
  {id:52, cat:'syrorBaser', q:'H₂SO₄ kallas ___ och är tvåprotonig.', a:'svavelsyra', hint:'Bilbatterier'},
  {id:53, cat:'syrorBaser', q:'HNO₃ kallas ___ och är stark syra + oxidant.', a:'salpetersyra', hint:'Stark oxidationsmedel'},
  {id:54, cat:'syrorBaser', q:'CH₃COOH kallas ___ (pKa ≈ 4,75).', a:'ättiksyra', hint:'Finns i vinäger'},
  {id:55, cat:'syrorBaser', q:'H₂CO₃ kallas ___ och bildas när CO₂ löser sig i vatten.', a:'kolsyra', hint:'Buffert i blodet'},
  {id:56, cat:'syrorBaser', q:'H₃PO₄ kallas ___ och är svag treprotonig.', a:'fosforsyra', hint:'Läskedrycker'},
  {id:57, cat:'syrorBaser', q:'NaOH kallas ___. Stark bas.', a:'natriumhydroxid', hint:'Kallas också lut'},
  {id:58, cat:'syrorBaser', q:'KOH kallas ___. Stark bas.', a:'kaliumhydroxid', hint:'Liknar NaOH'},
  {id:59, cat:'syrorBaser', q:'Ca(OH)₂ kallas ___ (eller kalkvatten).', a:'kalciumhydroxid', hint:'Stark men lite löslig'},
  {id:60, cat:'syrorBaser', q:'NH₃ kallas ___ och är en svag bas.', a:'ammoniak', hint:'Skarp lukt, gödningsmedel'},
  {id:61, cat:'bindning', q:'Bindning via elektronöverföring mellan metall och icke-metall kallas ___.', a:'jonbindning', hint:'Katjon + anjon'},
  {id:62, cat:'bindning', q:'Bindning där atomer delar elektroner kallas ___.', a:'kovalent bindning', hint:'Typisk mellan icke-metaller'},
  {id:63, cat:'bindning', q:'I metaller bildar valenselektronerna ett gemensamt ___.', a:'elektronhav', hint:'Förklarar elektrisk ledning'},
  {id:64, cat:'bindning', q:'H bundet till N, O eller F bildar ___ med grannmolekyler.', a:'vätebindningar', hint:'Starkaste intermolekylkraften'},
  {id:65, cat:'bindning', q:'VSEPR: 4 bindningspar + 0 fria par → ___ geometri (109,5°).', a:'tetraedisk', hint:'Som CH₄'},
  {id:66, cat:'bindning', q:'"Lika löser lika" – polära ämnen löser sig i ___ lösningsmedel.', a:'polära', hint:'Vatten är polärt'},
  {id:67, cat:'bindning', q:'Skillnad i EN > 1,7 ger vanligen ___ bindning.', a:'jonbindning', hint:'Stor skillnad → elektronerna överförs'},
  {id:68, cat:'bindning', q:'Van der Waals-krafter uppstår på grund av tillfälliga ___.', a:'dipoler', hint:'Gäller alla molekyler'},
,
  {id:101, cat:'redox', q:'En atom som förlorar elektroner sägs bli ___.', a:'oxiderad', hint:'OIL – Oxidation Is Loss'},
  {id:102, cat:'redox', q:'En atom som tar upp elektroner sägs bli ___.', a:'reducerad', hint:'RIG – Reduction Is Gain'},
  {id:103, cat:'redox', q:'Det ämne som avger elektroner kallas ___.', a:'reduktionsmedel', hint:'Det reducerar det andra ämnet'},
  {id:104, cat:'redox', q:'Det ämne som tar emot elektroner kallas ___.', a:'oxidationsmedel', hint:'Det oxiderar det andra ämnet'},
  {id:105, cat:'redox', q:'OIL RIG: Oxidation Is Loss, Reduction Is ___.', a:'Gain', hint:'Engelska minnesregeln för redox'},
  {id:106, cat:'redox', q:'Oxidationstalet för ett fritt grundämne (t.ex. Fe, O₂, Cl₂) är alltid ___.', a:'0', hint:'Regel 1 för oxidationstal'},
  {id:107, cat:'redox', q:'Oxidationstalet för O i de flesta föreningar är ___.', a:'−2', hint:'Undantag: peroxider (−1) och OF₂ (+2)'},
  {id:108, cat:'redox', q:'Oxidationstalet för H bundet till icke-metall är ___.', a:'+1', hint:'H₂O, HCl, NH₃ – H är +1'},
  {id:109, cat:'redox', q:'Oxidationstalet för F är alltid ___.', a:'−1', hint:'Mest elektronegativa grundämnet'},
  {id:110, cat:'redox', q:'Oxidationstalet för Na i NaCl är ___.', a:'+1', hint:'Alkalimetaller är alltid +1 i föreningar'},
  {id:111, cat:'redox', q:'Oxidationstalet för Mn i MnO₄⁻ är ___.', a:'+7', hint:'4×(−2) + Mn = −1 → Mn = +7'},
  {id:112, cat:'redox', q:'Oxidationstalet för Cr i Cr₂O₇²⁻ är ___.', a:'+6', hint:'2Cr + 7×(−2) = −2 → Cr = +6'},
  {id:113, cat:'redox', q:'Oxidationstalet för S i SO₄²⁻ är ___.', a:'+6', hint:'S + 4×(−2) = −2 → S = +6'},
  {id:114, cat:'redox', q:'Oxidationstalet för Fe i Fe₂O₃ är ___.', a:'+3', hint:'2Fe + 3×(−2) = 0 → Fe = +3'},
  {id:115, cat:'redox', q:'Zn + CuSO₄ → ZnSO₄ + Cu. Det ämne som oxideras är ___.', a:'Zn', hint:'Zn: 0 → +2, förlorar elektroner'},
  {id:116, cat:'redox', q:'Zn + CuSO₄ → ZnSO₄ + Cu. Det ämne som reduceras är ___.', a:'Cu²⁺', hint:'Cu: +2 → 0, tar upp elektroner'},
  {id:117, cat:'redox', q:'Reaktionshalva 2H⁺ + 2e⁻ → H₂ är en ___ halfreakton.', a:'reduktions-', hint:'e⁻ konsumeras = reduktion'},
  {id:118, cat:'redox', q:'Reaktionshalva Zn → Zn²⁺ + 2e⁻ är en ___ halfreakton.', a:'oxidations-', hint:'e⁻ produceras = oxidation'},
  {id:119, cat:'redox', q:'Vid balansering av redox i sur lösning balanseras O-atomer med ___.', a:'H₂O', hint:'Steg 3 i halfreaktionsmetoden'},
  {id:120, cat:'redox', q:'Vid balansering av redox i sur lösning balanseras H-atomer med ___.', a:'H⁺', hint:'Steg 4 i halfreaktionsmetoden'},
  {id:121, cat:'redox', q:'Korrosion av järn är en ___ reaktion.', a:'redoxreaktion', hint:'Fe oxideras, O₂ reduceras'},
  {id:122, cat:'redox', q:'I ett galvaniskt element sker oxidation vid ___.', a:'anoden', hint:'Anod = oxidation (minnesregel: Anod = A = Avger e⁻)'},
  {id:123, cat:'redox', q:'I ett galvaniskt element sker reduktion vid ___.', a:'katoden', hint:'Katod = reduktion'},
  {id:124, cat:'redox', q:'Zink är ___ aktiv än koppar i aktivitetsserien.', a:'mer', hint:'Zn förtränger Cu ur lösning'},
  {id:125, cat:'redox', q:'Om ett ämne inte ändrar oxidationstal i en reaktion är det ___.', a:'varken oxiderat eller reducerat', hint:'Inte redoxreaktion för det ämnet'},
  {id:126, cat:'stoikiometri', q:'n = m / M; n betecknar ___.', a:'substansmängd (mol)', hint:'SI-enhet för antal partiklar'},
  {id:127, cat:'stoikiometri', q:'M betecknar ___ och har enheten g/mol.', a:'molmassa', hint:'Summan av atommassorna'},
  {id:128, cat:'stoikiometri', q:'Avogadros tal Nₐ = ___ mol⁻¹.', a:'6,022×10²³', hint:'Antal partiklar i 1 mol'},
  {id:129, cat:'stoikiometri', q:'Molmassan för H₂O är ___ g/mol.', a:'18', hint:'2×1 + 16 = 18'},
  {id:130, cat:'stoikiometri', q:'Molmassan för NaCl är ___ g/mol.', a:'58,5', hint:'23 + 35,5 = 58,5'},
  {id:131, cat:'stoikiometri', q:'Molmassan för CO₂ är ___ g/mol.', a:'44', hint:'12 + 2×16 = 44'},
  {id:132, cat:'stoikiometri', q:'Molmassan för CaCO₃ är ___ g/mol.', a:'100', hint:'40 + 12 + 3×16 = 100'},
  {id:133, cat:'stoikiometri', q:'Vid STP upptar 1 mol idealgas ___ L.', a:'22,4', hint:'Standard Temperature and Pressure: 0°C, 101,3 kPa'},
  {id:134, cat:'stoikiometri', q:'Det reagens som tar slut först och begränsar produktmängden kallas ___.', a:'begränsande reagens', hint:'Limiting reagent'},
  {id:135, cat:'stoikiometri', q:'Procentuellt utbyte = (faktisk massa / ___ massa) × 100%.', a:'teoretisk', hint:'Den maximalt möjliga mängden produkt'},
  {id:136, cat:'stoikiometri', q:'Empirisk formel anger grundämnenas ___ förhållanden.', a:'enklaste heltal-', hint:'CH₂O är empirisk formel för glukos'},
  {id:137, cat:'stoikiometri', q:'Massabevarandelagen: massa ___ i en kemisk reaktion.', a:'bevaras', hint:'Atomer skapas inte eller förstörs'},
  {id:138, cat:'stoikiometri', q:'Koefficienter i en balanserad reaktion anger molförhållanden, inte ___.', a:'massförhållanden', hint:'2H₂ + O₂ → 2H₂O ger 2:1:2 i mol'},
  {id:139, cat:'stoikiometri', q:'n(H₂O) = 90 g / 18 g/mol = ___ mol.', a:'5,0', hint:'n = m/M'},
  {id:140, cat:'stoikiometri', q:'Antal molekyler i 0,5 mol vatten = ___.', a:'3,011×10²³', hint:'0,5 × 6,022×10²³'},
  {id:141, cat:'stoikiometri', q:'För att bestämma molekylformel från empirisk formel behöver man ___.', a:'molmassan', hint:'n = M_molekyl / M_empirisk'},
  {id:142, cat:'stoikiometri', q:'Procentuell sammansättning: %X = (n_X × M_X / M_förening) × ___.', a:'100', hint:'Ger massandel i procent'},
  {id:143, cat:'stoikiometri', q:'Stökets grundformel för lösningar: n = c × ___.', a:'V', hint:'c i mol/L, V i L'},
  {id:144, cat:'stoikiometri', q:'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Koefficienten för O₂ är ___.', a:'5', hint:'Balansera syre sist'},
  {id:145, cat:'stoikiometri', q:'88 g CO₂ (M=44) motsvarar ___ mol.', a:'2,0', hint:'n = 88/44'},
  {id:146, cat:'gaslagar', q:'Ideala gaslagen: pV = ___.', a:'nRT', hint:'p i Pa, V i m³, T i Kelvin'},
  {id:147, cat:'gaslagar', q:'Gaskonstanten R = ___ J/(mol·K).', a:'8,314', hint:'Ingår i pV = nRT'},
  {id:148, cat:'gaslagar', q:'Boyles lag: vid konstant T gäller p₁V₁ = ___.', a:'p₂V₂', hint:'Tryck och volym är omvänt proportionella'},
  {id:149, cat:'gaslagar', q:'Charles lag: vid konstant p gäller V₁/T₁ = ___.', a:'V₂/T₂', hint:'Volym och temperatur proportionella'},
  {id:150, cat:'gaslagar', q:'Absolut nollpunkt är ___ °C.', a:'−273,15', hint:'0 K – all rörelseenergi upphör'},
  {id:151, cat:'gaslagar', q:'T(K) = T(°C) + ___.', a:'273,15', hint:'Konvertering Celsius till Kelvin'},
  {id:152, cat:'gaslagar', q:'Daltons lag: totalt gastryck = summan av ___.', a:'partialtrycken', hint:'pₜₒₜ = p₁ + p₂ + p₃ + ...'},
  {id:153, cat:'gaslagar', q:'STP (Standard Temperature and Pressure): T = ___ °C, p = 101,3 kPa.', a:'0', hint:'Molär volym = 22,4 L vid STP'},
  {id:154, cat:'gaslagar', q:'SATP (Standard Ambient T & P): T = ___ °C, p = 100 kPa.', a:'25', hint:'Molär volym = 24,5 L vid SATP'},
  {id:155, cat:'gaslagar', q:'Vid ökad temperatur ökar gastrycket (konstant V) eftersom partiklarna rör sig ___.', a:'snabbare', hint:'Kinetisk energi ∝ T'},
  {id:156, cat:'gaslagar', q:'Enhet för tryck i SI-systemet är ___.', a:'Pascal (Pa)', hint:'1 atm ≈ 101 325 Pa ≈ 101,3 kPa'},
  {id:157, cat:'gaslagar', q:'Gay-Lussacs lag: vid konstant V är p/T = konstant. Fördubblas T (K) ___ p.', a:'fördubblas', hint:'Direkt proportionalitet'},
  {id:158, cat:'gaslagar', q:'2,0 mol idealgas vid 25°C och 100 kPa: V = nRT/p = 2,0 × 8,314 × 298 / 100000 ≈ ___ L.', a:'49,6', hint:'V i m³, sedan ×1000 för L'},
  {id:159, cat:'gaslagar', q:'En idealgas antas att partiklar inte har ___ och inte utövar krafter på varandra.', a:'volym', hint:'Verkliga gaser avviker vid högt p eller låg T'},
  {id:160, cat:'gaslagar', q:'Avogadros lag: vid samma T och p innehåller lika stora gasvolymer ___ antal molekyler.', a:'lika', hint:'Grunden för 22,4 L/mol vid STP'},
  {id:161, cat:'jamvikt', q:'Le Chateliers princip: vid en störning förskjuts jämvikten för att ___ störningen.', a:'motverka', hint:'Systemet "kämpar tillbaka"'},
  {id:162, cat:'jamvikt', q:'Jämviktskonstanten Kc uttrycks med ___ i täljaren.', a:'produkternas koncentrationer', hint:'K = [P]^p/[R]^r'},
  {id:163, cat:'jamvikt', q:'K > 1 innebär att jämvikten ligger på ___ sidan.', a:'produkt-', hint:'Fler produkter än reaktanter vid jämvikt'},
  {id:164, cat:'jamvikt', q:'K < 1 innebär att jämvikten ligger på ___ sidan.', a:'reaktant-', hint:'Mest reaktanter vid jämvikt'},
  {id:165, cat:'jamvikt', q:'Om koncentrationen av en produkt ökar förskjuts jämvikten mot ___.', a:'reaktanterna (vänster)', hint:'Systemet motverkar ökningen'},
  {id:166, cat:'jamvikt', q:'Ökad temperatur gynnar den ___ reaktionen.', a:'endoterma', hint:'Tillförd värme "konsumeras" av endotermen'},
  {id:167, cat:'jamvikt', q:'Ökad temperatur ökar K för en endoterm reaktion och ___ K för en exoterm.', a:'minskar', hint:'K beror på temperatur'},
  {id:168, cat:'jamvikt', q:'Haber-Bosch: N₂ + 3H₂ ⇌ 2NH₃. Ökat tryck gynnar ___ (färre gasmolekyler).', a:'produkterna (NH₃)', hint:'4 mol gas → 2 mol gas'},
  {id:169, cat:'jamvikt', q:'En katalysator ändrar jämviktsläget ___.', a:'inte', hint:'Katalysator sänker Ea men påverkar inte K'},
  {id:170, cat:'jamvikt', q:'Reaktionskvoten Q jämförs med K: om Q < K förskjuts reaktionen mot ___.', a:'produkterna', hint:'Reaktionen "springer ikapp" K'},
  {id:172, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃. Kc = [NH₃]² / ([N₂] × ___)³.', a:'[H₂]', hint:'Produkter i täljare, reaktanter i nämnare'},
  {id:173, cat:'jamvikt', q:'Vid jämvikt är reaktionshastigheten för fram- och bakreaktion ___.', a:'lika', hint:'Dynamisk jämvikt – reaktionerna pågår'},
  {id:174, cat:'jamvikt', q:'Tillsats av inergas (t.ex. Ar) vid konstant V ändrar jämviktsläge ___.', a:'inte', hint:'Partialtrycken ändras inte'},
  {id:175, cat:'jamvikt', q:'För gasjämvikter används Kp som uttrycks med ___ istället för koncentrationer.', a:'partialtryck', hint:'Kp = Kc×(RT)^Δn för ideala gaser'},
  {id:176, cat:'termokemi', q:'En reaktion som avger värme till omgivningen kallas ___.', a:'exoterm', hint:'ΔH < 0; temperaturen stiger'},
  {id:177, cat:'termokemi', q:'En reaktion som tar upp värme från omgivningen kallas ___.', a:'endoterm', hint:'ΔH > 0; temperaturen sjunker'},
  {id:178, cat:'termokemi', q:'q = mcΔT; den specifika värmekapaciteten för vatten är ___ J/(g·K).', a:'4,18', hint:'Vatten tar upp mycket värme'},
  {id:179, cat:'termokemi', q:'Standardbildningsentalpin för ett fritt grundämne (H₂, Fe, C) är ___ kJ/mol.', a:'0', hint:'Referenspunkt för ΔH°f-tabeller'},
  {id:180, cat:'termokemi', q:'Hess lag: ΔH beror bara på start- och ___, inte på reaktionsvägen.', a:'slutläge', hint:'Entalpi är en tillståndsfunktion'},
  {id:181, cat:'termokemi', q:'ΔH°rxn = Σ ΔH°f(produkter) − Σ ΔH°f(___).', a:'reaktanter', hint:'Hess lag via bildningsentalpier'},
  {id:183, cat:'termokemi', q:'Entropi S är ett mått på systemets ___.', a:'oordning (eller energispridning)', hint:'Andra termodynamikens lag'},
  {id:185, cat:'termokemi', q:'Aktiveringsenergi Ea är den ___ energi molekylerna måste ha för att reagera.', a:'lägsta/minsta', hint:'Tröskeln i energiprofilen'},
  {id:186, cat:'termokemi', q:'En katalysator sänker ___ utan att ändra ΔH.', a:'aktiveringsenergin', hint:'Reaktionen går snabbare men ΔH oförändrat'},
  {id:187, cat:'termokemi', q:'Avdunstning är ___ (tar upp/avger värme).', a:'tar upp värme (endoterm)', hint:'ΔH_vap > 0; kräver energi att bryta intermolekylkrafter'},
  {id:188, cat:'termokemi', q:'Kondensation är ___ (ΔH < 0).', a:'exoterm', hint:'Värme avges när gas → vätska'},
  {id:189, cat:'termokemi', q:'Kalorimeterns formel: ΔH_rxn = −q_kalorimeter / ___.', a:'n (mol reaktant)', hint:'Molar entalpi i kJ/mol'},
  {id:190, cat:'termokemi', q:'Neutralisering av stark syra med stark bas ger ΔH ≈ ___ kJ/mol.', a:'−57', hint:'H⁺ + OH⁻ → H₂O, ΔH ≈ −57,3 kJ/mol'},
  {id:191, cat:'organisk', q:'Alkaner har formeln CₙH₂ₙ₊₂ och kallas ___ kolväten (inga fler H kan adderas).', a:'mättade', hint:'Endast enkelbindningar'},
  {id:192, cat:'organisk', q:'Alkener har minst en ___ bindning (C=C).', a:'dubbel-', hint:'CₙH₂ₙ – π-bindning reaktiv'},
  {id:193, cat:'organisk', q:'Alkyner har minst en ___ bindning (C≡C).', a:'trippel-', hint:'CₙH₂ₙ₋₂; acetylen = etyn'},
  {id:194, cat:'organisk', q:'Bensen C₆H₆ är ett ___ kolväte med delokaliserade π-elektroner.', a:'aromatiskt', hint:'EAS-reaktioner, ej addition'},
  {id:195, cat:'organisk', q:'Funktionell grupp −OH i organisk kemi kallas ___ grupp.', a:'hydroxyl-', hint:'Alkoholer har −OH'},
  {id:196, cat:'organisk', q:'Funktionell grupp −COOH kallas ___ grupp.', a:'karboxyl-', hint:'Karboxylsyror; svaga syror'},
  {id:197, cat:'organisk', q:'Alkohol + karboxylsyra → ___ + vatten.', a:'ester', hint:'Esterifiering; fruktig doft'},
  {id:198, cat:'organisk', q:'Omvändningen av esterifiering (ester + vatten → syra + alkohol) kallas ___.', a:'hydrolys', hint:'Med syra; med bas kallas förs&aring;pning'},
  {id:199, cat:'organisk', q:'Cis/trans-isomeri uppstår p.g.a. begränsad rotation kring ___ bindningen.', a:'dubbel-/C=C-', hint:'π-bindningen hindrar rotation'},
  {id:200, cat:'organisk', q:'Molekyler som är varandras spegelbilder men ej överstallbara kallas ___.', a:'enantiomerer', hint:'Kiralitet; viktig i läkemedelskemi'},
  {id:201, cat:'organisk', q:'Primär alkohol oxideras med K₂Cr₂O₇ först till ___, sedan till karboxylsyra.', a:'aldehyd', hint:'R-CH₂OH → R-CHO → R-COOH'},
  {id:202, cat:'organisk', q:'Sekundär alkohol oxideras till ___.', a:'keton', hint:'R₂CHOH → R₂C=O'},
  {id:203, cat:'organisk', q:'Alkaner reagerar med halogener (t.ex. Cl₂) via ___ reaktion (UV-ljus).', a:'radikal substitution', hint:'H ersätts av halogen'},
  {id:204, cat:'organisk', q:'Etanol har kokpunkt 78°C pga ___ bindningar.', a:'vätebindningar', hint:'OH-gruppen bildar H-bindningar'},
  {id:205, cat:'organisk', q:'IUPAC-namn på CH₃-CH₂-OH är ___.', a:'etanol', hint:'2 kol + -ol suffix'},
  {id:206, cat:'organisk', q:'IUPAC-namn på CH₃-CO-CH₃ (aceton) är ___.', a:'propanon', hint:'3 kol + keton (-on)'},
  {id:207, cat:'organisk', q:'Polymeren som bildas av etenmonomerer kallas ___.', a:'polyeten (PE)', hint:'Additionspolymer'},
  {id:208, cat:'organisk', q:'Fetter är estrar av glycerol och ___.', a:'fettsyror', hint:'Hydrolys ger glycerol + fettsyror'},
  {id:209, cat:'losningar', q:'Molär koncentration: c = n / ___.', a:'V', hint:'V i liter; enheten mol/L'},
  {id:210, cat:'losningar', q:'Spädningsekvationen: c₁V₁ = ___.', a:'c₂V₂', hint:'Molmängden är bevarad vid spädning'},
  {id:211, cat:'losningar', q:'"Lika löser lika" – NaCl (polärt/jonbindning) löser sig i ___.', a:'vatten (polart lösningsmedel)', hint:'Vatten hydratiserar jonerna'},
  {id:217, cat:'losningar', q:'1 ppm i vattenlösning ≈ ___ mg/L.', a:'1', hint:'Parts per million'},
  {id:218, cat:'losningar', q:'Fryspunktssänkning: ΔTf = Kf × m; Kf(vatten) = ___ °C·kg/mol.', a:'1,86', hint:'Används för antifrysmedel'},
  {id:219, cat:'losningar', q:'Kokpunktshöjning: ΔTb = Kb × m; Kb(vatten) = ___ °C·kg/mol.', a:'0,512', hint:'Saltat vatten kokar vid lite högre T'},
  {id:220, cat:'losningar', q:'SAV-regeln: häll alltid ___ i vattnet, aldrig vatten i stark syra.', a:'syran', hint:'Undviker stänkrisken (starkexoterm)'},
  {id:221, cat:'losningar', q:'Bereda 500 mL 0,10 mol/L HCl från 12 mol/L: V₁ = 0,10×0,500/12 = ___ mL.', a:'4,2', hint:'c₁V₁ = c₂V₂ → V₁ = c₂V₂/c₁'},
  {id:222, cat:'losningar', q:'Osmotiskt tryck π = MRT; blodsplasmans osmolaritet ≈ 0,30 mol/L → π ≈ ___ atm.', a:'7,3', hint:'π = 0,30 × 0,0821 × 310 ≈ 7,6 atm'},
  {id:223, cat:'labsak', q:'GHS-piktogrammet dödskalle indikerar ___.', a:'akut toxicitet (hög)', hint:'HCN, arsenik – livsfarligt'},
  {id:224, cat:'labsak', q:'GHS-piktogrammet med frätande vätska indikerar ___.', a:'frätande (korrosivt)', hint:'H₂SO₄, NaOH – fräter hud och material'},
  {id:225, cat:'labsak', q:'Skyddsglasögon är ___ vid alla laborationsmoment med kemikalier.', a:'obligatoriska', hint:'Ögon kan inte regenereras lika lätt som hud'},
  {id:226, cat:'labsak', q:'Vid stänk av frätande ämne i ögat: skölj omedelbart i ___ minuter.', a:'15', hint:'Lång sköljning minskar skadan drastiskt'},
  {id:227, cat:'labsak', q:'Analytisk våg har noggrannhet ±___ g.', a:'0,0001', hint:'4 decimaler; används för exakt inväging'},
  {id:228, cat:'labsak', q:'Byrettens avläsningsnoggrannhet är ±___ mL.', a:'0,05', hint:'Avläs med 0,01 mL-precision, fel ±0,05'},
  {id:229, cat:'labsak', q:'Menisken i byrett/mätkolv avläses vid ___ nivån.', a:'nedre (konkava)', hint:'I ögonhöjd för att undvika paralaxfel'},
  {id:230, cat:'labsak', q:'Rf-värdet i TLC = (avstånd substansen vandrat) / ___.', a:'avstånd lösningsfronten vandrat', hint:'Rf mellan 0 och 1'},
  {id:231, cat:'labsak', q:'Systematiska fel påverkar alla mätningar i ___ riktning.', a:'samma', hint:'T.ex. felkalibrerad våg – alltid för hög/låg'},
  {id:232, cat:'labsak', q:'Slumpmässiga fel minskas effektivast genom ___.', a:'upprepade mätningar', hint:'Medelvärde och standardavvikelse'},
  {id:233, cat:'labsak', q:'All hantering av flyktiga/giftiga kemikalier sker i ___.', a:'dragskåp (frånluftskåpa)', hint:'Frånluften skyddar mot inandning'},
  {id:234, cat:'labsak', q:'Titreringens syfte är att bestämma ___ hos en okänd lösning.', a:'koncentrationen', hint:'Via ekvivalenspunkten och känd titrant'},
  {id:235, cat:'labsak', q:'Gravimetrisk analys bestämmer mängden via ___.', a:'vägning', hint:'T.ex. fällning + filtrering + torkning + vägning'},
  {id:236, cat:'labsak', q:'En labrapports diskussionsdel ska innehålla tolkning av resultat och analys av ___.', a:'felkällor', hint:'Varför avviker resultaten från teorin?'},
  {id:237, cat:'prov', q:'Varför är natriumklorid (NaCl) hårt men sprött? – Gittret spricker när lika laddade joner hamnar bredvid varandra vid ___.', a:'förskjutning', hint:'Katjon bredvid katjon → repulsion → spricka'},
  {id:238, cat:'prov', q:'Varför leder NaCl el i smält form men inte i fast form? – I smält form är jonerna ___.', a:'rörliga/fria', hint:'Fast gitter låser jonerna'},
  {id:239, cat:'prov', q:'Varför är vattnets kokpunkt (100°C) så mycket högre än H₂S (−60°C)? – Tack vare ___ i vatten.', a:'vätebindningar', hint:'O är tillräckligt elektronegativt; S inte'},
  {id:240, cat:'prov', q:'CO₂ har polära C=O-bindningar men är en opolar molekyl. Orsak: molekylens geometri är ___.', a:'linjär', hint:'Dipolerna tar ut varandra i linjär geometri'},
  {id:241, cat:'prov', q:'H₂O är polärt trots att det liknar CO₂. Orsak: H₂O har ___ geometri.', a:'vinkelformad', hint:'104,5° – dipolerna adderas'},
  {id:242, cat:'prov', q:'Varför sjunker is i de flesta vätskor men flyter i vatten? – Isen är ___ tätt packad pga vätebindningarnas hexagonala struktur.', a:'mindre', hint:'Is har lägre densitet än flytande vatten'},
  {id:243, cat:'prov', q:'pH i 0,010 mol/L HCl-lösning är ___ (stark syra, fullständigt dissocierad).', a:'2', hint:'pH = −log(0,010) = −log(10⁻²) = 2'},
  {id:244, cat:'prov', q:'pH i 0,0010 mol/L NaOH är ___. (pOH = 3, pH = 14 − 3 = ___)', a:'11', hint:'[OH⁻] = 0,001 → pOH = 3 → pH = 11'},
  {id:246, cat:'prov', q:'Vid titrering av svag syra med stark bas är pH vid ekvivalenspunkten ___ 7.', a:'över', hint:'Salt av svag syra + stark bas hydrolyserar basiskt'},
  {id:247, cat:'prov', q:'Haber-Bosch körs vid ~450°C trots att lägre T ger bättre utbyte. Orsaken är att lägre T ger för låg ___.', a:'reaktionshastighet', hint:'Kinetik vs termodynamik – kompromiss'},
  {id:248, cat:'prov', q:'Bensen genomgår substitution (EAS), inte addition. Orsaken: addition skulle bryta den ___ stabiliteten.', a:'aromatiska', hint:'150 kJ/mol extra stabilitet'},
  {id:249, cat:'prov', q:'Varför ökar kokpunkten med kolkedjans längd hos alkaner? – Starkare ___ krafter vid större molmassa.', a:'London-dispersions-', hint:'Fler elektroner = lättare att polarisera'},
  {id:251, cat:'prov', q:'Zink skyddar järn i galvanisering pga att Zn är mer ___ än Fe.', a:'reaktivt/aktivt', hint:'Zn oxideras preferentiellt – offermetall'},
  {id:252, cat:'prov', q:'Varför ger 1 mol NaCl dubbelt så stor fryspunktssänkning som 1 mol glukos? – NaCl dissocierar till ___ partiklar.', a:'2', hint:'Na⁺ + Cl⁻ = 2 partiklar per formelenhet'},
  {id:253, cat:'prov', q:'Ke för H₂O(l) ⇌ H⁺(aq) + OH⁻(aq) kallas Kw = ___ vid 25°C.', a:'1,0×10⁻¹⁴', hint:'pH + pOH = 14 följer av detta'},
  {id:254, cat:'prov', q:'En svag syra med Ka = 1,0×10⁻⁵ har pKa = ___.', a:'5', hint:'pKa = −log(Ka)'},
  {id:255, cat:'prov', q:'Alkohol + syra ⇌ ester + vatten. För att driva reaktionen framåt kan man ta bort ___.', a:'vatten (eller estern)', hint:'Le Chatelier – ta bort produkt'},
  {id:256, cat:'prov', q:'Den empiriska formeln för glukos C₆H₁₂O₆ är ___.', a:'CH₂O', hint:'Dela alla index med 6'},
  {id:257, cat:'prov', q:'Reaktionen Fe + 2HCl → FeCl₂ + H₂. Oxidationstalet för Fe ändras från 0 till ___.', a:'+2', hint:'Fe → Fe²⁺: oxidation'},
  {id:258, cat:'prov', q:'Varför kan inte aluminiumfolie lösas upp av utspädd saltsyra men väl av NaOH? – Al₂O₃-skiktet löses i ___ men skyddas av HCl.', a:'bas (NaOH)', hint:'Al är amfoteriskt – löses i starka baser'},
  {id:259, cat:'prov', q:'Beräkna massa Fe₂O₃ som bildas av 2,0 mol Fe: 4Fe + 3O₂ → 2Fe₂O₃. n(Fe₂O₃) = 2,0×(2/4) = ___ mol.', a:'1,0', hint:'Koefficienter ger molförhållande 4:2 = 2:1'},
  {id:260, cat:'prov', q:'Vad händer med jämvikten N₂ + 3H₂ ⇌ 2NH₃ om volymen halveras? – Jämvikten förskjuts mot ___ (färre gasmolekyler).', a:'NH₃ (produkterna/höger)', hint:'Halverad volym = dubblat tryck → Le Chatelier'}
,
  {id:301, cat:'stoikiometri', q:'Formeln för substansmängd: n = ___ / M.', a:'m', hint:'n i mol, m i gram, M i g/mol'},
  {id:302, cat:'stoikiometri', q:'1 mol av vilket ämne som helst innehåller ___ partiklar.', a:'6,022×10²³', hint:'Avogadros tal – alltid samma antal'},
  {id:303, cat:'stoikiometri', q:'Molmassan för Al är ___ g/mol.', a:'27', hint:'Atomnummer 13, period 3'},
  {id:304, cat:'stoikiometri', q:'Molmassan för Fe är ___ g/mol.', a:'56', hint:'Järn – vanligast i jordskorpan'},
  {id:305, cat:'stoikiometri', q:'Molmassan för Cu är ___ g/mol.', a:'63,5', hint:'Koppar – elektrisk ledare'},
  {id:306, cat:'stoikiometri', q:'Molmassan för H₂SO₄ är ___ g/mol.', a:'98', hint:'2+32+64 = 98'},
  {id:307, cat:'stoikiometri', q:'Molmassan för Ca(OH)₂ är ___ g/mol.', a:'74', hint:'40 + 2×(16+1) = 74'},
  {id:308, cat:'stoikiometri', q:'Molmassan för KMnO₄ är ___ g/mol.', a:'158', hint:'39+55+4×16 = 158'},
  {id:309, cat:'stoikiometri', q:'Molmassan för C₆H₁₂O₆ (glukos) är ___ g/mol.', a:'180', hint:'6×12 + 12×1 + 6×16 = 180'},
  {id:310, cat:'stoikiometri', q:'n(Fe) = 112 g / 56 g/mol = ___ mol.', a:'2,0', hint:'n = m/M'},
  {id:311, cat:'stoikiometri', q:'m(NaOH) om n = 0,50 mol: m = 0,50 × ___ = 20 g.', a:'40', hint:'M(NaOH) = 23+16+1 = 40 g/mol'},
  {id:312, cat:'stoikiometri', q:'Antal molekyler i 2,0 mol CO₂ = 2,0 × 6,022×10²³ = ___.', a:'1,204×10²⁴', hint:'N = n × Nₐ'},
  {id:313, cat:'stoikiometri', q:'Reaktionen 2H₂ + O₂ → 2H₂O: koefficienten för H₂ är ___.', a:'2', hint:'Balansera väte och syre'},
  {id:314, cat:'stoikiometri', q:'2H₂ + O₂ → 2H₂O: för varje mol O₂ bildas ___ mol H₂O.', a:'2', hint:'Molförhållande 1:2'},
  {id:315, cat:'stoikiometri', q:'Procentuell sammansättning av Fe i Fe₂O₃: (2×56/160)×100 = ___ %.', a:'70', hint:'M(Fe₂O₃) = 2×56 + 3×16 = 160'},
  {id:316, cat:'stoikiometri', q:'Procentuell sammansättning av N i NH₃: (14/17)×100 ≈ ___ %.', a:'82', hint:'M(NH₃) = 14+3 = 17'},
  {id:317, cat:'stoikiometri', q:'Empirisk formel: 40%C, 6,7%H, 53,3%O → n(C)=3,33, n(H)=6,7, n(O)=3,33. Kvot C:H:O = ___.', a:'1:2:1', hint:'Dela med minsta: 3,33/3,33=1, 6,7/3,33≈2'},
  {id:318, cat:'stoikiometri', q:'En förening har empirisk formel CH₂O och molmassa 180 g/mol. Molekylformel = ___.', a:'C₆H₁₂O₆', hint:'180/30 = 6 → multiplicera empirisk formel med 6'},
  {id:319, cat:'stoikiometri', q:'STP: 1 mol gas = 22,4 L. Volym av 0,25 mol N₂ vid STP = ___ L.', a:'5,6', hint:'V = n × 22,4'},
  {id:320, cat:'stoikiometri', q:'n(CO₂) om V = 11,2 L vid STP: n = 11,2/22,4 = ___ mol.', a:'0,50', hint:'n = V/22,4'},
  {id:321, cat:'stoikiometri', q:'4Fe + 3O₂ → 2Fe₂O₃. Från 4,0 mol Fe bildas ___ mol Fe₂O₃.', a:'2,0', hint:'Koefficienter 4:2 → halvera antalet mol'},
  {id:322, cat:'stoikiometri', q:'4Fe + 3O₂ → 2Fe₂O₃. Massa Fe₂O₃ från 4,0 mol Fe: n=2,0 mol × 160 g/mol = ___ g.', a:'320', hint:'m = n × M(Fe₂O₃)'},
  {id:323, cat:'stoikiometri', q:'Begränsande reagens: 3,0 mol H₂ + 1,0 mol N₂ → NH₃. H₂ ger 2,0 mol NH₃, N₂ ger 2,0 mol NH₃. Inget begränsar – exakt ___:___ förhållande.', a:'3:1', hint:'N₂+3H₂→2NH₃ kräver 3:1-förhållande'},
  {id:324, cat:'stoikiometri', q:'Begränsande reagens: 2,0 mol H₂ + 2,0 mol O₂ → H₂O (2H₂+O₂→2H₂O). H₂/2=1,0; O₂/1=2,0. Begränsande reagens: ___.', a:'H₂', hint:'Lägst kvot mol/koefficient → begränsar'},
  {id:325, cat:'stoikiometri', q:'Teoretiskt utbyte: 5,0 mol begränsat reagens ger max ___ mol produkt (1:1-förhållande).', a:'5,0', hint:'Koefficienter 1:1'},
  {id:326, cat:'stoikiometri', q:'Verkligt utbyte 32 g, teoretiskt 40 g. Procentuellt utbyte = ___ %.', a:'80', hint:'32/40 × 100 = 80'},
  {id:327, cat:'stoikiometri', q:'Titrering: c(HCl)×V(HCl) = c(NaOH)×V(NaOH). c(NaOH) = 0,100×20,0/25,0 = ___ mol/L.', a:'0,080', hint:'c₁V₁ = c₂V₂ vid 1:1-reaktion'},
  {id:328, cat:'stoikiometri', q:'n(HCl) om c=0,200 mol/L, V=50,0 mL: n = 0,200 × 0,0500 = ___ mol.', a:'0,0100', hint:'n = c×V (V i liter!)'},
  {id:329, cat:'stoikiometri', q:'Massa H₂O som bildas av 4,0 g H₂ (M=2): n(H₂)=2,0 mol → n(H₂O)=2,0 mol → m = 2,0×18 = ___ g.', a:'36', hint:'2H₂ + O₂ → 2H₂O, 1:1-förhållande H₂:H₂O'},
  {id:330, cat:'stoikiometri', q:'Massabevarandelagen innebär att summan av reaktanternas massor ___ summan av produkternas massor.', a:'är lika med', hint:'Atomer varken skapas eller förstörs'},
  {id:331, cat:'stoikiometri', q:'Reaktionen CaCO₃ → CaO + CO₂. Massa CO₂ från 50 g CaCO₃ (M=100): n=0,50 mol → m(CO₂) = 0,50×44 = ___ g.', a:'22', hint:'1:1-förhållande CaCO₃:CO₂'},
  {id:332, cat:'stoikiometri', q:'Halten koldioxid i luft ≈ 420 ppm, dvs 420 molekyler CO₂ per ___ luftmolekyler.', a:'1 000 000', hint:'ppm = parts per million'},
  {id:333, cat:'stoikiometri', q:'Förbränning av 1,0 mol oktan C₈H₁₈: C₈H₁₈ + 12,5O₂ → 8CO₂ + 9H₂O. Mol CO₂ = ___.', a:'8', hint:'Koefficient 8 framför CO₂'},
  {id:334, cat:'stoikiometri', q:'m(CO₂) från 1,0 mol oktan: 8,0 mol × 44 g/mol = ___ g.', a:'352', hint:'m = n × M'},
  {id:335, cat:'stoikiometri', q:'Elektrolys av vatten: 2H₂O → 2H₂ + O₂. Volym O₂ vid STP från 4,0 mol H₂O: n(O₂)=2,0 mol → V = ___ L.', a:'44,8', hint:'V = 2,0 × 22,4'},
  {id:336, cat:'stoikiometri', q:'Om utbytet är 75%, och man vill ha 30 g produkt (M=60), behöver man teoretiskt ___ mol produkt att sikta på.', a:'0,667', hint:'Behov = 30/60/0,75 mol praktiskt; teoretiskt n=30/60=0,50 mol → sikta på 0,50/0,75'},
  {id:337, cat:'stoikiometri', q:'Densitet 1,19 g/mL, 37% HCl (m/m). c = (1190×0,37)/36,5 = ___ mol/L ≈ 12 mol/L.', a:'12', hint:'c = (ρ × w × 1000)/M'},
  {id:338, cat:'stoikiometri', q:'Reaktionsschema ska alltid vara balanserat pga lagen om ___.', a:'massans bevarande', hint:'Atomer skapas/förstörs ej'},
  {id:339, cat:'stoikiometri', q:'En mol elektroner kallas ___ (används i elektrokemi).', a:'ett Faraday (F = 96 485 C/mol)', hint:'F = Nₐ × e'},
  {id:340, cat:'stoikiometri', q:'Avogadros lag: vid samma T och p innehåller 1 L av valfri idealgas ___ antal mol.', a:'samma', hint:'Grunden för molär volym vid STP'},
  {id:361, cat:'jamvikt', q:'Vid kemisk jämvikt är koncentrationerna av reaktanter och produkter ___, inte noll.', a:'konstanta', hint:'Dynamisk jämvikt – reaktionerna pågår'},
  {id:362, cat:'jamvikt', q:'Jämviktskonstanten Kc är ___ av koncentrationerna vid jämvikt.', a:'kvoten (produkter/reaktanter)', hint:'K = [P]ᵖ/[R]ʳ'},
  {id:363, cat:'jamvikt', q:'aA + bB ⇌ cC + dD: Kc = [C]^c × [D]^d / ([A]^a × [B]^___)', a:'b', hint:'Koefficienter blir exponenter'},
  {id:364, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃: Kc = [NH₃]² / ([N₂] × [H₂]^___).', a:'3', hint:'Koefficient 3 för H₂ → exponent 3'},
  {id:365, cat:'jamvikt', q:'H₂ + I₂ ⇌ 2HI: vid jämvikt [H₂]=0,40, [I₂]=0,40, [HI]=3,2 mol/L. Kc = 3,2² / (0,40×0,40) = ___.', a:'64', hint:'Kc = [HI]²/([H₂][I₂])'},
  {id:366, cat:'jamvikt', q:'Reaktionen 2SO₂ + O₂ ⇌ 2SO₃: Kc = [SO₃]² / ([SO₂]² × [___]).', a:'O₂', hint:'Alla reaktanter i nämnaren'},
  {id:367, cat:'jamvikt', q:'Om K = 10⁶ är reaktionen nästan ___ fullständig åt höger.', a:'helt/fullständigt', hint:'Stor K → nästan all reaktant omvandlas'},
  {id:368, cat:'jamvikt', q:'Om K = 10⁻⁶ är reaktionen nästan ___ åt höger.', a:'inte alls förskjuten (dominerar reaktanter)', hint:'Liten K → mest reaktanter kvar'},
  {id:369, cat:'jamvikt', q:'Le Chateliers princip: om man tillsätter mer av en reaktant förskjuts jämvikten mot ___.', a:'produkterna (höger)', hint:'Systemet konsumerar det tillsatta'},
  {id:370, cat:'jamvikt', q:'Le Chatelier: om man tar bort en produkt förskjuts jämvikten mot ___.', a:'produkterna (höger)', hint:'Systemet ersätter det borttagna'},
  {id:371, cat:'jamvikt', q:'Le Chatelier: om temperaturen höjs gynnas den ___ reaktionen.', a:'endoterma', hint:'Värme "konsumeras" av endotermen'},
  {id:372, cat:'jamvikt', q:'Le Chatelier: om temperaturen sänks gynnas den ___ reaktionen.', a:'exoterma', hint:'Systemet "producerar" värme för att ersätta'},
  {id:373, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃ är exoterm. Hög temperatur ger ___ K och ___ utbyte av NH₃.', a:'lägre K och lägre utbyte', hint:'Hög T gynnar bakåtreaktionen (endoterm)'},
  {id:374, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃: 4 mol gas → 2 mol gas. Ökat tryck gynnar ___.', a:'NH₃ (färre gasmolekyler, höger)', hint:'Le Chatelier: minska gasvolym → mot sidan med färre mol gas'},
  {id:375, cat:'jamvikt', q:'CO₂(g) + H₂(g) ⇌ CO(g) + H₂O(g): lika antal mol gas på varje sida. Ökat tryck påverkar jämvikten ___.', a:'inte', hint:'Samma antal mol gas → trycket spelar ingen roll'},
  {id:376, cat:'jamvikt', q:'En katalysator gör att jämvikt nås ___ men ändrar inte K.', a:'snabbare', hint:'Ea sänks för båda riktningarna lika mycket'},
  {id:377, cat:'jamvikt', q:'Reaktionskvoten Q: om Q < K reagerar systemet mot ___ för att nå jämvikt.', a:'produkterna (höger)', hint:'Behöver bilda mer produkt för att nå K'},
  {id:378, cat:'jamvikt', q:'Reaktionskvoten Q: om Q > K reagerar systemet mot ___ för att nå jämvikt.', a:'reaktanterna (vänster)', hint:'Produkterna bryts ner tills Q = K'},
  {id:379, cat:'jamvikt', q:'Om man multiplicerar en reaktion med faktor 2, blir det nya K = K_gammal^___.', a:'2', hint:'K(ny) = K(gammal)^n där n är faktorn'},
  {id:380, cat:'jamvikt', q:'Om man vänder på en reaktion (A⇌B → B⇌A) blir det nya K = ___ / K_gammal.', a:'1', hint:'K(omvänd) = 1/K(framåt)'},
  {id:381, cat:'jamvikt', q:'Kp används för gasjämvikter och uttrycks med ___ istället för mol/L.', a:'partialtryck', hint:'Kp relaterat till Kc via (RT)^Δn'},
  {id:382, cat:'jamvikt', q:'Haber-Bosch körs vid ~450°C fastän lägre T ger mer NH₃. Orsak: lägre T ger för låg ___.', a:'reaktionshastighet', hint:'Kinetik vs termodynamik – kompromiss'},
  {id:383, cat:'jamvikt', q:'Haber-Bosch körs vid ~200 atm fastän normalt tryck vore säkrare. Orsak: högt tryck ger ___ utbyte.', a:'bättre/högre', hint:'Fler gasmolekyler på vänster → högt tryck gynnar höger'},
  {id:384, cat:'jamvikt', q:'Järn används som katalysator i Haber-Bosch för att ___.', a:'öka reaktionshastigheten', hint:'Katalysator sänker aktiveringsenergi'},
  {id:385, cat:'jamvikt', q:'CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻: ökad CO₂ i havsvatten (surt regn) förskjuter jämvikten mot ___.', a:'H⁺ (surare hav)', hint:'Le Chatelier – mer CO₂ → mer syra'},
  {id:387, cat:'jamvikt', q:'Kw = [H⁺][OH⁻] = 1,0×10⁻¹⁴ är jämviktskonstanten för vattnets ___.', a:'autoprotolys (självjonisering)', hint:'2H₂O ⇌ H₃O⁺ + OH⁻'},
  {id:388, cat:'jamvikt', q:'Ka för en svag syra är ett specialfall av Kc för jämvikten HA ⇌ H⁺ + ___.', a:'A⁻', hint:'Konjugatbasen'},
  {id:389, cat:'jamvikt', q:'Stora Ka (litet pKa) → ___ syra.', a:'stark', hint:'Mer dissocierad → mer H⁺'},
  {id:391, cat:'jamvikt', q:'Buffert fungerar bäst i intervallet pH = pKa ± ___.', a:'1', hint:'Utanför detta intervall är buffertkapaciteten dålig'},
  {id:392, cat:'jamvikt', q:'En fosfatbuffert (pKa₂=7,2) är lämplig för att hålla pH nära ___.', a:'7,2', hint:'Buffert fungerar bäst vid pH ≈ pKa'},
  {id:393, cat:'jamvikt', q:'Blodets pH hålls konstant av tre buffersystem: bikarbonat/kolsyra, fosfat och ___.', a:'proteiner (hemoglobin)', hint:'Proteiners aminosyrarester fungerar som buffertar'},
  {id:394, cat:'jamvikt', q:'Ka × Kb = ___ (för konjugatpar i vatten vid 25°C).', a:'Kw = 1,0×10⁻¹⁴', hint:'Kopplar syrans och basens konstanter'},
  {id:395, cat:'jamvikt', q:'pKa(ättiksyra)=4,74. Ka = 10^(−4,74) ≈ ___.', a:'1,8×10⁻⁵', hint:'Ka = 10^(−pKa)'},
  {id:396, cat:'jamvikt', q:'Reaktionen 2NO₂(g) ⇌ N₂O₄(g): Kc = [N₂O₄] / [NO₂]^___. Vilket värde är exponenten?', a:'2', hint:'Koefficienten 2 framför NO₂ ger exponent 2'},
  {id:397, cat:'jamvikt', q:'CaCO₃(s) ⇌ CaO(s) + CO₂(g): Kc = [___] (fasta ämnen ingår inte).', a:'CO₂', hint:'Fasta och rena vätskor utelämnas ur K-uttrycket'},
  {id:398, cat:'jamvikt', q:'Jämvikt nås snabbare vid ___ temperatur men K-värdet ändras.', a:'högre', hint:'Högre T → snabbare kinetik, men K beror på T'},
  {id:399, cat:'jamvikt', q:'Principen om Le Chatelier är ett sätt att förutsäga ___ av en jämvikt.', a:'förskjutningen', hint:'Hur systemet reagerar på störning'},
  {id:400, cat:'jamvikt', q:'Om Kc = 1 ligger jämvikten ___.', a:'precis mitt emellan reaktanter och produkter', hint:'Lika mängd produkter och reaktanter (ungefär)'},
  {id:421, cat:'losningar', q:'c = n/V: om n = 0,25 mol och V = 500 mL = 0,500 L, är c = ___ mol/L.', a:'0,50', hint:'c = 0,25/0,500'},
  {id:422, cat:'losningar', q:'n = c × V: om c = 2,0 mol/L och V = 250 mL, är n = ___ mol.', a:'0,50', hint:'n = 2,0 × 0,250'},
  {id:423, cat:'losningar', q:'m = c × V × M: massa NaCl i 200 mL av 1,5 mol/L: m = 1,5 × 0,200 × 58,5 = ___ g.', a:'17,6', hint:'Räkna steg för steg'},
  {id:424, cat:'losningar', q:'Spädning: c₁V₁ = c₂V₂. c₁=6,0 M, V₁=?, c₂=0,30 M, V₂=500 mL → V₁ = ___ mL.', a:'25', hint:'V₁ = c₂V₂/c₁ = 0,30×500/6,0'},
  {id:425, cat:'losningar', q:'Du tar 10 mL av 5,0 M HCl och späder till 250 mL. Ny koncentration = ___ mol/L.', a:'0,20', hint:'c₂ = c₁V₁/V₂ = 5,0×0,010/0,250'},
  {id:426, cat:'losningar', q:'Lösningsentalpin för NH₄NO₃ är positiv (endoterm). Lösningen ___ temperaturen.', a:'sänker', hint:'Endoterm process tar upp värme från omgivningen'},
  {id:427, cat:'losningar', q:'Lösningsentalpin för NaOH är negativ (exoterm). Lösningen ___ temperaturen.', a:'höjer', hint:'Exoterm process avger värme till lösningen'},
  {id:432, cat:'losningar', q:'Tillsätter man NaCl till en AgCl-lösning (gemensam jon Cl⁻) ___ lösligheten av AgCl.', a:'minskar', hint:'Gemensam-joneffekten'},
  {id:435, cat:'losningar', q:'Transmittans T = I/I₀. Absorbans A = log(1/T). Om T = 0,10 är A = ___.', a:'1,0', hint:'A = log(1/0,10) = log(10) = 1'},
  {id:436, cat:'losningar', q:'Om T = 0,50 är A = log(1/0,50) = log(2) ≈ ___.', a:'0,30', hint:'log(2) ≈ 0,301'},
  {id:438, cat:'losningar', q:'Massandel (m/m): 5 g NaCl i 95 g vatten → 5/(95+5) × 100 = ___ %.', a:'5', hint:'Massandel = löst ämne / total massa × 100'},
  {id:439, cat:'losningar', q:'Fysiologisk koksaltlösning har ___ % NaCl (m/v).', a:'0,9', hint:'Isoton med blod – används i droppåsar'},
  {id:440, cat:'losningar', q:'Molalitet = mol löst ämne per kg ___. Enheten är mol/kg.', a:'lösningsmedel', hint:'Skiljer sig från molaritet (per liter lösning)'},
  {id:441, cat:'losningar', q:'Fryspunktssänkning: ΔTf = Kf × m. 0,50 mol/kg NaCl (2 partiklar) → ΔTf = 1,86 × 0,50 × 2 = ___ °C.', a:'1,86', hint:'i=2 för NaCl (van Hoff-faktor)'},
  {id:442, cat:'losningar', q:'Antifrys: 50% etylenglykol (M=62) i 1 kg vatten: m = 500/62 ≈ 8,06 mol/kg → ΔTf = 1,86×8,06 ≈ ___ °C.', a:'15', hint:'Ungefärlig beräkning'},
  {id:443, cat:'losningar', q:'Kokpunkthöjning: ΔTb = 0,512 × m. 1,0 mol/kg glukos: ΔTb = ___ °C.', a:'0,512', hint:'Kₓ(vatten) = 0,512 °C·kg/mol'},
  {id:444, cat:'losningar', q:'Osmotiskt tryck: π = MRT = 0,10 × 8,314 × 298 / 1000 ≈ ___ kPa.', a:'247,9', hint:'Enheter: M i mol/L, R=8,314 J/(mol·K), T i K → Pa → /1000 = kPa'},
  {id:445, cat:'losningar', q:'Omvänd osmos används för ___ av havsvatten.', a:'avsaltning', hint:'Tryck tvingar vatten genom membran mot osmotisk gradient'},
  {id:446, cat:'losningar', q:'Henrys lag: lösligheten av en gas i vätska ___ med ökat partialtryck.', a:'ökar', hint:'CO₂ i läsk – under tryck mer löst'},
  {id:447, cat:'losningar', q:'CO₂-lösligheten i havsvatten ___ när temperaturen stiger.', a:'minskar', hint:'Gaser löser sig sämre vid hög T – varmt hav tar upp mindre CO₂'},
  {id:448, cat:'losningar', q:'Titrering: n(HCl) = 0,100 × 0,0185 = 1,85×10⁻³ mol. c(NaOH) om V=25,0 mL = 1,85×10⁻³/0,0250 = ___ mol/L.', a:'0,074', hint:'c = n/V'},
  {id:449, cat:'losningar', q:'Ekvivalenspunkten i en titrering (stark syra–stark bas) har pH = ___.', a:'7', hint:'NaCl-lösning är neutral'},
  {id:450, cat:'losningar', q:'Ekvivalenspunkten i en titrering (svag syra–stark bas) har pH ___ 7.', a:'> (över)', hint:'Salt av svag syra hydrolyser basiskt'},
  {id:452, cat:'losningar', q:'Fenolftalein byter färg vid pH ≈ 8,2–10. Passar bäst för titrering av ___.', a:'svag syra med stark bas', hint:'Ekvivalenspunkt pH > 7'},
  {id:453, cat:'losningar', q:'Metylorange byter färg vid pH ≈ 3,1–4,4. Passar för titrering av ___.', a:'stark syra med svag bas', hint:'Ekvivalenspunkt pH < 7'},
  {id:454, cat:'losningar', q:'Bromtymolblått byter färg vid pH ≈ 6–7,6. Passar för ___ syra–___ bas.', a:'stark syra–stark bas', hint:'Ekvivalenspunkt pH = 7'},
  {id:455, cat:'losningar', q:'Löslighet av de flesta fasta salter ___ med ökad temperatur.', a:'ökar', hint:'Endoterm löslighetsprocess gynnas av hög T'},
  {id:457, cat:'losningar', q:'ppm i vattenlösning: 1 ppm ≈ 1 mg/L. EU:s gräns för nitrat i dricksvatten är 50 mg/L = ___ ppm.', a:'50', hint:'mg/L = ppm för utspädda vattenlösningar'},
  {id:458, cat:'losningar', q:'Bereda 1,00 L av 0,100 M KMnO₄ (M=158): m = 0,100 × 1,00 × 158 = ___ g.', a:'15,8', hint:'m = c × V × M'},
  {id:459, cat:'losningar', q:'SAV = Syra I Vatten. Varför hälls alltid syran i vattnet?', a:'Utspädning är starkt exoterm – i liten vattenmängd kan det koka och stänka', hint:'Riskminimering – syra i vatten, aldrig vatten i syra'},
  {id:460, cat:'losningar', q:'Gravimetrisk analys: man fäller ut, filtrerar, torkar och väger. Metoden ger ___ (direkt/indirekt) bestämning av mängd.', a:'direkt', hint:'Massan mäts direkt, inga beräkningsomvägar'},
  {id:462, cat:'losningar', q:'EDTA-titrering används för att bestämma ___ i vatten (vattenhårdhet).', a:'Ca²⁺ och Mg²⁺ (hårdhet)', hint:'EDTA bildar stabila komplex med di- och trivalenta metaller'},
  {id:463, cat:'losningar', q:'Molärbrå χ_A = n_A/n_tot. Om 1 mol etanol blandas i 9 mol vatten: χ(etanol) = ___.', a:'0,10', hint:'χ = 1/(1+9)'},
  {id:464, cat:'losningar', q:'Raoults lag: ångtrycket för ett lösningsmedel i en lösning är χ_solv × ___.', a:'p° (rent lösningsmedels ångtryck)', hint:'Löst ämne sänker ångtrycket'},
  {id:465, cat:'losningar', q:'Kolligativa egenskaper beror på ___ lösta partiklar, inte på deras identitet.', a:'antalet', hint:'1 mol NaCl (2 partiklar) ger dubbelt mot 1 mol glukos'}
];

const CLOZE_CATS = {
  syrabas:      {icon:'⚗️',  label:'Syra-bas begrepp'},
  grundamnen:   {icon:'⚛️',  label:'Grundämnen'},
  syrorBaser:   {icon:'🧪',  label:'Syror & baser'},
  bindning:     {icon:'🔗',  label:'Bindning & struktur'},
  redox:        {icon:'⚡',  label:'Redox & oxidationstal'},
  stoikiometri: {icon:'🔢',  label:'Stökiometri & mol'},
  gaslagar:     {icon:'💨',  label:'Gaslagar'},
  jamvikt:      {icon:'⚖️',  label:'Kemisk jämvikt'},
  termokemi:    {icon:'🌡️',  label:'Termokemi'},
  organisk:     {icon:'🌿',  label:'Organisk kemi'},
  losningar:    {icon:'💧',  label:'Lösningar & konc.'},
  labsak:       {icon:'🔬',  label:'Lab & säkerhet'},
  prov:         {icon:'📝',  label:'Provfrågor'},
};


const LEVEL_INFO = {
  1: { icon:'🌱', name:'Nivå 1', desc:'Grundläggande' },
  2: { icon:'🔥', name:'Nivå 2', desc:'Medel' },
  3: { icon:'⚡', name:'Nivå 3', desc:'Avancerad' },
};
const CAT_INFO = {
  mol:     { icon:'⚖️',  label:'Mol & massa' },
  konc:    { icon:'🧪',  label:'Koncentration' },
  gas:     { icon:'💨',  label:'Gaslagar' },
  termo:   { icon:'🌡️', label:'Termodynamik' },
  syrabas: { icon:'⚗️',  label:'Syra-bas' },
  jamvikt: { icon:'🔄',  label:'Jamvikt' },
  elkem:   { icon:'⚡',  label:'Elektrokemi' },
  stoik:   { icon:'🔢',  label:'Stoikiometri' },
  bal:     { icon:'⚖️',  label:'Balansering' },
  redox:   { icon:'🔴',  label:'Redox & oxidationstal' },
};


let _curLevel = 1, _curProbIdx = 0, _probList = [], _probAnswered = false;

function initExercise() {
  const levelRow = document.getElementById('levelRow');
  if (!levelRow) return;

  // Mode switcher
  const modeRow = document.getElementById('exModeRow');
  modeRow.innerHTML = `
    <button class="ex-mode-btn active" data-mode="rakna">🧮 Räkna</button>
    <button class="ex-mode-btn" data-mode="memorera">📚 Memorera</button>`;
  modeRow.querySelectorAll('.ex-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      modeRow.querySelectorAll('.ex-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      switchExMode(btn.dataset.mode);
    });
  });

  // Category filter row
  const catRow = document.getElementById('exRaknaCatRow');
  catRow.innerHTML = '<button class="ex-cat-filter-btn active" data-cat="all">🔢 Alla kategorier</button>' +
    Object.entries(CAT_INFO).map(([k,v]) =>
      `<button class="ex-cat-filter-btn" data-cat="${k}">${v.icon} ${v.label}</button>`
    ).join('');
  catRow.querySelectorAll('.ex-cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => selectCat(btn.dataset.cat));
  });
  initScrollFade(catRow);

  levelRow.innerHTML = [1,2,3].map(lv => {
    const li = LEVEL_INFO[lv];
    return `<button class="level-btn ${lv===1?'active':''}" data-level="${lv}">
      <span class="level-icon">${li.icon}</span>
      <span class="level-name">${li.name}</span>
      <span class="level-desc">${li.desc}</span>
    </button>`;
  }).join('');

  levelRow.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => selectLevel(parseInt(btn.dataset.level)));
  });

  selectLevel(1);
}

let _curCat = 'all';

function selectCat(cat) {
  _curCat = cat;
  document.querySelectorAll('#exRaknaCatRow .ex-cat-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat));
  _probList = shuffleArray(PROBLEMS.filter(p => p && p.lv === _curLevel && (cat === 'all' || p.cat === cat)));
  _curProbIdx = 0;
  _exProbStatuses = _probList.map(function() { return 'pending'; });
  _exSkippedQueue = [];
  renderProblem();
  exUpdatePanel();
  exStartPanelTimer();
}

function selectLevel(lv) {
  _curLevel = lv;
  _probList = shuffleArray(PROBLEMS.filter(p => p && p.lv === lv && (_curCat === 'all' || p.cat === _curCat)));
  _curProbIdx = 0;
  _exProbStatuses = _probList.map(function() { return 'pending'; });
  _exSkippedQueue = [];
  document.querySelectorAll('#levelRow .level-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.level) === lv);
  });
  renderProblem();
  exUpdatePanel();
  exStartPanelTimer();
}

function buildBalanceEqHTML(prob, interactive) {
  // Build the visual equation with input boxes for blanks
  let html = '<div class="bal-eq">';
  let globalIdx = 0;
  prob.eq.forEach((side, sideIdx) => {
    if (sideIdx === 1) html += '<span class="bal-arrow">→</span>';
    side.forEach((term, termIdx) => {
      if (termIdx > 0) html += '<span class="bal-plus">+</span>';
      const isBlank = interactive && prob.blanks.includes(globalIdx);
      if (isBlank) {
        html += `<span class="bal-term"><input class="bal-input" data-idx="${globalIdx}" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="?"><span class="bal-formula">${term.f}</span></span>`;
      } else {
        const coef = term.c === 1 ? '' : term.c;
        html += `<span class="bal-term"><span class="bal-coef">${coef}</span><span class="bal-formula">${term.f}</span></span>`;
      }
      globalIdx++;
    });
  });
  html += '</div>';
  return html;
}

function checkBalance(prob) {
  if (_probAnswered) return;
  const inputs = document.querySelectorAll('.bal-input');
  let allFilled = true;
  let allCorrect = true;

  inputs.forEach(inp => {
    const idx = parseInt(inp.dataset.idx);
    // Find correct coef for this global idx
    let globalIdx = 0;
    let correctCoef = null;
    for (const side of prob.eq) {
      for (const term of side) {
        if (globalIdx === idx) correctCoef = term.c;
        globalIdx++;
      }
    }
    const val = parseInt(inp.value);
    if (isNaN(val) || inp.value.trim() === '') { allFilled = false; return; }
    if (val === correctCoef) {
      inp.classList.add('bal-correct');
      inp.classList.remove('bal-wrong');
    } else {
      inp.classList.add('bal-wrong');
      inp.classList.remove('bal-correct');
      allCorrect = false;
    }
  });

  if (!allFilled) { showToast('Fyll i alla rutor'); return; }

  _probAnswered = true;
  const fb = document.getElementById('probFeedback');
  fb.className = 'prob-feedback show ' + (allCorrect ? 'ok' : 'fail');
  if (allCorrect) {
    fb.innerHTML = `<strong>✅ Rätt!</strong>`;
    inputs.forEach(inp => inp.disabled = true);
  } else {
    fb.innerHTML = `<strong>❌ Inte helt rätt.</strong><br><small>Rätt svar:</small><br>` + buildBalanceEqHTML(prob, false);
  }
  if (_exProbStatuses) _exProbStatuses[_curProbIdx] = allCorrect ? 'done' : 'skipped';
  _probRevealSolution(prob);
  if (typeof exUpdatePanel === 'function') exUpdatePanel();
}

// Helper: toggle buttons after answering.
// correct=true → hide GiveUp, keep SolBtn hidden (no retry, no extra button)
// correct=false → hide GiveUp, show SolBtn so student can read full solution
function _probRevealSolution(prob, correct) {
  const solBtn = document.getElementById('exSolBtn');
  const giveUp = document.getElementById('exGiveUpBtn');
  const checkBtn = document.getElementById('probCheckBtn');
  if (giveUp) giveUp.style.display = 'none';
  if (checkBtn) checkBtn.style.display = 'none';
  if (solBtn) solBtn.style.display = correct ? 'none' : '';
}

// "Ge upp"-handler: auto-show solution in feedback, lock everything, no Visa lösning btn
function _probGiveUp(prob) {
  if (_probAnswered) return;
  _probAnswered = true;
  // Lock input field
  const input = document.getElementById('probInput');
  if (input) input.disabled = true;
  const sel = document.getElementById('probSelect');
  if (sel) sel.disabled = true;
  // Lock balance inputs and redox-table selects
  document.querySelectorAll('.bal-input').forEach(inp => inp.disabled = true);
  document.querySelectorAll('.rt-select').forEach(s => s.disabled = true);
  // Hide action buttons
  const checkBtn = document.getElementById('probCheckBtn');
  const giveUp   = document.getElementById('exGiveUpBtn');
  const solBtn   = document.getElementById('exSolBtn');
  if (checkBtn) checkBtn.style.display = 'none';
  if (giveUp)   giveUp.style.display   = 'none';
  if (solBtn)   solBtn.style.display   = 'none';
  // Show solution inline in feedback — no separate Visa lösning needed
  const fb = document.getElementById('probFeedback');
  if (fb) {
    fb.className = 'prob-feedback show fail';
    fb.innerHTML = '<strong>🏳️ Uppgiften hoppades över.</strong>' +
      (prob.type === 'dropdown'
        ? ' Rätt svar: <strong>' + prob.choices[prob.correct] + '</strong>'
        : (prob.ans !== undefined ? ' Rätt svar: <strong>' + prob.ans + ' ' + (prob.unit || '') + '</strong>' : '')) +
      _buildSolutionHTML(prob);
  }
  if (_exProbStatuses) _exProbStatuses[_curProbIdx] = 'skipped';
  if (typeof exUpdatePanel === 'function') exUpdatePanel();
}

function _wireHintSol(prob) {
  const hintBtn = document.getElementById('exHintBtn');
  const solBtn  = document.getElementById('exSolBtn');
  const giveUp  = document.getElementById('exGiveUpBtn');

  if (hintBtn) hintBtn.addEventListener('click', function() {
    const panel = document.getElementById('exHintPanel');
    const showing = panel.style.display !== 'none';
    panel.style.display = showing ? 'none' : 'block';
    if (!showing) {
      const hintText = prob.hint || prob.tips || prob.tip || prob.ledtråd ||
        'Försök identifiera vad du känner till i uppgiften och vilken formel som passar. Titta på enheten i svaret som ledtråd.';
      panel.innerHTML = '💡 ' + hintText;
    }
    this.textContent = showing ? '💡 Visa tips' : '💡 Dölj tips';
  });

  if (solBtn) solBtn.addEventListener('click', function() {
    const panel = document.getElementById('exSolPanel');
    const showing = panel.style.display !== 'none';
    panel.style.display = showing ? 'none' : 'block';
    this.textContent = showing ? '🔍 Visa lösning' : '🔍 Dölj lösning';
    if (!showing) panel.innerHTML = _buildSolutionHTML(prob);
  });

  if (giveUp) giveUp.addEventListener('click', () => _probGiveUp(prob));
}

function renderProblem() {
  const container = document.getElementById('probContainer');
  if (!container) return;
  if (!_probList.length) {
    const catLabel = _curCat === 'all' ? 'alla kategorier' : (CAT_INFO[_curCat] ? CAT_INFO[_curCat].label : _curCat);
    const lvLabel  = (LEVEL_INFO[_curLevel] || {}).name || 'Nivå ' + _curLevel;
    container.innerHTML =
      '<div class="prob-card" style="text-align:center;padding:40px 24px;color:var(--text2)">' +
        '<div style="font-size:2rem;margin-bottom:12px">📭</div>' +
        '<div style="font-weight:600;margin-bottom:6px">Inga uppgifter hittades</div>' +
        '<div style="font-size:0.9rem">Det finns inga uppgifter för <strong>' + catLabel + '</strong> på <strong>' + lvLabel + '</strong>.<br>Välj en annan kategori eller nivå.</div>' +
      '</div>';
    return;
  }

  const prob = _probList[_curProbIdx];
  _probAnswered = false;
  const total = _probList.length;
  const li = LEVEL_INFO[prob.lv];

  // Shared action-row HTML: hint always visible, solution hidden until answered, give-up always visible pre-answer
  const actionRow = `
    <div class="prob-actions">
      <button id="exHintBtn" class="prob-action-btn hint-btn">💡 Visa tips</button>
      <button id="exGiveUpBtn" class="prob-action-btn" style="background:var(--surface2);color:var(--text2);border:1px solid var(--border)">🏳️ Ge upp – visa svar</button>
      <button id="exSolBtn" class="prob-action-btn sol-btn" style="display:none">🔍 Visa lösning</button>
    </div>
    <div id="exHintPanel" class="prob-hint-panel" style="display:none"></div>
    <div id="exSolPanel" class="prob-sol-panel" style="display:none"></div>`;


  if (prob.type === 'dropdown') {
    const qHtml = prob.q.replace(/\n/g, '<br>');
    const optionsHtml = prob.choices.map((c, i) =>
      `<option value="${i}">${c}</option>`
    ).join('');
    container.innerHTML = `
      <div class="prob-card">
        <div class="prob-meta">
          <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
          <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
        </div>
        <div class="prob-q">${prob.title}</div>
        <p style="font-size:0.92rem;line-height:1.65;margin:8px 0 14px;color:var(--text)">${qHtml}</p>
        <div class="prob-input-row">
          <select id="probSelect" class="prob-select">
            <option value="" disabled selected>Välj svar…</option>
            ${optionsHtml}
          </select>
          <button class="prob-check" id="probCheckBtn">Kontrollera</button>
        </div>
        <div class="prob-feedback" id="probFeedback"></div>
        ${actionRow}
      </div>`;
    document.getElementById('probCheckBtn').addEventListener('click', () => checkDropdown(prob));
    _wireHintSol(prob);
    exUpdatePanel();
    return;
  }

  if (prob.type === 'balance') {
    container.innerHTML = `
      <div class="prob-card">
        <div class="prob-meta">
          <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
          <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
        </div>
        <div class="prob-q">${prob.title}</div>
        <p style="font-size:0.88rem;color:var(--text2);margin:6px 0 16px">Fyll i koefficienterna (skriv 1 om koefficienten är 1):</p>
        ${buildBalanceEqHTML(prob, true)}
        <div style="margin-top:16px">
          <button class="prob-check" id="probCheckBtn">Kontrollera</button>
        </div>
        <div class="prob-feedback" id="probFeedback"></div>
        ${actionRow}
      </div>`;
    document.getElementById('probCheckBtn').addEventListener('click', () => checkBalance(prob));
    document.querySelectorAll('.bal-input').forEach(inp => {
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkBalance(prob); });
    });
    _wireHintSol(prob);
    exUpdatePanel();
    return;
  }

  if (prob.type === 'redox-table') {
    const OX_VALS = ['−IV','−III','−II','−I','0','+I','+II','+III','+IV','+V','+VI','+VII'];
    const oxOpts = OX_VALS.map(v => `<option value="${v}">${v}</option>`).join('');
    const noteHtml = prob.note
      ? `<div style="background:var(--accent-light);border-left:3px solid var(--accent);padding:8px 12px;margin-bottom:12px;border-radius:4px;font-size:0.85rem;color:var(--text)">${prob.note}</div>`
      : '';
    const rowsHtml = prob.rows.map((row, i) => `
      <tr style="border-bottom:1px solid var(--border)">
        <td style="padding:7px 10px;font-size:0.88rem;color:var(--text)">${row.label}</td>
        <td style="padding:4px 8px"><select id="rt-before-${i}" class="rt-select prob-select" style="min-width:80px">
          <option value="" disabled selected>–</option>${oxOpts}
        </select></td>
        <td style="padding:4px 8px"><select id="rt-after-${i}" class="rt-select prob-select" style="min-width:80px">
          <option value="" disabled selected>–</option>${oxOpts}
        </select></td>
      </tr>`).join('');
    const extraHtml = prob.extraQuestions.map((eq, j) => {
      const eqOpts = eq.choices.map((c, k) => `<option value="${k}">${c}</option>`).join('');
      return `<div style="margin-top:10px">
        <div style="font-size:0.87rem;color:var(--text2);margin-bottom:4px">${eq.q}</div>
        <select id="rt-extra-${j}" class="rt-select prob-select" style="min-width:180px">
          <option value="" disabled selected>Välj svar…</option>${eqOpts}
        </select>
      </div>`;
    }).join('');
    container.innerHTML = `
      <div class="prob-card">
        <div class="prob-meta">
          <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
          <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
        </div>
        <div class="prob-q">${prob.title}</div>
        <p style="font-family:monospace;font-size:0.95rem;background:var(--surface2,var(--surface));border:1px solid var(--border);border-radius:6px;padding:8px 12px;margin:8px 0 12px;color:var(--text)">${prob.reaction}</p>
        ${noteHtml}
        <table style="width:100%;border-collapse:collapse;margin-bottom:4px">
          <thead>
            <tr style="border-bottom:2px solid var(--border)">
              <th style="text-align:left;padding:6px 10px;font-size:0.82rem;color:var(--text2);font-weight:600">Ämne</th>
              <th style="text-align:left;padding:6px 8px;font-size:0.82rem;color:var(--text2);font-weight:600">Före (ox.tal)</th>
              <th style="text-align:left;padding:6px 8px;font-size:0.82rem;color:var(--text2);font-weight:600">Efter (ox.tal)</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
        <div id="rt-extra" style="margin-bottom:14px">${extraHtml}</div>
        <div style="margin-top:16px">
          <button class="prob-check" id="probCheckBtn">Kontrollera</button>
        </div>
        <div class="prob-feedback" id="probFeedback"></div>
        ${actionRow}
      </div>`;
    document.getElementById('probCheckBtn').addEventListener('click', () => checkRedoxTable(prob));
    _wireHintSol(prob);
    exUpdatePanel();
    return;
  }

  const qHtml = prob.q.replace(/\n/g, '<br>');

  container.innerHTML = `
    <div class="prob-card">
      <div class="prob-meta">
        <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
        <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
      </div>
      <div class="prob-q">${prob.title}</div>
      <p style="font-size:0.92rem;line-height:1.65;margin:8px 0 14px;color:var(--text)">${qHtml}</p>
      <div class="prob-input-row">
        <input type="number" id="probInput" class="prob-input" placeholder="Svar…" step="any">
        <span class="prob-unit">${prob.unit}</span>
        <button class="prob-check" id="probCheckBtn">Kontrollera</button>
      </div>
      <div class="prob-feedback" id="probFeedback"></div>
      ${actionRow}
    </div>`;

  document.getElementById('probCheckBtn').addEventListener('click', () => checkProblem(prob));
  document.getElementById('probInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkProblem(prob);
  });
  _wireHintSol(prob);
  exUpdatePanel();
}

function _getCatExplanation(cat) {
  var map = {
    mol:     'Vi använder molformeln eftersom vi behöver omvandla mellan massa, volym eller partikelantal och mol. Molmassan (g/mol) hittar du i periodiska systemet genom att summera alla atommassor i molekylen.',
    syrabas: 'Vi använder syra-bas-kemin. pH definieras som −log[H⁺], och vi identifierar om ämnet är en syra (avger H⁺) eller bas (tar emot H⁺) för att sätta upp rätt beräkning.',
    gas:     'Vi använder gaslagarna. Ideala gaslagen PV = nRT kopplar samman tryck (P), volym (V), substansmängd (n) och temperatur (T). Kom ihåg att temperaturen alltid ska vara i kelvin (K = °C + 273).',
    termo:   'Vi använder termokemins energiformler. Reaktionsentalpin ΔH anger om reaktionen är exoterm (avger värme, ΔH < 0) eller endoterm (tar upp värme, ΔH > 0).',
    jamvikt: 'Vi använder jämviktsuttrycket Kc (eller Kp för gaser). Vid jämvikt är framåt- och bakåtreaktionernas hastigheter lika. Kc = [produkter]/[reaktanter], där klamrarna anger molkoncentration i mol/L.',
    elkem:   'Vi använder elektrokemins formler. Faradays lag kopplar elektrisk laddning till substansmängd: n = Q/(z·F), där z är antal elektroner per formelenhet och F = 96 485 C/mol.',
    stoik:   'Vi använder stökiometri för att räkna med molförhållanden i en balanserad reaktion. Koefficienterna i reaktionsformeln visar exakt vilket förhållande reaktanter och produkter reagerar i.',
    konc:    'Vi använder koncentrationsformeln c = n/V, där c är koncentrationen i mol/L, n är substansmängden i mol och V är volymen i liter.',
    bal:     'Vi balanserar en kemisk reaktion genom att se till att antalet atomer av varje grundämne är lika på båda sidor om reaktionspilen. Vi justerar koefficienterna, aldrig index i formlerna.',
    redox:   'Vi bestämmer oxidationstal genom att använda reglerna: fria grundämnen = 0, alkalimetaller = +I, syre = −II (undantag: peroxider −I, OF₂ +II), väte = +I (undantag: metallhydrider −I). Summera sedan oxidationstalen × antalet atomer och sätt lika med molekylens totala laddning.',
  };
  return map[cat] || 'Vi löser uppgiften steg för steg med hjälp av relevanta kemiformler. Identifiera vad som är känt och vad som ska beräknas, välj rätt formel och sätt in värdena.';
}
function _buildSolutionHTML(prob) {
  var explain = _getCatExplanation(prob.cat);
  var formula = prob.formula || '';
  var steps = prob.steps || [];
  var mainSteps = steps;
  var answerStep = null;
  if (steps.length > 0 && /^Svar/i.test(steps[steps.length - 1])) {
    mainSteps = steps.slice(0, -1);
    answerStep = steps[steps.length - 1];
  }
  var html = '<div class="sol-block">';
  html += '<span class="sol-section-label">Förklaring</span>';
  html += '<p class="sol-explain">' + explain + '</p>';
  if (formula) {
    html += '<span class="sol-section-label">Formel &amp; uträkning</span>';
    html += '<code class="sol-formula-box">Formel: ' + formula + '</code>';
  }
  if (mainSteps.length > 0) {
    html += '<ul class="sol-steps-list">';
    mainSteps.forEach(function(step) { html += '<li>' + step + '</li>'; });
    html += '</ul>';
  }
  if (answerStep) {
    html += '<div class="sol-answer-box">&#10003; ' + answerStep + '</div>';
  } else if (prob.ans !== undefined) {
    html += '<div class="sol-answer-box">&#10003; Svar: ' + prob.ans + ' ' + prob.unit + '</div>';
  }
  html += '</div>';
  return html;
}
// ── Exercise session panel ──────────────────────────────
let _exPanelTimer = null;
let _exPanelSeconds = 0;
let _exProbStatuses = []; // 'pending'|'done'|'skipped' per index in _probList
let _exSkippedQueue = [];

function exStartPanelTimer() {
  if (_exPanelTimer) clearInterval(_exPanelTimer);
  _exPanelSeconds = 0;
  _exPanelTimer = setInterval(function() {
    _exPanelSeconds++;
    const m = String(Math.floor(_exPanelSeconds / 60)).padStart(2, '0');
    const s = String(_exPanelSeconds % 60).padStart(2, '0');
    const el = document.getElementById('exPanelTimer');
    if (el) el.textContent = m + ':' + s;
    const mob = document.getElementById('exMobileTimer');
    if (mob) mob.textContent = '⏱ ' + m + ':' + s;
  }, 1000);
}

function exStopPanelTimer() {
  if (_exPanelTimer) { clearInterval(_exPanelTimer); _exPanelTimer = null; }
}

function exUpdatePanel() {
  const bar = document.getElementById('exStatusBar');
  const navRow = document.getElementById('exNavRow');
  if (!bar) return;

  // Hide status bar and nav row when there are no problems
  if (!_probList || !_probList.length) {
    bar.style.display = 'none';
    if (navRow) navRow.style.display = 'none';
    return;
  }

  bar.style.display = 'flex';
  if (navRow) navRow.style.display = 'flex';

  // Task counter
  const taskEl = document.getElementById('exStatusTask');
  if (taskEl) {
    taskEl.textContent = 'Uppgift ' + (_curProbIdx + 1) + '/' + _probList.length;
  }

  // Level badge
  const lvEl = document.getElementById('exStatusLevel');
  if (lvEl) {
    const li = LEVEL_INFO[_curLevel] || LEVEL_INFO[1];
    lvEl.textContent = li.icon + ' ' + li.name;
    lvEl.className = 'ex-status-level lvl-' + _curLevel;
  }

  // Mobile: show timer inside card
  var mobileTimer = document.getElementById('exMobileTimer');
  if (window.innerWidth <= 600 && _probList && _probList.length) {
    if (!mobileTimer) {
      var meta = document.querySelector('#probContainer .prob-meta');
      if (meta) {
        var span = document.createElement('span');
        span.id = 'exMobileTimer';
        span.className = 'prob-tag';
        span.style.cssText = 'font-variant-numeric:tabular-nums;font-weight:700;color:var(--accent);background:var(--accent-light)';
        meta.appendChild(span);
      }
    }
    mobileTimer = document.getElementById('exMobileTimer');
    if (mobileTimer) {
      var timerEl = document.getElementById('exPanelTimer');
      mobileTimer.textContent = '⏱ ' + (timerEl ? timerEl.textContent : '00:00');
    }
  } else if (mobileTimer) {
    mobileTimer.remove();
  }

  // Problem list
  exRenderProbList();
}

function exRenderProbList() {
  const list = document.getElementById('exProbList');
  if (!list || !_probList) return;
  list.innerHTML = _probList.map(function(prob, i) {
    const status = _exProbStatuses[i] || 'pending';
    const isCur = i === _curProbIdx;
    const cls = 'ex-list-item' +
      (isCur ? ' ex-active' : '') +
      (status === 'done' ? ' ex-done' : '') +
      (status === 'skipped' ? ' ex-skipped' : '');
    const label = (i + 1) + '. ' + (prob.title || (prob.q || '').substring(0, 45));
    const titleAttr = (prob.q || '').replace(/"/g, '&quot;');
    return '<div class="' + cls + '" onclick="exJumpTo(' + i + ')" title="' + titleAttr + '">' + label + '</div>';
  }).join('');
}

function exToggleList() {
  const list = document.getElementById('exProbList');
  const arrow = document.getElementById('exListArrow');
  if (!list) return;
  list.classList.toggle('open');
  if (arrow) arrow.textContent = list.classList.contains('open') ? '▲' : '▼';
}

function exSwitchLevel(lv) {
  selectLevel(lv);
  exStartPanelTimer();
}

function exJumpTo(idx) {
  if (!_probList || idx < 0 || idx >= _probList.length) return;
  _curProbIdx = idx;
  renderProblem();
}

function exNavPrev() {
  if (_curProbIdx > 0) exJumpTo(_curProbIdx - 1);
}

function exNavNext() {
  if (_exProbStatuses[_curProbIdx] !== 'done') _exProbStatuses[_curProbIdx] = 'done';
  exUpdatePanel();
  if (_curProbIdx < _probList.length - 1) {
    exJumpTo(_curProbIdx + 1);
  } else if (_exSkippedQueue.length > 0) {
    exJumpTo(_exSkippedQueue.shift());
  }
}

function exNavSkip() {
  _exProbStatuses[_curProbIdx] = 'skipped';
  _exSkippedQueue.push(_curProbIdx);
  exUpdatePanel();
  if (_curProbIdx < _probList.length - 1) {
    exJumpTo(_curProbIdx + 1);
  } else if (_exSkippedQueue.length > 0) {
    exJumpTo(_exSkippedQueue.shift());
  }
}

function exResetAll() {
  if (!confirm('Vill du börja om? Alla dina svar och din nuvarande progress raderas.')) return;
  // Reshuffle the same pool from scratch
  _probList = shuffleArray(_probList.slice());
  _curProbIdx = 0;
  _exProbStatuses = _probList.map(function() { return 'pending'; });
  _exSkippedQueue = [];
  _probAnswered = false;
  renderProblem();
  exUpdatePanel();
  exStartPanelTimer();
  showToast('✅ Uppgifterna blandade om – kör på!', 'success');
}

function checkProblem(prob) {
  if (_probAnswered) return;
  var input = document.getElementById('probInput');
  var val = parseFloat(input.value);
  if (isNaN(val)) { showToast('Ange ett numeriskt svar'); return; }
  var correct = Math.abs(val - prob.ans) <= prob.tol;
  _probAnswered = true;
  input.disabled = true;
  input.classList.add(correct ? 'correct' : 'wrong');
  var fb = document.getElementById('probFeedback');
  fb.className = 'prob-feedback show ' + (correct ? 'ok' : 'fail');
  if (correct) {
    fb.innerHTML = '<strong>✅ Rätt!</strong>';
  } else {
    fb.innerHTML = '<strong>❌ Fel.</strong> Ditt svar: ' + val + ' ' + prob.unit + ' &nbsp;|&nbsp; Rätt svar: <strong>' + prob.ans + ' ' + prob.unit + '</strong>';
  }
  if (_exProbStatuses) _exProbStatuses[_curProbIdx] = correct ? 'done' : 'skipped';
  _probRevealSolution(prob, correct);
  if (typeof exUpdatePanel === 'function') exUpdatePanel();
}


function checkDropdown(prob) {
  if (_probAnswered) return;
  var sel = document.getElementById('probSelect');
  var idx = parseInt(sel.value);
  if (isNaN(idx)) { showToast('Välj ett svar'); return; }
  var correct = idx === prob.correct;
  _probAnswered = true;
  sel.disabled = true;
  sel.classList.add(correct ? 'correct' : 'wrong');
  var fb = document.getElementById('probFeedback');
  fb.className = 'prob-feedback show ' + (correct ? 'ok' : 'fail');
  if (correct) {
    fb.innerHTML = '<strong>✅ Rätt!</strong> ' + prob.choices[prob.correct];
  } else {
    fb.innerHTML = '<strong>❌ Fel.</strong> Du valde: <em>' + prob.choices[idx] +
      '</em> &nbsp;|&nbsp; Rätt svar: <strong>' + prob.choices[prob.correct] + '</strong>';
  }
  if (_exProbStatuses) _exProbStatuses[_curProbIdx] = correct ? 'done' : 'skipped';
  _probRevealSolution(prob, correct);
  if (typeof exUpdatePanel === 'function') exUpdatePanel();
}


function checkRedoxTable(prob) {
  if (_probAnswered) return;
  var allFilled = true;
  prob.rows.forEach(function(row, i) {
    var bef = document.getElementById('rt-before-' + i);
    var aft = document.getElementById('rt-after-' + i);
    if (!bef || !bef.value || !aft || !aft.value) allFilled = false;
  });
  prob.extraQuestions.forEach(function(eq, j) {
    var sel = document.getElementById('rt-extra-' + j);
    if (!sel || sel.value === '') allFilled = false;
  });
  if (!allFilled) { showToast('Fyll i alla rutor'); return; }
  var allCorrect = true;
  prob.rows.forEach(function(row, i) {
    var bef = document.getElementById('rt-before-' + i);
    var aft = document.getElementById('rt-after-' + i);
    var befOk = bef.value === row.before;
    var aftOk = aft.value === row.after;
    bef.disabled = true;
    aft.disabled = true;
    bef.classList.add(befOk ? 'correct' : 'wrong');
    aft.classList.add(aftOk ? 'correct' : 'wrong');
    if (!befOk || !aftOk) allCorrect = false;
  });
  prob.extraQuestions.forEach(function(eq, j) {
    var sel = document.getElementById('rt-extra-' + j);
    var ok = parseInt(sel.value) === eq.correct;
    sel.disabled = true;
    sel.classList.add(ok ? 'correct' : 'wrong');
    if (!ok) allCorrect = false;
  });
  _probAnswered = true;
  var fb = document.getElementById('probFeedback');
  fb.className = 'prob-feedback show ' + (allCorrect ? 'ok' : 'fail');
  fb.innerHTML = allCorrect
    ? '<strong>✅ Rätt!</strong> Alla oxidationstal och svar är korrekta.'
    : '<strong>❌ Fel.</strong> Kontrollera de röda rutorna. Se lösningen för detaljer.';
  if (_exProbStatuses) _exProbStatuses[_curProbIdx] = allCorrect ? 'done' : 'skipped';
  _probRevealSolution(prob, allCorrect);
  if (typeof exUpdatePanel === 'function') exUpdatePanel();
}


// ═══════════════════════════════════════════════════════
//  LÄGESVÄXLING (Räkna / Luckor / Memorera)
// ═══════════════════════════════════════════════════════

let _clozeInited = false, _memInited = false;

// ── Exercise search ──────────────────────────────────────
let _exSearchIndex = null;
let _exSearchDebounce = null;

function buildExSearchIndex() {
  if (_exSearchIndex) return _exSearchIndex;
  _exSearchIndex = [];
  PROBLEMS.forEach(p => {
    if (!p || !p.id) return; // Skip null/undefined entries
    const catInfo = CAT_INFO[p.cat];
    const catLabel = catInfo ? catInfo.label : p.cat;
    const catIcon = catInfo ? catInfo.icon : '';
    // Balancing problems use 'eq' instead of 'q'
    const questionText = p.q || p.reaction || (p.eq ? p.eq.join(' → ') : '') || '';
    // Build searchable text from title + question + hint + category
    const searchText = [p.title || '', questionText, p.hint || '', catLabel].join(' ').toLowerCase();
    // Snippet: first meaningful line of question
    const snippet = questionText.split('\n').filter(l => l.trim())[0] || p.title || '';
    _exSearchIndex.push({ id: p.id, lv: p.lv, cat: p.cat, catLabel, catIcon, title: p.title || '', snippet, searchText });
  });
  return _exSearchIndex;
}

function exDoSearch(query) {
  const results = document.getElementById('exSearchResults');
  const clearBtn = document.getElementById('exSearchClear');
  if (!query || query.length < 2) {
    results.style.display = 'none';
    clearBtn.style.display = query ? '' : 'none';
    return;
  }
  clearBtn.style.display = '';
  const index = buildExSearchIndex();
  const q = query.toLowerCase();
  const matches = index.filter(item => item.searchText.includes(q));

  if (matches.length === 0) {
    results.innerHTML = '<div class="exsr-empty">Inga uppgifter hittades för "' + query.replace(/</g,'&lt;') + '".<br>Prova ett annat begrepp eller bläddra i kategorierna ovan.</div>';
    results.style.display = '';
    return;
  }

  // Group ALL matches by category — no limit
  const groups = {};
  matches.forEach(m => {
    if (!groups[m.cat]) groups[m.cat] = { catLabel: m.catLabel, catIcon: m.catIcon, items: [] };
    groups[m.cat].items.push(m);
  });

  // Sort items within each group: title match first, then by level
  const qLower = q;
  Object.values(groups).forEach(g => {
    g.items.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(qLower) ? 0 : 1;
      const bTitle = b.title.toLowerCase().includes(qLower) ? 0 : 1;
      if (aTitle !== bTitle) return aTitle - bTitle;
      return a.lv - b.lv;
    });
  });

  let html = '';
  Object.values(groups).forEach(g => {
    html += '<div class="exsr-group-label">' + g.catIcon + ' ' + g.catLabel + ' (' + g.items.length + ' uppgifter)</div>';
    g.items.forEach(item => {
      const lvInfo = LEVEL_INFO[item.lv] || LEVEL_INFO[1];
      const titleHtml = exHighlightMatch(item.title, q);
      const snippetHtml = exHighlightMatch(item.snippet, q);
      html += '<button class="exsr-item" data-prob-id="' + item.id + '">' +
        '<div class="exsr-item-body">' +
          '<div class="exsr-item-title">' + titleHtml + '</div>' +
          '<div class="exsr-item-snippet">' + snippetHtml + '</div>' +
        '</div>' +
        '<span class="exsr-lvl-badge lvl-' + item.lv + '">' + lvInfo.name + '</span>' +
      '</button>';
    });
  });
  results.innerHTML = html;
  results.style.display = '';

  // Click handlers
  results.querySelectorAll('.exsr-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const probId = parseInt(btn.dataset.probId);
      exSearchNavigate(probId);
    });
  });
}

function exHighlightMatch(text, query) {
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp('(' + escaped + ')', 'gi');
  return text.replace(/</g,'&lt;').replace(regex, '<mark>$1</mark>');
}

function exSearchNavigate(probId) {
  // Find the problem in PROBLEMS (skip null entries)
  const prob = PROBLEMS.find(p => p && p.id === probId);
  if (!prob) {
    console.warn('Uppgift kunde inte laddas:', probId);
    showToast('Den här uppgiften kunde inte laddas. Prova att bläddra till kategorin manuellt eller sök på nytt.');
    return;
  }

  // Close search
  document.getElementById('exSearchResults').style.display = 'none';
  document.getElementById('exSearchInput').value = '';
  document.getElementById('exSearchClear').style.display = 'none';

  // Set category
  _curCat = prob.cat;
  document.querySelectorAll('#exRaknaCatRow .ex-cat-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === prob.cat));

  // Set level
  _curLevel = prob.lv;
  document.querySelectorAll('#levelRow .level-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.level) === prob.lv);
  });

  // Build problem list for this cat+level (filter out null entries)
  const filtered = PROBLEMS.filter(p => p && p.lv === prob.lv && p.cat === prob.cat);
  _probList = filtered;
  _curProbIdx = filtered.findIndex(p => p.id === probId);
  if (_curProbIdx < 0) _curProbIdx = 0;
  _exProbStatuses = _probList.map(() => 'pending');
  _exSkippedQueue = [];
  _probAnswered = false;
  renderProblem();
  exUpdatePanel();
  exStartPanelTimer();
}

(function initExSearch() {
  const input = document.getElementById('exSearchInput');
  const clearBtn = document.getElementById('exSearchClear');
  const results = document.getElementById('exSearchResults');
  if (!input) return;

  input.addEventListener('input', () => {
    clearTimeout(_exSearchDebounce);
    _exSearchDebounce = setTimeout(() => {
      exDoSearch(input.value.trim());
    }, 150);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.display = 'none';
    results.style.display = 'none';
    input.focus();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.ex-search-wrap')) {
      results.style.display = 'none';
    }
  });

  input.addEventListener('focus', () => {
    if (input.value.trim().length >= 2) {
      exDoSearch(input.value.trim());
    }
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      results.style.display = 'none';
      input.blur();
    }
  });
})();


// ===========================================================================
//  THEORY QUESTIONS TAB
// ===========================================================================



const TQ_CAT_INFO = {
  amnen:   { icon:'🧊', label:'Ämnen & faser' },
  metod:   { icon:'🔬', label:'Kemins arbetsmetoder' },
  atomer:  { icon:'⚛️', label:'Atomer & PS' },
  bind:    { icon:'🔗', label:'Kemiska bindningar' },
  org:     { icon:'🛢️', label:'Organisk kemi' },
  berakn:  { icon:'🔢', label:'Kemiska beräkningar' },
  syrabas: { icon:'⚗️', label:'Syror & baser' },
  energi:  { icon:'🔥', label:'Energi & kemi' },
  redox:   { icon:'⚡', label:'Reduktion & oxidation' },
};

let _tqCat = 'all', _tqLevel = 'all', _tqIdx = 0, _tqList = [], _tqAnswered = false;
let _tqStatuses = [], _tqSkippedQueue = [];
let _tqTimer = null, _tqSeconds = 0;
let _tqListOpen = false;

function initTQ() {
  const catRow = document.getElementById('tqCatRow');
  catRow.innerHTML = '<button class="ex-cat-filter-btn active" data-cat="all">📋 Alla kategorier</button>' +
    Object.entries(TQ_CAT_INFO).map(([k,v]) =>
      '<button class="ex-cat-filter-btn" data-cat="' + k + '">' + v.icon + ' ' + v.label + '</button>'
    ).join('');
  catRow.querySelectorAll('.ex-cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => tqSelectCat(btn.dataset.cat));
  });
  initScrollFade(catRow);

  const lvRow = document.getElementById('tqLevelRow');
  lvRow.innerHTML =
    '<button class="level-btn active" data-level="all">' +
      '<span class="level-icon">📚</span>' +
      '<span class="level-name">Alla nivåer</span>' +
      '<span class="level-desc">Visa samtliga</span>' +
    '</button>' +
    [1,2,3].map(lv => {
      const li = LEVEL_INFO[lv];
      return '<button class="level-btn" data-level="' + lv + '">' +
        '<span class="level-icon">' + li.icon + '</span>' +
        '<span class="level-name">' + li.name + '</span>' +
        '<span class="level-desc">' + li.desc + '</span>' +
      '</button>';
    }).join('');
  lvRow.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.level;
      tqSelectLevel(val === 'all' ? 'all' : parseInt(val));
    });
  });

  tqSelectLevel('all');
}

function tqSelectCat(cat) {
  _tqCat = cat;
  document.querySelectorAll('#tqCatRow .ex-cat-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat));
  _tqList = shuffleArray(THEORY_QUESTIONS.filter(q => (_tqLevel === 'all' || q.lv === _tqLevel) && (cat === 'all' || q.cat === cat)));
  _tqIdx = 0;
  _tqStatuses = _tqList.map(() => 'pending');
  _tqSkippedQueue = [];
  tqRender();
  tqUpdatePanel();
}

function tqSelectLevel(lv) {
  _tqLevel = lv;
  _tqList = shuffleArray(THEORY_QUESTIONS.filter(q => (lv === 'all' || q.lv === lv) && (_tqCat === 'all' || q.cat === _tqCat)));
  _tqIdx = 0;
  _tqStatuses = _tqList.map(() => 'pending');
  _tqSkippedQueue = [];
  document.querySelectorAll('#tqLevelRow .level-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === String(lv));
  });
  tqRender();
  tqUpdatePanel();
  tqStartTimer();
}

function tqStartTimer() {
  if (_tqTimer) clearInterval(_tqTimer);
  _tqSeconds = 0;
  _tqTimer = setInterval(function() {
    _tqSeconds++;
    const m = String(Math.floor(_tqSeconds / 60)).padStart(2, '0');
    const s = String(_tqSeconds % 60).padStart(2, '0');
    const el = document.getElementById('tqPanelTimer');
    if (el) el.textContent = m + ':' + s;
  }, 1000);
}

function tqStopTimer() {
  if (_tqTimer) { clearInterval(_tqTimer); _tqTimer = null; }
}

function tqRender() {
  const container = document.getElementById('tqContainer');
  if (!container || !_tqList.length) {
    if (container) container.innerHTML = '<div class="prob-card" style="text-align:center;padding:32px;color:var(--text2)">Inga frågor hittades för denna kombination av kategori och nivå.</div>';
    return;
  }
  const q = _tqList[_tqIdx];
  _tqAnswered = false;
  const total = _tqList.length;
  const li = LEVEL_INFO[q.lv];
  const catInfo = TQ_CAT_INFO[q.cat] || { icon:'', label:q.cat };
  const metaHtml =
    '<div class="prob-meta">' +
      '<span class="prob-tag">Fråga ' + (_tqIdx+1) + ' / ' + total + '</span>' +
      '<span class="prob-lvl-tag lvl-' + q.lv + '">' + li.icon + ' ' + li.name + '</span>' +
    '</div>' +
    '<div class="prob-q">' + catInfo.icon + ' ' + catInfo.label + '</div>';
  const btnHtml =
    '<div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">' +
      '<button class="prob-check" id="tqCheckBtn">\u2714 Kontrollera</button>' +
      '<button class="prob-action-btn" id="tqGiveUpBtn" style="background:var(--surface2);color:var(--text2);border:1px solid var(--border)">\uD83C\uDFF3\uFE0F Ge upp \u2013 visa svar</button>' +
    '</div>' +
    '<div id="tqModelPanel" class="tq-model-panel" style="display:none"></div>';

  if (q.typ === 'delfragor') {
    let delHtml = '<div class="tq-del-list">';
    q.delfragor.forEach(function(d, i) {
      delHtml +=
        '<div class="tq-del-block" data-delidx="' + i + '">' +
          '<div class="tq-del-header">' +
            '<span class="tq-del-bet">' + d.bet + '</span>' +
            '<span class="tq-del-fraga">' + d.fraga.replace(/\n/g,'<br>') + '</span>' +
          '</div>' +
          '<textarea class="tq-answer-input tq-del-input" rows="2" placeholder="Skriv svar f\u00f6r ' + d.bet + '..."></textarea>' +
          '<div class="tq-del-model" style="display:none"></div>' +
        '</div>';
    });
    delHtml += '</div>';
    container.innerHTML = '<div class="prob-card">' + metaHtml +
      '<p style="font-size:0.95rem;line-height:1.7;margin:8px 0 12px;color:var(--text);font-weight:600">' + q.q.replace(/\n/g,'<br>') + '</p>' +
      delHtml + btnHtml + '</div>';
  } else {
    container.innerHTML = '<div class="prob-card">' + metaHtml +
      '<p style="font-size:0.95rem;line-height:1.7;margin:8px 0 16px;color:var(--text)">' + q.q.replace(/\n/g, '<br>') + '</p>' +
      '<textarea id="tqAnswer" class="tq-answer-input" rows="4" placeholder="Skriv ditt svar h\u00e4r..."></textarea>' +
      btnHtml + '</div>';
    document.getElementById('tqAnswer').addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.ctrlKey) tqCheck(q);
    });
  }

  document.getElementById('tqCheckBtn').addEventListener('click', () => tqCheck(q));
  document.getElementById('tqGiveUpBtn').addEventListener('click', () => tqGiveUp(q));
  tqUpdatePanel();
}

function tqCheck(q) {
  if (_tqAnswered) return;
  if (q.typ === 'delfragor') {
    const inputs = document.querySelectorAll('#tqContainer .tq-del-input');
    let hasAny = false;
    inputs.forEach(function(inp) { if (inp.value.trim()) hasAny = true; });
    if (!hasAny) { showToast('Skriv minst ett svar först!', 'warning'); return; }
    _tqAnswered = true;
    _tqStatuses[_tqIdx] = 'done';
    document.getElementById('tqCheckBtn').disabled = true;
    document.getElementById('tqGiveUpBtn').style.display = 'none';
    tqShowDelModels(q, false);
    tqUpdatePanel();
    return;
  }
  const input = document.getElementById('tqAnswer');
  const val = (input ? input.value.trim() : '');
  if (!val) {
    showToast('Skriv ett svar först!', 'warning');
    return;
  }
  _tqAnswered = true;
  _tqStatuses[_tqIdx] = 'done';
  if (input) input.disabled = true;
  document.getElementById('tqCheckBtn').disabled = true;
  document.getElementById('tqGiveUpBtn').style.display = 'none';
  tqShowModel(q, val);
  tqUpdatePanel();
}

function tqGiveUp(q) {
  if (_tqAnswered) return;
  _tqAnswered = true;
  _tqStatuses[_tqIdx] = 'done';
  document.getElementById('tqCheckBtn').disabled = true;
  document.getElementById('tqGiveUpBtn').style.display = 'none';
  if (q.typ === 'delfragor') {
    tqShowDelModels(q, true);
    tqUpdatePanel();
    return;
  }
  const input = document.getElementById('tqAnswer');
  if (input) input.disabled = true;
  tqShowModel(q, null);
  tqUpdatePanel();
}

function tqShowDelModels(q, isGiveUp) {
  const blocks = document.querySelectorAll('#tqContainer .tq-del-block');
  blocks.forEach(function(block, i) {
    const d = q.delfragor[i];
    if (!d) return;
    const inp = block.querySelector('.tq-del-input');
    const modelDiv = block.querySelector('.tq-del-model');
    const userVal = inp ? inp.value.trim() : '';
    if (inp) inp.disabled = true;
    let html = '';
    if (userVal) {
      html += '<span class="sol-section-label">Ditt svar</span>';
      html += '<p style="margin:4px 0 10px;font-size:0.88rem;line-height:1.55;padding:8px 12px;background:var(--surface2);border-radius:8px;white-space:pre-wrap">' + userVal.replace(/</g,'&lt;') + '</p>';
    }
    html += '<span class="sol-section-label">\u2705 Modellsvar</span>';
    html += '<p style="margin:4px 0 0;font-size:0.88rem;line-height:1.6;padding:10px 14px;background:var(--green-light);border-radius:8px;border:1px solid rgba(5,150,105,0.2)">' + d.svar.replace(/\n/g,'<br>') + '</p>';
    modelDiv.innerHTML = html;
    modelDiv.style.display = '';
  });
  const panel = document.getElementById('tqModelPanel');
  if (panel) {
    panel.innerHTML = '<div class="sol-block"><p style="margin:10px 0 0;font-size:0.8rem;color:var(--text2)">J\u00e4mf\u00f6r dina svar med modellsvaren ovan.</p></div>';
    panel.style.display = '';
    panel.scrollIntoView({ behavior:'smooth', block:'nearest' });
  }
}

function tqShowModel(q, userAnswer) {
  const panel = document.getElementById('tqModelPanel');
  if (!panel) return;
  let html = '<div class="sol-block">';
  if (userAnswer) {
    html += '<span class="sol-section-label">Ditt svar</span>';
    html += '<p style="margin:4px 0 14px;color:var(--text);font-size:0.9rem;line-height:1.6;padding:10px 14px;background:var(--surface2);border-radius:8px;white-space:pre-wrap">' + userAnswer.replace(/</g,'&lt;') + '</p>';
  }
  html += '<span class="sol-section-label">\u2705 Modellsvar</span>';
  html += '<p style="margin:4px 0 0;color:var(--text);font-size:0.92rem;line-height:1.7;padding:12px 16px;background:var(--green-light);border-radius:10px;border:1px solid rgba(5,150,105,0.2)">' + q.model + '</p>';
  html += '<p style="margin:10px 0 0;font-size:0.8rem;color:var(--text2)">Jämför ditt svar med modellsvaret och bedöm hur nära du var. Fokusera på de kemiska begreppen och förklaringarna.</p>';
  html += '</div>';
  panel.innerHTML = html;
  panel.style.display = '';
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function tqUpdatePanel() {
  const bar = document.getElementById('tqStatusBar');
  const navRow = document.getElementById('tqNavRow');
  if (!bar) return;
  bar.style.display = 'flex';
  if (navRow) navRow.style.display = 'flex';

  const taskEl = document.getElementById('tqStatusTask');
  if (taskEl && _tqList.length) {
    taskEl.textContent = 'Fråga ' + (_tqIdx + 1) + '/' + _tqList.length;
  }

  const lvEl = document.getElementById('tqStatusLevel');
  if (lvEl) {
    const li = _tqLevel === 'all' ? { icon: '📚', name: 'Alla nivåer' } : LEVEL_INFO[_tqLevel];
    lvEl.textContent = li.icon + ' ' + li.name;
  }

  const prevBtn = document.getElementById('tqPrevBtn');
  const nextBtn = document.getElementById('tqNextBtn');
  const skipBtn = document.getElementById('tqSkipBtn');
  if (prevBtn) prevBtn.disabled = _tqIdx <= 0;
  if (nextBtn) nextBtn.disabled = _tqIdx >= _tqList.length - 1 && _tqSkippedQueue.length === 0;
  if (skipBtn) skipBtn.disabled = _tqAnswered;

  tqUpdateList();
}

function tqToggleList() {
  _tqListOpen = !_tqListOpen;
  const el = document.getElementById('tqProbList');
  if (el) el.classList.toggle('open', _tqListOpen);
  tqUpdateList();
}

function tqUpdateList() {
  const el = document.getElementById('tqProbList');
  if (!el || !_tqListOpen) return;
  el.innerHTML = _tqList.map((q, i) => {
    const s = _tqStatuses[i];
    const icon = s === 'done' ? '\u2705' : s === 'skipped' ? '\u23ED' : '\u2B1C';
    const cls = i === _tqIdx ? ' style="font-weight:700;background:var(--accent-light);border-radius:6px;"' : '';
    return '<div class="ex-prob-item" data-idx="' + i + '"' + cls + '>' + icon + ' Fråga ' + (i+1) + '</div>';
  }).join('');
  el.querySelectorAll('.ex-prob-item').forEach(item => {
    item.addEventListener('click', () => {
      _tqIdx = parseInt(item.dataset.idx);
      tqRender();
    });
  });
}

function tqNavPrev() {
  if (_tqIdx > 0) { _tqIdx--; tqRender(); }
}

function tqNavNext() {
  if (_tqIdx < _tqList.length - 1) {
    _tqIdx++;
    tqRender();
  } else if (_tqSkippedQueue.length > 0) {
    _tqIdx = _tqSkippedQueue.shift();
    tqRender();
  }
}

function tqNavSkip() {
  if (_tqAnswered) return;
  _tqStatuses[_tqIdx] = 'skipped';
  _tqSkippedQueue.push(_tqIdx);
  tqNavNext();
}

function tqResetAll() {
  _tqList = shuffleArray(THEORY_QUESTIONS.filter(q => (_tqLevel === 'all' || q.lv === _tqLevel) && (_tqCat === 'all' || q.cat === _tqCat)));
  _tqIdx = 0;
  _tqStatuses = _tqList.map(() => 'pending');
  _tqSkippedQueue = [];
  _tqListOpen = false;
  document.getElementById('tqProbList').style.display = 'none';
  tqRender();
  tqUpdatePanel();
  tqStartTimer();
}

// ── TQ Search ──────────────────────────────────────
let _tqSearchIndex = null;
let _tqSearchDebounce = null;

function buildTQSearchIndex() {
  if (_tqSearchIndex) return _tqSearchIndex;
  _tqSearchIndex = [];
  THEORY_QUESTIONS.forEach(q => {
    const catInfo = TQ_CAT_INFO[q.cat];
    const catLabel = catInfo ? catInfo.label : q.cat;
    const catIcon = catInfo ? catInfo.icon : '';
    const searchText = [q.q, q.model, catLabel].join(' ').toLowerCase();
    _tqSearchIndex.push({ id: q.id, lv: q.lv, cat: q.cat, catLabel, catIcon, question: q.q, searchText });
  });
  return _tqSearchIndex;
}

function tqDoSearch(query) {
  const results = document.getElementById('tqSearchResults');
  const clearBtn = document.getElementById('tqSearchClear');
  if (!query || query.length < 2) {
    results.style.display = 'none';
    clearBtn.style.display = query ? '' : 'none';
    return;
  }
  clearBtn.style.display = '';
  const index = buildTQSearchIndex();
  const qLower = query.toLowerCase();
  const matches = index.filter(item => item.searchText.includes(qLower));

  if (matches.length === 0) {
    results.innerHTML = '<div class="exsr-empty">Inga frågor hittades för "' + query.replace(/</g,'&lt;') + '".<br>Prova ett annat begrepp eller bläddra i kategorierna ovan.</div>';
    results.style.display = '';
    return;
  }

  const groups = {};
  matches.forEach(m => {
    if (!groups[m.cat]) groups[m.cat] = { catLabel: m.catLabel, catIcon: m.catIcon, items: [] };
    groups[m.cat].items.push(m);
  });

  Object.values(groups).forEach(g => {
    g.items.sort((a, b) => {
      const aQ = a.question.toLowerCase().includes(qLower) ? 0 : 1;
      const bQ = b.question.toLowerCase().includes(qLower) ? 0 : 1;
      if (aQ !== bQ) return aQ - bQ;
      return a.lv - b.lv;
    });
  });

  let html = '';
  Object.values(groups).forEach(g => {
    html += '<div class="exsr-group-label">' + g.catIcon + ' ' + g.catLabel + ' (' + g.items.length + ' frågor)</div>';
    g.items.forEach(item => {
      const lvInfo = LEVEL_INFO[item.lv] || LEVEL_INFO[1];
      const titleHtml = exHighlightMatch(item.question, query);
      html += '<button class="exsr-item" data-tq-id="' + item.id + '">' +
        '<div class="exsr-item-body">' +
          '<div class="exsr-item-title">' + titleHtml + '</div>' +
        '</div>' +
        '<span class="exsr-lvl-badge lvl-' + item.lv + '">' + lvInfo.name + '</span>' +
      '</button>';
    });
  });
  results.innerHTML = html;
  results.style.display = '';

  results.querySelectorAll('.exsr-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tqId = parseInt(btn.dataset.tqId);
      tqSearchNavigate(tqId);
    });
  });
}

function tqSearchNavigate(tqId) {
  const q = THEORY_QUESTIONS.find(t => t.id === tqId);
  if (!q) return;

  document.getElementById('tqSearchResults').style.display = 'none';
  document.getElementById('tqSearchInput').value = '';
  document.getElementById('tqSearchClear').style.display = 'none';

  _tqCat = q.cat;
  document.querySelectorAll('#tqCatRow .ex-cat-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === q.cat));

  _tqLevel = q.lv;
  document.querySelectorAll('#tqLevelRow .level-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.level) === q.lv);
  });

  const filtered = THEORY_QUESTIONS.filter(t => t.lv === q.lv && t.cat === q.cat);
  _tqList = filtered;
  _tqIdx = filtered.findIndex(t => t.id === tqId);
  if (_tqIdx < 0) _tqIdx = 0;
  _tqStatuses = _tqList.map(() => 'pending');
  _tqSkippedQueue = [];
  _tqAnswered = false;
  tqRender();
  tqUpdatePanel();
  tqStartTimer();
}

(function initTQSearch() {
  const input = document.getElementById('tqSearchInput');
  const clearBtn = document.getElementById('tqSearchClear');
  const results = document.getElementById('tqSearchResults');
  if (!input) return;

  input.addEventListener('input', () => {
    clearTimeout(_tqSearchDebounce);
    _tqSearchDebounce = setTimeout(() => {
      tqDoSearch(input.value.trim());
    }, 150);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.display = 'none';
    results.style.display = 'none';
    input.focus();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#tqScreen .ex-search-wrap')) {
      results.style.display = 'none';
    }
  });

  input.addEventListener('focus', () => {
    if (input.value.trim().length >= 2) {
      tqDoSearch(input.value.trim());
    }
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      results.style.display = 'none';
      input.blur();
    }
  });
})();



// ===========================================================================
//  INFÖR PROV TAB (EXAM PREP)
// ===========================================================================

const EXAM_CHAPTERS = [
  {
    id: 1,
    title: 'Ämnen, faser och reaktioner',
    icon: '🧊',
    color: '#3b82f6',
    desc: 'Materiens byggnad, fasomvandlingar och kemiska reaktioner',
    goals: [
      'Använda partikelmodellen för att beskriva faser och fasomvandlingar',
      'Förklara energiomsättningar vid fasomvandlingar',
      'Att energin inte kan förstöras eller förbrukas',
      'Använda formler för att beskriva fasomvandlingar',
      'Hur materien kan delas in i rena ämnen och blandningar',
      'Hur blandningar kan separeras',
      'Skillnaden mellan kvalitativ och kvantitativ analys',
      'Hur rena ämnen kan delas in i grundämnen och kemiska föreningar',
      'Skillnaden mellan en kemisk reaktion och en fysikalisk förändring'
    ],
    concepts: [
      { term: 'aggregationsform', def: 'De tre formerna som materia kan förekomma i: fast, flytande och gas.' },
      { term: 'analys', def: 'Undersökning av ett ämne för att ta reda på vad det innehåller eller hur mycket av varje beståndsdel som finns.' },
      { term: 'avdunstning', def: 'Övergång från flytande form till gasform som sker vid vätskans yta, vid temperaturer under kokpunkten.' },
      { term: 'blandning', def: 'Materia som består av två eller flera ämnen som inte är kemiskt bundna till varandra.' },
      { term: 'dekantering', def: 'Separationsmetod där man försiktigt häller av en vätska från en fast fällning eller bottensats.' },
      { term: 'densitet', def: 'Massa per volymenhet, vanligen uttryckt i g/cm³ eller kg/dm³.' },
      { term: 'destillation', def: 'Separationsmetod där en blandning värms så att en komponent förångas och sedan kondenseras och samlas upp.' },
      { term: 'energiprincipen', def: 'Energi kan varken skapas eller förstöras, bara omvandlas mellan olika former.' },
      { term: 'fas', def: 'En del av ett system som har enhetliga egenskaper och är avgränsad från andra delar genom tydliga gränser.' },
      { term: 'fasgräns', def: 'Gränsen mellan två faser, till exempel mellan is och vatten.' },
      { term: 'fast form', def: 'Aggregationsform där partiklarna sitter i fasta positioner och vibrerar. Har bestämd volym och form.' },
      { term: 'fast lösning', def: 'En homogen blandning i fast form, till exempel en legering av metaller.' },
      { term: 'fasövergång', def: 'Övergång från en aggregationsform till en annan, till exempel smältning eller kokning.' },
      { term: 'filtrering', def: 'Separationsmetod där en blandning passerar genom ett filter som skiljer fasta partiklar från en vätska.' },
      { term: 'flytande form', def: 'Aggregationsform där partiklarna rör sig fritt men hålls ihop. Har bestämd volym men tar formen av kärlet.' },
      { term: 'frysning', def: 'Fasövergång från flytande till fast form. Sker vid ämnets fryspunkt.' },
      { term: 'fryspunkt', def: 'Den temperatur vid vilken ett ämne övergår från flytande till fast form. Samma temperatur som smältpunkten.' },
      { term: 'fällning', def: 'En olöslig fast substans som bildas när två lösningar blandas och en produkt faller ut.' },
      { term: 'gasform', def: 'Aggregationsform där partiklarna rör sig fritt och fyller hela det tillgängliga utrymmet.' },
      { term: 'grundämne', def: 'Ett rent ämne som är uppbyggt av bara en sorts atomer och som inte kan delas upp i enklare ämnen med kemiska metoder.' },
      { term: 'heterogen', def: 'En blandning där man kan urskilja minst två olika beståndsdelar, till exempel olja och vatten.' },
      { term: 'homogen', def: 'En blandning där beståndsdelarna är jämnt fördelade och inte kan urskiljas, till exempel saltvatten.' },
      { term: 'indunstning', def: 'Separationsmetod där man låter vätskan avdunsta för att få fram det lösta ämnet i fast form.' },
      { term: 'karaktäristisk egenskap', def: 'En egenskap som kan användas för att identifiera ett ämne, till exempel smältpunkt, kokpunkt eller densitet.' },
      { term: 'kemisk förening', def: 'Ett rent ämne som är uppbyggt av minst två sorters atomer bundna i bestämda proportioner.' },
      { term: 'kemisk reaktion', def: 'En process där nya ämnen bildas genom att atomer omgrupperas. De nya ämnena har andra egenskaper än utgångsämnena.' },
      { term: 'kokning', def: 'Fasövergång från flytande till gasform som sker i hela vätskan vid kokpunkten.' },
      { term: 'kokpunkt', def: 'Den temperatur vid vilken ett ämne kokar, det vill säga övergår från flytande till gasform genom hela vätskan.' },
      { term: 'kondensation', def: 'Fasövergång från gasform till flytande form.' },
      { term: 'kvalitativ analys', def: 'Analys som syftar till att ta reda på vilka ämnen som ingår i ett prov.' },
      { term: 'kvantitativ analys', def: 'Analys som syftar till att bestämma hur mycket av varje ämne som finns i ett prov.' },
      { term: 'legering', def: 'En homogen blandning av två eller flera metaller i fast form, till exempel stål eller mässing.' },
      { term: 'lösning', def: 'En homogen blandning av ett löst ämne i ett lösningsmedel, till exempel salt löst i vatten.' },
      { term: 'materia', def: 'Allt som har massa och volym.' },
      { term: 'material', def: 'Materia som används i ett visst syfte, till exempel trä, plast eller metall.' },
      { term: 'partikel', def: 'Gemensam benämning för de minsta byggstenarna i materia, till exempel atomer, molekyler och joner.' },
      { term: 'produkt', def: 'Ämne som bildas vid en kemisk reaktion.' },
      { term: 'reagens', def: 'Ett ämne som används för att upptäcka eller identifiera ett annat ämne genom en kemisk reaktion.' },
      { term: 'reaktant', def: 'Utgångsämne som förbrukas i en kemisk reaktion.' },
      { term: 'rent ämne', def: 'Ett ämne som består av bara en sorts molekyler eller formelenheter, till exempel vatten eller koksalt.' },
      { term: 'sammansatt ämne', def: 'Annat namn för kemisk förening, det vill säga ett ämne som består av minst två sorters atomer.' },
      { term: 'sedimentering', def: 'Process där tyngre partiklar sjunker till botten i en vätska under inverkan av gravitationen.' },
      { term: 'separation', def: 'Process för att skilja olika ämnen i en blandning åt, till exempel genom filtrering eller destillation.' },
      { term: 'smältning', def: 'Fasövergång från fast form till flytande form.' },
      { term: 'smältpunkt', def: 'Den temperatur vid vilken ett ämne övergår från fast till flytande form.' },
      { term: 'stelning', def: 'Fasövergång från flytande form till fast form, samma process som frysning.' },
      { term: 'stelningspunkt', def: 'Den temperatur vid vilken ett ämne övergår från flytande till fast form. Samma som smältpunkt och fryspunkt.' },
      { term: 'sublimering', def: 'Fasövergång direkt från fast form till gasform utan att passera flytande form.' },
      { term: 'utgångsämne', def: 'Ämne som finns innan en kemisk reaktion sker, det vill säga en reaktant.' },
      { term: 'värmerörelse', def: 'Den ständiga, oordnade rörelse som alla partiklar i materia utför. Rörelsen ökar med temperaturen.' },
      { term: 'ånga', def: 'Gas som bildas vid avdunstning eller kokning av en vätska.' },
      { term: 'ångbildning', def: 'Övergång från flytande form till gasform, kan ske genom avdunstning eller kokning.' },
      { term: 'ämne', def: 'En form av materia med bestämd kemisk sammansättning och bestämda egenskaper.' }
    ],
    summary: [
      'Materia är allt som har volym och massa',
      'Ämnen finns i tre aggregationsformer: fast, flytande eller gas',
      'Smältning och kokning kräver värme',
      'Smältpunkt = fryspunkt/stelningspunkt',
      'Kokpunkt = kondensationspunkt',
      'Sublimering: fast form direkt till gasform',
      'Heterogen blandning: man ser minst två beståndsdelar',
      'Homogen blandning: man kan inte se beståndsdelarna',
      'Kvalitativ analys: vilka ämnen ingår',
      'Kvantitativ analys: hur mycket av varje ämne',
      'Grundämne: uppbyggt av en sorts atomer',
      'Kemisk förening: uppbyggt av minst två sorters atomer = rent ämne',
      'Vid kemiska reaktioner bildas nya ämnen med andra egenskaper',
      'Vid fysikalisk förändring bildas inga nya ämnen',
      'Energi är oförstörbar men kan omvandlas'
    ]
  },
  {
    id: 2,
    title: 'Kemins arbetsmetoder',
    icon: '🔬',
    color: '#8b5cf6',
    desc: 'Naturvetenskaplig metod, experiment och säkerhet i labbet',
    goals: [
      'Vad som kännetecknar en naturvetenskaplig frågeställning',
      'Att modeller och teorier är förenklingar av verkligheten',
      'Hur modeller och teorier kan förändras',
      'Hur problem och frågor kan avgränsas och studeras med hjälp av kemiska resonemang',
      'Det experimentella arbetets betydelse för att testa, omvärdera och uppdatera hypoteser, teorier och modeller',
      'Planering inklusive riskbedömning och genomförande av experiment',
      'Utvärdering av resultat och slutsatser genom analys av metodval och felkällor'
    ],
    concepts: [
      { term: 'alternativ hypotes', def: 'En annan möjlig förklaring till ett fenomen som kan testas om den ursprungliga hypotesen förkastas.' },
      { term: 'dokumentation', def: 'Skriftlig redovisning av ett experiments planering, genomförande och resultat.' },
      { term: 'experiment', def: 'En undersökning under kontrollerade förhållanden där man testar en hypotes genom att variera en faktor i taget.' },
      { term: 'faropiktogram', def: 'Standardiserade symboler som varnar för kemiska ämnens faror, till exempel brandfarligt, frätande eller hälsoskadligt.' },
      { term: 'felkälla', def: 'En faktor som kan orsaka avvikelser i mätresultat och påverka slutsatsernas tillförlitlighet.' },
      { term: 'grön kemi', def: 'Ett förhållningssätt inom kemi som syftar till att minska miljöpåverkan genom att utforma processer och produkter som är så miljövänliga som möjligt.' },
      { term: 'hypotes', def: 'Ett antagande eller en förklaring som kan testas genom experiment.' },
      { term: 'källkritik', def: 'Att bedöma och värdera trovärdigheten hos en informationskälla.' },
      { term: 'labbrapport', def: 'En strukturerad skriftlig redogörelse för ett experiment med syfte, metod, resultat och slutsats.' },
      { term: 'miljö', def: 'Den omgivning som ett ämne eller en organism befinner sig i, inklusive luft, vatten och mark.' },
      { term: 'modell', def: 'En förenklad beskrivning av verkligheten som används för att förstå och förklara fenomen.' },
      { term: 'naturvetenskap', def: 'Systematisk kunskap om naturen som bygger på observationer, experiment och logiska resonemang.' },
      { term: 'objektiv kunskap', def: 'Kunskap som beskriver hur något verkligen är, oberoende av individens upplevelse.' },
      { term: 'observation', def: 'Iakttagelse av ett fenomen med hjälp av sinnen eller instrument.' },
      { term: 'risk', def: 'Sannolikheten för att en fara leder till skada, i kombination med skadans allvarlighetsgrad.' },
      { term: 'riskbedömning', def: 'En systematisk genomgång av faror och risker innan ett experiment, med planering av förebyggande åtgärder.' },
      { term: 'subjektiv kunskap', def: 'Kunskap som bygger på individens personliga upplevelser och tolkning.' },
      { term: 'systematisk undersökning', def: 'En undersökning som genomförs på ett planerat och strukturerat sätt, där man varierar en faktor i taget.' },
      { term: 'teori', def: 'En väl underbyggd förklaring av ett naturfenomen som stöds av många experiment och observationer.' },
      { term: 'vetenskap', def: 'Systematisk kunskapsproduktion som bygger på prövbara hypoteser, experiment och kritisk granskning.' }
    ],
    summary: [
      'Dagens kunskap bygger på all tidigare forskning',
      'Syftet med naturvetenskap är att förstå verkligheten',
      'Objektiv kunskap: hur något verkligen är',
      'Subjektiv kunskap: hur individen upplever det',
      'Experiment lyfter ut en liten del av verkligheten under kontrollerade former',
      'Systematiskt arbete: variera en faktor i taget',
      'En laboratoriedagbok är ett anteckningsblock för kontinuerlig dokumentation',
      'En laborationsrapport ska vara så noggrann att experiment kan upprepas',
      'Vid riskbedömning identifieras faror och förebyggande åtgärder',
      'Faropiktogram beskriver ämnens hälsofaror, miljöfaror och fysikaliska faror',
      'Grön kemi: alltid sträva efter att utforma processer med liten miljöpåverkan'
    ]
  },
  {
    id: 3,
    title: 'Atomer och periodiska systemet',
    icon: '⚛️',
    color: '#06b6d4',
    desc: 'Atomens byggnad, elektronfördelning och det periodiska systemet',
    goals: [
      'Atomteorin',
      'Atomens byggnad',
      'Det experimentella arbetets betydelse för att testa och revidera hypoteser och modeller',
      'Några atomers och atomjoners elektronfördelning',
      'Hur atomer och joner kan exciteras och sända ut ljus',
      'Elektronfördelningens betydelse för atomers och joners reaktioner',
      'Att grundämnen kan delas upp i metaller, halvmetaller och icke-metaller',
      'Hur grundämnen benämns, grupperas och organiseras i periodiska systemet',
      'Förekomst, egenskaper och användningsområden för ett antal grundämnen'
    ],
    concepts: [
      { term: 'alfapartikel', def: 'En partikel som sänds ut vid radioaktivt sönderfall, bestående av två protoner och två neutroner (en heliumkärna).' },
      { term: 'alkalimetaller', def: 'Grundämnena i grupp 1 i periodiska systemet (utom väte). De är mjuka, reaktiva metaller med en valenselektron.' },
      { term: 'alkaliska jordartsmetaller', def: 'Grundämnena i grupp 2 i periodiska systemet. De har två valenselektroner och är reaktiva metaller.' },
      { term: 'atom', def: 'Den minsta enheten av ett grundämne som har grundämnets kemiska egenskaper. Består av kärna och elektroner.' },
      { term: 'atomkärna', def: 'Den centrala delen av atomen som innehåller protoner och neutroner. Kärnan har positiv laddning.' },
      { term: 'atomnummer', def: 'Antalet protoner i atomkärnan. Atomnumret bestämmer vilket grundämne atomen tillhör.' },
      { term: 'Bohrs atommodell', def: 'En modell där elektroner rör sig i bestämda banor runt kärnan, var och en med en bestämd energinivå.' },
      { term: 'elektron', def: 'En negativt laddad elementarpartikel som rör sig runt atomkärnan.' },
      { term: 'elektronskal', def: 'Energinivåer runt atomkärnan där elektronerna befinner sig. Skalen numreras inifrån med 1, 2, 3 osv.' },
      { term: 'elementarladdning', def: 'Den minsta möjliga elektriska laddningen, betecknas e. Protonen har +e och elektronen har -e.' },
      { term: 'elementarpartikel', def: 'De grundläggande byggstenarna i materia som inte kan delas upp ytterligare, till exempel elektroner och kvarkar.' },
      { term: 'energi', def: 'Förmåga att utföra arbete. Energi kan omvandlas mellan former men kan inte skapas eller förstöras.' },
      { term: 'energinivå', def: 'Ett bestämt energitillstånd som en elektron kan befinna sig i runt atomkärnan.' },
      { term: 'exciterad atom', def: 'En atom där en eller flera elektroner har hoppat upp till en högre energinivå efter att ha tillförts energi.' },
      { term: 'halogener', def: 'Grundämnena i grupp 17 (VII A) i periodiska systemet. De är reaktiva icke-metaller med sju valenselektroner.' },
      { term: 'halveringstid', def: 'Den tid det tar för hälften av atomerna i ett radioaktivt prov att sönderfalla.' },
      { term: 'isotop', def: 'Atomer av samma grundämne med samma antal protoner men olika antal neutroner, och därmed olika masstal.' },
      { term: '¹⁴C-metoden', def: 'En dateringsmetod som använder halveringstiden hos isotopen kol-14 för att bestämma åldern på organiskt material.' },
      { term: 'kärnpartikel', def: 'Partiklar i atomkärnan, det vill säga protoner och neutroner. Kallas också nukleoner.' },
      { term: 'laddning', def: 'En egenskap hos partiklar som orsakar elektriska krafter. Kan vara positiv eller negativ.' },
      { term: 'masstal', def: 'Summan av antalet protoner och neutroner i en atomkärna. Betecknas A.' },
      { term: 'neutron', def: 'En kärnpartikel utan elektrisk laddning. Har ungefär samma massa som en proton.' },
      { term: 'orbitaler', def: 'Områden i rymden runt atomkärnan där det är störst sannolikhet att hitta en elektron.' },
      { term: 'periodiska systemet', def: 'En tabell där alla grundämnen är ordnade efter stigande atomnummer i perioder och grupper.' },
      { term: 'proton', def: 'En positivt laddad kärnpartikel. Antalet protoner bestämmer vilket grundämne det är.' },
      { term: 'radioaktivt ämne', def: 'Ett ämne vars atomkärnor är instabila och spontant sönderfaller under utsändning av strålning.' },
      { term: 'reaktionsformel', def: 'En formel som visar vilka ämnen som reagerar (reaktanter) och vilka som bildas (produkter) i en kemisk reaktion.' },
      { term: 'Rutherfords atommodell', def: 'En modell där atomen har en liten, tung, positivt laddad kärna omgiven av elektroner i ett stort tomt utrymme.' },
      { term: 'Schrödingers atommodell', def: 'En kvantmekanisk modell där elektronernas position beskrivs som sannolikhetsmönster (orbitaler) i stället för bestämda banor.' },
      { term: 'strålning', def: 'Energi som sänds ut från radioaktiva ämnen i form av alfa-, beta- eller gammastrålning.' },
      { term: 'sällsynta jordartsmetaller', def: 'En grupp av 17 grundämnen med speciella egenskaper som används i elektronik och magneter.' },
      { term: 'tvåatomig molekyl', def: 'En molekyl som består av exakt två atomer, till exempel O₂, N₂ eller HCl.' },
      { term: 'valenselektron', def: 'Elektron i atomens yttersta skal. Valenselektronerna avgör atomens kemiska egenskaper.' },
      { term: 'ädelgaser', def: 'Grundämnena i grupp 18 i periodiska systemet. De har fullt ytterskal och är mycket oreaktiva.' },
      { term: 'ädelgasregeln', def: 'Atomer strävar efter att uppnå samma elektronfördelning som närmaste ädelgas, det vill säga åtta elektroner i yttersta skalet.' },
      { term: 'övergångsmetaller', def: 'Metaller i det periodiska systemets mittendel (grupp 3-12) som ofta bildar färgade joner och kan ha flera oxidationstal.' }
    ],
    summary: [
      'Alla ämnen är uppbyggda av atomer',
      'Atomer består av proton, neutron och elektron',
      'Elektroner har negativ enhetsladdning',
      'Protoner har positiv enhetsladdning',
      'Neutroner saknar laddning',
      'Atommassan är koncentrerad till kärnan',
      'Atomnummer = antal protoner i kärnan',
      'Masstal = summan av protoner och neutroner',
      'Isotoper: samma atomnummer, olika masstal',
      'Radioaktiva atomkärnor är instabila',
      'Elektroner befinner sig på energinivåer',
      'Valenselektroner = elektroner i yttersta skalet',
      'Ädelgasregeln: 8 elektroner i yttersta skalet',
      'Periodiska systemet ordnat efter atomnummer',
      'Samma grupp = likartade kemiska egenskaper',
      'Ny period = nytt elektronskal börjar fyllas',
      'Exciterad atom sänder ut karaktäristiskt ljus'
    ]
  },
  {
    id: 4,
    title: 'Kemiska bindningar',
    icon: '🔗',
    color: '#f59e0b',
    desc: 'Starka och svaga bindningar, egenskaper och löslighet',
    goals: [
      'Metallbindning, jonbindning och kovalent bindning',
      'Dipol-dipolbindning, vätebindning, jon-dipolbindning och van der Waalskrafter',
      'Hur kemiska bindningar inverkar på ämnens egenskaper som kokpunkt och löslighet',
      'Hur kemiska bindningar avgör ämnens användningsområden',
      'Fällningsreaktioner',
      'Hur intermolekylära bindningar möjliggör separation av ämnen vid kromatografi',
      'Hur molekylkristaller är uppbyggda'
    ],
    concepts: [
      { term: 'atomjon', def: 'En atom som har fått en elektrisk laddning genom att avge eller ta upp en eller flera elektroner.' },
      { term: 'bindande elektronpar', def: 'Ett elektronpar som delas mellan två atomer och bildar en kovalent bindning.' },
      { term: 'delokaliserade elektroner', def: 'Elektroner som inte är bundna till en enskild atom utan rör sig fritt, till exempel i metaller eller i bensenringen.' },
      { term: 'dipol', def: 'En molekyl med en ojämn laddningsfördelning som ger en positiv och en negativ ände.' },
      { term: 'dipol-dipolbindning', def: 'Intermolekylär kraft mellan polära molekyler (dipoler) som uppstår genom attraktion mellan deras positiva och negativa ändar.' },
      { term: 'dubbelbindning', def: 'Kovalent bindning där två atomer delar två gemensamma elektronpar.' },
      { term: 'elektronegativitet', def: 'Ett mått på en atoms förmåga att dra till sig bindningselektroner i en kovalent bindning.' },
      { term: 'elektronparbindning', def: 'Annat namn för kovalent bindning, där två atomer delar ett eller flera elektronpar.' },
      { term: 'enkelbindning', def: 'Kovalent bindning där två atomer delar ett gemensamt elektronpar.' },
      { term: 'formelenhet', def: 'Den minsta enheten av en jonförening som visar förhållandet mellan jonerna, till exempel NaCl.' },
      { term: 'hydratiserad jon', def: 'En jon som omges av vattenmolekyler genom jon-dipolbindningar när jonföreningen lösts i vatten.' },
      { term: 'icke-bindande elektronpar', def: 'Ett elektronpar i en atoms yttre skal som inte deltar i bindning. Kallas även fritt elektronpar.' },
      { term: 'intermolekylära krafter', def: 'Svaga krafter mellan molekyler, till exempel van der Waalskrafter, dipol-dipolbindning och vätebindning.' },
      { term: 'intramolekylär bindning', def: 'Stark kemisk bindning inom en molekyl, till exempel kovalent bindning.' },
      { term: 'jon', def: 'En atom eller grupp av atomer som har en elektrisk laddning genom att ha förlorat eller tagit upp elektroner.' },
      { term: 'jonbindning', def: 'Kemisk bindning som beror på elektrostatisk attraktion mellan positivt och negativt laddade joner.' },
      { term: 'jon-dipolbindning', def: 'Intermolekylär kraft mellan en jon och en polär molekyl, till exempel när salt löses i vatten.' },
      { term: 'joniseringsenergi', def: 'Den energi som krävs för att avlägsna en elektron från en atom i gasfas.' },
      { term: 'kovalent bindning', def: 'Kemisk bindning där två atomer delar ett eller flera elektronpar.' },
      { term: 'kristall', def: 'Ett fast ämne där partiklarna (atomer, joner eller molekyler) är ordnade i ett regelbundet mönster.' },
      { term: 'kromatografi', def: 'Separationsmetod som utnyttjar skillnader i ämnens intermolekylära krafter mot en stationär och en mobil fas.' },
      { term: 'lika löser lika', def: 'Princip som innebär att polära ämnen löser sig i polära lösningsmedel och opolära ämnen löser sig i opolära lösningsmedel.' },
      { term: 'lösningsmedel', def: 'Det ämne i en lösning som finns i störst mängd och där andra ämnen är lösta, till exempel vatten.' },
      { term: 'metallbindning', def: 'Bindning i metaller där positivt laddade metalljoner hålls ihop av ett moln av fria, delokaliserade elektroner.' },
      { term: 'opolär kovalent bindning', def: 'Kovalent bindning mellan atomer med lika elektronegativitet, där elektronerna delas lika.' },
      { term: 'polaritet', def: 'Ojämn laddningsfördelning i en bindning eller molekyl som beror på skillnad i elektronegativitet.' },
      { term: 'polär kovalent bindning', def: 'Kovalent bindning mellan atomer med olika elektronegativitet, där elektronerna dras mer mot den ena atomen.' },
      { term: 'rymdstruktur', def: 'Den tredimensionella formen hos en molekyl som bestäms av bindningsvinklar och fria elektronpar.' },
      { term: 'strukturformel', def: 'En formel som visar hur atomerna i en molekyl är bundna till varandra med streck för bindningar.' },
      { term: 'trippelbindning', def: 'Kovalent bindning där två atomer delar tre gemensamma elektronpar.' },
      { term: 'van der Waalskrafter', def: 'Svaga intermolekylära krafter som uppstår genom tillfälliga dipoler. Finns mellan alla molekyler.' },
      { term: 'vätebindning', def: 'Stark intermolekylär kraft som uppstår när väte är bundet till F, O eller N och attraheras av ett fritt elektronpar på en annan F-, O- eller N-atom.' },
      { term: 'ädelgasregeln (oktettregeln)', def: 'Atomer strävar efter att uppnå åtta elektroner i sitt yttersta skal genom att bilda kemiska bindningar.' }
    ],
    summary: [
      'Tre typer av starka kemiska bindningar: metallbindning, jonbindning, kovalent bindning',
      'Metallbindning: delokaliserade elektroner',
      'Jonbindning: elektrostatisk attraktion mellan positiva och negativa joner',
      'Jonföreningar har höga smältpunkter',
      'Kovalent bindning via gemensamma elektronpar',
      'Enkel-, dubbel- och trippelbindningar',
      'Elektronegativitet mäter förmågan att dra till sig elektroner',
      'Polär kovalent bindning vid olika elektronegativitet',
      'Dipoler är polära molekyler',
      'Intermolekylära krafter: van der Waalskrafter, dipol-dipolbindning, vätebindning, jon-dipolbindning',
      'Vätebindning: starkast av de intermolekylära, mellan F, O, N och väte',
      'Lika löser lika-principen',
      'Kromatografi som separationsmetod'
    ]
  },
  {
    id: 5,
    title: 'Organiska ämnen är kolföreningar',
    icon: '🛢️',
    color: '#10b981',
    desc: 'Kolväten, funktionella grupper och organiska ämnesklasser',
    goals: [
      'Hur organiska ämnen delas in i ämnesklasser',
      'Vilka funktionella grupper som hör till vilken ämnesklass',
      'Hur den funktionella gruppens struktur påverkar ämnets egenskaper',
      'Hur man ritar och tolkar strukturformler samt namnger organiska föreningar',
      'Begreppet isomeri',
      'Skillnader och likheter mellan biobränslen och fossila bränslen',
      'Egenskaper och användningsområden för organiska föreningar inom ämnesklasserna alkaner, alkener, alkyner, arener, alkoholer och karboxylsyror'
    ],
    concepts: [
      { term: 'alifatiska kolväten', def: 'Kolväten med raka eller förgrenade kolkedjor, utan bensenring. Inkluderar alkaner, alkener och alkyner.' },
      { term: 'alkan', def: 'Mättat kolväte med enbart enkelbindningar mellan kolatomerna. Allmän formel CₙH₂ₙ₊₂.' },
      { term: 'alken', def: 'Omättat kolväte med minst en dubbelbindning mellan kolatomer. Allmän formel CₙH₂ₙ.' },
      { term: 'alkohol (envärd/tvåvärd/trevärd)', def: 'Organisk förening med en eller flera hydroxylgrupper (-OH). Envärd har en OH-grupp, tvåvärd har två och trevärd har tre.' },
      { term: 'alkyn', def: 'Omättat kolväte med minst en trippelbindning mellan kolatomer. Allmän formel CₙH₂ₙ₋₂.' },
      { term: 'aren', def: 'Aromatiskt kolväte som innehåller en bensenring med delokaliserade elektroner.' },
      { term: 'bensen', def: 'Den enklaste arenen med formeln C₆H₆, en ring av sex kolatomer med delokaliserade elektroner.' },
      { term: 'biobränsle', def: 'Bränsle framställt från biomassa, till exempel etanol och biogas. Har kortare kolkretsloppstid än fossila bränslen.' },
      { term: 'CMR-ämne', def: 'Ämne som är cancerframkallande (C), mutagent (M) eller reproduktionstoxiskt (R).' },
      { term: 'cykliskt kolväte', def: 'Ett kolväte där kolatomerna bildar en ring, till exempel cyklohexan.' },
      { term: 'fossilt bränsle', def: 'Bränsle som bildats under miljontals år av döda organismer, till exempel råolja, naturgas och kol.' },
      { term: 'funktionell grupp', def: 'En atomgrupp i en organisk molekyl som bestämmer ämnets kemiska egenskaper och ämnesklasstillhörighet.' },
      { term: 'hydroxylgrupp', def: 'Den funktionella gruppen -OH som kännetecknar alkoholer.' },
      { term: 'isomeri', def: 'Fenomen där två eller flera föreningar har samma molekylformel men olika strukturformel och därmed olika egenskaper.' },
      { term: 'karboxylgrupp', def: 'Den funktionella gruppen -COOH som kännetecknar karboxylsyror.' },
      { term: 'karboxylsyra', def: 'Organisk syra med den funktionella gruppen -COOH, till exempel ättiksyra.' },
      { term: 'kolväte', def: 'Organisk förening som enbart består av kol- och väteatomer.' },
      { term: 'molekylformel', def: 'En formel som visar antal och typ av atomer i en molekyl, till exempel C₂H₆O.' },
      { term: 'monomer', def: 'En liten molekyl som kan kopplas ihop med andra likadana molekyler till en polymer.' },
      { term: 'polymer', def: 'En stor molekyl som är uppbyggd av många upprepade monomerer kopplade i en lång kedja.' },
      { term: 'rymdstruktur', def: 'Den tredimensionella formen hos en organisk molekyl som påverkar dess egenskaper.' },
      { term: 'skelettformel', def: 'Förenklad strukturformel där kolatomerna visas som knutpunkter och väteatomer vid kol utelämnas.' },
      { term: 'substituent', def: 'En atom eller atomgrupp som ersatt en väteatom på en kolkedja, till exempel en metylgrupp.' },
      { term: 'syntes', def: 'En kemisk reaktion där ett nytt ämne framställs från enklare utgångsämnen.' },
      { term: 'systematiskt namn', def: 'Namn som följer IUPAC:s namngivningsregler och ger information om ämnets struktur.' },
      { term: 'trivialnamn', def: 'Ett traditionellt, vedertaget namn på ett ämne som inte följer systematiska namngivningsregler, till exempel aceton.' },
      { term: 'ämensklass', def: 'Grupp av organiska föreningar med samma funktionella grupp, till exempel alkoholer eller karboxylsyror.' }
    ],
    summary: [
      'Kolväten innehåller bara kol och väte',
      'Kokpunkten ökar med antalet kolatomer',
      'Isomerer: samma molekylformel, olika strukturformel',
      'Alkaner: mättade, ändelse -an',
      'Alkener: dubbelbindning, ändelse -en',
      'Alkyner: trippelbindning, ändelse -yn',
      'Arener: bensenring, delokaliserade elektroner',
      'Fossila bränslen: råolja, naturgas, kol',
      'Biobränslen: från växter, kortare omloppstid',
      'Polymerer: upprepade monomerer',
      'Alkoholer: OH-grupp, ändelse -ol',
      'Karboxylsyror: -COOH-grupp',
      'Estrar bildas av karboxylsyra + alkohol',
      'Funktionell grupp bestämmer egenskaperna'
    ]
  },
  {
    id: 6,
    title: 'Kemiska beräkningar',
    icon: '🔢',
    color: '#ec4899',
    desc: 'Mol, molmassa, koncentration och stökiometri',
    goals: [
      'Hur kemister använder vågen för att räkna partiklar',
      'Den universella atommassaenheten, unit',
      'Hur formelmassan beräknas',
      'Substansmängden 1 mol',
      'Sambanden mellan mätetal för molmassa och atommassa',
      'Sambandet mellan massa (m), substansmängd (n) och molmassa (M)',
      'Hur den empiriska formeln beräknas',
      'Hur lösningars halt kan uttryckas',
      'Sambandet mellan koncentrationen (c), substansmängden (n) och volymen (V)',
      'Hur reaktionsformeln för en reaktion skrivs och balanseras',
      'Hur beräkningar utförs med reaktionsformel och substansmängdsförhållande',
      'Sambandet mellan volymen för en gas (V), molvolymen (Vm) och substansmängden (n)'
    ],
    concepts: [
      { term: 'atommassa', def: 'Medelvärdet av massorna hos ett grundämnes isotoper, viktat efter deras naturliga förekomst. Anges i enheten u.' },
      { term: 'Avogadros konstant', def: 'Antalet partiklar i en mol: Nₐ = 6,022 × 10²³ mol⁻¹.' },
      { term: 'ekvivalenta mängder', def: 'Substansmängder av reaktanter som reagerar fullständigt med varandra enligt reaktionsformelns koefficienter.' },
      { term: 'empirisk formel', def: 'Den enklaste formeln som visar förhållandet mellan atomslagen i en förening, till exempel CH₂O.' },
      { term: 'enhet', def: 'En bestämd storlek som används som referens vid mätningar, till exempel gram, mol eller liter.' },
      { term: 'formelenhet', def: 'Den minsta enheten som representerar sammansättningen av ett ämne, till exempel NaCl för natriumklorid.' },
      { term: 'formmassa', def: 'Summan av atommassorna för alla atomer i en formelenhet, uttryckt i enheten u.' },
      { term: 'fällning', def: 'En olöslig produkt som bildas och faller ut ur en lösning vid en kemisk reaktion.' },
      { term: 'koefficienter', def: 'Talen framför formlerna i en balanserad reaktionsformel som anger substansmängdsförhållandet.' },
      { term: 'koncentration', def: 'Substansmängd per volymenhet lösning, c = n/V. Enheten är mol/dm³.' },
      { term: 'lösningsmedel', def: 'Det ämne (vanligtvis en vätska) i vilket andra ämnen löses.' },
      { term: 'masshalt', def: 'Den lösta substansens massa uttryckt som andel av lösningens totala massa.' },
      { term: 'massprocent', def: 'Masshalt uttryckt i procent, det vill säga gram löst ämne per 100 gram lösning.' },
      { term: 'molmassa', def: 'Massan av en mol av ett ämne, uttryckt i g/mol. Mätetalet är lika med formelmassan i u.' },
      { term: 'molvolym', def: 'Volymen som upptas av en mol gas. Vid 0 °C och 1 atm är molvolymen 22,4 dm³/mol.' },
      { term: 'mätetal', def: 'Det numeriska värdet i en mätning, utan enhet.' },
      { term: 'mättad lösning', def: 'En lösning som innehåller maximalt med löst ämne vid en viss temperatur.' },
      { term: 'produkter', def: 'Ämnen som bildas vid en kemisk reaktion, skrivs till höger om pilen i reaktionsformeln.' },
      { term: 'reagens', def: 'Ett kemikalie som tillsätts för att en viss kemisk reaktion ska äga rum.' },
      { term: 'reaktanter', def: 'Utgångsämnen som förbrukas i en kemisk reaktion, skrivs till vänster om pilen.' },
      { term: 'storhet', def: 'En mätbar egenskap, till exempel massa, volym eller temperatur.' },
      { term: 'stökiometri', def: 'Läran om mängdförhållandena mellan reaktanter och produkter i kemiska reaktioner.' },
      { term: 'substansmängd', def: 'En storhet som anger mängden av ett ämne i mol. Betecknas n.' },
      { term: 'substansmängdsförhållande', def: 'Förhållandet mellan substansmängderna av olika ämnen i en reaktion, givet av koefficienterna.' },
      { term: 'utbyte', def: 'Den mängd produkt som faktiskt fås i en reaktion, ofta uttryckt som procentuellt utbyte.' },
      { term: 'volymhalt', def: 'Volymen av ett ämne uttryckt som andel av den totala volymen, till exempel volymprocent.' },
      { term: 'överskott', def: 'Den reaktant som finns i större mängd än vad som krävs för att reagera fullständigt med den andra reaktanten.' }
    ],
    summary: [
      'Atommassa: medelvärde av isotopernas massor',
      'Enheten för atommassa: u',
      '1 u = 1/12 av massan för ¹²C',
      'Formelmassan = summan av atommassor i formeln',
      '1 mol = 6,022 × 10²³ formelenheter',
      'Molmassa M: massa per mol, enhet g/mol',
      'm = M × n eller n = m/M',
      'Avogadros konstant Na = 6,022 × 10²³ mol⁻¹',
      'Koncentration c = n/V, enhet mol/dm³',
      'Molvolymen Vm vid 0°C = 22,4 dm³/mol',
      'Vid rumstemperatur ≈ 24 dm³/mol',
      'V = n × Vm'
    ]
  },
  {
    id: 7,
    title: 'Syror och baser',
    icon: '⚗️',
    color: '#ef4444',
    desc: 'Protolys, pH-skalan, neutralisation och titrering',
    goals: [
      'Syrors och basers egenskaper',
      'Hur oxoniumjon H₃O⁺ och hydroxidjon OH⁻ bildas',
      'Hur en syra respektive bas definieras',
      'Hur en sur respektive basisk lösning definieras',
      'Några vanliga syror och baser',
      'Vad en protolysreaktion är',
      'Vad en svag och stark syra respektive bas är',
      'Vattnets autoprotolys',
      'Sambandet mellan [H₃O⁺] och pH',
      'pH-skalan',
      'Neutralisationsreaktioner',
      'Titrering som analysmetod'
    ],
    concepts: [
      { term: 'amfolyt', def: 'Ett ämne som kan fungera både som syra och som bas, till exempel vatten.' },
      { term: 'autoprotolys', def: 'En reaktion där två molekyler av samma ämne överlämnar en proton till varandra, till exempel vattnets autoprotolys.' },
      { term: 'bas', def: 'Ett ämne som tar upp protoner (H⁺) i en kemisk reaktion.' },
      { term: 'basisk lösning', def: 'En lösning där koncentrationen av hydroxidjoner OH⁻ är större än koncentrationen av oxoniumjoner H₃O⁺. pH > 7.' },
      { term: 'buffertlösning', def: 'En lösning som motverkar pH-förändringar vid tillsats av små mängder syra eller bas.' },
      { term: 'ekvivalenspunkt', def: 'Den punkt i en titrering där ekvivalenta mängder syra och bas har reagerat med varandra.' },
      { term: 'hydroxidjon', def: 'Negativt laddad jon med formeln OH⁻ som bildas när baser löses i vatten.' },
      { term: 'indikator', def: 'Ett ämne som ändrar färg beroende på pH-värdet i en lösning, till exempel BTB eller fenolftalein.' },
      { term: 'kemisk jämvikt', def: 'Tillstånd där den framåtriktade och den bakåtriktade reaktionen sker lika snabbt, så att koncentrationerna är konstanta.' },
      { term: 'koncentrerad syra', def: 'En syra med hög halt av syramolekyler i lösningen.' },
      { term: 'neutralisation', def: 'En reaktion mellan en syra och en bas som bildar vatten och ett salt.' },
      { term: 'omslagsintervall', def: 'Det pH-område inom vilket en indikator ändrar färg.' },
      { term: 'oxoniumjon', def: 'Positivt laddad jon med formeln H₃O⁺ som bildas när en syra avger en proton till vatten.' },
      { term: 'pH-värde', def: 'Ett mått på surhetsgraden i en lösning. pH = -lg[H₃O⁺].' },
      { term: 'protolys', def: 'En kemisk reaktion där en proton (H⁺) överförs från en syra till en bas.' },
      { term: 'protolysgrad', def: 'Andelen syra- eller basmolekyler som har reagerat i en protolysreaktion.' },
      { term: 'SIV-regeln', def: 'Syran I Vattnet: vid spädning ska syran alltid hällas i vattnet, inte tvärtom.' },
      { term: 'stark bas', def: 'En bas som fullständigt dissocierar i vatten och avger alla sina hydroxidjoner.' },
      { term: 'stark syra', def: 'En syra som fullständigt protolyserar i vatten och avger alla sina protoner.' },
      { term: 'sur lösning', def: 'En lösning där koncentrationen av oxoniumjoner H₃O⁺ är större än koncentrationen av hydroxidjoner OH⁻. pH < 7.' },
      { term: 'surhetsgrad', def: 'Ett mått på hur sur en lösning är, uttryckt som pH-värde.' },
      { term: 'svag bas', def: 'En bas som bara delvis tar upp protoner i vatten. Jämvikt ställer in sig.' },
      { term: 'svag syra', def: 'En syra som bara delvis protolyserar i vatten. Jämvikt ställer in sig.' },
      { term: 'syra', def: 'Ett ämne som avger protoner (H⁺) i en kemisk reaktion.' },
      { term: 'syra-baspar', def: 'En syra och dess korresponderande bas som skiljer sig åt med en proton.' },
      { term: 'syra-basreaktion', def: 'En kemisk reaktion där en proton överförs från en syra till en bas (protolys).' },
      { term: 'titrand', def: 'Den lösning med okänd koncentration som analyseras vid en titrering.' },
      { term: 'titrator', def: 'Den lösning med känd koncentration som tillsätts från byretten vid en titrering.' },
      { term: 'titrering', def: 'En analysmetod där man bestämmer en okänd koncentration genom att tillsätta en lösning med känd koncentration till ekvivalenspunkten.' },
      { term: 'tvåprotonig syra', def: 'En syra som kan avge två protoner per molekyl, till exempel svavelsyra H₂SO₄.' },
      { term: 'vattnets autoprotolys', def: 'Reaktionen där två vattenmolekyler reagerar med varandra och bildar H₃O⁺ och OH⁻.' }
    ],
    summary: [
      'Syror avger protoner (H⁺)',
      'Baser tar upp protoner',
      'Oxoniumjon H₃O⁺ bildas i vattenlösning',
      'Hydroxidjon OH⁻ bildas av baser',
      'Syra-baspar skiljer sig med en proton',
      'SIV: Syran I Vattnet',
      'pH = -lg[H₃O⁺]',
      'pOH = -lg[OH⁻]',
      'pH + pOH = 14,00',
      'Stark syra: fullständig protolys',
      'Svag syra: ofullständig protolys',
      'Vattnets autoprotolys',
      'Neutralisation: syra + bas → vatten + salt',
      'Titrering: bestäm okänd koncentration',
      'Ekvivalenspunkt: ekvivalenta mängder syra och bas',
      'Buffert motverkar pH-förändring'
    ]
  },
  {
    id: 8,
    title: 'Energi och kemi',
    icon: '🔥',
    color: '#f97316',
    desc: 'Entalpi, entropi, exoterma och endoterma reaktioner',
    goals: [
      'Ett ämnes temperatur som ett mått på partiklarnas värmerörelser',
      'Energiomsättningar vid temperaturändringar',
      'Sambandet mellan kemisk energi och kemiska bindningar',
      'Energiomsättningar vid exoterma och endoterma reaktioner',
      'Hur man bestämmer entalpiändringen vid en kemisk reaktion med en kalorimeter',
      'Hur man använder bildningsentalpier och bindningsenergier för att beräkna entalpiändringar',
      'Vad som styr hur mycket energi som kan frigöras från bränslen',
      'Vilka drivkrafterna är vid spontana kemiska reaktioner',
      'Energiomsättningar och entropi vid smältning och stelning'
    ],
    concepts: [
      { term: 'aktiveringsenergi', def: 'Den minsta energi som måste tillföras för att en kemisk reaktion ska starta.' },
      { term: 'bildningsentalpi', def: 'Entalpiändringen när en mol av en förening bildas från sina grundämnen i standardtillstånd.' },
      { term: 'bindningsenergi', def: 'Den energi som krävs för att bryta en kemisk bindning i en molekyl i gasfas.' },
      { term: 'endoterm reaktion', def: 'En kemisk reaktion som tar upp energi från omgivningen. ΔH > 0.' },
      { term: 'energi', def: 'Förmåga att utföra arbete eller överföra värme. Mäts i joule (J).' },
      { term: 'energiinnehåll', def: 'Den mängd energi som lagras i ett ämnes kemiska bindningar och kan frigöras vid en kemisk reaktion.' },
      { term: 'entalpi', def: 'En storhet som beskriver energiinnehållet i ett system vid konstant tryck. Betecknas H.' },
      { term: 'entalpiändring', def: 'Skillnaden i entalpi mellan produkter och reaktanter: ΔH = H(produkter) - H(reaktanter).' },
      { term: 'entropi', def: 'Ett mått på oordningen eller antalet möjliga mikrotillstånd i ett system. Betecknas S.' },
      { term: 'exoterm reaktion', def: 'En kemisk reaktion som avger energi till omgivningen. ΔH < 0.' },
      { term: 'kalorimeter', def: 'En apparat som mäter energiomvandlingar vid kemiska reaktioner genom att registrera temperaturförändringar.' },
      { term: 'kemisk energi', def: 'Energi som är lagrad i kemiska bindningar och som kan frigöras eller upptas vid kemiska reaktioner.' },
      { term: 'oordning', def: 'Grad av slumpmässig fördelning av partiklar i ett system. Högre oordning innebär högre entropi.' },
      { term: 'specifik värmekapacitet', def: 'Den energi som krävs för att höja temperaturen hos 1 gram av ett ämne med 1 °C.' },
      { term: 'spontan reaktion', def: 'En reaktion som sker av sig själv utan kontinuerlig energitillförsel utifrån.' },
      { term: 'temperatur', def: 'Ett mått på den genomsnittliga rörelseenergin hos partiklarna i ett ämne.' },
      { term: 'värmeenergi', def: 'Energi som överförs mellan system på grund av temperaturskillnader.' },
      { term: 'värmeförlust', def: 'Energi som förloras till omgivningen vid en reaktion eller process, vilket påverkar mätningens noggrannhet.' },
      { term: 'värmerörelse', def: 'Den oordnade rörelse som alla partiklar utför och som ökar med stigande temperatur.' }
    ],
    summary: [
      'Termokemi: energiomvandlingar vid kemiska reaktioner',
      'Energi i ett avgränsat system är konstant',
      'Aktiveringsenergi måste tillföras',
      'Exoterm: energi frigörs, ΔH < 0',
      'Endoterm: energi tas upp, ΔH > 0',
      'Energi mäts i joule (J)',
      'E = c(H₂O) × m × ΔT (kalorimeter)',
      'ΔH = H(produkter) - H(reaktanter)',
      'Bildningsentalpi: entalpiändring vid bildning av 1 mol från grundämnena',
      'Bränslen med C och H har högt energiinnehåll',
      'Spontana reaktioner behöver ingen energitillförsel',
      'Exoterma reaktioner sker ofta spontant',
      'Entropi S = graden av oordning'
    ]
  },
  {
    id: 9,
    title: 'Reduktion och oxidation',
    icon: '⚡',
    color: '#6366f1',
    desc: 'Redoxreaktioner, galvaniska celler, elektrolys och korrosion',
    goals: [
      'Elektronövergångar vid redoxreaktioner',
      'Hur spänningsserien kan förutsäga om en redoxreaktion sker spontant',
      'Vilka metaller som är väteutdrivande',
      'Två metoder för att balansera redoxreaktioner',
      'Oxidationsmedel och reduktionsmedel',
      'Hur man namnger kemiska föreningar med hjälp av oxidationstal',
      'Hur elektrisk energi frigörs i galvaniska celler (batterier)',
      'Hur normalpotentialer kan användas för att förutsäga spänningen över en galvanisk cell',
      'Hur elektrisk energi kan användas för att sönderdela stabila jonföreningar med hjälp av elektrolys',
      'Redoxreaktioner vid korrosion samt korrosionsskydd'
    ],
    concepts: [
      { term: 'alkaliskt batteri', def: 'Ett vanligt engångsbatteri med alkalisk elektrolyt (kaliumhydroxid) där zink oxideras och mangandioxid reduceras.' },
      { term: 'anjon', def: 'En negativt laddad jon som har tagit upp en eller flera elektroner.' },
      { term: 'anod', def: 'Elektroden där oxidation sker. I en galvanisk cell är anoden den negativa polen.' },
      { term: 'blyackumulator', def: 'Ett uppladdningsbart batteri med blyplåtar och svavelsyra som elektrolyt, används i bilar.' },
      { term: 'bränslecell', def: 'En galvanisk cell som kontinuerligt omvandlar kemisk energi från ett bränsle (ofta vätgas) till elektrisk energi.' },
      { term: 'cellschema', def: 'En förkortad notation som beskriver uppbyggnaden av en galvanisk cell med elektrod- och elektrolytbeteckningar.' },
      { term: 'Daniells element', def: 'En galvanisk cell med en zinkelektrod i zinksulfatlösning och en kopparelektrod i kopparsulfatlösning.' },
      { term: 'elektrolys', def: 'En process där elektrisk energi används för att driva en icke-spontan kemisk reaktion.' },
      { term: 'elektrolyt', def: 'Ett ämne som leder elektrisk ström i lösning eller i smält form tack vare fria joner.' },
      { term: 'elektronövergång', def: 'Överföring av elektroner från ett ämne (reduktionsmedel) till ett annat (oxidationsmedel) i en redoxreaktion.' },
      { term: 'elektronövergångsmetoden', def: 'Metod för att balansera redoxreaktioner genom att skriva separata delformler för oxidation och reduktion.' },
      { term: 'galvanisk cell', def: 'En anordning som omvandlar kemisk energi till elektrisk energi genom en spontan redoxreaktion.' },
      { term: 'halvcell', def: 'En del av en galvanisk cell bestående av en elektrod i kontakt med en elektrolytlösning.' },
      { term: 'katjon', def: 'En positivt laddad jon som har avgett en eller flera elektroner.' },
      { term: 'katod', def: 'Elektroden där reduktion sker. I en galvanisk cell är katoden den positiva polen.' },
      { term: 'korrosion', def: 'Oönskad oxidation av metaller, till exempel rost som bildas när järn reagerar med syre och vatten.' },
      { term: 'korrosionsskydd', def: 'Metoder för att förhindra korrosion, till exempel målning, förzinkning eller användning av offeranoder.' },
      { term: 'litiumbatteri', def: 'Ett batteri med hög energitäthet som använder litium eller litiumjoner, vanligt i elektronik.' },
      { term: 'lokalelement', def: 'En oönskad galvanisk cell som bildas när två olika metaller är i kontakt med varandra i en elektrolyt.' },
      { term: 'normalpotential', def: 'Spänningen hos en halvcell mätt mot standardväteelektroden under standardförhållanden.' },
      { term: 'oxidation', def: 'En reaktion där ett ämne avger elektroner och dess oxidationstal ökar.' },
      { term: 'oxidationsmedel', def: 'Ett ämne som oxiderar andra ämnen genom att ta upp elektroner. Oxidationsmedlet reduceras själv.' },
      { term: 'oxidationstal', def: 'Ett tal som anger den tänkta laddningen hos en atom i en förening, beräknad utifrån givna regler.' },
      { term: 'oxidationstalsändring', def: 'Förändringen av ett ämnes oxidationstal i en kemisk reaktion, visar om ämnet oxideras eller reduceras.' },
      { term: 'oxidationstalsmetoden', def: 'Metod för att balansera redoxreaktioner genom att utgå från ändringar i oxidationstal.' },
      { term: 'redoxpar', def: 'Den oxiderade och den reducerade formen av samma ämne, till exempel Cu²⁺/Cu.' },
      { term: 'redoxreaktioner', def: 'Kemiska reaktioner där elektroner överförs mellan ämnen, det vill säga oxidation och reduktion sker samtidigt.' },
      { term: 'reduktion', def: 'En reaktion där ett ämne tar upp elektroner och dess oxidationstal minskar.' },
      { term: 'reduktionsmedel', def: 'Ett ämne som reducerar andra ämnen genom att avge elektroner. Reduktionsmedlet oxideras själv.' },
      { term: 'saltbrygga', def: 'En anordning som förbinder halvcellerna i en galvanisk cell och transporterar joner för att sluta strömkretsen.' },
      { term: 'smältelektrolys', def: 'Elektrolys av ett smält salt, till exempel framställning av aluminium ur smält aluminiumoxid.' },
      { term: 'spänningsserien', def: 'En lista där metallerna ordnas efter ökande ädelhet, baserat på deras normalpotentialer.' },
      { term: 'strömdrivande reaktion', def: 'Den spontana redoxreaktion i en galvanisk cell som driver elektronflödet genom den yttre kretsen.' },
      { term: 'väteutdrivande', def: 'Metaller som är oädlare än väte och kan reagera med syror under utveckling av vätgas.' },
      { term: 'åskådarjoner', def: 'Joner som finns i lösningen men inte deltar i den kemiska reaktionen.' }
    ],
    summary: [
      'Oxidation: elektroner avges, oxidationstalet ökar',
      'Reduktion: elektroner tas upp, oxidationstalet minskar',
      'Redoxreaktion: oxidation och reduktion sker alltid samtidigt',
      'Spänningsserien: metaller efter ökande ädelhet',
      'Väteutdrivande metaller reagerar med syror',
      'Elektronövergångsmetoden: skriv delformler',
      'Oxidationstalsmetoden: använd ändring i oxidationstal',
      'Oxidationsmedel: oxiderar andra, reduceras själv',
      'Reduktionsmedel: reducerar andra, oxideras själv',
      'Galvanisk cell: kemisk energi → elektrisk energi',
      'Anod: oxidation, negativ pol',
      'Katod: reduktion, positiv pol',
      'Elektroner flödar från anod till katod',
      'Saltbrygga: transporterar joner',
      'Batterier är galvaniska celler',
      'Elektrolys: elektrisk energi → kemisk energi',
      'Vid elektrolys: anod = + pol, katod = - pol',
      'Korrosion: oönskade galvaniska celler',
      'Korrosionsskydd: zink, offeranoder, målning'
    ]
  }
];


// ============ INFÖR PROV (EXAM PREP) LOGIC ============

var _currentExamChapter = null;

function hexToRgba(hex, alpha) {
  var h = hex.replace('#', '');
  if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
  var r = parseInt(h.substring(0,2), 16);
  var g = parseInt(h.substring(2,4), 16);
  var b = parseInt(h.substring(4,6), 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

function initExamPrep() {
  renderExamOverview();
  // close popup when clicking overlay (outside card)
  var ov = document.getElementById('examPopupOverlay');
  if (ov && !ov._bound) {
    ov._bound = true;
    ov.addEventListener('click', function(e) {
      if (e.target === ov) examClosePopup();
    });
  }
  // close popup on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var o = document.getElementById('examPopupOverlay');
      if (o && o.style.display !== 'none') examClosePopup();
    }
  });
}

function renderExamOverview() {
  var grid = document.getElementById('examGrid');
  if (!grid) return;
  var html = '';
  for (var i = 0; i < EXAM_CHAPTERS.length; i++) {
    var c = EXAM_CHAPTERS[i];
    var lightBg = hexToRgba(c.color, 0.13);
    html += '<div class="exam-card" style="--exam-accent:' + c.color + ';--exam-accent-light:' + lightBg + '" onclick="examOpenChapter(' + c.id + ')">';
    html += '<div class="exam-card-head">';
    html += '<div class="exam-card-icon">' + c.icon + '</div>';
    html += '<div>';
    html += '<div class="exam-card-num">Kapitel ' + c.id + '</div>';
    html += '<div class="exam-card-title">' + escapeHtml(c.title) + '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="exam-card-desc">' + escapeHtml(c.desc) + '</div>';
    html += '</div>';
  }
  grid.innerHTML = html;
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function examOpenChapter(id) {
  var chap = null;
  for (var i = 0; i < EXAM_CHAPTERS.length; i++) {
    if (EXAM_CHAPTERS[i].id === id) { chap = EXAM_CHAPTERS[i]; break; }
  }
  if (!chap) return;
  _currentExamChapter = chap;
  document.getElementById('examOverview').style.display = 'none';
  document.getElementById('examDetail').style.display = '';
  renderExamDetail(chap);
  // scroll to top
  var scr = document.getElementById('examScreen');
  if (scr) scr.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderExamDetail(chap) {
  var container = document.getElementById('examDetailContent');
  if (!container) return;
  var lightBg = hexToRgba(chap.color, 0.13);
  var html = '<div style="--exam-accent:' + chap.color + ';--exam-accent-light:' + lightBg + '">';

  // Chapter head
  html += '<div class="exam-chapter-head">';
  html += '<div class="exam-chapter-icon">' + chap.icon + '</div>';
  html += '<div>';
  html += '<div class="exam-chapter-num">Kapitel ' + chap.id + '</div>';
  html += '<div class="exam-chapter-title">' + escapeHtml(chap.title) + '</div>';
  html += '</div>';
  html += '</div>';

  // Section 1: Goals
  html += '<div class="exam-section">';
  html += '<h3 class="exam-section-title"><span class="exam-section-title-icon">🎯</span>Det här ska du kunna</h3>';
  html += '<ul class="exam-goals-list">';
  for (var i = 0; i < chap.goals.length; i++) {
    html += '<li>' + escapeHtml(chap.goals[i]) + '</li>';
  }
  html += '</ul>';
  html += '</div>';

  // Section 2: Concepts
  html += '<div class="exam-section">';
  html += '<h3 class="exam-section-title"><span class="exam-section-title-icon">📚</span>Viktiga begrepp</h3>';
  html += '<div class="exam-concepts-grid">';
  // sort alphabetically (Swedish)
  var sorted = chap.concepts.slice().sort(function(a, b) {
    return a.term.localeCompare(b.term, 'sv');
  });
  for (var j = 0; j < sorted.length; j++) {
    var cpt = sorted[j];
    html += '<button class="exam-concept-chip" onclick="examShowConcept(' + chap.id + ',' + j + ')">' + escapeHtml(cpt.term) + '</button>';
  }
  html += '</div>';
  html += '</div>';

  // Section 3: Summary
  html += '<div class="exam-section">';
  html += '<h3 class="exam-section-title"><span class="exam-section-title-icon">📝</span>Sammanfattning</h3>';
  html += '<ul class="exam-summary-list">';
  for (var k = 0; k < chap.summary.length; k++) {
    html += '<li>' + escapeHtml(chap.summary[k]) + '</li>';
  }
  html += '</ul>';
  html += '</div>';

  html += '</div>';
  container.innerHTML = html;

  // store sorted concepts for popup
  chap._sortedConcepts = sorted;
}

function examShowConcept(chapterId, idx) {
  var chap = null;
  for (var i = 0; i < EXAM_CHAPTERS.length; i++) {
    if (EXAM_CHAPTERS[i].id === chapterId) { chap = EXAM_CHAPTERS[i]; break; }
  }
  if (!chap || !chap._sortedConcepts) return;
  var cpt = chap._sortedConcepts[idx];
  if (!cpt) return;
  document.getElementById('examPopupTerm').textContent = cpt.term;
  document.getElementById('examPopupDef').textContent = cpt.def;
  document.getElementById('examPopupOverlay').style.display = 'flex';
}

function examClosePopup() {
  var ov = document.getElementById('examPopupOverlay');
  if (ov) ov.style.display = 'none';
}

function examBack() {
  document.getElementById('examDetail').style.display = 'none';
  document.getElementById('examOverview').style.display = '';
  _currentExamChapter = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ END INFÖR PROV ============


function switchExMode(mode) {
  document.getElementById('exRaknaSection').style.display  = mode === 'rakna'    ? '' : 'none';
  document.getElementById('exLuckorSection').style.display = mode === 'luckor'   ? '' : 'none';
  document.getElementById('exMemSection').style.display    = mode === 'memorera' ? '' : 'none';
  if (mode === 'luckor'   && !_clozeInited) { _clozeInited = true; initCloze(); }
  if (mode === 'memorera' && !_memInited)   { _memInited   = true; initMem(); }
}

// ── LUCKOR ──────────────────────────────────────────────
let _clozeCat = 'all', _clozeIdx = 0, _clozeList = [], _clozeAnswered = false;

function initCloze() {
  const catRow = document.getElementById('clozeCatRow');
  catRow.innerHTML = '<button class="formula-cat-btn active" data-cat="all">Alla</button>' +
    Object.entries(CLOZE_CATS).map(([k,v]) =>
      `<button class="formula-cat-btn" data-cat="${k}">${v.icon} ${v.label}</button>`
    ).join('');
  catRow.querySelectorAll('.formula-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      catRow.querySelectorAll('.formula-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _clozeCat = btn.dataset.cat;
      applyClozeFilter();
    });
  });
  applyClozeFilter();
}

function applyClozeFilter() {
  _clozeList = _clozeCat === 'all' ? [...CLOZE_DATA] : CLOZE_DATA.filter(c => c.cat === _clozeCat);
  _clozeIdx = 0;
  renderCloze();
}

function renderCloze() {
  const container = document.getElementById('clozeContainer');
  if (!_clozeList.length) {
    container.innerHTML = '<div class="prob-card" style="text-align:center;padding:40px;color:var(--text2)">Inga lucktexts för den valda kategorin.</div>';
    return;
  }
  const c = _clozeList[_clozeIdx];
  _clozeAnswered = false;
  const total = _clozeList.length;
  const qHtml = c.q.replace('___', '<span class="cloze-blank">___</span>');
  container.innerHTML = `
    <div class="cloze-card">
      <div class="cloze-progress">Fråga ${_clozeIdx+1} / ${total}</div>
      <div class="cloze-sentence">${qHtml}</div>
      <div class="prob-input-row">
        <input type="text" id="clozeInput" class="cloze-input" placeholder="Fyll i…" autocomplete="off" spellcheck="false">
        <button class="prob-check" id="clozeCheckBtn">Kontrollera</button>
      </div>
      <div class="prob-feedback" id="clozeFeedback"></div>
      <div class="cloze-hint-box" id="clozeHintBox">💡 ${c.hint}</div>
      <div class="prob-nav-row">
        <button class="prob-nav-btn" id="clozeHintBtn">💡 Tips</button>
        <button class="prob-nav-btn" id="clozePrev" ${_clozeIdx===0?'disabled':''}>← Föregående</button>
        <button class="prob-nav-btn" id="clozeNext" ${_clozeIdx===total-1?'disabled':''}>Nästa →</button>
      </div>
    </div>`;
  document.getElementById('clozeCheckBtn').addEventListener('click', () => checkCloze(c));
  document.getElementById('clozeInput').addEventListener('keydown', e => { if (e.key==='Enter') checkCloze(c); });
  document.getElementById('clozeHintBtn').addEventListener('click', () => {
    const hb = document.getElementById('clozeHintBox');
    hb.style.display = hb.style.display === 'none' ? 'block' : 'none';
  });
  const pp = document.getElementById('clozePrev');
  const np = document.getElementById('clozeNext');
  if (pp && !pp.disabled) pp.addEventListener('click', () => { _clozeIdx--; renderCloze(); });
  if (np && !np.disabled) np.addEventListener('click', () => { _clozeIdx++; renderCloze(); });
}

function checkCloze(c) {
  if (_clozeAnswered) return;
  const input = document.getElementById('clozeInput');
  const val = input.value.trim();
  if (!val) { showToast('Skriv ett svar'); return; }
  const accepted = c.a.split(',').map(s => s.trim().toLowerCase());
  const correct = accepted.some(ans => val.toLowerCase() === ans);
  _clozeAnswered = true;
  input.classList.add(correct ? 'correct' : 'wrong');
  const fb = document.getElementById('clozeFeedback');
  fb.className = `prob-feedback show ${correct ? 'ok' : 'fail'}`;
  fb.innerHTML = correct
    ? `<strong>✅ Rätt!</strong> Svaret är: <em>${c.a}</em>`
    : `<strong>❌ Fel.</strong> Ditt svar: <strong>${val}</strong> &nbsp;|  Rätt: <strong>${c.a}</strong>`;
}

// ── MEMORERA ────────────────────────────────────────────
const MEM_SETS = {
  elem20: { icon:'⚛️', label:'Grundamnen 1–20',
    items:[{q:'H',a:'Väte'},{q:'He',a:'Helium'},{q:'Li',a:'Litium'},{q:'Be',a:'Beryllium'},{q:'B',a:'Bor'},{q:'C',a:'Kol'},{q:'N',a:'Kväve'},{q:'O',a:'Syre'},{q:'F',a:'Fluor'},{q:'Ne',a:'Neon'},{q:'Na',a:'Natrium'},{q:'Mg',a:'Magnesium'},{q:'Al',a:'Aluminium'},{q:'Si',a:'Kisel'},{q:'P',a:'Fosfor'},{q:'S',a:'Svavel'},{q:'Cl',a:'Klor'},{q:'Ar',a:'Argon'},{q:'K',a:'Kalium'},{q:'Ca',a:'Kalcium'}]},
  elemExtra: { icon:'🔬', label:'Extra grundamnen',
    items:[{q:'Fe',a:'Järn'},{q:'Cu',a:'Koppar'},{q:'Zn',a:'Zink'},{q:'Br',a:'Brom'},{q:'Ag',a:'Silver'},{q:'I',a:'Jod'},{q:'Au',a:'Guld'}]},
  strongAcids: { icon:'🧪', label:'Starka syror',
    items:[{q:'HCl',a:'Saltsyra'},{q:'H₂SO₄',a:'Svavelsyra'},{q:'HNO₃',a:'Salpetersyra'},{q:'HBr',a:'Bromvätesyra'},{q:'HI',a:'Jodvätesyra'}]},
  weakAcids: { icon:'🍋', label:'Svaga syror',
    items:[{q:'CH₃COOH',a:'Ättiksyra'},{q:'HF',a:'Fluorvätesyra'},{q:'H₂CO₃',a:'Kolsyra'},{q:'H₃PO₄',a:'Fosforsyra'},{q:'HNO₂',a:'Salpetersyrlighet'}]},
  bases: { icon:'🧪', label:'Baser',
    items:[{q:'NaOH',a:'Natriumhydroxid'},{q:'KOH',a:'Kaliumhydroxid'},{q:'Ca(OH)₂',a:'Kalciumhydroxid'},{q:'NH₃',a:'Ammoniak'},{q:'Mg(OH)₂',a:'Magnesiumhydroxid'}]},
};

let _memSet = 'elem20', _memIdx = 0, _memFlipped = false, _memDir = 'symToName';
let _memItems = [];

function _resetMemItems() {
  _memItems = shuffleArray([...(MEM_SETS[_memSet] ? MEM_SETS[_memSet].items : [])]);
}

function initMem() {
  const catRow = document.getElementById('memCatRow');
  catRow.innerHTML = Object.entries(MEM_SETS).map(([k,v]) =>
    `<button class="formula-cat-btn ${k==='elem20'?'active':''}" data-mset="${k}">${v.icon} ${v.label}</button>`
  ).join('');
  catRow.querySelectorAll('.formula-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      catRow.querySelectorAll('.formula-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _memSet = btn.dataset.mset; _memIdx = 0; _memFlipped = false;
      _resetMemItems();
      renderMem();
    });
  });
  _resetMemItems();
  renderMem();
}

function renderMem() {
  const container = document.getElementById('memContainer');
  const set = MEM_SETS[_memSet];
  if (!_memItems.length) _resetMemItems();
  const item = _memItems[_memIdx];
  const total = _memItems.length;
  const front = _memDir === 'symToName' ? item.q : item.a;
  const back  = _memDir === 'symToName' ? item.a : item.q;
  const question = _memDir === 'symToName' ? 'Vad heter detta?' : 'Vilken formel/beteckning?';
  container.innerHTML = `
    <div class="mem-card">
      <div class="mem-mode-toggle">
        <button class="mem-mode-btn ${_memDir==='symToName'?'active':''}" data-dir="symToName">Symbol → Namn</button>
        <button class="mem-mode-btn ${_memDir==='nameToSym'?'active':''}" data-dir="nameToSym">Namn → Symbol</button>
      </div>
      <div class="mem-symbol">${front}</div>
      <div class="mem-sub">${question}</div>
      ${_memFlipped
        ? `<div class="mem-answer">${back}</div>`
        : `<button class="btn-primary" id="memFlipBtn" style="margin-bottom:18px">Visa svar</button>`}
      <div class="cloze-progress">Kort ${_memIdx+1} / ${total}</div>
      <div class="prob-nav-row" style="margin-top:10px">
        <button class="prob-nav-btn" id="memPrev" ${_memIdx===0?'disabled':''}>← Föregående</button>
        <button class="prob-nav-btn" id="memNext" ${_memIdx===total-1?'disabled':''}>Nästa →</button>
      </div>
    </div>`;
  if (!_memFlipped) document.getElementById('memFlipBtn').addEventListener('click', () => { _memFlipped=true; renderMem(); });
  container.querySelectorAll('.mem-mode-btn').forEach(b => {
    b.addEventListener('click', () => { _memDir=b.dataset.dir; _memFlipped=false; renderMem(); });
  });
  const pp = document.getElementById('memPrev');
  const np = document.getElementById('memNext');
  if (pp && !pp.disabled) pp.addEventListener('click', () => { _memIdx--; _memFlipped=false; renderMem(); });
  if (np && !np.disabled) np.addEventListener('click', () => { _memIdx++; _memFlipped=false; renderMem(); });
}

// ── Studieplan tab-switcher ──
function spTab(name) {
  document.querySelectorAll('.sp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sp-panel').forEach(p => p.classList.remove('active'));
  const activeTab = document.querySelector(`.sp-tab[onclick*="'${name}'"]`);
  if (activeTab) activeTab.classList.add('active');
  const panel = document.getElementById('spPanel-' + name);
  if (panel) panel.classList.add('active');
}

// ── Studieplan grade accordion ──
function spToggleGrade(card) {
  card.classList.toggle('open');
}

