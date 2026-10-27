import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import CsFaq, { type CsFaqItem } from "./csfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Digital Transformation Consulting & Strategy | Atlantech Global",
    description:
        "Digital transformation consulting that helps enterprises assess their technology landscape, prioritize initiatives and build a practical transformation roadmap with Atlantech Global.",
    alternates: { canonical: "/digital-transformation/consulting-strategy/" },
};

/** Where the "Digital Transformation Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/digital-transformation-services";
/** Hero image in /public/images. */
const HERO_IMAGE = "/images/digital-growth.png";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
    `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
    external: "M7 17L17 7M8 7h9v9",
    arrow: "M5 12h14M13 6l6 6-6 6",
    arrowDown: "M12 5v14M6 13l6 6 6-6",
    tick: c(12, 12, 9) + "M8.5 12l2.5 2.5 4.5-5",
    /* approach */
    assess: r(4, 4, 16, 16, 2) + "M8 9h8M8 13h8M8 17h4",
    identify: c(11, 11, 6) + "M20 20l-4.5-4.5",
    prioritize: "M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01",
    plan: r(4, 5, 16, 15, 2) + "M4 10h16M8 3v4M16 3v4",
    rocket: "M5 15c-1 1-1.5 3-1.5 5 2 0 4-.5 5-1.5M9 15l-3-3c1-4 4-7 9-8 4-.7 5 .3 4.5 4.5-1 5-4 8-8 9zM15 9h.01",
    /* challenges */
    history: "M20 12a8 8 0 1 1-2.5-5.8M20 4v5h-5M12 8v4l3 2",
    hand: "M9 11V5a1.5 1.5 0 0 1 3 0v5M12 9.5a1.5 1.5 0 0 1 3 0V11M15 10.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-3l-2-3.5a1.5 1.5 0 0 1 2.5-1.5L9 15",
    unlink: "M9 15l-2 2a3 3 0 0 1-4-4l2-2M15 9l2-2a3 3 0 0 1 4 4l-2 2M4 4l16 16",
    smile: c(12, 12, 9) + "M8 14s1.5 2 4 2 4-2 4-2M9 9.5h.01M15 9.5h.01",
    archive: r(3, 4, 18, 4, 1) + "M5 8v11h14V8M10 12h4",
    device: r(6, 3, 12, 18, 2) + "M10 7h4M10 17h4",
    /* opportunities */
    apps: r(4, 4, 7, 7, 1.5) + r(13, 4, 7, 7, 1.5) + r(4, 13, 7, 7, 1.5) + r(13, 13, 7, 7, 1.5),
    bolt: "M13 3L5 14h6l-1 7 8-11h-6z",
    integrate: c(12, 12, 2.4) + "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8",
    experience: r(3, 5, 18, 14, 2) + "M3 9h18M8 14h4",
    analytics: "M3 17l5-5 4 3 5-6M17 7h4v4",
    cloudOpt: "M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4.5 4.5 0 0 1 17 18zM10 14h4",
    /* focus areas */
    flow: r(3, 4, 6, 5, 1) + r(15, 4, 6, 5, 1) + r(15, 15, 6, 5, 1) + "M9 6.5h6M18 9v6M6 9v8h9",
    appWin: r(3, 5, 18, 14, 2) + "M3 9h18M7 7h.01",
    cloud: "M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4.5 4.5 0 0 1 17 18z",
    dataAnalytics: "M3 17l5-5 4 3 5-6M17 7h4v4M4 21h16",
    digitalExp: r(4, 4, 16, 12, 2) + "M9 20h6M12 16v4",
    ai: r(5, 7, 14, 12, 3) + "M12 3v4M9 13h.01M15 13h.01M9 16.5h6",
    /* why */
    building: "M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01",
    shieldCard: r(4, 5, 16, 14, 2) + "M4 10h16M8 15h4",
    trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
    infinity: "M12 12c-2-3-4-4.5-6-4.5a4.5 4.5 0 0 0 0 9c2 0 4-1.5 6-4.5s4-4.5 6-4.5a4.5 4.5 0 0 1 0 9c-2 0-4-1.5-6-4.5",
    help: c(12, 12, 9) + "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01",
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

const achieve: string[] = [
    "Align technology with business objectives",
    "Identify modernization opportunities",
    "Improve operational efficiency",
    "Build scalable technology foundations",
    "Prioritize high-impact initiatives",
    "Create a practical transformation roadmap",
];

const questions = ["Where are you today?", "Where do you want to go?", "How will you get there?"];

const approach: { icon: IconName; title: string; desc: string }[] = [
    { icon: "assess", title: "Assess", desc: "Evaluate your applications, infrastructure, processes, data and technology maturity." },
    { icon: "identify", title: "Identify", desc: "Find technology gaps, inefficiencies and opportunities for improvement." },
    { icon: "prioritize", title: "Prioritize", desc: "Determine which initiatives can create the greatest business impact." },
    { icon: "plan", title: "Plan", desc: "Create a phased roadmap with priorities, timelines and measurable outcomes." },
    { icon: "rocket", title: "Transform", desc: "Support implementation and continuous optimization." },
];

const mapping: { from: string; fromIcon: IconName; to: string; toIcon: IconName }[] = [
    { from: "Legacy technology", fromIcon: "history", to: "Application modernization", toIcon: "apps" },
    { from: "Manual processes", fromIcon: "hand", to: "Automation", toIcon: "bolt" },
    { from: "Disconnected systems", fromIcon: "unlink", to: "Application integration", toIcon: "integrate" },
    { from: "Poor customer experience", fromIcon: "smile", to: "Digital experience transformation", toIcon: "experience" },
    { from: "Data silos", fromIcon: "archive", to: "Data & analytics modernization", toIcon: "analytics" },
    { from: "Complex IT environments", fromIcon: "device", to: "Cloud transformation", toIcon: "cloudOpt" },
];

const focus: { icon: IconName; title: string; desc: string }[] = [
    { icon: "flow", title: "Business Processes", desc: "Streamline workflows and eliminate unnecessary manual activities." },
    { icon: "appWin", title: "Applications", desc: "Modernize legacy applications and improve integration." },
    { icon: "cloud", title: "Cloud & Infrastructure", desc: "Build scalable and flexible technology environments." },
    { icon: "dataAnalytics", title: "Data & Analytics", desc: "Create better access to business data and insights." },
    { icon: "digitalExp", title: "Digital Experience", desc: "Improve customer and employee interactions across digital channels." },
    { icon: "ai", title: "AI & Automation", desc: "Identify opportunities to automate processes and improve decision-making." },
];

const roadmap = [
    "Current-State Assessment",
    "Digital Maturity Analysis",
    "Opportunity Identification",
    "Technology Prioritization",
    "Transformation Roadmap",
    "Implementation & Optimization",
];

const why: { icon: IconName; title: string; desc: string }[] = [
    { icon: "building", title: "Business-first approach", desc: "Technology recommendations are connected to business objectives." },
    { icon: "shieldCard", title: "Enterprise expertise", desc: "Solutions are designed for complex enterprise environments." },
    { icon: "trend", title: "Scalable transformation", desc: "Roadmaps can evolve as business requirements change." },
    { icon: "infinity", title: "End-to-end capabilities", desc: "From strategy and modernization to implementation and optimization." },
];

const faqs: CsFaqItem[] = [
    {
        q: "What is Digital Transformation Consulting?",
        a: "It helps organizations assess their current technology and business processes and create a roadmap for improving operations through digital technologies.",
    },
    {
        q: "What does a Digital Transformation Strategy include?",
        a: "It can include technology assessment, digital maturity analysis, modernization priorities, technology recommendations, implementation planning and measurable business objectives.",
    },
    {
        q: "How does Business Transformation Consulting help enterprises?",
        a: "It connects business objectives with technology initiatives to improve processes, efficiency, customer experience and scalability.",
    },
];

function Head({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
    return (
        <div className={styles.head}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.title}>{title}</h2>
            {lead && <p className={styles.lead}>{lead}</p>}
        </div>
    );
}

export default function ConsultingStrategyPage() {
    return (
        <div className={styles.page}>
            <div className={styles.panel}>
                {/* ---------- Hero ---------- */}
                <section className={styles.heroWrap}>
                    <nav className={styles.crumbBar} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">›</span>
                        <Link href={PARENT_HREF}>Digital Transformation Services</Link>
                        <span aria-hidden="true">›</span>
                        <span className={styles.crumbCurrent} aria-current="page">
                            Consulting Strategy
                        </span>
                    </nav>
                    <div className={styles.hero}>
                        <div className={styles.heroGrid}>
                            <div>
                                <span className={styles.eyebrowPill}>DIGITAL TRANSFORMATION SERVICES</span>
                                <h1 className={styles.heroTitle}>
                                    Digital Transformation Consulting for <span className={styles.gradText}>Future-Ready Enterprises</span>
                                </h1>
                                <p className={styles.heroCopy}>
                                    Turn business challenges into a clear transformation roadmap. Our Digital Transformation Consulting
                                    helps enterprises assess their technology landscape, identify opportunities and prioritize
                                    initiatives that improve efficiency, agility and long-term growth.
                                </p>
                                <Link href="/contact" className={styles.solidBtn}>
                                    Build Your Transformation Roadmap
                                    <Ic name="external" />
                                </Link>
                            </div>

                            <div className={styles.heroArtCard}>
                                <img
                                    className={styles.heroImg}
                                    src={asset(HERO_IMAGE)}
                                    alt="Isometric purple roadmap connecting business goals, technology and transformation milestones"
                                    width={892}
                                    height={496}
                                    fetchPriority="high"
                                />
                            </div>
                        </div>

                        <h2 className={styles.achieveHead}>What we help you achieve:</h2>
                        <ul className={styles.achieveGrid}>
                            {achieve.map((a) => (
                                <li key={a}>
                                    <span className={styles.tickIcon}>
                                        <Ic name="tick" />
                                    </span>
                                    {a}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ---------- Strategy ---------- */}
                <section className={styles.section}>
                    <Head
                        eyebrow="STRATEGIC ALIGNMENT"
                        title="Turn Business Goals Into a Digital Transformation Strategy"
                        lead="A transformation strategy should answer three simple questions:"
                    />
                    <ol className={styles.stateStrip}>
                        {questions.map((q, i) => (
                            <li key={q}>
                                {i > 0 && (
                                    <span className={styles.stateArrow} aria-hidden="true">
                                        <Ic name="arrow" />
                                    </span>
                                )}
                                <span className={styles.stateBody}>
                                    <small>STATE {pad(i + 1)}</small>
                                    <b>{q}</b>
                                </span>
                            </li>
                        ))}
                    </ol>

                    <h3 className={styles.subHead}>Our approach</h3>
                    <ol className={styles.approachGrid}>
                        {approach.map((a, i) => (
                            <li key={a.title} className={i === approach.length - 1 ? styles.approachLast : undefined}>
                                <div className={styles.approachTop}>
                                    <span className={styles.approachNum}>{pad(i + 1)}</span>
                                    <span className={styles.approachIcon}>
                                        <Ic name={a.icon} />
                                    </span>
                                </div>
                                <h4>{a.title}</h4>
                                <p>{a.desc}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ---------- Challenge mapping ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <Head
                        eyebrow="STRATEGIC IMPACT"
                        title="Business Transformation Consulting That Connects Technology & Business"
                        lead="Technology transformation works best when it solves actual business problems."
                    />
                    <h3 className={styles.subHead}>We help enterprises address:</h3>
                    <div className={styles.mapHeader} aria-hidden="true">
                        <span>Business Challenge</span>
                        <span />
                        <span>Transformation Opportunity</span>
                    </div>
                    <ul className={styles.mapList}>
                        {mapping.map((m) => (
                            <li key={m.from}>
                                <span className={styles.mapFrom}>
                                    {m.from}
                                    <Ic name={m.fromIcon} />
                                </span>
                                <span className={styles.mapArrow} aria-hidden="true">
                                    <Ic name="arrow" />
                                </span>
                                <span className={styles.mapTo}>
                                    {m.to}
                                    <Ic name={m.toIcon} />
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- Focus areas ---------- */}
                <section className={styles.section}>
                    <Head
                        eyebrow="CORE CAPABILITIES"
                        title="Enterprise Digital Transformation Across the Business"
                        lead="Transformation can impact multiple areas of an enterprise."
                    />
                    <h3 className={styles.subHead}>Our focus areas</h3>
                    <ul className={styles.focusGrid}>
                        {focus.map((f) => (
                            <li key={f.title}>
                                <span className={styles.tile36}>
                                    <Ic name={f.icon} />
                                </span>
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- Roadmap ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <Head eyebrow="ROADMAP JOURNEY" title="From Strategy to Action" lead="Your transformation roadmap can include:" />
                    <ol className={styles.roadGrid}>
                        {roadmap.map((step, i) => {
                            const last = i === roadmap.length - 1;
                            return (
                                <li key={step} className={last ? styles.roadLast : undefined}>
                                    <span className={styles.roadNum}>{pad(i + 1)}</span>
                                    <b>{step}</b>
                                    <span className={styles.roadIcon}>
                                        <Ic name={last ? "tick" : "arrowDown"} />
                                    </span>
                                </li>
                            );
                        })}
                    </ol>
                    <p className={styles.noteBar}>
                        This approach helps organizations move from strategy discussions to measurable transformation initiatives.
                    </p>
                </section>

                {/* ---------- Why partner ---------- */}
                <section className={styles.section}>
                    <Head eyebrow="ENTERPRISE VALUE" title="Why Partner With Atlantech Global?" />
                    <ul className={styles.whyGrid}>
                        {why.map((w) => (
                            <li key={w.title}>
                                <span className={styles.tile36}>
                                    <Ic name={w.icon} />
                                </span>
                                <h3>{w.title}</h3>
                                <p>{w.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- FAQ ---------- */}
                <section className={`${styles.section} ${styles.band} ${styles.sectionFaq}`} id="faq">
                    <div className={styles.faqGrid}>
                        <div>
                            <p className={styles.eyebrow}>COMMON INQUIRIES</p>
                            <h2 className={`${styles.title} ${styles.faqTitle}`}>Frequently Asked Questions About Consulting &amp; Strategy</h2>
                            <aside className={styles.desk}>
                                <h3>
                                    <Ic name="help" />
                                    Strategic Advisory
                                </h3>
                                <p>Create a practical transformation roadmap built around your business objectives.</p>
                            </aside>
                        </div>
                        <CsFaq items={faqs} />
                    </div>
                </section>
            </div>
        </div>
    );
}