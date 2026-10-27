import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import GovernanceFaq, { type GovernanceFaqItem } from "./governancefaq";
import styles from "./page.module.css";

/* The content document has no meta title or description for this page, so these are drafted from its copy. */
export const metadata: Metadata = {
    title: "Data Governance Services",
    description:
        "Data Governance Services that help organizations manage data quality, ownership, access, and accountability, with consistent, secure, and reliable data practices from Atlantech Global.",
    alternates: { canonical: "/data-analytics/data-governance/" },
};

/** Hero image: public/images/google-cloud.jpg (as you named it). Change the file name here if you swap it. */
const HERO_IMAGE = "/images/google-cloud.jpg";

function Icon({ children }: { children: ReactNode }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            {children}
        </svg>
    );
}

const icons = {
    check: (
        <Icon>
            <path d="M5 12.5l4.5 4.5L19 7.5" />
        </Icon>
    ),
    arrow: (
        <Icon>
            <path d="M7 17L17 7M8 7h9v9" />
        </Icon>
    ),
    framework: (
        <Icon>
            <rect x="3" y="4" width="6" height="5" rx="1" />
            <rect x="15" y="4" width="6" height="5" rx="1" />
            <rect x="15" y="15" width="6" height="5" rx="1" />
            <path d="M9 6.5h6M18 9v6M6 9v8h9" />
        </Icon>
    ),
    quality: (
        <Icon>
            <circle cx="12" cy="12" r="9" />
            <path d="M8.5 12.5l2.5 2.5 4.5-5" />
        </Icon>
    ),
    book: (
        <Icon>
            <path d="M12 6c-2-1.5-5-2-8-2v13c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2zM12 6v13" />
        </Icon>
    ),
    shield: (
        <Icon>
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
            <circle cx="12" cy="11" r="2" />
            <path d="M12 13v2" />
        </Icon>
    ),
    grid: (
        <Icon>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01" strokeWidth="3" />
        </Icon>
    ),
    monitor: (
        <Icon>
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
            <circle cx="12" cy="11" r="2.5" />
            <path d="M14 13l2 2" />
        </Icon>
    ),
    lock: (
        <Icon>
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2" />
        </Icon>
    ),
    team: (
        <Icon>
            <circle cx="12" cy="8" r="2.5" />
            <circle cx="5.5" cy="10" r="2" />
            <circle cx="18.5" cy="10" r="2" />
            <path d="M7.5 19c0-2.5 2-4.2 4.5-4.2s4.5 1.7 4.5 4.2M2 18c0-1.7 1.5-3 3.5-3M22 18c0-1.7-1.5-3-3.5-3" />
        </Icon>
    ),
    doc: (
        <Icon>
            <path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h4" />
        </Icon>
    ),
    report: (
        <Icon>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 16v-4M12 16V8M16 16v-6M8 8h.01" />
        </Icon>
    ),
};

/* ---- Section 1 (copy from the content document) ---- */
const reliable = [
    "Improve data accuracy and consistency.",
    "Define clear data ownership.",
    "Establish controlled data access.",
    "Support regulatory and compliance requirements.",
    "Reduce confusion across data sources.",
];

/* ---- Section 2 ---- */
const services = [
    { icon: icons.framework, title: "Data Governance Framework", desc: "Define policies, roles, and responsibilities." },
    { icon: icons.quality, title: "Data Quality Management", desc: "Monitor accuracy, completeness, and consistency." },
    { icon: icons.book, title: "Data Cataloging", desc: "Improve data discovery and documentation." },
    { icon: icons.shield, title: "Access & Usage Policies", desc: "Establish appropriate access controls." },
    { icon: icons.grid, title: "Metadata Management", desc: "Organize information about business data." },
    { icon: icons.monitor, title: "Governance Monitoring", desc: "Review compliance with internal data policies." },
];

/* ---- Section 3 (copy from the content document; the small label on each card is design-only) ---- */
const ownership = [
    { label: "OWNERSHIP", text: "Identify data owners and stewards." },
    { label: "STANDARDS", text: "Set standards for data collection and usage." },
    { label: "DOCUMENTATION", text: "Document important datasets." },
    { label: "ACCESS", text: "Define access and approval processes." },
    { label: "RESOLUTION", text: "Establish processes for resolving data quality issues." },
];

/* ---- Section 4 ---- */
const lifecycle = ["Discover", "Define", "Implement", "Monitor", "Improve"];

/* ---- Section 5 ---- */
const benefits = [
    { icon: icons.quality, text: "More consistent and trustworthy data." },
    { icon: icons.lock, text: "Better control over sensitive information." },
    { icon: icons.team, text: "Clearer accountability across teams." },
    { icon: icons.doc, text: "Improved data accessibility and documentation." },
    { icon: icons.report, text: "Stronger support for compliance and reporting." },
];

/* ---- FAQ (copy from the content document) ---- */
const faqs: GovernanceFaqItem[] = [
    {
        q: "What is data governance?",
        a: "Data governance is the framework of policies, roles, standards, and processes used to manage data quality, access, security, and responsible use.",
    },
    {
        q: "Why is data governance important?",
        a: "Data governance helps businesses improve data reliability, manage access, reduce inconsistencies, and support applicable compliance requirements.",
    },
    {
        q: "What are the key components of data governance?",
        a: "Key components include data ownership, quality management, metadata, access policies, documentation, monitoring, and accountability.",
    },
    {
        q: "How does data governance improve data quality?",
        a: "It establishes standards, assigns responsibility, and introduces processes to identify, monitor, and correct data quality issues.",
    },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function DataGovernancePage() {
    return (
        <div className={styles.page}>
            {/* ---------- Hero ---------- */}
            <section className={styles.hero}>
                <div className="container">
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">›</span>
                        <Link href="/data-analytics-services">Data Analytics Services</Link>
                        <span aria-hidden="true">›</span>
                        <span className={styles.crumbCurrent} aria-current="page">
                            Data Governance
                        </span>
                    </nav>

                    <div className={styles.heroGrid}>
                        <div>
                            <span className={styles.eyebrowPill}>
                                <span className={styles.pillDot} />
                                WHAT WE DO
                            </span>
                            <h1 className={styles.heroTitle}>
                                Data Governance Services for <span className={styles.accent}>Trusted Business Data</span>
                            </h1>
                            <p className={styles.heroCopy}>
                                Create consistent, secure, and reliable data practices with Data Governance Services that help
                                organizations manage data quality, ownership, access, and accountability.
                            </p>
                            <Link href="/contact" className={styles.primaryBtn}>
                                Strengthen Your Data Governance
                                {icons.arrow}
                            </Link>
                        </div>

                        <div className={styles.heroArtWrap}>
                            <div className={styles.heroArt}>
                                <img
                                    src={asset(HERO_IMAGE)}
                                    alt="Governed, connected data platform with controlled access and ownership"
                                    width={1200}
                                    height={800}
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Section 1: More reliable data ---------- */}
            <section className={`${styles.section} ${styles.tintSection}`}>
                <div className={`container ${styles.reliableGrid}`}>
                    <div>
                        <p className={styles.eyebrow}>ENTERPRISE ASSURANCE</p>
                        <h2 className={styles.title}>Make Your Business Data More Reliable</h2>
                        <p className={styles.lead}>Good decisions depend on data that teams can trust and use responsibly.</p>
                    </div>
                    <ul className={styles.reliableList}>
                        {reliable.map((r) => (
                            <li key={r}>
                                <span className={styles.checkChip}>{icons.check}</span>
                                {r}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------- Section 2: Services ---------- */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.centerHead}>
                        <p className={styles.eyebrow}>CORE CAPABILITIES</p>
                        <h2 className={styles.title}>Our Data Governance Services</h2>
                    </div>
                    <ul className={styles.svcGrid}>
                        {services.map((s) => (
                            <li className={styles.svcCard} key={s.title}>
                                <span className={styles.iconTile}>{s.icon}</span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <span className={styles.cardBar} aria-hidden="true" />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------- Section 3: Data ownership ---------- */}
            <section className={`${styles.section} ${styles.tintSection}`}>
                <div className="container">
                    <p className={styles.eyebrow}>SYSTEMATIC PROTOCOL</p>
                    <h2 className={styles.title}>Establish Clear Data Ownership</h2>
                    <p className={styles.lead}>Build accountability across departments with defined responsibilities.</p>

                    <ol className={styles.ownGrid}>
                        {ownership.map((o, i) => (
                            <li className={styles.ownCard} key={o.label}>
                                <div className={styles.ownTop}>
                                    <span className={styles.ownNum}>{i + 1}</span>
                                    <span className={styles.ownLabel}>{o.label}</span>
                                </div>
                                <p>{o.text}</p>
                                <span className={styles.cardBar} aria-hidden="true" />
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------- Section 4: Governance framework ---------- */}
            <section className={`${styles.section} ${styles.paleSection}`}>
                <div className="container">
                    <div className={styles.centerHead}>
                        <p className={styles.eyebrow}>EXECUTION LIFECYCLE</p>
                        <h2 className={styles.title}>Create a Consistent Governance Framework</h2>
                        <p className={styles.lead}>
                            Start by understanding existing data practices, then establish policies and continuously review their
                            effectiveness.
                        </p>
                    </div>

                    <ol className={styles.lifecycle}>
                        {lifecycle.map((l, i) => (
                            <li key={l}>
                                <span className={styles.lifeNum}>{pad(i + 1)}</span>
                                <b>{l}</b>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------- Section 5: Business benefits ---------- */}
            <section className={`${styles.section} ${styles.tintSection}`}>
                <div className="container">
                    <p className={styles.eyebrow}>STRATEGIC VALUE</p>
                    <h2 className={styles.title}>Business Benefits</h2>
                    <ul className={styles.benefitGrid}>
                        {benefits.map((b) => (
                            <li className={styles.benefitCard} key={b.text}>
                                <span className={styles.iconTile}>{b.icon}</span>
                                <p>{b.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------- FAQ ---------- */}
            <section className={`${styles.section} ${styles.paleSection}`} id="faq">
                <div className="container">
                    <div className={styles.centerHead}>
                        <p className={styles.eyebrow}>COMMON INQUIRIES</p>
                        <h2 className={styles.title}>Frequently Asked Questions About Data Governance</h2>
                    </div>
                    <GovernanceFaq items={faqs} />
                </div>
            </section>
        </div>
    );
}