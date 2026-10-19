import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { ArrowIcon, CheckIcon } from "@/lib/icons";
import ContactPanel from "./ContactPanel";
import ServiceFaq, { type ServiceFaqItem } from "./ServiceFaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Managed IT Services",
  description:
    "Simplify IT operations with intelligent managed services: 24/7 proactive monitoring, cloud management, cybersecurity, end-user support and maintenance from Atlantech Global.",
  alternates: { canonical: "/managed-services/" },
};

const stats = [
  { num: "24/7", label: "Monitoring Coverage" },
  { num: "15 min", label: "P1 Response Time" },
  { num: "99.95%", label: "Uptime Delivered" },
  { num: "120+", label: "Engineers on Call" },
];

const capabilities = [
  { icon: "/images/tis.svg", title: "Tailored Infrastructure Solutions" },
  { icon: "/images/ife.svg", title: "Industry-Focused Expertise" },
  { icon: "/images/rsd.svg", title: "Reliable Service Delivery" },
  { icon: "/images/cio.svg", title: "Continuous Infrastructure Optimization" },
  { icon: "/images/frs.svg", title: "Flexible Resource Scaling" },
  { icon: "/images/ioi.svg", title: "Intelligent Operations & Insights" },
];

// `pos` places each card and its icon around the hub diagram on desktop (see .l1 … .r3 in the CSS).
const hubServices = [
  {
    pos: "l1",
    title: "Infrastructure Services",
    items: ["24/7 Infrastructure monitoring & triage", "Server, storage, and network admin", "Performance & capacity planning", "Preventive system health checks"],
    icon: (
      <>
        <rect x="4" y="4" width="16" height="6" rx="1.5" />
        <rect x="4" y="14" width="16" height="6" rx="1.5" />
      </>
    ),
  },
  {
    pos: "l2",
    title: "AWS Managed Services",
    items: ["AWS cloud monitoring & oversight", "Cloud cost & resource optimization", "Disaster recovery & continuity", "Security, compliance & workload health"],
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
  {
    pos: "l3",
    title: "Application Services",
    items: ["Proactive app monitoring & SLA support", "Performance tuning & query resolution", "Version upgrades & automated patch ops", "Continuous lifecycle management"],
    icon: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" />,
  },
  {
    pos: "r1",
    title: "Database Services",
    items: ["Database admin & health telemetry", "Backup, recovery & disaster preparedness", "Performance tuning & index optimization", "Security, encryption & integrity governance"],
    icon: (
      <>
        <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
        <path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
      </>
    ),
  },
  {
    pos: "r2",
    title: "Enterprise Services",
    items: ["End-to-end IT operations management", "24/7 service desk & user support", "IT governance & operational reporting", "Workflow automation to reduce downtime"],
    icon: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M10 13l3 3M13 13l-3 3" />
      </>
    ),
  },
  {
    pos: "r3",
    title: "Managed Cloud Services",
    items: ["Multi-cloud and hybrid orchestration", "Cloud monitoring & stack optimization", "Identity, security, and governance", "Dynamic scaling & FinOps efficiency"],
    icon: <path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9.5a4.2 4.2 0 0 1-.5 8.5z" />,
  },
] as const;

const expertise = [
  {
    title: "Cybersecurity",
    desc: "Protect your business with proactive security strategies that safeguard infrastructure, applications, and critical business data.",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Technology Management",
    desc: "Optimize your IT ecosystem with expert management, automation, and continuous infrastructure improvement.",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" />
      </>
    ),
  },
  {
    title: "Risk & Compliance",
    desc: "Minimize operational risks while ensuring compliance with industry regulations and security standards.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M9 15l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Business Operations",
    desc: "Improve operational efficiency with technology-driven services that streamline day-to-day IT management.",
    icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  },
  {
    title: "Financial Optimization",
    desc: "Control IT spending while maximizing infrastructure performance and long-term business value.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9.5c-.4-1-1.6-1.7-3-1.7-1.8 0-3 .9-3 2.1 0 2.8 6 1.4 6 4.2 0 1.2-1.3 2.1-3 2.1-1.5 0-2.7-.7-3.1-1.8M12 6.5v11" />
      </>
    ),
  },
];

const steps = [
  { title: "Assess Existing IT Environment", desc: "We evaluate infrastructure, cloud resources, applications, security posture, and operational processes." },
  { title: "Create a Managed Services Strategy", desc: "Develop a roadmap aligned with business priorities and technology goals." },
  { title: "Transition & Knowledge Transfer", desc: "Migrate operations without disrupting business activities." },
  { title: "Monitor & Optimize", desc: "Deliver continuous monitoring, automation, reporting, and performance improvements." },
];

const benefits = [
  { title: "Increased Uptime", desc: "Reduce outages through proactive monitoring and preventive maintenance." },
  { title: "Faster Issue Resolution", desc: "Resolve incidents quickly using experienced support engineers." },
  { title: "Improved Security", desc: "Protect systems with continuous monitoring and compliance best practices." },
  { title: "Predictable IT Costs", desc: "Reduce unexpected operational expenses with fixed service models." },
  { title: "Better User Experience", desc: "Provide faster support and higher service availability." },
  { title: "Business Scalability", desc: "Expand IT resources as your organization grows." },
];

const challenges = [
  {
    challenge: "Frequent Unexpected Downtime",
    solution: "Proactive Monitoring",
    desc: "Continuous telemetry flags micro-anomalies before they escalate into service-impacting outages.",
  },
  {
    challenge: "Uncontrolled Rising IT Costs",
    solution: "Resource Optimization",
    desc: "Automated right-sizing and continuous FinOps governance prevent wasteful over-provisioning.",
  },
  {
    challenge: "Unpatched Security & Compliance Risks",
    solution: "Continuous Security Management",
    desc: "Zero-Trust controls, automated patching, and real-time vulnerability scanning with audit trails.",
  },
  {
    challenge: "Overburdened Internal Engineering Squads",
    solution: "Dedicated Managed Squads",
    desc: "Elastic squads of L1–L3 certified engineers acting as an always-on extension of your team.",
  },
  {
    challenge: "Slow Incident Triage & Escalation Delays",
    solution: "24/7 ITIL Service Desk",
    desc: "Round-the-clock rapid response runbooks achieving verifiable 15-minute P1 triage.",
  },
  {
    challenge: "Sprawling Multi-Cloud Complexity",
    solution: "Centralized Cloud Plane",
    desc: "Single-pane-of-glass governance across hybrid, AWS, Azure, and private cloud fabrics.",
  },
];

const faqs: ServiceFaqItem[] = [
 {
  q: "What are Managed IT Services?",

  a: "Managed IT Services outsource IT monitoring, management, maintenance, and support to improve performance, security, uptime, and cost efficiency.",
},

{
  q: "How do Managed IT Services improve business security?",

  a: "Managed IT Services improve security through continuous infrastructure monitoring, threat detection, vulnerability management, patch updates, identity and access management, data backup, disaster recovery planning, and compliance support.",
},

{
  q: "How do Managed IT Services reduce IT costs?",

  a: "Managed IT Services reduce downtime, automate maintenance, optimize resources, and provide predictable costs while minimizing in-house IT staffing needs.",
},

{
  q: "Can Managed IT Services support cloud infrastructure?",

  a: "Yes. Managed IT Services support public, private, hybrid, and multi-cloud environments through monitoring, security, optimization, backups, and disaster recovery.",
},
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function ManagedServicesPage() {
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
                  MANAGED IT SERVICES
                </span>
              </nav>
              <h1 className={styles.heroTitle}>
                Simplify IT Operations with <span className={styles.gradText}>Intelligent Managed Services</span>
              </h1>
              <p className={styles.heroCopy}>
                Focus on growing your business while we manage your IT infrastructure with proactive monitoring,
                cloud management, cybersecurity, end-user support, and 24/7 maintenance.
              </p>
              <a href="#contact" className="btn btn-primary">
                Talk to Our IT Experts
              </a>
            </div>

            <div className={styles.heroArt}>
              <img
                src={asset("/images/live-operations.jpg")}
                alt="Isometric illustration of a 24/7 network operations centre managing cloud servers"
                width={512}
                height={286}
                fetchPriority="high"
              />
              <span className={`${styles.pill} ${styles.pillLive}`}>
                <span className={styles.liveDot} />
                LIVE OPERATIONS: 24/7 ACTIVE NOC
              </span>
              <span className={`${styles.pill} ${styles.pillSla}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
                INCIDENT SLA: 15 MIN P1 RESPONSE
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

      {/* ---------- Capabilities ---------- */}
      <section className={`${styles.section} ${styles.ruled}`}>
        <div className="container">
          <div className={styles.head}>
            <h2>
              Infrastructure Managed Services That <span className={styles.gradText}>Drive Business Performance</span>
            </h2>
            <p>
              Streamline IT operations with proactive managed services that improve resilience, availability,
              automation, and performance while reducing complexity.
            </p>
          </div>
          <ul className={styles.capGrid}>
            {capabilities.map((c) => (
              <li className={styles.capCard} key={c.title}>
                <span className={styles.iconBox}>
                  <img src={asset(c.icon)} alt="" width={20} height={20} />
                </span>
                {c.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Hub diagram ---------- */}
      <section className={`${styles.section} ${styles.tinted}`}>
        <div className="container">
          <div className={styles.head}>
            <h2>
              Comprehensive Managed Services for <span className={styles.gradText}>Modern Enterprises</span>
            </h2>
          </div>

          <div className={styles.hub}>
            <svg className={styles.hubLines} viewBox="0 0 968 570" preserveAspectRatio="none" aria-hidden="true">
              <circle cx="484" cy="285" r="282" className={styles.hubRingFaint} />
              <circle cx="484" cy="285" r="256" />
              <path d="M337 72L484 285M297 285H484M337 498L484 285M631 72L484 285M671 285H484M631 498L484 285" />
            </svg>

            <div className={styles.hubCenter}>
              <img src={asset("/images/attm.webp")} alt="Atlantech Global" width={170} height={68} />
            </div>

            {hubServices.map((s, i) => (
              <div className={`${styles.hubItem} ${styles[s.pos]}`} key={s.title}>
                <span className={styles.hubIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {s.icon}
                  </svg>
                </span>
                <div className={styles.hubCard}>
                  <h3>
                    <span className={styles.hubNum}>{pad(i + 1)}</span>
                    {s.title}
                  </h3>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Expertise ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.splitHead}>
            <div className={`${styles.head} ${styles.headLeft}`}>
              <h2>
                Expertise That Powers <span className={styles.gradText}>Reliable IT Managed Services</span>
              </h2>
              <p>
                IT Managed Services deliver proactive support, secure infrastructure, cybersecurity, compliance, and
                optimized operations to reduce risks, improve efficiency, and drive growth.
              </p>
            </div>
            <a href="#contact" className={styles.outlineBtn}>
              Schedule an IT Strategy Review <ArrowIcon />
            </a>
          </div>
          <ul className={styles.expGrid}>
            {expertise.map((e) => (
              <li className={styles.expCard} key={e.title}>
                <span className={styles.iconBox}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {e.icon}
                  </svg>
                </span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Dark CTA ---------- */}
      <section className={styles.darkCta}>
        <div className="container">
          <h2>Ready to Reduce IT Complexity and Focus on Business Growth?</h2>
          <a href="#contact" className="btn btn-primary btn-small">
            Speak with an Analytics Consultant
            <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>

      {/* ---------- Delivery approach ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.head}>
            <h2>
              Our Managed <span className={styles.gradText}>Service Delivery Approach</span>
            </h2>
            <p>
              Our service delivery model ensures proactive management, continuous monitoring, rapid issue resolution,
              and ongoing optimization to maximize business continuity.
            </p>
          </div>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li className={styles.stepCard} key={s.title}>
                <span className={styles.stepNum}>{pad(i + 1)}</span>
                <span className={styles.stepLabel}>STEP {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Benefits ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`}>
        <div className="container">
          <div className={styles.head}>
            <h2>
              Benefits of Choosing the <span className={styles.gradText}>Right Managed Services Provider</span>
            </h2>
            <p>
              Our managed services model focuses on delivering measurable business value through proactive operations,
              automation, and enterprise-grade support.
            </p>
          </div>
          <ul className={styles.benefitGrid}>
            {benefits.map((b, i) => (
              <li className={styles.benefitCard} key={b.title}>
                <span className={styles.numChip}>{pad(i + 1)}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Challenges ---------- */}
      <section className={`${styles.section} ${styles.ruled}`}>
        <div className="container">
          <div className={styles.head}>
            <h2>
              Overcoming Critical IT Challenges Through <span className={styles.gradText}>Proactive Management</span>
            </h2>
            <p>
              Organizations often face growing IT complexity, security concerns, and resource shortages. Our managed
              services address these operational challenges with proactive support and automation.
            </p>
          </div>
          <ul className={styles.csList}>
            {challenges.map((c) => (
              <li className={styles.csRow} key={c.challenge}>
                <div className={styles.csLeft}>
                  <span className={styles.redDot} />
                  <div>
                    <span className={styles.csLabel}>CHALLENGE</span>
                    <h3>{c.challenge}</h3>
                  </div>
                </div>
                <div className={styles.csRight}>
                  <span className={styles.greenDot} />
                  <div>
                    <span className={styles.solLabel}>ATLANTECH SOLUTION: {c.solution}</span>
                    <p>{c.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`} id="contact">
        <div className="container">
          <div className={styles.contactCard}>
            <div className={styles.contactLeft}>
              <h2>
                Operationalize
                <br />
                <span className={styles.gradText}>Your Excellence</span>
              </h2>
              <p>Let&apos;s build a managed services plan tailored to your enterprise reliability and scalability needs.</p>
              <div className={styles.auditBox}>
                <p className={styles.auditHead}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l2.5 2.5L16 9" />
                  </svg>
                  Complimentary operational audit
                </p>
                <p>
                  Book a call today and receive a free review of your operational posture, SLA benchmarks, and cost
                  optimization levers.
                </p>
              </div>
              <ul className={styles.checkList}>
                <li>
                  <CheckIcon /> Average response time: under 2 hours
                </li>
                <li>
                  <CheckIcon /> Strict Non-Disclosure Agreement (NDA) on request
                </li>
              </ul>
            </div>
            <ContactPanel source="Managed Services" />
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={styles.section} id="faq">
        <div className="container">
          <div className={styles.head}>
            <h2>
              Frequently Asked Questions About <span className={styles.gradText}>Managed Services</span>
            </h2>
          </div>
          <ServiceFaq items={faqs} />
        </div>
      </section>
    </div>
  );
}
