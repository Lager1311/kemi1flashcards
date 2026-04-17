# -*- coding: utf-8 -*-
# Sections 5-8: Organisk kemi, Lösningar, Termokemi, Laborativ kemi
import sys
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

sections = []

# ══════════════════════════════════════════════════════════════════
# 5. ORGANISK KEMI
# ══════════════════════════════════════════════════════════════════
sections.append(("Organisk kemi", "\U0001f33f", """
<h2>\U0001f33f Organisk kemi</h2>
<p class="theory-intro">Organisk kemi \u00e4r kemin om kolf\u00f6reningar \u2013 molekyler d\u00e4r kol \u00e4r ryggraden. Trots att kol bara \u00e4r ett av 118 grundämnen svarar det mot \u00f6ver 10 miljoner k\u00e4nda f\u00f6reningar, mer \u00e4n alla andra grundämnen tillsammans. Anledningen \u00e4r kolets unika f\u00f6rm\u00e5ga att bilda stabila kedjor, ringar och grenade strukturer av vilken l\u00e4ngd som helst, kombinerat med bindningar till v\u00e4te, syre, kv\u00e4ve, svavel och halogener. Organisk kemi \u00e4r grunden f\u00f6r biokemi, l\u00e4kemedelskemi, polymerkemi och petrokemin.</p>

<h3>1. Kolatomens unikitet</h3>
<p>Kol (C, Z=6) har fyra valenselektroner och bildar alltid fyra kovalenta bindningar (tetravalent). Det inneb\u00e4r att varje C-atom kan binda till fyra andra atomer \u2013 inklusive andra kolatomer. Detta m\u00f6jligg\u00f6r:</p>
<ul>
  <li>Raka kedjor: metanol, etan, propan...</li>
  <li>Grenade kedjor: isobutan (2-metylpropan)</li>
  <li>Ringar: cyklohexan, bensen</li>
  <li>Dubbel- och trippelbindningar: eten (C=C), etyn (C≡C)</li>
  <li>Kombinationer av allt ovan: kolesterol, DNA, proteiner</li>
</ul>
<p>Kolv\u00e4ten som best\u00e5r enbart av C och H kallas <strong>kolv\u00e4ten</strong>; dessa delar sig i alkaner (enbart enkelbindningar), alkener (minst en C=C), alkyner (minst en C≡C) och aromater (bensen-ring). Alla \u00f6vriga organiska \u00e4mnen har en eller flera <strong>funktionella grupper</strong> \u2013 atomgrupper som ger karakteristiska kemiska egenskaper.</p>

<h3>2. Alkaner \u2013 m\u00e4ttade kolv\u00e4ten</h3>
<p>Alkaner har formeln C\u2099H\u2082\u2099\u208a\u2082 och inneh\u00e5ller enbart C\u2013C och C\u2013H enkelbindningar. "M\u00e4ttade" inneb\u00e4r att ingen mer v\u00e4te kan adderas. Alla bindningar \u00e4r σ-bindningar med fri rotation.</p>
<table class="theory-table">
  <tr><th>Namn</th><th>Formel</th><th>Kokpunkt</th><th>Aggregation (25°C)</th></tr>
  <tr><td>Metan</td><td>CH\u2084</td><td>\u2212161 °C</td><td>Gas</td></tr>
  <tr><td>Etan</td><td>C\u2082H\u2086</td><td>\u221289 °C</td><td>Gas</td></tr>
  <tr><td>Propan</td><td>C\u2083H\u2088</td><td>\u221242 °C</td><td>Gas</td></tr>
  <tr><td>Butan</td><td>C\u2084H\u2081\u2080</td><td>0 °C</td><td>Gas</td></tr>
  <tr><td>Pentan</td><td>C\u2085H\u2081\u2082</td><td>36 °C</td><td>V\u00e4tska</td></tr>
  <tr><td>Hexan</td><td>C\u2086H\u2081\u2084</td><td>69 °C</td><td>V\u00e4tska</td></tr>
  <tr><td>Oktadekan</td><td>C\u2081\u2088H\u2083\u2088</td><td>316 °C</td><td>Fast</td></tr>
</table>
<p>Kokpunkten \u00f6kar med l\u00e4ngre kolkedja (starkare Londonkrafter med f\u00f6r st\u00f6rre molmassa). Grenad struktur sänker kokpunkten (minskar kontaktytan \u2192 svagare London-krafter). Alkaner brinner (exoterm f\u00f6rbr\u00e4nning): CH\u2084 + 2O\u2082 → CO\u2082 + 2H\u2082O, ΔH = \u2212890 kJ/mol. De \u00e4r annars kemiskt tr\u00f6ga (s\u00e4rskilt substitutionsreaktioner med halogener kr\u00e4ver UV-ljus).</p>

<h3>3. Alkener och alkyner \u2013 om\u00e4ttade kolv\u00e4ten</h3>
<p><strong>Alkener</strong> (formel C\u2099H\u2082\u2099) har minst en C=C-dubbelbindning (en σ + en π). π-bindningen \u00e4r reaktiv och m\u00f6jligg\u00f6r additionsreaktioner: H\u2082, Br\u2082, HX och H\u2082O kan adderas \u00f6ver dubbelbindningen. Brom\u00f6ver\u00f6tter (Br\u2082 + CC=CC → BrCC-CCBr) f\u00e4rgar av bromvatten \u2013 ett enkelt test f\u00f6r omm\u00e4ttnad.</p>
<p>Cis/trans-isomeri uppst\u00e5r n\u00e4r ingen fri rotation finns runt dubbelbindningen och de b\u00e5da sidorna av bindningen har olika substituenter. Cis-but-2-en och trans-but-2-en \u00e4r olika \u00e4mnen med olika egenskaper.</p>
<p><strong>Alkyner</strong> (C\u2099H\u2082\u2099\u208b\u2082) har trippelbindning C≡C. Etyn (acetylen, H\u2013C≡C\u2013H) f\u00f6rbr\u00e4nns i s\u00e4rkassumsyrgas och n\u00e5r temperaturer runt 3500°C, anv\u00e4nds f\u00f6r sk\u00e4rning och sv\u00e4tsning av metall.</p>

<h3>4. Aromater \u2013 bensenringen</h3>
<p>Bensen (C\u2086H\u2086) \u00e4r det enklaste aromata systemet. Strukturen \u00e4r en hexagonal ring med delokaliserade π-elektroner \u00f6ver alla sex kolatomerna. Var och en av de sex C\u2013C-bindningarna \u00e4r identiska med l\u00e4ngd 140 pm (mellanting mellan 154 pm enkelbindning och 134 pm dubbelbindning). Bensenringen \u00e4r exceptionellt stabil (aromatisk stabilisering, 150 kJ/mol mer stabil \u00e4n ett hypotetiskt cyklohexatrien).</p>
<p>Bensen genomg\u00e5r karakteristiskt <em>elektrofil aromatisk substitution</em> (EAS) snarare \u00e4n addition \u2013 ringen beh\u00e5llas int\u00e4kt f\u00f6r att bevara aromatisk stabilisering. Viktiga EAS-reaktioner: nitrering (NO\u2082-grupp in), halogenering (med katalysator), sulfonering (SO\u2083H-grupp).</p>
<p>Substituenter i bensenringen klassas som <em>aktiverande</em> (elektrondoerare, t.ex. \u2013OH, \u2013NH\u2082, styr angrepp till orto/para-position) eller <em>deaktiverande</em> (elektronmottagare, t.ex. \u2013NO\u2082, \u2013COOH, styr till meta-position).</p>

<h3>5. Funktionella grupper och viktiga \u00e4mnesklasser</h3>
<p>Funktionella grupper \u00e4r grupper av atomer som ger organiska molekyler karakteristiska kemiska egenskaper. Samma grundkolkedja med olika funktionell grupp ger helt andra egenskaper.</p>
<table class="theory-table">
  <tr><th>Klass</th><th>Grupp</th><th>Suffix/prefix</th><th>Exempel</th><th>Kokpunkt</th></tr>
  <tr><td>Alkohol</td><td>\u2013OH</td><td>-ol</td><td>Etanol CH\u2083CH\u2082OH</td><td>78 °C</td></tr>
  <tr><td>Aldehyd</td><td>\u2013CHO</td><td>-al</td><td>Etanal CH\u2083CHO</td><td>20 °C</td></tr>
  <tr><td>Keton</td><td>C=O (mitten)</td><td>-on</td><td>Propanon (aceton)</td><td>56 °C</td></tr>
  <tr><td>Karboxylsyra</td><td>\u2013COOH</td><td>-syra</td><td>\u00c4ttiksyra CH\u2083COOH</td><td>118 °C</td></tr>
  <tr><td>Ester</td><td>\u2013COO\u2013</td><td>-at</td><td>Etylacetat</td><td>77 °C</td></tr>
  <tr><td>Amin</td><td>\u2013NH\u2082</td><td>amin</td><td>Metylamin CH\u2083NH\u2082</td><td>\u22126 °C</td></tr>
  <tr><td>Amid</td><td>\u2013CONH\u2082</td><td>amid</td><td>Acetamid CH\u2083CONH\u2082</td><td>222 °C</td></tr>
  <tr><td>Halogenid</td><td>\u2013X (F,Cl,Br,I)</td><td>halo-</td><td>Klormetan CH\u2083Cl</td><td>\u221224 °C</td></tr>
</table>

<h3>6. Alkoholer</h3>
<p>Alkoholer (\u2013OH) \u00e4r polara och bildar v\u00e4tebindningar \u2013 d\u00e4rf\u00f6r h\u00f6gre kokpunkt \u00e4n j\u00e4mf\u00f6rbara alkaner. Metanol (CH\u2083OH) och etanol (C\u2082H\u2085OH) \u00e4r blandningsbara med vatten i alla proportioner. L\u00e4ngre alkaner blandas d\u00e4remot mindre v\u00e4l.</p>
<p>Alkoholer kan oxideras: prim\u00e4ra (R-CH\u2082OH) → aldehyd → karboxylsyra. Sekund\u00e4ra (R\u2082CHOH) → keton. Terti\u00e4ra oxideras inte l\u00e4tt. Kaliumdikromat (K\u2082Cr\u2082O\u2087) oxiderar alkohol och \u00e4ndrar f\u00e4rg fr\u00e5n gul-orange till gr\u00f6n \u2013 principen bakom blodalkohol-testaren (alkotest).</p>
<p>Esterifiering: Alkohol + karboxylsyra ⇌ ester + vatten (med syrakatalys, \u00e5terflöde). Omv\u00e4ndningen kallas hydrolys (eller f\u00f6rs\u00e5pning med bas).</p>

<h3>7. Karboxylsyror och estrar</h3>
<p>Karboxylsyror (\u2013COOH) \u00e4r svaga syror. Kortkedjiga \u00e4r bl\u00e5ndningsbara med vatten och luktar starkt: myrsyra (HCOOH, myrstick), \u00e4ttiksyra (CH\u2083COOH, vinäger), sm\u00f6rsyra (C\u2083H\u2087COOH, r\u00e4ncket sm\u00f6r). L\u00e5ngkedjiga \u00e4r fettsy\u00fcror: stearinsyra (C\u2081\u2087H\u2083\u2085COOH, m\u00e4ttad, fast), oljesyra (C\u2081\u2087H\u2083\u2083COOH, 1 dubbelbindning, flytande).</p>
<p>Estrar luktar fruktigt: etylacetat luktar nagellacksborttagare, amylacetat luktar banan. De bildas vid esterifiering och sönderdelas vid hydrolys med syre (syrahydrolys) eller bas (basisk hydrolys = f\u00f6rs\u00e5pning \u2192 tv\u00e5l + glycerol).</p>

<h3>8. Nomenklatur \u2013 IUPAC-systemet</h3>
<p>IUPAC-nomenklaturen ger varje organisk f\u00f6rening ett unikt namn:</p>
<ol>
  <li>Hitta den l\u00e4ngsta kolkedjan med h\u00f6gst prioriterad funktionell grupp \u2013 det \u00e4r stamkedjan (metan, etan, propan, butan, pentan, hexan, heptan, oktan, nonan, dekan).</li>
  <li>Numrera stamkedjan fr\u00e5n det h\u00e5ll som ger lägst nummer till substituenter/funktionell grupp.</li>
  <li>Ange substituenter med prefix (metyl-, etyl-, klor-, brom-, etc.) och position.</li>
  <li>Ange funktionell grupp med suffix (\u2013an, \u2013en, \u2013yn, \u2013ol, \u2013al, \u2013on, -syre, etc.).</li>
</ol>
<p>Exempel: CH\u2083\u2013CH(CH\u2083)\u2013CH\u2082\u2013OH = 2-metylpropan-1-ol. CH\u2083\u2013CO\u2013CH\u2082\u2013CH\u2083 = butan-2-on.</p>

<h3>9. Isomeri</h3>
<p><strong>Konstitutionsisomerer</strong> (strukturisomerer): samma molekylformel, olika bindningsm\u00f6nster. Butan (C\u2084H\u2081\u2080) och isobutan (2-metylpropan) \u00e4r konstitutionsisomerer.</p>
<p><strong>Stereoisomerer</strong>: samma bindnin\u0161ar, olika rumslig ordning. Inkluderar cis/trans-isomerer runt dubbelbindning och spegelbildsisomerer (enantiomerer) runt kirala centra (kolatom med fyra olika substituenter).</p>
<p><strong>Enantiomerer</strong> \u00e4r molekyler som \u00e4r spegelvida men icke-\u00f6verst\u00e4llbara (som v\u00e4nster och h\u00f6ger hand). De har identiska fysikaliska egenskaper utom roteringsriktning f\u00f6r polariserat ljus. I biologin spelar kiralitet stor roll \u2013 bara L-aminosyror f\u00f6rekommer i proteiner; bara D-socker i DNA. Fel enantiomer av ett l\u00e4kemedel kan vara overksam eller skadlig (t.ex. talidomidtragedin).</p>

<h3>10. Sambandet</h3>
<p>Organisk kemi \u00e4r den breddaste grenen av kemin, och dess principer genomsyrar allt levande. Funktionella gruppers reaktivitet \u00e4r f\u00f6rutsägbar: alkoholers oxidation, syrornas jonisering, estrars hydrolys \u2013 alla följer samma mönster oavsett kolkedelns l\u00e4ngd. IUPAC-systemet gör det möjligt att kommunicera exakt om strukturer utan tvetydighet. Stereokemins \u00e4r \u00e4rskilt viktig f\u00f6r l\u00e4kemedel och biokemi \u2013 enzymers aktivitetsst\u00e4lle \u00e4r kiralt k\u00e4nslig och k\u00e4nner igen specifika enantiomerer. Organisk kemi kopplar samman med termokemi (f\u00f6rbr\u00e4nningsv\u00e4rden), j\u00e4mviktsl\u00e4ran (esterifieringsjämvikten) och syra-baskemi (karboxylsyrornas pKa-v\u00e4rden). Det \u00e4r ocks\u00e5 grunden f\u00f6r polymerkemi: polyeten (additionspolymer av eten), nylon (kondensationspolymer) och naturens egna polymerer \u2013 proteiner, kolhydrater, DNA.</p>
"""))

# ══════════════════════════════════════════════════════════════════
# 6. LÖSNINGAR & KONCENTRATION
# ══════════════════════════════════════════════════════════════════
sections.append(("L\u00f6sningar \u0026 koncentration", "\U0001f4a7", """
<h2>\U0001f4a7 L\u00f6sningar &amp; koncentration</h2>
<p class="theory-intro">L\u00f6sningar \u00e4r homogena blandningar d\u00e4r ett \u00e4mne (l\u00f6st \u00e4mne, solut) \u00e4r j\u00e4mnt f\u00f6rdelat i ett annat (\u00e4mnet l\u00f6sningsmedel, solvent) p\u00e5 molekyl\u00e4r niv\u00e5. Koncentration beskriver hur mycket l\u00f6st \u00e4mne som finns i en given m\u00e4ngd l\u00f6sning. Fr\u00e5n laboratoriel analys till l\u00e4kemedelsd\u00e4se och industriella processer \u00e4r exakt koncentrationsm\u00e4tning och -ber\u00e4kning ett centralt verktyg.</p>

<h3>1. L\u00f6sningsprocessen p\u00e5 molekyl\u00e4r niv\u00e5</h3>
<p>N\u00e4r ett \u00e4mne l\u00f6ser sig bryts existerande interaktioner (endoterm) och nya bildas (exoterm). Nettoresultatet (l\u00f6sningsentalpin ΔH_sol) best\u00e4mmer om l\u00f6sningen k\u00e4nns kall (NH\u2084NO\u2083, ΔH_sol = +25 kJ/mol, endoterm \u2013 anv\u00e4nds i ispack) eller varm (NaOH, ΔH_sol = \u221244 kJ/mol, exoterm).</p>
<p>"Lika l\u00f6ser lika" \u00e4r tumregeln: polara l\u00f6sningsmedel (vatten) l\u00f6ser polara \u00e4mnen och jonf\u00f6reningar. Opolara l\u00f6sningsmedel (hexan, bensen) l\u00f6ser opolara \u00e4mnen (fetter, vaxer). Vatten l\u00f6ser NaCl genom att dess polara molekyler attraherar jonerna och bryter gittret; vatten omger varje jon med ett hydratiseringsskal (solvateringsenergi > gitterenergi).</p>
<p>Temperaturens inverkan: F\u00f6r fasta l\u00f6sta \u00e4mnen i vatten \u00f6kar l\u00f6sligheten generellt med temperatur. F\u00f6r gaser minskar l\u00f6sligheten med temperatur (Henrys lag, s\u00e4rskilt relevant f\u00f6r CO\u2082 i drycker och O\u2082 i sj\u00f6vatten).</p>

<h3>2. Koncentrationsm\u00e5tt</h3>
<p><strong>Molar koncentration c (mol/L, M)</strong> \u00e4r den vanligaste enhetens i analytisk kemi: c = n/V. En 1,0 mol/L NaCl-l\u00f6sning inneh\u00e5ller 58,5 g NaCl per liter.</p>
<div class="formula-box">c = n / V          (mol/L)
n = c × V          (mol)
V = n / c          (L)
m = c × V × M      (g)

Enhetsomvandling: mmol/L = µmol/mL = nmol/µL</div>
<p><strong>Massandel (m/m) eller massa/volym (m/v) i procent:</strong> 5 % NaCl (m/v) = 5 g NaCl per 100 mL. Anv\u00e4nds i medicinsk kemi (fysiologisk saltl\u00f6sning = 0,9 % NaCl).</p>
<p><strong>ppm och ppb</strong> (delar per miljon/miljard): anv\u00e4nds f\u00f6r sp\u00e5rm\u00e4ngder. 1 ppm i vatten ≈ 1 mg/L. Dricksvattengr\u00e4nsen f\u00f6r bly (Pb) \u00e4r 10 µg/L = 10 ppb.</p>
<p><strong>Mol\u00e4rbr\u00e5k χ:</strong> χ_A = n_A / n_tot. Anv\u00e4nds i gasblandningsber\u00e4kningar (Raoults lag, Daltons lag).</p>
<p><strong>Molalitet m (mol/kg):</strong> mol l\u00f6st \u00e4mne per kg l\u00f6sningsmedel. Temperaturoberoende, anv\u00e4nds i kryoskopi och ebulioskopi.</p>

<h3>3. Bereda l\u00f6sningar</h3>
<p><strong>Fr\u00e5n fast \u00e4mne:</strong></p>
<ol>
  <li>Ber\u00e4kna massa: m = c × V × M</li>
  <li>V\u00e4g in p\u00e5 analytisk v\u00e5g</li>
  <li>L\u00f6s i ca halva volymen vatten (destillerat)</li>
  <li>H\u00e4ll \u00f6ver i m\u00e4tkolv av \u00f6nskad volym</li>
  <li>Fyll p\u00e5 med vatten exakt till m\u00e4rkstrecket</li>
  <li>Blanda noggrant</li>
</ol>
<p><strong>Fr\u00e5n stockl\u00f6sning (spädning):</strong> Anv\u00e4nd c\u2081V\u2081 = c\u2082V\u2082. Pipettera exakt V\u2081 av stockl\u00f6sningen i m\u00e4tkolven, fyll p\u00e5 till V\u2082.</p>
<div class="formula-box">Sp\u00e4dningsekvation: c\u2081V\u2081 = c\u2082V\u2082

Exempel: Bereda 500 mL av 0,10 mol/L HCl fr\u00e5n 12 mol/L HCl:
V\u2081 = c\u2082V\u2082/c\u2081 = 0,10×500/12 = 4,2 mL
Pipettera 4,2 mL i m\u00e4tkolv, fyll p\u00e5 till 500 mL.

OBS: Alltid syre\u00e4mnet i vattnet (SAV = syra i vatten (häll alltid syran i vattnet)),
aldrig vatten i stark syra (skvättrisk)!</div>

<h3>4. L\u00f6slighet och l\u00f6slighetsprodukten Ksp</h3>
<p>L\u00f6sligheten s (mol/L) \u00e4r den maximala m\u00e4ngd l\u00f6st \u00e4mne per liter l\u00f6sning vid given temperatur. N\u00e4r l\u00f6sningen \u00e4r m\u00e4tttad r\u00e5der jämvikt mellan fast fas och l\u00f6st fas.</p>
<p>F\u00f6r sv\u00e5rl\u00f6sliga salter definieras <strong>l\u00f6slighetsprodukten Ksp</strong>:</p>
<div class="formula-box">AgCl(s) ⇌ Ag\u207a(aq) + Cl\u207b(aq)
Ksp = [Ag\u207a][Cl\u207b] = 1,8×10\u207b¹\u2070 vid 25°C

s = √Ksp = √(1,8×10\u207b¹\u2070) = 1,34×10\u207b\u2075 mol/L

BaSO\u2084: Ksp = 1,1×10\u207b¹\u2070, s = 1,05×10\u207b\u2075 mol/L
CaCO\u2083: Ksp = 3,3×10\u207b\u2079, s = 5,7×10\u207b\u2075 mol/L

Gemensam jon-effekten: L\u00f6sligheten MINSKAR om gemensam jon tillsätts.
[Cl\u207b]=0,10 mol/L \u21d2 [Ag\u207a]=Ksp/0,10=1,8×10\u207b\u2079 mol/L (mkt. l\u00e4gre!)</div>
<p><strong>Reaktionskvoten Q:</strong> Om Q > Ksp \u2192 utfällning sker tills jämvikt. Om Q < Ksp \u2192 inget utfällning. Om Q = Ksp \u2192 m\u00e4ttad l\u00f6sning.</p>

<h3>5. Kolligativa egenskaper</h3>
<p>Kolligativa egenskaper beror enbart p\u00e5 <em>antalet</em> l\u00f6sta partiklar, inte deras identitet. De \u00e4r viktiga f\u00f6r antifrysmedel, osmotiska processer och molmassbest\u00e4mning.</p>
<p><strong>\u00c5ngtrj\u00e4cksänkning (Raoults lag):</strong> p = χ_solv × p°. L\u00f6st \u00e4mne sänker l\u00f6sningsmedlets \u00e5ngtryck proportionellt mot molfraktionen. S\u00e4ltes h\u00e5ller mat fuktig.</p>
<p><strong>Kokpunkts\u00f6kning ΔTb = Kb × m:</strong> Kb(vatten) = 0,512 °C·kg/mol. 1 mol NaCl (= 2 mol partiklar) i 1 kg vatten: ΔTb = 2×0,512 = 1,024°C. Saltat pastakokar f\u00f6r knappt h\u00f6gre T.</p>
<p><strong>Fryspunkts\u00e4nkning ΔTf = Kf × m:</strong> Kf(vatten) = 1,86 °C·kg/mol. Glykol som frostvätska: 50 % l\u00f6sning sänker fryspunkten till ca \u221237°C.</p>
<p><strong>Osmotiskt tryck π = MRT:</strong> R = 0,08206 L·atm/(mol·K). Blodsplasmans osmolaritet ≈ 0,30 mol/L → π ≈ 7,3 atm. Osmotiskt tryck driver vatten \u00f6ver semipermeabla membran \u2013 grunden f\u00f6r cellens v\u00e4tskebalans, njurarna och avsaltningsanlaggeringar (omv\u00e4nd osmos).</p>

<h3>6. Titrering och kvantitativ analys</h3>
<p>Titrering (f\u00f6re\u00f6vet behandlat i syra-basavsnittet) anv\u00e4nds ocks\u00e5 f\u00f6r redox-reaktioner (permanganattitrering), utfällningar (argentometri) och komplexometringar (EDTA). Principen \u00e4r densamma: vid ekvivalenspunkten \u00e4r molens av reaktant precis b\u00e5da \u00e4ren l\u00e4gsta.</p>

<h3>7. Beer-Lamberts lag och spektrofotometri</h3>
<p>Spektrofotometri m\u00e4ter hur mycket ljus en l\u00f6sning absorberar vid en viss v\u00e5gl\u00e4ngd. Beer-Lamberts lag:</p>
<div class="formula-box">A = ε × c × l

A = absorbans (dimensionsl\u00f6s)
ε = mol\u00e4r absorptionskoefficient (L/(mol·cm))
c = koncentration (mol/L)
l = l\u00e4ngd ljusv\u00e4g (cm)

A = log(I\u2080/I) = log(1/T) d\u00e4r T = transmittans

Anv\u00e4nds f\u00f6r: proteinkoncentration, DNA-m\u00e4tning,
bl\u00e5/Cu\u00b2\u207a (625 nm), permanganat (525 nm)</div>
<p>Standard-kurva: Mät absorbansen f\u00f6r k\u00e4nda koncentrationer → rit f\u00f6r A vs c → lineär. Avsläs okänd koncentration fr\u00e5n linjen. Beer-Lamberts lag gäller vid låga koncentrationer (A < 1 f\u00f6r b\u00e4sta precision).</p>

<h3>8. Sambandet</h3>
<p>L\u00f6sningskemi \u00e4r det praktiska ramverk som kopplar samman laboratoriet med teorin. Molkoncentrationen \u00e4r det spr\u00e5k p\u00e5 vilket alla kvantitativa kemiska ber\u00e4kningar uttrycks. L\u00f6slighetsregler och Ksp f\u00f6rklarar varf\u00f6r vissa f\u00f6reningar f\u00e4lls ut och andra stannar kvar i l\u00f6sning \u2013 avgörande f\u00f6r vattenrening, geologiska processer (stalaktitbildning) och njurstenar (kristallisering av kalciumoxalat). Kolligativa egenskaper f\u00f6rklarar biologiska processer fr\u00e5n celltrions osmotiska balans till fiskarnas kr\u00e4nskyddsmed. Beer-Lambert-lagen \u00e4r basen f\u00f6r all spektrofotometrisk analys i kemilabb och klinisk kemi.</p>
"""))

# ══════════════════════════════════════════════════════════════════
# 7. TERMOKEMI & ENERGI
# ══════════════════════════════════════════════════════════════════
sections.append(("Termokemi \u0026 energi", "\U0001f321\ufe0f", """
<h2>\U0001f321\ufe0f Termokemi &amp; energi</h2>
<p class="theory-intro">All kemisk reaktion inneb\u00e4r energi\u00f6verf\u00f6ring. N\u00e4r br\u00e4nsle br\u00e4nns frigs energi som v\u00e4rmer hus och driver motorer. N\u00e4r fotosyntes sker lagras solen energi i kemiska bindningar. Termokemi studerar dessa energiut\u00f6ver: hur mycket friggs eller absorberas, varf\u00f6r reaktioner sker spontant, och hur man kan f\u00f6ruts\u00e4ga om en reaktion \u00e4r m\u00f6jlig \u00f6verhuvudtaget.</p>

<h3>1. Grundbegrepp: system, omgivning, v\u00e4rme och arbete</h3>
<p>I termokemi definieras <strong>systemet</strong> som det vi studerar (reaktanterna och produkterna) och <strong>omgivningen</strong> som resten av universum. Energi kan \u00f6verf\u00f6ras som <strong>v\u00e4rme (q)</strong> eller som <strong>arbete (w)</strong>. Termodynamikens f\u00f6rsta lag: energi \u00e4r bevarad: ΔU = q + w.</p>
<p>I kemilaboratoriet utf\u00f6rs de flesta reaktioner vid konstant tryck (atmosf\u00e4rtryck). D\u00e5 \u00e4r den relevanta energikvanditeten <strong>entalpi H</strong>: ΔH = q_p (v\u00e4rme vid konstant tryck). ΔH < 0 = exoterm (v\u00e4rme frigs till omgivningen). ΔH > 0 = endoterm (v\u00e4rme absorberas fr\u00e5n omgivningen).</p>

<h3>2. Kalorimetri</h3>
<p>V\u00e4rme m\u00e4ts med en <strong>kalorimeter</strong>. Den enklaste (kaffekoppen) m\u00e4ter v\u00e4rme\u00f6verf\u00f6ringen vid konstant tryck i l\u00f6sning. En bomb-kalorimeter m\u00e4ter vid konstant volym (ΔU, f\u00f6rbr\u00e4nningsv\u00e4rden).</p>
<div class="formula-box">q = m × c × ΔT

q = v\u00e4rme (J)
m = massa l\u00f6sning (g)
c = specifik v\u00e4rmekapacitet (J/(g·K))
  c(vatten) = 4,18 J/(g·K)
ΔT = temperatur\u00e4ndring (°C eller K)

Neutralisering: 50 mL 1M HCl + 50 mL 1M NaOH
m=100 g, ΔT=6,85°C
q=100×4,18×6,85=2863 J
n(rxn)=0,050 mol
ΔH_neutr=2863/0,050=57260 J/mol≈57,3 kJ/mol</div>

<h3>3. Standard\u00f6enthalpier och Hess lag</h3>
<p><strong>Standardbildningsentalpin ΔH°f</strong> \u00e4r entalpif\u00f6r\u00e4ndringen n\u00e4r 1 mol av ett \u00e4mne bildas fr\u00e5n sina element i standardtillst\u00e5nd (25°C, 1 bar). Per definition \u00e4r ΔH°f = 0 f\u00f6r alla grundämnen i sitt standardtillst\u00e5nd (H\u2082(g), O\u2082(g), C(grafit), Na(s), osv.).</p>
<table class="theory-table">
  <tr><th>\u00c4mne</th><th>ΔH°f (kJ/mol)</th></tr>
  <tr><td>H\u2082O(l)</td><td>\u2212285,8</td></tr>
  <tr><td>H\u2082O(g)</td><td>\u2212241,8</td></tr>
  <tr><td>CO\u2082(g)</td><td>\u2212393,5</td></tr>
  <tr><td>NH\u2083(g)</td><td>\u221246,1</td></tr>
  <tr><td>NO(g)</td><td>+90,3</td></tr>
  <tr><td>C\u2082H\u2085OH(l)</td><td>\u2212277,7</td></tr>
</table>
<p><strong>Hess lag:</strong> ΔH f\u00f6r en reaktion \u00e4r summan av ΔH f\u00f6r stegen som \u00f6verf\u00f6r reaktanter till produkter, oavsett v\u00e4g. Entalpi \u00e4r en tillst\u00e5ndsfunktion \u2013 beror bara p\u00e5 start- och slutl\u00e4ge, inte p\u00e5 v\u00e4gen.</p>
<div class="formula-box">ΔH°rxn = Σ ΔH°f(produkter) \u2212 Σ ΔH°f(reaktanter)

Exempel: CH\u2084(g) + 2O\u2082(g) → CO\u2082(g) + 2H\u2082O(l)
ΔH°rxn = [ΔH°f(CO\u2082) + 2ΔH°f(H\u2082O)] \u2212 [ΔH°f(CH\u2084) + 0]
= [\u2212393,5 + 2×(\u2212285,8)] \u2212 [\u221274,8]
= (\u2212393,5 \u2212 571,6) \u2212 (\u221274,8)
= \u2212965,1 + 74,8 = \u2212890,3 kJ/mol</div>
<p>Hess lag anv\u00e4nds n\u00e4r direktm\u00e4tning av ΔH \u00e4r sv\u00e5r. Bildningsentalpier av alla \u00e4mnen \u00e4r tabellerade och ger ΔH f\u00f6r godtyckliga reaktioner.</p>

<h3>4. Bindningsenergier</h3>
<p>En alternativ metod att ber\u00e4kna ΔH \u00e4r via bindningsenergier (BE). Att bryta en bindning \u00e4r endotermt; att bilda en bindning \u00e4r exotermt.</p>
<div class="formula-box">ΔH ≈ Σ BE(brutna bindningar) \u2212 Σ BE(bildade bindningar)

Typiska BE (kJ/mol):
C\u2013H: 413   O=O: 498   C=O: 799
H\u2013H: 436   O\u2013H: 463   C\u2013C: 346
N≡N: 945   C=C: 614   H\u2013Cl: 431

Exempel: H\u2082 + Cl\u2082 → 2HCl
ΔH = [BE(H\u2013H) + BE(Cl\u2013Cl)] \u2212 [2×BE(H\u2013Cl)]
= [436 + 243] \u2212 [2×431]
= 679 \u2212 862 = \u2212183 kJ</div>
<p>OBS: BE \u00e4r medelv\u00e4rden och ger approximativa ΔH; bildningsentralpim\u00e9todos ger mer exakta v\u00e4rden.</p>

<h3>5. Entropi och spontanitet</h3>
<p><strong>Entropi S</strong> \u00e4r ett m\u00e5tt p\u00e5 oordning/spridning av energi och materia i ett system. Termodynamikens andra lag: den totala entropin hos universum (system + omgivning) \u00f6kar alltid vid spontana processer (ΔS_univ > 0).</p>
<p>Faktorer som \u00f6kar entropin:</p>
<ul>
  <li>Fast → flytande → gas (s < l < g i entropi)</li>
  <li>L\u00f6sning i l\u00f6sningsmedel (blandning \u00f6kar disorder)</li>
  <li>Fler gasmolekyler bildas (N\u2082 + 3H\u2082 → 2NH\u2083: ΔS < 0 d\u00e5 4 mol gas → 2 mol)</li>
  <li>H\u00f6gre temperatur (mer r\u00f6relseenergi)</li>
  <li>L\u00e4ngre/komplexa molekyler</li>
</ul>

<h3>6. Gibbs fria energi ΔG</h3>
<p>Gibbs fria energi kombinerar entalpi och entropi till ett enda kriterium f\u00f6r spontanitet vid konstant T och p:</p>
<div class="formula-box">ΔG = ΔH \u2212 TΔS

ΔG &lt; 0: Spontan reaktion
ΔG &gt; 0: Icke-spontan (omv\u00e4nda reaktionen \u00e4r spontan)
ΔG = 0: Jämvikt

Temperaturberoendet:
        ΔH &lt; 0   ΔH &gt; 0
ΔS &gt; 0  Alltid sp.  Sp. vid h\u00f6g T
ΔS &lt; 0  Sp. vid l\u00e5g T  Aldrig sp.

Standard: ΔG° = ΔH° \u2212 TΔS° = \u2212RT ln K</div>
<p>Sambandet ΔG° = \u2212RT ln K \u00e4r enormt viktigt: det kopplar termodynamiken (ΔG°) till jämviktskonstanten K. En reaktion med ΔG° = \u221240 kJ/mol har K ≈ 10⁷ vid 25°C \u2013 praktiskt fullst\u00e4ndig. En med ΔG° = +40 kJ/mol har K ≈ 10\u207b⁷ \u2013 praktiskt inget sker.</p>

<h3>7. Fas\u00f6verg\u00e5ngar och l\u00f6sningsentalpi</h3>
<p>Fas\u00f6verg\u00e5ngar kr\u00e4ver energi f\u00f6r att bryta intermolekylära bindningar:</p>
<table class="theory-table">
  <tr><th>Process</th><th>Energi</th><th>Exempel</th></tr>
  <tr><td>Sm\u00e4ltning (fusion)</td><td>ΔH_fus > 0</td><td>Is: 6,01 kJ/mol</td></tr>
  <tr><td>Stelning</td><td>\u2212ΔH_fus &lt; 0</td><td>\u22126,01 kJ/mol</td></tr>
  <tr><td>\u00c5ngbildning (vaporisation)</td><td>ΔH_vap > 0</td><td>Vatten: 40,7 kJ/mol</td></tr>
  <tr><td>Kondensation</td><td>\u2212ΔH_vap &lt; 0</td><td>\u221240,7 kJ/mol</td></tr>
  <tr><td>Sublimation</td><td>ΔH_sub > 0</td><td>Is → \u00e5nga</td></tr>
</table>
<p>Vattnets h\u00f6ga ΔH_vap (40,7 kJ/mol) \u00e4r en direkt f\u00f6ljd av starka v\u00e4tebindningar \u2013 kr\u00e4ver mycket energi att brytas. Det \u00e4r varf\u00f6r svettning k\u00e4ler kroppen effektivt och varf\u00f6r k\u00fcstklimaten \u00e4r mildare (havet lagrar och avger v\u00e4rme via \u00e5ng/kondensation).</p>

<h3>8. Reaktionskinetik \u2013 hastighet och aktiveringsenergi</h3>
<p>Termodynamik s\u00e4ger om en reaktion <em>kan</em> ske (ΔG < 0); kinetik s\u00e4ger hur <em>snabbt</em> den sker. Reaktionshastigheten beror p\u00e5 kollisionsfrekvens och kollisionsenergis att \u00f6verstiga <strong>aktiveringsenergin E_a</strong>.</p>
<p>Arrhenius ekvation: k = A × e^(\u2212Ea/RT). En \u00f6kning av T med 10°C ungef\u00e4r f\u00f6rdubblar reaktionshastigheten (vid Ea ≈ 50 kJ/mol). Katalysatorer sänker E_a utan att p\u00e5verka ΔH eller K.</p>

<h3>9. Sambandet</h3>
<p>Termokemi binder ihop alla kemins grenar. ΔH-v\u00e4rden fr\u00e5n kalorimetri anv\u00e4nds direkt i ingenjörs- och energiber\u00e4kningar. Hess lag g\u00f6r det m\u00f6jligt att ber\u00e4kna ΔH f\u00f6r reaktioner som \u00e4r praktiskt sv\u00e5ra att m\u00e4ta direkt. Entropin f\u00f6rklarar varf\u00f6r vissa processer sker spontant (\u00e4ven om ΔH > 0 \u2013 t.ex. l\u00f6sning av NaCl \u00e4r n\u00e4stan termoneut\u00e5l men sker pga. entropi\u00f6kning). Gibbs fria energi \u00e4r den centrala storheten som kopplar entalpi, entropi, temperatur och jämviktskonstanter i ett sammanhängande system. F\u00f6rst\u00e5elsen f\u00f6r aktiveringsenergi och kinetik f\u00f6rklarar varf\u00f6r bensin inte self-ignites vid rumstemperatur (\u00e4ven om ΔG < 0 f\u00f6r f\u00f6rbr\u00e4nning).</p>
"""))

# ══════════════════════════════════════════════════════════════════
# 8. LABORATIV KEMI & SÄKERHET
# ══════════════════════════════════════════════════════════════════
sections.append(("Laborativ kemi \u0026 s\u00e4kerhet", "\U0001f52c", """
<h2>\U0001f52c Laborativ kemi &amp; s\u00e4kerhet</h2>
<p class="theory-intro">Laboratoriet \u00e4r platsen d\u00e4r kemisk teori m\u00f6ter verkligheten. H\u00e4r utf\u00f6rs s\u00e4rkilt kvantitativa analyser, synteser av nya \u00e4mnen, och unders\u00f6kningar av reaktionsmekanismer. Laborativ kompetens innef\u00e5r tre samverkande delar: s\u00e4kerhet (f\u00f6rhindra skador), f\u00e4rdighet (korrekt anv\u00e4ndning av instrument och tekniker) och vetenskapligt t\u00e4nkande (planera, genomf\u00f6ra, analysera, rapportera). I Sverige regleras kemilaboratoriet av Arbetsmilj\u00f6lagen, REACH-f\u00f6rordningen och GHS-systemet.</p>

<h3>1. GHS \u2013 globalt harmoniserat system f\u00f6r klassificering av kemikalier</h3>
<p>GHS (Globally Harmonized System) \u00e4r ett internationellt system f\u00f6r att klassificera och m\u00e4rka kemikalier enhetligt. Varje GHS-piktogram \u00e4r en vit diamantform med r\u00f6d kant och ett svart symbol i mitten.</p>
<table class="theory-table">
  <tr><th>Piktogram</th><th>Faroklass</th><th>Exempel</th></tr>
  <tr><td>Flamma</td><td>Brandfarligt, sj\u00e4lvantendbara, pyrof\u00f6ra</td><td>Etanol, aceton, magnesium</td></tr>
  <tr><td>Utf\u00e4lld flamma</td><td>Oxiderande</td><td>H\u2082O\u2082, KMnO\u2084, HNO\u2083(konc.)</td></tr>
  <tr><td>Spr\u00e4ngning</td><td>Explosivt</td><td>TNT, aceton peroxid</td></tr>
  <tr><td>Gasflaska</td><td>Gas under tryck</td><td>Kvave, CO\u2082-flaskor</td></tr>
  <tr><td>D\u00f6dskalle</td><td>Akut toxicitet (h\u00f6g)</td><td>HCN, As\u2082O\u2083</td></tr>
  <tr><td>Utropstecken</td><td>Akut toxicitet (l\u00e5gre), irriterande</td><td>NaOH (spädd), HCl (utsp.)</td></tr>
  <tr><td>\u00c4tande material</td><td>Frätsam</td><td>H\u2082SO\u2084, NaOH, HF</td></tr>
  <tr><td>H\u00e4lsofaror</td><td>Allvarliga h\u00e4lsofaror, CMR-\u00e4mnen</td><td>Bensen (cancerframkallande)</td></tr>
  <tr><td>Milj\u00f6</td><td>Milj\u00f6farligt</td><td>Kvicksilver, tributyltin</td></tr>
</table>
<p>Varje kemikalie har ett <strong>s\u00e4kerhetsdatablad (SDS)</strong> med 16 sektioner: kemisk identitet, faror, f\u00f6rsiktighetsh\u00e5ntering, f\u00f6rsta hj\u00e4lpen, brandsläckningsmedel, l\u00e4ckage, f\u00f6rvaring, personlig skyddsutrustning, fysikaliska egenskaper, stabilitet, toxikologi, ekologi och avfallshantering.</p>

<h3>2. Personlig skyddsutrustning (PSU)</h3>
<p><strong>Skyddsglasögon</strong> \u00e4r obligatoriska n\u00e4r kemikalier hanteras, \u00e4ven i sug. \u00d6gonfl\u00f6djning i 15 minuter (sk\u00f6ljstation) vid st\u00e4nk av fr\u00e4tande \u00e4mnen, oavsett hur smärtsamt det verkar \u2013 underl\u00e5tenhet leder till permanenta skador.</p>
<p><strong>Skyddsrock</strong> sk\u00fcdar h\u00e5r, huden och kl\u00e4der. Syntetfibrer br\u00e4nner och smälter vid kontakt med l\u00e5ga; bomull ger b\u00e4ttre skydd. Aldrig labbar i kortärmat.</p>
<p><strong>Handskar:</strong> Nitrilgummi f\u00f6r de flesta kemikalier (s\u00e4rskilty syror, baser, organiska l\u00f6sningsmedel). Latex (allergirisk). Neoprene f\u00f6r st\u00e4rkare l\u00f6sningsmedel. OBS: handskar skyddar mot st\u00e4nk men inte l\u00e5ngtids-permeation av l\u00f6sningsmedel.</p>
<p><strong>Drag (fr\u00e5nluftsk\u00e5pa):</strong> All hantering av flyktiga, giftiga eller luktande \u00e4mnen sker i drag. Frontglaslukas \u00e4r sänkt till 10\u201315 cm fr\u00e5n arbetsytan. Aldrig spjäll stängt.</p>

<h3>3. Viktiga laborativa tekniker</h3>
<p><strong>V\u00e4gning:</strong> Analytisk v\u00e5g (0,0001 g noggrannhet) anv\u00e4nds f\u00f6r k\u00e4nsliga m\u00e4tningar. Tara f\u00f6re v\u00e4gning. Undvik statisk elektricitet (plastspatel). V\u00e4g inte direktinneh\u00e5ll p\u00e5 vaggar utan ask/b\u00e4gare.</p>
<p><strong>M\u00e4tning av volym:</strong></p>
<ul>
  <li><strong>M\u00e4tkolv:</strong> exakt volym (±0,1–0,3 mL beroende p\u00e5 storlek). Anv\u00e4nds f\u00f6r att bereda l\u00f6sningar av exakt koncentration. Avläses vid meniskens nedre kant i \u00f6gonh\u00f6jd.</li>
  <li><strong>Byrett:</strong> f\u00f6r titrering, avl\u00e4ses med 0,01 mL. Fyll ny byrett, skölj med titrant, st\u00e4ll menisk p\u00e5 0,00. T\u00f6m l\u00e5ngsamt n\u00e4r n\u00e4ra ekvivalenspunkten.</li>
  <li><strong>Pipett:</strong> f\u00f6r exakt volym\u00f6verf\u00f6ring. Sk\u00f6lj med l\u00f6sningen, fyll med pumpkolv eller pipettgummi (aldrig muntill!). S\u00e4tt fingret p\u00e5 \u00f6ppningen f\u00f6r att reglera fl\u00f6det.</li>
  <li><strong>M\u00e4tcylinder:</strong> grov m\u00e4tning (±1 mL).</li>
</ul>
<p><strong>F\u00f6rs\u00e4kra (uppv\u00e4rmning):</strong> Bunsen-br\u00e4nnare, v\u00e4rmeplt (ingen l\u00e5ga), v\u00e4ttenbad (j\u00e4mn temperatur). Anv\u00e4nd kolbe med kokkroppar vid uppv\u00e4rmning \u2013 undviker st\u00f6tkokning. Vr\u00e4ngt glas mot v\u00e4rmek\u00e4lla.</p>
<p><strong>Centrifugering:</strong> separerar f\u00e4llning fr\u00e5n l\u00f6sning. Balansera med f\u00f6rr\u00f6r av lika massa p\u00e5 motst\u00e5ende sidor.</p>
<p><strong>Filtrering:</strong> Vakuumfiltrering (Büchner-tratt) f\u00f6r snabb separation. Gravitation\u00e4rt (veckfilterpapper i tratt) f\u00f6r f\u00e4llningsanalys.</p>
<p><strong>Destillation:</strong> separerar \u00e4mnen efter kokpunkt. Enkel destillation f\u00f6r stora skillnader. Fraktionerad (kolonn) f\u00f6r n\u00e4ra kokpunkter (etanol/vatten: 78/100°C).</p>
<p><strong>Kromatografi:</strong> TLC (tunnskiktskromatografi) f\u00f6r snabb identifiering av organiska \u00e4mnen. Rf = avst\u00e5nd substansen vandrat / avst\u00e5nd l\u00f6sningsfront.</p>

<h3>4. pH-m\u00e4tning</h3>
<p><strong>pH-meter</strong> m\u00e4ter potentialskillnaden \u00f6ver en glasmembranelektrod som \u00e4r selektiv f\u00f6r H\u207a-joner. Kalibrering med buffertl\u00f6sningar (pH 4, 7, 10) f\u00f6re anv\u00e4ndning. Noggrannhet ±0,01 pH. Sköljis elektroden med destillerat vatten och t\u00f6rkas f\u00f6rsiktigt. F\u00f6rvara i KCl-l\u00f6sning, aldrig torrt.</p>
<p><strong>Indikatorpapper</strong> (litmus, universalindikator) ger grov uppskattning (±1 pH). Anv\u00e4ndbart f\u00f6r f\u00e4ltprov eller n\u00e4r h\u00f6g noggrannhet inte kr\u00e4vs.</p>

<h3>5. Felk\u00e4llor och osäkerhet</h3>
<p><strong>Systematiska fel</strong> p\u00e5verkar alla m\u00e4tningar i samma riktning: felkalibrerad v\u00e5g, bubba i byretten, f\u00e4rg\u00e4ndring missad vid titrering. Kan minskas med noggrant kalibrering och standardisering.</p>
<p><strong>Slumpm\u00e4ssiga fel</strong> varierar slumpm\u00e4ssigt: l\u00e4sningsl\u00f6sfel, temperaturfluktuationer. Minskas med upprepade m\u00e4tningar och statistisk analys (medelvärde, standardavvikelse).</p>
<p><strong>Rimlighetskontroll:</strong> Svarar experimentresultaten p\u00e5 den r\u00e4tta storleksordningen? \u00c4r utbytet > 100 % (omöjligt, n\u00e5got \u00e4r fel)? Stämmer mätv\u00e4rdet mot tabellv\u00e4rdet inom rimlig osäkerhet?</p>
<table class="theory-table">
  <tr><th>Instrument</th><th>Noggrannhet</th><th>Anv\u00e4ndning</th></tr>
  <tr><td>Analytisk v\u00e5g</td><td>±0,0001 g</td><td>Exakt v\u00e4gning av reagenser</td></tr>
  <tr><td>M\u00e4tkolv 100 mL</td><td>±0,1 mL</td><td>Exakt l\u00f6sningsberedning</td></tr>
  <tr><td>Byrett 50 mL</td><td>±0,05 mL</td><td>Titrering</td></tr>
  <tr><td>Pipett 25 mL</td><td>±0,04 mL</td><td>Exakt volym\u00f6verf\u00f6ring</td></tr>
  <tr><td>M\u00e4tcylinder 50 mL</td><td>±0,5 mL</td><td>Ungef\u00e4rlig m\u00e4tning</td></tr>
  <tr><td>pH-meter</td><td>±0,01 pH</td><td>pH-m\u00e4tning</td></tr>
</table>

<h3>6. Avfallshantering</h3>
<p>Kemikalieav\u00e4ll ska s\u00f6rteras efter typ och aldrig h\u00e4llas i avloppet (lagstiftning, miljöskada). Typiska kategorier:</p>
<ul>
  <li>Halogenerade organiska l\u00f6sningsmedel (kloroform, DCM): separat k\u00e4rl</li>
  <li>Icke-halogenerade organiska (etanol, aceton): separat k\u00e4rl</li>
  <li>Sura l\u00f6sningar (pH &lt; 6): neutralisera och avlopp eller separat uppsamling</li>
  <li>Basiska l\u00f6sningar (pH &gt; 8): neutralisera</li>
  <li>Tungmetaller (Pb, Hg, Cd, Cr): specialhantering</li>
  <li>Cyanidf\u00f6reningar: extremt giftigt, speciell destruktion</li>
</ul>

<h3>7. Labrapportens struktur</h3>
<p>En vetenskaplig rapport b\u00f6r f\u00f6lja en standardstruktur som g\u00f6r resultaten reproducerbara och granskningsbara:</p>
<p><strong>Syfte/Hypotes:</strong> Vad ska unders\u00f6kas? Vilken hypotes testas? Ange förväntat resultat och dess motivering.</p>
<p><strong>Bakgrund/Teori:</strong> Relevant kemi. Formler. Litteraturv\u00e4rden. Reaktionsscheman.</p>
<p><strong>Material och metod:</strong> Lista \u00f6ver kemikalier (CAS-nr, klass, GHS), utrustning, detaljerat utf\u00f6rande. Tillr\u00e4ckligt detaljerat f\u00f6r att n\u00e5gon annan ska kunna upprepa experimentet.</p>
<p><strong>Resultat:</strong> R\u00e5data i tabeller, utf\u00f6rda ber\u00e4kningar (visa ekvationer), grafer (axlar, enheter, titel). Ingen tolkning h\u00e4r.</p>
<p><strong>Diskussion:</strong> Tolka resultaten. Jämf\u00f6r med teoriv\u00e4rden/litteratur. Analysera felk\u00e4llor och deras p\u00e5verkan. F\u00f6rbättringsf\u00f6rslag.</p>
<p><strong>Slutsats:</strong> Svarar direkt p\u00e5 syftet. Kort och koncist. Dra slutsatser som st\u00f6ds av data.</p>

<h3>8. Sambandet</h3>
<p>Laborativ kemi \u00e4r direkt till\u00e4mpning av all kemisk teori. Titrering tillämpar syra-baskemi och st\u00f6kiometri. Kalorimetri m\u00e4ter termokemiska storheter. Spektrofotometri till\u00e4mpar Beer-Lamberts lag och l\u00f6sningskemi. Krist\u00e4llisering och utfällning tillämpar l\u00f6slighetsregler och Ksp. S\u00e4kerheten \u00e4r inte en b\u00f6rda utan en integrerad del av god laborativ praxis \u2013 GHS-systemet \u00e4r precis ett verktyg f\u00f6r att kommunicera kemisk kunskap om faror. Noggrannhet i labbet, fr\u00e5n kalibrering till avsläsning och avfallshantering, r\u00e4knas lika mycket som teorin bakom. Utan bra data kan ingen slutsats dras. Den vetenskapliga metoden \u2013 observera, hypotisera, experimentera, analysera, dra slutsatser \u2013 \u00e4r det k\u00e4rna som g\u00f6r kemi till en naturvetenskap.</p>
"""))

print(f"Sections written: {len(sections)}")
import re
for s in sections:
    words = len(re.findall(r'\w+', s[2]))
    print(f"  {s[0]}: ~{words} words")
