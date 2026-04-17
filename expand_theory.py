# -*- coding: utf-8 -*-
"""Replaces THEORY array with deeply expanded versions of all 8 sections."""

with open('kemi1-flashcards.html', 'r', encoding='utf-8') as f:
    html = f.read()

print(f"Input: {len(html)} chars")

THEORY_START = 'const THEORY = ['
THEORY_END   = '];\n\nlet theoryIdx'   # unique closer

ti  = html.find(THEORY_START)
te  = html.find(THEORY_END, ti)
assert ti > 0 and te > 0, "Anchors not found!"
print(f"THEORY: {ti} -> {te+3} ({te-ti} chars)")

NEW_THEORY = r"""const THEORY = [
  // ─── 1. ATOMENS BYGGNAD ────────────────────────────────────────────────────
  {
    cat: "Atomens byggnad",
    icon: "⚛️",
    html: `
<h2>⚛️ Atomens byggnad &amp; periodiska systemet</h2>

<p class="theory-intro">Allt vi kan ta på är uppbyggt av atomer – extremt små enheter med en rik inre struktur. Atomen är i sin tur byggd av ännu mindre partiklar, och sättet de är arrangerade avgör exakt vilket ämne det handlar om och hur det beter sig kemiskt.</p>

<div class="tip-box"><strong>Enkel sammanfattning:</strong> En atom = en kärna av protoner och neutroner + elektroner som kretsar runt. Antalet protoner bestämmer vilket grundämne det är. Antalet elektroner i yttersta skalet bestämmer hur ämnet reagerar.</div>

<h3>1. Atomens tre byggstenar</h3>
<p>En atom har två delar: en kompakt <strong>kärna</strong> i mitten och ett <strong>elektronskal</strong> utanför. Kärnan innehåller:</p>
<ul>
  <li><strong>Protoner (p⁺)</strong> – laddning +1, massa ≈ 1 u (atommasseenhet). Antalet protoner kallas <em>atomnummer Z</em>. Z är unikt för varje grundämne: Z = 1 är alltid väte, Z = 6 är alltid kol, Z = 79 är alltid guld.</li>
  <li><strong>Neutroner (n⁰)</strong> – laddade neutralt, massa ≈ 1 u. Stabiliserar kärnan mot den elektrostatiska repulsionen mellan protonerna. Kärnkraften (starka växelverkan) håller ihop kärnan på kortaste avstånd.</li>
</ul>
<p>Runt kärnan rör sig <strong>elektroner (e⁻)</strong> – laddning −1, massa ≈ 1/1836 u (nästan masslös). En neutral atom har lika många elektroner som protoner. Atomen som helhet är elektriskt neutral.</p>

<div class="formula-box">Masstal: A = Z + N   (Z = protoner, N = neutroner)
Neutroner: N = A − Z
Laddning: q = (antal protoner) − (antal elektroner)

Exempel Na (Natrium, Z=11, A=23):
 11 protoner, 12 neutroner, 11 elektroner → neutral
 Na⁺: 11 protoner, 10 elektroner → laddning +1</div>

<h3>2. Isotoper – samma element, olika kärna</h3>
<p>Isotoper är atomer av <em>samma grundämne</em> (identiskt Z) men med <em>olika antal neutroner</em> (different A). De beter sig identiskt kemiskt men har olika massa och radioaktiva egenskaper.</p>
<table class="theory-table">
  <tr><th>Isotop</th><th>Z</th><th>N</th><th>A</th><th>Stabil?</th><th>Användning</th></tr>
  <tr><td>¹H (protium)</td><td>1</td><td>0</td><td>1</td><td>Ja</td><td>99,98 % av allt väte</td></tr>
  <tr><td>²H (deuterium)</td><td>1</td><td>1</td><td>2</td><td>Ja</td><td>Tungt vatten, kärnfysik</td></tr>
  <tr><td>³H (tritium)</td><td>1</td><td>2</td><td>3</td><td>Nej (β⁻, t½=12 år)</td><td>Fusion, klockor</td></tr>
  <tr><td>¹²C</td><td>6</td><td>6</td><td>12</td><td>Ja</td><td>Definition av u</td></tr>
  <tr><td>¹⁴C</td><td>6</td><td>8</td><td>14</td><td>Nej (β⁻, t½=5730 år)</td><td>Radiometrisk datering</td></tr>
  <tr><td>²³⁵U</td><td>92</td><td>143</td><td>235</td><td>Nej (α, t½=703 Mår)</td><td>Kärnkraft, vapen</td></tr>
</table>
<p>Den <strong>relativa atommassan</strong> (A<sub>r</sub>) i periodiska systemet är det viktade medelvärdet av alla naturliga isotoper. Klors A<sub>r</sub> = 35,45 – inte ett heltal – för att naturen innehåller ~75 % ³⁵Cl och ~25 % ³⁷Cl.</p>

<h3>3. Elektronkonfiguration – hur elektroner är ordnade</h3>
<p>Elektroner befinner sig i <strong>energiskal</strong> (n = 1, 2, 3 …). Lägre skal = lägre energi = närmre kärnan. Varje skal rymmer maximalt 2n² elektroner. Elektroner fyller de lägsta nivåerna först (Aufbau-principen).</p>
<table class="theory-table">
  <tr><th>Skal (n)</th><th>Max e⁻</th><th>Grundämnen i skalet</th></tr>
  <tr><td>1 (K)</td><td>2</td><td>H, He</td></tr>
  <tr><td>2 (L)</td><td>8</td><td>Li → Ne</td></tr>
  <tr><td>3 (M)</td><td>18 (men 8 i enkla modellen)</td><td>Na → Ar (8 i 3:e skalet)</td></tr>
  <tr><td>4 (N)</td><td>32</td><td>K → Kr (inkl. d-block)</td></tr>
</table>
<p><strong>Valenselektroner</strong> = elektroner i yttersta skalet. De avgör atomens kemiska beteende – hur många bindningar den bildar och om den är en metall, icke-metall eller ädelgas.</p>
<table class="theory-table">
  <tr><th>Atom</th><th>Z</th><th>Konfiguration</th><th>Valens-e⁻</th><th>Kemisk karaktär</th></tr>
  <tr><td>H</td><td>1</td><td>1</td><td>1</td><td>Bildar 1 bindning</td></tr>
  <tr><td>C</td><td>6</td><td>2, 4</td><td>4</td><td>Bildar 4 bindningar – grunden för organisk kemi</td></tr>
  <tr><td>N</td><td>7</td><td>2, 5</td><td>5</td><td>Bildar 3 bindningar + 1 fritt par</td></tr>
  <tr><td>O</td><td>8</td><td>2, 6</td><td>6</td><td>Bildar 2 bindningar + 2 fria par</td></tr>
  <tr><td>Na</td><td>11</td><td>2, 8, 1</td><td>1</td><td>Avger 1 e⁻ lätt → Na⁺</td></tr>
  <tr><td>Cl</td><td>17</td><td>2, 8, 7</td><td>7</td><td>Tar upp 1 e⁻ → Cl⁻</td></tr>
  <tr><td>Ar</td><td>18</td><td>2, 8, 8</td><td>8</td><td>Fullt skal, oreaktiv ädelgas</td></tr>
</table>

<h3>4. Det periodiska systemet – organisation och trender</h3>
<p>Periodiska systemet ordnar alla grundämnen efter <em>stigande Z</em>. Periodiciteten uppstår för att elektronkonfigurationen upprepas mönstermässigt varje ny period.</p>
<ul>
  <li><strong>Period (rad)</strong> = antal elektronskal. Period 2 har 2 skal.</li>
  <li><strong>Grupp (kolumn)</strong> = antal valenselektroner (grupp 1–2 och 13–18). Grupp 1: 1 val-e⁻, grupp 17: 7 val-e⁻, grupp 18: 8 (fullt).</li>
  <li><strong>s-block</strong> (grupp 1–2): alkalimetaller och alkaliska jordartsmetaller</li>
  <li><strong>p-block</strong> (grupp 13–18): icke-metaller, halvmetaller, ädelgaser</li>
  <li><strong>d-block</strong> (grupp 3–12): övergångsmetaller (Fe, Cu, Zn …)</li>
</ul>
<table class="theory-table">
  <tr><th>Egenskap</th><th>→ Längs perioden</th><th>↓ Nedåt i grupp</th><th>Förklaring</th></tr>
  <tr><td>Atomradie</td><td>Minskar</td><td>Ökar</td><td>Fler protoner drar e⁻ närmre; fler skal ökar radius</td></tr>
  <tr><td>Joniseringsenergi (IE₁)</td><td>Ökar</td><td>Minskar</td><td>Svårare ta bort e⁻ från kärntätare atom; yttre e⁻ längre bort</td></tr>
  <tr><td>Elektronegativitet</td><td>Ökar (max F=4,0)</td><td>Minskar</td><td>Samma orsak som IE</td></tr>
  <tr><td>Metallkaraktär</td><td>Minskar</td><td>Ökar</td><td>Metaller avger e⁻ lätt; längre ned ger lägre IE</td></tr>
</table>

<h3>5. Sambandet – en röd tråd</h3>
<p>Atomens byggnad är <em>grunden för all kemi</em>. Z bestämmer vilket ämne det är. Valenselektronerna avgör bindningsförmågan. Periodicitetens mönster – samma antalet valenselektroner i varje grupp – förklarar varför Li, Na och K alla reagerar explosivt med vatten, och varför F, Cl och Br alla bildar liknande föreningar. Isotoper förklarar varför atommassor inte är heltal och de radioaktiva egenskaperna används i medicin och arkeologi. Allt kretsar kring en enkel fråga: hur är atomens elektroner ordnade? Det svaret förutsäger nästan allt om hur ämnet beter sig.</p>
`
  },

  // ─── 2. KEMISK BINDNING ────────────────────────────────────────────────────
  {
    cat: "Kemisk bindning",
    icon: "🔗",
    html: `
<h2>🔗 Kemisk bindning</h2>

<p class="theory-intro">Atomer binder sig till varandra för att nå ett lägre energitillstånd. Bindningstypen beror på vilka atomer det gäller och hur stor skillnad i elektronegativitet de har. Det finns tre huvudtyper: jonbindning, kovalent bindning och metallbindning – och de ger upphov till helt olika material med helt olika egenskaper.</p>

<div class="tip-box"><strong>Enkel regel:</strong> Metall + icke-metall → jonbindning. Icke-metall + icke-metall → kovalent. Metall + metall → metallbindning. Elektronegativitetsskillnad &gt; 1,7 → jonbindning.</div>

<h3>1. Jonbindning</h3>
<p>Uppstår när en metall (låg elektronegativitet) möter en icke-metall (hög elektronegativitet). Metallen <em>avger</em> valenselektronerna → positiv katjon. Icke-metallen <em>tar upp</em> elektroner → negativ anjon. De motsatt laddade jonerna attraherar varandra elektrostatiskt och ordnar sig i ett regelbundet <strong>kristallgitter</strong>.</p>
<div class="formula-box">Na → Na⁺ + e⁻          (jonisering, kräver energi – joniseringsenergi)
Cl + e⁻ → Cl⁻           (elektronfångst, frigör energi – elektronaffinitet)
Na⁺ + Cl⁻ → NaCl(s)     (gitterenergi frigörs – mycket stor, ~787 kJ/mol för NaCl)</div>
<p>Det är gitterenergin som gör jonföreningar stabila. Ju fler laddning och ju mindre joner, desto högre gitterenergi (MgO, 2+ och 2−, har gitterenergi ~3800 kJ/mol).</p>
<table class="theory-table">
  <tr><th>Egenskap</th><th>Förklaring</th><th>Exempel</th></tr>
  <tr><td>Hög smält- och kokpunkt</td><td>Starkt elektrostatiskt gitter kräver mycket energi att bryta</td><td>NaCl smälter vid 801 °C</td></tr>
  <tr><td>Sprödhet</td><td>Om gittret skjuts kan lika laddade joner hamna bredvid varandra → repulsion → kristallen splittras</td><td>Salt smulas sönder vid slag</td></tr>
  <tr><td>Leder ström i smälta/lösning</td><td>Fria joner kan röra sig och transportera laddning</td><td>Smält NaCl leder ström</td></tr>
  <tr><td>Leder ej i fast tillstånd</td><td>Jonerna är låsta i gittret</td><td>Fast NaCl isolerar</td></tr>
  <tr><td>Löser sig ofta i vatten</td><td>Vattnets dipoler stabiliserar jonerna (hydrering)</td><td>NaCl, KNO₃ löser sig</td></tr>
</table>

<h3>2. Kovalent bindning</h3>
<p>Uppstår mellan icke-metaller med liknande elektronegativitet. Istället för att avge eller ta upp elektroner <em>delar</em> atomerna ett eller flera elektronpar. Varje delat par = en bindning. Denna delning sänker energin för båda atomerna och ger dem ädelgaskonfiguration (oktett).</p>
<table class="theory-table">
  <tr><th>Bindningstyp</th><th>Delade e⁻-par</th><th>Bindningsstyrka</th><th>Exempel</th></tr>
  <tr><td>Enkelbindning (σ)</td><td>1</td><td>Svagast</td><td>H−H (436 kJ/mol), C−C (347)</td></tr>
  <tr><td>Dubbelbindning (σ+π)</td><td>2</td><td>Medel</td><td>O=O (498), C=C (614), C=O (745)</td></tr>
  <tr><td>Trippelbindning (σ+2π)</td><td>3</td><td>Starkast</td><td>N≡N (945), C≡C (839)</td></tr>
</table>
<p>Fler bindningar = kortare och starkare. N₂ med trippelbindning är extremt stabil – det krävs enorma temperaturer (t.ex. i blixtar) för att bryta den och bilda reaktiva kväveföreningar.</p>

<h4>Polär och opolär kovalent bindning</h4>
<p>Om de bindande atomerna har <em>olika elektronegativitet</em> (Δ < 1,7) är bindningen <strong>polär</strong>: elektronparet förskjuts mot den mer elektronegativa atomen, som får partiell negativ laddning δ−. Den andra atomen får δ+. En hel molekyl är polär om dipolerna inte tar ut varandra (pga. asymmetrisk form).</p>
<table class="theory-table">
  <tr><th>Molekyl</th><th>Bindning</th><th>Geometri</th><th>Polär molekyl?</th><th>Förklaring</th></tr>
  <tr><td>H₂</td><td>Opolär (Δ=0)</td><td>Linjär</td><td>Nej</td><td>Identiska atomer</td></tr>
  <tr><td>HCl</td><td>Polär (Δ=0,9)</td><td>Linjär</td><td>Ja</td><td>Cl drar mer</td></tr>
  <tr><td>CO₂</td><td>Polär bindning (Δ=1,0)</td><td>Linjär, symmetrisk</td><td>Nej</td><td>Dipoler tar ut varandra</td></tr>
  <tr><td>H₂O</td><td>Polär (Δ=1,4)</td><td>Vinkelformad (104°)</td><td>Ja</td><td>Asymmetrisk, 2 fria par på O</td></tr>
  <tr><td>NH₃</td><td>Polär</td><td>Trigonal pyramid</td><td>Ja</td><td>Fritt par på N ger asymmetri</td></tr>
  <tr><td>CH₄</td><td>Svagt polär (Δ=0,4)</td><td>Tetraeder, symmetrisk</td><td>Nej</td><td>Symmetrin tar ut dipol</td></tr>
</table>

<h3>3. Metallbindning</h3>
<p>I en metall avger atomerna sina valenselektroner till ett gemensamt <em>elektronhav</em> som rör sig fritt mellan de positivt laddade metalljonerna i gittret. Det är attraktionen mellan jonerna och det rörliga elektronhavet som håller ihop metallen.</p>
<ul>
  <li><strong>God elektrisk ledning:</strong> Fria elektroner transporterar laddning utan hinder</li>
  <li><strong>God värmeledning:</strong> Samma fria elektroner för vidare kinetisk energi</li>
  <li><strong>Formbarhet/duktilitet:</strong> Gitterlager kan glida utan att bindningarna bryts (jämfört med jonbindning som splittras)</li>
  <li><strong>Metallglans:</strong> Fria elektroner absorberar och återemitterar ljus i alla frekvenser</li>
  <li><strong>Hög smältpunkt (ofta):</strong> Beror på antal valenselektroner och gittrets packningsstruktur – W smälter vid 3422 °C</li>
</ul>

<h3>4. Intermolekylära krafter</h3>
<p>Inom molekyler finns kovalenta bindningar. <em>Mellan</em> molekyler finns svagare intermolekylära krafter – dessa avgör kokpunkt, löslighet och aggregationstillstånd.</p>
<table class="theory-table">
  <tr><th>Krafttyp</th><th>Uppstår i</th><th>Relativ styrka</th><th>Exempel på effekt</th></tr>
  <tr><td>London-dispersion (van der Waals)</td><td>Alla molekyler; ökar med M</td><td>Svagast</td><td>Xe (M=131) kokar vid −108°C, He (M=4) vid −269°C</td></tr>
  <tr><td>Permanent dipol–dipol</td><td>Polära molekyler</td><td>Medel</td><td>HCl (bp −85°C) vs H₂ (bp −253°C)</td></tr>
  <tr><td>Vätebindning (H-brygga)</td><td>H bundet till N, O eller F</td><td>Starkast intermolek.</td><td>H₂O bp 100°C (förv. utan H-bryggor: −80°C)</td></tr>
</table>
<div class="tip-box"><strong>Vätebindningens enorma betydelse:</strong> Utan H-bryggor i vatten skulle världshaven koka bort vid rumstemperatur. Vätebindningar håller också ihop DNA-strängar (A–T och G–C-par) och bestämmer proteiners 3D-struktur.</div>

<h3>5. Sambandet – bindning formar egenskaper</h3>
<p>Bindningstypen är den <em>direkta länken</em> mellan atomers elektronkonfiguration och ett materials makroskopiska egenskaper. NaCl är hårt och sprött – jonbindning. Koppar formas och leder – metallbindning. Teflon är slitstarkt och olösligt – starka kovalenta C−F-bindningar och svaga intermolekylära krafter. Vatten är unikt flytande vid rumstemperatur – vätebindningar. Varje gång du ser ett materials egenskap, fråga dig: vilken bindning skapar det beteendet? Den frågan förenar atomskalan med världen vi lever i.</p>
`
  },

  // ─── 3. REAKTIONER & STÖKIOMETRI ──────────────────────────────────────────
  {
    cat: "Reaktioner & stökiometri",
    icon: "⚗️",
    html: `
<h2>⚗️ Kemiska reaktioner &amp; stökiometri</h2>

<p class="theory-intro">Kemi handlar om att ämnen omvandlas – atomer omgrupperas och bildar nya föreningar. Stökiometri är den kvantitativa sidan: hur mycket av varje ämne förbrukas och bildas. Grunden är molbegreppet, som kopplar samman atomvärldens mikroskala med gramvågens makroskala.</p>

<div class="tip-box"><strong>Enkel sammanfattning:</strong> 1 mol = 6,022 × 10²³ partiklar = exakt ett "grundämnets vikt i gram". Koefficienterna i en balanserad reaktion är molförhållandena. Räkna alltid via mol.</div>

<h3>1. Molbegreppet</h3>
<p>Atomer är för små för att räknas en och en. Kemister arbetar med <strong>mol</strong> – en enhet som binder samman massan (gram) och antalet partiklar.</p>
<div class="formula-box">1 mol = 6,022 × 10²³ partiklar  (Avogadros tal, Nₐ)
Molmassa M [g/mol] = atommassan Ar i gram för ett mol atomer

n = m / M         (n i mol, m i gram, M i g/mol)
m = n × M
N = n × Nₐ        (N = antal partiklar)</div>
<p>Molmassan hittas i periodiska systemet och summeras för formler:<br>
M(H₂O) = 2×1,008 + 15,999 = 18,015 g/mol<br>
M(NaCl) = 22,990 + 35,453 = 58,443 g/mol<br>
M(CaCO₃) = 40,078 + 12,011 + 3×15,999 = 100,086 g/mol</p>

<h3>2. Balansering av reaktionsformler</h3>
<p>Massabevarandet kräver att lika många atomer av varje slag finns på båda sidor. I redoxreaktioner måste dessutom laddning balanseras.</p>
<p><strong>Systematisk metod:</strong></p>
<ol>
  <li>Skriv upp obalanserad reaktion med korrekta formler</li>
  <li>Börja med det mest komplexa ämnet, sätt koefficient 1</li>
  <li>Balansera ett grundämne i taget (börja med metaller, C, H; O sist)</li>
  <li>Kontrollera alla grundämnen, justera vid behov</li>
  <li>Multiplicera koefficienter om de är bråktal</li>
</ol>
<div class="formula-box">Obalanserad:  C₃H₈ + O₂ → CO₂ + H₂O
Steg 1 C:    C₃H₈ + O₂ → 3 CO₂ + H₂O
Steg 2 H:    C₃H₈ + O₂ → 3 CO₂ + 4 H₂O
Steg 3 O:    C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O
Kontroll:    3C=3C ✓  8H=8H ✓  10O=10O ✓</div>

<h3>3. Beräkningar med molförhållanden</h3>
<p>Koefficienterna i en balanserad reaktion anger <em>molförhållanden</em>, inte massförhållanden. Strategin: konvertera massor till mol, tillämpa molförhållandet, konvertera tillbaka.</p>
<div class="formula-box">Reaktion: 4 Fe + 3 O₂ → 2 Fe₂O₃

Fråga: Hur många gram Fe₂O₃ bildas av 55,85 g Fe?
n(Fe) = 55,85 / 55,85 = 1,000 mol
Molförhållande: 4 mol Fe → 2 mol Fe₂O₃  →  ½
n(Fe₂O₃) = 1,000 × (2/4) = 0,500 mol
M(Fe₂O₃) = 2×55,85 + 3×16,00 = 159,70 g/mol
m(Fe₂O₃) = 0,500 × 159,70 = 79,85 g</div>

<h3>4. Begränsande reaktant och procentuellt utbyte</h3>
<p>I verkliga reaktioner är inte reaktanterna alltid i exakt stökiometriska mängder. Den reaktant som tar slut först – den <strong>begränsande reaktanten</strong> – sätter taket för hur mycket produkt som bildas. Den andra reaktanten är i överskott.</p>
<div class="formula-box">Hitta begränsande reaktant:
Beräkna vad varje reaktant skulle ge om den förbrukades helt.
Den som ger MINST produkt är begränsande.

Procentuellt utbyte = (verklig mängd / teoretisk mängd) × 100 %</div>
<p><strong>Exempel:</strong> 2H₂ + O₂ → 2H₂O. Du har 4,0 g H₂ och 16,0 g O₂.<br>
n(H₂) = 4,0/2,016 = 1,98 mol → ger 1,98 mol H₂O<br>
n(O₂) = 16,0/32,00 = 0,500 mol → ger 2×0,500 = 1,00 mol H₂O<br>
O₂ ger minst → <strong>O₂ är begränsande</strong>. Max 1,00 mol = 18,0 g H₂O bildas. H₂ är i överskott.</p>

<h3>5. Reaktionstyper</h3>
<table class="theory-table">
  <tr><th>Typ</th><th>Schema</th><th>Exempel</th><th>Kännetecken</th></tr>
  <tr><td>Syntes</td><td>A + B → AB</td><td>2H₂ + O₂ → 2H₂O</td><td>Två ämnen bildar ett</td></tr>
  <tr><td>Sönderfall</td><td>AB → A + B</td><td>2H₂O₂ → 2H₂O + O₂</td><td>Ett ämne delas upp</td></tr>
  <tr><td>Enkel substitution</td><td>A + BC → AC + B</td><td>Zn + 2HCl → ZnCl₂ + H₂</td><td>Aktivare metall tränger undan</td></tr>
  <tr><td>Dubbel substitution</td><td>AB + CD → AD + CB</td><td>NaCl + AgNO₃ → AgCl↓ + NaNO₃</td><td>Jonbyte, ofta fällning</td></tr>
  <tr><td>Förbränning</td><td>CₓHᵧ + O₂ → CO₂ + H₂O</td><td>CH₄ + 2O₂ → CO₂ + 2H₂O</td><td>Reaktion med syre, energifrigivning</td></tr>
  <tr><td>Neutralisation</td><td>syra + bas → salt + H₂O</td><td>HCl + NaOH → NaCl + H₂O</td><td>Protonöverföring, pH → 7</td></tr>
</table>

<h3>6. Redoxreaktioner</h3>
<p>Redoxreaktioner innebär elektronöverföring. <strong>OIL RIG</strong>: Oxidation Is Loss (av e⁻), Reduction Is Gain (av e⁻). Oxidationstalet spårar elektronöverföringen.</p>
<div class="formula-box">Oxidationstal-regler (prioritet):
1. Fria element: 0
2. Monatomiska joner: = laddningen
3. O i föreningar: −2 (undantag: peroxider −1, OF₂ +2)
4. H i föreningar: +1 (undantag: metallhydrider −1)
5. Summan av ox.tal = totala laddningen

Zn + Cu²⁺ → Zn²⁺ + Cu
Zn: 0 → +2 (oxideras, reduceringsmedel)
Cu²⁺: +2 → 0 (reduceras, oxidationsmedel)</div>
<p><strong>Balansering av redoxreaktioner i sur lösning (halvreaktionsmetoden):</strong><br>
1. Dela upp i oxidations- och reduktionshalvreaktion<br>
2. Balansera atomer (O med H₂O, H med H⁺)<br>
3. Balansera laddning med elektroner (e⁻)<br>
4. Multiplicera halvreaktioner så e⁻ tar ut varandra<br>
5. Addera halvreaktionerna</p>

<h3>7. Sambandet – stökiometri är kopplingen</h3>
<p>Stökiometri är kemin som gör det möjligt att <em>planera och kontrollera</em> reaktioner. Utan den skulle en kemist inte veta hur mycket råvara att köpa, hur stor behållare som behövs eller hur effektiv reaktionen är. Balanseringen bygger på massans bevaranden – ingenting försvinner, allt räknas. Begränsande reaktant är anledningen till att industrin noggrant beräknar hur mycket av varje reaktant som behövs (råvaror kostar pengar). Procentuellt utbyte säger hur bra en process fungerar i praktiken jämfört med teorin. Allt hänger ihop via molbegreppet – bryggan mellan atomernas värld och laboratorievågens gram.</p>
`
  },

  // ─── 4. SYROR & BASER ──────────────────────────────────────────────────────
  {
    cat: "Syror & baser",
    icon: "🧪",
    html: `
<h2>🧪 Syror &amp; baser</h2>

<p class="theory-intro">Syror och baser är allestädes – magsyran som smälter mat, bakpulvret som lyfter bröd, blodet som måste hålla pH 7,4 för att du ska överleva. Att förstå protolys, pH-beräkningar, starka/svaga syror och buffertlösningar är kärnan i syra-baskemi.</p>

<div class="tip-box"><strong>Enkel start:</strong> En syra avger H⁺. En bas tar emot H⁺. pH = −log[H⁺]. pH &lt; 7 är surt, pH &gt; 7 är basiskt, pH = 7 är neutralt (vid 25 °C).</div>

<h3>1. Brønsted-Lowry-teorin</h3>
<p>En <strong>syra</strong> är en <em>protondonator</em> – avger H⁺ till en partner. En <strong>bas</strong> är en <em>protonacceptor</em> – tar emot H⁺. Reaktionen kallas <strong>protolys</strong> och är alltid en jämvikt (⇌) för svaga syror/baser, eller en fullständig reaktion (→) för starka.</p>
<div class="formula-box">Generell protolys:
HA  +  B  ⇌  A⁻  +  BH⁺
(syra) (bas) (konj.bas) (konj.syra)

Ättiksyra i vatten:
CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺
(syra)   (bas)  (konj.bas)  (konj.syra)

Saltsyra i vatten (stark, fullständig):
HCl + H₂O → Cl⁻ + H₃O⁺</div>
<p>Varje syra-basreaktion innefattar <strong>korresponderande par</strong>: HA/A⁻ och H₂O/H₃O⁺ skiljer sig med exakt ett H⁺. <strong>Amfolyter</strong> kan agera som både syra och bas – vatten är det viktigaste exemplet.</p>

<h3>2. Vattnets autoprotolysjämvikt och pH</h3>
<p>Vatten protonolyserar sig självt i liten utsträckning:</p>
<div class="formula-box">2 H₂O ⇌ H₃O⁺ + OH⁻
Kw = [H₃O⁺][OH⁻] = 1,0 × 10⁻¹⁴  (vid 25 °C)

pH = −log[H₃O⁺]         pOH = −log[OH⁻]
pH + pOH = 14    (vid 25 °C)

I neutralt vatten: [H₃O⁺] = [OH⁻] = 1,0×10⁻⁷  → pH = 7</div>
<table class="theory-table">
  <tr><th>[H₃O⁺] mol/L</th><th>pH</th><th>Karaktär</th><th>Vardagsexempel</th></tr>
  <tr><td>1,0×10⁻⁰ = 1,0</td><td>0</td><td>Extremt sur</td><td>Batterisyra</td></tr>
  <tr><td>1,0×10⁻²</td><td>2</td><td>Starkt sur</td><td>Magsyra (~pH 1,5–2)</td></tr>
  <tr><td>1,0×10⁻⁴</td><td>4</td><td>Sur</td><td>Kaffe, tomat</td></tr>
  <tr><td>1,0×10⁻⁷</td><td>7</td><td>Neutral</td><td>Rent vatten</td></tr>
  <tr><td>1,0×10⁻⁹</td><td>9</td><td>Svagt basisk</td><td>Bakpulverlösning</td></tr>
  <tr><td>1,0×10⁻¹¹</td><td>11</td><td>Basisk</td><td>Ammoniak</td></tr>
  <tr><td>1,0×10⁻¹³</td><td>13</td><td>Starkt basisk</td><td>Ugnsrengöring</td></tr>
</table>
<p>Skalan är <em>logaritmisk</em>: en förändring med 1 pH-enhet = 10-faldig förändring av [H₃O⁺]. pH 3 är 10 000 gånger surare än pH 7.</p>

<h3>3. Starka och svaga syror – Ka och pKa</h3>
<p><strong>Starka syror</strong> protolyseras fullständigt – jämvikten ligger helt åt höger. <strong>Svaga syror</strong> protolyseras bara delvis – det råder jämvikt med icke-dissocierade HA-molekyler i lösning.</p>
<div class="formula-box">Syrajämvikt:  HA + H₂O ⇌ H₃O⁺ + A⁻

Ka = [H₃O⁺][A⁻] / [HA]      (syrakonstant)
pKa = −log Ka

Ju lägre pKa → ju starkare syra (fler H⁺ frigörs)</div>
<table class="theory-table">
  <tr><th>Syra</th><th>Typ</th><th>Ka</th><th>pKa</th><th>Kommentar</th></tr>
  <tr><td>HClO₄</td><td>Stark</td><td>≫1</td><td>−10</td><td>Starkaste vanliga syra</td></tr>
  <tr><td>HCl</td><td>Stark</td><td>≫1</td><td>−7</td><td>Fullt dissocierad</td></tr>
  <tr><td>H₂SO₄ (1:a)</td><td>Stark</td><td>≫1</td><td>−3</td><td>Tvåprotonig; 2:a pKa=1,99</td></tr>
  <tr><td>HNO₃</td><td>Stark</td><td>≫1</td><td>−1,3</td><td>Stark oxiderande syra</td></tr>
  <tr><td>H₃PO₄</td><td>Svag</td><td>7,5×10⁻³</td><td>2,15</td><td>Treprotonig</td></tr>
  <tr><td>CH₃COOH</td><td>Svag</td><td>1,8×10⁻⁵</td><td>4,76</td><td>Ättiksyra – typisk svag syra</td></tr>
  <tr><td>H₂CO₃</td><td>Svag</td><td>4,3×10⁻⁷</td><td>6,35</td><td>Kolsyra i blod/läsk</td></tr>
  <tr><td>NH₄⁺</td><td>Svag</td><td>5,6×10⁻¹⁰</td><td>9,25</td><td>Ammoniums konjugerade syra</td></tr>
</table>
<p><strong>pH-beräkning stark syra:</strong> 0,050 M HCl → [H₃O⁺] = 0,050 → pH = −log(0,050) = 1,30<br>
<strong>pH-beräkning svag syra</strong> (approximation när Ka ≪ c):<br>
[H₃O⁺] ≈ √(Ka × c) &nbsp; → &nbsp; 0,10 M CH₃COOH: [H₃O⁺] = √(1,8×10⁻⁵ × 0,10) = 1,34×10⁻³ mol/L → pH = 2,87</p>

<h3>4. Neutralisation och salter</h3>
<div class="formula-box">Syra + bas → salt + vatten
HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)
Nettorektion: H₃O⁺ + OH⁻ → 2H₂O  (ΔH = −56 kJ/mol)</div>
<table class="theory-table">
  <tr><th>Reaktanter</th><th>Salt bildat</th><th>Saltets karaktär</th><th>pH i lösning</th></tr>
  <tr><td>Stark syra + stark bas</td><td>NaCl, KNO₃</td><td>Neutralt</td><td>≈ 7</td></tr>
  <tr><td>Svag syra + stark bas</td><td>CH₃COONa</td><td>Basiskt (hydrolys av A⁻)</td><td>&gt; 7</td></tr>
  <tr><td>Stark syra + svag bas</td><td>NH₄Cl</td><td>Surt (hydrolys av BH⁺)</td><td>&lt; 7</td></tr>
  <tr><td>Svag syra + svag bas</td><td>CH₃COONH₄</td><td>Beror på Ka vs Kb</td><td>≈ 7 om Ka≈Kb</td></tr>
</table>

<h3>5. Titrering</h3>
<p>Titrering bestämmer okänd koncentration. <em>Titranden</em> (okänd c) finns i erlenmeyerkolven. <em>Titratorn</em> (känd c) tillsätts från byretten till <strong>ekvivalenspunkten</strong> – det steg där exakt lika många mol syra och bas reagerat (eller det stökiometriska förhållandet är uppfyllt). En indikator signalerar ekvivalenspunkten med färgbyte.</p>
<div class="formula-box">Vid 1:1-reaktion:   c₁V₁ = c₂V₂

Titreringsexempel:
25,00 mL okänd NaOH titreras med 0,1000 M HCl.
Åtgång: 18,60 mL HCl vid ekvivalenspunkten.
n(HCl) = 0,1000 × 0,01860 = 1,860×10⁻³ mol
n(NaOH) = 1,860×10⁻³ mol (1:1)
c(NaOH) = 1,860×10⁻³ / 0,02500 = 0,07440 mol/L</div>
<p><strong>Indikatorval:</strong> Välj indikator vars omslagsintervall täcker in ekvivalenspunktens pH.<br>
Stark syra + stark bas (EP pH≈7) → BTB (6,0–7,6) eller fenolftalein (8,2–10,0)<br>
Svag syra + stark bas (EP pH &gt; 7) → fenolftalein<br>
Stark syra + svag bas (EP pH &lt; 7) → metylrött (4,4–6,2)</p>

<h3>6. Buffertlösningar – pH-stabilisatorer</h3>
<p>En buffert håller pH stabilt trots att sura eller basiska ämnen tillsätts. Den består av en <strong>svag syra + dess konjugerade bas</strong> (eller svag bas + konj. syra) i jämförbara koncentrationer.</p>
<div class="formula-box">Henderson-Hasselbalch:
pH = pKa + log([A⁻] / [HA])

Bufferteffekt: Vid [A⁻]=[HA] → pH = pKa  (bäst buffertförmåga)
Effektiv buffertzon: pH = pKa ± 1

Om H⁺ tillsätts:  A⁻ + H⁺ → HA     (basen neutraliserar syran)
Om OH⁻ tillsätts: HA + OH⁻ → A⁻ + H₂O  (syran neutraliserar basen)</div>
<table class="theory-table">
  <tr><th>Buffert</th><th>pKa</th><th>pH-zon</th><th>Tillämpning</th></tr>
  <tr><td>CH₃COOH / CH₃COO⁻</td><td>4,76</td><td>3,8–5,8</td><td>Lab, livsmedelstillsatser</td></tr>
  <tr><td>H₂CO₃ / HCO₃⁻</td><td>6,35</td><td>5,4–7,4</td><td>Blodets pH-buffert</td></tr>
  <tr><td>H₂PO₄⁻ / HPO₄²⁻</td><td>7,21</td><td>6,2–8,2</td><td>Biologiska buffertlösningar</td></tr>
  <tr><td>NH₄⁺ / NH₃</td><td>9,25</td><td>8,3–10,3</td><td>Lab-buffert</td></tr>
</table>

<h3>7. Sambandet – allt hänger ihop</h3>
<p>Syra-baskemi bildar ett sammanhängande system. Protonöverföring är den gemensamma tråden: starka syror överlämnar H⁺ fullständigt, svaga delvis – Ka beskriver precis var jämvikten ligger. pH-skalan är verktyget som kvantifierar surheten. Buffertlösningar kombinerar svag syra och konjugerad bas för att <em>motstå</em> pH-förändringen, och det är just detta som gör att blodet håller pH 7,4 trots att metabolism ständigt producerar CO₂ (= H₂CO₃). Titrering är den praktiska metoden för att <em>mäta</em> syra/base-halter med hjälp av samma jämviktsprinciper. Neutralisation, salthydrolys och titrering är alla varianter på samma grundreaktion: H₃O⁺ + OH⁻ ↔ 2H₂O. Förstår du den – förstår du syra-baskemi.</p>
`
  },

  // ─── 5. ORGANISK KEMI ──────────────────────────────────────────────────────
  {
    cat: "Organisk kemi",
    icon: "🌿",
    html: `
<h2>🌿 Organisk kemi</h2>

<p class="theory-intro">Organisk kemi är kemin om kolföreningar. Det finns fler organiska föreningar (~10 miljoner kända) än alla andra ämnen sammantagna. Anledningen är kolatomens unika förmåga att binda till fyra atomer och kedja sig till i princip obegränsat långa strukturer – raka, grenade och ringformade.</p>

<div class="tip-box"><strong>Enkel start:</strong> Kolat har 4 bindningar. Väte har 1. Syre har 2. Kväve har 3. Känn igen kolkedjans namn (met-, et-, prop-…) och de vanligaste funktionella grupperna (OH, COOH, C=O).</div>

<h3>1. Kolatomens unika egenskaper</h3>
<p>Kol (Z=6, konfiguration 2,4) har fyra valenselektroner och bildar alltid <strong>fyra bindningar</strong>. Det är perfekt för att bygga komplexa strukturer:</p>
<ul>
  <li><strong>Kedjor:</strong> C−C−C−C kan fortsätta nästan hur länge som helst. Polyeten har kedjor med tusentals kolatomer.</li>
  <li><strong>Ringar:</strong> Cyklohexan (C₆H₁₂) = 6 kolatomer i ring. Bensen (C₆H₆) = aromatisk ring med konjugerade π-elektroner.</li>
  <li><strong>Hybridisering:</strong> sp³ (tetrahedral, enkelbindningar), sp² (plan, dubbelbindning), sp (linjär, trippelbindning).</li>
  <li><strong>Bindning till N, O, S:</strong> Funktionella grupper med heteroatomer ger organiska molekyler deras reaktiva egenskaper.</li>
</ul>

<h3>2. Kolväten – grundklasserna</h3>
<table class="theory-table">
  <tr><th>Klass</th><th>Formeltyp</th><th>Bindning</th><th>Suffix</th><th>Exempel</th></tr>
  <tr><td>Alkaner</td><td>CₙH₂ₙ₊₂</td><td>Bara C−C (σ)</td><td>-an</td><td>metan, etan, propan, butan</td></tr>
  <tr><td>Alkener</td><td>CₙH₂ₙ</td><td>≥1 C=C (σ+π)</td><td>-en</td><td>eten (etylен), propen</td></tr>
  <tr><td>Alkyner</td><td>CₙH₂ₙ₋₂</td><td>≥1 C≡C (σ+2π)</td><td>-yn</td><td>etyn (acetylen)</td></tr>
  <tr><td>Cykloalkaner</td><td>CₙH₂ₙ</td><td>Ring med C−C</td><td>cyklo-</td><td>cyklohexan, cyklopropan</td></tr>
  <tr><td>Arener</td><td>t.ex. C₆H₆</td><td>Aromatisk ring</td><td>bens-</td><td>bensen, toluen, naftalen</td></tr>
</table>
<p><strong>IUPAC-namngivning:</strong><br>
Prefix för kolkedjans längd: met(1), et(2), prop(3), but(4), pent(5), hex(6), hept(7), okt(8), non(9), dek(10).<br>
Välj längsta kolkedjan som baskedja. Numrera från det håll som ger lägst lokanter till grenar. Substituenter anges som prefix (metyl-, etyl-, klor-, brom-…)</p>
<div class="formula-box">Exempel: CH₃−CH(CH₃)−CH₂−CH₃
Längsta kedja: 4 C → butan
Grenar: metylgrupp på C-2
Namn: 2-metylbutan</div>

<h3>3. Funktionella grupper</h3>
<table class="theory-table">
  <tr><th>Grupp</th><th>Struktur</th><th>Suffix</th><th>Exempel</th><th>Egenskap</th></tr>
  <tr><td>Alkohol</td><td>−OH</td><td>-ol</td><td>etanol C₂H₅OH</td><td>Vätebindning → hög bp, vattenlöslig</td></tr>
  <tr><td>Eter</td><td>R−O−R'</td><td>-eter</td><td>dietyleter</td><td>Opolärt, lågkokande lösningsmedel</td></tr>
  <tr><td>Aldehyd</td><td>−CHO</td><td>-al</td><td>etanal (acetaldehyd)</td><td>Reducerande, reaktiv C=O i ändgrupp</td></tr>
  <tr><td>Keton</td><td>R−CO−R'</td><td>-on</td><td>propan-2-on (aceton)</td><td>C=O i mitten, stabilt lösningsmedel</td></tr>
  <tr><td>Karboxylsyra</td><td>−COOH</td><td>-syra</td><td>ättiksyra CH₃COOH</td><td>Sur, bildar H-bryggor, högt bp</td></tr>
  <tr><td>Ester</td><td>−COO−</td><td>-oat</td><td>etylacetat CH₃COOC₂H₅</td><td>Fruktdoft, lösningsmedel</td></tr>
  <tr><td>Amin</td><td>−NH₂</td><td>-amin</td><td>metylamin CH₃NH₂</td><td>Basisk (tar upp H⁺), fiskladar</td></tr>
  <tr><td>Amid</td><td>−CONH₂</td><td>-amid</td><td>etanamid</td><td>Bindning i proteiner (peptidbindning)</td></tr>
</table>

<h3>4. Isomeri</h3>
<p>Isomerer har <em>samma molekylformel</em> men <em>olika struktur</em> – och ofta helt olika egenskaper.</p>
<ul>
  <li><strong>Konstitutionsisomerer (strukturisomerer):</strong> Olika bindningsmönster. n-butan (bp −1°C) och 2-metylpropan (bp −12°C) är båda C₄H₁₀.</li>
  <li><strong>Stereoisomerer:</strong> Samma bindningsmönster, olika rumslig placering.
    <ul>
      <li><em>Cis/trans:</em> Runt C=C kan substituenter vara på samma (cis) eller olika (trans) sida. Cis-but-2-en bp +4°C, trans-but-2-en bp +1°C.</li>
      <li><em>Enantiomerer:</em> Spegelbilder som inte kan läggas ovanpå varandra (kiralitet). Viktigt i läkemedel – en enantiomer kan vara aktiv, den andra inaktiv eller giftig.</li>
    </ul>
  </li>
</ul>

<h3>5. Viktiga reaktionstyper</h3>
<table class="theory-table">
  <tr><th>Typ</th><th>Substrat</th><th>Reagent</th><th>Produkt</th><th>Mekanism</th></tr>
  <tr><td>Addition</td><td>Alken (C=C)</td><td>HBr, H₂, H₂O, Br₂</td><td>Mättat C−C</td><td>π-bind. bryts, adderas över dubbel</td></tr>
  <tr><td>Radikal substitution</td><td>Alkan</td><td>Cl₂/Br₂ + UV</td><td>Halogenalkan</td><td>Radikal kedjereaktion</td></tr>
  <tr><td>Eliminering</td><td>Alkohol</td><td>konc. H₂SO₄, värme</td><td>Alken + H₂O</td><td>E1/E2, dehydratisering</td></tr>
  <tr><td>Nukleofilsubstitution</td><td>Halogenalkan</td><td>OH⁻, CN⁻, NH₃</td><td>Alkohol, nitril, amin</td><td>SN1 eller SN2</td></tr>
  <tr><td>Förestring</td><td>Karboxylsyra + alkohol</td><td>H⁺ (katalys)</td><td>Ester + H₂O</td><td>Kondensation (jämvikt)</td></tr>
  <tr><td>Hydrolys</td><td>Ester</td><td>H₂O + H⁺/OH⁻</td><td>Syra + alkohol</td><td>Spjälkning av C−O</td></tr>
  <tr><td>Oxidation</td><td>Alkohol (prim.)</td><td>KMnO₄, K₂Cr₂O₇</td><td>Aldehyd → karboxylsyra</td><td>C−H → C=O</td></tr>
</table>

<h3>6. Polymerer</h3>
<p>Polymerer är makromolekyler byggda av upprepade <em>monomerer</em>.</p>
<ul>
  <li><strong>Additionspolymerer:</strong> Alkener polymeriseras utan biprodukt. Polyeten: n CH₂=CH₂ → (−CH₂−CH₂−)ₙ. PVC, polystyren, PTFE (teflon) – alla additionspolymerer.</li>
  <li><strong>Kondensationspolymerer:</strong> Bildas av difunktionella monomerer med avspjälkning av H₂O (eller HCl). Nylon: diamin + dikarbonsyra. Polyester (PET): diol + dikarbonsyra.</li>
  <li><strong>Biologiska polymerer:</strong> Proteiner = polyamider av aminosyror (peptidbindning = amidgrupp). Stärkelse/cellulosa = polysackarider av glukos. DNA = polynukleotid.</li>
</ul>

<h3>7. Sambandet – kolkedjans mångfald</h3>
<p>Organisk kemi är möjlig tack vare kolatomens unika egenskaper. Kedjans längd avgör om ett ämne är gas, vätska eller fast. Funktionell grupp avgör reaktivitet och löslighet. Isomeri förklarar varför samma formel kan ge helt olika ämnen. Och polymerer visar hur enkla monomerer kan byggas till komplexa material – från plast till livets molekyler. Allt är variationer på samma tema: kolatomen med fyra bindningar, och dess sätt att kombineras med H, O, N och andra atomer i oändliga strukturer.</p>
`
  },

  // ─── 6. LÖSNINGAR & KONCENTRATION ─────────────────────────────────────────
  {
    cat: "Lösningar & koncentration",
    icon: "💧",
    html: `
<h2>💧 Lösningar &amp; koncentration</h2>

<p class="theory-intro">En lösning är ett homogent system där ett lösningsmedel (oftast vatten) omger partiklar av ett löst ämne. Koncentration anger hur mycket av det lösta ämnet som finns per volymenhet. Det är en av kemins mest grundläggande storlekar – alla reaktioner i lösning förutsätter att du kan beräkna koncentrationer.</p>

<div class="tip-box"><strong>Enkel start:</strong> Molkoncentration c = n/V. Enheten är mol/L (= M = molar). Spädd lösning = låg c. Koncentrerad = hög c.</div>

<h3>1. Molkoncentration (molaritet)</h3>
<p>Den dominerande koncentrationsmåttet i kemi anger substansmängden löst ämne per liter <em>lösning</em> (inte lösningsmedel).</p>
<div class="formula-box">c = n / V          [mol/L, M eller molar]
n = c × V          [mol]
V = n / c          [L]

Beredning: 5,850 g NaCl (M=58,50 g/mol) löses och speds till 500,0 mL.
n = 5,850 / 58,50 = 0,1000 mol
c = 0,1000 / 0,5000 = 0,2000 mol/L = 0,2000 M</div>

<h3>2. Andra koncentrationsmått</h3>
<table class="theory-table">
  <tr><th>Mått</th><th>Definition</th><th>Enhet</th><th>Användning</th></tr>
  <tr><td>Masskoncentration</td><td>m(löst) / V(lösning)</td><td>g/L</td><td>Medicin, livsmedel</td></tr>
  <tr><td>Massfraktion (w)</td><td>m(löst) / m(lösning)</td><td>dimensionslös (0–1 eller %)</td><td>Koncentrerade syror, industri</td></tr>
  <tr><td>Molalitet</td><td>n(löst) / m(lösningsmedel)</td><td>mol/kg</td><td>Koligativa egenskaper</td></tr>
  <tr><td>Molbråk</td><td>n(A) / n(total)</td><td>dimensionslös</td><td>Gasgemensamma tryck, Raoult</td></tr>
</table>
<div class="formula-box">Samband: c [mol/L] = w × ρ_lösning [g/mL] × 1000 / M [g/mol]

Exempel: Konc. H₂SO₄ (96 % m/m, ρ=1,84 g/mL, M=98,08)
c = 0,96 × 1,84 × 1000 / 98,08 = 18,0 mol/L</div>

<h3>3. Spädning</h3>
<p>Vid spädning tillsätts lösningsmedel. Substansmängden av löst ämne är oförändrad – det är volymen som ökar och koncentrationen minskar.</p>
<div class="formula-box">c₁ × V₁ = c₂ × V₂    (konservering av substansmängd)

Exempel: 25,0 mL HCl (2,00 M) späds till 100,0 mL.
c₂ = (2,00 × 25,0) / 100,0 = 0,500 M

Laborationsregel: Häll alltid syra i vatten – aldrig tvärtom!
(Värmeutveckling vid utspädning av konc. H₂SO₄ är enorm)</div>

<h3>4. Löslighet och lösningsprocessen</h3>
<p>Hur mycket av ett ämne som löser sig i ett givet lösningsmedel beror på intermolekylära interaktioner. Principen är <strong>"lika löser lika"</strong>: polära ämnen löser sig i polära lösningsmedel (vatten), opolära i opolära (hexan, bensin).</p>
<p><strong>Varför löser sig jonföreningar i vatten?</strong> Vattenmolekylernas dipol attraherar katjoner (O-sidan) och anjoner (H-sidan). Hydrationsenergin är tillräckligt stor för att övervinna gitterenergin.</p>
<p><strong>Faktorer som påverkar lösligheten:</strong></p>
<ul>
  <li><strong>Temperatur:</strong> De flesta fasta ämnen löser sig bättre vid högre T (endoterm lösning). Gaser löser sig sämre vid högre T (omvänt) – därför tappar varmt vatten syre.</li>
  <li><strong>Tryck (gaser):</strong> Henrys lag: c = k × p. Högre partialtryck → mer gas löst. Kolsyrat vatten: CO₂ under tryck; öppnas flaskan → tryck sjunker → CO₂ kokar av.</li>
  <li><strong>Gemensam-joneffekt:</strong> Om en av lösningens joner redan finns löst minskar lösligheten för saltet (Le Chateliers princip).</li>
</ul>

<h3>5. Elektrolyter och dissociation</h3>
<p>Elektrolyter dissocierar i joner i vatten och leder ström. Icke-elektrolyter (socker, alkohol) gör det inte.</p>
<table class="theory-table">
  <tr><th>Typ</th><th>Dissociation</th><th>Ledningsförmåga</th><th>Exempel</th></tr>
  <tr><td>Stark elektrolyt</td><td>Fullständig (→)</td><td>Hög</td><td>NaCl, HCl, NaOH, KNO₃</td></tr>
  <tr><td>Svag elektrolyt</td><td>Partiell (⇌)</td><td>Låg</td><td>CH₃COOH, NH₃, HF</td></tr>
  <tr><td>Icke-elektrolyt</td><td>Ingen</td><td>Noll</td><td>Sackaros, etanol, glykos</td></tr>
</table>

<h3>6. Fällningsreaktioner och löslighetsprodukten Ksp</h3>
<p>När jonkoncentrationernas produkt överstiger löslighetsprodukten Ksp fälls ämnet ut som precipitat.</p>
<div class="formula-box">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)
Ksp(AgCl) = [Ag⁺][Cl⁻] = 1,8×10⁻¹⁰

Fällning sker om: Q = [Ag⁺]₀[Cl⁻]₀ > Ksp
Ingen fällning om: Q < Ksp

Löslighet s: Ksp = s² → s = √Ksp
s(AgCl) = √(1,8×10⁻¹⁰) = 1,3×10⁻⁵ mol/L = 1,9 mg/L</div>
<table class="theory-table">
  <tr><th>Salt</th><th>Ksp (25°C)</th><th>Löslighet</th><th>Utseende</th></tr>
  <tr><td>AgCl</td><td>1,8×10⁻¹⁰</td><td>Svårlösligt</td><td>Vit fällning</td></tr>
  <tr><td>BaSO₄</td><td>1,1×10⁻¹⁰</td><td>Mycket svårlösligt</td><td>Vit fällning</td></tr>
  <tr><td>PbI₂</td><td>9,8×10⁻⁹</td><td>Svårlösligt</td><td>Gul fällning</td></tr>
  <tr><td>CaCO₃</td><td>3,4×10⁻⁹</td><td>Svårlösligt</td><td>Vit (kalksten)</td></tr>
  <tr><td>Fe(OH)₃</td><td>2,8×10⁻³⁹</td><td>Extremt svårlösligt</td><td>Rödbrun fällning (rost)</td></tr>
</table>

<h3>7. Koligativa egenskaper</h3>
<p>Koligativa egenskaper beror på <em>antalet</em> lösta partiklar (inte deras natur). Viktiga exempel:</p>
<ul>
  <li><strong>Kokpunktsförhöjning:</strong> ΔTb = Kb × m × i (m = molalitet, i = van 't Hoff-faktor = antal partiklar per formelenhet). Salt (i=2) ger dubbelt effekt jämfört med socker (i=1).</li>
  <li><strong>Fryspunktssänkning:</strong> ΔTf = Kf × m × i. Koksalt på vintervägar sänker fryspunkten.</li>
  <li><strong>Osmotiskt tryck:</strong> π = MRTi. Rödblodkroppar lyserar i destillerat vatten (hypotont) men krymper i saltvatten (hypertont).</li>
</ul>

<h3>8. Sambandet – lösningarnas roll</h3>
<p>Lösningskemi kopplar samman nästan all annan kemi. Syra-basreaktioner sker i lösning. Elektrokemiska celler kräver elektrolytlösningar. Titrering bygger på exakt beredning av standardlösningar. Fällningsreaktioner används för kvalitativ analys (vilka joner finns?) och rening. Lösligheten och Ksp förklarar varför kalciumkarbonat löser sig i sur regn och fälls ut som kalksten. Koncentrationsbegreppet – enkelt men kraftfullt – är verktyget som förenar mol-beräkningarna med laboratoriet.</p>
`
  },

  // ─── 7. TERMOKEMI & ENERGI ─────────────────────────────────────────────────
  {
    cat: "Termokemi & energi",
    icon: "🌡️",
    html: `
<h2>🌡️ Termokemi &amp; energi</h2>

<p class="theory-intro">All kemi innebär energiutbyte. Bindningar bryts (energi krävs) och bildas (energi frigörs). Nettot avgör om reaktionen är exoterm (värme avges) eller endoterm (värme tas upp). Termokemi ger oss verktyg för att mäta, beräkna och förutsäga dessa energiutbyten.</p>

<div class="tip-box"><strong>Enkel start:</strong> ΔH &lt; 0 = exoterm (värme frigörs, reaktionen "hettar upp"). ΔH &gt; 0 = endoterm (värme tas upp, reaktionen "kyler ner").</div>

<h3>1. Entalpi och reaktionsentalpi</h3>
<p><strong>Entalpi (H)</strong> är ett termodynamiskt tillståndsbegrepp: H = U + pV (inre energin + trycksvolymarbete). Vid kemiska reaktioner vid konstant tryck (laboratoriet, atmosfären) är energiutbytet precis ΔH.</p>
<div class="formula-box">ΔH = H(produkter) − H(reaktanter)    [kJ/mol]
ΔH < 0:  Exoterm – energi frigörs till omgivningen
ΔH > 0:  Endoterm – energi tas upp från omgivningen

Standardbetingelser: 25°C (298 K), 1 bar, 1 mol/L
Notation: ΔH° = standardentalpi</div>
<p><strong>Standardbildningsentalpi ΔHf°</strong>: entalpinförändringen när 1 mol förening bildas från grundämnena i deras stabila standardform. Per definition: ΔHf°(element i standardform) = 0.</p>
<div class="formula-box">ΔH°rxn = Σ ΔHf°(produkter) − Σ ΔHf°(reaktanter)

Förbränning av propan C₃H₈ + 5O₂ → 3CO₂ + 4H₂O:
ΔH°rxn = [3×(−393,5) + 4×(−285,8)] − [(−103,8) + 5×0]
       = [−1180,5 + (−1143,2)] − [−103,8]
       = −2323,7 − (−103,8) = −2219,9 kJ/mol</div>

<h3>2. Hess's lag</h3>
<p>Entalpinförändringen för en reaktion är <em>oberoende av reaktionsvägen</em> – den beror bara på start- och sluttillstånd. Det betyder att vi kan addera termokemiska ekvationer (och deras ΔH-värden) för att beräkna ΔH för reaktioner som är svåra att mäta direkt.</p>
<div class="formula-box">Regler för att använda Hess:
• Om reaktionen multipliceras med n → ΔH multipliceras med n
• Om reaktionen vänds → ΔH byter tecken

Beräkna ΔH för:  C(s) + ½O₂(g) → CO(g)   (svårmätt)
Ges:
(1) C(s) + O₂(g) → CO₂(g)           ΔH₁ = −393,5 kJ
(2) CO(g) + ½O₂(g) → CO₂(g)         ΔH₂ = −283,0 kJ
Lösning: (1) − (2) → C + O₂ − CO − ½O₂ → CO₂ − CO₂
Förenklar till: C + ½O₂ → CO
ΔH = −393,5 − (−283,0) = −110,5 kJ/mol</div>

<h3>3. Bindningsentalpier</h3>
<p>En reaktions ΔH kan uppskattas från bindningsentalpierna – energin som krävs för att bryta (eller frigörs vid att bilda) 1 mol av varje bindningstyp i gasform.</p>
<div class="formula-box">ΔH ≈ Σ D(bindningar brutna) − Σ D(bindningar bildade)
(endotermen för att bryta minus exotermin för att bilda)

Exempel: H₂ + Cl₂ → 2HCl
Brutet: H−H (436) + Cl−Cl (243) = 679 kJ
Bildat: 2 × H−Cl (432) = 864 kJ
ΔH ≈ 679 − 864 = −185 kJ/mol</div>
<table class="theory-table">
  <tr><th>Bindning</th><th>D (kJ/mol)</th><th>Bindning</th><th>D (kJ/mol)</th></tr>
  <tr><td>H−H</td><td>436</td><td>C−H</td><td>413</td></tr>
  <tr><td>O=O</td><td>498</td><td>C−C</td><td>347</td></tr>
  <tr><td>N≡N</td><td>945</td><td>C=C</td><td>614</td></tr>
  <tr><td>H−O</td><td>463</td><td>C≡C</td><td>839</td></tr>
  <tr><td>H−Cl</td><td>432</td><td>C=O</td><td>745</td></tr>
  <tr><td>Cl−Cl</td><td>243</td><td>C−O</td><td>358</td></tr>
</table>

<h3>4. Kalorimetri – mäta energiutbyte</h3>
<p>En <strong>kalorimeter</strong> mäter temperaturförändringen i ett välkänt vattensystem för att beräkna energiutbytet.</p>
<div class="formula-box">Q = m × c_p × ΔT
m = massa av lösning [g]
c_p = specifik värmekapacitet [J/(g·K)]
ΔT = temperaturändring [K eller °C]

c_p(vatten) = 4,184 J/(g·K)

Exempel: 100 mL 0,500 M HCl reagerar med 100 mL 0,500 M NaOH.
Temperaturen stiger 3,34°C. m ≈ 200 g.
Q = 200 × 4,184 × 3,34 = 2795 J = 2,795 kJ
n(HCl) = 0,500 × 0,100 = 0,0500 mol
ΔH = −2,795 / 0,0500 = −55,9 kJ/mol   (nära teoretiskt −57,1)</div>

<h3>5. Entropi och Gibbs fria energi – spontanitet</h3>
<p><strong>Entropi (S)</strong> mäter graden av oordning eller mikrotillståndens antal. Naturen tenderar mot ökat antal mikrotillstånd (2:a termodynamikens lag) → ΔS_total > 0 för spontana processer.</p>
<p><strong>Gibbs fria energi (G)</strong> kombinerar entalpi och entropi till ett enda kriterium för spontanitet vid konstant T och p:</p>
<div class="formula-box">ΔG = ΔH − T × ΔS       (T i Kelvin)
ΔG < 0:  Spontan reaktion (frigör fri energi)
ΔG > 0:  Icke-spontan (kräver energitillförsel, t.ex. elektrolys)
ΔG = 0:  Systemet i jämvikt</div>
<table class="theory-table">
  <tr><th>ΔH</th><th>ΔS</th><th>ΔG</th><th>Spontan?</th><th>Typreaktion</th></tr>
  <tr><td>−</td><td>+</td><td>Alltid −</td><td>Ja, alltid</td><td>Förbränning</td></tr>
  <tr><td>−</td><td>−</td><td>− vid låg T</td><td>Ja vid låg T</td><td>Frysning av vatten</td></tr>
  <tr><td>+</td><td>+</td><td>− vid hög T</td><td>Ja vid hög T</td><td>Smältning av is</td></tr>
  <tr><td>+</td><td>−</td><td>Alltid +</td><td>Nej, aldrig</td><td>Inget naturligt</td></tr>
</table>
<div class="formula-box">Samband med jämviktskonstanten:
ΔG° = −RT ln K      (R = 8,314 J/mol·K)
K > 1 → ΔG° < 0 → reaktionen gynnas (produkter dominerar)
K < 1 → ΔG° > 0 → reaktionen missgynnas</div>

<h3>6. Fasövergångar och energi</h3>
<p>Fasövergångar kräver eller frigör energi utan temperaturförändring:</p>
<table class="theory-table">
  <tr><th>Övergång</th><th>Energi</th><th>Riktning</th><th>Exempel (vatten)</th></tr>
  <tr><td>Smältning</td><td>+ΔHfus</td><td>fast → flytande</td><td>+6,01 kJ/mol vid 0°C</td></tr>
  <tr><td>Stelning</td><td>−ΔHfus</td><td>flytande → fast</td><td>−6,01 kJ/mol</td></tr>
  <tr><td>Ångbildning</td><td>+ΔHvap</td><td>flytande → gas</td><td>+40,7 kJ/mol vid 100°C</td></tr>
  <tr><td>Kondensation</td><td>−ΔHvap</td><td>gas → flytande</td><td>−40,7 kJ/mol</td></tr>
  <tr><td>Sublimation</td><td>+ΔHsub</td><td>fast → gas</td><td>Torris, CO₂</td></tr>
</table>

<h3>7. Sambandet – energi förenar all kemi</h3>
<p>Termokemi är den kvantitativa sidan av energiflödet i kemi. ΔH ges av bindningsskillnaderna – förklarar varför fossila bränslen ger energi (C−H och C−C ger CO₂ och H₂O med lägre entalpi). Hess lag gör det möjligt att beräkna ΔH för reaktioner man aldrig kan utföra i ett steg. Entropi och Gibbs fria energi förklarar varför vissa reaktioner som är endoterma ändå sker spontant (ΔS stor nog) och varför järn rostar utan energitillförsel. Kalorimetri mäter allt detta i labbet. Och under allt detta: energin är bevarad, men fri energi kan omvandlas till arbete – det är grundprincipen i allt från batterier till biologisk metabolism.</p>
`
  },

  // ─── 8. LABORATIV KEMI & SÄKERHET ─────────────────────────────────────────
  {
    cat: "Laborativ kemi & säkerhet",
    icon: "🔬",
    html: `
<h2>🔬 Laborativ kemi &amp; säkerhet</h2>

<p class="theory-intro">Laboratoriet är platsen där teorin möter verkligheten. Men det är också en miljö med potentiella faror – frätande syror, brandfarliga lösningsmedel, giftiga ångor. Säkerhetskunskap är inte bara en regel att memorera, det är en förutsättning för att kunna arbeta tryggt och tillförlitligt.</p>

<div class="tip-box"><strong>Gyllene regel:</strong> Om du är osäker på vad ett ämne gör – läs säkerhetsdatabladet (SDS) <em>innan</em> du börjar. Skyddsglasögon bärs alltid, utan undantag.</div>

<h3>1. Grundläggande säkerhetsregler</h3>
<ul>
  <li><strong>Skyddsglasögon alltid</strong> – skyddar mot stänk av syror, baser och organiska lösningsmedel som kan skada hornhinnan permanent</li>
  <li><strong>Labbrock och slutna skor</strong> – skyddar hud och kläder mot kemikaliestänk</li>
  <li><strong>Lång hår ska bindas upp</strong> – risk för kontakt med kemikalier och Bunsen-brännare</li>
  <li><strong>Inget ätande, drickande eller sminkande</strong> i labbet – risk för förtäring av gifter</li>
  <li><strong>Ventilation/dragskåp</strong> – används för flyktiga, giftiga eller starka ämnen (konc. HCl, HNO₃, NH₃, lösningsmedel)</li>
  <li><strong>Häll syra i vatten – aldrig tvärtom</strong> – utspädning av konc. H₂SO₄ frigör enorm värme; vatten i syra kan koka explosivt</li>
  <li><strong>Känn till nödprocedurerna:</strong> nöddusch (15 min spolning vid huddopp), ögonsköljning (15 min rinnande vatten), brandsläckare (pulver, CO₂ – ej vatten på kemikalier), första hjälpen</li>
</ul>

<h3>2. GHS-faropiktogram</h3>
<p>GHS (Globally Harmonized System) är det internationella systemet för märkning av kemiska faror med standardiserade piktogram på orangeröd romb.</p>
<table class="theory-table">
  <tr><th>Piktogram</th><th>Farokategori</th><th>Vad det innebär</th><th>Exempel</th></tr>
  <tr><td>💀 Dödskalle</td><td>Akut toxicitet (cat 1–3)</td><td>Kan döda vid inandning/kontakt</td><td>HCN, Cl₂, CO</td></tr>
  <tr><td>❗ Utropstecken</td><td>Irriterande/skadlig</td><td>Kan orsaka irritation, allergi</td><td>Aceton, NaOH sp. lösning</td></tr>
  <tr><td>🔥 Flamma</td><td>Brandfarlig</td><td>Låg flampunkt, lätt antändlig</td><td>Etanol (fp 13°C), hexan</td></tr>
  <tr><td>🔥 Flamma över cirkel</td><td>Oxiderande</td><td>Fremjar förbränning av andra</td><td>H₂O₂ konc., KMnO₄, KNO₃</td></tr>
  <tr><td>🧪 Frätande</td><td>Frätande</td><td>Förstör hud/ögon/metaller</td><td>H₂SO₄ konc., NaOH konc., HF</td></tr>
  <tr><td>💥 Explosion</td><td>Explosiv</td><td>Kan explodera vid stöt/värme</td><td>Organiska peroxider, nitroglycerine</td></tr>
  <tr><td>☣️ Hälsofara</td><td>Allvarlig hälsofara</td><td>Cancer, organ, reproduktion</td><td>Bensen, asbest, formaldehyd</td></tr>
  <tr><td>🌿 Miljö</td><td>Miljöfarlig</td><td>Akut/kronisk skada på vattenmiljö</td><td>Kvicksilver, kloroform</td></tr>
  <tr><td>💨 Gasflaska</td><td>Gas under tryck</td><td>Risk för explosion vid uppvärmning</td><td>N₂, CO₂-patron</td></tr>
</table>

<h3>3. Laboratorieutrustning och precision</h3>
<table class="theory-table">
  <tr><th>Utrustning</th><th>Syfte</th><th>Precision</th><th>Viktigt att veta</th></tr>
  <tr><td>Bägare (beaker)</td><td>Blanda, värma, lösa</td><td>Låg ±5–10%</td><td>Ej för exakta volymmätningar</td></tr>
  <tr><td>Erlenmeyerkolv</td><td>Titrering, blanda utan stänk</td><td>Låg</td><td>Smal hals minskar avdunstning</td></tr>
  <tr><td>Mätkolv (vol.flask)</td><td>Exakt beredning av lösning</td><td>Hög ±0,02–0,1%</td><td>Läs meniskens undersida vid strecket</td></tr>
  <tr><td>Vollpipett</td><td>Exakt avsatt volym</td><td>Hög ±0,05%</td><td>Används med pipettfiller, ej munnen</td></tr>
  <tr><td>Graderad pipett</td><td>Variabel avsatt volym</td><td>Medel ±0,5%</td><td>Läs på graderade skalan</td></tr>
  <tr><td>Byrett</td><td>Titrering – mäter åtgången volym</td><td>Hög ±0,05 mL</td><td>Läs undre menisk; luft i toppen ger fel</td></tr>
  <tr><td>pH-meter</td><td>Exakt pH-mätning</td><td>Hög ±0,01 pH</td><td>Kalibreras med buffertlösningar</td></tr>
  <tr><td>Spektrofotometer</td><td>Absorbans → koncentration</td><td>Hög</td><td>Beer-Lamberts lag: A = ε l c</td></tr>
  <tr><td>Analytisk våg</td><td>Exakt vägning</td><td>±0,1–0,0001 g</td><td>Tareras, skyddas från drag och fukt</td></tr>
</table>

<h3>4. Viktiga laborationstekniker</h3>
<p><strong>Titrering:</strong></p>
<ol>
  <li>Skölj byretten med titratorlösningen, fyll upp och nollställ</li>
  <li>Pipettera en exakt volym titrand i erlenmeyerkolven; tillsätt indikator</li>
  <li>Tillsätt titratorlösning droppvis, swirla konstant</li>
  <li>Nära ekvivalenspunkten: tillsätt halvdroppar – färgbytet ska bestå >30 sekunder</li>
  <li>Läs av byretten (precisionen är ±0,05 mL), beräkna c med c₁V₁=c₂V₂</li>
</ol>
<p><strong>Beredning av standardlösning:</strong></p>
<ol>
  <li>Väg en exakt mängd primärstandard (hög renhet, stabilt ämne: Na₂CO₃, KHC₈H₄O₄)</li>
  <li>Lös i lite vatten i bägare; överför kvantitativt till mätkolv</li>
  <li>Fyll upp till strecket med destillerat vatten; invertera 10 ggr för att blanda</li>
</ol>
<p><strong>Gravimetri:</strong> Fäll ut en svårlöslig förening (t.ex. BaSO₄). Filtrera, torka vid 120°C, väg. Beräkna halten av analysaten ur produktens massa.</p>
<p><strong>Spektrofotometri (Beer-Lambert):</strong></p>
<div class="formula-box">A = ε × l × c
A = absorbans (dimensionslös)
ε = molär absorptivitet [L/(mol·cm)]
l = kyvettlängd [cm]
c = koncentration [mol/L]
Metod: Rita standardkurva (A vs c) → interpolera okänd c</div>

<h3>5. Felanalys och rapportskrivning</h3>
<p>Varje mätning innehåller osäkerhet. Det är viktigt att identifiera, kvantifiera och minimera felen.</p>
<table class="theory-table">
  <tr><th>Feltyp</th><th>Karaktär</th><th>Hur minimeras?</th><th>Exempel</th></tr>
  <tr><td>Systematiskt fel</td><td>Drar åt ett håll konsekvent; påverkar noggrannhet</td><td>Kalibrering, metodbyte</td><td>Felkalibrerad byrett, ofullständig reaktion</td></tr>
  <tr><td>Slumpmässigt fel</td><td>Varierar åt båda håll; påverkar precision</td><td>Upprepa mätningar, ta medelvärde</td><td>Varierande avläsning, temperaturfluktuationer</td></tr>
  <tr><td>Grovfel</td><td>Enstaka stor avvikelse</td><td>Kassera outliers efter analys</td><td>Tappade en droppe extra, läste fel skala</td></tr>
</table>
<div class="formula-box">Procentuellt fel = |uppmätt − sant| / sant × 100 %
Relativ osäkerhet = absolut osäkerhet / mätvärde × 100 %

Signifikanta siffror:
Våg ±0,01 g → rapportera 2 decimaler
Byrett ±0,05 mL → rapportera 2 decimaler
Multiplicera/dividera → behåll minsta antal sig. siffror
Addera/subtrahera → behåll minsta antal decimaler</div>
<p><strong>Labrapportens struktur:</strong></p>
<ol>
  <li><strong>Syfte:</strong> Vad ska undersökas? Vilken fråga besvaras?</li>
  <li><strong>Teori:</strong> Vilka kemiska principer används? Relevanta formler.</li>
  <li><strong>Metod:</strong> Exakt vad gjordes – tillräckligt detaljerat för att kunna upprepas.</li>
  <li><strong>Resultat:</strong> Rådata i tabeller, beräkningar med enheter, grafer vid behov.</li>
  <li><strong>Diskussion:</strong> Rimlighetsbedömning, felkällor (systematiska/slumpmässiga), jämförelse med litteraturvärden, förbättringsförslag.</li>
  <li><strong>Slutsats:</strong> Svarar på syftet med ett klart påstående.</li>
</ol>

<h3>6. Sambandet – teorin bakom labbet</h3>
<p>Laborativ kemi är inte enbart praktiska handlag – det är en direkt tillämpning av all teori. Titrering bygger på syra-baskemin och stökiometrin. Kalorimetri mäter de entalpivärden som termokemins formler förutsäger. Spektrofotometri tillämpar Beer-Lambert-lagen som härleds ur kvantfysiken. GHS-märkningen speglar de kemiska egenskaperna vi lärt oss – frätande = stark syra/bas, brandfarlig = lågkokande opolärt ämne, akut toxisk = reaktivt med enzymer. Och felanalysen tvingar oss att tänka kritiskt: hur väl stämmer experimentet med teorin, och varför skiljer det sig? Det är den vetenskapliga processen i ett nötskal – observera, mäta, analysera, förbättra. Alla enheter ska anges och beräkningar visas.</div>
`
  },
];
"""

# Inject new THEORY
old_block = html[ti : te + len(THEORY_END)]
html = html[:ti] + NEW_THEORY + THEORY_END + html[te + len(THEORY_END):]

print(f"THEORY replaced: {len(old_block)} -> {len(NEW_THEORY)} chars")
print(f"Output: {len(html)} chars")

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Written!")
