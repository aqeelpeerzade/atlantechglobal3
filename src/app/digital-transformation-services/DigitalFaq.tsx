"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type DigitalFaqItem = { q: string; a: string };

export default function DigitalFaq({ items }: { items: DigitalFaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className={styles.faqList}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`${styles.faqItem}${isOpen ? ` ${styles.faqOpen}` : ""}`}>
            <h3>
              <button
                type="button"
                className={styles.faqQ}
                aria-expanded={isOpen}
                aria-controls={`dt-faq-${i}`}
                onClick={() => setOpen((prev) => (prev === i ? null : i))}
              >
                <span className={styles.faqText}>{item.q}</span>
                {/* the plus rotates into a × when open */}
                <svg className={styles.faqIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </h3>
            <div className={styles.faqA} id={`dt-faq-${i}`}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
