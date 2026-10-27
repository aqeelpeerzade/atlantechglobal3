import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import ModernFaq, { type ModernFaqItem } from "./modernfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Application Modernization Services",
    description:
        "Application Modernization Services for scalable enterprise systems: rehost, replatform, refactor, rearchitect or rebuild legacy applications into scalable, flexible and maintainable systems.",
    alternates: { canonical: "/digital-transformation/application-modernization/" },
};

/** Where the "Digital Transformation Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/digital-transformation-services";
/** Hero image in /public/images — change the file name if yours differs. */
const HERO_IMAGE = "/images/digital-growth.png";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
    `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
    cloudUp: "M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4.5 4.5 0 0 1 17 18M12 20v-7M9 15l3-3 3 3",
    upload: "M12 18V6M7 11l5-5 5 5M5 21h14",
    codeBox: r(4, 4, 16, 16, 3) + "M10 10l-2 2 2 2M14 10l2 2-2 2",
    tree: r(4, 4, 6, 5, 1) + r(14, 10, 6, 5, 1) + r(14, 17, 6, 4, 1) + "M7 9v10h7M7 12.5h7",
    tools: "M14 7l3 3M4 20l9-9M15 3l6 6-3 3-6-6zM3 14l3-3 3 3-3 3z",
    chevron: "M9 6l6 6-6 6",
    arrow: "M5 12h14M13 6l6 6-6 6",
    checkCircle: c(12, 12, 9) + "M8.5 12.5l2.5 2.5 4.5-5",
    sync: c(12, 12, 9) + "M15.5 9.5a4.5 4.5 0 0 0-7.5 1M8.5 14.5a4.5 4.5 0 0 0 7.5-1M8 8v3h3M16 16v-3h-3",
    cube: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9",
    trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
    gauge: "M4 17a8 8 0 1 1 16 0M12 17l4-5M7 17h.01M17 17h.01",
    nodes: c(12, 12, 2.4) + c(12, 4, 1.6) + c(4.5, 16.5, 1.6) + c(19.5, 16.5, 1.6) + "M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3",
    scales: "M12 4v16M8 20h8M5 7h14M5 7l-3 7a3.5 3.5 0 0 0 6 0zM19 7l-3 7a3.5 3.5 0 0 0 6 0z",
    wrench: c(12, 12, 9) + "M14.5 8.5a2.5 2.5 0 0 0-3 3L8.5 14.5l1 1 3-3a2.5 2.5 0 0 0 3-3l-1.5 1.5-1-1z",
    sliders: "M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M8 14v6",
    cloudSync: "M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4.5 4.5 0 0 1 17 18zM9 14l3-3 3 3",
    help: c(12, 12, 9) + "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01",
    badgeCheck: "M12 3l2.3 1.5 2.7-.2 1 2.5 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-1 2.5-2.7-.2L12 21l-2.3-1.5-2.7.2-1-2.5-2.2-1.6.9-2.6-.9-2.6L6 8.8l1-2.5 2.7.2zM9 12l2 2 4-4",
    external: "M7 17L17 7M8 7h9v9",
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

const approaches: { icon: IconName; title: string; desc: string }[] = [
    { icon: "cloudUp", title: "Rehost", desc: "Move applications to a modern infrastructure with minimal changes." },
    { icon: "upload", title: "Replatform", desc: "Move applications to a newer platform with targeted improvements." },
    { icon: "codeBox", title: "Refactor", desc: "Improve the application's code and architecture while retaining core functionality." },
    { icon: "tree", title: "Rearchitect", desc: "Redesign the application architecture for scalability and flexibility." },
    { icon: "tools", title: "Rebuild", desc: "Develop a modern application when the existing system cannot support future requirements." },
];

const challenges = [
    { problem: "High maintenance costs", solution: "Modernize outdated technology components." },
    { problem: "Limited scalability", solution: "Introduce architectures designed for changing workloads." },
    { problem: "Disconnected applications", solution: "Enable APIs and modern integrations." },
    { problem: "Slow development cycles", solution: "Adopt modern development practices." },
    { problem: "Technology constraints", solution: "Create a foundation for newer digital capabilities." },
];

const steps = [
    { title: "Assess", desc: "Understand applications, dependencies and technology risks." },
    { title: "Plan", desc: "Select the right modernization approach." },
    { title: "Design", desc: "Define the target architecture." },
    { title: "Modernize", desc: "Transform applications in planned phases." },
    { title: "Test", desc: "Validate functionality, security and performance." },
    { title: "Optimize", desc: "Continuously improve the modernized environment." },
];

const benefits: { icon: IconName; text: string }[] = [
    { icon: "trend", text: "Better application scalability" },
    { icon: "gauge", text: "Improved system performance" },
    { icon: "nodes", text: "Easier integration" },
    { icon: "scales", text: "Reduced technical debt" },
    { icon: "wrench", text: "Improved maintainability" },
    { icon: "sliders", text: "Greater technology flexibility" },
    { icon: "cloudSync", text: "Better readiness for cloud and emerging technologies" },
];

const faqs: ModernFaqItem[] = [
    {
        q: "What are Application Modernization Services?",
        a: "They help organizations transform legacy applications using modern architectures, technologies, platforms and development practices.",
    },
    {
        q: "Does application modernization mean replacing legacy applications?",
        a: "No. Organizations can choose approaches such as rehosting, replatforming, refactoring, rearchitecting or rebuilding based on their requirements.",
    },
    {
        q: "Why should enterprises modernize applications?",
        a: "Modernization can address limitations around scalability, performance, integration, maintenance and technology flexibility.",
    },
];

/** Decorative "core mesh" diagram: five nodes around a core, on two dotted rings. */
function MeshDiagram() {
    const nodes = [
        { x: 120, y: 58, fill: "#5b6cf0" },
        { x: 179, y: 101, fill: "#6a7af0" },
        { x: 156, y: 170, fill: "#7a22c8" },
        { x: 84, y: 170, fill: "#630ed4" },
        { x: 61, y: 101, fill: "#7c3aed" },
    ];
    return (
        <svg className={styles.mesh} viewBox="0 0 240 240" role="img" aria-label="Core mesh connected to five services">
            <circle cx="120" cy="120" r="62" className={styles.meshRing} />
            <circle cx="120" cy="120" r="84" className={styles.meshRing} />
            {nodes.map((n) => (
                <line key={`l${n.x}`} x1="120" y1="120" x2={n.x} y2={n.y} className={styles.meshLine} />
            ))}
            {nodes.map((n) => (
                <rect key={`n${n.x}`} x={n.x - 9} y={n.y - 9} width="18" height="18" rx="4" fill={n.fill} className={styles.meshNode} />
            ))}
            <circle cx="120" cy="120" r="29" className={styles.meshCore} />
            <path d="M120 106l9 5v10l-9 5-9-5v-10zM111 111l9 5 9-5M120 116v10" className={styles.meshCube} />
            <text x="120" y="136" textAnchor="middle" className={styles.meshText}>
                CORE MESH
            </text>
        </svg>
    );
}

export default function ApplicationModernizationPage() {
    return (
        <div className={styles.page}>
            <div className={styles.panel}>
                {/* ---------- Breadcrumb ---------- */}
                <nav className={styles.crumbBar} aria-label="Breadcrumb">
                    <Link href="/">Home</Link>
                    <span aria-hidden="true">›</span>
                    <Link href={PARENT_HREF}>Digital Transformation Services</Link>
                    <span aria-hidden="true">›</span>
                    <span className={styles.crumbCurrent} aria-current="page">
                        Application Modernization
                    </span>
                </nav>

                {/* ---------- Hero ---------- */}
                <section className={styles.hero}>
                    <div className={styles.heroGrid}>
                        <div>
                            <span className={styles.eyebrowPill}>
                                <span className={styles.pillDot} />
                                APPLICATION MODERNIZATION
                            </span>
                            <h1 className={styles.heroTitle}>
                                Application Modernization Services for <span className={styles.gradText}>Scalable Enterprise Systems</span>
                            </h1>
                            <p className={styles.heroCopy}>
                                Legacy applications can slow innovation, increase maintenance requirements and make integration
                                difficult. Our Application Modernization Services help enterprises transform existing applications into
                                more scalable, flexible and maintainable systems.
                            </p>
                            <Link href="/contact" className={styles.solidBtn}>
                                Modernize Your Applications
                                <Ic name="external" />
                            </Link>
                        </div>
                        <div className={styles.heroCard}>
                            <div className={styles.heroImgWrap}>
                                <img
                                    className={styles.heroImg}
                                    src={asset(HERO_IMAGE)}
                                    alt="Glass cube transforming into a connected cloud-native architecture"
                                    width={892}
                                    height={558}
                                    fetchPriority="high"
                                />
                                <span className={styles.heroBadge}>
                                    <Ic name="badgeCheck" />
                                    CLOUD NATIVE FABRIC
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Approach ---------- */}
                <section className={`${styles.section} ${styles.white}`}>
                    <div className={styles.head}>
                        <p className={styles.eyebrow}>STRATEGIC PATHWAYS</p>
                        <h2 className={styles.title}>Choose the Right Modernization Approach</h2>
                        <p className={styles.leadInk}>Not every application needs to be rebuilt from scratch.</p>
                        <p className={styles.leadSm}>Depending on your business needs, we help with:</p>
                    </div>
                    <ol className={styles.approachGrid}>
                        {approaches.map((a, i) => (
                            <li key={a.title}>
                                <div className={styles.approachTop}>
                                    <span className={styles.bigNum}>{pad(i + 1)}</span>
                                    <span className={styles.tileWhite}>
                                        <Ic name={a.icon} />
                                    </span>
                                </div>
                                <h3>{a.title}</h3>
                                <p>{a.desc}</p>
                                {i < approaches.length - 1 && (
                                    <span className={styles.connector} aria-hidden="true">
                                        <Ic name="chevron" />
                                    </span>
                                )}
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ---------- Blueprint ---------- */}
                <section className={`${styles.section} ${styles.pale}`}>
                    <div className={`${styles.head} ${styles.headCenter}`}>
                        <p className={styles.eyebrow}>TRANSFORMATION BLUEPRINT</p>
                        <h2 className={styles.title}>Enterprise Modernization Services for Legacy Environments</h2>
                        <p className={styles.lead}>We address common legacy challenges:</p>
                    </div>
                    <ul className={styles.blueprint}>
                        {challenges.map((ch, i) => (
                            <li key={ch.problem}>
                                <span className={styles.bpLeft}>
                                    <b>{pad(i + 1)}</b>
                                    {ch.problem}
                                </span>
                                <span className={styles.bpArrow}>
                                    <Ic name="arrow" />
                                </span>
                                <span className={styles.bpRight}>
                                    <Ic name="checkCircle" />
                                    {ch.solution}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- Radial matrix ---------- */}
                <section className={`${styles.section} ${styles.white}`}>
                    <div className={`${styles.head} ${styles.headCenter}`}>
                        <p className={styles.eyebrow}>RADIAL ARCHITECTURE MATRIX</p>
                        <h2 className={styles.title}>Enterprise Modernization Services for Legacy Environments</h2>
                        <p className={styles.lead}>We address common legacy challenges:</p>
                    </div>
                    <div className={styles.radial}>
                        <div className={styles.radialLeft}>
                            {challenges.slice(0, 2).map((ch, i) => (
                                <article className={styles.chCard} key={ch.problem}>
                                    <p className={styles.chHead}>
                                        <span className={styles.chNum}>{pad(i + 1)}</span>CHALLENGE
                                    </p>
                                    <h3>{ch.problem}</h3>
                                    <p className={styles.solution}>
                                        <Ic name="sync" />
                                        <span>
                                            <b>Solution:</b> {ch.solution}
                                        </span>
                                    </p>
                                </article>
                            ))}
                        </div>
                        <div className={styles.meshCol}>
                            <div className={styles.meshBox}>
                                <div className={styles.meshInner}>
                                    <MeshDiagram />
                                </div>
                            </div>
                            <p className={styles.meshCaption}>Decoupled Microservices &amp; API Integration Mesh</p>
                        </div>
                        <div className={styles.radialRight}>
                            {challenges.slice(2).map((ch, i) => (
                                <article className={styles.chCard} key={ch.problem}>
                                    <p className={styles.chHead}>
                                        <span className={styles.chNum}>{pad(i + 3)}</span>CHALLENGE
                                    </p>
                                    <h3>{ch.problem}</h3>
                                    <p className={styles.solution}>
                                        <Ic name="sync" />
                                        <span>
                                            <b>Solution:</b> {ch.solution}
                                        </span>
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------- Process ---------- */}
                <section className={`${styles.section} ${styles.pale}`}>
                    <div className={`${styles.head} ${styles.headWide}`}>
                        <p className={styles.eyebrow}>EXECUTION METHODOLOGY</p>
                        <h2 className={styles.title}>Our Application Modernization Process</h2>
                    </div>
                    <ol className={styles.stepGrid}>
                        {steps.map((s, i) => (
                            <li key={s.title}>
                                <span className={`${styles.stepNum}${i === 0 ? ` ${styles.stepFirst}` : ""}${i === steps.length - 1 ? ` ${styles.stepLast}` : ""}`}>
                                    {pad(i + 1)}
                                </span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ---------- Benefits ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <div className={`${styles.head} ${styles.headSplit}`}>
                        <div>
                            <p className={styles.eyebrow}>STRATEGIC OUTCOMES</p>
                            <h2 className={styles.title}>Business Benefits</h2>
                        </div>
                        <p className={styles.tagline}>Modernize today. Prepare for tomorrow.</p>
                    </div>
                    <ul className={styles.benefitGrid}>
                        {benefits.map((b) => (
                            <li key={b.text}>
                                <span className={styles.tileLav}>
                                    <Ic name={b.icon} />
                                </span>
                                <h3>{b.text}</h3>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- FAQ ---------- */}
                <section className={`${styles.section} ${styles.white}`} id="faq">
                    <div className={styles.faqGrid}>
                        <div>
                            <span className={styles.advisoryPill}>
                                <Ic name="help" />
                                ARCHITECTURE ADVISORY
                            </span>
                            <h2 className={`${styles.title} ${styles.faqTitle}`}>Frequently Asked Questions About Application Modernization</h2>
                            <p className={styles.faqLead}>
                                Key considerations and strategic insights for planning your enterprise systems roadmap.
                            </p>
                            <aside className={styles.desk}>
                                <div className={styles.deskHead}>
                                    <span className={styles.deskIcon}>
                                        <Ic name="tree" />
                                    </span>
                                    <h3>Modernization Advisory</h3>
                                </div>
                                <p>Our solution architects provide structured legacy assessment frameworks tailored to enterprise compliance standards.</p>
                            </aside>
                        </div>
                        <ModernFaq items={faqs} />
                    </div>
                </section>
            </div>
        </div>
    );
}