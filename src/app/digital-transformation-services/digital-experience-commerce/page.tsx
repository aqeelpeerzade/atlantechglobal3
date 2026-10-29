import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import DxFaq, { type DxFaqItem } from "./experiencefaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Digital Experience & Digital Commerce | Atlantech Global",
    description:
        "Create digital experiences that make it easier for customers to discover, interact, purchase and stay connected with your business.",
    alternates: { canonical: "/digital-transformation/digital-experience-commerce" },
};

/** Where the "Digital Transformation Services" breadcrumb links. */
const PARENT_HREF = "/digital-transformation-services";
/** Hero image in /public/images (same file your current page uses). */
const HERO_IMAGE = "/images/digital-growth.png";

/* ---- path helpers: every icon is one stroke path on a 24×24 grid ---- */
const c = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const r = (x: number, y: number, w: number, h: number, k = 2) =>
    `M${x + k} ${y}h${w - 2 * k}a${k} ${k} 0 0 1 ${k} ${k}v${h - 2 * k}a${k} ${k} 0 0 1 ${-k} ${k}h${-(w - 2 * k)}a${k} ${k} 0 0 1 ${-k} ${-k}v${-(h - 2 * k)}a${k} ${k} 0 0 1 ${k} ${-k}z`;

const paths = {
    external: "M7 17L17 7M8 7h9v9",
    help: c(12, 12, 9) + "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01",
    layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
    user: c(12, 8, 3.5) + "M5 21c0-4 3-6 7-6s7 2 7 6",
    users: c(9, 8, 3) + c(17, 9, 2.4) + "M3 20c0-3.5 2.8-5.5 6-5.5s6 2 6 5.5M15 15c3 0 6 1.5 6 4.5",
    devices: r(3, 5, 12, 10, 1.5) + r(14, 10, 7, 11, 1.5) + "M7 19h5",
    bag: "M6 8h12l1 12H5zM9 8a3 3 0 0 1 6 0",
    portal: r(4, 5, 16, 15, 2) + c(12, 11, 2) + "M8.5 17c.8-1.5 2-2 3.5-2s2.7.5 3.5 2",
    sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z",
    plug: "M7 4v6M17 4v6M5 10h14v3a7 7 0 0 1-14 0zM12 20v2",
    route: c(6, 18, 2) + c(18, 6, 2) + "M8 18h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6",
    compass: c(12, 12, 9) + "M15.5 8.5l-2 5-5 2 2-5z",
    chat: "M4 5h16v11H9l-5 4z",
    link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
    loop: "M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4",
    window: r(3, 5, 18, 14, 2) + "M3 9h18",
    store: "M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9c0 2 2 2 4 2s4 0 4-2c0 2 2 2 4 2s4 0 4-2M9 20v-5h6v5",
    card: r(3, 5, 18, 14, 2) + "M3 10h18M7 15h4",
    nodes: c(12, 12, 2.4) + c(12, 4, 1.6) + c(4.5, 16.5, 1.6) + c(19.5, 16.5, 1.6) + "M12 6v3.6M6 15.6l4-2.3M18 15.6l-4-2.3",
    truck: r(2, 6, 12, 10, 1) + "M14 9h4l3 3v4h-7" + c(7, 18, 2) + c(17, 18, 2),
    bars: "M5 20v-6M10 20V8M15 20v-9M20 20V4",
    doc: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7",
    pie: c(12, 12, 9) + "M12 3v9h9",
    trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
    building: "M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01",
    box: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9",
    megaphone: "M4 10v4h3l8 4V6L7 10zM18 9a4 4 0 0 1 0 6",
    database: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6",
    monitor: r(4, 4, 16, 12, 2) + "M9 20h6M12 16v4",
    clock: c(12, 12, 9) + "M12 7v5l3 2",
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

const experienceAreas: { icon: IconName; text: string }[] = [
    { icon: "user", text: "Digital customer experience" },
    { icon: "devices", text: "Web and mobile experiences" },
    { icon: "bag", text: "Digital commerce" },
    { icon: "portal", text: "Customer portals" },
    { icon: "sparkle", text: "Personalized experiences" },
    { icon: "plug", text: "Commerce platform integration" },
    { icon: "route", text: "Customer journey optimization" },
];

const journey: { icon: IconName; title: string; desc: string }[] = [
    { icon: "compass", title: "Discover", desc: "Help customers find relevant products and information." },
    { icon: "chat", title: "Engage", desc: "Create intuitive and personalized digital experiences." },
    { icon: "bag", title: "Purchase", desc: "Make digital transactions simple and convenient." },
    { icon: "link", title: "Connect", desc: "Integrate customer interactions with enterprise systems." },
    { icon: "loop", title: "Retain", desc: "Use data and insights to improve ongoing engagement." },
];

const connects: { icon: IconName; title: string; desc: string }[] = [
    { icon: "window", title: "Customer Experience", desc: "Websites, apps and portals" },
    { icon: "store", title: "Commerce", desc: "Product discovery, cart and transactions" },
    { icon: "card", title: "Payments", desc: "Secure payment experiences" },
    { icon: "nodes", title: "ERP", desc: "Orders, inventory and business operations" },
    { icon: "users", title: "CRM", desc: "Customer information and engagement" },
    { icon: "truck", title: "Logistics", desc: "Fulfillment and delivery" },
];

/** Swap `icon` for an image path (e.g. "/images/icons/x.png") and render <img> if you prefer your own artwork. */
const personalize: { icon: IconName; title: string }[] = [
    { icon: "bars", title: "Customer behavior analysis" },
    { icon: "doc", title: "Personalized content" },
    { icon: "sparkle", title: "Product recommendations" },
    { icon: "pie", title: "Customer segmentation" },
    { icon: "route", title: "Journey optimization" },
    { icon: "trend", title: "Data-driven engagement" },
];

const integrations: { icon: IconName; text: string }[] = [
    { icon: "building", text: "ERP" },
    { icon: "users", text: "CRM" },
    { icon: "box", text: "Inventory systems" },
    { icon: "card", text: "Payment platforms" },
    { icon: "megaphone", text: "Marketing platforms" },
    { icon: "truck", text: "Logistics systems" },
    { icon: "database", text: "Customer data platforms" },
];

const scale: { icon: IconName; title: string; desc: string }[] = [
    { icon: "monitor", title: "Responsive", desc: "Deliver consistent experiences across devices." },
    { icon: "link", title: "Integrated", desc: "Connect customer-facing platforms with enterprise systems." },
    { icon: "bars", title: "Scalable", desc: "Support growing customers, products and transactions." },
    { icon: "clock", title: "Data-driven", desc: "Use insights to improve digital journeys." },
    { icon: "nodes", title: "Flexible", desc: "Adapt platforms as business requirements evolve." },
];

const faqs: DxFaqItem[] = [
    {
        q: "What is Digital Experience?",
        a: "Digital experience refers to how customers interact with a business through websites, mobile applications, portals and other digital channels.",
    },
    {
        q: "What is Digital Commerce?",
        a: "Digital commerce covers the complete digital buying journey, from product discovery and engagement through transactions, fulfillment and post-purchase interaction.",
    },
    {
        q: "How can businesses improve digital customer experience?",
        a: "Businesses can improve digital experiences through better usability, personalization, connected systems, faster journeys and continuous optimization.",
    },
    {
        q: "Can digital commerce integrate with ERP and CRM?",
        a: "Yes. APIs and integration technologies can connect commerce platforms with ERP, CRM, inventory, payment and other enterprise systems.",
    },
];

export default function DigitalExperienceCommercePage() {
    return (
        <div className={styles.page}>
            <div className={styles.panel}>
                {/* ---------- Hero ---------- */}
                <section className={styles.heroWrap}>
                    <nav className={styles.crumbBar} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">›</span>
                        <Link href={PARENT_HREF}>Digital Transformation Services</Link>
                        <span aria-hidden="true">›</span>
                        <span className={styles.crumbCurrent} aria-current="page">
                            Digital Experience Commerce
                        </span>
                    </nav>
                    <div className={styles.hero}>
                        <div className={styles.heroGrid}>
                            <div>
                                <span className={styles.eyebrowPill}>
                                    <span className={styles.pillDot} />
                                    DIGITAL TRANSFORMATION SERVICES
                                </span>
                                <h1 className={styles.heroTitle}>
                                    Digital Experience &amp; Digital Commerce for{" "}
                                    <span className={styles.gradText}>Connected Customer Journeys</span>
                                </h1>
                                <p className={styles.heroCopy}>
                                    Create digital experiences that make it easier for customers to discover, interact, purchase and stay
                                    connected with your business.
                                </p>
                                <p className={styles.heroCopy}>
                                    We help enterprises build and improve digital platforms across web, mobile, customer portals and
                                    commerce experiences.
                                </p>
                                <Link href="/contact" className={styles.solidBtn}>
                                    Transform Your Digital Experience
                                    <Ic name="external" />
                                </Link>

                                <h2 className={styles.areasLabel}>Experience areas</h2>
                                <ul className={styles.areas}>
                                    {experienceAreas.map((a, i) => (
                                        <li key={a.text}>
                                            <span className={styles.tile28}>
                                                <Ic name={a.icon} />
                                            </span>
                                            {i + 1}. {a.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.heroArt}>
                                <div className={styles.heroArtCard}>
                                    <img loading="lazy"
                                        className={styles.heroImg}
                                        src={asset(HERO_IMAGE)}
                                        alt="Connected digital experience and commerce platform"
                                        width={800}
                                        height={450}
                                        decoding="async"
                                        fetchPriority="high"
                                    />
                                </div>
                                <span className={styles.runtimePill}>
                                    <Ic name="layers" />
                                    ENTERPRISE-GRADE RUNTIME
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Journeys ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <div className={styles.headCenter}>
                        <h2 className={styles.title}>Build Better Digital Customer Journeys</h2>
                        <p className={styles.lead}>From first interaction to long-term engagement</p>
                    </div>
                    <ol className={styles.fiveGrid}>
                        {journey.map((j, i) => (
                            <li key={j.title}>
                                <span className={styles.cardTop}>
                                    <span className={styles.cardNum}>{pad(i + 1)}</span>
                                    <Ic name={j.icon} />
                                </span>
                                <h3>{j.title}</h3>
                                <p>{j.desc}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ---------- Beyond the store ---------- */}
                <section className={styles.section}>
                    <div className={styles.headLeft}>
                        <h2 className={`${styles.title} ${styles.titleLeft}`}>Digital Commerce Beyond the Online Store</h2>
                        <p className={styles.lead}>A successful commerce experience connects multiple business functions.</p>
                        <p className={styles.label}>We help connect:</p>
                    </div>
                    <ul className={styles.connectPanel}>
                        {connects.map((cn, i) => (
                            <li key={cn.title} className={i < 2 ? styles.connectActive : undefined}>
                                <span className={styles.cardTop}>
                                    <span className={styles.cardNum}>{pad(i + 1)}</span>
                                    <Ic name={cn.icon} />
                                </span>
                                <h3>{cn.title}</h3>
                                <p>{cn.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- Personalization ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <div className={styles.headLeft}>
                        <h2 className={`${styles.title} ${styles.titleLeft}`}>Personalize Digital Experiences</h2>
                        <p className={styles.lead}>Use customer and business data to create more relevant experiences.</p>
                        <p className={styles.label}>Focus areas</p>
                    </div>
                    <ul className={styles.focusGrid}>
                        {personalize.map((p) => (
                            <li key={p.title}>
                                <span className={styles.tile36}>
                                    <Ic name={p.icon} />
                                </span>
                                <h3>{p.title}</h3>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- Integration ---------- */}
                <section className={styles.section}>
                    <div className={styles.headLeft}>
                        <h2 className={`${styles.title} ${styles.titleLeft}`}>Connect Digital Commerce With Enterprise Systems</h2>
                        <p className={styles.lead}>Your commerce platform shouldn&apos;t operate separately from the rest of your business.</p>
                        <p className={styles.label}>We help integrate digital commerce with:</p>
                    </div>
                    <div className={styles.integratePanel}>
                        <div className={styles.core}>
                            <span className={styles.coreIcon}>
                                <Ic name="nodes" />
                            </span>
                            <h3>Digital Commerce</h3>
                            <p>CENTRAL INTEGRATION CORE</p>
                        </div>
                        <ul className={styles.chipGrid}>
                            {integrations.map((x) => (
                                <li key={x.text}>
                                    <span className={styles.tile28}>
                                        <Ic name={x.icon} />
                                    </span>
                                    {x.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ---------- Scale ---------- */}
                <section className={`${styles.section} ${styles.band}`}>
                    <div className={styles.headCenter}>
                        <h2 className={styles.title}>Build Digital Experiences That Scale</h2>
                        <p className={styles.lead}>Designed for changing customer expectations</p>
                    </div>
                    <ul className={styles.fiveGrid}>
                        {scale.map((s, i) => (
                            <li key={s.title}>
                                <span className={styles.cardTop}>
                                    <span className={styles.cardNum}>{pad(i + 1)}</span>
                                    <Ic name={s.icon} />
                                </span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---------- FAQ ---------- */}
                <section className={`${styles.section} ${styles.sectionFaq}`} id="faq">
                    <div className={styles.faqGrid}>
                        <div>
                            <p className={styles.eyebrow}>SUPPORT &amp; CLARITY</p>
                            <h2 className={`${styles.title} ${styles.faqTitle}`}>Frequently Asked Questions About Digital Experience Commerce</h2>
                            <aside className={styles.desk}>
                                <h3>
                                    <Ic name="help" />
                                    Architectural Advisory
                                </h3>
                                <p>Connect customer-facing platforms with enterprise systems.</p>
                            </aside>
                        </div>
                        <DxFaq items={faqs} />
                    </div>
                </section>
            </div>
        </div>
    );
}