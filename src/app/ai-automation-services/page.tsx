import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { ArrowIcon, CheckIcon } from "@/lib/icons";
import AutomationFaq, { type AutomationFaqItem } from "./AutomationFaq";
import ContactPanel from "./ContactPanel";
import styles from "./page.module.css";
import { link } from "fs";

export const metadata: Metadata = {
  title: "AI & Automation Services",
  description:
    "AI-powered automation for smarter growth: AI strategy and engineering, LLM-based solutions, process automation and ML-driven insights from Atlantech Global.",
  alternates: { canonical: "/ai-automation/" },
};

const stats = [
  { num: "70%", label: "Manual Work Removed" },
  { num: "12 wk", label: "Pilot to Production" },
  { num: "30+", label: "Models in Production" },
  { num: "99.9%", label: "Pipeline Uptime" },
];

const reasons = [
  {
    title: "Intelligent Process Automation",
    desc: "Automate repetitive tasks using AI, machine learning, and robotic process automation (RPA) to improve efficiency, reduce manual effort, and free teams to focus on strategic initiatives.",
  },
  {
    title: "AI-Driven Decision Intelligence",
    desc: "Help organizations leverage predictive analytics, intelligent insights, and data-driven recommendations to make faster, smarter business decisions.",
  },
  {
    title: "Operational Efficiency at Scale",
    desc: "Optimize business workflows with intelligent automation solutions that reduce operational costs, improve productivity, and enable seamless enterprise-wide process optimization.",
  },
  {
    title: "Trusted AI Transformation Partner",
    desc: "From strategy and implementation to continuous optimization, we deliver secure, scalable AI automation solutions that help businesses innovate, adapt, and achieve long-term digital transformation success.",
  },
];

const capabilities = [
  {
    title: "AI Strategy & Engineering",
    desc: "Develop a clear AI roadmap aligned with business goals, enabling secure, scalable, and future-ready AI adoption.",
    points: ["AI readiness & data maturity audit", "Customised AI model development", "MLOps & model lifecycle management"],
  
    metric: { num: "4.2×", label: "Return on pilots" },
    href: "ai-strategy-enginnering"
   

  },
  {
    title: "LLM-Based Solutions",
    desc: "Deliver intelligent automation through Generative AI Services, building tailored LLM solutions, chatbots, copilots, and content platforms.",
    points: ["Custom chatbots & virtual assistants", "Automated content & document analysis", "Prompt engineering & tuning"],
    metric: { num: "99.2%", label: "Semantic accuracy" },
    featured: false,
    href: "llm-based-solutions"
  },
  {
    title: "Process Automation",
    desc: "Streamline workflows with Business Process Automation Services using AI, RPA, and intelligent automation to boost efficiency.",
    points: ["Robotic process automation (RPA)", "Intelligent document processing", "Seamless API & ERP connectivity"],
    metric: { num: "85%", label: "Faster cycle speed" },
    href: "process-automation"
  },
  {
  title: "Intelligent Commerce",
  desc: "Enhance digital commerce experiences with AI-powered personalization, intelligent recommendations, and automated customer journeys to increase engagement and conversions.",
  points: [
    "AI-powered product recommendations",
    "Personalized shopping experiences",
    "Intelligent pricing & commerce automation"
  ],
  metric: { num: "3.5×", label: "Higher engagement" },
  href: "intelligent-commerce"
},
  // {
  //   title: "ML-Driven Insights",
  //   desc: "Transform data into actionable intelligence with machine learning services, enabling smarter decisions, optimized performance, and growth.",
  //   points: ["Predictive maintenance & forecasting", "Customer behaviour & churn analysis", "Real-time visualisation dashboards"],
  //   metric: { num: "10×", label: "Query velocity" },
  //   href: "/ai-automation-services/ai-strategy-engineering"
  // },
];

const advanced = [
  {
    title: "Robotic Process Automation (RPA)",
    desc: "Automate repetitive, rule-based tasks with intelligent RPA solutions that improve accuracy, reduce operational costs, and increase productivity across business functions.",
  },
  {
    title: "Machine Learning (ML)",
    desc: "Leverage predictive models, intelligent recommendations, and real-time analytics to uncover insights, improve forecasting, and enable faster, data-driven decisions.",
  },
  {
    title: "Enterprise AI Automation",
    desc: "Deploy scalable AI-powered automation across departments to streamline workflows, connect business systems, and accelerate enterprise-wide operational efficiency.",
  },
  {
    title: "AI Automation Consulting & Roadmapping",
    desc: "Create a strategic AI adoption roadmap by identifying high-impact automation opportunities, defining implementation priorities, and aligning AI initiatives with business goals.",
  },
  {
    title: "Digital Transformation & Legacy Modernization",
    desc: "Modernize legacy applications and infrastructure with AI-enabled technologies that improve agility, enhance performance, and support long-term digital innovation.",
  },
  {
    title: "Continuous Optimization & Support",
    desc: "Continuously monitor, optimize, and enhance AI solutions to maximize performance, improve reliability, and ensure your automation evolves with changing business needs.",
  },
];

const impact = [
  {
    tone: "purple",
    title: "Greater Efficiency & Productivity",
    desc: "Automate repetitive tasks and streamline workflows so teams can focus on innovation, strategic initiatives, and high-value business activities instead of manual processes.",
    bar: { label: "Throughput Velocity Increase", value: "+82%", fill: 82 },
    note: "Eliminates up to 70% of manual processing queues.",
    icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  },
  {
    tone: "green",
    title: "Lower Operational Costs",
    desc: "Reduce manual effort, minimize errors, and optimize resource utilization through intelligent automation that delivers measurable cost savings and long-term operational efficiency.",
    bar: { label: "Direct Cost Reductions", value: "−45%", fill: 75 },
    note: "Typical payback achieved within 6 to 9 months of rollout.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9.5c-.4-1-1.6-1.7-3-1.7-1.8 0-3 .9-3 2.1 0 2.8 6 1.4 6 4.2 0 1.2-1.3 2.1-3 2.1-1.5 0-2.7-.7-3.1-1.8M12 6.5v11" />
      </>
    ),
  },
  {
    tone: "indigo",
    title: "Smarter Business Decisions",
    desc: "Leverage AI-powered insights, predictive analytics, and real-time data to make faster, more accurate decisions that improve performance and accelerate business growth.",
    bar: { label: "Forecast Accuracy Lift", value: "96.4%", fill: 96 },
    note: "High-confidence ML telemetry with explainability traces.",
    icon: <path d="M4 20V11h4v9M10 20V4h4v16M16 20v-6h4v6" />,
  },
] as const;

const phases = [
  {
    title: "Assessment & Process Discovery",
    desc: "We analyze your existing workflows, identify automation opportunities, and prioritize high-impact use cases that deliver the greatest business value.",
    time: "Weeks 1–2",
  },
  {
    title: "AI Strategy & Integration",
    desc: "Our AI Integration Services connect AI models, enterprise applications, cloud platforms, and business systems to create a secure and scalable automation foundation.",
    time: "Weeks 3–6",
  },
  {
    title: "Pilot & Validation",
    desc: "Launch targeted AI automation pilots to validate business value, measure performance, gather feedback, and ensure a smooth transition before enterprise-wide deployment.",
    time: "Weeks 7–10",
  },
  {
    title: "Scale & Optimize",
    desc: "Expand AI automation across departments while continuously optimizing workflows, improving accuracy, monitoring performance, and maximizing operational efficiency.",
    time: "Weeks 11–12",
  },
  {
    title: "Continuous Innovation & Support",
    desc: "Ensure long-term success with ongoing AI optimization, model enhancements, system maintenance, governance, and expert support to keep your automation future-ready.",
    time: "Ongoing SLA",
  },
];

const industries = [
  {
    tag: "Fintech & Banking",
    title: "Financial Services",
    desc: "Algorithmic fraud detection, automated KYC/AML verification, predictive portfolio risk balancing, and autonomous loan adjudication under strict regulatory regimes.",
    metric: "99.4% false-positive reduction",
  },
  {
    tag: "Life Sciences",
    title: "Healthcare",
    desc: "HIPAA-compliant clinical note extraction, autonomous medical coding, smart triage routing, and diagnostic imaging predictive pipelines with patient privacy preservation.",
    metric: "4.8× faster chart reviews",
  },
  {
    tag: "Industry 4.0",
    title: "Manufacturing",
    desc: "IoT telemetry ingestion for predictive equipment failure warnings, automated factory floor defect detection via computer vision, and dynamic raw material dispatch.",
    metric: "38% reduction in plant downtime",
  },
  {
    tag: "Omnichannel",
    title: "Retail & eCommerce",
    desc: "Real-time hyper-personalized purchase recommendations, dynamic algorithmic pricing adjustments, and autonomous customer support resolution agents.",
    metric: "+28% basket value expansion",
  },
  {
    tag: "Freight & Warehousing",
    title: "Logistics & Supply Chain",
    desc: "Automated customs declaration parsing, real-time route weather and delay adjustments, and demand-sensing inventory restocking models.",
    metric: "61% speedup in customs clearance",
  },
  {
    tag: "Consulting & Legal",
    title: "Professional Services",
    desc: "Cognitive legal contract auditing, automated RFP reply generation, timesheet reconciliation, and semantic cross-repository corporate knowledge search.",
    metric: "80% less time on contract audits",
  },
];

const assurances = [
  "Strict non-disclosure agreement (NDA) signed prior to engagement",
  "No platform vendor lock-in: open standard LLM orchestration",
  "Guaranteed human-supervised model safeguards",
];

const faqs: AutomationFaqItem[] = [
  {
  q: "What are AI automation solutions?",

  a: [
    "AI automation solutions are intelligent technologies that combine artificial intelligence, robotic process automation (RPA), machine learning, generative AI, and workflow automation to streamline business operations.",
  ],

  list: {
    intro: "Common AI automation solutions include:",
    items: [
      "Intelligent document processing",
      "AI chatbots and virtual assistants",
      "Business process automation",
      "Predictive analytics",
      "Workflow automation",
      "AI-powered decision support",
      "Process mining and optimization",
      "Enterprise system integration",
    ],
  },

},

{
  q: "How do I choose the right AI automation company?",

  a: [
    "When selecting an AI automation company, evaluate its technical expertise, industry experience, and ability to deliver scalable solutions.",
  ],

  list: {
    intro: "Look for a partner that offers:",
    items: [
      "AI consulting and strategy",
      "Custom AI development",
      "Process automation expertise",
      "Generative AI implementation",
      "Machine learning capabilities",
      "Enterprise AI integration",
      "Cloud and API integration",
      "Ongoing optimization and support",
    ],
  },

},

{
  q: "What is the difference between AI automation and robotic process automation (RPA)?",

  a: [
    "Robotic Process Automation (RPA) automates repetitive, rule-based tasks by following predefined instructions. AI automation goes beyond RPA by enabling systems to learn from data, understand language, recognize patterns, and make intelligent decisions.",
  ],

},

{
  q: "How long does it take to implement AI automation?",

  a: [
    "The implementation timeline depends on project complexity, business processes, and system integrations.",
  ],

  list: {
    intro: "Typical timelines are:",
    items: [
      "2–4 weeks: AI assessment and automation roadmap",
      "4–8 weeks: Pilot implementation",
      "2–4 months: Department-level automation",
      "4–12 months: Enterprise-wide AI automation deployment",
    ],
  },

},
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function AiAutomationPage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">HOME</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              AI AUTOMATION SERVICES
            </span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>
                AI &amp; <span className={styles.gradText}>Automation Services</span>
              </h1>
              <p className={styles.heroSub}>AI-Powered Automation for Smarter Growth</p>
              <p className={styles.heroCopy}>
                Drive intelligent automation with AI to optimize operations, improve efficiency, and scale business
                faster. Empowering your business with cutting-edge AI strategies, seamless automated workflows and
                LLM-driven intelligence, so your teams scale faster and think smarter.
              </p>
              <div className={styles.heroActions}>
                <a href="#contact" className="btn btn-primary">
                  Start AI Automation
                </a>
                <a href="#capabilities" className={styles.ghostBtn}>
                  See capabilities
                </a>


                
              </div>
            </div>

            <div className={styles.heroArt}>
              <img
                src={asset("/images/ai-automation-card.jpg")}
                alt="Glowing purple neural network of connected nodes representing AI automation"
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

      {/* ---------- Why choose us ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`}>
        <div className="container">
          <div className={`${styles.head} ${styles.headLeft}`}>
            <h2 className={styles.title}>
              Why Businesses Choose Our <span className={styles.gradText}>AI Automation Expertise?</span>
            </h2>
            <p className={styles.body}>
              Drive intelligent automation with AI Consulting Services that streamline operations, enhance
              decision-making, and accelerate sustainable business growth.
            </p>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.archCard}>
              <div className={styles.archHead}>
                <span className={styles.mono}>ARCH: 0X982-SYSTEM</span>
                <span className={styles.liveBadge}>ACTIVE TELEMETRY</span>
              </div>

              {/* <svg className={styles.archSvg} viewBox="0 0 320 210" role="img" aria-label="Diagram: an AI agent engine connecting data ingestion, an ERP/CRM target, a human-in-the-loop review step, and SOC 2 auditing">
                <g className={styles.archLinks}>
                  <path d="M60 46V102H110" className={styles.archDash} />
                  <path d="M110 112H190M200 112V50H270" />
                  <path d="M200 112H230V166H270" />
                  <path d="M60 166V122H110" className={styles.archDash} />
                </g>
                <g className={styles.archNode}>
                  <rect x="12" y="24" width="96" height="44" rx="8" />
                  <rect x="212" y="24" width="96" height="44" rx="8" />
                  <rect x="12" y="144" width="96" height="44" rx="8" />
                  <rect x="212" y="144" width="96" height="44" rx="8" />
                </g>
                <rect x="110" y="82" width="90" height="60" rx="8" className={styles.archCore} />
                <g className={styles.archText}>
                  <text x="30" y="43">Data</text>
                  <text x="30" y="58">Ingestion</text>
                  <text x="230" y="43">ERP / CRM</text>
                  <text x="230" y="58">Target</text>
                  <text x="30" y="163">Human-in-</text>
                  <text x="30" y="178">Loop</text>
                  <text x="230" y="163">SOC2 /</text>
                  <text x="230" y="178">Auditing</text>
                </g>
                <g className={styles.archTextCore}>
                  <text x="122" y="108">AI Agent</text>
                  <text x="122" y="123">Engine</text>
                </g>
              </svg> */}
<img
  src={asset("/images/system-arcitecture.png")}
  alt="Glowing purple neural network of connected nodes representing AI automation"
  width={1200}
  height={900}
  fetchPriority="high"
  className={styles.archSvg} // Kept your existing CSS class if responsive styling/layout rules apply
/>

              <div className={styles.archFoot}>
                <div>
                  <b>Enterprise SLA Guaranteed</b>
                  <span className={styles.archAccent}>Zero Cold Start</span>
                </div>
                <p>
                  Dynamic scaling microservices that natively interface with legacy Oracle, SAP, Salesforce, and
                  custom RESTful stacks.
                </p>
              </div>
            </div>

            <ol className={styles.reasons}>
              {reasons.map((r, i) => (
                <li key={r.title}>
                  <span className={styles.reasonNum}>{pad(i + 1)}</span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Core capabilities ---------- */}
      <section className={styles.section} id="capabilities">
        <div className="container">
          <div className={styles.head}>
            <h2 className={styles.title}>
              <span className={styles.gradText}>Intelligent AI Automation</span> Capabilities for Every Business
            </h2>
            <p className={styles.body}>
              Where intelligence creates measurable value. Comprehensive enterprise capabilities designed to
              operationalize AI safely and profitably.
            </p>
          </div>
          <ul className={styles.capGrid}>
            {capabilities.map((c, i) => (
              
              <li className={`${styles.capCard}${c.featured ? ` ${styles.capFeatured}` : ""}`} key={c.title}>
                <span className={styles.capNum}>{pad(i + 1)}</span>
                
 
                <h3>{c.title}</h3>
                <p className={styles.capDesc}>{c.desc}</p>
                <ul className={styles.capPoints}>
                  {c.points.map((p) => (
                    <li key={p}>
                      <span className={styles.tick}>
                        <CheckIcon />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                               <p className={styles.capMetric}>
                  <strong>{c.metric.num}</strong> {c.metric.label}

  <a href={c.href} className="btn btn-primary" style={{marginTop: "2rem"}} >
                Explore Our Services <ArrowIcon />
              </a>

                </p>
            
 



              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ---------- Advanced capabilities ---------- */}
      <section className={`${styles.section} ${styles.tinted} ${styles.ruled}`}>
        <div className="container">
          <div className={styles.splitHead}>
            <h2 className={styles.title}>
              Advanced AI Automation <span className={styles.gradText}>Capabilities for Enterprise Innovation</span>
            </h2>
            <a href="#contact" className="btn btn-primary btn-small">
              Scale with Intelligent AI
              <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <ul className={styles.advGrid}>
            {advanced.map((a, i) => (
              <li className={styles.advCard} key={a.title}>
                <span className={styles.numChip}>{pad(i + 1)}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Business impact ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.head}>
            <h2 className={styles.title}>
              Business Impact of <span className={styles.gradText}>AI Automation</span>
            </h2>
            <p className={styles.body}>
              Transform everyday operations with AI automation that increases productivity, reduces costs, and
              empowers faster, data-driven business decisions.
            </p>
          </div>
          <ul className={styles.impactGrid}>
            {impact.map((c) => (
              <li className={`${styles.impactCard} ${styles[`tone_${c.tone}`]}`} key={c.title}>
                <span className={styles.impactIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {c.icon}
                  </svg>
                </span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className={styles.meter}>
                  <span className={styles.meterLabel}>
                    {c.bar.label}
                    <b>{c.bar.value}</b>
                  </span>
                  <span className={styles.meterTrack}>
                    <span style={{ width: `${c.bar.fill}%` }} />
                  </span>
                </div>
                <p className={styles.impactNote}>{c.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Implementation framework ---------- */}
      <section className={styles.dark}>
        <div className="container">
          <div className={`${styles.head} ${styles.headLeft}`}>
            <h2>Our Proven AI Automation Implementation Framework</h2>
            <p>
              From strategy to optimization, our proven approach combines AI Integration Services with intelligent
              automation to accelerate adoption, maximize ROI, and deliver measurable business outcomes.
            </p>
          </div>
          <ol className={styles.phases}>
            {phases.map((p, i) => (
              <li className={styles.phaseCard} key={p.title}>
                <span className={styles.phaseNum}>{pad(i + 1)}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className={styles.phaseTime}>{p.time}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Industries ---------- */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.splitHead}>
            <div>
              <h2 className={styles.title}>
                AI Automation <span className={styles.gradText}>Across Every Industry</span>
              </h2>
              <p className={styles.body}>
                AI Development Services deliver tailored automation, predictive analytics, and intelligent
                decision-making to improve efficiency, reduce costs, and accelerate growth.
              </p>
            </div>
            <a href="#contact" className={styles.outlineBtn}>
              Transform Your Industry <ArrowIcon />
            </a>
          </div>
          <ul className={styles.indGrid}>
            {industries.map((ind) => (
              <li className={styles.indCard} key={ind.title}>
                <span className={styles.indTag}>
                  {ind.tag.toUpperCase()}
                  <span className={styles.indDot} aria-hidden="true" />
                </span>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <p className={styles.indMetric}>
                  Key Metric: <b>{ind.metric}</b>
                </p>
                
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
                Let&apos;s Build Intelligent
                <br />
                <span className={styles.gradText}>AI Automation Together</span>
              </h2>
              <p>
                Turn automation opportunities into measurable outcomes with tailored AI solutions that improve
                efficiency, reduce costs, and accelerate transformation.
              </p>
              <div className={styles.auditBox}>
                <span className={styles.auditCheck}>
                  <CheckIcon />
                </span>
                <div>
                  <p className={styles.auditTitle}>Complimentary AI readiness audit</p>
                  <p>
                    A 45-minute review of your data, tooling and highest-value automation candidates conducted by our
                    principal AI systems engineers.
                  </p>
                </div>
              </div>
              <ul className={styles.assurances}>
                {assurances.map((a) => (
                  <li key={a}>
                    <CheckIcon /> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.formWrap}>
              <ContactPanel source="AI & Automation" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={styles.section} id="faq">
        <div className="container">
          <div className={`${styles.head} ${styles.headNarrow}`}>
            <h2 className={styles.title}>
              Frequently Asked Questions About <span className={styles.gradText}>AI Automation</span>
            </h2>
          </div>
          <AutomationFaq items={faqs} />
        </div>
      </section>
    </div>
  );
}
