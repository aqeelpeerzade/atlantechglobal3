import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import CommerceFaq, { type CommerceFaqItem } from "./commercefaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Intelligent Commerce",
  description:
    "Intelligent Commerce for smarter e-commerce experiences: AI-powered product search, recommendations, conversational commerce, AI shopping assistants, personalisation and commerce automation from Atlantech Global.",
  alternates: { canonical: "/ai-automation-services/intelligent-commerce/" },
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
  listSearch: (
    <Icon>
      <path d="M3 6h9M3 11h6M3 16h6" />
      <circle cx="16" cy="14" r="4" />
      <path d="M19 17l3 3" />
    </Icon>
  ),
  sparkles: (
    <Icon>
      <path d="M9 4l1.8 4.2L15 10l-4.2 1.8L9 16l-1.8-4.2L3 10l4.2-1.8zM18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z" />
    </Icon>
  ),
  swap: (
    <Icon>
      <path d="M7 4L3 8l4 4M3 8h17M17 12l4 4-4 4M21 16H4" />
    </Icon>
  ),
  chat: (
    <Icon>
      <path d="M4 5h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      <path d="M20 9v8a1 1 0 0 1-1 1h-1v3l-3-3h-3" />
    </Icon>
  ),
  trend: (
    <Icon>
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />
    </Icon>
  ),
  sparkTrend: (
    <Icon>
      <path d="M3 18l5-5 4 3 6-7M18 4l.8 1.7L20.5 6.5 18.8 7.3 18 9l-.8-1.7-1.7-.8 1.7-.8z" />
    </Icon>
  ),
  thumbs: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 17h4a1.5 1.5 0 0 0 1.4-1l1-3.2A1 1 0 0 0 15.5 11.5H13l.5-2a1 1 0 0 0-1.7-.9L9.5 11H8v6z" />
    </Icon>
  ),
  message: (
    <Icon>
      <rect x="3" y="5" width="18" height="13" rx="2" />
      <path d="M7 10h10M7 14h6M8 18v3l4-3" />
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
  flow: (
    <Icon>
      <rect x="3" y="4" width="6" height="5" rx="1" />
      <rect x="15" y="4" width="6" height="5" rx="1" />
      <rect x="15" y="15" width="6" height="5" rx="1" />
      <path d="M9 6.5h6M18 9v6M6 9v8h9" />
    </Icon>
  ),
  sliders: (
    <Icon>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M8 14v6" />
    </Icon>
  ),
  target: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </Icon>
  ),
  compass: (
    <Icon>
      <path d="M12 3L6 21M12 3l6 18M8 15h8" />
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
  bolt: (
    <Icon>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </Icon>
  ),
  boltCircle: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M13 7l-4 6h3l-1 4 4-6h-3z" />
    </Icon>
  ),
  compassCircle: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </Icon>
  ),
  fingerprint: (
    <Icon>
      <path d="M6 10a6 6 0 0 1 12 0v2M9 20c.8-1.8 1-3.6 1-5.5a2 2 0 0 1 4 0c0 3-.5 5-1.5 7M6 14c0 2.5-.3 4-1 5.5M18 14c0 2-.2 3.5-.8 5M12 4v2" />
    </Icon>
  ),
  gauge: (
    <Icon>
      <path d="M4 17a8 8 0 1 1 16 0M12 17l4-5M7 17h.01M17 17h.01" />
    </Icon>
  ),
  chartSearch: (
    <Icon>
      <path d="M3 17l5-5 4 3 5-6" />
      <circle cx="18" cy="16" r="2.5" />
      <path d="M20 18l2 2" />
    </Icon>
  ),
  grid: (
    <Icon>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01" strokeWidth="3" />
    </Icon>
  ),
  rocket: (
    <Icon>
      <path d="M5 15c-1 1-1.5 3-1.5 5 2 0 4-.5 5-1.5M9 15l-3-3c1-4 4-7 9-8 4-.7 5 .3 4.5 4.5-1 5-4 8-8 9zM15 9h.01" />
    </Icon>
  ),
  chip: (
    <Icon>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </Icon>
  ),
  help: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" />
    </Icon>
  ),
  search: (
    <Icon>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.2-4.2" />
    </Icon>
  ),
  arrow: (
    <Icon>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  ),
};

const foundations = [
  { icon: icons.listSearch, text: "Improve product discovery and search." },
  { icon: icons.sparkles, text: "Personalise product recommendations." },
  { icon: icons.swap, text: "Automate repetitive commerce tasks." },
  { icon: icons.chat, text: "Support customers through conversational AI." },
  { icon: icons.trend, text: "Create smarter cross-sell and upsell opportunities." },
  { icon: icons.sparkTrend, text: "Improve commerce decisions using customer and product data." },
];

const capabilities = [
  { name: "Intelligent Search", purpose: "Understand customer intent and improve product discovery" },
  { name: "Recommendations", purpose: "Suggest relevant and complementary products" },
  { name: "Personalisation", purpose: "Create more relevant customer experiences" },
  { name: "Conversational AI", purpose: "Help customers discover and evaluate products" },
  { name: "Commerce Automation", purpose: "Reduce repetitive manual processes" },
  { name: "AI Analytics", purpose: "Identify patterns and opportunities in commerce data" },
];

const process = [
  { icon: icons.target, title: "Discover", desc: "Understand your customers, products, and existing commerce journey." },
  { icon: icons.compass, title: "Design", desc: "Identify high-value AI automation opportunities." },
  { icon: icons.hub, title: "Integrate", desc: "Connect AI with your e-commerce platform and business systems." },
  { icon: icons.bolt, title: "Automate", desc: "Deploy intelligent search, recommendations, assistants, or workflows." },
  { icon: icons.trend, title: "Optimise", desc: "Monitor results and continuously improve the experience." },
];

const benefits = [
  { icon: icons.compassCircle, kicker: "DISCOVERY PRECISION", text: "More relevant product discovery.", span: "wide" },
  { icon: icons.fingerprint, kicker: "INDIVIDUALISATION", text: "Better personalised shopping experiences.", span: "wide" },
  { icon: icons.boltCircle, kicker: "OPERATIONAL AGILITY", text: "Reduced repetitive manual work.", span: "third" },
  { icon: icons.gauge, kicker: "RESPONSE VELOCITY", text: "Faster customer assistance.", span: "third" },
  { icon: icons.chartSearch, kicker: "REVENUE AUGMENTATION", text: "Improved opportunities for cross-selling and upselling.", span: "third" },
  { icon: icons.grid, kicker: "DATA HARNESSING", text: "Better use of customer and product data.", span: "wide" },
  { icon: icons.rocket, kicker: "ELASTIC GROWTH", text: "A more scalable e-commerce operation.", span: "wide" },
] as const;

const faqs: CommerceFaqItem[] = [
  {
    q: "What is Intelligent Commerce?",
    a: "Intelligent Commerce is the use of AI, automation, and data to make e-commerce more personalised, responsive, and efficient. It can include AI-powered search, product recommendations, conversational commerce, personalisation, and automated commerce workflows.",
  },
  {
    q: "What is AI-powered e-commerce?",
    a: "AI-powered e-commerce uses machine learning, natural-language processing, and automation to improve how customers find, evaluate, and buy products, and how businesses run their online stores. Common examples include semantic product search, personalised recommendations, and AI shopping assistants.",
  },
  {
    q: "How can AI improve e-commerce?",
    a: "AI can help customers find relevant products faster, show recommendations based on behaviour and product interactions, answer questions through conversational assistants, and automate repetitive support and workflow tasks. It can also surface patterns in customer and product data that guide better commerce decisions.",
  },
  {
    q: "What is conversational commerce?",
    a: "Conversational commerce lets customers discover products, ask questions, and get purchase assistance through AI-powered conversations, such as chat assistants on a website or app, instead of browsing and searching alone.",
  },
  {
    q: "What is an AI shopping assistant?",
    a: "An AI shopping assistant is an automated tool that provides product guidance and purchase assistance. It can understand what a customer is looking for, suggest suitable products, answer common questions, and support the customer through the buying journey.",
  },
  {
    q: "Can Intelligent Commerce integrate with an existing e-commerce platform?",
    a: "Yes. Intelligent Commerce solutions are typically connected to your existing e-commerce platform, product catalogue, and business systems through integrations and APIs, so you can add capabilities such as smarter search or recommendations without rebuilding your store.",
  },
  {
    q: "What is the difference between e-commerce automation and Intelligent Commerce?",
    a: "E-commerce automation handles repetitive tasks, such as routine support and order workflows, using fixed rules. Intelligent Commerce adds AI on top, so the experience can understand customer intent, personalise what each shopper sees, and learn from data as well as automate processes.",
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

export default function IntelligentCommercePage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href={PARENT_HREF}>AI Automation Services</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.crumbCurrent} aria-current="page">
              Intelligent Commerce
            </span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                AI AUTOMATION SERVICES • INTELLIGENT COMMERCE
              </span>
              <h1 className={styles.heroTitle}>
                Intelligent Commerce for <span className={styles.gradText}>Smarter E-Commerce Experiences</span>
              </h1>
              <p className={styles.heroCopy}>
                Make e-commerce more intelligent, personalised, and efficient with Intelligent Commerce solutions
                powered by AI automation.
              </p>
              <p className={styles.heroCopy}>
                Use AI to improve product discovery, personalise customer experiences, automate commerce workflows,
                and support customers throughout their buying journey.
              </p>
              <Link href="/contact" className={styles.primaryBtn}>
                Make Your Commerce More Intelligent
                <ExternalArrow />
              </Link>
            </div>

            <div className={styles.heroArtCard}>
              <img
                src={asset("/images/intelligent-commerce.jpg")}
                alt="Glowing purple neural network representing AI-powered commerce"
                width={1200}
                height={900}
                fetchPriority="high"
              />
              <div className={styles.heroCaption}>
                <span className={styles.captionBar} />
                <span>INTELLIGENT COMMERCE RUNTIME • DISCOVERY &amp; PERSONALISATION ENGINE • ACTIVE MATRIX</span>
                <span className={styles.captionIcon}>{icons.chip}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Foundational capabilities ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>FOUNDATIONAL CAPABILITIES</p>
          <h2 className={styles.title}>Make E-Commerce More Intelligent with AI</h2>
          <p className={styles.lead}>
            Use AI-powered e-commerce solutions to understand customer intent and create more relevant shopping
            experiences.
          </p>
          <ul className={styles.foundGrid}>
            {foundations.map((f, i) => (
              <li className={styles.foundCard} key={f.text}>
                <span className={styles.iconTile}>{f.icon}</span>
                <h3>{f.text}</h3>
                <span className={styles.foundNum}>
                  <span className={styles.dash} />
                  {pad(i + 1)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>SERVICE PORTFOLIO</p>
          <h2 className={styles.title}>Our Intelligent Commerce Services</h2>

          <div className={styles.svcGrid}>
            <article className={styles.featured}>
              <span className={styles.featuredBadge}>FEATURED SERVICE</span>
              <h3>AI-Powered Product Search</h3>
              <p>Help customers find relevant products using natural-language and semantic search.</p>
              <div className={styles.queryBox}>
                <span className={styles.queryHead}>
                  <span className={styles.queryLabel}>
                    {icons.search}
                    Natural Query Stream
                  </span>
                  <b>SEMANTIC VECTOR MATCH</b>
                </span>
                <span className={styles.queryTrack}>
                  <span />
                </span>
              </div>
            </article>

            <article className={`${styles.svcCard} ${styles.recoCard}`}>
              <span className={`${styles.iconTile} ${styles.iconTileSmall}`}>{icons.thumbs}</span>
              <h3>Product Recommendations</h3>
              <p>Deliver personalised recommendations based on customer behaviour and product interactions.</p>
              <span className={styles.svcFoot}>
                BEHAVIOURAL MAPPING
                {icons.arrow}
              </span>
            </article>

            <article className={styles.svcCard}>
              <span className={`${styles.iconTile} ${styles.iconTileSmall}`}>{icons.message}</span>
              <h3>Conversational Commerce</h3>
              <p>Enable customers to discover products and ask questions through AI-powered conversations.</p>
              <span className={styles.svcFoot}>
                DIALOGUE ENGINE
                {icons.arrow}
              </span>
            </article>

            <article className={styles.svcCard}>
              <span className={`${styles.iconTile} ${styles.iconTileSmall}`}>{icons.headset}</span>
              <h3>AI Shopping Assistants</h3>
              <p>Provide automated product guidance and purchase assistance.</p>
              <span className={styles.svcFoot}>
                PURCHASE ADVISORY
                {icons.arrow}
              </span>
            </article>

            <article className={styles.svcCard}>
              <span className={`${styles.iconTile} ${styles.iconTileSmall}`}>{icons.flow}</span>
              <h3>E-Commerce Automation</h3>
              <p>Automate repetitive product, customer-support, and commerce workflows.</p>
              <span className={styles.svcFoot}>
                WORKFLOW DISPATCH
                {icons.arrow}
              </span>
            </article>

            <article className={styles.personalise}>
              <span className={`${styles.iconTile} ${styles.iconTileWhite}`}>{icons.sliders}</span>
              <span className={styles.personaliseText}>
                <b>AI Personalisation</b>
                <span>Create more relevant shopping experiences using available customer and behavioural data.</span>
              </span>
              <span className={styles.activeTag}>ACTIVE ADAPTATION</span>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Capability mapping ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>CAPABILITY MAPPING</p>
          <h2 className={styles.title}>AI Capabilities for Every Stage of Commerce</h2>

          <div className={styles.table}>
            <div className={styles.tableHead}>
              <span>AI CAPABILITY</span>
              <span>PURPOSE</span>
            </div>
            <ul>
              {capabilities.map((c) => (
                <li key={c.name}>
                  <span className={styles.capName}>
                    <span className={styles.capDot} />
                    {c.name}
                  </span>
                  <span className={styles.capPurpose}>{c.purpose}</span>
                  <span className={styles.capArrow}>{icons.arrow}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>STRUCTURED IMPLEMENTATION</p>
          <h2 className={styles.title}>Our Intelligent Commerce Process</h2>
          <ol className={styles.processGrid}>
            {process.map((p, i) => (
              <li className={styles.processCard} key={p.title}>
                <div className={styles.processTop}>
                  <span className={styles.processNum}>{pad(i + 1)}</span>
                  <span className={styles.processIcon}>{p.icon}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Benefits ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>STRATEGIC IMPACT</p>
          <h2 className={styles.title}>Business Benefits of Intelligent Commerce</h2>
          <ul className={styles.benefitGrid}>
            {benefits.map((b) => (
              <li className={`${styles.benefitCard} ${b.span === "wide" ? styles.wide : styles.third}`} key={b.kicker}>
                <span className={styles.iconTile}>{b.icon}</span>
                <span>
                  <small>{b.kicker}</small>
                  <b>{b.text}</b>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`} id="faq">
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <p className={styles.eyebrow}>CLARIFICATIONS &amp; INSIGHTS</p>
            <h2 className={styles.title}>Frequently Asked Questions About Intelligent Commerce</h2>
            <div className={styles.desk}>
              <span className={styles.deskIcon}>{icons.help}</span>
              <h3>Commerce Advisory Desk</h3>
              <p>Connect with our systems architects to evaluate and tailor commerce intelligence workflows.</p>
              <Link href="/contact" className={`${styles.primaryBtn} ${styles.deskBtn}`}>
                Talk to an Advisor
                <ExternalArrow />
              </Link>
            </div>
          </div>
          <CommerceFaq items={faqs} />
        </div>
      </section>
    </div>
  );
}