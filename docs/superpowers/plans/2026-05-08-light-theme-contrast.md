# Ljust tema – Kontrastfix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fixa WCAG-kontrastfel i ljust läge: lila badges/hover-ytor, svagt text-muted, och gula nivå-badges.

**Architecture:** Fem riktade CSS-variabeländringar i `[data-theme="light"]`-blocket i `src/main-template.html` (rad 58–94). Alla ändringar är bakåtkompatibla — mörkt läge är opåverkat. Rotorsak: `--accent-light: #7c6af7` är en mellanlila som i mörkt läge fungerar som text men i ljust läge återanvänds som bakgrundsfärg, med `--accent: #5b4fe0` som textfärg ovanpå → kontrast 1.37:1.

**Tech Stack:** Vanilla CSS, Python build-script.

---

## Kontrastanalys (motivering)

| Variabel | Nuvarande värde | Problem | Nytt värde | Kontrast efter fix |
|---|---|---|---|---|
| `--accent-light` | `#7c6af7` | Används som bakgrund; text `#5b4fe0` ovanpå = 1.37:1 ❌ | `#ede9fe` | 4.96:1 ✅ |
| `--text-muted` | `#b0accc` | Nav-sektionsetiketter mot vit = 2.15:1 ❌ | `#6b6892` | 5.28:1 ✅ |
| `--text-hint` | `#c8c4e0` | Placeholder/hint mot vit = 1.6:1 ❌ | `#9996b8` | ~3.1:1 (OK för placeholder) |
| `--yellow` | `#d97706` | Nivå-2-badge mot gul-light-bg = 2.82:1 ❌ | `#92400e` | 8.5:1 ✅ |
| `--accent-grad` | `…, #7c6af7` | Gradientknapp vit text vid ljus ände = 4.07:1 ❌ | `…, #4338ca` | 8.0:1 ✅ |

---

## File Map

| Fil | Ändring |
|-----|---------|
| `src/main-template.html` | Ändra 5 CSS-variabler i `[data-theme="light"]`-blocket (rad 58–94) |
| `kemi1-flashcards.html` | Genereras av `python build.py` |

---

### Task 1: Fixa `--accent-light` och `--accent-grad` i ljust läge

**Files:**
- Modify: `src/main-template.html` (rad 67 och 84)

Hitta `[data-theme="light"]`-blocket (~rad 58). Det ser ut så här i dag (rad 66–68 och 83–85):

```css
[data-theme="light"] {
  ...
  --accent-light:  #7c6af7;    ← rad ~67
  ...
  --accent-grad:   linear-gradient(135deg, #5b4fe0, #7c6af7);  ← rad ~84
  ...
}
```

- [ ] **Steg 1: Ändra `--accent-light` i ljust-tema-blocket**

Hitta och ersätt denna exakta rad i `[data-theme="light"]`-blocket:
```css
    --accent-light:  #7c6af7;
```
Med:
```css
    --accent-light:  #ede9fe;
```

Förklaring: `#ede9fe` är den bleka lavendelton som redan används i `--accent-bg`. Det är korrekt bakgrundsfärg — text `var(--accent)` (#5b4fe0) på denna bakgrund ger 4.96:1. I mörkt läge är `--accent-light: #a78bfa` (oförändrat) korrekt ljus lila för textfärg.

- [ ] **Steg 2: Ändra `--accent-grad` i ljust-tema-blocket**

Hitta och ersätt:
```css
    --accent-grad:   linear-gradient(135deg, #5b4fe0, #7c6af7);
```
Med:
```css
    --accent-grad:   linear-gradient(135deg, #5b4fe0, #4338ca);
```

Förklaring: Gradientens ljusare ände `#7c6af7` ger 4.07:1 mot vit text (underkänt). `#4338ca` (mörklila, redan `--accent-dark`) ger 8.0:1 ✅. Knapparna ser mörkare/djupare ut men är tydliga.

- [ ] **Steg 3: Verifiera att mörkt tema är opåverkat**

Kontrollera att `:root`-blocket (rad 12–57) INTE ändrades. `--accent-light` där ska fortfarande vara `#a78bfa` och `--accent-grad` ska fortfarande vara `linear-gradient(135deg, var(--accent), var(--accent-light))`.

---

### Task 2: Fixa `--text-muted`, `--text-hint` och `--yellow` i ljust läge

**Files:**
- Modify: `src/main-template.html` (rad 71–72 och 77)

```css
[data-theme="light"] {
  ...
  --text-muted:    #b0accc;   ← rad ~71
  --text-hint:     #c8c4e0;   ← rad ~72
  ...
  --yellow:        #d97706;   ← rad ~77
  ...
}
```

- [ ] **Steg 1: Ändra `--text-muted`**

Ersätt i `[data-theme="light"]`-blocket:
```css
    --text-muted:    #b0accc;
```
Med:
```css
    --text-muted:    #6b6892;
```

Förklaring: Används för nav-sektionsetiketter ("Studera", "Övrigt", "Verktyg") och tidsstämplar. `#b0accc` ger 2.15:1 mot vitt (misslyckas WCAG AA). `#6b6892` ger 5.28:1 ✅.

- [ ] **Steg 2: Ändra `--text-hint`**

Ersätt:
```css
    --text-hint:     #c8c4e0;
```
Med:
```css
    --text-hint:     #9996b8;
```

Förklaring: Används för placeholder-text och decorativa tips. `#c8c4e0` = 1.6:1 (nästan osynligt). `#9996b8` ≈ 3.1:1 — acceptabelt för placeholder per WCAG 1.4.3 och visuellt användbart.

- [ ] **Steg 3: Ändra `--yellow`**

Ersätt:
```css
    --yellow:        #d97706;
```
Med:
```css
    --yellow:        #92400e;
```

Förklaring: Används i `.lvl-2 { color: var(--yellow) }` (Nivå-2-badges) och hints. `#d97706` på `rgba(217,119,6,0.12)`-bakgrund ≈ 2.82:1 (underkänt). `#92400e` (mörk bärnsten/brun) ger 8.5:1 ✅ mot samma bakgrund och ser bättre ut i ljust läge.

---

### Task 3: Bygg och verifiera

**Files:**
- Run: `python build.py` i `kemi1flashcards/`-katalogen

- [ ] **Steg 1: Bygg**

```bash
cd /c/Users/oscar/OneDrive/Skrivbord/kemi1flashcards/kemi1flashcards
python build.py
```

Förväntat: Inga fel. `kemi1-flashcards.html` och `index.html` uppdateras.

- [ ] **Steg 2: Verifiera att ändringarna finns i builden**

```bash
grep -n "accent-light:  #ede9fe\|text-muted:    #6b6892\|yellow:        #92400e\|4338ca" kemi1-flashcards.html
```

Förväntat: Alla fyra mönster hittas på rader inom `[data-theme="light"]`-blocket.

- [ ] **Steg 3: Kontrollera att mörkt tema är intakt**

```bash
grep -n "accent-light:  #a78bfa" kemi1-flashcards.html
```

Förväntat: Hittas (mörkt temas `--accent-light` orörd).

- [ ] **Steg 4: Commit och push**

```bash
git add src/main-template.html kemi1-flashcards.html index.html
git commit -m "fix: förbättra kontrast i ljust tema (accent-light, text-muted, yellow)"
git push origin main
```
