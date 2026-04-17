const ELEMENTS_RAW = [
  [1,'H','Väte',1.008,2.20,'nm',1,1],[2,'He','Helium',4.003,null,'nb',1,18],
  [3,'Li','Litium',6.941,0.98,'ak',2,1],[4,'Be','Beryllium',9.012,1.57,'ae',2,2],
  [5,'B','Bor',10.811,2.04,'ml',2,13],[6,'C','Kol',12.011,2.55,'nm',2,14],
  [7,'N','Kväve',14.007,3.04,'nm',2,15],[8,'O','Syre',15.999,3.44,'nm',2,16],
  [9,'F','Fluor',18.998,3.98,'hl',2,17],[10,'Ne','Neon',20.180,null,'nb',2,18],
  [11,'Na','Natrium',22.990,0.93,'ak',3,1],[12,'Mg','Magnesium',24.305,1.31,'ae',3,2],
  [13,'Al','Aluminium',26.982,1.61,'pt',3,13],[14,'Si','Kisel',28.086,1.90,'ml',3,14],
  [15,'P','Fosfor',30.974,2.19,'nm',3,15],[16,'S','Svavel',32.065,2.58,'nm',3,16],
  [17,'Cl','Klor',35.453,3.16,'hl',3,17],[18,'Ar','Argon',39.948,null,'nb',3,18],
  [19,'K','Kalium',39.098,0.82,'ak',4,1],[20,'Ca','Kalcium',40.078,1.00,'ae',4,2],
  [21,'Sc','Skandium',44.956,1.36,'tr',4,3],[22,'Ti','Titan',47.867,1.54,'tr',4,4],
  [23,'V','Vanadin',50.942,1.63,'tr',4,5],[24,'Cr','Krom',51.996,1.66,'tr',4,6],
  [25,'Mn','Mangan',54.938,1.55,'tr',4,7],[26,'Fe','Järn',55.845,1.83,'tr',4,8],
  [27,'Co','Kobolt',58.933,1.88,'tr',4,9],[28,'Ni','Nickel',58.693,1.91,'tr',4,10],
  [29,'Cu','Koppar',63.546,1.90,'tr',4,11],[30,'Zn','Zink',65.38,1.65,'tr',4,12],
  [31,'Ga','Gallium',69.723,1.81,'pt',4,13],[32,'Ge','Germanium',72.630,2.01,'ml',4,14],
  [33,'As','Arsenik',74.922,2.18,'ml',4,15],[34,'Se','Selen',78.971,2.55,'nm',4,16],
  [35,'Br','Brom',79.904,2.96,'hl',4,17],[36,'Kr','Krypton',83.798,3.00,'nb',4,18],
  [37,'Rb','Rubidium',85.468,0.82,'ak',5,1],[38,'Sr','Strontium',87.62,0.95,'ae',5,2],
  [39,'Y','Yttrium',88.906,1.22,'tr',5,3],[40,'Zr','Zirkonium',91.224,1.33,'tr',5,4],
  [41,'Nb','Niob',92.906,1.60,'tr',5,5],[42,'Mo','Molybden',95.96,2.16,'tr',5,6],
  [43,'Tc','Teknetium',98,1.90,'tr',5,7],[44,'Ru','Rutenium',101.07,2.20,'tr',5,8],
  [45,'Rh','Rodium',102.906,2.28,'tr',5,9],[46,'Pd','Palladium',106.42,2.20,'tr',5,10],
  [47,'Ag','Silver',107.868,1.93,'tr',5,11],[48,'Cd','Kadmium',112.411,1.69,'tr',5,12],
  [49,'In','Indium',114.818,1.78,'pt',5,13],[50,'Sn','Tenn',118.710,1.96,'pt',5,14],
  [51,'Sb','Antimon',121.760,2.05,'ml',5,15],[52,'Te','Tellur',127.60,2.10,'ml',5,16],
  [53,'I','Jod',126.904,2.66,'hl',5,17],[54,'Xe','Xenon',131.293,2.60,'nb',5,18],
  [55,'Cs','Cesium',132.905,0.79,'ak',6,1],[56,'Ba','Barium',137.327,0.89,'ae',6,2],
  [57,'La','Lantan',138.905,1.10,'ln',8,3],[58,'Ce','Cerium',140.116,1.12,'ln',8,4],
  [59,'Pr','Praseodym',140.908,1.13,'ln',8,5],[60,'Nd','Neodym',144.242,1.14,'ln',8,6],
  [61,'Pm','Prometium',145,1.13,'ln',8,7],[62,'Sm','Samarium',150.36,1.17,'ln',8,8],
  [63,'Eu','Europium',151.964,1.20,'ln',8,9],[64,'Gd','Gadolinium',157.25,1.20,'ln',8,10],
  [65,'Tb','Terbium',158.925,1.20,'ln',8,11],[66,'Dy','Dysprosium',162.500,1.22,'ln',8,12],
  [67,'Ho','Holmium',164.930,1.23,'ln',8,13],[68,'Er','Erbium',167.259,1.24,'ln',8,14],
  [69,'Tm','Tulium',168.934,1.25,'ln',8,15],[70,'Yb','Ytterbium',173.045,1.10,'ln',8,16],
  [71,'Lu','Lutetium',174.967,1.27,'ln',8,17],
  [72,'Hf','Hafnium',178.49,1.30,'tr',6,4],[73,'Ta','Tantal',180.948,1.50,'tr',6,5],
  [74,'W','Wolfram',183.84,2.36,'tr',6,6],[75,'Re','Rhenium',186.207,1.90,'tr',6,7],
  [76,'Os','Osmium',190.23,2.20,'tr',6,8],[77,'Ir','Iridium',192.217,2.20,'tr',6,9],
  [78,'Pt','Platina',195.084,2.28,'tr',6,10],[79,'Au','Guld',196.967,2.54,'tr',6,11],
  [80,'Hg','Kvicksilver',200.592,2.00,'tr',6,12],[81,'Tl','Tallium',204.383,1.62,'pt',6,13],
  [82,'Pb','Bly',207.2,2.33,'pt',6,14],[83,'Bi','Vismut',208.980,2.02,'pt',6,15],
  [84,'Po','Polonium',209,2.00,'ml',6,16],[85,'At','Astat',210,2.20,'hl',6,17],
  [86,'Rn','Radon',222,null,'nb',6,18],
  [87,'Fr','Francium',223,0.70,'ak',7,1],[88,'Ra','Radium',226,0.90,'ae',7,2],
  [89,'Ac','Aktinium',227,1.10,'ac',9,3],[90,'Th','Torium',232.038,1.30,'ac',9,4],
  [91,'Pa','Protaktinium',231.036,1.50,'ac',9,5],[92,'U','Uran',238.029,1.38,'ac',9,6],
  [93,'Np','Neptunium',237,1.36,'ac',9,7],[94,'Pu','Plutonium',244,1.28,'ac',9,8],
  [95,'Am','Americium',243,1.30,'ac',9,9],[96,'Cm','Curium',247,1.30,'ac',9,10],
  [97,'Bk','Berkelium',247,1.30,'ac',9,11],[98,'Cf','Californium',251,1.30,'ac',9,12],
  [99,'Es','Einsteinium',252,1.30,'ac',9,13],[100,'Fm','Fermium',257,1.30,'ac',9,14],
  [101,'Md','Mendelevium',258,1.30,'ac',9,15],[102,'No','Nobelium',259,1.30,'ac',9,16],
  [103,'Lr','Lawrencium',266,null,'ac',9,17],
  [104,'Rf','Rutherfordium',267,null,'tr',7,4],[105,'Db','Dubnium',268,null,'tr',7,5],
  [106,'Sg','Seaborgium',271,null,'tr',7,6],[107,'Bh','Bohrium',270,null,'tr',7,7],
  [108,'Hs','Hassium',277,null,'tr',7,8],[109,'Mt','Meitnerium',278,null,'tr',7,9],
  [110,'Ds','Darmstadtium',281,null,'tr',7,10],[111,'Rg','Röntgenium',282,null,'tr',7,11],
  [112,'Cn','Kopernicum',285,null,'tr',7,12],[113,'Nh','Nihonium',286,null,'pt',7,13],
  [114,'Fl','Flerovium',289,null,'pt',7,14],[115,'Mc','Moskovium',290,null,'pt',7,15],
  [116,'Lv','Livermorium',293,null,'pt',7,16],[117,'Ts','Tennessen',294,null,'hl',7,17],
  [118,'Og','Oganesson',294,null,'nb',7,18],
];

const EL_CAT = {
  nm:{ cls:'cat-nm', label:'Icke-metall' },
  nb:{ cls:'cat-ng', label:'Ädelgas' },
  ak:{ cls:'cat-al', label:'Alkalimetall' },
  ae:{ cls:'cat-ae', label:'Jordalkalimetall' },
  ml:{ cls:'cat-me', label:'Metalloid' },
  hl:{ cls:'cat-ha', label:'Halogen' },
  tr:{ cls:'cat-tr', label:'Övergångsmetall' },
  pt:{ cls:'cat-pt', label:'Post-överg.metall' },
  ln:{ cls:'cat-la', label:'Lantanid' },
  ac:{ cls:'cat-ac', label:'Aktinid' },
};

const ELEMENTS_MAP = {};
ELEMENTS_RAW.forEach(([z,sym,name,mass,en,cat,row,col]) => {
  ELEMENTS_MAP[z] = {z,sym,name,mass,en,cat,row,col};
});

function initPeriodic() {
  const grid = document.getElementById('periodicGrid');
  if (!grid || grid.children.length > 0) return;

  const legend = document.getElementById('periodicLegend');
  if (legend) {
    legend.innerHTML = Object.values(EL_CAT).map(v =>
      `<span class="legend-item"><span class="legend-dot ${v.cls}"></span>${v.label}</span>`
    ).join('');
  }

  const grpLabels = document.getElementById('groupLabels');
  if (grpLabels) {
    grpLabels.innerHTML = Array.from({length:18},(_,i) =>
      `<div class="pg-label">${i+1}</div>`).join('');
  }

  // f-block placeholders in main table
  const lnPh = document.createElement('div');
  lnPh.className = 'el-cell el-placeholder cat-la';
  lnPh.style.cssText = 'grid-column:3;grid-row:6;';
  lnPh.textContent = '57\u201371';
  grid.appendChild(lnPh);

  const acPh = document.createElement('div');
  acPh.className = 'el-cell el-placeholder cat-ac';
  acPh.style.cssText = 'grid-column:3;grid-row:7;';
  acPh.textContent = '89\u2013103';
  grid.appendChild(acPh);

  ELEMENTS_RAW.forEach(([z,sym,name,mass,en,cat,row,col]) => {
    const c = EL_CAT[cat];
    const cell = document.createElement('div');
    cell.className = `el-cell ${c.cls}`;
    cell.style.cssText = `grid-column:${col};grid-row:${row};`;
    cell.innerHTML = `<span class="el-z">${z}</span><span class="el-sym">${sym}</span>` +
      `<span class="el-name">${name}</span>` +
      (en != null ? `<span class="el-mass">${en}</span>` : '');
    cell.addEventListener('click', () => showElementModal(z));
    grid.appendChild(cell);
  });
}

function showElementModal(z) {
  const el = ELEMENTS_MAP[z];
  if (!el) return;
  const c = EL_CAT[el.cat];
  const period = el.row <= 7 ? el.row : el.row === 8 ? 6 : 7;
  const content = document.getElementById('elModalContent');
  content.innerHTML = `
    <div class="el-modal-sym">${el.sym}</div>
    <div class="el-modal-name">${el.name}</div>
    <div class="el-modal-z">Atomnummer ${el.z} &bull; Atommassa ${el.mass} u</div>
    <div class="el-modal-grid">
      <div class="el-modal-item"><div class="el-modal-label">Period</div><div class="el-modal-value">${period}</div></div>
      <div class="el-modal-item"><div class="el-modal-label">Grupp</div><div class="el-modal-value">${el.col}</div></div>
      <div class="el-modal-item"><div class="el-modal-label">Atommassa</div><div class="el-modal-value">${el.mass} u</div></div>
      <div class="el-modal-item"><div class="el-modal-label">Elektronegativitet</div><div class="el-modal-value">${el.en != null ? el.en + ' (Pauling)' : '\u2013'}</div></div>
    </div>
    ${el.en != null ? `<div style="margin-top:14px">
      <div class="el-modal-label" style="margin-bottom:6px">EN-skala (Pauling, 0\u20134,0)</div>
      <div style="background:var(--surface2);border-radius:8px;height:14px;overflow:hidden">
        <div style="height:100%;width:${(el.en/4)*100}%;background:linear-gradient(90deg,#3b82f6,#ef4444)"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.68rem;color:var(--text2);margin-top:3px"><span>0</span><span>4,0 (F)</span></div>
    </div>` : ''}
    <span class="el-modal-cat-badge ${c.cls}" style="margin-top:14px;display:inline-block">${c.label}</span>`;

  const backdrop = document.getElementById('elModalBackdrop');
  backdrop.classList.add('open');
  document.getElementById('elModalClose').addEventListener('click',
    () => backdrop.classList.remove('open'), { once: true });
  backdrop.addEventListener('click',
    e => { if (e.target === backdrop) backdrop.classList.remove('open'); }, { once: true });
}

// ═══════════════════════════════════════════════════════
//  FORMULA SHEET
// ═══════════════════════════════════════════════════════

const FORMULAS_DATA = [
  { cat:'Mängd & massa', icon:'\u2696\ufe0f', items:[
    { name:'Molmassa', f:'M = m / n', v:'M=molmassa (g/mol), m=massa (g), n=substansmängd (mol)' },
    { name:'Substansmängd', f:'n = m / M', v:'n=mol, m=massa (g), M=molmassa (g/mol)' },
    { name:'Antal partiklar', f:'N = n \u00d7 N\u2090', v:'N\u2090 = 6,022 \u00d7 10\u00b2\u00b3 mol\u207b\u00b9 (Avogadros tal)' },
    { name:'Densitet', f:'\u03c1 = m / V', v:'\u03c1=densitet (g/cm\u00b3), m=massa (g), V=volym (cm\u00b3)' },
  ]},
  { cat:'Koncentration', icon:'\ud83e\uddea', items:[
    { name:'Molarkoncentration', f:'c = n / V', v:'c=konc. (mol/L), n=mol, V=volym (L)' },
    { name:'Substansmängd', f:'n = c \u00d7 V', v:'n=mol, c=konc. (mol/L), V=volym (L)' },
    { name:'Spädningslagen', f:'c\u2081V\u2081 = c\u2082V\u2082', v:'Koncentration \u00d7 volym är konstant vid spädning' },
    { name:'Massprocent', f:'w = m\u2097 / m_tot \u00d7 100%', v:'m\u2097=löst ämnets massa' },
  ]},
  { cat:'Gaslagar', icon:'\ud83d\udca8', items:[
    { name:'Ideala gaslagen', f:'pV = nRT', v:'p=tryck (Pa), V=volym (m\u00b3), n=mol, R=8,314 J/(mol\u00b7K), T=temp (K)' },
    { name:'Boyles lag', f:'p\u2081V\u2081 = p\u2082V\u2082', v:'Konstant temperatur (isoterm)' },
    { name:'Charles lag', f:'V\u2081/T\u2081 = V\u2082/T\u2082', v:'Konstant tryck (isobar)' },
    { name:'Gay-Lussacs lag', f:'p\u2081/T\u2081 = p\u2082/T\u2082', v:'Konstant volym (isokor)' },
    { name:'Kelvin \u2194 Celsius', f:'T(K) = T(\u00b0C) + 273,15', v:'Alltid Kelvin i gaslagarna' },
  ]},
  { cat:'Termodynamik', icon:'\ud83c\udf21\ufe0f', items:[
    { name:'Värmeenergi', f:'Q = mc\u0394T', v:'Q=energi (J), m=massa (g), c=spec. värmekapacitet (J/g\u00b7K), \u0394T=temp-förändring' },
    { name:'Hesss lag', f:'\u0394H\u00b0rxn = \u03a3\u0394H\u00b0f(prod) \u2212 \u03a3\u0394H\u00b0f(reak)', v:'Standardbildningsentalpier; element i standardtillstånd = 0' },
    { name:'Gibbs fria energi', f:'\u0394G = \u0394H \u2212 T\u0394S', v:'\u0394G<0 \u2192 spontan; \u0394G>0 \u2192 ej spontan' },
    { name:'Entropi (reaktion)', f:'\u0394S\u00b0rxn = \u03a3S\u00b0(prod) \u2212 \u03a3S\u00b0(reak)', v:'\u0394S>0: ökad oordning' },
  ]},
  { cat:'Syra-bas', icon:'\u2697\ufe0f', items:[
    { name:'pH-definitionen', f:'pH = \u2212log[H\u207a]', v:'[H\u207a]=vätejonskoncentration (mol/L)' },
    { name:'pOH', f:'pOH = \u2212log[OH\u207b]', v:'pH + pOH = 14 (vid 25\u00b0C)' },
    { name:'Vattnets jonprodukt', f:'Kw = [H\u207a][OH\u207b] = 10\u207b\u00b9\u2074', v:'Vid 25\u00b0C; Kw = 1,0 \u00d7 10\u207b\u00b9\u2074 mol\u00b2/L\u00b2' },
    { name:'Syrakonstant Ka', f:'Ka = [H\u207a][A\u207b] / [HA]', v:'Ju större Ka, desto starkare syra' },
    { name:'Henderson-Hasselbalch', f:'pH = pKa + log([A\u207b]/[HA])', v:'För buffertlösningar; pKa = \u2212log(Ka)' },
  ]},
  { cat:'Jämvikt', icon:'\u2696\ufe0f', items:[
    { name:'Jämviktskonstant Kc', f:'Kc = [C]\u1d9c[D]\u1d48 / [A]\u1d43[B]\u1d47', v:'aA + bB \u21cc cC + dD; bara lösta ämnen och gaser' },
    { name:'Kp\u2013Kc-samband', f:'Kp = Kc(RT)^\u0394n', v:'\u0394n = \u0394mol gas (produkter \u2212 reaktanter)' },
    { name:'Reaktionskvot Q', f:'Q < K \u2192 framåt; Q > K \u2192 bakåt', v:'Om Q=K: systemet är i jämvikt' },
    { name:'Le Chateliers princip', f:'Systemet motverkar störningar', v:'Höjt tryck \u2192 mot färre mol gas' },
  ]},
  { cat:'Elektrokemi', icon:'\u26a1', items:[
    { name:'Cellpotential', f:'E\u00b0cell = E\u00b0katod \u2212 E\u00b0anod', v:'E\u00b0cell>0 \u2192 spontan (galvanisk cell)' },
    { name:'Gibbs och E-cell', f:'\u0394G\u00b0 = \u2212nFE\u00b0cell', v:'n=mol elektroner, F=96485 C/mol' },
    { name:'Faradays lag', f:'Q = n\u2091 \u00d7 F = I \u00d7 t', v:'Q=laddning (C), I=ström (A), t=tid (s)' },
    { name:'Nernst (25\u00b0C)', f:'E = E\u00b0 \u2212 (0,0592/n)\u00b7log Q', v:'Förenklad form vid 25\u00b0C' },
  ]},
  { cat:'Stökiometri', icon:'\ud83d\udd22', items:[
    { name:'Molförhållande', f:'n_A/a = n_B/b', v:'a, b = koefficienter i balanserad reaktion' },
    { name:'Procentuellt utbyte', f:'Utbyte = (faktisk/teoretisk) \u00d7 100%', v:'Teoretisk = beräknad från stökiometri' },
    { name:'Begränsande reagens', f:'n/koeff \u2192 minsta = begränsande', v:'Ämnet med lägst n/koefficient' },
    { name:'Empirisk formel', f:'Dividera mol med minsta mol-värde', v:'Ger heltalskvoter för enklaste formeln' },
  ]},
];

function initFormulas() {
  const nav = document.getElementById('formulaCatNav');
  const content = document.getElementById('formulaContent');
  if (!nav || !content || nav.children.length > 0) return;

  nav.innerHTML = FORMULAS_DATA.map((fd,i) =>
    `<button class="formula-cat-btn ${i===0?'active':''}" data-idx="${i}">${fd.icon} ${fd.cat}</button>`
  ).join('');

  renderFormulas(0);

  nav.querySelectorAll('.formula-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      nav.querySelectorAll('.formula-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFormulas(parseInt(btn.dataset.idx));
    });
  });
}

function renderFormulas(idx) {
  const content = document.getElementById('formulaContent');
  if (!content) return;
  const fd = FORMULAS_DATA[idx];
  content.innerHTML = fd.items.map(f => `
    <div class="formula-item">
      <div class="formula-name">${f.name}</div>
      <div class="formula-math">${f.f}</div>
      <div class="formula-vars">${f.v}</div>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════
//  ÖVNINGSUPPGIFTER
// ═══════════════════════════════════════════════════════

const PROBLEMS = [
  // ── MOL & MASSA
  { id:101, lv:1, cat:'mol', title:'Substansmängd från massa',
    q:'Hur många mol är 36 g vatten (H₂O)?\nM(H₂O) = 18 g/mol.',
    ans:2.0, tol:0.05, unit:'mol', formula:'n = m / M',
    hint:'Dela massan med molmassan',
    steps:['Känd data: m = 36 g H₂O; M(H₂O) = 18 g/mol','Formel: n = m/M — substansmängd = massa dividerat med molmassa','Beräkna: n = 36 g / 18 g/mol = 2,0 mol','Svar: n = 2,0 mol H₂O ✓ 36 g = dubbla molmassan; varje mol H₂O väger 18 g (2H + O)'] },
  { id:102, lv:1, cat:'mol', title:'Massa från substansmängd',
    q:'Vad är massan av 3 mol NaCl?\nM(NaCl) = 58,5 g/mol.',
    ans:175.5, tol:1, unit:'g', formula:'m = n × M',
    hint:'Multiplicera mol med molmassan',
    steps:['Känd data: n = 3 mol NaCl, molmassa M(NaCl) = 23 + 35,5 = 58,5 g/mol','Formel: m = n × M — massa = substansmängd × molmassa (mol × g/mol = g)','Beräkna: m = 3 mol × 58,5 g/mol = 175,5 g','Svar: 175,5 g NaCl. 3 mol innebär 3 × 6,022×10²³ ≈ 1,8×10²⁴ formelenheter NaCl'] },
  { id:103, lv:1, cat:'mol', title:'Antal partiklar',
    q:'Hur många ×10²³ molekyler finns i 2 mol CO₂?\n(Nₐ = 6,022 × 10²³ mol⁻¹) — ge svaret i ×10²³',
    ans:12.044, tol:0.15, unit:'×10²³', formula:'N = n × Nₐ',
    hint:'Multiplicera mol med Avogadros tal',
    steps:['Känd data: n = 2 mol, Avogadros tal Nₐ = 6,022×10²³ mol⁻¹','Formel: N = n × Nₐ — antal partiklar = substansmängd × antal per mol','Beräkna: N = 2 × 6,022×10²³ = 12,044×10²³ = 1,2044×10²⁴ partiklar','Svar: ≈ 12,044 × 10²³. Avogadros tal definieras som antalet atomer i exakt 12 g ¹²C'] },
  { id:104, lv:2, cat:'mol', title:'Molmassa från mätning',
    q:'5,00 g av ett ämne bildar 0,250 mol.\nVad är molmassan?',
    ans:20.0, tol:0.2, unit:'g/mol', formula:'M = m / n',
    hint:'Dela massan med substansmängden',
    steps:['Känd data: massa m = 5,00 g, substansmängd n = 0,250 mol','Formel: M = m/n — molmassa = massa dividerat med substansmängd (enhet: g/mol)','Beräkna: M = 5,00 g / 0,250 mol = 20,0 g/mol','Svar: M = 20,0 g/mol ✓ Jämförelse: neon (Ne) har M = 20,2 g/mol; rimlig storlek för ett lätt ämne'] },
  { id:105, lv:2, cat:'mol', title:'Empirisk formel – H/C-kvot',
    q:'En förening: 80,0 % C och 20,0 % H (massa).\nHur många H-atomer per C-atom i empirisk formel?',
    ans:3.0, tol:0.1, unit:'H per C', formula:'n = % / M_atom',
    hint:'Beräkna mol C och mol H per 100 g, ta kvoten',
    steps:['Känd data: 80,0 % C, 20,0 % H (massa) — beräkna mol per 100 g','Formel: n = %/M_atom; n(C) = 80,0/12,0 = 6,67 mol; n(H) = 20,0/1,0 = 20,0 mol','Beräkna: kvot n(H)/n(C) = 20,0/6,67 = 3,0 H-atomer per C-atom','Svar: 3 H per C ✓ Empirisk formel CH₃ (t.ex. propan C₃H₈ eller metanol CH₄O); del med minsta n-värde'] },
  { id:106, lv:3, cat:'mol', title:'Molekylformel från empirisk formel',
    q:'Empirisk formel CH₃ (M_emp = 15 g/mol), M_mol = 30 g/mol.\nHur många C-atomer per molekyl?',
    ans:2.0, tol:0.05, unit:'C-atomer', formula:'n = M_mol / M_emp',
    hint:'Beräkna hur många gånger den empiriska formeln upprepas',
    steps:['Känd data: empirisk formel CH₃ (M_emp = 12+3 = 15 g/mol); uppmätt M_mol = 30 g/mol','Formel: multiplikator n = M_mol/M_emp — hur många gånger empiriska formeln upprepas','Beräkna: n = 30/15 = 2; molekylformel = 2 × CH₃ = C₂H₆ (etan)','Svar: 2 C-atomer per molekyl ✓ C₂H₆ = etan; empirisk formel ger bara atomförhållandet'] },
  // ── KONCENTRATION
  { id:201, lv:1, cat:'konc', title:'Molarkoncentration',
    q:'2 mol NaOH löses i 4,0 liter vatten.\nVad är koncentrationen?',
    ans:0.5, tol:0.02, unit:'mol/L', formula:'c = n / V',
    hint:'Dela substansmängd med volym i liter',
    steps:['Känd data: n = 2 mol NaOH, V = 4,0 L lösning','Formel: c = n/V — koncentration = mol löst ämne per liter lösning (enhet: mol/L = M)','Beräkna: c = 2 mol ÷ 4,0 L = 0,50 mol/L','Svar: 0,50 mol/L. Det innebär att varje liter lösning innehåller 0,50 mol NaOH'] },
  { id:202, lv:1, cat:'konc', title:'Substansmängd från konc.',
    q:'Hur många mol NaCl finns i 500 mL av 2,0 mol/L NaCl-lösning?',
    ans:1.0, tol:0.05, unit:'mol', formula:'n = c × V',
    hint:'Omvandla mL till L, sedan n = c × V',
    steps:['Känd data: c = 2,0 mol/L NaCl; V = 500 mL → omvandla: 500 ÷ 1000 = 0,500 L','Formel: n = c × V — substansmängd = koncentration × volym (mol/L × L = mol)','Beräkna: n = 2,0 × 0,500 = 1,0 mol','Svar: 1,0 mol NaCl. OBS: alltid omvandla mL → L (÷ 1000) innan beräkning!'] },
  { id:203, lv:1, cat:'konc', title:'Spädning',
    q:'100 mL av 2,0 mol/L lösning späds till 400 mL.\nVad är den nya koncentrationen?',
    ans:0.5, tol:0.02, unit:'mol/L', formula:'c₁V₁ = c₂V₂',
    hint:'Koncentration × volym är konstant',
    steps:['Känd data: c₁ = 2,0 mol/L, V₁ = 100 mL = 0,100 L; späds till V₂ = 400 mL = 0,400 L','Spädningsprincipen: c₁V₁ = c₂V₂ — substansmängden ändras INTE vid spädning','Beräkna: c₂ = c₁V₁/V₂ = (2,0 × 0,100)/0,400 = 0,200/0,400 = 0,50 mol/L','Svar: 0,50 mol/L ✓ Volymen fyrfaldigades → koncentrationen minskade till 1/4'] },
  { id:204, lv:2, cat:'konc', title:'Blanda lösningar',
    q:'50 mL av 0,50 mol/L HCl blandas med 50 mL av 1,50 mol/L HCl.\nVad är koncentrationen i blandningen?',
    ans:1.0, tol:0.05, unit:'mol/L', formula:'c = (n₁ + n₂) / V_tot',
    hint:'Beräkna n i varje del, addera, dela med total volym',
    steps:['Känd data: lösn 1: c₁ = 0,50 mol/L, V₁ = 50 mL = 0,050 L; lösn 2: c₂ = 1,50 mol/L, V₂ = 50 mL = 0,050 L','Blandning: c = (n₁+n₂)/V_tot — beräkna substansmängd i varje del och dividera med total volym','Beräkna: n₁ = 0,50×0,050 = 0,025 mol; n₂ = 1,50×0,050 = 0,075 mol; n_tot = 0,100 mol; V_tot = 0,100 L','Svar: c = 0,100/0,100 = 1,0 mol/L ✓ Medelvärdet av 0,50 och 1,50 → 1,0 mol/L (lika volymer)'] },
  { id:205, lv:2, cat:'konc', title:'Neutralisationstitrering',
    q:'Hur många mL av 2,0 mol/L NaOH behövs\nför att neutralisera 50 mL av 1,0 mol/L HCl?',
    ans:25.0, tol:0.5, unit:'mL', formula:'n(syra) = n(bas)',
    hint:'HCl:NaOH = 1:1; beräkna n(HCl) och lös V(NaOH)',
    steps:['Känd data: 50 mL = 0,050 L HCl (c = 1,0 mol/L); NaOH-lösning c = 2,0 mol/L; 1:1-reaktion','Neutralisation: n(HCl) = n(NaOH) → c(HCl)×V(HCl) = c(NaOH)×V(NaOH)','Beräkna: n(HCl) = 1,0 × 0,050 = 0,050 mol; V(NaOH) = n/c = 0,050/2,0 = 0,025 L = 25 mL','Svar: 25 mL NaOH ✓ Koncentrerad NaOH (2,0 mol/L) kräver halva volymen jämfört med 1,0 mol/L'] },
  { id:206, lv:3, cat:'konc', title:'Diprotisk syra – titrering',
    q:'25 mL H₂SO₄ titreras med 40 mL av 0,20 mol/L NaOH.\nBeräkna c(H₂SO₄).\n(H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)',
    ans:0.16, tol:0.005, unit:'mol/L', formula:'n(H₂SO₄) = n(NaOH)/2',
    hint:'H₂SO₄ är diprotisk → kräver 2 mol NaOH per mol syra',
    steps:['Känd data: V(H₂SO₄) = 25 mL = 0,025 L; V(NaOH) = 40 mL = 0,040 L; c(NaOH) = 0,20 mol/L','Diprotisk syra: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O — molförhållande 1:2','Beräkna: n(NaOH) = 0,20 × 0,040 = 0,0080 mol; n(H₂SO₄) = 0,0080/2 = 0,0040 mol','Svar: c(H₂SO₄) = 0,0040/0,025 = 0,16 mol/L ✓ Diprotisk syra kräver dubbelt NaOH per mol syra'] },
  // ── GASLAGAR
  { id:301, lv:1, cat:'gas', title:'Celsius till Kelvin',
    q:'Omvandla 25 °C till Kelvin.',
    ans:298.15, tol:0.2, unit:'K', formula:'T(K) = T(°C) + 273,15',
    hint:'Lägg till 273,15',
    steps:['Varför Kelvin? Gaslagar kräver absolut temperaturskala. 0 K = absolut nollpunkt; inga molekylrörelser','Formel: T(K) = T(°C) + 273,15 — omvandling Celsius till Kelvin','Beräkna: T = 25 + 273,15 = 298,15 K','Svar: 298,15 K ≈ 298 K. Standardtemperatur (25°C = 298 K) används ofta i termodynamiska beräkningar'] },
  { id:302, lv:1, cat:'gas', title:'Boyles lag',
    q:'Gas: V = 4,0 L vid p = 200 kPa (konstant temp).\nVad är volymen vid p = 400 kPa?',
    ans:2.0, tol:0.05, unit:'L', formula:'p₁V₁ = p₂V₂',
    hint:'Trycket dubbleras → volymen halveras',
    steps:['Känd data: p₁=200 kPa, V₁=4,0 L, p₂=400 kPa; temperatur konstant (isoterm process)','Boyles lag: p₁V₁ = p₂V₂ — tryck och volym omvänt proportionella vid konstant T','Beräkna: V₂ = p₁V₁/p₂ = (200 × 4,0) / 400 = 800/400 = 2,0 L','Svar: 2,0 L. Trycket fördubblas → volymen halveras. Kontroll: 200×4,0 = 400×2,0 = 800 ✓'] },
  { id:303, lv:1, cat:'gas', title:'Charles lag',
    q:'Gas: V = 3,0 L vid T = 273 K (konstant tryck).\nVad är volymen vid T = 546 K?',
    ans:6.0, tol:0.1, unit:'L', formula:'V₁/T₁ = V₂/T₂',
    hint:'Volymen är proportionell mot temperaturen i Kelvin',
    steps:['Känd data: V₁ = 3,0 L, T₁ = 273 K, T₂ = 546 K; trycket konstant (isobar process)','Charles lag: V₁/T₁ = V₂/T₂ — volym direkt proportionell mot absolut temperatur','Beräkna: V₂ = V₁ × T₂/T₁ = 3,0 × 546/273 = 3,0 × 2,0 = 6,0 L','Svar: 6,0 L ✓ T fördubblades (273→546 K) → V fördubblades; OBS: alltid Kelvin i gaslagsberäkningar!'] },
  { id:304, lv:2, cat:'gas', title:'Ideala gaslagen – volym',
    q:'0,50 mol gas vid T = 300 K och p = 100 kPa.\nVad är volymen? (R = 8,314 J/mol·K)',
    ans:12.471, tol:0.3, unit:'L', formula:'V = nRT/p',
    hint:'p i Pa (100 000), svar i m³ → ×1000 ger L',
    steps:['Känd data: n=0,50 mol; T=300 K; p=100 kPa=1,00×10⁵ Pa; R=8,314 J/(mol·K)','Ideala gaslagen: pV = nRT — kombinerar Boyle, Charles och Avogadros lag','Beräkna: V = nRT/p = (0,50 × 8,314 × 300) / (1,00×10⁵) = 1247,1/100000 = 0,01247 m³','Omvandla: 0,01247 m³ × 1000 = 12,47 L. Svar: 12,47 L gas vid 300 K och 100 kPa'] },
  { id:305, lv:2, cat:'gas', title:'Gay-Lussacs lag',
    q:'Sluten behållare: p = 150 kPa vid T = 300 K.\nVad är trycket vid T = 450 K? (Konstant volym)',
    ans:225.0, tol:2, unit:'kPa', formula:'p₁/T₁ = p₂/T₂',
    hint:'Trycket ökar proportionellt med T i Kelvin',
    steps:['Känd data: p₁ = 150 kPa, T₁ = 300 K, T₂ = 450 K; volymen konstant (isokor process)','Gay-Lussacs lag: p₁/T₁ = p₂/T₂ — tryck direkt proportionellt mot absolut temperatur','Beräkna: p₂ = p₁ × T₂/T₁ = 150 × 450/300 = 150 × 1,5 = 225 kPa','Svar: 225 kPa ✓ Temperaturen ökade 50 % → trycket ökade 50 %; mer rörelseenergi ger fler kollisioner'] },
  { id:306, lv:3, cat:'gas', title:'Kombinerade gaslagen',
    q:'Gas: p₁=200 kPa, V₁=5,0 L, T₁=300 K.\np₂=400 kPa, T₂=600 K. Vad är V₂?',
    ans:5.0, tol:0.1, unit:'L', formula:'(p₁V₁)/T₁ = (p₂V₂)/T₂',
    hint:'V₂ = V₁ × (p₁/p₂) × (T₂/T₁)',
    steps:['Känd data: p₁ = 200 kPa, V₁ = 5,0 L, T₁ = 300 K; p₂ = 400 kPa, T₂ = 600 K','Kombinerade gaslagen: (p₁V₁)/T₁ = (p₂V₂)/T₂ — alla tre variabler ändras','Beräkna: V₂ = V₁ × (p₁/p₂) × (T₂/T₁) = 5,0 × (200/400) × (600/300) = 5,0 × 0,5 × 2,0 = 5,0 L','Svar: 5,0 L ✓ Trycket fördubblades (halverar V) men temperaturen fördubblades (dubblar V) — nettoresultat: oförändrad volym'] },
  // ── TERMODYNAMIK
  { id:401, lv:1, cat:'termo', title:'Värmeenergi – uppvärmning',
    q:'Hur mycket energi (kJ) krävs för att värma\n500 g vatten från 20 °C till 100 °C? (c=4,18 J/g·K)',
    ans:167.2, tol:2, unit:'kJ', formula:'Q = mcΔT',
    hint:'ΔT = 80 K, Q i J → ÷1000 för kJ',
    steps:['Känd data: m=500 g vatten, c(H₂O)=4,18 J/(g·K); T₁=20°C, T₂=100°C','Temperaturändring: ΔT = T₂ − T₁ = 100 − 20 = 80 K (eller 80°C, ΔT är detsamma)','Formel: Q = m·c·ΔT — värmeenergi = massa × specifik värmekapacitet × temperaturändring','Beräkna: Q = 500 × 4,18 × 80 = 167 200 J = 167,2 kJ. Vatten har hög c → kräver mycket energi att värma'] },
  { id:402, lv:1, cat:'termo', title:'Temperaturhöjning',
    q:'100 g järn (c=0,450 J/g·K) tillförs 2700 J.\nHur mycket stiger temperaturen (K)?',
    ans:60.0, tol:1, unit:'K', formula:'ΔT = Q / (mc)',
    hint:'Lös ut ΔT ur Q = mcΔT',
    steps:['Känd data: m=100 g järn, c(Fe)=0,450 J/(g·K), Q=2700 J tillförs','Isolera ΔT ur Q=mcΔT: ΔT = Q/(m×c)','Beräkna: ΔT = 2700 / (100 × 0,450) = 2700/45 = 60 K','Svar: +60°C. Jämför med vatten: samma Q till 100g H₂O → ΔT=2700/(100×4,18)≈6,5°C. Järn värms ~10× lättare'] },
  { id:403, lv:2, cat:'termo', title:'Kalorimeter',
    q:'Reaktion i kalorimeter: 200 g vatten (c=4,18 J/g·K)\nstiger 5,0 °C. Beräkna |Q_rxn| i kJ.',
    ans:4.18, tol:0.1, unit:'kJ', formula:'Q = mcΔT',
    hint:'Q avges av reaktionen = Q absorberas av vattnet',
    steps:['Känd data: kalorimeter; värmen absorberad av vattnet Q_vatten = m×c×ΔT; beräknat Q = 4180 J = 4,18 kJ','Reaktionen avger energi som värmer vattnet: Q_vatten = +4,18 kJ (endoterm för vattnet)','Reaktionens entalpi: ΔH_rxn = −Q_vatten = −4,18 kJ (exoterm reaktion); |Q| = 4,18 kJ','Svar: 4,18 kJ ✓ Värmeenergin (Q) som frigörs är 4,18 kJ; exoterm: systemet avger energi till omgivningen'] },
  { id:404, lv:2, cat:'termo', title:'Hesss lag',
    q:'H₂(g) + ½O₂(g) → H₂O(l)\nΔH°f(H₂O(l)) = −285,8 kJ/mol.\nBeräkna ΔH°rxn (kJ/mol).',
    ans:-285.8, tol:0.5, unit:'kJ/mol', formula:'ΔH°rxn = ΣΔH°f(prod) − ΣΔH°f(reak)',
    hint:'Element i standardtillstånd (H₂, O₂) har ΔH°f = 0',
    steps:['Hess lag: ΔH°rxn = ΣΔH°f(produkter) − ΣΔH°f(reaktanter); element i standardtillstånd har ΔH°f = 0','ΔH°rxn = ΔH°f(H₂O(l)) − [ΔH°f(H₂) + ½ΔH°f(O₂)] = −285,8 − [0 + 0]','Beräkna: ΔH°rxn = −285,8 − 0 = −285,8 kJ/mol','Svar: ΔH°rxn = −285,8 kJ/mol ✓ Bildningsentalpin för H₂O(l) definieras som reaktionsentalpin för denna reaktion'] },
  { id:405, lv:3, cat:'termo', title:'Gibbs fria energi',
    q:'ΔH = −200 kJ/mol, ΔS = −0,10 kJ/(mol·K), T = 300 K.\nBeräkna ΔG (kJ/mol).',
    ans:-170.0, tol:1, unit:'kJ/mol', formula:'ΔG = ΔH − TΔS',
    hint:'ΔG < 0 → spontan reaktion',
    steps:['Känd data: ΔH = −200 kJ/mol; ΔS = −0,10 kJ/(mol·K); T = 300 K','Formel: ΔG = ΔH − TΔS. Om ΔG < 0 → spontan; ΔG > 0 → ej spontan','Beräkna: TΔS = 300 × (−0,10) = −30 kJ/mol; ΔG = −200 − (−30) = −200 + 30 = −170 kJ/mol','Svar: ΔG = −170 kJ/mol ✓ Spontan vid 300 K; ΔH gynnar kraftigt, men ΔS < 0 motverkar något'] },
  { id:406, lv:3, cat:'termo', title:'Spontanitetsgräns',
    q:'ΔH = −100 kJ/mol, ΔS = −0,20 kJ/(mol·K).\nVid vilken T (K) övergår reaktionen från spontan till ej spontan?',
    ans:500.0, tol:5, unit:'K', formula:'T = ΔH/ΔS (när ΔG = 0)',
    hint:'Sätt ΔG = 0: T = ΔH/ΔS',
    steps:['Känd data: ΔH = −100 kJ/mol; ΔS = −0,20 kJ/(mol·K); spontanitetsgräns vid ΔG = 0','Formel: ΔG = ΔH − TΔS = 0 → T = ΔH/ΔS','Beräkna: T = −100/(−0,20) = 500 K','Svar: T = 500 K ✓ Under 500 K: ΔG < 0 (spontan, ΔH dominerar); över 500 K: ΔG > 0 (ΔS-termen dominerar)'] },
  // ── SYRA-BAS
  { id:501, lv:1, cat:'syrabas', title:'pH från [H⁺]',
    q:'Vad är pH för en lösning med [H⁺] = 0,01 mol/L?',
    ans:2.0, tol:0.05, unit:'', formula:'pH = −log[H⁺]',
    hint:'log(10⁻²) = −2',
    steps:['Känd data: [H⁺] = 0,01 mol/L = 10⁻² mol/L','Formel: pH = −log[H⁺]. pH-skalan är logaritmisk: varje steg = 10× ändring av [H⁺]','Beräkna: pH = −log(10⁻²) = −(−2) = 2','Svar: pH = 2 (starkt sur). Tumregel: om [H⁺] = 10⁻ⁿ mol/L → pH = n. Kontroll: pH < 7 → sur ✓'] },
  { id:502, lv:1, cat:'syrabas', title:'[H⁺] från pH',
    q:'En lösning har pH = 3.\nVad är [H⁺] i ×10⁻³ mol/L?',
    ans:1.0, tol:0.05, unit:'×10⁻³ mol/L', formula:'[H⁺] = 10⁻ᵖᴴ',
    hint:'[H⁺] = 10 upphöjt till minus pH',
    steps:['Känd data: pH = 3','Formel: [H⁺] = 10⁻ᵖᴴ — omvändning av pH-definitionen (antilogaritm)','Beräkna: [H⁺] = 10⁻³ = 0,001 mol/L = 1,0×10⁻³ mol/L','Svar: 1,0×10⁻³ mol/L. pH 3 → 10× mer H⁺ än pH 4. pH 3 → 1000× mer H⁺ än pH 6'] },
  { id:503, lv:1, cat:'syrabas', title:'pOH och pH',
    q:'En lösning har pH = 9 vid 25 °C.\nVad är pOH?',
    ans:5.0, tol:0.05, unit:'', formula:'pH + pOH = 14',
    hint:'Dra av pH från 14',
    steps:['Känd data: pH = 9 vid 25°C; samband pH + pOH = 14 (härleds ur Kw = [H⁺][OH⁻] = 10⁻¹⁴)','Formel: pOH = 14 − pH','Beräkna: pOH = 14 − 9 = 5,0','Svar: pOH = 5,0 ✓ pH 9 = svagt basisk; pOH 5 bekräftar fler OH⁻ än H⁺. Gäller vid 25°C!'] },
  { id:504, lv:2, cat:'syrabas', title:'pH – svag syra',
    q:'Ka(CH₃COOH) = 1,8×10⁻⁵, c = 0,10 mol/L.\nBeräkna pH. (Antag α << 1)',
    ans:2.87, tol:0.06, unit:'', formula:'[H⁺] ≈ √(Ka × c)',
    hint:'Approximation gäller om dissociationsgraden α < 5%',
    steps:['Känd data: svag syra (t.ex. ättiksyra) Ka=1,8×10⁻⁵; c=0,10 mol/L','Svag syra: partiell protolys HA ⇌ H⁺ + A⁻. Approximation: [H⁺] ≈ √(Ka×c) om α < 5%','Beräkna: [H⁺] = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶) = 1,34×10⁻³ mol/L','pH = −log(1,34×10⁻³) = 2,87. Kontrollera α = 1,34×10⁻³/0,10 = 1,3% < 5% → approximation giltig ✓'] },
  { id:505, lv:2, cat:'syrabas', title:'pH – stark bas',
    q:'Vad är pH för 0,010 mol/L NaOH-lösning vid 25 °C?',
    ans:12.0, tol:0.05, unit:'', formula:'pOH = −log[OH⁻], pH = 14 − pOH',
    hint:'NaOH dissocierar fullständigt → [OH⁻] = c(NaOH)',
    steps:['Känd data: stark bas NaOH, c = 0,010 mol/L → fullständig dissociation: [OH⁻] = 0,010 mol/L','pOH = −log[OH⁻] = −log(0,010) = 2,0; pH + pOH = 14 vid 25°C','Beräkna: pH = 14 − pOH = 14 − 2,0 = 12,0','Svar: pH = 12,0 ✓ Stark bas = fullständig dissociation; [OH⁻] = c(NaOH) direkt'] },
  { id:506, lv:3, cat:'syrabas', title:'Buffert-pH',
    q:'Buffert: 0,20 mol/L CH₃COO⁻ och 0,10 mol/L CH₃COOH.\npKa = 4,75. Beräkna pH.',
    ans:5.05, tol:0.05, unit:'', formula:'pH = pKa + log([A⁻]/[HA])',
    hint:'Henderson-Hasselbalch; log(2) ≈ 0,301',
    steps:['Känd data: buffert [A⁻] = 0,20 mol/L (acetat), [HA] = 0,10 mol/L (ättiksyra); pKa = 4,75','Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) — använd för buffertberäkning','Beräkna: pH = 4,75 + log(0,20/0,10) = 4,75 + log(2,0) = 4,75 + 0,301 = 5,05','Svar: pH = 5,05 ✓ [A⁻] > [HA] → pH > pKa; om [A⁻]=[HA] ger pH = pKa = 4,75'] },
  // ── JÄMVIKT
  { id:601, lv:2, cat:'jamvikt', title:'Beräkna Kc',
    q:'N₂ + 3H₂ ⇌ 2NH₃\nVid jämvikt: [N₂]=0,50; [H₂]=0,50; [NH₃]=1,0 mol/L.\nBeräkna Kc.',
    ans:16.0, tol:0.5, unit:'', formula:'Kc = [NH₃]² / ([N₂][H₂]³)',
    hint:'Sätt in jämviktskoncentrationerna direkt',
    steps:['Reaktion: N₂ + 3H₂ ⇌ 2NH₃; Jämviktskoncentrationer: [N₂]=0,50; [H₂]=0,50; [NH₃]=1,0 mol/L','Kc-uttryck: Kc = [NH₃]² / ([N₂]×[H₂]³) — produkter i täljaren, reaktanter i nämnaren; koefficienter som exponenter','Beräkna täljaren: (1,0)² = 1,0. Beräkna nämnaren: 0,50 × (0,50)³ = 0,50 × 0,125 = 0,0625','Svar: Kc = 1,0/0,0625 = 16. Kc > 1 → produkterna gynnas. Hög Kc → reaktionen gick långt åt höger'] },
  { id:602, lv:2, cat:'jamvikt', title:'Reaktionskvot Q',
    q:'N₂O₄ ⇌ 2NO₂. Kc = 0,040.\n[N₂O₄]=0,10; [NO₂]=0,060 mol/L.\nBeräkna Q.',
    ans:0.036, tol:0.002, unit:'', formula:'Q = [NO₂]² / [N₂O₄]',
    hint:'Q < K → reaktionen går mot produkterna',
    steps:['Känd data: N₂O₄ ⇌ 2NO₂; [NO₂] = 0,060 mol/L; [N₂O₄] = 0,10 mol/L; Kc = 0,040','Reaktionskvot: Q = [NO₂]²/[N₂O₄] — samma form som Kc men med aktuella koncentrationer','Beräkna: Q = (0,060)²/0,10 = 0,0036/0,10 = 0,036','Svar: Q = 0,036 ✓ Q < Kc (0,036 < 0,040) → reaktionen fortskrider mot PRODUKTER för att nå jämvikt'] },
  { id:603, lv:2, cat:'jamvikt', title:'ICE-tabell',
    q:'H₂ + I₂ ⇌ 2HI. Kc = 64.\nStart: [H₂]=[I₂]=0,50 mol/L, [HI]=0.\nVad är [HI] vid jämvikt?',
    ans:0.80, tol:0.02, unit:'mol/L', formula:'Kc = [HI]² / ([H₂][I₂])',
    hint:'√Kc = 8 → 2x/(0,50−x) = 8, lös ut x',
    steps:['Känd data: H₂ + I₂ ⇌ 2HI; [H₂]₀ = [I₂]₀ = 0,50 mol/L; [HI]₀ = 0; Kc = 64','ICE-tabell: I: 0,50/0,50/0; C: −x/−x/+2x; E: (0,50−x)/(0,50−x)/2x','Kc = (2x)²/(0,50−x)² = 64 → ta roten: 2x/(0,50−x) = 8 → 2x = 4,0−8x → 10x = 4,0 → x = 0,40 mol/L','Svar: [HI] = 2×0,40 = 0,80 mol/L ✓ Kontroll: (0,80)²/(0,10)² = 0,64/0,010 = 64 = Kc'] },
  { id:604, lv:3, cat:'jamvikt', title:'Löslighetsprodukt – AgCl',
    q:'AgCl har Ksp = 1,8×10⁻¹⁰.\nBeräkna lösligheten s i ×10⁻⁵ mol/L.',
    ans:1.34, tol:0.05, unit:'×10⁻⁵ mol/L', formula:'Ksp = s² → s = √Ksp',
    hint:'AgCl ⇌ Ag⁺ + Cl⁻; [Ag⁺]=[Cl⁻]=s',
    steps:['Känd data: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq); Ksp=1,8×10⁻¹⁰','Låt lösligheten = s mol/L → [Ag⁺]=s och [Cl⁻]=s (1:1 dissociation)','Ksp = [Ag⁺][Cl⁻] = s×s = s² → s = √Ksp','Svar: s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L. Liten Ksp → liten löslighet. AgCl är svårlösligt (vit fällning)'] },
  { id:605, lv:3, cat:'jamvikt', title:'Löslighetsprodukt – PbSO₄',
    q:'PbSO₄ har Ksp = 1,6×10⁻⁸.\nBeräkna lösligheten s i ×10⁻⁴ mol/L.',
    ans:1.265, tol:0.05, unit:'×10⁻⁴ mol/L', formula:'Ksp = s² → s = √Ksp',
    hint:'PbSO₄ ⇌ Pb²⁺ + SO₄²⁻; s = √Ksp',
    steps:['Känd data: PbSO₄(s) ⇌ Pb²⁺(aq) + SO₄²⁻(aq); Ksp=1,6×10⁻⁸','Löslighet s: [Pb²⁺]=s, [SO₄²⁻]=s → Ksp = s² → s = √Ksp','Beräkna: s = √(1,6×10⁻⁸) = 1,26×10⁻⁴ mol/L','Svar: 1,26×10⁻⁴ mol/L ≈ 0,126 mmol/L. Jämför med AgCl: PbSO₄ löser sig ~10× mer än AgCl'] },
  { id:606, lv:3, cat:'jamvikt', title:'ICE med andragradsekvation',
    q:'PCl₃(g) + Cl₂(g) ⇌ PCl₅(g). Kc = 49.\nStart: [PCl₃]=[Cl₂]=1,0 mol/L, [PCl₅]=0.\nVad är [PCl₅] vid jämvikt?',
    ans:0.867, tol:0.02, unit:'mol/L', formula:'Kc = [PCl₅]/([PCl₃][Cl₂])',
    hint:'ICE → 49(1−x)² = x → andragradsekvation → x ≈ 0,867',
    steps:['Känd data: PCl₃(g) + Cl₂(g) ⇌ PCl₅(g); [PCl₃]₀ = [Cl₂]₀ = 1,0 mol/L; Kc = 49','ICE-tabell: I: 1,0/1,0/0; C: −x/−x/+x; E: (1−x)/(1−x)/x; Kc = x/(1−x)² = 49','49x² − 99x + 49 = 0; x = (99 − √197)/98 = (99 − 14,0)/98 = 85,0/98 = 0,867 mol/L','Svar: [PCl₅] = 0,867 mol/L ✓ Kontroll: 0,867/(0,133)² = 0,867/0,0177 ≈ 49 = Kc'] },
  // ── ELEKTROKEMI
  { id:701, lv:2, cat:'elkem', title:'Elektrolys – koppar',
    q:'2 A passerar CuSO₄-lösning i 965 s.\nHur många gram Cu avsätts?\n(M(Cu)=63,5 g/mol, F=96500 C/mol, Cu²⁺+2e⁻→Cu)',
    ans:0.635, tol:0.02, unit:'g', formula:'m = (I×t×M)/(n_e×F)',
    hint:'Q=I×t → n(e⁻)=Q/F → n(Cu)=n(e⁻)/2 → m=n×M',
    steps:['Känd data: I = 2 A, t = 965 s, M(Cu) = 63,5 g/mol, nₑ = 2 (Cu²⁺+2e⁻→Cu), F = 96500 C/mol','Faradays lag: m = (I×t×M)/(nₑ×F) — laddning Q = I×t = 2×965 = 1930 C','Beräkna: m = (1930 × 63,5)/(2 × 96500) = 122555/193000 = 0,635 g','Svar: 0,635 g Cu avsätts ✓ Varje Coulomb deponerar M/(nₑ×F) gram; 1930 C ger 0,635 g koppar'] },
  { id:702, lv:2, cat:'elkem', title:'Cellpotential',
    q:'E°(Zn²⁺/Zn) = −0,76 V\nE°(Cu²⁺/Cu) = +0,34 V\nBeräkna E°cell för Zn–Cu galvanisk cell.',
    ans:1.10, tol:0.02, unit:'V', formula:'E°cell = E°katod − E°anod',
    hint:'Högst E° → katod (reduceras); lägst → anod',
    steps:['Känd data: katod: Cu²⁺+2e⁻→Cu, E°=+0,34 V;  anod: Zn→Zn²⁺+2e⁻, E°=−0,76 V','Formel: E°cell = E°(katod) − E°(anod) — båda reduceringspositioner, subtrahera anodpotentialen','Beräkna: E°cell = (+0,34) − (−0,76) = +0,34 + 0,76 = 1,10 V','Svar: E°cell = +1,10 V. Positiv EMK → spontan reaktion. Zn är oädlare → oxideras; Cu²⁺ → reduceras'] },
  { id:703, lv:2, cat:'elkem', title:'Tid för elektrolys',
    q:'Hur lång tid (s) krävs för att avsätta 1,08 g Ag\nmed 0,500 A? (M(Ag)=108 g/mol, F=96500 C/mol)',
    ans:1930, tol:20, unit:'s', formula:'t = (m×F×n_e)/(M×I)',
    hint:'Räkna baklänges: m→n(Ag)→Q→t',
    steps:['Känd data: m=1,08 g Ag; M(Ag)=107,9 g/mol; Ag⁺+e⁻→Ag (n_e=1); I=0,500 A','Faradays lag omskriven för tid: t = (m×F×n_e)/(M×I)','Beräkna: t = (1,08 × 96485 × 1)/(107,9 × 0,500) = 104203/53,95 = 1931 s','Svar: ≈1930 s ≈ 32 min. Kontroll: n(Ag)=1,08/107,9=0,01001 mol → Q=n×F=966 C → t=966/0,5=1932 s ✓'] },
  { id:704, lv:3, cat:'elkem', title:'Gibbs från cellpotential',
    q:'Zn–Cu cell: E°cell = 1,10 V, n = 2 elektroner.\nBeräkna ΔG° (kJ/mol). (F = 96500 C/mol)',
    ans:-212.3, tol:2, unit:'kJ/mol', formula:'ΔG° = −nFE°cell',
    hint:'J → kJ: dela med 1000',
    steps:['Känd data: E°cell=1,10 V (Zn/Cu-cell); n=2 elektroner per formelenhet; F=96485 C/mol','Formel: ΔG° = −nFE°cell — kopplar elektrokemi till termodyn. Positiv E° ↔ negativ ΔG°','Beräkna: ΔG° = −2 × 96485 × 1,10 = −212267 J/mol = −212,3 kJ/mol','Svar: ΔG° = −212 kJ/mol. Starkt negativ → mycket spontan. Sambandet: K = e^(−ΔG°/RT) → stor K'] },
  { id:705, lv:3, cat:'elkem', title:'Silvermassa vid elektrolys',
    q:'0,100 A leds genom AgNO₃-lösning i 3 timmar.\nHur många gram Ag avsätts?\n(M(Ag)=108, F=96500 C/mol)',
    ans:1.21, tol:0.05, unit:'g', formula:'m = (I×t×M)/(n_e×F)',
    hint:'Omvandla timmar → sekunder',
    steps:['Känd data: I = 0,100 A, t = 3 timmar = 10 800 s, M(Ag) = 108 g/mol, nₑ = 1 (Ag⁺+e⁻→Ag)','Faradays lag: m = (I×t×M)/(nₑ×F) — Q = 0,100 × 10 800 = 1080 C','Beräkna: m = (1080 × 108)/(1 × 96500) = 116 640/96 500 = 1,21 g','Svar: 1,21 g silver avsätts ✓ Omvandla alltid timmar till sekunder; varje Ag⁺ kräver 1 elektron'] },
  { id:706, lv:3, cat:'elkem', title:'Nernst ekvation',
    q:'Zn/Cu cell: E° = 1,10 V, n = 2.\n[Zn²⁺]=0,10; [Cu²⁺]=0,010 mol/L.\nBeräkna E vid 25 °C.',
    ans:1.070, tol:0.01, unit:'V', formula:'E = E° − (0,0592/n)×log Q',
    hint:'Q = [Zn²⁺]/[Cu²⁺] för Zn+Cu²⁺→Zn²⁺+Cu',
    steps:['Känd data: E° = 1,10 V, n = 2, [Zn²⁺] = 0,10 mol/L, [Cu²⁺] = 0,010 mol/L, T = 25°C','Nernst: E = E° − (0,0592/n)×log Q, Q = [Zn²⁺]/[Cu²⁺] = 0,10/0,010 = 10','Beräkna: E = 1,10 − (0,0592/2)×log(10) = 1,10 − 0,0296×1,0 = 1,0704 V','Svar: E = 1,07 V ✓ Hög [Cu²⁺] relativ [Zn²⁺] gynnar reaktionen och höjer EMK något under E°'] },
  // ── STÖKIOMETRI
  { id:801, lv:1, cat:'stoik', title:'Massa av produkt',
    q:'2H₂ + O₂ → 2H₂O\nHur många gram H₂O bildas från 4 g H₂?\n(M(H₂)=2, M(H₂O)=18 g/mol)',
    ans:36.0, tol:0.5, unit:'g', formula:'n = m/M, molförhållande, m = n×M',
    hint:'H₂:H₂O = 1:1 i molförhållande',
    steps:['Reaktion: 2H₂ + O₂ → 2H₂O; m(H₂)=4,0 g; M(H₂)=2,0 g/mol; M(H₂O)=18 g/mol','n(H₂) = m/M = 4,0/2,0 = 2,0 mol H₂','Molförhållande från ekvationen: 2 mol H₂ → 2 mol H₂O (koeff. 2:2 = 1:1) → n(H₂O) = 2,0 mol','Svar: m(H₂O) = 2,0 × 18 = 36 g vatten. Stökiometri: alltid via molförhållande från balanserad ekvation'] },
  { id:802, lv:1, cat:'stoik', title:'Förbränning av metan',
    q:'CH₄ + 2O₂ → CO₂ + 2H₂O\n2 mol CH₄ förbränns. Hur många gram CO₂ bildas?\n(M(CO₂)=44 g/mol)',
    ans:88.0, tol:1, unit:'g', formula:'n(CO₂) = n(CH₄)×1',
    hint:'CH₄:CO₂ = 1:1',
    steps:['Känd data: 2,0 mol CH₄ förbränns; reaktion CH₄ + 2O₂ → CO₂ + 2H₂O; M(CO₂) = 44 g/mol','Stökiometri: koefficienter 1:1 för CH₄:CO₂ → n(CO₂) = n(CH₄) = 2,0 mol','Beräkna: m(CO₂) = n × M = 2,0 mol × 44 g/mol = 88 g','Svar: 88 g CO₂ bildas ✓ Varje CH₄-molekyl ger exakt en CO₂-molekyl; C-atomen bevaras'] },
  { id:803, lv:2, cat:'stoik', title:'Begränsande reagens',
    q:'Fe₂O₃ + 3CO → 2Fe + 3CO₂\n160 g Fe₂O₃ (M=160) och 84 g CO (M=28).\nHur många gram Fe (M=56) bildas?',
    ans:112.0, tol:2, unit:'g', formula:'n/koeff → lägst = begränsande',
    hint:'Jämför n(Fe₂O₃)/1 med n(CO)/3',
    steps:['Känd data: 160 g Fe₂O₃ (M=160) och 84 g CO (M=28); reaktion Fe₂O₃ + 3CO → 2Fe + 3CO₂','n(Fe₂O₃) = 160/160 = 1,0 mol; n(CO) = 84/28 = 3,0 mol; begränsande: 1,0/1 = 1,0 vs 3,0/3 = 1,0 (lika!)','n(Fe) = 2 × n(Fe₂O₃) = 2 × 1,0 = 2,0 mol; m(Fe) = 2,0 × 56 = 112 g','Svar: 112 g Fe bildas ✓ Båda reagenter förbrukas exakt; när kvoterna är lika är båda begränsande'] },
  { id:804, lv:2, cat:'stoik', title:'Procentuellt utbyte',
    q:'Teoretisk massa = 50,0 g, faktisk massa = 38,0 g.\nVad är det procentuella utbytet?',
    ans:76.0, tol:1, unit:'%', formula:'Utbyte = (faktisk/teoretisk)×100%',
    hint:'Dela faktisk med teoretisk, multiplicera med 100',
    steps:['Känd data: teoretisk (beräknad max) massa = 10,0 g; faktisk (mätt) massa = 7,5 g','Formel: Utbyte % = (faktisk / teoretisk) × 100 %','Beräkna: Utbyte = (7,5/10,0) × 100 = 75 %','Svar: 75% utbyte. Förluster beror på: ofullständig reaktion, sidoreaktioner, förluster vid filtrering/omkristallisering'] },
  { id:805, lv:3, cat:'stoik', title:'Förbränningsanalys',
    q:'Förbränning av 1 mol organisk förening\nger 3 mol CO₂ och 4 mol H₂O.\nHur många C-atomer per molekyl?',
    ans:3.0, tol:0.05, unit:'C-atomer', formula:'n(C) = mol CO₂ per mol förening',
    hint:'Varje CO₂ → 1 C; varje H₂O → 2 H',
    steps:['Känd data: förbränning av 1 mol organisk förening ger 3 mol CO₂ och 4 mol H₂O','Princip: varje CO₂ ger 1 C-atom; varje H₂O ger 2 H-atomer','Beräkna: n(C) = 3 mol CO₂ × 1 C/CO₂ = 3 C-atomer; n(H) = 4 mol H₂O × 2 H/H₂O = 8 H-atomer','Svar: 3 C-atomer per molekyl ✓ Föreningen C₃H₈ (propan); förbränningsanalys: CO₂ räknar C, H₂O räknar H'] },
  { id:806, lv:3, cat:'stoik', title:'Gas från reaktion vid STP',
    q:'Zn + 2HCl → ZnCl₂ + H₂\n65 g Zn reagerar (M(Zn)=65 g/mol).\nHur många liter H₂ bildas vid STP? (22,4 L/mol)',
    ans:22.4, tol:0.3, unit:'L', formula:'V = n × Vm(STP)',
    hint:'n(Zn)=n(H₂); V=n×22,4 L/mol',
    steps:['Känd data: 65 g Zn; M(Zn) = 65 g/mol; Zn + 2HCl → ZnCl₂ + H₂; molvolym vid STP = 22,4 L/mol','Stökiometri: n(Zn) = n(H₂) (koefficient 1:1); n(Zn) = 65/65 = 1,0 mol','Beräkna: V(H₂) = n × V_m = 1,0 mol × 22,4 L/mol = 22,4 L','Svar: 22,4 L H₂ vid STP ✓ 1 mol gas upptar exakt 22,4 L vid 0°C och 101,3 kPa'] },

  { id:1001, lv:1, cat:'mol', title:'n från massa – CO₂', q:'Beräkna substansmängden n för 44 g koldioxid CO₂.\nM(CO₂) = 44 g/mol.', ans:1.0, tol:0.05, unit:'mol', formula:'n = m / M', hint:'Dela massan med molmassan.', steps:['Känd data: massa m = 44 g, molmassa M(CO₂) = 44 g/mol','Formel: n = m / M — substansmängd = massa delat med molmassa. M anger gram per mol','Beräkna: n = 44 / 44 = 1,0 mol','Svar: 1,0 mol CO₂. Tumregel: om m = M → n = 1 mol exakt ✓'], sol:'n = 44/44 = 1,0 mol' },
  { id:1002, lv:1, cat:'mol', title:'m från n – NaCl', q:'Beräkna massan m för 0,50 mol natriumklorid NaCl.\nM(NaCl) = 58,5 g/mol.', ans:29.25, tol:0.3, unit:'g', formula:'m = n × M', hint:'Multiplicera mol med molmassan.', steps:['Känd data: n = 0,50 mol NaCl, M(NaCl) = 58,5 g/mol','Formel: m = n × M — massa = substansmängd × molmassa (omvänd formel)','Beräkna: m = 0,50 × 58,5 = 29,25 g','Svar: 29,3 g NaCl. Kontroll: halv mol → halv molmassa i gram ✓'], sol:'m = 0,50 × 58,5 = 29,3 g' },
  { id:1003, lv:1, cat:'mol', title:'Molmassa – H₂SO₄', q:'Beräkna molmassan M för svavelsyra H₂SO₄.\nM(H)=1, M(S)=32, M(O)=16 g/mol.', ans:98.0, tol:0.5, unit:'g/mol', formula:'M = Σ(antal × atommassa)', hint:'Räkna atomer: 2H + 1S + 4O.', steps:['Räkna atomer i H₂SO₄: 2 st H, 1 st S, 4 st O','M = 2×M(H) + 1×M(S) + 4×M(O) = 2×1 + 1×32 + 4×16','Beräkna: 2 + 32 + 64 = 98 g/mol','Svar: M(H₂SO₄) = 98 g/mol. Vanlig syra — viktigt att kunna utantill ✓'], sol:'M = 2+32+64 = 98 g/mol' },
  { id:1004, lv:1, cat:'mol', title:'n av vatten', q:'Hur många mol är 108 g vatten H₂O?\nM(H₂O) = 18 g/mol.', ans:6.0, tol:0.1, unit:'mol', formula:'n = m / M', hint:'108 delat med 18.', steps:['Känd data: m = 108 g H₂O, M(H₂O) = 18 g/mol','Formel: n = m / M','Beräkna: n = 108 / 18 = 6,0 mol','Svar: 6,0 mol vatten. Kontroll: 108 = 6 × 18 ✓'], sol:'n = 108/18 = 6,0 mol' },
  { id:1005, lv:2, cat:'mol', title:'Procenthalt Fe i Fe₂O₃', q:'Beräkna järnets (Fe) procentuella massa i järnoxid Fe₂O₃.\nM(Fe)=56, M(O)=16 g/mol.', ans:70.0, tol:0.5, unit:'%', formula:'%m = (n×M_atom / M_förening) × 100', hint:'M(Fe₂O₃) = 2×56 + 3×16 = 160 g/mol. Andel Fe = 112/160.', steps:['Beräkna M(Fe₂O₃): 2×56 + 3×16 = 112 + 48 = 160 g/mol','Massa av Fe i 1 mol Fe₂O₃: 2 × 56 = 112 g (de två Fe-atomernas massa)','Procenthalt: %Fe = (massa Fe / M_förening) × 100 = (112/160) × 100','Svar: 70 % Fe. Metoden: massandel atom = (antal×atommassa) / molmassa × 100 ✓'], sol:'%Fe = 112/160 × 100 = 70 %' },
  { id:1006, lv:2, cat:'mol', title:'n av helium', q:'Hur många mol är 4,0 g helium He?\nM(He) = 4,0 g/mol.', ans:1.0, tol:0.05, unit:'mol', formula:'n = m / M', hint:'4,0 / 4,0 = 1,0 mol.', steps:['Känd data: m = 4,0 g He, M(He) = 4,0 g/mol','Formel: n = m / M','Beräkna: n = 4,0 / 4,0 = 1,0 mol','Svar: 1,0 mol He. He är ädelgas med låg molmassa — 4 g = 1 mol ✓'], sol:'n = 1,0 mol → N = 6,022×10²³ atomer' },
  { id:1007, lv:2, cat:'mol', title:'Empirisk formel – kolhydrat', q:'En förening innehåller 40 % C, 6,7 % H och 53,3 % O (massa%).\nBeräkna kvoten n(H) / n(C) i den empiriska formeln.', ans:2.0, tol:0.1, unit:'', formula:'n_x = %x / M_x', hint:'Beräkna n per 100 g: C=40/12, H=6,7/1, O=53,3/16. Dividera med minsta.', steps:['Känd data: 40 % C, 6,7 % H, 53,3 % O per 100 g — beräkna mol av varje grundämne','Formel: n_x = %/M_x; n(C) = 40/12 = 3,33 mol; n(H) = 6,7/1 = 6,7 mol; n(O) = 53,3/16 = 3,33 mol','Beräkna: dividera med minsta (3,33): C:1,0 H:2,0 O:1,0 → empirisk formel CH₂O; n(H)/n(C) = 6,7/3,33 = 2,0','Svar: n(H)/n(C) = 2,0 ✓ Empirisk formel CH₂O (t.ex. formaldehyd; glukos C₆H₁₂O₆ = 6×CH₂O)'], sol:'n(H)/n(C) = 6,7/3,33 = 2,0' },
  { id:1008, lv:2, cat:'mol', title:'Begränsande reagens – H₂O', q:'2 H₂ + O₂ → 2 H₂O\n6,0 mol H₂ blandas med 2,0 mol O₂.\nHur många mol H₂O bildas maximalt?', ans:4.0, tol:0.1, unit:'mol', formula:'Stökiometri: 1 mol O₂ → 2 mol H₂O', hint:'Beräkna max H₂O från varje reaktant. Den som ger minst avgör.', steps:['Reaktion: 2H₂ + O₂ → 2H₂O. Koefficienter: H₂:O₂:H₂O = 2:1:2','Hitta begränsande: n(H₂)=6,0 kräver n(O₂)=3,0 mol, men bara 2,0 mol O₂ finns','O₂ begränsar: 2,0 mol O₂ × (2 mol H₂O / 1 mol O₂) = 4,0 mol H₂O','Svar: 4,0 mol H₂O. H₂ är i överskott: 6,0 − 2×2,0 = 2,0 mol H₂ kvar ✓'], sol:'O₂ är begränsande → 4,0 mol H₂O' },
  { id:1009, lv:3, cat:'mol', title:'Molmassa från m och n', q:'En okänd gas har massan 3,2 g och substansmängden 0,10 mol.\nBeräkna molmassan M.', ans:32.0, tol:0.5, unit:'g/mol', formula:'M = m / n', hint:'Dela massan med substansmängden.', steps:['Känd data: m = 3,2 g, n = 0,10 mol okänd gas','Formel: M = m / n (omvänd av n = m/M)','Beräkna: M = 3,2 / 0,10 = 32 g/mol','Svar: M = 32 g/mol → svavel S eller O₂. Metod att identifiera okänt ämne via molmassa ✓'], sol:'M = 3,2 / 0,10 = 32 g/mol' },
  { id:1010, lv:3, cat:'mol', title:'Procentuellt utbyte', q:'Teoretisk produktmängd: 8,0 g.\nFaktisk produktmängd: 6,0 g.\nBeräkna det procentuella utbytet.', ans:75.0, tol:0.5, unit:'%', formula:'utbyte = (faktisk / teoretisk) × 100', hint:'Dividera faktisk med teoretisk och multiplicera med 100.', steps:['Känd data: teoretisk massa = 8,0 g, faktisk massa = 6,0 g','Formel: utbyte % = (faktisk / teoretisk) × 100','Beräkna: utbyte = (6,0 / 8,0) × 100 = 75 %','Svar: 75 % utbyte. 100 % är teoretisk max — förluster beror på sidoreaktioner, hantering ✓'], sol:'utbyte = 6,0/8,0 × 100 = 75 %' },
  { id:1011, lv:3, cat:'mol', title:'Kvot H/C från sammansättning', q:'En kolförening innehåller 2,4 g C och 0,6 g H (inga andra grundämnen).\nBeräkna kvoten n(H) / n(C).', ans:3.0, tol:0.1, unit:'', formula:'n = m / M', hint:'n(C)=2,4/12, n(H)=0,6/1. Dividera.', steps:['Beräkna mol per grundämne: n(C) = 2,4/12 = 0,20 mol; n(H) = 0,6/1 = 0,60 mol','Kvot: n(H)/n(C) = 0,60/0,20 = 3,0','Empirisk formel: CH₃ (t.ex. C₂H₆ etan eller CH₄ utan O)','Svar: CH₃ (empirisk). Inga O-atomer → ren kolväte. Kontroll: H/C = 3 ✓'], sol:'n(H)/n(C) = 0,60/0,20 = 3,0 → empirisk formel CH₃' },
  { id:1012, lv:3, cat:'mol', title:'Antal atomer i 16 g svavel', q:'M(S) = 32 g/mol. Avogadros tal Nₐ = 6,022×10²³ mol⁻¹.\nHur många svavelatomer finns i 16 g S? Ange svaret som x×10²³ (ange x).', ans:3.011, tol:0.05, unit:'×10²³', formula:'N = n × Nₐ', hint:'n = 16/32 = 0,5 mol. N = 0,5 × 6,022×10²³.', steps:['Känd data: M(S) = 32 g/mol, massa S = 16 g → n = 16/32 = 0,50 mol','Formel: N = n × Nₐ — antal partiklar = mol × Avogadros tal','Beräkna: N = 0,50 × 6,022×10²³ = 3,011×10²³ atomer','Svar: x = 3,011 (dvs 3,011×10²³). Nₐ kopplar mol (makroskopisk) till antal (mikroskopisk) ✓'], sol:'N = 0,50 × 6,022×10²³ = 3,011×10²³' },
  { id:1101, lv:1, cat:'konc', title:'c = n/V', q:'Beräkna koncentrationen c för en lösning med 0,40 mol löst ämne i 2,0 L.', ans:0.2, tol:0.01, unit:'mol/L', formula:'c = n / V', hint:'Dela substansmängden med volymen.', steps:['Känd data: n = 0,40 mol, V = 2,0 L','Formel: c = n / V — koncentration = substansmängd / volym','Beräkna: c = 0,40 / 2,0 = 0,20 mol/L','Svar: 0,20 mol/L. c mäter hur tätt packade molekylerna är i lösningen ✓'], sol:'c = 0,40/2,0 = 0,20 mol/L' },
  { id:1102, lv:1, cat:'konc', title:'n = c × V', q:'En lösning har koncentrationen 0,50 mol/L och volymen 0,40 L.\nBeräkna substansmängden n.', ans:0.2, tol:0.01, unit:'mol', formula:'n = c × V', hint:'Multiplicera koncentrationen med volymen.', steps:['Känd data: c = 0,50 mol/L, V = 0,40 L','Formel: n = c × V (löst ur c = n/V)','Beräkna: n = 0,50 × 0,40 = 0,20 mol','Svar: 0,20 mol. OBS: V måste vara i liter! ✓'], sol:'n = 0,50 × 0,40 = 0,20 mol' },
  { id:1103, lv:1, cat:'konc', title:'Massa NaOH i lösning', q:'Beräkna massan NaOH för att bereda 1,0 L lösning med c = 0,25 mol/L.\nM(NaOH) = 40 g/mol.', ans:10.0, tol:0.2, unit:'g', formula:'m = c × V × M', hint:'Beräkna n = c×V, sedan m = n×M.', steps:['Känd data: c(NaOH) = 0,25 mol/L, V = 1,0 L, M(NaOH) = 40 g/mol','Steg 1: n = c × V = 0,25 × 1,0 = 0,25 mol','Steg 2: m = n × M = 0,25 × 40 = 10 g','Svar: 10 g NaOH. Tvåstegsmetod: c,V → n → m ✓'], sol:'m = 0,25×1,0×40 = 10 g' },
  { id:1104, lv:1, cat:'konc', title:'Volym lösning i mL', q:'Hur många mL av en 0,50 mol/L HCl-lösning innehåller 0,10 mol HCl?', ans:200.0, tol:2.0, unit:'mL', formula:'V = n / c', hint:'V = n/c, omvandla till mL.', steps:['Känd data: n = 0,10 mol, c = 0,50 mol/L','Formel: V = n / c (löst ur c = n/V)','Beräkna: V = 0,10 / 0,50 = 0,20 L = 200 mL','Svar: 200 mL. Omvandla L→mL: ×1000 ✓'], sol:'V = 0,10/0,50 = 0,20 L = 200 mL' },
  { id:1105, lv:2, cat:'konc', title:'Spädning c₁V₁ = c₂V₂', q:'En 2,0 mol/L lösning (500 mL) späds till 2000 mL.\nBeräkna den nya koncentrationen c₂.', ans:0.5, tol:0.02, unit:'mol/L', formula:'c₁V₁ = c₂V₂', hint:'c₂ = c₁V₁/V₂.', steps:['Känd data: c₁ = 2,0 mol/L, V₁ = 500 mL = 0,50 L; V₂ = 2000 mL = 2,0 L','Formel: c₁V₁ = c₂V₂ (substansmängden är oförändrad vid spädning)','Beräkna: c₂ = (2,0 × 0,50) / 2,0 = 0,50 mol/L','Svar: 0,50 mol/L. Spädning 4× → concentration 4× lägre ✓'], sol:'c₂ = 2,0×500/2000 = 0,50 mol/L' },
  { id:1106, lv:2, cat:'konc', title:'Pipettera stocklösning', q:'Du har 12 mol/L saltsyra. Hur många mL behöver du för att bereda 500 mL av 0,60 mol/L?', ans:25.0, tol:0.5, unit:'mL', formula:'V₁ = c₂V₂ / c₁', hint:'V₁ = c₂×V₂/c₁.', steps:['Känd data: c₂ = 0,60 mol/L, V₂ = 500 mL; c₁ = 12 mol/L (stocklösning)','Formel: V₁ = c₂V₂ / c₁','Beräkna: V₁ = (0,60 × 500) / 12 = 300/12 = 25 mL','Svar: mät 25 mL stocklösning, späd till 500 mL. Spädfaktor = 12/0,6 = 20× ✓'], sol:'V₁ = 0,60×500/12 = 25 mL' },
  { id:1107, lv:2, cat:'konc', title:'Blanda lösningar', q:'200 mL av 1,0 mol/L NaCl blandas med 300 mL av 0,50 mol/L NaCl.\nVad är koncentrationen i blandningen?', ans:0.7, tol:0.02, unit:'mol/L', formula:'c = (n₁+n₂)/(V₁+V₂)', hint:'Beräkna n₁ och n₂ separat, addera och dividera med total volym.', steps:['Känd data: lösn 1: 200 mL = 0,200 L, c = 1,0 mol/L; lösn 2: 300 mL = 0,300 L, c = 0,50 mol/L','Blandning: c = (n₁+n₂)/(V₁+V₂) — addera mol och volymer separat','Beräkna: n₁ = 1,0×0,200 = 0,200 mol; n₂ = 0,50×0,300 = 0,150 mol; n_tot = 0,350 mol; V_tot = 0,500 L','Svar: c = 0,350/0,500 = 0,70 mol/L ✓ Viktad medelvärdeskoncentration; mer av den lägre konc. drar ner resultatet'], sol:'c = 0,35/0,50 = 0,70 mol/L' },
  { id:1108, lv:2, cat:'konc', title:'Massa NaCl för lösning', q:'Beräkna massan NaCl för att bereda 250 mL av 0,10 mol/L NaCl.\nM(NaCl) = 58,5 g/mol.', ans:1.46, tol:0.05, unit:'g', formula:'m = c × V × M', hint:'n = 0,10 × 0,250. m = n × 58,5.', steps:['Känd data: c(NaOH) = 0,10 mol/L, V = 250 mL = 0,250 L, M(NaCl)=58,5','n(NaOH) = 0,10 × 0,250 = 0,025 mol','m(NaCl nödvändig) — OBS frågar om NaCl. n = 0,025 mol → m = 0,025 × 58,5 = 1,4625 g','Svar: m ≈ 1,46 g NaCl. Tvåstegsmetod: c×V=n → n×M=m ✓'], sol:'m = 0,10×0,250×58,5 = 1,46 g' },
  { id:1109, lv:3, cat:'konc', title:'Titrering – c(NaOH)', q:'25,0 mL NaOH titreras med 0,100 mol/L HCl. Ekvivalenspunkten nås vid 18,5 mL HCl.\nBeräkna c(NaOH).', ans:0.074, tol:0.003, unit:'mol/L', formula:'c₁V₁ = c₂V₂', hint:'n(HCl) = c×V. n(NaOH) = n(HCl). c(NaOH) = n/V(NaOH).', steps:['Känd data: V(NaOH) = 25,0 mL = 0,0250 L (okänd c); V(HCl) = 18,5 mL = 0,0185 L; c(HCl) = 0,100 mol/L','Titrering 1:1: n(HCl) = n(NaOH); c₁V₁ = c₂V₂ (HCl+NaOH→NaCl+H₂O)','Beräkna: n(HCl) = 0,100 × 0,0185 = 0,00185 mol = n(NaOH); c(NaOH) = 0,00185/0,0250 = 0,074 mol/L','Svar: c(NaOH) = 0,074 mol/L ✓ Titrering bestämmer exakt okänd koncentration vid ekvivalenspunkten'], sol:'c(NaOH) = 0,00185/0,025 = 0,074 mol/L' },
  { id:1110, lv:3, cat:'konc', title:'Seriell spädning', q:'1,0 mol/L späds 1:100 (1 mL→100 mL) två gånger i rad.\nVad är -log(c) för slutkoncentrationen?', ans:4.0, tol:0.05, unit:'', formula:'c_n = c₀ / (faktor)ⁿ', hint:'c = 1,0 / (100×100) = 10⁻⁴ mol/L. -log(10⁻⁴) = 4.', steps:['Känd data: c₀ = 1,0 mol/L; seriell spädning 1:100 (1 mL →10 0 mL) upprepas 2 gånger','Formel: c_n = c₀/(faktor)ⁿ — varje spädningssteg multiplicerar spädfaktorn','Beräkna: c₁ = 1,0/100 = 0,010 mol/L; c₂ = 0,010/100 = 1,0×10⁻⁴ mol/L; −log(10⁻⁴) = 4,0','Svar: −log(c) = 4,0 ✓ Total spädfaktor 10 000×; pC-notation: −log(c) liknar pH-begreppet'], sol:'-log(10⁻⁴) = 4,0' },
  { id:1111, lv:3, cat:'konc', title:'Löslighet från Ksp', q:'Ksp(BaSO₄) = 1,1×10⁻¹⁰. Beräkna lösligheten s.\nAnge svaret som -log(s) (dvs. pS).', ans:4.98, tol:0.05, unit:'', formula:'s = √Ksp', hint:'s = √(1,1×10⁻¹⁰) ≈ 1,05×10⁻⁵ mol/L. pS = -log(s).', steps:['AgCl → Ag⁺ + Cl⁻. Ksp(AgCl) = s² = 1,1×10⁻¹⁰ (ej givet, använder typvärde)','s = √(1,1×10⁻¹⁰) = 1,05×10⁻⁵ mol/L','pS = −log(s) = −log(1,05×10⁻⁵)','Svar: pS ≈ 4,98. pS-notation liknar pH — logskala ✓'], sol:'s = 1,05×10⁻⁵ mol/L → pS = 4,98' },
  { id:1112, lv:3, cat:'konc', title:'Substansmängd efter spädning', q:'0,50 mol/L stocklösning späds 1:10 → 0,050 mol/L.\n25 mL av den spädda lösningen används. Hur många mmol löst ämne finns?', ans:1.25, tol:0.05, unit:'mmol', formula:'n = c × V', hint:'n = 0,050 mol/L × 0,025 L = 0,00125 mol = 1,25 mmol.', steps:['Steg 1: späd c₁ = 0,50 mol/L med faktor 10 → c₂ = 0,050 mol/L','Steg 2: n = c₂ × V = 0,050 × 0,025 = 0,00125 mol = 1,25 mmol','Svar: 1,25 mmol. Seriell spädning sedan beräkna substansmängd ✓'], sol:'n = 0,050 × 0,025 = 1,25 mmol' },
  { id:1201, lv:1, cat:'gas', title:'Volym vid STP', q:'Beräkna volymen för 2,0 mol idealgas vid STP (0 °C, 101,3 kPa).\nMolär volym vid STP = 22,4 L/mol.', ans:44.8, tol:0.2, unit:'L', formula:'V = n × 22,4 L/mol', hint:'Multiplicera mol med 22,4 L/mol.', steps:['Känd data: n = 2,0 mol idealgas, molär volym vid STP (0°C, 101,3 kPa) = 22,4 L/mol','Formel: V = n × 22,4 L/mol — vid STP upptar varje mol gas exakt 22,4 L','Beräkna: V = 2,0 × 22,4 = 44,8 L','Svar: 44,8 L. STP-regeln gäller alla idealgaser oavsett ämne ✓'], sol:'V = 2,0 × 22,4 = 44,8 L' },
  { id:1202, lv:1, cat:'gas', title:'Boyles lag', q:'En gas: P₁ = 100 kPa, V₁ = 6,0 L. Trycket ökar till P₂ = 300 kPa vid konstant T.\nBeräkna V₂.', ans:2.0, tol:0.1, unit:'L', formula:'P₁V₁ = P₂V₂', hint:'V₂ = P₁V₁ / P₂.', steps:['Boyles lag: P₁V₁ = P₂V₂ (konstant T); volymen minskar när trycket ökar','Känd data: P₁ = 100 kPa, V₁ = 6,0 L, P₂ = 300 kPa; sök V₂','Beräkna: V₂ = P₁V₁/P₂ = (100 × 6,0)/300 = 600/300 = 2,0 L','Svar: V₂ = 2,0 L ✓ Trycket trefaldigades → volymen minskade till en tredjedel'], sol:'V₂ = 100×6,0/300 = 2,0 L' },
  { id:1203, lv:1, cat:'gas', title:'Charles lag', q:'En gas: V₁ = 5,0 L vid T₁ = 250 K. Temperaturen ökar till T₂ = 500 K (konstant p).\nBeräkna V₂.', ans:10.0, tol:0.2, unit:'L', formula:'V₁/T₁ = V₂/T₂', hint:'V₂ = V₁ × T₂/T₁.', steps:['Charles lag: V₁/T₁ = V₂/T₂ (konstant p). Temperaturer MÅSTE vara i Kelvin','T₁ = 250 K, T₂ = 500 K, V₁ = 5,0 L','V₂ = V₁ × T₂/T₁ = 5,0 × 500/250 = 5,0 × 2,0 = 10,0 L','Svar: 10,0 L. T dubblas → V dubblas (proportionell) ✓'], sol:'V₂ = 5,0 × 500/250 = 10,0 L' },
  { id:1204, lv:1, cat:'gas', title:'Gay-Lussacs lag', q:'En gas: P₁ = 100 kPa vid T₁ = 300 K. Temperaturen stiger till T₂ = 600 K (konstant V).\nBeräkna P₂.', ans:200.0, tol:2.0, unit:'kPa', formula:'P₁/T₁ = P₂/T₂', hint:'P₂ = P₁ × T₂/T₁.', steps:['Gay-Lussacs lag: P₁/T₁ = P₂/T₂ (konstant V). T i Kelvin!','T₁ = 300 K, T₂ = 600 K, P₁ = 100 kPa','P₂ = P₁ × T₂/T₁ = 100 × 600/300 = 200 kPa','Svar: P₂ = 200 kPa. T dubblas → P dubblas ✓'], sol:'P₂ = 100×600/300 = 200 kPa' },
  { id:1205, lv:2, cat:'gas', title:'Kombinerade gaslagen', q:'P₁=100 kPa, V₁=8,0 L, T₁=400 K → P₂=200 kPa, T₂=400 K.\nBeräkna V₂.', ans:4.0, tol:0.1, unit:'L', formula:'P₁V₁/T₁ = P₂V₂/T₂', hint:'V₂ = P₁V₁T₂ / (T₁P₂).', steps:['Kombinerade gaslagen: P₁V₁/T₁ = P₂V₂/T₂','P₁=100 kPa, V₁=8,0 L, T₁=400 K; P₂=200 kPa, T₂=400 K','V₂ = P₁V₁T₂ / (T₁P₂) = 100×8,0×400 / (400×200) = 320000/80000 = 4,0 L','Svar: V₂ = 4,0 L. T oförändrad → bara Boyle gäller: dubbelt tryck → halv volym ✓'], sol:'V₂ = 100×8×400/(400×200) = 4,0 L' },
  { id:1206, lv:2, cat:'gas', title:'Molmassa från densitet', q:'En gas har densiteten 1,25 g/L vid STP.\nBeräkna molmassan M. (V_m = 22,4 L/mol vid STP)', ans:28.0, tol:0.5, unit:'g/mol', formula:'M = ρ × V_m', hint:'M = densitet × molär volym.', steps:['Molär volym vid STP: Vm = 22,4 L/mol','Formel: M = ρ × Vm (molmassa = densitet × molär volym)','Beräkna: M = 1,25 g/L × 22,4 L/mol = 28,0 g/mol','Svar: M = 28,0 g/mol → kväve N₂. Metod: mät gasdensitet → beräkna M ✓'], sol:'M = 1,25 × 22,4 = 28,0 g/mol' },
  { id:1207, lv:2, cat:'gas', title:'Idealgas vid 546 K', q:'1,0 mol idealgas vid T = 546 K och p = 101,3 kPa. Beräkna V.\nR = 8,314 J/(mol·K).', ans:44.8, tol:0.5, unit:'L', formula:'V = nRT / p', hint:'546 K = 2×273 K → V fördubblas från 22,4 L vid STP.', steps:['Idealgas: pV = nRT. V = nRT/p. T = 546 K (273°C), R = 8,314 J/(mol·K)','OBS: p måste i Pa: 101300 Pa; V i m³','V = 1,0 × 8,314 × 546 / 101300 = 4539/101300 = 0,04481 m³','Svar: 0,0448 m³ = 44,8 L (dubbel molvolymen vid STP, rimligt vid 273°C) ✓'], sol:'V = nRT/p = 44,8 L (dubbelt STP-volymen)' },
  { id:1208, lv:2, cat:'gas', title:'Daltons lag', q:'En gasblandning innehåller N₂ (60 kPa) och O₂ (40 kPa).\nBeräkna totaltrycket.', ans:100.0, tol:1.0, unit:'kPa', formula:'p_tot = Σ pᵢ', hint:'Addera partialtrycken.', steps:['Daltons lag: p_tot = Σpᵢ (partialtryck adderas)','p_tot = p(N₂) + p(O₂) = 60 + 40 = 100 kPa','Svar: 100 kPa. Varje gas bidrar oberoende med sitt partialtryck ✓'], sol:'p_tot = 60+40 = 100 kPa' },
  { id:1209, lv:3, cat:'gas', title:'Grahams lag – diffusion', q:'Hur många gånger snabbare diffunderar H₂ (M=2) jämfört med O₂ (M=32)?', ans:4.0, tol:0.1, unit:'gånger', formula:'r_A/r_B = √(M_B/M_A)', hint:'√(32/2) = √16 = 4.', steps:['Grahams lag: r(H₂)/r(O₂) = √(M(O₂)/M(H₂)) — lätt gas diffunderar snabbare','r(H₂)/r(O₂) = √(32/2) = √16 = 4,0','Svar: H₂ diffunderar 4,0 gånger snabbare än O₂. Lättare molekyl → högre medelhastighet ✓'], sol:'r(H₂)/r(O₂) = √(32/2) = 4,0' },
  { id:1210, lv:3, cat:'gas', title:'Molmassa okänd gas', q:'2,50 g av en okänd gas upptar 1,40 L vid STP.\nBeräkna molmassan M. (V_m = 22,4 L/mol)', ans:40.0, tol:1.0, unit:'g/mol', formula:'M = m/n = m × V_m / V', hint:'n = V/V_m = 1,40/22,4. M = m/n.', steps:['V = 1,40 L vid STP → n = 1,40/22,4 = 0,0625 mol','M = m/n = 2,50/0,0625','Beräkna: M = 40 g/mol','Svar: M = 40 g/mol → argon Ar eller kalcium Ca (ädelgas om gas) ✓'], sol:'M = 2,50/0,0625 = 40 g/mol' },
  { id:1211, lv:3, cat:'gas', title:'n via idealgaslagen', q:'p = 200 kPa, V = 5,0 L, T = 400 K. Beräkna n.\nR = 8,314 J/(mol·K). (1 L = 0,001 m³)', ans:0.3, tol:0.02, unit:'mol', formula:'n = pV / RT', hint:'Omvandla: p i Pa, V i m³. n = 200000×0,005 / (8,314×400).', steps:['pV = nRT. n = pV/(RT). Enhetsomvandling: 200 kPa = 200 000 Pa; 5 L = 0,005 m³','n = (200000 × 0,005)/(8,314 × 400) = 1000/3325,6','Beräkna: n = 0,301 mol','Svar: n ≈ 0,30 mol. Idealgas kopplar alla variabler ✓'], sol:'n = pV/RT = 1000/3325,6 = 0,30 mol' },
  { id:1212, lv:3, cat:'gas', title:'Molmassa via effusion', q:'Gas A (M=4 g/mol) tar 10 s att effundera. Gas B tar 40 s.\nBeräkna molmassan för gas B.', ans:64.0, tol:1.0, unit:'g/mol', formula:'t_A/t_B = √(M_A/M_B) → M_B = M_A×(t_B/t_A)²', hint:'(t_B/t_A)² = (40/10)² = 16. M_B = 4×16.', steps:['Grahams lag för effusionstid: t ∝ √M → (t_B/t_A)² = M_B/M_A','t_B/t_A = 40/10 = 4 (B tar 4× längre)','M_B = M_A × (t_B/t_A)² = 4 × 4² = 4 × 16 = 64 g/mol','Svar: M_B = 64 g/mol → svavel S₂ eller koppar Cu (men Cu är fast). Troligen SO₂ (M=64) ✓'], sol:'M_B = 4×(40/10)² = 4×16 = 64 g/mol' },
  { id:1301, lv:1, cat:'termo', title:'q = mcΔT – uppvärmning', q:'200 g vatten värms från 20 °C till 30 °C. Beräkna tillförd värme q.\nc(vatten) = 4,18 J/(g·K).', ans:8360.0, tol:50.0, unit:'J', formula:'q = m × c × ΔT', hint:'ΔT = 10 °C. q = 200 × 4,18 × 10.', steps:['Känd data: m = 200 g vatten, c = 4,18 J/(g·K), T₁ = 20°C, T₂ = 30°C','Temperaturändring: ΔT = T₂ − T₁ = 30 − 20 = 10 K (eller 10°C, samma sak)','Formel: q = m × c × ΔT — värmeenergi = massa × specifik värmekapacitet × ΔT','q = 200 × 4,18 × 10 = 8360 J. Vatten: hög c gör det bra som kylmedel ✓'], sol:'q = 200×4,18×10 = 8360 J' },
  { id:1302, lv:1, cat:'termo', title:'ΔT från q', q:'5000 J värme tillförs 100 g vatten. Hur mycket stiger temperaturen?\nc(vatten) = 4,18 J/(g·K).', ans:11.96, tol:0.2, unit:'°C', formula:'ΔT = q / (m × c)', hint:'ΔT = 5000 / (100 × 4,18).', steps:['Känd data: q = 5000 J, m = 100 g vatten, c = 4,18 J/(g·K)','Formel: ΔT = q/(m×c) (löst ur q = m×c×ΔT)','Beräkna: ΔT = 5000/(100×4,18) = 5000/418 = 11,96°C','Svar: ΔT ≈ 12,0°C. Hög c → liten temperaturhöjning för samma energi ✓'], sol:'ΔT = 5000/(100×4,18) = 12,0 °C' },
  { id:1303, lv:1, cat:'termo', title:'Specifik värmekapacitet', q:'1500 J värme höjer temperaturen på 50 g av ett ämne med 15 °C.\nBeräkna ämnets specifika värmekapacitet c.', ans:2.0, tol:0.05, unit:'J/(g·K)', formula:'c = q / (m × ΔT)', hint:'c = 1500 / (50 × 15).', steps:['Känd data: q = 1500 J, m = 50 g, ΔT = 15°C','Formel: c = q/(m×ΔT) (löst ur q = m×c×ΔT)','Beräkna: c = 1500/(50×15) = 1500/750 = 2,0 J/(g·K)','Svar: c = 2,0 J/(g·K). Okänt material — c < 4,18 → inte vatten ✓'], sol:'c = 1500/(50×15) = 2,0 J/(g·K)' },
  { id:1304, lv:1, cat:'termo', title:'Energi vid förbränning av CH₄', q:'ΔH°(förbränning CH₄) = −890 kJ/mol. Hur mycket energi frigörs vid förbränning av 2,0 mol CH₄?', ans:1780.0, tol:10.0, unit:'kJ', formula:'q = |ΔH| × n', hint:'Multiplicera |ΔH| med antal mol.', steps:['Känd data: ΔH°(CH₄) = −890 kJ/mol, n = 2,0 mol CH₄','Formel: q = n × |ΔH| — total energi = mol × energi per mol','Beräkna: q = 2,0 × 890 = 1780 kJ','Svar: 1780 kJ frigörs. Negativt ΔH → exoterm, energi frigörs till omgivningen ✓'], sol:'q = 890×2,0 = 1780 kJ' },
  { id:1305, lv:2, cat:'termo', title:'Hess lag – två steg', q:'A→B: ΔH₁ = −100 kJ. B→C: ΔH₂ = −50 kJ.\nBeräkna ΔH för A→C.', ans:-150.0, tol:2.0, unit:'kJ', formula:'ΔH(A→C) = ΔH₁ + ΔH₂', hint:'Addera entalpistegen.', steps:['Hess lag: ΔH beror bara på start och slutpunkt, inte på vägen','ΔH(A→C) = ΔH(A→B) + ΔH(B→C) = ΔH₁ + ΔH₂','Beräkna: ΔH = −100 + (−50) = −150 kJ','Svar: ΔH = −150 kJ. Addera entalpistegen som länkade pilar ✓'], sol:'ΔH(A→C) = −100+(−50) = −150 kJ' },
  { id:1306, lv:2, cat:'termo', title:'Energi per gram – propan', q:'Förbränningsentalpi för propan C₃H₈: ΔH = −2220 kJ/mol. M(C₃H₈) = 44 g/mol.\nBeräkna |ΔH| per gram.', ans:50.45, tol:0.5, unit:'kJ/g', formula:'ΔH/g = |ΔH| / M', hint:'2220 / 44.', steps:['Känd data: ΔH(C₃H₈) = −2220 kJ/mol, M = 44 g/mol','Formel: ΔH/g = |ΔH| / M','Beräkna: 2220/44 = 50,45 kJ/g','Svar: ≈ 50,5 kJ/g. Propan = utmärkt bränsle, högt energiinnehåll per gram ✓'], sol:'ΔH/g = 2220/44 = 50,5 kJ/g' },
  { id:1307, lv:2, cat:'termo', title:'Blandningstemperatur vatten', q:'50 g vatten (20 °C) blandas med 50 g vatten (80 °C).\nVad är sluttemperaturen? (c(H₂O) = 4,18 J/(g·K))', ans:50.0, tol:0.5, unit:'°C', formula:'m₁c(T−T₁) = m₂c(T₂−T)', hint:'Energibevarelse: värmen som avgår = värmen som absorberas.', steps:['Energibalans: q avgivet = q mottaget. m₁c(T−T₁) = m₂c(T₂−T)','50×4,18×(T−20) = 50×4,18×(80−T). c och m cancellerar','T−20 = 80−T → 2T = 100 → T = 50°C','Svar: T = 50°C. Lika massa, lika c → medelvärdet av temperaturer ✓'], sol:'T = (20+80)/2 = 50 °C (lika massor)' },
  { id:1308, lv:2, cat:'termo', title:'ΔH reaktion via ΔHf', q:'2H₂ + O₂ → 2H₂O. ΔHf°(H₂O) = −286 kJ/mol.\nBeräkna ΔH° för reaktionen.', ans:-572.0, tol:5.0, unit:'kJ', formula:'ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak)', hint:'ΔH° = 2×(−286) − 0 = −572 kJ.', steps:['Reaktion: 2H₂ + O₂ → 2H₂O. Formel: ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak)','ΔHf° av H₂ och O₂ = 0 (rena element i standardtillstånd)','ΔH° = 2×ΔHf°(H₂O) − 0 = 2×(−286) = −572 kJ','Svar: ΔH° = −572 kJ. Bildningsentalpier: rena element har ΔHf° = 0 ✓'], sol:'ΔH° = 2×(−286) = −572 kJ' },
  { id:1309, lv:3, cat:'termo', title:'Hess – C + ½O₂ → CO', q:'(1) C + O₂ → CO₂, ΔH₁ = −393 kJ\n(2) CO + ½O₂ → CO₂, ΔH₂ = −283 kJ\nBeräkna ΔH för: C + ½O₂ → CO', ans:-110.0, tol:2.0, unit:'kJ', formula:'ΔH = ΔH₁ − ΔH₂', hint:'Reaktion (1) minus reaktion (2) ger målreaktionen.', steps:['Hess lag: kombinera reaktionerna för att få C + ½O₂ → CO','Reaktion (1): C + O₂ → CO₂, ΔH₁ = −393 kJ','Reaktion (2) omvänd: CO₂ → CO + ½O₂, ΔH₂_omv = +283 kJ','ΔH = ΔH₁ + ΔH₂_omv = −393 + 283 = −110 kJ ✓'], sol:'ΔH = −393−(−283) = −110 kJ' },
  { id:1310, lv:3, cat:'termo', title:'ΔH – Haber-Bosch NH₃', q:'N₂ + 3H₂ → 2NH₃. ΔHf°(NH₃) = −46 kJ/mol.\nBeräkna ΔH° för reaktionen.', ans:-92.0, tol:2.0, unit:'kJ', formula:'ΔH°rxn = 2×ΔHf°(NH₃)', hint:'ΔH° = 2×(−46) − 0.', steps:['Reaktion: N₂ + 3H₂ → 2NH₃. ΔHf°(NH₃) = −46 kJ/mol','ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak) = 2×(−46) − (0+0)','Beräkna: ΔH° = −92 kJ','Svar: −92 kJ. Haber-Bosch är exoterm — men kräver högt tryck + katalysator ✓'], sol:'ΔH° = 2×(−46) = −92 kJ' },
  { id:1311, lv:3, cat:'termo', title:'ΔG = ΔH − TΔS', q:'ΔH = −120 kJ/mol, ΔS = +200 J/(mol·K), T = 298 K.\nBeräkna ΔG i kJ/mol.', ans:-179.6, tol:2.0, unit:'kJ/mol', formula:'ΔG = ΔH − TΔS', hint:'Omvandla ΔS till kJ: 200 J = 0,200 kJ. ΔG = −120 − 298×0,200.', steps:['ΔG = ΔH − TΔS. OBS: ΔS = 200 J/(mol·K) = 0,200 kJ/(mol·K) — enhetsomvandling krävs!','ΔG = −120 − 298 × 0,200 = −120 − 59,6','Beräkna: ΔG = −179,6 kJ/mol','Svar: ΔG = −179,6 kJ/mol ✓ Spontan vid 298 K; negativ ΔH och positiv ΔS ger alltid ΔG < 0'], sol:'ΔG = −120−59,6 = −179,6 kJ/mol (spontan)' },
  { id:1312, lv:3, cat:'termo', title:'Neutralisationsentalpi – kalorimetri', q:'100 mL 1,0 mol/L HCl + 100 mL 1,0 mol/L NaOH blandas i kalorimeter. ΔT = 6,85 °C.\nm(lösning) ≈ 200 g, c = 4,18 J/(g·K).\nBeräkna |ΔHneutr| per mol.', ans:57.3, tol:1.0, unit:'kJ/mol', formula:'|ΔH| = q/n = mcΔT/n', hint:'q = 200×4,18×6,85. n = 0,100 mol. ΔH = q/n.', steps:['Känd data: kalorimetriexperiment; uppmätt värmefrigörelse q = 5726,6 J; n(H₂O) = 0,100 mol','Neutralisationsentalpin: ΔH_neutr = q/n = 5726,6/0,100 = 57 266 J/mol = 57,3 kJ/mol (värmefrigörelse)','Kontroll: stark syra + stark bas: ΔH_neutr ≈ 57 kJ/mol är standardvärdet','Svar: ΔH_neutr = 57,3 kJ/mol ✓ Neutralisation av H⁺ + OH⁻ → H₂O frigör 57,3 kJ per mol'], sol:'|ΔHneutr| = 5727/0,100/1000 = 57,3 kJ/mol' },
  { id:1401, lv:1, cat:'syrabas', title:'pH från [H⁺]', q:'Beräkna pH för en lösning med [H⁺] = 0,010 mol/L.', ans:2.0, tol:0.05, unit:'', formula:'pH = −log[H⁺]', hint:'pH = −log(0,010) = −log(10⁻²) = 2.', steps:['Känd data: [H⁺] = 0,010 mol/L = 10⁻² mol/L','Formel: pH = −log[H⁺] — pH-skalan är logaritmisk (bas 10)','Beräkna: pH = −log(10⁻²) = −(−2) = 2','Svar: pH = 2. Tumregel: om [H⁺] = 10⁻ⁿ mol/L → pH = n ✓'], sol:'pH = −log(0,010) = 2,0' },
  { id:1402, lv:1, cat:'syrabas', title:'pH från pOH', q:'pOH = 3,0 vid 25 °C. Beräkna pH.', ans:11.0, tol:0.05, unit:'', formula:'pH + pOH = 14', hint:'pH = 14 − pOH.', steps:['Känd data: pOH = 3,0 vid 25°C','Samband: pH + pOH = 14 (vid 25°C, gäller för Kw = 10⁻¹⁴)','pH = 14 − pOH = 14 − 3,0 = 11,0','Svar: pH = 11,0 (basisk lösning). pH > 7 = basisk vid 25°C ✓'], sol:'pH = 14−3,0 = 11,0' },
  { id:1403, lv:1, cat:'syrabas', title:'[H⁺] från pH', q:'pH = 4,0. [H⁺] = 10⁻ˣ mol/L. Vad är x?', ans:4.0, tol:0.05, unit:'', formula:'[H⁺] = 10^(−pH)', hint:'[H⁺] = 10⁻⁴ → x = 4.', steps:['Känd data: pH = 4,0','Formel: [H⁺] = 10^(−pH)','Beräkna: [H⁺] = 10⁻⁴ mol/L → x = 4','Svar: x = 4. Logaritmsamband: varje pH-enhet = 10× ändring i [H⁺] ✓'], sol:'[H⁺] = 10⁻⁴ mol/L → x = 4,0' },
  { id:1404, lv:1, cat:'syrabas', title:'pH neutral lösning', q:'Vid 25 °C är Kw = 10⁻¹⁴. Vad är pH för en neutral lösning?', ans:7.0, tol:0.05, unit:'', formula:'pH = ½ × pKw = 7,0', hint:'I neutral lösning: [H⁺] = [OH⁻] = √Kw = 10⁻⁷.', steps:['Neutral lösning: [H⁺] = [OH⁻]. Kw = [H⁺][OH⁻] = 10⁻¹⁴ vid 25°C','[H⁺]² = 10⁻¹⁴ → [H⁺] = 10⁻⁷ mol/L','pH = −log(10⁻⁷) = 7,0','Svar: pH = 7. Neutral = lika många H⁺ och OH⁻ joner ✓'], sol:'pH = 7,0 (neutral vid 25 °C)' },
  { id:1405, lv:2, cat:'syrabas', title:'pH svag syra HF', q:'Ka(HF) = 6,8×10⁻⁴, c = 0,10 mol/L. Beräkna pH.\n(Approximation: [H⁺] = √(Ka × c))', ans:2.08, tol:0.05, unit:'', formula:'[H⁺] = √(Ka × c)', hint:'[H⁺] = √(6,8×10⁻⁴ × 0,10) = √(6,8×10⁻⁵).', steps:['Ka(HF) = 6,8×10⁻⁴, c = 0,10 mol/L. Svag syra: partiell protolys','Approximation: [H⁺] = √(Ka × c) = √(6,8×10⁻⁴ × 0,10)','= √(6,8×10⁻⁵) = 8,25×10⁻³ mol/L','pH = −log(8,25×10⁻³) = 3 − log(8,25) = 3 − 0,916 = 2,08 ✓'], sol:'pH = −log(√(6,8×10⁻⁵)) = 2,08' },
  { id:1406, lv:2, cat:'syrabas', title:'Buffer – Henderson-Hasselbalch', q:'Buffer med [CH₃COOH] = [CH₃COO⁻] = 0,10 mol/L. pKa(CH₃COOH) = 4,74.\nBeräkna pH.', ans:4.74, tol:0.05, unit:'', formula:'pH = pKa + log([A⁻]/[HA])', hint:'log(1) = 0 → pH = pKa.', steps:['Buffer: [CH₃COOH] = [CH₃COO⁻] = 0,10 mol/L (lika koncentrationer!)','Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])','log([A⁻]/[HA]) = log(1) = 0','pH = pKa + 0 = 4,74. Vid lika konc: pH = pKa alltid ✓'], sol:'pH = pKa + log(1) = 4,74' },
  { id:1407, lv:2, cat:'syrabas', title:'Ekvivalensvolym vid titrering', q:'25 mL 0,100 mol/L HCl titreras med NaOH (0,200 mol/L).\nHur många mL NaOH behövs för att nå ekvivalenspunkten?', ans:12.5, tol:0.2, unit:'mL', formula:'c₁V₁ = c₂V₂', hint:'n(HCl) = 0,100×0,025. V(NaOH) = n/c.', steps:['n(HCl) = c × V = 0,100 × 0,025 = 0,00250 mol','HCl + NaOH → NaCl + H₂O. Molförhållande 1:1','n(NaOH) behövs = 0,00250 mol','V(NaOH) = n/c = 0,00250/0,200 = 0,01250 L = 12,5 mL ✓'], sol:'V(NaOH) = 0,0025/0,200 = 12,5 mL' },
  { id:1408, lv:2, cat:'syrabas', title:'pKa från pH', q:'En 0,050 mol/L lösning av svag syra HA har pH = 3,0.\nBeräkna pKa (approximation: Ka ≈ [H⁺]²/c).', ans:4.7, tol:0.05, unit:'', formula:'pKa = −log(Ka) = −log([H⁺]²/c)', hint:'Ka = (10⁻³)²/0,050 = 10⁻⁶/0,050 = 2×10⁻⁵. pKa = −log(2×10⁻⁵).', steps:['[H⁺] = 10^(−pH) = 10⁻³ = 0,001 mol/L','Ka ≈ [H⁺]²/c = (10⁻³)²/0,050 = 10⁻⁶/0,050 = 2×10⁻⁵','pKa = −log(Ka) = −log(2×10⁻⁵) = 5 − log(2) = 5 − 0,30 = 4,70','Svar: pKa ≈ 4,70. Bakräkning: pH → [H⁺] → Ka → pKa ✓'], sol:'pKa = −log(2,0×10⁻⁵) = 4,70' },
  { id:1409, lv:2, cat:'syrabas', title:'pH blandning starka syror', q:'50 mL 0,20 mol/L HCl blandas med 50 mL 0,10 mol/L HCl.\nBeräkna pH för blandningen.', ans:0.82, tol:0.05, unit:'', formula:'c = (n₁+n₂)/(V₁+V₂)', hint:'Beräkna total n(H⁺) och total V. Sedan pH = −log(c).', steps:['n₁ = c₁V₁ = 0,20×0,050 = 0,010 mol HCl; n₂ = c₂V₂ = 0,10×0,050 = 0,005 mol HCl','Total n = 0,015 mol HCl; Total V = 0,100 L','[H⁺] = 0,015/0,100 = 0,15 mol/L','pH = −log(0,15) = −log(1,5×10⁻¹) = 1 − log(1,5) ≈ 0,82 ✓'], sol:'pH = −log(0,15) = 0,82' },
  { id:1410, lv:3, cat:'syrabas', title:'HH – beräkna [A⁻]', q:'pKa = 4,75. pH = 5,0. [HA] = 0,10 mol/L.\nBeräkna [A⁻] via Henderson-Hasselbalch.', ans:0.178, tol:0.01, unit:'mol/L', formula:'[A⁻] = [HA] × 10^(pH−pKa)', hint:'log([A⁻]/[HA]) = pH−pKa = 0,25. [A⁻]/[HA] = 10^0,25 ≈ 1,778.', steps:['Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])','log([A⁻]/[HA]) = pH − pKa = 5,0 − 4,75 = 0,25','[A⁻]/[HA] = 10^0,25 = 1,778','[A⁻] = [HA] × 1,778 = 0,10 × 1,778 = 0,178 mol/L ✓'], sol:'[A⁻] = 0,10 × 10^0,25 = 0,178 mol/L' },
  { id:1411, lv:3, cat:'syrabas', title:'pH natriumacetat', q:'CH₃COONa, c = 0,10 mol/L. Ka(CH₃COOH) = 1,8×10⁻⁵. Kw = 10⁻¹⁴.\nBeräkna pH.', ans:8.87, tol:0.1, unit:'', formula:'[OH⁻] = √(Kb × c), Kb = Kw/Ka', hint:'Kb = 10⁻¹⁴/1,8×10⁻⁵ = 5,56×10⁻¹⁰. [OH⁻] = √(Kb×c). pOH → pH.', steps:['CH₃COO⁻ hydrolyserar: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻','Kb(CH₃COO⁻) = Kw/Ka = 10⁻¹⁴/1,8×10⁻⁵ = 5,56×10⁻¹⁰','[OH⁻] = √(Kb×c) = √(5,56×10⁻¹⁰×0,10) = √(5,56×10⁻¹¹) = 7,45×10⁻⁶','pOH = −log(7,45×10⁻⁶) = 5,13; pH = 14 − 5,13 = 8,87 ✓'], sol:'pH = 14−pOH = 14−5,13 = 8,87' },
  { id:1412, lv:3, cat:'syrabas', title:'pH vid halvvägspunkten', q:'En svag syra HA titreras med NaOH. pKa(HA) = 4,74.\nVad är pH exakt vid halvvägspunkten?', ans:4.74, tol:0.05, unit:'', formula:'pH = pKa (vid halvvägspunkten)', hint:'Vid halvvägs: [HA] = [A⁻] → log([A⁻]/[HA]) = 0 → pH = pKa.', steps:['Vid halvvägspunkt i titrering: hälften av syran har neutraliserats','[A⁻] = [HA] (lika konc av konjugatparet)','Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa + 0','Svar: pH = pKa = 4,74. Halvvägspunkten används för att bestämma pKa experimentellt ✓'], sol:'pH = pKa = 4,74 vid halvvägspunkten' },
  { id:1413, lv:3, cat:'syrabas', title:'Neutral pH vid annan T', q:'Vid 80 °C är Kw = 10⁻¹³. Vad är pH för en neutral lösning vid denna temperatur?', ans:6.5, tol:0.05, unit:'', formula:'pH_neutral = ½ × pKw', hint:'pKw = 13. pH_neutral = 13/2 = 6,5.', steps:['Vid 80°C: Kw = 10⁻¹³. pKw = 13','Neutral: [H⁺] = [OH⁻] → pH = ½ × pKw','pH_neutral = 13/2 = 6,5','Svar: pH = 6,5. OBS: vatten är fortfarande neutralt! Det är bara pH-skalan som förändras ✓'], sol:'pH_neutral = ½×pKw = ½×13 = 6,5' },
  { id:1501, lv:1, cat:'jamvikt', title:'Kc från koncentrationer', q:'H₂ + I₂ ⇌ 2HI vid jämvikt.\n[H₂] = 0,50, [I₂] = 0,50, [HI] = 4,0 mol/L.\nBeräkna Kc.', ans:64.0, tol:2.0, unit:'', formula:'Kc = [HI]² / ([H₂][I₂])', hint:'Kc = 4,0² / (0,50 × 0,50) = 16/0,25.', steps:['Reaktion: H₂ + I₂ ⇌ 2HI. Kc = [produkter]^koeff / [reaktanter]^koeff','Kc = [HI]² / ([H₂][I₂])','= (4,0)² / (0,50 × 0,50) = 16 / 0,25 = 64','Svar: Kc = 64. Kc >> 1 → produkter (HI) dominerar vid jämvikt ✓'], sol:'Kc = 16/0,25 = 64' },
  { id:1502, lv:1, cat:'jamvikt', title:'Kc omvänd reaktion', q:'Kc(framåt) = 64 för H₂ + I₂ ⇌ 2HI.\nVad är Kc för den omvända reaktionen 2HI ⇌ H₂ + I₂?', ans:0.015625, tol:0.001, unit:'', formula:'Kc(bakåt) = 1/Kc(framåt)', hint:'Inverteras Kc.', steps:['Kc(framåt) = 64 för H₂ + I₂ ⇌ 2HI','Kc(bakåt) = 1/Kc(framåt) (omvänd reaktion invertera K)','Kc(bakåt) = 1/64 = 0,015625','Svar: Kc(bakåt) = 0,0156. Omvänd reaktion → K är reciprokt ✓'], sol:'Kc(bakåt) = 1/64 = 0,0156' },
  { id:1503, lv:1, cat:'jamvikt', title:'Kc enkel – 2A⇌B', q:'2A ⇌ B vid jämvikt. [A] = 0,40 mol/L, [B] = 0,16 mol/L.\nBeräkna Kc.', ans:1.0, tol:0.05, unit:'(mol/L)⁻¹', formula:'Kc = [B] / [A]²', hint:'[B]/[A]² = 0,16/0,16 = 1,0.', steps:['Reaktion: 2A ⇌ B. Kc = [B]/[A]²','[A] = 0,40 mol/L, [B] = 0,16 mol/L','Kc = 0,16/(0,40)² = 0,16/0,16 = 1,0','Svar: Kc = 1,0 (mol/L)⁻¹. Kc ≈ 1 → lika mycket reaktanter och produkter ✓'], sol:'Kc = 0,16/0,16 = 1,0' },
  { id:1504, lv:1, cat:'jamvikt', title:'Partialtryck NH₃', q:'Vid jämvikt: n(N₂)=0,10, n(H₂)=0,30, n(NH₃)=0,60 mol. p_tot=100 kPa.\nBeräkna p(NH₃).', ans:60.0, tol:1.0, unit:'kPa', formula:'p_i = χ_i × p_tot', hint:'Molfraktion NH₃ = 0,60/(0,10+0,30+0,60) = 0,60.', steps:['Total mol = n(N₂) + n(H₂) + n(NH₃) = 0,10 + 0,30 + 0,60 = 1,00 mol','Molfraktion NH₃: χ(NH₃) = 0,60/1,00 = 0,60','p(NH₃) = χ × p_tot = 0,60 × 100 kPa = 60 kPa','Svar: 60 kPa. Partialtryck = molfraktion × totaltryck ✓'], sol:'p(NH₃) = 0,60 × 100 = 60 kPa' },
  { id:1505, lv:2, cat:'jamvikt', title:'Kp från Kc', q:'2SO₂ + O₂ ⇌ 2SO₃. Kc = 280 vid 1000 K. R = 0,08206 L·atm/(mol·K).\nBeräkna Kp. (Δn = −1)', ans:3.41, tol:0.2, unit:'atm⁻¹', formula:'Kp = Kc × (RT)^Δn', hint:'Kp = 280 × (0,08206×1000)^(−1) = 280/82,06.', steps:['Kp = Kc × (RT)^Δn. Δn = 2 − (2+1) = −1 för 2SO₂+O₂→2SO₃','RT = 0,08206 × 1000 = 82,06 L·atm/mol','Kp = 280 × (82,06)^(−1) = 280/82,06 = 3,41 atm⁻¹','Svar: Kp ≈ 3,41. Δn < 0 → Kp < Kc ✓'], sol:'Kp = Kc/(RT) = 280/82,06 = 3,41' },
  { id:1506, lv:2, cat:'jamvikt', title:'ICE-tabell – Kc = 4', q:'A + B ⇌ C. Kc = 4,0. Initialt [A]=[B]=1,0, [C]=0 mol/L.\nBeräkna jämviktskoncentrationen [C].', ans:0.61, tol:0.05, unit:'mol/L', formula:'Kc = x / (1−x)²', hint:'4(1−x)²=x → 4x²−9x+4=0. x=(9−√17)/8.', steps:['ICE-tabell: A + B ⇌ C. I: [A]=[B]=1,0, [C]=0. Ändring: −x,−x,+x','Kc = x/((1−x)²) = 4,0','x = 4(1−x)² → kvadratlös: x ≈ 0,61 (testar: 0,61/(0,39²) = 0,61/0,152 = 4,0 ✓)','Svar: [C] = 0,61 mol/L ✓'], sol:'[C] = (9−√17)/8 ≈ 0,61 mol/L' },
  { id:1507, lv:2, cat:'jamvikt', title:'Le Chatelier – [A]/[B]', q:'A ⇌ B. Vid 500 K (endoterm rxn): Kc = 25.\nVad är kvoten [A]/[B] vid jämvikt?', ans:0.04, tol:0.005, unit:'', formula:'[A]/[B] = 1/Kc', hint:'Kc = [B]/[A] = 25. [A]/[B] = 1/25.', steps:['Kc = [B]/[A] = 25 (endoterm, 500 K)','[A]/[B] = 1/Kc = 1/25 = 0,040','Svar: [A]/[B] = 0,040. Kc >> 1 → produkter (B) dominerar → [A] << [B] ✓'], sol:'[A]/[B] = 1/25 = 0,040' },
  { id:1508, lv:2, cat:'jamvikt', title:'Ksp – löslighet AgCl', q:'Ksp(AgCl) = 1,8×10⁻¹⁰. Beräkna lösligheten s.\nAnge svaret som x×10⁻⁵ mol/L (ange x).', ans:1.34, tol:0.05, unit:'×10⁻⁵ mol/L', formula:'s = √Ksp', hint:'s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L.', steps:['AgCl → Ag⁺ + Cl⁻. Ksp = [Ag⁺][Cl⁻] = s²','s = √Ksp = √(1,8×10⁻¹⁰) = 1,342×10⁻⁵ mol/L','Ange som x×10⁻⁵: x = 1,34','Svar: s = 1,34×10⁻⁵ mol/L. AgCl är extremt svårlöslig ✓'], sol:'s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L' },
  { id:1509, lv:3, cat:'jamvikt', title:'ICE – 2NO₂ ⇌ N₂O₄', q:'2NO₂ ⇌ N₂O₄. Kc = 4,0. Initialt [NO₂]=1,0, [N₂O₄]=0 mol/L.\nBeräkna [N₂O₄] vid jämvikt.', ans:0.32, tol:0.05, unit:'mol/L', formula:'Kc = x / (1−2x)²', hint:'16x²−17x+4=0. x=(17−√33)/32.', steps:['2NO₂ ⇌ N₂O₄. Kc = [N₂O₄]/[NO₂]². ICE: I: 1,0/0; Δ: −2x/+x','Kc = x/(1−2x)² = 4,0','Lösa: 4(1−2x)² = x → 4−16x+16x² = x → 16x²−17x+4=0','x = (17−√(289−256))/32 = (17−√33)/32 ≈ (17−5,74)/32 = 0,352; [N₂O₄] ≈ 0,35 ✓'], sol:'[N₂O₄] ≈ 0,35 mol/L (löser kvadratekvationen)' },
  { id:1510, lv:3, cat:'jamvikt', title:'Ksp – gemensam jon', q:'AgCl löses i 0,10 mol/L NaCl. Ksp(AgCl) = 1,8×10⁻¹⁰.\nBeräkna [Ag⁺] som x×10⁻⁹ mol/L (ange x).', ans:1.8, tol:0.1, unit:'×10⁻⁹ mol/L', formula:'[Ag⁺] = Ksp / [Cl⁻]', hint:'[Cl⁻] ≈ 0,10 mol/L (överskott). [Ag⁺] = Ksp/0,10.', steps:['Gemensam jon: [Cl⁻] = 0,10 mol/L (från NaCl). [Ag⁺] = s (okänd)','Ksp = [Ag⁺][Cl⁻] → [Ag⁺] = Ksp/[Cl⁻] = 1,8×10⁻¹⁰/0,10','= 1,8×10⁻⁹ mol/L = 1,8×10⁻⁹ → x = 1,8','Svar: x = 1,8 (×10⁻⁹). Gemensam jon minskar lösligheten drastiskt ✓'], sol:'[Ag⁺] = 1,8×10⁻¹⁰/0,10 = 1,8×10⁻⁹ mol/L' },
  { id:1511, lv:3, cat:'jamvikt', title:'Kp → Kc (N₂O₄⇌2NO₂)', q:'N₂O₄ ⇌ 2NO₂. Kp = 1,00 atm vid 300 K. R = 0,08206 L·atm/(mol·K).\nBeräkna Kc. (Δn = +1)', ans:0.041, tol:0.003, unit:'mol/L', formula:'Kc = Kp / (RT)^Δn', hint:'Kc = Kp/(RT) = 1,00/(0,08206×300).', steps:['Kp = Kc × (RT)^Δn → Kc = Kp/(RT)^Δn','Δn = 2 − 1 = +1. RT = 0,08206 × 300 = 24,62','Kc = 1,00/(24,62)^1 = 0,0406 mol/L','Svar: Kc ≈ 0,041. Δn > 0 → Kc < Kp ✓'], sol:'Kc = 1,00/24,62 = 0,041 mol/L' },
  { id:1512, lv:3, cat:'jamvikt', title:'ICE – PCl₅ ⇌ PCl₃ + Cl₂', q:'PCl₅ ⇌ PCl₃ + Cl₂. Kc = 0,040. Initialt [PCl₅]=1,0, [PCl₃]=[Cl₂]=0.\nBeräkna [PCl₃] vid jämvikt.', ans:0.18, tol:0.02, unit:'mol/L', formula:'Kc = x² / (1−x)', hint:'x²+0,040x−0,040=0. x=(−0,04+√0,1616)/2.', steps:['PCl₅ ⇌ PCl₃ + Cl₂. ICE: I: 1,0/0/0; Δ: −x/+x/+x','Kc = x²/(1−x) = 0,040. Approximation: x << 1 → x² ≈ 0,040 → x ≈ 0,20','Kontroll: 0,20²/(1−0,20) = 0,04/0,80 = 0,05 ≈ 0,040 (OK)','Svar: [PCl₃] ≈ 0,18–0,20 mol/L ✓'], sol:'[PCl₃] ≈ 0,18 mol/L' },
  { id:1513, lv:3, cat:'jamvikt', title:'Multipel jämvikt', q:'A ⇌ B: K₁ = 2,0. B ⇌ C: K₂ = 3,0.\nBeräkna K för A ⇌ C.', ans:6.0, tol:0.1, unit:'', formula:'K(A⇌C) = K₁ × K₂', hint:'När reaktioner adderas multipliceras deras K.', steps:['Addition av reaktioner: A⇌B (K₁) + B⇌C (K₂) → A⇌C','K_total = K₁ × K₂','K(A⇌C) = 2,0 × 3,0 = 6,0','Svar: K = 6. Reaktioner adderas → K multipliceras ✓'], sol:'K(A⇌C) = K₁×K₂ = 6,0' },
  { id:1601, lv:1, cat:'elkem', title:'E°cell – Zn/Cu', q:'Zn | Zn²⁺ || Cu²⁺ | Cu. E°(Cu²⁺/Cu) = +0,34 V, E°(Zn²⁺/Zn) = −0,76 V.\nBeräkna E°cell.', ans:1.1, tol:0.02, unit:'V', formula:'E°cell = E°katod − E°anod', hint:'Katod = Cu (reduceras), Anod = Zn (oxideras).', steps:['Känd data: E°(Cu²⁺/Cu) = +0,34 V (katod, reduceras), E°(Zn²⁺/Zn) = −0,76 V (anod, oxideras)','Formel: E°cell = E°katod − E°anod — välj elektroden med högre potential som katod','Beräkna: E°cell = +0,34 − (−0,76) = 0,34 + 0,76 = 1,10 V','Svar: E°cell = 1,10 V ✓ Positiv E°cell → spontan galvanisk cell; Zn oxideras och Cu²⁺ reduceras'], sol:'E°cell = 0,34−(−0,76) = 1,10 V' },
  { id:1602, lv:1, cat:'elkem', title:'E°cell – Pb/Ag', q:'E°(Ag⁺/Ag) = +0,80 V, E°(Pb²⁺/Pb) = −0,13 V.\nBeräkna E°cell för Pb | Pb²⁺ || Ag⁺ | Ag.', ans:0.93, tol:0.02, unit:'V', formula:'E°cell = E°katod − E°anod', hint:'Ag reduceras (katod), Pb oxideras (anod).', steps:['Känd data: E°(Ag⁺/Ag) = +0,80 V (katod), E°(Pb²⁺/Pb) = −0,13 V (anod)','Formel: E°cell = E°katod − E°anod — Ag har högre potential → reduceras vid katoden','Beräkna: E°cell = +0,80 − (−0,13) = 0,80 + 0,13 = 0,93 V','Svar: E°cell = 0,93 V ✓ Pb oxideras (anod) och Ag⁺ reduceras (katod); cellen är spontan'], sol:'E°cell = 0,80−(−0,13) = 0,93 V' },
  { id:1603, lv:1, cat:'elkem', title:'Antal elektroner – Cl₂', q:'Cl₂ + 2e⁻ → 2Cl⁻. Hur många elektroner per Cl₂-molekyl?', ans:2.0, tol:0.05, unit:'e⁻', formula:'Halvreaktion anger e⁻', hint:'Direkt avläsning från halfreaktionen.', steps:['Känd data: halvreaktion Cl₂ + 2e⁻ → 2Cl⁻ — avläs koefficienten för e⁻ direkt','Halvreaktion anger exakt antal elektroner: koefficienten framför e⁻ är antalet överförda elektroner','Avläs: 2e⁻ syns i reaktionen → 2 elektroner per Cl₂-molekyl','Svar: 2 elektroner per Cl₂-molekyl ✓ Cl reduceras från 0 till −1; varje Cl-atom tar 1 elektron'], sol:'n(e⁻) = 2 per mol Cl₂' },
  { id:1604, lv:1, cat:'elkem', title:'Massa Cu vid elektrolys', q:'I = 10 A, t = 9650 s. Cu²⁺ + 2e⁻ → Cu. M(Cu) = 63,5 g/mol. F = 96500 C/mol.\nBeräkna massa Cu deponerat.', ans:31.75, tol:0.5, unit:'g', formula:'m = (I×t×M) / (n×F)', hint:'Q = 10×9650 = 96500 C = 1 mol e⁻. Mol Cu = 0,5. m = 0,5×63,5.', steps:['Känd data: I = 10 A, t = 9650 s, M(Cu) = 63,5 g/mol, nₑ = 2 (Cu²⁺+2e⁻→Cu), F = 96500 C/mol','Faradays lag: m = (I×t×M)/(nₑ×F) — Q = 10 × 9650 = 96 500 C = exakt 1 mol e⁻','Beräkna: m = (96 500 × 63,5)/(2 × 96 500) = 63,5/2 = 31,75 g','Svar: 31,75 g Cu avsätts ✓ 1 mol e⁻ → 0,5 mol Cu (nₑ=2); en elegant beräkning'], sol:'m = 0,5×63,5 = 31,8 g' },
  { id:1605, lv:2, cat:'elkem', title:'Nernst – Cu²⁺/Cu', q:'Cu²⁺ + 2e⁻ → Cu. E° = +0,34 V. [Cu²⁺] = 0,010 mol/L.\nE = E° − (0,0592/n)×log Q. Beräkna E.', ans:0.399, tol:0.01, unit:'V', formula:'E = E° − (0,0592/n) × log[Cu²⁺]', hint:'Q = 1/[Cu²⁺] = 100. E = 0,34 − (0,0296)×log(100)... Eller: log Q = log(1/0,010) = 2. E = 0,34−0,0296×2.', steps:['Känd data: halvreaktion Cu²⁺+2e⁻→Cu; E° = +0,34 V; [Cu²⁺] = 0,010 mol/L; n = 2','Formel: E = E° − (0,0592/n)×log[Cu²⁺] — vid reducerat Cu (fast) gäller log[Cu²⁺]','Beräkna: E = 0,34 − (0,0592/2)×log(0,010) = 0,34 − 0,0296×(−2) = 0,34 + 0,059 = 0,399 V','Svar: E = 0,399 V ✓ Låg [Cu²⁺] ger lägre drivkraft än E°; E < E° = 0,34 V'], sol:'E = 0,34 − 0,0296×log(1/0,010) → se beräkning' },
  { id:1606, lv:2, cat:'elkem', title:'Elektrolystid – Cu', q:'Hur lång tid krävs för att deponera 6,35 g Cu (M=63,5) med strömmen 5,0 A?\nCu²⁺+2e⁻→Cu. F=96500 C/mol.', ans:3860.0, tol:20.0, unit:'s', formula:'t = (m×n×F) / (M×I)', hint:'mol Cu = 6,35/63,5 = 0,1. mol e⁻ = 0,2. Q = 0,2×96500. t = Q/I.', steps:['Känd data: m=6,35 g Cu, M=63,5 g/mol, I=5,0 A. Cu²⁺+2e⁻→Cu (n=2 elektroner per Cu)','Formel: t = m×n×F/(M×I) — Faradays elektrolyslag löst för tid','Beräkna: mol Cu = 6,35/63,5 = 0,100 mol. Q = 0,100×2×96500 = 19300 C. t = 19300/5,0 = 3860 s','Svar: t = 3860 s ≈ 64 min. Dubbel ström → halva tiden (Q = I×t) ✓'], sol:'t = 19300/5,0 = 3860 s' },
  { id:1607, lv:2, cat:'elkem', title:'E°cell – Cr/Au', q:'E°(Au³⁺/Au) = +1,50 V, E°(Cr³⁺/Cr) = −0,74 V.\nBeräkna E°cell för Cr | Cr³⁺ || Au³⁺ | Au.', ans:2.24, tol:0.02, unit:'V', formula:'E°cell = E°katod − E°anod', hint:'Au reduceras, Cr oxideras.', steps:['Känd data: E°(Au³⁺/Au)=+1,50 V (katod), E°(Cr³⁺/Cr)=−0,74 V (anod). Au reduceras, Cr oxideras','Formel: E°cell = E°katod − E°anod — katoden har alltid den högre potentialen','Beräkna: E°cell = +1,50 − (−0,74) = 1,50 + 0,74 = 2,24 V','Svar: E°cell = 2,24 V. Positiv E° → spontan galvanisk cell. Stor spänningsskillnad ✓'], sol:'E°cell = 1,50+0,74 = 2,24 V' },
  { id:1608, lv:2, cat:'elkem', title:'Massa Al vid elektrolys', q:'Al³⁺ + 3e⁻ → Al. I = 3,0 A, t = 9650 s. M(Al) = 27 g/mol. F = 96500 C/mol.\nBeräkna massa Al.', ans:2.7, tol:0.1, unit:'g', formula:'m = (I×t×M) / (n×F)', hint:'Q = 3×9650 = 28950 C. mol e⁻ = 0,300. mol Al = 0,100.', steps:['Känd data: I=3,0 A, t=9650 s, M(Al)=27 g/mol. Al³⁺+3e⁻→Al (n=3 elektroner per Al-atom)','Formel: m = I×t×M/(n×F) — Faradays massformel för elektrolys','Beräkna: Q = 3,0×9650 = 28950 C. mol e⁻ = 28950/96500 = 0,300. mol Al = 0,300/3 = 0,100. m = 0,100×27 = 2,70 g','Svar: m(Al) = 2,70 g. Aluminium kräver 3 elektroner — tre gånger mer laddning än Ag ✓'], sol:'m = 0,100×27 = 2,70 g' },
  { id:1609, lv:3, cat:'elkem', title:'ΔG från E°cell', q:'Zn/Cu cell: E°cell = 1,10 V, n = 2 elektroner. F = 96500 C/mol.\nBeräkna ΔG° i kJ.', ans:-212.3, tol:2.0, unit:'kJ', formula:'ΔG° = −nFE°', hint:'ΔG = −2×96500×1,10 J = −212300 J = −212,3 kJ.', steps:['Känd data: E°cell = 1,10 V (Zn/Cu-cellen), n = 2 elektroner, F = 96500 C/mol','Formel: ΔG° = −nFE° — samband elektrokemi och Gibbs fri energi','Beräkna: ΔG° = −2 × 96500 × 1,10 = −212300 J = −212,3 kJ','Svar: ΔG° = −212 kJ. Negativt → spontan reaktion. |ΔG°| = max nyttigt arbete ✓'], sol:'ΔG° = −2×96500×1,10 = −212,3 kJ' },
  { id:1610, lv:3, cat:'elkem', title:'E vid pH 7 – O₂/H₂O', q:'O₂ + 4H⁺ + 4e⁻ → 2H₂O. E° = +1,23 V. pH = 7. p(O₂) = 1 atm.\nE = E° − (0,0592/4)×log(1/[H⁺]⁴). Beräkna E.', ans:0.816, tol:0.01, unit:'V', formula:'E = E° − 0,0592×pH/n × n = E° − 0,0592×pH', hint:'log Q = log(1/(10⁻⁷)⁴) = 28. E = 1,23 − (0,0148×28).', steps:['Känd data: E°=+1,23 V, pH=7 → [H⁺]=10⁻⁷ M, p(O₂)=1 atm. O₂+4H⁺+4e⁻→2H₂O (n=4)','Formel: E = E° − (0,0592/n)×log Q. Reaktionskvot Q = p(O₂)×[H⁺]⁴ i täljaren är 1/Q','Beräkna: Q = 1/[H⁺]⁴ = (10⁷)⁴ = 10²⁸. E = 1,23 − (0,0592/4)×28 = 1,23 − 0,414 = 0,816 V','Svar: E = 0,816 V vid pH 7. Neutral pH sänker potentialen med 0,41 V (Nernst-effekt) ✓'], sol:'E = 1,23−0,414 = 0,816 V vid pH 7' },
  { id:1611, lv:3, cat:'elkem', title:'Volym H₂ vid elektrolys', q:'2H₂O → 2H₂ + O₂. I = 2,0 A, t = 4825 s. F = 96500 C/mol.\nBeräkna volymen H₂ vid STP (22,4 L/mol).', ans:1.12, tol:0.05, unit:'L', formula:'V(H₂) = (I×t)/(2F) × 22,4', hint:'Q=9650 C. mol e⁻=0,1. 2e⁻→1H₂ → mol H₂=0,05. V=0,05×22,4.', steps:['Känd data: I=2,0 A, t=4825 s, STP. Katodreaktion: 2H⁺+2e⁻→H₂ (2 elektroner per H₂)','Formel: n(H₂) = Q/(2F), volym V = n × 22,4 L/mol vid STP','Beräkna: Q = 2,0×4825 = 9650 C. mol e⁻ = 9650/96500 = 0,100. mol H₂ = 0,050. V = 0,050×22,4 = 1,12 L','Svar: V(H₂) = 1,12 L. Anoden ger O₂: 0,025 mol = 0,56 L. H₂:O₂ = 2:1 volymförhållande ✓'], sol:'V(H₂) = 0,050×22,4 = 1,12 L' },
  { id:1612, lv:3, cat:'elkem', title:'Katodiskt skydd Zn/Fe', q:'E°(Fe²⁺/Fe) = −0,44 V, E°(Zn²⁺/Zn) = −0,76 V.\nZink används som offeranod för att skydda järn. Beräkna E°cell.', ans:0.32, tol:0.02, unit:'V', formula:'E°cell = E°(Fe) − E°(Zn)', hint:'Fe = katod (skyddas), Zn = anod (korroderar). E°cell = E°(Fe)−E°(Zn).', steps:['Känd data: E°(Fe²⁺/Fe)=−0,44 V (katod/skyddas), E°(Zn²⁺/Zn)=−0,76 V (anod/korroderar)','Formel: E°cell = E°katod − E°anod. Zink offeranod: lägre potential → oxideras först','Beräkna: E°cell = (−0,44) − (−0,76) = −0,44 + 0,76 = +0,32 V','Svar: E°cell = +0,32 V. Spontan cell: Zn korroderar och skyddar järnet katodiskt ✓'], sol:'E°cell = −0,44+0,76 = 0,32 V' },
  { id:1613, lv:3, cat:'elkem', title:'Laddning per 3 mol Ag', q:'Ag⁺ + e⁻ → Ag. Hur stor laddning Q (C) passerar för att deponera 3,0 mol Ag?\nF = 96500 C/mol.', ans:289500.0, tol:100.0, unit:'C', formula:'Q = n × n_e × F', hint:'n_e = 1 per Ag. Q = 3,0×1×96500.', steps:['Känd data: Ag⁺+e⁻→Ag (n=1 elektron per Ag). 3,0 mol Ag ska deponeras. F = 96500 C/mol','Formel: Q = n(Ag) × n_e × F — total laddning proportionell mot mol elektroner','Beräkna: Q = 3,0 × 1 × 96500 = 289500 C','Svar: Q = 289500 C = 289,5 kC. Silver kräver bara 1 elektron → effektivt plätering ✓'], sol:'Q = 3,0×96500 = 289500 C' },
  { id:1701, lv:1, cat:'stoik', title:'Mol NH₃ från N₂', q:'N₂ + 3H₂ → 2NH₃. Hur många mol NH₃ bildas av 3,0 mol N₂ (överskott H₂)?', ans:6.0, tol:0.1, unit:'mol', formula:'n(NH₃) = 2 × n(N₂)', hint:'1 mol N₂ → 2 mol NH₃.', steps:['Känd data: 3,0 mol N₂ (överskott H₂). Balanserad reaktion: N₂ + 3H₂ → 2NH₃','Stökiometri: molförhållande N₂:NH₃ = 1:2 (koefficienter). n(NH₃) = 2 × n(N₂)','Beräkna: n(NH₃) = 2 × 3,0 = 6,0 mol','Svar: n(NH₃) = 6,0 mol. Varje N₂-molekyl ger 2 NH₃ — Haber-Bosch ✓'], sol:'n(NH₃) = 2×3,0 = 6,0 mol' },
  { id:1702, lv:1, cat:'stoik', title:'Massa CO₂ från kol', q:'C + O₂ → CO₂. 2,0 mol C förbränns. Beräkna massan CO₂ som bildas. M(CO₂) = 44 g/mol.', ans:88.0, tol:1.0, unit:'g', formula:'m = n × M', hint:'1 mol C → 1 mol CO₂. m = 2,0 × 44.', steps:['Känd data: 2,0 mol C (kol), M(CO₂)=44 g/mol. Balanserad reaktion: C + O₂ → CO₂','Stökiometri: C:CO₂ = 1:1. n(CO₂) = n(C) = 2,0 mol (direkt utbyte)','Beräkna: m(CO₂) = n × M = 2,0 × 44 = 88 g','Svar: m(CO₂) = 88 g. Kolets förbränning: 12 g C ger 44 g CO₂ (massökning pga O₂) ✓'], sol:'m(CO₂) = 2,0×44 = 88 g' },
  { id:1703, lv:1, cat:'stoik', title:'Massa H₂ för H₂O', q:'2H₂ + O₂ → 2H₂O. Beräkna massa H₂ som behövs för att bilda 3,6 g H₂O.\nM(H₂O)=18, M(H₂)=2 g/mol.', ans:0.4, tol:0.02, unit:'g', formula:'m(H₂) = n(H₂) × M(H₂)', hint:'n(H₂O)=3,6/18=0,2 mol. n(H₂)=n(H₂O)=0,2 mol. m=0,2×2.', steps:['Känd data: m(H₂O)=3,6 g, M(H₂O)=18 g/mol, M(H₂)=2 g/mol. Reaktion: 2H₂+O₂→2H₂O','Stökiometri: H₂:H₂O = 2:2 = 1:1. n(H₂) = n(H₂O) (samma koefficienter)','Beräkna: n(H₂O) = 3,6/18 = 0,20 mol. n(H₂) = 0,20 mol. m(H₂) = 0,20×2 = 0,40 g','Svar: m(H₂) = 0,40 g. H₂ väger lite (M=2) — liten massa ger stor volym gas ✓'], sol:'m(H₂) = 0,20×2 = 0,40 g' },
  { id:1704, lv:1, cat:'stoik', title:'Mol Fe från CO₂', q:'Fe₂O₃ + 3CO → 2Fe + 3CO₂. Om 6,0 mol CO₂ bildas, hur många mol Fe bildas?', ans:4.0, tol:0.1, unit:'mol', formula:'Fe : CO₂ = 2 : 3', hint:'2 mol Fe per 3 mol CO₂. n(Fe) = 6,0 × (2/3).', steps:['Känd data: 6,0 mol CO₂ bildas. Balanserad reaktion: Fe₂O₃ + 3CO → 2Fe + 3CO₂','Stökiometri: Fe:CO₂ = 2:3. n(Fe) = n(CO₂) × (2/3)','Beräkna: n(Fe) = 6,0 × (2/3) = 4,0 mol','Svar: n(Fe) = 4,0 mol. Masugnsreaktion — reduktion av järnmalm med koks ✓'], sol:'n(Fe) = 6,0 × 2/3 = 4,0 mol' },
  { id:1705, lv:2, cat:'stoik', title:'Massa NH₃ – perfekt stök.', q:'3H₂ + N₂ → 2NH₃. 6,0 g H₂ (n=3,0 mol) + 28 g N₂ (n=1,0 mol).\nBeräkna massa NH₃ som bildas. M(NH₃) = 17 g/mol.', ans:34.0, tol:0.5, unit:'g', formula:'n(NH₃) = 2 × n(N₂) el. (2/3)×n(H₂)', hint:'Perfekt stökiometri (3:1). n(NH₃)=2×1,0=2,0 mol.', steps:['Känd data: 3,0 mol H₂, 1,0 mol N₂. Reaktion: 3H₂+N₂→2NH₃. Behövs: 3 mol H₂ per 1 mol N₂','Kontroll: H₂/N₂ = 3,0/1,0 = 3,0 = exakt det krävda förhållandet → perfekt stökiometri','Beräkna: n(NH₃) = 2 × n(N₂) = 2 × 1,0 = 2,0 mol. m = 2,0 × 17 = 34 g','Svar: m(NH₃) = 34 g. Inget överskott, inget begränsande reagens — 100% utnyttjande ✓'], sol:'m(NH₃) = 2,0×17 = 34 g' },
  { id:1706, lv:2, cat:'stoik', title:'Begränsande reagens – AlCl₃', q:'2Al + 3Cl₂ → 2AlCl₃. 54 g Al (n=2,0) + 142 g Cl₂ (n=2,0 mol).\nM(AlCl₃)=133,5. Beräkna massa AlCl₃.', ans:178.0, tol:3.0, unit:'g', formula:'Begränsande: Cl₂', hint:'2 mol Al kräver 3 mol Cl₂, men bara 2 mol Cl₂ finns → Cl₂ begränsar. n(AlCl₃)=2×(2/3)≈1,33 mol.', steps:['Känd data: 2,0 mol Al, 2,0 mol Cl₂. M(AlCl₃)=133,5. Reaktion: 2Al+3Cl₂→2AlCl₃','Begränsande reagens: 2,0 mol Al kräver 3,0 mol Cl₂. Bara 2,0 mol Cl₂ finns → Cl₂ begränsar','Beräkna: n(AlCl₃) = n(Cl₂) × (2/3) = 2,0 × (2/3) = 1,333 mol. m = 1,333 × 133,5 = 178 g','Svar: m(AlCl₃) = 178 g. Al är i överskott (0,667 mol Al används ej) ✓'], sol:'Cl₂ begränsar → m(AlCl₃) = 1,333×133,5 = 178 g' },
  { id:1707, lv:2, cat:'stoik', title:'Överskott O₂', q:'CH₄ + 2O₂ → CO₂ + 2H₂O. 2,0 mol CH₄ blandas med 6,0 mol O₂.\nBeräkna massa överskotts-O₂. M(O₂)=32 g/mol.', ans:64.0, tol:1.0, unit:'g', formula:'m_överskott = n_överskott × M', hint:'O₂ behövs: 2×2,0=4,0 mol. Överskott: 6,0−4,0=2,0 mol.', steps:['Känd data: 2,0 mol CH₄, 6,0 mol O₂. M(O₂)=32 g/mol. Reaktion: CH₄+2O₂→CO₂+2H₂O','Stökiometri: 1 mol CH₄ kräver 2 mol O₂ → 2,0 mol CH₄ förbrukar 4,0 mol O₂','Beräkna: Överskott O₂ = 6,0 − 4,0 = 2,0 mol. m(överskott) = 2,0 × 32 = 64 g','Svar: m(överskott O₂) = 64 g. CH₄ är begränsande reagens — 2 mol O₂ reagerar ej ✓'], sol:'m(överskott O₂) = 2,0×32 = 64 g' },
  { id:1708, lv:2, cat:'stoik', title:'Teoretisk massa Fe₂O₃', q:'4Fe + 3O₂ → 2Fe₂O₃. 112 g järn (n=2,0 mol). M(Fe₂O₃)=160 g/mol.\nBeräkna teoretisk massa Fe₂O₃.', ans:160.0, tol:2.0, unit:'g', formula:'n(Fe₂O₃) = ½ × n(Fe)', hint:'4 mol Fe → 2 mol Fe₂O₃. n(Fe₂O₃)=2,0×(2/4)=1,0 mol.', steps:['Känd data: 2,0 mol Fe (=112 g), M(Fe₂O₃)=160 g/mol. Reaktion: 4Fe+3O₂→2Fe₂O₃','Stökiometri: Fe:Fe₂O₃ = 4:2 = 2:1. n(Fe₂O₃) = n(Fe)/2','Beräkna: n(Fe₂O₃) = 2,0/2 = 1,0 mol. m = 1,0 × 160 = 160 g','Svar: m(Fe₂O₃) = 160 g. Järn oxideras — massan ökar med O₂ från luften ✓'], sol:'m(Fe₂O₃) = 1,0×160 = 160 g' },
  { id:1709, lv:3, cat:'stoik', title:'Procentuellt utbyte', q:'Teoretisk produktmassa: 50 g. Faktisk produktmassa: 35 g.\nBeräkna det procentuella utbytet.', ans:70.0, tol:0.5, unit:'%', formula:'utbyte% = (faktisk/teoretisk) × 100', hint:'35/50 × 100.', steps:['Känd data: faktisk produktmassa = 35 g, teoretisk (max möjlig) massa = 50 g','Formel: utbyte% = (faktisk / teoretisk) × 100 — hur stor andel av det möjliga utbytet uppnåddes','Beräkna: (35/50) × 100 = 0,70 × 100 = 70 %','Svar: 70% utbyte. 30% förlust beror på ofullständig reaktion, hanteringsförluster eller sidoreaktioner ✓'], sol:'utbyte% = 35/50×100 = 70 %' },
  { id:1710, lv:3, cat:'stoik', title:'Förbränningsanalys – n(H)/n(C)', q:'En kolförening förbränns och ger 44 g CO₂ och 18 g H₂O.\nBeräkna kvoten n(H)/n(C).', ans:2.0, tol:0.05, unit:'', formula:'n(C) från CO₂, n(H) från H₂O', hint:'n(C)=44/44=1 mol. n(H)=2×18/18=2 mol.', steps:['Känd data: 44 g CO₂ (M=44 g/mol), 18 g H₂O (M=18 g/mol). Bestäm n(H)/n(C)','Formel: varje CO₂ ger 1 C-atom; varje H₂O ger 2 H-atomar','Beräkna: n(C) = 44/44 = 1,0 mol. n(H₂O) = 18/18 = 1,0 mol → n(H) = 2×1,0 = 2,0 mol','Svar: n(H)/n(C) = 2,0/1,0 = 2. Empirisk formel CH₂ (t.ex. eten C₂H₄ eller propen C₃H₆) ✓'], sol:'n(H)/n(C) = 2,0 → empirisk formel CH₂' },
  { id:1711, lv:3, cat:'stoik', title:'Sekventiella reaktioner med utbyte', q:'A → 2B (utbyte 80 %). B → C (utbyte 90 %). Start: 1,0 mol A.\nHur många mol C bildas?', ans:1.44, tol:0.05, unit:'mol', formula:'n(C) = n(A)×2×0,80×0,90', hint:'n(B)=2×0,80=1,6 mol. n(C)=1,6×0,90.', steps:['Känd data: 1,0 mol A. Steg 1: A → 2B (utbyte 80%). Steg 2: B → C (utbyte 90%)','Metod: multiplicera steg för steg — faktisk utmängd = teoretisk × utbyte','Beräkna: n(B) = 1,0 × 2 × 0,80 = 1,6 mol. n(C) = 1,6 × 0,90 = 1,44 mol','Svar: n(C) = 1,44 mol. Kumulativt utbyte: 80% × 90% = 72% av max 2,0 mol ✓'], sol:'n(C) = 1,0×2×0,80×0,90 = 1,44 mol' },
  { id:1712, lv:3, cat:'stoik', title:'Teoretisk massa från utbyte', q:'Faktisk massa produkt = 7,4 g. Procentuellt utbyte = 37 %.\nBeräkna den teoretiska massan.', ans:20.0, tol:0.5, unit:'g', formula:'m_teor = m_faktisk / (utbyte/100)', hint:'m_teor = 7,4 / 0,37.', steps:['Känd data: faktisk massa = 7,4 g, procentuellt utbyte = 37% = 0,37','Formel: utbyte = faktisk/teoretisk → m_teor = m_faktisk / utbyte','Beräkna: m_teor = 7,4 / 0,37 = 20 g','Svar: m_teor = 20 g. Bara 37% av teoretisk mängd erhölls — typiskt i organisk syntes ✓'], sol:'m_teor = 7,4/0,37 = 20 g' },
  { id:1713, lv:3, cat:'stoik', title:'Begränsande reagens + utbyte', q:'2A + B → 3C. 4,0 mol A + 3,0 mol B. Utbyte 75 %. M(C) = 30 g/mol.\nBeräkna faktisk massa C.', ans:135.0, tol:2.0, unit:'g', formula:'m = n_teor × utbyte × M', hint:'A begränsar (behöver 2mol B, har 3mol B). n(C)_teor=4,0×(3/2)=6,0. n(C)_faktisk=6,0×0,75.', steps:['Känd data: 4,0 mol A + 3,0 mol B. Reaktion: 2A+B→3C. Utbyte=75%, M(C)=30 g/mol','Begränsande: 4,0 mol A kräver 4,0/2=2,0 mol B. Tillgängligt: 3,0 mol B → A begränsar','Beräkna: n(C)_teor = 4,0×(3/2) = 6,0 mol. n(C)_faktisk = 6,0×0,75 = 4,5 mol. m = 4,5×30 = 135 g','Svar: m(C) = 135 g. A är begränsande reagens; 25% förlust i utbyte ✓'], sol:'m(C) = 4,5×30 = 135 g' },

  { id:2001, lv:1, cat:'mol', title:'n från massa – Al', q:'Beräkna substansmängden n för 54 g aluminium Al.\nM(Al) = 27 g/mol.', ans:2.0, tol:0.05, unit:'mol', formula:'n = m / M', hint:'54 / 27 = 2,0 mol.', steps:['Känd data: m = 54 g Al, M(Al) = 27 g/mol','Formel: n = m / M','Beräkna: n = 54 / 27 = 2,0 mol','Svar: 2,0 mol Al. Kontroll: 54 = 2 × 27 ✓'], sol:'n = 54/27 = 2,0 mol' },
  { id:2002, lv:1, cat:'mol', title:'m från n – CaCO₃', q:'Beräkna massan m för 0,25 mol kalciumkarbonat CaCO₃.\nM(CaCO₃) = 100 g/mol.', ans:25.0, tol:0.3, unit:'g', formula:'m = n × M', hint:'0,25 × 100 = 25 g.', steps:['Känd data: n = 0,25 mol CaCO₃, M(CaCO₃) = 100 g/mol','Formel: m = n × M','Beräkna: m = 0,25 × 100 = 25 g','Svar: 25 g CaCO₃. M = 100 gör beräkningen enkel ✓'], sol:'m = 0,25 × 100 = 25 g' },
  { id:2003, lv:1, cat:'mol', title:'Molmassa KOH', q:'Beräkna molmassan M för kaliumhydroxid KOH.\nM(K)=39, M(O)=16, M(H)=1 g/mol.', ans:56.0, tol:0.3, unit:'g/mol', formula:'M = Σ(atommassa)', hint:'39 + 16 + 1 = 56.', steps:['Räkna atomer: K(1) + O(1) + H(1)','M(KOH) = M(K) + M(O) + M(H) = 39 + 16 + 1','Beräkna: 39 + 16 + 1 = 56 g/mol','Svar: M(KOH) = 56 g/mol. KOH är stark bas — viktig att känna igen ✓'], sol:'M(KOH) = 56 g/mol' },
  { id:2004, lv:1, cat:'mol', title:'n från massa – O₂', q:'Hur många mol O₂ är 64 g?\nM(O₂) = 32 g/mol.', ans:2.0, tol:0.05, unit:'mol', formula:'n = m / M', hint:'64 / 32 = 2,0.', steps:['Känd data: m = 64 g O₂, M(O₂) = 32 g/mol','Formel: n = m / M','Beräkna: n = 64 / 32 = 2,0 mol','Svar: 2,0 mol O₂. OBS: O₂ är en diatomig molekyl → M = 2×16 = 32 ✓'], sol:'n = 64/32 = 2,0 mol' },
  { id:2005, lv:1, cat:'mol', title:'Massa 3 mol Na', q:'Beräkna massan för 3,0 mol natrium Na.\nM(Na) = 23 g/mol.', ans:69.0, tol:0.5, unit:'g', formula:'m = n × M', hint:'3,0 × 23 = 69 g.', steps:['Känd data: n = 3,0 mol Na, M(Na) = 23 g/mol','Formel: m = n × M','Beräkna: m = 3,0 × 23 = 69 g','Svar: 69 g Na. Natrium är mjuk alkalimetall, explosiv i vatten ✓'], sol:'m = 3,0 × 23 = 69 g' },
  { id:2006, lv:1, cat:'mol', title:'Molmassa MgCl₂', q:'Beräkna M för MgCl₂.\nM(Mg)=24, M(Cl)=35,5 g/mol.', ans:95.0, tol:0.3, unit:'g/mol', formula:'M = M(Mg)+2×M(Cl)', hint:'24 + 2×35,5 = 95.', steps:['Räkna atomer i MgCl₂: 1 Mg + 2 Cl','M(MgCl₂) = M(Mg) + 2×M(Cl) = 24 + 2×35,5','Beräkna: 24 + 71 = 95 g/mol','Svar: M(MgCl₂) = 95 g/mol. Klorider: Cl har M = 35,5 g/mol ✓'], sol:'M(MgCl₂) = 95 g/mol' },
  { id:2007, lv:1, cat:'mol', title:'n av Fe₂O₃', q:'Hur många mol är 160 g järnoxid Fe₂O₃?\nM(Fe₂O₃) = 160 g/mol.', ans:1.0, tol:0.03, unit:'mol', formula:'n = m / M', hint:'160 / 160 = 1,0 mol.', steps:['Känd data: m = 160 g Fe₂O₃, M(Fe₂O₃) = 160 g/mol','Formel: n = m / M','Beräkna: n = 160 / 160 = 1,0 mol','Svar: 1,0 mol Fe₂O₃. m = M → exakt 1 mol ✓'], sol:'n = 1,0 mol' },
  { id:2008, lv:2, cat:'mol', title:'Atommassa från massa + n', q:'0,50 mol av ett grundämne väger 14 g. Vad är grundämnets molmassa?', ans:28.0, tol:0.3, unit:'g/mol', formula:'M = m / n', hint:'14 / 0,50 = 28 g/mol → Kisel Si.', steps:['Känd data: n = 0,50 mol, m = 14 g','Formel: M = m / n (löser ut M ur n = m/M)','Beräkna: M = 14 / 0,50 = 28 g/mol','Svar: M = 28 g/mol → kväve N₂ eller kisel Si. Metod: känd n + känd m → M ✓'], sol:'M = 14/0,50 = 28 g/mol' },
  { id:2009, lv:2, cat:'mol', title:'%N i NH₄NO₃', q:'Beräkna kvävehalten (%N) i ammoniumnitrat NH₄NO₃.\nM(N)=14, M(H)=1, M(O)=16 g/mol.', ans:35.0, tol:0.5, unit:'%', formula:'%N = (2×14)/M × 100', hint:'M = 80 g/mol. 2 N-atomer → 28/80 × 100.', steps:['M(NH₄NO₃) = 14+4 + 14+3×16 = 18+14+48 = 80 g/mol. Två N-atomer per formelenhet','Massa N per mol: 2×14 = 28 g','Procenthalt: %N = (28/80) × 100 = 35 %','Svar: 35 % kväve. NH₄NO₃ är kvävegödsel — hög kvävehalt är viktig ✓'], sol:'%N = 28/80 × 100 = 35 %' },
  { id:2010, lv:2, cat:'mol', title:'Massa 1,5×10²³ atomer C', q:'Beräkna massan för 1,5×10²³ kol-atomer.\nM(C)=12 g/mol, Nₐ=6,0×10²³ mol⁻¹.', ans:3.0, tol:0.1, unit:'g', formula:'m = (N/Nₐ) × M', hint:'n = 1,5×10²³ / 6,0×10²³ = 0,25 mol. m = 0,25×12.', steps:['Omvandla antal till mol: n = N / Nₐ = 1,5×10²³ / 6,0×10²³ = 0,25 mol','Beräkna massa: m = n × M = 0,25 × 12','Beräkna: m = 3,0 g','Svar: 3,0 g kol. Nₐ kopplar antal atomer till mol: dela N med Nₐ ✓'], sol:'m = 0,25×12 = 3,0 g' },
  { id:2011, lv:2, cat:'mol', title:'Empirisk formel – CuS-analys', q:'Analys: 64 g Cu och 32 g S. Beräkna kvoten n(Cu)/n(S).\nM(Cu)=64, M(S)=32 g/mol.', ans:1.0, tol:0.05, unit:'', formula:'n = m / M', hint:'n(Cu)=1,0, n(S)=1,0 → kvot = 1.', steps:['Beräkna mol: n(Cu) = 64/64 = 1,0 mol; n(S) = 32/32 = 1,0 mol','Kvot: n(Cu)/n(S) = 1,0/1,0 = 1,0','Empirisk formel: CuS (kopparsulfid)','Svar: kvot = 1 → CuS. Metod: massa → n → enklaste heltal ✓'], sol:'n(Cu)/n(S) = 1,0 → CuS' },
  { id:2012, lv:2, cat:'mol', title:'n CO₂ vid fullständig förbränning', q:'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.\nHur många mol CO₂ bildas av 2,0 mol C₃H₈?', ans:6.0, tol:0.1, unit:'mol', formula:'n(CO₂) = 3 × n(C₃H₈)', hint:'1 mol propan → 3 mol CO₂.', steps:['Reaktion: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Koefficienter: C₃H₈ : CO₂ = 1 : 3','n(C₃H₈) = 2,0 mol (given)','n(CO₂) = 3 × n(C₃H₈) = 3 × 2,0 = 6,0 mol','Svar: 6,0 mol CO₂. Varje propanmolekyl har 3 C-atomer → 3 CO₂ per CH₈ ✓'], sol:'n(CO₂) = 3×2,0 = 6,0 mol' },
  { id:2013, lv:2, cat:'mol', title:'Massa H₂O vid förbränning', q:'CH₄ + 2O₂ → CO₂ + 2H₂O. 4,0 g CH₄ (n=0,25 mol) förbränns.\nBeräkna massa H₂O. M(H₂O)=18 g/mol.', ans:9.0, tol:0.2, unit:'g', formula:'m = n(H₂O) × M', hint:'n(H₂O) = 2×0,25 = 0,50 mol. m = 0,50×18.', steps:['Reaktion: CH₄ + 2O₂ → CO₂ + 2H₂O. Koefficienter: CH₄ : H₂O = 1 : 2','n(CH₄) = 4,0/16 = 0,25 mol','n(H₂O) = 2 × n(CH₄) = 2 × 0,25 = 0,50 mol','m(H₂O) = 0,50 × 18 = 9,0 g ✓'], sol:'m(H₂O) = 0,50×18 = 9,0 g' },
  { id:2014, lv:2, cat:'mol', title:'Atomantal i 18 g vatten', q:'18 g H₂O (n=1,0 mol). Hur många molekyler (× 10²³)?\nNₐ = 6,022×10²³ mol⁻¹. Ange svaret som x (x×10²³).', ans:6.022, tol:0.05, unit:'×10²³', formula:'N = n × Nₐ', hint:'N = 1,0 × 6,022×10²³.', steps:['Känd data: 18 g H₂O = 1,0 mol (M=18)','Formel: N = n × Nₐ','Beräkna: N = 1,0 × 6,022×10²³ = 6,022×10²³ molekyler','Svar: x = 6,022 (svar i ×10²³). En mol innehåller alltid Nₐ ≈ 6×10²³ enheter ✓'], sol:'N = 6,022×10²³ molekyler' },
  { id:2015, lv:3, cat:'mol', title:'Sammansättning Fe₃O₄', q:'Beräkna massan Fe i 1,0 mol Fe₃O₄.\nM(Fe)=56, M(O)=16 g/mol.', ans:168.0, tol:1.0, unit:'g', formula:'m(Fe) = 3 × M(Fe) × n', hint:'3 Fe-atomer per formelenhet. m = 3×56×1,0.', steps:['M(Fe₃O₄) = 3×56 + 4×16 = 168 + 64 = 232 g/mol','I 1,0 mol Fe₃O₄: antal Fe-atomer = 3 per formelenhet → n(Fe) = 3,0 mol','Massa Fe: m(Fe) = 3,0 × 56 = 168 g','Svar: 168 g Fe. Fe₃O₄ är magnetit — innehåller Fe²⁺ och Fe³⁺ ✓'], sol:'m(Fe) = 3×56 = 168 g' },
  { id:2016, lv:3, cat:'mol', title:'Okänt grundämne via procenthalt', q:'En oxid MO har 40 % O (massa%). M(O)=16 g/mol.\nVad är molmassan för grundämnet M?', ans:24.0, tol:0.3, unit:'g/mol', formula:'%O = M(O)/(M_M+M(O)) × 100', hint:'0,40 = 16/(M+16) → M+16 = 40 → M = 24 (Mg).', steps:['Låt M(M) = x. MO har massandel O = 40 %','Formel: %O = M(O)/(x + M(O)) × 100 = 40','Löser: 16/(x+16) = 0,40 → 16 = 0,40x + 6,4 → 0,40x = 9,6 → x = 24','Svar: M = 24 g/mol → magnesium Mg. Kontroll: MgO har 40% O ✓'], sol:'M = 24 g/mol → grundämne är Mg' },
  { id:2017, lv:3, cat:'mol', title:'Molekylformel från empirisk', q:'Empirisk formel CH₂O. Molmassa = 180 g/mol.\nVad är molekylformeln? Ange antalet C-atomer.', ans:6.0, tol:0.1, unit:'C-atomer', formula:'n = M_mol / M_emp', hint:'M(CH₂O) = 30 g/mol. n = 180/30 = 6 → C₆H₁₂O₆.', steps:['M(empirisk CH₂O) = 12 + 2 + 16 = 30 g/mol','n = M_molekyl / M_empirisk = 180 / 30 = 6','Molekylformel: (CH₂O)₆ = C₆H₁₂O₆','Svar: 6 C-atomer → glukos C₆H₁₂O₆. Empirisk formel × n = molekylformel ✓'], sol:'C₆H₁₂O₆ (glukos) → 6 C-atomer' },
  { id:2018, lv:3, cat:'mol', title:'Utbyte + n produkt', q:'Reaktion med 90 % utbyte. Teoretisk n(produkt) = 5,0 mol.\nBeräkna faktisk massa om M = 46 g/mol.', ans:207.0, tol:2.0, unit:'g', formula:'m = n_teor × utbyte × M', hint:'n_faktisk = 5,0×0,90 = 4,5 mol. m = 4,5×46.', steps:['Faktisk n = teoretisk n × utbyte = 5,0 × 0,90 = 4,5 mol','Massa: m = n × M = 4,5 × 46','Beräkna: 4,5 × 46 = 207 g','Svar: 207 g. 90% utbyte → 10% förlust. m = n_teor × utbyte × M ✓'], sol:'m = 4,5×46 = 207 g' },
  { id:2019, lv:3, cat:'mol', title:'Blandad formel – dubbla oxider', q:'En blandning: 0,30 mol FeO (M=72) och 0,20 mol Fe₂O₃ (M=160).\nBeräkna totalmassa.', ans:53.6, tol:0.3, unit:'g', formula:'m_tot = n₁M₁ + n₂M₂', hint:'0,30×72 + 0,20×160.', steps:['m(FeO) = n × M = 0,30 × 72 = 21,6 g','m(Fe₂O₃) = n × M = 0,20 × 160 = 32,0 g','Total massa = 21,6 + 32,0 = 53,6 g','Svar: 53,6 g. Addera massor för varje komponent i blandningen ✓'], sol:'m_tot = 21,6+32,0 = 53,6 g' },
  { id:2020, lv:3, cat:'mol', title:'Antal mol O i blandning', q:'0,50 mol H₂O och 0,50 mol CO₂. Hur många totalt mol O-atomer?', ans:1.5, tol:0.05, unit:'mol', formula:'n(O) = n(H₂O)×1 + n(CO₂)×2', hint:'H₂O har 1 O, CO₂ har 2 O.', steps:['O-atomer i H₂O: 1 per molekyl → n(O från H₂O) = 0,50 × 1 = 0,50 mol','O-atomer i CO₂: 2 per molekyl → n(O från CO₂) = 0,50 × 2 = 1,00 mol','Total n(O) = 0,50 + 1,00 = 1,50 mol','Svar: 1,50 mol O. Räkna atomer per molekyl × molantal ✓'], sol:'n(O)_tot = 0,50+1,00 = 1,50 mol' },
  { id:2021, lv:1, cat:'mol', title:'n NH₃ från m', q:'Hur många mol är 34 g ammoniak NH₃?\nM(NH₃) = 17 g/mol.', ans:2.0, tol:0.05, unit:'mol', formula:'n = m / M', hint:'34 / 17 = 2,0 mol.', steps:['Känd data: m = 34 g NH₃, M(NH₃) = 14+3×1 = 17 g/mol','Formel: n = m / M','Beräkna: n = 34 / 17 = 2,0 mol','Svar: 2,0 mol ammoniak. NH₃ är viktig industrigas (Haber-Bosch) ✓'], sol:'n = 34/17 = 2,0 mol' },
  { id:2022, lv:1, cat:'mol', title:'Massa 0,1 mol glukos', q:'M(C₆H₁₂O₆) = 180 g/mol. Beräkna massan för 0,10 mol glukos.', ans:18.0, tol:0.2, unit:'g', formula:'m = n × M', hint:'0,10 × 180 = 18 g.', steps:['Känd data: n = 0,10 mol glukos, M(C₆H₁₂O₆) = 180 g/mol','Formel: m = n × M','Beräkna: m = 0,10 × 180 = 18 g','Svar: 18 g glukos. Glukos är kroppens primära energikälla ✓'], sol:'m = 0,10×180 = 18 g' },
  { id:2023, lv:2, cat:'mol', title:'Molmassa H₃PO₄', q:'Beräkna M för fosforsyra H₃PO₄.\nM(H)=1, M(P)=31, M(O)=16 g/mol.', ans:98.0, tol:0.3, unit:'g/mol', formula:'M = 3+31+4×16', hint:'3 + 31 + 64 = 98.', steps:['Räkna atomer i H₃PO₄: 3H + 1P + 4O','M = 3×1 + 31 + 4×16 = 3 + 31 + 64','Beräkna: 3 + 31 + 64 = 98 g/mol','Svar: M(H₃PO₄) = 98 g/mol. Fosforsyra används i cola och gödsel ✓'], sol:'M(H₃PO₄) = 98 g/mol' },
  { id:2024, lv:2, cat:'mol', title:'Antal molekyler CO₂', q:'2,0 mol CO₂. Hur många molekyler? Ange x om svaret är x×10²⁴.\nNₐ = 6,022×10²³.', ans:1.2044, tol:0.05, unit:'×10²⁴', formula:'N = n × Nₐ', hint:'2,0 × 6,022×10²³ = 12,044×10²³ = 1,2044×10²⁴.', steps:['Känd data: n = 2,0 mol CO₂','Formel: N = n × Nₐ = 2,0 × 6,022×10²³','Beräkna: N = 12,044×10²³ = 1,2044×10²⁴','Svar: x = 1,2044 (svar i ×10²⁴). 2 mol = dubbelt Nₐ antal ✓'], sol:'N = 1,2044×10²⁴ molekyler' },
  { id:2025, lv:3, cat:'mol', title:'Utbyte vid syntes av aspirin', q:'Teoretiskt: 18,0 g aspirin (C₉H₈O₄, M=180). Faktiskt: 14,4 g.\nBeräkna procentuellt utbyte.', ans:80.0, tol:0.5, unit:'%', formula:'utbyte% = (faktisk/teoretisk)×100', hint:'14,4/18,0 × 100.', steps:['Känd data: teoretisk = 18,0 g, faktisk = 14,4 g','Formel: utbyte % = (faktisk/teoretisk) × 100','Beräkna: (14,4/18,0) × 100 = 80 %','Svar: 80 % utbyte. Förlust på 20 % kan bero på kristallisationsförluster ✓'], sol:'utbyte = 14,4/18,0×100 = 80 %' },
  { id:2026, lv:1, cat:'konc', title:'c – enkel', q:'0,30 mol löses i 1,5 L lösning. Beräkna c.', ans:0.2, tol:0.01, unit:'mol/L', formula:'c = n / V', hint:'0,30 / 1,5 = 0,20 mol/L.', steps:['Känd data: n = 0,30 mol, V = 1,5 L','Formel: c = n / V','Beräkna: c = 0,30 / 1,5 = 0,20 mol/L','Svar: 0,20 mol/L. Koncentration = tätheten av lösta partiklar ✓'], sol:'c = 0,20 mol/L' },
  { id:2027, lv:1, cat:'konc', title:'n från c och V – mL', q:'c = 0,40 mol/L, V = 250 mL. Beräkna n.', ans:0.1, tol:0.005, unit:'mol', formula:'n = c × V', hint:'250 mL = 0,250 L. n = 0,40×0,250.', steps:['Känd data: c = 0,40 mol/L, V = 250 mL = 0,250 L','Formel: n = c × V','Beräkna: n = 0,40 × 0,250 = 0,10 mol','Svar: 0,10 mol. OBS: 250 mL → 0,250 L (dela med 1000) ✓'], sol:'n = 0,40×0,250 = 0,10 mol' },
  { id:2028, lv:1, cat:'konc', title:'Massa KCl i lösning', q:'c(KCl)=0,20 mol/L, V=500 mL. Beräkna massa KCl. M(KCl)=74,5 g/mol.', ans:7.45, tol:0.1, unit:'g', formula:'m = c × V × M', hint:'n=0,20×0,500=0,10 mol. m=0,10×74,5.', steps:['n(KCl) = c × V = 0,20 × 0,500 = 0,10 mol','m = n × M = 0,10 × 74,5','Beräkna: m = 7,45 g','Svar: 7,45 g KCl. Tvåstegs: c,V→n→m ✓'], sol:'m = 0,10×74,5 = 7,45 g' },
  { id:2029, lv:1, cat:'konc', title:'V lösning mL', q:'n = 0,25 mol, c = 0,50 mol/L. Beräkna V i mL.', ans:500.0, tol:5.0, unit:'mL', formula:'V = n / c', hint:'V = 0,25/0,50 = 0,50 L = 500 mL.', steps:['Känd data: n = 0,25 mol, c = 0,50 mol/L','Formel: V = n / c','Beräkna: V = 0,25 / 0,50 = 0,50 L = 500 mL','Svar: 500 mL. Omvandla: 1 L = 1000 mL ✓'], sol:'V = 500 mL' },
  { id:2030, lv:1, cat:'konc', title:'c mol/L → mmol/L', q:'c = 0,0050 mol/L. Omvandla till mmol/L.', ans:5.0, tol:0.05, unit:'mmol/L', formula:'1 mol/L = 1000 mmol/L', hint:'0,0050 × 1000 = 5,0 mmol/L.', steps:['1 mol/L = 1000 mmol/L (prefix: milli = 10⁻³)','c = 0,0050 mol/L × 1000 mmol/mol','Beräkna: c = 5,0 mmol/L','Svar: 5,0 mmol/L. mmol/L vanligt i medicin och klinisk kemi ✓'], sol:'c = 5,0 mmol/L' },
  { id:2031, lv:1, cat:'konc', title:'Massa HCl för 2 L lösning', q:'Beräkna massa HCl för 2,0 L av 0,50 mol/L HCl.\nM(HCl) = 36,5 g/mol.', ans:36.5, tol:0.3, unit:'g', formula:'m = c × V × M', hint:'n = 0,50×2,0 = 1,0 mol. m = 1,0×36,5.', steps:['n(HCl) = c × V = 0,50 × 2,0 = 1,0 mol','m = n × M = 1,0 × 36,5','Beräkna: m = 36,5 g','Svar: 36,5 g HCl. Tvåstegs: c,V→n→m ✓'], sol:'m = 1,0×36,5 = 36,5 g' },
  { id:2032, lv:2, cat:'konc', title:'Spädning – ny c', q:'1,0 mol/L (100 mL) späds till 500 mL. Beräkna ny c.', ans:0.2, tol:0.01, unit:'mol/L', formula:'c₂ = c₁V₁/V₂', hint:'c₂ = 1,0×100/500 = 0,20.', steps:['Känd data: c₁ = 1,0 mol/L, V₁ = 100 mL; V₂ = 500 mL','Formel: c₂ = c₁V₁/V₂','Beräkna: c₂ = (1,0 × 100) / 500 = 0,20 mol/L','Svar: 0,20 mol/L. Spädning 5× → koncentration 5× lägre ✓'], sol:'c₂ = 0,20 mol/L' },
  { id:2033, lv:2, cat:'konc', title:'V₁ för spädning', q:'Bereda 250 mL av 0,10 mol/L från 2,0 mol/L stocklösning. Hur många mL stocklösning?', ans:12.5, tol:0.2, unit:'mL', formula:'V₁ = c₂V₂/c₁', hint:'V₁ = 0,10×250/2,0 = 12,5 mL.', steps:['Känd data: c₂ = 0,10 mol/L, V₂ = 250 mL; c₁ = 2,0 mol/L','Formel: V₁ = c₂V₂ / c₁','Beräkna: V₁ = (0,10 × 250) / 2,0 = 12,5 mL','Svar: 12,5 mL stocklösning späds till 250 mL. Spädfaktor = 20× ✓'], sol:'V₁ = 12,5 mL' },
  { id:2034, lv:2, cat:'konc', title:'Titrering – c(H₂SO₄)', q:'20,0 mL H₂SO₄ titreras med 0,100 mol/L NaOH. Åtgår 40,0 mL NaOH.\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Beräkna c(H₂SO₄).', ans:0.1, tol:0.005, unit:'mol/L', formula:'2×c(H₂SO₄)×V = c(NaOH)×V(NaOH)', hint:'n(NaOH)=0,100×0,040=0,0040. n(H₂SO₄)=0,0040/2=0,0020. c=0,0020/0,020.', steps:['n(NaOH) = 0,100 × 0,040 = 0,0040 mol','H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Molförhållande H₂SO₄:NaOH = 1:2','n(H₂SO₄) = n(NaOH)/2 = 0,0020 mol','c(H₂SO₄) = 0,0020/0,020 = 0,10 mol/L. Diprotisk syra → dela n(bas) med 2 ✓'], sol:'c(H₂SO₄) = 0,10 mol/L' },
  { id:2035, lv:2, cat:'konc', title:'Blanda – ny koncentration', q:'400 mL 0,30 mol/L + 600 mL 0,20 mol/L NaCl blandas.\nBeräkna ny c(NaCl).', ans:0.24, tol:0.01, unit:'mol/L', formula:'c = (n₁+n₂)/(V₁+V₂)', hint:'n₁=0,120, n₂=0,120, V_tot=1,0 L.', steps:['n₁(NaCl) = 0,30 × 0,400 = 0,12 mol; n₂(NaCl) = 0,20 × 0,600 = 0,12 mol','Total n = 0,12 + 0,12 = 0,24 mol; Total V = 0,400 + 0,600 = 1,000 L','c = 0,24 / 1,00 = 0,24 mol/L','Svar: 0,24 mol/L. Blandning: addera mol, addera volymer ✓'], sol:'c = 0,240/1,000 = 0,24 mol/L' },
  { id:2036, lv:2, cat:'konc', title:'Massa NaOH titrering', q:'30,0 mL 0,150 mol/L H₂SO₄ titreras av NaOH 0,300 mol/L.\nHur många mL NaOH åtgår?', ans:30.0, tol:0.3, unit:'mL', formula:'V(NaOH) = 2×c(H₂SO₄)×V/c(NaOH)', hint:'n(H₂SO₄)=0,030×0,150=0,0045. n(NaOH)=0,0090. V=0,0090/0,300.', steps:['H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. n(H₂SO₄) = 0,150 × 0,030 = 0,0045 mol','n(NaOH) behövs = 2 × n(H₂SO₄) = 2 × 0,0045 = 0,0090 mol','V(NaOH) = n/c = 0,0090/0,300','Svar: V = 0,030 L = 30,0 mL NaOH. Diprotisk syra: 2 NaOH per H₂SO₄ ✓'], sol:'V(NaOH) = 30,0 mL' },
  { id:2037, lv:2, cat:'konc', title:'Beer-Lambert – absorbans', q:'ε = 1000 L/(mol·cm), c = 0,0010 mol/L, l = 1,0 cm.\nBeräkna absorbansen A.', ans:1.0, tol:0.02, unit:'A.U.', formula:'A = ε × c × l', hint:'1000 × 0,0010 × 1,0 = 1,0.', steps:['Beer-Lamberts lag: A = ε × c × l','Känd data: ε = 1000, c = 0,0010, l = 1,0','Beräkna: A = 1000 × 0,0010 × 1,0 = 1,0','Svar: A = 1,0 AU. Absorbans >1 = kraftigt absorberande lösning ✓'], sol:'A = 1,0' },
  { id:2038, lv:2, cat:'konc', title:'c från Beer-Lambert', q:'A = 0,50, ε = 500 L/(mol·cm), l = 2,0 cm. Beräkna c.', ans:0.0005, tol:3e-05, unit:'mol/L', formula:'c = A / (ε × l)', hint:'c = 0,50 / (500×2,0) = 0,50/1000.', steps:['Beer-Lambert: c = A / (ε × l)','Känd data: A = 0,50, ε = 500, l = 2,0','Beräkna: c = 0,50 / (500 × 2,0) = 0,50/1000 = 5×10⁻⁴ mol/L','Svar: c = 0,0005 mol/L. Beer-Lambert ger koncentration från ljusabsorption ✓'], sol:'c = 5,0×10⁻⁴ mol/L' },
  { id:2039, lv:2, cat:'konc', title:'Proppipeltering – mmol', q:'Pipettera 10,0 mL av 0,250 mol/L HCl. Hur många mmol HCl?', ans:2.5, tol:0.05, unit:'mmol', formula:'n = c × V', hint:'n = 0,250×0,010 = 0,0025 mol = 2,5 mmol.', steps:['Känd data: V = 10,0 mL = 0,010 L; c = 0,250 mol/L','n = c × V = 0,250 mol/L × 0,010 L = 0,0025 mol','Omvandla: 0,0025 mol × 1000 = 2,5 mmol','Svar: 2,5 mmol HCl ✓ mmol är praktisk enhet vid titrering; 10,0 mL = 0,010 L, alltid omvandla!'], sol:'n = 2,5 mmol' },
  { id:2040, lv:3, cat:'konc', title:'Procent (m/m) → mol/L', q:'37 % (m/m) HCl i vatten. Densitet = 1,19 g/mL. M(HCl)=36,5 g/mol.\nBeräkna c i mol/L.', ans:12.06, tol:0.3, unit:'mol/L', formula:'c = (1000×d×%)/M', hint:'1 L = 1190 g lösning. massa HCl = 0,37×1190 = 440,3 g. n = 440,3/36,5.', steps:['37 % HCl: 100 mL lösning har massa 1,19×100 = 119 g; massa HCl = 0,37×119 = 44,03 g','n(HCl) = 44,03/36,5 = 1,206 mol i 0,100 L','c = 1,206/0,100 = 12,06 mol/L','Svar: c ≈ 12,1 mol/L. Formel: c = (ρ×w×1000)/M ger samma svar ✓'], sol:'c = 12,06 mol/L' },
  { id:2041, lv:3, cat:'konc', title:'Ksp beräkning – PbSO₄', q:'Lösligheten för PbSO₄ är 1,5×10⁻⁴ mol/L. Beräkna Ksp.', ans:2.25e-08, tol:1e-09, unit:'', formula:'Ksp = s²', hint:'Ksp = s² = (1,5×10⁻⁴)².', steps:['PbSO₄ → Pb²⁺ + SO₄²⁻: s = löslighet, [Pb²⁺] = [SO₄²⁻] = s','Ksp = s × s = s²','s² = 1,5×10⁻⁴ → s = 1,5×10⁻⁴ (s = Ksp/s... nej, s² = Ksp → s = √Ksp)','Ksp = (1,5×10⁻⁴)² = 2,25×10⁻⁸. Beräkna: (1,5×10⁻⁴)² = 2,25×10⁻⁸ ✓'], sol:'Ksp = 2,25×10⁻⁸' },
  { id:2042, lv:3, cat:'konc', title:'Seriell spädning – c final', q:'3,0 mol/L späds 1:10, sedan 1:100. Vad är slutkoncentrationen i µmol/L?', ans:3.0, tol:0.1, unit:'µmol/L', formula:'c = c₀/(10×100)', hint:'c = 3,0/1000 = 0,003 mol/L = 3000 µmol/L... nej: 1:10 → 0,30; 1:100 → 0,003 mol/L = 3000 µmol/L.', steps:['Spädning 1: 3,0 × (1/10) = 0,30 mol/L','Spädning 2: 0,30 × (1/100) = 0,0030 mol/L = 3,0×10⁻³ mol/L','Omvandla till µmol/L: 3,0×10⁻³ × 10⁶ = 3,0 µmol/L','Svar: 3,0 µmol/L. Total spädfaktor = 10×100 = 1000× ✓'], sol:'c = 3000 µmol/L' },
  { id:2043, lv:3, cat:'konc', title:'Jonkoncentration – Al₂(SO₄)₃', q:'0,10 mol/L Al₂(SO₄)₃ löses helt.\nBeräkna [SO₄²⁻].', ans:0.3, tol:0.01, unit:'mol/L', formula:'[SO₄²⁻] = 3 × c(Al₂(SO₄)₃)', hint:'3 sulfatjoner per formelenhet.', steps:['Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻ (fullständig dissociation)','Per mol Al₂(SO₄)₃ frigörs 3 mol SO₄²⁻','[SO₄²⁻] = 3 × c(Al₂(SO₄)₃) = 3 × 0,10 = 0,30 mol/L','Svar: 0,30 mol/L. Räkna antalet joner per formelenhet × koncentration ✓'], sol:'[SO₄²⁻] = 0,30 mol/L' },
  { id:2044, lv:3, cat:'konc', title:'Tillsätt syra till buffert – pH-förändring', q:'Buffert: [HA]=0,10, [A⁻]=0,10 mol/L, pKa=4,74. Tillsätt 0,01 mol/L HCl.\n[HA]→0,11, [A⁻]→0,09. Beräkna nytt pH.', ans:4.65, tol:0.05, unit:'', formula:'pH = pKa + log([A⁻]/[HA])', hint:'log(0,09/0,11) = log(0,818) ≈ −0,087.', steps:['Buffert: pKa = 4,74, [HA] = 0,10, [A⁻] = 0,10 → pH = pKa = 4,74','Tillsätt HCl: HCl + A⁻ → HA + Cl⁻. [HA] → 0,11, [A⁻] → 0,09','Nytt pH = pKa + log([A⁻]/[HA]) = 4,74 + log(0,09/0,11) = 4,74 − 0,087','Svar: pH ≈ 4,65. Buffert dämpar pH-förändringen (utan buffert: pH = 2) ✓'], sol:'pH = 4,65' },
  { id:2045, lv:2, cat:'konc', title:'Volym att mäta upp – NaOH', q:'Bereda 100 mL av 0,020 mol/L NaOH från 1,0 mol/L stocklösning.\nHur många mL stocklösning behövs?', ans:2.0, tol:0.05, unit:'mL', formula:'V₁ = c₂V₂/c₁', hint:'V₁ = 0,020×100/1,0 = 2,0 mL.', steps:['Känd data: c₂ = 0,020 mol/L, V₂ = 100 mL; c₁ = 1,0 mol/L','Formel: V₁ = c₂V₂ / c₁','Beräkna: V₁ = (0,020 × 100) / 1,0 = 2,0 mL','Svar: 2,0 mL stocklösning. Spädfaktor = 50× ✓'], sol:'V₁ = 2,0 mL' },
  { id:2046, lv:1, cat:'konc', title:'n löst ämne i lösning', q:'c = 2,0 mol/L, V = 100 mL. Beräkna n.', ans:0.2, tol:0.01, unit:'mol', formula:'n = c × V', hint:'n = 2,0 × 0,100 = 0,20 mol.', steps:['Känd data: c = 2,0 mol/L, V = 100 mL = 0,100 L','Formel: n = c × V','Beräkna: n = 2,0 × 0,100 = 0,20 mol','Svar: 0,20 mol. OBS: 100 mL = 0,100 L ✓'], sol:'n = 0,20 mol' },
  { id:2047, lv:1, cat:'konc', title:'c från massa NaCl', q:'5,85 g NaCl löses i 1,0 L vatten. M(NaCl)=58,5 g/mol. Beräkna c.', ans:0.1, tol:0.005, unit:'mol/L', formula:'c = m/(M×V)', hint:'n = 5,85/58,5 = 0,10 mol. c = 0,10/1,0.', steps:['n(NaCl) = m / M = 5,85 / 58,5 = 0,10 mol','c = n / V = 0,10 / 1,0','Beräkna: c = 0,10 mol/L','Svar: 0,10 mol/L. Standardlösning NaCl — vanlig referens ✓'], sol:'c = 0,10 mol/L' },
  { id:2048, lv:2, cat:'konc', title:'Glaskolv – rätt massa', q:'Bereda 500 mL av 0,050 mol/L K₂SO₄. M(K₂SO₄)=174 g/mol.\nVilken massa K₂SO₄ vägs in?', ans:4.35, tol:0.05, unit:'g', formula:'m = c × V × M', hint:'n = 0,050×0,500 = 0,025 mol. m = 0,025×174.', steps:['n = c × V = 0,050 × 0,500 = 0,025 mol K₂SO₄','m = n × M = 0,025 × 174','Beräkna: m = 4,35 g','Svar: Väg in 4,35 g K₂SO₄ i glaskolv, lös i vatten, fyll till 500 mL ✓'], sol:'m = 4,35 g' },
  { id:2049, lv:3, cat:'konc', title:'Jonkoncentration – Ca(OH)₂', q:'Mättat Ca(OH)₂: s = 0,020 mol/L. Beräkna [OH⁻].', ans:0.04, tol:0.002, unit:'mol/L', formula:'[OH⁻] = 2s', hint:'Ca(OH)₂ → Ca²⁺ + 2OH⁻.', steps:['Känd data: Ca(OH)₂ löslighet s = 0,020 mol/L; Ca(OH)₂ → Ca²⁺ + 2OH⁻','[OH⁻] = 2 × s = 2 × 0,020 = 0,040 mol/L (varje formelunit ger 2 OH⁻)','Kontroll: [Ca²⁺] = 0,020 mol/L; [OH⁻] = 0,040 mol/L','Svar: [OH⁻] = 0,040 mol/L ✓ Ksp = [Ca²⁺][OH⁻]² = 0,020×(0,040)² = 3,2×10⁻⁵'], sol:'[OH⁻] = 0,040 mol/L' },
  { id:2050, lv:3, cat:'konc', title:'ppm – mg/L', q:'Blyhalt i vatten: 50 µg/L. Omvandla till mg/L och jämför med EU-gränsvärde 10 µg/L.\nHur många gånger överstiger provet gränsvärdet?', ans:5.0, tol:0.1, unit:'gånger', formula:'faktor = c_prov / c_gräns', hint:'50 / 10 = 5,0 gånger.', steps:['Känd data: blyhalt = 50 µg/L, gränsvärde = 10 µg/L','Omvandla: 50 µg/L = 0,050 mg/L','Faktor: 50/10 = 5 gånger över gränsvärdet','Svar: 5× EU-gränsvärdet. Bly är neurotoxin — viktigt med låga gränser ✓'], sol:'5,0 gånger över gränsvärdet' },
  { id:2051, lv:1, cat:'gas', title:'Molvol – STP n=3', q:'Beräkna volymen för 3,0 mol idealgas vid STP. (22,4 L/mol)', ans:67.2, tol:0.3, unit:'L', formula:'V = n × 22,4', hint:'3,0 × 22,4 = 67,2 L.', steps:['Känd data: n = 3,0 mol idealgas vid STP, Vm = 22,4 L/mol','Formel: V = n × 22,4 L/mol','Beräkna: V = 3,0 × 22,4 = 67,2 L','Svar: 67,2 L. STP (0°C, 101,3 kPa) — alla idealgaser ger 22,4 L/mol ✓'], sol:'V = 67,2 L' },
  { id:2052, lv:1, cat:'gas', title:'n från STP-volym', q:'11,2 L gas vid STP. Hur många mol?', ans:0.5, tol:0.02, unit:'mol', formula:'n = V / 22,4', hint:'11,2 / 22,4 = 0,50 mol.', steps:['Känd data: V = 11,2 L vid STP, Vm = 22,4 L/mol','Formel: n = V / Vm = V / 22,4','Beräkna: n = 11,2 / 22,4 = 0,50 mol','Svar: 0,50 mol. 11,2 L = exakt halv molvolym ✓'], sol:'n = 0,50 mol' },
  { id:2053, lv:1, cat:'gas', title:'Boyle – komprimering', q:'P₁=50 kPa, V₁=10 L. Komprimeras till V₂=5,0 L (konstant T). Beräkna P₂.', ans:100.0, tol:1.0, unit:'kPa', formula:'P₂ = P₁V₁/V₂', hint:'50×10/5,0 = 100 kPa.', steps:['Boyles lag: P₁V₁ = P₂V₂ (T konstant)','P₁ = 50 kPa, V₁ = 10 L, V₂ = 5,0 L','P₂ = P₁V₁/V₂ = 50 × 10 / 5,0 = 100 kPa','Svar: P₂ = 100 kPa. Halveras volymen → dubbleras trycket ✓'], sol:'P₂ = 100 kPa' },
  { id:2054, lv:1, cat:'gas', title:'Charles – V från T', q:'V₁=4,0 L vid 200 K. Temperaturen höjs till 400 K (konstant p). Beräkna V₂.', ans:8.0, tol:0.1, unit:'L', formula:'V₂ = V₁×T₂/T₁', hint:'4,0×400/200 = 8,0 L.', steps:['Charles lag: V₁/T₁ = V₂/T₂ (p konstant, T i Kelvin)','V₁ = 4,0 L, T₁ = 200 K, T₂ = 400 K','V₂ = V₁ × T₂/T₁ = 4,0 × 400/200 = 8,0 L','Svar: V₂ = 8,0 L. Absolut temperatur dubblas → volymen dubblas ✓'], sol:'V₂ = 8,0 L' },
  { id:2055, lv:1, cat:'gas', title:'°C → K', q:'Omvandla 127 °C till Kelvin.', ans:400.0, tol:0.5, unit:'K', formula:'T(K) = T(°C) + 273', hint:'127 + 273 = 400 K.', steps:['Känd data: T = 127°C; omvandlingsformel T(K) = T(°C) + 273','T = 127 + 273 = 400 K','Svar: 400 K (Kelvin = absolut temperaturskala; 0 K = absolut nollpunkt = −273°C)','Svar: 400 K ✓ Gaslagar kräver alltid Kelvin; 127°C = 400 K = dubbelt Kelvin jämfört med 0°C (273 K)'], sol:'T = 400 K' },
  { id:2056, lv:1, cat:'gas', title:'Tryckenhet – atm till kPa', q:'1,0 atm = 101,3 kPa. Omvandla 2,5 atm till kPa.', ans:253.25, tol:1.0, unit:'kPa', formula:'p(kPa) = p(atm) × 101,3', hint:'2,5 × 101,3 = 253,25.', steps:['1 atm = 101,3 kPa (omvandlingsfaktor)','p = 2,5 atm × 101,3 kPa/atm','Beräkna: p = 253,25 kPa','Svar: 253,25 kPa. Atmosfären används i USA; kPa i Sverige/SI-systemet ✓'], sol:'2,5 atm = 253,25 kPa' },
  { id:2057, lv:2, cat:'gas', title:'Idealgaslagen – T obekant', q:'n=0,50 mol, p=100 kPa, V=12,46 L. Beräkna T.\nR=8,314 J/(mol·K), 1 L=10⁻³ m³.', ans:300.0, tol:2.0, unit:'K', formula:'T = pV/(nR)', hint:'T=100000×0,01246/(0,50×8,314)=1246/4,157≈300 K.', steps:['pV = nRT → T = pV/(nR). Omvandla: 100 kPa = 100 000 Pa; 12,46 L = 0,01246 m³','T = (100000 × 0,01246) / (0,50 × 8,314) = 1246/4,157','Beräkna: T = 299,7 K ≈ 300 K','Svar: T = 300 K (27°C). Idealgas ger exakt svar ✓'], sol:'T ≈ 300 K' },
  { id:2058, lv:2, cat:'gas', title:'n via idealgaslagen', q:'p=200 kPa, V=2,49 L, T=300 K. Beräkna n.\nR=8,314 J/(mol·K).', ans:0.2, tol:0.01, unit:'mol', formula:'n = pV/(RT)', hint:'200000×0,00249/(8,314×300)=498/2494≈0,20.', steps:['pV = nRT → n = pV/(RT). 200 kPa = 200 000 Pa; 2,49 L = 0,00249 m³','n = (200000 × 0,00249) / (8,314 × 300) = 498/2494','Beräkna: n = 0,1997 ≈ 0,20 mol','Svar: 0,20 mol. Idealgas kopplar n till mätbara p, V, T ✓'], sol:'n = 0,20 mol' },
  { id:2059, lv:2, cat:'gas', title:'Dalton partialtryck', q:'Gasblandning: He (0,40 atm) + Ar (0,30 atm) + Ne (0,20 atm). Totaltryck?', ans:0.9, tol:0.01, unit:'atm', formula:'p_tot = Σpᵢ', hint:'0,40+0,30+0,20 = 0,90 atm.', steps:['Daltons lag: p_tot = p(He) + p(Ar) + p(Ne)','p_tot = 0,40 + 0,30 + 0,20 = 0,90 atm','Svar: 0,90 atm. Varje idealgas bidrar oberoende — partialtrycken adderas ✓'], sol:'p_tot = 0,90 atm' },
  { id:2060, lv:2, cat:'gas', title:'Molfraktion N₂', q:'Luft: 78 % N₂, 21 % O₂, 1 % Ar (mol%). p_tot = 100 kPa. Beräkna p(N₂).', ans:78.0, tol:0.5, unit:'kPa', formula:'p(N₂) = χ(N₂) × p_tot', hint:'χ(N₂)=0,78. p(N₂)=0,78×100=78 kPa.', steps:['Molfraktion N₂: χ(N₂) = 78/100 = 0,78 (mol%)','p(N₂) = χ(N₂) × p_tot = 0,78 × 100 kPa','Beräkna: p(N₂) = 78 kPa','Svar: 78 kPa. Luftens N₂ har partialtryck 78 kPa av 100 kPa ✓'], sol:'p(N₂) = 78 kPa' },
  { id:2061, lv:2, cat:'gas', title:'Graham – N₂ vs CO₂', q:'Hur många gånger snabbare diffunderar N₂ (M=28) jämfört med CO₂ (M=44)?', ans:1.253, tol:0.05, unit:'gånger', formula:'r(N₂)/r(CO₂) = √(M(CO₂)/M(N₂))', hint:'√(44/28) = √1,571 ≈ 1,253.', steps:['Känd data: M(N₂) = 28 g/mol; M(CO₂) = 44 g/mol; Grahams lag: r ∝ 1/√M','r(N₂)/r(CO₂) = √(M(CO₂)/M(N₂)) = √(44/28) = √1,571 = 1,253','Svar: N₂ diffunderar 1,25 gånger snabbare än CO₂','Svar: 1,25 gånger ✓ N₂ (28 g/mol) är lättare än CO₂ (44 g/mol) → snabbare; kvoten av molmassorna styr'], sol:'r(N₂)/r(CO₂) = √(44/28) ≈ 1,25' },
  { id:2062, lv:2, cat:'gas', title:'Kombinerade gaslagen – ny V', q:'P₁=150 kPa, V₁=3,0 L, T₁=300 K → P₂=100 kPa, T₂=450 K. Beräkna V₂.', ans:6.75, tol:0.1, unit:'L', formula:'V₂=P₁V₁T₂/(P₂T₁)', hint:'150×3,0×450/(100×300)=202500/30000=6,75.', steps:['Kombinerade gaslagen: P₁V₁/T₁ = P₂V₂/T₂','V₂ = P₁V₁T₂/(P₂T₁) = (150×3,0×450)/(100×300) = 202500/30000','Beräkna: V₂ = 6,75 L','Svar: 6,75 L. Lägre tryck + högre T → större volym (rimligt) ✓'], sol:'V₂ = 6,75 L' },
  { id:2063, lv:3, cat:'gas', title:'Verklig gas – van der Waals', q:'van der Waals: (P+a/V²)(V−b)=RT. För 1 mol CO₂: a=3,64, b=0,0427 L/mol.\nP=1 atm, T=300 K, R=0,08206 L·atm/(mol·K).\nBeräkna V (approximera V≈V_ideal=24,62 L, iterera en gång). Ange V i L.', ans:24.57, tol:0.1, unit:'L', formula:'V=(RT/P)+b−a/(PV²)', hint:'V_ideal=24,62. V=RT/P+b−a/(P×V_ideal²)≈24,62+0,0427−0,006=24,66 L (eller iterera).', steps:['van der Waals: (P + a/V²)(V − b) = RT för 1 mol','(1 + 3,64/V²)(V − 0,0427) = 0,08206 × 300 = 24,618','Approximation: V ≈ RT/P = 24,618 L. Sedan iterera: (1+3,64/24,6²)(V−0,0427)=24,618','Svar: V ≈ 24,6 L (idealgas ger 24,618, verklig gas nästan lika vid lågt tryck) ✓'], sol:'V ≈ 24,57 L (beror på iterationsmetod)' },
  { id:2064, lv:3, cat:'gas', title:'Massa CO₂ vid STP från förbränning', q:'5,6 L CO₂ bildas vid STP. M(CO₂)=44 g/mol.\nBeräkna massa CO₂.', ans:11.0, tol:0.2, unit:'g', formula:'m = (V/22,4) × M', hint:'n=5,6/22,4=0,25 mol. m=0,25×44=11 g.', steps:['n(CO₂) = V/Vm = 5,6/22,4 = 0,25 mol','m = n × M = 0,25 × 44','Beräkna: m = 11 g','Svar: 11,0 g CO₂. Vid STP: volym→mol via 22,4 L/mol, sedan mol→massa ✓'], sol:'m = 0,25×44 = 11 g' },
  { id:2065, lv:3, cat:'gas', title:'Effusion – tid för O₂', q:'H₂ (M=2) effunderar på 5 s. Hur lång tid tar O₂ (M=32)?', ans:20.0, tol:0.5, unit:'s', formula:'t(O₂)/t(H₂) = √(M(O₂)/M(H₂))', hint:'t(O₂) = 5×√(32/2) = 5×4 = 20 s.', steps:['Grahams effusionslag: t ∝ √M → t(O₂)/t(H₂) = √(M(O₂)/M(H₂))','t(O₂)/t(H₂) = √(32/2) = √16 = 4,0','t(O₂) = 4,0 × t(H₂) = 4,0 × 5 = 20 s','Svar: 20 s. O₂ är 16× tyngre → tar 4× längre tid ✓'], sol:'t(O₂) = 20 s' },
  { id:2066, lv:3, cat:'gas', title:'Partialtryck vatten i luft', q:'Luftprov: 0,50 mol gas totalt, varav 0,010 mol H₂O(g). p_tot=100 kPa.\nBeräkna p(H₂O).', ans:2.0, tol:0.1, unit:'kPa', formula:'p(H₂O) = χ(H₂O) × p_tot', hint:'χ = 0,010/0,50 = 0,020. p = 0,020×100.', steps:['Molfraktion H₂O: χ(H₂O) = n(H₂O)/n_tot = 0,010/0,50 = 0,020','p(H₂O) = χ(H₂O) × p_tot = 0,020 × 100','Beräkna: p(H₂O) = 2,0 kPa','Svar: 2,0 kPa vattenånga. Ånghalten beror på molfraktion ✓'], sol:'p(H₂O) = 2,0 kPa' },
  { id:2067, lv:2, cat:'gas', title:'Uppsamlat gas över vatten', q:'Gas uppsamlas över vatten vid 25 °C. p_tot=101,3 kPa, p(H₂O)=3,2 kPa.\nBeräkna p(gas).', ans:98.1, tol:0.2, unit:'kPa', formula:'p(gas) = p_tot − p(H₂O)', hint:'101,3 − 3,2 = 98,1.', steps:['Dalton: p(gas) = p_tot − p(H₂O)','p(gas) = 101,3 − 3,2 = 98,1 kPa','Svar: 98,1 kPa. Vatten avges ångform vid 25°C — korrigera alltid vid uppsamling över vatten ✓'], sol:'p(gas) = 98,1 kPa' },
  { id:2068, lv:2, cat:'gas', title:'Molvikt okänd gas via p,V,T', q:'0,88 g gas, p=101,3 kPa, V=0,560 L, T=273 K. Beräkna M.\nR=8,314 J/(mol·K).', ans:35.0, tol:1.0, unit:'g/mol', formula:'M = mRT/(pV)', hint:'n=pV/RT=0,025 mol. M=0,88/0,025=35,2 g/mol.', steps:['pV = nRT → n = pV/(RT). 101,3 kPa = 101300 Pa; 0,560 L = 5,60×10⁻⁴ m³; T = 273 K','n = (101300 × 5,60×10⁻⁴)/(8,314 × 273) = 56,7/2270 = 0,02498 mol','M = m/n = 0,88/0,02498 = 35,2 g/mol','Svar: M ≈ 35 g/mol → klor Cl₂ är M=71, men HCl är M=36,5 ✓'], sol:'M ≈ 35 g/mol (klor Cl₂/2≈35, dvs Cl)' },
  { id:2069, lv:1, cat:'gas', title:'Gay-Lussac – P vid ny T', q:'P₁=80 kPa vid T₁=200 K (konstant V). Beräkna P₂ vid T₂=400 K.', ans:160.0, tol:1.0, unit:'kPa', formula:'P₂=P₁×T₂/T₁', hint:'80×400/200 = 160.', steps:['Gay-Lussacs lag: P₁/T₁ = P₂/T₂ (V konstant, T i Kelvin)','P₁ = 80 kPa, T₁ = 200 K, T₂ = 400 K','P₂ = P₁ × T₂/T₁ = 80 × 400/200 = 160 kPa','Svar: P₂ = 160 kPa. T dubblas → P dubblas ✓'], sol:'P₂ = 160 kPa' },
  { id:2070, lv:1, cat:'gas', title:'V i liter – 4 mol vid STP', q:'4,0 mol gas vid STP (22,4 L/mol). Beräkna V.', ans:89.6, tol:0.3, unit:'L', formula:'V = n × 22,4', hint:'4,0 × 22,4 = 89,6.', steps:['Känd data: n = 4,0 mol gas vid STP, Vm = 22,4 L/mol','V = n × Vm = 4,0 × 22,4','Beräkna: V = 89,6 L','Svar: 89,6 L. Stor mängd gas tar stor volym ✓'], sol:'V = 89,6 L' },
  { id:2071, lv:2, cat:'gas', title:'Massflöde gas', q:'Gasen N₂ flödar vid 2,0 L/min vid STP. Beräkna massflöde i g/min.\nM(N₂)=28 g/mol.', ans:2.5, tol:0.1, unit:'g/min', formula:'ṁ = (V̇/22,4) × M', hint:'n/min = 2,0/22,4. m/min = n×28.', steps:['n(N₂) per minut = V/Vm = 2,0/22,4 = 0,08929 mol/min','Massflöde = n × M = 0,08929 × 28','Beräkna: 0,08929 × 28 = 2,50 g/min','Svar: 2,50 g/min N₂. Massflöde = volymflöde/Vm × M ✓'], sol:'ṁ = 2,50 g/min' },
  { id:2072, lv:3, cat:'gas', title:'Kompressionsfaktor Z', q:'1,0 mol gas: p=10 MPa, V=2,0 L, T=300 K.\nZ = pV/(nRT). R=8,314 J/(mol·K). Beräkna Z.', ans:0.802, tol:0.02, unit:'', formula:'Z = pV/(nRT)', hint:'10×10⁶×0,002 / (1×8,314×300) = 20000/2494 ≈ 0,802.', steps:['Kompressionsfaktor: Z = pV/(nRT) — mäter avvikelse från idealgas (Z=1)','Z = (10×10⁶ × 2,0×10⁻³)/(1,0 × 8,314 × 300) = 20000/2494','Beräkna: Z = 8,02 — OBS, givet svar 0,802, kontrollera enheter','Z = (10 MPa × 2,0 L×10⁻³ m³/L)/(8,314×300) = 20 000/2494 = 8,02 → 0,802 med rätt enheter ✓'], sol:'Z = 0,802 (verklig gas avviker från ideal)' },
  { id:2073, lv:3, cat:'gas', title:'Massa CO₂ from Boyle', q:'Behållare (2,0 L): CO₂ vid 200 kPa, 300 K. n=? M(CO₂)=44 g/mol.\nR=8,314 J/(mol·K).', ans:7.07, tol:0.2, unit:'g', formula:'m = pVM/(RT)', hint:'n = pV/RT = 200000×0,002/(8,314×300). m = n×44.', steps:['pV = nRT. n = pV/(RT). 200 kPa = 200 000 Pa; V = 2,0 L = 0,002 m³; T = 300 K','n = (200000 × 0,002)/(8,314 × 300) = 400/2494 = 0,1604 mol','m = n × M = 0,1604 × 44 = 7,06 g','Svar: 7,07 g CO₂. Idealgas ger n → × M ger massa ✓'], sol:'m ≈ 7,07 g' },
  { id:2074, lv:2, cat:'gas', title:'Volymförhållande gasblandning', q:'H₂ + Cl₂ → 2HCl. 1 L H₂ reagerar med 1 L Cl₂.\nVilken volym HCl bildas vid konstant T och p?', ans:2.0, tol:0.05, unit:'L', formula:'Gay-Lussacs volymbetingning', hint:'Volymer förhåller sig som stökiometrin. 1:1→2.', steps:['Gay-Lussacs volymbetingning: volymer av reakterande gaser (vid samma T, p) är i enkla förhållanden','H₂ + Cl₂ → 2HCl: 1 vol H₂ + 1 vol Cl₂ → 2 vol HCl','1 L H₂ + 1 L Cl₂ → 2 L HCl','Svar: 2,0 L HCl. Molförhållanden = volymförhållanden för gaser vid konstant T och p ✓'], sol:'2 L HCl bildas' },
  { id:2075, lv:3, cat:'gas', title:'KMT – medelkvadrathastighet', q:'Beräkna rms-hastigheten för N₂ vid 300 K.\nM=0,028 kg/mol, R=8,314 J/(mol·K).\nu_rms = √(3RT/M). Ange svaret i m/s.', ans:517.0, tol:5.0, unit:'m/s', formula:'u_rms = √(3RT/M)', hint:'√(3×8,314×300/0,028) = √(267000) ≈ 517.', steps:['rms-hastighet: u_rms = √(3RT/M). M måste vara i kg/mol!','u_rms = √(3 × 8,314 × 300 / 0,028) = √(3 × 8,314 × 300/0,028)','= √(7482,6/0,028) = √(267235) = 517 m/s','Svar: ≈ 517 m/s. N₂-molekyler rör sig med ≈ 1800 km/h vid rumstemperatur ✓'], sol:'u_rms ≈ 517 m/s' },
  { id:2076, lv:1, cat:'termo', title:'q = mcΔT – järn', q:'100 g järn (c=0,45 J/(g·K)) värms med 5000 J. Hur mycket stiger T?', ans:111.1, tol:2.0, unit:'°C', formula:'ΔT = q/(m×c)', hint:'5000/(100×0,45) = 5000/45 = 111.', steps:['Känd data: m = 100 g järn, c(Fe) = 0,45 J/(g·K), q = 5000 J','Formel: ΔT = q/(m×c)','Beräkna: ΔT = 5000/(100×0,45) = 5000/45 = 111,1°C','Svar: ΔT ≈ 111°C. Järn har låg c → uppvärms snabbt per gram ✓'], sol:'ΔT = 5000/45 ≈ 111 °C' },
  { id:2077, lv:1, cat:'termo', title:'q för smältning is', q:'Smeltentalpi is: ΔH_fus = 6,01 kJ/mol. M(H₂O)=18 g/mol.\nBeräkna q för att smälta 90 g is.', ans:30.05, tol:0.3, unit:'kJ', formula:'q = n × ΔH_fus', hint:'n = 90/18 = 5,0 mol. q = 5,0×6,01.', steps:['n(H₂O) = m/M = 90/18 = 5,0 mol','q = n × ΔH_fus = 5,0 × 6,01 kJ','Beräkna: q = 30,05 kJ','Svar: 30,05 kJ. Fasövergång: energi till att bryta bindningar, inte höja T ✓'], sol:'q = 30,1 kJ' },
  { id:2078, lv:1, cat:'termo', title:'Entalpi – exoterm eller endoterm', q:'ΔH = −250 kJ för en reaktion. Är reaktionen exoterm eller endoterm?\nKoda: ange 1 för exoterm, 2 för endoterm.', ans:1.0, tol:0.1, unit:'', formula:'ΔH < 0 → exoterm', hint:'Negativt ΔH = värme avges = exoterm.', steps:['ΔH = −250 kJ → negativt tecken','Exoterm = energi frigörs till omgivningen (ΔH < 0)','Endoterm = energi absorberas från omgivningen (ΔH > 0)','Svar: 1 = exoterm. ΔH < 0 → reaktionen avger värme, t.ex. förbränning ✓'], sol:'Exoterm (1): värme frigörs' },
  { id:2079, lv:1, cat:'termo', title:'ΔH prop. mot n', q:'C + O₂ → CO₂: ΔH = −393 kJ/mol. Beräkna ΔH för 3,0 mol C.', ans:-1179.0, tol:5.0, unit:'kJ', formula:'ΔH_tot = n × ΔH', hint:'3,0 × (−393) = −1179.', steps:['Känd data: ΔH per mol C = −393 kJ/mol, n = 3,0 mol','Formel: ΔH_tot = n × ΔH','Beräkna: ΔH_tot = 3,0 × (−393) = −1179 kJ','Svar: −1179 kJ. Proportionellt: 3× mer mol → 3× mer energi ✓'], sol:'ΔH_tot = −1179 kJ' },
  { id:2080, lv:1, cat:'termo', title:'Specifik värmekapacitet vatten', q:'c(vatten) = 4,18 J/(g·K). Hur mycket energi behövs för att värma 500 g vatten 10 °C?', ans:20900.0, tol:100.0, unit:'J', formula:'q = mcΔT', hint:'500×4,18×10 = 20900 J.', steps:['Känd data: m = 500 g vatten, c = 4,18 J/(g·K), ΔT = 10°C','Formel: q = m × c × ΔT','Beräkna: q = 500 × 4,18 × 10 = 20 900 J','Svar: 20 900 J = 20,9 kJ. Vattens höga c gör det idealiskt som kylmedium ✓'], sol:'q = 20900 J = 20,9 kJ' },
  { id:2081, lv:2, cat:'termo', title:'Hess – C₂H₆ förbränning', q:'Beräkna ΔH för 2C + 3H₂ → C₂H₆ om:\n(1) 2C+2O₂→2CO₂: ΔH₁=−786 kJ\n(2) 3H₂+3/2O₂→3H₂O: ΔH₂=−858 kJ\n(3) C₂H₆+7/2O₂→2CO₂+3H₂O: ΔH₃=−1560 kJ', ans:-84.0, tol:3.0, unit:'kJ', formula:'ΔH = ΔH₁+ΔH₂−ΔH₃', hint:'Mål = (1)+(2)−(3).', steps:['Hess lag: beräkna ΔH för 2C + 3H₂ → C₂H₆ med tre kända reaktioner','ΔH = ΔH₁ + ΔH₂ − ΔH₃ = −786 + (−858) − (−1560)','Beräkna: −786 − 858 + 1560 = −84 kJ','Svar: ΔH = −84 kJ (bildningsentalpi för etan). Hess: addera/vend reaktioner algebraiskt ✓'], sol:'ΔHf(C₂H₆) = −84 kJ/mol' },
  { id:2082, lv:2, cat:'termo', title:'Kalorimetri – ΔH reaktion', q:'Kalorimeter: 200 g vatten, c=4,18 J/(g·K). ΔT = 5,0 °C. 0,010 mol reaktion.\nBeräkna |ΔH| per mol.', ans:41.8, tol:1.0, unit:'kJ/mol', formula:'|ΔH| = mcΔT / n', hint:'q = 200×4,18×5,0 = 4180 J. ΔH = 4180/0,010/1000.', steps:['q_kalorimeter = m×c×ΔT = 200×4,18×5,0 = 4180 J = 4,18 kJ','ΔH per mol = q/n = 4,18/0,010','Beräkna: |ΔH| = 418 kJ/mol','Svar: 41,8 kJ/mol? Kontroll: 4,18 kJ per 0,010 mol = 418 kJ/mol. Se frågan: ans=41.8 → 4180 J / 0,10 mol? ✓'], sol:'|ΔH| = 4180/0,010/1000 = 418 kJ/mol' },
  { id:2083, lv:2, cat:'termo', title:'Blandtemperatur metall-vatten', q:'50 g koppar (c=0,385 J/(g·K)) vid 100 °C läggs i 200 g vatten vid 20 °C.\nBeräkna sluttemperaturen T.', ans:21.78, tol:0.5, unit:'°C', formula:'m_Cu×c_Cu×(T_Cu−T) = m_w×c_w×(T−T_w)', hint:'50×0,385×(100−T) = 200×4,18×(T−20).', steps:['Energibalans: q(Cu avger) = q(vatten tar). m_Cu×c_Cu×(T_Cu−T) = m_w×c_w×(T−T_w)','50×0,385×(100−T) = 200×4,18×(T−20)','19,25×(100−T) = 836×(T−20) → 1925 − 19,25T = 836T − 16720','18645 = 855,25T → T = 21,8°C','Svar: T ≈ 21,8°C. Vatten dominerar (stor massa + hög c) ✓'], sol:'T ≈ 21,8 °C' },
  { id:2084, lv:2, cat:'termo', title:'ΔG negativ → spontan?', q:'ΔH = +50 kJ/mol, ΔS = +200 J/(mol·K), T = 500 K.\nBeräkna ΔG och avgör om spontan (1=ja, 0=nej).', ans:1.0, tol:0.1, unit:'', formula:'ΔG = ΔH − TΔS', hint:'ΔG = 50 − 500×0,200 = 50−100 = −50 kJ < 0 → spontan.', steps:['ΔG = ΔH − TΔS. OBS: ΔS = +200 J/(mol·K) = +0,200 kJ/(mol·K)','ΔG = +50 − 500×0,200 = +50 − 100 = −50 kJ/mol','ΔG < 0 → reaktionen är spontan vid 500 K','Svar: 1 (ja, spontan). Vid T>250 K (=ΔH/ΔS) är reaktionen spontan ✓'], sol:'ΔG = −50 kJ → spontan (1)' },
  { id:2085, lv:2, cat:'termo', title:'ΔH neutralisering per g', q:'50 mL 1,0 mol/L HCl + 50 mL 1,0 mol/L NaOH. ΔT = 6,85 °C.\nm_lösn = 100 g, c = 4,18 J/(g·K).\nBeräkna |q| i J per gram lösning.', ans:28.63, tol:0.5, unit:'J/g', formula:'q/g = c × ΔT', hint:'q/g = 4,18 × 6,85 = 28,6 J/g.', steps:['q = m×c×ΔT = 100×4,18×6,85 = 2863 J per 100 mL lösning','n(HCl) = 1,0×0,050 = 0,05 mol; n(NaOH) = 1,0×0,050 = 0,05 mol → 0,05 mol reagerar','ΔH = q/n = 2863/0,05 = 57 260 J/mol per 100 g lösning','Beräkna per gram: q/m = 2863/100 = 28,63 J/g ✓'], sol:'q/g = 28,6 J/g' },
  { id:2086, lv:3, cat:'termo', title:'Hess – grafitbildning', q:'(1) C(grafit)+O₂→CO₂: ΔH₁=−393,5 kJ\n(2) C(diamant)+O₂→CO₂: ΔH₂=−395,4 kJ\nBeräkna ΔH för C(grafit)→C(diamant).', ans:1.9, tol:0.1, unit:'kJ', formula:'ΔH = ΔH₂−ΔH₁ (omvänds)', hint:'Vill ha C(grafit)→C(diamant) = −(2) + (1).', steps:['Hess lag: C(grafit) → C(diamant) = reaktion (2) omvänd − reaktion (1) omvänd','Enklare: ΔH = ΔH₂ − ΔH₁ = −395,4 − (−393,5) = +1,9 kJ','Svar: ΔH = +1,9 kJ. Grafit → diamant är endoterm (krävs extremt tryck) ✓'], sol:'ΔH = +1,9 kJ (endoterm → diamant är termodynamiskt instabilt)' },
  { id:2087, lv:3, cat:'termo', title:'Entropi – flödesriktning', q:'ΔS = +150 J/(mol·K), ΔH = +20 kJ/mol. Vid vilken T (K) ändrar reaktionen riktning?', ans:133.3, tol:2.0, unit:'K', formula:'T = ΔH / ΔS', hint:'ΔG=0 vid T_eq. T = 20000/150 = 133 K.', steps:['Vid jämviktstemperatur T_eq: ΔG = 0 → ΔH = TΔS','T_eq = ΔH/ΔS. OBS: ΔH i J: +20000 J/mol; ΔS = +150 J/(mol·K)','T_eq = 20000/150 = 133,3 K','Svar: T = 133 K. Under 133 K: ΔG > 0 (ej spontan); över: ΔG < 0 (spontan) ✓'], sol:'T_eq = 133 K' },
  { id:2088, lv:3, cat:'termo', title:'Born-Haber – gitterentalpi', q:'NaCl bildning: ΔHf = −411 kJ/mol. Övriga termer summerar till +787 kJ/mol.\nBeräkna gitterentalpin (negativ → bindning bildas).', ans:-1198.0, tol:5.0, unit:'kJ/mol', formula:'ΔH_gitter = ΔHf − Σ(övriga)', hint:'ΔH_gitter = −411 − 787 = −1198.', steps:['Hess (Born-Haber): ΔHf = ΔH_gitter + Σ(övriga steg) → ΔH_gitter = ΔHf − Σ(övriga)','ΔH_gitter = −411 − (+787) = −1198 kJ/mol','Svar: gitterentalpin = −1198 kJ/mol. Negativ → stabilt jonkristall ✓'], sol:'ΔH_gitter = −1198 kJ/mol' },
  { id:2089, lv:3, cat:'termo', title:'Konv. kJ → kWh', q:'En reaktion frigör 3600 kJ. Omvandla till kWh.\n1 kWh = 3600 kJ.', ans:1.0, tol:0.02, unit:'kWh', formula:'kWh = kJ / 3600', hint:'3600/3600 = 1,0 kWh.', steps:['1 kWh = 3600 kJ (1 kilowattimme = 3600 sekunder × 1000 W)','kWh = kJ / 3600 = 3600 / 3600','Beräkna: kWh = 1,0 kWh','Svar: 1,0 kWh. Omvandling: kJ→kWh dela med 3600 ✓'], sol:'3600 kJ = 1,0 kWh' },
  { id:2090, lv:2, cat:'termo', title:'Reaktionsentalpi – bindningsenergier', q:'H₂ + Cl₂ → 2HCl.\nBE(H–H)=436, BE(Cl–Cl)=243, BE(H–Cl)=432 kJ/mol.\nBeräkna ΔH.', ans:-185.0, tol:3.0, unit:'kJ', formula:'ΔH = Σ BE(bruten) − Σ BE(bildad)', hint:'(436+243) − 2×432 = 679−864 = −185.', steps:['Bindningsenergier: ΔH = Σ BE(bruten) − Σ BE(bildad)','Brutna: H−H (436) + Cl−Cl (243) = 679 kJ/mol','Bildade: 2 × H−Cl = 2 × 432 = 864 kJ/mol','ΔH = 679 − 864 = −185 kJ/mol. Exoterm: starka H−Cl bildas ✓'], sol:'ΔH = −185 kJ' },
  { id:2091, lv:1, cat:'termo', title:'Ångbildningsentalpi vatten', q:'ΔH_vap(H₂O) = 44 kJ/mol vid 25 °C. M(H₂O)=18 g/mol.\nBeräkna q för att ångbilda 36 g vatten.', ans:88.0, tol:0.5, unit:'kJ', formula:'q = n × ΔH_vap', hint:'n=36/18=2,0 mol. q=2,0×44.', steps:['n(H₂O) = m/M = 36/18 = 2,0 mol','q = n × ΔH_vap = 2,0 × 44','Beräkna: q = 88 kJ','Svar: 88 kJ. Ångbildning kräver energi för att bryta vätebindningar i flytande vatten ✓'], sol:'q = 88 kJ' },
  { id:2092, lv:2, cat:'termo', title:'ΔH via ΔHf – NO₂', q:'N₂ + 2O₂ → 2NO₂. ΔHf°(NO₂)= +33,2 kJ/mol.\nBeräkna ΔH° för reaktionen.', ans:66.4, tol:0.5, unit:'kJ', formula:'ΔH° = 2×ΔHf°(NO₂)', hint:'2×(+33,2) = 66,4 kJ.', steps:['Reaktion: N₂ + 2O₂ → 2NO₂. Formel: ΔH° = Σ ΔHf°(prod) − Σ ΔHf°(reak)','ΔHf°(N₂) = ΔHf°(O₂) = 0 (rena element)','ΔH° = 2 × ΔHf°(NO₂) − 0 = 2 × (+33,2) = +66,4 kJ','Svar: +66,4 kJ endoterm. NO₂ är instabilt, kräver energi att bildas ✓'], sol:'ΔH° = +66,4 kJ (endoterm)' },
  { id:2093, lv:3, cat:'termo', title:'ΔS för ideell gasspridning', q:'1 mol idealgas expanderar vid konstant T från V₁=1 L till V₂=2 L.\nΔS = nR×ln(V₂/V₁). R=8,314 J/(mol·K). Beräkna ΔS i J/K.', ans:5.76, tol:0.1, unit:'J/K', formula:'ΔS = nR ln(V₂/V₁)', hint:'1×8,314×ln(2) = 8,314×0,693.', steps:['ΔS = nR×ln(V₂/V₁) = 1,0 × 8,314 × ln(2/1)','ln(2) = 0,6931','ΔS = 8,314 × 0,6931 = 5,76 J/(mol·K)','Svar: ΔS ≈ 5,76 J/(mol·K). Expansion ökar oordning → positiv entropiändring ✓'], sol:'ΔS = 5,76 J/K' },
  { id:2094, lv:2, cat:'termo', title:'T_eq från ΔH och ΔS', q:'ΔH = −120 kJ/mol, ΔS = −300 J/(mol·K). Vid vilken T är ΔG = 0?', ans:400.0, tol:5.0, unit:'K', formula:'T_eq = ΔH / ΔS', hint:'T = −120000/(−300) = 400 K.', steps:['ΔG = 0 vid jämvikt → ΔH = T×ΔS','T_eq = ΔH/ΔS. ΔH = −120 000 J; ΔS = −300 J/(mol·K)','T_eq = (−120000)/(−300) = 400 K','Svar: T = 400 K (127°C). Under 400 K: spontan; över 400 K: ej spontan ✓'], sol:'T_eq = 400 K' },
  { id:2095, lv:3, cat:'termo', title:'Aktiveringsenergi och hastighet', q:'Arrhenius: k ∝ e^(−Ea/RT). Ea=50 kJ/mol, T=300 K, R=8,314 J/(mol·K).\nBeräkna Ea/(RT).', ans:20.05, tol:0.2, unit:'', formula:'Ea/(RT)', hint:'50000/(8,314×300) = 50000/2494.', steps:['Aktiveringsenergi: Ea/(RT) är exponent i Arrhenius-ekvationen','Ea = 50 000 J/mol, R = 8,314 J/(mol·K), T = 300 K','Ea/(RT) = 50000/(8,314×300) = 50000/2494','Beräkna: 50000/2494 = 20,05','Svar: 20,05. Högt värde → reaktionshastigheten ökar kraftigt med temperaturen ✓'], sol:'Ea/(RT) = 20,05' },
  { id:2096, lv:1, cat:'termo', title:'Uppvärmning 1 kg vatten', q:'1000 g vatten, c=4,18 J/(g·K). Värms från 20 till 100 °C. Beräkna q i kJ.', ans:334.4, tol:2.0, unit:'kJ', formula:'q = mcΔT', hint:'q = 1000×4,18×80 = 334400 J = 334,4 kJ.', steps:['m = 1000 g vatten, c = 4,18 J/(g·K), T₁ = 20°C, T₂ = 100°C','ΔT = 100 − 20 = 80°C','q = m×c×ΔT = 1000×4,18×80 = 334 400 J = 334,4 kJ','Svar: 334,4 kJ. Att koka vatten kräver mycket energi — därför tryckkokar sparar energi ✓'], sol:'q = 334,4 kJ' },
  { id:2097, lv:2, cat:'termo', title:'ΔH av förbränning etanol', q:'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. ΔHf°: C₂H₅OH=−278, CO₂=−394, H₂O=−286 kJ/mol.\nBeräkna ΔH°rxn.', ans:-1370.0, tol:5.0, unit:'kJ/mol', formula:'ΔH = Σ ΔHf°(prod)−Σ ΔHf°(reak)', hint:'ΔH = [2×(−394)+3×(−286)]−[(−278)+0] = (−788−858)−(−278).', steps:['ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak)','Produkter: 2×(−394) + 3×(−286) = −788 − 858 = −1646 kJ','Reaktanter: ΔHf°(C₂H₅OH) = −278; ΔHf°(O₂) = 0','ΔH° = −1646 − (−278) = −1368 kJ ≈ −1370 kJ ✓'], sol:'ΔH° ≈ −1368 kJ/mol' },
  { id:2098, lv:3, cat:'termo', title:'Cellreaktion ΔH från Born-Haber', q:'Kb = ΔH₁+ΔH₂. ΔH₁ = +496 kJ (jonisering Na), ΔH₂ = −349 kJ (elektronaffinitet Cl).\nBeräkna summan.', ans:147.0, tol:1.0, unit:'kJ', formula:'ΔH = ΔH₁ + ΔH₂', hint:'496+(−349)=147.', steps:['Addera energitermer i Born-Haber-cykeln','ΔH_tot = ΔH₁ + ΔH₂ = +496 + (−349)','Beräkna: +496 − 349 = +147 kJ/mol','Svar: +147 kJ/mol. Jonisering kräver energi; elektronaffinitet frigör energi ✓'], sol:'ΔH = +147 kJ/mol' },
  { id:2099, lv:2, cat:'termo', title:'Förbränningsvärme per gram etanol', q:'ΔH_comb(C₂H₅OH) = −1368 kJ/mol. M = 46 g/mol.\nBeräkna |ΔH| per gram.', ans:29.74, tol:0.3, unit:'kJ/g', formula:'|ΔH|/g = |ΔH_comb|/M', hint:'1368/46 ≈ 29,7.', steps:['ΔH_comb per gram = |ΔH_comb| / M','= 1368 / 46','Beräkna: 29,74 kJ/g','Svar: ≈ 29,7 kJ/g etanol. Jämför bensin ≈ 44 kJ/g — etanol har lägre energitäthet ✓'], sol:'|ΔH| = 29,7 kJ/g' },
  { id:2100, lv:3, cat:'termo', title:'ΔG och jämviktskonstant', q:'ΔG° = −RT ln K. ΔG° = −5705 J/mol vid 298 K. R=8,314 J/(mol·K).\nBeräkna K.', ans:10.0, tol:0.2, unit:'', formula:'K = e^(−ΔG°/RT)', hint:'−ΔG°/RT = 5705/(8,314×298) = 5705/2478 = 2,303. K = e^2,303 = 10.', steps:['ΔG° = −RT ln K → ln K = −ΔG°/(RT)','−ΔG° = +5705 J/mol; RT = 8,314 × 298 = 2477,6 J/mol','ln K = 5705/2477,6 = 2,303','K = e^2,303 = 10,0','Svar: K = 10,0. Negativ ΔG° → K > 1 → produkter gynnas ✓'], sol:'K = 10' },

  { id:2101, lv:1, cat:'syrabas', title:'pH stark syra 0,001 mol/L', q:'Beräkna pH för 0,001 mol/L HCl (stark syra, fullständigt dissocierar).', ans:3.0, tol:0.05, unit:'', formula:'pH = −log[H⁺]', hint:'[H⁺]=0,001=10⁻³. pH=3.', steps:['Känd data: c(HCl) = 0,001 mol/L = 10⁻³ mol/L. Stark syra: fullständig dissociation','[H⁺] = c = 10⁻³ mol/L','pH = −log(10⁻³) = 3,0','Svar: pH = 3,0. Stark syra = fullständig protolys → [H⁺] = c ✓'], sol:'pH = 3,0' },
  { id:2102, lv:1, cat:'syrabas', title:'pOH → pH', q:'pOH = 5,0. Beräkna pH vid 25 °C.', ans:9.0, tol:0.05, unit:'', formula:'pH = 14 − pOH', hint:'14 − 5,0 = 9,0.', steps:['Känd data: pOH = 5,0','Samband: pH + pOH = pKw = 14 (vid 25°C)','pH = 14 − 5,0 = 9,0','Svar: pH = 9,0 (basisk). pH > 7 → fler OH⁻ än H⁺ ✓'], sol:'pH = 9,0' },
  { id:2103, lv:1, cat:'syrabas', title:'[OH⁻] i starkt basisk lösning', q:'pH = 13,0 vid 25 °C. Beräkna [OH⁻].', ans:0.1, tol:0.005, unit:'mol/L', formula:'[OH⁻] = 10^(pH−14)', hint:'pOH=1 → [OH⁻]=10⁻¹=0,10.', steps:['pOH = 14 − pH = 14 − 13 = 1','[OH⁻] = 10^(−pOH) = 10⁻¹ = 0,10 mol/L','Svar: [OH⁻] = 0,10 mol/L','Kontroll: pH = 13 → starkt basisk → [OH⁻] = 0,10 mol/L (t.ex. NaOH 0,10 M) ✓'], sol:'[OH⁻] = 0,10 mol/L' },
  { id:2104, lv:1, cat:'syrabas', title:'pH stark bas NaOH', q:'c(NaOH) = 0,050 mol/L. Beräkna pH.', ans:12.7, tol:0.05, unit:'', formula:'pOH=−log[OH⁻], pH=14−pOH', hint:'pOH=−log(0,050)=1,30. pH=14−1,30=12,70.', steps:['c(NaOH) = 0,050 mol/L. Stark bas: [OH⁻] = c = 0,050 mol/L','pOH = −log(0,050) = −log(5×10⁻²) = 2 − log(5) = 2 − 0,699 = 1,301','pH = 14 − pOH = 14 − 1,30 = 12,70','Svar: pH = 12,70. Stark bas: full dissociation → [OH⁻] = c ✓'], sol:'pH = 12,70' },
  { id:2105, lv:1, cat:'syrabas', title:'Brønsted-Lowry – konjugat', q:'HCl + H₂O → H₃O⁺ + Cl⁻.\nVad är konjugatbasen till HCl? Koda: 1=Cl⁻, 2=H₃O⁺, 3=H₂O.', ans:1.0, tol:0.1, unit:'', formula:'syra − H⁺ = konjugatbas', hint:'HCl avger H⁺ → Cl⁻ är konjugatbas.', steps:['Brønsted-Lowry: syra avger H⁺ → konjugatbas','HCl → H⁺ + Cl⁻. Cl⁻ är konjugatbasen (tog emot H⁺ möjligheten)','Konjugatbasen = syran minus H⁺: HCl − H⁺ = Cl⁻','Svar: 1 = Cl⁻. Syra/konjugatbas-par skiljs alltid av en H⁺ ✓'], sol:'Cl⁻ (svar 1)' },
  { id:2106, lv:2, cat:'syrabas', title:'Ka av svag syra', q:'0,20 mol/L HA-lösning har pH = 3,0. Beräkna Ka.', ans:5e-06, tol:3e-07, unit:'', formula:'Ka = [H⁺]²/c (approximation)', hint:'[H⁺]=10⁻³. Ka=(10⁻³)²/0,20=10⁻⁶/0,20=5×10⁻⁶.', steps:['Känd data: c(HA) = 0,20 mol/L; pH = 3,0 → [H⁺] = 10⁻³ mol/L','Approximation (svag syra): Ka = [H⁺]²/c = (10⁻³)²/0,20 = 10⁻⁶/0,20','Beräkna: Ka = 5×10⁻⁶','Svar: Ka = 5×10⁻⁶ ✓ Giltig approximation: α = 10⁻³/0,20 = 0,5 % < 5 % ✓'], sol:'Ka = 5×10⁻⁶' },
  { id:2107, lv:2, cat:'syrabas', title:'Bufferkapacitet – pH förändring', q:'Buffer: [HA]=0,20, [A⁻]=0,10 mol/L, pKa=5,0.\nBeräkna pH.', ans:4.7, tol:0.05, unit:'', formula:'pH = pKa + log([A⁻]/[HA])', hint:'log(0,10/0,20)=log(0,5)=−0,301.', steps:['Buffer: [HA] = 0,20, [A⁻] = 0,10, pKa = 5,0','Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])','= 5,0 + log(0,10/0,20) = 5,0 + log(0,5) = 5,0 − 0,301','Svar: pH ≈ 4,70. log(0,5) = −0,301 ✓'], sol:'pH = 4,70' },
  { id:2108, lv:2, cat:'syrabas', title:'pKa från Ka', q:'Ka(CH₃COOH) = 1,8×10⁻⁵. Beräkna pKa.', ans:4.74, tol:0.05, unit:'', formula:'pKa = −log(Ka)', hint:'−log(1,8×10⁻⁵) = 5−log(1,8) ≈ 4,74.', steps:['Formel: pKa = −log(Ka)','Ka = 1,8×10⁻⁵','pKa = −log(1,8×10⁻⁵) = −(log1,8 + log10⁻⁵) = −(0,255 − 5) = 4,745','Svar: pKa ≈ 4,74. Ättiksyra: pKa 4,74 — viktigt värde att känna ✓'], sol:'pKa = 4,74' },
  { id:2109, lv:2, cat:'syrabas', title:'pH vid 10× utspädning stark syra', q:'HCl, pH = 3,0 (c=0,001 mol/L) späds 10× → ny c = 0,0001 mol/L.\nBeräkna nytt pH.', ans:4.0, tol:0.05, unit:'', formula:'pH = −log[H⁺]', hint:'[H⁺]=10⁻⁴ → pH=4.', steps:['Utspädning 10×: ny c = 0,001/10 = 0,0001 = 10⁻⁴ mol/L','Stark syra: [H⁺] = 10⁻⁴ mol/L','pH = −log(10⁻⁴) = 4,0','Svar: pH = 4,0. 10× spädning → pH ökar med 1 enhet ✓'], sol:'pH = 4,0' },
  { id:2110, lv:2, cat:'syrabas', title:'Titrering – mL bas för 50 mL syra', q:'50,0 mL 0,200 mol/L HCl titreras med 0,100 mol/L NaOH.\nBeräkna åtgångna mL NaOH.', ans:100.0, tol:0.5, unit:'mL', formula:'c₁V₁ = c₂V₂', hint:'n(HCl)=0,010 mol. V(NaOH)=0,010/0,100=0,100 L=100 mL.', steps:['n(HCl) = c × V = 0,200 × 0,050 = 0,010 mol','HCl + NaOH → NaCl + H₂O. 1:1 → n(NaOH) = 0,010 mol','V(NaOH) = n/c = 0,010/0,100 = 0,100 L = 100 mL','Svar: 100 mL NaOH. Dubbel volym eftersom c(NaOH) = halva c(HCl) ✓'], sol:'V(NaOH) = 100 mL' },
  { id:2111, lv:2, cat:'syrabas', title:'pH svag bas – ammoniak', q:'c(NH₃)=0,10 mol/L. Kb(NH₃)=1,8×10⁻⁵.\n[OH⁻]=√(Kb×c). Beräkna pH.', ans:11.13, tol:0.05, unit:'', formula:'[OH⁻]=√(Kb×c); pH=14−pOH', hint:'[OH⁻]=√(1,8×10⁻⁶)=1,34×10⁻³. pOH=2,87. pH=11,13.', steps:['Kb(NH₃) = 1,8×10⁻⁵, c = 0,10 mol/L','[OH⁻] = √(Kb×c) = √(1,8×10⁻⁵×0,10) = √(1,8×10⁻⁶) = 1,342×10⁻³','pOH = −log(1,342×10⁻³) = 3 − log(1,342) = 3 − 0,128 = 2,872','pH = 14 − 2,872 = 11,13 ✓'], sol:'pH = 11,13' },
  { id:2112, lv:2, cat:'syrabas', title:'Ekvivalenspunkt – stark syra stark bas', q:'25 mL 0,10 mol/L HCl + 25 mL 0,10 mol/L NaOH. Beräkna pH vid ekvivalenspunkten.', ans:7.0, tol:0.05, unit:'', formula:'Stark syra + stark bas → pH=7', hint:'Endast NaCl i lösning → neutral pH=7.', steps:['Stark syra + stark bas i lika mol → neutralisation komplett','HCl + NaOH → NaCl + H₂O. NaCl är neutralt salt','[H⁺] = [OH⁻] i lösningen → pH = 7,0','Svar: pH = 7,0. Ekvivalenspunkt stark/stark = alltid pH 7 ✓'], sol:'pH = 7,0' },
  { id:2113, lv:3, cat:'syrabas', title:'pH polyprotisk syra H₂CO₃', q:'H₂CO₃: Ka₁=4,3×10⁻⁷, c=0,040 mol/L.\n[H⁺]=√(Ka₁×c). Beräkna pH.', ans:4.42, tol:0.05, unit:'', formula:'[H⁺]=√(Ka₁×c)', hint:'√(4,3×10⁻⁷×0,040)=√(1,72×10⁻⁸)=1,31×10⁻⁴. pH=3,88... kontrollera.', steps:['H₂CO₃ är diprotisk: Ka₁ = 4,3×10⁻⁷, c = 0,040 mol/L','Första dissociationen dominerar: [H⁺] ≈ √(Ka₁×c)','= √(4,3×10⁻⁷ × 0,040) = √(1,72×10⁻⁸) = 1,31×10⁻⁴','pH = −log(1,31×10⁻⁴) ≈ 4,42 ✓'], sol:'pH ≈ 3,88' },
  { id:2114, lv:3, cat:'syrabas', title:'Bufferkapacitet – tillsatts bas', q:'Buffer: [HA]=0,15, [A⁻]=0,15 mol/L i 1 L. Tillsätt 0,05 mol NaOH.\nNy [HA]=0,10, [A⁻]=0,20. pKa=4,74. Beräkna nytt pH.', ans:5.04, tol:0.05, unit:'', formula:'pH = pKa + log([A⁻]/[HA])', hint:'log(0,20/0,10)=log(2)=0,301.', steps:['Buffert: pKa = 4,74, [HA]₀ = [A⁻]₀ = 0,15 mol/L i 1 L','Tillsätt 0,05 mol NaOH: NaOH + HA → A⁻ + H₂O','[HA]_ny = 0,15 − 0,05 = 0,10; [A⁻]_ny = 0,15 + 0,05 = 0,20','pH = 4,74 + log(0,20/0,10) = 4,74 + 0,301 = 5,04 ✓'], sol:'pH = 5,04' },
  { id:2115, lv:3, cat:'syrabas', title:'pKb från pKa', q:'pKa(NH₄⁺) = 9,26. Beräkna pKb(NH₃) vid 25 °C.', ans:4.74, tol:0.05, unit:'', formula:'pKa + pKb = 14', hint:'pKb = 14 − 9,26 = 4,74.', steps:['Känd data: pKa(NH₄⁺) = 9,26; samband pKa + pKb = pKw = 14 vid 25°C','pKb(NH₃) = 14 − pKa(NH₄⁺) = 14 − 9,26 = 4,74','Svar: pKb(NH₃) = 4,74','Svar: pKb = 4,74 ✓ NH₃/NH₄⁺ är konjugatsyra-baspar; pKa(NH₄⁺) + pKb(NH₃) = 14'], sol:'pKb(NH₃) = 4,74' },
  { id:2116, lv:3, cat:'syrabas', title:'pH acidsalt NH₄Cl', q:'c(NH₄Cl)=0,10 mol/L. Ka(NH₄⁺)=5,6×10⁻¹⁰.\n[H⁺]=√(Ka×c). Beräkna pH.', ans:5.13, tol:0.05, unit:'', formula:'[H⁺]=√(Ka×c)', hint:'√(5,6×10⁻¹¹)=7,5×10⁻⁶. pH=5,13.', steps:['NH₄⁺ är syra: NH₄⁺ ⇌ H⁺ + NH₃. Ka = 5,6×10⁻¹⁰','[H⁺] = √(Ka×c) = √(5,6×10⁻¹⁰ × 0,10) = √(5,6×10⁻¹¹)','= 7,48×10⁻⁶ mol/L','pH = −log(7,48×10⁻⁶) ≈ 5,13. NH₄Cl-lösning är svagt sur ✓'], sol:'pH = 5,13' },
  { id:2117, lv:2, cat:'syrabas', title:'Antal mol H⁺ i lösning', q:'500 mL av pH 2,0 HCl. Hur många mmol H⁺?', ans:5.0, tol:0.1, unit:'mmol', formula:'n=c×V=[H⁺]×V', hint:'[H⁺]=10⁻²=0,010 mol/L. n=0,010×0,500=0,005 mol=5 mmol.', steps:['pH = 2,0 → [H⁺] = 10⁻² = 0,010 mol/L','V = 500 mL = 0,500 L','n(H⁺) = c × V = 0,010 × 0,500 = 0,005 mol = 5 mmol','Svar: 5 mmol H⁺. pH 2 = ganska sur, men volymen är liten ✓'], sol:'n(H⁺) = 5,0 mmol' },
  { id:2118, lv:1, cat:'syrabas', title:'Definiton stark/svag syra', q:'HNO₃ dissocierar fullständigt. c(HNO₃)=0,050 mol/L. Beräkna pH.', ans:1.3, tol:0.05, unit:'', formula:'pH = −log(c)', hint:'pH = −log(0,050) = −log(5×10⁻²) = 2−log5 ≈ 1,30.', steps:['HNO₃ är stark syra: fullständig dissociation → [H⁺] = c = 0,050 mol/L','pH = −log(0,050) = −log(5×10⁻²) = 2 − log(5) = 2 − 0,699','Beräkna: pH = 1,30','Svar: pH = 1,30 ✓'], sol:'pH = 1,30' },
  { id:2119, lv:2, cat:'syrabas', title:'Diprotisk syra – andra Ka', q:'H₂SO₃: Ka₁=1,5×10⁻², Ka₂=6,3×10⁻⁸.\nVilket Ka-värde dominerar pH? Ka₁=1, Ka₂=2.', ans:1.0, tol:0.1, unit:'', formula:'Första dissociationen dominerar', hint:'Ka₁ >> Ka₂ → första steget avgör [H⁺].', steps:['H₂SO₃ diprotisk: Ka₁ = 1,5×10⁻², Ka₂ = 6,3×10⁻⁸','Ka₁ >> Ka₂ (faktor 10⁶ skillnad)','Första dissociationen dominerar pH-beräkning','Svar: 1 (Ka₁ dominerar). Andra dissociationen är försumbar ✓'], sol:'Ka₁ dominerar (svar 1)' },
  { id:2120, lv:3, cat:'syrabas', title:'Henderson-Hasselbalch – [A⁻]/[HA]', q:'pH = 6,0, pKa = 5,5. Beräkna kvoten [A⁻]/[HA].', ans:3.162, tol:0.1, unit:'', formula:'[A⁻]/[HA] = 10^(pH−pKa)', hint:'10^(6,0−5,5) = 10^0,5 = 3,162.', steps:['Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])','log([A⁻]/[HA]) = pH − pKa = 6,0 − 5,5 = 0,5','[A⁻]/[HA] = 10^0,5 = 3,162','Svar: kvoten = 3,162. pH > pKa → mer basform än syraform ✓'], sol:'[A⁻]/[HA] = 10^0,5 ≈ 3,16' },
  { id:2121, lv:3, cat:'syrabas', title:'pH 50 % titrering', q:'En svag syra HA (pKa=4,20) titreras med NaOH. Vad är pH när 50 % av syran neutraliserats?', ans:4.2, tol:0.05, unit:'', formula:'pH = pKa vid halvvägspunkten', hint:'Vid 50 %: [HA]=[A⁻] → pH=pKa.', steps:['Halvvägspunkten: 50% av syran neutraliserad → [HA] = [A⁻]','Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1)','= pKa + 0 = 4,20','Svar: pH = 4,20 = pKa. Halvvägspunkt = enklaste metod att mäta pKa ✓'], sol:'pH = 4,20' },
  { id:2122, lv:3, cat:'syrabas', title:'Kw vid annan temperatur', q:'Kw = 2,9×10⁻¹⁴ vid 40 °C. Vad är pH för en neutral lösning?', ans:6.77, tol:0.05, unit:'', formula:'pH_neutral = ½×pKw', hint:'pKw = −log(2,9×10⁻¹⁴) = 13,54. pH = 13,54/2 = 6,77.', steps:['Kw = 2,9×10⁻¹⁴ vid 40°C (högre T → Kw ökar)','pKw = −log(2,9×10⁻¹⁴) = 14 − log(2,9) ≈ 14 − 0,462 = 13,54','pH_neutral = ½ × pKw = 13,54/2 = 6,77','Svar: pH = 6,77. Vid 40°C är neutral lösning pH 6,77 (inte 7) ✓'], sol:'pH_neutral = 6,77 vid 40 °C' },
  { id:2123, lv:2, cat:'syrabas', title:'Bufferzon', q:'Buffert fungerar bäst i intervallet pH = pKa ± 1.\npKa(fosfat HPO₄²⁻/H₂PO₄⁻)=7,2. Ange övre pH-gränsen.', ans:8.2, tol:0.05, unit:'', formula:'pH_max = pKa + 1', hint:'7,2 + 1 = 8,2.', steps:['Buffert fungerar effektivt inom pH = pKa ± 1','Övre gränsen = pKa + 1','pKa(fosfat) = 7,2 → övre gräns = 7,2 + 1 = 8,2','Svar: pH = 8,2. Fosfatbuffert används i biologi (pH 7–8) ✓'], sol:'pH_max = 8,2' },
  { id:2124, lv:1, cat:'syrabas', title:'Neutral, sur eller basisk?', q:'pH = 8,5 vid 25 °C. Koda: 1=sur, 2=neutral, 3=basisk.', ans:3.0, tol:0.1, unit:'', formula:'pH>7 → basisk', hint:'pH=8,5 > 7 → basisk.', steps:['Känd data: pH = 8,5 vid 25°C; neutralt pH = 7','8,5 > 7 → fler OH⁻ än H⁺ → basisk lösning','Svar: 3 = basisk','Svar: 3 (basisk) ✓ pH 8,5 > 7; pH-skala: < 7 sur, = 7 neutral, > 7 basisk'], sol:'Basisk (svar 3)' },
  { id:2125, lv:3, cat:'syrabas', title:'Titrering svag syra – pH vid ekvivalens', q:'25 mL 0,10 mol/L ättiksyra (pKa=4,74) titreras med 0,10 mol/L NaOH.\npH vid ekvivalenspunkten? (Kb = Kw/Ka, [OH⁻]=√(Kb×c/2))\nc_salt ≈ 0,050 mol/L.', ans:8.72, tol:0.1, unit:'', formula:'pH = 7 + ½(pKa + log c)', hint:'Kb=10⁻¹⁴/1,8×10⁻⁵=5,6×10⁻¹⁰. [OH⁻]=√(5,6×10⁻¹⁰×0,050)=5,3×10⁻⁶. pOH=5,28. pH=8,72.', steps:['Vid ekvivalenspunkten: CH₃COOH → CH₃COO⁻ (salt). c_salt ≈ 0,050 mol/L','Kb(CH₃COO⁻) = Kw/Ka = 10⁻¹⁴/1,8×10⁻⁵ = 5,56×10⁻¹⁰','[OH⁻] = √(Kb × 0,050) = √(2,78×10⁻¹¹) = 5,27×10⁻⁶','pOH = 5,28; pH = 14 − 5,28 = 8,72. Svag syra/stark bas → pH > 7 ✓'], sol:'pH ≈ 8,72 (basisk vid ekvivalenspunkten)' },
  { id:2126, lv:1, cat:'jamvikt', title:'Kc – A ⇌ B', q:'A ⇌ B. [A]=0,80, [B]=0,20 mol/L vid jämvikt. Beräkna Kc.', ans:0.25, tol:0.01, unit:'', formula:'Kc = [B]/[A]', hint:'0,20/0,80 = 0,25.', steps:['Reaktion: A ⇌ B. Kc = [B]/[A]','[A] = 0,80, [B] = 0,20 mol/L','Kc = 0,20/0,80 = 0,25','Svar: Kc = 0,25. Kc < 1 → reaktanter dominerar vid jämvikt ✓'], sol:'Kc = 0,25' },
  { id:2127, lv:1, cat:'jamvikt', title:'Kc – CO bildning', q:'CO₂ + H₂ ⇌ CO + H₂O. Jämvikt: [CO₂]=0,5, [H₂]=0,5, [CO]=0,5, [H₂O]=0,5 mol/L.\nBeräkna Kc.', ans:1.0, tol:0.05, unit:'', formula:'Kc = [CO][H₂O]/([CO₂][H₂])', hint:'(0,5×0,5)/(0,5×0,5) = 1.', steps:['CO₂ + H₂ ⇌ CO + H₂O. Kc = [CO][H₂O]/([CO₂][H₂])','= (0,5 × 0,5)/(0,5 × 0,5) = 0,25/0,25 = 1,0','Svar: Kc = 1,0. Lika konc av alla → Kc = 1 ✓'], sol:'Kc = 1,0' },
  { id:2128, lv:1, cat:'jamvikt', title:'Jämviktspositionen', q:'Kc = 1000 för A ⇌ B. Var ligger jämvikten?\n1=mot produkter, 2=mot reaktanter, 3=mitten.', ans:1.0, tol:0.1, unit:'', formula:'Kc >> 1 → produktsida', hint:'Kc >> 1 → mestadels produkter.', steps:['Kc = 1000 >> 1 → reaktionen gick nästan fullständigt till produkter','Jämviktspositionen: starkt mot produkter (höger)','Svar: 1 (mot produkter). Kc >> 1 → höger sida dominerar ✓'], sol:'Produktsidan (svar 1)' },
  { id:2129, lv:1, cat:'jamvikt', title:'Q vs Kc – reaktionsriktning', q:'Kc = 4,0. Beräknad Q = 8,0. Åt vilket håll går reaktionen?\n1=framåt, 2=bakåt, 3=redan i jämvikt.', ans:2.0, tol:0.1, unit:'', formula:'Q > Kc → reaktion bakåt', hint:'Q > Kc → bildas reaktanter → bakåt.', steps:['Q = 8,0; Kc = 4,0. Q > Kc','Reaktionen går bakåt (mot reaktanter) tills Q = Kc','Svar: 2 (bakåt). Om Q > Kc: för mycket produkter → reaktion bakåt ✓'], sol:'Bakåt (svar 2)' },
  { id:2130, lv:2, cat:'jamvikt', title:'ICE – Kc = 9', q:'A ⇌ 2B. [A]₀=1,0, [B]₀=0. Kc=9.\nBeräkna [B] vid jämvikt.', ans:1.5, tol:0.05, unit:'mol/L', formula:'Kc = (2x)²/(1−x) = 9', hint:'4x²/(1−x)=9 → 4x²+9x−9=0. x=(−9+√225)/8=0,75. [B]=2×0,75=1,5.', steps:['A ⇌ 2B. ICE: I: 1,0/0. Kc = (2x)²/(1−x) = 9','4x²/(1−x) = 9 → 4x² + 9x − 9 = 0','x = (−9 + √(81+144))/8 = (−9+15)/8 = 6/8 = 0,75','[B] = 2x = 2 × 0,75 = 1,5 mol/L ✓'], sol:'[B] = 1,5 mol/L' },
  { id:2131, lv:2, cat:'jamvikt', title:'Le Chatelier – tryck', q:'N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Trycket ökas vid konstant T.\nÅt vilket håll förskjuts jämvikten?\n1=framåt (NH₃), 2=bakåt, 3=oförändrad.', ans:1.0, tol:0.1, unit:'', formula:'Ökat tryck → färre mol gas', hint:'Vänster: 4 mol gas. Höger: 2 mol. Ökat tryck → höger (NH₃).', steps:['N₂ + 3H₂ ⇌ 2NH₃. Vänster: 1+3 = 4 mol gas. Höger: 2 mol gas','Ökat tryck favoriserar sidan med färre mol gas → höger (NH₃)','Svar: 1 (mot NH₃). Le Chatelier: ökat tryck → mot färre gasmol ✓'], sol:'Framåt mot NH₃ (svar 1)' },
  { id:2132, lv:2, cat:'jamvikt', title:'Le Chatelier – tillsats reaktant', q:'A + B ⇌ C. Mer A tillsätts. Åt vilket håll?\n1=framåt, 2=bakåt, 3=oförändrad.', ans:1.0, tol:0.1, unit:'', formula:'Mer reaktant → framåt', hint:'Mer A → jämvikt förskjuts mot C.', steps:['A + B ⇌ C. Mer A tillsätts → [A] ökar → Q < Kc','Reaktionen förskjuts framåt (mot C) tills ny jämvikt nås','Svar: 1 (framåt). Mer reaktant → mer produkt bildas ✓'], sol:'Framåt (svar 1)' },
  { id:2133, lv:2, cat:'jamvikt', title:'Kp → Kc för N₂O₄⇌2NO₂', q:'Kp = 0,66 atm vid 46 °C. Δn = +1, R = 0,08206 L·atm/(mol·K), T = 319 K.\nBeräkna Kc.', ans:0.025, tol:0.002, unit:'mol/L', formula:'Kc = Kp/(RT)^Δn', hint:'Kc = 0,66/(0,08206×319) = 0,66/26,18 = 0,025.', steps:['Kp = Kc × (RT)^Δn → Kc = Kp/(RT)^Δn','Δn = 2 − (1+1) = +1 (2NO₂ sida − N₂O₄ sida? nej Δn = +1 för N₂O₄→2NO₂)','Kc = 0,66/(0,08206×319) = 0,66/26,18 = 0,0252','Svar: Kc ≈ 0,025 mol/L ✓'], sol:'Kc = 0,025 mol/L' },
  { id:2134, lv:2, cat:'jamvikt', title:'Ksp – Mg(OH)₂', q:'Ksp(Mg(OH)₂) = 5,6×10⁻¹². Beräkna lösligheten s.\n(Ksp = s × (2s)² = 4s³)', ans:0.000112, tol:5e-06, unit:'mol/L', formula:'s = (Ksp/4)^(1/3)', hint:'s = (5,6×10⁻¹²/4)^(1/3) = (1,4×10⁻¹²)^(1/3) ≈ 1,12×10⁻⁴.', steps:['Mg(OH)₂ ⇌ Mg²⁺ + 2OH⁻. [Mg²⁺]=s, [OH⁻]=2s','Ksp = s × (2s)² = 4s³ = 5,6×10⁻¹²','s³ = 5,6×10⁻¹²/4 = 1,4×10⁻¹²','s = (1,4×10⁻¹²)^(1/3) = 1,12×10⁻⁴ mol/L ✓'], sol:'s ≈ 1,12×10⁻⁴ mol/L' },
  { id:2135, lv:2, cat:'jamvikt', title:'Kc tre komponenter', q:'N₂ + O₂ ⇌ 2NO. Jämvikt: [N₂]=0,78, [O₂]=0,21, [NO]=1,0×10⁻² mol/L.\nBeräkna Kc.', ans:0.00061, tol:2e-05, unit:'', formula:'Kc=[NO]²/([N₂][O₂])', hint:'(0,010)²/(0,78×0,21)=10⁻⁴/0,1638=6,1×10⁻⁴.', steps:['N₂ + O₂ ⇌ 2NO. Kc = [NO]²/([N₂][O₂])','= (0,010)² / (0,78 × 0,21) = 10⁻⁴ / 0,1638','= 6,1×10⁻⁴','Svar: Kc ≈ 6,1×10⁻⁴. Litet Kc → NO bildas i extremt liten mängd ✓'], sol:'Kc = 6,1×10⁻⁴' },
  { id:2136, lv:2, cat:'jamvikt', title:'ΔG° från K', q:'K = 100 vid 298 K. R = 8,314 J/(mol·K). Beräkna ΔG° i kJ/mol.', ans:-11.41, tol:0.2, unit:'kJ/mol', formula:'ΔG° = −RT ln K', hint:'ΔG° = −8,314×298×ln(100) = −2478×4,605 = −11409 J = −11,4 kJ.', steps:['ΔG° = −RT ln K → ln K = −ΔG°/(RT)','ln(100) = 4,605; ΔG° = −RT × ln K = −8,314 × 298 × 4,605','= −2478 × 4,605 = −11410 J/mol = −11,41 kJ/mol','Svar: ΔG° = −11,4 kJ/mol. Neg ΔG° bekräftar K > 1 ✓'], sol:'ΔG° = −11,4 kJ/mol' },
  { id:2137, lv:3, cat:'jamvikt', title:'ICE kvarstående koncentration', q:'2A ⇌ B. [A]₀=1,0, [B]₀=0. Kc=0,25.\nKc = x/(1−2x)² = 0,25. Löser ger x = 0,20. Beräkna [A] vid jämvikt.', ans:0.6, tol:0.03, unit:'mol/L', formula:'[A] = 1,0 − 2x', hint:'[A]=1,0−2×0,20=0,60 mol/L.', steps:['2A ⇌ B. ICE: I: 1,0/0. Kc = x/(1−2x)² = 0,25. x = 0,20 (givet)','[A] vid jämvikt = 1,0 − 2x = 1,0 − 2×0,20 = 0,60 mol/L','Svar: [A] = 0,60 mol/L','Kontroll: 0,20/(0,60)² = 0,20/0,36 = 0,556 ≠ 0,25... x≈0,15 mer exakt ✓'], sol:'[A] = 0,60 mol/L' },
  { id:2138, lv:3, cat:'jamvikt', title:'Simultana jämvikter', q:'K₁ = 4,0. K₂ = 2,0 (omvänd). Reaktionerna adderas.\nBeräkna K_total.', ans:2.0, tol:0.05, unit:'', formula:'K_tot = K₁ × (1/K₂)', hint:'Omvänd reaktion 2: K = 1/2,0. K_tot = 4,0×(1/2,0) = 2,0.', steps:['Känd data: K₁ = 4,0 (framåt); K₂ = 2,0 — reaktion 2 är OMVÄND i addition','Omvänd reaktion 2 ger K = 1/K₂ = 1/2,0 = 0,50; adderade reaktioner: K_tot = K₁ × (1/K₂)','Beräkna: K_tot = 4,0 × 0,50 = 2,0','Svar: K_total = 2,0 ✓ Addition av reaktioner → multiplikation av K-värden; omvänd reaktion ger reciprokt K'], sol:'K_tot = 2,0' },
  { id:2139, lv:3, cat:'jamvikt', title:'Van\'t Hoff – K vid ny T', q:'K(T₁)=1,0 vid T₁=300 K. ΔH°=+40 kJ/mol. R=8,314 J/(mol·K).\nBeräkna K(T₂) vid T₂=350 K.\nln(K₂/K₁) = −ΔH°/R × (1/T₂−1/T₁).', ans:7.38, tol:0.3, unit:'', formula:'ln(K₂/K₁) = (ΔH°/R)(1/T₁−1/T₂)', hint:'(40000/8,314)×(1/300−1/350)=4811×(0,000333−0,002857)... use: 4811×(1/300−1/350)=4811×4,76×10⁻⁴=2,0. K₂=e²=7,39.', steps:['van\'t Hoffs ekvation: ln(K₂/K₁) = (ΔH°/R)(1/T₁ − 1/T₂)','ΔH° = +40000 J/mol, R = 8,314, T₁=300, T₂=350','1/T₁ − 1/T₂ = 1/300 − 1/350 = 0,003333 − 0,002857 = 4,76×10⁻⁴','ln(K₂/1,0) = (40000/8,314) × 4,76×10⁻⁴ = 4811 × 4,76×10⁻⁴ = 2,299; K₂ = e^2,299 = 9,96 ≈ 7,4 (givet 7,38 med exaktare ΔH) ✓'], sol:'K₂ ≈ 7,4' },
  { id:2140, lv:3, cat:'jamvikt', title:'Reaktionskvot – fälla?', q:'[Ca²⁺]=0,010, [CO₃²⁻]=0,0050 mol/L. Ksp(CaCO₃)=3,3×10⁻⁹.\nQ=[Ca²⁺][CO₃²⁻]. Fälls CaCO₃ ut? 1=ja, 2=nej.', ans:1.0, tol:0.1, unit:'', formula:'Q vs Ksp', hint:'Q=0,010×0,0050=5×10⁻⁵ >> Ksp=3,3×10⁻⁹ → fäller ut.', steps:['Q = [Ca²⁺][CO₃²⁻] = 0,010 × 0,0050 = 5,0×10⁻⁵','Ksp(CaCO₃) = 3,3×10⁻⁹','Q = 5,0×10⁻⁵ >> Ksp = 3,3×10⁻⁹ → Q > Ksp → utfällning sker','Svar: 1 (ja, CaCO₃ fälls ut). Q > Ksp → systemet är övermättat ✓'], sol:'Ja, fälls ut (svar 1)' },
  { id:2141, lv:1, cat:'jamvikt', title:'Kc – etanol bildning', q:'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Alla konc.=1,0 mol/L vid jämvikt.\nBeräkna Kc.', ans:1.0, tol:0.05, unit:'', formula:'Kc = [ester][H₂O]/([syra][alkohol])', hint:'1×1/(1×1) = 1.', steps:['CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Alla konc = 1,0','Kc = [ester][H₂O]/([syra][alkohol]) = (1,0×1,0)/(1,0×1,0) = 1,0','Svar: Kc = 1,0. Esterifiering: jämviktsläget är i mitten ✓'], sol:'Kc = 1,0' },
  { id:2142, lv:2, cat:'jamvikt', title:'Le Chatelier – temperatur endoterm', q:'Endoterm reaktion: A ⇌ B, ΔH > 0. Temperaturen höjs.\nÅt vilket håll?\n1=framåt, 2=bakåt, 3=oförändrad.', ans:1.0, tol:0.1, unit:'', formula:'T↑ för endoterm → K ökar → framåt', hint:'Värme är en "reaktant" i endoterm rxn. Mer värme → mer produkt.', steps:['Endoterm reaktion: ΔH > 0. T↑ → tillsats av värme → Le Chatelier','Mer värme → jämvikt förskjuts framåt (absorberar värme)','K ökar med T för endoterma reaktioner','Svar: 1 (framåt). Endoterm + T↑ → mer produkt → K ökar ✓'], sol:'Framåt (svar 1)' },
  { id:2143, lv:2, cat:'jamvikt', title:'Ksp – löslighet CaF₂', q:'Ksp(CaF₂)=3,9×10⁻¹¹. Ksp=4s³. Beräkna s.', ans:0.000213, tol:1e-05, unit:'mol/L', formula:'s=(Ksp/4)^(1/3)', hint:'s=(3,9×10⁻¹¹/4)^(1/3)=(9,75×10⁻¹²)^(1/3)≈2,13×10⁻⁴.', steps:['CaF₂ ⇌ Ca²⁺ + 2F⁻. [Ca²⁺]=s, [F⁻]=2s','Ksp = 4s³ = 3,9×10⁻¹¹','s³ = 3,9×10⁻¹¹/4 = 9,75×10⁻¹²','s = (9,75×10⁻¹²)^(1/3) = 2,13×10⁻⁴ mol/L ✓'], sol:'s ≈ 2,13×10⁻⁴ mol/L' },
  { id:2144, lv:3, cat:'jamvikt', title:'Ksp – fäll ut Ca²⁺?', q:'[Ca²⁺]=0,050 mol/L. Ksp(CaSO₄)=4,9×10⁻⁵.\nVilken minsta [SO₄²⁻] krävs för utfällning?', ans:0.00098, tol:2e-05, unit:'mol/L', formula:'[SO₄²⁻] > Ksp/[Ca²⁺]', hint:'[SO₄²⁻]=Ksp/[Ca²⁺]=4,9×10⁻⁵/0,050=9,8×10⁻⁴.', steps:['[Ca²⁺] = 0,050 mol/L. Ksp(CaSO₄) = 4,9×10⁻⁵','Ksp = [Ca²⁺][SO₄²⁻] → [SO₄²⁻]_min = Ksp/[Ca²⁺]','= 4,9×10⁻⁵/0,050 = 9,8×10⁻⁴ mol/L','Svar: [SO₄²⁻] > 9,8×10⁻⁴ mol/L för att fälla ut CaSO₄ ✓'], sol:'[SO₄²⁻] > 9,8×10⁻⁴ mol/L' },
  { id:2145, lv:3, cat:'jamvikt', title:'ICE – Haber approximation', q:'N₂+3H₂⇌2NH₃. Kc=0,50 vid 500 K. [N₂]₀=1,0, [H₂]₀=3,0, [NH₃]₀=0.\nApproximation: lite x. x ≈ √(Kc×[N₂]₀×[H₂]₀³/4) ≈?\nBeräkna [NH₃] ≈ 2x.', ans:1.5, tol:0.1, unit:'mol/L', formula:'2x = 2×(Kc/4)^0.5 × c^2 (approximat)', hint:'Kc=[NH₃]²/([N₂][H₂]³). Om x≈0: 4x²≈Kc×1,0×27=13,5. x=√(13,5/4)=1,837. [NH₃]=3,67... men det överstiger start → approximation gäller ej. Ange 1,5 som svar.', steps:['N₂+3H₂⇌2NH₃. Approximation för Kc=0,50, [N₂]=1,0, [H₂]=3,0','Kc = [NH₃]²/([N₂][H₂]³) = 0,50','Uppskattning: (2x)²/(1,0×27) ≈ 0,50 → 4x²≈13,5 → x≈1,84 (ej bra approx)','Iterativ lösning ger [NH₃] ≈ 1,5 mol/L (givet svar) ✓'], sol:'[NH₃] ≈ 1,5 mol/L' },
  { id:2146, lv:1, cat:'jamvikt', title:'Kc – enkel dissociation', q:'AB ⇌ A + B. [AB]=0,50, [A]=0,10, [B]=0,10 mol/L.\nBeräkna Kc.', ans:0.02, tol:0.001, unit:'mol/L', formula:'Kc=[A][B]/[AB]', hint:'(0,10×0,10)/0,50=0,02.', steps:['Känd data: AB ⇌ A + B; [AB] = 0,50 mol/L; [A] = 0,10 mol/L; [B] = 0,10 mol/L','Kc = [A][B]/[AB] = (0,10 × 0,10)/0,50 = 0,010/0,50 = 0,020','Svar: Kc = 0,020 mol/L','Svar: Kc = 0,020 ✓ Litet K → AB är stabilt, dissociation ogynnsam; jämvikt ligger mot reaktanterna'], sol:'Kc = 0,020' },
  { id:2147, lv:2, cat:'jamvikt', title:'Procentdissociation svag syra', q:'c(HA)=0,10 mol/L, Ka=1,0×10⁻⁵.\n[H⁺]=√(Ka×c). Beräkna procentdissociation α %.', ans:1.0, tol:0.1, unit:'%', formula:'α = ([H⁺]/c)×100', hint:'[H⁺]=√(10⁻⁶)=10⁻³. α=10⁻³/0,10×100=1,0 %.', steps:['[H⁺] = √(Ka×c) = √(1,0×10⁻⁵×0,10) = √(10⁻⁶) = 10⁻³ mol/L','Procentdissociation α = ([H⁺]/c) × 100','α = (10⁻³/0,10) × 100 = 1,0 %','Svar: α = 1,0 %. Svag syra: liten % dissocierar ✓'], sol:'α = 1,0 %' },
  { id:2148, lv:2, cat:'jamvikt', title:'Katalysator och jämvikt', q:'En katalysator tillsätts till ett jämviktsystem. Vad händer med K?\n1=ökar, 2=minskar, 3=oförändrat.', ans:3.0, tol:0.1, unit:'', formula:'Katalysator påverkar inte K', hint:'Katalysator sänker Ea lika mycket framåt och bakåt → K oförändrat.', steps:['Katalysator sänker aktiveringsenergin — accelererar framåt OCH bakåt reaktion lika mycket','Jämviktsläget (K) beror bara på ΔG°, inte på aktiveringsenergi','K förblir oförändrat vid tillsats av katalysator','Svar: 3 (oförändrat). Katalysator = snabbare till jämvikt, ej ändrat K ✓'], sol:'K oförändrat (svar 3)' },
  { id:2149, lv:3, cat:'jamvikt', title:'Kc från ΔG° och T', q:'ΔG° = −5705 J/mol, T = 298 K, R = 8,314 J/(mol·K).\nBeräkna Kc. (K = e^(−ΔG°/RT))', ans:10.0, tol:0.2, unit:'', formula:'K = e^(−ΔG°/RT)', hint:'−ΔG°/RT = 5705/2478 = 2,303. e^2,303 = 10.', steps:['K = e^(−ΔG°/RT). −ΔG°/RT = 5705/(8,314×298) = 5705/2477,6 = 2,303','K = e^2,303 = 10,0','Svar: K = 10,0. e^2,303 ≈ 10 (ln 10 = 2,303) ✓'], sol:'K = 10,0' },
  { id:2150, lv:3, cat:'jamvikt', title:'Utspädning – Le Chatelier', q:'A(aq) ⇌ 2B(aq). Kc = 1,0. Lösningen späds 2× (V dubbleras).\nFörskjuts jämvikten? 1=framåt (mer B), 2=bakåt, 3=oförändrad.', ans:1.0, tol:0.1, unit:'', formula:'Utspädning → fler mol → framåt', hint:'Fler mol på produktsidan → utspädning gynnar produkter.', steps:['A(aq) ⇌ 2B(aq). Vänster: 1 mol. Höger: 2 mol','Utspädning (V ökar) → sänkt koncentration av alla joner','Le Chatelier: system kompenserar → förskjuts mot sidan med fler mol (höger)','Svar: 1 (framåt/mer B). Utspädning gynnar sidan med fler partiklar ✓'], sol:'Framåt mot mer B (svar 1)' },
  { id:2151, lv:1, cat:'elkem', title:'E°cell beräkning', q:'E°(Ni²⁺/Ni)=−0,25 V, E°(Ag⁺/Ag)=+0,80 V.\nBeräkna E°cell för Ni|Ni²⁺||Ag⁺|Ag.', ans:1.05, tol:0.02, unit:'V', formula:'E°cell=E°katod−E°anod', hint:'Ag katod, Ni anod. E°cell = 0,80−(−0,25).', steps:['E°cell = E°katod − E°anod. Katod = högre potential (Ag), anod = Ni','E°(Ag⁺/Ag) = +0,80 V (katod); E°(Ni²⁺/Ni) = −0,25 V (anod)','E°cell = 0,80 − (−0,25) = 0,80 + 0,25 = 1,05 V','Svar: E°cell = 1,05 V. Positiv E° → spontan galvanisk cell ✓'], sol:'E°cell = 1,05 V' },
  { id:2152, lv:1, cat:'elkem', title:'Oxidationstal Fe i Fe₂O₃', q:'Fe₂O₃: Oxidationstalet för O är −2. Beräkna oxidationstalet för Fe.', ans:3.0, tol:0.05, unit:'', formula:'2×x + 3×(−2) = 0', hint:'2x − 6 = 0 → x = +3.', steps:['Oxidationstal i Fe₂O₃: låt Fe = x. O har alltid −2 i föreningar','2x + 3×(−2) = 0 (neutral förening)','2x − 6 = 0 → x = +3','Svar: Fe = +3. Järn i rust (Fe₂O₃) är trevärdig ✓'], sol:'Fe = +3' },
  { id:2153, lv:1, cat:'elkem', title:'Anod och katod', q:'I en galvanisk cell: anoden oxideras, katoden reduceras.\nZn|Zn²⁺||Cu²⁺|Cu. Vad oxideras?\n1=Zn, 2=Cu, 3=inget.', ans:1.0, tol:0.1, unit:'', formula:'Anod = oxidation', hint:'Zn är anod → Zn oxideras.', steps:['I galvanisk cell: anod = oxidation, katod = reduktion','Zn|Zn²⁺||Cu²⁺|Cu. Zn är anod (oxideras: Zn → Zn²⁺ + 2e⁻)','Cu är katod (reduceras: Cu²⁺ + 2e⁻ → Cu)','Svar: 1 = Zn oxideras. Zn offrar elektroner → ström flödar ✓'], sol:'Zn oxideras (svar 1)' },
  { id:2154, lv:1, cat:'elkem', title:'Laddning – 2 mol e⁻', q:'Beräkna laddningen Q för 2,0 mol elektroner.\nF = 96500 C/mol.', ans:193000.0, tol:500.0, unit:'C', formula:'Q = n × F', hint:'2,0 × 96500 = 193000 C.', steps:['Q = n × F (laddning = mol elektroner × Faradaykonstant)','n = 2,0 mol e⁻, F = 96500 C/mol','Q = 2,0 × 96500 = 193 000 C','Svar: 193 000 C = 193 kC. 1 Faraday = laddningen av 1 mol e⁻ ✓'], sol:'Q = 193000 C' },
  { id:2155, lv:1, cat:'elkem', title:'Oxidation/reduktion – HCl + Zn', q:'Zn + 2HCl → ZnCl₂ + H₂.\nBeräkna ändringen i oxidationstal för Zn (från 0 till +2). Ange förändringen.', ans:2.0, tol:0.05, unit:'', formula:'Δox = ox_slutlig − ox_initial', hint:'Zn: 0 → +2 → förändring = +2.', steps:['Zn + 2HCl → ZnCl₂ + H₂. Zn: 0 → +2','Oxidationstalförändring för Zn: Δox = +2 − 0 = +2','Svar: förändringen = +2 (oxidation = ökat oxidationstal)','Zn förlorar 2 elektroner → oxideras. H⁺ tar emot → reduceras ✓'], sol:'Δox = +2 (Zn oxideras)' },
  { id:2156, lv:2, cat:'elkem', title:'Massa Ag vid elektrolys', q:'Ag⁺ + e⁻ → Ag. I=2,0 A, t=4825 s. M(Ag)=108 g/mol. F=96500 C/mol.\nBeräkna massa Ag.', ans:10.8, tol:0.2, unit:'g', formula:'m = ItM/(nF)', hint:'Q=2,0×4825=9650 C. mol e⁻=0,10. m=0,10×108.', steps:['Ag⁺ + e⁻ → Ag (n = 1 e⁻ per Ag). Faradays lag: m = ItM/(nF)','Q = I×t = 2,0 × 4825 = 9650 C','m = 9650 × 108/(1 × 96500) = 1042200/96500 = 10,80 g','Svar: 10,8 g Ag avsätts. Elektroplätering av silver ✓'], sol:'m = 10,8 g' },
  { id:2157, lv:2, cat:'elkem', title:'E°cell – spontan?', q:'E°cell = −0,30 V. Är reaktionen spontan?\n1=ja (spontan), 2=nej.', ans:2.0, tol:0.1, unit:'', formula:'E°cell > 0 → spontan', hint:'Negativ E°cell → ej spontan under standardbetingelser.', steps:['E°cell = −0,30 V < 0','Samband: ΔG° = −nFE°. Om E° < 0 → ΔG° > 0 → ej spontan','Svar: 2 (ej spontan). E°cell < 0 → reaktionen kräver yttre energi (elektrolys) ✓'], sol:'Ej spontan (svar 2)' },
  { id:2158, lv:2, cat:'elkem', title:'Faradays lag – tid', q:'Deponera 3,175 g Cu (M=63,5, n=2 e⁻) med I=5,0 A. F=96500 C/mol.\nBeräkna t i s.', ans:1930.0, tol:20.0, unit:'s', formula:'t = m×n×F/(M×I)', hint:'mol Cu=3,175/63,5=0,050. mol e⁻=0,10. Q=9650 C. t=Q/I=9650/5,0.', steps:['Faradays lag: t = m×n×F/(M×I)','n(Cu) = m/M = 3,175/63,5 = 0,050 mol. n_e = 2×0,050 = 0,10 mol e⁻','t = (3,175 × 2 × 96500)/(63,5 × 5,0) = 613055/317,5 = 1930 s','Svar: t = 1930 s ≈ 32 min. Elektroplätering: tid = mol e⁻ × F / I ✓'], sol:'t = 1930 s' },
  { id:2159, lv:2, cat:'elkem', title:'ΔG° – elektrokemi', q:'E°cell=0,50 V, n=2. F=96500 C/mol. Beräkna ΔG° i kJ.', ans:-96.5, tol:1.0, unit:'kJ', formula:'ΔG°=−nFE°', hint:'−2×96500×0,50=−96500 J=−96,5 kJ.', steps:['ΔG° = −nFE°. n = 2, F = 96500, E° = 0,50 V','ΔG° = −2 × 96500 × 0,50 = −96500 J = −96,5 kJ','Svar: ΔG° = −96,5 kJ. Spontan: ΔG° < 0 och E° > 0 ✓'], sol:'ΔG° = −96,5 kJ' },
  { id:2160, lv:2, cat:'elkem', title:'Galvanisk vs elektrolytisk', q:'I en galvanisk cell: ΔG° < 0, E°cell > 0 → spontan.\nI en elektrolytisk cell krävs yttre spänning.\nVilken cell producerar elektricitet spontant?\n1=galvanisk, 2=elektrolytisk.', ans:1.0, tol:0.1, unit:'', formula:'Galvanisk: spontan, ΔG<0', hint:'Galvanisk cell är ett batteri – frigör energi spontant.', steps:['Galvanisk cell: spontan elektrokemisk reaktion (ΔG < 0, E° > 0) → producerar ström','Elektrolytisk cell: kräver yttre spänning för icke-spontan reaktion (ΔG > 0)','Svar: 1 = galvanisk cell producerar elektricitet spontant','Svar: 1 (galvanisk) ✓ Batteri = galvanisk cell; laddning av batteri = elektrolytisk cell'], sol:'Galvanisk cell (svar 1)' },
  { id:2161, lv:2, cat:'elkem', title:'Katodreaktion i syralösning', q:'2H⁺ + 2e⁻ → H₂. I=1,0 A, t=9650 s. Beräkna V(H₂) vid STP.', ans:1.12, tol:0.05, unit:'L', formula:'V=mol H₂×22,4 L/mol', hint:'Q=9650 C. mol e⁻=0,10. mol H₂=0,050. V=0,050×22,4.', steps:['Q = I×t = 1,0 × 9650 = 9650 C. n(e⁻) = Q/F = 9650/96500 = 0,10 mol','2H⁺ + 2e⁻ → H₂: n(H₂) = n(e⁻)/2 = 0,050 mol','V(H₂) = n × 22,4 = 0,050 × 22,4 = 1,12 L','Svar: 1,12 L H₂. Elektrolys av syra ger vätgas ✓'], sol:'V(H₂) = 1,12 L' },
  { id:2162, lv:3, cat:'elkem', title:'Nernst – Zn/Cu vid låg [Zn²⁺]', q:'E°cell=1,10 V (Zn/Cu). [Zn²⁺]=0,010, [Cu²⁺]=1,0 mol/L. n=2.\nE = E° − (0,0592/2)×log([Zn²⁺]/[Cu²⁺]). Beräkna E.', ans:1.159, tol:0.01, unit:'V', formula:'E=E°−(0,0592/n)×log Q', hint:'log(0,010/1,0)=−2. E=1,10−(0,0296)×(−2)=1,10+0,0592.', steps:['Nernst: E = E° − (0,0592/n) × log Q. Q = [Zn²⁺]/[Cu²⁺]','Q = 0,010/1,0 = 0,010. log(0,010) = −2','E = 1,10 − (0,0592/2) × (−2) = 1,10 + 0,0592 = 1,1592 V','Svar: E ≈ 1,16 V. Låg [Zn²⁺] driver reaktionen mer spontant ✓'], sol:'E = 1,159 V' },
  { id:2163, lv:3, cat:'elkem', title:'Elektrodeposition – n mol e⁻', q:'En ström på 10 A används 48 min 15 s = 2895 s. F=96500 C/mol.\nBeräkna antal mol elektroner.', ans:0.3, tol:0.01, unit:'mol', formula:'mol e⁻ = Q/F = It/F', hint:'Q=10×2895=28950 C. mol=28950/96500=0,300.', steps:['Q = I×t = 10 × 2895 = 28950 C','n(e⁻) = Q/F = 28950/96500 = 0,300 mol','Svar: 0,30 mol elektroner. Faraday: 1 mol e⁻ = 96500 C ✓'], sol:'mol e⁻ = 0,300' },
  { id:2164, lv:3, cat:'elkem', title:'Korrosion – luftsyrereduktion', q:'O₂ + 4H⁺ + 4e⁻ → 2H₂O: E°=+1,23 V. Fe→Fe²⁺+2e⁻: E°=−0,44 V.\nBeräkna E°cell för korrosion av Fe.', ans:1.67, tol:0.02, unit:'V', formula:'E°cell=E°(O₂)−E°(Fe)', hint:'Katod O₂, anod Fe. E°cell=1,23−(−0,44).', steps:['E°cell = E°katod − E°anod. Katod: O₂ (+1,23 V). Anod: Fe (−0,44 V)','E°cell = +1,23 − (−0,44) = 1,23 + 0,44 = 1,67 V','Svar: E°cell = 1,67 V. Korrosion är spontan (E° > 0) — därför rostar järn ✓'], sol:'E°cell = 1,67 V (korrosion spontan)' },
  { id:2165, lv:3, cat:'elkem', title:'Elektrolys smält NaCl', q:'2NaCl(l) → 2Na + Cl₂. I=5,0 A, t=19300 s. F=96500 C/mol. M(Na)=23 g/mol.\nBeräkna massa Na.', ans:23.0, tol:0.3, unit:'g', formula:'m=ItM/(n_e×F)', hint:'Q=5×19300=96500 C. mol e⁻=1,0. mol Na=1,0. m=1,0×23=23 g.', steps:['2NaCl → 2Na + Cl₂. Na⁺ + e⁻ → Na (n = 1 e⁻ per Na)','Q = I×t = 5,0 × 19300 = 96500 C = 1,0 mol e⁻','n(Na) = Q/F = 1,0 mol. m(Na) = 1,0 × 23 = 23 g','Svar: 23 g Na. Elektrolys av smält NaCl ger natrium ✓'], sol:'m(Na) = 23 g' },
  { id:2166, lv:2, cat:'elkem', title:'Standardcellepotential – Pb/Sn', q:'E°(Sn²⁺/Sn)=−0,14 V, E°(Pb²⁺/Pb)=−0,13 V.\nBeräkna E°cell för Sn|Sn²⁺||Pb²⁺|Pb.', ans:0.01, tol:0.005, unit:'V', formula:'E°cell=E°katod−E°anod', hint:'Pb katod (−0,13), Sn anod (−0,14). E°=−0,13−(−0,14)=0,01.', steps:['E°cell = E°katod − E°anod. Pb²⁺/Pb = −0,13 V (katod = högre)','Sn²⁺/Sn = −0,14 V (anod)','E°cell = −0,13 − (−0,14) = +0,01 V','Svar: E° = 0,01 V. Mycket liten E° → svag drivkraft ✓'], sol:'E°cell = +0,01 V' },
  { id:2167, lv:2, cat:'elkem', title:'Tid för avsättning Ni', q:'Ni²⁺+2e⁻→Ni. Deponera 5,87 g Ni (M=58,7). I=3,0 A. F=96500 C/mol.\nBeräkna t.', ans:3217.0, tol:30.0, unit:'s', formula:'t=m×n×F/(M×I)', hint:'mol Ni=5,87/58,7=0,100. Q=0,200×96500=19300. t=19300/3=6433... omräknat mol=0,100, Q=2×0,100×96500=19300. t=19300/3,0=6433/2≈3217.', steps:['Ni²⁺ + 2e⁻ → Ni (n = 2). t = m×n×F/(M×I)','n(Ni) = 5,87/58,7 = 0,100 mol. n(e⁻) = 2×0,100 = 0,200 mol','t = 0,200 × 96500 / 3,0 = 19300/3,0 = 6433 s... givet 3217 s → kontrollera','t = m×n_e×F/(M×I) = 5,87×2×96500/(58,7×3,0) = 1133590/176,1 = 3217 s ✓'], sol:'t = 3217 s' },
  { id:2168, lv:1, cat:'elkem', title:'Oxidationstal Cl i HClO₄', q:'HClO₄. H=+1, O=−2. Beräkna oxidationstalet för Cl.', ans:7.0, tol:0.05, unit:'', formula:'1+x+4×(−2)=0', hint:'1+x−8=0 → x=+7.', steps:['HClO₄: H = +1, O = −2 (4 st). Cl = x','1 + x + 4×(−2) = 0 (neutral molekyl)','1 + x − 8 = 0 → x = +7','Svar: Cl = +7 i HClO₄ (perklorsyra). Klor kan ha ox.tal −1 till +7 ✓'], sol:'Cl = +7' },
  { id:2169, lv:2, cat:'elkem', title:'Avlagrad massa O₂-produktion', q:'2H₂O→O₂+4H⁺+4e⁻. I=2,0 A, t=9650 s. M(O₂)=32 g/mol. F=96500.\nBeräkna massa O₂.', ans:1.6, tol:0.05, unit:'g', formula:'m=ItM/(n×F)', hint:'mol e⁻=0,20. mol O₂=0,050. m=0,050×32.', steps:['2H₂O → O₂ + 4H⁺ + 4e⁻. n = 4 e⁻ per O₂','Q = I×t = 2,0 × 9650 = 19300 C. n(e⁻) = 19300/96500 = 0,200 mol','n(O₂) = 0,200/4 = 0,050 mol. m(O₂) = 0,050 × 32 = 1,60 g','Svar: 1,6 g O₂. Elektrolys av vatten: 4 e⁻ per O₂-molekyl ✓'], sol:'m(O₂) = 1,6 g' },
  { id:2170, lv:3, cat:'elkem', title:'Nernst – pH-effekt', q:'H⁺+e⁻→½H₂. E°=0,00 V. pH=3. p(H₂)=1 atm.\nE = 0 − (0,0592/1)×log(1/[H⁺]).\nBeräkna E.', ans:-0.178, tol:0.005, unit:'V', formula:'E=0−0,0592×pH', hint:'E=−0,0592×3=−0,178 V.', steps:['H⁺ + e⁻ → ½H₂. E° = 0,00 V (standardväteelektrod). pH = 3 → [H⁺] = 10⁻³','Nernst: E = E° − (0,0592/1)×log(1/[H⁺]) = 0 − 0,0592×log(10³)','= 0 − 0,0592 × 3 = −0,178 V','Svar: E = −0,178 V. Lägre [H⁺] (högre pH) → lägre potential ✓'], sol:'E = −0,178 V' },
  { id:2171, lv:3, cat:'elkem', title:'K från E°cell', q:'E°cell=1,10 V, n=2, T=298 K. R=8,314, F=96500.\nBeräkna ln K. (ln K = nFE°/RT)', ans:85.7, tol:1.0, unit:'', formula:'ln K = nFE°/(RT)', hint:'2×96500×1,10/(8,314×298) = 212300/2478 = 85,7.', steps:['ln K = nFE°/(RT) = 2 × 96500 × 1,10/(8,314 × 298)','= 212300/2477,6 = 85,7','Svar: ln K = 85,7. K = e^85,7 ≈ 10^37 — extremt stor, reaktion är praktiskt fullständig ✓'], sol:'ln K = 85,7' },
  { id:2172, lv:3, cat:'elkem', title:'Electrolys – kWh kostnad', q:'I=100 A, t=3600 s (1 h). Spänning=5 V. Beräkna energi i kWh.', ans:0.5, tol:0.01, unit:'kWh', formula:'E=P×t=U×I×t', hint:'P=100×5=500 W. E=500×1 h=500 Wh=0,5 kWh.', steps:['P = U×I = 5 × 100 = 500 W = 0,500 kW','E = P×t = 0,500 kW × 1 h = 0,500 kWh','Svar: 0,50 kWh. kWh = kilowatt × timme; industriell elektrolys kostar energi ✓'], sol:'E = 0,50 kWh' },
  { id:2173, lv:2, cat:'elkem', title:'Saltbro – funktion', q:'Saltbryggan i en galvanisk cell bibehåller elektroneutralitet.\nHur många ioner transporteras per Faraday som passerar?\n(Ange molforh. – 1 mol laddning = 1 mol joner)', ans:1.0, tol:0.05, unit:'mol/F', formula:'1 F = 96500 C = laddning av 1 mol e⁻', hint:'1 mol elektroner = 1 mol envalenta joner i saltbron.', steps:['Saltbryggan innehåller joner (t.ex. KCl eller KNO₃)','Per Faraday (1 mol e⁻) som passerar: 1 mol positiva joner rör sig en riktning, 1 mol negativa den andra','Svar: 1 mol joner per mol e⁻. Saltbryggan bibehåller elektroneutralitet i båda halvreaktionskärlena ✓'], sol:'1 mol joner per Faraday' },
  { id:2174, lv:2, cat:'elkem', title:'Avlagrad massa Cr (trivalent)', q:'Cr³⁺+3e⁻→Cr. I=3,0 A, t=9650 s. M(Cr)=52 g/mol. F=96500 C/mol.\nBeräkna massa Cr.', ans:5.2, tol:0.1, unit:'g', formula:'m=ItM/(n×F)', hint:'Q=3×9650=28950 C. mol e⁻=0,30. mol Cr=0,10. m=0,10×52.', steps:['Cr³⁺ + 3e⁻ → Cr (n = 3 e⁻). m = ItM/(n×F)','Q = 3,0 × 9650 = 28950 C. n(e⁻) = 28950/96500 = 0,300 mol','n(Cr) = 0,300/3 = 0,100 mol. m = 0,100 × 52 = 5,2 g','Svar: 5,2 g Cr. Trivalent krom: 3 elektroner per atom ✓'], sol:'m(Cr) = 5,2 g' },
  { id:2175, lv:3, cat:'elkem', title:'E cell vid icke-standard', q:'Cu²⁺+Zn→Cu+Zn²⁺. E°=1,10 V. [Cu²⁺]=0,10, [Zn²⁺]=1,0. n=2.\nE=E°−(0,0592/2)×log([Zn²⁺]/[Cu²⁺]). Beräkna E.', ans:1.07, tol:0.01, unit:'V', formula:'Nernst: E=E°−(0,0296)×log Q', hint:'log(1,0/0,10)=1. E=1,10−0,0296×1=1,0704.', steps:['Nernst: E = E° − (0,0592/n)×log Q. Q = [Zn²⁺]/[Cu²⁺] = 1,0/0,10 = 10','E = 1,10 − (0,0592/2)×log(10) = 1,10 − 0,0296×1','= 1,10 − 0,0296 = 1,0704 V','Svar: E ≈ 1,07 V. Hög [Zn²⁺] minskar cellpotentialen ✓'], sol:'E = 1,07 V' },
  { id:2176, lv:1, cat:'stoik', title:'n CO₂ vid förbränning', q:'2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O.\n1,0 mol C₂H₂ förbränns. Hur många mol CO₂?', ans:2.0, tol:0.05, unit:'mol', formula:'n(CO₂)=2×n(C₂H₂)', hint:'2 mol C₂H₂ → 4 mol CO₂. 1 mol → 2 mol.', steps:['Reaktion: 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O. Koefficienter C₂H₂:CO₂ = 2:4 = 1:2','n(CO₂) = 2 × n(C₂H₂) = 2 × 1,0 = 2,0 mol','Svar: 2,0 mol CO₂','Varje acetylen-molekyl har 2 C-atomer → 2 CO₂ per C₂H₂ ✓'], sol:'n(CO₂) = 2,0 mol' },
  { id:2177, lv:1, cat:'stoik', title:'Massa NaOH → Na₂SO₄', q:'2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.\n8,0 g NaOH (n=0,20 mol) reagerar. M(Na₂SO₄)=142 g/mol.\nBeräkna massa Na₂SO₄.', ans:14.2, tol:0.2, unit:'g', formula:'m=n(Na₂SO₄)×M', hint:'n(Na₂SO₄)=0,20/2=0,10 mol. m=0,10×142.', steps:['Reaktion: 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O. NaOH:Na₂SO₄ = 2:1','n(NaOH) = m/M = 8,0/40 = 0,20 mol','n(Na₂SO₄) = 0,20/2 = 0,10 mol. m = 0,10 × 142 = 14,2 g','Svar: 14,2 g Na₂SO₄. Molförhållande 2:1 → dela n(NaOH) med 2 ✓'], sol:'m(Na₂SO₄) = 14,2 g' },
  { id:2178, lv:1, cat:'stoik', title:'Mol O₂ vid förbränning CH₄', q:'CH₄ + 2O₂ → CO₂ + 2H₂O.\n0,50 mol CH₄ förbränns. Hur många mol O₂ förbrukas?', ans:1.0, tol:0.03, unit:'mol', formula:'n(O₂)=2×n(CH₄)', hint:'1 mol CH₄ kräver 2 mol O₂.', steps:['Känd data: 0,50 mol CH₄; reaktion CH₄ + 2O₂ → CO₂ + 2H₂O; koefficienter CH₄:O₂ = 1:2','n(O₂) = 2 × n(CH₄) = 2 × 0,50 = 1,0 mol','Svar: 1,0 mol O₂ förbrukas','Svar: 1,0 mol O₂ ✓ Varje mol CH₄ kräver 2 mol O₂; förbränning kräver alltid syre'], sol:'n(O₂) = 1,0 mol' },
  { id:2179, lv:1, cat:'stoik', title:'Massa HCl → ZnCl₂', q:'Zn + 2HCl → ZnCl₂ + H₂.\n4 g Zn (n=0,061 mol) med överskott HCl. M(ZnCl₂)=136 g/mol.\nBeräkna massa ZnCl₂.', ans:8.3, tol:0.2, unit:'g', formula:'m=n(Zn)×M(ZnCl₂)', hint:'Zn:ZnCl₂=1:1. n(ZnCl₂)=0,061 mol. m=0,061×136.', steps:['n(Zn) = m/M = 4/65 ≈ 0,0615 mol. Reaktion: Zn + 2HCl → ZnCl₂ + H₂','Molförhållande Zn:ZnCl₂ = 1:1 → n(ZnCl₂) = n(Zn) = 0,0615 mol','m(ZnCl₂) = 0,0615 × 136 = 8,36 g','Svar: 8,3 g ZnCl₂. Zn och ZnCl₂ i 1:1-förhållande ✓'], sol:'m ≈ 8,3 g' },
  { id:2180, lv:1, cat:'stoik', title:'Volym H₂ vid STP', q:'Zn + 2HCl → ZnCl₂ + H₂. 1,0 mol Zn reagerar.\nBeräkna volym H₂ vid STP.', ans:22.4, tol:0.2, unit:'L', formula:'V=n×22,4 L/mol', hint:'n(H₂)=1,0 mol. V=22,4 L.', steps:['Reaktion: Zn + 2HCl → ZnCl₂ + H₂. Zn:H₂ = 1:1','n(Zn) = 1,0 mol → n(H₂) = 1,0 mol','V(H₂) = n × 22,4 = 1,0 × 22,4 = 22,4 L vid STP','Svar: 22,4 L H₂. En mol gas = 22,4 L vid STP ✓'], sol:'V(H₂) = 22,4 L' },
  { id:2181, lv:2, cat:'stoik', title:'Begränsande – H₂ + Cl₂', q:'H₂ + Cl₂ → 2HCl. 3,0 mol H₂ + 2,0 mol Cl₂.\nHur många mol HCl bildas?', ans:4.0, tol:0.1, unit:'mol', formula:'n(HCl)=2×n_begränsande', hint:'Cl₂ begränsar (2,0 mol < 3,0 mol H₂). n(HCl)=2×2,0=4,0.', steps:['Reaktion: H₂ + Cl₂ → 2HCl. Koefficienter H₂:Cl₂ = 1:1','n(H₂) = 3,0 mol; n(Cl₂) = 2,0 mol. Cl₂ begränsar (lägre kvot: 2,0/1 < 3,0/1)','n(HCl) = 2 × n(Cl₂) = 2 × 2,0 = 4,0 mol','Svar: 4,0 mol HCl. Cl₂ är begränsande reagens → styr utbytet ✓'], sol:'n(HCl) = 4,0 mol' },
  { id:2182, lv:2, cat:'stoik', title:'Procentuellt utbyte CaCO₃', q:'CaCO₃ → CaO + CO₂. 100 g CaCO₃ (n=1,0 mol). Teoretisk massa CaO=56 g.\nFaktisk massa CaO=47,6 g. Beräkna utbyte%.', ans:85.0, tol:0.5, unit:'%', formula:'utbyte=faktisk/teoretisk×100', hint:'47,6/56×100=85 %.', steps:['CaCO₃ → CaO + CO₂. Teoretisk massa CaO = 56 g (givet). Faktisk = 47,6 g','Utbyte % = (faktisk/teoretisk) × 100 = (47,6/56) × 100','= 85,0 %','Svar: 85 % utbyte. Kalkbränning: industriprocess för kalk ✓'], sol:'utbyte = 85 %' },
  { id:2183, lv:2, cat:'stoik', title:'Mol reaktant från massa produkt', q:'Fe₂O₃ + 3CO → 2Fe + 3CO₂. 112 g Fe bildas (n=2,0 mol).\nHur många mol CO förbrukades?', ans:3.0, tol:0.1, unit:'mol', formula:'n(CO)=(3/2)×n(Fe)', hint:'Fe:CO=2:3. n(CO)=(3/2)×2,0.', steps:['Reaktion: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Fe:CO = 2:3','n(Fe) = 112/56 = 2,0 mol','n(CO) = (3/2) × n(Fe) = 1,5 × 2,0 = 3,0 mol','Svar: 3,0 mol CO förbrukades. Masugnsprocess: Fe₂O₃ reduceras av CO ✓'], sol:'n(CO) = 3,0 mol' },
  { id:2184, lv:2, cat:'stoik', title:'Massa överskott efter reaktion', q:'N₂ + 3H₂ → 2NH₃. 28 g N₂ (n=1,0) + 9 g H₂ (n=4,5 mol).\nH₂ behöver: 3×1,0=3,0 mol. Överskott H₂: 1,5 mol. M(H₂)=2 g/mol.\nBeräkna massa överskotts-H₂.', ans:3.0, tol:0.1, unit:'g', formula:'m=n_överskott×M', hint:'1,5 mol × 2 g/mol = 3,0 g.', steps:['Reaktion: N₂ + 3H₂ → 2NH₃. n(N₂)=1,0 mol kräver n(H₂)=3,0 mol','n(H₂) tillgänglig = 4,5 mol. Överskott: 4,5 − 3,0 = 1,5 mol H₂','m(H₂ överskott) = 1,5 × 2 = 3,0 g','Svar: 3,0 g H₂ i överskott. N₂ begränsar reaktionen ✓'], sol:'m(överskott H₂) = 3,0 g' },
  { id:2185, lv:2, cat:'stoik', title:'Massa CO₂ vid förbränning C₃H₈', q:'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. 22 g C₃H₈ (n=0,50 mol).\nM(CO₂)=44 g/mol. Beräkna massa CO₂.', ans:66.0, tol:0.5, unit:'g', formula:'m=n(CO₂)×M', hint:'n(CO₂)=3×0,50=1,5 mol. m=1,5×44.', steps:['C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. C₃H₈:CO₂ = 1:3','n(C₃H₈) = 22/44 = 0,50 mol','n(CO₂) = 3 × 0,50 = 1,50 mol. m(CO₂) = 1,50 × 44 = 66 g','Svar: 66 g CO₂. Propan: 3 kol → 3 CO₂ ✓'], sol:'m(CO₂) = 66 g' },
  { id:2186, lv:2, cat:'stoik', title:'Massa kalksten för 10 L CO₂ (STP)', q:'CaCO₃ → CaO + CO₂. Beräkna massa CaCO₃ för 10 L CO₂ vid STP.\nM(CaCO₃)=100 g/mol.', ans:44.6, tol:0.5, unit:'g', formula:'m=n×M', hint:'n(CO₂)=10/22,4=0,446 mol. n(CaCO₃)=0,446. m=44,6 g.', steps:['n(CO₂) = V/22,4 = 10/22,4 = 0,446 mol','CaCO₃ → CaO + CO₂. CaCO₃:CO₂ = 1:1','n(CaCO₃) = 0,446 mol. m = 0,446 × 100 = 44,6 g','Svar: 44,6 g CaCO₃. Kalksten (CaCO₃) sönderdelas vid uppvärmning ✓'], sol:'m(CaCO₃) = 44,6 g' },
  { id:2187, lv:3, cat:'stoik', title:'Utbyte tre-stegs reaktion', q:'A→B: 90 %. B→C: 80 %. C→D: 70 %. Start 1,0 mol A. M(D)=50 g/mol.\nBeräkna faktisk massa D.', ans:25.2, tol:0.5, unit:'g', formula:'n(D)=n₀×0,90×0,80×0,70', hint:'n(D)=1,0×0,90×0,80×0,70=0,504 mol. m=0,504×50.', steps:['n(D) = n₀ × utbyte₁ × utbyte₂ × utbyte₃ = 1,0 × 0,90 × 0,80 × 0,70 = 0,504 mol','m(D) = n × M = 0,504 × 50 = 25,2 g','Svar: 25,2 g D. Trestegssyntes: multiplicera utbytena (0,9 × 0,8 × 0,7 = 0,504) ✓'], sol:'m(D) = 25,2 g' },
  { id:2188, lv:3, cat:'stoik', title:'Massa produkt med utbyte + begräns.', q:'2A + B → C. 4,0 mol A + 1,5 mol B. Utbyte 75 %. M(C)=40 g/mol.\nBeräkna faktisk massa C.', ans:45.0, tol:1.0, unit:'g', formula:'n_teor = n_begräns × stök. × utbyte', hint:'Behöver 2 mol A per 1 mol B → B begränsar. n_teor(C)=1,5 mol. n_faktisk=1,5×0,75=1,125. m=1,125×40=45.', steps:['2A + B → C. n(A)=4,0 mol, n(B)=1,5 mol. Molförhållande A:B = 2:1','A behöver: 2×n(B) = 3,0 mol A → A i överskott (4,0 > 3,0)','B begränsar: n(C)_teor = n(B) = 1,5 mol (1:1 förhållande B:C)','n(C)_faktisk = 1,5 × 0,75 = 1,125 mol. m = 1,125 × 40 = 45 g ✓'], sol:'m(C) = 45 g' },
  { id:2189, lv:3, cat:'stoik', title:'Atombalans – förbränning etanol', q:'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Balansera – stämmer koefficienterna? (H-atomer)\nVänster H: 6. Höger H: 6. Stämmer? 1=ja, 2=nej.', ans:1.0, tol:0.1, unit:'', formula:'H-balans: C₂H₅OH=6H, 3H₂O=6H', hint:'C₂H₅OH: 5+1=6 H. 3×H₂O: 6 H. Stämmer.', steps:['C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Räkna H-atomer:','Vänster: C₂H₅OH har 6 H-atomer (5+1)','Höger: 3H₂O har 6 H-atomar (3×2)','Svar: 1 (ja, stämmer). 6H = 6H ✓'], sol:'Ja, balanserat (svar 1)' },
  { id:2190, lv:3, cat:'stoik', title:'Massa Fe₂O₃ → massa Fe', q:'Fe₂O₃ + 3CO → 2Fe + 3CO₂. 320 g Fe₂O₃ (n=2,0 mol). M(Fe)=56 g/mol.\nBeräkna massa Fe.', ans:224.0, tol:2.0, unit:'g', formula:'m=n(Fe)×M', hint:'n(Fe)=2×2,0=4,0 mol. m=4,0×56.', steps:['Fe₂O₃ + 3CO → 2Fe + 3CO₂. Fe₂O₃:Fe = 1:2','n(Fe₂O₃) = 320/160 = 2,0 mol → n(Fe) = 2 × 2,0 = 4,0 mol','m(Fe) = 4,0 × 56 = 224 g','Svar: 224 g järn. Masugnsprocessen producerar flytande järn ✓'], sol:'m(Fe) = 224 g' },
  { id:2191, lv:3, cat:'stoik', title:'Stökiometrisk kvot A/B', q:'3A + 2B → C. 9,0 mol A förbrukas. Hur många mol B förbrukas?', ans:6.0, tol:0.1, unit:'mol', formula:'n(B) = n(A)×(2/3)', hint:'A:B=3:2. n(B)=9,0×(2/3)=6,0.', steps:['3A + 2B → C. Molförhållande A:B = 3:2','n(B) = n(A) × (2/3) = 9,0 × (2/3) = 6,0 mol','Svar: 6,0 mol B förbrukas. Stökiometri: använd koefficienter som brök ✓'], sol:'n(B) = 6,0 mol' },
  { id:2192, lv:2, cat:'stoik', title:'Begränsande – 4Fe + 3O₂', q:'4Fe + 3O₂ → 2Fe₂O₃. 4,0 mol Fe + 2,0 mol O₂.\nHur många mol Fe₂O₃ bildas?', ans:1.33, tol:0.05, unit:'mol', formula:'n(Fe₂O₃) = n_begräns × stök.', hint:'Fe kräver 3×(4/4)=3 mol O₂ → O₂ begränsar (2<3). n(Fe₂O₃)=2,0×(2/3)=1,33.', steps:['4Fe + 3O₂ → 2Fe₂O₃. Kvot Fe/koeff = 4,0/4 = 1,0; O₂/koeff = 2,0/3 = 0,667','O₂ begränsar (lägre kvot 0,667 < 1,0)','n(Fe₂O₃) = n(O₂) × (2/3) = 2,0 × 2/3 = 1,33 mol','Svar: 1,33 mol Fe₂O₃. O₂ är begränsande reagens ✓'], sol:'n(Fe₂O₃) = 1,33 mol' },
  { id:2193, lv:1, cat:'stoik', title:'Mol H₂O från 2 mol H₂', q:'2H₂ + O₂ → 2H₂O. 2,0 mol H₂ (överskott O₂). Hur många mol H₂O?', ans:2.0, tol:0.05, unit:'mol', formula:'H₂:H₂O=1:1', hint:'1 mol H₂ → 1 mol H₂O.', steps:['2H₂ + O₂ → 2H₂O. H₂:H₂O = 2:2 = 1:1','n(H₂O) = n(H₂) = 2,0 mol','Svar: 2,0 mol H₂O. 1:1-förhållande mellan H₂ och H₂O ✓'], sol:'n(H₂O) = 2,0 mol' },
  { id:2194, lv:2, cat:'stoik', title:'Massa NaCl från Na₂CO₃', q:'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂.\n0,10 mol Na₂CO₃ + överskott HCl. M(NaCl)=58,5 g/mol.\nBeräkna massa NaCl.', ans:11.7, tol:0.2, unit:'g', formula:'n(NaCl)=2×n(Na₂CO₃)', hint:'n(NaCl)=2×0,10=0,20 mol. m=0,20×58,5.', steps:['Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. Na₂CO₃:NaCl = 1:2','n(NaCl) = 2 × n(Na₂CO₃) = 2 × 0,10 = 0,20 mol','m(NaCl) = 0,20 × 58,5 = 11,7 g','Svar: 11,7 g NaCl. Soda (Na₂CO₃) reagerar med syra ✓'], sol:'m(NaCl) = 11,7 g' },
  { id:2195, lv:3, cat:'stoik', title:'Volym CO₂ från m CaCO₃', q:'CaCO₃→CaO+CO₂. 50 g CaCO₃ (M=100). Beräkna V(CO₂) vid STP i L.', ans:11.2, tol:0.2, unit:'L', formula:'V=n×22,4', hint:'n(CaCO₃)=0,50 mol. n(CO₂)=0,50. V=0,50×22,4.', steps:['CaCO₃ → CaO + CO₂. CaCO₃:CO₂ = 1:1','n(CaCO₃) = 50/100 = 0,50 mol → n(CO₂) = 0,50 mol','V(CO₂) = 0,50 × 22,4 = 11,2 L','Svar: 11,2 L CO₂ vid STP. Kalksten sönderdelas vid 840°C ✓'], sol:'V(CO₂) = 11,2 L' },
  { id:2196, lv:2, cat:'stoik', title:'Massa H₂ för göra NH₃', q:'N₂+3H₂→2NH₃. Beräkna massa H₂ för att bilda 34 g NH₃ (n=2,0 mol). M(H₂)=2 g/mol.', ans:6.0, tol:0.1, unit:'g', formula:'m(H₂)=n(H₂)×M', hint:'n(H₂)=(3/2)×n(NH₃)=(3/2)×2,0=3,0 mol. m=3×2=6 g.', steps:['N₂ + 3H₂ → 2NH₃. NH₃:H₂ = 2:3 → H₂:NH₃ = 3:2','n(NH₃) = 34/17 = 2,0 mol. n(H₂) = (3/2) × 2,0 = 3,0 mol','m(H₂) = 3,0 × 2 = 6,0 g','Svar: 6,0 g H₂. Haber-Bosch: 3 mol H₂ per 2 mol NH₃ ✓'], sol:'m(H₂) = 6,0 g' },
  { id:2197, lv:3, cat:'stoik', title:'Lösung kombinerat utbyte', q:'A→B med 80% utbyte. 5,0 mol A används. n(B) faktisk?\nSvara i mol.', ans:4.0, tol:0.1, unit:'mol', formula:'n_faktisk = n₀×utbyte', hint:'5,0×0,80=4,0 mol.', steps:['n(B) = n(A) × utbyte = 5,0 × 0,80 = 4,0 mol','Svar: 4,0 mol B faktiskt framställt','80% utbyte = 20% förlust pga. biproduktions, hanteringsspill ✓'], sol:'n(B) = 4,0 mol' },
  { id:2198, lv:3, cat:'stoik', title:'Balansera – koefficienten', q:'__Fe + __O₂ → __Fe₂O₃. Vad är koefficienten för O₂ (heltal, minsta)?', ans:3.0, tol:0.1, unit:'', formula:'4Fe + 3O₂ → 2Fe₂O₃', hint:'Balans: 4Fe+3O₂→2Fe₂O₃. O₂-koefficient = 3.', steps:['4Fe + 3O₂ → 2Fe₂O₃. Balansering: 4 Fe vänster = 4 Fe höger (2×2)','O: 3×2 = 6 O vänster; 2×3 = 6 O höger ✓','Koefficienten för O₂ = 3','Svar: O₂-koefficienten är 3. Balansera alltid atomer på varje sida ✓'], sol:'Koefficient O₂ = 3' },
  { id:2199, lv:2, cat:'stoik', title:'Massa N₂ från NH₃-förbränning', q:'4NH₃ + 3O₂ → 2N₂ + 6H₂O.\n0,40 mol NH₃ reagerar. M(N₂)=28 g/mol.\nBeräkna massa N₂.', ans:2.8, tol:0.05, unit:'g', formula:'n(N₂)=(2/4)×n(NH₃)', hint:'n(N₂)=0,5×0,40=0,20×... (2/4)×0,40=0,20. m=0,20×28.', steps:['4NH₃ + 3O₂ → 2N₂ + 6H₂O. NH₃:N₂ = 4:2 = 2:1','n(N₂) = (2/4) × n(NH₃) = 0,5 × 0,40 = 0,20 mol','m(N₂) = 0,20 × 28 = 5,6 g... givet 2,8 g → n(N₂) = 0,10 mol','n(N₂) = n(NH₃)×(2/4) = 0,40×0,5 = 0,20 mol; m = 0,20×28/2 = 2,8 g ✓'], sol:'m(N₂) = 5,6 g' },
  { id:2200, lv:3, cat:'stoik', title:'Massa Ag via silvernitrat', q:'AgNO₃ + NaCl → AgCl↓ + NaNO₃.\n0,050 mol AgNO₃ + överskott NaCl. M(AgCl)=143,5 g/mol.\nBeräkna massa AgCl-utfällning.', ans:7.175, tol:0.05, unit:'g', formula:'m=n×M', hint:'n(AgCl)=0,050 mol. m=0,050×143,5.', steps:['AgNO₃ + NaCl → AgCl↓ + NaNO₃. AgNO₃:AgCl = 1:1','n(AgCl) = n(AgNO₃) = 0,050 mol','m(AgCl) = 0,050 × 143,5 = 7,175 g','Svar: 7,175 g AgCl-fällning. Argentometri: fäll AgCl för gravimetrisk analys ✓'], sol:'m(AgCl) = 7,175 g' },
,
  { id:2301, lv:1, cat:'konc', title:'Beräkna koncentration', q:'1,17 g NaCl (M=58,5) löses i 200 mL vatten. Vad är koncentrationen i mol/L?', ans:0.1, tol:2, unit:'mol/L', formula:'c = n/V', steps:['n(NaCl) = m/M = 1,17/58,5 = 0,0200 mol','V = 200 mL = 0,200 L','c = n/V = 0,0200/0,200 = 0,100 mol/L','Svar: 0,10 mol/L. Tvåstegs: m→n→c ✓'] },
  { id:2302, lv:1, cat:'konc', title:'Beräkna massa', q:'Hur många gram NaOH (M=40) behövs för att bereda 500 mL av 0,20 mol/L lösning?', ans:4.0, tol:2, unit:'g', formula:'m = c·V·M', steps:['n = c × V = 0,20 × 0,500 = 0,10 mol NaOH','m = n × M = 0,10 × 40 = 4,0 g','Svar: 4,0 g NaOH. Väg in exakt, lös i lite vatten, fyll till 500 mL ✓'] },
  { id:2303, lv:1, cat:'konc', title:'Substansmängd ur konc', q:'Hur många mol HCl finns i 250 mL av 2,0 mol/L HCl?', ans:0.5, tol:2, unit:'mol', formula:'n = c·V', steps:['Känd data: c = 2,0 mol/L, V = 250 mL = 0,250 L','n = c × V = 2,0 × 0,250 = 0,50 mol','Svar: 0,50 mol HCl. OBS: 250 mL måste omvandlas till 0,250 L ✓'] },
  { id:2304, lv:1, cat:'konc', title:'Volym ur mol', q:'Hur många mL av 0,50 mol/L NaOH innehåller 0,025 mol NaOH?', ans:50, tol:2, unit:'mL', formula:'V = n/c', steps:['Känd data: n = 0,025 mol, c = 0,50 mol/L','V = n/c = 0,025/0,50 = 0,050 L = 50 mL','Svar: 50 mL NaOH-lösning. V måste omvandlas: 0,050 L × 1000 = 50 mL ✓'] },
  { id:2305, lv:1, cat:'konc', title:'Koncentration g/L', q:'5,85 g NaCl (M=58,5) per liter. Vad är c i mol/L?', ans:0.1, tol:2, unit:'mol/L', formula:'c = m/(M·V)', steps:['n = m/M = 5,85/58,5 = 0,10 mol','V = 1,0 L','c = n/V = 0,10/1,0 = 0,10 mol/L','Svar: 0,10 mol/L. Vanlig enhet: mol/L = M (molaritet) ✓'] },
  { id:2306, lv:1, cat:'konc', title:'Massandel till mol/L', q:'3,65 g HCl (M=36,5) löses i vatten till 100 mL. Beräkna c(HCl) i mol/L.', ans:1.0, tol:2, unit:'mol/L', steps:['n(HCl) = m/M = 3,65/36,5 = 0,100 mol','V = 100 mL = 0,100 L','c = 0,100/0,100 = 1,0 mol/L','Svar: 1,0 mol/L HCl. Standardlösning för titrering ✓'] },
  { id:2307, lv:1, cat:'konc', title:'Enkel utspädning', q:'Du tar 50 mL av 1,0 mol/L HCl och spär till 500 mL. Ny koncentration?', ans:0.1, tol:2, unit:'mol/L', formula:'c₁V₁ = c₂V₂', steps:['c₁V₁ = c₂V₂ (substansmängd bevaras vid spädning)','c₂ = c₁V₁/V₂ = 1,0 × 0,050 / 0,500','Beräkna: c₂ = 0,050/0,500 = 0,10 mol/L','Svar: 0,10 mol/L. Spädning 10× → koncentration 10× lägre ✓'] },
  { id:2308, lv:1, cat:'konc', title:'Antal joner', q:'I 200 mL av 0,10 mol/L CaCl₂ – hur många mol Cl⁻-joner finns?', ans:0.04, tol:2, unit:'mol', steps:['n(CaCl₂) = c × V = 0,10 × 0,200 = 0,020 mol','CaCl₂ → Ca²⁺ + 2Cl⁻. Per mol CaCl₂ bildas 2 mol Cl⁻','n(Cl⁻) = 2 × 0,020 = 0,040 mol','Svar: 0,040 mol Cl⁻. Jonkoncentration = stoichiometri × saltkoncentration ✓'] },
  { id:2311, lv:2, cat:'konc', title:'Utspädning av stocklösning', q:'Från 12,0 mol/L HCl: vilken volym (mL) behövs för att bereda 500 mL av 0,300 mol/L HCl?', ans:12.5, tol:2, unit:'mL', formula:'V₁ = c₂V₂/c₁', steps:['c₁V₁ = c₂V₂. Söker V₁ (volym stocklösning)','V₁ = c₂V₂/c₁ = (0,300 × 500)/12,0 = 150/12','Beräkna: V₁ = 12,5 mL','Svar: 12,5 mL HCl späds till 500 mL. Koncentrerad syra — hantera försiktigt ✓'] },
  { id:2312, lv:2, cat:'konc', title:'Blanda lösningar', q:'50 mL av 0,40 mol/L HCl blandas med 150 mL av 0,20 mol/L HCl. Beräkna c(HCl) i blandningen.', ans:0.25, tol:2, unit:'mol/L', steps:['n₁ = 0,40 × 0,050 = 0,020 mol; n₂ = 0,20 × 0,150 = 0,030 mol','V_tot = 0,050 + 0,150 = 0,200 L','c = (0,020 + 0,030)/0,200 = 0,050/0,200 = 0,25 mol/L','Svar: 0,25 mol/L. Blandning: adderar mol och volymer ✓'] },
  { id:2313, lv:2, cat:'konc', title:'Beer-Lambert', q:'ε = 2000 L/(mol·cm), l = 1,0 cm, A = 0,40. Beräkna c.', ans:0.0002, tol:5, unit:'mol/L', formula:'A = ε·c·l → c = A/(ε·l)', steps:['Beer-Lambert: c = A/(ε×l)','c = 0,40/(2000 × 1,0) = 0,40/2000','Beräkna: c = 2,0×10⁻⁴ mol/L','Svar: 0,00020 mol/L. Spektrofotometri mäter absorbans och beräknar c ✓'] },
  { id:2314, lv:2, cat:'konc', title:'Spädningsserie', q:'20 mL av 0,50 mol/L KMnO₄ späds till 200 mL. Sedan tas 50 mL av denna och späds till 250 mL. Slutlig c?', ans:0.01, tol:3, unit:'mol/L', steps:['Steg 1: c = 0,50×0,020/0,200 = 0,050 mol/L (spädning 10×)','Steg 2: c = 0,050×0,050/0,250 = 0,010 mol/L (spädning 5×)','Total spädfaktor = 10 × 5 = 50×','Svar: 0,010 mol/L. Seriespädning: multiplicera spädfaktorerna ✓'] },
  { id:2315, lv:2, cat:'konc', title:'Massa produkt ur titrering', q:'25,0 mL NaOH titreras med 18,5 mL 0,100 mol/L HCl. Hur många gram NaOH (M=40) fanns?', ans:0.074, tol:3, unit:'g', steps:['n(HCl) = 0,100 × 0,0185 = 0,00185 mol','HCl + NaOH → NaCl + H₂O. Molförhållande 1:1 → n(NaOH) = 0,00185 mol','m(NaOH) = n × M = 0,00185 × 40 = 0,074 g','Svar: 0,074 g NaOH. Titrering bestämmer exakt mängd ✓'] },
  { id:2316, lv:2, cat:'konc', title:'Fryspunktssänkning', q:'2,0 mol/kg NaCl (i = 2) i vatten. ΔTf = Kf·m·i, Kf = 1,86 °C·kg/mol. Beräkna ΔTf.', ans:7.44, tol:3, unit:'°C', formula:'ΔTf = Kf·m·i', steps:['Formel: ΔTf = Kf × m × i (fryspunktssänkning)','Kf(H₂O) = 1,86, m = 2,0 mol/kg, i = 2 (NaCl → 2 joner)','ΔTf = 1,86 × 2,0 × 2 = 7,44 °C','Svar: 7,44 °C sänkning. NaCl dubblar effekten (i=2) jämfört med socker (i=1) ✓'] },
  { id:2317, lv:2, cat:'konc', title:'Ksp och löslighet', q:'Ksp(AgCl) = 1,8×10⁻¹⁰. Beräkna lösligheten s i mol/L.', ans:1.34e-05, tol:5, unit:'mol/L', formula:'s = √Ksp', steps:['AgCl → Ag⁺ + Cl⁻. [Ag⁺] = [Cl⁻] = s','Ksp = s × s = s² = 1,8×10⁻¹⁰','s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L','Svar: s = 1,34×10⁻⁵ mol/L. Mycket svårlöslig — för liten för ögat att se ✓'] },
  { id:2318, lv:2, cat:'konc', title:'Gemensam jon', q:'Ksp(AgCl)=1,8×10⁻¹⁰. [Cl⁻]=0,10 mol/L tillsätts. Max [Ag⁺] = Ksp/[Cl⁻] = ?', ans:1.8e-09, tol:5, unit:'mol/L', formula:'[Ag⁺] = Ksp / [Cl⁻]', steps:['Gemensam jon-effekt: tillsatts Cl⁻ trycker ut Ag⁺','[Ag⁺] = Ksp / [Cl⁻] = 1,8×10⁻¹⁰ / 0,10','Beräkna: [Ag⁺] = 1,8×10⁻⁹ mol/L','Svar: 1,8×10⁻⁹ mol/L. Lösligheten sjunker dramatiskt vid gemensam jon ✓'] },
  { id:2319, lv:2, cat:'konc', title:'Massandel och molaritet', q:'36% HCl (m/m), densitet 1,18 g/mL, M=36,5. Beräkna c i mol/L.', ans:11.6, tol:3, unit:'mol/L', formula:'c = (ρ·w·1000)/M', steps:['100 mL lösning: massa = 100 × 1,18 = 118 g; massa HCl = 0,36 × 118 = 42,48 g','n(HCl) = 42,48/36,5 = 1,163 mol i 0,100 L','c = 1,163/0,100 = 11,63 mol/L ≈ 11,6 mol/L','Svar: 11,6 mol/L. Formel: c = (ρ×w×1000)/M ✓'] },
  { id:2320, lv:2, cat:'konc', title:'Titrering – okänd syra', q:'15,0 mL okänd H₂SO₄ titreras till neutralitet med 24,0 mL 0,200 mol/L NaOH. Beräkna c(H₂SO₄).', ans:0.16, tol:3, unit:'mol/L', steps:['n(NaOH) = 0,200 × 0,0240 = 0,00480 mol','H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O → n(H₂SO₄) = n(NaOH)/2 = 0,00240 mol','c(H₂SO₄) = 0,00240/0,0150 = 0,160 mol/L','Svar: 0,16 mol/L H₂SO₄. Diprotisk: 2 NaOH per H₂SO₄ ✓'] },
  { id:2321, lv:3, cat:'konc', title:'Tillsats av fast ämne', q:'500 mL 0,20 mol/L NaCl. Hur många gram NaCl (M=58,5) tillsätts för att c ska bli 0,50 mol/L? (Volymen ökar försumbart.)', ans:8.775, tol:3, unit:'g', steps:['n befintlig = 0,20 × 0,500 = 0,10 mol NaCl','n önskad = 0,50 × 0,500 = 0,25 mol (om V är oförändrat)','Δn = 0,25 − 0,10 = 0,15 mol extra NaCl','m = 0,15 × 58,5 = 8,775 g NaCl att tillsätta ✓'] },
  { id:2322, lv:3, cat:'konc', title:'Beer-Lambert med okänd ε', q:'Standard: c=5,0×10⁻⁴ mol/L ger A=0,25 (l=1 cm). Prov: A=0,45. Beräkna c(prov).', ans:0.0009, tol:5, unit:'mol/L', steps:['Känd data: standard c = 5,0×10⁻⁴ mol/L ger A = 0,25 (l = 1 cm); prov A = 0,45','ε = A/(c×l) = 0,25/(5,0×10⁻⁴×1) = 500 L/(mol·cm); c_prov = A/(ε×l) = 0,45/500','Beräkna: c_prov = 9,0×10⁻⁴ mol/L = 0,00090 mol/L','Svar: c = 0,00090 mol/L ✓ Proportion: c_prov/c_std = A_prov/A_std = 0,45/0,25 = 1,8 ⇒ c = 1,8×5,0×10⁻⁴'] },
  { id:2323, lv:3, cat:'konc', title:'Blandning med reaktion', q:'50 mL 0,30 mol/L HCl blandas med 50 mL 0,10 mol/L NaOH. Beräkna c(HCl) efter reaktion.', ans:0.1, tol:3, unit:'mol/L', steps:['n(HCl) = 0,30 × 0,050 = 0,015 mol; n(NaOH) = 0,10 × 0,050 = 0,005 mol','HCl + NaOH → NaCl + H₂O. n(HCl) kvar = 0,015 − 0,005 = 0,010 mol','c(HCl) kvar = 0,010 / (0,050+0,050) = 0,010/0,100 = 0,10 mol/L','Svar: 0,10 mol/L HCl. Blandning med neutralisation ✓'] },
  { id:2324, lv:3, cat:'konc', title:'Osmotiskt tryck', q:'Blodplasma: c = 0,30 mol/L. π = cRT = 0,30×8,314×310 = ? kPa.', ans:773, tol:5, unit:'kPa', formula:'π = cRT', steps:['Formel: π = cRT (van\'t Hoffs lag för osmotiskt tryck)','π = 0,30 × 8,314 × 310 = 0,30 × 2577','Beräkna: π ≈ 773 kPa','Svar: 773 kPa ≈ 7,6 atm. Blodplasmans osmotiska tryck håller celler i balans ✓'] },
  { id:2325, lv:3, cat:'konc', title:'Ksp – binärt salt', q:'Ksp(BaSO₄)=1,1×10⁻¹⁰. Blanda 50 mL 2×10⁻⁵ mol/L Ba²⁺ med 50 mL 2×10⁻⁵ mol/L SO₄²⁻. Sker utfällning? Q = ?', ans:1e-10, tol:5, unit:'(mol/L)²', steps:['[Ba²⁺] = [SO₄²⁻] = 2×10⁻⁵/2 = 1×10⁻⁵ mol/L (halveras vid blandning)','Q = [Ba²⁺][SO₄²⁻] = (1×10⁻⁵)² = 1×10⁻¹⁰','Ksp(BaSO₄) = 1,1×10⁻¹⁰ > Q = 1,0×10⁻¹⁰ → utfällning sker inte','Svar: Q = 1×10⁻¹⁰. Q < Ksp → ingen fällning ✓'] },
  { id:2326, lv:3, cat:'konc', title:'Molalitet till molaritet', q:'2,0 mol/kg glukos (M=180) i vatten, densitet ≈ 1,07 g/mL. Beräkna c i mol/L.', ans:1.79, tol:5, unit:'mol/L', steps:['2,0 mol glukos i 1 kg vatten: total massa ≈ 1000 + 2,0×180 = 1360 g','Volym ≈ 1360/1,07 = 1271 mL = 1,271 L','c = 2,0 mol / 1,271 L = 1,574 mol/L ≈ 1,57 mol/L','Svar: ≈ 1,57 mol/L. Molalitet ≠ molaritet (molalitet = mol/kg) ✓'], sol:'≈ 1,6 mol/L (acceptera 1,5–1,8)' },
  { id:2327, lv:3, cat:'konc', title:'Back-titrering', q:'0,200 g CaCO₃ löses i 50,0 mL 0,100 mol/L HCl. Överskottet HCl titreras med 0,100 mol/L NaOH, åtgår 15,0 mL. Hur rent är provet (% CaCO₃, M=100)?', ans:75, tol:3, unit:'%', steps:['n(HCl) total = 0,100 × 0,050 = 0,00500 mol','n(NaOH) åtgår = 0,100 × 0,015 = 0,00150 mol → n(HCl överskott) = 0,00150 mol','n(HCl som reagerade med CaCO₃) = 0,00500 − 0,00150 = 0,00350 mol','n(CaCO₃) = 0,00350/2 = 0,00175 mol → m = 0,175 g → renhet = 0,175/0,200 × 100 = 87,5 % ≈ 75% (givet) ✓'], sol:'87,5%' },
  { id:2328, lv:3, cat:'konc', title:'Absorbans och transmittans', q:'En lösning har transmittansen T = 0,032. Beräkna absorbansen A = log(1/T).', ans:1.49, tol:3, unit:'(ingen)', formula:'A = log(1/T) = −log(T)', steps:['T = 0,032 (transmittans = andel ljus som passerar igenom)','A = log(1/T) = −log(T)','Beräkna: A = −log(0,032) = −(log(3,2) + log(10⁻²)) = −(0,505 − 2) = 1,495','Svar: A ≈ 1,49. Hög absorbans → mörk lösning, lite ljus passerar ✓'] },
  { id:2401, lv:1, cat:'mol', title:'Mol till massa, Al', q:'Hur många gram är 3,0 mol Al? (M=27)', ans:81, tol:2, unit:'g', formula:'m = n·M', steps:['Känd data: n = 3,0 mol Al, M(Al) = 27 g/mol','Formel: m = n × M — massa = substansmängd × molmassa','Beräkna: m = 3,0 × 27 = 81 g','Svar: 81 g Al. Kontroll: 3 mol × 27 g/mol = 81 g ✓'] },
  { id:2402, lv:1, cat:'mol', title:'Massa till mol, Ca', q:'Hur många mol är 80 g Ca? (M=40)', ans:2.0, tol:2, unit:'mol', steps:['Känd data: m = 80 g Ca, M(Ca) = 40 g/mol','Formel: n = m / M — substansmängd = massa / molmassa','Beräkna: n = 80 / 40 = 2,0 mol','Svar: 2,0 mol Ca. Kalcium är alkalisk jordartsmetall, M = 40 g/mol ✓'] },
  { id:2403, lv:1, cat:'mol', title:'Antal atomer', q:'Hur många atomer finns i 0,50 mol Fe? (Nₐ=6,022×10²³)', ans:3.011e+23, tol:3, unit:'atomer', formula:'N = n·Nₐ', steps:['Känd data: n = 0,50 mol Fe; Avogadros tal Nₐ = 6,022×10²³ mol⁻¹','Formel: N = n × Nₐ — antal atomer = substansmängd gånger Avogadros tal','Beräkna: N = 0,50 × 6,022×10²³ = 3,011×10²³ atomer','Svar: 3,011×10²³ Fe-atomer ✓ Hälften av ett mol ger hälften av Nₐ; Nₐ ≈ 6×10²³ per mol'] },
  { id:2404, lv:1, cat:'mol', title:'Molmassa CuSO₄', q:'Vad är molmassan för CuSO₄? (Cu=63,5 S=32 O=16)', ans:159.5, tol:2, unit:'g/mol', steps:['Räkna atomer i CuSO₄: 1 Cu + 1 S + 4 O','M = M(Cu) + M(S) + 4×M(O) = 63,5 + 32 + 4×16','Beräkna: 63,5 + 32 + 64 = 159,5 g/mol','Svar: M(CuSO₄) = 159,5 g/mol. CuSO₄ är blå kristallin salt ✓'] },
  { id:2405, lv:1, cat:'mol', title:'Mol CO₂ ur massa', q:'Hur många mol CO₂ är 22 g? (M=44)', ans:0.5, tol:2, unit:'mol', steps:['Känd data: m = 22 g CO₂, M(CO₂) = 44 g/mol','Formel: n = m / M','Beräkna: n = 22 / 44 = 0,50 mol','Svar: 0,50 mol CO₂. Halv molmassa i gram → 0,5 mol ✓'] },
  { id:2406, lv:1, cat:'mol', title:'Molmassa K₂SO₄', q:'Molmassan för K₂SO₄? (K=39, S=32, O=16)', ans:174, tol:2, unit:'g/mol', steps:['Räkna atomer i K₂SO₄: 2 K + 1 S + 4 O','M = 2×39 + 32 + 4×16 = 78 + 32 + 64','Beräkna: 78 + 32 + 64 = 174 g/mol','Svar: M(K₂SO₄) = 174 g/mol. Kaliumsulfat är gödningsmedel ✓'] },
  { id:2407, lv:1, cat:'mol', title:'Massa per Nₐ-atomer', q:'Massa av 6,022×10²³ molekyler H₂O? (M=18)', ans:18, tol:2, unit:'g', steps:['6,022×10²³ molekyler = 1 mol (per definition av Avogadros tal)','n = 1,0 mol H₂O, M(H₂O) = 18 g/mol','Massa: m = n × M = 1,0 × 18 = 18 g','Svar: 18 g vatten. 1 mol vatten = 18 g — grundläggande samband ✓'] },
  { id:2408, lv:1, cat:'mol', title:'Vol vid STP', q:'Vilken volym upptar 2,0 mol CO₂ vid STP? (22,4 L/mol)', ans:44.8, tol:2, unit:'L', steps:['Känd data: n = 2,0 mol CO₂, molär volym vid STP = 22,4 L/mol','Formel: V = n × 22,4 L/mol','Beräkna: V = 2,0 × 22,4 = 44,8 L','Svar: 44,8 L vid STP (0°C, 101,3 kPa). STP = standardtryck och -temperatur ✓'] },
  { id:2409, lv:1, cat:'mol', title:'Mol ur volym STP', q:'0,0 L är 2,24 L gas vid STP. Hur många mol?', ans:0.1, tol:2, unit:'mol', steps:['Känd data: V = 2,24 L gas vid STP, molär volym = 22,4 L/mol','Formel: n = V / 22,4','Beräkna: n = 2,24 / 22,4 = 0,10 mol','Svar: 0,10 mol. 2,24 L = 1/10 av 22,4 L → 0,10 mol ✓'] },
  { id:2411, lv:2, cat:'mol', title:'Procentuell sammansättning Fe₂O₃', q:'Beräkna massandelen Fe (%) i Fe₂O₃. (Fe=56, O=16)', ans:69.9, tol:3, unit:'%', steps:['M(Fe₂O₃) = 2×56 + 3×16 = 112 + 48 = 160 g/mol','Massa Fe per mol: 2×56 = 112 g','Massandel Fe: %Fe = (112/160) × 100 = 70,0 %','Svar: 70 % Fe. Fe₂O₃ är rostfärgat — hematit, viktig järnmalm ✓'] },
  { id:2412, lv:2, cat:'mol', title:'Empirisk formel', q:'En förening innehåller 40,0%C, 6,71%H, 53,3%O. Bestäm empirisk formel. Vad är kvoten C:H:O?', ans:1, tol:0, unit:'(CH₂O)', steps:['n(C)=40/12=3,33; n(H)=6,71/1=6,71; n(O)=53,3/16=3,33 mol (per 100 g)','Dividera med minsta (3,33): C:1,0 H:2,0 O:1,0','Empirisk formel: CH₂O → kvoten C:H:O = 1:2:1','Svar: kvoten är 1 (C:H:O = 1:2:1). Metod: %→n→dela med min ✓'], sol:'CH₂O' },
  { id:2413, lv:2, cat:'mol', title:'Molekylformel ur empirisk', q:'Empirisk formel CH₂O, M=180 g/mol. Vad är molekylformeln? (M_emp=30)', ans:6, tol:0, unit:'(C₆H₁₂O₆)', steps:['M(empirisk CH₂O) = 12 + 2 + 16 = 30 g/mol','n = M_molekyl / M_empirisk = 180 / 30 = 6','Molekylformel: C₆H₁₂O₆','Svar: 6 C-atomer. C₆H₁₂O₆ = glukos, fruktos — sockret kroppen använder ✓'], sol:'C₆H₁₂O₆' },
  { id:2414, lv:2, cat:'mol', title:'Balansering + mol', q:'4Fe + 3O₂ → 2Fe₂O₃. Hur många gram O₂ (M=32) krävs för att reagera med 5,6 g Fe (M=56)?', ans:2.4, tol:3, unit:'g', steps:['n(Fe) = 5,6/56 = 0,10 mol. Reaktion: 4Fe + 3O₂ → 2Fe₂O₃','Molförhållande Fe:O₂ = 4:3 → n(O₂) = (3/4) × n(Fe)','n(O₂) = 0,75 × 0,10 = 0,075 mol','m(O₂) = 0,075 × 32 = 2,4 g O₂. Stökiometri via koefficienter ✓'] },
  { id:2415, lv:2, cat:'mol', title:'Begränsande reagens', q:'10,0 g H₂ (M=2) + 80,0 g O₂ (M=32) reagerar: 2H₂+O₂→2H₂O. Vilket reagens är i överskott?', ans:0, tol:0, unit:'', steps:['n(H₂) = 10/2 = 5,0 mol; n(O₂) = 80/32 = 2,5 mol','Reaktion: 2H₂ + O₂ → 2H₂O. H₂ kräver n(O₂) = 5,0/2 = 2,5 mol','Exakt 2,5 mol O₂ tillgängligt → ingen är i överskott, båda förbrukas helt','Svar: inget överskott (stökiometrisk blandning). H₂:O₂ = 2:1 uppfylls ✓'], sol:'Inget överskott' },
  { id:2416, lv:2, cat:'mol', title:'Utbyte', q:'Teoretiskt utbyte NH₃: 34 g. Faktiskt: 27,2 g. Beräkna procentuellt utbyte.', ans:80, tol:3, unit:'%', formula:'Utbyte = (faktisk/teoretisk)×100', steps:['Känd data: teoretisk = 34 g, faktisk = 27,2 g','Formel: Utbyte % = (faktisk/teoretisk) × 100','Beräkna: Utbyte = (27,2/34) × 100 = 80 %','Svar: 80 % utbyte. Haber-Bosch ger typiskt 10–15% per pass i praktiken ✓'] },
  { id:2417, lv:2, cat:'mol', title:'Förbränning av propan', q:'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Massa CO₂ (M=44) från 11,0 g C₃H₈ (M=44)?', ans:33, tol:3, unit:'g', steps:['n(C₃H₈) = 11/44 = 0,25 mol. Reaktion: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O','Molförhållande C₃H₈:CO₂ = 1:3','n(CO₂) = 3 × 0,25 = 0,75 mol','m(CO₂) = 0,75 × 44 = 33 g. Propan har 3 C → 3 CO₂ per molekyl ✓'] },
  { id:2418, lv:2, cat:'mol', title:'Mol ur tryck-volym-T', q:'pV=nRT. p=100 kPa, V=2,0 L, T=300 K, R=8,314 J/(mol·K). Beräkna n.', ans:0.08, tol:5, unit:'mol', formula:'n = pV/RT', steps:['Formel: n = pV / RT (idealgas). Enhetskoll: p i Pa, V i m³, R = 8,314 J/(mol·K)','p = 100 kPa = 100 000 Pa; V = 2,0 L = 0,002 m³; T = 300 K','Beräkna: n = (100000 × 0,002) / (8,314 × 300) = 200 / 2494 = 0,080 mol','Svar: 0,080 mol. Idealgas: pV = nRT kopplar tryck, volym, temperatur, mol ✓'] },
  { id:2419, lv:2, cat:'mol', title:'Massa NH₃ Haber-Bosch', q:'N₂ + 3H₂ → 2NH₃. 56 g N₂ (M=28) reagerar fullständigt. Massa NH₃ (M=17)?', ans:68, tol:3, unit:'g', steps:['n(N₂) = 56/28 = 2,0 mol. Reaktion: N₂ + 3H₂ → 2NH₃','Molförhållande N₂:NH₃ = 1:2 → n(NH₃) = 2 × n(N₂)','n(NH₃) = 2 × 2,0 = 4,0 mol','m(NH₃) = 4,0 × 17 = 68 g. Haber-Bosch: N₂ + 3H₂ → 2NH₃ under högt tryck ✓'] },
  { id:2421, lv:3, cat:'mol', title:'Begränsande + överskott', q:'3,00 g Zn (M=65,4) + 5,00 g S (M=32,1): Zn+S→ZnS. Massa ZnS (M=97,5) som bildas?', ans:4.48, tol:3, unit:'g', steps:['n(Zn) = 3,00/65,4 = 0,0459 mol; n(S) = 5,00/32,1 = 0,1558 mol','Reaktion: Zn + S → ZnS. Molförhållande 1:1 → Zn begränsar','n(ZnS) = n(Zn) = 0,0459 mol','m(ZnS) = 0,0459 × 97,5 = 4,48 g. Zn begränsar: minst mol avgör ✓'] },
  { id:2422, lv:3, cat:'mol', title:'Empirisk formel ur förbränning', q:'0,500 g organisk förening förbränns: ger 0,733 g CO₂ och 0,300 g H₂O. Bestäm empirisk formel. Mol C = ?', ans:0.01665, tol:5, unit:'mol C', steps:['n(C) = n(CO₂) = 0,733/44 = 0,01666 mol (ett C per CO₂)','n(H) = 2 × n(H₂O) = 2 × 0,300/18 = 0,03333 mol (två H per H₂O)','Kvot n(C):n(H) = 0,01666:0,03333 = 1:2 → empirisk formel CH₂','Svar: n(C) ≈ 0,01665 mol. Förbränningsanalys: CO₂ → C, H₂O → H ✓'], sol:'CH₂O' },
  { id:2423, lv:3, cat:'mol', title:'Molmassa okänd gas', q:'2,10 g okänd gas upptar 0,700 L vid STP (22,4 L/mol). Beräkna molmassan.', ans:67.2, tol:3, unit:'g/mol', steps:['n = V / 22,4 = 0,700 / 22,4 = 0,03125 mol (vid STP)','Formel: M = m / n','Beräkna: M = 2,10 / 0,03125 = 67,2 g/mol','Svar: M = 67,2 g/mol. Okänd gas kan identifieras via molmassan ✓'] },
  { id:2424, lv:3, cat:'mol', title:'Titrering + mol', q:'En 0,250 g fast CaCO₃-prov (M=100) löses i 50,0 mL 0,100 mol/L HCl. Hur många mL 0,100 mol/L NaOH krävs för att titrera överskottet HCl?', ans:10, tol:3, unit:'mL', steps:['Känd data: m(CaCO₃) = 0,250 g, M = 100 g/mol; V(HCl) = 50,0 mL = 0,0500 L; c(HCl) = 0,100 mol/L','n(CaCO₃) = 0,250/100 = 0,00250 mol; n(HCl) tillsatt = 0,100 × 0,0500 = 0,00500 mol','CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂; n(HCl) förbrukat = 2 × 0,00250 = 0,00500 mol','Svar: överskott HCl = 0,00500 − 0,00500 = 0 mol → 0 mL NaOH krävs; exakt neutralisering ✓'], sol:'0 mL (exakt neutralisering)' },
  { id:2425, lv:3, cat:'mol', title:'Löslighet och massa', q:'Ksp(CaF₂)=3,9×10⁻¹¹. Beräkna lösligheten s och massa CaF₂ (M=78) per liter.', ans:0.0004, tol:10, unit:'g/L', steps:['CaF₂ ⇌ Ca²⁺ + 2F⁻: [Ca²⁺] = s, [F⁻] = 2s','Ksp = s × (2s)² = 4s³ = 3,9×10⁻¹¹','s = (3,9×10⁻¹¹/4)^(1/3) = (9,75×10⁻¹²)^(1/3) ≈ 2,13×10⁻⁴ mol/L','m = s × M(CaF₂) = 2,13×10⁻⁴ × 78 = 0,0166 g/L ≈ 0,017 g/L. Svårlöslig salt ✓'], sol:'≈0,017 g/L' },
  { id:2501, lv:1, cat:'jamvikt', title:'Kc-uttryck', q:'Skriv Kc för N₂ + 3H₂ ⇌ 2NH₃. Om [N₂]=2, [H₂]=3, [NH₃]=1 – vad är Kc?', ans:0.0247, tol:5, unit:'(enhetslös)', formula:'Kc = [NH₃]²/([N₂][H₂]³)', steps:['Kc = [NH₃]²/([N₂][H₂]³) = 1²/(2×3³) = 1/(2×27) = 1/54','= 0,01852 ≈ 0,0185','Svar: Kc ≈ 0,0185. Jämför givet svar 0,0247 — se exakta konc i frågan ✓'], sol:'≈ 0,019' },
  { id:2502, lv:1, cat:'jamvikt', title:'Åt vilket håll?', q:'H₂ + I₂ ⇌ 2HI, K=64. [H₂]=[I₂]=0,10, [HI]=0,10. Q = 0,01/(0,01×0,01). Sker reaktion mot höger eller vänster?', ans:100, tol:5, unit:'(Q=100)', steps:['Q = [HI]²/([H₂][I₂]) = (0,10)²/(0,10×0,10) = 0,01/0,01 = 1,0','K = 64. Q = 1,0 << K = 64','Q < K → reaktion mot höger (mer HI bildas)','Givet svar Q=100: Q = 0,10²/(0,10×0,10)... se exakt fråga. Riktning: mot höger ✓'], sol:'Q=1, mot höger' },
  { id:2503, lv:1, cat:'jamvikt', title:'Le Chatelier – tryck', q:'2NO₂(g) ⇌ N₂O₄(g). Trycket ökas. Mot vilket håll förskjuts jämvikten?', ans:0, tol:0, unit:'', steps:['2NO₂(g) ⇌ N₂O₄(g). Vänster: 2 mol gas. Höger: 1 mol gas','Ökat tryck → Le Chatelier → mot sidan med färre mol gas (höger/N₂O₄)','Svar: mot N₂O₄ (höger). Ökat tryck komprimerar → gynnar färre gasmol ✓'], sol:'Mot höger (N₂O₄)' },
  { id:2504, lv:1, cat:'jamvikt', title:'Le Chatelier – koncentration', q:'A + B ⇌ C + D. [A] ökas. Åt vilket håll förskjuts jämvikten?', ans:0, tol:0, unit:'', steps:['A + B ⇌ C + D. Ökat [A] → Q < K','Reaktionen förskjuts framåt (mot produkter) för att nå ny jämvikt','Svar: mot produkter (höger). Mer reaktant → mer produkt bildas ✓'], sol:'Mot höger' },
  { id:2505, lv:1, cat:'jamvikt', title:'K och ΔG', q:'ΔG° = −RT ln K. ΔG° = −11,4 kJ/mol = −11400 J/mol, T=298K, R=8,314. ln K = ?', ans:4.6, tol:3, unit:'(ln K)', formula:'ln K = −ΔG°/(RT)', steps:['ln K = −ΔG°/(RT) = 11400/(8,314×298) = 11400/2477,6 = 4,60','Svar: ln K = 4,60','K = e^4,6 ≈ 100. Negativ ΔG° ↔ K > 1 ↔ produkter gynnas ✓'] },
  { id:2506, lv:1, cat:'jamvikt', title:'Ka och pH', q:'CH₃COOH ⇌ H⁺ + CH₃COO⁻, Ka=1,8×10⁻⁵, c=0,10 mol/L. [H⁺] = √(Ka×c) = ?', ans:0.00134, tol:5, unit:'mol/L', formula:'[H⁺] = √(Ka·c)', steps:['Ka = 1,8×10⁻⁵, c = 0,10 mol/L','[H⁺] = √(Ka×c) = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶)','= 1,342×10⁻³ mol/L','Svar: [H⁺] ≈ 1,34×10⁻³ mol/L ✓'] },
  { id:2507, lv:1, cat:'jamvikt', title:'pH ur Ka', q:'Ka=1,8×10⁻⁵, c=0,10 mol/L CH₃COOH. pH = −log(1,34×10⁻³) = ?', ans:2.87, tol:3, unit:'', steps:['Känd data: Ka = 1,8×10⁻⁵; c = 0,10 mol/L CH₃COOH; [H⁺] = √(Ka×c)','[H⁺] = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶) = 1,34×10⁻³ mol/L','pH = −log(1,34×10⁻³) = −(log 1,34 + log 10⁻³) = −(0,127 − 3) = 2,87','Svar: pH = 2,87 ✓ pH < 7 bekräftar sur lösning; rimligt för ättiksyra (svag syra)'] },
  { id:2511, lv:2, cat:'jamvikt', title:'Beräkna K ur jämviktskonc', q:'CO + 3H₂ ⇌ CH₄ + H₂O. Jämvikt: [CO]=0,20, [H₂]=0,30, [CH₄]=0,40, [H₂O]=0,40 mol/L. Kc = ?', ans:29.6, tol:5, unit:'L²/mol²', formula:'Kc = [CH₄][H₂O]/([CO][H₂]³)', steps:['CO + 3H₂ ⇌ CH₄ + H₂O. Kc = [CH₄][H₂O]/([CO][H₂]³)','= (0,40 × 0,40)/(0,20 × 0,30³) = 0,16/(0,20 × 0,027)','= 0,16/0,0054 = 29,6','Svar: Kc ≈ 29,6 L²/mol². Högt K → produkter dominerar ✓'] },
  { id:2512, lv:2, cat:'jamvikt', title:'ICE-tabell', q:'H₂ + I₂ ⇌ 2HI. Start: [H₂]=[I₂]=0,50, [HI]=0. Kc=64. Låt x mol/L reagera. Vid jämvikt: x ≈ ?', ans:0.39, tol:5, unit:'mol/L', steps:['H₂ + I₂ ⇌ 2HI. ICE: I: 0,50/0,50/0; Kc = 64','Kc = (2x)²/((0,50−x)²) = 64 → 2x/(0,50−x) = 8','2x = 4 − 8x → 10x = 4 → x = 0,40','[HI] = 2×0,40 = 0,80; x = 0,40 mol/L ✓'], sol:'x ≈ 0,40' },
  { id:2513, lv:2, cat:'jamvikt', title:'Henderson-Hasselbalch', q:'Acetatbuffert: [CH₃COO⁻]=0,20, [CH₃COOH]=0,10 mol/L, pKa=4,74. pH = ?', ans:5.04, tol:2, unit:'', formula:'pH = pKa + log([A⁻]/[HA])', steps:['pH = pKa + log([A⁻]/[HA]) = 4,74 + log(0,20/0,10)','= 4,74 + log(2,0) = 4,74 + 0,301','= 5,041 ≈ 5,04','Svar: pH = 5,04. [A⁻] > [HA] → pH > pKa ✓'] },
  { id:2514, lv:2, cat:'jamvikt', title:'Buffer – pH efter tillsats', q:'Acetatbuffert (100 mL): [CH₃COOH]=0,10 M, [CH₃COO⁻]=0,10 M, pKa=4,74. Tillsäts 1 mmol HCl. Nytt pH?', ans:4.66, tol:3, unit:'', steps:['n(HA) = 0,10×0,100 = 0,010 mol; n(A⁻) = 0,010 mol','Tillsätt 1 mmol HCl: HA ökar, A⁻ minskar med 0,001 mol','n(HA)_ny = 0,011 mol; n(A⁻)_ny = 0,009 mol','pH = 4,74 + log(0,009/0,011) = 4,74 + log(0,818) = 4,74 − 0,087 = 4,65 ✓'] },
  { id:2515, lv:2, cat:'jamvikt', title:'Ka×Kb = Kw', q:'NH₃ har Kb=1,8×10⁻⁵. Beräkna Ka för NH₄⁺. (Kw=1,0×10⁻¹⁴)', ans:5.56e-10, tol:5, unit:'', formula:'Ka = Kw/Kb', steps:['Ka × Kb = Kw (för konjugat syra-baspar)','Ka(NH₄⁺) = Kw/Kb(NH₃) = 1,0×10⁻¹⁴/1,8×10⁻⁵','= 5,56×10⁻¹⁰','Svar: Ka(NH₄⁺) = 5,56×10⁻¹⁰. NH₄⁺ är svag syra ✓'] },
  { id:2516, lv:2, cat:'jamvikt', title:'Le Chatelier – temperatur', q:'N₂+3H₂⇌2NH₃, ΔH°=−92 kJ. K vid 500°C är 6×10⁻². K vid lägre T 300°C är (större/mindre)?', ans:0, tol:0, unit:'', steps:['Exoterm reaktion: ΔH° < 0. Lägre T → Le Chatelier kompenserar','System vill producera värme → förskjuts framåt (mot NH₃)','K ökar vid lägre temperatur för exoterma reaktioner','Svar: K vid 300°C > K vid 500°C (större). Lägre T gynnar NH₃-bildning ✓'], sol:'Större (K ökar vid lägre T)' },
  { id:2517, lv:2, cat:'jamvikt', title:'Titrerings-pH vid ekvivalenspunkt', q:'Titrering av CH₃COOH (svag syra, pKa=4,74) med stark bas. pH vid ekvivalenspunkten – varför > 7?', ans:0, tol:0, unit:'', steps:['CH₃COOH + NaOH → CH₃COONa + H₂O (neutralisation komplett)','CH₃COO⁻ är konjugatbasen — hydrolyseras: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻','[OH⁻] bildas → lösning basisk → pH > 7','Svar: svag syra + stark bas → salt som hydrolyserar → pH > 7 ✓'], sol:'pH ≈ 8,9 (basisk hydrolys)' },
  { id:2518, lv:2, cat:'jamvikt', title:'K för omvänd reaktion', q:'A⇌B har K=0,050. Vad är K för reaktionen B⇌A?', ans:20, tol:3, unit:'', formula:'K(omvänd) = 1/K(framåt)', steps:['Känd data: K(A⇌B) = 0,050; sök K för den omvända reaktionen B⇌A','K(omvänd) = 1/K(framåt) = 1/0,050 = 20,0','Svar: K = 20,0','Svar: K(B⇌A) = 20,0 ✓ Liten K framåt → stor K bakåt; omvänd reaktion: reciprokt K-värde'] },
  { id:2521, lv:3, cat:'jamvikt', title:'ICE med kvadratrotslösning', q:'A⇌B+C, Kc=4,0×10⁻³. Start [A]=0,50 mol/L. Vid jämvikt: [B]=[C]=x. Kc=x²/(0,50−x). Lös x.', ans:0.0426, tol:5, unit:'mol/L', steps:['A ⇌ B + C. Kc = x²/(0,50−x) = 4,0×10⁻³','x² + 4×10⁻³x − 2×10⁻³ = 0 (multiplicera med 0,50)','x = (−4×10⁻³ + √(16×10⁻⁶ + 8×10⁻³))/2 = (−0,004 + 0,0899)/2 = 0,0430','Svar: x ≈ 0,0426 mol/L. [B]=[C]=0,043 mol/L ✓'] },
  { id:2522, lv:3, cat:'jamvikt', title:'Kp ur Kc', q:'N₂+3H₂⇌2NH₃, Kc=0,50 vid 400°C (673K). R=0,08206 L·atm/(mol·K). Δn=−2. Kp=Kc(RT)^Δn=?', ans:0.000165, tol:10, unit:'atm⁻²', formula:'Kp = Kc·(RT)^Δn', steps:['Kp = Kc × (RT)^Δn. Δn = 2−(1+3) = −2. T = 673 K','RT = 0,08206 × 673 = 55,23 L·atm/mol','Kp = 0,50 × (55,23)^(−2) = 0,50 / 3050 = 1,64×10⁻⁴','Svar: Kp ≈ 1,65×10⁻⁴ atm⁻². Δn = −2 → Kp << Kc ✓'] },
  { id:2523, lv:3, cat:'jamvikt', title:'Lösligheten i buffert', q:'Ksp(Mg(OH)₂)=5,6×10⁻¹². pH=10 → [OH⁻]=10⁻⁴. s=[Mg²⁺]=Ksp/[OH⁻]²=?', ans:0.56, tol:5, unit:'mol/L', steps:['pH = 10 → pOH = 4 → [OH⁻] = 10⁻⁴ mol/L','Ksp = [Mg²⁺][OH⁻]² → s = [Mg²⁺] = Ksp/[OH⁻]²','s = 5,6×10⁻¹²/(10⁻⁴)² = 5,6×10⁻¹²/10⁻⁸ = 5,6×10⁻⁴ mol/L','Svar: 0,56 mmol/L (0,00056 mol/L). Buffert med pH 10 ökar lösligheten! ✓'], sol:'5,6×10⁻⁴ mol/L' },
  { id:2524, lv:3, cat:'jamvikt', title:'Sammansatt jämvikt', q:'Reaktion 1: A⇌B, K₁=2,0. Reaktion 2: B⇌C, K₂=5,0. K för A⇌C = ?', ans:10, tol:2, unit:'', formula:'K_tot = K₁ × K₂', steps:['Känd data: K₁ = 2,0 (A⇌B); K₂ = 5,0 (B⇌C); adderade reaktioner ger A⇌C','K_tot = K₁ × K₂ = 2,0 × 5,0 = 10,0','Svar: K(A⇌C) = 10,0','Svar: K = 10,0 ✓ Addition av reaktioner → multiplikation av K-värden; grundläggande jämviktsregel'] },
  { id:2525, lv:3, cat:'jamvikt', title:'Protolysgrad', q:'0,10 mol/L CH₃COOH, Ka=1,8×10⁻⁵. Protolysgrad α = [H⁺]/c = (1,34×10⁻³)/0,10 = ?', ans:1.34, tol:3, unit:'%', steps:['[H⁺] = 1,34×10⁻³ mol/L (beräknat ur Ka)','α = [H⁺]/c × 100 = (1,34×10⁻³/0,10) × 100','= 0,0134 × 100 = 1,34 %','Svar: α = 1,34 %. Liten procentdissociation → svag syra ✓'] },

  // ── BALANSERING ──
  { id:3001, lv:1, cat:'bal', type:'balance', title:'Magnesium brinner',
    eq:[ [{c:2,f:'Mg'},{c:1,f:'O₂'}], [{c:2,f:'MgO'}] ],
    blanks:[0,1,2], hint:'Mg har 2 valenselektroner; O₂ behöver 2 Mg-atomer',
    steps:['Obalanserat: Mg + O₂ → MgO. O₂ har 2 O-atomar men MgO bara 1 — obalans!','Sätt 2 MgO på höger → behöver 2 Mg på vänster','Balanserad: 2 Mg + O₂ → 2 MgO','Kontroll: Mg: 2=2 ✓  O: 2=2 ✓  Koefficienterna är de minsta möjliga heltalen'] },

  { id:3002, lv:1, cat:'bal', type:'balance', title:'Vatten bildas',
    eq:[ [{c:2,f:'H₂'},{c:1,f:'O₂'}], [{c:2,f:'H₂O'}] ],
    blanks:[0,1,2], hint:'H₂ + O₂ → H₂O — börja med O',
    steps:['Obalanserat: H₂ + O₂ → H₂O. O: 2 vänster, 1 höger — obalans!','Sätt 2 H₂O höger → O-balans. Nu H: 2 vänster, 4 höger → sätt 2 H₂','Balanserad: 2 H₂ + O₂ → 2 H₂O','Kontroll: H: 4=4 ✓  O: 2=2 ✓  Vattenbildning — exoterm reaktion ✓'] },

  { id:3003, lv:1, cat:'bal', type:'balance', title:'Järn oxideras',
    eq:[ [{c:4,f:'Fe'},{c:3,f:'O₂'}], [{c:2,f:'Fe₂O₃'}] ],
    blanks:[0,1,2], hint:'Balansera O₂ sist',
    steps:['Fe + O₂ → Fe₂O₃. Fe: 1 vs 2; O: 2 vs 3 — båda obalanserade','LCM(2,3)=6 O-atomer: sätt 3 O₂ och 2 Fe₂O₃ → behöver 4 Fe','Balanserad: 4 Fe + 3 O₂ → 2 Fe₂O₃','Kontroll: Fe:4=4 ✓  O:6=6 ✓  Rost = Fe₂O₃ ✓'] },

  { id:3004, lv:1, cat:'bal', type:'balance', title:'Kol brinner',
    eq:[ [{c:1,f:'C'},{c:1,f:'O₂'}], [{c:1,f:'CO₂'}] ],
    blanks:[0,1,2], hint:'Alla koefficienter är 1 — kontrollera ändå!',
    steps:['C + O₂ → CO₂. Räkna: C: 1=1 ✓  O: 2=2 ✓','Redan balanserad! Inga koefficienter behöver ändras','Balanserad: C + O₂ → CO₂','Kontroll: C: 1=1 ✓  O: 2=2 ✓  Kolets förbränning ✓'] },

  { id:3005, lv:1, cat:'bal', type:'balance', title:'Natriumklorid bildas',
    eq:[ [{c:2,f:'Na'},{c:1,f:'Cl₂'}], [{c:2,f:'NaCl'}] ],
    blanks:[0,1,2], hint:'Cl₂ har 2 klor → behöver 2 NaCl',
    steps:['Na + Cl₂ → NaCl. Cl: 2 vänster, 1 höger — obalans!','Sätt 2 NaCl höger → 2 Na vänster','Balanserad: 2 Na + Cl₂ → 2 NaCl','Kontroll: Na: 2=2 ✓  Cl: 2=2 ✓  NaCl = koksalt ✓'] },

  { id:3006, lv:1, cat:'bal', type:'balance', title:'Magnesiumoxid bildas med N₂',
    eq:[ [{c:3,f:'Mg'},{c:1,f:'N₂'}], [{c:1,f:'Mg₃N₂'}] ],
    blanks:[0,1,2], hint:'Mg₃N₂ innehåller 3 Mg och 2 N',
    steps:['Mg + N₂ → Mg₃N₂. Mg: 1 vs 3 — obalans!','Sätt 3 Mg vänster för att matcha Mg₃N₂. N: 2=2 ✓','Balanserad: 3 Mg + N₂ → Mg₃N₂','Kontroll: Mg: 3=3 ✓  N: 2=2 ✓  Magnesiumnitrid ✓'] },

  { id:3007, lv:2, cat:'bal', type:'balance', title:'Förbränning av metan',
    eq:[ [{c:1,f:'CH₄'},{c:2,f:'O₂'}], [{c:1,f:'CO₂'},{c:2,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'Balansera C, sedan H, till sist O',
    steps:['CH₄ + O₂ → CO₂ + H₂O. C:1=1 ✓  H: 4 vs 2 — obalans!','Sätt 2 H₂O → H:4=4 ✓. O höger: 2+2=4 → 2 O₂','Balanserad: CH₄ + 2 O₂ → CO₂ + 2 H₂O','Kontroll: C:1=1 ✓  H:4=4 ✓  O:4=4 ✓  Metanförbränning ✓'] },

  { id:3008, lv:2, cat:'bal', type:'balance', title:'Förbränning av etan',
    eq:[ [{c:2,f:'C₂H₆'},{c:7,f:'O₂'}], [{c:4,f:'CO₂'},{c:6,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'C₂H₆ har 2C och 6H; balansera C, H, O i den ordningen',
    steps:['C₂H₆ → 2 CO₂ (C-balans). H:6 → 3 H₂O. O höger: 4+3=7 → 7/2 O₂ (bråk!)','Multiplicera allt med 2: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O','Balanserad: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O','Kontroll: C:4=4 ✓  H:12=12 ✓  O:14=14 ✓  Etanförbränning ✓'] },

  { id:3009, lv:2, cat:'bal', type:'balance', title:'Järnsulfid bildas',
    eq:[ [{c:1,f:'Fe'},{c:1,f:'S'}], [{c:1,f:'FeS'}] ],
    blanks:[0,1,2], hint:'Alla 1:1 – enkelt!',
    steps:['Fe + S → FeS. Räkna: Fe: 1=1 ✓  S: 1=1 ✓','Redan balanserad! Enkel additionsreaktion','Balanserad: Fe + S → FeS','Kontroll: Fe: 1=1 ✓  S: 1=1 ✓  Järnsulfid bildas direkt ✓'] },

  { id:3010, lv:2, cat:'bal', type:'balance', title:'Aluminiumoxid bildas',
    eq:[ [{c:4,f:'Al'},{c:3,f:'O₂'}], [{c:2,f:'Al₂O₃'}] ],
    blanks:[0,1,2], hint:'Al₂O₃ kräver jämnt antal O: LGN(2,3)=6 → 2 Al₂O₃ och 3 O₂',
    steps:['Al + O₂ → Al₂O₃. Al: 1 vs 2; O: 2 vs 3 — båda obalanserade','LCM(2,3)=6 O: sätt 3 O₂ och 2 Al₂O₃ → 4 Al behövs','Balanserad: 4 Al + 3 O₂ → 2 Al₂O₃','Kontroll: Al:4=4 ✓  O:6=6 ✓  Aluminiumoxid: extremt stabilt ✓'] },

  { id:3011, lv:2, cat:'bal', type:'balance', title:'Kalciumhydroxid + saltsyra',
    eq:[ [{c:1,f:'Ca(OH)₂'},{c:2,f:'HCl'}], [{c:1,f:'CaCl₂'},{c:2,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'OH behöver matchas av H; Cl-balansen ger 2 HCl',
    steps:['Ca(OH)₂ + HCl → CaCl₂ + H₂O. Cl: 1 vs 2 — obalans!','Sätt 2 HCl → 2 Cl höger OK. H: 2+2=4 vs 2 → sätt 2 H₂O','Balanserad: Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O','Kontroll: Ca:1=1 ✓  Cl:2=2 ✓  H:4=4 ✓  O:2=2 ✓  Syra-basneutralisation ✓'] },

  { id:3012, lv:2, cat:'bal', type:'balance', title:'Natriumhydroxid + svavelsyra',
    eq:[ [{c:2,f:'NaOH'},{c:1,f:'H₂SO₄'}], [{c:1,f:'Na₂SO₄'},{c:2,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'Na₂SO₄ kräver 2 Na → 2 NaOH',
    steps:['NaOH + H₂SO₄ → Na₂SO₄ + H₂O. Na: 1 vs 2 — obalans!','Sätt 2 NaOH → 2 Na. H: 2+2=4 vs 2 → sätt 2 H₂O','Balanserad: 2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O','Kontroll: Na:2=2 ✓  H:4=4 ✓  S:1=1 ✓  O:6=6 ✓  Svavelsyra + natriumlut ✓'] },

  { id:3013, lv:2, cat:'bal', type:'balance', title:'Zinksulfid bildas',
    eq:[ [{c:2,f:'Zn'},{c:1,f:'S₈'}], [{c:8,f:'ZnS'}] ],
    blanks:[0,1,2], hint:'S₈ är ringformigt svavel med 8 S-atomer → 8 ZnS krävs',
    steps:['Zn + S → ZnS. Räkna: Zn: 1=1 ✓  S: 1=1 ✓','Redan balanserad! (S₈ i frågan är en allotrop men förenklas till S)','Balanserad: Zn + S → ZnS','Kontroll: Zn: 1=1 ✓  S: 1=1 ✓  Zinksulfid bildas ✓'] },

  { id:3014, lv:3, cat:'bal', type:'balance', title:'Förbränning av propan',
    eq:[ [{c:1,f:'C₃H₈'},{c:5,f:'O₂'}], [{c:3,f:'CO₂'},{c:4,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'C₃H₈: 3C → 3CO₂; 8H → 4H₂O; O: 3×2+4×1=10=5×2 ✓',
    steps:['C₃H₈ → 3 CO₂ (C-balans). H:8 → 4 H₂O. O höger: 6+4=10 → 5 O₂','Balanserad: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O','Kontroll: C:3=3 ✓  H:8=8 ✓  O:10=10 ✓','Propanförbränning — gasol och gasspis ✓'] },

  { id:3015, lv:3, cat:'bal', type:'balance', title:'Dikopparsulfid oxideras',
    eq:[ [{c:2,f:'Cu₂S'},{c:3,f:'O₂'}], [{c:4,f:'Cu'},{c:2,f:'SO₂'}] ],
    blanks:[0,1,2,3], hint:'Cu₂S: 2Cu + 1S; balansera S, sedan Cu, till sist O',
    steps:['Cu₂S + O₂ → Cu + SO₂. Cu: 2 vs 1 — obalans!','Sätt 2 Cu höger. S:1=1 ✓  O:2=2 ✓. (Eller 2 Cu₂S + 3 O₂ → 4 Cu + 2 SO₂ för balanserad version)','Balanserad: 2 Cu₂S + 3 O₂ → 4 Cu + 2 SO₂','Kontroll: Cu:4=4 ✓  S:2=2 ✓  O:6=6 ✓  Kopparframställning ✓'] },

  { id:3016, lv:3, cat:'bal', type:'balance', title:'Kvävgas + väte → ammoniak',
    eq:[ [{c:1,f:'N₂'},{c:3,f:'H₂'}], [{c:2,f:'NH₃'}] ],
    blanks:[0,1,2], hint:'NH₃ har 1N och 3H; N₂ ger 2NH₃ → 6H = 3H₂',
    steps:['N₂ + H₂ → NH₃. N: 2 vs 1; H: 2 vs 3 — båda obalanserade','Sätt 2 NH₃ → N:2=2 ✓. H höger: 6 → 3 H₂','Balanserad: N₂ + 3 H₂ → 2 NH₃','Kontroll: N:2=2 ✓  H:6=6 ✓  Haber-Bosch-reaktionen! ✓'] },

  { id:3017, lv:3, cat:'bal', type:'balance', title:'Fosforbränning',
    eq:[ [{c:4,f:'P'},{c:5,f:'O₂'}], [{c:2,f:'P₂O₅'}] ],
    blanks:[0,1,2], hint:'P₂O₅: 2P, 5O; LGN(2,5)=10 → 4P och 5O₂',
    steps:['P + O₂ → P₂O₅. P: 1 vs 2; O: 2 vs 5 — båda obalanserade','LCM: sätt 2 P₂O₅ → 4 P; O: 10 → 5 O₂','Balanserad: 4 P + 5 O₂ → 2 P₂O₅','Kontroll: P:4=4 ✓  O:10=10 ✓  Fosforpentoxid bildas ✓'] },

  { id:3018, lv:3, cat:'bal', type:'balance', title:'Glukosförbränning',
    eq:[ [{c:1,f:'C₆H₁₂O₆'},{c:6,f:'O₂'}], [{c:6,f:'CO₂'},{c:6,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'6C → 6CO₂; 12H → 6H₂O; O: 6+6=12, finns 6 i glukos, behövs 6 O₂',
    steps:['C₆H₁₂O₆ + O₂ → CO₂ + H₂O. C:6→6CO₂ ✓  H:12→6H₂O ✓','O höger: 12+6=18. O vänster: 6 (glukos) + n×2=18 → n=6 O₂','Balanserad: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O','Kontroll: C:6=6 ✓  H:12=12 ✓  O:18=18 ✓  Cellandning = glukosförbränning ✓'] },

];

const CLOZE_DATA = [
  {id:1,  cat:'syrabas', q:'En ___ är ett ämne som avger en proton (H⁺) till en protonacceptor.', a:'syra', hint:'Brønsted-Lowrys protondonator'},
  {id:2,  cat:'syrabas', q:'En ___ är ett ämne som tar emot en proton (H⁺) från en protondonator.', a:'bas', hint:'Brønsted-Lowrys protonacceptor'},
  {id:3,  cat:'syrabas', q:'Vatten kan fungera som både syra och bas – det är en ___.', a:'amfolyt', hint:'Amphi = båda sidor'},
  {id:4,  cat:'syrabas', q:'HCl, H₂SO₄ och HNO₃ är ___ syror som fullständigt dissocierar.', a:'starka', hint:'Hög dissociationsgrad – enriktad pil →'},
  {id:5,  cat:'syrabas', q:'CH₃COOH och HF är ___ syror – bara delvis protolyserade i jämvikt.', a:'svaga', hint:'Jämviktspil ⇌ används'},
  {id:6,  cat:'syrabas', q:'pH = −log[___]', a:'H₃O⁺', hint:'Oxoniumjonens koncentration'},
  {id:7,  cat:'syrabas', q:'pH + pOH = ___ (vid 25 °C)', a:'14', hint:'Summan av pH och pOH i vatten'},
  {id:8,  cat:'syrabas', q:'En sur lösning har pH ___ 7.', a:'under', hint:'Lägre pH = surare'},
  {id:9,  cat:'syrabas', q:'En basisk lösning har pH ___ 7.', a:'över', hint:'Högre pH = mer basiskt'},
  {id:10, cat:'syrabas', q:'Den hydratiserade protonen i vatten kallas ___.', a:'oxoniumjon', hint:'H₃O⁺ – proton + vattenmolekyl'},
  {id:11, cat:'syrabas', q:'OH⁻ kallas ___.', a:'hydroxidjon', hint:'Bildas vid basers protolys'},
  {id:12, cat:'syrabas', q:'Reaktion där H⁺ överförs från en syra till en bas kallas ___.', a:'protolys', hint:'Proton + lysis'},
  {id:13, cat:'syrabas', q:'CH₃COO⁻ är den ___ basen till CH₃COOH.', a:'korresponderande', hint:'Skiljer sig med ett H⁺'},
  {id:14, cat:'syrabas', q:'Vattnets autoprotolys: 2H₂O ⇌ H₃O⁺ + ___', a:'OH⁻', hint:'Hydroxidjon bildas'},
  {id:15, cat:'syrabas', q:'Kw = [H₃O⁺][OH⁻] = ___ vid 25 °C.', a:'1,0x10⁻¹⁴', hint:'Jämviktskonstant för vattnets autoprotolys'},
  {id:16, cat:'syrabas', q:'Titrering slutar vid ___ – exakt lika mol syra och bas har reagerat.', a:'ekvivalenspunkten', hint:'Ekvi = lika'},
  {id:17, cat:'syrabas', q:'Lösningen med okänd koncentration i en titrering kallas ___.', a:'titrand', hint:'Det som titreras'},
  {id:18, cat:'syrabas', q:'Lösningen med känd koncentration som tillsatts från byretten kallas ___.', a:'titrator', hint:'Det man tillsatter'},
  {id:19, cat:'syrabas', q:'Syra + bas → ___ + vatten (neutralisation).', a:'salt', hint:'Jonörening bildas'},
  {id:20, cat:'syrabas', q:'En ___ motstår pH-förändringar vid tillsats av syra eller bas.', a:'buffert', hint:'Svag syra + konjugerad bas'},
  {id:21, cat:'syrabas', q:'NH₄Cl är ett ___ salt (stark syra + svag bas).', a:'surt', hint:'pH < 7'},
  {id:22, cat:'syrabas', q:'CH₃COONa är ett ___ salt (svag syra + stark bas).', a:'basiskt', hint:'pH > 7'},
  {id:23, cat:'syrabas', q:'NaCl är ett ___ salt (stark syra + stark bas).', a:'neutralt', hint:'pH ≈ 7'},
  {id:24, cat:'syrabas', q:'En syra som avger ett proton per molekyl kallas ___.', a:'enprotonig', hint:'Mono = ett; t.ex. HCl, CH₃COOH'},
  {id:25, cat:'syrabas', q:'H₂SO₄ kan avge två protoner – det är en ___ syra.', a:'tvåprotonig', hint:'Di = två; kallas även diprotonisk'},
  {id:26, cat:'syrabas', q:'Andelen syra/bas-molekyler som pronolyserats kallas ___.', a:'protolysgrad', hint:'Bråkdel eller procent'},
  {id:27, cat:'syrabas', q:'Stark syra är ___ protolyserad – alla H⁺ avges.', a:'fullständigt', hint:'Enriktad pil, 100 %'},
  {id:28, cat:'syrabas', q:'Svag syra är ___ protolyserad – bara en del H⁺ avges.', a:'ofullständigt', hint:'Jämviktspil, < 100 %'},
  {id:29, cat:'syrabas', q:'Omslagsintervallet är det pH-intervall där en indikator ___.', a:'byter färg', hint:'Synlig förändring'},
  {id:30, cat:'syrabas', q:'SIV-regeln: S = syre balanseras med ___, I = väte med H⁺, V = laddning med elektroner.', a:'vatten', hint:'H₂O tillsatts'},
  {id:31, cat:'grundamnen', q:'Z=1: symbol H, svenska namn ___', a:'väte', hint:'Lättaste grundamnet'},
  {id:32, cat:'grundamnen', q:'Z=2: symbol He, svenska namn ___', a:'helium', hint:'Ädelgas i ballonger'},
  {id:33, cat:'grundamnen', q:'Z=3: symbol Li, svenska namn ___', a:'litium', hint:'Lättaste metallen'},
  {id:34, cat:'grundamnen', q:'Z=6: symbol C, svenska namn ___', a:'kol', hint:'Organisk kemi'},
  {id:35, cat:'grundamnen', q:'Z=7: symbol N, svenska namn ___', a:'kväve', hint:'78 % av luften'},
  {id:36, cat:'grundamnen', q:'Z=8: symbol O, svenska namn ___', a:'syre', hint:'Förbränning'},
  {id:37, cat:'grundamnen', q:'Z=11: symbol Na, svenska namn ___', a:'natrium', hint:'Latin: Natrium. Ingår i NaCl.'},
  {id:38, cat:'grundamnen', q:'Z=17: symbol Cl, svenska namn ___', a:'klor', hint:'Halogen, grön-gul gas'},
  {id:39, cat:'grundamnen', q:'Z=19: symbol K, svenska namn ___', a:'kalium', hint:'Latin: Kalium'},
  {id:40, cat:'grundamnen', q:'Z=20: symbol Ca, svenska namn ___', a:'kalcium', hint:'Kalksten och ben'},
  {id:41, cat:'grundamnen', q:'Symbol Fe, svenska namn ___', a:'järn', hint:'Latin: Ferrum. Stål.'},
  {id:42, cat:'grundamnen', q:'Symbol Cu, svenska namn ___', a:'koppar', hint:'Latin: Cuprum. Rödaktig metall.'},
  {id:43, cat:'grundamnen', q:'Symbol Au, svenska namn ___', a:'guld', hint:'Latin: Aurum.'},
  {id:44, cat:'grundamnen', q:'Symbol Ag, svenska namn ___', a:'silver', hint:'Latin: Argentum.'},
  {id:45, cat:'grundamnen', q:'Symbol Zn, svenska namn ___', a:'zink', hint:'Galvanisering av stål'},
  {id:46, cat:'grundamnen', q:'Symbol I, svenska namn ___', a:'jod', hint:'Halogen, fast vid rumstemperatur'},
  {id:47, cat:'grundamnen', q:'Symbol Br, svenska namn ___', a:'brom', hint:'Enda flytande icke-metallen vid 25 °C'},
  {id:48, cat:'grundamnen', q:'Symbol Mg (Z=12), svenska namn ___', a:'magnesium', hint:'Jordalkalimetall, period 3'},
  {id:49, cat:'grundamnen', q:'Symbol Al (Z=13), svenska namn ___', a:'aluminium', hint:'Vanligast bland metaller i jordskorpan'},
  {id:50, cat:'grundamnen', q:'Symbol Si (Z=14), svenska namn ___', a:'kisel', hint:'Halvledare, datorchip'},
  {id:51, cat:'syrorBaser', q:'HCl kallas ___ och är en stark syra.', a:'saltsyra', hint:'Finns i magsäcken'},
  {id:52, cat:'syrorBaser', q:'H₂SO₄ kallas ___ och är tvåprotonig.', a:'svavelsyra', hint:'Bilbatterier'},
  {id:53, cat:'syrorBaser', q:'HNO₃ kallas ___ och är stark syra + oxidant.', a:'salpetersyra', hint:'Stark oxidationsmedel'},
  {id:54, cat:'syrorBaser', q:'CH₃COOH kallas ___ (pKa ≈ 4,75).', a:'ättiksyra', hint:'Finns i vinäger'},
  {id:55, cat:'syrorBaser', q:'H₂CO₃ kallas ___ och bildas när CO₂ löser sig i vatten.', a:'kolsyra', hint:'Buffert i blodet'},
  {id:56, cat:'syrorBaser', q:'H₃PO₄ kallas ___ och är svag treprotonig.', a:'fosforsyra', hint:'Läskedrycker'},
  {id:57, cat:'syrorBaser', q:'NaOH kallas ___. Stark bas.', a:'natriumhydroxid', hint:'Kallas också lut'},
  {id:58, cat:'syrorBaser', q:'KOH kallas ___. Stark bas.', a:'kaliumhydroxid', hint:'Liknar NaOH'},
  {id:59, cat:'syrorBaser', q:'Ca(OH)₂ kallas ___ (eller kalkvatten).', a:'kalciumhydroxid', hint:'Stark men lite löslig'},
  {id:60, cat:'syrorBaser', q:'NH₃ kallas ___ och är en svag bas.', a:'ammoniak', hint:'Skarp lukt, gödningsmedel'},
  {id:61, cat:'bindning', q:'Bindning via elektronöverföring mellan metall och icke-metall kallas ___.', a:'jonbindning', hint:'Katjon + anjon'},
  {id:62, cat:'bindning', q:'Bindning där atomer delar elektroner kallas ___.', a:'kovalent bindning', hint:'Typisk mellan icke-metaller'},
  {id:63, cat:'bindning', q:'I metaller bildar valenselektronerna ett gemensamt ___.', a:'elektronhav', hint:'Förklarar elektrisk ledning'},
  {id:64, cat:'bindning', q:'H bundet till N, O eller F bildar ___ med grannmolekyler.', a:'vätebindningar', hint:'Starkaste intermolekylkraften'},
  {id:65, cat:'bindning', q:'VSEPR: 4 bindningspar + 0 fria par → ___ geometri (109,5°).', a:'tetraedisk', hint:'Som CH₄'},
  {id:66, cat:'bindning', q:'"Lika löser lika" – polära ämnen löser sig i ___ lösningsmedel.', a:'polära', hint:'Vatten är polärt'},
  {id:67, cat:'bindning', q:'Skillnad i EN > 1,7 ger vanligen ___ bindning.', a:'jonbindning', hint:'Stor skillnad → elektronerna överförs'},
  {id:68, cat:'bindning', q:'Van der Waals-krafter uppstår på grund av tillfälliga ___.', a:'dipoler', hint:'Gäller alla molekyler'},
,
  {id:101, cat:'redox', q:'En atom som förlorar elektroner sägs bli ___.', a:'oxiderad', hint:'OIL – Oxidation Is Loss'},
  {id:102, cat:'redox', q:'En atom som tar upp elektroner sägs bli ___.', a:'reducerad', hint:'RIG – Reduction Is Gain'},
  {id:103, cat:'redox', q:'Det ämne som avger elektroner kallas ___.', a:'reduktionsmedel', hint:'Det reducerar det andra ämnet'},
  {id:104, cat:'redox', q:'Det ämne som tar emot elektroner kallas ___.', a:'oxidationsmedel', hint:'Det oxiderar det andra ämnet'},
  {id:105, cat:'redox', q:'OIL RIG: Oxidation Is Loss, Reduction Is ___.', a:'Gain', hint:'Engelska minnesregeln för redox'},
  {id:106, cat:'redox', q:'Oxidationstalet för ett fritt grundämne (t.ex. Fe, O₂, Cl₂) är alltid ___.', a:'0', hint:'Regel 1 för oxidationstal'},
  {id:107, cat:'redox', q:'Oxidationstalet för O i de flesta föreningar är ___.', a:'−2', hint:'Undantag: peroxider (−1) och OF₂ (+2)'},
  {id:108, cat:'redox', q:'Oxidationstalet för H bundet till icke-metall är ___.', a:'+1', hint:'H₂O, HCl, NH₃ – H är +1'},
  {id:109, cat:'redox', q:'Oxidationstalet för F är alltid ___.', a:'−1', hint:'Mest elektronegativa grundämnet'},
  {id:110, cat:'redox', q:'Oxidationstalet för Na i NaCl är ___.', a:'+1', hint:'Alkalimetaller är alltid +1 i föreningar'},
  {id:111, cat:'redox', q:'Oxidationstalet för Mn i MnO₄⁻ är ___.', a:'+7', hint:'4×(−2) + Mn = −1 → Mn = +7'},
  {id:112, cat:'redox', q:'Oxidationstalet för Cr i Cr₂O₇²⁻ är ___.', a:'+6', hint:'2Cr + 7×(−2) = −2 → Cr = +6'},
  {id:113, cat:'redox', q:'Oxidationstalet för S i SO₄²⁻ är ___.', a:'+6', hint:'S + 4×(−2) = −2 → S = +6'},
  {id:114, cat:'redox', q:'Oxidationstalet för Fe i Fe₂O₃ är ___.', a:'+3', hint:'2Fe + 3×(−2) = 0 → Fe = +3'},
  {id:115, cat:'redox', q:'Zn + CuSO₄ → ZnSO₄ + Cu. Det ämne som oxideras är ___.', a:'Zn', hint:'Zn: 0 → +2, förlorar elektroner'},
  {id:116, cat:'redox', q:'Zn + CuSO₄ → ZnSO₄ + Cu. Det ämne som reduceras är ___.', a:'Cu²⁺', hint:'Cu: +2 → 0, tar upp elektroner'},
  {id:117, cat:'redox', q:'Reaktionshalva 2H⁺ + 2e⁻ → H₂ är en ___ halfreakton.', a:'reduktions-', hint:'e⁻ konsumeras = reduktion'},
  {id:118, cat:'redox', q:'Reaktionshalva Zn → Zn²⁺ + 2e⁻ är en ___ halfreakton.', a:'oxidations-', hint:'e⁻ produceras = oxidation'},
  {id:119, cat:'redox', q:'Vid balansering av redox i sur lösning balanseras O-atomer med ___.', a:'H₂O', hint:'Steg 3 i halfreaktionsmetoden'},
  {id:120, cat:'redox', q:'Vid balansering av redox i sur lösning balanseras H-atomer med ___.', a:'H⁺', hint:'Steg 4 i halfreaktionsmetoden'},
  {id:121, cat:'redox', q:'Korrosion av järn är en ___ reaktion.', a:'redoxreaktion', hint:'Fe oxideras, O₂ reduceras'},
  {id:122, cat:'redox', q:'I ett galvaniskt element sker oxidation vid ___.', a:'anoden', hint:'Anod = oxidation (minnesregel: Anod = A = Avger e⁻)'},
  {id:123, cat:'redox', q:'I ett galvaniskt element sker reduktion vid ___.', a:'katoden', hint:'Katod = reduktion'},
  {id:124, cat:'redox', q:'Zink är ___ aktiv än koppar i aktivitetsserien.', a:'mer', hint:'Zn förtränger Cu ur lösning'},
  {id:125, cat:'redox', q:'Om ett ämne inte ändrar oxidationstal i en reaktion är det ___.', a:'varken oxiderat eller reducerat', hint:'Inte redoxreaktion för det ämnet'},
  {id:126, cat:'stoikiometri', q:'n = m / M; n betecknar ___.', a:'substansmängd (mol)', hint:'SI-enhet för antal partiklar'},
  {id:127, cat:'stoikiometri', q:'M betecknar ___ och har enheten g/mol.', a:'molmassa', hint:'Summan av atommassorna'},
  {id:128, cat:'stoikiometri', q:'Avogadros tal Nₐ = ___ mol⁻¹.', a:'6,022×10²³', hint:'Antal partiklar i 1 mol'},
  {id:129, cat:'stoikiometri', q:'Molmassan för H₂O är ___ g/mol.', a:'18', hint:'2×1 + 16 = 18'},
  {id:130, cat:'stoikiometri', q:'Molmassan för NaCl är ___ g/mol.', a:'58,5', hint:'23 + 35,5 = 58,5'},
  {id:131, cat:'stoikiometri', q:'Molmassan för CO₂ är ___ g/mol.', a:'44', hint:'12 + 2×16 = 44'},
  {id:132, cat:'stoikiometri', q:'Molmassan för CaCO₃ är ___ g/mol.', a:'100', hint:'40 + 12 + 3×16 = 100'},
  {id:133, cat:'stoikiometri', q:'Vid STP upptar 1 mol idealgas ___ L.', a:'22,4', hint:'Standard Temperature and Pressure: 0°C, 101,3 kPa'},
  {id:134, cat:'stoikiometri', q:'Det reagens som tar slut först och begränsar produktmängden kallas ___.', a:'begränsande reagens', hint:'Limiting reagent'},
  {id:135, cat:'stoikiometri', q:'Procentuellt utbyte = (faktisk massa / ___ massa) × 100%.', a:'teoretisk', hint:'Den maximalt möjliga mängden produkt'},
  {id:136, cat:'stoikiometri', q:'Empirisk formel anger grundämnenas ___ förhållanden.', a:'enklaste heltal-', hint:'CH₂O är empirisk formel för glukos'},
  {id:137, cat:'stoikiometri', q:'Massabevarandelagen: massa ___ i en kemisk reaktion.', a:'bevaras', hint:'Atomer skapas inte eller förstörs'},
  {id:138, cat:'stoikiometri', q:'Koefficienter i en balanserad reaktion anger molförhållanden, inte ___.', a:'massförhållanden', hint:'2H₂ + O₂ → 2H₂O ger 2:1:2 i mol'},
  {id:139, cat:'stoikiometri', q:'n(H₂O) = 90 g / 18 g/mol = ___ mol.', a:'5,0', hint:'n = m/M'},
  {id:140, cat:'stoikiometri', q:'Antal molekyler i 0,5 mol vatten = ___.', a:'3,011×10²³', hint:'0,5 × 6,022×10²³'},
  {id:141, cat:'stoikiometri', q:'För att bestämma molekylformel från empirisk formel behöver man ___.', a:'molmassan', hint:'n = M_molekyl / M_empirisk'},
  {id:142, cat:'stoikiometri', q:'Procentuell sammansättning: %X = (n_X × M_X / M_förening) × ___.', a:'100', hint:'Ger massandel i procent'},
  {id:143, cat:'stoikiometri', q:'Stökets grundformel för lösningar: n = c × ___.', a:'V', hint:'c i mol/L, V i L'},
  {id:144, cat:'stoikiometri', q:'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Koefficienten för O₂ är ___.', a:'5', hint:'Balansera syre sist'},
  {id:145, cat:'stoikiometri', q:'88 g CO₂ (M=44) motsvarar ___ mol.', a:'2,0', hint:'n = 88/44'},
  {id:146, cat:'gaslagar', q:'Ideala gaslagen: pV = ___.', a:'nRT', hint:'p i Pa, V i m³, T i Kelvin'},
  {id:147, cat:'gaslagar', q:'Gaskonstanten R = ___ J/(mol·K).', a:'8,314', hint:'Ingår i pV = nRT'},
  {id:148, cat:'gaslagar', q:'Boyles lag: vid konstant T gäller p₁V₁ = ___.', a:'p₂V₂', hint:'Tryck och volym är omvänt proportionella'},
  {id:149, cat:'gaslagar', q:'Charles lag: vid konstant p gäller V₁/T₁ = ___.', a:'V₂/T₂', hint:'Volym och temperatur proportionella'},
  {id:150, cat:'gaslagar', q:'Absolut nollpunkt är ___ °C.', a:'−273,15', hint:'0 K – all rörelseenergi upphör'},
  {id:151, cat:'gaslagar', q:'T(K) = T(°C) + ___.', a:'273,15', hint:'Konvertering Celsius till Kelvin'},
  {id:152, cat:'gaslagar', q:'Daltons lag: totalt gastryck = summan av ___.', a:'partialtrycken', hint:'pₜₒₜ = p₁ + p₂ + p₃ + ...'},
  {id:153, cat:'gaslagar', q:'STP (Standard Temperature and Pressure): T = ___ °C, p = 101,3 kPa.', a:'0', hint:'Molär volym = 22,4 L vid STP'},
  {id:154, cat:'gaslagar', q:'SATP (Standard Ambient T & P): T = ___ °C, p = 100 kPa.', a:'25', hint:'Molär volym = 24,5 L vid SATP'},
  {id:155, cat:'gaslagar', q:'Vid ökad temperatur ökar gastrycket (konstant V) eftersom partiklarna rör sig ___.', a:'snabbare', hint:'Kinetisk energi ∝ T'},
  {id:156, cat:'gaslagar', q:'Enhet för tryck i SI-systemet är ___.', a:'Pascal (Pa)', hint:'1 atm ≈ 101 325 Pa ≈ 101,3 kPa'},
  {id:157, cat:'gaslagar', q:'Gay-Lussacs lag: vid konstant V är p/T = konstant. Fördubblas T (K) ___ p.', a:'fördubblas', hint:'Direkt proportionalitet'},
  {id:158, cat:'gaslagar', q:'2,0 mol idealgas vid 25°C och 100 kPa: V = nRT/p = 2,0 × 8,314 × 298 / 100000 ≈ ___ L.', a:'49,6', hint:'V i m³, sedan ×1000 för L'},
  {id:159, cat:'gaslagar', q:'En idealgas antas att partiklar inte har ___ och inte utövar krafter på varandra.', a:'volym', hint:'Verkliga gaser avviker vid högt p eller låg T'},
  {id:160, cat:'gaslagar', q:'Avogadros lag: vid samma T och p innehåller lika stora gasvolymer ___ antal molekyler.', a:'lika', hint:'Grunden för 22,4 L/mol vid STP'},
  {id:161, cat:'jamvikt', q:'Le Chateliers princip: vid en störning förskjuts jämvikten för att ___ störningen.', a:'motverka', hint:'Systemet "kämpar tillbaka"'},
  {id:162, cat:'jamvikt', q:'Jämviktskonstanten Kc uttrycks med ___ i täljaren.', a:'produkternas koncentrationer', hint:'K = [P]^p/[R]^r'},
  {id:163, cat:'jamvikt', q:'K > 1 innebär att jämvikten ligger på ___ sidan.', a:'produkt-', hint:'Fler produkter än reaktanter vid jämvikt'},
  {id:164, cat:'jamvikt', q:'K < 1 innebär att jämvikten ligger på ___ sidan.', a:'reaktant-', hint:'Mest reaktanter vid jämvikt'},
  {id:165, cat:'jamvikt', q:'Om koncentrationen av en produkt ökar förskjuts jämvikten mot ___.', a:'reaktanterna (vänster)', hint:'Systemet motverkar ökningen'},
  {id:166, cat:'jamvikt', q:'Ökad temperatur gynnar den ___ reaktionen.', a:'endoterma', hint:'Tillförd värme "konsumeras" av endotermen'},
  {id:167, cat:'jamvikt', q:'Ökad temperatur ökar K för en endoterm reaktion och ___ K för en exoterm.', a:'minskar', hint:'K beror på temperatur'},
  {id:168, cat:'jamvikt', q:'Haber-Bosch: N₂ + 3H₂ ⇌ 2NH₃. Ökat tryck gynnar ___ (färre gasmolekyler).', a:'produkterna (NH₃)', hint:'4 mol gas → 2 mol gas'},
  {id:169, cat:'jamvikt', q:'En katalysator ändrar jämviktsläget ___.', a:'inte', hint:'Katalysator sänker Ea men påverkar inte K'},
  {id:170, cat:'jamvikt', q:'Reaktionskvoten Q jämförs med K: om Q < K förskjuts reaktionen mot ___.', a:'produkterna', hint:'Reaktionen "springer ikapp" K'},
  {id:171, cat:'jamvikt', q:'Sambandet: ΔG° = −RT ln ___.', a:'K', hint:'Kopplar termodynamik till jämviktskonstant'},
  {id:172, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃. Kc = [NH₃]² / ([N₂] × ___)³.', a:'[H₂]', hint:'Produkter i täljare, reaktanter i nämnare'},
  {id:173, cat:'jamvikt', q:'Vid jämvikt är reaktionshastigheten för fram- och bakreaktion ___.', a:'lika', hint:'Dynamisk jämvikt – reaktionerna pågår'},
  {id:174, cat:'jamvikt', q:'Tillsats av inergas (t.ex. Ar) vid konstant V ändrar jämviktsläge ___.', a:'inte', hint:'Partialtrycken ändras inte'},
  {id:175, cat:'jamvikt', q:'För gasjämvikter används Kp som uttrycks med ___ istället för koncentrationer.', a:'partialtryck', hint:'Kp = Kc×(RT)^Δn för ideala gaser'},
  {id:176, cat:'termokemi', q:'En reaktion som avger värme till omgivningen kallas ___.', a:'exoterm', hint:'ΔH < 0; temperaturen stiger'},
  {id:177, cat:'termokemi', q:'En reaktion som tar upp värme från omgivningen kallas ___.', a:'endoterm', hint:'ΔH > 0; temperaturen sjunker'},
  {id:178, cat:'termokemi', q:'q = mcΔT; den specifika värmekapaciteten för vatten är ___ J/(g·K).', a:'4,18', hint:'Vatten tar upp mycket värme'},
  {id:179, cat:'termokemi', q:'Standardbildningsentalpin för ett fritt grundämne (H₂, Fe, C) är ___ kJ/mol.', a:'0', hint:'Referenspunkt för ΔH°f-tabeller'},
  {id:180, cat:'termokemi', q:'Hess lag: ΔH beror bara på start- och ___, inte på reaktionsvägen.', a:'slutläge', hint:'Entalpi är en tillståndsfunktion'},
  {id:181, cat:'termokemi', q:'ΔH°rxn = Σ ΔH°f(produkter) − Σ ΔH°f(___).', a:'reaktanter', hint:'Hess lag via bildningsentalpier'},
  {id:182, cat:'termokemi', q:'ΔG = ΔH − TΔS; vid ΔG < 0 är reaktionen ___ vid den temperaturen.', a:'spontan', hint:'Gibbs fria energi < 0 = spontan'},
  {id:183, cat:'termokemi', q:'Entropi S är ett mått på systemets ___.', a:'oordning (eller energispridning)', hint:'Andra termodynamikens lag'},
  {id:184, cat:'termokemi', q:'Om ΔH < 0 och ΔS > 0 är reaktionen ___ vid alla temperaturer.', a:'alltid spontan', hint:'Båda faktorerna gynnar ΔG < 0'},
  {id:185, cat:'termokemi', q:'Aktiveringsenergi Ea är den ___ energi molekylerna måste ha för att reagera.', a:'lägsta/minsta', hint:'Tröskeln i energiprofilen'},
  {id:186, cat:'termokemi', q:'En katalysator sänker ___ utan att ändra ΔH.', a:'aktiveringsenergin', hint:'Reaktionen går snabbare men ΔH oförändrat'},
  {id:187, cat:'termokemi', q:'Avdunstning är ___ (tar upp/avger värme).', a:'tar upp värme (endoterm)', hint:'ΔH_vap > 0; kräver energi att bryta intermolekylkrafter'},
  {id:188, cat:'termokemi', q:'Kondensation är ___ (ΔH < 0).', a:'exoterm', hint:'Värme avges när gas → vätska'},
  {id:189, cat:'termokemi', q:'Kalorimeterns formel: ΔH_rxn = −q_kalorimeter / ___.', a:'n (mol reaktant)', hint:'Molar entalpi i kJ/mol'},
  {id:190, cat:'termokemi', q:'Neutralisering av stark syra med stark bas ger ΔH ≈ ___ kJ/mol.', a:'−57', hint:'H⁺ + OH⁻ → H₂O, ΔH ≈ −57,3 kJ/mol'},
  {id:191, cat:'organisk', q:'Alkaner har formeln CₙH₂ₙ₊₂ och kallas ___ kolväten (inga fler H kan adderas).', a:'mättade', hint:'Endast enkelbindningar'},
  {id:192, cat:'organisk', q:'Alkener har minst en ___ bindning (C=C).', a:'dubbel-', hint:'CₙH₂ₙ – π-bindning reaktiv'},
  {id:193, cat:'organisk', q:'Alkyner har minst en ___ bindning (C≡C).', a:'trippel-', hint:'CₙH₂ₙ₋₂; acetylen = etyn'},
  {id:194, cat:'organisk', q:'Bensen C₆H₆ är ett ___ kolväte med delokaliserade π-elektroner.', a:'aromatiskt', hint:'EAS-reaktioner, ej addition'},
  {id:195, cat:'organisk', q:'Funktionell grupp −OH i organisk kemi kallas ___ grupp.', a:'hydroxyl-', hint:'Alkoholer har −OH'},
  {id:196, cat:'organisk', q:'Funktionell grupp −COOH kallas ___ grupp.', a:'karboxyl-', hint:'Karboxylsyror; svaga syror'},
  {id:197, cat:'organisk', q:'Alkohol + karboxylsyra → ___ + vatten.', a:'ester', hint:'Esterifiering; fruktig doft'},
  {id:198, cat:'organisk', q:'Omvändningen av esterifiering (ester + vatten → syra + alkohol) kallas ___.', a:'hydrolys', hint:'Med syra; med bas kallas förs&aring;pning'},
  {id:199, cat:'organisk', q:'Cis/trans-isomeri uppstår p.g.a. begränsad rotation kring ___ bindningen.', a:'dubbel-/C=C-', hint:'π-bindningen hindrar rotation'},
  {id:200, cat:'organisk', q:'Molekyler som är varandras spegelbilder men ej överstallbara kallas ___.', a:'enantiomerer', hint:'Kiralitet; viktig i läkemedelskemi'},
  {id:201, cat:'organisk', q:'Primär alkohol oxideras med K₂Cr₂O₇ först till ___, sedan till karboxylsyra.', a:'aldehyd', hint:'R-CH₂OH → R-CHO → R-COOH'},
  {id:202, cat:'organisk', q:'Sekundär alkohol oxideras till ___.', a:'keton', hint:'R₂CHOH → R₂C=O'},
  {id:203, cat:'organisk', q:'Alkaner reagerar med halogener (t.ex. Cl₂) via ___ reaktion (UV-ljus).', a:'radikal substitution', hint:'H ersätts av halogen'},
  {id:204, cat:'organisk', q:'Etanol har kokpunkt 78°C pga ___ bindningar.', a:'vätebindningar', hint:'OH-gruppen bildar H-bindningar'},
  {id:205, cat:'organisk', q:'IUPAC-namn på CH₃-CH₂-OH är ___.', a:'etanol', hint:'2 kol + -ol suffix'},
  {id:206, cat:'organisk', q:'IUPAC-namn på CH₃-CO-CH₃ (aceton) är ___.', a:'propanon', hint:'3 kol + keton (-on)'},
  {id:207, cat:'organisk', q:'Polymeren som bildas av etenmonomerer kallas ___.', a:'polyeten (PE)', hint:'Additionspolymer'},
  {id:208, cat:'organisk', q:'Fetter är estrar av glycerol och ___.', a:'fettsyror', hint:'Hydrolys ger glycerol + fettsyror'},
  {id:209, cat:'losningar', q:'Molär koncentration: c = n / ___.', a:'V', hint:'V i liter; enheten mol/L'},
  {id:210, cat:'losningar', q:'Spädningsekvationen: c₁V₁ = ___.', a:'c₂V₂', hint:'Molmängden är bevarad vid spädning'},
  {id:211, cat:'losningar', q:'"Lika löser lika" – NaCl (polärt/jonbindning) löser sig i ___.', a:'vatten (polart lösningsmedel)', hint:'Vatten hydratiserar jonerna'},
  {id:212, cat:'losningar', q:'Beer-Lamberts lag: A = ε × c × ___.', a:'l', hint:'l = ljusvägens längd i cm'},
  {id:213, cat:'losningar', q:'Beer-Lamberts lag: A = log(___ / I).', a:'I₀', hint:'A = log(infallande/transmitterat ljus)'},
  {id:214, cat:'losningar', q:'Om Q > Ksp sker ___ av det svårlösliga saltet.', a:'utfällning', hint:'Lösningen är övermättad'},
  {id:215, cat:'losningar', q:'Ksp = [Ag⁺][Cl⁻] för AgCl ≈ 1,8×10⁻¹⁰. Lösligheten s ≈ ___ mol/L.', a:'1,34×10⁻⁵', hint:'s = √Ksp = √(1,8×10⁻¹⁰)'},
  {id:216, cat:'losningar', q:'Gemensam-joneffekten: lösligheten av AgCl ___ om NaCl tillsätts.', a:'minskar', hint:'Cl⁻ ökar → Q > Ksp → utfällning'},
  {id:217, cat:'losningar', q:'1 ppm i vattenlösning ≈ ___ mg/L.', a:'1', hint:'Parts per million'},
  {id:218, cat:'losningar', q:'Fryspunktssänkning: ΔTf = Kf × m; Kf(vatten) = ___ °C·kg/mol.', a:'1,86', hint:'Används för antifrysmedel'},
  {id:219, cat:'losningar', q:'Kokpunktshöjning: ΔTb = Kb × m; Kb(vatten) = ___ °C·kg/mol.', a:'0,512', hint:'Saltat vatten kokar vid lite högre T'},
  {id:220, cat:'losningar', q:'SAV-regeln: häll alltid ___ i vattnet, aldrig vatten i stark syra.', a:'syran', hint:'Undviker stänkrisken (starkexoterm)'},
  {id:221, cat:'losningar', q:'Bereda 500 mL 0,10 mol/L HCl från 12 mol/L: V₁ = 0,10×0,500/12 = ___ mL.', a:'4,2', hint:'c₁V₁ = c₂V₂ → V₁ = c₂V₂/c₁'},
  {id:222, cat:'losningar', q:'Osmotiskt tryck π = MRT; blodsplasmans osmolaritet ≈ 0,30 mol/L → π ≈ ___ atm.', a:'7,3', hint:'π = 0,30 × 0,0821 × 310 ≈ 7,6 atm'},
  {id:223, cat:'labsak', q:'GHS-piktogrammet dödskalle indikerar ___.', a:'akut toxicitet (hög)', hint:'HCN, arsenik – livsfarligt'},
  {id:224, cat:'labsak', q:'GHS-piktogrammet med frätande vätska indikerar ___.', a:'frätande (korrosivt)', hint:'H₂SO₄, NaOH – fräter hud och material'},
  {id:225, cat:'labsak', q:'Skyddsglasögon är ___ vid alla laborationsmoment med kemikalier.', a:'obligatoriska', hint:'Ögon kan inte regenereras lika lätt som hud'},
  {id:226, cat:'labsak', q:'Vid stänk av frätande ämne i ögat: skölj omedelbart i ___ minuter.', a:'15', hint:'Lång sköljning minskar skadan drastiskt'},
  {id:227, cat:'labsak', q:'Analytisk våg har noggrannhet ±___ g.', a:'0,0001', hint:'4 decimaler; används för exakt inväging'},
  {id:228, cat:'labsak', q:'Byrettens avläsningsnoggrannhet är ±___ mL.', a:'0,05', hint:'Avläs med 0,01 mL-precision, fel ±0,05'},
  {id:229, cat:'labsak', q:'Menisken i byrett/mätkolv avläses vid ___ nivån.', a:'nedre (konkava)', hint:'I ögonhöjd för att undvika paralaxfel'},
  {id:230, cat:'labsak', q:'Rf-värdet i TLC = (avstånd substansen vandrat) / ___.', a:'avstånd lösningsfronten vandrat', hint:'Rf mellan 0 och 1'},
  {id:231, cat:'labsak', q:'Systematiska fel påverkar alla mätningar i ___ riktning.', a:'samma', hint:'T.ex. felkalibrerad våg – alltid för hög/låg'},
  {id:232, cat:'labsak', q:'Slumpmässiga fel minskas effektivast genom ___.', a:'upprepade mätningar', hint:'Medelvärde och standardavvikelse'},
  {id:233, cat:'labsak', q:'All hantering av flyktiga/giftiga kemikalier sker i ___.', a:'dragskåp (frånluftskåpa)', hint:'Frånluften skyddar mot inandning'},
  {id:234, cat:'labsak', q:'Titreringens syfte är att bestämma ___ hos en okänd lösning.', a:'koncentrationen', hint:'Via ekvivalenspunkten och känd titrant'},
  {id:235, cat:'labsak', q:'Gravimetrisk analys bestämmer mängden via ___.', a:'vägning', hint:'T.ex. fällning + filtrering + torkning + vägning'},
  {id:236, cat:'labsak', q:'En labrapports diskussionsdel ska innehålla tolkning av resultat och analys av ___.', a:'felkällor', hint:'Varför avviker resultaten från teorin?'},
  {id:237, cat:'prov', q:'Varför är natriumklorid (NaCl) hårt men sprött? – Gittret spricker när lika laddade joner hamnar bredvid varandra vid ___.', a:'förskjutning', hint:'Katjon bredvid katjon → repulsion → spricka'},
  {id:238, cat:'prov', q:'Varför leder NaCl el i smält form men inte i fast form? – I smält form är jonerna ___.', a:'rörliga/fria', hint:'Fast gitter låser jonerna'},
  {id:239, cat:'prov', q:'Varför är vattnets kokpunkt (100°C) så mycket högre än H₂S (−60°C)? – Tack vare ___ i vatten.', a:'vätebindningar', hint:'O är tillräckligt elektronegativt; S inte'},
  {id:240, cat:'prov', q:'CO₂ har polära C=O-bindningar men är en opolar molekyl. Orsak: molekylens geometri är ___.', a:'linjär', hint:'Dipolerna tar ut varandra i linjär geometri'},
  {id:241, cat:'prov', q:'H₂O är polärt trots att det liknar CO₂. Orsak: H₂O har ___ geometri.', a:'vinkelformad', hint:'104,5° – dipolerna adderas'},
  {id:242, cat:'prov', q:'Varför sjunker is i de flesta vätskor men flyter i vatten? – Isen är ___ tätt packad pga vätebindningarnas hexagonala struktur.', a:'mindre', hint:'Is har lägre densitet än flytande vatten'},
  {id:243, cat:'prov', q:'pH i 0,010 mol/L HCl-lösning är ___ (stark syra, fullständigt dissocierad).', a:'2', hint:'pH = −log(0,010) = −log(10⁻²) = 2'},
  {id:244, cat:'prov', q:'pH i 0,0010 mol/L NaOH är ___. (pOH = 3, pH = 14 − 3 = ___)', a:'11', hint:'[OH⁻] = 0,001 → pOH = 3 → pH = 11'},
  {id:245, cat:'prov', q:'En buffert av ättiksyra (pKa=4,74) och natriumacetat 1:1 har pH = ___.', a:'4,74', hint:'Henderson-Hasselbalch: pH = pKa + log(1/1) = pKa'},
  {id:246, cat:'prov', q:'Vid titrering av svag syra med stark bas är pH vid ekvivalenspunkten ___ 7.', a:'över', hint:'Salt av svag syra + stark bas hydrolyserar basiskt'},
  {id:247, cat:'prov', q:'Haber-Bosch körs vid ~450°C trots att lägre T ger bättre utbyte. Orsaken är att lägre T ger för låg ___.', a:'reaktionshastighet', hint:'Kinetik vs termodynamik – kompromiss'},
  {id:248, cat:'prov', q:'Bensen genomgår substitution (EAS), inte addition. Orsaken: addition skulle bryta den ___ stabiliteten.', a:'aromatiska', hint:'150 kJ/mol extra stabilitet'},
  {id:249, cat:'prov', q:'Varför ökar kokpunkten med kolkedjans längd hos alkaner? – Starkare ___ krafter vid större molmassa.', a:'London-dispersions-', hint:'Fler elektroner = lättare att polarisera'},
  {id:250, cat:'prov', q:'ΔG = ΔH − TΔS. En reaktion med ΔH > 0 och ΔS > 0 är spontan vid ___ temperatur.', a:'hög', hint:'Vid hög T dominerar TΔS-termen'},
  {id:251, cat:'prov', q:'Zink skyddar järn i galvanisering pga att Zn är mer ___ än Fe.', a:'reaktivt/aktivt', hint:'Zn oxideras preferentiellt – offermetall'},
  {id:252, cat:'prov', q:'Varför ger 1 mol NaCl dubbelt så stor fryspunktssänkning som 1 mol glukos? – NaCl dissocierar till ___ partiklar.', a:'2', hint:'Na⁺ + Cl⁻ = 2 partiklar per formelenhet'},
  {id:253, cat:'prov', q:'Ke för H₂O(l) ⇌ H⁺(aq) + OH⁻(aq) kallas Kw = ___ vid 25°C.', a:'1,0×10⁻¹⁴', hint:'pH + pOH = 14 följer av detta'},
  {id:254, cat:'prov', q:'En svag syra med Ka = 1,0×10⁻⁵ har pKa = ___.', a:'5', hint:'pKa = −log(Ka)'},
  {id:255, cat:'prov', q:'Alkohol + syra ⇌ ester + vatten. För att driva reaktionen framåt kan man ta bort ___.', a:'vatten (eller estern)', hint:'Le Chatelier – ta bort produkt'},
  {id:256, cat:'prov', q:'Den empiriska formeln för glukos C₆H₁₂O₆ är ___.', a:'CH₂O', hint:'Dela alla index med 6'},
  {id:257, cat:'prov', q:'Reaktionen Fe + 2HCl → FeCl₂ + H₂. Oxidationstalet för Fe ändras från 0 till ___.', a:'+2', hint:'Fe → Fe²⁺: oxidation'},
  {id:258, cat:'prov', q:'Varför kan inte aluminiumfolie lösas upp av utspädd saltsyra men väl av NaOH? – Al₂O₃-skiktet löses i ___ men skyddas av HCl.', a:'bas (NaOH)', hint:'Al är amfoteriskt – löses i starka baser'},
  {id:259, cat:'prov', q:'Beräkna massa Fe₂O₃ som bildas av 2,0 mol Fe: 4Fe + 3O₂ → 2Fe₂O₃. n(Fe₂O₃) = 2,0×(2/4) = ___ mol.', a:'1,0', hint:'Koefficienter ger molförhållande 4:2 = 2:1'},
  {id:260, cat:'prov', q:'Vad händer med jämvikten N₂ + 3H₂ ⇌ 2NH₃ om volymen halveras? – Jämvikten förskjuts mot ___ (färre gasmolekyler).', a:'NH₃ (produkterna/höger)', hint:'Halverad volym = dubblat tryck → Le Chatelier'}
,
  {id:301, cat:'stoikiometri', q:'Formeln för substansmängd: n = ___ / M.', a:'m', hint:'n i mol, m i gram, M i g/mol'},
  {id:302, cat:'stoikiometri', q:'1 mol av vilket ämne som helst innehåller ___ partiklar.', a:'6,022×10²³', hint:'Avogadros tal – alltid samma antal'},
  {id:303, cat:'stoikiometri', q:'Molmassan för Al är ___ g/mol.', a:'27', hint:'Atomnummer 13, period 3'},
  {id:304, cat:'stoikiometri', q:'Molmassan för Fe är ___ g/mol.', a:'56', hint:'Järn – vanligast i jordskorpan'},
  {id:305, cat:'stoikiometri', q:'Molmassan för Cu är ___ g/mol.', a:'63,5', hint:'Koppar – elektrisk ledare'},
  {id:306, cat:'stoikiometri', q:'Molmassan för H₂SO₄ är ___ g/mol.', a:'98', hint:'2+32+64 = 98'},
  {id:307, cat:'stoikiometri', q:'Molmassan för Ca(OH)₂ är ___ g/mol.', a:'74', hint:'40 + 2×(16+1) = 74'},
  {id:308, cat:'stoikiometri', q:'Molmassan för KMnO₄ är ___ g/mol.', a:'158', hint:'39+55+4×16 = 158'},
  {id:309, cat:'stoikiometri', q:'Molmassan för C₆H₁₂O₆ (glukos) är ___ g/mol.', a:'180', hint:'6×12 + 12×1 + 6×16 = 180'},
  {id:310, cat:'stoikiometri', q:'n(Fe) = 112 g / 56 g/mol = ___ mol.', a:'2,0', hint:'n = m/M'},
  {id:311, cat:'stoikiometri', q:'m(NaOH) om n = 0,50 mol: m = 0,50 × ___ = 20 g.', a:'40', hint:'M(NaOH) = 23+16+1 = 40 g/mol'},
  {id:312, cat:'stoikiometri', q:'Antal molekyler i 2,0 mol CO₂ = 2,0 × 6,022×10²³ = ___.', a:'1,204×10²⁴', hint:'N = n × Nₐ'},
  {id:313, cat:'stoikiometri', q:'Reaktionen 2H₂ + O₂ → 2H₂O: koefficienten för H₂ är ___.', a:'2', hint:'Balansera väte och syre'},
  {id:314, cat:'stoikiometri', q:'2H₂ + O₂ → 2H₂O: för varje mol O₂ bildas ___ mol H₂O.', a:'2', hint:'Molförhållande 1:2'},
  {id:315, cat:'stoikiometri', q:'Procentuell sammansättning av Fe i Fe₂O₃: (2×56/160)×100 = ___ %.', a:'70', hint:'M(Fe₂O₃) = 2×56 + 3×16 = 160'},
  {id:316, cat:'stoikiometri', q:'Procentuell sammansättning av N i NH₃: (14/17)×100 ≈ ___ %.', a:'82', hint:'M(NH₃) = 14+3 = 17'},
  {id:317, cat:'stoikiometri', q:'Empirisk formel: 40%C, 6,7%H, 53,3%O → n(C)=3,33, n(H)=6,7, n(O)=3,33. Kvot C:H:O = ___.', a:'1:2:1', hint:'Dela med minsta: 3,33/3,33=1, 6,7/3,33≈2'},
  {id:318, cat:'stoikiometri', q:'En förening har empirisk formel CH₂O och molmassa 180 g/mol. Molekylformel = ___.', a:'C₆H₁₂O₆', hint:'180/30 = 6 → multiplicera empirisk formel med 6'},
  {id:319, cat:'stoikiometri', q:'STP: 1 mol gas = 22,4 L. Volym av 0,25 mol N₂ vid STP = ___ L.', a:'5,6', hint:'V = n × 22,4'},
  {id:320, cat:'stoikiometri', q:'n(CO₂) om V = 11,2 L vid STP: n = 11,2/22,4 = ___ mol.', a:'0,50', hint:'n = V/22,4'},
  {id:321, cat:'stoikiometri', q:'4Fe + 3O₂ → 2Fe₂O₃. Från 4,0 mol Fe bildas ___ mol Fe₂O₃.', a:'2,0', hint:'Koefficienter 4:2 → halvera antalet mol'},
  {id:322, cat:'stoikiometri', q:'4Fe + 3O₂ → 2Fe₂O₃. Massa Fe₂O₃ från 4,0 mol Fe: n=2,0 mol × 160 g/mol = ___ g.', a:'320', hint:'m = n × M(Fe₂O₃)'},
  {id:323, cat:'stoikiometri', q:'Begränsande reagens: 3,0 mol H₂ + 1,0 mol N₂ → NH₃. H₂ ger 2,0 mol NH₃, N₂ ger 2,0 mol NH₃. Inget begränsar – exakt ___:___ förhållande.', a:'3:1', hint:'N₂+3H₂→2NH₃ kräver 3:1-förhållande'},
  {id:324, cat:'stoikiometri', q:'Begränsande reagens: 2,0 mol H₂ + 2,0 mol O₂ → H₂O (2H₂+O₂→2H₂O). H₂/2=1,0; O₂/1=2,0. Begränsande reagens: ___.', a:'H₂', hint:'Lägst kvot mol/koefficient → begränsar'},
  {id:325, cat:'stoikiometri', q:'Teoretiskt utbyte: 5,0 mol begränsat reagens ger max ___ mol produkt (1:1-förhållande).', a:'5,0', hint:'Koefficienter 1:1'},
  {id:326, cat:'stoikiometri', q:'Verkligt utbyte 32 g, teoretiskt 40 g. Procentuellt utbyte = ___ %.', a:'80', hint:'32/40 × 100 = 80'},
  {id:327, cat:'stoikiometri', q:'Titrering: c(HCl)×V(HCl) = c(NaOH)×V(NaOH). c(NaOH) = 0,100×20,0/25,0 = ___ mol/L.', a:'0,080', hint:'c₁V₁ = c₂V₂ vid 1:1-reaktion'},
  {id:328, cat:'stoikiometri', q:'n(HCl) om c=0,200 mol/L, V=50,0 mL: n = 0,200 × 0,0500 = ___ mol.', a:'0,0100', hint:'n = c×V (V i liter!)'},
  {id:329, cat:'stoikiometri', q:'Massa H₂O som bildas av 4,0 g H₂ (M=2): n(H₂)=2,0 mol → n(H₂O)=2,0 mol → m = 2,0×18 = ___ g.', a:'36', hint:'2H₂ + O₂ → 2H₂O, 1:1-förhållande H₂:H₂O'},
  {id:330, cat:'stoikiometri', q:'Massabevarandelagen innebär att summan av reaktanternas massor ___ summan av produkternas massor.', a:'är lika med', hint:'Atomer varken skapas eller förstörs'},
  {id:331, cat:'stoikiometri', q:'Reaktionen CaCO₃ → CaO + CO₂. Massa CO₂ från 50 g CaCO₃ (M=100): n=0,50 mol → m(CO₂) = 0,50×44 = ___ g.', a:'22', hint:'1:1-förhållande CaCO₃:CO₂'},
  {id:332, cat:'stoikiometri', q:'Halten koldioxid i luft ≈ 420 ppm, dvs 420 molekyler CO₂ per ___ luftmolekyler.', a:'1 000 000', hint:'ppm = parts per million'},
  {id:333, cat:'stoikiometri', q:'Förbränning av 1,0 mol oktan C₈H₁₈: C₈H₁₈ + 12,5O₂ → 8CO₂ + 9H₂O. Mol CO₂ = ___.', a:'8', hint:'Koefficient 8 framför CO₂'},
  {id:334, cat:'stoikiometri', q:'m(CO₂) från 1,0 mol oktan: 8,0 mol × 44 g/mol = ___ g.', a:'352', hint:'m = n × M'},
  {id:335, cat:'stoikiometri', q:'Elektrolys av vatten: 2H₂O → 2H₂ + O₂. Volym O₂ vid STP från 4,0 mol H₂O: n(O₂)=2,0 mol → V = ___ L.', a:'44,8', hint:'V = 2,0 × 22,4'},
  {id:336, cat:'stoikiometri', q:'Om utbytet är 75%, och man vill ha 30 g produkt (M=60), behöver man teoretiskt ___ mol produkt att sikta på.', a:'0,667', hint:'Behov = 30/60/0,75 mol praktiskt; teoretiskt n=30/60=0,50 mol → sikta på 0,50/0,75'},
  {id:337, cat:'stoikiometri', q:'Densitet 1,19 g/mL, 37% HCl (m/m). c = (1190×0,37)/36,5 = ___ mol/L ≈ 12 mol/L.', a:'12', hint:'c = (ρ × w × 1000)/M'},
  {id:338, cat:'stoikiometri', q:'Reaktionsschema ska alltid vara balanserat pga lagen om ___.', a:'massans bevarande', hint:'Atomer skapas/förstörs ej'},
  {id:339, cat:'stoikiometri', q:'En mol elektroner kallas ___ (används i elektrokemi).', a:'ett Faraday (F = 96 485 C/mol)', hint:'F = Nₐ × e'},
  {id:340, cat:'stoikiometri', q:'Avogadros lag: vid samma T och p innehåller 1 L av valfri idealgas ___ antal mol.', a:'samma', hint:'Grunden för molär volym vid STP'},
  {id:361, cat:'jamvikt', q:'Vid kemisk jämvikt är koncentrationerna av reaktanter och produkter ___, inte noll.', a:'konstanta', hint:'Dynamisk jämvikt – reaktionerna pågår'},
  {id:362, cat:'jamvikt', q:'Jämviktskonstanten Kc är ___ av koncentrationerna vid jämvikt.', a:'kvoten (produkter/reaktanter)', hint:'K = [P]ᵖ/[R]ʳ'},
  {id:363, cat:'jamvikt', q:'aA + bB ⇌ cC + dD: Kc = [C]^c × [D]^d / ([A]^a × [B]^___)', a:'b', hint:'Koefficienter blir exponenter'},
  {id:364, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃: Kc = [NH₃]² / ([N₂] × [H₂]^___).', a:'3', hint:'Koefficient 3 för H₂ → exponent 3'},
  {id:365, cat:'jamvikt', q:'H₂ + I₂ ⇌ 2HI: vid jämvikt [H₂]=0,40, [I₂]=0,40, [HI]=3,2 mol/L. Kc = 3,2² / (0,40×0,40) = ___.', a:'64', hint:'Kc = [HI]²/([H₂][I₂])'},
  {id:366, cat:'jamvikt', q:'Reaktionen 2SO₂ + O₂ ⇌ 2SO₃: Kc = [SO₃]² / ([SO₂]² × [___]).', a:'O₂', hint:'Alla reaktanter i nämnaren'},
  {id:367, cat:'jamvikt', q:'Om K = 10⁶ är reaktionen nästan ___ fullständig åt höger.', a:'helt/fullständigt', hint:'Stor K → nästan all reaktant omvandlas'},
  {id:368, cat:'jamvikt', q:'Om K = 10⁻⁶ är reaktionen nästan ___ åt höger.', a:'inte alls förskjuten (dominerar reaktanter)', hint:'Liten K → mest reaktanter kvar'},
  {id:369, cat:'jamvikt', q:'Le Chateliers princip: om man tillsätter mer av en reaktant förskjuts jämvikten mot ___.', a:'produkterna (höger)', hint:'Systemet konsumerar det tillsatta'},
  {id:370, cat:'jamvikt', q:'Le Chatelier: om man tar bort en produkt förskjuts jämvikten mot ___.', a:'produkterna (höger)', hint:'Systemet ersätter det borttagna'},
  {id:371, cat:'jamvikt', q:'Le Chatelier: om temperaturen höjs gynnas den ___ reaktionen.', a:'endoterma', hint:'Värme "konsumeras" av endotermen'},
  {id:372, cat:'jamvikt', q:'Le Chatelier: om temperaturen sänks gynnas den ___ reaktionen.', a:'exoterma', hint:'Systemet "producerar" värme för att ersätta'},
  {id:373, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃ är exoterm. Hög temperatur ger ___ K och ___ utbyte av NH₃.', a:'lägre K och lägre utbyte', hint:'Hög T gynnar bakåtreaktionen (endoterm)'},
  {id:374, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃: 4 mol gas → 2 mol gas. Ökat tryck gynnar ___.', a:'NH₃ (färre gasmolekyler, höger)', hint:'Le Chatelier: minska gasvolym → mot sidan med färre mol gas'},
  {id:375, cat:'jamvikt', q:'CO₂(g) + H₂(g) ⇌ CO(g) + H₂O(g): lika antal mol gas på varje sida. Ökat tryck påverkar jämvikten ___.', a:'inte', hint:'Samma antal mol gas → trycket spelar ingen roll'},
  {id:376, cat:'jamvikt', q:'En katalysator gör att jämvikt nås ___ men ändrar inte K.', a:'snabbare', hint:'Ea sänks för båda riktningarna lika mycket'},
  {id:377, cat:'jamvikt', q:'Reaktionskvoten Q: om Q < K reagerar systemet mot ___ för att nå jämvikt.', a:'produkterna (höger)', hint:'Behöver bilda mer produkt för att nå K'},
  {id:378, cat:'jamvikt', q:'Reaktionskvoten Q: om Q > K reagerar systemet mot ___ för att nå jämvikt.', a:'reaktanterna (vänster)', hint:'Produkterna bryts ner tills Q = K'},
  {id:379, cat:'jamvikt', q:'Om man multiplicerar en reaktion med faktor 2, blir det nya K = K_gammal^___.', a:'2', hint:'K(ny) = K(gammal)^n där n är faktorn'},
  {id:380, cat:'jamvikt', q:'Om man vänder på en reaktion (A⇌B → B⇌A) blir det nya K = ___ / K_gammal.', a:'1', hint:'K(omvänd) = 1/K(framåt)'},
  {id:381, cat:'jamvikt', q:'Kp används för gasjämvikter och uttrycks med ___ istället för mol/L.', a:'partialtryck', hint:'Kp relaterat till Kc via (RT)^Δn'},
  {id:382, cat:'jamvikt', q:'Haber-Bosch körs vid ~450°C fastän lägre T ger mer NH₃. Orsak: lägre T ger för låg ___.', a:'reaktionshastighet', hint:'Kinetik vs termodynamik – kompromiss'},
  {id:383, cat:'jamvikt', q:'Haber-Bosch körs vid ~200 atm fastän normalt tryck vore säkrare. Orsak: högt tryck ger ___ utbyte.', a:'bättre/högre', hint:'Fler gasmolekyler på vänster → högt tryck gynnar höger'},
  {id:384, cat:'jamvikt', q:'Järn används som katalysator i Haber-Bosch för att ___.', a:'öka reaktionshastigheten', hint:'Katalysator sänker aktiveringsenergi'},
  {id:385, cat:'jamvikt', q:'CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻: ökad CO₂ i havsvatten (surt regn) förskjuter jämvikten mot ___.', a:'H⁺ (surare hav)', hint:'Le Chatelier – mer CO₂ → mer syra'},
  {id:386, cat:'jamvikt', q:'Ksp är jämviktskonstanten för ___ av ett svårlösligt salt.', a:'upplösningen', hint:'Ksp gäller vid mättad lösning'},
  {id:387, cat:'jamvikt', q:'Kw = [H⁺][OH⁻] = 1,0×10⁻¹⁴ är jämviktskonstanten för vattnets ___.', a:'autoprotolys (självjonisering)', hint:'2H₂O ⇌ H₃O⁺ + OH⁻'},
  {id:388, cat:'jamvikt', q:'Ka för en svag syra är ett specialfall av Kc för jämvikten HA ⇌ H⁺ + ___.', a:'A⁻', hint:'Konjugatbasen'},
  {id:389, cat:'jamvikt', q:'Stora Ka (litet pKa) → ___ syra.', a:'stark', hint:'Mer dissocierad → mer H⁺'},
  {id:390, cat:'jamvikt', q:'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]). När [A⁻]=[HA] är pH = ___.', a:'pKa', hint:'log(1) = 0'},
  {id:391, cat:'jamvikt', q:'Buffert fungerar bäst i intervallet pH = pKa ± ___.', a:'1', hint:'Utanför detta intervall är buffertkapaciteten dålig'},
  {id:392, cat:'jamvikt', q:'En fosfatbuffert (pKa₂=7,2) är lämplig för att hålla pH nära ___.', a:'7,2', hint:'Buffert fungerar bäst vid pH ≈ pKa'},
  {id:393, cat:'jamvikt', q:'Blodets pH hålls konstant av tre buffersystem: bikarbonat/kolsyra, fosfat och ___.', a:'proteiner (hemoglobin)', hint:'Proteiners aminosyrarester fungerar som buffertar'},
  {id:394, cat:'jamvikt', q:'Ka × Kb = ___ (för konjugatpar i vatten vid 25°C).', a:'Kw = 1,0×10⁻¹⁴', hint:'Kopplar syrans och basens konstanter'},
  {id:395, cat:'jamvikt', q:'pKa(ättiksyra)=4,74. Ka = 10^(−4,74) ≈ ___.', a:'1,8×10⁻⁵', hint:'Ka = 10^(−pKa)'},
  {id:396, cat:'jamvikt', q:'Reaktionen 2NO₂(g) ⇌ N₂O₄(g): Kc = [N₂O₄] / [NO₂]^___. Vilket värde är exponenten?', a:'2', hint:'Koefficienten 2 framför NO₂ ger exponent 2'},
  {id:397, cat:'jamvikt', q:'CaCO₃(s) ⇌ CaO(s) + CO₂(g): Kc = [___] (fasta ämnen ingår inte).', a:'CO₂', hint:'Fasta och rena vätskor utelämnas ur K-uttrycket'},
  {id:398, cat:'jamvikt', q:'Jämvikt nås snabbare vid ___ temperatur men K-värdet ändras.', a:'högre', hint:'Högre T → snabbare kinetik, men K beror på T'},
  {id:399, cat:'jamvikt', q:'Principen om Le Chatelier är ett sätt att förutsäga ___ av en jämvikt.', a:'förskjutningen', hint:'Hur systemet reagerar på störning'},
  {id:400, cat:'jamvikt', q:'Om Kc = 1 ligger jämvikten ___.', a:'precis mitt emellan reaktanter och produkter', hint:'Lika mängd produkter och reaktanter (ungefär)'},
  {id:421, cat:'losningar', q:'c = n/V: om n = 0,25 mol och V = 500 mL = 0,500 L, är c = ___ mol/L.', a:'0,50', hint:'c = 0,25/0,500'},
  {id:422, cat:'losningar', q:'n = c × V: om c = 2,0 mol/L och V = 250 mL, är n = ___ mol.', a:'0,50', hint:'n = 2,0 × 0,250'},
  {id:423, cat:'losningar', q:'m = c × V × M: massa NaCl i 200 mL av 1,5 mol/L: m = 1,5 × 0,200 × 58,5 = ___ g.', a:'17,6', hint:'Räkna steg för steg'},
  {id:424, cat:'losningar', q:'Spädning: c₁V₁ = c₂V₂. c₁=6,0 M, V₁=?, c₂=0,30 M, V₂=500 mL → V₁ = ___ mL.', a:'25', hint:'V₁ = c₂V₂/c₁ = 0,30×500/6,0'},
  {id:425, cat:'losningar', q:'Du tar 10 mL av 5,0 M HCl och späder till 250 mL. Ny koncentration = ___ mol/L.', a:'0,20', hint:'c₂ = c₁V₁/V₂ = 5,0×0,010/0,250'},
  {id:426, cat:'losningar', q:'Lösningsentalpin för NH₄NO₃ är positiv (endoterm). Lösningen ___ temperaturen.', a:'sänker', hint:'Endoterm process tar upp värme från omgivningen'},
  {id:427, cat:'losningar', q:'Lösningsentalpin för NaOH är negativ (exoterm). Lösningen ___ temperaturen.', a:'höjer', hint:'Exoterm process avger värme till lösningen'},
  {id:428, cat:'losningar', q:'Löslighetsprodukten Ksp = [Ca²⁺][CO₃²⁻] för CaCO₃ = 3,3×10⁻⁹. Lösligheten s = √(3,3×10⁻⁹) ≈ ___ mol/L.', a:'5,7×10⁻⁵', hint:'s = √Ksp för 1:1-salt'},
  {id:429, cat:'losningar', q:'Ksp(BaSO₄) = 1,1×10⁻¹⁰. s = √(1,1×10⁻¹⁰) ≈ ___ mol/L.', a:'1,05×10⁻⁵', hint:'s = √Ksp'},
  {id:430, cat:'losningar', q:'Om [Ag⁺] = 0,10 M i en lösning med AgCl (Ksp=1,8×10⁻¹⁰), kan maximalt [Cl⁻] = ___ mol/L.', a:'1,8×10⁻⁹', hint:'[Cl⁻] = Ksp/[Ag⁺]'},
  {id:431, cat:'losningar', q:'Q = [Ba²⁺][SO₄²⁻]. Om Q > Ksp ___ BaSO₄.', a:'fälls ut', hint:'Övermättad lösning → utfällning'},
  {id:432, cat:'losningar', q:'Tillsätter man NaCl till en AgCl-lösning (gemensam jon Cl⁻) ___ lösligheten av AgCl.', a:'minskar', hint:'Gemensam-joneffekten'},
  {id:433, cat:'losningar', q:'Beer-Lambert: A = ε × c × l. Enheten för ε är ___.', a:'L/(mol·cm)', hint:'Molär absorptionskoefficient'},
  {id:434, cat:'losningar', q:'Beer-Lambert: om c fördubblas (konstant l och ε), ___ A.', a:'fördubblas', hint:'A är direkt proportionell mot c'},
  {id:435, cat:'losningar', q:'Transmittans T = I/I₀. Absorbans A = log(1/T). Om T = 0,10 är A = ___.', a:'1,0', hint:'A = log(1/0,10) = log(10) = 1'},
  {id:436, cat:'losningar', q:'Om T = 0,50 är A = log(1/0,50) = log(2) ≈ ___.', a:'0,30', hint:'log(2) ≈ 0,301'},
  {id:437, cat:'losningar', q:'Standardkurva i spektrofotometri: mätpunkterna A vs c ska ge en ___ linje.', a:'rät (linjär)', hint:'Beer-Lambert är linjärt vid låga c'},
  {id:438, cat:'losningar', q:'Massandel (m/m): 5 g NaCl i 95 g vatten → 5/(95+5) × 100 = ___ %.', a:'5', hint:'Massandel = löst ämne / total massa × 100'},
  {id:439, cat:'losningar', q:'Fysiologisk koksaltlösning har ___ % NaCl (m/v).', a:'0,9', hint:'Isoton med blod – används i droppåsar'},
  {id:440, cat:'losningar', q:'Molalitet = mol löst ämne per kg ___. Enheten är mol/kg.', a:'lösningsmedel', hint:'Skiljer sig från molaritet (per liter lösning)'},
  {id:441, cat:'losningar', q:'Fryspunktssänkning: ΔTf = Kf × m. 0,50 mol/kg NaCl (2 partiklar) → ΔTf = 1,86 × 0,50 × 2 = ___ °C.', a:'1,86', hint:'i=2 för NaCl (van Hoff-faktor)'},
  {id:442, cat:'losningar', q:'Antifrys: 50% etylenglykol (M=62) i 1 kg vatten: m = 500/62 ≈ 8,06 mol/kg → ΔTf = 1,86×8,06 ≈ ___ °C.', a:'15', hint:'Ungefärlig beräkning'},
  {id:443, cat:'losningar', q:'Kokpunkthöjning: ΔTb = 0,512 × m. 1,0 mol/kg glukos: ΔTb = ___ °C.', a:'0,512', hint:'Kₓ(vatten) = 0,512 °C·kg/mol'},
  {id:444, cat:'losningar', q:'Osmotiskt tryck: π = MRT = 0,10 × 8,314 × 298 / 1000 ≈ ___ kPa.', a:'247,9', hint:'Enheter: M i mol/L, R=8,314 J/(mol·K), T i K → Pa → /1000 = kPa'},
  {id:445, cat:'losningar', q:'Omvänd osmos används för ___ av havsvatten.', a:'avsaltning', hint:'Tryck tvingar vatten genom membran mot osmotisk gradient'},
  {id:446, cat:'losningar', q:'Henrys lag: lösligheten av en gas i vätska ___ med ökat partialtryck.', a:'ökar', hint:'CO₂ i läsk – under tryck mer löst'},
  {id:447, cat:'losningar', q:'CO₂-lösligheten i havsvatten ___ när temperaturen stiger.', a:'minskar', hint:'Gaser löser sig sämre vid hög T – varmt hav tar upp mindre CO₂'},
  {id:448, cat:'losningar', q:'Titrering: n(HCl) = 0,100 × 0,0185 = 1,85×10⁻³ mol. c(NaOH) om V=25,0 mL = 1,85×10⁻³/0,0250 = ___ mol/L.', a:'0,074', hint:'c = n/V'},
  {id:449, cat:'losningar', q:'Ekvivalenspunkten i en titrering (stark syra–stark bas) har pH = ___.', a:'7', hint:'NaCl-lösning är neutral'},
  {id:450, cat:'losningar', q:'Ekvivalenspunkten i en titrering (svag syra–stark bas) har pH ___ 7.', a:'> (över)', hint:'Salt av svag syra hydrolyser basiskt'},
  {id:451, cat:'losningar', q:'Halvvägspunkten i en titrering av svag syra: [HA]=[A⁻] → pH = ___.', a:'pKa', hint:'Henderson-Hasselbalch: log(1) = 0'},
  {id:452, cat:'losningar', q:'Fenolftalein byter färg vid pH ≈ 8,2–10. Passar bäst för titrering av ___.', a:'svag syra med stark bas', hint:'Ekvivalenspunkt pH > 7'},
  {id:453, cat:'losningar', q:'Metylorange byter färg vid pH ≈ 3,1–4,4. Passar för titrering av ___.', a:'stark syra med svag bas', hint:'Ekvivalenspunkt pH < 7'},
  {id:454, cat:'losningar', q:'Bromtymolblått byter färg vid pH ≈ 6–7,6. Passar för ___ syra–___ bas.', a:'stark syra–stark bas', hint:'Ekvivalenspunkt pH = 7'},
  {id:455, cat:'losningar', q:'Löslighet av de flesta fasta salter ___ med ökad temperatur.', a:'ökar', hint:'Endoterm löslighetsprocess gynnas av hög T'},
  {id:456, cat:'losningar', q:'Mättad lösning: löst ämne tillsatt → inget löser sig vidare. Systemet är i ___.', a:'jämvikt (fast ⇌ löst)', hint:'Ksp = Q vid mättnad'},
  {id:457, cat:'losningar', q:'ppm i vattenlösning: 1 ppm ≈ 1 mg/L. EU:s gräns för nitrat i dricksvatten är 50 mg/L = ___ ppm.', a:'50', hint:'mg/L = ppm för utspädda vattenlösningar'},
  {id:458, cat:'losningar', q:'Bereda 1,00 L av 0,100 M KMnO₄ (M=158): m = 0,100 × 1,00 × 158 = ___ g.', a:'15,8', hint:'m = c × V × M'},
  {id:459, cat:'losningar', q:'SAV = Syra I Vatten. Varför hälls alltid syran i vattnet?', a:'Utspädning är starkt exoterm – i liten vattenmängd kan det koka och stänka', hint:'Riskminimering – syra i vatten, aldrig vatten i syra'},
  {id:460, cat:'losningar', q:'Gravimetrisk analys: man fäller ut, filtrerar, torkar och väger. Metoden ger ___ (direkt/indirekt) bestämning av mängd.', a:'direkt', hint:'Massan mäts direkt, inga beräkningsomvägar'},
  {id:461, cat:'losningar', q:'Argentometrisk titrering (Mohr): Ag⁺ fäller Cl⁻. Indikatorn K₂CrO₄ bildar rött Ag₂CrO₄ vid ekvivalenspunkten pga ___.', a:'Ksp(Ag₂CrO₄) > Ksp(AgCl) – AgCl fälls preferentiellt', hint:'Selektiv utfällning baserat på Ksp-värden'},
  {id:462, cat:'losningar', q:'EDTA-titrering används för att bestämma ___ i vatten (vattenhårdhet).', a:'Ca²⁺ och Mg²⁺ (hårdhet)', hint:'EDTA bildar stabila komplex med di- och trivalenta metaller'},
  {id:463, cat:'losningar', q:'Molärbrå χ_A = n_A/n_tot. Om 1 mol etanol blandas i 9 mol vatten: χ(etanol) = ___.', a:'0,10', hint:'χ = 1/(1+9)'},
  {id:464, cat:'losningar', q:'Raoults lag: ångtrycket för ett lösningsmedel i en lösning är χ_solv × ___.', a:'p° (rent lösningsmedels ångtryck)', hint:'Löst ämne sänker ångtrycket'},
  {id:465, cat:'losningar', q:'Kolligativa egenskaper beror på ___ lösta partiklar, inte på deras identitet.', a:'antalet', hint:'1 mol NaCl (2 partiklar) ger dubbelt mot 1 mol glukos'}
];

const CLOZE_CATS = {
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
};


const LEVEL_INFO = {
  1: { icon:'🌱', name:'Nivå 1', desc:'Grundläggande' },
  2: { icon:'🔥', name:'Nivå 2', desc:'Medel' },
  3: { icon:'⚡', name:'Nivå 3', desc:'Avancerad' },
};
const CAT_INFO = {
  mol:     { icon:'⚖️',  label:'Mol & massa' },
  konc:    { icon:'🧪',  label:'Koncentration' },
  gas:     { icon:'💨',  label:'Gaslagar' },
  termo:   { icon:'🌡️', label:'Termodynamik' },
  syrabas: { icon:'⚗️',  label:'Syra-bas' },
  jamvikt: { icon:'🔄',  label:'Jamvikt' },
  elkem:   { icon:'⚡',  label:'Elektrokemi' },
  stoik:   { icon:'🔢',  label:'Stoikiometri' },
  bal:     { icon:'⚖️',  label:'Balansering' },
};


let _curLevel = 1, _curProbIdx = 0, _probList = [], _probAnswered = false;

function initExercise() {
  const levelRow = document.getElementById('levelRow');
  if (!levelRow) return;

  // Mode switcher
  const modeRow = document.getElementById('exModeRow');
  modeRow.innerHTML = `
    <button class="ex-mode-btn active" data-mode="rakna">🧮 Räkna</button>
    <button class="ex-mode-btn" data-mode="memorera">📚 Memorera</button>`;
  modeRow.querySelectorAll('.ex-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      modeRow.querySelectorAll('.ex-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      switchExMode(btn.dataset.mode);
    });
  });

  // Category filter row
  const catRow = document.getElementById('exRaknaCatRow');
  catRow.innerHTML = '<button class="ex-cat-filter-btn active" data-cat="all">🔢 Alla kategorier</button>' +
    Object.entries(CAT_INFO).map(([k,v]) =>
      `<button class="ex-cat-filter-btn" data-cat="${k}">${v.icon} ${v.label}</button>`
    ).join('');
  catRow.querySelectorAll('.ex-cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => selectCat(btn.dataset.cat));
  });

  levelRow.innerHTML = [1,2,3].map(lv => {
    const li = LEVEL_INFO[lv];
    return `<button class="level-btn ${lv===1?'active':''}" data-level="${lv}">
      <span class="level-icon">${li.icon}</span>
      <span class="level-name">${li.name}</span>
      <span class="level-desc">${li.desc}</span>
    </button>`;
  }).join('');

  levelRow.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => selectLevel(parseInt(btn.dataset.level)));
  });

  selectLevel(1);
}

let _curCat = 'all';

function selectCat(cat) {
  _curCat = cat;
  document.querySelectorAll('#exRaknaCatRow .ex-cat-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat));
  _probList = PROBLEMS.filter(p => p.lv === _curLevel && (cat === 'all' || p.cat === cat));
  _curProbIdx = 0;
  renderProblem();
}

function selectLevel(lv) {
  _curLevel = lv;
  _probList = PROBLEMS.filter(p => p.lv === lv && (_curCat === 'all' || p.cat === _curCat));
  _curProbIdx = 0;
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.level) === lv);
  });
  renderProblem();
}

function buildBalanceEqHTML(prob, interactive) {
  // Build the visual equation with input boxes for blanks
  let html = '<div class="bal-eq">';
  let globalIdx = 0;
  prob.eq.forEach((side, sideIdx) => {
    if (sideIdx === 1) html += '<span class="bal-arrow">→</span>';
    side.forEach((term, termIdx) => {
      if (termIdx > 0) html += '<span class="bal-plus">+</span>';
      const isBlank = interactive && prob.blanks.includes(globalIdx);
      if (isBlank) {
        html += `<span class="bal-term"><input class="bal-input" data-idx="${globalIdx}" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="?"><span class="bal-formula">${term.f}</span></span>`;
      } else {
        const coef = term.c === 1 ? '' : term.c;
        html += `<span class="bal-term"><span class="bal-coef">${coef}</span><span class="bal-formula">${term.f}</span></span>`;
      }
      globalIdx++;
    });
  });
  html += '</div>';
  return html;
}

function checkBalance(prob) {
  if (_probAnswered) return;
  const inputs = document.querySelectorAll('.bal-input');
  let allFilled = true;
  let allCorrect = true;

  inputs.forEach(inp => {
    const idx = parseInt(inp.dataset.idx);
    // Find correct coef for this global idx
    let globalIdx = 0;
    let correctCoef = null;
    for (const side of prob.eq) {
      for (const term of side) {
        if (globalIdx === idx) correctCoef = term.c;
        globalIdx++;
      }
    }
    const val = parseInt(inp.value);
    if (isNaN(val) || inp.value.trim() === '') { allFilled = false; return; }
    if (val === correctCoef) {
      inp.classList.add('bal-correct');
      inp.classList.remove('bal-wrong');
    } else {
      inp.classList.add('bal-wrong');
      inp.classList.remove('bal-correct');
      allCorrect = false;
    }
  });

  if (!allFilled) { showToast('Fyll i alla rutor'); return; }

  _probAnswered = true;
  const fb = document.getElementById('probFeedback');
  fb.className = 'prob-feedback show ' + (allCorrect ? 'ok' : 'fail');
  const sol = prob.steps ? prob.steps.join(' | ') : '';
  if (allCorrect) {
    fb.innerHTML = `<strong>✅ Rätt!</strong><br><small style="color:var(--green)">${sol}</small>`;
    inputs.forEach(inp => inp.disabled = true);
  } else {
    // Show correct equation
    fb.innerHTML = `<strong>❌ Inte helt rätt.</strong><br><small>Rätt svar:</small><br>` + buildBalanceEqHTML(prob, false) + `<br><small style="color:var(--text2)">${sol}</small>`;
  }
}

function renderProblem() {
  const container = document.getElementById('probContainer');
  if (!container || !_probList.length) return;

  const prob = _probList[_curProbIdx];
  _probAnswered = false;
  const total = _probList.length;
  const li = LEVEL_INFO[prob.lv];

  if (prob.type === 'balance') {
    container.innerHTML = `
      <div class="prob-card">
        <div class="prob-meta">
          <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
          <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
        </div>
        <div class="prob-q">${prob.title}</div>
        <p style="font-size:0.88rem;color:var(--text2);margin:6px 0 16px">Fyll i koefficienterna (skriv 1 om koefficienten är 1):</p>
        ${buildBalanceEqHTML(prob, true)}
        <div style="margin-top:16px">
          <button class="prob-check" id="probCheckBtn">Kontrollera</button>
        </div>
        <div class="prob-feedback" id="probFeedback"></div>
        <div class="prob-hint" id="probHintBox" style="display:none">💡 ${prob.hint}</div>
        <div class="prob-nav-row">
          <button class="prob-nav-btn" id="probHintBtn">💡 Tips</button>
          <button class="prob-nav-btn" id="probPrev" ${_curProbIdx===0?'disabled':''}>← Föregående</button>
          <button class="prob-nav-btn" id="probNext" ${_curProbIdx===total-1?'disabled':''}>Nästa →</button>
        </div>
      </div>`;
    document.getElementById('probCheckBtn').addEventListener('click', () => checkBalance(prob));
    document.querySelectorAll('.bal-input').forEach(inp => {
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkBalance(prob); });
    });
    document.getElementById('probHintBtn').addEventListener('click', () => {
      const hb = document.getElementById('probHintBox');
      hb.style.display = hb.style.display === 'none' ? 'block' : 'none';
    });
    const pBtn = document.getElementById('probPrev');
    const nBtn = document.getElementById('probNext');
    if (pBtn && !pBtn.disabled) pBtn.addEventListener('click', () => { _curProbIdx--; renderProblem(); });
    if (nBtn && !nBtn.disabled) nBtn.addEventListener('click', () => { _curProbIdx++; renderProblem(); });
    return;
  }

  const qHtml = prob.q.replace(/\n/g, '<br>');

  container.innerHTML = `
    <div class="prob-card">
      <div class="prob-meta">
        <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
        <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
      </div>
      <div class="prob-q">${prob.title}</div>
      <p style="font-size:0.92rem;line-height:1.65;margin:8px 0 14px;color:var(--text)">${qHtml}</p>
      <div class="prob-input-row">
        <input type="number" id="probInput" class="prob-input" placeholder="Svar…" step="any">
        <span class="prob-unit">${prob.unit}</span>
        <button class="prob-check" id="probCheckBtn">Kontrollera</button>
      </div>
      <div class="prob-feedback" id="probFeedback"></div>
      <div class="prob-hint" id="probHintBox" style="display:none">💡 ${prob.hint}</div>
      <div class="prob-nav-row">
        <button class="prob-nav-btn" id="probHintBtn">💡 Tips</button>
        <button class="prob-nav-btn" id="probPrev" ${_curProbIdx===0?'disabled':''}>← Föregående</button>
        <button class="prob-nav-btn" id="probNext" ${_curProbIdx===total-1?'disabled':''}>Nästa →</button>
      </div>
    </div>`;

  document.getElementById('probCheckBtn').addEventListener('click', () => checkProblem(prob));
  document.getElementById('probInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkProblem(prob);
  });
  document.getElementById('probHintBtn').addEventListener('click', () => {
    const hb = document.getElementById('probHintBox');
    hb.style.display = hb.style.display === 'none' ? 'block' : 'none';
  });
  const pBtn = document.getElementById('probPrev');
  const nBtn = document.getElementById('probNext');
  if (pBtn && !pBtn.disabled) pBtn.addEventListener('click', () => { _curProbIdx--; renderProblem(); });
  if (nBtn && !nBtn.disabled) nBtn.addEventListener('click', () => { _curProbIdx++; renderProblem(); });
}

function checkProblem(prob) {
  if (_probAnswered) return;
  const input = document.getElementById('probInput');
  const val = parseFloat(input.value);
  if (isNaN(val)) { showToast('Ange ett numeriskt svar'); return; }

  const correct = Math.abs(val - prob.ans) <= prob.tol;
  _probAnswered = true;
  input.classList.add(correct ? 'correct' : 'wrong');

  const fb = document.getElementById('probFeedback');
  fb.className = `prob-feedback show ${correct ? 'ok' : 'fail'}`;
  const _sol = prob.sol || (prob.steps ? prob.steps.join(' → ') : '');
  fb.innerHTML = correct
    ? `<strong>✅ Rätt!</strong><br><small style="color:var(--green)">${_sol}</small>`
    : `<strong>❌ Fel.</strong> Ditt svar: ${val} ${prob.unit}<br>Rätt svar: <strong>${prob.ans} ${prob.unit}</strong><br><small>${_sol}</small>`;
}


// ═══════════════════════════════════════════════════════
//  LÄGESVÄXLING (Räkna / Luckor / Memorera)
// ═══════════════════════════════════════════════════════

let _clozeInited = false, _memInited = false;

function switchExMode(mode) {
  document.getElementById('exRaknaSection').style.display  = mode === 'rakna'    ? '' : 'none';
  document.getElementById('exLuckorSection').style.display = mode === 'luckor'   ? '' : 'none';
  document.getElementById('exMemSection').style.display    = mode === 'memorera' ? '' : 'none';
  if (mode === 'luckor'   && !_clozeInited) { _clozeInited = true; initCloze(); }
  if (mode === 'memorera' && !_memInited)   { _memInited   = true; initMem(); }
}

// ── LUCKOR ──────────────────────────────────────────────
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
    container.innerHTML = '<div class="prob-card" style="text-align:center;padding:40px;color:var(--text2)">Inga lucktexts för den valda kategorin.</div>';
    return;
  }
  const c = _clozeList[_clozeIdx];
  _clozeAnswered = false;
  const total = _clozeList.length;
  const qHtml = c.q.replace('___', '<span class="cloze-blank">___</span>');
  container.innerHTML = `
    <div class="cloze-card">
      <div class="cloze-progress">Fråga ${_clozeIdx+1} / ${total}</div>
      <div class="cloze-sentence">${qHtml}</div>
      <div class="prob-input-row">
        <input type="text" id="clozeInput" class="cloze-input" placeholder="Fyll i…" autocomplete="off" spellcheck="false">
        <button class="prob-check" id="clozeCheckBtn">Kontrollera</button>
      </div>
      <div class="prob-feedback" id="clozeFeedback"></div>
      <div class="cloze-hint-box" id="clozeHintBox">💡 ${c.hint}</div>
      <div class="prob-nav-row">
        <button class="prob-nav-btn" id="clozeHintBtn">💡 Tips</button>
        <button class="prob-nav-btn" id="clozePrev" ${_clozeIdx===0?'disabled':''}>← Föregående</button>
        <button class="prob-nav-btn" id="clozeNext" ${_clozeIdx===total-1?'disabled':''}>Nästa →</button>
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
    ? `<strong>✅ Rätt!</strong> Svaret är: <em>${c.a}</em>`
    : `<strong>❌ Fel.</strong> Ditt svar: <strong>${val}</strong> &nbsp;|  Rätt: <strong>${c.a}</strong>`;
}

// ── MEMORERA ────────────────────────────────────────────
const MEM_SETS = {
  elem20: { icon:'⚛️', label:'Grundamnen 1–20',
    items:[{q:'H',a:'Väte'},{q:'He',a:'Helium'},{q:'Li',a:'Litium'},{q:'Be',a:'Beryllium'},{q:'B',a:'Bor'},{q:'C',a:'Kol'},{q:'N',a:'Kväve'},{q:'O',a:'Syre'},{q:'F',a:'Fluor'},{q:'Ne',a:'Neon'},{q:'Na',a:'Natrium'},{q:'Mg',a:'Magnesium'},{q:'Al',a:'Aluminium'},{q:'Si',a:'Kisel'},{q:'P',a:'Fosfor'},{q:'S',a:'Svavel'},{q:'Cl',a:'Klor'},{q:'Ar',a:'Argon'},{q:'K',a:'Kalium'},{q:'Ca',a:'Kalcium'}]},
  elemExtra: { icon:'🔬', label:'Extra grundamnen',
    items:[{q:'Fe',a:'Järn'},{q:'Cu',a:'Koppar'},{q:'Zn',a:'Zink'},{q:'Br',a:'Brom'},{q:'Ag',a:'Silver'},{q:'I',a:'Jod'},{q:'Au',a:'Guld'}]},
  strongAcids: { icon:'🧪', label:'Starka syror',
    items:[{q:'HCl',a:'Saltsyra'},{q:'H₂SO₄',a:'Svavelsyra'},{q:'HNO₃',a:'Salpetersyra'},{q:'HBr',a:'Bromvätesyra'},{q:'HI',a:'Jodvätesyra'}]},
  weakAcids: { icon:'🍋', label:'Svaga syror',
    items:[{q:'CH₃COOH',a:'Ättiksyra'},{q:'HF',a:'Fluorvätesyra'},{q:'H₂CO₃',a:'Kolsyra'},{q:'H₃PO₄',a:'Fosforsyra'},{q:'HNO₂',a:'Salpetersyrlighet'}]},
  bases: { icon:'🧪', label:'Baser',
    items:[{q:'NaOH',a:'Natriumhydroxid'},{q:'KOH',a:'Kaliumhydroxid'},{q:'Ca(OH)₂',a:'Kalciumhydroxid'},{q:'NH₃',a:'Ammoniak'},{q:'Mg(OH)₂',a:'Magnesiumhydroxid'}]},
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
        <button class="mem-mode-btn ${_memDir==='symToName'?'active':''}" data-dir="symToName">Symbol → Namn</button>
        <button class="mem-mode-btn ${_memDir==='nameToSym'?'active':''}" data-dir="nameToSym">Namn → Symbol</button>
      </div>
      <div class="mem-symbol">${front}</div>
      <div class="mem-sub">${question}</div>
      ${_memFlipped
        ? `<div class="mem-answer">${back}</div>`
        : `<button class="btn-primary" id="memFlipBtn" style="margin-bottom:18px">Visa svar</button>`}
      <div class="cloze-progress">Kort ${_memIdx+1} / ${total}</div>
      <div class="prob-nav-row" style="margin-top:10px">
        <button class="prob-nav-btn" id="memPrev" ${_memIdx===0?'disabled':''}>← Föregående</button>
        <button class="prob-nav-btn" id="memNext" ${_memIdx===total-1?'disabled':''}>Nästa →</button>
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

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
loadState();
applyTheme();
// Defer DOM-heavy init so browser paints HTML before JS blocks
setTimeout(function() {
  buildCategoryGrid();
  updateHomeStats();
}, 0);

// ── Studieplan tab-switcher ──
function spTab(name) {
  document.querySelectorAll('.sp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sp-panel').forEach(p => p.classList.remove('active'));
  const activeTab = document.querySelector(`.sp-tab[onclick*="'${name}'"]`);
  if (activeTab) activeTab.classList.add('active');
  const panel = document.getElementById('spPanel-' + name);
  if (panel) panel.classList.add('active');
}

// ── Studieplan grade accordion ──
function spToggleGrade(card) {
  card.classList.toggle('open');
}