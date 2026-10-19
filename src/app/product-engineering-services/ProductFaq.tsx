"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type ProductFaqItem = {
  q: string;
  /** Ek string ya multiple paragraphs (purane items me string hi chalega). */
  a: string | string[];
  /** Optional lead-in sentence plus a bullet list rendered after the paragraphs. */
  list?: { intro: string; items: string[] };
  /** Optional closing line jo bullets ke baad dikhegi. */
  outro?: string;
};

export default function ProductFaq({ items }: { items: ProductFaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  const toParas = (a: string | string[]) => (Array.isArray(a) ? a : [a]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: [
          ...toParas(item.a),
          ...(item.list ? [`${item.list.intro} ${item.list.items.join(" ")}`] : []),
          ...(item.outro ? [item.outro] : []),
        ].join(" "),
      },
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
                aria-controls={`product-faq-${i}`}
                onClick={() => setOpen((prev) => (prev === i ? null : i))}
              >
                <span className={styles.faqText}>{item.q}</span>
                {/* the plus rotates into a × when open */}
                <svg className={styles.faqIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </h3>
            <div className={styles.faqA} id={`product-faq-${i}`}>
              <div>
                <div className={styles.faqBody}>
                  {toParas(item.a).map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                  {item.list && (
                    <>
                      <p>{item.list.intro}</p>
                      <ul>
                        {item.list.items.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {item.outro && <p>{item.outro}</p>}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}