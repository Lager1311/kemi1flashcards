# -*- coding: utf-8 -*-
# Lägger till studieringsfrågor (luckor) och nya kategorier i CLOZE_DATA
import sys
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()

# ── Nya frågor ────────────────────────────────────────────────────────────────
# Format: {id, cat, q (med ___), a, hint}
# Startar på id 101 (gamla slutar på 68)

new_questions = [

# ══════════════════════════════════════════════════════
# REDOX & OXIDATIONSTAL  (cat: 'redox')
# ══════════════════════════════════════════════════════
  {'id':101, 'cat':'redox', 'q':'En atom som förlorar elektroner sägs bli ___.', 'a':'oxiderad', 'hint':'OIL – Oxidation Is Loss'},
  {'id':102, 'cat':'redox', 'q':'En atom som tar upp elektroner sägs bli ___.', 'a':'reducerad', 'hint':'RIG – Reduction Is Gain'},
  {'id':103, 'cat':'redox', 'q':'Det ämne som avger elektroner kallas ___.', 'a':'reduktionsmedel', 'hint':'Det reducerar det andra ämnet'},
  {'id':104, 'cat':'redox', 'q':'Det ämne som tar emot elektroner kallas ___.', 'a':'oxidationsmedel', 'hint':'Det oxiderar det andra ämnet'},
  {'id':105, 'cat':'redox', 'q':'OIL RIG: Oxidation Is Loss, Reduction Is ___.', 'a':'Gain', 'hint':'Engelska minnesregeln för redox'},
  {'id':106, 'cat':'redox', 'q':'Oxidationstalet för ett fritt grundämne (t.ex. Fe, O₂, Cl₂) är alltid ___.', 'a':'0', 'hint':'Regel 1 för oxidationstal'},
  {'id':107, 'cat':'redox', 'q':'Oxidationstalet för O i de flesta föreningar är ___.', 'a':'−2', 'hint':'Undantag: peroxider (−1) och OF₂ (+2)'},
  {'id':108, 'cat':'redox', 'q':'Oxidationstalet för H bundet till icke-metall är ___.', 'a':'+1', 'hint':'H₂O, HCl, NH₃ – H är +1'},
  {'id':109, 'cat':'redox', 'q':'Oxidationstalet för F är alltid ___.', 'a':'−1', 'hint':'Mest elektronegativa grundämnet'},
  {'id':110, 'cat':'redox', 'q':'Oxidationstalet för Na i NaCl är ___.', 'a':'+1', 'hint':'Alkalimetaller är alltid +1 i föreningar'},
  {'id':111, 'cat':'redox', 'q':'Oxidationstalet för Mn i MnO₄⁻ är ___.', 'a':'+7', 'hint':'4×(−2) + Mn = −1 → Mn = +7'},
  {'id':112, 'cat':'redox', 'q':'Oxidationstalet för Cr i Cr₂O₇²⁻ är ___.', 'a':'+6', 'hint':'2Cr + 7×(−2) = −2 → Cr = +6'},
  {'id':113, 'cat':'redox', 'q':'Oxidationstalet för S i SO₄²⁻ är ___.', 'a':'+6', 'hint':'S + 4×(−2) = −2 → S = +6'},
  {'id':114, 'cat':'redox', 'q':'Oxidationstalet för Fe i Fe₂O₃ är ___.', 'a':'+3', 'hint':'2Fe + 3×(−2) = 0 → Fe = +3'},
  {'id':115, 'cat':'redox', 'q':'Zn + CuSO₄ → ZnSO₄ + Cu. Det ämne som oxideras är ___.', 'a':'Zn', 'hint':'Zn: 0 → +2, förlorar elektroner'},
  {'id':116, 'cat':'redox', 'q':'Zn + CuSO₄ → ZnSO₄ + Cu. Det ämne som reduceras är ___.', 'a':'Cu²⁺', 'hint':'Cu: +2 → 0, tar upp elektroner'},
  {'id':117, 'cat':'redox', 'q':'Reaktionshalva 2H⁺ + 2e⁻ → H₂ är en ___ halfreakton.', 'a':'reduktions-', 'hint':'e⁻ konsumeras = reduktion'},
  {'id':118, 'cat':'redox', 'q':'Reaktionshalva Zn → Zn²⁺ + 2e⁻ är en ___ halfreakton.', 'a':'oxidations-', 'hint':'e⁻ produceras = oxidation'},
  {'id':119, 'cat':'redox', 'q':'Vid balansering av redox i sur lösning balanseras O-atomer med ___.', 'a':'H₂O', 'hint':'Steg 3 i halfreaktionsmetoden'},
  {'id':120, 'cat':'redox', 'q':'Vid balansering av redox i sur lösning balanseras H-atomer med ___.', 'a':'H⁺', 'hint':'Steg 4 i halfreaktionsmetoden'},
  {'id':121, 'cat':'redox', 'q':'Korrosion av järn är en ___ reaktion.', 'a':'redoxreaktion', 'hint':'Fe oxideras, O₂ reduceras'},
  {'id':122, 'cat':'redox', 'q':'I ett galvaniskt element sker oxidation vid ___.', 'a':'anoden', 'hint':'Anod = oxidation (minnesregel: Anod = A = Avger e⁻)'},
  {'id':123, 'cat':'redox', 'q':'I ett galvaniskt element sker reduktion vid ___.', 'a':'katoden', 'hint':'Katod = reduktion'},
  {'id':124, 'cat':'redox', 'q':'Zink är ___ aktiv än koppar i aktivitetsserien.', 'a':'mer', 'hint':'Zn förtränger Cu ur lösning'},
  {'id':125, 'cat':'redox', 'q':'Om ett ämne inte ändrar oxidationstal i en reaktion är det ___.', 'a':'varken oxiderat eller reducerat', 'hint':'Inte redoxreaktion för det ämnet'},

# ══════════════════════════════════════════════════════
# STÖKIOMETRI & MOLBERÄKNINGAR  (cat: 'stoikiometri')
# ══════════════════════════════════════════════════════
  {'id':126, 'cat':'stoikiometri', 'q':'n = m / M; n betecknar ___.', 'a':'substansmängd (mol)', 'hint':'SI-enhet för antal partiklar'},
  {'id':127, 'cat':'stoikiometri', 'q':'M betecknar ___ och har enheten g/mol.', 'a':'molmassa', 'hint':'Summan av atommassorna'},
  {'id':128, 'cat':'stoikiometri', 'q':'Avogadros tal Nₐ = ___ mol⁻¹.', 'a':'6,022×10²³', 'hint':'Antal partiklar i 1 mol'},
  {'id':129, 'cat':'stoikiometri', 'q':'Molmassan för H₂O är ___ g/mol.', 'a':'18', 'hint':'2×1 + 16 = 18'},
  {'id':130, 'cat':'stoikiometri', 'q':'Molmassan för NaCl är ___ g/mol.', 'a':'58,5', 'hint':'23 + 35,5 = 58,5'},
  {'id':131, 'cat':'stoikiometri', 'q':'Molmassan för CO₂ är ___ g/mol.', 'a':'44', 'hint':'12 + 2×16 = 44'},
  {'id':132, 'cat':'stoikiometri', 'q':'Molmassan för CaCO₃ är ___ g/mol.', 'a':'100', 'hint':'40 + 12 + 3×16 = 100'},
  {'id':133, 'cat':'stoikiometri', 'q':'Vid STP upptar 1 mol idealgas ___ L.', 'a':'22,4', 'hint':'Standard Temperature and Pressure: 0°C, 101,3 kPa'},
  {'id':134, 'cat':'stoikiometri', 'q':'Det reagens som tar slut först och begränsar produktmängden kallas ___.', 'a':'begränsande reagens', 'hint':'Limiting reagent'},
  {'id':135, 'cat':'stoikiometri', 'q':'Procentuellt utbyte = (faktisk massa / ___ massa) × 100%.', 'a':'teoretisk', 'hint':'Den maximalt möjliga mängden produkt'},
  {'id':136, 'cat':'stoikiometri', 'q':'Empirisk formel anger grundämnenas ___ förhållanden.', 'a':'enklaste heltal-', 'hint':'CH₂O är empirisk formel för glukos'},
  {'id':137, 'cat':'stoikiometri', 'q':'Massabevarandelagen: massa ___ i en kemisk reaktion.', 'a':'bevaras', 'hint':'Atomer skapas inte eller förstörs'},
  {'id':138, 'cat':'stoikiometri', 'q':'Koefficienter i en balanserad reaktion anger molförhållanden, inte ___.', 'a':'massförhållanden', 'hint':'2H₂ + O₂ → 2H₂O ger 2:1:2 i mol'},
  {'id':139, 'cat':'stoikiometri', 'q':'n(H₂O) = 90 g / 18 g/mol = ___ mol.', 'a':'5,0', 'hint':'n = m/M'},
  {'id':140, 'cat':'stoikiometri', 'q':'Antal molekyler i 0,5 mol vatten = ___.', 'a':'3,011×10²³', 'hint':'0,5 × 6,022×10²³'},
  {'id':141, 'cat':'stoikiometri', 'q':'För att bestämma molekylformel från empirisk formel behöver man ___.', 'a':'molmassan', 'hint':'n = M_molekyl / M_empirisk'},
  {'id':142, 'cat':'stoikiometri', 'q':'Procentuell sammansättning: %X = (n_X × M_X / M_förening) × ___.', 'a':'100', 'hint':'Ger massandel i procent'},
  {'id':143, 'cat':'stoikiometri', 'q':'Stökets grundformel för lösningar: n = c × ___.', 'a':'V', 'hint':'c i mol/L, V i L'},
  {'id':144, 'cat':'stoikiometri', 'q':'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Koefficienten för O₂ är ___.', 'a':'5', 'hint':'Balansera syre sist'},
  {'id':145, 'cat':'stoikiometri', 'q':'88 g CO₂ (M=44) motsvarar ___ mol.', 'a':'2,0', 'hint':'n = 88/44'},

# ══════════════════════════════════════════════════════
# GASLAGAR  (cat: 'gaslagar')
# ══════════════════════════════════════════════════════
  {'id':146, 'cat':'gaslagar', 'q':'Ideala gaslagen: pV = ___.', 'a':'nRT', 'hint':'p i Pa, V i m³, T i Kelvin'},
  {'id':147, 'cat':'gaslagar', 'q':'Gaskonstanten R = ___ J/(mol·K).', 'a':'8,314', 'hint':'Ingår i pV = nRT'},
  {'id':148, 'cat':'gaslagar', 'q':'Boyles lag: vid konstant T gäller p₁V₁ = ___.', 'a':'p₂V₂', 'hint':'Tryck och volym är omvänt proportionella'},
  {'id':149, 'cat':'gaslagar', 'q':'Charles lag: vid konstant p gäller V₁/T₁ = ___.', 'a':'V₂/T₂', 'hint':'Volym och temperatur proportionella'},
  {'id':150, 'cat':'gaslagar', 'q':'Absolut nollpunkt är ___ °C.', 'a':'−273,15', 'hint':'0 K – all rörelseenergi upphör'},
  {'id':151, 'cat':'gaslagar', 'q':'T(K) = T(°C) + ___.', 'a':'273,15', 'hint':'Konvertering Celsius till Kelvin'},
  {'id':152, 'cat':'gaslagar', 'q':'Daltons lag: totalt gastryck = summan av ___.', 'a':'partialtrycken', 'hint':'pₜₒₜ = p₁ + p₂ + p₃ + ...'},
  {'id':153, 'cat':'gaslagar', 'q':'STP (Standard Temperature and Pressure): T = ___ °C, p = 101,3 kPa.', 'a':'0', 'hint':'Molär volym = 22,4 L vid STP'},
  {'id':154, 'cat':'gaslagar', 'q':'SATP (Standard Ambient T & P): T = ___ °C, p = 100 kPa.', 'a':'25', 'hint':'Molär volym = 24,5 L vid SATP'},
  {'id':155, 'cat':'gaslagar', 'q':'Vid ökad temperatur ökar gastrycket (konstant V) eftersom partiklarna rör sig ___.', 'a':'snabbare', 'hint':'Kinetisk energi ∝ T'},
  {'id':156, 'cat':'gaslagar', 'q':'Enhet för tryck i SI-systemet är ___.', 'a':'Pascal (Pa)', 'hint':'1 atm ≈ 101 325 Pa ≈ 101,3 kPa'},
  {'id':157, 'cat':'gaslagar', 'q':'Gay-Lussacs lag: vid konstant V är p/T = konstant. Fördubblas T (K) ___ p.', 'a':'fördubblas', 'hint':'Direkt proportionalitet'},
  {'id':158, 'cat':'gaslagar', 'q':'2,0 mol idealgas vid 25°C och 100 kPa: V = nRT/p = 2,0 × 8,314 × 298 / 100000 ≈ ___ L.', 'a':'49,6', 'hint':'V i m³, sedan ×1000 för L'},
  {'id':159, 'cat':'gaslagar', 'q':'En idealgas antas att partiklar inte har ___ och inte utövar krafter på varandra.', 'a':'volym', 'hint':'Verkliga gaser avviker vid högt p eller låg T'},
  {'id':160, 'cat':'gaslagar', 'q':'Avogadros lag: vid samma T och p innehåller lika stora gasvolymer ___ antal molekyler.', 'a':'lika', 'hint':'Grunden för 22,4 L/mol vid STP'},

# ══════════════════════════════════════════════════════
# KEMISK JÄMVIKT  (cat: 'jamvikt')
# ══════════════════════════════════════════════════════
  {'id':161, 'cat':'jamvikt', 'q':'Le Chateliers princip: vid en störning förskjuts jämvikten för att ___ störningen.', 'a':'motverka', 'hint':'Systemet "kämpar tillbaka"'},
  {'id':162, 'cat':'jamvikt', 'q':'Jämviktskonstanten Kc uttrycks med ___ i täljaren.', 'a':'produkternas koncentrationer', 'hint':'K = [P]^p/[R]^r'},
  {'id':163, 'cat':'jamvikt', 'q':'K > 1 innebär att jämvikten ligger på ___ sidan.', 'a':'produkt-', 'hint':'Fler produkter än reaktanter vid jämvikt'},
  {'id':164, 'cat':'jamvikt', 'q':'K < 1 innebär att jämvikten ligger på ___ sidan.', 'a':'reaktant-', 'hint':'Mest reaktanter vid jämvikt'},
  {'id':165, 'cat':'jamvikt', 'q':'Om koncentrationen av en produkt ökar förskjuts jämvikten mot ___.', 'a':'reaktanterna (vänster)', 'hint':'Systemet motverkar ökningen'},
  {'id':166, 'cat':'jamvikt', 'q':'Ökad temperatur gynnar den ___ reaktionen.', 'a':'endoterma', 'hint':'Tillförd värme "konsumeras" av endotermen'},
  {'id':167, 'cat':'jamvikt', 'q':'Ökad temperatur ökar K för en endoterm reaktion och ___ K för en exoterm.', 'a':'minskar', 'hint':'K beror på temperatur'},
  {'id':168, 'cat':'jamvikt', 'q':'Haber-Bosch: N₂ + 3H₂ ⇌ 2NH₃. Ökat tryck gynnar ___ (färre gasmolekyler).', 'a':'produkterna (NH₃)', 'hint':'4 mol gas → 2 mol gas'},
  {'id':169, 'cat':'jamvikt', 'q':'En katalysator ändrar jämviktsläget ___.', 'a':'inte', 'hint':'Katalysator sänker Ea men påverkar inte K'},
  {'id':170, 'cat':'jamvikt', 'q':'Reaktionskvoten Q jämförs med K: om Q < K förskjuts reaktionen mot ___.', 'a':'produkterna', 'hint':'Reaktionen "springer ikapp" K'},
  {'id':171, 'cat':'jamvikt', 'q':'Sambandet: ΔG° = −RT ln ___.', 'a':'K', 'hint':'Kopplar termodynamik till jämviktskonstant'},
  {'id':172, 'cat':'jamvikt', 'q':'N₂ + 3H₂ ⇌ 2NH₃. Kc = [NH₃]² / ([N₂] × ___)³.', 'a':'[H₂]', 'hint':'Produkter i täljare, reaktanter i nämnare'},
  {'id':173, 'cat':'jamvikt', 'q':'Vid jämvikt är reaktionshastigheten för fram- och bakreaktion ___.', 'a':'lika', 'hint':'Dynamisk jämvikt – reaktionerna pågår'},
  {'id':174, 'cat':'jamvikt', 'q':'Tillsats av inergas (t.ex. Ar) vid konstant V ändrar jämviktsläge ___.', 'a':'inte', 'hint':'Partialtrycken ändras inte'},
  {'id':175, 'cat':'jamvikt', 'q':'För gasjämvikter används Kp som uttrycks med ___ istället för koncentrationer.', 'a':'partialtryck', 'hint':'Kp = Kc×(RT)^Δn för ideala gaser'},

# ══════════════════════════════════════════════════════
# TERMOKEMI  (cat: 'termokemi')
# ══════════════════════════════════════════════════════
  {'id':176, 'cat':'termokemi', 'q':'En reaktion som avger värme till omgivningen kallas ___.', 'a':'exoterm', 'hint':'ΔH < 0; temperaturen stiger'},
  {'id':177, 'cat':'termokemi', 'q':'En reaktion som tar upp värme från omgivningen kallas ___.', 'a':'endoterm', 'hint':'ΔH > 0; temperaturen sjunker'},
  {'id':178, 'cat':'termokemi', 'q':'q = mcΔT; den specifika värmekapaciteten för vatten är ___ J/(g·K).', 'a':'4,18', 'hint':'Vatten tar upp mycket värme'},
  {'id':179, 'cat':'termokemi', 'q':'Standardbildningsentalpin för ett fritt grundämne (H₂, Fe, C) är ___ kJ/mol.', 'a':'0', 'hint':'Referenspunkt för ΔH°f-tabeller'},
  {'id':180, 'cat':'termokemi', 'q':'Hess lag: ΔH beror bara på start- och ___, inte på reaktionsvägen.', 'a':'slutläge', 'hint':'Entalpi är en tillståndsfunktion'},
  {'id':181, 'cat':'termokemi', 'q':'ΔH°rxn = Σ ΔH°f(produkter) − Σ ΔH°f(___).' , 'a':'reaktanter', 'hint':'Hess lag via bildningsentalpier'},
  {'id':182, 'cat':'termokemi', 'q':'ΔG = ΔH − TΔS; vid ΔG < 0 är reaktionen ___ vid den temperaturen.', 'a':'spontan', 'hint':'Gibbs fria energi < 0 = spontan'},
  {'id':183, 'cat':'termokemi', 'q':'Entropi S är ett mått på systemets ___.', 'a':'oordning (eller energispridning)', 'hint':'Andra termodynamikens lag'},
  {'id':184, 'cat':'termokemi', 'q':'Om ΔH < 0 och ΔS > 0 är reaktionen ___ vid alla temperaturer.', 'a':'alltid spontan', 'hint':'Båda faktorerna gynnar ΔG < 0'},
  {'id':185, 'cat':'termokemi', 'q':'Aktiveringsenergi Ea är den ___ energi molekylerna måste ha för att reagera.', 'a':'lägsta/minsta', 'hint':'Tröskeln i energiprofilen'},
  {'id':186, 'cat':'termokemi', 'q':'En katalysator sänker ___ utan att ändra ΔH.', 'a':'aktiveringsenergin', 'hint':'Reaktionen går snabbare men ΔH oförändrat'},
  {'id':187, 'cat':'termokemi', 'q':'Avdunstning är ___ (tar upp/avger värme).', 'a':'tar upp värme (endoterm)', 'hint':'ΔH_vap > 0; kräver energi att bryta intermolekylkrafter'},
  {'id':188, 'cat':'termokemi', 'q':'Kondensation är ___ (ΔH < 0).', 'a':'exoterm', 'hint':'Värme avges när gas → vätska'},
  {'id':189, 'cat':'termokemi', 'q':'Kalorimeterns formel: ΔH_rxn = −q_kalorimeter / ___.', 'a':'n (mol reaktant)', 'hint':'Molar entalpi i kJ/mol'},
  {'id':190, 'cat':'termokemi', 'q':'Neutralisering av stark syra med stark bas ger ΔH ≈ ___ kJ/mol.', 'a':'−57', 'hint':'H⁺ + OH⁻ → H₂O, ΔH ≈ −57,3 kJ/mol'},

# ══════════════════════════════════════════════════════
# ORGANISK KEMI  (cat: 'organisk')
# ══════════════════════════════════════════════════════
  {'id':191, 'cat':'organisk', 'q':'Alkaner har formeln CₙH₂ₙ₊₂ och kallas ___ kolväten (inga fler H kan adderas).', 'a':'mättade', 'hint':'Endast enkelbindningar'},
  {'id':192, 'cat':'organisk', 'q':'Alkener har minst en ___ bindning (C=C).', 'a':'dubbel-', 'hint':'CₙH₂ₙ – π-bindning reaktiv'},
  {'id':193, 'cat':'organisk', 'q':'Alkyner har minst en ___ bindning (C≡C).', 'a':'trippel-', 'hint':'CₙH₂ₙ₋₂; acetylen = etyn'},
  {'id':194, 'cat':'organisk', 'q':'Bensen C₆H₆ är ett ___ kolväte med delokaliserade π-elektroner.', 'a':'aromatiskt', 'hint':'EAS-reaktioner, ej addition'},
  {'id':195, 'cat':'organisk', 'q':'Funktionell grupp −OH i organisk kemi kallas ___ grupp.', 'a':'hydroxyl-', 'hint':'Alkoholer har −OH'},
  {'id':196, 'cat':'organisk', 'q':'Funktionell grupp −COOH kallas ___ grupp.', 'a':'karboxyl-', 'hint':'Karboxylsyror; svaga syror'},
  {'id':197, 'cat':'organisk', 'q':'Alkohol + karboxylsyra → ___ + vatten.', 'a':'ester', 'hint':'Esterifiering; fruktig doft'},
  {'id':198, 'cat':'organisk', 'q':'Omvändningen av esterifiering (ester + vatten → syra + alkohol) kallas ___.', 'a':'hydrolys', 'hint':'Med syra; med bas kallas förs&aring;pning'},
  {'id':199, 'cat':'organisk', 'q':'Cis/trans-isomeri uppstår p.g.a. begränsad rotation kring ___ bindningen.', 'a':'dubbel-/C=C-', 'hint':'π-bindningen hindrar rotation'},
  {'id':200, 'cat':'organisk', 'q':'Molekyler som är varandras spegelbilder men ej överstallbara kallas ___.', 'a':'enantiomerer', 'hint':'Kiralitet; viktig i läkemedelskemi'},
  {'id':201, 'cat':'organisk', 'q':'Primär alkohol oxideras med K₂Cr₂O₇ först till ___, sedan till karboxylsyra.', 'a':'aldehyd', 'hint':'R-CH₂OH → R-CHO → R-COOH'},
  {'id':202, 'cat':'organisk', 'q':'Sekundär alkohol oxideras till ___.', 'a':'keton', 'hint':'R₂CHOH → R₂C=O'},
  {'id':203, 'cat':'organisk', 'q':'Alkaner reagerar med halogener (t.ex. Cl₂) via ___ reaktion (UV-ljus).', 'a':'radikal substitution', 'hint':'H ersätts av halogen'},
  {'id':204, 'cat':'organisk', 'q':'Etanol har kokpunkt 78°C pga ___ bindningar.', 'a':'vätebindningar', 'hint':'OH-gruppen bildar H-bindningar'},
  {'id':205, 'cat':'organisk', 'q':'IUPAC-namn på CH₃-CH₂-OH är ___.', 'a':'etanol', 'hint':'2 kol + -ol suffix'},
  {'id':206, 'cat':'organisk', 'q':'IUPAC-namn på CH₃-CO-CH₃ (aceton) är ___.', 'a':'propanon', 'hint':'3 kol + keton (-on)'},
  {'id':207, 'cat':'organisk', 'q':'Polymeren som bildas av etenmonomerer kallas ___.', 'a':'polyeten (PE)', 'hint':'Additionspolymer'},
  {'id':208, 'cat':'organisk', 'q':'Fetter är estrar av glycerol och ___.', 'a':'fettsyror', 'hint':'Hydrolys ger glycerol + fettsyror'},

# ══════════════════════════════════════════════════════
# LÖSNINGAR & KONCENTRATION  (cat: 'losningar')
# ══════════════════════════════════════════════════════
  {'id':209, 'cat':'losningar', 'q':'Molär koncentration: c = n / ___.', 'a':'V', 'hint':'V i liter; enheten mol/L'},
  {'id':210, 'cat':'losningar', 'q':'Spädningsekvationen: c₁V₁ = ___.', 'a':'c₂V₂', 'hint':'Molmängden är bevarad vid spädning'},
  {'id':211, 'cat':'losningar', 'q':'"Lika löser lika" – NaCl (polärt/jonbindning) löser sig i ___.', 'a':'vatten (polart lösningsmedel)', 'hint':'Vatten hydratiserar jonerna'},
  {'id':212, 'cat':'losningar', 'q':'Beer-Lamberts lag: A = ε × c × ___.', 'a':'l', 'hint':'l = ljusvägens längd i cm'},
  {'id':213, 'cat':'losningar', 'q':'Beer-Lamberts lag: A = log(___ / I).', 'a':'I₀', 'hint':'A = log(infallande/transmitterat ljus)'},
  {'id':214, 'cat':'losningar', 'q':'Om Q > Ksp sker ___ av det svårlösliga saltet.', 'a':'utfällning', 'hint':'Lösningen är övermättad'},
  {'id':215, 'cat':'losningar', 'q':'Ksp = [Ag⁺][Cl⁻] för AgCl ≈ 1,8×10⁻¹⁰. Lösligheten s ≈ ___ mol/L.', 'a':'1,34×10⁻⁵', 'hint':'s = √Ksp = √(1,8×10⁻¹⁰)'},
  {'id':216, 'cat':'losningar', 'q':'Gemensam-joneffekten: lösligheten av AgCl ___ om NaCl tillsätts.', 'a':'minskar', 'hint':'Cl⁻ ökar → Q > Ksp → utfällning'},
  {'id':217, 'cat':'losningar', 'q':'1 ppm i vattenlösning ≈ ___ mg/L.', 'a':'1', 'hint':'Parts per million'},
  {'id':218, 'cat':'losningar', 'q':'Fryspunktssänkning: ΔTf = Kf × m; Kf(vatten) = ___ °C·kg/mol.', 'a':'1,86', 'hint':'Används för antifrysmedel'},
  {'id':219, 'cat':'losningar', 'q':'Kokpunktshöjning: ΔTb = Kb × m; Kb(vatten) = ___ °C·kg/mol.', 'a':'0,512', 'hint':'Saltat vatten kokar vid lite högre T'},
  {'id':220, 'cat':'losningar', 'q':'SAV-regeln: häll alltid ___ i vattnet, aldrig vatten i stark syra.', 'a':'syran', 'hint':'Undviker stänkrisken (starkexoterm)'},
  {'id':221, 'cat':'losningar', 'q':'Bereda 500 mL 0,10 mol/L HCl från 12 mol/L: V₁ = 0,10×0,500/12 = ___ mL.', 'a':'4,2', 'hint':'c₁V₁ = c₂V₂ → V₁ = c₂V₂/c₁'},
  {'id':222, 'cat':'losningar', 'q':'Osmotiskt tryck π = MRT; blodsplasmans osmolaritet ≈ 0,30 mol/L → π ≈ ___ atm.', 'a':'7,3', 'hint':'π = 0,30 × 0,0821 × 310 ≈ 7,6 atm'},

# ══════════════════════════════════════════════════════
# LABORATIV KEMI & SÄKERHET  (cat: 'labsak')
# ══════════════════════════════════════════════════════
  {'id':223, 'cat':'labsak', 'q':'GHS-piktogrammet dödskalle indikerar ___.', 'a':'akut toxicitet (hög)', 'hint':'HCN, arsenik – livsfarligt'},
  {'id':224, 'cat':'labsak', 'q':'GHS-piktogrammet med frätande vätska indikerar ___.', 'a':'frätande (korrosivt)', 'hint':'H₂SO₄, NaOH – fräter hud och material'},
  {'id':225, 'cat':'labsak', 'q':'Skyddsglasögon är ___ vid alla laborationsmoment med kemikalier.', 'a':'obligatoriska', 'hint':'Ögon kan inte regenereras lika lätt som hud'},
  {'id':226, 'cat':'labsak', 'q':'Vid stänk av frätande ämne i ögat: skölj omedelbart i ___ minuter.', 'a':'15', 'hint':'Lång sköljning minskar skadan drastiskt'},
  {'id':227, 'cat':'labsak', 'q':'Analytisk våg har noggrannhet ±___ g.', 'a':'0,0001', 'hint':'4 decimaler; används för exakt inväging'},
  {'id':228, 'cat':'labsak', 'q':'Byrettens avläsningsnoggrannhet är ±___ mL.', 'a':'0,05', 'hint':'Avläs med 0,01 mL-precision, fel ±0,05'},
  {'id':229, 'cat':'labsak', 'q':'Menisken i byrett/mätkolv avläses vid ___ nivån.', 'a':'nedre (konkava)', 'hint':'I ögonhöjd för att undvika paralaxfel'},
  {'id':230, 'cat':'labsak', 'q':'Rf-värdet i TLC = (avstånd substansen vandrat) / ___.', 'a':'avstånd lösningsfronten vandrat', 'hint':'Rf mellan 0 och 1'},
  {'id':231, 'cat':'labsak', 'q':'Systematiska fel påverkar alla mätningar i ___ riktning.', 'a':'samma', 'hint':'T.ex. felkalibrerad våg – alltid för hög/låg'},
  {'id':232, 'cat':'labsak', 'q':'Slumpmässiga fel minskas effektivast genom ___.', 'a':'upprepade mätningar', 'hint':'Medelvärde och standardavvikelse'},
  {'id':233, 'cat':'labsak', 'q':'All hantering av flyktiga/giftiga kemikalier sker i ___.', 'a':'dragskåp (frånluftskåpa)', 'hint':'Frånluften skyddar mot inandning'},
  {'id':234, 'cat':'labsak', 'q':'Titreringens syfte är att bestämma ___ hos en okänd lösning.', 'a':'koncentrationen', 'hint':'Via ekvivalenspunkten och känd titrant'},
  {'id':235, 'cat':'labsak', 'q':'Gravimetrisk analys bestämmer mängden via ___.', 'a':'vägning', 'hint':'T.ex. fällning + filtrering + torkning + vägning'},
  {'id':236, 'cat':'labsak', 'q':'En labrapports diskussionsdel ska innehålla tolkning av resultat och analys av ___.', 'a':'felkällor', 'hint':'Varför avviker resultaten från teorin?'},

# ══════════════════════════════════════════════════════
# TEORIFÖRSTÅELSE – PROVFRÅGOR  (cat: 'prov')
# ══════════════════════════════════════════════════════
  {'id':237, 'cat':'prov', 'q':'Varför är natriumklorid (NaCl) hårt men sprött? – Gittret spricker när lika laddade joner hamnar bredvid varandra vid ___.', 'a':'förskjutning', 'hint':'Katjon bredvid katjon → repulsion → spricka'},
  {'id':238, 'cat':'prov', 'q':'Varför leder NaCl el i smält form men inte i fast form? – I smält form är jonerna ___.', 'a':'rörliga/fria', 'hint':'Fast gitter låser jonerna'},
  {'id':239, 'cat':'prov', 'q':'Varför är vattnets kokpunkt (100°C) så mycket högre än H₂S (−60°C)? – Tack vare ___ i vatten.', 'a':'vätebindningar', 'hint':'O är tillräckligt elektronegativt; S inte'},
  {'id':240, 'cat':'prov', 'q':'CO₂ har polära C=O-bindningar men är en opolar molekyl. Orsak: molekylens geometri är ___.', 'a':'linjär', 'hint':'Dipolerna tar ut varandra i linjär geometri'},
  {'id':241, 'cat':'prov', 'q':'H₂O är polärt trots att det liknar CO₂. Orsak: H₂O har ___ geometri.', 'a':'vinkelformad', 'hint':'104,5° – dipolerna adderas'},
  {'id':242, 'cat':'prov', 'q':'Varför sjunker is i de flesta vätskor men flyter i vatten? – Isen är ___ tätt packad pga vätebindningarnas hexagonala struktur.', 'a':'mindre', 'hint':'Is har lägre densitet än flytande vatten'},
  {'id':243, 'cat':'prov', 'q':'pH i 0,010 mol/L HCl-lösning är ___ (stark syra, fullständigt dissocierad).', 'a':'2', 'hint':'pH = −log(0,010) = −log(10⁻²) = 2'},
  {'id':244, 'cat':'prov', 'q':'pH i 0,0010 mol/L NaOH är ___. (pOH = 3, pH = 14 − 3 = ___)', 'a':'11', 'hint':'[OH⁻] = 0,001 → pOH = 3 → pH = 11'},
  {'id':245, 'cat':'prov', 'q':'En buffert av ättiksyra (pKa=4,74) och natriumacetat 1:1 har pH = ___.', 'a':'4,74', 'hint':'Henderson-Hasselbalch: pH = pKa + log(1/1) = pKa'},
  {'id':246, 'cat':'prov', 'q':'Vid titrering av svag syra med stark bas är pH vid ekvivalenspunkten ___ 7.', 'a':'över', 'hint':'Salt av svag syra + stark bas hydrolyserar basiskt'},
  {'id':247, 'cat':'prov', 'q':'Haber-Bosch körs vid ~450°C trots att lägre T ger bättre utbyte. Orsaken är att lägre T ger för låg ___.', 'a':'reaktionshastighet', 'hint':'Kinetik vs termodynamik – kompromiss'},
  {'id':248, 'cat':'prov', 'q':'Bensen genomgår substitution (EAS), inte addition. Orsaken: addition skulle bryta den ___ stabiliteten.', 'a':'aromatiska', 'hint':'150 kJ/mol extra stabilitet'},
  {'id':249, 'cat':'prov', 'q':'Varför ökar kokpunkten med kolkedjans längd hos alkaner? – Starkare ___ krafter vid större molmassa.', 'a':'London-dispersions-', 'hint':'Fler elektroner = lättare att polarisera'},
  {'id':250, 'cat':'prov', 'q':'ΔG = ΔH − TΔS. En reaktion med ΔH > 0 och ΔS > 0 är spontan vid ___ temperatur.', 'a':'hög', 'hint':'Vid hög T dominerar TΔS-termen'},
  {'id':251, 'cat':'prov', 'q':'Zink skyddar järn i galvanisering pga att Zn är mer ___ än Fe.', 'a':'reaktivt/aktivt', 'hint':'Zn oxideras preferentiellt – offermetall'},
  {'id':252, 'cat':'prov', 'q':'Varför ger 1 mol NaCl dubbelt så stor fryspunktssänkning som 1 mol glukos? – NaCl dissocierar till ___ partiklar.', 'a':'2', 'hint':'Na⁺ + Cl⁻ = 2 partiklar per formelenhet'},
  {'id':253, 'cat':'prov', 'q':'Ke för H₂O(l) ⇌ H⁺(aq) + OH⁻(aq) kallas Kw = ___ vid 25°C.', 'a':'1,0×10⁻¹⁴', 'hint':'pH + pOH = 14 följer av detta'},
  {'id':254, 'cat':'prov', 'q':'En svag syra med Ka = 1,0×10⁻⁵ har pKa = ___.', 'a':'5', 'hint':'pKa = −log(Ka)'},
  {'id':255, 'cat':'prov', 'q':'Alkohol + syra ⇌ ester + vatten. För att driva reaktionen framåt kan man ta bort ___.', 'a':'vatten (eller estern)', 'hint':'Le Chatelier – ta bort produkt'},
  {'id':256, 'cat':'prov', 'q':'Den empiriska formeln för glukos C₆H₁₂O₆ är ___.', 'a':'CH₂O', 'hint':'Dela alla index med 6'},
  {'id':257, 'cat':'prov', 'q':'Reaktionen Fe + 2HCl → FeCl₂ + H₂. Oxidationstalet för Fe ändras från 0 till ___.', 'a':'+2', 'hint':'Fe → Fe²⁺: oxidation'},
  {'id':258, 'cat':'prov', 'q':'Varför kan inte aluminiumfolie lösas upp av utspädd saltsyra men väl av NaOH? – Al₂O₃-skiktet löses i ___ men skyddas av HCl.', 'a':'bas (NaOH)', 'hint':'Al är amfoteriskt – löses i starka baser'},
  {'id':259, 'cat':'prov', 'q':'Beräkna massa Fe₂O₃ som bildas av 2,0 mol Fe: 4Fe + 3O₂ → 2Fe₂O₃. n(Fe₂O₃) = 2,0×(2/4) = ___ mol.', 'a':'1,0', 'hint':'Koefficienter ger molförhållande 4:2 = 2:1'},
  {'id':260, 'cat':'prov', 'q':'Vad händer med jämvikten N₂ + 3H₂ ⇌ 2NH₃ om volymen halveras? – Jämvikten förskjuts mot ___ (färre gasmolekyler).', 'a':'NH₃ (produkterna/höger)', 'hint':'Halverad volym = dubblat tryck → Le Chatelier'},

]

# ── Bygg JS-strängar ───────────────────────────────────────────────────────────
def js_str(s):
    return "'" + str(s).replace('\\', '\\\\').replace("'", "\\'") + "'"

lines = []
for q in new_questions:
    parts = [
        f"id:{q['id']}",
        f"cat:{js_str(q['cat'])}",
        f"q:{js_str(q['q'])}",
        f"a:{js_str(q['a'])}",
        f"hint:{js_str(q['hint'])}",
    ]
    lines.append('  {' + ', '.join(parts) + '}')

new_js = ',\n'.join(lines)

# ── Infoga i HTML före stängande ]; av CLOZE_DATA ─────────────────────────────
CLOZE_END = '];\n\nconst CLOZE_CATS'
idx = html.find(CLOZE_END)
if idx == -1:
    print("ERROR: kunde inte hitta CLOZE_END!")
    import sys; sys.exit(1)

# Lägg till komma + nya frågor
html = html[:idx] + ',\n' + new_js + '\n' + html[idx:]

# ── Lägg till nya kategorier i CLOZE_CATS ─────────────────────────────────────
OLD_CATS = """const CLOZE_CATS = {
  syrabas:    {icon:'⚗️', label:'Syra-bas begrepp'},
  grundamnen: {icon:'⚛️', label:'Grundamnen'},
  syrorBaser: {icon:'🧪', label:'Syror & baser'},
  bindning:   {icon:'🔗', label:'Bindning & struktur'},
};"""

NEW_CATS = """const CLOZE_CATS = {
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
};"""

if OLD_CATS in html:
    html = html.replace(OLD_CATS, NEW_CATS)
    print("CLOZE_CATS uppdaterat med 9 nya kategorier")
else:
    print("WARNING: CLOZE_CATS hittades inte – kontrollera manuellt")

# ── Skriv ──────────────────────────────────────────────────────────────────────
with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"Nya frågor tillagda: {len(new_questions)}")
print(f"Filstorlek: {len(html)} chars / {len(html.encode('utf-8'))//1024} KB")
