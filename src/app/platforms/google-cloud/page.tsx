import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import GoogleCloudFaq, { type GoogleCloudFaqItem } from "./googlecloudfaq";
import styles from "./page.module.css";

/* The site title template already appends " | Atlantech Global". */
export const metadata: Metadata = {
    title: "Google Cloud Consulting & Development Services",
    description:
        "Scale securely with Google Cloud consulting services, cloud migration, application development, and optimization solutions from Atlantech Global. Contact our team.",
    alternates: { canonical: "/platforms/google-cloud-consulting/" },
};

/** Images live in public/images/. Section 5 reuses the hero image; point it at a different file if you like. */
const HERO_IMAGE = "/images/google-cloud.jpg";
const SECTION_IMAGE = "/images/google-cloud.jpg";

function Icon({ children }: { children: ReactNode }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            {children}
        </svg>
    );
}

const icons = {
    compass: (
        <Icon>
            <circle cx="12" cy="12" r="9" />
            <path d="M15.5 8.5l-2 5-5 2 2-5z" />
        </Icon>
    ),
    migrate: (
        <Icon>
            <path d="M3 12a6 6 0 0 1 10-4.5L14 9M14 4v5H9M10 14a6 6 0 0 1-3 4.5" />
            <circle cx="17" cy="17" r="2" />
            <path d="M17 12.5v1.5M17 20v1.5M12.5 17H14M20 17h1.5" />
        </Icon>
    ),
    terminal: (
        <Icon>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M7 10l3 2-3 2M13 15h4" />
        </Icon>
    ),
    database: (
        <Icon>
            <ellipse cx="12" cy="6" rx="7" ry="3" />
            <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </Icon>
    ),
    gauge: (
        <Icon>
            <path d="M4 17a8 8 0 1 1 16 0M12 17l4-5M7 17h.01M17 17h.01" />
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
    home: (
        <Icon>
            <path d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-6h4v6" />
        </Icon>
    ),
    check: (
        <Icon>
            <circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" />
            <path d="M8 12.5l3 3 5-6" stroke="#fff" />
        </Icon>
    ),
    mesh: (
        <Icon>
            <circle cx="12" cy="12" r="2.4" />
            <circle cx="12" cy="4" r="1.6" />
            <circle cx="4.5" cy="16.5" r="1.6" />
            <circle cx="19.5" cy="16.5" r="1.6" />
            <path d="M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3" />
        </Icon>
    ),
    swap: (
        <Icon>
            <path d="M7 4L3 8l4 4M3 8h17M17 12l4 4-4 4M21 16H4" />
        </Icon>
    ),
    scale: (
        <Icon>
            <path d="M3 17l5-5 4 3 6-7M19 4l.7 1.3L21 6l-1.3.7L19 8l-.7-1.3L17 6l1.3-.7z" />
        </Icon>
    ),
    core: (
        <Icon>
            <path d="M4 8V5h3M17 5h3v3M20 16v3h-3M7 19H4v-3" />
            <rect x="8" y="8" width="8" height="8" rx="2" />
        </Icon>
    ),
    dataSearch: (
        <Icon>
            <path d="M4 20V10M9 20V6M14 20v-6" />
            <circle cx="17" cy="13" r="3" />
            <path d="M19.2 15.2L21 17" />
        </Icon>
    ),
    globe: (
        <Icon>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
        </Icon>
    ),
    lock: (
        <Icon>
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2" />
        </Icon>
    ),
};

/* ---- Section 2 (copy from the content document; the small tag line is design-only) ---- */
const services = [
    { icon: icons.compass, title: "Cloud Strategy", desc: "Assess workloads and plan cloud adoption or migration.", tag: "ASSESSMENT FRAMEWORK" },
    { icon: icons.migrate, title: "Cloud Migration", desc: "Move suitable applications and workloads to Google Cloud.", tag: "MIGRATION PATHWAY" },
    { icon: icons.terminal, title: "Application Development", desc: "Build and modernize cloud-based applications.", tag: "CLOUD-NATIVE DEV" },
    { icon: icons.database, title: "Data and Analytics", desc: "Support data processing, analytics, and reporting solutions.", tag: "DATA PIPELINES" },
    { icon: icons.gauge, title: "Cloud Optimization", desc: "Improve resource utilization, reliability, and cost visibility.", tag: "RESOURCE EFFICIENCY" },
];

/* ---- Section 3 ---- */
const reasons = [
    "Business-focused cloud architecture.",
    "Scalable application and infrastructure solutions.",
    "Integration with existing enterprise systems.",
    "Security-conscious implementation practices.",
    "Ongoing performance and cost optimization.",
];

/* ---- Section 4 (copy from the content document; the tag line is design-only) ---- */
const approach = [
    { text: "Assess infrastructure, workloads, and business requirements.", tag: "DISCOVERY & EVALUATION" },
    { text: "Design the cloud architecture and migration roadmap.", tag: "TOPOLOGY BLUEPRINT" },
    { text: "Implement cloud infrastructure and development services.", tag: "EXECUTION & MESH" },
    { text: "Test, deploy, monitor, and optimize the environment.", tag: "LIFECYCLE GOVERNANCE" },
];

/* ---- Design-only copy (not in the content document): review before publishing ---- */
const heroFeatures = [
    { icon: icons.mesh, label: "Multi-Region Cloud Resilience" },
    { icon: icons.swap, label: "Zero-Downtime Migration" },
    { icon: icons.scale, label: "Cloud-Native Scalability" },
];

const topology = [
    { icon: icons.core, kicker: "CORE NODE", text: "Kubernetes & GKE Container Fabric", status: "ACTIVE", tone: "violet" },
    { icon: icons.dataSearch, kicker: "DATA NODE", text: "Cloud Spanner & BigQuery Analytics Mesh", status: "OPTIMIZED", tone: "indigo" },
    { icon: icons.globe, kicker: "EDGE NODE", text: "Anthos Multi-Cloud & Global VPC", status: "SYNCHRONIZED", tone: "purple" },
    { icon: icons.lock, kicker: "SECURITY NODE", text: "BeyondCorp Zero Trust & IAM Guardrails", status: "PROTECTED", tone: "deep" },
] as const;

const imageChips = [
    { label: "App Engine & Cloud Run", pos: "tl", style: "accent" },
    { label: "Compute Engine", pos: "tl", style: "plain" },
    { label: "Cloud SQL & Spanner", pos: "br", style: "plain" },
    { label: "Pub/Sub Messaging", pos: "br", style: "plain" },
    { label: "Kubernetes (GKE)", pos: "br", style: "solid" },
] as const;

/* ---- Section 6 (copy from the content document) ---- */
const faqs: GoogleCloudFaqItem[] = [
    {
        q: "What are Google Cloud consulting services?",
        a: "Google Cloud consulting services help businesses plan, migrate, build, secure, and optimize applications and infrastructure on Google Cloud.",
    },
    {
        q: "What does a Google Cloud consulting company do?",
        a: "A Google Cloud consulting company assesses business needs, designs cloud architecture, supports migration, develops applications, and helps optimize security, reliability, and costs.",
    },
    {
        q: "Can Google Cloud support application development?",
        a: "Yes. Google Cloud provides infrastructure, managed services, databases, analytics tools, and application development capabilities for building and deploying modern applications.",
    },
    {
        q: "How can Google Cloud help reduce IT costs?",
        a: "Google Cloud can help optimize IT spending through scalable resources, managed services, workload right-sizing, and usage monitoring. Savings depend on workload design and resource management.",
    },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function GoogleCloudConsultingPage() {
    return (
        <div className={styles.page}>
            {/* ---------- Section 1: Hero ---------- */}
            <section className={styles.hero}>
                <div className="container">
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link href="/" className={styles.homeLink}>
                            {icons.home}
                            Home
                        </Link>
                        <span aria-hidden="true">›</span>
                        <Link href="/platforms">Platforms</Link>
                        <span aria-hidden="true">›</span>
                        <span className={styles.crumbCurrent} aria-current="page">
                            Google Cloud
                        </span>
                    </nav>

                    <div className={styles.heroGrid}>
                        <div>
                            <span className={styles.eyebrowPill}>
                                <span className={styles.pillDot} />
                                ENTERPRISE CLOUD ARCHITECTURE
                            </span>
                            <h1 className={styles.heroTitle}>
                                Google Cloud Consulting Services for <span className={styles.accent}>Business Growth</span>
                            </h1>
                            <p className={styles.heroCopy}>
                                Modernize your IT infrastructure, build cloud-native applications, and improve scalability with Google
                                Cloud. Atlantech Global helps businesses plan cloud adoption, develop applications, and optimize their
                                cloud environments.
                            </p>
                            <div className={styles.heroActions}>
                                <Link href="/contact" className={styles.primaryBtn}>
                                    SCHEDULE A CLOUD CONSULTATION
                                    {icons.external}
                                </Link>
                                <Link href="/contact" className={styles.whiteBtn}>
                                    TALK TO OUR EXPERTS
                                    {icons.arrow}
                                </Link>
                            </div>
                            <ul className={styles.features}>
                                {heroFeatures.map((f) => (
                                    <li key={f.label}>
                                        {f.icon}
                                        {f.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.heroArt}>
                            <img
                                src={asset(HERO_IMAGE)}
                                alt="Google Cloud infrastructure with connected containers, data and AI services"
                                width={1200}
                                height={650}
                                fetchPriority="high"
                            />
                            <span className={styles.meshChip}>
                                <span className={styles.pillDot} />
                                CLOUD MESH ARCHITECTURE <i /> <b>ACTIVE NODE</b>
                            </span>
                            <span className={styles.stackChip}>INFRASTRUCTURE · CONTAINERS · DATA · AI</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Section 2: Consulting and development services ---------- */}
            <section className={styles.section}>
                <div className="container">
                    <p className={styles.eyebrow}>PRACTICE CAPABILITIES</p>
                    <h2 className={styles.title}>Google Cloud Consulting and Development Services</h2>
                    <p className={styles.lead}>
                        Our Google Cloud consulting services help businesses align cloud technology with performance, security, and
                        operational goals.
                    </p>

                    <ul className={styles.svcGrid}>
                        {services.map((s) => (
                            <li className={styles.svcCard} key={s.title}>
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

            {/* ---------- Section 3: Why choose us ---------- */}
            <section className={`${styles.section} ${styles.tintSection}`}>
                <div className={`container ${styles.whyGrid}`}>
                    <div>
                        <p className={styles.eyebrow}>DOMAIN EXCELLENCE</p>
                        <h2 className={styles.title}>Why Choose Our Google Cloud Consulting Company?</h2>
                        <ul className={styles.reasons}>
                            {reasons.map((r) => (
                                <li key={r}>
                                    <span className={styles.checkChip}>{icons.check}</span>
                                    {r}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.topoCard}>
                        <div className={styles.topoHead}>
                            <div>
                                <small>SYNCHRONIZED CLOUD ARCHITECTURE &amp; MULTI-LAYER RESILIENCE</small>
                                <b>Enterprise Google Cloud Topology</b>
                            </div>
                            <span className={styles.topoDot} />
                        </div>
                        <ul className={styles.nodes}>
                            {topology.map((n) => (
                                <li key={n.kicker}>
                                    <span className={`${styles.nodeIcon} ${styles[`tone_${n.tone}`]}`}>{n.icon}</span>
                                    <span className={styles.nodeText}>
                                        <small>{n.kicker}</small>
                                        <b>{n.text}</b>
                                    </span>
                                    <em>{n.status}</em>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.topoFoot}>
                            <span>
                                <span className={styles.liveDot} />
                                HIGH AVAILABILITY: 99.99%
                            </span>
                            <b>REAL-TIME TELEMETRY</b>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Section 4: Delivery approach ---------- */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.centerHead}>
                        <p className={styles.eyebrow}>STRUCTURED METHODOLOGY</p>
                        <h2 className={styles.title}>Our Google Cloud Delivery Approach</h2>
                    </div>
                    <ol className={styles.approachGrid}>
                        {approach.map((a, i) => (
                            <li className={styles.approachCard} key={a.tag}>
                                <div className={styles.approachTop}>
                                    <span className={styles.approachNum}>{pad(i + 1)}</span>
                                    <span className={styles.phaseChip}>PHASE {i + 1}</span>
                                </div>
                                <p>{a.text}</p>
                                <span className={styles.approachTag}>{a.tag}</span>
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
                            <p className={styles.eyebrow}>ACCELERATE MODERNIZATION</p>
                            <h2>Build Your Cloud Roadmap with Confidence</h2>
                            <p>
                                Identify opportunities to modernize infrastructure, improve application performance, and manage cloud
                                costs.
                            </p>
                        </div>
                        <Link href="/contact" className={styles.primaryBtn}>
                            PLAN YOUR GOOGLE CLOUD PROJECT
                            {icons.arrow}
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------- Section 5: Development services with image ---------- */}
            <section className={styles.section}>
                <div className={`container ${styles.devGrid}`}>
                    <div className={styles.imageCard}>
                        <div className={styles.imageWrap}>
                            <img
                                src={asset(SECTION_IMAGE)}
                                alt="Google Cloud architecture spanning compute, data and messaging services"
                                width={1200}
                                height={700}
                                loading="lazy"
                            />
                            <div className={styles.chipsTop}>
                                {imageChips
                                    .filter((c) => c.pos === "tl")
                                    .map((c) => (
                                        <span key={c.label} className={c.style === "accent" ? styles.chipAccent : styles.chipPlain}>
                                            {c.label}
                                        </span>
                                    ))}
                            </div>
                            <div className={styles.chipsBottom}>
                                {imageChips
                                    .filter((c) => c.pos === "br")
                                    .map((c) => (
                                        <span key={c.label} className={c.style === "solid" ? styles.chipSolid : styles.chipPlain}>
                                            {c.label}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className={styles.eyebrow}>CLOUD-NATIVE ENGINEERING</p>
                        <h2 className={styles.title}>Google Cloud Development Services for Modern Businesses</h2>
                        <p className={styles.lead}>
                            From application modernization to data-driven solutions, our Google Cloud development services help
                            organizations create flexible technology foundations that can evolve with business demands.
                        </p>
                        <Link href="/contact" className={`${styles.primaryBtn} ${styles.devBtn}`}>
                            EXPLORE CLOUD ARCHITECTURE
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
                        <h2 className={styles.title}>Frequently Asked Questions About Google Cloud</h2>
                        <GoogleCloudFaq items={faqs} />
                    </div>
                </div>
            </section>
        </div>
    );
}