import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    html = f.read()

# ── 1. State: add mutedCards, start with no selectedCats ─────────────────────
old_state = """let state = {
  theme: 'light',
  selectedCats: new Set(CATEGORIES),
  mode: 'flip',    // flip | mc | ft
  direction: 'term', // term | def | random
  // per-card spaced rep data
  cardData: {}, // id -> { correct, wrong, mastered, nextRound }
  currentRound: 0,
};"""

new_state = """let state = {
  theme: 'light',
  selectedCats: new Set(),   // empty = none selected by default
  mode: 'flip',    // flip | mc | ft
  direction: 'term', // term | def | random
  cardData: {}, // id -> { correct, wrong, mastered, nextRound }
  currentRound: 0,
  mutedCards: new Set(), // muted card ids
};"""

html = html.replace(old_state, new_state, 1)

# ── 2. Persistence: save/load mutedCards and selectedCats ────────────────────
old_save = """function saveState() {
  const toSave = {
    theme: state.theme,
    cardData: state.cardData,
    currentRound: state.currentRound,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
}"""

new_save = """function saveState() {
  const toSave = {
    theme: state.theme,
    cardData: state.cardData,
    currentRound: state.currentRound,
    mutedCards: [...state.mutedCards],
    selectedCats: [...state.selectedCats],
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
}"""

html = html.replace(old_save, new_save, 1)

old_load = """function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.theme) state.theme = saved.theme;
    if (saved.cardData) state.cardData = saved.car"""

# Find the full loadState function and replace it
idx_load = html.find('function loadState()')
idx_load_end = html.find('\nfunction ', idx_load + 1)
old_load_full = html[idx_load:idx_load_end]

new_load_full = """function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.theme) state.theme = saved.theme;
    if (saved.cardData) state.cardData = saved.cardData;
    if (saved.currentRound) state.currentRound = saved.currentRound;
    if (saved.mutedCards) state.mutedCards = new Set(saved.mutedCards);
    if (saved.selectedCats) state.selectedCats = new Set(saved.selectedCats);
  } catch(e) {}
}
"""

html = html[:idx_load] + new_load_full + html[idx_load_end:]

# ── 3. Update buildCategoryGrid: no "select all" default, add manage button ──
old_build = """function buildCategoryGrid() {
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = '';

  // "Alla" card
  const allCard = document.createElement('div');
  allCard.className = 'cat-card all-selected';
  allCard.dataset.cat = '__all__';
  const allMastered = CARDS.filter(c => isMastered(c.id)).length;
  const allPct = Math.round(allMastered / CARDS.length * 100);
  allCard.innerHTML = `
    <div class="cat-check">✓</div>
    <div class="cat-name">🌟 Alla kategorier</div>
    <div class="cat-count">${CARDS.length} kort • ${allMastered} bemästrade</div>
    <div class="cat-progress-bar"><div class="cat-progress-fill" style="width:${allPct}%"></div></div>`;
  allCard.addEventListener('click', () => {
    state.selectedCats = new Set(CATEGORIES);
    updateCatGrid();
  });
  grid.appendChild(allCard);

  CATEGORIES.forEach(cat => {
    const cards = CARDS.filter(c => c.cat === cat);
    const mastered = cards.filter(c => isMastered(c.id)).length;
    const pct = Math.round(mastered / cards.length * 100);
    const div = document.createElement('div');
    div.className = 'cat-card' + (state.selectedCats.has(cat) ? ' selected' : '');
    div.dataset.cat = cat;
    div.innerHTML = `
      <div class="cat-check">✓</div>
      <div class="cat-name">${cat}</div>
      <div class="cat-count">${cards.length} kort • ${mastered} bemästrade</div>
      <div class="cat-progress-bar"><div class="cat-progress-fill" style="width:${pct}%"></div></div>`;
    div.addEventListener('click', () => {
      if (state.selectedCats.has(cat) && state.selectedCats.size > 1) {
        state.selectedCats.delete(cat);
      } else {
        state.selectedCats.add(cat);
      }
      updateCatGrid();
    });
    grid.appendChild(div);
  });
}"""

new_build = """function buildCategoryGrid() {
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = '';

  // "Alla" card
  const allCard = document.createElement('div');
  allCard.className = 'cat-card all-btn';
  allCard.dataset.cat = '__all__';
  const allMastered = CARDS.filter(c => isMastered(c.id) && !state.mutedCards.has(c.id)).length;
  const allActive = CARDS.filter(c => !state.mutedCards.has(c.id)).length;
  const allPct = allActive ? Math.round(allMastered / allActive * 100) : 0;
  allCard.innerHTML = `
    <div class="cat-check">✓</div>
    <div class="cat-name">🌟 Alla kategorier</div>
    <div class="cat-count">${allActive} kort • ${allMastered} bemästrade</div>
    <div class="cat-progress-bar"><div class="cat-progress-fill" style="width:${allPct}%"></div></div>`;
  allCard.addEventListener('click', () => {
    state.selectedCats = new Set(CATEGORIES);
    saveState();
    updateCatGrid();
  });
  grid.appendChild(allCard);

  CATEGORIES.forEach(cat => {
    const cards = CARDS.filter(c => c.cat === cat && !state.mutedCards.has(c.id));
    const allCatCards = CARDS.filter(c => c.cat === cat);
    const mastered = cards.filter(c => isMastered(c.id)).length;
    const pct = cards.length ? Math.round(mastered / cards.length * 100) : 0;
    const mutedCount = allCatCards.length - cards.length;
    const div = document.createElement('div');
    div.className = 'cat-card' + (state.selectedCats.has(cat) ? ' selected' : '');
    div.dataset.cat = cat;
    div.innerHTML = `
      <div class="cat-check">✓</div>
      <div class="cat-name">${cat}</div>
      <div class="cat-count">${cards.length} kort${mutedCount ? ' • <span style="color:var(--text2)">'+mutedCount+' tysta</span>' : ''} • ${mastered} bemästrade</div>
      <div class="cat-progress-bar"><div class="cat-progress-fill" style="width:${pct}%"></div></div>
      <button class="cat-manage-btn" data-cat="${cat}" title="Hantera kort i denna kategori">⚙️ Hantera</button>`;
    div.addEventListener('click', (e) => {
      if (e.target.closest('.cat-manage-btn')) return;
      if (state.selectedCats.has(cat)) {
        state.selectedCats.delete(cat);
      } else {
        state.selectedCats.add(cat);
      }
      saveState();
      updateCatGrid();
    });
    div.querySelector('.cat-manage-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openManageModal(cat);
    });
    grid.appendChild(div);
  });
}"""

html = html.replace(old_build, new_build, 1)

# ── 4. Update updateHomeStats to exclude muted ───────────────────────────────
old_stats = """function updateHomeStats() {
  const sel = CARDS.filter(c => state.selectedCats.has(c.cat));
  const mastered = sel.filter(c => isMastered(c.id)).length;
  document.getElementById('totalCards').textContent = sel.length;
  document.getElementById('masteredCards').textContent = mastered;
  document.getElementById('remainingCards').textContent = sel.length - mastered;
}"""

new_stats = """function updateHomeStats() {
  const sel = CARDS.filter(c => state.selectedCats.has(c.cat) && !state.mutedCards.has(c.id));
  const mastered = sel.filter(c => isMastered(c.id)).length;
  document.getElementById('totalCards').textContent = sel.length;
  document.getElementById('masteredCards').textContent = mastered;
  document.getElementById('remainingCards').textContent = sel.length - mastered;
}"""

html = html.replace(old_stats, new_stats, 1)

# ── 5. Update session queue building to exclude muted ────────────────────────
# Find where queue is built from selectedCats
old_queue = "CARDS.filter(c => state.selectedCats.has(c.cat))"
new_queue = "CARDS.filter(c => state.selectedCats.has(c.cat) && !state.mutedCards.has(c.id))"
html = html.replace(old_queue, new_queue)

# ── 6. Add manage modal HTML before closing </div><!-- /app-content --> ───────
old_appcontent_end = "</div><!-- /app-content -->"
new_appcontent_end = """</div><!-- /app-content -->

<!-- Manage Cards Modal -->
<div id="manageModalBackdrop" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:600;overflow-y:auto;padding:20px;">
  <div id="manageModal" style="max-width:700px;margin:0 auto;background:var(--surface);border-radius:var(--radius);padding:24px;border:1px solid var(--border);">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
      <div>
        <h2 style="font-size:1.1rem;font-weight:700;" id="manageModalTitle">Hantera kort</h2>
        <div style="font-size:0.82rem;color:var(--text2);margin-top:4px;" id="manageModalSubtitle"></div>
      </div>
      <button id="manageModalClose" style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:8px 16px;cursor:pointer;font-weight:600;color:var(--text);">✕ Stäng</button>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
      <button id="muteAllBtn" style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:6px 14px;cursor:pointer;font-size:0.83rem;color:var(--text);">🔇 Tysta alla</button>
      <button id="unmuteAllBtn" style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:6px 14px;cursor:pointer;font-size:0.83rem;color:var(--text);">🔊 Aktivera alla</button>
    </div>
    <div id="manageCardList" style="display:flex;flex-direction:column;gap:8px;"></div>
  </div>
</div>"""

html = html.replace(old_appcontent_end, new_appcontent_end, 1)

# ── 7. Add manage modal CSS ───────────────────────────────────────────────────
old_css_end = "  .nav-btn.active .nav-btn-icon { transform: scale(1.2); filter: drop-shadow(0 0 6px var(--accent)); }"
new_css_end = """  .nav-btn.active .nav-btn-icon { transform: scale(1.2); filter: drop-shadow(0 0 6px var(--accent)); }

  /* ── Category manage button ── */
  .cat-manage-btn {
    display: block; width: 100%; margin-top: 10px;
    padding: 6px 0; border: 1px solid var(--border); border-radius: 8px;
    background: var(--surface2); color: var(--text2); font-size: 0.78rem;
    font-weight: 600; cursor: pointer; transition: all var(--transition);
  }
  .cat-manage-btn:hover { background: var(--accent-light); color: var(--accent); border-color: var(--accent); }
  .cat-card.all-btn { cursor: pointer; }
  .cat-card.all-btn .cat-check { opacity: 0; }

  /* ── Manage card item ── */
  .manage-card-item {
    display: flex; align-items: flex-start; gap: 12px;
    padding: 12px 14px; border-radius: 12px; border: 1px solid var(--border);
    background: var(--surface); transition: all var(--transition);
  }
  .manage-card-item.is-muted { opacity: 0.45; background: var(--surface2); }
  .manage-card-item-text { flex: 1; min-width: 0; }
  .manage-card-term { font-weight: 700; font-size: 0.9rem; margin-bottom: 3px; }
  .manage-card-def { font-size: 0.78rem; color: var(--text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .mute-toggle {
    flex-shrink: 0; padding: 5px 12px; border-radius: 8px; font-size: 0.78rem;
    font-weight: 700; cursor: pointer; border: 1px solid var(--border);
    background: var(--surface2); color: var(--text2); transition: all var(--transition);
  }
  .mute-toggle.active { background: var(--accent); color: #fff; border-color: var(--accent); }
  .mute-toggle:hover { transform: scale(1.05); }"""

html = html.replace(old_css_end, new_css_end, 1)

# ── 8. Add openManageModal JS function ───────────────────────────────────────
old_updatecatgrid = """function updateCatGrid() {
  document.querySelectorAll('.cat-card[data-cat]').forEach(el => {
    const cat = el.dataset.cat;
    if (cat === '__all__') {
      el.className = 'cat-card all-selected';
    } else {
      el.className = 'cat-card' + (state.selectedCats.has(cat) ? ' selected' : '');
    }
  });
  updateHomeStats();
}"""

new_updatecatgrid = """function updateCatGrid() {
  document.querySelectorAll('.cat-card[data-cat]').forEach(el => {
    const cat = el.dataset.cat;
    if (cat === '__all__') {
      el.className = 'cat-card all-btn';
    } else {
      el.className = 'cat-card' + (state.selectedCats.has(cat) ? ' selected' : '');
    }
  });
  updateHomeStats();
}

function openManageModal(cat) {
  const cards = CARDS.filter(c => c.cat === cat);
  document.getElementById('manageModalTitle').textContent = '⚙️ ' + cat;
  const muted = cards.filter(c => state.mutedCards.has(c.id)).length;
  document.getElementById('manageModalSubtitle').textContent =
    cards.length + ' kort  •  ' + muted + ' tysta  •  ' + (cards.length - muted) + ' aktiva';

  const list = document.getElementById('manageCardList');
  list.innerHTML = '';
  cards.forEach(card => {
    const isMuted = state.mutedCards.has(card.id);
    const item = document.createElement('div');
    item.className = 'manage-card-item' + (isMuted ? ' is-muted' : '');
    item.innerHTML = `
      <div class="manage-card-item-text">
        <div class="manage-card-term">${card.term}</div>
        <div class="manage-card-def">${card.def}</div>
      </div>
      <button class="mute-toggle ${isMuted ? '' : 'active'}" data-id="${card.id}">
        ${isMuted ? '🔇 Tyst' : '🔊 Aktiv'}
      </button>`;
    item.querySelector('.mute-toggle').addEventListener('click', () => {
      if (state.mutedCards.has(card.id)) {
        state.mutedCards.delete(card.id);
      } else {
        state.mutedCards.add(card.id);
      }
      saveState();
      openManageModal(cat); // re-render
      buildCategoryGrid();  // update counts
    });
    list.appendChild(item);
  });

  document.getElementById('muteAllBtn').onclick = () => {
    cards.forEach(c => state.mutedCards.add(c.id));
    saveState(); openManageModal(cat); buildCategoryGrid();
  };
  document.getElementById('unmuteAllBtn').onclick = () => {
    cards.forEach(c => state.mutedCards.delete(c.id));
    saveState(); openManageModal(cat); buildCategoryGrid();
  };

  document.getElementById('manageModalBackdrop').style.display = 'block';
}

document.getElementById('manageModalClose').addEventListener('click', () => {
  document.getElementById('manageModalBackdrop').style.display = 'none';
});
document.getElementById('manageModalBackdrop').addEventListener('click', (e) => {
  if (e.target === document.getElementById('manageModalBackdrop')) {
    document.getElementById('manageModalBackdrop').style.display = 'none';
  }
});"""

html = html.replace(old_updatecatgrid, new_updatecatgrid, 1)

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f'Klart! Filstorlek: {len(html)} chars / {len(html)//1024} KB')
