#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Adds to kemi1-flashcards.html:
1. New flashcard categories (syra-bas extended, grundämnen, vanliga syror/baser)
2. CLOZE_DATA (fill-in-the-blank exercises)
3. Mode switching UI (Räkna / Luckor / Memorera)
4. New CSS
"""

with open('kemi1-flashcards.html', 'r', encoding='utf-8') as f:
    html = f.read()

print(f"Input size: {len(html)} chars")

# ============================================================
# 1. NEW FLASHCARD CARDS
# ============================================================
NEW_CARDS = """,

  // \u2500\u2500 Syra-bas begrepp (utökade) \u2500\u2500
  { id:150, cat:"Syror & baser", term:"Oxoniumjon (H\u2083O\u207a)", def:"Den hydratiserade protonen i vatten\u2013 bildas då en syra avger H\u207a till vatten; betecknas H\u2083O\u207a." },
  { id:151, cat:"Syror & baser", term:"Hydroxidjon (OH\u207b)", def:"Negativt laddad jon; bildas vid basers protolys i vatten; [OH\u207b] > [H\u2083O\u207a] ger basisk lösning." },
  { id:152, cat:"Syror & baser", term:"Protolys", def:"Reaktion där ett proton (H\u207a) överförs från en protondonator (syra) till en protonacceptor (bas): HA + B \u21cc A\u207b + BH\u207a." },
  { id:153, cat:"Syror & baser", term:"Deprotonering", def:"Process då en syra avger en proton och omvandlas till sin korresponderande bas; t.ex. CH\u2083COOH \u2192 CH\u2083COO\u207b + H\u207a." },
  { id:154, cat:"Syror & baser", term:"Protonering", def:"Process då en bas tar emot en proton och omvandlas till sin korresponderande syra; t.ex. NH\u2083 + H\u207a \u2192 NH\u2084\u207a." },
  { id:155, cat:"Syror & baser", term:"Korresponderande syra-baspar", def:"En syra och dess korresponderande bas skiljer sig med exakt ett H\u207a; t.ex. HCl/Cl\u207b och H\u2082O/OH\u207b." },
  { id:156, cat:"Syror & baser", term:"Sur lösning", def:"Vattenlösning där [H\u2083O\u207a] > [OH\u207b]; pH < 7 (vid 25 \u00b0C)." },
  { id:157, cat:"Syror & baser", term:"Basisk lösning", def:"Vattenlösning där [OH\u207b] > [H\u2083O\u207a]; pH > 7 (vid 25 \u00b0C)." },
  { id:158, cat:"Syror & baser", term:"Neutral lösning", def:"Vattenlösning där [H\u2083O\u207a] = [OH\u207b]; pH = 7 (vid 25 \u00b0C); uppstår vid neutralisation av stark syra med stark bas." },
  { id:159, cat:"Syror & baser", term:"Surt salt", def:"Salt bildat av stark syra + svag bas; ger sur vattenlösning (pH < 7). Exempel: NH\u2084Cl." },
  { id:160, cat:"Syror & baser", term:"Basiskt salt", def:"Salt bildat av svag syra + stark bas; ger basisk vattenlösning (pH > 7). Exempel: CH\u2083COONa." },
  { id:161, cat:"Syror & baser", term:"Neutralt salt", def:"Salt bildat av stark syra + stark bas; ger neutral vattenlösning (pH \u2248 7). Exempel: NaCl, KNO\u2083." },
  { id:162, cat:"Syror & baser", term:"Omslagsintervall", def:"pH-intervall inom vilket en indikator byter färg; vanligen \u00b11 kring pK\u2090. Fenolftalein: 8,2\u201310,0; BTB: 6,0\u20137,6." },
  { id:163, cat:"Syror & baser", term:"Protolysgrad", def:"Andel av syra/bas-molekyler som pronolyserats i jämvikt; uttrycks 0\u20131 eller procent. Hög grad = stark syra." },
  { id:164, cat:"Syror & baser", term:"Dissociation", def:"Uppdelning av ett jonämne i fria joner i lösning. Starka syror/baser dissocierar fullständigt; svaga delvis." },
  { id:165, cat:"Syror & baser", term:"Fullständigt protolyserad", def:"Alla syra/bas-molekyler har avgett/tagit emot ett proton \u2013 karaktäriserar starka syror (HCl) och baser (NaOH)." },
  { id:166, cat:"Syror & baser", term:"Ofullständigt protolyserad", def:"Bara en del av molekylerna pronolyserats \u2013 jämvikt råder; karaktäriserar svaga syror (CH\u2083COOH) och baser (NH\u2083)." },
  { id:167, cat:"Syror & baser", term:"SIV-regeln", def:"Minnesregel vid balansering av redoxreaktioner: S=Syre med H\u2082O, I=väte med H\u207a, V=laddning med elektroner." },
  { id:168, cat:"Syror & baser", term:"Surhetsgrad", def:"Mått på en lösnings surhet; pH är vanligaste måttet. Lägre pH = högre surhetsgrad = fler H\u2083O\u207a-joner." },
  { id:169, cat:"Syror & baser", term:"Enprotonig syra", def:"Syra som avger ett proton per molekyl. Exempel: HCl, HNO\u2083, CH\u2083COOH, HF." },
  { id:170, cat:"Syror & baser", term:"Tvåprotonig syra", def:"Syra som kan avge två protoner per molekyl i två steg. Exempel: H\u2082SO\u2084, H\u2082CO\u2083." },
  { id:171, cat:"Syror & baser", term:"Stark bas", def:"Bas som fullständigt dissocierar i vatten. Exempel: NaOH, KOH, Ca(OH)\u2082." },
  { id:172, cat:"Syror & baser", term:"Svag bas", def:"Bas som bara delvis protolyseras i vatten \u2013 jämvikt råder. Exempel: NH\u2083, vatten." },
  { id:173, cat:"Syror & baser", term:"Titrand", def:"Den lösning med okänd koncentration som analyseras vid titrering." },
  { id:174, cat:"Syror & baser", term:"Titrator", def:"Den lösning med känd koncentration som tillsätts från byretten vid titrering." },
  { id:175, cat:"Syror & baser", term:"Buffertlösning", def:"Lösning som motstår pH-förändringar; svag syra + konjugerad bas. Blodets pH (\u22487,4) hålls av H\u2082CO\u2083/HCO\u2083\u207b-systemet." },

  // \u2500\u2500 Grundämnen 1\u201320 + viktiga extra \u2500\u2500
  { id:200, cat:"Grundämnen", term:"H \u2013 Väte (Z=1)", def:"Lättaste grundämnet. Tvåatomig gas H\u2082. Period 1, grupp 1. Ingår i vatten och alla organiska molekyler." },
  { id:201, cat:"Grundämnen", term:"He \u2013 Helium (Z=2)", def:"Ädelgas. Reaktionströg. Lägst kokpunkt (\u2212269 \u00b0C). Period 1, grupp 18." },
  { id:202, cat:"Grundämnen", term:"Li \u2013 Litium (Z=3)", def:"Lättaste metallen. Alkalimetall, grupp 1, period 2. 1 valenselektron. Bildar Li\u207a." },
  { id:203, cat:"Grundämnen", term:"Be \u2013 Beryllium (Z=4)", def:"Jordalkalimetall, grupp 2, period 2. 2 valenselektroner. Bildar Be\u00b2\u207a. Giftig." },
  { id:204, cat:"Grundämnen", term:"B \u2013 Bor (Z=5)", def:"Halvmetall, grupp 13, period 2. 3 valenselektroner. Ingår i Pyrex-glas." },
  { id:205, cat:"Grundämnen", term:"C \u2013 Kol (Z=6)", def:"Icke-metall, grupp 14, period 2. 4 valenselektroner. Grund för all organisk kemi. Grafit och diamant." },
  { id:206, cat:"Grundämnen", term:"N \u2013 Kväve (Z=7)", def:"Icke-metall, grupp 15, period 2. Tvåatomig gas N\u2082 (78% av luften). Trippelbindning i N\u2082." },
  { id:207, cat:"Grundämnen", term:"O \u2013 Syre (Z=8)", def:"Icke-metall, grupp 16, period 2. Tvåatomig gas O\u2082 (21% av luften). Nödvändig för förbränning." },
  { id:208, cat:"Grundämnen", term:"F \u2013 Fluor (Z=9)", def:"Halogen, grupp 17, period 2. Högst elektronegativitet (EN=4,0). Starkt oxidationsmedel." },
  { id:209, cat:"Grundämnen", term:"Ne \u2013 Neon (Z=10)", def:"Ädelgas, grupp 18, period 2. 8 valenselektroner (fullt skal). Reaktionströg. Neonskyltar." },
  { id:210, cat:"Grundämnen", term:"Na \u2013 Natrium (Z=11)", def:"Alkalimetall, grupp 1, period 3. 1 valenselektron. Bildar Na\u207a. Reagerar med vatten. Ingår i NaCl." },
  { id:211, cat:"Grundämnen", term:"Mg \u2013 Magnesium (Z=12)", def:"Jordalkalimetall, grupp 2, period 3. Bildar Mg\u00b2\u207a. Ingår i klorofyll. Brinner med vitt ljus." },
  { id:212, cat:"Grundämnen", term:"Al \u2013 Aluminium (Z=13)", def:"Lättmetall, grupp 13, period 3. Bildar Al\u00b3\u207a. Skyddande oxidhinna Al\u2082O\u2083." },
  { id:213, cat:"Grundämnen", term:"Si \u2013 Kisel (Z=14)", def:"Halvledare, grupp 14, period 3. Grunden för datorchip. Kvartssand = SiO\u2082." },
  { id:214, cat:"Grundämnen", term:"P \u2013 Fosfor (Z=15)", def:"Icke-metall, grupp 15, period 3. Vit (reaktiv) och röd form. Ingår i DNA och ATP." },
  { id:215, cat:"Grundämnen", term:"S \u2013 Svavel (Z=16)", def:"Icke-metall, grupp 16, period 3. Gul fast substans. Ingår i H\u2082SO\u2084 och aminosyror." },
  { id:216, cat:"Grundämnen", term:"Cl \u2013 Klor (Z=17)", def:"Halogen, grupp 17, period 3. Grön-gul gas Cl\u2082. Stark oxidant. Bildar Cl\u207b." },
  { id:217, cat:"Grundämnen", term:"Ar \u2013 Argon (Z=18)", def:"Ädelgas, grupp 18, period 3. Vanligaste ädelgasen i atmosfären (~1%). Skyddsgas vid svetsning." },
  { id:218, cat:"Grundämnen", term:"K \u2013 Kalium (Z=19)", def:"Alkalimetall, grupp 1, period 4. Bildar K\u207a. Viktig i nervimpulser och växternas ämnesomsättning." },
  { id:219, cat:"Grundämnen", term:"Ca \u2013 Kalcium (Z=20)", def:"Jordalkalimetall, grupp 2, period 4. Bildar Ca\u00b2\u207a. Ingår i kalksten (CaCO\u2083) och ben." },
  { id:220, cat:"Grundämnen", term:"Fe \u2013 Järn (Z=26)", def:"Övergångsmetall, period 4. Bildar Fe\u00b2\u207a och Fe\u00b3\u207a. Vanligaste metallen i jordskorpan. Grunden för stål." },
  { id:221, cat:"Grundämnen", term:"Cu \u2013 Koppar (Z=29)", def:"Övergångsmetall, period 4. Bildar Cu\u207a och Cu\u00b2\u207a. Excellent elektrisk ledare. Cuprum på latin." },
  { id:222, cat:"Grundämnen", term:"Zn \u2013 Zink (Z=30)", def:"Övergångsmetall, period 4. Bildar Zn\u00b2\u207a. Galvanisering av stål (rostskydd)." },
  { id:223, cat:"Grundämnen", term:"Br \u2013 Brom (Z=35)", def:"Halogen, period 4. Enda icke-metallen som är flytande vid rumstemperatur. Bildar Br\u207b." },
  { id:224, cat:"Grundämnen", term:"Ag \u2013 Silver (Z=47)", def:"Ädel övergångsmetall. Bästa elektriska ledaren. Bildar Ag\u207a. Argentum på latin." },
  { id:225, cat:"Grundämnen", term:"I \u2013 Jod (Z=53)", def:"Halogen, period 5. Svart-lila fast substans. Bildar I\u207b. Viktigt för sköldkörteln." },
  { id:226, cat:"Grundämnen", term:"Au \u2013 Guld (Z=79)", def:"Ädel övergångsmetall. Bildar Au\u207a och Au\u00b3\u207a. Löser sig inte i vanliga syror. Aurum på latin." },

  // \u2500\u2500 Vanliga syror & baser \u2500\u2500
  { id:230, cat:"Vanliga syror & baser", term:"HCl \u2013 Saltsyra", def:"Stark syra. HCl \u2192 H\u207a + Cl\u207b (fullständig). Finns i magsäcken. Frätande." },
  { id:231, cat:"Vanliga syror & baser", term:"H\u2082SO\u2084 \u2013 Svavelsyra", def:"Stark tvåprotonig syra. Starkt korrosiv. Bilbatterier och gödselproduktion." },
  { id:232, cat:"Vanliga syror & baser", term:"HNO\u2083 \u2013 Salpetersyra", def:"Stark syra och starkt oxidationsmedel. Reagerar med de flesta metaller." },
  { id:233, cat:"Vanliga syror & baser", term:"HBr \u2013 Bromvätesyra", def:"Stark halogenvätesyra. HBr \u2192 H\u207a + Br\u207b (fullständig)." },
  { id:234, cat:"Vanliga syror & baser", term:"HI \u2013 Jodvätesyra", def:"Stark halogenvätesyra. HI \u2192 H\u207a + I\u207b. Starkt reduceringsmedel." },
  { id:235, cat:"Vanliga syror & baser", term:"CH\u2083COOH \u2013 Ättiksyra", def:"Svag syra. pKa = 4,75. Finns i vinäger (5\u20138%). Konj. bas: CH\u2083COO\u207b." },
  { id:236, cat:"Vanliga syror & baser", term:"HF \u2013 Fluorvätesyra", def:"Svag syra (pKa \u2248 3,2). Farlig \u2013 angriper benvävnad och glas. Kräver specialhantering." },
  { id:237, cat:"Vanliga syror & baser", term:"H\u2082CO\u2083 \u2013 Kolsyra", def:"Svag tvåprotonig syra. CO\u2082 + H\u2082O \u21cc H\u2082CO\u2083. Viktig buffert i blodet." },
  { id:238, cat:"Vanliga syror & baser", term:"H\u2083PO\u2084 \u2013 Fosforsyra", def:"Svag treprotonig syra. pKa\u2081 \u2248 2,1. Ingår i läskedrycker. Cellulär buffert." },
  { id:239, cat:"Vanliga syror & baser", term:"NaOH \u2013 Natriumhydroxid", def:"Stark bas. NaOH \u2192 Na\u207a + OH\u207b. Starkt frätande. Kallas lut. Tvål och papper." },
  { id:240, cat:"Vanliga syror & baser", term:"KOH \u2013 Kaliumhydroxid", def:"Stark bas. KOH \u2192 K\u207a + OH\u207b. Liknande NaOH. Alkaliska batterier." },
  { id:241, cat:"Vanliga syror & baser", term:"Ca(OH)\u2082 \u2013 Kalciumhydroxid", def:"Stark men svagt löslig bas. pH \u2248 12,4 (mättat). Kalkvatten. Cement och jordbruk." },
  { id:242, cat:"Vanliga syror & baser", term:"NH\u2083 \u2013 Ammoniak", def:"Svag bas. NH\u2083 + H\u2082O \u21cc NH\u2084\u207a + OH\u207b. Skarp lukt. Gödningsmedel." }"""

anchor1 = '  { id:145, cat:"Laborativ kemi & s\u00e4kerhet", term:"Blandbarhet"'
if anchor1 in html:
    # Find the end of card 145 (its closing }, then the ];)
    idx = html.find(anchor1)
    # Find the },' or }' after this card
    closing = html.find('\n];', idx)
    if closing > 0:
        html = html[:closing] + NEW_CARDS + '\n];' + html[closing+3:]
        print("Step 1 OK: New cards added")
    else:
        print("ERROR Step 1: could not find closing ];")
else:
    print("ERROR Step 1: anchor not found")

# ============================================================
# 2. CLOZE_DATA  (insert after PROBLEMS ];, before LEVEL_INFO)
# ============================================================
CLOZE_INSERT = """

const CLOZE_DATA = [
  {id:1,  cat:'syrabas', q:'En ___ \u00e4r ett \u00e4mne som avger en proton (H\u207a) till en protonacceptor.', a:'syra', hint:'Br\u00f8nsted-Lowrys protondonator'},
  {id:2,  cat:'syrabas', q:'En ___ \u00e4r ett \u00e4mne som tar emot en proton (H\u207a) fr\u00e5n en protondonator.', a:'bas', hint:'Br\u00f8nsted-Lowrys protonacceptor'},
  {id:3,  cat:'syrabas', q:'Vatten kan fungera som b\u00e5de syra och bas \u2013 det \u00e4r en ___.', a:'amfolyt', hint:'Amphi = b\u00e5da sidor'},
  {id:4,  cat:'syrabas', q:'HCl, H\u2082SO\u2084 och HNO\u2083 \u00e4r ___ syror som fullst\u00e4ndigt dissocierar.', a:'starka', hint:'H\u00f6g dissociationsgrad \u2013 enriktad pil \u2192'},
  {id:5,  cat:'syrabas', q:'CH\u2083COOH och HF \u00e4r ___ syror \u2013 bara delvis protolyserade i j\u00e4mvikt.', a:'svaga', hint:'J\u00e4mviktspil \u21cc anv\u00e4nds'},
  {id:6,  cat:'syrabas', q:'pH = \u2212log[___]', a:'H\u2083O\u207a', hint:'Oxoniumjonens koncentration'},
  {id:7,  cat:'syrabas', q:'pH + pOH = ___ (vid 25 \u00b0C)', a:'14', hint:'Summan av pH och pOH i vatten'},
  {id:8,  cat:'syrabas', q:'En sur l\u00f6sning har pH ___ 7.', a:'under', hint:'L\u00e4gre pH = surare'},
  {id:9,  cat:'syrabas', q:'En basisk l\u00f6sning har pH ___ 7.', a:'\u00f6ver', hint:'H\u00f6gre pH = mer basiskt'},
  {id:10, cat:'syrabas', q:'Den hydratiserade protonen i vatten kallas ___.', a:'oxoniumjon', hint:'H\u2083O\u207a \u2013 proton + vattenmolekyl'},
  {id:11, cat:'syrabas', q:'OH\u207b kallas ___.', a:'hydroxidjon', hint:'Bildas vid basers protolys'},
  {id:12, cat:'syrabas', q:'Reaktion d\u00e4r H\u207a \u00f6verf\u00f6rs fr\u00e5n en syra till en bas kallas ___.', a:'protolys', hint:'Proton + lysis'},
  {id:13, cat:'syrabas', q:'CH\u2083COO\u207b \u00e4r den ___ basen till CH\u2083COOH.', a:'korresponderande', hint:'Skiljer sig med ett H\u207a'},
  {id:14, cat:'syrabas', q:'Vattnets autoprotolys: 2H\u2082O \u21cc H\u2083O\u207a + ___', a:'OH\u207b', hint:'Hydroxidjon bildas'},
  {id:15, cat:'syrabas', q:'Kw = [H\u2083O\u207a][OH\u207b] = ___ vid 25 \u00b0C.', a:'1,0x10\u207b\u00b9\u2074', hint:'J\u00e4mviktskonstant f\u00f6r vattnets autoprotolys'},
  {id:16, cat:'syrabas', q:'Titrering slutar vid ___ \u2013 exakt lika mol syra och bas har reagerat.', a:'ekvivalenspunkten', hint:'Ekvi = lika'},
  {id:17, cat:'syrabas', q:'L\u00f6sningen med ok\u00e4nd koncentration i en titrering kallas ___.', a:'titrand', hint:'Det som titreras'},
  {id:18, cat:'syrabas', q:'L\u00f6sningen med k\u00e4nd koncentration som tillsatts fr\u00e5n byretten kallas ___.', a:'titrator', hint:'Det man tillsatter'},
  {id:19, cat:'syrabas', q:'Syra + bas \u2192 ___ + vatten (neutralisation).', a:'salt', hint:'Jon\u00f6rening bildas'},
  {id:20, cat:'syrabas', q:'En ___ motst\u00e5r pH-f\u00f6r\u00e4ndringar vid tillsats av syra eller bas.', a:'buffert', hint:'Svag syra + konjugerad bas'},
  {id:21, cat:'syrabas', q:'NH\u2084Cl \u00e4r ett ___ salt (stark syra + svag bas).', a:'surt', hint:'pH < 7'},
  {id:22, cat:'syrabas', q:'CH\u2083COONa \u00e4r ett ___ salt (svag syra + stark bas).', a:'basiskt', hint:'pH > 7'},
  {id:23, cat:'syrabas', q:'NaCl \u00e4r ett ___ salt (stark syra + stark bas).', a:'neutralt', hint:'pH \u2248 7'},
  {id:24, cat:'syrabas', q:'En syra som avger ett proton per molekyl kallas ___.', a:'enprotonig', hint:'Mono = ett; t.ex. HCl, CH\u2083COOH'},
  {id:25, cat:'syrabas', q:'H\u2082SO\u2084 kan avge tv\u00e5 protoner \u2013 det \u00e4r en ___ syra.', a:'tv\u00e5protonig', hint:'Di = tv\u00e5; kallas \u00e4ven diprotonisk'},
  {id:26, cat:'syrabas', q:'Andelen syra/bas-molekyler som pronolyserats kallas ___.', a:'protolysgrad', hint:'Br\u00e5kdel eller procent'},
  {id:27, cat:'syrabas', q:'Stark syra \u00e4r ___ protolyserad \u2013 alla H\u207a avges.', a:'fullst\u00e4ndigt', hint:'Enriktad pil, 100 %'},
  {id:28, cat:'syrabas', q:'Svag syra \u00e4r ___ protolyserad \u2013 bara en del H\u207a avges.', a:'ofullst\u00e4ndigt', hint:'J\u00e4mviktspil, < 100 %'},
  {id:29, cat:'syrabas', q:'Omslagsintervallet \u00e4r det pH-intervall d\u00e4r en indikator ___.', a:'byter f\u00e4rg', hint:'Synlig f\u00f6r\u00e4ndring'},
  {id:30, cat:'syrabas', q:'SIV-regeln: S = syre balanseras med ___, I = v\u00e4te med H\u207a, V = laddning med elektroner.', a:'vatten', hint:'H\u2082O tillsatts'},
  {id:31, cat:'grundamnen', q:'Z=1: symbol H, svenska namn ___', a:'v\u00e4te', hint:'L\u00e4ttaste grundamnet'},
  {id:32, cat:'grundamnen', q:'Z=2: symbol He, svenska namn ___', a:'helium', hint:'\u00c4delgas i ballonger'},
  {id:33, cat:'grundamnen', q:'Z=3: symbol Li, svenska namn ___', a:'litium', hint:'L\u00e4ttaste metallen'},
  {id:34, cat:'grundamnen', q:'Z=6: symbol C, svenska namn ___', a:'kol', hint:'Organisk kemi'},
  {id:35, cat:'grundamnen', q:'Z=7: symbol N, svenska namn ___', a:'kv\u00e4ve', hint:'78 % av luften'},
  {id:36, cat:'grundamnen', q:'Z=8: symbol O, svenska namn ___', a:'syre', hint:'F\u00f6rbr\u00e4nning'},
  {id:37, cat:'grundamnen', q:'Z=11: symbol Na, svenska namn ___', a:'natrium', hint:'Latin: Natrium. Ing\u00e5r i NaCl.'},
  {id:38, cat:'grundamnen', q:'Z=17: symbol Cl, svenska namn ___', a:'klor', hint:'Halogen, gr\u00f6n-gul gas'},
  {id:39, cat:'grundamnen', q:'Z=19: symbol K, svenska namn ___', a:'kalium', hint:'Latin: Kalium'},
  {id:40, cat:'grundamnen', q:'Z=20: symbol Ca, svenska namn ___', a:'kalcium', hint:'Kalksten och ben'},
  {id:41, cat:'grundamnen', q:'Symbol Fe, svenska namn ___', a:'j\u00e4rn', hint:'Latin: Ferrum. St\u00e5l.'},
  {id:42, cat:'grundamnen', q:'Symbol Cu, svenska namn ___', a:'koppar', hint:'Latin: Cuprum. R\u00f6daktig metall.'},
  {id:43, cat:'grundamnen', q:'Symbol Au, svenska namn ___', a:'guld', hint:'Latin: Aurum.'},
  {id:44, cat:'grundamnen', q:'Symbol Ag, svenska namn ___', a:'silver', hint:'Latin: Argentum.'},
  {id:45, cat:'grundamnen', q:'Symbol Zn, svenska namn ___', a:'zink', hint:'Galvanisering av st\u00e5l'},
  {id:46, cat:'grundamnen', q:'Symbol I, svenska namn ___', a:'jod', hint:'Halogen, fast vid rumstemperatur'},
  {id:47, cat:'grundamnen', q:'Symbol Br, svenska namn ___', a:'brom', hint:'Enda flytande icke-metallen vid 25 \u00b0C'},
  {id:48, cat:'grundamnen', q:'Symbol Mg (Z=12), svenska namn ___', a:'magnesium', hint:'Jordalkalimetall, period 3'},
  {id:49, cat:'grundamnen', q:'Symbol Al (Z=13), svenska namn ___', a:'aluminium', hint:'Vanligast bland metaller i jordskorpan'},
  {id:50, cat:'grundamnen', q:'Symbol Si (Z=14), svenska namn ___', a:'kisel', hint:'Halvledare, datorchip'},
  {id:51, cat:'syrorBaser', q:'HCl kallas ___ och \u00e4r en stark syra.', a:'saltsyra', hint:'Finns i mags\u00e4cken'},
  {id:52, cat:'syrorBaser', q:'H\u2082SO\u2084 kallas ___ och \u00e4r tv\u00e5protonig.', a:'svavelsyra', hint:'Bilbatterier'},
  {id:53, cat:'syrorBaser', q:'HNO\u2083 kallas ___ och \u00e4r stark syra + oxidant.', a:'salpetersyra', hint:'Stark oxidationsmedel'},
  {id:54, cat:'syrorBaser', q:'CH\u2083COOH kallas ___ (pKa \u2248 4,75).', a:'\u00e4ttiksyra', hint:'Finns i vin\u00e4ger'},
  {id:55, cat:'syrorBaser', q:'H\u2082CO\u2083 kallas ___ och bildas n\u00e4r CO\u2082 l\u00f6ser sig i vatten.', a:'kolsyra', hint:'Buffert i blodet'},
  {id:56, cat:'syrorBaser', q:'H\u2083PO\u2084 kallas ___ och \u00e4r svag treprotonig.', a:'fosforsyra', hint:'L\u00e4skedrycker'},
  {id:57, cat:'syrorBaser', q:'NaOH kallas ___. Stark bas.', a:'natriumhydroxid', hint:'Kallas ocks\u00e5 lut'},
  {id:58, cat:'syrorBaser', q:'KOH kallas ___. Stark bas.', a:'kaliumhydroxid', hint:'Liknar NaOH'},
  {id:59, cat:'syrorBaser', q:'Ca(OH)\u2082 kallas ___ (eller kalkvatten).', a:'kalciumhydroxid', hint:'Stark men lite l\u00f6slig'},
  {id:60, cat:'syrorBaser', q:'NH\u2083 kallas ___ och \u00e4r en svag bas.', a:'ammoniak', hint:'Skarp lukt, g\u00f6dningsmedel'},
  {id:61, cat:'bindning', q:'Bindning via elektronöverföring mellan metall och icke-metall kallas ___.', a:'jonbindning', hint:'Katjon + anjon'},
  {id:62, cat:'bindning', q:'Bindning d\u00e4r atomer delar elektroner kallas ___.', a:'kovalent bindning', hint:'Typisk mellan icke-metaller'},
  {id:63, cat:'bindning', q:'I metaller bildar valenselektronerna ett gemensamt ___.', a:'elektronhav', hint:'F\u00f6rklarar elektrisk ledning'},
  {id:64, cat:'bindning', q:'H bundet till N, O eller F bildar ___ med grannmolekyler.', a:'v\u00e4tebindningar', hint:'Starkaste intermolekylkraften'},
  {id:65, cat:'bindning', q:'VSEPR: 4 bindningspar + 0 fria par \u2192 ___ geometri (109,5\u00b0).', a:'tetraedisk', hint:'Som CH\u2084'},
  {id:66, cat:'bindning', q:'"Lika l\u00f6ser lika" \u2013 pol\u00e4ra \u00e4mnen l\u00f6ser sig i ___ l\u00f6sningsmedel.', a:'pol\u00e4ra', hint:'Vatten \u00e4r pol\u00e4rt'},
  {id:67, cat:'bindning', q:'Skillnad i EN > 1,7 ger vanligen ___ bindning.', a:'jonbindning', hint:'Stor skillnad \u2192 elektronerna \u00f6verf\u00f6rs'},
  {id:68, cat:'bindning', q:'Van der Waals-krafter uppst\u00e5r p\u00e5 grund av tillf\u00e4lliga ___.', a:'dipoler', hint:'G\u00e4ller alla molekyler'},
];

const CLOZE_CATS = {
  syrabas:    {icon:'\u2697\ufe0f', label:'Syra-bas begrepp'},
  grundamnen: {icon:'\u269b\ufe0f', label:'Grundamnen'},
  syrorBaser: {icon:'\U0001F9EA', label:'Syror & baser'},
  bindning:   {icon:'\U0001F517', label:'Bindning & struktur'},
};
"""

anchor2 = '];\n\n\nconst LEVEL_INFO'
if anchor2 in html:
    html = html.replace(anchor2, '];' + CLOZE_INSERT + '\n\nconst LEVEL_INFO', 1)
    print("Step 2 OK: CLOZE_DATA added")
else:
    print("ERROR Step 2: anchor not found")

# ============================================================
# 3. NEW CSS
# ============================================================
NEW_CSS = """
  /* ── Exercise mode tabs ── */
  .ex-mode-row { display:flex; gap:6px; margin-bottom:16px; flex-wrap:wrap; }
  .ex-mode-btn { flex:1; min-width:80px; padding:9px 8px; border:2px solid var(--border); border-radius:var(--radius-sm); background:var(--surface); color:var(--text2); font-weight:600; font-size:0.82rem; cursor:pointer; transition:all var(--transition); text-align:center; }
  .ex-mode-btn.active { border-color:var(--accent); background:var(--accent-light); color:var(--accent); }
  /* ── Cloze ── */
  .cloze-card { background:var(--surface); border-radius:var(--radius); padding:24px; box-shadow:var(--shadow); margin-bottom:16px; }
  .cloze-sentence { font-size:1.05rem; line-height:1.8; margin:14px 0 18px; }
  .cloze-blank { display:inline-block; border-bottom:3px solid var(--accent); min-width:110px; padding:2px 8px; font-weight:700; color:var(--accent); background:var(--accent-light); border-radius:4px; text-align:center; }
  .cloze-input { flex:1; min-width:130px; padding:10px 14px; border:2px solid var(--border); border-radius:var(--radius-sm); background:var(--surface2); color:var(--text); font-size:1rem; outline:none; transition:border var(--transition); }
  .cloze-input:focus { border-color:var(--accent); }
  .cloze-input.correct { border-color:var(--green); background:var(--green-light); }
  .cloze-input.wrong { border-color:var(--red); background:var(--red-light); }
  .cloze-hint-box { font-size:0.85rem; color:var(--text2); background:var(--yellow-light); border-left:3px solid var(--yellow); padding:8px 12px; border-radius:4px; margin-top:10px; display:none; }
  .cloze-progress { font-size:0.8rem; color:var(--text2); margin-bottom:10px; }
  /* ── Memorera ── */
  .mem-card { background:var(--surface); border-radius:var(--radius); padding:28px 24px; box-shadow:var(--shadow); text-align:center; margin-bottom:16px; }
  .mem-symbol { font-size:3rem; font-weight:800; color:var(--accent); letter-spacing:2px; margin-bottom:4px; }
  .mem-sub { font-size:0.85rem; color:var(--text2); margin-bottom:20px; }
  .mem-mode-toggle { display:flex; gap:8px; justify-content:center; margin-bottom:18px; flex-wrap:wrap; }
  .mem-mode-btn { padding:6px 16px; border:1.5px solid var(--border); border-radius:20px; background:var(--surface2); color:var(--text2); font-size:0.8rem; cursor:pointer; transition:all var(--transition); }
  .mem-mode-btn.active { background:var(--accent); color:#fff; border-color:var(--accent); }
  .mem-answer { font-size:1.5rem; font-weight:700; color:var(--green); margin-bottom:18px; }
"""
html = html.replace('</style>', NEW_CSS + '</style>', 1)
print("Step 3 OK: CSS added")

# ============================================================
# 4. UPDATE exerciseScreen HTML
# ============================================================
OLD_EX = '  <div class="screen" id="exerciseScreen">\n    <div class="section-header" style="margin-top:0">\n      <div class="section-header-icon">\U0001F9EE</div>\n      <div class="section-header-text">R\u00e4kneuppgifter</div>\n    </div>\n    <div class="level-row" id="levelRow"></div>\n    <div id="probContainer"></div>\n  </div>'

NEW_EX = """  <div class="screen" id="exerciseScreen">
    <div class="section-header" style="margin-top:0">
      <div class="section-header-icon">\U0001F9EE</div>
      <div class="section-header-text">\u00d6vningar</div>
    </div>
    <div class="ex-mode-row" id="exModeRow"></div>
    <div id="exRaknaSection">
      <div class="level-row" id="levelRow"></div>
      <div id="probContainer"></div>
    </div>
    <div id="exLuckorSection" style="display:none">
      <div id="clozeCatRow" class="ex-cat-row"></div>
      <div id="clozeContainer"></div>
    </div>
    <div id="exMemSection" style="display:none">
      <div id="memCatRow" class="ex-cat-row"></div>
      <div id="memContainer"></div>
    </div>
  </div>"""

if OLD_EX in html:
    html = html.replace(OLD_EX, NEW_EX, 1)
    print("Step 4 OK: exerciseScreen HTML updated")
else:
    print("ERROR Step 4: exerciseScreen HTML not found")

# ============================================================
# 5. UPDATE initExercise() to add mode row
# ============================================================
OLD_INIT = "function initExercise() {\n  const levelRow = document.getElementById('levelRow');\n  if (!levelRow) return;"

NEW_INIT = """function initExercise() {
  const levelRow = document.getElementById('levelRow');
  if (!levelRow) return;

  // Mode switcher
  const modeRow = document.getElementById('exModeRow');
  modeRow.innerHTML = `
    <button class="ex-mode-btn active" data-mode="rakna">\U0001F9EE R\u00e4kna</button>
    <button class="ex-mode-btn" data-mode="luckor">\u270d\ufe0f Luckor</button>
    <button class="ex-mode-btn" data-mode="memorera">\U0001F4DA Memorera</button>`;
  modeRow.querySelectorAll('.ex-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      modeRow.querySelectorAll('.ex-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      switchExMode(btn.dataset.mode);
    });
  });"""

if OLD_INIT in html:
    html = html.replace(OLD_INIT, NEW_INIT, 1)
    print("Step 5 OK: initExercise updated")
else:
    print("ERROR Step 5: initExercise not found")

# ============================================================
# 6. NEW JS functions before INIT
# ============================================================
NEW_JS = """
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
//  L\u00c4GESV\u00c4XLING (R\u00e4kna / Luckor / Memorera)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550

let _clozeInited = false, _memInited = false;

function switchExMode(mode) {
  document.getElementById('exRaknaSection').style.display  = mode === 'rakna'    ? '' : 'none';
  document.getElementById('exLuckorSection').style.display = mode === 'luckor'   ? '' : 'none';
  document.getElementById('exMemSection').style.display    = mode === 'memorera' ? '' : 'none';
  if (mode === 'luckor'   && !_clozeInited) { _clozeInited = true; initCloze(); }
  if (mode === 'memorera' && !_memInited)   { _memInited   = true; initMem(); }
}

// \u2500\u2500 LUCKOR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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
    container.innerHTML = '<div class="prob-card" style="text-align:center;padding:40px;color:var(--text2)">Inga lucktexts f\u00f6r den valda kategorin.</div>';
    return;
  }
  const c = _clozeList[_clozeIdx];
  _clozeAnswered = false;
  const total = _clozeList.length;
  const qHtml = c.q.replace('___', '<span class="cloze-blank">___</span>');
  container.innerHTML = `
    <div class="cloze-card">
      <div class="cloze-progress">Fr\u00e5ga ${_clozeIdx+1} / ${total}</div>
      <div class="cloze-sentence">${qHtml}</div>
      <div class="prob-input-row">
        <input type="text" id="clozeInput" class="cloze-input" placeholder="Fyll i\u2026" autocomplete="off" spellcheck="false">
        <button class="prob-check" id="clozeCheckBtn">Kontrollera</button>
      </div>
      <div class="prob-feedback" id="clozeFeedback"></div>
      <div class="cloze-hint-box" id="clozeHintBox">\U0001F4A1 ${c.hint}</div>
      <div class="prob-nav-row">
        <button class="prob-nav-btn" id="clozeHintBtn">\U0001F4A1 Tips</button>
        <button class="prob-nav-btn" id="clozePrev" ${_clozeIdx===0?'disabled':''}>← F\u00f6reg\u00e5ende</button>
        <button class="prob-nav-btn" id="clozeNext" ${_clozeIdx===total-1?'disabled':''}>N\u00e4sta →</button>
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
    ? `<strong>\u2705 R\u00e4tt!</strong> Svaret \u00e4r: <em>${c.a}</em>`
    : `<strong>\u274c Fel.</strong> Ditt svar: <strong>${val}</strong> &nbsp;|\u00a0 R\u00e4tt: <strong>${c.a}</strong>`;
}

// \u2500\u2500 MEMORERA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const MEM_SETS = {
  elem20: { icon:'\u269b\ufe0f', label:'Grundamnen 1\u201320',
    items:[{q:'H',a:'V\u00e4te'},{q:'He',a:'Helium'},{q:'Li',a:'Litium'},{q:'Be',a:'Beryllium'},{q:'B',a:'Bor'},{q:'C',a:'Kol'},{q:'N',a:'Kv\u00e4ve'},{q:'O',a:'Syre'},{q:'F',a:'Fluor'},{q:'Ne',a:'Neon'},{q:'Na',a:'Natrium'},{q:'Mg',a:'Magnesium'},{q:'Al',a:'Aluminium'},{q:'Si',a:'Kisel'},{q:'P',a:'Fosfor'},{q:'S',a:'Svavel'},{q:'Cl',a:'Klor'},{q:'Ar',a:'Argon'},{q:'K',a:'Kalium'},{q:'Ca',a:'Kalcium'}]},
  elemExtra: { icon:'\U0001F52C', label:'Extra grundamnen',
    items:[{q:'Fe',a:'J\u00e4rn'},{q:'Cu',a:'Koppar'},{q:'Zn',a:'Zink'},{q:'Br',a:'Brom'},{q:'Ag',a:'Silver'},{q:'I',a:'Jod'},{q:'Au',a:'Guld'}]},
  strongAcids: { icon:'\U0001F9EA', label:'Starka syror',
    items:[{q:'HCl',a:'Saltsyra'},{q:'H\u2082SO\u2084',a:'Svavelsyra'},{q:'HNO\u2083',a:'Salpetersyra'},{q:'HBr',a:'Bromv\u00e4tesyra'},{q:'HI',a:'Jodv\u00e4tesyra'}]},
  weakAcids: { icon:'\U0001F34B', label:'Svaga syror',
    items:[{q:'CH\u2083COOH',a:'\u00c4ttiksyra'},{q:'HF',a:'Fluorv\u00e4tesyra'},{q:'H\u2082CO\u2083',a:'Kolsyra'},{q:'H\u2083PO\u2084',a:'Fosforsyra'},{q:'HNO\u2082',a:'Salpetersyrlighet'}]},
  bases: { icon:'\U0001F9EA', label:'Baser',
    items:[{q:'NaOH',a:'Natriumhydroxid'},{q:'KOH',a:'Kaliumhydroxid'},{q:'Ca(OH)\u2082',a:'Kalciumhydroxid'},{q:'NH\u2083',a:'Ammoniak'},{q:'Mg(OH)\u2082',a:'Magnesiumhydroxid'}]},
};

let _memSet = 'elem20', _memIdx = 0, _memFlipped = false, _memDir = 'symToName';

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
      renderMem();
    });
  });
  renderMem();
}

function renderMem() {
  const container = document.getElementById('memContainer');
  const set = MEM_SETS[_memSet];
  const item = set.items[_memIdx];
  const total = set.items.length;
  const front = _memDir === 'symToName' ? item.q : item.a;
  const back  = _memDir === 'symToName' ? item.a : item.q;
  const question = _memDir === 'symToName' ? 'Vad heter detta?' : 'Vilken formel/beteckning?';
  container.innerHTML = `
    <div class="mem-card">
      <div class="mem-mode-toggle">
        <button class="mem-mode-btn ${_memDir==='symToName'?'active':''}" data-dir="symToName">Symbol \u2192 Namn</button>
        <button class="mem-mode-btn ${_memDir==='nameToSym'?'active':''}" data-dir="nameToSym">Namn \u2192 Symbol</button>
      </div>
      <div class="mem-symbol">${front}</div>
      <div class="mem-sub">${question}</div>
      ${_memFlipped
        ? `<div class="mem-answer">${back}</div>`
        : `<button class="btn-primary" id="memFlipBtn" style="margin-bottom:18px">Visa svar</button>`}
      <div class="cloze-progress">Kort ${_memIdx+1} / ${total}</div>
      <div class="prob-nav-row" style="margin-top:10px">
        <button class="prob-nav-btn" id="memPrev" ${_memIdx===0?'disabled':''}>← F\u00f6reg\u00e5ende</button>
        <button class="prob-nav-btn" id="memNext" ${_memIdx===total-1?'disabled':''}>N\u00e4sta →</button>
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

"""

INIT_ANCHOR = '// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n//  INIT\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nloadState();'
if INIT_ANCHOR in html:
    html = html.replace(INIT_ANCHOR, NEW_JS + INIT_ANCHOR, 1)
    print("Step 6 OK: new JS functions added")
else:
    print("ERROR Step 6: INIT anchor not found")

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Done! File size: {len(html)} chars")
