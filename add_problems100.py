# -*- coding: utf-8 -*-
import sys
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

def js_str(s):
    s = s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')
    return f"'{s}'"

def js_list(lst):
    return '[' + ', '.join(js_str(x) for x in lst) + ']'

def prob_js(p):
    parts = [
        f"id:{p['id']}",
        f"lv:{p['lv']}",
        f"cat:{js_str(p['cat'])}",
        f"title:{js_str(p['title'])}",
        f"q:{js_str(p['q'])}",
        f"ans:{p['ans']}",
        f"tol:{p['tol']}",
        f"unit:{js_str(p['unit'])}",
        f"formula:{js_str(p['formula'])}",
        f"hint:{js_str(p['hint'])}",
        f"steps:{js_list(p['steps'])}",
        f"sol:{js_str(p['sol'])}",
    ]
    return '  { ' + ', '.join(parts) + ' }'

problems = []

# ══════════════════════════════════════════════════════════════════
#  MOL & MASSA  (1001–1012)
# ══════════════════════════════════════════════════════════════════
problems += [
  {'id':1001,'lv':1,'cat':'mol','title':'n från massa – CO₂',
   'q':'Beräkna substansmängden n för 44 g koldioxid CO₂.\nM(CO₂) = 44 g/mol.',
   'ans':1.0,'tol':0.05,'unit':'mol','formula':'n = m / M',
   'hint':'Dela massan med molmassan.',
   'steps':['m = 44 g, M = 44 g/mol','n = m / M = 44 / 44','n = 1,0 mol'],
   'sol':'n = 44/44 = 1,0 mol'},

  {'id':1002,'lv':1,'cat':'mol','title':'m från n – NaCl',
   'q':'Beräkna massan m för 0,50 mol natriumklorid NaCl.\nM(NaCl) = 58,5 g/mol.',
   'ans':29.25,'tol':0.3,'unit':'g','formula':'m = n × M',
   'hint':'Multiplicera mol med molmassan.',
   'steps':['n = 0,50 mol, M = 58,5 g/mol','m = n × M = 0,50 × 58,5','m = 29,25 g'],
   'sol':'m = 0,50 × 58,5 = 29,3 g'},

  {'id':1003,'lv':1,'cat':'mol','title':'Molmassa – H₂SO₄',
   'q':'Beräkna molmassan M för svavelsyra H₂SO₄.\nM(H)=1, M(S)=32, M(O)=16 g/mol.',
   'ans':98.0,'tol':0.5,'unit':'g/mol','formula':'M = Σ(antal × atommassa)',
   'hint':'Räkna atomer: 2H + 1S + 4O.',
   'steps':['2×1 + 1×32 + 4×16','2 + 32 + 64','M = 98 g/mol'],
   'sol':'M = 2+32+64 = 98 g/mol'},

  {'id':1004,'lv':1,'cat':'mol','title':'n av vatten',
   'q':'Hur många mol är 108 g vatten H₂O?\nM(H₂O) = 18 g/mol.',
   'ans':6.0,'tol':0.1,'unit':'mol','formula':'n = m / M',
   'hint':'108 delat med 18.',
   'steps':['m = 108 g, M = 18 g/mol','n = 108 / 18','n = 6,0 mol'],
   'sol':'n = 108/18 = 6,0 mol'},

  {'id':1005,'lv':2,'cat':'mol','title':'Procenthalt Fe i Fe₂O₃',
   'q':'Beräkna järnets (Fe) procentuella massa i järnoxid Fe₂O₃.\nM(Fe)=56, M(O)=16 g/mol.',
   'ans':70.0,'tol':0.5,'unit':'%','formula':'%m = (n×M_atom / M_förening) × 100',
   'hint':'M(Fe₂O₃) = 2×56 + 3×16 = 160 g/mol. Andel Fe = 112/160.',
   'steps':['M(Fe₂O₃) = 2×56 + 3×16 = 160 g/mol','massa Fe = 2×56 = 112 g/mol','%Fe = 112/160 × 100 = 70 %'],
   'sol':'%Fe = 112/160 × 100 = 70 %'},

  {'id':1006,'lv':2,'cat':'mol','title':'n av helium',
   'q':'Hur många mol är 4,0 g helium He?\nM(He) = 4,0 g/mol.',
   'ans':1.0,'tol':0.05,'unit':'mol','formula':'n = m / M',
   'hint':'4,0 / 4,0 = 1,0 mol.',
   'steps':['m = 4,0 g, M = 4,0 g/mol','n = 4,0 / 4,0','n = 1,0 mol'],
   'sol':'n = 1,0 mol → N = 6,022×10²³ atomer'},

  {'id':1007,'lv':2,'cat':'mol','title':'Empirisk formel – kolhydrat',
   'q':'En förening innehåller 40 % C, 6,7 % H och 53,3 % O (massa%).\nBeräkna kvoten n(H) / n(C) i den empiriska formeln.',
   'ans':2.0,'tol':0.1,'unit':'','formula':'n_x = %x / M_x',
   'hint':'Beräkna n per 100 g: C=40/12, H=6,7/1, O=53,3/16. Dividera med minsta.',
   'steps':['n(C)=40/12=3,33, n(H)=6,7/1=6,7, n(O)=53,3/16=3,33','Dividera med 3,33 → C:H:O = 1:2:1','Empirisk formel CH₂O → n(H)/n(C) = 2'],
   'sol':'n(H)/n(C) = 6,7/3,33 = 2,0'},

  {'id':1008,'lv':2,'cat':'mol','title':'Begränsande reagens – H₂O',
   'q':'2 H₂ + O₂ → 2 H₂O\n6,0 mol H₂ blandas med 2,0 mol O₂.\nHur många mol H₂O bildas maximalt?',
   'ans':4.0,'tol':0.1,'unit':'mol','formula':'Stökiometri: 1 mol O₂ → 2 mol H₂O',
   'hint':'Beräkna max H₂O från varje reaktant. Den som ger minst avgör.',
   'steps':['Från H₂: 6,0 mol → 6,0 mol H₂O','Från O₂: 2,0 mol → 4,0 mol H₂O','O₂ är begränsande → 4,0 mol H₂O'],
   'sol':'O₂ är begränsande → 4,0 mol H₂O'},

  {'id':1009,'lv':3,'cat':'mol','title':'Molmassa från m och n',
   'q':'En okänd gas har massan 3,2 g och substansmängden 0,10 mol.\nBeräkna molmassan M.',
   'ans':32.0,'tol':0.5,'unit':'g/mol','formula':'M = m / n',
   'hint':'Dela massan med substansmängden.',
   'steps':['m = 3,2 g, n = 0,10 mol','M = m / n = 3,2 / 0,10','M = 32 g/mol (svavel S)'],
   'sol':'M = 3,2 / 0,10 = 32 g/mol'},

  {'id':1010,'lv':3,'cat':'mol','title':'Procentuellt utbyte',
   'q':'Teoretisk produktmängd: 8,0 g.\nFaktisk produktmängd: 6,0 g.\nBeräkna det procentuella utbytet.',
   'ans':75.0,'tol':0.5,'unit':'%','formula':'utbyte = (faktisk / teoretisk) × 100',
   'hint':'Dividera faktisk med teoretisk och multiplicera med 100.',
   'steps':['utbyte = 6,0 / 8,0 × 100','= 0,75 × 100','= 75 %'],
   'sol':'utbyte = 6,0/8,0 × 100 = 75 %'},

  {'id':1011,'lv':3,'cat':'mol','title':'Kvot H/C från sammansättning',
   'q':'En kolförening innehåller 2,4 g C och 0,6 g H (inga andra grundämnen).\nBeräkna kvoten n(H) / n(C).',
   'ans':3.0,'tol':0.1,'unit':'','formula':'n = m / M',
   'hint':'n(C)=2,4/12, n(H)=0,6/1. Dividera.',
   'steps':['n(C) = 2,4/12 = 0,20 mol','n(H) = 0,6/1 = 0,60 mol','n(H)/n(C) = 0,60/0,20 = 3,0'],
   'sol':'n(H)/n(C) = 0,60/0,20 = 3,0 → empirisk formel CH₃'},

  {'id':1012,'lv':3,'cat':'mol','title':'Antal atomer i 16 g svavel',
   'q':'M(S) = 32 g/mol. Avogadros tal Nₐ = 6,022×10²³ mol⁻¹.\nHur många svavelatomer finns i 16 g S? Ange svaret som x×10²³ (ange x).',
   'ans':3.011,'tol':0.05,'unit':'×10²³','formula':'N = n × Nₐ',
   'hint':'n = 16/32 = 0,5 mol. N = 0,5 × 6,022×10²³.',
   'steps':['n = 16/32 = 0,50 mol','N = 0,50 × 6,022×10²³','N = 3,011×10²³ → x = 3,011'],
   'sol':'N = 0,50 × 6,022×10²³ = 3,011×10²³'},
]

# ══════════════════════════════════════════════════════════════════
#  KONCENTRATION  (1101–1112)
# ══════════════════════════════════════════════════════════════════
problems += [
  {'id':1101,'lv':1,'cat':'konc','title':'c = n/V',
   'q':'Beräkna koncentrationen c för en lösning med 0,40 mol löst ämne i 2,0 L.',
   'ans':0.20,'tol':0.01,'unit':'mol/L','formula':'c = n / V',
   'hint':'Dela substansmängden med volymen.',
   'steps':['n = 0,40 mol, V = 2,0 L','c = n / V = 0,40 / 2,0','c = 0,20 mol/L'],
   'sol':'c = 0,40/2,0 = 0,20 mol/L'},

  {'id':1102,'lv':1,'cat':'konc','title':'n = c × V',
   'q':'En lösning har koncentrationen 0,50 mol/L och volymen 0,40 L.\nBeräkna substansmängden n.',
   'ans':0.20,'tol':0.01,'unit':'mol','formula':'n = c × V',
   'hint':'Multiplicera koncentrationen med volymen.',
   'steps':['c = 0,50 mol/L, V = 0,40 L','n = c × V = 0,50 × 0,40','n = 0,20 mol'],
   'sol':'n = 0,50 × 0,40 = 0,20 mol'},

  {'id':1103,'lv':1,'cat':'konc','title':'Massa NaOH i lösning',
   'q':'Beräkna massan NaOH för att bereda 1,0 L lösning med c = 0,25 mol/L.\nM(NaOH) = 40 g/mol.',
   'ans':10.0,'tol':0.2,'unit':'g','formula':'m = c × V × M',
   'hint':'Beräkna n = c×V, sedan m = n×M.',
   'steps':['n = 0,25 × 1,0 = 0,25 mol','m = n × M = 0,25 × 40','m = 10 g'],
   'sol':'m = 0,25×1,0×40 = 10 g'},

  {'id':1104,'lv':1,'cat':'konc','title':'Volym lösning i mL',
   'q':'Hur många mL av en 0,50 mol/L HCl-lösning innehåller 0,10 mol HCl?',
   'ans':200.0,'tol':2.0,'unit':'mL','formula':'V = n / c',
   'hint':'V = n/c, omvandla till mL.',
   'steps':['V = n / c = 0,10 / 0,50 = 0,20 L','0,20 L × 1000 mL/L','V = 200 mL'],
   'sol':'V = 0,10/0,50 = 0,20 L = 200 mL'},

  {'id':1105,'lv':2,'cat':'konc','title':'Spädning c₁V₁ = c₂V₂',
   'q':'En 2,0 mol/L lösning (500 mL) späds till 2000 mL.\nBeräkna den nya koncentrationen c₂.',
   'ans':0.50,'tol':0.02,'unit':'mol/L','formula':'c₁V₁ = c₂V₂',
   'hint':'c₂ = c₁V₁/V₂.',
   'steps':['c₁=2,0, V₁=500 mL, V₂=2000 mL','c₂ = 2,0×500/2000','c₂ = 0,50 mol/L'],
   'sol':'c₂ = 2,0×500/2000 = 0,50 mol/L'},

  {'id':1106,'lv':2,'cat':'konc','title':'Pipettera stocklösning',
   'q':'Du har 12 mol/L saltsyra. Hur många mL behöver du för att bereda 500 mL av 0,60 mol/L?',
   'ans':25.0,'tol':0.5,'unit':'mL','formula':'V₁ = c₂V₂ / c₁',
   'hint':'V₁ = c₂×V₂/c₁.',
   'steps':['V₁ = (0,60 × 500) / 12','= 300 / 12','= 25 mL'],
   'sol':'V₁ = 0,60×500/12 = 25 mL'},

  {'id':1107,'lv':2,'cat':'konc','title':'Blanda lösningar',
   'q':'200 mL av 1,0 mol/L NaCl blandas med 300 mL av 0,50 mol/L NaCl.\nVad är koncentrationen i blandningen?',
   'ans':0.70,'tol':0.02,'unit':'mol/L','formula':'c = (n₁+n₂)/(V₁+V₂)',
   'hint':'Beräkna n₁ och n₂ separat, addera och dividera med total volym.',
   'steps':['n₁ = 0,200×1,0 = 0,20 mol','n₂ = 0,300×0,50 = 0,15 mol','c = (0,20+0,15)/0,500 = 0,70 mol/L'],
   'sol':'c = 0,35/0,50 = 0,70 mol/L'},

  {'id':1108,'lv':2,'cat':'konc','title':'Massa NaCl för lösning',
   'q':'Beräkna massan NaCl för att bereda 250 mL av 0,10 mol/L NaCl.\nM(NaCl) = 58,5 g/mol.',
   'ans':1.46,'tol':0.05,'unit':'g','formula':'m = c × V × M',
   'hint':'n = 0,10 × 0,250. m = n × 58,5.',
   'steps':['n = 0,10 × 0,250 = 0,025 mol','m = 0,025 × 58,5','m = 1,46 g'],
   'sol':'m = 0,10×0,250×58,5 = 1,46 g'},

  {'id':1109,'lv':3,'cat':'konc','title':'Titrering – c(NaOH)',
   'q':'25,0 mL NaOH titreras med 0,100 mol/L HCl. Ekvivalenspunkten nås vid 18,5 mL HCl.\nBeräkna c(NaOH).',
   'ans':0.074,'tol':0.003,'unit':'mol/L','formula':'c₁V₁ = c₂V₂',
   'hint':'n(HCl) = c×V. n(NaOH) = n(HCl). c(NaOH) = n/V(NaOH).',
   'steps':['n(HCl) = 0,100 × 0,0185 = 0,00185 mol','n(NaOH) = 0,00185 mol','c(NaOH) = 0,00185 / 0,025 = 0,074 mol/L'],
   'sol':'c(NaOH) = 0,00185/0,025 = 0,074 mol/L'},

  {'id':1110,'lv':3,'cat':'konc','title':'Seriell spädning',
   'q':'1,0 mol/L späds 1:100 (1 mL→100 mL) två gånger i rad.\nVad är -log(c) för slutkoncentrationen?',
   'ans':4.0,'tol':0.05,'unit':'','formula':'c_n = c₀ / (faktor)ⁿ',
   'hint':'c = 1,0 / (100×100) = 10⁻⁴ mol/L. -log(10⁻⁴) = 4.',
   'steps':['Efter spädning 1: c = 1,0/100 = 0,010 mol/L','Efter spädning 2: c = 0,010/100 = 10⁻⁴ mol/L','-log(10⁻⁴) = 4,0'],
   'sol':'-log(10⁻⁴) = 4,0'},

  {'id':1111,'lv':3,'cat':'konc','title':'Löslighet från Ksp',
   'q':'Ksp(BaSO₄) = 1,1×10⁻¹⁰. Beräkna lösligheten s.\nAnge svaret som -log(s) (dvs. pS).',
   'ans':4.98,'tol':0.05,'unit':'','formula':'s = √Ksp',
   'hint':'s = √(1,1×10⁻¹⁰) ≈ 1,05×10⁻⁵ mol/L. pS = -log(s).',
   'steps':['s = √(1,1×10⁻¹⁰) = 1,05×10⁻⁵ mol/L','pS = -log(1,05×10⁻⁵)','pS ≈ 4,98'],
   'sol':'s = 1,05×10⁻⁵ mol/L → pS = 4,98'},

  {'id':1112,'lv':3,'cat':'konc','title':'Substansmängd efter spädning',
   'q':'0,50 mol/L stocklösning späds 1:10 → 0,050 mol/L.\n25 mL av den spädda lösningen används. Hur många mmol löst ämne finns?',
   'ans':1.25,'tol':0.05,'unit':'mmol','formula':'n = c × V',
   'hint':'n = 0,050 mol/L × 0,025 L = 0,00125 mol = 1,25 mmol.',
   'steps':['c_spädd = 0,50/10 = 0,050 mol/L','n = 0,050 × 0,025 = 0,00125 mol','n = 1,25 mmol'],
   'sol':'n = 0,050 × 0,025 = 1,25 mmol'},
]

# ══════════════════════════════════════════════════════════════════
#  GASLAGAR  (1201–1212)
# ══════════════════════════════════════════════════════════════════
problems += [
  {'id':1201,'lv':1,'cat':'gas','title':'Volym vid STP',
   'q':'Beräkna volymen för 2,0 mol idealgas vid STP (0 °C, 101,3 kPa).\nMolär volym vid STP = 22,4 L/mol.',
   'ans':44.8,'tol':0.2,'unit':'L','formula':'V = n × 22,4 L/mol',
   'hint':'Multiplicera mol med 22,4 L/mol.',
   'steps':['n = 2,0 mol, V_m = 22,4 L/mol','V = 2,0 × 22,4','V = 44,8 L'],
   'sol':'V = 2,0 × 22,4 = 44,8 L'},

  {'id':1202,'lv':1,'cat':'gas','title':'Boyles lag',
   'q':'En gas: P₁ = 100 kPa, V₁ = 6,0 L. Trycket ökar till P₂ = 300 kPa vid konstant T.\nBeräkna V₂.',
   'ans':2.0,'tol':0.1,'unit':'L','formula':'P₁V₁ = P₂V₂',
   'hint':'V₂ = P₁V₁ / P₂.',
   'steps':['P₁V₁ = P₂V₂','V₂ = 100×6,0 / 300','V₂ = 2,0 L'],
   'sol':'V₂ = 100×6,0/300 = 2,0 L'},

  {'id':1203,'lv':1,'cat':'gas','title':'Charles lag',
   'q':'En gas: V₁ = 5,0 L vid T₁ = 250 K. Temperaturen ökar till T₂ = 500 K (konstant p).\nBeräkna V₂.',
   'ans':10.0,'tol':0.2,'unit':'L','formula':'V₁/T₁ = V₂/T₂',
   'hint':'V₂ = V₁ × T₂/T₁.',
   'steps':['V₂ = V₁ × T₂/T₁','V₂ = 5,0 × 500/250','V₂ = 10,0 L'],
   'sol':'V₂ = 5,0 × 500/250 = 10,0 L'},

  {'id':1204,'lv':1,'cat':'gas','title':'Gay-Lussacs lag',
   'q':'En gas: P₁ = 100 kPa vid T₁ = 300 K. Temperaturen stiger till T₂ = 600 K (konstant V).\nBeräkna P₂.',
   'ans':200.0,'tol':2.0,'unit':'kPa','formula':'P₁/T₁ = P₂/T₂',
   'hint':'P₂ = P₁ × T₂/T₁.',
   'steps':['P₂ = P₁ × T₂/T₁','P₂ = 100 × 600/300','P₂ = 200 kPa'],
   'sol':'P₂ = 100×600/300 = 200 kPa'},

  {'id':1205,'lv':2,'cat':'gas','title':'Kombinerade gaslagen',
   'q':'P₁=100 kPa, V₁=8,0 L, T₁=400 K → P₂=200 kPa, T₂=400 K.\nBeräkna V₂.',
   'ans':4.0,'tol':0.1,'unit':'L','formula':'P₁V₁/T₁ = P₂V₂/T₂',
   'hint':'V₂ = P₁V₁T₂ / (T₁P₂).',
   'steps':['V₂ = P₁V₁T₂ / (T₁P₂)','V₂ = 100×8,0×400 / (400×200)','V₂ = 320000/80000 = 4,0 L'],
   'sol':'V₂ = 100×8×400/(400×200) = 4,0 L'},

  {'id':1206,'lv':2,'cat':'gas','title':'Molmassa från densitet',
   'q':'En gas har densiteten 1,25 g/L vid STP.\nBeräkna molmassan M. (V_m = 22,4 L/mol vid STP)',
   'ans':28.0,'tol':0.5,'unit':'g/mol','formula':'M = ρ × V_m',
   'hint':'M = densitet × molär volym.',
   'steps':['M = ρ × V_m','M = 1,25 × 22,4','M = 28,0 g/mol (kväve N₂)'],
   'sol':'M = 1,25 × 22,4 = 28,0 g/mol'},

  {'id':1207,'lv':2,'cat':'gas','title':'Idealgas vid 546 K',
   'q':'1,0 mol idealgas vid T = 546 K och p = 101,3 kPa. Beräkna V.\nR = 8,314 J/(mol·K).',
   'ans':44.8,'tol':0.5,'unit':'L','formula':'V = nRT / p',
   'hint':'546 K = 2×273 K → V fördubblas från 22,4 L vid STP.',
   'steps':['V = nRT/p = 1,0×8,314×546 / 101300','= 4539 / 101300 m³','= 0,0448 m³ = 44,8 L'],
   'sol':'V = nRT/p = 44,8 L (dubbelt STP-volymen)'},

  {'id':1208,'lv':2,'cat':'gas','title':'Daltons lag',
   'q':'En gasblandning innehåller N₂ (60 kPa) och O₂ (40 kPa).\nBeräkna totaltrycket.',
   'ans':100.0,'tol':1.0,'unit':'kPa','formula':'p_tot = Σ pᵢ',
   'hint':'Addera partialtrycken.',
   'steps':['p_tot = p(N₂) + p(O₂)','p_tot = 60 + 40','p_tot = 100 kPa'],
   'sol':'p_tot = 60+40 = 100 kPa'},

  {'id':1209,'lv':3,'cat':'gas','title':'Grahams lag – diffusion',
   'q':'Hur många gånger snabbare diffunderar H₂ (M=2) jämfört med O₂ (M=32)?',
   'ans':4.0,'tol':0.1,'unit':'gånger','formula':'r_A/r_B = √(M_B/M_A)',
   'hint':'√(32/2) = √16 = 4.',
   'steps':['r(H₂)/r(O₂) = √(M(O₂)/M(H₂))','= √(32/2) = √16','= 4,0 gånger snabbare'],
   'sol':'r(H₂)/r(O₂) = √(32/2) = 4,0'},

  {'id':1210,'lv':3,'cat':'gas','title':'Molmassa okänd gas',
   'q':'2,50 g av en okänd gas upptar 1,40 L vid STP.\nBeräkna molmassan M. (V_m = 22,4 L/mol)',
   'ans':40.0,'tol':1.0,'unit':'g/mol','formula':'M = m/n = m × V_m / V',
   'hint':'n = V/V_m = 1,40/22,4. M = m/n.',
   'steps':['n = 1,40 / 22,4 = 0,0625 mol','M = m / n = 2,50 / 0,0625','M = 40 g/mol (ädelgas Ar)'],
   'sol':'M = 2,50/0,0625 = 40 g/mol'},

  {'id':1211,'lv':3,'cat':'gas','title':'n via idealgaslagen',
   'q':'p = 200 kPa, V = 5,0 L, T = 400 K. Beräkna n.\nR = 8,314 J/(mol·K). (1 L = 0,001 m³)',
   'ans':0.30,'tol':0.02,'unit':'mol','formula':'n = pV / RT',
   'hint':'Omvandla: p i Pa, V i m³. n = 200000×0,005 / (8,314×400).',
   'steps':['n = pV/RT = 200000×0,005 / (8,314×400)','= 1000 / 3325,6','n = 0,301 mol ≈ 0,30 mol'],
   'sol':'n = pV/RT = 1000/3325,6 = 0,30 mol'},

  {'id':1212,'lv':3,'cat':'gas','title':'Molmassa via effusion',
   'q':'Gas A (M=4 g/mol) tar 10 s att effundera. Gas B tar 40 s.\nBeräkna molmassan för gas B.',
   'ans':64.0,'tol':1.0,'unit':'g/mol','formula':'t_A/t_B = √(M_A/M_B) → M_B = M_A×(t_B/t_A)²',
   'hint':'(t_B/t_A)² = (40/10)² = 16. M_B = 4×16.',
   'steps':['t_B/t_A = 40/10 = 4','(t_B/t_A)² = 16','M_B = M_A × 16 = 4 × 16 = 64 g/mol'],
   'sol':'M_B = 4×(40/10)² = 4×16 = 64 g/mol'},
]

# ══════════════════════════════════════════════════════════════════
#  TERMOKEMI  (1301–1312)
# ══════════════════════════════════════════════════════════════════
problems += [
  {'id':1301,'lv':1,'cat':'termo','title':'q = mcΔT – uppvärmning',
   'q':'200 g vatten värms från 20 °C till 30 °C. Beräkna tillförd värme q.\nc(vatten) = 4,18 J/(g·K).',
   'ans':8360.0,'tol':50.0,'unit':'J','formula':'q = m × c × ΔT',
   'hint':'ΔT = 10 °C. q = 200 × 4,18 × 10.',
   'steps':['ΔT = 30−20 = 10 °C','q = m × c × ΔT = 200 × 4,18 × 10','q = 8360 J'],
   'sol':'q = 200×4,18×10 = 8360 J'},

  {'id':1302,'lv':1,'cat':'termo','title':'ΔT från q',
   'q':'5000 J värme tillförs 100 g vatten. Hur mycket stiger temperaturen?\nc(vatten) = 4,18 J/(g·K).',
   'ans':11.96,'tol':0.2,'unit':'°C','formula':'ΔT = q / (m × c)',
   'hint':'ΔT = 5000 / (100 × 4,18).',
   'steps':['ΔT = q / (m × c)','ΔT = 5000 / (100 × 4,18)','ΔT = 5000 / 418 ≈ 12,0 °C'],
   'sol':'ΔT = 5000/(100×4,18) = 12,0 °C'},

  {'id':1303,'lv':1,'cat':'termo','title':'Specifik värmekapacitet',
   'q':'1500 J värme höjer temperaturen på 50 g av ett ämne med 15 °C.\nBeräkna ämnets specifika värmekapacitet c.',
   'ans':2.0,'tol':0.05,'unit':'J/(g·K)','formula':'c = q / (m × ΔT)',
   'hint':'c = 1500 / (50 × 15).',
   'steps':['c = q / (m × ΔT)','c = 1500 / (50 × 15)','c = 1500 / 750 = 2,0 J/(g·K)'],
   'sol':'c = 1500/(50×15) = 2,0 J/(g·K)'},

  {'id':1304,'lv':1,'cat':'termo','title':'Energi vid förbränning av CH₄',
   'q':'ΔH°(förbränning CH₄) = −890 kJ/mol. Hur mycket energi frigörs vid förbränning av 2,0 mol CH₄?',
   'ans':1780.0,'tol':10.0,'unit':'kJ','formula':'q = |ΔH| × n',
   'hint':'Multiplicera |ΔH| med antal mol.',
   'steps':['q = |−890| × 2,0','q = 890 × 2,0','q = 1780 kJ'],
   'sol':'q = 890×2,0 = 1780 kJ'},

  {'id':1305,'lv':2,'cat':'termo','title':'Hess lag – två steg',
   'q':'A→B: ΔH₁ = −100 kJ. B→C: ΔH₂ = −50 kJ.\nBeräkna ΔH för A→C.',
   'ans':-150.0,'tol':2.0,'unit':'kJ','formula':'ΔH(A→C) = ΔH₁ + ΔH₂',
   'hint':'Addera entalpistegen.',
   'steps':['ΔH(A→C) = ΔH₁ + ΔH₂','= (−100) + (−50)','= −150 kJ'],
   'sol':'ΔH(A→C) = −100+(−50) = −150 kJ'},

  {'id':1306,'lv':2,'cat':'termo','title':'Energi per gram – propan',
   'q':'Förbränningsentalpi för propan C₃H₈: ΔH = −2220 kJ/mol. M(C₃H₈) = 44 g/mol.\nBeräkna |ΔH| per gram.',
   'ans':50.45,'tol':0.5,'unit':'kJ/g','formula':'ΔH/g = |ΔH| / M',
   'hint':'2220 / 44.',
   'steps':['|ΔH|/g = 2220 / 44','= 50,45 kJ/g'],
   'sol':'ΔH/g = 2220/44 = 50,5 kJ/g'},

  {'id':1307,'lv':2,'cat':'termo','title':'Blandningstemperatur vatten',
   'q':'50 g vatten (20 °C) blandas med 50 g vatten (80 °C).\nVad är sluttemperaturen? (c(H₂O) = 4,18 J/(g·K))',
   'ans':50.0,'tol':0.5,'unit':'°C','formula':'m₁c(T−T₁) = m₂c(T₂−T)',
   'hint':'Energibevarelse: värmen som avgår = värmen som absorberas.',
   'steps':['50×4,18×(T−20) = 50×4,18×(80−T)','T−20 = 80−T','2T = 100 → T = 50 °C'],
   'sol':'T = (20+80)/2 = 50 °C (lika massor)'},

  {'id':1308,'lv':2,'cat':'termo','title':'ΔH reaktion via ΔHf',
   'q':'2H₂ + O₂ → 2H₂O. ΔHf°(H₂O) = −286 kJ/mol.\nBeräkna ΔH° för reaktionen.',
   'ans':-572.0,'tol':5.0,'unit':'kJ','formula':'ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak)',
   'hint':'ΔH° = 2×(−286) − 0 = −572 kJ.',
   'steps':['ΔH°rxn = 2×ΔHf°(H₂O) − [2×ΔHf°(H₂) + ΔHf°(O₂)]','= 2×(−286) − 0','= −572 kJ'],
   'sol':'ΔH° = 2×(−286) = −572 kJ'},

  {'id':1309,'lv':3,'cat':'termo','title':'Hess – C + ½O₂ → CO',
   'q':'(1) C + O₂ → CO₂, ΔH₁ = −393 kJ\n(2) CO + ½O₂ → CO₂, ΔH₂ = −283 kJ\nBeräkna ΔH för: C + ½O₂ → CO',
   'ans':-110.0,'tol':2.0,'unit':'kJ','formula':'ΔH = ΔH₁ − ΔH₂',
   'hint':'Reaktion (1) minus reaktion (2) ger målreaktionen.',
   'steps':['Mål = (1) − (2)','ΔH = (−393) − (−283)','ΔH = −393 + 283 = −110 kJ'],
   'sol':'ΔH = −393−(−283) = −110 kJ'},

  {'id':1310,'lv':3,'cat':'termo','title':'ΔH – Haber-Bosch NH₃',
   'q':'N₂ + 3H₂ → 2NH₃. ΔHf°(NH₃) = −46 kJ/mol.\nBeräkna ΔH° för reaktionen.',
   'ans':-92.0,'tol':2.0,'unit':'kJ','formula':'ΔH°rxn = 2×ΔHf°(NH₃)',
   'hint':'ΔH° = 2×(−46) − 0.',
   'steps':['ΔH°rxn = 2×ΔHf°(NH₃) − [ΔHf°(N₂) + 3ΔHf°(H₂)]','= 2×(−46) − 0','= −92 kJ'],
   'sol':'ΔH° = 2×(−46) = −92 kJ'},

  {'id':1311,'lv':3,'cat':'termo','title':'ΔG = ΔH − TΔS',
   'q':'ΔH = −120 kJ/mol, ΔS = +200 J/(mol·K), T = 298 K.\nBeräkna ΔG i kJ/mol.',
   'ans':-179.6,'tol':2.0,'unit':'kJ/mol','formula':'ΔG = ΔH − TΔS',
   'hint':'Omvandla ΔS till kJ: 200 J = 0,200 kJ. ΔG = −120 − 298×0,200.',
   'steps':['ΔG = ΔH − TΔS','= −120 − 298×0,200 kJ','= −120 − 59,6 = −179,6 kJ/mol'],
   'sol':'ΔG = −120−59,6 = −179,6 kJ/mol (spontan)'},

  {'id':1312,'lv':3,'cat':'termo','title':'Neutralisationsentalpi – kalorimetri',
   'q':'100 mL 1,0 mol/L HCl + 100 mL 1,0 mol/L NaOH blandas i kalorimeter. ΔT = 6,85 °C.\nm(lösning) ≈ 200 g, c = 4,18 J/(g·K).\nBeräkna |ΔHneutr| per mol.',
   'ans':57.3,'tol':1.0,'unit':'kJ/mol','formula':'|ΔH| = q/n = mcΔT/n',
   'hint':'q = 200×4,18×6,85. n = 0,100 mol. ΔH = q/n.',
   'steps':['q = 200×4,18×6,85 = 5727 J','n(rxn) = 0,100 × 1,0 = 0,100 mol','|ΔH| = 5727/0,100/1000 = 57,3 kJ/mol'],
   'sol':'|ΔHneutr| = 5727/0,100/1000 = 57,3 kJ/mol'},
]

# ══════════════════════════════════════════════════════════════════
#  SYRA–BAS  (1401–1413)
# ══════════════════════════════════════════════════════════════════
problems += [
  {'id':1401,'lv':1,'cat':'syrabas','title':'pH från [H⁺]',
   'q':'Beräkna pH för en lösning med [H⁺] = 0,010 mol/L.',
   'ans':2.0,'tol':0.05,'unit':'','formula':'pH = −log[H⁺]',
   'hint':'pH = −log(0,010) = −log(10⁻²) = 2.',
   'steps':['pH = −log[H⁺]','= −log(0,010)','= −log(10⁻²) = 2,0'],
   'sol':'pH = −log(0,010) = 2,0'},

  {'id':1402,'lv':1,'cat':'syrabas','title':'pH från pOH',
   'q':'pOH = 3,0 vid 25 °C. Beräkna pH.',
   'ans':11.0,'tol':0.05,'unit':'','formula':'pH + pOH = 14',
   'hint':'pH = 14 − pOH.',
   'steps':['pH + pOH = 14','pH = 14 − 3,0','pH = 11,0'],
   'sol':'pH = 14−3,0 = 11,0'},

  {'id':1403,'lv':1,'cat':'syrabas','title':'[H⁺] från pH',
   'q':'pH = 4,0. [H⁺] = 10⁻ˣ mol/L. Vad är x?',
   'ans':4.0,'tol':0.05,'unit':'','formula':'[H⁺] = 10^(−pH)',
   'hint':'[H⁺] = 10⁻⁴ → x = 4.',
   'steps':['[H⁺] = 10^(−pH)','= 10^(−4,0)','x = 4,0'],
   'sol':'[H⁺] = 10⁻⁴ mol/L → x = 4,0'},

  {'id':1404,'lv':1,'cat':'syrabas','title':'pH neutral lösning',
   'q':'Vid 25 °C är Kw = 10⁻¹⁴. Vad är pH för en neutral lösning?',
   'ans':7.0,'tol':0.05,'unit':'','formula':'pH = ½ × pKw = 7,0',
   'hint':'I neutral lösning: [H⁺] = [OH⁻] = √Kw = 10⁻⁷.',
   'steps':['[H⁺] = √Kw = √(10⁻¹⁴) = 10⁻⁷ mol/L','pH = −log(10⁻⁷)','pH = 7,0'],
   'sol':'pH = 7,0 (neutral vid 25 °C)'},

  {'id':1405,'lv':2,'cat':'syrabas','title':'pH svag syra HF',
   'q':'Ka(HF) = 6,8×10⁻⁴, c = 0,10 mol/L. Beräkna pH.\n(Approximation: [H⁺] = √(Ka × c))',
   'ans':2.08,'tol':0.05,'unit':'','formula':'[H⁺] = √(Ka × c)',
   'hint':'[H⁺] = √(6,8×10⁻⁴ × 0,10) = √(6,8×10⁻⁵).',
   'steps':['[H⁺] = √(6,8×10⁻⁴ × 0,10) = √(6,8×10⁻⁵)','= 8,25×10⁻³ mol/L','pH = −log(8,25×10⁻³) = 2,08'],
   'sol':'pH = −log(√(6,8×10⁻⁵)) = 2,08'},

  {'id':1406,'lv':2,'cat':'syrabas','title':'Buffer – Henderson-Hasselbalch',
   'q':'Buffer med [CH₃COOH] = [CH₃COO⁻] = 0,10 mol/L. pKa(CH₃COOH) = 4,74.\nBeräkna pH.',
   'ans':4.74,'tol':0.05,'unit':'','formula':'pH = pKa + log([A⁻]/[HA])',
   'hint':'log(1) = 0 → pH = pKa.',
   'steps':['pH = pKa + log([A⁻]/[HA])','= 4,74 + log(0,10/0,10)','= 4,74 + 0 = 4,74'],
   'sol':'pH = pKa + log(1) = 4,74'},

  {'id':1407,'lv':2,'cat':'syrabas','title':'Ekvivalensvolym vid titrering',
   'q':'25 mL 0,100 mol/L HCl titreras med NaOH (0,200 mol/L).\nHur många mL NaOH behövs för att nå ekvivalenspunkten?',
   'ans':12.5,'tol':0.2,'unit':'mL','formula':'c₁V₁ = c₂V₂',
   'hint':'n(HCl) = 0,100×0,025. V(NaOH) = n/c.',
   'steps':['n(HCl) = 0,100 × 0,025 = 0,0025 mol','V(NaOH) = 0,0025 / 0,200 = 0,0125 L','= 12,5 mL'],
   'sol':'V(NaOH) = 0,0025/0,200 = 12,5 mL'},

  {'id':1408,'lv':2,'cat':'syrabas','title':'pKa från pH',
   'q':'En 0,050 mol/L lösning av svag syra HA har pH = 3,0.\nBeräkna pKa (approximation: Ka ≈ [H⁺]²/c).',
   'ans':4.70,'tol':0.05,'unit':'','formula':'pKa = −log(Ka) = −log([H⁺]²/c)',
   'hint':'Ka = (10⁻³)²/0,050 = 10⁻⁶/0,050 = 2×10⁻⁵. pKa = −log(2×10⁻⁵).',
   'steps':['Ka = [H⁺]²/c = (10⁻³)²/0,050 = 2,0×10⁻⁵','pKa = −log(2,0×10⁻⁵)','= 4,70'],
   'sol':'pKa = −log(2,0×10⁻⁵) = 4,70'},

  {'id':1409,'lv':2,'cat':'syrabas','title':'pH blandning starka syror',
   'q':'50 mL 0,20 mol/L HCl blandas med 50 mL 0,10 mol/L HCl.\nBeräkna pH för blandningen.',
   'ans':0.82,'tol':0.05,'unit':'','formula':'c = (n₁+n₂)/(V₁+V₂)',
   'hint':'Beräkna total n(H⁺) och total V. Sedan pH = −log(c).',
   'steps':['n(H⁺) = 0,050×0,20 + 0,050×0,10 = 0,015 mol','c = 0,015/0,100 = 0,15 mol/L','pH = −log(0,15) = 0,82'],
   'sol':'pH = −log(0,15) = 0,82'},

  {'id':1410,'lv':3,'cat':'syrabas','title':'HH – beräkna [A⁻]',
   'q':'pKa = 4,75. pH = 5,0. [HA] = 0,10 mol/L.\nBeräkna [A⁻] via Henderson-Hasselbalch.',
   'ans':0.178,'tol':0.01,'unit':'mol/L','formula':'[A⁻] = [HA] × 10^(pH−pKa)',
   'hint':'log([A⁻]/[HA]) = pH−pKa = 0,25. [A⁻]/[HA] = 10^0,25 ≈ 1,778.',
   'steps':['pH−pKa = 5,0−4,75 = 0,25','[A⁻]/[HA] = 10^0,25 = 1,778','[A⁻] = 1,778 × 0,10 = 0,178 mol/L'],
   'sol':'[A⁻] = 0,10 × 10^0,25 = 0,178 mol/L'},

  {'id':1411,'lv':3,'cat':'syrabas','title':'pH natriumacetat',
   'q':'CH₃COONa, c = 0,10 mol/L. Ka(CH₃COOH) = 1,8×10⁻⁵. Kw = 10⁻¹⁴.\nBeräkna pH.',
   'ans':8.87,'tol':0.1,'unit':'','formula':'[OH⁻] = √(Kb × c), Kb = Kw/Ka',
   'hint':'Kb = 10⁻¹⁴/1,8×10⁻⁵ = 5,56×10⁻¹⁰. [OH⁻] = √(Kb×c). pOH → pH.',
   'steps':['Kb = 10⁻¹⁴/1,8×10⁻⁵ = 5,56×10⁻¹⁰','[OH⁻] = √(5,56×10⁻¹⁰×0,10) = 7,46×10⁻⁶','pOH = 5,13 → pH = 14−5,13 = 8,87'],
   'sol':'pH = 14−pOH = 14−5,13 = 8,87'},

  {'id':1412,'lv':3,'cat':'syrabas','title':'pH vid halvvägspunkten',
   'q':'En svag syra HA titreras med NaOH. pKa(HA) = 4,74.\nVad är pH exakt vid halvvägspunkten?',
   'ans':4.74,'tol':0.05,'unit':'','formula':'pH = pKa (vid halvvägspunkten)',
   'hint':'Vid halvvägs: [HA] = [A⁻] → log([A⁻]/[HA]) = 0 → pH = pKa.',
   'steps':['Vid halvvägspunkten: [HA] = [A⁻]','log(1) = 0','pH = pKa + 0 = 4,74'],
   'sol':'pH = pKa = 4,74 vid halvvägspunkten'},

  {'id':1413,'lv':3,'cat':'syrabas','title':'Neutral pH vid annan T',
   'q':'Vid 80 °C är Kw = 10⁻¹³. Vad är pH för en neutral lösning vid denna temperatur?',
   'ans':6.5,'tol':0.05,'unit':'','formula':'pH_neutral = ½ × pKw',
   'hint':'pKw = 13. pH_neutral = 13/2 = 6,5.',
   'steps':['Neutral: [H⁺] = √Kw = √(10⁻¹³) = 10⁻⁶·⁵','pH = 6,5','(vatten är fortfarande neutral, men pH < 7)'],
   'sol':'pH_neutral = ½×pKw = ½×13 = 6,5'},
]

# ══════════════════════════════════════════════════════════════════
#  JÄMVIKT  (1501–1513)
# ══════════════════════════════════════════════════════════════════
problems += [
  {'id':1501,'lv':1,'cat':'jamvikt','title':'Kc från koncentrationer',
   'q':'H₂ + I₂ ⇌ 2HI vid jämvikt.\n[H₂] = 0,50, [I₂] = 0,50, [HI] = 4,0 mol/L.\nBeräkna Kc.',
   'ans':64.0,'tol':2.0,'unit':'','formula':'Kc = [HI]² / ([H₂][I₂])',
   'hint':'Kc = 4,0² / (0,50 × 0,50) = 16/0,25.',
   'steps':['Kc = [HI]² / ([H₂][I₂])','= (4,0)² / (0,50 × 0,50)','= 16 / 0,25 = 64'],
   'sol':'Kc = 16/0,25 = 64'},

  {'id':1502,'lv':1,'cat':'jamvikt','title':'Kc omvänd reaktion',
   'q':'Kc(framåt) = 64 för H₂ + I₂ ⇌ 2HI.\nVad är Kc för den omvända reaktionen 2HI ⇌ H₂ + I₂?',
   'ans':0.015625,'tol':0.001,'unit':'','formula':'Kc(bakåt) = 1/Kc(framåt)',
   'hint':'Inverteras Kc.',
   'steps':['Kc(bakåt) = 1/Kc(framåt)','= 1/64','= 0,0156'],
   'sol':'Kc(bakåt) = 1/64 = 0,0156'},

  {'id':1503,'lv':1,'cat':'jamvikt','title':'Kc enkel – 2A⇌B',
   'q':'2A ⇌ B vid jämvikt. [A] = 0,40 mol/L, [B] = 0,16 mol/L.\nBeräkna Kc.',
   'ans':1.0,'tol':0.05,'unit':'(mol/L)⁻¹','formula':'Kc = [B] / [A]²',
   'hint':'[B]/[A]² = 0,16/0,16 = 1,0.',
   'steps':['Kc = [B] / [A]²','= 0,16 / (0,40)²','= 0,16 / 0,16 = 1,0'],
   'sol':'Kc = 0,16/0,16 = 1,0'},

  {'id':1504,'lv':1,'cat':'jamvikt','title':'Partialtryck NH₃',
   'q':'Vid jämvikt: n(N₂)=0,10, n(H₂)=0,30, n(NH₃)=0,60 mol. p_tot=100 kPa.\nBeräkna p(NH₃).',
   'ans':60.0,'tol':1.0,'unit':'kPa','formula':'p_i = χ_i × p_tot',
   'hint':'Molfraktion NH₃ = 0,60/(0,10+0,30+0,60) = 0,60.',
   'steps':['n_tot = 0,10+0,30+0,60 = 1,00 mol','χ(NH₃) = 0,60/1,00 = 0,60','p(NH₃) = 0,60 × 100 = 60 kPa'],
   'sol':'p(NH₃) = 0,60 × 100 = 60 kPa'},

  {'id':1505,'lv':2,'cat':'jamvikt','title':'Kp från Kc',
   'q':'2SO₂ + O₂ ⇌ 2SO₃. Kc = 280 vid 1000 K. R = 0,08206 L·atm/(mol·K).\nBeräkna Kp. (Δn = −1)',
   'ans':3.41,'tol':0.2,'unit':'atm⁻¹','formula':'Kp = Kc × (RT)^Δn',
   'hint':'Kp = 280 × (0,08206×1000)^(−1) = 280/82,06.',
   'steps':['Δn = 2−3 = −1','RT = 0,08206 × 1000 = 82,06 L·atm/mol','Kp = 280 × (82,06)⁻¹ = 280/82,06 = 3,41'],
   'sol':'Kp = Kc/(RT) = 280/82,06 = 3,41'},

  {'id':1506,'lv':2,'cat':'jamvikt','title':'ICE-tabell – Kc = 4',
   'q':'A + B ⇌ C. Kc = 4,0. Initialt [A]=[B]=1,0, [C]=0 mol/L.\nBeräkna jämviktskoncentrationen [C].',
   'ans':0.61,'tol':0.05,'unit':'mol/L','formula':'Kc = x / (1−x)²',
   'hint':'4(1−x)²=x → 4x²−9x+4=0. x=(9−√17)/8.',
   'steps':['Kc = x/(1−x)² = 4','4x²−9x+4=0','x = (9−√17)/8 ≈ 0,61 mol/L'],
   'sol':'[C] = (9−√17)/8 ≈ 0,61 mol/L'},

  {'id':1507,'lv':2,'cat':'jamvikt','title':'Le Chatelier – [A]/[B]',
   'q':'A ⇌ B. Vid 500 K (endoterm rxn): Kc = 25.\nVad är kvoten [A]/[B] vid jämvikt?',
   'ans':0.04,'tol':0.005,'unit':'','formula':'[A]/[B] = 1/Kc',
   'hint':'Kc = [B]/[A] = 25. [A]/[B] = 1/25.',
   'steps':['Kc = [B]/[A] = 25','[A]/[B] = 1/Kc','= 1/25 = 0,040'],
   'sol':'[A]/[B] = 1/25 = 0,040'},

  {'id':1508,'lv':2,'cat':'jamvikt','title':'Ksp – löslighet AgCl',
   'q':'Ksp(AgCl) = 1,8×10⁻¹⁰. Beräkna lösligheten s.\nAnge svaret som x×10⁻⁵ mol/L (ange x).',
   'ans':1.34,'tol':0.05,'unit':'×10⁻⁵ mol/L','formula':'s = √Ksp',
   'hint':'s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L.',
   'steps':['s = √Ksp = √(1,8×10⁻¹⁰)','= √(18) × 10⁻⁶','= 1,34×10⁻⁵ mol/L → x = 1,34'],
   'sol':'s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L'},

  {'id':1509,'lv':3,'cat':'jamvikt','title':'ICE – 2NO₂ ⇌ N₂O₄',
   'q':'2NO₂ ⇌ N₂O₄. Kc = 4,0. Initialt [NO₂]=1,0, [N₂O₄]=0 mol/L.\nBeräkna [N₂O₄] vid jämvikt.',
   'ans':0.32,'tol':0.05,'unit':'mol/L','formula':'Kc = x / (1−2x)²',
   'hint':'16x²−17x+4=0. x=(17−√33)/32.',
   'steps':['Kc = x/(1−2x)² = 4','16x²−17x+4=0','x = (17−√33)/32 ≈ 0,35 → avrunda till 0,32–0,36'],
   'sol':'[N₂O₄] ≈ 0,35 mol/L (löser kvadratekvationen)'},

  {'id':1510,'lv':3,'cat':'jamvikt','title':'Ksp – gemensam jon',
   'q':'AgCl löses i 0,10 mol/L NaCl. Ksp(AgCl) = 1,8×10⁻¹⁰.\nBeräkna [Ag⁺] som x×10⁻⁹ mol/L (ange x).',
   'ans':1.8,'tol':0.1,'unit':'×10⁻⁹ mol/L','formula':'[Ag⁺] = Ksp / [Cl⁻]',
   'hint':'[Cl⁻] ≈ 0,10 mol/L (överskott). [Ag⁺] = Ksp/0,10.',
   'steps':['[Cl⁻] ≈ 0,10 mol/L','[Ag⁺] = Ksp/[Cl⁻] = 1,8×10⁻¹⁰/0,10','= 1,8×10⁻⁹ mol/L → x = 1,8'],
   'sol':'[Ag⁺] = 1,8×10⁻¹⁰/0,10 = 1,8×10⁻⁹ mol/L'},

  {'id':1511,'lv':3,'cat':'jamvikt','title':'Kp → Kc (N₂O₄⇌2NO₂)',
   'q':'N₂O₄ ⇌ 2NO₂. Kp = 1,00 atm vid 300 K. R = 0,08206 L·atm/(mol·K).\nBeräkna Kc. (Δn = +1)',
   'ans':0.041,'tol':0.003,'unit':'mol/L','formula':'Kc = Kp / (RT)^Δn',
   'hint':'Kc = Kp/(RT) = 1,00/(0,08206×300).',
   'steps':['RT = 0,08206 × 300 = 24,62 L·atm/mol','Kc = Kp/(RT)^Δn = 1,00/24,62','Kc = 0,0406 ≈ 0,041 mol/L'],
   'sol':'Kc = 1,00/24,62 = 0,041 mol/L'},

  {'id':1512,'lv':3,'cat':'jamvikt','title':'ICE – PCl₅ ⇌ PCl₃ + Cl₂',
   'q':'PCl₅ ⇌ PCl₃ + Cl₂. Kc = 0,040. Initialt [PCl₅]=1,0, [PCl₃]=[Cl₂]=0.\nBeräkna [PCl₃] vid jämvikt.',
   'ans':0.18,'tol':0.02,'unit':'mol/L','formula':'Kc = x² / (1−x)',
   'hint':'x²+0,040x−0,040=0. x=(−0,04+√0,1616)/2.',
   'steps':['x²/(1−x) = 0,040','x²+0,040x−0,040=0','x = (−0,040+√0,1616)/2 ≈ 0,181 mol/L'],
   'sol':'[PCl₃] ≈ 0,18 mol/L'},

  {'id':1513,'lv':3,'cat':'jamvikt','title':'Multipel jämvikt',
   'q':'A ⇌ B: K₁ = 2,0. B ⇌ C: K₂ = 3,0.\nBeräkna K för A ⇌ C.',
   'ans':6.0,'tol':0.1,'unit':'','formula':'K(A⇌C) = K₁ × K₂',
   'hint':'När reaktioner adderas multipliceras deras K.',
   'steps':['A⇌C = (A⇌B) + (B⇌C)','K = K₁ × K₂','= 2,0 × 3,0 = 6,0'],
   'sol':'K(A⇌C) = K₁×K₂ = 6,0'},
]

# ══════════════════════════════════════════════════════════════════
#  ELEKTROKEMI  (1601–1613)
# ══════════════════════════════════════════════════════════════════
problems += [
  {'id':1601,'lv':1,'cat':'elkem','title':'E°cell – Zn/Cu',
   'q':'Zn | Zn²⁺ || Cu²⁺ | Cu. E°(Cu²⁺/Cu) = +0,34 V, E°(Zn²⁺/Zn) = −0,76 V.\nBeräkna E°cell.',
   'ans':1.10,'tol':0.02,'unit':'V','formula':'E°cell = E°katod − E°anod',
   'hint':'Katod = Cu (reduceras), Anod = Zn (oxideras).',
   'steps':['E°cell = E°katod − E°anod','= (+0,34) − (−0,76)','= 1,10 V'],
   'sol':'E°cell = 0,34−(−0,76) = 1,10 V'},

  {'id':1602,'lv':1,'cat':'elkem','title':'E°cell – Pb/Ag',
   'q':'E°(Ag⁺/Ag) = +0,80 V, E°(Pb²⁺/Pb) = −0,13 V.\nBeräkna E°cell för Pb | Pb²⁺ || Ag⁺ | Ag.',
   'ans':0.93,'tol':0.02,'unit':'V','formula':'E°cell = E°katod − E°anod',
   'hint':'Ag reduceras (katod), Pb oxideras (anod).',
   'steps':['E°cell = E°(Ag) − E°(Pb)','= (+0,80) − (−0,13)','= 0,93 V'],
   'sol':'E°cell = 0,80−(−0,13) = 0,93 V'},

  {'id':1603,'lv':1,'cat':'elkem','title':'Antal elektroner – Cl₂',
   'q':'Cl₂ + 2e⁻ → 2Cl⁻. Hur många elektroner per Cl₂-molekyl?',
   'ans':2.0,'tol':0.05,'unit':'e⁻','formula':'Halvreaktion anger e⁻',
   'hint':'Direkt avläsning från halfreaktionen.',
   'steps':['Cl₂ + 2e⁻ → 2Cl⁻','2 elektroner per Cl₂'],
   'sol':'n(e⁻) = 2 per mol Cl₂'},

  {'id':1604,'lv':1,'cat':'elkem','title':'Massa Cu vid elektrolys',
   'q':'I = 10 A, t = 9650 s. Cu²⁺ + 2e⁻ → Cu. M(Cu) = 63,5 g/mol. F = 96500 C/mol.\nBeräkna massa Cu deponerat.',
   'ans':31.75,'tol':0.5,'unit':'g','formula':'m = (I×t×M) / (n×F)',
   'hint':'Q = 10×9650 = 96500 C = 1 mol e⁻. Mol Cu = 0,5. m = 0,5×63,5.',
   'steps':['Q = I×t = 10×9650 = 96500 C','mol e⁻ = 96500/96500 = 1,0 mol','mol Cu = 1,0/2 = 0,5 mol → m = 0,5×63,5 = 31,75 g'],
   'sol':'m = 0,5×63,5 = 31,8 g'},

  {'id':1605,'lv':2,'cat':'elkem','title':'Nernst – Cu²⁺/Cu',
   'q':'Cu²⁺ + 2e⁻ → Cu. E° = +0,34 V. [Cu²⁺] = 0,010 mol/L.\nE = E° − (0,0592/n)×log Q. Beräkna E.',
   'ans':0.399,'tol':0.01,'unit':'V','formula':'E = E° − (0,0592/n) × log[Cu²⁺]',
   'hint':'Q = 1/[Cu²⁺] = 100. E = 0,34 − (0,0296)×log(100)... Eller: log Q = log(1/0,010) = 2. E = 0,34−0,0296×2.',
   'steps':['n = 2. Q = 1/[Cu²⁺] = 1/0,010 = 100','E = 0,34 − (0,0592/2)×log(100)','= 0,34 − 0,0296×2 = 0,34−0,0592... '],
   'sol':'E = 0,34 − 0,0296×log(1/0,010) → se beräkning'},

  {'id':1606,'lv':2,'cat':'elkem','title':'Elektrolystid – Cu',
   'q':'Hur lång tid krävs för att deponera 6,35 g Cu (M=63,5) med strömmen 5,0 A?\nCu²⁺+2e⁻→Cu. F=96500 C/mol.',
   'ans':3860.0,'tol':20.0,'unit':'s','formula':'t = (m×n×F) / (M×I)',
   'hint':'mol Cu = 6,35/63,5 = 0,1. mol e⁻ = 0,2. Q = 0,2×96500. t = Q/I.',
   'steps':['mol Cu = 6,35/63,5 = 0,100 mol','Q = 0,200×96500 = 19300 C','t = Q/I = 19300/5,0 = 3860 s'],
   'sol':'t = 19300/5,0 = 3860 s'},

  {'id':1607,'lv':2,'cat':'elkem','title':'E°cell – Cr/Au',
   'q':'E°(Au³⁺/Au) = +1,50 V, E°(Cr³⁺/Cr) = −0,74 V.\nBeräkna E°cell för Cr | Cr³⁺ || Au³⁺ | Au.',
   'ans':2.24,'tol':0.02,'unit':'V','formula':'E°cell = E°katod − E°anod',
   'hint':'Au reduceras, Cr oxideras.',
   'steps':['E°cell = E°(Au) − E°(Cr)','= 1,50 − (−0,74)','= 2,24 V'],
   'sol':'E°cell = 1,50+0,74 = 2,24 V'},

  {'id':1608,'lv':2,'cat':'elkem','title':'Massa Al vid elektrolys',
   'q':'Al³⁺ + 3e⁻ → Al. I = 3,0 A, t = 9650 s. M(Al) = 27 g/mol. F = 96500 C/mol.\nBeräkna massa Al.',
   'ans':2.7,'tol':0.1,'unit':'g','formula':'m = (I×t×M) / (n×F)',
   'hint':'Q = 3×9650 = 28950 C. mol e⁻ = 0,300. mol Al = 0,100.',
   'steps':['Q = 3,0×9650 = 28950 C','mol e⁻ = 28950/96500 = 0,300 mol','mol Al = 0,100 → m = 0,100×27 = 2,70 g'],
   'sol':'m = 0,100×27 = 2,70 g'},

  {'id':1609,'lv':3,'cat':'elkem','title':'ΔG från E°cell',
   'q':'Zn/Cu cell: E°cell = 1,10 V, n = 2 elektroner. F = 96500 C/mol.\nBeräkna ΔG° i kJ.',
   'ans':-212.3,'tol':2.0,'unit':'kJ','formula':'ΔG° = −nFE°',
   'hint':'ΔG = −2×96500×1,10 J = −212300 J = −212,3 kJ.',
   'steps':['ΔG° = −nFE°','= −2×96500×1,10','= −212300 J = −212,3 kJ'],
   'sol':'ΔG° = −2×96500×1,10 = −212,3 kJ'},

  {'id':1610,'lv':3,'cat':'elkem','title':'E vid pH 7 – O₂/H₂O',
   'q':'O₂ + 4H⁺ + 4e⁻ → 2H₂O. E° = +1,23 V. pH = 7. p(O₂) = 1 atm.\nE = E° − (0,0592/4)×log(1/[H⁺]⁴). Beräkna E.',
   'ans':0.816,'tol':0.01,'unit':'V','formula':'E = E° − 0,0592×pH/n × n = E° − 0,0592×pH',
   'hint':'log Q = log(1/(10⁻⁷)⁴) = 28. E = 1,23 − (0,0148×28).',
   'steps':['Q = 1/[H⁺]⁴ = (10⁷)⁴ = 10²⁸','E = 1,23 − (0,0592/4)×28','= 1,23 − 0,0148×28 = 1,23−0,414 = 0,816 V'],
   'sol':'E = 1,23−0,414 = 0,816 V vid pH 7'},

  {'id':1611,'lv':3,'cat':'elkem','title':'Volym H₂ vid elektrolys',
   'q':'2H₂O → 2H₂ + O₂. I = 2,0 A, t = 4825 s. F = 96500 C/mol.\nBeräkna volymen H₂ vid STP (22,4 L/mol).',
   'ans':1.12,'tol':0.05,'unit':'L','formula':'V(H₂) = (I×t)/(2F) × 22,4',
   'hint':'Q=9650 C. mol e⁻=0,1. 2e⁻→1H₂ → mol H₂=0,05. V=0,05×22,4.',
   'steps':['Q = 2,0×4825 = 9650 C','mol e⁻ = 9650/96500 = 0,100 mol','mol H₂ = 0,050 → V = 0,050×22,4 = 1,12 L'],
   'sol':'V(H₂) = 0,050×22,4 = 1,12 L'},

  {'id':1612,'lv':3,'cat':'elkem','title':'Katodiskt skydd Zn/Fe',
   'q':'E°(Fe²⁺/Fe) = −0,44 V, E°(Zn²⁺/Zn) = −0,76 V.\nZink används som offeranod för att skydda järn. Beräkna E°cell.',
   'ans':0.32,'tol':0.02,'unit':'V','formula':'E°cell = E°(Fe) − E°(Zn)',
   'hint':'Fe = katod (skyddas), Zn = anod (korroderar). E°cell = E°(Fe)−E°(Zn).',
   'steps':['Katod: Fe (skyddas), Anod: Zn (korroderar)','E°cell = (−0,44) − (−0,76)','= 0,32 V'],
   'sol':'E°cell = −0,44+0,76 = 0,32 V'},

  {'id':1613,'lv':3,'cat':'elkem','title':'Laddning per 3 mol Ag',
   'q':'Ag⁺ + e⁻ → Ag. Hur stor laddning Q (C) passerar för att deponera 3,0 mol Ag?\nF = 96500 C/mol.',
   'ans':289500.0,'tol':100.0,'unit':'C','formula':'Q = n × n_e × F',
   'hint':'n_e = 1 per Ag. Q = 3,0×1×96500.',
   'steps':['n(e⁻) = 1 per mol Ag','Q = 3,0 × 1 × 96500','Q = 289500 C'],
   'sol':'Q = 3,0×96500 = 289500 C'},
]

# ══════════════════════════════════════════════════════════════════
#  STOIKIOMETRI  (1701–1713)
# ══════════════════════════════════════════════════════════════════
problems += [
  {'id':1701,'lv':1,'cat':'stoik','title':'Mol NH₃ från N₂',
   'q':'N₂ + 3H₂ → 2NH₃. Hur många mol NH₃ bildas av 3,0 mol N₂ (överskott H₂)?',
   'ans':6.0,'tol':0.1,'unit':'mol','formula':'n(NH₃) = 2 × n(N₂)',
   'hint':'1 mol N₂ → 2 mol NH₃.',
   'steps':['N₂ : NH₃ = 1 : 2','n(NH₃) = 2 × 3,0','n(NH₃) = 6,0 mol'],
   'sol':'n(NH₃) = 2×3,0 = 6,0 mol'},

  {'id':1702,'lv':1,'cat':'stoik','title':'Massa CO₂ från kol',
   'q':'C + O₂ → CO₂. 2,0 mol C förbränns. Beräkna massan CO₂ som bildas. M(CO₂) = 44 g/mol.',
   'ans':88.0,'tol':1.0,'unit':'g','formula':'m = n × M',
   'hint':'1 mol C → 1 mol CO₂. m = 2,0 × 44.',
   'steps':['n(CO₂) = n(C) = 2,0 mol','m = n × M = 2,0 × 44','m = 88 g'],
   'sol':'m(CO₂) = 2,0×44 = 88 g'},

  {'id':1703,'lv':1,'cat':'stoik','title':'Massa H₂ för H₂O',
   'q':'2H₂ + O₂ → 2H₂O. Beräkna massa H₂ som behövs för att bilda 3,6 g H₂O.\nM(H₂O)=18, M(H₂)=2 g/mol.',
   'ans':0.4,'tol':0.02,'unit':'g','formula':'m(H₂) = n(H₂) × M(H₂)',
   'hint':'n(H₂O)=3,6/18=0,2 mol. n(H₂)=n(H₂O)=0,2 mol. m=0,2×2.',
   'steps':['n(H₂O) = 3,6/18 = 0,20 mol','n(H₂) = n(H₂O) = 0,20 mol (1:1)','m(H₂) = 0,20 × 2 = 0,40 g'],
   'sol':'m(H₂) = 0,20×2 = 0,40 g'},

  {'id':1704,'lv':1,'cat':'stoik','title':'Mol Fe från CO₂',
   'q':'Fe₂O₃ + 3CO → 2Fe + 3CO₂. Om 6,0 mol CO₂ bildas, hur många mol Fe bildas?',
   'ans':4.0,'tol':0.1,'unit':'mol','formula':'Fe : CO₂ = 2 : 3',
   'hint':'2 mol Fe per 3 mol CO₂. n(Fe) = 6,0 × (2/3).',
   'steps':['Fe : CO₂ = 2 : 3','n(Fe) = 6,0 × (2/3)','n(Fe) = 4,0 mol'],
   'sol':'n(Fe) = 6,0 × 2/3 = 4,0 mol'},

  {'id':1705,'lv':2,'cat':'stoik','title':'Massa NH₃ – perfekt stök.',
   'q':'3H₂ + N₂ → 2NH₃. 6,0 g H₂ (n=3,0 mol) + 28 g N₂ (n=1,0 mol).\nBeräkna massa NH₃ som bildas. M(NH₃) = 17 g/mol.',
   'ans':34.0,'tol':0.5,'unit':'g','formula':'n(NH₃) = 2 × n(N₂) el. (2/3)×n(H₂)',
   'hint':'Perfekt stökiometri (3:1). n(NH₃)=2×1,0=2,0 mol.',
   'steps':['3 mol H₂ : 1 mol N₂ → exakt stökiometrisk','n(NH₃) = 2 × 1,0 = 2,0 mol','m(NH₃) = 2,0 × 17 = 34 g'],
   'sol':'m(NH₃) = 2,0×17 = 34 g'},

  {'id':1706,'lv':2,'cat':'stoik','title':'Begränsande reagens – AlCl₃',
   'q':'2Al + 3Cl₂ → 2AlCl₃. 54 g Al (n=2,0) + 142 g Cl₂ (n=2,0 mol).\nM(AlCl₃)=133,5. Beräkna massa AlCl₃.',
   'ans':178.0,'tol':3.0,'unit':'g','formula':'Begränsande: Cl₂',
   'hint':'2 mol Al kräver 3 mol Cl₂, men bara 2 mol Cl₂ finns → Cl₂ begränsar. n(AlCl₃)=2×(2/3)≈1,33 mol.',
   'steps':['Cl₂ krävs: 2,0×(3/2)=3,0 mol, men bara 2,0 mol → Cl₂ begränsar','n(AlCl₃) = 2,0×(2/3) = 1,333 mol','m = 1,333 × 133,5 = 178 g'],
   'sol':'Cl₂ begränsar → m(AlCl₃) = 1,333×133,5 = 178 g'},

  {'id':1707,'lv':2,'cat':'stoik','title':'Överskott O₂',
   'q':'CH₄ + 2O₂ → CO₂ + 2H₂O. 2,0 mol CH₄ blandas med 6,0 mol O₂.\nBeräkna massa överskotts-O₂. M(O₂)=32 g/mol.',
   'ans':64.0,'tol':1.0,'unit':'g','formula':'m_överskott = n_överskott × M',
   'hint':'O₂ behövs: 2×2,0=4,0 mol. Överskott: 6,0−4,0=2,0 mol.',
   'steps':['O₂ som förbrukas = 2,0×2 = 4,0 mol','Överskott O₂ = 6,0−4,0 = 2,0 mol','m = 2,0 × 32 = 64 g'],
   'sol':'m(överskott O₂) = 2,0×32 = 64 g'},

  {'id':1708,'lv':2,'cat':'stoik','title':'Teoretisk massa Fe₂O₃',
   'q':'4Fe + 3O₂ → 2Fe₂O₃. 112 g järn (n=2,0 mol). M(Fe₂O₃)=160 g/mol.\nBeräkna teoretisk massa Fe₂O₃.',
   'ans':160.0,'tol':2.0,'unit':'g','formula':'n(Fe₂O₃) = ½ × n(Fe)',
   'hint':'4 mol Fe → 2 mol Fe₂O₃. n(Fe₂O₃)=2,0×(2/4)=1,0 mol.',
   'steps':['n(Fe₂O₃) = n(Fe) × (2/4) = 2,0 × 0,5 = 1,0 mol','m = 1,0 × 160','m = 160 g'],
   'sol':'m(Fe₂O₃) = 1,0×160 = 160 g'},

  {'id':1709,'lv':3,'cat':'stoik','title':'Procentuellt utbyte',
   'q':'Teoretisk produktmassa: 50 g. Faktisk produktmassa: 35 g.\nBeräkna det procentuella utbytet.',
   'ans':70.0,'tol':0.5,'unit':'%','formula':'utbyte% = (faktisk/teoretisk) × 100',
   'hint':'35/50 × 100.',
   'steps':['utbyte% = 35/50 × 100','= 0,70 × 100','= 70 %'],
   'sol':'utbyte% = 35/50×100 = 70 %'},

  {'id':1710,'lv':3,'cat':'stoik','title':'Förbränningsanalys – n(H)/n(C)',
   'q':'En kolförening förbränns och ger 44 g CO₂ och 18 g H₂O.\nBeräkna kvoten n(H)/n(C).',
   'ans':2.0,'tol':0.05,'unit':'','formula':'n(C) från CO₂, n(H) från H₂O',
   'hint':'n(C)=44/44=1 mol. n(H)=2×18/18=2 mol.',
   'steps':['n(CO₂) = 44/44 = 1,0 mol → n(C) = 1,0','n(H₂O) = 18/18 = 1,0 mol → n(H) = 2,0','n(H)/n(C) = 2,0/1,0 = 2,0'],
   'sol':'n(H)/n(C) = 2,0 → empirisk formel CH₂'},

  {'id':1711,'lv':3,'cat':'stoik','title':'Sekventiella reaktioner med utbyte',
   'q':'A → 2B (utbyte 80 %). B → C (utbyte 90 %). Start: 1,0 mol A.\nHur många mol C bildas?',
   'ans':1.44,'tol':0.05,'unit':'mol','formula':'n(C) = n(A)×2×0,80×0,90',
   'hint':'n(B)=2×0,80=1,6 mol. n(C)=1,6×0,90.',
   'steps':['n(B) = 1,0 × 2 × 0,80 = 1,6 mol','n(C) = 1,6 × 0,90','n(C) = 1,44 mol'],
   'sol':'n(C) = 1,0×2×0,80×0,90 = 1,44 mol'},

  {'id':1712,'lv':3,'cat':'stoik','title':'Teoretisk massa från utbyte',
   'q':'Faktisk massa produkt = 7,4 g. Procentuellt utbyte = 37 %.\nBeräkna den teoretiska massan.',
   'ans':20.0,'tol':0.5,'unit':'g','formula':'m_teor = m_faktisk / (utbyte/100)',
   'hint':'m_teor = 7,4 / 0,37.',
   'steps':['utbyte = faktisk/teoretisk → teoretisk = faktisk/utbyte','m_teor = 7,4 / 0,37','m_teor = 20 g'],
   'sol':'m_teor = 7,4/0,37 = 20 g'},

  {'id':1713,'lv':3,'cat':'stoik','title':'Begränsande reagens + utbyte',
   'q':'2A + B → 3C. 4,0 mol A + 3,0 mol B. Utbyte 75 %. M(C) = 30 g/mol.\nBeräkna faktisk massa C.',
   'ans':135.0,'tol':2.0,'unit':'g','formula':'m = n_teor × utbyte × M',
   'hint':'A begränsar (behöver 2mol B, har 3mol B). n(C)_teor=4,0×(3/2)=6,0. n(C)_faktisk=6,0×0,75.',
   'steps':['A begränsar (4,0 mol A behöver 2,0 mol B; 3,0 mol B i överskott)','n(C)_teor = 4,0 × (3/2) = 6,0 mol','n(C)_faktisk = 6,0×0,75=4,5 mol → m = 4,5×30 = 135 g'],
   'sol':'m(C) = 4,5×30 = 135 g'},
]

# ══════════════════════════════════════════════════════════════════
#  INJECT INTO HTML
# ══════════════════════════════════════════════════════════════════
print(f"Problems to add: {len(problems)}")

with open('kemi1-flashcards.html', 'r', encoding='utf-8') as f:
    html = f.read()
print(f"Input: {len(html)} chars")

# Find end of PROBLEMS array (before CLOZE_DATA)
import re
pi = html.find('const PROBLEMS')
m = re.search(r'\];\n\nconst CLOZE_DATA', html[pi:])
assert m, "PROBLEMS end anchor not found"
insert_pos = pi + m.start()  # position of '];'

# Build JS for new problems
new_js = '\n' + '\n'.join(prob_js(p) + ',' for p in problems) + '\n'

html = html[:insert_pos] + new_js + html[insert_pos:]

# Count by level
by_lv = {}
for p in problems:
    by_lv[p['lv']] = by_lv.get(p['lv'], 0) + 1
print(f"Level distribution: {by_lv}")

by_cat = {}
for p in problems:
    by_cat[p['cat']] = by_cat.get(p['cat'], 0) + 1
print(f"Category distribution: {by_cat}")

# Verify no syntax issues in new section
import re
pi2 = html.find('const PROBLEMS')
m2 = re.search(r'\];\n\nconst CLOZE_DATA', html[pi2:])
probs_section = html[pi2:pi2+m2.start()]
ids = re.findall(r'id:(\d+)', probs_section)
print(f"Total problems now: {len(ids)}")

# Verify backtick count still OK
ti = html.find('const THEORY = [')
te = html.find('];\n\nlet theoryIdx', ti)
bt = html[ti:te].count('`')
print(f"THEORY backticks: {bt} (even={bt%2==0})")

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Output: {len(html)} chars")
print("Done!")
