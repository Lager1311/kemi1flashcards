import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# New cards from PPT slides not already in app
NEW_CARDS = """
  // ── PPT-tillägg: Atomens byggnad / Grundämnen ──
  { id:265, cat:"Atomens byggnad", term:"Valenselektroner", def:"Elektroner i atomens yttersta skal; bestämmer kemiska egenskaper och reaktivitet. Antal valenselektroner = gruppnummer (huvudgrupp)." },
  { id:266, cat:"Atomens byggnad", term:"Excitation", def:"En elektron absorberar energi och hoppar till ett högre skal (exciterat tillstånd). När den faller tillbaka avges energin som ljus med specifik våglängd → atomens emissionsspektrum." },
  { id:267, cat:"Atomens byggnad", term:"Alkalimetaller", def:"Grupp 1; 1 valenselektron; avger den lätt → reagerar livligt med vatten och luft. Li, Na, K, Rb, Cs, Fr. Reaktiviteten ökar nedåt i gruppen." },
  { id:268, cat:"Atomens byggnad", term:"Halogener", def:"Grupp 17; 7 valenselektroner; saknar ett för ädelgasstruktur → starka oxidationsmedel. F₂, Cl₂, Br₂, I₂. Oxiderande förmåga avtar nedåt i gruppen." },
  { id:269, cat:"Atomens byggnad", term:"Ädelgaser", def:"Grupp 18; fulla elektronskal (oktettkonfiguration); reagerar extremt sällan. He, Ne, Ar, Kr, Xe, Rn. Används som inerta atmosfärer och i ljusrör." },
  { id:270, cat:"Atomens byggnad", term:"Alkaliska jordartsmetaller", def:"Grupp 2; 2 valenselektroner; reaktiva men mindre än alkalimetaller. Be, Mg, Ca, Sr, Ba, Ra. Ca och Mg viktiga i biologi och byggmaterial." },
  { id:271, cat:"Atomens byggnad", term:"Alfastrålning (α)", def:"Heliumkärnor (2 protoner + 2 neutroner) som slungas ut från instabila kärnor. Laddad +2, räckvidd ~10 cm i luft, stoppas av papper eller hud. Farlig om ämnet inandas/sväljs." },
  { id:272, cat:"Atomens byggnad", term:"Betastrålning (β)", def:"Elektroner (β⁻) eller positroner (β⁺) som bildas vid kärnomvandling. Räckvidd ~1 m i luft, stoppas av aluminium. Mer penetrerande än alfastrålning." },
  { id:273, cat:"Atomens byggnad", term:"Gammastrålning (γ)", def:"Elektromagnetisk strålning med mycket kort våglängd och hög energi. Oladdad, lång räckvidd, kräver flera decimeter bly eller meter betong för att stoppas." },
  { id:274, cat:"Atomens byggnad", term:"Stråldos (Sievert)", def:"Mått på joniserande strålnings biologiska effekt. Enhet: Sievert (Sv) = J/kg. Bakgrundsstrålning i Sverige ~2 mSv/år. Akut strålsjuka vid >250 mSv." },
  { id:275, cat:"Atomens byggnad", term:"Kärnfission", def:"Klyvning av tung atomkärna (t.ex. U-235) av en neutron → två lättare kärnor + 2–3 nya neutroner + stor energimängd. Kedjereaktion möjliggör kärnkraft och atombomb." },
  { id:276, cat:"Atomens byggnad", term:"Kärnfusion", def:"Sammanslagning av lätta kärnor (t.ex. H → He) vid extremt höga temperaturer (>10⁷ °C). Frigör enorm energi (solens energikälla). E = mc² beskriver massaförlusten som energi." },
  { id:277, cat:"Atomens byggnad", term:"E = mc²", def:"Einsteins mass-energiekvivalens: energi E = massa m × ljusets hastighet i kvadrat (c = 3×10⁸ m/s). 1 kg materia = 9×10¹⁶ J ≈ 2 miljarder liter olja." },
  // ── PPT-tillägg: Termokemi & energi ──
  { id:278, cat:"Termokemi & energi", term:"Verkningsgrad (η)", def:"Kvoten mellan uttagen nyttig energi och tillförd energi: η = W_ut/W_in × 100 %. Aldrig 100 % pga spillvärme (termodynamikens andra lag)." },
  { id:279, cat:"Termokemi & energi", term:"Fossila bränslen", def:"Kol, olja och naturgas; bildade av organiska rester under 100-tals miljoner år. Förbränning frigör CO₂ som lagrats länge → bidrar till växthuseffekten." },
  { id:280, cat:"Termokemi & energi", term:"Biobränsle", def:"Förnybart bränsle från biomassa: etanol (jäsning av socker), metan (förruttnelse), ved, Salix. CO₂-neutralt i teorin eftersom växterna tagit upp lika mycket CO₂ under sin livstid." },
  { id:281, cat:"Termokemi & energi", term:"Växthuseffekt", def:"Ökad halt av växthusgaser (CO₂, CH₄, N₂O) i atmosfären → mer IR-strålning absorberas → jordytan värms upp. Förstärkt växthuseffekt = global uppvärmning." },
  { id:282, cat:"Termokemi & energi", term:"Fotosyntesen", def:"6CO₂ + 6H₂O + ljusenergi → C₆H₁₂O₆ + 6O₂. Klorofyll i kloroplaster fångar solenergi och lagrar den som kemisk energi (glukos). Endoterm process." },
  { id:283, cat:"Termokemi & energi", term:"Cellandning", def:"C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi (ATP). Omvänd fotosyntes; frigör kemisk energi som cellen kan använda. Exoterm, sker i mitokondrier." },
  // ── PPT-tillägg: Lösningar & koncentration ──
  { id:284, cat:"Lösningar & koncentration", term:"Lika löser lika", def:"Polära ämnen (och joner) löses i polära lösningsmedel (t.ex. vatten). Opolära ämnen löses i opolära lösningsmedel (t.ex. hexan). Beror på intermolekylära krafter." },
  { id:285, cat:"Lösningar & koncentration", term:"Hydratisering", def:"Vattenmolekyler omger och stabiliserar joner i lösning via dipol–jon-växelverkan. Natriumjoner omges av O-sidan av vatten, klorid-joner av H-sidan." },
  { id:286, cat:"Lösningar & koncentration", term:"Legering", def:"Fast lösning (blandkristall) av metaller. Exempel: brons (Cu+Sn), mässing (Cu+Zn), rostfritt stål (Fe+Cr+Ni). Legeringar har ofta bättre egenskaper än de rena metallerna." },
  { id:287, cat:"Lösningar & koncentration", term:"Masshalt", def:"Masshalt = massa löst ämne / massa lösning × 100 %. Enhet: % (w/w) eller kg/kg. Exempel: saltlake med masshalt 5 % innehåller 5 g NaCl per 100 g lösning." },
  // ── PPT-tillägg: Reaktioner & stökiometri ──
  { id:288, cat:"Reaktioner & stökiometri", term:"Oxidationsmedel", def:"Ämne som tar upp elektroner och reduceras själv i en redoxreaktion. Exempel: O₂, Cl₂, Cu²⁺, MnO₄⁻. Ju mer elektronegativt, desto starkare oxidationsmedel." },
  { id:289, cat:"Reaktioner & stökiometri", term:"Reduktionsmedel", def:"Ämne som avger elektroner och oxideras själv i en redoxreaktion. Exempel: Zn, Al, H₂, Na. Metaller tidigt i spänningsserien = starka reduktionsmedel." },
  { id:290, cat:"Reaktioner & stökiometri", term:"Substansmängd (n)", def:"Antal mol av ett ämne: n = m / M (massa/molmassa). 1 mol = 6,022×10²³ partiklar (Avogadros tal). Enheten är mol (SI-enhet)." },
  { id:291, cat:"Reaktioner & stökiometri", term:"Formelmassa", def:"Summan av atommassorna (u) i en formelenhet för ett jonämne. NaCl: 23 + 35,5 = 58,5 u. Används istället för molekylmassa för jonföreningar." },
  { id:292, cat:"Reaktioner & stökiometri", term:"Åskådarjoner", def:"Joner som finns i lösning men inte deltar i reaktionen. Skrivs bort när man formulerar nettojonsreaktionen. Exempel: Na⁺ och NO₃⁻ vid fällning av AgCl." },
  { id:293, cat:"Reaktioner & stökiometri", term:"Nettojonsreaktion", def:"Reaktionsformel som bara inkluderar de partiklar som faktiskt omvandlas; åskådarjoner utesluts. Ag⁺(aq) + Cl⁻(aq) → AgCl(s)." },
  // ── PPT-tillägg: Kemisk bindning ──
  { id:294, cat:"Kemisk bindning", term:"Enkelbindning", def:"Ett gemensamt elektronpar (σ-bindning) mellan två atomer. Längst och svagast av enkla kovalenta bindningar. Exempel: H–H (436 kJ/mol), C–C, H–Cl." },
  { id:295, cat:"Kemisk bindning", term:"Dubbelbindning", def:"Två gemensamma elektronpar (1 σ + 1 π) mellan atomer. Kortare och starkare än enkelbindning. Exempel: O=O (498 kJ/mol), C=C i alkener." },
  { id:296, cat:"Kemisk bindning", term:"Trippelbindning", def:"Tre gemensamma elektronpar (1 σ + 2 π). Kortast och starkast. Exempel: N≡N (945 kJ/mol) — extremt stabil, sprängämnen frigör energi när N₂ bildas." },
  { id:297, cat:"Kemisk bindning", term:"Diamant", def:"Nätverkskovalent kristall av kol; varje C-atom binder kovalent till 4 andra i tetraedergeometri → extremt hårt material. Hög smältpunkt, leder inte ström (inga fria elektroner)." },
  { id:298, cat:"Kemisk bindning", term:"Grafit", def:"Skiktat kol; varje C-atom binder till 3 andra i plana hexagonskikt. Fjärde valenselektronen delokaliserad → leder ström. Skikten hålls av svaga van der Waals-krafter → glidbart." },
  // ── PPT-tillägg: Syror & baser ──
  { id:299, cat:"Syror & baser", term:"Kungsvatten", def:"Blandning av konc. saltsyra (HCl) och salpetersyra (HNO₃) i förhållandet 3:1. Löser guld och platina som varken HCl eller HNO₃ löser var för sig." },
"""

# Find the closing ]; of CARDS array
marker = '\n];'
# Find last card and insert after it
insert_point = content.rfind('{ id:264,')
# Find end of that entry
end_of_264 = content.find('\n];', insert_point)
insert_pos = content.find('\n];', insert_point)

if insert_pos == -1:
    print('ERROR: Could not find end of CARDS array')
    sys.exit(1)

content = content[:insert_pos] + '\n' + NEW_CARDS + content[insert_pos:]
print(f'Cards insertion point found at {insert_pos}')

# Now add mnemonics
NEW_MNEMONICS = """
  265:"VALENSELEKTRONER = yttersta skalet = reaktivitet; antal = gruppnummer i huvudgruppen",
  266:"EXCITATION: energi IN → elektron hoppar upp; elektron faller tillbaka → ljus UT",
  267:"ALKALIMETALLER = grupp 1 = 1 valenselektron = 'ensam' = reaktiv; Li Na K Rb Cs Fr",
  268:"HALOGENER = grupp 17 = 7 elektroner = saknar 1 = oxidationsmedel; F Cl Br I At",
  269:"ÄDELGASER = grupp 18 = fulla skal = INERTA; He Ne Ar Kr Xe Rn",
  270:"ALKALISKA JORDARTSMETALLER = grupp 2 = 2 valenselektroner; Be Mg Ca Sr Ba Ra",
  271:"ALFASTRÅLNING: tyngst, kortast räckvidd (10 cm luft), papper stoppar; α = heliumkärna",
  272:"BETASTRÅLNING: elektron ur kärnan, 1 m luft, aluminium stoppar; β = laddad partikel",
  273:"GAMMASTRÅLNING: elektromagnetisk, ingen partikel, lång räckvidd, kräver bly/betong",
  274:"SIEVERT = biologisk stråldos; bakgrund ~2 mSv/år; akut strålsjuka >250 mSv",
  275:"FISSION = klyvning av TUNG kärna; U-235 + neutron → kedjereaktion → kärnkraft/bomb",
  276:"FUSION = sammansmältning av LÄTTA kärnor (H→He); solens energi; kräver milj. grader",
  277:"E=mc²: massa × ljushastighet² = energi; 1 kg = 9×10¹⁶ J = ofattbar energimängd",
  278:"VERKNINGSGRAD η = uttagen energi / tillförd energi × 100%; alltid <100% (spillvärme)",
  279:"FOSSILA BRÄNSLEN = gammalt organiskt material; kol, olja, naturgas; frigör lagrad CO₂",
  280:"BIOBRÄNSLE = förnybart; etanol (jäsning), metan (förruttnelse); CO₂-neutralt i teorin",
  281:"VÄXTHUSEFFEKT: CO₂ fångar IR-strålning → uppvärmning; förstärkt = global uppvärmning",
  282:"FOTOSYNTES: 6CO₂ + 6H₂O + LJUS → C₆H₁₂O₆ + 6O₂; endoterm; klorofyll fångar ljus",
  283:"CELLANDNING: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ENERGI; exoterm; omvänd fotosyntes",
  284:"LIKA LÖSER LIKA: polär i polär (salt i vatten); opolär i opolär (fett i bensin)",
  285:"HYDRATISERING: vattenmolekyler omger joner; O-sidan mot Na⁺, H-sidan mot Cl⁻",
  286:"LEGERING = fast lösning av metaller; brons=Cu+Sn, rostfritt=Fe+Cr+Ni",
  287:"MASSHALT = g löst / g lösning × 100%; 5% saltlake = 5g NaCl per 100g lösning",
  288:"OXIDATIONSMEDEL tar upp e⁻ och reduceras; O₂, Cl₂, Cu²⁺; 'tar elektroner = oxiderar andra'",
  289:"REDUKTIONSMEDEL avger e⁻ och oxideras; Zn, Al, H₂; 'ger elektroner = reducerar andra'",
  290:"SUBSTANSMÄNGD n = m/M; 1 mol = Avogadros tal = 6,022×10²³ partiklar",
  291:"FORMELMASSA = sum(atommassa) i formelenheten; används för jonföreningar (inte molekyler)",
  292:"ÅSKÅDARJONER deltar INTE i reaktionen; skrivs bort → nettojonsreaktion",
  293:"NETTOJONSREAKTION: bara de aktiva jonerna; Ag⁺ + Cl⁻ → AgCl(s)",
  294:"ENKELBINDNING = 1 elektronpar = σ-bindning; längst/svagast; H-H 436 kJ/mol",
  295:"DUBBELBINDNING = 2 elektronpar (σ+π); kortare och starkare; O=O 498 kJ/mol",
  296:"TRIPPELBINDNING = 3 elektronpar (σ+2π); kortast/starkast; N≡N 945 kJ/mol",
  297:"DIAMANT: kol i tetraeder, 4 bindningar per C, extremt hårt, leder EJ ström",
  298:"GRAFIT: kol i skikt, 3 bindningar per C, delokaliserad e⁻ → leder ström, glider",
  299:"KUNGSVATTEN = 3 HCl + 1 HNO₃; löser guld och platina; 'kungliga metaller'",
"""

# Find the end of MNEMONICS object
mn_end = content.rfind('264:')
# Find end of that line
mn_line_end = content.find('\n', mn_end)
# Insert after line 264
content = content[:mn_line_end] + '\n' + NEW_MNEMONICS + content[mn_line_end:]
print('Mnemonics inserted')

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Saved.')
