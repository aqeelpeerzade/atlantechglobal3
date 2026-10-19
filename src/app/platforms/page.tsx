import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import PlatformsFaq, { type PlatformsFaqItem } from "./platformsfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Technology Platforms",
  description:
    "Technology platforms that power business growth: Adobe Commerce, Adobe Experience Platform, ERPNext, Google Cloud and Zoho, selected, implemented, integrated and optimized by Atlantech Global.",
  alternates: { canonical: "/platforms/" },
};

/**
 * Hero image: put the file in public/images/ and set its name here.
 * It is shown at roughly 3:2 and cropped to fit, so a landscape image works best.
 */
const HERO_IMAGE = "/images/platform-page.png";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons = {
  grid: (
    <Icon>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </Icon>
  ),
  cart: (
    <Icon>
      <path d="M3 4h3l2.5 11h9L20 7H7M10 20h.01M17 20h.01M10 9l5 4M15 9l-5 4" />
    </Icon>
  ),
  heart: (
    <Icon>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    </Icon>
  ),
  cloud: (
    <Icon>
      <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 .5 9.5z" />
    </Icon>
  ),
  gear: (
    <Icon>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1" />
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
  bag: (
    <Icon>
      <path d="M6 7h12l1 13H5zM9 7a3 3 0 0 1 6 0" />
    </Icon>
  ),
  panel: (
    <Icon>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01" strokeWidth="3" />
    </Icon>
  ),
  flowchart: (
    <Icon>
      <rect x="3" y="4" width="6" height="5" rx="1" />
      <rect x="15" y="4" width="6" height="5" rx="1" />
      <rect x="15" y="15" width="6" height="5" rx="1" />
      <path d="M9 6.5h6M18 9v6M6 9v8h9" />
    </Icon>
  ),
  cloudUsers: (
    <Icon>
      <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 .5 9.5" />
      <circle cx="12" cy="15" r="1.6" />
      <path d="M9 20c0-1.7 1.3-2.6 3-2.6s3 .9 3 2.6" />
    </Icon>
  ),
  spark: (
    <Icon>
      <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
      <path d="M12 8l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
    </Icon>
  ),
  arrow: (
    <Icon>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  ),
  arrowDown: (
    <Icon>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </Icon>
  ),
  checkCircle: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </Icon>
  ),
  checkBadge: (
    <Icon>
      <path d="M12 3l2.2 1.7 2.8-.2 1 2.6 2.4 1.5-.8 2.7.8 2.7-2.4 1.5-1 2.6-2.8-.2L12 21l-2.2-1.7-2.8.2-1-2.6-2.4-1.5.8-2.7-.8-2.7L6 7.1l1-2.6 2.8.2z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  ),
  doubleCheck: (
    <Icon>
      <path d="M3 12.5l3.5 3.5L12 9M10 15l1 1 8-9" />
    </Icon>
  ),
  store: (
    <Icon>
      <path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6" />
    </Icon>
  ),
  sparkLine: (
    <Icon>
      <path d="M3 17l5-5 4 3 6-7M19 4l.7 1.3L21 6l-1.3.7L19 8l-.7-1.3L17 6l1.3-.7z" />
    </Icon>
  ),
  org: (
    <Icon>
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="3" y="16" width="6" height="5" rx="1" />
      <rect x="15" y="16" width="6" height="5" rx="1" />
      <path d="M12 8v4M6 16v-4h12v4" />
    </Icon>
  ),
  zoho: (
    <Icon>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2" />
      <path d="M9 9l-1-1M15 9l1-1M9 15l-1 1M15 15l1 1" />
    </Icon>
  ),
};

const alignment = [
  { icon: icons.grid, title: "Business Applications", desc: "Streamline processes and improve operational efficiency.", tag: "ALIGNED OPERATIONS" },
  { icon: icons.cart, title: "Digital Commerce", desc: "Create connected, flexible and scalable shopping experiences.", tag: "OMNICHANNEL SCOPE" },
  { icon: icons.heart, title: "Customer Experience", desc: "Deliver consistent and personalized digital interactions.", tag: "TOUCHPOINT FIDELITY" },
  { icon: icons.cloud, title: "Cloud Infrastructure", desc: "Build secure, flexible and scalable digital environments.", tag: "SOVEREIGN CLOUD" },
  { icon: icons.gear, title: "Business Automation", desc: "Reduce repetitive tasks and improve productivity.", tag: "COGNITIVE LOOPS" },
];

const platforms = [
  {
    chip: "PLATFORM 01",
    icon: icons.bag,
    title: "Adobe Commerce",
    sub: "Create flexible, scalable commerce experiences.",
    desc: "Build and enhance digital storefronts with commerce capabilities designed to support product discovery, customer journeys, personalized experiences and evolving business needs.",
    caps: ["E-commerce Development", "Commerce Integration", "Storefront Optimization", "Customer Experience"],
  },
  {
    chip: "PLATFORM 02",
    icon: icons.panel,
    title: "Adobe Experience Platform",
    sub: "Connect data to create better customer experiences.",
    desc: "Bring customer data together to support more consistent, personalized and data-informed experiences across digital touchpoints.",
    caps: ["Customer Data Integration", "Audience Insights", "Personalization", "Experience Optimization"],
  },
  {
    chip: "PLATFORM 03",
    icon: icons.flowchart,
    title: "ERPNext",
    sub: "Simplify business operations with connected ERP.",
    desc: "Support core business processes through an integrated enterprise resource planning platform that helps connect workflows, improve visibility and manage operational data.",
    caps: ["ERP Implementation", "Workflow Configuration", "Business Process Integration", "Reporting"],
  },
  {
    chip: "PLATFORM 04",
    icon: icons.cloudUsers,
    title: "Google Cloud",
    sub: "Build and scale with cloud technology.",
    desc: "Leverage cloud infrastructure, data capabilities and AI services to support application modernization, data-driven decisions and scalable digital solutions.",
    caps: ["Cloud Migration", "Data Analytics", "AI & Machine Learning", "Cloud Infrastructure"],
  },
  {
    chip: "PLATFORM 05",
    icon: icons.spark,
    title: "Zoho",
    sub: "Connect business workflows with smarter applications.",
    desc: "Use integrated business applications to streamline customer relationship management, sales processes, collaboration and day-to-day operations.",
    caps: ["CRM Solutions", "Business Automation", "Application Integration", "Reporting & Analytics"],
  },
];

const lifecycle = [
  { title: "Consulting & Platform Selection", desc: "Identify suitable platforms based on your goals and requirements." },
  { title: "Implementation & Configuration", desc: "Configure solutions around business processes and workflows." },
  { title: "Integration & Connectivity", desc: "Connect platforms with existing applications, systems and data sources." },
  { title: "Customization & Development", desc: "Extend platform capabilities to meet specific business needs." },
  { title: "Optimization & Support", desc: "Improve performance, usability and operational effectiveness over time." },
];

const benefits = [
  "Connect customer, commerce and operational data.",
  "Reduce manual work through workflow automation.",
  "Improve reporting and decision-making.",
  "Create more consistent customer experiences.",
  "Scale systems as business requirements evolve.",
];

const matrix = [
  { need: "Digital commerce and online stores", platform: "Adobe Commerce", icon: icons.store },
  { need: "Customer data and digital experiences", platform: "Adobe Experience Platform", icon: icons.sparkLine },
  { need: "Enterprise resource planning and workflows", platform: "ERPNext", icon: icons.org },
  { need: "Cloud infrastructure, data and AI", platform: "Google Cloud", icon: icons.cloud },
  { need: "CRM and business application automation", platform: "Zoho", icon: icons.zoho },
];

const faqs: PlatformsFaqItem[] = [
  {
    q: "What are enterprise technology platforms?",
    a: "Enterprise technology platforms are software systems that support core business functions such as commerce, customer data, enterprise resource planning, cloud infrastructure, and CRM. They give organizations a shared foundation to run operations, connect data, and scale.",
  },
  {
    q: "What platform services does Atlantech Global offer?",
    a: "We support the full platform lifecycle: consulting and platform selection, implementation and configuration, integration and connectivity, customization and development, and ongoing optimization and support, across Adobe Commerce, Adobe Experience Platform, ERPNext, Google Cloud, and Zoho.",
  },
  {
    q: "How do I choose the right technology platform for my business?",
    a: "Start from your business objectives, existing systems, integration requirements, scalability needs, and implementation priorities. A short assessment of these factors makes it clear which platform, or combination of platforms, fits best before any commitment is made.",
  },
  {
    q: "Can different business platforms be integrated?",
    a: "Yes. Platforms can be connected through APIs and event-driven integrations so that customer, commerce, and operational data flows between systems, reducing information silos and manual work.",
  },
  {
    q: "What is the difference between Adobe Commerce and Adobe Experience Platform?",
    a: "Adobe Commerce is an e-commerce platform for building and running online stores and shopping experiences. Adobe Experience Platform brings customer data together from across touchpoints to support more consistent, personalized experiences. They are often used together.",
  },
  {
    q: "How can cloud platforms support business growth?",
    a: "Cloud platforms such as Google Cloud provide scalable infrastructure, data and analytics capabilities, and AI services. They help businesses modernize applications, make data-driven decisions, and scale digital solutions as demand grows without large upfront hardware investment.",
  },
  {
    q: "Can ERP and CRM platforms improve business efficiency?",
    a: "Yes. ERP platforms such as ERPNext connect core business processes and operational data, while CRM platforms such as Zoho organize customer relationships and sales processes. Together they reduce manual work, improve visibility, and support better reporting and decisions.",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

function Topology() {
  return (
    <svg className={styles.topo} viewBox="0 0 400 330" role="img" aria-label="Five platforms connected through a central data fabric">
      <circle cx="200" cy="170" r="132" className={styles.topoOuter} />
      <circle cx="200" cy="170" r="86" className={styles.topoInner} />
      <g className={styles.topoLines}>
        <path d="M200 170V62" />
        <path d="M200 170L62 106" />
        <path d="M200 170L338 106" />
        <path d="M200 170L96 278" />
        <path d="M200 170L318 280" />
      </g>
      <rect x="150" y="120" width="100" height="100" rx="10" className={styles.topoCore} />
      <g transform="translate(188 138) scale(1.05)" className={styles.topoGlyph}>
        <circle cx="12" cy="12" r="2.4" />
        <circle cx="12" cy="4" r="1.6" />
        <circle cx="4.5" cy="16.5" r="1.6" />
        <circle cx="19.5" cy="16.5" r="1.6" />
        <path d="M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3" />
      </g>
      <text x="200" y="192" textAnchor="middle" className={styles.coreTitle}>CONNECTED CORE</text>
      <text x="200" y="203" textAnchor="middle" className={styles.coreSub}>DATA FABRIC</text>
      {[
        { x: 200, y: 52, t: "ADOBE COMMERCE" },
        { x: 46, y: 104, t: "ZOHO APPS" },
        { x: 354, y: 104, t: "ADOBE EXPERIENCE" },
        { x: 80, y: 290, t: "GOOGLE CLOUD" },
        { x: 338, y: 290, t: "ERPNEXT" },
      ].map((n) => (
        <g key={n.t}>
          <rect x={n.x - 52} y={n.y - 13} width="104" height="26" rx="7" className={styles.topoNode} />
          <text x={n.x} y={n.y + 4} textAnchor="middle" className={styles.topoLabel}>
            {n.t}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function PlatformsPage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.topRow}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span className={styles.crumbCurrent} aria-current="page">
                Platforms
              </span>
            </nav>
            <span className={styles.eyebrowPill}>
              <span className={styles.pillDot} />
              TECHNOLOGY PLATFORMS
            </span>
          </div>

          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>Technology Platforms That Power Business Growth</h1>
              <p className={styles.heroCopy}>
                Discover new possibilities with our capabilities, leveraging the right technology platform to meet your
                business needs. We help businesses select, implement, integrate and optimize technology platforms to
                support digital experiences, streamline operations and enable scalable growth.
              </p>
              <div className={styles.heroActions}>
                <a href="#platforms" className={styles.primaryBtn}>
                  EXPLORE OUR PLATFORMS
                  {icons.arrowDown}
                </a>
                <span className={styles.certNote}>
                  {icons.checkBadge}
                  Enterprise-grade certified engineering
                </span>
              </div>
            </div>

            <div className={styles.heroArtCard}>
              <div className={styles.artHead}>
                <span>
                  <span className={styles.pillDot} />
                  INTEGRATED ECOSYSTEM
                </span>
                <b>COMMERCE · ERP · CLOUD · CRM</b>
              </div>
              <div className={styles.artBody}>
                <img
                  src={asset(HERO_IMAGE)}
                  alt="Connected technology platforms across commerce, ERP, cloud and CRM"
                  width={1200}
                  height={800}
                  fetchPriority="high"
                  className={styles.heroSvg}
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.enginesChip}>
                  {icons.hub}
                  5 CORE ENGINES SYNCHRONIZED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Capability alignment ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <div className={styles.centerHead}>
            <p className={styles.eyebrow}>CAPABILITY ALIGNMENT</p>
            <h2 className={styles.title}>The Right Platforms for Your Business Goals</h2>
            <p className={styles.lead}>
              Every business has different technology requirements. We help you identify and leverage platforms that
              align with your workflows, customer expectations and long-term objectives.
            </p>
          </div>

          <ul className={styles.alignGrid}>
            {alignment.map((a) => (
              <li className={styles.alignCard} key={a.title}>
                <span className={styles.iconTile}>{a.icon}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <span className={styles.alignTag}>
                  {a.tag} {icons.arrow}
                </span>
              </li>
            ))}
          </ul>

          <p className={styles.focusBox}>Our focus is on making technology work together to deliver measurable business value.</p>
        </div>
      </section>

      {/* ---------- Core platforms ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`} id="platforms">
        <div className="container">
          <div className={styles.centerHead}>
            <p className={styles.eyebrow}>CORE PLATFORMS</p>
            <h2 className={styles.title}>Explore Our Technology Platforms</h2>
          </div>

          <ul className={styles.platGrid}>
            {platforms.map((p) => (
              <li className={styles.platCard} key={p.title}>
                <div className={styles.platTop}>
                  <span className={styles.platChip}>{p.chip}</span>
                  <span className={styles.platIcon}>{p.icon}</span>
                </div>
                <h3>{p.title}</h3>
                <p className={styles.platSub}>{p.sub}</p>
                <p className={styles.platDesc}>{p.desc}</p>
                <p className={styles.capLabel}>KEY CAPABILITIES:</p>
                <ul className={styles.caps}>
                  {p.caps.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Lifecycle ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <div className={styles.centerHead}>
            <p className={styles.eyebrow}>LIFECYCLE SERVICES</p>
            <h2 className={styles.title}>How We Help You Get More from Technology Platforms</h2>
            <p className={styles.lead}>
              Selecting a platform is only one part of the journey. We help align technology with your business
              requirements and existing systems.
            </p>
            <p className={styles.includeLabel}>Our platform services include:</p>
          </div>

          <ol className={styles.lifeGrid}>
            {lifecycle.map((l, i) => (
              <li className={styles.lifeCard} key={l.title}>
                <span className={styles.lifeNum}>{pad(i + 1)}</span>
                <h3>{l.title}</h3>
                <p>{l.desc}</p>
                <span className={styles.lifeFoot}>
                  PHASE {pad(i + 1)}
                  {i === lifecycle.length - 1 ? icons.doubleCheck : icons.arrow}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Integration ---------- */}
      <section className={`${styles.section} ${styles.integrationSection}`}>
        <div className={`container ${styles.intGrid}`}>
          <div>
            <p className={styles.eyebrow}>INTEGRATION ARCHITECTURE</p>
            <h2 className={styles.title}>Connect Your Platforms. Simplify Your Operations.</h2>
            <p className={styles.lead}>
              Technology delivers greater value when your systems work together. We help create connected digital
              ecosystems that reduce information silos and improve visibility across business functions.
            </p>
            <p className={styles.canLabel}>With the right platform integration, businesses can:</p>
            <ul className={styles.benefits}>
              {benefits.map((b) => (
                <li key={b}>
                  <span className={styles.benefitIcon}>{icons.checkCircle}</span>
                  {b}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={styles.primaryBtn}>
              DISCUSS YOUR REQUIREMENTS
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </Link>
          </div>

          <div className={styles.topoCard}>
            <div className={styles.topoHead}>
              <span>INTEGRATION TOPOLOGY</span>
              <b>REAL-TIME FABRIC</b>
            </div>
            <Topology />
            <p className={styles.topoCaption}>
              Bespoke API adapters &amp; event-driven orchestrations synchronize cross-platform intelligence seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Matrix ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <div className={styles.centerHead}>
            <p className={styles.eyebrow}>PLATFORM MATRIX</p>
            <h2 className={styles.title}>Choose the Right Platform for Your Needs</h2>
            <p className={styles.lead}>The right platform depends on your business objectives, existing technology and future plans.</p>
          </div>

          <div className={styles.matrix}>
            <div className={styles.matrixHead}>
              <span>Business Requirement</span>
              <span>Relevant Platform</span>
            </div>
            <ul>
              {matrix.map((m) => (
                <li key={m.platform}>
                  <span>{m.need}</span>
                  <span className={styles.platPill}>
                    {m.icon}
                    {m.platform}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className={styles.matrixNote}>
            Our approach considers your current systems, integration requirements, scalability needs and implementation
            priorities before recommending a platform.
          </p>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`} id="faq">
        <div className="container">
          <div className={styles.centerHead}>
            <p className={styles.eyebrow}>FAQ</p>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
          </div>
          <PlatformsFaq items={faqs} />
        </div>
      </section>
    </div>
  );
}