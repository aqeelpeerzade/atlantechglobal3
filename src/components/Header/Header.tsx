"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowIcon, ChevronIcon, GlobeIcon } from "@/lib/icons";
import { asset } from "@/lib/asset";
import styles from "./Header.module.css";

type MenuKey = "services" | "industries" | "whyUs"| "work" | "insights" | "about"|"platforms";

type MenuLink = { title: string; desc?: string; href: string; icon?: string };

type Menu = {
  eyebrow: string;
  title: string;
  desc: string;
  cta: { label: string; href: string };
  layout: "icons" | "list";
  links: MenuLink[];
  aside: ReactNode;
};

type NavItem = { label: string; href: string } | { label: string; menu: MenuKey };

const NAV: NavItem[] = [
  { label: "Services", menu: "services" },
  { label: "Industries", menu: "industries" },
{ label: "Platforms", menu: "platforms" },

  // { label: "Contact Us", menu: "contact" },
  { label: "Our Work", menu: "work" },
  { label: "Insights", menu: "insights" },
  { label: "About", menu: "about" },
  { label: "Careers", href: "careers" }
  // { label: "FAQ", href: "/#faq" },

];

function bg(path: string) {
  return { backgroundImage: `url('${asset(path)}')` };
}

const MENUS: Record<MenuKey, Menu> = {
  services: {
    eyebrow: "SERVICES",
    title: "Engineering the AI-native enterprise.",
    desc: "Helping enterprises build AI-powered products, cloud platforms and scalable engineering ecosystems.",
    cta: { label: "Explore Services", href: "/#services" },
    layout: "icons",
    links: [
      { title: "AI & Automation", desc: "Build intelligent business workflows.", href: "/ai-automation-services", icon: "/images/ai-auto.svg" },
      { title: "Product Engineering", desc: "Digital products from idea to launch.", href: "/product-engineering-services", icon: "/images/automation.svg" },
      { title: "Cloud Infrastructure", desc: "Cloud migration and DevOps.", href: "/cloud-infrastructure-services", icon: "/images/badal.svg" },
     { title: "Data Analytics", desc: "Turn enterprise data into insights.", href: "/data-analytics-services", icon: "/images/data-analytics.svg" },
      { title: "Managed Services", desc: "24x7 infrastructure management.", href: "/managed-services", icon: "/images/mana-services.svg" },
      { title: "Digital Transformation", desc: "Enterprise modernization strategy.", href: "/digital-transformation-services", icon: "/images/inovation.svg" },
    ],
    aside: (
      <>
        <Link href="/#services" className={styles.card}>
          <span className={styles.cardImg} style={bg("/images/feat.webp")}>
            <span className={styles.badge}>FEATURED</span>
          </span>
          <span className={styles.cardBody}>
            <strong>Future-ready AI Solutions</strong>
            <span className={styles.cardStat}>
              <b>40+</b> Enterprise AI projects
            </span>
            <span className={styles.cardMore}>
              Learn more <ArrowIcon />
            </span>
          </span>
        </Link>
        <div className={styles.partners}>
          {["MICROSOFT", "AWS", "AZURE", "GOOGLE CLOUD", "SAP"].map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </>
    ),
  },
  industries: {
    eyebrow: "INDUSTRIES",
    title: "Solutions built for every industry.",
    desc: "Deep domain expertise across regulated and consumer sectors — from healthcare to telecom.",
    cta: { label: "View Industries", href: "/industries" },
    layout: "icons",
    links: [
      { title: "Healthcare", desc: "Patient-first digital platforms.", href: "/#industries", icon: "/images/lifescience.svg" },
      { title: "Education", desc: "Digital learning platforms and campus systems.", href: "/#industries", icon: "/images/banking.svg" },
      { title: "Manufacturing", desc: "Smart factories and IoT.", href: "/#industries", icon: "/images/manufacturing.svg" },
      { title: "Retail", desc: "Unified commerce experiences.", href: "/#industries", icon: "/images/e-com.svg" },
      { title: "Hospitality", desc: "Modern platforms for booking, guests, and operations.", href: "/#industries", icon: "/images/oil-gas.svg" },
      { title: "Real Estate", desc: "Smart property management and virtual tour platforms", href: "/#industries", icon: "/images/telecom.svg" },
    ],
    aside: (
      <div className={styles.photo} style={bg("/images/trustedby.webp")}>
        <span>TRUSTED BY</span>
        <strong>Fortune companies across 6 countries</strong>
      </div>
    ),
  },
  whyUs: {
    eyebrow: "WHY US",
    title: "Composable platforms for scale.",
    desc: "Pre-engineered accelerators that shorten time-to-value across every layer of the stack.",
    cta: { label: "Why Atlantech Global", href: "/why-us" },
    layout: "icons",
    links: [
      { title: "AI Platforms", desc: "Enterprise-grade AI foundations.", href: "/#solutions", icon: "/images/ai-platforms.svg" },
      { title: "Cloud Modernization", desc: "Refactor and re-platform legacy.", href: "/#solutions", icon: "/images/badal.svg" },
      { title: "Digital Experience", desc: "Web, mobile and design systems.", href: "/#solutions", icon: "/images/digital-experience.svg" },
      { title: "Enterprise Applications", desc: "SAP, Salesforce and beyond.", href: "/#solutions", icon: "/images/gov-pub.svg" },
      { title: "Automation", desc: "RPA and intelligent process.", href: "/#solutions", icon: "/images/automation.svg" },
      { title: "Data Platforms", desc: "Lakehouse, streaming, governance.", href: "/#solutions", icon: "/images/data-platforms.svg" },
    ],
    aside: (
      <div className={styles.impact}>
        <span>IMPACT</span>
        <strong>98%</strong>
        <small>Client satisfaction</small>
        <hr />
        <strong>150+</strong>
        <small>Projects delivered</small>
      </div>
    ),
  },
  

  work: {
    eyebrow: "OUR WORK",
    title: "Proof, not promises.",
    desc: "Explore how we've engineered outcomes for Fortune-class enterprises worldwide.",
    cta: { label: "View portfolio", href: "/#work" },
    layout: "icons",
    links: [
      { title: "Digital Experiences", desc: "Products shipped at scale.", href: "/#work", icon: "/images/ou-star.svg" },
      { title: "Success Stories", desc: "Impact across industries.", href: "/#testimonials", icon: "/images/success-stories.svg" },
      { title: "Client Testimonials", desc: "In their own words.", href: "/#testimonials", icon: "/images/client.svg" },
    ],
    aside: (
      <Link href="/#work" className={styles.card}>
        <span className={styles.cardImg} style={bg("/images/ourwork.webp")}>
          <span className={styles.badge}>CASE STUDY</span>
        </span>
        <span className={styles.cardBody}>
          <strong>Healthcare platform modernization</strong>
          <span className={styles.cardStat}>
            <b>40%</b> reduction in costs
          </span>
          <span className={styles.cardMore}>
            View case study <ArrowIcon />
          </span>
        </span>
      </Link>
    ),
  },
  insights: {
    eyebrow: "INSIGHTS",
    title: "Latest thinking from Atlantech.",
    desc: "Research, playbooks and points of view from our engineers, strategists and researchers.",
    cta: { label: "All insights", href: "/#insights" },
    layout: "list",
    links: ["AI", "Cloud", "Engineering", "Analytics", "Managed Services", "Digital Transformation"].map(
      (title) => ({ title, href: "/#insights" }),
    ),
    aside: (
      <Link href="/#insights" className={styles.card}>
        <span className={styles.cardImg} style={bg("/images/inig.webp")} />
        <span className={styles.cardBody}>
          <span className={styles.kicker}>FEATURED ARTICLE</span>
          <strong>How AI-native architecture is redefining enterprise IT in 2026</strong>
          <span className={styles.cardFoot}>
            <small>Published Jul 12, 2026</small>
            <span className={styles.cardMore}>
              Read <ArrowIcon />
            </span>
          </span>
        </span>
      </Link>
    ),
  },
  about: {
    eyebrow: "ABOUT",
    title: "A global technology partner.",
    desc: "A decade of engineering for Fortune-class enterprises across six countries.",
    cta: { label: "About Atlantech", href: "/who-we-are" },
    layout: "list",
    links: [
      { title: "About Atlantech", desc: "Our story and mission.", href: "/who-we-are" },
      { title: "Leadership", desc: "The team behind the work.", href: "/who-we-are" },
      { title: "Why Us", desc: "What sets us apart.", href: "/why-us" },
      { title: "Careers", desc: "Join a global team.", href: "/careers" },
      { title: "Contact", desc: "Talk to an expert.", href: "/contact" },
    ],
    aside: (
      <div className={styles.about}>
        <div className={styles.aboutImg} style={bg("/images/who-are-we.webp")} />
        <div className={styles.aboutStats}>
          {[
            ["10+", "YEARS"],
            ["150+", "EMPLOYEES"],
            ["6", "COUNTRIES"],
            ["99%", "SATISFACTION"],
          ].map(([n, l]) => (
            <div key={l}>
              <strong>{n}</strong>
              <small>{l}</small>
            </div>
          ))}
        </div>
      </div>
    ),
  },


platforms: {
    eyebrow: "Platforms",
    title: "Technology Platforms That Power Business.",
    desc: "Discover enterprise platforms that connect customer experiences, business operations, cloud infrastructure, and intelligent applications.",
    cta: { label: "View Platforms", href: "/platforms" },
    layout: "icons",
    links: [
      { title: "Adobe Commerce", desc: "Create flexible, scalable commerce experiences.", href: "/platforms/adobe-commerce", icon: "/images/icons/adobe-commerce.svg" },
      { title: "Adobe Experience Platform", desc: "Connect data to create better customer experiences.", href: "/platforms/adobe-experience-platform", icon: "/images/icons/adobe-experience.svg" },
      { title: "ERPNext", desc: "Simplify business operations with connected ERP.", href: "/platforms/erpnext", icon: "/images/icons/erpnext.svg" },
      { title: "Google Cloud", desc: "Build and scale with cloud technology.", href: "/platforms/google-cloud", icon: "/images/icons/google-cloud.svg" },
      { title: "Zoho", desc: "Connect business workflows with smarter applications.", href: "/platforms/zoho", icon: "/images/icons/zoho.svg" },
    ],
    aside: (
      <div className={styles.photo} style={bg("/images/trustedby.webp")}>
        <span>OUR PLATFORMS</span>
        <strong>Connecting enterprise technology with smarter business outcomes</strong>
      </div>
    ),
  },
  
};  

const SERVICE_STATS = [
  ["150+", "EXPERTS"],
  ["40+", "CLIENTS"],
  ["6", "COUNTRIES"],
];

function isActive(item: NavItem, pathname: string): boolean {
  if ("href" in item) return item.href === pathname;
  const trimmed = pathname.replace(/\/$/, "");
  if (item.menu === "whyUs") return trimmed === "/why-us";
  // if (item.menu === "contact") return trimmed === "/contact";
  if (item.menu === "about") return trimmed === "/who-we-are";
  return false;
}

function cx(...names: (string | false | null | undefined)[]) {
  return names.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [activeMega, setActiveMega] = useState<MenuKey | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSection, setDrawerSection] = useState<MenuKey | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverOpenedAt = useRef(0);

  function closeAll() {
    setActiveMega(null);
    setDrawerOpen(false);
    setDrawerSection(null);
  }

  function openOnHover(key: MenuKey | null) {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(
      () => {
        if (key) hoverOpenedAt.current = performance.now();
        setActiveMega(key);
      },
      key ? 60 : 180,
    );
  }

  function onMenuClick(key: MenuKey, clickedAt: number) {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    const justHovered = clickedAt - hoverOpenedAt.current < 600;
    setActiveMega((prev) => (prev === key && !justHovered ? null : key));
  }

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setActiveMega(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveMega(null);
        setDrawerOpen(false);
      }
    }
    const desktop = window.matchMedia("(min-width: 1241px)");
    function onBreakpoint() {
      if (desktop.matches) setDrawerOpen(false);
      else setActiveMega(null);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

    useEffect(() => {
  return () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };
}, []);

  const menu = activeMega ? MENUS[activeMega] : null;

  return (
    <>
      <header className={styles.header} ref={headerRef} onMouseLeave={() => activeMega && openOnHover(null)}>
        <div className={cx("container", styles.bar)}>
          <Link href="/" className={styles.logo} onClick={closeAll} aria-label="Atlantech Global home">
            <img src={asset("/images/attm.webp")} alt="Atlantech Global" width={135} height={54} />
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {NAV.map((item) =>
              "href" in item ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cx(styles.navLink, isActive(item, pathname) && styles.current)}
                  onClick={closeAll}
                  onMouseEnter={() => activeMega && openOnHover(null)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  className={cx(
                    styles.navLink,
                    activeMega === item.menu && styles.open,
                    isActive(item, pathname) && styles.current,
                  )}
                  aria-expanded={activeMega === item.menu}
                  aria-controls="mega-panel"
                  onClick={(e) => onMenuClick(item.menu, e.timeStamp)}
                  onMouseEnter={() => openOnHover(item.menu)}
                >
                  {item.label} <ChevronIcon />
                </button>
              ),
            )}
          </nav>

          <div className={styles.actions}>
            <button type="button" className={styles.region} aria-label="Region: India">
              <GlobeIcon />
              <span>India</span>
              <ChevronIcon />
            </button>
            <Link href="/contact" className={cx("btn btn-primary btn-small", styles.cta)} onClick={closeAll}>
              Contact Us <ArrowIcon />
            </Link>
            <button
              type="button"
              className={styles.toggle}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {drawerOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {menu && (
          <div id="mega-panel" className={styles.mega} onMouseEnter={() => openOnHover(activeMega)}>
            <div className={styles.intro}>
              <p className={styles.eyebrow}>{menu.eyebrow}</p>
              <p className={styles.introTitle}>{menu.title}</p>
              <p className={styles.introDesc}>{menu.desc}</p>
              <Link href={menu.cta.href} className={styles.introCta} onClick={closeAll}>
                {menu.cta.label} <ArrowIcon />
              </Link>
              {activeMega === "services" && (
                <div className={styles.stats}>
                  {SERVICE_STATS.map(([n, l]) => (
                    <div key={l}>
                      <span>{n}</span>
                      <small>{l}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={cx(styles.links, menu.layout === "icons" ? styles.linksIcons : styles.linksList)}>
              {menu.links.map((l) =>
                menu.layout === "icons" ? (
                  <Link key={l.title} href={l.href} className={styles.item} onClick={closeAll}>
                    <span className={styles.itemIcon}>
                      <img src={asset(l.icon ?? "")} alt="" width={22} height={22} />
                    </span>
                    <span>
                      <b>{l.title}</b>
                      <small>{l.desc}</small>
                    </span>
                  </Link>
                ) : (
                  <Link key={l.title} href={l.href} className={styles.row} onClick={closeAll}>
                    <span>
                      <b>{l.title}</b>
                      {l.desc && <small>{l.desc}</small>}
                    </span>
                    <em aria-hidden="true">↗</em>
                  </Link>
                ),
              )}
            </div>

            <div className={styles.aside} onClick={closeAll}>
              {menu.aside}
            </div>
          </div>
        )}
      </header>

      <div className={cx(styles.backdrop, menu && styles.backdropOpen)} onClick={() => setActiveMega(null)} />

      <div
        id="mobile-drawer"
        className={cx(styles.drawer, drawerOpen && styles.drawerOpen)}
        aria-hidden={!drawerOpen}
        inert={!drawerOpen}
      >
        <nav className={styles.drawerNav} aria-label="Mobile">
          {NAV.map((item) =>
            "href" in item ? (
              <Link key={item.label} href={item.href} className={styles.drawerLink} onClick={closeAll}>
                {item.label}
              </Link>
            ) : (
              <div key={item.label} className={cx(styles.drawerGroup, drawerSection === item.menu && styles.groupOpen)}>
                <button
                  type="button"
                  className={styles.drawerLink}
                  aria-expanded={drawerSection === item.menu}
                  onClick={() => setDrawerSection((prev) => (prev === item.menu ? null : item.menu))}
                >
                  {item.label} <ChevronIcon />
                </button>
                <div className={styles.drawerSub}>
                  <div className={styles.drawerSubInner}>
                    {MENUS[item.menu].links.map((l) => (
                      <Link key={l.title} href={l.href} onClick={closeAll}>
                        {l.icon && <img src={asset(l.icon)} alt="" width={36} height={36} />}
                        <span>
                          <b>{l.title}</b>
                          {l.desc && <small>{l.desc}</small>}
                        </span>
                      </Link>
                    ))}
                    <Link href={MENUS[item.menu].cta.href} className={styles.drawerSubCta} onClick={closeAll}>
                      {MENUS[item.menu].cta.label} <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            ),
          )}
        </nav>
        <div className={styles.drawerFooter}>
          <span className={styles.drawerRegion}>
            <GlobeIcon />
            Region: India
          </span>
          <Link href="/contact" className="btn btn-primary full-width" onClick={closeAll}>
            Contact Us <ArrowIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
