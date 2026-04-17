# -*- coding: utf-8 -*-
import sys, re
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()

new_questions = [

# ══════════════════════════════════════════════════════════════════════
# STÖKIOMETRI & MOL  – utökad  (id 301–360)
# ══════════════════════════════════════════════════════════════════════
  {'id':301,'cat':'stoikiometri','q':'Formeln för substansmängd: n = ___ / M.','a':'m','hint':'n i mol, m i gram, M i g/mol'},
  {'id':302,'cat':'stoikiometri','q':'1 mol av vilket ämne som helst innehåller ___ partiklar.','a':'6,022×10²³','hint':'Avogadros tal – alltid samma antal'},
  {'id':303,'cat':'stoikiometri','q':'Molmassan för Al är ___ g/mol.','a':'27','hint':'Atomnummer 13, period 3'},
  {'id':304,'cat':'stoikiometri','q':'Molmassan för Fe är ___ g/mol.','a':'56','hint':'Järn – vanligast i jordskorpan'},
  {'id':305,'cat':'stoikiometri','q':'Molmassan för Cu är ___ g/mol.','a':'63,5','hint':'Koppar – elektrisk ledare'},
  {'id':306,'cat':'stoikiometri','q':'Molmassan för H₂SO₄ är ___ g/mol.','a':'98','hint':'2+32+64 = 98'},
  {'id':307,'cat':'stoikiometri','q':'Molmassan för Ca(OH)₂ är ___ g/mol.','a':'74','hint':'40 + 2×(16+1) = 74'},
  {'id':308,'cat':'stoikiometri','q':'Molmassan för KMnO₄ är ___ g/mol.','a':'158','hint':'39+55+4×16 = 158'},
  {'id':309,'cat':'stoikiometri','q':'Molmassan för C₆H₁₂O₆ (glukos) är ___ g/mol.','a':'180','hint':'6×12 + 12×1 + 6×16 = 180'},
  {'id':310,'cat':'stoikiometri','q':'n(Fe) = 112 g / 56 g/mol = ___ mol.','a':'2,0','hint':'n = m/M'},
  {'id':311,'cat':'stoikiometri','q':'m(NaOH) om n = 0,50 mol: m = 0,50 × ___ = 20 g.','a':'40','hint':'M(NaOH) = 23+16+1 = 40 g/mol'},
  {'id':312,'cat':'stoikiometri','q':'Antal molekyler i 2,0 mol CO₂ = 2,0 × 6,022×10²³ = ___.','a':'1,204×10²⁴','hint':'N = n × Nₐ'},
  {'id':313,'cat':'stoikiometri','q':'Reaktionen 2H₂ + O₂ → 2H₂O: koefficienten för H₂ är ___.','a':'2','hint':'Balansera väte och syre'},
  {'id':314,'cat':'stoikiometri','q':'2H₂ + O₂ → 2H₂O: för varje mol O₂ bildas ___ mol H₂O.','a':'2','hint':'Molförhållande 1:2'},
  {'id':315,'cat':'stoikiometri','q':'Procentuell sammansättning av Fe i Fe₂O₃: (2×56/160)×100 = ___ %.','a':'70','hint':'M(Fe₂O₃) = 2×56 + 3×16 = 160'},
  {'id':316,'cat':'stoikiometri','q':'Procentuell sammansättning av N i NH₃: (14/17)×100 ≈ ___ %.','a':'82','hint':'M(NH₃) = 14+3 = 17'},
  {'id':317,'cat':'stoikiometri','q':'Empirisk formel: 40%C, 6,7%H, 53,3%O → n(C)=3,33, n(H)=6,7, n(O)=3,33. Kvot C:H:O = ___.','a':'1:2:1','hint':'Dela med minsta: 3,33/3,33=1, 6,7/3,33≈2'},
  {'id':318,'cat':'stoikiometri','q':'En förening har empirisk formel CH₂O och molmassa 180 g/mol. Molekylformel = ___.','a':'C₆H₁₂O₆','hint':'180/30 = 6 → multiplicera empirisk formel med 6'},
  {'id':319,'cat':'stoikiometri','q':'STP: 1 mol gas = 22,4 L. Volym av 0,25 mol N₂ vid STP = ___ L.','a':'5,6','hint':'V = n × 22,4'},
  {'id':320,'cat':'stoikiometri','q':'n(CO₂) om V = 11,2 L vid STP: n = 11,2/22,4 = ___ mol.','a':'0,50','hint':'n = V/22,4'},
  {'id':321,'cat':'stoikiometri','q':'4Fe + 3O₂ → 2Fe₂O₃. Från 4,0 mol Fe bildas ___ mol Fe₂O₃.','a':'2,0','hint':'Koefficienter 4:2 → halvera antalet mol'},
  {'id':322,'cat':'stoikiometri','q':'4Fe + 3O₂ → 2Fe₂O₃. Massa Fe₂O₃ från 4,0 mol Fe: n=2,0 mol × 160 g/mol = ___ g.','a':'320','hint':'m = n × M(Fe₂O₃)'},
  {'id':323,'cat':'stoikiometri','q':'Begränsande reagens: 3,0 mol H₂ + 1,0 mol N₂ → NH₃. H₂ ger 2,0 mol NH₃, N₂ ger 2,0 mol NH₃. Inget begränsar – exakt ___:___ förhållande.','a':'3:1','hint':'N₂+3H₂→2NH₃ kräver 3:1-förhållande'},
  {'id':324,'cat':'stoikiometri','q':'Begränsande reagens: 2,0 mol H₂ + 2,0 mol O₂ → H₂O (2H₂+O₂→2H₂O). H₂/2=1,0; O₂/1=2,0. Begränsande reagens: ___.','a':'H₂','hint':'Lägst kvot mol/koefficient → begränsar'},
  {'id':325,'cat':'stoikiometri','q':'Teoretiskt utbyte: 5,0 mol begränsat reagens ger max ___ mol produkt (1:1-förhållande).','a':'5,0','hint':'Koefficienter 1:1'},
  {'id':326,'cat':'stoikiometri','q':'Verkligt utbyte 32 g, teoretiskt 40 g. Procentuellt utbyte = ___ %.','a':'80','hint':'32/40 × 100 = 80'},
  {'id':327,'cat':'stoikiometri','q':'Titrering: c(HCl)×V(HCl) = c(NaOH)×V(NaOH). c(NaOH) = 0,100×20,0/25,0 = ___ mol/L.','a':'0,080','hint':'c₁V₁ = c₂V₂ vid 1:1-reaktion'},
  {'id':328,'cat':'stoikiometri','q':'n(HCl) om c=0,200 mol/L, V=50,0 mL: n = 0,200 × 0,0500 = ___ mol.','a':'0,0100','hint':'n = c×V (V i liter!)'},
  {'id':329,'cat':'stoikiometri','q':'Massa H₂O som bildas av 4,0 g H₂ (M=2): n(H₂)=2,0 mol → n(H₂O)=2,0 mol → m = 2,0×18 = ___ g.','a':'36','hint':'2H₂ + O₂ → 2H₂O, 1:1-förhållande H₂:H₂O'},
  {'id':330,'cat':'stoikiometri','q':'Massabevarandelagen innebär att summan av reaktanternas massor ___ summan av produkternas massor.','a':'är lika med','hint':'Atomer varken skapas eller förstörs'},
  {'id':331,'cat':'stoikiometri','q':'Reaktionen CaCO₃ → CaO + CO₂. Massa CO₂ från 50 g CaCO₃ (M=100): n=0,50 mol → m(CO₂) = 0,50×44 = ___ g.','a':'22','hint':'1:1-förhållande CaCO₃:CO₂'},
  {'id':332,'cat':'stoikiometri','q':'Halten koldioxid i luft ≈ 420 ppm, dvs 420 molekyler CO₂ per ___ luftmolekyler.','a':'1 000 000','hint':'ppm = parts per million'},
  {'id':333,'cat':'stoikiometri','q':'Förbränning av 1,0 mol oktan C₈H₁₈: C₈H₁₈ + 12,5O₂ → 8CO₂ + 9H₂O. Mol CO₂ = ___.','a':'8','hint':'Koefficient 8 framför CO₂'},
  {'id':334,'cat':'stoikiometri','q':'m(CO₂) från 1,0 mol oktan: 8,0 mol × 44 g/mol = ___ g.','a':'352','hint':'m = n × M'},
  {'id':335,'cat':'stoikiometri','q':'Elektrolys av vatten: 2H₂O → 2H₂ + O₂. Volym O₂ vid STP från 4,0 mol H₂O: n(O₂)=2,0 mol → V = ___ L.','a':'44,8','hint':'V = 2,0 × 22,4'},
  {'id':336,'cat':'stoikiometri','q':'Om utbytet är 75%, och man vill ha 30 g produkt (M=60), behöver man teoretiskt ___ mol produkt att sikta på.','a':'0,667','hint':'Behov = 30/60/0,75 mol praktiskt; teoretiskt n=30/60=0,50 mol → sikta på 0,50/0,75'},
  {'id':337,'cat':'stoikiometri','q':'Densitet 1,19 g/mL, 37% HCl (m/m). c = (1190×0,37)/36,5 = ___ mol/L ≈ 12 mol/L.','a':'12','hint':'c = (ρ × w × 1000)/M'},
  {'id':338,'cat':'stoikiometri','q':'Reaktionsschema ska alltid vara balanserat pga lagen om ___.','a':'massans bevarande','hint':'Atomer skapas/förstörs ej'},
  {'id':339,'cat':'stoikiometri','q':'En mol elektroner kallas ___ (används i elektrokemi).','a':'ett Faraday (F = 96 485 C/mol)','hint':'F = Nₐ × e'},
  {'id':340,'cat':'stoikiometri','q':'Avogadros lag: vid samma T och p innehåller 1 L av valfri idealgas ___ antal mol.','a':'samma','hint':'Grunden för molär volym vid STP'},

# ══════════════════════════════════════════════════════════════════════
# KEMISK JÄMVIKT – utökad  (id 361–420)
# ══════════════════════════════════════════════════════════════════════
  {'id':361,'cat':'jamvikt','q':'Vid kemisk jämvikt är koncentrationerna av reaktanter och produkter ___, inte noll.','a':'konstanta','hint':'Dynamisk jämvikt – reaktionerna pågår'},
  {'id':362,'cat':'jamvikt','q':'Jämviktskonstanten Kc är ___ av koncentrationerna vid jämvikt.','a':'kvoten (produkter/reaktanter)','hint':'K = [P]ᵖ/[R]ʳ'},
  {'id':363,'cat':'jamvikt','q':'aA + bB ⇌ cC + dD: Kc = [C]^c × [D]^d / ([A]^a × [B]^___)','a':'b','hint':'Koefficienter blir exponenter'},
  {'id':364,'cat':'jamvikt','q':'N₂ + 3H₂ ⇌ 2NH₃: Kc = [NH₃]² / ([N₂] × [H₂]^___).','a':'3','hint':'Koefficient 3 för H₂ → exponent 3'},
  {'id':365,'cat':'jamvikt','q':'H₂ + I₂ ⇌ 2HI: vid jämvikt [H₂]=0,40, [I₂]=0,40, [HI]=3,2 mol/L. Kc = 3,2² / (0,40×0,40) = ___.','a':'64','hint':'Kc = [HI]²/([H₂][I₂])'},
  {'id':366,'cat':'jamvikt','q':'Reaktionen 2SO₂ + O₂ ⇌ 2SO₃: Kc = [SO₃]² / ([SO₂]² × [___]).','a':'O₂','hint':'Alla reaktanter i nämnaren'},
  {'id':367,'cat':'jamvikt','q':'Om K = 10⁶ är reaktionen nästan ___ fullständig åt höger.','a':'helt/fullständigt','hint':'Stor K → nästan all reaktant omvandlas'},
  {'id':368,'cat':'jamvikt','q':'Om K = 10⁻⁶ är reaktionen nästan ___ åt höger.','a':'inte alls förskjuten (dominerar reaktanter)','hint':'Liten K → mest reaktanter kvar'},
  {'id':369,'cat':'jamvikt','q':'Le Chateliers princip: om man tillsätter mer av en reaktant förskjuts jämvikten mot ___.','a':'produkterna (höger)','hint':'Systemet konsumerar det tillsatta'},
  {'id':370,'cat':'jamvikt','q':'Le Chatelier: om man tar bort en produkt förskjuts jämvikten mot ___.','a':'produkterna (höger)','hint':'Systemet ersätter det borttagna'},
  {'id':371,'cat':'jamvikt','q':'Le Chatelier: om temperaturen höjs gynnas den ___ reaktionen.','a':'endoterma','hint':'Värme "konsumeras" av endotermen'},
  {'id':372,'cat':'jamvikt','q':'Le Chatelier: om temperaturen sänks gynnas den ___ reaktionen.','a':'exoterma','hint':'Systemet "producerar" värme för att ersätta'},
  {'id':373,'cat':'jamvikt','q':'N₂ + 3H₂ ⇌ 2NH₃ är exoterm. Hög temperatur ger ___ K och ___ utbyte av NH₃.','a':'lägre K och lägre utbyte','hint':'Hög T gynnar bakåtreaktionen (endoterm)'},
  {'id':374,'cat':'jamvikt','q':'N₂ + 3H₂ ⇌ 2NH₃: 4 mol gas → 2 mol gas. Ökat tryck gynnar ___.','a':'NH₃ (färre gasmolekyler, höger)','hint':'Le Chatelier: minska gasvolym → mot sidan med färre mol gas'},
  {'id':375,'cat':'jamvikt','q':'CO₂(g) + H₂(g) ⇌ CO(g) + H₂O(g): lika antal mol gas på varje sida. Ökat tryck påverkar jämvikten ___.','a':'inte','hint':'Samma antal mol gas → trycket spelar ingen roll'},
  {'id':376,'cat':'jamvikt','q':'En katalysator gör att jämvikt nås ___ men ändrar inte K.','a':'snabbare','hint':'Ea sänks för båda riktningarna lika mycket'},
  {'id':377,'cat':'jamvikt','q':'Reaktionskvoten Q: om Q < K reagerar systemet mot ___ för att nå jämvikt.','a':'produkterna (höger)','hint':'Behöver bilda mer produkt för att nå K'},
  {'id':378,'cat':'jamvikt','q':'Reaktionskvoten Q: om Q > K reagerar systemet mot ___ för att nå jämvikt.','a':'reaktanterna (vänster)','hint':'Produkterna bryts ner tills Q = K'},
  {'id':379,'cat':'jamvikt','q':'Om man multiplicerar en reaktion med faktor 2, blir det nya K = K_gammal^___.','a':'2','hint':'K(ny) = K(gammal)^n där n är faktorn'},
  {'id':380,'cat':'jamvikt','q':'Om man vänder på en reaktion (A⇌B → B⇌A) blir det nya K = ___ / K_gammal.','a':'1','hint':'K(omvänd) = 1/K(framåt)'},
  {'id':381,'cat':'jamvikt','q':'Kp används för gasjämvikter och uttrycks med ___ istället för mol/L.','a':'partialtryck','hint':'Kp relaterat till Kc via (RT)^Δn'},
  {'id':382,'cat':'jamvikt','q':'Haber-Bosch körs vid ~450°C fastän lägre T ger mer NH₃. Orsak: lägre T ger för låg ___.','a':'reaktionshastighet','hint':'Kinetik vs termodynamik – kompromiss'},
  {'id':383,'cat':'jamvikt','q':'Haber-Bosch körs vid ~200 atm fastän normalt tryck vore säkrare. Orsak: högt tryck ger ___ utbyte.','a':'bättre/högre','hint':'Fler gasmolekyler på vänster → högt tryck gynnar höger'},
  {'id':384,'cat':'jamvikt','q':'Järn används som katalysator i Haber-Bosch för att ___.','a':'öka reaktionshastigheten','hint':'Katalysator sänker aktiveringsenergi'},
  {'id':385,'cat':'jamvikt','q':'CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻: ökad CO₂ i havsvatten (surt regn) förskjuter jämvikten mot ___.','a':'H⁺ (surare hav)','hint':'Le Chatelier – mer CO₂ → mer syra'},
  {'id':386,'cat':'jamvikt','q':'Ksp är jämviktskonstanten för ___ av ett svårlösligt salt.','a':'upplösningen','hint':'Ksp gäller vid mättad lösning'},
  {'id':387,'cat':'jamvikt','q':'Kw = [H⁺][OH⁻] = 1,0×10⁻¹⁴ är jämviktskonstanten för vattnets ___.','a':'autoprotolys (självjonisering)','hint':'2H₂O ⇌ H₃O⁺ + OH⁻'},
  {'id':388,'cat':'jamvikt','q':'Ka för en svag syra är ett specialfall av Kc för jämvikten HA ⇌ H⁺ + ___.','a':'A⁻','hint':'Konjugatbasen'},
  {'id':389,'cat':'jamvikt','q':'Stora Ka (litet pKa) → ___ syra.','a':'stark','hint':'Mer dissocierad → mer H⁺'},
  {'id':390,'cat':'jamvikt','q':'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]). När [A⁻]=[HA] är pH = ___.','a':'pKa','hint':'log(1) = 0'},
  {'id':391,'cat':'jamvikt','q':'Buffert fungerar bäst i intervallet pH = pKa ± ___.','a':'1','hint':'Utanför detta intervall är buffertkapaciteten dålig'},
  {'id':392,'cat':'jamvikt','q':'En fosfatbuffert (pKa₂=7,2) är lämplig för att hålla pH nära ___.','a':'7,2','hint':'Buffert fungerar bäst vid pH ≈ pKa'},
  {'id':393,'cat':'jamvikt','q':'Blodets pH hålls konstant av tre buffersystem: bikarbonat/kolsyra, fosfat och ___.','a':'proteiner (hemoglobin)','hint':'Proteiners aminosyrarester fungerar som buffertar'},
  {'id':394,'cat':'jamvikt','q':'Ka × Kb = ___ (för konjugatpar i vatten vid 25°C).','a':'Kw = 1,0×10⁻¹⁴','hint':'Kopplar syrans och basens konstanter'},
  {'id':395,'cat':'jamvikt','q':'pKa(ättiksyra)=4,74. Ka = 10^(−4,74) ≈ ___.','a':'1,8×10⁻⁵','hint':'Ka = 10^(−pKa)'},
  {'id':396,'cat':'jamvikt','q':'Reaktionen 2NO₂(g) ⇌ N₂O₄(g): Kc = [N₂O₄] / [NO₂]^___. Vilket värde är exponenten?','a':'2','hint':'Koefficienten 2 framför NO₂ ger exponent 2'},
  {'id':397,'cat':'jamvikt','q':'CaCO₃(s) ⇌ CaO(s) + CO₂(g): Kc = [___] (fasta ämnen ingår inte).','a':'CO₂','hint':'Fasta och rena vätskor utelämnas ur K-uttrycket'},
  {'id':398,'cat':'jamvikt','q':'Jämvikt nås snabbare vid ___ temperatur men K-värdet ändras.','a':'högre','hint':'Högre T → snabbare kinetik, men K beror på T'},
  {'id':399,'cat':'jamvikt','q':'Principen om Le Chatelier är ett sätt att förutsäga ___ av en jämvikt.','a':'förskjutningen','hint':'Hur systemet reagerar på störning'},
  {'id':400,'cat':'jamvikt','q':'Om Kc = 1 ligger jämvikten ___.','a':'precis mitt emellan reaktanter och produkter','hint':'Lika mängd produkter och reaktanter (ungefär)'},

# ══════════════════════════════════════════════════════════════════════
# LÖSNINGAR & KONCENTRATION – utökad  (id 421–490)
# ══════════════════════════════════════════════════════════════════════
  {'id':421,'cat':'losningar','q':'c = n/V: om n = 0,25 mol och V = 500 mL = 0,500 L, är c = ___ mol/L.','a':'0,50','hint':'c = 0,25/0,500'},
  {'id':422,'cat':'losningar','q':'n = c × V: om c = 2,0 mol/L och V = 250 mL, är n = ___ mol.','a':'0,50','hint':'n = 2,0 × 0,250'},
  {'id':423,'cat':'losningar','q':'m = c × V × M: massa NaCl i 200 mL av 1,5 mol/L: m = 1,5 × 0,200 × 58,5 = ___ g.','a':'17,6','hint':'Räkna steg för steg'},
  {'id':424,'cat':'losningar','q':'Spädning: c₁V₁ = c₂V₂. c₁=6,0 M, V₁=?, c₂=0,30 M, V₂=500 mL → V₁ = ___ mL.','a':'25','hint':'V₁ = c₂V₂/c₁ = 0,30×500/6,0'},
  {'id':425,'cat':'losningar','q':'Du tar 10 mL av 5,0 M HCl och späder till 250 mL. Ny koncentration = ___ mol/L.','a':'0,20','hint':'c₂ = c₁V₁/V₂ = 5,0×0,010/0,250'},
  {'id':426,'cat':'losningar','q':'Lösningsentalpin för NH₄NO₃ är positiv (endoterm). Lösningen ___ temperaturen.','a':'sänker','hint':'Endoterm process tar upp värme från omgivningen'},
  {'id':427,'cat':'losningar','q':'Lösningsentalpin för NaOH är negativ (exoterm). Lösningen ___ temperaturen.','a':'höjer','hint':'Exoterm process avger värme till lösningen'},
  {'id':428,'cat':'losningar','q':'Löslighetsprodukten Ksp = [Ca²⁺][CO₃²⁻] för CaCO₃ = 3,3×10⁻⁹. Lösligheten s = √(3,3×10⁻⁹) ≈ ___ mol/L.','a':'5,7×10⁻⁵','hint':'s = √Ksp för 1:1-salt'},
  {'id':429,'cat':'losningar','q':'Ksp(BaSO₄) = 1,1×10⁻¹⁰. s = √(1,1×10⁻¹⁰) ≈ ___ mol/L.','a':'1,05×10⁻⁵','hint':'s = √Ksp'},
  {'id':430,'cat':'losningar','q':'Om [Ag⁺] = 0,10 M i en lösning med AgCl (Ksp=1,8×10⁻¹⁰), kan maximalt [Cl⁻] = ___ mol/L.','a':'1,8×10⁻⁹','hint':'[Cl⁻] = Ksp/[Ag⁺]'},
  {'id':431,'cat':'losningar','q':'Q = [Ba²⁺][SO₄²⁻]. Om Q > Ksp ___ BaSO₄.','a':'fälls ut','hint':'Övermättad lösning → utfällning'},
  {'id':432,'cat':'losningar','q':'Tillsätter man NaCl till en AgCl-lösning (gemensam jon Cl⁻) ___ lösligheten av AgCl.','a':'minskar','hint':'Gemensam-joneffekten'},
  {'id':433,'cat':'losningar','q':'Beer-Lambert: A = ε × c × l. Enheten för ε är ___.','a':'L/(mol·cm)','hint':'Molär absorptionskoefficient'},
  {'id':434,'cat':'losningar','q':'Beer-Lambert: om c fördubblas (konstant l och ε), ___ A.','a':'fördubblas','hint':'A är direkt proportionell mot c'},
  {'id':435,'cat':'losningar','q':'Transmittans T = I/I₀. Absorbans A = log(1/T). Om T = 0,10 är A = ___.','a':'1,0','hint':'A = log(1/0,10) = log(10) = 1'},
  {'id':436,'cat':'losningar','q':'Om T = 0,50 är A = log(1/0,50) = log(2) ≈ ___.','a':'0,30','hint':'log(2) ≈ 0,301'},
  {'id':437,'cat':'losningar','q':'Standardkurva i spektrofotometri: mätpunkterna A vs c ska ge en ___ linje.','a':'rät (linjär)','hint':'Beer-Lambert är linjärt vid låga c'},
  {'id':438,'cat':'losningar','q':'Massandel (m/m): 5 g NaCl i 95 g vatten → 5/(95+5) × 100 = ___ %.','a':'5','hint':'Massandel = löst ämne / total massa × 100'},
  {'id':439,'cat':'losningar','q':'Fysiologisk koksaltlösning har ___ % NaCl (m/v).','a':'0,9','hint':'Isoton med blod – används i droppåsar'},
  {'id':440,'cat':'losningar','q':'Molalitet = mol löst ämne per kg ___. Enheten är mol/kg.','a':'lösningsmedel','hint':'Skiljer sig från molaritet (per liter lösning)'},
  {'id':441,'cat':'losningar','q':'Fryspunktssänkning: ΔTf = Kf × m. 0,50 mol/kg NaCl (2 partiklar) → ΔTf = 1,86 × 0,50 × 2 = ___ °C.','a':'1,86','hint':'i=2 för NaCl (van Hoff-faktor)'},
  {'id':442,'cat':'losningar','q':'Antifrys: 50% etylenglykol (M=62) i 1 kg vatten: m = 500/62 ≈ 8,06 mol/kg → ΔTf = 1,86×8,06 ≈ ___ °C.','a':'15','hint':'Ungefärlig beräkning'},
  {'id':443,'cat':'losningar','q':'Kokpunkthöjning: ΔTb = 0,512 × m. 1,0 mol/kg glukos: ΔTb = ___ °C.','a':'0,512','hint':'Kₓ(vatten) = 0,512 °C·kg/mol'},
  {'id':444,'cat':'losningar','q':'Osmotiskt tryck: π = MRT = 0,10 × 8,314 × 298 / 1000 ≈ ___ kPa.','a':'247,9','hint':'Enheter: M i mol/L, R=8,314 J/(mol·K), T i K → Pa → /1000 = kPa'},
  {'id':445,'cat':'losningar','q':'Omvänd osmos används för ___ av havsvatten.','a':'avsaltning','hint':'Tryck tvingar vatten genom membran mot osmotisk gradient'},
  {'id':446,'cat':'losningar','q':'Henrys lag: lösligheten av en gas i vätska ___ med ökat partialtryck.','a':'ökar','hint':'CO₂ i läsk – under tryck mer löst'},
  {'id':447,'cat':'losningar','q':'CO₂-lösligheten i havsvatten ___ när temperaturen stiger.','a':'minskar','hint':'Gaser löser sig sämre vid hög T – varmt hav tar upp mindre CO₂'},
  {'id':448,'cat':'losningar','q':'Titrering: n(HCl) = 0,100 × 0,0185 = 1,85×10⁻³ mol. c(NaOH) om V=25,0 mL = 1,85×10⁻³/0,0250 = ___ mol/L.','a':'0,074','hint':'c = n/V'},
  {'id':449,'cat':'losningar','q':'Ekvivalenspunkten i en titrering (stark syra–stark bas) har pH = ___.','a':'7','hint':'NaCl-lösning är neutral'},
  {'id':450,'cat':'losningar','q':'Ekvivalenspunkten i en titrering (svag syra–stark bas) har pH ___ 7.','a':'> (över)','hint':'Salt av svag syra hydrolyser basiskt'},
  {'id':451,'cat':'losningar','q':'Halvvägspunkten i en titrering av svag syra: [HA]=[A⁻] → pH = ___.','a':'pKa','hint':'Henderson-Hasselbalch: log(1) = 0'},
  {'id':452,'cat':'losningar','q':'Fenolftalein byter färg vid pH ≈ 8,2–10. Passar bäst för titrering av ___.','a':'svag syra med stark bas','hint':'Ekvivalenspunkt pH > 7'},
  {'id':453,'cat':'losningar','q':'Metylorange byter färg vid pH ≈ 3,1–4,4. Passar för titrering av ___.','a':'stark syra med svag bas','hint':'Ekvivalenspunkt pH < 7'},
  {'id':454,'cat':'losningar','q':'Bromtymolblått byter färg vid pH ≈ 6–7,6. Passar för ___ syra–___ bas.','a':'stark syra–stark bas','hint':'Ekvivalenspunkt pH = 7'},
  {'id':455,'cat':'losningar','q':'Löslighet av de flesta fasta salter ___ med ökad temperatur.','a':'ökar','hint':'Endoterm löslighetsprocess gynnas av hög T'},
  {'id':456,'cat':'losningar','q':'Mättad lösning: löst ämne tillsatt → inget löser sig vidare. Systemet är i ___.','a':'jämvikt (fast ⇌ löst)','hint':'Ksp = Q vid mättnad'},
  {'id':457,'cat':'losningar','q':'ppm i vattenlösning: 1 ppm ≈ 1 mg/L. EU:s gräns för nitrat i dricksvatten är 50 mg/L = ___ ppm.','a':'50','hint':'mg/L = ppm för utspädda vattenlösningar'},
  {'id':458,'cat':'losningar','q':'Bereda 1,00 L av 0,100 M KMnO₄ (M=158): m = 0,100 × 1,00 × 158 = ___ g.','a':'15,8','hint':'m = c × V × M'},
  {'id':459,'cat':'losningar','q':'SAV = Syra I Vatten. Varför hälls alltid syran i vattnet?','a':'Utspädning är starkt exoterm – i liten vattenmängd kan det koka och stänka','hint':'Riskminimering – syra i vatten, aldrig vatten i syra'},
  {'id':460,'cat':'losningar','q':'Gravimetrisk analys: man fäller ut, filtrerar, torkar och väger. Metoden ger ___ (direkt/indirekt) bestämning av mängd.','a':'direkt','hint':'Massan mäts direkt, inga beräkningsomvägar'},
  {'id':461,'cat':'losningar','q':'Argentometrisk titrering (Mohr): Ag⁺ fäller Cl⁻. Indikatorn K₂CrO₄ bildar rött Ag₂CrO₄ vid ekvivalenspunkten pga ___.','a':'Ksp(Ag₂CrO₄) > Ksp(AgCl) – AgCl fälls preferentiellt','hint':'Selektiv utfällning baserat på Ksp-värden'},
  {'id':462,'cat':'losningar','q':'EDTA-titrering används för att bestämma ___ i vatten (vattenhårdhet).','a':'Ca²⁺ och Mg²⁺ (hårdhet)','hint':'EDTA bildar stabila komplex med di- och trivalenta metaller'},
  {'id':463,'cat':'losningar','q':'Molärbrå χ_A = n_A/n_tot. Om 1 mol etanol blandas i 9 mol vatten: χ(etanol) = ___.','a':'0,10','hint':'χ = 1/(1+9)'},
  {'id':464,'cat':'losningar','q':'Raoults lag: ångtrycket för ett lösningsmedel i en lösning är χ_solv × ___.','a':'p° (rent lösningsmedels ångtryck)','hint':'Löst ämne sänker ångtrycket'},
  {'id':465,'cat':'losningar','q':'Kolligativa egenskaper beror på ___ lösta partiklar, inte på deras identitet.','a':'antalet','hint':'1 mol NaCl (2 partiklar) ger dubbelt mot 1 mol glukos'},
]

# ── bygg JS ─────────────────────────────────────────────────────────────────
def js_q(q):
    def esc(s):
        return str(s).replace('\\','\\\\').replace("'","\\'")
    return ("  {id:" + str(q['id']) +
            ", cat:'" + esc(q['cat']) + "'" +
            ", q:'" + esc(q['q']) + "'" +
            ", a:'" + esc(q['a']) + "'" +
            ", hint:'" + esc(q['hint']) + "'}")

new_js = ',\n'.join(js_q(q) for q in new_questions)

CLOZE_END = '];\n\nconst CLOZE_CATS'
idx = html.find(CLOZE_END)
if idx == -1:
    print("ERROR: CLOZE_END inte hittad"); sys.exit(1)

html = html[:idx] + ',\n' + new_js + '\n' + html[idx:]

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"Tillagda: {len(new_questions)} frågor")
print(f"Filstorlek: {len(html)} chars / {len(html.encode('utf-8'))//1024} KB")
