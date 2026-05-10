# Bugfix: Kategorikort och Profilsida

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fixa fyra UI-buggar relaterade till kategorikortsnamn (trunkerade), fel etiketter på profilsidan, inkonsistenta ID/etikett-par, och saknade CSS-skuggor i mörkt läge.

**Architecture:** Alla ändringar sker i `src/styles.css`, `src/main-template.html` och `src/js/flashcards.js`. Inga nya filer behöver skapas. Bygg sedan med `python build.py`.

**Tech Stack:** Vanilla CSS, HTML, vanilla JS (ingen npm, ingen framework).

---

## Filer som ändras

| Fil | Vad ändras |
|-----|-----------|
| `src/styles.css:316` | `.cat-card-top .cat-name` — ta bort texttrunkeringen |
| `src/styles.css:43-46` | Lägg till `[data-theme="dark"]` med shadow-variabler |
| `src/js/flashcards.js:102-107` | Lägg till `title`-attribut på "Alla"-kortet |
| `src/js/flashcards.js:123-132` | Lägg till `title`-attribut och byt ID-namn |
| `src/js/flashcards.js:222-224` | Uppdatera ID-referenser i JS |
| `src/main-template.html:131-136` | Byt ID-namn och etiketter på stats-rad |
| `src/main-template.html:322` | Ändra profil-etikett "Sessioner kort" → "Inlärda kort" |

---

### Task 1: Fixa trunkerade kategorinamn (CSS)

**Files:**
- Modify: `src/styles.css:316`

- [ ] **Steg 1: Hitta och ändra CSS-regeln som trunkerar texten**

  I `src/styles.css` på rad 316, ändra:
  ```css
  .cat-card-top .cat-name { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  ```
  till:
  ```css
  .cat-card-top .cat-name { flex: 1; min-width: 0; white-space: normal; word-break: break-word; }
  ```

- [ ] **Steg 2: Commit**

  ```bash
  git add src/styles.css
  git commit -m "fix: visa hela kategorinamn utan trunkering"
  ```

---

### Task 2: Lägg till title-attribut på .cat-card element (JS)

Dessa element skapas dynamiskt i JS, så `title`-attributet måste sättas där.

**Files:**
- Modify: `src/js/flashcards.js:98-107` (allCard)
- Modify: `src/js/flashcards.js:123-132` (per-kategori-kort)

- [ ] **Steg 1: Lägg till title på "Alla kategorier"-kortet**

  I `src/js/flashcards.js`, efter rad 100 (`allCard.dataset.cat = '__all__';`), lägg till:
  ```js
  allCard.title = 'Alla kategorier';
  ```

- [ ] **Steg 2: Lägg till title på per-kategori-kort**

  I `src/js/flashcards.js`, efter rad 125 (`div.dataset.cat = cat;`), lägg till:
  ```js
  div.title = cat;
  ```

- [ ] **Steg 3: Commit**

  ```bash
  git add src/js/flashcards.js
  git commit -m "fix: lägg till title-attribut på kategorikort"
  ```

---

### Task 3: Rätta etiketter och ID:n på hemskärmens stats-rad

Nuläge:
- `id="masteredCards"` visar antal valda kort — etikett "Valda kort" (korrekt) men ID stämmer inte
- `id="remainingCards"` visar antal valda kategorier — etikett "Kategorier" (korrekt) men ID stämmer inte

Lösning: Byt ID-namn i HTML och JS så att ID, etikett och data stämmer överens.

**Files:**
- Modify: `src/main-template.html:131-136`
- Modify: `src/js/flashcards.js:222-224`

- [ ] **Steg 1: Ändra HTML**

  I `src/main-template.html`, ändra stats-raden (runt rad 130–137) från:
  ```html
  <div class="stat-card stat-green">
    <div class="stat-num s-green" id="masteredCards">—</div>
    <div class="stat-label">Valda kort</div>
  </div>
  <div class="stat-card stat-yellow">
    <div class="stat-num s-blue" id="remainingCards">—</div>
    <div class="stat-label">Kategorier</div>
  </div>
  ```
  till:
  ```html
  <div class="stat-card stat-green">
    <div class="stat-num s-green" id="selectedCards">—</div>
    <div class="stat-label">Valda kort</div>
  </div>
  <div class="stat-card stat-yellow">
    <div class="stat-num s-blue" id="selectedCats">—</div>
    <div class="stat-label">Kategorier</div>
  </div>
  ```

- [ ] **Steg 2: Uppdatera JS-referenserna**

  I `src/js/flashcards.js`, i funktionen `updateHomeStats()` (rad 218–225), ändra:
  ```js
  document.getElementById('masteredCards').textContent = sel.length;
  document.getElementById('remainingCards').textContent =
    state.selectedCats.size === 0 ? 'Alla' : state.selectedCats.size;
  ```
  till:
  ```js
  document.getElementById('selectedCards').textContent = sel.length;
  document.getElementById('selectedCats').textContent =
    state.selectedCats.size === 0 ? 'Alla' : state.selectedCats.size;
  ```

- [ ] **Steg 3: Commit**

  ```bash
  git add src/main-template.html src/js/flashcards.js
  git commit -m "fix: rätta ID-namn på stats-kort så de matchar etiketter och data"
  ```

---

### Task 4: Rätta fel etikett på profilsidans stats-kort

**Files:**
- Modify: `src/main-template.html:322`

- [ ] **Steg 1: Ändra etiketten**

  I `src/main-template.html` på rad 322, ändra:
  ```html
  <div class="stat-label">Sessioner kort</div>
  ```
  till:
  ```html
  <div class="stat-label">Inlärda kort</div>
  ```

- [ ] **Steg 2: Commit**

  ```bash
  git add src/main-template.html
  git commit -m "fix: byt etikett Sessioner kort -> Inlärda kort på profilsidan"
  ```

---

### Task 5: Lägg till shadow-variabler för mörkt läge

Även om `:root` redan definierar `--shadow`, `--shadow-lg` och `--shadow-card`, saknas ett explicit `[data-theme="dark"]`-block. JS sätter `data-theme="dark"` på `<html>`, och det finns redan specifik CSS under `[data-theme="dark"]` (t.ex. rad 1073). Lägg till ett explicit block för dessa shadow-variabler.

**Files:**
- Modify: `src/styles.css` (efter rad 84, efter `[data-theme="light"]`-blocket)

- [ ] **Steg 1: Lägg till [data-theme="dark"] med shadow-variabler**

  I `src/styles.css`, lägg till följande direkt efter `[data-theme="light"]`-blockets avslutande `}` (rad 84):
  ```css
  [data-theme="dark"] {
    --shadow:        0 4px 24px rgba(0,0,0,0.5);
    --shadow-lg:     0 12px 48px rgba(0,0,0,0.7);
    --shadow-card:   0 2px 16px rgba(0,0,0,0.35);
    --glow:          0 0 24px rgba(124,106,247,0.3);
  }
  ```

- [ ] **Steg 2: Commit**

  ```bash
  git add src/styles.css
  git commit -m "fix: lägg till [data-theme=dark] shadow-variabler för korrekt djup"
  ```

---

### Task 6: Bygg och verifiera

- [ ] **Steg 1: Bygg**

  ```bash
  python build.py
  ```
  Förväntat output:
  ```
  index.html            ... bytes  (... KB)  – server
  kemi1-flashcards.html ... bytes (... KB) – standalone
  Klar!
  ```

- [ ] **Steg 2: Verifiera manuellt i webbläsaren**

  Öppna `kemi1-flashcards.html` i webbläsare och kontrollera:
  - [ ] Kategorinamn (t.ex. "Alla kategorier", "Organisk kemi") visas utan "..."
  - [ ] Hovra över ett kategorikort — `title`-tooltip visas med fullständigt namn
  - [ ] Hemskärm stats: andra kortet heter "Valda kort" (ID: selectedCards), tredje "Kategorier" (ID: selectedCats)
  - [ ] Profilsida: stats-kortet med grönt nummer visar "Inlärda kort"
  - [ ] Mörkt läge (standard): kort har synliga skuggor vid hover
  - [ ] Byt till ljust läge och tillbaka — skuggor fungerar korrekt i båda
