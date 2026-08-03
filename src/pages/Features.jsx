import "./Features.css"
import { ArrowRight, Gauge, Bolt, Shield, Users, Chart, Headset, Target, Send, ChatIcon, MailIcon, Clipboard } from "../Icons.jsx"

const features = [
  { icon: <Gauge size={28} />,     title: "High Delivery Rate",       text: "99%+ delivery rate across SMS, WhatsApp, and Email channels with intelligent routing.", tag: "Core" },
  { icon: <Bolt size={28} />,      title: "Instant Delivery",         text: "Sub-second message delivery powered by our distributed infrastructure.", tag: "Core" },
  { icon: <Chart size={28} />,     title: "Analytics Dashboard",      text: "Real-time charts and reports for delivery, open rates, clicks, and conversions.", tag: "Analytics" },
  { icon: <Clipboard size={28} />, title: "Campaign Scheduler",       text: "Schedule campaigns in advance with timezone-aware delivery for global audiences.", tag: "Automation" },
  { icon: <Users size={28} />,     title: "Contact Management",       text: "Organize contacts into groups, import via CSV, and manage opt-outs automatically.", tag: "Management" },
  { icon: <Send size={28} />,      title: "Message Templates",        text: "Pre-approved DLT templates for SMS and WhatsApp with variable substitution.", tag: "Core" },
  { icon: <ChatIcon size={28} />,  title: "WhatsApp Automation",      text: "Trigger automated WhatsApp messages based on user actions and events.", tag: "Automation" },
  { icon: <MailIcon size={28} />,  title: "Email Tracking",           text: "Track email opens, link clicks, bounces, and unsubscribes in real time.", tag: "Analytics" },
  { icon: <Shield size={28} />,    title: "OTP APIs",                 text: "Secure OTP delivery via SMS or WhatsApp with auto-retry and expiry control.", tag: "Security" },
  { icon: <Target size={28} />,    title: "Bulk Upload",              text: "Upload millions of contacts via CSV or Excel with duplicate detection.", tag: "Management" },
  { icon: <Chart size={28} />,     title: "Detailed Reports",         text: "Export delivery reports in PDF or Excel with campaign-level breakdowns.", tag: "Analytics" },
  { icon: <Headset size={28} />,   title: "24/7 Support",             text: "Dedicated support team available round the clock via chat, email, and phone.", tag: "Support" },
]

const tags = ["All", "Core", "Analytics", "Automation", "Management", "Security", "Support"]

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="feat-hero">
        <div className="container feat-hero__inner">
          <span className="badge">PLATFORM FEATURES</span>
          <h1 className="feat-hero__title">Everything You Need to <span className="c-green">Succeed</span></h1>
          <p className="feat-hero__sub">A powerful feature set designed to make your messaging campaigns faster, smarter, and more effective.</p>
          <div className="feat-hero__cta">
            <button className="btn btn--green">Start Free Trial <ArrowRight /></button>
            <button className="btn btn--outline">View Pricing <ArrowRight /></button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="feat-section">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> FEATURES</p>
          <h2 className="section-title">Built for <span className="c-green">Modern Businesses</span></h2>
          <div className="feat-tags" role="list">
            {tags.map((t) => (
              <span key={t} className="feat-tag" role="listitem">{t}</span>
            ))}
          </div>
          <div className="feat-grid">
            {features.map((f) => (
              <article key={f.title} className="card feat-card">
                <div className="feat-card__top">
                  <span className="feat-card__icon">{f.icon}</span>
                  <span className="feat-card__tag">{f.tag}</span>
                </div>
                <h3 className="feat-card__title">{f.title}</h3>
                <p className="feat-card__text">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="feat-cta-section">
        <div className="container">
          <div className="feat-cta">
            <h2 className="feat-cta__title">Explore All Features Free for 14 Days</h2>
            <p className="feat-cta__text">No credit card required. Full access to all features during your trial.</p>
            <button className="btn btn--green">Start Free Trial <ArrowRight /></button>
          </div>
        </div>
      </section>
    </>
  )
}
