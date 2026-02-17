import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { baseWarEntries } from "./data/warList";
import { featuredWarsByName } from "./data/featuredWars";
import { buildWarProfile } from "./utils/buildWarProfile";
import { renderBold } from "./utils/renderBold";

const sideLabels = {
  belligerent: "Belligerent",
  nonBelligerent: "Non-belligerent / external",
  debated: "Debated / contested",
};

const importanceBand = (value) => {
  if (value >= 75) return "high";
  if (value >= 45) return "medium";
  return "low";
};

const InfoRow = ({ label, value }) => (
  <div className="info-row">
    <dt>{label}</dt>
    <dd>{value}</dd>
  </div>
);

const glowClass = {
  belligerent: "glow-red",
  nonBelligerent: "glow-blue",
  debated: "glow-yellow",
};

// Deterministic pseudo-random from seed
const seededRand = (seed) => {
  let x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
};

// Pre-compute fly-in origins (edges/corners of the screen)
const flyOrigins = [
  { x: -600, y: -300 },  // top-left
  { x: 600, y: -300 },   // top-right
  { x: -700, y: 200 },   // left
  { x: 700, y: 200 },    // right
  { x: -500, y: 500 },   // bottom-left
  { x: 500, y: 500 },    // bottom-right
  { x: 0, y: -500 },     // top-center
  { x: 0, y: 600 },      // bottom-center
  { x: -800, y: 0 },     // far left
  { x: 800, y: 0 },      // far right
];

function ParticipantsCarousel({ warId, participants, scrollPhase = 1 }) {
  const sectionRef = useRef(null);
  const ringRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-60px" });
  const phase = Math.min(Math.max(scrollPhase, 0), 1);
  const [hasLanded, setHasLanded] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);

  // Measure ring size to compute radius
  const [radius, setRadius] = useState(300);
  useEffect(() => {
    const measure = () => {
      if (ringRef.current) {
        const w = ringRef.current.offsetWidth;
        const h = ringRef.current.offsetHeight;
        setRadius(Math.min(w, h) * 0.34);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [warId]);

  // Mark when fly-in is done so orbit can begin
  useEffect(() => {
    if (isInView && !hasLanded) {
      const t = setTimeout(() => setHasLanded(true), participants.length * 140 + 800);
      return () => clearTimeout(t);
    }
    if (!isInView) setHasLanded(false);
  }, [isInView, participants.length, hasLanded]);

  // Orbit angle driven by requestAnimationFrame — pauses when any card is focused
  const [orbitAngle, setOrbitAngle] = useState(0);
  useEffect(() => {
    if (!hasLanded || focusedIndex !== null) return;
    let raf;
    let lastTime = performance.now();
    const speed = 0.12;
    const tick = (now) => {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;
      setOrbitAngle((prev) => (prev + speed * (dt / 16.67)) % 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hasLanded, focusedIndex]);

  // Compute fly-in origins per card (static)
  const flyData = useMemo(() => {
    return participants.map((_, i) => {
      const seed = i + 1;
      const origin = flyOrigins[i % flyOrigins.length];
      const flyRotate = (seededRand(seed * 17) - 0.5) * 80;
      return { originX: origin.x, originY: origin.y, flyRotate };
    });
  }, [participants]);

  const count = participants.length;

  return (
    <section
      className="participants-card-v2 participants-card-stage"
      ref={sectionRef}
      style={{
        "--participants-height": `max(${Math.round(300 + (1 - phase) * 500)}px, ${(96 - phase * 60).toFixed(2)}vh)`,
      }}
    >
      <header className="card-head participants-scatter-header">
        <h3 style={{ fontSize: `${Math.max(1.1, 2.7 - phase * 1.6)}rem` }}>
          Belligerents &amp; Key Participants
        </h3>
        <p>
          Belligerents in <span className="glow-label-red">red</span>, non-belligerent actors in{" "}
          <span className="glow-label-blue">blue</span>, and debated attribution in{" "}
          <span className="glow-label-yellow">yellow</span>.
        </p>
      </header>

      <div className="participants-orbit-ring" ref={ringRef}>
        {participants.map((participant, index) => {
          const glow = glowClass[participant.side] || "glow-yellow";
          const fly = flyData[index];
          const isFocused = focusedIndex === index;
          const hasFocus = focusedIndex !== null;

          // Compute position
          let cx, cy, targetScale, targetZIndex;
          const seed = index + 1;

          if (isFocused) {
            // Focused card → center, bigger
            cx = 0;
            cy = 0;
            targetScale = 1.5;
            targetZIndex = 200;
          } else if (hasFocus) {
            // Displaced cards → line up vertically on the right side, spread enough to click each
            const othersCount = count - 1;
            const reIndex = index < focusedIndex ? index : index - 1;
            const spacing = Math.min(120, (radius * 3) / Math.max(othersCount, 1));
            const totalHeight = (othersCount - 1) * spacing;
            cx = radius * 1.25;
            cy = -totalHeight / 2 + reIndex * spacing;
            targetScale = 0.55;
            targetZIndex = 20 + reIndex;
          } else {
            // Circular orbit
            const angleDeg = (index / count) * 360 - 90 + (hasLanded ? orbitAngle : 0);
            const angleRad = (angleDeg * Math.PI) / 180;
            cx = Math.cos(angleRad) * radius;
            cy = Math.sin(angleRad) * radius;
            targetScale = 1;
            targetZIndex = count - index;
          }

          return (
            <motion.article
              key={`${warId}-participant-${index}`}
              className={`participant-card-v2 participant-card-orbit ${glow} ${isFocused ? "card-focused" : ""}`}
              style={{ zIndex: targetZIndex }}
              onClick={() => {
                setDetailOpen(false);
                setFocusedIndex(isFocused ? null : index);
              }}
              initial={{
                opacity: 0,
                scale: 0.2,
                x: fly.originX,
                y: fly.originY,
                rotate: fly.flyRotate,
              }}
              animate={isInView ? {
                opacity: hasFocus && !isFocused ? 0.7 : 1,
                scale: targetScale,
                x: cx,
                y: cy,
                rotate: 0,
              } : {
                opacity: 0,
                scale: 0.2,
                x: fly.originX,
                y: fly.originY,
                rotate: fly.flyRotate,
              }}
              transition={hasLanded ? {
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 0.8,
              } : {
                type: "spring",
                stiffness: 45,
                damping: 13,
                mass: 1,
                delay: index * 0.14,
              }}
            >
              <div className="participant-portrait-wrap">
                <img
                  src="/portraits/placeholder-figure.svg"
                  alt={`${participant.name} portrait`}
                  className="participant-portrait"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = "/portraits/placeholder-figure.svg";
                  }}
                />
                <div className={`portrait-glow-ring ${glow}`} />
              </div>
              <h4 className={`participant-name ${glow}`}>{participant.name}</h4>
              {isFocused && (
                <div
                  className={`participant-hover-detail detail-visible ${detailOpen ? "detail-expanded" : "detail-collapsed"}`}
                  onMouseEnter={() => setDetailOpen(true)}
                  onMouseLeave={() => setDetailOpen(false)}
                >
                  <p className={`side-tag ${participant.side}`}>
                    {participant.side === "belligerent" ? "Belligerent" : participant.side === "nonBelligerent" ? "Non-belligerent" : "Debated"}
                  </p>
                  <p className="participant-role">{renderBold(participant.role)}</p>
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function CinematicIntro({ theater, summary, warId }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-80px" });

  // Split summary into sentences for line-by-line reveal
  const sentences = useMemo(() => {
    if (!summary) return [];
    return summary
      .replace(/([.!?])\s+/g, "$1|||")
      .split("|||")
      .filter((s) => s.trim().length > 0);
  }, [summary]);

  return (
    <section className="cinematic-intro" ref={sectionRef} key={warId}>
      {/* Theater / Setting line — fades in big */}
      <motion.p
        className="cinematic-theater"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {renderBold(theater)}
      </motion.p>

      {/* Divider line */}
      <motion.div
        className="cinematic-divider"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      />

      {/* Summary sentences — fly in one by one */}
      <div className="cinematic-summary">
        {sentences.map((sentence, i) => (
          <motion.span
            key={`${warId}-sentence-${i}`}
            className="cinematic-sentence"
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20 }}
            transition={{
              duration: 0.7,
              delay: 1.0 + i * 0.45,
              ease: "easeOut",
            }}
          >
            {renderBold(sentence)}{" "}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

function InteractiveMap({ warId, mapData }) {
  const points = mapData.points || [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [warId]);

  const activePoint = points[activeIndex] || null;

  return (
    <section className="card map-card">
      <header className="card-head">
        <h3>Maps / Theater Explorer</h3>
        <p>{mapData.description}</p>
      </header>

      <div className="map-canvas" role="img" aria-label={mapData.title}>
        <div className="map-latitude" />
        <div className="map-latitude map-latitude-mid" />
        <div className="map-latitude map-latitude-low" />
        <div className="map-longitude" />
        <div className="map-longitude map-longitude-mid" />
        <div className="map-longitude map-longitude-right" />

        {points.map((point, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.button
              key={`${point.name}-${index}`}
              type="button"
              className={`map-marker ${isActive ? "active" : ""}`}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>{point.name}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="map-detail">
        <h4>{activePoint?.name || "Map marker"}</h4>
        <p className="map-year">{activePoint?.year || "Year range pending"}</p>
        <p>{renderBold(activePoint?.note) || "Point details pending."}</p>
      </div>
    </section>
  );
}

function TechnologyPanel({ warId, technology }) {
  const [activeTech, setActiveTech] = useState(0);

  useEffect(() => {
    setActiveTech(0);
  }, [warId]);

  const techList = technology || [];
  const active = techList[activeTech] || null;

  return (
    <section className="card tech-card">
      <header className="card-head">
        <h3>Technology and Weapons</h3>
        <p>Interactive systems that shaped battlefield outcomes and civilian effects.</p>
      </header>

      <div className="tech-grid" role="tablist" aria-label="Technology list">
        {techList.map((item, index) => (
          <motion.button
            type="button"
            key={`${item.name}-${index}`}
            className={`tech-chip ${index === activeTech ? "active" : ""}`}
            onMouseEnter={() => setActiveTech(index)}
            onFocus={() => setActiveTech(index)}
            onClick={() => setActiveTech(index)}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <strong>{item.name}</strong>
            <span>{item.type}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.article
            key={`${warId}-${active.name}`}
            className="tech-detail"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <h4>{active.name}</h4>
            <p>
              <span>Type:</span> {active.type}
            </p>
            <p>
              <span>Main users:</span> {active.side}
            </p>
            <p>{renderBold(active.impact)}</p>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  );
}

function CentralFigures({ figures }) {
  const ordered = [...(figures || [])].sort((a, b) => b.importance - a.importance);

  return (
    <section className="card figures-card">
      <header className="card-head">
        <h3>Central Figures</h3>
        <p>
          Importance bar runs green (contextual participant) to yellow (strong contributor) to red
          (single most central figures).
        </p>
      </header>

      <div className="figures-grid">
        {ordered.map((figure) => {
          const band = importanceBand(figure.importance);
          return (
            <article key={figure.name} className="figure-card">
              <img
                src={figure.portrait}
                alt={`${figure.name} portrait`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = "/portraits/placeholder-figure.svg";
                }}
              />

              <div className="figure-meta">
                <h4>{figure.name}</h4>
                <p>{figure.role}</p>
                <p className={`side-tag ${figure.side || "debated"}`}>
                  {sideLabels[figure.side] || sideLabels.debated}
                </p>

                <div className="importance-wrap">
                  <div className="importance-track">
                    <span
                      className={`importance-fill ${band}`}
                      style={{ width: `${figure.importance}%` }}
                    />
                  </div>
                  <strong>{figure.importance}/100</strong>
                </div>
                <small>{renderBold(figure.note)}</small>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function App() {
  const defaultWar = useMemo(
    () => baseWarEntries[Math.floor(Math.random() * baseWarEntries.length)],
    [],
  );
  const featuredNames = useMemo(() => new Set(Object.keys(featuredWarsByName)), []);
  const detailedCount = useMemo(
    () => baseWarEntries.filter((entry) => featuredNames.has(entry.name)).length,
    [featuredNames],
  );

  const [query, setQuery] = useState("");
  const [showDetailedOnly, setShowDetailedOnly] = useState(false);
  const [selectedWarId, setSelectedWarId] = useState(defaultWar.id);

  const filteredWars = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return baseWarEntries.filter((entry) => {
      if (showDetailedOnly && !featuredNames.has(entry.name)) {
        return false;
      }

      if (!normalized) {
        return true;
      }

      return (
        entry.name.toLowerCase().includes(normalized) ||
        entry.years.toLowerCase().includes(normalized) ||
        String(entry.sequence).includes(normalized)
      );
    });
  }, [featuredNames, query, showDetailedOnly]);

  useEffect(() => {
    if (filteredWars.length === 0) {
      return;
    }

    const stillVisible = filteredWars.some((entry) => entry.id === selectedWarId);
    if (!stillVisible) {
      setSelectedWarId(filteredWars[0].id);
    }
  }, [filteredWars, selectedWarId]);

  const selectedEntry =
    baseWarEntries.find((entry) => entry.id === selectedWarId) || filteredWars[0] || defaultWar;
  const profile = useMemo(() => buildWarProfile(selectedEntry), [selectedEntry]);

  const shellRef = useRef(null);
  const [scrollPx, setScrollPx] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 900,
  );

  const handleShellScroll = useCallback(() => {
    const el = shellRef.current;
    if (!el) return;
    setScrollPx(el.scrollTop);
  }, []);

  useEffect(() => {
    setScrollPx(0);
    if (shellRef.current) shellRef.current.scrollTop = 0;
  }, [selectedEntry.id]);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clamp01 = (v) => Math.min(Math.max(v, 0), 1);
  // Title shrinks in first 400px of scroll
  const titlePhase = clamp01(scrollPx / 400);
  // Topbar appears from 200px → 600px
  const uiPhase = clamp01((scrollPx - 200) / 400);
  // Content fades in from 350px → 700px
  const contentPhase = clamp01((scrollPx - 350) / 350);
  // Index (tab-rail) only at ~30% content revealed: 500px → 900px
  const indexPhase = clamp01((scrollPx - 500) / 400);
  const participantsStart = viewportHeight * 0.95;
  const participantsEnd = participantsStart + viewportHeight * 1.15;
  const participantsPhase = clamp01(
    (scrollPx - participantsStart) / (participantsEnd - participantsStart),
  );
  const selectedFilteredIndex = filteredWars.findIndex((entry) => entry.id === selectedEntry.id);
  const hasPrev = selectedFilteredIndex > 0;
  const hasNext = selectedFilteredIndex >= 0 && selectedFilteredIndex < filteredWars.length - 1;

  const goToNeighbor = useCallback(
    (direction) => {
      if (selectedFilteredIndex < 0) {
        return;
      }

      const nextIndex = selectedFilteredIndex + direction;
      if (nextIndex < 0 || nextIndex >= filteredWars.length) {
        return;
      }

      setSelectedWarId(filteredWars[nextIndex].id);
    },
    [filteredWars, selectedFilteredIndex],
  );

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.defaultPrevented) {
        return;
      }

      const target = event.target;
      if (target instanceof HTMLElement) {
        const tag = target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable) {
          return;
        }
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToNeighbor(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNeighbor(1);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [goToNeighbor]);

  return (
    <div
      className="app-shell"
      ref={shellRef}
      onScroll={handleShellScroll}
      style={{ '--tp': titlePhase, '--up': uiPhase, '--cp': contentPhase, '--ip': indexPhase }}
    >
      {/* ── Fullscreen title slide (100vh, first thing you see) ── */}
      <div className="cinema-slide" key={`slide-${selectedEntry.id}`}>
        <div className="cinema-nav" aria-label="Navigate wars in current filter">
          <button type="button" onClick={() => goToNeighbor(-1)} disabled={!hasPrev}>← Previous</button>
          <button type="button" onClick={() => goToNeighbor(1)} disabled={!hasNext}>Next →</button>
        </div>
        <span className="cinema-number">#{String(selectedEntry.sequence).padStart(3, '0')}</span>
        <h2 className="cinema-name">{selectedEntry.name}</h2>
        <span className="cinema-years">{selectedEntry.years}</span>
        <span className="cinema-scroll-hint">scroll to explore</span>
      </div>

      <div className="topbar-hover-zone">
        <header className="topbar">
          <div>
            <p className="eyebrow">Interactive conflict atlas</p>
            <h1>The Moving Century: War Atlas</h1>
            <p>
              Physical-book tab navigation, sequential war index, and historian-focused conflict
              pages for the 20th and 21st centuries.
            </p>
          </div>

          <div className="search-controls">
            <label className="search-box">
              <span>Find war / year / index</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try: 1945, Korean, 102"
              />
            </label>

            <button
              type="button"
              className={`filter-toggle ${showDetailedOnly ? "active" : ""}`}
              aria-pressed={showDetailedOnly}
              onClick={() => setShowDetailedOnly((current) => !current)}
            >
              {showDetailedOnly ? "Showing detailed dossiers only" : "Show detailed dossiers only"}
            </button>

            <p className="coverage-line">
              Detailed dossiers: <strong>{detailedCount}</strong> / {baseWarEntries.length}
            </p>
          </div>
        </header>
      </div>

      <ParticipantsCarousel
        warId={selectedEntry.id}
        participants={profile.participants}
        scrollPhase={participantsPhase}
      />

      <CinematicIntro
        key={`cinematic-${selectedEntry.id}`}
        theater={profile.theater}
        summary={profile.summary}
        warId={selectedEntry.id}
      />

      <div className="book-layout">
        <div className="rail-hover-zone">
        <aside
          className="tab-rail"
          aria-label="Sequential war tabs"
        >
          <div className="tab-rail-head">
            <h2>Index</h2>
            <p>
              {filteredWars.length}/{baseWarEntries.length}
            </p>
          </div>

          <div className="tab-list">
            {filteredWars.length === 0 ? (
              <p className="empty-state">No wars match your filter.</p>
            ) : (
              filteredWars.map((entry) => {
                const selected = entry.id === selectedWarId;
                return (
                  <motion.button
                    key={entry.id}
                    type="button"
                    className={`book-tab ${selected ? "active" : ""}`}
                    onClick={() => setSelectedWarId(entry.id)}
                    whileHover={{ x: 7 }}
                    whileTap={{ x: 2 }}
                  >
                    <span className="tab-order">{String(entry.sequence).padStart(3, "0")}</span>
                    <span className="tab-title">
                      {entry.name}
                      <em>{entry.years}</em>
                    </span>
                  </motion.button>
                );
              })
            )}
          </div>
        </aside>
        </div>

        <main className="book-stage" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.article
              key={selectedEntry.id}
              className="book-page"
              initial={{ opacity: 0, rotateY: -7, x: 32 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={{ opacity: 0, rotateY: 7, x: -28 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <section className="content-grid">
                <section className="card span-two">
                  <header className="card-head">
                    <h3>Background / Causes</h3>
                    <p>Long-term drivers plus immediate triggers.</p>
                  </header>
                  <ul className="bullet-list">
                    {profile.background.map((item, index) => (
                      <li key={`${selectedEntry.id}-background-${index}`}>{renderBold(item)}</li>
                    ))}
                  </ul>
                </section>

                <aside className="card infobox">
                  <header className="card-head">
                    <h3>Infobox</h3>
                    <p>Fast facts snapshot</p>
                  </header>
                  <dl>
                    <InfoRow label="Dates" value={profile.infobox.dates} />
                    <InfoRow label="Location" value={profile.infobox.location} />
                    <InfoRow label="Result" value={profile.infobox.result} />
                    <InfoRow label="Belligerents" value={profile.infobox.belligerents} />
                    <InfoRow label="Strength" value={profile.infobox.strength} />
                    <InfoRow label="Casualties" value={profile.infobox.casualties} />
                  </dl>
                </aside>

                <section className="card timeline-card">
                  <header className="card-head">
                    <h3>Course of the War / Timeline</h3>
                    <p>Major phases and turning points.</p>
                  </header>

                  <ol className="timeline-list">
                    {profile.timeline.map((event, index) => (
                      <li key={`${selectedEntry.id}-timeline-${index}`}>
                        <span>{event.period}</span>
                        <div>
                          <h4>{event.title}</h4>
                          <p>{renderBold(event.detail)}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="card span-two result-card">
                  <header className="card-head">
                    <h3>Result / Outcome</h3>
                  </header>
                  <p>{renderBold(profile.outcome)}</p>
                </section>

                <section className="card casualties-card">
                  <header className="card-head">
                    <h3>Casualties and Human Cost</h3>
                  </header>
                  <ul className="bullet-list">
                    <li>
                      <strong>Military:</strong> {renderBold(profile.casualties.military)}
                    </li>
                    <li>
                      <strong>Civilian:</strong> {renderBold(profile.casualties.civilian)}
                    </li>
                    <li>
                      <strong>Displacement:</strong> {renderBold(profile.casualties.displacement)}
                    </li>
                    <li>
                      <strong>Notes:</strong> {renderBold(profile.casualties.note)}
                    </li>
                  </ul>
                </section>

                <section className="card order-card">
                  <header className="card-head">
                    <h3>Strength / Order of Battle</h3>
                  </header>
                  <ul className="order-list">
                    {profile.orderOfBattle.map((item) => (
                      <li key={`${selectedEntry.id}-${item.name}`}>
                        <h4>{item.name}</h4>
                        <p>
                          <strong>{item.strength}</strong>
                        </p>
                        <p>{renderBold(item.note)}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                <InteractiveMap warId={selectedEntry.id} mapData={profile.maps} />

                <TechnologyPanel warId={selectedEntry.id} technology={profile.technology} />

                <CentralFigures figures={profile.centralFigures} />

                <section className="card span-two aftermath-card">
                  <header className="card-head">
                    <h3>Consequences / Aftermath / Legacy</h3>
                  </header>
                  <ul className="bullet-list">
                    {profile.aftermath.map((item, index) => (
                      <li key={`${selectedEntry.id}-aftermath-${index}`}>{renderBold(item)}</li>
                    ))}
                  </ul>
                </section>
              </section>
            </motion.article>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
