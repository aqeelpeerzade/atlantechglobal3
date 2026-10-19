import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import { ArrowIcon, GlobeIcon } from "@/lib/icons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build technology. Build your career. Live your life. Join Atlantech Global's digital engineering and consulting team: AI, cloud, product engineering and design roles in Pune.",
  alternates: { canonical: "/careers/" },
};

const CAREERS_EMAIL = "hello@atlantechglobal.com";
const mailto = (subject: string) => `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}`;

const principles = [
  { tag: "Flexibility", title: "Work your way.", desc: "Flexible and hybrid working opportunities wherever the role allows." },
  { tag: "Learning", title: "Stay curious.", desc: "Modern technologies, challenging projects and continuous skill development." },
  { tag: "Ownership", title: "Make an impact.", desc: "Small teams, fewer layers and real ownership of what you build." },
  { tag: "People", title: "Be human.", desc: "A culture built around performance, trust, respect and collaboration." },
];

const reasons = [
  { tag: "Technology", title: "AI-first thinking.", desc: "Build intelligent products, automations and digital experiences around emerging technology." },
  { tag: "Exposure", title: "Think globally.", desc: "Get exposure to customers, markets and projects across India and international regions." },
  { tag: "Engineering", title: "Build modern.", desc: "Work across cloud, SaaS, APIs, data, automation and contemporary architectures." },
  { tag: "Team", title: "Stay close.", desc: "Small, high-impact teams where your work is visible and ideas can move quickly." },
  { tag: "Growth", title: "Keep moving.", desc: "Take on bigger challenges and grow from contributor to owner to leader." },
  { tag: "Balance", title: "Live fully.", desc: "Recharge, explore, spend time with family and bring your best self back to work." },
];

const growth = [
  { tag: "Join", title: "Bring curiosity and ambition.", desc: "Step in with your distinct perspective and desire to make a tangible difference." },
  { tag: "Learn", title: "Develop new capabilities.", desc: "Upskill alongside seasoned architects and real production environments." },
  { tag: "Own", title: "Take responsibility.", desc: "Champion critical features and client roadmaps from inception to delivery." },
  { tag: "Lead", title: "Grow into bigger challenges.", desc: "Guide pods, mentor peers, and steer complex technological decisions." },
  { tag: "Build", title: "Create work that matters.", desc: "Leave lasting footprints on international enterprise systems and product lines." },
];

const roles = [
  { team: "Engineering", type: "Full Time", location: "Pune / Hybrid", title: "Full Stack Developer", detail: "Tech Stack: React • Next.js • Python • APIs" },
  { team: "Sales & Growth", type: "Full Time", location: "Pune / Remote", title: "Business Development Executive", detail: "Focus: B2B Sales • CRM • Lead Generation" },
  { team: "Design", type: "Full Time", location: "Pune / Hybrid", title: "UI/UX Designer", detail: "Expertise: Figma • UX • Prototyping" },
  { team: "Quality", type: "Full Time", location: "Pune / Hybrid", title: "QA Engineer", detail: "Discipline: API Testing • Automation • QA" },
];

const pad = (n: number) => String(n).padStart(2, "0");

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export default function CareersPage() {
  return (
    <div className={styles.page}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrowPill}>
                <span className={styles.pillDot} />
                CAREERS AT ATLANTECH GLOBAL
              </span>
              <h1 className={styles.heroTitle}>
                Build technology.
                <br />
                Build your career.
                <br />
                <span className={styles.gradText}>Live your life.</span>
              </h1>
              <p className={styles.heroCopy}>
                Join a forward-looking digital engineering and consulting collective designed around technical mastery,
                radical ownership, and intentional human balance.
              </p>
              <div className={styles.heroActions}>
                <a href="#openings" className={styles.primaryBtn}>
                  EXPLORE OPEN ROLES <ArrowIcon />
                </a>
                <a href={mailto("Resume submission")} className={styles.lightBtn}>
                  SEND YOUR RESUME
                </a>
              </div>
              <ul className={styles.heroTags}>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.4" />
                    <circle cx="12" cy="4" r="1.6" />
                    <circle cx="4.5" cy="16.5" r="1.6" />
                    <circle cx="19.5" cy="16.5" r="1.6" />
                    <path d="M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3" />
                  </svg>
                  AI, Cloud &amp; Contemporary Systems
                </li>
                <li>
                  <GlobeIcon />
                  Hybrid &amp; Global Projects
                </li>
              </ul>
            </div>

            <div className={styles.heroArt}>
              <img
                src={asset("/images/who-are-we.webp")}
                alt="Atlantech Global team collaborating around a conference table"
                width={1400}
                height={1000}
                fetchPriority="high"
              />
              <span className={`${styles.floatCard} ${styles.cardTop}`}>
                <span className={styles.floatIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
                  </svg>
                </span>
                <span>
                  <small>AI + CLOUD</small>
                  <b>Future-ready engineering</b>
                </span>
              </span>
              <span className={`${styles.floatCard} ${styles.cardMid}`}>
                <span className={`${styles.floatIcon} ${styles.floatIconBlue}`}>
                  <GlobeIcon />
                </span>
                <span>
                  <small>GLOBAL</small>
                  <b>International exposure</b>
                </span>
              </span>
              <span className={`${styles.floatCard} ${styles.cardBottom}`}>
                <span className={styles.floatIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
                  </svg>
                </span>
                <span>
                  <small>PEOPLE</small>
                  <b>Life beyond work</b>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Atlantech way + culture ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <div className={styles.wayGrid}>
            <div>
              <p className={styles.eyebrow}>THE ATLANTECH WAY</p>
              <h2 className={styles.title}>Your career matters. So does your life.</h2>
            </div>
            <p className={styles.wayCopy}>
              We don&apos;t believe building a great career means sacrificing everything outside of work. We want
              ambitious people to do meaningful work, grow continuously and still have time for the people, passions
              and experiences that matter.
            </p>
          </div>

          <figure className={styles.quote}>
            <span className={styles.quoteBlob} aria-hidden="true" />
            <blockquote>&ldquo;Great work should fit into a great life — not replace it.&rdquo;</blockquote>
            <figcaption>
              <span className={styles.quoteBar} aria-hidden="true" />
              CORE ATLANTECH PHILOSOPHY
            </figcaption>
          </figure>

          <div className={styles.cultureHead}>
            <p className={styles.eyebrowDark}>CULTURE PRINCIPLES</p>
            <h2 className={styles.subTitle}>Foundations of our everyday collaboration</h2>
          </div>
          <ol className={styles.principles}>
            {principles.map((p, i) => (
              <li key={p.tag}>
                <span className={styles.principleNum}>{pad(i + 1)}</span>
                <div className={styles.principleCard}>
                  <p className={styles.principleHead}>
                    <span>{p.tag.toUpperCase()}</span>
                    <b>{p.title}</b>
                  </p>
                  <p>{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Why Atlantech ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>WHY ATLANTECH</p>
          <h2 className={styles.title}>More than a job. A place to build.</h2>
          <p className={styles.lead}>
            Work alongside people solving real business problems through AI, cloud, engineering, data and digital
            transformation.
          </p>
          <ul className={styles.reasonGrid}>
            {reasons.map((r, i) => (
              <li className={styles.reasonCard} key={r.title}>
                <div className={styles.reasonTop}>
                  <span className={styles.reasonNum}>{pad(i + 1)}</span>
                  <span className={styles.reasonTag}>{r.tag.toUpperCase()}</span>
                </div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Growth path ---------- */}
      <section className={`${styles.section} ${styles.paleSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>YOUR GROWTH</p>
          <h2 className={styles.title}>Don&apos;t just take a job. Build a career.</h2>
          <p className={styles.lead}>
            Whether you&apos;re starting out or bringing years of experience, Atlantech gives you room to learn, own,
            lead and create.
          </p>
          <ol className={styles.growthGrid}>
            {growth.map((g, i) => (
              <li className={styles.growthCard} key={g.tag}>
                <div className={styles.growthTop}>
                  <span className={`${styles.growthNum} ${styles[`step${i + 1}`]}`}>{pad(i + 1)}</span>
                  <span className={styles.growthTag}>{g.tag.toUpperCase()}</span>
                </div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Open roles ---------- */}
      <section className={`${styles.section} ${styles.tintSection}`} id="openings">
        <div className="container">
          <p className={styles.eyebrow}>CURRENT OPPORTUNITIES</p>
          <h2 className={styles.title}>Find your next opportunity.</h2>
          <p className={styles.lead}>
            We&apos;re looking for curious minds, builders and problem solvers who want to work at the intersection of
            technology and business.
          </p>
          <ul className={styles.roles}>
            {roles.map((r) => (
              <li className={styles.roleCard} key={r.title}>
                <div className={styles.roleMain}>
                  <p className={styles.roleMeta}>
                    <span className={styles.roleTeam}>{r.team.toUpperCase()}</span>
                    <span className={styles.roleDot} aria-hidden="true" />
                    <span className={styles.roleType}>{r.type}</span>
                    <span className={styles.roleDot} aria-hidden="true" />
                    <span className={styles.roleLoc}>
                      <PinIcon />
                      {r.location}
                    </span>
                  </p>
                  <h3>{r.title}</h3>
                  <p className={styles.roleDetail}>{r.detail}</p>
                </div>
                <a href={mailto(`Application: ${r.title}`)} className={styles.primaryBtn}>
                  VIEW ROLE <ArrowIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
    
      <section className={styles.cta}>
        <svg className={styles.ctaLines} viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true">
          <g>
            <path d="M600 40L0 360" />
            <path d="M600 40L200 360" />
            <path d="M600 40L380 360" />
            <path d="M600 40L820 360" />
            <path d="M600 40L1000 360" />
            <path d="M600 40L1200 360" />
          </g>
        </svg>
        <div className={`container ${styles.ctaInner}`}>
          <p className={styles.ctaEyebrow}>DON&apos;T SEE YOUR ROLE?</p>
          <h2>Maybe your role hasn&apos;t been created yet.</h2>
          <p>
            We&apos;re always interested in meeting talented people who believe they can make a difference. Tell us what
            you can build, improve or bring to Atlantech Global.
          </p>
          <a href={mailto("Resume submission")} className={styles.primaryBtn}>
            SEND YOUR RESUME <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  );
}