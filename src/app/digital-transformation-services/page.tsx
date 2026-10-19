import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { CheckIcon } from "@/lib/icons";
import DigitalFaq, { type DigitalFaqItem } from "./DigitalFaq";
import ServiceExplorer, { type TransformationService } from "./ServiceExplorer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Digital Transformation Services",
  description:
    "Accelerating enterprise success through digital transformation: consulting, business process transformation, application modernization, enterprise applications and ERP, and digital experience from Atlantech Global.",
  alternates: { canonical: "/digital-transformation/" },
};

const stats = [
  { num: "40+", label: "Transformation Programmes", sub: "Delivered globally" },
  { num: "3×", label: "Faster Releases", sub: "Agile CI/CD acceleration" },
  { num: "100%", label: "Zero Downtime", sub: "Continuous operational SLA" },
  { num: "18+ yr", label: "Enterprise Delivery", sub: "Proven Fortune-class expertise" },
];

const highlights = [
  "Modular microservices & decoupled architectures",
  "Enterprise AI models & real-time predictive analytics",
  "Hybrid & multi-cloud governance frameworks",
];

const tags = ["Cloud Optimization", "AI Automation", "Modern Engineering", "Enterprise Security"];

const services: TransformationService[] = [
  {
    name: "Digital Transformation Consulting",
    heading: "Digital Transformation Consulting",
    body: "Our Digital Transformation Consulting Services align technology with business goals, enabling AI, cloud, automation, modernization, efficiency, and sustainable growth.",
    pillars: ["Agile Delivery", "Scalable Cloud", "Continuous ROI"],
  },
  {
    name: "Business Process Transformation",
    heading: "Business Process Transformation",
    body: "Business Transformation Consulting streamlines operations with AI, automation, and digital solutions, improving productivity, collaboration, agility, innovation, and sustainable growth..",
    pillars: ["Process Automation", "Workflow Orchestration", "Measurable Savings"],
  },
  {
    name: "Application Modernization",
    heading: "Application Modernization",
    body: "Modernize legacy applications into secure, scalable cloud-native platforms, reducing technical debt, enhancing performance, accelerating deployment, and improving user experience. .",
    pillars: ["Cloud-Native Design", "Microservices & APIs", "Zero-Downtime Migration"],
  },
  {
    name: "Enterprise Applications & ERP",
    heading: "Enterprise Applications & ERP",
    body: "Enterprise application and ERP solutions streamline operations, improve visibility, automate workflows, enable data-driven decisions, enhance productivity, and support scalable growth. ",
    pillars: ["ERP Implementation", "System Integration", "Unified Data"],
  },
  {
    name: "Digital Experience",
    heading: "Digital Experience",
    body: "Create intuitive websites, portals, mobile apps, and digital platforms using modern UX and technology to boost engagement, satisfaction, and loyalty.                         .",
    pillars: ["UX & Design", "Omnichannel Delivery", "Experience Analytics"],
  },
];

const technologies = [
  {
    title: "Cloud Computing",
    desc: "Accelerate digital transformation with secure, scalable cloud infrastructure, cloud migration, and cloud-native applications that improve agility, performance, and business continuity.",
    icon: <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 .5 9.5z" />,
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    desc: "Unlock intelligent automation with AI and Machine Learning to streamline workflows, enhance decision-making, personalize customer experiences, and improve operational efficiency.",
    icon: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M10 10h4v4h-4z" />
      </>
    ),
  },
  {
    title: "Data Analytics & Business Intelligence",
    desc: "Transform enterprise data into actionable insights through advanced analytics, real-time reporting, predictive intelligence, and data-driven strategies that fuel business growth.",
    icon: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
  },
  {
    title: "Internet of Things (IoT)",
    desc: "Connect devices, assets, and operations with IoT solutions that enable real-time monitoring, predictive maintenance, and smarter business decisions.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
      </>
    ),
  },
  {
    title: "Robotic Process Automation (RPA)",
    desc: "Automate repetitive business processes with intelligent RPA solutions that reduce manual effort, improve accuracy, and increase operational productivity.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1" />
      </>
    ),
  },
  {
    title: "Cybersecurity",
    desc: "Protect your digital ecosystem with enterprise-grade cybersecurity, identity management, threat detection, compliance, and proactive risk mitigation.",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "DevOps & Automation",
    desc: "Accelerate software delivery through DevOps practices, CI/CD pipelines, infrastructure automation, and continuous monitoring for faster, reliable deployments.",
    icon: (
      <>
        <path d="M20 12a8 8 0 0 0-14-5.3L4 9M4 4v5h5" />
        <path d="M4 12a8 8 0 0 0 14 5.3L20 15M20 20v-5h-5" />
      </>
    ),
  },
  {
    title: "API & System Integration",
    desc: "Integrate enterprise applications, cloud platforms, and third-party systems to create connected digital ecosystems that improve collaboration and business efficiency.",
    icon: (
      <>
        <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0z" />
        <path d="M12 17v4" />
      </>
    ),
  },
];

const approach = [
  {
    title: "Strategy",
    desc: "Develop a clear digital transformation roadmap aligned with your business objectives, technology landscape, and long-term growth vision.",
  },
  {
    title: "Modernization",
    desc: "Transform legacy applications, infrastructure, and business processes into agile, cloud-ready, and scalable digital ecosystems.",
  },
  {
    title: "Integration",
    desc: "Connect enterprise applications, data, and workflows to improve collaboration, streamline operations, and enable real-time decision-making.",
  },
  {
    title: "Optimization",
    desc: "Continuously enhance performance, security, and customer experiences through AI, automation, analytics, and ongoing innovation.",
  },
];

const reasons = [
  {
    title: "Accelerate Business Innovation",
    desc: "Deploy forward-looking digital frameworks and AI workflows that turn ideas into production capabilities 3× faster.",
    label: "Target Velocity",
    value: "+65% Accelerated Feature Velocity",
    icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  },
  {
    title: "Optimize Operational Efficiency",
    desc: "Eliminate manual friction points and redundant processes with automated enterprise orchestration and cloud economics.",
    label: "Operational Savings",
    value: "Up to 40% Overhead Reduction",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 13l3 3 5-6" />
      </>
    ),
  },
  {
    title: "Enhance Customer Experiences",
    desc: "Deliver frictionless, personalized multi-channel user experiences with micro-services reliability and instant response times.",
    label: "User Satisfaction",
    value: "95%+ CSAT Retention",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 14a4.2 4.2 0 0 0 7 0M9 9.5h.01M15 9.5h.01" />
      </>
    ),
  },
  {
    title: "Reduce Time-to-Market",
    desc: "Shorten deployment cycles from months to days via continuous integration pipelines and pre-engineered cloud building blocks.",
    label: "Release Velocity",
    value: "4× Deployment Frequency",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 12V7M12 12l4 2" />
      </>
    ),
  },
];

const strategy = [
  "Analyzes enterprise systems to identify transformation opportunities",
  "Creates customized Digital Transformation strategies",
  "Modernizes legacy infrastructure with future-ready technologies",
  "Accelerates cloud, AI, and automation adoption",
  "Supports organizational change and technology adoption",
  "Delivers measurable business outcomes through continuous optimization",
];

const faqs: DigitalFaqItem[] = [
  {
  q: "What are Digital Transformation Services?",

  a: "Digital Transformation Services help organizations modernize business operations using technologies like AI, cloud computing, automation, data analytics, and enterprise software. These services improve operational efficiency, customer experiences, scalability, and decision-making while enabling businesses to adapt quickly to changing market demands and achieve long-term digital growth.",

},

{

  q: "Why is digital transformation important for businesses?",

  a: "Digital transformation is important because it helps businesses improve productivity, reduce operational costs, automate manual processes, enhance customer experiences, and make data-driven decisions. By adopting modern technologies, organizations become more agile, competitive, and better prepared for future market changes and evolving customer expectations.",

},

{

  q: "What technologies are used in digital transformation?",

  a: "Digital transformation typically includes Artificial Intelligence (AI), Machine Learning (ML), cloud computing, automation, IoT, data analytics, cybersecurity, enterprise applications, APIs, and modern software platforms. These technologies work together to streamline operations, optimize workflows, improve collaboration, and accelerate business innovation.",

},

{

  q: "How do Digital Transformation Services improve business performance?",

  a: "Digital Transformation Services improve business performance by automating repetitive tasks, modernizing legacy systems, integrating enterprise applications, and providing real-time business insights. These improvements increase operational efficiency, reduce costs, enhance employee productivity, and enable organizations to deliver better customer experiences while supporting sustainable business growth.",

},

{

  q: "How do I choose the right Digital Transformation partner?",

  a: "Choose a Digital Transformation partner with expertise in consulting, cloud, AI, application modernization, enterprise software, and managed services. The right partner should understand your industry, provide scalable technology solutions, follow proven implementation methodologies, and offer continuous support to ensure measurable business outcomes and long-term success.",

},

];

const pad = (n: number) => String(n).padStart(2, "0");

export default function DigitalTransformationPage() {
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
                  DIGITAL TRANSFORMATION SERVICES
                </span>
              </nav>
              <h1 className={styles.heroTitle}>
                Digital
                <br />
                Transformation
                <br />
                <span className={styles.gradText}>Services</span>
              </h1>
              <p className={styles.heroCopy}>Accelerating enterprise success through digital transformation innovation.</p>
              <Link href="/contact" className={`btn btn-primary ${styles.heroBtn}`}>
                Unlock Digital Growth
                <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className={styles.heroArt}>
              <img
                src={asset("/images/digital-transformation.jpg")}
                alt="Business leader walking through a modern glass enterprise lobby lit in purple"
                width={1200}
                height={900}
                fetchPriority="high"
              />
              <span className={`${styles.chip} ${styles.chipTop}`}>
                <span className={styles.chipDot} />
                Enterprise-Grade Architecture
              </span>
              <span className={`${styles.chip} ${styles.chipDark}`}>
                <CheckIcon />
                Zero-Downtime Migration
              </span>
            </div>
          </div>

          <dl className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.num}</dt>
                <dd>
                  <b>{s.label}</b>
                  <span>{s.sub}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Intro ---------- */}
      <section className={`${styles.section} ${styles.ruled}`}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <h2 className={styles.introTitle}>Driving Digital Transformation for Future-Ready Enterprises</h2>
            <ul className={styles.highlights}>
              {highlights.map((h) => (
                <li key={h}>
                  <span className={styles.highlightCheck}>
                    <CheckIcon />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.introCard}>
            <p>
              Digital transformation goes beyond adopting new technologies—it reimagines how businesses operate,
              innovate, and deliver value. Atlantech Global helps organizations modernize legacy systems, optimize
              processes, and build intelligent digital ecosystems using AI, cloud, automation, data analytics, and
              enterprise technologies. Our tailored strategies combine technology consulting, digital engineering, and
              agile execution to improve efficiency, enhance customer experiences, accelerate innovation, and build
              resilient, future-ready enterprises.
            </p>
            <ul className={styles.tagRow}>
              {tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Services we offer ---------- */}
      <section className={`${styles.section} ${styles.tinted}`}>
        <div className="container">
          <div className={styles.head}>
            <h2 className={styles.title}>Digital Transformation Services We Offer</h2>
            <p className={styles.body}>
              Accelerate business growth through intelligent digital transformation and enterprise innovation.
            </p>
          </div>
          <ServiceExplorer items={services} />
        </div>
      </section>

      {/* ---------- Technologies ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.head}>
            <h2 className={styles.title}>Technologies Powering Digital Transformation</h2>
            <p className={styles.body}>
              Leverage next-generation technologies to modernize operations, accelerate innovation, and build
              intelligent, future-ready enterprises.
            </p>
          </div>
          <ul className={styles.techGrid}>
            {technologies.map((t) => (
              <li className={styles.techCard} key={t.title}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {t.icon}
                  </svg>
                </span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Approach ---------- */}
      <section className={`${styles.section} ${styles.tinted}`}>
        <div className="container">
          <div className={styles.head}>
            <h2 className={styles.title}>Our Digital Transformation Solutions Approach</h2>
            <p className={styles.body}>
              From assessment to execution, our digital transformation approach delivers agility, efficiency,
              innovation, and measurable business value.
            </p>
          </div>
          <ol className={styles.approachGrid}>
            {approach.map((a, i) => (
              <li className={styles.approachCard} key={a.title}>
                <span className={styles.numCircle}>{pad(i + 1)}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Why choose us ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.head}>
            <h2 className={styles.title}>Why Choose Atlantech Global for Digital Transformation?</h2>
            <p className={styles.body}>
              Digital Transformation Solutions combine AI, cloud, and modernization to create smarter, faster, and
              resilient businesses. At Atlantech Global, we streamline operations, enhance customer experiences, and
              improve efficiency.
            </p>
          </div>
          <ul className={styles.reasonGrid}>
            {reasons.map((r) => (
              <li className={styles.reasonCard} key={r.title}>
                <div className={styles.reasonTop}>
                  <span className={styles.reasonIcon}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {r.icon}
                    </svg>
                  </span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                  </div>
                </div>
                <div className={styles.reasonMetric}>
                  <span>{r.label}</span>
                  <b>{r.value}</b>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Strategy timeline ---------- */}
      <section className={`${styles.section} ${styles.tinted}`}>
        <div className="container">
          <div className={`${styles.head} ${styles.headNarrow}`}>
            <h2 className={styles.title}>Digital Transformation Strategy That Delivers Measurable Results</h2>
            <p className={styles.body}>
              At Atlantech Global, we create strategic digital transformation roadmaps using AI, cloud, automation,
              and data to drive innovation and sustainable growth.
            </p>
          </div>
          <ol className={styles.timeline}>
            {strategy.map((s, i) => (
              <li key={s}>
                <span className={styles.timelineNum}>{pad(i + 1)}</span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={styles.section} id="faq">
        <div className="container">
          <div className={`${styles.head} ${styles.headNarrow}`}>
            <h2 className={styles.title}>Frequently Asked Questions About Digital Transformation</h2>
          </div>
          <DigitalFaq items={faqs} />
        </div>
      </section>
    </div>
  );
}
