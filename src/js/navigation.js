// ═══════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════

function navTo(screenId) {
  if (screenId !== 'exerciseScreen') exStopPanelTimer();
  if (screenId !== 'tqScreen' && typeof tqStopTimer === 'function') tqStopTimer();
  // Restore Räkna UI if leaving luckor-from-home mode
  if (_luckorFromHome) {
    _luckorFromHome = false;
    var exHeader = document.querySelector('#exerciseScreen > .section-header');
    if (exHeader) exHeader.style.display = '';
    document.getElementById('exModeRow').style.display = '';
    if (screenId === 'exerciseScreen') switchExMode('rakna');
  }
  showScreen(screenId);
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.target === screenId);
  });
  window.scrollTo(0, 0);
}



// ── Init: nav buttons ──────────────────────────────────
let _exInited = false, _fmInited = false, _ptInited = false, _tqInited = false, _examInited = false, _calcInited = false, _tablesInited = false;

document.querySelectorAll('.nav-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const t = btn.dataset.target;
    navTo(t);
    if (t === 'exerciseScreen' && !_exInited) { _exInited = true; initExercise(); }
    if (t === 'tqScreen'       && !_tqInited) { _tqInited  = true; initTQ(); }
    if (t === 'examScreen'     && !_examInited) { _examInited = true; initExamPrep(); }
    if (t === 'formulaScreen'  && !_fmInited)  { _fmInited   = true; initFormulas(); }
    if (t === 'calcScreen'     && !_calcInited){ _calcInited = true; initCalc(); }
    if (t === 'periodicScreen' && !_ptInited)  { _ptInited   = true; initPeriodic(); }
    if (t === 'tablesScreen'  && !_tablesInited){ _tablesInited = true; initTables(); }
    if (t === 'theoryScreen') { renderTheory(); }
    if (t === 'planScreen') { ssGoTo(1); ssRenderTags(); }
    if (t === 'profileScreen') { renderProfile(); }
  });
});

// Close tag suggestions when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.ss-tag-input-wrap')) {
    const sug = document.getElementById('ssSuggestions');
    if (sug) sug.style.display = 'none';
  }
});




