# Räkna – Navbar-flytt & whitespace-fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Flytta "Räkna"-länken från "Övrigt" till "Studera" i sidebaren, och ta bort det onödiga whitespaceaet ovanför Räkna/Memorera-flikarna i exerciseScreen.

**Architecture:** Två fristående HTML-ändringar i `src/main-template.html`: (1) flytta ett `<button>`-element i navbar-HTML, (2) ta bort ett `<div class="section-header">` i exerciseScreen plus en null-guard i JS. Bygg sedan om med `python build.py`.

**Tech Stack:** Vanilla HTML/CSS/JS, Python build-script.

---

## File Map

| Fil | Ändring |
|-----|---------|
| `src/main-template.html` | Flytta nav-knapp; ta bort section-header; null-guard i JS |
| `kemi1-flashcards.html` | Genereras av `python build.py` |

---

### Task 1: Flytta "Räkna" i navbar

**Files:**
- Modify: `src/main-template.html` (rad 2513–2550)

Navbar-HTML ser ut så här i dag (förkortat):

```html
<!-- Studera-sektionen (~rad 2513) -->
<div class="nav-section">
  <span class="nav-section-label">Studera</span>
  <button class="nav-btn active" data-target="homeScreen">
    <span class="nav-btn-icon">🃏</span><span class="nav-btn-label">Flashcards</span>
  </button>
  <button class="nav-btn" data-target="tqScreen">
    <span class="nav-btn-icon">❓</span><span class="nav-btn-label">Frågor</span>
  </button>
  <button class="nav-btn" data-target="examScreen">
    <span class="nav-btn-icon">📋</span><span class="nav-btn-label">Inför prov</span>
  </button>
  <button class="nav-btn" data-target="theoryScreen">
    <span class="nav-btn-icon">📖</span><span class="nav-btn-label">Teori</span>
  </button>
</div>

<!-- Övrigt-sektionen (~rad 2543) -->
<div class="nav-section">
  <span class="nav-section-label">Övrigt</span>
  <button class="nav-btn" data-target="exerciseScreen">
    <span class="nav-btn-icon">🧮</span><span class="nav-btn-label">Räkna</span>
  </button>
  <button class="nav-btn" data-target="profileScreen">
    <span class="nav-btn-icon">👤</span><span class="nav-btn-label">Profil</span>
  </button>
</div>
```

- [ ] **Steg 1: Flytta Räkna-knappen**

I `src/main-template.html`, gör följande ändring:

**Ta bort** detta block från Övrigt-sektionen (rad ~2545–2547):
```html
      <button class="nav-btn" data-target="exerciseScreen">
        <span class="nav-btn-icon">🧮</span><span class="nav-btn-label">Räkna</span>
      </button>
```

**Lägg till** samma block i Studera-sektionen, direkt **efter** Teori-knappen (rad ~2524–2526):
```html
      <button class="nav-btn" data-target="theoryScreen">
        <span class="nav-btn-icon">📖</span><span class="nav-btn-label">Teori</span>
      </button>
      <button class="nav-btn" data-target="exerciseScreen">
        <span class="nav-btn-icon">🧮</span><span class="nav-btn-label">Räkna</span>
      </button>
    </div>
```

Ordning i Studera efteråt: Flashcards → Frågor → Inför prov → Teori → Räkna

- [ ] **Steg 2: Verifiera att Övrigt-sektionen fortfarande är korrekt**

Övrigt-sektionen ska nu bara innehålla Profil:
```html
    <div class="nav-section">
      <span class="nav-section-label">Övrigt</span>
      <button class="nav-btn" data-target="profileScreen">
        <span class="nav-btn-icon">👤</span><span class="nav-btn-label">Profil</span>
      </button>
    </div>
```

Active-state-logiken i navTo() och nav-btn click-handlers använder `data-target`-attributet, inte sektionsplacering. Inga ytterligare JS-ändringar krävs.

---

### Task 2: Ta bort whitespace i exerciseScreen

**Files:**
- Modify: `src/main-template.html` (rad ~2870–2874 och rad ~4398)

Orsaken till whitespaceaet: `section-header`-diven "Övningar" skapar ~50 px visuellt utrymme (header-höjd + margin) ovanför Räkna/Memorera-flikarna. Den är redundant eftersom sidebaren redan anger "Räkna".

Dessutom innehåller luckor-from-home-koden (rad ~4398) ett osäkert querySelector-anrop som kraschar om elementet saknas.

- [ ] **Steg 1: Ta bort section-header från exerciseScreen**

Hitta och **ta bort** dessa rader (~2871–2874):
```html
    <div class="section-header" style="margin-top:0">
      <div class="section-header-icon">🧮</div>
      <div class="section-header-text">Övningar</div>
    </div>
```

exerciseScreen ska börja direkt med `exModeRow` efter ändringen:
```html
  <div class="screen" id="exerciseScreen">
    <div class="ex-mode-row" id="exModeRow"></div>
    <div id="exRaknaSection">
```

- [ ] **Steg 2: Lägg till null-guard i luckor-from-home-koden**

Hitta denna rad (~4398):
```js
    document.querySelector('#exerciseScreen > .section-header').style.display = 'none';
```

Ersätt med:
```js
    var _exHdr = document.querySelector('#exerciseScreen > .section-header');
    if (_exHdr) _exHdr.style.display = 'none';
```

(Raden på ~6589–6590 har redan en null-guard och behöver inte ändras.)

---

### Task 3: Bygg och verifiera

**Files:**
- Run: `python build.py` i `kemi1flashcards/`-katalogen

- [ ] **Steg 1: Bygg**

```bash
cd kemi1flashcards
python build.py
```

Förväntat output: `kemi1-flashcards.html` och `index.html` uppdateras utan fel.

- [ ] **Steg 2: Verifiera navbar**

Öppna `kemi1-flashcards.html` i browser. Kontrollera:
- "Räkna" syns under "Studera"-sektionen i sidebaren
- "Räkna" syns INTE under "Övrigt"
- Klicka på "Räkna" → active-state (blå markering) visas korrekt på "Räkna"-länken
- Klicka på andra Studera-länkar → deras active-state visas korrekt

- [ ] **Steg 3: Verifiera whitespace**

I samma browser:
- Klicka "Räkna" → Räkna/Memorera-flikarna ska börja direkt under topbaren (med bara 24 px app-content-padding ovan)
- Inget extra utrymme syns ovanför flikarna
- Räkna- och Memorera-flikarna fungerar (kan växla)
- Innehållet i respektive flik laddas korrekt

- [ ] **Steg 4: Kontrollera att ingen annan vy störts**

- Flashcards, Frågor, Inför prov, Teori: navigering och active-state fungerar
- Kalkylator, Formler, PT: oförändrade
- Luckor-from-home (klicka Luckor på Flashcard-sidan): ska fortfarande fungera (inga JS-fel i console)

- [ ] **Steg 5: Commit**

```bash
git add src/main-template.html kemi1-flashcards.html index.html
git commit -m "fix: flytta Räkna till Studera i navbar, ta bort whitespace i exerciseScreen"
```
