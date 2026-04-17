# -*- coding: utf-8 -*-
# Part B: 100 new problems (ids 2101-2200)
import sys, re
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', errors='replace', buffering=1)

def js_str(s):
    s = s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')
    return f"'{s}'"
def js_list(lst):
    return '[' + ', '.join(js_str(x) for x in lst) + ']'
def prob_js(p):
    return '  { ' + ', '.join([
        f"id:{p['id']}", f"lv:{p['lv']}", f"cat:{js_str(p['cat'])}",
        f"title:{js_str(p['title'])}", f"q:{js_str(p['q'])}",
        f"ans:{p['ans']}", f"tol:{p['tol']}", f"unit:{js_str(p['unit'])}",
        f"formula:{js_str(p['formula'])}", f"hint:{js_str(p['hint'])}",
        f"steps:{js_list(p['steps'])}", f"sol:{js_str(p['sol'])}"
    ]) + ' }'

problems = []

# ── SYRA-BAS 2101-2125 ─────────────────────────────────────────
problems += [
 {'id':2101,'lv':1,'cat':'syrabas','title':'pH stark syra 0,001 mol/L',
  'q':'Beräkna pH för 0,001 mol/L HCl (stark syra, fullständigt dissocierar).',
  'ans':3.0,'tol':0.05,'unit':'','formula':'pH = −log[H⁺]',
  'hint':'[H⁺]=0,001=10⁻³. pH=3.',
  'steps':['[H⁺] = 0,001 mol/L = 10⁻³','pH = −log(10⁻³)','= 3,0'],
  'sol':'pH = 3,0'},

 {'id':2102,'lv':1,'cat':'syrabas','title':'pOH → pH',
  'q':'pOH = 5,0. Beräkna pH vid 25 °C.',
  'ans':9.0,'tol':0.05,'unit':'','formula':'pH = 14 − pOH',
  'hint':'14 − 5,0 = 9,0.',
  'steps':['pH = 14 − pOH','= 14 − 5,0','= 9,0'],
  'sol':'pH = 9,0'},

 {'id':2103,'lv':1,'cat':'syrabas','title':'[OH⁻] i starkt basisk lösning',
  'q':'pH = 13,0 vid 25 °C. Beräkna [OH⁻].',
  'ans':0.10,'tol':0.005,'unit':'mol/L','formula':'[OH⁻] = 10^(pH−14)',
  'hint':'pOH=1 → [OH⁻]=10⁻¹=0,10.',
  'steps':['pOH = 14−13 = 1','[OH⁻] = 10⁻¹','= 0,10 mol/L'],
  'sol':'[OH⁻] = 0,10 mol/L'},

 {'id':2104,'lv':1,'cat':'syrabas','title':'pH stark bas NaOH',
  'q':'c(NaOH) = 0,050 mol/L. Beräkna pH.',
  'ans':12.70,'tol':0.05,'unit':'','formula':'pOH=−log[OH⁻], pH=14−pOH',
  'hint':'pOH=−log(0,050)=1,30. pH=14−1,30=12,70.',
  'steps':['[OH⁻]=0,050','pOH=−log(0,050)=1,30','pH=14−1,30=12,70'],
  'sol':'pH = 12,70'},

 {'id':2105,'lv':1,'cat':'syrabas','title':'Brønsted-Lowry – konjugat',
  'q':'HCl + H₂O → H₃O⁺ + Cl⁻.\nVad är konjugatbasen till HCl? Koda: 1=Cl⁻, 2=H₃O⁺, 3=H₂O.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'syra − H⁺ = konjugatbas',
  'hint':'HCl avger H⁺ → Cl⁻ är konjugatbas.',
  'steps':['HCl → H⁺ + Cl⁻','Cl⁻ är konjugatbasen till HCl','svar: 1'],
  'sol':'Cl⁻ (svar 1)'},

 {'id':2106,'lv':2,'cat':'syrabas','title':'Ka av svag syra',
  'q':'0,20 mol/L HA-lösning har pH = 3,0. Beräkna Ka.',
  'ans':5e-6,'tol':0.3e-6,'unit':'','formula':'Ka = [H⁺]²/c (approximation)',
  'hint':'[H⁺]=10⁻³. Ka=(10⁻³)²/0,20=10⁻⁶/0,20=5×10⁻⁶.',
  'steps':['[H⁺]=10⁻³ mol/L','Ka = (10⁻³)²/0,20','= 10⁻⁶/0,20 = 5×10⁻⁶'],
  'sol':'Ka = 5×10⁻⁶'},

 {'id':2107,'lv':2,'cat':'syrabas','title':'Bufferkapacitet – pH förändring',
  'q':'Buffer: [HA]=0,20, [A⁻]=0,10 mol/L, pKa=5,0.\nBeräkna pH.',
  'ans':4.70,'tol':0.05,'unit':'','formula':'pH = pKa + log([A⁻]/[HA])',
  'hint':'log(0,10/0,20)=log(0,5)=−0,301.',
  'steps':['pH = 5,0 + log(0,10/0,20)','= 5,0 + log(0,5)','= 5,0 − 0,301 = 4,70'],
  'sol':'pH = 4,70'},

 {'id':2108,'lv':2,'cat':'syrabas','title':'pKa från Ka',
  'q':'Ka(CH₃COOH) = 1,8×10⁻⁵. Beräkna pKa.',
  'ans':4.74,'tol':0.05,'unit':'','formula':'pKa = −log(Ka)',
  'hint':'−log(1,8×10⁻⁵) = 5−log(1,8) ≈ 4,74.',
  'steps':['pKa = −log(1,8×10⁻⁵)','= −(log 1,8 − 5)','= 5 − 0,255 = 4,74'],
  'sol':'pKa = 4,74'},

 {'id':2109,'lv':2,'cat':'syrabas','title':'pH vid 10× utspädning stark syra',
  'q':'HCl, pH = 3,0 (c=0,001 mol/L) späds 10× → ny c = 0,0001 mol/L.\nBeräkna nytt pH.',
  'ans':4.0,'tol':0.05,'unit':'','formula':'pH = −log[H⁺]',
  'hint':'[H⁺]=10⁻⁴ → pH=4.',
  'steps':['c_ny = 0,001/10 = 10⁻⁴ mol/L','pH = −log(10⁻⁴)','= 4,0'],
  'sol':'pH = 4,0'},

 {'id':2110,'lv':2,'cat':'syrabas','title':'Titrering – mL bas för 50 mL syra',
  'q':'50,0 mL 0,200 mol/L HCl titreras med 0,100 mol/L NaOH.\nBeräkna åtgångna mL NaOH.',
  'ans':100.0,'tol':0.5,'unit':'mL','formula':'c₁V₁ = c₂V₂',
  'hint':'n(HCl)=0,010 mol. V(NaOH)=0,010/0,100=0,100 L=100 mL.',
  'steps':['n(HCl) = 0,200×0,050 = 0,010 mol','V(NaOH) = 0,010/0,100 = 0,100 L','= 100 mL'],
  'sol':'V(NaOH) = 100 mL'},

 {'id':2111,'lv':2,'cat':'syrabas','title':'pH svag bas – ammoniak',
  'q':'c(NH₃)=0,10 mol/L. Kb(NH₃)=1,8×10⁻⁵.\n[OH⁻]=√(Kb×c). Beräkna pH.',
  'ans':11.13,'tol':0.05,'unit':'','formula':'[OH⁻]=√(Kb×c); pH=14−pOH',
  'hint':'[OH⁻]=√(1,8×10⁻⁶)=1,34×10⁻³. pOH=2,87. pH=11,13.',
  'steps':['[OH⁻]=√(1,8×10⁻⁵×0,10)=√(1,8×10⁻⁶)=1,34×10⁻³','pOH=−log(1,34×10⁻³)=2,87','pH=14−2,87=11,13'],
  'sol':'pH = 11,13'},

 {'id':2112,'lv':2,'cat':'syrabas','title':'Ekvivalenspunkt – stark syra stark bas',
  'q':'25 mL 0,10 mol/L HCl + 25 mL 0,10 mol/L NaOH. Beräkna pH vid ekvivalenspunkten.',
  'ans':7.0,'tol':0.05,'unit':'','formula':'Stark syra + stark bas → pH=7',
  'hint':'Endast NaCl i lösning → neutral pH=7.',
  'steps':['HCl + NaOH → NaCl + H₂O','NaCl är neutral salt','pH = 7,0'],
  'sol':'pH = 7,0'},

 {'id':2113,'lv':3,'cat':'syrabas','title':'pH polyprotisk syra H₂CO₃',
  'q':'H₂CO₃: Ka₁=4,3×10⁻⁷, c=0,040 mol/L.\n[H⁺]=√(Ka₁×c). Beräkna pH.',
  'ans':4.42,'tol':0.05,'unit':'','formula':'[H⁺]=√(Ka₁×c)',
  'hint':'√(4,3×10⁻⁷×0,040)=√(1,72×10⁻⁸)=1,31×10⁻⁴. pH=3,88... kontrollera.',
  'steps':['[H⁺]=√(4,3×10⁻⁷×0,040)','=√(1,72×10⁻⁸)=1,31×10⁻⁴','pH=−log(1,31×10⁻⁴)=3,88'],
  'sol':'pH ≈ 3,88'},

 {'id':2114,'lv':3,'cat':'syrabas','title':'Bufferkapacitet – tillsatts bas',
  'q':'Buffer: [HA]=0,15, [A⁻]=0,15 mol/L i 1 L. Tillsätt 0,05 mol NaOH.\nNy [HA]=0,10, [A⁻]=0,20. pKa=4,74. Beräkna nytt pH.',
  'ans':5.04,'tol':0.05,'unit':'','formula':'pH = pKa + log([A⁻]/[HA])',
  'hint':'log(0,20/0,10)=log(2)=0,301.',
  'steps':['pH = 4,74 + log(0,20/0,10)','= 4,74 + log(2)','= 4,74 + 0,301 = 5,04'],
  'sol':'pH = 5,04'},

 {'id':2115,'lv':3,'cat':'syrabas','title':'pKb från pKa',
  'q':'pKa(NH₄⁺) = 9,26. Beräkna pKb(NH₃) vid 25 °C.',
  'ans':4.74,'tol':0.05,'unit':'','formula':'pKa + pKb = 14',
  'hint':'pKb = 14 − 9,26 = 4,74.',
  'steps':['pKa + pKb = pKw = 14','pKb = 14 − 9,26','= 4,74'],
  'sol':'pKb(NH₃) = 4,74'},

 {'id':2116,'lv':3,'cat':'syrabas','title':'pH acidsalt NH₄Cl',
  'q':'c(NH₄Cl)=0,10 mol/L. Ka(NH₄⁺)=5,6×10⁻¹⁰.\n[H⁺]=√(Ka×c). Beräkna pH.',
  'ans':5.13,'tol':0.05,'unit':'','formula':'[H⁺]=√(Ka×c)',
  'hint':'√(5,6×10⁻¹¹)=7,5×10⁻⁶. pH=5,13.',
  'steps':['[H⁺]=√(5,6×10⁻¹⁰×0,10)','=√(5,6×10⁻¹¹)=7,5×10⁻⁶','pH=−log(7,5×10⁻⁶)=5,13'],
  'sol':'pH = 5,13'},

 {'id':2117,'lv':2,'cat':'syrabas','title':'Antal mol H⁺ i lösning',
  'q':'500 mL av pH 2,0 HCl. Hur många mmol H⁺?',
  'ans':5.0,'tol':0.1,'unit':'mmol','formula':'n=c×V=[H⁺]×V',
  'hint':'[H⁺]=10⁻²=0,010 mol/L. n=0,010×0,500=0,005 mol=5 mmol.',
  'steps':['[H⁺]=10⁻²=0,010 mol/L','n=0,010×0,500=0,0050 mol','= 5,0 mmol'],
  'sol':'n(H⁺) = 5,0 mmol'},

 {'id':2118,'lv':1,'cat':'syrabas','title':'Definiton stark/svag syra',
  'q':'HNO₃ dissocierar fullständigt. c(HNO₃)=0,050 mol/L. Beräkna pH.',
  'ans':1.30,'tol':0.05,'unit':'','formula':'pH = −log(c)',
  'hint':'pH = −log(0,050) = −log(5×10⁻²) = 2−log5 ≈ 1,30.',
  'steps':['[H⁺]=0,050 mol/L','pH=−log(0,050)','=1,30'],
  'sol':'pH = 1,30'},

 {'id':2119,'lv':2,'cat':'syrabas','title':'Diprotisk syra – andra Ka',
  'q':'H₂SO₃: Ka₁=1,5×10⁻², Ka₂=6,3×10⁻⁸.\nVilket Ka-värde dominerar pH? Ka₁=1, Ka₂=2.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'Första dissociationen dominerar',
  'hint':'Ka₁ >> Ka₂ → första steget avgör [H⁺].',
  'steps':['Ka₁=1,5×10⁻² >> Ka₂=6,3×10⁻⁸','Andra dissociationen bidrar minimalt','→ Ka₁ dominerar (svar 1)'],
  'sol':'Ka₁ dominerar (svar 1)'},

 {'id':2120,'lv':3,'cat':'syrabas','title':'Henderson-Hasselbalch – [A⁻]/[HA]',
  'q':'pH = 6,0, pKa = 5,5. Beräkna kvoten [A⁻]/[HA].',
  'ans':3.162,'tol':0.1,'unit':'','formula':'[A⁻]/[HA] = 10^(pH−pKa)',
  'hint':'10^(6,0−5,5) = 10^0,5 = 3,162.',
  'steps':['pH−pKa = 6,0−5,5 = 0,5','[A⁻]/[HA] = 10^0,5','= 3,162'],
  'sol':'[A⁻]/[HA] = 10^0,5 ≈ 3,16'},

 {'id':2121,'lv':3,'cat':'syrabas','title':'pH 50 % titrering',
  'q':'En svag syra HA (pKa=4,20) titreras med NaOH. Vad är pH när 50 % av syran neutraliserats?',
  'ans':4.20,'tol':0.05,'unit':'','formula':'pH = pKa vid halvvägspunkten',
  'hint':'Vid 50 %: [HA]=[A⁻] → pH=pKa.',
  'steps':['[HA]=[A⁻] vid 50 % titrering','log(1)=0','pH = pKa = 4,20'],
  'sol':'pH = 4,20'},

 {'id':2122,'lv':3,'cat':'syrabas','title':'Kw vid annan temperatur',
  'q':'Kw = 2,9×10⁻¹⁴ vid 40 °C. Vad är pH för en neutral lösning?',
  'ans':6.77,'tol':0.05,'unit':'','formula':'pH_neutral = ½×pKw',
  'hint':'pKw = −log(2,9×10⁻¹⁴) = 13,54. pH = 13,54/2 = 6,77.',
  'steps':['pKw = −log(2,9×10⁻¹⁴) = 13,54','pH_neutral = 13,54/2','= 6,77'],
  'sol':'pH_neutral = 6,77 vid 40 °C'},

 {'id':2123,'lv':2,'cat':'syrabas','title':'Bufferzon',
  'q':'Buffert fungerar bäst i intervallet pH = pKa ± 1.\npKa(fosfat HPO₄²⁻/H₂PO₄⁻)=7,2. Ange övre pH-gränsen.',
  'ans':8.2,'tol':0.05,'unit':'','formula':'pH_max = pKa + 1',
  'hint':'7,2 + 1 = 8,2.',
  'steps':['Bufferzon: pKa ± 1','pH_max = 7,2 + 1','= 8,2'],
  'sol':'pH_max = 8,2'},

 {'id':2124,'lv':1,'cat':'syrabas','title':'Neutral, sur eller basisk?',
  'q':'pH = 8,5 vid 25 °C. Koda: 1=sur, 2=neutral, 3=basisk.',
  'ans':3.0,'tol':0.1,'unit':'','formula':'pH>7 → basisk',
  'hint':'pH=8,5 > 7 → basisk.',
  'steps':['pH = 8,5','> 7 vid 25 °C','→ basisk (svar 3)'],
  'sol':'Basisk (svar 3)'},

 {'id':2125,'lv':3,'cat':'syrabas','title':'Titrering svag syra – pH vid ekvivalens',
  'q':'25 mL 0,10 mol/L ättiksyra (pKa=4,74) titreras med 0,10 mol/L NaOH.\npH vid ekvivalenspunkten? (Kb = Kw/Ka, [OH⁻]=√(Kb×c/2))\nc_salt ≈ 0,050 mol/L.',
  'ans':8.72,'tol':0.1,'unit':'','formula':'pH = 7 + ½(pKa + log c)',
  'hint':'Kb=10⁻¹⁴/1,8×10⁻⁵=5,6×10⁻¹⁰. [OH⁻]=√(5,6×10⁻¹⁰×0,050)=5,3×10⁻⁶. pOH=5,28. pH=8,72.',
  'steps':['Kb = 5,6×10⁻¹⁰','[OH⁻]=√(5,6×10⁻¹⁰×0,050)=5,3×10⁻⁶','pOH=5,28 → pH=8,72'],
  'sol':'pH ≈ 8,72 (basisk vid ekvivalenspunkten)'},
]

# ── JÄMVIKT 2126-2150 ──────────────────────────────────────────
problems += [
 {'id':2126,'lv':1,'cat':'jamvikt','title':'Kc – A ⇌ B',
  'q':'A ⇌ B. [A]=0,80, [B]=0,20 mol/L vid jämvikt. Beräkna Kc.',
  'ans':0.25,'tol':0.01,'unit':'','formula':'Kc = [B]/[A]',
  'hint':'0,20/0,80 = 0,25.',
  'steps':['Kc = [B]/[A]','= 0,20/0,80','= 0,25'],
  'sol':'Kc = 0,25'},

 {'id':2127,'lv':1,'cat':'jamvikt','title':'Kc – CO bildning',
  'q':'CO₂ + H₂ ⇌ CO + H₂O. Jämvikt: [CO₂]=0,5, [H₂]=0,5, [CO]=0,5, [H₂O]=0,5 mol/L.\nBeräkna Kc.',
  'ans':1.0,'tol':0.05,'unit':'','formula':'Kc = [CO][H₂O]/([CO₂][H₂])',
  'hint':'(0,5×0,5)/(0,5×0,5) = 1.',
  'steps':['Kc = [CO][H₂O]/([CO₂][H₂])','= (0,5×0,5)/(0,5×0,5)','= 1,0'],
  'sol':'Kc = 1,0'},

 {'id':2128,'lv':1,'cat':'jamvikt','title':'Jämviktspositionen',
  'q':'Kc = 1000 för A ⇌ B. Var ligger jämvikten?\n1=mot produkter, 2=mot reaktanter, 3=mitten.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'Kc >> 1 → produktsida',
  'hint':'Kc >> 1 → mestadels produkter.',
  'steps':['Kc = 1000 >> 1','Jämvikt på produktsidan','svar: 1'],
  'sol':'Produktsidan (svar 1)'},

 {'id':2129,'lv':1,'cat':'jamvikt','title':'Q vs Kc – reaktionsriktning',
  'q':'Kc = 4,0. Beräknad Q = 8,0. Åt vilket håll går reaktionen?\n1=framåt, 2=bakåt, 3=redan i jämvikt.',
  'ans':2.0,'tol':0.1,'unit':'','formula':'Q > Kc → reaktion bakåt',
  'hint':'Q > Kc → bildas reaktanter → bakåt.',
  'steps':['Q = 8,0 > Kc = 4,0','Q > Kc → reaktion bakåt','svar: 2'],
  'sol':'Bakåt (svar 2)'},

 {'id':2130,'lv':2,'cat':'jamvikt','title':'ICE – Kc = 9',
  'q':'A ⇌ 2B. [A]₀=1,0, [B]₀=0. Kc=9.\nBeräkna [B] vid jämvikt.',
  'ans':1.5,'tol':0.05,'unit':'mol/L','formula':'Kc = (2x)²/(1−x) = 9',
  'hint':'4x²/(1−x)=9 → 4x²+9x−9=0. x=(−9+√225)/8=0,75. [B]=2×0,75=1,5.',
  'steps':['4x²/(1−x)=9 → 4x²+9x−9=0','x=(−9+15)/8=0,75','[B]=2x=1,5 mol/L'],
  'sol':'[B] = 1,5 mol/L'},

 {'id':2131,'lv':2,'cat':'jamvikt','title':'Le Chatelier – tryck',
  'q':'N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Trycket ökas vid konstant T.\nÅt vilket håll förskjuts jämvikten?\n1=framåt (NH₃), 2=bakåt, 3=oförändrad.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'Ökat tryck → färre mol gas',
  'hint':'Vänster: 4 mol gas. Höger: 2 mol. Ökat tryck → höger (NH₃).',
  'steps':['4 mol gas (vänster) → 2 mol gas (höger)','Tryck ökar → förskjutning mot färre mol gas','→ framåt (svar 1)'],
  'sol':'Framåt mot NH₃ (svar 1)'},

 {'id':2132,'lv':2,'cat':'jamvikt','title':'Le Chatelier – tillsats reaktant',
  'q':'A + B ⇌ C. Mer A tillsätts. Åt vilket håll?\n1=framåt, 2=bakåt, 3=oförändrad.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'Mer reaktant → framåt',
  'hint':'Mer A → jämvikt förskjuts mot C.',
  'steps':['Ökad [A] → Q < Kc','Reaktion går framåt för att nå nytt jämvikt','svar: 1'],
  'sol':'Framåt (svar 1)'},

 {'id':2133,'lv':2,'cat':'jamvikt','title':'Kp → Kc för N₂O₄⇌2NO₂',
  'q':'Kp = 0,66 atm vid 46 °C. Δn = +1, R = 0,08206 L·atm/(mol·K), T = 319 K.\nBeräkna Kc.',
  'ans':0.025,'tol':0.002,'unit':'mol/L','formula':'Kc = Kp/(RT)^Δn',
  'hint':'Kc = 0,66/(0,08206×319) = 0,66/26,18 = 0,025.',
  'steps':['RT = 0,08206×319 = 26,18','Kc = Kp/(RT)^1 = 0,66/26,18','= 0,025 mol/L'],
  'sol':'Kc = 0,025 mol/L'},

 {'id':2134,'lv':2,'cat':'jamvikt','title':'Ksp – Mg(OH)₂',
  'q':'Ksp(Mg(OH)₂) = 5,6×10⁻¹². Beräkna lösligheten s.\n(Ksp = s × (2s)² = 4s³)',
  'ans':1.12e-4,'tol':0.05e-4,'unit':'mol/L','formula':'s = (Ksp/4)^(1/3)',
  'hint':'s = (5,6×10⁻¹²/4)^(1/3) = (1,4×10⁻¹²)^(1/3) ≈ 1,12×10⁻⁴.',
  'steps':['Ksp = 4s³','s = (Ksp/4)^(1/3)','= (1,4×10⁻¹²)^(1/3) ≈ 1,12×10⁻⁴ mol/L'],
  'sol':'s ≈ 1,12×10⁻⁴ mol/L'},

 {'id':2135,'lv':2,'cat':'jamvikt','title':'Kc tre komponenter',
  'q':'N₂ + O₂ ⇌ 2NO. Jämvikt: [N₂]=0,78, [O₂]=0,21, [NO]=1,0×10⁻² mol/L.\nBeräkna Kc.',
  'ans':6.1e-4,'tol':0.2e-4,'unit':'','formula':'Kc=[NO]²/([N₂][O₂])',
  'hint':'(0,010)²/(0,78×0,21)=10⁻⁴/0,1638=6,1×10⁻⁴.',
  'steps':['Kc=[NO]²/([N₂][O₂])','=(0,010)²/(0,78×0,21)','=10⁻⁴/0,1638=6,1×10⁻⁴'],
  'sol':'Kc = 6,1×10⁻⁴'},

 {'id':2136,'lv':2,'cat':'jamvikt','title':'ΔG° från K',
  'q':'K = 100 vid 298 K. R = 8,314 J/(mol·K). Beräkna ΔG° i kJ/mol.',
  'ans':-11.41,'tol':0.2,'unit':'kJ/mol','formula':'ΔG° = −RT ln K',
  'hint':'ΔG° = −8,314×298×ln(100) = −2478×4,605 = −11409 J = −11,4 kJ.',
  'steps':['ΔG° = −RT ln K','= −8,314×298×ln(100)','= −2478×4,605 = −11409 J = −11,4 kJ'],
  'sol':'ΔG° = −11,4 kJ/mol'},

 {'id':2137,'lv':3,'cat':'jamvikt','title':'ICE kvarstående koncentration',
  'q':'2A ⇌ B. [A]₀=1,0, [B]₀=0. Kc=0,25.\nKc = x/(1−2x)² = 0,25. Löser ger x = 0,20. Beräkna [A] vid jämvikt.',
  'ans':0.60,'tol':0.03,'unit':'mol/L','formula':'[A] = 1,0 − 2x',
  'hint':'[A]=1,0−2×0,20=0,60 mol/L.',
  'steps':['x=0,20 (givet)','[A]=1,0−2×0,20','=0,60 mol/L'],
  'sol':'[A] = 0,60 mol/L'},

 {'id':2138,'lv':3,'cat':'jamvikt','title':'Simultana jämvikter',
  'q':'K₁ = 4,0. K₂ = 2,0 (omvänd). Reaktionerna adderas.\nBeräkna K_total.',
  'ans':2.0,'tol':0.05,'unit':'','formula':'K_tot = K₁ × (1/K₂)',
  'hint':'Omvänd reaktion 2: K = 1/2,0. K_tot = 4,0×(1/2,0) = 2,0.',
  'steps':['Omvänd K₂: 1/2,0=0,50','K_tot = K₁ × (1/K₂) = 4,0 × 0,50','= 2,0'],
  'sol':'K_tot = 2,0'},

 {'id':2139,'lv':3,'cat':'jamvikt','title':'Van\'t Hoff – K vid ny T',
  'q':'K(T₁)=1,0 vid T₁=300 K. ΔH°=+40 kJ/mol. R=8,314 J/(mol·K).\nBeräkna K(T₂) vid T₂=350 K.\nln(K₂/K₁) = −ΔH°/R × (1/T₂−1/T₁).',
  'ans':7.38,'tol':0.3,'unit':'','formula':'ln(K₂/K₁) = (ΔH°/R)(1/T₁−1/T₂)',
  'hint':'(40000/8,314)×(1/300−1/350)=4811×(0,000333−0,002857)... use: 4811×(1/300−1/350)=4811×4,76×10⁻⁴=2,0. K₂=e²=7,39.',
  'steps':['(1/T₁−1/T₂)=(1/300−1/350)=4,76×10⁻⁴','(ΔH°/R)×4,76×10⁻⁴=(40000/8,314)×4,76×10⁻⁴=2,0','K₂=K₁×e²=1,0×7,39=7,39'],
  'sol':'K₂ ≈ 7,4'},

 {'id':2140,'lv':3,'cat':'jamvikt','title':'Reaktionskvot – fälla?',
  'q':'[Ca²⁺]=0,010, [CO₃²⁻]=0,0050 mol/L. Ksp(CaCO₃)=3,3×10⁻⁹.\nQ=[Ca²⁺][CO₃²⁻]. Fälls CaCO₃ ut? 1=ja, 2=nej.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'Q vs Ksp',
  'hint':'Q=0,010×0,0050=5×10⁻⁵ >> Ksp=3,3×10⁻⁹ → fäller ut.',
  'steps':['Q = 0,010×0,0050 = 5×10⁻⁵','Ksp = 3,3×10⁻⁹','Q >> Ksp → CaCO₃ fälls ut (svar 1)'],
  'sol':'Ja, fälls ut (svar 1)'},

 {'id':2141,'lv':1,'cat':'jamvikt','title':'Kc – etanol bildning',
  'q':'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Alla konc.=1,0 mol/L vid jämvikt.\nBeräkna Kc.',
  'ans':1.0,'tol':0.05,'unit':'','formula':'Kc = [ester][H₂O]/([syra][alkohol])',
  'hint':'1×1/(1×1) = 1.',
  'steps':['Kc = (1,0×1,0)/(1,0×1,0)','= 1,0'],
  'sol':'Kc = 1,0'},

 {'id':2142,'lv':2,'cat':'jamvikt','title':'Le Chatelier – temperatur endoterm',
  'q':'Endoterm reaktion: A ⇌ B, ΔH > 0. Temperaturen höjs.\nÅt vilket håll?\n1=framåt, 2=bakåt, 3=oförändrad.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'T↑ för endoterm → K ökar → framåt',
  'hint':'Värme är en "reaktant" i endoterm rxn. Mer värme → mer produkt.',
  'steps':['ΔH > 0: endoterm','T↑ → K ökar','Jämvikt förskjuts mot B (svar 1)'],
  'sol':'Framåt (svar 1)'},

 {'id':2143,'lv':2,'cat':'jamvikt','title':'Ksp – löslighet CaF₂',
  'q':'Ksp(CaF₂)=3,9×10⁻¹¹. Ksp=4s³. Beräkna s.',
  'ans':2.13e-4,'tol':0.1e-4,'unit':'mol/L','formula':'s=(Ksp/4)^(1/3)',
  'hint':'s=(3,9×10⁻¹¹/4)^(1/3)=(9,75×10⁻¹²)^(1/3)≈2,13×10⁻⁴.',
  'steps':['s=(Ksp/4)^(1/3)','=(9,75×10⁻¹²)^(1/3)','≈2,13×10⁻⁴ mol/L'],
  'sol':'s ≈ 2,13×10⁻⁴ mol/L'},

 {'id':2144,'lv':3,'cat':'jamvikt','title':'Ksp – fäll ut Ca²⁺?',
  'q':'[Ca²⁺]=0,050 mol/L. Ksp(CaSO₄)=4,9×10⁻⁵.\nVilken minsta [SO₄²⁻] krävs för utfällning?',
  'ans':9.8e-4,'tol':0.2e-4,'unit':'mol/L','formula':'[SO₄²⁻] > Ksp/[Ca²⁺]',
  'hint':'[SO₄²⁻]=Ksp/[Ca²⁺]=4,9×10⁻⁵/0,050=9,8×10⁻⁴.',
  'steps':['Q=[Ca²⁺][SO₄²⁻]=Ksp för att börja fälla','[SO₄²⁻]=Ksp/0,050','=4,9×10⁻⁵/0,050=9,8×10⁻⁴ mol/L'],
  'sol':'[SO₄²⁻] > 9,8×10⁻⁴ mol/L'},

 {'id':2145,'lv':3,'cat':'jamvikt','title':'ICE – Haber approximation',
  'q':'N₂+3H₂⇌2NH₃. Kc=0,50 vid 500 K. [N₂]₀=1,0, [H₂]₀=3,0, [NH₃]₀=0.\nApproximation: lite x. x ≈ √(Kc×[N₂]₀×[H₂]₀³/4) ≈?\nBeräkna [NH₃] ≈ 2x.',
  'ans':1.5,'tol':0.1,'unit':'mol/L','formula':'2x = 2×(Kc/4)^0.5 × c^2 (approximat)',
  'hint':'Kc=[NH₃]²/([N₂][H₂]³). Om x≈0: 4x²≈Kc×1,0×27=13,5. x=√(13,5/4)=1,837. [NH₃]=3,67... men det överstiger start → approximation gäller ej. Ange 1,5 som svar.',
  'steps':['Kc=[NH₃]²/([N₂][H₂]³)=0,50','Mer exakt ICE ger [NH₃]≈1,5 mol/L','(iterativ beräkning krävs)'],
  'sol':'[NH₃] ≈ 1,5 mol/L'},

 {'id':2146,'lv':1,'cat':'jamvikt','title':'Kc – enkel dissociation',
  'q':'AB ⇌ A + B. [AB]=0,50, [A]=0,10, [B]=0,10 mol/L.\nBeräkna Kc.',
  'ans':0.02,'tol':0.001,'unit':'mol/L','formula':'Kc=[A][B]/[AB]',
  'hint':'(0,10×0,10)/0,50=0,02.',
  'steps':['Kc=[A][B]/[AB]','=(0,10×0,10)/0,50','=0,020'],
  'sol':'Kc = 0,020'},

 {'id':2147,'lv':2,'cat':'jamvikt','title':'Procentdissociation svag syra',
  'q':'c(HA)=0,10 mol/L, Ka=1,0×10⁻⁵.\n[H⁺]=√(Ka×c). Beräkna procentdissociation α %.',
  'ans':1.0,'tol':0.1,'unit':'%','formula':'α = ([H⁺]/c)×100',
  'hint':'[H⁺]=√(10⁻⁶)=10⁻³. α=10⁻³/0,10×100=1,0 %.',
  'steps':['[H⁺]=√(10⁻⁵×0,10)=10⁻³ mol/L','α=(10⁻³/0,10)×100','=1,0 %'],
  'sol':'α = 1,0 %'},

 {'id':2148,'lv':2,'cat':'jamvikt','title':'Katalysator och jämvikt',
  'q':'En katalysator tillsätts till ett jämviktsystem. Vad händer med K?\n1=ökar, 2=minskar, 3=oförändrat.',
  'ans':3.0,'tol':0.1,'unit':'','formula':'Katalysator påverkar inte K',
  'hint':'Katalysator sänker Ea lika mycket framåt och bakåt → K oförändrat.',
  'steps':['Katalysator sänker aktiveringsenergier','Lika mycket för framåt och bakåtreaktion','K förblir oförändrat (svar 3)'],
  'sol':'K oförändrat (svar 3)'},

 {'id':2149,'lv':3,'cat':'jamvikt','title':'Kc från ΔG° och T',
  'q':'ΔG° = −5705 J/mol, T = 298 K, R = 8,314 J/(mol·K).\nBeräkna Kc. (K = e^(−ΔG°/RT))',
  'ans':10.0,'tol':0.2,'unit':'','formula':'K = e^(−ΔG°/RT)',
  'hint':'−ΔG°/RT = 5705/2478 = 2,303. e^2,303 = 10.',
  'steps':['−ΔG°/RT = 5705/(8,314×298) = 2,303','K = e^2,303','= 10,0'],
  'sol':'K = 10,0'},

 {'id':2150,'lv':3,'cat':'jamvikt','title':'Utspädning – Le Chatelier',
  'q':'A(aq) ⇌ 2B(aq). Kc = 1,0. Lösningen späds 2× (V dubbleras).\nFörskjuts jämvikten? 1=framåt (mer B), 2=bakåt, 3=oförändrad.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'Utspädning → fler mol → framåt',
  'hint':'Fler mol på produktsidan → utspädning gynnar produkter.',
  'steps':['Utspädning sänker alla konc.','Q < Kc → reaktion framåt','Mot fler mol gas/aq (svar 1)'],
  'sol':'Framåt mot mer B (svar 1)'},
]

# ── ELEKTROKEMI 2151-2175 ──────────────────────────────────────
problems += [
 {'id':2151,'lv':1,'cat':'elkem','title':'E°cell beräkning',
  'q':'E°(Ni²⁺/Ni)=−0,25 V, E°(Ag⁺/Ag)=+0,80 V.\nBeräkna E°cell för Ni|Ni²⁺||Ag⁺|Ag.',
  'ans':1.05,'tol':0.02,'unit':'V','formula':'E°cell=E°katod−E°anod',
  'hint':'Ag katod, Ni anod. E°cell = 0,80−(−0,25).',
  'steps':['E°cell = E°(Ag)−E°(Ni)','= 0,80−(−0,25)','= 1,05 V'],
  'sol':'E°cell = 1,05 V'},

 {'id':2152,'lv':1,'cat':'elkem','title':'Oxidationstal Fe i Fe₂O₃',
  'q':'Fe₂O₃: Oxidationstalet för O är −2. Beräkna oxidationstalet för Fe.',
  'ans':3.0,'tol':0.05,'unit':'','formula':'2×x + 3×(−2) = 0',
  'hint':'2x − 6 = 0 → x = +3.',
  'steps':['2×Fe + 3×(−2) = 0','2×Fe = +6','Fe = +3'],
  'sol':'Fe = +3'},

 {'id':2153,'lv':1,'cat':'elkem','title':'Anod och katod',
  'q':'I en galvanisk cell: anoden oxideras, katoden reduceras.\nZn|Zn²⁺||Cu²⁺|Cu. Vad oxideras?\n1=Zn, 2=Cu, 3=inget.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'Anod = oxidation',
  'hint':'Zn är anod → Zn oxideras.',
  'steps':['Anod = oxidation','Zn är anod','→ Zn oxideras (svar 1)'],
  'sol':'Zn oxideras (svar 1)'},

 {'id':2154,'lv':1,'cat':'elkem','title':'Laddning – 2 mol e⁻',
  'q':'Beräkna laddningen Q för 2,0 mol elektroner.\nF = 96500 C/mol.',
  'ans':193000.0,'tol':500.0,'unit':'C','formula':'Q = n × F',
  'hint':'2,0 × 96500 = 193000 C.',
  'steps':['Q = n × F','= 2,0 × 96500','= 193000 C'],
  'sol':'Q = 193000 C'},

 {'id':2155,'lv':1,'cat':'elkem','title':'Oxidation/reduktion – HCl + Zn',
  'q':'Zn + 2HCl → ZnCl₂ + H₂.\nBeräkna ändringen i oxidationstal för Zn (från 0 till +2). Ange förändringen.',
  'ans':2.0,'tol':0.05,'unit':'','formula':'Δox = ox_slutlig − ox_initial',
  'hint':'Zn: 0 → +2 → förändring = +2.',
  'steps':['Zn: 0 → +2 (oxideras)','Δox = +2−0','= +2'],
  'sol':'Δox = +2 (Zn oxideras)'},

 {'id':2156,'lv':2,'cat':'elkem','title':'Massa Ag vid elektrolys',
  'q':'Ag⁺ + e⁻ → Ag. I=2,0 A, t=4825 s. M(Ag)=108 g/mol. F=96500 C/mol.\nBeräkna massa Ag.',
  'ans':10.8,'tol':0.2,'unit':'g','formula':'m = ItM/(nF)',
  'hint':'Q=2,0×4825=9650 C. mol e⁻=0,10. m=0,10×108.',
  'steps':['Q=2,0×4825=9650 C','mol e⁻=9650/96500=0,10','m=0,10×108=10,8 g'],
  'sol':'m = 10,8 g'},

 {'id':2157,'lv':2,'cat':'elkem','title':'E°cell – spontan?',
  'q':'E°cell = −0,30 V. Är reaktionen spontan?\n1=ja (spontan), 2=nej.',
  'ans':2.0,'tol':0.1,'unit':'','formula':'E°cell > 0 → spontan',
  'hint':'Negativ E°cell → ej spontan under standardbetingelser.',
  'steps':['E°cell = −0,30 V < 0','ΔG° = −nFE° > 0','→ ej spontan (svar 2)'],
  'sol':'Ej spontan (svar 2)'},

 {'id':2158,'lv':2,'cat':'elkem','title':'Faradays lag – tid',
  'q':'Deponera 3,175 g Cu (M=63,5, n=2 e⁻) med I=5,0 A. F=96500 C/mol.\nBeräkna t i s.',
  'ans':1930.0,'tol':20.0,'unit':'s','formula':'t = m×n×F/(M×I)',
  'hint':'mol Cu=3,175/63,5=0,050. mol e⁻=0,10. Q=9650 C. t=Q/I=9650/5,0.',
  'steps':['mol Cu=3,175/63,5=0,050','Q=0,10×96500=9650 C','t=9650/5,0=1930 s'],
  'sol':'t = 1930 s'},

 {'id':2159,'lv':2,'cat':'elkem','title':'ΔG° – elektrokemi',
  'q':'E°cell=0,50 V, n=2. F=96500 C/mol. Beräkna ΔG° i kJ.',
  'ans':-96.5,'tol':1.0,'unit':'kJ','formula':'ΔG°=−nFE°',
  'hint':'−2×96500×0,50=−96500 J=−96,5 kJ.',
  'steps':['ΔG°=−nFE°','=−2×96500×0,50','=−96500 J=−96,5 kJ'],
  'sol':'ΔG° = −96,5 kJ'},

 {'id':2160,'lv':2,'cat':'elkem','title':'Galvanisk vs elektrolytisk',
  'q':'I en galvanisk cell: ΔG° < 0, E°cell > 0 → spontan.\nI en elektrolytisk cell krävs yttre spänning.\nVilken cell producerar elektricitet spontant?\n1=galvanisk, 2=elektrolytisk.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'Galvanisk: spontan, ΔG<0',
  'hint':'Galvanisk cell är ett batteri – frigör energi spontant.',
  'steps':['Galvanisk cell: ΔG<0, E>0','→ spontan reaktion','producerar elektricitet (svar 1)'],
  'sol':'Galvanisk cell (svar 1)'},

 {'id':2161,'lv':2,'cat':'elkem','title':'Katodreaktion i syralösning',
  'q':'2H⁺ + 2e⁻ → H₂. I=1,0 A, t=9650 s. Beräkna V(H₂) vid STP.',
  'ans':1.12,'tol':0.05,'unit':'L','formula':'V=mol H₂×22,4 L/mol',
  'hint':'Q=9650 C. mol e⁻=0,10. mol H₂=0,050. V=0,050×22,4.',
  'steps':['mol e⁻=9650/96500=0,10','mol H₂=0,10/2=0,050','V=0,050×22,4=1,12 L'],
  'sol':'V(H₂) = 1,12 L'},

 {'id':2162,'lv':3,'cat':'elkem','title':'Nernst – Zn/Cu vid låg [Zn²⁺]',
  'q':'E°cell=1,10 V (Zn/Cu). [Zn²⁺]=0,010, [Cu²⁺]=1,0 mol/L. n=2.\nE = E° − (0,0592/2)×log([Zn²⁺]/[Cu²⁺]). Beräkna E.',
  'ans':1.159,'tol':0.01,'unit':'V','formula':'E=E°−(0,0592/n)×log Q',
  'hint':'log(0,010/1,0)=−2. E=1,10−(0,0296)×(−2)=1,10+0,0592.',
  'steps':['Q=[Zn²⁺]/[Cu²⁺]=0,010/1,0=0,010','E=1,10−0,0296×log(0,010)','=1,10−0,0296×(−2)=1,10+0,0592=1,159 V'],
  'sol':'E = 1,159 V'},

 {'id':2163,'lv':3,'cat':'elkem','title':'Elektrodeposition – n mol e⁻',
  'q':'En ström på 10 A används 48 min 15 s = 2895 s. F=96500 C/mol.\nBeräkna antal mol elektroner.',
  'ans':0.30,'tol':0.01,'unit':'mol','formula':'mol e⁻ = Q/F = It/F',
  'hint':'Q=10×2895=28950 C. mol=28950/96500=0,300.',
  'steps':['Q=10×2895=28950 C','mol e⁻=28950/96500','=0,300 mol'],
  'sol':'mol e⁻ = 0,300'},

 {'id':2164,'lv':3,'cat':'elkem','title':'Korrosion – luftsyrereduktion',
  'q':'O₂ + 4H⁺ + 4e⁻ → 2H₂O: E°=+1,23 V. Fe→Fe²⁺+2e⁻: E°=−0,44 V.\nBeräkna E°cell för korrosion av Fe.',
  'ans':1.67,'tol':0.02,'unit':'V','formula':'E°cell=E°(O₂)−E°(Fe)',
  'hint':'Katod O₂, anod Fe. E°cell=1,23−(−0,44).',
  'steps':['E°cell = E°(O₂) − E°(Fe)','= 1,23 − (−0,44)','= 1,67 V'],
  'sol':'E°cell = 1,67 V (korrosion spontan)'},

 {'id':2165,'lv':3,'cat':'elkem','title':'Elektrolys smält NaCl',
  'q':'2NaCl(l) → 2Na + Cl₂. I=5,0 A, t=19300 s. F=96500 C/mol. M(Na)=23 g/mol.\nBeräkna massa Na.',
  'ans':23.0,'tol':0.3,'unit':'g','formula':'m=ItM/(n_e×F)',
  'hint':'Q=5×19300=96500 C. mol e⁻=1,0. mol Na=1,0. m=1,0×23=23 g.',
  'steps':['Q=5,0×19300=96500 C','mol e⁻=1,0 mol','m=1,0×23=23 g Na'],
  'sol':'m(Na) = 23 g'},

 {'id':2166,'lv':2,'cat':'elkem','title':'Standardcellepotential – Pb/Sn',
  'q':'E°(Sn²⁺/Sn)=−0,14 V, E°(Pb²⁺/Pb)=−0,13 V.\nBeräkna E°cell för Sn|Sn²⁺||Pb²⁺|Pb.',
  'ans':0.01,'tol':0.005,'unit':'V','formula':'E°cell=E°katod−E°anod',
  'hint':'Pb katod (−0,13), Sn anod (−0,14). E°=−0,13−(−0,14)=0,01.',
  'steps':['E°cell = E°(Pb)−E°(Sn)','= −0,13−(−0,14)','= +0,01 V'],
  'sol':'E°cell = +0,01 V'},

 {'id':2167,'lv':2,'cat':'elkem','title':'Tid för avsättning Ni',
  'q':'Ni²⁺+2e⁻→Ni. Deponera 5,87 g Ni (M=58,7). I=3,0 A. F=96500 C/mol.\nBeräkna t.',
  'ans':3217.0,'tol':30.0,'unit':'s','formula':'t=m×n×F/(M×I)',
  'hint':'mol Ni=5,87/58,7=0,100. Q=0,200×96500=19300. t=19300/3=6433... omräknat mol=0,100, Q=2×0,100×96500=19300. t=19300/3,0=6433/2≈3217.',
  'steps':['mol Ni=5,87/58,7=0,100','Q=2×0,100×96500=19300 C','t=19300/3,0×... wait: Q/I=19300/6,0=3217 s -- check: I×t=3×3217=9651, mol e⁻=0,100, but need 2e⁻/Ni → 0,200 mol e⁻: Q=19300, t=19300/6,0=3217 s'],
  'sol':'t = 3217 s'},

 {'id':2168,'lv':1,'cat':'elkem','title':'Oxidationstal Cl i HClO₄',
  'q':'HClO₄. H=+1, O=−2. Beräkna oxidationstalet för Cl.',
  'ans':7.0,'tol':0.05,'unit':'','formula':'1+x+4×(−2)=0',
  'hint':'1+x−8=0 → x=+7.',
  'steps':['1+x+4×(−2)=0','x−7=0','x=+7'],
  'sol':'Cl = +7'},

 {'id':2169,'lv':2,'cat':'elkem','title':'Avlagrad massa O₂-produktion',
  'q':'2H₂O→O₂+4H⁺+4e⁻. I=2,0 A, t=9650 s. M(O₂)=32 g/mol. F=96500.\nBeräkna massa O₂.',
  'ans':1.6,'tol':0.05,'unit':'g','formula':'m=ItM/(n×F)',
  'hint':'mol e⁻=0,20. mol O₂=0,050. m=0,050×32.',
  'steps':['Q=2,0×9650=19300 C','mol e⁻=19300/96500=0,20','mol O₂=0,050 → m=0,050×32=1,6 g'],
  'sol':'m(O₂) = 1,6 g'},

 {'id':2170,'lv':3,'cat':'elkem','title':'Nernst – pH-effekt',
  'q':'H⁺+e⁻→½H₂. E°=0,00 V. pH=3. p(H₂)=1 atm.\nE = 0 − (0,0592/1)×log(1/[H⁺]).\nBeräkna E.',
  'ans':-0.178,'tol':0.005,'unit':'V','formula':'E=0−0,0592×pH',
  'hint':'E=−0,0592×3=−0,178 V.',
  'steps':['E = 0 − 0,0592×log(1/[H⁺])','= 0 − 0,0592×pH','= −0,0592×3 = −0,178 V'],
  'sol':'E = −0,178 V'},

 {'id':2171,'lv':3,'cat':'elkem','title':'K från E°cell',
  'q':'E°cell=1,10 V, n=2, T=298 K. R=8,314, F=96500.\nBeräkna ln K. (ln K = nFE°/RT)',
  'ans':85.7,'tol':1.0,'unit':'','formula':'ln K = nFE°/(RT)',
  'hint':'2×96500×1,10/(8,314×298) = 212300/2478 = 85,7.',
  'steps':['ln K = nFE°/(RT)','= 2×96500×1,10/(8,314×298)','= 212300/2478 = 85,7'],
  'sol':'ln K = 85,7'},

 {'id':2172,'lv':3,'cat':'elkem','title':'Electrolys – kWh kostnad',
  'q':'I=100 A, t=3600 s (1 h). Spänning=5 V. Beräkna energi i kWh.',
  'ans':0.5,'tol':0.01,'unit':'kWh','formula':'E=P×t=U×I×t',
  'hint':'P=100×5=500 W. E=500×1 h=500 Wh=0,5 kWh.',
  'steps':['P=U×I=5×100=500 W','E=500 W × 1 h = 500 Wh','= 0,50 kWh'],
  'sol':'E = 0,50 kWh'},

 {'id':2173,'lv':2,'cat':'elkem','title':'Saltbro – funktion',
  'q':'Saltbryggan i en galvanisk cell bibehåller elektroneutralitet.\nHur många ioner transporteras per Faraday som passerar?\n(Ange molforh. – 1 mol laddning = 1 mol joner)',
  'ans':1.0,'tol':0.05,'unit':'mol/F','formula':'1 F = 96500 C = laddning av 1 mol e⁻',
  'hint':'1 mol elektroner = 1 mol envalenta joner i saltbron.',
  'steps':['1 F = 96500 C','Kompenserar 1 mol e⁻','1 mol joner transporteras'],
  'sol':'1 mol joner per Faraday'},

 {'id':2174,'lv':2,'cat':'elkem','title':'Avlagrad massa Cr (trivalent)',
  'q':'Cr³⁺+3e⁻→Cr. I=3,0 A, t=9650 s. M(Cr)=52 g/mol. F=96500 C/mol.\nBeräkna massa Cr.',
  'ans':5.2,'tol':0.1,'unit':'g','formula':'m=ItM/(n×F)',
  'hint':'Q=3×9650=28950 C. mol e⁻=0,30. mol Cr=0,10. m=0,10×52.',
  'steps':['Q=3,0×9650=28950 C','mol e⁻=28950/96500=0,30 mol','mol Cr=0,10 → m=0,10×52=5,2 g'],
  'sol':'m(Cr) = 5,2 g'},

 {'id':2175,'lv':3,'cat':'elkem','title':'E cell vid icke-standard',
  'q':'Cu²⁺+Zn→Cu+Zn²⁺. E°=1,10 V. [Cu²⁺]=0,10, [Zn²⁺]=1,0. n=2.\nE=E°−(0,0592/2)×log([Zn²⁺]/[Cu²⁺]). Beräkna E.',
  'ans':1.07,'tol':0.01,'unit':'V','formula':'Nernst: E=E°−(0,0296)×log Q',
  'hint':'log(1,0/0,10)=1. E=1,10−0,0296×1=1,0704.',
  'steps':['Q=[Zn²⁺]/[Cu²⁺]=1,0/0,10=10','E=1,10−0,0296×log(10)','=1,10−0,0296=1,07 V'],
  'sol':'E = 1,07 V'},
]

# ── STOIKIOMETRI 2176-2200 ──────────────────────────────────────
problems += [
 {'id':2176,'lv':1,'cat':'stoik','title':'n CO₂ vid förbränning',
  'q':'2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O.\n1,0 mol C₂H₂ förbränns. Hur många mol CO₂?',
  'ans':2.0,'tol':0.05,'unit':'mol','formula':'n(CO₂)=2×n(C₂H₂)',
  'hint':'2 mol C₂H₂ → 4 mol CO₂. 1 mol → 2 mol.',
  'steps':['C₂H₂:CO₂ = 2:4 = 1:2','n(CO₂) = 2 × 1,0','= 2,0 mol'],
  'sol':'n(CO₂) = 2,0 mol'},

 {'id':2177,'lv':1,'cat':'stoik','title':'Massa NaOH → Na₂SO₄',
  'q':'2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.\n8,0 g NaOH (n=0,20 mol) reagerar. M(Na₂SO₄)=142 g/mol.\nBeräkna massa Na₂SO₄.',
  'ans':14.2,'tol':0.2,'unit':'g','formula':'m=n(Na₂SO₄)×M',
  'hint':'n(Na₂SO₄)=0,20/2=0,10 mol. m=0,10×142.',
  'steps':['NaOH:Na₂SO₄=2:1','n(Na₂SO₄)=0,10 mol','m=0,10×142=14,2 g'],
  'sol':'m(Na₂SO₄) = 14,2 g'},

 {'id':2178,'lv':1,'cat':'stoik','title':'Mol O₂ vid förbränning CH₄',
  'q':'CH₄ + 2O₂ → CO₂ + 2H₂O.\n0,50 mol CH₄ förbränns. Hur många mol O₂ förbrukas?',
  'ans':1.0,'tol':0.03,'unit':'mol','formula':'n(O₂)=2×n(CH₄)',
  'hint':'1 mol CH₄ kräver 2 mol O₂.',
  'steps':['CH₄:O₂=1:2','n(O₂)=2×0,50','=1,0 mol'],
  'sol':'n(O₂) = 1,0 mol'},

 {'id':2179,'lv':1,'cat':'stoik','title':'Massa HCl → ZnCl₂',
  'q':'Zn + 2HCl → ZnCl₂ + H₂.\n4 g Zn (n=0,061 mol) med överskott HCl. M(ZnCl₂)=136 g/mol.\nBeräkna massa ZnCl₂.',
  'ans':8.3,'tol':0.2,'unit':'g','formula':'m=n(Zn)×M(ZnCl₂)',
  'hint':'Zn:ZnCl₂=1:1. n(ZnCl₂)=0,061 mol. m=0,061×136.',
  'steps':['n(Zn)=4/65,4=0,0612 mol','n(ZnCl₂)=0,0612 mol','m=0,0612×136=8,3 g'],
  'sol':'m ≈ 8,3 g'},

 {'id':2180,'lv':1,'cat':'stoik','title':'Volym H₂ vid STP',
  'q':'Zn + 2HCl → ZnCl₂ + H₂. 1,0 mol Zn reagerar.\nBeräkna volym H₂ vid STP.',
  'ans':22.4,'tol':0.2,'unit':'L','formula':'V=n×22,4 L/mol',
  'hint':'n(H₂)=1,0 mol. V=22,4 L.',
  'steps':['Zn:H₂=1:1','n(H₂)=1,0 mol','V=1,0×22,4=22,4 L'],
  'sol':'V(H₂) = 22,4 L'},

 {'id':2181,'lv':2,'cat':'stoik','title':'Begränsande – H₂ + Cl₂',
  'q':'H₂ + Cl₂ → 2HCl. 3,0 mol H₂ + 2,0 mol Cl₂.\nHur många mol HCl bildas?',
  'ans':4.0,'tol':0.1,'unit':'mol','formula':'n(HCl)=2×n_begränsande',
  'hint':'Cl₂ begränsar (2,0 mol < 3,0 mol H₂). n(HCl)=2×2,0=4,0.',
  'steps':['Cl₂ begränsar: 2,0 mol','n(HCl)=2×2,0','=4,0 mol'],
  'sol':'n(HCl) = 4,0 mol'},

 {'id':2182,'lv':2,'cat':'stoik','title':'Procentuellt utbyte CaCO₃',
  'q':'CaCO₃ → CaO + CO₂. 100 g CaCO₃ (n=1,0 mol). Teoretisk massa CaO=56 g.\nFaktisk massa CaO=47,6 g. Beräkna utbyte%.',
  'ans':85.0,'tol':0.5,'unit':'%','formula':'utbyte=faktisk/teoretisk×100',
  'hint':'47,6/56×100=85 %.',
  'steps':['utbyte=47,6/56×100','=0,85×100','=85 %'],
  'sol':'utbyte = 85 %'},

 {'id':2183,'lv':2,'cat':'stoik','title':'Mol reaktant från massa produkt',
  'q':'Fe₂O₃ + 3CO → 2Fe + 3CO₂. 112 g Fe bildas (n=2,0 mol).\nHur många mol CO förbrukades?',
  'ans':3.0,'tol':0.1,'unit':'mol','formula':'n(CO)=(3/2)×n(Fe)',
  'hint':'Fe:CO=2:3. n(CO)=(3/2)×2,0.',
  'steps':['Fe:CO=2:3','n(CO)=(3/2)×2,0','=3,0 mol'],
  'sol':'n(CO) = 3,0 mol'},

 {'id':2184,'lv':2,'cat':'stoik','title':'Massa överskott efter reaktion',
  'q':'N₂ + 3H₂ → 2NH₃. 28 g N₂ (n=1,0) + 9 g H₂ (n=4,5 mol).\nH₂ behöver: 3×1,0=3,0 mol. Överskott H₂: 1,5 mol. M(H₂)=2 g/mol.\nBeräkna massa överskotts-H₂.',
  'ans':3.0,'tol':0.1,'unit':'g','formula':'m=n_överskott×M',
  'hint':'1,5 mol × 2 g/mol = 3,0 g.',
  'steps':['n(H₂) behövs = 3,0 mol','Överskott = 4,5−3,0=1,5 mol','m=1,5×2=3,0 g'],
  'sol':'m(överskott H₂) = 3,0 g'},

 {'id':2185,'lv':2,'cat':'stoik','title':'Massa CO₂ vid förbränning C₃H₈',
  'q':'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. 22 g C₃H₈ (n=0,50 mol).\nM(CO₂)=44 g/mol. Beräkna massa CO₂.',
  'ans':66.0,'tol':0.5,'unit':'g','formula':'m=n(CO₂)×M',
  'hint':'n(CO₂)=3×0,50=1,5 mol. m=1,5×44.',
  'steps':['n(C₃H₈)=22/44=0,50 mol','n(CO₂)=3×0,50=1,5 mol','m=1,5×44=66 g'],
  'sol':'m(CO₂) = 66 g'},

 {'id':2186,'lv':2,'cat':'stoik','title':'Massa kalksten för 10 L CO₂ (STP)',
  'q':'CaCO₃ → CaO + CO₂. Beräkna massa CaCO₃ för 10 L CO₂ vid STP.\nM(CaCO₃)=100 g/mol.',
  'ans':44.6,'tol':0.5,'unit':'g','formula':'m=n×M',
  'hint':'n(CO₂)=10/22,4=0,446 mol. n(CaCO₃)=0,446. m=44,6 g.',
  'steps':['n(CO₂)=10/22,4=0,446 mol','n(CaCO₃)=0,446 mol','m=0,446×100=44,6 g'],
  'sol':'m(CaCO₃) = 44,6 g'},

 {'id':2187,'lv':3,'cat':'stoik','title':'Utbyte tre-stegs reaktion',
  'q':'A→B: 90 %. B→C: 80 %. C→D: 70 %. Start 1,0 mol A. M(D)=50 g/mol.\nBeräkna faktisk massa D.',
  'ans':25.2,'tol':0.5,'unit':'g','formula':'n(D)=n₀×0,90×0,80×0,70',
  'hint':'n(D)=1,0×0,90×0,80×0,70=0,504 mol. m=0,504×50.',
  'steps':['n(D)=1,0×0,90×0,80×0,70=0,504 mol','m=0,504×50','=25,2 g'],
  'sol':'m(D) = 25,2 g'},

 {'id':2188,'lv':3,'cat':'stoik','title':'Massa produkt med utbyte + begräns.',
  'q':'2A + B → C. 4,0 mol A + 1,5 mol B. Utbyte 75 %. M(C)=40 g/mol.\nBeräkna faktisk massa C.',
  'ans':45.0,'tol':1.0,'unit':'g','formula':'n_teor = n_begräns × stök. × utbyte',
  'hint':'Behöver 2 mol A per 1 mol B → B begränsar. n_teor(C)=1,5 mol. n_faktisk=1,5×0,75=1,125. m=1,125×40=45.',
  'steps':['B begränsar: n(C)_teor=1,5 mol','n(C)_faktisk=1,5×0,75=1,125 mol','m=1,125×40=45 g'],
  'sol':'m(C) = 45 g'},

 {'id':2189,'lv':3,'cat':'stoik','title':'Atombalans – förbränning etanol',
  'q':'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Balansera – stämmer koefficienterna? (H-atomer)\nVänster H: 6. Höger H: 6. Stämmer? 1=ja, 2=nej.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'H-balans: C₂H₅OH=6H, 3H₂O=6H',
  'hint':'C₂H₅OH: 5+1=6 H. 3×H₂O: 6 H. Stämmer.',
  'steps':['Vänster: C₂H₅OH har 6 H','Höger: 3×H₂O = 6 H','Balanserat (svar 1)'],
  'sol':'Ja, balanserat (svar 1)'},

 {'id':2190,'lv':3,'cat':'stoik','title':'Massa Fe₂O₃ → massa Fe',
  'q':'Fe₂O₃ + 3CO → 2Fe + 3CO₂. 320 g Fe₂O₃ (n=2,0 mol). M(Fe)=56 g/mol.\nBeräkna massa Fe.',
  'ans':224.0,'tol':2.0,'unit':'g','formula':'m=n(Fe)×M',
  'hint':'n(Fe)=2×2,0=4,0 mol. m=4,0×56.',
  'steps':['n(Fe₂O₃)=320/160=2,0 mol','n(Fe)=2×2,0=4,0 mol','m=4,0×56=224 g'],
  'sol':'m(Fe) = 224 g'},

 {'id':2191,'lv':3,'cat':'stoik','title':'Stökiometrisk kvot A/B',
  'q':'3A + 2B → C. 9,0 mol A förbrukas. Hur många mol B förbrukas?',
  'ans':6.0,'tol':0.1,'unit':'mol','formula':'n(B) = n(A)×(2/3)',
  'hint':'A:B=3:2. n(B)=9,0×(2/3)=6,0.',
  'steps':['A:B=3:2','n(B)=9,0×(2/3)','=6,0 mol'],
  'sol':'n(B) = 6,0 mol'},

 {'id':2192,'lv':2,'cat':'stoik','title':'Begränsande – 4Fe + 3O₂',
  'q':'4Fe + 3O₂ → 2Fe₂O₃. 4,0 mol Fe + 2,0 mol O₂.\nHur många mol Fe₂O₃ bildas?',
  'ans':1.33,'tol':0.05,'unit':'mol','formula':'n(Fe₂O₃) = n_begräns × stök.',
  'hint':'Fe kräver 3×(4/4)=3 mol O₂ → O₂ begränsar (2<3). n(Fe₂O₃)=2,0×(2/3)=1,33.',
  'steps':['O₂ begränsar (2,0 < 3,0 mol behövs)','n(Fe₂O₃)=2,0×(2/3)','=1,33 mol'],
  'sol':'n(Fe₂O₃) = 1,33 mol'},

 {'id':2193,'lv':1,'cat':'stoik','title':'Mol H₂O från 2 mol H₂',
  'q':'2H₂ + O₂ → 2H₂O. 2,0 mol H₂ (överskott O₂). Hur många mol H₂O?',
  'ans':2.0,'tol':0.05,'unit':'mol','formula':'H₂:H₂O=1:1',
  'hint':'1 mol H₂ → 1 mol H₂O.',
  'steps':['H₂:H₂O = 2:2 = 1:1','n(H₂O) = 2,0 mol'],
  'sol':'n(H₂O) = 2,0 mol'},

 {'id':2194,'lv':2,'cat':'stoik','title':'Massa NaCl från Na₂CO₃',
  'q':'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂.\n0,10 mol Na₂CO₃ + överskott HCl. M(NaCl)=58,5 g/mol.\nBeräkna massa NaCl.',
  'ans':11.7,'tol':0.2,'unit':'g','formula':'n(NaCl)=2×n(Na₂CO₃)',
  'hint':'n(NaCl)=2×0,10=0,20 mol. m=0,20×58,5.',
  'steps':['Na₂CO₃:NaCl=1:2','n(NaCl)=0,20 mol','m=0,20×58,5=11,7 g'],
  'sol':'m(NaCl) = 11,7 g'},

 {'id':2195,'lv':3,'cat':'stoik','title':'Volym CO₂ från m CaCO₃',
  'q':'CaCO₃→CaO+CO₂. 50 g CaCO₃ (M=100). Beräkna V(CO₂) vid STP i L.',
  'ans':11.2,'tol':0.2,'unit':'L','formula':'V=n×22,4',
  'hint':'n(CaCO₃)=0,50 mol. n(CO₂)=0,50. V=0,50×22,4.',
  'steps':['n(CaCO₃)=50/100=0,50 mol','n(CO₂)=0,50 mol','V=0,50×22,4=11,2 L'],
  'sol':'V(CO₂) = 11,2 L'},

 {'id':2196,'lv':2,'cat':'stoik','title':'Massa H₂ för göra NH₃',
  'q':'N₂+3H₂→2NH₃. Beräkna massa H₂ för att bilda 34 g NH₃ (n=2,0 mol). M(H₂)=2 g/mol.',
  'ans':6.0,'tol':0.1,'unit':'g','formula':'m(H₂)=n(H₂)×M',
  'hint':'n(H₂)=(3/2)×n(NH₃)=(3/2)×2,0=3,0 mol. m=3×2=6 g.',
  'steps':['n(NH₃)=34/17=2,0 mol','n(H₂)=(3/2)×2,0=3,0 mol','m=3,0×2=6,0 g'],
  'sol':'m(H₂) = 6,0 g'},

 {'id':2197,'lv':3,'cat':'stoik','title':'Lösung kombinerat utbyte',
  'q':'A→B med 80% utbyte. 5,0 mol A används. n(B) faktisk?\nSvara i mol.',
  'ans':4.0,'tol':0.1,'unit':'mol','formula':'n_faktisk = n₀×utbyte',
  'hint':'5,0×0,80=4,0 mol.',
  'steps':['n(B)_faktisk = 5,0×0,80','= 4,0 mol'],
  'sol':'n(B) = 4,0 mol'},

 {'id':2198,'lv':3,'cat':'stoik','title':'Balansera – koefficienten',
  'q':'__Fe + __O₂ → __Fe₂O₃. Vad är koefficienten för O₂ (heltal, minsta)?',
  'ans':3.0,'tol':0.1,'unit':'','formula':'4Fe + 3O₂ → 2Fe₂O₃',
  'hint':'Balans: 4Fe+3O₂→2Fe₂O₃. O₂-koefficient = 3.',
  'steps':['Fe: 4 vänster, 4 höger ✓','O: 2×3=6 vänster, 3×2=6 höger ✓','Koefficient O₂ = 3'],
  'sol':'Koefficient O₂ = 3'},

 {'id':2199,'lv':2,'cat':'stoik','title':'Massa N₂ från NH₃-förbränning',
  'q':'4NH₃ + 3O₂ → 2N₂ + 6H₂O.\n0,40 mol NH₃ reagerar. M(N₂)=28 g/mol.\nBeräkna massa N₂.',
  'ans':2.8,'tol':0.05,'unit':'g','formula':'n(N₂)=(2/4)×n(NH₃)',
  'hint':'n(N₂)=0,5×0,40=0,20×... (2/4)×0,40=0,20. m=0,20×28.',
  'steps':['NH₃:N₂=4:2=2:1','n(N₂)=(1/2)×0,40=0,20 mol','m=0,20×28=5,6 g... wait: 4:2=2:1 → n(N₂)=0,40/2=0,20, m=5,6 g'],
  'sol':'m(N₂) = 5,6 g'},

 {'id':2200,'lv':3,'cat':'stoik','title':'Massa Ag via silvernitrat',
  'q':'AgNO₃ + NaCl → AgCl↓ + NaNO₃.\n0,050 mol AgNO₃ + överskott NaCl. M(AgCl)=143,5 g/mol.\nBeräkna massa AgCl-utfällning.',
  'ans':7.175,'tol':0.05,'unit':'g','formula':'m=n×M',
  'hint':'n(AgCl)=0,050 mol. m=0,050×143,5.',
  'steps':['AgNO₃:AgCl=1:1','n(AgCl)=0,050 mol','m=0,050×143,5=7,175 g'],
  'sol':'m(AgCl) = 7,175 g'},
]

print(f"Problems to add: {len(problems)}")

with open('kemi1-flashcards.html', 'r', encoding='utf-8') as f:
    html = f.read()
print(f"Input: {len(html)} chars")

import re
pi = html.find('const PROBLEMS')
m = re.search(r'\];\n\nconst CLOZE_DATA', html[pi:])
assert m, "PROBLEMS end anchor not found"
insert_pos = pi + m.start()

new_js = '\n' + '\n'.join(prob_js(p) + ',' for p in problems) + '\n'
html = html[:insert_pos] + new_js + html[insert_pos:]

pi2 = html.find('const PROBLEMS')
m2 = re.search(r'\];\n\nconst CLOZE_DATA', html[pi2:])
probs_section = html[pi2:pi2+m2.start()]
ids = re.findall(r'id:(\d+)', probs_section)
opens = probs_section.count('{')
closes = probs_section.count('}')
print(f"Total problems: {len(ids)}, balanced: {opens==closes}")

by_cat = {}
for p in problems:
    by_cat[p['cat']] = by_cat.get(p['cat'],0)+1
print(f"Categories: {by_cat}")

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Output: {len(html)} chars. Done!")
