"use client";

import { useState, type CSSProperties } from "react";
import styles from "./page.module.css";

type Layer = { name: string; status: string; accent?: boolean; tools: string[] };

export type Capability = {
  title: [plain: string, highlight: string];
  tag?: string;
  desc: string;
  panel: { title: string; badge: string; layers: Layer[]; deliverables: string[]; cta: string };
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function CapabilityExplorer({ items }: { items: Capability[] }) {
  const [active, setActive] = useState(0);
  const { panel } = items[active];

  return (
    // On mobile the grid collapses to one column and `order` slots the preview panel
    // directly under the selected card instead of below the whole list.
    <div className={styles.capGrid}>
      {items.map((c, i) => (
        <button
          type="button"
          key={c.title.join("")}
          className={styles.capCard}
          aria-pressed={active === i}
          aria-controls="capability-preview"
          onClick={() => setActive(i)}
          style={{ "--order": i * 2 } as CSSProperties}
        >
          <span className={styles.capLabel}>CAPABILITY {pad(i + 1)}</span>
          {c.tag && <span className={styles.capTag}>{c.tag}</span>}
          <span className={styles.capTitle}>
            {c.title[0]}
            <span className={styles.gradText}>{c.title[1]}</span>
          </span>
          <span className={styles.capDesc}>{c.desc}</span>
        </button>
      ))}

      <div
        className={styles.preview}
        id="capability-preview"
        aria-live="polite"
        style={{ "--order": active * 2 + 1 } as CSSProperties}
      >
        <div className={styles.previewHead}>
          <div>
            <p className={styles.previewEyebrow}>ACTIVE CAPABILITY PREVIEW</p>
            <h3>
              {pad(active + 1)} / {panel.title}
            </h3>
          </div>
          <span className={styles.previewBadge}>{panel.badge}</span>
        </div>

        <ul className={styles.layers}>
          {panel.layers.map((l) => (
            <li key={l.name}>
              <span className={styles.layerHead}>
                LAYER: {l.name.toUpperCase()}
                <span className={l.accent ? styles.statusAccent : styles.status}>{l.status}</span>
              </span>
              <span className={styles.tools}>
                {l.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
            </li>
          ))}
        </ul>

        <p className={styles.previewEyebrowMuted}>ENGINEERED DELIVERABLES</p>
        <ul className={styles.deliverables}>
          {panel.deliverables.map((d) => (
            <li key={d}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
              {d}
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.previewCta}>
          {panel.cta}
          <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
