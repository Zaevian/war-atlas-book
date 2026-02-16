import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  const handleShellScroll = useCallback(() => {
    const el = shellRef.current;
    if (!el) return;
    setScrollPx(el.scrollTop);
  }, []);

  useEffect(() => {
    setScrollPx(0);
    if (shellRef.current) shellRef.current.scrollTop = 0;
  }, [selectedEntry.id]);

  const clamp01 = (v) => Math.min(Math.max(v, 0), 1);
  // Title shrinks in first 400px of scroll
  const titlePhase = clamp01(scrollPx / 400);
  // Topbar appears from 200px → 600px
  const uiPhase = clamp01((scrollPx - 200) / 400);
  // Content fades in from 350px → 700px
  const contentPhase = clamp01((scrollPx - 350) / 350);
  // Index (tab-rail) only at ~30% content revealed: 500px → 900px
  const indexPhase = clamp01((scrollPx - 500) / 400);
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
        <span className="cinema-number">#{String(selectedEntry.sequence).padStart(3, '0')}</span>
        <h2 className="cinema-name">{selectedEntry.name}</h2>
        <span className="cinema-years">{selectedEntry.years}</span>
        <span className="cinema-scroll-hint">scroll to explore</span>
      </div>

      <motion.header
        className="topbar"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <p className="eyebrow">Interactive conflict atlas</p>
          <h1>The Moving Century: War Atlas</h1>
          <p>
            Physical-book tab navigation, sequential war index, and historian-focused conflict pages
            for the 20th and 21st centuries.
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
      </motion.header>

      <div className="book-layout">
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
              <header className="lead-card">
                <div className="lead-top">
                  <div>
                    <p className="eyebrow">#{String(selectedEntry.sequence).padStart(3, "0")}</p>
                    <h2>{selectedEntry.name}</h2>
                    <p className="war-years">{selectedEntry.years}</p>
                    <p className={`profile-badge ${profile.isFeatured ? "featured" : "fallback"}`}>
                      {profile.isFeatured ? "Researched dossier" : "Auto-generated overview"}
                    </p>
                  </div>

                  <div className="war-nav" aria-label="Navigate wars in current filter">
                    <button type="button" onClick={() => goToNeighbor(-1)} disabled={!hasPrev}>
                      Previous
                    </button>
                    <button type="button" onClick={() => goToNeighbor(1)} disabled={!hasNext}>
                      Next
                    </button>
                  </div>
                </div>
                <p className="theater">{renderBold(profile.theater)}</p>
                <p>{renderBold(profile.summary)}</p>
              </header>

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

                <section className="card participants-card">
                  <header className="card-head">
                    <h3>Belligerents and Key Participants</h3>
                    <p>
                      Belligerents in red, non-belligerent/intervening actors in blue, and debated
                      attribution in yellow.
                    </p>
                  </header>

                  <div className="participants-list">
                    {profile.participants.map((participant) => (
                      <article key={`${selectedEntry.id}-${participant.name}`}>
                        <h4 className={`side-tag ${participant.side}`}>{participant.name}</h4>
                        <p>{renderBold(participant.role)}</p>
                      </article>
                    ))}
                  </div>
                </section>

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
