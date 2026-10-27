import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import MdsFaq, { type MdsFaqItem } from "./mdsfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Modern Data Stack Solutions for Scalable Analytics | Atlantech Global",
    description:
        "Build a connected, flexible data ecosystem with Modern Data Stack solutions for data integration, transformation, storage and analytics from Atlantech Global.",
    alternates: { canonical: "/data-analytics/modern-data-stack/" },
};

/** Where the "Data Analytics Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/data-analytics-services";
/** Hero image in /public/images. */
const HERO_IMAGE = "/images/digital-growth.jpg";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
    `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
    external: "M7 17L17 7M8 7h9v9",
    arrow: "M5 12h14M13 6l6 6-6 6",
    tick: "M5 12.5l4.5 4.5L19 7.5",
    tickCircle: c(12, 12, 9) + "M8.5 12l2.5 2.5 4.5-5",
    cube: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9",
    /* services */
    layers: "M12 3l9 5-9 5-9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5",
    database: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6",
    nodes: c(12, 12, 2.4) + c(12, 4, 1.6) + c(4.5, 16.5, 1.6) + c(19.5, 16.5, 1.6) + "M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3",
    gear: c(12, 12, 3) + "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1",
    bars: "M5 20v-6M10 20V8M15 20v-9M20 20V4",
    /* benefits */
    scale: "M12 4v16M8 8l4-4 4 4M8 16l4 4 4-4",
    bolt: "M13 3L5 14h6l-1 7 8-11h-6z",
    sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z",
    swap: "M4 8h13M14 4l4 4-4 4M20 16H7M10 12l-4 4 4 4",
    ai: r(5, 7, 14, 12, 3) + "M12 3v4M9 13h.01M15 13h.01M9 16.5h6",
} as const;

type IconName = keyof typeof paths;

function Ic({ name }: { name: IconName }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={paths[name]} />
        </svg>
    );
}

const pad = (n: number) => String(n).padStart(2, "0");

const ecosystem: string[] = [
    "Connect cloud data platforms and business applications.",
    "Automate data transformation and workflows.",
    "Scale infrastructure as data volumes increase.",
    "Simplify analytics and reporting.",
    "Support modern AI and data initiatives.",
];

const services: { icon: IconName; title: string; desc: string }[] = [
    { icon: "layers", title: "Data Platform Architecture", desc: "Design an ecosystem aligned with business needs." },
    { icon: "database", title: "Cloud Data Warehousing", desc: "Organize and manage analytical data in the cloud." },
    { icon: "nodes", title: "Data Integration", desc: "Connect data sources and applications." },
    { icon: "gear", title: "Transformation & Orchestration", desc: "Automate data processing and workflows." },
    { icon: "bars", title: "Analytics Integration", desc: "Connect data platforms with reporting and BI tools." },
];

const layers: { title: string; desc: string }[] = [
    { title: "Data sources", desc: "Collect information from business systems" },
    { title: "Data ingestion", desc: "Move data into the platform" },
    { title: "Data storage", desc: "Organize data for analysis" },
    { title: "Transformation", desc: "Clean and prepare data" },
    { title: "Orchestration", desc: "Coordinate automated workflows" },
    { title: "Analytics", desc: "Turn prepared data into insights" },
];

const approach: string[] = [
    "Assess existing tools and infrastructure.",
    "Identify integration and performance gaps.",
    "Select technologies based on actual requirements.",
    "Automate repetitive data operations.",
    "Introduce improvements in manageable phases.",
];

const benefits: { icon: IconName; text: string }[] = [
    { icon: "scale", text: "Flexible and scalable data infrastructure." },
    { icon: "bolt", text: "More efficient data processing." },
    { icon: "sparkle", text: "Reduced manual data preparation." },
    { icon: "swap", text: "Easier integration across systems." },
    { icon: "ai", text: "A foundation for advanced analytics and AI." },
];

const faqs: MdsFaqItem[] = [
    {
        q: "What is a modern data stack?",
        a: "A modern data stack is a collection of cloud-based and integrated technologies used to ingest, store, transform, manage, and analyze business data.",
    },
    {
        q: "What are the main components of a modern data stack?",
        a: "The main components typically include data ingestion, cloud storage or warehousing, transformation, orchestration, data quality, and analytics tools.",
    },
    {
        q: "How does a modern data stack help businesses?",
        a: "It helps businesses automate data workflows, connect multiple sources, scale data operations, and make data more accessible for analytics.",
    },
    {
        q: "What is the difference between a data warehouse and a modern data stack?",
        a: "A data warehouse is a platform for storing and analyzing data. A modern data stack includes the warehouse along with the tools and processes used to collect, transform, orchestrate, and analyze data.",
    },
];

function CenterHead({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <div className={styles.headCenter}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}

export default function ModernDataStackPage() {
    return (
        <div className={styles.page}>
            <div className={styles.panel}>
                {/* ---------- Hero ---------- */}
                <section className={styles.heroWrap}>
                    <nav className={styles.crumbBar} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">›</span>
                        <Link href={PARENT_HREF}>Data Analytics Services</Link>
                        <span aria-hidden="true">›</span>
                        <span className={styles.crumbCurrent} aria-current="page">
                            Modern Data Stack
                        </span>
                    </nav>
                    <div className={styles.hero}>
                        <div className={styles.heroGrid}>
                            <div>
                                <span className={styles.eyebrowPill}>
                                    <span className={styles.pillDot} />
                                    WHAT WE DO
                                </span>
                                <h1 className={styles.heroTitle}>
                                    Modern Data Stack <span className={styles.gradText}>Solutions for Scalable Analytics</span>
                                </h1>
                                <p className={styles.heroCopy}>
                                    Build a connected, flexible data ecosystem with Modern Data Stack Solutions that simplify data
                                    integration, transformation, storage, and analytics across your organization.
                                </p>
                                <Link href="/contact" className={styles.solidBtn}>
                                    Modernize Your Data Infrastructure
                                    <Ic name="external" />
                                </Link>
                            </div>

                            <div className={styles.heroArtCard}>
                                <img
                                    className={styles.heroImg}
                                    src={asset(HERO_IMAGE)}
                                    alt="Isometric purple data platform connecting ingestion, storage, transformation and analytics layers"
                                    width={892}
                                    height={600}
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Ecosystem ---------- */}
                <section className={styles.section}>
                    <div className={styles.ecoGrid}>
                        <div>
                            <p className={styles.eyebrow}>FOUNDATIONAL ARCHITECTURE</p>
                            <h2 className={`${styles.title} ${styles.titleLeft}`}>Build a Data Ecosystem That Works Together</h2>
                            <p className={styles.lead}>Bring the right technologies together to make data more accessible and useful.</p>
                            <div className={styles.stackCard}>
                                <span className={styles.tile36}>
                                    <Ic name="cube" />
                                </span>
                                <span className={styles.stackText}>
                                    <b>Integrated Tech Stack</b>
                                    <small>Connected, flexible data ecosystem</small>
                                </span>
                            </div>
                        </div>
                        <ul className={styles.ecoList}>
                            {ecosystem.map((e) => (
                                <li key={e}>
                                    <span className={styles.tickCircle}>
                                        <Ic name="tick" />
                                    </span>
                                    {e}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ---------- Services ---------- */}
                <section className={styles.section}>
                    <CenterHead eyebrow="OUR CAPABILITIES" title="Our Modern Data Stack Services" />
                    <ul className={styles.serviceGrid}>
                        {services.map((s) => (
                            <li key={s.title}>
                                <span className={styles.tile36}>
                                    <Ic name={s.icon} />
                                </span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- Layers ---------- */}
                <section className={styles.section}>
                    <CenterHead eyebrow="INTEGRATED PIPELINE" title="Connect the Core Layers of Your Data Stack" />
                    <ol className={styles.layerGrid}>
                        {layers.map((l, i) => {
                            const last = i === layers.length - 1;
                            return (
                                <li key={l.title}>
                                    <span className={styles.layerTop}>
                                        <span className={styles.layerNum}>{pad(i + 1)}</span>
                                        <Ic name={last ? "tick" : "arrow"} />
                                    </span>
                                    <h3>{l.title}</h3>
                                    <p>{l.desc}</p>
                                </li>
                            );
                        })}
                    </ol>
                </section>

                {/* ---------- Approach ---------- */}
                <section className={styles.section}>
                    <CenterHead eyebrow="STRATEGIC APPROACH" title="Modernize Without Unnecessary Complexity" />
                    <ol className={styles.approachGrid}>
                        {approach.map((a, i) => (
                            <li key={a}>
                                <span className={styles.approachNum}>{pad(i + 1)}</span>
                                <p>{a}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ---------- Benefits ---------- */}
                <section className={styles.section}>
                    <CenterHead eyebrow="VALUE DELIVERED" title="Business Benefits" />
                    <ul className={styles.benefitGrid}>
                        {benefits.map((b) => (
                            <li key={b.text}>
                                <span className={styles.tile36}>
                                    <Ic name={b.icon} />
                                </span>
                                <h3>{b.text}</h3>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- CTA ---------- */}
                <section className={`${styles.section} ${styles.ctaSection}`}>
                    <div className={styles.ctaCard}>
                        <h2>Modernize Your Data Infrastructure</h2>
                        <Link href="/contact" className={styles.solidBtn}>
                            Modernize Your Data Infrastructure
                            <Ic name="external" />
                        </Link>
                    </div>
                </section>

                {/* ---------- FAQ ---------- */}
                <section className={`${styles.section} ${styles.sectionFaq}`} id="faq">
                    <CenterHead eyebrow="CLARITY & PERSPECTIVE" title="Frequently Asked Questions About Modern Data Stack" />
                    <div className={styles.faqWrap}>
                        <MdsFaq items={faqs} />
                    </div>
                </section>
            </div>
        </div>
    );
}