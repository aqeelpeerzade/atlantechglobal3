import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import AmFaq, { type AmFaqItem } from "./amfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Application Maintenance & Managed Services | Atlantech Global",
    description:
        "Keep business applications secure, stable and efficient with application managed services covering ongoing monitoring, maintenance, troubleshooting and performance improvements.",
    alternates: { canonical: "/managed-services/application-maintenance/" },
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
    pulse: "M3 12h4l3-7 4 14 3-7h4",
    bug: "M9 8a3 3 0 0 1 6 0v1H9zM8 9h8v6a4 4 0 0 1-8 0zM4 13h4M16 13h4M5 7l3 2M19 7l-3 2M12 9v10",
    gauge: c(12, 12, 9) + "M12 12l4-4M7 16h.01M17 16h.01M12 7h.01",
    patch: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM12 9v6M9 12h6",
    upgrade: "M12 18V6M7 11l5-5 5 5M5 20h14",
    headset: "M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1z",
    /* benefits */
    stable: c(12, 12, 9) + "M8.5 12l2.5 2.5 4.5-5",
    refresh: "M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4",
    smile: c(12, 12, 9) + "M8 14s1.5 2 4 2 4-2 4-2M9 9.5h.01M15 9.5h.01",
    flow: "M3 4h6v5H3zM15 4h6v5h-6zM15 15h6v5h-6zM9 6.5h6M18 9v6M6 9v8h9",
    infinity: "M12 12c-2-3-4-4.5-6-4.5a4.5 4.5 0 0 0 0 9c2 0 4-1.5 6-4.5s4-4.5 6-4.5a4.5 4.5 0 0 1 0 9c-2 0-4-1.5-6-4.5",
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

const performing: string[] = [
    "Reduce recurring application issues.",
    "Improve performance and availability.",
    "Address security and compatibility updates.",
    "Support evolving user needs.",
    "Minimize application downtime.",
];

const services: { icon: IconName; title: string; desc: string }[] = [
    { icon: "pulse", title: "Application Monitoring", desc: "Track application health and performance." },
    { icon: "bug", title: "Bug Fixes & Troubleshooting", desc: "Identify and resolve application issues." },
    { icon: "gauge", title: "Performance Optimization", desc: "Improve response times and resource efficiency." },
    { icon: "patch", title: "Security & Patch Management", desc: "Apply relevant updates and security fixes." },
    { icon: "upgrade", title: "Application Upgrades", desc: "Maintain compatibility with evolving platforms." },
    { icon: "headset", title: "Technical Support", desc: "Provide ongoing assistance for application-related issues." },
];

const types: { type: string; purpose: string }[] = [
    { type: "Corrective", purpose: "Fix bugs and existing issues" },
    { type: "Preventive", purpose: "Reduce the likelihood of future problems" },
    { type: "Adaptive", purpose: "Maintain compatibility with changing environments" },
    { type: "Perfective", purpose: "Improve functionality and performance" },
];

const steps: { title: string; desc: string }[] = [
    { title: "Assess", desc: "Review application architecture and existing issues." },
    { title: "Monitor", desc: "Establish monitoring and maintenance priorities." },
    { title: "Maintain", desc: "Implement fixes, updates, and improvements." },
    { title: "Test", desc: "Test changes before deployment." },
    { title: "Improve", desc: "Track performance and refine maintenance activities." },
];

const benefits: { icon: IconName; text: string }[] = [
    { icon: "stable", text: "Improved application stability." },
    { icon: "refresh", text: "Reduced recurring technical issues." },
    { icon: "smile", text: "Better user experience." },
    { icon: "flow", text: "More predictable maintenance workflows." },
    { icon: "infinity", text: "Extended value from existing applications." },
];

const faqs: AmFaqItem[] = [
    {
        q: "What are Application Managed Services?",
        a: "Application Managed Services involve ongoing monitoring, maintenance, support, troubleshooting, and optimization of business applications.",
    },
    {
        q: "What is included in application maintenance?",
        a: "Application maintenance can include bug fixes, performance monitoring, security updates, compatibility changes, testing, and technical support.",
    },
    {
        q: "What is the difference between application maintenance and application development?",
        a: "Application development focuses on building or adding application functionality. Application maintenance focuses on keeping existing applications reliable, secure, compatible, and efficient.",
    },
    {
        q: "Why is application maintenance important?",
        a: "Regular application maintenance helps reduce technical issues, improve performance, address security concerns, and support changing business requirements.",
    },
];

export default function ApplicationMaintenancePage() {
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
                            Application Maintenance
                        </span>
                    </nav>
                    <div className={styles.hero}>
                        <div className={styles.heroGrid}>
                            <div>
                                <span className={styles.eyebrowPill}>
                                    <span className={styles.pillDot} />
                                    WHAT WE DO • APPLICATION MANAGED SERVICES
                                </span>
                                <h1 className={styles.heroTitle}>
                                    Application Managed Services for <span className={styles.gradText}>Reliable Application Performance</span>
                                </h1>
                                <p className={styles.heroCopy}>
                                    Keep business applications secure, stable, and efficient with Application Managed Services covering
                                    ongoing monitoring, maintenance, troubleshooting, and performance improvements.
                                </p>
                                <Link href="/contact" className={styles.solidBtn}>
                                    Improve Your Application Performance
                                    <Ic name="arrow" />
                                </Link>
                            </div>

                            <div className={styles.heroArtCard}>
                                <img
                                    className={styles.heroImg}
                                    src={asset(HERO_IMAGE)}
                                    alt="Isometric purple application stack with layered screens, code and security shields"
                                    width={892}
                                    height={600}
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Performing at best ---------- */}
                <section className={styles.section}>
                    <div className={styles.runGrid}>
                        <div>
                            <h2 className={`${styles.title} ${styles.titleLeft}`}>Keep Business Applications Performing at Their Best</h2>
                            <p className={styles.lead}>Maintain application reliability while adapting to changing business requirements.</p>
                        </div>
                        <ul className={styles.runList}>
                            {performing.map((t) => (
                                <li key={t}>
                                    <span className={styles.tickCircle}>
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
                        Our Application Maintenance <span className={styles.gradText}>Services</span>
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

                {/* ---------- Maintenance types ---------- */}
                <section className={styles.section}>
                    <h2 className={`${styles.title} ${styles.titleCenter} ${styles.titleNarrow}`}>Maintenance That Matches Application Needs</h2>
                    <div className={styles.tableWrap}>
                        <table className={styles.matrix}>
                            <thead>
                                <tr>
                                    <th scope="col">MAINTENANCE TYPE</th>
                                    <th scope="col">PURPOSE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {types.map((t) => (
                                    <tr key={t.type}>
                                        <th scope="row">
                                            <span className={styles.typePill}>{t.type}</span>
                                        </th>
                                        <td>{t.purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ---------- Process ---------- */}
                <section className={styles.section}>
                    <h2 className={`${styles.title} ${styles.titleCenter}`}>Our Application Maintenance Process</h2>
                    <ol className={styles.stepGrid}>
                        {steps.map((s, i) => (
                            <li key={s.title}>
                                <span className={styles.stepNum}>{pad(i + 1)}</span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ---------- Benefits ---------- */}
                <section className={styles.section}>
                    <h2 className={`${styles.title} ${styles.titleCenter}`}>Business Benefits</h2>
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
                <section className={`${styles.section} ${styles.sectionFaq}`} id="faq">
                    <h2 className={`${styles.title} ${styles.titleCenter} ${styles.titleNarrow}`}>
                        Frequently Asked Questions About Application Maintenance
                    </h2>
                    <div className={styles.faqWrap}>
                        <AmFaq items={faqs} />
                    </div>
                </section>
            </div>
        </div>
    );
}