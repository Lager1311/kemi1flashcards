# -*- coding: utf-8 -*-
"""
Improve theory sections with better step-by-step build-up and causal reasoning.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# ─── Materia & faser: add better step-by-step intro ───────────────────────
OLD_MATERIA_INTRO = """<h2>🧊 Materia, ämnen &amp; faser</h2>
<p class="theory-intro">All materia runt omkring oss – från luften vi andas till berget vi klättrar på – kan beskrivas utifrån vad det är uppbyggt av och vilket tillstånd det befinner sig i. Kemi handlar om att förstå materians beståndsdelar, hur de är ordnade och hur de kan omvandlas.</p>

<h3>1. Atomer och grundämnen</h3>
<p>All materia är uppbyggd av <strong>atomer</strong>. Det finns mer än 100 olika sorters atomer – dessa kallas <strong>grundämnen</strong>. Atomer är extremt små; ungefär 8 000 000 atomer i rad motsvarar bredden av ett hårstrå.</p>"""

NEW_MATERIA_INTRO = """<h2>🧊 Materia, ämnen &amp; faser</h2>
<p class="theory-intro">All materia runt omkring oss – luften vi andas, vattnet vi dricker, berget vi klättrar på – är uppbyggd av atomer. Hur atomerna är sammansatta och arrangerade avgör <em>allt</em>: om ämnet är fast, flytande eller gas; om det leder ström; om det löser sig i vatten; om det brinner. Kemin börjar med att klassificera materia, fortsätter med att förstå varför ämnen beter sig som de gör, och kulminerar i att förutsäga och kontrollera omvandlingar.</p>

<h3>1. Atomer och grundämnen – det minsta</h3>
<p>All materia är uppbyggd av <strong>atomer</strong> – de minsta enheter av ett ämne som behåller ämnets kemiska egenskaper. Det finns 118 kända grundämnen, var och ett bestämt av antalet protoner i kärnan. Atomer är extremt små; ungefär 8 miljoner atomer sida vid sida ryms på en millimeter. Det är ändå dessa osynliga partiklar som avgör om ett ämne är guld eller bly, salt eller socker, syre eller kvävgas.</p>"""

if OLD_MATERIA_INTRO in content:
    content = content.replace(OLD_MATERIA_INTRO, NEW_MATERIA_INTRO)
    print("✓ Improved Materia & faser intro")
else:
    print("✗ Materia intro NOT found")

# ─── Materia & faser: improve aggregation states with WHY explanation ─────
OLD_AGG = """<h3>4. Aggregationstillstånd</h3>
<p>Materia förekommer i tre vanliga <strong>aggregationstillstånd</strong> (faser):</p>
<ul>
  <li><strong>Fast (s)</strong> – från latinets <em>solidus</em>. Partiklarna sitter tätt och vibrerar på plats. Bestämd form och volym.</li>
  <li><strong>Flytande (l)</strong> – från latinets <em>liquidus</em>. Partiklarna rör sig men håller ihop. Bestämd volym men antar behållarens form.</li>
  <li><strong>Gas (g)</strong> – Partiklarna rör sig fritt och snabbt. Varken bestämd form eller volym.</li>
</ul>
<p>Det finns även ett fjärde tillstånd: <strong>plasma</strong> – joniserad gas vid extremt hög temperatur (t.ex. i solen och blixtar).</p>
<p><em>Temperatur och rörelse:</em> Ju högre temperatur, desto snabbare rör sig partiklarna. Lägre temperatur → långsammare rörelse.</p>"""

NEW_AGG = """<h3>4. Aggregationstillstånd – hur rörelseenergi styr faserna</h3>
<p>Ämnen förekommer i olika <strong>aggregationstillstånd</strong> beroende på <em>rörelseenergin</em> hos partiklarna i förhållande till styrkorna som håller ihop dem. Temperatur är ett mått på genomsnittlig rörelseenergi – ju högre temperatur, desto rörligare partiklar, och desto mer kan de motstå de attraktiva krafterna.</p>
<ul>
  <li><strong>Fast tillstånd (s)</strong> – rörelseenergin är <em>lägre</em> än de intermolekylära krafterna. Partiklarna kan bara vibrera på plats i ett ordnat gitter. Bestämd form och volym. Exempel: is, salt, metaller.</li>
  <li><strong>Flytande tillstånd (l)</strong> – rörelseenergin är <em>jämförbar</em> med krafterna; partiklarna kan röra sig relativt varandra men lämnar inte varandra. Bestämd volym men ingen bestämd form – antar behållarens form. Exempel: vatten vid 20 °C, smält järn.</li>
  <li><strong>Gasformigt tillstånd (g)</strong> – rörelseenergin <em>övervinner</em> krafterna; partiklarna rör sig fritt och snabbt i alla riktningar. Varken bestämd form eller volym – expanderar för att fylla allt tillgängligt utrymme. Exempel: ånga, koldioxid, luft.</li>
</ul>
<p>Det finns även ett fjärde tillstånd: <strong>plasma</strong> – vid extremt hög temperatur joniseras gasen (elektroner slits loss). Förekommer i solen, blixtar och fusionsreaktorer.</p>
<p><strong>Varför är detta viktigt?</strong> Fasövergångar kräver energi (smältning, kokning) eller frigör energi (stelning, kondensation). Vattnets höga kokpunkt (100 °C jämfört med H₂S:s −60 °C) beror på starka vätebindningar – det krävs mer energi för att bryta dem, och det är det som ger vatten sina unika egenskaper som liv-stödjande lösningsmedel.</p>"""

if OLD_AGG in content:
    content = content.replace(OLD_AGG, NEW_AGG)
    print("✓ Improved aggregationstillstånd section")
else:
    print("✗ Aggregationstillstånd NOT found")

# ─── Kemisk bindning: improve intro with explicit causal chain ────────────
OLD_KB_INTRO = """<h2>🔗 Kemisk bindning</h2>
<p class="theory-intro">Atomer existerar sällan ensamma. Kraften som håller dem samman – kemisk bindning – är elektrostatisk till sin natur: negativt laddade elektroner attraheras av positivt laddade atomkärnor. Beroende på hur elektroner fördelas uppstår olika bindningstyper med dramatiskt olika egenskaper. Förståelsen för bindning förklarar varför salt smälter vid 801 °C medan is smälter vid 0 °C, varför metaller leder elektricitet och varför DNA kan kopieras utan att falla sönder.</p>"""

NEW_KB_INTRO = """<h2>🔗 Kemisk bindning</h2>
<p class="theory-intro">Atomer är sällan ensamma – de binder till varandra och bildar molekyler, kristaller och material. Kraften bakom all kemisk bindning är elektrostatisk: negativt laddade elektroner attraheras av positivt laddade atomkärnor. Det avgörande är <em>hur</em> elektronerna fördelas. Det beror på atomernas <em>elektronegativitet</em> (dragningskraft på elektroner). Elektronegativiteten beror på hur många protoner kärnan har och hur nära valenselektronerna sitter – det vill säga var i periodiska systemet atomen befinner sig. Bindningstypen → molekylens geometri (VSEPR) → molekylens polaritet → intermolekylära krafter → smält- och kokpunkter, löslighet, elektrisk ledning. Hela kedjan börjar med atomens position i periodiska systemet.</p>"""

if OLD_KB_INTRO in content:
    content = content.replace(OLD_KB_INTRO, NEW_KB_INTRO)
    print("✓ Improved Kemisk bindning intro")
else:
    print("✗ KB intro NOT found")

# ─── Kemisk bindning: add step-by-step before jonbindning ─────────────────
OLD_KB_JON = """<h3>1. Jonbindning</h3>
<p>Jonbindning uppstår när en metall avger en eller flera elektroner till en icke-metall."""

NEW_KB_JON = """<h3>1. Jonbindning – steg för steg</h3>
<p><strong>Varför uppstår jonbindning?</strong> Atomer strävar mot ädelgaskonfiguration (fullt ytterskal, oktettregeln). Metaller i grupp 1–2 har <em>låg joniseringsenergi</em> – det kostar lite energi att ta bort deras 1–2 valenselektroner. Icke-metaller i grupp 16–17 har <em>hög elektronaffinitet</em> – de vinner mycket energi på att ta upp 1–2 elektroner. Resultatet: elektroner överförs från metall till icke-metall, och bägge når ädelgaskonfiguration.</p>
<p><strong>Steg 1:</strong> Na (1 valenselektron) avger den → Na⁺ (Ne-konfiguration).<br>
<strong>Steg 2:</strong> Cl (7 valenselektroner) tar upp den → Cl⁻ (Ar-konfiguration).<br>
<strong>Steg 3:</strong> Na⁺ och Cl⁻ attraherar varandra elektrostatiskt (Coulombs lag) och ordnar sig i ett kristallgitter.<br>
<strong>Följden:</strong> Höga smältpunkter, sprödhet, ledning i smält tillstånd, löslighet i vatten.</p>
<p>Jonbindning uppstår när en metall avger en eller flera elektroner till en icke-metall."""

if OLD_KB_JON in content:
    content = content.replace(OLD_KB_JON, NEW_KB_JON)
    print("✓ Improved jonbindning step-by-step")
else:
    print("✗ Jonbindning NOT found")

# ─── Kemisk bindning: improve VSEPR with step-by-step ─────────────────────
OLD_VSEPR = """<h3>4. VSEPR-teorin och molekylgeometri</h3>
<p>VSEPR (Valence Shell Electron Pair Repulsion) förutsäger geometrin hos kovalenta molekyler utifrån en enkel princip: elektronpar runt en centralatom stöter bort varandra och placerar sig så långt från varandra som möjligt.</p>"""

NEW_VSEPR = """<h3>4. VSEPR-teorin och molekylgeometri – varför formen beror på elektronparen</h3>
<p>Vi vet nu att atomer delar elektronpar (kovalenta bindningar). Men <em>hur</em> ordnas dessa bindningar i rummet? Det avgörs av att negativt laddade elektronpar stöter bort varandra – de vill ha maximalt avstånd till varandra. Det är VSEPR-principen (Valence Shell Electron Pair Repulsion).</p>
<p><strong>Nyckelinsikt:</strong> Det är <em>alla</em> elektronpar runt centralatomen som räknas – bindande par OCH fria par (lone pairs). Fria par tar mer plats än bindande par (de är inte bundna till en annan kärna) → de trycker ihop bindningsvinklarna lite extra.</p>"""

if OLD_VSEPR in content:
    content = content.replace(OLD_VSEPR, NEW_VSEPR)
    print("✓ Improved VSEPR intro")
else:
    print("✗ VSEPR NOT found")

# ─── Syror & baser: strengthen the step-by-step intro ────────────────────
OLD_SB_INTRO = """<h2>🧪 Syror &amp; baser</h2>
<p class="theory-intro">Syra-bas-kemi är något vi möter överallt: citronsyrans söta syrlighet, bikarbonatets neutralisering av magsyra, blodets exakta pH-kontroll, rägnsurning och hur läkemedel absorberas i tarmen. Förståelsen för syror och baser, deras jämvikter och buffrar är fundamental i kemi, biologi, farmakologi och miljövetenskap.</p>"""

NEW_SB_INTRO = """<h2>🧪 Syror &amp; baser</h2>
<p class="theory-intro">Syra-bas-kemi är något vi möter överallt: citronsyrans syrlighet, bikarbonatets neutralisering av magsyra, blodets exakta pH-kontroll, surt regn och hur läkemedel absorberas i tarmen. Allt börjar med en enkel fråga: vad gör ett ämne surt? Svaret – protoner (H⁺) – leder till definitionen av syror och baser. Det leder i sin tur till jämviktskonstanter (Ka), som leder till pH-begreppet, som leder till buffertlösningarnas funktion, som leder till titrering och kvantitativ analys. Varje begrepp bygger på det föregående.</p>"""

if OLD_SB_INTRO in content:
    content = content.replace(OLD_SB_INTRO, NEW_SB_INTRO)
    print("✓ Improved Syror & baser intro")
else:
    print("✗ Syror & baser intro NOT found")

# ─── Syror & baser: improve strong/weak section with causal reasoning ─────
OLD_SW = """<h3>2. Stark vs svag syra och bas</h3>
<p><strong>Starka syror</strong> dissocierar fullständigt i vatten: HCl, HBr, HI, HNO₃, H₂SO₄ (första steget), HClO₄. En 0,10 mol/L HCl-lösning har [H⁺] = 0,10 mol/L utan restmolekyler av HCl.</p>
<p><strong>Svaga syror</strong> dissocierar ofullständigt: ättiksyra (CH₃COOH, Ka = 1,8×10⁻⁵), kvävlsyrlighet HNO₂, kolsåra H₂CO₃, ammonium NH₄⁺. En 0,10 mol/L ättiksyrelösning har [H⁺] ≈ 1,34×10⁻³ mol/L (bara ~1,3 % dissocierat).</p>
<p><strong>Starka baser:</strong> NaOH, KOH, Ba(OH)₂ – dissocierar fullständigt. <strong>Svaga baser:</strong> NH₃, aminer (R–NH₂) – tar upp proton med jämviktskonstant Kb.</p>"""

NEW_SW = """<h3>2. Stark vs svag syra och bas – bindningsstyrka avgör</h3>
<p><strong>Varför är vissa syror starka och andra svaga?</strong> En stark syra har en <em>svag H-A-bindning</em> (lätt att bryta) och/eller en <em>stabil konjugatbas</em> A⁻ (laddningen stabiliseras av strukturen). HCl: H–Cl-bindningen är relativt svag → fullständig dissosiaton. CH₃COOH: karboxylgruppens C–O-bindning är starkare och laddningen i CH₃COO⁻ är resonansstabiliserad → bara partiell dissociation.</p>
<p><strong>Starka syror</strong> dissocierar fullständigt i vatten – reaktionspilen pekar åt höger: HCl + H₂O → H₃O⁺ + Cl⁻. De sex starka syrorna: HCl, HBr, HI, HNO₃, H₂SO₄ (1:a steget), HClO₄. En 0,10 mol/L HCl-lösning har [H₃O⁺] = exakt 0,10 mol/L – inga HCl-molekyler kvarstår.</p>
<p><strong>Svaga syror</strong> dissocierar ofullständigt – reaktionen är en jämvikt ⇌: CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻. En 0,10 mol/L ättiksyralösning har [H₃O⁺] ≈ 1,34×10⁻³ mol/L (bara ~1,3 % dissocierat). Ka = 1,8×10⁻⁵ – ett litet Ka-värde = svag syra = vill inte dissociera.</p>
<p><strong>Starka baser:</strong> NaOH, KOH, Ba(OH)₂ – dissocierar fullständigt, ger [OH⁻] = koncentrationen. <strong>Svaga baser:</strong> NH₃, aminer (R–NH₂) – tar upp proton med jämviktskonstant Kb. NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, Kb = 1,8×10⁻⁵.</p>
<p><strong>Konjugatsyra-baspar:</strong> Varje syra HA har en konjugatbas A⁻ (syran minus ett H⁺). En stark syra har en <em>mycket svag</em> konjugatbas (Cl⁻ är nästintill ingen bas alls). En svag syra har en <em>märkbart stark</em> konjugatbas (CH₃COO⁻ är en märkbar bas). Ka × Kb = Kw – relationen är exakt omvänd.</p>"""

if OLD_SW in content:
    content = content.replace(OLD_SW, NEW_SW)
    print("✓ Improved stark/svag syra section")
else:
    print("✗ Stark/svag syra NOT found")

# ─── Syror & baser: improve pH section with more step-by-step ────────────
OLD_PH = """<h3>3. pH, pOH och vattnets jonprodukt</h3>
<p>Vatten autojoniserar (autoprotonation): 2H₂O ⇌ H₃O⁺ + OH⁻. Jämviktskonstanten <strong>Kw = [H⁺][OH⁻] = 1,0×10⁻¹⁴</strong> vid 25 °C (men temperaturbäroende: vid 37 °C är Kw ≈ 2,4×10⁻¹⁴).</p>"""

NEW_PH = """<h3>3. pH, pOH och vattnets jonprodukt – logaritmskalan och varför pH 7 är neutralt</h3>
<p><strong>Varför en logaritmisk skala?</strong> [H₃O⁺] i vanliga lösningar varierar enormt – från 10 mol/L (starkt koncentrerad syra) till 10⁻¹⁴ mol/L (stark bas). Att skriva 0,00000001 är omständligt; pH-skalan komprimerar detta till ett enkelt tal (−8 → pH 8). pH = −log[H₃O⁺].</p>
<p><strong>Vattnets autoprotolys (autojonisering):</strong> Vatten reagerar med sig självt: 2H₂O ⇌ H₃O⁺ + OH⁻. Jämviktskonstanten Kw = [H₃O⁺][OH⁻] = 1,0×10⁻¹⁴ vid 25 °C. I rent vatten: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7. Tillsätts syra: [H₃O⁺] ökar → [OH⁻] minskar (kvoten Kw bevaras) → pH sjunker. Tillsätts bas: [OH⁻] ökar → [H₃O⁺] minskar → pH stiger.</p>"""

if OLD_PH in content:
    content = content.replace(OLD_PH, NEW_PH)
    print("✓ Improved pH section")
else:
    print("✗ pH section NOT found")

# ─── Syror & baser: improve buffer section with step-by-step ─────────────
OLD_BUFF = """<h3>5. Henderson-Hasselbalch och bufferlösningar</h3>
<p>En <strong>buffertlösning</strong> motstår ändringar i pH när små mängder syra eller bas tillsätts."""

NEW_BUFF = """<h3>5. Henderson-Hasselbalch och buffertlösningar – varför pH inte ändras</h3>
<p><strong>Varför ändras inte pH i en buffert?</strong> En buffertlösning innehåller <em>både</em> en svag syra HA och dess konjugatbas A⁻ i betydande koncentrationer. Tillsätts H⁺ reagerar det med A⁻ (basen konsumerar syran): A⁻ + H⁺ → HA. Tillsätts OH⁻ reagerar det med HA: HA + OH⁻ → A⁻ + H₂O. I båda fallen absorberas tillsatsen och pH-förändringen minimeras – man byter ut starka syror/baser mot svaga.</p>
<p>En <strong>buffertlösning</strong> motstår ändringar i pH när små mängder syra eller bas tillsätts."""

if OLD_BUFF in content:
    content = content.replace(OLD_BUFF, NEW_BUFF)
    print("✓ Improved buffert section")
else:
    print("✗ Buffert NOT found")

# ─── Organisk kemi: strengthen the intro ─────────────────────────────────
OLD_ORG_INTRO = """<h2>🌿 Organisk kemi</h2>
<p class="theory-intro">Organisk kemi är kemin om kolföreningar – molekyler där kol är ryggraden. Trots att kol bara är ett av 118 grundämnen svarar det mot över 10 miljoner kända föreningar, mer än alla andra grundämnen tillsammans. Anledningen är kolets unika förmåga att bilda stabila kedjor, ringar och grenade strukturer av vilken längd som helst, kombinerat med bindningar till väte, syre, kväve, svavel och halogener. Organisk kemi är grunden för biokemi, läkemedelskemi, polymerkemi och petrokemin.</p>"""

NEW_ORG_INTRO = """<h2>🌿 Organisk kemi</h2>
<p class="theory-intro">Organisk kemi är kemin om kolföreningar. Kol (C) har fyra valenselektroner och kan bilda fyra kovalenta bindningar – inklusive till andra kolatomer. Det leder till att C kan bilda kedjor av godtycklig längd, grenar, ringar och dubbel-/trippelbindningar. Det leder i sin tur till att över 10 miljoner organiska föreningar är kända. Varje förening har en specifik 3D-struktur. Strukturen bestämmer reaktiviteten. Reaktiviteten bestämmer vilka reaktioner som är möjliga. Det är varför organisk kemi är grunden för läkemedelskemi, biokemi och plastindustri – allt hänger på strukturen.</p>"""

if OLD_ORG_INTRO in content:
    content = content.replace(OLD_ORG_INTRO, NEW_ORG_INTRO)
    print("✓ Improved Organisk kemi intro")
else:
    print("✗ Organisk kemi intro NOT found")

# ─── Reaktioner & stökiometri: strengthen mol section ────────────────────
OLD_MOL = """<h3>2. Molbegreppet och Avogadros tal</h3>
<p>Atomer är så små att de måste räknas i enorma antal. <strong>Mole (mol)</strong> är SI-enheten för substansmängd: 1 mol = 6,022×10²³ enheter (<strong>Avogadros tal N₀</strong>). En mol kol-12 väger exakt 12 g. Avogadros tal valdes så att 1 mol av valfri atom väger lika många gram som atommassan i amu.</p>"""

NEW_MOL = """<h3>2. Molbegreppet och Avogadros tal – bryggan mellan atomer och gram</h3>
<p><strong>Problemet:</strong> Reaktionsscheman talar om atomer och molekyler (t.ex. 2 H₂ + O₂ → 2 H₂O: 2 molekyler väte reagerar med 1 molekyl syre). Men i laboratoriet väger vi gram – inte enskilda atomer. Vi behöver ett begrepp som kopplar ihop de två nivåerna.</p>
<p><strong>Lösningen – molbegreppet:</strong> <strong>1 mol</strong> = 6,022×10²³ partiklar (Avogadros tal N_A). Varför just det antalet? För att 1 mol av C-12 (exakt 12 g) ska innehålla lika många atomer som massatalet antyder. Det innebär att molmassan M (g/mol) numeriskt är lika med relativmassan i periodiska systemet.</p>
<p>Nu kan vi räkna: koefficientsförhållanden i reaktionsscheman = molförhållanden = massornas förhållanden om vi omvandlar via molmassa. Det är kärnan i all stökiometrisk beräkning.</p>
<p>Atomer är så små att de måste räknas i enorma antal. <strong>Mole (mol)</strong> är SI-enheten för substansmängd: 1 mol = 6,022×10²³ enheter (<strong>Avogadros tal N₀</strong>). En mol kol-12 väger exakt 12 g. Avogadros tal valdes så att 1 mol av valfri atom väger lika många gram som atommassan i amu.</p>"""

if OLD_MOL in content:
    content = content.replace(OLD_MOL, NEW_MOL)
    print("✓ Improved molbegreppet section")
else:
    print("✗ Molbegreppet NOT found")

# ─── Add step-by-step section before redox i Reaktioner ──────────────────
OLD_REDOX = """<h3>9. Redoxreaktioner och oxidationstal</h3>
<p><strong>Redoxreaktioner</strong> innebär överföring av elektroner från ett ämne till ett annat. Termen "redox" är en sammandragning av <em>reduktion</em> och <em>oxidation</em>, som alltid sker simultaneously:</p>"""

NEW_REDOX = """<h3>9. Redoxreaktioner och oxidationstal – steg för steg</h3>
<p><strong>Steg 1 – förstå varför elektroner överförs:</strong> Atomer med låg joniseringsenergi (metaller) avger gärna elektroner. Atomer med hög elektronaffinitet (halogener, syre) tar gärna upp elektroner. När de möts sker en elektronöverföring – en redoxreaktion.</p>
<p><strong>Steg 2 – identifiera vad som händer:</strong> Oxidation = avger elektroner (oxidationstalet ökar). Reduktion = tar upp elektroner (oxidationstalet minskar). De sker ALLTID ihop.</p>
<p><strong>Steg 3 – verktyget oxidationstal:</strong> Tilldela varje atom ett formellt laddningstal enligt reglerna → spåra förändringen för att avgöra vad som oxideras och vad som reduceras.</p>
<p><strong>Redoxreaktioner</strong> innebär överföring av elektroner från ett ämne till ett annat. Termen "redox" är en sammandragning av <em>reduktion</em> och <em>oxidation</em>, som alltid sker simultant:</p>"""

if OLD_REDOX in content:
    content = content.replace(OLD_REDOX, NEW_REDOX)
    print("✓ Improved redoxreaktioner section")
else:
    print("✗ Redox section NOT found")

# ─── Termokemi: improve intro ─────────────────────────────────────────────
OLD_TERMO_INTRO = """<h2>🌡️ Termokemi &amp; energi</h2>
<p class="theory-intro">All kemisk reaktion innebär energiöverföring. När bränsle bränns frigs energi som värmer hus och driver motorer. När fotosyntes sker lagras solen energi i kemiska bindningar. Termokemi studerar dessa energiutöver: hur mycket friggs eller absorberas, varför reaktioner sker spontant, och hur man kan förutsäga om en reaktion är möjlig överhuvudtaget.</p>"""

NEW_TERMO_INTRO = """<h2>🌡️ Termokemi &amp; energi</h2>
<p class="theory-intro">All kemisk reaktion innebär energiöverföring – bindningar bryts (kräver energi) och nya bildas (frigör energi). Nettosumman avgör om reaktionen är exoterm (ger ifrån sig värme) eller endoterm (absorberar värme). Men termodynamiken handlar om mer än bara värme: <em>varför</em> sker reaktioner spontant? Svaret kräver att man förstår <em>entropi</em> (oordning) och <em>Gibbs fria energi</em> – det begrepp som slutgiltigt avgör om en reaktion sker av sig self eller måste drivas. Termokemi kopplar samman bindningsstyrkor, kalorimetri, standardentalpier, entropi och jämviktskonstanter i ett sammanhängande system.</p>"""

if OLD_TERMO_INTRO in content:
    content = content.replace(OLD_TERMO_INTRO, NEW_TERMO_INTRO)
    print("✓ Improved Termokemi intro")
else:
    print("✗ Termokemi intro NOT found")

# ─── Save ─────────────────────────────────────────────────────────────────
with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("\nAll done – file saved.")
