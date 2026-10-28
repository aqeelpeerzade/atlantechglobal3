"use client";

import { useEffect, useState } from "react";
import { QuoteIcon } from "@/lib/icons";
import { asset } from "@/lib/asset";
import styles from "./page.module.css";

export type Testimonial = {
  quote: [before: string, highlight: string, after: string];
  name: string;
  role: string;
  initials: string;
  photo: string;
};

export default function Testimonials({ items, interval = 5000 }: { items: Testimonial[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = items[index];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [paused, index, items.length, interval]);

  return (
    <div
      className={styles.testiWrap}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <figure className={styles.testiCard} key={index}>
        <div className={styles.testiPhoto}>
          <img src={asset(t.photo)} alt={t.name} width={400} height={400} loading="lazy" decoding="async" />
        </div>
        <div className={styles.testiContent}>
          <QuoteIcon className={styles.testiQuoteIcon} />
          <blockquote className={styles.testiQuote}>
            &ldquo;{t.quote[0]}
            <span className="text-purple">{t.quote[1]}</span>
            {t.quote[2]}&rdquo;
          </blockquote>
          <figcaption className={styles.testiAuthor}>
            <span className={styles.testiAvatar} aria-hidden="true">
              {t.initials}
            </span>
            <span>
              <span className={styles.testiName}>{t.name}</span>
              <span className={styles.testiRole}>{t.role}</span>
            </span>
            <img loading="lazy" decoding="async" src={asset("/images/5-star.svg")} alt="Rated 5 out of 5" className={styles.testiStars} width={90} height={16} />
          </figcaption>
        </div>
      </figure>

      <div className={styles.testiDots}>
        {items.map((item, i) => (
          <button
            key={item.name}
            type="button"
            className={`${styles.testiDot}${i === index ? ` ${styles.testiActive}` : ""}`}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
