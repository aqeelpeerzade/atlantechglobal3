"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type SecureCloudFaqItem = { q: string; a: string };

export default function SecureCloudFaq({ items }: { items: SecureCloudFaqItem[] }) {
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
                aria-controls={`sca-faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={styles.faqText}>{item.q}</span>
                {/* the plus loses its vertical stroke when open, leaving a minus */}
                <svg className={styles.faqIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path className={styles.faqPlusV} d="M12 5v14" />
                </svg>
              </button>
            </h3>
            <div className={styles.faqA} id={`sca-faq-${i}`}>
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