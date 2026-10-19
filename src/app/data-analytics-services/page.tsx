import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { CheckIcon } from "@/lib/icons";
import AnalyticsFaq, { type AnalyticsFaqItem } from "./AnalyticsFaq";
import CapabilityExplorer, { type Capability } from "./CapabilityExplorer";
import ClientStories, { type Story } from "./ClientStories";
import ContactPanel from "./ContactPanel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Data & Analytics Services",
  description:
    "Unlock smarter decisions with data engineering, business intelligence, data governance and modern data stack services from Atlantech Global.",
  alternates: { canonical: "/data-analytics/" },
};

const stats = [
  { num: "1.2 PB", label: "Pipelines Operated" },
  { num: "99.9%", label: "Pipeline Reliability" },
  { num: "<5 min", label: "Data Freshness" },
  { num: "60%", label: "Reporting Time Saved" },
];

const telemetry = [
  { title: "Data Sources", detail: "APIs, ERP, IoT, Cloud DBs" },
  { title: "Data Platform", detail: "Lakehouse (Snowflake, Databricks)" },
  { title: "Analytics & ML", detail: "Predictive & Statistical Models" },
  { title: "Insights & Decisions", detail: "Real-Time Executive Dashboards" },
];

const capabilities: Capability[] = [
  {
    title: ["Data ", "Engineering"],
    tag: "Core",
    desc: "Design scalable data pipelines, modern architectures, and automated workflows that collect, integrate, and prepare high-quality data from multiple sources. Our data engineering services ensure reliable, secure, and real-time data availability for analytics and AI initiatives.",
    panel: {
      title: "Data Engineering Architecture",
      badge: "Production Ready",
      layers: [
        { name: "Ingestion & Streaming", status: "LATENCY: <120ms", tools: ["Apache Kafka", "AWS Kinesis", "Airbyte / Fivetran"] },
        { name: "Storage & Processing", status: "STATUS: AUTO-SCALING", tools: ["Snowflake", "Databricks", "dbt Core"] },
        { name: "Consumption & Governance", status: "RBAC ACTIVE", accent: true, tools: ["Looker", "Power BI", "Monte Carlo"] },
      ],
      deliverables: ["Automated Schema Drift Guard", "Sub-second Aggregation APIs", "End-to-end Data Lineage", "SOC2 Compliant Encryption"],
      cta: "Request Custom Pipeline Blueprint",
    },
  },
  {
    title: ["Analytics & ", "BI"],
    desc: "Turn complex datasets into interactive dashboards, reports, and predictive insights. Our business intelligence solutions empower decision-makers with real-time visibility, KPI tracking, self-service analytics, and data-driven strategies that accelerate business growth.",
    panel: {
      title: "BI & Analytics Architecture",
      badge: "Self-Service Ready",
      layers: [
        { name: "Semantic Modeling", status: "METRICS: CERTIFIED", tools: ["dbt Semantic Layer", "LookML", "Cube"] },
        { name: "Visualization & Reporting", status: "REFRESH: NEAR REAL-TIME", tools: ["Power BI", "Tableau", "Looker"] },
        { name: "Predictive Insights", status: "FORECAST ACCURACY: 94%", accent: true, tools: ["Python", "Azure ML", "Prophet"] },
      ],
      deliverables: ["Executive KPI Dashboards", "Self-Service Report Catalog", "Automated Report Distribution", "Row-Level Security"],
      cta: "Request a BI Assessment",
    },
  },
  {
    title: ["Data ", "Governance"],
    desc: "Establish a trusted data ecosystem with standardized policies, metadata management, security controls, and compliance frameworks. We help improve data quality, consistency, accessibility, and regulatory compliance while enabling secure enterprise-wide data usage.",
    panel: {
      title: "Data Governance Framework",
      badge: "Audit Ready",
      layers: [
        { name: "Catalog & Metadata", status: "COVERAGE: 100% ASSETS", tools: ["Collibra", "Alation", "Unity Catalog"] },
        { name: "Quality & Observability", status: "STATUS: MONITORED", tools: ["Great Expectations", "Monte Carlo", "Soda"] },
        { name: "Security & Compliance", status: "POLICIES ENFORCED", accent: true, tools: ["Immuta", "Microsoft Purview", "AWS Lake Formation"] },
      ],
      deliverables: ["Business Glossary & Data Ownership", "Data Quality Scorecards", "GDPR & HIPAA Policy Controls", "Access Audit Trails"],
      cta: "Request a Governance Review",
    },
  },
  {
    title: ["Modern ", "Data Stack"],
    desc: "Modernize your analytics platform with cloud-native data warehouses, lakehouses, ELT pipelines, orchestration, and scalable analytics tools. We build flexible, future-ready data ecosystems that support AI, advanced analytics, and enterprise-wide digital transformation.",
    panel: {
      title: "Modern Data Stack Blueprint",
      badge: "Cloud Native",
      layers: [
        { name: "Ingestion & ELT", status: "CONNECTORS: 300+", tools: ["Fivetran", "Airbyte", "Kafka Connect"] },
        { name: "Lakehouse & Warehouse", status: "STATUS: AUTO-SCALING", tools: ["Snowflake", "Databricks", "BigQuery"] },
        { name: "Orchestration & Activation", status: "PIPELINES VERSIONED", accent: true, tools: ["Airflow", "Dagster", "Hightouch"] },
      ],
      deliverables: ["Cloud Migration Roadmap", "Infrastructure as Code", "Reverse ETL to Business Apps", "FinOps Cost Guardrails"],
      cta: "Request a Stack Blueprint",
    },
  },
];

const partnerPoints = [
  {
    title: "Business-Driven Analytics",
    desc: "Align analytics initiatives with business objectives to uncover growth opportunities, improve customer experiences, and enable faster, data-backed decisions across every function.",
  },
  {
    title: "Analytics Center of Excellence",
    desc: "Establish a centralized analytics framework with standardized governance, best practices, reusable models, and enterprise-wide collaboration to maximize the value of your data investments.",
  },
  {
    title: "Data-Led Innovation",
    desc: "Leverage predictive analytics, AI, and machine learning to identify emerging trends, optimize business processes, create innovative products, and unlock new revenue opportunities.",
  },
  {
    title: "Cloud-Powered Data Engineering",
    desc: "Build scalable cloud-native data platforms with automated pipelines, modern architectures, and real-time processing that deliver trusted, high-quality data for analytics and enterprise AI initiatives.",
  },
];

const healthBars = [
  { label: "Revenue Telemetry Ingest", value: "14.8M ops/sec", fill: 84 },
  { label: "Predictive Accuracy Score", value: "99.4%", fill: 94 },
  { label: "Model Drift Defense", value: "Automated Retrain", fill: 78 },
];

const stories: Story[] = [
  {
    quote: "Their analytics team helped us uncover trends we were completely missing. We now make faster decisions with confidence and measurable business impact.",
    name: "Rohan Mehta",
    role: "Director of Business Intelligence",
  },
  {
    quote: "The dashboards are intuitive, the insights are actionable, and our leadership team finally has a single source of truth for decision-making.",
    name: "Sarah Collins",
    role: "Chief Operating Officer",
  },
  {
    quote: "Working with their data experts transformed how we use information across departments. Reporting is faster, more accurate, and incredibly valuable.",
    name: "Ahmed Al-Farsi",
    role: "Head of Digital Transformation",
  },
  {
    quote: "They didn't just build analytics solutions—they understood our business challenges. The predictive insights have significantly improved planning and operational efficiency.",
    name: "Priya Nair",
    role: "VP – Strategy & Analytics",
  },
  {
    quote: "From data integration to interactive dashboards, the entire engagement was smooth. We now rely on real-time insights instead of manual spreadsheets.",
    name: "Daniel Thompson",
    role: "Senior Manager, Data & Insights",
  },
];

const industries = [
  { tag: "Industrial", title: "Manufacturing & Industrial", desc: "Predictive maintenance, IoT telemetry, shop-floor yield optimization, and supply-chain failure prediction." },
  { tag: "Finance", title: "Banking & Insurance (BFSI)", desc: "Real-time fraud detection, algorithmic risk analysis, customer credit scoring, and regulatory automated reporting." },
  { tag: "Medical", title: "Healthcare & Life Sciences", desc: "Patient outcome forecasting, clinical data lakes, diagnostic assistance, and strict HIPAA-compliant governance." },
  { tag: "Commerce", title: "Retail & eCommerce", desc: "Dynamic pricing algorithms, customer churn reduction, multi-channel attribution, and market basket affinity analysis." },
  { tag: "Logistics", title: "Supply Chain & Logistics", desc: "Route optimization models, real-time fleet telematics, dynamic warehouse distribution, and freight ETA prediction." },
  { tag: "Energy", title: "Energy & Utilities", desc: "Smart grid load balancing, consumption telemetry, outage forecasting, and carbon emissions accounting dashboards." },
  { tag: "Telecom", title: "Telecommunications", desc: "Network bandwidth bottleneck resolution, cell tower traffic routing, and proactive subscriber retention workflows." },
  { tag: "Civic", title: "Public Sector & Smart Gov", desc: "Citizen service telemetry, public infrastructure resource allocation, traffic pattern modeling, and transparency portals." },
];

const faqs: AnalyticsFaqItem[] = [
 

  {
  q: "What are Data Analytics Services?",

  a: [
    "Data Analytics Services help businesses collect, organize, analyze, and visualize data to uncover actionable insights. These services include data engineering, business intelligence, predictive analytics, data governance, and AI-powered analytics, enabling organizations to improve decision-making, optimize operations, reduce costs, and accelerate business growth.",
  ],
},

{
  q: "How can Data Analytics Services benefit my business?",

  a: [
    "Data Analytics Services enable businesses to make faster, data-driven decisions by transforming raw data into meaningful insights. They help identify trends, forecast demand, improve customer experiences, optimize operations, manage risks, and increase profitability. Organizations across industries use analytics to gain a competitive advantage and support long-term digital transformation.",
  ],
},
{
  q: "Your question here?",
  a: [],
  list: {
    intro: "Lead-in line:",
    items: ["Point one", "Point two", "Point three"],
  },
  outro: "Closing line after the bullets.",
},

{
  q: "What is the difference between Data Analytics, Data Science, and Business Intelligence?",

  a: [],

  list: {
    intro: "Data Analytics, Data Science, and Business Intelligence (BI) each serve different business purposes.",

    items: [
      "Data Analytics examines historical and real-time data to identify trends, measure performance, and support business decisions.",
      "Data Science uses machine learning, AI, and statistical modeling to predict future outcomes and solve complex business problems.",
      "Business Intelligence (BI) transforms business data into interactive dashboards, reports, and visualizations for operational monitoring.",
    ],
  },
},

{
  q: "What technologies are used in modern Data Analytics Solutions?",

  a: [
    "Modern Data Analytics Solutions combine cloud platforms, AI, machine learning, data engineering, data warehouses, data lakes, business intelligence tools, and real-time analytics. Technologies such as Microsoft Power BI, Tableau, Azure, AWS, Snowflake, Databricks, Python, SQL, and Apache Spark help organizations process large volumes of data efficiently and generate valuable business insights.",
  ],
},

{
  q: "What are the key components of a modern Data Analytics solution?",

  a: [
    "A modern Data Analytics solution includes data integration, data engineering, cloud storage, data governance, business intelligence (BI), data visualization, predictive analytics, and AI-driven insights. These components work together to collect, organize, analyze, and transform data into actionable intelligence, enabling businesses to make faster decisions, improve operational efficiency, and drive sustainable growth.",
  ],
},

{
  q: "How do AI and Machine Learning improve Data Analytics?",

  a: [
    "AI and Machine Learning enhance Data Analytics by automatically identifying patterns, predicting future trends, detecting anomalies, and generating actionable insights from large datasets. They reduce manual analysis, improve forecasting accuracy, automate decision-making, and help businesses uncover opportunities, optimize operations, personalize customer experiences, and respond quickly to changing market conditions.",
  ],
},

];

const pad = (n: number) => String(n).padStart(2, "0");

export default function DataAnalyticsPage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">HOME</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              DATA ANALYTICS SERVICES
            </span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>
                Data &amp;
                <br />
                <span className={styles.gradText}>Analytics Services</span>
              </h1>
              <p className={styles.heroCopy}>
                Unlock smarter decisions with Data Quality Management, predictive intelligence, and trusted insights
                that drive measurable business growth.
              </p>
              <div className={styles.heroActions}>
                <a href="#contact" className="btn btn-primary">
                  Talk to Our Analytics Experts
                  <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href="#capabilities" className={styles.ghostBtn}>
                  See Capabilities
                </a>
              </div>
            </div>

            <div className={styles.heroArt}>
              <img
                src={asset("/images/dana.jpg")}
                alt="Isometric illustration of an enterprise data platform powering sales, operational and financial analytics"
                width={512}
                height={279}
                fetchPriority="high"
              />
              <span className={`${styles.pill} ${styles.pillTop}`}>
                <span className={`${styles.dot} ${styles.dotGreen}`} />
                <span>
                  <small>PIPELINE UPTIME</small>
                  99.9% Active SLA
                </span>
              </span>
              <span className={`${styles.pill} ${styles.pillBottom}`}>
                <span className={`${styles.dot} ${styles.dotPurple}`} />
                <span>
                  <small>DATA VELOCITY</small>
                  <b>98.5% Real-Time Flow</b>
                </span>
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

      {/* ---------- Intro + telemetry ---------- */}
      <section className={`${styles.section} ${styles.ruled}`}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <h2 className={styles.title}>
              Data Analytics Services That Turn Data into{" "}
              <span className={styles.gradText}>Actionable Business Intelligence</span>
            </h2>
            <p className={styles.body}>
              As a trusted data analytics company, Atlantech Global helps organizations transform complex data into
              strategic business value. We design scalable analytics ecosystems that unify data from multiple sources,
              improve governance, and provide real-time insights that drive faster, more confident decision-making
              across the enterprise.
            </p>
            <ul className={styles.chips}>
              <li>
                <CheckIcon /> Multi-Source Ingestion
              </li>
              <li>
                <CheckIcon /> Zero Data Loss Framework
              </li>
            </ul>
          </div>

          <div className={styles.telemetry}>
            <div className={styles.telemetryHead}>
              <span className={`${styles.dot} ${styles.dotGreen}`} />
              LIVE TELEMETRY ARCHITECTURE
              <span className={styles.syncBadge}>Active Sync</span>
            </div>
            <ol className={styles.flow}>
              {telemetry.map((t, i) => (
                <li key={t.title} className={i === telemetry.length - 1 ? styles.flowFinal : undefined}>
                  <span className={styles.flowNum}>{pad(i + 1)}</span>
                  <b>{t.title}</b>
                  <span className={styles.mono}>{t.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Capabilities ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`} id="capabilities">
        <div className="container">
          <div className={styles.head}>
            <h2 className={styles.title}>
              Data Analytics Services to Turn Data into <span className={styles.gradText}>Actionable Insights</span>
            </h2>
            <p className={styles.body}>
              Transform enterprise data into strategic business value with scalable analytics, AI-powered insights, and
              modern data platforms that drive confident decision-making.
            </p>
          </div>
          <CapabilityExplorer items={capabilities} />
        </div>
      </section>

      {/* ---------- Dark CTA ---------- */}
      <section className={styles.darkCta}>
        <div className="container">
          <h2>Build an Insight-Driven Enterprise with Data Analytics Services</h2>
          <p>
            Leverage modern data engineering, business intelligence, and AI-powered analytics to accelerate innovation
            and deliver measurable business value.
          </p>
          <a href="#contact" className="btn btn-primary btn-small">
            Speak with an Analytics Consultant
            <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>

      {/* ---------- Consulting partner ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.head} ${styles.headLeft}`}>
            <h2 className={styles.title}>
              Your Trusted <span className={styles.gradText}>Data Analytics Consulting</span> Partner
            </h2>
            <p className={styles.body}>
              Transform enterprise data into actionable insights with advanced data analytics that drive smarter
              decisions, efficiency, governance, and innovation.
            </p>
          </div>

          <div className={styles.partnerGrid}>
            <div className={styles.console} aria-label="Sample analytics health dashboard">
              <div className={styles.consoleHead}>
                <span>
                  <span className={`${styles.dot} ${styles.dotGreen}`} /> SYSTEM HEALTH: 100% OPTIMAL
                </span>
                <span className={styles.consoleMuted}>REG: US-EAST-1</span>
              </div>
              <div className={styles.consoleStats}>
                <div>
                  <small>QUERY VELOCITY</small>
                  <b>
                    42ms <em>(-18%)</em>
                  </b>
                </div>
                <div>
                  <small>ANOMALY RATE</small>
                  <b>
                    0.002% <em>(Stable)</em>
                  </b>
                </div>
              </div>
              <ul className={styles.bars}>
                {healthBars.map((b) => (
                  <li key={b.label}>
                    <span className={styles.barLabel}>
                      {b.label}
                      <span>{b.value}</span>
                    </span>
                    <span className={styles.barTrack}>
                      <span style={{ width: `${b.fill}%` }} />
                    </span>
                  </li>
                ))}
              </ul>
              <div className={styles.consoleFoot}>
                <span>Data Lineage Auditing: VERIFIED</span>
                <span className={styles.consoleAccent}>Auto-refresh 3s</span>
              </div>
            </div>

            <ol className={styles.points}>
              {partnerPoints.map((p, i) => (
                <li key={p.title}>
                  <h3>
                    <span className={styles.pointNum}>{pad(i + 1)}</span>
                    {p.title}
                  </h3>
                  <p>{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Client stories ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`}>
        <div className="container">
          <ClientStories items={stories} />
        </div>
      </section>

      {/* ---------- Industries ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.head} ${styles.headLeft}`}>
            <h2 className={styles.title}>
              Industry-Focused Data Analytics Services for <span className={styles.gradText}>Modern Enterprises</span>
            </h2>
            <p className={styles.body}>
              Every industry generates valuable data, but only the right strategy unlocks its potential. Our tailored
              data analytics solutions transform complex data into actionable insights, optimize operations, improve
              decision-making, and accelerate innovation to solve industry-specific business challenges and drive
              sustainable growth.
            </p>
          </div>
          <ul className={styles.industryGrid}>
            {industries.map((ind, i) => (
              <li className={styles.industryCard} key={ind.title}>
                <span className={styles.industryTag}>
                  {pad(i + 1)} {ind.tag.toUpperCase()}
                </span>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
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
              <h2 className={styles.title}>
                Let&apos;s Build Your
                <br />
                <span className={styles.gradText}>Intelligence Roadmap</span>
              </h2>
              <p>Let&apos;s find the hidden opportunities in your business data and build a scalable analytics ecosystem together.</p>
              <div className={styles.auditBox}>
                <span className={styles.auditCheck}>
                  <CheckIcon />
                </span>
                <div>
                  <p className={styles.auditTitle}>COMPLIMENTARY DATA INSIGHT AUDIT</p>
                  <p>
                    A 45-minute review of your data pipelines, tooling architecture, and highest-value automation
                    candidates.
                  </p>
                </div>
              </div>
              <ul className={styles.assurances}>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="13" r="8" />
                    <path d="M12 9v4l2.5 2.5M9 2h6" />
                  </svg>
                  Average response time: under 2 hours
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  Strict Non-Disclosure Agreement (NDA) on request
                </li>
              </ul>
            </div>
            <ContactPanel source="Data & Analytics" />
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={styles.section} id="faq">
        <div className="container">
          <div className={styles.head}>
            <h2 className={styles.title}>
              Frequently Asked Questions About <span className={styles.gradText}>Data Analytics</span>
            </h2>
          </div>
          <AnalyticsFaq items={faqs} />
        </div>
      </section>
    </div>
  );
}
