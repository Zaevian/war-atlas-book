const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'featuredWars.js');
let content = fs.readFileSync(filePath, 'utf8');

const dossiers = `
  "War on Terror": {
    theater: "Global - **Afghanistan**, **Iraq**, **Pakistan**, **Yemen**, **Somalia**, **Syria**, the **Sahel**, and dozens of other countries touched by US-led counterterrorism operations",
    summary: "The **War on Terror (2001-present)** is the sprawling, borderless, and arguably indefinite campaign launched by the **United States** after the **September 11 attacks**. It began with the invasion of **Afghanistan** to destroy **al-Qaeda** and topple the **Taliban**, expanded into the invasion of **Iraq** on contested WMD claims, and metastasized into drone campaigns, special operations raids, intelligence programs, and partner-force training across dozens of countries. It produced the deaths of hundreds of thousands, the displacement of millions, the creation of **ISIS**, the normalization of mass surveillance, and a fundamental reshaping of international law around the concept of preemptive self-defense. Twenty-plus years later, the Taliban is back in Kabul, Iraq is struggling, and the phrase 'mission accomplished' has become the most expensive irony in American military history.",
    background: [
      "The **September 11, 2001** attacks killed nearly **3,000** people and were planned by **al-Qaeda** from Taliban-controlled Afghanistan.",
      "The **Bush Doctrine** asserted the right to preemptive war against states harboring terrorists, fundamentally changing US foreign policy.",
      "The **2003 Iraq invasion** was justified by claims of WMD and links to terrorism that proved largely unfounded.",
      "The war expanded through the **Authorization for Use of Military Force (AUMF)**, which has been used to justify operations in over a dozen countries.",
    ],
    participants: [
      { name: "United States and NATO allies", role: "Primary military coalition conducting invasions, occupations, drone campaigns, and partner-force operations globally.", side: "belligerent" },
      { name: "Al-Qaeda and affiliates", role: "Transnational jihadist network that conducted the 9/11 attacks and spawned regional franchises across the Muslim world.", side: "belligerent" },
      { name: "Taliban", role: "Afghan Islamist movement that hosted al-Qaeda, was overthrown in 2001, fought a 20-year insurgency, and retook power in 2021.", side: "belligerent" },
      { name: "ISIS / Islamic State", role: "Emerged from the Iraq War's chaos; seized territory across Iraq and Syria; declared a caliphate in 2014.", side: "belligerent" },
    ],
    timeline: [
      { period: "Sep 2001", title: "9/11 attacks", detail: "Al-Qaeda hijackers kill nearly 3,000 people in New York, Washington, and Pennsylvania." },
      { period: "Oct 2001", title: "Afghanistan invasion", detail: "US and allies topple Taliban; al-Qaeda leadership flees to Pakistan border areas." },
      { period: "Mar 2003", title: "Iraq invasion", detail: "US-led coalition invades Iraq; Saddam Hussein overthrown; insurgency and sectarian war follow." },
      { period: "2014-2019", title: "ISIS caliphate", detail: "Islamic State seizes territory across Iraq and Syria; international coalition eventually destroys territorial control." },
    ],
    outcome: "Al-Qaeda degraded but not destroyed; Taliban returned to power in Afghanistan (2021); Iraq remains unstable; ISIS territorial caliphate destroyed but insurgency continues; global counterterrorism architecture permanently expanded.",
    casualties: {
      military: "Over **7,000** US military killed in Afghanistan and Iraq; coalition allies lost thousands more; Afghan and Iraqi security force deaths in the hundreds of thousands.",
      civilian: "Estimated **300,000-900,000+** civilians killed directly across all theaters; millions more from indirect effects.",
      displacement: "**37+ million** people displaced by post-9/11 wars according to Brown University's Costs of War project.",
      note: "The total cost exceeds **$8 trillion** according to academic estimates. The human cost is still being calculated.",
    },
    orderOfBattle: [
      { name: "US-led coalition", strength: "Peak deployments of 100,000+ in Afghanistan and 170,000+ in Iraq simultaneously", note: "Unprecedented global military footprint spanning conventional war, counterinsurgency, drone warfare, and special operations." },
      { name: "Insurgent/terrorist networks", strength: "Decentralized networks ranging from al-Qaeda central to ISIS armies to local affiliates", note: "Adapted continuously; military defeats in one theater often produced metastasis to others." },
    ],
    aftermath: [
      "The **2021 Taliban takeover** of Afghanistan after US withdrawal symbolized the limits of military-driven state-building.",
      "Iraq's post-invasion sectarian fracture created the conditions for ISIS and ongoing instability.",
      "Mass surveillance programs revealed by **Edward Snowden** showed the domestic civil liberties cost of the war.",
      "The war fundamentally reshaped international norms around sovereignty, preemption, and the use of force.",
    ],
    maps: {
      title: "War on Terror global footprint",
      description: "A war with no front lines, no borders, and no agreed definition of victory.",
      points: [
        { name: "New York / Pentagon", x: 30, y: 40, year: "2001", note: "Sites of the 9/11 attacks that launched the entire campaign." },
        { name: "Tora Bora, Afghanistan", x: 62, y: 42, year: "2001", note: "Mountain complex where bin Laden escaped during the initial invasion." },
        { name: "Baghdad", x: 56, y: 42, year: "2003", note: "Iraqi capital; site of invasion, occupation, sectarian war, and ISIS siege." },
      ],
    },
    technology: [
      { name: "Armed drones (MQ-1 Predator / MQ-9 Reaper)", type: "Remote warfare", side: "US", impact: "Enabled targeted killing across sovereign borders without ground troop deployment; transformed warfare and international law." },
      { name: "IEDs (Improvised Explosive Devices)", type: "Asymmetric weapon", side: "Insurgents", impact: "Caused the majority of coalition casualties in Iraq and Afghanistan; drove massive investment in counter-IED technology." },
      { name: "Mass surveillance (PRISM, etc.)", type: "Intelligence collection", side: "US/Five Eyes", impact: "Global communications monitoring justified by counterterrorism; revealed by Snowden in 2013." },
    ],
    centralFigures: [
      {
        name: "George W. Bush",
        role: "US President (2001-2009)",
        side: "belligerent",
        importance: 95,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg",
        note: "Launched the War on Terror, invaded Afghanistan and Iraq, and established the legal and institutional framework for indefinite global counterterrorism.",
      },
      {
        name: "Osama bin Laden",
        role: "Al-Qaeda founder and leader",
        side: "belligerent",
        importance: 95,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Mastermind of 9/11; evaded capture for a decade; killed by US Navy SEALs in Abbottabad, Pakistan in 2011.",
      },
      {
        name: "Abu Bakr al-Baghdadi",
        role: "ISIS leader / self-declared Caliph",
        side: "belligerent",
        importance: 82,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Declared the ISIS caliphate in 2014; killed in US special operations raid in Syria in 2019.",
      },
    ],
    infobox: {
      dates: "2001 - present",
      location: "Global (primary theaters: Afghanistan, Iraq, Syria, Yemen, Somalia, Pakistan)",
      result: "Ongoing; Taliban retook Afghanistan; ISIS caliphate destroyed; al-Qaeda degraded",
      belligerents: "US-led coalition vs al-Qaeda, Taliban, ISIS, and affiliates",
      strength: "Peak 300,000+ coalition troops across theaters vs decentralized insurgent networks",
      casualties: "Hundreds of thousands killed; 37+ million displaced; $8+ trillion spent",
    },
  },

  "Nigerian Sharia Conflict": {
    theater: "West Africa - northern **Nigeria**, from **Kaduna** and **Jos** to the **Boko Haram** heartland in **Borno**, **Yobe**, and **Adamawa** states",
    summary: "The **Nigerian Sharia Conflict (2000-present)** encompasses the violent tensions triggered by the adoption of **Sharia law** in twelve northern Nigerian states beginning in 1999-2000, and the subsequent rise of **Boko Haram** as the conflict's most destructive expression. The initial Sharia implementation sparked communal riots between Muslims and Christians, particularly in **Kaduna** and **Jos**, killing thousands. **Boko Haram**, founded by **Mohammed Yusuf** in 2002, evolved from a radical preaching movement into a full-scale insurgency after Yusuf's extrajudicial killing in 2009. The group's campaign of bombings, kidnappings (including the **Chibok schoolgirls**), and territorial seizure made northeastern Nigeria one of the world's worst humanitarian crises. The Nigerian military's response has been characterized by both operational successes and serious human rights violations.",
    background: [
      "Nigeria's return to democracy in **1999** enabled northern governors to implement **Sharia criminal law**, inflaming Christian-Muslim tensions.",
      "The **Kaduna riots** (2000) killed over **2,000** people and established a pattern of communal violence around religious law.",
      "**Mohammed Yusuf** founded Boko Haram in **Maiduguri** preaching rejection of Western education and secular government.",
      "Yusuf's **2009 extrajudicial killing** by police radicalized the movement under **Abubakar Shekau** into armed insurgency.",
    ],
    participants: [
      { name: "Boko Haram / ISWAP", role: "Jihadist insurgency conducting bombings, kidnappings, and territorial seizure in northeastern Nigeria and the Lake Chad Basin.", side: "belligerent" },
      { name: "Nigerian Armed Forces", role: "Conducting counterinsurgency operations with mixed effectiveness and significant human rights concerns.", side: "belligerent" },
      { name: "Multinational Joint Task Force", role: "Regional coalition of Nigeria, Chad, Niger, and Cameroon forces fighting Boko Haram in the Lake Chad Basin.", side: "belligerent" },
      { name: "Civilian Joint Task Force", role: "Local vigilante groups formed to assist military operations against Boko Haram in northeastern communities.", side: "belligerent" },
    ],
    timeline: [
      { period: "2000-2002", title: "Sharia riots", detail: "Communal violence in Kaduna, Jos, and other cities over Sharia implementation; thousands killed." },
      { period: "2009", title: "Boko Haram uprising", detail: "Yusuf killed; Shekau takes over; movement transforms from radical sect to armed insurgency." },
      { period: "2014-2015", title: "Peak territorial control", detail: "Boko Haram seizes territory the size of Belgium; Chibok kidnapping; declares caliphate allegiance to ISIS." },
      { period: "2016-present", title: "Degraded but persistent", detail: "Military operations recapture territory; Boko Haram splits into Shekau faction and ISWAP; insurgency continues." },
    ],
    outcome: "Boko Haram's territorial control largely reversed but insurgency persists; ISWAP remains active; northeastern Nigeria faces ongoing humanitarian crisis.",
    casualties: {
      military: "Thousands of Nigerian soldiers killed; significant losses among regional coalition forces.",
      civilian: "Over **35,000** killed directly; millions affected by the broader humanitarian crisis.",
      displacement: "Over **2.4 million** internally displaced in northeastern Nigeria; additional displacement across the Lake Chad Basin.",
      note: "The conflict has created one of the world's largest humanitarian emergencies, with millions facing food insecurity.",
    },
    orderOfBattle: [
      { name: "Nigerian military", strength: "Large conventional force with armor and air support but persistent logistics and morale challenges", note: "Operational effectiveness improved after 2015 but human rights violations undermine legitimacy." },
      { name: "Boko Haram / ISWAP", strength: "Peak strength of 15,000-30,000; reduced but still capable of major attacks", note: "ISWAP's more disciplined approach has proven more sustainable than Shekau's indiscriminate violence." },
    ],
    aftermath: [
      "The **Chibok kidnapping** (276 schoolgirls, 2014) generated the global **#BringBackOurGirls** campaign and unprecedented international attention.",
      "Boko Haram's split into competing factions (Shekau's group vs **ISWAP**) complicated both the insurgency and counterinsurgency.",
      "Northeastern Nigeria's economy, education system, and social fabric have been devastated by over a decade of conflict.",
      "The conflict demonstrated how governance failures and security force abuses can fuel the very extremism they claim to fight.",
    ],
    maps: {
      title: "Nigerian Sharia conflict and Boko Haram zones",
      description: "From communal riots in the Middle Belt to jihadist insurgency in the northeast.",
      points: [
        { name: "Maiduguri", x: 56, y: 50, year: "2009-present", note: "Borno state capital; Boko Haram birthplace and primary military operations center." },
        { name: "Chibok", x: 56, y: 52, year: "2014", note: "Site of the mass schoolgirl kidnapping that drew global attention." },
        { name: "Kaduna / Jos", x: 52, y: 50, year: "2000-2010s", note: "Middle Belt cities; epicenters of communal religious violence." },
      ],
    },
    technology: [
      { name: "Suicide bombings", type: "Terror tactic", side: "Boko Haram", impact: "Extensive use of suicide bombers, including women and children, against civilian and military targets." },
      { name: "Tucano light attack aircraft", type: "Close air support", side: "Nigeria", impact: "US-supplied aircraft improved Nigerian military's ability to strike insurgent positions." },
      { name: "Social media propaganda", type: "Information warfare", side: "Boko Haram/ISWAP", impact: "Video releases of attacks and kidnappings amplified terror effect and recruitment." },
    ],
    centralFigures: [
      {
        name: "Abubakar Shekau",
        role: "Boko Haram leader (2009-2021)",
        side: "belligerent",
        importance: 88,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Transformed Boko Haram into a mass-casualty insurgency; killed himself during ISWAP attack in 2021.",
      },
      {
        name: "Muhammadu Buhari",
        role: "President of Nigeria (2015-2023)",
        side: "belligerent",
        importance: 75,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Muhammadu_Buhari%2C_President_of_the_Federal_Republic_of_Nigeria_%28cropped3%29.jpg",
        note: "Won election partly on promise to defeat Boko Haram; achieved territorial gains but not decisive victory.",
      },
      {
        name: "Mohammed Yusuf",
        role: "Boko Haram founder",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Founded the movement as a radical preaching sect; his extrajudicial killing by police in 2009 triggered the armed insurgency.",
      },
    ],
    infobox: {
      dates: "2000 - present",
      location: "Northern Nigeria and Lake Chad Basin",
      result: "Ongoing; Boko Haram degraded but persistent",
      belligerents: "Nigerian military and regional coalition vs Boko Haram and ISWAP",
      strength: "Large state military vs 15,000-30,000 insurgents at peak",
      casualties: "35,000+ killed; 2.4 million+ displaced",
    },
  },

  "Kivu Conflict": {
    theater: "Central Africa - **North Kivu** and **South Kivu** provinces of the **Democratic Republic of Congo**, bordering **Rwanda**, **Burundi**, and **Uganda**",
    summary: "The **Kivu Conflict (2004-present)** is the seemingly endless cycle of armed group violence in eastern Congo's **Kivu provinces** - a region cursed with mineral wealth, ethnic complexity, and the unresolved aftermath of the **Rwandan genocide**. Dozens of armed groups - including the **CNDP**, **M23**, **FDLR**, and various Mai-Mai militias - fight over territory, minerals, ethnic grievances, and political power. **Rwanda** has repeatedly backed rebel groups (most notably **M23**) while officially denying involvement. The Congolese army (**FARDC**) is often part of the problem rather than the solution. The UN's **MONUSCO** mission, one of the largest in history, has struggled to protect civilians. The conflict has killed millions when indirect deaths from disease and displacement are counted. It is the world's deadliest ongoing conflict that most people have never heard of.",
    background: [
      "The **1994 Rwandan genocide** sent over a million Hutu refugees and genocidaires into eastern Congo, destabilizing the region permanently.",
      "The **First and Second Congo Wars** (1996-2003) drew in nine African nations and killed millions; the Kivus were the epicenter.",
      "Post-war peace agreements failed to disarm dozens of armed groups or address underlying ethnic and land disputes.",
      "**Conflict minerals** (coltan, cassiterite, gold, tungsten) provide economic incentives for continued fighting.",
    ],
    participants: [
      { name: "FARDC (Congolese army)", role: "Government military conducting operations against armed groups; plagued by corruption, fragmentation, and human rights abuses.", side: "belligerent" },
      { name: "M23 (and predecessors CNDP, RCD)", role: "Tutsi-led rebel movement backed by Rwanda; seized Goma in 2012; resurgent since 2022.", side: "belligerent" },
      { name: "FDLR", role: "Hutu militia including Rwandan genocide perpetrators; operates in eastern Congo since 1994.", side: "belligerent" },
      { name: "MONUSCO (UN peacekeeping)", role: "One of the world's largest peacekeeping missions; mandated to protect civilians but limited in effectiveness.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "2004-2008", title: "Post-war instability", detail: "Armed groups proliferate; CNDP under Laurent Nkunda fights FARDC; Rwanda's role becomes increasingly evident." },
      { period: "2012-2013", title: "M23 rebellion", detail: "M23 captures Goma; international pressure and UN intervention force defeat M23; Rwanda denies backing." },
      { period: "2017-2021", title: "Continued fragmentation", detail: "Over 100 armed groups active in eastern Congo; ADF (ISIS-linked) conducts massacres; MONUSCO criticized." },
      { period: "2022-present", title: "M23 resurgence", detail: "M23 returns with renewed Rwandan backing; captures territory; regional diplomatic crisis; MONUSCO begins withdrawal." },
    ],
    outcome: "No resolution. Armed group violence continues; M23 resurgent; regional tensions between Congo and Rwanda at crisis levels; MONUSCO withdrawing without peace.",
    casualties: {
      military: "Thousands of combatants killed across all armed groups and FARDC operations.",
      civilian: "Millions of excess deaths when disease and displacement are included; tens of thousands killed directly in violence.",
      displacement: "Over **6 million** internally displaced in eastern Congo - one of the world's largest displacement crises.",
      note: "The Kivu conflict is part of a broader eastern Congo crisis that has killed more people than any conflict since World War II.",
    },
    orderOfBattle: [
      { name: "FARDC", strength: "Large on paper but fragmented, poorly paid, and often predatory toward civilians", note: "Integration of former rebels into the army created a force with divided loyalties." },
      { name: "M23 and allied groups", strength: "Several thousand well-equipped fighters with Rwandan military support", note: "Better trained and equipped than most FARDC units; controls significant territory." },
    ],
    aftermath: [
      "The **conflict minerals** trade has drawn international attention and regulation attempts (Dodd-Frank Act Section 1502) with mixed results.",
      "Rwanda's repeated denials of M23 support have been contradicted by UN expert reports, straining regional diplomacy.",
      "MONUSCO's planned withdrawal raises fears of even worse violence without international presence.",
      "Eastern Congo demonstrates how post-genocide regional dynamics can produce permanent instability across borders.",
    ],
    maps: {
      title: "Kivu conflict zones",
      description: "The most dangerous place on earth to be a civilian, measured in armed groups per square kilometer.",
      points: [
        { name: "Goma", x: 52, y: 52, year: "2012/2022-present", note: "North Kivu capital; captured by M23 in 2012; threatened again in 2022-present resurgence." },
        { name: "Bukavu", x: 52, y: 54, year: "2004-present", note: "South Kivu capital; surrounded by armed group activity and displacement camps." },
        { name: "Masisi / Rutshuru", x: 52, y: 50, year: "2004-present", note: "Territories with highest concentration of armed groups and mineral extraction." },
      ],
    },
    technology: [
      { name: "Conflict mineral extraction", type: "War economy", side: "Multiple armed groups", impact: "Coltan, gold, and cassiterite mining funds armed groups and creates economic incentives for continued conflict." },
      { name: "Cross-border military support", type: "Proxy warfare", side: "Rwanda", impact: "Rwandan backing transforms local militias into capable conventional forces." },
      { name: "UN Force Intervention Brigade", type: "Offensive peacekeeping", side: "MONUSCO", impact: "First UN unit authorized to conduct offensive operations; helped defeat M23 in 2013." },
    ],
    centralFigures: [
      {
        name: "Laurent Nkunda",
        role: "CNDP rebel leader",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Tutsi general who led the CNDP rebellion; arrested by Rwanda in 2009 in a deal that created M23's predecessor.",
      },
      {
        name: "Sultani Makenga",
        role: "M23 military commander",
        side: "belligerent",
        importance: 68,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led M23's capture of Goma in 2012 and has been associated with the movement's resurgence.",
      },
      {
        name: "Felix Tshisekedi",
        role: "President of DRC (2019-present)",
        side: "belligerent",
        importance: 75,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Faces the M23 resurgence and MONUSCO withdrawal while trying to assert Congolese sovereignty over eastern provinces.",
      },
    ],
    infobox: {
      dates: "2004 - present",
      location: "North and South Kivu, eastern DRC",
      result: "Ongoing; M23 resurgent; no resolution in sight",
      belligerents: "FARDC vs M23, FDLR, ADF, and 100+ armed groups",
      strength: "Large but fragmented state army vs multiple well-armed rebel groups",
      casualties: "Millions of excess deaths; 6+ million displaced",
    },
  },

  "War in North-West Pakistan": {
    theater: "South Asia - Pakistan's **Federally Administered Tribal Areas (FATA)**, **Khyber Pakhtunkhwa**, and the **Swat Valley**",
    summary: "The **War in North-West Pakistan (2004-present)** is Pakistan's long, costly campaign against the **Tehrik-i-Taliban Pakistan (TTP)** and affiliated militant groups in its tribal borderlands. The conflict erupted when Pakistan, under US pressure after 9/11, sent troops into the **tribal areas** for the first time in history, provoking a backlash from local militants who formed the TTP in 2007. The TTP conducted devastating suicide bombings across Pakistan, briefly seized the **Swat Valley**, and killed tens of thousands. Pakistan responded with major military operations - **Rah-e-Nijat**, **Zarb-e-Azb**, and **Radd-ul-Fasaad** - that cleared militant strongholds but displaced millions. The war exposed Pakistan's contradictory relationship with militancy: fighting the TTP domestically while elements of the state maintained relationships with Afghan Taliban and other groups. It was counterterrorism and strategic ambiguity conducted simultaneously, which is as sustainable as it sounds.",
    background: [
      "Pakistan's **tribal areas** had been semi-autonomous since British colonial times; the state had minimal presence.",
      "After 9/11, Pakistan deployed military forces into FATA for the first time, disrupting tribal power structures.",
      "Al-Qaeda and Taliban fighters fleeing Afghanistan established sanctuary in Pakistan's tribal belt.",
      "Local militants coalesced into the **TTP** in 2007, declaring war on the Pakistani state.",
    ],
    participants: [
      { name: "Pakistan Armed Forces", role: "Conducting large-scale counterinsurgency operations in tribal areas and settled districts.", side: "belligerent" },
      { name: "Tehrik-i-Taliban Pakistan (TTP)", role: "Umbrella militant organization conducting insurgency and terrorism against the Pakistani state.", side: "belligerent" },
      { name: "United States", role: "Conducted drone strikes in FATA; provided military aid and intelligence support to Pakistan.", side: "belligerent" },
      { name: "Tribal communities", role: "Caught between militants and military; suffered displacement, destruction, and loss of traditional governance structures.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "2004-2006", title: "Initial operations", detail: "Pakistan military enters South Waziristan; peace deals with militants fail repeatedly." },
      { period: "2007-2009", title: "TTP formation and escalation", detail: "TTP formed; Red Mosque siege; Swat Valley seized; suicide bombings devastate Pakistani cities." },
      { period: "2009-2014", title: "Major offensives", detail: "Operations in Swat, South Waziristan, and eventually North Waziristan clear militant strongholds." },
      { period: "2014-present", title: "Zarb-e-Azb and aftermath", detail: "Comprehensive North Waziristan operation; FATA merged into KP province; TTP weakened but resurges after Afghan Taliban takeover." },
    ],
    outcome: "TTP significantly degraded through military operations but resurged after 2021 Afghan Taliban takeover; FATA merged into Khyber Pakhtunkhwa; violence reduced but not eliminated.",
    casualties: {
      military: "Over **8,000** Pakistani security forces killed in the conflict.",
      civilian: "Over **35,000** Pakistani civilians killed in terrorist attacks and military operations combined.",
      displacement: "Over **5 million** people displaced by military operations in FATA and Swat, most temporarily.",
      note: "Pakistan has suffered more terrorism-related deaths than almost any country in the 21st century.",
    },
    orderOfBattle: [
      { name: "Pakistan Army", strength: "Multiple divisions deployed in FATA with air support, artillery, and special forces", note: "Evolved from conventional force to counterinsurgency capability through painful operational learning." },
      { name: "TTP and affiliates", strength: "Peak strength of 25,000-35,000 fighters across tribal agencies", note: "Fragmented after military operations but reconstituted with Afghan Taliban support post-2021." },
    ],
    aftermath: [
      "The **2014 Peshawar school massacre** (132 children killed) was a turning point that unified Pakistani public opinion against the TTP.",
      "FATA's merger into **Khyber Pakhtunkhwa** province ended the tribal areas' semi-autonomous status after 70+ years.",
      "The Afghan Taliban's 2021 return to power gave the TTP renewed sanctuary and operational capability.",
      "Pakistan's selective approach to militancy - fighting TTP while tolerating other groups - remains a fundamental strategic contradiction.",
    ],
    maps: {
      title: "War in North-West Pakistan",
      description: "From tribal autonomy to military operations to an unfinished counterinsurgency.",
      points: [
        { name: "North Waziristan", x: 58, y: 42, year: "2014", note: "TTP heartland; site of Operation Zarb-e-Azb that cleared the primary militant sanctuary." },
        { name: "Swat Valley", x: 58, y: 40, year: "2009", note: "Tourist valley seized by TTP; military operation restored government control." },
        { name: "Peshawar", x: 58, y: 40, year: "2014", note: "Site of Army Public School massacre; 132 children killed by TTP." },
      ],
    },
    technology: [
      { name: "US drone strikes", type: "Remote precision strike", side: "US", impact: "Hundreds of strikes in FATA killed senior militants but also civilians; deeply controversial in Pakistan." },
      { name: "Suicide bombing networks", type: "Terror tactic", side: "TTP", impact: "Devastating campaign of suicide attacks across Pakistani cities killed thousands of civilians." },
      { name: "FATA integration", type: "Governance reform", side: "Pakistan", impact: "Merging tribal areas into provincial governance aimed to replace militant-friendly power vacuums with state institutions." },
    ],
    centralFigures: [
      {
        name: "Baitullah Mehsud",
        role: "TTP founder and first emir",
        side: "belligerent",
        importance: 80,
        portrait: "/portraits/placeholder-figure.svg",
        note: "United tribal militants into the TTP; killed by US drone strike in 2009.",
      },
      {
        name: "Raheel Sharif",
        role: "Pakistan Army Chief (2013-2016)",
        side: "belligerent",
        importance: 78,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Launched Operation Zarb-e-Azb and the National Action Plan after the Peshawar school massacre.",
      },
      {
        name: "Noor Wali Mehsud",
        role: "Current TTP emir",
        side: "belligerent",
        importance: 70,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Reunified TTP factions after 2018; leveraged Afghan Taliban takeover to rebuild operational capability.",
      },
    ],
    infobox: {
      dates: "2004 - present",
      location: "FATA and Khyber Pakhtunkhwa, Pakistan",
      result: "TTP degraded but persistent; FATA merged into KP province",
      belligerents: "Pakistan military vs TTP and affiliated groups",
      strength: "Multiple army divisions vs 25,000-35,000 militants at peak",
      casualties: "8,000+ military, 35,000+ civilians killed",
    },
  },

  "South Thailand Insurgency": {
    theater: "Southeast Asia - Thailand's **deep south** provinces of **Pattani**, **Yala**, **Narathiwat**, and parts of **Songkhla**",
    summary: "The **South Thailand Insurgency (2004-present)** is a separatist conflict in Thailand's Malay-Muslim southern provinces that reignited in January 2004 with coordinated raids on an army depot. The region, historically part of the **Patani Sultanate**, was annexed by **Siam** in 1909 and has never been fully integrated. The **Barisan Revolusi Nasional (BRN)** leads a shadowy insurgency using bombings, shootings, and arson against Thai security forces, government officials, and Buddhist civilians. The Thai military has responded with emergency decrees, martial law, and counterinsurgency operations that have drawn human rights criticism. Over **7,000** people have been killed in two decades of low-intensity but relentless violence. It is one of the world's most persistent insurgencies and one of its least covered - partly because the insurgents don't do press conferences.",
    background: [
      "The **Patani** region was a Malay Muslim sultanate forcibly incorporated into Siam in **1909** under an Anglo-Siamese treaty.",
      "Thai assimilation policies suppressed Malay language, Islamic education, and local identity for decades.",
      "An earlier insurgency (1960s-1980s) subsided but grievances over cultural marginalization and security force abuses persisted.",
      "The current insurgency reignited on **January 4, 2004** with simultaneous attacks on military installations.",
    ],
    participants: [
      { name: "BRN (Barisan Revolusi Nasional)", role: "Primary insurgent organization conducting bombings, shootings, and coordinated attacks in the deep south.", side: "belligerent" },
      { name: "Thai security forces", role: "Army, police, and paramilitary rangers conducting counterinsurgency under emergency decree and martial law.", side: "belligerent" },
      { name: "Village defense volunteers", role: "Buddhist and some Muslim civilians armed by the government for local defense.", side: "belligerent" },
      { name: "Malaysian facilitators", role: "Malaysia has facilitated peace talks between Thai government and BRN representatives.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "4 Jan 2004", title: "Insurgency reignites", detail: "Coordinated raids on army depot in Narathiwat; 400+ schools burned in the following months." },
      { period: "2004-2006", title: "Escalation", detail: "Krue Se mosque siege; Tak Bai massacre (85 killed); emergency decree imposed; violence intensifies." },
      { period: "2007-2019", title: "Sustained low-intensity war", detail: "Daily bombings and shootings; peace talks begin and stall repeatedly; over 7,000 killed." },
      { period: "2020-present", title: "Continued violence and talks", detail: "BRN engages in Malaysian-facilitated dialogue; violence decreases slightly but continues." },
    ],
    outcome: "No resolution. Insurgency continues at reduced but persistent levels; peace talks ongoing but no agreement; emergency decree remains in effect.",
    casualties: {
      military: "Hundreds of Thai security personnel killed over two decades.",
      civilian: "Over **7,000** total killed including security forces, insurgents, and civilians; civilians are the majority of victims.",
      displacement: "Limited large-scale displacement but significant Buddhist out-migration from the deep south.",
      note: "The conflict's daily toll of small-scale attacks rarely makes international headlines but has been relentless for twenty years.",
    },
    orderOfBattle: [
      { name: "Thai security forces", strength: "60,000-70,000 troops and police deployed in three southern provinces", note: "Massive deployment relative to population but counterinsurgency effectiveness limited by cultural disconnect." },
      { name: "BRN insurgent cells", strength: "Estimated 3,000-9,000 active fighters in decentralized cell structure", note: "Highly secretive organization with no public leadership; operates through small autonomous cells." },
    ],
    aftermath: [
      "The **Tak Bai massacre** (2004) where 85 detainees died in military custody became a defining grievance for the Malay-Muslim community.",
      "Buddhist population in the deep south has declined significantly as families relocate away from violence.",
      "The insurgency has resisted resolution despite multiple government approaches from military crackdowns to development programs.",
      "Malaysia-facilitated peace talks represent the most sustained diplomatic track but have not produced a breakthrough.",
    ],
    maps: {
      title: "South Thailand insurgency zone",
      description: "Three provinces, two decades, seven thousand dead, and counting.",
      points: [
        { name: "Pattani", x: 56, y: 54, year: "2004-present", note: "Historical Patani capital; symbolic and operational center of the insurgency." },
        { name: "Yala", x: 56, y: 56, year: "2004-present", note: "Province with highest per-capita violence rates in the deep south." },
        { name: "Narathiwat", x: 58, y: 54, year: "2004-present", note: "Site of the January 2004 army depot raid that reignited the insurgency." },
      ],
    },
    technology: [
      { name: "Cell-phone triggered IEDs", type: "Asymmetric weapon", side: "BRN", impact: "Primary attack method; cheap, effective, and difficult to attribute to specific individuals." },
      { name: "Emergency decree powers", type: "Legal framework", side: "Thai government", impact: "Broad detention and search powers; criticized for enabling abuses that fuel further recruitment." },
      { name: "Decentralized cell structure", type: "Organizational security", side: "BRN", impact: "No public leadership or media presence makes the insurgency extremely difficult to decapitate or negotiate with." },
    ],
    centralFigures: [
      {
        name: "Sapae-ing Basor",
        role: "Alleged BRN leader",
        side: "belligerent",
        importance: 65,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Believed to lead BRN but the organization's secrecy makes leadership identification uncertain.",
      },
      {
        name: "Thaksin Shinawatra",
        role: "Thai Prime Minister (2001-2006)",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "His hardline policies, including the Tak Bai and Krue Se incidents, are widely seen as having reignited the insurgency.",
      },
      {
        name: "Prayuth Chan-ocha",
        role: "Thai Prime Minister (2014-2023)",
        side: "belligerent",
        importance: 65,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Military-background PM who initiated the Malaysian-facilitated peace dialogue track with BRN.",
      },
    ],
    infobox: {
      dates: "2004 - present",
      location: "Pattani, Yala, Narathiwat provinces, southern Thailand",
      result: "Ongoing; no resolution; peace talks continuing",
      belligerents: "Thai security forces vs BRN and affiliated groups",
      strength: "60,000-70,000 Thai forces vs 3,000-9,000 insurgents",
      casualties: "7,000+ killed over two decades",
    },
  },
`;

content = content.replace(/\n};(\s*)$/, '\n' + dossiers + '\n};$1');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Batch 4 (5 dossiers) added successfully.');
