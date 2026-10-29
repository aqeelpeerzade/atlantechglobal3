"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";
import { ArrowIcon } from "@/lib/icons";

import styles from "./page.module.css";

export type Industry = { label: string; image: string; icon: string };

const INITIAL_COUNT = 6;

export default function IndustryGrid({ items }: { items: Industry[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, INITIAL_COUNT);

  return (
    <>

     {items.length > INITIAL_COUNT && (
        <div className={styles.industryMore}>
          <button
            type="button"
            className="btn btn-primary"
            aria-expanded={showAll}
            aria-controls="industry-grid"
            onClick={() => setShowAll((v) => !v)}
          > {showAll ? "Show Less" : <>View All Industries <ArrowIcon /></>}

          </button>
        </div>
      )}
      <ul className={styles.industryGrid} id="industry-grid">
        {visible.map((ind, i) => {
          // RevealOnScroll only observes elements present on first load, so cards
          // added by "View All" are marked visible up front and fade in via CSS instead.
          const isExtra = i >= INITIAL_COUNT;
          return (
            <li
              className={`${styles.industryCard} ${isExtra ? styles.industryCardIn : styles.reveal} ${!showAll && i === INITIAL_COUNT - 1 ? styles.industryCardDesktopHidden : ""}`}

              data-reveal={isExtra ? undefined : ""}
              style={{ "--d": `${(i % 5) * 90}ms` } as React.CSSProperties}
              key={ind.label}
            >
              <img src={asset(ind.image)} alt="" width={400} height={420} loading="lazy" decoding="async" />
              <span className={styles.industryBadge}>
                <img loading="lazy" decoding="async" src={asset(ind.icon)} alt="" width={18} height={18} />
              </span>
              <h3>{ind.label}</h3>
            </li>
          );
        })}
      </ul>
     
    </>
  );
}
