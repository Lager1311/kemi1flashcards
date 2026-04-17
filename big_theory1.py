# -*- coding: utf-8 -*-
# Sections 1-4: Atomens byggnad, Kemisk bindning, Reaktioner & stökiometri, Syror & baser
import sys
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

sections = []

# ══════════════════════════════════════════════════════════════════
# 1. ATOMENS BYGGNAD & PERIODISKA SYSTEMET
# ══════════════════════════════════════════════════════════════════
sections.append(("Atomens byggnad", "\u269b\ufe0f", """
<h2>\u269b\ufe0f Atomens byggnad &amp; periodiska systemet</h2>
<p class="theory-intro">All materia runt om oss \u2013 luften vi andas, vattnet vi dricker, m\u00e4nniskokroppen sj\u00e4lv \u2013 \u00e4r uppbyggd av atomer. En atom \u00e4r s\u00e5 liten att ungef\u00e4r tio miljarder atomer sida vid sida skulle t\u00e4cka en centimeter. \u00c4nd\u00e5 har varje enskild atom en rik inre struktur som i detalj avg\u00f6r hur \u00e4mnet beter sig: huruvida det \u00e4r en metall eller icke-metall, hur det reagerar, vilka bindningar det bildar och var i periodiska systemet det h\u00f6r hemma.</p>

<h3>1. Atomens historia och modeller</h3>
<p>F\u00f6rest\u00e4llningen om atomen \u00e4r gammal. De grekiska filosoferna Leukippos och Demokritos f\u00f6reslog redan p\u00e5 400-talet f.Kr. att materia \u00e4r diskontinuerlig \u2013 att man till slut n\u00e5r en minsta, odelbar enhet, <em>atomos</em> (gr. "odelbar"). Det dr\u00f6jde dock tv\u00e5 tusen \u00e5r innan id\u00e9n fick vetenskaplig grund.</p>
<p><strong>John Dalton</strong> (1803) formulerade den f\u00f6rsta moderna atomteorin: varje grundämne best\u00e5r av identiska atomer, och kemiska reaktioner \u00e4r omgrupperingar av atomer \u2013 inga atomer skapas eller f\u00f6rst\u00f6rs. Daltons modell var en massiv, odelbar sf\u00e4r.</p>
<p><strong>J.J. Thomson</strong> (1897) uppt\u00e4ckte elektronen med hj\u00e4lp av katodstr\u00e5lsr\u00f6ret. Han f\u00f6reslog "russinbulle-modellen": elektroner (russin) inb\u00e4ddade i en positiv deg. Modellen var fel men revolutionerande \u2013 f\u00f6r f\u00f6rsta g\u00e5ngen visste man att atomen <em>hade</em> delar.</p>
<p><strong>Ernest Rutherford</strong> (1911) genomf\u00f6rde sitt ber\u00f6mda guldfoliexperiment. Han sköt alfapartiklar mot ett 0,0001 mm tunt guldfolium. Om Thomsons modell st\u00e4mde borde alla partiklar passera rakt igenom med sm\u00e5 avb\u00f6jningar. Istället studsade cirka en av 20\u00a0000 rakt tillbaka. Rutherfords slutsats: atomen best\u00e5r till n\u00e4stan 100 % av tomrum, med all positiv laddning och n\u00e4stan all massa koncentrerad i en oerhört liten, t\u00e4t <strong>k\u00e4rna</strong>. Elektroner rör sig i stort avst\u00e5nd fr\u00e5n k\u00e4rnan.</p>
<p><strong>Niels Bohr</strong> (1913) kombinerade Rutherfords kärnmodell med den nyupptäckta kvantteorin. Han postulerade att elektroner rör sig i fasta cirkelbanor med specifika energier. En elektron kan bara \u00e4ndra energi genom att hoppa mellan banor, och vid hoppet absorberas eller emitteras en foton vars energi exakt motsvarar energiskillnaden. Detta förklarade v\u00e4tes diskreta spektrallinjer (Balmerserien) perfekt.</p>
<p>Den moderna <strong>kvantmekaniska modellen</strong> (Schrödinger, Heisenberg, de Broglie, 1920-talet) ersätter fasta banor med <em>orbitaler</em> \u2013 sannolikhetsmoln som beskriver var elektroner med störst sannolikhet befinner sig. Elektroner beter sig som b\u00e5de partiklar och v\u00e5gor.</p>

<h3>2. Atomens uppbyggnad</h3>
<p>En atom har <strong>tv\u00e5 regioner</strong>: en extremt liten, t\u00e4t <strong>k\u00e4rna</strong> och ett mycket st\u00f6rre <strong>elektronskal</strong> utanf\u00f6r.</p>
<p>K\u00e4rnan inneh\u00e5ller <strong>protoner</strong> (laddning +1, massa 1,673×10⁻²⁷ kg) och <strong>neutroner</strong> (laddning 0, massa 1,675×10⁻²⁷ kg). Protonernas antal kallas <em>atomnumret Z</em> och \u00e4r unikt f\u00f6r varje grundämne \u2013 det definierar vilket \u00e4mne atomen \u00e4r. Antalet protoner plus neutroner kallas <em>masst\u00e5let A</em>.</p>
<p>Runt k\u00e4rnan r\u00f6r sig <strong>elektroner</strong> (laddning \u22121, massa 9,109×10⁻³¹ kg \u2248 1/1836 av protonmassan). En neutral atom har lika m\u00e5nga elektroner som protoner. Om atomen f\u00f6rlorar en eller flera elektroner bildas en positivt laddad <em>katjon</em>; tar den upp elektroner bildas en negativt laddad <em>anjon</em>.</p>
<div class="formula-box">Atomnummer: Z = antal protoner
Masstal: A = Z + N (N = antal neutroner)
Neutroner: N = A \u2212 Z

Laddning: q = (antal protoner) \u2212 (antal elektroner)

Exempel \u00b2\u00b3Na:
  Z = 11 (11 protoner), A = 23, N = 12 neutroner
  Neutral: 11 elektroner
  Na\u207a: 10 elektroner (tappat 1 e\u207b), laddning +1</div>

<h3>3. Isotoper</h3>
<p>Isotoper \u00e4r atomer av <em>samma grundämne</em> (samma Z) men med <em>olika antal neutroner</em> (olika A). Eftersom kemiska egenskaper styrs av elektronkonfigurationen, och elektronkonfigurationen best\u00e4ms av protonantalet, har isotoper <strong>praktiskt taget identiska kemiska egenskaper</strong> men olika massa och ofta olika radioaktivitet.</p>
<p>Naturligt v\u00e4te best\u00e5r av tre isotoper: protium (\u00b9H, 99,98\u00a0%), deuterium (\u00b2H eller D, 0,02\u00a0%) och tritium (\u00b3H, spår). Deuterium anv\u00e4nds som br\u00e4nsle i fusions\u00e4reaktorer och i "tungt vatten" (D\u2082O) som moderator i vissa k\u00e4rnreaktorer. Tritium \u00e4r radioaktivt (\u03b2-s\u00f6nderfaller) med halveringstid 12,3 \u00e5r.</p>
<p>Den atommassa som anges i periodiska systemet \u00e4r ett <em>viktat medelvärde</em> \u00f6ver alla naturliga isotoper. Klors atommassa 35,45 g/mol beror p\u00e5 att ungef\u00e4r 75\u00a0% \u00e4r \u00b3\u2075Cl och 25\u00a0% \u00e4r \u00b3\u2077Cl.</p>
<table class="theory-table">
  <tr><th>Isotop</th><th>Z</th><th>N</th><th>A</th><th>Stabil?</th><th>Anv\u00e4ndning / notering</th></tr>
  <tr><td>\u00b9H (protium)</td><td>1</td><td>0</td><td>1</td><td>Ja</td><td>99,98 % av allt v\u00e4te</td></tr>
  <tr><td>\u00b2H (deuterium)</td><td>1</td><td>1</td><td>2</td><td>Ja</td><td>Tungt vatten, fusionsreaktor</td></tr>
  <tr><td>\u00b9\u00b2C</td><td>6</td><td>6</td><td>12</td><td>Ja</td><td>Referens f\u00f6r atommasseenheten u</td></tr>
  <tr><td>\u00b9\u2074C</td><td>6</td><td>8</td><td>14</td><td>Nej, t\u00bd = 5\u00a0730 \u00e5r</td><td>Radiokoldatering</td></tr>
  <tr><td>\u00b2\u00b3\u2075U</td><td>92</td><td>143</td><td>235</td><td>Nej, t\u00bd = 703 M\u00e5r</td><td>K\u00e4rnkraft, klyvbart</td></tr>
  <tr><td>\u00b2\u00b3\u2078U</td><td>92</td><td>146</td><td>238</td><td>Nej, t\u00bd = 4,47 G\u00e5r</td><td>Vanligaste uranisotopen</td></tr>
</table>
<p><strong>Radiokoldatering</strong> fungerar s\u00e5 h\u00e4r: Kosmisk str\u00e5lning i atmosf\u00e4ren skapar konstant nya \u00b9\u2074C-atomer ur kv\u00e4ve. Levande organismer tar upp \u00b9\u2074C genom mat och andning i samma proportion som atmosf\u00e4ren. N\u00e4r organismen d\u00f6r upph\u00f6r \u00b9\u2074C-uppt\u00e4cket och isotopen s\u00f6nderfaller. Genom att m\u00e4ta \u00b9\u2074C/\u00b9\u00b2C-kvoten kan man ber\u00e4kna \u00e5ldern p\u00e5 upp till ~50\u00a0000 \u00e5r gamla organiska material.</p>

<h3>4. Elektronkonfiguration och skalmodellen</h3>
<p>Elektroner f\u00f6rdelar sig i <strong>energiskal</strong> (n = 1, 2, 3, …). Lägre skal = lägre energi = elektronen befinner sig statistiskt sett n\u00e4rmare k\u00e4rnan. Maximalt antal elektroner per skal \u00e4r 2n²: skal 1 klarar 2, skal 2 klarar 8, skal 3 klarar 18 osv.</p>
<p>Elektroner fyller alltid de l\u00e4gsta tillg\u00e4ngliga energiniv\u00e5erna f\u00f6rst (<strong>Aufbau-principen</strong>). <strong>Paulis uteslutningsprincip</strong> s\u00e4ger att ingen tv\u00e5 elektroner i en atom kan ha samma fullst\u00e4ndiga kvanttillst\u00e5nd. <strong>Hunds regel</strong> s\u00e4ger att elektroner f\u00f6redrar att inta separata orbitaler med parallella spinn innan de paras ihop.</p>
<p><strong>Valenselektroner</strong> \u00e4r de elektroner som befinner sig i det yttersta (val-ens-)skalet. De \u00e4r avg\u00f6rande f\u00f6r kemiska reaktioner och bindningsf\u00f6rm\u00e5ga. Metaller i grupp 1 har 1 valenselektron, grupp 2 har 2, icke-metaller i grupp 17 har 7, \u00e4delgaserna i grupp 18 har 8 (f\u00f6rutom He med 2).</p>
<table class="theory-table">
  <tr><th>Atom</th><th>Z</th><th>Skal 1</th><th>Skal 2</th><th>Skal 3</th><th>Val-e\u207b</th></tr>
  <tr><td>H</td><td>1</td><td>1</td><td></td><td></td><td>1</td></tr>
  <tr><td>He</td><td>2</td><td>2</td><td></td><td></td><td>2</td></tr>
  <tr><td>Li</td><td>3</td><td>2</td><td>1</td><td></td><td>1</td></tr>
  <tr><td>C</td><td>6</td><td>2</td><td>4</td><td></td><td>4</td></tr>
  <tr><td>O</td><td>8</td><td>2</td><td>6</td><td></td><td>6</td></tr>
  <tr><td>Na</td><td>11</td><td>2</td><td>8</td><td>1</td><td>1</td></tr>
  <tr><td>Cl</td><td>17</td><td>2</td><td>8</td><td>7</td><td>7</td></tr>
  <tr><td>Ar</td><td>18</td><td>2</td><td>8</td><td>8</td><td>8</td></tr>
</table>
<p>Tendensen hos atomer att avge, ta upp eller dela elektroner f\u00f6r att uppn\u00e5 \u00e4delgasf\u00f6rdelningen (8 valenselektroner, <em>oktettregeln</em>) \u00e4r drivkraften bakom n\u00e4stan all kemi.</p>

<h3>5. Periodiska systemet \u2013 organisation och trender</h3>
<p>Periodiska systemet organiserar de 118 k\u00e4nda grundämnena efter stigande atomnummer. Dmitrij Mendelejev lade 1869 grunden n\u00e4r han ordnade de d\u00e5 k\u00e4nda 63 grundämnena och l\u00e4mnade tomrum f\u00f6r \u00e4nnu ouppt\u00e4ckta \u00e4mnen \u2013 vars egenskaper han f\u00f6rutsade med remarkabel noggrannhet.</p>
<p><strong>Perioder</strong> (horisontella rader) representerar ett nytt elektronskal: period 1 fyller skal 1, period 2 fyller skal 2, etc. <strong>Grupper</strong> (vertikala kolumner) samlar \u00e4mnen med samma antal valenselektroner och liknande kemiska egenskaper. Grupp 1 = alkalimetaller, grupp 2 = jordalkalimetaller, grupp 17 = halogener, grupp 18 = \u00e4delgaser.</p>
<p><strong>Atomradie</strong> minskar \u00e5t h\u00f6ger l\u00e4ngs en period (fler protoner drar elektronskalen n\u00e4rmare) och \u00f6kar ned\u00e5t i en grupp (nya skal l\u00e4ggs till). Li har atomradien 152 pm, Na 186 pm, K 227 pm.</p>
<p><strong>Joniseringsenergi</strong> (energin som kr\u00e4vs f\u00f6r att avl\u00e4gsna en valenselektron) \u00f6kar \u00e5t h\u00f6ger i en period och minskar ned\u00e5t i en grupp. Hög joniseringsenergi \u2192 \u00e4mnet avger ogärna elektroner (icke-metaller). L\u00e5g \u2192 avger l\u00e4tt elektroner (alkalimetaller). Fluors joniseringsenergi \u00e4r 1681 kJ/mol; cesiums bara 376 kJ/mol.</p>
<p><strong>Elektronaffinitet</strong> \u00e4r energi\u00e4ndringen n\u00e4r en neutral atom tar upp en elektron. Halogener har h\u00f6gst elektronaffinitet \u2013 de vinner mycket energi p\u00e5 att ta upp en elektron eftersom de d\u00e5 n\u00e5r \u00e4delgaskonfiguration.</p>
<p><strong>Elektronegativitet</strong> (Paulingskalan) m\u00e4ter en atoms f\u00f6rm\u00e5ga att attrahera gemensamma elektroner i en kovalent bindning. Fluor har h\u00f6gst (4,0), francium l\u00e4gst (0,7). Elektronegativitet anv\u00e4nds f\u00f6r att best\u00e4mma bindningstyp och polarf\u00f6rdelning.</p>
<table class="theory-table">
  <tr><th>Egenskap</th><th>\u00c5t h\u00f6ger i period</th><th>Ned\u00e5t i grupp</th></tr>
  <tr><td>Atomradie</td><td>Minskar</td><td>\u00d6kar</td></tr>
  <tr><td>Joniseringsenergi</td><td>\u00d6kar</td><td>Minskar</td></tr>
  <tr><td>Elektronaffinitet</td><td>\u00d6kar (grovt)</td><td>Minskar</td></tr>
  <tr><td>Elektronegativitet</td><td>\u00d6kar</td><td>Minskar</td></tr>
  <tr><td>Metallkarakt\u00e4r</td><td>Minskar</td><td>\u00d6kar</td></tr>
</table>

<h3>6. Viktiga \u00e4mnesgrupper i periodiska systemet</h3>
<p><strong>Alkalimetaller (grupp 1: Li, Na, K, Rb, Cs, Fr)</strong> \u2013 en valenselektron, avger den l\u00e4tt \u2192 \u00e4r mycket reaktiva. Reagerar h\u00e4ftigt med vatten och bildar hydroxider (NaOH, KOH) + v\u00e4te. F\u00f6rvaras i fotogen. Metallerna \u00e4r mjuka nog att sk\u00e4ras med kniv. K\u00e4nnetecknas av l\u00e5ga joniseringsenergier och l\u00e5g densitet.</p>
<p><strong>Halogener (grupp 17: F, Cl, Br, I, At)</strong> \u2013 sju valenselektroner, vill ta upp en \u2192 starka oxidationsmedel. F\u00f6rekommer som diatomiska molekyler (F\u2082, Cl\u2082, Br\u2082, I\u2082). Fluor \u00e4r det mest reaktiva av alla grundämnen och oxiderar praktiskt taget allt. Klor anv\u00e4nds i vattenrening och PVC-produktion. Jod \u00e4r viktigt f\u00f6r sk\u00f6ldkirteln.</p>
<p><strong>\u00c4delgaser (grupp 18: He, Ne, Ar, Kr, Xe, Rn)</strong> \u2013 fullt ytterskal, \u00e4r praktiskt taget inerta. Anv\u00e4nds i gl\u00f6dlampor (Ar), neonskyltar (Ne), ballonger (He), och sv\u00e4lln\u00e4skirurgi (Xe som anestetikum). Xenon bildar n\u00e5gra f\u00e5 f\u00f6reningar med fluor och syre under extrema betingelser.</p>
<p><strong>\u00d6verg\u00e5ngsmetaller (grupper 3\u201312)</strong> \u2013 fyller d-orbitaler. Bildar oftast flera oxidationstillst\u00e5nd (Fe kan vara +2 eller +3). Bildar f\u00e4rgade joner (Cu²\u207a \u00e4r bl\u00e5, Fe³\u207a \u00e4r gul-brun, Cr³\u207a \u00e4r gr\u00f6n). Viktiga som katalysatorer (Fe i Haber-processen, Pt i bilkatalysatorer, Ni i hydrogenering). Bra elektriska ledare.</p>

<h3>7. Radioaktivitet och k\u00e4rnreaktioner</h3>
<p>Instabila k\u00e4rnor s\u00f6nderfaller spontant och emitterar strålning. De tre vanligaste typerna:</p>
<p><strong>\u03b1-str\u00e5lning</strong>: emission av en heliumk\u00e4rna (\u2074He, \u03b1-partikel). Rä cker bara n\u00e5gra cm i luft, stoppas av ett papper. Z minskar med 2, A med 4.</p>
<p><strong>\u03b2-str\u00e5lning</strong>: emission av en elektron (\u03b2\u207b) eller positron (\u03b2\u207a). \u03b2\u207b: en neutron omvandlas till en proton + elektron. Z ökar med 1. Stoppas av aluminium.</p>
<p><strong>\u03b3-str\u00e5lning</strong>: emission av h\u00f6genergetiska fotoner. Z och A f\u00f6r\u00e4ndras inte. Kr\u00e4ver bly eller tjock betong f\u00f6r att stoppas. F\u00f6ljer ofta \u03b1 eller \u03b2.</p>
<p><strong>Halveringstid t\u00bd</strong> \u00e4r den tid det tar f\u00f6r h\u00e4lften av alla atomer i ett prov att s\u00f6nderfalla. T\u00e4cker allt fr\u00e5n mikrosekunders (obeh till miljarder \u00e5r (U-238). F\u00f6rm\u00e5lan N(t) = N\u2080 × (½)^(t/t½). Radons t\u00bd = 3,82 dygn \u2013 viktigt f\u00f6r innomhusluftm\u00e4tning.</p>

<h3>8. Sambandet</h3>
<p>Atomens uppbyggnad \u00e4r nyckeln som l\u00e5ser upp all \u00f6vrig kemi. Antalet protoner (Z) best\u00e4mmer vilket grundämne det \u00e4r. Elektronkonfigurationen \u2013 s\u00e4rskilt antalet valenselektroner \u2013 best\u00e4mmer hur atomen reagerar: om den avger elektroner (metall, l\u00e5g joniseringsenergi), tar upp elektroner (icke-metall, h\u00f6g elektronaffinitet) eller delar elektroner (kovalent bindning). Periodiska systemets perioder och grupper \u00e4r en karta \u00f6ver dessa egenskaper. Elektronegativiteten styr hur elektroner f\u00f6rdelas i kemiska bindningar, vilket p\u00e5verkar l\u00f6slighet, kok- och smältpunkter, reaktivitet och molekylgeometri. Isotoper f\u00f6rklarar varf\u00f6r atommassor s\u00e4llan \u00e4r hela tal. Radioaktivitet visar att k\u00e4rnan sj\u00e4lv inte \u00e4r of\u00f6r\u00e4nderlig. Utan f\u00f6rst\u00e5elsen f\u00f6r atomstrukturen kan vi inte f\u00f6rklara varf\u00f6r koks gl\u00f6der, varf\u00f6r salt l\u00f6ses i vatten, eller hur l\u00e4kemedel binder till enzymer \u2013 allt h\u00e4nger samman p\u00e5 atomniv\u00e5.</p>
"""))

# ══════════════════════════════════════════════════════════════════
# 2. KEMISK BINDNING
# ══════════════════════════════════════════════════════════════════
sections.append(("Kemisk bindning", "\U0001f517", """
<h2>\U0001f517 Kemisk bindning</h2>
<p class="theory-intro">Atomer existerar s\u00e4llan ensamma. Kraften som h\u00e5ller dem samman \u2013 kemisk bindning \u2013 \u00e4r elektrostatisk till sin natur: negativt laddade elektroner attraheras av positivt laddade atomk\u00e4rnor. Beroende p\u00e5 hur elektroner f\u00f6rdelas uppst\u00e5r olika bindningstyper med dramatiskt olika egenskaper. F\u00f6rst\u00e5elsen f\u00f6r bindning f\u00f6rklarar varf\u00f6r salt sm\u00e4lter vid 801\u00a0°C medan is sm\u00e4lter vid 0\u00a0°C, varf\u00f6r metaller leder elektricitet och varf\u00f6r DNA kan kopieras utan att falla s\u00f6nder.</p>

<h3>1. Jonbindning</h3>
<p>Jonbindning uppst\u00e5r n\u00e4r en metall avger en eller flera elektroner till en icke-metall. Metallatomens l\u00e5ga joniseringsenergi g\u00f6r avgivningen energieffektiv; icke-metallens h\u00f6ga elektronaffinitet g\u00f6r mottagandet energim\u00e4ssigt gynnsamt. Resultatet \u00e4r en positiv katjon och en negativ anjon som attraherar varandra elektrostatiskt.</p>
<p>Exempel: Natrium (Na, [Ne]3s\u00b9) avger sin valenselektron till klor (Cl, [Ne]3s\u00b23p\u2075). Na\u207a f\u00e5r Ne-konfiguration; Cl\u207b f\u00e5r Ar-konfiguration. De resulterande jonerna ordnar sig i ett tredimensionellt <strong>kristallgitter</strong> d\u00e4r varje Na\u207a omges av sex Cl\u207b och vice versa (NaCl-strukturen).</p>
<p>Gittrets stabilitet m\u00e4ts av <strong>gitterentalpin</strong> \u2013 energin som kr\u00e4vs f\u00f6r att separera alla joner till gasform. F\u00f6r NaCl \u00e4r den \u22121,2 MJ/mol; f\u00f6r MgO (tv\u00e5-valenta joner Mg\u00b2\u207a och O\u00b2\u207b med kortare jonbindning) \u00e4r gitterentalpin \u22123,8 MJ/mol, vilket f\u00f6rklarar varf\u00f6r MgO sm\u00e4lter vid 2852\u00a0°C j\u00e4mf\u00f6rt med NaCls 801\u00a0°C.</p>
<p><strong>Egenskaper hos jonf\u00f6reningar:</strong></p>
<ul>
  <li>H\u00f6ga sm\u00e4lt- och kokpunkter (stark elektrostatisk attraktion kräver mycket energi att bryta)</li>
  <li>Spröda (när gittret förskjuts stöter likadana laddningar mot varandra → spjälkas)</li>
  <li>Leder el i smält tillst\u00e5nd och i l\u00f6sning (fria joner), men inte i fast tillst\u00e5nd</li>
  <li>L\u00f6ser sig i polara l\u00f6sningsmedel (vatten) men inte i opolara (bensin)</li>
</ul>
<div class="formula-box">Coulombs lag (f\u00f6renklad): E ∝ (q⁺ × q⁻) / r
H\u00f6gre laddning → starkare bindning → h\u00f6gre sm\u00e4ltpunkt
Kortare avst\u00e5nd → starkare bindning → h\u00f6gre sm\u00e4ltpunkt
NaCl (1+,1-): 801 °C
MgO (2+,2-): 2852 °C</div>

<h3>2. Kovalent bindning</h3>
<p>N\u00e4r tv\u00e5 icke-metaller m\u00f6ts delar de elektroner ist\u00e4llet f\u00f6r att \u00f6verf\u00f6ra dem. En <strong>kovalent bindning</strong> \u00e4r ett gemensamt elektronpar (bindningselektronpar) mellan tv\u00e5 k\u00e4rnor \u2013 b\u00e5da k\u00e4rnorna attraheras av paret och h\u00e5lls samman. Atomer kan dela ett par (enkelbindning), tv\u00e5 par (dubbelbindning) eller tre par (trippelbindning).</p>
<p>Enkelbindning (σ-bindning): överlappning längs bindningsaxeln. H\u2014H, C\u2014C, O\u2014H. Fri rotation runt enkelbindningar.</p>
<p>Dubbelbindning: en σ + en π-bindning (sidov\u00e4ges överlappning av p-orbitaler). C=C i eten, C=O i acetaldehyd. π-bindningar begränsar rotation → cis/trans-isomeri möjlig.</p>
<p>Trippelbindning: en σ + tv\u00e5 π. N≡N i kv\u00e4vegas (bindningsenergi 945 kJ/mol, mycket stark). C≡C i etyn (acetylen). Kortaste bindningsl\u00e4ngd.</p>
<table class="theory-table">
  <tr><th>Bindningstyp</th><th>Elektronpar</th><th>Energi (C\u2013C-typ)</th><th>L\u00e4ngd (C\u2013C)</th><th>Rotation</th></tr>
  <tr><td>Enkel</td><td>1</td><td>~346 kJ/mol</td><td>154 pm</td><td>Fri</td></tr>
  <tr><td>Dubbel</td><td>2</td><td>~614 kJ/mol</td><td>134 pm</td><td>Nej (stel)</td></tr>
  <tr><td>Trippel</td><td>3</td><td>~839 kJ/mol</td><td>120 pm</td><td>Fri (axial)</td></tr>
</table>

<h3>3. Polara och opolara bindningar</h3>
<p>Om tv\u00e5 atomer med <em>samma</em> elektronegativitet delar elektroner f\u00f6rdelas elektronparet j\u00e4mnt \u2013 <strong>opolar kovalent bindning</strong> (t.ex. H\u2082, O\u2082, Cl\u2082). Om atomerna har <em>olika</em> elektronegativitet dras elektronparet mer mot den mer elektronegativa atomen \u2013 <strong>polar kovalent bindning</strong>. Den mer elektronegativa atomen f\u00e5r en partiell negativ laddning δ\u207b, den andra f\u00e5r δ\u207a.</p>
<p>Riktlinje baserat p\u00e5 elektronegativitetsskillnad ΔEN:</p>
<table class="theory-table">
  <tr><th>ΔEN</th><th>Bindningstyp</th><th>Exempel</th></tr>
  <tr><td>0</td><td>Opolar kovalent</td><td>H\u2082, Cl\u2082, C\u2013C</td></tr>
  <tr><td>0,0–0,4</td><td>Knappt polar</td><td>C\u2013H (ΔEN=0,4)</td></tr>
  <tr><td>0,4–1,7</td><td>Polar kovalent</td><td>H\u2013O (ΔEN=1,4), H\u2013Cl</td></tr>
  <tr><td>&gt;1,7</td><td>Jonbindning</td><td>Na\u2013Cl (ΔEN=2,1)</td></tr>
</table>
<p>Obs: gr\u00e4nserna \u00e4r riktlinjer, inte absoluta. Bindningstypen \u00e4r ett kontinuum.</p>

<h3>4. VSEPR-teorin och molekylgeometri</h3>
<p>VSEPR (Valence Shell Electron Pair Repulsion) f\u00f6ruts\u00e4ger geometrin hos kovalenta molekyler utifr\u00e5n en enkel princip: elektronpar runt en centralatom st\u00f6ter bort varandra och placerar sig s\u00e5 l\u00e5ngt fr\u00e5n varandra som m\u00f6jligt.</p>
<p>Fria elektronpar (lone pairs) tar mer plats \u00e4n bindande par och trycker samman bindningsvinklarna.</p>
<table class="theory-table">
  <tr><th>Elektron-grupper</th><th>Fria par</th><th>Geometri</th><th>Vinkel</th><th>Exempel</th></tr>
  <tr><td>2</td><td>0</td><td>Linjär</td><td>180°</td><td>CO\u2082, BeH\u2082</td></tr>
  <tr><td>3</td><td>0</td><td>Plan triangel</td><td>120°</td><td>BF\u2083, SO\u2083</td></tr>
  <tr><td>4</td><td>0</td><td>Tetraeder</td><td>109,5°</td><td>CH\u2084, SiCl\u2084</td></tr>
  <tr><td>4</td><td>1</td><td>Trigonal pyramid</td><td>107°</td><td>NH\u2083</td></tr>
  <tr><td>4</td><td>2</td><td>Vinkelformad</td><td>104,5°</td><td>H\u2082O</td></tr>
  <tr><td>5</td><td>0</td><td>Trigonal bipyramid</td><td>90°/120°</td><td>PCl\u2085</td></tr>
  <tr><td>6</td><td>0</td><td>Oktaeder</td><td>90°</td><td>SF\u2086</td></tr>
</table>
<p>Vattens 104,5°-vinkel (ist\u00e4llet f\u00f6r tetraederns 109,5°) beror p\u00e5 att de tv\u00e5 fria paren trycker ihop bindningsparen. Ammoniak 107° \u2013 ett fritt par trycker lite.</p>

<h3>5. Polara molekyler och dipolmoment</h3>
<p>En molekyl \u00e4r <strong>polar</strong> om den har ett nettodipol\u00f6gonblick \u2013 en asymmetrisk laddningsf\u00f6rdelning. Det r\u00e4cker inte att bindningarna \u00e4r polara; molekylens geometri m\u00e5ste \u00e4ven vara asymmetrisk s\u00e5 att bindningsdipolerna inte tar ut varandra.</p>
<p>CO\u2082 (O=C=O) \u00e4r linjär. De tv\u00e5 polara C=O-bindningarna pekar i exakt motsatta riktningar och tar ut varandra \u2192 <em>opolar molekyl</em> trots polara bindningar.</p>
<p>H\u2082O har vinkelform. De tv\u00e5 O\u2013H-bindningarnas dipoler pekar \u00e5t var sitt h\u00e5ll men adderas inte till noll \u2192 <em>polar molekyl</em> med stort dipolmoment (1,85 D). Detta förklarar varsin h\u00f6ga kokpunkt (100°C) jämfört med H\u2082S (\u221260°C).</p>

<h3>6. Intermolekylära krafter</h3>
<p>Utöver bindningarna <em>inom</em> molekyler finns svagare krafter <em>mellan</em> molekyler som avgör aggregationstillst\u00e5nd, l\u00f6slighet och kokpunkter.</p>
<p><strong>Vätebindning</strong> \u00e4r den starkaste intermolekylära kraften (upp till ~40 kJ/mol). Uppst\u00e5r n\u00e4r v\u00e4te \u00e4r kovalent bundet till N, O eller F (extremt elektronegativa atomer som g\u00f6r H kraftigt δ\u207a) och detta H attraheras av ett fritt elektronpar p\u00e5 N, O eller F i en annan molekyl. F\u00f6rklarar:</p>
<ul>
  <li>Vattnets ovanligt h\u00f6ga kokpunkt (100°C) j\u00e4mf\u00f6rt med H\u2082S (\u221260°C)</li>
  <li>Isens l\u00e5ga densitet (v\u00e4tebindningar tvingar hexagonal struktur med h\u00e5l)</li>
  <li>DNA:s dubbelhelix (baspar h\u00e5lls av v\u00e4tebindningar)</li>
  <li>Proteiners sekund\u00e4rstruktur (α-helix och β-flak)</li>
</ul>
<p><strong>Dipol\u2013dipol-krafter</strong> \u00e4r attraktioner mellan permanenta dipoler i polara molekyler. Starkare ju st\u00f6rre dipolmoment. Typisk styrka 5–25 kJ/mol. Aceton och HCl \u00e4r exempel.</p>
<p><strong>London-dispersionskrafter</strong> (van der Waals) \u00e4r universella \u2013 de finns i alla \u00e4mnen, \u00e4ven i \u00e4delgaser och opolara molekyler. De uppst\u00e5r av <em>momentana dipoler</em>: elektroners slumpm\u00e4ssiga r\u00f6relser skapar \u00f6gonblickliga ojämna f\u00f6rdelningar som inducerar dipol i grannatomen. Styrkan beror p\u00e5 hur l\u00e4tt det \u00e4r att "deformera" elektronmolnet (polariserbarhet) \u2013 vilket \u00f6kar med fler elektroner och st\u00f6rre yta. Jod (I\u2082) \u00e4r fast vid rumstemperatur trots att det \u00e4r opolart, tack vare starka dispersionskrafter fr\u00e5n 106 elektroner per molekyl.</p>
<table class="theory-table">
  <tr><th>Kraft</th><th>Finns i</th><th>Styrka</th><th>Typexempel</th></tr>
  <tr><td>V\u00e4tebindning</td><td>NH, OH, HF-grupper</td><td>10–40 kJ/mol</td><td>H\u2082O, NH\u2083, HF, DNA</td></tr>
  <tr><td>Dipol–dipol</td><td>Polara molekyler</td><td>3–25 kJ/mol</td><td>HCl, aceton, SO\u2082</td></tr>
  <tr><td>London-dispersion</td><td>Alla \u00e4mnen</td><td>0,1–40 kJ/mol</td><td>Ar, I\u2082, hexan</td></tr>
</table>

<h3>7. Metallbindning</h3>
<p>I metaller avger atomerna sina valenselektroner till ett gemensamt <strong>elektronhav</strong> som flödar fritt genom ett gitter av positivt laddade jon-k\u00e4rnor. Denna "delokalisering" f\u00f6rklarar metallernas egenskaper: h\u00f6g elektrisk ledning (elektroner r\u00f6r sig fritt), h\u00f6g v\u00e4rmeledning, metallglans (fria elektroner abs\u00f6rberar och emitterar fotoner), duktilitet och sm\u00e4jlighet (gitterskikt kan glida utan att bindningen bryts). Wolframs extremt h\u00f6ga sm\u00e4ltpunkt (3422°C) beror p\u00e5 att de 4 valenselektronerna ger ett enormt t\u00e4tt elektronhav med stark attraktion.</p>

<h3>8. Sambandet</h3>
<p>Bindningstypen h\u00e4rstammar direkt fr\u00e5n atomers elektronegativiteter och elektronkonfigurationer. Stor skillnad → joner och jonbindning. Liten skillnad mellan icke-metaller → kovalent delning. Metaller → elektronhav. Molekylens geometri (VSEPR) avg\u00f6r om polara bindningar ger en polar eller opolar molekyl totalt. Intermolekylära krafter \u2013 vars styrka styrs av molekylstorlek, polaritet och vätegrupper \u2013 best\u00e4mmer om \u00e4mnet \u00e4r gas, v\u00e4tska eller fast vid rumstemperatur, och om det l\u00f6ser sig i vatten. Hela l\u00f6slighetsbegreppet "lika löser lika" bygger p\u00e5 att polara molekyler interagerar gynnsamt med polara l\u00f6sningsmedel och opolara med opolara. Bindningsl\u00e4ran är fundamentet f\u00f6r all biokemi, materialkemi och farmakologi.</p>
"""))

# ══════════════════════════════════════════════════════════════════
# 3. REAKTIONER & STÖKIOMETRI
# ══════════════════════════════════════════════════════════════════
sections.append(("Reaktioner \u0026 st\u00f6kiometri", "\u2697\ufe0f", """
<h2>\u2697\ufe0f Kemiska reaktioner &amp; st\u00f6kiometri</h2>
<p class="theory-intro">Kemi \u00e4r, i sin enklaste form, studiet av hur \u00e4mnen f\u00f6r\u00e4ndras. En kemisk reaktion bryter gamla bindningar och bildar nya. St\u00f6kiometri \u00e4r den kvantitativa sidan av reaktioner: hur mycket av varje \u00e4mne \u00e4r inblandat, hur mycket bildas, och vilket reagens tar slut f\u00f6rst. Det \u00e4r grunden f\u00f6r allt fr\u00e5n industriell syntes av g\u00f6dningsmedel till dos\u00e4ringen av l\u00e4kemedel.</p>

<h3>1. Reaktionstyper</h3>
<p>Kemiska reaktioner brukar klassas i \u00e5tta grundtyper, ofta \u00f6verlappande:</p>
<p><strong>1. Syntesreaktioner (kombinationsreaktioner):</strong> A + B → AB. Tv\u00e5 \u00e4mnen bildar ett. Exempel: 2Mg + O\u2082 → 2MgO (magnesium brinner i syre med bländvit låga). N\u2082 + 3H\u2082 → 2NH\u2083 (Haber-Bosch, industriell ammoniaksyntes).</p>
<p><strong>2. S\u00f6nderdelningsreaktioner:</strong> AB → A + B. Exempel: 2H\u2082O → 2H\u2082 + O\u2082 (elektrolys av vatten). CaCO\u2083 → CaO + CO\u2082 (kalcination av kalksten).</p>
<p><strong>3. Enkel substituering (f\u00f6rtr\u00e4ngning):</strong> A + BC → AC + B. En mer reaktiv art f\u00f6rtr\u00e4nger en mindre reaktiv. Exempel: Zn + CuSO\u2084 → ZnSO\u2084 + Cu. F\u00f6ljer spänningsserien f\u00f6r metaller.</p>
<p><strong>4. Dubbel substituering (metates):</strong> AB + CD → AD + CB. Jonbyte. Exempel: AgNO\u2083 + NaCl → AgCl\u2193 + NaNO\u2083. Drivs av utfällning, gasbildning eller vattenbildning.</p>
<p><strong>5. F\u00f6rbränningsreaktioner:</strong> Kolv\u00e4ten + O\u2082 → CO\u2082 + H\u2082O (fullst\u00e4ndig). C\u2083H\u2088 + 5O\u2082 → 3CO\u2082 + 4H\u2082O. Energirik \u2013 basen f\u00f6r motorer och v\u00e4rmek\u00e4llor.</p>
<p><strong>6. Syra-bas-reaktioner (neutralisering):</strong> HCl + NaOH → NaCl + H\u2082O. Utf\u00f6rligare i n\u00e4sta avsnitt.</p>
<p><strong>7. Redoxreaktioner:</strong> \u00d6verf\u00f6ring av elektroner. Fe + CuSO\u2084 → FeSO\u2084 + Cu.</p>
<p><strong>8. Utfällningsreaktioner:</strong> Tv\u00e5 jonl\u00f6sningar blandas och en sv\u00e5rl\u00f6slig produkt f\u00e4lls ut. BaCl\u2082 + Na\u2082SO\u2084 → BaSO\u2084\u2193 + 2NaCl.</p>

<h3>2. Molbegreppet och Avogadros tal</h3>
<p>Atomer \u00e4r s\u00e5 sm\u00e5 att de m\u00e5ste r\u00e4knas i enorma antal. <strong>Mole (mol)</strong> \u00e4r SI-enheten f\u00f6r substansm\u00e4ngd: 1 mol = 6,022×10²³ enheter (<strong>Avogadros tal N\u2080</strong>). En mol kol-12 v\u00e4ger exakt 12 g. Avogadros tal valdes s\u00e5 att 1 mol av valfri atom v\u00e4ger lika m\u00e5nga gram som atommassan i amu.</p>
<p><strong>Molmassa M</strong> (g/mol) \u00e4r massan f\u00f6r 1 mol av ett \u00e4mne. F\u00f6r H\u2082O: M = 2×1 + 16 = 18 g/mol. F\u00f6r CaCO\u2083: M = 40 + 12 + 3×16 = 100 g/mol.</p>
<div class="formula-box">n = m / M           (mol = gram / molmassa)
m = n × M           (massa = mol × molmassa)
N = n × N_A         (antal partiklar)
N_A = 6,022 × 10²³ mol⁻¹

Exempel: 90 g H\u2082O → n = 90/18 = 5,0 mol
         5,0 mol × 6,022×10²³ = 3,011×10²⁴ molekyler</div>

<h3>3. Kemisk formel och sammansättning</h3>
<p><strong>Empirisk formel</strong> anger de enklaste heltalskvoterna mellan atomerna. H\u2082O\u2082 har empirisk formel HO. CH\u2082O \u00e4r empirisk formel f\u00f6r b\u00e5de formaldehyd (CH\u2082O), ättiksyra (C\u2082H\u2084O\u2082) och glukos (C\u2086H\u2081\u2082O\u2086).</p>
<p><strong>Molekylformel</strong> anger det faktiska antalet atomer. F\u00f6r att best\u00e4mma molekylformeln fr\u00e5n den empiriska formeln kr\u00e4vs molmassan: n = M_molekyl / M_emp. Glukos: M = 180 g/mol, M(CH\u2082O) = 30 \u21d2 n = 6 \u21d2 C\u2086H\u2081\u2082O\u2086.</p>
<p><strong>Procentuell sammansättning:</strong> %X = (n_X × M_X / M_förening) × 100. F\u00f6r Fe\u2082O\u2083: %Fe = (2×56/160)×100 = 70 %.</p>
<p><strong>Analys till empirisk formel:</strong> Omvandla massaprocenterna till mol (dividera med atommassa), finna minsta kvoten, dividera alla med det minsta m\u00f6jliga. Exempel: 40 % C, 6,7 % H, 53,3 % O \u2192 n(C)=40/12=3,33, n(H)=6,7/1=6,7, n(O)=53,3/16=3,33. Dividera med 3,33: C:H:O = 1:2:1 \u21d2 empirisk formel CH\u2082O.</p>

<h3>4. Balansering av reaktionsscheman</h3>
<p>Massebevarandets lag s\u00e4ger att atomer varken skapas eller f\u00f6rst\u00f6rs i en kemisk reaktion \u2013 balanserade formler \u00e4r en direkt f\u00f6ljd. Steg:</p>
<ol>
  <li>Skriv korrekt formler f\u00f6r alla reaktanter och produkter.</li>
  <li>Balansera grundämnena med <em>st\u00f6kiometriska koefficienter</em> (aldrig \u00e4ndra formler!).</li>
  <li>Balansera metaller f\u00f6rst, sedan icke-metaller, och slutligen v\u00e4te och syre.</li>
  <li>Kontrollera: r\u00e4kna varje atoms antal p\u00e5 b\u00e5da sidor.</li>
</ol>
<p>Exempel: Fe + O\u2082 → Fe\u2082O\u2083. Syre: vänster 2, h\u00f6ger 3. LCM(2,3) = 6 \u21d2 3O\u2082 och 2Fe\u2082O\u2083. D\u00e5 kr\u00e4vs 4Fe: <strong>4Fe + 3O\u2082 → 2Fe\u2082O\u2083</strong>. Kontroll: 4 Fe b\u00e5da sidor, 6 O b\u00e5da sidor. ✓</p>
<p>F\u00f6r komplexa redoxreaktioner anv\u00e4nds halfreaktionsmetoden (oxidationstal\u00e4ndring balanseras separat f\u00f6r oxidation och reduktion).</p>

<h3>5. Mol\u00f6verf\u00f6ringar \u2013 st\u00f6kiometriska ber\u00e4kningar</h3>
<p>Reaktionsf\u00f6rmelns koefficienter anger <em>molförhållanden</em>, inte massf\u00f6rh\u00e5llanden. N2 + 3H\u2082 → 2NH\u2083 s\u00e4ger: 1 mol N\u2082 reagerar med 3 mol H\u2082 och ger 2 mol NH\u2083.</p>
<p><strong>Standardprocedur:</strong></p>
<ol>
  <li>Balansera reaktionen.</li>
  <li>Omvandla given massa till mol: n = m/M.</li>
  <li>Anv\u00e4nd koefficientsf\u00f6rh\u00e5llandet f\u00f6r att ber\u00e4kna mol produkt/reaktant.</li>
  <li>Omvandla till massa (eller volym): m = n×M.</li>
</ol>
<div class="formula-box">Exempel: Beräkna massa CO\u2082 fr\u00e5n 88 g propan C\u2083H\u2088.
C\u2083H\u2088 + 5O\u2082 → 3CO\u2082 + 4H\u2082O  (M(C\u2083H\u2088)=44, M(CO\u2082)=44)
n(C\u2083H\u2088) = 88/44 = 2,0 mol
n(CO\u2082) = 3 × 2,0 = 6,0 mol
m(CO\u2082) = 6,0 × 44 = 264 g</div>

<h3>6. Begr\u00e4nsande reagens och \u00f6verskott</h3>
<p>I praktiken \u00e4r sällan reaktanterna i exakt st\u00f6kiometriska proportioner. Det <strong>begränsande reagenset</strong> (limiting reagent) \u00e4r det som tar slut f\u00f6rst och d\u00e4rmed begränsar m\u00e4ngden produkt. Allt annat \u00e4r i <strong>\u00f6verskott</strong>.</p>
<p><strong>Hur man hittar begränsande reagenset:</strong></p>
<ol>
  <li>Ber\u00e4kna mol av varje reaktant.</li>
  <li>Ber\u00e4kna hur m\u00e5nga mol produkt varje reaktant kan ge (om den v\u00f8re den enda begränsaren).</li>
  <li>Den reaktant som ger <em>minst</em> produkt \u00e4r det begränsande reagenset.</li>
</ol>
<p>Alternativ: dividera tillg\u00e4ngliga mol med koefficienten. Den minsta kvoten pekar ut det begränsande reagenset.</p>
<div class="formula-box">Exempel: 10 g H\u2082 + 80 g O\u2082 → H\u2082O
n(H\u2082) = 10/2 = 5,0 mol; n(O\u2082) = 80/32 = 2,5 mol
2H\u2082 + O\u2082 → 2H\u2082O (koeff. 2:1:2)
Fr\u00e5n H\u2082: 5,0/2 = 2,5 (mol/koeff.)
Fr\u00e5n O\u2082: 2,5/1 = 2,5 (mol/koeff.)
Lika! I detta fall exakt st\u00f6kiometriskt.
Om ist\u00e4llet 3,0 mol O\u2082 anv\u00e4nds: fr\u00e5n H\u2082 f\u00e5r vi 2,5; fr\u00e5n O\u2082 f\u00e5r vi 3,0.
H\u2082 begränsar → n(H\u2082O)=5,0 mol</div>

<h3>7. Procentuellt utbyte</h3>
<p>Verkliga reaktioner ger s\u00e4llan det teoretiska utbytet. Orsaker: sidoreaktioner, ofullst\u00e4ndig reaktion, mekaniska f\u00f6rluster vid separation/rening, j\u00e4mviktsreaktioner som inte g\u00e5r till fullst\u00e4ndigt.</p>
<div class="formula-box">Procentuellt utbyte = (faktisk massa / teoretisk massa) × 100 %

Verklig avkastning (i mol): n_faktisk = n_teor × (utbyte/100)

Exempel: Teoretisk massa: 50 g. Faktisk: 40 g. Utbyte = 80 %.</div>
<p>I industrin \u00e4r utbytet viktigt ekonomiskt och milj\u00f6m\u00e4ssigt. Haber-Bosch-processen f\u00f6r ammoniaksyntes h\u00e5ller f\u00f6r\u00e4ndringsenheten runt 15\u201325 % per genomg\u00e5ng, men avskiljer och \u00e5tercirkulerar st\u00e4ndigt om\u00e4nda reagens.</p>

<h3>8. Volym\u00f6verf\u00f6ringar \u2013 gaser och l\u00f6sningar</h3>
<p>F\u00f6r gaser vid STP (0\u00a0°C, 101,3 kPa): 1 mol idealgas upptar 22,4 L (molär volym). Omvandling: n = V / 22,4.</p>
<p>F\u00f6r l\u00f6sningar: n = c × V (mol = mol/L × L). Volymen m\u00e5ste anges i liter.</p>
<div class="formula-box">St\u00f6kiometri med l\u00f6sning:
NaOH + HCl → NaCl + H\u2082O  (1:1)
c(NaOH)=0,100 mol/L, V=25,0 mL → n(NaOH)=0,00250 mol
n(HCl)=0,00250 mol
V(HCl) om c(HCl)=0,200 mol/L: V=n/c=0,0125 L=12,5 mL</div>

<h3>9. Redoxreaktioner och oxidationstal</h3>
<p><strong>Redoxreaktioner</strong> innebär överföring av elektroner från ett ämne till ett annat. Termen "redox" är en sammandragning av <em>reduktion</em> och <em>oxidation</em>, som alltid sker simultaneously:</p>
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
"""))

# ══════════════════════════════════════════════════════════════════
# 4. SYROR & BASER
# ══════════════════════════════════════════════════════════════════
sections.append(("Syror \u0026 baser", "\U0001f9ea", """
<h2>\U0001f9ea Syror &amp; baser</h2>
<p class="theory-intro">Syra-bas-kemi \u00e4r n\u00e5got vi m\u00f6ter \u00f6verallt: citronsyrans s\u00f6ta syrlighet, bikarbonatets neutralisering av magsyra, blodets exakta pH-kontroll, r\u00e4gnsurning och hur l\u00e4kemedel absorberas i tarmen. F\u00f6rst\u00e5elsen f\u00f6r syror och baser, deras jämvikter och buffrar \u00e4r fundamental i kemi, biologi, farmakologi och milj\u00f6vetenskap.</p>

<h3>1. Tre s\u00e4tt att definiera syror och baser</h3>
<p><strong>Arrhenius (1884):</strong> En syra \u00e4r ett \u00e4mne som avger H\u207a-joner i vattenl\u00f6sning; en bas avger OH\u207b-joner. Enkel och anv\u00e4ndbar men begränsad till vattensystem. HCl → H\u207a + Cl\u207b. NaOH → Na\u207a + OH\u207b.</p>
<p><strong>Brønsted–Lowry (1923):</strong> En syra \u00e4r en protongivare (H\u207a-givare); en bas \u00e4r en protontag\u00e4ngare. Vidgar definitionen till icke-vattensystem och inkluderar amfolyter. HCl + H\u2082O → H\u2083O\u207a + Cl\u207b: h\u00e4r \u00e4r HCl syra, H\u2082O bas. Omv\u00e4ndningen: H\u2083O\u207a + Cl\u207b → HCl + H\u2082O: H\u2083O\u207a \u00e4r d\u00e5 syra, Cl\u207b bas. Varje syra har en <em>konjugatbas</em> (syran utan H\u207a) och varje bas en <em>konjugatsyra</em> (basen + H\u207a). Starkt parens konjugat \u00e4r alltid svagt.</p>
<p><strong>Lewis (1923):</strong> En syra \u00e4r en elektronparmottagare; en bas \u00e4r en elektronpargivare. Vidgar ytterligare \u2013 inkluderar reaktioner utan H\u207a, t.ex. BF\u2083 (Lewis-syra) + NH\u2083 (Lewis-bas) → F\u2083B\u2190NH\u2083.</p>

<h3>2. Stark vs svag syra och bas</h3>
<p><strong>Starka syror</strong> dissocierar fullst\u00e4ndigt i vatten: HCl, HBr, HI, HNO\u2083, H\u2082SO\u2084 (f\u00f6rsta steget), HClO\u2084. En 0,10 mol/L HCl-l\u00f6sning har [H\u207a] = 0,10 mol/L utan restmolekyler av HCl.</p>
<p><strong>Svaga syror</strong> dissocierar ofullst\u00e4ndigt: \u00e4ttiksyra (CH\u2083COOH, Ka = 1,8×10\u207b\u2075), kv\u00e4vlsyrlighet HNO\u2082, kols\u00e5ra H\u2082CO\u2083, ammonium NH\u2084\u207a. En 0,10 mol/L ättiksyrelösning har [H\u207a] \u2248 1,34×10\u207b\u00b3 mol/L (bara ~1,3 % dissocierat).</p>
<p><strong>Starka baser:</strong> NaOH, KOH, Ba(OH)\u2082 \u2013 dissocierar fullst\u00e4ndigt. <strong>Svaga baser:</strong> NH\u2083, aminer (R\u2013NH\u2082) \u2013 tar upp proton med jämviktskonstant Kb.</p>

<h3>3. pH, pOH och vattnets jonprodukt</h3>
<p>Vatten autojoniserar (autoprotonation): 2H\u2082O ⇌ H\u2083O\u207a + OH\u207b. Jämviktskonstanten <strong>Kw = [H\u207a][OH\u207b] = 1,0×10\u207b¹\u2074</strong> vid 25\u00a0°C (men temperaturb\u00e4roende: vid 37\u00a0°C \u00e4r Kw ≈ 2,4×10\u207b¹\u2074).</p>
<div class="formula-box">pH = \u2212log[H\u207a]
pOH = \u2212log[OH\u207b]
pH + pOH = 14  (vid 25 °C)
[H\u207a] = 10^(\u2212pH)

Neutral (25 °C): pH = 7,0  ([H\u207a]=[OH\u207b]=10\u207b\u2077)
Sur: pH &lt; 7
Basisk: pH &gt; 7

Observera: pH 7 \u00e4r neutral vid 25 °C, inte alltid!</div>

<h3>4. Syrakonstanten Ka och svaga syror</h3>
<p>F\u00f6r en svag syra HA ⇌ H\u207a + A\u207b definieras syrakonstanten:</p>
<div class="formula-box">Ka = [H\u207a][A\u207b] / [HA]

pKa = \u2212log(Ka)

Approximation f\u00f6r svag syra (dissociation &lt; 5 %):
[H\u207a] ≈ √(Ka × c)
pH ≈ ½(pKa \u2212 log c)

Exempel: c(CH\u2083COOH) = 0,10 mol/L, Ka = 1,8×10\u207b\u2075
[H\u207a] = √(1,8×10\u207b\u2075 × 0,10) = √(1,8×10\u207b\u2076) = 1,34×10\u207b\u00b3
pH = \u2212log(1,34×10\u207b\u00b3) = 2,87</div>
<p><strong>pKa-skalan:</strong> L\u00e5gt pKa = stark syra (stor Ka, dissocierar kraftigt). H\u00f6gt pKa = svag syra. HCl: pKa ≈ \u22127. \u00c4ttiksyra: pKa = 4,74. Kols\u00e5ra (H\u2082CO\u2083): pKa1 = 6,35. NH\u2084\u207a: pKa = 9,26. Vatten: pKa = 15,7.</p>
<table class="theory-table">
  <tr><th>Syra</th><th>Formula</th><th>Ka</th><th>pKa</th><th>Styrka</th></tr>
  <tr><td>Saltsyra</td><td>HCl</td><td>~10\u2077</td><td>\u22127</td><td>Stark</td></tr>
  <tr><td>Svavelsyra (st.1)</td><td>H\u2082SO\u2084</td><td>&gt;1</td><td>&lt;0</td><td>Stark</td></tr>
  <tr><td>Fosforsyra (st.1)</td><td>H\u2083PO\u2084</td><td>7,5×10\u207b\u00b3</td><td>2,12</td><td>Måttlig</td></tr>
  <tr><td>\u00c4ttiksyra</td><td>CH\u2083COOH</td><td>1,8×10\u207b\u2075</td><td>4,74</td><td>Svag</td></tr>
  <tr><td>Kols\u00e5ra</td><td>H\u2082CO\u2083</td><td>4,3×10\u207b\u2077</td><td>6,35</td><td>Sv\u00e5g</td></tr>
  <tr><td>Ammonium</td><td>NH\u2084\u207a</td><td>5,6×10\u207b¹\u2070</td><td>9,26</td><td>Mycket svag</td></tr>
</table>

<h3>5. Henderson-Hasselbalch och bufferlösningar</h3>
<p>En <strong>buffertl\u00f6sning</strong> motstår \u00e4ndringar i pH n\u00e4r sm\u00e5 m\u00e4ngder syra eller bas tillsätts. Den best\u00e5r av en svag syra och dess konjugatbas (t.ex. ättiksyra + natriumacetat) eller en svag bas och dess konjugatsyra (t.ex. ammoniak + ammoniumklorid).</p>
<div class="formula-box">Henderson-Hasselbalch:
pH = pKa + log([A\u207b] / [HA])

Vid [A\u207b] = [HA]: pH = pKa (halvvägspunkten vid titrering)
Buffertzonen: pH = pKa \u00b1 1 (bufferten fungerar bäst)

Exempel (acetatbuffert, pKa=4,74):
[CH\u2083COO\u207b]/[CH\u2083COOH] = 1 \u2192 pH = 4,74
[CH\u2083COO\u207b]/[CH\u2083COOH] = 10 \u2192 pH = 5,74
[CH\u2083COO\u207b]/[CH\u2083COOH] = 0,1 \u2192 pH = 3,74</div>
<p><strong>Hur bufferten fungerar:</strong> Tillsätter man H\u207a konsumeras det av basen A\u207b → HA (liten pH-\u00e4ndring). Tillsätter man OH\u207b reagerar det med syran HA → A\u207b + H\u2082O (liten pH-\u00e4ndring). Kapaciteten \u00e4r st\u00f6rst n\u00e4r [HA] ≈ [A\u207b].</p>
<p><strong>Biologiska buffrar:</strong> Blodet h\u00e5lls vid pH 7,35–7,45 av tre buffersystem: bikarbonat/kols\u00e5ra (dominerande, pKa = 6,1), fosfatbuffert och proteiner (hemoglobin). En \u00e4ndring till pH 7,2 (acidos) eller 7,6 (alkalos) \u00e4r livshotande. CO\u2082-andning \u00e4r kroppens snabbaste pH-reglering: \u00f6kat CO\u2082 \u2192 mer H\u2082CO\u2083 \u2192 l\u00e4gre pH; snabb andning bl\u00e5ser ut CO\u2082 \u2192 h\u00f6jer pH.</p>

<h3>6. Titrering</h3>
<p>Titrering \u00e4r en kvantitativ analysteknik d\u00e4r en l\u00f6sning med k\u00e4nd koncentration (titrant) tillsätts till en okänd l\u00f6sning tills reaktionen \u00e4r fullst\u00e4ndig (<strong>ekvivalenspunkten</strong>). En <strong>indikator</strong> signalerar ekvivalenspunkten f\u00e4rgsk\u00e4r\u00e4ndrande.</p>
<p><strong>Stark syra \u2013 stark bas:</strong> pH = 7 vid ekvivalenspunkten (t.ex. HCl + NaOH → NaCl + H\u2082O). Anv\u00e4nd fenolftalein (f\u00e4rgs\u00e4ngas 8,2–10) eller bromtymolbl\u00e5tt.</p>
<p><strong>Svag syra \u2013 stark bas:</strong> pH > 7 vid ekvivalenspunkten (produkten \u00e4r ett basalt salt, t.ex. CH\u2083COO\u207b hydrolyiserar). Anv\u00e4nd fenolftalein.</p>
<p><strong>Stark syra \u2013 svag bas:</strong> pH < 7 vid ekvivalenspunkten (produkten NH\u2084\u207a \u00e4r sur). Anv\u00e4nd metylorange.</p>
<div class="formula-box">Grundformel vid 1:1-stoichiometri:
c\u2081 × V\u2081 = c\u2082 × V\u2082

Exempel: 25,0 mL NaOH titreras med 0,100 mol/L HCl.
\u00c5tg\u00e5r 18,5 mL HCl.
n(HCl) = 0,100 × 0,0185 = 1,85×10\u207b\u00b3 mol
n(NaOH) = 1,85×10\u207b\u00b3 mol
c(NaOH) = 1,85×10\u207b\u00b3 / 0,025 = 0,074 mol/L</div>

<h3>7. Saltl\u00f6sningar och hydrolys</h3>
<p>Salter \u00e4r jonf\u00f6reningar fr\u00e5n syra-basneutralisering. Deras l\u00f6sningar \u00e4r inte alltid neutrala:</p>
<p><strong>Neutral:</strong> Salt av stark syra + stark bas. NaCl, KNO\u2083 \u2013 inga joner reagerar med vatten.</p>
<p><strong>Basisk:</strong> Salt av svag syra + stark bas. CH\u2083COONa \u2013 acetatjonen hydrolyserar: CH\u2083COO\u207b + H\u2082O ⇌ CH\u2083COOH + OH\u207b. pH > 7.</p>
<p><strong>Sur:</strong> Salt av stark syra + svag bas. NH\u2084Cl \u2013 ammoniumjonen hydrolyserar: NH\u2084\u207a ⇌ NH\u2083 + H\u207a. pH < 7.</p>

<h3>8. Indikatorer</h3>
<p>En syra-basindikatorer är sj\u00e4lva en svag syra (HIn) d\u00e4r den s\u00f6ndrade (In\u207b) och os\u00f6ndrade formen (HIn) har olika f\u00e4rg. F\u00e4rg\u00e4ndringen sker runt pKa(HIn) \u00b1 1. Litmuspapperets f\u00e4rg\u00e4ndring vid pH 5–8 (r\u00f6tt i syra, bl\u00e5tt i bas). Universalindikator visar ett spektrum fr\u00e5n r\u00f6tt (pH 1) till violett (pH 14).</p>

<h3>9. Sambandet</h3>
<p>Syra-bas-kemi genomsyrar hela kemin och livet. pH styr enzymaktivitet, l\u00e4kemedelsl\u00f6slighet, korrosionshastigheter och \u00e4kerheten hos livsmedel. Buffertl\u00f6sningar är livsnödvändiga \u2013 utan blodets noggranna pH-kontroll skulle kroppens enzymer sluta fungera. Henderson-Hasselbalch-ekvationen \u00e4r ett kraftfullt verktyg som kopplar ihop laboratoriedata (pH, koncentrationer) med den termodynamiska jämviktskonstanten Ka. Titreringen \u00e4r en av kemins mest anv\u00e4nda kvantitativa metoder. Sambandet mellan Ka, Kb och Kw (Ka×Kb = Kw) inneb\u00e4r att n\u00e4r man k\u00e4nner en konjugatsyras Ka kan man direkt ber\u00e4kna basens Kb och d\u00e4rmed hela l\u00f6sningens pH-beteende.</p>
"""))

print(f"Sections written: {len(sections)}")
for s in sections:
    import re
    words = len(re.findall(r'\w+', s[2]))
    print(f"  {s[0]}: ~{words} words")
