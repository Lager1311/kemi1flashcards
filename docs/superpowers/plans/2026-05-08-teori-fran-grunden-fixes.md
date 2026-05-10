# Teori från grunden – Progress-bar bort & layout-fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ta bort den horisontella scroll-progress-baren i "Teori från grunden"-vyn och fixa vänsterförskjutningen av textinnehållet.

**Architecture:** Tre rena borttagningar/justeringar i `src/main-template.html`: (1) ta bort `<div class="tg-progress">` från HTML, (2) ta bort `.tg-progress` CSS-regler (desktop + mobil), (3) ta bort `tgSetupScroll()`-funktionen och dess anrop. Vänsterförskjutningen orsakas sannolikt av `.tg-progress`-elementets negativa marginaler (`margin:-32px -40px 20px`) som förskjuter layout-beräkningarna i flexbehållaren – att ta bort baren ska också fixa detta. Som extra säkerhet läggs `min-width:0` till `.tg-main` (standard flex-fix som förhindrar overflow).

**Tech Stack:** Vanilla HTML/CSS/JS, Python build-script.

---

## File Map

| Fil | Ändring |
|-----|---------|
| `src/main-template.html` | Ta bort HTML-element, CSS-regler och JS-funktion |
| `kemi1-flashcards.html` | Genereras av `python build.py` |

---

### Task 1: Ta bort progress-bar HTML och JS

**Files:**
- Modify: `src/main-template.html`

De rader som ska röras:

**HTML (~rad 3136):**
```html
<div class="tg-progress" id="tgProgress"></div>
```

**JS-funktion (~rad 12852–12858):**
```js
function tgSetupScroll() {
  var main = document.getElementById('tgMain');
  var bar = document.getElementById('tgProgress');
  main.addEventListener('scroll', function() {
    var pct = main.scrollHeight - main.clientHeight;
    bar.style.width = (pct > 0 ? (main.scrollTop / pct * 100) : 0) + '%';
  });
```

Sök också efter anropet till `tgSetupScroll()` och ta bort det.

- [ ] **Steg 1: Ta bort HTML-elementet**

Hitta och ta bort denna rad (~rad 3136):
```html
          <div class="tg-progress" id="tgProgress"></div>
```

Raden ska försvinna helt. `tgContentArea`-diven ska nu vara det första barnet i `tg-main`:
```html
        <div class="tg-main" id="tgMain">
          <div id="tgContentArea"></div>
```

- [ ] **Steg 2: Ta bort JS-funktionen `tgSetupScroll`**

Sök efter `function tgSetupScroll` och ta bort funktionsdefinitionen:
```js
function tgSetupScroll() {
  var main = document.getElementById('tgMain');
  var bar = document.getElementById('tgProgress');
  main.addEventListener('scroll', function() {
    var pct = main.scrollHeight - main.clientHeight;
    bar.style.width = (pct > 0 ? (main.scrollTop / pct * 100) : 0) + '%';
  });
}
```

- [ ] **Steg 3: Ta bort anropet till `tgSetupScroll()`**

Sök efter `tgSetupScroll()` (anropsstället, inte definitionen) och ta bort den raden. Verifiera att inga fler förekomster av `tgSetupScroll` finns kvar i filen.

---

### Task 2: Ta bort progress-bar CSS och fixa layout

**Files:**
- Modify: `src/main-template.html`

**CSS desktop (~rad 2437):**
```css
.tg-progress { position:sticky; top:0; left:0; right:0; height:3px; background:var(--accent-grad); width:0%; z-index:5; margin:-32px -40px 20px; transition:width 0.1s linear; }
```

**CSS mobil (~rad 2460):**
```css
.tg-progress { margin:-16px -14px 16px; }
```

**Layout-fix på `.tg-main`:** Lägg till `min-width:0` för att förhindra flex-overflow.

- [ ] **Steg 1: Ta bort desktop CSS-regeln för `.tg-progress`**

Hitta och ta bort denna rad (~rad 2437):
```css
.tg-progress { position:sticky; top:0; left:0; right:0; height:3px; background:var(--accent-grad); width:0%; z-index:5; margin:-32px -40px 20px; transition:width 0.1s linear; }
```

- [ ] **Steg 2: Ta bort mobil CSS-regeln för `.tg-progress`**

Hitta och ta bort denna rad i `@media(max-width:680px)`-blocket (~rad 2460):
```css
  .tg-progress { margin:-16px -14px 16px; }
```

- [ ] **Steg 3: Lägg till `min-width:0` på `.tg-main`**

Hitta (~rad 2436):
```css
.tg-main { flex:1; overflow-y:auto; padding:32px 40px 100px; max-width:860px; font-size:1.0625rem; }
```

Ändra till:
```css
.tg-main { flex:1; min-width:0; overflow-y:auto; padding:32px 40px 100px; max-width:860px; font-size:1.0625rem; }
```

---

### Task 3: Bygg och verifiera

**Files:**
- Run: `python build.py` i `kemi1flashcards/`

- [ ] **Steg 1: Bygg**

```bash
cd /c/Users/oscar/OneDrive/Skrivbord/kemi1flashcards/kemi1flashcards
python build.py
```

Förväntat: Inga fel, `kemi1-flashcards.html` och `index.html` uppdateras.

- [ ] **Steg 2: Verifiera att progress-bar är borta i build-artefakten**

Sök i `kemi1-flashcards.html`:
- Bekräfta att strängen `tg-progress` INTE förekommer
- Bekräfta att strängen `tgSetupScroll` INTE förekommer

- [ ] **Steg 3: Verifiera att `min-width:0` finns i build-artefakten**

Sök i `kemi1-flashcards.html` efter:
```
.tg-main { flex:1; min-width:0;
```
Bekräfta att det finns.

- [ ] **Steg 4: Commit och push**

```bash
git add src/main-template.html kemi1-flashcards.html index.html
git commit -m "fix: ta bort progress-bar och fixa vänsterlayout i Teori från grunden"
git push origin main
```
