import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import QaFaq, { type QaFaqItem } from "./qafaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Software Testing & QA Automation Services",
  description:
    "Software testing and QA automation services combining manual testing, automated testing and quality engineering to find issues earlier and improve release confidence, from Atlantech Global.",
  alternates: { canonical: "/product-engineering/testing-qa-automation/" },
};

/** Where the "Product Engineering Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/product-engineering-services";
/** Hero image in /public/images — change the file name if yours differs. */
const HERO_IMAGE = "/images/ui-ux-prototyping.jpg";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
  `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
  external: "M7 17L17 7M8 7h9v9",
  help: c(12, 12, 9) + "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  /* chips */
  functional: "M4 7h10M18 7h2M4 17h2M10 17h10" + c(16, 7, 2) + c(8, 17, 2),
  automation: r(4, 6, 16, 12, 2) + "M9 3v3M15 3v3M9 12h.01M15 12h.01M9 15.5h6",
  api: "M8 6l-5 6 5 6M16 6l5 6-5 6M14 5l-4 14",
  regression: "M20 12a8 8 0 1 1-2.5-5.8M20 4v5h-5M12 8v4l3 2",
  performance: c(12, 12, 9) + "M12 12l4-4M7 16h.01M17 16h.01M12 7h.01",
  integration: c(12, 12, 2.4) + "M12 3v4M12 17v4M3 12h4M17 12h4",
  e2e: "M4 18h4V6H4zM16 18h4V6h-4zM8 12h8M13 9l3 3-3 3",
  devices: r(3, 5, 12, 10, 1.5) + r(14, 10, 7, 11, 1.5) + "M7 19h5",
  /* approach */
  plan: "M5 19L19 5M7 5h4M5 7v4M17 19h-4M19 17v-4",
  test: r(4, 4, 16, 16, 2) + "M8 12l3 3 5-6",
  automate: "M13 3L5 14h6l-1 7 8-11h-6z",
  integrate: "M4 8h10M10 4l4 4-4 4M20 16H10M14 12l-4 4 4 4",
  monitor: "M3 17l5-5 4 3 5-6M17 7h4v4",
  improve: "M3 17l6-6 4 4 8-8M15 7h6v6",
  /* manual / automated */
  hand: "M9 11V5a1.5 1.5 0 0 1 3 0v5M12 9.5a1.5 1.5 0 0 1 3 0V11M15 10.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-3l-2-3.5a1.5 1.5 0 0 1 2.5-1.5L9 15",
  robot: r(4, 7, 16, 12, 3) + "M12 3v4M9 13h.01M15 13h.01M9 16.5h6",
  /* benefits */
  bolt: "M13 3L5 14h6l-1 7 8-11h-6z",
  target: c(12, 12, 8) + c(12, 12, 4) + c(12, 12, 0.6),
  repeat: "M17 3l4 4-4 4M3 11V9a2 2 0 0 1 2-2h16M7 21l-4-4 4-4M21 13v2a2 2 0 0 1-2 2H3",
  check: c(12, 12, 9) + "M8.5 12l2.5 2.5 4.5-5",
  coverage: c(12, 12, 9) + "M8.5 12l2.5 2.5 4.5-5",
  pipeline: c(12, 12, 9) + "M8 12h8M13 9l3 3-3 3",
  /* lifecycle nodes */
  clipboard: r(5, 4, 14, 17, 2) + "M9 4V3h6v1M9 11h6M9 15h4",
  code: "M9 7l-5 5 5 5M15 7l5 5-5 5",
  qaCheck: c(12, 12, 9) + "M8.5 12l2.5 2.5 4.5-5",
  sliders: "M4 8h9M17 8h3M4 16h3M11 16h9" + c(15, 8, 2) + c(9, 16, 2),
  gauge: c(12, 12, 9) + "M12 12l4-4M7 16h.01M17 16h.01",
  rocket: "M5 15c-1 1-1.5 3-1.5 5 2 0 4-.5 5-1.5M9 15l-3-3c1-4 4-7 9-8 4-.7 5 .3 4.5 4.5-1 5-4 8-8 9zM15 9h.01",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
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
  { icon: "functional", text: "Functional testing" },
  { icon: "automation", text: "Automation testing" },
  { icon: "api", text: "API testing" },
  { icon: "regression", text: "Regression testing" },
  { icon: "performance", text: "Performance testing" },
  { icon: "integration", text: "Integration testing" },
  { icon: "e2e", text: "End-to-end testing" },
  { icon: "devices", text: "Cross-browser & device testing" },
];

const approach: { icon: IconName; title: string; desc: string }[] = [
  { icon: "plan", title: "Plan", desc: "Define quality objectives" },
  { icon: "test", title: "Test", desc: "Validate functionality" },
  { icon: "automate", title: "Automate", desc: "Automate repeatable test scenarios" },
  { icon: "integrate", title: "Integrate", desc: "Connect testing with development workflows" },
  { icon: "monitor", title: "Monitor", desc: "Track defects and performance" },
  { icon: "improve", title: "Improve", desc: "Continuously strengthen test coverage" },
];

const manual = ["Exploratory testing", "Usability testing", "New feature validation", "User experience checks"];
const automated = ["Regression testing", "Repeated test cases", "API testing", "End-to-end workflows", "Continuous testing"];

const matrix: { area: string; validates: string }[] = [
  { area: "Functional Testing", validates: "Features work as expected" },
  { area: "API Testing", validates: "API behavior and integrations" },
  { area: "Regression Testing", validates: "Existing functionality remains stable" },
  { area: "Performance Testing", validates: "System response under load" },
  { area: "Integration Testing", validates: "Systems work together correctly" },
  { area: "End-to-End Testing", validates: "Complete user journeys" },
  { area: "Compatibility Testing", validates: "Browsers, devices and environments" },
];

const benefits: { icon: IconName; text: string }[] = [
  { icon: "bolt", text: "Faster regression cycles" },
  { icon: "target", text: "Earlier defect detection" },
  { icon: "repeat", text: "Repeatable testing" },
  { icon: "check", text: "Better release confidence" },
  { icon: "coverage", text: "Improved test coverage" },
  { icon: "pipeline", text: "Support for CI/CD workflows" },
];

const lifecycle: { icon: IconName; text: string }[] = [
  { icon: "clipboard", text: "Requirements" },
  { icon: "code", text: "Development" },
  { icon: "automate", text: "Automated Testing" },
  { icon: "sliders", text: "QA Validation" },
  { icon: "gauge", text: "Performance Testing" },
  { icon: "rocket", text: "Release" },
  { icon: "eye", text: "Continuous Monitoring" },
];

const faqs: QaFaqItem[] = [
  {
    q: "What are Software Testing Services?",
    a: "Software testing services evaluate applications for functionality, reliability, performance, usability, compatibility and other quality requirements.",
  },
  {
    q: "What is QA automation?",
    a: "QA automation uses software tools and automated test scripts to repeatedly validate application functionality and identify defects.",
  },
  {
    q: "What tests should be automated?",
    a: "Regression, API, integration, end-to-end and repetitive functional tests are common candidates for automation. The right automation scope depends on the product.",
  },
  {
    q: "Can QA automation be integrated with CI/CD?",
    a: "Yes. Automated tests can be incorporated into CI/CD pipelines to validate changes before they reach production.",
  },
];

export default function TestingQaAutomationPage() {
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
              Testing &amp; QA Automation
            </span>
          </nav>
          <div className={styles.hero}>
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrowPill}>
                  <span className={styles.pillDot} />
                  PRODUCT ENGINEERING SERVICES • TESTING &amp; QA AUTOMATION
                </span>
                <h1 className={styles.heroTitle}>
                  Software Testing &amp; QA Automation for <span className={styles.gradText}>Reliable Digital Products</span>
                </h1>
                <p className={styles.heroLead}>
                  A product isn&apos;t complete when the code is complete. It is ready when it performs reliably under
                  real-world conditions.
                </p>
                <p className={styles.heroCopy}>
                  Our Software Testing Services combine manual testing, automated testing and quality engineering to
                  identify issues earlier and improve release confidence.
                </p>
                <h2 className={styles.chipsHead}>Quality across every release</h2>
                <ul className={styles.chipGrid}>
                  {chips.map((t) => (
                    <li key={t.text}>
                      <span className={styles.tile32}>
                        <Ic name={t.icon} />
                      </span>
                      {t.text}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={styles.solidBtn}>
                  Strengthen Your Product Quality
                  <Ic name="external" />
                </Link>
              </div>

              <div className={styles.heroArtCard}>
                <div className={styles.heroImgWrap}>
                  <img
                    className={styles.heroImg}
                    src={asset(HERO_IMAGE)}
                    alt="Purple validation pipeline illustrating automated software testing and quality assurance"
                    width={892}
                    height={760}
                    fetchPriority="high"
                  />
                </div>
                <div className={styles.heroCaption}>
                  <span className={styles.captionLeft}>
                    <span className={styles.pillDot} />
                    SYSTEM PIPELINE • Validation Runtime • ACTIVE ENGINE
                  </span>
                  <Ic name="shield" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Approach ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>OUR APPROACH</p>
            <h2 className={styles.title}>QA Automation That Fits Into Your Development Process</h2>
            <p className={styles.lead}>Quality shouldn&apos;t be checked only before launch.</p>
          </div>
          <ol className={styles.approachGrid}>
            {approach.map((a, i) => (
              <li key={a.title}>
                <div className={styles.approachTop}>
                  <span className={styles.approachNum}>{pad(i + 1)}</span>
                  <span className={styles.approachIcon}>
                    <Ic name={a.icon} />
                  </span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Manual + Automated ---------- */}
        <section className={styles.section}>
          <div className={`${styles.head} ${styles.headCenter}`}>
            <h2 className={styles.title}>Manual + Automated Testing</h2>
            <p className={styles.lead}>Automation is powerful, but not every test should be automated.</p>
          </div>
          <div className={styles.splitGrid}>
            <article className={styles.splitCard}>
              <div className={styles.splitHead}>
                <span className={styles.tile36}>
                  <Ic name="hand" />
                </span>
                <h3>Manual Testing</h3>
              </div>
              <span className={styles.suited}>Best suited for:</span>
              <ul className={styles.bullets}>
                {manual.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </article>
            <article className={styles.splitCard}>
              <div className={styles.splitHead}>
                <span className={styles.tile36}>
                  <Ic name="robot" />
                </span>
                <h3>Automated Testing</h3>
              </div>
              <span className={styles.suited}>Ideal for:</span>
              <ul className={styles.bullets}>
                {automated.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className={styles.noteBar}>A combined approach provides broader quality coverage.</p>
        </section>

        {/* ---------- Coverage matrix ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>VALIDATION COVERAGE MATRIX</p>
            <h2 className={styles.title}>Testing Across the Product Lifecycle</h2>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.matrix}>
              <thead>
                <tr>
                  <th scope="col">TESTING AREA</th>
                  <th scope="col">WHAT WE VALIDATE</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((m) => (
                  <tr key={m.area}>
                    <th scope="row">{m.area}</th>
                    <td>{m.validates}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- Automation benefits ---------- */}
        <section className={styles.section}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>SPEED &amp; RELIABILITY</p>
            <h2 className={styles.title}>Automation Testing for Faster Releases</h2>
            <p className={styles.lead}>
              Automated test suites can help teams repeatedly validate critical workflows without manually executing
              the same scenarios for every release.
            </p>
            <p className={styles.inkLabel}>Benefits include:</p>
          </div>
          <ul className={styles.benefitGrid}>
            {benefits.map((b) => (
              <li key={b.text}>
                <span className={styles.tile32}>
                  <Ic name={b.icon} />
                </span>
                {b.text}
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Quality engineering ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>CONTINUOUS EMBEDDED LIFECYCLE</p>
            <h2 className={styles.title}>Quality Engineering Built Into Product Development</h2>
            <p className={styles.lead}>
              Instead of treating QA as the final stage, we bring quality into the development lifecycle.
            </p>
          </div>
          <div className={styles.lifeCard}>
            <ol className={styles.lifeRow}>
              {lifecycle.map((l) => (
                <li key={l.text}>
                  <Ic name={l.icon} />
                  {l.text}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={`${styles.section} ${styles.sectionFaq}`} id="faq">
          <h2 className={`${styles.title} ${styles.faqTitle}`}>Frequently Asked Questions About Software Testing &amp; QA Automation</h2>
          <div className={styles.faqGrid}>
            <aside className={styles.desk}>
              <span className={styles.deskIcon}>
                <Ic name="help" />
              </span>
              <h3>Quality Assurance Advisory</h3>
              <p>
                Have a project in mind? Connect with our QA specialists to optimize your test frameworks and release
                confidence.
              </p>
              <Link href="/contact" className={styles.deskBtn}>
                Request Quality Review
                <Ic name="external" />
              </Link>
            </aside>
            <QaFaq items={faqs} />
          </div>
        </section>
      </div>
    </div>
  );
}