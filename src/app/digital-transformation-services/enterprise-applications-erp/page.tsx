import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import ErpFaq, { type ErpFaqItem } from "./erpfaq";
import styles from "./page.module.css";

/* The content document has no meta title or description for this page, so these are drafted from its copy. */
export const metadata: Metadata = {
    title: "Enterprise Applications & ERP Solutions",
    description:
        "Enterprise application development and ERP integration, modernization and customization from Atlantech Global. Connect people, processes, systems and data.",
    alternates: { canonical: "/digital-transformation/enterprise-applications-erp/" },
};

/** Hero image: public/images/google-cloud.jpg (as you named it). Change the file name here if you swap it. */
const HERO_IMAGE = "/images/enterprise-erp.jpg";

function Icon({ children }: { children: ReactNode }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            {children}
        </svg>
    );
}

const icons = {
    flowchart: (
        <Icon>
            <rect x="3" y="4" width="6" height="5" rx="1" />
            <rect x="15" y="4" width="6" height="5" rx="1" />
            <rect x="15" y="15" width="6" height="5" rx="1" />
            <path d="M9 6.5h6M18 9v6M6 9v8h9" />
        </Icon>
    ),
    crm: (
        <Icon>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <circle cx="12" cy="11" r="2" />
            <path d="M8 16c.5-1.5 2-2.2 4-2.2s3.5.7 4 2.2" />
        </Icon>
    ),
    layers: (
        <Icon>
            <path d="M12 4l8 4-8 4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
        </Icon>
    ),
    chart: (
        <Icon>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 16v-4M12 16V8M16 16v-6" />
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
    check: (
        <Icon>
            <circle cx="12" cy="12" r="8" />
            <path d="M8.5 12.5l2.5 2.5 4.5-5" />
        </Icon>
    ),
    wallet: (
        <Icon>
            <rect x="3" y="6" width="18" height="14" rx="2" />
            <path d="M3 10h18M16 15h2" />
        </Icon>
    ),
    truck: (
        <Icon>
            <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7M7 19h.01M17 19h.01" />
        </Icon>
    ),
    cog: (
        <Icon>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1" />
        </Icon>
    ),
    idCard: (
        <Icon>
            <rect x="4" y="6" width="16" height="14" rx="2" />
            <path d="M9 6V4h6v2M8 13h3M8 16h8M14 12h2" />
        </Icon>
    ),
    headset: (
        <Icon>
            <path d="M5 14v-2a7 7 0 0 1 14 0v2" />
            <rect x="3" y="14" width="4" height="6" rx="1.5" />
            <rect x="17" y="14" width="4" height="6" rx="1.5" />
            <path d="M19 20c0 1-2 2-5 2" />
        </Icon>
    ),
    swap: (
        <Icon>
            <path d="M7 4L3 8l4 4M3 8h17M17 12l4 4-4 4M21 16H4" />
        </Icon>
    ),
    up: (
        <Icon>
            <path d="M12 19V6M7 11l5-5 5 5M5 21h14" />
        </Icon>
    ),
    sliders: (
        <Icon>
            <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M8 14v6" />
        </Icon>
    ),
    move: (
        <Icon>
            <path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3" />
        </Icon>
    ),
    database: (
        <Icon>
            <ellipse cx="12" cy="6" rx="7" ry="3" />
            <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </Icon>
    ),
    refresh: (
        <Icon>
            <path d="M20 12a8 8 0 0 0-14-5.3L4 9M4 4v5h5M4 12a8 8 0 0 0 14 5.3L20 15M20 20v-5h-5" />
        </Icon>
    ),
    history: (
        <Icon>
            <path d="M4 12a8 8 0 1 0 3-6.2M4 4v5h5M12 8v4l3 2" />
        </Icon>
    ),
    gauge: (
        <Icon>
            <path d="M4 17a8 8 0 1 1 16 0M12 17l4-5M7 17h.01M17 17h.01" />
        </Icon>
    ),
    advisory: (
        <Icon>
            <path d="M12 3L6 21M12 3l6 18M8 15h8" />
        </Icon>
    ),
};

/* ---- Section 1 ---- */
const deliver = [
    "Custom enterprise applications",
    "ERP solutions and integration",
    "API development",
    "Application integration",
    "Workflow automation",
    "Legacy modernization",
    "Business process applications",
    "Enterprise portals",
];

/* ---- Section 2 ---- */
const systems = [
    { icon: icons.flowchart, label: "ERP" },
    { icon: icons.crm, label: "CRM" },
    { icon: icons.layers, label: "Enterprise Applications" },
    { icon: icons.chart, label: "Data & Analytics" },
    { icon: icons.hub, label: "Digital Platforms" },
];
const results = ["Connected data", "Smoother workflows", "Better visibility", "Reduced duplication", "Improved operational efficiency"];

/* ---- Section 3 ---- */
const areas = [
    { icon: icons.wallet, title: "Finance & Accounting", desc: "Improve financial workflows and system connectivity." },
    { icon: icons.truck, title: "Supply Chain", desc: "Connect inventory, procurement and operational processes." },
    { icon: icons.cog, title: "Operations", desc: "Digitize workflows and improve process visibility." },
    { icon: icons.idCard, title: "Human Resources", desc: "Support employee-focused processes and enterprise workflows." },
    { icon: icons.headset, title: "Customer Operations", desc: "Connect customer-facing applications with enterprise systems." },
];

/* ---- Section 4 ---- */
const supportLeft = [
    { icon: icons.swap, label: "ERP integration" },
    { icon: icons.up, label: "ERP modernization" },
    { icon: icons.sliders, label: "Customization" },
    { icon: icons.move, label: "API integration" },
];
const supportRight = [
    { icon: icons.database, label: "Data connectivity" },
    { icon: icons.refresh, label: "Workflow automation" },
    { icon: icons.history, label: "Legacy ERP integration" },
    { icon: icons.gauge, label: "Enterprise system optimization" },
];

/* ---- Section 5 ---- */
const steps = [
    { title: "Understand", sub: "Business requirements" },
    { title: "Design", sub: "Application architecture & user experience" },
    { title: "Develop", sub: "Application & integrations" },
    { title: "Test", sub: "Quality, security & performance" },
    { title: "Deploy", sub: "Production implementation" },
    { title: "Optimize", sub: "Continuous improvement" },
];

/* ---- Section 6 ---- */
const matters = [
    "Standardize business processes",
    "Connect applications and data",
    "Reduce manual workflows",
    "Improve operational visibility",
    "Support business growth",
    "Enable easier integration",
    "Create scalable digital foundations",
];

/* ---- Section 7 ---- */
const faqs: ErpFaqItem[] = [
    {
        q: "What is Enterprise Application Development?",
        a: "It involves developing business applications designed to support enterprise processes, users, data and integrations at scale.",
    },
    {
        q: "What is the role of ERP in digital transformation?",
        a: "ERP connects core business functions and provides a common platform for managing important organizational processes and data.",
    },
    {
        q: "Can legacy ERP systems integrate with modern applications?",
        a: "Yes. APIs, integration platforms and middleware can connect legacy ERP environments with modern applications and digital platforms.",
    },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function EnterpriseApplicationsErpPage() {
    return (
        <div className={styles.page}>
            {/* ---------- Section 1: Hero ---------- */}
            <section className={styles.hero}>
                <div className="container">
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">›</span>
                        <Link href="/digital-transformation-services">Digital Transformation Services</Link>
                        <span aria-hidden="true">›</span>
                        <span className={styles.crumbCurrent} aria-current="page">
                            Enterprise Applications ERP
                        </span>
                    </nav>

                    <div className={styles.heroGrid}>
                        <div>
                            <span className={styles.eyebrowPill}>
                                <span className={styles.pillDot} />
                                ENTERPRISE APPLICATIONS &amp; ERP
                            </span>
                            <h1 className={styles.heroTitle}>
                                Enterprise Application Development for <span className={styles.accent}>Connected Business Operations</span>
                            </h1>
                            <p className={styles.heroCopy}>
                                Build enterprise applications that connect people, processes, systems and data. Our Enterprise
                                Application Development capabilities help organizations create, integrate and modernize applications
                                around their business requirements.
                            </p>
                            <h2 className={styles.deliverHead}>What we deliver</h2>
                            <ul className={styles.deliverGrid}>
                                {deliver.map((d) => (
                                    <li key={d}>
                                        <span className={styles.bullet} />
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.heroArt}>
                            <img
                                src={asset(HERO_IMAGE)}
                                alt="Connected enterprise applications and ERP systems"
                                width={1200}
                                height={680}
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Section 2: Connect your enterprise systems ---------- */}
            <section className={`${styles.section} ${styles.paleSection}`}>
                <div className="container">
                    <div className={styles.centerHead}>
                        <h2 className={styles.title}>Connect Your Enterprise Systems</h2>
                        <p className={styles.lead}>Instead of applications operating in silos, create a connected technology ecosystem.</p>
                    </div>

                    <ol className={styles.stack}>
                        {systems.map((s, i) => (
                            <li key={s.label}>
                                <div className={`${styles.stackNode}${s.label === "Enterprise Applications" ? ` ${styles.stackActive}` : ""}`}>
                                    {s.icon}
                                    <span>{s.label}</span>
                                    <span className={styles.stackDot} />
                                </div>
                                {i < systems.length - 1 && (
                                    <span className={styles.stackArrow} aria-hidden="true">
                                        ↕
                                    </span>
                                )}
                            </li>
                        ))}
                    </ol>

                    <div className={styles.result}>
                        <h3>The result</h3>
                        <ul>
                            {results.map((r) => (
                                <li key={r}>
                                    {icons.check}
                                    {r}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- Section 3: Built around your business ---------- */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.title}>Enterprise Applications Built Around Your Business</h2>
                    <p className={styles.lead}>Different businesses need different applications.</p>
                    <p className={styles.purpleLead}>We help address requirements across:</p>

                    <ul className={styles.areaGrid}>
                        {areas.map((a, i) => (
                            <li className={styles.areaCard} key={a.title}>
                                <div className={styles.areaTop}>
                                    <span className={styles.areaNum}>{pad(i + 1)}</span>
                                    <span className={styles.areaIcon}>{a.icon}</span>
                                </div>
                                <h3>{a.title}</h3>
                                <p>{a.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------- Section 4: ERP modernization & integration ---------- */}
            <section className={`${styles.section} ${styles.paleSection}`}>
                <div className="container">
                    <div className={styles.centerHead}>
                        <h2 className={styles.title}>ERP Modernization &amp; Integration</h2>
                        <p className={styles.lead}>Your ERP should work as part of your wider digital ecosystem.</p>
                        <p className={styles.purpleLead}>We can support:</p>
                    </div>

                    <div className={styles.supportGrid}>
                        <ul>
                            {supportLeft.map((s) => (
                                <li key={s.label}>
                                    <span className={styles.miniIcon}>{s.icon}</span>
                                    {s.label}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.coreHub}>
                            {icons.hub}
                            <b>ERP CORE HUB</b>
                        </div>
                        <ul>
                            {supportRight.map((s) => (
                                <li key={s.label}>
                                    <span className={styles.miniIcon}>{s.icon}</span>
                                    {s.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- Section 5: Delivery approach ---------- */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.title}>From Business Requirement to Enterprise Application</h2>
                    <p className={styles.purpleLead}>Our delivery approach</p>

                    <ol className={styles.steps}>
                        {steps.map((s, i) => (
                            <li key={s.title}>
                                <span className={styles.stepNum}>{pad(i + 1)}</span>
                                <h3>{s.title}</h3>
                                <p>{s.sub}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------- Section 6: Why it matters ---------- */}
            <section className={`${styles.section} ${styles.paleSection}`}>
                <div className="container">
                    <h2 className={styles.title}>Why Enterprise Application Development Matters</h2>
                    <p className={styles.lead}>Modern enterprise applications can help organizations:</p>

                    <ul className={styles.matterGrid}>
                        {matters.map((m, i) => (
                            <li className={i < 4 ? styles.matterTop : styles.matterBottom} key={m}>
                                <span className={styles.bullet} />
                                {m}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------- Section 7: FAQ ---------- */}
            <section className={styles.section} id="faq">
                <div className={`container ${styles.faqGrid}`}>
                    <div>
                        <h2 className={styles.title}>Frequently Asked Questions About Enterprise Application ERP</h2>
                        <div className={styles.advisory}>
                            <span className={styles.advisoryIcon}>{icons.advisory}</span>
                            <p>
                                Architecture &amp; Ecosystem Advisory: Strategic guidance to connect ERP, CRM, and bespoke digital
                                platforms for enterprise scale.
                            </p>
                        </div>
                    </div>
                    <ErpFaq items={faqs} />
                </div>
            </section>
        </div>
    );
}