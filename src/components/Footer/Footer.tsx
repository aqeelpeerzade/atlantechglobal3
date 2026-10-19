import Link from "next/link";
import { asset } from "@/lib/asset";
import NewsletterForm from "./NewsletterForm";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Capabilities",
    links: [
      { label: "Digital Transformation", href: "/digital-transformation" },
      { label: "Cloud Engineering", href: "/cloud-engineering" },
      { label: "AI & Automation", href: "/ai-automation" },
      { label: "Product Engineering", href: "/product-engineering" },
     { label: "Data Analytics", href: "/data-analytics" },
   { label: "Managed Services", href: "/managed-services" },
   

    ],
  },
  
  {
    title: "Industries",
    links: [
      { label: "Financial Services", href: "/#industries" },
      { label: "Healthcare", href: "/#industries" },
      { label: "Retail & E-commerce", href: "/#industries" },
      { label: "Manufacturing", href: "/#industries" },
      { label: "Logistics", href: "/#industries" },
      { label: "Education", href: "/#industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/#work" },
      { label: "Insights & Blog", href: "/#insights" },
      { label: "Success Stories", href: "/#work" },
      // { label: "FAQ", href: "/#faq" },
      { label: "Why Us", href: "/why-us" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/who-we-are" },
      { label: "Leadership", href: "/who-we-are" },
      { label: "Global Offices", href: "/contact" },
      { label: "Partnerships", href: "/contact" },
      { label: "Why Atlantech", href: "/why-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4 4 0 00-6.9 3.7A11.5 11.5 0 013 4.6a4 4 0 001.2 5.4c-.6 0-1.2-.2-1.8-.5v.1a4 4 0 003.2 4 4 4 0 01-1.8.1 4 4 0 003.8 2.8A8 8 0 012 18.6a11.4 11.4 0 006.3 1.8c7.5 0 11.7-6.4 11.7-11.9v-.5c.8-.6 1.5-1.3 2-2.2z" />
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <polygon points="10 9 15 12 10 15" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Link href="/" aria-label="Atlantech Global home">
            <img
              src={asset("/images/atgl-transparent.webp")}
              alt="Atlantech Global"
              className={styles.logo}
              width={145}
              height={58}
              loading="lazy"
            />
          </Link>
          <p className={styles.tagline}>
            Engineering intelligent enterprises through scalable cloud architectures and AI-driven
            automation. Trusted by Fortune-class organizations across four continents.
          </p>
          <p className={styles.subscribeLabel}>Subscribe to enterprise insights</p>
          <NewsletterForm />
        </div>

        {COLUMNS.map((col) => (
          <nav className={styles.col} key={col.title} aria-label={col.title}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Atlantech Global. All rights reserved.</p>
        <div className={styles.social}>
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
        <nav className={styles.legal} aria-label="Legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </nav>
      </div>
    </footer>
  );
}
