import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import AepFaq, { type AepFaqItem } from "./aefaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Adobe Experience Platform Consulting | Atlantech Global",
    description:
        "Accelerate customer data activation with Adobe Experience Platform consulting services, integration, and development expertise from Atlantech Global. Contact us.",
    alternates: { canonical: "/platforms/adobe-experience-platform-consulting/" },
};

/** Where the "Platforms" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/platforms";
/** Hero image in /public/images. */
const HERO_IMAGE = "/images/zoho-workplace.jpg";
/** Section 5 image in /public/images — the document says "Add image"; change the file name to yours. */
const GROWTH_IMAGE = "/images/zoho-workplace.jpg";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
    `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
    external: "M7 17L17 7M8 7h9v9",
    arrow: "M5 12h14M13 6l6 6-6 6",
    check: "M5 12.5l4.5 4.5L19 7.5",
    /* hero chips */
    profiles: r(4, 4, 16, 16, 2) + "M4 9h16M9 9v11",
    audience: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",
    ingest: "M4 8h13M14 4l4 4-4 4M20 16H7M10 12l-4 4 4 4",
    /* services */
    map: "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14",
    plug: "M7 4v6M17 4v6M5 10h14v3a7 7 0 0 1-14 0zM12 20v2",
    user: c(12, 8, 3.5) + "M5 21c0-4 3-6 7-6s7 2 7 6",
    megaphone: "M4 10v4h3l8 4V6L7 10zM18 9a4 4 0 0 1 0 6",
    code: "M9 7l-5 5 5 5M15 7l5 5-5 5",
    /* topology */
    sources: r(4, 4, 16, 16, 2) + "M8 9h8M8 13h8M8 17h4",
    layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
    funnel: "M4 5h16l-6 7v6l-4 2v-8z",
    broadcast: c(12, 12, 2) + "M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.5 4.5a10.6 10.6 0 0 0 0 15M19.5 4.5a10.6 10.6 0 0 1 0 15",
    nodes: c(12, 12, 2.4) + c(12, 4, 1.6) + c(4.5, 16.5, 1.6) + c(19.5, 16.5, 1.6) + "M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3",
    shieldCheck: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
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

const heroChips: { icon: IconName; text: string }[] = [
    { icon: "profiles", text: "Unified Customer Profiles" },
    { icon: "audience", text: "Audience Activation" },
    { icon: "ingest", text: "Data Ingestion" },
];

const services: { icon: IconName; title: string; desc: string; tag: string }[] = [
    { icon: "map", title: "Platform Strategy", desc: "Define architecture, data requirements, and implementation roadmaps.", tag: "STRATEGY ROADMAP" },
    { icon: "plug", title: "Data Integration", desc: "Connect customer data sources and streamline data ingestion.", tag: "INGESTION PROTOCOLS" },
    { icon: "user", title: "Identity and Profiles", desc: "Support unified customer profiles and identity resolution.", tag: "IDENTITY GRAPH" },
    { icon: "megaphone", title: "Audience Activation", desc: "Help teams prepare and activate relevant audiences across supported channels.", tag: "SEGMENT ACTIVATION" },
    { icon: "code", title: "Custom Development", desc: "Engage Adobe Experience Platform developers for implementation and technical customization.", tag: "DEVELOPER SERVICES" },
];

const whyPoints = [
    "Business-aligned implementation strategies.",
    "Customer data architecture and integration expertise.",
    "Support for data quality and governance practices.",
    "Solutions designed around measurable marketing outcomes.",
    "Technical guidance for platform adoption and optimization.",
];

const nodes: { n: string; icon: IconName; title: string; desc: string }[] = [
    { n: "NODE 01", icon: "sources", title: "Customer Data Sources", desc: "Connect customer data sources" },
    { n: "NODE 02", icon: "layers", title: "Data Ingestion", desc: "Streamline data ingestion" },
    { n: "NODE 03", icon: "funnel", title: "Audience Segmentation", desc: "Prepare relevant audiences" },
    { n: "NODE 04", icon: "broadcast", title: "Omnichannel Activation", desc: "Activate across supported channels" },
];

const steps: { chip: string; desc: string }[] = [
    { chip: "DISCOVERY & DATA AUDIT", desc: "Assess existing data sources and business objectives." },
    { chip: "ARCHITECTURE & DATA MODEL", desc: "Design the platform architecture and data model." },
    { chip: "WORKFLOW CONFIGURATION", desc: "Configure ingestion, identity, and audience workflows." },
    { chip: "VALIDATION & OPTIMIZATION", desc: "Validate implementation and support ongoing optimization." },
];

const growthTags = ["Multi-Source Data", "Unified Profiles", "Audience Segments", "Omnichannel Touchpoints"];

const faqs: AepFaqItem[] = [
    {
        q: "What is Adobe Experience Platform used for?",
        a: "Adobe Experience Platform helps businesses collect, organize, govern, and activate customer data to support analytics, audience segmentation, and personalized experiences.",
    },
    {
        q: "What do Adobe Experience Platform consulting services include?",
        a: "They typically include platform assessment, architecture design, data ingestion, identity configuration, audience setup, integration, governance, and implementation support.",
    },
    {
        q: "Why hire Adobe Experience Platform developers?",
        a: "Adobe Experience Platform developers help configure data workflows, integrate systems, implement technical requirements, and support reliable platform operations.",
    },
    {
        q: "How do I choose an Adobe Experience Platform consulting company?",
        a: "Evaluate its experience with customer data architecture, integrations, privacy and governance, implementation methodology, and measurable business outcomes.",
    },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <span className={styles.eyebrowTag}>
            <span className={styles.pillDot} />
            {children}
        </span>
    );
}

export default function AdobeExperiencePlatformPage() {
    return (
        <div className={styles.page}>
            <div className={styles.panel}>
                {/* ---------- Hero ---------- */}
                <section className={styles.heroWrap}>
                    <nav className={styles.crumbBar} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">›</span>
                        <Link href={PARENT_HREF}>Platforms</Link>
                        <span aria-hidden="true">›</span>
                        <span className={styles.crumbCurrent} aria-current="page">
                            Adobe Experience
                        </span>
                    </nav>
                    <div className={styles.hero}>
                        <div className={styles.heroGrid}>
                            <div>
                                <Eyebrow>CUSTOMER DATA &amp; EXPERIENCE PLATFORM</Eyebrow>
                                <h1 className={styles.heroTitle}>
                                    Adobe <span className={styles.gradText}>Experience Platform</span> Consulting Services
                                </h1>
                                <p className={styles.heroCopy}>
                                    Unify customer data, improve audience insights, and deliver personalized digital experiences with
                                    Adobe Experience Platform. Atlantech Global helps businesses plan, implement, and optimize
                                    data-driven customer experience solutions.
                                </p>
                                <div className={styles.ctaRow}>
                                    <Link href="/contact" className={styles.solidBtn}>
                                        BOOK A CONSULTATION
                                        <Ic name="external" />
                                    </Link>
                                    <Link href="/contact" className={styles.ghostBtn}>
                                        SPEAK TO AN ADOBE EXPERT
                                    </Link>
                                </div>
                                <ul className={styles.heroChips}>
                                    {heroChips.map((h) => (
                                        <li key={h.text}>
                                            <Ic name={h.icon} />
                                            {h.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.heroArtCard}>
                                <div className={styles.heroImgWrap}>
                                    <img
                                        className={styles.heroImg}
                                        src={asset(HERO_IMAGE)}
                                        alt="Isometric purple data layers illustrating a unified customer profile mesh in Adobe Experience Platform"
                                        width={892}
                                        height={496}
                                        fetchPriority="high"
                                    />
                                    <span className={styles.heroOverlay}>
                                        <span className={styles.overlayTop}>
                                            <span>CUSTOMER DATA LAYER • UNIFIED PROFILE MESH</span>
                                            <span className={styles.greenDot} />
                                        </span>
                                        <span className={styles.overlayStatus}>STATUS: CONNECTED CUSTOMER DATA</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Services ---------- */}
                <section className={styles.section}>
                    <div className={`${styles.head} ${styles.headCenter}`}>
                        <Eyebrow>PRACTICE CAPABILITIES</Eyebrow>
                        <h2 className={styles.title}>Adobe Experience Platform Consulting and Development</h2>
                        <p className={styles.lead}>
                            Our Adobe Experience Platform consulting services help organizations build a stronger foundation for
                            customer data management and activation.
                        </p>
                    </div>
                    <ul className={styles.serviceGrid}>
                        {services.map((s) => (
                            <li key={s.title}>
                                <span className={styles.tile40}>
                                    <Ic name={s.icon} />
                                </span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <span className={styles.serviceTag}>
                                    {s.tag}
                                    <Ic name="arrow" />
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- Why choose ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <div className={styles.whyGrid}>
                        <div>
                            <Eyebrow>DOMAIN EXPERTISE</Eyebrow>
                            <h2 className={`${styles.title} ${styles.titleTight}`}>
                                Why Choose Our Adobe Experience Platform Consulting Company?
                            </h2>
                            <ul className={styles.tickList}>
                                {whyPoints.map((p) => (
                                    <li key={p}>
                                        <span className={styles.tickDot}>
                                            <Ic name="check" />
                                        </span>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.topology}>
                            <div className={styles.topoHead}>
                                <span className={styles.topoLabel}>ENTERPRISE TOPOLOGY</span>
                                <h3>Synchronized Customer Data &amp; Identity Mesh</h3>
                                <span className={styles.topoIcon}>
                                    <Ic name="nodes" />
                                </span>
                            </div>
                            <div className={styles.topoBody}>
                                {nodes.slice(0, 2).map((nd) => (
                                    <div key={nd.n} className={styles.nodeCard}>
                                        <span className={styles.nodeTop}>
                                            <small>{nd.n}</small>
                                            <Ic name={nd.icon} />
                                        </span>
                                        <b>{nd.title}</b>
                                        <span>{nd.desc}</span>
                                    </div>
                                ))}
                                <div className={styles.core}>
                                    <small>CENTER HUB</small>
                                    <b>Central Unified Profile &amp; Identity Graph</b>
                                    <span>Unified customer profiles and identity resolution</span>
                                </div>
                                {nodes.slice(2).map((nd) => (
                                    <div key={nd.n} className={styles.nodeCard}>
                                        <span className={styles.nodeTop}>
                                            <small>{nd.n}</small>
                                            <Ic name={nd.icon} />
                                        </span>
                                        <b>{nd.title}</b>
                                        <span>{nd.desc}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.topoFoot}>
                                <span>DATA QUALITY &amp; GOVERNANCE • CONNECTED CUSTOMER DATA</span>
                                <Ic name="shieldCheck" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Process ---------- */}
                <section className={styles.section}>
                    <div className={`${styles.head} ${styles.headCenter}`}>
                        <Eyebrow>STRUCTURED METHODOLOGY</Eyebrow>
                        <h2 className={styles.title}>Our Implementation Process</h2>
                    </div>
                    <ol className={styles.stepGrid}>
                        {steps.map((s, i) => (
                            <li key={s.chip}>
                                <div className={styles.stepTop}>
                                    <span className={styles.stepNum}>{pad(i + 1)}</span>
                                    <span className={styles.phase}>PHASE {i + 1}</span>
                                </div>
                                <span className={styles.stepChip}>{s.chip}</span>
                                <h3>Step {i + 1}</h3>
                                <p>{s.desc}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ---------- Strip ---------- */}
                <section className={`${styles.section} ${styles.band} ${styles.stripSection}`}>
                    <div className={styles.strip}>
                        <div>
                            <Eyebrow>ACCELERATE CUSTOMER IMPACT</Eyebrow>
                            <h3>Turn Customer Data into Better Experiences</h3>
                            <p className={styles.stripCopy}>
                                Build a practical roadmap for connected customer data and personalized engagement.
                            </p>
                        </div>
                        <Link href="/contact" className={styles.stripBtn}>
                            TALK TO OUR ADOBE EXPERIENCE TEAM
                            <Ic name="arrow" />
                        </Link>
                    </div>
                </section>

                {/* ---------- Growth ---------- */}
                <section className={styles.section}>
                    <div className={styles.fnGrid}>
                        <div className={styles.fnArt}>
                            <img
                                className={styles.fnImg}
                                src={asset(GROWTH_IMAGE)}
                                alt="Isometric customer data platform connecting data sources, profiles, audiences and touchpoints"
                                width={892}
                                height={560}
                                loading="lazy"
                            />
                            <ul className={styles.tagRow}>
                                {growthTags.map((t) => (
                                    <li key={t}>[{t}]</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Eyebrow>DATA ACTIVATION &amp; ENGAGEMENT</Eyebrow>
                            <h2 className={`${styles.title} ${styles.titleTight}`}>Adobe Experience Platform for Data-Driven Growth</h2>
                            <p className={styles.lead}>
                                Create a more connected view of your customers by bringing relevant data together, supporting audience
                                segmentation, and enabling more consistent experiences across digital touchpoints.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ---------- FAQ ---------- */}
                <section className={`${styles.section} ${styles.band} ${styles.sectionFaq}`} id="faq">
                    <div className={`${styles.head} ${styles.headCenter}`}>
                        <Eyebrow>KNOWLEDGE BASE</Eyebrow>
                        <h2 className={styles.title}>Frequently Asked Questions About Adobe Experience</h2>
                    </div>
                    <div className={styles.faqWrap}>
                        <AepFaq items={faqs} />
                    </div>
                </section>
            </div>
        </div>
    );
}