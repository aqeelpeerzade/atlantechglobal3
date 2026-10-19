import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import MobileFaq, { type MobileFaqItem } from "./mobilefaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mobile App, Web & SaaS Development",
  description:
    "Mobile app, web application, SaaS and e-commerce development for scalable digital products: MVPs, multi-tenant platforms, storefronts and a connected product lifecycle from Atlantech Global.",
  alternates: { canonical: "/product-engineering/mobile-web-saas-ecommerce/" },
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
  phone: r(6, 3, 12, 18, 2.5) + "M10 6h4",
  android: "M5 17V11a7 7 0 0 1 14 0v6zM8 5L6.5 3M16 5l1.5-2M9.5 11h.01M14.5 11h.01M5 20h14",
  devices: r(3, 5, 12, 10, 1.5) + r(14, 10, 7, 11, 1.5) + "M7 19h5",
  penUi: "M4 20l4-1 11-11-3-3L5 16zM14 6l3 3M16 18h5",
  nodes: c(12, 12, 2.4) + c(12, 4, 1.6) + c(4.5, 16.5, 1.6) + c(19.5, 16.5, 1.6) + "M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3",
  bell: "M6 17V11a6 6 0 0 1 12 0v6l1.5 2h-15zM10 21h4",
  chartSearch: "M3 17l5-5 4 3 5-6" + c(18, 17, 2.5) + "M20 19l2 2",
  upload: "M12 16V5M7 9l5-5 5 5M5 20h14",
  building: "M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01",
  idCard: r(4, 5, 16, 15, 2) + c(12, 11, 2) + "M8.5 17c.8-1.5 2-2 3.5-2s2.7.5 3.5 2M9 5V3h6v2",
  gridPlus: r(4, 4, 7, 7, 1.5) + r(4, 13, 7, 7, 1.5) + r(13, 4, 7, 7, 1.5) + "M16.5 14v6M13.5 17h6",
  appsDia: r(4, 4, 7, 7, 1.5) + r(4, 13, 7, 7, 1.5) + r(13, 13, 7, 7, 1.5) + "M16.5 3l3.5 3.5-3.5 3.5-3.5-3.5z",
  wrench: c(12, 12, 9) + "M14.5 8.5a2.5 2.5 0 0 0-3 3L8.5 14.5l1 1 3-3a2.5 2.5 0 0 0 3-3l-1.5 1.5-1-1z",
  bag: "M6 8h12l1 12H5zM9 8a3 3 0 0 1 6 0M9 12v1M15 12v1",
  flowTree: r(3, 4, 6, 5, 1) + r(15, 4, 6, 5, 1) + r(15, 15, 6, 5, 1) + "M9 6.5h6M18 9v6M6 9v8h9",
  database: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6",
  userGear: c(10, 8, 3.5) + "M3 20c0-3.5 3-5.5 7-5.5M17 14v1M17 21v1M13.5 17.5h1M19.5 17.5h1" + c(17, 17.5, 2),
  card: r(3, 5, 18, 14, 2) + "M3 10h18M7 15h4",
  shieldUser: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" + c(12, 10, 2) + "M9 16c.7-1.5 1.8-2 3-2s2.3.5 3 2",
  plug: "M7 4v6M17 4v6M5 10h14v3a7 7 0 0 1-14 0zM12 20v2",
  analyticsBox: r(4, 4, 16, 16, 2) + "M8 16v-3M12 16V9M16 16v-5",
  layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  users: c(9, 8, 3) + c(17, 9, 2.4) + "M3 20c0-3.5 2.8-5.5 6-5.5s6 2 6 5.5M15 15c3 0 6 1.5 6 4.5",
  archive: r(3, 4, 18, 4, 1) + "M5 8v11h14V8M10 12h4",
  cash: r(3, 6, 18, 12, 2) + c(12, 12, 2.5) + "M6 9.5h.01M18 14.5h.01",
  warehouse: "M3 21V9l9-5 9 5v12M7 21v-8h10v8M10 17h4",
  truck: r(2, 6, 12, 10, 1) + "M14 9h4l3 3v4h-7" + c(7, 18, 2) + c(17, 18, 2),
  store: "M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9c0 2 2 2 4 2s4 0 4-2c0 2 2 2 4 2s4 0 4-2M9 20v-5h6v5",
  cart: "M3 4h3l2.5 11h9.5l2-8H7M10 20h.01M17 20h.01",
  stack: r(8, 8, 13, 11, 2) + "M4 15V6a2 2 0 0 1 2-2h9M11 12h7",
  shop: "M4 7l1.5-3h13L20 7M4 7h16v13H4zM9 20v-6h6v6",
  listDots: "M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01",
  basket: "M3 10h18l-2 10H5zM8 10l3-6M16 10l-3-6M10 14v3M14 14v3",
  cardCheck: r(3, 5, 18, 14, 2) + "M3 10h18M13 15l2 2 3-3",
  clipCheck: r(5, 4, 14, 17, 2) + "M9 4V3h6v1M9 13l2 2 4-4",
  receipt: "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6",
  tag: "M3 12V4h8l10 10-8 8zM7.5 8h.01",
  user: c(12, 8, 3.5) + "M5 21c0-4 3-6 7-6s7 2 7 6",
  fileDots: "M6 3h9l4 4v14H6zM15 3v4h4M9 11h.01M9 15h.01M13 11h.01M13 15h.01",
  palette: "M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2-.6-1.2.2-2.5 1.5-2.5h2a3 3 0 0 0 3-3A9.5 9.5 0 0 0 12 3zM8 11h.01M12 8h.01M16 11h.01",
  code: "M9 7l-5 5 5 5M15 7l5 5-5 5",
  server: r(4, 4, 16, 7, 2) + r(4, 13, 16, 7, 2) + "M8 7.5h.01M8 16.5h.01",
  cloud: "M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4.5 4.5 0 0 1 17 18z",
  badge: "M12 3l2.3 1.5 2.7-.2 1 2.5 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-1 2.5-2.7-.2L12 21l-2.3-1.5-2.7.2-1-2.5-2.2-1.6.9-2.6-.9-2.6L6 8.8l1-2.5 2.7.2zM9 12l2 2 4-4",
  rocket: "M5 15c-1 1-1.5 3-1.5 5 2 0 4-.5 5-1.5M9 15l-3-3c1-4 4-7 9-8 4-.7 5 .3 4.5 4.5-1 5-4 8-8 9zM15 9h.01",
  refresh: "M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4",
  terminal: r(3, 4, 18, 16, 2) + "M7 10l3 2-3 2M12 15h5",
  radio: c(12, 12, 2) + "M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.5 4.5a10.6 10.6 0 0 0 0 15M19.5 4.5a10.6 10.6 0 0 1 0 15",
  lock: r(5, 11, 14, 10, 2) + "M8 11V8a4 4 0 0 1 8 0v3",
  help: c(12, 12, 9) + "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01",
  external: "M7 17L17 7M8 7h9v9",
  arrow: "M5 12h14M13 6l6 6-6 6",
  trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
  bellSm: "M6 17V11a6 6 0 0 1 12 0v6l1.5 2h-15z",
  chart: "M3 17l5-5 4 3 5-6M17 7h4v4",
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

const build: { icon: IconName; title: string; desc: string }[] = [
  { icon: "phone", title: "Mobile Applications", desc: "IOS, Android and cross-platform applications." },
  { icon: "gridPlus", title: "Web Applications", desc: "Customer portals, enterprise platforms, dashboards and digital products." },
  { icon: "database", title: "SaaS Products", desc: "Scalable cloud-based software platforms with flexible user and subscription models." },
  { icon: "rocket", title: "MVPs", desc: "Focused first versions built to validate ideas and gather user feedback." },
];

const mobileCaps: { icon: IconName; text: string }[] = [
  { icon: "phone", text: "iOS application development" },
  { icon: "android", text: "Android application development" },
  { icon: "devices", text: "Cross-platform development" },
  { icon: "penUi", text: "Mobile UI/UX" },
  { icon: "nodes", text: "API integration" },
  { icon: "bell", text: "Push notifications" },
  { icon: "chartSearch", text: "Analytics integration" },
  { icon: "upload", text: "App deployment support" },
];

const webTiles: { icon: IconName; text: string }[] = [
  { icon: "building", text: "Enterprise web applications" },
  { icon: "idCard", text: "Customer portals" },
  { icon: "gridPlus", text: "Business dashboards" },
  { icon: "appsDia", text: "SaaS interfaces" },
  { icon: "wrench", text: "Internal business tools" },
  { icon: "bag", text: "E-commerce platforms" },
  { icon: "flowTree", text: "Workflow applications" },
  { icon: "database", text: "Data-driven platforms" },
];

const saas: { icon: IconName; title: string; desc: string; tag: string }[] = [
  { icon: "building", title: "Multi-Tenancy", desc: "Support multiple customers within a scalable architecture.", tag: "Tenant Isolation Matrix" },
  { icon: "userGear", title: "User Management", desc: "Roles, permissions and account management.", tag: "RBAC & SSO Integration" },
  { icon: "card", title: "Subscription Management", desc: "Plans, billing and usage models.", tag: "Usage-Based Tiering" },
  { icon: "shieldUser", title: "Administration", desc: "Dashboards and management controls.", tag: "Granular SuperAdmin" },
  { icon: "plug", title: "Integrations", desc: "APIs and third-party platforms.", tag: "Webhooks & SDKs" },
  { icon: "analyticsBox", title: "Analytics", desc: "Product usage and business insights.", tag: "Event Telemetry" },
];

const commerceFlow: { icon: IconName; text: string }[] = [
  { icon: "users", text: "customers" },
  { icon: "archive", text: "products" },
  { icon: "cash", text: "payments" },
  { icon: "warehouse", text: "inventory" },
  { icon: "truck", text: "fulfilment" },
];

const commerceItems: { icon: IconName; text: string }[] = [
  { icon: "store", text: "Custom e-commerce development" },
  { icon: "cart", text: "Shopify development" },
  { icon: "stack", text: "WooCommerce development" },
  { icon: "shop", text: "Custom online stores" },
  { icon: "nodes", text: "Multi-vendor marketplace development" },
  { icon: "listDots", text: "Product catalogue management" },
  { icon: "basket", text: "Shopping cart and checkout" },
  { icon: "cardCheck", text: "Payment gateway integration" },
  { icon: "truck", text: "Shipping integration" },
  { icon: "clipCheck", text: "Inventory integration" },
  { icon: "receipt", text: "Order management" },
  { icon: "tag", text: "Coupon and offer management" },
  { icon: "user", text: "Customer accounts" },
  { icon: "fileDots", text: "Analytics and reporting" },
];

const stages: { title: string; desc: string; link: string; icon: IconName }[] = [
  { title: "Idea", desc: "Define the problem and target users.", link: "Validation", icon: "arrow" },
  { title: "Prototype", desc: "Visualize and validate the concept.", link: "Wireframe", icon: "arrow" },
  { title: "MVP", desc: "Build the essential product experience.", link: "Core Build", icon: "arrow" },
  { title: "Launch", desc: "Release to real users.", link: "Production", icon: "arrow" },
  { title: "Learn", desc: "Collect feedback and product insights.", link: "Telemetry", icon: "arrow" },
  { title: "Scale", desc: "Add capabilities and improve performance.", link: "Expansion", icon: "trend" },
];

const lifecycle: { icon: IconName; text: string }[] = [
  { icon: "palette", text: "Product Design" },
  { icon: "code", text: "Frontend" },
  { icon: "server", text: "Backend & APIs" },
  { icon: "cloud", text: "Cloud" },
  { icon: "badge", text: "QA" },
  { icon: "rocket", text: "Deployment" },
  { icon: "refresh", text: "Continuous Improvement" },
];

const faqs: MobileFaqItem[] = [
  {
    q: "What is Mobile App Development?",
    a: "Mobile App Development involves designing and building applications for smartphones and tablets, including native and cross-platform applications.",
  },
  {
    q: "What is Web Application Development?",
    a: "Web Application Development involves building interactive browser-based applications such as portals, dashboards, SaaS platforms and enterprise applications.",
  },
  {
    q: "What is SaaS development?",
    a: "SaaS development involves creating cloud-based software that customers can access online, often with features such as user management, subscriptions, billing and multi-tenant architecture.",
  },
  {
    q: "Can you build an MVP before developing the complete product?",
    a: "Yes. An MVP can focus on the core features needed to validate the product concept before expanding into a larger product roadmap.",
  },
];

function Head({
  eyebrow,
  title,
  lead,
  accent,
  center,
  aside,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  accent?: string;
  center?: boolean;
  aside?: string;
}) {
  return (
    <div className={`${styles.head}${center ? ` ${styles.headCenter}` : ""}${aside ? ` ${styles.headSplit}` : ""}`}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
        {lead && <p className={styles.lead}>{lead}</p>}
        {accent && <p className={styles.accent}>{accent}</p>}
      </div>
      {aside && <span className={center ? styles.pillCenter : styles.pillAside}>{aside}</span>}
    </div>
  );
}

export default function MobileWebSaasPage() {
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
              Mobile, Web, SaaS &amp; Ecommerce
            </span>
          </nav>
          <div className={styles.hero}>
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrowPill}>
                  <span className={styles.pillDot} />
                  PRODUCT ENGINEERING SERVICES • MOBILE, WEB, SAAS &amp; ECOMMERCE
                </span>
                <h1 className={styles.heroTitle}>
                  Mobile App, Web &amp; SaaS Development for <span className={styles.gradText}>Scalable Products</span>
                </h1>
                <p className={styles.heroCopy}>
                  Build digital products that work across the channels your customers and teams use every day. Our
                  Mobile App Development, web application and SaaS capabilities help businesses turn product concepts
                  into scalable, production-ready digital experiences.
                </p>
                <h2 className={styles.buildHead}>What we build</h2>
                <ul className={styles.buildGrid}>
                  {build.map((b) => (
                    <li key={b.title}>
                      <div className={styles.buildTop}>
                        <span className={styles.tile32}>
                          <Ic name={b.icon} />
                        </span>
                        <h3>{b.title}</h3>
                      </div>
                      <p>{b.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.heroArtCard}>
                <div className={styles.heroImgWrap}>
                  <img
                    className={styles.heroImg}
                    src={asset(HERO_IMAGE)}
                    alt="Isometric purple mobile, web and cloud platforms representing connected digital products"
                    width={892}
                    height={496}
                    fetchPriority="high"
                  />
                  <span className={styles.heroOverlay}>
                    <span className={styles.pillDot} />
                    SYSTEM ARCHITECTURE • Connected Digital Ecosystem • ACTIVE RUNTIME
                  </span>
                </div>
                <div className={styles.heroCaption}>
                  <span className={styles.captionLeft}>
                    <Ic name="radio" />
                    Omnichannel Architecture
                  </span>
                  <span className={styles.captionMono}>v4.8 Scalable</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Mobile ---------- */}
        <section className={styles.section}>
          <Head
            eyebrow="USER-CENTRIC ENGINEERING / MOBILE ECOSYSTEM"
            title="Mobile App Development Built Around Real User Journeys"
            lead="From customer-facing apps to internal business applications, we focus on usability, performance and scalability."
          />
          <div className={styles.mobileGrid}>
            <div className={styles.phoneCol}>
              <div className={styles.phone}>
                <span className={styles.notch} />
                <div className={styles.screen}>
                  <div className={styles.appHead}>
                    <span className={styles.appIcon}>
                      <Ic name="terminal" />
                    </span>
                    <span className={styles.appName}>
                      <b>Native Core</b>
                      <small>60 FPS Render</small>
                    </span>
                    <span className={styles.monoPill}>iOS + Android</span>
                  </div>
                  <div className={styles.syncBox}>
                    <div className={styles.syncRow}>
                      <span>API Sync Rate</span>
                      <b>99.98%</b>
                    </div>
                    <span className={styles.syncTrack}>
                      <span />
                    </span>
                  </div>
                  <div className={styles.miniRow}>
                    <span className={styles.miniTile}>
                      <Ic name="bellSm" />
                      PUSH READY
                    </span>
                    <span className={styles.miniTile}>
                      <Ic name="chart" />
                      ANALYTICS
                    </span>
                  </div>
                  <span className={styles.deployBtn}>Continuous Deployment Pipeline</span>
                </div>
                <p className={styles.phoneFoot}>
                  <span className={styles.pillDot} />
                  Cross-Platform Unified Runtime
                </p>
              </div>
            </div>
            <div>
              <h3 className={styles.capsHead}>
                <Ic name="layers" />
                Mobile capabilities
              </h3>
              <ul className={styles.capGrid}>
                {mobileCaps.map((m) => (
                  <li key={m.text}>
                    <span className={styles.tileWhite}>
                      <Ic name={m.icon} />
                    </span>
                    {m.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- Web ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <Head
            center
            eyebrow="MODERN WEB ARCHITECTURE / ENTERPRISE APPLICATIONS"
            title="Web Application Development for Modern Businesses"
            lead="Build web applications that go beyond basic websites."
            aside="We develop:"
          />
          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <span className={styles.dots}>
                <i />
                <i />
                <i />
              </span>
              <span className={styles.url}>https://enterprise-cloud.atlantechglobal.internal/runtime</span>
              <span className={styles.encrypted}>
                <Ic name="lock" />
                Enterprise Encrypted
              </span>
            </div>
            <ul className={styles.webGrid}>
              {webTiles.map((w, i) => (
                <li key={w.text}>
                  <div className={styles.webTop}>
                    <span className={styles.tileDeep}>
                      <Ic name={w.icon} />
                    </span>
                    <span className={styles.webNum}>{pad(i + 1)}</span>
                  </div>
                  <h3>{w.text}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- SaaS ---------- */}
        <section className={styles.section}>
          <Head
            eyebrow="MULTI-TENANT PLATFORM ENGINEERING"
            title="SaaS Development Services That Scale"
            lead="A SaaS product needs more than a working application."
            aside="We build capabilities around:"
          />
          <ul className={styles.saasGrid}>
            {saas.map((s) => (
              <li key={s.title}>
                <span className={styles.tileSolid}>
                  <Ic name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={styles.monoTag}>
                  <span className={styles.footDot} />
                  {s.tag}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- E-commerce ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <Head
            eyebrow="OMNICHANNEL COMMERCE PLATFORMS"
            title="Build E-Commerce Experiences Designed to Convert"
            lead="Create an online store or digital marketplace that connects customers, products, payments, inventory and fulfilment in one seamless experience. Our e-commerce development services support businesses from launching their first online store to building customised commerce platforms."
          />
          <div className={styles.flowEngine}>
            <p className={styles.monoLabel}>CONNECTED COMMERCE FLOW ENGINE</p>
            <ul className={styles.flowTiles}>
              {commerceFlow.map((f) => (
                <li key={f.text}>
                  <Ic name={f.icon} />
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
          <h3 className={styles.solutionsHead}>E-Commerce Solutions</h3>
          <ul className={styles.solutionsGrid}>
            {commerceItems.map((it) => (
              <li key={it.text}>
                <Ic name={it.icon} />
                <span>{it.text}</span>
              </li>
            ))}
          </ul>
          <div className={styles.banner}>
            <span className={styles.bannerIcon}>
              <Ic name="store" />
            </span>
            <p>
              Whether you need a single-brand store or a multi-vendor marketplace, we build the technology around your
              business model.
            </p>
          </div>
        </section>

        {/* ---------- Roadmap ---------- */}
        <section className={styles.section}>
          <Head
            eyebrow="PRODUCT LIFECYCLE ROADMAP"
            title="From MVP to Market-Ready Product"
            lead="Not every product needs every feature on day one."
            accent="Our product journey"
          />
          <ol className={styles.stageGrid}>
            {stages.map((s, i) => (
              <li key={s.title}>
                <span className={styles.stageNum}>{pad(i + 1)}</span>
                <span className={styles.stageLabel}>STAGE {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={styles.stageLink}>
                  {s.link}
                  <Ic name={s.icon} />
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- One approach ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <Head
            eyebrow="END-TO-END DEVELOPMENT LIFECYCLE"
            title="One Engineering Approach Across Mobile, Web & SaaS"
            lead="Bring product design and engineering together instead of treating them as disconnected activities."
            accent="Our capabilities connect:"
          />
          <div className={styles.lifeCard}>
            <ol className={styles.lifeRow}>
              {lifecycle.map((l, i) => (
                <li key={l.text}>
                  {i > 0 && (
                    <span className={styles.lifeArrow}>
                      <Ic name="arrow" />
                    </span>
                  )}
                  <span className={styles.lifeNode}>
                    <Ic name={l.icon} />
                    {l.text}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <p className={styles.noteBar}>This creates a more connected product development lifecycle.</p>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={`${styles.section} ${styles.sectionFaq}`} id="faq">
          <h2 className={`${styles.title} ${styles.faqTitle}`}>Frequently Asked Questions About Mobile, Web &amp; SaaS Development</h2>
          <div className={styles.faqGrid}>
            <aside className={styles.desk}>
              <span className={styles.deskIcon}>
                <Ic name="help" />
              </span>
              <h3>Product Advisory</h3>
              <p>
                Have a product vision in mind? Connect with our digital engineering architects to shape your roadmap
                and technical stack.
              </p>
              <Link href="/contact" className={styles.solidBtn}>
                Request Product Consultation
                <Ic name="external" />
              </Link>
            </aside>
            <MobileFaq items={faqs} />
          </div>
        </section>
      </div>
    </div>
  );
}