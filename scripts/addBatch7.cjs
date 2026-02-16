const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'featuredWars.js');
let content = fs.readFileSync(filePath, 'utf8');

const dossiers = {

  "Syrian-Turkish Border Clashes": {
    theater: "Middle East - the **Syrian-Turkish border** zone, from **Afrin** and **Kobani** in the west to **Ras al-Ayn** and **Tel Abyad** in the east",
    summary: "The **Syrian-Turkish Border Clashes (2012-present)** encompass Turkey's series of military operations into northern Syria targeting **Kurdish** forces that Ankara considers terrorists and Washington considers allies. Turkey launched **Operation Euphrates Shield** (2016), **Operation Olive Branch** (2018), and **Operation Peace Spring** (2019) to push **YPG/SDF** Kurdish forces away from its border and create a 'safe zone' for resettling Syrian refugees. The operations displaced hundreds of thousands of Kurds and created Turkish-controlled buffer zones administered by Turkish-backed Syrian rebel factions. The clashes put NATO ally Turkey in direct conflict with US-backed Kurdish forces who were simultaneously fighting **ISIS**. It was the conflict where America's allies were fighting America's other allies, and everyone pretended this was fine.",
    background: [
      "The **Syrian Civil War** created a power vacuum along Turkey's southern border that Kurdish forces filled.",
      "The **YPG** (People's Protection Units) established autonomous governance in northern Syria (**Rojava**), alarming Turkey.",
      "Turkey considers the YPG an extension of the **PKK**, which has fought a decades-long insurgency inside Turkey.",
      "The US armed and supported the **SDF** (YPG-led coalition) as its primary ground force against ISIS, infuriating Ankara.",
    ],
    participants: [
      { name: "Turkey (Turkish Armed Forces)", role: "Conducted multiple cross-border operations to push Kurdish forces from the border and establish buffer zones.", side: "belligerent" },
      { name: "Turkish-backed Syrian rebels (SNA)", role: "Syrian opposition factions allied with Turkey serving as ground forces in Turkish operations.", side: "belligerent" },
      { name: "YPG / SDF (Kurdish forces)", role: "Kurdish-led forces defending autonomous territory in northern Syria; US-backed in the anti-ISIS campaign.", side: "belligerent" },
      { name: "United States", role: "Backed SDF against ISIS while trying to manage Turkish ally's hostility toward the same force.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "2012-2015", title: "Border tensions build", detail: "Syrian war spillover; Kurdish autonomy grows; Turkey shells YPG positions; ISIS attacks on Turkish border." },
      { period: "Aug 2016", title: "Operation Euphrates Shield", detail: "Turkey invades to clear ISIS and prevent Kurdish territorial contiguity along the border." },
      { period: "Jan 2018", title: "Operation Olive Branch", detail: "Turkey attacks Afrin canton; Kurdish forces expelled; area occupied by Turkish-backed rebels." },
      { period: "Oct 2019", title: "Operation Peace Spring", detail: "Turkey invades after US withdrawal announcement; captures Ras al-Ayn and Tel Abyad; international condemnation." },
    ],
    outcome: "Turkey controls buffer zones in northern Syria through proxy forces; Kurdish autonomous project fragmented; US-Turkey relations strained; no permanent settlement.",
    casualties: {
      military: "Hundreds of Turkish soldiers and Turkish-backed fighters killed; hundreds of SDF/YPG fighters killed across operations.",
      civilian: "Hundreds of civilians killed in Turkish operations and subsequent occupation; documented abuses by Turkish-backed factions.",
      displacement: "Over **300,000** displaced by Operation Peace Spring alone; Afrin's Kurdish population largely displaced.",
      note: "Demographic engineering through displacement and resettlement of Arab refugees into formerly Kurdish areas is a central concern.",
    },
    orderOfBattle: [
      { name: "Turkish Armed Forces + SNA", strength: "Conventional military with air power, armor, and artillery plus thousands of Syrian rebel fighters", note: "NATO's second-largest army deployed against a US-backed partner force." },
      { name: "YPG/SDF", strength: "60,000-100,000 fighters experienced from anti-ISIS campaign but lacking air power and heavy weapons", note: "Effective light infantry but unable to defend against Turkish conventional superiority without US air cover." },
    ],
    aftermath: [
      "The **Afrin** operation displaced most of the canton's Kurdish population and installed Turkish-backed governance.",
      "US credibility with Kurdish allies was severely damaged by the 2019 withdrawal that enabled Operation Peace Spring.",
      "Turkey's operations created a model of using Syrian rebel proxies for cross-border operations.",
      "The Kurdish autonomous project in northern Syria was fragmented but not destroyed.",
    ],
    maps: {
      title: "Syrian-Turkish border operations",
      description: "NATO's second-largest army vs America's favorite Kurdish allies.",
      points: [
        { name: "Afrin", x: 50, y: 44, year: "2018", note: "Kurdish canton captured by Turkey in Operation Olive Branch; Kurdish population largely displaced." },
        { name: "Kobani", x: 52, y: 44, year: "2014-present", note: "Symbolic Kurdish city; site of famous anti-ISIS battle; threatened by Turkish operations." },
        { name: "Ras al-Ayn / Tel Abyad", x: 54, y: 44, year: "2019", note: "Border towns captured in Operation Peace Spring after US withdrawal." },
      ],
    },
    technology: [
      { name: "Turkish drone warfare", type: "UCAV", side: "Turkey", impact: "Bayraktar and Anka drones provided persistent surveillance and strike capability against Kurdish positions." },
      { name: "US withdrawal as enabler", type: "Strategic decision", side: "US", impact: "Removal of US forces from the border area gave Turkey the green light for Operation Peace Spring." },
      { name: "Demographic engineering", type: "Population manipulation", side: "Turkey/SNA", impact: "Resettlement of Arab refugees into Kurdish areas aimed to permanently alter the border zone's ethnic composition." },
    ],
    centralFigures: [
      {
        name: "Recep Tayyip Erdogan",
        role: "President of Turkey",
        side: "belligerent",
        importance: 90,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Recep_Tayyip_Erdo%C4%9Fan_2023.jpg",
        note: "Ordered all three major operations; made Kurdish containment a central pillar of Turkish foreign policy.",
      },
      {
        name: "Mazloum Abdi",
        role: "SDF commander-in-chief",
        side: "belligerent",
        importance: 78,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led Kurdish forces through the ISIS war and Turkish operations; navigated between US alliance and Turkish hostility.",
      },
      {
        name: "Donald Trump",
        role: "US President (2017-2021)",
        side: "nonBelligerent",
        importance: 75,
        portrait: "/portraits/placeholder-figure.svg",
        note: "His abrupt withdrawal announcement enabled Operation Peace Spring and drew bipartisan criticism.",
      },
    ],
    infobox: {
      dates: "2012 - present",
      location: "Northern Syria / Turkish border zone",
      result: "Turkish buffer zones established; Kurdish autonomy fragmented",
      belligerents: "Turkey + Syrian rebels vs YPG/SDF Kurdish forces",
      strength: "Turkish conventional military vs experienced Kurdish light infantry",
      casualties: "Hundreds killed on all sides; 300,000+ displaced",
    },
  },

  "Crisis in Venezuela": {
    theater: "South America - **Venezuela**, centered on **Caracas** with unrest across the country",
    summary: "The **Crisis in Venezuela (2010s-present)** is the slow-motion collapse of what was once South America's wealthiest country. Under **Hugo Chavez** and his successor **Nicolas Maduro**, Venezuela's oil-dependent economy imploded due to mismanagement, corruption, falling oil prices, and US sanctions. By the late 2010s, hyperinflation had destroyed the currency, hospitals lacked medicine, and millions were fleeing. The political crisis peaked in 2019 when **Juan Guaido** declared himself interim president with US backing, but Maduro retained military loyalty and power. The crisis has produced over **7 million** refugees - the largest displacement in Western Hemisphere history. While not a conventional war, the crisis involves state violence against protesters, armed colectivos, military defections, and a failed mercenary invasion attempt. It is the conflict where the bullets are hunger, hyperinflation, and the world's largest proven oil reserves somehow producing poverty.",
    background: [
      "**Hugo Chavez** (1999-2013) built a socialist state funded by oil revenues; when prices crashed, the model collapsed.",
      "**Maduro** inherited a deteriorating economy and responded with authoritarian consolidation rather than reform.",
      "US and EU sanctions targeted the Maduro government but also worsened economic conditions for ordinary Venezuelans.",
      "The military's loyalty to Maduro - maintained through corruption and patronage - prevented regime change despite mass protests.",
    ],
    participants: [
      { name: "Maduro government", role: "Authoritarian regime maintaining power through military loyalty, security forces, and armed civilian groups (colectivos).", side: "belligerent" },
      { name: "Venezuelan opposition", role: "Political opposition including Guaido's interim government claim; organized mass protests; largely unable to dislodge Maduro.", side: "belligerent" },
      { name: "United States", role: "Recognized Guaido; imposed sanctions; supported regime change diplomatically and economically.", side: "nonBelligerent" },
      { name: "Russia and Cuba", role: "Provided military advisors, intelligence support, and economic lifelines to the Maduro government.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "2014-2016", title: "Economic collapse begins", detail: "Oil prices crash; hyperinflation begins; shortages of food and medicine become severe." },
      { period: "2017", title: "Mass protests", detail: "Months of anti-government protests; over 160 killed; Maduro creates constituent assembly to bypass opposition-held legislature." },
      { period: "Jan 2019", title: "Guaido challenge", detail: "Juan Guaido declares himself interim president; recognized by 50+ countries; Maduro retains military and power." },
      { period: "2020-present", title: "Stalemate and exodus", detail: "Failed mercenary invasion (Operation Gideon); Guaido's support fades; refugee crisis continues; Maduro consolidates." },
    ],
    outcome: "Maduro remains in power; opposition fragmented; economy partially stabilized at much lower level; refugee crisis ongoing with 7+ million displaced.",
    casualties: {
      military: "Limited conventional military casualties; security force defections mostly individual rather than unit-level.",
      civilian: "Hundreds killed in protests and security force crackdowns; thousands of extrajudicial killings by security forces (FAES).",
      displacement: "Over **7.7 million** Venezuelans have fled the country - the largest refugee crisis in Western Hemisphere history.",
      note: "The indirect death toll from healthcare collapse, malnutrition, and preventable disease dwarfs direct political violence.",
    },
    orderOfBattle: [
      { name: "Venezuelan Armed Forces (FANB)", strength: "350,000 active military plus armed colectivo civilian groups", note: "Military loyalty maintained through corruption networks and Cuban intelligence support." },
      { name: "Opposition forces", strength: "Mass civilian protest movement with no significant armed capability", note: "Failed to attract military defections at scale needed for regime change." },
    ],
    aftermath: [
      "Venezuela's refugee crisis has strained neighboring countries, particularly **Colombia**, **Peru**, **Ecuador**, and **Brazil**.",
      "The **Operation Gideon** mercenary fiasco (2020) - a botched invasion by ex-US special forces - became an international embarrassment.",
      "Maduro has partially reopened the oil sector to foreign investment, stabilizing the economy at a fraction of its former level.",
      "The crisis demonstrated that even catastrophic economic collapse does not automatically produce regime change when the military stays loyal.",
    ],
    maps: {
      title: "Crisis in Venezuela",
      description: "The world's largest oil reserves producing the Western Hemisphere's largest refugee crisis.",
      points: [
        { name: "Caracas", x: 38, y: 50, year: "2017-2019", note: "Capital; epicenter of mass protests, government crackdowns, and political confrontation." },
        { name: "Colombian border", x: 36, y: 52, year: "2015-present", note: "Primary refugee exodus route; millions have crossed into Colombia." },
        { name: "Maracaibo", x: 36, y: 50, year: "2018-present", note: "Oil capital experiencing some of the worst infrastructure collapse and power outages." },
      ],
    },
    technology: [
      { name: "Colectivos (armed civilian groups)", type: "Paramilitary control", side: "Maduro government", impact: "Armed pro-government groups used for intimidation and violence against protesters." },
      { name: "Sanctions regime", type: "Economic warfare", side: "US", impact: "Targeted sanctions aimed at regime change but also worsened humanitarian conditions." },
      { name: "Cuban intelligence support", type: "Security assistance", side: "Cuba", impact: "Cuban advisors helped structure Venezuelan intelligence and security apparatus to prevent military coups." },
    ],
    centralFigures: [
      {
        name: "Nicolas Maduro",
        role: "President of Venezuela",
        side: "belligerent",
        importance: 90,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Chavez's successor who maintained power through military loyalty and authoritarian consolidation despite economic catastrophe.",
      },
      {
        name: "Juan Guaido",
        role: "Self-declared interim president",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Recognized by 50+ countries but unable to translate international support into actual power; sidelined by 2023.",
      },
      {
        name: "Hugo Chavez",
        role: "President of Venezuela (1999-2013)",
        side: "belligerent",
        importance: 85,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Built the Bolivarian system whose collapse produced the crisis; died of cancer in 2013 before the worst consequences materialized.",
      },
    ],
    infobox: {
      dates: "2010s - present",
      location: "Venezuela",
      result: "Maduro retains power; economic collapse; 7.7 million refugees",
      belligerents: "Maduro government vs opposition movement",
      strength: "State security forces + colectivos vs unarmed civilian protest movement",
      casualties: "Hundreds killed in political violence; millions displaced by economic collapse",
    },
  },

  "Armenian-Azerbaijani Clashes": {
    theater: "South Caucasus - the **Armenia-Azerbaijan border** and **Nagorno-Karabakh** contact line",
    summary: "The **Armenian-Azerbaijani Clashes (2020-2023)** refer to the decisive military confrontations that ended the frozen Nagorno-Karabakh conflict in Azerbaijan's favor. The **2020 Second Nagorno-Karabakh War** (44 days) saw Azerbaijan, armed with **Turkish Bayraktar TB2 drones** and Israeli loitering munitions, recapture most of the territory Armenia had held since the 1990s. A Russian-brokered ceasefire left a reduced Armenian enclave under Russian peacekeeping. Then in September 2023, Azerbaijan launched a lightning offensive that conquered the remaining enclave in 24 hours, triggering the exodus of virtually the entire **120,000** ethnic Armenian population. The clashes demonstrated how drone technology could transform a frozen conflict into a decisive military outcome, and how a Russian security guarantee could evaporate when Moscow was distracted by Ukraine.",
    background: [
      "The **Nagorno-Karabakh** conflict dates to the late Soviet period; Armenia won the 1990s war and controlled the enclave plus surrounding Azerbaijani territory.",
      "Azerbaijan spent two decades using oil wealth to build a modern military while Armenia's forces stagnated.",
      "**Turkey** provided decisive military support to Azerbaijan including drone technology, training, and Syrian mercenaries.",
      "Russia's role as Armenia's security guarantor was complicated by its desire to maintain relationships with both sides.",
    ],
    participants: [
      { name: "Azerbaijan", role: "Launched military offensives in 2020 and 2023 to recapture Nagorno-Karabakh and surrounding territories.", side: "belligerent" },
      { name: "Armenia / Nagorno-Karabakh forces", role: "Defended the Armenian-populated enclave; suffered decisive defeats in both 2020 and 2023.", side: "belligerent" },
      { name: "Turkey", role: "Provided drones, military advisors, and Syrian mercenary fighters to Azerbaijan.", side: "belligerent" },
      { name: "Russia", role: "Brokered 2020 ceasefire; deployed peacekeepers; failed to prevent 2023 Azerbaijani offensive.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Jul 2020", title: "Border clashes", detail: "Fighting along the Armenia-Azerbaijan international border (not Karabakh); several soldiers killed." },
      { period: "Sep-Nov 2020", title: "44-Day War", detail: "Azerbaijan launches full offensive; drones devastate Armenian positions; Russia brokers ceasefire after Shusha falls." },
      { period: "2021-2023", title: "Blockade and pressure", detail: "Azerbaijan blockades Lachin corridor; Armenian enclave increasingly isolated; Russian peacekeepers passive." },
      { period: "Sep 2023", title: "Final offensive", detail: "Azerbaijan conquers remaining enclave in 24 hours; 120,000 Armenians flee; Nagorno-Karabakh ceases to exist." },
    ],
    outcome: "Complete Azerbaijani victory; Nagorno-Karabakh's entire Armenian population displaced; the enclave that existed for three decades was erased in 24 hours.",
    casualties: {
      military: "2020 war: approximately **4,000** Azerbaijani and **4,000** Armenian soldiers killed. 2023: minimal military casualties due to rapid capitulation.",
      civilian: "Hundreds of civilians killed in the 2020 war from shelling and cluster munitions on both sides.",
      displacement: "**120,000** ethnic Armenians - virtually the entire population - fled Nagorno-Karabakh in September 2023.",
      note: "The 2023 displacement effectively ended a 3,000-year Armenian presence in the region.",
    },
    orderOfBattle: [
      { name: "Azerbaijani Armed Forces", strength: "Modern military with Turkish drones, Israeli loitering munitions, and conventional superiority", note: "Two decades of oil-funded modernization created decisive technological advantage." },
      { name: "Armenian / Karabakh forces", strength: "Outdated Soviet-era equipment; static defensive positions vulnerable to drone warfare", note: "1990s-era defensive doctrine was catastrophically unsuited to modern drone and precision warfare." },
    ],
    aftermath: [
      "The **2020 war** was studied worldwide as a demonstration of how drones transform conventional warfare.",
      "Russia's failure to protect Armenia despite a mutual defense treaty damaged Moscow's credibility as a security guarantor.",
      "Armenia's **Velvet Revolution** leader **Nikol Pashinyan** faced massive domestic backlash for the military defeats.",
      "The complete depopulation of Nagorno-Karabakh in 2023 ended one of the world's longest-running ethnic conflicts through demographic elimination.",
    ],
    maps: {
      title: "Armenian-Azerbaijani clashes 2020-2023",
      description: "From frozen conflict to decisive resolution in three years.",
      points: [
        { name: "Shusha/Shushi", x: 56, y: 46, year: "2020", note: "Strategic hilltop city; its capture by Azerbaijan in November 2020 forced the ceasefire." },
        { name: "Lachin corridor", x: 56, y: 46, year: "2022-2023", note: "Only road connecting Karabakh to Armenia; Azerbaijani blockade isolated the enclave." },
        { name: "Stepanakert/Khankendi", x: 56, y: 46, year: "2023", note: "Karabakh capital; fell in 24 hours in September 2023; population fled entirely." },
      ],
    },
    technology: [
      { name: "Bayraktar TB2 drones", type: "UCAV", side: "Azerbaijan/Turkey", impact: "Destroyed Armenian air defenses, armor, and artillery positions with devastating effectiveness." },
      { name: "IAI Harop loitering munitions", type: "Kamikaze drone", side: "Azerbaijan/Israel", impact: "Israeli-made suicide drones targeted Armenian radar and air defense systems." },
      { name: "Soviet-era static defenses", type: "Fortification", side: "Armenia", impact: "Trench lines and bunkers designed for 1990s warfare were death traps against precision drone strikes." },
    ],
    centralFigures: [
      {
        name: "Ilham Aliyev",
        role: "President of Azerbaijan",
        side: "belligerent",
        importance: 90,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Spent two decades building military capability for reconquest; achieved complete victory in 2023.",
      },
      {
        name: "Nikol Pashinyan",
        role: "Prime Minister of Armenia",
        side: "belligerent",
        importance: 82,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Democratic reformer who inherited a military unprepared for modern warfare; blamed for the defeats.",
      },
      {
        name: "Vladimir Putin",
        role: "President of Russia (mediator/guarantor)",
        side: "nonBelligerent",
        importance: 78,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Brokered the 2020 ceasefire and deployed peacekeepers; distracted by Ukraine, failed to prevent 2023 conquest.",
      },
    ],
    infobox: {
      dates: "2020 - 2023",
      location: "Nagorno-Karabakh and Armenia-Azerbaijan border",
      result: "Complete Azerbaijani victory; 120,000 Armenians displaced; Karabakh ceases to exist",
      belligerents: "Azerbaijan + Turkey vs Armenia / Nagorno-Karabakh",
      strength: "Modern drone-equipped military vs outdated Soviet-era defenses",
      casualties: "~8,000 soldiers killed (2020); 120,000 displaced (2023)",
    },
  },

  "Border Skirmishes between India and China": {
    theater: "South and Central Asia - the **Line of Actual Control (LAC)** between **India** and **China**, from **Ladakh** to **Arunachal Pradesh**",
    summary: "The **Border Skirmishes between India and China (2020-present)** erupted in June 2020 when Indian and Chinese troops clashed in the **Galwan Valley** of **Ladakh**, killing **20 Indian** and at least **4 Chinese** soldiers in the first deadly confrontation between the two nuclear powers in 45 years. The soldiers fought with rocks, iron bars, and clubs wrapped in barbed wire - because both sides maintain a protocol against using firearms at the border. China simultaneously occupied positions across the LAC that India considered its territory. The crisis triggered a massive military buildup on both sides, with tens of thousands of troops deployed to the high-altitude frontier. Partial disengagement has occurred at some friction points, but the fundamental border dispute remains unresolved. It was a reminder that two nuclear-armed nations with 1.4 billion people each can still get into a medieval-style brawl at 14,000 feet.",
    background: [
      "The **India-China border** has been disputed since the **1962 Sino-Indian War**; the LAC is not formally demarcated.",
      "Both sides built infrastructure (roads, airfields) in border areas during the 2010s, increasing friction.",
      "China's construction of a road in the **Galwan Valley** area triggered Indian objections and the June 2020 confrontation.",
      "The no-firearms protocol along the LAC meant the deadliest clash in decades was fought with improvised melee weapons.",
    ],
    participants: [
      { name: "Indian Armed Forces", role: "Deployed tens of thousands of troops to the LAC after the Galwan clash; conducted defensive buildup.", side: "belligerent" },
      { name: "Chinese People's Liberation Army", role: "Occupied forward positions across the LAC; conducted parallel military buildup in Tibet and Xinjiang.", side: "belligerent" },
      { name: "Diplomatic channels", role: "Multiple rounds of military commander and diplomatic talks to manage disengagement at friction points.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "May 2020", title: "Initial standoffs", detail: "Chinese troops move into positions at multiple points along the LAC in Ladakh; face-offs with Indian patrols." },
      { period: "15 Jun 2020", title: "Galwan Valley clash", detail: "Hand-to-hand combat kills 20 Indian and at least 4 Chinese soldiers; worst violence since 1967." },
      { period: "2020-2022", title: "Military buildup", detail: "Both sides deploy tens of thousands of troops; infrastructure construction accelerates; partial disengagement at some points." },
      { period: "2023-present", title: "Managed tension", detail: "Continued diplomatic engagement; some buffer zones created; fundamental dispute unresolved." },
    ],
    outcome: "Partial disengagement at some friction points; massive permanent military deployments on both sides; border dispute unresolved; India-China relations significantly damaged.",
    casualties: {
      military: "**20** Indian soldiers killed at Galwan; China acknowledged **4** killed (Indian sources suggest higher). Additional casualties in subsequent minor clashes.",
      civilian: "No civilian casualties; the border area is extremely remote and sparsely populated.",
      displacement: "No civilian displacement; military deployments in uninhabited high-altitude terrain.",
      note: "The use of melee weapons rather than firearms kept casualties lower than they might have been but made the violence more visceral.",
    },
    orderOfBattle: [
      { name: "Indian forces", strength: "50,000+ troops deployed to Ladakh sector with armor, artillery, and air assets", note: "India reoriented significant military resources from the Pakistan border to the China frontier." },
      { name: "PLA Western Theater Command", strength: "Comparable deployment with infrastructure advantages from Tibetan plateau road and rail network", note: "China's logistics advantage in Tibet offset by India's experience operating at extreme altitude." },
    ],
    aftermath: [
      "India accelerated border infrastructure construction and shifted strategic focus from Pakistan to China.",
      "The clash drove India closer to the **Quad** (US, Japan, Australia) and away from strategic neutrality toward China.",
      "Both sides have invested billions in permanent high-altitude military infrastructure along the LAC.",
      "The Galwan clash demonstrated that even nuclear-armed great powers can stumble into deadly confrontations over disputed territory.",
    ],
    maps: {
      title: "India-China border skirmishes",
      description: "Nuclear powers fighting with rocks at 14,000 feet.",
      points: [
        { name: "Galwan Valley", x: 60, y: 42, year: "2020", note: "Site of the deadly June 2020 clash; melee combat with improvised weapons." },
        { name: "Pangong Tso (lake)", x: 60, y: 42, year: "2020", note: "High-altitude lake where Chinese forces occupied positions on the Indian-claimed side." },
        { name: "Depsang Plains", x: 60, y: 40, year: "2020-present", note: "Strategic plateau where Chinese presence blocks Indian patrol access." },
      ],
    },
    technology: [
      { name: "Melee weapons (no-firearms protocol)", type: "Rules of engagement", side: "Both", impact: "Border protocols against firearms meant soldiers fought with clubs, rocks, and barbed-wire-wrapped iron bars." },
      { name: "High-altitude infrastructure", type: "Military engineering", side: "Both", impact: "Roads, tunnels, and airfields at extreme altitude enable permanent military presence in previously inaccessible terrain." },
      { name: "Satellite surveillance", type: "Intelligence", side: "Both", impact: "Commercial and military satellite imagery tracked troop movements and construction on both sides of the LAC." },
    ],
    centralFigures: [
      {
        name: "Narendra Modi",
        role: "Prime Minister of India",
        side: "belligerent",
        importance: 88,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Narendra_Modi_2021.jpg",
        note: "Managed the crisis while balancing military response with diplomatic engagement; shifted India's strategic orientation.",
      },
      {
        name: "Xi Jinping",
        role: "President of China",
        side: "belligerent",
        importance: 90,
        portrait: "/portraits/placeholder-figure.svg",
        note: "PLA forward positioning reflected broader assertiveness under Xi's leadership across multiple territorial disputes.",
      },
      {
        name: "Bipin Rawat",
        role: "Indian Chief of Defence Staff",
        side: "belligerent",
        importance: 65,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Oversaw India's military response and buildup along the LAC; died in helicopter crash in 2021.",
      },
    ],
    infobox: {
      dates: "2020 - present",
      location: "Line of Actual Control, India-China border (primarily Ladakh)",
      result: "Partial disengagement; massive military buildup; dispute unresolved",
      belligerents: "India vs China",
      strength: "50,000+ troops on each side along the LAC",
      casualties: "20 Indian, 4+ Chinese soldiers killed at Galwan",
    },
  },

  "Nagorno-Karabakh Conflict": {
    theater: "South Caucasus - **Nagorno-Karabakh** (Artsakh) and surrounding territories in **Azerbaijan**, bordering **Armenia**",
    summary: "The **Nagorno-Karabakh Conflict (1988-2023)** was one of the longest-running territorial disputes of the post-Soviet era, ending with the complete elimination of the Armenian enclave in September 2023. It began in 1988 when the Armenian-majority **Nagorno-Karabakh Autonomous Oblast** within Soviet Azerbaijan voted to join Armenia. The ensuing war (1991-1994) saw Armenian forces capture the enclave and seven surrounding Azerbaijani districts, displacing **600,000** Azerbaijanis. The conflict froze for 26 years under an uneasy ceasefire. Azerbaijan's oil-funded military modernization and Turkish drone technology enabled the decisive **2020 Second Karabakh War**, which recaptured most lost territory. In September 2023, Azerbaijan conquered the remaining enclave in 24 hours, and **120,000** Armenians fled, ending a presence dating back millennia. It was a conflict that proved frozen does not mean permanent, and that three decades of diplomatic process can be undone in a single day.",
    background: [
      "Nagorno-Karabakh was an Armenian-majority enclave placed within Azerbaijan by **Stalin** in 1921 as part of Soviet nationality policy.",
      "The **1988 Karabakh movement** was one of the first nationalist mobilizations of the Soviet collapse.",
      "The **1991-1994 war** killed approximately **30,000** and displaced over **1 million** people on both sides.",
      "The **OSCE Minsk Group** (co-chaired by Russia, France, and the US) mediated for 26 years without producing a settlement.",
    ],
    participants: [
      { name: "Azerbaijan", role: "Sought to recapture Nagorno-Karabakh and surrounding territories through diplomacy and ultimately military force.", side: "belligerent" },
      { name: "Armenia / Republic of Artsakh", role: "Defended the Armenian-populated enclave and surrounding buffer zone; suffered decisive defeats in 2020 and 2023.", side: "belligerent" },
      { name: "Turkey", role: "Provided decisive military support to Azerbaijan in 2020 including drones, advisors, and Syrian mercenaries.", side: "belligerent" },
      { name: "Russia", role: "Maintained relationships with both sides; brokered 2020 ceasefire; deployed peacekeepers; failed to prevent 2023 conquest.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "1988-1991", title: "Soviet-era conflict", detail: "Karabakh Armenians demand unification with Armenia; pogroms in Sumgait and Baku; Soviet Union unable to resolve." },
      { period: "1991-1994", title: "First Karabakh War", detail: "Armenian forces capture Karabakh and seven surrounding districts; 30,000 killed; 1 million displaced; ceasefire." },
      { period: "1994-2020", title: "Frozen conflict", detail: "OSCE Minsk Group mediates without result; Azerbaijan builds military; periodic escalation (2016 Four-Day War)." },
      { period: "2020-2023", title: "Resolution by force", detail: "44-Day War recaptures most territory; 2023 offensive conquers remainder; 120,000 Armenians flee; conflict ends." },
    ],
    outcome: "Complete Azerbaijani reconquest; Nagorno-Karabakh's Armenian population entirely displaced; the conflict that lasted 35 years ended with demographic elimination.",
    casualties: {
      military: "First war: ~**30,000** killed. 2020 war: ~**8,000** killed. 2023: minimal due to rapid capitulation.",
      civilian: "Thousands of civilians killed across all phases; both sides committed atrocities during the 1990s war.",
      displacement: "**600,000** Azerbaijanis displaced in 1990s; **120,000** Armenians displaced in 2023. Over **1 million** total displaced across the conflict's history.",
      note: "The conflict produced two waves of ethnic cleansing: Azerbaijanis in the 1990s and Armenians in 2023.",
    },
    orderOfBattle: [
      { name: "Azerbaijani Armed Forces (2020)", strength: "Modern military with Turkish drones, Israeli munitions, and two decades of oil-funded modernization", note: "Technological transformation from 1990s defeat to 2020s decisive victory." },
      { name: "Armenian / Artsakh forces", strength: "Soviet-era equipment and static defensive doctrine unchanged since the 1990s", note: "Failed to modernize during the frozen conflict period; catastrophically outmatched by 2020." },
    ],
    aftermath: [
      "The conflict's resolution through force rather than diplomacy discredited 26 years of **OSCE Minsk Group** mediation.",
      "The **2020 war** became a global case study in drone warfare's transformation of conventional conflict.",
      "Armenia's strategic relationship with Russia was severely damaged by Moscow's failure to fulfill security guarantees.",
      "The complete depopulation of Karabakh ended one of the world's oldest Armenian communities through demographic elimination rather than negotiated settlement.",
    ],
    maps: {
      title: "Nagorno-Karabakh Conflict 1988-2023",
      description: "35 years from Soviet petition to complete reconquest.",
      points: [
        { name: "Stepanakert/Khankendi", x: 56, y: 46, year: "1991-2023", note: "Karabakh capital; shelled in 1990s war; fell in 24 hours in 2023; population fled entirely." },
        { name: "Shusha/Shushi", x: 56, y: 46, year: "2020", note: "Strategic hilltop fortress; its capture by Azerbaijan decided the 2020 war." },
        { name: "Lachin corridor", x: 56, y: 46, year: "2020-2023", note: "Only road connecting Karabakh to Armenia; its blockade preceded the final offensive." },
      ],
    },
    technology: [
      { name: "Bayraktar TB2 and Harop drones", type: "UCAV / loitering munition", side: "Azerbaijan", impact: "Destroyed Armenian air defenses, armor, and artillery; transformed the military balance decisively." },
      { name: "Trench warfare (1990s)", type: "Static defense", side: "Armenia", impact: "Defensive lines that held for 26 years became death traps against precision drone strikes in 2020." },
      { name: "Corridor blockade", type: "Siege warfare", side: "Azerbaijan", impact: "Blocking the Lachin corridor starved the enclave before the final assault." },
    ],
    centralFigures: [
      {
        name: "Ilham Aliyev",
        role: "President of Azerbaijan",
        side: "belligerent",
        importance: 92,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Inherited the conflict from his father; spent two decades preparing for reconquest; achieved complete victory.",
      },
      {
        name: "Nikol Pashinyan",
        role: "Prime Minister of Armenia",
        side: "belligerent",
        importance: 82,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Democratic reformer who inherited a military unprepared for modern warfare; signed the painful 2020 ceasefire.",
      },
      {
        name: "Robert Kocharyan",
        role: "Former President of Armenia (1998-2008)",
        side: "belligerent",
        importance: 68,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Karabakh-born leader who presided over the frozen conflict period; critics blame his era for failing to modernize defenses.",
      },
    ],
    infobox: {
      dates: "1988 - 2023",
      location: "Nagorno-Karabakh and surrounding territories, South Caucasus",
      result: "Complete Azerbaijani reconquest; Armenian population entirely displaced",
      belligerents: "Azerbaijan + Turkey vs Armenia / Artsakh",
      strength: "Modern drone-equipped military vs outdated Soviet-era defenses",
      casualties: "~38,000+ killed across all phases; 1 million+ total displaced",
    },
  },

};

// Read current file, find closing brace, insert new entries
const entries = Object.entries(dossiers);
let insertStr = '';
for (const [key, val] of entries) {
  insertStr += '\n  ' + JSON.stringify(key) + ': ' + JSON.stringify(val, null, 2).replace(/\n/g, '\n  ') + ',\n';
}

content = content.replace(/\n};(\s*)$/, '\n' + insertStr + '\n};$1');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Batch 7 (' + entries.length + ' dossiers) added successfully.');
