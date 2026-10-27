import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import GrowthFaq, { type GrowthFaqItem } from "./growthfaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Digital Growth & Visibility Services",
  description:
    "Build stronger online visibility with technical SEO, organic search optimization, content strategy and AI search visibility designed for modern digital businesses.",
  alternates: { canonical: "/digital-transformation/digital-growth/" },
};

/** Where the "Digital Transformation Services" breadcrumb links. Change if your parent page lives elsewhere. */
const PARENT_HREF = "/digital-transformation-services";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
  `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
  pulseSearch: c(10, 10, 7) + "M21 21l-6-6M6 10h2l1.5-3 2 6L13 10h1",
  target: c(12, 12, 9) + c(12, 12, 5) + c(12, 12, 1.5),
  globeSearch: c(11, 11, 7) + "M4 11h14M11 4c-3 3-3 11 0 14M11 4c3 3 3 11 0 14M17 17l4 4",
  browserCheck: r(3, 4, 18, 14, 2) + "M3 9h18M9 13.5l2 2 4-4",
  helpPin: "M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10z" + "M10.2 9.5a1.8 1.8 0 1 1 2.6 1.6c-.5.3-.8.6-.8 1.2M12 14h.01",
  brainGear: c(12, 11, 6) + c(12, 11, 2) + "M12 17v4M9 21h6",
  code: "M9 7l-5 5 5 5M15 7l5 5-5 5",
  spark: "M3 17l5-5 4 3 7-8M15 7h5v5M18 3l.8 1.7L20.5 5.5 18.8 6.3 18 8z",
  fileSearch: "M7 3h7l4 4v14H7zM14 3v4h4" + c(12, 14, 2.5) + "M14 16l2 2",
  building: "M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01",
  doc: "M6 3h12v18H6zM9 8h6M9 12h6M9 16h4",
  bot: r(5, 8, 14, 11, 3) + "M12 8V5M9 13h.01M15 13h.01M9 16.5h6",
  userSearch: c(10, 8, 3.5) + "M3 20c0-3.5 3-5.5 7-5.5" + c(17, 17, 3) + "M19.2 19.2L21 21",
  megaphone: "M3 11v3l12 5V6zM15 8c3 .5 5 1.5 5 3.5S18 15 15 15.5M6 14v5",
  award: c(12, 9, 6) + "M9 14l-2 7 5-3 5 3-2-7M12 6.5l.7 1.5 1.6.2-1.2 1.1.3 1.6-1.4-.8-1.4.8.3-1.6-1.2-1.1 1.6-.2z",
  gauge: "M4 17a8 8 0 1 1 16 0M12 17l4-5M7 17h.01M17 17h.01",
  chartSearch: "M3 17l5-5 4 3 4-5" + c(18, 17, 2.5) + "M20 19l2 2",
  brain: c(12, 12, 8) + "M12 4v16M8.5 8.5c1 .8 1.5 2 1.5 3.5s-.5 2.7-1.5 3.5M15.5 8.5c-1 .8-1.5 2-1.5 3.5s.5 2.7 1.5 3.5",
  mountain: "M3 19l6-9 4 6 2-3 6 6zM17 4l.8 1.7L19.5 6.5 17.8 7.3 17 9l-.8-1.7L14.5 6.5l1.7-.8z",
  sparkles: "M9 4l1.8 4.2L15 10l-4.2 1.8L9 16l-1.8-4.2L3 10l4.2-1.8zM18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z",
  badgeCheck: "M12 3l2.3 1.5 2.7-.2 1 2.5 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-1 2.5-2.7-.2L12 21l-2.3-1.5-2.7.2-1-2.5-2.2-1.6.9-2.6-.9-2.6L6 8.8l1-2.5 2.7.2zM9 12l2 2 4-4",
  analytics: r(3, 3, 18, 18, 2) + "M8 16v-4M12 16V8M16 16v-6" + c(17, 17, 0.01),
  arrow: "M5 12h14M13 6l6 6-6 6",
  external: "M7 17L17 7M8 7h9v9",
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

const focus: { icon: IconName; text: string }[] = [
  { icon: "pulseSearch", text: "Improve organic search visibility" },
  { icon: "target", text: "Reach high-intent audiences" },
  { icon: "globeSearch", text: "Strengthen website discoverability" },
  { icon: "browserCheck", text: "Build topical and digital authority" },
  { icon: "helpPin", text: "Support qualified traffic and enquiries" },
  { icon: "brainGear", text: "Prepare websites for AI-driven search" },
];

const services: { icon: IconName; title: string; desc: string }[] = [
  { icon: "code", title: "Technical SEO Services", desc: "Improve website crawlability, indexation, performance, architecture, Core Web Vitals and technical foundations." },
  { icon: "spark", title: "SEO Consulting Services", desc: "Develop search strategies based on business goals, target markets, competition and customer search behaviour." },
  { icon: "fileSearch", title: "Organic Search Optimization", desc: "Improve website pages, content, internal linking and search relevance to capture valuable organic demand." },
  { icon: "building", title: "Enterprise SEO Services", desc: "Create scalable SEO frameworks for large websites, multiple services, markets and complex digital architectures." },
  { icon: "doc", title: "Content & Search Strategy", desc: "Build search-focused content around topics, questions and high-intent queries that matter to your audience." },
  { icon: "bot", title: "AI Search Optimization", desc: "Prepare content and digital entities for AI-powered search experiences, including AEO, GEO and AI SEO." },
];

const strategy = [
  { goal: "Increase visibility", plan: "Keyword & search opportunity mapping" },
  { goal: "Reach the right audience", plan: "Search intent & audience analysis" },
  { goal: "Improve rankings", plan: "Technical & on-page optimization" },
  { goal: "Build authority", plan: "Content & topical authority" },
  { goal: "Generate enquiries", plan: "Commercial landing pages & conversion paths" },
  { goal: "Improve AI visibility", plan: "AEO, GEO & structured content" },
  { goal: "Expand into markets", plan: "International & location-based SEO" },
];

const approach: { tag: string; tone: string; text: string }[] = [
  { tag: "SEO", tone: "tagSeo", text: "Improve organic search visibility" },
  { tag: "AEO", tone: "tagAeo", text: "Structure content to answer user questions clearly" },
  { tag: "GEO", tone: "tagGeo", text: "Improve visibility across generative search experiences" },
  { tag: "AI SEO", tone: "tagAi", text: "Optimize content and entities for AI-driven discovery" },
  { tag: "Structure", tone: "tagStructure", text: "Make important information easy to understand and extract" },
];

const steps = [
  { title: "Understand", desc: "Business goals, audience, market and competitors" },
  { title: "Analyze", desc: "Technical health, keywords, search intent and content gaps" },
  { title: "Optimize", desc: "Website structure, pages, content, internal links and technical elements" },
  { title: "Build Authority", desc: "Develop relevant content and strengthen topical relevance" },
  { title: "Expand Visibility", desc: "Target new search opportunities, markets and AI search experiences" },
  { title: "Measure & Improve", desc: "Track visibility, rankings, organic traffic, enquiries and growth opportunities" },
];

const matters: { icon: IconName; text: string }[] = [
  { icon: "userSearch", text: "Reach customers actively searching for solutions" },
  { icon: "megaphone", text: "Improve organic visibility without relying only on paid advertising" },
  { icon: "award", text: "Build stronger topical authority" },
  { icon: "gauge", text: "Create better website experiences" },
  { icon: "chartSearch", text: "Increase qualified organic traffic" },
  { icon: "brain", text: "Strengthen visibility across AI-powered search" },
];

const faqs: GrowthFaqItem[] = [
  {
    q: "What are Digital Growth & Visibility Services?",
    a: "Digital Growth & Visibility Services combine SEO, technical optimization, content strategy and AI search optimization to improve how a business is discovered across search engines and digital platforms.",
  },
  {
    q: "What is included in SEO Services?",
    a: "SEO services typically include technical SEO, keyword research, search intent analysis, on-page optimization, content strategy, internal linking, structured data, authority building and performance monitoring.",
  },
  {
    q: "What are Technical SEO Services?",
    a: "Technical SEO services improve the technical foundation of a website so search engines can efficiently crawl, render, understand and index its important pages.",
  },
  {
    q: "How does SEO help business growth?",
    a: "SEO helps businesses reach people actively searching for relevant products, services or information, creating opportunities for qualified organic traffic, enquiries and conversions.",
  },
  {
    q: "What is Enterprise SEO?",
    a: "Enterprise SEO is a scalable approach to optimizing large or complex websites, focusing on technical architecture, content systems, internal linking, international SEO and scalable optimization processes.",
  },
  {
    q: "What is AI SEO?",
    a: "AI SEO focuses on improving a brand's visibility across AI-powered search experiences by making website content, entities and information easier for AI systems to understand and reference.",
  },
  {
    q: "What is the difference between SEO, AEO and GEO?",
    a: "SEO focuses primarily on visibility in search results, AEO focuses on providing direct answers to user questions, while GEO focuses on visibility within generative AI and AI-powered search experiences.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO results depend on factors such as website authority, competition, technical health, content quality and the target market. Technical improvements can appear earlier, while sustainable organic growth generally requires consistent optimization over time.",
  },
];

export default function DigitalGrowthPage() {
  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        {/* ---------- Hero ---------- */}
        <section className={styles.hero}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href={PARENT_HREF}>Digital Transformation Services</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.crumbCurrent} aria-current="page">
              Digital Growth
            </span>
          </nav>
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                DIGITAL TRANSFORMATION SERVICES
              </span>
              <h1 className={styles.heroTitle}>
                Digital Growth &amp; Visibility Services for <span className={styles.gradText}>Sustainable Online Growth</span>
              </h1>
              <p className={styles.heroCopy}>
                Build stronger online visibility with technical SEO, organic search optimization, content strategy and
                AI search visibility designed for modern digital businesses.
              </p>
              <Link href="/contact" className={styles.gradBtn}>
                Get Found
                <Ic name="external" />
              </Link>
            </div>
            <div className={styles.heroArt}>
              <div className={styles.heroCard}>
                <img
                  className={styles.heroImg}
                  src={asset("/images/digital-growth.png")}
                  alt="Isometric network of connected purple nodes representing search visibility"
                  width={892}
                  height={668}
                  fetchPriority="high"
                />
              </div>
              <span className={styles.heroBadge}>
                <Ic name="badgeCheck" />
                ENTERPRISE DISCOVERY ENGINE
              </span>
            </div>
          </div>
        </section>

        {/* ---------- Digital presence ---------- */}
        <section className={`${styles.section} ${styles.white}`}>
          <div className={styles.introGrid}>
            <div>
              <h2 className={styles.title}>Turn Digital Presence into Business Visibility</h2>
              <span className={styles.titleBar} />
            </div>
            <div>
              <p className={styles.introLead}>
                Having a strong website is only the beginning. Your digital platforms need to be discoverable when
                customers, businesses and decision-makers are searching for solutions.
              </p>
              <p className={styles.introCopy}>
                Atlantech combines SEO services, technical optimization and digital search strategies to improve how
                your website is discovered across traditional and AI-powered search.
              </p>
            </div>
          </div>
          <p className={styles.label}>OUR FOCUS:</p>
          <ul className={styles.focusGrid}>
            {focus.map((f) => (
              <li key={f.text}>
                <span className={styles.tile40}>
                  <Ic name={f.icon} />
                </span>
                <h3>{f.text}</h3>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Services ---------- */}
        <section className={`${styles.section} ${styles.pale}`}>
          <div className={`${styles.head} ${styles.headWide}`}>
            <h2 className={styles.title}>Our Digital Growth &amp; Visibility Services</h2>
            <p className={styles.lead}>
              A complete approach covering the technical, content and search elements that influence online visibility.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((s, i) => (
              <article className={styles.serviceCard} key={s.title}>
                <div className={styles.serviceTop}>
                  <span className={styles.serviceNum}>{pad(i + 1)}</span>
                  <span className={styles.tile32}>
                    <Ic name={s.icon} />
                  </span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/contact" className={styles.serviceLink}>
                  Explore Architecture
                  <Ic name="arrow" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Search strategy ---------- */}
        <section className={`${styles.section} ${styles.pale}`}>
          <div className={`${styles.head} ${styles.headTight}`}>
            <h2 className={styles.title}>Build a Search Strategy Around Your Business</h2>
            <p className={styles.lead}>SEO works best when it is connected to what your business actually wants to achieve.</p>
          </div>
          <div className={styles.table} role="table" aria-label="Business goals and search strategy">
            <div className={`${styles.tRow} ${styles.tHead}`} role="row">
              <span role="columnheader">BUSINESS GOAL</span>
              <span role="columnheader" className={styles.tMid}>
                ALIGNMENT
              </span>
              <span role="columnheader" className={styles.tAccent}>
                SEARCH STRATEGY
              </span>
            </div>
            {strategy.map((s) => (
              <div className={styles.tRow} role="row" key={s.goal}>
                <b role="cell">{s.goal}</b>
                <span className={styles.tArrow} aria-hidden="true">
                  <Ic name="arrow" />
                </span>
                <span role="cell" className={styles.tPlan}>
                  {s.plan}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.softBar}>Instead of optimizing for rankings alone, we connect search visibility with business growth.</p>
        </section>

        {/* ---------- SEO + AI search ---------- */}
        <section className={`${styles.section} ${styles.white}`}>
          <div className={styles.aiHead}>
            <div>
              <span className={styles.aiPill}>
                <Ic name="sparkles" />
                NEXT-GENERATION DISCOVERY
              </span>
              <h2 className={styles.title}>SEO + AI Search: Prepare for the Next Search Experience</h2>
            </div>
            <div>
              <p className={styles.aiLead}>Search is no longer limited to traditional blue-link results.</p>
              <p className={styles.aiCopy}>
                Users increasingly discover information through Google AI Overviews, conversational search and AI
                assistants. This creates a new opportunity for businesses to make their expertise easier for search
                engines and AI systems to understand.
              </p>
            </div>
          </div>
          <p className={styles.label}>OUR APPROACH COMBINES:</p>
          <ul className={styles.approachGrid}>
            {approach.map((a) => (
              <li key={a.tag}>
                <span className={`${styles.tag} ${styles[a.tone]}`}>{a.tag}</span>
                <p>{a.text}</p>
              </li>
            ))}
          </ul>
          <p className={styles.closing}>
            This creates a stronger search presence across both traditional and emerging search experiences.
          </p>
        </section>

        {/* ---------- Process ---------- */}
        <section className={`${styles.section} ${styles.pale}`}>
          <div className={`${styles.head} ${styles.headWide}`}>
            <h2 className={styles.title}>From Search Opportunity to Measurable Growth</h2>
            <p className={styles.lead}>Our approach follows a clear process:</p>
          </div>
          <ol className={styles.stepGrid}>
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className={styles.stepNum}>{pad(i + 1)}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Why it matters ---------- */}
        <section className={`${styles.section} ${styles.white}`}>
          <div className={styles.head}>
            <h2 className={styles.title}>Why Digital Growth &amp; Visibility Matters</h2>
            <p className={styles.lead}>A well-optimized digital presence can help your business:</p>
          </div>
          <ul className={styles.matterGrid}>
            {matters.map((m) => (
              <li key={m.text}>
                <span className={styles.tileWhite}>
                  <Ic name={m.icon} />
                </span>
                <h3>{m.text}</h3>
              </li>
            ))}
            <li className={styles.matterHero}>
              <span className={styles.tileGlass}>
                <Ic name="mountain" />
              </span>
              <h3>Support long-term digital growth</h3>
            </li>
          </ul>
          <p className={styles.goalBar}>The goal isn&apos;t simply to rank. It&apos;s to become easier to find, understand and trust.</p>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={`${styles.section} ${styles.pale} ${styles.sectionFaq}`} id="faq">
          <h2 className={`${styles.title} ${styles.faqTitle}`}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <aside className={styles.desk}>
              <span className={styles.deskIcon}>
                <Ic name="analytics" />
              </span>
              <h3>Organic Search &amp; AI Visibility Architecture</h3>
              <p>
                Connect with our technical search architects to evaluate your platform indexation, Core Web Vitals, and
                presence across LLM search engines.
              </p>
              <Link href="/contact" className={styles.deskLink}>
                Request Strategic Audit
                <Ic name="external" />
              </Link>
            </aside>
            <GrowthFaq items={faqs} />
          </div>
        </section>
      </div>
    </div>
  );
}
