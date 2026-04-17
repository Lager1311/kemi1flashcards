# -*- coding: utf-8 -*-
import sys
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()

def prob_js(p):
    def s(v):
        if v is None: return 'undefined'
        v = str(v).replace('\\','\\\\').replace("'","\\'")
        return f"'{v}'"
    parts = [f"id:{p['id']}", f"lv:{p['lv']}", f"cat:{s(p['cat'])}",
             f"title:{s(p['title'])}", f"q:{s(p['q'])}", f"ans:{p['ans']}",
             f"tol:{p.get('tol',5)}", f"unit:{s(p.get('unit',''))}"]
    if p.get('formula'): parts.append(f"formula:{s(p['formula'])}")
    if p.get('hint'):    parts.append(f"hint:{s(p['hint'])}")
    if p.get('steps'):
        sl = '[' + ','.join(s(x) for x in p['steps']) + ']'
        parts.append(f"steps:{sl}")
    if p.get('sol'):     parts.append(f"sol:{s(p['sol'])}")
    return '  { ' + ', '.join(parts) + ' }'

problems = []

# ══════════════════════════════════════════════════════
# KONC – ~20 per nivå (id 2301–2360)
# ══════════════════════════════════════════════════════

# Nivå 1
problems += [
  {'id':2301,'lv':1,'cat':'konc','title':'Beräkna koncentration','q':'1,17 g NaCl (M=58,5) löses i 200 mL vatten. Vad är koncentrationen i mol/L?','ans':0.1,'tol':2,'unit':'mol/L','formula':'c = n/V','steps':['n = 1,17/58,5 = 0,020 mol','V = 0,200 L','c = 0,020/0,200 = 0,10 mol/L']},
  {'id':2302,'lv':1,'cat':'konc','title':'Beräkna massa','q':'Hur många gram NaOH (M=40) behövs för att bereda 500 mL av 0,20 mol/L lösning?','ans':4.0,'tol':2,'unit':'g','formula':'m = c·V·M','steps':['n = 0,20 × 0,500 = 0,10 mol','m = 0,10 × 40 = 4,0 g']},
  {'id':2303,'lv':1,'cat':'konc','title':'Substansmängd ur konc','q':'Hur många mol HCl finns i 250 mL av 2,0 mol/L HCl?','ans':0.5,'tol':2,'unit':'mol','formula':'n = c·V','steps':['n = 2,0 × 0,250 = 0,50 mol']},
  {'id':2304,'lv':1,'cat':'konc','title':'Volym ur mol','q':'Hur många mL av 0,50 mol/L NaOH innehåller 0,025 mol NaOH?','ans':50,'tol':2,'unit':'mL','formula':'V = n/c','steps':['V = 0,025/0,50 = 0,050 L = 50 mL']},
  {'id':2305,'lv':1,'cat':'konc','title':'Koncentration g/L','q':'5,85 g NaCl (M=58,5) per liter. Vad är c i mol/L?','ans':0.1,'tol':2,'unit':'mol/L','formula':'c = m/(M·V)','steps':['n = 5,85/58,5 = 0,10 mol','c = 0,10/1,0 = 0,10 mol/L']},
  {'id':2306,'lv':1,'cat':'konc','title':'Massandel till mol/L','q':'3,65 g HCl (M=36,5) löses i vatten till 100 mL. Beräkna c(HCl) i mol/L.','ans':1.0,'tol':2,'unit':'mol/L','steps':['n = 3,65/36,5 = 0,100 mol','c = 0,100/0,100 = 1,0 mol/L']},
  {'id':2307,'lv':1,'cat':'konc','title':'Enkel utspädning','q':'Du tar 50 mL av 1,0 mol/L HCl och spär till 500 mL. Ny koncentration?','ans':0.1,'tol':2,'unit':'mol/L','formula':'c₁V₁ = c₂V₂','steps':['c₂ = 1,0 × 0,050 / 0,500 = 0,10 mol/L']},
  {'id':2308,'lv':1,'cat':'konc','title':'Antal joner','q':'I 200 mL av 0,10 mol/L CaCl₂ – hur många mol Cl⁻-joner finns?','ans':0.04,'tol':2,'unit':'mol','steps':['n(CaCl₂) = 0,10 × 0,200 = 0,020 mol','CaCl₂ → Ca²⁺ + 2Cl⁻ → n(Cl⁻) = 2 × 0,020 = 0,040 mol']},
]

# Nivå 2
problems += [
  {'id':2311,'lv':2,'cat':'konc','title':'Utspädning av stocklösning','q':'Från 12,0 mol/L HCl: vilken volym (mL) behövs för att bereda 500 mL av 0,300 mol/L HCl?','ans':12.5,'tol':2,'unit':'mL','formula':'V₁ = c₂V₂/c₁','steps':['V₁ = 0,300 × 0,500 / 12,0 = 0,0125 L = 12,5 mL']},
  {'id':2312,'lv':2,'cat':'konc','title':'Blanda lösningar','q':'50 mL av 0,40 mol/L HCl blandas med 150 mL av 0,20 mol/L HCl. Beräkna c(HCl) i blandningen.','ans':0.25,'tol':2,'unit':'mol/L','steps':['n₁ = 0,40×0,050 = 0,020 mol','n₂ = 0,20×0,150 = 0,030 mol','n_tot = 0,050 mol, V = 0,200 L','c = 0,050/0,200 = 0,25 mol/L']},
  {'id':2313,'lv':2,'cat':'konc','title':'Beer-Lambert','q':'ε = 2000 L/(mol·cm), l = 1,0 cm, A = 0,40. Beräkna c.','ans':0.0002,'tol':5,'unit':'mol/L','formula':'A = ε·c·l → c = A/(ε·l)','steps':['c = 0,40 / (2000 × 1,0) = 2,0×10⁻⁴ mol/L']},
  {'id':2314,'lv':2,'cat':'konc','title':'Spädningsserie','q':'20 mL av 0,50 mol/L KMnO₄ späds till 200 mL. Sedan tas 50 mL av denna och späds till 250 mL. Slutlig c?','ans':0.01,'tol':3,'unit':'mol/L','steps':['Steg 1: c = 0,50×20/200 = 0,050 mol/L','Steg 2: c = 0,050×50/250 = 0,010 mol/L']},
  {'id':2315,'lv':2,'cat':'konc','title':'Massa produkt ur titrering','q':'25,0 mL NaOH titreras med 18,5 mL 0,100 mol/L HCl. Hur många gram NaOH (M=40) fanns?','ans':0.074,'tol':3,'unit':'g','steps':['n(HCl) = 0,100×0,0185 = 1,85×10⁻³ mol','n(NaOH) = 1,85×10⁻³ mol (1:1)','m = 1,85×10⁻³ × 40 = 0,074 g']},
  {'id':2316,'lv':2,'cat':'konc','title':'Fryspunktssänkning','q':'2,0 mol/kg NaCl (i = 2) i vatten. ΔTf = Kf·m·i, Kf = 1,86 °C·kg/mol. Beräkna ΔTf.','ans':7.44,'tol':3,'unit':'°C','formula':'ΔTf = Kf·m·i','steps':['ΔTf = 1,86 × 2,0 × 2 = 7,44 °C']},
  {'id':2317,'lv':2,'cat':'konc','title':'Ksp och löslighet','q':'Ksp(AgCl) = 1,8×10⁻¹⁰. Beräkna lösligheten s i mol/L.','ans':1.34e-5,'tol':5,'unit':'mol/L','formula':'s = √Ksp','steps':['s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L']},
  {'id':2318,'lv':2,'cat':'konc','title':'Gemensam jon','q':'Ksp(AgCl)=1,8×10⁻¹⁰. [Cl⁻]=0,10 mol/L tillsätts. Max [Ag⁺] = Ksp/[Cl⁻] = ?','ans':1.8e-9,'tol':5,'unit':'mol/L','formula':'[Ag⁺] = Ksp / [Cl⁻]','steps':['[Ag⁺] = 1,8×10⁻¹⁰ / 0,10 = 1,8×10⁻⁹ mol/L']},
  {'id':2319,'lv':2,'cat':'konc','title':'Massandel och molaritet','q':'36% HCl (m/m), densitet 1,18 g/mL, M=36,5. Beräkna c i mol/L.','ans':11.6,'tol':3,'unit':'mol/L','formula':'c = (ρ·w·1000)/M','steps':['c = (1180 × 0,36) / 36,5 = 424,8/36,5 ≈ 11,6 mol/L']},
  {'id':2320,'lv':2,'cat':'konc','title':'Titrering – okänd syra','q':'15,0 mL okänd H₂SO₄ titreras till neutralitet med 24,0 mL 0,200 mol/L NaOH. Beräkna c(H₂SO₄).','ans':0.16,'tol':3,'unit':'mol/L','steps':['n(NaOH) = 0,200×0,024 = 0,0048 mol','H₂SO₄ + 2NaOH → reaktion 1:2','n(H₂SO₄) = 0,0048/2 = 0,0024 mol','c = 0,0024/0,015 = 0,16 mol/L']},
]

# Nivå 3
problems += [
  {'id':2321,'lv':3,'cat':'konc','title':'Tillsats av fast ämne','q':'500 mL 0,20 mol/L NaCl. Hur många gram NaCl (M=58,5) tillsätts för att c ska bli 0,50 mol/L? (Volymen ökar försumbart.)','ans':8.775,'tol':3,'unit':'g','steps':['Δn = (0,50−0,20)×0,500 = 0,15 mol','m = 0,15 × 58,5 = 8,775 ≈ 8,8 g']},
  {'id':2322,'lv':3,'cat':'konc','title':'Beer-Lambert med okänd ε','q':'Standard: c=5,0×10⁻⁴ mol/L ger A=0,25 (l=1 cm). Prov: A=0,45. Beräkna c(prov).','ans':9e-4,'tol':5,'unit':'mol/L','steps':['ε = A/(c·l) = 0,25/(5×10⁻⁴×1) = 500','c = 0,45/500 = 9,0×10⁻⁴ mol/L']},
  {'id':2323,'lv':3,'cat':'konc','title':'Blandning med reaktion','q':'50 mL 0,30 mol/L HCl blandas med 50 mL 0,10 mol/L NaOH. Beräkna c(HCl) efter reaktion.','ans':0.1,'tol':3,'unit':'mol/L','steps':['n(HCl)=0,030×0,050=0,015mol','n(NaOH)=0,10×0,050=0,005mol','Överskott HCl = 0,015−0,005=0,010mol','V_tot=0,100L → c = 0,010/0,100=0,10mol/L']},
  {'id':2324,'lv':3,'cat':'konc','title':'Osmotiskt tryck','q':'Blodplasma: c = 0,30 mol/L. π = cRT = 0,30×8,314×310 = ? kPa.','ans':773,'tol':5,'unit':'kPa','formula':'π = cRT','steps':['π = 0,30 × 8,314 × 310 = 773 kPa']},
  {'id':2325,'lv':3,'cat':'konc','title':'Ksp – binärt salt','q':'Ksp(BaSO₄)=1,1×10⁻¹⁰. Blanda 50 mL 2×10⁻⁵ mol/L Ba²⁺ med 50 mL 2×10⁻⁵ mol/L SO₄²⁻. Sker utfällning? Q = ?','ans':1e-10,'tol':5,'unit':'(mol/L)²','steps':['[Ba²⁺]=[SO₄²⁻]=1×10⁻⁵ efter blandning','Q = (10⁻⁵)² = 10⁻¹⁰ = Ksp → precis vid jämvikt']},
  {'id':2326,'lv':3,'cat':'konc','title':'Molalitet till molaritet','q':'2,0 mol/kg glukos (M=180) i vatten, densitet ≈ 1,07 g/mL. Beräkna c i mol/L.','ans':1.79,'tol':5,'unit':'mol/L','steps':['1 kg H₂O + 2,0×180=360 g glukos = 1360 g','V = 1360/1,07 = 1271 mL = 1,271 L','c = 2,0/1,271 ≈ 1,57 mol/L'],'sol':'≈ 1,6 mol/L (acceptera 1,5–1,8)'},
  {'id':2327,'lv':3,'cat':'konc','title':'Back-titrering','q':'0,200 g CaCO₃ löses i 50,0 mL 0,100 mol/L HCl. Överskottet HCl titreras med 0,100 mol/L NaOH, åtgår 15,0 mL. Hur rent är provet (% CaCO₃, M=100)?','ans':75,'tol':3,'unit':'%','steps':['n(HCl)_tot = 0,100×0,050 = 0,0050 mol','n(NaOH) = 0,100×0,015 = 0,0015 mol → n(HCl)_kvar','n(HCl)_reagerat = 0,0050−0,0015 = 0,0035 mol','CaCO₃+2HCl → n(CaCO₃)=0,0035/2=0,00175 mol','m = 0,175 g → % = 0,175/0,200×100 = 87,5%'],'sol':'87,5%'},
  {'id':2328,'lv':3,'cat':'konc','title':'Absorbans och transmittans','q':'En lösning har transmittansen T = 0,032. Beräkna absorbansen A = log(1/T).','ans':1.49,'tol':3,'unit':'(ingen)','formula':'A = log(1/T) = −log(T)','steps':['A = −log(0,032) = −(−1,49) = 1,49']},
]

# ══════════════════════════════════════════════════════
# MOL – extra ~20 per nivå (id 2401–2460)
# ══════════════════════════════════════════════════════

# Nivå 1
problems += [
  {'id':2401,'lv':1,'cat':'mol','title':'Mol till massa, Al','q':'Hur många gram är 3,0 mol Al? (M=27)','ans':81,'tol':2,'unit':'g','formula':'m = n·M','steps':['m = 3,0 × 27 = 81 g']},
  {'id':2402,'lv':1,'cat':'mol','title':'Massa till mol, Ca','q':'Hur många mol är 80 g Ca? (M=40)','ans':2.0,'tol':2,'unit':'mol','steps':['n = 80/40 = 2,0 mol']},
  {'id':2403,'lv':1,'cat':'mol','title':'Antal atomer','q':'Hur många atomer finns i 0,50 mol Fe? (Nₐ=6,022×10²³)','ans':3.011e23,'tol':3,'unit':'atomer','formula':'N = n·Nₐ','steps':['N = 0,50 × 6,022×10²³ = 3,011×10²³']},
  {'id':2404,'lv':1,'cat':'mol','title':'Molmassa CuSO₄','q':'Vad är molmassan för CuSO₄? (Cu=63,5 S=32 O=16)','ans':159.5,'tol':2,'unit':'g/mol','steps':['M = 63,5 + 32 + 4×16 = 159,5 g/mol']},
  {'id':2405,'lv':1,'cat':'mol','title':'Mol CO₂ ur massa','q':'Hur många mol CO₂ är 22 g? (M=44)','ans':0.5,'tol':2,'unit':'mol','steps':['n = 22/44 = 0,50 mol']},
  {'id':2406,'lv':1,'cat':'mol','title':'Molmassa K₂SO₄','q':'Molmassan för K₂SO₄? (K=39, S=32, O=16)','ans':174,'tol':2,'unit':'g/mol','steps':['M = 2×39 + 32 + 4×16 = 78+32+64 = 174 g/mol']},
  {'id':2407,'lv':1,'cat':'mol','title':'Massa per Nₐ-atomer','q':'Massa av 6,022×10²³ molekyler H₂O? (M=18)','ans':18,'tol':2,'unit':'g','steps':['Det är 1 mol H₂O → m = 1 × 18 = 18 g']},
  {'id':2408,'lv':1,'cat':'mol','title':'Vol vid STP','q':'Vilken volym upptar 2,0 mol CO₂ vid STP? (22,4 L/mol)','ans':44.8,'tol':2,'unit':'L','steps':['V = 2,0 × 22,4 = 44,8 L']},
  {'id':2409,'lv':1,'cat':'mol','title':'Mol ur volym STP','q':'0,0 L är 2,24 L gas vid STP. Hur många mol?','ans':0.1,'tol':2,'unit':'mol','steps':['n = 2,24/22,4 = 0,10 mol']},
]

# Nivå 2
problems += [
  {'id':2411,'lv':2,'cat':'mol','title':'Procentuell sammansättning Fe₂O₃','q':'Beräkna massandelen Fe (%) i Fe₂O₃. (Fe=56, O=16)','ans':69.9,'tol':3,'unit':'%','steps':['M(Fe₂O₃) = 2×56+3×16 = 160','%Fe = (2×56/160)×100 = 70,0%']},
  {'id':2412,'lv':2,'cat':'mol','title':'Empirisk formel','q':'En förening innehåller 40,0%C, 6,71%H, 53,3%O. Bestäm empirisk formel. Vad är kvoten C:H:O?','ans':1,'tol':0,'unit':'(CH₂O)','steps':['n(C)=40/12=3,33, n(H)=6,71/1=6,71, n(O)=53,3/16=3,33','Dela med 3,33: C:H:O = 1:2:1 → CH₂O'],'sol':'CH₂O'},
  {'id':2413,'lv':2,'cat':'mol','title':'Molekylformel ur empirisk','q':'Empirisk formel CH₂O, M=180 g/mol. Vad är molekylformeln? (M_emp=30)','ans':6,'tol':0,'unit':'(C₆H₁₂O₆)','steps':['n = 180/30 = 6','Molekylformel: C₆H₁₂O₆'],'sol':'C₆H₁₂O₆'},
  {'id':2414,'lv':2,'cat':'mol','title':'Balansering + mol','q':'4Fe + 3O₂ → 2Fe₂O₃. Hur många gram O₂ (M=32) krävs för att reagera med 5,6 g Fe (M=56)?','ans':2.4,'tol':3,'unit':'g','steps':['n(Fe) = 5,6/56 = 0,10 mol','n(O₂) = 0,10 × 3/4 = 0,075 mol','m(O₂) = 0,075 × 32 = 2,4 g']},
  {'id':2415,'lv':2,'cat':'mol','title':'Begränsande reagens','q':'10,0 g H₂ (M=2) + 80,0 g O₂ (M=32) reagerar: 2H₂+O₂→2H₂O. Vilket reagens är i överskott?','ans':0,'tol':0,'unit':'','steps':['n(H₂)=10/2=5,0 mol; n(O₂)=80/32=2,5 mol','Behov: 5,0 mol H₂ kräver 2,5 mol O₂ – exakt!','Inget överskott – exakt stökiometri'],'sol':'Inget överskott'},
  {'id':2416,'lv':2,'cat':'mol','title':'Utbyte','q':'Teoretiskt utbyte NH₃: 34 g. Faktiskt: 27,2 g. Beräkna procentuellt utbyte.','ans':80,'tol':3,'unit':'%','formula':'Utbyte = (faktisk/teoretisk)×100','steps':['Utbyte = 27,2/34 × 100 = 80%']},
  {'id':2417,'lv':2,'cat':'mol','title':'Förbränning av propan','q':'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Massa CO₂ (M=44) från 11,0 g C₃H₈ (M=44)?','ans':33,'tol':3,'unit':'g','steps':['n(C₃H₈) = 11/44 = 0,25 mol','n(CO₂) = 3 × 0,25 = 0,75 mol','m(CO₂) = 0,75 × 44 = 33 g']},
  {'id':2418,'lv':2,'cat':'mol','title':'Mol ur tryck-volym-T','q':'pV=nRT. p=100 kPa, V=2,0 L, T=300 K, R=8,314 J/(mol·K). Beräkna n.','ans':0.08,'tol':5,'unit':'mol','formula':'n = pV/RT','steps':['n = (100000 × 0,002)/(8,314 × 300) = 200/2494 ≈ 0,080 mol']},
  {'id':2419,'lv':2,'cat':'mol','title':'Massa NH₃ Haber-Bosch','q':'N₂ + 3H₂ → 2NH₃. 56 g N₂ (M=28) reagerar fullständigt. Massa NH₃ (M=17)?','ans':68,'tol':3,'unit':'g','steps':['n(N₂) = 56/28 = 2,0 mol','n(NH₃) = 2 × 2,0 = 4,0 mol','m = 4,0 × 17 = 68 g']},
]

# Nivå 3
problems += [
  {'id':2421,'lv':3,'cat':'mol','title':'Begränsande + överskott','q':'3,00 g Zn (M=65,4) + 5,00 g S (M=32,1): Zn+S→ZnS. Massa ZnS (M=97,5) som bildas?','ans':4.48,'tol':3,'unit':'g','steps':['n(Zn)=3,00/65,4=0,0459 mol','n(S)=5,00/32,1=0,1558 mol','Zn begränsar (0,0459 < 0,1558)','n(ZnS)=0,0459 mol → m=0,0459×97,5=4,48 g']},
  {'id':2422,'lv':3,'cat':'mol','title':'Empirisk formel ur förbränning','q':'0,500 g organisk förening förbränns: ger 0,733 g CO₂ och 0,300 g H₂O. Bestäm empirisk formel. Mol C = ?','ans':0.01665,'tol':5,'unit':'mol C','steps':['n(CO₂)=0,733/44=0,01665 mol → n(C)=0,01665','n(H₂O)=0,300/18=0,01667 mol → n(H)=0,0333','m(C)=0,01665×12=0,200g, m(H)=0,0333g','m(O)=0,500−0,200−0,033=0,267g → n(O)=0,01669','C:H:O ≈ 1:2:1 → CH₂O'],'sol':'CH₂O'},
  {'id':2423,'lv':3,'cat':'mol','title':'Molmassa okänd gas','q':'2,10 g okänd gas upptar 0,700 L vid STP (22,4 L/mol). Beräkna molmassan.','ans':67.2,'tol':3,'unit':'g/mol','steps':['n = 0,700/22,4 = 0,03125 mol','M = 2,10/0,03125 = 67,2 g/mol']},
  {'id':2424,'lv':3,'cat':'mol','title':'Titrering + mol','q':'En 0,250 g fast CaCO₃-prov (M=100) löses i 50,0 mL 0,100 mol/L HCl. Hur många mL 0,100 mol/L NaOH krävs för att titrera överskottet HCl?','ans':10,'tol':3,'unit':'mL','steps':['n(HCl)_tot=0,100×0,050=0,0050 mol','n(CaCO₃)=0,250/100=0,0025 mol','CaCO₃+2HCl → n(HCl)_åtgår=2×0,0025=0,0050 mol','Överskott HCl = 0 mol → 0 mL NaOH'],'sol':'0 mL (exakt neutralisering)'},
  {'id':2425,'lv':3,'cat':'mol','title':'Löslighet och massa','q':'Ksp(CaF₂)=3,9×10⁻¹¹. Beräkna lösligheten s och massa CaF₂ (M=78) per liter.','ans':4e-4,'tol':10,'unit':'g/L','steps':['CaF₂⇌Ca²⁺+2F⁻: s och 2s','Ksp=s(2s)²=4s³=3,9×10⁻¹¹','s=∛(9,75×10⁻¹²)=2,15×10⁻⁴ mol/L','m=2,15×10⁻⁴×78=1,68×10⁻² g/L'],'sol':'≈0,017 g/L'},
]

# ══════════════════════════════════════════════════════
# JAMVIKT – extra ~15 per nivå (id 2501–2545)
# ══════════════════════════════════════════════════════

# Nivå 1
problems += [
  {'id':2501,'lv':1,'cat':'jamvikt','title':'Kc-uttryck','q':'Skriv Kc för N₂ + 3H₂ ⇌ 2NH₃. Om [N₂]=2, [H₂]=3, [NH₃]=1 – vad är Kc?','ans':0.0247,'tol':5,'unit':'(enhetslös)','formula':'Kc = [NH₃]²/([N₂][H₂]³)','steps':['Kc = 1²/(2×3³) = 1/(2×27) = 1/54 ≈ 0,0185'],'sol':'≈ 0,019'},
  {'id':2502,'lv':1,'cat':'jamvikt','title':'Åt vilket håll?','q':'H₂ + I₂ ⇌ 2HI, K=64. [H₂]=[I₂]=0,10, [HI]=0,10. Q = 0,01/(0,01×0,01). Sker reaktion mot höger eller vänster?','ans':100,'tol':5,'unit':'(Q=100)','steps':['Q = [HI]²/([H₂][I₂]) = 0,01/(0,10×0,10) = 1,0','Q=1 < K=64 → mot höger (mer HI bildas)'],'sol':'Q=1, mot höger'},
  {'id':2503,'lv':1,'cat':'jamvikt','title':'Le Chatelier – tryck','q':'2NO₂(g) ⇌ N₂O₄(g). Trycket ökas. Mot vilket håll förskjuts jämvikten?','ans':0,'tol':0,'unit':'','steps':['2 mol gas → 1 mol gas','Ökat tryck → mot sidan med färre gasmolekyler → mot höger (N₂O₄)'],'sol':'Mot höger (N₂O₄)'},
  {'id':2504,'lv':1,'cat':'jamvikt','title':'Le Chatelier – koncentration','q':'A + B ⇌ C + D. [A] ökas. Åt vilket håll förskjuts jämvikten?','ans':0,'tol':0,'unit':'','steps':['Ökas reaktant → jämvikt mot produkter (höger)'],'sol':'Mot höger'},
  {'id':2505,'lv':1,'cat':'jamvikt','title':'K och ΔG','q':'ΔG° = −RT ln K. ΔG° = −11,4 kJ/mol = −11400 J/mol, T=298K, R=8,314. ln K = ?','ans':4.6,'tol':3,'unit':'(ln K)','formula':'ln K = −ΔG°/(RT)','steps':['ln K = 11400/(8,314×298) = 11400/2478 = 4,60','K = e^4,60 ≈ 99']},
  {'id':2506,'lv':1,'cat':'jamvikt','title':'Ka och pH','q':'CH₃COOH ⇌ H⁺ + CH₃COO⁻, Ka=1,8×10⁻⁵, c=0,10 mol/L. [H⁺] = √(Ka×c) = ?','ans':1.34e-3,'tol':5,'unit':'mol/L','formula':'[H⁺] = √(Ka·c)','steps':['[H⁺] = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶) = 1,34×10⁻³']},
  {'id':2507,'lv':1,'cat':'jamvikt','title':'pH ur Ka','q':'Ka=1,8×10⁻⁵, c=0,10 mol/L CH₃COOH. pH = −log(1,34×10⁻³) = ?','ans':2.87,'tol':3,'unit':'','steps':['pH = −log(1,34×10⁻³) = 2,87']},
]

# Nivå 2
problems += [
  {'id':2511,'lv':2,'cat':'jamvikt','title':'Beräkna K ur jämviktskonc','q':'CO + 3H₂ ⇌ CH₄ + H₂O. Jämvikt: [CO]=0,20, [H₂]=0,30, [CH₄]=0,40, [H₂O]=0,40 mol/L. Kc = ?','ans':29.6,'tol':5,'unit':'L²/mol²','formula':'Kc = [CH₄][H₂O]/([CO][H₂]³)','steps':['Kc = (0,40×0,40)/(0,20×0,30³) = 0,16/(0,20×0,027) = 0,16/0,0054 ≈ 29,6']},
  {'id':2512,'lv':2,'cat':'jamvikt','title':'ICE-tabell','q':'H₂ + I₂ ⇌ 2HI. Start: [H₂]=[I₂]=0,50, [HI]=0. Kc=64. Låt x mol/L reagera. Vid jämvikt: x ≈ ?','ans':0.39,'tol':5,'unit':'mol/L','steps':['Kc = (2x)²/((0,50−x)²) = 64','2x/(0,50−x) = 8','2x = 4,0 − 8x → 10x = 4,0 → x = 0,40','[HI] = 0,80, [H₂]=[I₂] = 0,10'],'sol':'x ≈ 0,40'},
  {'id':2513,'lv':2,'cat':'jamvikt','title':'Henderson-Hasselbalch','q':'Acetatbuffert: [CH₃COO⁻]=0,20, [CH₃COOH]=0,10 mol/L, pKa=4,74. pH = ?','ans':5.04,'tol':2,'unit':'','formula':'pH = pKa + log([A⁻]/[HA])','steps':['pH = 4,74 + log(0,20/0,10) = 4,74 + log(2) = 4,74 + 0,30 = 5,04']},
  {'id':2514,'lv':2,'cat':'jamvikt','title':'Buffer – pH efter tillsats','q':'Acetatbuffert (100 mL): [CH₃COOH]=0,10 M, [CH₃COO⁻]=0,10 M, pKa=4,74. Tillsäts 1 mmol HCl. Nytt pH?','ans':4.66,'tol':3,'unit':'','steps':['n(HA)_start=0,010 mol, n(A⁻)_start=0,010 mol','HCl + A⁻ → HA: n(A⁻)=0,009 mol, n(HA)=0,011 mol','pH = 4,74 + log(0,009/0,011) = 4,74 − 0,087 = 4,65']},
  {'id':2515,'lv':2,'cat':'jamvikt','title':'Ka×Kb = Kw','q':'NH₃ har Kb=1,8×10⁻⁵. Beräkna Ka för NH₄⁺. (Kw=1,0×10⁻¹⁴)','ans':5.56e-10,'tol':5,'unit':'','formula':'Ka = Kw/Kb','steps':['Ka = 1,0×10⁻¹⁴ / 1,8×10⁻⁵ = 5,56×10⁻¹⁰']},
  {'id':2516,'lv':2,'cat':'jamvikt','title':'Le Chatelier – temperatur','q':'N₂+3H₂⇌2NH₃, ΔH°=−92 kJ. K vid 500°C är 6×10⁻². K vid lägre T 300°C är (större/mindre)?','ans':0,'tol':0,'unit':'','steps':['Exoterm reaktion: lägre T gynnar produkter → K ökar','K vid 300°C > K vid 500°C'],'sol':'Större (K ökar vid lägre T)'},
  {'id':2517,'lv':2,'cat':'jamvikt','title':'Titrerings-pH vid ekvivalenspunkt','q':'Titrering av CH₃COOH (svag syra, pKa=4,74) med stark bas. pH vid ekvivalenspunkten – varför > 7?','ans':0,'tol':0,'unit':'','steps':['CH₃COO⁻ hydrolyserar: CH₃COO⁻+H₂O⇌CH₃COOH+OH⁻','Ger basisk lösning → pH > 7'],'sol':'pH ≈ 8,9 (basisk hydrolys)'},
  {'id':2518,'lv':2,'cat':'jamvikt','title':'K för omvänd reaktion','q':'A⇌B har K=0,050. Vad är K för reaktionen B⇌A?','ans':20,'tol':3,'unit':'','formula':'K(omvänd) = 1/K(framåt)','steps':['K(omvänd) = 1/0,050 = 20,0']},
]

# Nivå 3
problems += [
  {'id':2521,'lv':3,'cat':'jamvikt','title':'ICE med kvadratrotslösning','q':'A⇌B+C, Kc=4,0×10⁻³. Start [A]=0,50 mol/L. Vid jämvikt: [B]=[C]=x. Kc=x²/(0,50−x). Lös x.','ans':0.0426,'tol':5,'unit':'mol/L','steps':['x² + 4×10⁻³x − 2×10⁻³ = 0','x = (−4×10⁻³ + √(16×10⁻⁶+8×10⁻³))/2','x ≈ 0,0426 mol/L']},
  {'id':2522,'lv':3,'cat':'jamvikt','title':'Kp ur Kc','q':'N₂+3H₂⇌2NH₃, Kc=0,50 vid 400°C (673K). R=0,08206 L·atm/(mol·K). Δn=−2. Kp=Kc(RT)^Δn=?','ans':1.65e-4,'tol':10,'unit':'atm⁻²','formula':'Kp = Kc·(RT)^Δn','steps':['RT = 0,08206×673 = 55,2','Kp = 0,50 × (55,2)⁻² = 0,50/3047 = 1,64×10⁻⁴']},
  {'id':2523,'lv':3,'cat':'jamvikt','title':'Lösligheten i buffert','q':'Ksp(Mg(OH)₂)=5,6×10⁻¹². pH=10 → [OH⁻]=10⁻⁴. s=[Mg²⁺]=Ksp/[OH⁻]²=?','ans':0.56,'tol':5,'unit':'mol/L','steps':['s = Ksp/[OH⁻]² = 5,6×10⁻¹² / (10⁻⁴)² = 5,6×10⁻¹² / 10⁻⁸ = 5,6×10⁻⁴'],'sol':'5,6×10⁻⁴ mol/L'},
  {'id':2524,'lv':3,'cat':'jamvikt','title':'Sammansatt jämvikt','q':'Reaktion 1: A⇌B, K₁=2,0. Reaktion 2: B⇌C, K₂=5,0. K för A⇌C = ?','ans':10,'tol':2,'unit':'','formula':'K_tot = K₁ × K₂','steps':['K_tot = 2,0 × 5,0 = 10,0']},
  {'id':2525,'lv':3,'cat':'jamvikt','title':'Protolysgrad','q':'0,10 mol/L CH₃COOH, Ka=1,8×10⁻⁵. Protolysgrad α = [H⁺]/c = (1,34×10⁻³)/0,10 = ?','ans':1.34,'tol':3,'unit':'%','steps':['α = 1,34×10⁻³/0,10 = 0,0134 = 1,34%']},
]

# ── Bygg JS och injicera ────────────────────────────────────────────────────
new_js = ',\n'.join(prob_js(p) for p in problems)

ANCHOR = '];\n\nconst CLOZE_DATA'
idx = html.find(ANCHOR)
if idx == -1:
    print("ERROR: ankar ej hittad!"); sys.exit(1)

html = html[:idx] + ',\n' + new_js + '\n' + html[idx:]

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"Tillagda: {len(problems)} räkneuppgifter")
print(f"Filstorlek: {len(html)} chars / {len(html.encode('utf-8'))//1024} KB")
