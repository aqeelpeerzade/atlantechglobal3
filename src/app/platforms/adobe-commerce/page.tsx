import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import CommerceFaq, { type CommerceFaqItem } from "./commercefaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Adobe Commerce Solutions & Consulting | Atlantech Global",
  description:
    "Build scalable ecommerce experiences with Adobe Commerce consulting, development, integrations, and optimization from Atlantech Global. Talk to our team today.",
  alternates: { canonical: "/platforms/adobe-commerce/" },
};

/** Where the "Platforms" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/platforms";
/** Hero image in /public/images. */
const HERO_IMAGE = "/images/zoho-workplace.jpg";
/** Section 5 image in /public/images — the document says "Add image"; change the file name to yours. */
const SOLUTIONS_IMAGE = "/images/zoho-workplace.jpg";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
  `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
  external: "M7 17L17 7M8 7h9v9",
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M5 12.5l4.5 4.5L19 7.5",
  /* hero chips */
  store: "M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9c0 2 2 2 4 2s4 0 4-2c0 2 2 2 4 2s4 0 4-2M9 20v-5h6v5",
  swap: "M4 8h13M14 4l4 4-4 4M20 16H7M10 12l-4 4 4 4",
  gauge: c(12, 12, 9) + "M12 12l4-4M7 16h.01M17 16h.01",
  /* services */
  map: "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14",
  code: "M9 7l-5 5 5 5M15 7l5 5-5 5",
  plug: "M7 4v6M17 4v6M5 10h14v3a7 7 0 0 1-14 0zM12 20v2",
  bolt: "M13 3L5 14h6l-1 7 8-11h-6z",
  /* topology */
  catalog: r(4, 4, 16, 16, 2) + "M4 9h16M9 9v11",
  users: c(9, 8, 3) + c(17, 9, 2.4) + "M3 20c0-3.5 2.8-5.5 6-5.5s6 2 6 5.5M15 15c3 0 6 1.5 6 4.5",
  card: r(3, 5, 18, 14, 2) + "M3 10h18M7 15h4",
  apps: r(4, 4, 7, 7, 1.5) + r(13, 4, 7, 7, 1.5) + r(4, 13, 7, 7, 1.5) + r(13, 13, 7, 7, 1.5),
  hub: c(12, 12, 2.4) + c(12, 4.5, 1.5) + c(5, 16.5, 1.5) + c(19, 16.5, 1.5) + "M12 6v3.6M6.3 15.7l4-2.3M17.7 15.7l-4-2.3",
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
  { icon: "store", text: "Scalable Storefronts" },
  { icon: "swap", text: "System Integrations" },
  { icon: "gauge", text: "Performance Optimization" },
];

const services: { icon: IconName; title: string; desc: string; tag: string }[] = [
  { icon: "map", title: "Adobe Commerce Consulting", desc: "Platform strategy, architecture, and implementation planning.", tag: "STRATEGY ROADMAP" },
  { icon: "code", title: "Adobe Commerce Development", desc: "Custom storefronts, extensions, and business-specific functionality.", tag: "CUSTOM STOREFRONTS" },
  { icon: "plug", title: "System Integration", desc: "Connect ecommerce with ERP, CRM, payment gateways, and third-party applications.", tag: "ECOSYSTEM CONNECTIVITY" },
  { icon: "bolt", title: "Performance Optimization", desc: "Improve website speed, scalability, and conversion opportunities.", tag: "SPEED & SCALE" },
];

const whyPoints = [
  "Business-focused ecommerce solutions.",
  "Customized functionality aligned with your workflows.",
  "Integration with existing enterprise systems.",
  "Scalable architecture designed to support business growth.",
  "Ongoing optimization and technical support.",
];

const nodes: { n: string; icon: IconName; title: string; desc: string }[] = [
  { n: "NODE 01", icon: "catalog", title: "Storefront & Catalog", desc: "Custom storefronts, extensions and functionality" },
  { n: "NODE 02", icon: "users", title: "ERP & CRM Systems", desc: "Connected business and customer systems" },
  { n: "NODE 03", icon: "card", title: "Payments & Inventory", desc: "Payment gateways and inventory integration" },
  { n: "NODE 04", icon: "apps", title: "Third-Party Applications", desc: "APIs, connectors and custom integrations" },
];

const steps: { label: string; title: string; desc: string; chip: string }[] = [
  { label: "Step 1", title: "Discover", desc: "Understand your business objectives and ecommerce requirements.", chip: "DISCOVERY & REQUIREMENTS" },
  { label: "Step 2", title: "Design", desc: "Define platform architecture and customer journeys.", chip: "ARCHITECTURE & JOURNEYS" },
  { label: "Step 3", title: "Develop", desc: "Configure, customize, and integrate the solution.", chip: "BUILD & INTEGRATE" },
  { label: "Step 4", title: "Deploy", desc: "Test, launch, and optimize the ecommerce experience.", chip: "TEST, LAUNCH & OPTIMIZE" },
];

const solutionTags = ["Storefront", "Product Catalog", "Integrations", "Customer Journey"];

const faqs: CommerceFaqItem[] = [
  {
    q: "What is Adobe Commerce?",
    a: "Adobe Commerce is an ecommerce platform that enables businesses to manage online stores, product catalogs, customer experiences, and digital sales operations.",
  },
  {
    q: "What services does an Adobe Commerce consulting company provide?",
    a: "An Adobe Commerce consulting company provides platform strategy, implementation, custom development, integrations, performance optimization, and ongoing support.",
  },
  {
    q: "Can Adobe Commerce integrate with ERP and CRM systems?",
    a: "Yes. Adobe Commerce can integrate with ERP, CRM, payment, inventory, and other business systems through APIs, connectors, and custom integrations.",
  },
  {
    q: "Is Adobe Commerce suitable for B2B businesses?",
    a: "Yes. Adobe Commerce supports B2B ecommerce requirements, including company accounts, negotiated pricing, and business-specific purchasing workflows, depending on configuration and edition.",
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

export default function AdobeCommercePage() {
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
              Adobe Commerce
            </span>
          </nav>
          <div className={styles.hero}>
            <div className={styles.heroGrid}>
              <div>
                <Eyebrow>ECOMMERCE PLATFORM</Eyebrow>
                <h1 className={styles.heroTitle}>
                  Adobe Commerce Solutions to <span className={styles.gradText}>Grow Your Online Business</span>
                </h1>
                <p className={styles.heroCopy}>
                  Build scalable, personalized, and high-performing ecommerce experiences with Adobe Commerce. Atlantech
                  Global helps businesses streamline online sales, integrate business systems, and deliver seamless
                  customer journeys.
                </p>
                <div className={styles.ctaRow}>
                  <Link href="/contact" className={styles.solidBtn}>
                    GET AN ADOBE COMMERCE CONSULTATION
                    <Ic name="external" />
                  </Link>
                  <Link href="/contact" className={styles.ghostBtn}>
                    TALK TO OUR EXPERTS
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
                    alt="Isometric purple platform illustrating a connected Adobe Commerce ecommerce ecosystem"
                    width={892}
                    height={496}
                    fetchPriority="high"
                  />
                  <span className={styles.heroOverlay}>
                    <span className={styles.overlayTop}>
                      <span>ADOBE COMMERCE • CONNECTED STOREFRONT MESH</span>
                      <span className={styles.greenDot} />
                    </span>
                    <span className={styles.overlayStatus}>STATUS: SCALABLE ARCHITECTURE</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section className={styles.section}>
          <div className={`${styles.head} ${styles.headCenter}`}>
            <Eyebrow center>PRACTICE CAPABILITIES</Eyebrow>
            <h2 className={styles.title}>Adobe Commerce Development and Consulting Services</h2>
            <p className={styles.lead}>
              We help businesses build and optimize ecommerce platforms tailored to their operational and customer
              needs.
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
              <h2 className={`${styles.title} ${styles.titleTight}`}>Why Choose Atlantech Global?</h2>
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
                <h3>Connected Commerce Ecosystem</h3>
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
                  <b>Adobe Commerce Platform</b>
                  <span>Scalable architecture designed to support business growth</span>
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
                <span>CONNECTED COMMERCE • SCALABLE ARCHITECTURE</span>
                <Ic name="shieldCheck" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Process ---------- */}
        <section className={styles.section}>
          <div className={`${styles.head} ${styles.headCenter}`}>
            <Eyebrow center>STRUCTURED METHODOLOGY</Eyebrow>
            <h2 className={styles.title}>Our Adobe Commerce Implementation Approach</h2>
          </div>
          <ol className={styles.stepGrid}>
            {steps.map((s, i) => (
              <li key={s.title}>
                <div className={styles.stepTop}>
                  <span className={styles.stepNum}>{pad(i + 1)}</span>
                  <span className={styles.phase}>PHASE {i + 1}</span>
                </div>
                <span className={styles.stepChip}>{s.chip}</span>
                <h3>
                  {s.label} — {s.title}
                </h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Strip ---------- */}
        <section className={`${styles.section} ${styles.band} ${styles.stripSection}`}>
          <div className={styles.strip}>
            <div>
              <Eyebrow>ACCELERATE ECOMMERCE GROWTH</Eyebrow>
              <h3>Ready to Improve Your Ecommerce Performance?</h3>
              <p className={styles.stripCopy}>
                Partner with Atlantech Global to build a scalable Adobe Commerce experience tailored to your business.
              </p>
            </div>
            <Link href="/contact" className={styles.stripBtn}>
              DISCUSS YOUR ECOMMERCE PROJECT
              <Ic name="arrow" />
            </Link>
          </div>
        </section>

        {/* ---------- Solutions ---------- */}
        <section className={styles.section}>
          <div className={styles.fnGrid}>
            <div className={styles.fnArt}>
              <img
                className={styles.fnImg}
                src={asset(SOLUTIONS_IMAGE)}
                alt="Isometric ecommerce storefront and connected systems representing Adobe Commerce solutions"
                width={892}
                height={560}
                loading="lazy"
              />
              <ul className={styles.tagRow}>
                {solutionTags.map((t) => (
                  <li key={t}>[{t}]</li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>COMMERCE ENABLEMENT</Eyebrow>
              <h2 className={`${styles.title} ${styles.titleTight}`}>Adobe Commerce Solutions for Your Business</h2>
              <p className={styles.lead}>
                Whether you are launching a new digital storefront or modernizing an existing platform, we help align
                ecommerce technology with customer expectations, operational efficiency, and growth objectives.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={`${styles.section} ${styles.band} ${styles.sectionFaq}`} id="faq">
          <div className={`${styles.head} ${styles.headCenter}`}>
            <Eyebrow center>KNOWLEDGE BASE</Eyebrow>
            <h2 className={styles.title}>Frequently Asked Questions About Adobe Commerce</h2>
          </div>
          <div className={styles.faqWrap}>
            <CommerceFaq items={faqs} />
          </div>
        </section>
      </div>
    </div>
  );
}