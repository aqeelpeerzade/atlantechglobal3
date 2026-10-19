import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import { ArrowIcon } from "@/lib/icons";
import MultiCloudFaq, { type MultiCloudFaqItem } from "./multicloudfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Multi-Cloud Environments",
  description:
    "Multi-cloud environments built around your business needs: strategy and planning, cloud integration, workload distribution, centralized monitoring, cost management and governance from Atlantech Global.",
  alternates: { canonical: "/cloud-infrastructure-services/multi-cloud-environments/" },
};

/** Where the "Cloud Infrastructure Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/cloud-infrastructure-services";

/* Small stroke icons, all drawn on a 24x24 grid and styled via CSS. */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons = {
  layout: (
    <Icon>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M10 10v10" />
    </Icon>
  ),
  sync: (
    <Icon>
      <path d="M20 12a8 8 0 0 0-14-5.3L4 9M4 4v5h5M4 12a8 8 0 0 0 14 5.3L20 15M20 20v-5h-5" />
    </Icon>
  ),
  globe: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </Icon>
  ),
  wallet: (
    <Icon>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 10h18M16 15h2" />
    </Icon>
  ),
  chartSearch: (
    <Icon>
      <path d="M3 17l5-5 4 3 5-6" />
      <circle cx="18" cy="16" r="2.5" />
      <path d="M20 18l2 2" />
    </Icon>
  ),
  compass: (
    <Icon>
      <path d="M12 3L6 21M12 3l6 18M8 15h8" />
    </Icon>
  ),
  plugs: (
    <Icon>
      <path d="M8 3v5M16 3v5M5 8h6v3a3 3 0 0 1-6 0zM13 8h6v3a3 3 0 0 1-6 0zM8 14v7M16 14v7" />
    </Icon>
  ),
  fork: (
    <Icon>
      <path d="M12 21v-8M12 13L6 7M12 13l6-6M6 7V3M18 7V3" />
    </Icon>
  ),
  bars: (
    <Icon>
      <path d="M4 20V12M9 20V8M14 20V14M19 20V5M3 20h18" />
    </Icon>
  ),
  piggy: (
    <Icon>
      <path d="M5 11a7 6 0 0 1 14 0v2l2 1v3h-3l-1 2h-3v-2h-4v2H7l-1-3a5 5 0 0 1-1-3zM15 9h.01" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    </Icon>
  ),
  building: (
    <Icon>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </Icon>
  ),
  database: (
    <Icon>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </Icon>
  ),
  globeSearch: (
    <Icon>
      <circle cx="11" cy="11" r="7" />
      <path d="M4 11h14M11 4c2 2 3 4.5 3 7s-1 5-3 7M20 20l-3.5-3.5" />
    </Icon>
  ),
  terminal: (
    <Icon>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 10l3 2-3 2M13 15h4" />
    </Icon>
  ),
  badgeCheck: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </Icon>
  ),
  bolt: (
    <Icon>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </Icon>
  ),
  lock: (
    <Icon>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </Icon>
  ),
  sliders: (
    <Icon>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M8 14v6" />
    </Icon>
  ),
  expand: (
    <Icon>
      <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
    </Icon>
  ),
  network: (
    <Icon>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="12" cy="4" r="1.6" />
      <circle cx="4.5" cy="16.5" r="1.6" />
      <circle cx="19.5" cy="16.5" r="1.6" />
      <path d="M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3" />
    </Icon>
  ),
  upload: (
    <Icon>
      <path d="M12 19V6M7 11l5-5 5 5M5 21h14" />
    </Icon>
  ),
  eye: (
    <Icon>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  ),
  help: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" />
    </Icon>
  ),
  fabric: (
    <Icon>
      <circle cx="5" cy="6" r="1.8" />
      <circle cx="5" cy="18" r="1.8" />
      <circle cx="5" cy="12" r="1.8" />
      <path d="M7 6h4l3 6-3 6H7M7 12h12M16 9l3 3-3 3" />
    </Icon>
  ),
};

const harmony = [
  { num: "01", icon: icons.layout, title: "Choose the right platform for each workload", desc: "Match applications with the capabilities they require." },
  { num: "02", icon: icons.sync, title: "Improve flexibility", desc: "Reduce reliance on a single provider for every workload." },
  { num: "03", icon: icons.globe, title: "Support geographic requirements", desc: "Consider regional infrastructure and data residency needs." },
  { num: "04", icon: icons.wallet, title: "Manage costs more effectively", desc: "Monitor usage and resource allocation across environments." },
  { num: "05", icon: icons.chartSearch, title: "Maintain operational visibility", desc: "Establish consistent oversight of cloud resources and services." },
];

const services = [
  { layer: "LAYER 01 • FOUNDATION", icon: icons.compass, title: "Strategy & Planning", desc: "Define cloud requirements and workload priorities." },
  { layer: "LAYER 02 • CONNECTIONS", icon: icons.plugs, title: "Cloud Integration", desc: "Connect applications and services across platforms." },
  { layer: "LAYER 03 • MOVEMENT", icon: icons.fork, title: "Workload Distribution", desc: "Match workloads with suitable cloud environments." },
  { layer: "LAYER 04 • VISIBILITY", icon: icons.bars, title: "Centralized Monitoring", desc: "Improve visibility into performance and service health." },
  { layer: "LAYER 05 • OPTIMIZATION", icon: icons.piggy, title: "Cost Management", desc: "Identify resource optimization opportunities." },
  { layer: "LAYER 06 • GOVERNANCE", icon: icons.shield, title: "Cloud Governance", desc: "Establish consistent operational and security policies." },
];

const workloads = [
  { icon: icons.building, kicker: "TIER 1 • MISSION CRITICAL", title: "Business-Critical Applications", desc: "Plan availability and recovery.", tagIcon: icons.badgeCheck, tag: "Zero-Downtime Blueprint", tone: "violet" },
  { icon: icons.database, kicker: "HIGH-THROUGHPUT ANALYTICS", title: "Data-Intensive Workloads", desc: "Consider storage, latency, and transfer costs.", tagIcon: icons.bolt, tag: "Optimized Pipe Ingress", tone: "indigo" },
  { icon: icons.globeSearch, kicker: "JURISDICTIONAL SOVEREIGN", title: "Regional Applications", desc: "Account for geographic and compliance needs.", tagIcon: icons.lock, tag: "Data Sovereignty Guardrails", tone: "purple" },
  { icon: icons.terminal, kicker: "RAPID AGILE SANDBOX", title: "Development Environments", desc: "Support flexible resource provisioning.", tagIcon: icons.sliders, tag: "Ephemeral Teardown Mesh", tone: "violet" },
] as const;

const operations = [
  { title: "Unified visibility", desc: "Monitor services and infrastructure across cloud providers." },
  { title: "Consistent access controls", desc: "Establish identity and permission practices across environments." },
  { title: "Repeatable provisioning", desc: "Use automation and infrastructure-as-code practices where appropriate." },
  { title: "Standardized governance", desc: "Apply policies for security, resource usage, and operational responsibilities." },
  { title: "Coordinated incident response", desc: "Define how teams identify, investigate, and resolve issues across platforms." },
];

const future = [
  { icon: icons.expand, title: "Easier workload expansion and relocation.", phase: "Phase Alpha" },
  { icon: icons.network, title: "Integration with existing systems.", phase: "Phase Beta" },
  { icon: icons.upload, title: "Flexible modernization initiatives.", phase: "Phase Gamma" },
  { icon: icons.shield, title: "Workload-specific resilience planning.", phase: "Phase Delta" },
  { icon: icons.eye, title: "Improved visibility into cloud operations.", phase: "Phase Epsilon" },
];

const faqs: MultiCloudFaqItem[] = [
  {
    q: "What is a multi-cloud environment?",
    a: "A multi-cloud environment uses services from two or more cloud providers to run applications, store data, or support business operations.",
  },
  {
    q: "What is the difference between multi-cloud and hybrid cloud?",
    a: "Multi-cloud combines services from multiple cloud providers, such as AWS, Azure, and Google Cloud. Hybrid cloud connects public cloud services with private infrastructure, such as on-premises data centers. The two approaches can be combined, so an organization may run a hybrid environment that also spans several public cloud providers.",
  },
  {
    q: "Why do businesses use multi-cloud solutions?",
    a: "Businesses use multi-cloud to match each workload with the platform that suits it best, reduce reliance on a single provider, meet regional and data residency requirements, improve resilience, and keep flexibility as technology needs change.",
  },
  {
    q: "Is multi-cloud more expensive?",
    a: "It can be if it is unmanaged, because duplicated tooling, data transfer charges, and fragmented oversight add cost. With clear planning, centralized monitoring, and consistent governance, multi-cloud lets you place each workload where it is most cost-effective and keeps spending visible across providers.",
  },
];

export default function MultiCloudEnvironmentsPage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.crumbDot} aria-hidden="true" />
            <Link href={PARENT_HREF}>Cloud Infrastructure Services</Link>
            <span className={styles.crumbDot} aria-hidden="true" />
            <span className={styles.crumbCurrent} aria-current="page">
              Multi Cloud Environments
            </span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                CLOUD INFRASTRUCTURE SERVICES • MULTI CLOUD ENVIRONMENTS
              </span>
              <h1 className={styles.heroTitle}>
                Multi-Cloud Environments <span className={styles.gradText}>Built Around Your Business Needs</span>
              </h1>
              <p className={styles.heroCopy}>
                Use cloud services across multiple providers with a strategy that balances flexibility, performance,
                security, and cost. Atlantech Global helps businesses design and manage multi-cloud environments that
                connect workloads, simplify operations, and support evolving technology requirements.
              </p>
              <Link href="/contact" className={styles.primaryBtn}>
                Design Your Multi-Cloud Strategy
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </Link>
              <p className={styles.heroNote}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l2.2 1.7 2.8-.2 1 2.6 2.4 1.5-.8 2.7 .8 2.7-2.4 1.5-1 2.6-2.8-.2L12 21l-2.2-1.7-2.8.2-1-2.6-2.4-1.5.8-2.7-.8-2.7L5.999 7.1l1-2.6 2.8.2z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                Architectural Multi-Mesh Blueprint
              </p>
            </div>

            <div className={styles.heroArtCard}>
              <img
                src={asset("/images/cloud.webp")}
                alt="Multi-cloud infrastructure with connected servers glowing in purple"
                width={1200}
                height={900}
                fetchPriority="high"
              />
              <div className={styles.heroCaption}>
                <span className={styles.pillDot} />
                <span>ORCHESTRATION RUNTIME • MULTI-CLOUD GOVERNANCE • ACTIVE MESH</span>
                <span className={styles.captionIcon}>{icons.sync}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 01 Platform harmonization ---------- */}
      <section className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow}>01 / PLATFORM HARMONIZATION</p>
          <h2 className={styles.title}>Make Multiple Cloud Platforms Work Together</h2>
          <p className={styles.lead}>A well-planned multi-cloud environment helps businesses:</p>

          <div className={styles.harmonyGrid}>
            {harmony.map((h, i) => (
              <article className={`${styles.hCard} ${styles[`h${i + 1}`]}`} key={h.num}>
                <div className={styles.hTop}>
                  <span className={styles.hNum}>{h.num}</span>
                  <span className={styles.hIcon}>{h.icon}</span>
                </div>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                </div>
              </article>
            ))}

            <article className={styles.fabricCard}>
              <div className={styles.fabricTop}>
                <span>CORE FABRIC</span>
                <span className={styles.fabricIcon}>{icons.fabric}</span>
              </div>
              <div className={styles.fabricBody}>
                <span className={styles.fabricChip}>
                  <span className={styles.chipDot} />
                  Unified Multi-Cloud Fabric
                </span>
                <h3>Connected Architecture Without Vendor Bottlenecks</h3>
                <p>
                  Cross-cluster routing, sovereign compliance, and workload-aware telemetry configured across every
                  tier.
                </p>
              </div>
              <div className={styles.fabricFoot}>
                Active Synchronization Mesh
                {icons.sync}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- 02 Core capabilities ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <div className={styles.splitHead}>
            <div>
              <p className={styles.eyebrow}>02 / CORE CAPABILITIES</p>
              <h2 className={styles.title}>Our Multi-Cloud Services</h2>
            </div>
            <p className={styles.headNote}>
              {icons.fabric}
              Full lifecycle delivery: Foundation to Governance
            </p>
          </div>
          <ul className={styles.svcGrid}>
            {services.map((s) => (
              <li className={styles.svcCard} key={s.title}>
                <div className={styles.svcTop}>
                  <span className={styles.layerChip}>{s.layer}</span>
                  <span className={styles.svcIcon}>{s.icon}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/contact" className={styles.bpLink}>
                  Explore Blueprint <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 03 Application-first topology ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <div className={styles.centerHead}>
            <p className={styles.eyebrow}>03 / APPLICATION-FIRST TOPOLOGY</p>
            <h2 className={styles.title}>Design Around Your Workloads</h2>
            <p className={styles.lead}>Different applications need different infrastructure capabilities.</p>
          </div>
          <ul className={styles.wlGrid}>
            {workloads.map((w) => (
              <li className={`${styles.wlCard} ${styles[`tone_${w.tone}`]}`} key={w.title}>
                <span className={styles.wlIcon}>{w.icon}</span>
                <p className={styles.wlKicker}>{w.kicker}</p>
                <h3>{w.title}</h3>
                <p className={styles.wlDesc}>{w.desc}</p>
                <span className={styles.wlTag}>
                  {w.tagIcon}
                  {w.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 04 Operational discipline ---------- */}
      <section className={styles.section}>
        <div className={`container ${styles.opsGrid}`}>
          <div>
            <p className={styles.eyebrow}>04 / OPERATIONAL DISCIPLINE</p>
            <h2 className={styles.title}>Simplify Multi-Cloud Operations</h2>
            <p className={styles.lead}>A multi-cloud environment needs clear operating standards to avoid fragmented management.</p>
            <div className={styles.approach}>
              <h3>Our approach focuses on:</h3>
              <p>Centralizing controls while preserving provider-native speed across distributed environments.</p>
              <span className={styles.approachTag}>
                <span className={styles.approachDot} />
                Real-time Cross-Cloud Orchestration
              </span>
            </div>
          </div>
          <ol className={styles.opsList}>
            {operations.map((o, i) => (
              <li key={o.title}>
                <span className={styles.opsNum}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{o.title}</h3>
                  <p>{o.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 05 Future growth ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>05 / FUTURE-READY EXTENSIBILITY</p>
          <h2 className={styles.title}>Build for Future Growth</h2>
          <p className={styles.lead}>A structured multi-cloud environment can support:</p>
          <ul className={styles.futureGrid}>
            {future.map((f) => (
              <li className={styles.futureCard} key={f.phase}>
                <span className={styles.futureIcon}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.phase}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 06 FAQ ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`} id="faq">
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <p className={styles.eyebrow}>06 / FREQUENTLY ASKED QUESTIONS</p>
            <h2 className={styles.title}>Frequently Asked Questions About Multi Cloud</h2>
            <div className={styles.desk}>
              <span className={styles.deskIcon}>{icons.help}</span>
              <h3>Multi-Cloud Advisory Desk</h3>
              <p>
                Have complex workload dependencies or multi-provider requirements? Connect with our cloud architects.
              </p>
              <Link href="/contact" className={styles.primaryBtn}>
                Request Architecture Review
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </Link>
            </div>
          </div>
          <MultiCloudFaq items={faqs} />
        </div>
      </section>
    </div>
  );
}