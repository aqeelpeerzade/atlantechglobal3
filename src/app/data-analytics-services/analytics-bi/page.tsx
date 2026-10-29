import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import BiFaq, { type BiFaqItem } from "./bifaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Business Intelligence Solutions & Analytics | Atlantech Global",
    description:
        "Convert complex business data into clear insights with business intelligence and analytics solutions that help teams monitor performance, identify trends and make informed decisions.",
    alternates: { canonical: "/data-analytics/analytics-bi/" },
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
    arrow: "M5 12h14M13 6l6 6-6 6",
    tickCircle: c(12, 12, 9) + "M8.5 12l2.5 2.5 4.5-5",
    /* section 1 */
    trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
    eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
    gaugeAuto: c(12, 12, 9) + "M12 12l4-4M7 16h.01M17 16h.01M12 7h.01",
    departments: c(12, 12, 2.4) + "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8",
    planning: c(12, 12, 8) + c(12, 12, 3.5) + "M12 2v3M12 19v3",
    database: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6",
    /* services */
    dashboard: r(4, 4, 7, 7, 1.5) + r(13, 4, 7, 7, 1.5) + r(4, 13, 7, 7, 1.5) + r(13, 13, 7, 7, 1.5),
    bars: "M5 20v-6M10 20V8M15 20v-9M20 20V4",
    analytics: c(9, 8, 3) + c(17, 16, 3) + "M12 10l3 4M6 20h2M3 17h2",
    refresh: "M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4",
    /* workflow */
    analyze: c(11, 11, 6) + "M20 20l-4.5-4.5M9 12l2-2 2 2 2-3",
    rocket: "M5 15c-1 1-1.5 3-1.5 5 2 0 4-.5 5-1.5M9 15l-3-3c1-4 4-7 9-8 4-.7 5 .3 4.5 4.5-1 5-4 8-8 9zM15 9h.01",
    /* benefits */
    bolt: "M13 3L5 14h6l-1 7 8-11h-6z",
    report: r(5, 3, 14, 18, 2) + "M9 8h6M9 12h6M9 16h3",
    flag: "M5 21V4M5 4h11l-2 4 2 4H5",
} as const;

type IconName = keyof typeof paths;

function Ic({ name }: { name: IconName }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={paths[name]} />
        </svg>
    );
}

const visibility: { icon: IconName; text: string }[] = [
    { icon: "trend", text: "Track key performance indicators." },
    { icon: "eye", text: "Identify trends and performance gaps." },
    { icon: "gaugeAuto", text: "Replace manual reporting with automated dashboards." },
    { icon: "departments", text: "Improve visibility across departments." },
    { icon: "planning", text: "Support data-driven planning." },
];

const services: { icon: IconName; title: string; desc: string }[] = [
    { icon: "dashboard", title: "Business Intelligence Dashboards", desc: "Create interactive dashboards for business performance." },
    { icon: "bars", title: "Data Visualization", desc: "Present complex data through clear charts and reports." },
    { icon: "analytics", title: "Advanced Data Analytics", desc: "Identify patterns and trends across business datasets." },
    { icon: "trend", title: "Predictive Analytics", desc: "Use historical data to support future planning." },
    { icon: "refresh", title: "Reporting Automation", desc: "Reduce repetitive reporting activities." },
];

const questions: { q: string; a: string }[] = [
    { q: "Which products perform best?", a: "Product and sales analysis" },
    { q: "Where are we losing revenue?", a: "Revenue and performance tracking" },
    { q: "Which customers are most engaged?", a: "Customer behavior analysis" },
    { q: "Are operations meeting targets?", a: "Operational dashboards" },
    { q: "What trends should we prepare for?", a: "Historical and predictive analysis" },
];

const flow: { icon: IconName; label: string }[] = [
    { icon: "database", label: "CONNECT" },
    { icon: "analyze", label: "ANALYZE" },
    { icon: "bars", label: "VISUALIZE" },
    { icon: "rocket", label: "ACT" },
];

const steps: string[] = [
    "Connect relevant business data.",
    "Define metrics and reporting requirements.",
    "Build dashboards and analytical models.",
    "Share insights with relevant teams.",
    "Refine reports as business needs evolve.",
];

const benefits: { icon: IconName; text: string }[] = [
    { icon: "bolt", text: "Faster and more informed decisions." },
    { icon: "eye", text: "Better visibility into business performance." },
    { icon: "report", text: "Reduced manual reporting effort." },
    { icon: "trend", text: "Improved identification of growth opportunities." },
    { icon: "flag", text: "Clearer alignment around measurable goals." },
];

const faqs: BiFaqItem[] = [
    {
        q: "What are Business Intelligence Solutions?",
        a: "Business Intelligence Solutions collect, organize, analyze, and visualize business data to help organizations monitor performance and make informed decisions.",
    },
    {
        q: "What is the difference between business intelligence and data analytics?",
        a: "Business intelligence focuses on understanding business performance through reports and dashboards. Data analytics also examines patterns, relationships, and potential future outcomes.",
    },
    {
        q: "How do BI dashboards help businesses?",
        a: "BI dashboards bring important metrics into a visual format, helping teams monitor performance, identify issues, and track progress.",
    },
    {
        q: "Can business intelligence tools integrate with existing systems?",
        a: "Yes. BI solutions can connect with compatible databases, business applications, spreadsheets, and cloud data platforms, depending on the available integrations.",
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

export default function AnalyticsBiPage() {
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
                            Analytics &amp; BI
                        </span>
                    </nav>
                    <div className={styles.hero}>
                        <div className={styles.heroGrid}>
                            <div>
                                <span className={styles.eyebrowPill}>
                                    <span className={styles.pillDot} />
                                    ANALYTICS &amp; BI
                                </span>
                                <h1 className={styles.heroTitle}>
                                    Business Intelligence Solutions for <span className={styles.gradText}>Smarter Decisions</span>
                                </h1>
                                <p className={styles.heroCopy}>
                                    Convert complex business data into clear insights with Business Intelligence Solutions that help
                                    teams monitor performance, identify trends, and make informed decisions.
                                </p>
                                <Link href="/contact" className={styles.solidBtn}>
                                    Unlock Your Business Insights
                                    <Ic name="arrow" />
                                </Link>
                            </div>

                            <div className={styles.heroArtCard}>
                                <img
                                    className={styles.heroImg}
                                    src={asset(HERO_IMAGE)}
                                    alt="Isometric purple analytics dashboard connecting charts, data nodes and business metrics"
                                    width={892}
                                    height={600}
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Visibility ---------- */}
                <section className={styles.section}>
                    <div className={styles.visGrid}>
                        <div>
                            <p className={styles.eyebrow}>ENTERPRISE VISIBILITY</p>
                            <h2 className={`${styles.title} ${styles.titleLeft}`}>See the Bigger Picture Behind Your Data</h2>
                            <p className={styles.lead}>
                                Make business performance easier to understand with meaningful reports and visual insights.
                            </p>
                            <div className={styles.pipeCard} aria-hidden="true">
                                <span className={styles.pipeNode}>
                                    <Ic name="database" />
                                </span>
                                <span className={styles.pipeLine} />
                                <span className={`${styles.pipeNode} ${styles.pipeSolid}`}>
                                    <Ic name="trend" />
                                </span>
                                <span className={styles.pipeLine} />
                                <span className={`${styles.pipeNode} ${styles.pipeSolid}`}>
                                    <Ic name="tickCircle" />
                                </span>
                            </div>
                        </div>
                        <ul className={styles.visList}>
                            {visibility.map((v) => (
                                <li key={v.text}>
                                    <span className={styles.tile36}>
                                        <Ic name={v.icon} />
                                    </span>
                                    {v.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ---------- Services ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <CenterHead eyebrow="CORE CAPABILITIES" title="Our Analytics & BI Services" />
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

                {/* ---------- Question mapping ---------- */}
                <section className={`${styles.section} ${styles.bandDeep}`}>
                    <CenterHead eyebrow="BUSINESS VALUE MAPPING" title="Turn Business Questions into Clear Insights" />
                    <ul className={styles.qList}>
                        {questions.map((q) => (
                            <li key={q.q}>
                                <span className={styles.qText}>
                                    <span className={styles.qDot} />
                                    {q.q}
                                </span>
                                <span className={styles.qArrow} aria-hidden="true">
                                    <Ic name="arrow" />
                                </span>
                                <span className={styles.qTag}>{q.a}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- Workflow ---------- */}
                <section className={styles.section}>
                    <CenterHead eyebrow="DELIVERY LIFECYCLE" title="Our Analytics Workflow" />
                    <ol className={styles.flowGrid}>
                        {flow.map((f) => (
                            <li key={f.label}>
                                <span className={styles.flowIcon}>
                                    <Ic name={f.icon} />
                                </span>
                                {f.label}
                            </li>
                        ))}
                    </ol>
                    <ol className={styles.stepGrid}>
                        {steps.map((s, i) => (
                            <li key={s}>
                                <span className={styles.stepNum}>{i + 1}</span>
                                {s}
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ---------- Benefits ---------- */}
                <section className={styles.section}>
                    <CenterHead eyebrow="STRATEGIC IMPACT" title="Business Benefits" />
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

                {/* ---------- FAQ ---------- */}
                <section className={`${styles.section} ${styles.band} ${styles.sectionFaq}`} id="faq">
                    <div className={styles.faqGrid}>
                        <div>
                            <p className={styles.eyebrow}>COMMON INQUIRIES</p>
                            <h2 className={`${styles.title} ${styles.faqTitle}`}>Frequently Asked Questions About Analytics &amp; BI</h2>
                            <div className={styles.clarity} aria-hidden="true">
                                <span className={styles.clarityIcon}>
                                    <Ic name="dashboard" />
                                </span>
                                <span className={styles.bars}>
                                    <i style={{ width: "78%" }} />
                                    <i style={{ width: "48%" }} />
                                </span>
                                <span className={styles.clarityLabel}>
                                    <Ic name="tickCircle" />
                                    Enterprise Data Clarity
                                </span>
                            </div>
                        </div>
                        <BiFaq items={faqs} />
                    </div>
                </section>
            </div>
        </div>
    );
}