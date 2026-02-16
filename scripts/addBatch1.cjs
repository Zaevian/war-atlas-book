const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'featuredWars.js');
let content = fs.readFileSync(filePath, 'utf8');

const dossiers = `
  "Sino-Vietnamese Conflicts": {
    theater: "Southeast Asian borderlands - the **Sino-Vietnamese frontier**, **Spratly Islands**, and contested maritime zones",
    summary: "The **Sino-Vietnamese Conflicts (1979-1990)** began with China's punitive invasion of northern Vietnam in February 1979 and continued as a decade-long series of border clashes, artillery duels, and naval confrontations. **China** launched the 1979 war ostensibly to 'teach Vietnam a lesson' for its invasion of **Cambodia** and alliance with the **Soviet Union**. Vietnam's border defenses - largely militia and regional forces - inflicted heavier-than-expected casualties on the **PLA**, which withdrew after a few weeks claiming mission accomplished. The border then simmered with intermittent fighting through the 1980s, punctuated by the **1988 Johnson South Reef skirmish** in the Spratlys. It was a conflict where both sides claimed victory and neither side's version fully survived contact with the casualty reports.",
    background: [
      "The **Sino-Soviet split** placed Vietnam firmly in Moscow's orbit after reunification, alarming Beijing.",
      "Vietnam's **1978 invasion of Cambodia** toppled China's Khmer Rouge ally, creating a direct strategic grievance.",
      "Border tensions had been building since the mid-1970s over ethnic Chinese expulsions and territorial disputes.",
      "**Deng Xiaoping** sought to demonstrate that Soviet-aligned states could not act with impunity on China's periphery.",
    ],
    participants: [
      { name: "People's Republic of China", role: "Launched punitive invasion in 1979 and maintained border pressure through the 1980s to constrain Vietnamese regional ambitions.", side: "belligerent" },
      { name: "Socialist Republic of Vietnam", role: "Defended northern border with militia and regular forces while maintaining occupation of Cambodia.", side: "belligerent" },
      { name: "Soviet Union", role: "Provided diplomatic backing and military supplies to Vietnam but did not intervene directly against China.", side: "nonBelligerent" },
      { name: "Cambodia (PRK)", role: "Vietnamese-installed government whose existence was a core Chinese grievance driving the conflict.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Feb-Mar 1979", title: "Chinese invasion", detail: "PLA crosses border with 200,000+ troops, captures provincial capitals, suffers significant casualties, withdraws after three weeks." },
      { period: "1979-1987", title: "Border war of attrition", detail: "Continuous artillery exchanges and infantry clashes along the frontier, particularly around **Lao Shan** and **Vi Xuyen**." },
      { period: "Mar 1988", title: "Johnson South Reef", detail: "Chinese and Vietnamese naval forces clash in the **Spratlys**; China sinks Vietnamese transport ships and occupies reefs." },
      { period: "1989-1991", title: "Normalization", detail: "Collapse of Soviet Union and Vietnamese withdrawal from Cambodia remove core grievances; relations normalize in 1991." },
    ],
    outcome: "Strategic stalemate on land; China gained footholds in the Spratlys; both sides eventually normalized relations after the Cold War framework dissolved.",
    casualties: {
      military: "The 1979 invasion alone cost China an estimated **20,000-30,000** casualties; Vietnamese losses were comparable. Border fighting through the 1980s added thousands more.",
      civilian: "Northern Vietnamese towns were devastated during the 1979 invasion; Chinese border communities also suffered from Vietnamese artillery.",
      displacement: "Hundreds of thousands of ethnic Chinese were expelled or fled Vietnam; border populations on both sides were displaced repeatedly.",
      note: "Casualty figures remain politically sensitive and disputed by both governments to this day.",
    },
    orderOfBattle: [
      { name: "PLA invasion force (1979)", strength: "200,000-600,000 troops across multiple army corps with armor and artillery support", note: "Numerical superiority was offset by poor coordination, outdated tactics, and determined Vietnamese defense." },
      { name: "Vietnamese border defense", strength: "Regional forces, militia, and redeployed regular units with extensive fortification networks", note: "Defense-in-depth and local knowledge inflicted disproportionate casualties on advancing Chinese forces." },
    ],
    aftermath: [
      "The PLA's poor performance in 1979 catalyzed major **Chinese military modernization** reforms under Deng Xiaoping.",
      "Vietnam's two-front burden (Cambodia occupation + China border) strained its economy and accelerated **Doi Moi** reforms.",
      "The Spratly Islands disputes established during this period remain unresolved and central to **South China Sea** tensions.",
      "Normalization in 1991 created the framework for modern Sino-Vietnamese relations - cooperative on economics, competitive on maritime claims.",
    ],
    maps: {
      title: "Sino-Vietnamese conflict zones 1979-1990",
      description: "From the northern border invasion corridors to the distant Spratly reef clashes.",
      points: [
        { name: "Lang Son", x: 56, y: 38, year: "1979", note: "Key provincial capital captured by PLA before withdrawal; symbolized the invasion's deepest penetration." },
        { name: "Vi Xuyen / Lao Shan", x: 54, y: 36, year: "1984-1987", note: "Epicenter of prolonged border artillery and infantry battles through the 1980s." },
        { name: "Johnson South Reef", x: 58, y: 58, year: "1988", note: "Naval clash that established Chinese physical presence in disputed Spratly Islands." },
      ],
    },
    technology: [
      { name: "Human-wave infantry tactics", type: "Conventional assault doctrine", side: "China", impact: "Mass infantry attacks proved costly against prepared Vietnamese defenses and exposed PLA doctrinal weaknesses." },
      { name: "Defense-in-depth fortifications", type: "Territorial defense", side: "Vietnam", impact: "Tunnel networks, minefields, and prepared positions maximized defensive advantage against numerically superior forces." },
      { name: "Naval power projection", type: "Maritime force", side: "China", impact: "1988 Spratly operations demonstrated growing Chinese naval capability and willingness to use force over island claims." },
    ],
    centralFigures: [
      {
        name: "Deng Xiaoping",
        role: "Chinese paramount leader",
        side: "belligerent",
        importance: 95,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/1/16/Deng_Xiaoping_and_Jimmy_Carter_at_the_arrival_ceremony_for_the_Vice_Premier_of_China._-_NARA_-_183157-restored.jpg",
        note: "Personally authorized the 1979 invasion and used its lessons to drive PLA modernization.",
      },
      {
        name: "Le Duan",
        role: "General Secretary of Vietnam",
        side: "belligerent",
        importance: 82,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Directed Vietnamese strategy of simultaneous Cambodia occupation and northern border defense.",
      },
      {
        name: "Xu Shiyou",
        role: "PLA Guangzhou Military Region commander",
        side: "belligerent",
        importance: 68,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the eastern prong of the 1979 invasion with mixed operational results.",
      },
    ],
    infobox: {
      dates: "1979 - 1990",
      location: "Sino-Vietnamese border and Spratly Islands",
      result: "Strategic stalemate; eventual normalization in 1991",
      belligerents: "China vs Vietnam",
      strength: "Large PLA conventional force vs Vietnamese defense-in-depth",
      casualties: "Tens of thousands killed across all phases",
    },
  },

  "Iranian Embassy Siege": {
    theater: "Central London - **16 Princes Gate**, the **Iranian Embassy** in **South Kensington**",
    summary: "The **Iranian Embassy Siege (1980)** was a six-day hostage crisis in London that ended with one of the most famous special forces operations in history. On April 30, 1980, six gunmen from the **Democratic Revolutionary Front for the Liberation of Arabistan** seized the Iranian Embassy, taking 26 hostages and demanding autonomy for **Khuzestan** and the release of prisoners. After negotiations stalled and the gunmen killed a hostage, **Operation Nimrod** was launched: the **SAS** stormed the building live on television, killing five of six gunmen and rescuing all but one hostage in seventeen minutes. It was the moment counter-terrorism went from classified briefing to prime-time television.",
    background: [
      "Iran's **1979 revolution** created internal ethnic tensions; Arab separatists in **Khuzestan** sought autonomy from the new Islamic Republic.",
      "The gunmen were trained in **Iraq**, which was preparing for war with Iran and saw the siege as a useful provocation.",
      "Britain's **SAS** had been developing hostage-rescue capabilities since the **1972 Munich massacre** but had never deployed them publicly.",
      "The siege coincided with the ongoing **Iran hostage crisis** in Tehran, creating a complex diplomatic backdrop.",
    ],
    participants: [
      { name: "Democratic Revolutionary Front for the Liberation of Arabistan", role: "Six gunmen who seized the embassy demanding Khuzestan autonomy and prisoner releases.", side: "belligerent" },
      { name: "British Government / Metropolitan Police", role: "Managed negotiations and outer cordon while preparing military option.", side: "belligerent" },
      { name: "22 SAS Regiment", role: "Executed Operation Nimrod, the assault that ended the siege in seventeen minutes.", side: "belligerent" },
      { name: "Iranian Government", role: "Nominal owner of the embassy; complicated diplomatic stakeholder given ongoing US hostage crisis.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "30 Apr 1980", title: "Seizure", detail: "Six armed men storm the Iranian Embassy and take 26 hostages including embassy staff, visitors, and a BBC journalist." },
      { period: "1-4 May 1980", title: "Negotiation phase", detail: "Police negotiate release of some hostages while SAS teams rehearse assault plans on a replica building." },
      { period: "5 May 1980", title: "Crisis point", detail: "Gunmen kill hostage Abbas Lavasani and threaten to execute more; government authorizes military intervention." },
      { period: "5 May 1980, 19:23", title: "Operation Nimrod", detail: "SAS teams assault from roof and windows, clear the building in seventeen minutes, kill five gunmen, rescue remaining hostages." },
    ],
    outcome: "All surviving hostages rescued; five of six gunmen killed; one gunman captured. The SAS became internationally famous overnight.",
    casualties: {
      military: "No SAS fatalities; minor injuries to assault team members from fire and flashbang effects.",
      civilian: "One hostage killed by gunmen before the assault; one hostage wounded during the rescue operation.",
      displacement: "Not applicable - urban hostage incident.",
      note: "The remarkably low casualty count for the rescue became the gold standard for counter-terrorism operations worldwide.",
    },
    orderOfBattle: [
      { name: "SAS assault teams", strength: "Approximately 30 operators from B Squadron, 22 SAS", note: "Divided into Red and Blue teams for simultaneous multi-entry assault using abseiling, explosive charges, and stun grenades." },
      { name: "Hostage-takers", strength: "Six lightly armed gunmen with pistols, a submachine gun, and hand grenades", note: "Outmatched in training and equipment once military option was activated." },
    ],
    aftermath: [
      "The SAS's public debut transformed global counter-terrorism doctrine and inspired dozens of national hostage-rescue units.",
      "**Margaret Thatcher's** government received a massive popularity boost from the successful resolution.",
      "The surviving gunman, **Fowzi Nejad**, was convicted and served 27 years in British prison.",
      "The operation demonstrated that liberal democracies could resolve hostage crises with precision force - a lesson studied by every Western military since.",
    ],
    maps: {
      title: "Iranian Embassy Siege - 16 Princes Gate",
      description: "A single building in South Kensington that became the world's most-watched battlefield.",
      points: [
        { name: "16 Princes Gate", x: 50, y: 50, year: "1980", note: "The Iranian Embassy; site of the six-day siege and SAS assault." },
        { name: "Royal Albert Hall area", x: 48, y: 48, year: "1980", note: "Outer police cordon and media staging area during the crisis." },
        { name: "Regent's Park Barracks", x: 52, y: 44, year: "1980", note: "SAS forward staging location during the siege." },
      ],
    },
    technology: [
      { name: "Stun grenades (flashbangs)", type: "Non-lethal entry device", side: "SAS", impact: "Disoriented hostage-takers during the critical first seconds of room entry." },
      { name: "Frame charges", type: "Explosive breaching", side: "SAS", impact: "Enabled simultaneous multi-point entry through windows and walls." },
      { name: "Live television coverage", type: "Media technology", side: "N/A", impact: "BBC cameras captured the assault live, making it the first globally televised special forces operation." },
    ],
    centralFigures: [
      {
        name: "Margaret Thatcher",
        role: "British Prime Minister",
        side: "belligerent",
        importance: 88,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/2/20/Margaret_Thatcher_stock_photo.jpg",
        note: "Authorized the military option and personally congratulated the SAS team at their barracks afterward.",
      },
      {
        name: "Oan Ali Mohammed",
        role: "Lead hostage-taker (codename 'Salim')",
        side: "belligerent",
        importance: 65,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the six-man team; killed during the SAS assault.",
      },
      {
        name: "Sim Harris",
        role: "BBC sound recordist / hostage",
        side: "nonBelligerent",
        importance: 45,
        portrait: "/portraits/placeholder-figure.svg",
        note: "His escape from a first-floor window during the assault became one of the siege's iconic images.",
      },
    ],
    infobox: {
      dates: "30 April - 5 May 1980",
      location: "Iranian Embassy, London, UK",
      result: "SAS assault; hostages rescued; five gunmen killed",
      belligerents: "Arabistan separatists vs British security forces",
      strength: "Six gunmen vs ~30 SAS operators",
      casualties: "One hostage and five gunmen killed",
    },
  },

  "Invasion of Grenada": {
    theater: "Eastern Caribbean - the island of **Grenada** and its satellite **Carriacou**",
    summary: "The **Invasion of Grenada (1983)** was a US-led military intervention triggered by a Marxist coup that overthrew and killed Prime Minister **Maurice Bishop**. The **Reagan administration** cited the safety of American medical students and a request from the **Organisation of Eastern Caribbean States** to justify **Operation Urgent Fury**. US forces, joined by token Caribbean contingents, overwhelmed **Cuban** construction workers-turned-defenders and the **People's Revolutionary Army** in a few days of sometimes chaotic fighting. The operation succeeded militarily but exposed serious inter-service coordination problems that later drove the **Goldwater-Nichols Act** reforms. It was the kind of victory where the after-action report was almost as important as the battle.",
    background: [
      "**Maurice Bishop's** 1979 revolution had aligned Grenada with **Cuba** and the **Soviet Union**, alarming Washington.",
      "A hardline faction led by **Bernard Coard** and **Hudson Austin** overthrew and executed Bishop on October 19, 1983.",
      "The new military junta imposed a shoot-on-sight curfew, raising concerns about 600+ American medical students on the island.",
      "The **OECS** formally requested US intervention, providing diplomatic cover for an operation already being planned.",
    ],
    participants: [
      { name: "United States", role: "Primary invasion force using Army Rangers, Marines, 82nd Airborne, Navy SEALs, and Delta Force.", side: "belligerent" },
      { name: "Caribbean coalition (OECS states)", role: "Small contingents from Jamaica, Barbados, and Eastern Caribbean nations providing political legitimacy.", side: "belligerent" },
      { name: "People's Revolutionary Army (Grenada)", role: "Grenadian military forces loyal to the coup government, defending key installations.", side: "belligerent" },
      { name: "Cuban military construction workers", role: "Approximately 700 Cubans, mostly construction workers at Point Salines airport, some armed and organized for defense.", side: "belligerent" },
    ],
    timeline: [
      { period: "19 Oct 1983", title: "Coup and crisis", detail: "Bishop overthrown and executed; military junta takes power; US begins invasion planning." },
      { period: "25 Oct 1983", title: "D-Day", detail: "US forces land at Point Salines and Pearls airports; encounter heavier resistance than expected." },
      { period: "26-27 Oct 1983", title: "Consolidation", detail: "Rangers and 82nd Airborne secure medical school campuses; resistance collapses across the island." },
      { period: "28 Oct - 15 Dec 1983", title: "Mop-up and withdrawal", detail: "Organized resistance ends; US forces gradually withdraw; democratic elections scheduled." },
    ],
    outcome: "Complete US military victory; coup leaders arrested; democratic government restored; American students evacuated safely.",
    casualties: {
      military: "US: 19 killed, 116 wounded. Cuban: 25 killed, 59 wounded. Grenadian military: 45 killed.",
      civilian: "At least 24 Grenadian civilians killed, including patients in a mental hospital accidentally bombed by US aircraft.",
      displacement: "Minimal long-term displacement given the island's small size and short duration of fighting.",
      note: "Casualties were light by invasion standards but the mental hospital bombing and friendly fire incidents drew significant criticism.",
    },
    orderOfBattle: [
      { name: "US Joint Task Force 120", strength: "~7,600 troops including Rangers, Marines, 82nd Airborne, SEALs, Delta Force, and AC-130 gunships", note: "Overwhelming force applied with poor inter-service communication that nearly caused several disasters." },
      { name: "Grenadian/Cuban defenders", strength: "~1,500 PRA troops plus ~700 Cubans with light weapons and some armored vehicles", note: "Fragmented command and limited heavy weapons made sustained defense impossible." },
    ],
    aftermath: [
      "The operation's communication failures directly contributed to the **1986 Goldwater-Nichols Act** reforming US joint military operations.",
      "Grenada returned to democratic governance and remains a stable Caribbean democracy.",
      "The invasion was condemned by the **UN General Assembly** 108-9 but was popular domestically in both the US and Grenada.",
      "It established a post-Vietnam template for short, decisive US military interventions with clear exit strategies.",
    ],
    maps: {
      title: "Operation Urgent Fury - Grenada 1983",
      description: "A tiny island, a massive force, and a very steep learning curve.",
      points: [
        { name: "Point Salines Airport", x: 48, y: 62, year: "1983", note: "Cuban-built runway; primary Ranger assault objective and site of heaviest initial fighting." },
        { name: "Pearls Airport", x: 54, y: 42, year: "1983", note: "Marine helicopter assault secured the eastern airfield with lighter resistance." },
        { name: "Grand Anse campus", x: 46, y: 56, year: "1983", note: "Second medical school campus; dramatic helicopter rescue of students under fire." },
      ],
    },
    technology: [
      { name: "AC-130 Spectre gunship", type: "Close air support", side: "US", impact: "Provided devastating fire support but also caused the mental hospital bombing due to targeting errors." },
      { name: "Inter-service radio incompatibility", type: "Communications failure", side: "US", impact: "Army and Navy units literally could not talk to each other; one soldier famously used a payphone to call Fort Bragg for fire support." },
      { name: "Cuban-built Point Salines runway", type: "Strategic infrastructure", side: "Cuba/Grenada", impact: "The 10,000-foot runway was cited by the US as evidence of Soviet-Cuban military intentions in the Caribbean." },
    ],
    centralFigures: [
      {
        name: "Ronald Reagan",
        role: "US President",
        side: "belligerent",
        importance: 92,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/1/16/Official_Portrait_of_President_Reagan_1981.jpg",
        note: "Ordered the invasion citing student safety and regional stability; used success to rebuild post-Vietnam military confidence.",
      },
      {
        name: "Hudson Austin",
        role: "Leader of Grenadian military junta",
        side: "belligerent",
        importance: 62,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the coup that killed Bishop and triggered the invasion; arrested and imprisoned.",
      },
      {
        name: "Maurice Bishop",
        role: "Overthrown Prime Minister of Grenada",
        side: "nonBelligerent",
        importance: 70,
        portrait: "/portraits/placeholder-figure.svg",
        note: "His execution by hardliners within his own movement created the crisis that led to US intervention.",
      },
    ],
    infobox: {
      dates: "25 October - 15 December 1983",
      location: "Grenada, Eastern Caribbean",
      result: "US victory; democratic government restored",
      belligerents: "US and Caribbean coalition vs Grenadian junta and Cuban forces",
      strength: "~7,600 US troops vs ~2,200 defenders",
      casualties: "19 US, 45 Grenadian military, 25 Cuban, 24+ civilians killed",
    },
  },

  "Bougainville Civil War": {
    theater: "Southwest Pacific - **Bougainville Island**, **Papua New Guinea**, and the **Panguna mine** region",
    summary: "The **Bougainville Civil War (1988-1998)** was a secessionist conflict on the island of **Bougainville** against the government of **Papua New Guinea**, triggered by environmental destruction and revenue disputes around the **Panguna copper mine** - one of the world's largest. The **Bougainville Revolutionary Army** under **Francis Ona** shut down the mine and fought for independence, while PNG forces and local resistance militias fought back with considerable brutality. A naval blockade caused a humanitarian crisis. After failed peace attempts and a mercenary scandal (the **Sandline Affair**), a ceasefire and eventual autonomy agreement led to a 2019 independence referendum where **97.7%** voted for independence. It was a war started by a mine and ended by a ballot - which is the order those things should happen in.",
    background: [
      "The **Panguna mine**, operated by **Bougainville Copper Limited** (a Rio Tinto subsidiary), generated massive revenue for PNG but devastated local land and waterways.",
      "Bougainvilleans received minimal compensation while bearing all environmental costs, creating deep resentment.",
      "Ethnic and cultural differences between Bougainville and mainland PNG reinforced separatist sentiment.",
      "Militant landowners began sabotaging the mine in **1988**, escalating into full armed conflict by 1989.",
    ],
    participants: [
      { name: "Bougainville Revolutionary Army (BRA)", role: "Secessionist force fighting for independence from PNG, initially focused on mine shutdown.", side: "belligerent" },
      { name: "Papua New Guinea Defence Force", role: "Government military attempting to suppress secession and restore control over Bougainville.", side: "belligerent" },
      { name: "Resistance Forces", role: "Pro-PNG Bougainvillean militias opposing the BRA, often armed by the government.", side: "belligerent" },
      { name: "New Zealand / Australia / regional mediators", role: "Facilitated peace negotiations and provided the Truce Monitoring Group and Peace Monitoring Group.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "1988-1989", title: "Mine sabotage to war", detail: "Landowner militancy escalates; Panguna mine closes permanently; PNG declares state of emergency." },
      { period: "1990-1994", title: "Blockade and brutality", detail: "PNG imposes naval blockade; humanitarian crisis; both sides commit atrocities against civilians." },
      { period: "1997", title: "Sandline Affair", detail: "PNG government hires mercenaries from **Sandline International**; military mutiny forces their expulsion and collapses the government." },
      { period: "1998-2001", title: "Peace process", detail: "Ceasefire, Lincoln Agreement, and Bougainville Peace Agreement establish autonomy framework and future referendum." },
    ],
    outcome: "Ceasefire and autonomy agreement; 2019 referendum produced 97.7% vote for independence; final political status still under negotiation with PNG.",
    casualties: {
      military: "Military casualties numbered in the hundreds on both sides across a decade of fighting.",
      civilian: "Estimated **15,000-20,000** deaths, mostly civilians, primarily from the blockade's denial of medicine and supplies.",
      displacement: "Tens of thousands displaced into care centers or fled to neighboring Solomon Islands.",
      note: "The naval blockade killed far more people than the actual fighting - a pattern that rarely makes headlines but defines the war's human cost.",
    },
    orderOfBattle: [
      { name: "BRA guerrilla forces", strength: "Several thousand fighters with captured weapons, homemade firearms, and improvised equipment", note: "Jungle terrain and local support compensated for massive material disadvantage." },
      { name: "PNGDF and Resistance", strength: "Regular military with helicopter support plus local pro-government militias", note: "Superior firepower offset by difficult terrain, poor logistics, and low morale." },
    ],
    aftermath: [
      "The **Panguna mine** remains closed decades later - a $58 billion copper deposit sitting untouched in the jungle.",
      "The **Sandline Affair** triggered a constitutional crisis in PNG and became a cautionary tale about private military companies.",
      "Bougainville's 2019 independence vote was overwhelming but non-binding; negotiations with PNG continue.",
      "The conflict demonstrated how resource extraction grievances can fuel full-scale secessionist wars in post-colonial states.",
    ],
    maps: {
      title: "Bougainville conflict zone",
      description: "One island, one mine, one decade of war, one overwhelming referendum.",
      points: [
        { name: "Panguna mine", x: 52, y: 48, year: "1988-1989", note: "The copper mine whose environmental destruction and revenue inequity sparked the entire conflict." },
        { name: "Arawa", x: 54, y: 50, year: "1990s", note: "Provincial capital and administrative center; contested throughout the war." },
        { name: "Buka", x: 52, y: 40, year: "1990s", note: "Northern Bougainville; site of PNG military operations and later peace negotiations." },
      ],
    },
    technology: [
      { name: "Naval blockade", type: "Economic warfare", side: "PNG", impact: "Denied medicine, fuel, and supplies to Bougainville; caused the majority of civilian deaths." },
      { name: "Improvised weapons", type: "Guerrilla innovation", side: "BRA", impact: "Homemade firearms and coconut-shell grenades sustained resistance despite total arms embargo." },
      { name: "Sandline mercenary contract", type: "Private military", side: "PNG", impact: "Hired mercenaries with helicopter gunships; military mutiny expelled them before deployment." },
    ],
    centralFigures: [
      {
        name: "Francis Ona",
        role: "BRA leader and self-declared King of Bougainville",
        side: "belligerent",
        importance: 85,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the mine sabotage campaign and secessionist war; refused to participate in peace negotiations; died in 2005.",
      },
      {
        name: "Sam Kauona",
        role: "BRA military commander",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Directed BRA military operations and later participated in peace negotiations.",
      },
      {
        name: "Joseph Kabui",
        role: "Political leader of Bougainville independence movement",
        side: "belligerent",
        importance: 68,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Became first President of the Autonomous Region of Bougainville after the peace agreement.",
      },
    ],
    infobox: {
      dates: "1988 - 1998",
      location: "Bougainville Island, Papua New Guinea",
      result: "Ceasefire; autonomy agreement; 2019 independence referendum (97.7% yes)",
      belligerents: "BRA vs PNG Defence Force and Resistance militias",
      strength: "Guerrilla force vs conventional military with naval blockade",
      casualties: "15,000-20,000 dead (mostly civilians from blockade)",
    },
  },

  "First Liberian Civil War": {
    theater: "West Africa - **Liberia**, from **Nimba County** borderlands to the capital **Monrovia**",
    summary: "The **First Liberian Civil War (1989-1996)** was a catastrophic multi-faction conflict that destroyed Africa's oldest republic. **Charles Taylor's** National Patriotic Front of Liberia (**NPFL**) invaded from **Cote d'Ivoire** in December 1989 to overthrow President **Samuel Doe**, but the war quickly fragmented into a kaleidoscope of armed factions fighting over territory, resources, and ethnic grievances. **ECOWAS** intervened with the **ECOMOG** peacekeeping force, which became a combatant itself. Doe was captured and tortured to death on camera by **Prince Johnson's** splinter faction. After seven years, fourteen peace agreements, and approximately **200,000** dead, Taylor was elected president in 1997 on the logic that people voted for the man most likely to restart the war if he lost.",
    background: [
      "Liberia's **Americo-Liberian** elite had dominated indigenous populations since the country's founding in 1847.",
      "**Samuel Doe's** 1980 coup ended Americo-Liberian rule but replaced it with ethnic Krahn favoritism and brutal repression.",
      "**Charles Taylor**, a former Doe official who escaped a US prison, organized the NPFL with Libyan and Burkinabe support.",
      "Ethnic tensions between **Gio/Mano** peoples (backing Taylor) and **Krahn/Mandingo** peoples (backing Doe) provided the conflict's combustible fuel.",
    ],
    participants: [
      { name: "NPFL (Charles Taylor)", role: "Primary rebel faction that invaded Liberia and controlled most of the countryside; later became the dominant political force.", side: "belligerent" },
      { name: "Armed Forces of Liberia / Samuel Doe government", role: "Government forces defending the capital; collapsed after Doe's capture and murder.", side: "belligerent" },
      { name: "INPFL (Prince Johnson)", role: "NPFL splinter faction that captured and killed Doe; controlled parts of Monrovia.", side: "belligerent" },
      { name: "ECOMOG (ECOWAS peacekeeping force)", role: "Nigerian-led intervention force that became a de facto combatant defending Monrovia against Taylor.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Dec 1989", title: "NPFL invasion", detail: "Taylor's forces cross from Cote d'Ivoire into Nimba County; rapid advance amid ethnic violence." },
      { period: "1990", title: "Monrovia siege and Doe's death", detail: "NPFL besieges capital; ECOMOG intervenes; Prince Johnson captures and kills Doe on camera." },
      { period: "1990-1995", title: "Factional fragmentation", detail: "War splinters into 7+ factions; multiple failed ceasefires; warlord economies based on diamonds, timber, and rubber." },
      { period: "1996-1997", title: "Abuja Accords and election", detail: "Final peace agreement holds; Taylor wins 1997 election with 75% of the vote." },
    ],
    outcome: "Charles Taylor elected president after seven years of war; peace was fragile and collapsed again in 1999 with the Second Liberian Civil War.",
    casualties: {
      military: "Thousands of combatants killed across all factions; exact figures impossible to disaggregate from civilian deaths.",
      civilian: "Estimated **150,000-200,000** total deaths; massive civilian targeting by all factions including systematic use of child soldiers.",
      displacement: "Over **700,000** refugees fled to neighboring countries; half the population was internally displaced.",
      note: "The war's signature horror was the widespread use of child soldiers, some as young as seven, by virtually every faction.",
    },
    orderOfBattle: [
      { name: "NPFL", strength: "Peak strength ~10,000+ fighters including many child soldiers; controlled most of rural Liberia", note: "Effective at territorial seizure but fragmented repeatedly as commanders broke away." },
      { name: "ECOMOG", strength: "~12,000 troops, primarily Nigerian, with armor, artillery, and air support", note: "Prevented Taylor from capturing Monrovia but could not end the war militarily." },
    ],
    aftermath: [
      "Taylor's presidency proved as destructive as his rebellion; he fueled the **Sierra Leone civil war** and was eventually convicted of war crimes by the **Special Court for Sierra Leone**.",
      "The war created a generation of traumatized child soldiers whose reintegration remains incomplete decades later.",
      "Liberia's infrastructure was almost completely destroyed; recovery took decades of international assistance.",
      "The conflict established patterns of West African regional intervention through **ECOWAS** that continue to shape continental security architecture.",
    ],
    maps: {
      title: "First Liberian Civil War factional zones",
      description: "A country carved into warlord fiefdoms connected by violence and resource extraction.",
      points: [
        { name: "Nimba County", x: 54, y: 44, year: "1989", note: "NPFL invasion launch point and site of initial ethnic massacres." },
        { name: "Monrovia", x: 42, y: 50, year: "1990-1996", note: "Capital besieged repeatedly; defended by ECOMOG; site of Doe's murder." },
        { name: "Gbarnga", x: 50, y: 48, year: "1990-1996", note: "Taylor's NPFL capital and administrative center in the interior." },
      ],
    },
    technology: [
      { name: "Child soldier recruitment", type: "Manpower strategy", side: "All factions", impact: "Drugged and brutalized children became a primary combat resource across all armed groups." },
      { name: "Warlord resource extraction", type: "War economy", side: "All factions", impact: "Diamonds, timber, and rubber funded continued fighting independent of any political objective." },
      { name: "ECOMOG conventional intervention", type: "Regional peacekeeping", side: "ECOWAS", impact: "Nigerian-led force with armor and air power prevented complete state collapse but could not impose peace." },
    ],
    centralFigures: [
      {
        name: "Charles Taylor",
        role: "NPFL leader, later President of Liberia",
        side: "belligerent",
        importance: 95,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Launched the war, won the peace, destabilized the region, and ended up convicted of war crimes at The Hague.",
      },
      {
        name: "Samuel Doe",
        role: "President of Liberia",
        side: "belligerent",
        importance: 80,
        portrait: "/portraits/placeholder-figure.svg",
        note: "His brutal rule created the conditions for war; his filmed torture and murder became the conflict's most infamous image.",
      },
      {
        name: "Prince Johnson",
        role: "INPFL faction leader",
        side: "belligerent",
        importance: 70,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Captured and killed Doe while drinking beer on camera; later became a Liberian senator.",
      },
    ],
    infobox: {
      dates: "1989 - 1996",
      location: "Liberia, West Africa",
      result: "Taylor elected president 1997; fragile peace",
      belligerents: "NPFL and splinter factions vs government forces and ECOMOG",
      strength: "Multiple militia factions vs Nigerian-led peacekeeping force",
      casualties: "~200,000 dead; 700,000+ refugees",
    },
  },
`;

// Insert before the closing '};'
content = content.replace(/\n};(\s*)$/, '\n' + dossiers + '\n};$1');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Batch 1 (5 dossiers) added successfully.');
