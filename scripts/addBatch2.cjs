const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'featuredWars.js');
let content = fs.readFileSync(filePath, 'utf8');

const dossiers = `
  "Kashmir Insurgency": {
    theater: "South Asia - **Indian-administered Kashmir**, the **Line of Control**, and cross-border infiltration corridors into **Pakistan-administered Kashmir**",
    summary: "The **Kashmir Insurgency (1989-present)** erupted when decades of political frustration in the **Kashmir Valley** boiled over into armed revolt against Indian rule. What began as a largely indigenous uprising was progressively shaped by **Pakistani** support for militant groups and the arrival of foreign jihadist fighters. India responded with massive military deployment, emergency laws like the **Armed Forces Special Powers Act**, and a counterinsurgency apparatus that became one of the world's most sustained. The conflict has killed tens of thousands, displaced hundreds of thousands of **Kashmiri Pandits**, and turned the valley into one of the most militarized places on earth. Every few years someone announces a peace process, and every few years the valley reminds everyone that announcements are not the same as outcomes.",
    background: [
      "Kashmir's accession to India in **1947** was contested from day one; Pakistan claimed the Muslim-majority territory and fought wars over it in **1947, 1965**, and **1999**.",
      "Rigged elections, particularly the **1987 state assembly election**, destroyed faith in democratic processes and radicalized a generation.",
      "The **JKLF** (Jammu and Kashmir Liberation Front) launched the initial armed uprising in 1989, seeking independence rather than merger with Pakistan.",
      "Pakistan's **ISI** gradually redirected the insurgency toward pro-Pakistan groups like **Hizbul Mujahideen** and later facilitated foreign jihadist organizations.",
    ],
    participants: [
      { name: "Indian security forces", role: "Army, paramilitary (CRPF, BSF), and police conducting sustained counterinsurgency operations under emergency legislation.", side: "belligerent" },
      { name: "Kashmiri militant groups", role: "Indigenous and Pakistan-backed armed organizations including JKLF, Hizbul Mujahideen, Lashkar-e-Taiba, and Jaish-e-Mohammed.", side: "belligerent" },
      { name: "Pakistan / ISI", role: "Provided training, arms, funding, and sanctuary to militant groups; denied direct involvement while maintaining infrastructure.", side: "belligerent" },
      { name: "Kashmiri civilian population", role: "Caught between security forces and militants; subjected to violence, surveillance, and restrictions from all sides.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "1989-1990", title: "Uprising erupts", detail: "Mass protests and armed attacks; JKLF kidnaps Indian official's daughter; Pandit exodus begins; India deploys massive forces." },
      { period: "1990s", title: "Peak violence", detail: "Foreign fighters arrive; multiple militant factions compete; Indian counterinsurgency intensifies with cordon-and-search operations." },
      { period: "2000s", title: "Diplomatic thaw attempts", detail: "Ceasefire along LoC (2003); back-channel negotiations; violence decreases but does not end." },
      { period: "2010s-present", title: "New generation unrest", detail: "Mass protests after militant killings (notably **Burhan Wani**, 2016); India revokes **Article 370** (2019); communication blackouts and political detentions." },
    ],
    outcome: "No political resolution. India maintains security control; Pakistan maintains support infrastructure; violence continues at reduced but persistent levels; Article 370 revocation reshaped the legal framework without resolving the underlying dispute.",
    casualties: {
      military: "Thousands of Indian security personnel killed over three decades of continuous deployment.",
      civilian: "Estimated **50,000-100,000** total deaths including militants, security forces, and civilians; figures are politically contested.",
      displacement: "**150,000-300,000 Kashmiri Pandits** (Hindu minority) fled the valley in 1990; most have never returned. Ongoing displacement of Muslim Kashmiris from conflict zones.",
      note: "The human rights cost includes not just deaths but decades of enforced disappearances, mass graves, and psychological trauma across the valley.",
    },
    orderOfBattle: [
      { name: "Indian security apparatus", strength: "500,000-700,000 troops including Army, CRPF, BSF, and state police", note: "One of the highest troop-to-civilian ratios of any conflict zone in the world." },
      { name: "Militant organizations", strength: "Peak strength of 10,000+ in the 1990s; reduced to hundreds of active fighters by 2020s", note: "Shifted from large formations to small cells; recruitment now largely local after foreign fighter pipeline narrowed." },
    ],
    aftermath: [
      "India's **2019 revocation of Article 370** eliminated Kashmir's special constitutional status and split the state into two union territories.",
      "The conflict created a massive Indian security-industrial complex in Kashmir that has its own institutional momentum.",
      "Pakistan's support for militancy became a central issue in India-Pakistan relations and global counterterrorism frameworks.",
      "A generation of Kashmiris has grown up knowing nothing but conflict, checkpoints, and internet shutdowns.",
    ],
    maps: {
      title: "Kashmir insurgency zones",
      description: "The most militarized real estate on earth, measured in checkpoints per kilometer.",
      points: [
        { name: "Srinagar", x: 52, y: 40, year: "1989-present", note: "Valley capital and epicenter of protests, crackdowns, and political contestation." },
        { name: "Line of Control", x: 50, y: 38, year: "1989-present", note: "De facto border; infiltration corridor and site of continuous military confrontation." },
        { name: "Pulwama", x: 52, y: 42, year: "2019", note: "Site of devastating suicide bombing that killed 40 CRPF personnel and triggered India-Pakistan air strikes." },
      ],
    },
    technology: [
      { name: "AFSPA (Armed Forces Special Powers Act)", type: "Legal framework", side: "India", impact: "Grants military broad powers including shoot-to-kill authority; central to human rights criticism of Indian operations." },
      { name: "Cross-border infiltration networks", type: "Irregular warfare logistics", side: "Pakistan-backed groups", impact: "Training camps and tunnel/mountain routes sustained militant manpower for decades." },
      { name: "Internet shutdowns", type: "Information control", side: "India", impact: "Kashmir has experienced the longest internet blackouts of any democracy, used to suppress coordination and communication." },
    ],
    centralFigures: [
      {
        name: "Burhan Wani",
        role: "Hizbul Mujahideen commander",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "His 2016 killing sparked massive protests and a new phase of Kashmiri youth radicalization via social media.",
      },
      {
        name: "Narendra Modi",
        role: "Indian Prime Minister",
        side: "belligerent",
        importance: 88,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Narendra_Modi_2021.jpg",
        note: "Revoked Article 370 in 2019, fundamentally altering Kashmir's constitutional relationship with India.",
      },
      {
        name: "Yasin Malik",
        role: "JKLF leader",
        side: "belligerent",
        importance: 70,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the early independence-focused insurgency; later renounced violence; convicted of terrorism charges in 2022.",
      },
    ],
    infobox: {
      dates: "1989 - present",
      location: "Indian-administered Kashmir",
      result: "Ongoing insurgency; no political resolution",
      belligerents: "Indian security forces vs Kashmiri and Pakistan-backed militant groups",
      strength: "500,000+ Indian troops vs hundreds of active militants",
      casualties: "50,000-100,000+ total dead over three decades",
    },
  },

  "Algerian Civil War": {
    theater: "North Africa - **Algeria**, from the **Mitidja Plain** south of Algiers to the **Kabylie** mountains and Saharan fringes",
    summary: "The **Algerian Civil War (1991-2002)** was triggered when the military cancelled elections that the **Islamic Salvation Front (FIS)** was poised to win, plunging the country into a decade of extraordinary violence. The **Armed Islamic Group (GIA)** and later the **Salafist Group for Preaching and Combat (GSPC)** waged an insurgency marked by massacres of entire villages, car bombings, and assassinations. The Algerian military responded with equally brutal counterinsurgency, including death squads, torture, and alleged false-flag operations. The conflict killed an estimated **100,000-200,000** people, with some of the worst massacres - like **Bentalha** and **Rais** in 1997 - still debated over who actually committed them. It was a war where the question 'who killed whom?' became as dangerous as the killing itself.",
    background: [
      "Algeria's single-party **FLN** state faced economic crisis and youth unemployment in the late 1980s, triggering the **1988 October riots**.",
      "Political liberalization allowed the **FIS** to organize; it won municipal elections in 1990 and was leading the first round of parliamentary elections in December 1991.",
      "The military cancelled the second round in January **1992** and banned the FIS, arresting thousands of its members.",
      "Radicalized Islamist factions took up arms; the GIA adopted a strategy of total war against the state and anyone perceived as supporting it.",
    ],
    participants: [
      { name: "Algerian military and security services", role: "Conducted counterinsurgency operations, ran internment camps, and allegedly operated death squads and infiltration programs.", side: "belligerent" },
      { name: "Armed Islamic Group (GIA)", role: "Most radical insurgent faction; responsible for mass civilian massacres, bombings, and airline hijacking.", side: "belligerent" },
      { name: "Islamic Salvation Army (AIS)", role: "FIS-linked armed wing; more selective in targeting; declared ceasefire in 1997.", side: "belligerent" },
      { name: "GSPC (later AQIM)", role: "GIA splinter that rejected indiscriminate civilian targeting; later affiliated with al-Qaeda.", side: "belligerent" },
    ],
    timeline: [
      { period: "Jan 1992", title: "Coup and cancellation", detail: "Military cancels elections; FIS banned; President Boudiaf assassinated months later." },
      { period: "1992-1996", title: "Escalating insurgency", detail: "GIA campaign of bombings, assassinations, and kidnappings; military counterinsurgency intensifies." },
      { period: "1997-1998", title: "Massacre years", detail: "GIA commits mass killings at **Bentalha**, **Rais**, and other villages; military's role in some massacres remains disputed." },
      { period: "1999-2002", title: "Civil Concord and decline", detail: "President **Bouteflika** offers amnesty; AIS disbands; violence decreases sharply though GSPC continues operations." },
    ],
    outcome: "Military victory by attrition and amnesty; insurgency degraded but not eliminated; GSPC evolved into AQIM and continued operations in the Sahel.",
    casualties: {
      military: "Thousands of security force members killed in ambushes, bombings, and assassinations.",
      civilian: "Estimated **100,000-200,000** total dead; civilians bore the overwhelming majority of casualties from both insurgent massacres and state violence.",
      displacement: "Over **1 million** internally displaced, particularly from rural areas targeted by GIA massacres.",
      note: "The 'who did what' question remains Algeria's most sensitive political issue; the 2005 Charter for Peace and National Reconciliation effectively banned further investigation.",
    },
    orderOfBattle: [
      { name: "Algerian National Army and security services", strength: "Large conventional force with extensive intelligence apparatus and paramilitary units", note: "Counterinsurgency combined conventional operations with infiltration, turning militants, and alleged false-flag tactics." },
      { name: "GIA and affiliated groups", strength: "Peak strength estimated at 10,000-25,000 fighters across multiple regional commands", note: "Fragmented repeatedly; extreme violence against civilians eventually alienated popular support." },
    ],
    aftermath: [
      "Algeria's **Charter for Peace and National Reconciliation** (2005) granted amnesty to most combatants while prohibiting public discussion of state responsibility.",
      "The GSPC rebranded as **Al-Qaeda in the Islamic Maghreb (AQIM)** and exported violence across the Sahel.",
      "The war entrenched military dominance over Algerian politics that persisted until the **2019 Hirak protest movement**.",
      "An entire generation's trauma remains largely unprocessed due to official suppression of memory and accountability.",
    ],
    maps: {
      title: "Algerian Civil War zones",
      description: "From the Mitidja killing fields to the mountain maquis and the Saharan fringe.",
      points: [
        { name: "Algiers / Mitidja Plain", x: 50, y: 40, year: "1992-1998", note: "Capital region and surrounding plain; epicenter of bombings and nearby village massacres." },
        { name: "Bentalha", x: 50, y: 42, year: "1997", note: "Site of massacre killing 200-400 civilians; military's failure to intervene remains deeply controversial." },
        { name: "Kabylie mountains", x: 52, y: 40, year: "1990s-2000s", note: "GIA and GSPC sanctuary terrain; site of prolonged counterinsurgency operations." },
      ],
    },
    technology: [
      { name: "Village massacre tactics", type: "Terror warfare", side: "GIA", impact: "Mass killings of entire communities designed to punish perceived collaboration and spread terror." },
      { name: "Infiltration and retournement", type: "Intelligence warfare", side: "Algerian security services", impact: "Turning captured militants into agents created a hall-of-mirrors environment where attribution became impossible." },
      { name: "Amnesty as counterinsurgency", type: "Political warfare", side: "Algerian state", impact: "Civil Concord and later Charter offered fighters a way out, draining insurgent manpower more effectively than military operations alone." },
    ],
    centralFigures: [
      {
        name: "Abdelaziz Bouteflika",
        role: "President of Algeria (1999-2019)",
        side: "belligerent",
        importance: 82,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Bouteflika_%28Algerian_President%29.jpg",
        note: "His Civil Concord amnesty program was the primary political tool that ended large-scale fighting.",
      },
      {
        name: "Antar Zouabri",
        role: "GIA emir (1996-2002)",
        side: "belligerent",
        importance: 75,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Under his leadership the GIA committed its worst massacres and declared virtually all Algerian society legitimate targets.",
      },
      {
        name: "Khaled Nezzar",
        role: "Algerian Defense Minister",
        side: "belligerent",
        importance: 70,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Key figure in the military decision to cancel elections and prosecute the counterinsurgency campaign.",
      },
    ],
    infobox: {
      dates: "1991 - 2002",
      location: "Algeria",
      result: "Military victory by attrition and amnesty; GSPC evolved into AQIM",
      belligerents: "Algerian military vs GIA, AIS, GSPC, and affiliated groups",
      strength: "Large state security apparatus vs fragmented insurgent factions",
      casualties: "100,000-200,000 dead; 1 million+ displaced",
    },
  },

  "Georgian Civil War": {
    theater: "South Caucasus - **Tbilisi**, western **Georgia**, and the **Abkhazia/South Ossetia** borderlands",
    summary: "The **Georgian Civil War (1991-1993)** was the violent collapse of post-Soviet Georgia into overlapping conflicts: a coup against President **Zviad Gamsakhurdia**, secessionist wars in **Abkhazia** and **South Ossetia**, and factional fighting between warlord militias. Gamsakhurdia, Georgia's first elected president, was overthrown in a January 1992 coup by the **Mkhedrioni** militia and **National Guard** factions, replaced by **Eduard Shevardnadze**. Gamsakhurdia's supporters fought on in western Georgia while the Abkhaz and South Ossetian conflicts escalated simultaneously. Russia played all sides. By 1993, Georgia had lost control of two territories, suffered a humanitarian catastrophe, and learned that independence without institutional capacity is just a flag over chaos.",
    background: [
      "Georgia declared independence from the Soviet Union in **1991** under nationalist president **Zviad Gamsakhurdia**.",
      "Gamsakhurdia's authoritarian tendencies and ethnic nationalism alienated minorities and political opponents.",
      "The **Mkhedrioni** paramilitary under **Jaba Ioseliani** and National Guard under **Tengiz Kitovani** launched a coup in December 1991-January 1992.",
      "**Eduard Shevardnadze**, former Soviet Foreign Minister, was invited back to lead Georgia amid the power vacuum.",
    ],
    participants: [
      { name: "Gamsakhurdia loyalists (Zviadists)", role: "Supporters of the deposed president fighting to restore his government, primarily in western Georgia.", side: "belligerent" },
      { name: "Mkhedrioni and National Guard", role: "Paramilitary factions that executed the coup and became the de facto military power behind Shevardnadze.", side: "belligerent" },
      { name: "Eduard Shevardnadze's government", role: "Attempted to consolidate state authority while fighting on multiple fronts simultaneously.", side: "belligerent" },
      { name: "Russia", role: "Provided covert and overt support to various factions and secessionist movements to maintain leverage over Georgia.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Dec 1991 - Jan 1992", title: "Tbilisi coup", detail: "Mkhedrioni and National Guard forces battle Gamsakhurdia loyalists in central Tbilisi; president flees." },
      { period: "1992", title: "Multi-front chaos", detail: "Zviadist resistance in western Georgia; South Ossetia conflict; Abkhazia war begins in August." },
      { period: "1993", title: "Abkhaz offensive and collapse", detail: "Abkhaz forces retake Sukhumi; 250,000 Georgians ethnically cleansed; Gamsakhurdia launches failed comeback." },
      { period: "Late 1993", title: "Russian-brokered stabilization", detail: "Georgia joins CIS in exchange for Russian help against Zviadists; Gamsakhurdia dies in unclear circumstances." },
    ],
    outcome: "Shevardnadze consolidated power but Georgia lost Abkhazia and South Ossetia; the country was left devastated, dependent on Russia, and haunted by unresolved territorial disputes.",
    casualties: {
      military: "Thousands of combatants killed across all fronts including the Tbilisi coup, western Georgia fighting, and Abkhazia war.",
      civilian: "Thousands of civilians killed; the Abkhazia conflict alone produced massive civilian casualties.",
      displacement: "**250,000+** ethnic Georgians expelled from Abkhazia in one of the largest ethnic cleansing events of the 1990s.",
      note: "The overlapping nature of civil war, coup, and secessionist conflicts makes disaggregating casualties extremely difficult.",
    },
    orderOfBattle: [
      { name: "Georgian government forces", strength: "Poorly organized mix of National Guard, Mkhedrioni militia, and volunteer units", note: "Lack of professional military structure was a primary reason for defeats on every front." },
      { name: "Zviadist forces", strength: "Loyalist militias in western Georgia with some popular support in Mingrelia", note: "Capable of disruption but unable to retake Tbilisi or sustain conventional operations." },
    ],
    aftermath: [
      "Georgia's military humiliation drove eventual security sector reform and Western orientation under **Mikheil Saakashvili** after the 2003 Rose Revolution.",
      "The loss of **Abkhazia** and **South Ossetia** became frozen conflicts that Russia exploited through the 2008 war and beyond.",
      "The Mkhedrioni were eventually disbanded and Ioseliani imprisoned, but warlord politics left deep institutional scars.",
      "Shevardnadze's dependence on Russia for survival in 1993 shaped Georgian foreign policy constraints for a decade.",
    ],
    maps: {
      title: "Georgian Civil War zones 1991-1993",
      description: "A new country fighting itself on every front simultaneously.",
      points: [
        { name: "Tbilisi", x: 54, y: 46, year: "1991-1992", note: "Site of the coup against Gamsakhurdia; street fighting in the capital." },
        { name: "Sukhumi", x: 48, y: 42, year: "1993", note: "Abkhaz capital; fell to separatist forces triggering mass ethnic cleansing of Georgians." },
        { name: "Western Georgia (Mingrelia)", x: 46, y: 46, year: "1992-1993", note: "Zviadist stronghold and site of continued resistance to the Tbilisi government." },
      ],
    },
    technology: [
      { name: "Paramilitary coup mechanics", type: "Political violence", side: "Mkhedrioni/National Guard", impact: "Armed factions replaced democratic transition with warlord politics." },
      { name: "Russian covert intervention", type: "Proxy manipulation", side: "Russia", impact: "Support to multiple sides ensured Georgian dependence and territorial fragmentation." },
      { name: "Ethnic cleansing operations", type: "Population warfare", side: "Abkhaz forces", impact: "Mass expulsion of 250,000 Georgians created a permanent demographic and political wound." },
    ],
    centralFigures: [
      {
        name: "Zviad Gamsakhurdia",
        role: "First President of Georgia",
        side: "belligerent",
        importance: 82,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Elected democratically, overthrown violently, died in exile under mysterious circumstances in 1993.",
      },
      {
        name: "Eduard Shevardnadze",
        role: "Head of State of Georgia (1992-2003)",
        side: "belligerent",
        importance: 85,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Eduard_Shevardnadze.jpg",
        note: "Former Soviet Foreign Minister brought in to stabilize Georgia; presided over territorial losses and eventual democratic transition.",
      },
      {
        name: "Jaba Ioseliani",
        role: "Mkhedrioni paramilitary leader",
        side: "belligerent",
        importance: 68,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Bank robber turned warlord turned kingmaker; his militia was central to the coup and early post-Soviet Georgian politics.",
      },
    ],
    infobox: {
      dates: "1991 - 1993",
      location: "Georgia (South Caucasus)",
      result: "Shevardnadze consolidation; loss of Abkhazia and South Ossetia",
      belligerents: "Government factions vs Zviadists vs secessionist movements",
      strength: "Fragmented militias on all sides; no professional military",
      casualties: "Thousands killed; 250,000+ displaced from Abkhazia",
    },
  },

  "War in Abkhazia": {
    theater: "Western South Caucasus - **Abkhazia**, from **Sukhumi** to the **Gali district** and the **Kodori Valley**",
    summary: "The **War in Abkhazia (1992-1993)** was a secessionist conflict in which **Abkhaz** forces, backed by **Russian** military support and **North Caucasian** volunteers, defeated **Georgian** government troops and expelled the ethnic Georgian majority from the territory. Georgia sent forces into Abkhazia in August 1992 ostensibly to secure railways and rescue hostages; the operation quickly became a full-scale war. After months of fighting, Abkhaz forces launched a decisive offensive in September 1993, capturing **Sukhumi** and triggering the ethnic cleansing of **250,000** Georgians. Russia brokered a ceasefire that froze the conflict for fifteen years until the **2008 Russo-Georgian War** formalized the separation. It was a war where the 'peacekeepers' had a very specific idea about which piece they wanted to keep.",
    background: [
      "Abkhazia was an autonomous republic within Soviet Georgia; ethnic Abkhaz were a minority (~17%) but held disproportionate political power under Soviet arrangements.",
      "Georgian independence and nationalist rhetoric under **Gamsakhurdia** alarmed Abkhaz leaders who feared cultural and political marginalization.",
      "Abkhaz leader **Vladislav Ardzinba** moved toward separation; Georgia's internal chaos (civil war, coup) created an opening.",
      "Russia maintained military bases in Abkhazia and provided covert support to Abkhaz forces throughout the conflict.",
    ],
    participants: [
      { name: "Georgian government forces", role: "National Guard and volunteer units deployed to reassert control over Abkhazia.", side: "belligerent" },
      { name: "Abkhaz armed forces", role: "Secessionist military fighting for independence from Georgia with Russian backing.", side: "belligerent" },
      { name: "North Caucasian volunteers", role: "Chechen, Circassian, and other fighters who joined the Abkhaz side, including forces under **Shamil Basayev**.", side: "belligerent" },
      { name: "Russia", role: "Provided weapons, air support, and military advisors to Abkhaz forces while officially maintaining neutrality.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Aug 1992", title: "Georgian intervention", detail: "Georgian forces enter Abkhazia, capture Sukhumi, and advance along the coast." },
      { period: "Sep 1992 - Sep 1993", title: "Attritional warfare", detail: "Front lines stabilize; Abkhaz forces receive Russian weapons and North Caucasian reinforcements." },
      { period: "Sep 1993", title: "Abkhaz offensive", detail: "Surprise attack recaptures Sukhumi; Georgian forces collapse; mass ethnic cleansing of Georgian population begins." },
      { period: "Late 1993 - 1994", title: "Ceasefire and frozen conflict", detail: "Russian-brokered ceasefire; CIS peacekeepers (predominantly Russian) deployed along ceasefire line." },
    ],
    outcome: "Abkhaz military victory; de facto independence under Russian protection; 250,000 Georgians expelled; conflict frozen until 2008.",
    casualties: {
      military: "Estimated **4,000-10,000** combatants killed on both sides during thirteen months of fighting.",
      civilian: "Thousands of civilians killed in fighting and ethnic cleansing operations, particularly during the fall of Sukhumi.",
      displacement: "**250,000** ethnic Georgians expelled from Abkhazia - virtually the entire Georgian population of the territory.",
      note: "The ethnic cleansing was systematic and near-total; three decades later, most displaced Georgians have never returned.",
    },
    orderOfBattle: [
      { name: "Georgian forces", strength: "National Guard units, Mkhedrioni militia, and volunteers; poorly coordinated and supplied", note: "Initial numerical advantage squandered by poor command, political infighting, and multi-front commitments." },
      { name: "Abkhaz coalition", strength: "Abkhaz militia, Russian military support, and 2,000-3,000 North Caucasian volunteers", note: "Smaller but better coordinated with decisive Russian material support tipping the balance." },
    ],
    aftermath: [
      "Abkhazia became a Russian-protected de facto state, recognized by Russia after the **2008 war** but by almost no one else.",
      "The displaced Georgian population remains one of the largest unresolved displacement crises in Europe.",
      "**Shamil Basayev**, who fought as an Abkhaz volunteer, later became Russia's most wanted terrorist as leader of the Chechen insurgency - an irony not lost on anyone.",
      "The war established the template for Russian-backed separatism that would later be applied in **Transnistria**, **South Ossetia**, **Crimea**, and **Donbas**.",
    ],
    maps: {
      title: "War in Abkhazia 1992-1993",
      description: "Thirteen months from Georgian advance to Abkhaz victory and mass expulsion.",
      points: [
        { name: "Sukhumi", x: 48, y: 44, year: "1992-1993", note: "Abkhaz capital; captured by Georgia in 1992, retaken by Abkhaz forces in September 1993 decisive offensive." },
        { name: "Gagra", x: 46, y: 42, year: "1992", note: "Coastal town; early Abkhaz victory with Russian support that secured the northwestern corridor." },
        { name: "Gali district", x: 50, y: 46, year: "1993", note: "Southern Abkhazia; site of continued ethnic cleansing and post-war instability." },
      ],
    },
    technology: [
      { name: "Russian covert military support", type: "Proxy warfare", side: "Russia/Abkhazia", impact: "Air strikes, heavy weapons transfers, and military advisors transformed Abkhaz capability." },
      { name: "North Caucasian volunteer networks", type: "Transnational irregular warfare", side: "Abkhazia", impact: "Experienced fighters provided critical combat power during key offensive operations." },
      { name: "Ethnic cleansing operations", type: "Population warfare", side: "Abkhaz forces", impact: "Systematic expulsion created demographic fait accompli that made territorial reversal politically impossible." },
    ],
    centralFigures: [
      {
        name: "Vladislav Ardzinba",
        role: "Leader of Abkhazia",
        side: "belligerent",
        importance: 82,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Soviet-era academic turned wartime leader who guided Abkhazia to de facto independence with Russian backing.",
      },
      {
        name: "Eduard Shevardnadze",
        role: "Georgian Head of State",
        side: "belligerent",
        importance: 80,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Eduard_Shevardnadze.jpg",
        note: "Personally present in Sukhumi during the final siege; barely escaped the city's fall.",
      },
      {
        name: "Shamil Basayev",
        role: "North Caucasian volunteer commander",
        side: "belligerent",
        importance: 72,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Commanded Chechen volunteers in Abkhazia; later became Russia's most wanted man as Chechen insurgent leader.",
      },
    ],
    infobox: {
      dates: "1992 - 1993",
      location: "Abkhazia, Georgia",
      result: "Abkhaz victory; de facto independence; mass ethnic cleansing",
      belligerents: "Georgia vs Abkhaz forces, North Caucasian volunteers, and Russian support",
      strength: "Georgian militia forces vs Russian-backed Abkhaz coalition",
      casualties: "4,000-10,000 combatants; 250,000 Georgians displaced",
    },
  },

  "Tajikistani Civil War": {
    theater: "Central Asia - **Tajikistan**, from the capital **Dushanbe** to the **Garm Valley**, **Gorno-Badakhshan**, and the **Afghan border**",
    summary: "The **Tajikistani Civil War (1992-1997)** was the bloodiest post-Soviet conflict outside the Caucasus, killing **50,000-100,000** people in a country of five million. It pitted the **neo-communist government** backed by **Russia** and **Uzbekistan** against a loose **United Tajik Opposition** coalition of Islamists, democrats, and regional factions. The war was fundamentally about regional clan politics dressed up in ideological clothing: **Kulyabi** and **Leninabadi** factions controlled the government while **Garmi** and **Pamiri** groups were marginalized. After five years of fighting, massacres, and refugee crises, a **1997 peace agreement** created a power-sharing arrangement that was remarkably successful by civil war standards - which is a low bar, but they cleared it.",
    background: [
      "Soviet Tajikistan was governed through a balance of regional clans; independence in **1991** disrupted this arrangement.",
      "President **Rahmon Nabiyev** represented the old Leninabadi/Kulyabi power structure; opposition demanded democratic reform.",
      "Protests in **1992** escalated into armed conflict when government supporters and opposition factions mobilized militias.",
      "The opposition coalition was ideologically diverse: the **Islamic Renaissance Party**, democratic reformers, and Pamiri regionalists united against the ruling clans.",
    ],
    participants: [
      { name: "Government of Tajikistan (Popular Front)", role: "Kulyabi-dominated government forces and allied militias fighting to maintain power.", side: "belligerent" },
      { name: "United Tajik Opposition (UTO)", role: "Coalition of Islamic Renaissance Party, democratic groups, and Pamiri/Garmi regional factions.", side: "belligerent" },
      { name: "Russia / CIS peacekeepers", role: "Backed the government militarily; Russian 201st Division remained deployed throughout the war.", side: "nonBelligerent" },
      { name: "Uzbekistan", role: "Supported the government fearing Islamist spillover into its own territory.", side: "nonBelligerent" },
    ],
    timeline: [
      { period: "Spring 1992", title: "Political crisis", detail: "Mass protests in Dushanbe; coalition government briefly formed then collapses." },
      { period: "Late 1992", title: "Civil war erupts", detail: "Government forces and Kulyabi militias launch offensive; massacres of Garmi and Pamiri populations; opposition retreats to mountains and Afghanistan." },
      { period: "1993-1996", title: "Guerrilla war", detail: "UTO conducts cross-border operations from Afghanistan; government controls cities; Russian troops guard the Afghan border." },
      { period: "1997", title: "Peace agreement", detail: "UN-mediated General Agreement on the Establishment of Peace gives UTO 30% of government positions." },
    ],
    outcome: "Negotiated peace with power-sharing; President **Emomali Rahmon** (originally a Kulyabi faction leader) consolidated power and has ruled ever since.",
    casualties: {
      military: "Thousands of combatants killed on both sides during conventional and guerrilla phases.",
      civilian: "Estimated **50,000-100,000** total dead; civilians suffered massively from massacres, starvation, and displacement.",
      displacement: "Over **1 million** displaced internally and as refugees, primarily to Afghanistan; tens of thousands of Garmi and Pamiri civilians ethnically cleansed.",
      note: "The war's death toll relative to population was among the highest of any 1990s conflict.",
    },
    orderOfBattle: [
      { name: "Government/Popular Front forces", strength: "Kulyabi militias, remnants of Soviet-era military, Russian 201st Division support", note: "Russian military backing was decisive in preventing government collapse." },
      { name: "United Tajik Opposition", strength: "Guerrilla forces operating from Afghan sanctuary with diverse ideological composition", note: "Military capability sustained by cross-border logistics and Afghan warlord alliances." },
    ],
    aftermath: [
      "The **1997 peace agreement** was one of the few successful negotiated endings to a post-Soviet civil war.",
      "President **Rahmon** used the post-war period to systematically eliminate opposition and establish authoritarian rule.",
      "The **Islamic Renaissance Party** was eventually banned in 2015, ending the power-sharing framework.",
      "The war's regional dynamics foreshadowed Central Asian security concerns about Islamist militancy that intensified after 9/11.",
    ],
    maps: {
      title: "Tajikistani Civil War zones",
      description: "Clan geography, mountain sanctuaries, and the Afghan border lifeline.",
      points: [
        { name: "Dushanbe", x: 52, y: 44, year: "1992", note: "Capital; site of initial protests, political crisis, and government consolidation." },
        { name: "Garm Valley", x: 54, y: 42, year: "1992-1997", note: "Opposition heartland and guerrilla base area in the mountains." },
        { name: "Khorog (Gorno-Badakhshan)", x: 56, y: 44, year: "1992-1997", note: "Pamiri regional center; isolated during the war and site of ethnic targeting." },
      ],
    },
    technology: [
      { name: "Clan-based militia mobilization", type: "Social warfare", side: "Both", impact: "Regional identity rather than ideology determined combat alignment for most fighters." },
      { name: "Cross-border sanctuary", type: "Guerrilla logistics", side: "UTO", impact: "Afghan territory provided safe haven and supply routes that sustained opposition military capability." },
      { name: "Russian military guarantee", type: "External intervention", side: "Government", impact: "201st Division presence and border guard deployment prevented government defeat." },
    ],
    centralFigures: [
      {
        name: "Emomali Rahmon",
        role: "President of Tajikistan (1994-present)",
        side: "belligerent",
        importance: 88,
        portrait: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Emomali_Rahmon_2022.jpg",
        note: "Rose from collective farm chairman to wartime leader to authoritarian president; has ruled for three decades.",
      },
      {
        name: "Said Abdullo Nuri",
        role: "UTO leader / Islamic Renaissance Party chairman",
        side: "belligerent",
        importance: 78,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Led the opposition coalition and negotiated the 1997 peace agreement; died in 2006.",
      },
      {
        name: "Sangak Safarov",
        role: "Kulyabi militia commander",
        side: "belligerent",
        importance: 70,
        portrait: "/portraits/placeholder-figure.svg",
        note: "Criminal-turned-warlord who led the most effective pro-government militia; killed in 1993 under disputed circumstances.",
      },
    ],
    infobox: {
      dates: "1992 - 1997",
      location: "Tajikistan, Central Asia",
      result: "Negotiated peace; power-sharing agreement; Rahmon consolidation",
      belligerents: "Government/Popular Front vs United Tajik Opposition",
      strength: "Russian-backed government forces vs guerrilla opposition with Afghan sanctuary",
      casualties: "50,000-100,000 dead; 1 million+ displaced",
    },
  },
`;

content = content.replace(/\n};(\s*)$/, '\n' + dossiers + '\n};$1');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Batch 2 (5 dossiers) added successfully.');
