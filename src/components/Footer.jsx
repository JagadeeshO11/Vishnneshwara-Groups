import "./Footer.css"
import { MailIcon, Phone, Pin, Facebook, LinkedIn, YouTube } from "../Icons.jsx"

const footerCols = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home",       href: "home" },
      { label: "About Us",   href: "about" },
      { label: "Services",   href: "services" },
      { label: "Pricing",    href: "pricing" },
      { label: "Contact Us", href: "contact" },
    ],
  },
  {
    heading: "Our Services",
    links: [
      { label: "SMS Broadcast",       href: "services" },
      { label: "WhatsApp Broadcast",  href: "services" },
      { label: "Email Broadcast",     href: "services" },
      { label: "API Solutions",       href: "api" },
      { label: "Reseller Program",    href: "contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog",               href: "blog" },
      { label: "FAQ",                href: "faq" },
      { label: "Terms & Conditions", href: "terms" },
      { label: "Privacy Policy",     href: "privacy" },
      { label: "Support",            href: "contact" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand col */}
        <div className="footer__brand">
          <a href="home" className="brand">
            <img src="/vg-mark.png" alt="Vishnneshwara Groups logo" className="brand__mark" />
            <span className="brand__text">
              <strong>VISHNNESHWARA</strong>
              <em>GROUPS</em>
            </span>
          </a>
          <p className="footer__tag">SMS • WHATSAPP • EMAIL</p>
          <p className="footer__tag footer__tag--sm">BROADCAST SERVICES PROVIDER</p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social"><Facebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social"><LinkedIn /></a>
            <a href="https://youtube.com"  target="_blank" rel="noreferrer" aria-label="YouTube"  className="social"><YouTube /></a>
          </div>
        </div>

        {/* Link cols */}
        {footerCols.map((col) => (
          <div key={col.heading} className="footer__col">
            <h4 className="footer__heading">{col.heading}</h4>
            <ul className="footer__list">
              {col.links.map(({ label, href }) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact col */}
        <div className="footer__col">
          <h4 className="footer__heading">Contact Us</h4>
          <ul className="footer__list footer__list--contact">
            <li><span className="ci"><Phone /></span> +91 XXXXXXXXX</li>
            <li><span className="ci"><MailIcon size={16} /></span> info@vishnneshwaragroups.com</li>
            <li><span className="ci"><Pin /></span> India</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">© 2024 Vishnneshwara Groups. All Rights Reserved.</div>
      </div>
    </footer>
  )
}
