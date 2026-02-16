const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'featuredWars.js');
let content = fs.readFileSync(filePath, 'utf8');

const dossiers = {

  "Lebanon Conflict": {
    theater: "Middle East - southern **Lebanon**, the **Bekaa Valley**, and **Beirut**",
    summary: "The **Lebanon Conflict (2006)** is the same war as the **Lebanese-Israeli Conflict** entry, viewed from the Lebanese domestic perspective. For Lebanon, the 34-day war was not just about **Hezbollah** versus **Israel** - it was about a sovereign state being devastated because a non-state actor within its borders made a decision the government could not control. Israeli air strikes destroyed bridges, power stations, fuel depots, and residential neighborhoods across the country, not just in the south. The **Dahieh doctrine** - named after the Beirut suburb Israel flattened - became shorthand for disproportionate destruction aimed at pressuring civilian populations to turn against militants. Lebanon's government, military, and civilian infrastructure paid the price for a war it did not start and could not stop.",
    background: [
      "Lebanon's post-civil-war political system gave **Hezbollah** a unique dual role: political party and independent military force.",
      "The **Taif Agreement** and subsequent arrangements left Hezbollah's weapons outside state control, creating a 'state within a state.'",
      "Lebanon's fragile sectarian balance meant the government could neither disarm Hezbollah nor endorse its military actions.",
      "The 2006 war exposed the fundamental contradiction of Lebanese sovereignty: a government that does not control all armed forces on its territory.",
    ],
    participants: [
      { name: "Hezbollah", role: "Non-state military force that triggered the war and conducted the defense of southern Lebanon.", side: "belligerent" },
      { name: "Israel Defense Forces", role: "Conducted air campaign across all of Lebanon and ground invasion of the south.", side: "belligerent" },
      { name: "Lebanese government", role: "Unable to prevent or control the conflict; bore the cost of infrastructure destruction.", side: "nonBelligerent" },
      { name: "Lebanese Armed Forces", role: "Remained largely on the sidelines during the fighting; deployed to the south after the ceasefire.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "12 Jul 2006", title: "War begins", detail: "Hezbollah cross-border raid triggers Israeli military response across Lebanon." },
      { period: "13-30 Jul 2006", title: "Air campaign", detail: "Israel bombs infrastructure nationwide; Beirut airport, bridges, power plants destroyed." },
      { period: "30 Jul 2006", title: "Qana strike", detail: "Israeli air strike kills 28 civilians including 16 children in Qana; international outrage." },
      { period: "14 Aug 2006", title: "Ceasefire", detail: "Resolution 1701; Lebanese army deploys south for first time in decades; reconstruction begins." },
    ],
    outcome: "Massive infrastructure destruction; Hezbollah survived and claimed victory; Lebanese army deployed to the south; reconstruction funded largely by Gulf states and Iran.",
    casualties: {
      military: "Lebanese Armed Forces suffered minimal casualties as they were not primary combatants.",
      civilian: "Over **1,000** Lebanese killed, the vast majority civilians; entire neighborhoods destroyed.",
      displacement: "Over **1 million** Lebanese displaced, approximately 25% of the population.",
      note: "The economic cost exceeded 3.6 billion dollars in infrastructure damage alone.",
    },
    orderOfBattle: [
      { name: "Hezbollah military wing", strength: "3,000-5,000 fighters with rockets, anti-tank missiles, and fortified positions", note: "Operated independently of the Lebanese state military." },
      { name: "Lebanese Armed Forces", strength: "70,000 troops who largely stayed out of the fighting", note: "Post-war deployment to the south was the first in decades." },
    ],
    aftermath: [
      "Reconstruction of southern Beirut was funded largely by **Iran**, deepening Hezbollah's domestic legitimacy and Iranian influence.",
      "The war intensified Lebanon's internal political crisis, contributing to the **2008 Doha Agreement** after Hezbollah briefly seized west Beirut.",
      "Lebanon's infrastructure vulnerability demonstrated the cost of hosting non-state military actors.",
      "The **Dahieh doctrine** entered military vocabulary as a strategy of disproportionate destruction to deter future attacks.",
    ],
    maps: {
      title: "Lebanon Conflict 2006 - Lebanese perspective",
      description: "A country paying for a war it did not choose.",
      points: [
        { name: "Dahieh (south Beirut)", x: 50, y: 42, year: "2006", note: "Hezbollah stronghold systematically destroyed by Israeli air strikes." },
        { name: "Qana", x: 50, y: 46, year: "2006", note: "Site of air strike killing 28 civilians; echoed a similar 1996 massacre at the same location." },
        { name: "Beirut-Damascus highway", x: 50, y: 42, year: "2006", note: "Bridges destroyed to cut supply lines; isolated Lebanon from its eastern neighbor." },
      ],
    },
    technology: [
      { name: "Infrastructure targeting (Dahieh doctrine)", type: "Strategic bombing", side: "Israel", impact: "Systematic destruction of civilian infrastructure to pressure the population against Hezbollah." },
      { name: "Cluster munitions", type: "Area denial weapon", side: "Israel", impact: "Up to 4 million submunitions dropped, primarily in final 72 hours; continued killing civilians for years." },
      { name: "Iranian reconstruction funding", type: "Post-war influence", side: "Iran/Hezbollah", impact: "Rapid rebuilding of destroyed areas cemented Hezbollah's domestic support and Iranian strategic investment." },
    ],
    centralFigures: [
      {
        name: "Fouad Siniora",
        role: "Prime Minister of Lebanon",
        side: "nonBelligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the government through the crisis; famously wept at an Arab League meeting while pleading for a ceasefire.",
      },
      {
        name: "Hassan Nasrallah",
        role: "Hezbollah Secretary-General",
        side: "belligerent",
        importance: 90,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Directed the war from hiding; emerged as the most powerful political figure in Lebanon.",
      },
      {
        name: "Emile Lahoud",
        role: "President of Lebanon",
        side: "nonBelligerent",
        importance: 55,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Syrian-aligned president with limited power during the crisis; presidency was largely ceremonial.",
      },
    ],
    infobox: {
      dates: "12 July - 14 August 2006",
      location: "Lebanon",
      result: "Ceasefire; massive destruction; Hezbollah survived",
      belligerents: "Hezbollah vs Israel (Lebanon caught between)",
      strength: "Hezbollah militia vs IDF conventional force",
      casualties: "1,000+ Lebanese killed; 1 million displaced",
    },
  },

  "Operation Protective Edge": {
    theater: "Middle East - the **Gaza Strip** and southern **Israel**",
    summary: "**Operation Protective Edge (2014)** was Israel's third major military operation in Gaza in six years, lasting 50 days and becoming the deadliest of the Gaza wars to that point. Triggered by the kidnapping and murder of three Israeli teenagers (by Hamas-linked operatives) and subsequent escalation, Israel launched air strikes followed by a ground invasion focused on destroying **Hamas tunnel networks** that extended under the border into Israeli territory. Hamas and other groups fired over **4,500** rockets into Israel. The operation killed over **2,200** Palestinians (the majority civilians according to UN figures) and **73** Israelis (67 soldiers). The tunnel threat drove the ground operation, but the civilian toll drove the international response. The war ended with a ceasefire that changed nothing structurally - setting the stage for future rounds.",
    background: [
      "The kidnapping and murder of three Israeli teenagers in June 2014 triggered a crackdown in the West Bank and escalating tensions.",
      "Hamas rocket fire from Gaza intensified; Israel launched Operation Protective Edge on July 8, 2014.",
      "The discovery of **cross-border attack tunnels** from Gaza into Israel became the primary justification for the ground invasion.",
      "Previous operations (**Cast Lead** 2008-09, **Pillar of Defense** 2012) had failed to stop Hamas military buildup.",
    ],
    participants: [
      { name: "Israel Defense Forces", role: "Conducted 50-day air, ground, and naval operation against Hamas infrastructure and tunnel networks.", side: "belligerent" },
      { name: "Hamas (Izz ad-Din al-Qassam Brigades)", role: "Defended Gaza using rockets, tunnels, and guerrilla tactics; attempted cross-border attacks through tunnels.", side: "belligerent" },
      { name: "Palestinian Islamic Jihad and other groups", role: "Participated in rocket fire and combat alongside Hamas.", side: "belligerent" },
      { name: "Palestinian civilians", role: "1.8 million people in one of the world's most densely populated areas during intensive military operations.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "8 Jul 2014", title: "Operation begins", detail: "Israeli air strikes target Hamas military infrastructure; Hamas escalates rocket fire." },
      { period: "17 Jul 2014", title: "Ground invasion", detail: "IDF enters Gaza focused on tunnel destruction; intense urban combat in Shejaiya and other neighborhoods." },
      { period: "20 Jul 2014", title: "Shejaiya battle", detail: "Fierce fighting in Shejaiya neighborhood; over 60 Palestinians killed in single day; 13 IDF soldiers killed." },
      { period: "26 Aug 2014", title: "Ceasefire", detail: "Open-ended ceasefire after 50 days; tunnels destroyed; no political resolution." },
    ],
    outcome: "Hamas tunnel network largely destroyed; rocket fire temporarily halted; massive civilian casualties and destruction in Gaza; no political resolution.",
    casualties: {
      military: "**67** IDF soldiers and **6** Israeli civilians killed. Hamas military losses estimated at **600-1,000** fighters.",
      civilian: "Over **2,200** Palestinians killed; UN estimated **1,462** were civilians including **551** children.",
      displacement: "**500,000** Gazans displaced at peak; **100,000** homes damaged or destroyed.",
      note: "The Shejaiya battle alone killed more Palestinians in one day than most entire military operations.",
    },
    orderOfBattle: [
      { name: "IDF", strength: "Multiple brigades including Golani, Givati, and paratroopers with armor, artillery, and air support", note: "Ground forces focused on tunnel destruction rather than territorial control." },
      { name: "Hamas military wing", strength: "Estimated 15,000-25,000 fighters with rockets, tunnels, IEDs, and anti-tank missiles", note: "Tunnel network represented years of investment and Hamas's primary strategic innovation." },
    ],
    aftermath: [
      "Gaza reconstruction was extremely slow due to the blockade restricting building materials.",
      "The tunnel threat drove Israeli investment in underground barrier technology completed in 2021.",
      "International criticism of civilian casualties intensified pressure on Israel but produced no policy changes.",
      "Hamas rebuilt its military capability, setting the stage for future escalations.",
    ],
    maps: {
      title: "Operation Protective Edge - Gaza 2014",
      description: "50 days, 4,500 rockets, 2,200 dead, and a tunnel network.",
      points: [
        { name: "Shejaiya", x: 52, y: 46, year: "2014", note: "Neighborhood east of Gaza City; site of the war's deadliest single battle." },
        { name: "Rafah", x: 52, y: 50, year: "2014", note: "Southern Gaza; tunnel networks and site of controversial 'Black Friday' bombardment." },
        { name: "Cross-border tunnels", x: 52, y: 46, year: "2014", note: "Network of attack tunnels extending into Israeli territory; primary ground operation objective." },
      ],
    },
    technology: [
      { name: "Cross-border attack tunnels", type: "Underground warfare", side: "Hamas", impact: "Concrete-lined tunnels extending kilometers into Israel for infiltration attacks; drove the entire ground operation." },
      { name: "Iron Dome", type: "Missile defense", side: "Israel", impact: "Intercepted approximately 90% of rockets targeting populated areas; dramatically reduced Israeli civilian casualties." },
      { name: "Roof-knocking warnings", type: "Precautionary measure", side: "Israel", impact: "Small munitions dropped as warnings before strikes; debated as genuine precaution vs insufficient protection." },
    ],
    centralFigures: [
      {
        name: "Benjamin Netanyahu",
        role: "Prime Minister of Israel",
        side: "belligerent",
        importance: 88,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Portrait_of_Benjamin_Netanyahu.jpg",
        note: "Authorized the operation and ground invasion; faced domestic pressure to achieve decisive results.",
      },
      {
        name: "Mohammed Deif",
        role: "Commander of Izz ad-Din al-Qassam Brigades",
        side: "belligerent",
        importance: 80,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Hamas's elusive military commander who built the tunnel network; survived multiple assassination attempts.",
      },
      {
        name: "Ban Ki-moon",
        role: "UN Secretary-General",
        side: "nonBelligerent",
        importance: 55,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Called the destruction of UN schools sheltering civilians 'a moral outrage and a criminal act.'",
      },
    ],
    infobox: {
      dates: "8 July - 26 August 2014",
      location: "Gaza Strip and southern Israel",
      result: "Tunnels destroyed; ceasefire; no political resolution",
      belligerents: "Israel vs Hamas and Palestinian militant groups",
      strength: "IDF conventional force vs Hamas asymmetric defense with tunnels",
      casualties: "2,200+ Palestinians and 73 Israelis killed",
    },
  },

  "Central African Republic Civil War": {
    theater: "Central Africa - the **Central African Republic**, from **Bangui** to the northern and eastern provinces",
    summary: "The **Central African Republic Civil War (2012-present)** is the latest chapter in the CAR's seemingly permanent crisis. In December 2012, the **Seleka** coalition - a loose alliance of mostly Muslim rebel groups from the northeast - marched on **Bangui** and overthrew President **Francois Bozize**. Seleka leader **Michel Djotodia** became president but could not control his own forces, who committed widespread atrocities. Christian and animist **Anti-balaka** militias formed in response, and the country descended into sectarian violence between Muslim and Christian communities that had previously coexisted. **France** intervened with **Operation Sangaris**, the **AU** deployed **MISCA**, and the **UN** established **MINUSCA**. The conflict has displaced over a million people in a country of five million. More recently, **Russian Wagner Group** mercenaries have become the government's primary security partner, adding another layer to an already complicated disaster.",
    background: [
      "The CAR has experienced chronic instability since independence in 1960, with repeated coups and foreign interventions.",
      "President **Bozize** came to power in a 2003 coup and failed to integrate northeastern communities into governance.",
      "The **Seleka** coalition formed from marginalized northeastern armed groups demanding political inclusion and resources.",
      "The CAR's weak state institutions meant that any armed group with a few hundred fighters could threaten the capital.",
    ],
    participants: [
      { name: "Seleka coalition", role: "Muslim-majority rebel alliance that overthrew Bozize and briefly held power before fragmenting.", side: "belligerent" },
      { name: "Anti-balaka militias", role: "Christian and animist self-defense groups that became perpetrators of sectarian violence against Muslim communities.", side: "belligerent" },
      { name: "France (Operation Sangaris)", role: "Former colonial power intervening to prevent genocide and stabilize the capital.", side: "nonBelligerent" },
      { name: "MINUSCA (UN peacekeeping)", role: "Large UN mission mandated to protect civilians and support political transition.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Dec 2012 - Mar 2013", title: "Seleka advance", detail: "Rebel coalition marches on Bangui; Bozize flees; Djotodia takes power." },
      { period: "2013-2014", title: "Sectarian collapse", detail: "Seleka atrocities trigger Anti-balaka formation; tit-for-tat massacres; Muslim communities ethnically cleansed from western CAR." },
      { period: "2014-2016", title: "International intervention", detail: "French and AU forces deploy; UN takes over with MINUSCA; transitional government established." },
      { period: "2020-present", title: "Wagner era", detail: "Russian Wagner Group mercenaries become primary security force; accused of widespread human rights abuses." },
    ],
    outcome: "Ongoing instability; elected government dependent on Wagner mercenaries; armed groups control much of the countryside; sectarian divisions entrenched.",
    casualties: {
      military: "Hundreds of combatants killed across all factions; peacekeepers also suffered casualties.",
      civilian: "Thousands killed in sectarian massacres; exact figures difficult to establish in a country with minimal infrastructure.",
      displacement: "Over **1.4 million** displaced internally and as refugees - roughly a quarter of the population.",
      note: "The CAR consistently ranks among the world's worst humanitarian crises despite receiving minimal international attention.",
    },
    orderOfBattle: [
      { name: "FACA (CAR armed forces) + Wagner", strength: "Small national army supplemented by Russian mercenaries and Rwandan forces", note: "Wagner Group has become the most capable fighting force available to the government." },
      { name: "Armed groups (Seleka factions, Anti-balaka, others)", strength: "Dozens of armed groups controlling territory across the country", note: "Fragmentation makes negotiation nearly impossible; groups split and reform constantly." },
    ],
    aftermath: [
      "The **Wagner Group's** presence has made the CAR a test case for Russian mercenary influence in Africa.",
      "Muslim communities in western CAR were largely ethnically cleansed; the country's religious geography has been permanently altered.",
      "MINUSCA remains one of the UN's most dangerous peacekeeping missions with regular peacekeeper casualties.",
      "The 2019 peace agreement included most armed groups but has been repeatedly violated.",
    ],
    maps: {
      title: "Central African Republic Civil War",
      description: "A country where the state barely exists and armed groups fill the vacuum.",
      points: [
        { name: "Bangui", x: 50, y: 52, year: "2013", note: "Capital seized by Seleka; site of worst sectarian violence and international intervention." },
        { name: "Bambari", x: 52, y: 50, year: "2014-present", note: "Central town; flashpoint for Seleka-Anti-balaka clashes and peacekeeping operations." },
        { name: "Northeastern provinces", x: 54, y: 48, year: "2012-present", note: "Seleka heartland and site of ongoing armed group activity." },
      ],
    },
    technology: [
      { name: "Wagner Group mercenaries", type: "Private military", side: "CAR government/Russia", impact: "Russian mercenaries provide combat capability but commit widespread abuses and extract mining concessions." },
      { name: "Sectarian mobilization", type: "Identity warfare", side: "Both", impact: "Religious identity weaponized to mobilize communities that had previously coexisted peacefully." },
      { name: "UN peacekeeping (MINUSCA)", type: "International intervention", side: "UN", impact: "12,000+ troops deployed but unable to protect civilians across a country the size of Texas with almost no roads." },
    ],
    centralFigures: [
      {
        name: "Michel Djotodia",
        role: "Seleka leader / transitional president",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the Seleka takeover; became CAR's first Muslim head of state; forced to resign after failing to control violence.",
      },
      {
        name: "Faustin-Archange Touadera",
        role: "President of CAR (2016-present)",
        side: "belligerent",
        importance: 70,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Elected president who turned to Wagner Group mercenaries when Western support proved insufficient.",
      },
      {
        name: "Francois Bozize",
        role: "Overthrown President",
        side: "belligerent",
        importance: 65,
        portrait: "/portraits/placeholder-figure.svg",
        note: "His exclusionary governance created the conditions for Seleka rebellion; later backed Anti-balaka groups from exile.",
      },
    ],
    infobox: {
      dates: "2012 - present",
      location: "Central African Republic",
      result: "Ongoing; government dependent on Wagner mercenaries; armed groups control countryside",
      belligerents: "Government + Wagner vs Seleka factions, Anti-balaka, and other armed groups",
      strength: "Weak state army + mercenaries vs dozens of armed groups",
      casualties: "Thousands killed; 1.4 million displaced",
    },
  },

  "Northern Mali Conflict": {
    theater: "West Africa / Sahel - northern **Mali**, from **Timbuktu** and **Gao** to the **Kidal** region and the Saharan fringe",
    summary: "The **Northern Mali Conflict (2012-present)** began when **Tuareg** separatists and jihadist groups seized northern Mali in early 2012, exploiting a military coup in **Bamako** and the influx of weapons from **Libya's** collapse. The **MNLA** (Tuareg separatists) declared independence for **Azawad**, but were quickly sidelined by jihadist groups - **AQIM**, **Ansar Dine**, and **MUJAO** - who imposed harsh Sharia law and destroyed **Timbuktu's** ancient manuscripts and shrines. When jihadists advanced south toward Bamako in January 2013, **France** intervened with **Operation Serval**, rapidly pushing them back. But military victory did not produce peace: the conflict evolved into a sprawling Sahel insurgency involving jihadists, ethnic militias, and state forces across Mali, Burkina Faso, and Niger. France eventually withdrew in 2022 after a military junta took power and invited **Wagner Group** mercenaries instead.",
    background: [
      "The **Tuareg** people of northern Mali have launched multiple rebellions since independence (1963, 1990, 2006, 2012) over marginalization.",
      "The **2011 Libyan civil war** flooded the Sahel with weapons and returning Tuareg fighters who had served in Gaddafi's forces.",
      "A **March 2012 military coup** in Bamako created a power vacuum that rebels exploited to seize the entire north.",
      "Jihadist groups allied with Tuareg separatists initially but quickly dominated, imposing their own agenda.",
    ],
    participants: [
      { name: "French military (Serval/Barkhane)", role: "Intervened to prevent jihadist advance on Bamako; conducted counterterrorism operations across the Sahel until 2022.", side: "belligerent" },
      { name: "Malian Armed Forces", role: "Government military weakened by coups and corruption; increasingly reliant on external support.", side: "belligerent" },
      { name: "AQIM, Ansar Dine, JNIM", role: "Jihadist groups controlling territory, imposing Sharia, and conducting insurgency across the Sahel.", side: "belligerent" },
      { name: "MNLA (Tuareg separatists)", role: "Secular separatist movement seeking Azawad independence; alternately allied with and fighting against jihadists.", side: "belligerent" },
    ],
    timeline: [
      { period: "Jan-Apr 2012", title: "Northern seizure", detail: "Tuareg and jihadist forces capture Timbuktu, Gao, and Kidal; MNLA declares Azawad independence; jihadists take over." },
      { period: "Jan 2013", title: "French intervention", detail: "Operation Serval launched as jihadists advance south; rapid French victory recaptures northern cities." },
      { period: "2014-2022", title: "Operation Barkhane", detail: "France maintains 5,000-troop Sahel counterterrorism force; violence spreads to Burkina Faso and Niger." },
      { period: "2021-present", title: "Junta and Wagner", detail: "Military coups in Mali; France expelled; Wagner mercenaries deployed; violence continues to escalate." },
    ],
    outcome: "Jihadist territorial control reversed but insurgency expanded across the Sahel; French withdrawal; military junta in power; Wagner mercenaries operating with documented abuses.",
    casualties: {
      military: "Hundreds of French, Malian, and UN peacekeepers killed. Thousands of Malian soldiers killed.",
      civilian: "Thousands of civilians killed by jihadists, state forces, ethnic militias, and Wagner mercenaries.",
      displacement: "Over **400,000** displaced in Mali; millions affected across the broader Sahel crisis.",
      note: "The conflict has metastasized from a Malian crisis into a regional Sahel emergency affecting multiple countries.",
    },
    orderOfBattle: [
      { name: "French forces (Serval/Barkhane)", strength: "4,500-5,000 troops with air power, special forces, and intelligence assets", note: "Militarily effective at counterterrorism but unable to address underlying governance failures." },
      { name: "Jihadist coalition (JNIM/ISGS)", strength: "Several thousand fighters across the Sahel with growing recruitment", note: "Exploited ethnic grievances and governance vacuums to expand far beyond northern Mali." },
    ],
    aftermath: [
      "The destruction of **Timbuktu's** ancient manuscripts and Sufi shrines was prosecuted as a war crime by the **ICC**.",
      "France's Sahel intervention became its longest overseas military operation and ended in strategic frustration.",
      "Military coups in **Mali** (2020, 2021), **Burkina Faso** (2022), and **Niger** (2023) reflected public frustration with both democratic governments and French presence.",
      "The Wagner Group's arrival marked a broader shift in African security partnerships from Western to Russian providers.",
    ],
    maps: {
      title: "Northern Mali and Sahel conflict",
      description: "From Tuareg rebellion to jihadist insurgency to Wagner mercenaries.",
      points: [
        { name: "Timbuktu", x: 46, y: 48, year: "2012-2013", note: "Ancient city seized by jihadists who destroyed cultural heritage; recaptured by French forces." },
        { name: "Gao", x: 48, y: 48, year: "2012-2013", note: "Largest northern city; MUJAO stronghold; site of French airborne assault." },
        { name: "Kidal", x: 50, y: 46, year: "2012-present", note: "Tuareg stronghold; contested between separatists, jihadists, and government forces." },
      ],
    },
    technology: [
      { name: "French rapid deployment", type: "Expeditionary warfare", side: "France", impact: "Operation Serval demonstrated France's ability to project force rapidly across the Sahel." },
      { name: "IED warfare", type: "Asymmetric weapon", side: "Jihadists", impact: "Roadside bombs became the primary killer of Malian, French, and UN forces." },
      { name: "Cultural heritage destruction", type: "Ideological warfare", side: "Jihadists", impact: "Destruction of Timbuktu shrines was both ideological statement and war crime prosecuted by the ICC." },
    ],
    centralFigures: [
      {
        name: "Iyad Ag Ghaly",
        role: "Ansar Dine / JNIM leader",
        side: "belligerent",
        importance: 82,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Tuareg leader turned jihadist who became the most powerful insurgent commander in the Sahel.",
      },
      {
        name: "Assimi Goita",
        role: "Malian junta leader (2021-present)",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Military officer who led two coups; expelled French forces and invited Wagner mercenaries.",
      },
      {
        name: "Francois Hollande",
        role: "President of France (2012-2017)",
        side: "belligerent",
        importance: 75,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/0/05/Fran%C3%A7ois_Hollande_-_2017_%2827869823159%29_%28cropped%29.jpg",
        note: "Ordered Operation Serval; the intervention was initially popular but became France's longest overseas deployment.",
      },
    ],
    infobox: {
      dates: "2012 - present",
      location: "Northern Mali and the broader Sahel",
      result: "Jihadist territorial control reversed but insurgency expanded; French withdrawal; Wagner era",
      belligerents: "Malian government + France/Wagner vs jihadist groups and Tuareg separatists",
      strength: "State forces + external military support vs several thousand jihadist fighters",
      casualties: "Thousands killed; 400,000+ displaced in Mali alone",
    },
  },

  "Second Libyan Civil War": {
    theater: "North Africa - **Libya**, from **Tripoli** in the west to **Benghazi** and **Tobruk** in the east, and the southern **Fezzan**",
    summary: "The **Second Libyan Civil War (2014-2020)** was the collapse of post-Gaddafi Libya into competing governments and armed factions. After the 2011 revolution, Libya failed to build functional state institutions, and by 2014 two rival governments claimed legitimacy: the **Government of National Accord (GNA)** in Tripoli (UN-recognized) and the **House of Representatives** in Tobruk, backed by **Khalifa Haftar's Libyan National Army (LNA)**. Haftar launched a military campaign to capture Tripoli in April 2019, nearly succeeding before **Turkish** military intervention saved the GNA. The war drew in a remarkable cast of foreign actors: **Turkey** and **Qatar** backed the GNA; **UAE**, **Egypt**, **Russia** (Wagner), and **France** (quietly) backed Haftar. A ceasefire in October 2020 ended major fighting but Libya remains divided. It was the war that proved regime change is the easy part - the hard part is everything that comes after.",
    background: [
      "The **2011 NATO intervention** toppled Gaddafi but left no functioning state institutions or unified military.",
      "Militias that fought Gaddafi refused to disarm and became the primary power brokers in post-revolution Libya.",
      "**Khalifa Haftar**, a former Gaddafi general turned CIA asset turned warlord, built the LNA in eastern Libya.",
      "The 2014 split between Tripoli and Tobruk governments formalized Libya's east-west division.",
    ],
    participants: [
      { name: "Government of National Accord (GNA)", role: "UN-recognized government in Tripoli backed by western Libyan militias, Turkey, and Qatar.", side: "belligerent" },
      { name: "Libyan National Army (Haftar)", role: "Eastern-based military force backed by UAE, Egypt, Russia/Wagner, and France attempting to unify Libya by force.", side: "belligerent" },
      { name: "Turkey", role: "Deployed troops, drones, and Syrian mercenaries to defend Tripoli against Haftar's 2019 offensive.", side: "belligerent" },
      { name: "Russia (Wagner Group)", role: "Deployed mercenaries and military equipment to support Haftar's forces.", side: "belligerent" },
    ],
    timeline: [
      { period: "2014-2018", title: "Dual government period", detail: "Libya splits between Tripoli and Tobruk; Haftar consolidates eastern control; battles for Benghazi." },
      { period: "Apr 2019", title: "Tripoli offensive", detail: "Haftar launches assault on Tripoli; LNA advances to city outskirts; GNA defends with militia coalition." },
      { period: "Jan 2020", title: "Turkish intervention", detail: "Turkey deploys military forces and drones; LNA offensive stalls and reverses." },
      { period: "Oct 2020", title: "Ceasefire", detail: "UN-brokered ceasefire; unity government negotiations; foreign fighters remain." },
    ],
    outcome: "Ceasefire ended major fighting; unity government attempted but elections repeatedly postponed; Libya remains effectively divided; foreign forces still present.",
    casualties: {
      military: "Thousands of combatants killed across all factions including foreign fighters and mercenaries.",
      civilian: "Hundreds of civilians killed in air strikes, shelling, and crossfire, particularly during the Tripoli battle.",
      displacement: "Over **400,000** displaced during the Tripoli offensive alone.",
      note: "The presence of unmarked mass graves and Wagner-planted landmines continues to produce casualties years after the ceasefire.",
    },
    orderOfBattle: [
      { name: "GNA forces + Turkish support", strength: "Western Libyan militias plus Turkish troops, drones, and Syrian mercenary fighters", note: "Turkish Bayraktar TB2 drones proved decisive in breaking the Tripoli siege." },
      { name: "LNA + foreign backers", strength: "Eastern military forces plus Wagner mercenaries, UAE drones, and Egyptian support", note: "Conventional military capability undermined by militia indiscipline and overextended supply lines." },
    ],
    aftermath: [
      "**Turkish Bayraktar TB2 drones** proved their combat effectiveness, launching Turkey's drone export industry.",
      "Libya became a showcase for **proxy warfare** with at least eight foreign countries directly involved militarily.",
      "Planned elections have been repeatedly postponed; political unification remains elusive.",
      "The war demonstrated that the 2011 intervention's failure to plan for post-Gaddafi governance had catastrophic long-term consequences.",
    ],
    maps: {
      title: "Second Libyan Civil War",
      description: "Two governments, eight foreign backers, and a country that cannot hold an election.",
      points: [
        { name: "Tripoli", x: 48, y: 42, year: "2019-2020", note: "Capital besieged by Haftar; saved by Turkish intervention; GNA seat of power." },
        { name: "Benghazi", x: 54, y: 42, year: "2014-2017", note: "Eastern city; site of prolonged battle between Haftar's forces and Islamist militias." },
        { name: "Sirte", x: 52, y: 42, year: "2020", note: "Central city; front line between GNA and LNA; Wagner Group forward position." },
      ],
    },
    technology: [
      { name: "Bayraktar TB2 drones", type: "UCAV", side: "Turkey/GNA", impact: "Destroyed LNA air defenses and supply lines; proved decisive in breaking the Tripoli siege; launched global drone arms race." },
      { name: "Wagner Group mercenaries", type: "Private military", side: "Russia/LNA", impact: "Provided snipers, artillery, and mine-laying capability; left behind booby-trapped areas after withdrawal." },
      { name: "UAE Wing Loong drones", type: "UCAV", side: "UAE/LNA", impact: "Chinese-made drones conducted strikes supporting Haftar; part of broader UAE military projection." },
    ],
    centralFigures: [
      {
        name: "Khalifa Haftar",
        role: "LNA commander",
        side: "belligerent",
        importance: 88,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Former Gaddafi general turned CIA asset turned eastern Libyan strongman; his Tripoli offensive nearly succeeded before Turkish intervention.",
      },
      {
        name: "Fayez al-Sarraj",
        role: "GNA Prime Minister",
        side: "belligerent",
        importance: 70,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the UN-recognized government through the Tripoli siege; resigned in 2021.",
      },
      {
        name: "Recep Tayyip Erdogan",
        role: "President of Turkey",
        side: "belligerent",
        importance: 80,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Recep_Tayyip_Erdo%C4%9Fan_2023.jpg",
        note: "Ordered Turkish military intervention that saved Tripoli and established Turkey as a major Libyan power broker.",
      },
    ],
    infobox: {
      dates: "2014 - 2020",
      location: "Libya",
      result: "Ceasefire; country remains divided; elections postponed indefinitely",
      belligerents: "GNA + Turkey vs LNA + UAE/Egypt/Russia",
      strength: "Western militias + Turkish forces vs eastern military + Wagner mercenaries",
      casualties: "Thousands killed; 400,000+ displaced during Tripoli battle",
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
console.log('Batch 6 (' + entries.length + ' dossiers) added successfully.');
