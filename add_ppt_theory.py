import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# ── 1. ATOMENS BYGGNAD: lägg till strålning, kärnenergisektioner ──
OLD_ATOM_END = """<h3>9. Sambandet</h3>
<p>Atomens byggnad är grunden för allt annat i kemin"""

NEW_ATOM_EXTRA = """<h3>8. Joniserande strålning – alfa, beta och gamma</h3>
<p><strong>Varför strålar instabila kärnor?</strong> En atomkärna med fel förhållande protoner/neutroner är instabil. Den söker stabilitet genom att spontant avge partiklar eller energi – <em>radioaktivt sönderfall</em>. Tre huvudtyper:</p>
<table class="theory-table">
<tr><th>Typ</th><th>Vad?</th><th>Laddning</th><th>Räckvidd i luft</th><th>Stoppas av</th></tr>
<tr><td>Alfastrålning (α)</td><td>Heliumkärna ⁴₂He</td><td>+2</td><td>~10 cm</td><td>Papper, hud</td></tr>
<tr><td>Betastrålning (β⁻)</td><td>Elektron</td><td>−1</td><td>~1 m</td><td>Aluminiumfolie (3 mm)</td></tr>
<tr><td>Gammastrålning (γ)</td><td>Elektromagnetisk vågstrålning</td><td>0</td><td>Hundratals meter</td><td>Bly/betong (dm)</td></tr>
</table>
<p><strong>Halveringstid</strong> (T½): Tid för hälften av atomkärnorna att sönderfalla. Aldrig noll – en exponentialfunktion. C-14: T½ = 5 730 år (används för datering). U-238: T½ = 4,5 miljarder år.</p>
<p><strong>Stråldos</strong> mäts i Sievert (Sv): biologisk effekt av strålning. Normal bakgrundsstrålning i Sverige ≈ 2 mSv/år (berggrund, radon, kosmisk strålning). Akut strålsjuka uppträder vid &gt;250 mSv. Gräns yrkesverksamma: 50 mSv/år.</p>

<h3>9. Kärnenergi – fission och fusion</h3>
<p><strong>E = mc²</strong> (Einstein): Massa och energi är ekvivalenta. Omvandlas 1 kg materia helt till energi frigörs 9×10¹⁶ J ≈ 2 miljarder liter olja. Kärnreaktioner omvandlar en liten del av massan – men ändå miljoner gånger mer energi per kg än kemiska reaktioner.</p>
<p><strong>Kärnfission (klyvning):</strong> En långsam neutron träffar U-235 → instabil kärna delar sig i två lättare kärnor + 2–3 nya neutroner + 200 MeV energi. De nya neutronerna kan starta fler klyvningar → <em>kedjereaktion</em>. I kärnkraftverk kontrolleras kedjereaktionen med absorberande stavar (bor/kadmium). I kärnreaktorn omvandlas värmen till ånga → generator → elektricitet.</p>
<p><strong>Kärnfusion (sammanslagning):</strong> Lätta kärnor (väte-isotoperna deuterium + tritium) slås samman till helium + neutron + 17,6 MeV. Kräver temperatur >10⁷ °C (som i solens kärna). Frigör mer energi per kg än fission, inga långlivade radioaktiva restprodukter. Ännu inte kommersiellt genomförbar på jorden.</p>

<h3>10. Sambandet</h3>
<p>Atomens byggnad är grunden för allt annat i kemin"""

if OLD_ATOM_END in content:
    content = content.replace(OLD_ATOM_END, NEW_ATOM_EXTRA, 1)
    print('✓ Atomens byggnad: strålning & kärnenergi tillagda')
else:
    # Try without the exact text
    marker = '<h3>9. Sambandet</h3>\n<p>Atomens byggnad är grunden'
    if marker in content:
        content = content.replace(marker, '<h3>10. Sambandet</h3>\n<p>Atomens byggnad är grunden', 1)
        # Insert before the old h3>9
        insert_before = '<h3>10. Sambandet</h3>\n<p>Atomens byggnad är grunden'
        # find it and insert new sections before
        idx = content.find(insert_before)
        new_secs = """<h3>8. Joniserande strålning – alfa, beta och gamma</h3>
<p><strong>Varför strålar instabila kärnor?</strong> En atomkärna med fel förhållande protoner/neutroner är instabil. Den söker stabilitet genom att spontant avge partiklar eller energi – <em>radioaktivt sönderfall</em>. Tre huvudtyper:</p>
<table class="theory-table">
<tr><th>Typ</th><th>Vad?</th><th>Laddning</th><th>Räckvidd i luft</th><th>Stoppas av</th></tr>
<tr><td>Alfastrålning (α)</td><td>Heliumkärna ⁴₂He</td><td>+2</td><td>~10 cm</td><td>Papper, hud</td></tr>
<tr><td>Betastrålning (β⁻)</td><td>Elektron</td><td>−1</td><td>~1 m</td><td>Aluminiumfolie (3 mm)</td></tr>
<tr><td>Gammastrålning (γ)</td><td>Elektromagnetisk vågstrålning</td><td>0</td><td>Hundratals meter</td><td>Bly/betong (dm)</td></tr>
</table>
<p><strong>Halveringstid</strong> (T½): Tid för hälften av atomkärnorna att sönderfalla. Aldrig noll – en exponentialfunktion. C-14: T½ = 5 730 år (används för datering). U-238: T½ = 4,5 miljarder år.</p>
<p><strong>Stråldos</strong> mäts i Sievert (Sv): biologisk effekt av strålning. Normal bakgrundsstrålning i Sverige ≈ 2 mSv/år (berggrund, radon, kosmisk strålning). Akut strålsjuka uppträder vid &gt;250 mSv. Gräns yrkesverksamma: 50 mSv/år.</p>

<h3>9. Kärnenergi – fission och fusion</h3>
<p><strong>E = mc²</strong> (Einstein): Massa och energi är ekvivalenta. Omvandlas 1 kg materia helt till energi frigörs 9×10¹⁶ J ≈ 2 miljarder liter olja. Kärnreaktioner omvandlar en liten del av massan – men ändå miljoner gånger mer energi per kg än kemiska reaktioner.</p>
<p><strong>Kärnfission (klyvning):</strong> En långsam neutron träffar U-235 → instabil kärna delar sig i två lättare kärnor + 2–3 nya neutroner + 200 MeV energi. De nya neutronerna kan starta fler klyvningar → <em>kedjereaktion</em>. I kärnkraftverk kontrolleras kedjereaktionen med absorberande stavar. I reaktorn omvandlas värmen till ånga → generator → elektricitet.</p>
<p><strong>Kärnfusion (sammanslagning):</strong> Lätta kärnor (D + T) slås samman till helium + neutron + energi. Kräver temperatur &gt;10⁷ °C. Frigör mer energi per kg än fission, inga långlivade radioaktiva restprodukter. Solens energikälla. Ännu inte kommersiellt genomförbar.</p>

"""
        content = content[:idx] + new_secs + content[idx:]
        print('✓ Atomens byggnad: strålning & kärnenergi tillagda (alt method)')
    else:
        print('✗ Could not find Atomens byggnad sambandet section')

# ── 2. TERMOKEMI: lägg till energikällor, fotosyntes, biobränsle ──
OLD_TERMO_SAMBANDET = '<h3>6. Sambandet</h3>'
NEW_TERMO_EXTRA = """<h3>6. Energikällor och miljöpåverkan</h3>
<p><strong>Fossila bränslen</strong> (kol, olja, naturgas) bildades av organiska rester under hundratals miljoner år. Vid förbränning frigörs lagrad koldioxid: kol + olja + naturgas + O₂ → CO₂ + H₂O + energi. Problemet: CO₂ som lagrats i miljoner år frigörs på decennier → förstärkt växthuseffekt → global uppvärmning.</p>
<p><strong>Växthuseffekten:</strong> Solen sänder ut kortsvågig strålning som värmer jordytan. Jordytan återutstrålar som IR (värmestrålning). Växthusgaser (CO₂, CH₄, N₂O, H₂O) absorberar IR → håller kvar värmen. Utan naturlig växthuseffekt: –18 °C på jordens yta. Förstärkt effekt: +1–4 °C extra till 2100 enligt IPCC.</p>
<p><strong>Förnybar energi:</strong></p>
<ul>
<li><strong>Biobränsle:</strong> Etanol (jäsning av socker/stärkelse), metan (biogasrötrötning). CO₂-neutralt i teorin – växterna har tagit upp lika mycket CO₂ under sin livstid som frigörs vid förbränning.</li>
<li><strong>Solenergi:</strong> Solceller (fotovoltaik): solenergi → elektricitet direkt. Solfångare: solenergi → värme.</li>
<li><strong>Vattenkraft:</strong> Lägesenergi → rörelseenergi → elektricitet. Sverige ≈ 45 % av el från vattenkraft.</li>
<li><strong>Vindkraft:</strong> Rörelseenergi hos luft → elektricitet via generator.</li>
</ul>
<p><strong>Fotosyntesen (energilagring):</strong> 6CO₂ + 6H₂O + ljusenergi → C₆H₁₂O₆ + 6O₂. Endoterm (ΔH &gt; 0); energin lagras som kemiska bindningar i glukos. Klorofyll absorberar rött och blått ljus.</p>
<p><strong>Cellandning (energifrigörelse):</strong> C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi (ATP). Exoterm (ΔH &lt; 0); omvandlar kemisk energi till ATP. Pågår ständigt i alla levande celler.</p>
<p><strong>Verkningsgrad (η):</strong> Kvoten uttagen nyttig energi / tillförd energi × 100 %. Termodynamikens andra lag: vid varje energiomvandling bildas spillvärme → η alltid &lt;100 %. Kolkraftverk: η ≈ 35 %. Värmepump: η kan vara &gt;300 % (transporterar värme, skapar inte).</p>

<h3>7. Sambandet</h3>"""

if OLD_TERMO_SAMBANDET in content:
    # Find it in Termokemi section specifically
    termo_idx = content.find("cat: 'Termokemi & energi'")
    sambandet_idx = content.find(OLD_TERMO_SAMBANDET, termo_idx)
    if sambandet_idx != -1:
        content = content[:sambandet_idx] + NEW_TERMO_EXTRA + content[sambandet_idx + len(OLD_TERMO_SAMBANDET):]
        print('✓ Termokemi: energikällor, fotosyntes, miljöpåverkan tillagda')
    else:
        print('✗ Could not find Termokemi sambandet')
else:
    print('✗ OLD_TERMO_SAMBANDET not found')

# ── 3. LÖSNINGAR: lägg till lika löser lika, hydratisering, legeringar ──
OLD_LOS_SAMBANDET = """<h3>5. Sambandet</h3>
<p>Allt i lösningskemin hänger ihop"""

NEW_LOS_EXTRA = """<h3>4. Lika löser lika – polaritet avgör löslighet</h3>
<p><strong>Principen:</strong> "Lika löser lika" (lat. <em>similia similibus solvuntur</em>). Polära ämnen och elektrolyter löses i polära lösningsmedel (vatten). Opolära ämnen löses i opolära lösningsmedel (hexan, bensin, aceton).</p>
<p><strong>Varför?</strong> Löslighet kräver att lösningsmedlets intermolekylära krafter kan ersätta de krafter som håller ihop det lösta ämnet. Vatten (dipol) kan bilda starka dipol–jon-interaktioner med joner och vätebindningar med -OH-grupper. Opolärt hexan kan bara bilda van der Waals-krafter, vilket inte räcker för att separera joner.</p>
<p><strong>Hydratisering:</strong> När NaCl löses i vatten omger O-sidan av vattenmolekyler Na⁺ (positiv jon) och H-sidan omger Cl⁻ (negativ jon). Varje jon omges av ett <em>hydratskal</em> → stabiliseras i lösning. Lösningsvärme: energin som frigörs vid hydratisering kan överstiga gittrerenergin → lösning endoterm (NH₄NO₃) eller exoterm (NaOH).</p>
<p><strong>Organiska molekyler:</strong> OH-grupper är polära → löser sig i vatten. Kolkedjan är opolär → löser sig i organiska lösningsmedel. Kort kolkedja + OH-grupp (etanol): löser sig i vatten. Lång kolkedja + OH-grupp (stearinsyra): löser sig ej → tvålar fungerar som gränsagenter (hydrofilt huvud + hydrofob svans).</p>
<p><strong>Gaser i vatten:</strong> Lösligheten ökar med trycket (Henrys lag: c = k·p) men minskar med temperaturen. Därför frigörs CO₂-bubblor ur varm läsk.</p>

<h3>5. Legeringar – metallernas fasta lösningar</h3>
<p>En <strong>legering</strong> är en homogen blandning av metaller (eller metall + icke-metall) i fast form – en <em>blandkristall</em>. Legeringar har ofta bättre egenskaper än de rena metallerna:</p>
<table class="theory-table">
<tr><th>Legering</th><th>Beståndsdelar</th><th>Egenskap</th></tr>
<tr><td>Brons</td><td>Cu + Sn</td><td>Hårdare än Cu, korrosionsbeständig</td></tr>
<tr><td>Mässing</td><td>Cu + Zn</td><td>Glänsande, formbar</td></tr>
<tr><td>Rostfritt stål</td><td>Fe + Cr + Ni</td><td>Cr₂O₃-skikt skyddar mot rost (passivering)</td></tr>
<tr><td>Stål</td><td>Fe + C (0,05–2 %)</td><td>Hårdare och starkare än järn</td></tr>
</table>

<h3>6. Sambandet</h3>
<p>Allt i lösningskemin hänger ihop"""

if OLD_LOS_SAMBANDET in content:
    los_idx = content.find("cat: 'Lösningar & koncentration'")
    sambandet_idx = content.find(OLD_LOS_SAMBANDET, los_idx)
    if sambandet_idx != -1:
        content = content[:sambandet_idx] + NEW_LOS_EXTRA + content[sambandet_idx + len(OLD_LOS_SAMBANDET):]
        print('✓ Lösningar: lika löser lika, hydratisering, legeringar tillagda')
    else:
        print('✗ Could not find Lösningar sambandet')
else:
    print('✗ OLD_LOS_SAMBANDET not found - searching...')
    idx = content.find("cat: 'Lösningar & koncentration'")
    html_start = content.find('html: `', idx) + 7
    html_end = content.find('`', html_start)
    html = content[html_start:html_end]
    # Find all h3 headings
    import re
    h3s = re.findall(r'<h3>[^<]+</h3>', html)
    for h in h3s:
        print(' ', h)

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Saved.')
