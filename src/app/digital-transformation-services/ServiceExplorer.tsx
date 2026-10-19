"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

export type TransformationService = {
  name: string;
  heading: string;
  body: string;
  pillars: string[];
};

export default function ServiceExplorer({ items }: { items: TransformationService[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className={styles.explorer}>
      <div className={styles.tabList} role="tablist" aria-orientation="vertical" aria-label="Digital transformation services">
        {items.map((s, i) => (
          <button
            key={s.name}
            type="button"
            role="tab"
            id={`dt-tab-${i}`}
            aria-selected={active === i}
            aria-controls="dt-panel"
            className={styles.tab}
            onClick={() => setActive(i)}
          >
            <span>
              {i + 1}. {s.name}
            </span>
            <span className={styles.tabArrow} aria-hidden="true">
              →
            </span>
          </button>
        ))}
      </div>

      <div className={styles.panel} role="tabpanel" id="dt-panel" aria-labelledby={`dt-tab-${active}`}>
        <div className={styles.panelTop}>
          <span className={styles.coreBadge}>
            <span className={styles.badgeDot} />
            CORE CAPABILITY
          </span>
          <span className={styles.panelKicker}>ENTERPRISE SOLUTION</span>
        </div>
        <h3>{current.heading}</h3>
        <p className={styles.panelBody}>{current.body}</p>

        <div className={styles.pillarsHead}>
          <span>ENTERPRISE EXECUTION PILLARS</span>
          <b>Full Lifecycle Support</b>
        </div>
        <ul className={styles.pillars}>
          {current.pillars.map((p) => (
            <li key={p}>
              <span className={styles.badgeDot} />
              {p}
            </li>
          ))}
        </ul>

        <div className={styles.panelFoot}>
          <Link href="/contact" className={styles.exploreLink}>
            Explore Service Capabilities →
          </Link>
          <span>Tier-1 SLA Guaranteed</span>
        </div>
      </div>
    </div>
  );
}
