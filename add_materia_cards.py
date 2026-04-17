import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('kemi1-flashcards.html', encoding='utf-8') as f:
    content = f.read()

# New cards for Materia & faser (ids 300-312)
new_cards = '''
  // ── Materia & faser – fasövergångar & begrepp ──
  { id:300, cat:"Materia & faser", term:"Aggregationstillstånd", def:"Fast, flytande och gas – de tre vanliga aggregationstillstånden. Fast: ordnade partiklar i gitter, bestämd form/volym. Flytande: rörliga men tätt packade, bestämd volym. Gas: fritt rörliga, fyller hela behållaren. Avgörs av temperatur och tryck." },
  { id:301, cat:"Materia & faser", term:"Smältning", def:"Fasövergång fast → flytande när temperaturen når smältpunkten. Endoterm: ΔH_fus > 0 (värme absorberas för att bryta gitterstrukturen). Temperaturen är konstant under hela smältningsförloppet." },
  { id:302, cat:"Materia & faser", term:"Stelning", def:"Fasövergång flytande → fast; exoterm (ΔH = −ΔH_fus < 0). Värme avges till omgivningen när gitterstrukturen byggs upp. Sker vid smältpunkten – samma temperatur som smältning, men omvänd riktning." },
  { id:303, cat:"Materia & faser", term:"Ångbildning (kokning)", def:"Fasövergång flytande → gas vid kokpunkten. Endoterm: ΔH_vap > 0 (energi krävs för att bryta intermolekylära krafter). Kokpunkten beror på lufttrycket – lägre tryck ger lägre kokpunkt (t.ex. på hög höjd)." },
  { id:304, cat:"Materia & faser", term:"Kondensation", def:"Fasövergång gas → flytande; exoterm (ΔH = −ΔH_vap < 0). Sker när ångans temperatur sjunker under daggpunkten. Exempel: imma på spegel, dagg på gräs, regn." },
  { id:305, cat:"Materia & faser", term:"Avdunstning", def:"Fasövergång flytande → gas vid temperaturer UNDER kokpunkten, från ytan. Molekyler med tillräcklig rörelseenergi lämnar vätskytan. Har avkylande effekt – förklaring till varför svettning kyler kroppen." },
  { id:306, cat:"Materia & faser", term:"Sublimering", def:"Fasövergång fast → gas direkt, utan flytande mellanfas; endoterm. Sker när ett ämnes ångtryck överstiger omgivningens tryck vid fast fas. Exempel: torris (CO₂), jod, naftalin, is i frys (frysdestillation)." },
  { id:307, cat:"Materia & faser", term:"Deposition", def:"Fasövergång gas → fast direkt, utan flytande mellanfas; exoterm. Omvändning av sublimering. Exempel: frost som bildas direkt ur vattenånga på ett kallt fönster, snöflingor i atmosfären." },
  { id:308, cat:"Materia & faser", term:"Smältpunkt", def:"Temperaturen vid vilken ett rent ämne övergår från fast till flytande form vid standardtryck (101,3 kPa). Karakteristisk och konstant för varje rent ämne. Föroreningar sänker smältpunkten (krysoskopi)." },
  { id:309, cat:"Materia & faser", term:"Kokpunkt", def:"Temperaturen vid vilken ett ämnes ångtryck är lika med omgivningens tryck. Vatten kokar vid 100 °C vid 1 atm. Beror på trycket: högre höjd → lägre lufttryck → lägre kokpunkt (berg: ~90 °C). Lösningar har förhöjd kokpunkt." },
  { id:310, cat:"Materia & faser", term:"Fasdiagram", def:"Diagram (p–T-diagram) som visar vilket aggregationstillstånd ett ämne befinner sig i vid givet tryck och temperatur. Innehåller smältkurva, ångbildningskurva, sublimeringskurva, trippelpunkt och kritisk punkt." },
  { id:311, cat:"Materia & faser", term:"Trippelpunkt", def:"Det unika T- och p-värde där alla tre faser (fast, flytande, gas) existerar i jämvikt. För vatten: 0,006 atm och 0,01 °C. Under trippelpunktens tryck existerar ingen flytande fas – is sublimerar direkt." },
  { id:312, cat:"Materia & faser", term:"Kolloid", def:"Blandning med partiklar 1–1000 nm jämnt fördelade i ett dispersionsmedium. Visar Tyndalleffekten (ljusspridning). Sedimenterar ej spontant. Exempel: mjölk, rök, dimma, gelé, skum. Mellanform mellan äkta lösning och suspension." },
'''

# New hints for the added cards
new_hints = '''  // Materia & faser – fasövergångar
  300:"AGGREGAT = aggregat-TILLSTÅND. Fast=fryst, Flytande=mellanting, Gas=frihet. Temp avgör.",
  301:"SMÄLTning = fast SMÄLTER till flytande. ENDOterm = energi IN (värme ÄTS upp). T konstant.",
  302:"STELning = flytande STELNAR. EXOterm = energi UT (värme AVGES). Omvänd smältning.",
  303:"ÅNGbildning = flytande → ÅNG. Endoterm. Kokpunkt SJUNKER vid lägre tryck (berg).",
  304:"KONDENSation = gas kondenserar. EXOterm. IMma på SPEGEL = kondensation.",
  305:"AVDUNSTning = yta-AVDUNSTAR under kokpunkten. SVETT kyler = avdunstning tar värme.",
  306:"SUBLIMering = SUBLIM hoppar över flytande. TORRIS (CO₂) sublimerar = ingen pöl.",
  307:"DEPOSITion = gas → fast DIREKT. FROST på fönster = vattenånga → is, utan droppar.",
  308:"SMÄLTpunkt = temp där fast → flytande. RENT ämne = skarp smältpunkt. Föroren sänker.",
  309:"KOKpunkt = ångtryck = lufttryck. BERGET = lägre lufttryck = lägre kokpunkt. Pasta tar längre.",
  310:"FASDIagram = KARTA för faser. p på y-axel, T på x-axel. Varje område = ett tillstånd.",
  311:"TRIPPELpunkt = TREVÄGSKORSNING. Alla tre faser i jämvikt. Vatten: 0,006 atm, 0,01 °C.",
  312:"KOLLOID = KOLL-oid mitt emellan. 1-1000 nm. Tyndalleffekt = LJUS syns i strålen (mjölk).",
'''

# Insert new cards after id:258
insert_after = '  { id:258, cat:"Materia & faser", term:"Heterogen blandning"'
m = content.find(insert_after)
if m == -1:
    print("ERROR: Could not find insertion point for cards!")
else:
    # Find end of that card definition
    end_of_258 = content.find('},\n', m) + 3
    content = content[:end_of_258] + new_cards + content[end_of_258:]
    print("Cards inserted after id:258")

# Insert new hints after id:258 hint
hint_after = '  258:"HETErogen = HETER olika.'
m2 = content.find(hint_after)
if m2 == -1:
    print("ERROR: Could not find insertion point for hints!")
else:
    end_of_hint = content.find('",\n', m2) + 3
    content = content[:end_of_hint] + new_hints + content[end_of_hint:]
    print("Hints inserted after id:258")

with open('kemi1-flashcards.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Saved.")

# Verify
import re
matches = list(re.finditer(r'\{ id:\d+, cat:"Materia & faser"', content))
print(f"Total Materia & faser cards: {len(matches)}")
for m in matches:
    term_m = re.search(r'term:"([^"]+)"', content[m.start():m.start()+100])
    print(f"  {term_m.group(1) if term_m else '?'}")
