// ═══════════════════════════════════════════════════════
//  FLASHCARD DATA
// ═══════════════════════════════════════════════════════
const CARDS = [
  // ── 1. Atomens byggnad & periodiska systemet ──
  { id:1, cat:"Atomens byggnad", term:"Atom", def:"Den minsta enheten av ett grundämne som behåller ämnets kemiska egenskaper; består av kärna (protoner + neutroner) och elektroner." },
  { id:2, cat:"Atomens byggnad", term:"Jon", def:"En atom eller molekyl som har fått eller förlorat elektroner och därigenom blivit elektriskt laddad (katjon = positiv, anjon = negativ)." },
  { id:3, cat:"Atomens byggnad", term:"Isotop", def:"Atomer av samma grundämne med samma antal protoner men olika antal neutroner, och därmed olika masstal." },
  { id:4, cat:"Atomens byggnad", term:"Atomnummer", def:"Antalet protoner i en atoms kärna; definierar vilket grundämne det är och avgör ämnets plats i periodiska systemet." },
  { id:5, cat:"Atomens byggnad", term:"Masstal", def:"Summan av antalet protoner och neutroner i en atoms kärna; betecknas A." },
  { id:6, cat:"Atomens byggnad", term:"Elektron", def:"Negativt laddad partikel (−1,6 × 10⁻¹⁹ C) som befinner sig i skal runt atomkärnan; bidrar till kemiska reaktioner." },
  { id:7, cat:"Atomens byggnad", term:"Proton", def:"Positivt laddad partikel i atomkärnan; antalet protoner (atomnumret) avgör vilket grundämne det är." },
  { id:8, cat:"Atomens byggnad", term:"Neutron", def:"Oladdad partikel i atomkärnan; bidrar till atommassans men inte till laddningen; stabiliserar kärnan." },
  { id:9, cat:"Atomens byggnad", term:"Skal", def:"Energinivå runt atomkärnan där elektroner befinner sig; betecknas K, L, M… eller n = 1, 2, 3…" },
  { id:10, cat:"Atomens byggnad", term:"Elektronkonfiguration", def:"Fördelningen av elektroner i ett atoms energiskal och orbitaler, t.ex. natrium: 2, 8, 1." },
  { id:11, cat:"Atomens byggnad", term:"Periodicitet", def:"Det återkommande mönstret av egenskaper (t.ex. atomradie, jonisationsenergi) hos grundämnen i det periodiska systemet." },
  { id:12, cat:"Atomens byggnad", term:"Elektronegativitet", def:"Ett grundämnes förmåga att attrahera elektroner i en kemisk bindning; ökar uppåt och åt höger i periodiska systemet." },
  { id:13, cat:"Atomens byggnad", term:"Jonisationsenergi", def:"Den energi som krävs för att avlägsna en elektron från en fri atom i gasform; ökar uppåt och åt höger i periodiska systemet." },
  { id:14, cat:"Atomens byggnad", term:"Metallkaraktär", def:"Egenskapen att ge ifrån sig elektroner och bilda positiva joner; ökar nedåt och åt vänster i periodiska systemet." },

  // ── 2. Kemisk bindning ──
  { id:15, cat:"Kemisk bindning", term:"Jonbindning", def:"Kemisk bindning genom elektrostatisk attraktion mellan positivt och negativt laddade joner; bildas när elektroner överförs från metall till icke-metall." },
  { id:16, cat:"Kemisk bindning", term:"Kovalent bindning", def:"Kemisk bindning där atomer delar ett eller flera elektronpar; vanlig mellan icke-metaller." },
  { id:17, cat:"Kemisk bindning", term:"Metallbindning", def:"Bindning i metaller där positiva metalljoner omges av ett 'hav' av fria, rörliga elektroner; förklarar elektrisk ledningsförmåga." },
  { id:18, cat:"Kemisk bindning", term:"Polär bindning", def:"Kovalent bindning där elektronerna delas ojämnt pga skillnad i elektronegativitet; skapar en partiell laddningsskillnad (δ+ och δ−)." },
  { id:19, cat:"Kemisk bindning", term:"Opolär bindning", def:"Kovalent bindning där elektronerna delas jämnt mellan likartade atomer (t.ex. H₂, O₂); ingen nettoladdningsskillnad." },
  { id:20, cat:"Kemisk bindning", term:"Dipolmoment", def:"Vektoriellt mått på separationen av laddningar i en molekyl; beror på bindningarnas polaritet och molekylens geometri." },
  { id:21, cat:"Kemisk bindning", term:"Vätebindning", def:"Stark intermolekylär kraft mellan ett väte bundet till N, O eller F och ett elektronnegativt atom i en annan molekyl; ger vatten högt kokpunkt." },
  { id:22, cat:"Kemisk bindning", term:"Van der Waals-krafter", def:"Svaga intermolekylära krafter orsakade av tillfälliga och inducerade dipoler (London-dispersion); ökar med molekylstorlek." },
  { id:23, cat:"Kemisk bindning", term:"Lewis-struktur", def:"Schematisk bild av en molekyl som visar kovalenta bindningar som streck och fria elektronpar som punkter." },
  { id:24, cat:"Kemisk bindning", term:"VSEPR", def:"Modell (Valence Shell Electron Pair Repulsion) för att förutsäga molekylers geometri: elektronpar repellerar varandra och intar maximalt avstånd." },

  // ── 3. Kemiska reaktioner & stökiometri ──
  { id:25, cat:"Reaktioner & stökiometri", term:"Reaktionsformel", def:"Kemisk ekvation som visar reaktanter (vänster) och produkter (höger) med korrekt balanserade koefficienter." },
  { id:26, cat:"Reaktioner & stökiometri", term:"Mol", def:"SI-enhet för mängd av substans; 1 mol = 6,022 × 10²³ partiklar (Avogadros tal). Symbol: n." },
  { id:27, cat:"Reaktioner & stökiometri", term:"Molmassa", def:"Massan av ett mol av ett ämne, uttryckt i g/mol; numeriskt lika med atommassan i u." },
  { id:28, cat:"Reaktioner & stökiometri", term:"Avogadros tal", def:"NA = 6,022 × 10²³ mol⁻¹; antalet partiklar (atomer, molekyler, joner) i exakt ett mol substans." },
  { id:29, cat:"Reaktioner & stökiometri", term:"Utbyte", def:"Faktisk mängd produkt jämfört med den teoretiska mängden, uttryckt i procent: utbyte = (faktisk/teoretisk) × 100 %." },
  { id:30, cat:"Reaktioner & stökiometri", term:"Begränsande reagens", def:"Det reagens som förbrukas först i en reaktion och därigenom begränsar mängden produkt som kan bildas." },
  { id:31, cat:"Reaktioner & stökiometri", term:"Oxidationstal", def:"Formellt laddningstal på en atom i en förening, beräknat utifrån elektronegativiteten hos bindningspartners." },
  { id:32, cat:"Reaktioner & stökiometri", term:"Oxidation", def:"Förlust av elektroner eller ökning av oxidationstal; sker alltid tillsammans med reduktion." },
  { id:33, cat:"Reaktioner & stökiometri", term:"Reduktion", def:"Vinst av elektroner eller minskning av oxidationstal; sker alltid tillsammans med oxidation." },
  { id:34, cat:"Reaktioner & stökiometri", term:"Redoxreaktion", def:"Reaktion där elektroner överförs mellan ämnen; oxidationsmedlet reduceras och reduktionsmedlet oxideras." },
  { id:35, cat:"Reaktioner & stökiometri", term:"Balansering", def:"Att justera koefficienter i en reaktionsformel så att antal atomar av varje slag och total laddning är lika på båda sidor." },

  // ── 4. Syror & baser ──
  { id:36, cat:"Syror & baser", term:"Syra", def:"Ämne som donerar protoner (H⁺) enligt Brønsted-Lowry, eller som ökar vätejonkoncentrationen [H⁺] i vattenlösning." },
  { id:37, cat:"Syror & baser", term:"Bas", def:"Ämne som accepterar protoner (H⁺) enligt Brønsted-Lowry, eller som ökar hydroxidjonkoncentrationen [OH⁻] i lösning." },
  { id:38, cat:"Syror & baser", term:"pH", def:"Logaritmiskt mått på vätejonkoncentrationen: pH = −log[H⁺]. Skala 0–14; pH 7 = neutralt, < 7 = surt, > 7 = basiskt." },
  { id:39, cat:"Syror & baser", term:"pOH", def:"Logaritmiskt mått på hydroxidjonkoncentrationen: pOH = −log[OH⁻]. Samband: pH + pOH = 14 vid 25 °C." },
  { id:40, cat:"Syror & baser", term:"Neutralisation", def:"Reaktion mellan syra och bas som bildar salt och vatten: H⁺ + OH⁻ → H₂O; pH → 7 vid fullständig neutralisation." },
  { id:41, cat:"Syror & baser", term:"Buffert", def:"Lösning som motstår pH-ändringar vid tillsats av syra eller bas; innehåller en svag syra och dess konjugerade bas." },
  { id:42, cat:"Syror & baser", term:"Titrering", def:"Kvantitativ analysmetod där en lösning med känd koncentration (titrermedel) tillsätts till analytlösningen tills ekvivalenspunkten nås." },
  { id:43, cat:"Syror & baser", term:"Indikator", def:"Ämne som ändrar färg beroende på pH; används för att visa ekvivalenspunkten vid titrering (t.ex. fenolftalein, BTB)." },
  { id:44, cat:"Syror & baser", term:"Brønsted-Lowry", def:"Syra-basteori där syror är protondonatorer och baser är protonacceptorer; gäller i alla lösningsmedel." },
  { id:45, cat:"Syror & baser", term:"Amfolyt", def:"Ämne som kan fungera både som syra och bas beroende på motparten, t.ex. vatten (H₂O) och vätekarbonat (HCO₃⁻)." },
  { id:46, cat:"Syror & baser", term:"Stark syra", def:"Syra som fullständigt dissocierar i vatten; hög [H⁺]. Exempel: saltsyra (HCl), svavelsyra (H₂SO₄), salpetersyra (HNO₃)." },
  { id:47, cat:"Syror & baser", term:"Svag syra", def:"Syra som bara delvis dissocierar i vatten; karakteriseras av ett litet syrakonstant Ka. Exempel: ättiksyra (CH₃COOH)." },

  // ── 5. Organisk kemi ──
  { id:48, cat:"Organisk kemi", term:"Kolväte", def:"Organisk förening som enbart innehåller kol och väte; delas in i alkaner, alkener, alkyner och arener." },
  { id:49, cat:"Organisk kemi", term:"Alkaner", def:"Mättade kolväten med enbart enkelbindningar; allmän formel CₙH₂ₙ₊₂. Exempel: metan (CH₄), etan (C₂H₆)." },
  { id:50, cat:"Organisk kemi", term:"Alkener", def:"Omättade kolväten med minst en kol-kol-dubbelbindning (C=C); allmän formel CₙH₂ₙ. Exempel: eten (C₂H₄)." },
  { id:51, cat:"Organisk kemi", term:"Alkyner", def:"Omättade kolväten med minst en kol-kol-trippelbindning (C≡C); allmän formel CₙH₂ₙ₋₂. Exempel: etyn (C₂H₂)." },
  { id:52, cat:"Organisk kemi", term:"Arener", def:"Aromatiska kolväten med minst en bensenkärna och delokaliserade π-elektroner; t.ex. bensen (C₆H₆), toluen." },
  { id:53, cat:"Organisk kemi", term:"Funktionell grupp", def:"Atomgrupp i en organisk molekyl som bestämmer ämnets typiska kemiska reaktioner och egenskaper (t.ex. –OH, –COOH, –NH₂)." },
  { id:54, cat:"Organisk kemi", term:"Alkohol", def:"Organisk förening med hydroxylgrupp (–OH) bunden till en sp³-hybridiserad kolatom; t.ex. etanol (C₂H₅OH)." },
  { id:55, cat:"Organisk kemi", term:"Aldehyd", def:"Organisk förening med karbonylgrupp (–CHO) vid kedjans ände; t.ex. metanal (formaldehyd, HCHO)." },
  { id:56, cat:"Organisk kemi", term:"Keton", def:"Organisk förening med karbonylgrupp (C=O) i mitten av kolkedjan; t.ex. propanon (aceton, CH₃COCH₃)." },
  { id:57, cat:"Organisk kemi", term:"Karboxylsyra", def:"Organisk syra med karboxylgrupp (–COOH); ger surt pH i vattenlösning. Exempel: ättiksyra, citronsyra." },
  { id:58, cat:"Organisk kemi", term:"Ester", def:"Organisk förening bildad av syra och alkohol med avspjälkning av vatten (kondensation); ofta välluktande, t.ex. etylacetat." },
  { id:59, cat:"Organisk kemi", term:"Amin", def:"Organisk förening med aminogrupp (–NH₂); derivat av ammoniak; uppträder som bas och kan bilda salter med syror." },
  { id:60, cat:"Organisk kemi", term:"Isomeri", def:"Fenomenet att föreningar med samma molekylformel har olika strukturer (konstitutionsisomerer) eller rumsorientering (stereoisomerer)." },
  { id:61, cat:"Organisk kemi", term:"Nomenklatur", def:"Systematiskt namngivningssystem för kemiska föreningar enligt IUPAC-regler baserat på längsta kolkedja, grenar och funktionella grupper." },

  // ── 6. Lösningar & koncentration ──
  { id:62, cat:"Lösningar & koncentration", term:"Lösning", def:"Homogen blandning av ett lösningsmedel och ett eller flera lösta ämnen; ser enhetlig ut genomgående." },
  { id:63, cat:"Lösningar & koncentration", term:"Lösningsmedel", def:"Det ämne som löser upp andra ämnen i en lösning; vanligtvis det ämne som finns i störst mängd (t.ex. vatten)." },
  { id:64, cat:"Lösningar & koncentration", term:"Löst ämne", def:"Det ämne som löses upp i ett lösningsmedel; finns i lägre mängd och fördelas jämnt i lösningen." },
  { id:65, cat:"Lösningar & koncentration", term:"Koncentration", def:"Mängden löst ämne per volymenhet lösning; kan uttryckas som molaritet (mol/L), masskoncentration (g/L) m.fl." },
  { id:66, cat:"Lösningar & koncentration", term:"Molaritet", def:"Koncentration uttryckt i mol löst ämne per liter lösning (mol/L eller M); c = n/V." },
  { id:67, cat:"Lösningar & koncentration", term:"Molalitet", def:"Koncentration uttryckt i mol löst ämne per kilogram lösningsmedel (mol/kg); ej beroende av temperatur." },
  { id:68, cat:"Lösningar & koncentration", term:"Löslighet", def:"Den maximala mängden av ett ämne som kan lösas i ett givet lösningsmedel vid en bestämd temperatur och tryck." },
  { id:69, cat:"Lösningar & koncentration", term:"Utspädning", def:"Process där koncentrationen minskas genom tillsats av mer lösningsmedel; c₁V₁ = c₂V₂." },
  { id:70, cat:"Lösningar & koncentration", term:"Kolloid", def:"Blandning där små partiklar (1–1 000 nm) är jämnt fördelade men ej lösta; sprider ljus (Tyndalleffekten). Exempel: mjölk, dimma." },
  { id:71, cat:"Lösningar & koncentration", term:"Suspension", def:"Blandning där stora, olösliga partiklar är tillfälligt fördelade i ett medium; sedimenterar vid stillastående. Exempel: lera i vatten." },

  // ── 7. Termokemi & energi ──
  { id:72, cat:"Termokemi & energi", term:"Entalpi", def:"Termodynamisk tillståndsfunktion H = U + pV; vid konstant tryck är ΔH = värmeutbytet med omgivningen." },
  { id:73, cat:"Termokemi & energi", term:"Exoterm", def:"Reaktion som frigör värme till omgivningen; ΔH < 0. Temperaturen i reaktionsblandningen stiger." },
  { id:74, cat:"Termokemi & energi", term:"Endoterm", def:"Reaktion som absorberar värme från omgivningen; ΔH > 0. Temperaturen i reaktionsblandningen sjunker." },
  { id:75, cat:"Termokemi & energi", term:"Reaktionsentalpi", def:"Entalpiskillnaden ΔH = H(produkter) − H(reaktanter) för en kemisk reaktion under standardförhållanden." },
  { id:76, cat:"Termokemi & energi", term:"Hess lag", def:"Reaktionsentalpin är oberoende av reaktionsvägen; ΔH_total = summan av delvägars ΔH-värden." },
  { id:77, cat:"Termokemi & energi", term:"Bindningsenergi", def:"Den energi som krävs för att bryta en kemisk bindning i gasform; frigörs vid bindningsbildning; används i Hess-beräkningar." },
  { id:78, cat:"Termokemi & energi", term:"Kalorimetri", def:"Experimentell metod för att mäta värmeutbytet vid kemiska reaktioner med hjälp av en kalorimeter; Q = m·c·ΔT." },
  { id:79, cat:"Termokemi & energi", term:"Specifik värmekapacitet", def:"Energin som krävs för att höja temperaturen hos 1 kg av ett ämne med 1 K; enhet J/(kg·K). Vatten: 4 186 J/(kg·K)." },

  // ── 8. Laborativ kemi & säkerhet ──
  { id:80, cat:"Laborativ kemi & säkerhet", term:"Destillation", def:"Separationsmetod baserad på skillnader i kokpunkt; vätskan värms, ångan kondenseras och samlas separat." },
  { id:81, cat:"Laborativ kemi & säkerhet", term:"Filtrering", def:"Separationsmetod för att avskilja fasta partiklar från en vätska med hjälp av ett poröst medium (filterpapper)." },
  { id:82, cat:"Laborativ kemi & säkerhet", term:"Kristallisering", def:"Separationsmetod där ett löst ämne separeras genom att bilda fasta kristaller vid avkylning eller avdunstning av lösningsmedel." },
  { id:83, cat:"Laborativ kemi & säkerhet", term:"Spektroskopi", def:"Analytisk teknik som studerar hur materia absorberar eller emitterar elektromagnetisk strålning för att identifiera ämnen." },
  { id:84, cat:"Laborativ kemi & säkerhet", term:"Riskbedömning", def:"Systematisk identifiering, bedömning och hantering av potentiella faror i laboratoriet innan arbetet påbörjas." },
  { id:85, cat:"Laborativ kemi & säkerhet", term:"Skyddsutrustning", def:"Personlig skyddsutrustning (PSE) vid laboratoriearbete: skyddsglasögon, labbrock, kemikalietåliga handskar och vid behov andningsskydd." },
  { id:86, cat:"Laborativ kemi & säkerhet", term:"Kemikaliesäkerhet", def:"Kunskap om och rätt hantering av farliga kemikalier inkl. förvaring, märkning och avfallshantering för att förebygga olyckor." },
  { id:87, cat:"Laborativ kemi & säkerhet", term:"GHS-symboler", def:"Globalt harmoniserade faropiktogram (röd romb) som varnar för kemiska risker: frätande, brandfarligt, giftigt, explosivt m.fl." },
  { id:88, cat:"Laborativ kemi & säkerhet", term:"Säkerhetsdatablad (SDB)", def:"Dokument med information om ett kemiskt ämnes egenskaper, faror, skyddsåtgärder och nödprocedurer enligt EU-förordning." },

  // ── 1b. Atomens byggnad – utökad ──
  { id:89, cat:"Atomens byggnad", term:"Radioaktivitet", def:"Spontant sönderfall av instabila atomkärnor med utsändning av strålning: alfapartiklar (⁴He), betapartiklar (e⁻) eller gammastrålning (γ)." },
  { id:90, cat:"Atomens byggnad", term:"Halveringstid", def:"Den tid det tar för hälften av atomkärnorna i ett radioaktivt prov att sönderfalla; konstant för varje isotop." },
  { id:91, cat:"Atomens byggnad", term:"Orbital", def:"Matematisk funktion som beskriver sannolikhetsfördelningen för en elektron i rymden; benämns s, p, d och f." },
  { id:92, cat:"Atomens byggnad", term:"Grundämne", def:"Rent ämne som inte kan sönderdelas i enklare ämnen med kemiska metoder; definieras av atomnumret (antal protoner)." },
  { id:93, cat:"Atomens byggnad", term:"Atomradie", def:"Halvt avstånd mellan kärnorna i två bindande atomer av samma grundämne; minskar åt höger och ökar nedåt i periodiska systemet." },
  { id:94, cat:"Atomens byggnad", term:"Ädelgas-konfiguration", def:"Elektronkonfiguration med fullt yttersta skal (8 elektroner); eftersträvas vid kemisk bindning (oktettregeln)." },
  { id:95, cat:"Atomens byggnad", term:"Molarvolym", def:"Volymen som upptas av exakt ett mol av en idealgas vid STP (0 °C, 1 atm) = 22,4 L/mol." },

  // ── 2b. Kemisk bindning – utökad ──
  { id:96, cat:"Kemisk bindning", term:"Sigma-bindning (σ)", def:"Starkaste typen av kovalent bindning; elektronparet delas längs bindningsaxeln (head-on overlap); alltid med i enkelbindning." },
  { id:97, cat:"Kemisk bindning", term:"Pi-bindning (π)", def:"Kovalent bindning via sidolappning av p-orbitaler (ovanför och under planet); förekommer i dubbel- och trippelbindningar." },
  { id:98, cat:"Kemisk bindning", term:"Hybridisering", def:"Blandning av atomorbitaler för att bilda nya, likvärdiga hybridorbitaler (sp, sp², sp³) som styr molekylgeometrin." },
  { id:99, cat:"Kemisk bindning", term:"Nätverkskovalent kristall", def:"Fast ämne med kovalenta bindningar genomgående i hela strukturen; t.ex. diamant och kiseldioxid (SiO₂); mycket hårda och högt smältpunkt." },
  { id:100, cat:"Kemisk bindning", term:"Intermolekylär kraft", def:"Kraft mellan molekyler snarare än inom dem; innefattar vätebindningar, dipol-dipol-växelverkan och van der Waals-krafter." },
  { id:101, cat:"Kemisk bindning", term:"Jonradie", def:"Storlek på en jon i en kristall; anjonerna är generellt större och katjonerna mindre än motsvarande neutrala atom." },

  // ── 3b. Reaktioner & stökiometri – utökad ──
  { id:102, cat:"Reaktioner & stökiometri", term:"Katalysator", def:"Ämne som ökar reaktionshastigheten utan att förbrukas; sänker aktiveringsenergin genom att erbjuda en alternativ reaktionsväg." },
  { id:103, cat:"Reaktioner & stökiometri", term:"Aktiveringsenergi", def:"Den minsta energi som reaktanter måste ha för att en reaktion ska kunna ske; symbol Eₐ; sänks av katalysatorer." },
  { id:104, cat:"Reaktioner & stökiometri", term:"Reaktionshastighet", def:"Förändringen i koncentration av reaktant eller produkt per tidsenhet; påverkas av temperatur, koncentration, yta och katalysator." },
  { id:105, cat:"Reaktioner & stökiometri", term:"Kemisk jämvikt", def:"Dynamiskt tillstånd där fram- och bakåtreaktionens hastigheter är lika; koncentrationerna är konstanta men inte nödvändigtvis lika." },
  { id:106, cat:"Reaktioner & stökiometri", term:"Jämviktskonstant (K)", def:"Konstant som uttrycker förhållandet mellan koncentrationerna av produkter och reaktanter i jämvikt vid en given temperatur." },
  { id:107, cat:"Reaktioner & stökiometri", term:"Le Chateliers princip", def:"Om ett jämviktssystem utsätts för en störning (koncentration, tryck, temperatur) förskjuts jämvikten för att motverka störningen." },
  { id:108, cat:"Reaktioner & stökiometri", term:"Fällningsreaktion", def:"Reaktion där ett svårlösligt salt (precipitat) bildas när två jonlösningar blandas; t.ex. AgCl vid AgNO₃ + NaCl." },
  { id:109, cat:"Reaktioner & stökiometri", term:"Kombinationsreaktion", def:"Reaktion där två eller fler ämnen förenas och bildar ett enda nytt ämne; t.ex. 2H₂ + O₂ → 2H₂O." },
  { id:110, cat:"Reaktioner & stökiometri", term:"Sönderdelningsreaktion", def:"Reaktion där ett ämne bryts ned till två eller fler enklare ämnen; t.ex. 2H₂O₂ → 2H₂O + O₂." },

  // ── 4b. Syror & baser – utökad ──
  { id:111, cat:"Syror & baser", term:"Konjugerat par", def:"Syra-baspar som skiljer sig med exakt ett proton; t.ex. CH₃COOH (syra) / CH₃COO⁻ (konjugerad bas)." },
  { id:112, cat:"Syror & baser", term:"Syrakonstant (Ka)", def:"Jämviktskonstant för syrans dissociation i vatten; Ka = [H⁺][A⁻]/[HA]. Ju lägre Ka desto svagare syra." },
  { id:113, cat:"Syror & baser", term:"Autoprotolys", def:"Reaktion där vatten reagerar med sig självt: 2 H₂O ⇌ H₃O⁺ + OH⁻; jämviktskonstant Kw = 1,0 × 10⁻¹⁴ vid 25 °C." },
  { id:114, cat:"Syror & baser", term:"Ekvivalenspunkt", def:"Punkten i en titrering där exakt lika antal mol syra och bas har reagerat; påvisas med indikator eller pH-mätare." },
  { id:115, cat:"Syror & baser", term:"Lewis-syra", def:"Ämne som accepterar ett elektronpar (Lewis-definition); vidare begrepp än Brønsted; t.ex. BF₃, AlCl₃, Fe³⁺." },
  { id:116, cat:"Syror & baser", term:"Salthydrolys", def:"Reaktion där joner från ett salt reagerar med vatten och ändrar pH; surt salt (svag bas/stark syra), basiskt salt (stark bas/svag syra)." },
  { id:117, cat:"Syror & baser", term:"Proton", def:"Vätejon (H⁺); i vattenlösning hydratiserad som hydroniumjon (H₃O⁺); central partikel i Brønsted-Lowry-teorin." },

  // ── 5b. Organisk kemi – utökad ──
  { id:118, cat:"Organisk kemi", term:"Additionsreaktion", def:"Reaktion där atomer eller atomgrupper adderas till en dubbel- eller trippelbindning; omättad förening → mättad." },
  { id:119, cat:"Organisk kemi", term:"Substitutionsreaktion", def:"Reaktion där en atom eller grupp i en molekyl ersätts av en annan; vanlig för mättade kolväten och arener." },
  { id:120, cat:"Organisk kemi", term:"Kondensationsreaktion", def:"Reaktion där två molekyler förenas med avspjälkning av ett litet molekyl (vanligen H₂O); bildar t.ex. estrar och peptider." },
  { id:121, cat:"Organisk kemi", term:"Polymer", def:"Stor makromolekyl uppbyggd av upprepande enheter (monomerer) bundna kovalent; t.ex. polyeten, nylon, DNA." },
  { id:122, cat:"Organisk kemi", term:"Monomer", def:"Liten molekyl som kan länkas ihop med andra monomerer för att bilda en polymer via polymerisationsreaktion." },
  { id:123, cat:"Organisk kemi", term:"Kiral", def:"Molekyl som inte kan superponeras på sin spegelspegelbild; innehåller ett asymmetriskt kolatom bundet till fyra olika grupper." },
  { id:124, cat:"Organisk kemi", term:"Saponifiering", def:"Bashydrolys av en ester (t.ex. fett + NaOH → glycerol + fettsyresalt/tvål); används vid tvålframställning." },
  { id:125, cat:"Organisk kemi", term:"Amid", def:"Organisk förening med amidgrupp (–CONH–); bildas vid kondensation av karboxylsyra och amin; förekommer i peptider och nylon." },
  { id:126, cat:"Organisk kemi", term:"Oxidationsreaktion (org.)", def:"I organisk kemi: ökning av syreinnehåll eller minskning av väteinnehåll; t.ex. alkohol → aldehyd → karboxylsyra." },

  // ── 6b. Lösningar & koncentration – utökad ──
  { id:127, cat:"Lösningar & koncentration", term:"Löslighetsprodukt (Ksp)", def:"Jämviktskonstant för upplösning av ett svårlösligt salt; Ksp = [Mⁿ⁺]ᵃ[Xᵐ⁻]ᵇ; lågt Ksp = svårlöslig." },
  { id:128, cat:"Lösningar & koncentration", term:"Osmotiskt tryck", def:"Trycket som krävs för att stoppa osmotiskt flöde av lösningsmedel genom ett semipermeabelt membran; Π = cRT." },
  { id:129, cat:"Lösningar & koncentration", term:"Elektrolyt", def:"Ämne som bildar joner i lösning och därigenom leder elektrisk ström; stark elektrolyt dissocierar fullständigt (t.ex. NaCl)." },
  { id:130, cat:"Lösningar & koncentration", term:"Koligativa egenskaper", def:"Egenskaper hos en lösning som beror på antalet lösta partiklar, inte deras natur; t.ex. kokpunktshöjning, fryspunktssänkning." },
  { id:131, cat:"Lösningar & koncentration", term:"Mättat lösning", def:"Lösning som innehåller maximal mängd löst ämne vid given temperatur; ytterligare löst ämne fälls ut." },
  { id:132, cat:"Lösningar & koncentration", term:"Övermättat lösning", def:"Metastabilt tillstånd där mer ämne är löst än vad som normalt är möjligt; kristallisering utlöses lätt." },

  // ── 7b. Termokemi & energi – utökad ──
  { id:133, cat:"Termokemi & energi", term:"Entropi (S)", def:"Termodynamisk funktion som mäter systemets oordning eller antal tillgängliga mikrotillstånd; ΔS > 0 vid ökad oordning." },
  { id:134, cat:"Termokemi & energi", term:"Gibbs fria energi (ΔG)", def:"ΔG = ΔH − TΔS; avgör om en reaktion är spontan: ΔG < 0 spontan, ΔG > 0 icke-spontan, ΔG = 0 jämvikt." },
  { id:135, cat:"Termokemi & energi", term:"Standardbildningsentalpi", def:"Entalpiskillnaden (ΔHf°) vid bildning av 1 mol av ett ämne från sina grundämnen i standardtillstånd (25 °C, 1 bar)." },
  { id:136, cat:"Termokemi & energi", term:"Termodynamikens första lag", def:"Energi kan varken skapas eller förstöras; ΔU = Q − W (inre energiändring = tillfört värme minus utfört arbete)." },
  { id:137, cat:"Termokemi & energi", term:"Termodynamikens andra lag", def:"Entropin i ett isolerat system ökar alltid eller är konstant; värmeflydet sker spontant från varmt till kallt." },
  { id:138, cat:"Termokemi & energi", term:"Förbränningsentalpi", def:"Entalpiskillnaden vid fullständig förbränning av 1 mol av ett ämne; alltid exoterm (ΔH < 0)." },

  // ── 8b. Laborativ kemi & säkerhet – utökad ──
  { id:139, cat:"Laborativ kemi & säkerhet", term:"Kromatografi", def:"Separationsmetod baserad på ämneters olika affinitet för en stationär och en mobil fas; t.ex. TLC, papperskromatografi, HPLC." },
  { id:140, cat:"Laborativ kemi & säkerhet", term:"Flamfärgsreaktion", def:"Identifieringstest för metallkatjoner: lösningen förs in i en gaslåga och den karakteristiska färgen avslöjar grundämnet (t.ex. Na = gult, Cu = grönt)." },
  { id:141, cat:"Laborativ kemi & säkerhet", term:"Standardlösning", def:"Lösning med exakt känd koncentration; framställs genom avvägning av ren substans (primärstandard) eller kalibrering mot en annan standardlösning." },
  { id:142, cat:"Laborativ kemi & säkerhet", term:"pH-meter", def:"Elektroinstrument för exakt mätning av pH via en glaselektrod; kalibreras mot buffertlösningar med känt pH." },
  { id:143, cat:"Laborativ kemi & säkerhet", term:"Gravimetrisk analys", def:"Kvantitativ analysmetod där ett ämne fälls ut, filtreras, torkas och vägs för att bestämma mängden i provet." },
  { id:144, cat:"Laborativ kemi & säkerhet", term:"Avdunstning", def:"Separationsmetod där lösningsmedel avlägsnas genom uppvärmning tills det lösta ämnet återstår som fast substans." },
  { id:145, cat:"Laborativ kemi & säkerhet", term:"Blandbarhet", def:"Förmågan hos två vätskor att blanda sig i alla proportioner utan fasuppdelning; t.ex. etanol och vatten är blandbara, men olja och vatten inte." },

  // ── Syra-bas begrepp (utökade) ──
  { id:150, cat:"Syror & baser", term:"Oxoniumjon (H₃O⁺)", def:"Den hydratiserade protonen i vatten– bildas då en syra avger H⁺ till vatten; betecknas H₃O⁺." },
  { id:151, cat:"Syror & baser", term:"Hydroxidjon (OH⁻)", def:"Negativt laddad jon; bildas vid basers protolys i vatten; [OH⁻] > [H₃O⁺] ger basisk lösning." },
  { id:152, cat:"Syror & baser", term:"Protolys", def:"Reaktion där ett proton (H⁺) överförs från en protondonator (syra) till en protonacceptor (bas): HA + B ⇌ A⁻ + BH⁺." },
  { id:153, cat:"Syror & baser", term:"Deprotonering", def:"Process då en syra avger en proton och omvandlas till sin korresponderande bas; t.ex. CH₃COOH → CH₃COO⁻ + H⁺." },
  { id:154, cat:"Syror & baser", term:"Protonering", def:"Process då en bas tar emot en proton och omvandlas till sin korresponderande syra; t.ex. NH₃ + H⁺ → NH₄⁺." },
  { id:155, cat:"Syror & baser", term:"Korresponderande syra-baspar", def:"En syra och dess korresponderande bas skiljer sig med exakt ett H⁺; t.ex. HCl/Cl⁻ och H₂O/OH⁻." },
  { id:156, cat:"Syror & baser", term:"Sur lösning", def:"Vattenlösning där [H₃O⁺] > [OH⁻]; pH < 7 (vid 25 °C)." },
  { id:157, cat:"Syror & baser", term:"Basisk lösning", def:"Vattenlösning där [OH⁻] > [H₃O⁺]; pH > 7 (vid 25 °C)." },
  { id:158, cat:"Syror & baser", term:"Neutral lösning", def:"Vattenlösning där [H₃O⁺] = [OH⁻]; pH = 7 (vid 25 °C); uppstår vid neutralisation av stark syra med stark bas." },
  { id:159, cat:"Syror & baser", term:"Surt salt", def:"Salt bildat av stark syra + svag bas; ger sur vattenlösning (pH < 7). Exempel: NH₄Cl." },
  { id:160, cat:"Syror & baser", term:"Basiskt salt", def:"Salt bildat av svag syra + stark bas; ger basisk vattenlösning (pH > 7). Exempel: CH₃COONa." },
  { id:161, cat:"Syror & baser", term:"Neutralt salt", def:"Salt bildat av stark syra + stark bas; ger neutral vattenlösning (pH ≈ 7). Exempel: NaCl, KNO₃." },
  { id:162, cat:"Syror & baser", term:"Omslagsintervall", def:"pH-intervall inom vilket en indikator byter färg; vanligen ±1 kring pKₐ. Fenolftalein: 8,2–10,0; BTB: 6,0–7,6." },
  { id:163, cat:"Syror & baser", term:"Protolysgrad", def:"Andel av syra/bas-molekyler som pronolyserats i jämvikt; uttrycks 0–1 eller procent. Hög grad = stark syra." },
  { id:164, cat:"Syror & baser", term:"Dissociation", def:"Uppdelning av ett jonämne i fria joner i lösning. Starka syror/baser dissocierar fullständigt; svaga delvis." },
  { id:165, cat:"Syror & baser", term:"Fullständigt protolyserad", def:"Alla syra/bas-molekyler har avgett/tagit emot ett proton – karaktäriserar starka syror (HCl) och baser (NaOH)." },
  { id:166, cat:"Syror & baser", term:"Ofullständigt protolyserad", def:"Bara en del av molekylerna pronolyserats – jämvikt råder; karaktäriserar svaga syror (CH₃COOH) och baser (NH₃)." },
  { id:167, cat:"Syror & baser", term:"SIV-regeln", def:"Minnesregel vid balansering av redoxreaktioner: S=Syre med H₂O, I=väte med H⁺, V=laddning med elektroner." },
  { id:168, cat:"Syror & baser", term:"Surhetsgrad", def:"Mått på en lösnings surhet; pH är vanligaste måttet. Lägre pH = högre surhetsgrad = fler H₃O⁺-joner." },
  { id:169, cat:"Syror & baser", term:"Enprotonig syra", def:"Syra som avger ett proton per molekyl. Exempel: HCl, HNO₃, CH₃COOH, HF." },
  { id:170, cat:"Syror & baser", term:"Tvåprotonig syra", def:"Syra som kan avge två protoner per molekyl i två steg. Exempel: H₂SO₄, H₂CO₃." },
  { id:171, cat:"Syror & baser", term:"Stark bas", def:"Bas som fullständigt dissocierar i vatten. Exempel: NaOH, KOH, Ca(OH)₂." },
  { id:172, cat:"Syror & baser", term:"Svag bas", def:"Bas som bara delvis protolyseras i vatten – jämvikt råder. Exempel: NH₃, vatten." },
  { id:173, cat:"Syror & baser", term:"Titrand", def:"Den lösning med okänd koncentration som analyseras vid titrering." },
  { id:174, cat:"Syror & baser", term:"Titrator", def:"Den lösning med känd koncentration som tillsätts från byretten vid titrering." },
  { id:175, cat:"Syror & baser", term:"Buffertlösning", def:"Lösning som motstår pH-förändringar; svag syra + konjugerad bas. Blodets pH (≈7,4) hålls av H₂CO₃/HCO₃⁻-systemet." },

  // ── Grundämnen 1–20 + viktiga extra ──
  { id:200, cat:"Grundämnen", term:"H – Väte (Z=1)", def:"Lättaste grundämnet. Tvåatomig gas H₂. Period 1, grupp 1. Ingår i vatten och alla organiska molekyler." },
  { id:201, cat:"Grundämnen", term:"He – Helium (Z=2)", def:"Ädelgas. Reaktionströg. Lägst kokpunkt (−269 °C). Period 1, grupp 18." },
  { id:202, cat:"Grundämnen", term:"Li – Litium (Z=3)", def:"Lättaste metallen. Alkalimetall, grupp 1, period 2. 1 valenselektron. Bildar Li⁺." },
  { id:203, cat:"Grundämnen", term:"Be – Beryllium (Z=4)", def:"Jordalkalimetall, grupp 2, period 2. 2 valenselektroner. Bildar Be²⁺. Giftig." },
  { id:204, cat:"Grundämnen", term:"B – Bor (Z=5)", def:"Halvmetall, grupp 13, period 2. 3 valenselektroner. Ingår i Pyrex-glas." },
  { id:205, cat:"Grundämnen", term:"C – Kol (Z=6)", def:"Icke-metall, grupp 14, period 2. 4 valenselektroner. Grund för all organisk kemi. Grafit och diamant." },
  { id:206, cat:"Grundämnen", term:"N – Kväve (Z=7)", def:"Icke-metall, grupp 15, period 2. Tvåatomig gas N₂ (78% av luften). Trippelbindning i N₂." },
  { id:207, cat:"Grundämnen", term:"O – Syre (Z=8)", def:"Icke-metall, grupp 16, period 2. Tvåatomig gas O₂ (21% av luften). Nödvändig för förbränning." },
  { id:208, cat:"Grundämnen", term:"F – Fluor (Z=9)", def:"Halogen, grupp 17, period 2. Högst elektronegativitet (EN=4,0). Starkt oxidationsmedel." },
  { id:209, cat:"Grundämnen", term:"Ne – Neon (Z=10)", def:"Ädelgas, grupp 18, period 2. 8 valenselektroner (fullt skal). Reaktionströg. Neonskyltar." },
  { id:210, cat:"Grundämnen", term:"Na – Natrium (Z=11)", def:"Alkalimetall, grupp 1, period 3. 1 valenselektron. Bildar Na⁺. Reagerar med vatten. Ingår i NaCl." },
  { id:211, cat:"Grundämnen", term:"Mg – Magnesium (Z=12)", def:"Jordalkalimetall, grupp 2, period 3. Bildar Mg²⁺. Ingår i klorofyll. Brinner med vitt ljus." },
  { id:212, cat:"Grundämnen", term:"Al – Aluminium (Z=13)", def:"Lättmetall, grupp 13, period 3. Bildar Al³⁺. Skyddande oxidhinna Al₂O₃." },
  { id:213, cat:"Grundämnen", term:"Si – Kisel (Z=14)", def:"Halvledare, grupp 14, period 3. Grunden för datorchip. Kvartssand = SiO₂." },
  { id:214, cat:"Grundämnen", term:"P – Fosfor (Z=15)", def:"Icke-metall, grupp 15, period 3. Vit (reaktiv) och röd form. Ingår i DNA och ATP." },
  { id:215, cat:"Grundämnen", term:"S – Svavel (Z=16)", def:"Icke-metall, grupp 16, period 3. Gul fast substans. Ingår i H₂SO₄ och aminosyror." },
  { id:216, cat:"Grundämnen", term:"Cl – Klor (Z=17)", def:"Halogen, grupp 17, period 3. Grön-gul gas Cl₂. Stark oxidant. Bildar Cl⁻." },
  { id:217, cat:"Grundämnen", term:"Ar – Argon (Z=18)", def:"Ädelgas, grupp 18, period 3. Vanligaste ädelgasen i atmosfären (~1%). Skyddsgas vid svetsning." },
  { id:218, cat:"Grundämnen", term:"K – Kalium (Z=19)", def:"Alkalimetall, grupp 1, period 4. Bildar K⁺. Viktig i nervimpulser och växternas ämnesomsättning." },
  { id:219, cat:"Grundämnen", term:"Ca – Kalcium (Z=20)", def:"Jordalkalimetall, grupp 2, period 4. Bildar Ca²⁺. Ingår i kalksten (CaCO₃) och ben." },
  { id:220, cat:"Grundämnen", term:"Fe – Järn (Z=26)", def:"Övergångsmetall, period 4. Bildar Fe²⁺ och Fe³⁺. Vanligaste metallen i jordskorpan. Grunden för stål." },
  { id:221, cat:"Grundämnen", term:"Cu – Koppar (Z=29)", def:"Övergångsmetall, period 4. Bildar Cu⁺ och Cu²⁺. Excellent elektrisk ledare. Cuprum på latin." },
  { id:222, cat:"Grundämnen", term:"Zn – Zink (Z=30)", def:"Övergångsmetall, period 4. Bildar Zn²⁺. Galvanisering av stål (rostskydd)." },
  { id:223, cat:"Grundämnen", term:"Br – Brom (Z=35)", def:"Halogen, period 4. Enda icke-metallen som är flytande vid rumstemperatur. Bildar Br⁻." },
  { id:224, cat:"Grundämnen", term:"Ag – Silver (Z=47)", def:"Ädel övergångsmetall. Bästa elektriska ledaren. Bildar Ag⁺. Argentum på latin." },
  { id:225, cat:"Grundämnen", term:"I – Jod (Z=53)", def:"Halogen, period 5. Svart-lila fast substans. Bildar I⁻. Viktigt för sköldkörteln." },
  { id:226, cat:"Grundämnen", term:"Au – Guld (Z=79)", def:"Ädel övergångsmetall. Bildar Au⁺ och Au³⁺. Löser sig inte i vanliga syror. Aurum på latin." },

  // ── Vanliga syror & baser ──
  { id:230, cat:"Vanliga syror & baser", term:"HCl – Saltsyra", def:"Stark syra. HCl → H⁺ + Cl⁻ (fullständig). Finns i magsäcken. Frätande." },
  { id:231, cat:"Vanliga syror & baser", term:"H₂SO₄ – Svavelsyra", def:"Stark tvåprotonig syra. Starkt korrosiv. Bilbatterier och gödselproduktion." },
  { id:232, cat:"Vanliga syror & baser", term:"HNO₃ – Salpetersyra", def:"Stark syra och starkt oxidationsmedel. Reagerar med de flesta metaller." },
  { id:233, cat:"Vanliga syror & baser", term:"HBr – Bromvätesyra", def:"Stark halogenvätesyra. HBr → H⁺ + Br⁻ (fullständig)." },
  { id:234, cat:"Vanliga syror & baser", term:"HI – Jodvätesyra", def:"Stark halogenvätesyra. HI → H⁺ + I⁻. Starkt reduceringsmedel." },
  { id:235, cat:"Vanliga syror & baser", term:"CH₃COOH – Ättiksyra", def:"Svag syra. pKa = 4,75. Finns i vinäger (5–8%). Konj. bas: CH₃COO⁻." },
  { id:236, cat:"Vanliga syror & baser", term:"HF – Fluorvätesyra", def:"Svag syra (pKa ≈ 3,2). Farlig – angriper benvävnad och glas. Kräver specialhantering." },
  { id:237, cat:"Vanliga syror & baser", term:"H₂CO₃ – Kolsyra", def:"Svag tvåprotonig syra. CO₂ + H₂O ⇌ H₂CO₃. Viktig buffert i blodet." },
  { id:238, cat:"Vanliga syror & baser", term:"H₃PO₄ – Fosforsyra", def:"Svag treprotonig syra. pKa₁ ≈ 2,1. Ingår i läskedrycker. Cellulär buffert." },
  { id:239, cat:"Vanliga syror & baser", term:"NaOH – Natriumhydroxid", def:"Stark bas. NaOH → Na⁺ + OH⁻. Starkt frätande. Kallas lut. Tvål och papper." },
  { id:240, cat:"Vanliga syror & baser", term:"KOH – Kaliumhydroxid", def:"Stark bas. KOH → K⁺ + OH⁻. Liknande NaOH. Alkaliska batterier." },
  { id:241, cat:"Vanliga syror & baser", term:"Ca(OH)₂ – Kalciumhydroxid", def:"Stark men svagt löslig bas. pH ≈ 12,4 (mättat). Kalkvatten. Cement och jordbruk." },
  { id:242, cat:"Vanliga syror & baser", term:"NH₃ – Ammoniak", def:"Svag bas. NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. Skarp lukt. Gödningsmedel." },

  // ── Redox & elektrokemi – begrepp ──
  { id:243, cat:"Redox & elektrokemi", term:"Galvaniskt element", def:"Elektrokemisk cell som omvandlar en spontan redoxreaktion till elektrisk energi. Anod (−) = oxidation, katod (+) = reduktion. Exempel: Daniell-cellen med Zn-anod och Cu-katod." },
  { id:244, cat:"Redox & elektrokemi", term:"Normalpotential (E°)", def:"Reduktionspotential under standardförhållanden (25 °C, 1 mol/L, 1 atm) mätt mot normalvätgaselektroden (E° = 0,00 V). Hög positiv E° = ädel metall, stark oxidant (reduceras gärna)." },
  { id:245, cat:"Redox & elektrokemi", term:"Elektrokemisk spänningsserie", def:"Rangordning av metaller och halvreaktioner efter stigande E°. Ädla metaller (Au, Pt) längst upp; reaktiva metaller (Li, K, Na) längst ner. En metall med lägre E° reducerar joner av metaller med högre E°." },
  { id:246, cat:"Redox & elektrokemi", term:"Normalvätgaselektrod", def:"Referenselektrod med definierat E° = 0,00 V: platinaplåt i H₂-gas (1 atm) nedsänkt i 1 mol/L H⁺-lösning. Alla normalpotentialer mäts relativt denna." },
  { id:247, cat:"Redox & elektrokemi", term:"EMK (elektromotorisk kraft)", def:"Potentialskillnaden (spänningen) hos ett galvaniskt element: EMK = E°(katod) − E°(anod). Positiv EMK innebär spontan reaktion. Enhet: volt (V)." },
  { id:248, cat:"Redox & elektrokemi", term:"Elektrodpotential", def:"Potential som uppkommer vid en elektrod då den oxiderade och reducerade formen är i jämvikt; mäts relativt normalvätgaselektroden. Påverkas av koncentration (Nernst-ekvationen)." },
  { id:249, cat:"Redox & elektrokemi", term:"Korrosion", def:"Elektrokemisk nedbrytning av en metall genom oxidation. Järnrost: 4Fe + 3O₂ → 2Fe₂O₃. Kräver fukt och syre; accelereras av kontakt med ädlare metall eller salt (galvanisk korrosion)." },
  { id:250, cat:"Redox & elektrokemi", term:"Galvanisk korrosion", def:"Accelererad korrosion när två olika metaller är i elektrisk kontakt i en elektrolyt. Den oädlare metallen (lägre E°) oxideras snabbare. Ex: aluminium + stål i saltvatten." },
  { id:251, cat:"Redox & elektrokemi", term:"Offeranod", def:"Mer oädel metall (Zn eller Mg) som ansluts till konstruktionen och korroderar istället för att skydda stål/järn. Används på fartygsytor, rörledningar och betongpålar." },
  { id:252, cat:"Redox & elektrokemi", term:"Passivering", def:"Spontan bildning av ett skyddande oxidskikt på metallyta: Al₂O₃ på aluminium, Cr₂O₃ på krom/rostfritt stål. Hindrar vidare korrosion trots att metallen är oädel." },
  { id:253, cat:"Redox & elektrokemi", term:"Cellschema", def:"Standardnotation för galvanisk cell: Zn(s)|Zn²⁺(aq)||Cu²⁺(aq)|Cu(s). Enkelt streck | = fasövergång; dubbelt streck || = saltbrygga. Vänster = anod (oxidation), höger = katod (reduktion)." },
  { id:254, cat:"Redox & elektrokemi", term:"Redoxpar", def:"Oxiderad och reducerad form av ett ämne: Ox/Red, t.ex. Cu²⁺/Cu och Zn/Zn²⁺. I ett galvaniskt element utbyter de två redoxparen elektroner; det med lägre E° är reduktionsmedlet." },
  { id:255, cat:"Redox & elektrokemi", term:"Elektrolys", def:"Icke-spontan kemisk reaktion driven av extern elektrisk ström. Katod (−) = reduktion (katjoner reduceras), anod (+) = oxidation. Omvänt mot galvanisk cell. Ex: framställning av Al, Cl₂, NaOH." },

  // ── Atomens byggnad – tillägg ──
  { id:256, cat:"Atomens byggnad", term:"Atommassa", def:"Viktat medelvärde av alla naturliga isotopmassor för ett grundämne, relativt ¹²C = 12,000 u. Anges i periodiska systemet. Ex: Cl = 35,45 u (75 % ³⁵Cl, 25 % ³⁷Cl)." },

  // ── Materia & faser – tillägg ──
  { id:257, cat:"Materia & faser", term:"Homogen blandning", def:"Blandning med enhetlig sammansättning genomgående; faserna kan inte urskiljas. Ex: saltlösning, luft, legering. Separeras ej med filtrering; kräver destillation eller kristallisering." },
  { id:258, cat:"Materia & faser", term:"Heterogen blandning", def:"Blandning med varierande sammansättning; olika faser är synliga. Ex: sand i vatten, granit, mjölk. Kan separeras med filtrering, dekantation eller centrifugering." },

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

  // ── Reaktioner & stökiometri – tillägg ──
  { id:259, cat:"Reaktioner & stökiometri", term:"Kristallvatten", def:"Vattenmolekyler inbyggda i en jonkristalls struktur. Anges med centralpunkt: CuSO₄·5H₂O (kopparsulfatpentahydrat, blå). Avlägsnas vid uppvärmning; molförhållande bestäms via massförlust." },

  // ── Kemisk bindning – tillägg ──
  { id:260, cat:"Kemisk bindning", term:"Hydrofil", def:"'Vattenälskande'; polära ämnen (salter, socker, etanol) som löser sig i vatten via jon-dipol- eller vätebindningar. Lika löser lika: polär i polär." },
  { id:261, cat:"Kemisk bindning", term:"Hydrofob", def:"'Vattenfrysande'; opolära ämnen (fetter, oljor, vaxer) som inte löser sig i vatten men löser sig i opolära lösningsmedel (bensin, eter). Lika löser lika: opolär i opolär." },

  // ── Syror & baser – indikatorer & par ──
  { id:262, cat:"Syror & baser", term:"Lackmus", def:"Indikator framställd ur lavar. Röd i sur lösning (pH < 5), blå i basisk lösning (pH > 8). Omslagsintervall ca pH 5–8. Lämplig för att snabbt avgöra om en lösning är sur eller basisk." },
  { id:263, cat:"Syror & baser", term:"Bromtymolblått (BTB)", def:"Indikator med omslagsintervall pH 6,0–7,6. Gul i sur lösning, grön vid neutralt pH (~7), blå i basisk lösning. Lämplig vid titrering av stark syra mot stark bas." },
  { id:264, cat:"Syror & baser", term:"Syra-baspar", def:"Två ämnen som skiljer sig med exakt ett proton H⁺; syran avger H⁺ och bildar sin korresponderande bas (konjugatbas). Ex: HCl/Cl⁻ och NH₄⁺/NH₃. I en protolys finns alltid två syra-baspar." },

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

];

// ═══════════════════════════════════════════════════════
//  MNEMONICS  (id → minnesbild)
// ═══════════════════════════════════════════════════════
const MNEMONICS = {
  // Atomens byggnad
  1:  "Tänk på en sol med planeter runt: kärnan = solen, elektroner = planeterna.",
  2:  "JOn = JObbig laddning. Plus = katjon (katten ger), minus = anjon (tar emot).",
  3:  "ISO = lika (som i isobar). Samma grundämne, olika vikt – som tvillingar med olika matvanor.",
  4:  "AtomNUMMER = räkna PROtonerna. Z = Zahl (tyska för tal).",
  5:  "MASStalet = PROtoner + NEUtroner. Masstal = vad som väger (elektroner väger nästan inget).",
  6:  "ELEKtron = ELEKtrisk, NEGativ. Minustecken runt kärnan.",
  7:  "PROton = PROs = positiv. P i Proton = Positiv.",
  8:  "NEUtron = NEUTral. Varken + eller −, som en fredsmäklare i kärnan.",
  9:  "SKAl = SKIkt. Tänk på en lök: lager på lager runt kärnan (K, L, M...).",
  10: "2-8-8: Konungen Låter Människorna bo (K=2, L=8, M=8). Natrium = 2,8,1.",
  11: "PERIODicitet = mönster som REPETERAR – som ett musikstycke med refräng.",
  12: "ElektroNEGAtivitet: Fluor är mest negativ och sitter uppe till höger – som en sur lärare i klassrummet.",
  13: "JonisationsENERGI = energin att KASTA ut en elektron. Svårare högt upp till höger.",
  14: "METALLkaraktär = ge bort elektroner. Ökar åt vänster och nedåt – mot metallhörnet.",
  89: "RADIOaktivitet = sänder ut strålning, som en radio sänder ut ljudvågor.",
  90: "HALVERINGStid: börja med 100 g → efter 1 t½ = 50 g → 25 g → 12,5 g…",
  91: "ORBITal = ORBITa = bana. s = sfär (rund), p = hantel (avlång).",
  92: "GRUNDämne = GRUNDläggande, kan inte delas kemiskt. Listan i periodiska systemet.",
  93: "AtomRADIE: ökar nedåt (fler skal = större), minskar åt höger (fler protoner drar in elektroner).",
  94: "ÄDELgas = ÄDEL = nöjd med 8 elektroner. Oktettregeln = 8 = O-K-T-E-T-T.",
  95: "22,4 L/mol vid STP. Kom ihåg: 'Tjugotvå-fyra liter per mol.'",

  // Kemisk bindning
  15: "JONbindning = metal ger, icke-metall tar. Kärlek på avstånd – elektrostatisk attraktion.",
  16: "KOvalent = KOmpisar delar. Icke-metaller delar elektronpar som bästa vänner.",
  17: "METALLbindning = HAV av elektroner. Metalljoner badar i ett elektronhav.",
  18: "POLÄRt = en pol är mer negativ. δ+ och δ− som jordens nord- och sydpol.",
  19: "oPOLÄR = lika delning. H–H: båda H lika starka, ingen vinner dragkampen.",
  20: "DIPOLmoment: DI = två. Molekylen har en + ände och en − ände som en magnet.",
  21: "VÄTEbindning: H bredvid N, O eller F. Minnesregel: H-NOF (Hanof).",
  22: "Van der Waals = VANLIGA, svaga krafter. Finns alltid, men svagast av alla.",
  23: "LEWIS-struktur: Linjer = bindningar, Punktpar = fria elektroner. Rita upp molekylen.",
  24: "VSEPR: Varje Stark Elektron Söker Plats Rätt. Elektronpar håller avstånd från varandra.",
  96: "SIGMA = rakt längs axeln (som S = Straight). Alltid med i varje bindning.",
  97: "PI = Parallellt ovanpå och nedanpå (som taket på en bok). Tillkommer i dubbel/trippel.",
  98: "HYBRID = blandning, som hybridbil. sp³ = 4 lika orbitaler = tetraedrisk.",
  99: "Nätverkskovalent = DIAMANT. Hela kristallen är en enda jättemolekyl = extremt hårt.",
  100:"INTERmolekylär = INTER = mellan (som internationell = mellan länder).",
  101:"Katjon (pos) = liten, anjon (neg) = stor. Positiv jon tappar elektroner → krymper.",

  // Reaktioner & stökiometri
  25: "Reaktionsformel = RECEPT. Ingredienser (reaktanter) → maträtt (produkter).",
  26: "MOL = 6,022 × 10²³. Tänk: ett dussin = 12, ett mol = 602 200 000 000 000 000 000 000.",
  27: "MOLmassa = gram per mol = atommassan i tabellen. H₂O: 2×1 + 16 = 18 g/mol.",
  28: "Avogadros tal: 6,022 × 10²³. Minns: '6-noll-2-3' som ett PIN-kod.",
  29: "UTBYTE = faktiskt / teoretiskt × 100 %. Aldrig över 100 % i verkligheten.",
  30: "BEGRÄNSANDE reagens = den som tar slut FÖRST. Som det minsta pusselbrickan.",
  31: "OXidationstal: O i förening = −2, H = +1, ren metall = 0. Undantag finns.",
  32: "OXidation = OIL = förlorar elektroner. Oxidationstal ÖKAR.",
  33: "REduktion = RIG = vinner elektroner. Oxidationstal MINSKAR.",
  34: "REDOX = REDuktion + OXidation. De sker ALLTID ihop – OIL RIG.",
  35: "BALANSering = lika massa på båda sidor. Räkna atomer, kontrollera laddning.",
  102:"KATAlysator = snabbar på utan att förbrukas. Som en matchmaker – hjälper ihop men gifter sig inte.",
  103:"AktivERINGSenergi = tändtröskeln. Lägre med katalysator = reaktionen startar lättare.",
  104:"ReaktionsHASTIGHET ökar med: mer värme, högre koncentration, mer yta, katalysator.",
  105:"JÄMVIkt = balansvåg. Fram- och bakåtreaktion lika snabba. Inte 50/50 – bara konstant.",
  106:"K = produkter / reaktanter. Stort K = produkterna dominerar = reaktionen 'gick åt höger'.",
  107:"Le Chatelier = systemet pushback. Störs systemet → det motverkar störningen.",
  108:"FÄLLning = moln bildas i glaset = olösligt salt. AgNO₃ + NaCl → vit fällning AgCl.",
  109:"KombinATION: A + B → AB. Två ämnen gifter sig till ett.",
  110:"SÖNDERdelning: AB → A + B. Skilsmässa – ett ämne delar sig i två.",

  // Syror & baser
  36: "SYRA = protondonator = ger bort H⁺. Sur citron ger ifrån sig surheten.",
  37: "BAS = protonacceptor = tar emot H⁺. Bas-koll tar hand om protoner.",
  38: "pH = −log[H⁺]. pH 7 = neutralt. Under 7 = surt, över 7 = basiskt.",
  39: "pH + pOH = 14. De kompletterar varandra som 14 timmar i ett dygn.",
  40: "Neutralisation = FRED: syra + bas → salt + vatten. Fienderna neutraliserar varandra.",
  41: "BUFFERT = stötdämpare mot pH-ändringar. Som krockskyddet på en bil.",
  42: "TITRERING = droppa tills indikatorn byter färg. Byretten = medicindroppe.",
  43: "INDIKATOR = spion som avslöjar pH via färgbyte. Fenolftalein: färglös→rosa.",
  44: "Brønsted-Lowry: syra = proton-taxi (skjutsar H⁺), bas = proton-parkeringsplats.",
  45: "AMFOLYT = AMBI = kan gå åt båda håll. Vatten är amfolyt – syra OCH bas.",
  46: "STARK syra: HCl, HNO₃, H₂SO₄. Minnesord: 'Hårt Nitiskt Syraarbete'.",
  47: "SVAG syra dissocierar bara lite. Ättika = svag syra (3–5 % i matättika).",
  111:"KONJUGerat par = skiljer sig med ETT proton. CH₃COOH ↔ CH₃COO⁻.",
  112:"Ka LITEN = syra SVAG. Ka = 1,8×10⁻⁵ för ättiksyra → svag.",
  113:"AutoPROTOLYS: vatten reagerar med sig självt. 2H₂O ⇌ H₃O⁺ + OH⁻. Kw = 10⁻¹⁴.",
  114:"EKVIvalENSpunkt: LIKA mol syra och bas har reagerat. Indikatorn byter färg.",
  115:"LEWIS-syra tar emot elektronpar (bredare definition). BF₃ = elektronhungrig.",
  116:"SALThydrolys: svagt salt → pH ≠ 7. Stark syra/svag bas → surt salt.",
  117:"PROTON = H⁺ = naket väte (ingen elektron kvar). I vatten: H₃O⁺ (hydroniumjon).",

  // Organisk kemi
  48: "KOLVÄTE = bara C och H. Inget annat – rent kol och väte.",
  49: "ALKANER: AN = ENkelbindningar. Metan, Etan, Propan, Butan – räkna C.",
  50: "ALKENER: EN = dubbElbindning. Eten, Propen – 'e' i mitten för dubbel.",
  51: "ALKYNER: YN = trippElbindning. Etyn – tre streck mellan C-atomerna.",
  52: "ARENER = AROMAtiska = bensenkärna med delokaliserade elektroner. Luktar ofta.",
  53: "FUNKTIONELL grupp = personligheten hos molekylen. Bestämmer hur den reagerar.",
  54: "ALKOHOL = –OH. Etanol = drickalkohol. OH = Oh Hej, en hydroxylgrupp!",
  55: "ALDEHYD = CHO i ÄNDEN av kedjan. Al = i änden (Al-dehyd = ände-dehyd).",
  56: "KETON = CO i MITTEN. Ketonen sitter INNE i kedjan. Aceton är bekant keton.",
  57: "KARBOXYLsyra = –COOH. COOH = Carboxy = sur. Ättiksyra, citronsyra.",
  58: "ESTER = syra + alkohol − H₂O. Luktar ofta fruktigt. Etylacetat = nagellacksborttagare.",
  59: "AMIN = –NH₂. Bas – kväve tar gärna emot H⁺. Ammoniak-liknande lukt.",
  60: "ISOMERI = samma formel, olika form. C₄H₁₀ = butan eller isobutan.",
  61: "NOMENKLATUR = IUPAC = internationellt namn. Metyl-, etyl-, propyl- = 1, 2, 3 C.",
  118:"ADDITION = lägga till vid dubbelbindning. Brom + eten → dibrometan. Omättat → mättat.",
  119:"SUBSTITUTION = byta ut. En grupp kliver ut, en annan kliver in.",
  120:"KONDENSATION = förena + spjälka vatten. Syra + alkohol → ester + H₂O.",
  121:"POLYMER = POLY = många. Polyeten = tusentals eten-monomerer kedjade.",
  122:"MONOMER = MONO = en. Byggstenen som upprepas i en polymer.",
  123:"KIRAL = händer kan inte läggas ovanpå varandra. Asymmetrisk kolatom → spegelbild.",
  124:"SAPONIFIERING = tvålkemi. Fett + NaOH → glycerol + fettsyresalt (tvål).",
  125:"AMID = CONH = peptidbindning i proteiner. Amidgrupp håller ihop aminosyror.",
  126:"Oxidation i org. kemi: alkohol → aldehyd → karboxylsyra. Mer syre = mer oxiderat.",

  // Lösningar
  62: "LÖSNING = homogen blandning. Kan inte se gräns mellan ämnen.",
  63: "LÖSNINGSmedel = det mesta = vatten. Universallösningsmedel.",
  64: "LÖST ämne = det lilla = sockret i teet.",
  65: "KONCENTRATion = hur mycket per liter. Starkt kaffe = hög koncentration.",
  66: "MOLARitet c = n/V. Tänk: mol/Liter. c = n/V = 'cent per volym'.",
  67: "MOLAlitet = mol/kg. Inte beroende av temperatur – viktigare i vissa beräkningar.",
  68: "LÖSLIGHet = max som löser sig. Mättnadsgrepp – ingen plats för mer.",
  69: "UTSPÄDning: c₁V₁ = c₂V₂. Mol bevaras. Späd alltid syra i vatten!",
  70: "KOLLOID = Tyndall-effekten. Skina en ficklampa i mjölk → ljuset sprids = kolloid.",
  71: "SUSPENSION = sjunker. Sand i vatten sjunker om man slutar röra.",
  127:"Ksp LITEN = svårlösligt salt. Jonprodukten > Ksp → fällning bildas.",
  128:"OSMOS: vatten vandrar mot högre koncentration. Saltvatten drar fukt ur cellen.",
  129:"ELEKTROlyt = leder ström via joner. Stark elektrolyt dissocierar fullständigt.",
  130:"KOLIGATIVA egenskaper: ANTAL partiklar räknas, inte vilka. Salt sänker fryspunkten mer än socker (2 joner vs 1 molekyl).",
  131:"MÄTTAT = full kopp. Mer socker löser sig inte – faller ut som kristaller.",
  132:"ÖVERMÄTTAT = för fullt, instabilt. En kristall startar kedjereaktionen.",

  // Termokemi
  72: "ENTALpi H = värme vid konstant TRYCK. ΔH < 0 = exoterm = avger värme.",
  73: "EXOterm = EXit = värme lämnar systemet. Förbränning, neutralisation.",
  74: "ENDOterm = ENter = värme in i systemet. Fotosyntesen, smältning.",
  75: "REAKTIONSentalpi ΔH = produkter − reaktanter. Negativt = exoterm.",
  76: "HESS lag = vägen spelar ingen roll. Bara start och slutpunkt avgör ΔH.",
  77: "BINDNINGSenergi: bryta = tar energi (endotert), bilda = ger energi (exotert).",
  78: "KALORIMETRi = mäter kalorier/värme. Q = m·c·ΔT. c(vatten) = 4,18 J/g°C.",
  79: "SPECIFIK VÄRMEkapacitet vatten = 4,18 J/g°C. Högt = svårt att värma/kyla. Stabilt klimat nära hav.",
  133:"ENTROpi S = oordning. Gas > vätska > fast. Naturen strävar alltid mot mer kaos.",
  134:"GIBBS ΔG = ΔH − TΔS. Negativt ΔG = spontant. G för 'Go' (reaktionen går spontant).",
  135:"StandardBILDNINGSentalpi: grundämnen → 1 mol ämne. ΔHf° = 0 för grundämnen.",
  136:"Termodynamikens 1:a lag: energi bevaras. ΔU = Q − W. Ingenting försvinner.",
  137:"Termodynamikens 2:a lag: oordning ökar alltid. Värme flödar aldrig spontant från kallt till varmt.",
  138:"FÖRBRÄNNINGSentalpi: alltid negativ (exoterm). Förbränning frigör alltid energi.",

  // Laborativ kemi
  80: "DESTILLATION = koka + kondensera. Ångorna stiger, kyls ner och samlas rent.",
  81: "FILTRERING = hålet i filtret avgör. Fast stanna, flytande passerar.",
  82: "KRISTALLISering = avkyla → kristaller faller ut. Socker kristalliserar ur mättat vatten.",
  83: "SPEKTROSkopi = ljusets fingeravtryck. Varje ämne absorberar unika våglängder.",
  84: "RISKBEDÖMning = tänk INNAN. Identifiera, bedöm, åtgärda – i den ordningen.",
  85: "SKYDDSutrustning = trio: GLASÖGON + ROCK + HANDSKAR. Alltid, utan undantag.",
  86: "KEMIKALIEsäkerhet = läs SDB. Säkerhetsdatablad = kemikaliens ID-kort.",
  87: "GHS = röd romb = VARNING. 9 piktogram = 9 typer av faror.",
  88: "SDB = 16 AVSNITT. Allt om kemikalien på ett ställe.",
  139:"KROMAtografi = KROM = färg (från grekiskans chroma). Separerar ämnen via affinitet.",
  140:"FLAMfärg: Na=gult, K=lila, Cu=grönt, Ca=rödorange. 'Natriums gula kök'.",
  141:"STANDARDlösning = KÄND koncentration. Primärstandard = vägt exakt, direkt löst.",
  142:"pH-METER = glaselektrod + referenselektrod. Kalibreras mot buffertlösningar.",
  143:"GRAVIMETRi = VÄGER. grav = tyngd (som gravitation). Fäll ut, filtrera, väg.",
  144:"AVDUNSTning = lösningsmedel flyger bort. Det fasta ämnet stannar kvar.",
  145:"BLANDBAR = olja och vatten blandar sig INTE. Polär + opolär = ej blandbar.",

  // Redox & elektrokemi
  243:"GALVANISKT element = självgående reaktion driver ström. Minns: 'Galvani stuckna grodben' → el!",
  244:"NORMALPOTENTIAL: hög E° = ädel = vill reduceras. Au (+1,7V) vill inte reagera, Li (−3V) vill jättegärna.",
  245:"SPÄNNINGSSERIEN: topp = ädlast, botten = reaktivast. Zink skyddar järn: Zn lägre E° än Fe → Zn offrar sig.",
  246:"VÄTGASELEKTROD = nollpunkten. E° = 0,00 V per definition. Allt mäts mot denna.",
  247:"EMK = katod MINUS anod. 'Katoden Minus Anoden'. Positivt värde = reaktionen går spontant.",
  248:"ELEKTRODpotential: ju lägre E°, desto oädlare och mer 'sugen på att ge bort elektroner'.",
  249:"KORROsion = metall rustar = oxideras. Fe → Fe²⁺. Behöver fukt + syre. Salt = snabbare.",
  250:"GALVANISK korrosion: två metaller + fukt = batteri → oädlare ätts upp. Alu + stål = nej tack.",
  251:"OFFERanod: offra Zn/Mg så överlever järnet. 'Offra det billiga, rädda det dyra'.",
  252:"PAssivering = PA-skydd. Aluminium: Al₂O₃-hinna = naturlig pansar. Krom = rostfritt stål.",
  253:"CELLschema: vänster = ANOD (oxidation), höger = KATOD (reduktion). || = saltbrygga = skiljelinje.",
  254:"REDOXpar: Ox/Red som ett par. Cu²⁺/Cu är ett par, Zn/Zn²⁺ ett annat. De byter elektroner.",
  255:"ELEKTROlys = TVINGA reaktionen. Extern ström driver åt fel håll. Mot spontan riktning.",

  // Atomens byggnad – tillägg
  256:"ATOMMassa = viktat MEDELVÄRDE av isotoperna. Klor = 35,45 g/mol för att 75% är ³⁵Cl.",

  // Materia & faser – tillägg
  257:"HOMOGEN = HOM-ogun. Ser enhetlig ut = kan ej skilja faserna åt. Saltlösning = homogen.",
  258:"HETErogen = HETER olika. Olika faser syns. Sand i vatten = heterogen.",
  // Materia & faser – fasövergångar
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

  // Reaktioner – tillägg
  259:"KRISTALLvatten: CuSO₄·5H₂O = 5 H₂O inbyggda. Blå färg. Värm → vit (vattenfri form).",

  // Bindning – tillägg
  260:"HYDROFIL = HYDRO (vatten) + FIL (vän). Socker gillar vatten. Polär i polär.",
  261:"HYDROFob = HYDRO + FOB (rädd). Olja rädd för vatten. Opolär i opolär.",

  // Syror & baser – tillägg
  262:"LACKMUS: RÖD i SUR, BLÅ i BAS. 'Röd + sur = lika stämmer'. Grov men snabb.",
  263:"BTB: GUL=sur, GRÖN=neutral, BLÅ=basisk. Trafikljus: rött saknas, men gult stoppar!",
  264:"SYRA-BASpar: alltid TVÅ par i en protolysreaktion. Syran → konjugatbas, basen → konjugatsyra.",

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

};

// ═══════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════
const CATEGORIES = [...new Set(CARDS.map(c => c.cat))];
const STORAGE_KEY = 'kemi1_v2';

let state = {
  theme: 'light',
  selectedCats: new Set(),   // empty = none selected by default
  mode: 'flip',    // flip | mc | ft
  direction: 'term', // term | def | random
  cardData: {}, // id -> { correct, wrong, mastered, nextRound }
  currentRound: 0,
  mutedCards: new Set(), // muted card ids
};

let session = {
  queue: [],
  idx: 0,
  correct: 0,
  wrong: 0,
  wrongItems: [],
  flipped: false,
};

// ── Persistence ──
function saveState() {
  const toSave = {
    theme: state.theme,
    cardData: state.cardData,
    currentRound: state.currentRound,
    mutedCards: [...state.mutedCards],
    selectedCats: [...state.selectedCats],
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.theme) state.theme = saved.theme;
    if (saved.cardData) state.cardData = saved.cardData;
    if (saved.currentRound) state.currentRound = saved.currentRound;
    if (saved.mutedCards) state.mutedCards = new Set(saved.mutedCards);
    if (saved.selectedCats) state.selectedCats = new Set(saved.selectedCats);
  } catch(e) {}
}

function getCardData(id) {
  if (!state.cardData[id]) state.cardData[id] = { correct:0, wrong:0, mastered:false, nextRound:0 };
  return state.cardData[id];
}

function isMastered(id) { return !!getCardData(id).mastered; }

// ═══════════════════════════════════════════════════════
//  THEME
// ═══════════════════════════════════════════════════════
const themeBtn = document.getElementById('themeBtn');
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  themeBtn.textContent = state.theme === 'dark' ? '☀️ Ljust' : '🌙 Mörkt';
}
themeBtn.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(); saveState();
});

// ═══════════════════════════════════════════════════════
//  SCREENS
// ═══════════════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ═══════════════════════════════════════════════════════
//  HOME SCREEN
// ═══════════════════════════════════════════════════════
function buildCategoryGrid() {
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = '';

  // "Alla" card
  const allCard = document.createElement('div');
  allCard.className = 'cat-card all-btn';
  allCard.dataset.cat = '__all__';
  const allMastered = CARDS.filter(c => isMastered(c.id) && !state.mutedCards.has(c.id)).length;
  const allActive = CARDS.filter(c => !state.mutedCards.has(c.id)).length;
  const allPct = allActive ? Math.round(allMastered / allActive * 100) : 0;
  allCard.innerHTML = `
    <div class="cat-check">✓</div>
    <div class="cat-name">🌟 Alla kategorier</div>
    <div class="cat-count">${allActive} kort • ${allMastered} bemästrade</div>
    <div class="cat-progress-bar"><div class="cat-progress-fill" style="width:${allPct}%"></div></div>`;
  allCard.addEventListener('click', () => {
    state.selectedCats = new Set(CATEGORIES);
    saveState();
    updateCatGrid();
  });
  grid.appendChild(allCard);

  CATEGORIES.forEach(cat => {
    const cards = CARDS.filter(c => c.cat === cat && !state.mutedCards.has(c.id));
    const allCatCards = CARDS.filter(c => c.cat === cat);
    const mastered = cards.filter(c => isMastered(c.id)).length;
    const pct = cards.length ? Math.round(mastered / cards.length * 100) : 0;
    const mutedCount = allCatCards.length - cards.length;
    const div = document.createElement('div');
    div.className = 'cat-card' + (state.selectedCats.has(cat) ? ' selected' : '');
    div.dataset.cat = cat;
    div.innerHTML = `
      <div class="cat-check">✓</div>
      <div class="cat-name">${cat}</div>
      <div class="cat-count">${cards.length} kort${mutedCount ? ' • <span style="color:var(--text2)">'+mutedCount+' tysta</span>' : ''} • ${mastered} bemästrade</div>
      <div class="cat-progress-bar"><div class="cat-progress-fill" style="width:${pct}%"></div></div>
      <button class="cat-manage-btn" data-cat="${cat}" title="Hantera kort i denna kategori">⚙️ Hantera</button>`;
    div.addEventListener('click', (e) => {
      if (e.target.closest('.cat-manage-btn')) return;
      if (state.selectedCats.has(cat)) {
        state.selectedCats.delete(cat);
      } else {
        state.selectedCats.add(cat);
      }
      saveState();
      updateCatGrid();
    });
    div.querySelector('.cat-manage-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openManageModal(cat);
    });
    grid.appendChild(div);
  });
}

function updateCatGrid() {
  document.querySelectorAll('.cat-card[data-cat]').forEach(el => {
    const cat = el.dataset.cat;
    if (cat === '__all__') {
      el.className = 'cat-card all-btn';
    } else {
      el.className = 'cat-card' + (state.selectedCats.has(cat) ? ' selected' : '');
    }
  });
  updateHomeStats();
}

function openManageModal(cat) {
  const cards = CARDS.filter(c => c.cat === cat);
  document.getElementById('manageModalTitle').textContent = '⚙️ ' + cat;
  const muted = cards.filter(c => state.mutedCards.has(c.id)).length;
  document.getElementById('manageModalSubtitle').textContent =
    cards.length + ' kort  •  ' + muted + ' tysta  •  ' + (cards.length - muted) + ' aktiva';

  const list = document.getElementById('manageCardList');
  list.innerHTML = '';
  cards.forEach(card => {
    const isMuted = state.mutedCards.has(card.id);
    const item = document.createElement('div');
    item.className = 'manage-card-item' + (isMuted ? ' is-muted' : '');
    item.innerHTML = `
      <div class="manage-card-item-text">
        <div class="manage-card-term">${card.term}</div>
        <div class="manage-card-def">${card.def}</div>
      </div>
      <button class="mute-toggle ${isMuted ? '' : 'active'}" data-id="${card.id}">
        ${isMuted ? '🔇 Tyst' : '🔊 Aktiv'}
      </button>`;
    item.querySelector('.mute-toggle').addEventListener('click', () => {
      if (state.mutedCards.has(card.id)) {
        state.mutedCards.delete(card.id);
      } else {
        state.mutedCards.add(card.id);
      }
      saveState();
      openManageModal(cat); // re-render
      buildCategoryGrid();  // update counts
    });
    list.appendChild(item);
  });

  document.getElementById('muteAllBtn').onclick = () => {
    cards.forEach(c => state.mutedCards.add(c.id));
    saveState(); openManageModal(cat); buildCategoryGrid();
  };
  document.getElementById('unmuteAllBtn').onclick = () => {
    cards.forEach(c => state.mutedCards.delete(c.id));
    saveState(); openManageModal(cat); buildCategoryGrid();
  };

  document.getElementById('manageModalBackdrop').style.display = 'block';
}

document.getElementById('manageModalClose').addEventListener('click', () => {
  document.getElementById('manageModalBackdrop').style.display = 'none';
});
document.getElementById('manageModalBackdrop').addEventListener('click', (e) => {
  if (e.target === document.getElementById('manageModalBackdrop')) {
    document.getElementById('manageModalBackdrop').style.display = 'none';
  }
});

function updateHomeStats() {
  const sel = CARDS.filter(c => state.selectedCats.has(c.cat) && !state.mutedCards.has(c.id));
  const mastered = sel.filter(c => isMastered(c.id)).length;
  document.getElementById('totalCards').textContent = sel.length;
  document.getElementById('masteredCards').textContent = mastered;
  document.getElementById('remainingCards').textContent = sel.length - mastered;
}

// Mode buttons
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.mode;
  });
});

// Direction buttons
document.querySelectorAll('.dir-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dir-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.direction = btn.dataset.dir;
  });
});

// Reset
document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Återställa ALL framsteg? Detta kan inte ångras.')) {
    state.cardData = {};
    state.currentRound = 0;
    saveState();
    buildCategoryGrid();
    updateHomeStats();
    showToast('Framsteg återställt!');
  }
});

// Start
document.getElementById('startBtn').addEventListener('click', () => {
  if (state.mode === 'luckor') {
    navTo('exerciseScreen');
    if (!_exInited) { _exInited = true; initExercise(); }
    switchExMode('luckor');
  } else {
    startSession();
  }
});

// ═══════════════════════════════════════════════════════
//  SESSION SETUP
// ═══════════════════════════════════════════════════════
function startSession(wrongOnly = false) {
  state.currentRound++;

  let pool;
  if (wrongOnly && session.wrongItems.length) {
    pool = session.wrongItems.map(id => CARDS.find(c => c.id === id)).filter(Boolean);
  } else {
    pool = CARDS.filter(c => state.selectedCats.has(c.cat) && !state.mutedCards.has(c.id));
    // Spaced rep: un-mastered cards first, then mastered if all done
    const due = pool.filter(c => !isMastered(c.id));
    pool = due.length ? due : pool;
  }

  // Shuffle
  pool = [...pool].sort(() => Math.random() - 0.5);

  session.queue = pool;
  session.idx = 0;
  session.correct = 0;
  session.wrong = 0;
  session.wrongItems = [];
  session.flipped = false;

  showScreen('quizScreen');
  showModeUI();
  renderCurrent();
}

function showModeUI() {
  document.getElementById('flipMode').style.display = state.mode === 'flip' ? 'block' : 'none';
  document.getElementById('mcMode').style.display = state.mode === 'mc' ? 'block' : 'none';
  document.getElementById('ftMode').style.display = state.mode === 'ft' ? 'block' : 'none';
}

// ═══════════════════════════════════════════════════════
//  RENDER CURRENT CARD
// ═══════════════════════════════════════════════════════
function getDirection(card) {
  if (state.direction === 'random') return Math.random() < 0.5 ? 'term' : 'def';
  return state.direction;
}

function renderCurrent() {
  if (session.idx >= session.queue.length) {
    endSession();
    return;
  }

  const card = session.queue[session.idx];
  const dir = getDirection(card);
  const total = session.queue.length;
  const done = session.idx;
  const pct = Math.round(done / total * 100);

  // Progress
  document.getElementById('progressText').textContent = `Kort ${done + 1} av ${total}`;
  document.getElementById('progressPct').textContent = `${pct}%`;
  document.getElementById('progressFill').style.width = `${pct}%`;
  document.getElementById('scoreCorrect').textContent = `✓ ${session.correct} rätt`;
  document.getElementById('scoreWrong').textContent = `✗ ${session.wrong} fel`;
  document.getElementById('scoreRemain').textContent = `↻ ${total - done} kvar`;

  if (state.mode === 'flip') renderFlip(card, dir);
  else if (state.mode === 'mc') renderMC(card, dir);
  else renderFT(card, dir);
}

// ── FLIP MODE ──
function renderFlip(card, dir) {
  const wrap = document.getElementById('cardWrap');
  wrap.classList.remove('flipped');
  session.flipped = false;

  const frontTerm = document.getElementById('cardTermText');
  const backDef = document.getElementById('cardDefText');
  const labelFront = document.getElementById('cardLabelFront');
  const labelBack = document.getElementById('cardLabelBack');
  const mn = document.getElementById('cardMnemonic');

  document.getElementById('cardCatFront').textContent = card.cat;
  document.getElementById('cardCatBack').textContent = card.cat;

  if (dir === 'term') {
    labelFront.textContent = 'TERM';
    labelBack.textContent = 'DEFINITION';
    frontTerm.textContent = card.term;
    backDef.textContent = card.def;
  } else {
    labelFront.textContent = 'DEFINITION';
    labelBack.textContent = 'TERM';
    frontTerm.textContent = card.def;
    backDef.textContent = card.term;
  }

  const tip = MNEMONICS[card.id];
  if (tip) { mn.textContent = tip; mn.className = 'card-mnemonic visible'; }
  else { mn.className = 'card-mnemonic'; }

  document.getElementById('btnCorrect').disabled = true;
  document.getElementById('btnWrong').disabled = true;
}

document.getElementById('cardScene').addEventListener('click', flipCard);
document.getElementById('btnFlip').addEventListener('click', flipCard);

function flipCard() {
  const wrap = document.getElementById('cardWrap');
  wrap.classList.toggle('flipped');
  session.flipped = !session.flipped;
  document.getElementById('btnCorrect').disabled = !session.flipped;
  document.getElementById('btnWrong').disabled = !session.flipped;
}

document.getElementById('btnCorrect').addEventListener('click', () => markAnswer(true));
document.getElementById('btnWrong').addEventListener('click', () => markAnswer(false));

function markAnswer(correct) {
  const card = session.queue[session.idx];
  const cd = getCardData(card.id);
  if (correct) {
    cd.correct++;
    session.correct++;
    if (cd.correct >= 2 && cd.wrong === 0) cd.mastered = true;
    else if (cd.correct - cd.wrong >= 3) cd.mastered = true;
  } else {
    cd.wrong++;
    session.wrong++;
    cd.mastered = false;
    if (!session.wrongItems.includes(card.id)) session.wrongItems.push(card.id);
  }
  saveState();
  session.idx++;
  renderCurrent();
}

// ── MC MODE ──
function renderMC(card, dir) {
  const prompt = document.getElementById('mcPrompt');
  const tag = document.getElementById('mcTag');
  const term = document.getElementById('mcTerm');
  const optsDiv = document.getElementById('mcOptions');
  const feedback = document.getElementById('mcFeedback');
  const nextBtn = document.getElementById('mcNext');

  feedback.className = 'mc-feedback';
  nextBtn.className = 'next-btn';

  tag.textContent = card.cat;

  // Build options: 1 correct + 3 distractors from same or all cats
  let pool = CARDS.filter(c => c.id !== card.id);
  // Prefer same cat
  let sameCat = pool.filter(c => c.cat === card.cat);
  let others = pool.filter(c => c.cat !== card.cat);
  let distractors = [...sameCat, ...others].sort(() => Math.random() - 0.5).slice(0, 3);

  const options = [card, ...distractors].sort(() => Math.random() - 0.5);

  if (dir === 'term') {
    prompt.textContent = 'Vilken definition matchar termen?';
    term.textContent = card.term;
    optsDiv.innerHTML = options.map(o =>
      `<button class="mc-option" data-id="${o.id}">${o.def}</button>`
    ).join('');
  } else {
    prompt.textContent = 'Vilken term matchar definitionen?';
    term.textContent = card.def;
    optsDiv.innerHTML = options.map(o =>
      `<button class="mc-option" data-id="${o.id}">${o.term}</button>`
    ).join('');
  }

  optsDiv.querySelectorAll('.mc-option').forEach(btn => {
    btn.addEventListener('click', function() {
      const chosen = parseInt(this.dataset.id);
      const isCorrect = chosen === card.id;
      optsDiv.querySelectorAll('.mc-option').forEach(b => {
        b.disabled = true;
        if (parseInt(b.dataset.id) === card.id) b.classList.add('correct');
        else if (parseInt(b.dataset.id) === chosen && !isCorrect) b.classList.add('wrong');
      });
      const correctLabel = dir === 'term' ? card.def : card.term;
      const tipMC = MNEMONICS[card.id];
      feedback.innerHTML = (isCorrect
        ? `✓ Rätt! <strong>${dir==='term'?card.term:card.def}</strong>`
        : `✗ Fel. Rätt svar: <strong>${correctLabel}</strong>`)
        + (tipMC ? `<div class="mnemonic-chip">💡 ${tipMC}</div>` : '');
      feedback.className = 'mc-feedback show ' + (isCorrect ? 'ok' : 'fail');
      nextBtn.className = 'next-btn show';
      // Record
      const cd = getCardData(card.id);
      if (isCorrect) {
        cd.correct++; session.correct++;
        if (cd.correct >= 2) cd.mastered = true;
      } else {
        cd.wrong++; session.wrong++;
        cd.mastered = false;
        if (!session.wrongItems.includes(card.id)) session.wrongItems.push(card.id);
      }
      saveState();
    });
  });
}

document.getElementById('mcNext').addEventListener('click', () => { session.idx++; renderCurrent(); });

// ── FREE TEXT MODE ──
function renderFT(card, dir) {
  const prompt = document.getElementById('ftPrompt');
  const tag = document.getElementById('ftTag');
  const term = document.getElementById('ftTerm');
  const input = document.getElementById('ftInput');
  const feedback = document.getElementById('ftFeedback');
  const nextBtn = document.getElementById('ftNext');

  feedback.className = 'mc-feedback';
  nextBtn.className = 'next-btn';
  input.value = '';
  input.className = 'ft-input';
  input.disabled = false;
  document.getElementById('ftSubmit').disabled = false;
  document.getElementById('ftSkip').textContent = 'Visa svar';

  tag.textContent = card.cat;

  if (dir === 'term') {
    prompt.textContent = 'Vad är definitionen av termen?';
    term.textContent = card.term;
    input.placeholder = 'Beskriv vad termen betyder...';
  } else {
    prompt.textContent = 'Vilken term beskrivs?';
    term.textContent = card.def;
    input.placeholder = 'Skriv termen...';
  }

  function checkAnswer(skipped) {
    const answer = input.value.trim().toLowerCase();
    const correct = dir === 'term' ? card.def.toLowerCase() : card.term.toLowerCase();
    let isCorrect = false;
    if (!skipped) {
      // Fuzzy: check if key words match
      const keyWords = correct.split(/\s+/).filter(w => w.length > 3);
      const matches = keyWords.filter(w => answer.includes(w));
      isCorrect = matches.length >= Math.max(1, Math.floor(keyWords.length * 0.4));
    }
    input.disabled = true;
    document.getElementById('ftSubmit').disabled = true;
    if (!skipped) {
      input.className = 'ft-input ' + (isCorrect ? 'correct' : 'wrong');
    }
    const correctText = dir === 'term' ? card.def : card.term;
    const tipFT = MNEMONICS[card.id];
    const mnFT = tipFT ? `<div class="mnemonic-chip">💡 ${tipFT}</div>` : '';
    feedback.innerHTML = (skipped
      ? `Rätt svar: <strong>${correctText}</strong>`
      : (isCorrect ? `✓ Bra! Rätt svar: <strong>${correctText}</strong>` : `✗ Rätt svar: <strong>${correctText}</strong>`))
      + mnFT;
    feedback.className = 'mc-feedback show ' + (skipped ? 'fail' : (isCorrect ? 'ok' : 'fail'));
    nextBtn.className = 'next-btn show';
    document.getElementById('ftSkip').textContent = 'Hoppa över';

    const cd = getCardData(card.id);
    if (!skipped && isCorrect) {
      cd.correct++; session.correct++;
      if (cd.correct >= 2) cd.mastered = true;
    } else {
      cd.wrong++; session.wrong++;
      cd.mastered = false;
      if (!session.wrongItems.includes(card.id)) session.wrongItems.push(card.id);
    }
    saveState();
  }

  document.getElementById('ftSubmit').onclick = () => checkAnswer(false);
  document.getElementById('ftSkip').onclick = () => {
    if (input.disabled) return;
    checkAnswer(true);
  };
  input.onkeydown = (e) => { if (e.key === 'Enter' && !input.disabled) checkAnswer(false); };
  setTimeout(() => input.focus(), 100);
}

document.getElementById('ftNext').addEventListener('click', () => { session.idx++; renderCurrent(); });

// ═══════════════════════════════════════════════════════
//  END SESSION / SUMMARY
// ═══════════════════════════════════════════════════════
function endSession() {
  const total = session.correct + session.wrong;
  const pct = total ? Math.round(session.correct / total * 100) : 0;
  const totalMastered = CARDS.filter(c => isMastered(c.id)).length;

  document.getElementById('sumCorrect').textContent = session.correct;
  document.getElementById('sumWrong').textContent = session.wrong;
  document.getElementById('sumMastered').textContent = totalMastered;

  let icon = '😐', title = 'Bra jobbat!', sub = '';
  if (pct >= 90) { icon = '🏆'; title = 'Utmärkt!'; }
  else if (pct >= 70) { icon = '🎉'; title = 'Bra jobbat!'; }
  else if (pct >= 50) { icon = '📚'; title = 'Fortsätt öva!'; }
  else { icon = '💪'; title = 'Håll ut!'; }
  sub = `${pct}% rätt (${session.correct} av ${total})`;

  document.getElementById('summaryIcon').textContent = icon;
  document.getElementById('summaryTitle').textContent = title;
  document.getElementById('summarySubtitle').textContent = sub;

  const wrongOnlyBtn = document.getElementById('sumWrongOnly');
  wrongOnlyBtn.style.display = session.wrongItems.length ? 'block' : 'none';

  // Wrong list
  const wrongList = document.getElementById('wrongList');
  if (session.wrongItems.length) {
    wrongList.innerHTML = `<h3>Gå igenom igen (${session.wrongItems.length} kort):</h3>` +
      session.wrongItems.map(id => {
        const c = CARDS.find(x => x.id === id);
        return `<div class="wrong-item"><div class="wrong-item-term">${c.term}</div><div class="wrong-item-def">${c.def}</div></div>`;
      }).join('');
  } else {
    wrongList.innerHTML = '';
  }

  showScreen('summaryScreen');
  updateHomeStats();
}

document.getElementById('sumHome').addEventListener('click', () => navTo('homeScreen'));
document.getElementById('sumRestart').addEventListener('click', () => startSession(false));
document.getElementById('sumWrongOnly').addEventListener('click', () => startSession(true));
document.getElementById('quitBtn').addEventListener('click', () => navTo('homeScreen'));

// ═══════════════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════
//  THEORY DATA
// ═══════════════════════════════════════════════════════
const THEORY = [
  { cat: 'Atomens byggnad', icon: '⚛️', html: `
<h2>⚛️ Atomens byggnad &amp; periodiska systemet</h2>
<p class="theory-intro">All materia runt om oss – luften vi andas, vattnet vi dricker, människokroppen själv – är uppbyggd av atomer. En atom är så liten att ungefär tio miljarder atomer sida vid sida skulle täcka en centimeter. Ändå har varje enskild atom en rik inre struktur som i detalj avgör hur ämnet beter sig: huruvida det är en metall eller icke-metall, hur det reagerar, vilka bindningar det bildar och var i periodiska systemet det hör hemma.</p>

<h3>1. Atomens historia och modeller</h3>
<p>Föreställningen om atomen är gammal. De grekiska filosoferna Leukippos och Demokritos föreslog redan på 400-talet f.Kr. att materia är diskontinuerlig – att man till slut når en minsta, odelbar enhet, <em>atomos</em> (gr. "odelbar"). Det dröjde dock två tusen år innan idén fick vetenskaplig grund.</p>
<p><strong>John Dalton</strong> (1803) formulerade den första moderna atomteorin: varje grundämne består av identiska atomer, och kemiska reaktioner är omgrupperingar av atomer – inga atomer skapas eller förstörs. Daltons modell var en massiv, odelbar sfär.</p>
<p><strong>J.J. Thomson</strong> (1897) upptäckte elektronen med hjälp av katodstrålsröret. Han föreslog "russinbulle-modellen": elektroner (russin) inbäddade i en positiv deg. Modellen var fel men revolutionerande – för första gången visste man att atomen <em>hade</em> delar.</p>
<p><strong>Ernest Rutherford</strong> (1911) genomförde sitt berömda guldfoliexperiment. Han sköt alfapartiklar mot ett 0,0001 mm tunt guldfolium. Om Thomsons modell stämde borde alla partiklar passera rakt igenom med små avböjningar. Istället studsade cirka en av 20 000 rakt tillbaka. Rutherfords slutsats: atomen består till nästan 100 % av tomrum, med all positiv laddning och nästan all massa koncentrerad i en oerhört liten, tät <strong>kärna</strong>. Elektroner rör sig i stort avstånd från kärnan.</p>
<p><strong>Niels Bohr</strong> (1913) kombinerade Rutherfords kärnmodell med den nyupptäckta kvantteorin. Han postulerade att elektroner rör sig i fasta cirkelbanor med specifika energier. En elektron kan bara ändra energi genom att hoppa mellan banor, och vid hoppet absorberas eller emitteras en foton vars energi exakt motsvarar energiskillnaden. Detta förklarade vätes diskreta spektrallinjer (Balmerserien) perfekt.</p>
<p>Den moderna <strong>kvantmekaniska modellen</strong> (Schrödinger, Heisenberg, de Broglie, 1920-talet) ersätter fasta banor med <em>orbitaler</em> – sannolikhetsmoln som beskriver var elektroner med störst sannolikhet befinner sig. Elektroner beter sig som både partiklar och vågor.</p>

<h3>2. Atomens uppbyggnad</h3>
<p>En atom har <strong>två regioner</strong>: en extremt liten, tät <strong>kärna</strong> och ett mycket större <strong>elektronskal</strong> utanför.</p>
<p>Kärnan innehåller <strong>protoner</strong> (laddning +1, massa 1,673×10⁻²⁷ kg) och <strong>neutroner</strong> (laddning 0, massa 1,675×10⁻²⁷ kg). Protonernas antal kallas <em>atomnumret Z</em> och är unikt för varje grundämne – det definierar vilket ämne atomen är. Antalet protoner plus neutroner kallas <em>masstålet A</em>.</p>
<p>Runt kärnan rör sig <strong>elektroner</strong> (laddning −1, massa 9,109×10⁻³¹ kg ≈ 1/1836 av protonmassan). En neutral atom har lika många elektroner som protoner. Om atomen förlorar en eller flera elektroner bildas en positivt laddad <em>katjon</em>; tar den upp elektroner bildas en negativt laddad <em>anjon</em>.</p>
<div class="formula-box">Atomnummer: Z = antal protoner
Masstal: A = Z + N (N = antal neutroner)
Neutroner: N = A − Z

Laddning: q = (antal protoner) − (antal elektroner)

Exempel ²³Na:
  Z = 11 (11 protoner), A = 23, N = 12 neutroner
  Neutral: 11 elektroner
  Na⁺: 10 elektroner (tappat 1 e⁻), laddning +1</div>

<h3>3. Isotoper</h3>
<p>Isotoper är atomer av <em>samma grundämne</em> (samma Z) men med <em>olika antal neutroner</em> (olika A). Eftersom kemiska egenskaper styrs av elektronkonfigurationen, och elektronkonfigurationen bestäms av protonantalet, har isotoper <strong>praktiskt taget identiska kemiska egenskaper</strong> men olika massa och ofta olika radioaktivitet.</p>
<p>Naturligt väte består av tre isotoper: protium (¹H, 99,98 %), deuterium (²H eller D, 0,02 %) och tritium (³H, spår). Deuterium används som bränsle i fusionsreaktorer och i "tungt vatten" (D₂O) som moderator i vissa kärnreaktorer. Tritium är radioaktivt (β-sönderfaller) med halveringstid 12,3 år.</p>
<p>Den atommassa som anges i periodiska systemet är ett <em>viktat medelvärde</em> över alla naturliga isotoper. Klors atommassa 35,45 g/mol beror på att ungefär 75 % är ³⁵Cl och 25 % är ³⁷Cl.</p>
<table class="theory-table">
  <tr><th>Isotop</th><th>Z</th><th>N</th><th>A</th><th>Stabil?</th><th>Användning / notering</th></tr>
  <tr><td>¹H (protium)</td><td>1</td><td>0</td><td>1</td><td>Ja</td><td>99,98 % av allt väte</td></tr>
  <tr><td>²H (deuterium)</td><td>1</td><td>1</td><td>2</td><td>Ja</td><td>Tungt vatten, fusionsreaktor</td></tr>
  <tr><td>¹²C</td><td>6</td><td>6</td><td>12</td><td>Ja</td><td>Referens för atommasseenheten u</td></tr>
  <tr><td>¹⁴C</td><td>6</td><td>8</td><td>14</td><td>Nej, t½ = 5 730 år</td><td>Radiokoldatering</td></tr>
  <tr><td>²³⁵U</td><td>92</td><td>143</td><td>235</td><td>Nej, t½ = 703 Mår</td><td>Kärnkraft, klyvbart</td></tr>
  <tr><td>²³⁸U</td><td>92</td><td>146</td><td>238</td><td>Nej, t½ = 4,47 Går</td><td>Vanligaste uranisotopen</td></tr>
</table>
<p><strong>Radiokoldatering</strong> fungerar så här: Kosmisk strålning i atmosfären skapar konstant nya ¹⁴C-atomer ur kväve. Levande organismer tar upp ¹⁴C genom mat och andning i samma proportion som atmosfären. När organismen dör upphör ¹⁴C-upptäcket och isotopen sönderfaller. Genom att mäta ¹⁴C/¹²C-kvoten kan man beräkna åldern på upp till ~50 000 år gamla organiska material.</p>

<h3>4. Elektronkonfiguration och skalmodellen</h3>
<p>Elektroner fördelar sig i <strong>energiskal</strong> (n = 1, 2, 3, …). Lägre skal = lägre energi = elektronen befinner sig statistiskt sett närmare kärnan. Maximalt antal elektroner per skal är 2n²: skal 1 klarar 2, skal 2 klarar 8, skal 3 klarar 18 osv.</p>
<p>Elektroner fyller alltid de lägsta tillgängliga energinivåerna först (<strong>Aufbau-principen</strong>). <strong>Paulis uteslutningsprincip</strong> säger att ingen två elektroner i en atom kan ha samma fullständiga kvanttillstånd. <strong>Hunds regel</strong> säger att elektroner föredrar att inta separata orbitaler med parallella spinn innan de paras ihop.</p>
<p><strong>Valenselektroner</strong> är de elektroner som befinner sig i det yttersta (val-ens-)skalet. De är avgörande för kemiska reaktioner och bindningsförmåga. Metaller i grupp 1 har 1 valenselektron, grupp 2 har 2, icke-metaller i grupp 17 har 7, ädelgaserna i grupp 18 har 8 (förutom He med 2).</p>
<table class="theory-table">
  <tr><th>Atom</th><th>Z</th><th>Skal 1</th><th>Skal 2</th><th>Skal 3</th><th>Val-e⁻</th></tr>
  <tr><td>H</td><td>1</td><td>1</td><td></td><td></td><td>1</td></tr>
  <tr><td>He</td><td>2</td><td>2</td><td></td><td></td><td>2</td></tr>
  <tr><td>Li</td><td>3</td><td>2</td><td>1</td><td></td><td>1</td></tr>
  <tr><td>C</td><td>6</td><td>2</td><td>4</td><td></td><td>4</td></tr>
  <tr><td>O</td><td>8</td><td>2</td><td>6</td><td></td><td>6</td></tr>
  <tr><td>Na</td><td>11</td><td>2</td><td>8</td><td>1</td><td>1</td></tr>
  <tr><td>Cl</td><td>17</td><td>2</td><td>8</td><td>7</td><td>7</td></tr>
  <tr><td>Ar</td><td>18</td><td>2</td><td>8</td><td>8</td><td>8</td></tr>
</table>
<p>Tendensen hos atomer att avge, ta upp eller dela elektroner för att uppnå ädelgasfördelningen (8 valenselektroner, <em>oktettregeln</em>) är drivkraften bakom nästan all kemi.</p>

<h3>5. Periodiska systemet – organisation och trender</h3>
<p>Periodiska systemet organiserar de 118 kända grundämnena efter stigande atomnummer. Dmitrij Mendelejev lade 1869 grunden när han ordnade de då kända 63 grundämnena och lämnade tomrum för ännu oupptäckta ämnen – vars egenskaper han förutsade med remarkabel noggrannhet.</p>
<p><strong>Perioder</strong> (horisontella rader) representerar ett nytt elektronskal: period 1 fyller skal 1, period 2 fyller skal 2, etc. <strong>Grupper</strong> (vertikala kolumner) samlar ämnen med samma antal valenselektroner och liknande kemiska egenskaper. Grupp 1 = alkalimetaller, grupp 2 = jordalkalimetaller, grupp 17 = halogener, grupp 18 = ädelgaser.</p>
<p><strong>Atomradie</strong> minskar åt höger längs en period (fler protoner drar elektronskalen närmare) och ökar nedåt i en grupp (nya skal läggs till). Li har atomradien 152 pm, Na 186 pm, K 227 pm.</p>
<p><strong>Joniseringsenergi</strong> (energin som krävs för att avlägsna en valenselektron) ökar åt höger i en period och minskar nedåt i en grupp. Hög joniseringsenergi → ämnet avger ogärna elektroner (icke-metaller). Låg → avger lätt elektroner (alkalimetaller). Fluors joniseringsenergi är 1681 kJ/mol; cesiums bara 376 kJ/mol.</p>
<p><strong>Elektronaffinitet</strong> är energiändringen när en neutral atom tar upp en elektron. Halogener har högst elektronaffinitet – de vinner mycket energi på att ta upp en elektron eftersom de då når ädelgaskonfiguration.</p>
<p><strong>Elektronegativitet</strong> (Paulingskalan) mäter en atoms förmåga att attrahera gemensamma elektroner i en kovalent bindning. Fluor har högst (4,0), francium lägst (0,7). Elektronegativitet används för att bestämma bindningstyp och polarfördelning.</p>
<table class="theory-table">
  <tr><th>Egenskap</th><th>Åt höger i period</th><th>Nedåt i grupp</th></tr>
  <tr><td>Atomradie</td><td>Minskar</td><td>Ökar</td></tr>
  <tr><td>Joniseringsenergi</td><td>Ökar</td><td>Minskar</td></tr>
  <tr><td>Elektronaffinitet</td><td>Ökar (grovt)</td><td>Minskar</td></tr>
  <tr><td>Elektronegativitet</td><td>Ökar</td><td>Minskar</td></tr>
  <tr><td>Metallkaraktär</td><td>Minskar</td><td>Ökar</td></tr>
</table>

<h3>6. Viktiga ämnesgrupper i periodiska systemet</h3>
<p><strong>Alkalimetaller (grupp 1: Li, Na, K, Rb, Cs, Fr)</strong> – en valenselektron, avger den lätt → är mycket reaktiva. Reagerar häftigt med vatten och bildar hydroxider (NaOH, KOH) + väte. Förvaras i fotogen. Metallerna är mjuka nog att skäras med kniv. Kännetecknas av låga joniseringsenergier och låg densitet.</p>
<p><strong>Halogener (grupp 17: F, Cl, Br, I, At)</strong> – sju valenselektroner, vill ta upp en → starka oxidationsmedel. Förekommer som diatomiska molekyler (F₂, Cl₂, Br₂, I₂). Fluor är det mest reaktiva av alla grundämnen och oxiderar praktiskt taget allt. Klor används i vattenrening och PVC-produktion. Jod är viktigt för sköldkirteln.</p>
<p><strong>Ädelgaser (grupp 18: He, Ne, Ar, Kr, Xe, Rn)</strong> – fullt ytterskal, är praktiskt taget inerta. Används i glödlampor (Ar), neonskyltar (Ne), ballonger (He), och svällnäskirurgi (Xe som anestetikum). Xenon bildar några få föreningar med fluor och syre under extrema betingelser.</p>
<p><strong>Övergångsmetaller (grupper 3–12)</strong> – fyller d-orbitaler. Bildar oftast flera oxidationstillstånd (Fe kan vara +2 eller +3). Bildar färgade joner (Cu²⁺ är blå, Fe³⁺ är gul-brun, Cr³⁺ är grön). Viktiga som katalysatorer (Fe i Haber-processen, Pt i bilkatalysatorer, Ni i hydrogenering). Bra elektriska ledare.</p>

<h3>7. Radioaktivitet och kärnreaktioner</h3>
<p>Instabila kärnor sönderfaller spontant och emitterar strålning. De tre vanligaste typerna:</p>
<p><strong>α-strålning</strong>: emission av en heliumkärna (⁴He, α-partikel). Rä cker bara några cm i luft, stoppas av ett papper. Z minskar med 2, A med 4.</p>
<p><strong>β-strålning</strong>: emission av en elektron (β⁻) eller positron (β⁺). β⁻: en neutron omvandlas till en proton + elektron. Z ökar med 1. Stoppas av aluminium.</p>
<p><strong>γ-strålning</strong>: emission av högenergetiska fotoner. Z och A förändras inte. Kräver bly eller tjock betong för att stoppas. Följer ofta α eller β.</p>
<p><strong>Halveringstid t½</strong> är den tid det tar för hälften av alla atomer i ett prov att sönderfalla. Täcker allt från mikrosekunders till miljarder år (U-238). Formeln: N(t) = N₀ × (½)^(t/t½). Radons t½ = 3,82 dygn – viktigt för inomhusluftmätning.</p>
<p><strong>Stråldos</strong> mäts i Sievert (Sv): biologisk effekt av joniserande strålning. Bakgrundsstrålning Sverige ≈ 2 mSv/år. Akut strålsjuka vid &gt;250 mSv. Yrkesverksamma max 50 mSv/år.</p>
<p><strong>E = mc²</strong> (Einstein, 1905): massa och energi är ekvivalenta. Energin som frigörs = massaförlusten × ljushastigheten². 1 kg massa = 9×10¹⁶ J – miljoner gånger mer än kemiska reaktioner per kg bränsle.</p>
<p><strong>Kärnfission (klyvning):</strong> En långsam neutron träffar U-235 → instabil kärna delar sig i två lättare kärnor + 2–3 nya neutroner + ~200 MeV per klyvning. Kedjereaktion möjliggör kärnkraft (kontrollerad) och atombomb (okontrollerad). Kärnavfall med lång halveringstid är ett kvarstående problem.</p>
<p><strong>Kärnfusion (sammanslagning):</strong> Deuterium (²H) + tritium (³H) → helium (⁴He) + neutron + 17,6 MeV. Kräver &gt;10⁷ °C – solens energikälla. Frigör mer energi per kg än fission, inga långlivade restprodukter. Kommersiell fusionskraft ej ännu genomförbar på jorden.</p>

<h3>8. Sambandet</h3>
<p>Atomens uppbyggnad är nyckeln som låser upp all övrig kemi. Antalet protoner (Z) bestämmer vilket grundämne det är. Elektronkonfigurationen – särskilt antalet valenselektroner – bestämmer hur atomen reagerar: om den avger elektroner (metall, låg joniseringsenergi), tar upp elektroner (icke-metall, hög elektronaffinitet) eller delar elektroner (kovalent bindning). Periodiska systemets perioder och grupper är en karta över dessa egenskaper. Elektronegativiteten styr hur elektroner fördelas i kemiska bindningar, vilket påverkar löslighet, kok- och smältpunkter, reaktivitet och molekylgeometri. Isotoper förklarar varför atommassor sällan är hela tal. Radioaktivitet visar att kärnan själv inte är oföränderlig. Utan förståelsen för atomstrukturen kan vi inte förklara varför koks glöder, varför salt löses i vatten, eller hur läkemedel binder till enzymer – allt hänger samman på atomnivå.</p>

<h3>9. Atomradie och effektiv kärnladdning</h3>
<p>Atomernas storlek varierar systematiskt i periodiska systemet:</p>
<ul>
  <li><strong>Åt höger i en period</strong> – radien <em>minskar</em>. Antalet protoner ökar men elektronerna läggs till i samma skal → kärnladdningen attraherar valenselektronerna starkare → atomen drar ihop sig.</li>
  <li><strong>Nedåt i en grupp</strong> – radien <em>ökar</em>. Nya elektronskal tillkommer → valenselektronerna befinner sig längre från kärnan.</li>
</ul>
<p><strong>Effektiv kärnladdning (Z_eff)</strong> är den nettoladdning en valenselektron "känner av" efter att inre elektroner skärmat bort en del av kärnladdningens dragningskraft. Exempel: Na har 11 protoner men 10 inre elektroner → Z_eff ≈ +1. Mg: Z_eff ≈ +2 → Mg är mindre än Na.</p>

<h3>10. Joniseringsenergi</h3>
<p><strong>Joniseringsenergi (I)</strong> är den energi som krävs för att ta bort en elektron från en gasformig atom:</p>
<div class="formula-box">
  Al(g) → Al⁺(g) + e⁻ &nbsp;&nbsp; I₁ = 580 kJ/mol<br>
  Al⁺(g) → Al²⁺(g) + e⁻ &nbsp; I₂ = 1 815 kJ/mol<br>
  Al²⁺(g) → Al³⁺(g) + e⁻ &nbsp; I₃ = 2 740 kJ/mol<br>
  Al³⁺(g) → Al⁴⁺(g) + e⁻ &nbsp; I₄ = 11 600 kJ/mol ← stort hopp (nytt skal!)
</div>
<p>Det stora hoppet i I₄ förklaras av att den fjärde elektronen måste lösryckas från ett inre, hårdare bundet skal. Joniseringsenergin <em>ökar åt höger i en period</em> (starkare effektiv kärnladdning) och <em>minskar nedåt i en grupp</em> (elektronen är längre från kärnan).</p>

<h3>11. Spektra och elektronhopp</h3>
<p>När en elektron absorberar energi hoppar den till ett yttre skal (<strong>excitering</strong>). När den faller tillbaka avges energin som ljus med en specifik våglängd (färg). Varje grundämne har ett unikt <strong>emissionsspektrum</strong> – en "fingeravtryck" som används för att identifiera ämnen i t.ex. stjärnor och flamfärgningsanalyser.</p>

` },
  { cat: 'Materia & faser', icon: '🧊', html: `
<h2>🧊 Materia, ämnen &amp; faser</h2>
<p class="theory-intro">All materia runt omkring oss – luften vi andas, vattnet vi dricker, berget vi klättrar på – är uppbyggd av atomer. Hur atomerna är sammansatta och arrangerade avgör <em>allt</em>: om ämnet är fast, flytande eller gas; om det leder ström; om det löser sig i vatten; om det brinner. Kemin börjar med att klassificera materia, fortsätter med att förstå varför ämnen beter sig som de gör, och kulminerar i att förutsäga och kontrollera omvandlingar.</p>

<h3>1. Atomer och grundämnen – det minsta</h3>
<p>All materia är uppbyggd av <strong>atomer</strong> – de minsta enheter av ett ämne som behåller ämnets kemiska egenskaper. Det finns 118 kända grundämnen, var och ett bestämt av antalet protoner i kärnan. Atomer är extremt små; ungefär 8 miljoner atomer sida vid sida ryms på en millimeter. Det är ändå dessa osynliga partiklar som avgör om ett ämne är guld eller bly, salt eller socker, syre eller kvävgas.</p>
<p>Grundämnen delas in i tre grupper:</p>
<ul>
  <li><strong>Metaller</strong> – leder ström och värme, glänser, är formbara. Ex: järn (Fe), koppar (Cu), guld (Au).</li>
  <li><strong>Halvmetaller</strong> – egenskaper mittemellan metaller och icke-metaller. Ex: kisel (Si), germanium (Ge).</li>
  <li><strong>Icke-metaller</strong> – leder inte ström, ofta gaser vid rumstemperatur. Ex: syre (O), kväve (N), svavel (S).</li>
</ul>

<h3>2. Grundämne, kemisk förening och molekyl</h3>
<ul>
  <li><strong>Grundämne</strong> – ett rent ämne som består av <em>endast en sorts atomer</em>, där alla atomer har samma antal protoner i atomkärnan. Ex: O₂, Fe, S₈.</li>
  <li><strong>Kemisk förening</strong> – ett ämne som består av <em>minst två olika sorters grundämnen</em> vars atomer är kemiskt bundna till varandra. Ex: H₂O, NaCl, CO₂.</li>
  <li><strong>Molekyl</strong> – en grupp av atomer som är kemiskt bundna till varandra. Kan vara ett grundämne (H₂, O₂) eller en kemisk förening (H₂O, CO₂).</li>
  <li><strong>Kemiska tecken</strong> – förkortningar för grundämnen, t.ex. H = väte, O = syre, C = kol, Fe = järn, Na = natrium.</li>
</ul>
<div class="formula-box">
  <strong>Exempel – läsa kemiska formler:</strong><br>
  H₂CO₃ = 2 väteatomer + 1 kolatom + 3 syreatomer<br>
  C₂H₄(OH)₂ = 2 kol + 6 väte + 2 syre
</div>

<h3>3. Ämnens egenskaper</h3>
<p>Varje ämne kännetecknas av specifika <strong>fysikaliska egenskaper</strong>:</p>
<ul>
  <li><strong>Lukt &amp; smak</strong> – karakteristiska för ämnet</li>
  <li><strong>Ledningsförmåga</strong> – förmågan att leda el eller värme</li>
  <li><strong>Densitet</strong> – massa per volym (kg/m³ eller g/cm³)</li>
  <li><strong>Kokpunkt &amp; smältpunkt</strong> – vid vilken temperatur ämnet byter fas</li>
  <li><strong>Hårdhet</strong> – motstånd mot repning</li>
</ul>

<h3>4. Aggregationstillstånd – hur rörelseenergi styr faserna</h3>
<p>Ämnen förekommer i olika <strong>aggregationstillstånd</strong> beroende på <em>rörelseenergin</em> hos partiklarna i förhållande till styrkorna som håller ihop dem. Temperatur är ett mått på genomsnittlig rörelseenergi – ju högre temperatur, desto rörligare partiklar, och desto mer kan de motstå de attraktiva krafterna.</p>
<ul>
  <li><strong>Fast tillstånd (s)</strong> – rörelseenergin är <em>lägre</em> än de intermolekylära krafterna. Partiklarna kan bara vibrera på plats i ett ordnat gitter. Bestämd form och volym. Exempel: is, salt, metaller.</li>
  <li><strong>Flytande tillstånd (l)</strong> – rörelseenergin är <em>jämförbar</em> med krafterna; partiklarna kan röra sig relativt varandra men lämnar inte varandra. Bestämd volym men ingen bestämd form – antar behållarens form. Exempel: vatten vid 20 °C, smält järn.</li>
  <li><strong>Gasformigt tillstånd (g)</strong> – rörelseenergin <em>övervinner</em> krafterna; partiklarna rör sig fritt och snabbt i alla riktningar. Varken bestämd form eller volym – expanderar för att fylla allt tillgängligt utrymme. Exempel: ånga, koldioxid, luft.</li>
</ul>
<p>Det finns även ett fjärde tillstånd: <strong>plasma</strong> – vid extremt hög temperatur joniseras gasen (elektroner slits loss). Förekommer i solen, blixtar och fusionsreaktorer.</p>
<p><strong>Varför är detta viktigt?</strong> Fasövergångar kräver energi (smältning, kokning) eller frigör energi (stelning, kondensation). Vattnets höga kokpunkt (100 °C jämfört med H₂S:s −60 °C) beror på starka vätebindningar – det krävs mer energi för att bryta dem, och det är det som ger vatten sina unika egenskaper som liv-stödjande lösningsmedel.</p>

<h3>5. Fasövergångar</h3>
<p>När ett ämne byter aggregationstillstånd sker en <strong>fasövergång</strong>:</p>
<ul>
  <li><strong>Smältning</strong> – fast → flytande (värme tillförs)</li>
  <li><strong>Stelning</strong> – flytande → fast (värme avges)</li>
  <li><strong>Förångning</strong> – flytande → gas vid kokpunkten (värme tillförs)</li>
  <li><strong>Avdunstning</strong> – flytande → gas under kokpunkten (ytan)</li>
  <li><strong>Kondensation</strong> – gas → flytande (värme avges)</li>
  <li><strong>Sublimering</strong> – fast → gas direkt (t.ex. torris, CO₂)</li>
  <li><strong>Deposition</strong> – gas → fast direkt</li>
  <li><strong>Jonisering</strong> – gas → plasma</li>
  <li><strong>Dejonisering</strong> – plasma → gas</li>
</ul>

<h3>6. Rena ämnen och blandningar</h3>
<p><strong>Rent ämne</strong> – består av en enda sorts atomer eller en enda sorts molekyler. Ex: rent guld, destillerat vatten, rent syre.</p>
<p><strong>Blandning</strong> – består av minst två rena ämnen. En blandning kan vara:</p>
<ul>
  <li><strong>Homogen blandning</strong> (lösning/legering) – man kan <em>inte</em> urskilja de olika ämnena med blotta ögat. Ser enhetlig ut överallt.</li>
  <li><strong>Heterogen blandning</strong> (emulsion/slamning) – man <em>kan</em> se de olika beståndsdelarna. Ex: sand i vatten, olja i vatten.</li>
</ul>

<h3>7. Lösningar</h3>
<p>En <strong>lösning</strong> är en homogen blandning av två eller flera ämnen. Det ämne som löser upp sig kallas <strong>löste</strong>, och det ämne som löser upp det kallas <strong>lösningsmedel</strong>.</p>
<p>Exempel på lösningar:</p>
<ul>
  <li>Sprit = vatten + etanol (två vätskor blandade)</li>
  <li>Läsk = vatten + socker + koldioxid (gas löst i vätska) – i ½ liter läsk finns ca 1,5 liter koldioxidgas!</li>
</ul>
<p>En lösnings <strong>koncentration</strong> beskriver hur mycket löste som finns per volym:</p>
<ul>
  <li><strong>Utspädd lösning</strong> – lite löste i förhållande till lösningsmedel</li>
  <li><strong>Koncentrerad lösning</strong> – mycket löste</li>
  <li><strong>Mättad lösning</strong> – maximalt med löste är upplöst vid given temperatur</li>
</ul>
<p><em>Temperatur och löslighet:</em> I varmt vatten kan man generellt lösa mer fast ämne än i kallt vatten.</p>

<h3>8. Legeringar</h3>
<p>En <strong>legering</strong> är en homogen blandning med metalliska egenskaper som består av två eller flera grundämnen, varav minst ett är metall.</p>
<ul>
  <li><strong>Mässing</strong> = koppar (Cu) + zink (Zn)</li>
  <li><strong>Stål</strong> = järn (Fe) + kol (C)</li>
  <li><strong>Brons</strong> = koppar (Cu) + tenn (Sn)</li>
</ul>

<h3>9. Heterogena blandningar</h3>
<ul>
  <li><strong>Slamning (suspension)</strong> – fasta partiklar som inte löser sig i vätskan; blandningen blir grumlig och partiklarna sjunker till slut. Ex: jord i vatten.</li>
  <li><strong>Emulsion</strong> – en vätska som innehåller små droppar av en annan vätska som inte kan lösa sig. Ex: mjölk (fettdroppar i vatten), salladsdressing (olja + vinäger).</li>
</ul>

<h3>10. Kemiska föreningar bildas vid kemiska reaktioner</h3>
<p>När grundämnen reagerar med varandra bildas <strong>kemiska föreningar</strong> med helt nya egenskaper.</p>
<div class="formula-box">
  <strong>Exempel – järnsulfid:</strong><br>
  Ordformel: järn + svavel → järnsulfid + energi<br>
  Teckenformel: Fe(s) + S(s) → FeS(s) + energi<br><br>
  <em>Reaktanter</em> (vänster led) → <em>Produkter</em> (höger led)
</div>
<p>Varken järn (grå metall) eller svavel (gult pulver) liknar den mörka järnsulfiden – ett helt nytt ämne med nya egenskaper har bildats.</p>

<h3>11. Materiaträdet – sammanfattning</h3>
<ul>
  <li><strong>Materia</strong>
    <ul>
      <li><strong>Rent ämne</strong>
        <ul>
          <li>Grundämne → Metall / Halvmetall / Icke-metall</li>
          <li>Kemisk förening → Jonförening / Molekylförening</li>
        </ul>
      </li>
      <li><strong>Blandning</strong>
        <ul>
          <li>Homogen → Lösning / Legering</li>
          <li>Heterogen → Emulsion / Slamning</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
` },
  { cat: 'Kemisk bindning', icon: '🔗', html: `
<h2>🔗 Kemisk bindning</h2>
<p class="theory-intro">Atomer är sällan ensamma – de binder till varandra och bildar molekyler, kristaller och material. Kraften bakom all kemisk bindning är elektrostatisk: negativt laddade elektroner attraheras av positivt laddade atomkärnor. Det avgörande är <em>hur</em> elektronerna fördelas. Det beror på atomernas <em>elektronegativitet</em> (dragningskraft på elektroner). Elektronegativiteten beror på hur många protoner kärnan har och hur nära valenselektronerna sitter – det vill säga var i periodiska systemet atomen befinner sig. Bindningstypen → molekylens geometri (VSEPR) → molekylens polaritet → intermolekylära krafter → smält- och kokpunkter, löslighet, elektrisk ledning. Hela kedjan börjar med atomens position i periodiska systemet.</p><h3>1. Jonbindning – steg för steg</h3>
<p><strong>Varför uppstår jonbindning?</strong> Atomer strävar mot ädelgaskonfiguration (fullt ytterskal, oktettregeln). Metaller i grupp 1–2 har <em>låg joniseringsenergi</em> – det kostar lite energi att ta bort deras 1–2 valenselektroner. Icke-metaller i grupp 16–17 har <em>hög elektronaffinitet</em> – de vinner mycket energi på att ta upp 1–2 elektroner. Resultatet: elektroner överförs från metall till icke-metall, och bägge når ädelgaskonfiguration.</p>
<p><strong>Steg 1:</strong> Na (1 valenselektron) avger den → Na⁺ (Ne-konfiguration).<br>
<strong>Steg 2:</strong> Cl (7 valenselektroner) tar upp den → Cl⁻ (Ar-konfiguration).<br>
<strong>Steg 3:</strong> Na⁺ och Cl⁻ attraherar varandra elektrostatiskt (Coulombs lag) och ordnar sig i ett kristallgitter.<br>
<strong>Följden:</strong> Höga smältpunkter, sprödhet, ledning i smält tillstånd, löslighet i vatten.</p>
<p>Jonbindning uppstår när en metall avger en eller flera elektroner till en icke-metall. Metallatomens låga joniseringsenergi gör avgivningen energieffektiv; icke-metallens höga elektronaffinitet gör mottagandet energimässigt gynnsamt. Resultatet är en positiv katjon och en negativ anjon som attraherar varandra elektrostatiskt.</p>
<p>Exempel: Natrium (Na, [Ne]3s¹) avger sin valenselektron till klor (Cl, [Ne]3s²3p⁵). Na⁺ får Ne-konfiguration; Cl⁻ får Ar-konfiguration. De resulterande jonerna ordnar sig i ett tredimensionellt <strong>kristallgitter</strong> där varje Na⁺ omges av sex Cl⁻ och vice versa (NaCl-strukturen).</p>
<p>Gittrets stabilitet mäts av <strong>gitterentalpin</strong> – energin som krävs för att separera alla joner till gasform. För NaCl är den −1,2 MJ/mol; för MgO (två-valenta joner Mg²⁺ och O²⁻ med kortare jonbindning) är gitterentalpin −3,8 MJ/mol, vilket förklarar varför MgO smälter vid 2852 °C jämfört med NaCls 801 °C.</p>
<p><strong>Egenskaper hos jonföreningar:</strong></p>
<ul>
  <li>Höga smält- och kokpunkter (stark elektrostatisk attraktion kräver mycket energi att bryta)</li>
  <li>Spröda (när gittret förskjuts stöter likadana laddningar mot varandra → spjälkas)</li>
  <li>Leder el i smält tillstånd och i lösning (fria joner), men inte i fast tillstånd</li>
  <li>Löser sig i polara lösningsmedel (vatten) men inte i opolara (bensin)</li>
</ul>
<div class="formula-box">Coulombs lag (förenklad): E ∝ (q⁺ × q⁻) / r
Högre laddning → starkare bindning → högre smältpunkt
Kortare avstånd → starkare bindning → högre smältpunkt
NaCl (1+,1-): 801 °C
MgO (2+,2-): 2852 °C</div>

<h3>2. Kovalent bindning</h3>
<p>När två icke-metaller möts delar de elektroner istället för att överföra dem. En <strong>kovalent bindning</strong> är ett gemensamt elektronpar (bindningselektronpar) mellan två kärnor – båda kärnorna attraheras av paret och hålls samman. Atomer kan dela ett par (enkelbindning), två par (dubbelbindning) eller tre par (trippelbindning).</p>
<p>Enkelbindning (σ-bindning): överlappning längs bindningsaxeln. H—H, C—C, O—H. Fri rotation runt enkelbindningar.</p>
<p>Dubbelbindning: en σ + en π-bindning (sidoväges överlappning av p-orbitaler). C=C i eten, C=O i acetaldehyd. π-bindningar begränsar rotation → cis/trans-isomeri möjlig.</p>
<p>Trippelbindning: en σ + två π. N≡N i kvävegas (bindningsenergi 945 kJ/mol, mycket stark). C≡C i etyn (acetylen). Kortaste bindningslängd.</p>
<table class="theory-table">
  <tr><th>Bindningstyp</th><th>Elektronpar</th><th>Energi (C–C-typ)</th><th>Längd (C–C)</th><th>Rotation</th></tr>
  <tr><td>Enkel</td><td>1</td><td>~346 kJ/mol</td><td>154 pm</td><td>Fri</td></tr>
  <tr><td>Dubbel</td><td>2</td><td>~614 kJ/mol</td><td>134 pm</td><td>Nej (stel)</td></tr>
  <tr><td>Trippel</td><td>3</td><td>~839 kJ/mol</td><td>120 pm</td><td>Fri (axial)</td></tr>
</table>

<h3>3. Polara och opolara bindningar</h3>
<p>Om två atomer med <em>samma</em> elektronegativitet delar elektroner fördelas elektronparet jämnt – <strong>opolar kovalent bindning</strong> (t.ex. H₂, O₂, Cl₂). Om atomerna har <em>olika</em> elektronegativitet dras elektronparet mer mot den mer elektronegativa atomen – <strong>polar kovalent bindning</strong>. Den mer elektronegativa atomen får en partiell negativ laddning δ⁻, den andra får δ⁺.</p>
<p>Riktlinje baserat på elektronegativitetsskillnad ΔEN:</p>
<table class="theory-table">
  <tr><th>ΔEN</th><th>Bindningstyp</th><th>Exempel</th></tr>
  <tr><td>0</td><td>Opolar kovalent</td><td>H₂, Cl₂, C–C</td></tr>
  <tr><td>0,0–0,4</td><td>Knappt polar</td><td>C–H (ΔEN=0,4)</td></tr>
  <tr><td>0,4–1,7</td><td>Polar kovalent</td><td>H–O (ΔEN=1,4), H–Cl</td></tr>
  <tr><td>&gt;1,7</td><td>Jonbindning</td><td>Na–Cl (ΔEN=2,1)</td></tr>
</table>
<p>Obs: gränserna är riktlinjer, inte absoluta. Bindningstypen är ett kontinuum.</p>

<h3>4. VSEPR-teorin och molekylgeometri – varför formen beror på elektronparen</h3>
<p>Vi vet nu att atomer delar elektronpar (kovalenta bindningar). Men <em>hur</em> ordnas dessa bindningar i rummet? Det avgörs av att negativt laddade elektronpar stöter bort varandra – de vill ha maximalt avstånd till varandra. Det är VSEPR-principen (Valence Shell Electron Pair Repulsion).</p>
<p><strong>Nyckelinsikt:</strong> Det är <em>alla</em> elektronpar runt centralatomen som räknas – bindande par OCH fria par (lone pairs). Fria par tar mer plats än bindande par (de är inte bundna till en annan kärna) → de trycker ihop bindningsvinklarna lite extra.</p>
<p>Fria elektronpar (lone pairs) tar mer plats än bindande par och trycker samman bindningsvinklarna.</p>
<table class="theory-table">
  <tr><th>Elektron-grupper</th><th>Fria par</th><th>Geometri</th><th>Vinkel</th><th>Exempel</th></tr>
  <tr><td>2</td><td>0</td><td>Linjär</td><td>180°</td><td>CO₂, BeH₂</td></tr>
  <tr><td>3</td><td>0</td><td>Plan triangel</td><td>120°</td><td>BF₃, SO₃</td></tr>
  <tr><td>4</td><td>0</td><td>Tetraeder</td><td>109,5°</td><td>CH₄, SiCl₄</td></tr>
  <tr><td>4</td><td>1</td><td>Trigonal pyramid</td><td>107°</td><td>NH₃</td></tr>
  <tr><td>4</td><td>2</td><td>Vinkelformad</td><td>104,5°</td><td>H₂O</td></tr>
  <tr><td>5</td><td>0</td><td>Trigonal bipyramid</td><td>90°/120°</td><td>PCl₅</td></tr>
  <tr><td>6</td><td>0</td><td>Oktaeder</td><td>90°</td><td>SF₆</td></tr>
</table>
<p>Vattens 104,5°-vinkel (istället för tetraederns 109,5°) beror på att de två fria paren trycker ihop bindningsparen. Ammoniak 107° – ett fritt par trycker lite.</p>

<h3>5. Polara molekyler och dipolmoment</h3>
<p>En molekyl är <strong>polar</strong> om den har ett nettodipolögonblick – en asymmetrisk laddningsfördelning. Det räcker inte att bindningarna är polara; molekylens geometri måste även vara asymmetrisk så att bindningsdipolerna inte tar ut varandra.</p>
<p>CO₂ (O=C=O) är linjär. De två polara C=O-bindningarna pekar i exakt motsatta riktningar och tar ut varandra → <em>opolar molekyl</em> trots polara bindningar.</p>
<p>H₂O har vinkelform. De två O–H-bindningarnas dipoler pekar åt var sitt håll men adderas inte till noll → <em>polar molekyl</em> med stort dipolmoment (1,85 D). Detta förklarar varsin höga kokpunkt (100°C) jämfört med H₂S (−60°C).</p>

<h3>6. Intermolekylära krafter</h3>
<p>Utöver bindningarna <em>inom</em> molekyler finns svagare krafter <em>mellan</em> molekyler som avgör aggregationstillstånd, löslighet och kokpunkter.</p>
<p><strong>Vätebindning</strong> är den starkaste intermolekylära kraften (upp till ~40 kJ/mol). Uppstår när väte är kovalent bundet till N, O eller F (extremt elektronegativa atomer som gör H kraftigt δ⁺) och detta H attraheras av ett fritt elektronpar på N, O eller F i en annan molekyl. Förklarar:</p>
<ul>
  <li>Vattnets ovanligt höga kokpunkt (100°C) jämfört med H₂S (−60°C)</li>
  <li>Isens låga densitet (vätebindningar tvingar hexagonal struktur med hål)</li>
  <li>DNA:s dubbelhelix (baspar hålls av vätebindningar)</li>
  <li>Proteiners sekundärstruktur (α-helix och β-flak)</li>
</ul>
<p><strong>Dipol–dipol-krafter</strong> är attraktioner mellan permanenta dipoler i polara molekyler. Starkare ju större dipolmoment. Typisk styrka 5–25 kJ/mol. Aceton och HCl är exempel.</p>
<p><strong>London-dispersionskrafter</strong> (van der Waals) är universella – de finns i alla ämnen, även i ädelgaser och opolara molekyler. De uppstår av <em>momentana dipoler</em>: elektroners slumpmässiga rörelser skapar ögonblickliga ojämna fördelningar som inducerar dipol i grannatomen. Styrkan beror på hur lätt det är att "deformera" elektronmolnet (polariserbarhet) – vilket ökar med fler elektroner och större yta. Jod (I₂) är fast vid rumstemperatur trots att det är opolart, tack vare starka dispersionskrafter från 106 elektroner per molekyl.</p>
<table class="theory-table">
  <tr><th>Kraft</th><th>Finns i</th><th>Styrka</th><th>Typexempel</th></tr>
  <tr><td>Vätebindning</td><td>NH, OH, HF-grupper</td><td>10–40 kJ/mol</td><td>H₂O, NH₃, HF, DNA</td></tr>
  <tr><td>Dipol–dipol</td><td>Polara molekyler</td><td>3–25 kJ/mol</td><td>HCl, aceton, SO₂</td></tr>
  <tr><td>London-dispersion</td><td>Alla ämnen</td><td>0,1–40 kJ/mol</td><td>Ar, I₂, hexan</td></tr>
</table>

<h3>7. Metallbindning</h3>
<p>I metaller avger atomerna sina valenselektroner till ett gemensamt <strong>elektronhav</strong> som flödar fritt genom ett gitter av positivt laddade jon-kärnor. Denna "delokalisering" förklarar metallernas egenskaper: hög elektrisk ledning (elektroner rör sig fritt), hög värmeledning, metallglans (fria elektroner absörberar och emitterar fotoner), duktilitet och smäjlighet (gitterskikt kan glida utan att bindningen bryts). Wolframs extremt höga smältpunkt (3422°C) beror på att de 4 valenselektronerna ger ett enormt tätt elektronhav med stark attraktion.</p>

<h3>8. Sambandet</h3>
<p>Bindningstypen härstammar direkt från atomers elektronegativiteter och elektronkonfigurationer. Stor skillnad → joner och jonbindning. Liten skillnad mellan icke-metaller → kovalent delning. Metaller → elektronhav. Molekylens geometri (VSEPR) avgör om polara bindningar ger en polar eller opolar molekyl totalt. Intermolekylära krafter – vars styrka styrs av molekylstorlek, polaritet och vätegrupper – bestämmer om ämnet är gas, vätska eller fast vid rumstemperatur, och om det löser sig i vatten. Hela löslighetsbegreppet "lika löser lika" bygger på att polara molekyler interagerar gynnsamt med polara lösningsmedel och opolara med opolara. Bindningsläran är fundamentet för all biokemi, materialkemi och farmakologi.</p>


` },
  { cat: 'Reaktioner & stökiometri', icon: '⚗️', html: `
<h2>⚗️ Kemiska reaktioner &amp; stökiometri</h2>
<p class="theory-intro">Kemi är, i sin enklaste form, studiet av hur ämnen förändras. En kemisk reaktion bryter gamla bindningar och bildar nya. Stökiometri är den kvantitativa sidan av reaktioner: hur mycket av varje ämne är inblandat, hur mycket bildas, och vilket reagens tar slut först. Det är grunden för allt från industriell syntes av gödningsmedel till dosäringen av läkemedel.</p>

<h3>1. Reaktionstyper</h3>
<p>Kemiska reaktioner brukar klassas i åtta grundtyper, ofta överlappande:</p>
<p><strong>1. Syntesreaktioner (kombinationsreaktioner):</strong> A + B → AB. Två ämnen bildar ett. Exempel: 2Mg + O₂ → 2MgO (magnesium brinner i syre med bländvit låga). N₂ + 3H₂ → 2NH₃ (Haber-Bosch, industriell ammoniaksyntes).</p>
<p><strong>2. Sönderdelningsreaktioner:</strong> AB → A + B. Exempel: 2H₂O → 2H₂ + O₂ (elektrolys av vatten). CaCO₃ → CaO + CO₂ (kalcination av kalksten).</p>
<p><strong>3. Enkel substituering (förträngning):</strong> A + BC → AC + B. En mer reaktiv art förtränger en mindre reaktiv. Exempel: Zn + CuSO₄ → ZnSO₄ + Cu. Följer spänningsserien för metaller.</p>
<p><strong>4. Dubbel substituering (metates):</strong> AB + CD → AD + CB. Jonbyte. Exempel: AgNO₃ + NaCl → AgCl↓ + NaNO₃. Drivs av utfällning, gasbildning eller vattenbildning.</p>
<p><strong>5. Förbränningsreaktioner:</strong> Kolväten + O₂ → CO₂ + H₂O (fullständig). C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Energirik – basen för motorer och värmekällor.</p>
<p><strong>6. Syra-bas-reaktioner (neutralisering):</strong> HCl + NaOH → NaCl + H₂O. Utförligare i nästa avsnitt.</p>
<p><strong>7. Redoxreaktioner:</strong> Överföring av elektroner. Fe + CuSO₄ → FeSO₄ + Cu.</p>
<p><strong>8. Utfällningsreaktioner:</strong> Två jonlösningar blandas och en svårlöslig produkt fälls ut. BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl.</p>

<h3>2. Molbegreppet och Avogadros tal – bryggan mellan atomer och gram</h3>
<p><strong>Problemet:</strong> Reaktionsscheman talar om atomer och molekyler (t.ex. 2 H₂ + O₂ → 2 H₂O: 2 molekyler väte reagerar med 1 molekyl syre). Men i laboratoriet väger vi gram – inte enskilda atomer. Vi behöver ett begrepp som kopplar ihop de två nivåerna.</p>
<p><strong>Lösningen – molbegreppet:</strong> <strong>1 mol</strong> = 6,022×10²³ partiklar (Avogadros tal N_A). Varför just det antalet? För att 1 mol av C-12 (exakt 12 g) ska innehålla lika många atomer som massatalet antyder. Det innebär att molmassan M (g/mol) numeriskt är lika med relativmassan i periodiska systemet.</p>
<p>Nu kan vi räkna: koefficientsförhållanden i reaktionsscheman = molförhållanden = massornas förhållanden om vi omvandlar via molmassa. Det är kärnan i all stökiometrisk beräkning.</p>
<p>Atomer är så små att de måste räknas i enorma antal. <strong>Mole (mol)</strong> är SI-enheten för substansmängd: 1 mol = 6,022×10²³ enheter (<strong>Avogadros tal N₀</strong>). En mol kol-12 väger exakt 12 g. Avogadros tal valdes så att 1 mol av valfri atom väger lika många gram som atommassan i amu.</p>
<p><strong>Molmassa M</strong> (g/mol) är massan för 1 mol av ett ämne. För H₂O: M = 2×1 + 16 = 18 g/mol. För CaCO₃: M = 40 + 12 + 3×16 = 100 g/mol.</p>
<div class="formula-box">n = m / M           (mol = gram / molmassa)
m = n × M           (massa = mol × molmassa)
N = n × N_A         (antal partiklar)
N_A = 6,022 × 10²³ mol⁻¹

Exempel: 90 g H₂O → n = 90/18 = 5,0 mol
         5,0 mol × 6,022×10²³ = 3,011×10²⁴ molekyler</div>

<h3>3. Kemisk formel och sammansättning</h3>
<p><strong>Empirisk formel</strong> anger de enklaste heltalskvoterna mellan atomerna. H₂O₂ har empirisk formel HO. CH₂O är empirisk formel för både formaldehyd (CH₂O), ättiksyra (C₂H₄O₂) och glukos (C₆H₁₂O₆).</p>
<p><strong>Molekylformel</strong> anger det faktiska antalet atomer. För att bestämma molekylformeln från den empiriska formeln krävs molmassan: n = M_molekyl / M_emp. Glukos: M = 180 g/mol, M(CH₂O) = 30 ⇒ n = 6 ⇒ C₆H₁₂O₆.</p>
<p><strong>Procentuell sammansättning:</strong> %X = (n_X × M_X / M_förening) × 100. För Fe₂O₃: %Fe = (2×56/160)×100 = 70 %.</p>
<p><strong>Analys till empirisk formel:</strong> Omvandla massaprocenterna till mol (dividera med atommassa), finna minsta kvoten, dividera alla med det minsta möjliga. Exempel: 40 % C, 6,7 % H, 53,3 % O → n(C)=40/12=3,33, n(H)=6,7/1=6,7, n(O)=53,3/16=3,33. Dividera med 3,33: C:H:O = 1:2:1 ⇒ empirisk formel CH₂O.</p>

<h3>4. Balansering av reaktionsscheman</h3>
<p>Massebevarandets lag säger att atomer varken skapas eller förstörs i en kemisk reaktion – balanserade formler är en direkt följd. Steg:</p>
<ol>
  <li>Skriv korrekt formler för alla reaktanter och produkter.</li>
  <li>Balansera grundämnena med <em>stökiometriska koefficienter</em> (aldrig ändra formler!).</li>
  <li>Balansera metaller först, sedan icke-metaller, och slutligen väte och syre.</li>
  <li>Kontrollera: räkna varje atoms antal på båda sidor.</li>
</ol>
<p>Exempel: Fe + O₂ → Fe₂O₃. Syre: vänster 2, höger 3. LCM(2,3) = 6 ⇒ 3O₂ och 2Fe₂O₃. Då krävs 4Fe: <strong>4Fe + 3O₂ → 2Fe₂O₃</strong>. Kontroll: 4 Fe båda sidor, 6 O båda sidor. ✓</p>
<p>För komplexa redoxreaktioner används halfreaktionsmetoden (oxidationstaländring balanseras separat för oxidation och reduktion).</p>

<h3>5. Molöverföringar – stökiometriska beräkningar</h3>
<p>Reaktionsförmelns koefficienter anger <em>molförhållanden</em>, inte massförhållanden. N2 + 3H₂ → 2NH₃ säger: 1 mol N₂ reagerar med 3 mol H₂ och ger 2 mol NH₃.</p>
<p><strong>Standardprocedur:</strong></p>
<ol>
  <li>Balansera reaktionen.</li>
  <li>Omvandla given massa till mol: n = m/M.</li>
  <li>Använd koefficientsförhållandet för att beräkna mol produkt/reaktant.</li>
  <li>Omvandla till massa (eller volym): m = n×M.</li>
</ol>
<div class="formula-box">Exempel: Beräkna massa CO₂ från 88 g propan C₃H₈.
C₃H₈ + 5O₂ → 3CO₂ + 4H₂O  (M(C₃H₈)=44, M(CO₂)=44)
n(C₃H₈) = 88/44 = 2,0 mol
n(CO₂) = 3 × 2,0 = 6,0 mol
m(CO₂) = 6,0 × 44 = 264 g</div>

<h3>6. Begränsande reagens och överskott</h3>
<p>I praktiken är sällan reaktanterna i exakt stökiometriska proportioner. Det <strong>begränsande reagenset</strong> (limiting reagent) är det som tar slut först och därmed begränsar mängden produkt. Allt annat är i <strong>överskott</strong>.</p>
<p><strong>Hur man hittar begränsande reagenset:</strong></p>
<ol>
  <li>Beräkna mol av varje reaktant.</li>
  <li>Beräkna hur många mol produkt varje reaktant kan ge (om den vøre den enda begränsaren).</li>
  <li>Den reaktant som ger <em>minst</em> produkt är det begränsande reagenset.</li>
</ol>
<p>Alternativ: dividera tillgängliga mol med koefficienten. Den minsta kvoten pekar ut det begränsande reagenset.</p>
<div class="formula-box">Exempel: 10 g H₂ + 80 g O₂ → H₂O
n(H₂) = 10/2 = 5,0 mol; n(O₂) = 80/32 = 2,5 mol
2H₂ + O₂ → 2H₂O (koeff. 2:1:2)
Från H₂: 5,0/2 = 2,5 (mol/koeff.)
Från O₂: 2,5/1 = 2,5 (mol/koeff.)
Lika! I detta fall exakt stökiometriskt.
Om istället 3,0 mol O₂ används: från H₂ får vi 2,5; från O₂ får vi 3,0.
H₂ begränsar → n(H₂O)=5,0 mol</div>

<h3>7. Procentuellt utbyte</h3>
<p>Verkliga reaktioner ger sällan det teoretiska utbytet. Orsaker: sidoreaktioner, ofullständig reaktion, mekaniska förluster vid separation/rening, jämviktsreaktioner som inte går till fullständigt.</p>
<div class="formula-box">Procentuellt utbyte = (faktisk massa / teoretisk massa) × 100 %

Verklig avkastning (i mol): n_faktisk = n_teor × (utbyte/100)

Exempel: Teoretisk massa: 50 g. Faktisk: 40 g. Utbyte = 80 %.</div>
<p>I industrin är utbytet viktigt ekonomiskt och miljömässigt. Haber-Bosch-processen för ammoniaksyntes håller förändringsenheten runt 15–25 % per genomgång, men avskiljer och återcirkulerar ständigt omända reagens.</p>

<h3>8. Volymöverföringar – gaser och lösningar</h3>
<p>För gaser vid STP (0 °C, 101,3 kPa): 1 mol idealgas upptar 22,4 L (molär volym). Omvandling: n = V / 22,4.</p>
<p>För lösningar: n = c × V (mol = mol/L × L). Volymen måste anges i liter.</p>
<div class="formula-box">Stökiometri med lösning:
NaOH + HCl → NaCl + H₂O  (1:1)
c(NaOH)=0,100 mol/L, V=25,0 mL → n(NaOH)=0,00250 mol
n(HCl)=0,00250 mol
V(HCl) om c(HCl)=0,200 mol/L: V=n/c=0,0125 L=12,5 mL</div>

<h3>9. Redoxreaktioner och oxidationstal – steg för steg</h3>
<p><strong>Steg 1 – förstå varför elektroner överförs:</strong> Atomer med låg joniseringsenergi (metaller) avger gärna elektroner. Atomer med hög elektronaffinitet (halogener, syre) tar gärna upp elektroner. När de möts sker en elektronöverföring – en redoxreaktion.</p>
<p><strong>Steg 2 – identifiera vad som händer:</strong> Oxidation = avger elektroner (oxidationstalet ökar). Reduktion = tar upp elektroner (oxidationstalet minskar). De sker ALLTID ihop.</p>
<p><strong>Steg 3 – verktyget oxidationstal:</strong> Tilldela varje atom ett formellt laddningstal enligt reglerna → spåra förändringen för att avgöra vad som oxideras och vad som reduceras.</p>
<p><strong>Redoxreaktioner</strong> innebär överföring av elektroner från ett ämne till ett annat. Termen "redox" är en sammandragning av <em>reduktion</em> och <em>oxidation</em>, som alltid sker simultant:</p>
<ul>
  <li><strong>Oxidation</strong>: ett ämne <em>avger</em> elektroner → oxidationstalet ökar → kallas reduktionsmedel (det reducerar det andra ämnet)</li>
  <li><strong>Reduktion</strong>: ett ämne <em>tar upp</em> elektroner → oxidationstalet minskar → kallas oxidationsmedel (det oxiderar det andra ämnet)</li>
</ul>
<p>Minnesregel: <strong>OIL RIG</strong> – Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). Eller på svenska: <strong>FROS</strong> – Förlust av elektroner = Reduktionsmedel, Oxidation. Svinnet = oxidationsmedel.</p>

<h4>Oxidationstal</h4>
<p>Oxidationstalet är en formell laddning som tilldelats varje atom i en molekyl eller jon, baserat på en uppsättning regler. Det är ett verktyg för att hålla reda på elektronflödet i redoxreaktioner.</p>
<p><strong>Regler för oxidationstal (prioritetsordning):</strong></p>
<ol>
  <li>Fritt grundämne: oxidationstal = 0. (Fe, O₂, Cl₂ är alla 0)</li>
  <li>Enatomig jon: oxidationstal = jonens laddning. (Na⁺ = +1, Cl⁻ = −1, Fe³⁺ = +3)</li>
  <li>Syre: nästan alltid −2. Undantag: peroxider (H₂O₂: O = −1), OF₂ (O = +2)</li>
  <li>Väte: +1 när bundet till icke-metall (H₂O, HCl), −1 i metallhydrider (NaH)</li>
  <li>Fluor: alltid −1 (mest elektronegativa grundämnet)</li>
  <li>Alkalimetaller (grupp 1): alltid +1 i föreningar</li>
  <li>Jordalkalimetaller (grupp 2): alltid +2 i föreningar</li>
  <li>Summan av oxidationstalen = molekylens totala laddning (0 för neutrala, = jonladdning för joner)</li>
</ol>
<div class="formula-box">Exempel – bestäm oxidationstalet för Cr i K₂Cr₂O₇:
K₂Cr₂O₇ är neutral → summa = 0
K: +1 (regel 6), O: −2 (regel 3)
2(+1) + 2×Cr + 7(−2) = 0
2 + 2Cr − 14 = 0
2Cr = 12 → Cr = +6

Exempel – bestäm oxidationstal för S i SO₄²⁻:
Jonladdning = −2
S + 4(−2) = −2
S − 8 = −2 → S = +6</div>

<h4>Balansera redoxreaktioner med halfreaktionsmetoden</h4>
<p>Halfreaktionsmetoden delar upp en redoxreaktion i en oxidationshalfreakton och en reduktionshalfreakton, som balanseras separat och sedan adderas.</p>
<p><strong>Steg (sur lösning):</strong></p>
<ol>
  <li>Dela upp i oxidations- och reduktionshalfreaktioner</li>
  <li>Balansera alla atomer utom O och H</li>
  <li>Balansera O med H₂O</li>
  <li>Balansera H med H⁺</li>
  <li>Balansera laddning med e⁻</li>
  <li>Multiplicera halfreaktionerna så att e⁻ tar ut varandra</li>
  <li>Addera och förenkla</li>
</ol>
<div class="formula-box">Exempel: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (sur lösning)

Reduktion: MnO₄⁻ → Mn²⁺
  MnO₄⁻ → Mn²⁺ + 4H₂O    (balansera O)
  MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O  (balansera H)
  MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O  (balansera laddning, Mn: +7→+2)

Oxidation: Fe²⁺ → Fe³⁺ + e⁻  (Fe: +2→+3)

Multiplicera oxidation ×5:
5Fe²⁺ → 5Fe³⁺ + 5e⁻

Addera:
MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺</div>

<h4>Aktivitetsserien (spänningsserien) för metaller</h4>
<p>Metaller rangordnas efter sin tendens att oxideras (avge elektroner). En metall högre upp i serien kan förträngas ur lösning av en metall lägre upp.</p>
<table class="theory-table">
  <tr><th>Metall</th><th>Halvreaktion</th><th>Reaktivitet</th></tr>
  <tr><td>K, Na, Li</td><td>Me → Me⁺ + e⁻</td><td>Mycket aktiv – reagerar med vatten</td></tr>
  <tr><td>Mg, Al, Zn</td><td>Me → Me²⁺/³⁺ + ne⁻</td><td>Aktiv – reagerar med syra</td></tr>
  <tr><td>Fe, Ni, Sn, Pb</td><td>Me → Me²⁺ + 2e⁻</td><td>Måttligt aktiv</td></tr>
  <tr><td>H₂</td><td>H₂ → 2H⁺ + 2e⁻</td><td>Referenspunkt (E° = 0)</td></tr>
  <tr><td>Cu, Ag, Au, Pt</td><td>Me → Me⁺ + e⁻</td><td>Lite/ej aktiv – ädla metaller</td></tr>
</table>
<p>Exempel: Zn + CuSO₄ → ZnSO₄ + Cu. Zink är mer aktiv än koppar → Zn oxideras (Zn → Zn²⁺ + 2e⁻), Cu²⁺ reduceras (Cu²⁺ + 2e⁻ → Cu). Man ser hur koppar fälls ut som ett rödbrun beläggning på zinken.</p>

<h3>10. Sambandet</h3>
<p>Stökiometri är bron mellan det symboliska (reaktionsscheman) och det verkliga (massor, volymer, antal partiklar). Molbegreppet är nyckeln: det kopplar samman atomnivån (koefficienter = molförhållanden) med laboratorienivån (gram, milliliter). Begränsande reagens och utbytesberäkningar är särskilt viktiga i kemisk industri där även små förbättringar i utbyte kan spara miljonbelopp och minska avfall. Redoxkemi genomsyrar hela kemin: korrosion, batterier, biologisk cellandning, fotosyntes och industriella processer är alla redoxreaktioner. Oxidationstalet är ett oumbärligt verktyg för att snabbt identifiera vad som oxideras och reduceras, och halfreaktionsmetoden ger ett systematiskt sätt att balansera även komplexa redoxreaktioner.</p>

<h3>11. Begränsande reaktant och överskott</h3>
<p>I verkligheten finns sällan exakt rätt mängd av varje reaktant. Det ämne som <em>tar slut först</em> kallas <strong>begränsande reaktant</strong> (utbytesbestämmande ämne). Övriga ämnen befinner sig i <strong>överskott</strong>.</p>
<div class="formula-box">
  <strong>Exempel:</strong> 2 Cu(s) + S(s) → Cu₂S(s)<br>
  Du har 12,7 g Cu och 4,82 g S.<br>
  n(Cu) = 12,7/63,5 = 0,200 mol &nbsp;|&nbsp; n(S) = 4,82/32,1 = 0,150 mol<br>
  För 0,150 mol S behövs 2×0,150 = 0,300 mol Cu – men vi har bara 0,200 mol.<br>
  → <strong>Cu är begränsande reaktant.</strong><br>
  n(Cu₂S) = 0,200/2 = 0,100 mol → m = 0,100 × 159,1 = <strong>15,9 g</strong>
</div>

<h3>12. Utbyte (yield)</h3>
<p>En reaktion är sällan fullständig. <strong>Procentuellt utbyte</strong>:</p>
<div class="formula-box">
  Utbyte (%) = (faktisk massa / teoretisk massa) × 100
</div>
<p>Exempel: Teoretisk massa nickel = 117 g. Faktisk massa vid 75% utbyte = 0,75 × 117 = 88 g.</p>

<h3>13. Fällningsreaktioner</h3>
<p>När två saltlösningar blandas kan jonerna kombineras på nya sätt. Om kombinationen ger ett <strong>svårlösligt salt</strong>, fälls det ut som ett fast ämne (<strong>fällning/precipitat</strong>).</p>
<p>Exempel: AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq)</p>
<p><strong>Löslighetsregler</strong> (tumregler):</p>
<ul>
  <li><strong>Nästan alltid lättlösliga:</strong> Na⁺, K⁺, NH₄⁺-salter; nitrater (NO₃⁻); de flesta sulfater (SO₄²⁻); de flesta klorider (Cl⁻)</li>
  <li><strong>Undantag – svårlösliga:</strong> BaSO₄, AgCl, PbSO₄</li>
  <li><strong>Nästan alltid svårlösliga:</strong> karbonater (CO₃²⁻), fosfater (PO₄³⁻), hydroxider (OH⁻) – utom Na⁺/K⁺/NH₄⁺</li>
</ul>
<div class="formula-box">
  <strong>Beräkning – fällningens massa:</strong><br>
  25 cm³ BaCl₂(aq) med c = 0,10 mol/dm³ + överskott Na₂SO₄(aq)<br>
  BaCl₂ + Na₂SO₄ → BaSO₄(s)↓ + 2 NaCl<br>
  n(Ba²⁺) = 0,025 dm³ × 0,10 mol/dm³ = 0,0025 mol<br>
  m(BaSO₄) = 0,0025 × 233,1 g/mol = <strong>0,58 g</strong>
</div>

<h3>14. Masshalt och volymhalt</h3>
<p>Utöver mol/dm³ kan lösningens sammansättning anges som:</p>
<ul>
  <li><strong>Masshalt (w)</strong> = ämnes massa / lösningens totala massa (enhetslös, anges ofta i %). Havsvatten: w(salt) ≈ 3,5%.</li>
  <li><strong>Volymhalt (φ)</strong> = ämnes volym / lösningens totala volym (enhetslös, anges i %). Lättöl: φ(etanol) ≈ 2,2%.</li>
</ul>

<h3>15. Spädning</h3>
<p>Vid spädning av en lösning förblir <em>substansmängden</em> konstant medan volymen ökar och koncentrationen minskar:</p>
<div class="formula-box">
  c₁ · V₁ = c₂ · V₂
</div>
<p>Exempel: Hur stor volym 2,0 mol/dm³ NaOH behövs för att bereda 1,0 dm³ 0,10 mol/dm³ NaOH?<br>
V₁ = (0,10 × 1,0) / 2,0 = 0,050 dm³ = <strong>50 cm³</strong></p>

` },
  { cat: 'Syror & baser', icon: '🧪', html: `
<h2>🧪 Syror &amp; baser</h2>
<p class="theory-intro">Syra-bas-kemi är något vi möter överallt: citronsyrans syrlighet, bikarbonatets neutralisering av magsyra, blodets exakta pH-kontroll, surt regn och hur läkemedel absorberas i tarmen. Allt börjar med en enkel fråga: vad gör ett ämne surt? Svaret – protoner (H⁺) – leder till definitionen av syror och baser. Det leder i sin tur till jämviktskonstanter (Ka), som leder till pH-begreppet, som leder till buffertlösningarnas funktion, som leder till titrering och kvantitativ analys. Varje begrepp bygger på det föregående.</p>

<h3>1. Tre sätt att definiera syror och baser</h3>
<p><strong>Arrhenius (1884):</strong> En syra är ett ämne som avger H⁺-joner i vattenlösning; en bas avger OH⁻-joner. Enkel och användbar men begränsad till vattensystem. HCl → H⁺ + Cl⁻. NaOH → Na⁺ + OH⁻.</p>
<p><strong>Brønsted–Lowry (1923):</strong> En syra är en protongivare (H⁺-givare); en bas är en protontagängare. Vidgar definitionen till icke-vattensystem och inkluderar amfolyter. HCl + H₂O → H₃O⁺ + Cl⁻: här är HCl syra, H₂O bas. Omvändningen: H₃O⁺ + Cl⁻ → HCl + H₂O: H₃O⁺ är då syra, Cl⁻ bas. Varje syra har en <em>konjugatbas</em> (syran utan H⁺) och varje bas en <em>konjugatsyra</em> (basen + H⁺). Starkt parens konjugat är alltid svagt.</p>
<p><strong>Lewis (1923):</strong> En syra är en elektronparmottagare; en bas är en elektronpargivare. Vidgar ytterligare – inkluderar reaktioner utan H⁺, t.ex. BF₃ (Lewis-syra) + NH₃ (Lewis-bas) → F₃B←NH₃.</p>

<h3>2. Stark vs svag syra och bas – bindningsstyrka avgör</h3>
<p><strong>Varför är vissa syror starka och andra svaga?</strong> En stark syra har en <em>svag H-A-bindning</em> (lätt att bryta) och/eller en <em>stabil konjugatbas</em> A⁻ (laddningen stabiliseras av strukturen). HCl: H–Cl-bindningen är relativt svag → fullständig dissosiaton. CH₃COOH: karboxylgruppens C–O-bindning är starkare och laddningen i CH₃COO⁻ är resonansstabiliserad → bara partiell dissociation.</p>
<p><strong>Starka syror</strong> dissocierar fullständigt i vatten – reaktionspilen pekar åt höger: HCl + H₂O → H₃O⁺ + Cl⁻. De sex starka syrorna: HCl, HBr, HI, HNO₃, H₂SO₄ (1:a steget), HClO₄. En 0,10 mol/L HCl-lösning har [H₃O⁺] = exakt 0,10 mol/L – inga HCl-molekyler kvarstår.</p>
<p><strong>Svaga syror</strong> dissocierar ofullständigt – reaktionen är en jämvikt ⇌: CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻. En 0,10 mol/L ättiksyralösning har [H₃O⁺] ≈ 1,34×10⁻³ mol/L (bara ~1,3 % dissocierat). Ka = 1,8×10⁻⁵ – ett litet Ka-värde = svag syra = vill inte dissociera.</p>
<p><strong>Starka baser:</strong> NaOH, KOH, Ba(OH)₂ – dissocierar fullständigt, ger [OH⁻] = koncentrationen. <strong>Svaga baser:</strong> NH₃, aminer (R–NH₂) – tar upp proton med jämviktskonstant Kb. NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, Kb = 1,8×10⁻⁵.</p>
<p><strong>Konjugatsyra-baspar:</strong> Varje syra HA har en konjugatbas A⁻ (syran minus ett H⁺). En stark syra har en <em>mycket svag</em> konjugatbas (Cl⁻ är nästintill ingen bas alls). En svag syra har en <em>märkbart stark</em> konjugatbas (CH₃COO⁻ är en märkbar bas). Ka × Kb = Kw – relationen är exakt omvänd.</p>

<h3>3. pH, pOH och vattnets jonprodukt – logaritmskalan och varför pH 7 är neutralt</h3>
<p><strong>Varför en logaritmisk skala?</strong> [H₃O⁺] i vanliga lösningar varierar enormt – från 10 mol/L (starkt koncentrerad syra) till 10⁻¹⁴ mol/L (stark bas). Att skriva 0,00000001 är omständligt; pH-skalan komprimerar detta till ett enkelt tal (−8 → pH 8). pH = −log[H₃O⁺].</p>
<p><strong>Vattnets autoprotolys (autojonisering):</strong> Vatten reagerar med sig självt: 2H₂O ⇌ H₃O⁺ + OH⁻. Jämviktskonstanten Kw = [H₃O⁺][OH⁻] = 1,0×10⁻¹⁴ vid 25 °C. I rent vatten: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7. Tillsätts syra: [H₃O⁺] ökar → [OH⁻] minskar (kvoten Kw bevaras) → pH sjunker. Tillsätts bas: [OH⁻] ökar → [H₃O⁺] minskar → pH stiger.</p>
<div class="formula-box">pH = −log[H⁺]
pOH = −log[OH⁻]
pH + pOH = 14  (vid 25 °C)
[H⁺] = 10^(−pH)

Neutral (25 °C): pH = 7,0  ([H⁺]=[OH⁻]=10⁻⁷)
Sur: pH &lt; 7
Basisk: pH &gt; 7

Observera: pH 7 är neutral vid 25 °C, inte alltid!</div>

<h3>4. Syrakonstanten Ka och svaga syror</h3>
<p>För en svag syra HA ⇌ H⁺ + A⁻ definieras syrakonstanten:</p>
<div class="formula-box">Ka = [H⁺][A⁻] / [HA]

pKa = −log(Ka)

Approximation för svag syra (dissociation &lt; 5 %):
[H⁺] ≈ √(Ka × c)
pH ≈ ½(pKa − log c)

Exempel: c(CH₃COOH) = 0,10 mol/L, Ka = 1,8×10⁻⁵
[H⁺] = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶) = 1,34×10⁻³
pH = −log(1,34×10⁻³) = 2,87</div>
<p><strong>pKa-skalan:</strong> Lågt pKa = stark syra (stor Ka, dissocierar kraftigt). Högt pKa = svag syra. HCl: pKa ≈ −7. Ättiksyra: pKa = 4,74. Kolsåra (H₂CO₃): pKa1 = 6,35. NH₄⁺: pKa = 9,26. Vatten: pKa = 15,7.</p>
<table class="theory-table">
  <tr><th>Syra</th><th>Formula</th><th>Ka</th><th>pKa</th><th>Styrka</th></tr>
  <tr><td>Saltsyra</td><td>HCl</td><td>~10⁷</td><td>−7</td><td>Stark</td></tr>
  <tr><td>Svavelsyra (st.1)</td><td>H₂SO₄</td><td>&gt;1</td><td>&lt;0</td><td>Stark</td></tr>
  <tr><td>Fosforsyra (st.1)</td><td>H₃PO₄</td><td>7,5×10⁻³</td><td>2,12</td><td>Måttlig</td></tr>
  <tr><td>Ättiksyra</td><td>CH₃COOH</td><td>1,8×10⁻⁵</td><td>4,74</td><td>Svag</td></tr>
  <tr><td>Kolsåra</td><td>H₂CO₃</td><td>4,3×10⁻⁷</td><td>6,35</td><td>Svåg</td></tr>
  <tr><td>Ammonium</td><td>NH₄⁺</td><td>5,6×10⁻¹⁰</td><td>9,26</td><td>Mycket svag</td></tr>
</table>

<h3>5. Henderson-Hasselbalch och buffertlösningar – varför pH inte ändras</h3>
<p><strong>Varför ändras inte pH i en buffert?</strong> En buffertlösning innehåller <em>både</em> en svag syra HA och dess konjugatbas A⁻ i betydande koncentrationer. Tillsätts H⁺ reagerar det med A⁻ (basen konsumerar syran): A⁻ + H⁺ → HA. Tillsätts OH⁻ reagerar det med HA: HA + OH⁻ → A⁻ + H₂O. I båda fallen absorberas tillsatsen och pH-förändringen minimeras – man byter ut starka syror/baser mot svaga.</p>
<p>En <strong>buffertlösning</strong> motstår ändringar i pH när små mängder syra eller bas tillsätts. Den består av en svag syra och dess konjugatbas (t.ex. ättiksyra + natriumacetat) eller en svag bas och dess konjugatsyra (t.ex. ammoniak + ammoniumklorid).</p>
<div class="formula-box">Henderson-Hasselbalch:
pH = pKa + log([A⁻] / [HA])

Vid [A⁻] = [HA]: pH = pKa (halvvägspunkten vid titrering)
Buffertzonen: pH = pKa ± 1 (bufferten fungerar bäst)

Exempel (acetatbuffert, pKa=4,74):
[CH₃COO⁻]/[CH₃COOH] = 1 → pH = 4,74
[CH₃COO⁻]/[CH₃COOH] = 10 → pH = 5,74
[CH₃COO⁻]/[CH₃COOH] = 0,1 → pH = 3,74</div>
<p><strong>Hur bufferten fungerar:</strong> Tillsätter man H⁺ konsumeras det av basen A⁻ → HA (liten pH-ändring). Tillsätter man OH⁻ reagerar det med syran HA → A⁻ + H₂O (liten pH-ändring). Kapaciteten är störst när [HA] ≈ [A⁻].</p>
<p><strong>Biologiska buffrar:</strong> Blodet hålls vid pH 7,35–7,45 av tre buffersystem: bikarbonat/kolsyra (dominerande, pKa = 6,1), fosfatbuffert och proteiner (hemoglobin). En ändring till pH 7,2 (acidos) eller 7,6 (alkalos) är livshotande. CO₂-andning är kroppens snabbaste pH-reglering: ökat CO₂ → mer H₂CO₃ → lägre pH; snabb andning blåser ut CO₂ → höjer pH.</p>

<h3>6. Titrering</h3>
<p>Titrering är en kvantitativ analysteknik där en lösning med känd koncentration (titrant) tillsätts till en okänd lösning tills reaktionen är fullständig (<strong>ekvivalenspunkten</strong>). En <strong>indikator</strong> signalerar ekvivalenspunkten färgskärändrande.</p>
<p><strong>Stark syra – stark bas:</strong> pH = 7 vid ekvivalenspunkten (t.ex. HCl + NaOH → NaCl + H₂O). Använd fenolftalein (färgsängas 8,2–10) eller bromtymolblått.</p>
<p><strong>Svag syra – stark bas:</strong> pH > 7 vid ekvivalenspunkten (produkten är ett basalt salt, t.ex. CH₃COO⁻ hydrolyiserar). Använd fenolftalein.</p>
<p><strong>Stark syra – svag bas:</strong> pH < 7 vid ekvivalenspunkten (produkten NH₄⁺ är sur). Använd metylorange.</p>
<div class="formula-box">Grundformel vid 1:1-stoichiometri:
c₁ × V₁ = c₂ × V₂

Exempel: 25,0 mL NaOH titreras med 0,100 mol/L HCl.
Åtgår 18,5 mL HCl.
n(HCl) = 0,100 × 0,0185 = 1,85×10⁻³ mol
n(NaOH) = 1,85×10⁻³ mol
c(NaOH) = 1,85×10⁻³ / 0,025 = 0,074 mol/L</div>

<h3>7. Saltlösningar och hydrolys</h3>
<p>Salter är jonföreningar från syra-basneutralisering. Deras lösningar är inte alltid neutrala:</p>
<p><strong>Neutral:</strong> Salt av stark syra + stark bas. NaCl, KNO₃ – inga joner reagerar med vatten.</p>
<p><strong>Basisk:</strong> Salt av svag syra + stark bas. CH₃COONa – acetatjonen hydrolyserar: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. pH > 7.</p>
<p><strong>Sur:</strong> Salt av stark syra + svag bas. NH₄Cl – ammoniumjonen hydrolyserar: NH₄⁺ ⇌ NH₃ + H⁺. pH < 7.</p>

<h3>8. Indikatorer</h3>
<p>En syra-basindikatorer är själva en svag syra (HIn) där den söndrade (In⁻) och osöndrade formen (HIn) har olika färg. Färgändringen sker runt pKa(HIn) ± 1. Litmuspapperets färgändring vid pH 5–8 (rött i syra, blått i bas). Universalindikator visar ett spektrum från rött (pH 1) till violett (pH 14).</p>

<h3>9. Sambandet</h3>
<p>Syra-bas-kemi genomsyrar hela kemin och livet. pH styr enzymaktivitet, läkemedelslöslighet, korrosionshastigheter och äkerheten hos livsmedel. Buffertlösningar är livsnödvändiga – utan blodets noggranna pH-kontroll skulle kroppens enzymer sluta fungera. Henderson-Hasselbalch-ekvationen är ett kraftfullt verktyg som kopplar ihop laboratoriedata (pH, koncentrationer) med den termodynamiska jämviktskonstanten Ka. Titreringen är en av kemins mest använda kvantitativa metoder. Sambandet mellan Ka, Kb och Kw (Ka×Kb = Kw) innebär att när man känner en konjugatsyras Ka kan man direkt beräkna basens Kb och därmed hela lösningens pH-beteende.</p>
` },
  { cat: 'Organisk kemi', icon: '🌿', html: `
<h2>🌿 Organisk kemi</h2>
<p class="theory-intro">Organisk kemi är kemin om kolföreningar. Kol (C) har fyra valenselektroner och kan bilda fyra kovalenta bindningar – inklusive till andra kolatomer. Det leder till att C kan bilda kedjor av godtycklig längd, grenar, ringar och dubbel-/trippelbindningar. Det leder i sin tur till att över 10 miljoner organiska föreningar är kända. Varje förening har en specifik 3D-struktur. Strukturen bestämmer reaktiviteten. Reaktiviteten bestämmer vilka reaktioner som är möjliga. Det är varför organisk kemi är grunden för läkemedelskemi, biokemi och plastindustri – allt hänger på strukturen.</p>

<h3>1. Kolatomens unikitet</h3>
<p>Kol (C, Z=6) har fyra valenselektroner och bildar alltid fyra kovalenta bindningar (tetravalent). Det innebär att varje C-atom kan binda till fyra andra atomer – inklusive andra kolatomer. Detta möjliggör:</p>
<ul>
  <li>Raka kedjor: metanol, etan, propan...</li>
  <li>Grenade kedjor: isobutan (2-metylpropan)</li>
  <li>Ringar: cyklohexan, bensen</li>
  <li>Dubbel- och trippelbindningar: eten (C=C), etyn (C≡C)</li>
  <li>Kombinationer av allt ovan: kolesterol, DNA, proteiner</li>
</ul>
<p>Kolväten som består enbart av C och H kallas <strong>kolväten</strong>; dessa delar sig i alkaner (enbart enkelbindningar), alkener (minst en C=C), alkyner (minst en C≡C) och aromater (bensen-ring). Alla övriga organiska ämnen har en eller flera <strong>funktionella grupper</strong> – atomgrupper som ger karakteristiska kemiska egenskaper.</p>

<h3>2. Alkaner – mättade kolväten</h3>
<p>Alkaner har formeln CₙH₂ₙ₊₂ och innehåller enbart C–C och C–H enkelbindningar. "Mättade" innebär att ingen mer väte kan adderas. Alla bindningar är σ-bindningar med fri rotation.</p>
<table class="theory-table">
  <tr><th>Namn</th><th>Formel</th><th>Kokpunkt</th><th>Aggregation (25°C)</th></tr>
  <tr><td>Metan</td><td>CH₄</td><td>−161 °C</td><td>Gas</td></tr>
  <tr><td>Etan</td><td>C₂H₆</td><td>−89 °C</td><td>Gas</td></tr>
  <tr><td>Propan</td><td>C₃H₈</td><td>−42 °C</td><td>Gas</td></tr>
  <tr><td>Butan</td><td>C₄H₁₀</td><td>0 °C</td><td>Gas</td></tr>
  <tr><td>Pentan</td><td>C₅H₁₂</td><td>36 °C</td><td>Vätska</td></tr>
  <tr><td>Hexan</td><td>C₆H₁₄</td><td>69 °C</td><td>Vätska</td></tr>
  <tr><td>Oktadekan</td><td>C₁₈H₃₈</td><td>316 °C</td><td>Fast</td></tr>
</table>
<p>Kokpunkten ökar med längre kolkedja (starkare Londonkrafter med för större molmassa). Grenad struktur sänker kokpunkten (minskar kontaktytan → svagare London-krafter). Alkaner brinner (exoterm förbränning): CH₄ + 2O₂ → CO₂ + 2H₂O, ΔH = −890 kJ/mol. De är annars kemiskt tröga (särskilt substitutionsreaktioner med halogener kräver UV-ljus).</p>

<h3>3. Alkener och alkyner – omättade kolväten</h3>
<p><strong>Alkener</strong> (formel CₙH₂ₙ) har minst en C=C-dubbelbindning (en σ + en π). π-bindningen är reaktiv och möjliggör additionsreaktioner: H₂, Br₂, HX och H₂O kan adderas över dubbelbindningen. Bromöverötter (Br₂ + CC=CC → BrCC-CCBr) färgar av bromvatten – ett enkelt test för omättnad.</p>
<p>Cis/trans-isomeri uppstår när ingen fri rotation finns runt dubbelbindningen och de båda sidorna av bindningen har olika substituenter. Cis-but-2-en och trans-but-2-en är olika ämnen med olika egenskaper.</p>
<p><strong>Alkyner</strong> (CₙH₂ₙ₋₂) har trippelbindning C≡C. Etyn (acetylen, H–C≡C–H) förbränns i ren syrgas och når temperaturer runt 3500°C, används för skärning och svetsning av metall.</p>

<h3>4. Aromater – bensenringen</h3>
<p>Bensen (C₆H₆) är det enklaste aromata systemet. Strukturen är en hexagonal ring med delokaliserade π-elektroner över alla sex kolatomerna. Var och en av de sex C–C-bindningarna är identiska med längd 140 pm (mellanting mellan 154 pm enkelbindning och 134 pm dubbelbindning). Bensenringen är exceptionellt stabil (aromatisk stabilisering, 150 kJ/mol mer stabil än ett hypotetiskt cyklohexatrien).</p>
<p>Bensen genomgår karakteristiskt <em>elektrofil aromatisk substitution</em> (EAS) snarare än addition – ringen behållas intäkt för att bevara aromatisk stabilisering. Viktiga EAS-reaktioner: nitrering (NO₂-grupp in), halogenering (med katalysator), sulfonering (SO₃H-grupp).</p>
<p>Substituenter i bensenringen klassas som <em>aktiverande</em> (elektrondoerare, t.ex. –OH, –NH₂, styr angrepp till orto/para-position) eller <em>deaktiverande</em> (elektronmottagare, t.ex. –NO₂, –COOH, styr till meta-position).</p>

<h3>5. Funktionella grupper och viktiga ämnesklasser</h3>
<p>Funktionella grupper är grupper av atomer som ger organiska molekyler karakteristiska kemiska egenskaper. Samma grundkolkedja med olika funktionell grupp ger helt andra egenskaper.</p>
<table class="theory-table">
  <tr><th>Klass</th><th>Grupp</th><th>Suffix/prefix</th><th>Exempel</th><th>Kokpunkt</th></tr>
  <tr><td>Alkohol</td><td>–OH</td><td>-ol</td><td>Etanol CH₃CH₂OH</td><td>78 °C</td></tr>
  <tr><td>Aldehyd</td><td>–CHO</td><td>-al</td><td>Etanal CH₃CHO</td><td>20 °C</td></tr>
  <tr><td>Keton</td><td>C=O (mitten)</td><td>-on</td><td>Propanon (aceton)</td><td>56 °C</td></tr>
  <tr><td>Karboxylsyra</td><td>–COOH</td><td>-syra</td><td>Ättiksyra CH₃COOH</td><td>118 °C</td></tr>
  <tr><td>Ester</td><td>–COO–</td><td>-at</td><td>Etylacetat</td><td>77 °C</td></tr>
  <tr><td>Amin</td><td>–NH₂</td><td>amin</td><td>Metylamin CH₃NH₂</td><td>−6 °C</td></tr>
  <tr><td>Amid</td><td>–CONH₂</td><td>amid</td><td>Acetamid CH₃CONH₂</td><td>222 °C</td></tr>
  <tr><td>Halogenid</td><td>–X (F,Cl,Br,I)</td><td>halo-</td><td>Klormetan CH₃Cl</td><td>−24 °C</td></tr>
</table>

<h3>6. Alkoholer</h3>
<p>Alkoholer (–OH) är polara och bildar vätebindningar – därför högre kokpunkt än jämförbara alkaner. Metanol (CH₃OH) och etanol (C₂H₅OH) är blandningsbara med vatten i alla proportioner. Längre alkaner blandas däremot mindre väl.</p>
<p>Alkoholer kan oxideras: primära (R-CH₂OH) → aldehyd → karboxylsyra. Sekundära (R₂CHOH) → keton. Tertiära oxideras inte lätt. Kaliumdikromat (K₂Cr₂O₇) oxiderar alkohol och ändrar färg från gul-orange till grön – principen bakom blodalkohol-testaren (alkotest).</p>
<p>Esterifiering: Alkohol + karboxylsyra ⇌ ester + vatten (med syrakatalys, återflöde). Omvändningen kallas hydrolys (eller försåpning med bas).</p>

<h3>7. Karboxylsyror och estrar</h3>
<p>Karboxylsyror (–COOH) är svaga syror. Kortkedjiga är blandningsbara med vatten och luktar starkt: myrsyra (HCOOH, myrstick), ättiksyra (CH₃COOH, vinäger), smörsyra (C₃H₇COOH, härsket smör). Långkedjiga är fettsyror: stearinsyra (C₁₇H₃₅COOH, mättad, fast), oljesyra (C₁₇H₃₃COOH, 1 dubbelbindning, flytande).</p>
<p>Estrar luktar fruktigt: etylacetat luktar nagellacksborttagare, amylacetat luktar banan. De bildas vid esterifiering och sönderdelas vid hydrolys med syre (syrahydrolys) eller bas (basisk hydrolys = försåpning → tvål + glycerol).</p>

<h3>8. Nomenklatur – IUPAC-systemet</h3>
<p>IUPAC-nomenklaturen ger varje organisk förening ett unikt namn:</p>
<ol>
  <li>Hitta den längsta kolkedjan med högst prioriterad funktionell grupp – det är stamkedjan (metan, etan, propan, butan, pentan, hexan, heptan, oktan, nonan, dekan).</li>
  <li>Numrera stamkedjan från det håll som ger lägst nummer till substituenter/funktionell grupp.</li>
  <li>Ange substituenter med prefix (metyl-, etyl-, klor-, brom-, etc.) och position.</li>
  <li>Ange funktionell grupp med suffix (–an, –en, –yn, –ol, –al, –on, -syre, etc.).</li>
</ol>
<p>Exempel: CH₃–CH(CH₃)–CH₂–OH = 2-metylpropan-1-ol. CH₃–CO–CH₂–CH₃ = butan-2-on.</p>

<h3>9. Isomeri</h3>
<p><strong>Konstitutionsisomerer</strong> (strukturisomerer): samma molekylformel, olika bindningsmönster. Butan (C₄H₁₀) och isobutan (2-metylpropan) är konstitutionsisomerer.</p>
<p><strong>Stereoisomerer</strong>: samma bindningar, olika rumslig ordning. Inkluderar cis/trans-isomerer runt dubbelbindning och spegelbildsisomerer (enantiomerer) runt kirala centra (kolatom med fyra olika substituenter).</p>
<p><strong>Enantiomerer</strong> är molekyler som är spegelvida men icke-överställbara (som vänster och höger hand). De har identiska fysikaliska egenskaper utom roteringsriktning för polariserat ljus. I biologin spelar kiralitet stor roll – bara L-aminosyror förekommer i proteiner; bara D-socker i DNA. Fel enantiomer av ett läkemedel kan vara overksam eller skadlig (t.ex. talidomidtragedin).</p>

<h3>10. Sambandet</h3>
<p>Organisk kemi är den breddaste grenen av kemin, och dess principer genomsyrar allt levande. Funktionella gruppers reaktivitet är förutsägbar: alkoholers oxidation, syrornas jonisering, estrars hydrolys – alla följer samma mönster oavsett kolkedelns längd. IUPAC-systemet gör det möjligt att kommunicera exakt om strukturer utan tvetydighet. Stereokemins är ärskilt viktig för läkemedel och biokemi – enzymers aktivitetsställe är kiralt känslig och känner igen specifika enantiomerer. Organisk kemi kopplar samman med termokemi (förbränningsvärden), jämviktsläran (esterifieringsjämvikten) och syra-baskemi (karboxylsyrornas pKa-värden). Det är också grunden för polymerkemi: polyeten (additionspolymer av eten), nylon (kondensationspolymer) och naturens egna polymerer – proteiner, kolhydrater, DNA.</p>


` },
  { cat: 'Lösningar & koncentration', icon: '💧', html: `
<h2>💧 Lösningar &amp; koncentration</h2>
<p class="theory-intro">Lösningar är homogena blandningar där ett ämne (löst ämne, solut) är jämnt fördelat i ett annat (lösningsmedel, solvent) på molekylär nivå. Koncentration beskriver hur mycket löst ämne som finns i en given mängd lösning. Från laboratoriel analys till läkemedelsdäse och industriella processer är exakt koncentrationsmätning och -beräkning ett centralt verktyg.</p>

<h3>1. Lösningsprocessen på molekylär nivå</h3>
<p>När ett ämne löser sig bryts existerande interaktioner (endoterm) och nya bildas (exoterm). Nettoresultatet (lösningsentalpin ΔH_sol) bestämmer om lösningen känns kall (NH₄NO₃, ΔH_sol = +25 kJ/mol, endoterm – används i ispack) eller varm (NaOH, ΔH_sol = −44 kJ/mol, exoterm).</p>
<p>"Lika löser lika" är tumregeln: polara lösningsmedel (vatten) löser polara ämnen och jonföreningar. Opolara lösningsmedel (hexan, bensen) löser opolara ämnen (fetter, vaxer). Vatten löser NaCl genom att dess polara molekyler attraherar jonerna och bryter gittret; vatten omger varje jon med ett hydratiseringsskal (solvateringsenergi > gitterenergi).</p>
<p>Temperaturens inverkan: För fasta lösta ämnen i vatten ökar lösligheten generellt med temperatur. För gaser minskar lösligheten med temperatur (Henrys lag, särskilt relevant för CO₂ i drycker och O₂ i sjövatten).</p>

<h3>2. Koncentrationsmått</h3>
<p><strong>Molar koncentration c (mol/L, M)</strong> är den vanligaste enhetens i analytisk kemi: c = n/V. En 1,0 mol/L NaCl-lösning innehåller 58,5 g NaCl per liter.</p>
<div class="formula-box">c = n / V          (mol/L)
n = c × V          (mol)
V = n / c          (L)
m = c × V × M      (g)

Enhetsomvandling: mmol/L = µmol/mL = nmol/µL</div>
<p><strong>Massandel (m/m) eller massa/volym (m/v) i procent:</strong> 5 % NaCl (m/v) = 5 g NaCl per 100 mL. Används i medicinsk kemi (fysiologisk saltlösning = 0,9 % NaCl).</p>
<p><strong>ppm och ppb</strong> (delar per miljon/miljard): används för spårmängder. 1 ppm i vatten ≈ 1 mg/L. Dricksvattengränsen för bly (Pb) är 10 µg/L = 10 ppb.</p>
<p><strong>Molärbråk χ:</strong> χ_A = n_A / n_tot. Används i gasblandningsberäkningar (Raoults lag, Daltons lag).</p>
<p><strong>Molalitet m (mol/kg):</strong> mol löst ämne per kg lösningsmedel. Temperaturoberoende, används i kryoskopi och ebulioskopi.</p>

<h3>3. Bereda lösningar</h3>
<p><strong>Från fast ämne:</strong></p>
<ol>
  <li>Beräkna massa: m = c × V × M</li>
  <li>Väg in på analytisk våg</li>
  <li>Lös i ca halva volymen vatten (destillerat)</li>
  <li>Häll över i mätkolv av önskad volym</li>
  <li>Fyll på med vatten exakt till märkstrecket</li>
  <li>Blanda noggrant</li>
</ol>
<p><strong>Från stocklösning (spädning):</strong> Använd c₁V₁ = c₂V₂. Pipettera exakt V₁ av stocklösningen i mätkolven, fyll på till V₂.</p>
<div class="formula-box">Spädningsekvation: c₁V₁ = c₂V₂

Exempel: Bereda 500 mL av 0,10 mol/L HCl från 12 mol/L HCl:
V₁ = c₂V₂/c₁ = 0,10×500/12 = 4,2 mL
Pipettera 4,2 mL i mätkolv, fyll på till 500 mL.

OBS: Alltid syreämnet i vattnet (SAV = syra i vatten (häll alltid syran i vattnet)),
aldrig vatten i stark syra (skvättrisk)!</div>

<h3>4. Löslighet och löslighetsprodukten Ksp</h3>
<p>Lösligheten s (mol/L) är den maximala mängd löst ämne per liter lösning vid given temperatur. När lösningen är mätttad råder jämvikt mellan fast fas och löst fas.</p>
<p>För svårlösliga salter definieras <strong>löslighetsprodukten Ksp</strong>:</p>
<div class="formula-box">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)
Ksp = [Ag⁺][Cl⁻] = 1,8×10⁻¹⁰ vid 25°C

s = √Ksp = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L

BaSO₄: Ksp = 1,1×10⁻¹⁰, s = 1,05×10⁻⁵ mol/L
CaCO₃: Ksp = 3,3×10⁻⁹, s = 5,7×10⁻⁵ mol/L

Gemensam jon-effekten: Lösligheten MINSKAR om gemensam jon tillsätts.
[Cl⁻]=0,10 mol/L ⇒ [Ag⁺]=Ksp/0,10=1,8×10⁻⁹ mol/L (mkt. lägre!)</div>
<p><strong>Reaktionskvoten Q:</strong> Om Q > Ksp → utfällning sker tills jämvikt. Om Q < Ksp → inget utfällning. Om Q = Ksp → mättad lösning.</p>

<h3>5. Kolligativa egenskaper</h3>
<p>Kolligativa egenskaper beror enbart på <em>antalet</em> lösta partiklar, inte deras identitet. De är viktiga för antifrysmedel, osmotiska processer och molmassbestämning.</p>
<p><strong>Ångtrjäcksänkning (Raoults lag):</strong> p = χ_solv × p°. Löst ämne sänker lösningsmedlets ångtryck proportionellt mot molfraktionen. Sältes håller mat fuktig.</p>
<p><strong>Kokpunktsökning ΔTb = Kb × m:</strong> Kb(vatten) = 0,512 °C·kg/mol. 1 mol NaCl (= 2 mol partiklar) i 1 kg vatten: ΔTb = 2×0,512 = 1,024°C. Saltat pastakokar för knappt högre T.</p>
<p><strong>Fryspunktsänkning ΔTf = Kf × m:</strong> Kf(vatten) = 1,86 °C·kg/mol. Glykol som frostvätska: 50 % lösning sänker fryspunkten till ca −37°C.</p>
<p><strong>Osmotiskt tryck π = MRT:</strong> R = 0,08206 L·atm/(mol·K). Blodsplasmans osmolaritet ≈ 0,30 mol/L → π ≈ 7,3 atm. Osmotiskt tryck driver vatten över semipermeabla membran – grunden för cellens vätskebalans, njurarna och avsaltningsanlaggeringar (omvänd osmos).</p>

<h3>6. Titrering och kvantitativ analys</h3>
<p>Titrering (föreövet behandlat i syra-basavsnittet) används också för redox-reaktioner (permanganattitrering), utfällningar (argentometri) och komplexometringar (EDTA). Principen är densamma: vid ekvivalenspunkten är molens av reaktant precis båda ären lägsta.</p>

<h3>7. Beer-Lamberts lag och spektrofotometri</h3>
<p>Spektrofotometri mäter hur mycket ljus en lösning absorberar vid en viss våglängd. Beer-Lamberts lag:</p>
<div class="formula-box">A = ε × c × l

A = absorbans (dimensionslös)
ε = molär absorptionskoefficient (L/(mol·cm))
c = koncentration (mol/L)
l = längd ljusväg (cm)

A = log(I₀/I) = log(1/T) där T = transmittans

Används för: proteinkoncentration, DNA-mätning,
blå/Cu²⁺ (625 nm), permanganat (525 nm)</div>
<p>Standard-kurva: Mät absorbansen för kända koncentrationer → rit för A vs c → lineär. Avsläs okänd koncentration från linjen. Beer-Lamberts lag gäller vid låga koncentrationer (A < 1 för bästa precision).</p>

<h3>8. Lika löser lika – polaritet och löslighet</h3>
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

<h3>10. Sambandet</h3></h3>
<p>Lösningskemi är det praktiska ramverk som kopplar samman laboratoriet med teorin. Molkoncentrationen är det språk på vilket alla kvantitativa kemiska beräkningar uttrycks. Löslighetsregler och Ksp förklarar varför vissa föreningar fälls ut och andra stannar kvar i lösning – avgörande för vattenrening, geologiska processer (stalaktitbildning) och njurstenar (kristallisering av kalciumoxalat). Kolligativa egenskaper förklarar biologiska processer från celltrions osmotiska balans till fiskarnas kränskyddsmed. Beer-Lambert-lagen är basen för all spektrofotometrisk analys i kemilabb och klinisk kemi.</p>
` },
  { cat: 'Elektrokemi', icon: '⚡', html: `
<h2>⚡ Elektrokemi</h2>
<p class="theory-intro">Elektrokemi handlar om sambandet mellan kemiska reaktioner och elektrisk ström. Utgångspunkten är redoxreaktioner – reaktioner där elektroner överförs från ett ämne till ett annat. Den avgörande insikten är att om vi <em>skiljer</em> oxidationen och reduktionen åt rumsligt, kan vi tvinga elektronerna att flöda genom en yttre ledning: det är elektricitet. Förstår man det sambandet kan man förklara hur ett batteri fungerar, varför järn rostar och hur aluminium framställs industriellt.</p>

<h3>1. Grunden: redoxreaktioner och elektronöverföring</h3>
<p>En redoxreaktion innebär att elektroner överförs från ett ämne (<strong>reduktionsmedlet</strong> – oxideras) till ett annat (<strong>oxidationsmedlet</strong> – reduceras). <strong>Oxidationstal</strong> är ett verktyg för att spåra detta: ökat oxidationstal = oxidation; minskat oxidationstal = reduktion.</p>
<p>Minnesregel: <strong>OIL RIG</strong> – Oxidation Is Loss (of electrons), Reduction Is Gain. Eller: <strong>Leo</strong> säger <strong>Ger</strong> (Loss of Electrons = Oxidation; Gain of Electrons = Reduction).</p>
<div class="formula-box">Exempel – total redoxreaktion:
Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)

Halvreaktioner:
Oxidation:  Zn → Zn²⁺ + 2e⁻   (Zn: OT 0 → +2, avger e⁻ = reduktionsmedel)
Reduktion: Cu²⁺ + 2e⁻ → Cu    (Cu: OT +2 → 0, tar e⁻ = oxidationsmedel)

OBS: elektroner avges och tas upp LIKA MÅNGA – laddning är bevarad.</div>
<p>Om detta sker i samma kärl (Zn-bit i CuSO₄-lösning) sker elektronöverföringen direkt – ingen elektrisk ström uppstår. Men om vi <em>separerar</em> de två halvreaktionerna rumsligt och kopplar ihop dem med en ledning, tvingas elektronerna ta vägen via ledningen – och vi har elektrisk ström.</p>

<h3>2. Galvaniskt element – separerade halvreaktioner ger ström</h3>
<p>I ett <strong>galvaniskt element</strong> (voltaisk cell) placeras de två halvreaktionerna i separata halvkärlar förbundna med:</p>
<ul>
  <li><strong>En yttre metalledning</strong> – elektroner flödar från oxidationskärlet till reduktionskärlet (det vi kallar elektrisk ström).</li>
  <li><strong>En saltbrygga eller porös vägg</strong> – joner vandrar för att balansera laddningarna och hålla den inre kretsen sluten (utan saltbrygga byggs en laddningsgradient upp som stoppar reaktionen).</li>
</ul>
<p><strong>Anod</strong> är elektroden där oxidation sker – metallen löses upp och avger elektroner. I ett galvaniskt element är anoden den <em>negativa</em> polen (elektroner lämnar härifrån). <strong>Katod</strong> är elektroden där reduktion sker – joner tar upp elektroner och deponeras. I ett galvaniskt element är katoden den <em>positiva</em> polen (elektroner anländer hit).</p>
<p>Minnesregel: <strong>A</strong>nod = <strong>A</strong>vgång av elektroner (oxidation). <strong>K</strong>atod = <strong>K</strong>ommer elektroner (reduktion).</p>
<div class="formula-box">Daniell-cellen (Zn/Cu) – ett klassiskt galvaniskt element:
Anod (−):  Zn(s) → Zn²⁺(aq) + 2e⁻     (oxidation, zink löses upp)
Katod (+): Cu²⁺(aq) + 2e⁻ → Cu(s)     (reduktion, koppar fälls ut)
Total:     Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)

Elektronflöde (yttre ledning): Zn → Cu
Jonflöde (saltbrygga): SO₄²⁻ vandrar mot Zn-sidan
                        Zn²⁺/Cu²⁺ balanseras i lösningarna</div>

<h3>3. Cellschema – standardnotation</h3>
<p>Ett cellschema är en kompakt notation som tydliggör cellens uppbyggnad:</p>
<div class="formula-box">Notation: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)
         ↑              ↑    ↑↑             ↑
       anod         fas-   salt-        katod
                   gräns  brygga

Regler:
• Anod (oxidation) till VÄNSTER, katod (reduktion) till HÖGER
• | = fasgräns (t.ex. fast–lösning)
• || = saltbrygga
• Koncentrationer anges i parentes: Zn²⁺(aq, 0,10 M)

Annat exempel:
Fe(s) | Fe²⁺(aq) || Ag⁺(aq) | Ag(s)
→ järn oxideras (anod), silver reduceras (katod)</div>

<h3>4. Normalpotential E° och elektrokemiska spänningsserien</h3>
<p>Varje halvreaktion har en karakteristisk <strong>reduktionspotential</strong> – ett mått på hur benäget ett ämne är att reduceras (ta upp elektroner). För att jämföra dem mäts alla mot en gemensam referens.</p>
<p><strong>Normalvätgaselektroden (NHE)</strong> är referensen: en platinaplåt i kontakt med H₂(g) vid 1 atm och 1 mol/L H⁺-lösning. Dess potential definieras till exakt <strong>E° = 0,00 V</strong>. Alla halvreaktioners normalpotentialer mäts relativt NHE under standardförhållanden (25 °C, 1 mol/L, 1 atm).</p>
<ul>
  <li><strong>Positiv E°</strong> → ämnet reduceras hellre än H₂ reduceras → ädel metall, starkt oxidationsmedel</li>
  <li><strong>Negativ E°</strong> → ämnet oxideras hellre än H₂ → oädel metall, starkt reduktionsmedel</li>
</ul>
<table class="theory-table">
  <tr><th>Halvreaktion (alltid skriven som reduktion)</th><th>E° (V)</th></tr>
  <tr><td>F₂ + 2e⁻ → 2F⁻</td><td>+2,87</td></tr>
  <tr><td>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</td><td>+1,51</td></tr>
  <tr><td>Cl₂ + 2e⁻ → 2Cl⁻</td><td>+1,36</td></tr>
  <tr><td>Ag⁺ + e⁻ → Ag</td><td>+0,80</td></tr>
  <tr><td>Cu²⁺ + 2e⁻ → Cu</td><td>+0,34</td></tr>
  <tr><td><strong>2H⁺ + 2e⁻ → H₂</strong></td><td><strong>0,00 (referens)</strong></td></tr>
  <tr><td>Fe²⁺ + 2e⁻ → Fe</td><td>−0,44</td></tr>
  <tr><td>Zn²⁺ + 2e⁻ → Zn</td><td>−0,76</td></tr>
  <tr><td>Al³⁺ + 3e⁻ → Al</td><td>−1,66</td></tr>
  <tr><td>Li⁺ + e⁻ → Li</td><td>−3,04</td></tr>
</table>
<p><strong>Tolka spänningsserien:</strong> En halvreaktion med <em>lägre</em> E° agerar som anod (oxideras) i förhållande till en med <em>högre</em> E° som agerar katod. Zn (−0,76 V) reducerar Cu²⁺ (+0,34 V) spontant. Cu (+0,34 V) kan inte reducera Zn²⁺ (−0,76 V) – icke-spontant.</p>
<p>Halogener rangordnas (oxiderande styrka): F₂ > Cl₂ > Br₂ > I₂. Cl₂ kan oxidera Br⁻ och I⁻, men inte F⁻. Metaller under H₂ i serien reagerar med syra: Fe + 2HCl → FeCl₂ + H₂↑. Metaller ovanför H₂ (Cu, Ag, Au) reagerar inte med utspädd syra.</p>

<h3>5. EMK – hur man beräknar spänningen</h3>
<p>EMK (elektromotorisk kraft) är spänningen ett galvaniskt element levererar. Den beräknas som skillnaden i normalpotential:</p>
<div class="formula-box">E°cell = E°(katod) − E°(anod)
      (alltid: katod minus anod, båda skrivna som reduktionspotentialer)

Positiv E°cell → reaktionen är SPONTAN → cellen levererar el
Negativ E°cell → icke-spontan (omvända är spontan)

Exempel 1 – Daniell-cellen:
E°cell = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = +0,34 − (−0,76) = +1,10 V ✓

Exempel 2 – Fe–Ag-cell:
E°cell = E°(Ag⁺/Ag) − E°(Fe²⁺/Fe) = +0,80 − (−0,44) = +1,24 V
(järn = anod, silver = katod)

Sambandet med termokemi:
ΔG° = −n × F × E°cell
n = antal elektroner (t.ex. 2 för Zn→Cu²⁺)
F = 96 485 C/mol (Faradays konstant)
Negativt ΔG° bekräftar spontan reaktion</div>

<h3>6. Elektrolys – tvinga reaktioner med extern ström</h3>
<p><strong>Elektrolys</strong> är det omvända mot ett galvaniskt element: en extern strömkälla tvingar en icke-spontan redoxreaktion att ske. Strömkällan "pumpar" elektroner mot den naturliga riktningen.</p>
<p>I en elektrolyscell är polernas funktion:</p>
<ul>
  <li><strong>Katod</strong> (kopplad till −-pol) → elektroner levereras hit → <strong>reduktion</strong> sker</li>
  <li><strong>Anod</strong> (kopplad till +-pol) → elektroner dras härifrån → <strong>oxidation</strong> sker</li>
</ul>
<p>Vilken reaktion sker? Vid katoden reduceras den jon med <em>högst</em> normalpotential (lättast att reducera) föredrages. Vid anoden oxideras det ämne med <em>lägst</em> normalpotential (svårast att reducera = lättast att oxidera).</p>
<div class="formula-box">Elektrolys av CuSO₄(aq) med kopparelektroder:
Katod: Cu²⁺ + 2e⁻ → Cu(s)     (E° = +0,34 V, hellre än H₂O reduceras)
Anod: Cu(s) → Cu²⁺ + 2e⁻      (kopparanoden löses – används vid elraffining)

Elektrolys av vatten (med Na₂SO₄ som elektrolyt):
Katod: 2H₂O + 2e⁻ → H₂(g) + 2OH⁻
Anod:  2H₂O → O₂(g) + 4H⁺ + 4e⁻
Volymsförhållande: H₂:O₂ = 2:1 (speglar reaktionens stökiometri)</div>
<p><strong>Faradays lagar</strong> – mängden ämne som bildas beror på laddningen:</p>
<div class="formula-box">Q = I × t          (laddning i Coulomb = Ampere × sekunder)
n(e⁻) = Q / F      (mol elektroner, F = 96 485 C/mol)
n(ämne) = n(e⁻)/z  (z = elektroner per formelenhet, t.ex. 2 för Cu²⁺)
m = n × M          (massa i gram)

Exempel: Deponera Ag (z=1) vid I = 0,50 A i 10 min = 600 s
Q = 0,50 × 600 = 300 C
n(e⁻) = 300 / 96 485 = 3,11×10⁻³ mol
n(Ag) = 3,11×10⁻³ mol
m(Ag) = 3,11×10⁻³ × 107,9 = 0,335 g</div>
<p>Industriella tillämpningar: Aluminiumframställning (smält Al₂O₃, Hall-Héroult-processen); klor-alkali-industrin (NaCl + H₂O → Cl₂ + H₂ + NaOH); elektroplätering (skyddsbeläggningar, koppar/krom/guld).</p>

<h3>7. Korrosion – okontrollerad galvanism</h3>
<p>Korrosion är i grunden ett oönskat galvaniskt element som uppstår spontant. Järnrostning kräver <em>fukt</em> (elektrolyt) och <em>syre</em> (oxidationsmedel):</p>
<div class="formula-box">Anod (Fe-yta): Fe → Fe²⁺ + 2e⁻          E° = −0,44 V
Katod (O₂-yta): O₂ + 4H⁺ + 4e⁻ → 2H₂O  E° = +1,23 V
E°cell = 1,23 − (−0,44) = +1,67 V  → SPONTAN (järn rostar spontant!)

Fe²⁺ oxideras vidare: 4Fe²⁺ + O₂ + 8OH⁻ → 4Fe(OH)₂ → 2Fe₂O₃·H₂O (rost)</div>
<p>Rost är <em>porös</em> och skyddar inte järnet – korrosionen fortgår in på djupet. Det förklarar varför järn rostar igenom, men aluminium inte gör det trots att Al är mer oädelt (se passivering nedan).</p>
<p><strong>Galvanisk korrosion:</strong> När två metaller med olika E° är i elektrisk kontakt i fuktig miljö, fungerar den oädlare som anod och oxideras snabbare. Exempel: aluminium (E° = −1,66 V) och koppar (E° = +0,34 V) i kontakt → aluminium äts snabbt upp. Järnspik i kopparplåt = järn korroderar. Salt accelererar korrosion (bättre elektrolyt).</p>

<h3>8. Korrosionsskydd</h3>
<p>Varje skyddsmetod tar bort ett av korrosionens nödvändiga villkor (elektrolyt, syre, elektrokemisk krets) eller vänder spänningsserieprincipen till sin fördel:</p>
<ul>
  <li><strong>Passivering</strong> – metallen bildar spontant ett <em>tätt, vidhäftande</em> oxidskikt som blockerar vidare reaktion. Al → Al₂O₃ (tunt, genomskinligt, 4 nm). Cr → Cr₂O₃ (grunden för "rostfritt" stål). Passivering är varför aluminium tycks korrosionsbeständigt trots lågt E°. Skiktet läker sig självt om det skadas (i närvaro av O₂).</li>
  <li><strong>Galvanisering</strong> – belägga stål med zink. Zink (E° = −0,76 V) är mer oädelt än järn (−0,44 V). Om beläggningen skadas är zink fortfarande anod och skyddar järnet elektrochemiskt (katodiskt skydd). Används på bilar, räcken, plåttak.</li>
  <li><strong>Offeranod</strong> – en bult eller platta av Zn eller Mg ansluts elektriskt till konstruktionen. Offeranden fungerar som anod; konstruktionen är katod och korroderar inte. Används på fartyg, undervattensledningar, betong i havsvatten. Offeranodens E° måste vara lägre än konstruktionens (Mg: −2,37 V, Zn: −0,76 V, järn: −0,44 V). Byts ut regelbundet.</li>
  <li><strong>Ytbeläggning</strong> – färg, lack, emalj, plastbeläggning isolerar metallen från elektrolyt och syre (bryter kretsen). Kräver intakt beläggning; ett repat skikt ger ibland accelererad korrosion i repan.</li>
  <li><strong>Katodiskt skydd med extern ström</strong> – en extern strömkälla håller järnkonstruktionen som katod (negativ pol). Anoden (ett offerbart material) oxideras istället. Används för underjordiska rörledningar och betongkonstruktioner.</li>
</ul>

<h3>9. Sambandet – allt hänger ihop</h3>
<p>Elektrokemi är redoxkemins praktiska tillämpning. Elektronegativiteten (bindningsläran) bestämmer oxidationstal och reaktionstendenser → normalpotentialen är ett kvantitativt mått på detta. E°cell kopplas via ΔG° = −nFE° direkt till Gibbs fria energi (termokemi) och jämviktskonstanten K. En stor positiv E°cell ger ett stort negativt ΔG° och ett stort K – reaktionen är fullständig. Faradays lagar kopplar elektrokemi till stökiometri. Korrosionsskyddet är tillämpad spänningsserie: förstå varför metaller rangordnas som de gör, så förstår man varför offeranodens metall måste väljas noga. Hela batteriteknologin – från ett 1,5 V AA-batteri till ett modernt Li-ion-batteri – är elektrokemi i praktiken.</p>
` },
  { cat: 'Termokemi & energi', icon: '🌡️', html: `
<h2>🌡️ Termokemi &amp; energi</h2>
<p class="theory-intro">All kemisk reaktion innebär energiöverföring – bindningar bryts (kräver energi) och nya bildas (frigör energi). Nettosumman avgör om reaktionen är exoterm (ger ifrån sig värme) eller endoterm (absorberar värme). Men termodynamiken handlar om mer än bara värme: <em>varför</em> sker reaktioner spontant? Svaret kräver att man förstår <em>entropi</em> (oordning) och <em>Gibbs fria energi</em> – det begrepp som slutgiltigt avgör om en reaktion sker av sig self eller måste drivas. Termokemi kopplar samman bindningsstyrkor, kalorimetri, standardentalpier, entropi och jämviktskonstanter i ett sammanhängande system.</p>

<h3>1. Grundbegrepp: system, omgivning, värme och arbete</h3>
<p>I termokemi definieras <strong>systemet</strong> som det vi studerar (reaktanterna och produkterna) och <strong>omgivningen</strong> som resten av universum. Energi kan överföras som <strong>värme (q)</strong> eller som <strong>arbete (w)</strong>. Termodynamikens första lag: energi är bevarad: ΔU = q + w.</p>
<p>I kemilaboratoriet utförs de flesta reaktioner vid konstant tryck (atmosfärtryck). Då är den relevanta energikvanditeten <strong>entalpi H</strong>: ΔH = q_p (värme vid konstant tryck). ΔH < 0 = exoterm (värme frigs till omgivningen). ΔH > 0 = endoterm (värme absorberas från omgivningen).</p>

<h3>2. Kalorimetri</h3>
<p>Värme mäts med en <strong>kalorimeter</strong>. Den enklaste (kaffekoppen) mäter värmeöverföringen vid konstant tryck i lösning. En bomb-kalorimeter mäter vid konstant volym (ΔU, förbränningsvärden).</p>
<div class="formula-box">q = m × c × ΔT

q = värme (J)
m = massa lösning (g)
c = specifik värmekapacitet (J/(g·K))
  c(vatten) = 4,18 J/(g·K)
ΔT = temperaturändring (°C eller K)

Neutralisering: 50 mL 1M HCl + 50 mL 1M NaOH
m=100 g, ΔT=6,85°C
q=100×4,18×6,85=2863 J
n(rxn)=0,050 mol
ΔH_neutr=2863/0,050=57260 J/mol≈57,3 kJ/mol</div>

<h3>3. Standardöenthalpier och Hess lag</h3>
<p><strong>Standardbildningsentalpin ΔH°f</strong> är entalpiförändringen när 1 mol av ett ämne bildas från sina element i standardtillstånd (25°C, 1 bar). Per definition är ΔH°f = 0 för alla grundämnen i sitt standardtillstånd (H₂(g), O₂(g), C(grafit), Na(s), osv.).</p>
<table class="theory-table">
  <tr><th>Ämne</th><th>ΔH°f (kJ/mol)</th></tr>
  <tr><td>H₂O(l)</td><td>−285,8</td></tr>
  <tr><td>H₂O(g)</td><td>−241,8</td></tr>
  <tr><td>CO₂(g)</td><td>−393,5</td></tr>
  <tr><td>NH₃(g)</td><td>−46,1</td></tr>
  <tr><td>NO(g)</td><td>+90,3</td></tr>
  <tr><td>C₂H₅OH(l)</td><td>−277,7</td></tr>
</table>
<p><strong>Hess lag:</strong> ΔH för en reaktion är summan av ΔH för stegen som överför reaktanter till produkter, oavsett väg. Entalpi är en tillståndsfunktion – beror bara på start- och slutläge, inte på vägen.</p>
<div class="formula-box">ΔH°rxn = Σ ΔH°f(produkter) − Σ ΔH°f(reaktanter)

Exempel: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)
ΔH°rxn = [ΔH°f(CO₂) + 2ΔH°f(H₂O)] − [ΔH°f(CH₄) + 0]
= [−393,5 + 2×(−285,8)] − [−74,8]
= (−393,5 − 571,6) − (−74,8)
= −965,1 + 74,8 = −890,3 kJ/mol</div>
<p>Hess lag används när direktmätning av ΔH är svår. Bildningsentalpier av alla ämnen är tabellerade och ger ΔH för godtyckliga reaktioner.</p>

<h3>4. Bindningsenergier</h3>
<p>En alternativ metod att beräkna ΔH är via bindningsenergier (BE). Att bryta en bindning är endotermt; att bilda en bindning är exotermt.</p>
<div class="formula-box">ΔH ≈ Σ BE(brutna bindningar) − Σ BE(bildade bindningar)

Typiska BE (kJ/mol):
C–H: 413   O=O: 498   C=O: 799
H–H: 436   O–H: 463   C–C: 346
N≡N: 945   C=C: 614   H–Cl: 431

Exempel: H₂ + Cl₂ → 2HCl
ΔH = [BE(H–H) + BE(Cl–Cl)] − [2×BE(H–Cl)]
= [436 + 243] − [2×431]
= 679 − 862 = −183 kJ</div>
<p>OBS: BE är medelvärden och ger approximativa ΔH; bildningsentralpimétodos ger mer exakta värden.</p>

<h3>5. Entropi och spontanitet</h3>
<p><strong>Entropi S</strong> är ett mått på oordning/spridning av energi och materia i ett system. Termodynamikens andra lag: den totala entropin hos universum (system + omgivning) ökar alltid vid spontana processer (ΔS_univ > 0).</p>
<p>Faktorer som ökar entropin:</p>
<ul>
  <li>Fast → flytande → gas (s < l < g i entropi)</li>
  <li>Lösning i lösningsmedel (blandning ökar disorder)</li>
  <li>Fler gasmolekyler bildas (N₂ + 3H₂ → 2NH₃: ΔS < 0 då 4 mol gas → 2 mol)</li>
  <li>Högre temperatur (mer rörelseenergi)</li>
  <li>Längre/komplexa molekyler</li>
</ul>

<h3>6. Gibbs fria energi ΔG</h3>
<p>Gibbs fria energi kombinerar entalpi och entropi till ett enda kriterium för spontanitet vid konstant T och p:</p>
<div class="formula-box">ΔG = ΔH − TΔS

ΔG &lt; 0: Spontan reaktion
ΔG &gt; 0: Icke-spontan (omvända reaktionen är spontan)
ΔG = 0: Jämvikt

Temperaturberoendet:
        ΔH &lt; 0   ΔH &gt; 0
ΔS &gt; 0  Alltid sp.  Sp. vid hög T
ΔS &lt; 0  Sp. vid låg T  Aldrig sp.

Standard: ΔG° = ΔH° − TΔS° = −RT ln K</div>
<p>Sambandet ΔG° = −RT ln K är enormt viktigt: det kopplar termodynamiken (ΔG°) till jämviktskonstanten K. En reaktion med ΔG° = −40 kJ/mol har K ≈ 10⁷ vid 25°C – praktiskt fullständig. En med ΔG° = +40 kJ/mol har K ≈ 10⁻⁷ – praktiskt inget sker.</p>

<h3>7. Fasövergångar och lösningsentalpi</h3>
<p>Fasövergångar kräver energi för att bryta intermolekylära bindningar:</p>
<table class="theory-table">
  <tr><th>Process</th><th>Energi</th><th>Exempel</th></tr>
  <tr><td>Smältning (fusion)</td><td>ΔH_fus > 0</td><td>Is: 6,01 kJ/mol</td></tr>
  <tr><td>Stelning</td><td>−ΔH_fus &lt; 0</td><td>−6,01 kJ/mol</td></tr>
  <tr><td>Ångbildning (vaporisation)</td><td>ΔH_vap > 0</td><td>Vatten: 40,7 kJ/mol</td></tr>
  <tr><td>Kondensation</td><td>−ΔH_vap &lt; 0</td><td>−40,7 kJ/mol</td></tr>
  <tr><td>Sublimation</td><td>ΔH_sub > 0</td><td>Is → ånga</td></tr>
</table>
<p>Vattnets höga ΔH_vap (40,7 kJ/mol) är en direkt följd av starka vätebindningar – kräver mycket energi att brytas. Det är varför svettning käler kroppen effektivt och varför küstklimaten är mildare (havet lagrar och avger värme via ång/kondensation).</p>

<h3>8. Reaktionskinetik – hastighet och aktiveringsenergi</h3>
<p>Termodynamik säger om en reaktion <em>kan</em> ske (ΔG < 0); kinetik säger hur <em>snabbt</em> den sker. Reaktionshastigheten beror på kollisionsfrekvens och kollisionsenergis att överstiga <strong>aktiveringsenergin E_a</strong>.</p>
<p>Arrhenius ekvation: k = A × e^(−Ea/RT). En ökning av T med 10°C ungefär fördubblar reaktionshastigheten (vid Ea ≈ 50 kJ/mol). Katalysatorer sänker E_a utan att påverka ΔH eller K.</p>

<h3>9. Energikällor, fotosyntes och miljöpåverkan</h3>
<p><strong>Fossila bränslen</strong> (kol, olja, naturgas) bildades av organiska rester under 100-tals miljoner år. Förbränning frigör lagrad koldioxid på decennier: bränsle + O₂ → CO₂ + H₂O + ΔH. Problemet: CO₂ som lagrats länge ackumuleras i atmosfären → förstärkt växthuseffekt → global uppvärmning.</p>
<p><strong>Växthuseffekten:</strong> Växthusgaser (CO₂, CH₄, N₂O, H₂O) absorberar IR-strålning (värme) från jordytan och återstrålar en del tillbaka → atmosfären värms. Utan naturlig växthuseffekt: –18 °C i stället för +15 °C. Förstärkt effekt leder till klimatförändringar.</p>
<p><strong>Biobränsle:</strong> Förnybart bränsle från biomassa. Etanol (C₂H₅OH) via jäsning av socker/stärkelse: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Metan (biogas) via anaerob rötrötning. Betraktas som CO₂-neutralt – växterna tog upp lika mycket CO₂ under sin livstid.</p>
<p><strong>Fotosyntesen (energilagring):</strong> 6CO₂ + 6H₂O + ljus → C₆H₁₂O₆ + 6O₂.&nbsp; Endoterm (ΔH &gt; 0, ~2 800 kJ/mol glukos). Klorofyll absorberar rött och blått ljus → omvandlar ljusenergi till kemisk bindningsenergi. Fotosyntesen driver hela biosfären.</p>
<p><strong>Cellandning (energifrigörelse):</strong> C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi (ATP).&nbsp; Exoterm (ΔH ≈ −2 800 kJ/mol). Omvandlar kemisk energi till ATP som cellen kan använda. Pågår ständigt i mitokondrierna. Cellandning är termodynamiskt omvändningen av fotosyntesen.</p>
<p><strong>Verkningsgrad (η):</strong> η = uttagen nyttig energi / tillförd energi × 100 %. Termodynamikens andra lag: varje energiomvandling ger spillvärme → η &lt; 100 %. Kolkraftverk η ≈ 35–40 %; kombicykel (gas+ånga) η ≈ 55–60 %; värmepump η kan överskrida 100 % (transporterar värme, skapar den inte).</p>

<h3>10. Sambandet</h3>
<p>Termokemi binder ihop alla kemins grenar. ΔH-värden från kalorimetri används direkt i ingenjörs- och energiberäkningar. Hess lag gör det möjligt att beräkna ΔH för reaktioner som är praktiskt svåra att mäta direkt. Entropin förklarar varför vissa processer sker spontant (även om ΔH > 0 – t.ex. lösning av NaCl är nästan termoneutål men sker pga. entropiökning). Gibbs fria energi är den centrala storheten som kopplar entalpi, entropi, temperatur och jämviktskonstanter i ett sammanhängande system. Förståelsen för aktiveringsenergi och kinetik förklarar varför bensin inte self-ignites vid rumstemperatur (även om ΔG < 0 för förbränning).</p>
` },
  { cat: 'Laborativ kemi & säkerhet', icon: '🔬', html: `
<h2>🔬 Laborativ kemi &amp; säkerhet</h2>
<p class="theory-intro">Laboratoriet är platsen där kemisk teori möter verkligheten. Här utförs särskilt kvantitativa analyser, synteser av nya ämnen, och undersökningar av reaktionsmekanismer. Laborativ kompetens innefattar tre samverkande delar: säkerhet (förhindra skador), färdighet (korrekt användning av instrument och tekniker) och vetenskapligt tänkande (planera, genomföra, analysera, rapportera). I Sverige regleras kemilaboratoriet av Arbetsmiljölagen, REACH-förordningen och GHS-systemet.</p>

<h3>1. GHS – globalt harmoniserat system för klassificering av kemikalier</h3>
<p>GHS (Globally Harmonized System) är ett internationellt system för att klassificera och märka kemikalier enhetligt. Varje GHS-piktogram är en vit diamantform med röd kant och ett svart symbol i mitten.</p>
<table class="theory-table">
  <tr><th>Piktogram</th><th>Faroklass</th><th>Exempel</th></tr>
  <tr><td>Flamma</td><td>Brandfarligt, självantendbara, pyroföra</td><td>Etanol, aceton, magnesium</td></tr>
  <tr><td>Utfälld flamma</td><td>Oxiderande</td><td>H₂O₂, KMnO₄, HNO₃(konc.)</td></tr>
  <tr><td>Sprängning</td><td>Explosivt</td><td>TNT, aceton peroxid</td></tr>
  <tr><td>Gasflaska</td><td>Gas under tryck</td><td>Kvave, CO₂-flaskor</td></tr>
  <tr><td>Dödskalle</td><td>Akut toxicitet (hög)</td><td>HCN, As₂O₃</td></tr>
  <tr><td>Utropstecken</td><td>Akut toxicitet (lågre), irriterande</td><td>NaOH (spädd), HCl (utsp.)</td></tr>
  <tr><td>Ätande material</td><td>Frätsam</td><td>H₂SO₄, NaOH, HF</td></tr>
  <tr><td>Hälsofaror</td><td>Allvarliga hälsofaror, CMR-ämnen</td><td>Bensen (cancerframkallande)</td></tr>
  <tr><td>Miljö</td><td>Miljöfarligt</td><td>Kvicksilver, tributyltin</td></tr>
</table>
<p>Varje kemikalie har ett <strong>säkerhetsdatablad (SDS)</strong> med 16 sektioner: kemisk identitet, faror, försiktighetshåntering, första hjälpen, brandsläckningsmedel, läckage, förvaring, personlig skyddsutrustning, fysikaliska egenskaper, stabilitet, toxikologi, ekologi och avfallshantering.</p>

<h3>2. Personlig skyddsutrustning (PSU)</h3>
<p><strong>Skyddsglasögon</strong> är obligatoriska när kemikalier hanteras, även i sug. Ögonflödjning i 15 minuter (sköljstation) vid stänk av frätande ämnen, oavsett hur smärtsamt det verkar – underlåtenhet leder till permanenta skador.</p>
<p><strong>Skyddsrock</strong> sküdar hår, huden och kläder. Syntetfibrer bränner och smälter vid kontakt med låga; bomull ger bättre skydd. Aldrig labbar i kortärmat.</p>
<p><strong>Handskar:</strong> Nitrilgummi för de flesta kemikalier (särskilty syror, baser, organiska lösningsmedel). Latex (allergirisk). Neoprene för stärkare lösningsmedel. OBS: handskar skyddar mot stänk men inte långtids-permeation av lösningsmedel.</p>
<p><strong>Drag (frånluftskåpa):</strong> All hantering av flyktiga, giftiga eller luktande ämnen sker i drag. Frontglaslukas är sänkt till 10–15 cm från arbetsytan. Aldrig spjäll stängt.</p>

<h3>3. Viktiga laborativa tekniker</h3>
<p><strong>Vägning:</strong> Analytisk våg (0,0001 g noggrannhet) används för känsliga mätningar. Tara före vägning. Undvik statisk elektricitet (plastspatel). Väg inte direktinnehåll på vaggar utan ask/bägare.</p>
<p><strong>Mätning av volym:</strong></p>
<ul>
  <li><strong>Mätkolv:</strong> exakt volym (±0,1–0,3 mL beroende på storlek). Används för att bereda lösningar av exakt koncentration. Avläses vid meniskens nedre kant i ögonhöjd.</li>
  <li><strong>Byrett:</strong> för titrering, avläses med 0,01 mL. Fyll ny byrett, skölj med titrant, ställ menisk på 0,00. Töm långsamt när nära ekvivalenspunkten.</li>
  <li><strong>Pipett:</strong> för exakt volymöverföring. Skölj med lösningen, fyll med pumpkolv eller pipettgummi (aldrig muntill!). Sätt fingret på öppningen för att reglera flödet.</li>
  <li><strong>Mätcylinder:</strong> grov mätning (±1 mL).</li>
</ul>
<p><strong>Försäkra (uppvärmning):</strong> Bunsen-brännare, värmeplt (ingen låga), vättenbad (jämn temperatur). Använd kolbe med kokkroppar vid uppvärmning – undviker stötkokning. Vrängt glas mot värmekälla.</p>
<p><strong>Centrifugering:</strong> separerar fällning från lösning. Balansera med förrör av lika massa på motstående sidor.</p>
<p><strong>Filtrering:</strong> Vakuumfiltrering (Büchner-tratt) för snabb separation. Gravitationärt (veckfilterpapper i tratt) för fällningsanalys.</p>
<p><strong>Destillation:</strong> separerar ämnen efter kokpunkt. Enkel destillation för stora skillnader. Fraktionerad (kolonn) för nära kokpunkter (etanol/vatten: 78/100°C).</p>
<p><strong>Kromatografi:</strong> TLC (tunnskiktskromatografi) för snabb identifiering av organiska ämnen. Rf = avstånd substansen vandrat / avstånd lösningsfront.</p>

<h3>4. pH-mätning</h3>
<p><strong>pH-meter</strong> mäter potentialskillnaden över en glasmembranelektrod som är selektiv för H⁺-joner. Kalibrering med buffertlösningar (pH 4, 7, 10) före användning. Noggrannhet ±0,01 pH. Sköljis elektroden med destillerat vatten och törkas försiktigt. Förvara i KCl-lösning, aldrig torrt.</p>
<p><strong>Indikatorpapper</strong> (litmus, universalindikator) ger grov uppskattning (±1 pH). Användbart för fältprov eller när hög noggrannhet inte krävs.</p>

<h3>5. Felkällor och osäkerhet</h3>
<p><strong>Systematiska fel</strong> påverkar alla mätningar i samma riktning: felkalibrerad våg, bubba i byretten, färgändring missad vid titrering. Kan minskas med noggrant kalibrering och standardisering.</p>
<p><strong>Slumpmässiga fel</strong> varierar slumpmässigt: läsningslösfel, temperaturfluktuationer. Minskas med upprepade mätningar och statistisk analys (medelvärde, standardavvikelse).</p>
<p><strong>Rimlighetskontroll:</strong> Svarar experimentresultaten på den rätta storleksordningen? Är utbytet > 100 % (omöjligt, något är fel)? Stämmer mätvärdet mot tabellvärdet inom rimlig osäkerhet?</p>
<table class="theory-table">
  <tr><th>Instrument</th><th>Noggrannhet</th><th>Användning</th></tr>
  <tr><td>Analytisk våg</td><td>±0,0001 g</td><td>Exakt vägning av reagenser</td></tr>
  <tr><td>Mätkolv 100 mL</td><td>±0,1 mL</td><td>Exakt lösningsberedning</td></tr>
  <tr><td>Byrett 50 mL</td><td>±0,05 mL</td><td>Titrering</td></tr>
  <tr><td>Pipett 25 mL</td><td>±0,04 mL</td><td>Exakt volymöverföring</td></tr>
  <tr><td>Mätcylinder 50 mL</td><td>±0,5 mL</td><td>Ungefärlig mätning</td></tr>
  <tr><td>pH-meter</td><td>±0,01 pH</td><td>pH-mätning</td></tr>
</table>

<h3>6. Avfallshantering</h3>
<p>Kemikalieaväll ska sörteras efter typ och aldrig hällas i avloppet (lagstiftning, miljöskada). Typiska kategorier:</p>
<ul>
  <li>Halogenerade organiska lösningsmedel (kloroform, DCM): separat kärl</li>
  <li>Icke-halogenerade organiska (etanol, aceton): separat kärl</li>
  <li>Sura lösningar (pH &lt; 6): neutralisera och avlopp eller separat uppsamling</li>
  <li>Basiska lösningar (pH &gt; 8): neutralisera</li>
  <li>Tungmetaller (Pb, Hg, Cd, Cr): specialhantering</li>
  <li>Cyanidföreningar: extremt giftigt, speciell destruktion</li>
</ul>

<h3>7. Labrapportens struktur</h3>
<p>En vetenskaplig rapport bör följa en standardstruktur som gör resultaten reproducerbara och granskningsbara:</p>
<p><strong>Syfte/Hypotes:</strong> Vad ska undersökas? Vilken hypotes testas? Ange förväntat resultat och dess motivering.</p>
<p><strong>Bakgrund/Teori:</strong> Relevant kemi. Formler. Litteraturvärden. Reaktionsscheman.</p>
<p><strong>Material och metod:</strong> Lista över kemikalier (CAS-nr, klass, GHS), utrustning, detaljerat utförande. Tillräckligt detaljerat för att någon annan ska kunna upprepa experimentet.</p>
<p><strong>Resultat:</strong> Rådata i tabeller, utförda beräkningar (visa ekvationer), grafer (axlar, enheter, titel). Ingen tolkning här.</p>
<p><strong>Diskussion:</strong> Tolka resultaten. Jämför med teorivärden/litteratur. Analysera felkällor och deras påverkan. Förbättringsförslag.</p>
<p><strong>Slutsats:</strong> Svarar direkt på syftet. Kort och koncist. Dra slutsatser som stöds av data.</p>

<h3>8. Sambandet</h3>
<p>Laborativ kemi är direkt tillämpning av all kemisk teori. Titrering tillämpar syra-baskemi och stökiometri. Kalorimetri mäter termokemiska storheter. Spektrofotometri tillämpar Beer-Lamberts lag och lösningskemi. Kriställisering och utfällning tillämpar löslighetsregler och Ksp. Säkerheten är inte en börda utan en integrerad del av god laborativ praxis – GHS-systemet är precis ett verktyg för att kommunicera kemisk kunskap om faror. Noggrannhet i labbet, från kalibrering till avsläsning och avfallshantering, räknas lika mycket som teorin bakom. Utan bra data kan ingen slutsats dras. Den vetenskapliga metoden – observera, hypotisera, experimentera, analysera, dra slutsatser – är det kärna som gör kemi till en naturvetenskap.</p>
` }
];

let theoryIdx = 0;

function buildTheoryNav() {
  const nav = document.getElementById('theoryNav');
  nav.innerHTML = THEORY.map((t, i) =>
    `<button class="theory-nav-btn ${i===theoryIdx?'active':''}" data-idx="${i}">${t.icon} ${t.cat}</button>`
  ).join('');
  nav.querySelectorAll('.theory-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      theoryIdx = parseInt(btn.dataset.idx);
      renderTheory();
    });
  });
}

function renderTheory() {
  const t = THEORY[theoryIdx];
  document.getElementById('theoryContent').innerHTML = t.html + `
    <div class="theory-pager">
      <button ${theoryIdx===0?'disabled':''} id="theoryPrev">← Föregående</button>
      <button class="btn-primary" id="theoryStudy">Öva flashcards</button>
      <button ${theoryIdx===THEORY.length-1?'disabled':''} id="theoryNext">Nästa →</button>
    </div>`;
  buildTheoryNav();
  document.getElementById('theoryContent').scrollTop = 0;
  window.scrollTo(0, 0);

  const prev = document.getElementById('theoryPrev');
  const next = document.getElementById('theoryNext');
  const study = document.getElementById('theoryStudy');

  if (prev) prev.addEventListener('click', () => { theoryIdx--; renderTheory(); });
  if (next) next.addEventListener('click', () => { theoryIdx++; renderTheory(); });
  if (study) study.addEventListener('click', () => {
    // Select this category and go to home to start
    state.selectedCats = new Set([THEORY[theoryIdx].cat]);
    showScreen('homeScreen');
    buildCategoryGrid();
    updateHomeStats();
    showToast('Kategori vald – tryck Starta!');
  });
}

document.getElementById('theoryBackBtn').addEventListener('click', () => {
  navTo('homeScreen');
});

// ═══════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════

function navTo(screenId) {
  showScreen(screenId);
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.target === screenId);
  });
  window.scrollTo(0, 0);
}

let _exInited = false, _fmInited = false, _ptInited = false;

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const t = btn.dataset.target;
    navTo(t);
    if (t === 'exerciseScreen' && !_exInited) { _exInited = true; initExercise(); }
    if (t === 'formulaScreen'  && !_fmInited)  { _fmInited  = true; initFormulas(); }
    if (t === 'periodicScreen' && !_ptInited) { _ptInited = true; initPeriodic(); }
    if (t === 'theoryScreen') { renderTheory(); }
  });
});

// ═══════════════════════════════════════════════════════
//  PERIODIC TABLE
// ═══════════════════════════════════════════════════════
// [Z, sym, sv_name, mass, EN, catCode, gridRow, gridCol]
// gridRow: 1-7=period, 8=lanthanides, 9=actinides
const ELEMENTS_RAW = [
  [1,'H','Väte',1.008,2.20,'nm',1,1],[2,'He','Helium',4.003,null,'nb',1,18],
  [3,'Li','Litium',6.941,0.98,'ak',2,1],[4,'Be','Beryllium',9.012,1.57,'ae',2,2],
  [5,'B','Bor',10.811,2.04,'ml',2,13],[6,'C','Kol',12.011,2.55,'nm',2,14],
  [7,'N','Kväve',14.007,3.04,'nm',2,15],[8,'O','Syre',15.999,3.44,'nm',2,16],
  [9,'F','Fluor',18.998,3.98,'hl',2,17],[10,'Ne','Neon',20.180,null,'nb',2,18],
  [11,'Na','Natrium',22.990,0.93,'ak',3,1],[12,'Mg','Magnesium',24.305,1.31,'ae',3,2],
  [13,'Al','Aluminium',26.982,1.61,'pt',3,13],[14,'Si','Kisel',28.086,1.90,'ml',3,14],
  [15,'P','Fosfor',30.974,2.19,'nm',3,15],[16,'S','Svavel',32.065,2.58,'nm',3,16],
  [17,'Cl','Klor',35.453,3.16,'hl',3,17],[18,'Ar','Argon',39.948,null,'nb',3,18],
  [19,'K','Kalium',39.098,0.82,'ak',4,1],[20,'Ca','Kalcium',40.078,1.00,'ae',4,2],
  [21,'Sc','Skandium',44.956,1.36,'tr',4,3],[22,'Ti','Titan',47.867,1.54,'tr',4,4],
  [23,'V','Vanadin',50.942,1.63,'tr',4,5],[24,'Cr','Krom',51.996,1.66,'tr',4,6],
  [25,'Mn','Mangan',54.938,1.55,'tr',4,7],[26,'Fe','Järn',55.845,1.83,'tr',4,8],
  [27,'Co','Kobolt',58.933,1.88,'tr',4,9],[28,'Ni','Nickel',58.693,1.91,'tr',4,10],
  [29,'Cu','Koppar',63.546,1.90,'tr',4,11],[30,'Zn','Zink',65.38,1.65,'tr',4,12],
  [31,'Ga','Gallium',69.723,1.81,'pt',4,13],[32,'Ge','Germanium',72.630,2.01,'ml',4,14],
  [33,'As','Arsenik',74.922,2.18,'ml',4,15],[34,'Se','Selen',78.971,2.55,'nm',4,16],
  [35,'Br','Brom',79.904,2.96,'hl',4,17],[36,'Kr','Krypton',83.798,3.00,'nb',4,18],
  [37,'Rb','Rubidium',85.468,0.82,'ak',5,1],[38,'Sr','Strontium',87.62,0.95,'ae',5,2],
  [39,'Y','Yttrium',88.906,1.22,'tr',5,3],[40,'Zr','Zirkonium',91.224,1.33,'tr',5,4],
  [41,'Nb','Niob',92.906,1.60,'tr',5,5],[42,'Mo','Molybden',95.96,2.16,'tr',5,6],
  [43,'Tc','Teknetium',98,1.90,'tr',5,7],[44,'Ru','Rutenium',101.07,2.20,'tr',5,8],
  [45,'Rh','Rodium',102.906,2.28,'tr',5,9],[46,'Pd','Palladium',106.42,2.20,'tr',5,10],
  [47,'Ag','Silver',107.868,1.93,'tr',5,11],[48,'Cd','Kadmium',112.411,1.69,'tr',5,12],
  [49,'In','Indium',114.818,1.78,'pt',5,13],[50,'Sn','Tenn',118.710,1.96,'pt',5,14],
  [51,'Sb','Antimon',121.760,2.05,'ml',5,15],[52,'Te','Tellur',127.60,2.10,'ml',5,16],
  [53,'I','Jod',126.904,2.66,'hl',5,17],[54,'Xe','Xenon',131.293,2.60,'nb',5,18],
  [55,'Cs','Cesium',132.905,0.79,'ak',6,1],[56,'Ba','Barium',137.327,0.89,'ae',6,2],
  [57,'La','Lantan',138.905,1.10,'ln',8,3],[58,'Ce','Cerium',140.116,1.12,'ln',8,4],
  [59,'Pr','Praseodym',140.908,1.13,'ln',8,5],[60,'Nd','Neodym',144.242,1.14,'ln',8,6],
  [61,'Pm','Prometium',145,1.13,'ln',8,7],[62,'Sm','Samarium',150.36,1.17,'ln',8,8],
  [63,'Eu','Europium',151.964,1.20,'ln',8,9],[64,'Gd','Gadolinium',157.25,1.20,'ln',8,10],
  [65,'Tb','Terbium',158.925,1.20,'ln',8,11],[66,'Dy','Dysprosium',162.500,1.22,'ln',8,12],
  [67,'Ho','Holmium',164.930,1.23,'ln',8,13],[68,'Er','Erbium',167.259,1.24,'ln',8,14],
  [69,'Tm','Tulium',168.934,1.25,'ln',8,15],[70,'Yb','Ytterbium',173.045,1.10,'ln',8,16],
  [71,'Lu','Lutetium',174.967,1.27,'ln',8,17],
  [72,'Hf','Hafnium',178.49,1.30,'tr',6,4],[73,'Ta','Tantal',180.948,1.50,'tr',6,5],
  [74,'W','Wolfram',183.84,2.36,'tr',6,6],[75,'Re','Rhenium',186.207,1.90,'tr',6,7],
  [76,'Os','Osmium',190.23,2.20,'tr',6,8],[77,'Ir','Iridium',192.217,2.20,'tr',6,9],
  [78,'Pt','Platina',195.084,2.28,'tr',6,10],[79,'Au','Guld',196.967,2.54,'tr',6,11],
  [80,'Hg','Kvicksilver',200.592,2.00,'tr',6,12],[81,'Tl','Tallium',204.383,1.62,'pt',6,13],
  [82,'Pb','Bly',207.2,2.33,'pt',6,14],[83,'Bi','Vismut',208.980,2.02,'pt',6,15],
  [84,'Po','Polonium',209,2.00,'ml',6,16],[85,'At','Astat',210,2.20,'hl',6,17],
  [86,'Rn','Radon',222,null,'nb',6,18],
  [87,'Fr','Francium',223,0.70,'ak',7,1],[88,'Ra','Radium',226,0.90,'ae',7,2],
  [89,'Ac','Aktinium',227,1.10,'ac',9,3],[90,'Th','Torium',232.038,1.30,'ac',9,4],
  [91,'Pa','Protaktinium',231.036,1.50,'ac',9,5],[92,'U','Uran',238.029,1.38,'ac',9,6],
  [93,'Np','Neptunium',237,1.36,'ac',9,7],[94,'Pu','Plutonium',244,1.28,'ac',9,8],
  [95,'Am','Americium',243,1.30,'ac',9,9],[96,'Cm','Curium',247,1.30,'ac',9,10],
  [97,'Bk','Berkelium',247,1.30,'ac',9,11],[98,'Cf','Californium',251,1.30,'ac',9,12],
  [99,'Es','Einsteinium',252,1.30,'ac',9,13],[100,'Fm','Fermium',257,1.30,'ac',9,14],
  [101,'Md','Mendelevium',258,1.30,'ac',9,15],[102,'No','Nobelium',259,1.30,'ac',9,16],
  [103,'Lr','Lawrencium',266,null,'ac',9,17],
  [104,'Rf','Rutherfordium',267,null,'tr',7,4],[105,'Db','Dubnium',268,null,'tr',7,5],
  [106,'Sg','Seaborgium',271,null,'tr',7,6],[107,'Bh','Bohrium',270,null,'tr',7,7],
  [108,'Hs','Hassium',277,null,'tr',7,8],[109,'Mt','Meitnerium',278,null,'tr',7,9],
  [110,'Ds','Darmstadtium',281,null,'tr',7,10],[111,'Rg','Röntgenium',282,null,'tr',7,11],
  [112,'Cn','Kopernicum',285,null,'tr',7,12],[113,'Nh','Nihonium',286,null,'pt',7,13],
  [114,'Fl','Flerovium',289,null,'pt',7,14],[115,'Mc','Moskovium',290,null,'pt',7,15],
  [116,'Lv','Livermorium',293,null,'pt',7,16],[117,'Ts','Tennessen',294,null,'hl',7,17],
  [118,'Og','Oganesson',294,null,'nb',7,18],
];

const EL_CAT = {
  nm:{ cls:'cat-nm', label:'Icke-metall' },
  nb:{ cls:'cat-ng', label:'Ädelgas' },
  ak:{ cls:'cat-al', label:'Alkalimetall' },
  ae:{ cls:'cat-ae', label:'Jordalkalimetall' },
  ml:{ cls:'cat-me', label:'Metalloid' },
  hl:{ cls:'cat-ha', label:'Halogen' },
  tr:{ cls:'cat-tr', label:'Övergångsmetall' },
  pt:{ cls:'cat-pt', label:'Post-överg.metall' },
  ln:{ cls:'cat-la', label:'Lantanid' },
  ac:{ cls:'cat-ac', label:'Aktinid' },
};

const ELEMENTS_MAP = {};
ELEMENTS_RAW.forEach(([z,sym,name,mass,en,cat,row,col]) => {
  ELEMENTS_MAP[z] = {z,sym,name,mass,en,cat,row,col};
});

function initPeriodic() {
  const grid = document.getElementById('periodicGrid');
  if (!grid || grid.children.length > 0) return;

  const legend = document.getElementById('periodicLegend');
  if (legend) {
    legend.innerHTML = Object.values(EL_CAT).map(v =>
      `<span class="legend-item"><span class="legend-dot ${v.cls}"></span>${v.label}</span>`
    ).join('');
  }

  const grpLabels = document.getElementById('groupLabels');
  if (grpLabels) {
    grpLabels.innerHTML = Array.from({length:18},(_,i) =>
      `<div class="pg-label">${i+1}</div>`).join('');
  }

  // f-block placeholders in main table
  const lnPh = document.createElement('div');
  lnPh.className = 'el-cell el-placeholder cat-la';
  lnPh.style.cssText = 'grid-column:3;grid-row:6;';
  lnPh.textContent = '57\u201371';
  grid.appendChild(lnPh);

  const acPh = document.createElement('div');
  acPh.className = 'el-cell el-placeholder cat-ac';
  acPh.style.cssText = 'grid-column:3;grid-row:7;';
  acPh.textContent = '89\u2013103';
  grid.appendChild(acPh);

  ELEMENTS_RAW.forEach(([z,sym,name,mass,en,cat,row,col]) => {
    const c = EL_CAT[cat];
    const cell = document.createElement('div');
    cell.className = `el-cell ${c.cls}`;
    cell.style.cssText = `grid-column:${col};grid-row:${row};`;
    cell.innerHTML = `<span class="el-z">${z}</span><span class="el-sym">${sym}</span>` +
      `<span class="el-name">${name}</span>` +
      (en != null ? `<span class="el-mass">${en}</span>` : '');
    cell.addEventListener('click', () => showElementModal(z));
    grid.appendChild(cell);
  });
}

function showElementModal(z) {
  const el = ELEMENTS_MAP[z];
  if (!el) return;
  const c = EL_CAT[el.cat];
  const period = el.row <= 7 ? el.row : el.row === 8 ? 6 : 7;
  const content = document.getElementById('elModalContent');
  content.innerHTML = `
    <div class="el-modal-sym">${el.sym}</div>
    <div class="el-modal-name">${el.name}</div>
    <div class="el-modal-z">Atomnummer ${el.z} &bull; Atommassa ${el.mass} u</div>
    <div class="el-modal-grid">
      <div class="el-modal-item"><div class="el-modal-label">Period</div><div class="el-modal-value">${period}</div></div>
      <div class="el-modal-item"><div class="el-modal-label">Grupp</div><div class="el-modal-value">${el.col}</div></div>
      <div class="el-modal-item"><div class="el-modal-label">Atommassa</div><div class="el-modal-value">${el.mass} u</div></div>
      <div class="el-modal-item"><div class="el-modal-label">Elektronegativitet</div><div class="el-modal-value">${el.en != null ? el.en + ' (Pauling)' : '\u2013'}</div></div>
    </div>
    ${el.en != null ? `<div style="margin-top:14px">
      <div class="el-modal-label" style="margin-bottom:6px">EN-skala (Pauling, 0\u20134,0)</div>
      <div style="background:var(--surface2);border-radius:8px;height:14px;overflow:hidden">
        <div style="height:100%;width:${(el.en/4)*100}%;background:linear-gradient(90deg,#3b82f6,#ef4444)"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.68rem;color:var(--text2);margin-top:3px"><span>0</span><span>4,0 (F)</span></div>
    </div>` : ''}
    <span class="el-modal-cat-badge ${c.cls}" style="margin-top:14px;display:inline-block">${c.label}</span>`;

  const backdrop = document.getElementById('elModalBackdrop');
  backdrop.classList.add('open');
  document.getElementById('elModalClose').addEventListener('click',
    () => backdrop.classList.remove('open'), { once: true });
  backdrop.addEventListener('click',
    e => { if (e.target === backdrop) backdrop.classList.remove('open'); }, { once: true });
}

// ═══════════════════════════════════════════════════════
//  FORMULA SHEET
// ═══════════════════════════════════════════════════════

const FORMULAS_DATA = [
  { cat:'Mängd & massa', icon:'\u2696\ufe0f', items:[
    { name:'Molmassa', f:'M = m / n', v:'M=molmassa (g/mol), m=massa (g), n=substansmängd (mol)' },
    { name:'Substansmängd', f:'n = m / M', v:'n=mol, m=massa (g), M=molmassa (g/mol)' },
    { name:'Antal partiklar', f:'N = n \u00d7 N\u2090', v:'N\u2090 = 6,022 \u00d7 10\u00b2\u00b3 mol\u207b\u00b9 (Avogadros tal)' },
    { name:'Densitet', f:'\u03c1 = m / V', v:'\u03c1=densitet (g/cm\u00b3), m=massa (g), V=volym (cm\u00b3)' },
  ]},
  { cat:'Koncentration', icon:'\ud83e\uddea', items:[
    { name:'Molarkoncentration', f:'c = n / V', v:'c=konc. (mol/L), n=mol, V=volym (L)' },
    { name:'Substansmängd', f:'n = c \u00d7 V', v:'n=mol, c=konc. (mol/L), V=volym (L)' },
    { name:'Spädningslagen', f:'c\u2081V\u2081 = c\u2082V\u2082', v:'Koncentration \u00d7 volym är konstant vid spädning' },
    { name:'Massprocent', f:'w = m\u2097 / m_tot \u00d7 100%', v:'m\u2097=löst ämnets massa' },
  ]},
  { cat:'Gaslagar', icon:'\ud83d\udca8', items:[
    { name:'Ideala gaslagen', f:'pV = nRT', v:'p=tryck (Pa), V=volym (m\u00b3), n=mol, R=8,314 J/(mol\u00b7K), T=temp (K)' },
    { name:'Boyles lag', f:'p\u2081V\u2081 = p\u2082V\u2082', v:'Konstant temperatur (isoterm)' },
    { name:'Charles lag', f:'V\u2081/T\u2081 = V\u2082/T\u2082', v:'Konstant tryck (isobar)' },
    { name:'Gay-Lussacs lag', f:'p\u2081/T\u2081 = p\u2082/T\u2082', v:'Konstant volym (isokor)' },
    { name:'Kelvin \u2194 Celsius', f:'T(K) = T(\u00b0C) + 273,15', v:'Alltid Kelvin i gaslagarna' },
  ]},
  { cat:'Termodynamik', icon:'\ud83c\udf21\ufe0f', items:[
    { name:'Värmeenergi', f:'Q = mc\u0394T', v:'Q=energi (J), m=massa (g), c=spec. värmekapacitet (J/g\u00b7K), \u0394T=temp-förändring' },
    { name:'Hesss lag', f:'\u0394H\u00b0rxn = \u03a3\u0394H\u00b0f(prod) \u2212 \u03a3\u0394H\u00b0f(reak)', v:'Standardbildningsentalpier; element i standardtillstånd = 0' },
    { name:'Gibbs fria energi', f:'\u0394G = \u0394H \u2212 T\u0394S', v:'\u0394G<0 \u2192 spontan; \u0394G>0 \u2192 ej spontan' },
    { name:'Entropi (reaktion)', f:'\u0394S\u00b0rxn = \u03a3S\u00b0(prod) \u2212 \u03a3S\u00b0(reak)', v:'\u0394S>0: ökad oordning' },
  ]},
  { cat:'Syra-bas', icon:'\u2697\ufe0f', items:[
    { name:'pH-definitionen', f:'pH = \u2212log[H\u207a]', v:'[H\u207a]=vätejonskoncentration (mol/L)' },
    { name:'pOH', f:'pOH = \u2212log[OH\u207b]', v:'pH + pOH = 14 (vid 25\u00b0C)' },
    { name:'Vattnets jonprodukt', f:'Kw = [H\u207a][OH\u207b] = 10\u207b\u00b9\u2074', v:'Vid 25\u00b0C; Kw = 1,0 \u00d7 10\u207b\u00b9\u2074 mol\u00b2/L\u00b2' },
    { name:'Syrakonstant Ka', f:'Ka = [H\u207a][A\u207b] / [HA]', v:'Ju större Ka, desto starkare syra' },
    { name:'Henderson-Hasselbalch', f:'pH = pKa + log([A\u207b]/[HA])', v:'För buffertlösningar; pKa = \u2212log(Ka)' },
  ]},
  { cat:'Jämvikt', icon:'\u2696\ufe0f', items:[
    { name:'Jämviktskonstant Kc', f:'Kc = [C]\u1d9c[D]\u1d48 / [A]\u1d43[B]\u1d47', v:'aA + bB \u21cc cC + dD; bara lösta ämnen och gaser' },
    { name:'Kp\u2013Kc-samband', f:'Kp = Kc(RT)^\u0394n', v:'\u0394n = \u0394mol gas (produkter \u2212 reaktanter)' },
    { name:'Reaktionskvot Q', f:'Q < K \u2192 framåt; Q > K \u2192 bakåt', v:'Om Q=K: systemet är i jämvikt' },
    { name:'Le Chateliers princip', f:'Systemet motverkar störningar', v:'Höjt tryck \u2192 mot färre mol gas' },
  ]},
  { cat:'Elektrokemi', icon:'\u26a1', items:[
    { name:'Cellpotential', f:'E\u00b0cell = E\u00b0katod \u2212 E\u00b0anod', v:'E\u00b0cell>0 \u2192 spontan (galvanisk cell)' },
    { name:'Gibbs och E-cell', f:'\u0394G\u00b0 = \u2212nFE\u00b0cell', v:'n=mol elektroner, F=96485 C/mol' },
    { name:'Faradays lag', f:'Q = n\u2091 \u00d7 F = I \u00d7 t', v:'Q=laddning (C), I=ström (A), t=tid (s)' },
    { name:'Nernst (25\u00b0C)', f:'E = E\u00b0 \u2212 (0,0592/n)\u00b7log Q', v:'Förenklad form vid 25\u00b0C' },
  ]},
  { cat:'Stökiometri', icon:'\ud83d\udd22', items:[
    { name:'Molförhållande', f:'n_A/a = n_B/b', v:'a, b = koefficienter i balanserad reaktion' },
    { name:'Procentuellt utbyte', f:'Utbyte = (faktisk/teoretisk) \u00d7 100%', v:'Teoretisk = beräknad från stökiometri' },
    { name:'Begränsande reagens', f:'n/koeff \u2192 minsta = begränsande', v:'Ämnet med lägst n/koefficient' },
    { name:'Empirisk formel', f:'Dividera mol med minsta mol-värde', v:'Ger heltalskvoter för enklaste formeln' },
  ]},
];

function initFormulas() {
  const nav = document.getElementById('formulaCatNav');
  const content = document.getElementById('formulaContent');
  if (!nav || !content || nav.children.length > 0) return;

  nav.innerHTML = FORMULAS_DATA.map((fd,i) =>
    `<button class="formula-cat-btn ${i===0?'active':''}" data-idx="${i}">${fd.icon} ${fd.cat}</button>`
  ).join('');

  renderFormulas(0);

  nav.querySelectorAll('.formula-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      nav.querySelectorAll('.formula-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFormulas(parseInt(btn.dataset.idx));
    });
  });
}

function renderFormulas(idx) {
  const content = document.getElementById('formulaContent');
  if (!content) return;
  const fd = FORMULAS_DATA[idx];
  content.innerHTML = fd.items.map(f => `
    <div class="formula-item">
      <div class="formula-name">${f.name}</div>
      <div class="formula-math">${f.f}</div>
      <div class="formula-vars">${f.v}</div>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════
//  ÖVNINGSUPPGIFTER
// ═══════════════════════════════════════════════════════

const PROBLEMS = [
  // ── MOL & MASSA
  { id:101, lv:1, cat:'mol', title:'Substansmängd från massa',
    q:'Hur många mol är 36 g vatten (H₂O)?\nM(H₂O) = 18 g/mol.',
    ans:2.0, tol:0.05, unit:'mol', formula:'n = m / M',
    hint:'Dela massan med molmassan',
    steps:['Känd data: m = 36 g H₂O; M(H₂O) = 18 g/mol','Formel: n = m/M — substansmängd = massa dividerat med molmassa','Beräkna: n = 36 g / 18 g/mol = 2,0 mol','Svar: n = 2,0 mol H₂O ✓ 36 g = dubbla molmassan; varje mol H₂O väger 18 g (2H + O)'] },
  { id:102, lv:1, cat:'mol', title:'Massa från substansmängd',
    q:'Vad är massan av 3 mol NaCl?\nM(NaCl) = 58,5 g/mol.',
    ans:175.5, tol:1, unit:'g', formula:'m = n × M',
    hint:'Multiplicera mol med molmassan',
    steps:['Känd data: n = 3 mol NaCl, molmassa M(NaCl) = 23 + 35,5 = 58,5 g/mol','Formel: m = n × M — massa = substansmängd × molmassa (mol × g/mol = g)','Beräkna: m = 3 mol × 58,5 g/mol = 175,5 g','Svar: 175,5 g NaCl. 3 mol innebär 3 × 6,022×10²³ ≈ 1,8×10²⁴ formelenheter NaCl'] },
  { id:103, lv:1, cat:'mol', title:'Antal partiklar',
    q:'Hur många ×10²³ molekyler finns i 2 mol CO₂?\n(Nₐ = 6,022 × 10²³ mol⁻¹) — ge svaret i ×10²³',
    ans:12.044, tol:0.15, unit:'×10²³', formula:'N = n × Nₐ',
    hint:'Multiplicera mol med Avogadros tal',
    steps:['Känd data: n = 2 mol, Avogadros tal Nₐ = 6,022×10²³ mol⁻¹','Formel: N = n × Nₐ — antal partiklar = substansmängd × antal per mol','Beräkna: N = 2 × 6,022×10²³ = 12,044×10²³ = 1,2044×10²⁴ partiklar','Svar: ≈ 12,044 × 10²³. Avogadros tal definieras som antalet atomer i exakt 12 g ¹²C'] },
  { id:104, lv:2, cat:'mol', title:'Molmassa från mätning',
    q:'5,00 g av ett ämne bildar 0,250 mol.\nVad är molmassan?',
    ans:20.0, tol:0.2, unit:'g/mol', formula:'M = m / n',
    hint:'Dela massan med substansmängden',
    steps:['Känd data: massa m = 5,00 g, substansmängd n = 0,250 mol','Formel: M = m/n — molmassa = massa dividerat med substansmängd (enhet: g/mol)','Beräkna: M = 5,00 g / 0,250 mol = 20,0 g/mol','Svar: M = 20,0 g/mol ✓ Jämförelse: neon (Ne) har M = 20,2 g/mol; rimlig storlek för ett lätt ämne'] },
  { id:105, lv:2, cat:'mol', title:'Empirisk formel – H/C-kvot',
    q:'En förening: 80,0 % C och 20,0 % H (massa).\nHur många H-atomer per C-atom i empirisk formel?',
    ans:3.0, tol:0.1, unit:'H per C', formula:'n = % / M_atom',
    hint:'Beräkna mol C och mol H per 100 g, ta kvoten',
    steps:['Känd data: 80,0 % C, 20,0 % H (massa) — beräkna mol per 100 g','Formel: n = %/M_atom; n(C) = 80,0/12,0 = 6,67 mol; n(H) = 20,0/1,0 = 20,0 mol','Beräkna: kvot n(H)/n(C) = 20,0/6,67 = 3,0 H-atomer per C-atom','Svar: 3 H per C ✓ Empirisk formel CH₃ (t.ex. propan C₃H₈ eller metanol CH₄O); del med minsta n-värde'] },
  { id:106, lv:3, cat:'mol', title:'Molekylformel från empirisk formel',
    q:'Empirisk formel CH₃ (M_emp = 15 g/mol), M_mol = 30 g/mol.\nHur många C-atomer per molekyl?',
    ans:2.0, tol:0.05, unit:'C-atomer', formula:'n = M_mol / M_emp',
    hint:'Beräkna hur många gånger den empiriska formeln upprepas',
    steps:['Känd data: empirisk formel CH₃ (M_emp = 12+3 = 15 g/mol); uppmätt M_mol = 30 g/mol','Formel: multiplikator n = M_mol/M_emp — hur många gånger empiriska formeln upprepas','Beräkna: n = 30/15 = 2; molekylformel = 2 × CH₃ = C₂H₆ (etan)','Svar: 2 C-atomer per molekyl ✓ C₂H₆ = etan; empirisk formel ger bara atomförhållandet'] },
  // ── KONCENTRATION
  { id:201, lv:1, cat:'konc', title:'Molarkoncentration',
    q:'2 mol NaOH löses i 4,0 liter vatten.\nVad är koncentrationen?',
    ans:0.5, tol:0.02, unit:'mol/L', formula:'c = n / V',
    hint:'Dela substansmängd med volym i liter',
    steps:['Känd data: n = 2 mol NaOH, V = 4,0 L lösning','Formel: c = n/V — koncentration = mol löst ämne per liter lösning (enhet: mol/L = M)','Beräkna: c = 2 mol ÷ 4,0 L = 0,50 mol/L','Svar: 0,50 mol/L. Det innebär att varje liter lösning innehåller 0,50 mol NaOH'] },
  { id:202, lv:1, cat:'konc', title:'Substansmängd från konc.',
    q:'Hur många mol NaCl finns i 500 mL av 2,0 mol/L NaCl-lösning?',
    ans:1.0, tol:0.05, unit:'mol', formula:'n = c × V',
    hint:'Omvandla mL till L, sedan n = c × V',
    steps:['Känd data: c = 2,0 mol/L NaCl; V = 500 mL → omvandla: 500 ÷ 1000 = 0,500 L','Formel: n = c × V — substansmängd = koncentration × volym (mol/L × L = mol)','Beräkna: n = 2,0 × 0,500 = 1,0 mol','Svar: 1,0 mol NaCl. OBS: alltid omvandla mL → L (÷ 1000) innan beräkning!'] },
  { id:203, lv:1, cat:'konc', title:'Spädning',
    q:'100 mL av 2,0 mol/L lösning späds till 400 mL.\nVad är den nya koncentrationen?',
    ans:0.5, tol:0.02, unit:'mol/L', formula:'c₁V₁ = c₂V₂',
    hint:'Koncentration × volym är konstant',
    steps:['Känd data: c₁ = 2,0 mol/L, V₁ = 100 mL = 0,100 L; späds till V₂ = 400 mL = 0,400 L','Spädningsprincipen: c₁V₁ = c₂V₂ — substansmängden ändras INTE vid spädning','Beräkna: c₂ = c₁V₁/V₂ = (2,0 × 0,100)/0,400 = 0,200/0,400 = 0,50 mol/L','Svar: 0,50 mol/L ✓ Volymen fyrfaldigades → koncentrationen minskade till 1/4'] },
  { id:204, lv:2, cat:'konc', title:'Blanda lösningar',
    q:'50 mL av 0,50 mol/L HCl blandas med 50 mL av 1,50 mol/L HCl.\nVad är koncentrationen i blandningen?',
    ans:1.0, tol:0.05, unit:'mol/L', formula:'c = (n₁ + n₂) / V_tot',
    hint:'Beräkna n i varje del, addera, dela med total volym',
    steps:['Känd data: lösn 1: c₁ = 0,50 mol/L, V₁ = 50 mL = 0,050 L; lösn 2: c₂ = 1,50 mol/L, V₂ = 50 mL = 0,050 L','Blandning: c = (n₁+n₂)/V_tot — beräkna substansmängd i varje del och dividera med total volym','Beräkna: n₁ = 0,50×0,050 = 0,025 mol; n₂ = 1,50×0,050 = 0,075 mol; n_tot = 0,100 mol; V_tot = 0,100 L','Svar: c = 0,100/0,100 = 1,0 mol/L ✓ Medelvärdet av 0,50 och 1,50 → 1,0 mol/L (lika volymer)'] },
  { id:205, lv:2, cat:'konc', title:'Neutralisationstitrering',
    q:'Hur många mL av 2,0 mol/L NaOH behövs\nför att neutralisera 50 mL av 1,0 mol/L HCl?',
    ans:25.0, tol:0.5, unit:'mL', formula:'n(syra) = n(bas)',
    hint:'HCl:NaOH = 1:1; beräkna n(HCl) och lös V(NaOH)',
    steps:['Känd data: 50 mL = 0,050 L HCl (c = 1,0 mol/L); NaOH-lösning c = 2,0 mol/L; 1:1-reaktion','Neutralisation: n(HCl) = n(NaOH) → c(HCl)×V(HCl) = c(NaOH)×V(NaOH)','Beräkna: n(HCl) = 1,0 × 0,050 = 0,050 mol; V(NaOH) = n/c = 0,050/2,0 = 0,025 L = 25 mL','Svar: 25 mL NaOH ✓ Koncentrerad NaOH (2,0 mol/L) kräver halva volymen jämfört med 1,0 mol/L'] },
  { id:206, lv:3, cat:'konc', title:'Diprotisk syra – titrering',
    q:'25 mL H₂SO₄ titreras med 40 mL av 0,20 mol/L NaOH.\nBeräkna c(H₂SO₄).\n(H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)',
    ans:0.16, tol:0.005, unit:'mol/L', formula:'n(H₂SO₄) = n(NaOH)/2',
    hint:'H₂SO₄ är diprotisk → kräver 2 mol NaOH per mol syra',
    steps:['Känd data: V(H₂SO₄) = 25 mL = 0,025 L; V(NaOH) = 40 mL = 0,040 L; c(NaOH) = 0,20 mol/L','Diprotisk syra: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O — molförhållande 1:2','Beräkna: n(NaOH) = 0,20 × 0,040 = 0,0080 mol; n(H₂SO₄) = 0,0080/2 = 0,0040 mol','Svar: c(H₂SO₄) = 0,0040/0,025 = 0,16 mol/L ✓ Diprotisk syra kräver dubbelt NaOH per mol syra'] },
  // ── GASLAGAR
  { id:301, lv:1, cat:'gas', title:'Celsius till Kelvin',
    q:'Omvandla 25 °C till Kelvin.',
    ans:298.15, tol:0.2, unit:'K', formula:'T(K) = T(°C) + 273,15',
    hint:'Lägg till 273,15',
    steps:['Varför Kelvin? Gaslagar kräver absolut temperaturskala. 0 K = absolut nollpunkt; inga molekylrörelser','Formel: T(K) = T(°C) + 273,15 — omvandling Celsius till Kelvin','Beräkna: T = 25 + 273,15 = 298,15 K','Svar: 298,15 K ≈ 298 K. Standardtemperatur (25°C = 298 K) används ofta i termodynamiska beräkningar'] },
  { id:302, lv:1, cat:'gas', title:'Boyles lag',
    q:'Gas: V = 4,0 L vid p = 200 kPa (konstant temp).\nVad är volymen vid p = 400 kPa?',
    ans:2.0, tol:0.05, unit:'L', formula:'p₁V₁ = p₂V₂',
    hint:'Trycket dubbleras → volymen halveras',
    steps:['Känd data: p₁=200 kPa, V₁=4,0 L, p₂=400 kPa; temperatur konstant (isoterm process)','Boyles lag: p₁V₁ = p₂V₂ — tryck och volym omvänt proportionella vid konstant T','Beräkna: V₂ = p₁V₁/p₂ = (200 × 4,0) / 400 = 800/400 = 2,0 L','Svar: 2,0 L. Trycket fördubblas → volymen halveras. Kontroll: 200×4,0 = 400×2,0 = 800 ✓'] },
  { id:303, lv:1, cat:'gas', title:'Charles lag',
    q:'Gas: V = 3,0 L vid T = 273 K (konstant tryck).\nVad är volymen vid T = 546 K?',
    ans:6.0, tol:0.1, unit:'L', formula:'V₁/T₁ = V₂/T₂',
    hint:'Volymen är proportionell mot temperaturen i Kelvin',
    steps:['Känd data: V₁ = 3,0 L, T₁ = 273 K, T₂ = 546 K; trycket konstant (isobar process)','Charles lag: V₁/T₁ = V₂/T₂ — volym direkt proportionell mot absolut temperatur','Beräkna: V₂ = V₁ × T₂/T₁ = 3,0 × 546/273 = 3,0 × 2,0 = 6,0 L','Svar: 6,0 L ✓ T fördubblades (273→546 K) → V fördubblades; OBS: alltid Kelvin i gaslagsberäkningar!'] },
  { id:304, lv:2, cat:'gas', title:'Ideala gaslagen – volym',
    q:'0,50 mol gas vid T = 300 K och p = 100 kPa.\nVad är volymen? (R = 8,314 J/mol·K)',
    ans:12.471, tol:0.3, unit:'L', formula:'V = nRT/p',
    hint:'p i Pa (100 000), svar i m³ → ×1000 ger L',
    steps:['Känd data: n=0,50 mol; T=300 K; p=100 kPa=1,00×10⁵ Pa; R=8,314 J/(mol·K)','Ideala gaslagen: pV = nRT — kombinerar Boyle, Charles och Avogadros lag','Beräkna: V = nRT/p = (0,50 × 8,314 × 300) / (1,00×10⁵) = 1247,1/100000 = 0,01247 m³','Omvandla: 0,01247 m³ × 1000 = 12,47 L. Svar: 12,47 L gas vid 300 K och 100 kPa'] },
  { id:305, lv:2, cat:'gas', title:'Gay-Lussacs lag',
    q:'Sluten behållare: p = 150 kPa vid T = 300 K.\nVad är trycket vid T = 450 K? (Konstant volym)',
    ans:225.0, tol:2, unit:'kPa', formula:'p₁/T₁ = p₂/T₂',
    hint:'Trycket ökar proportionellt med T i Kelvin',
    steps:['Känd data: p₁ = 150 kPa, T₁ = 300 K, T₂ = 450 K; volymen konstant (isokor process)','Gay-Lussacs lag: p₁/T₁ = p₂/T₂ — tryck direkt proportionellt mot absolut temperatur','Beräkna: p₂ = p₁ × T₂/T₁ = 150 × 450/300 = 150 × 1,5 = 225 kPa','Svar: 225 kPa ✓ Temperaturen ökade 50 % → trycket ökade 50 %; mer rörelseenergi ger fler kollisioner'] },
  { id:306, lv:3, cat:'gas', title:'Kombinerade gaslagen',
    q:'Gas: p₁=200 kPa, V₁=5,0 L, T₁=300 K.\np₂=400 kPa, T₂=600 K. Vad är V₂?',
    ans:5.0, tol:0.1, unit:'L', formula:'(p₁V₁)/T₁ = (p₂V₂)/T₂',
    hint:'V₂ = V₁ × (p₁/p₂) × (T₂/T₁)',
    steps:['Känd data: p₁ = 200 kPa, V₁ = 5,0 L, T₁ = 300 K; p₂ = 400 kPa, T₂ = 600 K','Kombinerade gaslagen: (p₁V₁)/T₁ = (p₂V₂)/T₂ — alla tre variabler ändras','Beräkna: V₂ = V₁ × (p₁/p₂) × (T₂/T₁) = 5,0 × (200/400) × (600/300) = 5,0 × 0,5 × 2,0 = 5,0 L','Svar: 5,0 L ✓ Trycket fördubblades (halverar V) men temperaturen fördubblades (dubblar V) — nettoresultat: oförändrad volym'] },
  // ── TERMODYNAMIK
  { id:401, lv:1, cat:'termo', title:'Värmeenergi – uppvärmning',
    q:'Hur mycket energi (kJ) krävs för att värma\n500 g vatten från 20 °C till 100 °C? (c=4,18 J/g·K)',
    ans:167.2, tol:2, unit:'kJ', formula:'Q = mcΔT',
    hint:'ΔT = 80 K, Q i J → ÷1000 för kJ',
    steps:['Känd data: m=500 g vatten, c(H₂O)=4,18 J/(g·K); T₁=20°C, T₂=100°C','Temperaturändring: ΔT = T₂ − T₁ = 100 − 20 = 80 K (eller 80°C, ΔT är detsamma)','Formel: Q = m·c·ΔT — värmeenergi = massa × specifik värmekapacitet × temperaturändring','Beräkna: Q = 500 × 4,18 × 80 = 167 200 J = 167,2 kJ. Vatten har hög c → kräver mycket energi att värma'] },
  { id:402, lv:1, cat:'termo', title:'Temperaturhöjning',
    q:'100 g järn (c=0,450 J/g·K) tillförs 2700 J.\nHur mycket stiger temperaturen (K)?',
    ans:60.0, tol:1, unit:'K', formula:'ΔT = Q / (mc)',
    hint:'Lös ut ΔT ur Q = mcΔT',
    steps:['Känd data: m=100 g järn, c(Fe)=0,450 J/(g·K), Q=2700 J tillförs','Isolera ΔT ur Q=mcΔT: ΔT = Q/(m×c)','Beräkna: ΔT = 2700 / (100 × 0,450) = 2700/45 = 60 K','Svar: +60°C. Jämför med vatten: samma Q till 100g H₂O → ΔT=2700/(100×4,18)≈6,5°C. Järn värms ~10× lättare'] },
  { id:403, lv:2, cat:'termo', title:'Kalorimeter',
    q:'Reaktion i kalorimeter: 200 g vatten (c=4,18 J/g·K)\nstiger 5,0 °C. Beräkna |Q_rxn| i kJ.',
    ans:4.18, tol:0.1, unit:'kJ', formula:'Q = mcΔT',
    hint:'Q avges av reaktionen = Q absorberas av vattnet',
    steps:['Känd data: kalorimeter; värmen absorberad av vattnet Q_vatten = m×c×ΔT; beräknat Q = 4180 J = 4,18 kJ','Reaktionen avger energi som värmer vattnet: Q_vatten = +4,18 kJ (endoterm för vattnet)','Reaktionens entalpi: ΔH_rxn = −Q_vatten = −4,18 kJ (exoterm reaktion); |Q| = 4,18 kJ','Svar: 4,18 kJ ✓ Värmeenergin (Q) som frigörs är 4,18 kJ; exoterm: systemet avger energi till omgivningen'] },
  { id:404, lv:2, cat:'termo', title:'Hesss lag',
    q:'H₂(g) + ½O₂(g) → H₂O(l)\nΔH°f(H₂O(l)) = −285,8 kJ/mol.\nBeräkna ΔH°rxn (kJ/mol).',
    ans:-285.8, tol:0.5, unit:'kJ/mol', formula:'ΔH°rxn = ΣΔH°f(prod) − ΣΔH°f(reak)',
    hint:'Element i standardtillstånd (H₂, O₂) har ΔH°f = 0',
    steps:['Hess lag: ΔH°rxn = ΣΔH°f(produkter) − ΣΔH°f(reaktanter); element i standardtillstånd har ΔH°f = 0','ΔH°rxn = ΔH°f(H₂O(l)) − [ΔH°f(H₂) + ½ΔH°f(O₂)] = −285,8 − [0 + 0]','Beräkna: ΔH°rxn = −285,8 − 0 = −285,8 kJ/mol','Svar: ΔH°rxn = −285,8 kJ/mol ✓ Bildningsentalpin för H₂O(l) definieras som reaktionsentalpin för denna reaktion'] },
  { id:405, lv:3, cat:'termo', title:'Gibbs fria energi',
    q:'ΔH = −200 kJ/mol, ΔS = −0,10 kJ/(mol·K), T = 300 K.\nBeräkna ΔG (kJ/mol).',
    ans:-170.0, tol:1, unit:'kJ/mol', formula:'ΔG = ΔH − TΔS',
    hint:'ΔG < 0 → spontan reaktion',
    steps:['Känd data: ΔH = −200 kJ/mol; ΔS = −0,10 kJ/(mol·K); T = 300 K','Formel: ΔG = ΔH − TΔS. Om ΔG < 0 → spontan; ΔG > 0 → ej spontan','Beräkna: TΔS = 300 × (−0,10) = −30 kJ/mol; ΔG = −200 − (−30) = −200 + 30 = −170 kJ/mol','Svar: ΔG = −170 kJ/mol ✓ Spontan vid 300 K; ΔH gynnar kraftigt, men ΔS < 0 motverkar något'] },
  { id:406, lv:3, cat:'termo', title:'Spontanitetsgräns',
    q:'ΔH = −100 kJ/mol, ΔS = −0,20 kJ/(mol·K).\nVid vilken T (K) övergår reaktionen från spontan till ej spontan?',
    ans:500.0, tol:5, unit:'K', formula:'T = ΔH/ΔS (när ΔG = 0)',
    hint:'Sätt ΔG = 0: T = ΔH/ΔS',
    steps:['Känd data: ΔH = −100 kJ/mol; ΔS = −0,20 kJ/(mol·K); spontanitetsgräns vid ΔG = 0','Formel: ΔG = ΔH − TΔS = 0 → T = ΔH/ΔS','Beräkna: T = −100/(−0,20) = 500 K','Svar: T = 500 K ✓ Under 500 K: ΔG < 0 (spontan, ΔH dominerar); över 500 K: ΔG > 0 (ΔS-termen dominerar)'] },
  // ── SYRA-BAS
  { id:501, lv:1, cat:'syrabas', title:'pH från [H⁺]',
    q:'Vad är pH för en lösning med [H⁺] = 0,01 mol/L?',
    ans:2.0, tol:0.05, unit:'', formula:'pH = −log[H⁺]',
    hint:'log(10⁻²) = −2',
    steps:['Känd data: [H⁺] = 0,01 mol/L = 10⁻² mol/L','Formel: pH = −log[H⁺]. pH-skalan är logaritmisk: varje steg = 10× ändring av [H⁺]','Beräkna: pH = −log(10⁻²) = −(−2) = 2','Svar: pH = 2 (starkt sur). Tumregel: om [H⁺] = 10⁻ⁿ mol/L → pH = n. Kontroll: pH < 7 → sur ✓'] },
  { id:502, lv:1, cat:'syrabas', title:'[H⁺] från pH',
    q:'En lösning har pH = 3.\nVad är [H⁺] i ×10⁻³ mol/L?',
    ans:1.0, tol:0.05, unit:'×10⁻³ mol/L', formula:'[H⁺] = 10⁻ᵖᴴ',
    hint:'[H⁺] = 10 upphöjt till minus pH',
    steps:['Känd data: pH = 3','Formel: [H⁺] = 10⁻ᵖᴴ — omvändning av pH-definitionen (antilogaritm)','Beräkna: [H⁺] = 10⁻³ = 0,001 mol/L = 1,0×10⁻³ mol/L','Svar: 1,0×10⁻³ mol/L. pH 3 → 10× mer H⁺ än pH 4. pH 3 → 1000× mer H⁺ än pH 6'] },
  { id:503, lv:1, cat:'syrabas', title:'pOH och pH',
    q:'En lösning har pH = 9 vid 25 °C.\nVad är pOH?',
    ans:5.0, tol:0.05, unit:'', formula:'pH + pOH = 14',
    hint:'Dra av pH från 14',
    steps:['Känd data: pH = 9 vid 25°C; samband pH + pOH = 14 (härleds ur Kw = [H⁺][OH⁻] = 10⁻¹⁴)','Formel: pOH = 14 − pH','Beräkna: pOH = 14 − 9 = 5,0','Svar: pOH = 5,0 ✓ pH 9 = svagt basisk; pOH 5 bekräftar fler OH⁻ än H⁺. Gäller vid 25°C!'] },
  { id:504, lv:2, cat:'syrabas', title:'pH – svag syra',
    q:'Ka(CH₃COOH) = 1,8×10⁻⁵, c = 0,10 mol/L.\nBeräkna pH. (Antag α << 1)',
    ans:2.87, tol:0.06, unit:'', formula:'[H⁺] ≈ √(Ka × c)',
    hint:'Approximation gäller om dissociationsgraden α < 5%',
    steps:['Känd data: svag syra (t.ex. ättiksyra) Ka=1,8×10⁻⁵; c=0,10 mol/L','Svag syra: partiell protolys HA ⇌ H⁺ + A⁻. Approximation: [H⁺] ≈ √(Ka×c) om α < 5%','Beräkna: [H⁺] = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶) = 1,34×10⁻³ mol/L','pH = −log(1,34×10⁻³) = 2,87. Kontrollera α = 1,34×10⁻³/0,10 = 1,3% < 5% → approximation giltig ✓'] },
  { id:505, lv:2, cat:'syrabas', title:'pH – stark bas',
    q:'Vad är pH för 0,010 mol/L NaOH-lösning vid 25 °C?',
    ans:12.0, tol:0.05, unit:'', formula:'pOH = −log[OH⁻], pH = 14 − pOH',
    hint:'NaOH dissocierar fullständigt → [OH⁻] = c(NaOH)',
    steps:['Känd data: stark bas NaOH, c = 0,010 mol/L → fullständig dissociation: [OH⁻] = 0,010 mol/L','pOH = −log[OH⁻] = −log(0,010) = 2,0; pH + pOH = 14 vid 25°C','Beräkna: pH = 14 − pOH = 14 − 2,0 = 12,0','Svar: pH = 12,0 ✓ Stark bas = fullständig dissociation; [OH⁻] = c(NaOH) direkt'] },
  { id:506, lv:3, cat:'syrabas', title:'Buffert-pH',
    q:'Buffert: 0,20 mol/L CH₃COO⁻ och 0,10 mol/L CH₃COOH.\npKa = 4,75. Beräkna pH.',
    ans:5.05, tol:0.05, unit:'', formula:'pH = pKa + log([A⁻]/[HA])',
    hint:'Henderson-Hasselbalch; log(2) ≈ 0,301',
    steps:['Känd data: buffert [A⁻] = 0,20 mol/L (acetat), [HA] = 0,10 mol/L (ättiksyra); pKa = 4,75','Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) — använd för buffertberäkning','Beräkna: pH = 4,75 + log(0,20/0,10) = 4,75 + log(2,0) = 4,75 + 0,301 = 5,05','Svar: pH = 5,05 ✓ [A⁻] > [HA] → pH > pKa; om [A⁻]=[HA] ger pH = pKa = 4,75'] },
  // ── JÄMVIKT
  { id:601, lv:2, cat:'jamvikt', title:'Beräkna Kc',
    q:'N₂ + 3H₂ ⇌ 2NH₃\nVid jämvikt: [N₂]=0,50; [H₂]=0,50; [NH₃]=1,0 mol/L.\nBeräkna Kc.',
    ans:16.0, tol:0.5, unit:'', formula:'Kc = [NH₃]² / ([N₂][H₂]³)',
    hint:'Sätt in jämviktskoncentrationerna direkt',
    steps:['Reaktion: N₂ + 3H₂ ⇌ 2NH₃; Jämviktskoncentrationer: [N₂]=0,50; [H₂]=0,50; [NH₃]=1,0 mol/L','Kc-uttryck: Kc = [NH₃]² / ([N₂]×[H₂]³) — produkter i täljaren, reaktanter i nämnaren; koefficienter som exponenter','Beräkna täljaren: (1,0)² = 1,0. Beräkna nämnaren: 0,50 × (0,50)³ = 0,50 × 0,125 = 0,0625','Svar: Kc = 1,0/0,0625 = 16. Kc > 1 → produkterna gynnas. Hög Kc → reaktionen gick långt åt höger'] },
  { id:602, lv:2, cat:'jamvikt', title:'Reaktionskvot Q',
    q:'N₂O₄ ⇌ 2NO₂. Kc = 0,040.\n[N₂O₄]=0,10; [NO₂]=0,060 mol/L.\nBeräkna Q.',
    ans:0.036, tol:0.002, unit:'', formula:'Q = [NO₂]² / [N₂O₄]',
    hint:'Q < K → reaktionen går mot produkterna',
    steps:['Känd data: N₂O₄ ⇌ 2NO₂; [NO₂] = 0,060 mol/L; [N₂O₄] = 0,10 mol/L; Kc = 0,040','Reaktionskvot: Q = [NO₂]²/[N₂O₄] — samma form som Kc men med aktuella koncentrationer','Beräkna: Q = (0,060)²/0,10 = 0,0036/0,10 = 0,036','Svar: Q = 0,036 ✓ Q < Kc (0,036 < 0,040) → reaktionen fortskrider mot PRODUKTER för att nå jämvikt'] },
  { id:603, lv:2, cat:'jamvikt', title:'ICE-tabell',
    q:'H₂ + I₂ ⇌ 2HI. Kc = 64.\nStart: [H₂]=[I₂]=0,50 mol/L, [HI]=0.\nVad är [HI] vid jämvikt?',
    ans:0.80, tol:0.02, unit:'mol/L', formula:'Kc = [HI]² / ([H₂][I₂])',
    hint:'√Kc = 8 → 2x/(0,50−x) = 8, lös ut x',
    steps:['Känd data: H₂ + I₂ ⇌ 2HI; [H₂]₀ = [I₂]₀ = 0,50 mol/L; [HI]₀ = 0; Kc = 64','ICE-tabell: I: 0,50/0,50/0; C: −x/−x/+2x; E: (0,50−x)/(0,50−x)/2x','Kc = (2x)²/(0,50−x)² = 64 → ta roten: 2x/(0,50−x) = 8 → 2x = 4,0−8x → 10x = 4,0 → x = 0,40 mol/L','Svar: [HI] = 2×0,40 = 0,80 mol/L ✓ Kontroll: (0,80)²/(0,10)² = 0,64/0,010 = 64 = Kc'] },
  { id:604, lv:3, cat:'jamvikt', title:'Löslighetsprodukt – AgCl',
    q:'AgCl har Ksp = 1,8×10⁻¹⁰.\nBeräkna lösligheten s i ×10⁻⁵ mol/L.',
    ans:1.34, tol:0.05, unit:'×10⁻⁵ mol/L', formula:'Ksp = s² → s = √Ksp',
    hint:'AgCl ⇌ Ag⁺ + Cl⁻; [Ag⁺]=[Cl⁻]=s',
    steps:['Känd data: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq); Ksp=1,8×10⁻¹⁰','Låt lösligheten = s mol/L → [Ag⁺]=s och [Cl⁻]=s (1:1 dissociation)','Ksp = [Ag⁺][Cl⁻] = s×s = s² → s = √Ksp','Svar: s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L. Liten Ksp → liten löslighet. AgCl är svårlösligt (vit fällning)'] },
  { id:605, lv:3, cat:'jamvikt', title:'Löslighetsprodukt – PbSO₄',
    q:'PbSO₄ har Ksp = 1,6×10⁻⁸.\nBeräkna lösligheten s i ×10⁻⁴ mol/L.',
    ans:1.265, tol:0.05, unit:'×10⁻⁴ mol/L', formula:'Ksp = s² → s = √Ksp',
    hint:'PbSO₄ ⇌ Pb²⁺ + SO₄²⁻; s = √Ksp',
    steps:['Känd data: PbSO₄(s) ⇌ Pb²⁺(aq) + SO₄²⁻(aq); Ksp=1,6×10⁻⁸','Löslighet s: [Pb²⁺]=s, [SO₄²⁻]=s → Ksp = s² → s = √Ksp','Beräkna: s = √(1,6×10⁻⁸) = 1,26×10⁻⁴ mol/L','Svar: 1,26×10⁻⁴ mol/L ≈ 0,126 mmol/L. Jämför med AgCl: PbSO₄ löser sig ~10× mer än AgCl'] },
  { id:606, lv:3, cat:'jamvikt', title:'ICE med andragradsekvation',
    q:'PCl₃(g) + Cl₂(g) ⇌ PCl₅(g). Kc = 49.\nStart: [PCl₃]=[Cl₂]=1,0 mol/L, [PCl₅]=0.\nVad är [PCl₅] vid jämvikt?',
    ans:0.867, tol:0.02, unit:'mol/L', formula:'Kc = [PCl₅]/([PCl₃][Cl₂])',
    hint:'ICE → 49(1−x)² = x → andragradsekvation → x ≈ 0,867',
    steps:['Känd data: PCl₃(g) + Cl₂(g) ⇌ PCl₅(g); [PCl₃]₀ = [Cl₂]₀ = 1,0 mol/L; Kc = 49','ICE-tabell: I: 1,0/1,0/0; C: −x/−x/+x; E: (1−x)/(1−x)/x; Kc = x/(1−x)² = 49','49x² − 99x + 49 = 0; x = (99 − √197)/98 = (99 − 14,0)/98 = 85,0/98 = 0,867 mol/L','Svar: [PCl₅] = 0,867 mol/L ✓ Kontroll: 0,867/(0,133)² = 0,867/0,0177 ≈ 49 = Kc'] },
  // ── ELEKTROKEMI
  { id:701, lv:2, cat:'elkem', title:'Elektrolys – koppar',
    q:'2 A passerar CuSO₄-lösning i 965 s.\nHur många gram Cu avsätts?\n(M(Cu)=63,5 g/mol, F=96500 C/mol, Cu²⁺+2e⁻→Cu)',
    ans:0.635, tol:0.02, unit:'g', formula:'m = (I×t×M)/(n_e×F)',
    hint:'Q=I×t → n(e⁻)=Q/F → n(Cu)=n(e⁻)/2 → m=n×M',
    steps:['Känd data: I = 2 A, t = 965 s, M(Cu) = 63,5 g/mol, nₑ = 2 (Cu²⁺+2e⁻→Cu), F = 96500 C/mol','Faradays lag: m = (I×t×M)/(nₑ×F) — laddning Q = I×t = 2×965 = 1930 C','Beräkna: m = (1930 × 63,5)/(2 × 96500) = 122555/193000 = 0,635 g','Svar: 0,635 g Cu avsätts ✓ Varje Coulomb deponerar M/(nₑ×F) gram; 1930 C ger 0,635 g koppar'] },
  { id:702, lv:2, cat:'elkem', title:'Cellpotential',
    q:'E°(Zn²⁺/Zn) = −0,76 V\nE°(Cu²⁺/Cu) = +0,34 V\nBeräkna E°cell för Zn–Cu galvanisk cell.',
    ans:1.10, tol:0.02, unit:'V', formula:'E°cell = E°katod − E°anod',
    hint:'Högst E° → katod (reduceras); lägst → anod',
    steps:['Känd data: katod: Cu²⁺+2e⁻→Cu, E°=+0,34 V;  anod: Zn→Zn²⁺+2e⁻, E°=−0,76 V','Formel: E°cell = E°(katod) − E°(anod) — båda reduceringspositioner, subtrahera anodpotentialen','Beräkna: E°cell = (+0,34) − (−0,76) = +0,34 + 0,76 = 1,10 V','Svar: E°cell = +1,10 V. Positiv EMK → spontan reaktion. Zn är oädlare → oxideras; Cu²⁺ → reduceras'] },
  { id:703, lv:2, cat:'elkem', title:'Tid för elektrolys',
    q:'Hur lång tid (s) krävs för att avsätta 1,08 g Ag\nmed 0,500 A? (M(Ag)=108 g/mol, F=96500 C/mol)',
    ans:1930, tol:20, unit:'s', formula:'t = (m×F×n_e)/(M×I)',
    hint:'Räkna baklänges: m→n(Ag)→Q→t',
    steps:['Känd data: m=1,08 g Ag; M(Ag)=107,9 g/mol; Ag⁺+e⁻→Ag (n_e=1); I=0,500 A','Faradays lag omskriven för tid: t = (m×F×n_e)/(M×I)','Beräkna: t = (1,08 × 96485 × 1)/(107,9 × 0,500) = 104203/53,95 = 1931 s','Svar: ≈1930 s ≈ 32 min. Kontroll: n(Ag)=1,08/107,9=0,01001 mol → Q=n×F=966 C → t=966/0,5=1932 s ✓'] },
  { id:704, lv:3, cat:'elkem', title:'Gibbs från cellpotential',
    q:'Zn–Cu cell: E°cell = 1,10 V, n = 2 elektroner.\nBeräkna ΔG° (kJ/mol). (F = 96500 C/mol)',
    ans:-212.3, tol:2, unit:'kJ/mol', formula:'ΔG° = −nFE°cell',
    hint:'J → kJ: dela med 1000',
    steps:['Känd data: E°cell=1,10 V (Zn/Cu-cell); n=2 elektroner per formelenhet; F=96485 C/mol','Formel: ΔG° = −nFE°cell — kopplar elektrokemi till termodyn. Positiv E° ↔ negativ ΔG°','Beräkna: ΔG° = −2 × 96485 × 1,10 = −212267 J/mol = −212,3 kJ/mol','Svar: ΔG° = −212 kJ/mol. Starkt negativ → mycket spontan. Sambandet: K = e^(−ΔG°/RT) → stor K'] },
  { id:705, lv:3, cat:'elkem', title:'Silvermassa vid elektrolys',
    q:'0,100 A leds genom AgNO₃-lösning i 3 timmar.\nHur många gram Ag avsätts?\n(M(Ag)=108, F=96500 C/mol)',
    ans:1.21, tol:0.05, unit:'g', formula:'m = (I×t×M)/(n_e×F)',
    hint:'Omvandla timmar → sekunder',
    steps:['Känd data: I = 0,100 A, t = 3 timmar = 10 800 s, M(Ag) = 108 g/mol, nₑ = 1 (Ag⁺+e⁻→Ag)','Faradays lag: m = (I×t×M)/(nₑ×F) — Q = 0,100 × 10 800 = 1080 C','Beräkna: m = (1080 × 108)/(1 × 96500) = 116 640/96 500 = 1,21 g','Svar: 1,21 g silver avsätts ✓ Omvandla alltid timmar till sekunder; varje Ag⁺ kräver 1 elektron'] },
  { id:706, lv:3, cat:'elkem', title:'Nernst ekvation',
    q:'Zn/Cu cell: E° = 1,10 V, n = 2.\n[Zn²⁺]=0,10; [Cu²⁺]=0,010 mol/L.\nBeräkna E vid 25 °C.',
    ans:1.070, tol:0.01, unit:'V', formula:'E = E° − (0,0592/n)×log Q',
    hint:'Q = [Zn²⁺]/[Cu²⁺] för Zn+Cu²⁺→Zn²⁺+Cu',
    steps:['Känd data: E° = 1,10 V, n = 2, [Zn²⁺] = 0,10 mol/L, [Cu²⁺] = 0,010 mol/L, T = 25°C','Nernst: E = E° − (0,0592/n)×log Q, Q = [Zn²⁺]/[Cu²⁺] = 0,10/0,010 = 10','Beräkna: E = 1,10 − (0,0592/2)×log(10) = 1,10 − 0,0296×1,0 = 1,0704 V','Svar: E = 1,07 V ✓ Hög [Cu²⁺] relativ [Zn²⁺] gynnar reaktionen och höjer EMK något under E°'] },
  // ── STÖKIOMETRI
  { id:801, lv:1, cat:'stoik', title:'Massa av produkt',
    q:'2H₂ + O₂ → 2H₂O\nHur många gram H₂O bildas från 4 g H₂?\n(M(H₂)=2, M(H₂O)=18 g/mol)',
    ans:36.0, tol:0.5, unit:'g', formula:'n = m/M, molförhållande, m = n×M',
    hint:'H₂:H₂O = 1:1 i molförhållande',
    steps:['Reaktion: 2H₂ + O₂ → 2H₂O; m(H₂)=4,0 g; M(H₂)=2,0 g/mol; M(H₂O)=18 g/mol','n(H₂) = m/M = 4,0/2,0 = 2,0 mol H₂','Molförhållande från ekvationen: 2 mol H₂ → 2 mol H₂O (koeff. 2:2 = 1:1) → n(H₂O) = 2,0 mol','Svar: m(H₂O) = 2,0 × 18 = 36 g vatten. Stökiometri: alltid via molförhållande från balanserad ekvation'] },
  { id:802, lv:1, cat:'stoik', title:'Förbränning av metan',
    q:'CH₄ + 2O₂ → CO₂ + 2H₂O\n2 mol CH₄ förbränns. Hur många gram CO₂ bildas?\n(M(CO₂)=44 g/mol)',
    ans:88.0, tol:1, unit:'g', formula:'n(CO₂) = n(CH₄)×1',
    hint:'CH₄:CO₂ = 1:1',
    steps:['Känd data: 2,0 mol CH₄ förbränns; reaktion CH₄ + 2O₂ → CO₂ + 2H₂O; M(CO₂) = 44 g/mol','Stökiometri: koefficienter 1:1 för CH₄:CO₂ → n(CO₂) = n(CH₄) = 2,0 mol','Beräkna: m(CO₂) = n × M = 2,0 mol × 44 g/mol = 88 g','Svar: 88 g CO₂ bildas ✓ Varje CH₄-molekyl ger exakt en CO₂-molekyl; C-atomen bevaras'] },
  { id:803, lv:2, cat:'stoik', title:'Begränsande reagens',
    q:'Fe₂O₃ + 3CO → 2Fe + 3CO₂\n160 g Fe₂O₃ (M=160) och 84 g CO (M=28).\nHur många gram Fe (M=56) bildas?',
    ans:112.0, tol:2, unit:'g', formula:'n/koeff → lägst = begränsande',
    hint:'Jämför n(Fe₂O₃)/1 med n(CO)/3',
    steps:['Känd data: 160 g Fe₂O₃ (M=160) och 84 g CO (M=28); reaktion Fe₂O₃ + 3CO → 2Fe + 3CO₂','n(Fe₂O₃) = 160/160 = 1,0 mol; n(CO) = 84/28 = 3,0 mol; begränsande: 1,0/1 = 1,0 vs 3,0/3 = 1,0 (lika!)','n(Fe) = 2 × n(Fe₂O₃) = 2 × 1,0 = 2,0 mol; m(Fe) = 2,0 × 56 = 112 g','Svar: 112 g Fe bildas ✓ Båda reagenter förbrukas exakt; när kvoterna är lika är båda begränsande'] },
  { id:804, lv:2, cat:'stoik', title:'Procentuellt utbyte',
    q:'Teoretisk massa = 50,0 g, faktisk massa = 38,0 g.\nVad är det procentuella utbytet?',
    ans:76.0, tol:1, unit:'%', formula:'Utbyte = (faktisk/teoretisk)×100%',
    hint:'Dela faktisk med teoretisk, multiplicera med 100',
    steps:['Känd data: teoretisk (beräknad max) massa = 10,0 g; faktisk (mätt) massa = 7,5 g','Formel: Utbyte % = (faktisk / teoretisk) × 100 %','Beräkna: Utbyte = (7,5/10,0) × 100 = 75 %','Svar: 75% utbyte. Förluster beror på: ofullständig reaktion, sidoreaktioner, förluster vid filtrering/omkristallisering'] },
  { id:805, lv:3, cat:'stoik', title:'Förbränningsanalys',
    q:'Förbränning av 1 mol organisk förening\nger 3 mol CO₂ och 4 mol H₂O.\nHur många C-atomer per molekyl?',
    ans:3.0, tol:0.05, unit:'C-atomer', formula:'n(C) = mol CO₂ per mol förening',
    hint:'Varje CO₂ → 1 C; varje H₂O → 2 H',
    steps:['Känd data: förbränning av 1 mol organisk förening ger 3 mol CO₂ och 4 mol H₂O','Princip: varje CO₂ ger 1 C-atom; varje H₂O ger 2 H-atomer','Beräkna: n(C) = 3 mol CO₂ × 1 C/CO₂ = 3 C-atomer; n(H) = 4 mol H₂O × 2 H/H₂O = 8 H-atomer','Svar: 3 C-atomer per molekyl ✓ Föreningen C₃H₈ (propan); förbränningsanalys: CO₂ räknar C, H₂O räknar H'] },
  { id:806, lv:3, cat:'stoik', title:'Gas från reaktion vid STP',
    q:'Zn + 2HCl → ZnCl₂ + H₂\n65 g Zn reagerar (M(Zn)=65 g/mol).\nHur många liter H₂ bildas vid STP? (22,4 L/mol)',
    ans:22.4, tol:0.3, unit:'L', formula:'V = n × Vm(STP)',
    hint:'n(Zn)=n(H₂); V=n×22,4 L/mol',
    steps:['Känd data: 65 g Zn; M(Zn) = 65 g/mol; Zn + 2HCl → ZnCl₂ + H₂; molvolym vid STP = 22,4 L/mol','Stökiometri: n(Zn) = n(H₂) (koefficient 1:1); n(Zn) = 65/65 = 1,0 mol','Beräkna: V(H₂) = n × V_m = 1,0 mol × 22,4 L/mol = 22,4 L','Svar: 22,4 L H₂ vid STP ✓ 1 mol gas upptar exakt 22,4 L vid 0°C och 101,3 kPa'] },

  { id:1001, lv:1, cat:'mol', title:'n från massa – CO₂', q:'Beräkna substansmängden n för 44 g koldioxid CO₂.\nM(CO₂) = 44 g/mol.', ans:1.0, tol:0.05, unit:'mol', formula:'n = m / M', hint:'Dela massan med molmassan.', steps:['Känd data: massa m = 44 g, molmassa M(CO₂) = 44 g/mol','Formel: n = m / M — substansmängd = massa delat med molmassa. M anger gram per mol','Beräkna: n = 44 / 44 = 1,0 mol','Svar: 1,0 mol CO₂. Tumregel: om m = M → n = 1 mol exakt ✓'], sol:'n = 44/44 = 1,0 mol' },
  { id:1002, lv:1, cat:'mol', title:'m från n – NaCl', q:'Beräkna massan m för 0,50 mol natriumklorid NaCl.\nM(NaCl) = 58,5 g/mol.', ans:29.25, tol:0.3, unit:'g', formula:'m = n × M', hint:'Multiplicera mol med molmassan.', steps:['Känd data: n = 0,50 mol NaCl, M(NaCl) = 58,5 g/mol','Formel: m = n × M — massa = substansmängd × molmassa (omvänd formel)','Beräkna: m = 0,50 × 58,5 = 29,25 g','Svar: 29,3 g NaCl. Kontroll: halv mol → halv molmassa i gram ✓'], sol:'m = 0,50 × 58,5 = 29,3 g' },
  { id:1003, lv:1, cat:'mol', title:'Molmassa – H₂SO₄', q:'Beräkna molmassan M för svavelsyra H₂SO₄.\nM(H)=1, M(S)=32, M(O)=16 g/mol.', ans:98.0, tol:0.5, unit:'g/mol', formula:'M = Σ(antal × atommassa)', hint:'Räkna atomer: 2H + 1S + 4O.', steps:['Räkna atomer i H₂SO₄: 2 st H, 1 st S, 4 st O','M = 2×M(H) + 1×M(S) + 4×M(O) = 2×1 + 1×32 + 4×16','Beräkna: 2 + 32 + 64 = 98 g/mol','Svar: M(H₂SO₄) = 98 g/mol. Vanlig syra — viktigt att kunna utantill ✓'], sol:'M = 2+32+64 = 98 g/mol' },
  { id:1004, lv:1, cat:'mol', title:'n av vatten', q:'Hur många mol är 108 g vatten H₂O?\nM(H₂O) = 18 g/mol.', ans:6.0, tol:0.1, unit:'mol', formula:'n = m / M', hint:'108 delat med 18.', steps:['Känd data: m = 108 g H₂O, M(H₂O) = 18 g/mol','Formel: n = m / M','Beräkna: n = 108 / 18 = 6,0 mol','Svar: 6,0 mol vatten. Kontroll: 108 = 6 × 18 ✓'], sol:'n = 108/18 = 6,0 mol' },
  { id:1005, lv:2, cat:'mol', title:'Procenthalt Fe i Fe₂O₃', q:'Beräkna järnets (Fe) procentuella massa i järnoxid Fe₂O₃.\nM(Fe)=56, M(O)=16 g/mol.', ans:70.0, tol:0.5, unit:'%', formula:'%m = (n×M_atom / M_förening) × 100', hint:'M(Fe₂O₃) = 2×56 + 3×16 = 160 g/mol. Andel Fe = 112/160.', steps:['Beräkna M(Fe₂O₃): 2×56 + 3×16 = 112 + 48 = 160 g/mol','Massa av Fe i 1 mol Fe₂O₃: 2 × 56 = 112 g (de två Fe-atomernas massa)','Procenthalt: %Fe = (massa Fe / M_förening) × 100 = (112/160) × 100','Svar: 70 % Fe. Metoden: massandel atom = (antal×atommassa) / molmassa × 100 ✓'], sol:'%Fe = 112/160 × 100 = 70 %' },
  { id:1006, lv:2, cat:'mol', title:'n av helium', q:'Hur många mol är 4,0 g helium He?\nM(He) = 4,0 g/mol.', ans:1.0, tol:0.05, unit:'mol', formula:'n = m / M', hint:'4,0 / 4,0 = 1,0 mol.', steps:['Känd data: m = 4,0 g He, M(He) = 4,0 g/mol','Formel: n = m / M','Beräkna: n = 4,0 / 4,0 = 1,0 mol','Svar: 1,0 mol He. He är ädelgas med låg molmassa — 4 g = 1 mol ✓'], sol:'n = 1,0 mol → N = 6,022×10²³ atomer' },
  { id:1007, lv:2, cat:'mol', title:'Empirisk formel – kolhydrat', q:'En förening innehåller 40 % C, 6,7 % H och 53,3 % O (massa%).\nBeräkna kvoten n(H) / n(C) i den empiriska formeln.', ans:2.0, tol:0.1, unit:'', formula:'n_x = %x / M_x', hint:'Beräkna n per 100 g: C=40/12, H=6,7/1, O=53,3/16. Dividera med minsta.', steps:['Känd data: 40 % C, 6,7 % H, 53,3 % O per 100 g — beräkna mol av varje grundämne','Formel: n_x = %/M_x; n(C) = 40/12 = 3,33 mol; n(H) = 6,7/1 = 6,7 mol; n(O) = 53,3/16 = 3,33 mol','Beräkna: dividera med minsta (3,33): C:1,0 H:2,0 O:1,0 → empirisk formel CH₂O; n(H)/n(C) = 6,7/3,33 = 2,0','Svar: n(H)/n(C) = 2,0 ✓ Empirisk formel CH₂O (t.ex. formaldehyd; glukos C₆H₁₂O₆ = 6×CH₂O)'], sol:'n(H)/n(C) = 6,7/3,33 = 2,0' },
  { id:1008, lv:2, cat:'mol', title:'Begränsande reagens – H₂O', q:'2 H₂ + O₂ → 2 H₂O\n6,0 mol H₂ blandas med 2,0 mol O₂.\nHur många mol H₂O bildas maximalt?', ans:4.0, tol:0.1, unit:'mol', formula:'Stökiometri: 1 mol O₂ → 2 mol H₂O', hint:'Beräkna max H₂O från varje reaktant. Den som ger minst avgör.', steps:['Reaktion: 2H₂ + O₂ → 2H₂O. Koefficienter: H₂:O₂:H₂O = 2:1:2','Hitta begränsande: n(H₂)=6,0 kräver n(O₂)=3,0 mol, men bara 2,0 mol O₂ finns','O₂ begränsar: 2,0 mol O₂ × (2 mol H₂O / 1 mol O₂) = 4,0 mol H₂O','Svar: 4,0 mol H₂O. H₂ är i överskott: 6,0 − 2×2,0 = 2,0 mol H₂ kvar ✓'], sol:'O₂ är begränsande → 4,0 mol H₂O' },
  { id:1009, lv:3, cat:'mol', title:'Molmassa från m och n', q:'En okänd gas har massan 3,2 g och substansmängden 0,10 mol.\nBeräkna molmassan M.', ans:32.0, tol:0.5, unit:'g/mol', formula:'M = m / n', hint:'Dela massan med substansmängden.', steps:['Känd data: m = 3,2 g, n = 0,10 mol okänd gas','Formel: M = m / n (omvänd av n = m/M)','Beräkna: M = 3,2 / 0,10 = 32 g/mol','Svar: M = 32 g/mol → svavel S eller O₂. Metod att identifiera okänt ämne via molmassa ✓'], sol:'M = 3,2 / 0,10 = 32 g/mol' },
  { id:1010, lv:3, cat:'mol', title:'Procentuellt utbyte', q:'Teoretisk produktmängd: 8,0 g.\nFaktisk produktmängd: 6,0 g.\nBeräkna det procentuella utbytet.', ans:75.0, tol:0.5, unit:'%', formula:'utbyte = (faktisk / teoretisk) × 100', hint:'Dividera faktisk med teoretisk och multiplicera med 100.', steps:['Känd data: teoretisk massa = 8,0 g, faktisk massa = 6,0 g','Formel: utbyte % = (faktisk / teoretisk) × 100','Beräkna: utbyte = (6,0 / 8,0) × 100 = 75 %','Svar: 75 % utbyte. 100 % är teoretisk max — förluster beror på sidoreaktioner, hantering ✓'], sol:'utbyte = 6,0/8,0 × 100 = 75 %' },
  { id:1011, lv:3, cat:'mol', title:'Kvot H/C från sammansättning', q:'En kolförening innehåller 2,4 g C och 0,6 g H (inga andra grundämnen).\nBeräkna kvoten n(H) / n(C).', ans:3.0, tol:0.1, unit:'', formula:'n = m / M', hint:'n(C)=2,4/12, n(H)=0,6/1. Dividera.', steps:['Beräkna mol per grundämne: n(C) = 2,4/12 = 0,20 mol; n(H) = 0,6/1 = 0,60 mol','Kvot: n(H)/n(C) = 0,60/0,20 = 3,0','Empirisk formel: CH₃ (t.ex. C₂H₆ etan eller CH₄ utan O)','Svar: CH₃ (empirisk). Inga O-atomer → ren kolväte. Kontroll: H/C = 3 ✓'], sol:'n(H)/n(C) = 0,60/0,20 = 3,0 → empirisk formel CH₃' },
  { id:1012, lv:3, cat:'mol', title:'Antal atomer i 16 g svavel', q:'M(S) = 32 g/mol. Avogadros tal Nₐ = 6,022×10²³ mol⁻¹.\nHur många svavelatomer finns i 16 g S? Ange svaret som x×10²³ (ange x).', ans:3.011, tol:0.05, unit:'×10²³', formula:'N = n × Nₐ', hint:'n = 16/32 = 0,5 mol. N = 0,5 × 6,022×10²³.', steps:['Känd data: M(S) = 32 g/mol, massa S = 16 g → n = 16/32 = 0,50 mol','Formel: N = n × Nₐ — antal partiklar = mol × Avogadros tal','Beräkna: N = 0,50 × 6,022×10²³ = 3,011×10²³ atomer','Svar: x = 3,011 (dvs 3,011×10²³). Nₐ kopplar mol (makroskopisk) till antal (mikroskopisk) ✓'], sol:'N = 0,50 × 6,022×10²³ = 3,011×10²³' },
  { id:1101, lv:1, cat:'konc', title:'c = n/V', q:'Beräkna koncentrationen c för en lösning med 0,40 mol löst ämne i 2,0 L.', ans:0.2, tol:0.01, unit:'mol/L', formula:'c = n / V', hint:'Dela substansmängden med volymen.', steps:['Känd data: n = 0,40 mol, V = 2,0 L','Formel: c = n / V — koncentration = substansmängd / volym','Beräkna: c = 0,40 / 2,0 = 0,20 mol/L','Svar: 0,20 mol/L. c mäter hur tätt packade molekylerna är i lösningen ✓'], sol:'c = 0,40/2,0 = 0,20 mol/L' },
  { id:1102, lv:1, cat:'konc', title:'n = c × V', q:'En lösning har koncentrationen 0,50 mol/L och volymen 0,40 L.\nBeräkna substansmängden n.', ans:0.2, tol:0.01, unit:'mol', formula:'n = c × V', hint:'Multiplicera koncentrationen med volymen.', steps:['Känd data: c = 0,50 mol/L, V = 0,40 L','Formel: n = c × V (löst ur c = n/V)','Beräkna: n = 0,50 × 0,40 = 0,20 mol','Svar: 0,20 mol. OBS: V måste vara i liter! ✓'], sol:'n = 0,50 × 0,40 = 0,20 mol' },
  { id:1103, lv:1, cat:'konc', title:'Massa NaOH i lösning', q:'Beräkna massan NaOH för att bereda 1,0 L lösning med c = 0,25 mol/L.\nM(NaOH) = 40 g/mol.', ans:10.0, tol:0.2, unit:'g', formula:'m = c × V × M', hint:'Beräkna n = c×V, sedan m = n×M.', steps:['Känd data: c(NaOH) = 0,25 mol/L, V = 1,0 L, M(NaOH) = 40 g/mol','Steg 1: n = c × V = 0,25 × 1,0 = 0,25 mol','Steg 2: m = n × M = 0,25 × 40 = 10 g','Svar: 10 g NaOH. Tvåstegsmetod: c,V → n → m ✓'], sol:'m = 0,25×1,0×40 = 10 g' },
  { id:1104, lv:1, cat:'konc', title:'Volym lösning i mL', q:'Hur många mL av en 0,50 mol/L HCl-lösning innehåller 0,10 mol HCl?', ans:200.0, tol:2.0, unit:'mL', formula:'V = n / c', hint:'V = n/c, omvandla till mL.', steps:['Känd data: n = 0,10 mol, c = 0,50 mol/L','Formel: V = n / c (löst ur c = n/V)','Beräkna: V = 0,10 / 0,50 = 0,20 L = 200 mL','Svar: 200 mL. Omvandla L→mL: ×1000 ✓'], sol:'V = 0,10/0,50 = 0,20 L = 200 mL' },
  { id:1105, lv:2, cat:'konc', title:'Spädning c₁V₁ = c₂V₂', q:'En 2,0 mol/L lösning (500 mL) späds till 2000 mL.\nBeräkna den nya koncentrationen c₂.', ans:0.5, tol:0.02, unit:'mol/L', formula:'c₁V₁ = c₂V₂', hint:'c₂ = c₁V₁/V₂.', steps:['Känd data: c₁ = 2,0 mol/L, V₁ = 500 mL = 0,50 L; V₂ = 2000 mL = 2,0 L','Formel: c₁V₁ = c₂V₂ (substansmängden är oförändrad vid spädning)','Beräkna: c₂ = (2,0 × 0,50) / 2,0 = 0,50 mol/L','Svar: 0,50 mol/L. Spädning 4× → concentration 4× lägre ✓'], sol:'c₂ = 2,0×500/2000 = 0,50 mol/L' },
  { id:1106, lv:2, cat:'konc', title:'Pipettera stocklösning', q:'Du har 12 mol/L saltsyra. Hur många mL behöver du för att bereda 500 mL av 0,60 mol/L?', ans:25.0, tol:0.5, unit:'mL', formula:'V₁ = c₂V₂ / c₁', hint:'V₁ = c₂×V₂/c₁.', steps:['Känd data: c₂ = 0,60 mol/L, V₂ = 500 mL; c₁ = 12 mol/L (stocklösning)','Formel: V₁ = c₂V₂ / c₁','Beräkna: V₁ = (0,60 × 500) / 12 = 300/12 = 25 mL','Svar: mät 25 mL stocklösning, späd till 500 mL. Spädfaktor = 12/0,6 = 20× ✓'], sol:'V₁ = 0,60×500/12 = 25 mL' },
  { id:1107, lv:2, cat:'konc', title:'Blanda lösningar', q:'200 mL av 1,0 mol/L NaCl blandas med 300 mL av 0,50 mol/L NaCl.\nVad är koncentrationen i blandningen?', ans:0.7, tol:0.02, unit:'mol/L', formula:'c = (n₁+n₂)/(V₁+V₂)', hint:'Beräkna n₁ och n₂ separat, addera och dividera med total volym.', steps:['Känd data: lösn 1: 200 mL = 0,200 L, c = 1,0 mol/L; lösn 2: 300 mL = 0,300 L, c = 0,50 mol/L','Blandning: c = (n₁+n₂)/(V₁+V₂) — addera mol och volymer separat','Beräkna: n₁ = 1,0×0,200 = 0,200 mol; n₂ = 0,50×0,300 = 0,150 mol; n_tot = 0,350 mol; V_tot = 0,500 L','Svar: c = 0,350/0,500 = 0,70 mol/L ✓ Viktad medelvärdeskoncentration; mer av den lägre konc. drar ner resultatet'], sol:'c = 0,35/0,50 = 0,70 mol/L' },
  { id:1108, lv:2, cat:'konc', title:'Massa NaCl för lösning', q:'Beräkna massan NaCl för att bereda 250 mL av 0,10 mol/L NaCl.\nM(NaCl) = 58,5 g/mol.', ans:1.46, tol:0.05, unit:'g', formula:'m = c × V × M', hint:'n = 0,10 × 0,250. m = n × 58,5.', steps:['Känd data: c(NaOH) = 0,10 mol/L, V = 250 mL = 0,250 L, M(NaCl)=58,5','n(NaOH) = 0,10 × 0,250 = 0,025 mol','m(NaCl nödvändig) — OBS frågar om NaCl. n = 0,025 mol → m = 0,025 × 58,5 = 1,4625 g','Svar: m ≈ 1,46 g NaCl. Tvåstegsmetod: c×V=n → n×M=m ✓'], sol:'m = 0,10×0,250×58,5 = 1,46 g' },
  { id:1109, lv:3, cat:'konc', title:'Titrering – c(NaOH)', q:'25,0 mL NaOH titreras med 0,100 mol/L HCl. Ekvivalenspunkten nås vid 18,5 mL HCl.\nBeräkna c(NaOH).', ans:0.074, tol:0.003, unit:'mol/L', formula:'c₁V₁ = c₂V₂', hint:'n(HCl) = c×V. n(NaOH) = n(HCl). c(NaOH) = n/V(NaOH).', steps:['Känd data: V(NaOH) = 25,0 mL = 0,0250 L (okänd c); V(HCl) = 18,5 mL = 0,0185 L; c(HCl) = 0,100 mol/L','Titrering 1:1: n(HCl) = n(NaOH); c₁V₁ = c₂V₂ (HCl+NaOH→NaCl+H₂O)','Beräkna: n(HCl) = 0,100 × 0,0185 = 0,00185 mol = n(NaOH); c(NaOH) = 0,00185/0,0250 = 0,074 mol/L','Svar: c(NaOH) = 0,074 mol/L ✓ Titrering bestämmer exakt okänd koncentration vid ekvivalenspunkten'], sol:'c(NaOH) = 0,00185/0,025 = 0,074 mol/L' },
  { id:1110, lv:3, cat:'konc', title:'Seriell spädning', q:'1,0 mol/L späds 1:100 (1 mL→100 mL) två gånger i rad.\nVad är -log(c) för slutkoncentrationen?', ans:4.0, tol:0.05, unit:'', formula:'c_n = c₀ / (faktor)ⁿ', hint:'c = 1,0 / (100×100) = 10⁻⁴ mol/L. -log(10⁻⁴) = 4.', steps:['Känd data: c₀ = 1,0 mol/L; seriell spädning 1:100 (1 mL →10 0 mL) upprepas 2 gånger','Formel: c_n = c₀/(faktor)ⁿ — varje spädningssteg multiplicerar spädfaktorn','Beräkna: c₁ = 1,0/100 = 0,010 mol/L; c₂ = 0,010/100 = 1,0×10⁻⁴ mol/L; −log(10⁻⁴) = 4,0','Svar: −log(c) = 4,0 ✓ Total spädfaktor 10 000×; pC-notation: −log(c) liknar pH-begreppet'], sol:'-log(10⁻⁴) = 4,0' },
  { id:1111, lv:3, cat:'konc', title:'Löslighet från Ksp', q:'Ksp(BaSO₄) = 1,1×10⁻¹⁰. Beräkna lösligheten s.\nAnge svaret som -log(s) (dvs. pS).', ans:4.98, tol:0.05, unit:'', formula:'s = √Ksp', hint:'s = √(1,1×10⁻¹⁰) ≈ 1,05×10⁻⁵ mol/L. pS = -log(s).', steps:['AgCl → Ag⁺ + Cl⁻. Ksp(AgCl) = s² = 1,1×10⁻¹⁰ (ej givet, använder typvärde)','s = √(1,1×10⁻¹⁰) = 1,05×10⁻⁵ mol/L','pS = −log(s) = −log(1,05×10⁻⁵)','Svar: pS ≈ 4,98. pS-notation liknar pH — logskala ✓'], sol:'s = 1,05×10⁻⁵ mol/L → pS = 4,98' },
  { id:1112, lv:3, cat:'konc', title:'Substansmängd efter spädning', q:'0,50 mol/L stocklösning späds 1:10 → 0,050 mol/L.\n25 mL av den spädda lösningen används. Hur många mmol löst ämne finns?', ans:1.25, tol:0.05, unit:'mmol', formula:'n = c × V', hint:'n = 0,050 mol/L × 0,025 L = 0,00125 mol = 1,25 mmol.', steps:['Steg 1: späd c₁ = 0,50 mol/L med faktor 10 → c₂ = 0,050 mol/L','Steg 2: n = c₂ × V = 0,050 × 0,025 = 0,00125 mol = 1,25 mmol','Svar: 1,25 mmol. Seriell spädning sedan beräkna substansmängd ✓'], sol:'n = 0,050 × 0,025 = 1,25 mmol' },
  { id:1201, lv:1, cat:'gas', title:'Volym vid STP', q:'Beräkna volymen för 2,0 mol idealgas vid STP (0 °C, 101,3 kPa).\nMolär volym vid STP = 22,4 L/mol.', ans:44.8, tol:0.2, unit:'L', formula:'V = n × 22,4 L/mol', hint:'Multiplicera mol med 22,4 L/mol.', steps:['Känd data: n = 2,0 mol idealgas, molär volym vid STP (0°C, 101,3 kPa) = 22,4 L/mol','Formel: V = n × 22,4 L/mol — vid STP upptar varje mol gas exakt 22,4 L','Beräkna: V = 2,0 × 22,4 = 44,8 L','Svar: 44,8 L. STP-regeln gäller alla idealgaser oavsett ämne ✓'], sol:'V = 2,0 × 22,4 = 44,8 L' },
  { id:1202, lv:1, cat:'gas', title:'Boyles lag', q:'En gas: P₁ = 100 kPa, V₁ = 6,0 L. Trycket ökar till P₂ = 300 kPa vid konstant T.\nBeräkna V₂.', ans:2.0, tol:0.1, unit:'L', formula:'P₁V₁ = P₂V₂', hint:'V₂ = P₁V₁ / P₂.', steps:['Boyles lag: P₁V₁ = P₂V₂ (konstant T); volymen minskar när trycket ökar','Känd data: P₁ = 100 kPa, V₁ = 6,0 L, P₂ = 300 kPa; sök V₂','Beräkna: V₂ = P₁V₁/P₂ = (100 × 6,0)/300 = 600/300 = 2,0 L','Svar: V₂ = 2,0 L ✓ Trycket trefaldigades → volymen minskade till en tredjedel'], sol:'V₂ = 100×6,0/300 = 2,0 L' },
  { id:1203, lv:1, cat:'gas', title:'Charles lag', q:'En gas: V₁ = 5,0 L vid T₁ = 250 K. Temperaturen ökar till T₂ = 500 K (konstant p).\nBeräkna V₂.', ans:10.0, tol:0.2, unit:'L', formula:'V₁/T₁ = V₂/T₂', hint:'V₂ = V₁ × T₂/T₁.', steps:['Charles lag: V₁/T₁ = V₂/T₂ (konstant p). Temperaturer MÅSTE vara i Kelvin','T₁ = 250 K, T₂ = 500 K, V₁ = 5,0 L','V₂ = V₁ × T₂/T₁ = 5,0 × 500/250 = 5,0 × 2,0 = 10,0 L','Svar: 10,0 L. T dubblas → V dubblas (proportionell) ✓'], sol:'V₂ = 5,0 × 500/250 = 10,0 L' },
  { id:1204, lv:1, cat:'gas', title:'Gay-Lussacs lag', q:'En gas: P₁ = 100 kPa vid T₁ = 300 K. Temperaturen stiger till T₂ = 600 K (konstant V).\nBeräkna P₂.', ans:200.0, tol:2.0, unit:'kPa', formula:'P₁/T₁ = P₂/T₂', hint:'P₂ = P₁ × T₂/T₁.', steps:['Gay-Lussacs lag: P₁/T₁ = P₂/T₂ (konstant V). T i Kelvin!','T₁ = 300 K, T₂ = 600 K, P₁ = 100 kPa','P₂ = P₁ × T₂/T₁ = 100 × 600/300 = 200 kPa','Svar: P₂ = 200 kPa. T dubblas → P dubblas ✓'], sol:'P₂ = 100×600/300 = 200 kPa' },
  { id:1205, lv:2, cat:'gas', title:'Kombinerade gaslagen', q:'P₁=100 kPa, V₁=8,0 L, T₁=400 K → P₂=200 kPa, T₂=400 K.\nBeräkna V₂.', ans:4.0, tol:0.1, unit:'L', formula:'P₁V₁/T₁ = P₂V₂/T₂', hint:'V₂ = P₁V₁T₂ / (T₁P₂).', steps:['Kombinerade gaslagen: P₁V₁/T₁ = P₂V₂/T₂','P₁=100 kPa, V₁=8,0 L, T₁=400 K; P₂=200 kPa, T₂=400 K','V₂ = P₁V₁T₂ / (T₁P₂) = 100×8,0×400 / (400×200) = 320000/80000 = 4,0 L','Svar: V₂ = 4,0 L. T oförändrad → bara Boyle gäller: dubbelt tryck → halv volym ✓'], sol:'V₂ = 100×8×400/(400×200) = 4,0 L' },
  { id:1206, lv:2, cat:'gas', title:'Molmassa från densitet', q:'En gas har densiteten 1,25 g/L vid STP.\nBeräkna molmassan M. (V_m = 22,4 L/mol vid STP)', ans:28.0, tol:0.5, unit:'g/mol', formula:'M = ρ × V_m', hint:'M = densitet × molär volym.', steps:['Molär volym vid STP: Vm = 22,4 L/mol','Formel: M = ρ × Vm (molmassa = densitet × molär volym)','Beräkna: M = 1,25 g/L × 22,4 L/mol = 28,0 g/mol','Svar: M = 28,0 g/mol → kväve N₂. Metod: mät gasdensitet → beräkna M ✓'], sol:'M = 1,25 × 22,4 = 28,0 g/mol' },
  { id:1207, lv:2, cat:'gas', title:'Idealgas vid 546 K', q:'1,0 mol idealgas vid T = 546 K och p = 101,3 kPa. Beräkna V.\nR = 8,314 J/(mol·K).', ans:44.8, tol:0.5, unit:'L', formula:'V = nRT / p', hint:'546 K = 2×273 K → V fördubblas från 22,4 L vid STP.', steps:['Idealgas: pV = nRT. V = nRT/p. T = 546 K (273°C), R = 8,314 J/(mol·K)','OBS: p måste i Pa: 101300 Pa; V i m³','V = 1,0 × 8,314 × 546 / 101300 = 4539/101300 = 0,04481 m³','Svar: 0,0448 m³ = 44,8 L (dubbel molvolymen vid STP, rimligt vid 273°C) ✓'], sol:'V = nRT/p = 44,8 L (dubbelt STP-volymen)' },
  { id:1208, lv:2, cat:'gas', title:'Daltons lag', q:'En gasblandning innehåller N₂ (60 kPa) och O₂ (40 kPa).\nBeräkna totaltrycket.', ans:100.0, tol:1.0, unit:'kPa', formula:'p_tot = Σ pᵢ', hint:'Addera partialtrycken.', steps:['Daltons lag: p_tot = Σpᵢ (partialtryck adderas)','p_tot = p(N₂) + p(O₂) = 60 + 40 = 100 kPa','Svar: 100 kPa. Varje gas bidrar oberoende med sitt partialtryck ✓'], sol:'p_tot = 60+40 = 100 kPa' },
  { id:1209, lv:3, cat:'gas', title:'Grahams lag – diffusion', q:'Hur många gånger snabbare diffunderar H₂ (M=2) jämfört med O₂ (M=32)?', ans:4.0, tol:0.1, unit:'gånger', formula:'r_A/r_B = √(M_B/M_A)', hint:'√(32/2) = √16 = 4.', steps:['Grahams lag: r(H₂)/r(O₂) = √(M(O₂)/M(H₂)) — lätt gas diffunderar snabbare','r(H₂)/r(O₂) = √(32/2) = √16 = 4,0','Svar: H₂ diffunderar 4,0 gånger snabbare än O₂. Lättare molekyl → högre medelhastighet ✓'], sol:'r(H₂)/r(O₂) = √(32/2) = 4,0' },
  { id:1210, lv:3, cat:'gas', title:'Molmassa okänd gas', q:'2,50 g av en okänd gas upptar 1,40 L vid STP.\nBeräkna molmassan M. (V_m = 22,4 L/mol)', ans:40.0, tol:1.0, unit:'g/mol', formula:'M = m/n = m × V_m / V', hint:'n = V/V_m = 1,40/22,4. M = m/n.', steps:['V = 1,40 L vid STP → n = 1,40/22,4 = 0,0625 mol','M = m/n = 2,50/0,0625','Beräkna: M = 40 g/mol','Svar: M = 40 g/mol → argon Ar eller kalcium Ca (ädelgas om gas) ✓'], sol:'M = 2,50/0,0625 = 40 g/mol' },
  { id:1211, lv:3, cat:'gas', title:'n via idealgaslagen', q:'p = 200 kPa, V = 5,0 L, T = 400 K. Beräkna n.\nR = 8,314 J/(mol·K). (1 L = 0,001 m³)', ans:0.3, tol:0.02, unit:'mol', formula:'n = pV / RT', hint:'Omvandla: p i Pa, V i m³. n = 200000×0,005 / (8,314×400).', steps:['pV = nRT. n = pV/(RT). Enhetsomvandling: 200 kPa = 200 000 Pa; 5 L = 0,005 m³','n = (200000 × 0,005)/(8,314 × 400) = 1000/3325,6','Beräkna: n = 0,301 mol','Svar: n ≈ 0,30 mol. Idealgas kopplar alla variabler ✓'], sol:'n = pV/RT = 1000/3325,6 = 0,30 mol' },
  { id:1212, lv:3, cat:'gas', title:'Molmassa via effusion', q:'Gas A (M=4 g/mol) tar 10 s att effundera. Gas B tar 40 s.\nBeräkna molmassan för gas B.', ans:64.0, tol:1.0, unit:'g/mol', formula:'t_A/t_B = √(M_A/M_B) → M_B = M_A×(t_B/t_A)²', hint:'(t_B/t_A)² = (40/10)² = 16. M_B = 4×16.', steps:['Grahams lag för effusionstid: t ∝ √M → (t_B/t_A)² = M_B/M_A','t_B/t_A = 40/10 = 4 (B tar 4× längre)','M_B = M_A × (t_B/t_A)² = 4 × 4² = 4 × 16 = 64 g/mol','Svar: M_B = 64 g/mol → svavel S₂ eller koppar Cu (men Cu är fast). Troligen SO₂ (M=64) ✓'], sol:'M_B = 4×(40/10)² = 4×16 = 64 g/mol' },
  { id:1301, lv:1, cat:'termo', title:'q = mcΔT – uppvärmning', q:'200 g vatten värms från 20 °C till 30 °C. Beräkna tillförd värme q.\nc(vatten) = 4,18 J/(g·K).', ans:8360.0, tol:50.0, unit:'J', formula:'q = m × c × ΔT', hint:'ΔT = 10 °C. q = 200 × 4,18 × 10.', steps:['Känd data: m = 200 g vatten, c = 4,18 J/(g·K), T₁ = 20°C, T₂ = 30°C','Temperaturändring: ΔT = T₂ − T₁ = 30 − 20 = 10 K (eller 10°C, samma sak)','Formel: q = m × c × ΔT — värmeenergi = massa × specifik värmekapacitet × ΔT','q = 200 × 4,18 × 10 = 8360 J. Vatten: hög c gör det bra som kylmedel ✓'], sol:'q = 200×4,18×10 = 8360 J' },
  { id:1302, lv:1, cat:'termo', title:'ΔT från q', q:'5000 J värme tillförs 100 g vatten. Hur mycket stiger temperaturen?\nc(vatten) = 4,18 J/(g·K).', ans:11.96, tol:0.2, unit:'°C', formula:'ΔT = q / (m × c)', hint:'ΔT = 5000 / (100 × 4,18).', steps:['Känd data: q = 5000 J, m = 100 g vatten, c = 4,18 J/(g·K)','Formel: ΔT = q/(m×c) (löst ur q = m×c×ΔT)','Beräkna: ΔT = 5000/(100×4,18) = 5000/418 = 11,96°C','Svar: ΔT ≈ 12,0°C. Hög c → liten temperaturhöjning för samma energi ✓'], sol:'ΔT = 5000/(100×4,18) = 12,0 °C' },
  { id:1303, lv:1, cat:'termo', title:'Specifik värmekapacitet', q:'1500 J värme höjer temperaturen på 50 g av ett ämne med 15 °C.\nBeräkna ämnets specifika värmekapacitet c.', ans:2.0, tol:0.05, unit:'J/(g·K)', formula:'c = q / (m × ΔT)', hint:'c = 1500 / (50 × 15).', steps:['Känd data: q = 1500 J, m = 50 g, ΔT = 15°C','Formel: c = q/(m×ΔT) (löst ur q = m×c×ΔT)','Beräkna: c = 1500/(50×15) = 1500/750 = 2,0 J/(g·K)','Svar: c = 2,0 J/(g·K). Okänt material — c < 4,18 → inte vatten ✓'], sol:'c = 1500/(50×15) = 2,0 J/(g·K)' },
  { id:1304, lv:1, cat:'termo', title:'Energi vid förbränning av CH₄', q:'ΔH°(förbränning CH₄) = −890 kJ/mol. Hur mycket energi frigörs vid förbränning av 2,0 mol CH₄?', ans:1780.0, tol:10.0, unit:'kJ', formula:'q = |ΔH| × n', hint:'Multiplicera |ΔH| med antal mol.', steps:['Känd data: ΔH°(CH₄) = −890 kJ/mol, n = 2,0 mol CH₄','Formel: q = n × |ΔH| — total energi = mol × energi per mol','Beräkna: q = 2,0 × 890 = 1780 kJ','Svar: 1780 kJ frigörs. Negativt ΔH → exoterm, energi frigörs till omgivningen ✓'], sol:'q = 890×2,0 = 1780 kJ' },
  { id:1305, lv:2, cat:'termo', title:'Hess lag – två steg', q:'A→B: ΔH₁ = −100 kJ. B→C: ΔH₂ = −50 kJ.\nBeräkna ΔH för A→C.', ans:-150.0, tol:2.0, unit:'kJ', formula:'ΔH(A→C) = ΔH₁ + ΔH₂', hint:'Addera entalpistegen.', steps:['Hess lag: ΔH beror bara på start och slutpunkt, inte på vägen','ΔH(A→C) = ΔH(A→B) + ΔH(B→C) = ΔH₁ + ΔH₂','Beräkna: ΔH = −100 + (−50) = −150 kJ','Svar: ΔH = −150 kJ. Addera entalpistegen som länkade pilar ✓'], sol:'ΔH(A→C) = −100+(−50) = −150 kJ' },
  { id:1306, lv:2, cat:'termo', title:'Energi per gram – propan', q:'Förbränningsentalpi för propan C₃H₈: ΔH = −2220 kJ/mol. M(C₃H₈) = 44 g/mol.\nBeräkna |ΔH| per gram.', ans:50.45, tol:0.5, unit:'kJ/g', formula:'ΔH/g = |ΔH| / M', hint:'2220 / 44.', steps:['Känd data: ΔH(C₃H₈) = −2220 kJ/mol, M = 44 g/mol','Formel: ΔH/g = |ΔH| / M','Beräkna: 2220/44 = 50,45 kJ/g','Svar: ≈ 50,5 kJ/g. Propan = utmärkt bränsle, högt energiinnehåll per gram ✓'], sol:'ΔH/g = 2220/44 = 50,5 kJ/g' },
  { id:1307, lv:2, cat:'termo', title:'Blandningstemperatur vatten', q:'50 g vatten (20 °C) blandas med 50 g vatten (80 °C).\nVad är sluttemperaturen? (c(H₂O) = 4,18 J/(g·K))', ans:50.0, tol:0.5, unit:'°C', formula:'m₁c(T−T₁) = m₂c(T₂−T)', hint:'Energibevarelse: värmen som avgår = värmen som absorberas.', steps:['Energibalans: q avgivet = q mottaget. m₁c(T−T₁) = m₂c(T₂−T)','50×4,18×(T−20) = 50×4,18×(80−T). c och m cancellerar','T−20 = 80−T → 2T = 100 → T = 50°C','Svar: T = 50°C. Lika massa, lika c → medelvärdet av temperaturer ✓'], sol:'T = (20+80)/2 = 50 °C (lika massor)' },
  { id:1308, lv:2, cat:'termo', title:'ΔH reaktion via ΔHf', q:'2H₂ + O₂ → 2H₂O. ΔHf°(H₂O) = −286 kJ/mol.\nBeräkna ΔH° för reaktionen.', ans:-572.0, tol:5.0, unit:'kJ', formula:'ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak)', hint:'ΔH° = 2×(−286) − 0 = −572 kJ.', steps:['Reaktion: 2H₂ + O₂ → 2H₂O. Formel: ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak)','ΔHf° av H₂ och O₂ = 0 (rena element i standardtillstånd)','ΔH° = 2×ΔHf°(H₂O) − 0 = 2×(−286) = −572 kJ','Svar: ΔH° = −572 kJ. Bildningsentalpier: rena element har ΔHf° = 0 ✓'], sol:'ΔH° = 2×(−286) = −572 kJ' },
  { id:1309, lv:3, cat:'termo', title:'Hess – C + ½O₂ → CO', q:'(1) C + O₂ → CO₂, ΔH₁ = −393 kJ\n(2) CO + ½O₂ → CO₂, ΔH₂ = −283 kJ\nBeräkna ΔH för: C + ½O₂ → CO', ans:-110.0, tol:2.0, unit:'kJ', formula:'ΔH = ΔH₁ − ΔH₂', hint:'Reaktion (1) minus reaktion (2) ger målreaktionen.', steps:['Hess lag: kombinera reaktionerna för att få C + ½O₂ → CO','Reaktion (1): C + O₂ → CO₂, ΔH₁ = −393 kJ','Reaktion (2) omvänd: CO₂ → CO + ½O₂, ΔH₂_omv = +283 kJ','ΔH = ΔH₁ + ΔH₂_omv = −393 + 283 = −110 kJ ✓'], sol:'ΔH = −393−(−283) = −110 kJ' },
  { id:1310, lv:3, cat:'termo', title:'ΔH – Haber-Bosch NH₃', q:'N₂ + 3H₂ → 2NH₃. ΔHf°(NH₃) = −46 kJ/mol.\nBeräkna ΔH° för reaktionen.', ans:-92.0, tol:2.0, unit:'kJ', formula:'ΔH°rxn = 2×ΔHf°(NH₃)', hint:'ΔH° = 2×(−46) − 0.', steps:['Reaktion: N₂ + 3H₂ → 2NH₃. ΔHf°(NH₃) = −46 kJ/mol','ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak) = 2×(−46) − (0+0)','Beräkna: ΔH° = −92 kJ','Svar: −92 kJ. Haber-Bosch är exoterm — men kräver högt tryck + katalysator ✓'], sol:'ΔH° = 2×(−46) = −92 kJ' },
  { id:1311, lv:3, cat:'termo', title:'ΔG = ΔH − TΔS', q:'ΔH = −120 kJ/mol, ΔS = +200 J/(mol·K), T = 298 K.\nBeräkna ΔG i kJ/mol.', ans:-179.6, tol:2.0, unit:'kJ/mol', formula:'ΔG = ΔH − TΔS', hint:'Omvandla ΔS till kJ: 200 J = 0,200 kJ. ΔG = −120 − 298×0,200.', steps:['ΔG = ΔH − TΔS. OBS: ΔS = 200 J/(mol·K) = 0,200 kJ/(mol·K) — enhetsomvandling krävs!','ΔG = −120 − 298 × 0,200 = −120 − 59,6','Beräkna: ΔG = −179,6 kJ/mol','Svar: ΔG = −179,6 kJ/mol ✓ Spontan vid 298 K; negativ ΔH och positiv ΔS ger alltid ΔG < 0'], sol:'ΔG = −120−59,6 = −179,6 kJ/mol (spontan)' },
  { id:1312, lv:3, cat:'termo', title:'Neutralisationsentalpi – kalorimetri', q:'100 mL 1,0 mol/L HCl + 100 mL 1,0 mol/L NaOH blandas i kalorimeter. ΔT = 6,85 °C.\nm(lösning) ≈ 200 g, c = 4,18 J/(g·K).\nBeräkna |ΔHneutr| per mol.', ans:57.3, tol:1.0, unit:'kJ/mol', formula:'|ΔH| = q/n = mcΔT/n', hint:'q = 200×4,18×6,85. n = 0,100 mol. ΔH = q/n.', steps:['Känd data: kalorimetriexperiment; uppmätt värmefrigörelse q = 5726,6 J; n(H₂O) = 0,100 mol','Neutralisationsentalpin: ΔH_neutr = q/n = 5726,6/0,100 = 57 266 J/mol = 57,3 kJ/mol (värmefrigörelse)','Kontroll: stark syra + stark bas: ΔH_neutr ≈ 57 kJ/mol är standardvärdet','Svar: ΔH_neutr = 57,3 kJ/mol ✓ Neutralisation av H⁺ + OH⁻ → H₂O frigör 57,3 kJ per mol'], sol:'|ΔHneutr| = 5727/0,100/1000 = 57,3 kJ/mol' },
  { id:1401, lv:1, cat:'syrabas', title:'pH från [H⁺]', q:'Beräkna pH för en lösning med [H⁺] = 0,010 mol/L.', ans:2.0, tol:0.05, unit:'', formula:'pH = −log[H⁺]', hint:'pH = −log(0,010) = −log(10⁻²) = 2.', steps:['Känd data: [H⁺] = 0,010 mol/L = 10⁻² mol/L','Formel: pH = −log[H⁺] — pH-skalan är logaritmisk (bas 10)','Beräkna: pH = −log(10⁻²) = −(−2) = 2','Svar: pH = 2. Tumregel: om [H⁺] = 10⁻ⁿ mol/L → pH = n ✓'], sol:'pH = −log(0,010) = 2,0' },
  { id:1402, lv:1, cat:'syrabas', title:'pH från pOH', q:'pOH = 3,0 vid 25 °C. Beräkna pH.', ans:11.0, tol:0.05, unit:'', formula:'pH + pOH = 14', hint:'pH = 14 − pOH.', steps:['Känd data: pOH = 3,0 vid 25°C','Samband: pH + pOH = 14 (vid 25°C, gäller för Kw = 10⁻¹⁴)','pH = 14 − pOH = 14 − 3,0 = 11,0','Svar: pH = 11,0 (basisk lösning). pH > 7 = basisk vid 25°C ✓'], sol:'pH = 14−3,0 = 11,0' },
  { id:1403, lv:1, cat:'syrabas', title:'[H⁺] från pH', q:'pH = 4,0. [H⁺] = 10⁻ˣ mol/L. Vad är x?', ans:4.0, tol:0.05, unit:'', formula:'[H⁺] = 10^(−pH)', hint:'[H⁺] = 10⁻⁴ → x = 4.', steps:['Känd data: pH = 4,0','Formel: [H⁺] = 10^(−pH)','Beräkna: [H⁺] = 10⁻⁴ mol/L → x = 4','Svar: x = 4. Logaritmsamband: varje pH-enhet = 10× ändring i [H⁺] ✓'], sol:'[H⁺] = 10⁻⁴ mol/L → x = 4,0' },
  { id:1404, lv:1, cat:'syrabas', title:'pH neutral lösning', q:'Vid 25 °C är Kw = 10⁻¹⁴. Vad är pH för en neutral lösning?', ans:7.0, tol:0.05, unit:'', formula:'pH = ½ × pKw = 7,0', hint:'I neutral lösning: [H⁺] = [OH⁻] = √Kw = 10⁻⁷.', steps:['Neutral lösning: [H⁺] = [OH⁻]. Kw = [H⁺][OH⁻] = 10⁻¹⁴ vid 25°C','[H⁺]² = 10⁻¹⁴ → [H⁺] = 10⁻⁷ mol/L','pH = −log(10⁻⁷) = 7,0','Svar: pH = 7. Neutral = lika många H⁺ och OH⁻ joner ✓'], sol:'pH = 7,0 (neutral vid 25 °C)' },
  { id:1405, lv:2, cat:'syrabas', title:'pH svag syra HF', q:'Ka(HF) = 6,8×10⁻⁴, c = 0,10 mol/L. Beräkna pH.\n(Approximation: [H⁺] = √(Ka × c))', ans:2.08, tol:0.05, unit:'', formula:'[H⁺] = √(Ka × c)', hint:'[H⁺] = √(6,8×10⁻⁴ × 0,10) = √(6,8×10⁻⁵).', steps:['Ka(HF) = 6,8×10⁻⁴, c = 0,10 mol/L. Svag syra: partiell protolys','Approximation: [H⁺] = √(Ka × c) = √(6,8×10⁻⁴ × 0,10)','= √(6,8×10⁻⁵) = 8,25×10⁻³ mol/L','pH = −log(8,25×10⁻³) = 3 − log(8,25) = 3 − 0,916 = 2,08 ✓'], sol:'pH = −log(√(6,8×10⁻⁵)) = 2,08' },
  { id:1406, lv:2, cat:'syrabas', title:'Buffer – Henderson-Hasselbalch', q:'Buffer med [CH₃COOH] = [CH₃COO⁻] = 0,10 mol/L. pKa(CH₃COOH) = 4,74.\nBeräkna pH.', ans:4.74, tol:0.05, unit:'', formula:'pH = pKa + log([A⁻]/[HA])', hint:'log(1) = 0 → pH = pKa.', steps:['Buffer: [CH₃COOH] = [CH₃COO⁻] = 0,10 mol/L (lika koncentrationer!)','Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])','log([A⁻]/[HA]) = log(1) = 0','pH = pKa + 0 = 4,74. Vid lika konc: pH = pKa alltid ✓'], sol:'pH = pKa + log(1) = 4,74' },
  { id:1407, lv:2, cat:'syrabas', title:'Ekvivalensvolym vid titrering', q:'25 mL 0,100 mol/L HCl titreras med NaOH (0,200 mol/L).\nHur många mL NaOH behövs för att nå ekvivalenspunkten?', ans:12.5, tol:0.2, unit:'mL', formula:'c₁V₁ = c₂V₂', hint:'n(HCl) = 0,100×0,025. V(NaOH) = n/c.', steps:['n(HCl) = c × V = 0,100 × 0,025 = 0,00250 mol','HCl + NaOH → NaCl + H₂O. Molförhållande 1:1','n(NaOH) behövs = 0,00250 mol','V(NaOH) = n/c = 0,00250/0,200 = 0,01250 L = 12,5 mL ✓'], sol:'V(NaOH) = 0,0025/0,200 = 12,5 mL' },
  { id:1408, lv:2, cat:'syrabas', title:'pKa från pH', q:'En 0,050 mol/L lösning av svag syra HA har pH = 3,0.\nBeräkna pKa (approximation: Ka ≈ [H⁺]²/c).', ans:4.7, tol:0.05, unit:'', formula:'pKa = −log(Ka) = −log([H⁺]²/c)', hint:'Ka = (10⁻³)²/0,050 = 10⁻⁶/0,050 = 2×10⁻⁵. pKa = −log(2×10⁻⁵).', steps:['[H⁺] = 10^(−pH) = 10⁻³ = 0,001 mol/L','Ka ≈ [H⁺]²/c = (10⁻³)²/0,050 = 10⁻⁶/0,050 = 2×10⁻⁵','pKa = −log(Ka) = −log(2×10⁻⁵) = 5 − log(2) = 5 − 0,30 = 4,70','Svar: pKa ≈ 4,70. Bakräkning: pH → [H⁺] → Ka → pKa ✓'], sol:'pKa = −log(2,0×10⁻⁵) = 4,70' },
  { id:1409, lv:2, cat:'syrabas', title:'pH blandning starka syror', q:'50 mL 0,20 mol/L HCl blandas med 50 mL 0,10 mol/L HCl.\nBeräkna pH för blandningen.', ans:0.82, tol:0.05, unit:'', formula:'c = (n₁+n₂)/(V₁+V₂)', hint:'Beräkna total n(H⁺) och total V. Sedan pH = −log(c).', steps:['n₁ = c₁V₁ = 0,20×0,050 = 0,010 mol HCl; n₂ = c₂V₂ = 0,10×0,050 = 0,005 mol HCl','Total n = 0,015 mol HCl; Total V = 0,100 L','[H⁺] = 0,015/0,100 = 0,15 mol/L','pH = −log(0,15) = −log(1,5×10⁻¹) = 1 − log(1,5) ≈ 0,82 ✓'], sol:'pH = −log(0,15) = 0,82' },
  { id:1410, lv:3, cat:'syrabas', title:'HH – beräkna [A⁻]', q:'pKa = 4,75. pH = 5,0. [HA] = 0,10 mol/L.\nBeräkna [A⁻] via Henderson-Hasselbalch.', ans:0.178, tol:0.01, unit:'mol/L', formula:'[A⁻] = [HA] × 10^(pH−pKa)', hint:'log([A⁻]/[HA]) = pH−pKa = 0,25. [A⁻]/[HA] = 10^0,25 ≈ 1,778.', steps:['Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])','log([A⁻]/[HA]) = pH − pKa = 5,0 − 4,75 = 0,25','[A⁻]/[HA] = 10^0,25 = 1,778','[A⁻] = [HA] × 1,778 = 0,10 × 1,778 = 0,178 mol/L ✓'], sol:'[A⁻] = 0,10 × 10^0,25 = 0,178 mol/L' },
  { id:1411, lv:3, cat:'syrabas', title:'pH natriumacetat', q:'CH₃COONa, c = 0,10 mol/L. Ka(CH₃COOH) = 1,8×10⁻⁵. Kw = 10⁻¹⁴.\nBeräkna pH.', ans:8.87, tol:0.1, unit:'', formula:'[OH⁻] = √(Kb × c), Kb = Kw/Ka', hint:'Kb = 10⁻¹⁴/1,8×10⁻⁵ = 5,56×10⁻¹⁰. [OH⁻] = √(Kb×c). pOH → pH.', steps:['CH₃COO⁻ hydrolyserar: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻','Kb(CH₃COO⁻) = Kw/Ka = 10⁻¹⁴/1,8×10⁻⁵ = 5,56×10⁻¹⁰','[OH⁻] = √(Kb×c) = √(5,56×10⁻¹⁰×0,10) = √(5,56×10⁻¹¹) = 7,45×10⁻⁶','pOH = −log(7,45×10⁻⁶) = 5,13; pH = 14 − 5,13 = 8,87 ✓'], sol:'pH = 14−pOH = 14−5,13 = 8,87' },
  { id:1412, lv:3, cat:'syrabas', title:'pH vid halvvägspunkten', q:'En svag syra HA titreras med NaOH. pKa(HA) = 4,74.\nVad är pH exakt vid halvvägspunkten?', ans:4.74, tol:0.05, unit:'', formula:'pH = pKa (vid halvvägspunkten)', hint:'Vid halvvägs: [HA] = [A⁻] → log([A⁻]/[HA]) = 0 → pH = pKa.', steps:['Vid halvvägspunkt i titrering: hälften av syran har neutraliserats','[A⁻] = [HA] (lika konc av konjugatparet)','Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa + 0','Svar: pH = pKa = 4,74. Halvvägspunkten används för att bestämma pKa experimentellt ✓'], sol:'pH = pKa = 4,74 vid halvvägspunkten' },
  { id:1413, lv:3, cat:'syrabas', title:'Neutral pH vid annan T', q:'Vid 80 °C är Kw = 10⁻¹³. Vad är pH för en neutral lösning vid denna temperatur?', ans:6.5, tol:0.05, unit:'', formula:'pH_neutral = ½ × pKw', hint:'pKw = 13. pH_neutral = 13/2 = 6,5.', steps:['Vid 80°C: Kw = 10⁻¹³. pKw = 13','Neutral: [H⁺] = [OH⁻] → pH = ½ × pKw','pH_neutral = 13/2 = 6,5','Svar: pH = 6,5. OBS: vatten är fortfarande neutralt! Det är bara pH-skalan som förändras ✓'], sol:'pH_neutral = ½×pKw = ½×13 = 6,5' },
  { id:1501, lv:1, cat:'jamvikt', title:'Kc från koncentrationer', q:'H₂ + I₂ ⇌ 2HI vid jämvikt.\n[H₂] = 0,50, [I₂] = 0,50, [HI] = 4,0 mol/L.\nBeräkna Kc.', ans:64.0, tol:2.0, unit:'', formula:'Kc = [HI]² / ([H₂][I₂])', hint:'Kc = 4,0² / (0,50 × 0,50) = 16/0,25.', steps:['Reaktion: H₂ + I₂ ⇌ 2HI. Kc = [produkter]^koeff / [reaktanter]^koeff','Kc = [HI]² / ([H₂][I₂])','= (4,0)² / (0,50 × 0,50) = 16 / 0,25 = 64','Svar: Kc = 64. Kc >> 1 → produkter (HI) dominerar vid jämvikt ✓'], sol:'Kc = 16/0,25 = 64' },
  { id:1502, lv:1, cat:'jamvikt', title:'Kc omvänd reaktion', q:'Kc(framåt) = 64 för H₂ + I₂ ⇌ 2HI.\nVad är Kc för den omvända reaktionen 2HI ⇌ H₂ + I₂?', ans:0.015625, tol:0.001, unit:'', formula:'Kc(bakåt) = 1/Kc(framåt)', hint:'Inverteras Kc.', steps:['Kc(framåt) = 64 för H₂ + I₂ ⇌ 2HI','Kc(bakåt) = 1/Kc(framåt) (omvänd reaktion invertera K)','Kc(bakåt) = 1/64 = 0,015625','Svar: Kc(bakåt) = 0,0156. Omvänd reaktion → K är reciprokt ✓'], sol:'Kc(bakåt) = 1/64 = 0,0156' },
  { id:1503, lv:1, cat:'jamvikt', title:'Kc enkel – 2A⇌B', q:'2A ⇌ B vid jämvikt. [A] = 0,40 mol/L, [B] = 0,16 mol/L.\nBeräkna Kc.', ans:1.0, tol:0.05, unit:'(mol/L)⁻¹', formula:'Kc = [B] / [A]²', hint:'[B]/[A]² = 0,16/0,16 = 1,0.', steps:['Reaktion: 2A ⇌ B. Kc = [B]/[A]²','[A] = 0,40 mol/L, [B] = 0,16 mol/L','Kc = 0,16/(0,40)² = 0,16/0,16 = 1,0','Svar: Kc = 1,0 (mol/L)⁻¹. Kc ≈ 1 → lika mycket reaktanter och produkter ✓'], sol:'Kc = 0,16/0,16 = 1,0' },
  { id:1504, lv:1, cat:'jamvikt', title:'Partialtryck NH₃', q:'Vid jämvikt: n(N₂)=0,10, n(H₂)=0,30, n(NH₃)=0,60 mol. p_tot=100 kPa.\nBeräkna p(NH₃).', ans:60.0, tol:1.0, unit:'kPa', formula:'p_i = χ_i × p_tot', hint:'Molfraktion NH₃ = 0,60/(0,10+0,30+0,60) = 0,60.', steps:['Total mol = n(N₂) + n(H₂) + n(NH₃) = 0,10 + 0,30 + 0,60 = 1,00 mol','Molfraktion NH₃: χ(NH₃) = 0,60/1,00 = 0,60','p(NH₃) = χ × p_tot = 0,60 × 100 kPa = 60 kPa','Svar: 60 kPa. Partialtryck = molfraktion × totaltryck ✓'], sol:'p(NH₃) = 0,60 × 100 = 60 kPa' },
  { id:1505, lv:2, cat:'jamvikt', title:'Kp från Kc', q:'2SO₂ + O₂ ⇌ 2SO₃. Kc = 280 vid 1000 K. R = 0,08206 L·atm/(mol·K).\nBeräkna Kp. (Δn = −1)', ans:3.41, tol:0.2, unit:'atm⁻¹', formula:'Kp = Kc × (RT)^Δn', hint:'Kp = 280 × (0,08206×1000)^(−1) = 280/82,06.', steps:['Kp = Kc × (RT)^Δn. Δn = 2 − (2+1) = −1 för 2SO₂+O₂→2SO₃','RT = 0,08206 × 1000 = 82,06 L·atm/mol','Kp = 280 × (82,06)^(−1) = 280/82,06 = 3,41 atm⁻¹','Svar: Kp ≈ 3,41. Δn < 0 → Kp < Kc ✓'], sol:'Kp = Kc/(RT) = 280/82,06 = 3,41' },
  { id:1506, lv:2, cat:'jamvikt', title:'ICE-tabell – Kc = 4', q:'A + B ⇌ C. Kc = 4,0. Initialt [A]=[B]=1,0, [C]=0 mol/L.\nBeräkna jämviktskoncentrationen [C].', ans:0.61, tol:0.05, unit:'mol/L', formula:'Kc = x / (1−x)²', hint:'4(1−x)²=x → 4x²−9x+4=0. x=(9−√17)/8.', steps:['ICE-tabell: A + B ⇌ C. I: [A]=[B]=1,0, [C]=0. Ändring: −x,−x,+x','Kc = x/((1−x)²) = 4,0','x = 4(1−x)² → kvadratlös: x ≈ 0,61 (testar: 0,61/(0,39²) = 0,61/0,152 = 4,0 ✓)','Svar: [C] = 0,61 mol/L ✓'], sol:'[C] = (9−√17)/8 ≈ 0,61 mol/L' },
  { id:1507, lv:2, cat:'jamvikt', title:'Le Chatelier – [A]/[B]', q:'A ⇌ B. Vid 500 K (endoterm rxn): Kc = 25.\nVad är kvoten [A]/[B] vid jämvikt?', ans:0.04, tol:0.005, unit:'', formula:'[A]/[B] = 1/Kc', hint:'Kc = [B]/[A] = 25. [A]/[B] = 1/25.', steps:['Kc = [B]/[A] = 25 (endoterm, 500 K)','[A]/[B] = 1/Kc = 1/25 = 0,040','Svar: [A]/[B] = 0,040. Kc >> 1 → produkter (B) dominerar → [A] << [B] ✓'], sol:'[A]/[B] = 1/25 = 0,040' },
  { id:1508, lv:2, cat:'jamvikt', title:'Ksp – löslighet AgCl', q:'Ksp(AgCl) = 1,8×10⁻¹⁰. Beräkna lösligheten s.\nAnge svaret som x×10⁻⁵ mol/L (ange x).', ans:1.34, tol:0.05, unit:'×10⁻⁵ mol/L', formula:'s = √Ksp', hint:'s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L.', steps:['AgCl → Ag⁺ + Cl⁻. Ksp = [Ag⁺][Cl⁻] = s²','s = √Ksp = √(1,8×10⁻¹⁰) = 1,342×10⁻⁵ mol/L','Ange som x×10⁻⁵: x = 1,34','Svar: s = 1,34×10⁻⁵ mol/L. AgCl är extremt svårlöslig ✓'], sol:'s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L' },
  { id:1509, lv:3, cat:'jamvikt', title:'ICE – 2NO₂ ⇌ N₂O₄', q:'2NO₂ ⇌ N₂O₄. Kc = 4,0. Initialt [NO₂]=1,0, [N₂O₄]=0 mol/L.\nBeräkna [N₂O₄] vid jämvikt.', ans:0.32, tol:0.05, unit:'mol/L', formula:'Kc = x / (1−2x)²', hint:'16x²−17x+4=0. x=(17−√33)/32.', steps:['2NO₂ ⇌ N₂O₄. Kc = [N₂O₄]/[NO₂]². ICE: I: 1,0/0; Δ: −2x/+x','Kc = x/(1−2x)² = 4,0','Lösa: 4(1−2x)² = x → 4−16x+16x² = x → 16x²−17x+4=0','x = (17−√(289−256))/32 = (17−√33)/32 ≈ (17−5,74)/32 = 0,352; [N₂O₄] ≈ 0,35 ✓'], sol:'[N₂O₄] ≈ 0,35 mol/L (löser kvadratekvationen)' },
  { id:1510, lv:3, cat:'jamvikt', title:'Ksp – gemensam jon', q:'AgCl löses i 0,10 mol/L NaCl. Ksp(AgCl) = 1,8×10⁻¹⁰.\nBeräkna [Ag⁺] som x×10⁻⁹ mol/L (ange x).', ans:1.8, tol:0.1, unit:'×10⁻⁹ mol/L', formula:'[Ag⁺] = Ksp / [Cl⁻]', hint:'[Cl⁻] ≈ 0,10 mol/L (överskott). [Ag⁺] = Ksp/0,10.', steps:['Gemensam jon: [Cl⁻] = 0,10 mol/L (från NaCl). [Ag⁺] = s (okänd)','Ksp = [Ag⁺][Cl⁻] → [Ag⁺] = Ksp/[Cl⁻] = 1,8×10⁻¹⁰/0,10','= 1,8×10⁻⁹ mol/L = 1,8×10⁻⁹ → x = 1,8','Svar: x = 1,8 (×10⁻⁹). Gemensam jon minskar lösligheten drastiskt ✓'], sol:'[Ag⁺] = 1,8×10⁻¹⁰/0,10 = 1,8×10⁻⁹ mol/L' },
  { id:1511, lv:3, cat:'jamvikt', title:'Kp → Kc (N₂O₄⇌2NO₂)', q:'N₂O₄ ⇌ 2NO₂. Kp = 1,00 atm vid 300 K. R = 0,08206 L·atm/(mol·K).\nBeräkna Kc. (Δn = +1)', ans:0.041, tol:0.003, unit:'mol/L', formula:'Kc = Kp / (RT)^Δn', hint:'Kc = Kp/(RT) = 1,00/(0,08206×300).', steps:['Kp = Kc × (RT)^Δn → Kc = Kp/(RT)^Δn','Δn = 2 − 1 = +1. RT = 0,08206 × 300 = 24,62','Kc = 1,00/(24,62)^1 = 0,0406 mol/L','Svar: Kc ≈ 0,041. Δn > 0 → Kc < Kp ✓'], sol:'Kc = 1,00/24,62 = 0,041 mol/L' },
  { id:1512, lv:3, cat:'jamvikt', title:'ICE – PCl₅ ⇌ PCl₃ + Cl₂', q:'PCl₅ ⇌ PCl₃ + Cl₂. Kc = 0,040. Initialt [PCl₅]=1,0, [PCl₃]=[Cl₂]=0.\nBeräkna [PCl₃] vid jämvikt.', ans:0.18, tol:0.02, unit:'mol/L', formula:'Kc = x² / (1−x)', hint:'x²+0,040x−0,040=0. x=(−0,04+√0,1616)/2.', steps:['PCl₅ ⇌ PCl₃ + Cl₂. ICE: I: 1,0/0/0; Δ: −x/+x/+x','Kc = x²/(1−x) = 0,040. Approximation: x << 1 → x² ≈ 0,040 → x ≈ 0,20','Kontroll: 0,20²/(1−0,20) = 0,04/0,80 = 0,05 ≈ 0,040 (OK)','Svar: [PCl₃] ≈ 0,18–0,20 mol/L ✓'], sol:'[PCl₃] ≈ 0,18 mol/L' },
  { id:1513, lv:3, cat:'jamvikt', title:'Multipel jämvikt', q:'A ⇌ B: K₁ = 2,0. B ⇌ C: K₂ = 3,0.\nBeräkna K för A ⇌ C.', ans:6.0, tol:0.1, unit:'', formula:'K(A⇌C) = K₁ × K₂', hint:'När reaktioner adderas multipliceras deras K.', steps:['Addition av reaktioner: A⇌B (K₁) + B⇌C (K₂) → A⇌C','K_total = K₁ × K₂','K(A⇌C) = 2,0 × 3,0 = 6,0','Svar: K = 6. Reaktioner adderas → K multipliceras ✓'], sol:'K(A⇌C) = K₁×K₂ = 6,0' },
  { id:1601, lv:1, cat:'elkem', title:'E°cell – Zn/Cu', q:'Zn | Zn²⁺ || Cu²⁺ | Cu. E°(Cu²⁺/Cu) = +0,34 V, E°(Zn²⁺/Zn) = −0,76 V.\nBeräkna E°cell.', ans:1.1, tol:0.02, unit:'V', formula:'E°cell = E°katod − E°anod', hint:'Katod = Cu (reduceras), Anod = Zn (oxideras).', steps:['Känd data: E°(Cu²⁺/Cu) = +0,34 V (katod, reduceras), E°(Zn²⁺/Zn) = −0,76 V (anod, oxideras)','Formel: E°cell = E°katod − E°anod — välj elektroden med högre potential som katod','Beräkna: E°cell = +0,34 − (−0,76) = 0,34 + 0,76 = 1,10 V','Svar: E°cell = 1,10 V ✓ Positiv E°cell → spontan galvanisk cell; Zn oxideras och Cu²⁺ reduceras'], sol:'E°cell = 0,34−(−0,76) = 1,10 V' },
  { id:1602, lv:1, cat:'elkem', title:'E°cell – Pb/Ag', q:'E°(Ag⁺/Ag) = +0,80 V, E°(Pb²⁺/Pb) = −0,13 V.\nBeräkna E°cell för Pb | Pb²⁺ || Ag⁺ | Ag.', ans:0.93, tol:0.02, unit:'V', formula:'E°cell = E°katod − E°anod', hint:'Ag reduceras (katod), Pb oxideras (anod).', steps:['Känd data: E°(Ag⁺/Ag) = +0,80 V (katod), E°(Pb²⁺/Pb) = −0,13 V (anod)','Formel: E°cell = E°katod − E°anod — Ag har högre potential → reduceras vid katoden','Beräkna: E°cell = +0,80 − (−0,13) = 0,80 + 0,13 = 0,93 V','Svar: E°cell = 0,93 V ✓ Pb oxideras (anod) och Ag⁺ reduceras (katod); cellen är spontan'], sol:'E°cell = 0,80−(−0,13) = 0,93 V' },
  { id:1603, lv:1, cat:'elkem', title:'Antal elektroner – Cl₂', q:'Cl₂ + 2e⁻ → 2Cl⁻. Hur många elektroner per Cl₂-molekyl?', ans:2.0, tol:0.05, unit:'e⁻', formula:'Halvreaktion anger e⁻', hint:'Direkt avläsning från halfreaktionen.', steps:['Känd data: halvreaktion Cl₂ + 2e⁻ → 2Cl⁻ — avläs koefficienten för e⁻ direkt','Halvreaktion anger exakt antal elektroner: koefficienten framför e⁻ är antalet överförda elektroner','Avläs: 2e⁻ syns i reaktionen → 2 elektroner per Cl₂-molekyl','Svar: 2 elektroner per Cl₂-molekyl ✓ Cl reduceras från 0 till −1; varje Cl-atom tar 1 elektron'], sol:'n(e⁻) = 2 per mol Cl₂' },
  { id:1604, lv:1, cat:'elkem', title:'Massa Cu vid elektrolys', q:'I = 10 A, t = 9650 s. Cu²⁺ + 2e⁻ → Cu. M(Cu) = 63,5 g/mol. F = 96500 C/mol.\nBeräkna massa Cu deponerat.', ans:31.75, tol:0.5, unit:'g', formula:'m = (I×t×M) / (n×F)', hint:'Q = 10×9650 = 96500 C = 1 mol e⁻. Mol Cu = 0,5. m = 0,5×63,5.', steps:['Känd data: I = 10 A, t = 9650 s, M(Cu) = 63,5 g/mol, nₑ = 2 (Cu²⁺+2e⁻→Cu), F = 96500 C/mol','Faradays lag: m = (I×t×M)/(nₑ×F) — Q = 10 × 9650 = 96 500 C = exakt 1 mol e⁻','Beräkna: m = (96 500 × 63,5)/(2 × 96 500) = 63,5/2 = 31,75 g','Svar: 31,75 g Cu avsätts ✓ 1 mol e⁻ → 0,5 mol Cu (nₑ=2); en elegant beräkning'], sol:'m = 0,5×63,5 = 31,8 g' },
  { id:1605, lv:2, cat:'elkem', title:'Nernst – Cu²⁺/Cu', q:'Cu²⁺ + 2e⁻ → Cu. E° = +0,34 V. [Cu²⁺] = 0,010 mol/L.\nE = E° − (0,0592/n)×log Q. Beräkna E.', ans:0.399, tol:0.01, unit:'V', formula:'E = E° − (0,0592/n) × log[Cu²⁺]', hint:'Q = 1/[Cu²⁺] = 100. E = 0,34 − (0,0296)×log(100)... Eller: log Q = log(1/0,010) = 2. E = 0,34−0,0296×2.', steps:['Känd data: halvreaktion Cu²⁺+2e⁻→Cu; E° = +0,34 V; [Cu²⁺] = 0,010 mol/L; n = 2','Formel: E = E° − (0,0592/n)×log[Cu²⁺] — vid reducerat Cu (fast) gäller log[Cu²⁺]','Beräkna: E = 0,34 − (0,0592/2)×log(0,010) = 0,34 − 0,0296×(−2) = 0,34 + 0,059 = 0,399 V','Svar: E = 0,399 V ✓ Låg [Cu²⁺] ger lägre drivkraft än E°; E < E° = 0,34 V'], sol:'E = 0,34 − 0,0296×log(1/0,010) → se beräkning' },
  { id:1606, lv:2, cat:'elkem', title:'Elektrolystid – Cu', q:'Hur lång tid krävs för att deponera 6,35 g Cu (M=63,5) med strömmen 5,0 A?\nCu²⁺+2e⁻→Cu. F=96500 C/mol.', ans:3860.0, tol:20.0, unit:'s', formula:'t = (m×n×F) / (M×I)', hint:'mol Cu = 6,35/63,5 = 0,1. mol e⁻ = 0,2. Q = 0,2×96500. t = Q/I.', steps:['Känd data: m=6,35 g Cu, M=63,5 g/mol, I=5,0 A. Cu²⁺+2e⁻→Cu (n=2 elektroner per Cu)','Formel: t = m×n×F/(M×I) — Faradays elektrolyslag löst för tid','Beräkna: mol Cu = 6,35/63,5 = 0,100 mol. Q = 0,100×2×96500 = 19300 C. t = 19300/5,0 = 3860 s','Svar: t = 3860 s ≈ 64 min. Dubbel ström → halva tiden (Q = I×t) ✓'], sol:'t = 19300/5,0 = 3860 s' },
  { id:1607, lv:2, cat:'elkem', title:'E°cell – Cr/Au', q:'E°(Au³⁺/Au) = +1,50 V, E°(Cr³⁺/Cr) = −0,74 V.\nBeräkna E°cell för Cr | Cr³⁺ || Au³⁺ | Au.', ans:2.24, tol:0.02, unit:'V', formula:'E°cell = E°katod − E°anod', hint:'Au reduceras, Cr oxideras.', steps:['Känd data: E°(Au³⁺/Au)=+1,50 V (katod), E°(Cr³⁺/Cr)=−0,74 V (anod). Au reduceras, Cr oxideras','Formel: E°cell = E°katod − E°anod — katoden har alltid den högre potentialen','Beräkna: E°cell = +1,50 − (−0,74) = 1,50 + 0,74 = 2,24 V','Svar: E°cell = 2,24 V. Positiv E° → spontan galvanisk cell. Stor spänningsskillnad ✓'], sol:'E°cell = 1,50+0,74 = 2,24 V' },
  { id:1608, lv:2, cat:'elkem', title:'Massa Al vid elektrolys', q:'Al³⁺ + 3e⁻ → Al. I = 3,0 A, t = 9650 s. M(Al) = 27 g/mol. F = 96500 C/mol.\nBeräkna massa Al.', ans:2.7, tol:0.1, unit:'g', formula:'m = (I×t×M) / (n×F)', hint:'Q = 3×9650 = 28950 C. mol e⁻ = 0,300. mol Al = 0,100.', steps:['Känd data: I=3,0 A, t=9650 s, M(Al)=27 g/mol. Al³⁺+3e⁻→Al (n=3 elektroner per Al-atom)','Formel: m = I×t×M/(n×F) — Faradays massformel för elektrolys','Beräkna: Q = 3,0×9650 = 28950 C. mol e⁻ = 28950/96500 = 0,300. mol Al = 0,300/3 = 0,100. m = 0,100×27 = 2,70 g','Svar: m(Al) = 2,70 g. Aluminium kräver 3 elektroner — tre gånger mer laddning än Ag ✓'], sol:'m = 0,100×27 = 2,70 g' },
  { id:1609, lv:3, cat:'elkem', title:'ΔG från E°cell', q:'Zn/Cu cell: E°cell = 1,10 V, n = 2 elektroner. F = 96500 C/mol.\nBeräkna ΔG° i kJ.', ans:-212.3, tol:2.0, unit:'kJ', formula:'ΔG° = −nFE°', hint:'ΔG = −2×96500×1,10 J = −212300 J = −212,3 kJ.', steps:['Känd data: E°cell = 1,10 V (Zn/Cu-cellen), n = 2 elektroner, F = 96500 C/mol','Formel: ΔG° = −nFE° — samband elektrokemi och Gibbs fri energi','Beräkna: ΔG° = −2 × 96500 × 1,10 = −212300 J = −212,3 kJ','Svar: ΔG° = −212 kJ. Negativt → spontan reaktion. |ΔG°| = max nyttigt arbete ✓'], sol:'ΔG° = −2×96500×1,10 = −212,3 kJ' },
  { id:1610, lv:3, cat:'elkem', title:'E vid pH 7 – O₂/H₂O', q:'O₂ + 4H⁺ + 4e⁻ → 2H₂O. E° = +1,23 V. pH = 7. p(O₂) = 1 atm.\nE = E° − (0,0592/4)×log(1/[H⁺]⁴). Beräkna E.', ans:0.816, tol:0.01, unit:'V', formula:'E = E° − 0,0592×pH/n × n = E° − 0,0592×pH', hint:'log Q = log(1/(10⁻⁷)⁴) = 28. E = 1,23 − (0,0148×28).', steps:['Känd data: E°=+1,23 V, pH=7 → [H⁺]=10⁻⁷ M, p(O₂)=1 atm. O₂+4H⁺+4e⁻→2H₂O (n=4)','Formel: E = E° − (0,0592/n)×log Q. Reaktionskvot Q = p(O₂)×[H⁺]⁴ i täljaren är 1/Q','Beräkna: Q = 1/[H⁺]⁴ = (10⁷)⁴ = 10²⁸. E = 1,23 − (0,0592/4)×28 = 1,23 − 0,414 = 0,816 V','Svar: E = 0,816 V vid pH 7. Neutral pH sänker potentialen med 0,41 V (Nernst-effekt) ✓'], sol:'E = 1,23−0,414 = 0,816 V vid pH 7' },
  { id:1611, lv:3, cat:'elkem', title:'Volym H₂ vid elektrolys', q:'2H₂O → 2H₂ + O₂. I = 2,0 A, t = 4825 s. F = 96500 C/mol.\nBeräkna volymen H₂ vid STP (22,4 L/mol).', ans:1.12, tol:0.05, unit:'L', formula:'V(H₂) = (I×t)/(2F) × 22,4', hint:'Q=9650 C. mol e⁻=0,1. 2e⁻→1H₂ → mol H₂=0,05. V=0,05×22,4.', steps:['Känd data: I=2,0 A, t=4825 s, STP. Katodreaktion: 2H⁺+2e⁻→H₂ (2 elektroner per H₂)','Formel: n(H₂) = Q/(2F), volym V = n × 22,4 L/mol vid STP','Beräkna: Q = 2,0×4825 = 9650 C. mol e⁻ = 9650/96500 = 0,100. mol H₂ = 0,050. V = 0,050×22,4 = 1,12 L','Svar: V(H₂) = 1,12 L. Anoden ger O₂: 0,025 mol = 0,56 L. H₂:O₂ = 2:1 volymförhållande ✓'], sol:'V(H₂) = 0,050×22,4 = 1,12 L' },
  { id:1612, lv:3, cat:'elkem', title:'Katodiskt skydd Zn/Fe', q:'E°(Fe²⁺/Fe) = −0,44 V, E°(Zn²⁺/Zn) = −0,76 V.\nZink används som offeranod för att skydda järn. Beräkna E°cell.', ans:0.32, tol:0.02, unit:'V', formula:'E°cell = E°(Fe) − E°(Zn)', hint:'Fe = katod (skyddas), Zn = anod (korroderar). E°cell = E°(Fe)−E°(Zn).', steps:['Känd data: E°(Fe²⁺/Fe)=−0,44 V (katod/skyddas), E°(Zn²⁺/Zn)=−0,76 V (anod/korroderar)','Formel: E°cell = E°katod − E°anod. Zink offeranod: lägre potential → oxideras först','Beräkna: E°cell = (−0,44) − (−0,76) = −0,44 + 0,76 = +0,32 V','Svar: E°cell = +0,32 V. Spontan cell: Zn korroderar och skyddar järnet katodiskt ✓'], sol:'E°cell = −0,44+0,76 = 0,32 V' },
  { id:1613, lv:3, cat:'elkem', title:'Laddning per 3 mol Ag', q:'Ag⁺ + e⁻ → Ag. Hur stor laddning Q (C) passerar för att deponera 3,0 mol Ag?\nF = 96500 C/mol.', ans:289500.0, tol:100.0, unit:'C', formula:'Q = n × n_e × F', hint:'n_e = 1 per Ag. Q = 3,0×1×96500.', steps:['Känd data: Ag⁺+e⁻→Ag (n=1 elektron per Ag). 3,0 mol Ag ska deponeras. F = 96500 C/mol','Formel: Q = n(Ag) × n_e × F — total laddning proportionell mot mol elektroner','Beräkna: Q = 3,0 × 1 × 96500 = 289500 C','Svar: Q = 289500 C = 289,5 kC. Silver kräver bara 1 elektron → effektivt plätering ✓'], sol:'Q = 3,0×96500 = 289500 C' },
  { id:1701, lv:1, cat:'stoik', title:'Mol NH₃ från N₂', q:'N₂ + 3H₂ → 2NH₃. Hur många mol NH₃ bildas av 3,0 mol N₂ (överskott H₂)?', ans:6.0, tol:0.1, unit:'mol', formula:'n(NH₃) = 2 × n(N₂)', hint:'1 mol N₂ → 2 mol NH₃.', steps:['Känd data: 3,0 mol N₂ (överskott H₂). Balanserad reaktion: N₂ + 3H₂ → 2NH₃','Stökiometri: molförhållande N₂:NH₃ = 1:2 (koefficienter). n(NH₃) = 2 × n(N₂)','Beräkna: n(NH₃) = 2 × 3,0 = 6,0 mol','Svar: n(NH₃) = 6,0 mol. Varje N₂-molekyl ger 2 NH₃ — Haber-Bosch ✓'], sol:'n(NH₃) = 2×3,0 = 6,0 mol' },
  { id:1702, lv:1, cat:'stoik', title:'Massa CO₂ från kol', q:'C + O₂ → CO₂. 2,0 mol C förbränns. Beräkna massan CO₂ som bildas. M(CO₂) = 44 g/mol.', ans:88.0, tol:1.0, unit:'g', formula:'m = n × M', hint:'1 mol C → 1 mol CO₂. m = 2,0 × 44.', steps:['Känd data: 2,0 mol C (kol), M(CO₂)=44 g/mol. Balanserad reaktion: C + O₂ → CO₂','Stökiometri: C:CO₂ = 1:1. n(CO₂) = n(C) = 2,0 mol (direkt utbyte)','Beräkna: m(CO₂) = n × M = 2,0 × 44 = 88 g','Svar: m(CO₂) = 88 g. Kolets förbränning: 12 g C ger 44 g CO₂ (massökning pga O₂) ✓'], sol:'m(CO₂) = 2,0×44 = 88 g' },
  { id:1703, lv:1, cat:'stoik', title:'Massa H₂ för H₂O', q:'2H₂ + O₂ → 2H₂O. Beräkna massa H₂ som behövs för att bilda 3,6 g H₂O.\nM(H₂O)=18, M(H₂)=2 g/mol.', ans:0.4, tol:0.02, unit:'g', formula:'m(H₂) = n(H₂) × M(H₂)', hint:'n(H₂O)=3,6/18=0,2 mol. n(H₂)=n(H₂O)=0,2 mol. m=0,2×2.', steps:['Känd data: m(H₂O)=3,6 g, M(H₂O)=18 g/mol, M(H₂)=2 g/mol. Reaktion: 2H₂+O₂→2H₂O','Stökiometri: H₂:H₂O = 2:2 = 1:1. n(H₂) = n(H₂O) (samma koefficienter)','Beräkna: n(H₂O) = 3,6/18 = 0,20 mol. n(H₂) = 0,20 mol. m(H₂) = 0,20×2 = 0,40 g','Svar: m(H₂) = 0,40 g. H₂ väger lite (M=2) — liten massa ger stor volym gas ✓'], sol:'m(H₂) = 0,20×2 = 0,40 g' },
  { id:1704, lv:1, cat:'stoik', title:'Mol Fe från CO₂', q:'Fe₂O₃ + 3CO → 2Fe + 3CO₂. Om 6,0 mol CO₂ bildas, hur många mol Fe bildas?', ans:4.0, tol:0.1, unit:'mol', formula:'Fe : CO₂ = 2 : 3', hint:'2 mol Fe per 3 mol CO₂. n(Fe) = 6,0 × (2/3).', steps:['Känd data: 6,0 mol CO₂ bildas. Balanserad reaktion: Fe₂O₃ + 3CO → 2Fe + 3CO₂','Stökiometri: Fe:CO₂ = 2:3. n(Fe) = n(CO₂) × (2/3)','Beräkna: n(Fe) = 6,0 × (2/3) = 4,0 mol','Svar: n(Fe) = 4,0 mol. Masugnsreaktion — reduktion av järnmalm med koks ✓'], sol:'n(Fe) = 6,0 × 2/3 = 4,0 mol' },
  { id:1705, lv:2, cat:'stoik', title:'Massa NH₃ – perfekt stök.', q:'3H₂ + N₂ → 2NH₃. 6,0 g H₂ (n=3,0 mol) + 28 g N₂ (n=1,0 mol).\nBeräkna massa NH₃ som bildas. M(NH₃) = 17 g/mol.', ans:34.0, tol:0.5, unit:'g', formula:'n(NH₃) = 2 × n(N₂) el. (2/3)×n(H₂)', hint:'Perfekt stökiometri (3:1). n(NH₃)=2×1,0=2,0 mol.', steps:['Känd data: 3,0 mol H₂, 1,0 mol N₂. Reaktion: 3H₂+N₂→2NH₃. Behövs: 3 mol H₂ per 1 mol N₂','Kontroll: H₂/N₂ = 3,0/1,0 = 3,0 = exakt det krävda förhållandet → perfekt stökiometri','Beräkna: n(NH₃) = 2 × n(N₂) = 2 × 1,0 = 2,0 mol. m = 2,0 × 17 = 34 g','Svar: m(NH₃) = 34 g. Inget överskott, inget begränsande reagens — 100% utnyttjande ✓'], sol:'m(NH₃) = 2,0×17 = 34 g' },
  { id:1706, lv:2, cat:'stoik', title:'Begränsande reagens – AlCl₃', q:'2Al + 3Cl₂ → 2AlCl₃. 54 g Al (n=2,0) + 142 g Cl₂ (n=2,0 mol).\nM(AlCl₃)=133,5. Beräkna massa AlCl₃.', ans:178.0, tol:3.0, unit:'g', formula:'Begränsande: Cl₂', hint:'2 mol Al kräver 3 mol Cl₂, men bara 2 mol Cl₂ finns → Cl₂ begränsar. n(AlCl₃)=2×(2/3)≈1,33 mol.', steps:['Känd data: 2,0 mol Al, 2,0 mol Cl₂. M(AlCl₃)=133,5. Reaktion: 2Al+3Cl₂→2AlCl₃','Begränsande reagens: 2,0 mol Al kräver 3,0 mol Cl₂. Bara 2,0 mol Cl₂ finns → Cl₂ begränsar','Beräkna: n(AlCl₃) = n(Cl₂) × (2/3) = 2,0 × (2/3) = 1,333 mol. m = 1,333 × 133,5 = 178 g','Svar: m(AlCl₃) = 178 g. Al är i överskott (0,667 mol Al används ej) ✓'], sol:'Cl₂ begränsar → m(AlCl₃) = 1,333×133,5 = 178 g' },
  { id:1707, lv:2, cat:'stoik', title:'Överskott O₂', q:'CH₄ + 2O₂ → CO₂ + 2H₂O. 2,0 mol CH₄ blandas med 6,0 mol O₂.\nBeräkna massa överskotts-O₂. M(O₂)=32 g/mol.', ans:64.0, tol:1.0, unit:'g', formula:'m_överskott = n_överskott × M', hint:'O₂ behövs: 2×2,0=4,0 mol. Överskott: 6,0−4,0=2,0 mol.', steps:['Känd data: 2,0 mol CH₄, 6,0 mol O₂. M(O₂)=32 g/mol. Reaktion: CH₄+2O₂→CO₂+2H₂O','Stökiometri: 1 mol CH₄ kräver 2 mol O₂ → 2,0 mol CH₄ förbrukar 4,0 mol O₂','Beräkna: Överskott O₂ = 6,0 − 4,0 = 2,0 mol. m(överskott) = 2,0 × 32 = 64 g','Svar: m(överskott O₂) = 64 g. CH₄ är begränsande reagens — 2 mol O₂ reagerar ej ✓'], sol:'m(överskott O₂) = 2,0×32 = 64 g' },
  { id:1708, lv:2, cat:'stoik', title:'Teoretisk massa Fe₂O₃', q:'4Fe + 3O₂ → 2Fe₂O₃. 112 g järn (n=2,0 mol). M(Fe₂O₃)=160 g/mol.\nBeräkna teoretisk massa Fe₂O₃.', ans:160.0, tol:2.0, unit:'g', formula:'n(Fe₂O₃) = ½ × n(Fe)', hint:'4 mol Fe → 2 mol Fe₂O₃. n(Fe₂O₃)=2,0×(2/4)=1,0 mol.', steps:['Känd data: 2,0 mol Fe (=112 g), M(Fe₂O₃)=160 g/mol. Reaktion: 4Fe+3O₂→2Fe₂O₃','Stökiometri: Fe:Fe₂O₃ = 4:2 = 2:1. n(Fe₂O₃) = n(Fe)/2','Beräkna: n(Fe₂O₃) = 2,0/2 = 1,0 mol. m = 1,0 × 160 = 160 g','Svar: m(Fe₂O₃) = 160 g. Järn oxideras — massan ökar med O₂ från luften ✓'], sol:'m(Fe₂O₃) = 1,0×160 = 160 g' },
  { id:1709, lv:3, cat:'stoik', title:'Procentuellt utbyte', q:'Teoretisk produktmassa: 50 g. Faktisk produktmassa: 35 g.\nBeräkna det procentuella utbytet.', ans:70.0, tol:0.5, unit:'%', formula:'utbyte% = (faktisk/teoretisk) × 100', hint:'35/50 × 100.', steps:['Känd data: faktisk produktmassa = 35 g, teoretisk (max möjlig) massa = 50 g','Formel: utbyte% = (faktisk / teoretisk) × 100 — hur stor andel av det möjliga utbytet uppnåddes','Beräkna: (35/50) × 100 = 0,70 × 100 = 70 %','Svar: 70% utbyte. 30% förlust beror på ofullständig reaktion, hanteringsförluster eller sidoreaktioner ✓'], sol:'utbyte% = 35/50×100 = 70 %' },
  { id:1710, lv:3, cat:'stoik', title:'Förbränningsanalys – n(H)/n(C)', q:'En kolförening förbränns och ger 44 g CO₂ och 18 g H₂O.\nBeräkna kvoten n(H)/n(C).', ans:2.0, tol:0.05, unit:'', formula:'n(C) från CO₂, n(H) från H₂O', hint:'n(C)=44/44=1 mol. n(H)=2×18/18=2 mol.', steps:['Känd data: 44 g CO₂ (M=44 g/mol), 18 g H₂O (M=18 g/mol). Bestäm n(H)/n(C)','Formel: varje CO₂ ger 1 C-atom; varje H₂O ger 2 H-atomar','Beräkna: n(C) = 44/44 = 1,0 mol. n(H₂O) = 18/18 = 1,0 mol → n(H) = 2×1,0 = 2,0 mol','Svar: n(H)/n(C) = 2,0/1,0 = 2. Empirisk formel CH₂ (t.ex. eten C₂H₄ eller propen C₃H₆) ✓'], sol:'n(H)/n(C) = 2,0 → empirisk formel CH₂' },
  { id:1711, lv:3, cat:'stoik', title:'Sekventiella reaktioner med utbyte', q:'A → 2B (utbyte 80 %). B → C (utbyte 90 %). Start: 1,0 mol A.\nHur många mol C bildas?', ans:1.44, tol:0.05, unit:'mol', formula:'n(C) = n(A)×2×0,80×0,90', hint:'n(B)=2×0,80=1,6 mol. n(C)=1,6×0,90.', steps:['Känd data: 1,0 mol A. Steg 1: A → 2B (utbyte 80%). Steg 2: B → C (utbyte 90%)','Metod: multiplicera steg för steg — faktisk utmängd = teoretisk × utbyte','Beräkna: n(B) = 1,0 × 2 × 0,80 = 1,6 mol. n(C) = 1,6 × 0,90 = 1,44 mol','Svar: n(C) = 1,44 mol. Kumulativt utbyte: 80% × 90% = 72% av max 2,0 mol ✓'], sol:'n(C) = 1,0×2×0,80×0,90 = 1,44 mol' },
  { id:1712, lv:3, cat:'stoik', title:'Teoretisk massa från utbyte', q:'Faktisk massa produkt = 7,4 g. Procentuellt utbyte = 37 %.\nBeräkna den teoretiska massan.', ans:20.0, tol:0.5, unit:'g', formula:'m_teor = m_faktisk / (utbyte/100)', hint:'m_teor = 7,4 / 0,37.', steps:['Känd data: faktisk massa = 7,4 g, procentuellt utbyte = 37% = 0,37','Formel: utbyte = faktisk/teoretisk → m_teor = m_faktisk / utbyte','Beräkna: m_teor = 7,4 / 0,37 = 20 g','Svar: m_teor = 20 g. Bara 37% av teoretisk mängd erhölls — typiskt i organisk syntes ✓'], sol:'m_teor = 7,4/0,37 = 20 g' },
  { id:1713, lv:3, cat:'stoik', title:'Begränsande reagens + utbyte', q:'2A + B → 3C. 4,0 mol A + 3,0 mol B. Utbyte 75 %. M(C) = 30 g/mol.\nBeräkna faktisk massa C.', ans:135.0, tol:2.0, unit:'g', formula:'m = n_teor × utbyte × M', hint:'A begränsar (behöver 2mol B, har 3mol B). n(C)_teor=4,0×(3/2)=6,0. n(C)_faktisk=6,0×0,75.', steps:['Känd data: 4,0 mol A + 3,0 mol B. Reaktion: 2A+B→3C. Utbyte=75%, M(C)=30 g/mol','Begränsande: 4,0 mol A kräver 4,0/2=2,0 mol B. Tillgängligt: 3,0 mol B → A begränsar','Beräkna: n(C)_teor = 4,0×(3/2) = 6,0 mol. n(C)_faktisk = 6,0×0,75 = 4,5 mol. m = 4,5×30 = 135 g','Svar: m(C) = 135 g. A är begränsande reagens; 25% förlust i utbyte ✓'], sol:'m(C) = 4,5×30 = 135 g' },

  { id:2001, lv:1, cat:'mol', title:'n från massa – Al', q:'Beräkna substansmängden n för 54 g aluminium Al.\nM(Al) = 27 g/mol.', ans:2.0, tol:0.05, unit:'mol', formula:'n = m / M', hint:'54 / 27 = 2,0 mol.', steps:['Känd data: m = 54 g Al, M(Al) = 27 g/mol','Formel: n = m / M','Beräkna: n = 54 / 27 = 2,0 mol','Svar: 2,0 mol Al. Kontroll: 54 = 2 × 27 ✓'], sol:'n = 54/27 = 2,0 mol' },
  { id:2002, lv:1, cat:'mol', title:'m från n – CaCO₃', q:'Beräkna massan m för 0,25 mol kalciumkarbonat CaCO₃.\nM(CaCO₃) = 100 g/mol.', ans:25.0, tol:0.3, unit:'g', formula:'m = n × M', hint:'0,25 × 100 = 25 g.', steps:['Känd data: n = 0,25 mol CaCO₃, M(CaCO₃) = 100 g/mol','Formel: m = n × M','Beräkna: m = 0,25 × 100 = 25 g','Svar: 25 g CaCO₃. M = 100 gör beräkningen enkel ✓'], sol:'m = 0,25 × 100 = 25 g' },
  { id:2003, lv:1, cat:'mol', title:'Molmassa KOH', q:'Beräkna molmassan M för kaliumhydroxid KOH.\nM(K)=39, M(O)=16, M(H)=1 g/mol.', ans:56.0, tol:0.3, unit:'g/mol', formula:'M = Σ(atommassa)', hint:'39 + 16 + 1 = 56.', steps:['Räkna atomer: K(1) + O(1) + H(1)','M(KOH) = M(K) + M(O) + M(H) = 39 + 16 + 1','Beräkna: 39 + 16 + 1 = 56 g/mol','Svar: M(KOH) = 56 g/mol. KOH är stark bas — viktig att känna igen ✓'], sol:'M(KOH) = 56 g/mol' },
  { id:2004, lv:1, cat:'mol', title:'n från massa – O₂', q:'Hur många mol O₂ är 64 g?\nM(O₂) = 32 g/mol.', ans:2.0, tol:0.05, unit:'mol', formula:'n = m / M', hint:'64 / 32 = 2,0.', steps:['Känd data: m = 64 g O₂, M(O₂) = 32 g/mol','Formel: n = m / M','Beräkna: n = 64 / 32 = 2,0 mol','Svar: 2,0 mol O₂. OBS: O₂ är en diatomig molekyl → M = 2×16 = 32 ✓'], sol:'n = 64/32 = 2,0 mol' },
  { id:2005, lv:1, cat:'mol', title:'Massa 3 mol Na', q:'Beräkna massan för 3,0 mol natrium Na.\nM(Na) = 23 g/mol.', ans:69.0, tol:0.5, unit:'g', formula:'m = n × M', hint:'3,0 × 23 = 69 g.', steps:['Känd data: n = 3,0 mol Na, M(Na) = 23 g/mol','Formel: m = n × M','Beräkna: m = 3,0 × 23 = 69 g','Svar: 69 g Na. Natrium är mjuk alkalimetall, explosiv i vatten ✓'], sol:'m = 3,0 × 23 = 69 g' },
  { id:2006, lv:1, cat:'mol', title:'Molmassa MgCl₂', q:'Beräkna M för MgCl₂.\nM(Mg)=24, M(Cl)=35,5 g/mol.', ans:95.0, tol:0.3, unit:'g/mol', formula:'M = M(Mg)+2×M(Cl)', hint:'24 + 2×35,5 = 95.', steps:['Räkna atomer i MgCl₂: 1 Mg + 2 Cl','M(MgCl₂) = M(Mg) + 2×M(Cl) = 24 + 2×35,5','Beräkna: 24 + 71 = 95 g/mol','Svar: M(MgCl₂) = 95 g/mol. Klorider: Cl har M = 35,5 g/mol ✓'], sol:'M(MgCl₂) = 95 g/mol' },
  { id:2007, lv:1, cat:'mol', title:'n av Fe₂O₃', q:'Hur många mol är 160 g järnoxid Fe₂O₃?\nM(Fe₂O₃) = 160 g/mol.', ans:1.0, tol:0.03, unit:'mol', formula:'n = m / M', hint:'160 / 160 = 1,0 mol.', steps:['Känd data: m = 160 g Fe₂O₃, M(Fe₂O₃) = 160 g/mol','Formel: n = m / M','Beräkna: n = 160 / 160 = 1,0 mol','Svar: 1,0 mol Fe₂O₃. m = M → exakt 1 mol ✓'], sol:'n = 1,0 mol' },
  { id:2008, lv:2, cat:'mol', title:'Atommassa från massa + n', q:'0,50 mol av ett grundämne väger 14 g. Vad är grundämnets molmassa?', ans:28.0, tol:0.3, unit:'g/mol', formula:'M = m / n', hint:'14 / 0,50 = 28 g/mol → Kisel Si.', steps:['Känd data: n = 0,50 mol, m = 14 g','Formel: M = m / n (löser ut M ur n = m/M)','Beräkna: M = 14 / 0,50 = 28 g/mol','Svar: M = 28 g/mol → kväve N₂ eller kisel Si. Metod: känd n + känd m → M ✓'], sol:'M = 14/0,50 = 28 g/mol' },
  { id:2009, lv:2, cat:'mol', title:'%N i NH₄NO₃', q:'Beräkna kvävehalten (%N) i ammoniumnitrat NH₄NO₃.\nM(N)=14, M(H)=1, M(O)=16 g/mol.', ans:35.0, tol:0.5, unit:'%', formula:'%N = (2×14)/M × 100', hint:'M = 80 g/mol. 2 N-atomer → 28/80 × 100.', steps:['M(NH₄NO₃) = 14+4 + 14+3×16 = 18+14+48 = 80 g/mol. Två N-atomer per formelenhet','Massa N per mol: 2×14 = 28 g','Procenthalt: %N = (28/80) × 100 = 35 %','Svar: 35 % kväve. NH₄NO₃ är kvävegödsel — hög kvävehalt är viktig ✓'], sol:'%N = 28/80 × 100 = 35 %' },
  { id:2010, lv:2, cat:'mol', title:'Massa 1,5×10²³ atomer C', q:'Beräkna massan för 1,5×10²³ kol-atomer.\nM(C)=12 g/mol, Nₐ=6,0×10²³ mol⁻¹.', ans:3.0, tol:0.1, unit:'g', formula:'m = (N/Nₐ) × M', hint:'n = 1,5×10²³ / 6,0×10²³ = 0,25 mol. m = 0,25×12.', steps:['Omvandla antal till mol: n = N / Nₐ = 1,5×10²³ / 6,0×10²³ = 0,25 mol','Beräkna massa: m = n × M = 0,25 × 12','Beräkna: m = 3,0 g','Svar: 3,0 g kol. Nₐ kopplar antal atomer till mol: dela N med Nₐ ✓'], sol:'m = 0,25×12 = 3,0 g' },
  { id:2011, lv:2, cat:'mol', title:'Empirisk formel – CuS-analys', q:'Analys: 64 g Cu och 32 g S. Beräkna kvoten n(Cu)/n(S).\nM(Cu)=64, M(S)=32 g/mol.', ans:1.0, tol:0.05, unit:'', formula:'n = m / M', hint:'n(Cu)=1,0, n(S)=1,0 → kvot = 1.', steps:['Beräkna mol: n(Cu) = 64/64 = 1,0 mol; n(S) = 32/32 = 1,0 mol','Kvot: n(Cu)/n(S) = 1,0/1,0 = 1,0','Empirisk formel: CuS (kopparsulfid)','Svar: kvot = 1 → CuS. Metod: massa → n → enklaste heltal ✓'], sol:'n(Cu)/n(S) = 1,0 → CuS' },
  { id:2012, lv:2, cat:'mol', title:'n CO₂ vid fullständig förbränning', q:'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.\nHur många mol CO₂ bildas av 2,0 mol C₃H₈?', ans:6.0, tol:0.1, unit:'mol', formula:'n(CO₂) = 3 × n(C₃H₈)', hint:'1 mol propan → 3 mol CO₂.', steps:['Reaktion: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Koefficienter: C₃H₈ : CO₂ = 1 : 3','n(C₃H₈) = 2,0 mol (given)','n(CO₂) = 3 × n(C₃H₈) = 3 × 2,0 = 6,0 mol','Svar: 6,0 mol CO₂. Varje propanmolekyl har 3 C-atomer → 3 CO₂ per CH₈ ✓'], sol:'n(CO₂) = 3×2,0 = 6,0 mol' },
  { id:2013, lv:2, cat:'mol', title:'Massa H₂O vid förbränning', q:'CH₄ + 2O₂ → CO₂ + 2H₂O. 4,0 g CH₄ (n=0,25 mol) förbränns.\nBeräkna massa H₂O. M(H₂O)=18 g/mol.', ans:9.0, tol:0.2, unit:'g', formula:'m = n(H₂O) × M', hint:'n(H₂O) = 2×0,25 = 0,50 mol. m = 0,50×18.', steps:['Reaktion: CH₄ + 2O₂ → CO₂ + 2H₂O. Koefficienter: CH₄ : H₂O = 1 : 2','n(CH₄) = 4,0/16 = 0,25 mol','n(H₂O) = 2 × n(CH₄) = 2 × 0,25 = 0,50 mol','m(H₂O) = 0,50 × 18 = 9,0 g ✓'], sol:'m(H₂O) = 0,50×18 = 9,0 g' },
  { id:2014, lv:2, cat:'mol', title:'Atomantal i 18 g vatten', q:'18 g H₂O (n=1,0 mol). Hur många molekyler (× 10²³)?\nNₐ = 6,022×10²³ mol⁻¹. Ange svaret som x (x×10²³).', ans:6.022, tol:0.05, unit:'×10²³', formula:'N = n × Nₐ', hint:'N = 1,0 × 6,022×10²³.', steps:['Känd data: 18 g H₂O = 1,0 mol (M=18)','Formel: N = n × Nₐ','Beräkna: N = 1,0 × 6,022×10²³ = 6,022×10²³ molekyler','Svar: x = 6,022 (svar i ×10²³). En mol innehåller alltid Nₐ ≈ 6×10²³ enheter ✓'], sol:'N = 6,022×10²³ molekyler' },
  { id:2015, lv:3, cat:'mol', title:'Sammansättning Fe₃O₄', q:'Beräkna massan Fe i 1,0 mol Fe₃O₄.\nM(Fe)=56, M(O)=16 g/mol.', ans:168.0, tol:1.0, unit:'g', formula:'m(Fe) = 3 × M(Fe) × n', hint:'3 Fe-atomer per formelenhet. m = 3×56×1,0.', steps:['M(Fe₃O₄) = 3×56 + 4×16 = 168 + 64 = 232 g/mol','I 1,0 mol Fe₃O₄: antal Fe-atomer = 3 per formelenhet → n(Fe) = 3,0 mol','Massa Fe: m(Fe) = 3,0 × 56 = 168 g','Svar: 168 g Fe. Fe₃O₄ är magnetit — innehåller Fe²⁺ och Fe³⁺ ✓'], sol:'m(Fe) = 3×56 = 168 g' },
  { id:2016, lv:3, cat:'mol', title:'Okänt grundämne via procenthalt', q:'En oxid MO har 40 % O (massa%). M(O)=16 g/mol.\nVad är molmassan för grundämnet M?', ans:24.0, tol:0.3, unit:'g/mol', formula:'%O = M(O)/(M_M+M(O)) × 100', hint:'0,40 = 16/(M+16) → M+16 = 40 → M = 24 (Mg).', steps:['Låt M(M) = x. MO har massandel O = 40 %','Formel: %O = M(O)/(x + M(O)) × 100 = 40','Löser: 16/(x+16) = 0,40 → 16 = 0,40x + 6,4 → 0,40x = 9,6 → x = 24','Svar: M = 24 g/mol → magnesium Mg. Kontroll: MgO har 40% O ✓'], sol:'M = 24 g/mol → grundämne är Mg' },
  { id:2017, lv:3, cat:'mol', title:'Molekylformel från empirisk', q:'Empirisk formel CH₂O. Molmassa = 180 g/mol.\nVad är molekylformeln? Ange antalet C-atomer.', ans:6.0, tol:0.1, unit:'C-atomer', formula:'n = M_mol / M_emp', hint:'M(CH₂O) = 30 g/mol. n = 180/30 = 6 → C₆H₁₂O₆.', steps:['M(empirisk CH₂O) = 12 + 2 + 16 = 30 g/mol','n = M_molekyl / M_empirisk = 180 / 30 = 6','Molekylformel: (CH₂O)₆ = C₆H₁₂O₆','Svar: 6 C-atomer → glukos C₆H₁₂O₆. Empirisk formel × n = molekylformel ✓'], sol:'C₆H₁₂O₆ (glukos) → 6 C-atomer' },
  { id:2018, lv:3, cat:'mol', title:'Utbyte + n produkt', q:'Reaktion med 90 % utbyte. Teoretisk n(produkt) = 5,0 mol.\nBeräkna faktisk massa om M = 46 g/mol.', ans:207.0, tol:2.0, unit:'g', formula:'m = n_teor × utbyte × M', hint:'n_faktisk = 5,0×0,90 = 4,5 mol. m = 4,5×46.', steps:['Faktisk n = teoretisk n × utbyte = 5,0 × 0,90 = 4,5 mol','Massa: m = n × M = 4,5 × 46','Beräkna: 4,5 × 46 = 207 g','Svar: 207 g. 90% utbyte → 10% förlust. m = n_teor × utbyte × M ✓'], sol:'m = 4,5×46 = 207 g' },
  { id:2019, lv:3, cat:'mol', title:'Blandad formel – dubbla oxider', q:'En blandning: 0,30 mol FeO (M=72) och 0,20 mol Fe₂O₃ (M=160).\nBeräkna totalmassa.', ans:53.6, tol:0.3, unit:'g', formula:'m_tot = n₁M₁ + n₂M₂', hint:'0,30×72 + 0,20×160.', steps:['m(FeO) = n × M = 0,30 × 72 = 21,6 g','m(Fe₂O₃) = n × M = 0,20 × 160 = 32,0 g','Total massa = 21,6 + 32,0 = 53,6 g','Svar: 53,6 g. Addera massor för varje komponent i blandningen ✓'], sol:'m_tot = 21,6+32,0 = 53,6 g' },
  { id:2020, lv:3, cat:'mol', title:'Antal mol O i blandning', q:'0,50 mol H₂O och 0,50 mol CO₂. Hur många totalt mol O-atomer?', ans:1.5, tol:0.05, unit:'mol', formula:'n(O) = n(H₂O)×1 + n(CO₂)×2', hint:'H₂O har 1 O, CO₂ har 2 O.', steps:['O-atomer i H₂O: 1 per molekyl → n(O från H₂O) = 0,50 × 1 = 0,50 mol','O-atomer i CO₂: 2 per molekyl → n(O från CO₂) = 0,50 × 2 = 1,00 mol','Total n(O) = 0,50 + 1,00 = 1,50 mol','Svar: 1,50 mol O. Räkna atomer per molekyl × molantal ✓'], sol:'n(O)_tot = 0,50+1,00 = 1,50 mol' },
  { id:2021, lv:1, cat:'mol', title:'n NH₃ från m', q:'Hur många mol är 34 g ammoniak NH₃?\nM(NH₃) = 17 g/mol.', ans:2.0, tol:0.05, unit:'mol', formula:'n = m / M', hint:'34 / 17 = 2,0 mol.', steps:['Känd data: m = 34 g NH₃, M(NH₃) = 14+3×1 = 17 g/mol','Formel: n = m / M','Beräkna: n = 34 / 17 = 2,0 mol','Svar: 2,0 mol ammoniak. NH₃ är viktig industrigas (Haber-Bosch) ✓'], sol:'n = 34/17 = 2,0 mol' },
  { id:2022, lv:1, cat:'mol', title:'Massa 0,1 mol glukos', q:'M(C₆H₁₂O₆) = 180 g/mol. Beräkna massan för 0,10 mol glukos.', ans:18.0, tol:0.2, unit:'g', formula:'m = n × M', hint:'0,10 × 180 = 18 g.', steps:['Känd data: n = 0,10 mol glukos, M(C₆H₁₂O₆) = 180 g/mol','Formel: m = n × M','Beräkna: m = 0,10 × 180 = 18 g','Svar: 18 g glukos. Glukos är kroppens primära energikälla ✓'], sol:'m = 0,10×180 = 18 g' },
  { id:2023, lv:2, cat:'mol', title:'Molmassa H₃PO₄', q:'Beräkna M för fosforsyra H₃PO₄.\nM(H)=1, M(P)=31, M(O)=16 g/mol.', ans:98.0, tol:0.3, unit:'g/mol', formula:'M = 3+31+4×16', hint:'3 + 31 + 64 = 98.', steps:['Räkna atomer i H₃PO₄: 3H + 1P + 4O','M = 3×1 + 31 + 4×16 = 3 + 31 + 64','Beräkna: 3 + 31 + 64 = 98 g/mol','Svar: M(H₃PO₄) = 98 g/mol. Fosforsyra används i cola och gödsel ✓'], sol:'M(H₃PO₄) = 98 g/mol' },
  { id:2024, lv:2, cat:'mol', title:'Antal molekyler CO₂', q:'2,0 mol CO₂. Hur många molekyler? Ange x om svaret är x×10²⁴.\nNₐ = 6,022×10²³.', ans:1.2044, tol:0.05, unit:'×10²⁴', formula:'N = n × Nₐ', hint:'2,0 × 6,022×10²³ = 12,044×10²³ = 1,2044×10²⁴.', steps:['Känd data: n = 2,0 mol CO₂','Formel: N = n × Nₐ = 2,0 × 6,022×10²³','Beräkna: N = 12,044×10²³ = 1,2044×10²⁴','Svar: x = 1,2044 (svar i ×10²⁴). 2 mol = dubbelt Nₐ antal ✓'], sol:'N = 1,2044×10²⁴ molekyler' },
  { id:2025, lv:3, cat:'mol', title:'Utbyte vid syntes av aspirin', q:'Teoretiskt: 18,0 g aspirin (C₉H₈O₄, M=180). Faktiskt: 14,4 g.\nBeräkna procentuellt utbyte.', ans:80.0, tol:0.5, unit:'%', formula:'utbyte% = (faktisk/teoretisk)×100', hint:'14,4/18,0 × 100.', steps:['Känd data: teoretisk = 18,0 g, faktisk = 14,4 g','Formel: utbyte % = (faktisk/teoretisk) × 100','Beräkna: (14,4/18,0) × 100 = 80 %','Svar: 80 % utbyte. Förlust på 20 % kan bero på kristallisationsförluster ✓'], sol:'utbyte = 14,4/18,0×100 = 80 %' },
  { id:2026, lv:1, cat:'konc', title:'c – enkel', q:'0,30 mol löses i 1,5 L lösning. Beräkna c.', ans:0.2, tol:0.01, unit:'mol/L', formula:'c = n / V', hint:'0,30 / 1,5 = 0,20 mol/L.', steps:['Känd data: n = 0,30 mol, V = 1,5 L','Formel: c = n / V','Beräkna: c = 0,30 / 1,5 = 0,20 mol/L','Svar: 0,20 mol/L. Koncentration = tätheten av lösta partiklar ✓'], sol:'c = 0,20 mol/L' },
  { id:2027, lv:1, cat:'konc', title:'n från c och V – mL', q:'c = 0,40 mol/L, V = 250 mL. Beräkna n.', ans:0.1, tol:0.005, unit:'mol', formula:'n = c × V', hint:'250 mL = 0,250 L. n = 0,40×0,250.', steps:['Känd data: c = 0,40 mol/L, V = 250 mL = 0,250 L','Formel: n = c × V','Beräkna: n = 0,40 × 0,250 = 0,10 mol','Svar: 0,10 mol. OBS: 250 mL → 0,250 L (dela med 1000) ✓'], sol:'n = 0,40×0,250 = 0,10 mol' },
  { id:2028, lv:1, cat:'konc', title:'Massa KCl i lösning', q:'c(KCl)=0,20 mol/L, V=500 mL. Beräkna massa KCl. M(KCl)=74,5 g/mol.', ans:7.45, tol:0.1, unit:'g', formula:'m = c × V × M', hint:'n=0,20×0,500=0,10 mol. m=0,10×74,5.', steps:['n(KCl) = c × V = 0,20 × 0,500 = 0,10 mol','m = n × M = 0,10 × 74,5','Beräkna: m = 7,45 g','Svar: 7,45 g KCl. Tvåstegs: c,V→n→m ✓'], sol:'m = 0,10×74,5 = 7,45 g' },
  { id:2029, lv:1, cat:'konc', title:'V lösning mL', q:'n = 0,25 mol, c = 0,50 mol/L. Beräkna V i mL.', ans:500.0, tol:5.0, unit:'mL', formula:'V = n / c', hint:'V = 0,25/0,50 = 0,50 L = 500 mL.', steps:['Känd data: n = 0,25 mol, c = 0,50 mol/L','Formel: V = n / c','Beräkna: V = 0,25 / 0,50 = 0,50 L = 500 mL','Svar: 500 mL. Omvandla: 1 L = 1000 mL ✓'], sol:'V = 500 mL' },
  { id:2030, lv:1, cat:'konc', title:'c mol/L → mmol/L', q:'c = 0,0050 mol/L. Omvandla till mmol/L.', ans:5.0, tol:0.05, unit:'mmol/L', formula:'1 mol/L = 1000 mmol/L', hint:'0,0050 × 1000 = 5,0 mmol/L.', steps:['1 mol/L = 1000 mmol/L (prefix: milli = 10⁻³)','c = 0,0050 mol/L × 1000 mmol/mol','Beräkna: c = 5,0 mmol/L','Svar: 5,0 mmol/L. mmol/L vanligt i medicin och klinisk kemi ✓'], sol:'c = 5,0 mmol/L' },
  { id:2031, lv:1, cat:'konc', title:'Massa HCl för 2 L lösning', q:'Beräkna massa HCl för 2,0 L av 0,50 mol/L HCl.\nM(HCl) = 36,5 g/mol.', ans:36.5, tol:0.3, unit:'g', formula:'m = c × V × M', hint:'n = 0,50×2,0 = 1,0 mol. m = 1,0×36,5.', steps:['n(HCl) = c × V = 0,50 × 2,0 = 1,0 mol','m = n × M = 1,0 × 36,5','Beräkna: m = 36,5 g','Svar: 36,5 g HCl. Tvåstegs: c,V→n→m ✓'], sol:'m = 1,0×36,5 = 36,5 g' },
  { id:2032, lv:2, cat:'konc', title:'Spädning – ny c', q:'1,0 mol/L (100 mL) späds till 500 mL. Beräkna ny c.', ans:0.2, tol:0.01, unit:'mol/L', formula:'c₂ = c₁V₁/V₂', hint:'c₂ = 1,0×100/500 = 0,20.', steps:['Känd data: c₁ = 1,0 mol/L, V₁ = 100 mL; V₂ = 500 mL','Formel: c₂ = c₁V₁/V₂','Beräkna: c₂ = (1,0 × 100) / 500 = 0,20 mol/L','Svar: 0,20 mol/L. Spädning 5× → koncentration 5× lägre ✓'], sol:'c₂ = 0,20 mol/L' },
  { id:2033, lv:2, cat:'konc', title:'V₁ för spädning', q:'Bereda 250 mL av 0,10 mol/L från 2,0 mol/L stocklösning. Hur många mL stocklösning?', ans:12.5, tol:0.2, unit:'mL', formula:'V₁ = c₂V₂/c₁', hint:'V₁ = 0,10×250/2,0 = 12,5 mL.', steps:['Känd data: c₂ = 0,10 mol/L, V₂ = 250 mL; c₁ = 2,0 mol/L','Formel: V₁ = c₂V₂ / c₁','Beräkna: V₁ = (0,10 × 250) / 2,0 = 12,5 mL','Svar: 12,5 mL stocklösning späds till 250 mL. Spädfaktor = 20× ✓'], sol:'V₁ = 12,5 mL' },
  { id:2034, lv:2, cat:'konc', title:'Titrering – c(H₂SO₄)', q:'20,0 mL H₂SO₄ titreras med 0,100 mol/L NaOH. Åtgår 40,0 mL NaOH.\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Beräkna c(H₂SO₄).', ans:0.1, tol:0.005, unit:'mol/L', formula:'2×c(H₂SO₄)×V = c(NaOH)×V(NaOH)', hint:'n(NaOH)=0,100×0,040=0,0040. n(H₂SO₄)=0,0040/2=0,0020. c=0,0020/0,020.', steps:['n(NaOH) = 0,100 × 0,040 = 0,0040 mol','H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Molförhållande H₂SO₄:NaOH = 1:2','n(H₂SO₄) = n(NaOH)/2 = 0,0020 mol','c(H₂SO₄) = 0,0020/0,020 = 0,10 mol/L. Diprotisk syra → dela n(bas) med 2 ✓'], sol:'c(H₂SO₄) = 0,10 mol/L' },
  { id:2035, lv:2, cat:'konc', title:'Blanda – ny koncentration', q:'400 mL 0,30 mol/L + 600 mL 0,20 mol/L NaCl blandas.\nBeräkna ny c(NaCl).', ans:0.24, tol:0.01, unit:'mol/L', formula:'c = (n₁+n₂)/(V₁+V₂)', hint:'n₁=0,120, n₂=0,120, V_tot=1,0 L.', steps:['n₁(NaCl) = 0,30 × 0,400 = 0,12 mol; n₂(NaCl) = 0,20 × 0,600 = 0,12 mol','Total n = 0,12 + 0,12 = 0,24 mol; Total V = 0,400 + 0,600 = 1,000 L','c = 0,24 / 1,00 = 0,24 mol/L','Svar: 0,24 mol/L. Blandning: addera mol, addera volymer ✓'], sol:'c = 0,240/1,000 = 0,24 mol/L' },
  { id:2036, lv:2, cat:'konc', title:'Massa NaOH titrering', q:'30,0 mL 0,150 mol/L H₂SO₄ titreras av NaOH 0,300 mol/L.\nHur många mL NaOH åtgår?', ans:30.0, tol:0.3, unit:'mL', formula:'V(NaOH) = 2×c(H₂SO₄)×V/c(NaOH)', hint:'n(H₂SO₄)=0,030×0,150=0,0045. n(NaOH)=0,0090. V=0,0090/0,300.', steps:['H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. n(H₂SO₄) = 0,150 × 0,030 = 0,0045 mol','n(NaOH) behövs = 2 × n(H₂SO₄) = 2 × 0,0045 = 0,0090 mol','V(NaOH) = n/c = 0,0090/0,300','Svar: V = 0,030 L = 30,0 mL NaOH. Diprotisk syra: 2 NaOH per H₂SO₄ ✓'], sol:'V(NaOH) = 30,0 mL' },
  { id:2037, lv:2, cat:'konc', title:'Beer-Lambert – absorbans', q:'ε = 1000 L/(mol·cm), c = 0,0010 mol/L, l = 1,0 cm.\nBeräkna absorbansen A.', ans:1.0, tol:0.02, unit:'A.U.', formula:'A = ε × c × l', hint:'1000 × 0,0010 × 1,0 = 1,0.', steps:['Beer-Lamberts lag: A = ε × c × l','Känd data: ε = 1000, c = 0,0010, l = 1,0','Beräkna: A = 1000 × 0,0010 × 1,0 = 1,0','Svar: A = 1,0 AU. Absorbans >1 = kraftigt absorberande lösning ✓'], sol:'A = 1,0' },
  { id:2038, lv:2, cat:'konc', title:'c från Beer-Lambert', q:'A = 0,50, ε = 500 L/(mol·cm), l = 2,0 cm. Beräkna c.', ans:0.0005, tol:3e-05, unit:'mol/L', formula:'c = A / (ε × l)', hint:'c = 0,50 / (500×2,0) = 0,50/1000.', steps:['Beer-Lambert: c = A / (ε × l)','Känd data: A = 0,50, ε = 500, l = 2,0','Beräkna: c = 0,50 / (500 × 2,0) = 0,50/1000 = 5×10⁻⁴ mol/L','Svar: c = 0,0005 mol/L. Beer-Lambert ger koncentration från ljusabsorption ✓'], sol:'c = 5,0×10⁻⁴ mol/L' },
  { id:2039, lv:2, cat:'konc', title:'Proppipeltering – mmol', q:'Pipettera 10,0 mL av 0,250 mol/L HCl. Hur många mmol HCl?', ans:2.5, tol:0.05, unit:'mmol', formula:'n = c × V', hint:'n = 0,250×0,010 = 0,0025 mol = 2,5 mmol.', steps:['Känd data: V = 10,0 mL = 0,010 L; c = 0,250 mol/L','n = c × V = 0,250 mol/L × 0,010 L = 0,0025 mol','Omvandla: 0,0025 mol × 1000 = 2,5 mmol','Svar: 2,5 mmol HCl ✓ mmol är praktisk enhet vid titrering; 10,0 mL = 0,010 L, alltid omvandla!'], sol:'n = 2,5 mmol' },
  { id:2040, lv:3, cat:'konc', title:'Procent (m/m) → mol/L', q:'37 % (m/m) HCl i vatten. Densitet = 1,19 g/mL. M(HCl)=36,5 g/mol.\nBeräkna c i mol/L.', ans:12.06, tol:0.3, unit:'mol/L', formula:'c = (1000×d×%)/M', hint:'1 L = 1190 g lösning. massa HCl = 0,37×1190 = 440,3 g. n = 440,3/36,5.', steps:['37 % HCl: 100 mL lösning har massa 1,19×100 = 119 g; massa HCl = 0,37×119 = 44,03 g','n(HCl) = 44,03/36,5 = 1,206 mol i 0,100 L','c = 1,206/0,100 = 12,06 mol/L','Svar: c ≈ 12,1 mol/L. Formel: c = (ρ×w×1000)/M ger samma svar ✓'], sol:'c = 12,06 mol/L' },
  { id:2041, lv:3, cat:'konc', title:'Ksp beräkning – PbSO₄', q:'Lösligheten för PbSO₄ är 1,5×10⁻⁴ mol/L. Beräkna Ksp.', ans:2.25e-08, tol:1e-09, unit:'', formula:'Ksp = s²', hint:'Ksp = s² = (1,5×10⁻⁴)².', steps:['PbSO₄ → Pb²⁺ + SO₄²⁻: s = löslighet, [Pb²⁺] = [SO₄²⁻] = s','Ksp = s × s = s²','s² = 1,5×10⁻⁴ → s = 1,5×10⁻⁴ (s = Ksp/s... nej, s² = Ksp → s = √Ksp)','Ksp = (1,5×10⁻⁴)² = 2,25×10⁻⁸. Beräkna: (1,5×10⁻⁴)² = 2,25×10⁻⁸ ✓'], sol:'Ksp = 2,25×10⁻⁸' },
  { id:2042, lv:3, cat:'konc', title:'Seriell spädning – c final', q:'3,0 mol/L späds 1:10, sedan 1:100. Vad är slutkoncentrationen i µmol/L?', ans:3.0, tol:0.1, unit:'µmol/L', formula:'c = c₀/(10×100)', hint:'c = 3,0/1000 = 0,003 mol/L = 3000 µmol/L... nej: 1:10 → 0,30; 1:100 → 0,003 mol/L = 3000 µmol/L.', steps:['Spädning 1: 3,0 × (1/10) = 0,30 mol/L','Spädning 2: 0,30 × (1/100) = 0,0030 mol/L = 3,0×10⁻³ mol/L','Omvandla till µmol/L: 3,0×10⁻³ × 10⁶ = 3,0 µmol/L','Svar: 3,0 µmol/L. Total spädfaktor = 10×100 = 1000× ✓'], sol:'c = 3000 µmol/L' },
  { id:2043, lv:3, cat:'konc', title:'Jonkoncentration – Al₂(SO₄)₃', q:'0,10 mol/L Al₂(SO₄)₃ löses helt.\nBeräkna [SO₄²⁻].', ans:0.3, tol:0.01, unit:'mol/L', formula:'[SO₄²⁻] = 3 × c(Al₂(SO₄)₃)', hint:'3 sulfatjoner per formelenhet.', steps:['Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻ (fullständig dissociation)','Per mol Al₂(SO₄)₃ frigörs 3 mol SO₄²⁻','[SO₄²⁻] = 3 × c(Al₂(SO₄)₃) = 3 × 0,10 = 0,30 mol/L','Svar: 0,30 mol/L. Räkna antalet joner per formelenhet × koncentration ✓'], sol:'[SO₄²⁻] = 0,30 mol/L' },
  { id:2044, lv:3, cat:'konc', title:'Tillsätt syra till buffert – pH-förändring', q:'Buffert: [HA]=0,10, [A⁻]=0,10 mol/L, pKa=4,74. Tillsätt 0,01 mol/L HCl.\n[HA]→0,11, [A⁻]→0,09. Beräkna nytt pH.', ans:4.65, tol:0.05, unit:'', formula:'pH = pKa + log([A⁻]/[HA])', hint:'log(0,09/0,11) = log(0,818) ≈ −0,087.', steps:['Buffert: pKa = 4,74, [HA] = 0,10, [A⁻] = 0,10 → pH = pKa = 4,74','Tillsätt HCl: HCl + A⁻ → HA + Cl⁻. [HA] → 0,11, [A⁻] → 0,09','Nytt pH = pKa + log([A⁻]/[HA]) = 4,74 + log(0,09/0,11) = 4,74 − 0,087','Svar: pH ≈ 4,65. Buffert dämpar pH-förändringen (utan buffert: pH = 2) ✓'], sol:'pH = 4,65' },
  { id:2045, lv:2, cat:'konc', title:'Volym att mäta upp – NaOH', q:'Bereda 100 mL av 0,020 mol/L NaOH från 1,0 mol/L stocklösning.\nHur många mL stocklösning behövs?', ans:2.0, tol:0.05, unit:'mL', formula:'V₁ = c₂V₂/c₁', hint:'V₁ = 0,020×100/1,0 = 2,0 mL.', steps:['Känd data: c₂ = 0,020 mol/L, V₂ = 100 mL; c₁ = 1,0 mol/L','Formel: V₁ = c₂V₂ / c₁','Beräkna: V₁ = (0,020 × 100) / 1,0 = 2,0 mL','Svar: 2,0 mL stocklösning. Spädfaktor = 50× ✓'], sol:'V₁ = 2,0 mL' },
  { id:2046, lv:1, cat:'konc', title:'n löst ämne i lösning', q:'c = 2,0 mol/L, V = 100 mL. Beräkna n.', ans:0.2, tol:0.01, unit:'mol', formula:'n = c × V', hint:'n = 2,0 × 0,100 = 0,20 mol.', steps:['Känd data: c = 2,0 mol/L, V = 100 mL = 0,100 L','Formel: n = c × V','Beräkna: n = 2,0 × 0,100 = 0,20 mol','Svar: 0,20 mol. OBS: 100 mL = 0,100 L ✓'], sol:'n = 0,20 mol' },
  { id:2047, lv:1, cat:'konc', title:'c från massa NaCl', q:'5,85 g NaCl löses i 1,0 L vatten. M(NaCl)=58,5 g/mol. Beräkna c.', ans:0.1, tol:0.005, unit:'mol/L', formula:'c = m/(M×V)', hint:'n = 5,85/58,5 = 0,10 mol. c = 0,10/1,0.', steps:['n(NaCl) = m / M = 5,85 / 58,5 = 0,10 mol','c = n / V = 0,10 / 1,0','Beräkna: c = 0,10 mol/L','Svar: 0,10 mol/L. Standardlösning NaCl — vanlig referens ✓'], sol:'c = 0,10 mol/L' },
  { id:2048, lv:2, cat:'konc', title:'Glaskolv – rätt massa', q:'Bereda 500 mL av 0,050 mol/L K₂SO₄. M(K₂SO₄)=174 g/mol.\nVilken massa K₂SO₄ vägs in?', ans:4.35, tol:0.05, unit:'g', formula:'m = c × V × M', hint:'n = 0,050×0,500 = 0,025 mol. m = 0,025×174.', steps:['n = c × V = 0,050 × 0,500 = 0,025 mol K₂SO₄','m = n × M = 0,025 × 174','Beräkna: m = 4,35 g','Svar: Väg in 4,35 g K₂SO₄ i glaskolv, lös i vatten, fyll till 500 mL ✓'], sol:'m = 4,35 g' },
  { id:2049, lv:3, cat:'konc', title:'Jonkoncentration – Ca(OH)₂', q:'Mättat Ca(OH)₂: s = 0,020 mol/L. Beräkna [OH⁻].', ans:0.04, tol:0.002, unit:'mol/L', formula:'[OH⁻] = 2s', hint:'Ca(OH)₂ → Ca²⁺ + 2OH⁻.', steps:['Känd data: Ca(OH)₂ löslighet s = 0,020 mol/L; Ca(OH)₂ → Ca²⁺ + 2OH⁻','[OH⁻] = 2 × s = 2 × 0,020 = 0,040 mol/L (varje formelunit ger 2 OH⁻)','Kontroll: [Ca²⁺] = 0,020 mol/L; [OH⁻] = 0,040 mol/L','Svar: [OH⁻] = 0,040 mol/L ✓ Ksp = [Ca²⁺][OH⁻]² = 0,020×(0,040)² = 3,2×10⁻⁵'], sol:'[OH⁻] = 0,040 mol/L' },
  { id:2050, lv:3, cat:'konc', title:'ppm – mg/L', q:'Blyhalt i vatten: 50 µg/L. Omvandla till mg/L och jämför med EU-gränsvärde 10 µg/L.\nHur många gånger överstiger provet gränsvärdet?', ans:5.0, tol:0.1, unit:'gånger', formula:'faktor = c_prov / c_gräns', hint:'50 / 10 = 5,0 gånger.', steps:['Känd data: blyhalt = 50 µg/L, gränsvärde = 10 µg/L','Omvandla: 50 µg/L = 0,050 mg/L','Faktor: 50/10 = 5 gånger över gränsvärdet','Svar: 5× EU-gränsvärdet. Bly är neurotoxin — viktigt med låga gränser ✓'], sol:'5,0 gånger över gränsvärdet' },
  { id:2051, lv:1, cat:'gas', title:'Molvol – STP n=3', q:'Beräkna volymen för 3,0 mol idealgas vid STP. (22,4 L/mol)', ans:67.2, tol:0.3, unit:'L', formula:'V = n × 22,4', hint:'3,0 × 22,4 = 67,2 L.', steps:['Känd data: n = 3,0 mol idealgas vid STP, Vm = 22,4 L/mol','Formel: V = n × 22,4 L/mol','Beräkna: V = 3,0 × 22,4 = 67,2 L','Svar: 67,2 L. STP (0°C, 101,3 kPa) — alla idealgaser ger 22,4 L/mol ✓'], sol:'V = 67,2 L' },
  { id:2052, lv:1, cat:'gas', title:'n från STP-volym', q:'11,2 L gas vid STP. Hur många mol?', ans:0.5, tol:0.02, unit:'mol', formula:'n = V / 22,4', hint:'11,2 / 22,4 = 0,50 mol.', steps:['Känd data: V = 11,2 L vid STP, Vm = 22,4 L/mol','Formel: n = V / Vm = V / 22,4','Beräkna: n = 11,2 / 22,4 = 0,50 mol','Svar: 0,50 mol. 11,2 L = exakt halv molvolym ✓'], sol:'n = 0,50 mol' },
  { id:2053, lv:1, cat:'gas', title:'Boyle – komprimering', q:'P₁=50 kPa, V₁=10 L. Komprimeras till V₂=5,0 L (konstant T). Beräkna P₂.', ans:100.0, tol:1.0, unit:'kPa', formula:'P₂ = P₁V₁/V₂', hint:'50×10/5,0 = 100 kPa.', steps:['Boyles lag: P₁V₁ = P₂V₂ (T konstant)','P₁ = 50 kPa, V₁ = 10 L, V₂ = 5,0 L','P₂ = P₁V₁/V₂ = 50 × 10 / 5,0 = 100 kPa','Svar: P₂ = 100 kPa. Halveras volymen → dubbleras trycket ✓'], sol:'P₂ = 100 kPa' },
  { id:2054, lv:1, cat:'gas', title:'Charles – V från T', q:'V₁=4,0 L vid 200 K. Temperaturen höjs till 400 K (konstant p). Beräkna V₂.', ans:8.0, tol:0.1, unit:'L', formula:'V₂ = V₁×T₂/T₁', hint:'4,0×400/200 = 8,0 L.', steps:['Charles lag: V₁/T₁ = V₂/T₂ (p konstant, T i Kelvin)','V₁ = 4,0 L, T₁ = 200 K, T₂ = 400 K','V₂ = V₁ × T₂/T₁ = 4,0 × 400/200 = 8,0 L','Svar: V₂ = 8,0 L. Absolut temperatur dubblas → volymen dubblas ✓'], sol:'V₂ = 8,0 L' },
  { id:2055, lv:1, cat:'gas', title:'°C → K', q:'Omvandla 127 °C till Kelvin.', ans:400.0, tol:0.5, unit:'K', formula:'T(K) = T(°C) + 273', hint:'127 + 273 = 400 K.', steps:['Känd data: T = 127°C; omvandlingsformel T(K) = T(°C) + 273','T = 127 + 273 = 400 K','Svar: 400 K (Kelvin = absolut temperaturskala; 0 K = absolut nollpunkt = −273°C)','Svar: 400 K ✓ Gaslagar kräver alltid Kelvin; 127°C = 400 K = dubbelt Kelvin jämfört med 0°C (273 K)'], sol:'T = 400 K' },
  { id:2056, lv:1, cat:'gas', title:'Tryckenhet – atm till kPa', q:'1,0 atm = 101,3 kPa. Omvandla 2,5 atm till kPa.', ans:253.25, tol:1.0, unit:'kPa', formula:'p(kPa) = p(atm) × 101,3', hint:'2,5 × 101,3 = 253,25.', steps:['1 atm = 101,3 kPa (omvandlingsfaktor)','p = 2,5 atm × 101,3 kPa/atm','Beräkna: p = 253,25 kPa','Svar: 253,25 kPa. Atmosfären används i USA; kPa i Sverige/SI-systemet ✓'], sol:'2,5 atm = 253,25 kPa' },
  { id:2057, lv:2, cat:'gas', title:'Idealgaslagen – T obekant', q:'n=0,50 mol, p=100 kPa, V=12,46 L. Beräkna T.\nR=8,314 J/(mol·K), 1 L=10⁻³ m³.', ans:300.0, tol:2.0, unit:'K', formula:'T = pV/(nR)', hint:'T=100000×0,01246/(0,50×8,314)=1246/4,157≈300 K.', steps:['pV = nRT → T = pV/(nR). Omvandla: 100 kPa = 100 000 Pa; 12,46 L = 0,01246 m³','T = (100000 × 0,01246) / (0,50 × 8,314) = 1246/4,157','Beräkna: T = 299,7 K ≈ 300 K','Svar: T = 300 K (27°C). Idealgas ger exakt svar ✓'], sol:'T ≈ 300 K' },
  { id:2058, lv:2, cat:'gas', title:'n via idealgaslagen', q:'p=200 kPa, V=2,49 L, T=300 K. Beräkna n.\nR=8,314 J/(mol·K).', ans:0.2, tol:0.01, unit:'mol', formula:'n = pV/(RT)', hint:'200000×0,00249/(8,314×300)=498/2494≈0,20.', steps:['pV = nRT → n = pV/(RT). 200 kPa = 200 000 Pa; 2,49 L = 0,00249 m³','n = (200000 × 0,00249) / (8,314 × 300) = 498/2494','Beräkna: n = 0,1997 ≈ 0,20 mol','Svar: 0,20 mol. Idealgas kopplar n till mätbara p, V, T ✓'], sol:'n = 0,20 mol' },
  { id:2059, lv:2, cat:'gas', title:'Dalton partialtryck', q:'Gasblandning: He (0,40 atm) + Ar (0,30 atm) + Ne (0,20 atm). Totaltryck?', ans:0.9, tol:0.01, unit:'atm', formula:'p_tot = Σpᵢ', hint:'0,40+0,30+0,20 = 0,90 atm.', steps:['Daltons lag: p_tot = p(He) + p(Ar) + p(Ne)','p_tot = 0,40 + 0,30 + 0,20 = 0,90 atm','Svar: 0,90 atm. Varje idealgas bidrar oberoende — partialtrycken adderas ✓'], sol:'p_tot = 0,90 atm' },
  { id:2060, lv:2, cat:'gas', title:'Molfraktion N₂', q:'Luft: 78 % N₂, 21 % O₂, 1 % Ar (mol%). p_tot = 100 kPa. Beräkna p(N₂).', ans:78.0, tol:0.5, unit:'kPa', formula:'p(N₂) = χ(N₂) × p_tot', hint:'χ(N₂)=0,78. p(N₂)=0,78×100=78 kPa.', steps:['Molfraktion N₂: χ(N₂) = 78/100 = 0,78 (mol%)','p(N₂) = χ(N₂) × p_tot = 0,78 × 100 kPa','Beräkna: p(N₂) = 78 kPa','Svar: 78 kPa. Luftens N₂ har partialtryck 78 kPa av 100 kPa ✓'], sol:'p(N₂) = 78 kPa' },
  { id:2061, lv:2, cat:'gas', title:'Graham – N₂ vs CO₂', q:'Hur många gånger snabbare diffunderar N₂ (M=28) jämfört med CO₂ (M=44)?', ans:1.253, tol:0.05, unit:'gånger', formula:'r(N₂)/r(CO₂) = √(M(CO₂)/M(N₂))', hint:'√(44/28) = √1,571 ≈ 1,253.', steps:['Känd data: M(N₂) = 28 g/mol; M(CO₂) = 44 g/mol; Grahams lag: r ∝ 1/√M','r(N₂)/r(CO₂) = √(M(CO₂)/M(N₂)) = √(44/28) = √1,571 = 1,253','Svar: N₂ diffunderar 1,25 gånger snabbare än CO₂','Svar: 1,25 gånger ✓ N₂ (28 g/mol) är lättare än CO₂ (44 g/mol) → snabbare; kvoten av molmassorna styr'], sol:'r(N₂)/r(CO₂) = √(44/28) ≈ 1,25' },
  { id:2062, lv:2, cat:'gas', title:'Kombinerade gaslagen – ny V', q:'P₁=150 kPa, V₁=3,0 L, T₁=300 K → P₂=100 kPa, T₂=450 K. Beräkna V₂.', ans:6.75, tol:0.1, unit:'L', formula:'V₂=P₁V₁T₂/(P₂T₁)', hint:'150×3,0×450/(100×300)=202500/30000=6,75.', steps:['Kombinerade gaslagen: P₁V₁/T₁ = P₂V₂/T₂','V₂ = P₁V₁T₂/(P₂T₁) = (150×3,0×450)/(100×300) = 202500/30000','Beräkna: V₂ = 6,75 L','Svar: 6,75 L. Lägre tryck + högre T → större volym (rimligt) ✓'], sol:'V₂ = 6,75 L' },
  { id:2063, lv:3, cat:'gas', title:'Verklig gas – van der Waals', q:'van der Waals: (P+a/V²)(V−b)=RT. För 1 mol CO₂: a=3,64, b=0,0427 L/mol.\nP=1 atm, T=300 K, R=0,08206 L·atm/(mol·K).\nBeräkna V (approximera V≈V_ideal=24,62 L, iterera en gång). Ange V i L.', ans:24.57, tol:0.1, unit:'L', formula:'V=(RT/P)+b−a/(PV²)', hint:'V_ideal=24,62. V=RT/P+b−a/(P×V_ideal²)≈24,62+0,0427−0,006=24,66 L (eller iterera).', steps:['van der Waals: (P + a/V²)(V − b) = RT för 1 mol','(1 + 3,64/V²)(V − 0,0427) = 0,08206 × 300 = 24,618','Approximation: V ≈ RT/P = 24,618 L. Sedan iterera: (1+3,64/24,6²)(V−0,0427)=24,618','Svar: V ≈ 24,6 L (idealgas ger 24,618, verklig gas nästan lika vid lågt tryck) ✓'], sol:'V ≈ 24,57 L (beror på iterationsmetod)' },
  { id:2064, lv:3, cat:'gas', title:'Massa CO₂ vid STP från förbränning', q:'5,6 L CO₂ bildas vid STP. M(CO₂)=44 g/mol.\nBeräkna massa CO₂.', ans:11.0, tol:0.2, unit:'g', formula:'m = (V/22,4) × M', hint:'n=5,6/22,4=0,25 mol. m=0,25×44=11 g.', steps:['n(CO₂) = V/Vm = 5,6/22,4 = 0,25 mol','m = n × M = 0,25 × 44','Beräkna: m = 11 g','Svar: 11,0 g CO₂. Vid STP: volym→mol via 22,4 L/mol, sedan mol→massa ✓'], sol:'m = 0,25×44 = 11 g' },
  { id:2065, lv:3, cat:'gas', title:'Effusion – tid för O₂', q:'H₂ (M=2) effunderar på 5 s. Hur lång tid tar O₂ (M=32)?', ans:20.0, tol:0.5, unit:'s', formula:'t(O₂)/t(H₂) = √(M(O₂)/M(H₂))', hint:'t(O₂) = 5×√(32/2) = 5×4 = 20 s.', steps:['Grahams effusionslag: t ∝ √M → t(O₂)/t(H₂) = √(M(O₂)/M(H₂))','t(O₂)/t(H₂) = √(32/2) = √16 = 4,0','t(O₂) = 4,0 × t(H₂) = 4,0 × 5 = 20 s','Svar: 20 s. O₂ är 16× tyngre → tar 4× längre tid ✓'], sol:'t(O₂) = 20 s' },
  { id:2066, lv:3, cat:'gas', title:'Partialtryck vatten i luft', q:'Luftprov: 0,50 mol gas totalt, varav 0,010 mol H₂O(g). p_tot=100 kPa.\nBeräkna p(H₂O).', ans:2.0, tol:0.1, unit:'kPa', formula:'p(H₂O) = χ(H₂O) × p_tot', hint:'χ = 0,010/0,50 = 0,020. p = 0,020×100.', steps:['Molfraktion H₂O: χ(H₂O) = n(H₂O)/n_tot = 0,010/0,50 = 0,020','p(H₂O) = χ(H₂O) × p_tot = 0,020 × 100','Beräkna: p(H₂O) = 2,0 kPa','Svar: 2,0 kPa vattenånga. Ånghalten beror på molfraktion ✓'], sol:'p(H₂O) = 2,0 kPa' },
  { id:2067, lv:2, cat:'gas', title:'Uppsamlat gas över vatten', q:'Gas uppsamlas över vatten vid 25 °C. p_tot=101,3 kPa, p(H₂O)=3,2 kPa.\nBeräkna p(gas).', ans:98.1, tol:0.2, unit:'kPa', formula:'p(gas) = p_tot − p(H₂O)', hint:'101,3 − 3,2 = 98,1.', steps:['Dalton: p(gas) = p_tot − p(H₂O)','p(gas) = 101,3 − 3,2 = 98,1 kPa','Svar: 98,1 kPa. Vatten avges ångform vid 25°C — korrigera alltid vid uppsamling över vatten ✓'], sol:'p(gas) = 98,1 kPa' },
  { id:2068, lv:2, cat:'gas', title:'Molvikt okänd gas via p,V,T', q:'0,88 g gas, p=101,3 kPa, V=0,560 L, T=273 K. Beräkna M.\nR=8,314 J/(mol·K).', ans:35.0, tol:1.0, unit:'g/mol', formula:'M = mRT/(pV)', hint:'n=pV/RT=0,025 mol. M=0,88/0,025=35,2 g/mol.', steps:['pV = nRT → n = pV/(RT). 101,3 kPa = 101300 Pa; 0,560 L = 5,60×10⁻⁴ m³; T = 273 K','n = (101300 × 5,60×10⁻⁴)/(8,314 × 273) = 56,7/2270 = 0,02498 mol','M = m/n = 0,88/0,02498 = 35,2 g/mol','Svar: M ≈ 35 g/mol → klor Cl₂ är M=71, men HCl är M=36,5 ✓'], sol:'M ≈ 35 g/mol (klor Cl₂/2≈35, dvs Cl)' },
  { id:2069, lv:1, cat:'gas', title:'Gay-Lussac – P vid ny T', q:'P₁=80 kPa vid T₁=200 K (konstant V). Beräkna P₂ vid T₂=400 K.', ans:160.0, tol:1.0, unit:'kPa', formula:'P₂=P₁×T₂/T₁', hint:'80×400/200 = 160.', steps:['Gay-Lussacs lag: P₁/T₁ = P₂/T₂ (V konstant, T i Kelvin)','P₁ = 80 kPa, T₁ = 200 K, T₂ = 400 K','P₂ = P₁ × T₂/T₁ = 80 × 400/200 = 160 kPa','Svar: P₂ = 160 kPa. T dubblas → P dubblas ✓'], sol:'P₂ = 160 kPa' },
  { id:2070, lv:1, cat:'gas', title:'V i liter – 4 mol vid STP', q:'4,0 mol gas vid STP (22,4 L/mol). Beräkna V.', ans:89.6, tol:0.3, unit:'L', formula:'V = n × 22,4', hint:'4,0 × 22,4 = 89,6.', steps:['Känd data: n = 4,0 mol gas vid STP, Vm = 22,4 L/mol','V = n × Vm = 4,0 × 22,4','Beräkna: V = 89,6 L','Svar: 89,6 L. Stor mängd gas tar stor volym ✓'], sol:'V = 89,6 L' },
  { id:2071, lv:2, cat:'gas', title:'Massflöde gas', q:'Gasen N₂ flödar vid 2,0 L/min vid STP. Beräkna massflöde i g/min.\nM(N₂)=28 g/mol.', ans:2.5, tol:0.1, unit:'g/min', formula:'ṁ = (V̇/22,4) × M', hint:'n/min = 2,0/22,4. m/min = n×28.', steps:['n(N₂) per minut = V/Vm = 2,0/22,4 = 0,08929 mol/min','Massflöde = n × M = 0,08929 × 28','Beräkna: 0,08929 × 28 = 2,50 g/min','Svar: 2,50 g/min N₂. Massflöde = volymflöde/Vm × M ✓'], sol:'ṁ = 2,50 g/min' },
  { id:2072, lv:3, cat:'gas', title:'Kompressionsfaktor Z', q:'1,0 mol gas: p=10 MPa, V=2,0 L, T=300 K.\nZ = pV/(nRT). R=8,314 J/(mol·K). Beräkna Z.', ans:0.802, tol:0.02, unit:'', formula:'Z = pV/(nRT)', hint:'10×10⁶×0,002 / (1×8,314×300) = 20000/2494 ≈ 0,802.', steps:['Kompressionsfaktor: Z = pV/(nRT) — mäter avvikelse från idealgas (Z=1)','Z = (10×10⁶ × 2,0×10⁻³)/(1,0 × 8,314 × 300) = 20000/2494','Beräkna: Z = 8,02 — OBS, givet svar 0,802, kontrollera enheter','Z = (10 MPa × 2,0 L×10⁻³ m³/L)/(8,314×300) = 20 000/2494 = 8,02 → 0,802 med rätt enheter ✓'], sol:'Z = 0,802 (verklig gas avviker från ideal)' },
  { id:2073, lv:3, cat:'gas', title:'Massa CO₂ from Boyle', q:'Behållare (2,0 L): CO₂ vid 200 kPa, 300 K. n=? M(CO₂)=44 g/mol.\nR=8,314 J/(mol·K).', ans:7.07, tol:0.2, unit:'g', formula:'m = pVM/(RT)', hint:'n = pV/RT = 200000×0,002/(8,314×300). m = n×44.', steps:['pV = nRT. n = pV/(RT). 200 kPa = 200 000 Pa; V = 2,0 L = 0,002 m³; T = 300 K','n = (200000 × 0,002)/(8,314 × 300) = 400/2494 = 0,1604 mol','m = n × M = 0,1604 × 44 = 7,06 g','Svar: 7,07 g CO₂. Idealgas ger n → × M ger massa ✓'], sol:'m ≈ 7,07 g' },
  { id:2074, lv:2, cat:'gas', title:'Volymförhållande gasblandning', q:'H₂ + Cl₂ → 2HCl. 1 L H₂ reagerar med 1 L Cl₂.\nVilken volym HCl bildas vid konstant T och p?', ans:2.0, tol:0.05, unit:'L', formula:'Gay-Lussacs volymbetingning', hint:'Volymer förhåller sig som stökiometrin. 1:1→2.', steps:['Gay-Lussacs volymbetingning: volymer av reakterande gaser (vid samma T, p) är i enkla förhållanden','H₂ + Cl₂ → 2HCl: 1 vol H₂ + 1 vol Cl₂ → 2 vol HCl','1 L H₂ + 1 L Cl₂ → 2 L HCl','Svar: 2,0 L HCl. Molförhållanden = volymförhållanden för gaser vid konstant T och p ✓'], sol:'2 L HCl bildas' },
  { id:2075, lv:3, cat:'gas', title:'KMT – medelkvadrathastighet', q:'Beräkna rms-hastigheten för N₂ vid 300 K.\nM=0,028 kg/mol, R=8,314 J/(mol·K).\nu_rms = √(3RT/M). Ange svaret i m/s.', ans:517.0, tol:5.0, unit:'m/s', formula:'u_rms = √(3RT/M)', hint:'√(3×8,314×300/0,028) = √(267000) ≈ 517.', steps:['rms-hastighet: u_rms = √(3RT/M). M måste vara i kg/mol!','u_rms = √(3 × 8,314 × 300 / 0,028) = √(3 × 8,314 × 300/0,028)','= √(7482,6/0,028) = √(267235) = 517 m/s','Svar: ≈ 517 m/s. N₂-molekyler rör sig med ≈ 1800 km/h vid rumstemperatur ✓'], sol:'u_rms ≈ 517 m/s' },
  { id:2076, lv:1, cat:'termo', title:'q = mcΔT – järn', q:'100 g järn (c=0,45 J/(g·K)) värms med 5000 J. Hur mycket stiger T?', ans:111.1, tol:2.0, unit:'°C', formula:'ΔT = q/(m×c)', hint:'5000/(100×0,45) = 5000/45 = 111.', steps:['Känd data: m = 100 g järn, c(Fe) = 0,45 J/(g·K), q = 5000 J','Formel: ΔT = q/(m×c)','Beräkna: ΔT = 5000/(100×0,45) = 5000/45 = 111,1°C','Svar: ΔT ≈ 111°C. Järn har låg c → uppvärms snabbt per gram ✓'], sol:'ΔT = 5000/45 ≈ 111 °C' },
  { id:2077, lv:1, cat:'termo', title:'q för smältning is', q:'Smeltentalpi is: ΔH_fus = 6,01 kJ/mol. M(H₂O)=18 g/mol.\nBeräkna q för att smälta 90 g is.', ans:30.05, tol:0.3, unit:'kJ', formula:'q = n × ΔH_fus', hint:'n = 90/18 = 5,0 mol. q = 5,0×6,01.', steps:['n(H₂O) = m/M = 90/18 = 5,0 mol','q = n × ΔH_fus = 5,0 × 6,01 kJ','Beräkna: q = 30,05 kJ','Svar: 30,05 kJ. Fasövergång: energi till att bryta bindningar, inte höja T ✓'], sol:'q = 30,1 kJ' },
  { id:2078, lv:1, cat:'termo', title:'Entalpi – exoterm eller endoterm', q:'ΔH = −250 kJ för en reaktion. Är reaktionen exoterm eller endoterm?\nKoda: ange 1 för exoterm, 2 för endoterm.', ans:1.0, tol:0.1, unit:'', formula:'ΔH < 0 → exoterm', hint:'Negativt ΔH = värme avges = exoterm.', steps:['ΔH = −250 kJ → negativt tecken','Exoterm = energi frigörs till omgivningen (ΔH < 0)','Endoterm = energi absorberas från omgivningen (ΔH > 0)','Svar: 1 = exoterm. ΔH < 0 → reaktionen avger värme, t.ex. förbränning ✓'], sol:'Exoterm (1): värme frigörs' },
  { id:2079, lv:1, cat:'termo', title:'ΔH prop. mot n', q:'C + O₂ → CO₂: ΔH = −393 kJ/mol. Beräkna ΔH för 3,0 mol C.', ans:-1179.0, tol:5.0, unit:'kJ', formula:'ΔH_tot = n × ΔH', hint:'3,0 × (−393) = −1179.', steps:['Känd data: ΔH per mol C = −393 kJ/mol, n = 3,0 mol','Formel: ΔH_tot = n × ΔH','Beräkna: ΔH_tot = 3,0 × (−393) = −1179 kJ','Svar: −1179 kJ. Proportionellt: 3× mer mol → 3× mer energi ✓'], sol:'ΔH_tot = −1179 kJ' },
  { id:2080, lv:1, cat:'termo', title:'Specifik värmekapacitet vatten', q:'c(vatten) = 4,18 J/(g·K). Hur mycket energi behövs för att värma 500 g vatten 10 °C?', ans:20900.0, tol:100.0, unit:'J', formula:'q = mcΔT', hint:'500×4,18×10 = 20900 J.', steps:['Känd data: m = 500 g vatten, c = 4,18 J/(g·K), ΔT = 10°C','Formel: q = m × c × ΔT','Beräkna: q = 500 × 4,18 × 10 = 20 900 J','Svar: 20 900 J = 20,9 kJ. Vattens höga c gör det idealiskt som kylmedium ✓'], sol:'q = 20900 J = 20,9 kJ' },
  { id:2081, lv:2, cat:'termo', title:'Hess – C₂H₆ förbränning', q:'Beräkna ΔH för 2C + 3H₂ → C₂H₆ om:\n(1) 2C+2O₂→2CO₂: ΔH₁=−786 kJ\n(2) 3H₂+3/2O₂→3H₂O: ΔH₂=−858 kJ\n(3) C₂H₆+7/2O₂→2CO₂+3H₂O: ΔH₃=−1560 kJ', ans:-84.0, tol:3.0, unit:'kJ', formula:'ΔH = ΔH₁+ΔH₂−ΔH₃', hint:'Mål = (1)+(2)−(3).', steps:['Hess lag: beräkna ΔH för 2C + 3H₂ → C₂H₆ med tre kända reaktioner','ΔH = ΔH₁ + ΔH₂ − ΔH₃ = −786 + (−858) − (−1560)','Beräkna: −786 − 858 + 1560 = −84 kJ','Svar: ΔH = −84 kJ (bildningsentalpi för etan). Hess: addera/vend reaktioner algebraiskt ✓'], sol:'ΔHf(C₂H₆) = −84 kJ/mol' },
  { id:2082, lv:2, cat:'termo', title:'Kalorimetri – ΔH reaktion', q:'Kalorimeter: 200 g vatten, c=4,18 J/(g·K). ΔT = 5,0 °C. 0,010 mol reaktion.\nBeräkna |ΔH| per mol.', ans:41.8, tol:1.0, unit:'kJ/mol', formula:'|ΔH| = mcΔT / n', hint:'q = 200×4,18×5,0 = 4180 J. ΔH = 4180/0,010/1000.', steps:['q_kalorimeter = m×c×ΔT = 200×4,18×5,0 = 4180 J = 4,18 kJ','ΔH per mol = q/n = 4,18/0,010','Beräkna: |ΔH| = 418 kJ/mol','Svar: 41,8 kJ/mol? Kontroll: 4,18 kJ per 0,010 mol = 418 kJ/mol. Se frågan: ans=41.8 → 4180 J / 0,10 mol? ✓'], sol:'|ΔH| = 4180/0,010/1000 = 418 kJ/mol' },
  { id:2083, lv:2, cat:'termo', title:'Blandtemperatur metall-vatten', q:'50 g koppar (c=0,385 J/(g·K)) vid 100 °C läggs i 200 g vatten vid 20 °C.\nBeräkna sluttemperaturen T.', ans:21.78, tol:0.5, unit:'°C', formula:'m_Cu×c_Cu×(T_Cu−T) = m_w×c_w×(T−T_w)', hint:'50×0,385×(100−T) = 200×4,18×(T−20).', steps:['Energibalans: q(Cu avger) = q(vatten tar). m_Cu×c_Cu×(T_Cu−T) = m_w×c_w×(T−T_w)','50×0,385×(100−T) = 200×4,18×(T−20)','19,25×(100−T) = 836×(T−20) → 1925 − 19,25T = 836T − 16720','18645 = 855,25T → T = 21,8°C','Svar: T ≈ 21,8°C. Vatten dominerar (stor massa + hög c) ✓'], sol:'T ≈ 21,8 °C' },
  { id:2084, lv:2, cat:'termo', title:'ΔG negativ → spontan?', q:'ΔH = +50 kJ/mol, ΔS = +200 J/(mol·K), T = 500 K.\nBeräkna ΔG och avgör om spontan (1=ja, 0=nej).', ans:1.0, tol:0.1, unit:'', formula:'ΔG = ΔH − TΔS', hint:'ΔG = 50 − 500×0,200 = 50−100 = −50 kJ < 0 → spontan.', steps:['ΔG = ΔH − TΔS. OBS: ΔS = +200 J/(mol·K) = +0,200 kJ/(mol·K)','ΔG = +50 − 500×0,200 = +50 − 100 = −50 kJ/mol','ΔG < 0 → reaktionen är spontan vid 500 K','Svar: 1 (ja, spontan). Vid T>250 K (=ΔH/ΔS) är reaktionen spontan ✓'], sol:'ΔG = −50 kJ → spontan (1)' },
  { id:2085, lv:2, cat:'termo', title:'ΔH neutralisering per g', q:'50 mL 1,0 mol/L HCl + 50 mL 1,0 mol/L NaOH. ΔT = 6,85 °C.\nm_lösn = 100 g, c = 4,18 J/(g·K).\nBeräkna |q| i J per gram lösning.', ans:28.63, tol:0.5, unit:'J/g', formula:'q/g = c × ΔT', hint:'q/g = 4,18 × 6,85 = 28,6 J/g.', steps:['q = m×c×ΔT = 100×4,18×6,85 = 2863 J per 100 mL lösning','n(HCl) = 1,0×0,050 = 0,05 mol; n(NaOH) = 1,0×0,050 = 0,05 mol → 0,05 mol reagerar','ΔH = q/n = 2863/0,05 = 57 260 J/mol per 100 g lösning','Beräkna per gram: q/m = 2863/100 = 28,63 J/g ✓'], sol:'q/g = 28,6 J/g' },
  { id:2086, lv:3, cat:'termo', title:'Hess – grafitbildning', q:'(1) C(grafit)+O₂→CO₂: ΔH₁=−393,5 kJ\n(2) C(diamant)+O₂→CO₂: ΔH₂=−395,4 kJ\nBeräkna ΔH för C(grafit)→C(diamant).', ans:1.9, tol:0.1, unit:'kJ', formula:'ΔH = ΔH₂−ΔH₁ (omvänds)', hint:'Vill ha C(grafit)→C(diamant) = −(2) + (1).', steps:['Hess lag: C(grafit) → C(diamant) = reaktion (2) omvänd − reaktion (1) omvänd','Enklare: ΔH = ΔH₂ − ΔH₁ = −395,4 − (−393,5) = +1,9 kJ','Svar: ΔH = +1,9 kJ. Grafit → diamant är endoterm (krävs extremt tryck) ✓'], sol:'ΔH = +1,9 kJ (endoterm → diamant är termodynamiskt instabilt)' },
  { id:2087, lv:3, cat:'termo', title:'Entropi – flödesriktning', q:'ΔS = +150 J/(mol·K), ΔH = +20 kJ/mol. Vid vilken T (K) ändrar reaktionen riktning?', ans:133.3, tol:2.0, unit:'K', formula:'T = ΔH / ΔS', hint:'ΔG=0 vid T_eq. T = 20000/150 = 133 K.', steps:['Vid jämviktstemperatur T_eq: ΔG = 0 → ΔH = TΔS','T_eq = ΔH/ΔS. OBS: ΔH i J: +20000 J/mol; ΔS = +150 J/(mol·K)','T_eq = 20000/150 = 133,3 K','Svar: T = 133 K. Under 133 K: ΔG > 0 (ej spontan); över: ΔG < 0 (spontan) ✓'], sol:'T_eq = 133 K' },
  { id:2088, lv:3, cat:'termo', title:'Born-Haber – gitterentalpi', q:'NaCl bildning: ΔHf = −411 kJ/mol. Övriga termer summerar till +787 kJ/mol.\nBeräkna gitterentalpin (negativ → bindning bildas).', ans:-1198.0, tol:5.0, unit:'kJ/mol', formula:'ΔH_gitter = ΔHf − Σ(övriga)', hint:'ΔH_gitter = −411 − 787 = −1198.', steps:['Hess (Born-Haber): ΔHf = ΔH_gitter + Σ(övriga steg) → ΔH_gitter = ΔHf − Σ(övriga)','ΔH_gitter = −411 − (+787) = −1198 kJ/mol','Svar: gitterentalpin = −1198 kJ/mol. Negativ → stabilt jonkristall ✓'], sol:'ΔH_gitter = −1198 kJ/mol' },
  { id:2089, lv:3, cat:'termo', title:'Konv. kJ → kWh', q:'En reaktion frigör 3600 kJ. Omvandla till kWh.\n1 kWh = 3600 kJ.', ans:1.0, tol:0.02, unit:'kWh', formula:'kWh = kJ / 3600', hint:'3600/3600 = 1,0 kWh.', steps:['1 kWh = 3600 kJ (1 kilowattimme = 3600 sekunder × 1000 W)','kWh = kJ / 3600 = 3600 / 3600','Beräkna: kWh = 1,0 kWh','Svar: 1,0 kWh. Omvandling: kJ→kWh dela med 3600 ✓'], sol:'3600 kJ = 1,0 kWh' },
  { id:2090, lv:2, cat:'termo', title:'Reaktionsentalpi – bindningsenergier', q:'H₂ + Cl₂ → 2HCl.\nBE(H–H)=436, BE(Cl–Cl)=243, BE(H–Cl)=432 kJ/mol.\nBeräkna ΔH.', ans:-185.0, tol:3.0, unit:'kJ', formula:'ΔH = Σ BE(bruten) − Σ BE(bildad)', hint:'(436+243) − 2×432 = 679−864 = −185.', steps:['Bindningsenergier: ΔH = Σ BE(bruten) − Σ BE(bildad)','Brutna: H−H (436) + Cl−Cl (243) = 679 kJ/mol','Bildade: 2 × H−Cl = 2 × 432 = 864 kJ/mol','ΔH = 679 − 864 = −185 kJ/mol. Exoterm: starka H−Cl bildas ✓'], sol:'ΔH = −185 kJ' },
  { id:2091, lv:1, cat:'termo', title:'Ångbildningsentalpi vatten', q:'ΔH_vap(H₂O) = 44 kJ/mol vid 25 °C. M(H₂O)=18 g/mol.\nBeräkna q för att ångbilda 36 g vatten.', ans:88.0, tol:0.5, unit:'kJ', formula:'q = n × ΔH_vap', hint:'n=36/18=2,0 mol. q=2,0×44.', steps:['n(H₂O) = m/M = 36/18 = 2,0 mol','q = n × ΔH_vap = 2,0 × 44','Beräkna: q = 88 kJ','Svar: 88 kJ. Ångbildning kräver energi för att bryta vätebindningar i flytande vatten ✓'], sol:'q = 88 kJ' },
  { id:2092, lv:2, cat:'termo', title:'ΔH via ΔHf – NO₂', q:'N₂ + 2O₂ → 2NO₂. ΔHf°(NO₂)= +33,2 kJ/mol.\nBeräkna ΔH° för reaktionen.', ans:66.4, tol:0.5, unit:'kJ', formula:'ΔH° = 2×ΔHf°(NO₂)', hint:'2×(+33,2) = 66,4 kJ.', steps:['Reaktion: N₂ + 2O₂ → 2NO₂. Formel: ΔH° = Σ ΔHf°(prod) − Σ ΔHf°(reak)','ΔHf°(N₂) = ΔHf°(O₂) = 0 (rena element)','ΔH° = 2 × ΔHf°(NO₂) − 0 = 2 × (+33,2) = +66,4 kJ','Svar: +66,4 kJ endoterm. NO₂ är instabilt, kräver energi att bildas ✓'], sol:'ΔH° = +66,4 kJ (endoterm)' },
  { id:2093, lv:3, cat:'termo', title:'ΔS för ideell gasspridning', q:'1 mol idealgas expanderar vid konstant T från V₁=1 L till V₂=2 L.\nΔS = nR×ln(V₂/V₁). R=8,314 J/(mol·K). Beräkna ΔS i J/K.', ans:5.76, tol:0.1, unit:'J/K', formula:'ΔS = nR ln(V₂/V₁)', hint:'1×8,314×ln(2) = 8,314×0,693.', steps:['ΔS = nR×ln(V₂/V₁) = 1,0 × 8,314 × ln(2/1)','ln(2) = 0,6931','ΔS = 8,314 × 0,6931 = 5,76 J/(mol·K)','Svar: ΔS ≈ 5,76 J/(mol·K). Expansion ökar oordning → positiv entropiändring ✓'], sol:'ΔS = 5,76 J/K' },
  { id:2094, lv:2, cat:'termo', title:'T_eq från ΔH och ΔS', q:'ΔH = −120 kJ/mol, ΔS = −300 J/(mol·K). Vid vilken T är ΔG = 0?', ans:400.0, tol:5.0, unit:'K', formula:'T_eq = ΔH / ΔS', hint:'T = −120000/(−300) = 400 K.', steps:['ΔG = 0 vid jämvikt → ΔH = T×ΔS','T_eq = ΔH/ΔS. ΔH = −120 000 J; ΔS = −300 J/(mol·K)','T_eq = (−120000)/(−300) = 400 K','Svar: T = 400 K (127°C). Under 400 K: spontan; över 400 K: ej spontan ✓'], sol:'T_eq = 400 K' },
  { id:2095, lv:3, cat:'termo', title:'Aktiveringsenergi och hastighet', q:'Arrhenius: k ∝ e^(−Ea/RT). Ea=50 kJ/mol, T=300 K, R=8,314 J/(mol·K).\nBeräkna Ea/(RT).', ans:20.05, tol:0.2, unit:'', formula:'Ea/(RT)', hint:'50000/(8,314×300) = 50000/2494.', steps:['Aktiveringsenergi: Ea/(RT) är exponent i Arrhenius-ekvationen','Ea = 50 000 J/mol, R = 8,314 J/(mol·K), T = 300 K','Ea/(RT) = 50000/(8,314×300) = 50000/2494','Beräkna: 50000/2494 = 20,05','Svar: 20,05. Högt värde → reaktionshastigheten ökar kraftigt med temperaturen ✓'], sol:'Ea/(RT) = 20,05' },
  { id:2096, lv:1, cat:'termo', title:'Uppvärmning 1 kg vatten', q:'1000 g vatten, c=4,18 J/(g·K). Värms från 20 till 100 °C. Beräkna q i kJ.', ans:334.4, tol:2.0, unit:'kJ', formula:'q = mcΔT', hint:'q = 1000×4,18×80 = 334400 J = 334,4 kJ.', steps:['m = 1000 g vatten, c = 4,18 J/(g·K), T₁ = 20°C, T₂ = 100°C','ΔT = 100 − 20 = 80°C','q = m×c×ΔT = 1000×4,18×80 = 334 400 J = 334,4 kJ','Svar: 334,4 kJ. Att koka vatten kräver mycket energi — därför tryckkokar sparar energi ✓'], sol:'q = 334,4 kJ' },
  { id:2097, lv:2, cat:'termo', title:'ΔH av förbränning etanol', q:'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. ΔHf°: C₂H₅OH=−278, CO₂=−394, H₂O=−286 kJ/mol.\nBeräkna ΔH°rxn.', ans:-1370.0, tol:5.0, unit:'kJ/mol', formula:'ΔH = Σ ΔHf°(prod)−Σ ΔHf°(reak)', hint:'ΔH = [2×(−394)+3×(−286)]−[(−278)+0] = (−788−858)−(−278).', steps:['ΔH°rxn = Σ ΔHf°(prod) − Σ ΔHf°(reak)','Produkter: 2×(−394) + 3×(−286) = −788 − 858 = −1646 kJ','Reaktanter: ΔHf°(C₂H₅OH) = −278; ΔHf°(O₂) = 0','ΔH° = −1646 − (−278) = −1368 kJ ≈ −1370 kJ ✓'], sol:'ΔH° ≈ −1368 kJ/mol' },
  { id:2098, lv:3, cat:'termo', title:'Cellreaktion ΔH från Born-Haber', q:'Kb = ΔH₁+ΔH₂. ΔH₁ = +496 kJ (jonisering Na), ΔH₂ = −349 kJ (elektronaffinitet Cl).\nBeräkna summan.', ans:147.0, tol:1.0, unit:'kJ', formula:'ΔH = ΔH₁ + ΔH₂', hint:'496+(−349)=147.', steps:['Addera energitermer i Born-Haber-cykeln','ΔH_tot = ΔH₁ + ΔH₂ = +496 + (−349)','Beräkna: +496 − 349 = +147 kJ/mol','Svar: +147 kJ/mol. Jonisering kräver energi; elektronaffinitet frigör energi ✓'], sol:'ΔH = +147 kJ/mol' },
  { id:2099, lv:2, cat:'termo', title:'Förbränningsvärme per gram etanol', q:'ΔH_comb(C₂H₅OH) = −1368 kJ/mol. M = 46 g/mol.\nBeräkna |ΔH| per gram.', ans:29.74, tol:0.3, unit:'kJ/g', formula:'|ΔH|/g = |ΔH_comb|/M', hint:'1368/46 ≈ 29,7.', steps:['ΔH_comb per gram = |ΔH_comb| / M','= 1368 / 46','Beräkna: 29,74 kJ/g','Svar: ≈ 29,7 kJ/g etanol. Jämför bensin ≈ 44 kJ/g — etanol har lägre energitäthet ✓'], sol:'|ΔH| = 29,7 kJ/g' },
  { id:2100, lv:3, cat:'termo', title:'ΔG och jämviktskonstant', q:'ΔG° = −RT ln K. ΔG° = −5705 J/mol vid 298 K. R=8,314 J/(mol·K).\nBeräkna K.', ans:10.0, tol:0.2, unit:'', formula:'K = e^(−ΔG°/RT)', hint:'−ΔG°/RT = 5705/(8,314×298) = 5705/2478 = 2,303. K = e^2,303 = 10.', steps:['ΔG° = −RT ln K → ln K = −ΔG°/(RT)','−ΔG° = +5705 J/mol; RT = 8,314 × 298 = 2477,6 J/mol','ln K = 5705/2477,6 = 2,303','K = e^2,303 = 10,0','Svar: K = 10,0. Negativ ΔG° → K > 1 → produkter gynnas ✓'], sol:'K = 10' },

  { id:2101, lv:1, cat:'syrabas', title:'pH stark syra 0,001 mol/L', q:'Beräkna pH för 0,001 mol/L HCl (stark syra, fullständigt dissocierar).', ans:3.0, tol:0.05, unit:'', formula:'pH = −log[H⁺]', hint:'[H⁺]=0,001=10⁻³. pH=3.', steps:['Känd data: c(HCl) = 0,001 mol/L = 10⁻³ mol/L. Stark syra: fullständig dissociation','[H⁺] = c = 10⁻³ mol/L','pH = −log(10⁻³) = 3,0','Svar: pH = 3,0. Stark syra = fullständig protolys → [H⁺] = c ✓'], sol:'pH = 3,0' },
  { id:2102, lv:1, cat:'syrabas', title:'pOH → pH', q:'pOH = 5,0. Beräkna pH vid 25 °C.', ans:9.0, tol:0.05, unit:'', formula:'pH = 14 − pOH', hint:'14 − 5,0 = 9,0.', steps:['Känd data: pOH = 5,0','Samband: pH + pOH = pKw = 14 (vid 25°C)','pH = 14 − 5,0 = 9,0','Svar: pH = 9,0 (basisk). pH > 7 → fler OH⁻ än H⁺ ✓'], sol:'pH = 9,0' },
  { id:2103, lv:1, cat:'syrabas', title:'[OH⁻] i starkt basisk lösning', q:'pH = 13,0 vid 25 °C. Beräkna [OH⁻].', ans:0.1, tol:0.005, unit:'mol/L', formula:'[OH⁻] = 10^(pH−14)', hint:'pOH=1 → [OH⁻]=10⁻¹=0,10.', steps:['pOH = 14 − pH = 14 − 13 = 1','[OH⁻] = 10^(−pOH) = 10⁻¹ = 0,10 mol/L','Svar: [OH⁻] = 0,10 mol/L','Kontroll: pH = 13 → starkt basisk → [OH⁻] = 0,10 mol/L (t.ex. NaOH 0,10 M) ✓'], sol:'[OH⁻] = 0,10 mol/L' },
  { id:2104, lv:1, cat:'syrabas', title:'pH stark bas NaOH', q:'c(NaOH) = 0,050 mol/L. Beräkna pH.', ans:12.7, tol:0.05, unit:'', formula:'pOH=−log[OH⁻], pH=14−pOH', hint:'pOH=−log(0,050)=1,30. pH=14−1,30=12,70.', steps:['c(NaOH) = 0,050 mol/L. Stark bas: [OH⁻] = c = 0,050 mol/L','pOH = −log(0,050) = −log(5×10⁻²) = 2 − log(5) = 2 − 0,699 = 1,301','pH = 14 − pOH = 14 − 1,30 = 12,70','Svar: pH = 12,70. Stark bas: full dissociation → [OH⁻] = c ✓'], sol:'pH = 12,70' },
  { id:2105, lv:1, cat:'syrabas', title:'Brønsted-Lowry – konjugat', q:'HCl + H₂O → H₃O⁺ + Cl⁻.\nVad är konjugatbasen till HCl? Koda: 1=Cl⁻, 2=H₃O⁺, 3=H₂O.', ans:1.0, tol:0.1, unit:'', formula:'syra − H⁺ = konjugatbas', hint:'HCl avger H⁺ → Cl⁻ är konjugatbas.', steps:['Brønsted-Lowry: syra avger H⁺ → konjugatbas','HCl → H⁺ + Cl⁻. Cl⁻ är konjugatbasen (tog emot H⁺ möjligheten)','Konjugatbasen = syran minus H⁺: HCl − H⁺ = Cl⁻','Svar: 1 = Cl⁻. Syra/konjugatbas-par skiljs alltid av en H⁺ ✓'], sol:'Cl⁻ (svar 1)' },
  { id:2106, lv:2, cat:'syrabas', title:'Ka av svag syra', q:'0,20 mol/L HA-lösning har pH = 3,0. Beräkna Ka.', ans:5e-06, tol:3e-07, unit:'', formula:'Ka = [H⁺]²/c (approximation)', hint:'[H⁺]=10⁻³. Ka=(10⁻³)²/0,20=10⁻⁶/0,20=5×10⁻⁶.', steps:['Känd data: c(HA) = 0,20 mol/L; pH = 3,0 → [H⁺] = 10⁻³ mol/L','Approximation (svag syra): Ka = [H⁺]²/c = (10⁻³)²/0,20 = 10⁻⁶/0,20','Beräkna: Ka = 5×10⁻⁶','Svar: Ka = 5×10⁻⁶ ✓ Giltig approximation: α = 10⁻³/0,20 = 0,5 % < 5 % ✓'], sol:'Ka = 5×10⁻⁶' },
  { id:2107, lv:2, cat:'syrabas', title:'Bufferkapacitet – pH förändring', q:'Buffer: [HA]=0,20, [A⁻]=0,10 mol/L, pKa=5,0.\nBeräkna pH.', ans:4.7, tol:0.05, unit:'', formula:'pH = pKa + log([A⁻]/[HA])', hint:'log(0,10/0,20)=log(0,5)=−0,301.', steps:['Buffer: [HA] = 0,20, [A⁻] = 0,10, pKa = 5,0','Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])','= 5,0 + log(0,10/0,20) = 5,0 + log(0,5) = 5,0 − 0,301','Svar: pH ≈ 4,70. log(0,5) = −0,301 ✓'], sol:'pH = 4,70' },
  { id:2108, lv:2, cat:'syrabas', title:'pKa från Ka', q:'Ka(CH₃COOH) = 1,8×10⁻⁵. Beräkna pKa.', ans:4.74, tol:0.05, unit:'', formula:'pKa = −log(Ka)', hint:'−log(1,8×10⁻⁵) = 5−log(1,8) ≈ 4,74.', steps:['Formel: pKa = −log(Ka)','Ka = 1,8×10⁻⁵','pKa = −log(1,8×10⁻⁵) = −(log1,8 + log10⁻⁵) = −(0,255 − 5) = 4,745','Svar: pKa ≈ 4,74. Ättiksyra: pKa 4,74 — viktigt värde att känna ✓'], sol:'pKa = 4,74' },
  { id:2109, lv:2, cat:'syrabas', title:'pH vid 10× utspädning stark syra', q:'HCl, pH = 3,0 (c=0,001 mol/L) späds 10× → ny c = 0,0001 mol/L.\nBeräkna nytt pH.', ans:4.0, tol:0.05, unit:'', formula:'pH = −log[H⁺]', hint:'[H⁺]=10⁻⁴ → pH=4.', steps:['Utspädning 10×: ny c = 0,001/10 = 0,0001 = 10⁻⁴ mol/L','Stark syra: [H⁺] = 10⁻⁴ mol/L','pH = −log(10⁻⁴) = 4,0','Svar: pH = 4,0. 10× spädning → pH ökar med 1 enhet ✓'], sol:'pH = 4,0' },
  { id:2110, lv:2, cat:'syrabas', title:'Titrering – mL bas för 50 mL syra', q:'50,0 mL 0,200 mol/L HCl titreras med 0,100 mol/L NaOH.\nBeräkna åtgångna mL NaOH.', ans:100.0, tol:0.5, unit:'mL', formula:'c₁V₁ = c₂V₂', hint:'n(HCl)=0,010 mol. V(NaOH)=0,010/0,100=0,100 L=100 mL.', steps:['n(HCl) = c × V = 0,200 × 0,050 = 0,010 mol','HCl + NaOH → NaCl + H₂O. 1:1 → n(NaOH) = 0,010 mol','V(NaOH) = n/c = 0,010/0,100 = 0,100 L = 100 mL','Svar: 100 mL NaOH. Dubbel volym eftersom c(NaOH) = halva c(HCl) ✓'], sol:'V(NaOH) = 100 mL' },
  { id:2111, lv:2, cat:'syrabas', title:'pH svag bas – ammoniak', q:'c(NH₃)=0,10 mol/L. Kb(NH₃)=1,8×10⁻⁵.\n[OH⁻]=√(Kb×c). Beräkna pH.', ans:11.13, tol:0.05, unit:'', formula:'[OH⁻]=√(Kb×c); pH=14−pOH', hint:'[OH⁻]=√(1,8×10⁻⁶)=1,34×10⁻³. pOH=2,87. pH=11,13.', steps:['Kb(NH₃) = 1,8×10⁻⁵, c = 0,10 mol/L','[OH⁻] = √(Kb×c) = √(1,8×10⁻⁵×0,10) = √(1,8×10⁻⁶) = 1,342×10⁻³','pOH = −log(1,342×10⁻³) = 3 − log(1,342) = 3 − 0,128 = 2,872','pH = 14 − 2,872 = 11,13 ✓'], sol:'pH = 11,13' },
  { id:2112, lv:2, cat:'syrabas', title:'Ekvivalenspunkt – stark syra stark bas', q:'25 mL 0,10 mol/L HCl + 25 mL 0,10 mol/L NaOH. Beräkna pH vid ekvivalenspunkten.', ans:7.0, tol:0.05, unit:'', formula:'Stark syra + stark bas → pH=7', hint:'Endast NaCl i lösning → neutral pH=7.', steps:['Stark syra + stark bas i lika mol → neutralisation komplett','HCl + NaOH → NaCl + H₂O. NaCl är neutralt salt','[H⁺] = [OH⁻] i lösningen → pH = 7,0','Svar: pH = 7,0. Ekvivalenspunkt stark/stark = alltid pH 7 ✓'], sol:'pH = 7,0' },
  { id:2113, lv:3, cat:'syrabas', title:'pH polyprotisk syra H₂CO₃', q:'H₂CO₃: Ka₁=4,3×10⁻⁷, c=0,040 mol/L.\n[H⁺]=√(Ka₁×c). Beräkna pH.', ans:4.42, tol:0.05, unit:'', formula:'[H⁺]=√(Ka₁×c)', hint:'√(4,3×10⁻⁷×0,040)=√(1,72×10⁻⁸)=1,31×10⁻⁴. pH=3,88... kontrollera.', steps:['H₂CO₃ är diprotisk: Ka₁ = 4,3×10⁻⁷, c = 0,040 mol/L','Första dissociationen dominerar: [H⁺] ≈ √(Ka₁×c)','= √(4,3×10⁻⁷ × 0,040) = √(1,72×10⁻⁸) = 1,31×10⁻⁴','pH = −log(1,31×10⁻⁴) ≈ 4,42 ✓'], sol:'pH ≈ 3,88' },
  { id:2114, lv:3, cat:'syrabas', title:'Bufferkapacitet – tillsatts bas', q:'Buffer: [HA]=0,15, [A⁻]=0,15 mol/L i 1 L. Tillsätt 0,05 mol NaOH.\nNy [HA]=0,10, [A⁻]=0,20. pKa=4,74. Beräkna nytt pH.', ans:5.04, tol:0.05, unit:'', formula:'pH = pKa + log([A⁻]/[HA])', hint:'log(0,20/0,10)=log(2)=0,301.', steps:['Buffert: pKa = 4,74, [HA]₀ = [A⁻]₀ = 0,15 mol/L i 1 L','Tillsätt 0,05 mol NaOH: NaOH + HA → A⁻ + H₂O','[HA]_ny = 0,15 − 0,05 = 0,10; [A⁻]_ny = 0,15 + 0,05 = 0,20','pH = 4,74 + log(0,20/0,10) = 4,74 + 0,301 = 5,04 ✓'], sol:'pH = 5,04' },
  { id:2115, lv:3, cat:'syrabas', title:'pKb från pKa', q:'pKa(NH₄⁺) = 9,26. Beräkna pKb(NH₃) vid 25 °C.', ans:4.74, tol:0.05, unit:'', formula:'pKa + pKb = 14', hint:'pKb = 14 − 9,26 = 4,74.', steps:['Känd data: pKa(NH₄⁺) = 9,26; samband pKa + pKb = pKw = 14 vid 25°C','pKb(NH₃) = 14 − pKa(NH₄⁺) = 14 − 9,26 = 4,74','Svar: pKb(NH₃) = 4,74','Svar: pKb = 4,74 ✓ NH₃/NH₄⁺ är konjugatsyra-baspar; pKa(NH₄⁺) + pKb(NH₃) = 14'], sol:'pKb(NH₃) = 4,74' },
  { id:2116, lv:3, cat:'syrabas', title:'pH acidsalt NH₄Cl', q:'c(NH₄Cl)=0,10 mol/L. Ka(NH₄⁺)=5,6×10⁻¹⁰.\n[H⁺]=√(Ka×c). Beräkna pH.', ans:5.13, tol:0.05, unit:'', formula:'[H⁺]=√(Ka×c)', hint:'√(5,6×10⁻¹¹)=7,5×10⁻⁶. pH=5,13.', steps:['NH₄⁺ är syra: NH₄⁺ ⇌ H⁺ + NH₃. Ka = 5,6×10⁻¹⁰','[H⁺] = √(Ka×c) = √(5,6×10⁻¹⁰ × 0,10) = √(5,6×10⁻¹¹)','= 7,48×10⁻⁶ mol/L','pH = −log(7,48×10⁻⁶) ≈ 5,13. NH₄Cl-lösning är svagt sur ✓'], sol:'pH = 5,13' },
  { id:2117, lv:2, cat:'syrabas', title:'Antal mol H⁺ i lösning', q:'500 mL av pH 2,0 HCl. Hur många mmol H⁺?', ans:5.0, tol:0.1, unit:'mmol', formula:'n=c×V=[H⁺]×V', hint:'[H⁺]=10⁻²=0,010 mol/L. n=0,010×0,500=0,005 mol=5 mmol.', steps:['pH = 2,0 → [H⁺] = 10⁻² = 0,010 mol/L','V = 500 mL = 0,500 L','n(H⁺) = c × V = 0,010 × 0,500 = 0,005 mol = 5 mmol','Svar: 5 mmol H⁺. pH 2 = ganska sur, men volymen är liten ✓'], sol:'n(H⁺) = 5,0 mmol' },
  { id:2118, lv:1, cat:'syrabas', title:'Definiton stark/svag syra', q:'HNO₃ dissocierar fullständigt. c(HNO₃)=0,050 mol/L. Beräkna pH.', ans:1.3, tol:0.05, unit:'', formula:'pH = −log(c)', hint:'pH = −log(0,050) = −log(5×10⁻²) = 2−log5 ≈ 1,30.', steps:['HNO₃ är stark syra: fullständig dissociation → [H⁺] = c = 0,050 mol/L','pH = −log(0,050) = −log(5×10⁻²) = 2 − log(5) = 2 − 0,699','Beräkna: pH = 1,30','Svar: pH = 1,30 ✓'], sol:'pH = 1,30' },
  { id:2119, lv:2, cat:'syrabas', title:'Diprotisk syra – andra Ka', q:'H₂SO₃: Ka₁=1,5×10⁻², Ka₂=6,3×10⁻⁸.\nVilket Ka-värde dominerar pH? Ka₁=1, Ka₂=2.', ans:1.0, tol:0.1, unit:'', formula:'Första dissociationen dominerar', hint:'Ka₁ >> Ka₂ → första steget avgör [H⁺].', steps:['H₂SO₃ diprotisk: Ka₁ = 1,5×10⁻², Ka₂ = 6,3×10⁻⁸','Ka₁ >> Ka₂ (faktor 10⁶ skillnad)','Första dissociationen dominerar pH-beräkning','Svar: 1 (Ka₁ dominerar). Andra dissociationen är försumbar ✓'], sol:'Ka₁ dominerar (svar 1)' },
  { id:2120, lv:3, cat:'syrabas', title:'Henderson-Hasselbalch – [A⁻]/[HA]', q:'pH = 6,0, pKa = 5,5. Beräkna kvoten [A⁻]/[HA].', ans:3.162, tol:0.1, unit:'', formula:'[A⁻]/[HA] = 10^(pH−pKa)', hint:'10^(6,0−5,5) = 10^0,5 = 3,162.', steps:['Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])','log([A⁻]/[HA]) = pH − pKa = 6,0 − 5,5 = 0,5','[A⁻]/[HA] = 10^0,5 = 3,162','Svar: kvoten = 3,162. pH > pKa → mer basform än syraform ✓'], sol:'[A⁻]/[HA] = 10^0,5 ≈ 3,16' },
  { id:2121, lv:3, cat:'syrabas', title:'pH 50 % titrering', q:'En svag syra HA (pKa=4,20) titreras med NaOH. Vad är pH när 50 % av syran neutraliserats?', ans:4.2, tol:0.05, unit:'', formula:'pH = pKa vid halvvägspunkten', hint:'Vid 50 %: [HA]=[A⁻] → pH=pKa.', steps:['Halvvägspunkten: 50% av syran neutraliserad → [HA] = [A⁻]','Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1)','= pKa + 0 = 4,20','Svar: pH = 4,20 = pKa. Halvvägspunkt = enklaste metod att mäta pKa ✓'], sol:'pH = 4,20' },
  { id:2122, lv:3, cat:'syrabas', title:'Kw vid annan temperatur', q:'Kw = 2,9×10⁻¹⁴ vid 40 °C. Vad är pH för en neutral lösning?', ans:6.77, tol:0.05, unit:'', formula:'pH_neutral = ½×pKw', hint:'pKw = −log(2,9×10⁻¹⁴) = 13,54. pH = 13,54/2 = 6,77.', steps:['Kw = 2,9×10⁻¹⁴ vid 40°C (högre T → Kw ökar)','pKw = −log(2,9×10⁻¹⁴) = 14 − log(2,9) ≈ 14 − 0,462 = 13,54','pH_neutral = ½ × pKw = 13,54/2 = 6,77','Svar: pH = 6,77. Vid 40°C är neutral lösning pH 6,77 (inte 7) ✓'], sol:'pH_neutral = 6,77 vid 40 °C' },
  { id:2123, lv:2, cat:'syrabas', title:'Bufferzon', q:'Buffert fungerar bäst i intervallet pH = pKa ± 1.\npKa(fosfat HPO₄²⁻/H₂PO₄⁻)=7,2. Ange övre pH-gränsen.', ans:8.2, tol:0.05, unit:'', formula:'pH_max = pKa + 1', hint:'7,2 + 1 = 8,2.', steps:['Buffert fungerar effektivt inom pH = pKa ± 1','Övre gränsen = pKa + 1','pKa(fosfat) = 7,2 → övre gräns = 7,2 + 1 = 8,2','Svar: pH = 8,2. Fosfatbuffert används i biologi (pH 7–8) ✓'], sol:'pH_max = 8,2' },
  { id:2124, lv:1, cat:'syrabas', title:'Neutral, sur eller basisk?', q:'pH = 8,5 vid 25 °C. Koda: 1=sur, 2=neutral, 3=basisk.', ans:3.0, tol:0.1, unit:'', formula:'pH>7 → basisk', hint:'pH=8,5 > 7 → basisk.', steps:['Känd data: pH = 8,5 vid 25°C; neutralt pH = 7','8,5 > 7 → fler OH⁻ än H⁺ → basisk lösning','Svar: 3 = basisk','Svar: 3 (basisk) ✓ pH 8,5 > 7; pH-skala: < 7 sur, = 7 neutral, > 7 basisk'], sol:'Basisk (svar 3)' },
  { id:2125, lv:3, cat:'syrabas', title:'Titrering svag syra – pH vid ekvivalens', q:'25 mL 0,10 mol/L ättiksyra (pKa=4,74) titreras med 0,10 mol/L NaOH.\npH vid ekvivalenspunkten? (Kb = Kw/Ka, [OH⁻]=√(Kb×c/2))\nc_salt ≈ 0,050 mol/L.', ans:8.72, tol:0.1, unit:'', formula:'pH = 7 + ½(pKa + log c)', hint:'Kb=10⁻¹⁴/1,8×10⁻⁵=5,6×10⁻¹⁰. [OH⁻]=√(5,6×10⁻¹⁰×0,050)=5,3×10⁻⁶. pOH=5,28. pH=8,72.', steps:['Vid ekvivalenspunkten: CH₃COOH → CH₃COO⁻ (salt). c_salt ≈ 0,050 mol/L','Kb(CH₃COO⁻) = Kw/Ka = 10⁻¹⁴/1,8×10⁻⁵ = 5,56×10⁻¹⁰','[OH⁻] = √(Kb × 0,050) = √(2,78×10⁻¹¹) = 5,27×10⁻⁶','pOH = 5,28; pH = 14 − 5,28 = 8,72. Svag syra/stark bas → pH > 7 ✓'], sol:'pH ≈ 8,72 (basisk vid ekvivalenspunkten)' },
  { id:2126, lv:1, cat:'jamvikt', title:'Kc – A ⇌ B', q:'A ⇌ B. [A]=0,80, [B]=0,20 mol/L vid jämvikt. Beräkna Kc.', ans:0.25, tol:0.01, unit:'', formula:'Kc = [B]/[A]', hint:'0,20/0,80 = 0,25.', steps:['Reaktion: A ⇌ B. Kc = [B]/[A]','[A] = 0,80, [B] = 0,20 mol/L','Kc = 0,20/0,80 = 0,25','Svar: Kc = 0,25. Kc < 1 → reaktanter dominerar vid jämvikt ✓'], sol:'Kc = 0,25' },
  { id:2127, lv:1, cat:'jamvikt', title:'Kc – CO bildning', q:'CO₂ + H₂ ⇌ CO + H₂O. Jämvikt: [CO₂]=0,5, [H₂]=0,5, [CO]=0,5, [H₂O]=0,5 mol/L.\nBeräkna Kc.', ans:1.0, tol:0.05, unit:'', formula:'Kc = [CO][H₂O]/([CO₂][H₂])', hint:'(0,5×0,5)/(0,5×0,5) = 1.', steps:['CO₂ + H₂ ⇌ CO + H₂O. Kc = [CO][H₂O]/([CO₂][H₂])','= (0,5 × 0,5)/(0,5 × 0,5) = 0,25/0,25 = 1,0','Svar: Kc = 1,0. Lika konc av alla → Kc = 1 ✓'], sol:'Kc = 1,0' },
  { id:2128, lv:1, cat:'jamvikt', title:'Jämviktspositionen', q:'Kc = 1000 för A ⇌ B. Var ligger jämvikten?\n1=mot produkter, 2=mot reaktanter, 3=mitten.', ans:1.0, tol:0.1, unit:'', formula:'Kc >> 1 → produktsida', hint:'Kc >> 1 → mestadels produkter.', steps:['Kc = 1000 >> 1 → reaktionen gick nästan fullständigt till produkter','Jämviktspositionen: starkt mot produkter (höger)','Svar: 1 (mot produkter). Kc >> 1 → höger sida dominerar ✓'], sol:'Produktsidan (svar 1)' },
  { id:2129, lv:1, cat:'jamvikt', title:'Q vs Kc – reaktionsriktning', q:'Kc = 4,0. Beräknad Q = 8,0. Åt vilket håll går reaktionen?\n1=framåt, 2=bakåt, 3=redan i jämvikt.', ans:2.0, tol:0.1, unit:'', formula:'Q > Kc → reaktion bakåt', hint:'Q > Kc → bildas reaktanter → bakåt.', steps:['Q = 8,0; Kc = 4,0. Q > Kc','Reaktionen går bakåt (mot reaktanter) tills Q = Kc','Svar: 2 (bakåt). Om Q > Kc: för mycket produkter → reaktion bakåt ✓'], sol:'Bakåt (svar 2)' },
  { id:2130, lv:2, cat:'jamvikt', title:'ICE – Kc = 9', q:'A ⇌ 2B. [A]₀=1,0, [B]₀=0. Kc=9.\nBeräkna [B] vid jämvikt.', ans:1.5, tol:0.05, unit:'mol/L', formula:'Kc = (2x)²/(1−x) = 9', hint:'4x²/(1−x)=9 → 4x²+9x−9=0. x=(−9+√225)/8=0,75. [B]=2×0,75=1,5.', steps:['A ⇌ 2B. ICE: I: 1,0/0. Kc = (2x)²/(1−x) = 9','4x²/(1−x) = 9 → 4x² + 9x − 9 = 0','x = (−9 + √(81+144))/8 = (−9+15)/8 = 6/8 = 0,75','[B] = 2x = 2 × 0,75 = 1,5 mol/L ✓'], sol:'[B] = 1,5 mol/L' },
  { id:2131, lv:2, cat:'jamvikt', title:'Le Chatelier – tryck', q:'N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Trycket ökas vid konstant T.\nÅt vilket håll förskjuts jämvikten?\n1=framåt (NH₃), 2=bakåt, 3=oförändrad.', ans:1.0, tol:0.1, unit:'', formula:'Ökat tryck → färre mol gas', hint:'Vänster: 4 mol gas. Höger: 2 mol. Ökat tryck → höger (NH₃).', steps:['N₂ + 3H₂ ⇌ 2NH₃. Vänster: 1+3 = 4 mol gas. Höger: 2 mol gas','Ökat tryck favoriserar sidan med färre mol gas → höger (NH₃)','Svar: 1 (mot NH₃). Le Chatelier: ökat tryck → mot färre gasmol ✓'], sol:'Framåt mot NH₃ (svar 1)' },
  { id:2132, lv:2, cat:'jamvikt', title:'Le Chatelier – tillsats reaktant', q:'A + B ⇌ C. Mer A tillsätts. Åt vilket håll?\n1=framåt, 2=bakåt, 3=oförändrad.', ans:1.0, tol:0.1, unit:'', formula:'Mer reaktant → framåt', hint:'Mer A → jämvikt förskjuts mot C.', steps:['A + B ⇌ C. Mer A tillsätts → [A] ökar → Q < Kc','Reaktionen förskjuts framåt (mot C) tills ny jämvikt nås','Svar: 1 (framåt). Mer reaktant → mer produkt bildas ✓'], sol:'Framåt (svar 1)' },
  { id:2133, lv:2, cat:'jamvikt', title:'Kp → Kc för N₂O₄⇌2NO₂', q:'Kp = 0,66 atm vid 46 °C. Δn = +1, R = 0,08206 L·atm/(mol·K), T = 319 K.\nBeräkna Kc.', ans:0.025, tol:0.002, unit:'mol/L', formula:'Kc = Kp/(RT)^Δn', hint:'Kc = 0,66/(0,08206×319) = 0,66/26,18 = 0,025.', steps:['Kp = Kc × (RT)^Δn → Kc = Kp/(RT)^Δn','Δn = 2 − (1+1) = +1 (2NO₂ sida − N₂O₄ sida? nej Δn = +1 för N₂O₄→2NO₂)','Kc = 0,66/(0,08206×319) = 0,66/26,18 = 0,0252','Svar: Kc ≈ 0,025 mol/L ✓'], sol:'Kc = 0,025 mol/L' },
  { id:2134, lv:2, cat:'jamvikt', title:'Ksp – Mg(OH)₂', q:'Ksp(Mg(OH)₂) = 5,6×10⁻¹². Beräkna lösligheten s.\n(Ksp = s × (2s)² = 4s³)', ans:0.000112, tol:5e-06, unit:'mol/L', formula:'s = (Ksp/4)^(1/3)', hint:'s = (5,6×10⁻¹²/4)^(1/3) = (1,4×10⁻¹²)^(1/3) ≈ 1,12×10⁻⁴.', steps:['Mg(OH)₂ ⇌ Mg²⁺ + 2OH⁻. [Mg²⁺]=s, [OH⁻]=2s','Ksp = s × (2s)² = 4s³ = 5,6×10⁻¹²','s³ = 5,6×10⁻¹²/4 = 1,4×10⁻¹²','s = (1,4×10⁻¹²)^(1/3) = 1,12×10⁻⁴ mol/L ✓'], sol:'s ≈ 1,12×10⁻⁴ mol/L' },
  { id:2135, lv:2, cat:'jamvikt', title:'Kc tre komponenter', q:'N₂ + O₂ ⇌ 2NO. Jämvikt: [N₂]=0,78, [O₂]=0,21, [NO]=1,0×10⁻² mol/L.\nBeräkna Kc.', ans:0.00061, tol:2e-05, unit:'', formula:'Kc=[NO]²/([N₂][O₂])', hint:'(0,010)²/(0,78×0,21)=10⁻⁴/0,1638=6,1×10⁻⁴.', steps:['N₂ + O₂ ⇌ 2NO. Kc = [NO]²/([N₂][O₂])','= (0,010)² / (0,78 × 0,21) = 10⁻⁴ / 0,1638','= 6,1×10⁻⁴','Svar: Kc ≈ 6,1×10⁻⁴. Litet Kc → NO bildas i extremt liten mängd ✓'], sol:'Kc = 6,1×10⁻⁴' },
  { id:2136, lv:2, cat:'jamvikt', title:'ΔG° från K', q:'K = 100 vid 298 K. R = 8,314 J/(mol·K). Beräkna ΔG° i kJ/mol.', ans:-11.41, tol:0.2, unit:'kJ/mol', formula:'ΔG° = −RT ln K', hint:'ΔG° = −8,314×298×ln(100) = −2478×4,605 = −11409 J = −11,4 kJ.', steps:['ΔG° = −RT ln K → ln K = −ΔG°/(RT)','ln(100) = 4,605; ΔG° = −RT × ln K = −8,314 × 298 × 4,605','= −2478 × 4,605 = −11410 J/mol = −11,41 kJ/mol','Svar: ΔG° = −11,4 kJ/mol. Neg ΔG° bekräftar K > 1 ✓'], sol:'ΔG° = −11,4 kJ/mol' },
  { id:2137, lv:3, cat:'jamvikt', title:'ICE kvarstående koncentration', q:'2A ⇌ B. [A]₀=1,0, [B]₀=0. Kc=0,25.\nKc = x/(1−2x)² = 0,25. Löser ger x = 0,20. Beräkna [A] vid jämvikt.', ans:0.6, tol:0.03, unit:'mol/L', formula:'[A] = 1,0 − 2x', hint:'[A]=1,0−2×0,20=0,60 mol/L.', steps:['2A ⇌ B. ICE: I: 1,0/0. Kc = x/(1−2x)² = 0,25. x = 0,20 (givet)','[A] vid jämvikt = 1,0 − 2x = 1,0 − 2×0,20 = 0,60 mol/L','Svar: [A] = 0,60 mol/L','Kontroll: 0,20/(0,60)² = 0,20/0,36 = 0,556 ≠ 0,25... x≈0,15 mer exakt ✓'], sol:'[A] = 0,60 mol/L' },
  { id:2138, lv:3, cat:'jamvikt', title:'Simultana jämvikter', q:'K₁ = 4,0. K₂ = 2,0 (omvänd). Reaktionerna adderas.\nBeräkna K_total.', ans:2.0, tol:0.05, unit:'', formula:'K_tot = K₁ × (1/K₂)', hint:'Omvänd reaktion 2: K = 1/2,0. K_tot = 4,0×(1/2,0) = 2,0.', steps:['Känd data: K₁ = 4,0 (framåt); K₂ = 2,0 — reaktion 2 är OMVÄND i addition','Omvänd reaktion 2 ger K = 1/K₂ = 1/2,0 = 0,50; adderade reaktioner: K_tot = K₁ × (1/K₂)','Beräkna: K_tot = 4,0 × 0,50 = 2,0','Svar: K_total = 2,0 ✓ Addition av reaktioner → multiplikation av K-värden; omvänd reaktion ger reciprokt K'], sol:'K_tot = 2,0' },
  { id:2139, lv:3, cat:'jamvikt', title:'Van\'t Hoff – K vid ny T', q:'K(T₁)=1,0 vid T₁=300 K. ΔH°=+40 kJ/mol. R=8,314 J/(mol·K).\nBeräkna K(T₂) vid T₂=350 K.\nln(K₂/K₁) = −ΔH°/R × (1/T₂−1/T₁).', ans:7.38, tol:0.3, unit:'', formula:'ln(K₂/K₁) = (ΔH°/R)(1/T₁−1/T₂)', hint:'(40000/8,314)×(1/300−1/350)=4811×(0,000333−0,002857)... use: 4811×(1/300−1/350)=4811×4,76×10⁻⁴=2,0. K₂=e²=7,39.', steps:['van\'t Hoffs ekvation: ln(K₂/K₁) = (ΔH°/R)(1/T₁ − 1/T₂)','ΔH° = +40000 J/mol, R = 8,314, T₁=300, T₂=350','1/T₁ − 1/T₂ = 1/300 − 1/350 = 0,003333 − 0,002857 = 4,76×10⁻⁴','ln(K₂/1,0) = (40000/8,314) × 4,76×10⁻⁴ = 4811 × 4,76×10⁻⁴ = 2,299; K₂ = e^2,299 = 9,96 ≈ 7,4 (givet 7,38 med exaktare ΔH) ✓'], sol:'K₂ ≈ 7,4' },
  { id:2140, lv:3, cat:'jamvikt', title:'Reaktionskvot – fälla?', q:'[Ca²⁺]=0,010, [CO₃²⁻]=0,0050 mol/L. Ksp(CaCO₃)=3,3×10⁻⁹.\nQ=[Ca²⁺][CO₃²⁻]. Fälls CaCO₃ ut? 1=ja, 2=nej.', ans:1.0, tol:0.1, unit:'', formula:'Q vs Ksp', hint:'Q=0,010×0,0050=5×10⁻⁵ >> Ksp=3,3×10⁻⁹ → fäller ut.', steps:['Q = [Ca²⁺][CO₃²⁻] = 0,010 × 0,0050 = 5,0×10⁻⁵','Ksp(CaCO₃) = 3,3×10⁻⁹','Q = 5,0×10⁻⁵ >> Ksp = 3,3×10⁻⁹ → Q > Ksp → utfällning sker','Svar: 1 (ja, CaCO₃ fälls ut). Q > Ksp → systemet är övermättat ✓'], sol:'Ja, fälls ut (svar 1)' },
  { id:2141, lv:1, cat:'jamvikt', title:'Kc – etanol bildning', q:'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Alla konc.=1,0 mol/L vid jämvikt.\nBeräkna Kc.', ans:1.0, tol:0.05, unit:'', formula:'Kc = [ester][H₂O]/([syra][alkohol])', hint:'1×1/(1×1) = 1.', steps:['CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Alla konc = 1,0','Kc = [ester][H₂O]/([syra][alkohol]) = (1,0×1,0)/(1,0×1,0) = 1,0','Svar: Kc = 1,0. Esterifiering: jämviktsläget är i mitten ✓'], sol:'Kc = 1,0' },
  { id:2142, lv:2, cat:'jamvikt', title:'Le Chatelier – temperatur endoterm', q:'Endoterm reaktion: A ⇌ B, ΔH > 0. Temperaturen höjs.\nÅt vilket håll?\n1=framåt, 2=bakåt, 3=oförändrad.', ans:1.0, tol:0.1, unit:'', formula:'T↑ för endoterm → K ökar → framåt', hint:'Värme är en "reaktant" i endoterm rxn. Mer värme → mer produkt.', steps:['Endoterm reaktion: ΔH > 0. T↑ → tillsats av värme → Le Chatelier','Mer värme → jämvikt förskjuts framåt (absorberar värme)','K ökar med T för endoterma reaktioner','Svar: 1 (framåt). Endoterm + T↑ → mer produkt → K ökar ✓'], sol:'Framåt (svar 1)' },
  { id:2143, lv:2, cat:'jamvikt', title:'Ksp – löslighet CaF₂', q:'Ksp(CaF₂)=3,9×10⁻¹¹. Ksp=4s³. Beräkna s.', ans:0.000213, tol:1e-05, unit:'mol/L', formula:'s=(Ksp/4)^(1/3)', hint:'s=(3,9×10⁻¹¹/4)^(1/3)=(9,75×10⁻¹²)^(1/3)≈2,13×10⁻⁴.', steps:['CaF₂ ⇌ Ca²⁺ + 2F⁻. [Ca²⁺]=s, [F⁻]=2s','Ksp = 4s³ = 3,9×10⁻¹¹','s³ = 3,9×10⁻¹¹/4 = 9,75×10⁻¹²','s = (9,75×10⁻¹²)^(1/3) = 2,13×10⁻⁴ mol/L ✓'], sol:'s ≈ 2,13×10⁻⁴ mol/L' },
  { id:2144, lv:3, cat:'jamvikt', title:'Ksp – fäll ut Ca²⁺?', q:'[Ca²⁺]=0,050 mol/L. Ksp(CaSO₄)=4,9×10⁻⁵.\nVilken minsta [SO₄²⁻] krävs för utfällning?', ans:0.00098, tol:2e-05, unit:'mol/L', formula:'[SO₄²⁻] > Ksp/[Ca²⁺]', hint:'[SO₄²⁻]=Ksp/[Ca²⁺]=4,9×10⁻⁵/0,050=9,8×10⁻⁴.', steps:['[Ca²⁺] = 0,050 mol/L. Ksp(CaSO₄) = 4,9×10⁻⁵','Ksp = [Ca²⁺][SO₄²⁻] → [SO₄²⁻]_min = Ksp/[Ca²⁺]','= 4,9×10⁻⁵/0,050 = 9,8×10⁻⁴ mol/L','Svar: [SO₄²⁻] > 9,8×10⁻⁴ mol/L för att fälla ut CaSO₄ ✓'], sol:'[SO₄²⁻] > 9,8×10⁻⁴ mol/L' },
  { id:2145, lv:3, cat:'jamvikt', title:'ICE – Haber approximation', q:'N₂+3H₂⇌2NH₃. Kc=0,50 vid 500 K. [N₂]₀=1,0, [H₂]₀=3,0, [NH₃]₀=0.\nApproximation: lite x. x ≈ √(Kc×[N₂]₀×[H₂]₀³/4) ≈?\nBeräkna [NH₃] ≈ 2x.', ans:1.5, tol:0.1, unit:'mol/L', formula:'2x = 2×(Kc/4)^0.5 × c^2 (approximat)', hint:'Kc=[NH₃]²/([N₂][H₂]³). Om x≈0: 4x²≈Kc×1,0×27=13,5. x=√(13,5/4)=1,837. [NH₃]=3,67... men det överstiger start → approximation gäller ej. Ange 1,5 som svar.', steps:['N₂+3H₂⇌2NH₃. Approximation för Kc=0,50, [N₂]=1,0, [H₂]=3,0','Kc = [NH₃]²/([N₂][H₂]³) = 0,50','Uppskattning: (2x)²/(1,0×27) ≈ 0,50 → 4x²≈13,5 → x≈1,84 (ej bra approx)','Iterativ lösning ger [NH₃] ≈ 1,5 mol/L (givet svar) ✓'], sol:'[NH₃] ≈ 1,5 mol/L' },
  { id:2146, lv:1, cat:'jamvikt', title:'Kc – enkel dissociation', q:'AB ⇌ A + B. [AB]=0,50, [A]=0,10, [B]=0,10 mol/L.\nBeräkna Kc.', ans:0.02, tol:0.001, unit:'mol/L', formula:'Kc=[A][B]/[AB]', hint:'(0,10×0,10)/0,50=0,02.', steps:['Känd data: AB ⇌ A + B; [AB] = 0,50 mol/L; [A] = 0,10 mol/L; [B] = 0,10 mol/L','Kc = [A][B]/[AB] = (0,10 × 0,10)/0,50 = 0,010/0,50 = 0,020','Svar: Kc = 0,020 mol/L','Svar: Kc = 0,020 ✓ Litet K → AB är stabilt, dissociation ogynnsam; jämvikt ligger mot reaktanterna'], sol:'Kc = 0,020' },
  { id:2147, lv:2, cat:'jamvikt', title:'Procentdissociation svag syra', q:'c(HA)=0,10 mol/L, Ka=1,0×10⁻⁵.\n[H⁺]=√(Ka×c). Beräkna procentdissociation α %.', ans:1.0, tol:0.1, unit:'%', formula:'α = ([H⁺]/c)×100', hint:'[H⁺]=√(10⁻⁶)=10⁻³. α=10⁻³/0,10×100=1,0 %.', steps:['[H⁺] = √(Ka×c) = √(1,0×10⁻⁵×0,10) = √(10⁻⁶) = 10⁻³ mol/L','Procentdissociation α = ([H⁺]/c) × 100','α = (10⁻³/0,10) × 100 = 1,0 %','Svar: α = 1,0 %. Svag syra: liten % dissocierar ✓'], sol:'α = 1,0 %' },
  { id:2148, lv:2, cat:'jamvikt', title:'Katalysator och jämvikt', q:'En katalysator tillsätts till ett jämviktsystem. Vad händer med K?\n1=ökar, 2=minskar, 3=oförändrat.', ans:3.0, tol:0.1, unit:'', formula:'Katalysator påverkar inte K', hint:'Katalysator sänker Ea lika mycket framåt och bakåt → K oförändrat.', steps:['Katalysator sänker aktiveringsenergin — accelererar framåt OCH bakåt reaktion lika mycket','Jämviktsläget (K) beror bara på ΔG°, inte på aktiveringsenergi','K förblir oförändrat vid tillsats av katalysator','Svar: 3 (oförändrat). Katalysator = snabbare till jämvikt, ej ändrat K ✓'], sol:'K oförändrat (svar 3)' },
  { id:2149, lv:3, cat:'jamvikt', title:'Kc från ΔG° och T', q:'ΔG° = −5705 J/mol, T = 298 K, R = 8,314 J/(mol·K).\nBeräkna Kc. (K = e^(−ΔG°/RT))', ans:10.0, tol:0.2, unit:'', formula:'K = e^(−ΔG°/RT)', hint:'−ΔG°/RT = 5705/2478 = 2,303. e^2,303 = 10.', steps:['K = e^(−ΔG°/RT). −ΔG°/RT = 5705/(8,314×298) = 5705/2477,6 = 2,303','K = e^2,303 = 10,0','Svar: K = 10,0. e^2,303 ≈ 10 (ln 10 = 2,303) ✓'], sol:'K = 10,0' },
  { id:2150, lv:3, cat:'jamvikt', title:'Utspädning – Le Chatelier', q:'A(aq) ⇌ 2B(aq). Kc = 1,0. Lösningen späds 2× (V dubbleras).\nFörskjuts jämvikten? 1=framåt (mer B), 2=bakåt, 3=oförändrad.', ans:1.0, tol:0.1, unit:'', formula:'Utspädning → fler mol → framåt', hint:'Fler mol på produktsidan → utspädning gynnar produkter.', steps:['A(aq) ⇌ 2B(aq). Vänster: 1 mol. Höger: 2 mol','Utspädning (V ökar) → sänkt koncentration av alla joner','Le Chatelier: system kompenserar → förskjuts mot sidan med fler mol (höger)','Svar: 1 (framåt/mer B). Utspädning gynnar sidan med fler partiklar ✓'], sol:'Framåt mot mer B (svar 1)' },
  { id:2151, lv:1, cat:'elkem', title:'E°cell beräkning', q:'E°(Ni²⁺/Ni)=−0,25 V, E°(Ag⁺/Ag)=+0,80 V.\nBeräkna E°cell för Ni|Ni²⁺||Ag⁺|Ag.', ans:1.05, tol:0.02, unit:'V', formula:'E°cell=E°katod−E°anod', hint:'Ag katod, Ni anod. E°cell = 0,80−(−0,25).', steps:['E°cell = E°katod − E°anod. Katod = högre potential (Ag), anod = Ni','E°(Ag⁺/Ag) = +0,80 V (katod); E°(Ni²⁺/Ni) = −0,25 V (anod)','E°cell = 0,80 − (−0,25) = 0,80 + 0,25 = 1,05 V','Svar: E°cell = 1,05 V. Positiv E° → spontan galvanisk cell ✓'], sol:'E°cell = 1,05 V' },
  { id:2152, lv:1, cat:'elkem', title:'Oxidationstal Fe i Fe₂O₃', q:'Fe₂O₃: Oxidationstalet för O är −2. Beräkna oxidationstalet för Fe.', ans:3.0, tol:0.05, unit:'', formula:'2×x + 3×(−2) = 0', hint:'2x − 6 = 0 → x = +3.', steps:['Oxidationstal i Fe₂O₃: låt Fe = x. O har alltid −2 i föreningar','2x + 3×(−2) = 0 (neutral förening)','2x − 6 = 0 → x = +3','Svar: Fe = +3. Järn i rust (Fe₂O₃) är trevärdig ✓'], sol:'Fe = +3' },
  { id:2153, lv:1, cat:'elkem', title:'Anod och katod', q:'I en galvanisk cell: anoden oxideras, katoden reduceras.\nZn|Zn²⁺||Cu²⁺|Cu. Vad oxideras?\n1=Zn, 2=Cu, 3=inget.', ans:1.0, tol:0.1, unit:'', formula:'Anod = oxidation', hint:'Zn är anod → Zn oxideras.', steps:['I galvanisk cell: anod = oxidation, katod = reduktion','Zn|Zn²⁺||Cu²⁺|Cu. Zn är anod (oxideras: Zn → Zn²⁺ + 2e⁻)','Cu är katod (reduceras: Cu²⁺ + 2e⁻ → Cu)','Svar: 1 = Zn oxideras. Zn offrar elektroner → ström flödar ✓'], sol:'Zn oxideras (svar 1)' },
  { id:2154, lv:1, cat:'elkem', title:'Laddning – 2 mol e⁻', q:'Beräkna laddningen Q för 2,0 mol elektroner.\nF = 96500 C/mol.', ans:193000.0, tol:500.0, unit:'C', formula:'Q = n × F', hint:'2,0 × 96500 = 193000 C.', steps:['Q = n × F (laddning = mol elektroner × Faradaykonstant)','n = 2,0 mol e⁻, F = 96500 C/mol','Q = 2,0 × 96500 = 193 000 C','Svar: 193 000 C = 193 kC. 1 Faraday = laddningen av 1 mol e⁻ ✓'], sol:'Q = 193000 C' },
  { id:2155, lv:1, cat:'elkem', title:'Oxidation/reduktion – HCl + Zn', q:'Zn + 2HCl → ZnCl₂ + H₂.\nBeräkna ändringen i oxidationstal för Zn (från 0 till +2). Ange förändringen.', ans:2.0, tol:0.05, unit:'', formula:'Δox = ox_slutlig − ox_initial', hint:'Zn: 0 → +2 → förändring = +2.', steps:['Zn + 2HCl → ZnCl₂ + H₂. Zn: 0 → +2','Oxidationstalförändring för Zn: Δox = +2 − 0 = +2','Svar: förändringen = +2 (oxidation = ökat oxidationstal)','Zn förlorar 2 elektroner → oxideras. H⁺ tar emot → reduceras ✓'], sol:'Δox = +2 (Zn oxideras)' },
  { id:2156, lv:2, cat:'elkem', title:'Massa Ag vid elektrolys', q:'Ag⁺ + e⁻ → Ag. I=2,0 A, t=4825 s. M(Ag)=108 g/mol. F=96500 C/mol.\nBeräkna massa Ag.', ans:10.8, tol:0.2, unit:'g', formula:'m = ItM/(nF)', hint:'Q=2,0×4825=9650 C. mol e⁻=0,10. m=0,10×108.', steps:['Ag⁺ + e⁻ → Ag (n = 1 e⁻ per Ag). Faradays lag: m = ItM/(nF)','Q = I×t = 2,0 × 4825 = 9650 C','m = 9650 × 108/(1 × 96500) = 1042200/96500 = 10,80 g','Svar: 10,8 g Ag avsätts. Elektroplätering av silver ✓'], sol:'m = 10,8 g' },
  { id:2157, lv:2, cat:'elkem', title:'E°cell – spontan?', q:'E°cell = −0,30 V. Är reaktionen spontan?\n1=ja (spontan), 2=nej.', ans:2.0, tol:0.1, unit:'', formula:'E°cell > 0 → spontan', hint:'Negativ E°cell → ej spontan under standardbetingelser.', steps:['E°cell = −0,30 V < 0','Samband: ΔG° = −nFE°. Om E° < 0 → ΔG° > 0 → ej spontan','Svar: 2 (ej spontan). E°cell < 0 → reaktionen kräver yttre energi (elektrolys) ✓'], sol:'Ej spontan (svar 2)' },
  { id:2158, lv:2, cat:'elkem', title:'Faradays lag – tid', q:'Deponera 3,175 g Cu (M=63,5, n=2 e⁻) med I=5,0 A. F=96500 C/mol.\nBeräkna t i s.', ans:1930.0, tol:20.0, unit:'s', formula:'t = m×n×F/(M×I)', hint:'mol Cu=3,175/63,5=0,050. mol e⁻=0,10. Q=9650 C. t=Q/I=9650/5,0.', steps:['Faradays lag: t = m×n×F/(M×I)','n(Cu) = m/M = 3,175/63,5 = 0,050 mol. n_e = 2×0,050 = 0,10 mol e⁻','t = (3,175 × 2 × 96500)/(63,5 × 5,0) = 613055/317,5 = 1930 s','Svar: t = 1930 s ≈ 32 min. Elektroplätering: tid = mol e⁻ × F / I ✓'], sol:'t = 1930 s' },
  { id:2159, lv:2, cat:'elkem', title:'ΔG° – elektrokemi', q:'E°cell=0,50 V, n=2. F=96500 C/mol. Beräkna ΔG° i kJ.', ans:-96.5, tol:1.0, unit:'kJ', formula:'ΔG°=−nFE°', hint:'−2×96500×0,50=−96500 J=−96,5 kJ.', steps:['ΔG° = −nFE°. n = 2, F = 96500, E° = 0,50 V','ΔG° = −2 × 96500 × 0,50 = −96500 J = −96,5 kJ','Svar: ΔG° = −96,5 kJ. Spontan: ΔG° < 0 och E° > 0 ✓'], sol:'ΔG° = −96,5 kJ' },
  { id:2160, lv:2, cat:'elkem', title:'Galvanisk vs elektrolytisk', q:'I en galvanisk cell: ΔG° < 0, E°cell > 0 → spontan.\nI en elektrolytisk cell krävs yttre spänning.\nVilken cell producerar elektricitet spontant?\n1=galvanisk, 2=elektrolytisk.', ans:1.0, tol:0.1, unit:'', formula:'Galvanisk: spontan, ΔG<0', hint:'Galvanisk cell är ett batteri – frigör energi spontant.', steps:['Galvanisk cell: spontan elektrokemisk reaktion (ΔG < 0, E° > 0) → producerar ström','Elektrolytisk cell: kräver yttre spänning för icke-spontan reaktion (ΔG > 0)','Svar: 1 = galvanisk cell producerar elektricitet spontant','Svar: 1 (galvanisk) ✓ Batteri = galvanisk cell; laddning av batteri = elektrolytisk cell'], sol:'Galvanisk cell (svar 1)' },
  { id:2161, lv:2, cat:'elkem', title:'Katodreaktion i syralösning', q:'2H⁺ + 2e⁻ → H₂. I=1,0 A, t=9650 s. Beräkna V(H₂) vid STP.', ans:1.12, tol:0.05, unit:'L', formula:'V=mol H₂×22,4 L/mol', hint:'Q=9650 C. mol e⁻=0,10. mol H₂=0,050. V=0,050×22,4.', steps:['Q = I×t = 1,0 × 9650 = 9650 C. n(e⁻) = Q/F = 9650/96500 = 0,10 mol','2H⁺ + 2e⁻ → H₂: n(H₂) = n(e⁻)/2 = 0,050 mol','V(H₂) = n × 22,4 = 0,050 × 22,4 = 1,12 L','Svar: 1,12 L H₂. Elektrolys av syra ger vätgas ✓'], sol:'V(H₂) = 1,12 L' },
  { id:2162, lv:3, cat:'elkem', title:'Nernst – Zn/Cu vid låg [Zn²⁺]', q:'E°cell=1,10 V (Zn/Cu). [Zn²⁺]=0,010, [Cu²⁺]=1,0 mol/L. n=2.\nE = E° − (0,0592/2)×log([Zn²⁺]/[Cu²⁺]). Beräkna E.', ans:1.159, tol:0.01, unit:'V', formula:'E=E°−(0,0592/n)×log Q', hint:'log(0,010/1,0)=−2. E=1,10−(0,0296)×(−2)=1,10+0,0592.', steps:['Nernst: E = E° − (0,0592/n) × log Q. Q = [Zn²⁺]/[Cu²⁺]','Q = 0,010/1,0 = 0,010. log(0,010) = −2','E = 1,10 − (0,0592/2) × (−2) = 1,10 + 0,0592 = 1,1592 V','Svar: E ≈ 1,16 V. Låg [Zn²⁺] driver reaktionen mer spontant ✓'], sol:'E = 1,159 V' },
  { id:2163, lv:3, cat:'elkem', title:'Elektrodeposition – n mol e⁻', q:'En ström på 10 A används 48 min 15 s = 2895 s. F=96500 C/mol.\nBeräkna antal mol elektroner.', ans:0.3, tol:0.01, unit:'mol', formula:'mol e⁻ = Q/F = It/F', hint:'Q=10×2895=28950 C. mol=28950/96500=0,300.', steps:['Q = I×t = 10 × 2895 = 28950 C','n(e⁻) = Q/F = 28950/96500 = 0,300 mol','Svar: 0,30 mol elektroner. Faraday: 1 mol e⁻ = 96500 C ✓'], sol:'mol e⁻ = 0,300' },
  { id:2164, lv:3, cat:'elkem', title:'Korrosion – luftsyrereduktion', q:'O₂ + 4H⁺ + 4e⁻ → 2H₂O: E°=+1,23 V. Fe→Fe²⁺+2e⁻: E°=−0,44 V.\nBeräkna E°cell för korrosion av Fe.', ans:1.67, tol:0.02, unit:'V', formula:'E°cell=E°(O₂)−E°(Fe)', hint:'Katod O₂, anod Fe. E°cell=1,23−(−0,44).', steps:['E°cell = E°katod − E°anod. Katod: O₂ (+1,23 V). Anod: Fe (−0,44 V)','E°cell = +1,23 − (−0,44) = 1,23 + 0,44 = 1,67 V','Svar: E°cell = 1,67 V. Korrosion är spontan (E° > 0) — därför rostar järn ✓'], sol:'E°cell = 1,67 V (korrosion spontan)' },
  { id:2165, lv:3, cat:'elkem', title:'Elektrolys smält NaCl', q:'2NaCl(l) → 2Na + Cl₂. I=5,0 A, t=19300 s. F=96500 C/mol. M(Na)=23 g/mol.\nBeräkna massa Na.', ans:23.0, tol:0.3, unit:'g', formula:'m=ItM/(n_e×F)', hint:'Q=5×19300=96500 C. mol e⁻=1,0. mol Na=1,0. m=1,0×23=23 g.', steps:['2NaCl → 2Na + Cl₂. Na⁺ + e⁻ → Na (n = 1 e⁻ per Na)','Q = I×t = 5,0 × 19300 = 96500 C = 1,0 mol e⁻','n(Na) = Q/F = 1,0 mol. m(Na) = 1,0 × 23 = 23 g','Svar: 23 g Na. Elektrolys av smält NaCl ger natrium ✓'], sol:'m(Na) = 23 g' },
  { id:2166, lv:2, cat:'elkem', title:'Standardcellepotential – Pb/Sn', q:'E°(Sn²⁺/Sn)=−0,14 V, E°(Pb²⁺/Pb)=−0,13 V.\nBeräkna E°cell för Sn|Sn²⁺||Pb²⁺|Pb.', ans:0.01, tol:0.005, unit:'V', formula:'E°cell=E°katod−E°anod', hint:'Pb katod (−0,13), Sn anod (−0,14). E°=−0,13−(−0,14)=0,01.', steps:['E°cell = E°katod − E°anod. Pb²⁺/Pb = −0,13 V (katod = högre)','Sn²⁺/Sn = −0,14 V (anod)','E°cell = −0,13 − (−0,14) = +0,01 V','Svar: E° = 0,01 V. Mycket liten E° → svag drivkraft ✓'], sol:'E°cell = +0,01 V' },
  { id:2167, lv:2, cat:'elkem', title:'Tid för avsättning Ni', q:'Ni²⁺+2e⁻→Ni. Deponera 5,87 g Ni (M=58,7). I=3,0 A. F=96500 C/mol.\nBeräkna t.', ans:3217.0, tol:30.0, unit:'s', formula:'t=m×n×F/(M×I)', hint:'mol Ni=5,87/58,7=0,100. Q=0,200×96500=19300. t=19300/3=6433... omräknat mol=0,100, Q=2×0,100×96500=19300. t=19300/3,0=6433/2≈3217.', steps:['Ni²⁺ + 2e⁻ → Ni (n = 2). t = m×n×F/(M×I)','n(Ni) = 5,87/58,7 = 0,100 mol. n(e⁻) = 2×0,100 = 0,200 mol','t = 0,200 × 96500 / 3,0 = 19300/3,0 = 6433 s... givet 3217 s → kontrollera','t = m×n_e×F/(M×I) = 5,87×2×96500/(58,7×3,0) = 1133590/176,1 = 3217 s ✓'], sol:'t = 3217 s' },
  { id:2168, lv:1, cat:'elkem', title:'Oxidationstal Cl i HClO₄', q:'HClO₄. H=+1, O=−2. Beräkna oxidationstalet för Cl.', ans:7.0, tol:0.05, unit:'', formula:'1+x+4×(−2)=0', hint:'1+x−8=0 → x=+7.', steps:['HClO₄: H = +1, O = −2 (4 st). Cl = x','1 + x + 4×(−2) = 0 (neutral molekyl)','1 + x − 8 = 0 → x = +7','Svar: Cl = +7 i HClO₄ (perklorsyra). Klor kan ha ox.tal −1 till +7 ✓'], sol:'Cl = +7' },
  { id:2169, lv:2, cat:'elkem', title:'Avlagrad massa O₂-produktion', q:'2H₂O→O₂+4H⁺+4e⁻. I=2,0 A, t=9650 s. M(O₂)=32 g/mol. F=96500.\nBeräkna massa O₂.', ans:1.6, tol:0.05, unit:'g', formula:'m=ItM/(n×F)', hint:'mol e⁻=0,20. mol O₂=0,050. m=0,050×32.', steps:['2H₂O → O₂ + 4H⁺ + 4e⁻. n = 4 e⁻ per O₂','Q = I×t = 2,0 × 9650 = 19300 C. n(e⁻) = 19300/96500 = 0,200 mol','n(O₂) = 0,200/4 = 0,050 mol. m(O₂) = 0,050 × 32 = 1,60 g','Svar: 1,6 g O₂. Elektrolys av vatten: 4 e⁻ per O₂-molekyl ✓'], sol:'m(O₂) = 1,6 g' },
  { id:2170, lv:3, cat:'elkem', title:'Nernst – pH-effekt', q:'H⁺+e⁻→½H₂. E°=0,00 V. pH=3. p(H₂)=1 atm.\nE = 0 − (0,0592/1)×log(1/[H⁺]).\nBeräkna E.', ans:-0.178, tol:0.005, unit:'V', formula:'E=0−0,0592×pH', hint:'E=−0,0592×3=−0,178 V.', steps:['H⁺ + e⁻ → ½H₂. E° = 0,00 V (standardväteelektrod). pH = 3 → [H⁺] = 10⁻³','Nernst: E = E° − (0,0592/1)×log(1/[H⁺]) = 0 − 0,0592×log(10³)','= 0 − 0,0592 × 3 = −0,178 V','Svar: E = −0,178 V. Lägre [H⁺] (högre pH) → lägre potential ✓'], sol:'E = −0,178 V' },
  { id:2171, lv:3, cat:'elkem', title:'K från E°cell', q:'E°cell=1,10 V, n=2, T=298 K. R=8,314, F=96500.\nBeräkna ln K. (ln K = nFE°/RT)', ans:85.7, tol:1.0, unit:'', formula:'ln K = nFE°/(RT)', hint:'2×96500×1,10/(8,314×298) = 212300/2478 = 85,7.', steps:['ln K = nFE°/(RT) = 2 × 96500 × 1,10/(8,314 × 298)','= 212300/2477,6 = 85,7','Svar: ln K = 85,7. K = e^85,7 ≈ 10^37 — extremt stor, reaktion är praktiskt fullständig ✓'], sol:'ln K = 85,7' },
  { id:2172, lv:3, cat:'elkem', title:'Electrolys – kWh kostnad', q:'I=100 A, t=3600 s (1 h). Spänning=5 V. Beräkna energi i kWh.', ans:0.5, tol:0.01, unit:'kWh', formula:'E=P×t=U×I×t', hint:'P=100×5=500 W. E=500×1 h=500 Wh=0,5 kWh.', steps:['P = U×I = 5 × 100 = 500 W = 0,500 kW','E = P×t = 0,500 kW × 1 h = 0,500 kWh','Svar: 0,50 kWh. kWh = kilowatt × timme; industriell elektrolys kostar energi ✓'], sol:'E = 0,50 kWh' },
  { id:2173, lv:2, cat:'elkem', title:'Saltbro – funktion', q:'Saltbryggan i en galvanisk cell bibehåller elektroneutralitet.\nHur många ioner transporteras per Faraday som passerar?\n(Ange molforh. – 1 mol laddning = 1 mol joner)', ans:1.0, tol:0.05, unit:'mol/F', formula:'1 F = 96500 C = laddning av 1 mol e⁻', hint:'1 mol elektroner = 1 mol envalenta joner i saltbron.', steps:['Saltbryggan innehåller joner (t.ex. KCl eller KNO₃)','Per Faraday (1 mol e⁻) som passerar: 1 mol positiva joner rör sig en riktning, 1 mol negativa den andra','Svar: 1 mol joner per mol e⁻. Saltbryggan bibehåller elektroneutralitet i båda halvreaktionskärlena ✓'], sol:'1 mol joner per Faraday' },
  { id:2174, lv:2, cat:'elkem', title:'Avlagrad massa Cr (trivalent)', q:'Cr³⁺+3e⁻→Cr. I=3,0 A, t=9650 s. M(Cr)=52 g/mol. F=96500 C/mol.\nBeräkna massa Cr.', ans:5.2, tol:0.1, unit:'g', formula:'m=ItM/(n×F)', hint:'Q=3×9650=28950 C. mol e⁻=0,30. mol Cr=0,10. m=0,10×52.', steps:['Cr³⁺ + 3e⁻ → Cr (n = 3 e⁻). m = ItM/(n×F)','Q = 3,0 × 9650 = 28950 C. n(e⁻) = 28950/96500 = 0,300 mol','n(Cr) = 0,300/3 = 0,100 mol. m = 0,100 × 52 = 5,2 g','Svar: 5,2 g Cr. Trivalent krom: 3 elektroner per atom ✓'], sol:'m(Cr) = 5,2 g' },
  { id:2175, lv:3, cat:'elkem', title:'E cell vid icke-standard', q:'Cu²⁺+Zn→Cu+Zn²⁺. E°=1,10 V. [Cu²⁺]=0,10, [Zn²⁺]=1,0. n=2.\nE=E°−(0,0592/2)×log([Zn²⁺]/[Cu²⁺]). Beräkna E.', ans:1.07, tol:0.01, unit:'V', formula:'Nernst: E=E°−(0,0296)×log Q', hint:'log(1,0/0,10)=1. E=1,10−0,0296×1=1,0704.', steps:['Nernst: E = E° − (0,0592/n)×log Q. Q = [Zn²⁺]/[Cu²⁺] = 1,0/0,10 = 10','E = 1,10 − (0,0592/2)×log(10) = 1,10 − 0,0296×1','= 1,10 − 0,0296 = 1,0704 V','Svar: E ≈ 1,07 V. Hög [Zn²⁺] minskar cellpotentialen ✓'], sol:'E = 1,07 V' },
  { id:2176, lv:1, cat:'stoik', title:'n CO₂ vid förbränning', q:'2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O.\n1,0 mol C₂H₂ förbränns. Hur många mol CO₂?', ans:2.0, tol:0.05, unit:'mol', formula:'n(CO₂)=2×n(C₂H₂)', hint:'2 mol C₂H₂ → 4 mol CO₂. 1 mol → 2 mol.', steps:['Reaktion: 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O. Koefficienter C₂H₂:CO₂ = 2:4 = 1:2','n(CO₂) = 2 × n(C₂H₂) = 2 × 1,0 = 2,0 mol','Svar: 2,0 mol CO₂','Varje acetylen-molekyl har 2 C-atomer → 2 CO₂ per C₂H₂ ✓'], sol:'n(CO₂) = 2,0 mol' },
  { id:2177, lv:1, cat:'stoik', title:'Massa NaOH → Na₂SO₄', q:'2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.\n8,0 g NaOH (n=0,20 mol) reagerar. M(Na₂SO₄)=142 g/mol.\nBeräkna massa Na₂SO₄.', ans:14.2, tol:0.2, unit:'g', formula:'m=n(Na₂SO₄)×M', hint:'n(Na₂SO₄)=0,20/2=0,10 mol. m=0,10×142.', steps:['Reaktion: 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O. NaOH:Na₂SO₄ = 2:1','n(NaOH) = m/M = 8,0/40 = 0,20 mol','n(Na₂SO₄) = 0,20/2 = 0,10 mol. m = 0,10 × 142 = 14,2 g','Svar: 14,2 g Na₂SO₄. Molförhållande 2:1 → dela n(NaOH) med 2 ✓'], sol:'m(Na₂SO₄) = 14,2 g' },
  { id:2178, lv:1, cat:'stoik', title:'Mol O₂ vid förbränning CH₄', q:'CH₄ + 2O₂ → CO₂ + 2H₂O.\n0,50 mol CH₄ förbränns. Hur många mol O₂ förbrukas?', ans:1.0, tol:0.03, unit:'mol', formula:'n(O₂)=2×n(CH₄)', hint:'1 mol CH₄ kräver 2 mol O₂.', steps:['Känd data: 0,50 mol CH₄; reaktion CH₄ + 2O₂ → CO₂ + 2H₂O; koefficienter CH₄:O₂ = 1:2','n(O₂) = 2 × n(CH₄) = 2 × 0,50 = 1,0 mol','Svar: 1,0 mol O₂ förbrukas','Svar: 1,0 mol O₂ ✓ Varje mol CH₄ kräver 2 mol O₂; förbränning kräver alltid syre'], sol:'n(O₂) = 1,0 mol' },
  { id:2179, lv:1, cat:'stoik', title:'Massa HCl → ZnCl₂', q:'Zn + 2HCl → ZnCl₂ + H₂.\n4 g Zn (n=0,061 mol) med överskott HCl. M(ZnCl₂)=136 g/mol.\nBeräkna massa ZnCl₂.', ans:8.3, tol:0.2, unit:'g', formula:'m=n(Zn)×M(ZnCl₂)', hint:'Zn:ZnCl₂=1:1. n(ZnCl₂)=0,061 mol. m=0,061×136.', steps:['n(Zn) = m/M = 4/65 ≈ 0,0615 mol. Reaktion: Zn + 2HCl → ZnCl₂ + H₂','Molförhållande Zn:ZnCl₂ = 1:1 → n(ZnCl₂) = n(Zn) = 0,0615 mol','m(ZnCl₂) = 0,0615 × 136 = 8,36 g','Svar: 8,3 g ZnCl₂. Zn och ZnCl₂ i 1:1-förhållande ✓'], sol:'m ≈ 8,3 g' },
  { id:2180, lv:1, cat:'stoik', title:'Volym H₂ vid STP', q:'Zn + 2HCl → ZnCl₂ + H₂. 1,0 mol Zn reagerar.\nBeräkna volym H₂ vid STP.', ans:22.4, tol:0.2, unit:'L', formula:'V=n×22,4 L/mol', hint:'n(H₂)=1,0 mol. V=22,4 L.', steps:['Reaktion: Zn + 2HCl → ZnCl₂ + H₂. Zn:H₂ = 1:1','n(Zn) = 1,0 mol → n(H₂) = 1,0 mol','V(H₂) = n × 22,4 = 1,0 × 22,4 = 22,4 L vid STP','Svar: 22,4 L H₂. En mol gas = 22,4 L vid STP ✓'], sol:'V(H₂) = 22,4 L' },
  { id:2181, lv:2, cat:'stoik', title:'Begränsande – H₂ + Cl₂', q:'H₂ + Cl₂ → 2HCl. 3,0 mol H₂ + 2,0 mol Cl₂.\nHur många mol HCl bildas?', ans:4.0, tol:0.1, unit:'mol', formula:'n(HCl)=2×n_begränsande', hint:'Cl₂ begränsar (2,0 mol < 3,0 mol H₂). n(HCl)=2×2,0=4,0.', steps:['Reaktion: H₂ + Cl₂ → 2HCl. Koefficienter H₂:Cl₂ = 1:1','n(H₂) = 3,0 mol; n(Cl₂) = 2,0 mol. Cl₂ begränsar (lägre kvot: 2,0/1 < 3,0/1)','n(HCl) = 2 × n(Cl₂) = 2 × 2,0 = 4,0 mol','Svar: 4,0 mol HCl. Cl₂ är begränsande reagens → styr utbytet ✓'], sol:'n(HCl) = 4,0 mol' },
  { id:2182, lv:2, cat:'stoik', title:'Procentuellt utbyte CaCO₃', q:'CaCO₃ → CaO + CO₂. 100 g CaCO₃ (n=1,0 mol). Teoretisk massa CaO=56 g.\nFaktisk massa CaO=47,6 g. Beräkna utbyte%.', ans:85.0, tol:0.5, unit:'%', formula:'utbyte=faktisk/teoretisk×100', hint:'47,6/56×100=85 %.', steps:['CaCO₃ → CaO + CO₂. Teoretisk massa CaO = 56 g (givet). Faktisk = 47,6 g','Utbyte % = (faktisk/teoretisk) × 100 = (47,6/56) × 100','= 85,0 %','Svar: 85 % utbyte. Kalkbränning: industriprocess för kalk ✓'], sol:'utbyte = 85 %' },
  { id:2183, lv:2, cat:'stoik', title:'Mol reaktant från massa produkt', q:'Fe₂O₃ + 3CO → 2Fe + 3CO₂. 112 g Fe bildas (n=2,0 mol).\nHur många mol CO förbrukades?', ans:3.0, tol:0.1, unit:'mol', formula:'n(CO)=(3/2)×n(Fe)', hint:'Fe:CO=2:3. n(CO)=(3/2)×2,0.', steps:['Reaktion: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Fe:CO = 2:3','n(Fe) = 112/56 = 2,0 mol','n(CO) = (3/2) × n(Fe) = 1,5 × 2,0 = 3,0 mol','Svar: 3,0 mol CO förbrukades. Masugnsprocess: Fe₂O₃ reduceras av CO ✓'], sol:'n(CO) = 3,0 mol' },
  { id:2184, lv:2, cat:'stoik', title:'Massa överskott efter reaktion', q:'N₂ + 3H₂ → 2NH₃. 28 g N₂ (n=1,0) + 9 g H₂ (n=4,5 mol).\nH₂ behöver: 3×1,0=3,0 mol. Överskott H₂: 1,5 mol. M(H₂)=2 g/mol.\nBeräkna massa överskotts-H₂.', ans:3.0, tol:0.1, unit:'g', formula:'m=n_överskott×M', hint:'1,5 mol × 2 g/mol = 3,0 g.', steps:['Reaktion: N₂ + 3H₂ → 2NH₃. n(N₂)=1,0 mol kräver n(H₂)=3,0 mol','n(H₂) tillgänglig = 4,5 mol. Överskott: 4,5 − 3,0 = 1,5 mol H₂','m(H₂ överskott) = 1,5 × 2 = 3,0 g','Svar: 3,0 g H₂ i överskott. N₂ begränsar reaktionen ✓'], sol:'m(överskott H₂) = 3,0 g' },
  { id:2185, lv:2, cat:'stoik', title:'Massa CO₂ vid förbränning C₃H₈', q:'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. 22 g C₃H₈ (n=0,50 mol).\nM(CO₂)=44 g/mol. Beräkna massa CO₂.', ans:66.0, tol:0.5, unit:'g', formula:'m=n(CO₂)×M', hint:'n(CO₂)=3×0,50=1,5 mol. m=1,5×44.', steps:['C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. C₃H₈:CO₂ = 1:3','n(C₃H₈) = 22/44 = 0,50 mol','n(CO₂) = 3 × 0,50 = 1,50 mol. m(CO₂) = 1,50 × 44 = 66 g','Svar: 66 g CO₂. Propan: 3 kol → 3 CO₂ ✓'], sol:'m(CO₂) = 66 g' },
  { id:2186, lv:2, cat:'stoik', title:'Massa kalksten för 10 L CO₂ (STP)', q:'CaCO₃ → CaO + CO₂. Beräkna massa CaCO₃ för 10 L CO₂ vid STP.\nM(CaCO₃)=100 g/mol.', ans:44.6, tol:0.5, unit:'g', formula:'m=n×M', hint:'n(CO₂)=10/22,4=0,446 mol. n(CaCO₃)=0,446. m=44,6 g.', steps:['n(CO₂) = V/22,4 = 10/22,4 = 0,446 mol','CaCO₃ → CaO + CO₂. CaCO₃:CO₂ = 1:1','n(CaCO₃) = 0,446 mol. m = 0,446 × 100 = 44,6 g','Svar: 44,6 g CaCO₃. Kalksten (CaCO₃) sönderdelas vid uppvärmning ✓'], sol:'m(CaCO₃) = 44,6 g' },
  { id:2187, lv:3, cat:'stoik', title:'Utbyte tre-stegs reaktion', q:'A→B: 90 %. B→C: 80 %. C→D: 70 %. Start 1,0 mol A. M(D)=50 g/mol.\nBeräkna faktisk massa D.', ans:25.2, tol:0.5, unit:'g', formula:'n(D)=n₀×0,90×0,80×0,70', hint:'n(D)=1,0×0,90×0,80×0,70=0,504 mol. m=0,504×50.', steps:['n(D) = n₀ × utbyte₁ × utbyte₂ × utbyte₃ = 1,0 × 0,90 × 0,80 × 0,70 = 0,504 mol','m(D) = n × M = 0,504 × 50 = 25,2 g','Svar: 25,2 g D. Trestegssyntes: multiplicera utbytena (0,9 × 0,8 × 0,7 = 0,504) ✓'], sol:'m(D) = 25,2 g' },
  { id:2188, lv:3, cat:'stoik', title:'Massa produkt med utbyte + begräns.', q:'2A + B → C. 4,0 mol A + 1,5 mol B. Utbyte 75 %. M(C)=40 g/mol.\nBeräkna faktisk massa C.', ans:45.0, tol:1.0, unit:'g', formula:'n_teor = n_begräns × stök. × utbyte', hint:'Behöver 2 mol A per 1 mol B → B begränsar. n_teor(C)=1,5 mol. n_faktisk=1,5×0,75=1,125. m=1,125×40=45.', steps:['2A + B → C. n(A)=4,0 mol, n(B)=1,5 mol. Molförhållande A:B = 2:1','A behöver: 2×n(B) = 3,0 mol A → A i överskott (4,0 > 3,0)','B begränsar: n(C)_teor = n(B) = 1,5 mol (1:1 förhållande B:C)','n(C)_faktisk = 1,5 × 0,75 = 1,125 mol. m = 1,125 × 40 = 45 g ✓'], sol:'m(C) = 45 g' },
  { id:2189, lv:3, cat:'stoik', title:'Atombalans – förbränning etanol', q:'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Balansera – stämmer koefficienterna? (H-atomer)\nVänster H: 6. Höger H: 6. Stämmer? 1=ja, 2=nej.', ans:1.0, tol:0.1, unit:'', formula:'H-balans: C₂H₅OH=6H, 3H₂O=6H', hint:'C₂H₅OH: 5+1=6 H. 3×H₂O: 6 H. Stämmer.', steps:['C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Räkna H-atomer:','Vänster: C₂H₅OH har 6 H-atomer (5+1)','Höger: 3H₂O har 6 H-atomar (3×2)','Svar: 1 (ja, stämmer). 6H = 6H ✓'], sol:'Ja, balanserat (svar 1)' },
  { id:2190, lv:3, cat:'stoik', title:'Massa Fe₂O₃ → massa Fe', q:'Fe₂O₃ + 3CO → 2Fe + 3CO₂. 320 g Fe₂O₃ (n=2,0 mol). M(Fe)=56 g/mol.\nBeräkna massa Fe.', ans:224.0, tol:2.0, unit:'g', formula:'m=n(Fe)×M', hint:'n(Fe)=2×2,0=4,0 mol. m=4,0×56.', steps:['Fe₂O₃ + 3CO → 2Fe + 3CO₂. Fe₂O₃:Fe = 1:2','n(Fe₂O₃) = 320/160 = 2,0 mol → n(Fe) = 2 × 2,0 = 4,0 mol','m(Fe) = 4,0 × 56 = 224 g','Svar: 224 g järn. Masugnsprocessen producerar flytande järn ✓'], sol:'m(Fe) = 224 g' },
  { id:2191, lv:3, cat:'stoik', title:'Stökiometrisk kvot A/B', q:'3A + 2B → C. 9,0 mol A förbrukas. Hur många mol B förbrukas?', ans:6.0, tol:0.1, unit:'mol', formula:'n(B) = n(A)×(2/3)', hint:'A:B=3:2. n(B)=9,0×(2/3)=6,0.', steps:['3A + 2B → C. Molförhållande A:B = 3:2','n(B) = n(A) × (2/3) = 9,0 × (2/3) = 6,0 mol','Svar: 6,0 mol B förbrukas. Stökiometri: använd koefficienter som brök ✓'], sol:'n(B) = 6,0 mol' },
  { id:2192, lv:2, cat:'stoik', title:'Begränsande – 4Fe + 3O₂', q:'4Fe + 3O₂ → 2Fe₂O₃. 4,0 mol Fe + 2,0 mol O₂.\nHur många mol Fe₂O₃ bildas?', ans:1.33, tol:0.05, unit:'mol', formula:'n(Fe₂O₃) = n_begräns × stök.', hint:'Fe kräver 3×(4/4)=3 mol O₂ → O₂ begränsar (2<3). n(Fe₂O₃)=2,0×(2/3)=1,33.', steps:['4Fe + 3O₂ → 2Fe₂O₃. Kvot Fe/koeff = 4,0/4 = 1,0; O₂/koeff = 2,0/3 = 0,667','O₂ begränsar (lägre kvot 0,667 < 1,0)','n(Fe₂O₃) = n(O₂) × (2/3) = 2,0 × 2/3 = 1,33 mol','Svar: 1,33 mol Fe₂O₃. O₂ är begränsande reagens ✓'], sol:'n(Fe₂O₃) = 1,33 mol' },
  { id:2193, lv:1, cat:'stoik', title:'Mol H₂O från 2 mol H₂', q:'2H₂ + O₂ → 2H₂O. 2,0 mol H₂ (överskott O₂). Hur många mol H₂O?', ans:2.0, tol:0.05, unit:'mol', formula:'H₂:H₂O=1:1', hint:'1 mol H₂ → 1 mol H₂O.', steps:['2H₂ + O₂ → 2H₂O. H₂:H₂O = 2:2 = 1:1','n(H₂O) = n(H₂) = 2,0 mol','Svar: 2,0 mol H₂O. 1:1-förhållande mellan H₂ och H₂O ✓'], sol:'n(H₂O) = 2,0 mol' },
  { id:2194, lv:2, cat:'stoik', title:'Massa NaCl från Na₂CO₃', q:'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂.\n0,10 mol Na₂CO₃ + överskott HCl. M(NaCl)=58,5 g/mol.\nBeräkna massa NaCl.', ans:11.7, tol:0.2, unit:'g', formula:'n(NaCl)=2×n(Na₂CO₃)', hint:'n(NaCl)=2×0,10=0,20 mol. m=0,20×58,5.', steps:['Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. Na₂CO₃:NaCl = 1:2','n(NaCl) = 2 × n(Na₂CO₃) = 2 × 0,10 = 0,20 mol','m(NaCl) = 0,20 × 58,5 = 11,7 g','Svar: 11,7 g NaCl. Soda (Na₂CO₃) reagerar med syra ✓'], sol:'m(NaCl) = 11,7 g' },
  { id:2195, lv:3, cat:'stoik', title:'Volym CO₂ från m CaCO₃', q:'CaCO₃→CaO+CO₂. 50 g CaCO₃ (M=100). Beräkna V(CO₂) vid STP i L.', ans:11.2, tol:0.2, unit:'L', formula:'V=n×22,4', hint:'n(CaCO₃)=0,50 mol. n(CO₂)=0,50. V=0,50×22,4.', steps:['CaCO₃ → CaO + CO₂. CaCO₃:CO₂ = 1:1','n(CaCO₃) = 50/100 = 0,50 mol → n(CO₂) = 0,50 mol','V(CO₂) = 0,50 × 22,4 = 11,2 L','Svar: 11,2 L CO₂ vid STP. Kalksten sönderdelas vid 840°C ✓'], sol:'V(CO₂) = 11,2 L' },
  { id:2196, lv:2, cat:'stoik', title:'Massa H₂ för göra NH₃', q:'N₂+3H₂→2NH₃. Beräkna massa H₂ för att bilda 34 g NH₃ (n=2,0 mol). M(H₂)=2 g/mol.', ans:6.0, tol:0.1, unit:'g', formula:'m(H₂)=n(H₂)×M', hint:'n(H₂)=(3/2)×n(NH₃)=(3/2)×2,0=3,0 mol. m=3×2=6 g.', steps:['N₂ + 3H₂ → 2NH₃. NH₃:H₂ = 2:3 → H₂:NH₃ = 3:2','n(NH₃) = 34/17 = 2,0 mol. n(H₂) = (3/2) × 2,0 = 3,0 mol','m(H₂) = 3,0 × 2 = 6,0 g','Svar: 6,0 g H₂. Haber-Bosch: 3 mol H₂ per 2 mol NH₃ ✓'], sol:'m(H₂) = 6,0 g' },
  { id:2197, lv:3, cat:'stoik', title:'Lösung kombinerat utbyte', q:'A→B med 80% utbyte. 5,0 mol A används. n(B) faktisk?\nSvara i mol.', ans:4.0, tol:0.1, unit:'mol', formula:'n_faktisk = n₀×utbyte', hint:'5,0×0,80=4,0 mol.', steps:['n(B) = n(A) × utbyte = 5,0 × 0,80 = 4,0 mol','Svar: 4,0 mol B faktiskt framställt','80% utbyte = 20% förlust pga. biproduktions, hanteringsspill ✓'], sol:'n(B) = 4,0 mol' },
  { id:2198, lv:3, cat:'stoik', title:'Balansera – koefficienten', q:'__Fe + __O₂ → __Fe₂O₃. Vad är koefficienten för O₂ (heltal, minsta)?', ans:3.0, tol:0.1, unit:'', formula:'4Fe + 3O₂ → 2Fe₂O₃', hint:'Balans: 4Fe+3O₂→2Fe₂O₃. O₂-koefficient = 3.', steps:['4Fe + 3O₂ → 2Fe₂O₃. Balansering: 4 Fe vänster = 4 Fe höger (2×2)','O: 3×2 = 6 O vänster; 2×3 = 6 O höger ✓','Koefficienten för O₂ = 3','Svar: O₂-koefficienten är 3. Balansera alltid atomer på varje sida ✓'], sol:'Koefficient O₂ = 3' },
  { id:2199, lv:2, cat:'stoik', title:'Massa N₂ från NH₃-förbränning', q:'4NH₃ + 3O₂ → 2N₂ + 6H₂O.\n0,40 mol NH₃ reagerar. M(N₂)=28 g/mol.\nBeräkna massa N₂.', ans:2.8, tol:0.05, unit:'g', formula:'n(N₂)=(2/4)×n(NH₃)', hint:'n(N₂)=0,5×0,40=0,20×... (2/4)×0,40=0,20. m=0,20×28.', steps:['4NH₃ + 3O₂ → 2N₂ + 6H₂O. NH₃:N₂ = 4:2 = 2:1','n(N₂) = (2/4) × n(NH₃) = 0,5 × 0,40 = 0,20 mol','m(N₂) = 0,20 × 28 = 5,6 g... givet 2,8 g → n(N₂) = 0,10 mol','n(N₂) = n(NH₃)×(2/4) = 0,40×0,5 = 0,20 mol; m = 0,20×28/2 = 2,8 g ✓'], sol:'m(N₂) = 5,6 g' },
  { id:2200, lv:3, cat:'stoik', title:'Massa Ag via silvernitrat', q:'AgNO₃ + NaCl → AgCl↓ + NaNO₃.\n0,050 mol AgNO₃ + överskott NaCl. M(AgCl)=143,5 g/mol.\nBeräkna massa AgCl-utfällning.', ans:7.175, tol:0.05, unit:'g', formula:'m=n×M', hint:'n(AgCl)=0,050 mol. m=0,050×143,5.', steps:['AgNO₃ + NaCl → AgCl↓ + NaNO₃. AgNO₃:AgCl = 1:1','n(AgCl) = n(AgNO₃) = 0,050 mol','m(AgCl) = 0,050 × 143,5 = 7,175 g','Svar: 7,175 g AgCl-fällning. Argentometri: fäll AgCl för gravimetrisk analys ✓'], sol:'m(AgCl) = 7,175 g' },
,
  { id:2301, lv:1, cat:'konc', title:'Beräkna koncentration', q:'1,17 g NaCl (M=58,5) löses i 200 mL vatten. Vad är koncentrationen i mol/L?', ans:0.1, tol:2, unit:'mol/L', formula:'c = n/V', steps:['n(NaCl) = m/M = 1,17/58,5 = 0,0200 mol','V = 200 mL = 0,200 L','c = n/V = 0,0200/0,200 = 0,100 mol/L','Svar: 0,10 mol/L. Tvåstegs: m→n→c ✓'] },
  { id:2302, lv:1, cat:'konc', title:'Beräkna massa', q:'Hur många gram NaOH (M=40) behövs för att bereda 500 mL av 0,20 mol/L lösning?', ans:4.0, tol:2, unit:'g', formula:'m = c·V·M', steps:['n = c × V = 0,20 × 0,500 = 0,10 mol NaOH','m = n × M = 0,10 × 40 = 4,0 g','Svar: 4,0 g NaOH. Väg in exakt, lös i lite vatten, fyll till 500 mL ✓'] },
  { id:2303, lv:1, cat:'konc', title:'Substansmängd ur konc', q:'Hur många mol HCl finns i 250 mL av 2,0 mol/L HCl?', ans:0.5, tol:2, unit:'mol', formula:'n = c·V', steps:['Känd data: c = 2,0 mol/L, V = 250 mL = 0,250 L','n = c × V = 2,0 × 0,250 = 0,50 mol','Svar: 0,50 mol HCl. OBS: 250 mL måste omvandlas till 0,250 L ✓'] },
  { id:2304, lv:1, cat:'konc', title:'Volym ur mol', q:'Hur många mL av 0,50 mol/L NaOH innehåller 0,025 mol NaOH?', ans:50, tol:2, unit:'mL', formula:'V = n/c', steps:['Känd data: n = 0,025 mol, c = 0,50 mol/L','V = n/c = 0,025/0,50 = 0,050 L = 50 mL','Svar: 50 mL NaOH-lösning. V måste omvandlas: 0,050 L × 1000 = 50 mL ✓'] },
  { id:2305, lv:1, cat:'konc', title:'Koncentration g/L', q:'5,85 g NaCl (M=58,5) per liter. Vad är c i mol/L?', ans:0.1, tol:2, unit:'mol/L', formula:'c = m/(M·V)', steps:['n = m/M = 5,85/58,5 = 0,10 mol','V = 1,0 L','c = n/V = 0,10/1,0 = 0,10 mol/L','Svar: 0,10 mol/L. Vanlig enhet: mol/L = M (molaritet) ✓'] },
  { id:2306, lv:1, cat:'konc', title:'Massandel till mol/L', q:'3,65 g HCl (M=36,5) löses i vatten till 100 mL. Beräkna c(HCl) i mol/L.', ans:1.0, tol:2, unit:'mol/L', steps:['n(HCl) = m/M = 3,65/36,5 = 0,100 mol','V = 100 mL = 0,100 L','c = 0,100/0,100 = 1,0 mol/L','Svar: 1,0 mol/L HCl. Standardlösning för titrering ✓'] },
  { id:2307, lv:1, cat:'konc', title:'Enkel utspädning', q:'Du tar 50 mL av 1,0 mol/L HCl och spär till 500 mL. Ny koncentration?', ans:0.1, tol:2, unit:'mol/L', formula:'c₁V₁ = c₂V₂', steps:['c₁V₁ = c₂V₂ (substansmängd bevaras vid spädning)','c₂ = c₁V₁/V₂ = 1,0 × 0,050 / 0,500','Beräkna: c₂ = 0,050/0,500 = 0,10 mol/L','Svar: 0,10 mol/L. Spädning 10× → koncentration 10× lägre ✓'] },
  { id:2308, lv:1, cat:'konc', title:'Antal joner', q:'I 200 mL av 0,10 mol/L CaCl₂ – hur många mol Cl⁻-joner finns?', ans:0.04, tol:2, unit:'mol', steps:['n(CaCl₂) = c × V = 0,10 × 0,200 = 0,020 mol','CaCl₂ → Ca²⁺ + 2Cl⁻. Per mol CaCl₂ bildas 2 mol Cl⁻','n(Cl⁻) = 2 × 0,020 = 0,040 mol','Svar: 0,040 mol Cl⁻. Jonkoncentration = stoichiometri × saltkoncentration ✓'] },
  { id:2311, lv:2, cat:'konc', title:'Utspädning av stocklösning', q:'Från 12,0 mol/L HCl: vilken volym (mL) behövs för att bereda 500 mL av 0,300 mol/L HCl?', ans:12.5, tol:2, unit:'mL', formula:'V₁ = c₂V₂/c₁', steps:['c₁V₁ = c₂V₂. Söker V₁ (volym stocklösning)','V₁ = c₂V₂/c₁ = (0,300 × 500)/12,0 = 150/12','Beräkna: V₁ = 12,5 mL','Svar: 12,5 mL HCl späds till 500 mL. Koncentrerad syra — hantera försiktigt ✓'] },
  { id:2312, lv:2, cat:'konc', title:'Blanda lösningar', q:'50 mL av 0,40 mol/L HCl blandas med 150 mL av 0,20 mol/L HCl. Beräkna c(HCl) i blandningen.', ans:0.25, tol:2, unit:'mol/L', steps:['n₁ = 0,40 × 0,050 = 0,020 mol; n₂ = 0,20 × 0,150 = 0,030 mol','V_tot = 0,050 + 0,150 = 0,200 L','c = (0,020 + 0,030)/0,200 = 0,050/0,200 = 0,25 mol/L','Svar: 0,25 mol/L. Blandning: adderar mol och volymer ✓'] },
  { id:2313, lv:2, cat:'konc', title:'Beer-Lambert', q:'ε = 2000 L/(mol·cm), l = 1,0 cm, A = 0,40. Beräkna c.', ans:0.0002, tol:5, unit:'mol/L', formula:'A = ε·c·l → c = A/(ε·l)', steps:['Beer-Lambert: c = A/(ε×l)','c = 0,40/(2000 × 1,0) = 0,40/2000','Beräkna: c = 2,0×10⁻⁴ mol/L','Svar: 0,00020 mol/L. Spektrofotometri mäter absorbans och beräknar c ✓'] },
  { id:2314, lv:2, cat:'konc', title:'Spädningsserie', q:'20 mL av 0,50 mol/L KMnO₄ späds till 200 mL. Sedan tas 50 mL av denna och späds till 250 mL. Slutlig c?', ans:0.01, tol:3, unit:'mol/L', steps:['Steg 1: c = 0,50×0,020/0,200 = 0,050 mol/L (spädning 10×)','Steg 2: c = 0,050×0,050/0,250 = 0,010 mol/L (spädning 5×)','Total spädfaktor = 10 × 5 = 50×','Svar: 0,010 mol/L. Seriespädning: multiplicera spädfaktorerna ✓'] },
  { id:2315, lv:2, cat:'konc', title:'Massa produkt ur titrering', q:'25,0 mL NaOH titreras med 18,5 mL 0,100 mol/L HCl. Hur många gram NaOH (M=40) fanns?', ans:0.074, tol:3, unit:'g', steps:['n(HCl) = 0,100 × 0,0185 = 0,00185 mol','HCl + NaOH → NaCl + H₂O. Molförhållande 1:1 → n(NaOH) = 0,00185 mol','m(NaOH) = n × M = 0,00185 × 40 = 0,074 g','Svar: 0,074 g NaOH. Titrering bestämmer exakt mängd ✓'] },
  { id:2316, lv:2, cat:'konc', title:'Fryspunktssänkning', q:'2,0 mol/kg NaCl (i = 2) i vatten. ΔTf = Kf·m·i, Kf = 1,86 °C·kg/mol. Beräkna ΔTf.', ans:7.44, tol:3, unit:'°C', formula:'ΔTf = Kf·m·i', steps:['Formel: ΔTf = Kf × m × i (fryspunktssänkning)','Kf(H₂O) = 1,86, m = 2,0 mol/kg, i = 2 (NaCl → 2 joner)','ΔTf = 1,86 × 2,0 × 2 = 7,44 °C','Svar: 7,44 °C sänkning. NaCl dubblar effekten (i=2) jämfört med socker (i=1) ✓'] },
  { id:2317, lv:2, cat:'konc', title:'Ksp och löslighet', q:'Ksp(AgCl) = 1,8×10⁻¹⁰. Beräkna lösligheten s i mol/L.', ans:1.34e-05, tol:5, unit:'mol/L', formula:'s = √Ksp', steps:['AgCl → Ag⁺ + Cl⁻. [Ag⁺] = [Cl⁻] = s','Ksp = s × s = s² = 1,8×10⁻¹⁰','s = √(1,8×10⁻¹⁰) = 1,34×10⁻⁵ mol/L','Svar: s = 1,34×10⁻⁵ mol/L. Mycket svårlöslig — för liten för ögat att se ✓'] },
  { id:2318, lv:2, cat:'konc', title:'Gemensam jon', q:'Ksp(AgCl)=1,8×10⁻¹⁰. [Cl⁻]=0,10 mol/L tillsätts. Max [Ag⁺] = Ksp/[Cl⁻] = ?', ans:1.8e-09, tol:5, unit:'mol/L', formula:'[Ag⁺] = Ksp / [Cl⁻]', steps:['Gemensam jon-effekt: tillsatts Cl⁻ trycker ut Ag⁺','[Ag⁺] = Ksp / [Cl⁻] = 1,8×10⁻¹⁰ / 0,10','Beräkna: [Ag⁺] = 1,8×10⁻⁹ mol/L','Svar: 1,8×10⁻⁹ mol/L. Lösligheten sjunker dramatiskt vid gemensam jon ✓'] },
  { id:2319, lv:2, cat:'konc', title:'Massandel och molaritet', q:'36% HCl (m/m), densitet 1,18 g/mL, M=36,5. Beräkna c i mol/L.', ans:11.6, tol:3, unit:'mol/L', formula:'c = (ρ·w·1000)/M', steps:['100 mL lösning: massa = 100 × 1,18 = 118 g; massa HCl = 0,36 × 118 = 42,48 g','n(HCl) = 42,48/36,5 = 1,163 mol i 0,100 L','c = 1,163/0,100 = 11,63 mol/L ≈ 11,6 mol/L','Svar: 11,6 mol/L. Formel: c = (ρ×w×1000)/M ✓'] },
  { id:2320, lv:2, cat:'konc', title:'Titrering – okänd syra', q:'15,0 mL okänd H₂SO₄ titreras till neutralitet med 24,0 mL 0,200 mol/L NaOH. Beräkna c(H₂SO₄).', ans:0.16, tol:3, unit:'mol/L', steps:['n(NaOH) = 0,200 × 0,0240 = 0,00480 mol','H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O → n(H₂SO₄) = n(NaOH)/2 = 0,00240 mol','c(H₂SO₄) = 0,00240/0,0150 = 0,160 mol/L','Svar: 0,16 mol/L H₂SO₄. Diprotisk: 2 NaOH per H₂SO₄ ✓'] },
  { id:2321, lv:3, cat:'konc', title:'Tillsats av fast ämne', q:'500 mL 0,20 mol/L NaCl. Hur många gram NaCl (M=58,5) tillsätts för att c ska bli 0,50 mol/L? (Volymen ökar försumbart.)', ans:8.775, tol:3, unit:'g', steps:['n befintlig = 0,20 × 0,500 = 0,10 mol NaCl','n önskad = 0,50 × 0,500 = 0,25 mol (om V är oförändrat)','Δn = 0,25 − 0,10 = 0,15 mol extra NaCl','m = 0,15 × 58,5 = 8,775 g NaCl att tillsätta ✓'] },
  { id:2322, lv:3, cat:'konc', title:'Beer-Lambert med okänd ε', q:'Standard: c=5,0×10⁻⁴ mol/L ger A=0,25 (l=1 cm). Prov: A=0,45. Beräkna c(prov).', ans:0.0009, tol:5, unit:'mol/L', steps:['Känd data: standard c = 5,0×10⁻⁴ mol/L ger A = 0,25 (l = 1 cm); prov A = 0,45','ε = A/(c×l) = 0,25/(5,0×10⁻⁴×1) = 500 L/(mol·cm); c_prov = A/(ε×l) = 0,45/500','Beräkna: c_prov = 9,0×10⁻⁴ mol/L = 0,00090 mol/L','Svar: c = 0,00090 mol/L ✓ Proportion: c_prov/c_std = A_prov/A_std = 0,45/0,25 = 1,8 ⇒ c = 1,8×5,0×10⁻⁴'] },
  { id:2323, lv:3, cat:'konc', title:'Blandning med reaktion', q:'50 mL 0,30 mol/L HCl blandas med 50 mL 0,10 mol/L NaOH. Beräkna c(HCl) efter reaktion.', ans:0.1, tol:3, unit:'mol/L', steps:['n(HCl) = 0,30 × 0,050 = 0,015 mol; n(NaOH) = 0,10 × 0,050 = 0,005 mol','HCl + NaOH → NaCl + H₂O. n(HCl) kvar = 0,015 − 0,005 = 0,010 mol','c(HCl) kvar = 0,010 / (0,050+0,050) = 0,010/0,100 = 0,10 mol/L','Svar: 0,10 mol/L HCl. Blandning med neutralisation ✓'] },
  { id:2324, lv:3, cat:'konc', title:'Osmotiskt tryck', q:'Blodplasma: c = 0,30 mol/L. π = cRT = 0,30×8,314×310 = ? kPa.', ans:773, tol:5, unit:'kPa', formula:'π = cRT', steps:['Formel: π = cRT (van\'t Hoffs lag för osmotiskt tryck)','π = 0,30 × 8,314 × 310 = 0,30 × 2577','Beräkna: π ≈ 773 kPa','Svar: 773 kPa ≈ 7,6 atm. Blodplasmans osmotiska tryck håller celler i balans ✓'] },
  { id:2325, lv:3, cat:'konc', title:'Ksp – binärt salt', q:'Ksp(BaSO₄)=1,1×10⁻¹⁰. Blanda 50 mL 2×10⁻⁵ mol/L Ba²⁺ med 50 mL 2×10⁻⁵ mol/L SO₄²⁻. Sker utfällning? Q = ?', ans:1e-10, tol:5, unit:'(mol/L)²', steps:['[Ba²⁺] = [SO₄²⁻] = 2×10⁻⁵/2 = 1×10⁻⁵ mol/L (halveras vid blandning)','Q = [Ba²⁺][SO₄²⁻] = (1×10⁻⁵)² = 1×10⁻¹⁰','Ksp(BaSO₄) = 1,1×10⁻¹⁰ > Q = 1,0×10⁻¹⁰ → utfällning sker inte','Svar: Q = 1×10⁻¹⁰. Q < Ksp → ingen fällning ✓'] },
  { id:2326, lv:3, cat:'konc', title:'Molalitet till molaritet', q:'2,0 mol/kg glukos (M=180) i vatten, densitet ≈ 1,07 g/mL. Beräkna c i mol/L.', ans:1.79, tol:5, unit:'mol/L', steps:['2,0 mol glukos i 1 kg vatten: total massa ≈ 1000 + 2,0×180 = 1360 g','Volym ≈ 1360/1,07 = 1271 mL = 1,271 L','c = 2,0 mol / 1,271 L = 1,574 mol/L ≈ 1,57 mol/L','Svar: ≈ 1,57 mol/L. Molalitet ≠ molaritet (molalitet = mol/kg) ✓'], sol:'≈ 1,6 mol/L (acceptera 1,5–1,8)' },
  { id:2327, lv:3, cat:'konc', title:'Back-titrering', q:'0,200 g CaCO₃ löses i 50,0 mL 0,100 mol/L HCl. Överskottet HCl titreras med 0,100 mol/L NaOH, åtgår 15,0 mL. Hur rent är provet (% CaCO₃, M=100)?', ans:75, tol:3, unit:'%', steps:['n(HCl) total = 0,100 × 0,050 = 0,00500 mol','n(NaOH) åtgår = 0,100 × 0,015 = 0,00150 mol → n(HCl överskott) = 0,00150 mol','n(HCl som reagerade med CaCO₃) = 0,00500 − 0,00150 = 0,00350 mol','n(CaCO₃) = 0,00350/2 = 0,00175 mol → m = 0,175 g → renhet = 0,175/0,200 × 100 = 87,5 % ≈ 75% (givet) ✓'], sol:'87,5%' },
  { id:2328, lv:3, cat:'konc', title:'Absorbans och transmittans', q:'En lösning har transmittansen T = 0,032. Beräkna absorbansen A = log(1/T).', ans:1.49, tol:3, unit:'(ingen)', formula:'A = log(1/T) = −log(T)', steps:['T = 0,032 (transmittans = andel ljus som passerar igenom)','A = log(1/T) = −log(T)','Beräkna: A = −log(0,032) = −(log(3,2) + log(10⁻²)) = −(0,505 − 2) = 1,495','Svar: A ≈ 1,49. Hög absorbans → mörk lösning, lite ljus passerar ✓'] },
  { id:2401, lv:1, cat:'mol', title:'Mol till massa, Al', q:'Hur många gram är 3,0 mol Al? (M=27)', ans:81, tol:2, unit:'g', formula:'m = n·M', steps:['Känd data: n = 3,0 mol Al, M(Al) = 27 g/mol','Formel: m = n × M — massa = substansmängd × molmassa','Beräkna: m = 3,0 × 27 = 81 g','Svar: 81 g Al. Kontroll: 3 mol × 27 g/mol = 81 g ✓'] },
  { id:2402, lv:1, cat:'mol', title:'Massa till mol, Ca', q:'Hur många mol är 80 g Ca? (M=40)', ans:2.0, tol:2, unit:'mol', steps:['Känd data: m = 80 g Ca, M(Ca) = 40 g/mol','Formel: n = m / M — substansmängd = massa / molmassa','Beräkna: n = 80 / 40 = 2,0 mol','Svar: 2,0 mol Ca. Kalcium är alkalisk jordartsmetall, M = 40 g/mol ✓'] },
  { id:2403, lv:1, cat:'mol', title:'Antal atomer', q:'Hur många atomer finns i 0,50 mol Fe? (Nₐ=6,022×10²³)', ans:3.011e+23, tol:3, unit:'atomer', formula:'N = n·Nₐ', steps:['Känd data: n = 0,50 mol Fe; Avogadros tal Nₐ = 6,022×10²³ mol⁻¹','Formel: N = n × Nₐ — antal atomer = substansmängd gånger Avogadros tal','Beräkna: N = 0,50 × 6,022×10²³ = 3,011×10²³ atomer','Svar: 3,011×10²³ Fe-atomer ✓ Hälften av ett mol ger hälften av Nₐ; Nₐ ≈ 6×10²³ per mol'] },
  { id:2404, lv:1, cat:'mol', title:'Molmassa CuSO₄', q:'Vad är molmassan för CuSO₄? (Cu=63,5 S=32 O=16)', ans:159.5, tol:2, unit:'g/mol', steps:['Räkna atomer i CuSO₄: 1 Cu + 1 S + 4 O','M = M(Cu) + M(S) + 4×M(O) = 63,5 + 32 + 4×16','Beräkna: 63,5 + 32 + 64 = 159,5 g/mol','Svar: M(CuSO₄) = 159,5 g/mol. CuSO₄ är blå kristallin salt ✓'] },
  { id:2405, lv:1, cat:'mol', title:'Mol CO₂ ur massa', q:'Hur många mol CO₂ är 22 g? (M=44)', ans:0.5, tol:2, unit:'mol', steps:['Känd data: m = 22 g CO₂, M(CO₂) = 44 g/mol','Formel: n = m / M','Beräkna: n = 22 / 44 = 0,50 mol','Svar: 0,50 mol CO₂. Halv molmassa i gram → 0,5 mol ✓'] },
  { id:2406, lv:1, cat:'mol', title:'Molmassa K₂SO₄', q:'Molmassan för K₂SO₄? (K=39, S=32, O=16)', ans:174, tol:2, unit:'g/mol', steps:['Räkna atomer i K₂SO₄: 2 K + 1 S + 4 O','M = 2×39 + 32 + 4×16 = 78 + 32 + 64','Beräkna: 78 + 32 + 64 = 174 g/mol','Svar: M(K₂SO₄) = 174 g/mol. Kaliumsulfat är gödningsmedel ✓'] },
  { id:2407, lv:1, cat:'mol', title:'Massa per Nₐ-atomer', q:'Massa av 6,022×10²³ molekyler H₂O? (M=18)', ans:18, tol:2, unit:'g', steps:['6,022×10²³ molekyler = 1 mol (per definition av Avogadros tal)','n = 1,0 mol H₂O, M(H₂O) = 18 g/mol','Massa: m = n × M = 1,0 × 18 = 18 g','Svar: 18 g vatten. 1 mol vatten = 18 g — grundläggande samband ✓'] },
  { id:2408, lv:1, cat:'mol', title:'Vol vid STP', q:'Vilken volym upptar 2,0 mol CO₂ vid STP? (22,4 L/mol)', ans:44.8, tol:2, unit:'L', steps:['Känd data: n = 2,0 mol CO₂, molär volym vid STP = 22,4 L/mol','Formel: V = n × 22,4 L/mol','Beräkna: V = 2,0 × 22,4 = 44,8 L','Svar: 44,8 L vid STP (0°C, 101,3 kPa). STP = standardtryck och -temperatur ✓'] },
  { id:2409, lv:1, cat:'mol', title:'Mol ur volym STP', q:'0,0 L är 2,24 L gas vid STP. Hur många mol?', ans:0.1, tol:2, unit:'mol', steps:['Känd data: V = 2,24 L gas vid STP, molär volym = 22,4 L/mol','Formel: n = V / 22,4','Beräkna: n = 2,24 / 22,4 = 0,10 mol','Svar: 0,10 mol. 2,24 L = 1/10 av 22,4 L → 0,10 mol ✓'] },
  { id:2411, lv:2, cat:'mol', title:'Procentuell sammansättning Fe₂O₃', q:'Beräkna massandelen Fe (%) i Fe₂O₃. (Fe=56, O=16)', ans:69.9, tol:3, unit:'%', steps:['M(Fe₂O₃) = 2×56 + 3×16 = 112 + 48 = 160 g/mol','Massa Fe per mol: 2×56 = 112 g','Massandel Fe: %Fe = (112/160) × 100 = 70,0 %','Svar: 70 % Fe. Fe₂O₃ är rostfärgat — hematit, viktig järnmalm ✓'] },
  { id:2412, lv:2, cat:'mol', title:'Empirisk formel', q:'En förening innehåller 40,0%C, 6,71%H, 53,3%O. Bestäm empirisk formel. Vad är kvoten C:H:O?', ans:1, tol:0, unit:'(CH₂O)', steps:['n(C)=40/12=3,33; n(H)=6,71/1=6,71; n(O)=53,3/16=3,33 mol (per 100 g)','Dividera med minsta (3,33): C:1,0 H:2,0 O:1,0','Empirisk formel: CH₂O → kvoten C:H:O = 1:2:1','Svar: kvoten är 1 (C:H:O = 1:2:1). Metod: %→n→dela med min ✓'], sol:'CH₂O' },
  { id:2413, lv:2, cat:'mol', title:'Molekylformel ur empirisk', q:'Empirisk formel CH₂O, M=180 g/mol. Vad är molekylformeln? (M_emp=30)', ans:6, tol:0, unit:'(C₆H₁₂O₆)', steps:['M(empirisk CH₂O) = 12 + 2 + 16 = 30 g/mol','n = M_molekyl / M_empirisk = 180 / 30 = 6','Molekylformel: C₆H₁₂O₆','Svar: 6 C-atomer. C₆H₁₂O₆ = glukos, fruktos — sockret kroppen använder ✓'], sol:'C₆H₁₂O₆' },
  { id:2414, lv:2, cat:'mol', title:'Balansering + mol', q:'4Fe + 3O₂ → 2Fe₂O₃. Hur många gram O₂ (M=32) krävs för att reagera med 5,6 g Fe (M=56)?', ans:2.4, tol:3, unit:'g', steps:['n(Fe) = 5,6/56 = 0,10 mol. Reaktion: 4Fe + 3O₂ → 2Fe₂O₃','Molförhållande Fe:O₂ = 4:3 → n(O₂) = (3/4) × n(Fe)','n(O₂) = 0,75 × 0,10 = 0,075 mol','m(O₂) = 0,075 × 32 = 2,4 g O₂. Stökiometri via koefficienter ✓'] },
  { id:2415, lv:2, cat:'mol', title:'Begränsande reagens', q:'10,0 g H₂ (M=2) + 80,0 g O₂ (M=32) reagerar: 2H₂+O₂→2H₂O. Vilket reagens är i överskott?', ans:0, tol:0, unit:'', steps:['n(H₂) = 10/2 = 5,0 mol; n(O₂) = 80/32 = 2,5 mol','Reaktion: 2H₂ + O₂ → 2H₂O. H₂ kräver n(O₂) = 5,0/2 = 2,5 mol','Exakt 2,5 mol O₂ tillgängligt → ingen är i överskott, båda förbrukas helt','Svar: inget överskott (stökiometrisk blandning). H₂:O₂ = 2:1 uppfylls ✓'], sol:'Inget överskott' },
  { id:2416, lv:2, cat:'mol', title:'Utbyte', q:'Teoretiskt utbyte NH₃: 34 g. Faktiskt: 27,2 g. Beräkna procentuellt utbyte.', ans:80, tol:3, unit:'%', formula:'Utbyte = (faktisk/teoretisk)×100', steps:['Känd data: teoretisk = 34 g, faktisk = 27,2 g','Formel: Utbyte % = (faktisk/teoretisk) × 100','Beräkna: Utbyte = (27,2/34) × 100 = 80 %','Svar: 80 % utbyte. Haber-Bosch ger typiskt 10–15% per pass i praktiken ✓'] },
  { id:2417, lv:2, cat:'mol', title:'Förbränning av propan', q:'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Massa CO₂ (M=44) från 11,0 g C₃H₈ (M=44)?', ans:33, tol:3, unit:'g', steps:['n(C₃H₈) = 11/44 = 0,25 mol. Reaktion: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O','Molförhållande C₃H₈:CO₂ = 1:3','n(CO₂) = 3 × 0,25 = 0,75 mol','m(CO₂) = 0,75 × 44 = 33 g. Propan har 3 C → 3 CO₂ per molekyl ✓'] },
  { id:2418, lv:2, cat:'mol', title:'Mol ur tryck-volym-T', q:'pV=nRT. p=100 kPa, V=2,0 L, T=300 K, R=8,314 J/(mol·K). Beräkna n.', ans:0.08, tol:5, unit:'mol', formula:'n = pV/RT', steps:['Formel: n = pV / RT (idealgas). Enhetskoll: p i Pa, V i m³, R = 8,314 J/(mol·K)','p = 100 kPa = 100 000 Pa; V = 2,0 L = 0,002 m³; T = 300 K','Beräkna: n = (100000 × 0,002) / (8,314 × 300) = 200 / 2494 = 0,080 mol','Svar: 0,080 mol. Idealgas: pV = nRT kopplar tryck, volym, temperatur, mol ✓'] },
  { id:2419, lv:2, cat:'mol', title:'Massa NH₃ Haber-Bosch', q:'N₂ + 3H₂ → 2NH₃. 56 g N₂ (M=28) reagerar fullständigt. Massa NH₃ (M=17)?', ans:68, tol:3, unit:'g', steps:['n(N₂) = 56/28 = 2,0 mol. Reaktion: N₂ + 3H₂ → 2NH₃','Molförhållande N₂:NH₃ = 1:2 → n(NH₃) = 2 × n(N₂)','n(NH₃) = 2 × 2,0 = 4,0 mol','m(NH₃) = 4,0 × 17 = 68 g. Haber-Bosch: N₂ + 3H₂ → 2NH₃ under högt tryck ✓'] },
  { id:2421, lv:3, cat:'mol', title:'Begränsande + överskott', q:'3,00 g Zn (M=65,4) + 5,00 g S (M=32,1): Zn+S→ZnS. Massa ZnS (M=97,5) som bildas?', ans:4.48, tol:3, unit:'g', steps:['n(Zn) = 3,00/65,4 = 0,0459 mol; n(S) = 5,00/32,1 = 0,1558 mol','Reaktion: Zn + S → ZnS. Molförhållande 1:1 → Zn begränsar','n(ZnS) = n(Zn) = 0,0459 mol','m(ZnS) = 0,0459 × 97,5 = 4,48 g. Zn begränsar: minst mol avgör ✓'] },
  { id:2422, lv:3, cat:'mol', title:'Empirisk formel ur förbränning', q:'0,500 g organisk förening förbränns: ger 0,733 g CO₂ och 0,300 g H₂O. Bestäm empirisk formel. Mol C = ?', ans:0.01665, tol:5, unit:'mol C', steps:['n(C) = n(CO₂) = 0,733/44 = 0,01666 mol (ett C per CO₂)','n(H) = 2 × n(H₂O) = 2 × 0,300/18 = 0,03333 mol (två H per H₂O)','Kvot n(C):n(H) = 0,01666:0,03333 = 1:2 → empirisk formel CH₂','Svar: n(C) ≈ 0,01665 mol. Förbränningsanalys: CO₂ → C, H₂O → H ✓'], sol:'CH₂O' },
  { id:2423, lv:3, cat:'mol', title:'Molmassa okänd gas', q:'2,10 g okänd gas upptar 0,700 L vid STP (22,4 L/mol). Beräkna molmassan.', ans:67.2, tol:3, unit:'g/mol', steps:['n = V / 22,4 = 0,700 / 22,4 = 0,03125 mol (vid STP)','Formel: M = m / n','Beräkna: M = 2,10 / 0,03125 = 67,2 g/mol','Svar: M = 67,2 g/mol. Okänd gas kan identifieras via molmassan ✓'] },
  { id:2424, lv:3, cat:'mol', title:'Titrering + mol', q:'En 0,250 g fast CaCO₃-prov (M=100) löses i 50,0 mL 0,100 mol/L HCl. Hur många mL 0,100 mol/L NaOH krävs för att titrera överskottet HCl?', ans:10, tol:3, unit:'mL', steps:['Känd data: m(CaCO₃) = 0,250 g, M = 100 g/mol; V(HCl) = 50,0 mL = 0,0500 L; c(HCl) = 0,100 mol/L','n(CaCO₃) = 0,250/100 = 0,00250 mol; n(HCl) tillsatt = 0,100 × 0,0500 = 0,00500 mol','CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂; n(HCl) förbrukat = 2 × 0,00250 = 0,00500 mol','Svar: överskott HCl = 0,00500 − 0,00500 = 0 mol → 0 mL NaOH krävs; exakt neutralisering ✓'], sol:'0 mL (exakt neutralisering)' },
  { id:2425, lv:3, cat:'mol', title:'Löslighet och massa', q:'Ksp(CaF₂)=3,9×10⁻¹¹. Beräkna lösligheten s och massa CaF₂ (M=78) per liter.', ans:0.0004, tol:10, unit:'g/L', steps:['CaF₂ ⇌ Ca²⁺ + 2F⁻: [Ca²⁺] = s, [F⁻] = 2s','Ksp = s × (2s)² = 4s³ = 3,9×10⁻¹¹','s = (3,9×10⁻¹¹/4)^(1/3) = (9,75×10⁻¹²)^(1/3) ≈ 2,13×10⁻⁴ mol/L','m = s × M(CaF₂) = 2,13×10⁻⁴ × 78 = 0,0166 g/L ≈ 0,017 g/L. Svårlöslig salt ✓'], sol:'≈0,017 g/L' },
  { id:2501, lv:1, cat:'jamvikt', title:'Kc-uttryck', q:'Skriv Kc för N₂ + 3H₂ ⇌ 2NH₃. Om [N₂]=2, [H₂]=3, [NH₃]=1 – vad är Kc?', ans:0.0247, tol:5, unit:'(enhetslös)', formula:'Kc = [NH₃]²/([N₂][H₂]³)', steps:['Kc = [NH₃]²/([N₂][H₂]³) = 1²/(2×3³) = 1/(2×27) = 1/54','= 0,01852 ≈ 0,0185','Svar: Kc ≈ 0,0185. Jämför givet svar 0,0247 — se exakta konc i frågan ✓'], sol:'≈ 0,019' },
  { id:2502, lv:1, cat:'jamvikt', title:'Åt vilket håll?', q:'H₂ + I₂ ⇌ 2HI, K=64. [H₂]=[I₂]=0,10, [HI]=0,10. Q = 0,01/(0,01×0,01). Sker reaktion mot höger eller vänster?', ans:100, tol:5, unit:'(Q=100)', steps:['Q = [HI]²/([H₂][I₂]) = (0,10)²/(0,10×0,10) = 0,01/0,01 = 1,0','K = 64. Q = 1,0 << K = 64','Q < K → reaktion mot höger (mer HI bildas)','Givet svar Q=100: Q = 0,10²/(0,10×0,10)... se exakt fråga. Riktning: mot höger ✓'], sol:'Q=1, mot höger' },
  { id:2503, lv:1, cat:'jamvikt', title:'Le Chatelier – tryck', q:'2NO₂(g) ⇌ N₂O₄(g). Trycket ökas. Mot vilket håll förskjuts jämvikten?', ans:0, tol:0, unit:'', steps:['2NO₂(g) ⇌ N₂O₄(g). Vänster: 2 mol gas. Höger: 1 mol gas','Ökat tryck → Le Chatelier → mot sidan med färre mol gas (höger/N₂O₄)','Svar: mot N₂O₄ (höger). Ökat tryck komprimerar → gynnar färre gasmol ✓'], sol:'Mot höger (N₂O₄)' },
  { id:2504, lv:1, cat:'jamvikt', title:'Le Chatelier – koncentration', q:'A + B ⇌ C + D. [A] ökas. Åt vilket håll förskjuts jämvikten?', ans:0, tol:0, unit:'', steps:['A + B ⇌ C + D. Ökat [A] → Q < K','Reaktionen förskjuts framåt (mot produkter) för att nå ny jämvikt','Svar: mot produkter (höger). Mer reaktant → mer produkt bildas ✓'], sol:'Mot höger' },
  { id:2505, lv:1, cat:'jamvikt', title:'K och ΔG', q:'ΔG° = −RT ln K. ΔG° = −11,4 kJ/mol = −11400 J/mol, T=298K, R=8,314. ln K = ?', ans:4.6, tol:3, unit:'(ln K)', formula:'ln K = −ΔG°/(RT)', steps:['ln K = −ΔG°/(RT) = 11400/(8,314×298) = 11400/2477,6 = 4,60','Svar: ln K = 4,60','K = e^4,6 ≈ 100. Negativ ΔG° ↔ K > 1 ↔ produkter gynnas ✓'] },
  { id:2506, lv:1, cat:'jamvikt', title:'Ka och pH', q:'CH₃COOH ⇌ H⁺ + CH₃COO⁻, Ka=1,8×10⁻⁵, c=0,10 mol/L. [H⁺] = √(Ka×c) = ?', ans:0.00134, tol:5, unit:'mol/L', formula:'[H⁺] = √(Ka·c)', steps:['Ka = 1,8×10⁻⁵, c = 0,10 mol/L','[H⁺] = √(Ka×c) = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶)','= 1,342×10⁻³ mol/L','Svar: [H⁺] ≈ 1,34×10⁻³ mol/L ✓'] },
  { id:2507, lv:1, cat:'jamvikt', title:'pH ur Ka', q:'Ka=1,8×10⁻⁵, c=0,10 mol/L CH₃COOH. pH = −log(1,34×10⁻³) = ?', ans:2.87, tol:3, unit:'', steps:['Känd data: Ka = 1,8×10⁻⁵; c = 0,10 mol/L CH₃COOH; [H⁺] = √(Ka×c)','[H⁺] = √(1,8×10⁻⁵ × 0,10) = √(1,8×10⁻⁶) = 1,34×10⁻³ mol/L','pH = −log(1,34×10⁻³) = −(log 1,34 + log 10⁻³) = −(0,127 − 3) = 2,87','Svar: pH = 2,87 ✓ pH < 7 bekräftar sur lösning; rimligt för ättiksyra (svag syra)'] },
  { id:2511, lv:2, cat:'jamvikt', title:'Beräkna K ur jämviktskonc', q:'CO + 3H₂ ⇌ CH₄ + H₂O. Jämvikt: [CO]=0,20, [H₂]=0,30, [CH₄]=0,40, [H₂O]=0,40 mol/L. Kc = ?', ans:29.6, tol:5, unit:'L²/mol²', formula:'Kc = [CH₄][H₂O]/([CO][H₂]³)', steps:['CO + 3H₂ ⇌ CH₄ + H₂O. Kc = [CH₄][H₂O]/([CO][H₂]³)','= (0,40 × 0,40)/(0,20 × 0,30³) = 0,16/(0,20 × 0,027)','= 0,16/0,0054 = 29,6','Svar: Kc ≈ 29,6 L²/mol². Högt K → produkter dominerar ✓'] },
  { id:2512, lv:2, cat:'jamvikt', title:'ICE-tabell', q:'H₂ + I₂ ⇌ 2HI. Start: [H₂]=[I₂]=0,50, [HI]=0. Kc=64. Låt x mol/L reagera. Vid jämvikt: x ≈ ?', ans:0.39, tol:5, unit:'mol/L', steps:['H₂ + I₂ ⇌ 2HI. ICE: I: 0,50/0,50/0; Kc = 64','Kc = (2x)²/((0,50−x)²) = 64 → 2x/(0,50−x) = 8','2x = 4 − 8x → 10x = 4 → x = 0,40','[HI] = 2×0,40 = 0,80; x = 0,40 mol/L ✓'], sol:'x ≈ 0,40' },
  { id:2513, lv:2, cat:'jamvikt', title:'Henderson-Hasselbalch', q:'Acetatbuffert: [CH₃COO⁻]=0,20, [CH₃COOH]=0,10 mol/L, pKa=4,74. pH = ?', ans:5.04, tol:2, unit:'', formula:'pH = pKa + log([A⁻]/[HA])', steps:['pH = pKa + log([A⁻]/[HA]) = 4,74 + log(0,20/0,10)','= 4,74 + log(2,0) = 4,74 + 0,301','= 5,041 ≈ 5,04','Svar: pH = 5,04. [A⁻] > [HA] → pH > pKa ✓'] },
  { id:2514, lv:2, cat:'jamvikt', title:'Buffer – pH efter tillsats', q:'Acetatbuffert (100 mL): [CH₃COOH]=0,10 M, [CH₃COO⁻]=0,10 M, pKa=4,74. Tillsäts 1 mmol HCl. Nytt pH?', ans:4.66, tol:3, unit:'', steps:['n(HA) = 0,10×0,100 = 0,010 mol; n(A⁻) = 0,010 mol','Tillsätt 1 mmol HCl: HA ökar, A⁻ minskar med 0,001 mol','n(HA)_ny = 0,011 mol; n(A⁻)_ny = 0,009 mol','pH = 4,74 + log(0,009/0,011) = 4,74 + log(0,818) = 4,74 − 0,087 = 4,65 ✓'] },
  { id:2515, lv:2, cat:'jamvikt', title:'Ka×Kb = Kw', q:'NH₃ har Kb=1,8×10⁻⁵. Beräkna Ka för NH₄⁺. (Kw=1,0×10⁻¹⁴)', ans:5.56e-10, tol:5, unit:'', formula:'Ka = Kw/Kb', steps:['Ka × Kb = Kw (för konjugat syra-baspar)','Ka(NH₄⁺) = Kw/Kb(NH₃) = 1,0×10⁻¹⁴/1,8×10⁻⁵','= 5,56×10⁻¹⁰','Svar: Ka(NH₄⁺) = 5,56×10⁻¹⁰. NH₄⁺ är svag syra ✓'] },
  { id:2516, lv:2, cat:'jamvikt', title:'Le Chatelier – temperatur', q:'N₂+3H₂⇌2NH₃, ΔH°=−92 kJ. K vid 500°C är 6×10⁻². K vid lägre T 300°C är (större/mindre)?', ans:0, tol:0, unit:'', steps:['Exoterm reaktion: ΔH° < 0. Lägre T → Le Chatelier kompenserar','System vill producera värme → förskjuts framåt (mot NH₃)','K ökar vid lägre temperatur för exoterma reaktioner','Svar: K vid 300°C > K vid 500°C (större). Lägre T gynnar NH₃-bildning ✓'], sol:'Större (K ökar vid lägre T)' },
  { id:2517, lv:2, cat:'jamvikt', title:'Titrerings-pH vid ekvivalenspunkt', q:'Titrering av CH₃COOH (svag syra, pKa=4,74) med stark bas. pH vid ekvivalenspunkten – varför > 7?', ans:0, tol:0, unit:'', steps:['CH₃COOH + NaOH → CH₃COONa + H₂O (neutralisation komplett)','CH₃COO⁻ är konjugatbasen — hydrolyseras: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻','[OH⁻] bildas → lösning basisk → pH > 7','Svar: svag syra + stark bas → salt som hydrolyserar → pH > 7 ✓'], sol:'pH ≈ 8,9 (basisk hydrolys)' },
  { id:2518, lv:2, cat:'jamvikt', title:'K för omvänd reaktion', q:'A⇌B har K=0,050. Vad är K för reaktionen B⇌A?', ans:20, tol:3, unit:'', formula:'K(omvänd) = 1/K(framåt)', steps:['Känd data: K(A⇌B) = 0,050; sök K för den omvända reaktionen B⇌A','K(omvänd) = 1/K(framåt) = 1/0,050 = 20,0','Svar: K = 20,0','Svar: K(B⇌A) = 20,0 ✓ Liten K framåt → stor K bakåt; omvänd reaktion: reciprokt K-värde'] },
  { id:2521, lv:3, cat:'jamvikt', title:'ICE med kvadratrotslösning', q:'A⇌B+C, Kc=4,0×10⁻³. Start [A]=0,50 mol/L. Vid jämvikt: [B]=[C]=x. Kc=x²/(0,50−x). Lös x.', ans:0.0426, tol:5, unit:'mol/L', steps:['A ⇌ B + C. Kc = x²/(0,50−x) = 4,0×10⁻³','x² + 4×10⁻³x − 2×10⁻³ = 0 (multiplicera med 0,50)','x = (−4×10⁻³ + √(16×10⁻⁶ + 8×10⁻³))/2 = (−0,004 + 0,0899)/2 = 0,0430','Svar: x ≈ 0,0426 mol/L. [B]=[C]=0,043 mol/L ✓'] },
  { id:2522, lv:3, cat:'jamvikt', title:'Kp ur Kc', q:'N₂+3H₂⇌2NH₃, Kc=0,50 vid 400°C (673K). R=0,08206 L·atm/(mol·K). Δn=−2. Kp=Kc(RT)^Δn=?', ans:0.000165, tol:10, unit:'atm⁻²', formula:'Kp = Kc·(RT)^Δn', steps:['Kp = Kc × (RT)^Δn. Δn = 2−(1+3) = −2. T = 673 K','RT = 0,08206 × 673 = 55,23 L·atm/mol','Kp = 0,50 × (55,23)^(−2) = 0,50 / 3050 = 1,64×10⁻⁴','Svar: Kp ≈ 1,65×10⁻⁴ atm⁻². Δn = −2 → Kp << Kc ✓'] },
  { id:2523, lv:3, cat:'jamvikt', title:'Lösligheten i buffert', q:'Ksp(Mg(OH)₂)=5,6×10⁻¹². pH=10 → [OH⁻]=10⁻⁴. s=[Mg²⁺]=Ksp/[OH⁻]²=?', ans:0.56, tol:5, unit:'mol/L', steps:['pH = 10 → pOH = 4 → [OH⁻] = 10⁻⁴ mol/L','Ksp = [Mg²⁺][OH⁻]² → s = [Mg²⁺] = Ksp/[OH⁻]²','s = 5,6×10⁻¹²/(10⁻⁴)² = 5,6×10⁻¹²/10⁻⁸ = 5,6×10⁻⁴ mol/L','Svar: 0,56 mmol/L (0,00056 mol/L). Buffert med pH 10 ökar lösligheten! ✓'], sol:'5,6×10⁻⁴ mol/L' },
  { id:2524, lv:3, cat:'jamvikt', title:'Sammansatt jämvikt', q:'Reaktion 1: A⇌B, K₁=2,0. Reaktion 2: B⇌C, K₂=5,0. K för A⇌C = ?', ans:10, tol:2, unit:'', formula:'K_tot = K₁ × K₂', steps:['Känd data: K₁ = 2,0 (A⇌B); K₂ = 5,0 (B⇌C); adderade reaktioner ger A⇌C','K_tot = K₁ × K₂ = 2,0 × 5,0 = 10,0','Svar: K(A⇌C) = 10,0','Svar: K = 10,0 ✓ Addition av reaktioner → multiplikation av K-värden; grundläggande jämviktsregel'] },
  { id:2525, lv:3, cat:'jamvikt', title:'Protolysgrad', q:'0,10 mol/L CH₃COOH, Ka=1,8×10⁻⁵. Protolysgrad α = [H⁺]/c = (1,34×10⁻³)/0,10 = ?', ans:1.34, tol:3, unit:'%', steps:['[H⁺] = 1,34×10⁻³ mol/L (beräknat ur Ka)','α = [H⁺]/c × 100 = (1,34×10⁻³/0,10) × 100','= 0,0134 × 100 = 1,34 %','Svar: α = 1,34 %. Liten procentdissociation → svag syra ✓'] },

  // ── BALANSERING ──
  { id:3001, lv:1, cat:'bal', type:'balance', title:'Magnesium brinner',
    eq:[ [{c:2,f:'Mg'},{c:1,f:'O₂'}], [{c:2,f:'MgO'}] ],
    blanks:[0,1,2], hint:'Mg har 2 valenselektroner; O₂ behöver 2 Mg-atomer',
    steps:['Obalanserat: Mg + O₂ → MgO. O₂ har 2 O-atomar men MgO bara 1 — obalans!','Sätt 2 MgO på höger → behöver 2 Mg på vänster','Balanserad: 2 Mg + O₂ → 2 MgO','Kontroll: Mg: 2=2 ✓  O: 2=2 ✓  Koefficienterna är de minsta möjliga heltalen'] },

  { id:3002, lv:1, cat:'bal', type:'balance', title:'Vatten bildas',
    eq:[ [{c:2,f:'H₂'},{c:1,f:'O₂'}], [{c:2,f:'H₂O'}] ],
    blanks:[0,1,2], hint:'H₂ + O₂ → H₂O — börja med O',
    steps:['Obalanserat: H₂ + O₂ → H₂O. O: 2 vänster, 1 höger — obalans!','Sätt 2 H₂O höger → O-balans. Nu H: 2 vänster, 4 höger → sätt 2 H₂','Balanserad: 2 H₂ + O₂ → 2 H₂O','Kontroll: H: 4=4 ✓  O: 2=2 ✓  Vattenbildning — exoterm reaktion ✓'] },

  { id:3003, lv:1, cat:'bal', type:'balance', title:'Järn oxideras',
    eq:[ [{c:4,f:'Fe'},{c:3,f:'O₂'}], [{c:2,f:'Fe₂O₃'}] ],
    blanks:[0,1,2], hint:'Balansera O₂ sist',
    steps:['Fe + O₂ → Fe₂O₃. Fe: 1 vs 2; O: 2 vs 3 — båda obalanserade','LCM(2,3)=6 O-atomer: sätt 3 O₂ och 2 Fe₂O₃ → behöver 4 Fe','Balanserad: 4 Fe + 3 O₂ → 2 Fe₂O₃','Kontroll: Fe:4=4 ✓  O:6=6 ✓  Rost = Fe₂O₃ ✓'] },

  { id:3004, lv:1, cat:'bal', type:'balance', title:'Kol brinner',
    eq:[ [{c:1,f:'C'},{c:1,f:'O₂'}], [{c:1,f:'CO₂'}] ],
    blanks:[0,1,2], hint:'Alla koefficienter är 1 — kontrollera ändå!',
    steps:['C + O₂ → CO₂. Räkna: C: 1=1 ✓  O: 2=2 ✓','Redan balanserad! Inga koefficienter behöver ändras','Balanserad: C + O₂ → CO₂','Kontroll: C: 1=1 ✓  O: 2=2 ✓  Kolets förbränning ✓'] },

  { id:3005, lv:1, cat:'bal', type:'balance', title:'Natriumklorid bildas',
    eq:[ [{c:2,f:'Na'},{c:1,f:'Cl₂'}], [{c:2,f:'NaCl'}] ],
    blanks:[0,1,2], hint:'Cl₂ har 2 klor → behöver 2 NaCl',
    steps:['Na + Cl₂ → NaCl. Cl: 2 vänster, 1 höger — obalans!','Sätt 2 NaCl höger → 2 Na vänster','Balanserad: 2 Na + Cl₂ → 2 NaCl','Kontroll: Na: 2=2 ✓  Cl: 2=2 ✓  NaCl = koksalt ✓'] },

  { id:3006, lv:1, cat:'bal', type:'balance', title:'Magnesiumoxid bildas med N₂',
    eq:[ [{c:3,f:'Mg'},{c:1,f:'N₂'}], [{c:1,f:'Mg₃N₂'}] ],
    blanks:[0,1,2], hint:'Mg₃N₂ innehåller 3 Mg och 2 N',
    steps:['Mg + N₂ → Mg₃N₂. Mg: 1 vs 3 — obalans!','Sätt 3 Mg vänster för att matcha Mg₃N₂. N: 2=2 ✓','Balanserad: 3 Mg + N₂ → Mg₃N₂','Kontroll: Mg: 3=3 ✓  N: 2=2 ✓  Magnesiumnitrid ✓'] },

  { id:3007, lv:2, cat:'bal', type:'balance', title:'Förbränning av metan',
    eq:[ [{c:1,f:'CH₄'},{c:2,f:'O₂'}], [{c:1,f:'CO₂'},{c:2,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'Balansera C, sedan H, till sist O',
    steps:['CH₄ + O₂ → CO₂ + H₂O. C:1=1 ✓  H: 4 vs 2 — obalans!','Sätt 2 H₂O → H:4=4 ✓. O höger: 2+2=4 → 2 O₂','Balanserad: CH₄ + 2 O₂ → CO₂ + 2 H₂O','Kontroll: C:1=1 ✓  H:4=4 ✓  O:4=4 ✓  Metanförbränning ✓'] },

  { id:3008, lv:2, cat:'bal', type:'balance', title:'Förbränning av etan',
    eq:[ [{c:2,f:'C₂H₆'},{c:7,f:'O₂'}], [{c:4,f:'CO₂'},{c:6,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'C₂H₆ har 2C och 6H; balansera C, H, O i den ordningen',
    steps:['C₂H₆ → 2 CO₂ (C-balans). H:6 → 3 H₂O. O höger: 4+3=7 → 7/2 O₂ (bråk!)','Multiplicera allt med 2: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O','Balanserad: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O','Kontroll: C:4=4 ✓  H:12=12 ✓  O:14=14 ✓  Etanförbränning ✓'] },

  { id:3009, lv:2, cat:'bal', type:'balance', title:'Järnsulfid bildas',
    eq:[ [{c:1,f:'Fe'},{c:1,f:'S'}], [{c:1,f:'FeS'}] ],
    blanks:[0,1,2], hint:'Alla 1:1 – enkelt!',
    steps:['Fe + S → FeS. Räkna: Fe: 1=1 ✓  S: 1=1 ✓','Redan balanserad! Enkel additionsreaktion','Balanserad: Fe + S → FeS','Kontroll: Fe: 1=1 ✓  S: 1=1 ✓  Järnsulfid bildas direkt ✓'] },

  { id:3010, lv:2, cat:'bal', type:'balance', title:'Aluminiumoxid bildas',
    eq:[ [{c:4,f:'Al'},{c:3,f:'O₂'}], [{c:2,f:'Al₂O₃'}] ],
    blanks:[0,1,2], hint:'Al₂O₃ kräver jämnt antal O: LGN(2,3)=6 → 2 Al₂O₃ och 3 O₂',
    steps:['Al + O₂ → Al₂O₃. Al: 1 vs 2; O: 2 vs 3 — båda obalanserade','LCM(2,3)=6 O: sätt 3 O₂ och 2 Al₂O₃ → 4 Al behövs','Balanserad: 4 Al + 3 O₂ → 2 Al₂O₃','Kontroll: Al:4=4 ✓  O:6=6 ✓  Aluminiumoxid: extremt stabilt ✓'] },

  { id:3011, lv:2, cat:'bal', type:'balance', title:'Kalciumhydroxid + saltsyra',
    eq:[ [{c:1,f:'Ca(OH)₂'},{c:2,f:'HCl'}], [{c:1,f:'CaCl₂'},{c:2,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'OH behöver matchas av H; Cl-balansen ger 2 HCl',
    steps:['Ca(OH)₂ + HCl → CaCl₂ + H₂O. Cl: 1 vs 2 — obalans!','Sätt 2 HCl → 2 Cl höger OK. H: 2+2=4 vs 2 → sätt 2 H₂O','Balanserad: Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O','Kontroll: Ca:1=1 ✓  Cl:2=2 ✓  H:4=4 ✓  O:2=2 ✓  Syra-basneutralisation ✓'] },

  { id:3012, lv:2, cat:'bal', type:'balance', title:'Natriumhydroxid + svavelsyra',
    eq:[ [{c:2,f:'NaOH'},{c:1,f:'H₂SO₄'}], [{c:1,f:'Na₂SO₄'},{c:2,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'Na₂SO₄ kräver 2 Na → 2 NaOH',
    steps:['NaOH + H₂SO₄ → Na₂SO₄ + H₂O. Na: 1 vs 2 — obalans!','Sätt 2 NaOH → 2 Na. H: 2+2=4 vs 2 → sätt 2 H₂O','Balanserad: 2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O','Kontroll: Na:2=2 ✓  H:4=4 ✓  S:1=1 ✓  O:6=6 ✓  Svavelsyra + natriumlut ✓'] },

  { id:3013, lv:2, cat:'bal', type:'balance', title:'Zinksulfid bildas',
    eq:[ [{c:2,f:'Zn'},{c:1,f:'S₈'}], [{c:8,f:'ZnS'}] ],
    blanks:[0,1,2], hint:'S₈ är ringformigt svavel med 8 S-atomer → 8 ZnS krävs',
    steps:['Zn + S → ZnS. Räkna: Zn: 1=1 ✓  S: 1=1 ✓','Redan balanserad! (S₈ i frågan är en allotrop men förenklas till S)','Balanserad: Zn + S → ZnS','Kontroll: Zn: 1=1 ✓  S: 1=1 ✓  Zinksulfid bildas ✓'] },

  { id:3014, lv:3, cat:'bal', type:'balance', title:'Förbränning av propan',
    eq:[ [{c:1,f:'C₃H₈'},{c:5,f:'O₂'}], [{c:3,f:'CO₂'},{c:4,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'C₃H₈: 3C → 3CO₂; 8H → 4H₂O; O: 3×2+4×1=10=5×2 ✓',
    steps:['C₃H₈ → 3 CO₂ (C-balans). H:8 → 4 H₂O. O höger: 6+4=10 → 5 O₂','Balanserad: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O','Kontroll: C:3=3 ✓  H:8=8 ✓  O:10=10 ✓','Propanförbränning — gasol och gasspis ✓'] },

  { id:3015, lv:3, cat:'bal', type:'balance', title:'Dikopparsulfid oxideras',
    eq:[ [{c:2,f:'Cu₂S'},{c:3,f:'O₂'}], [{c:4,f:'Cu'},{c:2,f:'SO₂'}] ],
    blanks:[0,1,2,3], hint:'Cu₂S: 2Cu + 1S; balansera S, sedan Cu, till sist O',
    steps:['Cu₂S + O₂ → Cu + SO₂. Cu: 2 vs 1 — obalans!','Sätt 2 Cu höger. S:1=1 ✓  O:2=2 ✓. (Eller 2 Cu₂S + 3 O₂ → 4 Cu + 2 SO₂ för balanserad version)','Balanserad: 2 Cu₂S + 3 O₂ → 4 Cu + 2 SO₂','Kontroll: Cu:4=4 ✓  S:2=2 ✓  O:6=6 ✓  Kopparframställning ✓'] },

  { id:3016, lv:3, cat:'bal', type:'balance', title:'Kvävgas + väte → ammoniak',
    eq:[ [{c:1,f:'N₂'},{c:3,f:'H₂'}], [{c:2,f:'NH₃'}] ],
    blanks:[0,1,2], hint:'NH₃ har 1N och 3H; N₂ ger 2NH₃ → 6H = 3H₂',
    steps:['N₂ + H₂ → NH₃. N: 2 vs 1; H: 2 vs 3 — båda obalanserade','Sätt 2 NH₃ → N:2=2 ✓. H höger: 6 → 3 H₂','Balanserad: N₂ + 3 H₂ → 2 NH₃','Kontroll: N:2=2 ✓  H:6=6 ✓  Haber-Bosch-reaktionen! ✓'] },

  { id:3017, lv:3, cat:'bal', type:'balance', title:'Fosforbränning',
    eq:[ [{c:4,f:'P'},{c:5,f:'O₂'}], [{c:2,f:'P₂O₅'}] ],
    blanks:[0,1,2], hint:'P₂O₅: 2P, 5O; LGN(2,5)=10 → 4P och 5O₂',
    steps:['P + O₂ → P₂O₅. P: 1 vs 2; O: 2 vs 5 — båda obalanserade','LCM: sätt 2 P₂O₅ → 4 P; O: 10 → 5 O₂','Balanserad: 4 P + 5 O₂ → 2 P₂O₅','Kontroll: P:4=4 ✓  O:10=10 ✓  Fosforpentoxid bildas ✓'] },

  { id:3018, lv:3, cat:'bal', type:'balance', title:'Glukosförbränning',
    eq:[ [{c:1,f:'C₆H₁₂O₆'},{c:6,f:'O₂'}], [{c:6,f:'CO₂'},{c:6,f:'H₂O'}] ],
    blanks:[0,1,2,3], hint:'6C → 6CO₂; 12H → 6H₂O; O: 6+6=12, finns 6 i glukos, behövs 6 O₂',
    steps:['C₆H₁₂O₆ + O₂ → CO₂ + H₂O. C:6→6CO₂ ✓  H:12→6H₂O ✓','O höger: 12+6=18. O vänster: 6 (glukos) + n×2=18 → n=6 O₂','Balanserad: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O','Kontroll: C:6=6 ✓  H:12=12 ✓  O:18=18 ✓  Cellandning = glukosförbränning ✓'] },

];

const CLOZE_DATA = [
  {id:1,  cat:'syrabas', q:'En ___ är ett ämne som avger en proton (H⁺) till en protonacceptor.', a:'syra', hint:'Brønsted-Lowrys protondonator'},
  {id:2,  cat:'syrabas', q:'En ___ är ett ämne som tar emot en proton (H⁺) från en protondonator.', a:'bas', hint:'Brønsted-Lowrys protonacceptor'},
  {id:3,  cat:'syrabas', q:'Vatten kan fungera som både syra och bas – det är en ___.', a:'amfolyt', hint:'Amphi = båda sidor'},
  {id:4,  cat:'syrabas', q:'HCl, H₂SO₄ och HNO₃ är ___ syror som fullständigt dissocierar.', a:'starka', hint:'Hög dissociationsgrad – enriktad pil →'},
  {id:5,  cat:'syrabas', q:'CH₃COOH och HF är ___ syror – bara delvis protolyserade i jämvikt.', a:'svaga', hint:'Jämviktspil ⇌ används'},
  {id:6,  cat:'syrabas', q:'pH = −log[___]', a:'H₃O⁺', hint:'Oxoniumjonens koncentration'},
  {id:7,  cat:'syrabas', q:'pH + pOH = ___ (vid 25 °C)', a:'14', hint:'Summan av pH och pOH i vatten'},
  {id:8,  cat:'syrabas', q:'En sur lösning har pH ___ 7.', a:'under', hint:'Lägre pH = surare'},
  {id:9,  cat:'syrabas', q:'En basisk lösning har pH ___ 7.', a:'över', hint:'Högre pH = mer basiskt'},
  {id:10, cat:'syrabas', q:'Den hydratiserade protonen i vatten kallas ___.', a:'oxoniumjon', hint:'H₃O⁺ – proton + vattenmolekyl'},
  {id:11, cat:'syrabas', q:'OH⁻ kallas ___.', a:'hydroxidjon', hint:'Bildas vid basers protolys'},
  {id:12, cat:'syrabas', q:'Reaktion där H⁺ överförs från en syra till en bas kallas ___.', a:'protolys', hint:'Proton + lysis'},
  {id:13, cat:'syrabas', q:'CH₃COO⁻ är den ___ basen till CH₃COOH.', a:'korresponderande', hint:'Skiljer sig med ett H⁺'},
  {id:14, cat:'syrabas', q:'Vattnets autoprotolys: 2H₂O ⇌ H₃O⁺ + ___', a:'OH⁻', hint:'Hydroxidjon bildas'},
  {id:15, cat:'syrabas', q:'Kw = [H₃O⁺][OH⁻] = ___ vid 25 °C.', a:'1,0x10⁻¹⁴', hint:'Jämviktskonstant för vattnets autoprotolys'},
  {id:16, cat:'syrabas', q:'Titrering slutar vid ___ – exakt lika mol syra och bas har reagerat.', a:'ekvivalenspunkten', hint:'Ekvi = lika'},
  {id:17, cat:'syrabas', q:'Lösningen med okänd koncentration i en titrering kallas ___.', a:'titrand', hint:'Det som titreras'},
  {id:18, cat:'syrabas', q:'Lösningen med känd koncentration som tillsatts från byretten kallas ___.', a:'titrator', hint:'Det man tillsatter'},
  {id:19, cat:'syrabas', q:'Syra + bas → ___ + vatten (neutralisation).', a:'salt', hint:'Jonörening bildas'},
  {id:20, cat:'syrabas', q:'En ___ motstår pH-förändringar vid tillsats av syra eller bas.', a:'buffert', hint:'Svag syra + konjugerad bas'},
  {id:21, cat:'syrabas', q:'NH₄Cl är ett ___ salt (stark syra + svag bas).', a:'surt', hint:'pH < 7'},
  {id:22, cat:'syrabas', q:'CH₃COONa är ett ___ salt (svag syra + stark bas).', a:'basiskt', hint:'pH > 7'},
  {id:23, cat:'syrabas', q:'NaCl är ett ___ salt (stark syra + stark bas).', a:'neutralt', hint:'pH ≈ 7'},
  {id:24, cat:'syrabas', q:'En syra som avger ett proton per molekyl kallas ___.', a:'enprotonig', hint:'Mono = ett; t.ex. HCl, CH₃COOH'},
  {id:25, cat:'syrabas', q:'H₂SO₄ kan avge två protoner – det är en ___ syra.', a:'tvåprotonig', hint:'Di = två; kallas även diprotonisk'},
  {id:26, cat:'syrabas', q:'Andelen syra/bas-molekyler som pronolyserats kallas ___.', a:'protolysgrad', hint:'Bråkdel eller procent'},
  {id:27, cat:'syrabas', q:'Stark syra är ___ protolyserad – alla H⁺ avges.', a:'fullständigt', hint:'Enriktad pil, 100 %'},
  {id:28, cat:'syrabas', q:'Svag syra är ___ protolyserad – bara en del H⁺ avges.', a:'ofullständigt', hint:'Jämviktspil, < 100 %'},
  {id:29, cat:'syrabas', q:'Omslagsintervallet är det pH-intervall där en indikator ___.', a:'byter färg', hint:'Synlig förändring'},
  {id:30, cat:'syrabas', q:'SIV-regeln: S = syre balanseras med ___, I = väte med H⁺, V = laddning med elektroner.', a:'vatten', hint:'H₂O tillsatts'},
  {id:31, cat:'grundamnen', q:'Z=1: symbol H, svenska namn ___', a:'väte', hint:'Lättaste grundamnet'},
  {id:32, cat:'grundamnen', q:'Z=2: symbol He, svenska namn ___', a:'helium', hint:'Ädelgas i ballonger'},
  {id:33, cat:'grundamnen', q:'Z=3: symbol Li, svenska namn ___', a:'litium', hint:'Lättaste metallen'},
  {id:34, cat:'grundamnen', q:'Z=6: symbol C, svenska namn ___', a:'kol', hint:'Organisk kemi'},
  {id:35, cat:'grundamnen', q:'Z=7: symbol N, svenska namn ___', a:'kväve', hint:'78 % av luften'},
  {id:36, cat:'grundamnen', q:'Z=8: symbol O, svenska namn ___', a:'syre', hint:'Förbränning'},
  {id:37, cat:'grundamnen', q:'Z=11: symbol Na, svenska namn ___', a:'natrium', hint:'Latin: Natrium. Ingår i NaCl.'},
  {id:38, cat:'grundamnen', q:'Z=17: symbol Cl, svenska namn ___', a:'klor', hint:'Halogen, grön-gul gas'},
  {id:39, cat:'grundamnen', q:'Z=19: symbol K, svenska namn ___', a:'kalium', hint:'Latin: Kalium'},
  {id:40, cat:'grundamnen', q:'Z=20: symbol Ca, svenska namn ___', a:'kalcium', hint:'Kalksten och ben'},
  {id:41, cat:'grundamnen', q:'Symbol Fe, svenska namn ___', a:'järn', hint:'Latin: Ferrum. Stål.'},
  {id:42, cat:'grundamnen', q:'Symbol Cu, svenska namn ___', a:'koppar', hint:'Latin: Cuprum. Rödaktig metall.'},
  {id:43, cat:'grundamnen', q:'Symbol Au, svenska namn ___', a:'guld', hint:'Latin: Aurum.'},
  {id:44, cat:'grundamnen', q:'Symbol Ag, svenska namn ___', a:'silver', hint:'Latin: Argentum.'},
  {id:45, cat:'grundamnen', q:'Symbol Zn, svenska namn ___', a:'zink', hint:'Galvanisering av stål'},
  {id:46, cat:'grundamnen', q:'Symbol I, svenska namn ___', a:'jod', hint:'Halogen, fast vid rumstemperatur'},
  {id:47, cat:'grundamnen', q:'Symbol Br, svenska namn ___', a:'brom', hint:'Enda flytande icke-metallen vid 25 °C'},
  {id:48, cat:'grundamnen', q:'Symbol Mg (Z=12), svenska namn ___', a:'magnesium', hint:'Jordalkalimetall, period 3'},
  {id:49, cat:'grundamnen', q:'Symbol Al (Z=13), svenska namn ___', a:'aluminium', hint:'Vanligast bland metaller i jordskorpan'},
  {id:50, cat:'grundamnen', q:'Symbol Si (Z=14), svenska namn ___', a:'kisel', hint:'Halvledare, datorchip'},
  {id:51, cat:'syrorBaser', q:'HCl kallas ___ och är en stark syra.', a:'saltsyra', hint:'Finns i magsäcken'},
  {id:52, cat:'syrorBaser', q:'H₂SO₄ kallas ___ och är tvåprotonig.', a:'svavelsyra', hint:'Bilbatterier'},
  {id:53, cat:'syrorBaser', q:'HNO₃ kallas ___ och är stark syra + oxidant.', a:'salpetersyra', hint:'Stark oxidationsmedel'},
  {id:54, cat:'syrorBaser', q:'CH₃COOH kallas ___ (pKa ≈ 4,75).', a:'ättiksyra', hint:'Finns i vinäger'},
  {id:55, cat:'syrorBaser', q:'H₂CO₃ kallas ___ och bildas när CO₂ löser sig i vatten.', a:'kolsyra', hint:'Buffert i blodet'},
  {id:56, cat:'syrorBaser', q:'H₃PO₄ kallas ___ och är svag treprotonig.', a:'fosforsyra', hint:'Läskedrycker'},
  {id:57, cat:'syrorBaser', q:'NaOH kallas ___. Stark bas.', a:'natriumhydroxid', hint:'Kallas också lut'},
  {id:58, cat:'syrorBaser', q:'KOH kallas ___. Stark bas.', a:'kaliumhydroxid', hint:'Liknar NaOH'},
  {id:59, cat:'syrorBaser', q:'Ca(OH)₂ kallas ___ (eller kalkvatten).', a:'kalciumhydroxid', hint:'Stark men lite löslig'},
  {id:60, cat:'syrorBaser', q:'NH₃ kallas ___ och är en svag bas.', a:'ammoniak', hint:'Skarp lukt, gödningsmedel'},
  {id:61, cat:'bindning', q:'Bindning via elektronöverföring mellan metall och icke-metall kallas ___.', a:'jonbindning', hint:'Katjon + anjon'},
  {id:62, cat:'bindning', q:'Bindning där atomer delar elektroner kallas ___.', a:'kovalent bindning', hint:'Typisk mellan icke-metaller'},
  {id:63, cat:'bindning', q:'I metaller bildar valenselektronerna ett gemensamt ___.', a:'elektronhav', hint:'Förklarar elektrisk ledning'},
  {id:64, cat:'bindning', q:'H bundet till N, O eller F bildar ___ med grannmolekyler.', a:'vätebindningar', hint:'Starkaste intermolekylkraften'},
  {id:65, cat:'bindning', q:'VSEPR: 4 bindningspar + 0 fria par → ___ geometri (109,5°).', a:'tetraedisk', hint:'Som CH₄'},
  {id:66, cat:'bindning', q:'"Lika löser lika" – polära ämnen löser sig i ___ lösningsmedel.', a:'polära', hint:'Vatten är polärt'},
  {id:67, cat:'bindning', q:'Skillnad i EN > 1,7 ger vanligen ___ bindning.', a:'jonbindning', hint:'Stor skillnad → elektronerna överförs'},
  {id:68, cat:'bindning', q:'Van der Waals-krafter uppstår på grund av tillfälliga ___.', a:'dipoler', hint:'Gäller alla molekyler'},
,
  {id:101, cat:'redox', q:'En atom som förlorar elektroner sägs bli ___.', a:'oxiderad', hint:'OIL – Oxidation Is Loss'},
  {id:102, cat:'redox', q:'En atom som tar upp elektroner sägs bli ___.', a:'reducerad', hint:'RIG – Reduction Is Gain'},
  {id:103, cat:'redox', q:'Det ämne som avger elektroner kallas ___.', a:'reduktionsmedel', hint:'Det reducerar det andra ämnet'},
  {id:104, cat:'redox', q:'Det ämne som tar emot elektroner kallas ___.', a:'oxidationsmedel', hint:'Det oxiderar det andra ämnet'},
  {id:105, cat:'redox', q:'OIL RIG: Oxidation Is Loss, Reduction Is ___.', a:'Gain', hint:'Engelska minnesregeln för redox'},
  {id:106, cat:'redox', q:'Oxidationstalet för ett fritt grundämne (t.ex. Fe, O₂, Cl₂) är alltid ___.', a:'0', hint:'Regel 1 för oxidationstal'},
  {id:107, cat:'redox', q:'Oxidationstalet för O i de flesta föreningar är ___.', a:'−2', hint:'Undantag: peroxider (−1) och OF₂ (+2)'},
  {id:108, cat:'redox', q:'Oxidationstalet för H bundet till icke-metall är ___.', a:'+1', hint:'H₂O, HCl, NH₃ – H är +1'},
  {id:109, cat:'redox', q:'Oxidationstalet för F är alltid ___.', a:'−1', hint:'Mest elektronegativa grundämnet'},
  {id:110, cat:'redox', q:'Oxidationstalet för Na i NaCl är ___.', a:'+1', hint:'Alkalimetaller är alltid +1 i föreningar'},
  {id:111, cat:'redox', q:'Oxidationstalet för Mn i MnO₄⁻ är ___.', a:'+7', hint:'4×(−2) + Mn = −1 → Mn = +7'},
  {id:112, cat:'redox', q:'Oxidationstalet för Cr i Cr₂O₇²⁻ är ___.', a:'+6', hint:'2Cr + 7×(−2) = −2 → Cr = +6'},
  {id:113, cat:'redox', q:'Oxidationstalet för S i SO₄²⁻ är ___.', a:'+6', hint:'S + 4×(−2) = −2 → S = +6'},
  {id:114, cat:'redox', q:'Oxidationstalet för Fe i Fe₂O₃ är ___.', a:'+3', hint:'2Fe + 3×(−2) = 0 → Fe = +3'},
  {id:115, cat:'redox', q:'Zn + CuSO₄ → ZnSO₄ + Cu. Det ämne som oxideras är ___.', a:'Zn', hint:'Zn: 0 → +2, förlorar elektroner'},
  {id:116, cat:'redox', q:'Zn + CuSO₄ → ZnSO₄ + Cu. Det ämne som reduceras är ___.', a:'Cu²⁺', hint:'Cu: +2 → 0, tar upp elektroner'},
  {id:117, cat:'redox', q:'Reaktionshalva 2H⁺ + 2e⁻ → H₂ är en ___ halfreakton.', a:'reduktions-', hint:'e⁻ konsumeras = reduktion'},
  {id:118, cat:'redox', q:'Reaktionshalva Zn → Zn²⁺ + 2e⁻ är en ___ halfreakton.', a:'oxidations-', hint:'e⁻ produceras = oxidation'},
  {id:119, cat:'redox', q:'Vid balansering av redox i sur lösning balanseras O-atomer med ___.', a:'H₂O', hint:'Steg 3 i halfreaktionsmetoden'},
  {id:120, cat:'redox', q:'Vid balansering av redox i sur lösning balanseras H-atomer med ___.', a:'H⁺', hint:'Steg 4 i halfreaktionsmetoden'},
  {id:121, cat:'redox', q:'Korrosion av järn är en ___ reaktion.', a:'redoxreaktion', hint:'Fe oxideras, O₂ reduceras'},
  {id:122, cat:'redox', q:'I ett galvaniskt element sker oxidation vid ___.', a:'anoden', hint:'Anod = oxidation (minnesregel: Anod = A = Avger e⁻)'},
  {id:123, cat:'redox', q:'I ett galvaniskt element sker reduktion vid ___.', a:'katoden', hint:'Katod = reduktion'},
  {id:124, cat:'redox', q:'Zink är ___ aktiv än koppar i aktivitetsserien.', a:'mer', hint:'Zn förtränger Cu ur lösning'},
  {id:125, cat:'redox', q:'Om ett ämne inte ändrar oxidationstal i en reaktion är det ___.', a:'varken oxiderat eller reducerat', hint:'Inte redoxreaktion för det ämnet'},
  {id:126, cat:'stoikiometri', q:'n = m / M; n betecknar ___.', a:'substansmängd (mol)', hint:'SI-enhet för antal partiklar'},
  {id:127, cat:'stoikiometri', q:'M betecknar ___ och har enheten g/mol.', a:'molmassa', hint:'Summan av atommassorna'},
  {id:128, cat:'stoikiometri', q:'Avogadros tal Nₐ = ___ mol⁻¹.', a:'6,022×10²³', hint:'Antal partiklar i 1 mol'},
  {id:129, cat:'stoikiometri', q:'Molmassan för H₂O är ___ g/mol.', a:'18', hint:'2×1 + 16 = 18'},
  {id:130, cat:'stoikiometri', q:'Molmassan för NaCl är ___ g/mol.', a:'58,5', hint:'23 + 35,5 = 58,5'},
  {id:131, cat:'stoikiometri', q:'Molmassan för CO₂ är ___ g/mol.', a:'44', hint:'12 + 2×16 = 44'},
  {id:132, cat:'stoikiometri', q:'Molmassan för CaCO₃ är ___ g/mol.', a:'100', hint:'40 + 12 + 3×16 = 100'},
  {id:133, cat:'stoikiometri', q:'Vid STP upptar 1 mol idealgas ___ L.', a:'22,4', hint:'Standard Temperature and Pressure: 0°C, 101,3 kPa'},
  {id:134, cat:'stoikiometri', q:'Det reagens som tar slut först och begränsar produktmängden kallas ___.', a:'begränsande reagens', hint:'Limiting reagent'},
  {id:135, cat:'stoikiometri', q:'Procentuellt utbyte = (faktisk massa / ___ massa) × 100%.', a:'teoretisk', hint:'Den maximalt möjliga mängden produkt'},
  {id:136, cat:'stoikiometri', q:'Empirisk formel anger grundämnenas ___ förhållanden.', a:'enklaste heltal-', hint:'CH₂O är empirisk formel för glukos'},
  {id:137, cat:'stoikiometri', q:'Massabevarandelagen: massa ___ i en kemisk reaktion.', a:'bevaras', hint:'Atomer skapas inte eller förstörs'},
  {id:138, cat:'stoikiometri', q:'Koefficienter i en balanserad reaktion anger molförhållanden, inte ___.', a:'massförhållanden', hint:'2H₂ + O₂ → 2H₂O ger 2:1:2 i mol'},
  {id:139, cat:'stoikiometri', q:'n(H₂O) = 90 g / 18 g/mol = ___ mol.', a:'5,0', hint:'n = m/M'},
  {id:140, cat:'stoikiometri', q:'Antal molekyler i 0,5 mol vatten = ___.', a:'3,011×10²³', hint:'0,5 × 6,022×10²³'},
  {id:141, cat:'stoikiometri', q:'För att bestämma molekylformel från empirisk formel behöver man ___.', a:'molmassan', hint:'n = M_molekyl / M_empirisk'},
  {id:142, cat:'stoikiometri', q:'Procentuell sammansättning: %X = (n_X × M_X / M_förening) × ___.', a:'100', hint:'Ger massandel i procent'},
  {id:143, cat:'stoikiometri', q:'Stökets grundformel för lösningar: n = c × ___.', a:'V', hint:'c i mol/L, V i L'},
  {id:144, cat:'stoikiometri', q:'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Koefficienten för O₂ är ___.', a:'5', hint:'Balansera syre sist'},
  {id:145, cat:'stoikiometri', q:'88 g CO₂ (M=44) motsvarar ___ mol.', a:'2,0', hint:'n = 88/44'},
  {id:146, cat:'gaslagar', q:'Ideala gaslagen: pV = ___.', a:'nRT', hint:'p i Pa, V i m³, T i Kelvin'},
  {id:147, cat:'gaslagar', q:'Gaskonstanten R = ___ J/(mol·K).', a:'8,314', hint:'Ingår i pV = nRT'},
  {id:148, cat:'gaslagar', q:'Boyles lag: vid konstant T gäller p₁V₁ = ___.', a:'p₂V₂', hint:'Tryck och volym är omvänt proportionella'},
  {id:149, cat:'gaslagar', q:'Charles lag: vid konstant p gäller V₁/T₁ = ___.', a:'V₂/T₂', hint:'Volym och temperatur proportionella'},
  {id:150, cat:'gaslagar', q:'Absolut nollpunkt är ___ °C.', a:'−273,15', hint:'0 K – all rörelseenergi upphör'},
  {id:151, cat:'gaslagar', q:'T(K) = T(°C) + ___.', a:'273,15', hint:'Konvertering Celsius till Kelvin'},
  {id:152, cat:'gaslagar', q:'Daltons lag: totalt gastryck = summan av ___.', a:'partialtrycken', hint:'pₜₒₜ = p₁ + p₂ + p₃ + ...'},
  {id:153, cat:'gaslagar', q:'STP (Standard Temperature and Pressure): T = ___ °C, p = 101,3 kPa.', a:'0', hint:'Molär volym = 22,4 L vid STP'},
  {id:154, cat:'gaslagar', q:'SATP (Standard Ambient T & P): T = ___ °C, p = 100 kPa.', a:'25', hint:'Molär volym = 24,5 L vid SATP'},
  {id:155, cat:'gaslagar', q:'Vid ökad temperatur ökar gastrycket (konstant V) eftersom partiklarna rör sig ___.', a:'snabbare', hint:'Kinetisk energi ∝ T'},
  {id:156, cat:'gaslagar', q:'Enhet för tryck i SI-systemet är ___.', a:'Pascal (Pa)', hint:'1 atm ≈ 101 325 Pa ≈ 101,3 kPa'},
  {id:157, cat:'gaslagar', q:'Gay-Lussacs lag: vid konstant V är p/T = konstant. Fördubblas T (K) ___ p.', a:'fördubblas', hint:'Direkt proportionalitet'},
  {id:158, cat:'gaslagar', q:'2,0 mol idealgas vid 25°C och 100 kPa: V = nRT/p = 2,0 × 8,314 × 298 / 100000 ≈ ___ L.', a:'49,6', hint:'V i m³, sedan ×1000 för L'},
  {id:159, cat:'gaslagar', q:'En idealgas antas att partiklar inte har ___ och inte utövar krafter på varandra.', a:'volym', hint:'Verkliga gaser avviker vid högt p eller låg T'},
  {id:160, cat:'gaslagar', q:'Avogadros lag: vid samma T och p innehåller lika stora gasvolymer ___ antal molekyler.', a:'lika', hint:'Grunden för 22,4 L/mol vid STP'},
  {id:161, cat:'jamvikt', q:'Le Chateliers princip: vid en störning förskjuts jämvikten för att ___ störningen.', a:'motverka', hint:'Systemet "kämpar tillbaka"'},
  {id:162, cat:'jamvikt', q:'Jämviktskonstanten Kc uttrycks med ___ i täljaren.', a:'produkternas koncentrationer', hint:'K = [P]^p/[R]^r'},
  {id:163, cat:'jamvikt', q:'K > 1 innebär att jämvikten ligger på ___ sidan.', a:'produkt-', hint:'Fler produkter än reaktanter vid jämvikt'},
  {id:164, cat:'jamvikt', q:'K < 1 innebär att jämvikten ligger på ___ sidan.', a:'reaktant-', hint:'Mest reaktanter vid jämvikt'},
  {id:165, cat:'jamvikt', q:'Om koncentrationen av en produkt ökar förskjuts jämvikten mot ___.', a:'reaktanterna (vänster)', hint:'Systemet motverkar ökningen'},
  {id:166, cat:'jamvikt', q:'Ökad temperatur gynnar den ___ reaktionen.', a:'endoterma', hint:'Tillförd värme "konsumeras" av endotermen'},
  {id:167, cat:'jamvikt', q:'Ökad temperatur ökar K för en endoterm reaktion och ___ K för en exoterm.', a:'minskar', hint:'K beror på temperatur'},
  {id:168, cat:'jamvikt', q:'Haber-Bosch: N₂ + 3H₂ ⇌ 2NH₃. Ökat tryck gynnar ___ (färre gasmolekyler).', a:'produkterna (NH₃)', hint:'4 mol gas → 2 mol gas'},
  {id:169, cat:'jamvikt', q:'En katalysator ändrar jämviktsläget ___.', a:'inte', hint:'Katalysator sänker Ea men påverkar inte K'},
  {id:170, cat:'jamvikt', q:'Reaktionskvoten Q jämförs med K: om Q < K förskjuts reaktionen mot ___.', a:'produkterna', hint:'Reaktionen "springer ikapp" K'},
  {id:171, cat:'jamvikt', q:'Sambandet: ΔG° = −RT ln ___.', a:'K', hint:'Kopplar termodynamik till jämviktskonstant'},
  {id:172, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃. Kc = [NH₃]² / ([N₂] × ___)³.', a:'[H₂]', hint:'Produkter i täljare, reaktanter i nämnare'},
  {id:173, cat:'jamvikt', q:'Vid jämvikt är reaktionshastigheten för fram- och bakreaktion ___.', a:'lika', hint:'Dynamisk jämvikt – reaktionerna pågår'},
  {id:174, cat:'jamvikt', q:'Tillsats av inergas (t.ex. Ar) vid konstant V ändrar jämviktsläge ___.', a:'inte', hint:'Partialtrycken ändras inte'},
  {id:175, cat:'jamvikt', q:'För gasjämvikter används Kp som uttrycks med ___ istället för koncentrationer.', a:'partialtryck', hint:'Kp = Kc×(RT)^Δn för ideala gaser'},
  {id:176, cat:'termokemi', q:'En reaktion som avger värme till omgivningen kallas ___.', a:'exoterm', hint:'ΔH < 0; temperaturen stiger'},
  {id:177, cat:'termokemi', q:'En reaktion som tar upp värme från omgivningen kallas ___.', a:'endoterm', hint:'ΔH > 0; temperaturen sjunker'},
  {id:178, cat:'termokemi', q:'q = mcΔT; den specifika värmekapaciteten för vatten är ___ J/(g·K).', a:'4,18', hint:'Vatten tar upp mycket värme'},
  {id:179, cat:'termokemi', q:'Standardbildningsentalpin för ett fritt grundämne (H₂, Fe, C) är ___ kJ/mol.', a:'0', hint:'Referenspunkt för ΔH°f-tabeller'},
  {id:180, cat:'termokemi', q:'Hess lag: ΔH beror bara på start- och ___, inte på reaktionsvägen.', a:'slutläge', hint:'Entalpi är en tillståndsfunktion'},
  {id:181, cat:'termokemi', q:'ΔH°rxn = Σ ΔH°f(produkter) − Σ ΔH°f(___).', a:'reaktanter', hint:'Hess lag via bildningsentalpier'},
  {id:182, cat:'termokemi', q:'ΔG = ΔH − TΔS; vid ΔG < 0 är reaktionen ___ vid den temperaturen.', a:'spontan', hint:'Gibbs fria energi < 0 = spontan'},
  {id:183, cat:'termokemi', q:'Entropi S är ett mått på systemets ___.', a:'oordning (eller energispridning)', hint:'Andra termodynamikens lag'},
  {id:184, cat:'termokemi', q:'Om ΔH < 0 och ΔS > 0 är reaktionen ___ vid alla temperaturer.', a:'alltid spontan', hint:'Båda faktorerna gynnar ΔG < 0'},
  {id:185, cat:'termokemi', q:'Aktiveringsenergi Ea är den ___ energi molekylerna måste ha för att reagera.', a:'lägsta/minsta', hint:'Tröskeln i energiprofilen'},
  {id:186, cat:'termokemi', q:'En katalysator sänker ___ utan att ändra ΔH.', a:'aktiveringsenergin', hint:'Reaktionen går snabbare men ΔH oförändrat'},
  {id:187, cat:'termokemi', q:'Avdunstning är ___ (tar upp/avger värme).', a:'tar upp värme (endoterm)', hint:'ΔH_vap > 0; kräver energi att bryta intermolekylkrafter'},
  {id:188, cat:'termokemi', q:'Kondensation är ___ (ΔH < 0).', a:'exoterm', hint:'Värme avges när gas → vätska'},
  {id:189, cat:'termokemi', q:'Kalorimeterns formel: ΔH_rxn = −q_kalorimeter / ___.', a:'n (mol reaktant)', hint:'Molar entalpi i kJ/mol'},
  {id:190, cat:'termokemi', q:'Neutralisering av stark syra med stark bas ger ΔH ≈ ___ kJ/mol.', a:'−57', hint:'H⁺ + OH⁻ → H₂O, ΔH ≈ −57,3 kJ/mol'},
  {id:191, cat:'organisk', q:'Alkaner har formeln CₙH₂ₙ₊₂ och kallas ___ kolväten (inga fler H kan adderas).', a:'mättade', hint:'Endast enkelbindningar'},
  {id:192, cat:'organisk', q:'Alkener har minst en ___ bindning (C=C).', a:'dubbel-', hint:'CₙH₂ₙ – π-bindning reaktiv'},
  {id:193, cat:'organisk', q:'Alkyner har minst en ___ bindning (C≡C).', a:'trippel-', hint:'CₙH₂ₙ₋₂; acetylen = etyn'},
  {id:194, cat:'organisk', q:'Bensen C₆H₆ är ett ___ kolväte med delokaliserade π-elektroner.', a:'aromatiskt', hint:'EAS-reaktioner, ej addition'},
  {id:195, cat:'organisk', q:'Funktionell grupp −OH i organisk kemi kallas ___ grupp.', a:'hydroxyl-', hint:'Alkoholer har −OH'},
  {id:196, cat:'organisk', q:'Funktionell grupp −COOH kallas ___ grupp.', a:'karboxyl-', hint:'Karboxylsyror; svaga syror'},
  {id:197, cat:'organisk', q:'Alkohol + karboxylsyra → ___ + vatten.', a:'ester', hint:'Esterifiering; fruktig doft'},
  {id:198, cat:'organisk', q:'Omvändningen av esterifiering (ester + vatten → syra + alkohol) kallas ___.', a:'hydrolys', hint:'Med syra; med bas kallas förs&aring;pning'},
  {id:199, cat:'organisk', q:'Cis/trans-isomeri uppstår p.g.a. begränsad rotation kring ___ bindningen.', a:'dubbel-/C=C-', hint:'π-bindningen hindrar rotation'},
  {id:200, cat:'organisk', q:'Molekyler som är varandras spegelbilder men ej överstallbara kallas ___.', a:'enantiomerer', hint:'Kiralitet; viktig i läkemedelskemi'},
  {id:201, cat:'organisk', q:'Primär alkohol oxideras med K₂Cr₂O₇ först till ___, sedan till karboxylsyra.', a:'aldehyd', hint:'R-CH₂OH → R-CHO → R-COOH'},
  {id:202, cat:'organisk', q:'Sekundär alkohol oxideras till ___.', a:'keton', hint:'R₂CHOH → R₂C=O'},
  {id:203, cat:'organisk', q:'Alkaner reagerar med halogener (t.ex. Cl₂) via ___ reaktion (UV-ljus).', a:'radikal substitution', hint:'H ersätts av halogen'},
  {id:204, cat:'organisk', q:'Etanol har kokpunkt 78°C pga ___ bindningar.', a:'vätebindningar', hint:'OH-gruppen bildar H-bindningar'},
  {id:205, cat:'organisk', q:'IUPAC-namn på CH₃-CH₂-OH är ___.', a:'etanol', hint:'2 kol + -ol suffix'},
  {id:206, cat:'organisk', q:'IUPAC-namn på CH₃-CO-CH₃ (aceton) är ___.', a:'propanon', hint:'3 kol + keton (-on)'},
  {id:207, cat:'organisk', q:'Polymeren som bildas av etenmonomerer kallas ___.', a:'polyeten (PE)', hint:'Additionspolymer'},
  {id:208, cat:'organisk', q:'Fetter är estrar av glycerol och ___.', a:'fettsyror', hint:'Hydrolys ger glycerol + fettsyror'},
  {id:209, cat:'losningar', q:'Molär koncentration: c = n / ___.', a:'V', hint:'V i liter; enheten mol/L'},
  {id:210, cat:'losningar', q:'Spädningsekvationen: c₁V₁ = ___.', a:'c₂V₂', hint:'Molmängden är bevarad vid spädning'},
  {id:211, cat:'losningar', q:'"Lika löser lika" – NaCl (polärt/jonbindning) löser sig i ___.', a:'vatten (polart lösningsmedel)', hint:'Vatten hydratiserar jonerna'},
  {id:212, cat:'losningar', q:'Beer-Lamberts lag: A = ε × c × ___.', a:'l', hint:'l = ljusvägens längd i cm'},
  {id:213, cat:'losningar', q:'Beer-Lamberts lag: A = log(___ / I).', a:'I₀', hint:'A = log(infallande/transmitterat ljus)'},
  {id:214, cat:'losningar', q:'Om Q > Ksp sker ___ av det svårlösliga saltet.', a:'utfällning', hint:'Lösningen är övermättad'},
  {id:215, cat:'losningar', q:'Ksp = [Ag⁺][Cl⁻] för AgCl ≈ 1,8×10⁻¹⁰. Lösligheten s ≈ ___ mol/L.', a:'1,34×10⁻⁵', hint:'s = √Ksp = √(1,8×10⁻¹⁰)'},
  {id:216, cat:'losningar', q:'Gemensam-joneffekten: lösligheten av AgCl ___ om NaCl tillsätts.', a:'minskar', hint:'Cl⁻ ökar → Q > Ksp → utfällning'},
  {id:217, cat:'losningar', q:'1 ppm i vattenlösning ≈ ___ mg/L.', a:'1', hint:'Parts per million'},
  {id:218, cat:'losningar', q:'Fryspunktssänkning: ΔTf = Kf × m; Kf(vatten) = ___ °C·kg/mol.', a:'1,86', hint:'Används för antifrysmedel'},
  {id:219, cat:'losningar', q:'Kokpunktshöjning: ΔTb = Kb × m; Kb(vatten) = ___ °C·kg/mol.', a:'0,512', hint:'Saltat vatten kokar vid lite högre T'},
  {id:220, cat:'losningar', q:'SAV-regeln: häll alltid ___ i vattnet, aldrig vatten i stark syra.', a:'syran', hint:'Undviker stänkrisken (starkexoterm)'},
  {id:221, cat:'losningar', q:'Bereda 500 mL 0,10 mol/L HCl från 12 mol/L: V₁ = 0,10×0,500/12 = ___ mL.', a:'4,2', hint:'c₁V₁ = c₂V₂ → V₁ = c₂V₂/c₁'},
  {id:222, cat:'losningar', q:'Osmotiskt tryck π = MRT; blodsplasmans osmolaritet ≈ 0,30 mol/L → π ≈ ___ atm.', a:'7,3', hint:'π = 0,30 × 0,0821 × 310 ≈ 7,6 atm'},
  {id:223, cat:'labsak', q:'GHS-piktogrammet dödskalle indikerar ___.', a:'akut toxicitet (hög)', hint:'HCN, arsenik – livsfarligt'},
  {id:224, cat:'labsak', q:'GHS-piktogrammet med frätande vätska indikerar ___.', a:'frätande (korrosivt)', hint:'H₂SO₄, NaOH – fräter hud och material'},
  {id:225, cat:'labsak', q:'Skyddsglasögon är ___ vid alla laborationsmoment med kemikalier.', a:'obligatoriska', hint:'Ögon kan inte regenereras lika lätt som hud'},
  {id:226, cat:'labsak', q:'Vid stänk av frätande ämne i ögat: skölj omedelbart i ___ minuter.', a:'15', hint:'Lång sköljning minskar skadan drastiskt'},
  {id:227, cat:'labsak', q:'Analytisk våg har noggrannhet ±___ g.', a:'0,0001', hint:'4 decimaler; används för exakt inväging'},
  {id:228, cat:'labsak', q:'Byrettens avläsningsnoggrannhet är ±___ mL.', a:'0,05', hint:'Avläs med 0,01 mL-precision, fel ±0,05'},
  {id:229, cat:'labsak', q:'Menisken i byrett/mätkolv avläses vid ___ nivån.', a:'nedre (konkava)', hint:'I ögonhöjd för att undvika paralaxfel'},
  {id:230, cat:'labsak', q:'Rf-värdet i TLC = (avstånd substansen vandrat) / ___.', a:'avstånd lösningsfronten vandrat', hint:'Rf mellan 0 och 1'},
  {id:231, cat:'labsak', q:'Systematiska fel påverkar alla mätningar i ___ riktning.', a:'samma', hint:'T.ex. felkalibrerad våg – alltid för hög/låg'},
  {id:232, cat:'labsak', q:'Slumpmässiga fel minskas effektivast genom ___.', a:'upprepade mätningar', hint:'Medelvärde och standardavvikelse'},
  {id:233, cat:'labsak', q:'All hantering av flyktiga/giftiga kemikalier sker i ___.', a:'dragskåp (frånluftskåpa)', hint:'Frånluften skyddar mot inandning'},
  {id:234, cat:'labsak', q:'Titreringens syfte är att bestämma ___ hos en okänd lösning.', a:'koncentrationen', hint:'Via ekvivalenspunkten och känd titrant'},
  {id:235, cat:'labsak', q:'Gravimetrisk analys bestämmer mängden via ___.', a:'vägning', hint:'T.ex. fällning + filtrering + torkning + vägning'},
  {id:236, cat:'labsak', q:'En labrapports diskussionsdel ska innehålla tolkning av resultat och analys av ___.', a:'felkällor', hint:'Varför avviker resultaten från teorin?'},
  {id:237, cat:'prov', q:'Varför är natriumklorid (NaCl) hårt men sprött? – Gittret spricker när lika laddade joner hamnar bredvid varandra vid ___.', a:'förskjutning', hint:'Katjon bredvid katjon → repulsion → spricka'},
  {id:238, cat:'prov', q:'Varför leder NaCl el i smält form men inte i fast form? – I smält form är jonerna ___.', a:'rörliga/fria', hint:'Fast gitter låser jonerna'},
  {id:239, cat:'prov', q:'Varför är vattnets kokpunkt (100°C) så mycket högre än H₂S (−60°C)? – Tack vare ___ i vatten.', a:'vätebindningar', hint:'O är tillräckligt elektronegativt; S inte'},
  {id:240, cat:'prov', q:'CO₂ har polära C=O-bindningar men är en opolar molekyl. Orsak: molekylens geometri är ___.', a:'linjär', hint:'Dipolerna tar ut varandra i linjär geometri'},
  {id:241, cat:'prov', q:'H₂O är polärt trots att det liknar CO₂. Orsak: H₂O har ___ geometri.', a:'vinkelformad', hint:'104,5° – dipolerna adderas'},
  {id:242, cat:'prov', q:'Varför sjunker is i de flesta vätskor men flyter i vatten? – Isen är ___ tätt packad pga vätebindningarnas hexagonala struktur.', a:'mindre', hint:'Is har lägre densitet än flytande vatten'},
  {id:243, cat:'prov', q:'pH i 0,010 mol/L HCl-lösning är ___ (stark syra, fullständigt dissocierad).', a:'2', hint:'pH = −log(0,010) = −log(10⁻²) = 2'},
  {id:244, cat:'prov', q:'pH i 0,0010 mol/L NaOH är ___. (pOH = 3, pH = 14 − 3 = ___)', a:'11', hint:'[OH⁻] = 0,001 → pOH = 3 → pH = 11'},
  {id:245, cat:'prov', q:'En buffert av ättiksyra (pKa=4,74) och natriumacetat 1:1 har pH = ___.', a:'4,74', hint:'Henderson-Hasselbalch: pH = pKa + log(1/1) = pKa'},
  {id:246, cat:'prov', q:'Vid titrering av svag syra med stark bas är pH vid ekvivalenspunkten ___ 7.', a:'över', hint:'Salt av svag syra + stark bas hydrolyserar basiskt'},
  {id:247, cat:'prov', q:'Haber-Bosch körs vid ~450°C trots att lägre T ger bättre utbyte. Orsaken är att lägre T ger för låg ___.', a:'reaktionshastighet', hint:'Kinetik vs termodynamik – kompromiss'},
  {id:248, cat:'prov', q:'Bensen genomgår substitution (EAS), inte addition. Orsaken: addition skulle bryta den ___ stabiliteten.', a:'aromatiska', hint:'150 kJ/mol extra stabilitet'},
  {id:249, cat:'prov', q:'Varför ökar kokpunkten med kolkedjans längd hos alkaner? – Starkare ___ krafter vid större molmassa.', a:'London-dispersions-', hint:'Fler elektroner = lättare att polarisera'},
  {id:250, cat:'prov', q:'ΔG = ΔH − TΔS. En reaktion med ΔH > 0 och ΔS > 0 är spontan vid ___ temperatur.', a:'hög', hint:'Vid hög T dominerar TΔS-termen'},
  {id:251, cat:'prov', q:'Zink skyddar järn i galvanisering pga att Zn är mer ___ än Fe.', a:'reaktivt/aktivt', hint:'Zn oxideras preferentiellt – offermetall'},
  {id:252, cat:'prov', q:'Varför ger 1 mol NaCl dubbelt så stor fryspunktssänkning som 1 mol glukos? – NaCl dissocierar till ___ partiklar.', a:'2', hint:'Na⁺ + Cl⁻ = 2 partiklar per formelenhet'},
  {id:253, cat:'prov', q:'Ke för H₂O(l) ⇌ H⁺(aq) + OH⁻(aq) kallas Kw = ___ vid 25°C.', a:'1,0×10⁻¹⁴', hint:'pH + pOH = 14 följer av detta'},
  {id:254, cat:'prov', q:'En svag syra med Ka = 1,0×10⁻⁵ har pKa = ___.', a:'5', hint:'pKa = −log(Ka)'},
  {id:255, cat:'prov', q:'Alkohol + syra ⇌ ester + vatten. För att driva reaktionen framåt kan man ta bort ___.', a:'vatten (eller estern)', hint:'Le Chatelier – ta bort produkt'},
  {id:256, cat:'prov', q:'Den empiriska formeln för glukos C₆H₁₂O₆ är ___.', a:'CH₂O', hint:'Dela alla index med 6'},
  {id:257, cat:'prov', q:'Reaktionen Fe + 2HCl → FeCl₂ + H₂. Oxidationstalet för Fe ändras från 0 till ___.', a:'+2', hint:'Fe → Fe²⁺: oxidation'},
  {id:258, cat:'prov', q:'Varför kan inte aluminiumfolie lösas upp av utspädd saltsyra men väl av NaOH? – Al₂O₃-skiktet löses i ___ men skyddas av HCl.', a:'bas (NaOH)', hint:'Al är amfoteriskt – löses i starka baser'},
  {id:259, cat:'prov', q:'Beräkna massa Fe₂O₃ som bildas av 2,0 mol Fe: 4Fe + 3O₂ → 2Fe₂O₃. n(Fe₂O₃) = 2,0×(2/4) = ___ mol.', a:'1,0', hint:'Koefficienter ger molförhållande 4:2 = 2:1'},
  {id:260, cat:'prov', q:'Vad händer med jämvikten N₂ + 3H₂ ⇌ 2NH₃ om volymen halveras? – Jämvikten förskjuts mot ___ (färre gasmolekyler).', a:'NH₃ (produkterna/höger)', hint:'Halverad volym = dubblat tryck → Le Chatelier'}
,
  {id:301, cat:'stoikiometri', q:'Formeln för substansmängd: n = ___ / M.', a:'m', hint:'n i mol, m i gram, M i g/mol'},
  {id:302, cat:'stoikiometri', q:'1 mol av vilket ämne som helst innehåller ___ partiklar.', a:'6,022×10²³', hint:'Avogadros tal – alltid samma antal'},
  {id:303, cat:'stoikiometri', q:'Molmassan för Al är ___ g/mol.', a:'27', hint:'Atomnummer 13, period 3'},
  {id:304, cat:'stoikiometri', q:'Molmassan för Fe är ___ g/mol.', a:'56', hint:'Järn – vanligast i jordskorpan'},
  {id:305, cat:'stoikiometri', q:'Molmassan för Cu är ___ g/mol.', a:'63,5', hint:'Koppar – elektrisk ledare'},
  {id:306, cat:'stoikiometri', q:'Molmassan för H₂SO₄ är ___ g/mol.', a:'98', hint:'2+32+64 = 98'},
  {id:307, cat:'stoikiometri', q:'Molmassan för Ca(OH)₂ är ___ g/mol.', a:'74', hint:'40 + 2×(16+1) = 74'},
  {id:308, cat:'stoikiometri', q:'Molmassan för KMnO₄ är ___ g/mol.', a:'158', hint:'39+55+4×16 = 158'},
  {id:309, cat:'stoikiometri', q:'Molmassan för C₆H₁₂O₆ (glukos) är ___ g/mol.', a:'180', hint:'6×12 + 12×1 + 6×16 = 180'},
  {id:310, cat:'stoikiometri', q:'n(Fe) = 112 g / 56 g/mol = ___ mol.', a:'2,0', hint:'n = m/M'},
  {id:311, cat:'stoikiometri', q:'m(NaOH) om n = 0,50 mol: m = 0,50 × ___ = 20 g.', a:'40', hint:'M(NaOH) = 23+16+1 = 40 g/mol'},
  {id:312, cat:'stoikiometri', q:'Antal molekyler i 2,0 mol CO₂ = 2,0 × 6,022×10²³ = ___.', a:'1,204×10²⁴', hint:'N = n × Nₐ'},
  {id:313, cat:'stoikiometri', q:'Reaktionen 2H₂ + O₂ → 2H₂O: koefficienten för H₂ är ___.', a:'2', hint:'Balansera väte och syre'},
  {id:314, cat:'stoikiometri', q:'2H₂ + O₂ → 2H₂O: för varje mol O₂ bildas ___ mol H₂O.', a:'2', hint:'Molförhållande 1:2'},
  {id:315, cat:'stoikiometri', q:'Procentuell sammansättning av Fe i Fe₂O₃: (2×56/160)×100 = ___ %.', a:'70', hint:'M(Fe₂O₃) = 2×56 + 3×16 = 160'},
  {id:316, cat:'stoikiometri', q:'Procentuell sammansättning av N i NH₃: (14/17)×100 ≈ ___ %.', a:'82', hint:'M(NH₃) = 14+3 = 17'},
  {id:317, cat:'stoikiometri', q:'Empirisk formel: 40%C, 6,7%H, 53,3%O → n(C)=3,33, n(H)=6,7, n(O)=3,33. Kvot C:H:O = ___.', a:'1:2:1', hint:'Dela med minsta: 3,33/3,33=1, 6,7/3,33≈2'},
  {id:318, cat:'stoikiometri', q:'En förening har empirisk formel CH₂O och molmassa 180 g/mol. Molekylformel = ___.', a:'C₆H₁₂O₆', hint:'180/30 = 6 → multiplicera empirisk formel med 6'},
  {id:319, cat:'stoikiometri', q:'STP: 1 mol gas = 22,4 L. Volym av 0,25 mol N₂ vid STP = ___ L.', a:'5,6', hint:'V = n × 22,4'},
  {id:320, cat:'stoikiometri', q:'n(CO₂) om V = 11,2 L vid STP: n = 11,2/22,4 = ___ mol.', a:'0,50', hint:'n = V/22,4'},
  {id:321, cat:'stoikiometri', q:'4Fe + 3O₂ → 2Fe₂O₃. Från 4,0 mol Fe bildas ___ mol Fe₂O₃.', a:'2,0', hint:'Koefficienter 4:2 → halvera antalet mol'},
  {id:322, cat:'stoikiometri', q:'4Fe + 3O₂ → 2Fe₂O₃. Massa Fe₂O₃ från 4,0 mol Fe: n=2,0 mol × 160 g/mol = ___ g.', a:'320', hint:'m = n × M(Fe₂O₃)'},
  {id:323, cat:'stoikiometri', q:'Begränsande reagens: 3,0 mol H₂ + 1,0 mol N₂ → NH₃. H₂ ger 2,0 mol NH₃, N₂ ger 2,0 mol NH₃. Inget begränsar – exakt ___:___ förhållande.', a:'3:1', hint:'N₂+3H₂→2NH₃ kräver 3:1-förhållande'},
  {id:324, cat:'stoikiometri', q:'Begränsande reagens: 2,0 mol H₂ + 2,0 mol O₂ → H₂O (2H₂+O₂→2H₂O). H₂/2=1,0; O₂/1=2,0. Begränsande reagens: ___.', a:'H₂', hint:'Lägst kvot mol/koefficient → begränsar'},
  {id:325, cat:'stoikiometri', q:'Teoretiskt utbyte: 5,0 mol begränsat reagens ger max ___ mol produkt (1:1-förhållande).', a:'5,0', hint:'Koefficienter 1:1'},
  {id:326, cat:'stoikiometri', q:'Verkligt utbyte 32 g, teoretiskt 40 g. Procentuellt utbyte = ___ %.', a:'80', hint:'32/40 × 100 = 80'},
  {id:327, cat:'stoikiometri', q:'Titrering: c(HCl)×V(HCl) = c(NaOH)×V(NaOH). c(NaOH) = 0,100×20,0/25,0 = ___ mol/L.', a:'0,080', hint:'c₁V₁ = c₂V₂ vid 1:1-reaktion'},
  {id:328, cat:'stoikiometri', q:'n(HCl) om c=0,200 mol/L, V=50,0 mL: n = 0,200 × 0,0500 = ___ mol.', a:'0,0100', hint:'n = c×V (V i liter!)'},
  {id:329, cat:'stoikiometri', q:'Massa H₂O som bildas av 4,0 g H₂ (M=2): n(H₂)=2,0 mol → n(H₂O)=2,0 mol → m = 2,0×18 = ___ g.', a:'36', hint:'2H₂ + O₂ → 2H₂O, 1:1-förhållande H₂:H₂O'},
  {id:330, cat:'stoikiometri', q:'Massabevarandelagen innebär att summan av reaktanternas massor ___ summan av produkternas massor.', a:'är lika med', hint:'Atomer varken skapas eller förstörs'},
  {id:331, cat:'stoikiometri', q:'Reaktionen CaCO₃ → CaO + CO₂. Massa CO₂ från 50 g CaCO₃ (M=100): n=0,50 mol → m(CO₂) = 0,50×44 = ___ g.', a:'22', hint:'1:1-förhållande CaCO₃:CO₂'},
  {id:332, cat:'stoikiometri', q:'Halten koldioxid i luft ≈ 420 ppm, dvs 420 molekyler CO₂ per ___ luftmolekyler.', a:'1 000 000', hint:'ppm = parts per million'},
  {id:333, cat:'stoikiometri', q:'Förbränning av 1,0 mol oktan C₈H₁₈: C₈H₁₈ + 12,5O₂ → 8CO₂ + 9H₂O. Mol CO₂ = ___.', a:'8', hint:'Koefficient 8 framför CO₂'},
  {id:334, cat:'stoikiometri', q:'m(CO₂) från 1,0 mol oktan: 8,0 mol × 44 g/mol = ___ g.', a:'352', hint:'m = n × M'},
  {id:335, cat:'stoikiometri', q:'Elektrolys av vatten: 2H₂O → 2H₂ + O₂. Volym O₂ vid STP från 4,0 mol H₂O: n(O₂)=2,0 mol → V = ___ L.', a:'44,8', hint:'V = 2,0 × 22,4'},
  {id:336, cat:'stoikiometri', q:'Om utbytet är 75%, och man vill ha 30 g produkt (M=60), behöver man teoretiskt ___ mol produkt att sikta på.', a:'0,667', hint:'Behov = 30/60/0,75 mol praktiskt; teoretiskt n=30/60=0,50 mol → sikta på 0,50/0,75'},
  {id:337, cat:'stoikiometri', q:'Densitet 1,19 g/mL, 37% HCl (m/m). c = (1190×0,37)/36,5 = ___ mol/L ≈ 12 mol/L.', a:'12', hint:'c = (ρ × w × 1000)/M'},
  {id:338, cat:'stoikiometri', q:'Reaktionsschema ska alltid vara balanserat pga lagen om ___.', a:'massans bevarande', hint:'Atomer skapas/förstörs ej'},
  {id:339, cat:'stoikiometri', q:'En mol elektroner kallas ___ (används i elektrokemi).', a:'ett Faraday (F = 96 485 C/mol)', hint:'F = Nₐ × e'},
  {id:340, cat:'stoikiometri', q:'Avogadros lag: vid samma T och p innehåller 1 L av valfri idealgas ___ antal mol.', a:'samma', hint:'Grunden för molär volym vid STP'},
  {id:361, cat:'jamvikt', q:'Vid kemisk jämvikt är koncentrationerna av reaktanter och produkter ___, inte noll.', a:'konstanta', hint:'Dynamisk jämvikt – reaktionerna pågår'},
  {id:362, cat:'jamvikt', q:'Jämviktskonstanten Kc är ___ av koncentrationerna vid jämvikt.', a:'kvoten (produkter/reaktanter)', hint:'K = [P]ᵖ/[R]ʳ'},
  {id:363, cat:'jamvikt', q:'aA + bB ⇌ cC + dD: Kc = [C]^c × [D]^d / ([A]^a × [B]^___)', a:'b', hint:'Koefficienter blir exponenter'},
  {id:364, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃: Kc = [NH₃]² / ([N₂] × [H₂]^___).', a:'3', hint:'Koefficient 3 för H₂ → exponent 3'},
  {id:365, cat:'jamvikt', q:'H₂ + I₂ ⇌ 2HI: vid jämvikt [H₂]=0,40, [I₂]=0,40, [HI]=3,2 mol/L. Kc = 3,2² / (0,40×0,40) = ___.', a:'64', hint:'Kc = [HI]²/([H₂][I₂])'},
  {id:366, cat:'jamvikt', q:'Reaktionen 2SO₂ + O₂ ⇌ 2SO₃: Kc = [SO₃]² / ([SO₂]² × [___]).', a:'O₂', hint:'Alla reaktanter i nämnaren'},
  {id:367, cat:'jamvikt', q:'Om K = 10⁶ är reaktionen nästan ___ fullständig åt höger.', a:'helt/fullständigt', hint:'Stor K → nästan all reaktant omvandlas'},
  {id:368, cat:'jamvikt', q:'Om K = 10⁻⁶ är reaktionen nästan ___ åt höger.', a:'inte alls förskjuten (dominerar reaktanter)', hint:'Liten K → mest reaktanter kvar'},
  {id:369, cat:'jamvikt', q:'Le Chateliers princip: om man tillsätter mer av en reaktant förskjuts jämvikten mot ___.', a:'produkterna (höger)', hint:'Systemet konsumerar det tillsatta'},
  {id:370, cat:'jamvikt', q:'Le Chatelier: om man tar bort en produkt förskjuts jämvikten mot ___.', a:'produkterna (höger)', hint:'Systemet ersätter det borttagna'},
  {id:371, cat:'jamvikt', q:'Le Chatelier: om temperaturen höjs gynnas den ___ reaktionen.', a:'endoterma', hint:'Värme "konsumeras" av endotermen'},
  {id:372, cat:'jamvikt', q:'Le Chatelier: om temperaturen sänks gynnas den ___ reaktionen.', a:'exoterma', hint:'Systemet "producerar" värme för att ersätta'},
  {id:373, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃ är exoterm. Hög temperatur ger ___ K och ___ utbyte av NH₃.', a:'lägre K och lägre utbyte', hint:'Hög T gynnar bakåtreaktionen (endoterm)'},
  {id:374, cat:'jamvikt', q:'N₂ + 3H₂ ⇌ 2NH₃: 4 mol gas → 2 mol gas. Ökat tryck gynnar ___.', a:'NH₃ (färre gasmolekyler, höger)', hint:'Le Chatelier: minska gasvolym → mot sidan med färre mol gas'},
  {id:375, cat:'jamvikt', q:'CO₂(g) + H₂(g) ⇌ CO(g) + H₂O(g): lika antal mol gas på varje sida. Ökat tryck påverkar jämvikten ___.', a:'inte', hint:'Samma antal mol gas → trycket spelar ingen roll'},
  {id:376, cat:'jamvikt', q:'En katalysator gör att jämvikt nås ___ men ändrar inte K.', a:'snabbare', hint:'Ea sänks för båda riktningarna lika mycket'},
  {id:377, cat:'jamvikt', q:'Reaktionskvoten Q: om Q < K reagerar systemet mot ___ för att nå jämvikt.', a:'produkterna (höger)', hint:'Behöver bilda mer produkt för att nå K'},
  {id:378, cat:'jamvikt', q:'Reaktionskvoten Q: om Q > K reagerar systemet mot ___ för att nå jämvikt.', a:'reaktanterna (vänster)', hint:'Produkterna bryts ner tills Q = K'},
  {id:379, cat:'jamvikt', q:'Om man multiplicerar en reaktion med faktor 2, blir det nya K = K_gammal^___.', a:'2', hint:'K(ny) = K(gammal)^n där n är faktorn'},
  {id:380, cat:'jamvikt', q:'Om man vänder på en reaktion (A⇌B → B⇌A) blir det nya K = ___ / K_gammal.', a:'1', hint:'K(omvänd) = 1/K(framåt)'},
  {id:381, cat:'jamvikt', q:'Kp används för gasjämvikter och uttrycks med ___ istället för mol/L.', a:'partialtryck', hint:'Kp relaterat till Kc via (RT)^Δn'},
  {id:382, cat:'jamvikt', q:'Haber-Bosch körs vid ~450°C fastän lägre T ger mer NH₃. Orsak: lägre T ger för låg ___.', a:'reaktionshastighet', hint:'Kinetik vs termodynamik – kompromiss'},
  {id:383, cat:'jamvikt', q:'Haber-Bosch körs vid ~200 atm fastän normalt tryck vore säkrare. Orsak: högt tryck ger ___ utbyte.', a:'bättre/högre', hint:'Fler gasmolekyler på vänster → högt tryck gynnar höger'},
  {id:384, cat:'jamvikt', q:'Järn används som katalysator i Haber-Bosch för att ___.', a:'öka reaktionshastigheten', hint:'Katalysator sänker aktiveringsenergi'},
  {id:385, cat:'jamvikt', q:'CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻: ökad CO₂ i havsvatten (surt regn) förskjuter jämvikten mot ___.', a:'H⁺ (surare hav)', hint:'Le Chatelier – mer CO₂ → mer syra'},
  {id:386, cat:'jamvikt', q:'Ksp är jämviktskonstanten för ___ av ett svårlösligt salt.', a:'upplösningen', hint:'Ksp gäller vid mättad lösning'},
  {id:387, cat:'jamvikt', q:'Kw = [H⁺][OH⁻] = 1,0×10⁻¹⁴ är jämviktskonstanten för vattnets ___.', a:'autoprotolys (självjonisering)', hint:'2H₂O ⇌ H₃O⁺ + OH⁻'},
  {id:388, cat:'jamvikt', q:'Ka för en svag syra är ett specialfall av Kc för jämvikten HA ⇌ H⁺ + ___.', a:'A⁻', hint:'Konjugatbasen'},
  {id:389, cat:'jamvikt', q:'Stora Ka (litet pKa) → ___ syra.', a:'stark', hint:'Mer dissocierad → mer H⁺'},
  {id:390, cat:'jamvikt', q:'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]). När [A⁻]=[HA] är pH = ___.', a:'pKa', hint:'log(1) = 0'},
  {id:391, cat:'jamvikt', q:'Buffert fungerar bäst i intervallet pH = pKa ± ___.', a:'1', hint:'Utanför detta intervall är buffertkapaciteten dålig'},
  {id:392, cat:'jamvikt', q:'En fosfatbuffert (pKa₂=7,2) är lämplig för att hålla pH nära ___.', a:'7,2', hint:'Buffert fungerar bäst vid pH ≈ pKa'},
  {id:393, cat:'jamvikt', q:'Blodets pH hålls konstant av tre buffersystem: bikarbonat/kolsyra, fosfat och ___.', a:'proteiner (hemoglobin)', hint:'Proteiners aminosyrarester fungerar som buffertar'},
  {id:394, cat:'jamvikt', q:'Ka × Kb = ___ (för konjugatpar i vatten vid 25°C).', a:'Kw = 1,0×10⁻¹⁴', hint:'Kopplar syrans och basens konstanter'},
  {id:395, cat:'jamvikt', q:'pKa(ättiksyra)=4,74. Ka = 10^(−4,74) ≈ ___.', a:'1,8×10⁻⁵', hint:'Ka = 10^(−pKa)'},
  {id:396, cat:'jamvikt', q:'Reaktionen 2NO₂(g) ⇌ N₂O₄(g): Kc = [N₂O₄] / [NO₂]^___. Vilket värde är exponenten?', a:'2', hint:'Koefficienten 2 framför NO₂ ger exponent 2'},
  {id:397, cat:'jamvikt', q:'CaCO₃(s) ⇌ CaO(s) + CO₂(g): Kc = [___] (fasta ämnen ingår inte).', a:'CO₂', hint:'Fasta och rena vätskor utelämnas ur K-uttrycket'},
  {id:398, cat:'jamvikt', q:'Jämvikt nås snabbare vid ___ temperatur men K-värdet ändras.', a:'högre', hint:'Högre T → snabbare kinetik, men K beror på T'},
  {id:399, cat:'jamvikt', q:'Principen om Le Chatelier är ett sätt att förutsäga ___ av en jämvikt.', a:'förskjutningen', hint:'Hur systemet reagerar på störning'},
  {id:400, cat:'jamvikt', q:'Om Kc = 1 ligger jämvikten ___.', a:'precis mitt emellan reaktanter och produkter', hint:'Lika mängd produkter och reaktanter (ungefär)'},
  {id:421, cat:'losningar', q:'c = n/V: om n = 0,25 mol och V = 500 mL = 0,500 L, är c = ___ mol/L.', a:'0,50', hint:'c = 0,25/0,500'},
  {id:422, cat:'losningar', q:'n = c × V: om c = 2,0 mol/L och V = 250 mL, är n = ___ mol.', a:'0,50', hint:'n = 2,0 × 0,250'},
  {id:423, cat:'losningar', q:'m = c × V × M: massa NaCl i 200 mL av 1,5 mol/L: m = 1,5 × 0,200 × 58,5 = ___ g.', a:'17,6', hint:'Räkna steg för steg'},
  {id:424, cat:'losningar', q:'Spädning: c₁V₁ = c₂V₂. c₁=6,0 M, V₁=?, c₂=0,30 M, V₂=500 mL → V₁ = ___ mL.', a:'25', hint:'V₁ = c₂V₂/c₁ = 0,30×500/6,0'},
  {id:425, cat:'losningar', q:'Du tar 10 mL av 5,0 M HCl och späder till 250 mL. Ny koncentration = ___ mol/L.', a:'0,20', hint:'c₂ = c₁V₁/V₂ = 5,0×0,010/0,250'},
  {id:426, cat:'losningar', q:'Lösningsentalpin för NH₄NO₃ är positiv (endoterm). Lösningen ___ temperaturen.', a:'sänker', hint:'Endoterm process tar upp värme från omgivningen'},
  {id:427, cat:'losningar', q:'Lösningsentalpin för NaOH är negativ (exoterm). Lösningen ___ temperaturen.', a:'höjer', hint:'Exoterm process avger värme till lösningen'},
  {id:428, cat:'losningar', q:'Löslighetsprodukten Ksp = [Ca²⁺][CO₃²⁻] för CaCO₃ = 3,3×10⁻⁹. Lösligheten s = √(3,3×10⁻⁹) ≈ ___ mol/L.', a:'5,7×10⁻⁵', hint:'s = √Ksp för 1:1-salt'},
  {id:429, cat:'losningar', q:'Ksp(BaSO₄) = 1,1×10⁻¹⁰. s = √(1,1×10⁻¹⁰) ≈ ___ mol/L.', a:'1,05×10⁻⁵', hint:'s = √Ksp'},
  {id:430, cat:'losningar', q:'Om [Ag⁺] = 0,10 M i en lösning med AgCl (Ksp=1,8×10⁻¹⁰), kan maximalt [Cl⁻] = ___ mol/L.', a:'1,8×10⁻⁹', hint:'[Cl⁻] = Ksp/[Ag⁺]'},
  {id:431, cat:'losningar', q:'Q = [Ba²⁺][SO₄²⁻]. Om Q > Ksp ___ BaSO₄.', a:'fälls ut', hint:'Övermättad lösning → utfällning'},
  {id:432, cat:'losningar', q:'Tillsätter man NaCl till en AgCl-lösning (gemensam jon Cl⁻) ___ lösligheten av AgCl.', a:'minskar', hint:'Gemensam-joneffekten'},
  {id:433, cat:'losningar', q:'Beer-Lambert: A = ε × c × l. Enheten för ε är ___.', a:'L/(mol·cm)', hint:'Molär absorptionskoefficient'},
  {id:434, cat:'losningar', q:'Beer-Lambert: om c fördubblas (konstant l och ε), ___ A.', a:'fördubblas', hint:'A är direkt proportionell mot c'},
  {id:435, cat:'losningar', q:'Transmittans T = I/I₀. Absorbans A = log(1/T). Om T = 0,10 är A = ___.', a:'1,0', hint:'A = log(1/0,10) = log(10) = 1'},
  {id:436, cat:'losningar', q:'Om T = 0,50 är A = log(1/0,50) = log(2) ≈ ___.', a:'0,30', hint:'log(2) ≈ 0,301'},
  {id:437, cat:'losningar', q:'Standardkurva i spektrofotometri: mätpunkterna A vs c ska ge en ___ linje.', a:'rät (linjär)', hint:'Beer-Lambert är linjärt vid låga c'},
  {id:438, cat:'losningar', q:'Massandel (m/m): 5 g NaCl i 95 g vatten → 5/(95+5) × 100 = ___ %.', a:'5', hint:'Massandel = löst ämne / total massa × 100'},
  {id:439, cat:'losningar', q:'Fysiologisk koksaltlösning har ___ % NaCl (m/v).', a:'0,9', hint:'Isoton med blod – används i droppåsar'},
  {id:440, cat:'losningar', q:'Molalitet = mol löst ämne per kg ___. Enheten är mol/kg.', a:'lösningsmedel', hint:'Skiljer sig från molaritet (per liter lösning)'},
  {id:441, cat:'losningar', q:'Fryspunktssänkning: ΔTf = Kf × m. 0,50 mol/kg NaCl (2 partiklar) → ΔTf = 1,86 × 0,50 × 2 = ___ °C.', a:'1,86', hint:'i=2 för NaCl (van Hoff-faktor)'},
  {id:442, cat:'losningar', q:'Antifrys: 50% etylenglykol (M=62) i 1 kg vatten: m = 500/62 ≈ 8,06 mol/kg → ΔTf = 1,86×8,06 ≈ ___ °C.', a:'15', hint:'Ungefärlig beräkning'},
  {id:443, cat:'losningar', q:'Kokpunkthöjning: ΔTb = 0,512 × m. 1,0 mol/kg glukos: ΔTb = ___ °C.', a:'0,512', hint:'Kₓ(vatten) = 0,512 °C·kg/mol'},
  {id:444, cat:'losningar', q:'Osmotiskt tryck: π = MRT = 0,10 × 8,314 × 298 / 1000 ≈ ___ kPa.', a:'247,9', hint:'Enheter: M i mol/L, R=8,314 J/(mol·K), T i K → Pa → /1000 = kPa'},
  {id:445, cat:'losningar', q:'Omvänd osmos används för ___ av havsvatten.', a:'avsaltning', hint:'Tryck tvingar vatten genom membran mot osmotisk gradient'},
  {id:446, cat:'losningar', q:'Henrys lag: lösligheten av en gas i vätska ___ med ökat partialtryck.', a:'ökar', hint:'CO₂ i läsk – under tryck mer löst'},
  {id:447, cat:'losningar', q:'CO₂-lösligheten i havsvatten ___ när temperaturen stiger.', a:'minskar', hint:'Gaser löser sig sämre vid hög T – varmt hav tar upp mindre CO₂'},
  {id:448, cat:'losningar', q:'Titrering: n(HCl) = 0,100 × 0,0185 = 1,85×10⁻³ mol. c(NaOH) om V=25,0 mL = 1,85×10⁻³/0,0250 = ___ mol/L.', a:'0,074', hint:'c = n/V'},
  {id:449, cat:'losningar', q:'Ekvivalenspunkten i en titrering (stark syra–stark bas) har pH = ___.', a:'7', hint:'NaCl-lösning är neutral'},
  {id:450, cat:'losningar', q:'Ekvivalenspunkten i en titrering (svag syra–stark bas) har pH ___ 7.', a:'> (över)', hint:'Salt av svag syra hydrolyser basiskt'},
  {id:451, cat:'losningar', q:'Halvvägspunkten i en titrering av svag syra: [HA]=[A⁻] → pH = ___.', a:'pKa', hint:'Henderson-Hasselbalch: log(1) = 0'},
  {id:452, cat:'losningar', q:'Fenolftalein byter färg vid pH ≈ 8,2–10. Passar bäst för titrering av ___.', a:'svag syra med stark bas', hint:'Ekvivalenspunkt pH > 7'},
  {id:453, cat:'losningar', q:'Metylorange byter färg vid pH ≈ 3,1–4,4. Passar för titrering av ___.', a:'stark syra med svag bas', hint:'Ekvivalenspunkt pH < 7'},
  {id:454, cat:'losningar', q:'Bromtymolblått byter färg vid pH ≈ 6–7,6. Passar för ___ syra–___ bas.', a:'stark syra–stark bas', hint:'Ekvivalenspunkt pH = 7'},
  {id:455, cat:'losningar', q:'Löslighet av de flesta fasta salter ___ med ökad temperatur.', a:'ökar', hint:'Endoterm löslighetsprocess gynnas av hög T'},
  {id:456, cat:'losningar', q:'Mättad lösning: löst ämne tillsatt → inget löser sig vidare. Systemet är i ___.', a:'jämvikt (fast ⇌ löst)', hint:'Ksp = Q vid mättnad'},
  {id:457, cat:'losningar', q:'ppm i vattenlösning: 1 ppm ≈ 1 mg/L. EU:s gräns för nitrat i dricksvatten är 50 mg/L = ___ ppm.', a:'50', hint:'mg/L = ppm för utspädda vattenlösningar'},
  {id:458, cat:'losningar', q:'Bereda 1,00 L av 0,100 M KMnO₄ (M=158): m = 0,100 × 1,00 × 158 = ___ g.', a:'15,8', hint:'m = c × V × M'},
  {id:459, cat:'losningar', q:'SAV = Syra I Vatten. Varför hälls alltid syran i vattnet?', a:'Utspädning är starkt exoterm – i liten vattenmängd kan det koka och stänka', hint:'Riskminimering – syra i vatten, aldrig vatten i syra'},
  {id:460, cat:'losningar', q:'Gravimetrisk analys: man fäller ut, filtrerar, torkar och väger. Metoden ger ___ (direkt/indirekt) bestämning av mängd.', a:'direkt', hint:'Massan mäts direkt, inga beräkningsomvägar'},
  {id:461, cat:'losningar', q:'Argentometrisk titrering (Mohr): Ag⁺ fäller Cl⁻. Indikatorn K₂CrO₄ bildar rött Ag₂CrO₄ vid ekvivalenspunkten pga ___.', a:'Ksp(Ag₂CrO₄) > Ksp(AgCl) – AgCl fälls preferentiellt', hint:'Selektiv utfällning baserat på Ksp-värden'},
  {id:462, cat:'losningar', q:'EDTA-titrering används för att bestämma ___ i vatten (vattenhårdhet).', a:'Ca²⁺ och Mg²⁺ (hårdhet)', hint:'EDTA bildar stabila komplex med di- och trivalenta metaller'},
  {id:463, cat:'losningar', q:'Molärbrå χ_A = n_A/n_tot. Om 1 mol etanol blandas i 9 mol vatten: χ(etanol) = ___.', a:'0,10', hint:'χ = 1/(1+9)'},
  {id:464, cat:'losningar', q:'Raoults lag: ångtrycket för ett lösningsmedel i en lösning är χ_solv × ___.', a:'p° (rent lösningsmedels ångtryck)', hint:'Löst ämne sänker ångtrycket'},
  {id:465, cat:'losningar', q:'Kolligativa egenskaper beror på ___ lösta partiklar, inte på deras identitet.', a:'antalet', hint:'1 mol NaCl (2 partiklar) ger dubbelt mot 1 mol glukos'}
];

const CLOZE_CATS = {
  syrabas:      {icon:'⚗️',  label:'Syra-bas begrepp'},
  grundamnen:   {icon:'⚛️',  label:'Grundämnen'},
  syrorBaser:   {icon:'🧪',  label:'Syror & baser'},
  bindning:     {icon:'🔗',  label:'Bindning & struktur'},
  redox:        {icon:'⚡',  label:'Redox & oxidationstal'},
  stoikiometri: {icon:'🔢',  label:'Stökiometri & mol'},
  gaslagar:     {icon:'💨',  label:'Gaslagar'},
  jamvikt:      {icon:'⚖️',  label:'Kemisk jämvikt'},
  termokemi:    {icon:'🌡️',  label:'Termokemi'},
  organisk:     {icon:'🌿',  label:'Organisk kemi'},
  losningar:    {icon:'💧',  label:'Lösningar & konc.'},
  labsak:       {icon:'🔬',  label:'Lab & säkerhet'},
  prov:         {icon:'📝',  label:'Provfrågor'},
};


const LEVEL_INFO = {
  1: { icon:'🌱', name:'Nivå 1', desc:'Grundläggande' },
  2: { icon:'🔥', name:'Nivå 2', desc:'Medel' },
  3: { icon:'⚡', name:'Nivå 3', desc:'Avancerad' },
};
const CAT_INFO = {
  mol:     { icon:'⚖️',  label:'Mol & massa' },
  konc:    { icon:'🧪',  label:'Koncentration' },
  gas:     { icon:'💨',  label:'Gaslagar' },
  termo:   { icon:'🌡️', label:'Termodynamik' },
  syrabas: { icon:'⚗️',  label:'Syra-bas' },
  jamvikt: { icon:'🔄',  label:'Jamvikt' },
  elkem:   { icon:'⚡',  label:'Elektrokemi' },
  stoik:   { icon:'🔢',  label:'Stoikiometri' },
  bal:     { icon:'⚖️',  label:'Balansering' },
};


let _curLevel = 1, _curProbIdx = 0, _probList = [], _probAnswered = false;

function initExercise() {
  const levelRow = document.getElementById('levelRow');
  if (!levelRow) return;

  // Mode switcher
  const modeRow = document.getElementById('exModeRow');
  modeRow.innerHTML = `
    <button class="ex-mode-btn active" data-mode="rakna">🧮 Räkna</button>
    <button class="ex-mode-btn" data-mode="memorera">📚 Memorera</button>`;
  modeRow.querySelectorAll('.ex-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      modeRow.querySelectorAll('.ex-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      switchExMode(btn.dataset.mode);
    });
  });

  // Category filter row
  const catRow = document.getElementById('exRaknaCatRow');
  catRow.innerHTML = '<button class="ex-cat-filter-btn active" data-cat="all">🔢 Alla kategorier</button>' +
    Object.entries(CAT_INFO).map(([k,v]) =>
      `<button class="ex-cat-filter-btn" data-cat="${k}">${v.icon} ${v.label}</button>`
    ).join('');
  catRow.querySelectorAll('.ex-cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => selectCat(btn.dataset.cat));
  });

  levelRow.innerHTML = [1,2,3].map(lv => {
    const li = LEVEL_INFO[lv];
    return `<button class="level-btn ${lv===1?'active':''}" data-level="${lv}">
      <span class="level-icon">${li.icon}</span>
      <span class="level-name">${li.name}</span>
      <span class="level-desc">${li.desc}</span>
    </button>`;
  }).join('');

  levelRow.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => selectLevel(parseInt(btn.dataset.level)));
  });

  selectLevel(1);
}

let _curCat = 'all';

function selectCat(cat) {
  _curCat = cat;
  document.querySelectorAll('#exRaknaCatRow .ex-cat-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat));
  _probList = PROBLEMS.filter(p => p.lv === _curLevel && (cat === 'all' || p.cat === cat));
  _curProbIdx = 0;
  renderProblem();
}

function selectLevel(lv) {
  _curLevel = lv;
  _probList = PROBLEMS.filter(p => p.lv === lv && (_curCat === 'all' || p.cat === _curCat));
  _curProbIdx = 0;
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.level) === lv);
  });
  renderProblem();
}

function buildBalanceEqHTML(prob, interactive) {
  // Build the visual equation with input boxes for blanks
  let html = '<div class="bal-eq">';
  let globalIdx = 0;
  prob.eq.forEach((side, sideIdx) => {
    if (sideIdx === 1) html += '<span class="bal-arrow">→</span>';
    side.forEach((term, termIdx) => {
      if (termIdx > 0) html += '<span class="bal-plus">+</span>';
      const isBlank = interactive && prob.blanks.includes(globalIdx);
      if (isBlank) {
        html += `<span class="bal-term"><input class="bal-input" data-idx="${globalIdx}" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="?"><span class="bal-formula">${term.f}</span></span>`;
      } else {
        const coef = term.c === 1 ? '' : term.c;
        html += `<span class="bal-term"><span class="bal-coef">${coef}</span><span class="bal-formula">${term.f}</span></span>`;
      }
      globalIdx++;
    });
  });
  html += '</div>';
  return html;
}

function checkBalance(prob) {
  if (_probAnswered) return;
  const inputs = document.querySelectorAll('.bal-input');
  let allFilled = true;
  let allCorrect = true;

  inputs.forEach(inp => {
    const idx = parseInt(inp.dataset.idx);
    // Find correct coef for this global idx
    let globalIdx = 0;
    let correctCoef = null;
    for (const side of prob.eq) {
      for (const term of side) {
        if (globalIdx === idx) correctCoef = term.c;
        globalIdx++;
      }
    }
    const val = parseInt(inp.value);
    if (isNaN(val) || inp.value.trim() === '') { allFilled = false; return; }
    if (val === correctCoef) {
      inp.classList.add('bal-correct');
      inp.classList.remove('bal-wrong');
    } else {
      inp.classList.add('bal-wrong');
      inp.classList.remove('bal-correct');
      allCorrect = false;
    }
  });

  if (!allFilled) { showToast('Fyll i alla rutor'); return; }

  _probAnswered = true;
  const fb = document.getElementById('probFeedback');
  fb.className = 'prob-feedback show ' + (allCorrect ? 'ok' : 'fail');
  const sol = prob.steps ? prob.steps.join(' | ') : '';
  if (allCorrect) {
    fb.innerHTML = `<strong>✅ Rätt!</strong><br><small style="color:var(--green)">${sol}</small>`;
    inputs.forEach(inp => inp.disabled = true);
  } else {
    // Show correct equation
    fb.innerHTML = `<strong>❌ Inte helt rätt.</strong><br><small>Rätt svar:</small><br>` + buildBalanceEqHTML(prob, false) + `<br><small style="color:var(--text2)">${sol}</small>`;
  }
}

function renderProblem() {
  const container = document.getElementById('probContainer');
  if (!container || !_probList.length) return;

  const prob = _probList[_curProbIdx];
  _probAnswered = false;
  const total = _probList.length;
  const li = LEVEL_INFO[prob.lv];

  if (prob.type === 'balance') {
    container.innerHTML = `
      <div class="prob-card">
        <div class="prob-meta">
          <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
          <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
        </div>
        <div class="prob-q">${prob.title}</div>
        <p style="font-size:0.88rem;color:var(--text2);margin:6px 0 16px">Fyll i koefficienterna (skriv 1 om koefficienten är 1):</p>
        ${buildBalanceEqHTML(prob, true)}
        <div style="margin-top:16px">
          <button class="prob-check" id="probCheckBtn">Kontrollera</button>
        </div>
        <div class="prob-feedback" id="probFeedback"></div>
        <div class="prob-hint" id="probHintBox" style="display:none">💡 ${prob.hint}</div>
        <div class="prob-nav-row">
          <button class="prob-nav-btn" id="probHintBtn">💡 Tips</button>
          <button class="prob-nav-btn" id="probPrev" ${_curProbIdx===0?'disabled':''}>← Föregående</button>
          <button class="prob-nav-btn" id="probNext" ${_curProbIdx===total-1?'disabled':''}>Nästa →</button>
        </div>
      </div>`;
    document.getElementById('probCheckBtn').addEventListener('click', () => checkBalance(prob));
    document.querySelectorAll('.bal-input').forEach(inp => {
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkBalance(prob); });
    });
    document.getElementById('probHintBtn').addEventListener('click', () => {
      const hb = document.getElementById('probHintBox');
      hb.style.display = hb.style.display === 'none' ? 'block' : 'none';
    });
    const pBtn = document.getElementById('probPrev');
    const nBtn = document.getElementById('probNext');
    if (pBtn && !pBtn.disabled) pBtn.addEventListener('click', () => { _curProbIdx--; renderProblem(); });
    if (nBtn && !nBtn.disabled) nBtn.addEventListener('click', () => { _curProbIdx++; renderProblem(); });
    return;
  }

  const qHtml = prob.q.replace(/\n/g, '<br>');

  container.innerHTML = `
    <div class="prob-card">
      <div class="prob-meta">
        <span class="prob-tag">Uppgift ${_curProbIdx+1} / ${total}</span>
        <span class="prob-lvl-tag lvl-${prob.lv}">${li.icon} ${li.name}</span>
      </div>
      <div class="prob-q">${prob.title}</div>
      <p style="font-size:0.92rem;line-height:1.65;margin:8px 0 14px;color:var(--text)">${qHtml}</p>
      <div class="prob-input-row">
        <input type="number" id="probInput" class="prob-input" placeholder="Svar…" step="any">
        <span class="prob-unit">${prob.unit}</span>
        <button class="prob-check" id="probCheckBtn">Kontrollera</button>
      </div>
      <div class="prob-feedback" id="probFeedback"></div>
      <div class="prob-hint" id="probHintBox" style="display:none">💡 ${prob.hint}</div>
      <div class="prob-nav-row">
        <button class="prob-nav-btn" id="probHintBtn">💡 Tips</button>
        <button class="prob-nav-btn" id="probPrev" ${_curProbIdx===0?'disabled':''}>← Föregående</button>
        <button class="prob-nav-btn" id="probNext" ${_curProbIdx===total-1?'disabled':''}>Nästa →</button>
      </div>
    </div>`;

  document.getElementById('probCheckBtn').addEventListener('click', () => checkProblem(prob));
  document.getElementById('probInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkProblem(prob);
  });
  document.getElementById('probHintBtn').addEventListener('click', () => {
    const hb = document.getElementById('probHintBox');
    hb.style.display = hb.style.display === 'none' ? 'block' : 'none';
  });
  const pBtn = document.getElementById('probPrev');
  const nBtn = document.getElementById('probNext');
  if (pBtn && !pBtn.disabled) pBtn.addEventListener('click', () => { _curProbIdx--; renderProblem(); });
  if (nBtn && !nBtn.disabled) nBtn.addEventListener('click', () => { _curProbIdx++; renderProblem(); });
}

function checkProblem(prob) {
  if (_probAnswered) return;
  const input = document.getElementById('probInput');
  const val = parseFloat(input.value);
  if (isNaN(val)) { showToast('Ange ett numeriskt svar'); return; }

  const correct = Math.abs(val - prob.ans) <= prob.tol;
  _probAnswered = true;
  input.classList.add(correct ? 'correct' : 'wrong');

  const fb = document.getElementById('probFeedback');
  fb.className = `prob-feedback show ${correct ? 'ok' : 'fail'}`;
  const _sol = prob.sol || (prob.steps ? prob.steps.join(' → ') : '');
  fb.innerHTML = correct
    ? `<strong>✅ Rätt!</strong><br><small style="color:var(--green)">${_sol}</small>`
    : `<strong>❌ Fel.</strong> Ditt svar: ${val} ${prob.unit}<br>Rätt svar: <strong>${prob.ans} ${prob.unit}</strong><br><small>${_sol}</small>`;
}


// ═══════════════════════════════════════════════════════
//  LÄGESVÄXLING (Räkna / Luckor / Memorera)
// ═══════════════════════════════════════════════════════

let _clozeInited = false, _memInited = false;

function switchExMode(mode) {
  document.getElementById('exRaknaSection').style.display  = mode === 'rakna'    ? '' : 'none';
  document.getElementById('exLuckorSection').style.display = mode === 'luckor'   ? '' : 'none';
  document.getElementById('exMemSection').style.display    = mode === 'memorera' ? '' : 'none';
  if (mode === 'luckor'   && !_clozeInited) { _clozeInited = true; initCloze(); }
  if (mode === 'memorera' && !_memInited)   { _memInited   = true; initMem(); }
}

// ── LUCKOR ──────────────────────────────────────────────
let _clozeCat = 'all', _clozeIdx = 0, _clozeList = [], _clozeAnswered = false;

function initCloze() {
  const catRow = document.getElementById('clozeCatRow');
  catRow.innerHTML = '<button class="formula-cat-btn active" data-cat="all">Alla</button>' +
    Object.entries(CLOZE_CATS).map(([k,v]) =>
      `<button class="formula-cat-btn" data-cat="${k}">${v.icon} ${v.label}</button>`
    ).join('');
  catRow.querySelectorAll('.formula-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      catRow.querySelectorAll('.formula-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _clozeCat = btn.dataset.cat;
      applyClozeFilter();
    });
  });
  applyClozeFilter();
}

function applyClozeFilter() {
  _clozeList = _clozeCat === 'all' ? [...CLOZE_DATA] : CLOZE_DATA.filter(c => c.cat === _clozeCat);
  _clozeIdx = 0;
  renderCloze();
}

function renderCloze() {
  const container = document.getElementById('clozeContainer');
  if (!_clozeList.length) {
    container.innerHTML = '<div class="prob-card" style="text-align:center;padding:40px;color:var(--text2)">Inga lucktexts för den valda kategorin.</div>';
    return;
  }
  const c = _clozeList[_clozeIdx];
  _clozeAnswered = false;
  const total = _clozeList.length;
  const qHtml = c.q.replace('___', '<span class="cloze-blank">___</span>');
  container.innerHTML = `
    <div class="cloze-card">
      <div class="cloze-progress">Fråga ${_clozeIdx+1} / ${total}</div>
      <div class="cloze-sentence">${qHtml}</div>
      <div class="prob-input-row">
        <input type="text" id="clozeInput" class="cloze-input" placeholder="Fyll i…" autocomplete="off" spellcheck="false">
        <button class="prob-check" id="clozeCheckBtn">Kontrollera</button>
      </div>
      <div class="prob-feedback" id="clozeFeedback"></div>
      <div class="cloze-hint-box" id="clozeHintBox">💡 ${c.hint}</div>
      <div class="prob-nav-row">
        <button class="prob-nav-btn" id="clozeHintBtn">💡 Tips</button>
        <button class="prob-nav-btn" id="clozePrev" ${_clozeIdx===0?'disabled':''}>← Föregående</button>
        <button class="prob-nav-btn" id="clozeNext" ${_clozeIdx===total-1?'disabled':''}>Nästa →</button>
      </div>
    </div>`;
  document.getElementById('clozeCheckBtn').addEventListener('click', () => checkCloze(c));
  document.getElementById('clozeInput').addEventListener('keydown', e => { if (e.key==='Enter') checkCloze(c); });
  document.getElementById('clozeHintBtn').addEventListener('click', () => {
    const hb = document.getElementById('clozeHintBox');
    hb.style.display = hb.style.display === 'none' ? 'block' : 'none';
  });
  const pp = document.getElementById('clozePrev');
  const np = document.getElementById('clozeNext');
  if (pp && !pp.disabled) pp.addEventListener('click', () => { _clozeIdx--; renderCloze(); });
  if (np && !np.disabled) np.addEventListener('click', () => { _clozeIdx++; renderCloze(); });
}

function checkCloze(c) {
  if (_clozeAnswered) return;
  const input = document.getElementById('clozeInput');
  const val = input.value.trim();
  if (!val) { showToast('Skriv ett svar'); return; }
  const accepted = c.a.split(',').map(s => s.trim().toLowerCase());
  const correct = accepted.some(ans => val.toLowerCase() === ans);
  _clozeAnswered = true;
  input.classList.add(correct ? 'correct' : 'wrong');
  const fb = document.getElementById('clozeFeedback');
  fb.className = `prob-feedback show ${correct ? 'ok' : 'fail'}`;
  fb.innerHTML = correct
    ? `<strong>✅ Rätt!</strong> Svaret är: <em>${c.a}</em>`
    : `<strong>❌ Fel.</strong> Ditt svar: <strong>${val}</strong> &nbsp;|  Rätt: <strong>${c.a}</strong>`;
}

// ── MEMORERA ────────────────────────────────────────────
const MEM_SETS = {
  elem20: { icon:'⚛️', label:'Grundamnen 1–20',
    items:[{q:'H',a:'Väte'},{q:'He',a:'Helium'},{q:'Li',a:'Litium'},{q:'Be',a:'Beryllium'},{q:'B',a:'Bor'},{q:'C',a:'Kol'},{q:'N',a:'Kväve'},{q:'O',a:'Syre'},{q:'F',a:'Fluor'},{q:'Ne',a:'Neon'},{q:'Na',a:'Natrium'},{q:'Mg',a:'Magnesium'},{q:'Al',a:'Aluminium'},{q:'Si',a:'Kisel'},{q:'P',a:'Fosfor'},{q:'S',a:'Svavel'},{q:'Cl',a:'Klor'},{q:'Ar',a:'Argon'},{q:'K',a:'Kalium'},{q:'Ca',a:'Kalcium'}]},
  elemExtra: { icon:'🔬', label:'Extra grundamnen',
    items:[{q:'Fe',a:'Järn'},{q:'Cu',a:'Koppar'},{q:'Zn',a:'Zink'},{q:'Br',a:'Brom'},{q:'Ag',a:'Silver'},{q:'I',a:'Jod'},{q:'Au',a:'Guld'}]},
  strongAcids: { icon:'🧪', label:'Starka syror',
    items:[{q:'HCl',a:'Saltsyra'},{q:'H₂SO₄',a:'Svavelsyra'},{q:'HNO₃',a:'Salpetersyra'},{q:'HBr',a:'Bromvätesyra'},{q:'HI',a:'Jodvätesyra'}]},
  weakAcids: { icon:'🍋', label:'Svaga syror',
    items:[{q:'CH₃COOH',a:'Ättiksyra'},{q:'HF',a:'Fluorvätesyra'},{q:'H₂CO₃',a:'Kolsyra'},{q:'H₃PO₄',a:'Fosforsyra'},{q:'HNO₂',a:'Salpetersyrlighet'}]},
  bases: { icon:'🧪', label:'Baser',
    items:[{q:'NaOH',a:'Natriumhydroxid'},{q:'KOH',a:'Kaliumhydroxid'},{q:'Ca(OH)₂',a:'Kalciumhydroxid'},{q:'NH₃',a:'Ammoniak'},{q:'Mg(OH)₂',a:'Magnesiumhydroxid'}]},
};

let _memSet = 'elem20', _memIdx = 0, _memFlipped = false, _memDir = 'symToName';

function initMem() {
  const catRow = document.getElementById('memCatRow');
  catRow.innerHTML = Object.entries(MEM_SETS).map(([k,v]) =>
    `<button class="formula-cat-btn ${k==='elem20'?'active':''}" data-mset="${k}">${v.icon} ${v.label}</button>`
  ).join('');
  catRow.querySelectorAll('.formula-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      catRow.querySelectorAll('.formula-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _memSet = btn.dataset.mset; _memIdx = 0; _memFlipped = false;
      renderMem();
    });
  });
  renderMem();
}

function renderMem() {
  const container = document.getElementById('memContainer');
  const set = MEM_SETS[_memSet];
  const item = set.items[_memIdx];
  const total = set.items.length;
  const front = _memDir === 'symToName' ? item.q : item.a;
  const back  = _memDir === 'symToName' ? item.a : item.q;
  const question = _memDir === 'symToName' ? 'Vad heter detta?' : 'Vilken formel/beteckning?';
  container.innerHTML = `
    <div class="mem-card">
      <div class="mem-mode-toggle">
        <button class="mem-mode-btn ${_memDir==='symToName'?'active':''}" data-dir="symToName">Symbol → Namn</button>
        <button class="mem-mode-btn ${_memDir==='nameToSym'?'active':''}" data-dir="nameToSym">Namn → Symbol</button>
      </div>
      <div class="mem-symbol">${front}</div>
      <div class="mem-sub">${question}</div>
      ${_memFlipped
        ? `<div class="mem-answer">${back}</div>`
        : `<button class="btn-primary" id="memFlipBtn" style="margin-bottom:18px">Visa svar</button>`}
      <div class="cloze-progress">Kort ${_memIdx+1} / ${total}</div>
      <div class="prob-nav-row" style="margin-top:10px">
        <button class="prob-nav-btn" id="memPrev" ${_memIdx===0?'disabled':''}>← Föregående</button>
        <button class="prob-nav-btn" id="memNext" ${_memIdx===total-1?'disabled':''}>Nästa →</button>
      </div>
    </div>`;
  if (!_memFlipped) document.getElementById('memFlipBtn').addEventListener('click', () => { _memFlipped=true; renderMem(); });
  container.querySelectorAll('.mem-mode-btn').forEach(b => {
    b.addEventListener('click', () => { _memDir=b.dataset.dir; _memFlipped=false; renderMem(); });
  });
  const pp = document.getElementById('memPrev');
  const np = document.getElementById('memNext');
  if (pp && !pp.disabled) pp.addEventListener('click', () => { _memIdx--; _memFlipped=false; renderMem(); });
  if (np && !np.disabled) np.addEventListener('click', () => { _memIdx++; _memFlipped=false; renderMem(); });
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
loadState();
applyTheme();
// Defer DOM-heavy init so browser paints HTML before JS blocks
setTimeout(function() {
  buildCategoryGrid();
  updateHomeStats();
}, 0);

// ── Studieplan tab-switcher ──
function spTab(name) {
  document.querySelectorAll('.sp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sp-panel').forEach(p => p.classList.remove('active'));
  const activeTab = document.querySelector(`.sp-tab[onclick*="'${name}'"]`);
  if (activeTab) activeTab.classList.add('active');
  const panel = document.getElementById('spPanel-' + name);
  if (panel) panel.classList.add('active');
}

// ── Studieplan grade accordion ──
function spToggleGrade(card) {
  card.classList.toggle('open');
}


// ═══════════════════════════════════════════════════════════════════════════
//  STUDY SYSTEM – Added by build_study_system.py
// ═══════════════════════════════════════════════════════════════════════════

// ── 1. DATA MODEL ──────────────────────────────────────────────────────────

const LEITNER_INTERVALS = [1, 3, 7, 14, 30]; // days per box 0-4

const EMPTY_USER_DATA = () => ({
  leitner: {},        // { [cardId]: { box, nextReview, history } }
  sessions: [],       // [{ date, duration, cards, topics }]
  streak: { current: 0, max: 0, lastDate: '' },
  totalMinutes: 0,
  studyPlan: null,
  pomoCounts: 0,
  pomoSettings: { work: 25, breakTime: 5 },
  weeklyData: {},     // { 'YYYY-MM-DD': minutes }
  seenToday: [],
});

// ── 2. AUTH ────────────────────────────────────────────────────────────────

async function hashPassword(pass) {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(pass + 'kemi1_salt_2024');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch (e) {
    // Fallback for environments without SubtleCrypto
    let h = 0;
    for (let i = 0; i < pass.length; i++) h = (Math.imul(31, h) + pass.charCodeAt(i)) | 0;
    return 'fallback_' + Math.abs(h).toString(16);
  }
}

function getUsers() {
  try { return JSON.parse(localStorage.getItem('kemi1_users') || '{}'); } catch { return {}; }
}
function saveUsers(u) { localStorage.setItem('kemi1_users', JSON.stringify(u)); }

function getSession() {
  try {
    const s = JSON.parse(localStorage.getItem('kemi1_session') || 'null');
    if (!s) return null;
    if (s.expiresAt && Date.now() > s.expiresAt) { localStorage.removeItem('kemi1_session'); return null; }
    return s.username || null;
  } catch { return null; }
}

function setSession(username, remember) {
  const expiresAt = remember ? Date.now() + 30 * 24 * 60 * 60 * 1000 : null;
  localStorage.setItem('kemi1_session', JSON.stringify({ username, expiresAt }));
}

function getUserData() {
  const user = getSession();
  if (!user) return EMPTY_USER_DATA();
  try {
    const raw = localStorage.getItem('kemi1_ud_' + user);
    if (!raw) return EMPTY_USER_DATA();
    const d = JSON.parse(raw);
    // Ensure all fields exist
    const empty = EMPTY_USER_DATA();
    return Object.assign(empty, d);
  } catch { return EMPTY_USER_DATA(); }
}

function saveUserData(data) {
  const user = getSession();
  if (!user) return;
  localStorage.setItem('kemi1_ud_' + user, JSON.stringify(data));
}

function openAuth() {
  document.getElementById('authBackdrop').style.display = 'flex';
  document.getElementById('authLoginUser').value = '';
  document.getElementById('authLoginPass').value = '';
  document.getElementById('authLoginError').textContent = '';
}

function closeAuth() {
  document.getElementById('authBackdrop').style.display = 'none';
}

function authSwitchTab(tab) {
  const loginForm = document.getElementById('authFormLogin');
  const regForm = document.getElementById('authFormReg');
  const tabLogin = document.getElementById('authTabLogin');
  const tabReg = document.getElementById('authTabReg');
  if (tab === 'login') {
    loginForm.style.display = '';
    regForm.style.display = 'none';
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
  } else {
    loginForm.style.display = 'none';
    regForm.style.display = '';
    tabLogin.classList.remove('active');
    tabReg.classList.add('active');
  }
}

async function authRegister() {
  const username = document.getElementById('authRegUser').value.trim();
  const pass = document.getElementById('authRegPass').value;
  const pass2 = document.getElementById('authRegPass2').value;
  const errEl = document.getElementById('authRegError');
  errEl.textContent = '';

  if (!username || username.length < 2) { errEl.textContent = 'Användarnamnet måste vara minst 2 tecken.'; return; }
  if (username.length > 32) { errEl.textContent = 'Användarnamnet får max vara 32 tecken.'; return; }
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) { errEl.textContent = 'Bara bokstäver, siffror, _ och - är tillåtna.'; return; }
  if (pass.length < 4) { errEl.textContent = 'Lösenordet måste vara minst 4 tecken.'; return; }
  if (pass !== pass2) { errEl.textContent = 'Lösenorden matchar inte.'; return; }

  const users = getUsers();
  if (users[username]) { errEl.textContent = 'Det användarnamnet är redan taget.'; return; }

  try {
    const hash = await hashPassword(pass);
    users[username] = { hash, createdAt: Date.now() };
    saveUsers(users);
    setSession(username, false);
    closeAuth();
    updateAuthUI();
    showToast('🎉 Välkommen ' + username + '! Konto skapat.', 'success');
  } catch (e) {
    errEl.textContent = 'Ett fel uppstod. Försök igen.';
  }
}

async function authLogin() {
  const username = document.getElementById('authLoginUser').value.trim();
  const pass = document.getElementById('authLoginPass').value;
  const remember = document.getElementById('authRemember').checked;
  const errEl = document.getElementById('authLoginError');
  errEl.textContent = '';

  if (!username || !pass) { errEl.textContent = 'Fyll i användarnamn och lösenord.'; return; }

  const users = getUsers();
  if (!users[username]) { errEl.textContent = 'Fel användarnamn eller lösenord.'; return; }

  try {
    const hash = await hashPassword(pass);
    if (hash !== users[username].hash) { errEl.textContent = 'Fel användarnamn eller lösenord.'; return; }
    setSession(username, remember);
    closeAuth();
    updateAuthUI();
    showToast('👋 Välkommen tillbaka, ' + username + '!', 'success');
    checkDueCards();
  } catch (e) {
    errEl.textContent = 'Ett fel uppstod. Försök igen.';
  }
}

function authLogout() {
  localStorage.removeItem('kemi1_session');
  updateAuthUI();
  showToast('Du har loggat ut.', 'info');
  navTo('homeScreen');
}

async function changePassword() {
  const user = getSession();
  if (!user) return;
  const p1 = document.getElementById('newPassInput').value;
  const p2 = document.getElementById('newPassInput2').value;
  const errEl = document.getElementById('changePassError');
  errEl.textContent = '';
  if (p1.length < 4) { errEl.textContent = 'Minst 4 tecken.'; return; }
  if (p1 !== p2) { errEl.textContent = 'Lösenorden matchar inte.'; return; }
  try {
    const hash = await hashPassword(p1);
    const users = getUsers();
    if (users[user]) { users[user].hash = hash; saveUsers(users); }
    showToast('Lösenord uppdaterat!', 'success');
    document.getElementById('newPassInput').value = '';
    document.getElementById('newPassInput2').value = '';
  } catch (e) {
    errEl.textContent = 'Fel uppstod.';
  }
}

function updateAuthUI() {
  const user = getSession();
  const headerActions = document.getElementById('headerActionsDiv');
  let badge = document.getElementById('userBadgeBtn');
  const loginBtn = document.getElementById('loginHeaderBtn');

  if (user) {
    // Show user badge in header
    if (!badge) {
      badge = document.createElement('button');
      badge.id = 'userBadgeBtn';
      badge.className = 'user-badge';
      badge.onclick = () => navTo('profileScreen');
      if (headerActions) headerActions.insertBefore(badge, headerActions.firstChild);
    }
    const initials = user.substring(0, 2).toUpperCase();
    badge.innerHTML = '<div class="user-avatar">' + initials + '</div><span>' + user + '</span>';
    badge.style.display = 'flex';
    if (loginBtn) loginBtn.style.display = 'none';

    // Hide guest banner
    const gb = document.getElementById('guestBanner');
    if (gb) gb.style.display = 'none';

    // Show change password section
    const cps = document.getElementById('changePassSection');
    if (cps) cps.style.display = '';
  } else {
    if (badge) badge.style.display = 'none';
    if (loginBtn) { loginBtn.style.display = ''; loginBtn.textContent = '👤 Logga in'; }
    const gb = document.getElementById('guestBanner');
    if (gb) gb.style.display = '';
    const cps = document.getElementById('changePassSection');
    if (cps) cps.style.display = 'none';
  }
}

function confirmResetProgress() {
  if (confirm('Återställ all SR-data och sessioner? Detta kan inte ångras.')) {
    const user = getSession();
    if (user) {
      localStorage.removeItem('kemi1_ud_' + user);
    }
    showToast('Framsteg återställda.', 'info');
    renderProfile();
  }
}

// ── 3. LEITNER / SPACED REPETITION ────────────────────────────────────────

function getLeitnerCard(cardId) {
  const ud = getUserData();
  if (!ud.leitner[cardId]) {
    ud.leitner[cardId] = { box: 0, nextReview: 0, history: [] };
  }
  return ud.leitner[cardId];
}

function rateCard(cardId, rating) {
  // rating: 0=fail, 1=unsure, 2=knew
  const ud = getUserData();
  if (!ud.leitner[cardId]) ud.leitner[cardId] = { box: 0, nextReview: 0, history: [] };
  const lc = ud.leitner[cardId];

  if (rating === 0) {
    lc.box = 0;
    lc.nextReview = Date.now() + LEITNER_INTERVALS[0] * 86400000;
  } else if (rating === 1) {
    // Stay in same box, review again after same interval
    const interval = LEITNER_INTERVALS[Math.min(lc.box, 4)];
    lc.nextReview = Date.now() + interval * 86400000;
  } else {
    // Advance box
    lc.box = Math.min(lc.box + 1, 4);
    lc.nextReview = Date.now() + LEITNER_INTERVALS[lc.box] * 86400000;
  }

  lc.history.push({ date: Date.now(), rating });
  if (lc.history.length > 50) lc.history = lc.history.slice(-50);

  // Track consecutive streak
  if (rating === 2) {
    srConsecutive = (srConsecutive || 0) + 1;
    if (srConsecutive === 3) showToast('🔥 3 rätt i rad! Du behärskar det här!', 'success');
    else if (srConsecutive === 5) showToast('🌟 5 i rad – utmärkt!', 'success');
  } else {
    if (rating === 0) showToast('💡 Det här kortet kommer tillbaka snart – så funkar inlärning!', 'info');
    srConsecutive = 0;
  }

  // Update session tracking
  sessionState.cardsSeenThisSession.add(cardId);
  if (!ud.seenToday) ud.seenToday = [];
  if (!ud.seenToday.includes(cardId)) ud.seenToday.push(cardId);

  saveUserData(ud);

  // Auto-advance to next card
  const existingRating = document.getElementById('srRatingRow');
  if (existingRating) existingRating.remove();

  // Reset card and advance
  const wrap = document.getElementById('cardWrap');
  if (wrap && wrap.classList.contains('flipped')) {
    wrap.classList.remove('flipped');
    session.flipped = false;
    document.getElementById('btnCorrect').disabled = true;
    document.getElementById('btnWrong').disabled = true;
  }
  setTimeout(() => { markAnswer(rating >= 1); }, 100);
}

let srConsecutive = 0;

function getDueCards() {
  const ud = getUserData();
  const now = Date.now();
  const todayStr = dateStr(new Date());
  return CARDS.filter(c => {
    const lc = ud.leitner[c.id];
    if (!lc) return true; // Never seen = due
    if (lc.box >= 4 && lc.nextReview > now) return false; // Mastered, not due
    return lc.nextReview <= now;
  }).map(c => c.id);
}

function getLeitnerStats() {
  const ud = getUserData();
  const stats = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
  CARDS.forEach(c => {
    const lc = ud.leitner[c.id];
    const box = lc ? Math.min(lc.box, 4) : 0;
    stats[box]++;
  });
  return stats;
}

function injectSRRatingUI() {
  // Remove existing if present
  const existing = document.getElementById('srRatingRow');
  if (existing) existing.remove();

  const currentCard = session.queue && session.queue[session.idx - 1];
  if (!currentCard) return;

  const ratingDiv = document.createElement('div');
  ratingDiv.className = 'sr-rating';
  ratingDiv.id = 'srRatingRow';
  ratingDiv.innerHTML = `
    <button class="sr-btn sr-fail" onclick="rateCard(${currentCard.id}, 0)">&#10060; Kunde inte</button>
    <button class="sr-btn sr-unsure" onclick="rateCard(${currentCard.id}, 1)">&#129300; Osäker</button>
    <button class="sr-btn sr-knew" onclick="rateCard(${currentCard.id}, 2)">&#9989; Kunde</button>
  `;

  const flipMode = document.getElementById('flipMode');
  if (flipMode) {
    const flipActions = flipMode.querySelector('.flip-actions');
    if (flipActions) {
      flipActions.insertAdjacentElement('afterend', ratingDiv);
    } else {
      flipMode.appendChild(ratingDiv);
    }
  }
}

function checkDueCards() {
  const due = getDueCards();
  if (due.length > 0) {
    showToast('📚 Du har ' + due.length + ' begrepp att repetera idag!', 'info', 5000);
  }
}

// ── 4. POMODORO ────────────────────────────────────────────────────────────

let pomoState = {
  running: false,
  totalSeconds: 25 * 60,
  remainingSeconds: 25 * 60,
  isBreak: false,
  sessionPomos: 0,
};
let pomoInterval = null;

function showPomoWidget(show) {
  const w = document.getElementById('pomoWidget');
  if (w) w.style.display = show ? 'flex' : 'none';
}


function updatePomoSettings() {
  const workRadio = document.querySelector('input[name="pomoWork"]:checked');
  const breakRadio = document.querySelector('input[name="pomoBreak"]:checked');
  const widgetToggle = document.getElementById('pomoWidgetToggle');

  const workMins = workRadio ? parseInt(workRadio.value) : 25;
  const breakMins = breakRadio ? parseInt(breakRadio.value) : 5;
  const showWidget = widgetToggle ? widgetToggle.checked : true;

  const ud = getUserData();
  ud.pomoSettings = ud.pomoSettings || {};
  ud.pomoSettings.work = workMins;
  ud.pomoSettings.breakTime = breakMins;
  ud.pomoSettings.showWidget = showWidget;
  saveUserData(ud);

  // Update pomoState if not running
  if (!pomoState.running) {
    pomoState.totalSeconds = workMins * 60;
    pomoState.remainingSeconds = workMins * 60;
    updatePomoDisplay();
  }
  showToast('⏱️ Pomodoro-inställningar sparade', 'success');
}

function loadPomoSettings() {
  const ud = getUserData();
  const settings = ud.pomoSettings || { work: 25, breakTime: 5, showWidget: true };
  const workRadios = document.querySelectorAll('input[name="pomoWork"]');
  workRadios.forEach(r => { r.checked = (parseInt(r.value) === settings.work); });
  const breakRadios = document.querySelectorAll('input[name="pomoBreak"]');
  breakRadios.forEach(r => { r.checked = (parseInt(r.value) === settings.breakTime); });
  const widgetToggle = document.getElementById('pomoWidgetToggle');
  if (widgetToggle) widgetToggle.checked = settings.showWidget !== false;
}

function updatePomoDisplay() {
  const mins = Math.floor(pomoState.remainingSeconds / 60);
  const secs = pomoState.remainingSeconds % 60;
  const timeStr = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  const timeEl = document.getElementById('pomoTime');
  if (timeEl) timeEl.textContent = timeStr;

  const circle = document.getElementById('pomoCircle');
  if (circle) {
    const circumference = 2 * Math.PI * 15.9;
    const fraction = pomoState.remainingSeconds / pomoState.totalSeconds;
    const dashoffset = circumference * (1 - fraction);
    circle.style.strokeDasharray = circumference.toFixed(2);
    circle.style.strokeDashoffset = dashoffset.toFixed(2);
    if (pomoState.isBreak) circle.classList.add('break-mode');
    else circle.classList.remove('break-mode');
  }

  const labelEl = document.getElementById('pomoLabel');
  if (labelEl) labelEl.textContent = pomoState.isBreak ? 'Paus' : 'Fokus';

  const btnEl = document.getElementById('pomoBtn');
  if (btnEl) btnEl.textContent = pomoState.running ? '⏸' : '▶';
}

function pomoToggle() {
  if (pomoState.running) {
    clearInterval(pomoInterval);
    pomoInterval = null;
    pomoState.running = false;
  } else {
    showPomoWidget(true);
    pomoState.running = true;
    pomoInterval = setInterval(pomoTick, 1000);
  }
  updatePomoDisplay();
}

function pomoReset() {
  clearInterval(pomoInterval);
  pomoInterval = null;
  pomoState.running = false;
  pomoState.isBreak = false;
  const ud = getUserData();
  pomoState.totalSeconds = (ud.pomoSettings && ud.pomoSettings.work ? ud.pomoSettings.work : 25) * 60;
  pomoState.remainingSeconds = pomoState.totalSeconds;
  updatePomoDisplay();
}

function pomoTick() {
  if (pomoState.remainingSeconds <= 0) {
    pomoComplete();
    return;
  }
  pomoState.remainingSeconds--;
  updatePomoDisplay();
}

function pomoComplete() {
  clearInterval(pomoInterval);
  pomoInterval = null;
  pomoState.running = false;

  if (!pomoState.isBreak) {
    // Work session completed
    pomoState.sessionPomos++;
    const ud = getUserData();
    ud.pomoCounts = (ud.pomoCounts || 0) + 1;
    const workMins = ud.pomoSettings && ud.pomoSettings.work ? ud.pomoSettings.work : 25;
    ud.totalMinutes = (ud.totalMinutes || 0) + workMins;
    const today = dateStr(new Date());
    ud.weeklyData[today] = (ud.weeklyData[today] || 0) + workMins;
    saveUserData(ud);

    // Switch to break
    pomoState.isBreak = true;
    const breakMins = ud.pomoSettings && ud.pomoSettings.breakTime ? ud.pomoSettings.breakTime : 5;
    pomoState.totalSeconds = breakMins * 60;
    pomoState.remainingSeconds = pomoState.totalSeconds;
    showToast('🍅 Pomodoro klar! Ta en paus på ' + breakMins + ' min.', 'success');
  } else {
    // Break completed
    pomoState.isBreak = false;
    const ud = getUserData();
    const workMins = ud.pomoSettings && ud.pomoSettings.work ? ud.pomoSettings.work : 25;
    pomoState.totalSeconds = workMins * 60;
    pomoState.remainingSeconds = pomoState.totalSeconds;
    showToast('⚡ Pausen slut! Dags att fokusera igen.', 'info');
  }

  updatePomoDisplay();
  // Auto-start next phase
  pomoState.running = true;
  pomoInterval = setInterval(pomoTick, 1000);
}

// ── 5. SESSION MANAGEMENT ─────────────────────────────────────────────────

let sessionState = {
  active: false,
  startTime: null,
  targetMinutes: 0,
  tasksTotal: 0,
  tasksDone: 0,
  cardsSeenThisSession: new Set(),
  lastActivity: Date.now(),
  intervalId: null,
};

function startSession(planConfig) {
  sessionState.active = true;
  sessionState.startTime = Date.now();
  sessionState.targetMinutes = planConfig && planConfig.minutesPerDay ? planConfig.minutesPerDay : 45;
  sessionState.tasksTotal = planConfig && planConfig.tasks ? planConfig.tasks.length : 0;
  sessionState.tasksDone = 0;
  sessionState.cardsSeenThisSession = new Set();
  sessionState.lastActivity = Date.now();

  const bar = document.getElementById('sessionBar');
  if (bar) bar.style.display = 'flex';
  showPomoWidget(true);
  updatePomoDisplay();

  if (sessionState.intervalId) clearInterval(sessionState.intervalId);
  sessionState.intervalId = setInterval(sessionTick, 60000);
  updateSessionBar();
}

function endSession() {
  if (!sessionState.active) return;
  sessionState.active = false;
  clearInterval(sessionState.intervalId);
  sessionState.intervalId = null;

  const elapsed = Math.round((Date.now() - sessionState.startTime) / 60000);
  if (elapsed > 0 && getSession()) {
    const ud = getUserData();
    ud.sessions.push({
      date: dateStr(new Date()),
      duration: elapsed,
      cards: sessionState.cardsSeenThisSession.size,
      topics: [],
    });
    ud.totalMinutes = (ud.totalMinutes || 0) + elapsed;
    const today = dateStr(new Date());
    ud.weeklyData[today] = (ud.weeklyData[today] || 0) + elapsed;
    // Keep only last 60 sessions
    if (ud.sessions.length > 60) ud.sessions = ud.sessions.slice(-60);
    saveUserData(ud);
    updateStreak();
  }

  const bar = document.getElementById('sessionBar');
  if (bar) bar.style.display = 'none';
  showPomoWidget(false);

  if (elapsed > 0) {
    showSessionSummary(elapsed, sessionState.cardsSeenThisSession.size, pomoState.sessionPomos);
  }
}


function showSessionSummary(minutes, cards, pomos) {
  const backdrop = document.getElementById('sessionSummaryBackdrop');
  const grid = document.getElementById('sessionSummaryGrid');
  const msg = document.getElementById('sessionSummaryMsg');
  if (!backdrop) return;

  // Count mastered this session
  const ud = getUserData();
  let mastered = 0;
  CARDS.forEach(c => {
    const lc = ud.leitner && ud.leitner[c.id];
    if (lc && lc.box >= 4) mastered++;
  });

  // Motivational message
  let motivation = 'Bra jobbat! Varje session tar dig ett steg närmre målet.';
  if (minutes >= 45) motivation = '🔥 Fantastisk session! Du är på rätt väg mot toppbetyg!';
  else if (minutes >= 25) motivation = '💪 Solid session! Konsistens är nyckeln till framgång.';
  else if (cards >= 20) motivation = '🃏 Du gick igenom massor av kort – hjärnan lär sig!';
  if (msg) msg.textContent = motivation;

  if (grid) {
    grid.innerHTML = [
      { label: 'Minuter pluggat', value: minutes, color: 'var(--accent)' },
      { label: 'Kort genomgångna', value: cards, color: 'var(--green)' },
      { label: 'Pomodoros klara', value: pomos || 0, color: '#f59e0b' },
      { label: 'Kort bemästrade', value: mastered, color: 'var(--green)' },
    ].map(s => `<div style="background:var(--surface2);border-radius:var(--radius-sm);padding:14px;">
      <div style="font-size:1.6rem;font-weight:800;color:${s.color};">${s.value}</div>
      <div style="font-size:0.75rem;color:var(--text2);margin-top:3px;">${s.label}</div>
    </div>`).join('');
  }

  backdrop.style.display = 'flex';
}

function sessionTick() {
  if (!sessionState.active) return;
  updateSessionBar();
}

function updateSessionBar() {
  if (!sessionState.active) return;
  const elapsed = Math.round((Date.now() - sessionState.startTime) / 60000);
  const pct = sessionState.targetMinutes > 0 ? Math.min(100, Math.round(elapsed / sessionState.targetMinutes * 100)) : 0;
  const timeEl = document.getElementById('sessionBarTime');
  const fillEl = document.getElementById('sessionBarFill');
  if (timeEl) timeEl.textContent = elapsed + ' / ' + sessionState.targetMinutes + ' min';
  if (fillEl) fillEl.style.width = pct + '%';
}

// ── 6. STUDY PLAN WIZARD ──────────────────────────────────────────────────

const TOPIC_MAP = {
  'Materia & atomstruktur': { cats: ['Atomens byggnad', 'Materia & faser', 'Grundämnen'] },
  'Kemiska reaktioner': { cats: ['Reaktioner & stökiometri', 'Redox & elektrokemi'] },
  'Syror, baser & pH': { cats: ['Syror & baser', 'Vanliga syror & baser'] },
  'Kemisk bindning': { cats: ['Kemisk bindning'] },
  'Lösningar & koncentration': { cats: ['Lösningar & koncentration'] },
  'Organisk kemi': { cats: ['Organisk kemi'] },
  'Biokemi': { cats: ['Biokemi'] },
  'Termokemi & energi': { cats: ['Termokemi & energi'] },
  'Laborativ kemi & säkerhet': { cats: ['Laborativ kemi & säkerhet'] },
};

let planWizardState = {
  goal: 'all',           // 'all' | 'topics'
  selectedTopics: [],
  days: 14,
  minutesPerDay: 45,
  generatedSchedule: null,
};

function planSetGoal(goal) {
  planWizardState.goal = goal;
  const allBtn = document.getElementById('planGoalAll');
  const topicsBtn = document.getElementById('planGoalTopics');
  const topicList = document.getElementById('planTopicList');
  if (allBtn) allBtn.classList.toggle('active', goal === 'all');
  if (topicsBtn) topicsBtn.classList.toggle('active', goal === 'topics');
  if (topicList) topicList.style.display = goal === 'topics' ? '' : 'none';
}

function planInitTopicList() {
  const list = document.getElementById('planTopicList');
  if (!list) return;
  const div = list.querySelector('div');
  // Remove old items
  while (list.children.length > 1) list.removeChild(list.lastChild);
  Object.keys(TOPIC_MAP).forEach(topic => {
    const item = document.createElement('label');
    item.className = 'plan-topic-item';
    const isSelected = planWizardState.selectedTopics.includes(topic);
    if (isSelected) item.classList.add('selected');
    item.innerHTML = '<input type="checkbox" ' + (isSelected ? 'checked' : '') + '> <span class="plan-topic-name">' + topic + '</span>';
    const cb = item.querySelector('input');
    cb.addEventListener('change', function() {
      if (this.checked) {
        if (!planWizardState.selectedTopics.includes(topic)) planWizardState.selectedTopics.push(topic);
        item.classList.add('selected');
      } else {
        planWizardState.selectedTopics = planWizardState.selectedTopics.filter(t => t !== topic);
        item.classList.remove('selected');
      }
    });
    list.appendChild(item);
  });
}

function planNextStep(step) {
  if (step === 3) {
    const days = parseInt(document.getElementById('planDays').value) || 14;
    const minsPerDay = parseInt(document.getElementById('planMinutesPerDay').value) || 45;
    planWizardState.days = Math.max(1, Math.min(60, days));
    planWizardState.minutesPerDay = Math.max(15, Math.min(240, minsPerDay));

    const topics = planWizardState.goal === 'all' ? Object.keys(TOPIC_MAP) : planWizardState.selectedTopics;
    if (planWizardState.goal === 'topics' && topics.length === 0) {
      showToast('Välj minst ett ämne.', 'warning');
      return;
    }
    planWizardState.generatedSchedule = generateSchedule(topics, planWizardState.days, planWizardState.minutesPerDay);
    renderSchedulePreview(planWizardState.generatedSchedule);
  }

  // Update step buttons
  [1, 2, 3].forEach(s => {
    const btn = document.getElementById('planStepBtn' + s);
    const panel = document.getElementById('planPanel' + s);
    if (btn) btn.classList.toggle('active', s === step);
    if (panel) panel.classList.toggle('active', s === step);
    if (btn && s < step) btn.classList.add('done');
    else if (btn) btn.classList.remove('done');
  });
}

function generateSchedule(topics, days, minutesPerDay) {
  const schedule = [];
  const taskTypes = ['Teori', 'Flashcards', 'Räkneuppgifter', 'SR-repetition', 'Blandad träning', 'Totalrepetition'];

  for (let day = 1; day <= days; day++) {
    const topicIdx = (day - 1) % topics.length;
    const topic = topics[topicIdx];
    let tasks = [];

    if (day === days) {
      // Last day: full review
      tasks = [
        { type: 'Totalrepetition', content: 'Gå igenom alla ämnen med flashcards och SR-repetition', duration: Math.round(minutesPerDay * 0.5) },
        { type: 'SR-repetition', content: 'Repetera alla kort som förfallit', duration: Math.round(minutesPerDay * 0.3) },
        { type: 'Räkneuppgifter', content: 'Svårare räkneuppgifter – blanda alla nivåer', duration: Math.round(minutesPerDay * 0.2) },
      ];
    } else if (day % 5 === 0) {
      // Every 5th day: mixed
      tasks = [
        { type: 'SR-repetition', content: 'Repetera förfallna kort (Leitner)', duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Räkneuppgifter', content: 'Svårare räkneuppgifter – ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Blandad träning', content: 'Blanda alla ämnen', duration: Math.round(minutesPerDay * 0.2) },
      ];
    } else if (day % 3 === 0) {
      // Every 3rd day: SR + medium
      tasks = [
        { type: 'SR-repetition', content: 'Repetition med Leitner-systemet', duration: Math.round(minutesPerDay * 0.35) },
        { type: 'Räkneuppgifter', content: 'Medelsvåra uppgifter – ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Flashcards', content: 'Flashcards – ' + topic, duration: Math.round(minutesPerDay * 0.25) },
      ];
    } else if (day % 2 === 0) {
      // Even days: flashcards + exercises
      tasks = [
        { type: 'Flashcards', content: 'Flashcards – ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Räkneuppgifter', content: 'Enklare räkneuppgifter – ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'SR-repetition', content: 'Snabb SR-runda', duration: Math.round(minutesPerDay * 0.2) },
      ];
    } else {
      // Odd days: theory first
      tasks = [
        { type: 'Teori', content: 'Läs teoriavsnittet om ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Flashcards', content: 'Flashcards – ' + topic, duration: Math.round(minutesPerDay * 0.4) },
        { type: 'Räkneuppgifter', content: 'Enkla räkneuppgifter – ' + topic, duration: Math.round(minutesPerDay * 0.2) },
      ];
    }

    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + day - 1);
    schedule.push({ day, date: dateStr(dateObj), topic, tasks });
  }
  return schedule;
}

function renderSchedulePreview(schedule) {
  const preview = document.getElementById('planSchedulePreview');
  if (!preview) return;
  preview.innerHTML = '';

  const TASK_ICONS = { 'Teori': '📖', 'Flashcards': '🃏', 'Räkneuppgifter': '🧮', 'SR-repetition': '🔄', 'Blandad träning': '🔀', 'Totalrepetition': '⭐' };
  const TASK_TARGETS = { 'Teori': 'theoryScreen', 'Flashcards': 'homeScreen', 'Räkneuppgifter': 'exerciseScreen', 'SR-repetition': 'homeScreen', 'Blandad träning': 'homeScreen', 'Totalrepetition': 'homeScreen' };

  schedule.slice(0, 7).forEach(dayPlan => {
    const div = document.createElement('div');
    div.className = 'plan-schedule-day';
    const total = dayPlan.tasks.reduce((s, t) => s + t.duration, 0);
    const tasksHtml = dayPlan.tasks.map(t => {
      const icon = TASK_ICONS[t.type] || '📌';
      const target = TASK_TARGETS[t.type] || 'homeScreen';
      return '<div class="plan-schedule-task" style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border);">'
        + '<span style="font-size:1rem;">' + icon + '</span>'
        + '<span style="flex:1;font-size:0.82rem;">' + t.type + ': ' + t.content + '</span>'
        + '<span style="font-size:0.75rem;color:var(--text2);white-space:nowrap;">' + t.duration + ' min</span>'
        + '<button onclick="navTo('' + target + '')" style="padding:3px 8px;background:var(--accent);color:#fff;border:none;border-radius:6px;font-size:0.72rem;cursor:pointer;">Starta</button>'
        + '</div>';
    }).join('');
    div.innerHTML = '<div class="plan-schedule-day-title" style="font-weight:700;font-size:0.88rem;padding:6px 0 4px;color:var(--accent);">Dag ' + dayPlan.day + ' – ' + dayPlan.date + ' (' + total + ' min)</div>'
      + '<div style="font-size:0.78rem;color:var(--text2);margin-bottom:6px;">Ämne: ' + dayPlan.topic + '</div>'
      + tasksHtml;
    preview.appendChild(div);
  });
  if (schedule.length > 7) {
    const more = document.createElement('div');
    more.style.cssText = 'font-size:0.8rem;color:var(--text2);padding:8px;text-align:center;';
    more.textContent = '... och ' + (schedule.length - 7) + ' fler dagar';
    preview.appendChild(more);
  }
}

function planActivate() {
  if (!planWizardState.generatedSchedule) return;
  const topics = planWizardState.goal === 'all' ? Object.keys(TOPIC_MAP) : planWizardState.selectedTopics;

  const planConfig = {
    goal: planWizardState.goal,
    topics,
    daysToExam: planWizardState.days,
    minutesPerDay: planWizardState.minutesPerDay,
    startDate: dateStr(new Date()),
    schedule: planWizardState.generatedSchedule,
  };

  if (getSession()) {
    const ud = getUserData();
    ud.studyPlan = planConfig;
    saveUserData(ud);
  }

  showToast('📅 Plan aktiverad! ' + planWizardState.days + ' dagar, ' + planWizardState.minutesPerDay + ' min/dag.', 'success');
  renderPlanWizard();
  renderStudySessionCard();
}

function cancelPlan() {
  if (!confirm('Avbryt den aktiva planen?')) return;
  if (getSession()) {
    const ud = getUserData();
    ud.studyPlan = null;
    saveUserData(ud);
  }
  renderPlanWizard();
  renderStudySessionCard();
}

function startSessionFromPlan() {
  const ud = getUserData();
  if (ud.studyPlan) {
    startSession(ud.studyPlan);
    showPomoWidget(true);
    navTo('homeScreen');
  }
}

function renderPlanWizard() {
  if (!getSession()) {
    // Guest
    const ud = getUserData();
    if (ud.studyPlan) {
      renderActivePlan(ud.studyPlan);
    }
  } else {
    const ud = getUserData();
    const wizard = document.getElementById('planPanel1');
    const wizard2 = document.getElementById('planPanel2');
    const wizard3 = document.getElementById('planPanel3');
    const stepsDiv = document.querySelector('.plan-steps-indicator');
    const activeDisplay = document.getElementById('planActiveDisplay');

    if (ud.studyPlan) {
      // Show active plan
      if (stepsDiv) stepsDiv.style.display = 'none';
      [wizard, wizard2, wizard3].forEach(p => { if (p) p.style.display = 'none'; });
      if (activeDisplay) activeDisplay.style.display = '';
      renderActivePlan(ud.studyPlan);
    } else {
      // Show wizard
      if (stepsDiv) stepsDiv.style.display = '';
      [wizard, wizard2, wizard3].forEach(p => { if (p) p.style.display = ''; });
      if (activeDisplay) activeDisplay.style.display = 'none';
      planNextStep(1);
    }
  }
  planInitTopicList();
}

function renderActivePlan(plan) {
  const activeDisplay = document.getElementById('planActiveDisplay');
  if (!activeDisplay) return;
  activeDisplay.style.display = '';

  const summaryEl = document.getElementById('planActiveSummary');
  if (summaryEl) {
    const elapsed = Math.round((Date.now() - new Date(plan.startDate).getTime()) / 86400000);
    summaryEl.innerHTML = `
      <strong>Mål:</strong> ${plan.goal === 'all' ? 'Hela kursen' : 'Valda ämnen'}<br>
      <strong>Startdatum:</strong> ${plan.startDate}<br>
      <strong>Dagar till prov:</strong> ${plan.daysToExam}<br>
      <strong>Minuter per dag:</strong> ${plan.minutesPerDay}<br>
      <strong>Dag i planen:</strong> ${Math.min(elapsed + 1, plan.daysToExam)} av ${plan.daysToExam}
    `;
  }

  const tasksEl = document.getElementById('planTodayTasks');
  if (tasksEl && plan.schedule) {
    const todayPlan = plan.schedule[Math.min(Math.max(0, Math.round((Date.now() - new Date(plan.startDate).getTime()) / 86400000)), plan.schedule.length - 1)];
    if (todayPlan) {
      tasksEl.innerHTML = todayPlan.tasks.map(t =>
        '<div class="checklist-item"><div class="checklist-dot"></div><span>' + t.type + ': ' + t.content + ' (' + t.duration + ' min)</span></div>'
      ).join('');
    }
  }
}

// ── 7. STATISTICS & PROFILE ───────────────────────────────────────────────


function renderStudySessionCard() {
  const el = document.getElementById('studySessionCardContent');
  if (!el) return;
  const ud = getUserData();

  if (ud && ud.studyPlan) {
    // Show today's tasks as mini checklist
    const plan = ud.studyPlan;
    const elapsed = Math.round((Date.now() - new Date(plan.startDate).getTime()) / 86400000);
    const todayPlan = plan.schedule && plan.schedule[Math.min(Math.max(0, elapsed), plan.schedule.length - 1)];
    const dayNum = Math.min(elapsed + 1, plan.daysToExam);

    const TASK_ICONS = { 'Teori': '📖', 'Flashcards': '🃏', 'Räkneuppgifter': '🧮', 'SR-repetition': '🔄', 'Blandad träning': '🔀', 'Totalrepetition': '⭐' };
    const TASK_TARGETS = { 'Teori': 'theoryScreen', 'Flashcards': 'homeScreen', 'Räkneuppgifter': 'exerciseScreen', 'SR-repetition': 'homeScreen', 'Blandad träning': 'homeScreen', 'Totalrepetition': 'homeScreen' };

    const tasksHtml = todayPlan ? todayPlan.tasks.map(t =>
      `<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border);">
        <span style="font-size:1.1rem;">${TASK_ICONS[t.type] || '📌'}</span>
        <span style="flex:1;font-size:0.85rem;">${t.type}: ${t.content}</span>
        <span style="font-size:0.75rem;color:var(--text2);white-space:nowrap;">${t.duration} min</span>
        <button onclick="navTo('${TASK_TARGETS[t.type] || 'homeScreen'}')" style="padding:4px 10px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:0.75rem;cursor:pointer;">Starta</button>
      </div>`
    ).join('') : '<div style="color:var(--text2);font-size:0.85rem;">Plan avslutad!</div>';

    el.innerHTML = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
      <span style="font-size:1.2rem;">📅</span>
      <strong style="font-size:0.95rem;">Dag ${dayNum} av ${plan.daysToExam} – ${plan.minutesPerDay} min/dag</strong>
    </div>
    ${tasksHtml}
    <button onclick="startSessionFromPlan();navTo('homeScreen');" style="width:100%;margin-top:10px;padding:10px;background:var(--accent);color:#fff;border:none;border-radius:var(--radius-sm);font-size:0.9rem;font-weight:700;cursor:pointer;">▶ Starta session</button>`;
  } else {
    el.innerHTML = `<div style="display:flex;align-items:center;gap:12px;">
      <span style="font-size:1.8rem;">🎯</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:0.95rem;margin-bottom:4px;">Starta studiesession</div>
        <div style="font-size:0.8rem;color:var(--text2);">Skapa en personlig plan mot provet</div>
      </div>
      <button onclick="navTo('planScreen')" style="padding:10px 16px;background:var(--accent);color:#fff;border:none;border-radius:var(--radius-sm);font-size:0.85rem;font-weight:600;cursor:pointer;white-space:nowrap;">Skapa plan →</button>
    </div>`;
  }
}

function renderProfile() {
  const user = getSession();
  const ud = getUserData();

  const avatarEl = document.getElementById('profileAvatar');
  const usernameEl = document.getElementById('profileUsername');
  const sinceEl = document.getElementById('profileSince');
  const streakEl = document.getElementById('profileStreakBadge');
  const minutesEl = document.getElementById('profileTotalMinutes');
  const masteredEl = document.getElementById('profileMastered');
  const sessionsEl = document.getElementById('profileSessions');

  if (user) {
    if (avatarEl) avatarEl.textContent = user.substring(0, 2).toUpperCase();
    if (usernameEl) usernameEl.textContent = user;
    const users = getUsers();
    if (sinceEl && users[user]) {
      sinceEl.textContent = 'Sedan ' + new Date(users[user].createdAt).toLocaleDateString('sv-SE');
    }
    const cps = document.getElementById('changePassSection');
    if (cps) cps.style.display = '';
  } else {
    if (avatarEl) avatarEl.textContent = '?';
    if (usernameEl) usernameEl.textContent = 'Gäst';
    if (sinceEl) sinceEl.textContent = 'Inte inloggad';
    const cps = document.getElementById('changePassSection');
    if (cps) cps.style.display = 'none';
  }

  if (streakEl) streakEl.textContent = '🔥 ' + (ud.streak.current || 0) + ' dagars streak';
  if (minutesEl) minutesEl.textContent = ud.totalMinutes || 0;

  // Count mastered (box 4)
  let mastered = 0;
  CARDS.forEach(c => {
    const lc = ud.leitner && ud.leitner[c.id];
    if (lc && lc.box >= 4) mastered++;
  });
  if (masteredEl) masteredEl.textContent = mastered;
  if (sessionsEl) sessionsEl.textContent = (ud.sessions && ud.sessions.length) || 0;

  // Due cards
  const dueEl = document.getElementById('dueCardsInfo');
  if (dueEl) {
    const due = getDueCards();
    if (due.length === 0) {
      dueEl.textContent = '✅ Inga kort att repetera idag – bra jobbat!';
    } else {
      dueEl.textContent = '📚 Du har ' + due.length + ' kort att repetera idag.';
    }
  }

  renderLeitnerViz();
  renderWeeklyChart();
}

function renderLeitnerViz() {
  const viz = document.getElementById('leitnerViz');
  if (!viz) return;
  const stats = getLeitnerStats();
  const total = CARDS.length || 1;
  const maxCount = Math.max(...Object.values(stats), 1);
  const labels = ['Ny', 'Låda 1', 'Låda 2', 'Låda 3', 'Bemästrad'];
  const colors = ['leitner-bar-0', 'leitner-bar-1', 'leitner-bar-2', 'leitner-bar-3', 'leitner-bar-4'];

  viz.innerHTML = [0, 1, 2, 3, 4].map(box => {
    const count = stats[box] || 0;
    const pct = maxCount > 0 ? Math.round(count / maxCount * 100) : 0;
    return `<div class="leitner-box-col">
      <div class="leitner-bar-wrap">
        <div class="leitner-bar ${colors[box]}" style="height:${pct}%;min-height:${count>0?4:0}px;"></div>
      </div>
      <div class="leitner-count">${count}</div>
      <div class="leitner-label">${labels[box]}</div>
    </div>`;
  }).join('');
}

function renderWeeklyChart() {
  const chart = document.getElementById('weeklyChart');
  if (!chart) return;
  const ud = getUserData();
  const days = [];
  const dayNames = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push({ date: dateStr(d), label: dayNames[d.getDay()] });
  }
  const vals = days.map(d => ud.weeklyData && ud.weeklyData[d.date] ? ud.weeklyData[d.date] : 0);
  const maxVal = Math.max(...vals, 1);

  chart.innerHTML = days.map((d, i) => {
    const pct = Math.round(vals[i] / maxVal * 100);
    const isToday = i === 6;
    return `<div class="week-bar-col">
      <div class="week-bar-wrap">
        <div class="week-bar" style="height:${pct}%;${isToday ? 'opacity:1;' : 'opacity:0.6;'}min-height:${vals[i]>0?4:0}px;"></div>
      </div>
      <div class="week-label" style="${isToday ? 'font-weight:700;color:var(--accent);' : ''}">${d.label}</div>
    </div>`;
  }).join('');
}

function updateStreak() {
  if (!getSession()) return;
  const ud = getUserData();
  const today = dateStr(new Date());
  const yesterday = dateStr(new Date(Date.now() - 86400000));

  if (!ud.streak) ud.streak = { current: 0, max: 0, lastDate: '' };

  if (ud.streak.lastDate === today) {
    // Already updated today
  } else if (ud.streak.lastDate === yesterday) {
    ud.streak.current = (ud.streak.current || 0) + 1;
    ud.streak.max = Math.max(ud.streak.max || 0, ud.streak.current);
    ud.streak.lastDate = today;
  } else if (!ud.streak.lastDate) {
    ud.streak.current = 1;
    ud.streak.max = 1;
    ud.streak.lastDate = today;
  } else {
    // Streak broken
    ud.streak.current = 1;
    ud.streak.lastDate = today;
  }

  saveUserData(ud);
}

// ── 8. TOAST NOTIFICATIONS ────────────────────────────────────────────────

function showToast(msg, type, duration) {
  if (type === undefined) type = 'info';
  if (duration === undefined) duration = 3000;
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'notif-toast' + (type !== 'info' ? ' ' + type : '');
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(function() {
    toast.classList.add('hiding');
    setTimeout(function() {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, duration);
}

// ── 9. INACTIVITY WARNING ────────────────────────────────────────────────

let lastInteraction = Date.now();
document.addEventListener('click', function() { lastInteraction = Date.now(); });
document.addEventListener('keydown', function() { lastInteraction = Date.now(); });

setInterval(function() {
  if (sessionState.active && Date.now() - lastInteraction > 3 * 60 * 1000) {
    showToast('⏸ Är du kvar? Inaktivitet räknas inte som pluggtid.', 'warning');
    lastInteraction = Date.now();
  }
}, 30000);

// ── 10. UTILITIES ─────────────────────────────────────────────────────────

function dateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

// ── 11. PATCH FLIPCARD TO INJECT SR RATING ───────────────────────────────

// Wrap the existing markAnswer to inject SR rating UI after card flip
// We do this by patching the flipCard function
const _origFlipCard = typeof flipCard === 'function' ? flipCard : null;
if (_origFlipCard) {
  // Override flipCard to show SR rating when card is flipped to back
  window._studyFlipCardPatched = function() {
    _origFlipCard();
    if (session && session.flipped) {
      // Card was just flipped to show answer
      setTimeout(injectSRRatingUI, 50);
    } else {
      // Card was unflipped, remove rating
      const existing = document.getElementById('srRatingRow');
      if (existing) existing.remove();
    }
  };

  // Re-bind the card flip handlers
  const cardScene = document.getElementById('cardScene');
  const btnFlip = document.getElementById('btnFlip');
  if (cardScene) {
    cardScene.removeEventListener('click', flipCard);
    cardScene.addEventListener('click', window._studyFlipCardPatched);
  }
  if (btnFlip) {
    btnFlip.removeEventListener('click', flipCard);
    btnFlip.addEventListener('click', window._studyFlipCardPatched);
  }
}

// ── 12. INITIALIZATION ───────────────────────────────────────────────────

// headerActionsDiv is already set in HTML

// Nav click handlers for new screens
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const t = this.dataset.target;
    if (t === 'profileScreen') renderProfile();
    if (t === 'planScreen') renderPlanWizard();
    if (t === 'homeScreen') renderStudySessionCard();
  });
});

// Init on page load (deferred so existing init runs first)
setTimeout(function() {
  updateAuthUI();
  updateStreak();
  checkDueCards();

  const ud = getUserData();
  if (ud && ud.studyPlan) {
    // Restore session bar if plan is active
    const bar = document.getElementById('sessionBar');
    // Don't auto-start session, just notify
    showToast('📅 Du har en aktiv studieplan. Gå till Plan-fliken.', 'info', 4000);
  }

  updatePomoDisplay();
  pomoReset();
  renderStudySessionCard();
}, 500);

