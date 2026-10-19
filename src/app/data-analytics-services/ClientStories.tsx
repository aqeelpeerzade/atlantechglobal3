"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";

export type Story = { quote: string; name: string; role: string };

const pad = (n: number) => String(n).padStart(2, "0");
const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function ClientStories({ items }: { items: Story[] }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);

  function go(step: number) {
    const next = (active + step + items.length) % items.length;
    setActive(next);
    // On mobile the cards sit in a horizontal scroller; bring the selected one into view.
    const track = trackRef.current;
    const card = track?.children[next] as HTMLElement | undefined;
    if (track && card && track.scrollWidth > track.clientWidth) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  }

  return (
    <>
      <div className={styles.storiesHead}>
        <h2 className={styles.title}>
          Data Analytics Success Through <span className={styles.gradText}>Client Experiences</span>
        </h2>
        <div className={styles.storiesNav}>
          <span className={styles.mono} aria-live="polite">
            {pad(active + 1)} / {pad(items.length)}
          </span>
          <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" aria-label="Next testimonial" onClick={() => go(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <ul className={styles.stories} ref={trackRef}>
        {items.map((s, i) => (
          <li key={s.name} className={`${styles.story}${i === active ? ` ${styles.storyActive}` : ""}`}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>{s.quote}</blockquote>
            <div className={styles.author}>
              <span className={styles.avatar}>{initials(s.name)}</span>
              <span>
                <b>{s.name}</b>
                <small>{s.role}</small>
              </span>
            </div>
          </li>
        ))}
        <li className={styles.scorecard}>
          <small>GLOBAL SCORECARD</small>
          <b>4.9 / 5.0 Rating</b>
          <p>Across 140+ enterprise data engagements spanning North America, Europe, APAC, and the Middle East.</p>
          <strong>100% Client Renewal on SLA Contracts</strong>
        </li>
      </ul>
    </>
  );
}
