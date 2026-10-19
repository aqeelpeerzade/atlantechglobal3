import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import SecureCloudFaq, { type SecureCloudFaqItem } from "./securecloudfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Secure Cloud Architecture",
  description:
    "Secure cloud architecture designed for modern business: cloud security design, identity and access management, network security, data protection, monitoring and hardening from Atlantech Global.",
  alternates: { canonical: "/cloud-infrastructure-services/secure-cloud-architecture/" },
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
  idCard: (
    <Icon>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M9 6V4h6v2M8 12h3M8 16h8M14 12h2" />
    </Icon>
  ),
  lockPlus: (
    <Icon>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v4M10 16h4" />
    </Icon>
  ),
  cogRefresh: (
    <Icon>
      <path d="M3 12a6 6 0 0 1 10-4.5L14 9M14 4v5H9M10 14a6 6 0 0 1-3 4.5" />
      <circle cx="17" cy="17" r="2" />
      <path d="M17 12.5v1.5M17 20v1.5M12.5 17H14M20 17h1.5" />
    </Icon>
  ),
  network: (
    <Icon>
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="3" y="16" width="6" height="5" rx="1" />
      <rect x="15" y="16" width="6" height="5" rx="1" />
      <path d="M12 8v4M6 16v-4h12v4" />
    </Icon>
  ),
  eye: (
    <Icon>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  ),
  laptopCheck: (
    <Icon>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M2 20h20M9 10.5l2 2 4-4" />
    </Icon>
  ),
  cloudCheck: (
    <Icon>
      <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 .5 9.5z" />
      <path d="M9.5 13l2 2 3.5-3.5" />
    </Icon>
  ),
  userCog: (
    <Icon>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5 1 0 1.9.2 2.7.6" />
      <circle cx="18" cy="17" r="2" />
      <path d="M18 13.5v1M18 19.5v1M14.5 17h1M20.5 17h1" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    </Icon>
  ),
  lock: (
    <Icon>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2" />
    </Icon>
  ),
  chartUp: (
    <Icon>
      <path d="M4 20v-5M9 20v-8M14 20v-5M19 20V8M3 20h18M4 11l5-4 4 3 6-6" />
    </Icon>
  ),
  shieldHeart: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M12 15.5s-2.5-1.5-2.5-3.2a1.4 1.4 0 0 1 2.5-.8 1.4 1.4 0 0 1 2.5.8c0 1.7-2.5 3.2-2.5 3.2z" />
    </Icon>
  ),
  shieldCheck: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
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
  code: (
    <Icon>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M10 9l-3 3 3 3M14 9l3 3-3 3" />
    </Icon>
  ),
  database: (
    <Icon>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </Icon>
  ),
  server: (
    <Icon>
      <rect x="4" y="4" width="16" height="7" rx="1.5" />
      <rect x="4" y="13" width="16" height="7" rx="1.5" />
      <path d="M8 7.5h.01M8 16.5h.01" />
    </Icon>
  ),
  sync: (
    <Icon>
      <path d="M20 12a8 8 0 0 0-14-5.3L4 9M4 4v5h5M4 12a8 8 0 0 0 14 5.3L20 15M20 20v-5h-5" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  ),
  fingerprint: (
    <Icon>
      <path d="M6 10a6 6 0 0 1 12 0v2M9 20c.8-1.8 1-3.6 1-5.5a2 2 0 0 1 4 0c0 3-.5 5-1.5 7M6 14c0 2.5-.3 4-1 5.5M18 14c0 2-.2 3.5-.8 5M12 4v2" />
    </Icon>
  ),
  key: (
    <Icon>
      <circle cx="7.5" cy="12" r="3.5" />
      <path d="M11 12h10M17 12v3M20 12v2" />
    </Icon>
  ),
  layers: (
    <Icon>
      <path d="M12 4l8 4-8 4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
    </Icon>
  ),
  compass: (
    <Icon>
      <path d="M12 3L6 21M12 3l6 18M8 15h8" />
    </Icon>
  ),
  checklist: (
    <Icon>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9h4M7 13h4M14 13l1.5 1.5L18 11" />
    </Icon>
  ),
  check: (
    <Icon>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </Icon>
  ),
};

const foundation = [
  { icon: icons.idCard, title: "Control access:", desc: "Apply identity-based permissions and least-privilege principles." },
  { icon: icons.lockPlus, title: "Protect sensitive data:", desc: "Establish encryption, secure storage, and data-handling controls." },
  { icon: icons.cogRefresh, title: "Reduce configuration risks:", desc: "Use secure configuration standards and regular reviews." },
  { icon: icons.network, title: "Improve network protection:", desc: "Design network boundaries and access paths around workload requirements." },
  { icon: icons.eye, title: "Strengthen visibility:", desc: "Monitor activity and identify potential security issues." },
  { icon: icons.laptopCheck, title: "Plan for recovery:", desc: "Include backup, resilience, and incident-response considerations in architecture decisions." },
];

const services = [
  { icon: icons.cloudCheck, title: "Cloud Security Design", desc: "Define secure infrastructure standards." },
  { icon: icons.userCog, title: "Identity & Access Management", desc: "Apply role-based permissions and least privilege." },
  { icon: icons.shield, title: "Network Security", desc: "Establish segmentation and controlled connectivity." },
  { icon: icons.lock, title: "Data Protection", desc: "Implement encryption and secure data access." },
  { icon: icons.chartUp, title: "Security Monitoring", desc: "Track activity and identify potential risks." },
  { icon: icons.shieldHeart, title: "Cloud Hardening", desc: "Review configurations and strengthen security controls." },
];

const layers = [
  { icon: icons.shieldCheck, name: "Identity", focus: "Authentication and access permissions" },
  { icon: icons.hub, name: "Network", focus: "Segmentation and secure connectivity" },
  { icon: icons.code, name: "Application", focus: "Secure configurations and vulnerability management" },
  { icon: icons.database, name: "Data", focus: "Encryption, access, and backup" },
  { icon: icons.server, name: "Infrastructure", focus: "Patching and configuration standards" },
  { icon: icons.sync, name: "Operations", focus: "Monitoring and incident response" },
];

const principles = [
  { icon: icons.fingerprint, title: "Zero Trust", desc: "Verify access using identity and security policies." },
  { icon: icons.key, title: "Least Privilege", desc: "Grant only necessary permissions." },
  { icon: icons.layers, title: "Defense in Depth", desc: "Combine multiple security controls." },
  { icon: icons.compass, title: "Secure by Design", desc: "Address security during architecture planning." },
  { icon: icons.checklist, title: "Continuous Assessment", desc: "Review configurations and access regularly." },
];

const readiness = [
  "Map controls to relevant compliance requirements.",
  "Define backup and recovery strategies.",
  "Establish monitoring and incident-response processes.",
  "Document security responsibilities.",
  "Review architecture as business needs change.",
];

const faqs: SecureCloudFaqItem[] = [
  {
    q: "What is secure cloud architecture?",
    a: "Secure cloud architecture designs infrastructure, applications, networks, and data controls to reduce security risks in cloud environments.",
  },
  {
    q: "What are the key components of secure cloud architecture?",
    a: "Key components include identity and access management, network segmentation and secure connectivity, data protection with encryption and backup, secure application and infrastructure configuration, and continuous monitoring with incident response. Together they provide layered protection across the cloud environment.",
  },
  {
    q: "How can businesses improve cloud security?",
    a: "Businesses can improve cloud security by applying least-privilege access, encrypting sensitive data, using secure configuration standards, monitoring activity for unusual behavior, reviewing configurations regularly, and planning backup and incident-response procedures before issues occur.",
  },
  {
    q: "Is cloud infrastructure secure by default?",
    a: "Not entirely. Cloud providers secure the underlying platform, but customers are responsible for how they configure and use it, including access controls, data protection, network design, and monitoring. A secure architecture closes the gaps that default settings can leave open.",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function SecureCloudArchitecturePage() {
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
              Secure Cloud Architecture
            </span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                SECURE CLOUD ARCHITECTURE
              </span>
              <h1 className={styles.heroTitle}>
                Secure Cloud Architecture <span className={styles.gradText}>Designed for Modern Business</span>
              </h1>
              <p className={styles.heroCopy}>
                Build cloud environments with security integrated into every layer, from identity and network design to
                data protection and continuous monitoring. Our secure cloud architecture services help businesses
                reduce exposure, strengthen access controls, and support reliable cloud operations.
              </p>
              <Link href="/contact" className={styles.primaryBtn}>
                Strengthen Your Cloud Security
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </Link>
            </div>

            <div className={styles.heroArtCard}>
              <img
                src={asset("/images/cloud.webp")}
                alt="Secure cloud infrastructure with protected server racks"
                width={1200}
                height={900}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Foundation ---------- */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.title}>Make Security Part of Your Cloud Foundation</h2>
          <p className={styles.lead}>We help businesses:</p>
          <ul className={styles.foundGrid}>
            {foundation.map((f) => (
              <li className={styles.foundCard} key={f.title}>
                <span className={styles.iconTile}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <h2 className={styles.title}>Our Secure Cloud Architecture Services</h2>
          <p className={styles.lead}>
            We design security practices around your cloud environment, business requirements, and operational
            responsibilities.
          </p>
          <ul className={styles.svcGrid}>
            {services.map((s) => (
              <li className={styles.svcCard} key={s.title}>
                <span className={`${styles.iconTile} ${styles.iconTileTint}`}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={styles.discipline}>Core Discipline</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Layers ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <h2 className={styles.title}>Secure Every Layer of Your Cloud</h2>
          <ol className={styles.layers}>
            {layers.map((l, i) => (
              <li key={l.name}>
                <span className={styles.layerNum}>{pad(i + 1)}</span>
                <span className={styles.layerName}>
                  <small>LAYER</small>
                  <b>{l.name}</b>
                </span>
                <span className={styles.focusPill}>
                  {l.icon}
                  <span>
                    Security focus: <b>{l.focus}</b>
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Principles ---------- */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.title}>Apply Security Principles That Scale</h2>
          <p className={styles.lead}>
            Security requirements change as applications, users, and infrastructure grow. We use architecture
            principles that help businesses maintain consistent protection.
          </p>
          <ul className={styles.princGrid}>
            {principles.map((p, i) => (
              <li className={styles.princCard} key={p.title}>
                <span className={`${styles.iconTile} ${styles.iconTileSmall}`}>{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className={styles.princTag}>Principle {pad(i + 1)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Compliance ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className={`container ${styles.compGrid}`}>
          <div>
            <h2 className={styles.title}>Support Compliance, Resilience, and Operational Readiness</h2>
            <p className={styles.lead}>
              Cloud security architecture should support both technical protection and business responsibilities.
            </p>
            <p className={styles.teamsLabel}>Our approach can help your teams:</p>
            <div className={styles.diagram} role="img" aria-label="Compliance, Resilience and Operations connected in sequence">
              <span className={`${styles.dBox} ${styles.d1}`}>Compliance</span>
              <span className={styles.dLink} aria-hidden="true" />
              <span className={`${styles.dBox} ${styles.d2}`}>Resilience</span>
              <span className={styles.dLink} aria-hidden="true" />
              <span className={`${styles.dBox} ${styles.d3}`}>Operations</span>
            </div>
          </div>
          <ul className={styles.readyList}>
            {readiness.map((r) => (
              <li key={r}>
                <span className={styles.checkChip}>{icons.check}</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`} id="faq">
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <p className={styles.eyebrow}>ASSURANCE &amp; GUIDANCE</p>
            <h2 className={styles.title}>Frequently Asked Questions About Secure Cloud Architecture</h2>
            <div className={styles.validation}>
              <span className={styles.iconTile}>{icons.shield}</span>
              <h3>Architecture Validation</h3>
              <p>
                Every layer of your cloud architecture is engineered to establish visibility, minimize attack
                surfaces, and maintain continuous operational readiness.
              </p>
            </div>
          </div>
          <SecureCloudFaq items={faqs} />
        </div>
      </section>
    </div>
  );
}