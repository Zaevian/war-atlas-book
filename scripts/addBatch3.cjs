const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'featuredWars.js');
let content = fs.readFileSync(filePath, 'utf8');

const dossiers = `
  "Chiapas Conflict": {
    theater: "Southern Mexico - **Chiapas** state, from the **Lacandon Jungle** to **San Cristobal de las Casas** and highland indigenous communities",
    summary: "The **Chiapas Conflict (1994-present)** began on January 1, 1994 - the day **NAFTA** took effect - when the **Zapatista Army of National Liberation (EZLN)** seized several towns in Chiapas, declaring war on the Mexican government in the name of indigenous rights, land reform, and dignity. The actual shooting lasted about twelve days before a ceasefire, but the political and cultural impact lasted decades. Led by the ski-masked, pipe-smoking **Subcomandante Marcos**, the Zapatistas became the world's first post-modern guerrilla movement: they fought with communiques as much as rifles, built autonomous communities, and turned a jungle rebellion into a global symbol of anti-globalization resistance. The Mexican government responded with military encirclement, paramilitary proxies, and low-intensity warfare. Nobody won the war, but the Zapatistas won the argument - or at least made sure everyone heard it.",
    background: [
      "**Chiapas** was Mexico's poorest state despite rich natural resources; indigenous Maya communities faced extreme marginalization.",
      "The **EZLN** organized secretly in the Lacandon Jungle for a decade before the 1994 uprising.",
      "**NAFTA's** agricultural provisions threatened to destroy indigenous subsistence farming by flooding Mexico with cheap US corn.",
      "The 1992 constitutional reform ending communal land protections (**ejido** system) was seen as a final betrayal of revolutionary promises.",
    ],
    participants: [
      { name: "EZLN (Zapatistas)", role: "Indigenous guerrilla movement demanding autonomy, land rights, and democratic reform through armed uprising turned political resistance.", side: "belligerent" },
      { name: "Mexican federal government and military", role: "Deployed troops for counterinsurgency while pursuing parallel negotiation and low-intensity containment strategies.", side: "belligerent" },
      { name: "Paramilitary groups", role: "Government-linked armed groups conducting violence against Zapatista-sympathetic communities, notably the **Acteal massacre** perpetrators.", side: "belligerent" },
      { name: "Mexican and international civil society", role: "Massive solidarity movement that constrained government military options and amplified Zapatista messaging globally.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "1 Jan 1994", title: "Uprising", detail: "EZLN seizes San Cristobal de las Casas and six other municipalities; twelve days of fighting before ceasefire." },
      { period: "1995-1996", title: "San Andres Accords", detail: "Negotiations produce indigenous rights agreements; government later refuses to implement them fully." },
      { period: "1997", title: "Acteal massacre", detail: "Paramilitary group kills 45 indigenous people at a prayer meeting in Acteal; international outrage." },
      { period: "2003-present", title: "Autonomous governance", detail: "Zapatistas build parallel government structures (**Juntas de Buen Gobierno**) in territory they control; reject state engagement." },
    ],
    outcome: "Military stalemate; Zapatistas maintain autonomous zones in Chiapas; no formal peace agreement; indigenous rights legislation remains incomplete.",
    casualties: {
      military: "Approximately **150** killed during the initial twelve-day uprising in January 1994.",
      civilian: "Hundreds of civilians killed in subsequent low-intensity conflict and paramilitary violence through the late 1990s.",
      displacement: "Tens of thousands displaced by military operations and paramilitary attacks in Chiapas highlands.",
      note: "The conflict's impact is measured less in body counts than in the structural violence of poverty, marginalization, and unresolved land disputes.",
    },
    orderOfBattle: [
      { name: "EZLN", strength: "Estimated 3,000-6,000 armed fighters at peak; much larger civilian support base", note: "Military capability was limited but political and media strategy was extraordinarily effective." },
      { name: "Mexican military deployment", strength: "Up to 70,000 troops deployed in Chiapas at peak", note: "Massive conventional force constrained by political costs of using it against indigenous communities on camera." },
    ],
    aftermath: [
      "The Zapatistas pioneered a model of armed movement transitioning to autonomous governance without either victory or surrender.",
      "**Subcomandante Marcos** (later **Galeano**) became one of the most recognizable revolutionary figures of the late 20th century.",
      "The **San Andres Accords** on indigenous rights were never fully implemented, remaining a source of political contention.",
      "The conflict influenced global anti-globalization movements and demonstrated the power of internet-era revolutionary communication.",
    ],
    maps: {
      title: "Chiapas conflict zone",
      description: "Jungle bases, highland communities, and the geography of autonomous resistance.",
      points: [
        { name: "San Cristobal de las Casas", x: 48, y: 50, year: "1994", note: "Colonial highland city seized by EZLN on New Year's Day 1994." },
        { name: "Lacandon Jungle", x: 52, y: 54, year: "1994-present", note: "EZLN base area and heart of Zapatista autonomous territory." },
        { name: "Acteal", x: 48, y: 48, year: "1997", note: "Site of paramilitary massacre of 45 indigenous people at prayer." },
      ],
    },
    technology: [
      { name: "Internet communiques", type: "Information warfare", side: "EZLN", impact: "First guerrilla movement to use the internet as a primary weapon; communiques reached global audiences instantly." },
      { name: "Low-intensity warfare", type: "Counterinsurgency", side: "Mexican government", impact: "Military encirclement, economic pressure, and paramilitary proxies avoided the political cost of direct assault." },
      { name: "Autonomous governance structures", type: "Political innovation", side: "EZLN", impact: "Built functioning parallel government with health, education, and justice systems independent of the Mexican state." },
    ],
    centralFigures: [
      {
        name: "Subcomandante Marcos (Galeano)",
        role: "EZLN spokesperson and military commander",
        side: "belligerent",
        importance: 92,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Mestizo intellectual who became the masked voice of indigenous resistance; his literary communiques redefined revolutionary communication.",
      },
      {
        name: "Comandanta Ramona",
        role: "EZLN indigenous commander",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Tzotzil Maya woman who became a symbol of indigenous women's participation in the movement; died in 2006.",
      },
      {
        name: "Ernesto Zedillo",
        role: "President of Mexico (1994-2000)",
        side: "belligerent",
        importance: 75,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Managed the government response through military deployment, failed negotiations, and the Acteal massacre crisis.",
      },
    ],
    infobox: {
      dates: "1994 - present",
      location: "Chiapas, Mexico",
      result: "Stalemate; Zapatista autonomous zones persist",
      belligerents: "EZLN vs Mexican government and paramilitary groups",
      strength: "~3,000-6,000 EZLN fighters vs up to 70,000 Mexican troops",
      casualties: "Hundreds killed; tens of thousands displaced",
    },
  },

  "Cenepa War": {
    theater: "South America - the **Cenepa River valley** in the disputed **Cordillera del Condor** border region between **Ecuador** and **Peru**",
    summary: "The **Cenepa War (1995)** was a brief but intense border conflict between **Ecuador** and **Peru** over a remote stretch of Amazonian jungle that both countries had been arguing about since 1941. In January 1995, Ecuadorian forces ambushed Peruvian patrols in the **Cenepa Valley**, triggering weeks of fighting in terrain so dense that air power was nearly useless and supply lines ran on mule trains and helicopters. Ecuador, the smaller military, had secretly fortified positions and used the jungle terrain to neutralize Peru's conventional advantages. A ceasefire was brokered in March, and the **1998 Brasilia Presidential Act** finally settled the border dispute. It was the last interstate war in South America - a distinction that sounds impressive until you remember the terrain was so awful that neither side particularly wanted to go back.",
    background: [
      "The border dispute dated to the **1941 Ecuadorian-Peruvian War** and the **Rio Protocol** that Ecuador later rejected as imposed under duress.",
      "Periodic skirmishes occurred in **1981** (Paquisha incident) and tensions remained high along the unmarked Cordillera del Condor frontier.",
      "Ecuador secretly established fortified outposts in the disputed Cenepa headwaters area during the early 1990s.",
      "Peru discovered the Ecuadorian positions in late 1994, setting the stage for military confrontation.",
    ],
    participants: [
      { name: "Ecuador", role: "Defending prepared positions in the Cenepa Valley; used terrain advantage and fortifications to offset smaller military size.", side: "belligerent" },
      { name: "Peru", role: "Attempted to dislodge Ecuadorian forces from disputed territory using infantry assaults and air strikes in extremely difficult terrain.", side: "belligerent" },
      { name: "Guarantor nations (Argentina, Brazil, Chile, US)", role: "Mediated ceasefire and subsequent peace negotiations under the Rio Protocol framework.", side: "nonBelligerent" },
      { name: "International observers", role: "Military Observer Mission Ecuador-Peru (MOMEP) monitored ceasefire compliance.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Jan 1995", title: "Initial clashes", detail: "Ecuadorian forces ambush Peruvian patrols near Tiwintza and other outposts in the Cenepa headwaters." },
      { period: "Feb 1995", title: "Escalation", detail: "Peru launches infantry assaults and air strikes; Ecuador shoots down Peruvian aircraft; fighting intensifies." },
      { period: "Mar 1995", title: "Ceasefire", detail: "Guarantor nations broker ceasefire; both sides claim victory; MOMEP deployed." },
      { period: "Oct 1998", title: "Brasilia Presidential Act", detail: "Final peace agreement awards most disputed territory to Peru but grants Ecuador symbolic sovereignty over Tiwintza." },
    ],
    outcome: "Ceasefire followed by definitive peace settlement in 1998; Peru received most disputed territory; Ecuador received navigation rights and symbolic Tiwintza concession.",
    casualties: {
      military: "Ecuador: approximately **30** killed. Peru: approximately **60** killed (Peruvian figures are disputed and may be higher).",
      civilian: "Minimal civilian casualties given the remote jungle location.",
      displacement: "Limited; some border communities evacuated during the fighting.",
      note: "Casualty figures remain politically sensitive; Peru's losses were likely higher than officially acknowledged due to failed assault operations.",
    },
    orderOfBattle: [
      { name: "Ecuadorian defensive positions", strength: "Special forces and infantry in prepared jungle fortifications with anti-aircraft capability", note: "Terrain knowledge and defensive preparation offset Ecuador's overall military disadvantage." },
      { name: "Peruvian assault forces", strength: "Infantry, helicopter-borne troops, and air force (Sukhoi Su-22, Cessna A-37)", note: "Conventional superiority was negated by jungle terrain, prepared defenses, and Ecuadorian anti-aircraft fire." },
    ],
    aftermath: [
      "The **1998 peace agreement** definitively resolved the oldest border dispute in the Western Hemisphere.",
      "Ecuador and Peru subsequently developed strong bilateral relations including joint military exercises.",
      "The war demonstrated that prepared defensive positions in extreme terrain can neutralize significant conventional advantages.",
      "It remains the last interstate war fought in South America.",
    ],
    maps: {
      title: "Cenepa War 1995",
      description: "A jungle valley so remote that winning it was almost as hard as finding it.",
      points: [
        { name: "Tiwintza", x: 46, y: 52, year: "1995", note: "Most contested outpost; symbolic importance far exceeded its military value." },
        { name: "Base Sur", x: 46, y: 54, year: "1995", note: "Ecuadorian forward position; site of major Peruvian assault attempts." },
        { name: "Cenepa River valley", x: 46, y: 53, year: "1995", note: "Entire disputed zone; dense jungle canopy made air operations extremely difficult." },
      ],
    },
    technology: [
      { name: "Jungle fortification", type: "Defensive engineering", side: "Ecuador", impact: "Pre-prepared bunkers and cleared fire zones in dense jungle created kill zones for attacking infantry." },
      { name: "MANPADS (Igla missiles)", type: "Anti-aircraft", side: "Ecuador", impact: "Shot down multiple Peruvian aircraft, denying Peru air superiority in the combat zone." },
      { name: "Helicopter logistics", type: "Supply chain", side: "Both", impact: "The only way to sustain forces in roadless jungle; helicopter vulnerability limited operational tempo." },
    ],
    centralFigures: [
      {
        name: "Sixto Duran Ballen",
        role: "President of Ecuador",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Rallied Ecuadorian national unity during the conflict; his government's military preparation proved decisive.",
      },
      {
        name: "Alberto Fujimori",
        role: "President of Peru",
        side: "belligerent",
        importance: 78,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/0/09/Alberto_Fujimori_1998.jpg",
        note: "Managed Peru's war effort and later negotiated the 1998 peace settlement that resolved the dispute.",
      },
      {
        name: "Paco Moncayo",
        role: "Ecuadorian military commander in the Cenepa",
        side: "belligerent",
        importance: 70,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Directed Ecuadorian defensive operations; later became a prominent politician and mayor of Quito.",
      },
    ],
    infobox: {
      dates: "January - March 1995",
      location: "Cenepa Valley, Cordillera del Condor (Ecuador-Peru border)",
      result: "Ceasefire; 1998 peace treaty resolved border dispute",
      belligerents: "Ecuador vs Peru",
      strength: "Ecuadorian jungle defenses vs Peruvian conventional assault",
      casualties: "~90+ killed (both sides combined)",
    },
  },

  "Second Liberian Civil War": {
    theater: "West Africa - **Liberia**, from the **Lofa County** border with Guinea to the siege of **Monrovia**",
    summary: "The **Second Liberian Civil War (1999-2003)** was the sequel nobody wanted but everyone expected. **Liberians United for Reconciliation and Democracy (LURD)**, backed by **Guinea**, invaded from the north to overthrow President **Charles Taylor**, who had won the 1997 election after causing the first civil war. Taylor's government was simultaneously destabilizing **Sierra Leone** through the **RUF** diamond-for-weapons pipeline. A second rebel group, **MODEL**, opened a southern front with **Cote d'Ivoire** backing. By 2003, rebels were shelling **Monrovia** while Taylor was indicted for war crimes by the **Special Court for Sierra Leone**. International pressure and a Nigerian exile deal finally removed Taylor. The war killed another **150,000-300,000** people and proved that electing a warlord president does not, in fact, produce peace.",
    background: [
      "**Charles Taylor's** presidency (1997-2003) was characterized by corruption, repression, and regional destabilization.",
      "Taylor's support for Sierra Leone's **RUF** rebels brought international sanctions and regional hostility.",
      "**Guinea** backed LURD as retaliation for Taylor-supported attacks on Guinean border communities.",
      "The war economy of diamonds, timber, and rubber that funded the first war continued under Taylor's government.",
    ],
    participants: [
      { name: "Government of Liberia (Charles Taylor)", role: "Defending regime using government forces, militia, and child soldiers against multi-front rebel advance.", side: "belligerent" },
      { name: "LURD", role: "Guinea-backed rebel movement advancing from the north toward Monrovia.", side: "belligerent" },
      { name: "MODEL", role: "Cote d'Ivoire-backed rebel movement opening a second front from the southeast.", side: "belligerent" },
      { name: "ECOWAS / Nigerian peacekeepers", role: "Deployed to Monrovia in 2003 to facilitate Taylor's departure and stabilize the capital.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "1999-2001", title: "LURD insurgency begins", detail: "Rebels advance from Lofa County; government forces pushed back despite atrocities against civilians." },
      { period: "2003", title: "Siege of Monrovia", detail: "LURD shells the capital; hundreds of civilians killed; humanitarian catastrophe in the city." },
      { period: "Jun 2003", title: "Taylor indicted", detail: "Special Court for Sierra Leone unseals war crimes indictment against Taylor while he attends peace talks." },
      { period: "Aug 2003", title: "Taylor departs", detail: "Nigerian exile deal; ECOWAS peacekeepers deploy; Comprehensive Peace Agreement signed." },
    ],
    outcome: "Taylor exiled to Nigeria (later arrested and convicted of war crimes); transitional government established; UN peacekeeping mission (UNMIL) deployed; **Ellen Johnson Sirleaf** elected president in 2005.",
    casualties: {
      military: "Thousands of combatants killed across all factions; widespread use of child soldiers by all parties.",
      civilian: "Estimated **150,000-300,000** total dead; civilians bore the overwhelming burden of violence.",
      displacement: "Over **1 million** displaced internally and as refugees across West Africa.",
      note: "Combined with the first civil war, Liberia lost approximately 10% of its population to conflict-related deaths between 1989 and 2003.",
    },
    orderOfBattle: [
      { name: "Taylor government forces", strength: "Army, Anti-Terrorist Unit, and militia including extensive child soldier recruitment", note: "Increasingly degraded by defections, sanctions, and multi-front pressure." },
      { name: "LURD and MODEL", strength: "Combined rebel strength of 10,000-20,000 fighters with regional state backing", note: "Military pressure from two directions made government defense unsustainable." },
    ],
    aftermath: [
      "**Charles Taylor** was arrested in 2006, tried by the Special Court for Sierra Leone, and sentenced to **50 years** for war crimes and crimes against humanity.",
      "**Ellen Johnson Sirleaf** became Africa's first elected female head of state in 2005, beginning Liberia's recovery.",
      "**UNMIL** became one of the UN's largest peacekeeping missions, deploying 15,000 troops at peak.",
      "Liberia's recovery from two civil wars required decades of international support and remains incomplete.",
    ],
    maps: {
      title: "Second Liberian Civil War",
      description: "Two rebel movements, one besieged capital, and the end of a warlord presidency.",
      points: [
        { name: "Lofa County", x: 48, y: 42, year: "1999-2002", note: "LURD invasion corridor from the Guinean border." },
        { name: "Monrovia", x: 42, y: 50, year: "2003", note: "Capital besieged and shelled by LURD; site of humanitarian catastrophe." },
        { name: "Southeast Liberia", x: 50, y: 54, year: "2003", note: "MODEL advance from Cote d'Ivoire opened the second front." },
      ],
    },
    technology: [
      { name: "Child soldier recruitment", type: "Manpower exploitation", side: "All factions", impact: "Continued the first war's pattern of drugging and brutalizing children into combat roles." },
      { name: "Diamond-for-weapons networks", type: "War economy", side: "Taylor government", impact: "Sierra Leone conflict diamonds funded Taylor's war machine until international sanctions disrupted the pipeline." },
      { name: "International criminal indictment", type: "Legal warfare", side: "International community", impact: "Taylor's indictment during peace talks accelerated his removal and demonstrated accountability mechanisms." },
    ],
    centralFigures: [
      {
        name: "Charles Taylor",
        role: "President of Liberia",
        side: "belligerent",
        importance: 92,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Warlord-turned-president whose regional destabilization ended with war crimes conviction at The Hague.",
      },
      {
        name: "Ellen Johnson Sirleaf",
        role: "Future President of Liberia",
        side: "nonBelligerent",
        importance: 78,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Ellen_Johnson_Sirleaf.jpg",
        note: "Won 2005 post-war election; became Africa's first elected female head of state; Nobel Peace Prize laureate.",
      },
      {
        name: "Sekou Conneh",
        role: "LURD chairman",
        side: "belligerent",
        importance: 62,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the primary rebel movement that besieged Monrovia and forced Taylor's departure.",
      },
    ],
    infobox: {
      dates: "1999 - 2003",
      location: "Liberia, West Africa",
      result: "Taylor exiled; peace agreement; Sirleaf elected 2005",
      belligerents: "Taylor government vs LURD and MODEL rebels",
      strength: "Government forces vs two rebel movements with regional backing",
      casualties: "150,000-300,000 dead; 1 million+ displaced",
    },
  },

  "Al-Qaeda Insurgency in Yemen": {
    theater: "Arabian Peninsula - **Yemen**, from **Sana'a** to the **Abyan** and **Shabwa** governorates, **Marib**, and the **Hadramawt**",
    summary: "The **Al-Qaeda Insurgency in Yemen (1998-present)** is the long-running campaign by **Al-Qaeda in the Arabian Peninsula (AQAP)** and its predecessors against the Yemeni state, Western targets, and eventually rival groups. It began with the **1998 kidnapping of Western tourists** and the **2000 USS Cole bombing** in Aden, escalated through AQAP's formation in 2009, and became entangled with Yemen's civil war after 2014. AQAP exploited state collapse to seize territory in southern Yemen, was pushed back by UAE-backed forces, and adapted into a persistent insurgent presence. The US conducted hundreds of drone strikes. Yemen became the place where counterterrorism met state failure and discovered they made each other worse.",
    background: [
      "Yemen's weak central government, tribal politics, and poverty created permissive conditions for jihadist organizing.",
      "**Osama bin Laden's** family roots in Hadramawt gave al-Qaeda cultural and logistical connections to Yemen.",
      "The **USS Cole bombing** (2000) demonstrated AQAP's predecessor's capability for spectacular attacks.",
      "Saudi and Yemeni al-Qaeda branches merged in **2009** to form **AQAP**, which became al-Qaeda's most operationally capable affiliate.",
    ],
    participants: [
      { name: "AQAP", role: "Jihadist organization conducting insurgency, territorial control, and international attack planning from Yemeni territory.", side: "belligerent" },
      { name: "Yemeni government (various)", role: "Conducted counterterrorism operations with varying commitment and capability across multiple regime changes.", side: "belligerent" },
      { name: "United States", role: "Conducted drone strikes, special operations raids, and intelligence support for Yemeni counterterrorism.", side: "belligerent" },
      { name: "UAE-backed southern forces", role: "Fought AQAP for territorial control in southern Yemen during the civil war period.", side: "belligerent" },
    ],
    timeline: [
      { period: "1998-2001", title: "Early operations", detail: "Tourist kidnappings, USS Cole bombing, and initial al-Qaeda network development in Yemen." },
      { period: "2009", title: "AQAP formation", detail: "Saudi and Yemeni branches merge; underwear bomber plot; AQAP becomes al-Qaeda's most dangerous affiliate." },
      { period: "2011-2014", title: "Arab Spring chaos", detail: "Saleh falls; AQAP seizes territory in Abyan; **Ansar al-Sharia** governs towns; Yemeni military pushes back." },
      { period: "2015-present", title: "Civil war entanglement", detail: "Houthi takeover creates multi-sided conflict; AQAP exploits chaos; US drone campaign intensifies; UAE operations degrade AQAP territorial control." },
    ],
    outcome: "AQAP degraded but not defeated; lost territorial control but maintains insurgent capability; Yemen's civil war continues to provide operational space.",
    casualties: {
      military: "Hundreds of Yemeni security forces killed in AQAP attacks; unknown number of AQAP fighters killed in military operations and drone strikes.",
      civilian: "Civilian casualties from both AQAP attacks and US drone strikes; the latter became a major human rights controversy.",
      displacement: "AQAP-related violence contributed to broader Yemeni displacement crisis affecting millions.",
      note: "Disaggregating AQAP-specific casualties from Yemen's broader civil war is increasingly impossible after 2015.",
    },
    orderOfBattle: [
      { name: "AQAP", strength: "Estimated 1,000-4,000 fighters at various points; fluctuates with civil war dynamics", note: "Combines local tribal fighters with ideological jihadists and foreign operatives." },
      { name: "US counterterrorism apparatus", strength: "Drone fleet, special operations forces, and intelligence networks", note: "Hundreds of strikes conducted; killed senior leaders but generated civilian casualty controversies." },
    ],
    aftermath: [
      "AQAP's **Inspire magazine** and English-language propaganda influenced lone-wolf attacks worldwide.",
      "The US drone campaign in Yemen became a defining and controversial element of post-9/11 counterterrorism policy.",
      "Yemen's state collapse after 2014 demonstrated that counterterrorism without governance produces diminishing returns.",
      "AQAP adapted from territorial control ambitions to a more dispersed insurgent model embedded in tribal networks.",
    ],
    maps: {
      title: "AQAP operational zones in Yemen",
      description: "From the Cole bombing in Aden harbor to the tribal badlands of the south and east.",
      points: [
        { name: "Aden harbor", x: 54, y: 58, year: "2000", note: "Site of the USS Cole bombing that killed 17 US sailors." },
        { name: "Abyan / Zinjibar", x: 54, y: 56, year: "2011-2012", note: "AQAP territorial control zone; governed through Ansar al-Sharia front." },
        { name: "Marib / Shabwa", x: 56, y: 50, year: "2009-present", note: "Tribal areas providing AQAP sanctuary and operational depth." },
      ],
    },
    technology: [
      { name: "US drone strikes (MQ-9 Reaper)", type: "Remote precision strike", side: "US", impact: "Killed senior AQAP leaders but generated civilian casualties and political backlash." },
      { name: "Inspire magazine", type: "Propaganda / radicalization", side: "AQAP", impact: "English-language publication provided bomb-making instructions and inspired attacks in Western countries." },
      { name: "Tribal alliance networks", type: "Social infrastructure", side: "AQAP", impact: "Embedding within tribal structures provided protection that military operations alone could not overcome." },
    ],
    centralFigures: [
      {
        name: "Anwar al-Awlaki",
        role: "AQAP propagandist and operational planner",
        side: "belligerent",
        importance: 85,
        portrait: "/portraits/placeholder-figure.svg",
        note: "US-born cleric who became AQAP's most effective English-language recruiter; killed by US drone strike in 2011.",
      },
      {
        name: "Nasir al-Wuhayshi",
        role: "AQAP emir (2009-2015)",
        side: "belligerent",
        importance: 80,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Former bin Laden aide who built AQAP into al-Qaeda's most capable affiliate; killed by US strike in 2015.",
      },
      {
        name: "Ali Abdullah Saleh",
        role: "President of Yemen (1990-2012)",
        side: "belligerent",
        importance: 75,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Played a double game with AQAP - fighting them for US support while tolerating them as leverage; killed by Houthis in 2017.",
      },
    ],
    infobox: {
      dates: "1998 - present",
      location: "Yemen",
      result: "AQAP degraded but persistent; conflict ongoing",
      belligerents: "AQAP vs Yemeni government, US, and UAE-backed forces",
      strength: "1,000-4,000 AQAP fighters vs state and international counterterrorism forces",
      casualties: "Thousands killed across all phases; entangled with broader civil war",
    },
  },

  "2001 Insurgency in the Republic of North Macedonia": {
    theater: "Southeastern Europe - **North Macedonia**, concentrated in the **Tetovo** and **Kumanovo** regions near the **Kosovo** border",
    summary: "The **2001 Insurgency in the Republic of North Macedonia** was a brief but alarming conflict between ethnic Albanian insurgents of the **National Liberation Army (NLA)** and Macedonian security forces. The NLA, with links to the **Kosovo Liberation Army**, launched attacks in January 2001 demanding greater rights for the ethnic Albanian minority (~25% of the population). Fighting escalated through the spring with the NLA seizing territory near **Tetovo** and **Kumanovo**. Unlike the Kosovo and Bosnia precedents, this one got a diplomatic ending before it became a catastrophe: the **Ohrid Framework Agreement** in August 2001 granted expanded Albanian language rights, decentralization, and proportional representation. NATO deployed to collect NLA weapons. It was the Balkans conflict that actually worked out - which, given the neighborhood's track record, deserves its own category.",
    background: [
      "North Macedonia's independence in 1991 left ethnic Albanians feeling marginalized in a state defined as belonging to ethnic Macedonians.",
      "The **1999 Kosovo War** radicalized some ethnic Albanians and created cross-border militant networks.",
      "The NLA drew fighters and weapons from Kosovo, using the mountainous border terrain as sanctuary.",
      "Macedonian security forces were poorly equipped for counterinsurgency and initially struggled to contain the NLA advance.",
    ],
    participants: [
      { name: "National Liberation Army (NLA)", role: "Ethnic Albanian insurgent group demanding constitutional reforms and greater minority rights.", side: "belligerent" },
      { name: "Macedonian security forces", role: "Army and police attempting to suppress the insurgency and maintain territorial control.", side: "belligerent" },
      { name: "NATO / EU / US diplomats", role: "Mediated the Ohrid Agreement and deployed forces to oversee NLA disarmament.", side: "nonBelligerent" },
      { name: "OSCE", role: "Monitored implementation of the Ohrid Agreement and supported confidence-building measures.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Jan-Feb 2001", title: "NLA emerges", detail: "Attacks on police stations and military positions near Tetovo; government declares crisis zone." },
      { period: "Mar-Jun 2001", title: "Escalation", detail: "NLA expands operations; fighting around Tetovo, Kumanovo, and Aracinovo; civilian displacement." },
      { period: "Jul-Aug 2001", title: "Ohrid negotiations", detail: "International pressure produces Framework Agreement granting Albanian rights in exchange for NLA disarmament." },
      { period: "Aug-Sep 2001", title: "NATO Operation Essential Harvest", detail: "NATO deploys 3,500 troops to collect NLA weapons; insurgency formally ends." },
    ],
    outcome: "Ohrid Framework Agreement resolved core grievances; NLA disarmed; North Macedonia preserved as a multi-ethnic state with expanded minority rights.",
    casualties: {
      military: "Approximately **60-80** security force members killed; NLA losses estimated at **50-70** killed.",
      civilian: "Dozens of civilians killed; relatively low compared to other Balkan conflicts.",
      displacement: "Over **100,000** people temporarily displaced from conflict zones.",
      note: "The relatively low death toll reflects both the conflict's short duration and the speed of diplomatic intervention.",
    },
    orderOfBattle: [
      { name: "NLA", strength: "Estimated 2,000-3,000 fighters with light weapons and Kosovo-sourced equipment", note: "Effective in hit-and-run operations but lacked capability for sustained conventional warfare." },
      { name: "Macedonian security forces", strength: "Army and police with limited counterinsurgency capability and aging equipment", note: "Struggled with NLA mobility and cross-border sanctuary but maintained control of major population centers." },
    ],
    aftermath: [
      "The **Ohrid Agreement** became a model for resolving ethnic conflicts through constitutional reform rather than partition.",
      "North Macedonia's EU and NATO aspirations provided powerful incentives for both communities to maintain the agreement.",
      "The country joined **NATO in 2020** after resolving the name dispute with Greece (Prespa Agreement, 2018).",
      "Former NLA leader **Ali Ahmeti** became a mainstream politician, leading the ethnic Albanian **DUI** party in coalition governments.",
    ],
    maps: {
      title: "2001 North Macedonia insurgency",
      description: "The Balkan conflict that got a diplomatic ending before it needed a tribunal.",
      points: [
        { name: "Tetovo", x: 48, y: 44, year: "2001", note: "Largest ethnic Albanian city; epicenter of NLA operations and fighting." },
        { name: "Kumanovo", x: 52, y: 42, year: "2001", note: "Northern city near Kosovo border; site of significant clashes." },
        { name: "Aracinovo", x: 52, y: 44, year: "2001", note: "Village near Skopje where NLA presence triggered crisis; NATO-brokered evacuation." },
      ],
    },
    technology: [
      { name: "Cross-border sanctuary", type: "Insurgent logistics", side: "NLA", impact: "Kosovo border provided weapons supply, recruitment, and safe haven that Macedonian forces could not interdict." },
      { name: "Preventive diplomacy", type: "Conflict resolution", side: "NATO/EU/US", impact: "Rapid international engagement prevented escalation into the kind of catastrophe seen in Bosnia and Kosovo." },
      { name: "Constitutional reform package", type: "Political settlement", side: "International mediators", impact: "Ohrid Agreement addressed root causes rather than just symptoms, producing durable peace." },
    ],
    centralFigures: [
      {
        name: "Ali Ahmeti",
        role: "NLA political leader",
        side: "belligerent",
        importance: 78,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Transitioned from insurgent leader to mainstream politician; has led the DUI party in multiple coalition governments.",
      },
      {
        name: "Boris Trajkovski",
        role: "President of North Macedonia",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Navigated the crisis toward negotiated settlement despite domestic pressure for military escalation; died in plane crash 2004.",
      },
      {
        name: "Javier Solana",
        role: "EU High Representative",
        side: "nonBelligerent",
        importance: 65,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Key international mediator who helped broker the Ohrid Framework Agreement.",
      },
    ],
    infobox: {
      dates: "January - November 2001",
      location: "Republic of North Macedonia",
      result: "Ohrid Framework Agreement; NLA disarmed; expanded minority rights",
      belligerents: "NLA vs Macedonian security forces",
      strength: "~2,000-3,000 NLA fighters vs Macedonian army and police",
      casualties: "~130-150 combatants killed; 100,000+ displaced",
    },
  },
`;

content = content.replace(/\n};(\s*)$/, '\n' + dossiers + '\n};$1');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Batch 3 (5 dossiers) added successfully.');
