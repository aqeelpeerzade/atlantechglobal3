import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import AiStrategyFaq, { type AiStrategyFaqItem } from "./aistrategyfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Strategy & Engineering",
  description:
    "AI consulting services for enterprise AI strategy and engineering: use case assessment, readiness, roadmap, architecture, AI engineering, governance and delivery from Atlantech Global.",
  alternates: { canonical: "/ai-automation-services/ai-strategy-engineering/" },
};

/** Where the "AI Automation Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/ai-automation-services";
/** Hero image: public/images/ai-strategy-services.jpg */
const HERO_IMAGE = "/images/ai-strategy-services.png";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons = {
  searchPlus: (
    <Icon>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.2-4.2M11 8.5v5M8.5 11h5" />
    </Icon>
  ),
  chartBars: (
    <Icon>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </Icon>
  ),
  trend: (
    <Icon>
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />
    </Icon>
  ),
  sliders: (
    <Icon>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M8 14v6" />
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
  hub: (
    <Icon>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="12" cy="4" r="1.6" />
      <circle cx="4.5" cy="16.5" r="1.6" />
      <circle cx="19.5" cy="16.5" r="1.6" />
      <path d="M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3" />
    </Icon>
  ),
  shieldCheck: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  ),
  smile: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14a4.2 4.2 0 0 0 7 0M9 9.5h.01M15 9.5h.01" />
    </Icon>
  ),
  bars: (
    <Icon>
      <path d="M6 20V10M12 20V4M18 20v-7" strokeWidth="3" />
    </Icon>
  ),
  book: (
    <Icon>
      <path d="M12 6c-2-1.5-5-2-8-2v13c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2zM12 6v13" />
    </Icon>
  ),
  gavel: (
    <Icon>
      <path d="M13 4l7 7M9 8l7 7M5 21h9M10.5 13.5L4 20M14 4l-4 4 7 7 4-4" />
    </Icon>
  ),
  idBadge: (
    <Icon>
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <path d="M9 6V4h6v2M8 13h3M8 16h8M14 12h2" />
    </Icon>
  ),
  bulb: (
    <Icon>
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </Icon>
  ),
  appCode: (
    <Icon>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10.5 10l-1.5 2 1.5 2M13.5 10l1.5 2-1.5 2" />
    </Icon>
  ),
  codeClip: (
    <Icon>
      <rect x="5" y="5" width="14" height="16" rx="2" />
      <path d="M9 5V3h6v2M10.5 12l-1.5 2 1.5 2M13.5 12l1.5 2-1.5 2" />
    </Icon>
  ),
  brainHead: (
    <Icon>
      <path d="M12 3a6 6 0 0 0-6 6c0 2 1 3.3 2 4.5.8 1 1 1.8 1 3V19h6v-2.5c0-1.2.2-2 1-3C17 12.3 18 11 18 9a6 6 0 0 0-6-6z" />
      <circle cx="12" cy="9" r="1.5" />
    </Icon>
  ),
  chip: (
    <Icon>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </Icon>
  ),
  moveAll: (
    <Icon>
      <path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3" />
    </Icon>
  ),
  funnel: (
    <Icon>
      <path d="M4 5h16l-6 8v6l-4-2v-4z" />
    </Icon>
  ),
  cloudCog: (
    <Icon>
      <path d="M7 18a4 4 0 0 1-.6-7.9A5.5 5.5 0 0 1 17 8.5a4.7 4.7 0 0 1 .5 9.5" />
      <circle cx="12" cy="16" r="2" />
      <path d="M12 12.5v1M12 18.5v1M8.5 16h1M14.5 16h1" />
    </Icon>
  ),
  gauge: (
    <Icon>
      <path d="M4 17a8 8 0 1 1 16 0M12 17l4-5M7 17h.01M17 17h.01" />
    </Icon>
  ),
  fork: (
    <Icon>
      <path d="M12 21v-8M12 13L6 7M12 13l6-6M6 7V3M18 7V3" />
    </Icon>
  ),
  shieldInfo: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M12 11v4M12 8.5h.01" />
    </Icon>
  ),
  lock: (
    <Icon>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2" />
    </Icon>
  ),
  evalList: (
    <Icon>
      <path d="M4 8h8M4 14h8M16 7l2 2 3-3M16 15l4 4M20 15l-4 4" />
    </Icon>
  ),
  shieldBolt: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" fill="currentColor" />
    </Icon>
  ),
  eye: (
    <Icon>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  ),
  chartUp: (
    <Icon>
      <path d="M4 20v-5M9 20v-8M14 20v-5M19 20V8M3 20h18M4 11l5-4 4 3 6-6" />
    </Icon>
  ),
  shieldLock: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <circle cx="12" cy="11" r="2" />
      <path d="M12 13v2" />
    </Icon>
  ),
  shieldPlus: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M12 9v6M9 12h6" />
    </Icon>
  ),
  shieldOutline: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    </Icon>
  ),
  rocket: (
    <Icon>
      <path d="M5 15c-1 1-1.5 3-1.5 5 2 0 4-.5 5-1.5M9 15l-3-3c1-4 4-7 9-8 4-.7 5 .3 4.5 4.5-1 5-4 8-8 9zM15 9h.01" />
    </Icon>
  ),
  checkBadge: (
    <Icon>
      <path d="M12 3l2.2 1.7 2.8-.2 1 2.6 2.4 1.5-.8 2.7.8 2.7-2.4 1.5-1 2.6-2.8-.2L12 21l-2.2-1.7-2.8.2-1-2.6-2.4-1.5.8-2.7-.8-2.7L6 7.1l1-2.6 2.8.2z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  ),
  calendar: (
    <Icon>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </Icon>
  ),
  clipCheck: (
    <Icon>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M9 12.5l2 2 4-4.5" />
    </Icon>
  ),
  dataCheck: (
    <Icon>
      <path d="M4 7h8M4 12h6M4 17h5M15 15l2 2 4-4" />
    </Icon>
  ),
  lockCheck: (
    <Icon>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3M10 16l1.5 1.5L14 15" />
    </Icon>
  ),
  arrow: (
    <Icon>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  ),
};

const solve = [
  { icon: icons.searchPlus, text: "Identify high-value AI use cases" },
  { icon: icons.chartBars, text: "Assess AI and data readiness" },
  { icon: icons.trend, text: "Define an AI adoption roadmap" },
  { icon: icons.sliders, text: "Select suitable AI technologies" },
  { icon: icons.flowchart, text: "Design scalable AI architecture" },
  { icon: icons.hub, text: "Integrate AI with existing systems" },
  { icon: icons.shieldCheck, text: "Establish responsible AI practices" },
];

const domains = [
  { icon: icons.smile, title: "Customer Experience", desc: "Intelligent assistants, recommendations and personalization" },
  { icon: icons.flowchart, title: "Operations", desc: "Workflow optimization and intelligent automation" },
  { icon: icons.bars, title: "Data & Analytics", desc: "Forecasting, prediction and decision support" },
  { icon: icons.book, title: "Enterprise Knowledge", desc: "Intelligent search and knowledge assistants" },
  { icon: icons.gavel, title: "Risk & Compliance", desc: "Pattern detection and automated analysis" },
  { icon: icons.idBadge, title: "Employee Productivity", desc: "AI copilots and task assistance" },
];

const phases = [
  { title: "Discover", desc: "Understand business objectives, processes and pain points.", tag: "STRATEGY INCEPTION" },
  { title: "Assess", desc: "Evaluate data, technology, infrastructure and AI readiness.", tag: "READINESS AUDIT" },
  { title: "Prioritize", desc: "Identify and rank potential AI use cases.", tag: "VALUE RANKING" },
  { title: "Architect", desc: "Define the technology and solution architecture.", tag: "SYSTEM TOPOLOGY" },
  { title: "Roadmap", desc: "Create a phased implementation plan.", tag: "ROLLOUT SCHEDULE" },
  { title: "Engineer", desc: "Build, integrate, test and deploy AI solutions.", tag: "PRODUCTION DEPLOY" },
];

const engineering = [
  { icon: icons.appCode, text: "AI application development" },
  { icon: icons.codeClip, text: "AI model integration" },
  { icon: icons.brainHead, text: "LLM integration" },
  { icon: icons.chip, text: "Machine learning systems" },
  { icon: icons.moveAll, text: "AI APIs" },
  { icon: icons.funnel, text: "Data pipelines" },
  { icon: icons.cloudCog, text: "Cloud AI architecture" },
  { icon: icons.gauge, text: "AI monitoring and optimization" },
];

const governance = [
  { icon: icons.shieldInfo, title: "Data privacy", desc: "Confidential data protections" },
  { icon: icons.lock, title: "Access control", desc: "Role-based permission matrix" },
  { icon: icons.evalList, title: "Model evaluation", desc: "Accuracy & drift validation" },
  { icon: icons.shieldBolt, title: "AI security", desc: "Adversarial defense & jailbreak shields" },
  { icon: icons.eye, title: "Human oversight", desc: "HITL checkpoints & escalations" },
  { icon: icons.chartUp, title: "Performance monitoring", desc: "Latency, cost & throughput metrics" },
  { icon: icons.shieldLock, title: "Governance requirements", desc: "Statutory compliance & policies" },
  { icon: icons.shieldPlus, title: "Responsible AI practices", desc: "Bias mitigation & explainability" },
];

const pipeline = [
  "Business Problem",
  "AI Opportunity",
  "Proof of Concept",
  "Solution Engineering",
  "Integration",
  "Production Deployment",
  "Monitoring & Optimization",
];

const desk = [
  { icon: icons.clipCheck, text: "Bespoke Architectural Assessment" },
  { icon: icons.dataCheck, text: "Data Pipeline Feasibility Audit" },
  { icon: icons.lockCheck, text: "Governance & Privacy Playbook" },
];

const faqs: AiStrategyFaqItem[] = [
  {
    q: "What are AI Consulting Services?",
    a: "AI consulting services help businesses identify suitable AI use cases, assess their readiness, select appropriate technologies and create a roadmap for AI implementation.",
  },
  {
    q: "What does an AI strategy include?",
    a: "An AI strategy typically includes an assessment of business objectives and processes, a review of data and technology readiness, a ranked list of AI use cases, a target architecture, governance and responsible-AI practices, and a phased roadmap for implementation.",
  },
  {
    q: "How do businesses identify the right AI use cases?",
    a: "The right use cases start from a clear business problem, not a technology. Teams evaluate where AI can create measurable value, check whether the data and systems needed are available, and rank opportunities by expected impact and feasibility before committing to build.",
  },
  {
    q: "Can AI consulting include implementation?",
    a: "Yes. AI consulting can extend from strategy and architecture into engineering: building, integrating, testing, and deploying AI solutions, and then monitoring and optimizing them in production.",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

function ExternalArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function AiStrategyEngineeringPage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href={PARENT_HREF}>AI Automation Services</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.crumbCurrent} aria-current="page">
              AI Strategy &amp; Engineering
            </span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                AI AUTOMATION SERVICES • AI STRATEGY &amp; ENGINEERING
              </span>
              <h1 className={styles.heroTitle}>
                AI Consulting Services for Enterprise <span className={styles.gradText}>AI Strategy &amp; Engineering</span>
              </h1>
              <p className={styles.heroLead}>AI adoption should start with a business problem—not simply a new technology.</p>
              <p className={styles.heroCopy}>
                Our AI Consulting Services help enterprises identify practical AI opportunities, assess readiness,
                select the right technologies and create a roadmap for moving from experimentation to production.
              </p>

              <h2 className={styles.solveHead}>
                <span className={styles.solveBar} />
                What we help you solve
              </h2>
              <ul className={styles.solveGrid}>
                {solve.map((s) => (
                  <li key={s.text}>
                    <span className={styles.iconTile}>{s.icon}</span>
                    {s.text}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={styles.primaryBtn}>
                Build Your AI Strategy
                <ExternalArrow />
              </Link>
            </div>

            <div className={styles.heroArtCard}>
              <img
                src={asset(HERO_IMAGE)}
                alt="Layered isometric AI architecture with connected processing nodes"
                width={1200}
                height={750}
                fetchPriority="high"
              />
              <div className={styles.heroCaption}>
                <span className={styles.pillDot} />
                <span>SYSTEM ARCHITECTURE • AI STRATEGY &amp; ENTERPRISE</span>
                <b>ACTIVE MATRIX</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Use cases ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>OPPORTUNITY ASSESSMENT</p>
          <h2 className={styles.title}>Start With the Right AI Use Case</h2>
          <p className={styles.lead}>Not every business process needs AI.</p>
          <p className={styles.purpleLead}>We help evaluate opportunities across:</p>

          <ul className={styles.domainGrid}>
            {domains.map((d) => (
              <li className={styles.domainCard} key={d.title}>
                <span className={styles.iconTile}>{d.icon}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <Link href="/contact" className={styles.exploreLink}>
                  Explore domain {icons.arrow}
                </Link>
              </li>
            ))}
          </ul>

          <div className={`${styles.callout} ${styles.calloutLilac}`}>
            <span className={`${styles.calloutIcon} ${styles.calloutIconViolet}`}>{icons.bulb}</span>
            <p>The goal is to identify where AI can create measurable business value, rather than adding AI where it isn&apos;t needed.</p>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>OUR AI STRATEGY PROCESS</p>
          <h2 className={styles.title}>AI Strategy From Assessment to Execution</h2>
          <ol className={styles.phaseGrid}>
            {phases.map((p, i) => (
              <li className={styles.phaseCard} key={p.title}>
                <div className={styles.phaseTop}>
                  <span className={styles.phaseNum}>{pad(i + 1)}</span>
                  <span className={styles.phaseChip}>PHASE {i + 1}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className={styles.phaseTag}>
                  <span className={styles.tagDot} />
                  {p.tag}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Engineering ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>ENGINEERING PRACTICE</p>
          <h2 className={styles.title}>AI Engineering Built for Enterprise Environments</h2>
          <p className={styles.lead}>Strategy becomes valuable when it can actually be implemented.</p>
          <p className={styles.purpleLead}>Our engineering focus</p>

          <ul className={styles.engGrid}>
            {engineering.map((e) => (
              <li key={e.text}>
                <span className={styles.iconTile}>{e.icon}</span>
                {e.text}
              </li>
            ))}
          </ul>

          <div className={`${styles.callout} ${styles.calloutWhite}`}>
            <span className={styles.calloutGlyph}>{icons.fork}</span>
            <p>This connects business strategy → technology architecture → working AI solutions.</p>
            <span className={styles.flowChip}>END-TO-END ENTERPRISE FLOW</span>
          </div>
        </div>
      </section>

      {/* ---------- Governance ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>TRUST &amp; OPERATIONAL INTEGRITY</p>
          <h2 className={styles.title}>AI Governance &amp; Responsible Adoption</h2>
          <p className={styles.lead}>Enterprise AI needs appropriate controls around data, access and usage.</p>
          <p className={styles.purpleLead}>We consider:</p>

          <ul className={styles.govGrid}>
            {governance.map((g) => (
              <li className={styles.govCard} key={g.title}>
                <span className={styles.govIcon}>{g.icon}</span>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </li>
            ))}
          </ul>

          <div className={`${styles.callout} ${styles.calloutLilac2}`}>
            <span className={`${styles.calloutIcon} ${styles.calloutIconViolet}`}>{icons.shieldOutline}</span>
            <p>This helps organizations introduce AI while maintaining appropriate operational controls.</p>
          </div>
        </div>
      </section>

      {/* ---------- Pipeline ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>DELIVERY PIPELINE</p>
          <h2 className={styles.title}>From AI Idea to Production</h2>

          <ol className={styles.pipeline}>
            {pipeline.map((step, i) => {
              const last = i === pipeline.length - 1;
              return (
                <li className={`${styles.step}${last ? ` ${styles.stepLast}` : ""}`} key={step}>
                  <small>STEP {pad(i + 1)}</small>
                  <b>{step}</b>
                  <span className={styles.stepIcon}>{last ? icons.checkBadge : icons.arrow}</span>
                </li>
              );
            })}
          </ol>

          <div className={`${styles.callout} ${styles.calloutWhite}`}>
            <span className={`${styles.calloutIcon} ${styles.calloutIconIndigo}`}>{icons.rocket}</span>
            <p>This approach helps reduce the gap between an AI experiment and a production-ready capability.</p>
          </div>
        </div>
      </section>

      {/* ---------- Advisory + FAQ ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`} id="faq">
        <div className={`container ${styles.faqGrid}`}>
          <aside className={styles.desk}>
            <p className={styles.eyebrow}>ADVISORY DESK</p>
            <h3>AI Strategy Advisory</h3>
            <p className={styles.deskCopy}>
              Have an AI initiative in mind? Connect with our enterprise AI strategists to define your roadmap.
            </p>
            <ul>
              {desk.map((d) => (
                <li key={d.text}>
                  <span className={styles.iconTile}>{d.icon}</span>
                  {d.text}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={styles.deskBtn}>
              Schedule Strategy Consultation
              {icons.calendar}
            </Link>
          </aside>

          <div>
            <p className={styles.eyebrow}>CLARIFICATIONS &amp; INSIGHTS</p>
            <h2 className={styles.title}>Frequently Asked Questions About AI Consulting Services</h2>
            <AiStrategyFaq items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}