import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import OffshoreFaq, { type OffshoreFaqItem } from "./offshorefaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Offshore Development Teams",
    description:
        "Extend your engineering capabilities with dedicated offshore development teams that support product delivery, technical expertise and evolving project requirements.",
    alternates: { canonical: "/managed-services/offshore-development-teams/" },
};

/** Where the "Managed Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/managed-services";
/** Hero image in /public/images — change the file name if yours differs. */
const HERO_IMAGE = "/images/digital-growth.png";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
    `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
    team: c(12, 8, 3) + c(5.5, 10, 2.2) + c(18.5, 10, 2.2) + "M7 20c0-3 2.2-5 5-5s5 2 5 5M2 19c0-2 1.5-3.5 3.5-3.5M22 19c0-2-1.5-3.5-3.5-3.5",
    code: "M9 7l-5 5 5 5M15 7l5 5-5 5",
    devices: r(3, 5, 12, 10, 1.5) + r(14, 10, 7, 11, 1.5) + "M7 19h5",
    rosette: "M12 3l2.3 1.5 2.7-.2 1 2.5 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-1 2.5-2.7-.2L12 21l-2.3-1.5-2.7.2-1-2.5-2.2-1.6.9-2.6-.9-2.6L6 8.8l1-2.5 2.7.2zM9 12l2 2 4-4",
    infinity: "M12 12c-1.5-2.5-3-4-5-4a4 4 0 1 0 0 8c2 0 3.5-1.5 5-4zm0 0c1.5 2.5 3 4 5 4a4 4 0 1 0 0-8c-2 0-3.5 1.5-5 4z",
    terminal: r(3, 4, 18, 16, 2) + "M7 10l3 2-3 2M12 15h5",
    cloudSync: "M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4.5 4.5 0 0 1 17 18zM9 14l3-3 3 3",
    checklist: r(4, 4, 16, 16, 2) + "M8 9h3M8 15h3M13 9l1.5 1.5L17 8M13 15l1.5 1.5L17 14",
    palette: "M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2-.6-1.2.2-2.5 1.5-2.5h2a3 3 0 0 0 3-3A9.5 9.5 0 0 0 12 3zM8 11h.01M12 8h.01M16 11h.01",
    flow: r(3, 4, 6, 5, 1) + r(15, 4, 6, 5, 1) + r(15, 15, 6, 5, 1) + "M9 6.5h6M18 9v6M6 9v8h9",
    listSearch: "M3 6h9M3 11h6M3 16h6" + c(16, 14, 4) + "M19 17l3 3",
    userPlus: c(9, 8, 3.5) + "M3 20c0-3.5 2.7-5.5 6-5.5M18 11v6M15 14h6",
    nodes: c(12, 12, 2.4) + c(12, 4, 1.6) + c(4.5, 16.5, 1.6) + c(19.5, 16.5, 1.6) + "M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3",
    rocket: "M5 15c-1 1-1.5 3-1.5 5 2 0 4-.5 5-1.5M9 15l-3-3c1-4 4-7 9-8 4-.7 5 .3 4.5 4.5-1 5-4 8-8 9zM15 9h.01",
    trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
    brainGear: c(12, 11, 6) + c(12, 11, 2) + "M12 17v4M9 21h6",
    chartBox: r(4, 4, 16, 16, 3) + "M7 16l4-4 3 2 3-4",
    orgChart: r(4, 3, 5, 5, 1) + r(14, 10, 6, 4, 1) + r(14, 17, 6, 4, 1) + "M6.5 8v10h7.5M6.5 12h7.5",
    laptopCheck: r(4, 5, 16, 11, 2) + "M2 20h20M9 10.5l2 2 4-4",
    sliders: "M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M8 14v6",
    check: "M5 12.5l4.5 4.5L19 7",
    arrow: "M5 12h14M13 6l6 6-6 6",
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

const extend = [
    "Access specialized technical skills.",
    "Scale teams based on project needs.",
    "Support faster development cycles.",
    "Improve collaboration across locations.",
    "Maintain flexibility as priorities change.",
];

const services: { icon: IconName; title: string; desc: string }[] = [
    { icon: "team", title: "Dedicated Development Teams", desc: "Build teams aligned with your technical requirements." },
    { icon: "code", title: "Software Development Support", desc: "Extend in-house engineering capacity." },
    { icon: "devices", title: "Application Development", desc: "Support web, mobile, and enterprise application projects." },
    { icon: "rosette", title: "Quality Assurance", desc: "Integrate testing and quality checks into delivery workflows." },
    { icon: "infinity", title: "DevOps Support", desc: "Improve deployment and development processes." },
];

const roles: { icon: IconName; text: string }[] = [
    { icon: "terminal", text: "Frontend and backend developers" },
    { icon: "cloudSync", text: "Cloud and DevOps engineers" },
    { icon: "checklist", text: "QA and automation specialists" },
    { icon: "palette", text: "UI/UX designers" },
    { icon: "flow", text: "Technical leads and project coordinators" },
];

const delivery: { icon: IconName; title: string; desc: string }[] = [
    { icon: "listSearch", title: "Define", desc: "Understand project goals and skill requirements." },
    { icon: "userPlus", title: "Assemble", desc: "Align team roles and responsibilities." },
    { icon: "nodes", title: "Integrate", desc: "Establish communication and delivery workflows." },
    { icon: "rocket", title: "Deliver", desc: "Track milestones and development progress." },
    { icon: "trend", title: "Scale", desc: "Adjust team capacity as requirements evolve." },
];

const benefits: { icon: IconName; text: string }[] = [
    { icon: "brainGear", text: "Flexible access to technical expertise." },
    { icon: "chartBox", text: "Additional development capacity." },
    { icon: "orgChart", text: "Predictable team structures." },
    { icon: "laptopCheck", text: "Support for ongoing product development." },
    { icon: "sliders", text: "More flexibility in resource planning." },
];

const faqs: OffshoreFaqItem[] = [
    {
        q: "What is an offshore development team?",
        a: "An offshore development team is a group of technology professionals based in another country who work on software development or IT projects for a business.",
    },
    {
        q: "How do offshore development teams work?",
        a: "They collaborate with internal teams through defined roles, project management processes, communication channels, and shared delivery goals.",
    },
    {
        q: "What roles can an offshore development team include?",
        a: "Teams can include software developers, QA engineers, DevOps specialists, designers, technical leads, and project coordinators.",
    },
    {
        q: "When should a business hire an offshore development team?",
        a: "Businesses may consider offshore teams when they need additional technical expertise, flexible capacity, or support for ongoing development projects.",
    },
];

export default function OffshoreDevelopmentTeamsPage() {
    return (
        <div className={styles.page}>
            <div className={styles.panel}>
                {/* ---------- Hero ---------- */}
                <section className={styles.hero}>
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">›</span>
                        <Link href={PARENT_HREF}>Managed Services</Link>
                        <span aria-hidden="true">›</span>
                        <span className={styles.crumbCurrent} aria-current="page">
                            Offshore Development Teams
                        </span>
                    </nav>
                    <div className={styles.heroGrid}>
                        <div>
                            <h1 className={styles.heroTitle}>
                                Offshore Development Teams That <span className={styles.gradText}>Scale Your Business</span>
                            </h1>
                            <p className={styles.heroCopy}>
                                Extend your engineering capabilities with dedicated offshore development teams that support product
                                delivery, technical expertise, and evolving project requirements.
                            </p>
                            <Link href="/contact" className={styles.gradBtn}>
                                Build Your Offshore Team
                                <Ic name="arrow" />
                            </Link>
                        </div>
                        <div className={styles.heroCard}>
                            <img
                                className={styles.heroImg}
                                src={asset(HERO_IMAGE)}
                                alt="Isometric world map connecting distributed offshore development workstations"
                                width={1096}
                                height={612}
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </section>

                {/* ---------- Extend capabilities ---------- */}
                <section className={`${styles.section} ${styles.white}`}>
                    <div className={styles.extendGrid}>
                        <div>
                            <span className={styles.bar} />
                            <h2 className={`${styles.title} ${styles.titleLeft}`}>Extend Your Development Capabilities</h2>
                            <p className={styles.leftLead}>Scale your technology operations without adding unnecessary hiring complexity.</p>
                        </div>
                        <ul className={styles.checkList}>
                            {extend.map((e) => (
                                <li key={e}>
                                    <span className={styles.tileLilac}>
                                        <Ic name="check" />
                                    </span>
                                    {e}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ---------- Services ---------- */}
                <section className={`${styles.section} ${styles.pale}`}>
                    <h2 className={`${styles.title} ${styles.titleCenter}`}>
                        Our Offshore Development <span className={styles.gradText}>Services</span>
                    </h2>
                    <div className={styles.serviceGrid}>
                        {services.map((s) => (
                            <article className={styles.serviceCard} key={s.title}>
                                <span className={styles.tilePale}>
                                    <Ic name={s.icon} />
                                </span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ---------- Team roles ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <div className={styles.headCenter}>
                        <h2 className={`${styles.title} ${styles.titleNarrow}`}>Build a Team Around Your Requirements</h2>
                        <p className={styles.lead}>Choose the expertise and engagement structure that fits your business.</p>
                    </div>
                    <ul className={styles.fiveGrid}>
                        {roles.map((ro) => (
                            <li key={ro.text}>
                                <span className={styles.tileLilac}>
                                    <Ic name={ro.icon} />
                                </span>
                                <h3>{ro.text}</h3>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- Delivery model ---------- */}
                <section className={`${styles.section} ${styles.white}`}>
                    <div className={styles.headCenter}>
                        <h2 className={styles.title}>A Collaborative Delivery Model</h2>
                        <p className={styles.flowPill}>
                            {["Define", "Assemble", "Integrate", "Deliver", "Scale"].map((s, i) => (
                                <span key={s}>
                                    {i > 0 && <Ic name="arrow" />}
                                    {s}
                                </span>
                            ))}
                        </p>
                    </div>
                    <ol className={styles.deliveryGrid}>
                        {delivery.map((d, i) => (
                            <li key={d.title}>
                                <div className={styles.deliveryTop}>
                                    <span className={styles.bigNum}>{pad(i + 1)}</span>
                                    <span className={styles.tileGhost}>
                                        <Ic name={d.icon} />
                                    </span>
                                </div>
                                <h3>{d.title}</h3>
                                <p>{d.desc}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ---------- Benefits ---------- */}
                <section className={`${styles.section} ${styles.pale}`}>
                    <h2 className={`${styles.title} ${styles.titleCenter}`}>Business Benefits</h2>
                    <ul className={styles.fiveGrid}>
                        {benefits.map((b) => (
                            <li key={b.text}>
                                <span className={styles.tileLilac}>
                                    <Ic name={b.icon} />
                                </span>
                                <h3>{b.text}</h3>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- FAQ ---------- */}
                <section className={`${styles.section} ${styles.white} ${styles.sectionFaq}`} id="faq">
                    <h2 className={`${styles.title} ${styles.titleCenter} ${styles.faqTitle}`}>Frequently Asked Questions About Offshore Development</h2>
                    <OffshoreFaq items={faqs} />
                </section>
            </div>
        </div>
    );
}