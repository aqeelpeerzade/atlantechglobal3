"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type GoogleCloudFaqItem = { q: string; a: string };

export default function GoogleCloudFaq({ items }: { items: GoogleCloudFaqItem[] }) {
    // Every item starts open (as in the design); each one toggles independently.
    const [open, setOpen] = useState<Set<number>>(() => new Set([-1]));

    const toggle = (i: number) =>
        setOpen((prev) => {
            const next = new Set(prev);
            if (next.has(i)) next.delete(i);
            else next.add(i);
            return next;
        });

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
                const isOpen = open.has(i);
                return (
                    <div key={item.q} className={`${styles.faqItem}${isOpen ? ` ${styles.faqOpen}` : ""}`}>
                        <h3>
                            <button
                                type="button"
                                className={styles.faqQ}
                                aria-expanded={isOpen}
                                aria-controls={`gc-faq-${i}`}
                                onClick={() => toggle(i)}
                            >
                                <span className={styles.faqText}>{item.q}</span>
                                <span className={styles.faqIconWrap}>
                                    <svg className={styles.faqIcon} viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M6 12h12" />
                                        <path className={styles.faqPlusV} d="M12 6v12" />
                                    </svg>
                                </span>
                            </button>
                        </h3>
                        <div className={styles.faqA} id={`gc-faq-${i}`}>
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