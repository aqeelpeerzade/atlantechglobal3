import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import ErpFaq, { type ErpFaqItem } from "./erpfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "ERPNext Consulting Services & Development | Atlantech Global",
    description:
        "Simplify operations with ERPNext consulting services, custom development, integrations, and implementation support from Atlantech Global. Book a consultation today.",
    alternates: { canonical: "/platforms/erpnext-consulting-services/" },
};

/** Where the "Platforms" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/platforms";
/** Hero image in /public/images. */
const HERO_IMAGE = "/images/erp-next.jpg";
/** Section 5 image in /public/images — the document says "Add image"; change the file name to yours. */
const FUNCTIONS_IMAGE = "/images/erp-next.jpg";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
    `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
    external: "M7 17L17 7M8 7h9v9",
    arrow: "M5 12h14M13 6l6 6-6 6",
    check: "M5 12.5l4.5 4.5L19 7.5",
    /* hero chips */
    ledger: "M4 7h16M4 12h16M4 17h10M18 15v4M16 17h4",
    workflow: c(12, 12, 2.4) + "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8",
    swap: "M4 8h13M14 4l4 4-4 4M20 16H7M10 12l-4 4 4 4",
    /* capabilities */
    sliders: "M4 8h9M17 8h3M4 16h3M11 16h9" + c(15, 8, 2) + c(9, 16, 2),
    screen: r(3, 5, 18, 14, 2) + "M7 10l2.5 2L7 14M12 14h5",
    migrate: r(4, 4, 16, 16, 2) + "M8 12h8M13 9l3 3-3 3",
    integrate: r(4, 4, 16, 16, 2) + "M8 9h8M8 15h8M12 6v12",
    support: "M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1z",
    /* panel nodes */
    ledgerSm: r(4, 4, 16, 16, 2) + "M8 9h8M8 13h5",
    stockSm: "M3 8l9-5 9 5-9 5zM3 8v8l9 5 9-5V8M12 13v8",
    hub: c(12, 12, 2.4) + c(12, 4.5, 1.5) + c(5, 16.5, 1.5) + c(19, 16.5, 1.5) + "M12 6v3.6M6.3 15.7l4-2.3M17.7 15.7l-4-2.3",
    sync: "M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4",
    crmSm: r(4, 4, 16, 16, 2) + "M4 9h16M9 9v11",
    bomSm: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9",
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
    { icon: "ledger", text: "Finance & Inventory" },
    { icon: "workflow", text: "Sales & Purchasing" },
    { icon: "swap", text: "Manufacturing & Workflows" },
];

const services: { icon: IconName; title: string; desc: string; tag: string }[] = [
    { icon: "sliders", title: "ERP Implementation", desc: "Configure ERPNext around your business requirements.", tag: "IMPLEMENTATION FRAMEWORK" },
    { icon: "screen", title: "Custom Development", desc: "Develop workflows, reports, and features tailored to your operations.", tag: "CUSTOM WORKFLOWS" },
    { icon: "migrate", title: "Data Migration", desc: "Plan and validate the transfer of business data.", tag: "MIGRATION PROTOCOLS" },
    { icon: "integrate", title: "ERP Integration", desc: "Connect ERPNext with websites, ecommerce platforms, and other applications.", tag: "ECOSYSTEM CONNECTIVITY" },
    { icon: "support", title: "Training and Support", desc: "Help teams adopt the system and manage day-to-day operations.", tag: "LIFECYCLE ADOPTION" },
];

const partnerPoints = [
    "Business process assessment and gap analysis.",
    "Role-based access and workflow configuration.",
    "Customized dashboards and reports.",
    "Integration and post-implementation support.",
    "Scalable ERP solutions for evolving requirements.",
];

const nodes: { n: string; icon: IconName; title: string }[] = [
    { n: "NODE 01", icon: "ledgerSm", title: "FINANCE & LEDGER" },
    { n: "NODE 02", icon: "stockSm", title: "SUPPLY CHAIN & INVENTORY" },
    { n: "NODE 03", icon: "crmSm", title: "SALES & CRM" },
    { n: "NODE 04", icon: "bomSm", title: "MANUFACTURING & BOM" },
];

const steps: { title: string; label: string; desc: string; foot: string }[] = [
    { title: "Assess", label: "Step 1", desc: "Map your current business processes.", foot: "DISCOVERY & GAP ANALYSIS" },
    { title: "Configure", label: "Step 2", desc: "Set up modules, roles, and workflows.", foot: "MODULES, ROLES & WORKFLOWS" },
    { title: "Customize", label: "Step 3", desc: "Develop required features and integrations.", foot: "CUSTOM EXTENSIONS & APIS" },
    { title: "Launch", label: "Step 4", desc: "Validate data, train users, and support deployment.", foot: "VALIDATION & CUTOVER" },
];

const modules = ["Accounting", "Procurement", "Inventory", "Sales", "CRM", "Manufacturing", "Projects", "HR"];

const faqs: ErpFaqItem[] = [
    {
        q: "What is ERPNext?",
        a: "ERPNext is an open-source enterprise resource planning system that helps businesses manage finance, inventory, sales, purchasing, manufacturing, and other operations in one platform.",
    },
    {
        q: "What do ERPNext consulting services include?",
        a: "ERPNext consulting services include business process analysis, implementation, module configuration, customization, data migration, integration, training, and support.",
    },
    {
        q: "How do I choose an ERPNext development company?",
        a: "Choose an ERPNext development company with relevant implementation experience, process knowledge, customization capabilities, integration expertise, and a clear support plan.",
    },
    {
        q: "What does an ERPNext consultant do?",
        a: "An ERPNext consultant evaluates business processes, recommends suitable modules, configures workflows, coordinates implementation, and helps users adopt the system.",
    },
];

function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
    return (
        <span className={`${styles.eyebrowTag}${center ? ` ${styles.eyebrowCenter}` : ""}`}>
            <span className={styles.pillDot} />
            {children}
        </span>
    );
}

export default function ErpnextPage() {
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
                            ERPNext
                        </span>
                    </nav>
                    <div className={styles.hero}>
                        <div className={styles.heroGrid}>
                            <div>
                                <Eyebrow>ENTERPRISE RESOURCE PLANNING</Eyebrow>
                                <h1 className={styles.heroTitle}>
                                    ERPNext Consulting Services for <span className={styles.gradText}>Growing Businesses</span>
                                </h1>
                                <p className={styles.heroCopy}>
                                    Simplify business operations with ERPNext implementation, customization, and integration. Atlantech
                                    Global helps organizations connect finance, inventory, sales, purchasing, manufacturing, and other
                                    essential workflows through a unified ERP solution.
                                </p>
                                <div className={styles.ctaRow}>
                                    <Link href="/contact" className={styles.solidBtn}>
                                        BOOK AN ERPNEXT CONSULTATION
                                        <Ic name="external" />
                                    </Link>
                                    <Link href="/contact" className={styles.ghostBtn}>
                                        Get Started
                                        <Ic name="arrow" />
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
                                        alt="Isometric purple blocks representing a connected ERPNext platform across finance, inventory, manufacturing and sales"
                                        width={892}
                                        height={496}
                                        fetchPriority="high"
                                    />
                                    <span className={styles.heroOverlay}>
                                        <span className={styles.overlayTop}>
                                            <span className={styles.pillDot} />
                                            CONNECTED ERP CORE · ACTIVE MESH
                                        </span>
                                        <span className={styles.overlaySub}>FINANCE · INVENTORY · MANUFACTURING · SALES</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Services ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <div className={`${styles.head} ${styles.headCenter}`}>
                        <Eyebrow center>PRACTICE CAPABILITIES</Eyebrow>
                        <h2 className={styles.title}>ERPNext Consulting Services and Development</h2>
                        <p className={styles.lead}>
                            Our ERPNext consulting services help businesses adopt an ERP system that fits their processes and growth
                            plans.
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

                {/* ---------- Partner ---------- */}
                <section className={styles.section}>
                    <div className={styles.partnerGrid}>
                        <div>
                            <Eyebrow>DOMAIN EXPERTISE</Eyebrow>
                            <h2 className={`${styles.title} ${styles.titleTight}`}>Your ERPNext Development Partner</h2>
                            <p className={styles.lead}>
                                As an ERPNext development company, Atlantech Global focuses on practical solutions that improve
                                operational visibility and reduce disconnected processes.
                            </p>
                            <ul className={styles.tickList}>
                                {partnerPoints.map((p) => (
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
                                <span className={styles.topoLabel}>ARCHITECTURE TOPOLOGY</span>
                                <h3>Synchronized Operational Ledger &amp; Workflow Mesh</h3>
                            </div>
                            <div className={styles.topoBody}>
                                <div className={styles.nodeGrid}>
                                    {nodes.slice(0, 2).map((nd) => (
                                        <div key={nd.n} className={styles.nodeCard}>
                                            <span className={styles.nodeTop}>
                                                <small>{nd.n}</small>
                                                <Ic name={nd.icon} />
                                            </span>
                                            <b>{nd.title}</b>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.core}>
                                    <span className={styles.coreIcon}>
                                        <Ic name="hub" />
                                    </span>
                                    <span className={styles.coreText}>
                                        <b>CENTRAL ERPNEXT WORKFLOW CORE</b>
                                        <small>Role-based access and workflow configuration</small>
                                    </span>
                                    <Ic name="sync" />
                                </div>
                                <div className={styles.nodeGrid}>
                                    {nodes.slice(2).map((nd) => (
                                        <div key={nd.n} className={styles.nodeCard}>
                                            <span className={styles.nodeTop}>
                                                <small>{nd.n}</small>
                                                <Ic name={nd.icon} />
                                            </span>
                                            <b>{nd.title}</b>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.topoFoot}>
                                <span>
                                    <span className={styles.pillDot} />
                                    UNIFIED ERP · CONNECTED WORKFLOWS
                                </span>
                                <Ic name="shieldCheck" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Process ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <div className={`${styles.head} ${styles.headCenter}`}>
                        <Eyebrow center>STRUCTURED METHODOLOGY</Eyebrow>
                        <h2 className={styles.title}>Our ERPNext Implementation Process</h2>
                    </div>
                    <ol className={styles.stepGrid}>
                        {steps.map((s, i) => (
                            <li key={s.title}>
                                <div className={styles.stepTop}>
                                    <span className={styles.stepNum}>{pad(i + 1)}</span>
                                    <span className={styles.phase}>PHASE {i + 1}</span>
                                </div>
                                <h3>
                                    {s.label} — {s.title}
                                </h3>
                                <p>{s.desc}</p>
                                <span className={styles.stepFoot}>{s.foot}</span>
                            </li>
                        ))}
                    </ol>

                    <div className={styles.strip}>
                        <div>
                            <p className={styles.stripEyebrow}>
                                <span className={styles.pillDot} />
                                ACCELERATE OPERATIONAL EXCELLENCE
                            </p>
                            <h3>Ready to Streamline Your Business Operations?</h3>
                            <p className={styles.stripCopy}>
                                Work with an ERPNext consultant to identify process gaps and plan a practical ERP implementation.
                            </p>
                        </div>
                        <Link href="/contact" className={styles.stripBtn}>
                            DISCUSS YOUR ERP REQUIREMENTS
                            <Ic name="arrow" />
                        </Link>
                    </div>
                </section>

                {/* ---------- Functions ---------- */}
                <section className={styles.section}>
                    <div className={styles.fnGrid}>
                        <div className={styles.fnArt}>
                            <img
                                className={styles.fnImg}
                                src={asset(FUNCTIONS_IMAGE)}
                                alt="Isometric ERP modules connected by glowing data paths across business functions"
                                width={892}
                                height={560}
                                loading="lazy"
                            />
                            <div className={styles.spectrum}>
                                <p>ENTERPRISE FUNCTIONAL SPECTRUM</p>
                                <ul>
                                    {modules.map((m) => (
                                        <li key={m}>[ {m} ]</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <Eyebrow>FUNCTIONAL COHESION</Eyebrow>
                            <h2 className={`${styles.title} ${styles.titleTight}`}>ERPNext Solutions Across Business Functions</h2>
                            <p className={styles.lead}>
                                ERPNext can support accounting, procurement, inventory, sales, CRM, manufacturing, projects, and HR. We
                                help identify the relevant modules and configure them to match your business processes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ---------- FAQ ---------- */}
                <section className={`${styles.section} ${styles.band} ${styles.sectionFaq}`} id="faq">
                    <div className={`${styles.head} ${styles.headCenter}`}>
                        <Eyebrow center>KNOWLEDGE BASE</Eyebrow>
                        <h2 className={styles.title}>Frequently Asked Questions About ERPNext</h2>
                    </div>
                    <div className={styles.faqWrap}>
                        <ErpFaq items={faqs} />
                    </div>
                </section>
            </div>
        </div>
    );
}