import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Technology built for your industry. Atlantech Global combines AI, cloud, data, engineering and digital transformation expertise for healthcare, enterprise SaaS, proptech, retail, financial services and manufacturing.",
  alternates: { canonical: "/industries/" },
};

/* Small stroke icons on a 24x24 grid, styled via CSS. */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons = {
  globe: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </Icon>
  ),
  shieldCheck: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
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
  checkCircle: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </Icon>
  ),
  swap: (
    <Icon>
      <path d="M7 4L3 8l4 4M3 8h17M17 12l4 4-4 4M21 16H4" />
    </Icon>
  ),
  brain: (
    <Icon>
      <path d="M9 4a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 10.5 3 3 0 0 0 5.5 13 3 3 0 0 0 7 17a3 3 0 0 0 5 1.5V5.5A2.5 2.5 0 0 0 9 4zM15 4a3 3 0 0 1 3 3v.5a3 3 0 0 1 2 3A3 3 0 0 1 18.5 13 3 3 0 0 1 17 17a3 3 0 0 1-5 1.5" />
    </Icon>
  ),
  arrow: (
    <Icon>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  ),
};

/**
 * Images for this page. Put the files in public/images/industries/ (or change the paths here).
 * If your files are .png or .jpg instead of .webp, just change the extension.
 * Cards are shown at a 16:9 ratio and cropped to fit, so wide images work best.
 */
const IMAGES = {
  hero: "/images/industry-image.png",
  healthcare: "/images/industry-healthcare2.jpg",
  saas: "/images/industry-saas.jpg",
  proptech: "/images/industry-proptech.jpg",
  retail: "/images/industry-retail2.jpg",
  fintech: "/images/industry-fintech.jpg",
  manufacturing: "/images/industry-manufacturing2.jpg",
} as const;

const trust = [
  { icon: icons.globe, label: "Global Delivery" },
  { icon: icons.shieldCheck, label: "ISO 27001 Certified" },
  { icon: icons.shield, label: "Enterprise Security" },
];

const industries: {
  chip: string;
  kicker: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  alt: string;
}[] = [
  {
    chip: "01 / HEALTHCARE",
    kicker: "01 / HEALTHCARE & LIFE SCIENCES",
    title: "Build better connected care.",
    desc: "Modernize healthcare operations, patient experiences and data ecosystems with secure, scalable digital platforms.",
    tags: ["Digital Health", "Patient Experience", "Healthcare Data", "Automation"],
    image: IMAGES.healthcare,
    alt: "Isometric illustration of connected digital healthcare technology",
  },
  {
    chip: "02 / ENTERPRISE SAAS",
    kicker: "02 / ENTERPRISE SAAS",
    title: "Engineer products that scale.",
    desc: "From MVP to enterprise scale, we help SaaS companies build reliable platforms, intelligent features and exceptional digital experiences.",
    tags: ["SaaS Engineering", "AI Features", "Cloud Native", "API Platforms"],
    image: IMAGES.saas,
    alt: "Isometric illustration of enterprise SaaS software infrastructure",
  },
  {
    chip: "03 / PROPTECH",
    kicker: "03 / PROPTECH & REAL ESTATE",
    title: "Turn property into a digital experience.",
    desc: "Connect property, people and operations through intelligent platforms that simplify discovery, transactions and asset management.",
    tags: ["Property Platforms", "Customer Portals", "Workflow Automation", "Analytics"],
    image: IMAGES.proptech,
    alt: "Isometric illustration of a connected digital property portfolio",
  },
  {
    chip: "04 / RETAIL",
    kicker: "04 / RETAIL & COMMERCE",
    title: "Make every interaction smarter.",
    desc: "Build connected commerce experiences across digital channels, operations, inventory, customer engagement and analytics.",
    tags: ["Omnichannel", "E-commerce", "Customer Data", "Automation"],
    image: IMAGES.retail,
    alt: "Isometric illustration of connected retail and commerce operations",
  },
  {
    chip: "05 / FINTECH",
    kicker: "05 / FINANCIAL SERVICES",
    title: "Modernize finance with confidence.",
    desc: "Design secure, data-driven applications and automation for financial workflows, customer journeys and operational efficiency.",
    tags: ["FinTech", "Data Platforms", "AI & Automation", "Security"],
    image: IMAGES.fintech,
    alt: "Isometric illustration of secure fintech payment flows",
  },
  {
    chip: "06 / INDUSTRY 4.0",
    kicker: "06 / MANUFACTURING",
    title: "Connect the intelligent enterprise.",
    desc: "Bring together production, assets, people and data through connected systems, analytics and intelligent automation.",
    tags: ["Industry 4.0", "IoT", "ERP", "Predictive Analytics"],
    image: IMAGES.manufacturing,
    alt: "Illustration of an intelligent manufacturing line with a robotic arm",
  },
];

const pillars = [
  {
    tone: "violet",
    icon: icons.swap,
    kicker: "DIGITAL TRANSFORMATION",
    title: "Modernize the way you operate.",
    desc: "Assess legacy systems, redesign workflows and create a practical roadmap toward scalable digital operations.",
    caps: ["Application modernization", "Enterprise applications & ERP", "Digital experience platforms", "Process digitalization"],
  },
  {
    tone: "indigo",
    icon: icons.brain,
    kicker: "AI & INTELLIGENT AUTOMATION",
    title: "Turn data into decisions.",
    desc: "Embed AI into products and workflows to reduce manual effort, improve decisions and unlock new customer experiences.",
    caps: ["Generative AI & LLM solutions", "Intelligent process automation", "Predictive analytics", "AI-powered customer experiences"],
  },
] as const;

const outcomes = [
  { title: "Accelerate growth", desc: "Launch new digital products and experiences faster.", link: "Execution path", lit: false },
  { title: "Reduce complexity", desc: "Modernize systems and simplify fragmented workflows.", link: "Streamlined core", lit: true },
  { title: "Improve experience", desc: "Create better customer and employee journeys.", link: "Unified touchpoints", lit: true },
  { title: "Scale securely", desc: "Build resilient platforms ready for tomorrow's demand.", link: "Enterprise grade", lit: false },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function IndustriesPage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                INDUSTRIES WE SERVE
              </span>
              <h1 className={styles.heroTitle}>
                Technology built
                <br />
                for your industry.
              </h1>
              <p className={styles.heroCopy}>
                We combine AI, cloud, data, engineering and digital transformation expertise to solve the challenges
                that matter most in your industry.
              </p>
              <div className={styles.heroActions}>
                <a href="#industries" className={styles.primaryBtn}>
                  EXPLORE INDUSTRIES
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <Link href="/contact" className={styles.lightBtn}>
                  DISCUSS YOUR CHALLENGE
                </Link>
              </div>
            </div>

            <div className={styles.heroArtCard}>
              <div className={styles.heroArtInner}>
                <img
                  src={asset(IMAGES.hero)}
                  alt="Illustration of a central technology node connected to industry systems"
                  width={1200}
                  height={800}
                  fetchPriority="high"
                  className={styles.iso}
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.nodeChip}>
                  <span className={styles.pillDot} />
                  CENTRAL NODE
                </span>
                <span className={styles.industryChip}>INDUSTRY</span>
                <span className={styles.heroBar}>
                  {icons.hub}
                  <b>AI • CLOUD • DATA • ENGINEERING</b>
                  <span className={styles.barCheck}>{icons.checkCircle}</span>
                </span>
              </div>
            </div>
          </div>

          <ul className={styles.trust}>
            {trust.map((t) => (
              <li key={t.label}>
                <span className={styles.trustIcon}>{t.icon}</span>
                {t.label}
              </li>
            ))}
            <li className={styles.trustAccent}>
              <span className={styles.trustIcon}>{icons.gear}</span>
              AI • CLOUD • DATA • ENGINEERING
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Industry expertise ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`} id="industries">
        <div className="container">
          <p className={styles.eyebrow}>INDUSTRY EXPERTISE</p>
          <h2 className={styles.title}>Deep context. Better technology.</h2>
          <p className={styles.lead}>
            Every industry has different customers, regulations, workflows and growth pressures. Our solutions start
            with that context — then apply the right technology.
          </p>

          <ul className={styles.indGrid}>
            {industries.map((ind) => (
              <li className={styles.indCard} key={ind.kicker}>
                <div className={styles.indMedia}>
                  <img
                    src={asset(ind.image)}
                    alt={ind.alt}
                    width={1200}
                    height={675}
                    loading="lazy"
                    className={styles.iso}
                    style={{ objectFit: "cover" }}
                  />
                  <span className={styles.mediaChip}>{ind.chip}</span>
                </div>
                <div className={styles.indKicker}>
                  <span>{ind.kicker}</span>
                  <span className={styles.indArrow}>{icons.arrow}</span>
                </div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <ul className={styles.tags}>
                  {ind.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- How we help ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>HOW WE HELP</p>
          <h2 className={styles.title}>
            Industry knowledge.
            <br />
            Technology depth.
          </h2>
          <p className={styles.lead}>
            We bring strategy and engineering together so technology investments translate into measurable business
            outcomes.
          </p>

          <div className={styles.pillarGrid}>
            {pillars.map((p) => (
              <article className={`${styles.pillar} ${styles[`tone_${p.tone}`]}`} key={p.kicker}>
                <div className={styles.pillarTop}>
                  <p className={styles.pillarKicker}>
                    <span className={styles.pillarIcon}>{p.icon}</span>
                    {p.kicker}
                  </p>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className={styles.pillarBottom}>
                  <p className={styles.capLabel}>KEY CAPABILITIES</p>
                  <ul>
                    {p.caps.map((c, i) => (
                      <li key={c}>
                        <span className={styles.capDot} />
                        {pad(i + 1)} {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Outcomes (dark) ---------- */}
      <section className={styles.dark}>
        <div className="container">
          <p className={styles.darkEyebrow}>BUILT AROUND OUTCOMES</p>
          <h2 className={styles.darkTitle}>Technology that moves the business.</h2>
          <p className={styles.darkLead}>
            Our goal isn&apos;t simply to deliver software. It&apos;s to create measurable improvement across growth,
            efficiency, customer experience and resilience.
          </p>
          <ul className={styles.outGrid}>
            {outcomes.map((o, i) => (
              <li className={styles.outCard} key={o.title}>
                <div className={styles.outTop}>
                  <span className={styles.outNum}>{pad(i + 1)}</span>
                  <span className={`${styles.outDot}${o.lit ? ` ${styles.outDotLit}` : ""}`} />
                </div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
                <span className={styles.outLink}>
                  {o.link} {icons.arrow}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Let&apos;s build what comes next.</h2>
          <p>
            Tell us what you&apos;re trying to improve, modernize or build. We&apos;ll bring the right technology and
            engineering perspective to the conversation.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Start Conversation
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}