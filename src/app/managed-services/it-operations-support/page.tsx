import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import OpsFaq, { type OpsFaqItem } from "./opsfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "IT Operations & Support Services | Atlantech Global",
    description:
        "Keep your technology environment running smoothly with proactive IT operations and support services that improve system availability, resolve issues and simplify daily IT management.",
    alternates: { canonical: "/managed-services/it-operations-support/" },
};

/** Where the "Managed Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/managed-services";
/** Hero image in /public/images. */
const HERO_IMAGE = "/images/digital-growth.png";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

const paths = {
    arrow: "M5 12h14M13 6l6 6-6 6",
    tick: "M5 12.5l4.5 4.5L19 7.5",
    /* services */
    monitor: "M5 20v-6M10 20V8M15 20v-9M20 20V4",
    support: "M14.5 6.5a3.5 3.5 0 0 0-4.6 4.6L4 17l3 3 5.9-5.9a3.5 3.5 0 0 0 4.6-4.6l-2.2 2.2-2-.6-.6-2z",
    incident: "M12 3L2 20h20zM12 10v4M12 17h.01",
    gear: c(12, 12, 3) + "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1",
    list: "M4 6h16M4 12h16M4 18h16M7 6h.01M7 12h.01M7 18h.01",
    /* benefits */
    reliable: c(12, 12, 9) + "M8.5 12l2.5 2.5 4.5-5",
    bolt: "M13 3L5 14h6l-1 7 8-11h-6z",
    eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
    shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
    refresh: "M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4",
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

const running: string[] = [
    "Monitor systems and infrastructure.",
    "Resolve technical issues efficiently.",
    "Improve service availability.",
    "Reduce repetitive IT tasks.",
    "Support business continuity.",
];

const services: { icon: IconName; title: string; desc: string }[] = [
    { icon: "monitor", title: "IT Infrastructure Monitoring", desc: "Track system health and performance." },
    { icon: "support", title: "Technical Support", desc: "Troubleshoot hardware, software, and access issues." },
    { icon: "incident", title: "Incident Management", desc: "Identify, prioritize, and resolve service disruptions." },
    { icon: "gear", title: "System Administration", desc: "Manage configurations, updates, and routine maintenance." },
    { icon: "list", title: "IT Service Management", desc: "Streamline service requests and operational workflows." },
];

const challenges: { challenge: string; approach: string }[] = [
    { challenge: "System downtime", approach: "Monitoring and incident response" },
    { challenge: "Slow performance", approach: "Performance checks and troubleshooting" },
    { challenge: "Repeated technical issues", approach: "Root-cause analysis" },
    { challenge: "Access problems", approach: "User and permission management" },
    { challenge: "Routine maintenance", approach: "Scheduled updates and system checks" },
];

const flow = ["Monitor", "Detect", "Respond", "Resolve", "Improve"];

const steps: { title: string; desc: string }[] = [
    { title: "Monitor", desc: "Monitor infrastructure and service health." },
    { title: "Detect", desc: "Detect and prioritize incidents." },
    { title: "Respond", desc: "Assign issues to the appropriate support teams." },
    { title: "Resolve", desc: "Resolve and document problems." },
    { title: "Improve", desc: "Review recurring issues and improve processes." },
];

const benefits: { icon: IconName; text: string }[] = [
    { icon: "reliable", text: "Improved IT service reliability." },
    { icon: "bolt", text: "Faster issue resolution." },
    { icon: "eye", text: "Better infrastructure visibility." },
    { icon: "shield", text: "Reduced operational burden on internal teams." },
    { icon: "refresh", text: "More consistent IT support processes." },
];

const faqs: OpsFaqItem[] = [
    {
        q: "What are IT Operations and Support Services?",
        a: "These services manage and support everyday IT activities, including infrastructure monitoring, troubleshooting, incident management, and system administration.",
    },
    {
        q: "Why are IT operations important?",
        a: "IT operations help maintain system availability, manage technical issues, and support the technology required for daily business activities.",
    },
    {
        q: "What is the difference between IT support and IT operations?",
        a: "IT support primarily resolves user and technical issues. IT operations focuses on maintaining and managing the systems, infrastructure, and processes behind IT services.",
    },
    {
        q: "Can IT operations support cloud infrastructure?",
        a: "Yes. IT operations teams can monitor cloud environments, manage configurations, troubleshoot issues, and support cloud service availability.",
    },
];

export default function ItOperationsSupportPage() {
    return (
        <div className={styles.page}>
            <div className={styles.panel}>
                {/* ---------- Hero ---------- */}
                <section className={styles.heroWrap}>
                    <nav className={styles.crumbBar} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">›</span>
                        <Link href={PARENT_HREF}>Managed Services</Link>
                        <span aria-hidden="true">›</span>
                        <span className={styles.crumbCurrent} aria-current="page">
                            IT Operations &amp; Support
                        </span>
                    </nav>
                    <div className={styles.hero}>
                        <div className={styles.heroGrid}>
                            <div>
                                <h1 className={styles.heroTitle}>
                                    IT Operations and Support Services for <span className={styles.gradText}>Business Continuity</span>
                                </h1>
                                <p className={styles.heroCopy}>
                                    Keep your technology environment running smoothly with proactive IT operations and support services
                                    designed to improve system availability, resolve issues, and simplify daily IT management.
                                </p>
                                <Link href="/contact" className={styles.solidBtn}>
                                    Optimize Your IT Operations
                                    <Ic name="arrow" />
                                </Link>
                            </div>

                            <div className={styles.heroArtCard}>
                                <img
                                    className={styles.heroImg}
                                    src={asset(HERO_IMAGE)}
                                    alt="Isometric purple IT operations center with monitoring dashboards and server infrastructure"
                                    width={892}
                                    height={560}
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Keep running ---------- */}
                <section className={`${styles.section} ${styles.bandDeep}`}>
                    <div className={styles.runGrid}>
                        <div>
                            <h2 className={`${styles.title} ${styles.titleLeft}`}>Keep Your IT Environment Running</h2>
                            <p className={styles.lead}>Reduce operational disruptions and give teams dependable technology support.</p>
                        </div>
                        <ul className={styles.runList}>
                            {running.map((t) => (
                                <li key={t}>
                                    <span className={styles.tickSq}>
                                        <Ic name="tick" />
                                    </span>
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ---------- Services ---------- */}
                <section className={styles.section}>
                    <h2 className={`${styles.title} ${styles.titleCenter}`}>
                        Our IT Operations &amp; Support <span className={styles.gradText}>Services</span>
                    </h2>
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

                {/* ---------- Challenges ---------- */}
                <section className={`${styles.section} ${styles.bandDeep}`}>
                    <h2 className={`${styles.title} ${styles.titleCenter}`}>
                        <span className={styles.gradText}>Proactive Support for</span> Everyday IT Challenges
                    </h2>
                    <div className={styles.tableWrap}>
                        <table className={styles.matrix}>
                            <thead>
                                <tr>
                                    <th scope="col">IT CHALLENGE</th>
                                    <th scope="col">SUPPORT APPROACH</th>
                                </tr>
                            </thead>
                            <tbody>
                                {challenges.map((row) => (
                                    <tr key={row.challenge}>
                                        <th scope="row">{row.challenge}</th>
                                        <td>
                                            <span className={styles.approachPill}>{row.approach}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ---------- Process ---------- */}
                <section className={styles.section}>
                    <div className={styles.headCenter}>
                        <h2 className={styles.title}>
                            A Structured IT <span className={styles.gradText}>Support Process</span>
                        </h2>
                        <p className={styles.flowPill}>
                            {flow.map((f, i) => (
                                <span key={f}>
                                    {i > 0 && <i aria-hidden="true">→</i>}
                                    {f.toUpperCase()}
                                </span>
                            ))}
                        </p>
                    </div>
                    <ol className={styles.stepGrid}>
                        {steps.map((s, i) => (
                            <li key={s.title}>
                                <span className={styles.stepNum}>{pad(i + 1)}</span>
                                <small>STEP {pad(i + 1)}</small>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ---------- Benefits ---------- */}
                <section className={`${styles.section} ${styles.bandDeep}`}>
                    <h2 className={`${styles.title} ${styles.titleCenter}`}>Business Benefits</h2>
                    <ul className={styles.benefitGrid}>
                        {benefits.map((b) => (
                            <li key={b.text}>
                                <span className={styles.tile36}>
                                    <Ic name={b.icon} />
                                </span>
                                {b.text}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- FAQ ---------- */}
                <section className={`${styles.section} ${styles.sectionFaq}`} id="faq">
                    <h2 className={`${styles.title} ${styles.titleCenter} ${styles.faqTitle}`}>
                        <span className={styles.gradText}>Frequently Asked Questions About</span> IT Operations &amp; Support
                    </h2>
                    <div className={styles.faqWrap}>
                        <OpsFaq items={faqs} />
                    </div>
                </section>
            </div>
        </div>
    );
}