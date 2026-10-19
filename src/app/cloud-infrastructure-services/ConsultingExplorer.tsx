"use client";

import { useState, type CSSProperties } from "react";
import { CheckIcon } from "@/lib/icons";
import styles from "./page.module.css";

export type ConsultingService = {
  title: string;
  summary: string;
  detail: { heading: string; body: string; points: string[] };
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function ConsultingExplorer({ items }: { items: ConsultingService[] }) {
  const [active, setActive] = useState(0);
  const { detail } = items[active];

  return (
    // On mobile the grid collapses to one column and `order` slots the detail panel
    // directly under the selected tab instead of below the whole list.
    <div className={styles.explorer} style={{ "--count": items.length } as CSSProperties}>
      {items.map((s, i) => (
        <button
          type="button"
          key={s.title}
          className={styles.tab}
          aria-pressed={active === i}
          aria-controls="cloud-service-detail"
          onClick={() => setActive(i)}
          style={{ "--order": i * 2 } as CSSProperties}
        >
          <span className={styles.tabNum}>{pad(i + 1)}</span>
          <span>
            <span className={styles.tabTitle}>{s.title}</span>
            <span className={styles.tabDesc}>{s.summary}</span>
          </span>
        </button>
      ))}

      <div
        className={styles.detail}
        id="cloud-service-detail"
        aria-live="polite"
        style={{ "--order": active * 2 + 1 } as CSSProperties}
      >
        <h3>{detail.heading}</h3>
        <p>{detail.body}</p>
        <ul className={styles.detailPoints}>
          {detail.points.map((p) => (
            <li key={p}>
              <CheckIcon /> {p}
            </li>
          ))}
        </ul>
        <div className={styles.guarantee}>
          <span className={styles.guaranteeIcon}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <div>
            <b>Compliant Infrastructure Guarantee</b>
            <span>ISO 27001, SOC 2 Type II, and HIPAA validated blueprints</span>
          </div>
          <span className={styles.verified}>Verified</span>
        </div>
      </div>
    </div>
  );
}
