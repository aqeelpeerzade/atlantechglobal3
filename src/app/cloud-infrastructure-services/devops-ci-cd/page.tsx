import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import DevopsFaq, { type DevopsFaqItem } from "./devopsfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "DevOps & CI/CD Consulting Services",
  description:
    "DevOps consulting services for faster software delivery: DevOps strategy, CI/CD pipeline implementation, infrastructure as code, containerization, DevSecOps and monitoring from Atlantech Global.",
  alternates: { canonical: "/cloud-infrastructure-services/devops-ci-cd/" },
};

/** Where the "Cloud Infrastructure Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/cloud-infrastructure";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons = {
  robot: (
    <Icon>
      <path d="M4 20h7M7 20v-5l4-4M11 11l3-4M14 7l2.5 1.5M16 4a3 3 0 0 1 3 3M5 15h4" />
    </Icon>
  ),
  badgeCheck: (
    <Icon>
      <path d="M12 3l2.2 1.7 2.8-.2 1 2.6 2.4 1.5-.8 2.7.8 2.7-2.4 1.5-1 2.6-2.8-.2L12 21l-2.2-1.7-2.8.2-1-2.6-2.4-1.5.8-2.7-.8-2.7L6 7.1l1-2.6 2.8.2z" />
      <path d="M9 12l2 2 4-4" />
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
  searchPulse: (
    <Icon>
      <circle cx="11" cy="11" r="7" />
      <path d="M7.5 11h2l1.2-2.5 1.6 5 1.2-2.5h1M20 20l-3.5-3.5" />
    </Icon>
  ),
  trend: (
    <Icon>
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6M3 11l5-5 3 3" />
    </Icon>
  ),
  flow: (
    <Icon>
      <rect x="3" y="4" width="6" height="5" rx="1" />
      <rect x="15" y="4" width="6" height="5" rx="1" />
      <rect x="15" y="15" width="6" height="5" rx="1" />
      <path d="M9 6.5h6M18 9v6M6 9v8h9" />
    </Icon>
  ),
  fastForward: (
    <Icon>
      <path d="M4 6l7 6-7 6zM13 6l7 6-7 6z" />
    </Icon>
  ),
  terminal: (
    <Icon>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 10l3 2-3 2M13 15h4" />
    </Icon>
  ),
  archive: (
    <Icon>
      <rect x="3" y="4" width="18" height="5" rx="1" />
      <path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9M10 13h4" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    </Icon>
  ),
  chartUp: (
    <Icon>
      <path d="M4 20v-5M9 20v-8M14 20v-5M19 20V8M3 20h18M4 11l5-4 4 3 6-6" />
    </Icon>
  ),
  code: (
    <Icon>
      <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
    </Icon>
  ),
  wrench: (
    <Icon>
      <path d="M14.5 6.5a4 4 0 0 0 5 5L9 22l-3-3z" />
      <path d="M15 6l3-3 3 3-3 3" />
    </Icon>
  ),
  testCheck: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </Icon>
  ),
  rocket: (
    <Icon>
      <path d="M5 15c-1 1-1.5 3-1.5 5 2 0 4-.5 5-1.5M9 15l-3-3c1-4 4-7 9-8 4-.7 5 .3 4.5 4.5-1 5-4 8-8 9zM15 9h.01" />
    </Icon>
  ),
  monitor: (
    <Icon>
      <path d="M3 17l4-6 3 3 4-7 3 5M19 19l2 2" />
      <circle cx="17" cy="16" r="3" />
    </Icon>
  ),
  check: (
    <Icon>
      <circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" />
      <path d="M8 12.5l3 3 5-6" stroke="#fff" />
    </Icon>
  ),
  cycle: (
    <Icon>
      <path d="M20 12a8 8 0 0 0-14-5.3L4 9M4 4v5h5M4 12a8 8 0 0 0 14 5.3L20 15M20 20v-5h-5" />
      <path d="M9.5 12l2 2 3.5-3.5" />
    </Icon>
  ),
  clock: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Icon>
  ),
  warning: (
    <Icon>
      <path d="M12 4l9 16H3zM12 10v4M12 17h.01" />
    </Icon>
  ),
  bandage: (
    <Icon>
      <path d="M8 4l12 12a2.8 2.8 0 0 1-4 4L4 8a2.8 2.8 0 0 1 4-4zM10 10h.01M12 12h.01M14 14h.01M11.5 8.5h.01M15.5 12.5h.01" />
    </Icon>
  ),
  shieldPlus: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M12 9v6M9 12h6" />
    </Icon>
  ),
  undo: (
    <Icon>
      <path d="M9 14L4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3" />
    </Icon>
  ),
  swap: (
    <Icon>
      <path d="M7 4L3 8l4 4M3 8h17M17 12l4 4-4 4M21 16H4" />
    </Icon>
  ),
};

const outcomes = [
  { icon: icons.robot, title: "Reduce manual effort:", desc: "Automate repetitive build, test, and deployment activities." },
  { icon: icons.badgeCheck, title: "Improve release consistency:", desc: "Use repeatable workflows and deployment standards." },
  { icon: icons.hub, title: "Strengthen team collaboration:", desc: "Align development and operations around shared processes." },
  { icon: icons.searchPulse, title: "Identify issues earlier:", desc: "Integrate testing and feedback into the delivery lifecycle." },
  { icon: icons.trend, title: "Scale delivery practices:", desc: "Build workflows that can adapt as applications and teams grow." },
];

const services = [
  { icon: icons.flow, title: "DevOps Strategy", desc: "Assess workflows and identify automation opportunities." },
  { icon: icons.fastForward, title: "CI/CD Pipeline Implementation", desc: "Automate builds, testing, and deployment." },
  { icon: icons.terminal, title: "Infrastructure as Code", desc: "Manage infrastructure through repeatable configurations." },
  { icon: icons.archive, title: "Containerization", desc: "Support consistent application deployment." },
  { icon: icons.shield, title: "DevSecOps", desc: "Integrate security checks into development workflows." },
  { icon: icons.chartUp, title: "Monitoring", desc: "Track application and infrastructure performance." },
];

const pipeline = [
  { icon: icons.code, label: "CODE" },
  { icon: icons.wrench, label: "BUILD" },
  { icon: icons.testCheck, label: "TEST" },
  { icon: icons.rocket, label: "DEPLOY" },
  { icon: icons.monitor, label: "MONITOR" },
];

const practices = [
  { title: "Continuous Integration:", desc: "Validate code changes through automated builds and tests." },
  { title: "Continuous Delivery:", desc: "Keep software ready for release." },
  { title: "Continuous Deployment:", desc: "Automatically release changes that pass required checks." },
  { title: "Pipeline Monitoring:", desc: "Track failures, deployment status, and performance." },
];

const focus = [
  "Automating builds and repetitive deployment tasks.",
  "Standardizing development, testing, and production environments.",
  "Integrating code quality and security checks into pipelines.",
  "Using infrastructure as code to improve consistency.",
  "Establishing clear release approvals and rollback procedures.",
];

const indicators = [
  { icon: icons.cycle, label: "Deployment frequency" },
  { icon: icons.clock, label: "Lead time for changes" },
  { icon: icons.warning, label: "Change failure rate" },
  { icon: icons.bandage, label: "Time to restore service" },
  { icon: icons.shieldPlus, label: "Build and test reliability" },
  { icon: icons.undo, label: "Deployment success and rollback trends" },
];

const faqs: DevopsFaqItem[] = [
  {
    q: "What are DevOps Consulting Services?",
    a: "DevOps Consulting Services help businesses improve software development and IT operations through process optimization, automation, CI/CD implementation, infrastructure management, and collaboration practices.",
  },
  {
    q: "What is a CI/CD pipeline?",
    a: "A CI/CD pipeline is an automated workflow that takes code changes through building, testing, and deployment. Continuous integration validates each change with automated builds and tests, while continuous delivery or deployment prepares and releases it to production in a consistent, repeatable way.",
  },
  {
    q: "What is the difference between continuous delivery and continuous deployment?",
    a: "With continuous delivery, every change that passes automated checks is kept ready for release, but a person approves when it goes live. With continuous deployment, changes that pass the required checks are released to production automatically, without a manual approval step.",
  },
  {
    q: "How does DevOps improve software delivery?",
    a: "DevOps shortens release cycles and reduces errors by automating repetitive build, test, and deployment work, standardizing environments, and aligning development and operations teams around shared processes. Issues are found earlier, and releases become more predictable and reliable.",
  },
  {
    q: "When should a business adopt DevOps?",
    a: "A business should consider DevOps when releases are slow or error-prone, deployments rely on manual steps, development and operations work in silos, or software needs to scale with growing teams and customers. Starting with an assessment of current workflows helps identify the most useful improvements first.",
  },
];

/** Decorative glass infinity loop used in place of a photo in the hero. */
function InfinityArt() {
  return (
    <svg className={styles.infinity} viewBox="0 0 400 240" role="img" aria-label="Continuous integration and delivery infinity loop">
      <defs>
        <linearGradient id="dv-loop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9c0ec" />
          <stop offset="0.5" stopColor="#eae6f9" />
          <stop offset="1" stopColor="#b9a8ee" />
        </linearGradient>
        <linearGradient id="dv-cube" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c4b0f7" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path
        d="M200 120C170 70 120 52 82 78c-34 24-34 62 0 86 38 26 88 8 118-42 30-50 80-68 118-42 34 24 34 62 0 86-38 26-88 8-118-42z"
        fill="none"
        stroke="#b6a6e8"
        strokeOpacity="0.35"
        strokeWidth="34"
        strokeLinecap="round"
        transform="translate(0 8)"
      />
      <path
        d="M200 120C170 70 120 52 82 78c-34 24-34 62 0 86 38 26 88 8 118-42 30-50 80-68 118-42 34 24 34 62 0 86-38 26-88 8-118-42z"
        fill="none"
        stroke="url(#dv-loop)"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <path
        d="M200 120C170 70 120 52 82 78c-34 24-34 62 0 86 38 26 88 8 118-42 30-50 80-68 118-42 34 24 34 62 0 86-38 26-88 8-118-42z"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.55"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <g fill="url(#dv-cube)" stroke="#fff" strokeOpacity="0.7" strokeWidth="1.5">
        <rect x="72" y="62" width="22" height="22" rx="4" />
        <rect x="150" y="84" width="20" height="20" rx="4" />
        <rect x="230" y="134" width="20" height="20" rx="4" />
        <rect x="306" y="150" width="22" height="22" rx="4" />
        <rect x="318" y="66" width="24" height="24" rx="4" />
        <rect x="104" y="158" width="20" height="20" rx="4" />
      </g>
    </svg>
  );
}

export default function DevopsCicdPage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href={PARENT_HREF}>Cloud Infrastructure Services</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.crumbCurrent} aria-current="page">
              DevOps &amp; CI/CD
            </span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                DEVOPS &amp; CI/CD
              </span>
              <h1 className={styles.heroTitle}>
                DevOps Consulting Services for <span className={styles.gradText}>Faster Software Delivery</span>
              </h1>
              <p className={styles.heroCopy}>
                Streamline development and operations with automation, continuous integration, and reliable deployment
                workflows. Our DevOps Consulting Services help businesses improve release cycles, team collaboration,
                and application reliability.
              </p>
              <Link href="/contact" className={styles.primaryBtn}>
                Optimize Your DevOps Workflow
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </Link>
            </div>

            <div className={styles.heroArtCard}>
              <div className={styles.heroArtInner}>
                <InfinityArt />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Reliable releases ---------- */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.title}>Turn Development Work into Reliable Releases</h2>
          <p className={styles.lead}>Our approach helps you:</p>
          <ul className={styles.outGrid}>
            {outcomes.map((o) => (
              <li className={styles.outCard} key={o.title}>
                <span className={styles.iconTile}>{o.icon}</span>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <h2 className={styles.title}>Our DevOps Consulting Services</h2>
          <p className={styles.lead}>
            We help businesses assess their current delivery processes and implement improvements suited to their
            applications and teams.
          </p>
          <ul className={styles.svcGrid}>
            {services.map((s) => (
              <li className={styles.svcCard} key={s.title}>
                <span className={`${styles.iconTile} ${styles.iconTileTint}`}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Pipeline ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <h2 className={`${styles.title} ${styles.center}`}>Build an Efficient CI/CD Pipeline</h2>

          <ol className={styles.pipeline} aria-label="CI/CD pipeline stages">
            {pipeline.map((step, i) => (
              <Fragment key={step.label}>
                <li className={styles.step}>
                  <span className={styles.stepTile}>{step.icon}</span>
                  <span className={styles.stepLabel}>{step.label}</span>
                </li>
                {i < pipeline.length - 1 && (
                  <li className={styles.connector} aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </li>
                )}
              </Fragment>
            ))}
          </ol>

          <ul className={styles.practiceGrid}>
            {practices.map((p) => (
              <li className={styles.practiceCard} key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Automation ---------- */}
      <section className={styles.section}>
        <div className={`container ${styles.autoGrid}`}>
          <div>
            <h2 className={styles.title}>Bring Automation into Your Development Workflow</h2>
            <p className={styles.lead}>
              Automation should solve real delivery challenges rather than add unnecessary tools or complexity.
            </p>
            <p className={styles.focusLabel}>We focus on:</p>
            <svg className={styles.loops} viewBox="0 0 320 170" aria-hidden="true">
              <path d="M12 96C14 52 40 30 76 26" className={styles.loopArc} />
              <circle cx="130" cy="95" r="62" className={styles.loopDash} />
              <circle cx="238" cy="95" r="62" className={styles.loopDash} />
              <circle cx="132" cy="34" r="9" className={styles.dotPurple} />
              <circle cx="233" cy="156" r="9" className={styles.dotIndigo} />
            </svg>
          </div>
          <ul className={styles.focusList}>
            {focus.map((f) => (
              <li key={f}>
                <span className={styles.checkTile}>{icons.check}</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Measure ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <h2 className={styles.title}>Make Software Delivery Easier to Measure and Improve</h2>
          <p className={styles.lead}>
            DevOps performance is not only about deployment speed. It also involves quality, reliability, and the
            ability to recover from problems.
          </p>
          <p className={styles.indLabel}>Relevant delivery indicators include:</p>

          <div className={styles.indCard}>
            <ul className={styles.indGrid}>
              {indicators.map((ind) => (
                <li key={ind.label}>
                  <span className={styles.checkTile}>{ind.icon}</span>
                  {ind.label}
                </li>
              ))}
            </ul>
            <span className={styles.healthPill}>
              <span className={styles.pillDot} />
              DELIVERY HEALTH
            </span>
          </div>
          <p className={styles.footnote}>
            These measures help teams identify bottlenecks and prioritize improvements based on delivery outcomes.
          </p>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`} id="faq">
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <h2 className={styles.title}>Frequently Asked Questions About DevOps &amp; CI/CD</h2>
            <div className={styles.cdCard}>
              <span className={styles.cdIcon}>{icons.swap}</span>
              <span>
                <b>Continuous Delivery</b>
                <small>Validated Software Automation</small>
              </span>
            </div>
          </div>
          <DevopsFaq items={faqs} />
        </div>
      </section>
    </div>
  );
}