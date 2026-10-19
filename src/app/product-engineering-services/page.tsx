import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { CheckIcon } from "@/lib/icons";
import ContactPanel from "./ContactPanel";
import ProductFaq, { type ProductFaqItem } from "./ProductFaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Product Engineering Services",
  description:
    "Transform ideas into scalable digital products using AI, cloud, automation, and agile engineering. Product strategy, UI/UX, APIs and microservices, QA automation, and mobile, web and SaaS from Atlantech Global.",
  alternates: { canonical: "/product-engineering/" },
};

const stats = [
  { num: "99.9%", label: "Uptime SLA Guaranteed" },
  { num: "3.5×", label: "Deployment Velocity" },
  { num: "1,400+", label: "CI/CD Automated Tests" },
  { num: "−40%", label: "Time-to-Market Accelerated" },
];

const benefits = [
  "Accelerate product development with agile engineering, reducing time-to-market while ensuring quality, performance, and scalability.",
  "We build cloud-native, AI-powered digital products that adapt to evolving customer needs and future business growth.",
  "Modernize legacy applications with advanced technologies to improve security, user experience, and operational efficiency.",
  "Manage the complete product lifecycle—from strategy and UX design to development, deployment, maintenance, and continuous optimization.",
];

const services = [
  {
    title: "Product Strategy & Consulting",
    desc: "Define a clear product vision, validate ideas, and create a strategic roadmap that aligns technology investments with your business goals.",
     href: "mobile-web-saas-ecommerce"
  },
  {
    title: "UI/UX Design & Prototyping",
    desc: "Create intuitive user experiences with Product Design and Development that transform ideas into interactive prototypes, validate concepts, and deliver engaging, user-centric digital products.",
    href: "ai-strategy-enginnering"
  },
  {
    title: "API & Microservices",
    desc: "Develop secure APIs and scalable microservices architectures that enable seamless system integration, improve application performance, and support flexible, cloud-native product ecosystems.",
    href: "ai-strategy-enginnering"
  },
  {
    title: "Testing & QA Automation",
    desc: "Ensure reliable, high-quality software through automated testing, performance validation, security assessments, and continuous QA processes that accelerate releases and reduce defects.",
     href: "ai-strategy-enginnering"
  },
  {
    title: "Mobile, Web & SaaS",
    desc: "Build scalable Mobile App Development and Web Application Development solutions, along with secure SaaS platforms, that deliver seamless user experiences across devices and support business growth.",
     href: "mobile-web-saas-ecommerce"
  },
];

const blueprint = [
  { code: "UI", title: "Experience Layer", detail: "React, Next.js, Flutter, iOS/Android" },
  { code: "API", title: "Scalable Microservices Core", detail: "GraphQL, gRPC, Event-Driven Kafka", tag: "Resilient", active: true },
  { code: "DB", title: "Cloud Storage & Vector Engine", detail: "Distributed Multi-Region Persistence" },
];

const solutions = [
  {
    title: "AI-Powered Quality Engineering",
    desc: "Automate software testing with AI-driven frameworks that improve accuracy, reduce manual effort, and accelerate product releases while ensuring consistent quality across every development cycle.",
    label: "Accuracy Benchmark",
    value: "99.4% Pass Rate",
    tone: "violet",
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <rect x="10" y="10" width="4" height="4" />
        <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
      </>
    ),
  },
  {
    title: "Test Automation Solutions",
    desc: "Streamline functional, regression, API, and performance testing with intelligent automation frameworks that increase testing speed, improve software reliability, and shorten time-to-market.",
    label: "Release Velocity",
    value: "4× Faster Testing",
    tone: "indigo",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </>
    ),
  },
  {
    title: "Predictive Product Sustenance",
    desc: "Leverage AI, machine learning, and advanced analytics to monitor product health, predict issues before they occur, optimize maintenance, and maximize long-term product performance.",
    label: "Downtime Reduction",
    value: "−65% Anomaly MTTR",
    tone: "deep",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 21l4-5 4 5M7 12l3-3 3 2 4-4" />
      </>
    ),
  },
] as const;

const lifecycle = [
  {
    title: "Research & Discovery",
    desc: "Identify customer needs, evaluate market opportunities, validate product ideas, and leverage AI-driven insights to define a clear product roadmap that minimizes risk and maximizes business value.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4.2-4.2" />
      </>
    ),
  },
  {
    title: "Product Design & Architecture",
    desc: "Transform concepts into scalable product architectures with AI-assisted design, rapid prototyping, and intuitive user experiences. We create future-ready solutions built for performance, flexibility, and growth.",
    icon: (
      <>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </>
    ),
  },
  {
    title: "Intelligent Development",
    desc: "Build secure, cloud-native applications using AI-assisted coding, DevOps, automation, and continuous integration. Our engineering approach accelerates delivery, improves software quality, and enables continuous innovation.",
    icon: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  },
];

const faqs: ProductFaqItem[] = [
 {
  q: "What are Product Engineering Services, and how do they benefit businesses?",

  a: [
    "Product Engineering Services streamline the entire product lifecycle, enabling faster launches, better quality, reduced costs, and scalable solutions.",
  ],
},

{
  q: "How do I choose the right Product Engineering Company?",

  a: [
    "Choose a Product Engineering Company offering end-to-end expertise, agile development, cloud, AI, quality assurance, and continuous product support.",
  ],
},

{
  q: "What is the difference between Software Product Engineering and Software Development?",

  a: [
    "Software development builds applications, while Product Engineering manages the complete lifecycle - from strategy and design to development, testing, deployment, and continuous improvement.",
  ],
},

{
  q: "What technologies are used in modern Product Engineering?",

  a: [],

  list: {
    intro: "Modern Product Engineering Services leverage technologies such as:",

    items: [
      "Artificial Intelligence (AI) & Machine Learning",
      "Cloud Computing",
      "DevOps & CI/CD",
      "Microservices Architecture",
      "API Development",
      "Containerization (Docker & Kubernetes)",
      "Automation Testing",
      "Data Analytics",
      "IoT Integration",
    ],
  },

  outro: "These technologies accelerate development, improve scalability, strengthen security, and enable continuous innovation.",
},

{
  q: "Can Product Engineering help modernize existing software products?",

  a: [
    "Product Engineering Services modernize legacy applications through cloud migration, improved security, AI, automation, modern APIs, and enhanced performance while reducing technical debt.",
  ],
},

{
  q: "Why should businesses invest in Product Design and Development?",

  a: [
    "Product Design and Development creates customer-focused solutions, improves user experience, accelerates innovation, reduces risks, speeds time-to-market, and supports long-term growth.",
  ],
},
  
];

const assurances = [
  "Strict non-disclosure agreement (NDA) signed prior to engagement",
  "No platform vendor lock-in; open standard cloud & microservice frameworks",
  "Guaranteed enterprise security standards & continuous quality validation",
];

function ArrowSvg() {
  return (
    <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProductEngineeringPage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">HOME</Link>
                <span aria-hidden="true">/</span>
                <span className={styles.breadcrumbCurrent} aria-current="page">
                  PRODUCT ENGINEERING SERVICES
                </span>
              </nav>
              <h1 className={styles.heroTitle}>
                Product
                <br />
                <span className={styles.gradText}>Engineering&nbsp;Services</span>
              </h1>
              <p className={styles.heroCopy}>
                Transform ideas into scalable digital products using AI, cloud, automation, and agile engineering to
                accelerate innovation and business growth.
              </p>
              <div className={styles.heroActions}>
                <a href="#contact" className="btn btn-primary">
                  Talk to an Expert
                  <ArrowSvg />
                </a>
                <a href="#services" className={styles.ghostBtn}>
                  See capabilities
                </a>
              </div>
            </div>

            <div className={styles.heroArt}>
              <img
                src={asset("/images/prodengineering.png")}
                alt="Product engineer building a digital product at a laptop"
                width={1200}
                height={900}
                fetchPriority="high"
              />
              <span className={`${styles.pill} ${styles.pillTop}`}>
                <span className={`${styles.dot} ${styles.dotPurple}`} />
                <span>
                  <small>PIPELINE UPTIME</small>
                  <b>99.98% Active SLA</b>
                </span>
              </span>
              <span className={`${styles.pill} ${styles.pillBottom}`}>
                <span className={`${styles.dot} ${styles.dotGreen}`} />
                <span>
                  <small>MICROSERVICES</small>
                  <b>Zero-Downtime Deployment</b>
                </span>
              </span>
            </div>
          </div>

          <dl className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.num}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Intro ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`}>
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.suiteCard}>
            <div className={styles.suiteHead}>
              <span className={styles.mono}>ARCH: ATLANTECH.CLOUD/SUITE</span>
              <span className={styles.liveBadge}>ACTIVE NODES</span>
            </div>

            <div className={styles.velocity}>
              <span className={styles.velocityLabel}>
                Sprint Velocity <b>+28%</b>
              </span>
              <span className={styles.velocityTrack}>
                <span style={{ width: "80%" }} />
              </span>
            </div>

            <div className={styles.miniGrid}>
              <div className={styles.miniTile}>
                <small>MICROSERVICES</small>
                <strong>48 Active</strong>
                <span className={styles.miniGreen}>99.99% Uptime</span>
              </div>
              <div className={styles.miniTile}>
                <small>CI/CD TESTS</small>
                <strong>1,420 Pass</strong>
                <span className={styles.miniPurple}>Auto-Triggered</span>
              </div>
            </div>

            <div className={styles.rollout}>
              <span className={styles.rolloutIcon}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
              </span>
              <span className={styles.rolloutText}>
                <b>Zero-Downtime Deployment</b>
                <span>Autonomous Rollout Engine</span>
              </span>
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>

            <div className={styles.suiteFoot}>
              <div>
                <b>Enterprise SLA Guaranteed</b>
                <span>Zero Cold Start</span>
              </div>
              <p>
                Dynamic scaling microservices that natively interface with cloud environments, container fabrics, and
                custom RESTful stacks.
              </p>
            </div>
          </div>

          <div>
            <h2 className={styles.title}>
              Engineering Innovative Products That Drive <span className={styles.gradText}>Business Growth</span>
            </h2>
            <p className={`${styles.body} ${styles.lead}`}>
              At Atlantech Global, we deliver strategic product engineering that transforms ideas into scalable,
              secure, high-performance digital products built for long-term growth.
            </p>
            <ul className={styles.benefits}>
              {benefits.map((b) => (
                <li key={b}>
                  <span className={styles.benefitCheck}>
                    <CheckIcon />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <p className={styles.body}>
              As a <mark className={styles.mark}>Product Engineering Company</mark>, Atlantech Global uses AI, cloud,
              DevOps, and automation to build innovative solutions, accelerate growth, and reduce risks.
            </p>
            <a href="#contact" className={`btn btn-primary ${styles.introCta}`}>
              Book a Product Consultation
              <ArrowSvg />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- End-to-end services ---------- */}
      <section className={styles.section} id="services">
        <div className="container">
          <div className={`${styles.head} ${styles.headNarrow}`}>
            <h2 className={styles.title}>
              End-to-End <span className={styles.gradText}>Product Engineering Services</span> for Every Stage of
              Innovation
            </h2>
          </div>

          <div className={styles.svcGrid}>
            <ol className={styles.svcList}>
              {services.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.svcNum}>{pad(i + 1)}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                <a href={s.href} className={styles.svcChevron} aria-label={`Explore ${s.title}`}><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg></a>
                  
                </li>
              ))}
            </ol>

            <div className={styles.bpCard}>
              <div className={styles.bpHead}>
                <span>ARCHITECTURE BLUEPRINT</span>
                <span className={styles.bpBadge}>ACTIVE NODE</span>
              </div>
              <div className={styles.bpStack}>
                {blueprint.map((n) => (
                  <div className={`${styles.bpNode}${n.active ? ` ${styles.bpActive}` : ""}`} key={n.code}>
                    <span className={styles.bpCode}>{n.code}</span>
                    <span className={styles.bpText}>
                      <b>{n.title}</b>
                      <span>{n.detail}</span>
                    </span>
                    {n.tag ? (
                      <span className={styles.bpTag}>{n.tag}</span>
                    ) : (
                      <span className={`${styles.dot} ${styles.dotGreen}`} />
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.bpFoot}>
                <span>Security &amp; Compliance Built-in</span>
                <b>SOC2 &amp; ISO 27001 Ready</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Digital solutions ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`}>
        <div className="container">
          <div className={styles.head}>
            <h2 className={styles.title}>
              Our Digital <span className={styles.gradText}>Product Engineering Solutions</span>
            </h2>
            <p className={styles.body}>
              Intelligent platforms and QA frameworks engineered to elevate software quality and reduce maintenance
              overhead.
            </p>
          </div>
          <ul className={styles.solGrid}>
            {solutions.map((s) => (
              <li className={styles.solCard} key={s.title}>
                <span className={`${styles.solIcon} ${styles[`icon_${s.tone}`]}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {s.icon}
                  </svg>
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className={styles.solMetric}>
                  <span>{s.label}</span>
                  <b className={styles[`val_${s.tone}`]}>{s.value}</b>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.center}>
            <a href="#contact" className="btn btn-primary btn-small">
              Build Smarter Products
              <ArrowSvg />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Lifecycle ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.head}>
            <h2 className={styles.title}>
              AI-Powered <span className={styles.gradText}>Product Development Lifecycle</span>
            </h2>
            <p className={styles.body}>
              Accelerate product development with AI, automation, and agile engineering to build scalable, secure,
              high-performance software faster.
            </p>
          </div>
          <ol className={styles.phases}>
            {lifecycle.map((p, i) => (
              <li key={p.title}>
                <span className={styles.phaseIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {p.icon}
                  </svg>
                </span>
                <span className={styles.phaseLabel}>PHASE {pad(i + 1)}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ol>
          <div className={styles.center}>
            <a href="#contact" className="btn btn-primary btn-small">
              Future-Proof Your Product
              <ArrowSvg />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`${styles.section} ${styles.faqSection}`} id="faq">
        <div className="container">
          <div className={`${styles.head} ${styles.headNarrow}`}>
            <h2 className={styles.title}>
              Frequently Asked Questions About <span className={styles.gradText}>Product Engineering</span>
            </h2>
          </div>
          <ProductFaq items={faqs} />
        </div>
      </section>

      {/* ---------- CTA banner ---------- */}
      <section className={styles.bannerWrap}>
        <div className="container">
          <div className={styles.banner}>
            <h2>Want to Future-Proof Your Product Engineering Transformation?</h2>
            <p>
              Transform ideas into scalable digital products with AI-driven innovation, cloud-native development, and
              agile delivery. Our Product Engineering Services accelerate growth, reduce risks, and deliver
              measurable business value.
            </p>
            <a href="#contact" className="btn btn-primary btn-small">
              Modernize Products
              <ArrowSvg />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className={`${styles.section} ${styles.tinted}`} id="contact">
        <div className="container">
          <div className={styles.contactCard}>
            <div className={styles.contactLeft}>
              <h2 className={styles.title}>
                Let&apos;s Build Scalable
                <br />
                Digital Products Together
              </h2>
              <p>
                Discover how modern product engineering, cloud-native architectures, and automated QA can accelerate
                innovation across your organization.
              </p>
              <div className={styles.auditBox}>
                <span className={styles.auditCheck}>
                  <CheckIcon />
                </span>
                <div>
                  <p className={styles.auditTitle}>Complimentary Product Architecture &amp; Cloud Readiness Audit</p>
                  <p>
                    A 45-minute technical review of your software architecture, microservices readiness, and testing
                    pipeline conducted by our principal product architects.
                  </p>
                </div>
              </div>
              <ul className={styles.assurances}>
                {assurances.map((a) => (
                  <li key={a}>
                    <CheckIcon /> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.formWrap}>
              <ContactPanel source="Product Engineering" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
