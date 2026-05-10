# Collapsible Sidebar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a desktop collapse-to-icons toggle and improve mobile sidebar behavior so users can reclaim horizontal space.

**Architecture:** All changes go in `src/main-template.html` (the single source file). CSS uses a `--sidebar-collapsed-width: 52px` variable and a `.sidebar--collapsed` class on `<aside>`. JS stores the state in `localStorage` under key `kemi1_sidebar_state`. Mobile behavior stays as-is (hidden off-screen, hamburger opens it) but gains a max-width cap of 75vw.

**Tech Stack:** Vanilla CSS transitions (`width`, `transform`), vanilla JS, `localStorage`.

---

## File map

| File | Change |
|---|---|
| `src/main-template.html` | CSS variables, sidebar CSS, collapse-toggle button, nav-btn icon-only mode, tooltips, JS init & toggle logic |

---

### Task 1: Add CSS variable and sidebar collapsed styles

**Files:**
- Modify: `src/main-template.html` (CSS `:root` block, lines ~12–57)
- Modify: `src/main-template.html` (`.sidebar` block, lines ~112–124)
- Modify: `src/main-template.html` (`.app-main` block, lines ~173–176)

- [ ] **Step 1: Add `--sidebar-collapsed-width` to `:root`**

In `:root { ... }`, after the line `--sidebar-width: 220px;` (line ~34), add:

```css
    --sidebar-collapsed-width: 52px;
```

- [ ] **Step 2: Add transition to `.sidebar`**

The existing `.sidebar` rule already has `transition: transform var(--transition), box-shadow var(--transition);`  
Replace it with:

```css
  .sidebar {
    width: var(--sidebar-width);
    flex-shrink: 0;
    background: var(--bg-surface);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0; top: 0; bottom: 0;
    z-index: 200;
    overflow-y: auto;
    overflow-x: hidden;
    transition: width 220ms cubic-bezier(0.4,0,0.2,1), transform var(--transition), box-shadow var(--transition);
  }
```

- [ ] **Step 3: Add `.sidebar--collapsed` and `.app-main` transition rules**

After the `.sidebar-overlay.active { display: block; }` rule (line ~170), insert:

```css
  /* ── Sidebar collapsed (desktop) ── */
  .sidebar--collapsed {
    width: var(--sidebar-collapsed-width);
  }
  .sidebar--collapsed .sidebar-logo-text,
  .sidebar--collapsed .sidebar-logo-dim,
  .sidebar--collapsed .nav-section-label,
  .sidebar--collapsed .nav-btn-label,
  .sidebar--collapsed .sidebar-footer { display: none; }
  .sidebar--collapsed .sidebar-logo {
    justify-content: center; padding: 20px 0 16px;
  }
  .sidebar--collapsed .nav-btn {
    justify-content: center; padding: 9px 0;
  }
  .sidebar--collapsed .sidebar-nav { padding: 12px 4px; }
  /* tooltip for collapsed icons */
  .sidebar--collapsed .nav-btn { position: relative; }
  .sidebar--collapsed .nav-btn::after {
    content: attr(data-label);
    position: absolute; left: calc(100% + 10px); top: 50%;
    transform: translateY(-50%);
    background: var(--bg-card); border: 1px solid var(--border);
    color: var(--text-primary); font-size: 0.8rem; font-weight: 500;
    padding: 4px 10px; border-radius: 8px;
    white-space: nowrap; pointer-events: none;
    opacity: 0; transition: opacity 120ms ease;
    z-index: 300;
  }
  .sidebar--collapsed .nav-btn:hover::after { opacity: 1; }
```

- [ ] **Step 4: Add transition to `.app-main`**

Replace the `.app-main` rule (lines ~173–176):

```css
  .app-main {
    flex: 1; margin-left: var(--sidebar-width);
    display: flex; flex-direction: column; min-height: 100vh; min-width: 0;
    transition: margin-left 220ms cubic-bezier(0.4,0,0.2,1);
  }
  .app-main--collapsed { margin-left: var(--sidebar-collapsed-width); }
```

- [ ] **Step 5: Commit**

```bash
git add src/main-template.html
git commit -m "style: add sidebar collapsed CSS variables and transition rules"
```

---

### Task 2: Add the collapse toggle button to the sidebar HTML

**Files:**
- Modify: `src/main-template.html` (sidebar `<aside>`, lines ~2506–2553)

The collapse button sits on the right edge of the sidebar header. Add it inside `.sidebar-logo`, and give each `nav-btn` a `data-label` attribute for the tooltip.

- [ ] **Step 1: Add `data-label` to every nav-btn**

Each `<button class="nav-btn" data-target="...">` needs `data-label="<page name>"`.  
Replace the sidebar nav HTML (lines ~2511–2550) with:

```html
  <nav class="sidebar-nav">
    <div class="nav-section">
      <span class="nav-section-label">Studera</span>
      <button class="nav-btn active" data-target="homeScreen" data-label="Flashcards">
        <span class="nav-btn-icon">🃏</span><span class="nav-btn-label">Flashcards</span>
      </button>
      <button class="nav-btn" data-target="tqScreen" data-label="Frågor">
        <span class="nav-btn-icon">❓</span><span class="nav-btn-label">Frågor</span>
      </button>
      <button class="nav-btn" data-target="examScreen" data-label="Inför prov">
        <span class="nav-btn-icon">📋</span><span class="nav-btn-label">Inför prov</span>
      </button>
      <button class="nav-btn" data-target="theoryScreen" data-label="Teori">
        <span class="nav-btn-icon">📖</span><span class="nav-btn-label">Teori</span>
      </button>
      <button class="nav-btn" data-target="exerciseScreen" data-label="Räkna">
        <span class="nav-btn-icon">🧮</span><span class="nav-btn-label">Räkna</span>
      </button>
    </div>
    <div class="nav-section">
      <span class="nav-section-label">Verktyg</span>
      <button class="nav-btn" data-target="formulaScreen" data-label="Formler">
        <span class="nav-btn-icon">📐</span><span class="nav-btn-label">Formler</span>
      </button>
      <button class="nav-btn" data-target="calcScreen" data-label="Kalkylator">
        <span class="nav-btn-icon">🔢</span><span class="nav-btn-label">Kalkylator</span>
      </button>
      <button class="nav-btn" data-target="planScreen" data-label="Plan">
        <span class="nav-btn-icon">📅</span><span class="nav-btn-label">Plan</span>
      </button>
      <button class="nav-btn" data-target="periodicScreen" data-label="PT">
        <span class="nav-btn-icon">⚗️</span><span class="nav-btn-label">PT</span>
      </button>
    </div>
    <div class="nav-section">
      <span class="nav-section-label">Övrigt</span>
      <button class="nav-btn" data-target="profileScreen" data-label="Profil">
        <span class="nav-btn-icon">👤</span><span class="nav-btn-label">Profil</span>
      </button>
    </div>
  </nav>
```

- [ ] **Step 2: Add the collapse toggle button and its CSS**

Add a collapse toggle button style in the CSS block (after `.sidebar-toggle:hover` rule, around line ~193):

```css
  /* ── Desktop sidebar collapse button ── */
  .sidebar-collapse-btn {
    display: flex; align-items: center; justify-content: center;
    width: 24px; height: 24px; margin-left: auto;
    background: none; border: 1px solid var(--border);
    border-radius: 6px; cursor: pointer;
    color: var(--text-muted); font-size: 0.75rem;
    transition: background var(--transition), color var(--transition), border-color var(--transition);
    flex-shrink: 0;
  }
  .sidebar-collapse-btn:hover {
    background: var(--bg-card); color: var(--text-primary); border-color: var(--border-hover);
  }
  .sidebar--collapsed .sidebar-collapse-btn { margin-left: 0; }
```

Then in the `<aside class="sidebar">` block, replace the `.sidebar-logo` div (lines ~2507–2510) with:

```html
  <div class="sidebar-logo">
    <span class="sidebar-logo-icon">⚗️</span>
    <span class="sidebar-logo-text">Kemi<span class="sidebar-logo-dim">1</span></span>
    <button class="sidebar-collapse-btn" id="sidebarCollapseBtn" aria-label="Dölj meny">&#8592;</button>
  </div>
```

- [ ] **Step 3: Commit**

```bash
git add src/main-template.html
git commit -m "feat: add sidebar collapse toggle button and data-label tooltips"
```

---

### Task 3: Add JS — desktop collapse toggle with localStorage persistence

**Files:**
- Modify: `src/main-template.html` (JS at end of file, lines ~12849–12862)

The existing "Sidebar mobile toggle" IIFE handles mobile. We extend it to also handle desktop collapse.

- [ ] **Step 1: Replace the sidebar JS block**

Find and replace the existing sidebar mobile toggle block (lines ~12849–12862):

```js
// Sidebar mobile toggle
(function() {
  var toggleBtn = document.getElementById('sidebarToggleBtn');
  var overlay = document.getElementById('sidebarOverlay');
  var sidebar = document.querySelector('.sidebar');
  if (toggleBtn) toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  if (overlay) overlay.addEventListener('click', function() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });
})();
```

Replace with:

```js
// Sidebar toggle (mobile + desktop collapse)
(function() {
  var SIDEBAR_KEY = 'kemi1_sidebar_state';
  var sidebar = document.querySelector('.sidebar');
  var appMain = document.querySelector('.app-main');
  var collapseBtn = document.getElementById('sidebarCollapseBtn');
  var toggleBtn = document.getElementById('sidebarToggleBtn');
  var overlay = document.getElementById('sidebarOverlay');

  function isDesktop() { return window.innerWidth > 768; }

  function applyCollapsed(collapsed) {
    if (collapsed) {
      sidebar.classList.add('sidebar--collapsed');
      appMain.classList.add('app-main--collapsed');
      if (collapseBtn) collapseBtn.innerHTML = '&#8594;';
    } else {
      sidebar.classList.remove('sidebar--collapsed');
      appMain.classList.remove('app-main--collapsed');
      if (collapseBtn) collapseBtn.innerHTML = '&#8592;';
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
  window.addEventListener('resize', function() {
    if (isDesktop()) {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      var saved = localStorage.getItem(SIDEBAR_KEY);
      applyCollapsed(saved === 'collapsed');
    } else {
      applyCollapsed(false);
    }
  });
})();
```

- [ ] **Step 2: Commit**

```bash
git add src/main-template.html
git commit -m "feat: desktop sidebar collapse with localStorage persistence"
```

---

### Task 4: Mobile — max-width cap and sidebar width

**Files:**
- Modify: `src/main-template.html` (CSS `@media (max-width: 768px)` block, lines ~545–552)

- [ ] **Step 1: Cap mobile sidebar width to 75vw**

Replace the existing mobile media query rule for `.sidebar` (lines ~546–552):

```css
  @media (max-width: 768px) {
    .sidebar {
      transform: translateX(-100%); box-shadow: none;
      max-width: 75vw;
    }
    .sidebar.open { transform: translateX(0); box-shadow: var(--shadow-lg); }
    .app-main { margin-left: 0; }
    .sidebar-toggle { display: flex; }
    .app-content { padding: 16px; }
    /* hide desktop collapse button on mobile */
    .sidebar-collapse-btn { display: none; }
  }
```

- [ ] **Step 2: Commit**

```bash
git add src/main-template.html
git commit -m "style: cap mobile sidebar to 75vw, hide collapse btn on mobile"
```

---

### Task 5: Build and verify

**Files:**
- Run: `build.py`

- [ ] **Step 1: Run build**

```bash
python build.py
```

Expected: `kemi1-flashcards.html` is regenerated without errors.

- [ ] **Step 2: Open in browser and test desktop**

Open `index.html` or `kemi1-flashcards.html` in a browser at >768px width.

Checklist:
- [ ] Sidebar starts in the state saved in localStorage (expanded by default on first load)
- [ ] Clicking ← collapses sidebar to ~52px showing only icons
- [ ] Button changes to →
- [ ] Hovering a nav icon shows a tooltip with the page name
- [ ] Main content slides left smoothly (CSS transition, no layout jump)
- [ ] Active nav item still highlighted correctly
- [ ] Reload: state is remembered
- [ ] Works in dark and light theme (toggle theme, collapse, toggle back)

- [ ] **Step 3: Test mobile (DevTools responsive mode, <768px)**

Checklist:
- [ ] Sidebar is hidden off-screen by default
- [ ] ☰ hamburger visible in topbar
- [ ] Clicking ☰ slides sidebar in from left
- [ ] Sidebar does not exceed 75% of screen width
- [ ] Clicking the backdrop closes sidebar
- [ ] Desktop collapse button is hidden on mobile

- [ ] **Step 4: Commit build artifact**

```bash
git add kemi1-flashcards.html
git commit -m "build: rebuild after collapsible sidebar feature"
```

---

## Self-review checklist

**Spec coverage:**
- [x] Desktop: sidebar expanded by default ~160–180px — handled (CSS `--sidebar-width: 220px` unchanged)
- [x] Desktop: ← button on right edge of sidebar — Task 2
- [x] Desktop: collapses to icon-only ~52px — Task 1 (collapsed width 52px)
- [x] Desktop: button becomes → — Task 3 JS `applyCollapsed()`
- [x] Desktop: tooltips on hover — Task 1 CSS `::after` pseudo-element
- [x] Desktop: main content expands with CSS transition — Task 1 `.app-main` transition + Task 3 class toggle
- [x] Mobile: sidebar hidden by default — existing behavior preserved
- [x] Mobile: hamburger ☰ opens sidebar — existing behavior preserved
- [x] Mobile: max 75% width — Task 4
- [x] Mobile: backdrop closes sidebar — existing behavior preserved
- [x] localStorage persistence — Task 3
- [x] Active nav link still correct — no change to active class logic, only collapse class on sidebar
- [x] Dark + light theme — CSS uses vars throughout

**Placeholder scan:** No TBD, no "handle edge cases" without specifics. All code is complete.

**Type consistency:** `sidebar--collapsed` / `app-main--collapsed` used consistently across CSS (Tasks 1, 4) and JS (Task 3). `sidebarCollapseBtn` ID matches HTML (Task 2) and JS (Task 3). `SIDEBAR_KEY = 'kemi1_sidebar_state'` is the only localStorage key introduced.
