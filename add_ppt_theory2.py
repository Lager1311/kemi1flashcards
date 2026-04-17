import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# ── 1. ATOMENS BYGGNAD: lägg till fission, E=mc² i sektion 7 ──
OLD_ATOM_RAD = """<p><strong>Halveringstid t½</strong> är den tid det tar för hälften av alla atomer i ett prov att sönderfalla. Täcker allt från mikrosekunders (obeh till miljarder år (U-238). Förmålan N(t) = N₀ × (½)^(t/t½). Radons t½ = 3,82 dygn – viktigt för innomhusluftmätning.</p>"""

NEW_ATOM_RAD = """<p><strong>Halveringstid t½</strong> är den tid det tar för hälften av alla atomer i ett prov att sönderfalla. Täcker allt från mikrosekunders till miljarder år (U-238). Formeln: N(t) = N₀ × (½)^(t/t½). Radons t½ = 3,82 dygn – viktigt för inomhusluftmätning.</p>
<p><strong>Stråldos</strong> mäts i Sievert (Sv): biologisk effekt av joniserande strålning. Bakgrundsstrålning Sverige ≈ 2 mSv/år. Akut strålsjuka vid &gt;250 mSv. Yrkesverksamma max 50 mSv/år.</p>
<p><strong>E = mc²</strong> (Einstein, 1905): massa och energi är ekvivalenta. Energin som frigörs = massaförlusten × ljushastigheten². 1 kg massa = 9×10¹⁶ J – miljoner gånger mer än kemiska reaktioner per kg bränsle.</p>
<p><strong>Kärnfission (klyvning):</strong> En långsam neutron träffar U-235 → instabil kärna delar sig i två lättare kärnor + 2–3 nya neutroner + ~200 MeV per klyvning. Kedjereaktion möjliggör kärnkraft (kontrollerad) och atombomb (okontrollerad). Kärnavfall med lång halveringstid är ett kvarstående problem.</p>
<p><strong>Kärnfusion (sammanslagning):</strong> Deuterium (²H) + tritium (³H) → helium (⁴He) + neutron + 17,6 MeV. Kräver &gt;10⁷ °C – solens energikälla. Frigör mer energi per kg än fission, inga långlivade restprodukter. Kommersiell fusionskraft ej ännu genomförbar på jorden.</p>"""

if OLD_ATOM_RAD in content:
    content = content.replace(OLD_ATOM_RAD, NEW_ATOM_RAD, 1)
    print('✓ Atomens byggnad: fission, E=mc², stråldos tillagda')
else:
    print('✗ OLD_ATOM_RAD not found')
    # Find what's there
    idx = content.find('Halveringstid t½')
    print('Found at:', idx)
    print(repr(content[idx:idx+200]))

# ── 2. TERMOKEMI: lägg till energikällor, fotosyntes, miljö före Sambandet ──
OLD_TERMO_SAM = '<h3>9. Sambandet</h3>'
NEW_TERMO_INSERT = """<h3>9. Energikällor, fotosyntes och miljöpåverkan</h3>
<p><strong>Fossila bränslen</strong> (kol, olja, naturgas) bildades av organiska rester under 100-tals miljoner år. Förbränning frigör lagrad koldioxid på decennier: bränsle + O₂ → CO₂ + H₂O + ΔH. Problemet: CO₂ som lagrats länge ackumuleras i atmosfären → förstärkt växthuseffekt → global uppvärmning.</p>
<p><strong>Växthuseffekten:</strong> Växthusgaser (CO₂, CH₄, N₂O, H₂O) absorberar IR-strålning (värme) från jordytan och återstrålar en del tillbaka → atmosfären värms. Utan naturlig växthuseffekt: –18 °C i stället för +15 °C. Förstärkt effekt leder till klimatförändringar.</p>
<p><strong>Biobränsle:</strong> Förnybart bränsle från biomassa. Etanol (C₂H₅OH) via jäsning av socker/stärkelse: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Metan (biogas) via anaerob rötrötning. Betraktas som CO₂-neutralt – växterna tog upp lika mycket CO₂ under sin livstid.</p>
<p><strong>Fotosyntesen (energilagring):</strong> 6CO₂ + 6H₂O + ljus → C₆H₁₂O₆ + 6O₂.&nbsp; Endoterm (ΔH &gt; 0, ~2 800 kJ/mol glukos). Klorofyll absorberar rött och blått ljus → omvandlar ljusenergi till kemisk bindningsenergi. Fotosyntesen driver hela biosfären.</p>
<p><strong>Cellandning (energifrigörelse):</strong> C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi (ATP).&nbsp; Exoterm (ΔH ≈ −2 800 kJ/mol). Omvandlar kemisk energi till ATP som cellen kan använda. Pågår ständigt i mitokondrierna. Cellandning är termodynamiskt omvändningen av fotosyntesen.</p>
<p><strong>Verkningsgrad (η):</strong> η = uttagen nyttig energi / tillförd energi × 100 %. Termodynamikens andra lag: varje energiomvandling ger spillvärme → η &lt; 100 %. Kolkraftverk η ≈ 35–40 %; kombicykel (gas+ånga) η ≈ 55–60 %; värmepump η kan överskrida 100 % (transporterar värme, skapar den inte).</p>

<h3>10. Sambandet</h3>"""

# Find it specifically in Termokemi section
termo_idx = content.find("cat: 'Termokemi & energi'")
html_t_start = content.find('html: `', termo_idx) + 7
sambandet_in_termo = content.find(OLD_TERMO_SAM, html_t_start)
if sambandet_in_termo != -1:
    content = content[:sambandet_in_termo] + NEW_TERMO_INSERT + content[sambandet_in_termo + len(OLD_TERMO_SAM):]
    print('✓ Termokemi: energikällor, fotosyntes, växthuseffekt tillagda')
else:
    print('✗ Could not find Termokemi sambandet section')

# ── 3. LÖSNINGAR: lägg till lika löser lika + legeringar ──
import re
los_idx = content.find("cat: 'Lösningar & koncentration'")
html_l_start = content.find('html: `', los_idx) + 7
html_l_end = content.find('`', html_l_start)
html_l = content[html_l_start:html_l_end]
# Find h3>8 (Sambandet) in Lösningar
s8_in_los = html_l.find('<h3>8. Sambandet')
if s8_in_los != -1:
    abs_s8 = html_l_start + s8_in_los
    NEW_LOS_INSERT = """<h3>8. Lika löser lika – polaritet och löslighet</h3>
<p><strong>Principen:</strong> "Lika löser lika". Polära ämnen och joner löses bäst i polära lösningsmedel (vatten). Opolära ämnen löses bäst i opolära lösningsmedel (hexan, aceton, etylacetat).</p>
<p><strong>Varför?</strong> Löslighet uppstår när lösningsmedlets intermolekylära krafter kan konkurrenskraftigt ersätta de krafter som håller lösningsmedlets och löst ämnets partiklar samman. Vatten (dipol, vätebindare) kan bilda starka dipol–jon-interaktioner och vätebindningar → löser joner och polära molekyler. Hexan (opolärt) bildar bara svaga van der Waals-krafter → kan inte lösa joner.</p>
<p><strong>Hydratisering:</strong> NaCl(s) + vatten → Na⁺(aq) + Cl⁻(aq). O-sidan av vattenmolekyler orienteras mot Na⁺; H-sidan mot Cl⁻. Varje jon omges av ett hydratskal som stabiliserar dem i lösning. Hydratiseringsentalpin kan vara exoterm (NaOH, CaCl₂) eller endoterm (NH₄NO₃, NaCl).</p>
<p><strong>Gaser i vatten:</strong> Lösligheten ökar med trycket (Henrys lag) men minskar med temperatur. CO₂ under tryck i läsk; uppvärmd läsk förlorar CO₂. Polära gasmolekyler (HCl, NH₃) löses bättre än opolära (O₂, N₂).</p>

<h3>9. Legeringar – fasta lösningar av metaller</h3>
<p>En <strong>legering</strong> är en homogen blandning av metaller (eller metall + icke-metall) i fast form. Legeringar har vanligtvis bättre egenskaper än de ingående metallerna:</p>
<ul>
<li><strong>Brons</strong> (Cu + Sn): hårdare och mer korrosionsbeständig än koppar; använts sedan bronsåldern</li>
<li><strong>Mässing</strong> (Cu + Zn): glänsande, formbar, antimikrobiell</li>
<li><strong>Rostfritt stål</strong> (Fe + Cr ≥12 % + Ni): kromoxidskikt (Cr₂O₃) passiverar ytan → korrosionsbeständig</li>
<li><strong>Stål</strong> (Fe + C 0,05–2 %): hårdare och starkare än rent järn</li>
</ul>

<h3>10. Sambandet</h3>"""
    content = content[:abs_s8] + NEW_LOS_INSERT + content[abs_s8 + len('<h3>8. Sambandet'):]
    print('✓ Lösningar: lika löser lika, hydratisering, legeringar tillagda')
else:
    print('✗ Could not find Lösningar h3>8 Sambandet')

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Saved.')
