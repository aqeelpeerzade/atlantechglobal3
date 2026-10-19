import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import CloudMigrationFaq, { type CloudMigrationFaqItem } from "./Cloudmigrationfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cloud Migration Services",
  description:
    "Cloud migration services that move your business forward: readiness assessment, migration strategy, application and data migration, environment setup and post-migration optimization from Atlantech Global.",
  alternates: { canonical: "/cloud-infrastructure-services/cloud-migration/" },
};

/** Where the "Cloud Infrastructure Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/cloud-infrastructure-services";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons = {
  scan: (
    <Icon>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
      <path d="M12 8l3.5 2v4L12 16l-3.5-2v-4z" />
    </Icon>
  ),
  resize: (
    <Icon>
      <path d="M5 4h14M5 20h14M12 8v8M9 10l3-3 3 3M9 14l3 3 3-3" />
    </Icon>
  ),
  refresh: (
    <Icon>
      <path d="M20 12a8 8 0 0 0-14-5.3L4 9M4 4v5h5M4 12a8 8 0 0 0 14 5.3L20 15M20 20v-5h-5" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  ),
  piggy: (
    <Icon>
      <path d="M5 11a7 6 0 0 1 14 0v2l2 1v3h-3l-1 2h-3v-2h-4v2H7l-1-3a5 5 0 0 1-1-3zM15 9h.01" />
    </Icon>
  ),
  server: (
    <Icon>
      <rect x="4" y="4" width="16" height="7" rx="1.5" />
      <rect x="4" y="13" width="16" height="7" rx="1.5" />
      <path d="M8 7.5h.01M8 16.5h.01" />
    </Icon>
  ),
  cloud: (
    <Icon>
      <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 .5 9.5z" />
    </Icon>
  ),
  swap: (
    <Icon>
      <path d="M7 4L3 8l4 4M3 8h14M17 12l4 4-4 4M21 16H7" />
    </Icon>
  ),
  shieldCheck: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </Icon>
  ),
  checklist: (
    <Icon>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9h4M7 13h4M14 13l1.5 1.5L18 11" />
    </Icon>
  ),
  fork: (
    <Icon>
      <path d="M12 21v-8M12 13L6 7M12 13l6-6M6 7V3M18 7V3" />
    </Icon>
  ),
  cube: (
    <Icon>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5" />
    </Icon>
  ),
  database: (
    <Icon>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </Icon>
  ),
  sliders: (
    <Icon>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M8 14v6" />
    </Icon>
  ),
  gauge: (
    <Icon>
      <path d="M4 17a8 8 0 1 1 16 0M12 17l4-5M7 17h.01M17 17h.01" />
    </Icon>
  ),
  arrow: (
    <Icon>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  ),
  wallet: (
    <Icon>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 10h18M16 15h2" />
    </Icon>
  ),
  wrench: (
    <Icon>
      <circle cx="12" cy="12" r="8" />
      <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
    </Icon>
  ),
  trend: (
    <Icon>
      <path d="M3 17l5-5 4 3 6-7M15 8h3v3M5 4v2M4 5h2M10 4v1M9.5 4.5h1" />
    </Icon>
  ),
  flex: (
    <Icon>
      <rect x="3" y="5" width="12" height="5" rx="1.5" />
      <rect x="3" y="14" width="12" height="5" rx="1.5" />
      <path d="M18 8l1 2 2 .5-1.5 1.5.4 2.2L18 13l-1.9 1.2.4-2.2L15 10.5l2-.5z" />
    </Icon>
  ),
  layers: (
    <Icon>
      <path d="M12 4l8 4-8 4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
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
};

const benefits = [
  { icon: icons.scan, title: "Reduce infrastructure constraints", desc: "Move beyond limitations of legacy systems and on-premises environments." },
  { icon: icons.resize, title: "Improve scalability", desc: "Adjust computing resources as business demands change." },
  { icon: icons.refresh, title: "Support business continuity", desc: "Plan migration activities to minimize downtime and service interruptions." },
  { icon: icons.piggy, title: "Optimize cloud spending", desc: "Align infrastructure choices with performance and budget requirements." },
];

const services = [
  { icon: icons.checklist, title: "Cloud Readiness Assessment", desc: "Review existing infrastructure, applications, dependencies, and migration requirements.", tag: "PHASE INITIATION" },
  { icon: icons.fork, title: "Migration Strategy & Planning", desc: "Define workloads, migration sequence, timelines, and risk controls.", tag: "ARCHITECTURE MATRIX" },
  { icon: icons.cube, title: "Application Migration", desc: "Move business applications while accounting for compatibility, performance, and dependencies.", tag: "WORKLOAD RELOCATION" },
  { icon: icons.database, title: "Data Migration Services", desc: "Transfer business data with attention to integrity, security, validation, and accessibility.", tag: "INTEGRITY CHECK" },
  { icon: icons.sliders, title: "Cloud Environment Setup", desc: "Configure the target cloud environment to support migrated workloads.", tag: "ENVIRONMENT PROVISIONING" },
  { icon: icons.gauge, title: "Post-Migration Optimization", desc: "Review performance, resource usage, and operational requirements after migration.", tag: "CONTINUOUS EFFICIENCY" },
];

const approaches = [
  { code: "R1", name: "Rehost", when: "When speed and minimal application changes are priorities" },
  { code: "R2", name: "Replatform", when: "When selected components need cloud optimization" },
  { code: "R3", name: "Refactor", when: "When applications need deeper changes to use cloud-native capabilities" },
  { code: "R4", name: "Repurchase", when: "When replacing an existing application with a cloud-based alternative" },
  { code: "R5", name: "Retire or retain", when: "When some systems are no longer required or should remain in their current environment" },
];

const process = [
  { tag: "DISCOVERY", title: "Assess", desc: "Identify infrastructure, dependencies, risks, and business priorities." },
  { tag: "BLUEPRINT", title: "Plan", desc: "Select migration methods, define milestones, and prepare rollback options." },
  { tag: "EXECUTION", title: "Migrate", desc: "Transfer workloads and data in planned phases." },
  { tag: "ASSURANCE", title: "Validate", desc: "Test application functionality, data accuracy, security, and performance." },
  { tag: "REFINEMENT", title: "Optimize", desc: "Fine-tune the cloud environment and address post-migration issues." },
];

const gainsLeft = [
  { icon: icons.flex, text: "Greater infrastructure flexibility as workloads and demand change." },
  { icon: icons.cloud, text: "Improved access to cloud-native tools and managed services." },
];
const gainsRight = [
  { icon: icons.wallet, text: "Better alignment between technology investments and business priorities." },
  { icon: icons.wrench, text: "Opportunities to modernize applications and reduce legacy infrastructure dependencies." },
  { icon: icons.trend, text: "A foundation for future automation, analytics, and digital initiatives." },
];

const faqs: CloudMigrationFaqItem[] = [
  {
    q: "What are Cloud Migration Services?",
    a: "Cloud Migration Services help businesses move applications, data, and IT workloads from on-premises systems or existing cloud environments to a new cloud platform.",
  },
  {
    q: "How long does a cloud migration take?",
    a: "Timelines depend on the number of workloads, their dependencies, data volumes, and the migration approach chosen. A focused migration of a few applications may take weeks, while a large, complex estate can take several months. A readiness assessment gives you a realistic schedule with milestones.",
  },
  {
    q: "What is the difference between cloud migration and data migration?",
    a: "Cloud migration moves whole workloads, including applications, infrastructure, and configurations, to the cloud. Data migration is one part of that effort: transferring databases and files with attention to integrity, security, and validation. A data migration can also happen on its own, for example between storage systems.",
  },
  {
    q: "How can businesses reduce downtime during cloud migration?",
    a: "Downtime is reduced by assessing dependencies up front, migrating in planned phases, keeping data synchronized until cutover, testing before go-live, and preparing rollback options. Scheduling cutovers outside peak business hours also limits the impact on users.",
  },
  {
    q: "How do I know if my business is ready for cloud migration?",
    a: "Readiness depends on having a clear picture of your applications and dependencies, defined business goals, security and compliance requirements, and the skills to run workloads in the cloud. A cloud readiness assessment reviews these areas and highlights any gaps to close before you migrate.",
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

export default function CloudMigrationPage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={PARENT_HREF}>Cloud Infrastructure Services</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.crumbCurrent} aria-current="page">
              Cloud Migration
            </span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                CLOUD INFRASTRUCTURE SERVICES • CLOUD MIGRATION
              </span>
              <h1 className={styles.heroTitle}>Cloud Migration Services That Move Your Business Forward</h1>
              <p className={styles.heroCopy}>
                Move applications, workloads, and business data to the cloud with a migration strategy designed around
                performance, continuity, and long-term scalability. Our Cloud Migration Services help businesses
                modernize infrastructure while managing complexity, risk, and operational disruption.
              </p>
              <Link href="/contact" className={styles.primaryBtn}>
                Plan Your Cloud Migration
                <ExternalArrow />
              </Link>
            </div>

            <div className={styles.heroArtCard}>
              <img
                src={asset("/images/cloud.webp")}
                alt="Data center racks illustrating workloads moving from on-premises systems to the cloud"
                width={1200}
                height={900}
                fetchPriority="high"
              />
              <div className={styles.heroCaption}>
                <span className={styles.liveDot} />
                INFRASTRUCTURE RUNTIME • WORKLOAD MODERNIZATION • ACTIVE MATRIX
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Move without disruption ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <h2 className={styles.title}>Move to the Cloud Without Disrupting Operations</h2>
          <p className={styles.lead}>
            Cloud migration is more than transferring workloads. It is about creating an infrastructure foundation that
            supports your business goals.
          </p>
          <p className={styles.approachLabel}>Our migration approach helps you:</p>

          <div className={styles.moveGrid}>
            <div className={styles.archCard}>
              <p className={styles.archLabel}>TRANSFORMATION ARCHITECTURE</p>
              <div className={styles.archLegacy}>
                <span className={styles.archIcon}>{icons.server}</span>
                <span>
                  <b>Legacy Systems / On-Premises</b>
                  <small>Constrained Hardware &amp; Siloed Data</small>
                </span>
              </div>
              <span className={styles.pathway}>
                {icons.swap}
                MIGRATION PATHWAY
              </span>
              <div className={styles.archCloud}>
                <span className={`${styles.archIcon} ${styles.archIconSolid}`}>{icons.cloud}</span>
                <span>
                  <b>Cloud Infrastructure Foundation</b>
                  <small>Elastic Scaling &amp; Modern Resiliency</small>
                </span>
              </div>
              <p className={styles.archNote}>
                {icons.shieldCheck}
                Architectural Alignment &amp; Zero Interruption Protocols
              </p>
            </div>

            {benefits.map((b) => (
              <article className={styles.benefitCard} key={b.title}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- End-to-end services ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.centerHead}>
            <h2 className={styles.title}>Our End-to-End Cloud Migration Services</h2>
            <p className={styles.lead}>
              From initial assessment to post-migration optimization, we manage the key stages of your cloud transition.
            </p>
          </div>
          <ul className={styles.svcGrid}>
            {services.map((s, i) => (
              <li className={styles.svcCard} key={s.title}>
                <div className={styles.svcTop}>
                  <span className={styles.svcNum}>{pad(i + 1)}</span>
                  <span className={styles.svcIcon}>{s.icon}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={styles.svcTag}>{s.tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Migration approach ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <div className={styles.splitHead}>
            <div>
              <h2 className={styles.title}>Choose the Right Migration Approach</h2>
              <p className={styles.lead}>
                Every workload has different technical and business requirements. We help determine the right migration
                method for each application or system.
              </p>
            </div>
            <span className={styles.matrixBadge}>
              <span className={styles.pillDot} />
              TAILORED STRATEGY MATRIX
            </span>
          </div>
          <ul className={styles.approachList}>
            {approaches.map((a) => (
              <li key={a.code}>
                <span className={styles.rChip}>{a.code}</span>
                <b>{a.name}</b>
                <span className={styles.when}>{a.when}</span>
                <span className={styles.rowArrow}>{icons.arrow}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Structured process ---------- */}
      <section className={styles.section}>
        <div className="container">
          <span className={styles.softChip}>METHODICAL DELIVERY</span>
          <h2 className={`${styles.title} ${styles.titleGap}`}>A Structured Migration Process</h2>
          <ol className={styles.processGrid}>
            {process.map((p, i) => (
              <li className={styles.processCard} key={p.title}>
                <div className={styles.processTop}>
                  <span className={styles.processNum}>{pad(i + 1)}</span>
                  <span className={styles.tagChip}>{p.tag}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className={styles.milestone}>
                  Milestone {i + 1} {icons.arrow}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Business gains ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <div className={styles.centerHead}>
            <h2 className={styles.title}>What Your Business Gains from Cloud Migration</h2>
          </div>
          <div className={styles.gainsGrid}>
            <div className={`${styles.gainCol} ${styles.gainLeft}`}>
              {gainsLeft.map((g) => (
                <article className={styles.gainCard} key={g.text}>
                  <span className={styles.benefitIcon}>{g.icon}</span>
                  <p>{g.text}</p>
                </article>
              ))}
            </div>
            <article className={styles.agility}>
              <span className={styles.agilityIcon}>{icons.layers}</span>
              <h3>Foundation of Agility</h3>
              <p>Cohesive modern architecture tailored for long-term scalability and business velocity.</p>
              <span className={styles.tagChip}>ENTERPRISE IMPACT</span>
            </article>
            <div className={styles.gainCol}>
              {gainsRight.map((g) => (
                <article className={styles.gainCard} key={g.text}>
                  <span className={styles.benefitIcon}>{g.icon}</span>
                  <p>{g.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={styles.section} id="faq">
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <h2 className={styles.title}>Frequently Asked Questions About Cloud Migration</h2>
            <p className={styles.lead}>
              Clear answers regarding workloads, cutovers, downtime mitigation, and strategic cloud readiness.
            </p>
            <div className={styles.desk}>
              <span className={styles.deskIcon}>{icons.headset}</span>
              <h3>Cloud Advisory Desk</h3>
              <p>Have specific workload constraints, compliance considerations, or application dependencies?</p>
              <Link href="/contact" className={styles.deskBtn}>
                Request Advisory Review {icons.arrow}
              </Link>
            </div>
          </div>
          <CloudMigrationFaq items={faqs} />
        </div>
      </section>
    </div>
  );
}