// ── Theory search index & helpers ──

function theorySlug(text) {
  return text.toLowerCase()
    .replace(/å/g,'a').replace(/ä/g,'a').replace(/ö/g,'o')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}

// Element selector used consistently in both index build and render-time ID assignment
const _TH_SEL = 'h2,h3,p,li,dt,dd,blockquote,.formula-box,td,th';

// Build search index: one entry per element — covers ALL theory text
let _theorySearchIndex = null;
function buildTheorySearchIndex() {
  if (_theorySearchIndex) return _theorySearchIndex;
  _theorySearchIndex = [];
  const tmp = document.createElement('div');
  THEORY.forEach((t, ci) => {
    tmp.innerHTML = t.html;
    let curH2 = { text: t.cat, slug: '' };
    let curH3 = { text: '', slug: '' };
    tmp.querySelectorAll(_TH_SEL).forEach((el, ei) => {
      const text = el.textContent.trim();
      if (!text || text.length < 2) return;
      const tag = el.tagName.toLowerCase();
      if (tag === 'h2') {
        const slug = theorySlug(text);
        curH2 = { text, slug };
        curH3 = { text: '', slug: '' };
        _theorySearchIndex.push({
          catIdx: ci, cat: t.cat, icon: t.icon,
          isHeading: true, tag,
          heading: text, headingSlug: slug,
          text,
          anchor: 'th-' + slug
        });
      } else if (tag === 'h3') {
        const slug = theorySlug(text);
        curH3 = { text, slug };
        _theorySearchIndex.push({
          catIdx: ci, cat: t.cat, icon: t.icon,
          isHeading: true, tag,
          heading: text, headingSlug: slug,
          text,
          anchor: 'th-' + slug
        });
      } else {
        const nearHeading = curH3.text || curH2.text;
        const nearSlug   = curH3.slug  || curH2.slug;
        _theorySearchIndex.push({
          catIdx: ci, cat: t.cat, icon: t.icon,
          isHeading: false, tag,
          heading: nearHeading, headingSlug: nearSlug,
          text,
          anchor: 'th-ei-' + ci + '-' + ei
        });
      }
    });
  });
  return _theorySearchIndex;
}

// Reset index when THEORY changes (shouldn't normally happen at runtime)
function resetTheorySearchIndex() { _theorySearchIndex = null; }

function renderTheory(scrollToSlug) {
  const t = THEORY[theoryIdx];
  const contentEl = document.getElementById('theoryContent');
  contentEl.innerHTML = t.html + `
    <div class="theory-pager">
      <button ${theoryIdx===0?'disabled':''} id="theoryPrev">← Föregående</button>
      <button class="btn-primary" id="theoryStudy">Öva flashcards</button>
      <button ${theoryIdx===THEORY.length-1?'disabled':''} id="theoryNext">Nästa →</button>
    </div>`;

  // Assign stable IDs to all body elements for search navigation
  // (Must run before TOC injection so TOC li elements aren't counted)
  contentEl.querySelectorAll(_TH_SEL).forEach((el, ei) => {
    const tag = el.tagName.toLowerCase();
    if (tag !== 'h2' && tag !== 'h3') {
      el.id = 'th-ei-' + theoryIdx + '-' + ei;
    }
  });

  // Add IDs to all h2/h3 headings
  const headings = contentEl.querySelectorAll('h2, h3');
  const tocItems = [];
  headings.forEach(h => {
    const slug = theorySlug(h.textContent.trim());
    h.id = 'th-' + slug;
    if (h.tagName === 'H3') {
      tocItems.push({ slug, text: h.textContent.trim() });
    }
  });

  // Inject TOC after the first .theory-intro paragraph (or after h2 if no intro)
  if (tocItems.length > 1) {
    const introEl = contentEl.querySelector('.theory-intro') || contentEl.querySelector('h2');
    if (introEl) {
      const tocHTML = `
        <button class="theory-toc-toggle" id="tocToggle">
          <span class="toc-arrow">▶</span> Innehåll (${tocItems.length} avsnitt)
        </button>
        <ul class="theory-toc-list" id="tocList">
          ${tocItems.map(it => `<li><a href="#th-${it.slug}" data-slug="${it.slug}">${it.text}</a></li>`).join('')}
        </ul>`;
      introEl.insertAdjacentHTML('afterend', tocHTML);
    }
  }

  buildTheoryNav();

  // Scroll handling
  if (!scrollToSlug) {
    contentEl.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // Pager buttons
  const prev = document.getElementById('theoryPrev');
  const next = document.getElementById('theoryNext');
  const study = document.getElementById('theoryStudy');

  if (prev) prev.addEventListener('click', () => { theoryIdx--; renderTheory(); });
  if (next) next.addEventListener('click', () => { theoryIdx++; renderTheory(); });
  if (study) study.addEventListener('click', () => {
    state.selectedCats = new Set([THEORY[theoryIdx].cat]);
    showScreen('homeScreen');
    buildCategoryGrid();
    updateHomeStats();
    showToast('Kategori vald – tryck Starta!');
  });

  // TOC toggle
  const tocToggle = document.getElementById('tocToggle');
  const tocList = document.getElementById('tocList');
  if (tocToggle && tocList) {
    tocToggle.addEventListener('click', () => {
      tocToggle.classList.toggle('open');
      tocList.classList.toggle('open');
    });
    // TOC link clicks
    tocList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const slug = a.dataset.slug;
        const target = document.getElementById('th-' + slug);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.classList.remove('th-highlight');
          void target.offsetWidth; // force reflow
          target.classList.add('th-highlight');
        }
      });
    });
    // Scroll tracking for active TOC item
    theorySetupScrollTracking(tocList, contentEl);
  }

  // If we need to scroll to a specific heading after render
  if (scrollToSlug) {
    setTimeout(() => {
      const target = document.getElementById('th-' + scrollToSlug);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.classList.remove('th-highlight');
        void target.offsetWidth;
        target.classList.add('th-highlight');
      }
    }, 80);
  }
}

// Scroll tracking: highlight active TOC section
function theorySetupScrollTracking(tocList, contentEl) {
  const links = tocList.querySelectorAll('a');
  if (!links.length) return;
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const headings = contentEl.querySelectorAll('h3[id]');
      let activeSlug = null;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      headings.forEach(h => {
        const rect = h.getBoundingClientRect();
        if (rect.top <= 120) activeSlug = h.id.replace('th-','');
      });
      links.forEach(a => {
        a.classList.toggle('toc-active', a.dataset.slug === activeSlug);
      });
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  // Store cleanup ref so we can remove on next render
  if (window._theoryScrollCleanup) window._theoryScrollCleanup();
  window._theoryScrollCleanup = () => window.removeEventListener('scroll', onScroll);
}

// ── Theory search functionality ──

let _theorySearchDebounce = null;

// Scroll and highlight a single element by id
function theoryScrollTo(anchor) {
  const target = document.getElementById(anchor);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  target.classList.remove('th-highlight');
  void target.offsetWidth; // force reflow
  target.classList.add('th-highlight');
  setTimeout(() => target.classList.remove('th-highlight'), 3000);
}

// Generate a snippet showing ~12 words of context around the match
function makeSnippet(text, query, context) {
  context = context || 12;
  const lq = query.toLowerCase();
  const lt = text.toLowerCase();
  const idx = lt.indexOf(lq);
  if (idx < 0) return text.length > 160 ? text.slice(0, 160).replace(/\s+\S*$/, '') + '…' : text;
  const words = text.split(/\s+/);
  let charCount = 0, matchWord = 0;
  for (let i = 0; i < words.length; i++) {
    if (charCount + words[i].length >= idx) { matchWord = i; break; }
    charCount += words[i].length + 1;
  }
  const start = Math.max(0, matchWord - context);
  const end   = Math.min(words.length, matchWord + context + 1);
  return (start > 0 ? '…' : '') + words.slice(start, end).join(' ') + (end < words.length ? '…' : '');
}

function theoryEscHtml(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function theoryDoSearch(query) {
  const results = document.getElementById('theorySearchResults');
  const clearBtn = document.getElementById('theorySearchClear');
  if (!query || query.length < 1) {
    results.style.display = 'none';
    clearBtn.style.display = query ? '' : 'none';
    return;
  }
  clearBtn.style.display = '';
  const index = buildTheorySearchIndex();
  const q = query.toLowerCase();
  const matches = index.filter(item => item.text.toLowerCase().includes(q));

  if (matches.length === 0) {
    results.innerHTML = '<div class="tsr-count">0 träffar</div><div class="tsr-empty">Inga träffar för "' + theoryEscHtml(query) + '"</div>';
    results.style.display = '';
    return;
  }

  // Count header (sticky)
  const plural = matches.length === 1 ? 'träff' : 'träffar';
  let html = '<div class="tsr-count">' + matches.length + ' ' + plural + ' för "' + theoryEscHtml(query) + '"</div>';

  // Group by category (preserve encounter order)
  const groups = {};
  const catOrder = [];
  matches.forEach(m => {
    if (!groups[m.catIdx]) { groups[m.catIdx] = { cat: m.cat, icon: m.icon, items: [] }; catOrder.push(m.catIdx); }
    groups[m.catIdx].items.push(m);
  });

  catOrder.forEach(ci => {
    const g = groups[ci];
    html += '<div class="tsr-group-label">' + g.icon + ' ' + theoryEscHtml(g.cat) + '</div>';
    g.items.forEach(item => {
      // Title: for headings show the heading; for body text show the nearest section heading
      const titleText = item.isHeading ? item.text : item.heading;
      const titleHtml = highlightMatch(titleText, q);
      // Breadcrumb: category [→ heading] for body-text entries
      const crumb = item.isHeading
        ? theoryEscHtml(item.cat)
        : theoryEscHtml(item.cat) + (item.heading ? ' → ' + theoryEscHtml(item.heading) : '');
      // Snippet with context around the match
      const snippetText = item.isHeading ? '' : makeSnippet(item.text, query);
      const snippetHtml = snippetText ? highlightMatch(snippetText, q) : '';
      html +=
        '<button class="tsr-item" data-cat-idx="' + item.catIdx + '" data-anchor="' + item.anchor + '">' +
          '<div class="tsr-item-title">' + titleHtml + '</div>' +
          '<div class="tsr-item-meta">' + crumb + '</div>' +
          (snippetHtml ? '<div class="tsr-item-snippet">' + snippetHtml + '</div>' : '') +
        '</button>';
    });
  });

  results.innerHTML = html;
  results.style.display = '';

  // Click handlers for results
  results.querySelectorAll('.tsr-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const catIdx = parseInt(btn.dataset.catIdx);
      const anchor = btn.dataset.anchor;
      results.style.display = 'none';
      document.getElementById('theorySearchInput').value = '';
      document.getElementById('theorySearchClear').style.display = 'none';
      theoryIdx = catIdx;
      renderTheory();
      // Scroll to specific element after render
      setTimeout(() => theoryScrollTo(anchor), 120);
    });
  });
}

function highlightMatch(text, query) {
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp('(' + escaped + ')', 'gi');
  return theoryEscHtml(text).replace(regex, '<mark>$1</mark>');
}

// Wire up search events
(function initTheorySearch() {
  const input = document.getElementById('theorySearchInput');
  const clearBtn = document.getElementById('theorySearchClear');
  const results = document.getElementById('theorySearchResults');
  if (!input) return;

  input.addEventListener('input', () => {
    clearTimeout(_theorySearchDebounce);
    _theorySearchDebounce = setTimeout(() => {
      theoryDoSearch(input.value.trim());
    }, 150);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.display = 'none';
    results.style.display = 'none';
    input.focus();
  });

  // Close dropdown on click outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.theory-search-wrap')) {
      results.style.display = 'none';
    }
  });

  // Reopen results on focus if there's a query
  input.addEventListener('focus', () => {
    if (input.value.trim().length >= 1) {
      theoryDoSearch(input.value.trim());
    }
  });

  // Keyboard navigation
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      results.style.display = 'none';
      input.blur();
    }
  });
})();

document.getElementById('theoryBackBtn').addEventListener('click', () => {
  // Clean up scroll tracking
  if (window._theoryScrollCleanup) { window._theoryScrollCleanup(); window._theoryScrollCleanup = null; }
  navTo('homeScreen');
});


// ── Teori från grunden ──

let _tgInited = false;

function tgSwitchTab(name) {
  document.querySelectorAll('.theory-subtab').forEach(function(t) {
    t.classList.toggle('active', t.textContent.trim() === (name === 'snabb' ? 'Snabbreferens' : 'Teori från grunden'));
  });
  document.querySelectorAll('.theory-subpanel').forEach(function(p) {
    p.classList.toggle('active', p.id === 'teorypanel-' + name);
  });
  if (name === 'grund' && !_tgInited) tgInit();
}

function tgInit() {
  if (_tgInited) return;
  _tgInited = true;
  var s = document.createElement('script');
  s.src = 'src/teori-fran-grunden-content.js';
  s.onload = function() {
    document.getElementById('tgContentArea').innerHTML = TG_RAW_HTML;
    tgSetupObserver();
  };
  document.head.appendChild(s);
}

function tgScrollTo(el) {
  var href = el.getAttribute('href');
  var id = href.replace('#', '');
  var target = document.getElementById('tgContentArea').querySelector('[id="' + id + '"]');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.innerWidth <= 680) tgCloseSidebar();
  }
  return false;
}

var _tgSearchTimer;
function tgSearch(q) {
  clearTimeout(_tgSearchTimer);
  _tgSearchTimer = setTimeout(function() { tgRunSearch(q); }, 200);
}

function tgRunSearch(q) {
  var area = document.getElementById('tgContentArea');
  var noRes = document.getElementById('tgNoResults');
  area.innerHTML = TG_RAW_HTML;
  var countEl = document.getElementById('tgSearchCount');
  if (!q.trim()) {
    area.style.display = '';
    noRes.style.display = 'none';
    countEl.textContent = '';
    return;
  }
  var re = new RegExp(tgEscRe(q), 'gi');
  var hits = 0;
  function walk(node) {
    if (node.nodeType === 3) {
      var m = node.textContent.match(re);
      if (m) {
        hits += m.length;
        var s = document.createElement('span');
        s.innerHTML = node.textContent.replace(re, function(t) { return '<mark>' + t + '</mark>'; });
        node.parentNode.replaceChild(s, node);
      }
    } else if (!['SCRIPT','STYLE','MARK'].includes(node.nodeName)) {
      Array.from(node.childNodes).forEach(walk);
    }
  }
  walk(area);
  countEl.textContent = hits ? hits + ' träffar' : '';
  noRes.style.display = hits ? 'none' : '';
  area.style.display = hits ? '' : 'none';
  if (hits) {
    var first = area.querySelector('mark');
    if (first) first.scrollIntoView({ block: 'center' });
  }
}

function tgEscRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

// Horisontell scroll-fade för tab-rader
function initScrollFade(el) {
  if (!el) return;
  function check() {
    el.classList.toggle('scroll-end', el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }
  el.addEventListener('scroll', check, { passive: true });
  check();
  var active = el.querySelector('.active');
  if (active) active.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
}
document.querySelectorAll('.sp-tabs').forEach(initScrollFade);

function tgToggleSidebar() {
  document.getElementById('tgSidebar').classList.toggle('open');
  document.getElementById('tgOverlay').classList.toggle('active');
}
function tgCloseSidebar() {
  document.getElementById('tgSidebar').classList.remove('open');
  document.getElementById('tgOverlay').classList.remove('active');
}

function tgSetupObserver() {
  var links = document.querySelectorAll('.tg-sidebar a');
  if (!window.IntersectionObserver) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var id = e.target.id;
        links.forEach(function(a) {
          var href = a.getAttribute('href') || '';
          a.classList.toggle('active', href === '#' + id);
        });
      }
    });
  }, { root: document.getElementById('tgMain'), rootMargin: '-10% 0px -75% 0px' });
  document.querySelectorAll('#tgContentArea h2[id], #tgContentArea h3[id]').forEach(function(h) {
    obs.observe(h);
  });
}

// Sidebar toggle (mobile + desktop collapse)
(function() {
  var SIDEBAR_KEY = 'kemi1_sidebar_state';
  var sidebar = document.querySelector('.sidebar');
  var appMain = document.querySelector('.app-main');
  var collapseBtn = document.getElementById('sidebarCollapseBtn');
  var toggleBtn = document.getElementById('sidebarToggleBtn');
  var overlay = document.getElementById('sidebarOverlay');

  if (!sidebar || !appMain) return;

  function isDesktop() { return window.innerWidth > 768; }

  function applyCollapsed(collapsed) {
    if (collapsed) {
      sidebar.classList.add('sidebar--collapsed');
      appMain.classList.add('app-main--collapsed');
      if (collapseBtn) {
        collapseBtn.innerHTML = '&#8594;';
        collapseBtn.setAttribute('aria-label', 'Visa meny');
      }
    } else {
      sidebar.classList.remove('sidebar--collapsed');
      appMain.classList.remove('app-main--collapsed');
      if (collapseBtn) {
        collapseBtn.innerHTML = '&#8592;';
        collapseBtn.setAttribute('aria-label', 'Dölj meny');
      }
    }
  }

  // Restore desktop state from localStorage
  if (isDesktop()) {
    var saved = localStorage.getItem(SIDEBAR_KEY);
    applyCollapsed(saved === 'collapsed');
  }

  // Desktop collapse button
  if (collapseBtn) {
    collapseBtn.addEventListener('click', function() {
      var willCollapse = !sidebar.classList.contains('sidebar--collapsed');
      applyCollapsed(willCollapse);
      localStorage.setItem(SIDEBAR_KEY, willCollapse ? 'collapsed' : 'expanded');
    });
  }

  // Mobile hamburger
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }

  // On resize: re-apply desktop state, clear mobile open state
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (isDesktop()) {
        sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        var saved = localStorage.getItem(SIDEBAR_KEY);
        applyCollapsed(saved === 'collapsed');
      } else {
        applyCollapsed(false);
      }
    }, 100);
  });
})();

// ═══════════════════════════════════════════════════════
//  TABELLER
// ═══════════════════════════════════════════════════════

var TABLES_META = [
  { id: 'spanningsserien', icon: '⚡', name: 'Spänningsserien',   desc: 'Metaller ordnade från oädlast till ädlast',    color: '#f59e0b' },
  { id: 'syror',           icon: '🧪', name: 'Syror och baser',   desc: 'pKa-värden för vanliga syror',                 color: '#6366f1' },
  { id: 'bindningar',      icon: '🔥', name: 'Bindningsenergier', desc: 'Energi som krävs för att bryta bindningar',    color: '#ef4444' },
  { id: 'termokemi',       icon: '♨️', name: 'Termokemi',         desc: 'Bildningsentalpier för vanliga ämnen',         color: '#10b981' },
  { id: 'loslighet',       icon: '🔬', name: 'Löslighet',         desc: 'Löslighetsprodukter (Ksp) för salter',         color: '#3b82f6' }
];

var SPANNINGS_DATA = [
  { name: 'Litium',    sym: 'Li', ion: 'Li⁺',  eo: -3.04, rel: 'Oädlare' },
  { name: 'Kalium',    sym: 'K',  ion: 'K⁺',   eo: -2.93, rel: 'Oädlare' },
  { name: 'Kalcium',   sym: 'Ca', ion: 'Ca²⁺', eo: -2.87, rel: 'Oädlare' },
  { name: 'Natrium',   sym: 'Na', ion: 'Na⁺',  eo: -2.71, rel: 'Oädlare' },
  { name: 'Magnesium', sym: 'Mg', ion: 'Mg²⁺', eo: -2.37, rel: 'Oädlare' },
  { name: 'Aluminium', sym: 'Al', ion: 'Al³⁺', eo: -1.66, rel: 'Oädlare' },
  { name: 'Zink',      sym: 'Zn', ion: 'Zn²⁺', eo: -0.76, rel: 'Oädlare' },
  { name: 'Järn',      sym: 'Fe', ion: 'Fe²⁺', eo: -0.44, rel: 'Oädlare' },
  { name: 'Nickel',    sym: 'Ni', ion: 'Ni²⁺', eo: -0.26, rel: 'Oädlare' },
  { name: 'Tenn',      sym: 'Sn', ion: 'Sn²⁺', eo: -0.14, rel: 'Oädlare' },
  { name: 'Bly',       sym: 'Pb', ion: 'Pb²⁺', eo: -0.13, rel: 'Oädlare' },
  { name: 'VÄTE',      sym: 'H',  ion: 'H⁺',   eo:  0.00, rel: 'Referens', isRef: true },
  { name: 'Koppar',    sym: 'Cu', ion: 'Cu²⁺', eo:  0.34, rel: 'Ädlare' },
  { name: 'Silver',    sym: 'Ag', ion: 'Ag⁺',  eo:  0.80, rel: 'Ädlare' },
  { name: 'Platina',   sym: 'Pt', ion: 'Pt²⁺', eo:  1.19, rel: 'Ädlare' },
  { name: 'Guld',      sym: 'Au', ion: 'Au³⁺', eo:  1.52, rel: 'Ädlare' }
];

var SYROR_DATA = [
  { name: 'Saltsyra',        formula: 'HCl',          ka: '&gt;&gt; 1',       pka: '&lt;&lt; 0', pkaNum: null,  styrka: 'Stark',        strong: true },
  { name: 'Salpetersyra',    formula: 'HNO₃',         ka: '&gt;&gt; 1',       pka: '&lt;&lt; 0', pkaNum: null,  styrka: 'Stark',        strong: true },
  { name: 'Svavelsyra (1)',  formula: 'H₂SO₄',        ka: '&gt;&gt; 1',       pka: '&lt;&lt; 0', pkaNum: null,  styrka: 'Stark',        strong: true },
  { name: 'Oxalsyra (1)',    formula: 'H₂C₂O₄',       ka: '5,9 × 10⁻²',  pka: '1,23',       pkaNum: 1.23,  styrka: 'Svag' },
  { name: 'Fosforsyra (1)',  formula: 'H₃PO₄',        ka: '7,5 × 10⁻³',  pka: '2,12',       pkaNum: 2.12,  styrka: 'Svag' },
  { name: 'Citronsyra (1)', formula: 'H₃C₆H₅O₇',     ka: '7,4 × 10⁻⁴',  pka: '3,13',       pkaNum: 3.13,  styrka: 'Svag' },
  { name: 'Myrsyra',        formula: 'HCOOH',          ka: '1,8 × 10⁻⁴',  pka: '3,74',       pkaNum: 3.74,  styrka: 'Svag' },
  { name: 'Benzoesyra',     formula: 'C₆H₅COOH',      ka: '6,3 × 10⁻⁵',  pka: '4,20',       pkaNum: 4.20,  styrka: 'Svag' },
  { name: 'Ättiksyra',      formula: 'CH₃COOH',       ka: '1,8 × 10⁻⁵',  pka: '4,74',       pkaNum: 4.74,  styrka: 'Svag' },
  { name: 'Kolsyra (1)',    formula: 'H₂CO₃',          ka: '4,3 × 10⁻⁷',  pka: '6,37',       pkaNum: 6.37,  styrka: 'Svag' },
  { name: 'Vätesulfid (1)', formula: 'H₂S',            ka: '1,0 × 10⁻⁷',  pka: '7,00',       pkaNum: 7.00,  styrka: 'Svag' },
  { name: 'Ammoniumjon',    formula: 'NH₄⁺',           ka: '5,6 × 10⁻¹⁰', pka: '9,25',       pkaNum: 9.25,  styrka: 'Svag' },
  { name: 'Kolsyra (2)',    formula: 'HCO₃⁻',          ka: '4,7 × 10⁻¹¹', pka: '10,33',      pkaNum: 10.33, styrka: 'Svag' },
  { name: 'Vatten',         formula: 'H₂O',            ka: '1,0 × 10⁻¹⁴', pka: '14,0',       pkaNum: 14.0,  styrka: 'Mycket svag' }
];

var BINDING_DATA = [
  { bond: 'H–H',  type: 'Enkel',   energy: 436, length: 74 },
  { bond: 'H–C',  type: 'Enkel',   energy: 414, length: 109 },
  { bond: 'H–N',  type: 'Enkel',   energy: 389, length: 101 },
  { bond: 'H–O',  type: 'Enkel',   energy: 464, length: 96 },
  { bond: 'H–F',  type: 'Enkel',   energy: 569, length: 92 },
  { bond: 'H–Cl', type: 'Enkel',   energy: 432, length: 127 },
  { bond: 'C–C',  type: 'Enkel',   energy: 347, length: 154 },
  { bond: 'C–N',  type: 'Enkel',   energy: 305, length: 147 },
  { bond: 'C–O',  type: 'Enkel',   energy: 360, length: 143 },
  { bond: 'C–F',  type: 'Enkel',   energy: 485, length: 135 },
  { bond: 'C–Cl', type: 'Enkel',   energy: 339, length: 177 },
  { bond: 'N–N',  type: 'Enkel',   energy: 163, length: 145 },
  { bond: 'O–O',  type: 'Enkel',   energy: 157, length: 148 },
  { bond: 'N–O',  type: 'Enkel',   energy: 201, length: 140 },
  { bond: 'C=C',  type: 'Dubbel',  energy: 614, length: 134 },
  { bond: 'C=N',  type: 'Dubbel',  energy: 615, length: 128 },
  { bond: 'C=O',  type: 'Dubbel',  energy: 799, length: 120 },
  { bond: 'N=N',  type: 'Dubbel',  energy: 418, length: 125 },
  { bond: 'O=O',  type: 'Dubbel',  energy: 498, length: 121 },
  { bond: 'C≡C',  type: 'Trippel', energy: 839, length: 120 },
  { bond: 'C≡N',  type: 'Trippel', energy: 891, length: 116 },
  { bond: 'N≡N',  type: 'Trippel', energy: 945, length: 110 }
];

var TERMO_DATA = [
  { name: 'Vatten',             formula: 'H₂O',     fas: 'l', dhf: -285.8 },
  { name: 'Vatten',             formula: 'H₂O',     fas: 'g', dhf: -241.8 },
  { name: 'Koldioxid',          formula: 'CO₂',     fas: 'g', dhf: -393.5 },
  { name: 'Kolmonoxid',         formula: 'CO',      fas: 'g', dhf: -110.5 },
  { name: 'Ammoniak',           formula: 'NH₃',     fas: 'g', dhf: -46.1 },
  { name: 'Väteklorid',         formula: 'HCl',     fas: 'g', dhf: -92.3 },
  { name: 'Svaveldioxid',       formula: 'SO₂',     fas: 'g', dhf: -296.8 },
  { name: 'Svaveltioxid',       formula: 'SO₃',     fas: 'g', dhf: -395.7 },
  { name: 'Kväveoxid',          formula: 'NO',      fas: 'g', dhf: 90.3 },
  { name: 'Kvävedioxid',        formula: 'NO₂',     fas: 'g', dhf: 33.2 },
  { name: 'Metan',              formula: 'CH₄',     fas: 'g', dhf: -74.8 },
  { name: 'Etan',               formula: 'C₂H₆',    fas: 'g', dhf: -84.7 },
  { name: 'Eten',               formula: 'C₂H₄',    fas: 'g', dhf: 52.5 },
  { name: 'Etin',               formula: 'C₂H₂',    fas: 'g', dhf: 227.4 },
  { name: 'Bensen',             formula: 'C₆H₆',    fas: 'l', dhf: 49.0 },
  { name: 'Metanol',            formula: 'CH₃OH',   fas: 'l', dhf: -238.7 },
  { name: 'Etanol',             formula: 'C₂H₅OH',  fas: 'l', dhf: -277.7 },
  { name: 'Natriumklorid',      formula: 'NaCl',    fas: 's', dhf: -411.2 },
  { name: 'Kalciumkarbonat',    formula: 'CaCO₃',   fas: 's', dhf: -1206.9 },
  { name: 'Järn(III)oxid',      formula: 'Fe₂O₃',   fas: 's', dhf: -824.2 }
];

var LOSLIGHET_DATA = [
  { name: 'Silverklorid',      formula: 'AgCl',     ksp: '1,8 × 10⁻¹⁰', pksp: '9,74',  los: 'Svårlösligt' },
  { name: 'Silverbromid',      formula: 'AgBr',     ksp: '5,0 × 10⁻¹³', pksp: '12,30', los: 'Svårlösligt' },
  { name: 'Silverjodid',       formula: 'AgI',      ksp: '8,5 × 10⁻¹⁷', pksp: '16,07', los: 'Svårlösligt' },
  { name: 'Bariumsulfat',      formula: 'BaSO₄',    ksp: '1,1 × 10⁻¹⁰', pksp: '9,96',  los: 'Svårlösligt' },
  { name: 'Kalciumkarbonat',   formula: 'CaCO₃',    ksp: '3,3 × 10⁻⁹',  pksp: '8,48',  los: 'Svårlösligt' },
  { name: 'Kalciumfluorid',    formula: 'CaF₂',     ksp: '3,9 × 10⁻¹¹', pksp: '10,41', los: 'Svårlösligt' },
  { name: 'Kalciumhydroxid',   formula: 'Ca(OH)₂',  ksp: '4,7 × 10⁻⁶',  pksp: '5,33',  los: 'Delvis lösligt' },
  { name: 'Koppar(II)hydroxid',formula: 'Cu(OH)₂',  ksp: '2,2 × 10⁻²⁰', pksp: '19,66', los: 'Svårlösligt' },
  { name: 'Järn(III)hydroxid', formula: 'Fe(OH)₃',  ksp: '2,8 × 10⁻³⁹', pksp: '38,55', los: 'Svårlösligt' },
  { name: 'Magnesiumhydroxid', formula: 'Mg(OH)₂',  ksp: '5,6 × 10⁻¹²', pksp: '11,25', los: 'Svårlösligt' },
  { name: 'Blysulfat',         formula: 'PbSO₄',    ksp: '1,6 × 10⁻⁸',  pksp: '7,80',  los: 'Svårlösligt' },
  { name: 'Zinkhydroxid',      formula: 'Zn(OH)₂',  ksp: '3,0 × 10⁻¹⁷', pksp: '16,52', los: 'Svårlösligt' }
];

function initTables() {
  renderTablesOverview();
}

function renderTablesOverview() {
  var grid = document.getElementById('tablesGrid');
  if (!grid) return;
  var html = '';
  for (var i = 0; i < TABLES_META.length; i++) {
    var t = TABLES_META[i];
    var lightBg = hexToRgba(t.color, 0.13);
    html += '<div class="exam-card" style="--exam-accent:' + t.color + ';--exam-accent-light:' + lightBg + '" onclick="tablesOpenTable(\'' + t.id + '\')">';
    html += '<div class="exam-card-head"><div class="exam-card-icon">' + t.icon + '</div>';
    html += '<div><div class="exam-card-title">' + t.name + '</div></div></div>';
    html += '<div class="exam-card-desc">' + t.desc + '</div></div>';
  }
  grid.innerHTML = html;
}

function tablesOpenTable(id) {
  document.getElementById('tablesOverview').style.display = 'none';
  document.getElementById('tablesDetail').style.display = '';
  var content = document.getElementById('tablesDetailContent');
  if (id === 'spanningsserien') _tblRenderSpannings(content);
  else if (id === 'syror')      _tblRenderSyror(content);
  else if (id === 'bindningar') _tblRenderBindningar(content);
  else if (id === 'termokemi')  _tblRenderTermokemi(content);
  else if (id === 'loslighet')  _tblRenderLoslighet(content);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function tablesBack() {
  document.getElementById('tablesOverview').style.display = '';
  document.getElementById('tablesDetail').style.display = 'none';
  document.getElementById('tablesDetailContent').innerHTML = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function _tblSearchWrap(inputId) {
  return '<div class="tbl-search-wrap"><input type="search" class="tbl-search-input" id="' + inputId + '" placeholder="Sök…" autocomplete="off" spellcheck="false"><button class="tbl-search-clear" title="Rensa sökning">✕</button></div>';
}

function _tblInitSearch(inputId, tbodyId) {
  var wrap = document.getElementById(inputId);
  if (!wrap) return;
  var clearBtn = wrap.nextElementSibling;
  function apply() {
    var q = wrap.value.trim().toLowerCase();
    if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';
    var tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    tbody.querySelectorAll('tr').forEach(function(row) {
      row.classList.toggle('tbl-dimmed', q.length > 0 && !row.textContent.toLowerCase().includes(q));
    });
  }
  wrap.addEventListener('input', apply);
  wrap.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { wrap.value = ''; apply(); }
  });
  if (clearBtn) clearBtn.addEventListener('click', function() { wrap.value = ''; apply(); wrap.focus(); });
}

function _tblHeader(icon, title) {
  return '<div class="section-header" style="margin-top:0"><div class="section-header-icon">' + icon + '</div><div class="section-header-text">' + title + '</div></div>';
}

function _tblUsage(text) {
  return '<div class="tbl-usage">' + text + '</div>';
}

function _tblRenderSpannings(el) {
  var min = -3.04, max = 1.52, range = max - min;
  var scale = '<div class="tbl-vs-wrap">';
  scale += '<div class="tbl-vs-title">Spänningsskala — E° (V)</div>';
  scale += '<div class="tbl-vs-labels"><span>← Oädlare (reagerar med syra)</span><span>(reagerar ej med syra) Ädlare →</span></div>';
  scale += '<div class="tbl-vs-track"><div class="tbl-vs-bar"></div>';
  var hPct = ((0 - min) / range * 100).toFixed(2);
  scale += '<div class="tbl-vs-h-line" style="left:' + hPct + '%"><div class="tbl-vs-h-label">H₂ 0 V</div></div>';
  for (var i = 0; i < SPANNINGS_DATA.length; i++) {
    var d = SPANNINGS_DATA[i];
    var pct = ((d.eo - min) / range * 100).toFixed(2);
    var cls = d.isRef ? 'tbl-dot-ref' : (d.eo < 0 ? 'tbl-dot-base' : 'tbl-dot-noble');
    var eoStr = (d.eo >= 0 ? '+' : '') + d.eo.toFixed(2);
    scale += '<div class="tbl-vs-dot ' + cls + '" style="left:' + pct + '%"><span class="tbl-vs-tooltip">' + d.sym + ' ' + eoStr + ' V</span></div>';
  }
  scale += '</div></div>';

  var rows = '';
  for (var i = 0; i < SPANNINGS_DATA.length; i++) {
    var d = SPANNINGS_DATA[i];
    var eoStr = (d.eo >= 0 ? '+' : '') + d.eo.toFixed(2);
    rows += '<tr' + (d.isRef ? ' class="tbl-h-ref"' : '') + '>';
    rows += '<td>' + d.name + '</td><td><strong>' + d.sym + '</strong></td><td>' + d.ion + '</td><td>' + eoStr + '</td><td>' + d.rel + (d.isRef ? ' ◀' : '') + '</td></tr>';
  }

  el.innerHTML =
    _tblHeader('⚡', 'Spänningsserien') +
    scale +
    _tblUsage('⚡ Används vid redox — metall till vänster om en jon reduceras bort av jonen. Väte (H) är nollpunkten.') +
    _tblSearchWrap('tblSpSearch') +
    '<div class="tbl-table-wrap"><table class="tbl-table"><thead><tr><th>Metall</th><th>Symbol</th><th>Jon</th><th>E° (V)</th><th>Förhållande till H</th></tr></thead><tbody id="tbl-span-body">' + rows + '</tbody></table></div>';
  _tblInitSearch('tblSpSearch', 'tbl-span-body');
}

function _tblRenderSyror(el) {
  var rows = '';
  for (var i = 0; i < SYROR_DATA.length; i++) {
    var d = SYROR_DATA[i];
    rows += '<tr' + (d.strong ? ' class="tbl-strong-acid"' : '') + '>';
    rows += '<td>' + d.name + '</td><td><em>' + d.formula + '</em></td><td>' + d.ka + '</td><td>' + d.pka + '</td><td>' + d.styrka + '</td></tr>';
  }

  var thermo = '<div class="tbl-thermo"><div class="tbl-thermo-title">pKa<br>0–14</div><div class="tbl-thermo-track"><div class="tbl-thermo-bar"></div>';
  thermo += '<div class="tbl-thermo-tick" style="top:0%">0</div>';
  thermo += '<div class="tbl-thermo-tick" style="top:50%">7</div>';
  thermo += '<div class="tbl-thermo-tick" style="top:100%">14</div>';
  for (var i = 0; i < SYROR_DATA.length; i++) {
    var d = SYROR_DATA[i];
    if (d.pkaNum === null) continue;
    var pct = Math.min(100, Math.max(0, d.pkaNum / 14 * 100)).toFixed(1);
    thermo += '<div class="tbl-thermo-dot" style="top:' + pct + '%" title="' + d.name + ' pKa=' + d.pka + '"><span class="tbl-thermo-dot-label">' + d.pka + '</span></div>';
  }
  thermo += '</div></div>';

  el.innerHTML =
    _tblHeader('🧪', 'Syror och baser — pKa') +
    _tblUsage('🧪 pKa visar hur svag syran är — högt pKa = svagare syra. Används för att beräkna pH i lösningar av svaga syror.') +
    _tblSearchWrap('tblSyrSearch') +
    '<div class="tbl-syror-layout"><div class="tbl-table-wrap" style="flex:1;min-width:0"><table class="tbl-table"><thead><tr><th>Syra</th><th>Formel</th><th>Ka</th><th>pKa</th><th>Styrka</th></tr></thead><tbody id="tbl-syror-body">' + rows + '</tbody></table></div>' + thermo + '</div>';
  _tblInitSearch('tblSyrSearch', 'tbl-syror-body');
}

function _tblRenderBindningar(el) {
  var rows = '';
  for (var i = 0; i < BINDING_DATA.length; i++) {
    var d = BINDING_DATA[i];
    var cls = d.type === 'Dubbel' ? ' class="tbl-bond-double"' : (d.type === 'Trippel' ? ' class="tbl-bond-triple"' : '');
    rows += '<tr' + cls + '><td><strong>' + d.bond + '</strong></td><td>' + d.type + '</td><td>' + d.energy + '</td><td>' + d.length + '</td></tr>';
  }

  el.innerHTML =
    _tblHeader('🔥', 'Bindningsenergier') +
    _tblUsage('🔥 Används vid beräkning av reaktionsentalpi: ΔH = Σ(brutna bindningar) − Σ(bildade bindningar).') +
    '<div class="tbl-bond-legend"><span class="tbl-bond-leg tbl-bond-leg-s">Enkelbindning</span><span class="tbl-bond-leg tbl-bond-leg-d">Dubbelbindning</span><span class="tbl-bond-leg tbl-bond-leg-t">Trippelbindning</span></div>' +
    _tblSearchWrap('tblBindSearch') +
    '<div class="tbl-table-wrap"><table class="tbl-table"><thead><tr><th>Bindning</th><th>Typ</th><th>Energi (kJ/mol)</th><th>Längd (pm)</th></tr></thead><tbody id="tbl-bind-body">' + rows + '</tbody></table></div>';
  _tblInitSearch('tblBindSearch', 'tbl-bind-body');
}

function _tblRenderTermokemi(el) {
  var rows = '';
  for (var i = 0; i < TERMO_DATA.length; i++) {
    var d = TERMO_DATA[i];
    var cls = d.dhf > 0 ? ' class="tbl-pos-dh"' : ' class="tbl-neg-dh"';
    var dhStr = (d.dhf > 0 ? '+' : '') + d.dhf;
    rows += '<tr' + cls + '><td>' + d.name + '</td><td><em>' + d.formula + '</em></td><td><span class="tbl-phase tbl-phase-' + d.fas + '">' + d.fas + '</span></td><td>' + dhStr + '</td></tr>';
  }

  el.innerHTML =
    _tblHeader('♨️', 'Termokemi — Bildningsentalpier ΔHf°') +
    _tblUsage('♨️ Används med Hess lag: ΔH°rxn = Σ ΔHf°(produkter) − Σ ΔHf°(reaktanter).') +
    '<div class="tbl-bond-legend"><span class="tbl-bond-leg tbl-bond-leg-neg">Exoterm bildning (ΔHf° &lt; 0)</span><span class="tbl-bond-leg tbl-bond-leg-pos">Endoterm bildning (ΔHf° &gt; 0)</span></div>' +
    _tblSearchWrap('tblTermSearch') +
    '<div class="tbl-table-wrap"><table class="tbl-table"><thead><tr><th>Ämne</th><th>Formel</th><th>Fas</th><th>ΔHf° (kJ/mol)</th></tr></thead><tbody id="tbl-termo-body">' + rows + '</tbody></table></div>';
  _tblInitSearch('tblTermSearch', 'tbl-termo-body');
}

function _tblRenderLoslighet(el) {
  var rows = '';
  for (var i = 0; i < LOSLIGHET_DATA.length; i++) {
    var d = LOSLIGHET_DATA[i];
    rows += '<tr><td>' + d.name + '</td><td><em>' + d.formula + '</em></td><td>' + d.ksp + '</td><td>' + d.pksp + '</td><td>' + d.los + '</td></tr>';
  }

  el.innerHTML =
    _tblHeader('🔬', 'Löslighet — Löslighetsprodukter Ksp') +
    _tblUsage('🔬 Litet Ksp = svårlösligt salt. Används för att avgöra om en fällning bildas: Q &gt; Ksp → fällning sker.') +
    _tblSearchWrap('tblLosSearch') +
    '<div class="tbl-table-wrap"><table class="tbl-table"><thead><tr><th>Salt</th><th>Formel</th><th>Ksp</th><th>pKsp</th><th>Löslighet</th></tr></thead><tbody id="tbl-los-body">' + rows + '</tbody></table></div>';
  _tblInitSearch('tblLosSearch', 'tbl-los-body');
}

