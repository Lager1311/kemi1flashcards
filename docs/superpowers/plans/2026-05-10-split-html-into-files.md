# Split index.html Into Separate Files – Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor `src/main-template.html` (849 KB) so that CSS, JS logic, and data are each in their own files, and `index.html` stays under 100 KB.

**Architecture:** Create `src/styles.css`, `src/data/flashcards.js`, and `src/js/{storage,navigation,flashcards,quiz,calculator,theory}.js`. The existing data files (`src/problems.js`, `src/theory-questions.js`) are loaded via `<script src>` tags instead of being inlined. `src/teori-fran-grunden-content.js` (253 KB) is loaded lazily on first tab visit. `build.py` is updated to just copy `src/main-template.html` → `index.html` / `kemi1-flashcards.html` (no more inlining).

**Tech Stack:** Vanilla JS globals (no modules), Python 3 for the extraction script, existing HTML/CSS.

---

## Section boundaries in `src/main-template.html` (0-indexed line numbers)

| Content | Lines (0-idx) | Destination |
|---|---|---|
| CSS | 11–2650 | `src/styles.css` |
| HTML body | 2651–3675 | stays in template |
| CARDS + MNEMONICS | 3676–4348 | `src/data/flashcards.js` |
| STATE, THEME, HOME, SESSION, RENDER, END SESSION | 4349–5097 | `src/js/flashcards.js` part 1 |
| ÖVNINGSUPPGIFTER + THEORY array | 5098–6417 | `src/js/quiz.js` part 1 |
| Theory search helpers | 6418–6784 | `src/js/theory.js` part 1 |
| NAVIGATION (navTo) | 6785–6807 | `src/js/navigation.js` part 1 |
| NEW SESSION SYSTEM + methods 1-5 | 6808–8081 | `src/js/flashcards.js` part 2 |
| Init nav buttons | 8082–8112 | `src/js/navigation.js` part 2 |
| STUDY SYSTEM (data model, auth, storage) | 8113–9037 | `src/js/storage.js` |
| FORMULA SHEET + LÄGESVÄXLING + THEORY_QUESTIONS + INFÖR PROV | 9038–11777 | `src/js/quiz.js` part 2 |
| INITIALIZATION | 11778–11811 | stays in template |
| HTML (session summary, pomo widget) | 11813–11857 | stays in template |
| KALKYLATOR (Script 2) | 11859–12956 | `src/js/calculator.js` |
| TEORI GRUND (Script 3) | 12959–13446 | `src/js/theory.js` part 2 |

Placeholder lines to remove:
- Line 5103 (`/* @@PROBLEMS@@ */`) → removed from quiz.js; PROBLEMS loaded via `<script src>`
- Line 10342 (`/* @@THEORY_QUESTIONS@@ */`) → removed; THEORY_QUESTIONS via `<script src>`
- Line 12961 (`/* @@TEORI_GRUND_CONTENT@@ */`) → replaced with lazy-load logic in `tgInit()`

---

## Task 1: Create directory structure

**Files:**
- Create: `src/data/` directory
- Create: `src/js/` directory

- [ ] Run: `mkdir -p src/data src/js` (or equivalent)
- [ ] Commit: `git add . && git commit -m "chore: create src/data and src/js directories"`

---

## Task 2: Run extraction script to split the template

**Files:**
- Create: `extract.py` (run once, can delete after)
- Create: `src/styles.css`
- Create: `src/data/flashcards.js`
- Create: `src/js/flashcards.js`
- Create: `src/js/quiz.js`
- Create: `src/js/theory.js`
- Create: `src/js/navigation.js`
- Create: `src/js/storage.js`
- Create: `src/js/calculator.js`
- Modify: `src/main-template.html`

- [ ] Write `extract.py` with the Python extraction logic (see below)
- [ ] Run: `python extract.py`
- [ ] Verify file sizes are sane
- [ ] Commit

### extract.py content

```python
"""
extract.py — splits src/main-template.html into separate CSS and JS files.
Run once from the project root: python extract.py
"""
import os, re

BASE = os.path.dirname(os.path.abspath(__file__))
SRC  = os.path.join(BASE, 'src')

with open(os.path.join(SRC, 'main-template.html'), 'r', encoding='utf-8') as f:
    lines = f.readlines()

def get(start, end):
    """Return lines[start:end] joined, stripping @@PLACEHOLDER@@ lines."""
    result = []
    for l in lines[start:end]:
        if re.search(r'/\* @@\w+@@ \*/', l):
            continue
        result.append(l)
    return ''.join(result)

os.makedirs(os.path.join(SRC, 'data'), exist_ok=True)
os.makedirs(os.path.join(SRC, 'js'), exist_ok=True)

# CSS
with open(os.path.join(SRC, 'styles.css'), 'w', encoding='utf-8') as f:
    f.write(get(11, 2651))
print('styles.css written')

# Flashcard data (CARDS + MNEMONICS)
with open(os.path.join(SRC, 'data', 'flashcards.js'), 'w', encoding='utf-8') as f:
    f.write(get(3676, 4349))
print('data/flashcards.js written')

# flashcards.js (two parts)
with open(os.path.join(SRC, 'js', 'flashcards.js'), 'w', encoding='utf-8') as f:
    f.write(get(4349, 5098))
    f.write('\n')
    f.write(get(6808, 8082))
print('js/flashcards.js written')

# quiz.js (two parts, placeholders stripped by get())
with open(os.path.join(SRC, 'js', 'quiz.js'), 'w', encoding='utf-8') as f:
    f.write(get(5098, 6418))
    f.write('\n')
    f.write(get(9038, 11778))
print('js/quiz.js written')

# theory.js (two parts)
THEORY_LAZY = '''
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
'''

# Script 3: lines 12959-13447 (0-indexed), but skip the @@TEORI_GRUND_CONTENT@@ line
# and replace the old tgInit() with the lazy version
theory_part2_lines = lines[12959:13447]
# Remove the placeholder comment and the original tgInit function
theory_part2 = []
skip_tginit = False
for l in theory_part2_lines:
    if re.search(r'/\* @@\w+@@ \*/', l):
        continue
    if 'function tgInit()' in l:
        skip_tginit = True
    if skip_tginit:
        if l.strip() == '}' and skip_tginit:
            skip_tginit = False
            continue
        continue
    theory_part2.append(l)

with open(os.path.join(SRC, 'js', 'theory.js'), 'w', encoding='utf-8') as f:
    f.write(get(6418, 6785))
    f.write('\n')
    f.write(''.join(theory_part2))
    f.write(THEORY_LAZY)
print('js/theory.js written')

# navigation.js (two parts)
with open(os.path.join(SRC, 'js', 'navigation.js'), 'w', encoding='utf-8') as f:
    f.write(get(6785, 6808))
    f.write('\n')
    f.write(get(8082, 8113))
print('js/navigation.js written')

# storage.js
with open(os.path.join(SRC, 'js', 'storage.js'), 'w', encoding='utf-8') as f:
    f.write(get(8113, 9038))
print('js/storage.js written')

# calculator.js (Script 2)
with open(os.path.join(SRC, 'js', 'calculator.js'), 'w', encoding='utf-8') as f:
    f.write(get(11859, 12957))
print('js/calculator.js written')

print('All JS/CSS files written. Now updating main-template.html...')
```

---

## Task 3: Rewrite main-template.html

**Files:**
- Modify: `src/main-template.html`

Replace the entire file content with a slim version that:
1. Replaces `<style>…</style>` with `<link rel="stylesheet" href="src/styles.css">`
2. Replaces Script 1, 2, 3 `<script>` blocks with `<script src>` tags
3. Keeps inline INITIALIZATION block (11778–11811) in a small inline `<script>`

- [ ] Rewrite `src/main-template.html` (see Task 3 in execution)
- [ ] Verify: `wc -c src/main-template.html` should be under 100 KB
- [ ] Commit

New `<head>` section:
```html
<link rel="stylesheet" href="src/styles.css">
```

New script loading block (before `</body>`):
```html
<!-- Data: loaded synchronously before logic scripts -->
<script src="src/data/flashcards.js"></script>
<script src="src/problems.js"></script>
<script src="src/theory-questions.js"></script>

<!-- Logic -->
<script src="src/js/storage.js"></script>
<script src="src/js/navigation.js"></script>
<script src="src/js/flashcards.js"></script>
<script src="src/js/quiz.js"></script>
<script src="src/js/calculator.js"></script>
<script src="src/js/theory.js"></script>

<!-- Initialization (tiny inline block) -->
<script>
loadState();
applyTheme();
setTimeout(function() {
  buildCategoryGrid();
  updateHomeStats();
}, 0);
(function() {
  const ha = document.querySelector('.header-actions');
  if (ha && !ha.id) ha.id = 'headerActionsDiv';
})();
setTimeout(function() {
  updateAuthUI();
  updateStreak();
  checkDueCards();
  const ud = getUserData();
  if (ud && ud.studyPlan) {
    showToast('📅 Du har en aktiv studieplan. Gå till Plan-fliken.', 'info', 4000);
  }
  updatePomoDisplay();
  pomoReset();
}, 500);
</script>
```

---

## Task 4: Update build.py

**Files:**
- Modify: `build.py`

Build no longer needs to inline data. It just copies `src/main-template.html` to `index.html` and `kemi1-flashcards.html`.

```python
"""
build.py – Kopierar src/main-template.html till index.html / kemi1-flashcards.html
Kör: python build.py
"""
import os, shutil

base     = os.path.dirname(os.path.abspath(__file__))
src      = os.path.join(base, 'src', 'main-template.html')
out      = os.path.join(base, 'kemi1-flashcards.html')
index    = os.path.join(base, 'index.html')

shutil.copy2(src, out)
shutil.copy2(src, index)

size = os.path.getsize(index)
print(f'Byggd: {out} + {index}')
print(f'Storlek: {size:,} bytes')
print('Klar!')
```

- [ ] Rewrite `build.py`
- [ ] Run: `python build.py`
- [ ] Verify: `index.html` size < 100 KB
- [ ] Commit

---

## Task 5: Verify in browser & commit everything

- [ ] Open `index.html` in browser (needs a local server since we use `<script src>`)
- [ ] Test: flashcard flip works
- [ ] Test: exercises/quiz tab works
- [ ] Test: calculator works
- [ ] Test: "Teori från grunden" tab loads lazily (check Network tab)
- [ ] `git add -A && git commit -m "refactor: split index.html into separate CSS/JS/data files"`
- [ ] `git push`
