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

function ParticipantsCarousel({ warId, participants, scrollPhase = 1 }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-60px" });
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Reset selection when war changes
  useEffect(() => {
    setSelectedIndex(null);
  }, [warId]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const selected = selectedIndex !== null ? participants[selectedIndex] : null;
  const selectedGlow = selected ? (glowClass[selected.side] || "glow-yellow") : "";

  return (
    <section className="participants-card-v2 participants-civ-stage" ref={sectionRef}>
      <header className="card-head participants-civ-header">
        <h3>Belligerents &amp; Key Participants</h3>
        <p>
          Belligerents in <span className="glow-label-red">red</span>, non-belligerent actors in{" "}
          <span className="glow-label-blue">blue</span>, and debated attribution in{" "}
          <span className="glow-label-yellow">yellow</span>.
        </p>
      </header>

      {/* Civ7-style tile grid */}
      <div className="civ-grid">
        {participants.map((participant, index) => {
          const glow = glowClass[participant.side] || "glow-yellow";
          return (
            <motion.button
              key={`${warId}-tile-${index}`}
              className={`civ-tile ${glow}`}
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="civ-tile-portrait">
                <img
                  src="/portraits/placeholder-figure.svg"
                  alt={`${participant.name} portrait`}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = "/portraits/placeholder-figure.svg"; }}
                />
                <div className={`civ-tile-glow-edge ${glow}`} />
              </div>
              <div className="civ-tile-footer">
                <span className={`civ-tile-diamond ${glow}`} />
                <h4>{participant.name}</h4>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Fullscreen detail overlay (Civ7 detail view) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="civ-detail-overlay"
            key={`detail-overlay-${warId}-${selectedIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => {
              // Close if clicking the backdrop edges (not the card itself)
              if (e.target === e.currentTarget) setSelectedIndex(null);
            }}
          >
            <motion.div
              className="civ-detail-card"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
            >
              {/* Back button */}
              <button
                type="button"
                className="civ-detail-back"
                onClick={() => setSelectedIndex(null)}
              >
                ← Back
              </button>

              {/* Left panel: info */}
              <div className="civ-detail-info">
                <div className={`civ-detail-icon ${selectedGlow}`} />
                <h2 className={`civ-detail-name ${selectedGlow}`}>{selected.name}</h2>
                <p className={`side-tag ${selected.side}`}>
                  {selected.side === "belligerent" ? "Belligerent" : selected.side === "nonBelligerent" ? "Non-belligerent" : "Debated"}
                </p>
                <div className="civ-detail-divider" />
                <div className="civ-detail-role">
                  <h4>Role &amp; Context</h4>
                  <p>{renderBold(selected.role)}</p>
                </div>

                {/* Prev / Next navigation among participants */}
                <div className="civ-detail-nav">
                  <button
                    type="button"
                    disabled={selectedIndex <= 0}
                    onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex - 1); }}
                  >
                    ◂ Prev
                  </button>
                  <span className="civ-detail-counter">
                    {selectedIndex + 1} / {participants.length}
                  </span>
                  <button
                    type="button"
                    disabled={selectedIndex >= participants.length - 1}
                    onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex + 1); }}
                  >
                    Next ▸
                  </button>
                </div>
              </div>

              {/* Right panel: large portrait */}
              <div className={`civ-detail-portrait ${selectedGlow}`}>
                <img
                  src="/portraits/placeholder-figure.svg"
                  alt={`${selected.name} portrait`}
                  onError={(e) => { e.currentTarget.src = "/portraits/placeholder-figure.svg"; }}
                />
                <div className={`civ-detail-portrait-vignette ${selectedGlow}`} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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

function CinematicTimeline({ warId, timeline }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-40px" });

  return (
    <section className="cinematic-timeline-card" ref={sectionRef}>
      {/* Header */}
      <motion.header
        className="ct-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3>Course of the War</h3>
        <p>Major phases and turning points</p>
        <div className="ct-header-rule" />
      </motion.header>

      {/* Vertical timeline */}
      <div className="ct-track">
        {/* Animated vertical line */}
        <motion.div
          className="ct-line"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />

        {timeline.map((event, index) => (
          <motion.div
            key={`${warId}-ct-${index}`}
            className={`ct-entry ${index % 2 === 0 ? "ct-entry-left" : "ct-entry-right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 20 }}
            transition={{
              duration: 0.55,
              delay: 0.5 + index * 0.18,
              ease: "easeOut",
            }}
          >
            {/* Node on the line */}
            <motion.div
              className="ct-node"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
                delay: 0.5 + index * 0.18,
              }}
            />

            {/* Date badge */}
            <motion.span
              className="ct-date"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.18,
                ease: "easeOut",
              }}
            >
              {event.period}
            </motion.span>

            {/* Content card */}
            <div className="ct-content">
              <h4>{event.title}</h4>
              <div className="ct-detail">
                <p>{renderBold(event.detail)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CinematicBackground({ warId, background }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-60px" });

  return (
    <section className="cin-section cin-background" ref={sectionRef}>
      <motion.header
        className="cin-section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2>Background &amp; Causes</h2>
        <p>Long-term drivers plus immediate triggers</p>
        <div className="cin-header-rule" />
      </motion.header>

      <div className="cin-bg-entries">
        {background.map((item, index) => (
          <motion.div
            key={`${warId}-bg-${index}`}
            className="cin-bg-row"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: "easeOut" }}
          >
            <div className="cin-bg-text">
              <p>{renderBold(item)}</p>
            </div>
            <div className="cin-bg-image">
              <div className="cin-bg-placeholder">
                <span>Image</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CinematicOutcome({ warId, outcome }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-60px" });

  // Split outcome into sentences
  const sentences = useMemo(() => {
    if (!outcome) return [];
    return outcome
      .replace(/([.!?])\s+/g, "$1|||")
      .split("|||")
      .filter((s) => s.trim().length > 0);
  }, [outcome]);

  return (
    <section className="cin-section cin-outcome" ref={sectionRef}>
      <motion.header
        className="cin-section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2>Result &amp; Outcome</h2>
        <div className="cin-header-rule" />
      </motion.header>

      <div className="cin-outcome-body">
        {sentences.map((sentence, i) => (
          <motion.p
            key={`${warId}-outcome-${i}`}
            className="cin-outcome-sentence"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.22, ease: "easeOut" }}
          >
            {renderBold(sentence)}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

function CinematicOrderOfBattle({ warId, orderOfBattle }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-60px" });

  // Split into two halves for left/right layout
  const midpoint = Math.ceil(orderOfBattle.length / 2);
  const leftSide = orderOfBattle.slice(0, midpoint);
  const rightSide = orderOfBattle.slice(midpoint);

  return (
    <section className="cin-section cin-oob" ref={sectionRef}>
      <motion.header
        className="cin-section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2>Strength &amp; Order of Battle</h2>
        <div className="cin-header-rule" />
      </motion.header>

      <div className="cin-oob-split">
        <div className="cin-oob-column cin-oob-left">
          {leftSide.map((item, index) => (
            <motion.div
              key={`${warId}-oob-l-${index}`}
              className="cin-oob-card"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.55, delay: 0.4 + index * 0.15, ease: "easeOut" }}
            >
              <h4>{item.name}</h4>
              <p className="cin-oob-strength">{item.strength}</p>
              <p className="cin-oob-note">{renderBold(item.note)}</p>
            </motion.div>
          ))}
        </div>

        <div className="cin-oob-divider">
          <motion.div
            className="cin-oob-line"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          />
          <span className="cin-oob-vs">VS</span>
        </div>

        <div className="cin-oob-column cin-oob-right">
          {rightSide.map((item, index) => (
            <motion.div
              key={`${warId}-oob-r-${index}`}
              className="cin-oob-card"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.55, delay: 0.4 + index * 0.15, ease: "easeOut" }}
            >
              <h4>{item.name}</h4>
              <p className="cin-oob-strength">{item.strength}</p>
              <p className="cin-oob-note">{renderBold(item.note)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CinematicCasualties({ warId, casualties }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-60px" });

  const stats = [
    { label: "Military", value: casualties.military, icon: "⚔" },
    { label: "Civilian", value: casualties.civilian, icon: "🏠" },
    { label: "Displacement", value: casualties.displacement, icon: "🚶" },
  ];

  return (
    <section className="cin-section cin-casualties" ref={sectionRef}>
      <motion.header
        className="cin-section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2>Casualties &amp; Human Cost</h2>
        <p>The toll of conflict on soldiers and civilians alike</p>
        <div className="cin-header-rule" />
      </motion.header>

      <div className="cin-cas-grid">
        {stats.map((stat, i) => (
          <motion.div
            key={`${warId}-cas-${i}`}
            className="cin-cas-card"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.55, delay: 0.3 + i * 0.18, ease: "easeOut" }}
          >
            <span className="cin-cas-icon">{stat.icon}</span>
            <h4>{stat.label}</h4>
            <p>{renderBold(stat.value)}</p>
          </motion.div>
        ))}
      </div>

      {casualties.note && (
        <motion.div
          className="cin-cas-note"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        >
          <p>{renderBold(casualties.note)}</p>
        </motion.div>
      )}
    </section>
  );
}

function CinematicTechnologyPanel({ warId, technology }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-60px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const techList = technology || [];
  const active = techList[activeIndex] || null;

  useEffect(() => {
    setActiveIndex(0);
  }, [warId]);

  return (
    <section className="cin-section cin-tech" ref={sectionRef}>
      <motion.header
        className="cin-section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2>Technology &amp; Weapons</h2>
        <p>Systems that shaped battlefield outcomes and civilian effects</p>
        <div className="cin-header-rule" />
      </motion.header>

      {/* Weapon selector gallery */}
      <div className="cin-tech-gallery">
        {techList.map((item, index) => (
          <motion.button
            key={`${warId}-tech-${index}`}
            type="button"
            className={`cin-tech-thumb ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.45, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="cin-tech-thumb-img">
              <span>IMG</span>
            </div>
            <span className="cin-tech-thumb-label">{item.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Active weapon detail */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={`${warId}-techd-${activeIndex}`}
            className="cin-tech-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="cin-tech-detail-image">
              <div className="cin-bg-placeholder">
                <span>Weapon / Technology Image</span>
              </div>
            </div>
            <div className="cin-tech-detail-info">
              <h3>{active.name}</h3>
              <div className="cin-tech-meta">
                <span className="cin-tech-tag">Type: {active.type}</span>
                <span className="cin-tech-tag">Used by: {active.side}</span>
              </div>
              <div className="cin-tech-divider" />
              <p className="cin-tech-impact">{renderBold(active.impact)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

      <CinematicTimeline
        warId={selectedEntry.id}
        timeline={profile.timeline}
      />

      <CinematicBackground
        warId={selectedEntry.id}
        background={profile.background}
      />

      <CinematicOutcome
        warId={selectedEntry.id}
        outcome={profile.outcome}
      />

      <CinematicOrderOfBattle
        warId={selectedEntry.id}
        orderOfBattle={profile.orderOfBattle}
      />

      <CinematicCasualties
        warId={selectedEntry.id}
        casualties={profile.casualties}
      />

      <CinematicTechnologyPanel
        warId={selectedEntry.id}
        technology={profile.technology}
      />

      {/* Triangular index tab fixed to right screen edge */}
      <div
        className="index-tab-flag"
        onClick={() => {
          const rail = document.querySelector('.tab-rail');
          if (rail) {
            const zone = document.querySelector('.rail-hover-zone');
            if (zone) {
              zone.style.width = '280px';
              setTimeout(() => { zone.style.width = ''; }, 3000);
            }
          }
        }}
      >
        <span>INDEX</span>
      </div>

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

                <InteractiveMap warId={selectedEntry.id} mapData={profile.maps} />

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
