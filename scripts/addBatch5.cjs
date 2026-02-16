const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'featuredWars.js');
let content = fs.readFileSync(filePath, 'utf8');

const dossiers = `
  "Niger Delta Conflict": {
    theater: "West Africa - **Nigeria's Niger Delta** region, spanning **Rivers**, **Bayelsa**, **Delta**, and adjacent oil-producing states",
    summary: "The **Niger Delta Conflict (2004-present)** is a resource war in slow motion. Communities in the **Niger Delta** - which produces virtually all of Nigeria's oil wealth - have seen their land and waterways devastated by decades of extraction while receiving almost nothing in return. Militant groups like the **Movement for the Emancipation of the Niger Delta (MEND)** emerged in the mid-2000s, attacking oil infrastructure, kidnapping workers, and cutting Nigeria's oil output by a third. The government responded with military operations and eventually an **amnesty program** in 2009 that paid militants to stop fighting. It worked - sort of. Violence decreased but the underlying grievances of pollution, poverty, and political marginalization remain unresolved. The Delta is the place where the phrase 'resource curse' stopped being an academic concept and became somebody's drinking water.",
    background: [
      "The Niger Delta produces **90%** of Nigeria's oil revenue but remains one of the country's poorest and most polluted regions.",
      "**Shell**, **Chevron**, and other multinationals have operated in the Delta since the 1950s; oil spills have devastated ecosystems and livelihoods.",
      "The **1995 execution of Ken Saro-Wiwa** and eight Ogoni activists by the Abacha regime internationalized Delta grievances.",
      "Militant groups formed in the early 2000s, initially as community defense but quickly evolving into armed insurgency targeting oil infrastructure.",
    ],
    participants: [
      { name: "MEND and affiliated militant groups", role: "Armed groups attacking oil infrastructure, kidnapping workers, and demanding resource control for Delta communities.", side: "belligerent" },
      { name: "Nigerian military (JTF)", role: "Joint Task Force conducting counterinsurgency operations in the Delta with significant human rights concerns.", side: "belligerent" },
      { name: "International oil companies", role: "Shell, Chevron, and others operating extraction infrastructure that is both the conflict's cause and primary target.", side: "nonBelligerent" },
      { name: "Niger Delta communities", role: "Civilian populations suffering from both oil pollution and military operations; some support militants, others victimized by them.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "1990s", title: "Ogoni crisis", detail: "Ken Saro-Wiwa's nonviolent movement crushed; execution radicalizes Delta politics." },
      { period: "2004-2006", title: "Militancy erupts", detail: "Armed groups attack oil facilities; kidnappings of foreign workers; Nigeria's oil output drops by a third." },
      { period: "2009", title: "Amnesty program", detail: "Government offers militants monthly payments, training, and amnesty in exchange for disarmament; violence decreases significantly." },
      { period: "2016-present", title: "Niger Delta Avengers and beyond", detail: "New militant groups emerge when amnesty payments falter; sporadic attacks on pipelines continue." },
    ],
    outcome: "Amnesty program reduced large-scale violence but underlying grievances persist; environmental devastation continues; periodic militant resurgences when payments or attention lapse.",
    casualties: {
      military: "Hundreds of security force members killed in Delta operations over two decades.",
      civilian: "Thousands killed in militant attacks, military operations, and oil-related environmental disasters.",
      displacement: "Hundreds of thousands displaced by military operations and environmental degradation.",
      note: "The slow-motion environmental catastrophe has killed far more people than the shooting - oil pollution, gas flaring, and water contamination affect millions.",
    },
    orderOfBattle: [
      { name: "MEND and affiliates", strength: "Thousands of fighters with speedboats, small arms, and explosives operating in creek and mangrove terrain", note: "Waterway geography makes the Delta extremely difficult to secure militarily." },
      { name: "Nigerian JTF", strength: "Army, navy, and police joint force with patrol boats and helicopter support", note: "Conventional military approach poorly suited to mangrove insurgency; human rights abuses common." },
    ],
    aftermath: [
      "The **UNEP Ogoniland report** (2011) documented catastrophic environmental contamination requiring a 30-year, $1 billion cleanup.",
      "The amnesty program became a model for buying peace - effective but morally ambiguous and financially unsustainable.",
      "Oil theft ('bunkering') evolved from militant funding into a massive criminal economy involving military and political elites.",
      "The conflict demonstrated how resource extraction without local benefit creates permanent instability.",
    ],
    maps: {
      title: "Niger Delta conflict zone",
      description: "Mangrove creeks, oil platforms, and the geography of a resource curse.",
      points: [
        { name: "Port Harcourt", x: 52, y: 54, year: "2004-present", note: "Rivers State capital; hub of oil industry operations and militant activity." },
        { name: "Warri", x: 50, y: 52, year: "2004-present", note: "Delta State oil city; site of ethnic and militant violence." },
        { name: "Ogoniland", x: 52, y: 54, year: "1990s-present", note: "Epicenter of environmental devastation and the Saro-Wiwa movement." },
      ],
    },
    technology: [
      { name: "Pipeline sabotage", type: "Infrastructure warfare", side: "Militants", impact: "Attacks on oil pipelines cut Nigerian production by up to a third and cost billions in revenue." },
      { name: "Speedboat swarm tactics", type: "Waterway warfare", side: "Militants", impact: "Fast boats in mangrove creeks enabled hit-and-run attacks that conventional naval forces struggled to counter." },
      { name: "Amnesty payments", type: "Conflict management", side: "Nigerian government", impact: "Monthly stipends to ex-militants reduced violence but created dependency and moral hazard." },
    ],
    centralFigures: [
      {
        name: "Ken Saro-Wiwa",
        role: "Ogoni activist",
        side: "nonBelligerent",
        importance: 82,
        portrait: "/portraits/placeholder-figure.svg",
        note: "His 1995 execution by the Nigerian state internationalized Delta grievances and inspired the militant generation.",
      },
      {
        name: "Government Ekpemupolo (Tompolo)",
        role: "MEND commander",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Most prominent militant leader; accepted amnesty; later received government pipeline surveillance contracts.",
      },
      {
        name: "Umaru Yar'Adua",
        role: "President of Nigeria (2007-2010)",
        side: "belligerent",
        importance: 68,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Launched the amnesty program that became the primary tool for reducing Delta violence.",
      },
    ],
    infobox: {
      dates: "2004 - present",
      location: "Niger Delta, Nigeria",
      result: "Amnesty reduced violence; underlying grievances unresolved",
      belligerents: "MEND and militant groups vs Nigerian military",
      strength: "Thousands of militants in mangrove terrain vs military joint task force",
      casualties: "Thousands killed; environmental catastrophe affecting millions",
    },
  },

  "First Ivorian Civil War": {
    theater: "West Africa - **Cote d'Ivoire**, divided between the government-held south and rebel-controlled north",
    summary: "The **First Ivorian Civil War (2002-2007)** split Cote d'Ivoire in half along ethnic and political lines. In September 2002, soldiers from the north launched a failed coup against President **Laurent Gbagbo** that evolved into a full rebellion. The **Forces Nouvelles** rebels, drawn largely from the Muslim north, seized the northern half of the country while Gbagbo's government held the south. **France** deployed **Operation Licorne** to enforce a ceasefire line, and the country remained partitioned for five years. The conflict was rooted in the toxic politics of **Ivoirite** - a concept of 'true' Ivorian identity used to exclude northerners and immigrants from political participation. The **2007 Ouagadougou Political Agreement** nominally reunified the country, but the underlying tensions exploded again in 2010.",
    background: [
      "Cote d'Ivoire's post-independence stability under **Houphouet-Boigny** masked ethnic tensions between the largely Christian south and Muslim north.",
      "The concept of **Ivoirite** was weaponized to exclude northern politician **Alassane Ouattara** from presidential elections.",
      "President **Gbagbo** came to power in disputed 2000 elections after a period of military coups and political instability.",
      "Northern soldiers facing demobilization launched the September 2002 uprising that split the country.",
    ],
    participants: [
      { name: "Government of Laurent Gbagbo", role: "Southern-based government defending power with military, militia (Young Patriots), and Liberian mercenaries.", side: "belligerent" },
      { name: "Forces Nouvelles", role: "Northern rebel coalition controlling the upper half of the country and demanding political inclusion.", side: "belligerent" },
      { name: "France (Operation Licorne)", role: "Former colonial power deploying 4,000 troops to enforce ceasefire and protect French nationals.", side: "nonBelligerent" },
      { name: "ECOWAS / UN (UNOCI)", role: "Regional and international peacekeeping forces monitoring the ceasefire line.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Sep 2002", title: "Failed coup becomes civil war", detail: "Northern soldiers attack Abidjan; fail to take the capital; seize the north instead." },
      { period: "2002-2003", title: "Partition", detail: "Country splits along ceasefire line; France deploys; Linas-Marcoussis peace talks produce agreement neither side implements." },
      { period: "2004", title: "French-Ivorian crisis", detail: "Ivorian air force bombs French position killing 9 soldiers; France destroys Ivorian air force; anti-French riots in Abidjan." },
      { period: "2007", title: "Ouagadougou Agreement", detail: "Gbagbo and rebel leader **Guillaume Soro** agree to reunification and elections; Soro becomes Prime Minister." },
    ],
    outcome: "Nominal reunification through the 2007 Ouagadougou Agreement; elections delayed until 2010, when disputed results triggered the Second Ivorian Civil War.",
    casualties: {
      military: "Hundreds of combatants killed on both sides during the initial fighting and subsequent clashes.",
      civilian: "Estimated **3,000+** killed including victims of ethnic massacres, militia violence, and crossfire.",
      displacement: "Over **700,000** internally displaced; tens of thousands of refugees in neighboring countries.",
      note: "The partition itself was relatively stable after 2003; most violence occurred during the initial fighting and sporadic ceasefire violations.",
    },
    orderOfBattle: [
      { name: "Ivorian government forces", strength: "National army plus Young Patriots militia and Liberian mercenaries", note: "Conventional capability limited; relied on militia and foreign fighters for offensive operations." },
      { name: "Forces Nouvelles", strength: "Several thousand rebel fighters controlling northern half of the country", note: "Effective at territorial control but unable to advance south past the French ceasefire line." },
    ],
    aftermath: [
      "The five-year partition created parallel governance structures and war economies in the north that complicated reunification.",
      "The **2004 French-Ivorian military confrontation** damaged France's relationship with its former colony and fueled anti-French sentiment.",
      "The Ouagadougou Agreement's election provisions set the stage for the **2010 electoral crisis** and second civil war.",
      "The conflict demonstrated how identity politics (Ivoirite) could destroy one of West Africa's most prosperous countries.",
    ],
    maps: {
      title: "First Ivorian Civil War partition",
      description: "A country cut in half by a ceasefire line and a concept of who counts as a citizen.",
      points: [
        { name: "Abidjan", x: 46, y: 54, year: "2002", note: "Economic capital; target of failed coup; site of anti-French riots in 2004." },
        { name: "Bouake", x: 48, y: 50, year: "2002-2007", note: "Rebel capital and Forces Nouvelles administrative center in the north." },
        { name: "Ceasefire line (Zone of Confidence)", x: 48, y: 52, year: "2002-2007", note: "French and UN-monitored buffer zone dividing the country east-west." },
      ],
    },
    technology: [
      { name: "Identity-based exclusion (Ivoirite)", type: "Political weapon", side: "Gbagbo government", impact: "Legal framework for excluding northerners from citizenship and political participation; root cause of the conflict." },
      { name: "French military intervention", type: "Former colonial power projection", side: "France", impact: "Prevented rebel capture of Abidjan but also prevented government reconquest of the north." },
      { name: "Mercenary recruitment", type: "Force augmentation", side: "Gbagbo government", impact: "Liberian fighters provided combat capability but committed atrocities that undermined government legitimacy." },
    ],
    centralFigures: [
      {
        name: "Laurent Gbagbo",
        role: "President of Cote d'Ivoire",
        side: "belligerent",
        importance: 85,
        portrait: "/portraits/placeholder-figure.svg",
        note: "His government's exclusionary politics caused the war; later arrested by ICC for crimes against humanity (acquitted 2019).",
      },
      {
        name: "Guillaume Soro",
        role: "Forces Nouvelles leader",
        side: "belligerent",
        importance: 75,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the northern rebellion; became Prime Minister under the Ouagadougou Agreement; later fell out with Ouattara.",
      },
      {
        name: "Alassane Ouattara",
        role: "Opposition leader (later President)",
        side: "nonBelligerent",
        importance: 80,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Alassane_Ouattara_2015.jpg",
        note: "His exclusion from politics via Ivoirite was a core grievance; elected president in 2010; took power after second civil war.",
      },
    ],
    infobox: {
      dates: "2002 - 2007",
      location: "Cote d'Ivoire",
      result: "Country partitioned; 2007 Ouagadougou Agreement for reunification",
      belligerents: "Gbagbo government vs Forces Nouvelles rebels",
      strength: "Government forces and militias vs northern rebel coalition",
      casualties: "3,000+ killed; 700,000+ displaced",
    },
  },

  "Operation Cast Lead": {
    theater: "Middle East - the **Gaza Strip**, from the northern border crossings to **Rafah** in the south",
    summary: "**Operation Cast Lead (2008-2009)** was Israel's three-week military offensive against **Hamas** in the **Gaza Strip**, launched on December 27, 2008 after the collapse of a ceasefire and escalating rocket fire into southern Israel. The operation began with massive air strikes followed by a ground invasion. Israel stated its objective was to stop Hamas rocket attacks and destroy tunnel infrastructure. The offensive killed approximately **1,400** Palestinians (the majority civilians according to Palestinian and international sources; Israel disputed the ratio) and **13** Israelis. The **Goldstone Report** accused both sides of war crimes. The operation achieved temporary tactical results but did not resolve the underlying conflict, establishing a pattern of periodic escalation that would repeat in 2012, 2014, 2021, and 2023.",
    background: [
      "**Hamas** won Palestinian legislative elections in **2006** and took full control of Gaza in **2007** after fighting with Fatah.",
      "Israel and Egypt imposed a **blockade** on Gaza after the Hamas takeover, restricting movement and imports.",
      "A six-month ceasefire expired in December 2008; Hamas resumed rocket fire; Israel launched the offensive.",
      "The operation came during the transition between the **Bush** and **Obama** administrations, limiting US diplomatic intervention.",
    ],
    participants: [
      { name: "Israel Defense Forces", role: "Conducted air, ground, and naval operations against Hamas military infrastructure and personnel in Gaza.", side: "belligerent" },
      { name: "Hamas and Palestinian militant groups", role: "Defended Gaza using rockets, tunnels, IEDs, and guerrilla tactics against Israeli forces.", side: "belligerent" },
      { name: "Palestinian civilian population", role: "1.5 million people trapped in a densely populated territory during intensive military operations.", side: "nonBelligerent" },
      { name: "Egypt", role: "Maintained border closure at Rafah; mediated ceasefire negotiations.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "27 Dec 2008", title: "Air campaign begins", detail: "Massive Israeli air strikes destroy Hamas police stations, government buildings, and military targets." },
      { period: "3 Jan 2009", title: "Ground invasion", detail: "IDF ground forces enter Gaza from multiple axes; urban combat in Gaza City and refugee camps." },
      { period: "17 Jan 2009", title: "Israeli ceasefire", detail: "Israel declares unilateral ceasefire; Hamas follows hours later; IDF withdraws over following days." },
      { period: "Sep 2009", title: "Goldstone Report", detail: "UN fact-finding mission accuses both Israel and Hamas of war crimes and possible crimes against humanity." },
    ],
    outcome: "Temporary reduction in rocket fire; Hamas retained control of Gaza; international criticism of both sides; no political resolution.",
    casualties: {
      military: "**13** Israelis killed (10 soldiers, 3 civilians). Hamas military losses estimated at **200-700** fighters (figures disputed).",
      civilian: "Palestinian deaths totaled approximately **1,400**; civilian proportion heavily disputed between Israeli and Palestinian/international sources.",
      displacement: "Tens of thousands of Gazans displaced during the operation; most returned to damaged or destroyed homes.",
      note: "The civilian casualty ratio became the central point of international legal and political controversy.",
    },
    orderOfBattle: [
      { name: "IDF", strength: "Multiple brigades with armor, artillery, air force, and naval support", note: "Overwhelming conventional superiority in a confined urban battlespace." },
      { name: "Hamas military wing (Izz ad-Din al-Qassam Brigades)", strength: "Estimated 15,000-20,000 fighters with rockets, IEDs, tunnels, and small arms", note: "Asymmetric defense strategy using urban terrain and civilian infrastructure." },
    ],
    aftermath: [
      "The **Goldstone Report** generated intense debate about international humanitarian law in asymmetric urban warfare.",
      "Gaza's blockade continued and tightened, deepening the humanitarian crisis.",
      "The operation established a pattern of periodic Israeli military operations in Gaza (2012, 2014, 2021, 2023).",
      "Neither side achieved lasting strategic objectives; the cycle of rocket fire and military response continued.",
    ],
    maps: {
      title: "Operation Cast Lead - Gaza 2008-2009",
      description: "Three weeks of war in one of the world's most densely populated territories.",
      points: [
        { name: "Gaza City", x: 52, y: 46, year: "2009", note: "Primary urban combat zone; site of heaviest destruction and civilian casualties." },
        { name: "Rafah", x: 52, y: 50, year: "2009", note: "Southern border city; tunnel networks and Egyptian border crossing." },
        { name: "Jabaliya refugee camp", x: 52, y: 44, year: "2009", note: "Densely populated camp; site of controversial strikes with high civilian casualties." },
      ],
    },
    technology: [
      { name: "Precision-guided munitions", type: "Air-delivered weapons", side: "Israel", impact: "Enabled targeted strikes but civilian casualties in dense urban environment remained high." },
      { name: "Qassam and Grad rockets", type: "Indirect fire", side: "Hamas", impact: "Indiscriminate rocket fire into Israeli population centers was both the casus belli and a war crime allegation." },
      { name: "Tunnel networks", type: "Underground infrastructure", side: "Hamas", impact: "Smuggling and military tunnels provided supply routes and tactical movement corridors." },
    ],
    centralFigures: [
      {
        name: "Ehud Olmert",
        role: "Prime Minister of Israel",
        side: "belligerent",
        importance: 82,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Authorized the operation during his final months in office; later convicted of corruption charges.",
      },
      {
        name: "Ismail Haniyeh",
        role: "Hamas political leader in Gaza",
        side: "belligerent",
        importance: 78,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led Hamas's political wing during the operation; survived the conflict and continued leading Hamas governance.",
      },
      {
        name: "Richard Goldstone",
        role: "Head of UN fact-finding mission",
        side: "nonBelligerent",
        importance: 65,
        portrait: "/portraits/placeholder-figure.svg",
        note: "South African judge whose report accused both sides of war crimes; later partially walked back some findings.",
      },
    ],
    infobox: {
      dates: "27 December 2008 - 18 January 2009",
      location: "Gaza Strip",
      result: "Israeli tactical success; Hamas retained Gaza control; no political resolution",
      belligerents: "Israel vs Hamas and Palestinian militant groups",
      strength: "IDF conventional force vs Hamas asymmetric defense",
      casualties: "~1,400 Palestinians and 13 Israelis killed",
    },
  },

  "Second Ivorian Civil War": {
    theater: "West Africa - **Cote d'Ivoire**, from the northern rebel zones to the battle for **Abidjan**",
    summary: "The **Second Ivorian Civil War (2010-2011)** erupted when President **Laurent Gbagbo** refused to accept his defeat in the November 2010 presidential election by **Alassane Ouattara**. Despite international recognition of Ouattara's victory, Gbagbo clung to power, triggering a political crisis that escalated into full-scale civil war. **Forces Nouvelles** (now renamed **Republican Forces**) advanced south from their northern stronghold while Gbagbo's security forces and militias conducted atrocities against perceived Ouattara supporters. French forces and **UNOCI** peacekeepers intervened to protect civilians and neutralize Gbagbo's heavy weapons. Gbagbo was captured in his bunker in April 2011 and eventually sent to the **ICC**. It was a war caused by one man's refusal to leave office - which, as democratic stress tests go, is about as expensive as they get.",
    background: [
      "The **2007 Ouagadougou Agreement** was supposed to reunify the country and lead to elections; the election finally happened in November 2010.",
      "**Ouattara** won the runoff with **54.1%** according to the Independent Electoral Commission; Gbagbo's allies on the Constitutional Council reversed the result.",
      "The **African Union**, **UN**, **EU**, and **US** all recognized Ouattara as the legitimate winner.",
      "Gbagbo refused to step down, and his security forces began targeting Ouattara supporters, particularly in **Abidjan**.",
    ],
    participants: [
      { name: "Laurent Gbagbo's forces", role: "Incumbent president's military, police, and militia (Young Patriots) refusing to accept election defeat.", side: "belligerent" },
      { name: "Republican Forces of Cote d'Ivoire (Ouattara)", role: "Former Forces Nouvelles rebels advancing to install the internationally recognized election winner.", side: "belligerent" },
      { name: "France (Operation Licorne)", role: "French forces neutralized Gbagbo's heavy weapons and protected civilians under UN authorization.", side: "nonBelligerent" },
      { name: "UNOCI", role: "UN peacekeeping force protecting civilians and supporting the democratic outcome.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Nov-Dec 2010", title: "Electoral crisis", detail: "Gbagbo refuses to accept defeat; dual governments claim legitimacy; international community backs Ouattara." },
      { period: "Jan-Mar 2011", title: "Escalating violence", detail: "Pro-Gbagbo forces attack Ouattara supporters; massacres in Abidjan; Republican Forces begin southern advance." },
      { period: "Mar-Apr 2011", title: "Battle of Abidjan", detail: "Republican Forces enter Abidjan; fierce fighting; French and UN forces strike Gbagbo's heavy weapons." },
      { period: "11 Apr 2011", title: "Gbagbo captured", detail: "Republican Forces and French special forces capture Gbagbo in his presidential bunker." },
    ],
    outcome: "Ouattara installed as president; Gbagbo arrested and sent to ICC; country reunified under new government.",
    casualties: {
      military: "Hundreds of combatants killed on both sides during the advance and battle for Abidjan.",
      civilian: "Estimated **3,000+** killed; atrocities committed by both sides, including the **Duekoue massacre** (hundreds killed by Republican Forces).",
      displacement: "Over **1 million** displaced; hundreds of thousands fled to Liberia.",
      note: "Both sides committed serious human rights violations; the Duekoue massacre by pro-Ouattara forces complicated the narrative of democratic restoration.",
    },
    orderOfBattle: [
      { name: "Gbagbo security forces", strength: "Army, police, militia, and Liberian mercenaries defending Abidjan", note: "Heavy weapons and urban defensive positions offset by declining morale and international isolation." },
      { name: "Republican Forces", strength: "Former rebel army advancing from the north with speed and momentum", note: "Rapid advance but committed atrocities that undermined the legitimacy of the democratic cause." },
    ],
    aftermath: [
      "**Gbagbo** was tried by the **ICC** for crimes against humanity; acquitted in 2019 in a controversial decision; returned to Cote d'Ivoire.",
      "**Ouattara** consolidated power and oversaw significant economic recovery, but reconciliation remained incomplete.",
      "The **Duekoue massacre** demonstrated that the 'democratic' side was also capable of mass atrocities.",
      "The crisis established a precedent for international enforcement of election results in Africa - with all the complications that implies.",
    ],
    maps: {
      title: "Second Ivorian Civil War 2010-2011",
      description: "From electoral dispute to military resolution in five months.",
      points: [
        { name: "Abidjan", x: 46, y: 54, year: "2011", note: "Economic capital; site of the final battle and Gbagbo's capture." },
        { name: "Duekoue", x: 46, y: 50, year: "2011", note: "Site of massacre by Republican Forces during their southern advance." },
        { name: "Yamoussoukro", x: 48, y: 52, year: "2011", note: "Political capital; fell to Republican Forces during rapid advance." },
      ],
    },
    technology: [
      { name: "French military strikes", type: "Precision intervention", side: "France/UN", impact: "Neutralized Gbagbo's heavy weapons (tanks, artillery) that were being used against civilians." },
      { name: "Rapid rebel advance", type: "Mobile warfare", side: "Republican Forces", impact: "Speed of advance from north to Abidjan prevented prolonged siege and limited total casualties." },
      { name: "ICC arrest warrant", type: "International justice", side: "International community", impact: "Legal accountability mechanism that removed Gbagbo from the political equation." },
    ],
    centralFigures: [
      {
        name: "Laurent Gbagbo",
        role: "Incumbent President refusing to leave office",
        side: "belligerent",
        importance: 90,
        portrait: "/portraits/placeholder-figure.svg",
        note: "His refusal to accept electoral defeat caused the war; captured, sent to ICC, acquitted, returned to Ivorian politics.",
      },
      {
        name: "Alassane Ouattara",
        role: "Internationally recognized election winner",
        side: "belligerent",
        importance: 88,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Alassane_Ouattara_2015.jpg",
        note: "Won the election, waited out the crisis, took power with military and international support.",
      },
      {
        name: "Guillaume Soro",
        role: "Republican Forces commander and Prime Minister",
        side: "belligerent",
        importance: 75,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the military campaign that installed Ouattara; later fell out with the president and went into exile.",
      },
    ],
    infobox: {
      dates: "2010 - 2011",
      location: "Cote d'Ivoire",
      result: "Ouattara installed; Gbagbo captured and sent to ICC",
      belligerents: "Gbagbo forces vs Republican Forces (Ouattara)",
      strength: "Government military and militia vs former rebel army",
      casualties: "3,000+ killed; 1 million+ displaced",
    },
  },

  "Lebanese-Israeli Conflict": {
    theater: "Middle East - southern **Lebanon**, northern **Israel**, and **Beirut**",
    summary: "The **Lebanese-Israeli Conflict (2006)** - also known as the **July War** or **Second Lebanon War** - was a 34-day war between **Israel** and **Hezbollah** triggered by a cross-border raid in which Hezbollah killed three IDF soldiers and captured two. Israel responded with a massive air campaign and ground invasion of southern Lebanon, while Hezbollah fired approximately **4,000** rockets into northern Israel. The war killed over **1,000** Lebanese (mostly civilians), **165** Israelis (121 soldiers), and caused billions in infrastructure damage. **UN Security Council Resolution 1701** ended the fighting. Israel failed to achieve its stated objectives of destroying Hezbollah or recovering the soldiers; Hezbollah survived and claimed a 'divine victory.' It was a war where both sides claimed to have won and both sides' publics wondered what exactly had been accomplished.",
    background: [
      "**Hezbollah** had been building military capability since Israel's **2000 withdrawal** from southern Lebanon.",
      "The organization maintained a policy of cross-border provocations including the **Shebaa Farms** dispute.",
      "Israel's military doctrine assumed air power could defeat a non-state actor; this assumption was tested and found wanting.",
      "The capture of IDF soldiers was intended by Hezbollah as leverage for a prisoner exchange, not to trigger a full war.",
    ],
    participants: [
      { name: "Israel Defense Forces", role: "Conducted massive air campaign and ground invasion of southern Lebanon to destroy Hezbollah and recover captured soldiers.", side: "belligerent" },
      { name: "Hezbollah", role: "Defended southern Lebanon with prepared positions, anti-tank missiles, and rocket forces while firing into northern Israel.", side: "belligerent" },
      { name: "Lebanese government and civilians", role: "Caught between Hezbollah and Israel; government had limited control over Hezbollah's military decisions.", side: "nonBelligerent" },
      { name: "UNIFIL (expanded post-war)", role: "UN force expanded under Resolution 1701 to monitor ceasefire and support Lebanese army deployment in the south.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "12 Jul 2006", title: "Hezbollah raid", detail: "Cross-border attack kills 3 IDF soldiers, captures 2; Israel launches immediate air strikes." },
      { period: "13 Jul - 10 Aug 2006", title: "Air campaign and rocket war", detail: "Israel bombs Lebanese infrastructure including Beirut; Hezbollah fires thousands of rockets into Israel." },
      { period: "11-14 Aug 2006", title: "Ground offensive", detail: "Israel launches large-scale ground invasion; heavy fighting; Hezbollah anti-tank missiles inflict significant casualties." },
      { period: "14 Aug 2006", title: "Ceasefire", detail: "UN Resolution 1701 takes effect; expanded UNIFIL deployed; both sides claim victory." },
    ],
    outcome: "Military stalemate; Hezbollah survived and rebuilt; Israel failed to achieve stated objectives; UNIFIL expanded; captured soldiers later returned dead in prisoner exchange.",
    casualties: {
      military: "**121** IDF soldiers killed; Hezbollah losses estimated at **250-700** fighters (disputed).",
      civilian: "Over **1,000** Lebanese civilians killed; **44** Israeli civilians killed; massive infrastructure destruction in Lebanon.",
      displacement: "Over **1 million** Lebanese and **300,000-500,000** Israelis temporarily displaced.",
      note: "The destruction of Lebanese civilian infrastructure - including Beirut's southern suburbs, bridges, and power stations - was disproportionate to military objectives according to international observers.",
    },
    orderOfBattle: [
      { name: "IDF", strength: "30,000+ troops, extensive air force, and naval blockade", note: "Air superiority did not translate into ground dominance against Hezbollah's prepared defensive positions." },
      { name: "Hezbollah", strength: "Estimated 3,000-5,000 fighters in southern Lebanon with extensive tunnel and bunker networks", note: "Anti-tank missiles (Kornet) and prepared positions inflicted unexpected casualties on IDF armor." },
    ],
    aftermath: [
      "The **Winograd Commission** criticized Israeli military and political leadership for failures in planning and execution.",
      "Hezbollah rebuilt and expanded its arsenal to an estimated **150,000+** rockets and missiles by the 2020s.",
      "The war demonstrated that non-state actors with advanced weapons could fight state militaries to a standstill.",
      "**Resolution 1701's** requirement for Hezbollah disarmament was never implemented.",
    ],
    maps: {
      title: "2006 Lebanon War",
      description: "34 days, 4,000 rockets, 1,000+ dead, and two sides both claiming victory.",
      points: [
        { name: "Bint Jbeil", x: 52, y: 44, year: "2006", note: "Site of fierce ground combat; Hezbollah's defensive stand became a symbol of resistance." },
        { name: "Dahieh (Beirut southern suburbs)", x: 50, y: 42, year: "2006", note: "Hezbollah stronghold devastated by Israeli air strikes." },
        { name: "Haifa", x: 52, y: 42, year: "2006", note: "Major Israeli city hit by Hezbollah rockets; 8 railway workers killed in single attack." },
      ],
    },
    technology: [
      { name: "Kornet anti-tank missiles", type: "Anti-armor", side: "Hezbollah", impact: "Russian-made missiles destroyed Israeli Merkava tanks, shocking IDF planners who assumed armor dominance." },
      { name: "Katyusha and Fajr rockets", type: "Indirect fire", side: "Hezbollah", impact: "4,000 rockets fired into Israel; demonstrated ability to sustain fire despite intensive air campaign." },
      { name: "Precision air strikes", type: "Strategic bombing", side: "Israel", impact: "Destroyed infrastructure but failed to eliminate Hezbollah's rocket capability or command structure." },
    ],
    centralFigures: [
      {
        name: "Hassan Nasrallah",
        role: "Hezbollah Secretary-General",
        side: "belligerent",
        importance: 92,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Directed Hezbollah's war strategy; later said he would not have ordered the raid had he known Israel's response scale.",
      },
      {
        name: "Ehud Olmert",
        role: "Israeli Prime Minister",
        side: "belligerent",
        importance: 82,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Authorized the military response; criticized by the Winograd Commission for strategic and operational failures.",
      },
      {
        name: "Dan Halutz",
        role: "IDF Chief of Staff",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Air force officer whose air-power-centric strategy proved insufficient against Hezbollah's ground defenses; resigned after the war.",
      },
    ],
    infobox: {
      dates: "12 July - 14 August 2006",
      location: "Southern Lebanon and northern Israel",
      result: "Military stalemate; UN Resolution 1701 ceasefire",
      belligerents: "Israel vs Hezbollah",
      strength: "30,000+ IDF troops vs 3,000-5,000 Hezbollah fighters",
      casualties: "1,000+ Lebanese, 165 Israelis killed",
    },
  },
`;

content = content.replace(/\n};(\s*)$/, '\n' + dossiers + '\n};$1');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Batch 5 (5 dossiers) added successfully.');
