import { featuredWarsByName } from "../data/featuredWars";

const PLACEHOLDER_PORTRAIT = "/portraits/placeholder-figure.svg";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const sanitizeSide = (side) => {
  if (side === "belligerent" || side === "nonBelligerent" || side === "debated") {
    return side;
  }
  return "debated";
};

const parseYearWindow = (years) => {
  const values = years.match(/\d{4}/g)?.map(Number) || [];
  if (values.length === 0) {
    return { start: null, end: null };
  }

  const start = values[0];
  const end = values.length > 1 ? values[values.length - 1] : start;
  return { start, end };
};

const eraTechnology = (startYear) => {
  if (!startYear) {
    return [
      {
        name: "Command and control systems",
        type: "Operational",
        side: "Multiple",
        impact: "Coordination and command capacity heavily influenced campaign tempo and cohesion.",
      },
      {
        name: "Infantry weapons",
        type: "Ground combat",
        side: "Multiple",
        impact: "Infantry weapon quality and doctrine shaped tactical effectiveness across fronts.",
      },
      {
        name: "Logistics and mobility",
        type: "Sustainment",
        side: "Multiple",
        impact: "Movement corridors and sustainment capacity often determined strategic endurance.",
      },
    ];
  }

  if (startYear < 1919) {
    return [
      {
        name: "Mass artillery",
        type: "Industrial firepower",
        side: "Multiple",
        impact: "High-volume fires often determined casualty patterns and stalemate dynamics.",
      },
      {
        name: "Rail mobilization",
        type: "Operational movement",
        side: "Multiple",
        impact: "Railway logistics shaped force concentration and campaign speed.",
      },
      {
        name: "Early mechanization",
        type: "Transitional systems",
        side: "Multiple",
        impact: "Mechanized experimentation began changing battlefield doctrine.",
      },
    ];
  }

  if (startYear < 1946) {
    return [
      {
        name: "Mechanized armor",
        type: "Maneuver warfare",
        side: "Multiple",
        impact: "Fast armored formations altered operational depth and breakthrough methods.",
      },
      {
        name: "Airpower integration",
        type: "Air-ground operations",
        side: "Multiple",
        impact: "Close support and bombing campaigns reshaped strategic planning.",
      },
      {
        name: "Signals intelligence",
        type: "Information warfare",
        side: "Multiple",
        impact: "Cryptography and interception influenced campaign decisions.",
      },
    ];
  }

  if (startYear < 1992) {
    return [
      {
        name: "Guided munitions",
        type: "Precision strike",
        side: "Multiple",
        impact: "Improved target accuracy and strategic strike options.",
      },
      {
        name: "Helicopter mobility",
        type: "Air-mobile operations",
        side: "Multiple",
        impact: "Enabled rapid tactical movement and casualty evacuation.",
      },
      {
        name: "Integrated air defense",
        type: "Air denial",
        side: "Multiple",
        impact: "Forced adaptation in air campaign planning and survivability.",
      },
    ];
  }

  return [
    {
      name: "Uncrewed systems",
      type: "ISR and strike",
      side: "Multiple",
      impact: "Compressed target detection-to-engagement cycles.",
    },
    {
      name: "Networked fires",
      type: "Precision artillery",
      side: "Multiple",
      impact: "Data-linked fires improved responsiveness and battlefield reach.",
    },
    {
      name: "Electronic warfare",
      type: "Spectrum control",
      side: "Multiple",
      impact: "Disrupted communications, navigation, and unmanned platforms.",
    },
  ];
};

const fallbackProfile = (entry) => {
  const { start, end } = parseYearWindow(entry.years);
  const endYear = end || start || "present";

  return {
    theater: "Regional theater",
    summary: `${entry.name} was an armed conflict active in ${entry.years}. This entry is presented as a structured high-level overview while deeper archival detail is added. Even in summary form, the conflict can be read through its causes, participants, turning points, and long-term political consequences.`,
    background: [
      "Long-term pressures included political, territorial, or social tensions that accumulated over time.",
      "A catalytic trigger transformed chronic instability into sustained armed conflict.",
      "Regional and international alignment patterns shaped escalation and diplomatic options.",
      "Domestic governance and legitimacy struggles influenced mobilization and war aims.",
    ],
    participants: [
      { name: "Principal belligerent", role: "Primary warfighting actor", side: "belligerent" },
      { name: "Opposing belligerent", role: "Countervailing military actor", side: "belligerent" },
      { name: "External supporter or mediator", role: "Intervention, backing, or diplomacy", side: "nonBelligerent" },
      { name: "Contested participant", role: "Role or attribution varies across sources", side: "debated" },
    ],
    timeline: [
      {
        period: start ? `${start}` : "Opening phase",
        title: "Outbreak",
        detail: "Initial mobilization and first engagements established the conflict's strategic direction.",
      },
      {
        period: start && end ? `${start + 1}-${Math.min(start + 3, endYear)}` : "Escalation",
        title: "Escalation",
        detail: "Campaign expansion, coalition shifts, or widening fronts increased intensity.",
      },
      {
        period: start && end ? `${Math.max(start + 2, end - 2)}-${endYear}` : "Turning points",
        title: "Turning points",
        detail: "Operational and political turning points altered momentum and bargaining power.",
      },
      {
        period: `${endYear}`,
        title: "End state / current phase",
        detail: "Conflict termination, freeze, or transformation into a new security phase.",
      },
    ],
    outcome: "Outcome remains summarized at high level pending deeper conflict-specific sourcing.",
    casualties: {
      military: "Military losses are variably reported across available references.",
      civilian: "Civilian impact is significant but estimate bands vary by methodology.",
      displacement: "Population displacement likely included refugees and internally displaced groups.",
      note: "Numbers differ across datasets; ranges should be interpreted as provisional.",
    },
    orderOfBattle: [
      { name: "Belligerent A", strength: "Strength estimates vary", note: "Force size and readiness differed by campaign phase." },
      { name: "Belligerent B", strength: "Strength estimates vary", note: "Composition and command effectiveness shifted over time." },
    ],
    aftermath: [
      "Conflict outcomes influenced institutions, security alignments, and regional diplomacy.",
      "Humanitarian and reconstruction burdens persisted beyond active hostilities.",
      "Legacy dynamics continue to shape contemporary political narratives.",
    ],
    maps: {
      title: "Campaign map",
      description: "Illustrative theater markers for major operational phases.",
      points: [
        { name: "Opening front", x: 28, y: 34, year: entry.years, note: "Initial axis of combat and early campaign posture." },
        { name: "Major turning point", x: 51, y: 48, year: entry.years, note: "Representative phase where strategic momentum shifted." },
        { name: "End-state node", x: 73, y: 37, year: entry.years, note: "Area associated with settlement, collapse, or post-war transition." },
      ],
    },
    technology: eraTechnology(start),
    centralFigures: [
      {
        name: "Principal leader",
        role: "Belligerent political-military leadership",
        side: "belligerent",
        importance: 88,
        portrait: PLACEHOLDER_PORTRAIT,
        note: "Leadership profile pending conflict-specific figure enrichment.",
      },
      {
        name: "Operational commander",
        role: "Campaign-level command",
        side: "belligerent",
        importance: 72,
        portrait: PLACEHOLDER_PORTRAIT,
        note: "Operational role summarized until deeper command history is attached.",
      },
      {
        name: "External actor or witness",
        role: "Diplomatic / humanitarian / observer perspective",
        side: "nonBelligerent",
        importance: 43,
        portrait: PLACEHOLDER_PORTRAIT,
        note: "External perspective shown for diplomatic or humanitarian framing.",
      },
    ],
    infobox: {
      dates: entry.years,
      location: "Regional theater (summary)",
      result: "High-level overview entry",
      belligerents: "Core participants summarized",
      strength: "Estimated ranges",
      casualties: "Provisional range",
    },
  };
};

export const buildWarProfile = (entry) => {
  const featuredSource = featuredWarsByName[entry.name];
  const source = featuredSource || fallbackProfile(entry);

  return {
    ...source,
    isFeatured: Boolean(featuredSource),
    participants: (source.participants || []).map((participant) => ({
      ...participant,
      side: sanitizeSide(participant.side),
    })),
    centralFigures: (source.centralFigures || []).map((figure) => ({
      ...figure,
      side: sanitizeSide(figure.side),
      importance: clamp(figure.importance ?? 50, 0, 100),
      portrait: figure.portrait || PLACEHOLDER_PORTRAIT,
    })),
    maps: {
      title: source.maps?.title || "Theater map",
      description: source.maps?.description || "Interactive theater overview",
      points: source.maps?.points || [],
    },
    technology: source.technology || [],
    timeline: source.timeline || [],
    background: source.background || [],
    aftermath: source.aftermath || [],
    orderOfBattle: source.orderOfBattle || [],
  };
};
