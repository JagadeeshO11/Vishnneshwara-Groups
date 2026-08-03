import { useState } from "react"
import "./Navbar.css"
import { ArrowRight } from "../Icons.jsx"

const navLinks = [
  { label: "Home",       href: "home" },
  { label: "About Us",   href: "about" },
  { label: "Services",   href: "services" },
  { label: "Features",   href: "features" },
  { label: "Pricing",    href: "pricing" },
  { label: "API",        href: "api" },
  { label: "Contact Us", href: "contact" },
]

export default function Navbar({ activePage = "Home" }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="home" className="brand" onClick={close}>
          <img src="/vg-mark.png" alt="Vishnneshwara Groups logo" className="brand__mark" />
          <span className="brand__text">
            <strong>VISHNNESHWARA</strong>
            <em>GROUPS</em>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="nav" aria-label="Primary navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={"nav__link" + (label === activePage ? " nav__link--active" : "")}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="login" className="btn btn--login desktop-only" aria-label="Login or Sign Up">
          Login / Sign Up
        </a>

        {/* Hamburger */}
        <button
          className={"hamburger" + (menuOpen ? " open" : "")}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        className={"mobile-nav" + (menuOpen ? " open" : "")}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={"nav__link" + (label === activePage ? " nav__link--active" : "")}
            onClick={close}
          >
            {label}
          </a>
        ))}
        <a href="login" className="btn btn--login" onClick={close}>
          Login / Sign Up <ArrowRight />
        </a>
      </nav>
    </header>
  )
}
