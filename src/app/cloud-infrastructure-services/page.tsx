import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { CheckIcon } from "@/lib/icons";
import CloudFaq, { type CloudFaqItem } from "./CloudFaq";
import ConsultingExplorer, { type ConsultingService } from "./ConsultingExplorer";
import ContactPanel from "./ContactPanel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cloud Infrastructure Services",
  description:
    "Secure, scalable cloud infrastructure services: cloud strategy and migration, multi-cloud and hybrid solutions, cloud security and compliance, and DevOps consulting from Atlantech Global.",
  alternates: { canonical: "/cloud-infrastructure/" },
};

const architectureLayers = [
  { title: "[Applications]", detail: "Modernized Microservices, Legacy Workloads & APIs", tag: "Layer 01" },
  { title: "[Cloud Platform]", detail: "Kubernetes Clusters, Hyperscaler Fabric (AWS / Azure / GCP)", tag: "Layer 02" },
  { title: "[Data + Infrastructure]", detail: "Distributed Storage, Resilient Databases, Terraform IaC", tag: "Layer 03" },
  { title: "[Security + Monitoring]", detail: "Zero-Trust Policies, SIEM Threat Detection & Observability", tag: "Zero-Trust Core" },
];

const services: ConsultingService[] = [
  {
    title: "Cloud Strategy & Migration",
    summary:
      "Expert Cloud Migration Services and Data Migration Services seamlessly migrate applications, workloads, infrastructure, minimizing downtime, reducing risk, maximizing business agility efficiently.",
    detail: {
      heading: "End-to-End Cloud Strategy, Lift-and-Shift & Cloud-Native Replatforming",
      body: "Our Cloud Strategy & Migration service delivers a risk-free methodology to transition complex workloads to elastic cloud topologies. By leveraging automated migration tooling and phased execution blueprints, we eliminate service disruption while re-factoring architectures to minimize cloud cost overheads.",
      points: [
        "Lift-and-shift & automated replatforming",
        "Kubernetes container orchestration",
        "Zero-downtime database migration",
        "Automated CI/CD pipeline implementation",
        "Zero-trust network security model",
        "Continuous FinOps cost governance",
      ],
    },
  },
  {
    title: "Multi-Cloud & Hybrid Cloud Solutions",
    summary:
      "Design, deploy, and manage hybrid and multi-cloud environments that improve flexibility, optimize costs, ensure high availability, and simplify operations across cloud platforms.",
    detail: {
      heading: "Unified Operations Across Multi-Cloud & Hybrid Environments",
      body: "We architect portable, vendor-neutral platforms that span AWS, Azure, Google Cloud, and your private data centers. A single governance and observability plane keeps workloads resilient, costs visible, and operations simple, no matter where each workload runs.",
      points: [
        "Hybrid connectivity & workload placement",
        "Cross-cloud Kubernetes orchestration",
        "Centralized identity & policy governance",
        "High-availability & failover design",
        "Unified monitoring & observability",
        "Cross-cloud cost visibility & FinOps",
      ],
    },
  },
  {
    title: "Cloud Security & Compliance",
    summary:
      "Protect environments with comprehensive Cloud Security Services, ensuring encryption, compliance, continuous monitoring, threat detection, identity management, and secure operations.",
    detail: {
      heading: "Zero-Trust Security & Continuous Compliance by Design",
      body: "Security is built into every layer of your cloud environment, not bolted on afterwards. We combine identity-first access controls, encryption, and automated policy enforcement with continuous threat detection so your platform stays protected and audit-ready.",
      points: [
        "Zero-trust network & identity architecture",
        "Encryption for data at rest and in transit",
        "SIEM threat detection & response",
        "Automated compliance & audit evidence",
        "Secrets, keys & privileged access management",
        "Continuous vulnerability scanning",
      ],
    },
  },
  {
    title: "DevOps Consulting Services",
    summary:
      "Modernize legacy infrastructure using cloud-native technologies, automation, containerization, and DevOps practices to improve performance, scalability, and operational efficiency.",
    detail: {
      heading: "Cloud-Native DevOps, CI/CD & Platform Engineering",
      body: "We help engineering teams ship faster and more safely by automating the path from commit to production. Infrastructure as code, containerization, and self-healing pipelines replace manual releases with repeatable, observable delivery.",
      points: [
        "Automated CI/CD pipeline implementation",
        "Infrastructure as Code with Terraform",
        "Containerization & Kubernetes adoption",
        "GitOps release workflows",
        "Observability & automated self-healing",
        "Developer platform & runbook automation",
      ],
    },
  },
];

const journey = [
  { title: "Strategy", desc: "Readiness audit, cloud TCO modeling, and migration roadmap." },
  { title: "Migration", desc: "Zero-downtime workload transition and data synchronizations." },
  { title: "Architecture", desc: "Resilient cloud-native topologies and microservices design." },
  { title: "Security", desc: "Zero-trust architecture, identity federation & compliance audits." },
  { title: "Automation", desc: "Terraform IaC, GitOps workflows, and automated self-healing." },
  { title: "Optimization", desc: "Continuous FinOps telemetry, cost shaving, and scale-tuning." },
];

const outcomes = [
  "Accelerate modernization with cloud transformation services tailored to your business goals and evolving infrastructure needs.",
  "Build secure, scalable cloud environments that improve performance, availability, and operational resilience.",
  "Modernize legacy applications and workloads with minimal disruption and faster deployment cycles.",
  "Optimize cloud resources to reduce infrastructure costs while maximizing performance and efficiency.",
  "Strengthen business continuity through disaster recovery, backup strategies, and high-availability architecture.",
  "Enable faster innovation with cloud-native technologies, automation, and scalable infrastructure management.",
];

const foundation = [
  { title: "Cloud Architecture", desc: "Design secure, scalable cloud environments aligned with evolving business objectives." },
  { title: "Security & Zero-Trust", desc: "Modernize legacy infrastructure to improve agility, performance, and operational efficiency." },
  { title: "Applications & Microservices", desc: "Optimize workloads for higher availability, reliability, and cost-effective resource utilization." },
  { title: "Data & Telemetry", desc: "Strengthen business continuity with resilient architectures and disaster recovery capabilities." },
  { title: "Infrastructure as Code", desc: "Enhance security, governance, and compliance across cloud environments." },
  { title: "Disaster Recovery & Integration", desc: "Enable seamless integration between applications, data, and enterprise systems." },
];

const faqs: CloudFaqItem[] = [
 
{
  q: "What are cloud infrastructure services?",

  a: [
    "Cloud infrastructure services provide the computing resources required to run business applications, including servers, storage, networking, virtualization, security, and cloud management. These services help organizations modernize IT infrastructure, improve scalability, reduce operational costs, and support business continuity across public, private, and hybrid cloud environments.",
  ],
},

{
  q: "Why should businesses migrate to cloud infrastructure?",

  a: [
    "Migrating to cloud infrastructure enables businesses to improve agility, reduce hardware costs, enhance security, and scale resources on demand. Cloud adoption also increases application performance, simplifies disaster recovery, supports remote work, and accelerates digital transformation while reducing the complexity of managing on-premises infrastructure.",
  ],
},

{
  q: "What is the difference between public, private, and hybrid cloud?",

  a: [],

  list: {
    intro: "The three cloud deployment models serve different business needs:",

    items: [
      "Public Cloud: Infrastructure hosted by providers like AWS, Microsoft Azure, or Google Cloud with shared resources.",
      "Private Cloud: Dedicated cloud infrastructure designed exclusively for a single organization with greater control and security.",
      "Hybrid Cloud: Combines public and private cloud environments, allowing businesses to balance flexibility, performance, and compliance.",
    ],
  },

  outro: "The right choice depends on security requirements, workload demands, and business objectives.",
},

{
  q: "How do cloud infrastructure services improve business security?",

  a: [
    "Cloud infrastructure services improve security through encryption, identity and access management (IAM), multi-factor authentication (MFA), continuous monitoring, automated backups, disaster recovery, network protection, and compliance controls. These capabilities help organizations protect critical data, minimize cyber risks, and maintain secure, resilient cloud environments.",
  ],
},

{
  q: "How do enterprise cloud solutions support business growth?",

  a: [
    "Enterprise cloud solutions help businesses scale operations by providing flexible infrastructure, centralized management, automated resource provisioning, and seamless application integration. They improve operational efficiency, support business continuity, enable faster innovation, and allow organizations to adapt quickly to changing market demands without significant infrastructure investments.",
  ],
},

{
  q: "How do I choose the right cloud infrastructure partner?",

  a: [
    "Choose a cloud infrastructure partner with expertise in cloud strategy, migration, security, architecture, optimization, and ongoing managed services. The right provider should understand your business goals, recommend the most suitable cloud platform, ensure regulatory compliance, optimize costs, and deliver scalable infrastructure that supports long-term business growth.",
  ],
},


];

const pad = (n: number) => String(n).padStart(2, "0");

export default function CloudInfrastructurePage() {
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
                  CLOUD INFRASTRUCTURE SERVICES
                </span>
              </nav>
              <h1 className={styles.heroTitle}>
                Cloud
                <br />
                <span className={styles.gradText}>Infrastructure Services</span>
              </h1>
              <p className={styles.heroCopy}>
                Empower growth with secure, scalable cloud computing services that optimize performance, resilience,
                and business agility.
              </p>
              <div className={styles.heroActions}>
                <a href="#contact" className="btn btn-primary">
                  Optimize Your Infrastructure
                </a>
                <a href="#architecture" className={styles.ghostBtn}>
                  Explore Architecture
                </a>
              </div>
            </div>

            <div className={styles.heroArt}>
              <img
                src={asset("/images/ai-automation-card.jpg")}
                alt="Enterprise data center aisle lined with illuminated server racks"
                width={1200}
                height={900}
                fetchPriority="high"
              />
              <span className={`${styles.pill} ${styles.pillTop}`}>
                <span className={`${styles.dot} ${styles.dotPurple}`} />
                <span>
                  <small>DATA THROUGHPUT</small>
                  <b>9.8 TB/s Active Stream</b>
                </span>
              </span>
              <span className={`${styles.pill} ${styles.pillBottom}`}>
                <span className={`${styles.dot} ${styles.dotGreen}`} />
                <span>
                  <small>QUANTUM STATES</small>
                  <b>4096 Qubits Synthesized</b>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Intro + architecture flow ---------- */}
      <section className={`${styles.section} ${styles.ruled}`} id="architecture">
        <div className={`container ${styles.introGrid}`}>
          <div>
            <h2 className={styles.title}>Powering Business Growth with Future-Ready Cloud Infrastructure</h2>
            <span className={styles.accentBar} aria-hidden="true" />
            <p className={styles.body}>
              Cloud Computing Services modernize infrastructure with secure, scalable, and high-performing cloud
              ecosystems. We enable seamless migration, automation, security, and optimization across hybrid and
              multi-cloud environments. Our solutions improve performance, control costs, strengthen resilience, and
              accelerate digital transformation.
            </p>
          </div>

          <div className={styles.flowCard}>
            <div className={styles.flowHead}>
              <div>
                <h3>UNIFIED CLOUD ARCHITECTURE FLOW</h3>
                <p>Autonomous telemetry &amp; dynamic tier routing</p>
              </div>
              <span className={styles.liveBadge}>Active Real-time</span>
            </div>
            <ol className={styles.flow}>
              {architectureLayers.map((l, i) => (
                <li key={l.title} className={i === architectureLayers.length - 1 ? styles.flowFinal : undefined}>
                  <span className={styles.flowNum}>{pad(i + 1)}</span>
                  <span className={styles.flowText}>
                    <b>{l.title}</b>
                    <span>{l.detail}</span>
                  </span>
                  <span className={styles.flowTag}>{l.tag}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Consulting services ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`} id="services">
        <div className="container">
          <div className={`${styles.head} ${styles.headLeft}`}>
            <h2 className={styles.title}>Cloud Consulting Services for Modern, Secure &amp; Scalable Infrastructure</h2>
            <p className={styles.body}>
              Modernize infrastructure with expert Cloud Consulting Services for secure migration, optimized workloads,
              enhanced performance, and scalable digital transformation success.
            </p>
          </div>
          <ConsultingExplorer items={services} />
        </div>
      </section>

      {/* ---------- Transformation journey ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.head} ${styles.headNarrow}`}>
            <h2 className={styles.title}>How Atlantech Global Accelerates Your Cloud Transformation?</h2>
            <p className={styles.body}>
              As a trusted Cloud Consulting Company, Atlantech Global delivers secure, scalable, and future-ready cloud
              solutions. We specialize in cloud strategy, migration, architecture, security, automation, and hybrid or
              multi-cloud management. Our solutions optimize performance, reduce costs, strengthen resilience, and
              accelerate digital transformation.
            </p>
          </div>
          <ol className={styles.steps}>
            {journey.map((s, i) => (
              <li className={`${styles.stepCard}${i === journey.length - 1 ? ` ${styles.stepFinal}` : ""}`} key={s.title}>
                <span className={styles.stepNum}>{pad(i + 1)}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Business outcomes ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`}>
        <div className={`container ${styles.impactGrid}`}>
          <div>
            <h2 className={styles.title}>Cloud Infrastructure That Powers Business Transformation</h2>
            <p className={styles.body}>
              Build secure, scalable cloud infrastructure that accelerates innovation, resilience, operational
              efficiency, and sustainable business growth.
            </p>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <strong className={styles.metricAccent}>45%</strong>
                <span>CLOUD SPEND SAVED</span>
                <p>Achieved through automated workload right-sizing and FinOps.</p>
              </div>
              <div className={styles.metric}>
                <strong>12×</strong>
                <span>DEPLOY VELOCITY</span>
                <p>Automated CI/CD pipelines shipping high-frequency code safely.</p>
              </div>
            </div>
          </div>

          <ol className={styles.outcomes}>
            {outcomes.map((o, i) => (
              <li key={o}>
                <span className={styles.outcomeNum}>{pad(i + 1)}</span>
                <p>{o}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Dark foundation ---------- */}
      <section className={styles.dark}>
        <div className="container">
          <div className={`${styles.head} ${styles.headNarrow}`}>
            <h2>The Foundation for Future-Ready Enterprises</h2>
            <p>
              Our enterprise cloud solutions modernize IT environments, unify applications, and deliver secure,
              scalable, resilient cloud ecosystems. We optimize infrastructure, strengthen security, improve
              performance, and enable agility for sustainable business growth.
            </p>
          </div>
          <ul className={styles.foundGrid}>
            {foundation.map((f, i) => (
              <li className={`${styles.foundCard} ${i % 2 === 0 ? styles.tonePurple : styles.toneCyan}`} key={f.title}>
                <span className={styles.foundHead}>
                  <span className={styles.foundNum}>{pad(i + 1)}</span>
                  <span className={styles.foundDot} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`${styles.section} ${styles.tinted}`} id="faq">
        <div className="container">
          <div className={`${styles.head} ${styles.headNarrow}`}>
            <h2 className={styles.title}>Frequently Asked Questions About Cloud Infrastructure Services</h2>
          </div>
          <CloudFaq items={faqs} />
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`} id="contact">
        <div className={`container ${styles.contactGrid}`}>
          <div className={styles.contactLeft}>
            <h2 className={styles.title}>
              Design your cloud
              <br />
              <span className={styles.gradText}>infrastructure</span>
            </h2>
            <p>
              Let&apos;s discuss your migration roadmap and identify the fastest, safest path to a modern cloud
              platform.
            </p>
            <div className={styles.auditBox}>
              <span className={styles.auditCheck}>
                <CheckIcon />
              </span>
              <div>
                <p className={styles.auditTitle}>Complimentary cloud readiness audit</p>
                <p>We map your topology and cost drivers, then flag the quick wins before any change.</p>
              </div>
            </div>
          </div>
          <ContactPanel source="Cloud Infrastructure" />
        </div>
      </section>
    </div>
  );
}
