import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import DataEngineeringFaq, { type DataEngineeringFaqItem } from "./dataengineeringfaq";
import styles from "./page.module.css";

/* The content document has no meta title or description for this page, so these are drafted from its copy. */
export const metadata: Metadata = {
    title: "Data Engineering Services",
    description:
        "Data Engineering Services that connect, process and organize business data: data pipelines, integration, warehousing, ETL and ELT, and data quality from Atlantech Global.",
    alternates: { canonical: "/data-analytics/data-engineering/" },
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
            <circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" />
            <path d="M8 12.5l3 3 5-6" stroke="#fff" />
        </Icon>
    ),
    fork: (
        <Icon>
            <path d="M12 21v-8M12 13L6 7M12 13l6-6M6 7V3M18 7V3" />
        </Icon>
    ),
    hub: (
        <Icon>
            <circle cx="12" cy="12" r="2.4" />
            <circle cx="12" cy="4" r="1.6" />
            <circle cx="4.5" cy="16.5" r="1.6" />
            <circle cx="19.5" cy="16.5" r="1.6" />
            <path d="M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3" />
        </Icon>
    ),
    database: (
        <Icon>
            <ellipse cx="12" cy="6" rx="7" ry="3" />
            <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </Icon>
    ),
    swap: (
        <Icon>
            <path d="M7 4L3 8l4 4M3 8h17M17 12l4 4-4 4M21 16H4" />
        </Icon>
    ),
    shieldCheck: (
        <Icon>
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
            <path d="M9 12l2 2 4-4" />
        </Icon>
    ),
    cloud: (
        <Icon>
            <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 .5 9.5z" />
        </Icon>
    ),
    list: (
        <Icon>
            <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />
        </Icon>
    ),
    sync: (
        <Icon>
            <path d="M20 12a8 8 0 0 0-14-5.3L4 9M4 4v5h5M4 12a8 8 0 0 0 14 5.3L20 15M20 20v-5h-5" />
        </Icon>
    ),
    gauge: (
        <Icon>
            <path d="M4 17a8 8 0 1 1 16 0M12 17l4-5M7 17h.01M17 17h.01" />
        </Icon>
    ),
    lock: (
        <Icon>
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2" />
        </Icon>
    ),
    chip: (
        <Icon>
            <rect x="6" y="6" width="12" height="12" rx="2" />
            <rect x="10" y="10" width="4" height="4" />
            <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
        </Icon>
    ),
    login: (
        <Icon>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M9 12h7M13 9l3 3-3 3" />
        </Icon>
    ),
    merge: (
        <Icon>
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="6" r="2" />
            <circle cx="12" cy="18" r="2" />
            <path d="M6 8c0 4 6 4 6 8M18 8c0 4-6 4-6 8" />
        </Icon>
    ),
    transform: (
        <Icon>
            <path d="M8 4v4a3 3 0 0 0 3 3h2a3 3 0 0 1 3 3v6M5 7l3-3 3 3M13 17l3 3 3-3" />
        </Icon>
    ),
    validate: (
        <Icon>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M9 12.5l2 2 4-4.5" />
        </Icon>
    ),
    deliver: (
        <Icon>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M12 15V9M9 12l3-3 3 3" />
        </Icon>
    ),
    bolt: (
        <Icon>
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </Icon>
    ),
    flow: (
        <Icon>
            <rect x="3" y="4" width="6" height="5" rx="1" />
            <rect x="15" y="4" width="6" height="5" rx="1" />
            <rect x="15" y="15" width="6" height="5" rx="1" />
            <path d="M9 6.5h6M18 9v6M6 9v8h9" />
        </Icon>
    ),
    verified: (
        <Icon>
            <circle cx="12" cy="12" r="9" />
            <path d="M8.5 12.5l2.5 2.5 4.5-5" />
        </Icon>
    ),
    layers: (
        <Icon>
            <path d="M12 4l8 4-8 4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
        </Icon>
    ),
    brain: (
        <Icon>
            <path d="M12 3a6 6 0 0 0-6 6c0 2 1 3.3 2 4.5.8 1 1 1.8 1 3V19h6v-2.5c0-1.2.2-2 1-3C17 12.3 18 11 18 9a6 6 0 0 0-6-6z" />
            <circle cx="12" cy="9" r="1.5" />
        </Icon>
    ),
    arrow: (
        <Icon>
            <path d="M5 12h14M13 6l6 6-6 6" />
        </Icon>
    ),
    chevronRight: (
        <Icon>
            <path d="M9 6l6 6-6 6" />
        </Icon>
    ),
    structure: (
        <Icon>
            <rect x="9" y="3" width="6" height="5" rx="1" />
            <rect x="3" y="16" width="6" height="5" rx="1" />
            <rect x="15" y="16" width="6" height="5" rx="1" />
            <path d="M12 8v4M6 16v-4h12v4" />
        </Icon>
    ),
};

/* ---- Section 1 ---- */
const usable = [
    "Connect data from multiple sources.",
    "Reduce manual data processing.",
    "Improve data quality and accessibility.",
    "Support real-time and batch data processing.",
    "Prepare data for analytics and AI initiatives.",
];

/* ---- Section 2 ---- */
const services = [
    { icon: icons.fork, title: "Data Pipeline Development", desc: "Build automated workflows to collect and process data.", featured: true },
    { icon: icons.hub, title: "Data Integration", desc: "Connect business applications, databases, and external sources." },
    { icon: icons.database, title: "Data Warehouse Development", desc: "Organize structured data for reporting and analysis." },
    { icon: icons.swap, title: "ETL & ELT Solutions", desc: "Transform and load data into suitable platforms." },
    { icon: icons.shieldCheck, title: "Data Quality Management", desc: "Identify inconsistencies and improve data reliability." },
];

/* ---- Section 3 ---- */
const archLeft = [
    { icon: icons.cloud, label: "Cloud-based data platforms" },
    { icon: icons.list, label: "Centralized data storage" },
];
const archRight = [
    { icon: icons.sync, label: "Automated data workflows" },
    { icon: icons.gauge, label: "Scalable processing infrastructure" },
    { icon: icons.lock, label: "Secure data access and integration" },
];

/* ---- Section 4 ---- */
const stages = [
    { icon: icons.login, name: "COLLECT" },
    { icon: icons.merge, name: "INTEGRATE" },
    { icon: icons.transform, name: "TRANSFORM" },
    { icon: icons.validate, name: "VALIDATE" },
    { icon: icons.deliver, name: "DELIVER" },
];

/* ---- Section 5 ---- */
const benefits = [
    { icon: icons.bolt, text: "Faster access to business data.", span: 2 },
    { icon: icons.flow, text: "Reduced data silos and manual work.", span: 2 },
    { icon: icons.verified, text: "Improved reporting accuracy.", span: 2 },
    { icon: icons.layers, text: "Scalable analytics infrastructure.", span: 2 },
    { icon: icons.brain, text: "A stronger foundation for AI and advanced analytics.", span: 4 },
];

/* ---- Section 6 (copy from the content document) ---- */
const faqs: DataEngineeringFaqItem[] = [
    {
        q: "What are Data Engineering Services?",
        a: "Data Engineering Services involve collecting, integrating, transforming, and organizing data so businesses can use it for analytics, reporting, and decision-making.",
    },
    {
        q: "What is the difference between ETL and ELT?",
        a: "ETL transforms data before loading it into the target system. ELT loads data first and transforms it within the destination platform.",
    },
    {
        q: "Why is data engineering important for businesses?",
        a: "Data engineering helps businesses manage large and disconnected datasets, improve data reliability, and make information accessible for analysis.",
    },
    {
        q: "What is a data pipeline?",
        a: "A data pipeline is a sequence of automated steps that moves and processes data between systems or platforms.",
    },
];

const pad = (n: number) => String(n).padStart(2, "0");

/** Small pipeline graphic: several sources feed one processing node, which fans out to outputs. */
function PipelineGraphic() {
    return (
        <svg className={styles.pipeSvg} viewBox="0 0 300 120" role="img" aria-label="Several data sources feeding a processing node that fans out to outputs">
            <g className={styles.pipeLinesDash}>
                <path d="M62 24C95 24 100 60 130 60" />
                <path d="M62 96C95 96 100 60 130 60" />
            </g>
            <path d="M62 60H130" className={styles.pipeLineSolid} />
            <g className={styles.pipeLinesOut}>
                <path d="M170 60C196 60 196 30 238 30" />
                <path d="M170 60H238" />
                <path d="M170 60C196 60 196 90 238 90" />
            </g>
            <circle cx="62" cy="24" r="4" className={styles.dotLight} />
            <circle cx="62" cy="60" r="4.5" className={styles.dotDark} />
            <circle cx="62" cy="96" r="4" className={styles.dotLight} />
            <circle cx="238" cy="30" r="4" className={styles.dotIndigo} />
            <circle cx="238" cy="60" r="4" className={styles.dotIndigo} />
            <circle cx="238" cy="90" r="4" className={styles.dotIndigo} />
            <rect x="130" y="40" width="40" height="40" rx="9" className={styles.pipeCore} />
            <path d="M144 52l12 8-12 8" className={styles.pipeChevron} />
        </svg>
    );
}

export default function DataEngineeringPage() {
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
                            Data Engineering
                        </span>
                    </nav>

                    <div className={styles.heroGrid}>
                        <div>
                            <span className={styles.eyebrowPill}>
                                <span className={styles.pillDot} />
                                DATA ENGINEERING
                            </span>
                            <h1 className={styles.heroTitle}>
                                Data Engineering Services That <span className={styles.accent}>Turn Data into Business Value</span>
                            </h1>
                            <p className={styles.heroCopy}>
                                Build a reliable data foundation with scalable Data Engineering Services that connect, process, and
                                organize business data for better decision-making.
                            </p>
                            <Link href="/contact" className={styles.primaryBtn}>
                                Build Your Data Foundation
                                {icons.arrow}
                            </Link>
                        </div>

                        <div className={styles.heroArtWrap}>
                            <span className={styles.heroBlock} aria-hidden="true" />
                            <div className={styles.heroArt}>
                                <img
                                    src={asset(HERO_IMAGE)}
                                    alt="Connected data pipelines and infrastructure for scalable data engineering"
                                    width={1200}
                                    height={640}
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Section 1: Disconnected data to insights ---------- */}
            <section className={styles.section}>
                <div className={`container ${styles.usableGrid}`}>
                    <div>
                        <p className={styles.eyebrow}>FOUNDATIONAL DATA PIPELINES</p>
                        <h2 className={styles.title}>Turn Disconnected Data into Usable Insights</h2>
                        <p className={styles.lead}>Make business data easier to access, manage, and analyze.</p>
                        <div className={styles.pipeCard}>
                            <PipelineGraphic />
                        </div>
                    </div>

                    <ul className={styles.usableList}>
                        {usable.map((u) => (
                            <li key={u}>
                                <span className={styles.checkIcon}>{icons.check}</span>
                                {u}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------- Section 2: Services ---------- */}
            <section className={`${styles.section} ${styles.paleSection}`}>
                <div className="container">
                    <h2 className={`${styles.title} ${styles.center}`}>Our Data Engineering Services</h2>

                    <ul className={styles.svcGrid}>
                        {services.map((s) => (
                            <li className={`${styles.svcCard}${s.featured ? ` ${styles.svcFeatured}` : ""}`} key={s.title}>
                                <span className={`${styles.iconTile}${s.featured ? ` ${styles.iconSolid}` : ""}`}>{s.icon}</span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------- Section 3: Scalable architecture ---------- */}
            <section className={`${styles.section} ${styles.tintSection}`}>
                <div className="container">
                    <div className={styles.centerHead}>
                        <h2 className={styles.title}>Build a Scalable Data Architecture</h2>
                        <p className={styles.lead}>Create a data environment that supports growing business requirements.</p>
                    </div>

                    <div className={styles.archGrid}>
                        <ul className={styles.archLeft}>
                            {archLeft.map((a) => (
                                <li key={a.label}>
                                    <span className={styles.iconTile}>{a.icon}</span>
                                    {a.label}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.chipFrame} aria-hidden="true">
                            <div className={styles.chipInner}>
                                <span className={styles.chipTile}>{icons.chip}</span>
                            </div>
                        </div>
                        <ul className={styles.archRight}>
                            {archRight.map((a) => (
                                <li key={a.label}>
                                    <span className={styles.iconTile}>{a.icon}</span>
                                    {a.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- Section 4: Raw data to business-ready data ---------- */}
            <section className={`${styles.section} ${styles.tintSection} ${styles.noTopPad}`}>
                <div className="container">
                    <div className={styles.centerHead}>
                        <h2 className={styles.title}>From Raw Data to Business-Ready Data</h2>
                    </div>
                    <ol className={styles.stages}>
                        {stages.map((s, i) => (
                            <li className={styles.stageCard} key={s.name}>
                                <small>Stage {pad(i + 1)}</small>
                                <span className={styles.stageIcon}>{s.icon}</span>
                                <b>{s.name}</b>
                            </li>
                        ))}
                    </ol>
                    <p className={styles.stageNote}>
                        Our structured approach helps ensure data is consistent, accessible, and ready for analytics.
                    </p>
                </div>
            </section>

            {/* ---------- Section 5: Business benefits ---------- */}
            <section className={`${styles.section} ${styles.paleSection}`}>
                <div className="container">
                    <h2 className={`${styles.title} ${styles.center}`}>Business Benefits</h2>
                    <ul className={styles.benefitGrid}>
                        {benefits.map((b) => (
                            <li className={b.span === 4 ? styles.benefitWide : styles.benefitCard} key={b.text}>
                                <span className={styles.benefitIcon}>{b.icon}</span>
                                <p>{b.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------- Section 6: FAQ ---------- */}
            <section className={`${styles.section} ${styles.tintSection}`} id="faq">
                <div className={`container ${styles.faqGrid}`}>
                    <div>
                        <h2 className={styles.title}>Frequently Asked Questions About Data Engineering</h2>
                        <div className={styles.clarity}>
                            <p className={styles.clarityHead}>
                                {icons.structure}
                                Data Architecture Clarity
                            </p>
                            <p>Comprehensive guidance to structure, govern, and streamline institutional information flows.</p>
                        </div>
                    </div>
                    <DataEngineeringFaq items={faqs} />
                </div>
            </section>
        </div>
    );
}