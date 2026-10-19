"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type LlmFaqItem = { q: string; a: string };

export default function LlmFaq({ items }: { items: LlmFaqItem[] }) {
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
                id={`llm-faq-btn-${i}`}
                className={styles.faqQ}
                aria-expanded={isOpen}
                aria-controls={`llm-faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={styles.faqText}>{item.q}</span>
                <svg className={styles.faqChevron} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div className={styles.faqA} id={`llm-faq-${i}`} role="region" aria-labelledby={`llm-faq-btn-${i}`}>
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