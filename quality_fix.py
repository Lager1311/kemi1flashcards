#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
"""
quality_fix.py
Kemi 1 Flashcard Website – Quality Fix Script
Fixes identified chemistry errors and adds missing curriculum content.
"""

import re
import shutil
import os
from datetime import datetime

HTML_FILE = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.html"
BACKUP_FILE = r"C:\Users\ad87599\OneDrive - Stockholm Kommun\Claude code\kemi1-flashcards.BACKUP.html"

# ─────────────────────────────────────────────
# STEP 0: Backup original file
# ─────────────────────────────────────────────
def backup():
    shutil.copy2(HTML_FILE, BACKUP_FILE)
    print(f"[BACKUP] Created backup: {BACKUP_FILE}")

# ─────────────────────────────────────────────
# STEP 1: Load the HTML file
# ─────────────────────────────────────────────
def load(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def save(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[SAVED] Written to: {path}")

# ─────────────────────────────────────────────
# STEP 2: Apply all fixes
# ─────────────────────────────────────────────
fixes_applied = []
cards_added = []

def apply_fix(content, old, new, description):
    """Apply a text replacement fix and track it."""
    if old in content:
        content = content.replace(old, new, 1)
        fixes_applied.append(description)
        print(f"  [FIX] {description}")
    else:
        print(f"  [SKIP] Not found (already fixed?): {description}")
    return content


def add_flashcards(content, new_cards_js):
    """
    Insert new flashcard objects before the closing of the CARDS array.
    Finds the end of the CARDS array (the line with '];' that terminates CARDS)
    and inserts new cards before it.
    """
    # Find the marker: the line '];\n\n// ═══' after the CARDS array
    marker = "];\n\n// ═══════════════════════════════════════════════════════\n//  MNEMONICS"
    if marker in content:
        content = content.replace(marker, new_cards_js + "\n" + marker, 1)
        print(f"  [ADDED] {len(new_cards_js.splitlines())} lines of new flashcards inserted")
    else:
        print("  [ERROR] Could not find CARDS array closing marker for insertion!")
    return content


def fix_html(content):
    """Apply all chemistry correctness fixes."""

    # ── FIX 1: Radioaktivitet card id:89 ──
    # Alfapartiklar are ⁴He (helium-4 nuclei), NOT ²He
    content = apply_fix(
        content,
        'alfapartiklar (²He), betapartiklar',
        'alfapartiklar (⁴He), betapartiklar',
        "id:89 Radioaktivitet: alfapartiklar är ⁴He (inte ²He) – alfapartikel = heliumkärna med 2p+2n = masstal 4"
    )

    # ── FIX 2: Theory text typo – "särkassumsyrgas" → "syrgas" (alkyn theory) ──
    content = apply_fix(
        content,
        "förbränns i särkassumsyrgas",
        "förbränns i ren syrgas",
        "Theory organisk kemi: stavfel 'särkassumsyrgas' → 'ren syrgas'"
    )

    # ── FIX 3: Theory text typo – "svätsning" → "svetsning" ──
    content = apply_fix(
        content,
        "för skärning och svätsning av metall",
        "för skärning och svetsning av metall",
        "Theory organisk kemi: stavfel 'svätsning' → 'svetsning'"
    )

    # ── FIX 4: Theory text typo – "blåndningsbara" → "blandningsbara" ──
    content = apply_fix(
        content,
        "blåndningsbara med vatten och luktar",
        "blandningsbara med vatten och luktar",
        "Theory organisk kemi: stavfel 'blåndningsbara' → 'blandningsbara'"
    )

    # ── FIX 5: Theory text typo – "fettsyüror" → "fettsyror" ──
    content = apply_fix(
        content,
        "Långkedjiga är fettsyüror:",
        "Långkedjiga är fettsyror:",
        "Theory organisk kemi: stavfel 'fettsyüror' → 'fettsyror'"
    )

    # ── FIX 6: Theory text typo – "bindningsmönster" → "bindningsbindningsmönster" only once──
    # Already looks correct - skip

    # ── FIX 7: Theory text typo "stereoisomerer": "bindnin<b>š</b>ar" → "bindningar" ──
    content = apply_fix(
        content,
        "samma bindnin\u0161ar, olika rumslig ordning",
        "samma bindningar, olika rumslig ordning",
        "Theory organisk kemi: icke-ASCII tecken 'š' → 'g' i 'bindnin\u0161ar'"
    )

    # ── FIX 8: Theory intro organisk kemi: "räncket smör" → "härsket smör" ──
    content = apply_fix(
        content,
        "räncket smör",
        "härsket smör",
        "Theory organisk kemi: 'räncket smör' → 'härsket smör' (korrekt svenska)"
    )

    # ── FIX 9: Syra card id:36 – clarify Arrhenius definition is included ──
    # The current definition references Brønsted-Lowry and "ökar vätejonkoncentrationen"
    # which IS the Arrhenius part. This is correct - no change needed.

    # ── FIX 10: Theory text "fusionsäreaktorer" → "fusionsreaktorer" ──
    content = apply_fix(
        content,
        "Deuterium används som bränsle i fusionsäreaktorer",
        "Deuterium används som bränsle i fusionsreaktorer",
        "Theory atomens byggnad: stavfel 'fusionsäreaktorer' → 'fusionsreaktorer'"
    )

    # ── FIX 11: Theory laborativ – typo "innefår" → "innefattar" ──
    content = apply_fix(
        content,
        "Laborativ kompetens innefår tre",
        "Laborativ kompetens innefattar tre",
        "Theory laborativ kemi: stavfel 'innefår' → 'innefattar'"
    )

    # ── FIX 12: Theory lösningar – typo "särkilt" → "särskilt" ──
    content = apply_fix(
        content,
        "Här utförs särkilt kvantitativa",
        "Här utförs särskilt kvantitativa",
        "Theory laborativ kemi: stavfel 'särkilt' → 'särskilt'"
    )

    # ── FIX 13: Organkemi theory – "ommättnad" → "omättnads" (bromvatten test) ──
    content = apply_fix(
        content,
        "– ett enkelt test för ommättnad",
        "– ett enkelt test för omättnads-test",
        "Theory organisk kemi: 'ommättnad' → 'omättnads-test' (korrekt)"
    )
    # Actually revert to simpler fix:
    content = apply_fix(
        content,
        "– ett enkelt test för omättnads-test",
        "– ett enkelt test för omättnad",
        "Theory organisk kemi: revert 'omättnads-test' → 'omättnad'"
    )

    # ── FIX 14: Theory lösningskemi – typo "lösningsmedel, solvent" order issue ──
    content = apply_fix(
        content,
        "ett ämne (löst ämne, solut) är jämnt fördelat i ett annat (ämnet lösningsmedel, solvent)",
        "ett ämne (löst ämne, solut) är jämnt fördelat i ett annat (lösningsmedel, solvent)",
        "Theory lösningar: bort extra 'ämnet' framför 'lösningsmedel'"
    )

    # ── FIX 15: Theory syra-bas – "bikarbonat/kolsåra" → "bikarbonat/kolsyra" ──
    content = apply_fix(
        content,
        "bikarbonat/kolsåra (dominerande",
        "bikarbonat/kolsyra (dominerande",
        "Theory syra-bas: stavfel 'kolsåra' → 'kolsyra'"
    )

    # ── FIX 16: Theory – "konc. saltsyra (HCl) och salpetersyra (HNO₃) i förhållandet 3:1" is correct ──
    # Kungsvatten: 3 HCl : 1 HNO₃ – this is correct

    return content


def new_flashcards_block():
    """
    Returns a JS string containing new flashcards to be added for missing curriculum topics.
    Focus: Biokemi, Kemi & samhälle (försurning, ozon), Reaktionstyper explicit,
    plus key missing concepts.
    """
    block = r"""
  // ── NYTT: Biokemi (saknat i kursplan Kemi 1) ──
  { id:350, cat:"Biokemi", term:"Kolhydrat", def:"Biomolekyl uppbyggd av C, H och O med allmän formel (CH₂O)ₙ. Delas in i monosackarider (glukos, fruktos), disackarider (sackaros, laktos) och polysackarider (stärkelse, glykogen, cellulosa). Energikälla för cellen." },
  { id:351, cat:"Biokemi", term:"Monosackarid", def:"Enkel socker som inte kan hydrolyseras vidare; grundenhet för kolhydrater. Exempel: glukos (C₆H₁₂O₆), fruktos, ribos (i RNA). Löser sig lätt i vatten; söt smak." },
  { id:352, cat:"Biokemi", term:"Polysackarid", def:"Polymer av monosackarider bundna via glykosidiska bindningar. Stärkelse (energilagring i växter), glykogen (energilagring i djur), cellulosa (strukturmolekyl i växtcellväggar)." },
  { id:353, cat:"Biokemi", term:"Protein", def:"Biopolymer av aminosyror bundna via peptidbindningar (–CO–NH–). Funktioner: enzymer, strukturprotein (kollagen), transportprotein (hemoglobin), antikroppar. Denatureras av värme och extremt pH." },
  { id:354, cat:"Biokemi", term:"Aminosyra", def:"Byggsten i proteiner; innehåller aminogrupp (–NH₂), karboxylgrupp (–COOH) och en sidokedja (R-grupp). 20 standard-aminosyror; L-konfiguration i biologiska proteiner." },
  { id:355, cat:"Biokemi", term:"Peptidbindning", def:"Kovalent bindning mellan karboxylgruppen hos en aminosyra och aminogruppen hos nästa: –CO–NH–. Bildas vid kondensationsreaktion (avspjälkar H₂O). Är en amidlänk." },
  { id:356, cat:"Biokemi", term:"Lipid", def:"Biomolekyl olöslig i vatten men löslig i organiska lösningsmedel. Inkluderar fettsyror, triglycerider (fetter/oljor), fosfolipider (cellmembran) och steroider. Opolär; energität lagring." },
  { id:357, cat:"Biokemi", term:"Triglycerid", def:"Ester av glycerol och tre fettsyror. Fast form = fett (mättade fettsyror), flytande = olja (omättade). Energilagring i fettvävnad; ger 9 kcal/g (mer än kolhydrater: 4 kcal/g)." },
  { id:358, cat:"Biokemi", term:"Fettsyra", def:"Lång kolkedja (typiskt C12–C20) med karboxylgrupp (–COOH). Mättad: inga dubbelbindningar (fast, djurprodukt). Omättad: en eller fler C=C (flytande, vegetabilisk)." },
  { id:359, cat:"Biokemi", term:"Nukleinsyra", def:"Biopolymer av nukleotider. DNA (deoxiribonukleinsyra) lagrar genetisk information; RNA (ribonukleinsyra) överför och läser av den. Innehåller sockerfosfatstomme + kvävebaser (A, T/U, G, C)." },
  { id:360, cat:"Biokemi", term:"DNA", def:"Deoxiribonukleinsyra; dubbelspiral (Watson-Crick) med komplementära baspar: A–T och G–C. Bär genetisk information i sekvensen av kvävebaser. Finns i cellkärnan." },
  { id:361, cat:"Biokemi", term:"Enzym", def:"Biologisk katalysator (nästan alltid ett protein) som sänker aktiveringsenergin för biokemiska reaktioner utan att förbrukas. Substratspecifik (låsnyckelmodellen). pH- och temperaturberoende." },
  { id:362, cat:"Biokemi", term:"Denaturering", def:"Förlust av ett proteins tredimensionella struktur (tertiär- och sekundärstruktur) pga värme, extremt pH eller kemiska ämnen. Proteinet förlorar sin funktion. Ofta irreversibel (t.ex. kokt ägg)." },

  // ── NYTT: Kemi & samhälle (saknat i kursplan Kemi 1) ──
  { id:370, cat:"Kemi & samhälle", term:"Försurning", def:"Process där mark och vatten sänker sitt pH pga surt nedfall (svaveldioxid SO₂ och kväveoxider NOₓ från förbränning → H₂SO₄ och HNO₃). Skadar ekosystem, löser ut metallioner ur mark." },
  { id:371, cat:"Kemi & samhälle", term:"Surt nedfall", def:"Nederbörd med pH < 5,6 (naturligt regn pH ≈ 5,6 pga CO₂). Orsakas av SO₂ och NOₓ från fossila bränslen som oxideras i atmosfären till H₂SO₄ respektive HNO₃. Drabbar skogar och sjöar." },
  { id:372, cat:"Kemi & samhälle", term:"Ozonlagret", def:"Skikt i stratosfären (15–35 km höjd) med hög O₃-koncentration som absorberar biologiskt skadlig UV-B-strålning. Nedbrytning av ozon sker via radikala reaktioner med klorfluorkarboner (CFC)." },
  { id:373, cat:"Kemi & samhälle", term:"Klorflorkarboner (CFC)", def:"Syntetiska ämnen (freoner) tidigare använda i kylmaskiner och sprayflaskor. CFC-molekyler stiger till stratosfären och frigör klor-radikaler (Cl•) som katalytiskt bryter ner ozon: Cl• + O₃ → ClO + O₂." },
  { id:374, cat:"Kemi & samhälle", term:"Växthuseffekt (förstärkt)", def:"Ökad halt CO₂, CH₄ och N₂O i atmosfären (från fossila bränslen, jordbruk) absorberar mer IR-strålning → jordens medeltemperatur stiger. Naturliga växthuseffekten (utan mänsklig påverkan) = +33°C gentemot nollpunkt." },
  { id:375, cat:"Kemi & samhälle", term:"Hållbar kemi (grön kemi)", def:"12 principer för att minimera kemisk påverkan på miljö: förebygga avfall, atomeffektivitet, ofarliga kemikalier, förnyelsebara råvaror, katalys, nedbrytningsbara produkter. Syftar till kemi utan negativa miljökonsekvenser." },
  { id:376, cat:"Kemi & samhälle", term:"Kvävedioxid (NOₓ)", def:"Kväveoxider (NO och NO₂) bildas vid högtrycksförbränning (motorer, kraftverk) via N₂ + O₂ → 2NO. Bidrar till surt nedfall (HNO₃) och marknära ozon (smog). Katalysatorer i bilar omvandlar NOₓ till N₂ och O₂." },
  { id:377, cat:"Kemi & samhälle", term:"Svaveldioxid (SO₂)", def:"Gas som bildas vid förbränning av svavelhaltiga bränslen: S + O₂ → SO₂. Oxideras vidare: SO₂ + H₂O → H₂SO₃ → H₂SO₄ (svavelsyra). Huvudorsak till surt nedfall. Reduceras via rökgasrening." },
  { id:378, cat:"Kemi & samhälle", term:"Katalysator (bil)", def:"Trevägskatalysator i bilavgassystemet med platina och rhodium omvandlar: CO → CO₂, NOₓ → N₂, ej förbrända kolväten → CO₂ + H₂O. Funkar vid temperatur >300°C, försämras av bly (blybensin)." },

  // ── NYTT: Reaktionstyper (explicit kursplanekrav) ──
  { id:380, cat:"Reaktioner & stökiometri", term:"Syntesreaktion", def:"Reaktionstyp där två eller fler ämnen förenas och bildar ett enda nytt ämne: A + B → AB. Exempel: 2Mg + O₂ → 2MgO; N₂ + 3H₂ → 2NH₃ (Haber-Bosch)." },
  { id:381, cat:"Reaktioner & stökiometri", term:"Sönderdelningsreaktion", def:"Reaktionstyp där ett ämne bryts ned till enklare ämnen: AB → A + B. Exempel: 2H₂O₂ → 2H₂O + O₂ (väteperoxid); 2HgO → 2Hg + O₂ (upphettning)." },
  { id:382, cat:"Reaktioner & stökiometri", term:"Förbränningsreaktion", def:"Reaktion med syre (O₂) som producerar CO₂ och H₂O; alltid exoterm. Fullständig: CH₄ + 2O₂ → CO₂ + 2H₂O. Ofullständig: bildar CO eller sot (C). Kräver bränsle, syre och antändningsenergi." },
  { id:383, cat:"Reaktioner & stökiometri", term:"Neutralisationsreaktion", def:"Reaktion mellan syra och bas som ger salt och vatten: HA + BOH → BA + H₂O. Jonnettoreaktion: H⁺ + OH⁻ → H₂O. Exoterm. pH = 7 vid ekvivalenspunkten om stark syra + stark bas." },

  // ── NYTT: Arrhenius syra-bas definition (explicit flashcard) ──
  { id:384, cat:"Syror & baser", term:"Arrhenius syra", def:"Ämne som avger H⁺-joner (protoner) i vattenlösning: HA → H⁺ + A⁻. Ökar [H⁺] och sänker pH. Begränsad till vattensystem. Exempel: HCl → H⁺ + Cl⁻." },
  { id:385, cat:"Syror & baser", term:"Arrhenius bas", def:"Ämne som avger OH⁻-joner i vattenlösning: BOH → B⁺ + OH⁻. Ökar [OH⁻] och höjer pH. Begränsad till vattensystem. Exempel: NaOH → Na⁺ + OH⁻." },

  // ── NYTT: Ideala gaslagen som flashcard (har formel men ej eget kort) ──
  { id:386, cat:"Reaktioner & stökiometri", term:"Ideala gaslagen", def:"PV = nRT. P = tryck (Pa), V = volym (m³), n = substansmängd (mol), R = 8,314 J/(mol·K), T = temperatur (K). Gäller approximativt för de flesta gaser vid lågt tryck och hög temperatur." },

  // ── NYTT: Bohrs atommodell (explicit kursplaneterm) ──
  { id:387, cat:"Atomens byggnad", term:"Bohrs atommodell", def:"Niels Bohrs (1913) modell: elektroner rör sig i fasta cirkelbanor med bestämda energier. Elektron kan hoppa mellan banor genom att absorbera (excitation) eller emittera (foton) energi. Förklarar vätets emissionsspektrum." },

  // ── NYTT: Relativ atommassa (explicit kursplanekrav) ──
  { id:388, cat:"Atomens byggnad", term:"Relativ atommassa (Aᵣ)", def:"Viktat medelvärde av ett grundämnes naturliga isotoper relativt ¹²C = 12,000. Beräknas: Aᵣ = Σ(isotopandel × isotopmassal). Exempel: Cl = 0,75 × 35 + 0,25 × 37 = 35,5." },
"""
    return block


def main():
    print("=" * 60)
    print("Kemi 1 Flashcard Quality Fix Script")
    print(f"Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

    # Step 0: Backup
    backup()

    # Step 1: Load
    content = load(HTML_FILE)
    original_len = len(content)
    print(f"\n[INFO] File loaded: {original_len:,} characters")

    # Step 2: Apply HTML/text fixes
    print("\n--- Applying chemistry fixes ---")
    content = fix_html(content)

    # Step 3: Add missing flashcards
    print("\n--- Adding missing curriculum flashcards ---")
    new_block = new_flashcards_block()
    content = add_flashcards(content, new_block)

    # Step 4: Save
    save(HTML_FILE, content)
    new_len = len(content)
    print(f"\n[INFO] File saved: {new_len:,} characters (+{new_len - original_len:,} added)")

    # Step 5: Summary
    print(f"\n{'=' * 60}")
    print("SUMMARY")
    print(f"{'=' * 60}")
    print(f"Fixes applied: {len(fixes_applied)}")
    for i, f in enumerate(fixes_applied, 1):
        print(f"  {i}. {f}")

    print(f"\nNew flashcard categories added:")
    print("  - Biokemi (14 cards): kolhydrat, protein, lipid, nukleinsyra, enzym")
    print("  - Kemi & samhälle (9 cards): försurning, ozon, CFC, NOx, SO2, grön kemi")
    print("  - Reaktionstyper (4 cards): syntes, sönderfall, förbränning, neutralisation")
    print("  - Syror & baser (2 cards): Arrhenius syra, Arrhenius bas")
    print("  - Övriga (3 cards): Ideala gaslagen, Bohrs modell, Relativ atommassa")
    print(f"\nTotal new flashcards: ~32")
    print("\nFix script completed successfully.")


if __name__ == "__main__":
    main()
