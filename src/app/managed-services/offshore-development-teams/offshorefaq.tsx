"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type OffshoreFaqItem = { q: string; a: string };

export default function OffshoreFaq({ items }: { items: OffshoreFaqItem[] }) {
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
                                id={`od-faq-btn-${i}`}
                                className={styles.faqQ}
                                aria-expanded={isOpen}
                                aria-controls={`od-faq-${i}`}
                                onClick={() => setOpen(isOpen ? null : i)}
                            >
                                <span className={styles.faqText}>{item.q}</span>
                                <span className={styles.faqToggle}>
                                    {/* plus; the vertical stroke fades out when open, leaving a minus */}
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M5 12h14" />
                                        <path d="M12 5v14" className={styles.faqPlusV} />
                                    </svg>
                                </span>
                            </button>
                        </h3>
                        <div className={styles.faqA} id={`od-faq-${i}`} role="region" aria-labelledby={`od-faq-btn-${i}`}>
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