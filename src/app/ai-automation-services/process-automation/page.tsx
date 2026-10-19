// "use client";

// import { useState } from "react";
// import styles from "./page.module.css";

// export type ProcessFaqItem = { q: string; a: string };

// export default function ProcessFaq({ items }: { items: ProcessFaqItem[] }) {
//   // The design shows every answer expanded, so all items start open; each can still be toggled.
//   const [open, setOpen] = useState<Set<number>>(() => new Set(items.map((_, i) => i)));
//   const toggle = (i: number) =>
//     setOpen((prev) => {
//       const next = new Set(prev);
//       if (next.has(i)) next.delete(i);
//       else next.add(i);
//       return next;
//     });

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: items.map((item) => ({
//       "@type": "Question",
//       name: item.q,
//       acceptedAnswer: { "@type": "Answer", text: item.a },
//     })),
//   };

//   return (
//     <div className={styles.faqList}>
//       {items.map((item, i) => {
//         const isOpen = open.has(i);
//         return (
//           <div key={item.q} className={`${styles.faqItem}${isOpen ? ` ${styles.faqOpen}` : ""}`}>
//             <h3>
//               <button
//                 type="button"
//                 id={`pa-faq-btn-${i}`}
//                 className={styles.faqQ}
//                 aria-expanded={isOpen}
//                 aria-controls={`pa-faq-${i}`}
//                 onClick={() => toggle(i)}
//               >
//                 <span className={styles.faqText}>{item.q}</span>
//                 <svg className={styles.faqChevron} viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </button>
//             </h3>
//             <div className={styles.faqA} id={`pa-faq-${i}`} role="region" aria-labelledby={`pa-faq-btn-${i}`}>
//               <div>
//                 <p>{item.a}</p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
//     </div>
//   );
// }




























import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import ProcessFaq, { type ProcessFaqItem } from "./processfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Process Automation",
  description:
    "AI Process Automation for smarter business operations: automate repetitive work, process documents, connect business systems and handle complex workflows with AI from Atlantech Global.",
  alternates: { canonical: "/ai-automation-services/process-automation/" },
};

/** Where the "AI Automation Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/ai-automation-services";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons = {
  keyboard: (
    <Icon>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10" />
    </Icon>
  ),
  doc: (
    <Icon>
      <path d="M7 3h7l4 4v14H7zM14 3v4h4M9 12h6M9 16h6" />
    </Icon>
  ),
  headset: (
    <Icon>
      <path d="M5 14v-2a7 7 0 0 1 14 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
      <path d="M19 20c0 1-2 2-5 2" />
    </Icon>
  ),
  approval: (
    <Icon>
      <path d="M4 6h10M4 12h6M4 18h8M15 16l2 2 4-5" />
    </Icon>
  ),
  shieldCheck: (
    <Icon>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5L15.5 10" />
    </Icon>
  ),
  report: (
    <Icon>
      <path d="M5 3h10l4 4v14H5zM9 17v-4M12 17v-7M15 17v-2" />
    </Icon>
  ),
  building: (
    <Icon>
      <path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6M8 11h.01M12 11h.01M16 11h.01" />
    </Icon>
  ),
  swap: (
    <Icon>
      <path d="M7 4L3 8l4 4M3 8h17M17 12l4 4-4 4M21 16H4" />
    </Icon>
  ),
  swapV: (
    <Icon>
      <path d="M8 4L4 8M8 4l4 4M8 4v16M16 20l4-4M16 20l-4-4M16 20V4" />
    </Icon>
  ),
  bolt: (
    <Icon>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </Icon>
  ),
  scan: (
    <Icon>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 12h8" />
    </Icon>
  ),
  refresh: (
    <Icon>
      <path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5" />
    </Icon>
  ),
  flag: (
    <Icon>
      <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
    </Icon>
  ),
  arrowRight: (
    <Icon>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  ),
  arrowDown: (
    <Icon>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </Icon>
  ),
  check: (
    <Icon>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </Icon>
  ),
  cog: (
    <Icon>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </Icon>
  ),
  briefcase: (
    <Icon>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
    </Icon>
  ),
  server: (
    <Icon>
      <rect x="4" y="4" width="16" height="7" rx="2" />
      <rect x="4" y="13" width="16" height="7" rx="2" />
      <path d="M8 7.5h.01M8 16.5h.01" />
    </Icon>
  ),
  chat: (
    <Icon>
      <path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" />
    </Icon>
  ),
  route: (
    <Icon>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h6a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h6" />
    </Icon>
  ),
  user: (
    <Icon>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </Icon>
  ),
  tag: (
    <Icon>
      <path d="M3 12V4h8l10 10-8 8zM7.5 8h.01" />
    </Icon>
  ),
  branch: (
    <Icon>
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M6 7v10M18 11c0 4-6 3-12 6" />
    </Icon>
  ),
  scatter: (
    <Icon>
      <path d="M4 4v16h16M8 15h.01M12 11h.01M16 14h.01M17 7h.01M10 8h.01" strokeWidth="2.6" />
    </Icon>
  ),
  alert: (
    <Icon>
      <path d="M12 7v6M12 17h.01" strokeWidth="2.4" />
    </Icon>
  ),
  bulb: (
    <Icon>
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </Icon>
  ),
  spark: (
    <Icon>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
    </Icon>
  ),
  nodes: (
    <Icon>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="12" cy="4" r="1.6" />
      <circle cx="4.5" cy="16.5" r="1.6" />
      <circle cx="19.5" cy="16.5" r="1.6" />
      <path d="M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3" />
    </Icon>
  ),
  database: (
    <Icon>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </Icon>
  ),
  people: (
    <Icon>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M3 20c0-3.5 2.8-5.5 6-5.5s6 2 6 5.5M15 15c3 0 6 1.5 6 4.5" />
    </Icon>
  ),
  help: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" />
    </Icon>
  ),
  external: (
    <Icon>
      <path d="M7 17L17 7M8 7h9v9" />
    </Icon>
  ),
};

const chips = [
  { icon: icons.keyboard, text: "Repetitive data entry" },
  { icon: icons.doc, text: "Document processing" },
  { icon: icons.headset, text: "Customer service workflows" },
  { icon: icons.approval, text: "Approval processes" },
  { icon: icons.shieldCheck, text: "Data validation" },
  { icon: icons.report, text: "Reporting" },
  { icon: icons.building, text: "Back-office operations" },
  { icon: icons.swap, text: "Cross-system workflows" },
];

const traditional = [
  "Employee receives request",
  "Manually reviews information",
  "Enters data",
  "Checks another system",
  "Sends approval",
  "Updates records",
];

const automated = [
  { text: "Request received", icon: icons.bolt },
  { text: "AI processes information", icon: icons.scan },
  { text: "Rules validate data", icon: icons.shieldCheck },
  { text: "Systems are updated", icon: icons.refresh },
  { text: "Exceptions are flagged", icon: icons.flag },
  { text: "Workflow moves forward", icon: icons.arrowRight },
];

const domains = [
  {
    icon: icons.building,
    tag: "HIGH VELOCITY IMPACT",
    title: "Finance",
    desc: "Eliminate critical errors and accelerate fiscal cycle closures with autonomous financial document validation and transactional throughput.",
    points: [
      [icons.doc, "Invoice processing"],
      [icons.shieldCheck, "Data validation"],
      [icons.check, "Reconciliation workflows"],
    ],
    link: "Explore Finance Workflows",
  },
  {
    icon: icons.headset,
    tag: "SUPPORT & TRIAGE",
    title: "Customer Operations",
    desc: "Deliver immediate resolutions by classifying inquiries and orchestrating rapid multi-department handoffs seamlessly.",
    points: [
      [icons.tag, "Request classification"],
      [icons.chat, "Customer communication"],
      [icons.route, "Ticket routing"],
    ],
    link: "Explore Customer Ops",
  },
  {
    icon: icons.briefcase,
    tag: "TALENT OPERATIONS",
    title: "HR",
    desc: "Streamline the employee lifecycle from intake documentation to day-one provisioning and routine policy fulfillment.",
    points: [
      [icons.doc, "Employee document processing"],
      [icons.approval, "Request management"],
      [icons.user, "Onboarding workflows"],
    ],
    link: "Explore HR Automation",
  },
  {
    icon: icons.cog,
    tag: "ENTERPRISE LOGISTICS",
    title: "Operations",
    desc: "Establish rigorous governance, operational synchronization, and uninterrupted automated status aggregation.",
    points: [
      [icons.approval, "Workflow approvals"],
      [icons.server, "Data processing"],
      [icons.report, "Reporting automation"],
    ],
    link: "Explore Operational Pipelines",
  },
] as const;

const complex = [
  { icon: icons.doc, kicker: "INPUT", title: "Unstructured documents", desc: "PDFs, scans, contracts and handwritten records" },
  { icon: icons.chat, kicker: "SEMANTICS", title: "Natural-language requests", desc: "Freeform emails, unstructured tickets and internal queries" },
  { icon: icons.tag, kicker: "ORGANIZATION", title: "Classification", desc: "Autonomous sorting based on contextual content intent" },
  { icon: icons.scan, kicker: "EXTRACTION", title: "Information extraction", desc: "Parsing key transactional entities and relevant tabular data" },
  { icon: icons.branch, kicker: "HEURISTICS", title: "Decision support", desc: "Intelligent routing and situational next-best-action guidance" },
  { icon: icons.scatter, kicker: "ANALYTICS", title: "Pattern recognition", desc: "Identifying operational trends, discrepancies, and clusters" },
  { icon: icons.alert, kicker: "RESILIENCE", title: "Exceptions", desc: "Dynamic anomaly resolution with seamless human-in-the-loop escalation paths", wide: true },
];

const systems = [
  { icon: icons.user, title: "CRM", desc: "Customer relationship & account entities", tag: "DATA SOURCE" },
  { icon: icons.spark, title: "Automation Layer", desc: "Orchestration, AI classification & transformation pipelines", tag: "CORE HUB", hub: true },
  { icon: icons.nodes, title: "ERP", desc: "Core finance, procurement & operational systems", tag: "SYSTEM RECORD" },
  { icon: icons.database, title: "Documents / Data", desc: "Cloud storage repositories, unstructured lakes & databases", tag: "STORAGE" },
  { icon: icons.people, title: "Customer & Employee Platforms", desc: "Portals, mobile apps, collaboration suites & interfaces", tag: "TOUCHPOINTS" },
];

const journey = [
  { title: "Identify", desc: "Find repetitive or inefficient processes." },
  { title: "Analyze", desc: "Understand rules, exceptions and dependencies." },
  { title: "Design", desc: "Create the automated workflow." },
  { title: "Integrate", desc: "Connect required applications and data." },
  { title: "Test", desc: "Validate accuracy and exceptions." },
  { title: "Deploy", desc: "Launch with appropriate controls." },
  { title: "Optimize", desc: "Monitor and improve continuously." },
];

const faqs: ProcessFaqItem[] = [
  {
    q: "What is AI Process Automation?",
    a: "AI Process Automation combines artificial intelligence with workflow automation to process information, make decisions or support tasks within business processes.",
  },
  {
    q: "What processes can be automated using AI?",
    a: "Processes involving documents, customer requests, data processing, approvals, classification, reporting and repetitive operational tasks can be potential candidates.",
  },
  {
    q: "What is the difference between automation and AI automation?",
    a: "Traditional automation generally follows predefined rules, while AI automation can interpret information, identify patterns and handle certain less-structured tasks.",
  },
  {
    q: "Can AI automation integrate with existing business systems?",
    a: "Yes. Automation solutions can integrate with enterprise applications through APIs, connectors and workflow platforms.",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProcessAutomationPage() {
  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        {/* ---------- Hero ---------- */}
        <section className={styles.hero}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href={PARENT_HREF}>AI Automation Services</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.crumbCurrent} aria-current="page">
              Process Automation
            </span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                AI AUTOMATION SERVICES • PROCESS AUTOMATION
              </span>
              <h1 className={styles.heroTitle}>
                AI Process Automation for <span className={styles.gradText}>Smarter Business Operations</span>
              </h1>
              <p className={styles.heroCopy}>
                Repetitive workflows consume time, create manual dependencies and can slow business operations. Our AI
                Process Automation solutions combine automation technologies with AI to streamline workflows, process
                information and support faster business operations.
              </p>

              <h2 className={styles.chipsHead}>Automate where work gets stuck</h2>
              <ul className={styles.chipGrid}>
                {chips.map((c) => (
                  <li key={c.text}>
                    <span className={styles.chipIcon}>{c.icon}</span>
                    {c.text}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={styles.primaryBtn}>
                Automate Your Business Processes
                <span className={styles.btnIcon}>{icons.external}</span>
              </Link>
            </div>

            <div className={styles.heroArtCard}>
              <img
                className={styles.heroImg}
                src={asset("/images/process-automation.jpg")}
                alt="Isometric purple workflow tiles representing AI process automation"
                width={924}
                height={578}
                fetchPriority="high"
              />
              <div className={styles.heroCaption}>
                <span className={styles.captionLabel}>
                  <span className={styles.captionDot} />
                  WORKFLOW ENGINE
                </span>
                <span className={styles.captionText}>Intelligent Process Orchestration</span>
                <span className={styles.captionBadge}>ACTIVE RUNTIME</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Manual vs automated ---------- */}
        <section className={styles.section}>
          <div className={`${styles.head} ${styles.headCenter}`}>
            <p className={styles.eyebrow}>
              {icons.refresh}
              EVOLUTION OF PROCESS EFFICIENCY
            </p>
            <h2 className={styles.title}>From Manual Workflows to Intelligent Automation</h2>
          </div>

          <div className={styles.compareGrid}>
            <div className={`${styles.compareCard} ${styles.manualCard}`}>
              <div className={styles.compareHead}>
                <span className={`${styles.iconTile} ${styles.iconTileMuted}`}>{icons.keyboard}</span>
                <div className={styles.compareTitle}>
                  <h3>Traditional process</h3>
                  <small>Linear manual handling with dependency bottlenecks</small>
                </div>
                <span className={styles.manualTag}>6 MANUAL STEPS</span>
              </div>
              <ol className={styles.stepList}>
                {traditional.map((t, i) => (
                  <li key={t}>
                    <span className={styles.stepNumMuted}>{pad(i + 1)}</span>
                    <span className={styles.stepText}>{t}</span>
                    <span className={styles.stepIcon}>{i === traditional.length - 1 ? icons.check : icons.arrowDown}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className={`${styles.compareCard} ${styles.autoCard}`}>
              <div className={styles.compareHead}>
                <span className={`${styles.iconTile} ${styles.iconTileSolid}`}>{icons.cog}</span>
                <div className={styles.compareTitle}>
                  <h3>Automated process</h3>
                  <small className={styles.accentText}>Streamlined, autonomous event-driven execution</small>
                </div>
                <span className={styles.autoTag}>INTELLIGENT PIPELINE</span>
              </div>
              <ol className={`${styles.stepList} ${styles.stepListAuto}`}>
                {automated.map((a, i) => (
                  <li key={a.text}>
                    <span className={styles.stepNumSolid}>{pad(i + 1)}</span>
                    <span className={styles.stepText}>{a.text}</span>
                    <span className={`${styles.stepIcon} ${styles.stepIconAccent}`}>{a.icon}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ---------- Business functions ---------- */}
        <section className={styles.section}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>
              {icons.building}
              ENTERPRISE APPLICATION DOMAINS
            </p>
            <h2 className={styles.title}>Intelligent Automation Across Business Functions</h2>
          </div>

          <div className={styles.domainGrid}>
            {domains.map((d, di) => (
              <article className={styles.domainCard} key={d.title}>
                <div className={styles.domainTop}>
                  <span className={`${styles.iconTile} ${styles.iconTileLg} ${di === 0 ? styles.iconTileSolid : ""}`}>{d.icon}</span>
                  <span className={`${styles.domainTag}${di === 0 ? ` ${styles.domainTagAccent}` : ""}`}>{d.tag}</span>
                </div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <ul className={styles.domainPoints}>
                  {d.points.map(([icon, text]) => (
                    <li key={text}>
                      <span className={styles.pointIcon}>{icon}</span>
                      {text}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={styles.domainLink}>
                  {d.link}
                  <span className={styles.linkArrow}>{icons.arrowRight}</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- AI + automation ---------- */}
        <section className={styles.section}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>
              {icons.spark}
              COMPLEX PROCESS HANDLING
            </p>
            <h2 className={styles.title}>AI + Automation for More Complex Workflows</h2>
            <p className={styles.lead}>
              Traditional automation works well when rules are predictable.
              <span className={styles.leadDark}>AI can add intelligence when workflows involve:</span>
            </p>
          </div>

          <div className={styles.complexPanel}>
            <ul className={styles.complexGrid}>
              {complex.map((c) => (
                <li className={`${styles.complexCell}${"wide" in c && c.wide ? ` ${styles.complexWide}` : ""}`} key={c.title}>
                  <span className={styles.complexIcon}>{c.icon}</span>
                  <small>{c.kicker}</small>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.callout}>
            <span className={styles.calloutIcon}>{icons.bulb}</span>
            <p>This combination enables automation beyond simple rule-based tasks.</p>
          </div>
        </section>

        {/* ---------- Systems ---------- */}
        <section className={styles.section}>
          <div className={`${styles.head} ${styles.headCenter}`}>
            <p className={styles.eyebrow}>
              {icons.nodes}
              SYSTEM INTEGRATION FABRIC
            </p>
            <h2 className={styles.title}>Connect Your Business Systems</h2>
            <p className={styles.lead}>Automation can span multiple applications.</p>
          </div>

          <ul className={styles.fabric}>
            {systems.map((s, i) => {
              const hub = "hub" in s && s.hub;
              return (
                <li key={s.title}>
                  {i > 0 && <span className={styles.connector}>{icons.swap}</span>}
                  <div className={`${styles.sysCard}${hub ? ` ${styles.sysHub}` : ""}`}>
                    <span className={`${styles.iconTile} ${hub ? `${styles.iconTileSolid} ${styles.iconTileLg}` : ""}`}>{s.icon}</span>
                    <div className={styles.sysText}>
                      <h3>
                        {s.title}
                        {hub && <span className={styles.sysDot} />}
                      </h3>
                      <small>{s.desc}</small>
                    </div>
                    <span className={styles.sysTag}>{s.tag}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className={styles.noteBar}>This helps reduce repetitive movement of information between systems.</p>
        </section>

        {/* ---------- Journey ---------- */}
        <section className={styles.section}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>
              {icons.route}
              STRUCTURED IMPLEMENTATION
            </p>
            <h2 className={styles.title}>Our Automation Journey</h2>
          </div>
          <ol className={styles.journeyGrid}>
            {journey.map((j, i) => (
              <li className={styles.journeyCard} key={j.title}>
                <span className={`${styles.journeyNum}${i === journey.length - 1 ? ` ${styles.journeyNumActive}` : ""}`}>
                  {pad(i + 1)}
                </span>
                <h3>{j.title}</h3>
                <p>{j.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={`${styles.section} ${styles.sectionLast}`} id="faq">
          <div className={styles.faqGrid}>
            <div>
              <p className={styles.eyebrow}>
                {icons.help}
                QUESTIONS &amp; ANSWERS
              </p>
              <h2 className={styles.title}>Frequently Asked Questions About Process Automation</h2>
              <div className={styles.desk}>
                <span className={styles.deskIcon}>{icons.help}</span>
                <h3>Automation Advisory</h3>
                <p>Have specific workflow hurdles or architectural questions regarding legacy system compatibility?</p>
                <Link href="/contact" className={styles.deskBtn}>
                  Talk with an Engineer
                  <span className={styles.linkArrow}>{icons.arrowRight}</span>
                </Link>
              </div>
            </div>
            <ProcessFaq items={faqs} />
          </div>
        </section>
      </div>
    </div>
  );
}