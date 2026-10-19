import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import UxFaq, { type UxFaqItem } from "./uxfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "UI/UX Design & Prototyping Services",
  description:
    "UI/UX design services combining user research, experience strategy, interface design and interactive prototyping to create intuitive digital products that are ready for development, from Atlantech Global.",
  alternates: { canonical: "/product-engineering/ui-ux-prototyping/" },
};

/** Where the "Product Engineering Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/product-engineering";
/** Hero image in /public/images — change the file name if yours differs. */
const HERO_IMAGE = "/images/ui-ux-prototyping.jpg";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
  `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
  check: c(12, 12, 9) + "M8.5 12l2.5 2.5 4.5-5",
  external: "M7 17L17 7M8 7h9v9",
  arrow: "M5 12h14M13 6l6 6-6 6",
  layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  /* process */
  understand: c(12, 12, 8) + c(12, 12, 3) + "M12 2v3M12 19v3M2 12h3M19 12h3",
  structure: r(3, 4, 6, 5, 1) + r(15, 4, 6, 5, 1) + r(9, 15, 6, 5, 1) + "M6 9v3h12V9M12 12v3",
  visualize: "M4 20l4-1 11-11-3-3L5 16zM14 6l3 3M16 18h5",
  prototype: "M6 3l12 8-5 1.5L10.5 18z",
  refine: "M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4",
  /* platforms */
  browser: r(3, 5, 18, 14, 2) + "M3 9h18M6.5 7h.01M9 7h.01",
  phone: r(6, 3, 12, 18, 2.5) + "M10 6h4",
  grid: r(4, 4, 7, 7, 1.5) + r(13, 4, 7, 7, 1.5) + r(4, 13, 7, 7, 1.5) + r(13, 13, 7, 7, 1.5),
  building: "M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01",
  portal: c(12, 12, 9) + c(12, 10, 2.5) + "M7.5 17c1-2 2.5-2.7 4.5-2.7s3.5.7 4.5 2.7",
  cart: "M3 4h3l2.5 11h9.5l2-8H7M10 20h.01M17 20h.01",
  /* design system */
  components: r(4, 4, 7, 7, 1.5) + r(13, 4, 7, 7, 1.5) + r(4, 13, 7, 7, 1.5) + "M16.5 14v6M13.5 17h6",
  sliders: "M4 8h9M17 8h3M4 16h3M11 16h9" + c(15, 8, 2) + c(9, 16, 2),
  bolt: "M13 3L5 14h6l-1 7 8-11h-6z",
  code: "M9 7l-5 5 5 5M15 7l5 5-5 5",
  sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z",
  brand: "M12 3l2.3 1.5 2.7-.2 1 2.5 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-1 2.5-2.7-.2L12 21l-2.3-1.5-2.7.2-1-2.5-2.2-1.6.9-2.6-.9-2.6L6 8.8l1-2.5 2.7.2zM9 12l2 2 4-4",
  nodes: c(12, 12, 2.4) + c(12, 4, 1.6) + c(4.5, 16.5, 1.6) + c(19.5, 16.5, 1.6) + "M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3",
  /* misc */
  stack: "M12 3l9 5-9 5-9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5",
  help: c(12, 12, 9) + "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01",
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

const chips: string[] = [
  "User research & discovery",
  "User journey mapping",
  "Information architecture",
  "Wireframes",
  "Interactive prototypes",
  "UI design",
  "Design systems",
  "Usability testing",
];

const process: { icon: IconName; title: string; desc: string }[] = [
  { icon: "understand", title: "Understand", desc: "Identify user research, goals, pain points and business requirements." },
  { icon: "structure", title: "Structure", desc: "Create user flows, information architecture and product journeys." },
  { icon: "visualize", title: "Visualize", desc: "Turn concepts into wireframes and high-fidelity interfaces." },
  { icon: "prototype", title: "Prototype", desc: "Create clickable prototypes to validate the experience." },
  { icon: "refine", title: "Refine", desc: "Use feedback and usability insights to improve the final design." },
];

type Preview = "wire" | "hifi" | "proto" | "system" | "code";
const outputs: { preview: Preview; title: string; desc: string }[] = [
  { preview: "wire", title: "Low-Fidelity Wireframes", desc: "Validate structure and navigation." },
  { preview: "hifi", title: "High-Fidelity UI Designs", desc: "Establish the visual experience." },
  { preview: "proto", title: "Interactive Prototypes", desc: "Simulate real user journeys." },
  { preview: "system", title: "Design Systems", desc: "Create reusable components for consistent interfaces." },
  { preview: "code", title: "Developer Handoff", desc: "Provide development-ready design specifications." },
];

const platforms: { icon: IconName; title: string; desc: string }[] = [
  { icon: "browser", title: "Web Applications", desc: "Navigation, usability & responsive interfaces" },
  { icon: "phone", title: "Mobile Apps", desc: "Mobile-first journeys & interactions" },
  { icon: "grid", title: "SaaS Products", desc: "Dashboards, workflows & usability" },
  { icon: "building", title: "Enterprise Platforms", desc: "Complex workflows & role-based experiences" },
  { icon: "portal", title: "Customer Portals", desc: "Self-service & simplified journeys" },
  { icon: "cart", title: "Digital Commerce", desc: "Product discovery & conversion journeys" },
];

const systemLeft: { icon: IconName; text: string }[] = [
  { icon: "components", text: "Consistent UI components" },
  { icon: "sliders", text: "Standardized interactions" },
  { icon: "bolt", text: "Faster design iterations" },
];
const systemRight: { icon: IconName; text: string }[] = [
  { icon: "code", text: "Better developer handoff" },
  { icon: "sparkle", text: "Scalable product experiences" },
  { icon: "brand", text: "Consistent branding across platforms" },
];

const benefits: { title: string; desc: string; tag: string }[] = [
  { title: "Better product clarity", desc: "Identify usability issues before development.", tag: "CLARITY" },
  { title: "Faster validation", desc: "Test ideas through prototypes.", tag: "VELOCITY" },
  { title: "Reduced rework", desc: "Resolve experience gaps before coding.", tag: "EFFICIENCY" },
  { title: "Better adoption", desc: "Create interfaces users can understand easily.", tag: "RETENTION" },
  { title: "Scalable design", desc: "Build reusable systems for future features.", tag: "SCALE" },
];

const faqs: UxFaqItem[] = [
  {
    q: "What does a UI/UX design service include?",
    a: "UI/UX design services can include user research, information architecture, user flows, wireframes, UI design, prototypes, design systems and usability testing.",
  },
  {
    q: "What is the difference between UI and UX design?",
    a: "UX design focuses on how a product works and feels, including research, journeys and structure. UI design focuses on the visual interface, including layout, typography, colour and components.",
  },
  {
    q: "Why are prototypes important?",
    a: "Prototypes let stakeholders and users experience a product before it is built, so usability issues and unclear flows can be found and fixed early, reducing development rework.",
  },
  {
    q: "Can you design both mobile and web applications?",
    a: "Yes. We design experiences for web applications, mobile apps, SaaS products, enterprise platforms, customer portals and digital commerce, with consistent design systems across channels.",
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
  eyebrow?: string;
  title: string;
  lead?: string;
  accent?: string;
  center?: boolean;
  aside?: string;
}) {
  return (
    <div className={`${styles.head}${center ? ` ${styles.headCenter}` : ""}${aside && !center ? ` ${styles.headSplit}` : ""}`}>
      <div>
        {eyebrow && !center && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.title}>{title}</h2>
        {lead && <p className={styles.lead}>{lead}</p>}
        {accent && <p className={styles.accent}>{accent}</p>}
      </div>
      {aside && <span className={center ? styles.pillCenter : styles.pillAside}>{aside}</span>}
    </div>
  );
}

function PreviewArt({ kind }: { kind: Preview }) {
  switch (kind) {
    case "wire":
      return (
        <div className={`${styles.pv} ${styles.pvWire}`}>
          <i className={styles.wBarLg} />
          <i className={styles.wBarSm} />
          <span className={styles.wBoxes}>
            <i />
            <i />
          </span>
        </div>
      );
    case "hifi":
      return (
        <div className={`${styles.pv} ${styles.pvHifi}`}>
          <span className={styles.hTop}>
            <i className={styles.hPill} />
            <i className={styles.hDot} />
          </span>
          <i className={styles.hLine} />
          <i className={styles.hLine2} />
          <span className={styles.hCta}>CTA Button</span>
        </div>
      );
    case "proto":
      return (
        <div className={`${styles.pv} ${styles.pvProto}`}>
          <span className={styles.pFrame}>
            <i />
          </span>
          <span className={styles.pDots}>
            <i />
            <i />
            <i />
          </span>
        </div>
      );
    case "system":
      return (
        <div className={`${styles.pv} ${styles.pvSystem}`}>
          <span className={styles.sSwatches}>
            <i />
            <i />
            <i />
            <i />
          </span>
          <i className={styles.sBar} />
          <span className={styles.sRow}>
            <i />
            <i />
            <i />
          </span>
        </div>
      );
    default:
      return (
        <div className={`${styles.pv} ${styles.pvCode}`}>
          <code>
            &lt;ComponentSpec&gt;
            <br />
            padding: 16px;
            <br />
            radius: 12px;
            <br />
            state: ready;
            <br />
            &lt;/Handoff&gt;
          </code>
        </div>
      );
  }
}

export default function UiUxPrototypingPage() {
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
              UI/UX Design &amp; Prototyping
            </span>
          </nav>
          <div className={styles.hero}>
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrowPill}>
                  <span className={styles.pillDot} />
                  PRODUCT ENGINEERING SERVICES • UI/UX DESIGN &amp; PROTOTYPING
                </span>
                <h1 className={styles.heroTitle}>
                  UI/UX Design Services That Turn Ideas Into <span className={styles.gradText}>Intuitive Digital Products</span>
                </h1>
                <p className={styles.heroCopy}>
                  Great products should be easy to understand before they are easy to build. Our UI/UX Design Services
                  combine user research, experience strategy, interface design and interactive prototyping to create
                  digital products that are intuitive, engaging and ready for development.
                </p>
                <h2 className={styles.chipsHead}>From idea to validated experience:</h2>
                <ul className={styles.chipGrid}>
                  {chips.map((t) => (
                    <li key={t}>
                      <Ic name="check" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={styles.solidBtn}>
                  Design Your Digital Product
                  <Ic name="external" />
                </Link>
              </div>

              <div className={styles.heroArtCard}>
                <div className={styles.heroImgWrap}>
                  <img
                    className={styles.heroImg}
                    src={asset(HERO_IMAGE)}
                    alt="Isometric purple interface layers representing UI/UX design and interactive prototyping"
                    width={892}
                    height={760}
                    fetchPriority="high"
                  />
                  <span className={styles.heroOverlay}>
                    <span className={styles.overlayIcon}>
                      <Ic name="stack" />
                    </span>
                    <span className={styles.overlayText}>
                      <small>SYSTEM PIPELINE</small>
                      <b>Modular Interface Stack</b>
                    </span>
                    <span className={styles.activePill}>
                      <span className={styles.greenDot} />
                      Active Engine
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Process ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <Head
            center
            eyebrow=""
            title="Product Design That Starts With the User"
            lead="We don't begin with screens. We begin with the user, business objective and problem."
            aside="OUR DESIGN PROCESS"
          />
          <ol className={styles.processGrid}>
            {process.map((p, i) => (
              <li key={p.title}>
                <div className={styles.processTop}>
                  <span className={styles.processNum}>{pad(i + 1)}</span>
                  <span className={styles.tile32}>
                    <Ic name={p.icon} />
                  </span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- What we create ---------- */}
        <section className={styles.section}>
          <Head
            eyebrow="WHAT WE CREATE"
            title="From Wireframes to Interactive Prototypes"
            lead="Give stakeholders something they can see, click and experience before development begins."
          />
          <p className={styles.escalation}>
            Continuous Fidelity Escalation
            <Ic name="arrow" />
          </p>
          <ol className={styles.outputGrid}>
            {outputs.map((o, i) => (
              <li key={o.title}>
                <PreviewArt kind={o.preview} />
                <span className={styles.outNum}>{pad(i + 1)}</span>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Platforms ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <Head
            title="UI/UX Design for Web, Mobile & Enterprise Products"
            lead="Our design capabilities support different digital product environments:"
          />
          <ul className={styles.platformList}>
            {platforms.map((p) => (
              <li key={p.title}>
                <span className={styles.platformLeft}>
                  <span className={styles.tile32}>
                    <Ic name={p.icon} />
                  </span>
                  <h3>{p.title}</h3>
                </span>
                <span className={styles.platformRight}>
                  <Ic name="arrow" />
                  {p.desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Design systems ---------- */}
        <section className={styles.section}>
          <Head
            center
            eyebrow=""
            title="Design Systems That Scale With Your Product"
            lead="As products grow, inconsistent interfaces create unnecessary complexity."
            accent="A reusable design system helps teams maintain:"
          />
          <div className={styles.systemGrid}>
            <ul className={styles.systemCol}>
              {systemLeft.map((s) => (
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
                <Ic name="nodes" />
              </span>
              <p className={styles.coreLabel}>ARCHITECTURE BASE</p>
              <h3>DESIGN SYSTEM CORE</h3>
              <p className={styles.coreSub}>Tokens • Components • Guidelines</p>
            </div>
            <ul className={styles.systemCol}>
              {systemRight.map((s) => (
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

        {/* ---------- Why invest ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <Head center eyebrow="" title="Why Invest in UI/UX Design Before Development?" />
          <ol className={styles.benefitGrid}>
            {benefits.map((b, i) => (
              <li key={b.title}>
                <div className={styles.benefitTop}>
                  <span className={styles.benefitNum}>{pad(i + 1)}</span>
                  <span className={styles.benefitTag}>{b.tag}</span>
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={`${styles.section} ${styles.sectionFaq}`} id="faq">
          <h2 className={`${styles.title} ${styles.faqTitle}`}>Frequently Asked Questions About UI/UX Design Services</h2>
          <div className={styles.faqGrid}>
            <aside className={styles.desk}>
              <span className={styles.deskIcon}>
                <Ic name="help" />
              </span>
              <h3>Have a project in mind?</h3>
              <p>
                Explore how our product engineering and design systems eliminate guesswork before engineering
                investment.
              </p>
              <Link href="/contact" className={styles.deskLink}>
                Enterprise Advisory
                <Ic name="arrow" />
              </Link>
            </aside>
            <UxFaq items={faqs} />
          </div>
        </section>
      </div>
    </div>
  );
}