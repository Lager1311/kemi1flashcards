# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build

The deliverable is a single self-contained HTML file. To build it:

```
python build.py
```

This assembles `kemi1-flashcards.html` from three source files in `src/`:

| Source file | Placeholder in template | Purpose |
|---|---|---|
| `src/main-template.html` | — | HTML/CSS/JS shell |
| `src/problems.js` | `/* @@PROBLEMS@@ */` | `const PROBLEMS = [...]` numeric exercises |
| `src/theory-questions.js` | `/* @@THEORY_QUESTIONS@@ */` | `const THEORY_QUESTIONS = [...]` open-answer cards |

**Always edit the `src/` files, never edit `kemi1-flashcards.html` directly** — it is a build artifact that gets overwritten.

## Architecture

The app is a Swedish Kemi 1 (high-school chemistry) flashcard/quiz app. All logic is vanilla JS embedded in a single HTML file (no build tools, no npm, no framework).

### Data format

**`src/problems.js`** — numeric calculation problems:
```js
{ id: 101, lv: 1, cat: 'mol', title: '...', q: '...', ans: 2.0, tol: 0.05, unit: 'mol',
  formula: 'n = m / M', hint: '...', steps: ['step1', 'step2', ...] }
```
- `lv` = difficulty level (1–3)
- `cat` = category slug (e.g. `'mol'`, `'konc'`, `'gas'`)
- `ans` + `tol` = accepted answer range
- `steps` = array of solution steps shown on reveal

**`src/theory-questions.js`** — open-answer theory cards:
```js
{ id: 5001, cat: 'amnen', lv: 1, q: '...', model: '...' }
```
- `model` = the model answer shown after the user responds

### ID conventions
- Problems: 100–4999, grouped by category (mol = 1xx, konc = 2xx, gas = 3xx, etc.)
- Theory questions: 5000+, grouped by category

### Study modes
The JS in `src/main-template.html` implements multiple study modes (flashcard flip, multiple-choice, numeric input, step-by-step reveal) controlled by a bottom navigation bar. Dark/light theme is toggled via `data-theme="dark"` on `<html>`.

## Utility scripts

The root directory contains many one-off Python scripts (`add_*.py`, `expand_*.py`, `fix_*.py`, `recover*.py`) used to bulk-generate or patch content. These are not part of the build pipeline — they were used to populate `src/problems.js` and `src/theory-questions.js` and can be ignored for normal development.
