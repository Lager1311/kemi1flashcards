import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()

# ── 1. Add content to "Atomens byggnad" ──────────────────────────────────────
# Add atomic radius, effective nuclear charge, ionization energy before closing backtick
ATOMENS_EXTRA = """
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
"""

# Find end of Atomens byggnad section
old_atom_end = '` },\n  { cat: \'Materia & faser\''
new_atom_end = ATOMENS_EXTRA + '\n` },\n  { cat: \'Materia & faser\''
html = html.replace(old_atom_end, new_atom_end, 1)

# ── 2. Add to "Kemisk bindning" ──────────────────────────────────────────────
BINDNING_EXTRA = """
<h3>7. Molekylgeometri (VSEPR)</h3>
<p>Elektrononpar stöter bort varandra → molekylens 3D-form bestäms av antalet bindande och fria elektronpar runt centralatomen (<strong>VSEPR-teorin</strong>):</p>
<ul>
  <li><strong>Linjär</strong> – 2 bindningar, 0 fria par. Bindningsvinkel 180°. Ex: CO₂, BeF₂</li>
  <li><strong>Trigonalt plan</strong> – 3 bindningar, 0 fria par. Bindningsvinkel 120°. Ex: BF₃</li>
  <li><strong>Tetraedisk</strong> – 4 bindningar, 0 fria par. Bindningsvinkel 109,5°. Ex: CH₄, CCl₄</li>
  <li><strong>Trigonal pyramidal</strong> – 3 bindningar, 1 fritt par. Vinkel ≈107°. Ex: NH₃ (kväve har 1 fritt par)</li>
  <li><strong>Vinklad</strong> – 2 bindningar, 2 fria par. Vinkel ≈104,5°. Ex: H₂O (syre har 2 fria par)</li>
</ul>
<p>Fria elektronpar tar mer plats än bindande par → de "trycker ihop" bindningsvinklarna lite.</p>
<p><strong>Polär vs opolär molekyl:</strong> En molekyl är en dipol om den har polära bindningar OCH om laddningscentrumen inte sammanfaller (t.ex. H₂O = dipol, CO₂ = ej dipol trots polära bindningar eftersom molekylen är linjär och symmetrisk).</p>

<h3>8. Intermolekylära bindningar</h3>
<p>Bindningar <em>mellan</em> molekyler (svagare än intramolekylära). Avgör smält- och kokpunkter samt löslighet.</p>
<ul>
  <li><strong>Van der Waals-krafter (dispersionskrafter)</strong> – tillfälliga dipoler uppstår i alla molekyler pga ojämn elektronfördelning. Verkar på alla ämnen. Styrkan ökar med molekylstorlek och kontaktyta. Raka molekyler packas tätare → starkare vdw än grenade.</li>
  <li><strong>Dipol-dipolbindning</strong> – permanent attraktionskraft mellan polära molekyler. Starkare än vdw. Ex: HCl.</li>
  <li><strong>Vätebindning</strong> – extra stark dipol-dipol när väte är bundet direkt till F, O eller N (<strong>FON-regeln</strong>). Vätedonator (δ+) attraherar fritt elektronpar på en annan F/O/N-atom. Ex: H₂O, NH₃, HF. Förklarar varför vatten har ovanligt hög kokpunkt.</li>
  <li><strong>Jon-dipolbindning</strong> – jon attraherar polär molekyl. Viktig vid upplösning av salter i vatten (hydratisering).</li>
</ul>
<div class="formula-box">
  <strong>Styrkeordning (svagast → starkast):</strong><br>
  vdw &lt; dipol-dipol &lt; vätebindning ≪ jonbindning / kovalent bindning
</div>

<h3>9. Löslighet – "lika löser lika"</h3>
<ul>
  <li><strong>Polära ämnen</strong> (salter, socker, etanol) löser sig i <strong>polära lösningsmedel</strong> (vatten). Kallas <em>hydrofila</em>.</li>
  <li><strong>Opolära ämnen</strong> (fetter, kolväten) löser sig i <strong>opolära lösningsmedel</strong> (bensin, aceton). Kallas <em>hydrofoba</em>.</li>
</ul>
<p>NaCl löser sig i vatten: vattenmolekylerna omger jonerna med jon-dipolbindningar (hydratisering). Na⁺ attraherar syreänden (δ−) och Cl⁻ attraherar väteänden (δ+).</p>

<h3>10. Smält- och kokpunkter</h3>
<p>Vid smältning/kokning bryts de <em>intermolekylära</em> bindningarna (inte de kovalenta bindningarna inuti molekylerna). Mer/starkare bindningar → högre smält- och kokpunkt.</p>
<p><strong>Smältpunkt påverkas extra av molekylform:</strong> Långa, raka molekyler packas tätt (mer kontaktyta → fler vdw). Grenade molekyler packas sämre → lägre smältpunkt.</p>
"""

old_bind_end = '` },\n  { cat: \'Reaktioner & stökiometri\''
new_bind_end = BINDNING_EXTRA + '\n` },\n  { cat: \'Reaktioner & stökiometri\''
html = html.replace(old_bind_end, new_bind_end, 1)

# ── 3. Add to "Reaktioner & stökiometri" ────────────────────────────────────
STOK_EXTRA = """
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
"""

old_stok_end = '` },\n  { cat: \'Syror & baser\''
new_stok_end = STOK_EXTRA + '\n` },\n  { cat: \'Syror & baser\''
html = html.replace(old_stok_end, new_stok_end, 1)

# ── 4. Expand "Organisk kemi" ────────────────────────────────────────────────
ORG_EXTRA = """
<h3>4. Alkener (CₙH₂ₙ)</h3>
<p>Kolväten med <strong>minst en dubbelbindning</strong>. Ändelse: <strong>-en</strong>. Mer reaktiva än alkaner (additionsreaktioner).</p>
<ul>
  <li>Eten C₂H₄ – industriellt viktig (plastframställning)</li>
  <li>Propen C₃H₆, Buten C₄H₈ …</li>
  <li>Dubbelbindningen låser kedjan (ej vriden)</li>
  <li>Opolära → ej vattenlösliga</li>
  <li>Diener = 2 dubbelbindningar, triener = 3 st</li>
</ul>

<h3>5. Alkyner (CₙH₂ₙ₋₂)</h3>
<p>Kolväten med <strong>minst en trippelbindning</strong>. Ändelse: <strong>-yn</strong>. Mest reaktiva av kolvätena.</p>
<ul>
  <li>Etyn C₂H₂ (acetylen) – används vid svetsning</li>
  <li>Trippelbindningen är kortast och starkast av C–C bindningarna</li>
  <li>Opolära → ej vattenlösliga</li>
</ul>

<h3>6. Isomerer</h3>
<p><strong>Isomerer</strong> har samma summaformel men olika struktur → olika egenskaper.</p>
<div class="formula-box">
  C₄H₁₀: Butan (rakt, kp −1°C) och 2-metylpropan (grenat, kp −12°C)<br>
  Grenad molekyl: sämre kontaktyta → svagare vdw → lägre kokpunkt
</div>

<h3>7. Namngivning (IUPAC-regler)</h3>
<ol>
  <li>Identifiera <strong>stamkolvätet</strong> = längsta sammanhängande kedja som inkluderar funktionella grupper.</li>
  <li>Numrera kolkedjan så att funktionella grupper/substituenter får <strong>lägsta möjliga nummer</strong>.</li>
  <li>Ange substituenter (i bokstavsordning) med lokant som prefix, sedan stamkolvätet.</li>
  <li>Ange dubbel-/trippelbindningars position med nummer.</li>
</ol>
<div class="formula-box">
  Exempel: 3-etyl-5-metyl-2-hexen<br>
  (Stamkedja: hexen, dubbelbindning vid C2, etyl vid C3, metyl vid C5)
</div>

<h3>8. Alkoholer</h3>
<p>Funktionell grupp: <strong>hydroxylgrupp –OH</strong>. Ändelse: <strong>-ol</strong>.</p>
<ul>
  <li><strong>Metanol</strong> CH₃OH – giftig, leder till blindhet/död. Bränsle.</li>
  <li><strong>Etanol</strong> C₂H₅OH – alkohol i drycker (jäsning av socker). Bränsle.</li>
  <li><strong>Propanol</strong> C₃H₇OH, <strong>Butanol</strong> C₄H₉OH …</li>
</ul>
<p><strong>Egenskaper:</strong> Kan bilda vätebindningar via –OH → <em>högre kokpunkt</em> än motsvarande kolväte. Lösligheten i vatten minskar med längre kolkedja (pentanol och längre = olösliga).</p>
<p><strong>Envärda</strong> (1 OH), <strong>flervärda</strong>: Glykol = 1,2-etandiol (2 OH), Glycerol = 1,2,3-propantriol (3 OH).</p>
<p><strong>Primär</strong> alkohol: –OH bundet till C med 1 granne. <strong>Sekundär</strong>: 2 grannar. <strong>Tertiär</strong>: 3 grannar.</p>

<h3>9. Karboxylsyror</h3>
<p>Funktionell grupp: <strong>karboxylgrupp –COOH</strong>. Ändelse: <strong>-syra</strong>. Svaga organiska syror.</p>
<ul>
  <li><strong>Metansyra</strong> (myrsyra) HCOOH – i myrstack</li>
  <li><strong>Etansyra</strong> (ättiksyra) CH₃COOH – i vinäger, pKa = 4,76</li>
  <li><strong>Fettsyror</strong> – långa karboxylsyror i fetter. Omättade fettsyror har dubbelbindningar (härskning sker när dubbelbindningar reagerar med syre)</li>
  <li><strong>Oxalsyra</strong> (etandisyra) – 2 karboxylgrupper, finns i rabarber</li>
</ul>
<p>Karboxylsyrorna bildar vätebindningar → höga smält- och kokpunkter. Anjon (karboxylatjon) har ändelse <strong>-oat</strong> (etansyra → etanoat).</p>
<p>Namngivning: kolatom nr 1 = kolatomen i –COOH.</p>

<h3>10. Kolvätenas allmänna formler</h3>
<ul>
  <li>Alkaner: CₙH₂ₙ₊₂</li>
  <li>Alkener: CₙH₂ₙ</li>
  <li>Alkyner: CₙH₂ₙ₋₂</li>
  <li>Cykliska alkaner: CₙH₂ₙ (cyklo-prefix, t.ex. cyklohexan C₆H₁₂)</li>
</ul>

<h3>11. Trivialnamn vs systematiska namn</h3>
<p>Många organiska ämnen har välkända <strong>trivialnamn</strong> (ättiksyra, träsprit, glykol) som är kortare men inte avslöjar strukturen. <strong>IUPAC-namn</strong> (systematiska) är standardiserade och gäller internationellt.</p>
<div class="formula-box">
  Mjölksyra → 2-hydroxipropansyra<br>
  Träsprit → metanol<br>
  Ättiksyra → etansyra<br>
  Glykol → 1,2-etandiol
</div>
"""

old_org_end = '` },\n  { cat: \'Lösningar & koncentration\''
new_org_end = ORG_EXTRA + '\n` },\n  { cat: \'Lösningar & koncentration\''
html = html.replace(old_org_end, new_org_end, 1)

# ── 5. Add new "Elektrokemi" section before "Termokemi & energi" ─────────────
ELEKTROKEMI = """  { cat: 'Elektrokemi', icon: '⚡', html: `
<h2>⚡ Elektrokemi</h2>
<p class="theory-intro">Elektrokemi handlar om sambandet mellan kemiska reaktioner och elektricitet. En spontan redoxreaktion kan driva en elektrisk ström (galvaniskt element/batteri), och elektrisk ström kan driva en icke-spontan kemisk reaktion (elektrolys).</p>

<h3>1. Galvaniskt element</h3>
<p>I ett <strong>galvaniskt element</strong> utnyttjas en spontan redoxreaktion för att producera elektricitet.</p>
<ul>
  <li><strong>Anod</strong> – oxidation sker, elektroner avges. Negativ pol i ett galvaniskt element.</li>
  <li><strong>Katod</strong> – reduktion sker, elektroner tas emot. Positiv pol i ett galvaniskt element.</li>
  <li><strong>Elektrolyt</strong> – saltlösning som transporterar joner.</li>
  <li><strong>Saltbrygga</strong> – håller lösningarna åtskilda men tillåter jonvandring (håller laddningsbalansen).</li>
</ul>
<div class="formula-box">
  <strong>Zink-kopparelement:</strong><br>
  Anod: Zn(s) → Zn²⁺(aq) + 2e⁻ (oxidation)<br>
  Katod: Cu²⁺(aq) + 2e⁻ → Cu(s) (reduktion)<br>
  Totalreaktion: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
</div>

<h3>2. Cellschema</h3>
<p>Kortfattad notation för galvaniskt element:</p>
<div class="formula-box">
  – Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s) +<br>
  | = fasgräns &nbsp;&nbsp; || = saltbrygga<br>
  Oxidation till vänster, reduktion till höger
</div>

<h3>3. Normalpotential (E°)</h3>
<p><strong>Normalpotential</strong> anger hur benäget ett ämne är att reduceras (ta upp elektroner), mätt mot normalvätgaselektroden (E° = 0,00 V).</p>
<ul>
  <li>Högt positivt E° → ämnet är ett starkt <em>oxidationsmedel</em>, reduceras lätt.</li>
  <li>Negativt E° → ämnet reduceras svårt, oxideras lätt → starkt <em>reduktionsmedel</em>.</li>
</ul>
<div class="formula-box">
  Exempel: Ag⁺ + e⁻ → Ag &nbsp; E° = +0,80 V (ädel metall)<br>
  Zn²⁺ + 2e⁻ → Zn &nbsp; E° = −0,76 V (oädel metall)
</div>

<h3>4. Beräkna EMK (elektromotorisk kraft)</h3>
<div class="formula-box">
  E°cell = E°red (katod) − E°red (anod)<br><br>
  Zink-kopparelement:<br>
  E°cell = +0,34 − (−0,76) = <strong>+1,10 V</strong>
</div>
<p>EMK är alltid positiv för en spontan reaktion.</p>

<h3>5. Elektrolys</h3>
<p><strong>Elektrolys</strong> = man tvingar en icke-spontan redoxreaktion att ske med hjälp av extern elektrisk ström.</p>
<ul>
  <li><strong>Katod</strong> – negativ pol, reduktion sker (katjoner tar upp elektroner).</li>
  <li><strong>Anod</strong> – positiv pol, oxidation sker (anjoner avger elektroner).</li>
</ul>
<p>Vid katoden reduceras den jon med <em>högst normalpotential</em> (lättast att reducera) först. Vid anoden oxideras den jon med <em>lägst normalpotential</em> (svårast att reducera = lättast att oxidera) först.</p>
<div class="formula-box">
  <strong>Elektrolys av CuCl₂(aq):</strong><br>
  Katod: Cu²⁺ + 2e⁻ → Cu(s) &nbsp; (E° = +0,34 V)<br>
  Anod: 2Cl⁻ → Cl₂(g) + 2e⁻ &nbsp; (E° = +1,36 V)<br><br>
  Elektrolys av H₂O med Na₂SO₄:<br>
  Katod: 2H₂O + 2e⁻ → H₂(g) + 2OH⁻<br>
  Anod: 2H₂O → O₂(g) + 4H⁺ + 4e⁻
</div>

<h3>6. Korrosion</h3>
<p><strong>Korrosion</strong> = metall löses upp genom elektrokemisk reaktion. Vanligaste exemplet är att järn rostar i kontakt med syre och vatten:</p>
<div class="formula-box">
  4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃ (→ Fe₂O₃·H₂O, rost)
</div>
<p><strong>Galvanisk korrosion</strong>: Två olika metaller i kontakt i fuktig luft bildar ett galvaniskt element → den mer oädla metallen oxideras (löses upp) snabbare.</p>
<p>Exempel: Järnspik i kopparplåt → järn (oädlare) löses upp.</p>

<h3>7. Korrosionsskydd</h3>
<ul>
  <li><strong>Passivering</strong> – naturligt oxidskikt skyddar (t.ex. Al₂O₃ på aluminium). Zinklager på stål = <em>galvanisering</em>.</li>
  <li><strong>Ytbeläggning</strong> – färg, lack, emalj hindrar syre/vatten att nå metallen.</li>
  <li><strong>Offeranod</strong> – ett mer oädelt metal (Zn eller Mg) ansluts till konstruktionen och korroderar istället. Används på båtpropellrar och rör.</li>
</ul>
` },
"""

old_termo = "  { cat: 'Termokemi & energi'"
new_termo = ELEKTROKEMI + "  { cat: 'Termokemi & energi'"
html = html.replace(old_termo, new_termo, 1)

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f'Klart! Filstorlek: {len(html)} chars / {len(html)//1024} KB')
