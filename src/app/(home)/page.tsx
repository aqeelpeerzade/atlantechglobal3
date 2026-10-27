
import HeroScroll from "./HeroScroll";
import type { Metadata } from "next";
import Link from "next/link";
import ConsultationForm from "@/components/ConsultationForm/ConsultationForm";
import Faq, { type FaqItem } from "./Faq";
import IndustryGrid, { type Industry } from "./IndustryGrid";
import LazyVideo from "./LazyVideo";
import RevealOnScroll from "./RevealOnScroll";
import TechTiles from "./TechTiles";
import Testimonials, { type Testimonial } from "./Testimonials";
import { ArrowIcon, CheckIcon } from "@/lib/icons";
import { asset } from "@/lib/asset";
import styles from "./page.module.css";

// export const metadata: Metadata = {
//   title: { absolute: "Atlantech Global — Your AI-Ready Technology & Consulting Partner" },
//   description:
//     "Atlantech Global is a leading IT solutions company delivering AI & Automation, Digital Transformation, Product Engineering, Cloud, Data Analytics and Managed Services worldwide.",
//   alternates: { canonical: "/" },
// };

const clientLogoRows: string[][] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20, 21, 22, 25, 27, 28],
  [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 48],
].map((row) => row.map((n) => `/images/logos/logo_${n}.${n === 48 ? "png" : "webp"}`));

const impactStats = [
  { num: "10+", title: "Years of Industry Experience", sub: "Consistent enterprise excellence" },
  { num: "100+", title: "Successful Digital Transformation Projects", sub: "Across 20+ industries" },
  { num: "20+", title: "Global Enterprise Clients", sub: "Long-term partnerships" },
  { num: "98%", title: "Project Delivery Success Rate", sub: "Global delivery network" },
];

const deliveryHighlights = [
  {
    icon: "shield",
    title: "Enterprise-Grade Delivery Excellence",
    desc: "Agile delivery, rigorous quality assurance, and scalable Enterprise IT Solutions that deliver secure, reliable, and measurable business outcomes consistently.",
  },
  {
    icon: "globe",
    title: "Global Expertise. Dedicated Partnership.",
    desc: "Our global experts deliver seamless technology solutions with dedicated support, transparent communication, and efficient execution aligned to your business goals.",
  },
  {
    icon: "trend",
    title: "Focused on Long-Term Business Success",
    desc: "We build lasting technology partnerships by optimizing digital ecosystems with Future-Ready Enterprise Solutions that accelerate innovation, growth, and long-term success.",
  },
] as const;

const services = [
  {
    title: "Digital Transformation",
    desc: "Transform legacy systems into agile, connected digital ecosystems with innovative strategies that improve efficiency, customer experiences, and business agility.",
    cta: "Explore Digital Transformation",
    image: "/images/1.webp",
    href: "digital-transformation-services",
  },
  {
    title: "AI & Automation",
    desc: "Leverage Artificial Intelligence, Machine Learning, and intelligent automation to streamline operations, optimize workflows, and unlock smarter business decisions.",
    cta: "Discover AI Solutions",
    image: "/images/2.webp",
    href: "ai-automation-services",
  },
  {
    title: "Product Engineering",
    desc: "Design, develop, and modernize scalable digital products with agile engineering, user-centric design, and enterprise-grade performance.",
    cta: "Build Digital Products",
    image: "/images/3.webp",
    href: "product-engineering-services",
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Accelerate cloud adoption with secure, scalable, and high-performance cloud infrastructure, migration, modernization, and managed cloud services.",
    cta: "Modernize Your Cloud",
    image: "/images/4.webp",
    href: "cloud-infrastructure-services",
  },
  {
    title: "Data & Analytics",
    desc: "Transform enterprise data into actionable insights with advanced analytics, business intelligence, predictive modeling, and real-time reporting.",
    cta: "Unlock Data Insights",
    image: "/images/5.webp",
    href: "data-analytics-services",
  },
  {
    title: "Managed Services",
    desc: "Ensure maximum uptime and operational efficiency with proactive monitoring, infrastructure management, application support, cybersecurity, and continuous optimization.",
    cta: "Explore Managed Services",
    image: "/images/6.webp",
    href: "managed-services",
  },
];

const technologies = [
  {
    icon: "/images/cc-ai.svg",
    image: "/images/genetarive-ai-and-llms.webp",
    title: "Artificial Intelligence & Automation",
    desc: "Harness AI, Generative AI, and intelligent automation to streamline operations, enhance decision-making, automate workflows, and create smarter customer experiences.",
  },
  {
    icon: "/images/cc-ai.svg",
    image: "/images/cloud.webp",
    title: "Cloud Computing",
    desc: "Build secure, scalable, and resilient cloud environments with cloud migration, modernization, hybrid infrastructure, and cloud-native application development.",
  },
  {
    icon: "/images/da-de.svg",
    image: "/images/data.webp",
    title: "Data Analytics & Business Intelligence",
    desc: "Transform enterprise data into actionable insights through advanced analytics, real-time dashboards, predictive modeling, and business intelligence solutions.",
  },
  {
    icon: "/images/da-de.svg",
    image: "/images/5.webp",
    title: "Digital Engineering",
    desc: "Accelerate product innovation with modern software engineering, application modernization, DevOps, API integration, and scalable digital platforms.",
  },
  {
    icon: "/images/iot-cs.svg",
    image: "/images/6.webp",
    title: "Internet of Things (IoT)",
    desc: "Connect devices, systems, and operations with intelligent IoT solutions that improve monitoring, automation, efficiency, and real-time decision-making.",
  },
  {
    icon: "/images/iot-cs.svg",
    image: "/images/engineer-monitoring-live-operations.webp",
    title: "Cybersecurity",
    desc: "Protect critical business assets with enterprise-grade cybersecurity, identity management, threat detection, risk assessment, and compliance-driven security solutions.",
  },
];

const industries: Industry[] = [

  { label: "Healthcare & Life Sciences", image: "/images/industry-healthcare.webp", icon: "/images/lifescience.svg" },
  { label: "Education", image: "/images/engineer-working-on-laptop.webp", icon: "/images/digital-experience.svg" },
  { label: "Manufacturing", image: "/images/industry-manufacturing.webp", icon: "/images/manufacturing.svg" },
  { label: "Retail & E-Commerce", image: "/images/industry-retail.webp", icon: "/images/e-com.svg" },
  { label: "Hospitality", image: "/images/atlantech-global-collaborating.webp", icon: "/images/inovation.svg" },

  { label: "Real Estate", image: "/images/industry-banking.webp", icon: "/images/banking.svg" },
  { label: "Telecommunications", image: "/images/industry-telecom.webp", icon: "/images/telecommunications.svg" },
  { label: "Energy & Utilities", image: "/images/industry-energy.webp", icon: "/images/energy-utility.svg" },
  { label: "Logistics & Supply Chain", image: "/images/industry-logistics.webp", icon: "/images/logistics.svg" },
  { label: "Fintech", image: "/images/industry-government.webp", icon: "/images/gov-pub.svg" },




];

const caseStudies = [
  {
    tag: "FINANCIAL SERVICES",
    title: "Reimagining retail banking with an AI-native customer platform",
    desc: "A tier-1 retail bank needed to unify 14 legacy systems into a single, real-time customer experience across 2,400 branches.",
    image: "/images/Financial-services.webp",
    stats: [
      { value: "38%", label: "faster loan origination" },
      { value: "2.4M", label: "customers migrated" },
      { value: "$52M", label: "annual efficiency gain" },
    ],
  },
  {
    tag: "HEALTHCARE",
    title: "Cloud-native clinical intelligence for a global hospital network",
    desc: "A multinational healthcare provider required HIPAA/HITRUST-grade data infrastructure to deliver predictive clinical insights at the point of care.",
    image: "/images/healthcare.webp",
    stats: [
      { value: "27%", label: "reduction in readmissions" },
      { value: "180ms", label: "median inference latency" },
      { value: "9", label: "countries live" },
    ],
  },
  {
    tag: "RETAIL & COMMERCE",
    title: "Composable commerce platform powering a global luxury brand",
    desc: "A heritage luxury retailer needed a global, headless commerce platform to serve 42 markets with unified inventory and personalized experiences.",
    image: "/images/retail-and-commerce.webp",
    stats: [
      { value: "3.1x", label: "conversion uplift" },
      { value: "42", label: "markets launched" },
      { value: "99.99%", label: "platform uptime" },
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    quote: ["Atlantech didn't sell us a system, they engineered a ", "measurable business outcome.", " Twelve months in, our transformation program is delivering ahead of every KPI we set."],
    name: "Elena Marchetti",
    role: "Chief Strategy Officer · Northwind Financial",
    initials: "EM",
    photo: "/images/client1.webp",
  },
  {
    quote: ["The team moved at our pace and never lost sight of ", "the business case.", " What used to take quarters now happens in weeks."],
    name: "David Kwon",
    role: "VP Engineering · Axiom Health",
    initials: "DK",
    photo: "/images/client2.webp",
  },
  {
    quote: ["Atlantech's engineers embedded with ours from day one. It felt less like a vendor and more like ", "an extension of our team.", ""],
    name: "Priya Nair",
    role: "CTO · Stellaris Retail",
    initials: "PN",
    photo: "/images/client3.webp",
  },
];

const platforms = [
  "AWS", "Azure", "Google Cloud", "Salesforce", "Adobe", "Microsoft",
  "Oracle", "SAP", "Shopify", "HubSpot", "Databricks", "Snowflake",
];

const processSteps = [
  { title: "Discover", desc: "Deep-dive discovery, opportunity mapping and value framing." },
  { title: "Strategy", desc: "Business-aligned roadmap, target state and investment case." },
  { title: "Architecture", desc: "Reference architectures, platform and data blueprints." },
  { title: "Development", desc: "Agile squads engineering scalable, production-grade systems." },
  { title: "Deployment", desc: "Zero-downtime rollouts, migration and enterprise change." },
  { title: "Optimization", desc: "Continuous engineering, FinOps and outcome measurement." },
];

const whyCards = [
  { icon: "/images/inovation.svg", title: "Innovation First", desc: "AI-native design thinking woven into every engagement." },
  { icon: "/images/enterprice.svg", title: "Enterprise Security", desc: "Zero-trust, SOC 2, ISO 27001 and HIPAA-ready delivery." },
  { icon: "/images/AI-native.svg", title: "AI Native", desc: "In-house applied AI practice, from foundation models to agents." },
  { icon: "/images/global-delivery.svg", title: "Global Delivery", desc: "Distributed squads across the US, Europe, LATAM and APAC." },
  { icon: "/images/certified.svg", title: "Certified Experts", desc: "500+ certified cloud, data and platform engineers." },
  { icon: "/images/247.svg", title: "24×7 Support", desc: "Global SRE and managed operations for mission-critical systems." },
];

const featuredArticle = {
  image: "/images/featured.webp",
  tag: "FEATURED · TRANSFORMATION",
  title: "The 2026 State of Enterprise Transformation Report",
  meta: "18 min read · Research",
};

const articles = [
  { image: "/images/ai-strategy.webp", cat: "AI STRATEGY", title: "The Enterprise AI Playbook: from experiments to operating model", read: "12 min read" },
  { image: "/images/cloud.webp", cat: "CLOUD", title: "FinOps at scale: reducing cloud spend without slowing engineering", read: "9 min read" },
  { image: "/images/data.webp", cat: "DATA", title: "Building a data platform your regulators will actually approve", read: "10 min read" },
];

const faqs: FaqItem[] = [
  {
    q: "What does an Enterprise Technology Solutions company do?",
    a: "An Enterprise Technology Solutions company helps businesses improve operations, increase efficiency, and accelerate digital transformation through integrated technology services. These services typically include AI & Automation, Digital Transformation, Product Engineering, Cloud & Infrastructure, Data Analytics, and Managed Services. Atlantech Global delivers customized technology solutions that enable organizations to innovate, scale, and achieve long-term business growth.",
  },
  {
    q: "How can digital transformation benefit my business?",
    a: "Digital transformation helps businesses modernize legacy systems, automate manual processes, improve customer experiences, and make data-driven decisions. By adopting technologies such as AI, cloud computing, and advanced analytics, organizations can reduce operational costs, increase productivity, and respond more quickly to market changes. Atlantech Global develops tailored digital transformation strategies that align technology with your business objectives.",
  },
  {
    q: "Why should businesses invest in AI and automation?",
    a: "AI and automation help organizations streamline workflows, reduce repetitive tasks, improve decision-making, and enhance operational efficiency. Businesses use AI to automate customer support, analyze data, forecast demand, and optimize business processes. Atlantech Global implements AI-powered solutions that improve productivity while enabling organizations to innovate faster and scale efficiently.",
  },
  {
    q: "What services does Atlantech Global provide?",
    a: "Atlantech Global provides end-to-end Enterprise Technology Solutions designed to support digital transformation and business growth. Our core services include:",
    list: ["Digital Transformation", "AI & Automation", "Product Engineering", "Cloud & Infrastructure", "Data Analytics", "Managed Services"],
    outro: "These solutions help businesses modernize technology, improve efficiency, strengthen security, and accelerate innovation across industries.",
  },
  {
    q: "Why choose Atlantech Global as your technology partner?",
    a: "Atlantech Global combines industry expertise, innovative technologies, and a customer-first approach to deliver scalable Enterprise Technology Solutions. We help organizations adopt AI, modernize applications, optimize cloud infrastructure, and unlock the value of data through customized solutions. Our focus on quality, security, and long-term partnerships enables businesses to accelerate digital transformation and achieve sustainable growth.",
  },
];

const contactBenefits = [
  { title: "Complimentary Digital Audit", desc: "A no-cost strategic assessment of your current architecture and roadmap." },
  { title: "Senior Advisory Team", desc: "Direct engagement with practice leads, not junior sales reps." },
  { title: "Response within 24 hours", desc: "Global coverage across five time zones." },
];

const techColumns = [[0, 2, 4], [1, 3, 5]].map((col) => col.map((i) => technologies[i]));

const highlightIcons = {
  shield: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z" />
    </>
  ),
  trend: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
};

export default function HomePage() {

  return (
    <>
      <RevealOnScroll />

      <HeroScroll />


      <section className={styles.trusted} aria-labelledby="trusted-title">
        <h2 id="trusted-title" className={styles.trustedTitle}>
          Trusted by Global Businesses Worldwide for Future-Ready Enterprise IT Solutions
        </h2>
        <p className={styles.trustedSub}>Transforming Vision into Digital Excellence</p>
        <div className={styles.marquee} aria-hidden="true">
          {clientLogoRows.map((row, r) => (
            <div className={styles.marqueeRow} key={r}>
              <div className={styles.marqueeTrack}>
                {[...row, ...row].map((src, i) => (
                  <img key={i} src={asset(src)} alt="" className={styles.marqueeLogo} width={160} height={60} loading="lazy" decoding="async" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={`container ${styles.aboutIntro}`}>
          <div className={styles.aboutMedia}>
            <img
              src={asset("/images/who-are-we.webp")}
              alt="Atlantech Global team in a strategy meeting"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <p className={styles.aboutStat}>
              <strong>100+</strong>
              <span>Successful digital transformation projects delivered.</span>
            </p>
          </div>
          <div>
            <p className="eyebrow-pill">WHO WE ARE</p>
            <h2 className="section-title">
              Accelerating Digital Innovation for{" "}
              <span className="text-purple">Modern Enterprises Worldwide</span>
            </h2>
            <p className="section-body">
              Atlantech Global partners with organizations worldwide to design, build, and scale
              intelligent digital solutions that create measurable business impact. As a Trusted IT
              Solutions Provider, we help businesses modernize operations through AI &amp; Automation,
              Product Engineering, Cloud &amp; Infrastructure, Data &amp; Analytics, and Managed Services.
            </p>
            <p className="section-body">
              Our mission is to deliver Future-Ready Enterprise Solutions that enable innovation,
              improve operational efficiency, and support sustainable growth in an evolving digital
              landscape.
            </p>
            <ul className={styles.checks}>
              {deliveryHighlights.map((item) => (
                <li key={item.title}>
                  <CheckIcon />
                  {item.title}
                </li>
              ))}
            </ul>
            <Link href="/who-we-are" className="btn btn-primary">
              Learn About Our Approach <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className={`container ${styles.highlights}`}>
          {deliveryHighlights.map((item, i) => (
            <article className={`${styles.highlight} ${styles.reveal}`} data-reveal style={{ "--d": `${i * 90}ms` } as React.CSSProperties} key={item.title}>
              <div className={styles.highlightHead}>
                <span className={styles.highlightIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {highlightIcons[item.icon]}
                  </svg>
                </span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className={`container ${styles.impact}`}>
          <p className="eyebrow-pill center">BUILT FOR SCALE</p>
          <h2 className="section-title center">Our Impact in Numbers</h2>
          <div className={styles.impactGrid}>
            {impactStats.map((stat, i) => (
              <div className={`${styles.impactCard} ${styles.reveal}`} data-reveal style={{ "--d": `${i * 90}ms` } as React.CSSProperties} key={stat.title}>
                <span className={styles.impactIcon}>
                  <img src={asset("/images/starr.svg")} alt="" width={24} height={24} />
                </span>
                <p className={styles.impactNum}>{stat.num}</p>
                <h3 className={styles.impactTitle}>{stat.title}</h3>
                <p className={styles.impactSub}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="services">
        <div className="container">
          <p className="eyebrow-pill">SERVICES</p>
          <h2 className="section-title">
            Comprehensive IT Services Designed for{" "}
            <span className="text-purple">Future-Ready Enterprises</span>
          </h2>
          <p className="section-body">
            Atlantech Global delivers innovative Enterprise Technology Solutions, combining strategic
            consulting, AI-driven automation, and scalable Enterprise IT Solutions to accelerate
            business growth.
          </p>
          <div className={styles.serviceGrid}>
            {services.map((s, i) => (
              <article className={`${styles.serviceCard} ${styles.reveal}`} data-reveal style={{ "--d": `${(i % 3) * 90}ms` } as React.CSSProperties} key={s.title}>
                <img src={asset(s.image)} alt="" width={640} height={480} loading="lazy" decoding="async" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {/* <a href="#contact" className={styles.serviceLink}>
                  {s.cta} <ArrowIcon />
                </a> */}
                <Link href={s.href} className={styles.serviceLink}>
                  {s.cta} <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>

          <div className={styles.ctaStrip}>
            {/* minWidth={768} for future to add in LazyVideo */}
            <LazyVideo src={asset("/videos/cta-network.mp4")} className={styles.ctaVideo} />
            <div className={styles.ctaOverlay} />
            <h2>
              Turn Technology Into <span className="text-purple-light">Your Competitive Advantage</span>
            </h2>
            <p>
              Modernize operations, optimize performance, and unlock innovation with enterprise
              technology solutions tailored to your business objectives.
            </p>
            <a href="#contact" className="btn btn-primary">
              Schedule a Consultation <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} id="solutions">
        <div className="container">
          <div className={styles.reveal} data-reveal>
            <h2 className="section-title center">
              Innovative Technologies Driving <span className="text-purple">Enterprise Transformation</span>
            </h2>
            <p className="section-body center">
              We leverage cutting-edge technologies to build intelligent, secure, and scalable digital
              solutions that accelerate innovation, improve operational efficiency, and drive long-term
              business growth.
            </p>
          </div>
          <div className={styles.techGrid}>
            <TechTiles columns={techColumns} />
          </div>
        </div>
      </section>

      <section className={styles.section} id="industries">
        <div className="container">
          <p className="eyebrow-pill">INDUSTRIES</p>
          <h2 className="section-title">
            Technology Solutions Tailored for <span className="text-purple">Every Industry</span>
          </h2>
          <p className="section-body">
            Atlantech Global delivers industry-specific Enterprise Technology Solutions that help
            organizations modernize operations, improve efficiency, accelerate innovation, and achieve
            sustainable digital transformation across global markets.
          </p>
          <IndustryGrid items={industries} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} id="work">
        <div className="container">
          <p className="eyebrow-pill">CASE STUDY</p>
          <h2 className="section-title">
            Real Business Challenges. <span className="text-purple">Smarter Technology Solutions</span>
          </h2>
          <div>
            {caseStudies.map((c) => (
              <article className={styles.caseRow} key={c.title}>
                <div className={styles.caseMedia}>
                  <img src={asset(c.image)} alt="" width={800} height={600} loading="lazy" decoding="async" />
                </div>
                <div>
                  <p className={styles.caseTag}>{c.tag}</p>
                  <h3>{c.title}</h3>
                  <p className={styles.caseDesc}>{c.desc}</p>
                  <ul className={styles.caseStats}>
                    {c.stats.map((s) => (
                      <li className={styles.caseStat} key={s.label}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={styles.caseLink}>
                    Discuss a similar project <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.testimonials} id="testimonials">
            <p className="eyebrow-pill center">SUCCESS STORIES</p>
            <h2 className="section-title center">
              Success Stories from <span className="text-purple">Our Clients</span>
            </h2>
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <p className="eyebrow-pill center">TECHNOLOGY ECOSYSTEM</p>
          <h2 className="section-title center">
            Engineered on the <span className="text-purple">world&apos;s leading platforms.</span>
          </h2>
          <p className="section-body center">
            Certified partnerships and deep engineering expertise across the enterprise stack.
          </p>
          <ul className={styles.platformGrid}>
            {platforms.map((p) => (
              <li className={styles.platform} key={p}>
                <span className={styles.platformIcon}>
                  <img src={asset("/images/tech-ecosystem-icons.svg")} alt="" width={18} height={18} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`}>
        <div className="container">
          <p className="eyebrow-pill center">OUR PROCESS</p>
          <h2 className="section-title center">
            A proven path from ambition to <span className="text-purple">measurable outcome.</span>
          </h2>
          <ol className={styles.process}>
            {processSteps.map((step, i) => (
              <li className={styles.step} key={step.title}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.splitHeader}>
            <div>
              <p className="eyebrow-pill">WHY ATLANTECH</p>
              <h2 className="section-title">
                The consulting partner{" "}
                <span className="text-purple">enterprises choose to scale with.</span>
              </h2>
            </div>
            <a href="#contact" className="btn btn-primary">
              Talk to an expert <ArrowIcon />
            </a>
          </div>
          <div className={styles.whyGrid}>
            {whyCards.map((card, i) => (
              <article className={`${styles.whyCard} ${styles.reveal}`} data-reveal style={{ "--d": `${(i % 3) * 90}ms` } as React.CSSProperties} key={card.title}>
                <span className={styles.whyIcon}>
                  <img src={asset(card.icon)} alt="" width={22} height={22} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} id="insights">
        <div className="container">
          <p className="eyebrow-pill">INSIGHTS</p>
          <h2 className="section-title">
            Latest Insights on Enterprise Technology &amp;{" "}
            <span className="text-purple">Digital Innovation</span>
          </h2>
          <div className={styles.insightsGrid}>
            <article className={styles.featured}>
              <img src={asset(featuredArticle.image)} alt="" width={900} height={600} loading="lazy" decoding="async" />
              <span className={styles.featuredTag}>{featuredArticle.tag}</span>
              <h3>{featuredArticle.title}</h3>
              <p>{featuredArticle.meta}</p>
            </article>
            <div className={styles.articles}>
              {articles.map((a) => (
                <article className={styles.article} key={a.title}>
                  <img src={asset(a.image)} alt="" width={140} height={140} loading="lazy" decoding="async" />
                  <div>
                    <span className={styles.articleCat}>{a.cat}</span>
                    <h3>{a.title}</h3>
                    <p>{a.read}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.darkCta}>
            <span className="eyebrow-pill dark">LET&apos;S BUILD WHAT&apos;S NEXT</span>
            <h2>
              Ready to engineer your <span className="text-purple-light">next chapter of growth?</span>
            </h2>
            <p>Partner with a consulting team that ships enterprise outcomes — not slide decks.</p>
            <div className={styles.actions}>
              <a href="#contact" className="btn btn-primary">
                Start Your Transformation <ArrowIcon />
              </a>
              <Link href="/contact" className="btn btn-outline-dark">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="faq">
        <div className="container">
          <h2 className="section-title center">
            Frequently Asked <span className="text-purple">Questions</span>
          </h2>
          <Faq items={faqs} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} id="contact">
        <div className={`container ${styles.contactGrid}`}>
          <div className={styles.contactInfo}>
            <p className="eyebrow-pill">LET&apos;S TALK STRATEGY</p>
            <h2 className="section-title">
              Schedule a <span className="text-purple">Consultation.</span>
            </h2>
            <p className="section-body">
              Let&apos;s discuss your transformation roadmap and identify key growth opportunities for
              your enterprise infrastructure.
            </p>
            {contactBenefits.map((b) => (
              <div className={styles.benefit} key={b.title}>
                <span className={styles.benefitCheck}>
                  <CheckIcon />
                </span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
            <dl className={styles.contactMeta}>
              <div>
                <dt>OFFICES</dt>
                <dd>India · Kuwait</dd>
              </div>
              <div>
                <dt>REACH US</dt>
                <dd>
                  <a href="mailto:hello@atlantechglobal.com">hello@atlantechglobal.com</a>
                </dd>
              </div>
            </dl>
          </div>
          <ConsultationForm source="Homepage" />
        </div>
      </section>
    </>
  );
}
