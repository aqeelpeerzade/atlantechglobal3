import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import ApiFaq, { type ApiFaqItem } from "./apifaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "API Development & Microservices Services",
  description:
    "API development and microservices architecture services for secure, reliable and flexible digital platforms: REST and GraphQL APIs, integrations, API security and decoupled services from Atlantech Global.",
  alternates: { canonical: "/product-engineering/api-microservices/" },
};

/** Where the "Product Engineering Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/product-engineering";
/** Hero image in /public/images — change the file name if yours differs. */
const HERO_IMAGE = "/images/mobile-web-saas.jpg";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
  `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
  external: "M7 17L17 7M8 7h9v9",
  arrow: "M5 12h14M13 6l6 6-6 6",
  updown: "M12 4v16M8 8l4-4 4 4M8 16l4 4 4-4",
  filter: "M4 5h16l-6 7v6l-4 2v-8z",
  help: c(12, 12, 9) + "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01",
  /* chips */
  rest: c(12, 12, 2.4) + "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8",
  graphql: "M9 7l-5 5 5 5M15 7l5 5-5 5",
  integrate: "M4 8h10M10 4l4 4-4 4M20 16H10M14 12l-4 4 4 4",
  microservices: r(4, 4, 7, 7, 1.5) + r(13, 4, 7, 7, 1.5) + r(4, 13, 7, 7, 1.5) + r(13, 13, 7, 7, 1.5),
  lock: r(5, 11, 14, 10, 2) + "M8 11V8a4 4 0 0 1 8 0v3",
  shieldCheck: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  doc: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7",
  swap: "M4 8h13M14 4l4 4-4 4M20 16H7M10 12l-4 4 4 4",
  /* ecosystem nodes */
  globe: c(12, 12, 9) + "M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  phone: r(6, 3, 12, 18, 2.5) + "M10 6h4",
  building: "M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01",
  database: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6",
  puzzle: "M10 4h4v3a2 2 0 1 1 0 4v3h-4v-2a2 2 0 1 0-4 0v2H4V9h3a2 2 0 1 0 0-4h3z",
  cloudData: "M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4.5 4.5 0 0 1 17 18zM10 14h4",
  /* microservices */
  scale: r(4, 4, 16, 16, 2) + "M9 15l6-6M10 9h5v5",
  deploy: "M5 15c-1 1-1.5 3-1.5 5 2 0 4-.5 5-1.5M9 15l-3-3c1-4 4-7 9-8 4-.7 5 .3 4.5 4.5-1 5-4 8-8 9zM15 9h.01",
  isolate: r(4, 4, 16, 16, 2) + "M9 12h6M12 9v6",
  flex: "M4 8h10M18 8h2M4 16h2M10 16h10" + c(16, 8, 2) + c(8, 16, 2),
  tech: c(12, 12, 3) + "M12 3v3M12 18v3M3 12h3M18 12h3",
  grow: "M3 17l6-6 4 4 8-8M15 7h6v6",
  cube: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9",
  /* lifecycle */
  design: "M5 19L19 5M7 5h4M5 7v4M17 19h-4M19 17v-4",
  develop: "M9 7l-5 5 5 5M15 7l5 5-5 5",
  connect: "M14 6l4-4 4 4-4 4zM2 18l4-4 4 4-4 4zM10 14l4-4",
  test: r(4, 4, 16, 16, 2) + "M8 12l3 3 5-6",
  manage: "M3 17l5-5 4 3 5-6M17 7h4v4",
  /* security */
  key: c(8, 14, 3.5) + "M11 12l8-8M16 7l3 3",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
  valid: r(4, 4, 16, 16, 2) + "M8 12l3 3 5-6",
  version: c(12, 12, 9) + "M12 7v5l3 2M3 12h3",
  warn: "M12 3L2 20h20zM12 10v4M12 17h.01",
  gauge: c(12, 12, 9) + "M12 12l4-4M7 16h.01M17 16h.01",
  access: "M6 3h12v18H6zM10 8h4M9 13a3 3 0 1 0 6 0",
  docs: "M4 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-7v13a2 2 0 0 1 2-2h5z",
  /* fits */
  cloud: "M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4.5 4.5 0 0 1 17 18z",
  cart: "M3 4h3l2.5 11h9.5l2-8H7M10 20h.01M17 20h.01",
  mobile: r(6, 3, 12, 18, 2.5) + "M10 17h4",
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

const chips: { icon: IconName; text: string }[] = [
  { icon: "rest", text: "REST API development" },
  { icon: "graphql", text: "GraphQL APIs" },
  { icon: "integrate", text: "API integration" },
  { icon: "microservices", text: "Microservices architecture" },
  { icon: "lock", text: "API security" },
  { icon: "shieldCheck", text: "API testing" },
  { icon: "doc", text: "API documentation" },
  { icon: "swap", text: "Third-party integrations" },
];

const topNodes: { icon: IconName; text: string }[] = [
  { icon: "globe", text: "Web Applications" },
  { icon: "phone", text: "Mobile Apps" },
  { icon: "building", text: "Enterprise Applications" },
];
const bottomNodes: { icon: IconName; text: string }[] = [
  { icon: "database", text: "CRM / ERP" },
  { icon: "puzzle", text: "Third-Party Platforms" },
  { icon: "cloudData", text: "Data & Cloud Services" },
];

const msLeft: { icon: IconName; text: string }[] = [
  { icon: "scale", text: "Scale individual services" },
  { icon: "deploy", text: "Deploy components independently" },
  { icon: "isolate", text: "Isolate application functionality" },
];
const msRight: { icon: IconName; text: string }[] = [
  { icon: "flex", text: "Improve development flexibility" },
  { icon: "tech", text: "Integrate different technologies" },
  { icon: "grow", text: "Support growing product requirements" },
];

const lifecycle: { icon: IconName; title: string; desc: string }[] = [
  { icon: "design", title: "Design", desc: "Define API structure, endpoints and data contracts." },
  { icon: "develop", title: "Develop", desc: "Build secure and maintainable APIs." },
  { icon: "connect", title: "Integrate", desc: "Connect applications, platforms and third-party services." },
  { icon: "test", title: "Test", desc: "Validate functionality, performance and reliability." },
  { icon: "manage", title: "Manage", desc: "Monitor API performance, versions and usage." },
];

const security: { icon: IconName; text: string }[] = [
  { icon: "key", text: "Authentication & authorization" },
  { icon: "shield", text: "Secure API access" },
  { icon: "valid", text: "Data validation" },
  { icon: "version", text: "API versioning" },
  { icon: "warn", text: "Error handling" },
  { icon: "gauge", text: "Performance monitoring" },
  { icon: "access", text: "Access controls" },
  { icon: "docs", text: "Documentation" },
];

const fits: { icon: IconName; title: string; desc: string }[] = [
  { icon: "cloud", title: "SaaS Platforms", desc: "Connect applications, users and third-party services." },
  { icon: "mobile", title: "Mobile Applications", desc: "Provide secure backend communication." },
  { icon: "building", title: "Enterprise Applications", desc: "Connect business systems and data." },
  { icon: "cart", title: "Digital Commerce", desc: "Connect products, payments, inventory and customer systems." },
  { icon: "cloud", title: "Cloud Applications", desc: "Create modular, scalable application architectures." },
];

const faqs: ApiFaqItem[] = [
  {
    q: "What are API Development Services?",
    a: "API development involves designing and building interfaces that allow different applications, platforms and services to communicate and exchange data.",
  },
  {
    q: "What are microservices?",
    a: "Microservices are an architectural approach where an application is built as a set of small, independently deployable services, each responsible for a specific business capability.",
  },
  {
    q: "When should a business use microservices?",
    a: "Microservices suit products that need independent scaling, faster release cycles across teams, or the flexibility to use different technologies. Smaller products can often start with a simpler architecture and evolve toward microservices as requirements grow.",
  },
  {
    q: "Can APIs connect legacy and modern applications?",
    a: "Yes. APIs and integration layers can expose data and functionality from legacy systems so that modern web, mobile and cloud applications can use them without a full replacement.",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return <span className={styles.pillCenter}>{children}</span>;
}

export default function ApiMicroservicesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        {/* ---------- Hero ---------- */}
        <section className={styles.heroWrap}>
          <nav className={styles.crumbBar} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href={PARENT_HREF}>Product Engineering Services</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.crumbCurrent} aria-current="page">
              API &amp; Microservices
            </span>
          </nav>
          <div className={styles.hero}>
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrowPill}>
                  <span className={styles.pillDot} />
                  PRODUCT ENGINEERING SERVICES • API &amp; MICROSERVICES
                </span>
                <h1 className={styles.heroTitle}>
                  API Development &amp; Microservices for <span className={styles.gradText}>Scalable Digital Products</span>
                </h1>
                <p className={styles.heroCopy}>
                  Modern products need systems that can communicate, scale and evolve without slowing development. Our
                  API Development Services and microservices capabilities help enterprises build secure, reliable and
                  flexible platforms.
                </p>
                <h2 className={styles.chipsHead}>Build the technology layer behind connected products</h2>
                <ul className={styles.chipGrid}>
                  {chips.map((t) => (
                    <li key={t.text}>
                      <Ic name={t.icon} />
                      {t.text}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={styles.solidBtn}>
                  Build a Scalable API Architecture
                  <Ic name="external" />
                </Link>
              </div>

              <div className={styles.heroArtCard}>
                <div className={styles.heroImgWrap}>
                  <img
                    className={styles.heroImg}
                    src={asset(HERO_IMAGE)}
                    alt="Interconnected purple service nodes representing a modular API and microservices mesh"
                    width={892}
                    height={760}
                    fetchPriority="high"
                  />
                  <span className={styles.heroOverlay}>
                    <span className={styles.pillDot} />
                    <span className={styles.overlayText}>SYSTEM PIPELINE • MODULAR MICROSERVICES MESH</span>
                    <Ic name="filter" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Integration ---------- */}
        <section className={styles.section}>
          <div className={`${styles.head} ${styles.headCenter}`}>
            <Pill>OUR INTEGRATION ARCHITECTURE / CONNECTED ECOSYSTEM</Pill>
            <h2 className={styles.title}>
              Build APIs That <span className={styles.gradText}>Connect Your Digital Ecosystem</span>
            </h2>
            <p className={styles.lead}>Your applications shouldn&apos;t operate in isolation.</p>
            <p className={styles.accent}>Connect:</p>
          </div>

          <div className={styles.diagram}>
            <ul className={styles.nodeRow}>
              {topNodes.map((n) => (
                <li key={n.text}>
                  <span className={styles.tile32}>
                    <Ic name={n.icon} />
                  </span>
                  {n.text}
                </li>
              ))}
            </ul>
            <div className={styles.arrowRow} aria-hidden="true">
              <Ic name="updown" />
              <Ic name="updown" />
              <Ic name="updown" />
            </div>
            <div className={styles.spine}>
              <span className={styles.spinePill}>COMMUNICATION MATRIX</span>
              <h3>UNIFIED INTEGRATION SPINE • Enterprise API Gateway &amp; Mesh Layer</h3>
              <p>
                APIs provide the communication layer that allows these systems to exchange data and functionality.
              </p>
            </div>
            <div className={styles.arrowRow} aria-hidden="true">
              <Ic name="updown" />
              <Ic name="updown" />
              <Ic name="updown" />
            </div>
            <ul className={styles.nodeRow}>
              {bottomNodes.map((n) => (
                <li key={n.text}>
                  <span className={styles.tile32}>
                    <Ic name={n.icon} />
                  </span>
                  {n.text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Microservices ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <div className={`${styles.head} ${styles.headCenter}`}>
            <Pill>ARCHITECTURE MODULARITY</Pill>
            <h2 className={styles.title}>
              Microservices Architecture for <span className={styles.gradText}>Flexible Product Development</span>
            </h2>
            <p className={styles.lead}>
              Move from tightly connected systems to independently manageable services where the architecture makes
              sense.
            </p>
            <p className={styles.inkLabel}>Microservices can help teams:</p>
          </div>
          <div className={styles.msGrid}>
            <ul className={styles.msCol}>
              {msLeft.map((s) => (
                <li key={s.text}>
                  <span className={styles.tile32}>
                    <Ic name={s.icon} />
                  </span>
                  {s.text}
                </li>
              ))}
            </ul>
            <div className={styles.core}>
              <span className={styles.coreIcon}>
                <Ic name="cube" />
              </span>
              <p className={styles.coreLabel}>ARCHITECTURE BASE</p>
              <h3>DECOUPLED SERVICE TOPOLOGY</h3>
              <p className={styles.coreSub}>Independent Nodes • Autonomous Services</p>
              <span className={styles.coreDots} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <ul className={styles.msCol}>
              {msRight.map((s) => (
                <li key={s.text}>
                  <span className={styles.tile32}>
                    <Ic name={s.icon} />
                  </span>
                  {s.text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Lifecycle ---------- */}
        <section className={styles.section}>
          <div className={`${styles.head} ${styles.headCenter}`}>
            <Pill>CONTINUOUS LIFECYCLE</Pill>
            <h2 className={styles.title}>API Development Services Across the Product Lifecycle</h2>
            <p className={styles.monoSub}>CONTINUOUS FIDELITY ESCALATION / LIFECYCLE PROGRESSION</p>
          </div>
          <ol className={styles.lifeGrid}>
            {lifecycle.map((l, i) => (
              <li key={l.title}>
                <div className={styles.lifeTop}>
                  <span className={styles.lifeNum}>{pad(i + 1)}</span>
                  <span className={styles.lifeIcon}>
                    <Ic name={l.icon} />
                  </span>
                </div>
                <h3>{l.title}</h3>
                <p>{l.desc}</p>
                <span className={styles.lifeBar} />
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Security ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <div className={`${styles.head} ${styles.headCenter}`}>
            <Pill>ZERO-TRUST RESILIENCE</Pill>
            <h2 className={styles.title}>API Security &amp; Reliability</h2>
            <p className={styles.lead}>APIs often sit at the center of modern digital products.</p>
            <p className={styles.inkLabel}>We focus on:</p>
          </div>
          <ul className={styles.secGrid}>
            {security.map((s) => (
              <li key={s.text}>
                <span className={styles.tile32}>
                  <Ic name={s.icon} />
                </span>
                {s.text}
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Where it fits ---------- */}
        <section className={styles.section}>
          <div className={styles.head}>
            <h2 className={styles.title}>Where API &amp; Microservices Engineering Fits</h2>
            <p className={styles.lead}>
              Our API &amp; microservices capabilities support different digital product environments:
            </p>
          </div>
          <ul className={styles.fitList}>
            {fits.map((f) => (
              <li key={f.title}>
                <span className={styles.fitLeft}>
                  <span className={styles.tile32}>
                    <Ic name={f.icon} />
                  </span>
                  <h3>{f.title}</h3>
                </span>
                <span className={styles.fitRight}>
                  {f.desc}
                  <Ic name="arrow" />
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={`${styles.section} ${styles.sectionFaq}`} id="faq">
          <h2 className={`${styles.title} ${styles.faqTitle}`}>Frequently Asked Questions About API &amp; Microservices</h2>
          <div className={styles.faqGrid}>
            <aside className={styles.desk}>
              <span className={styles.deskIcon}>
                <Ic name="help" />
              </span>
              <p className={styles.deskEyebrow}>ARCHITECTURE ADVISORY</p>
              <h3>Have a project in mind?</h3>
              <p>
                Explore how our API and decoupled microservices eliminate bottlenecks before scaling.
              </p>
              <Link href="/contact" className={styles.deskBtn}>
                Request Architectural Review
                <Ic name="external" />
              </Link>
            </aside>
            <ApiFaq items={faqs} />
          </div>
        </section>
      </div>
    </div>
  );
}