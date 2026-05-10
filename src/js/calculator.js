// ═══════════════════════════════════════════════════════
//  KALKYLATOR
// ═══════════════════════════════════════════════════════

var _calcRaw = '';        // JS-evaluable expression
var _calcDisplay = '';    // human-readable display
var _calcResultStr = '0';
var _calcLastResult = 0;
var _calcJustEvaled = false;

function calcAction(key) {
  // After '=': operator continues with result; anything else starts fresh
  if (_calcJustEvaled) {
    if (['+','-','*','/'].includes(key)) {
      _calcRaw = String(_calcLastResult);
      _calcDisplay = _calcResultStr;
    } else if (!['C','DEL'].includes(key)) {
      _calcRaw = '';
      _calcDisplay = '';
    }
    _calcJustEvaled = false;
  }
  switch (key) {
    case 'C':
      _calcRaw = ''; _calcDisplay = ''; _calcResultStr = '0'; _calcLastResult = 0; _calcJustEvaled = false;
      document.getElementById('calcResult').textContent = '0';
      document.getElementById('calcExpr').textContent = '';
      var _pb = document.getElementById('calcPasteBtn'); if (_pb) _pb.disabled = true;
      return;
    case 'DEL':
      if      (_calcRaw.endsWith('Math.sqrt('))    { _calcRaw = _calcRaw.slice(0,-10); _calcDisplay = _calcDisplay.slice(0,-2); }
      else if (_calcRaw.endsWith('Math.log10('))   { _calcRaw = _calcRaw.slice(0,-11); _calcDisplay = _calcDisplay.slice(0,-4); }
      else { _calcRaw = _calcRaw.slice(0,-1); _calcDisplay = _calcDisplay.slice(0,-1); }
      break;
    case '+': _calcRaw += '+';           _calcDisplay += '+'; break;
    case '-': _calcRaw += '-';           _calcDisplay += '\u2212'; break;
    case '*': _calcRaw += '*';           _calcDisplay += '\u00d7'; break;
    case '/': _calcRaw += '/';           _calcDisplay += '\u00f7'; break;
    case '(': _calcRaw += '(';           _calcDisplay += '('; break;
    case ')': _calcRaw += ')';           _calcDisplay += ')'; break;
    case 'pow':  _calcRaw += '**';          _calcDisplay += '^'; break;
    case 'sqrt': _calcRaw += 'Math.sqrt(';  _calcDisplay += '\u221a('; break;
    case 'log':  _calcRaw += 'Math.log10('; _calcDisplay += 'log('; break;
    case 'EXP':  _calcRaw += 'e';           _calcDisplay += 'e'; break;
    case '=': calcEval(); return;
    default:  _calcRaw += key; _calcDisplay += key; break;
  }
  // Typing mode: show expression large, keep history line empty
  document.getElementById('calcExpr').textContent = '';
  document.getElementById('calcResult').textContent = _calcDisplay || '0';
}

function calcEval() {
  if (!_calcRaw.trim()) return;
  try {
    var result = new Function('return (' + _calcRaw + ')')();
    if (typeof result !== 'number' || !isFinite(result)) throw new Error('bad');
    _calcLastResult = result;
    _calcResultStr = calcFmt(result);
    _calcJustEvaled = true;
    document.getElementById('calcExpr').textContent = _calcDisplay + ' =';
    document.getElementById('calcResult').textContent = _calcResultStr;
    var _pb = document.getElementById('calcPasteBtn'); if (_pb) _pb.disabled = false;
  } catch (e) {
    document.getElementById('calcResult').textContent = 'Fel i uttrycket';
  }
}

function calcFmt(n, sig) {
  sig = sig || 4;
  if (n === 0) return '0';
  if (!isFinite(n)) return '\u221e';
  var abs = Math.abs(n);
  if (abs >= 1e10 || (abs < 0.0001 && abs > 0)) {
    return n.toExponential(sig - 1);
  }
  return parseFloat(n.toPrecision(sig)).toString();
}

function calcCopyResult() {
  var txt = document.getElementById('calcResult').textContent;
  if (txt && txt !== '0' && txt !== 'Fel i uttrycket') {
    navigator.clipboard.writeText(txt).then(function() {
      showToast('Svar kopierat!', 'success');
    }).catch(function() { showToast('Kopiering misslyckades', 'warning'); });
  }
}

function calcPasteResult() {
  if (!_calcResultStr || _calcResultStr === '0' || _calcResultStr === 'Fel i uttrycket') return;
  _calcDisplay = _calcResultStr;
  _calcRaw     = String(_calcLastResult);
  _calcJustEvaled = false;
  document.getElementById('calcExpr').textContent   = '';
  document.getElementById('calcResult').textContent = _calcDisplay;
}

// Keyboard support for basic calculator
document.addEventListener('keydown', function(e) {
  var cs = document.getElementById('calcScreen');
  if (!cs || cs.style.display === 'none') return;
  if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
  var k = e.key;
  if ('0123456789.'.includes(k))       { calcAction(k); e.preventDefault(); }
  else if (k === '+')                  { calcAction('+'); e.preventDefault(); }
  else if (k === '-')                  { calcAction('-'); e.preventDefault(); }
  else if (k === '*')                  { calcAction('*'); e.preventDefault(); }
  else if (k === '/')                  { calcAction('/'); e.preventDefault(); }
  else if (k === '(' || k === ')')     { calcAction(k);   e.preventDefault(); }
  else if (k === 'Enter')              { calcAction('='); e.preventDefault(); }
  else if (k === 'Backspace')          { calcAction('DEL'); e.preventDefault(); }
  else if (k === 'Escape')             { calcAction('C'); e.preventDefault(); }
});

// ── Chemistry tool helpers ────────────────────────────

function chemVal(id) {
  var el = document.getElementById(id);
  if (!el || el.value.trim() === '') return NaN;
  return parseFloat(el.value.replace(',', '.'));
}

function chemSet(id, val) {
  var el = document.getElementById(id);
  if (el) el.value = calcFmt(val, 4);
}

function chemShowResult(rid, eid, html) {
  var r = document.getElementById(rid), er = document.getElementById(eid);
  if (r) { r.innerHTML = html; r.classList.add('visible'); }
  if (er) er.classList.remove('visible');
}

function chemShowError(rid, eid, msg) {
  var r = document.getElementById(rid), er = document.getElementById(eid);
  if (r) r.classList.remove('visible');
  if (er) { er.textContent = msg; er.classList.add('visible'); }
}

function chemClear(tool) {
  var panel = document.getElementById('chemTool-' + tool);
  if (panel) panel.querySelectorAll('input:not([readonly])').forEach(function(el){ el.value = ''; });
  var r = document.getElementById(tool + 'Result'), er = document.getElementById(tool + 'Error');
  if (r)  r.classList.remove('visible');
  if (er) er.classList.remove('visible');
}

// ── Tool 1: n = m / M ────────────────────────────────
function chemCalcMol(solve) {
  var m = chemVal('molM'), M = chemVal('molMM'), n = chemVal('molN');
  var res, label, unit;
  if (solve === 'n') {
    if (isNaN(m)||isNaN(M)) return chemShowError('molResult','molError','Ange massa (m) och molmassa (M).');
    if (M===0) return chemShowError('molResult','molError','Division med noll är inte möjlig.');
    res=m/M; label='n'; unit='mol';
  } else if (solve === 'm') {
    if (isNaN(n)||isNaN(M)) return chemShowError('molResult','molError','Ange substansmängd (n) och molmassa (M).');
    res=n*M; label='m'; unit='g';
  } else {
    if (isNaN(m)||isNaN(n)) return chemShowError('molResult','molError','Ange massa (m) och substansmängd (n).');
    if (n===0) return chemShowError('molResult','molError','Division med noll är inte möjlig.');
    res=m/n; label='M'; unit='g/mol';
  }
  if (!isFinite(res)) return chemShowError('molResult','molError','Kontrollera inmatningen.');
  chemSet(solve==='n'?'molN':solve==='m'?'molM':'molMM', res);
  chemShowResult('molResult','molError',
    '<div class="chem-result-main">'+label+' = '+calcFmt(res)+' '+unit+'</div>' +
    '<div class="chem-result-detail">n = m / M</div>');
}

// ── Tool 2: c = n / V ────────────────────────────────
function chemCalcConc(solve) {
  var n=chemVal('concN'), V=chemVal('concV'), c=chemVal('concC');
  var res, label, unit;
  if (solve==='c') {
    if (isNaN(n)||isNaN(V)) return chemShowError('concResult','concError','Ange n och V.');
    if (V===0) return chemShowError('concResult','concError','Division med noll är inte möjlig.');
    res=n/V; label='c'; unit='mol/dm\u00b3';
  } else if (solve==='n') {
    if (isNaN(c)||isNaN(V)) return chemShowError('concResult','concError','Ange c och V.');
    res=c*V; label='n'; unit='mol';
  } else {
    if (isNaN(n)||isNaN(c)) return chemShowError('concResult','concError','Ange n och c.');
    if (c===0) return chemShowError('concResult','concError','Division med noll är inte möjlig.');
    res=n/c; label='V'; unit='dm\u00b3';
  }
  if (!isFinite(res)) return chemShowError('concResult','concError','Kontrollera inmatningen.');
  chemSet(solve==='c'?'concC':solve==='n'?'concN':'concV', res);
  chemShowResult('concResult','concError',
    '<div class="chem-result-main">'+label+' = '+calcFmt(res)+' '+unit+'</div>' +
    '<div class="chem-result-detail">c = n / V</div>');
}

// ── Tool 3: pH ────────────────────────────────────────
var _phMode = 'H_to_pH';
function phSetMode(mode) {
  _phMode = mode;
  document.getElementById('phModeH').classList.toggle('active', mode==='H_to_pH');
  document.getElementById('phModePH').classList.toggle('active', mode==='pH_to_H');
  document.getElementById('phSectionH').style.display  = mode==='H_to_pH' ? '' : 'none';
  document.getElementById('phSectionPH').style.display = mode==='pH_to_H' ? '' : 'none';
  ['phResult','phError'].forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove('visible'); });
}
function chemCalcPH() {
  if (_phMode==='H_to_pH') {
    var H=chemVal('phH');
    if (isNaN(H)||H<=0) return chemShowError('phResult','phError','Ange en positiv [H\u207a]-koncentration.');
    var pH=-Math.log10(H), pOH=14-pH, OH=Math.pow(10,-pOH);
    chemShowResult('phResult','phError',
      '<div class="chem-result-main">pH = '+calcFmt(pH)+'</div>' +
      '<div class="chem-result-detail">pOH = '+calcFmt(pOH)+'<br>[OH\u207b] = '+calcFmt(OH)+' mol/dm\u00b3</div>');
  } else {
    var pH=chemVal('phPH');
    if (isNaN(pH)) return chemShowError('phResult','phError','Ange ett pH-värde.');
    var H=Math.pow(10,-pH), pOH=14-pH, OH=Math.pow(10,-pOH);
    chemShowResult('phResult','phError',
      '<div class="chem-result-main">[H\u207a] = '+calcFmt(H)+' mol/dm\u00b3</div>' +
      '<div class="chem-result-detail">pH = '+calcFmt(pH)+'<br>pOH = '+calcFmt(pOH)+'<br>[OH\u207b] = '+calcFmt(OH)+' mol/dm\u00b3</div>');
  }
}
function chemClearPH() {
  ['phH','phPH'].forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  ['phResult','phError'].forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove('visible'); });
}

// ── Tool 4: c₁V₁ = c₂V₂ ─────────────────────────────
function chemCalcDil(solve) {
  var c1=chemVal('dilC1'),V1=chemVal('dilV1'),c2=chemVal('dilC2'),V2=chemVal('dilV2');
  var res, label, unit;
  if (solve==='c1') {
    if (isNaN(c2)||isNaN(V2)||isNaN(V1)) return chemShowError('dilResult','dilError','Ange c\u2082, V\u2082 och V\u2081.');
    if (V1===0) return chemShowError('dilResult','dilError','Division med noll är inte möjlig.');
    res=(c2*V2)/V1; label='c\u2081'; unit='mol/dm\u00b3';
  } else if (solve==='V1') {
    if (isNaN(c1)||isNaN(c2)||isNaN(V2)) return chemShowError('dilResult','dilError','Ange c\u2081, c\u2082 och V\u2082.');
    if (c1===0) return chemShowError('dilResult','dilError','Division med noll är inte möjlig.');
    res=(c2*V2)/c1; label='V\u2081'; unit='dm\u00b3';
  } else if (solve==='c2') {
    if (isNaN(c1)||isNaN(V1)||isNaN(V2)) return chemShowError('dilResult','dilError','Ange c\u2081, V\u2081 och V\u2082.');
    if (V2===0) return chemShowError('dilResult','dilError','Division med noll är inte möjlig.');
    res=(c1*V1)/V2; label='c\u2082'; unit='mol/dm\u00b3';
  } else {
    if (isNaN(c1)||isNaN(V1)||isNaN(c2)) return chemShowError('dilResult','dilError','Ange c\u2081, V\u2081 och c\u2082.');
    if (c2===0) return chemShowError('dilResult','dilError','Division med noll är inte möjlig.');
    res=(c1*V1)/c2; label='V\u2082'; unit='dm\u00b3';
  }
  if (!isFinite(res)) return chemShowError('dilResult','dilError','Kontrollera inmatningen.');
  chemSet(solve==='c1'?'dilC1':solve==='V1'?'dilV1':solve==='c2'?'dilC2':'dilV2', res);
  chemShowResult('dilResult','dilError',
    '<div class="chem-result-main">'+label+' = '+calcFmt(res)+' '+unit+'</div>' +
    '<div class="chem-result-detail">c\u2081 \u00d7 V\u2081 = c\u2082 \u00d7 V\u2082</div>');
}

// ── Tool 5: pV = nRT (V in dm³, p in Pa) ─────────────
var _R_GAS = 8.314;
function chemCalcGas(solve) {
  var p=chemVal('gasp'),V=chemVal('gasV'),n=chemVal('gasN'),T=chemVal('gasT');
  var res, label, unit;
  if (solve==='p') {
    if (isNaN(n)||isNaN(V)||isNaN(T)) return chemShowError('gasResult','gasError','Ange n, V och T.');
    if (V===0) return chemShowError('gasResult','gasError','Division med noll är inte möjlig.');
    res=(n*_R_GAS*T)/(V/1000); label='p'; unit='Pa';
  } else if (solve==='V') {
    if (isNaN(p)||isNaN(n)||isNaN(T)) return chemShowError('gasResult','gasError','Ange p, n och T.');
    if (p===0) return chemShowError('gasResult','gasError','Division med noll är inte möjlig.');
    res=(n*_R_GAS*T)/p*1000; label='V'; unit='dm\u00b3';
  } else if (solve==='n') {
    if (isNaN(p)||isNaN(V)||isNaN(T)) return chemShowError('gasResult','gasError','Ange p, V och T.');
    if (T===0) return chemShowError('gasResult','gasError','Division med noll är inte möjlig.');
    res=(p*(V/1000))/(_R_GAS*T); label='n'; unit='mol';
  } else {
    if (isNaN(p)||isNaN(V)||isNaN(n)) return chemShowError('gasResult','gasError','Ange p, V och n.');
    if (n===0) return chemShowError('gasResult','gasError','Division med noll är inte möjlig.');
    res=(p*(V/1000))/(n*_R_GAS); label='T'; unit='K';
  }
  if (!isFinite(res)||isNaN(res)) return chemShowError('gasResult','gasError','Kontrollera inmatningen.');
  chemSet(solve==='p'?'gasp':solve==='V'?'gasV':solve==='n'?'gasN':'gasT', res);
  chemShowResult('gasResult','gasError',
    '<div class="chem-result-main">'+label+' = '+calcFmt(res)+' '+unit+'</div>' +
    '<div class="chem-result-detail">pV = nRT | R = 8,314 J/(mol\u00b7K) | V i dm\u00b3</div>');
}
function chemConvertTemp() {
  var c=chemVal('gasTempC');
  if (!isNaN(c)) document.getElementById('gasTempK').value = calcFmt(c+273.15,6);
}

// ── Tool 6: Q = c·m·ΔT ───────────────────────────────
function chemCalcEnthalpy() {
  var m=chemVal('enthM'), dT=chemVal('enthDT');
  if (isNaN(m)||isNaN(dT)) return chemShowError('enthResult','enthError','Ange massa (m) och temperaturändring (\u0394T).');
  if (m<=0) return chemShowError('enthResult','enthError','Ange ett positivt tal för massan.');
  var Q=4.18*m*dT;
  chemShowResult('enthResult','enthError',
    '<div class="chem-result-main">Q = '+calcFmt(Q)+' kJ</div>' +
    '<div class="chem-result-detail">Q = 4,18 \u00d7 '+calcFmt(m)+' \u00d7 '+calcFmt(dT)+' = '+calcFmt(Q)+' kJ</div>');
}

// ── New formula calculators ───────────────────────────
var _NA=6.02214076e23, _KW=1e-14, _FARADAY=96485;

// N = n × Nₐ
function chemCalcParticles(solve) {
  var n=chemVal('molPartN'), N=chemVal('molPartBig');
  if (solve==='N') {
    if (isNaN(n)) return chemShowError('molPartResult','molPartError','Ange substansmängd (n).');
    var res=n*_NA; chemSet('molPartBig',res);
    chemShowResult('molPartResult','molPartError','<div class="chem-result-main">N = '+res.toExponential(4)+'</div><div class="chem-result-detail">N = n \u00d7 N\u2090 | N\u2090 = 6,022\u00d710\u00b2\u00b3</div>');
  } else {
    if (isNaN(N)) return chemShowError('molPartResult','molPartError','Ange antal partiklar (N).');
    var res=N/_NA; chemSet('molPartN',res);
    chemShowResult('molPartResult','molPartError','<div class="chem-result-main">n = '+calcFmt(res)+' mol</div><div class="chem-result-detail">n = N / N\u2090</div>');
  }
}

// ρ = m / V
function chemCalcDens(solve) {
  var m=chemVal('densM'), V=chemVal('densV'), rho=chemVal('densRho'), res, label, unit;
  if (solve==='rho') {
    if (isNaN(m)||isNaN(V)) return chemShowError('densResult','densError','Ange massa och volym.');
    if (V===0) return chemShowError('densResult','densError','Division med noll är inte möjlig.');
    res=m/V; label='\u03c1'; unit='g/cm\u00b3'; chemSet('densRho',res);
  } else if (solve==='m') {
    if (isNaN(rho)||isNaN(V)) return chemShowError('densResult','densError','Ange densitet och volym.');
    res=rho*V; label='m'; unit='g'; chemSet('densM',res);
  } else {
    if (isNaN(m)||isNaN(rho)) return chemShowError('densResult','densError','Ange massa och densitet.');
    if (rho===0) return chemShowError('densResult','densError','Division med noll är inte möjlig.');
    res=m/rho; label='V'; unit='cm\u00b3'; chemSet('densV',res);
  }
  if (!isFinite(res)) return chemShowError('densResult','densError','Kontrollera inmatningen.');
  chemShowResult('densResult','densError','<div class="chem-result-main">'+label+' = '+calcFmt(res)+' '+unit+'</div><div class="chem-result-detail">\u03c1 = m / V</div>');
}

// w = mᵢ / m_tot × 100%
function chemCalcMassFrac(solve) {
  var mi=chemVal('wMi'), mtot=chemVal('wMtot'), w=chemVal('wW'), res, label, unit;
  if (solve==='w') {
    if (isNaN(mi)||isNaN(mtot)) return chemShowError('wResult','wError','Ange m\u1d62 och m_tot.');
    if (mtot===0) return chemShowError('wResult','wError','Division med noll är inte möjlig.');
    res=(mi/mtot)*100; label='w'; unit='%'; chemSet('wW',res);
  } else if (solve==='mi') {
    if (isNaN(w)||isNaN(mtot)) return chemShowError('wResult','wError','Ange w och m_tot.');
    res=(w/100)*mtot; label='m\u1d62'; unit='g'; chemSet('wMi',res);
  } else {
    if (isNaN(mi)||isNaN(w)) return chemShowError('wResult','wError','Ange m\u1d62 och w.');
    if (w===0) return chemShowError('wResult','wError','Division med noll är inte möjlig.');
    res=(mi/w)*100; label='m_tot'; unit='g'; chemSet('wMtot',res);
  }
  if (!isFinite(res)) return chemShowError('wResult','wError','Kontrollera inmatningen.');
  chemShowResult('wResult','wError','<div class="chem-result-main">'+label+' = '+calcFmt(res)+' '+unit+'</div><div class="chem-result-detail">w = m\u1d62 / m_tot \u00d7 100%</div>');
}

// pOH = -log[OH⁻]
var _pohMode='OH_to_pOH';
function pohSetMode(mode) {
  _pohMode=mode;
  document.getElementById('pohModeOH').classList.toggle('active',mode==='OH_to_pOH');
  document.getElementById('pohModePOH').classList.toggle('active',mode==='pOH_to_OH');
  document.getElementById('pohSectionOH').style.display=mode==='OH_to_pOH'?'':'none';
  document.getElementById('pohSectionPOH').style.display=mode==='pOH_to_OH'?'':'none';
  ['pohResult','pohError'].forEach(function(id){var el=document.getElementById(id);if(el)el.classList.remove('visible');});
}
function chemCalcPOH() {
  if (_pohMode==='OH_to_pOH') {
    var OH=chemVal('pohOH');
    if (isNaN(OH)||OH<=0) return chemShowError('pohResult','pohError','Ange en positiv [OH\u207b]-koncentration.');
    var pOH=-Math.log10(OH), pH=14-pOH;
    chemShowResult('pohResult','pohError','<div class="chem-result-main">pOH = '+calcFmt(pOH)+'</div><div class="chem-result-detail">pH = '+calcFmt(pH)+'<br>[OH\u207b] = '+calcFmt(OH)+' mol/dm\u00b3</div>');
  } else {
    var pOH=chemVal('pohPOH');
    if (isNaN(pOH)) return chemShowError('pohResult','pohError','Ange ett pOH-värde.');
    var OH=Math.pow(10,-pOH), pH=14-pOH;
    chemShowResult('pohResult','pohError','<div class="chem-result-main">[OH\u207b] = '+calcFmt(OH)+' mol/dm\u00b3</div><div class="chem-result-detail">pOH = '+calcFmt(pOH)+'<br>pH = '+calcFmt(pH)+'</div>');
  }
}
function chemClearPOH() {
  ['pohOH','pohPOH'].forEach(function(id){var el=document.getElementById(id);if(el)el.value='';});
  ['pohResult','pohError'].forEach(function(id){var el=document.getElementById(id);if(el)el.classList.remove('visible');});
}

// pH + pOH = 14
function chemCalcPH14(solve) {
  var ph=chemVal('ph14pH'), poh=chemVal('ph14pOH'), res;
  if (solve==='poh') {
    if (isNaN(ph)) return chemShowError('ph14Result','ph14Error','Ange ett pH-värde.');
    res=14-ph; chemSet('ph14pOH',res);
    chemShowResult('ph14Result','ph14Error','<div class="chem-result-main">pOH = '+calcFmt(res)+'</div><div class="chem-result-detail">pH + pOH = 14</div>');
  } else {
    if (isNaN(poh)) return chemShowError('ph14Result','ph14Error','Ange ett pOH-värde.');
    res=14-poh; chemSet('ph14pH',res);
    chemShowResult('ph14Result','ph14Error','<div class="chem-result-main">pH = '+calcFmt(res)+'</div><div class="chem-result-detail">pH + pOH = 14</div>');
  }
}

// Ka = [H⁺][A⁻]/[HA]
function chemCalcKa(solve) {
  var H=chemVal('kaH'), A=chemVal('kaA'), HA=chemVal('kaHA'), Ka=chemVal('kaKa'), res, label;
  if (solve==='Ka') {
    if (isNaN(H)||isNaN(A)||isNaN(HA)) return chemShowError('kaResult','kaError','Ange [H\u207a], [A\u207b] och [HA].');
    if (HA===0) return chemShowError('kaResult','kaError','Division med noll är inte möjlig.');
    res=(H*A)/HA; label='Ka'; chemSet('kaKa',res);
  } else if (solve==='H') {
    if (isNaN(Ka)||isNaN(A)||isNaN(HA)) return chemShowError('kaResult','kaError','Ange Ka, [A\u207b] och [HA].');
    if (A===0) return chemShowError('kaResult','kaError','Division med noll är inte möjlig.');
    res=(Ka*HA)/A; label='[H\u207a]'; chemSet('kaH',res);
  } else if (solve==='A') {
    if (isNaN(Ka)||isNaN(H)||isNaN(HA)) return chemShowError('kaResult','kaError','Ange Ka, [H\u207a] och [HA].');
    if (H===0) return chemShowError('kaResult','kaError','Division med noll är inte möjlig.');
    res=(Ka*HA)/H; label='[A\u207b]'; chemSet('kaA',res);
  } else {
    if (isNaN(Ka)||isNaN(H)||isNaN(A)) return chemShowError('kaResult','kaError','Ange Ka, [H\u207a] och [A\u207b].');
    if (Ka===0) return chemShowError('kaResult','kaError','Division med noll är inte möjlig.');
    res=(H*A)/Ka; label='[HA]'; chemSet('kaHA',res);
  }
  if (!isFinite(res)) return chemShowError('kaResult','kaError','Kontrollera inmatningen.');
  chemShowResult('kaResult','kaError','<div class="chem-result-main">'+label+' = '+calcFmt(res)+'</div><div class="chem-result-detail">Ka = [H\u207a][A\u207b] / [HA]</div>');
}

// Kw = [H⁺][OH⁻] = 10⁻¹⁴
function chemCalcKw(solve) {
  var H=chemVal('kwH'), OH=chemVal('kwOH'), res;
  if (solve==='OH') {
    if (isNaN(H)||H===0) return chemShowError('kwResult','kwError','Ange [H\u207a]-koncentration (> 0).');
    res=_KW/H; chemSet('kwOH',res);
    chemShowResult('kwResult','kwError','<div class="chem-result-main">[OH\u207b] = '+calcFmt(res)+' mol/dm\u00b3</div><div class="chem-result-detail">Kw = [H\u207a][OH\u207b] = 10\u207b\u00b9\u2074</div>');
  } else {
    if (isNaN(OH)||OH===0) return chemShowError('kwResult','kwError','Ange [OH\u207b]-koncentration (> 0).');
    res=_KW/OH; chemSet('kwH',res);
    chemShowResult('kwResult','kwError','<div class="chem-result-main">[H\u207a] = '+calcFmt(res)+' mol/dm\u00b3</div><div class="chem-result-detail">Kw = [H\u207a][OH\u207b] = 10\u207b\u00b9\u2074</div>');
  }
}

// Boyles lag: p₁V₁ = p₂V₂
function chemCalcBoyle(solve) {
  var p1=chemVal('boylp1'),V1=chemVal('boylV1'),p2=chemVal('boylp2'),V2=chemVal('boylV2'), res, label, unit;
  if (solve==='p1') {
    if (isNaN(p2)||isNaN(V2)||isNaN(V1)) return chemShowError('boylResult','boylError','Ange p\u2082, V\u2082 och V\u2081.');
    if (V1===0) return chemShowError('boylResult','boylError','Division med noll.');
    res=(p2*V2)/V1; label='p\u2081'; unit='Pa'; chemSet('boylp1',res);
  } else if (solve==='V1') {
    if (isNaN(p1)||isNaN(p2)||isNaN(V2)) return chemShowError('boylResult','boylError','Ange p\u2081, p\u2082 och V\u2082.');
    if (p1===0) return chemShowError('boylResult','boylError','Division med noll.');
    res=(p2*V2)/p1; label='V\u2081'; unit='dm\u00b3'; chemSet('boylV1',res);
  } else if (solve==='p2') {
    if (isNaN(p1)||isNaN(V1)||isNaN(V2)) return chemShowError('boylResult','boylError','Ange p\u2081, V\u2081 och V\u2082.');
    if (V2===0) return chemShowError('boylResult','boylError','Division med noll.');
    res=(p1*V1)/V2; label='p\u2082'; unit='Pa'; chemSet('boylp2',res);
  } else {
    if (isNaN(p1)||isNaN(V1)||isNaN(p2)) return chemShowError('boylResult','boylError','Ange p\u2081, V\u2081 och p\u2082.');
    if (p2===0) return chemShowError('boylResult','boylError','Division med noll.');
    res=(p1*V1)/p2; label='V\u2082'; unit='dm\u00b3'; chemSet('boylV2',res);
  }
  if (!isFinite(res)) return chemShowError('boylResult','boylError','Kontrollera inmatningen.');
  chemShowResult('boylResult','boylError','<div class="chem-result-main">'+label+' = '+calcFmt(res)+' '+unit+'</div><div class="chem-result-detail">p\u2081V\u2081 = p\u2082V\u2082 (Boyles lag)</div>');
}

// Charles lag: V₁/T₁ = V₂/T₂
function chemCalcCharles(solve) {
  var V1=chemVal('charlV1'),T1=chemVal('charlT1'),V2=chemVal('charlV2'),T2=chemVal('charlT2'), res, label, unit;
  if (solve==='V1') {
    if (isNaN(V2)||isNaN(T1)||isNaN(T2)) return chemShowError('charlResult','charlError','Ange V\u2082, T\u2081 och T\u2082.');
    if (T2===0) return chemShowError('charlResult','charlError','Division med noll.');
    res=(V2*T1)/T2; label='V\u2081'; unit='dm\u00b3'; chemSet('charlV1',res);
  } else if (solve==='T1') {
    if (isNaN(V1)||isNaN(V2)||isNaN(T2)) return chemShowError('charlResult','charlError','Ange V\u2081, V\u2082 och T\u2082.');
    if (V2===0) return chemShowError('charlResult','charlError','Division med noll.');
    res=(V1*T2)/V2; label='T\u2081'; unit='K'; chemSet('charlT1',res);
  } else if (solve==='V2') {
    if (isNaN(V1)||isNaN(T1)||isNaN(T2)) return chemShowError('charlResult','charlError','Ange V\u2081, T\u2081 och T\u2082.');
    if (T1===0) return chemShowError('charlResult','charlError','Division med noll.');
    res=(V1*T2)/T1; label='V\u2082'; unit='dm\u00b3'; chemSet('charlV2',res);
  } else {
    if (isNaN(V1)||isNaN(T1)||isNaN(V2)) return chemShowError('charlResult','charlError','Ange V\u2081, T\u2081 och V\u2082.');
    if (V1===0) return chemShowError('charlResult','charlError','Division med noll.');
    res=(V2*T1)/V1; label='T\u2082'; unit='K'; chemSet('charlT2',res);
  }
  if (!isFinite(res)) return chemShowError('charlResult','charlError','Kontrollera inmatningen.');
  chemShowResult('charlResult','charlError','<div class="chem-result-main">'+label+' = '+calcFmt(res)+' '+unit+'</div><div class="chem-result-detail">V\u2081/T\u2081 = V\u2082/T\u2082 (Charles lag)</div>');
}

// Gay-Lussacs lag: p₁/T₁ = p₂/T₂
function chemCalcGayLussac(solve) {
  var p1=chemVal('glp1'),T1=chemVal('glT1'),p2=chemVal('glp2'),T2=chemVal('glT2'), res, label, unit;
  if (solve==='p1') {
    if (isNaN(p2)||isNaN(T1)||isNaN(T2)) return chemShowError('glResult','glError','Ange p\u2082, T\u2081 och T\u2082.');
    if (T2===0) return chemShowError('glResult','glError','Division med noll.');
    res=(p2*T1)/T2; label='p\u2081'; unit='Pa'; chemSet('glp1',res);
  } else if (solve==='T1') {
    if (isNaN(p1)||isNaN(p2)||isNaN(T2)) return chemShowError('glResult','glError','Ange p\u2081, p\u2082 och T\u2082.');
    if (p2===0) return chemShowError('glResult','glError','Division med noll.');
    res=(p1*T2)/p2; label='T\u2081'; unit='K'; chemSet('glT1',res);
  } else if (solve==='p2') {
    if (isNaN(p1)||isNaN(T1)||isNaN(T2)) return chemShowError('glResult','glError','Ange p\u2081, T\u2081 och T\u2082.');
    if (T1===0) return chemShowError('glResult','glError','Division med noll.');
    res=(p1*T2)/T1; label='p\u2082'; unit='Pa'; chemSet('glp2',res);
  } else {
    if (isNaN(p1)||isNaN(T1)||isNaN(p2)) return chemShowError('glResult','glError','Ange p\u2081, T\u2081 och p\u2082.');
    if (p1===0) return chemShowError('glResult','glError','Division med noll.');
    res=(p2*T1)/p1; label='T\u2082'; unit='K'; chemSet('glT2',res);
  }
  if (!isFinite(res)) return chemShowError('glResult','glError','Kontrollera inmatningen.');
  chemShowResult('glResult','glError','<div class="chem-result-main">'+label+' = '+calcFmt(res)+' '+unit+'</div><div class="chem-result-detail">p\u2081/T\u2081 = p\u2082/T\u2082 (Gay-Lussacs lag)</div>');
}

// ΔH°rxn = ΣΔH°f(prod) − ΣΔH°f(reak)
function chemCalcHess() {
  var prodStr=document.getElementById('hessProds')?document.getElementById('hessProds').value:'';
  var reakStr=document.getElementById('hessReaks')?document.getElementById('hessReaks').value:'';
  if (!prodStr.trim()&&!reakStr.trim()) return chemShowError('hessResult','hessError','Ange minst ett värde för produkter eller reaktanter.');
  function parseList(s) { if (!s.trim()) return []; return s.split(',').map(function(v){return parseFloat(v.trim().replace(',','.'));}); }
  var prods=parseList(prodStr), reaks=parseList(reakStr);
  if (prods.some(isNaN)||reaks.some(isNaN)) return chemShowError('hessResult','hessError','Ogiltiga värden. Separera med kommatecken, ex: \u2212285.8, \u2212393.5');
  var sumProd=prods.reduce(function(a,b){return a+b;},0), sumReak=reaks.reduce(function(a,b){return a+b;},0), dH=sumProd-sumReak;
  chemShowResult('hessResult','hessError','<div class="chem-result-main">\u0394H\u00b0rxn = '+calcFmt(dH)+' kJ/mol</div><div class="chem-result-detail">\u03a3\u0394H\u00b0f(prod) = '+calcFmt(sumProd)+'<br>\u03a3\u0394H\u00b0f(reak) = '+calcFmt(sumReak)+'</div>');
}
function chemClearHess() {
  ['hessProds','hessReaks'].forEach(function(id){var el=document.getElementById(id);if(el)el.value='';});
  ['hessResult','hessError'].forEach(function(id){var el=document.getElementById(id);if(el)el.classList.remove('visible');});
}

// E°cell = E°katod − E°anod
function chemCalcEcell(solve) {
  var Ecell=chemVal('elEcell'), Ekat=chemVal('elEkat'), Eanod=chemVal('elEanod'), res, label;
  if (solve==='Ecell') {
    if (isNaN(Ekat)||isNaN(Eanod)) return chemShowError('elResult','elError','Ange E\u00b0katod och E\u00b0anod.');
    res=Ekat-Eanod; label='E\u00b0cell'; chemSet('elEcell',res);
  } else if (solve==='Ekat') {
    if (isNaN(Ecell)||isNaN(Eanod)) return chemShowError('elResult','elError','Ange E\u00b0cell och E\u00b0anod.');
    res=Ecell+Eanod; label='E\u00b0katod'; chemSet('elEkat',res);
  } else {
    if (isNaN(Ecell)||isNaN(Ekat)) return chemShowError('elResult','elError','Ange E\u00b0cell och E\u00b0katod.');
    res=Ekat-Ecell; label='E\u00b0anod'; chemSet('elEanod',res);
  }
  if (!isFinite(res)) return chemShowError('elResult','elError','Kontrollera inmatningen.');
  chemShowResult('elResult','elError','<div class="chem-result-main">'+label+' = '+calcFmt(res)+' V</div><div class="chem-result-detail">E\u00b0cell = E\u00b0katod \u2212 E\u00b0anod</div>');
}

// Q = nₑ × F = I × t
function chemCalcCharge(solve) {
  var Q=chemVal('elQ'), ne=chemVal('elNe'), I=chemVal('elI'), t=chemVal('elT'), res, label, unit;
  if (solve==='Q') {
    if (!isNaN(ne)) { res=ne*_FARADAY; }
    else if (!isNaN(I)&&!isNaN(t)) { res=I*t; }
    else return chemShowError('elCResult','elCError','Ange n\u2091 eller (I och t).');
    label='Q'; unit='C'; chemSet('elQ',res);
  } else if (solve==='ne') {
    if (isNaN(Q)) return chemShowError('elCResult','elCError','Ange Q.');
    res=Q/_FARADAY; label='n\u2091'; unit='mol'; chemSet('elNe',res);
  } else if (solve==='I') {
    if (isNaN(Q)||isNaN(t)) return chemShowError('elCResult','elCError','Ange Q och t.');
    if (t===0) return chemShowError('elCResult','elCError','Division med noll.');
    res=Q/t; label='I'; unit='A'; chemSet('elI',res);
  } else {
    if (isNaN(Q)||isNaN(I)) return chemShowError('elCResult','elCError','Ange Q och I.');
    if (I===0) return chemShowError('elCResult','elCError','Division med noll.');
    res=Q/I; label='t'; unit='s'; chemSet('elT',res);
  }
  if (!isFinite(res)) return chemShowError('elCResult','elCError','Kontrollera inmatningen.');
  chemShowResult('elCResult','elCError','<div class="chem-result-main">'+label+' = '+calcFmt(res)+' '+unit+'</div><div class="chem-result-detail">Q = n\u2091 \u00d7 F = I \u00d7 t | F = 96 485 C/mol</div>');
}

// Q vs K — reaktionsriktning
function chemCalcQK() {
  var Q=chemVal('qkQ'), K=chemVal('qkK');
  if (isNaN(Q)||isNaN(K)) return chemShowError('qkResult','qkError','Ange Q och K.');
  var direction, detail, color;
  if (Math.abs(Q-K)/Math.max(Math.abs(K),1e-30)<1e-9) {
    direction='Q = K \u2192 Systemet är i jämvikt'; color='var(--green)'; detail='Ingen nettoreaktion sker.';
  } else if (Q<K) {
    direction='Q < K \u2192 Reaktionen g\u00e5r fram\u00e5t (\u2192)'; color='var(--accent)'; detail='Mer produkter bildas tills Q = K.';
  } else {
    direction='Q > K \u2192 Reaktionen g\u00e5r bak\u00e5t (\u2190)'; color='var(--red)'; detail='Mer reaktanter bildas tills Q = K.';
  }
  chemShowResult('qkResult','qkError','<div class="chem-result-main" style="color:'+color+'">'+direction+'</div><div class="chem-result-detail">'+detail+'<br>Q = '+calcFmt(Q)+' | K = '+calcFmt(K)+'</div>');
}

// n_A/a = n_B/b
function chemCalcStoich(solve) {
  var nA=chemVal('stoNA'), a=chemVal('stoA'), nB=chemVal('stoNB'), b=chemVal('stoB'), res, label, unit='mol';
  if (solve==='nA') {
    if (isNaN(nB)||isNaN(a)||isNaN(b)) return chemShowError('stoResult','stoError','Ange n_B, a och b.');
    if (b===0) return chemShowError('stoResult','stoError','Division med noll.');
    res=(nB*a)/b; label='n_A'; chemSet('stoNA',res);
  } else if (solve==='nB') {
    if (isNaN(nA)||isNaN(a)||isNaN(b)) return chemShowError('stoResult','stoError','Ange n_A, a och b.');
    if (a===0) return chemShowError('stoResult','stoError','Division med noll.');
    res=(nA*b)/a; label='n_B'; chemSet('stoNB',res);
  } else if (solve==='a') {
    if (isNaN(nA)||isNaN(nB)||isNaN(b)) return chemShowError('stoResult','stoError','Ange n_A, n_B och b.');
    if (nB===0) return chemShowError('stoResult','stoError','Division med noll.');
    res=(nA*b)/nB; label='a'; unit=''; chemSet('stoA',res);
  } else {
    if (isNaN(nA)||isNaN(nB)||isNaN(a)) return chemShowError('stoResult','stoError','Ange n_A, n_B och a.');
    if (nA===0) return chemShowError('stoResult','stoError','Division med noll.');
    res=(nB*a)/nA; label='b'; unit=''; chemSet('stoB',res);
  }
  if (!isFinite(res)) return chemShowError('stoResult','stoError','Kontrollera inmatningen.');
  chemShowResult('stoResult','stoError','<div class="chem-result-main">'+label+' = '+calcFmt(res)+(unit?' '+unit:'')+'</div><div class="chem-result-detail">n_A / a = n_B / b</div>');
}

// Utbyte = (faktisk / teoretisk) × 100%
function chemCalcYield(solve) {
  var fakt=chemVal('yieldFakt'), teor=chemVal('yieldTeor'), pct=chemVal('yieldPct'), res, label, unit;
  if (solve==='pct') {
    if (isNaN(fakt)||isNaN(teor)) return chemShowError('yieldResult','yieldError','Ange faktisk och teoretisk mängd.');
    if (teor===0) return chemShowError('yieldResult','yieldError','Division med noll.');
    res=(fakt/teor)*100; label='Utbyte'; unit='%'; chemSet('yieldPct',res);
  } else if (solve==='fakt') {
    if (isNaN(pct)||isNaN(teor)) return chemShowError('yieldResult','yieldError','Ange utbyte (%) och teoretisk mängd.');
    res=(pct/100)*teor; label='Faktisk mängd'; unit=''; chemSet('yieldFakt',res);
  } else {
    if (isNaN(pct)||isNaN(fakt)) return chemShowError('yieldResult','yieldError','Ange utbyte (%) och faktisk mängd.');
    if (pct===0) return chemShowError('yieldResult','yieldError','Division med noll.');
    res=(fakt/(pct/100)); label='Teoretisk mängd'; unit=''; chemSet('yieldTeor',res);
  }
  if (!isFinite(res)) return chemShowError('yieldResult','yieldError','Kontrollera inmatningen.');
  chemShowResult('yieldResult','yieldError','<div class="chem-result-main">'+label+' = '+calcFmt(res)+(unit?' '+unit:'')+'</div><div class="chem-result-detail">Utbyte = (faktisk / teoretisk) \u00d7 100%</div>');
}

// Begränsande reagens
function chemCalcLimReag() {
  var n1=chemVal('limN1'), a1=chemVal('limA1'), n2=chemVal('limN2'), a2=chemVal('limA2');
  if (isNaN(n1)||isNaN(a1)||isNaN(n2)||isNaN(a2)) return chemShowError('limResult','limError','Ange alla fyra värden.');
  if (a1===0||a2===0) return chemShowError('limResult','limError','Koefficienterna kan inte vara noll.');
  var r1=n1/a1, r2=n2/a2, winner, loser;
  if (r1<r2) { winner='Reaktant 1'; loser='Reaktant 2 är i överskott'; }
  else if (r2<r1) { winner='Reaktant 2'; loser='Reaktant 1 är i överskott'; }
  else { winner='Ingen (stökiometrisk blandning)'; loser='Båda förbrukas helt'; }
  chemShowResult('limResult','limError','<div class="chem-result-main">Begr\u00e4nsande reagens: '+winner+'</div><div class="chem-result-detail">n\u2081/a\u2081 = '+calcFmt(r1)+' mol/enhet<br>n\u2082/a\u2082 = '+calcFmt(r2)+' mol/enhet<br>'+loser+'</div>');
}

// ── Tool 7: Molar mass ────────────────────────────────
var _AM = {
  H:1.008,He:4.003,Li:6.941,Be:9.012,B:10.811,C:12.011,N:14.007,O:15.999,
  F:18.998,Ne:20.180,Na:22.990,Mg:24.305,Al:26.982,Si:28.086,P:30.974,
  S:32.065,Cl:35.453,Ar:39.948,K:39.098,Ca:40.078,Sc:44.956,Ti:47.867,
  V:50.942,Cr:51.996,Mn:54.938,Fe:55.845,Co:58.933,Ni:58.693,Cu:63.546,
  Zn:65.380,Ga:69.723,Ge:72.630,As:74.922,Se:78.971,Br:79.904,Kr:83.798,
  Rb:85.468,Sr:87.620,Y:88.906,Zr:91.224,Ag:107.868,Cd:112.411,Sn:118.710,
  I:126.904,Xe:131.293,Cs:132.905,Ba:137.327,Hf:178.490,W:183.840,
  Pt:195.084,Au:196.967,Hg:200.592,Pb:207.200,Bi:208.980
};
function _parseFormula(s, pos) {
  var comp={};
  while (pos<s.length) {
    var ch=s[pos];
    if (ch==='(') {
      var sub=_parseFormula(s,pos+1); pos=sub.pos;
      var ns=''; while(pos<s.length&&s[pos]>='0'&&s[pos]<='9') ns+=s[pos++];
      var mult=ns?parseInt(ns):1;
      for(var e in sub.comp) comp[e]=(comp[e]||0)+sub.comp[e]*mult;
    } else if (ch===')') {
      return {comp:comp, pos:pos+1};
    } else if (ch>='A'&&ch<='Z') {
      var el=ch; pos++;
      while(pos<s.length&&s[pos]>='a'&&s[pos]<='z') el+=s[pos++];
      var ns=''; while(pos<s.length&&s[pos]>='0'&&s[pos]<='9') ns+=s[pos++];
      comp[el]=(comp[el]||0)+(ns?parseInt(ns):1);
    } else { pos++; }
  }
  return {comp:comp, pos:pos};
}
function chemCalcMolar() {
  var inp=document.getElementById('molarFormula');
  if (!inp||!inp.value.trim()) {
    ['molarResult','molarError'].forEach(function(id){var el=document.getElementById(id);if(el)el.classList.remove('visible');});
    return;
  }
  // Normalize subscript digits
  var formula=inp.value.trim(), sub='\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089';
  for(var d=0;d<10;d++) formula=formula.split(sub[d]).join(String(d));
  var parsed=_parseFormula(formula,0), comp=parsed.comp;
  var totalMass=0, rows=[], hasEl=false;
  for(var el in comp) {
    hasEl=true;
    if(!_AM[el]) return chemShowError('molarResult','molarError','Okänt grundämne: '+el+'. Kontrollera formeln.');
    var cnt=comp[el], mass=_AM[el], contrib=cnt*mass;
    totalMass+=contrib;
    rows.push(el+': '+cnt+' \u00d7 '+mass.toFixed(3)+' = '+contrib.toFixed(3)+' g/mol');
  }
  if (!hasEl) return chemShowError('molarResult','molarError','Inga grundämnen hittades. Kontrollera formeln.');
  chemShowResult('molarResult','molarError',
    '<div class="chem-result-main">'+formula+' \u2192 '+totalMass.toFixed(2)+' g/mol</div>' +
    '<div class="chem-molar-breakdown">'+rows.join('<br>')+
    '<div class="chem-molar-total">\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500<br>Total molmassa: '+totalMass.toFixed(2)+' g/mol</div></div>');
}

// ── initCalc ──────────────────────────────────────────
function initCalc() {
  var panels=document.getElementById('chemPanels');
  if (!panels) return;
  panels.innerHTML=_buildChemPanels();
}
function chemShowCat(tool) {
  var grid=document.getElementById('chemCatGrid');
  if (grid) grid.style.display='none';
  document.querySelectorAll('#chemPanels .chem-panel').forEach(function(p){p.classList.remove('active');});
  var panel=document.getElementById('chemTool-'+tool);
  if (panel) panel.classList.add('active');
}
function chemBackToGrid() {
  document.querySelectorAll('#chemPanels .chem-panel').forEach(function(p){p.classList.remove('active');});
  var grid=document.getElementById('chemCatGrid');
  if (grid) grid.style.display='';
}

function _cfr(id, label, unit, type) {
  type=type||'number';
  return '<div class="chem-field-row">'+
    '<span class="chem-field-label">'+label+'</span>'+
    '<input type="'+type+'" class="chem-field-input" id="'+id+'" placeholder="0" step="any">'+
    '<span class="chem-field-unit">'+unit+'</span>'+
  '</div>';
}

function _buildChemPanels() {
  var _BACK='<button class="chem-back-btn" onclick="chemBackToGrid()">\u2190 Tillbaka</button>';
  return (
  // ── MOL
  '<div class="chem-panel" id="chemTool-mol">'+
    _BACK+
    '<div style="padding:18px 20px">'+
    '<div class="chem-formula">n = m / M</div>'+
    _cfr('molM','Massa (m)','g')+
    _cfr('molMM','Molmassa (M)','g/mol')+
    _cfr('molN','Substansmängd (n)','mol')+
    '<div class="chem-btn-row">'+
      '<button class="chem-calc-btn" onclick="chemCalcMol(\'n\')">Beräkna n</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcMol(\'m\')">Beräkna m</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcMol(\'M\')">Beräkna M</button>'+
      '<button class="chem-clear-btn" onclick="chemClear(\'mol\')">Rensa</button>'+
    '</div>'+
    '<div class="chem-result" id="molResult"></div>'+
    '<div class="chem-error" id="molError"></div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">N = n \u00d7 N\u2090</div>'+
      '<div class="chem-const-note">N\u2090 = 6,022 \u00d7 10\u00b2\u00b3 mol\u207b\u00b9</div>'+
      _cfr('molPartN','Substansmängd (n)','mol')+
      _cfr('molPartBig','Antal partiklar (N)','')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcParticles(\'N\')">Beräkna N</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcParticles(\'n\')">Beräkna n</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'molPart\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="molPartResult"></div>'+
      '<div class="chem-error" id="molPartError"></div>'+
    '</div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">\u03c1 = m / V</div>'+
      _cfr('densM','Massa (m)','g')+
      _cfr('densV','Volym (V)','cm\u00b3')+
      _cfr('densRho','Densitet (\u03c1)','g/cm\u00b3')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcDens(\'rho\')">Beräkna \u03c1</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcDens(\'m\')">Beräkna m</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcDens(\'V\')">Beräkna V</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'dens\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="densResult"></div>'+
      '<div class="chem-error" id="densError"></div>'+
    '</div>'+
    '</div>'+
  '</div>'+
  // ── KONCENTRATION
  '<div class="chem-panel" id="chemTool-conc">'+
    _BACK+
    '<div style="padding:18px 20px">'+
    '<div class="chem-formula">c = n / V</div>'+
    _cfr('concN','Substansmängd (n)','mol')+
    _cfr('concV','Volym (V)','dm\u00b3')+
    _cfr('concC','Koncentration (c)','mol/dm\u00b3')+
    '<div class="chem-btn-row">'+
      '<button class="chem-calc-btn" onclick="chemCalcConc(\'c\')">Beräkna c</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcConc(\'n\')">Beräkna n</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcConc(\'V\')">Beräkna V</button>'+
      '<button class="chem-clear-btn" onclick="chemClear(\'conc\')">Rensa</button>'+
    '</div>'+
    '<div class="chem-result" id="concResult"></div>'+
    '<div class="chem-error" id="concError"></div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">w = m\u1d62 / m_tot \u00d7 100%</div>'+
      _cfr('wMi','Massa av ämne (m\u1d62)','g')+
      _cfr('wMtot','Total massa (m_tot)','g')+
      _cfr('wW','Massprocent (w)','%')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcMassFrac(\'w\')">Beräkna w</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcMassFrac(\'mi\')">Beräkna m\u1d62</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcMassFrac(\'mtot\')">Beräkna m_tot</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'w\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="wResult"></div>'+
      '<div class="chem-error" id="wError"></div>'+
    '</div>'+
    '</div>'+
  '</div>'+
  // ── pH
  '<div class="chem-panel" id="chemTool-ph">'+
    _BACK+
    '<div style="padding:18px 20px">'+
    '<div class="chem-mode-toggle">'+
      '<button class="chem-mode-btn active" id="phModeH" onclick="phSetMode(\'H_to_pH\')">[H\u207a] \u2192 pH</button>'+
      '<button class="chem-mode-btn" id="phModePH" onclick="phSetMode(\'pH_to_H\')">pH \u2192 [H\u207a]</button>'+
    '</div>'+
    '<div id="phSectionH">'+
      '<div class="chem-formula">pH = \u2212log[H\u207a]</div>'+
      _cfr('phH','[H\u207a]-koncentration','mol/dm\u00b3')+
    '</div>'+
    '<div id="phSectionPH" style="display:none">'+
      '<div class="chem-formula">[H\u207a] = 10\u207b\u1d56\u1d34</div>'+
      _cfr('phPH','pH-värde','')+
    '</div>'+
    '<div class="chem-btn-row">'+
      '<button class="chem-calc-btn" onclick="chemCalcPH()">Beräkna</button>'+
      '<button class="chem-clear-btn" onclick="chemClearPH()">Rensa</button>'+
    '</div>'+
    '<div class="chem-result" id="phResult"></div>'+
    '<div class="chem-error" id="phError"></div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">pOH = \u2212log[OH\u207b]</div>'+
      '<div class="chem-mode-toggle">'+
        '<button class="chem-mode-btn active" id="pohModeOH" onclick="pohSetMode(\'OH_to_pOH\')">[OH\u207b] \u2192 pOH</button>'+
        '<button class="chem-mode-btn" id="pohModePOH" onclick="pohSetMode(\'pOH_to_OH\')">pOH \u2192 [OH\u207b]</button>'+
      '</div>'+
      '<div id="pohSectionOH">'+_cfr('pohOH','[OH\u207b]-koncentration','mol/dm\u00b3')+'</div>'+
      '<div id="pohSectionPOH" style="display:none">'+_cfr('pohPOH','pOH-värde','')+'</div>'+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcPOH()">Beräkna</button>'+
        '<button class="chem-clear-btn" onclick="chemClearPOH()">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="pohResult"></div>'+
      '<div class="chem-error" id="pohError"></div>'+
    '</div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">pH + pOH = 14</div>'+
      _cfr('ph14pH','pH-värde','')+
      _cfr('ph14pOH','pOH-värde','')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcPH14(\'poh\')">Beräkna pOH</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcPH14(\'ph\')">Beräkna pH</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'ph14\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="ph14Result"></div>'+
      '<div class="chem-error" id="ph14Error"></div>'+
    '</div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">Ka = [H\u207a][A\u207b] / [HA]</div>'+
      _cfr('kaH','[H\u207a]','mol/dm\u00b3')+
      _cfr('kaA','[A\u207b]','mol/dm\u00b3')+
      _cfr('kaHA','[HA]','mol/dm\u00b3')+
      _cfr('kaKa','Ka','')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcKa(\'Ka\')">Beräkna Ka</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcKa(\'H\')">[H\u207a]</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcKa(\'A\')">[A\u207b]</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcKa(\'HA\')">[HA]</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'ka\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="kaResult"></div>'+
      '<div class="chem-error" id="kaError"></div>'+
    '</div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">Kw = [H\u207a][OH\u207b] = 10\u207b\u00b9\u2074</div>'+
      _cfr('kwH','[H\u207a]','mol/dm\u00b3')+
      _cfr('kwOH','[OH\u207b]','mol/dm\u00b3')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcKw(\'OH\')">Beräkna [OH\u207b]</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcKw(\'H\')">Beräkna [H\u207a]</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'kw\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="kwResult"></div>'+
      '<div class="chem-error" id="kwError"></div>'+
    '</div>'+
    '</div>'+
  '</div>'+
  // ── UTSPÄDNING
  '<div class="chem-panel" id="chemTool-dil">'+
    _BACK+
    '<div style="padding:18px 20px">'+
    '<div class="chem-formula">c\u2081 \u00d7 V\u2081 = c\u2082 \u00d7 V\u2082</div>'+
    _cfr('dilC1','c\u2081 (startkoncentration)','mol/dm\u00b3')+
    _cfr('dilV1','V\u2081 (startvolym)','dm\u00b3')+
    _cfr('dilC2','c\u2082 (slutkoncentration)','mol/dm\u00b3')+
    _cfr('dilV2','V\u2082 (slutvolym)','dm\u00b3')+
    '<div class="chem-btn-row">'+
      '<button class="chem-calc-btn" onclick="chemCalcDil(\'c1\')">Beräkna c\u2081</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcDil(\'V1\')">Beräkna V\u2081</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcDil(\'c2\')">Beräkna c\u2082</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcDil(\'V2\')">Beräkna V\u2082</button>'+
      '<button class="chem-clear-btn" onclick="chemClear(\'dil\')">Rensa</button>'+
    '</div>'+
    '<div class="chem-result" id="dilResult"></div>'+
    '<div class="chem-error" id="dilError"></div>'+
    '</div>'+
  '</div>'+
  // ── GASLAGEN
  '<div class="chem-panel" id="chemTool-gas">'+
    _BACK+
    '<div style="padding:18px 20px">'+
    '<div class="chem-formula">pV = nRT</div>'+
    '<div class="chem-const-note">R = 8,314 J/(mol\u00b7K) | V i dm\u00b3, p i Pa, T i K</div>'+
    _cfr('gasp','Tryck (p)','Pa')+
    _cfr('gasV','Volym (V)','dm\u00b3')+
    _cfr('gasN','Substansmängd (n)','mol')+
    _cfr('gasT','Temperatur (T)','K')+
    '<div class="chem-btn-row">'+
      '<button class="chem-calc-btn" onclick="chemCalcGas(\'p\')">Beräkna p</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcGas(\'V\')">Beräkna V</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcGas(\'n\')">Beräkna n</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcGas(\'T\')">Beräkna T</button>'+
      '<button class="chem-clear-btn" onclick="chemClear(\'gas\')">Rensa</button>'+
    '</div>'+
    '<div class="chem-result" id="gasResult"></div>'+
    '<div class="chem-error" id="gasError"></div>'+
    '<div class="chem-converter-row">'+
      '<span>\uD83C\uDF21\uFE0F \u00b0C \u2192 K:</span>'+
      '<input type="number" class="chem-field-input" id="gasTempC" placeholder="\u00b0C" style="width:70px;flex:none" oninput="chemConvertTemp()">'+
      '<span>\u2192</span>'+
      '<input type="number" class="chem-field-input" id="gasTempK" placeholder="K" style="width:70px;flex:none" readonly>'+
      '<span style="font-size:0.72rem;color:var(--text2)">K = \u00b0C + 273,15</span>'+
    '</div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">p\u2081V\u2081 = p\u2082V\u2082</div>'+
      '<div class="chem-const-note">Boyles lag \u2014 konstant temperatur</div>'+
      _cfr('boylp1','Tryck p\u2081','Pa')+
      _cfr('boylV1','Volym V\u2081','dm\u00b3')+
      _cfr('boylp2','Tryck p\u2082','Pa')+
      _cfr('boylV2','Volym V\u2082','dm\u00b3')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcBoyle(\'p1\')">Beräkna p\u2081</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcBoyle(\'V1\')">Beräkna V\u2081</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcBoyle(\'p2\')">Beräkna p\u2082</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcBoyle(\'V2\')">Beräkna V\u2082</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'boyl\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="boylResult"></div>'+
      '<div class="chem-error" id="boylError"></div>'+
    '</div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">V\u2081 / T\u2081 = V\u2082 / T\u2082</div>'+
      '<div class="chem-const-note">Charles lag \u2014 konstant tryck | T i Kelvin</div>'+
      _cfr('charlV1','Volym V\u2081','dm\u00b3')+
      _cfr('charlT1','Temperatur T\u2081','K')+
      _cfr('charlV2','Volym V\u2082','dm\u00b3')+
      _cfr('charlT2','Temperatur T\u2082','K')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcCharles(\'V1\')">Beräkna V\u2081</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcCharles(\'T1\')">Beräkna T\u2081</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcCharles(\'V2\')">Beräkna V\u2082</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcCharles(\'T2\')">Beräkna T\u2082</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'charl\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="charlResult"></div>'+
      '<div class="chem-error" id="charlError"></div>'+
    '</div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">p\u2081 / T\u2081 = p\u2082 / T\u2082</div>'+
      '<div class="chem-const-note">Gay-Lussacs lag \u2014 konstant volym | T i Kelvin</div>'+
      _cfr('glp1','Tryck p\u2081','Pa')+
      _cfr('glT1','Temperatur T\u2081','K')+
      _cfr('glp2','Tryck p\u2082','Pa')+
      _cfr('glT2','Temperatur T\u2082','K')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcGayLussac(\'p1\')">Beräkna p\u2081</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcGayLussac(\'T1\')">Beräkna T\u2081</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcGayLussac(\'p2\')">Beräkna p\u2082</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcGayLussac(\'T2\')">Beräkna T\u2082</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'gl\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="glResult"></div>'+
      '<div class="chem-error" id="glError"></div>'+
    '</div>'+
    '</div>'+
  '</div>'+
  // ── ENTALPI
  '<div class="chem-panel" id="chemTool-enthalpy">'+
    _BACK+
    '<div style="padding:18px 20px">'+
    '<div class="chem-formula">Q = c \u00d7 m \u00d7 \u0394T</div>'+
    '<div class="chem-const-note">c (vatten) = 4,18 kJ/(kg\u00b7K) \u2014 låst konstant</div>'+
    _cfr('enthM','Massa vatten (m)','kg')+
    _cfr('enthDT','Temperaturändring (\u0394T)','K eller \u00b0C')+
    '<div class="chem-field-row">'+
      '<span class="chem-field-label">Spec. värmekapacitet</span>'+
      '<input class="chem-field-input" value="4,18" readonly style="color:var(--text2);cursor:default">'+
      '<span class="chem-field-unit">kJ/(kg\u00b7K)</span>'+
    '</div>'+
    '<div class="chem-btn-row">'+
      '<button class="chem-calc-btn" onclick="chemCalcEnthalpy()">Beräkna Q (kJ)</button>'+
      '<button class="chem-clear-btn" onclick="chemClear(\'enthalpy\')">Rensa</button>'+
    '</div>'+
    '<div class="chem-result" id="enthResult"></div>'+
    '<div class="chem-error" id="enthError"></div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">\u0394H\u00b0rxn = \u03a3\u0394H\u00b0f(prod) \u2212 \u03a3\u0394H\u00b0f(reak)</div>'+
      '<div class="chem-const-note">Ange bildningsentalpier separerade med kommatecken (ex: \u2212285.8, \u2212393.5)</div>'+
      '<div class="chem-field-row">'+
        '<span class="chem-field-label">Produkter \u0394H\u00b0f</span>'+
        '<input type="text" class="chem-field-input" id="hessProds" placeholder="\u2212285.8, \u2212393.5">'+
        '<span class="chem-field-unit">kJ/mol</span>'+
      '</div>'+
      '<div class="chem-field-row">'+
        '<span class="chem-field-label">Reaktanter \u0394H\u00b0f</span>'+
        '<input type="text" class="chem-field-input" id="hessReaks" placeholder="\u22120, \u2212110.5">'+
        '<span class="chem-field-unit">kJ/mol</span>'+
      '</div>'+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcHess()">Beräkna \u0394H\u00b0rxn</button>'+
        '<button class="chem-clear-btn" onclick="chemClearHess()">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="hessResult"></div>'+
      '<div class="chem-error" id="hessError"></div>'+
    '</div>'+
    '</div>'+
  '</div>'+
  // ── ELEKTROKEMI
  '<div class="chem-panel" id="chemTool-elektro">'+
    _BACK+
    '<div style="padding:18px 20px">'+
    '<div class="chem-formula">E\u00b0cell = E\u00b0katod \u2212 E\u00b0anod</div>'+
    _cfr('elEcell','E\u00b0cell','V')+
    _cfr('elEkat','E\u00b0katod','V')+
    _cfr('elEanod','E\u00b0anod','V')+
    '<div class="chem-btn-row">'+
      '<button class="chem-calc-btn" onclick="chemCalcEcell(\'Ecell\')">Beräkna E\u00b0cell</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcEcell(\'Ekat\')">Beräkna E\u00b0kat</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcEcell(\'Eanod\')">Beräkna E\u00b0anod</button>'+
      '<button class="chem-clear-btn" onclick="chemClear(\'el\')">Rensa</button>'+
    '</div>'+
    '<div class="chem-result" id="elResult"></div>'+
    '<div class="chem-error" id="elError"></div>'+
    '</div>'+
  '</div>'+
  // ── STÖKIOMETRI
  '<div class="chem-panel" id="chemTool-stoik">'+
    _BACK+
    '<div style="padding:18px 20px">'+
    '<div class="chem-formula">n_A / a = n_B / b</div>'+
    _cfr('stoNA','Substansmängd n_A','mol')+
    _cfr('stoA','Koefficient a','')+
    _cfr('stoNB','Substansmängd n_B','mol')+
    _cfr('stoB','Koefficient b','')+
    '<div class="chem-btn-row">'+
      '<button class="chem-calc-btn" onclick="chemCalcStoich(\'nA\')">Beräkna n_A</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcStoich(\'nB\')">Beräkna n_B</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcStoich(\'a\')">Beräkna a</button>'+
      '<button class="chem-calc-btn" onclick="chemCalcStoich(\'b\')">Beräkna b</button>'+
      '<button class="chem-clear-btn" onclick="chemClear(\'sto\')">Rensa</button>'+
    '</div>'+
    '<div class="chem-result" id="stoResult"></div>'+
    '<div class="chem-error" id="stoError"></div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">Utbyte = (faktisk / teoretisk) \u00d7 100%</div>'+
      _cfr('yieldFakt','Faktisk mängd','')+
      _cfr('yieldTeor','Teoretisk mängd','')+
      _cfr('yieldPct','Utbyte (%)','%')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcYield(\'pct\')">Beräkna utbyte</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcYield(\'fakt\')">Beräkna faktisk</button>'+
        '<button class="chem-calc-btn" onclick="chemCalcYield(\'teor\')">Beräkna teoretisk</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'yield\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="yieldResult"></div>'+
      '<div class="chem-error" id="yieldError"></div>'+
    '</div>'+
    '<div class="chem-sub-section">'+
      '<div class="chem-formula">Begränsande reagens</div>'+
      '<div class="chem-const-note">Ange substansmängd och koefficient för varje reaktant</div>'+
      _cfr('limN1','Substansmängd n\u2081','mol')+
      _cfr('limA1','Koefficient a\u2081','')+
      _cfr('limN2','Substansmängd n\u2082','mol')+
      _cfr('limA2','Koefficient a\u2082','')+
      '<div class="chem-btn-row">'+
        '<button class="chem-calc-btn" onclick="chemCalcLimReag()">Bestäm begränsande reagens</button>'+
        '<button class="chem-clear-btn" onclick="chemClear(\'lim\')">Rensa</button>'+
      '</div>'+
      '<div class="chem-result" id="limResult"></div>'+
      '<div class="chem-error" id="limError"></div>'+
    '</div>'+
    '</div>'+
  '</div>'+
  // ── MOLMASSA-RÄKNARE
  '<div class="chem-panel" id="chemTool-molar">'+
    _BACK+
    '<div style="padding:18px 20px">'+
    '<div class="chem-formula">Molmassa-räknare</div>'+
    '<div class="chem-field-row">'+
      '<span class="chem-field-label">Kemisk formel</span>'+
      '<input type="text" class="chem-field-input" id="molarFormula" placeholder="ex: H\u2082O, Ca(OH)\u2082, H\u2082SO\u2084" oninput="chemCalcMolar()" autocomplete="off" autocorrect="off" autocapitalize="off">'+
      '<span class="chem-field-unit"></span>'+
    '</div>'+
    '<div class="chem-const-note">Stöder vanliga siffror och \u2080\u2081\u2082... och parenteser som Ca(OH)\u2082.</div>'+
    '<div class="chem-result" id="molarResult"></div>'+
    '<div class="chem-error" id="molarError"></div>'+
    '</div>'+
  '</div>'
  );
}
