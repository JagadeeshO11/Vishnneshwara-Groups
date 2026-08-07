import "./Features.css"
import { ArrowRight, Gauge, Bolt, Shield, Users, Chart, Headset, Send, ChatIcon, WhatsAppIcon, MailIcon, Clipboard, Target, ShieldSolid } from "../Icons.jsx"

const features = [
  { icon: <Gauge size={28} />,    title: "High Delivery Rate",          desc: "99% uptime with guaranteed message delivery across all channels, every time." },
  { icon: <Bolt size={28} />,     title: "Instant Delivery",            desc: "Messages reach your audience in seconds, not minutes — real-time speed." },
  { icon: <Shield size={28} />,   title: "Secure & Reliable",           desc: "Enterprise-grade encryption keeps your data and messages safe at all times." },
  { icon: <Users size={28} />,    title: "Easy to Use Platform",        desc: "Intuitive dashboard — no technical skills required to launch campaigns." },
  { icon: <Chart size={28} />,    title: "Reports & Analytics",         desc: "Track delivery, open rates and campaign performance in real time." },
  { icon: <Headset size={28} />,  title: "24/7 Customer Support",       desc: "Our dedicated support team is always available to help you succeed." },
  { icon: <Send size={28} />,     title: "Bulk Messaging",              desc: "Send millions of messages in one click with smart queue management." },
  { icon: <Clipboard size={28}/>, title: "Contact Management",          desc: "Organise, segment and manage your audience lists with ease." },
  { icon: <Target size={28} />,   title: "Campaign Scheduler",          desc: "Schedule campaigns in advance and automate delivery at the right time." },
  { icon: <ChatIcon size={28} />, title: "SMS Broadcast",               desc: "Reach any mobile number instantly with high-speed bulk SMS delivery." },
  { icon: <WhatsAppIcon size={28}/>, title: "WhatsApp Automation",      desc: "Send interactive WhatsApp messages with rich media and quick replies." },
  { icon: <ShieldSolid size={28}/>,  title: "OTP & Transactional",      desc: "Deliver time-sensitive OTPs and transactional alerts with priority routing." },
]

const highlights = [
  { value: "99%",     label: "Delivery Rate" },
  { value: "100+ Cr", label: "Messages Sent" },
  { value: "10,000+", label: "Happy Clients" },
  { value: "24/7",    label: "Support" },
]

export default function Features() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="feat-hero">
        <div className="container feat-hero__inner">
          <p className="eyebrow"><span className="eyebrow__dash" /> FEATURES</p>
          <h1 className="feat-hero__title">
            Built for <span className="c-green">Modern Businesses</span>
          </h1>
          <p className="feat-hero__sub">
            Everything you need to reach, engage and grow your audience — in one powerful platform.
          </p>
          <div className="feat-hero__cta">
            <button className="btn btn--green">Get Started Free <ArrowRight /></button>
            <button className="btn btn--outline">View Pricing <ArrowRight /></button>
          </div>
        </div>
      </section>

      {/* ── Highlights bar ── */}
      <section className="feat-highlights">
        <div className="container">
          <div className="feat-highlights__grid">
            {highlights.map((h) => (
              <div key={h.label} className="feat-highlight">
                <strong className="feat-highlight__value">{h.value}</strong>
                <span className="feat-highlight__label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="feat-cards-section">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> WHAT WE OFFER</p>
          <h2 className="section-title">Powerful <span className="c-green">Features</span> at Your Fingertips</h2>
          <p className="section-sub">Designed to make bulk messaging simple, fast and effective for every business.</p>

          <div className="feat-grid">
            {features.map((f) => (
              <div key={f.title} className="feat-card">
                <span className="feat-card__icon">{f.icon}</span>
                <h3 className="feat-card__title">{f.title}</h3>
                <p className="feat-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="feat-cta-section">
        <div className="container">
          <div className="feat-cta">
            <div className="feat-cta__body">
              <h2 className="feat-cta__title">Ready to experience all these features?</h2>
              <p className="feat-cta__text">Start your free trial today — no credit card required.</p>
              <div className="feat-cta__buttons">
                <button className="btn btn--green">Start Free Trial <ArrowRight /></button>
                <button className="btn btn--outline">Contact Sales <ArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
