"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type DxFaqItem = { q: string; a: string };

export default function DxFaq({ items }: { items: DxFaqItem[] }) {
    // The design shows every answer expanded, so all items start open; each can still be toggled.
    const [open, setOpen] = useState<Set<number>>(() => new Set(items.map((_, i) => i)));
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
                                id={`dx-faq-btn-${i}`}
                                className={styles.faqQ}
                                aria-expanded={isOpen}
                                aria-controls={`dx-faq-${i}`}
                                onClick={() => toggle(i)}
                            >
                                <span className={styles.faqText}>{item.q}</span>
                                <span className={styles.faqChev} aria-hidden="true">
                                    <svg className={styles.faqChevron} viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </button>
                        </h3>
                        <div className={styles.faqA} id={`dx-faq-${i}`} role="region" aria-labelledby={`dx-faq-btn-${i}`}>
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