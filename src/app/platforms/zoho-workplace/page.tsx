import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import ZohoFaq, { type ZohoFaqItem } from "./zohofaq";
import styles from "./page.module.css";

/* The site title template already appends " | Atlantech Global". */
export const metadata: Metadata = {
    title: "Zoho Workplace Solutions & Implementation",
    description:
        "Streamline operations with Zoho workplace solutions, implementation, integrations, and Zoho Creator development from Atlantech Global. Contact our experts today.",
    alternates: { canonical: "/platforms/zoho-workplace/" },
};

/** Images live in public/images/. Section 5 reuses the hero image; point it at a different file if you like. */
const HERO_IMAGE = "/images/zoho-workplace.jpg";
const SECTION_IMAGE = "/images/zoho-workplace.jpg";

function Icon({ children }: { children: ReactNode }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            {children}
        </svg>
    );
}

const icons = {
    sliders: (
        <Icon>
            <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M8 14v6" />
        </Icon>
    ),
    users: (
        <Icon>
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
            <circle cx="12" cy="12" r="10" />
        </Icon>
    ),
    hub: (
        <Icon>
            <circle cx="12" cy="12" r="2.4" />
            <circle cx="12" cy="4" r="1.6" />
            <circle cx="4.5" cy="16.5" r="1.6" />
            <circle cx="19.5" cy="16.5" r="1.6" />
            <circle cx="19.5" cy="7.5" r="1.6" />
            <circle cx="4.5" cy="7.5" r="1.6" />
            <path d="M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3M6 8.5l4 2.3M18 8.5l-4 2.3" />
        </Icon>
    ),
    creator: (
        <Icon>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 9h8M8 13h4M8 17h2M15 14l1.5 1.5L19 12" />
        </Icon>
    ),
    swap: (
        <Icon>
            <path d="M7 4L3 8l4 4M3 8h17M17 12l4 4-4 4M21 16H4" />
        </Icon>
    ),
    arrow: (
        <Icon>
            <path d="M5 12h14M13 6l6 6-6 6" />
        </Icon>
    ),
    external: (
        <Icon>
            <path d="M7 17L17 7M8 7h9v9" />
        </Icon>
    ),
    check: (
        <Icon>
            <path d="M5 12.5l4.5 4.5L19 7.5" />
        </Icon>
    ),
    contact: (
        <Icon>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <circle cx="12" cy="11" r="2" />
            <path d="M8 16c.5-1.5 2-2.2 4-2.2s3.5.7 4 2.2" />
        </Icon>
    ),
    bank: (
        <Icon>
            <path d="M3 9l9-5 9 5M5 9v9M9 9v9M15 9v9M19 9v9M3 20h18" />
        </Icon>
    ),
    route: (
        <Icon>
            <path d="M6 20V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8M6 20h.01M18 6h.01M4 20h4M16 6h4M18 12v6" />
        </Icon>
    ),
    modules: (
        <Icon>
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="4" y="14" width="6" height="6" rx="1" />
            <rect x="14" y="14" width="6" height="6" rx="1" />
            <path d="M17 3l3 3-3 3-3-3z" />
        </Icon>
    ),
    assess: (
        <Icon>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M8 10h8M8 14h5" />
        </Icon>
    ),
    select: (
        <Icon>
            <path d="M12 3L6 21M12 3l6 18M8 15h8" />
        </Icon>
    ),
    configure: (
        <Icon>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01" strokeWidth="3" />
        </Icon>
    ),
    test: (
        <Icon>
            <circle cx="12" cy="12" r="9" />
            <path d="M8.5 12.5l2.5 2.5 4.5-5" />
        </Icon>
    ),
    chart: (
        <Icon>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 16v-4M12 16V8M16 16v-6" />
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
    wallet: (
        <Icon>
            <rect x="3" y="6" width="18" height="14" rx="2" />
            <path d="M3 10h18M16 15h2" />
        </Icon>
    ),
    megaphone: (
        <Icon>
            <path d="M4 10v4l12 5V5zM16 9a3 3 0 0 1 0 6M7 14l1 5" />
        </Icon>
    ),
    card: (
        <Icon>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M4 10h16M8 15h3" />
        </Icon>
    ),
    logic: (
        <Icon>
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="12" r="2" />
            <path d="M8 6h4v12H8M12 12h4" />
        </Icon>
    ),
};

/* ---- Section 2 ---- */
const services = [
    { icon: icons.sliders, title: "Zoho Implementation", desc: "Configure suitable Zoho applications to meet business requirements.", tag: "CONFIG READY", wide: false },
    { icon: icons.users, title: "Zoho CRM Customization", desc: "Improve lead management, sales processes, and customer visibility.", tag: "PIPELINE OPTIMIZATION", wide: false },
    { icon: icons.hub, title: "Zoho Integration Services", desc: "Connect Zoho with websites, ERP systems, and third-party applications.", tag: "API CONNECTIVITY", wide: false },
    { icon: icons.creator, title: "Zoho Creator Development Services", desc: "Build custom low-code applications to automate business processes.", tag: "CUSTOM SCRIPTING & FORMS", wide: true },
    { icon: icons.swap, title: "Workflow Automation", desc: "Reduce manual tasks using supported automation capabilities.", tag: "BLUEPRINT ORCHESTRATION", wide: false },
];

/* ---- Section 3 ---- */
const checklist = [
    "Business process assessment and solution mapping.",
    "Application configuration and customization.",
    "API-based integrations and data synchronization.",
    "User training and adoption support.",
    "Ongoing improvements as requirements evolve.",
];

/* ---- Section 4 ---- */
const process = [
    { icon: icons.assess, text: "Understand your business processes and challenges." },
    { icon: icons.select, text: "Select appropriate Zoho applications and define requirements." },
    { icon: icons.configure, text: "Configure, customize, and integrate the applications." },
    { icon: icons.test, text: "Test workflows, train users, and support adoption." },
];

/* ---- Design-only copy (not in the content document): review before publishing ---- */
const stats = [
    { num: "50+", label: "Zoho App Modules", accent: false },
    { num: "100%", label: "API Mesh Integrity", accent: true },
    { num: "Zero", label: "Data Silos", accent: false },
];

const nodes = [
    { id: "NODE 01", icon: icons.contact, title: "CRM Layer", desc: "Leads, pipelines & customer 360" },
    { id: "NODE 02", icon: icons.bank, title: "ERP & Finance", desc: "Ledger sync & transactional events" },
    { id: "NODE 03", icon: icons.route, title: "Workflows", desc: "Condition engines & approval paths" },
    { id: "NODE 04", icon: icons.modules, title: "Zoho Creator", desc: "Low-code customized modules" },
];

const chips = [
    { icon: icons.chart, label: "Analytics" },
    { icon: icons.headset, label: "Customer Service" },
    { icon: icons.wallet, label: "Finance" },
    { icon: icons.megaphone, label: "Marketing" },
    { icon: icons.card, label: "Sales & CRM" },
    { icon: icons.logic, label: "Custom Logic" },
];

/* ---- Section 6 (copy from the content document) ---- */
const faqs: ZohoFaqItem[] = [
    {
        q: "What do Zoho consulting services include?",
        a: "Zoho consulting services include business process assessment, application selection, implementation, customization, integration, automation, user training, and ongoing support.",
    },
    {
        q: "What does a Zoho implementation partner do?",
        a: "A Zoho implementation partner helps businesses select appropriate applications, configure workflows, migrate data, integrate systems, and support user adoption.",
    },
    {
        q: "What are Zoho integration services?",
        a: "Zoho integration services connect Zoho applications with other business systems to exchange data, reduce manual entry, and improve workflow continuity.",
    },
    {
        q: "What are Zoho Creator development services?",
        a: "Zoho Creator development services involve building low-code applications, forms, reports, and automated workflows tailored to specific business requirements.",
    },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function ZohoWorkplacePage() {
    return (
        <div className={styles.page}>
            {/* ---------- Section 1: Hero ---------- */}
            <section className={styles.hero}>
                <div className="container">
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/platforms">Platforms</Link>
                        <span aria-hidden="true">/</span>
                        <span className={styles.crumbCurrent} aria-current="page">
                            Zoho
                        </span>
                    </nav>

                    <div className={styles.heroGrid}>
                        <div>
                            <span className={styles.eyebrowPill}>
                                <span className={styles.pillDot} />
                                ENTERPRISE CLOUD ARCHITECTURE
                            </span>
                            <h1 className={styles.heroTitle}>
                                Zoho Consulting Services to <span className={styles.accent}>Automate</span> Your Business
                            </h1>
                            <p className={styles.heroCopy}>
                                Improve productivity, streamline workflows, and connect your business applications with Zoho. Atlantech
                                Global helps businesses implement, customize, and integrate Zoho solutions to support sales, customer
                                service, finance, and operational efficiency.
                            </p>
                            <div className={styles.heroActions}>
                                <Link href="/contact" className={styles.primaryBtn}>
                                    BOOK A ZOHO CONSULTATION
                                    {icons.external}
                                </Link>
                                <a href="#solutions" className={styles.lightBtn}>
                                    EXPLORE ZOHO SOLUTIONS
                                    {icons.arrow}
                                </a>
                            </div>
                            <dl className={styles.stats}>
                                {stats.map((s) => (
                                    <div key={s.label}>
                                        <dt className={s.accent ? styles.statAccent : undefined}>{s.num}</dt>
                                        <dd>{s.label}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className={styles.heroArt}>
                            <img
                                src={asset(HERO_IMAGE)}
                                alt="Connected Zoho business workflows across sales, service, finance and automation"
                                width={1200}
                                height={650}
                                fetchPriority="high"
                            />
                            <div className={styles.heroOverlay}>
                                <div>
                                    <b>
                                        <span className={styles.pillDot} />
                                        CONNECTED WORKFLOWS
                                    </b>
                                    <small>SALES · SERVICE · FINANCE · AUTOMATION</small>
                                </div>
                                <span>ACTIVE MESH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Section 2: Consulting, implementation, integration ---------- */}
            <section className={`${styles.section} ${styles.tintSection}`} id="solutions">
                <div className="container">
                    <p className={styles.eyebrow}>PRACTICE CAPABILITIES</p>
                    <h2 className={styles.title}>Zoho Consulting, Implementation, and Integration</h2>
                    <p className={styles.lead}>
                        Our Zoho consulting services help businesses select and configure applications that fit their workflows.
                    </p>

                    <ul className={styles.svcGrid}>
                        {services.map((s) => (
                            <li className={`${styles.svcCard}${s.wide ? ` ${styles.svcWide}` : ""}`} key={s.title}>
                                <span className={styles.iconTile}>{s.icon}</span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <span className={styles.svcTag}>
                                    {s.tag} {icons.arrow}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------- Section 3: Development company and partner ---------- */}
            <section className={`${styles.section} ${styles.paleSection}`}>
                <div className={`container ${styles.domainGrid}`}>
                    <div>
                        <p className={styles.eyebrow}>DOMAIN EXPERTISE</p>
                        <h2 className={styles.title}>Your Zoho Development Company and Implementation Partner</h2>
                        <p className={styles.lead}>
                            As a Zoho development company and implementation partner, Atlantech Global helps organizations build
                            connected workflows and make better use of their business data.
                        </p>
                        <ul className={styles.checklist}>
                            {checklist.map((c) => (
                                <li key={c}>
                                    <span className={styles.checkChip}>{icons.check}</span>
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.meshCard}>
                        <div className={styles.meshHead}>
                            <div>
                                <small>ARCHITECTURAL TOPOLOGY</small>
                                <b>Synchronized Integration Mesh</b>
                            </div>
                            <span className={styles.liveChip}>LIVE FLOW</span>
                        </div>

                        <div className={styles.nodeGrid}>
                            {nodes.slice(0, 2).map((n) => (
                                <div className={styles.node} key={n.id}>
                                    <span className={styles.nodeTop}>
                                        <small>{n.id}</small>
                                        <span>{n.icon}</span>
                                    </span>
                                    <b>{n.title}</b>
                                    <p>{n.desc}</p>
                                </div>
                            ))}
                            <div className={styles.bus}>
                                {icons.swap}
                                <span>
                                    <small>BI-DIRECTIONAL BUS</small>
                                    <b>Secure Enterprise API Mesh</b>
                                </span>
                                <em>REST / WEBHOOKS</em>
                            </div>
                            {nodes.slice(2).map((n) => (
                                <div className={styles.node} key={n.id}>
                                    <span className={styles.nodeTop}>
                                        <small>{n.id}</small>
                                        <span>{n.icon}</span>
                                    </span>
                                    <b>{n.title}</b>
                                    <p>{n.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.meshFoot}>
                            <span>
                                <span className={styles.pillDot} />
                                Standardized Data Schema
                            </span>
                            <span>Sub-second Synchronization</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Section 4: Implementation process ---------- */}
            <section className={`${styles.section} ${styles.tintSection}`}>
                <div className="container">
                    <div className={styles.centerHead}>
                        <p className={styles.eyebrow}>STRUCTURED METHODOLOGY</p>
                        <h2 className={styles.title}>Our Zoho Implementation Process</h2>
                    </div>
                    <ol className={styles.processGrid}>
                        {process.map((p, i) => (
                            <li className={styles.processCard} key={p.text}>
                                <div className={styles.processTop}>
                                    <span className={styles.processNum}>{pad(i + 1)}</span>
                                    <span className={styles.processIcon}>{p.icon}</span>
                                </div>
                                <small>PHASE {i + 1}</small>
                                <p>{p.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------- Strip ---------- */}
            <section className={styles.stripSection}>
                <div className="container">
                    <div className={styles.strip}>
                        <div>
                            <p className={styles.eyebrow}>ACCELERATE OPERATIONS</p>
                            <h2>Automate More. Work Smarter.</h2>
                            <p>Discover how Zoho applications can simplify workflows and connect your business operations.</p>
                        </div>
                        <Link href="/contact" className={styles.primaryBtn}>
                            DISCUSS YOUR ZOHO REQUIREMENTS
                            {icons.arrow}
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------- Section 5: Workplace solutions with image ---------- */}
            <section className={`${styles.section} ${styles.paleSection}`}>
                <div className={`container ${styles.cohesionGrid}`}>
                    <div className={styles.imageCard}>
                        <img
                            src={asset(SECTION_IMAGE)}
                            alt="Zoho applications connected across business functions"
                            width={1200}
                            height={700}
                            loading="lazy"
                        />
                        <ul className={styles.chips}>
                            {chips.map((c) => (
                                <li key={c.label}>
                                    {c.icon}
                                    {c.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className={styles.eyebrow}>SYSTEM COHESION</p>
                        <h2 className={styles.title}>Zoho Workplace Solutions for Connected Business Operations</h2>
                        <p className={styles.lead}>
                            Zoho applications can support CRM, sales, marketing, customer service, finance, analytics, and custom
                            business workflows. We help identify the right combination of applications and integrations for your
                            organization.
                        </p>
                        <Link href="/contact" className={`${styles.primaryBtn} ${styles.cohesionBtn}`}>
                            CONNECT YOUR SYSTEMS
                            {icons.external}
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------- Section 6: FAQ ---------- */}
            <section className={`${styles.section} ${styles.tintSection}`} id="faq">
                <div className="container">
                    <div className={styles.faqWrap}>
                        <p className={styles.eyebrow}>KNOWLEDGE BASE</p>
                        <h2 className={styles.title}>Frequently Asked Questions About Zoho Workplace</h2>
                        <ZohoFaq items={faqs} />
                    </div>
                </div>
            </section>
        </div>
    );
}