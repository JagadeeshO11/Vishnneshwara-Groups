import "./Services.css"
import { ArrowRight, ChatIcon, WhatsAppIcon, MailIcon, Bolt, Shield, Chart, Gauge, Target, Headset } from "../Icons.jsx"

const services = [
  {
    id: "sms",
    icon: <ChatIcon size={32} />,
    color: "blue",
    title: "SMS Broadcast",
    tagline: "Reach millions instantly via SMS",
    desc: "Send bulk SMS to thousands of contacts with lightning-fast delivery. Perfect for promotions, alerts, OTPs, and transactional messages.",
    features: ["Bulk SMS delivery", "DLT compliant", "Real-time reports", "Unicode support", "Scheduled sending", "API access"],
  },
  {
    id: "whatsapp",
    icon: <WhatsAppIcon size={32} />,
    color: "green",
    title: "WhatsApp Broadcast",
    tagline: "Engage customers on WhatsApp",
    desc: "Leverage WhatsApp Business API to send rich media messages, interactive buttons, and personalized campaigns at scale.",
    features: ["Rich media messages", "Interactive buttons", "Template messages", "Read receipts", "Two-way messaging", "Chatbot integration"],
  },
  {
    id: "email",
    icon: <MailIcon size={32} />,
    color: "blue",
    title: "Email Broadcast",
    tagline: "Professional email campaigns",
    desc: "Design and send beautiful email campaigns to large audiences. Track opens, clicks, and conversions with detailed analytics.",
    features: ["Drag & drop editor", "HTML templates", "Open & click tracking", "Bounce management", "Unsubscribe handling", "A/B testing"],
  },
  {
    id: "api",
    icon: <Bolt size={32} />,
    color: "green",
    title: "API Integration",
    tagline: "Integrate messaging into your app",
    desc: "Powerful REST APIs to integrate SMS, WhatsApp, and Email into your existing applications with minimal effort.",
    features: ["RESTful API", "Webhooks", "SDKs available", "Sandbox testing", "99.9% uptime SLA", "Detailed docs"],
  },
  {
    id: "otp",
    icon: <Shield size={32} />,
    color: "blue",
    title: "OTP Services",
    tagline: "Secure one-time passwords",
    desc: "Deliver time-sensitive OTPs via SMS or WhatsApp with sub-second delivery and automatic retry logic.",
    features: ["Sub-second delivery", "Auto retry", "Expiry control", "Fraud detection", "Multi-channel OTP", "Audit logs"],
  },
  {
    id: "enterprise",
    icon: <Target size={32} />,
    color: "green",
    title: "Enterprise Messaging",
    tagline: "Custom solutions for large teams",
    desc: "Tailored messaging infrastructure for enterprises with dedicated support, custom SLAs, and white-label options.",
    features: ["Dedicated infrastructure", "White-label option", "Custom SLA", "Priority support", "Volume discounts", "On-premise option"],
  },
]

const benefits = [
  { icon: <Gauge />,   title: "99% Delivery Rate",    text: "Industry-leading delivery rates across all channels." },
  { icon: <Bolt />,    title: "Instant Delivery",      text: "Messages delivered in milliseconds, not minutes." },
  { icon: <Shield />,  title: "DLT Compliant",         text: "Fully compliant with TRAI DLT regulations." },
  { icon: <Chart />,   title: "Real-time Analytics",   text: "Track every message with live dashboards." },
  { icon: <Headset />, title: "24/7 Support",          text: "Round-the-clock expert support for your campaigns." },
  { icon: <Target />,  title: "Smart Targeting",       text: "Segment audiences for maximum campaign impact." },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="svc-hero">
        <div className="container svc-hero__inner">
          <span className="badge">COMPREHENSIVE BROADCAST SOLUTIONS</span>
          <h1 className="svc-hero__title">All Your <span className="c-green">Messaging Needs</span> in One Platform</h1>
          <p className="svc-hero__sub">From SMS to WhatsApp to Email — we provide end-to-end broadcast solutions that help businesses communicate at scale.</p>
          <div className="svc-hero__cta">
            <button className="btn btn--green">Start Free Trial <ArrowRight /></button>
            <button className="btn btn--outline">View Pricing <ArrowRight /></button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="svc-list">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> OUR SERVICES</p>
          <h2 className="section-title">Everything You Need to <span className="c-green">Broadcast</span></h2>
          <div className="svc-grid">
            {services.map((s) => (
              <article key={s.id} className="card svc-card">
                <span className={"svc-card__icon svc-card__icon--" + s.color}>{s.icon}</span>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__tagline">{s.tagline}</p>
                <p className="svc-card__desc">{s.desc}</p>
                <ul className="svc-card__features">
                  {s.features.map((f) => (
                    <li key={f}><span className="svc-check" aria-hidden="true">✓</span>{f}</li>
                  ))}
                </ul>
                <button className={"btn svc-card__btn svc-card__btn--" + s.color}>Learn More <ArrowRight /></button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="svc-benefits">
        <div className="container">
          <p className="eyebrow eyebrow--light">WHY CHOOSE US</p>
          <h2 className="section-title section-title--light">Built for <span className="c-green">Performance</span></h2>
          <div className="svc-benefits__grid">
            {benefits.map((b) => (
              <div key={b.title} className="svc-benefit">
                <span className="svc-benefit__icon">{b.icon}</span>
                <h3 className="svc-benefit__title">{b.title}</h3>
                <p className="svc-benefit__text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta-section">
        <div className="container">
          <div className="svc-cta">
            <h2 className="svc-cta__title">Ready to Start Broadcasting?</h2>
            <p className="svc-cta__text">Get started in minutes. No setup fees. Cancel anytime.</p>
            <div className="svc-cta__btns">
              <button className="btn btn--green">Get Started Now <ArrowRight /></button>
              <button className="btn btn--outline">Contact Sales <ArrowRight /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
