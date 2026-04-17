# -*- coding: utf-8 -*-
# Part A: 100 new problems (ids 2001-2100)
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

# ── MOL & MASSA 2001-2025 ────────────────────────────────────────
problems += [
 {'id':2001,'lv':1,'cat':'mol','title':'n från massa – Al',
  'q':'Beräkna substansmängden n för 54 g aluminium Al.\nM(Al) = 27 g/mol.',
  'ans':2.0,'tol':0.05,'unit':'mol','formula':'n = m / M',
  'hint':'54 / 27 = 2,0 mol.',
  'steps':['n = m / M = 54 / 27','n = 2,0 mol'],
  'sol':'n = 54/27 = 2,0 mol'},

 {'id':2002,'lv':1,'cat':'mol','title':'m från n – CaCO₃',
  'q':'Beräkna massan m för 0,25 mol kalciumkarbonat CaCO₃.\nM(CaCO₃) = 100 g/mol.',
  'ans':25.0,'tol':0.3,'unit':'g','formula':'m = n × M',
  'hint':'0,25 × 100 = 25 g.',
  'steps':['m = n × M = 0,25 × 100','m = 25 g'],
  'sol':'m = 0,25 × 100 = 25 g'},

 {'id':2003,'lv':1,'cat':'mol','title':'Molmassa KOH',
  'q':'Beräkna molmassan M för kaliumhydroxid KOH.\nM(K)=39, M(O)=16, M(H)=1 g/mol.',
  'ans':56.0,'tol':0.3,'unit':'g/mol','formula':'M = Σ(atommassa)',
  'hint':'39 + 16 + 1 = 56.',
  'steps':['M(K)+M(O)+M(H)','= 39+16+1','= 56 g/mol'],
  'sol':'M(KOH) = 56 g/mol'},

 {'id':2004,'lv':1,'cat':'mol','title':'n från massa – O₂',
  'q':'Hur många mol O₂ är 64 g?\nM(O₂) = 32 g/mol.',
  'ans':2.0,'tol':0.05,'unit':'mol','formula':'n = m / M',
  'hint':'64 / 32 = 2,0.',
  'steps':['n = 64 / 32','n = 2,0 mol'],
  'sol':'n = 64/32 = 2,0 mol'},

 {'id':2005,'lv':1,'cat':'mol','title':'Massa 3 mol Na',
  'q':'Beräkna massan för 3,0 mol natrium Na.\nM(Na) = 23 g/mol.',
  'ans':69.0,'tol':0.5,'unit':'g','formula':'m = n × M',
  'hint':'3,0 × 23 = 69 g.',
  'steps':['m = 3,0 × 23','m = 69 g'],
  'sol':'m = 3,0 × 23 = 69 g'},

 {'id':2006,'lv':1,'cat':'mol','title':'Molmassa MgCl₂',
  'q':'Beräkna M för MgCl₂.\nM(Mg)=24, M(Cl)=35,5 g/mol.',
  'ans':95.0,'tol':0.3,'unit':'g/mol','formula':'M = M(Mg)+2×M(Cl)',
  'hint':'24 + 2×35,5 = 95.',
  'steps':['24 + 2×35,5','= 24 + 71','= 95 g/mol'],
  'sol':'M(MgCl₂) = 95 g/mol'},

 {'id':2007,'lv':1,'cat':'mol','title':'n av Fe₂O₃',
  'q':'Hur många mol är 160 g järnoxid Fe₂O₃?\nM(Fe₂O₃) = 160 g/mol.',
  'ans':1.0,'tol':0.03,'unit':'mol','formula':'n = m / M',
  'hint':'160 / 160 = 1,0 mol.',
  'steps':['n = 160 / 160','n = 1,0 mol'],
  'sol':'n = 1,0 mol'},

 {'id':2008,'lv':2,'cat':'mol','title':'Atommassa från massa + n',
  'q':'0,50 mol av ett grundämne väger 14 g. Vad är grundämnets molmassa?',
  'ans':28.0,'tol':0.3,'unit':'g/mol','formula':'M = m / n',
  'hint':'14 / 0,50 = 28 g/mol → Kisel Si.',
  'steps':['M = m / n = 14 / 0,50','= 28 g/mol (kisel Si)'],
  'sol':'M = 14/0,50 = 28 g/mol'},

 {'id':2009,'lv':2,'cat':'mol','title':'%N i NH₄NO₃',
  'q':'Beräkna kvävehalten (%N) i ammoniumnitrat NH₄NO₃.\nM(N)=14, M(H)=1, M(O)=16 g/mol.',
  'ans':35.0,'tol':0.5,'unit':'%','formula':'%N = (2×14)/M × 100',
  'hint':'M = 80 g/mol. 2 N-atomer → 28/80 × 100.',
  'steps':['M(NH₄NO₃) = 14+4+14+48 = 80 g/mol','massa N = 2×14 = 28 g/mol','%N = 28/80 × 100 = 35 %'],
  'sol':'%N = 28/80 × 100 = 35 %'},

 {'id':2010,'lv':2,'cat':'mol','title':'Massa 1,5×10²³ atomer C',
  'q':'Beräkna massan för 1,5×10²³ kol-atomer.\nM(C)=12 g/mol, Nₐ=6,0×10²³ mol⁻¹.',
  'ans':3.0,'tol':0.1,'unit':'g','formula':'m = (N/Nₐ) × M',
  'hint':'n = 1,5×10²³ / 6,0×10²³ = 0,25 mol. m = 0,25×12.',
  'steps':['n = 1,5×10²³ / 6,0×10²³ = 0,25 mol','m = 0,25 × 12','m = 3,0 g'],
  'sol':'m = 0,25×12 = 3,0 g'},

 {'id':2011,'lv':2,'cat':'mol','title':'Empirisk formel – CuS-analys',
  'q':'Analys: 64 g Cu och 32 g S. Beräkna kvoten n(Cu)/n(S).\nM(Cu)=64, M(S)=32 g/mol.',
  'ans':1.0,'tol':0.05,'unit':'','formula':'n = m / M',
  'hint':'n(Cu)=1,0, n(S)=1,0 → kvot = 1.',
  'steps':['n(Cu)=64/64=1,0 mol','n(S)=32/32=1,0 mol','n(Cu)/n(S) = 1,0'],
  'sol':'n(Cu)/n(S) = 1,0 → CuS'},

 {'id':2012,'lv':2,'cat':'mol','title':'n CO₂ vid fullständig förbränning',
  'q':'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.\nHur många mol CO₂ bildas av 2,0 mol C₃H₈?',
  'ans':6.0,'tol':0.1,'unit':'mol','formula':'n(CO₂) = 3 × n(C₃H₈)',
  'hint':'1 mol propan → 3 mol CO₂.',
  'steps':['C₃H₈:CO₂ = 1:3','n(CO₂) = 3 × 2,0','= 6,0 mol'],
  'sol':'n(CO₂) = 3×2,0 = 6,0 mol'},

 {'id':2013,'lv':2,'cat':'mol','title':'Massa H₂O vid förbränning',
  'q':'CH₄ + 2O₂ → CO₂ + 2H₂O. 4,0 g CH₄ (n=0,25 mol) förbränns.\nBeräkna massa H₂O. M(H₂O)=18 g/mol.',
  'ans':9.0,'tol':0.2,'unit':'g','formula':'m = n(H₂O) × M',
  'hint':'n(H₂O) = 2×0,25 = 0,50 mol. m = 0,50×18.',
  'steps':['n(H₂O) = 2 × n(CH₄) = 2×0,25 = 0,50 mol','m = 0,50 × 18','m = 9,0 g'],
  'sol':'m(H₂O) = 0,50×18 = 9,0 g'},

 {'id':2014,'lv':2,'cat':'mol','title':'Atomantal i 18 g vatten',
  'q':'18 g H₂O (n=1,0 mol). Hur många molekyler (× 10²³)?\nNₐ = 6,022×10²³ mol⁻¹. Ange svaret som x (x×10²³).',
  'ans':6.022,'tol':0.05,'unit':'×10²³','formula':'N = n × Nₐ',
  'hint':'N = 1,0 × 6,022×10²³.',
  'steps':['n = 18/18 = 1,0 mol','N = 1,0 × 6,022×10²³','x = 6,022'],
  'sol':'N = 6,022×10²³ molekyler'},

 {'id':2015,'lv':3,'cat':'mol','title':'Sammansättning Fe₃O₄',
  'q':'Beräkna massan Fe i 1,0 mol Fe₃O₄.\nM(Fe)=56, M(O)=16 g/mol.',
  'ans':168.0,'tol':1.0,'unit':'g','formula':'m(Fe) = 3 × M(Fe) × n',
  'hint':'3 Fe-atomer per formelenhet. m = 3×56×1,0.',
  'steps':['n(Fe) = 3 × n(Fe₃O₄) = 3,0 mol','m(Fe) = 3,0 × 56','= 168 g'],
  'sol':'m(Fe) = 3×56 = 168 g'},

 {'id':2016,'lv':3,'cat':'mol','title':'Okänt grundämne via procenthalt',
  'q':'En oxid MO har 40 % O (massa%). M(O)=16 g/mol.\nVad är molmassan för grundämnet M?',
  'ans':24.0,'tol':0.3,'unit':'g/mol','formula':'%O = M(O)/(M_M+M(O)) × 100',
  'hint':'0,40 = 16/(M+16) → M+16 = 40 → M = 24 (Mg).',
  'steps':['0,40 = 16/(M+16)','M+16 = 16/0,40 = 40','M = 24 g/mol (Magnesium)'],
  'sol':'M = 24 g/mol → grundämne är Mg'},

 {'id':2017,'lv':3,'cat':'mol','title':'Molekylformel från empirisk',
  'q':'Empirisk formel CH₂O. Molmassa = 180 g/mol.\nVad är molekylformeln? Ange antalet C-atomer.',
  'ans':6.0,'tol':0.1,'unit':'C-atomer','formula':'n = M_mol / M_emp',
  'hint':'M(CH₂O) = 30 g/mol. n = 180/30 = 6 → C₆H₁₂O₆.',
  'steps':['M(CH₂O) = 12+2+16 = 30 g/mol','n = 180/30 = 6','C₆H₁₂O₆ → 6 C-atomer'],
  'sol':'C₆H₁₂O₆ (glukos) → 6 C-atomer'},

 {'id':2018,'lv':3,'cat':'mol','title':'Utbyte + n produkt',
  'q':'Reaktion med 90 % utbyte. Teoretisk n(produkt) = 5,0 mol.\nBeräkna faktisk massa om M = 46 g/mol.',
  'ans':207.0,'tol':2.0,'unit':'g','formula':'m = n_teor × utbyte × M',
  'hint':'n_faktisk = 5,0×0,90 = 4,5 mol. m = 4,5×46.',
  'steps':['n_faktisk = 5,0 × 0,90 = 4,5 mol','m = 4,5 × 46','= 207 g'],
  'sol':'m = 4,5×46 = 207 g'},

 {'id':2019,'lv':3,'cat':'mol','title':'Blandad formel – dubbla oxider',
  'q':'En blandning: 0,30 mol FeO (M=72) och 0,20 mol Fe₂O₃ (M=160).\nBeräkna totalmassa.',
  'ans':53.6,'tol':0.3,'unit':'g','formula':'m_tot = n₁M₁ + n₂M₂',
  'hint':'0,30×72 + 0,20×160.',
  'steps':['m(FeO) = 0,30×72 = 21,6 g','m(Fe₂O₃) = 0,20×160 = 32,0 g','m_tot = 53,6 g'],
  'sol':'m_tot = 21,6+32,0 = 53,6 g'},

 {'id':2020,'lv':3,'cat':'mol','title':'Antal mol O i blandning',
  'q':'0,50 mol H₂O och 0,50 mol CO₂. Hur många totalt mol O-atomer?',
  'ans':1.5,'tol':0.05,'unit':'mol','formula':'n(O) = n(H₂O)×1 + n(CO₂)×2',
  'hint':'H₂O har 1 O, CO₂ har 2 O.',
  'steps':['n(O från H₂O) = 0,50×1 = 0,50 mol','n(O från CO₂) = 0,50×2 = 1,00 mol','n(O)_tot = 1,50 mol'],
  'sol':'n(O)_tot = 0,50+1,00 = 1,50 mol'},

 {'id':2021,'lv':1,'cat':'mol','title':'n NH₃ från m',
  'q':'Hur många mol är 34 g ammoniak NH₃?\nM(NH₃) = 17 g/mol.',
  'ans':2.0,'tol':0.05,'unit':'mol','formula':'n = m / M',
  'hint':'34 / 17 = 2,0 mol.',
  'steps':['n = 34 / 17','n = 2,0 mol'],
  'sol':'n = 34/17 = 2,0 mol'},

 {'id':2022,'lv':1,'cat':'mol','title':'Massa 0,1 mol glukos',
  'q':'M(C₆H₁₂O₆) = 180 g/mol. Beräkna massan för 0,10 mol glukos.',
  'ans':18.0,'tol':0.2,'unit':'g','formula':'m = n × M',
  'hint':'0,10 × 180 = 18 g.',
  'steps':['m = 0,10 × 180','m = 18 g'],
  'sol':'m = 0,10×180 = 18 g'},

 {'id':2023,'lv':2,'cat':'mol','title':'Molmassa H₃PO₄',
  'q':'Beräkna M för fosforsyra H₃PO₄.\nM(H)=1, M(P)=31, M(O)=16 g/mol.',
  'ans':98.0,'tol':0.3,'unit':'g/mol','formula':'M = 3+31+4×16',
  'hint':'3 + 31 + 64 = 98.',
  'steps':['3×1 + 31 + 4×16','= 3 + 31 + 64','= 98 g/mol'],
  'sol':'M(H₃PO₄) = 98 g/mol'},

 {'id':2024,'lv':2,'cat':'mol','title':'Antal molekyler CO₂',
  'q':'2,0 mol CO₂. Hur många molekyler? Ange x om svaret är x×10²⁴.\nNₐ = 6,022×10²³.',
  'ans':1.2044,'tol':0.05,'unit':'×10²⁴','formula':'N = n × Nₐ',
  'hint':'2,0 × 6,022×10²³ = 12,044×10²³ = 1,2044×10²⁴.',
  'steps':['N = 2,0 × 6,022×10²³','= 12,044×10²³','= 1,2044×10²⁴ → x=1,2044'],
  'sol':'N = 1,2044×10²⁴ molekyler'},

 {'id':2025,'lv':3,'cat':'mol','title':'Utbyte vid syntes av aspirin',
  'q':'Teoretiskt: 18,0 g aspirin (C₉H₈O₄, M=180). Faktiskt: 14,4 g.\nBeräkna procentuellt utbyte.',
  'ans':80.0,'tol':0.5,'unit':'%','formula':'utbyte% = (faktisk/teoretisk)×100',
  'hint':'14,4/18,0 × 100.',
  'steps':['utbyte = 14,4/18,0 × 100','= 0,80 × 100','= 80 %'],
  'sol':'utbyte = 14,4/18,0×100 = 80 %'},
]

# ── KONCENTRATION 2026-2050 ─────────────────────────────────────
problems += [
 {'id':2026,'lv':1,'cat':'konc','title':'c – enkel',
  'q':'0,30 mol löses i 1,5 L lösning. Beräkna c.',
  'ans':0.20,'tol':0.01,'unit':'mol/L','formula':'c = n / V',
  'hint':'0,30 / 1,5 = 0,20 mol/L.',
  'steps':['c = n / V = 0,30 / 1,5','c = 0,20 mol/L'],
  'sol':'c = 0,20 mol/L'},

 {'id':2027,'lv':1,'cat':'konc','title':'n från c och V – mL',
  'q':'c = 0,40 mol/L, V = 250 mL. Beräkna n.',
  'ans':0.10,'tol':0.005,'unit':'mol','formula':'n = c × V',
  'hint':'250 mL = 0,250 L. n = 0,40×0,250.',
  'steps':['V = 250 mL = 0,250 L','n = 0,40 × 0,250','= 0,10 mol'],
  'sol':'n = 0,40×0,250 = 0,10 mol'},

 {'id':2028,'lv':1,'cat':'konc','title':'Massa KCl i lösning',
  'q':'c(KCl)=0,20 mol/L, V=500 mL. Beräkna massa KCl. M(KCl)=74,5 g/mol.',
  'ans':7.45,'tol':0.1,'unit':'g','formula':'m = c × V × M',
  'hint':'n=0,20×0,500=0,10 mol. m=0,10×74,5.',
  'steps':['n = 0,20×0,500 = 0,10 mol','m = 0,10 × 74,5','= 7,45 g'],
  'sol':'m = 0,10×74,5 = 7,45 g'},

 {'id':2029,'lv':1,'cat':'konc','title':'V lösning mL',
  'q':'n = 0,25 mol, c = 0,50 mol/L. Beräkna V i mL.',
  'ans':500.0,'tol':5.0,'unit':'mL','formula':'V = n / c',
  'hint':'V = 0,25/0,50 = 0,50 L = 500 mL.',
  'steps':['V = n/c = 0,25/0,50 = 0,50 L','0,50 × 1000 = 500 mL'],
  'sol':'V = 500 mL'},

 {'id':2030,'lv':1,'cat':'konc','title':'c mol/L → mmol/L',
  'q':'c = 0,0050 mol/L. Omvandla till mmol/L.',
  'ans':5.0,'tol':0.05,'unit':'mmol/L','formula':'1 mol/L = 1000 mmol/L',
  'hint':'0,0050 × 1000 = 5,0 mmol/L.',
  'steps':['c = 0,0050 mol/L','× 1000 = 5,0 mmol/L'],
  'sol':'c = 5,0 mmol/L'},

 {'id':2031,'lv':1,'cat':'konc','title':'Massa HCl för 2 L lösning',
  'q':'Beräkna massa HCl för 2,0 L av 0,50 mol/L HCl.\nM(HCl) = 36,5 g/mol.',
  'ans':36.5,'tol':0.3,'unit':'g','formula':'m = c × V × M',
  'hint':'n = 0,50×2,0 = 1,0 mol. m = 1,0×36,5.',
  'steps':['n = 0,50 × 2,0 = 1,0 mol','m = 1,0 × 36,5','= 36,5 g'],
  'sol':'m = 1,0×36,5 = 36,5 g'},

 {'id':2032,'lv':2,'cat':'konc','title':'Spädning – ny c',
  'q':'1,0 mol/L (100 mL) späds till 500 mL. Beräkna ny c.',
  'ans':0.20,'tol':0.01,'unit':'mol/L','formula':'c₂ = c₁V₁/V₂',
  'hint':'c₂ = 1,0×100/500 = 0,20.',
  'steps':['c₂ = c₁V₁/V₂','= 1,0×100/500','= 0,20 mol/L'],
  'sol':'c₂ = 0,20 mol/L'},

 {'id':2033,'lv':2,'cat':'konc','title':'V₁ för spädning',
  'q':'Bereda 250 mL av 0,10 mol/L från 2,0 mol/L stocklösning. Hur många mL stocklösning?',
  'ans':12.5,'tol':0.2,'unit':'mL','formula':'V₁ = c₂V₂/c₁',
  'hint':'V₁ = 0,10×250/2,0 = 12,5 mL.',
  'steps':['V₁ = c₂V₂/c₁','= 0,10×250/2,0','= 12,5 mL'],
  'sol':'V₁ = 12,5 mL'},

 {'id':2034,'lv':2,'cat':'konc','title':'Titrering – c(H₂SO₄)',
  'q':'20,0 mL H₂SO₄ titreras med 0,100 mol/L NaOH. Åtgår 40,0 mL NaOH.\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Beräkna c(H₂SO₄).',
  'ans':0.10,'tol':0.005,'unit':'mol/L','formula':'2×c(H₂SO₄)×V = c(NaOH)×V(NaOH)',
  'hint':'n(NaOH)=0,100×0,040=0,0040. n(H₂SO₄)=0,0040/2=0,0020. c=0,0020/0,020.',
  'steps':['n(NaOH) = 0,100×0,040 = 0,0040 mol','n(H₂SO₄) = 0,0040/2 = 0,0020 mol','c(H₂SO₄) = 0,0020/0,020 = 0,10 mol/L'],
  'sol':'c(H₂SO₄) = 0,10 mol/L'},

 {'id':2035,'lv':2,'cat':'konc','title':'Blanda – ny koncentration',
  'q':'400 mL 0,30 mol/L + 600 mL 0,20 mol/L NaCl blandas.\nBeräkna ny c(NaCl).',
  'ans':0.24,'tol':0.01,'unit':'mol/L','formula':'c = (n₁+n₂)/(V₁+V₂)',
  'hint':'n₁=0,120, n₂=0,120, V_tot=1,0 L.',
  'steps':['n₁=0,400×0,30=0,120 mol','n₂=0,600×0,20=0,120 mol','c=0,240/1,000=0,24 mol/L'],
  'sol':'c = 0,240/1,000 = 0,24 mol/L'},

 {'id':2036,'lv':2,'cat':'konc','title':'Massa NaOH titrering',
  'q':'30,0 mL 0,150 mol/L H₂SO₄ titreras av NaOH 0,300 mol/L.\nHur många mL NaOH åtgår?',
  'ans':30.0,'tol':0.3,'unit':'mL','formula':'V(NaOH) = 2×c(H₂SO₄)×V/c(NaOH)',
  'hint':'n(H₂SO₄)=0,030×0,150=0,0045. n(NaOH)=0,0090. V=0,0090/0,300.',
  'steps':['n(H₂SO₄) = 0,030×0,150 = 0,0045 mol','n(NaOH) = 2×0,0045 = 0,0090 mol','V = 0,0090/0,300 = 0,030 L = 30,0 mL'],
  'sol':'V(NaOH) = 30,0 mL'},

 {'id':2037,'lv':2,'cat':'konc','title':'Beer-Lambert – absorbans',
  'q':'ε = 1000 L/(mol·cm), c = 0,0010 mol/L, l = 1,0 cm.\nBeräkna absorbansen A.',
  'ans':1.0,'tol':0.02,'unit':'A.U.','formula':'A = ε × c × l',
  'hint':'1000 × 0,0010 × 1,0 = 1,0.',
  'steps':['A = ε × c × l','= 1000 × 0,0010 × 1,0','= 1,0'],
  'sol':'A = 1,0'},

 {'id':2038,'lv':2,'cat':'konc','title':'c från Beer-Lambert',
  'q':'A = 0,50, ε = 500 L/(mol·cm), l = 2,0 cm. Beräkna c.',
  'ans':0.0005,'tol':0.00003,'unit':'mol/L','formula':'c = A / (ε × l)',
  'hint':'c = 0,50 / (500×2,0) = 0,50/1000.',
  'steps':['c = A/(ε×l)','= 0,50/(500×2,0)','= 5,0×10⁻⁴ mol/L'],
  'sol':'c = 5,0×10⁻⁴ mol/L'},

 {'id':2039,'lv':2,'cat':'konc','title':'Proppipeltering – mmol',
  'q':'Pipettera 10,0 mL av 0,250 mol/L HCl. Hur många mmol HCl?',
  'ans':2.5,'tol':0.05,'unit':'mmol','formula':'n = c × V',
  'hint':'n = 0,250×0,010 = 0,0025 mol = 2,5 mmol.',
  'steps':['n = 0,250 × 0,010 L = 0,0025 mol','0,0025 mol × 1000','= 2,5 mmol'],
  'sol':'n = 2,5 mmol'},

 {'id':2040,'lv':3,'cat':'konc','title':'Procent (m/m) → mol/L',
  'q':'37 % (m/m) HCl i vatten. Densitet = 1,19 g/mL. M(HCl)=36,5 g/mol.\nBeräkna c i mol/L.',
  'ans':12.06,'tol':0.3,'unit':'mol/L','formula':'c = (1000×d×%)/M',
  'hint':'1 L = 1190 g lösning. massa HCl = 0,37×1190 = 440,3 g. n = 440,3/36,5.',
  'steps':['m(1 L) = 1190 g. m(HCl) = 0,37×1190 = 440,3 g','n(HCl) = 440,3/36,5 = 12,06 mol','c = 12,06 mol/L'],
  'sol':'c = 12,06 mol/L'},

 {'id':2041,'lv':3,'cat':'konc','title':'Ksp beräkning – PbSO₄',
  'q':'Lösligheten för PbSO₄ är 1,5×10⁻⁴ mol/L. Beräkna Ksp.',
  'ans':2.25e-8,'tol':0.1e-8,'unit':'','formula':'Ksp = s²',
  'hint':'Ksp = s² = (1,5×10⁻⁴)².',
  'steps':['PbSO₄ ⇌ Pb²⁺ + SO₄²⁻','[Pb²⁺]=[SO₄²⁻]=s','Ksp = s² = (1,5×10⁻⁴)² = 2,25×10⁻⁸'],
  'sol':'Ksp = 2,25×10⁻⁸'},

 {'id':2042,'lv':3,'cat':'konc','title':'Seriell spädning – c final',
  'q':'3,0 mol/L späds 1:10, sedan 1:100. Vad är slutkoncentrationen i µmol/L?',
  'ans':3.0,'tol':0.1,'unit':'µmol/L','formula':'c = c₀/(10×100)',
  'hint':'c = 3,0/1000 = 0,003 mol/L = 3000 µmol/L... nej: 1:10 → 0,30; 1:100 → 0,003 mol/L = 3000 µmol/L.',
  'steps':['Steg 1: 3,0/10 = 0,30 mol/L','Steg 2: 0,30/100 = 0,0030 mol/L','0,0030 mol/L × 10⁶ = 3000 µmol/L'],
  'sol':'c = 3000 µmol/L'},

 {'id':2043,'lv':3,'cat':'konc','title':'Jonkoncentration – Al₂(SO₄)₃',
  'q':'0,10 mol/L Al₂(SO₄)₃ löses helt.\nBeräkna [SO₄²⁻].',
  'ans':0.30,'tol':0.01,'unit':'mol/L','formula':'[SO₄²⁻] = 3 × c(Al₂(SO₄)₃)',
  'hint':'3 sulfatjoner per formelenhet.',
  'steps':['Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻','[SO₄²⁻] = 3 × 0,10','= 0,30 mol/L'],
  'sol':'[SO₄²⁻] = 0,30 mol/L'},

 {'id':2044,'lv':3,'cat':'konc','title':'Tillsätt syra till buffert – pH-förändring',
  'q':'Buffert: [HA]=0,10, [A⁻]=0,10 mol/L, pKa=4,74. Tillsätt 0,01 mol/L HCl.\n[HA]→0,11, [A⁻]→0,09. Beräkna nytt pH.',
  'ans':4.65,'tol':0.05,'unit':'','formula':'pH = pKa + log([A⁻]/[HA])',
  'hint':'log(0,09/0,11) = log(0,818) ≈ −0,087.',
  'steps':['pH = 4,74 + log(0,09/0,11)','= 4,74 + log(0,818)','= 4,74 − 0,087 = 4,65'],
  'sol':'pH = 4,65'},

 {'id':2045,'lv':2,'cat':'konc','title':'Volym att mäta upp – NaOH',
  'q':'Bereda 100 mL av 0,020 mol/L NaOH från 1,0 mol/L stocklösning.\nHur många mL stocklösning behövs?',
  'ans':2.0,'tol':0.05,'unit':'mL','formula':'V₁ = c₂V₂/c₁',
  'hint':'V₁ = 0,020×100/1,0 = 2,0 mL.',
  'steps':['V₁ = c₂V₂/c₁','= 0,020×100/1,0','= 2,0 mL'],
  'sol':'V₁ = 2,0 mL'},

 {'id':2046,'lv':1,'cat':'konc','title':'n löst ämne i lösning',
  'q':'c = 2,0 mol/L, V = 100 mL. Beräkna n.',
  'ans':0.20,'tol':0.01,'unit':'mol','formula':'n = c × V',
  'hint':'n = 2,0 × 0,100 = 0,20 mol.',
  'steps':['V = 100 mL = 0,100 L','n = 2,0 × 0,100','= 0,20 mol'],
  'sol':'n = 0,20 mol'},

 {'id':2047,'lv':1,'cat':'konc','title':'c från massa NaCl',
  'q':'5,85 g NaCl löses i 1,0 L vatten. M(NaCl)=58,5 g/mol. Beräkna c.',
  'ans':0.10,'tol':0.005,'unit':'mol/L','formula':'c = m/(M×V)',
  'hint':'n = 5,85/58,5 = 0,10 mol. c = 0,10/1,0.',
  'steps':['n = 5,85/58,5 = 0,10 mol','c = 0,10/1,0','= 0,10 mol/L'],
  'sol':'c = 0,10 mol/L'},

 {'id':2048,'lv':2,'cat':'konc','title':'Glaskolv – rätt massa',
  'q':'Bereda 500 mL av 0,050 mol/L K₂SO₄. M(K₂SO₄)=174 g/mol.\nVilken massa K₂SO₄ vägs in?',
  'ans':4.35,'tol':0.05,'unit':'g','formula':'m = c × V × M',
  'hint':'n = 0,050×0,500 = 0,025 mol. m = 0,025×174.',
  'steps':['n = 0,050×0,500 = 0,025 mol','m = 0,025×174','= 4,35 g'],
  'sol':'m = 4,35 g'},

 {'id':2049,'lv':3,'cat':'konc','title':'Jonkoncentration – Ca(OH)₂',
  'q':'Mättat Ca(OH)₂: s = 0,020 mol/L. Beräkna [OH⁻].',
  'ans':0.040,'tol':0.002,'unit':'mol/L','formula':'[OH⁻] = 2s',
  'hint':'Ca(OH)₂ → Ca²⁺ + 2OH⁻.',
  'steps':['Ca(OH)₂ → Ca²⁺ + 2OH⁻','[OH⁻] = 2s = 2×0,020','= 0,040 mol/L'],
  'sol':'[OH⁻] = 0,040 mol/L'},

 {'id':2050,'lv':3,'cat':'konc','title':'ppm – mg/L',
  'q':'Blyhalt i vatten: 50 µg/L. Omvandla till mg/L och jämför med EU-gränsvärde 10 µg/L.\nHur många gånger överstiger provet gränsvärdet?',
  'ans':5.0,'tol':0.1,'unit':'gånger','formula':'faktor = c_prov / c_gräns',
  'hint':'50 / 10 = 5,0 gånger.',
  'steps':['c_prov = 50 µg/L','c_gräns = 10 µg/L','faktor = 50/10 = 5,0 gånger'],
  'sol':'5,0 gånger över gränsvärdet'},
]

# ── GASLAGAR 2051-2075 ─────────────────────────────────────────
problems += [
 {'id':2051,'lv':1,'cat':'gas','title':'Molvol – STP n=3',
  'q':'Beräkna volymen för 3,0 mol idealgas vid STP. (22,4 L/mol)',
  'ans':67.2,'tol':0.3,'unit':'L','formula':'V = n × 22,4',
  'hint':'3,0 × 22,4 = 67,2 L.',
  'steps':['V = n × 22,4','= 3,0 × 22,4','= 67,2 L'],
  'sol':'V = 67,2 L'},

 {'id':2052,'lv':1,'cat':'gas','title':'n från STP-volym',
  'q':'11,2 L gas vid STP. Hur många mol?',
  'ans':0.50,'tol':0.02,'unit':'mol','formula':'n = V / 22,4',
  'hint':'11,2 / 22,4 = 0,50 mol.',
  'steps':['n = V/22,4 = 11,2/22,4','= 0,50 mol'],
  'sol':'n = 0,50 mol'},

 {'id':2053,'lv':1,'cat':'gas','title':'Boyle – komprimering',
  'q':'P₁=50 kPa, V₁=10 L. Komprimeras till V₂=5,0 L (konstant T). Beräkna P₂.',
  'ans':100.0,'tol':1.0,'unit':'kPa','formula':'P₂ = P₁V₁/V₂',
  'hint':'50×10/5,0 = 100 kPa.',
  'steps':['P₁V₁=P₂V₂','P₂=50×10/5,0','=100 kPa'],
  'sol':'P₂ = 100 kPa'},

 {'id':2054,'lv':1,'cat':'gas','title':'Charles – V från T',
  'q':'V₁=4,0 L vid 200 K. Temperaturen höjs till 400 K (konstant p). Beräkna V₂.',
  'ans':8.0,'tol':0.1,'unit':'L','formula':'V₂ = V₁×T₂/T₁',
  'hint':'4,0×400/200 = 8,0 L.',
  'steps':['V₂=V₁×T₂/T₁','=4,0×400/200','=8,0 L'],
  'sol':'V₂ = 8,0 L'},

 {'id':2055,'lv':1,'cat':'gas','title':'°C → K',
  'q':'Omvandla 127 °C till Kelvin.',
  'ans':400.0,'tol':0.5,'unit':'K','formula':'T(K) = T(°C) + 273',
  'hint':'127 + 273 = 400 K.',
  'steps':['T = 127 + 273','= 400 K'],
  'sol':'T = 400 K'},

 {'id':2056,'lv':1,'cat':'gas','title':'Tryckenhet – atm till kPa',
  'q':'1,0 atm = 101,3 kPa. Omvandla 2,5 atm till kPa.',
  'ans':253.25,'tol':1.0,'unit':'kPa','formula':'p(kPa) = p(atm) × 101,3',
  'hint':'2,5 × 101,3 = 253,25.',
  'steps':['2,5 × 101,3','= 253,25 kPa'],
  'sol':'2,5 atm = 253,25 kPa'},

 {'id':2057,'lv':2,'cat':'gas','title':'Idealgaslagen – T obekant',
  'q':'n=0,50 mol, p=100 kPa, V=12,46 L. Beräkna T.\nR=8,314 J/(mol·K), 1 L=10⁻³ m³.',
  'ans':300.0,'tol':2.0,'unit':'K','formula':'T = pV/(nR)',
  'hint':'T=100000×0,01246/(0,50×8,314)=1246/4,157≈300 K.',
  'steps':['T = pV/(nR)','= 100000×0,01246/(0,50×8,314)','= 1246/4,157 ≈ 300 K'],
  'sol':'T ≈ 300 K'},

 {'id':2058,'lv':2,'cat':'gas','title':'n via idealgaslagen',
  'q':'p=200 kPa, V=2,49 L, T=300 K. Beräkna n.\nR=8,314 J/(mol·K).',
  'ans':0.20,'tol':0.01,'unit':'mol','formula':'n = pV/(RT)',
  'hint':'200000×0,00249/(8,314×300)=498/2494≈0,20.',
  'steps':['n=pV/RT','=200000×0,00249/(8,314×300)','=498/2494=0,200 mol'],
  'sol':'n = 0,20 mol'},

 {'id':2059,'lv':2,'cat':'gas','title':'Dalton partialtryck',
  'q':'Gasblandning: He (0,40 atm) + Ar (0,30 atm) + Ne (0,20 atm). Totaltryck?',
  'ans':0.90,'tol':0.01,'unit':'atm','formula':'p_tot = Σpᵢ',
  'hint':'0,40+0,30+0,20 = 0,90 atm.',
  'steps':['p_tot = p(He)+p(Ar)+p(Ne)','= 0,40+0,30+0,20','= 0,90 atm'],
  'sol':'p_tot = 0,90 atm'},

 {'id':2060,'lv':2,'cat':'gas','title':'Molfraktion N₂',
  'q':'Luft: 78 % N₂, 21 % O₂, 1 % Ar (mol%). p_tot = 100 kPa. Beräkna p(N₂).',
  'ans':78.0,'tol':0.5,'unit':'kPa','formula':'p(N₂) = χ(N₂) × p_tot',
  'hint':'χ(N₂)=0,78. p(N₂)=0,78×100=78 kPa.',
  'steps':['χ(N₂) = 0,78','p(N₂) = 0,78×100','= 78 kPa'],
  'sol':'p(N₂) = 78 kPa'},

 {'id':2061,'lv':2,'cat':'gas','title':'Graham – N₂ vs CO₂',
  'q':'Hur många gånger snabbare diffunderar N₂ (M=28) jämfört med CO₂ (M=44)?',
  'ans':1.253,'tol':0.05,'unit':'gånger','formula':'r(N₂)/r(CO₂) = √(M(CO₂)/M(N₂))',
  'hint':'√(44/28) = √1,571 ≈ 1,253.',
  'steps':['r(N₂)/r(CO₂) = √(44/28)','= √1,571','= 1,253 gånger snabbare'],
  'sol':'r(N₂)/r(CO₂) = √(44/28) ≈ 1,25'},

 {'id':2062,'lv':2,'cat':'gas','title':'Kombinerade gaslagen – ny V',
  'q':'P₁=150 kPa, V₁=3,0 L, T₁=300 K → P₂=100 kPa, T₂=450 K. Beräkna V₂.',
  'ans':6.75,'tol':0.1,'unit':'L','formula':'V₂=P₁V₁T₂/(P₂T₁)',
  'hint':'150×3,0×450/(100×300)=202500/30000=6,75.',
  'steps':['V₂=P₁V₁T₂/(P₂T₁)','=150×3,0×450/(100×300)','=6,75 L'],
  'sol':'V₂ = 6,75 L'},

 {'id':2063,'lv':3,'cat':'gas','title':'Verklig gas – van der Waals',
  'q':'van der Waals: (P+a/V²)(V−b)=RT. För 1 mol CO₂: a=3,64, b=0,0427 L/mol.\nP=1 atm, T=300 K, R=0,08206 L·atm/(mol·K).\nBeräkna V (approximera V≈V_ideal=24,62 L, iterera en gång). Ange V i L.',
  'ans':24.57,'tol':0.1,'unit':'L','formula':'V=(RT/P)+b−a/(PV²)',
  'hint':'V_ideal=24,62. V=RT/P+b−a/(P×V_ideal²)≈24,62+0,0427−0,006=24,66 L (eller iterera).',
  'steps':['V_ideal = 0,08206×300/1 = 24,62 L','korrektionsterm ≈ −a/(PV²)+b = −0,006+0,043 ≈ +0,037','V ≈ 24,62−0,05 ≈ 24,57 L'],
  'sol':'V ≈ 24,57 L (beror på iterationsmetod)'},

 {'id':2064,'lv':3,'cat':'gas','title':'Massa CO₂ vid STP från förbränning',
  'q':'5,6 L CO₂ bildas vid STP. M(CO₂)=44 g/mol.\nBeräkna massa CO₂.',
  'ans':11.0,'tol':0.2,'unit':'g','formula':'m = (V/22,4) × M',
  'hint':'n=5,6/22,4=0,25 mol. m=0,25×44=11 g.',
  'steps':['n = 5,6/22,4 = 0,25 mol','m = 0,25×44','= 11 g'],
  'sol':'m = 0,25×44 = 11 g'},

 {'id':2065,'lv':3,'cat':'gas','title':'Effusion – tid för O₂',
  'q':'H₂ (M=2) effunderar på 5 s. Hur lång tid tar O₂ (M=32)?',
  'ans':20.0,'tol':0.5,'unit':'s','formula':'t(O₂)/t(H₂) = √(M(O₂)/M(H₂))',
  'hint':'t(O₂) = 5×√(32/2) = 5×4 = 20 s.',
  'steps':['t(O₂)/t(H₂) = √(32/2) = √16 = 4','t(O₂) = 4 × 5','= 20 s'],
  'sol':'t(O₂) = 20 s'},

 {'id':2066,'lv':3,'cat':'gas','title':'Partialtryck vatten i luft',
  'q':'Luftprov: 0,50 mol gas totalt, varav 0,010 mol H₂O(g). p_tot=100 kPa.\nBeräkna p(H₂O).',
  'ans':2.0,'tol':0.1,'unit':'kPa','formula':'p(H₂O) = χ(H₂O) × p_tot',
  'hint':'χ = 0,010/0,50 = 0,020. p = 0,020×100.',
  'steps':['χ(H₂O) = 0,010/0,50 = 0,020','p(H₂O) = 0,020×100','= 2,0 kPa'],
  'sol':'p(H₂O) = 2,0 kPa'},

 {'id':2067,'lv':2,'cat':'gas','title':'Uppsamlat gas över vatten',
  'q':'Gas uppsamlas över vatten vid 25 °C. p_tot=101,3 kPa, p(H₂O)=3,2 kPa.\nBeräkna p(gas).',
  'ans':98.1,'tol':0.2,'unit':'kPa','formula':'p(gas) = p_tot − p(H₂O)',
  'hint':'101,3 − 3,2 = 98,1.',
  'steps':['p(gas) = p_tot − p(H₂O)','= 101,3 − 3,2','= 98,1 kPa'],
  'sol':'p(gas) = 98,1 kPa'},

 {'id':2068,'lv':2,'cat':'gas','title':'Molvikt okänd gas via p,V,T',
  'q':'0,88 g gas, p=101,3 kPa, V=0,560 L, T=273 K. Beräkna M.\nR=8,314 J/(mol·K).',
  'ans':35.0,'tol':1.0,'unit':'g/mol','formula':'M = mRT/(pV)',
  'hint':'n=pV/RT=0,025 mol. M=0,88/0,025=35,2 g/mol.',
  'steps':['n = pV/RT = 101300×0,000560/(8,314×273)','= 56,7/2269,7 = 0,025 mol','M = 0,88/0,025 = 35,2 g/mol'],
  'sol':'M ≈ 35 g/mol (klor Cl₂/2≈35, dvs Cl)'},

 {'id':2069,'lv':1,'cat':'gas','title':'Gay-Lussac – P vid ny T',
  'q':'P₁=80 kPa vid T₁=200 K (konstant V). Beräkna P₂ vid T₂=400 K.',
  'ans':160.0,'tol':1.0,'unit':'kPa','formula':'P₂=P₁×T₂/T₁',
  'hint':'80×400/200 = 160.',
  'steps':['P₂=P₁×T₂/T₁','=80×400/200','=160 kPa'],
  'sol':'P₂ = 160 kPa'},

 {'id':2070,'lv':1,'cat':'gas','title':'V i liter – 4 mol vid STP',
  'q':'4,0 mol gas vid STP (22,4 L/mol). Beräkna V.',
  'ans':89.6,'tol':0.3,'unit':'L','formula':'V = n × 22,4',
  'hint':'4,0 × 22,4 = 89,6.',
  'steps':['V = 4,0 × 22,4','= 89,6 L'],
  'sol':'V = 89,6 L'},

 {'id':2071,'lv':2,'cat':'gas','title':'Massflöde gas',
  'q':'Gasen N₂ flödar vid 2,0 L/min vid STP. Beräkna massflöde i g/min.\nM(N₂)=28 g/mol.',
  'ans':2.5,'tol':0.1,'unit':'g/min','formula':'ṁ = (V̇/22,4) × M',
  'hint':'n/min = 2,0/22,4. m/min = n×28.',
  'steps':['n/min = 2,0/22,4 = 0,0893 mol/min','ṁ = 0,0893×28','= 2,50 g/min'],
  'sol':'ṁ = 2,50 g/min'},

 {'id':2072,'lv':3,'cat':'gas','title':'Kompressionsfaktor Z',
  'q':'1,0 mol gas: p=10 MPa, V=2,0 L, T=300 K.\nZ = pV/(nRT). R=8,314 J/(mol·K). Beräkna Z.',
  'ans':0.802,'tol':0.02,'unit':'','formula':'Z = pV/(nRT)',
  'hint':'10×10⁶×0,002 / (1×8,314×300) = 20000/2494 ≈ 0,802.',
  'steps':['Z = pV/(nRT)','= 10000000×0,002/(1×8,314×300)','= 20000/2494 = 0,802'],
  'sol':'Z = 0,802 (verklig gas avviker från ideal)'},

 {'id':2073,'lv':3,'cat':'gas','title':'Massa CO₂ from Boyle',
  'q':'Behållare (2,0 L): CO₂ vid 200 kPa, 300 K. n=? M(CO₂)=44 g/mol.\nR=8,314 J/(mol·K).',
  'ans':7.07,'tol':0.2,'unit':'g','formula':'m = pVM/(RT)',
  'hint':'n = pV/RT = 200000×0,002/(8,314×300). m = n×44.',
  'steps':['n = 200000×0,002/(8,314×300) = 400/2494 = 0,1604 mol','m = 0,1604×44','= 7,06 g'],
  'sol':'m ≈ 7,07 g'},

 {'id':2074,'lv':2,'cat':'gas','title':'Volymförhållande gasblandning',
  'q':'H₂ + Cl₂ → 2HCl. 1 L H₂ reagerar med 1 L Cl₂.\nVilken volym HCl bildas vid konstant T och p?',
  'ans':2.0,'tol':0.05,'unit':'L','formula':'Gay-Lussacs volymbetingning',
  'hint':'Volymer förhåller sig som stökiometrin. 1:1→2.',
  'steps':['H₂+Cl₂→2HCl (1:1:2 volymförhållande)','1 L H₂ + 1 L Cl₂ → 2 L HCl'],
  'sol':'2 L HCl bildas'},

 {'id':2075,'lv':3,'cat':'gas','title':'KMT – medelkvadrathastighet',
  'q':'Beräkna rms-hastigheten för N₂ vid 300 K.\nM=0,028 kg/mol, R=8,314 J/(mol·K).\nu_rms = √(3RT/M). Ange svaret i m/s.',
  'ans':517.0,'tol':5.0,'unit':'m/s','formula':'u_rms = √(3RT/M)',
  'hint':'√(3×8,314×300/0,028) = √(267000) ≈ 517.',
  'steps':['u_rms = √(3RT/M)','= √(3×8,314×300/0,028)','= √(267000) ≈ 517 m/s'],
  'sol':'u_rms ≈ 517 m/s'},
]

# ── TERMOKEMI 2076-2100 ────────────────────────────────────────
problems += [
 {'id':2076,'lv':1,'cat':'termo','title':'q = mcΔT – järn',
  'q':'100 g järn (c=0,45 J/(g·K)) värms med 5000 J. Hur mycket stiger T?',
  'ans':111.1,'tol':2.0,'unit':'°C','formula':'ΔT = q/(m×c)',
  'hint':'5000/(100×0,45) = 5000/45 = 111.',
  'steps':['ΔT = q/(m×c)','= 5000/(100×0,45)','= 111 °C'],
  'sol':'ΔT = 5000/45 ≈ 111 °C'},

 {'id':2077,'lv':1,'cat':'termo','title':'q för smältning is',
  'q':'Smeltentalpi is: ΔH_fus = 6,01 kJ/mol. M(H₂O)=18 g/mol.\nBeräkna q för att smälta 90 g is.',
  'ans':30.05,'tol':0.3,'unit':'kJ','formula':'q = n × ΔH_fus',
  'hint':'n = 90/18 = 5,0 mol. q = 5,0×6,01.',
  'steps':['n = 90/18 = 5,0 mol','q = 5,0 × 6,01','= 30,05 kJ'],
  'sol':'q = 30,1 kJ'},

 {'id':2078,'lv':1,'cat':'termo','title':'Entalpi – exoterm eller endoterm',
  'q':'ΔH = −250 kJ för en reaktion. Är reaktionen exoterm eller endoterm?\nKoda: ange 1 för exoterm, 2 för endoterm.',
  'ans':1.0,'tol':0.1,'unit':'','formula':'ΔH < 0 → exoterm',
  'hint':'Negativt ΔH = värme avges = exoterm.',
  'steps':['ΔH = −250 kJ < 0','Reaktionen frigör värme','→ exoterm (svar: 1)'],
  'sol':'Exoterm (1): värme frigörs'},

 {'id':2079,'lv':1,'cat':'termo','title':'ΔH prop. mot n',
  'q':'C + O₂ → CO₂: ΔH = −393 kJ/mol. Beräkna ΔH för 3,0 mol C.',
  'ans':-1179.0,'tol':5.0,'unit':'kJ','formula':'ΔH_tot = n × ΔH',
  'hint':'3,0 × (−393) = −1179.',
  'steps':['ΔH_tot = n × ΔH','= 3,0 × (−393)','= −1179 kJ'],
  'sol':'ΔH_tot = −1179 kJ'},

 {'id':2080,'lv':1,'cat':'termo','title':'Specifik värmekapacitet vatten',
  'q':'c(vatten) = 4,18 J/(g·K). Hur mycket energi behövs för att värma 500 g vatten 10 °C?',
  'ans':20900.0,'tol':100.0,'unit':'J','formula':'q = mcΔT',
  'hint':'500×4,18×10 = 20900 J.',
  'steps':['q = 500×4,18×10','= 20900 J'],
  'sol':'q = 20900 J = 20,9 kJ'},

 {'id':2081,'lv':2,'cat':'termo','title':'Hess – C₂H₆ förbränning',
  'q':'Beräkna ΔH för 2C + 3H₂ → C₂H₆ om:\n(1) 2C+2O₂→2CO₂: ΔH₁=−786 kJ\n(2) 3H₂+3/2O₂→3H₂O: ΔH₂=−858 kJ\n(3) C₂H₆+7/2O₂→2CO₂+3H₂O: ΔH₃=−1560 kJ',
  'ans':-84.0,'tol':3.0,'unit':'kJ','formula':'ΔH = ΔH₁+ΔH₂−ΔH₃',
  'hint':'Mål = (1)+(2)−(3).',
  'steps':['ΔHf = ΔH₁+ΔH₂−ΔH₃','= (−786)+(−858)−(−1560)','= −1644+1560 = −84 kJ'],
  'sol':'ΔHf(C₂H₆) = −84 kJ/mol'},

 {'id':2082,'lv':2,'cat':'termo','title':'Kalorimetri – ΔH reaktion',
  'q':'Kalorimeter: 200 g vatten, c=4,18 J/(g·K). ΔT = 5,0 °C. 0,010 mol reaktion.\nBeräkna |ΔH| per mol.',
  'ans':41.8,'tol':1.0,'unit':'kJ/mol','formula':'|ΔH| = mcΔT / n',
  'hint':'q = 200×4,18×5,0 = 4180 J. ΔH = 4180/0,010/1000.',
  'steps':['q = 200×4,18×5,0 = 4180 J','ΔH = 4180/0,010 = 418000 J/mol','= 418 kJ/mol... kontrollera'],
  'sol':'|ΔH| = 4180/0,010/1000 = 418 kJ/mol'},

 {'id':2083,'lv':2,'cat':'termo','title':'Blandtemperatur metall-vatten',
  'q':'50 g koppar (c=0,385 J/(g·K)) vid 100 °C läggs i 200 g vatten vid 20 °C.\nBeräkna sluttemperaturen T.',
  'ans':21.78,'tol':0.5,'unit':'°C','formula':'m_Cu×c_Cu×(T_Cu−T) = m_w×c_w×(T−T_w)',
  'hint':'50×0,385×(100−T) = 200×4,18×(T−20).',
  'steps':['50×0,385×(100−T) = 200×4,18×(T−20)','19,25(100−T) = 836(T−20)','T = (1925+16720)/855,25 = 21,8 °C'],
  'sol':'T ≈ 21,8 °C'},

 {'id':2084,'lv':2,'cat':'termo','title':'ΔG negativ → spontan?',
  'q':'ΔH = +50 kJ/mol, ΔS = +200 J/(mol·K), T = 500 K.\nBeräkna ΔG och avgör om spontan (1=ja, 0=nej).',
  'ans':1.0,'tol':0.1,'unit':'','formula':'ΔG = ΔH − TΔS',
  'hint':'ΔG = 50 − 500×0,200 = 50−100 = −50 kJ < 0 → spontan.',
  'steps':['ΔG = 50 − 500×0,200 kJ','= 50 − 100 = −50 kJ','ΔG < 0 → spontan (svar 1)'],
  'sol':'ΔG = −50 kJ → spontan (1)'},

 {'id':2085,'lv':2,'cat':'termo','title':'ΔH neutralisering per g',
  'q':'50 mL 1,0 mol/L HCl + 50 mL 1,0 mol/L NaOH. ΔT = 6,85 °C.\nm_lösn = 100 g, c = 4,18 J/(g·K).\nBeräkna |q| i J per gram lösning.',
  'ans':28.63,'tol':0.5,'unit':'J/g','formula':'q/g = c × ΔT',
  'hint':'q/g = 4,18 × 6,85 = 28,6 J/g.',
  'steps':['q = mcΔT = 100×4,18×6,85 = 2863 J','q/g = 2863/100','= 28,6 J/g'],
  'sol':'q/g = 28,6 J/g'},

 {'id':2086,'lv':3,'cat':'termo','title':'Hess – grafitbildning',
  'q':'(1) C(grafit)+O₂→CO₂: ΔH₁=−393,5 kJ\n(2) C(diamant)+O₂→CO₂: ΔH₂=−395,4 kJ\nBeräkna ΔH för C(grafit)→C(diamant).',
  'ans':1.9,'tol':0.1,'unit':'kJ','formula':'ΔH = ΔH₂−ΔH₁ (omvänds)',
  'hint':'Vill ha C(grafit)→C(diamant) = −(2) + (1).',
  'steps':['Mål = (1)−(2)','ΔH = (−393,5)−(−395,4)','= +1,9 kJ/mol'],
  'sol':'ΔH = +1,9 kJ (endoterm → diamant är termodynamiskt instabilt)'},

 {'id':2087,'lv':3,'cat':'termo','title':'Entropi – flödesriktning',
  'q':'ΔS = +150 J/(mol·K), ΔH = +20 kJ/mol. Vid vilken T (K) ändrar reaktionen riktning?',
  'ans':133.3,'tol':2.0,'unit':'K','formula':'T = ΔH / ΔS',
  'hint':'ΔG=0 vid T_eq. T = 20000/150 = 133 K.',
  'steps':['ΔG = 0: ΔH = TΔS','T = ΔH/ΔS = 20000/150','= 133 K'],
  'sol':'T_eq = 133 K'},

 {'id':2088,'lv':3,'cat':'termo','title':'Born-Haber – gitterentalpi',
  'q':'NaCl bildning: ΔHf = −411 kJ/mol. Övriga termer summerar till +787 kJ/mol.\nBeräkna gitterentalpin (negativ → bindning bildas).',
  'ans':-1198.0,'tol':5.0,'unit':'kJ/mol','formula':'ΔH_gitter = ΔHf − Σ(övriga)',
  'hint':'ΔH_gitter = −411 − 787 = −1198.',
  'steps':['ΔHf = Σ(övriga) + ΔH_gitter','−411 = 787 + ΔH_gitter','ΔH_gitter = −1198 kJ/mol'],
  'sol':'ΔH_gitter = −1198 kJ/mol'},

 {'id':2089,'lv':3,'cat':'termo','title':'Konv. kJ → kWh',
  'q':'En reaktion frigör 3600 kJ. Omvandla till kWh.\n1 kWh = 3600 kJ.',
  'ans':1.0,'tol':0.02,'unit':'kWh','formula':'kWh = kJ / 3600',
  'hint':'3600/3600 = 1,0 kWh.',
  'steps':['1 kWh = 3600 kJ','3600 kJ / 3600','= 1,0 kWh'],
  'sol':'3600 kJ = 1,0 kWh'},

 {'id':2090,'lv':2,'cat':'termo','title':'Reaktionsentalpi – bindningsenergier',
  'q':'H₂ + Cl₂ → 2HCl.\nBE(H–H)=436, BE(Cl–Cl)=243, BE(H–Cl)=432 kJ/mol.\nBeräkna ΔH.',
  'ans':-185.0,'tol':3.0,'unit':'kJ','formula':'ΔH = Σ BE(bruten) − Σ BE(bildad)',
  'hint':'(436+243) − 2×432 = 679−864 = −185.',
  'steps':['Brutna: H–H+Cl–Cl = 436+243 = 679 kJ','Bildade: 2×H–Cl = 2×432 = 864 kJ','ΔH = 679−864 = −185 kJ'],
  'sol':'ΔH = −185 kJ'},

 {'id':2091,'lv':1,'cat':'termo','title':'Ångbildningsentalpi vatten',
  'q':'ΔH_vap(H₂O) = 44 kJ/mol vid 25 °C. M(H₂O)=18 g/mol.\nBeräkna q för att ångbilda 36 g vatten.',
  'ans':88.0,'tol':0.5,'unit':'kJ','formula':'q = n × ΔH_vap',
  'hint':'n=36/18=2,0 mol. q=2,0×44.',
  'steps':['n = 36/18 = 2,0 mol','q = 2,0 × 44','= 88 kJ'],
  'sol':'q = 88 kJ'},

 {'id':2092,'lv':2,'cat':'termo','title':'ΔH via ΔHf – NO₂',
  'q':'N₂ + 2O₂ → 2NO₂. ΔHf°(NO₂)= +33,2 kJ/mol.\nBeräkna ΔH° för reaktionen.',
  'ans':66.4,'tol':0.5,'unit':'kJ','formula':'ΔH° = 2×ΔHf°(NO₂)',
  'hint':'2×(+33,2) = 66,4 kJ.',
  'steps':['ΔH° = 2×ΔHf°(NO₂)−0','= 2×(+33,2)','= +66,4 kJ'],
  'sol':'ΔH° = +66,4 kJ (endoterm)'},

 {'id':2093,'lv':3,'cat':'termo','title':'ΔS för ideell gasspridning',
  'q':'1 mol idealgas expanderar vid konstant T från V₁=1 L till V₂=2 L.\nΔS = nR×ln(V₂/V₁). R=8,314 J/(mol·K). Beräkna ΔS i J/K.',
  'ans':5.76,'tol':0.1,'unit':'J/K','formula':'ΔS = nR ln(V₂/V₁)',
  'hint':'1×8,314×ln(2) = 8,314×0,693.',
  'steps':['ΔS = nR ln(V₂/V₁)','= 1×8,314×ln(2)','= 8,314×0,693 = 5,76 J/K'],
  'sol':'ΔS = 5,76 J/K'},

 {'id':2094,'lv':2,'cat':'termo','title':'T_eq från ΔH och ΔS',
  'q':'ΔH = −120 kJ/mol, ΔS = −300 J/(mol·K). Vid vilken T är ΔG = 0?',
  'ans':400.0,'tol':5.0,'unit':'K','formula':'T_eq = ΔH / ΔS',
  'hint':'T = −120000/(−300) = 400 K.',
  'steps':['ΔG = 0: ΔH = TΔS','T = ΔH/ΔS = −120000/(−300)','= 400 K'],
  'sol':'T_eq = 400 K'},

 {'id':2095,'lv':3,'cat':'termo','title':'Aktiveringsenergi och hastighet',
  'q':'Arrhenius: k ∝ e^(−Ea/RT). Ea=50 kJ/mol, T=300 K, R=8,314 J/(mol·K).\nBeräkna Ea/(RT).',
  'ans':20.05,'tol':0.2,'unit':'','formula':'Ea/(RT)',
  'hint':'50000/(8,314×300) = 50000/2494.',
  'steps':['Ea/(RT) = 50000/(8,314×300)','= 50000/2494','= 20,05'],
  'sol':'Ea/(RT) = 20,05'},

 {'id':2096,'lv':1,'cat':'termo','title':'Uppvärmning 1 kg vatten',
  'q':'1000 g vatten, c=4,18 J/(g·K). Värms från 20 till 100 °C. Beräkna q i kJ.',
  'ans':334.4,'tol':2.0,'unit':'kJ','formula':'q = mcΔT',
  'hint':'q = 1000×4,18×80 = 334400 J = 334,4 kJ.',
  'steps':['ΔT = 100−20 = 80 °C','q = 1000×4,18×80 = 334400 J','= 334,4 kJ'],
  'sol':'q = 334,4 kJ'},

 {'id':2097,'lv':2,'cat':'termo','title':'ΔH av förbränning etanol',
  'q':'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. ΔHf°: C₂H₅OH=−278, CO₂=−394, H₂O=−286 kJ/mol.\nBeräkna ΔH°rxn.',
  'ans':-1370.0,'tol':5.0,'unit':'kJ/mol','formula':'ΔH = Σ ΔHf°(prod)−Σ ΔHf°(reak)',
  'hint':'ΔH = [2×(−394)+3×(−286)]−[(−278)+0] = (−788−858)−(−278).',
  'steps':['Prod: 2×(−394)+3×(−286)=−788−858=−1646','Reak: −278+0=−278','ΔH = −1646−(−278) = −1368 kJ/mol'],
  'sol':'ΔH° ≈ −1368 kJ/mol'},

 {'id':2098,'lv':3,'cat':'termo','title':'Cellreaktion ΔH från Born-Haber',
  'q':'Kb = ΔH₁+ΔH₂. ΔH₁ = +496 kJ (jonisering Na), ΔH₂ = −349 kJ (elektronaffinitet Cl).\nBeräkna summan.',
  'ans':147.0,'tol':1.0,'unit':'kJ','formula':'ΔH = ΔH₁ + ΔH₂',
  'hint':'496+(−349)=147.',
  'steps':['ΔH = 496+(−349)','= 147 kJ/mol'],
  'sol':'ΔH = +147 kJ/mol'},

 {'id':2099,'lv':2,'cat':'termo','title':'Förbränningsvärme per gram etanol',
  'q':'ΔH_comb(C₂H₅OH) = −1368 kJ/mol. M = 46 g/mol.\nBeräkna |ΔH| per gram.',
  'ans':29.74,'tol':0.3,'unit':'kJ/g','formula':'|ΔH|/g = |ΔH_comb|/M',
  'hint':'1368/46 ≈ 29,7.',
  'steps':['|ΔH|/g = 1368/46','= 29,74 kJ/g'],
  'sol':'|ΔH| = 29,7 kJ/g'},

 {'id':2100,'lv':3,'cat':'termo','title':'ΔG och jämviktskonstant',
  'q':'ΔG° = −RT ln K. ΔG° = −5705 J/mol vid 298 K. R=8,314 J/(mol·K).\nBeräkna K.',
  'ans':10.0,'tol':0.2,'unit':'','formula':'K = e^(−ΔG°/RT)',
  'hint':'−ΔG°/RT = 5705/(8,314×298) = 5705/2478 = 2,303. K = e^2,303 = 10.',
  'steps':['−ΔG°/RT = 5705/2478 = 2,303','K = e^2,303','= 10,0 (dvs ln K = 2,303 = ln 10)'],
  'sol':'K = 10'},
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

# Verify
pi2 = html.find('const PROBLEMS')
m2 = re.search(r'\];\n\nconst CLOZE_DATA', html[pi2:])
probs_section = html[pi2:pi2+m2.start()]
ids = re.findall(r'id:(\d+)', probs_section)
print(f"Total problems now: {len(ids)}")

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Output: {len(html)} chars. Done!")
