import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import LlmFaq, { type LlmFaqItem } from "./llmfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "LLM-Based Solutions",
  description:
    "Generative AI and LLM solutions for enterprise applications: RAG, enterprise knowledge assistants, document processing, copilots and secure integrations from Atlantech Global.",
  alternates: { canonical: "/ai-automation-services/llm-based-solutions/" },
};

/** Where the "AI Automation Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/ai-automation-services";

/* ---- tiny path helpers so every icon is a single stroke path (24×24 grid) ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
  `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
  robot: r(5, 8, 14, 11, 3) + "M12 8V5M9 13h.01M15 13h.01M9 16.5h6M3 12v3M21 12v3",
  chat: "M4 5h12v9H8l-4 3zM18 8h2v9l-3-2h-5",
  book: "M3 5h7a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H3zM21 5h-7a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h7z",
  doc: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5",
  flow: r(3, 4, 6, 5, 1) + r(15, 4, 6, 5, 1) + r(15, 15, 6, 5, 1) + "M9 6.5h6M18 9v6M6 9v8h9",
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z",
  userCard: r(4, 3, 16, 18, 2) + c(12, 10, 2.5) + "M7.5 17c.8-2 2.4-3 4.5-3s3.7 1 4.5 3",
  swap: "M7 4L3 8l4 4M3 8h17M17 12l4 4-4 4M21 16H4",
  help: r(4, 4, 16, 16, 2) + "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01",
  fileSearch: "M7 3h7l4 4v14H7zM14 3v4h4" + c(12, 14, 2.5) + "M14 16l2 2",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z",
  wand: "M5 19L15 9M14 6l1-3 1 3 3 1-3 1-1 3-1-3-3-1zM19 14l.6 1.6L21 16l-1.4.4L19 18l-.6-1.6L17 16l1.4-.4z",
  bolt: "M13 2L3 14h7l-1 8 10-12h-7l1-8z",
  headset: "M5 14v-2a7 7 0 0 1 14 0v2" + r(3, 14, 4, 6, 1.5) + r(17, 14, 4, 6, 1.5) + "M19 20c0 1-2 2-5 2",
  folder: "M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM8 12h8M8 15h5",
  docInfo: "M7 3h7l4 4v14H7zM14 3v4h4M10 11h4M10 14h2" + c(16, 17, 2),
  pencil: "M4 20l4-1 11-11-3-3L5 16zM14 6l3 3",
  chatPlus: "M4 5h16v12H9l-5 4zM12 8v5M9.5 10.5h5",
  archive: r(3, 4, 18, 4, 1) + "M5 8v11h14V8M10 12h4",
  hex: "M12 3l7 4v8l-7 4-7-4V7zM12 9v6M9 10.5l6 3M15 10.5l-6 3",
  listSearch: "M3 6h9M3 11h6M3 16h6" + c(16, 14, 4) + "M19 17l3 3",
  chip: r(6, 6, 12, 12, 2) + r(10, 10, 4, 4, 0.5) + "M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4",
  msg: "M4 5h16v11H9l-5 4zM8 9h8M8 12h5",
  login: "M4 5h10a1 1 0 0 1 1 1v3M4 5v14h10a1 1 0 0 0 1-1v-3M9 12h12M17 8l4 4-4 4",
  wrench: c(12, 12, 9) + "M14.5 8.5a2.5 2.5 0 0 0-3 3L8.5 14.5l1 1 3-3a2.5 2.5 0 0 0 3-3l-1.5 1.5-1-1z",
  gridSq: r(4, 4, 16, 16, 2) + "M9 9h2v2H9zM13 9h2v2h-2zM9 13h2v2H9zM13 13h2v2h-2z",
  globeSearch: c(11, 11, 7) + "M4 11h14M11 4c-3 3-3 11 0 14M11 4c3 3 3 11 0 14M17 17l4 4",
  fork: "M12 21v-8M12 13L6 7M12 13l6-6M6 7V4M6 7H3M18 7V4M18 7h3",
  nodes: c(12, 12, 2.4) + c(12, 4, 1.6) + c(4.5, 16.5, 1.6) + c(19.5, 16.5, 1.6) + "M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3",
  checklist: r(4, 4, 16, 16, 2) + "M8 9h3M8 15h3M13 9l1.5 1.5L17 8M13 15l1.5 1.5L17 14",
  lock: r(5, 11, 14, 10, 2) + "M8 11V8a4 4 0 0 1 8 0v3M12 15v2",
  building: "M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01",
  folderStar: "M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM12 10l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3z",
  database: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6",
  cloud: "M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4.5 4.5 0 0 1 17 18zM9 14l3-3 3 3",
  move: "M12 3v18M3 12h18M12 3l-2 2M12 3l2 2M12 21l-2-2M12 21l2-2M3 12l2-2M3 12l2 2M21 12l-2-2M21 12l-2 2",
  tools: "M14 7l3 3M4 20l9-9M15 3l6 6-3 3-6-6zM3 14l3-3 3 3-3 3z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
  shieldUser: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" + c(12, 10, 2) + "M9 16c.7-1.5 1.8-2 3-2s2.3.5 3 2",
  badge: "M12 3l2.3 1.5 2.7-.2 1 2.5 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-1 2.5-2.7-.2L12 21l-2.3-1.5-2.7.2-1-2.5-2.2-1.6.9-2.6-.9-2.6L6 8.8l1-2.5 2.7.2zM9 12l2 2 4-4",
  gauge: "M4 17a8 8 0 1 1 16 0M12 17l4-5M7 17h.01M17 17h.01",
  chartUp: "M3 17l5-5 4 3 6-7M5 21v-3M10 21v-4M15 21v-5M20 21V9",
  external: "M7 17L17 7M8 7h9v9",
  arrow: "M5 12h14M13 6l6 6-6 6",
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
  { icon: "robot", text: "Enterprise AI assistants" },
  { icon: "chat", text: "AI-powered chatbots" },
  { icon: "book", text: "Knowledge assistants" },
  { icon: "doc", text: "Document intelligence" },
  { icon: "flow", text: "RAG applications" },
  { icon: "spark", text: "Content generation" },
  { icon: "userCard", text: "AI copilots" },
  { icon: "swap", text: "LLM integrations" },
];

const pipeline: { icon: IconName; title: string; desc: string }[] = [
  { icon: "help", title: "Ask", desc: "Natural-language questions." },
  { icon: "fileSearch", title: "Retrieve", desc: "Find relevant information from approved sources." },
  { icon: "bulb", title: "Understand", desc: "Summarize complex information." },
  { icon: "wand", title: "Generate", desc: "Create useful responses and content." },
  { icon: "bolt", title: "Act", desc: "Trigger workflows where appropriate." },
];

const useCases: { icon: IconName; title: string; desc: string }[] = [
  { icon: "folder", title: "Enterprise Knowledge", desc: "Enable employees to interact with internal documents and knowledge repositories." },
  { icon: "docInfo", title: "Document Processing", desc: "Extract, summarize and classify information from business documents." },
  { icon: "pencil", title: "Content Workflows", desc: "Assist with content creation, summarization and transformation." },
  { icon: "chatPlus", title: "Employee Copilots", desc: "Support employees with research, information retrieval and repetitive tasks." },
];

const ragFlow: { icon: IconName; text: string }[] = [
  { icon: "archive", text: "Enterprise Documents / Data" },
  { icon: "hex", text: "Preparation" },
  { icon: "listSearch", text: "Retrieval" },
  { icon: "chip", text: "LLM" },
  { icon: "msg", text: "Response" },
];

const ragCards: { icon: IconName; text: string }[] = [
  { icon: "login", text: "Document ingestion" },
  { icon: "wrench", text: "Data preparation" },
  { icon: "gridSq", text: "Embedding generation" },
  { icon: "globeSearch", text: "Vector search" },
  { icon: "fork", text: "Retrieval pipelines" },
  { icon: "nodes", text: "LLM orchestration" },
  { icon: "checklist", text: "Response evaluation" },
  { icon: "lock", text: "Access controls" },
];

const integrations: { icon: IconName; text: string }[] = [
  { icon: "userCard", text: "CRM" },
  { icon: "building", text: "ERP" },
  { icon: "folderStar", text: "Knowledge bases" },
  { icon: "database", text: "Databases" },
  { icon: "cloud", text: "Cloud platforms" },
  { icon: "building", text: "Enterprise applications" },
  { icon: "move", text: "APIs" },
  { icon: "tools", text: "Internal tools" },
];

const controls: { icon: IconName; title: string; desc: string }[] = [
  { icon: "shield", title: "Security", desc: "Protect sensitive business information." },
  { icon: "shieldUser", title: "Access", desc: "Control who can access specific knowledge." },
  { icon: "badge", title: "Accuracy", desc: "Evaluate responses against trusted sources." },
  { icon: "gauge", title: "Scalability", desc: "Support increasing users and workloads." },
  { icon: "chartUp", title: "Monitoring", desc: "Track application and model performance." },
];

const faqs: LlmFaqItem[] = [
  {
    q: "What are LLM-based solutions?",
    a: "LLM-based solutions are applications that use large language models to understand, generate or transform natural-language information for specific business use cases.",
  },
  {
    q: "What is Generative AI used for in business?",
    a: "Generative AI is used to answer questions from internal knowledge, summarize and classify documents, draft and transform content, assist employees with research and support customers through conversational assistants.",
  },
  {
    q: "What is RAG in Generative AI?",
    a: "RAG (retrieval-augmented generation) combines a large language model with a retrieval system, so responses are grounded in relevant information retrieved from approved company sources.",
  },
  {
    q: "Can LLM solutions integrate with enterprise systems?",
    a: "Yes. LLM solutions can connect with enterprise systems such as CRM, ERP, knowledge bases, databases and internal tools through APIs and integration layers.",
  },
];

function Head({ eyebrow, title, lead, label }: { eyebrow: string; title: string; lead?: string; label?: string }) {
  return (
    <div className={styles.head}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
      {label && <p className={styles.label}>{label}</p>}
    </div>
  );
}

export default function LlmBasedSolutionsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        {/* ---------- Breadcrumb ---------- */}
        <nav className={styles.crumbBar} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href={PARENT_HREF}>AI Automation Services</Link>
          <span aria-hidden="true">›</span>
          <span className={styles.crumbCurrent} aria-current="page">
            LLM-Based Solutions
          </span>
        </nav>

        {/* ---------- Hero ---------- */}
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                AI AUTOMATION SERVICES • LLM-BASED SOLUTIONS
              </span>
              <h1 className={styles.heroTitle}>
                Generative AI &amp; LLM Solutions for <span className={styles.gradText}>Enterprise Applications</span>
              </h1>
              <p className={styles.heroCopy}>
                Large Language Models are changing how businesses interact with information, customers and internal
                systems. Our Generative AI Solutions help enterprises build practical applications using LLMs,
                retrieval systems and AI-powered workflows.
              </p>
              <p className={styles.buildLabel}>WHAT WE BUILD</p>
              <ul className={styles.chipGrid}>
                {chips.map((ch) => (
                  <li key={ch.text}>
                    <Ic name={ch.icon} />
                    <span>{ch.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={styles.primaryBtn}>
                Build Your LLM Solution
                <Ic name="external" />
              </Link>
            </div>

            <div className={styles.heroArtCard}>
              <div className={styles.heroCardTop}>
                <span className={styles.runtime}>
                  <span className={styles.pillDot} />
                  ENTERPRISE LLM RUNTIME
                </span>
                <span className={styles.matrix}>Active Cognitive Matrix • RAG ENGINE</span>
              </div>
              <img
                className={styles.heroImg}
                src={asset("/images/llm-based.jpg")}
                alt="Isometric purple enterprise LLM platform with connected data layers"
                width={892}
                height={666}
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* ---------- Knowledge pipeline ---------- */}
        <section className={styles.section}>
          <Head
            eyebrow="KNOWLEDGE PIPELINE"
            title="Turn Enterprise Knowledge Into an AI-Powered Experience"
            lead="Employees often spend significant time searching through documents, policies and business information."
            label="LLM SOLUTIONS CAN HELP USERS:"
          />
          <ol className={styles.pipeGrid}>
            {pipeline.map((p, i) => (
              <li className={styles.pipeCard} key={p.title}>
                <div className={styles.pipeTop}>
                  <span className={styles.pipeNum}>{pad(i + 1)}</span>
                  <span className={styles.tileWhite}>
                    <Ic name={p.icon} />
                  </span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Application domains ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <Head eyebrow="APPLICATION DOMAINS" title="Generative AI Development for Real Business Use Cases" />
          <div className={styles.bento}>
            <article className={styles.featured}>
              <div className={styles.featTop}>
                <span className={styles.featBadge}>FEATURED SOLUTION</span>
                <Ic name="headset" />
              </div>
              <h3>Customer Support</h3>
              <p>AI assistants can help answer frequently asked questions and support service teams.</p>
              <span className={styles.featFoot}>
                <span className={styles.greenDot} />
                Continuous enterprise conversational support
              </span>
            </article>

            <div className={styles.bentoRight}>
              {useCases.map((u, i) => (
                <article className={styles.useCard} key={u.title}>
                  <div className={styles.useTop}>
                    <span className={styles.tileTint}>
                      <Ic name={u.icon} />
                    </span>
                    <span className={styles.useNum}>{pad(i + 2)}</span>
                  </div>
                  <div className={styles.useText}>
                    <h3>{u.title}</h3>
                    <p>{u.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- RAG ---------- */}
        <section className={styles.section}>
          <Head
            eyebrow="GROUNDED ARCHITECTURE"
            title="RAG & Enterprise Knowledge Solutions"
            lead="Enterprise AI often needs access to company-specific information."
            label="OUR APPROACH CAN INCLUDE:"
          />
          <ol className={styles.chain}>
            {ragFlow.map((f, i) => (
              <li key={f.text}>
                {i > 0 && (
                  <span className={styles.chainArrow}>
                    <Ic name="arrow" />
                  </span>
                )}
                <span className={styles.chainItem}>
                  <Ic name={f.icon} />
                  {f.text}
                </span>
              </li>
            ))}
          </ol>
          <ul className={styles.ragGrid}>
            {ragCards.map((rc) => (
              <li key={rc.text}>
                <Ic name={rc.icon} />
                <h3>{rc.text}</h3>
              </li>
            ))}
          </ul>
          <p className={styles.noteBar}>
            This helps connect LLM applications with relevant enterprise knowledge instead of relying only on a
            general-purpose model.
          </p>
        </section>

        {/* ---------- Integrations ---------- */}
        <section className={`${styles.section} ${styles.band}`}>
          <Head
            eyebrow="INTEROPERABILITY"
            title="Connect LLMs With Your Existing Technology"
            lead="LLM applications become more useful when they can work with business systems."
            label="INTEGRATE WITH:"
          />
          <div className={styles.integGrid}>
            <div className={styles.core}>
              <span className={styles.coreIcon}>
                <Ic name="chip" />
              </span>
              <h3>Enterprise LLM Core</h3>
              <p>Centralized cognitive orchestrator and routing gateway</p>
              <span className={styles.coreTag}>
                <span className={styles.pillDot} />
                ACTIVE MESH
              </span>
            </div>
            <ul className={styles.integChips}>
              {integrations.map((it) => (
                <li key={it.text}>
                  <Ic name={it.icon} />
                  <h3>{it.text}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Governance ---------- */}
        <section className={styles.section}>
          <Head eyebrow="GOVERNANCE & TRUST" title="Build LLM Applications With Enterprise Controls" label="KEY CONSIDERATIONS" />
          <ul className={styles.controlGrid}>
            {controls.map((ct) => (
              <li className={styles.controlCard} key={ct.title}>
                <span className={styles.tileWhite}>
                  <Ic name={ct.icon} />
                </span>
                <h3>{ct.title}</h3>
                <p>{ct.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={`${styles.section} ${styles.band}`} id="faq">
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <p className={styles.eyebrow}>LLM ADVISORY DESK</p>
              <h2 className={styles.title}>FAQ About LLM-Based Solutions</h2>
              <p className={styles.faqLead}>
                Have a Generative AI initiative in mind? Connect with our enterprise architects to define your
                implementation roadmap.
              </p>
              <Link href="/contact" className={`${styles.primaryBtn} ${styles.faqBtn}`}>
                Request LLM Consultation
                <Ic name="external" />
              </Link>
            </div>
            <LlmFaq items={faqs} />
          </div>
        </section>
      </div>
    </div>
  );
}