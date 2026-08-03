# Vishnneshwara Groups — UI Master Prompt & Architecture Guide

## Objective

Build all pages for this SMS, WhatsApp, and Email Broadcast Service website using the **exact design language** from the Home page.

> **Rules**
> - Do **not** redesign. Maintain 100% visual consistency.
> - Reuse shared components: `Navbar`, `Footer`, `globals.css`.
> - Every page gets its **own** `PageName.jsx` + `PageName.css` file.
> - Never duplicate global tokens or button/card styles — import from `globals.css`.

---

## Project File Structure

```
src/
├── styles/
│   └── globals.css          ← Design tokens, reset, shared utilities (buttons, cards, headings)
├── components/
│   ├── Navbar.jsx            ← Sticky header + hamburger drawer
│   ├── Navbar.css            ← Navbar-only styles
│   ├── Footer.jsx            ← Site-wide footer
│   └── Footer.css            ← Footer-only styles (includes --footer-mt token)
├── pages/
│   ├── Home.jsx              ← Home page sections
│   ├── Home.css              ← Home-only styles (includes --hero-mt / --hero-mb tokens)
│   ├── About.jsx             ← (to build)
│   ├── About.css
│   ├── Services.jsx          ← (to build)
│   ├── Services.css
│   ├── Features.jsx          ← (to build)
│   ├── Features.css
│   ├── Pricing.jsx           ← (to build)
│   ├── Pricing.css
│   ├── Api.jsx               ← (to build)
│   ├── Api.css
│   ├── Contact.jsx           ← (to build)
│   ├── Contact.css
│   └── ... (see full list below)
├── Icons.jsx                 ← All SVG icons
├── App.jsx                   ← Root: imports globals.css, Navbar, Footer, active page
└── main.jsx                  ← ReactDOM entry
```

---

## Spacing Tokens (defined in `globals.css`)

| Token            | Default  | Mobile (≤768px) | Small (≤480px) |
|------------------|----------|-----------------|----------------|
| `--hero-mt`      | `48px`   | `24px`          | `16px`         |
| `--hero-mb`      | `64px`   | `40px`          | `32px`         |
| `--footer-mt`    | `72px`   | `48px`          | `40px`         |
| `--section-gap`  | `80px`   | `56px`          | `40px`         |
| `--header-h`     | `72px`   | `64px`          | `64px`         |

**Usage in page CSS:**
```css
/* Home.css */
.hero {
  margin-top: var(--hero-mt);
  margin-bottom: var(--hero-mb);
}

/* Footer.css */
.footer {
  margin-top: var(--footer-mt);
}
```

---

## Design System

### Colors
| Token           | Value     |
|-----------------|-----------|
| `--navy`        | `#0a1b52` |
| `--navy-deep`   | `#071440` |
| `--navy-mid`    | `#0e2775` |
| `--green`       | `#26b24b` |
| `--green-dark`  | `#1e9e40` |
| `--blue`        | `#1f6fe0` |
| `--text-dark`   | `#1a2340` |
| `--text-muted`  | `#5b6478` |
| `--white`       | `#ffffff` |
| `--off-white`   | `#f4f7fb` |
| `--card-border` | `#e6ebf3` |

### Typography
- Font: `Poppins` (400, 500, 600, 700, 800)
- Hero title: `clamp(1.9rem, 4vw, 2.8rem)` — fluid
- Section title: `clamp(1.6rem, 3vw, 2.1rem)` — fluid
- Body: `1rem / 1.6`

### Shadows
```css
--shadow-sm: 0 2px 12px rgba(16, 39, 117, 0.07);
--shadow-md: 0 8px 32px rgba(16, 39, 117, 0.12);
--shadow-lg: 0 20px 60px rgba(16, 39, 117, 0.18);
```

### Border Radius
```css
--radius:    16px;
--radius-sm: 10px;
```

### UI Style
- Rounded corners (16–24px)
- Premium soft shadows
- Glassmorphism on navbar (`backdrop-filter: blur(12px)`)
- Gradient backgrounds on hero/why sections
- Smooth hover animations (`transform: translateY(-4px to -6px)`)
- Gradient top-border accent on card hover
- Floating animation on hero logo (desktop only)

---

## Shared Components

### `Navbar.jsx`
- Sticky, blur glassmorphism header
- Desktop: horizontal nav links + Login button
- Mobile (≤768px): hamburger → animated drawer
- Props: `activePage` (string) — highlights current nav link

### `Footer.jsx`
- Dark navy background (`--navy-deep`)
- 5-column grid: Brand | Quick Links | Services | Resources | Contact
- Social icons with hover green fill
- `margin-top: var(--footer-mt)` applied in `Footer.css`

---

## How to Add a New Page

1. Create `src/pages/PageName.jsx`
2. Create `src/pages/PageName.css` — import it at top of the JSX
3. In `App.jsx`, import and render `<PageName />` inside `<main>`
4. Pass `activePage="Page Label"` to `<Navbar />`
5. **Never** copy button/card/heading styles — they live in `globals.css`

### Page template
```jsx
// src/pages/About.jsx
import "./About.css"
export default function About() {
  return (
    <>
      <section className="about-hero page-hero">...</section>
      <section className="about-story">...</section>
    </>
  )
}
```

```css
/* src/pages/About.css */
.about-hero {
  margin-top: var(--hero-mt);
  margin-bottom: var(--hero-mb);
  /* page-specific styles only */
}
```

---

## Pages to Build

### 1. About Us (`About.jsx` / `About.css`)
- Hero, Company Introduction, Our Story, Mission, Vision
- Core Values, Why Choose Us, Timeline, Achievements
- Business Statistics, Team Members, CTA

### 2. Services (`Services.jsx` / `Services.css`)
- SMS Broadcast, WhatsApp Broadcast, Email Broadcast
- API Integration, OTP Services, Transactional SMS
- Promotional SMS, Enterprise Messaging
- Each: Features, Benefits, Illustration, CTA, Pricing Summary

### 3. Features (`Features.jsx` / `Features.css`)
- High Delivery Rate, Instant Delivery, Analytics Dashboard
- Campaign Scheduler, Contact Management, Message Templates
- WhatsApp Automation, Email Tracking, OTP APIs
- Bulk Upload, Reports, Performance Charts

### 4. Pricing (`Pricing.jsx` / `Pricing.css`)
- Hero, Monthly/Yearly Toggle
- Starter, Professional, Business, Enterprise plans
- Feature Comparison Table, FAQs, Contact Sales CTA

### 5. API (`Api.jsx` / `Api.css`)
- Hero, Developer Docs, Authentication, Endpoints
- Code Samples (JSON request/response)
- SDK Cards: Node.js, Java, Python, PHP, cURL
- API Playground, Rate Limits, Security, CTA

### 6. Contact (`Contact.jsx` / `Contact.css`)
- Hero, Contact Form, Office Details
- Phone, Email, Google Map, Business Hours, FAQ, Live Chat CTA

### 7. Blog (`Blog.jsx` / `Blog.css`)
- Hero, Search, Categories, Featured Post
- Latest Articles, Popular Topics, Newsletter

### 8. FAQ (`Faq.jsx` / `Faq.css`)
- Search, Accordion Layout
- Billing, Technical, SMS, WhatsApp, Email, API, Support, CTA

### 9. Privacy Policy (`Privacy.jsx` / `Privacy.css`)
- Modern documentation layout, Sticky Sidebar Navigation

### 10. Terms & Conditions (`Terms.jsx` / `Terms.css`)
- Numbered sections, Sticky Table of Contents

### 11. Login (`Login.jsx` / `Login.css`)
- Split Screen, Brand Illustration, Login Form
- Remember Me, Forgot Password, Social Login, Animated Background

### 12. Register (`Register.jsx` / `Register.css`)
- Registration Form, OTP Verification, Password Strength Meter
- Progress Indicator, Terms Checkbox, Illustration

### 13. Forgot Password (`ForgotPassword.jsx` / `ForgotPassword.css`)
- Email Verification, OTP, Reset Password, Success Screen

### 14. Client Dashboard (`Dashboard.jsx` / `Dashboard.css`)
- Stats Cards (Credits, SMS, WhatsApp, Emails)
- Analytics Charts, Recent Campaigns, Notifications, Responsive Sidebar

### 15. Campaign Management (`Campaigns.jsx` / `Campaigns.css`)
- Campaign List, Create Campaign, Message Editor
- Audience Selection, Scheduling, Templates, History

### 16. Reports & Analytics (`Reports.jsx` / `Reports.css`)
- Delivery Reports, Click/Open/Bounce Rate
- Growth Charts, Export PDF/Excel

### 17. Profile Settings (`Profile.jsx` / `Profile.css`)
- Personal Details, Company Details, Password
- API Keys, Billing, Notifications, Security

### 18. 404 Page (`NotFound.jsx` / `NotFound.css`)
- Premium Illustration, Go Home Button

### 19. Coming Soon (`ComingSoon.jsx` / `ComingSoon.css`)
- Countdown Timer, Newsletter, Illustration

---

## Animations (apply via CSS classes)

| Class           | Effect                        |
|-----------------|-------------------------------|
| `.fade-up`      | Fade in + slide up on scroll  |
| `.slide-left`   | Slide in from right           |
| `.scale-in`     | Scale from 0.9 → 1            |
| `.float`        | Continuous vertical float     |
| `.counter`      | Number count-up animation     |

---

## Responsive Breakpoints

| Breakpoint   | Target              |
|--------------|---------------------|
| ≥ 1400px     | Large desktop       |
| ≤ 1024px     | Laptop / tablet     |
| ≤ 768px      | Mobile (hamburger)  |
| ≤ 480px      | Small mobile        |

---

## Accessibility Checklist
- [ ] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- [ ] `aria-label` on icon-only buttons and links
- [ ] `aria-expanded` on hamburger toggle
- [ ] `aria-hidden="true"` on decorative images
- [ ] Keyboard navigable (focus styles)
- [ ] `alt` text on all meaningful images
- [ ] Color contrast ≥ 4.5:1 for body text
- [ ] `lang="en"` on `<html>`
- [ ] `loading="lazy"` on below-fold images
