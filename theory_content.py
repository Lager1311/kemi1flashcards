# -*- coding: utf-8 -*-
# This file contains the NEW_THEORY string and writes it to the HTML file.

with open('kemi1-flashcards.html', 'r', encoding='utf-8') as f:
    html = f.read()

print(f"Input: {len(html)} chars")

THEORY_START = 'const THEORY = ['
THEORY_END   = '];\n\nlet theoryIdx'

ti = html.find(THEORY_START)
te = html.find(THEORY_END, ti)
assert ti > 0 and te > 0, "Anchors not found!"
print(f"THEORY: {ti} -> {te}")

# =====================================================================
# Build NEW_THEORY as a list of (cat, icon, html_content) tuples
# then assemble the JS string
# =====================================================================

sections = []

# ── 1. ATOMENS BYGGNAD ────────────────────────────────────────────────
sections.append(("Atomens byggnad", "\u269b\ufe0f", """
<h2>\u269b\ufe0f Atomens byggnad &amp; periodiska systemet</h2>
<p class="theory-intro">All materia \u2013 allt vi kan se, ta p\u00e5 och andas \u2013 \u00e4r uppbyggt av atomer. En atom \u00e4r ofattbart liten: ungef\u00e4r tio miljarder atomer sida vid sida t\u00e4cker en centimeter. \u00c4nd\u00e5 har varje atom en komplex inre struktur som avg\u00f6r exakt hur \u00e4mnet beter sig kemiskt.</p>

<h3>1. Atomens tre grunddelar</h3>
<p>En atom har tv\u00e5 delar: en t\u00e4t <strong>k\u00e4rna</strong> i mitten och ett <strong>elektronskal</strong> utanf\u00f6r. K\u00e4rnan inneh\u00e5ller <strong>protoner (p\u207a)</strong> och <strong>neutroner (n\u2070)</strong>. Protonernas antal kallas <em>atomnumret Z</em> och \u00e4r unikt f\u00f6r varje grundsignal: kol har alltid Z\u00a0=\u00a06, syre alltid Z\u00a0=\u00a08, guld alltid Z\u00a0=\u00a079. Neutronerna stabiliserar k\u00e4rnan mot repulsionen mellan protonerna men p\u00e5verkar inte kemiska egenskaperna.</p>
<p>Runt k\u00e4rnan r\u00f6r sig <strong>elektroner (e\u207b)</strong> \u2013 negativt laddade, massa \u2248\u00a01/1836 av protonmassan, praktiskt taget f\u00f6rsumbar. En neutral atom har lika m\u00e5nga elektroner som protoner. Avger atomen en elektron bildas en <em>katjon</em> (+); tar den upp en bildas en <em>anjon</em> (\u2212).</p>
<div class="formula-box">Masstal: A = Z + N
Neutroner: N = A \u2212 Z
Laddning: q = protoner \u2212 elektroner

Exempel \u00b2\u00b3Na (Z=11, A=23):
  11 protoner, 12 neutroner, 11 elektroner \u2192 neutral
  Na\u207a: 11 protoner, 10 elektroner \u2192 laddning +1</div>

<h3>2. Isotoper</h3>
<p>Isotoper \u00e4r atomer av <em>samma grundsignal</em> (samma Z) men med <em>olika antal neutroner</em> (olika A). De har identiska kemiska egenskaper men olika massa och radioaktivitet. Kol-14 (\u00b9\u2074C) \u00e4r radioaktivt med halveringstid 5\u00a0730 \u00e5r och anv\u00e4nds i radiokoldatering. Uran-235 anv\u00e4nds i k\u00e4rnkraft.</p>
<p>Att atommassan i periodiska systemet s\u00e4llan \u00e4r ett heltal beror p\u00e5 att det \u00e4r ett viktat medelvärde av alla naturliga isotoper. Klors A\u1d63\u00a0=\u00a035,45 f\u00f6r att ~75\u00a0% av klor \u00e4r \u00b3\u2075Cl och ~25\u00a0% \u00b3\u2077Cl.</p>
<table class="theory-table">
  <tr><th>Isotop</th><th>Z</th><th>N</th><th>A</th><th>Stabil?</th><th>Anv\u00e4ndning</th></tr>
  <tr><td>\u00b9H (protium)</td><td>1</td><td>0</td><td>1</td><td>Ja</td><td>99,98\u00a0% av allt v\u00e4te</td></tr>
  <tr><td>\u00b2H (deuterium)</td><td>1</td><td>1</td><td>2</td><td>Ja</td><td>Tungt vatten i reaktorer</td></tr>
  <tr><td>\u00b9\u00b2C (kol-12)</td><td>6</td><td>6</td><td>12</td><td>Ja</td><td>Referens f\u00f6r atommasseenheten</td></tr>
  <tr><td>\u00b9\u2074C (kol-14)</td><td>6</td><td>8</td><td>14</td><td>Nej (t\u00bd=5730\u00e5r)</td><td>Radiokoldatering</td></tr>
  <tr><td>\u00b2\u00b3\u2075U</td><td>92</td><td>143</td><td>235</td><td>Nej (t\u00bd=703\u00a0M\u00e5r)</td><td>K\u00e4rnkraft</td></tr>
</table>

<h3>3. Elektronkonfiguration</h3>
<p>Elektroner befinner sig i diskreta <strong>energiskal</strong> n\u00a0=\u00a01,\u00a02,\u00a03\u00a0\u2026 Lägre n = lägre energi = närmre kärnan. Kapacitet per skal: 2n\u00b2 elektroner (skal\u00a01:\u00a02, skal\u00a02:\u00a08, skal\u00a03:\u00a018). Elektroner fylller lägsta nivåer först (Aufbau-principen). <strong>Valenselektroner</strong> = elektroner i yttersta skalet \u2013 de avgör kemiska egenskaperna.</p>
<table class="theory-table">
  <tr><th>Atom</th><th>Z</th><th>Konfiguration</th><th>Val-e\u207b</th><th>Karaktär</th></tr>
  <tr><td>H</td><td>1</td><td>1</td><td>1</td><td>Bildar 1 bindning</td></tr>
  <tr><td>C</td><td>6</td><td>2, 4</td><td>4</td><td>4 bindningar \u2013 organisk kemi</td></tr>
  <tr><td>N</td><td>7</td><td>2, 5</td><td>5</td><td>3 bindningar + 1 fritt par</td></tr>
  <tr><td>O</td><td>8</td><td>2, 6</td><td>6</td><td>2 bindningar + 2 fria par</td></tr>
  <tr><td>Na</td><td>11</td><td>2, 8, 1</td><td>1</td><td>Avger 1 e\u207b \u2192 Na\u207a</td></tr>
  <tr><td>Cl</td><td>17</td><td>2, 8, 7</td><td>7</td><td>Tar upp 1 e\u207b \u2192 Cl\u207b</td></tr>
  <tr><td>Ar</td><td>18</td><td>2, 8, 8</td><td>8 (fullt)</td><td>Oreaktiv \u00e4delgas</td></tr>
  <tr><td>Ca</td><td>20</td><td>2, 8, 8, 2</td><td>2</td><td>Avger 2 e\u207b \u2192 Ca\u00b2\u207a</td></tr>
</table>

<h3>4. Det periodiska systemet \u2013 trender</h3>
<p>Periodiska systemet ordnar alla 118 kända grundämnen efter stigande Z. <strong>Period (rad)</strong> = antal elektronskal. <strong>Grupp (kolumn)</strong> = antal valenselektroner (grupp 1\u201318). Grupp 1 (alkalimetaller): 1 val-e\u207b, reagerar explosivt med vatten. Grupp 17 (halogener): 7 val-e\u207b, bildar X\u207b-anjoner. Grupp 18 (\u00e4delgaser): fullt skal, extremt oreaktiva.</p>
<table class="theory-table">
  <tr><th>Egenskap</th><th>\u2192 L\u00e4ngs period</th><th>\u2193 Ned\u00e5t i grupp</th></tr>
  <tr><td>Atomradie</td><td>Minskar</td><td>\u00d6kar</td></tr>
  <tr><td>Joniseringsenergi</td><td>\u00d6kar</td><td>Minskar</td></tr>
  <tr><td>Elektronegativitet</td><td>\u00d6kar (max F=4,0)</td><td>Minskar</td></tr>
  <tr><td>Metallkaraktär</td><td>Minskar</td><td>\u00d6kar</td></tr>
</table>
<p><strong>Elektronegativitet</strong> (Paulingskalan) m\u00e4ter hur starkt en atom drar till sig elektroner i en bindning. F (4,0) \u003e O (3,5) \u003e N (3,0) \u003e Cl (3,2). Stor skillnad (\u003e1,7) \u2192 jonbindning. Liten skillnad \u2192 kovalent bindning.</p>

<h3>5. Sambandet</h3>
<p>Atomens byggnad \u00e4r grunden f\u00f6r all kemi. Atomnumret Z definierar vilket grundsignal det \u00e4r. Valenselektronerna avg\u00f6r hur det reagerar och vilka bindningar det bildar. Periodiska systemets m\u00f6nster \u2013 periodiciteten \u2013 uppst\u00e5r direkt ur elektronkonfigurationen: atomer i samma grupp har samma antal valenselektroner och d\u00e4rf\u00f6r liknande kemi. Isotoper f\u00f6rklarar varf\u00f6r atommassor inte \u00e4r heltal och anv\u00e4nds i medicin och arkeologi. Allt \u2013 fr\u00e5n hur salt bildas till hur DNA h\u00e5lls ihop \u2013 b\u00f6rjar med fr\u00e5gan: hur m\u00e5nga elektroner har atomen och hur \u00e4r de f\u00f6rdelade?</p>
"""))

# ── 2. KEMISK BINDNING ────────────────────────────────────────────────
sections.append(("Kemisk bindning", "\U0001f517", """
<h2>\U0001f517 Kemisk bindning</h2>
<p class="theory-intro">Kemisk bindning \u00e4r kraften som h\u00e5ller atomer samman. Utan bindningar skulle universum bara best\u00e5 av fria atomer. Tre huvudtyper finns: jonbindning (metall + icke-metall), kovalent bindning (icke-metall + icke-metall) och metallbindning (metall + metall). Typen avg\u00f6r om ett material \u00e4r l\u00f6sligt i vatten, leder str\u00f6m, \u00e4r spridt eller formbart.</p>

<h3>1. Jonbindning</h3>
<p>Uppst\u00e5r n\u00e4r elektronegativitetsskillnaden \u003e\u00a01,7. Metallen avger valenselektroner \u2192 katjon (+). Icke-metallen tar upp elektroner \u2192 anjon (\u2212). De attraheras elektrostatiskt och bildar ett <strong>kristallgitter</strong>. Gitterenergin (energin att s\u00e4nder isär gittret) \u00e4r enorm: NaCl ~787\u00a0kJ/mol, MgO ~3\u00a0800\u00a0kJ/mol (laddning 2+/2\u2212 ger mycket starkare gitter).</p>
<p><strong>Egenskaper:</strong> H\u00f6ga smält-/kokpunkter. Spröda (mekanisk kraft klyver kristallen n\u00e4r lika laddade joner hamnar bredvid varandra). Leder ej ström i fast form men leder i smälta/lösning. Löser sig ofta i vatten (vattets dipoler stabiliserar jonerna).</p>
<div class="formula-box">Na \u2192 Na\u207a + e\u207b   (joniseringsenergi kr\u00e4vs)
Cl + e\u207b \u2192 Cl\u207b   (elektronaffinitet frig\u00f6rs)
Na\u207a + Cl\u207b \u2192 NaCl(s)  (gitterenergi 787 kJ/mol frig\u00f6rs)
Summa: exoterm process \u2013 stabilt jonkristall bildas</div>

<h3>2. Kovalent bindning</h3>
<p>Uppst\u00e5r mellan icke-metaller med liten elektronegativitetsskillnad (\u003c\u00a01,7). Atomerna <em>delar</em> elektronpar f\u00f6r att b\u00e5da ska n\u00e5 \u00e4delgaskonfiguration. Fler delade par = kortare och starkare bindning.</p>
<table class="theory-table">
  <tr><th>Typ</th><th>Delade e\u207b-par</th><th>Styrka (kJ/mol)</th><th>Exempel</th></tr>
  <tr><td>Enkelbindning \u03c3</td><td>1</td><td>C\u2212C: 347</td><td>Etan C\u2082H\u2086</td></tr>
  <tr><td>Dubbelbindning \u03c3+\u03c0</td><td>2</td><td>C=C: 614</td><td>Eten C\u2082H\u2084</td></tr>
  <tr><td>Trippelbindning \u03c3+2\u03c0</td><td>3</td><td>N\u2261N: 945</td><td>Kv\u00e4vgas N\u2082</td></tr>
</table>
<p><strong>Pol\u00e4r vs opol\u00e4r:</strong> Om elektronegativitetsskillnad \u003e 0 men \u003c 1,7 \u00e4r bindningen pol\u00e4r: elektronparet f\u00f6rskjuts mot den mer elektronegativa atomen (\u03b4\u207b). Molekylen som helhet \u00e4r pol\u00e4r om dipolerna inte tar ut varandra. H\u2082O \u00e4r vinkelformad (104,5\u00b0) \u2192 pol\u00e4r. CO\u2082 \u00e4r linj\u00e4r och symmetrisk \u2192 opol\u00e4r trots pol\u00e4ra C=O-bindningar.</p>
<p><strong>Molekylgeometri (VSEPR):</strong> Elektronpar runt centralatomen ordnar sig f\u00f6r att minimera repulsionen. Fria par tar mer plats \u00e4n bindande par. CH\u2084: tetraeder 109,5\u00b0. NH\u2083: trigonal pyramid 107\u00b0. H\u2082O: vinkelformad 104,5\u00b0. Formen avg\u00f6r om molekylen \u00e4r pol\u00e4r eller opol\u00e4r.</p>

<h3>3. Metallbindning</h3>
<p>I en metall avger atomerna sina valenselektroner till ett gemensamt \u201celektronhav\u201d som r\u00f6r sig fritt bland de positivt laddade metalljonerna i gittret. Det fria elektronhavet f\u00f6rklarar direkt metallers egenskaper: god elektrisk och termisk ledning (fria elektroner transporterar laddning och energi), formbarhet och duktilitet (gitterlager kan glida utan att bindningarna bryts), och metallglans (elektroner absorberar och \u00e5teremitterar ljus i alla frekvenser). Volfram (W) smälter vid 3\u00a0422\u00a0\u00b0C \u2013 bland de h\u00f6gsta sm\u00e4ltpunkterna f\u00f6r ett rent grundsignal.</p>

<h3>4. Intermolekyl\u00e4ra krafter</h3>
<p>Inom molekyler finns starka kovalenta bindningar. <em>Mellan</em> molekyler finns svagare krafter som styr kokpunkt, sm\u00e4ltpunkt, l\u00f6slighet och viskositet. Det finns tre typer i stigande styrka:</p>
<p><strong>London-dispersionskrafter (van der Waals)</strong> finns i alla \u00e4mnen. De uppst\u00e5r av tillf\u00e4lliga ojämnheter i elektronf\u00f6rdelningen som skapar momentana dipoler. Styrkan \u00f6kar med molekylmassa och kontaktarea. Xenon (M=131) kokar vid \u2212108\u00a0\u00b0C, helium (M=4) vid \u2212269\u00b0C \u2013 bara p\u00e5 grund av denna kraft.</p>
<p><strong>Permanenta dipol\u2013dipol-krafter</strong> finns i pol\u00e4ra molekyler. HCl kokar vid \u221285\u00a0\u00b0C j\u00e4mf\u00f6rt med H\u2082:s \u2212253\u00b0C trots n\u00e4stan samma molmassa \u2013 HCl \u00e4r pol\u00e4rt.</p>
<p><strong>V\u00e4tebindningar</strong> \u00e4r den starkaste intermolekyl\u00e4ra kraften. De uppst\u00e5r n\u00e4r H \u00e4r kovalent bundet till N, O eller F och attraheras av ett fritt elektronpar p\u00e5 ett N, O eller F p\u00e5 en grannmolekyl. Utan v\u00e4tebindningar skulle vatten koka vid \u221280\u00b0C \u2013 världshaven skulle inte existera i flytande form. V\u00e4tebindningar h\u00e5ller ocks\u00e5 ihop DNA-str\u00e4ngarnas baspar (A\u2013T, G\u2013C) och ger proteiner deras tredimensionella form.</p>
<div class="tip-box"><strong>Kokt\u00e4mling:</strong> London &lt; dipol\u2013dipol &lt; v\u00e4tebindning. Starkare intermolekyl\u00e4r kraft \u2192 h\u00f6gre kokpunkt och mer energi beh\u00f6vs f\u00f6r fas\u00f6verg\u00e5ng.</div>

<h3>5. Sambandet</h3>
<p>Bindningstypen \u00e4r den direkta l\u00e4nken mellan atomers elektronstruktur och ett materials makroskopiska egenskaper. NaCl \u00e4r h\u00e5rt och sprött \u2013 jonbindning. Koppar formas och leder \u2013 metallbindning. Vatten \u00e4r unikt flytande vid rumstemperatur p\u00e5 grund av v\u00e4tebindningar. Teflon \u00e4r sl\u00f6 och oreaktivt p\u00e5 grund av starka C\u2212F-bindningar och svaga intermolekyl\u00e4ra krafter. Poläritet avg\u00f6r l\u00f6slighet: \u201clika l\u00f6ser lika\u201d \u2013 polära \u00e4mnen i vatten, opol\u00e4ra i hexan. Allt h\u00e4nger ihop via en fr\u00e5ga: hur f\u00f6rdelar och delar atomerna sina elektroner?</p>
"""))

# ── 3. REAKTIONER & STÖKIOMETRI ──────────────────────────────────────
sections.append(("Reaktioner & stökiometri", "\u2697\ufe0f", """
<h2>\u2697\ufe0f Kemiska reaktioner &amp; st\u00f6kiometri</h2>
<p class="theory-intro">En kemisk reaktion inneb\u00e4r att atomer omgrupperas: gamla bindningar bryts och nya bildas. Ingenting skapas eller f\u00f6rsvinner \u2013 massan \u00e4r allid bevarad. St\u00f6kiometri \u00e4r den kvantitativa disciplinen: hur mycket av varje \u00e4mne som k\u00e4rvs och bildas. Det \u00e4r grundl\u00e4ggande f\u00f6r allt fr\u00e5n l\u00e4kemedelstillverkning till milj\u00f6kemi.</p>

<h3>1. Molbegreppet</h3>
<p>Ett <strong>mol</strong> (mol) = 6,022\u00a0\u00d7\u00a010\u00b2\u00b3 partiklar (Avogadros tal N\u2090). Det valdes s\u00e5 att ett mol av ett grundsignal v\u00e4ger exakt A\u1d63 gram. Ett mol kol v\u00e4ger 12,011 g. Det \u00e4r bryggan mellan atomv\u00e4rlden och laboratoriev\u00e5gens gramvärld.</p>
<div class="formula-box">n = m / M   [mol = g / (g/mol)]
m = n \u00d7 M
M = summan av alla atomers A\u1d63 i formeln

M(H\u2082O) = 2\u00d71,008 + 16,00 = 18,02 g/mol
M(H\u2082SO\u2084) = 2\u00d71,008 + 32,07 + 4\u00d716,00 = 98,09 g/mol
M(CaCO\u2083) = 40,08 + 12,01 + 3\u00d716,00 = 100,09 g/mol

36,0 g H\u2082O = 36,0/18,02 = 2,00 mol = 1,20\u00d710\u00b2\u2074 molekyler</div>

<h3>2. Balansering av reaktionsformler</h3>
<p>En reaktionsformel m\u00e5ste balanseras: lika m\u00e5nga atomer av varje slag och lika laddning p\u00e5 b\u00e5da sidor. Koefficienterna framf\u00f6r formlerna \u00e4r de tal som balanserar.</p>
<p><strong>Metod:</strong> (1) Skriv obalanserad reaktion. (2) B\u00f6rja med det mest komplexa \u00e4mnet. (3) Balansera ett grundsignal i taget: C f\u00f6rst, sedan H, O sist. (4) Kontrollera alla grundsignaler. Br\u00e5kkoefficienter \u00e4r till\u00e5tna, men multiplicera f\u00f6r heltal om n\u00f6dv\u00e4ndigt.</p>
<div class="formula-box">Propanf\u00f6rbr\u00e4nning:
  C\u2083H\u2088 + O\u2082 \u2192 CO\u2082 + H\u2082O    (obalanserad)
  C: C\u2083H\u2088 + O\u2082 \u2192 3CO\u2082 + H\u2082O
  H: C\u2083H\u2088 + O\u2082 \u2192 3CO\u2082 + 4H\u2082O
  O: C\u2083H\u2088 + 5O\u2082 \u2192 3CO\u2082 + 4H\u2082O  \u2713
Kontroll: 3C=3C, 8H=8H, 10O=10O \u2713</div>

<h3>3. Ber\u00e4kningar med molf\u00f6rh\u00e5llanden</h3>
<p>Koefficienterna anger molf\u00f6rh\u00e5llanden \u2013 inte gram-f\u00f6rh\u00e5llanden. Steg: gram \u00f7 M \u2192 mol, \u00d7 koefficient \u2192 mol, \u00d7 M \u2192 gram.</p>
<div class="formula-box">4Fe + 3O\u2082 \u2192 2Fe\u2082O\u2083

Fr\u00e5ga: Hur m\u00e5nga gram Fe\u2082O\u2083 bildas av 100 g j\u00e4rn?
  n(Fe) = 100 / 55,85 = 1,791 mol
  n(Fe\u2082O\u2083) = 1,791 \u00d7 (2/4) = 0,8955 mol
  M(Fe\u2082O\u2083) = 2\u00d755,85 + 3\u00d716,00 = 159,70 g/mol
  m(Fe\u2082O\u2083) = 0,8955 \u00d7 159,70 = 143 g</div>

<h3>4. Begr\u00e4nsande reaktant och utbyte</h3>
<p>Den reaktant som tar slut f\u00f6rst \u2013 <strong>begr\u00e4nsande reaktant</strong> \u2013 s\u00e4tter taket f\u00f6r hur mycket produkt som bildas. Hitta den: ber\u00e4kna vad varje reaktant skulle ge om den f\u00f6rbrukades helt. Den som ger minst produkt \u00e4r begr\u00e4nsande.</p>
<div class="formula-box">N\u2082 + 3H\u2082 \u2192 2NH\u2083
Ges: 28 g N\u2082 och 9,0 g H\u2082
  n(N\u2082) = 28/28 = 1,0 mol \u2192 ger 2,0 mol NH\u2083
  n(H\u2082) = 9,0/2,016 = 4,46 mol \u2192 ger 4,46/3\u00d72 = 2,97 mol NH\u2083
  N\u2082 ger minst \u2192 N\u2082 \u00e4r begr\u00e4nsande reaktant
  Teoretisk m\u00e4ngd: 2,0 mol \u00d7 17,03 = 34 g NH\u2083

Procentuellt utbyte = (verklig/teoretisk) \u00d7 100%</div>

<h3>5. Reaktionstyper</h3>
<table class="theory-table">
  <tr><th>Typ</th><th>Schema</th><th>Exempel</th></tr>
  <tr><td>Syntes</td><td>A + B \u2192 AB</td><td>2H\u2082 + O\u2082 \u2192 2H\u2082O</td></tr>
  <tr><td>S\u00f6nderfall</td><td>AB \u2192 A + B</td><td>2H\u2082O\u2082 \u2192 2H\u2082O + O\u2082</td></tr>
  <tr><td>Enkel substitution</td><td>A + BC \u2192 AC + B</td><td>Zn + 2HCl \u2192 ZnCl\u2082 + H\u2082</td></tr>
  <tr><td>Dubbel substitution</td><td>AB + CD \u2192 AD + CB</td><td>AgNO\u2083 + NaCl \u2192 AgCl\u2193 + NaNO\u2083</td></tr>
  <tr><td>F\u00f6rbr\u00e4nning</td><td>C\u2093H\u1d67 + O\u2082 \u2192 CO\u2082 + H\u2082O</td><td>CH\u2084 + 2O\u2082 \u2192 CO\u2082 + 2H\u2082O</td></tr>
  <tr><td>Neutralisation</td><td>syra + bas \u2192 salt + H\u2082O</td><td>HCl + NaOH \u2192 NaCl + H\u2082O</td></tr>
</table>

<h3>6. Redoxreaktioner</h3>
<p>I en redoxreaktion \u00f6verf\u00f6rs elektroner. <strong>OIL RIG</strong>: Oxidation Is Loss, Reduction Is Gain. Oxidationsmedlet tar upp elektroner (reduceras sj\u00e4lvt). Reduktionsmedlet ger ifr\u00e5n sig elektroner (oxideras sj\u00e4lvt). Oxidationstalet sp\u00e5rar elektroner: \u00f6kar = oxidation, minskar = reduktion.</p>
<div class="formula-box">Regler f\u00f6r oxidationstal:
  Fria element: 0
  Monoatomiska joner: = laddningen
  O i f\u00f6reningar: \u22122 (undantag peroxider \u22121)
  H i f\u00f6reningar: +1 (undantag metallhydrider \u22121)
  Summan = totalladdn.

Zn + Cu\u00b2\u207a \u2192 Zn\u00b2\u207a + Cu
  Zn: 0\u2192+2 (oxideras; Zn = reduktionsmedel)
  Cu\u00b2\u207a: +2\u21920 (reduceras; Cu\u00b2\u207a = oxidationsmedel)</div>

<h3>7. Sambandet</h3>
<p>St\u00f6kiometri \u00e4r den matematiska ryggraden i kemin. Molbegreppet kopplar atomernas v\u00e4rld till laboratoriev\u00e5gens gram. Balanseringen \u00e4r ett uttryck f\u00f6r massabevarandets naturlag. Molf\u00f6rh\u00e5llandena ber\u00e4ttar exakt hur mycket av varje \u00e4mne som kr\u00e4vs \u2013 grundl\u00e4ggande f\u00f6r industriell produktion och l\u00e4kemedelskemi. Begr\u00e4nsande reaktant f\u00f6rklarar varf\u00f6r man inte alltid f\u00e5r 100\u00a0% utbyte. Redoxkemin binder ihop elektrokemi, korrosion och biologisk metabolism i ett ramverk: elektron\u00f6verf\u00f6ring.</p>
"""))

# ── 4. SYROR & BASER ─────────────────────────────────────────────────
sections.append(("Syror & baser", "\U0001f9ea", """
<h2>\U0001f9ea Syror &amp; baser</h2>
<p class="theory-intro">Syror och baser \u00e4r allestädes: citronsyra i frukter, magsyra som sm\u00e4lter mat, bakpulver som lyfter br\u00f6d, tvål som reng\u00f6r. Blodet h\u00e5ller pH 7,35\u20137,45 \u2013 avviker det med mer \u00e4n 0,2 enheter kan det vara livshotande. Syra-baskemi handlar om proton\u00f6verf\u00f6ring och \u00e4r ett av kemins mest grundl\u00e4ggande omr\u00e5den.</p>

<h3>1. Br\u00f8nsted-Lowry-teorin</h3>
<p>En <strong>syra</strong> \u00e4r en protondonator (avger H\u207a). En <strong>bas</strong> \u00e4r en protonacceptor (tar emot H\u207a). Reaktionen kallas <strong>protolys</strong>. Varje syra-basreaktion bildar ett <em>korresponderande syra-baspar</em>: HA/A\u207b och B/BH\u207a skiljer sig med exakt ett H\u207a. <strong>Amfolyter</strong> kan agera b\u00e5da \u2013 vatten \u00e4r det viktigaste exemplet.</p>
<div class="formula-box">HA + B \u21cc A\u207b + BH\u207a
(syra)(bas)(konj.bas)(konj.syra)

CH\u2083COOH + H\u2082O \u21cc CH\u2083COO\u207b + H\u2083O\u207a  (svag, j\u00e4mvikt)
HCl + H\u2082O \u2192 Cl\u207b + H\u2083O\u207a            (stark, fullst\u00e4ndig)</div>

<h3>2. pH-skalan och vattnets jonprodukt</h3>
<div class="formula-box">pH = \u2212log[H\u2083O\u207a]     pOH = \u2212log[OH\u207b]
pH + pOH = 14   (vid 25\u00b0C)
Kw = [H\u2083O\u207a][OH\u207b] = 1,0\u00d710\u207b\u00b9\u2074 (vid 25\u00b0C)</div>
<table class="theory-table">
  <tr><th>[H\u2083O\u207a] mol/L</th><th>pH</th><th>Karakt\u00e4r</th><th>Exempel</th></tr>
  <tr><td>1,0\u00d710\u207b\u00b9</td><td>1</td><td>Starkt sur</td><td>Magsyra</td></tr>
  <tr><td>1,0\u00d710\u207b\u00b3</td><td>3</td><td>Sur</td><td>Vinager, \u00e4ppeljuice</td></tr>
  <tr><td>1,0\u00d710\u207b\u2077</td><td>7</td><td>Neutral</td><td>Rent vatten</td></tr>
  <tr><td>1,0\u00d710\u207b\u00b9\u2070</td><td>10</td><td>Basisk</td><td>Tv\u00e5llösning</td></tr>
  <tr><td>1,0\u00d710\u207b\u00b9\u00b3</td><td>13</td><td>Starkt basisk</td><td>Ugnsreng\u00f6ring</td></tr>
</table>
<p>Skalan \u00e4r <em>logaritmisk</em>: varje enhet = 10-faldig f\u00f6r\u00e4ndring av [H\u2083O\u207a]. pH\u00a03 \u00e4r 10\u00a0000 g\u00e5nger surare \u00e4n pH\u00a07.</p>

<h3>3. Starka och svaga syror \u2013 Ka och pKa</h3>
<p><strong>Starka syror</strong> protolyseras fullst\u00e4ndigt (\u2192). <strong>Svaga syror</strong> protolyseras delvis (\u21cc) med j\u00e4mvikt kvar.</p>
<div class="formula-box">Ka = [H\u2083O\u207a][A\u207b] / [HA]    pKa = \u2212log Ka
L\u00e4gre pKa \u2192 starkare syra

pH (stark syra): 0,050 M HCl \u2192 pH = \u2212log(0,050) = 1,30
pH (svag syra, approx): [H\u2083O\u207a] \u2248 \u221a(Ka\u00d7c)
  0,10 M CH\u2083COOH: [H\u2083O\u207a] = \u221a(1,8\u00d710\u207b\u2075\u00d70,10) = 1,34\u00d710\u207b\u00b3 M \u2192 pH = 2,87</div>
<table class="theory-table">
  <tr><th>Syra</th><th>Ka</th><th>pKa</th><th>Typ</th></tr>
  <tr><td>HCl</td><td>\u226b1</td><td>\u22127</td><td>Stark</td></tr>
  <tr><td>H\u2082SO\u2084 (1:a)</td><td>\u226b1</td><td>\u22123</td><td>Stark</td></tr>
  <tr><td>HNO\u2083</td><td>\u226b1</td><td>\u22121,3</td><td>Stark</td></tr>
  <tr><td>H\u2083PO\u2084</td><td>7,5\u00d710\u207b\u00b3</td><td>2,15</td><td>Svag</td></tr>
  <tr><td>CH\u2083COOH</td><td>1,8\u00d710\u207b\u2075</td><td>4,76</td><td>Svag</td></tr>
  <tr><td>H\u2082CO\u2083</td><td>4,3\u00d710\u207b\u2077</td><td>6,35</td><td>Svag</td></tr>
  <tr><td>NH\u2084\u207a</td><td>5,6\u00d710\u207b\u00b9\u2070</td><td>9,25</td><td>Svag</td></tr>
</table>

<h3>4. Neutralisation och salter</h3>
<div class="formula-box">Syra + bas \u2192 salt + H\u2082O
HCl + NaOH \u2192 NaCl + H\u2082O
Nettorektion: H\u2083O\u207a + OH\u207b \u2192 2H\u2082O  (\u0394H = \u221256 kJ/mol)</div>
<table class="theory-table">
  <tr><th>Reaktanter</th><th>Salt</th><th>L\u00f6sningens pH</th></tr>
  <tr><td>Stark syra + stark bas</td><td>Neutralt (NaCl)</td><td>\u22487</td></tr>
  <tr><td>Svag syra + stark bas</td><td>Basiskt (CH\u2083COONa)</td><td>&gt;7</td></tr>
  <tr><td>Stark syra + svag bas</td><td>Surt (NH\u2084Cl)</td><td>&lt;7</td></tr>
</table>

<h3>5. Titrering</h3>
<p>Titrering best\u00e4mmer ok\u00e4nd koncentration. Titratorl\u00f6sning (k\u00e4nd c) tillsätts fr\u00e5n byretten till titranden tills <strong>ekvivalenspunkten</strong> n\u00e5s \u2013 visas av indikatorns f\u00e4rgbyte.</p>
<div class="formula-box">c\u2081V\u2081 = c\u2082V\u2082  (vid 1:1-reaktion)

Exempel: 25,00 mL ok\u00e4nd NaOH titreras med 0,1000 M HCl, \u00e5tg\u00e5ng 18,60 mL.
  n(HCl) = 0,1000 \u00d7 0,01860 = 1,860\u00d710\u207b\u00b3 mol
  c(NaOH) = 1,860\u00d710\u207b\u00b3 / 0,02500 = 0,07440 mol/L</div>
<p><strong>Indikatorval:</strong> Fenolftalein (f\u00e4rglös \u2192 rosa, pH 8,2\u201310,0) f\u00f6r stark bas som titrator. BTB (gult \u2192 bl\u00e5tt, pH 6,0\u20137,6) vid neutralisationer n\u00e4ra pH\u00a07.</p>

<h3>6. Buffertl\u00f6sningar</h3>
<p>En buffert mots\u00e5r pH-f\u00f6r\u00e4ndringar. Best\u00e5r av <strong>svag syra + konjugerad bas</strong> i j\u00e4mf\u00f6rbara koncentrationer.</p>
<div class="formula-box">Henderson-Hasselbalch: pH = pKa + log([A\u207b]/[HA])

Blodets buffert: H\u2082CO\u2083/HCO\u2083\u207b (pKa = 6,35)
Normal blod-pH 7,4 \u2192 [HCO\u2083\u207b]/[H\u2082CO\u2083] \u2248 20

B\u00e4sta buffertf\u00f6rm\u00e5ga: n\u00e4r [A\u207b]=[HA], d\u00e5 pH = pKa</div>

<h3>7. Sambandet</h3>
<p>Syra-baskemi \u00e4r proton\u00f6verf\u00f6ringens kemi. Ka och pKa kvantifierar var j\u00e4mvikten ligger. pH-skalan \u00e4r m\u00e4tverktyget. Neutralisation, salthydrolys och titrering \u00e4r alla varianter av H\u2083O\u207a + OH\u207b \u2192 2H\u2082O. Buffertl\u00f6sningar kombinerar j\u00e4mviktsprincipen med konservering av systemets pH \u2013 det \u00e4r varf\u00f6r blodet h\u00e5ller sig stabilt trots att kroppen st\u00e4ndigt producerar sura metaboliter.</p>
"""))

# ── 5. ORGANISK KEMI ──────────────────────────────────────────────────
sections.append(("Organisk kemi", "\U0001f331", """
<h2>\U0001f331 Organisk kemi</h2>
<p class="theory-intro">Organisk kemi \u00e4r kemin om kolf\u00f6reningar. Det finns \u00f6ver 10 miljoner k\u00e4nda organiska f\u00f6reningar \u2013 mer \u00e4n alla andra \u00e4mnen sammantagna. Anledningen \u00e4r kolatomens unika f\u00f6rm\u00e5ga att binda till fyra andra atomer och kedja sig i n\u00e4stan obetr\u00e4nsad l\u00e4ngd och komplexitet.</p>

<h3>1. Kol\u00e4tomerens unika egenskaper</h3>
<p>Kol (Z=6, konfiguration 2,4) har fyra valenselektroner och bildar alltid exakt <strong>fyra bindningar</strong>. Det g\u00f6r det m\u00f6jligt att bygga:</p>
<ul>
  <li><strong>Raka och grenade kedjor:</strong> Hexan CH\u2083\u2212(CH\u2082)\u2084\u2212CH\u2083</li>
  <li><strong>Ringar:</strong> Cyklohexan C\u2086H\u2081\u2082 (ring av 6 kolatomer)</li>
  <li><strong>Aromatiska ringar:</strong> Bensen C\u2086H\u2086 med konjugerade \u03c0-elektroner</li>
  <li><strong>Enkelbindningar</strong> (sp\u00b3, tetraedrisk), <strong>dubbelbindningar</strong> (sp\u00b2, plan) och <strong>trippelbindningar</strong> (sp, linj\u00e4r)</li>
</ul>

<h3>2. Kolväteklasserna</h3>
<table class="theory-table">
  <tr><th>Klass</th><th>Formeltyp</th><th>Bindning</th><th>Suffix</th><th>Exempel</th></tr>
  <tr><td>Alkaner</td><td>C\u2099H\u2082\u2099\u208a\u2082</td><td>Bara C\u2212C</td><td>-an</td><td>Metan, etan, propan</td></tr>
  <tr><td>Alkener</td><td>C\u2099H\u2082\u2099</td><td>\u22651 C=C</td><td>-en</td><td>Eten (etyl\u00e9n), propen</td></tr>
  <tr><td>Alkyner</td><td>C\u2099H\u2082\u2099\u208b\u2082</td><td>\u22651 C\u2261C</td><td>-yn</td><td>Etyn (acetylen)</td></tr>
  <tr><td>Arener</td><td>C\u2086H\u2086 etc.</td><td>Aromatisk</td><td>bens-</td><td>Bensen, toluen</td></tr>
</table>
<p><strong>IUPAC-namngivning:</strong> Prefix f\u00f6r kolkedjans l\u00e4ngd: met(1), et(2), prop(3), but(4), pent(5), hex(6), hept(7), okt(8). V\u00e4lj l\u00e4ngsta kedjan, numrera fr\u00e5n det h\u00e5ll som ger substituenter l\u00e4gst nummer.</p>
<div class="formula-box">2-metylbutan: CH\u2083\u2212CH(CH\u2083)\u2212CH\u2082\u2212CH\u2083
L\u00e4ngsta kedja: 4C \u2192 butan. Metylgrupp p\u00e5 C-2 \u2192 2-metylbutan.</div>

<h3>3. Funktionella grupper</h3>
<table class="theory-table">
  <tr><th>Grupp</th><th>Struktur</th><th>Suffix</th><th>Exempel</th><th>Egenskap</th></tr>
  <tr><td>Alkohol</td><td>\u2212OH</td><td>-ol</td><td>Etanol C\u2082H\u2085OH</td><td>V\u00e4tebindning, vattenlöslig</td></tr>
  <tr><td>Aldehyd</td><td>\u2212CHO</td><td>-al</td><td>Etanal CH\u2083CHO</td><td>Reducerande, reaktiv</td></tr>
  <tr><td>Keton</td><td>R\u2212CO\u2212R\u2032</td><td>-on</td><td>Aceton (CH\u2083)\u2082CO</td><td>L\u00f6sningsmedel</td></tr>
  <tr><td>Karboxylsyra</td><td>\u2212COOH</td><td>-syra</td><td>\u00c4ttiksyra CH\u2083COOH</td><td>Sur, h\u00f6gt bp, H-bryggor</td></tr>
  <tr><td>Ester</td><td>\u2212COO\u2212</td><td>-oat</td><td>Etylacetat CH\u2083COOC\u2082H\u2085</td><td>Fruktdoft, l\u00f6sningsmedel</td></tr>
  <tr><td>Amin</td><td>\u2212NH\u2082</td><td>-amin</td><td>Metylamin CH\u2083NH\u2082</td><td>Basisk, fiskladar</td></tr>
  <tr><td>Amid</td><td>\u2212CONH\u2082</td><td>-amid</td><td>Etanamid CH\u2083CONH\u2082</td><td>Peptidbindning i proteiner</td></tr>
</table>

<h3>4. Isomeri</h3>
<p>Isomerer har <em>samma molekylformel</em> men <em>olika struktur</em>.</p>
<ul>
  <li><strong>Konstitutionsisomerer:</strong> Olika bindningsm\u00f6nster. n-butan (bp \u22121\u00b0C) och 2-metylpropan (bp \u221212\u00b0C) \u00e4r b\u00e5da C\u2084H\u2081\u2080.</li>
  <li><strong>Cis/trans-isomerer:</strong> Runt en C=C kan substituenter sitta p\u00e5 samma sida (cis) eller olika sidor (trans). Cis-but-2-en kokar vid +4\u00b0C, trans vid +1\u00b0C.</li>
  <li><strong>Enantiomerer:</strong> Spegelbilder som inte kan l\u00e4ggas ovanp\u00e5 varandra (kiralitet). Kritiskt i l\u00e4kemedel: en enantiomer kan vara aktiv, den andra inaktiv eller giftig.</li>
</ul>

<h3>5. Reaktionstyper</h3>
<table class="theory-table">
  <tr><th>Typ</th><th>Substrat</th><th>Reagent</th><th>Produkt</th></tr>
  <tr><td>Addition</td><td>Alken (C=C)</td><td>HBr, H\u2082, Br\u2082, H\u2082O</td><td>M\u00e4ttat C\u2212C</td></tr>
  <tr><td>Substitution</td><td>Alkan</td><td>Cl\u2082/Br\u2082 + UV</td><td>Halogenalkan + HX</td></tr>
  <tr><td>Eliminering</td><td>Alkohol</td><td>konc. H\u2082SO\u2084, v\u00e4rme</td><td>Alken + H\u2082O</td></tr>
  <tr><td>F\u00f6restring</td><td>Karboxylsyra + alkohol</td><td>H\u207a (katalys)</td><td>Ester + H\u2082O</td></tr>
  <tr><td>Hydrolys</td><td>Ester</td><td>H\u2082O + H\u207a/OH\u207b</td><td>Syra + alkohol</td></tr>
  <tr><td>Oxidation</td><td>Prim. alkohol</td><td>KMnO\u2084</td><td>Aldehyd \u2192 karboxylsyra</td></tr>
</table>

<h3>6. Polymerer</h3>
<p><strong>Additionspolymerer:</strong> Alkener polymeriseras utan biprodukt. n(CH\u2082=CH\u2082) \u2192 (\u2212CH\u2082\u2212CH\u2082\u2212)\u2099 (polyeten, PE). PVC, polystyren, teflon (PTFE).</p>
<p><strong>Kondensationspolymerer:</strong> Bildas av difunktionella monomerer med avspj\u00e4lkning av H\u2082O. Nylon (diamin + dikarbonsyra), polyester (diol + dikarbonsyra).</p>
<p><strong>Biologiska polymerer:</strong> Proteiner = polyamider av aminosyror. St\u00e4rkelse/cellulosa = polysackarider av glukos. DNA = polynukleotid med v\u00e4tebundna baspar.</p>

<h3>7. Sambandet</h3>
<p>Organisk kemi \u00e4r m\u00f6jlig tack vare kolatomens unika egenskaper: fyra bindningar, f\u00f6rm\u00e5ga att kedja sig och bilda ringar. Kolkedjans l\u00e4ngd avg\u00f6r aggregationstillst\u00e5ndet (korta kedjor = gas, l\u00e5nga = fast). Funktionell grupp avg\u00f6r reaktivitet och l\u00f6slighet. Isomeri visar varför samma formel kan ge helt olika \u00e4mnen med olika egenskaper. Polymerer visar hur enkla monomerer kan byggas till komplexa material \u2013 fr\u00e5n plast till livets molekyler.</p>
"""))

# ── 6. LÖSNINGAR & KONCENTRATION ─────────────────────────────────────
sections.append(("Lösningar & koncentration", "\U0001f4a7", """
<h2>\U0001f4a7 L\u00f6sningar &amp; koncentration</h2>
<p class="theory-intro">En l\u00f6sning \u00e4r ett homogent system d\u00e4r ett l\u00f6sningsmedel (oftast vatten) omger ett l\u00f6st \u00e4mne. Koncentration anger hur mycket av det l\u00f6sta \u00e4mnet som finns per volymsenhet. Det \u00e4r en av kemins mest grundl\u00e4ggande storheter \u2013 alla reaktioner i l\u00f6sning kr\u00e4ver att du kan ber\u00e4kna koncentrationer.</p>

<h3>1. Molkoncentration</h3>
<p>Den dominerande koncentrationsm\u00e5ttet anger substansm\u00e4ngden löst \u00e4mne per liter <em>l\u00f6sning</em>.</p>
<div class="formula-box">c = n / V   [mol/L = M = molar]
n = c \u00d7 V
V = n / c

Beredning: 5,850 g NaCl (M=58,50 g/mol) l\u00f6ses till 500,0 mL:
  n = 5,850/58,50 = 0,1000 mol
  c = 0,1000/0,5000 = 0,2000 mol/L

Konc. H\u2082SO\u2084 (96% m/m, \u03c1=1,84 g/mL, M=98,09):
  c = 0,96\u00d71,84\u00d71000/98,09 = 18,0 mol/L</div>

<h3>2. Sp\u00e4dning</h3>
<p>Vid sp\u00e4dning beh\u00e5lls substansm\u00e4ngden medan volymen \u00f6kar och koncentrationen minskar.</p>
<div class="formula-box">c\u2081V\u2081 = c\u2082V\u2082

25,0 mL HCl (2,00 M) späds till 100,0 mL:
  c\u2082 = (2,00 \u00d7 25,0) / 100,0 = 0,500 M

H\u00e4ll alltid syra i vatten \u2013 aldrig tv\u00e4rtom!</div>

<h3>3. L\u00f6slighet</h3>
<p>Hur mycket l\u00f6ser sig beror p\u00e5 temperaturen och principen <strong>\u201dlika löser lika\u201d</strong>: pol\u00e4ra \u00e4mnen i vatten, opol\u00e4ra i hexan.</p>
<p>Jonf\u00f6reningar löser sig i vatten n\u00e4r hydrationsenergin (vatten omringar jonerna) \u00f6verstiger gitterenergin. De flesta fasta \u00e4mnen löser sig b\u00e4ttre vid h\u00f6gre temperatur (endoterm l\u00f6sning). Gaser l\u00f6ser sig <em>s\u00e4mre</em> vid h\u00f6gre temperatur \u2013 varf\u00f6r varmt vatten tappar syre. <strong>Henrys lag:</strong> c(gas) = k\u00a0\u00d7\u00a0p; h\u00f6gre partialtryck \u2192 mer gas l\u00f6st (kolsyrat vatten under tryck).</p>

<h3>4. Elektrolyter</h3>
<table class="theory-table">
  <tr><th>Typ</th><th>Dissociation</th><th>Str\u00f6m?</th><th>Exempel</th></tr>
  <tr><td>Stark elektrolyt</td><td>Fullst\u00e4ndig (\u2192)</td><td>Ja, h\u00f6g</td><td>NaCl, HCl, NaOH</td></tr>
  <tr><td>Svag elektrolyt</td><td>Partiell (\u21cc)</td><td>Ja, l\u00e5g</td><td>CH\u2083COOH, NH\u2083</td></tr>
  <tr><td>Icke-elektrolyt</td><td>Ingen</td><td>Nej</td><td>Sackaros, etanol</td></tr>
</table>

<h3>5. F\u00e4llningsreaktioner och Ksp</h3>
<p>N\u00e4r jonkoncentrationernas produkt \u00f6verstiger l\u00f6slighetsprodukten Ksp f\u00e4lls \u00e4mnet ut.</p>
<div class="formula-box">AgCl(s) \u21cc Ag\u207a(aq) + Cl\u207b(aq)
Ksp(AgCl) = [Ag\u207a][Cl\u207b] = 1,8\u00d710\u207b\u00b9\u2070

F\u00e4llning sker om Q = [Ag\u207a]\u2080[Cl\u207b]\u2080 > Ksp
L\u00f6slighet: s = \u221aKsp = \u221a(1,8\u00d710\u207b\u00b9\u2070) = 1,3\u00d710\u207b\u2075 mol/L</div>
<table class="theory-table">
  <tr><th>Salt</th><th>Ksp (25\u00b0C)</th><th>Utseende</th></tr>
  <tr><td>AgCl</td><td>1,8\u00d710\u207b\u00b9\u2070</td><td>Vit f\u00e4llning</td></tr>
  <tr><td>BaSO\u2084</td><td>1,1\u00d710\u207b\u00b9\u2070</td><td>Vit f\u00e4llning</td></tr>
  <tr><td>PbI\u2082</td><td>9,8\u00d710\u207b\u2079</td><td>Gul f\u00e4llning</td></tr>
  <tr><td>Fe(OH)\u2083</td><td>2,8\u00d710\u207b\u00b3\u2079</td><td>R\u00f6dbrun (rost)</td></tr>
</table>

<h3>6. Koligativa egenskaper</h3>
<p>Egenskaper som beror p\u00e5 <em>antalet</em> l\u00f6sta partiklar (inte deras natur):</p>
<ul>
  <li><strong>Kokpunktsf\u00f6rh\u00f6jning:</strong> \u0394T\u1d47 = K\u1d47 \u00d7 m \u00d7 i (m = molalitet, i = van\u00a0\u2019t Hoff-faktor). Salt (i=2) ger dubbelt effekt j\u00e4mf\u00f6rt med socker (i=1).</li>
  <li><strong>Fryspunktss\u00e4nkning:</strong> \u0394T\u0066 = K\u0066 \u00d7 m \u00d7 i. Koksalt p\u00e5 vinterv\u00e4gar.</li>
  <li><strong>Osmotiskt tryck:</strong> \u03c0 = MRTi. R\u00f6dblodkroppar lyserar i destillerat vatten.</li>
</ul>

<h3>7. Sambandet</h3>
<p>L\u00f6sningskemi kopplar samman n\u00e4stan all annan kemi. Syra-basreaktioner sker i l\u00f6sning. Elektrokemiska celler kr\u00e4ver elektrolytl\u00f6sningar. Titrering bygger p\u00e5 exakt beredning av standardl\u00f6sningar. F\u00e4llningsreaktioner anv\u00e4nds f\u00f6r kvalitativ analys och rening. Koligativa egenskaper f\u00f6rklarar varmekonservering och biologisk osmos. Koncentrationsbegreppet \u2013 enkelt men kraftfullt \u2013 \u00e4r verktyget som f\u00f6renar mol-ber\u00e4kningarna med laboratoriet.</p>
"""))

# ── 7. TERMOKEMI & ENERGI ─────────────────────────────────────────────
sections.append(("Termokemi & energi", "\U0001f321\ufe0f", """
<h2>\U0001f321\ufe0f Termokemi &amp; energi</h2>
<p class="theory-intro">All kemi inneb\u00e4r energiutbyte. Bindningar bryts (energi kr\u00e4vs) och bildas (energi frig\u00f6rs). Nettot avg\u00f6r om en reaktion \u00e4r exoterm (v\u00e4rme avges, ber\u00e4kn. \u0394H &lt; 0) eller endoterm (\u0394H &gt; 0). Termokemi ger verktygen f\u00f6r att m\u00e4ta, ber\u00e4kna och f\u00f6ruts\u00e4ga energiutbyten i kemiska reaktioner.</p>

<h3>1. Entalpi och reaktionsentalpi</h3>
<p><strong>Entalpi (H)</strong> \u00e4r ett tillst\u00e5ndsbegrepp: H = U + pV. Vid konstant tryck \u00e4r energiutbytet = \u0394H. <strong>Standardbildningsentalpi</strong> \u0394H\u0066\u00b0: entalpif\u00f6r\u00e4ndringen n\u00e4r 1 mol f\u00f6rening bildas fr\u00e5n grundsignalerna i deras stabila standardform vid 25\u00b0C och 1 bar. F\u00f6r element i standardform: \u0394H\u0066\u00b0 = 0 per definition.</p>
<div class="formula-box">\u0394H\u00b0\u1d63\u02e3\u207f = \u03a3 \u0394H\u0066\u00b0(produkter) \u2212 \u03a3 \u0394H\u0066\u00b0(reaktanter)

Propan\u2082f\u00f6rbr\u00e4nning: C\u2083H\u2088 + 5O\u2082 \u2192 3CO\u2082 + 4H\u2082O
  \u0394H\u00b0 = [3\u00d7(\u2212393,5) + 4\u00d7(\u2212285,8)] \u2212 [(\u2212103,8) + 5\u00d70]
        = [\u22121180,5 + (\u22121143,2)] \u2212 [\u2212103,8]
        = \u22122219,9 kJ/mol</div>

<h3>2. Hess lag</h3>
<p>Entalpif\u00f6r\u00e4ndringen f\u00f6r en reaktion \u00e4r <em>oberoende av reaktionsv\u00e4gen</em> \u2013 bara start- och sluttillst\u00e5nd spelar roll. Man kan addera termokemiska ekvationer f\u00f6r att ber\u00e4kna \u0394H f\u00f6r sv\u00e5rm\u00e4tta reaktioner.</p>
<div class="formula-box">Ber\u00e4kna \u0394H f\u00f6r: C(s) + \u00bdO\u2082(g) \u2192 CO(g)
Ges:
(1) C(s) + O\u2082(g) \u2192 CO\u2082(g)        \u0394H\u2081 = \u2212393,5 kJ
(2) CO(g) + \u00bdO\u2082(g) \u2192 CO\u2082(g)      \u0394H\u2082 = \u2212283,0 kJ
L\u00f6sning: (1) \u2212 (2):
  \u0394H = \u2212393,5 \u2212 (\u2212283,0) = \u2212110,5 kJ/mol</div>

<h3>3. Bindningsentalpier</h3>
<p>\u0394H kan uppskattas fr\u00e5n bindningsentalpier D: energin att bryta 1 mol bindning i gasform.</p>
<div class="formula-box">\u0394H \u2248 \u03a3 D(brutna) \u2212 \u03a3 D(bildade)

H\u2082 + Cl\u2082 \u2192 2HCl:
  Brutna: H\u2212H (436) + Cl\u2212Cl (243) = 679 kJ
  Bildade: 2\u00d7H\u2212Cl (2\u00d7432) = 864 kJ
  \u0394H \u2248 679 \u2212 864 = \u2212185 kJ/mol</div>
<table class="theory-table">
  <tr><th>Bindning</th><th>D (kJ/mol)</th><th>Bindning</th><th>D (kJ/mol)</th></tr>
  <tr><td>H\u2212H</td><td>436</td><td>C\u2212C</td><td>347</td></tr>
  <tr><td>O=O</td><td>498</td><td>C=C</td><td>614</td></tr>
  <tr><td>N\u2261N</td><td>945</td><td>C\u2261C</td><td>839</td></tr>
  <tr><td>H\u2212O</td><td>463</td><td>C\u2212H</td><td>413</td></tr>
  <tr><td>H\u2212Cl</td><td>432</td><td>C=O</td><td>745</td></tr>
</table>

<h3>4. Kalorimetri</h3>
<div class="formula-box">Q = m \u00d7 c\u209a \u00d7 \u0394T
m = massa [g],  c\u209a(vatten) = 4,184 J/(g\u00b7K),  \u0394T = tempf\u00f6r\u00e4ndring

100 mL 0,500 M HCl + 100 mL 0,500 M NaOH, \u0394T = 3,34\u00b0C:
Q = 200 \u00d7 4,184 \u00d7 3,34 = 2795 J
n(HCl) = 0,500 \u00d7 0,100 = 0,0500 mol
\u0394H = \u22122,795/0,0500 = \u221255,9 kJ/mol (j\u00e4mf\u00f6r med teoret. \u221257,1)</div>

<h3>5. Entropi och Gibbs fria energi</h3>
<p><strong>Entropi (S)</strong> m\u00e4ter oordning/spridning. Naturen tenderar mot \u00f6kat antal mikrotillst\u00e5nd \u2013 2:a termodynamikens lag: \u0394S_total &gt; 0 f\u00f6r spontana processer.</p>
<div class="formula-box">\u0394G = \u0394H \u2212 T\u00d7\u0394S   (T i Kelvin)
\u0394G &lt; 0: Spontan
\u0394G &gt; 0: Icke-spontan
\u0394G = 0: J\u00e4mvikt</div>
<table class="theory-table">
  <tr><th>\u0394H</th><th>\u0394S</th><th>Spontan?</th><th>Exempel</th></tr>
  <tr><td>\u2212</td><td>+</td><td>Alltid</td><td>F\u00f6rbr\u00e4nning</td></tr>
  <tr><td>\u2212</td><td>\u2212</td><td>Vid l\u00e5g T</td><td>Frysning av vatten</td></tr>
  <tr><td>+</td><td>+</td><td>Vid h\u00f6g T</td><td>Sm\u00e4ltning av is</td></tr>
  <tr><td>+</td><td>\u2212</td><td>Aldrig</td><td>\u2013</td></tr>
</table>

<h3>6. Fas\u00f6verg\u00e5ngar</h3>
<table class="theory-table">
  <tr><th>\u00d6verg\u00e5ng</th><th>Energi</th><th>Vatten: \u0394H</th></tr>
  <tr><td>Sm\u00e4ltning</td><td>+\u0394H\u0066\u1d58\u02e2</td><td>+6,01 kJ/mol vid 0\u00b0C</td></tr>
  <tr><td>Stelning</td><td>\u2212\u0394H\u0066\u1d58\u02e2</td><td>\u22126,01 kJ/mol</td></tr>
  <tr><td>\u00c5ngbildning</td><td>+\u0394H\u1d65\u1d44\u1d56</td><td>+40,7 kJ/mol vid 100\u00b0C</td></tr>
  <tr><td>Kondensation</td><td>\u2212\u0394H\u1d65\u1d44\u1d56</td><td>\u221240,7 kJ/mol</td></tr>
</table>
<p>\u00c5ngbildningsentalpin f\u00f6r vatten (40,7 kJ/mol) \u00e4r ovanligt h\u00f6g p\u00e5 grund av v\u00e4tebindningarna som m\u00e5ste brytas n\u00e4r vatten \u00f6verg\u00e5r till \u00e5nga. Det \u00e4r det som g\u00f6r svettning s\u00e5 effektivt f\u00f6r k\u00f6lning.</p>

<h3>7. Sambandet</h3>
<p>Termokemi kvantifierar energifl\u00f6det i kemi. \u0394H f\u00f6rklarar varf\u00f6r fossila br\u00e4nslen ger energi (C\u2212H + O\u2082 \u2192 CO\u2082 + H\u2082O med l\u00e4gre total entalpi). Hess lag g\u00f6r det m\u00f6jligt att ber\u00e4kna \u0394H f\u00f6r reaktioner man aldrig kan utf\u00f6ra i ett steg. Gibbs fria energi f\u00f6rklarar varf\u00f6r j\u00e4rn rostar spontant och varf\u00f6r biologisk metabolism fungerar. Kalorimetri m\u00e4ter allt detta i labbet. Under allt detta: energi \u00e4r bevarad, men fri energi kan omvandlas till arbete \u2013 grundprincipen i batterier, motorer och liv.</p>
"""))

# ── 8. LABORATIV KEMI & SÄKERHET ──────────────────────────────────────
sections.append(("Laborativ kemi & säkerhet", "\U0001f52c", """
<h2>\U0001f52c Laborativ kemi &amp; s\u00e4kerhet</h2>
<p class="theory-intro">Laboratoriet \u00e4r platsen d\u00e4r teorin m\u00f6ter verkligheten. Men det \u00e4r ocks\u00e5 en milj\u00f6 med potentiella faror \u2013 fr\u00e4tande syror, brandfarliga l\u00f6sningsmedel, giftiga \u00e5ngor. S\u00e4kerhetskunskap \u00e4r inte en regel att memorera \u2013 det \u00e4r en f\u00f6ruts\u00e4ttning f\u00f6r att arbeta tryggt och f\u00e5 tillf\u00f6rlitliga resultat.</p>

<h3>1. Grundl\u00e4ggande s\u00e4kerhetsregler</h3>
<ul>
  <li><strong>Skyddsglasögon alltid</strong> \u2013 skyddar mot stänk av syror och baser som kan skada hornhinnan permanent</li>
  <li><strong>Labbrock och slutna skor</strong> \u2013 skyddar hud mot kemikaliestänk</li>
  <li><strong>L\u00e5ng h\u00e5r bindas upp</strong> \u2013 risk f\u00f6r kontakt med kemikalier och brännare</li>
  <li><strong>Inget \u00e4tande eller drickande</strong> \u2013 risk f\u00f6r f\u00f6rt\u00e4ring av gifter</li>
  <li><strong>Dragsk\u00e5p</strong> \u2013 anv\u00e4nds f\u00f6r flyktiga, giftiga eller starka \u00e4mnen (konc. HCl, NH\u2083, l\u00f6sningsmedel)</li>
  <li><strong>H\u00e4ll alltid syra i vatten</strong> \u2013 aldrig tv\u00e4rtom. Utspädning av konc. H\u2082SO\u2084 frig\u00f6r enorm v\u00e4rme</li>
  <li>K\u00e4nn till n\u00f6dprocedurer: n\u00f6ddusch (15 min), \u00f6gonsk\u00f6ljning (15 min), brandsläckare, f\u00f6rsta hj\u00e4lpen</li>
</ul>

<h3>2. GHS-faropiktogram</h3>
<table class="theory-table">
  <tr><th>Piktogram</th><th>Farokategori</th><th>Exempel</th></tr>
  <tr><td>Dödskalle</td><td>Akut toxicitet (cat 1\u20133)</td><td>HCN, Cl\u2082, CO</td></tr>
  <tr><td>Utropstecken</td><td>Irriterande/skadlig</td><td>Aceton, sp. NaOH</td></tr>
  <tr><td>Flamma</td><td>Brandfarlig</td><td>Etanol (fp 13\u00b0C), hexan</td></tr>
  <tr><td>Flamma \u00f6ver cirkel</td><td>Oxiderande</td><td>H\u2082O\u2082 konc., KMnO\u2084</td></tr>
  <tr><td>Fr\u00e4tande</td><td>Fr\u00e4tande f\u00f6r hud/metall</td><td>H\u2082SO\u2084 konc., NaOH konc., HF</td></tr>
  <tr><td>Explosion</td><td>Explosiv</td><td>Organiska peroxider</td></tr>
  <tr><td>H\u00e4lsofara</td><td>Cancer/organ</td><td>Bensen, formaldehyd</td></tr>
  <tr><td>Milj\u00f6 (fisk+tr\u00e4d)</td><td>Milj\u00f6farlig</td><td>Kvicksilver, kloroform</td></tr>
</table>

<h3>3. Laboratorieutrustning</h3>
<table class="theory-table">
  <tr><th>Utrustning</th><th>Syfte</th><th>Precision</th></tr>
  <tr><td>B\u00e4gare</td><td>Blanda, v\u00e4rma</td><td>L\u00e5g \u00b15\u201310\u00a0%</td></tr>
  <tr><td>M\u00e4tkolv</td><td>Exakt beredning av l\u00f6sning</td><td>H\u00f6g \u00b10,02\u00a0%</td></tr>
  <tr><td>Vollpipett</td><td>Exakt avsatt volym</td><td>H\u00f6g \u00b10,05\u00a0%</td></tr>
  <tr><td>Byrett</td><td>Titrering \u2013 m\u00e4ter \u00e5tg\u00e5ng</td><td>H\u00f6g \u00b10,05 mL</td></tr>
  <tr><td>pH-meter</td><td>Exakt pH-m\u00e4tning</td><td>H\u00f6g \u00b10,01 pH</td></tr>
  <tr><td>Spektrofotometer</td><td>Absorbans \u2192 koncentration</td><td>H\u00f6g</td></tr>
  <tr><td>Analytisk v\u00e5g</td><td>Exakt v\u00e4gning</td><td>\u00b10,0001 g</td></tr>
</table>

<h3>4. Titrering \u2013 steg f\u00f6r steg</h3>
<ol>
  <li>Skölj byretten med titratorl\u00f6sningen, fyll upp och nollst\u00e4ll</li>
  <li>Pipettera exakt volym titrand i erlenmeyerkolven; tillsätt indikator</li>
  <li>Tillsätt titratorl\u00f6sning droppvis, swirla konstant</li>
  <li>Nära ekvivalenspunkten: halvdroppar \u2013 f\u00e4rgbytet ska best\u00e5 &gt;30 s</li>
  <li>L\u00e4s av byretten (\u00b10,05 mL), ber\u00e4kna c med c\u2081V\u2081=c\u2082V\u2082</li>
</ol>
<div class="formula-box">Beer-Lamberts lag (spektrofotometri):
A = \u03b5 \u00d7 l \u00d7 c
A = absorbans (dimensionsl\u00f6s)
\u03b5 = mol\u00e4r absorptivitet [L/(mol\u00b7cm)]
l = kyvettl\u00e4ngd [cm]
c = koncentration [mol/L]

Metod: Rita standardkurva (A vs c) \u2192 interpolera ok\u00e4nd c</div>

<h3>5. Felanalys</h3>
<table class="theory-table">
  <tr><th>Feltyp</th><th>Karakt\u00e4r</th><th>Hur minimeras?</th></tr>
  <tr><td>Systematiskt</td><td>Drar \u00e5t ett h\u00e5ll; p\u00e5verkar noggrannhet</td><td>Kalibrering, metodbyte</td></tr>
  <tr><td>Slumpm\u00e4ssigt</td><td>Varierar; p\u00e5verkar precision</td><td>Upprepa, ta medelvärde</td></tr>
  <tr><td>Grovfel</td><td>Enstaka stor avvikelse</td><td>Kassera outliers</td></tr>
</table>
<div class="formula-box">Procentuellt fel = |uppm\u00e4tt \u2212 sant| / sant \u00d7 100\u00a0%

Signifikanta siffror:
  V\u00e5g \u00b10,01 g \u2192 rapportera 2 decimaler
  Byrett \u00b10,05 mL \u2192 rapportera 2 decimaler
  Multiplicera/dividera \u2192 beh\u00e5ll minsta antal sig. siffror</div>

<h3>6. Labrapportens struktur</h3>
<p><strong>Syfte</strong> \u2013 Vad ska unders\u00f6kas? | <strong>Teori</strong> \u2013 Kemiska principer + formler | <strong>Metod</strong> \u2013 Exakt utf\u00f6rande (repeterbart) | <strong>Resultat</strong> \u2013 Tabeller, ber\u00e4kningar, grafer | <strong>Diskussion</strong> \u2013 Felk\u00e4llor, rimlighetsbedömning, jämf\u00f6relse med literaturv\u00e4rden | <strong>Slutsats</strong> \u2013 Svarar p\u00e5 syftet.</p>

<h3>7. Sambandet</h3>
<p>Laborativ kemi \u00e4r direkt till\u00e4mpning av all teori. Titrering bygger p\u00e5 syra-baskemin och st\u00f6kiometrin. Kalorimetri m\u00e4ter entalpiv\u00e4rdena fr\u00e5n termokemin. Spektrofotometri till\u00e4mpar Beer-Lamberts lag. GHS-m\u00e4rkningen speglar de kemiska egenskaperna vi l\u00e4rt oss. Och felanalysen tvingar oss t\u00e4nka kritiskt: hur v\u00e4l st\u00e4mmer experimentet med teorin? Det \u00e4r den vetenskapliga processen \u2013 observera, m\u00e4ta, analysera, f\u00f6rb\u00e4ttra. Alla enheter ska anges och ber\u00e4kningar visas.</p>
"""))

# =====================================================================
# Build the JS THEORY array string
# =====================================================================
js_parts = ['const THEORY = [\n']
for cat, icon, content in sections:
    js_parts.append('  {\n')
    js_parts.append(f'    cat: "{cat}",\n')
    js_parts.append(f'    icon: "{icon}",\n')
    js_parts.append('    html: `')
    js_parts.append(content)
    js_parts.append('`\n  },\n')
js_parts.append(']')

NEW_THEORY = ''.join(js_parts)

# Count words per section
import re
for cat, icon, content in sections:
    words = len(re.findall(r'\w+', content))
    print(f"  {cat}: ~{words} words")

# Inject
old_block = html[ti : te]
html = html[:ti] + NEW_THEORY + html[te:]

print(f"\nOld THEORY: {len(old_block)} chars")
print(f"New THEORY: {len(NEW_THEORY)} chars")
print(f"Output: {len(html)} chars")

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Written!")
