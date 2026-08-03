import "./About.css"
import { ArrowRight, Users, Shield, Chart, Headset, Target, Bolt } from "../Icons.jsx"

const values = [
  { icon: <Shield size={28} />, title: "Integrity",    text: "We operate with full transparency and honesty in every interaction." },
  { icon: <Bolt size={28} />,   title: "Innovation",   text: "Constantly evolving our platform to stay ahead of industry needs." },
  { icon: <Users size={28} />,  title: "Customer First", text: "Every decision is driven by what's best for our clients." },
  { icon: <Target size={28} />, title: "Excellence",   text: "We deliver nothing short of the highest quality in messaging." },
  { icon: <Chart size={28} />,  title: "Growth",       text: "Empowering businesses to scale their reach and revenue." },
  { icon: <Headset size={28} />,title: "Support",      text: "24/7 dedicated support to keep your campaigns running." },
]

const timeline = [
  { year: "2018", title: "Founded",          text: "Vishnneshwara Groups was established with a vision to simplify business communication." },
  { year: "2019", title: "SMS Platform",     text: "Launched our bulk SMS broadcast platform serving 500+ clients in the first year." },
  { year: "2021", title: "WhatsApp Launch",  text: "Expanded into WhatsApp Business API, enabling rich media messaging at scale." },
  { year: "2022", title: "Email Suite",      text: "Introduced enterprise email broadcast with advanced analytics and tracking." },
  { year: "2024", title: "10K+ Clients",     text: "Crossed 10,000 happy clients and 100 crore+ messages delivered milestone." },
]

const stats = [
  { value: "10,000+", label: "Happy Clients" },
  { value: "100+ Cr", label: "Messages Delivered" },
  { value: "99%",     label: "Delivery Rate" },
  { value: "6+",      label: "Years Experience" },
]

const team = [
  { name: "Rajesh Kumar",   role: "CEO & Founder" },
  { name: "Priya Sharma",   role: "CTO" },
  { name: "Anil Verma",     role: "Head of Operations" },
  { name: "Sneha Reddy",    role: "Head of Marketing" },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="container about-hero__inner">
          <span className="badge">WHO WE ARE</span>
          <h1 className="about-hero__title">Powering <span className="c-green">Business Communication</span> Across India</h1>
          <p className="about-hero__sub">Vishnneshwara Groups is a leading broadcast messaging platform trusted by thousands of businesses to deliver SMS, WhatsApp, and Email campaigns at scale.</p>
          <div className="about-hero__cta">
            <button className="btn btn--green">Get Started <ArrowRight /></button>
            <button className="btn btn--outline">Our Services <ArrowRight /></button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container about-story__inner">
          <div className="about-story__text">
            <p className="eyebrow"><span className="eyebrow__dash" /> OUR STORY</p>
            <h2 className="section-title" style={{textAlign:"left"}}>Built to Help <span className="c-green">Businesses Grow</span></h2>
            <p className="about-story__body">Founded in 2018, Vishnneshwara Groups started with a simple mission — make business messaging accessible, reliable, and affordable for every business in India. From a small startup to a platform serving 10,000+ clients, our journey has been driven by innovation and a relentless focus on customer success.</p>
            <p className="about-story__body">Today we power SMS, WhatsApp, and Email campaigns for businesses across retail, finance, healthcare, education, and more — delivering over 100 crore messages with a 99% delivery rate.</p>
          </div>
          <div className="about-story__img-wrap">
            <img src="/vg-mark.png" alt="Vishnneshwara Groups" className="about-story__img" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mv-section">
        <div className="container mv-grid">
          <div className="mv-card mv-card--mission">
            <span className="mv-card__label">OUR MISSION</span>
            <h3 className="mv-card__title">Simplify Communication for Every Business</h3>
            <p className="mv-card__text">To provide the most reliable, scalable, and affordable messaging platform that empowers businesses of all sizes to connect with their customers instantly.</p>
          </div>
          <div className="mv-card mv-card--vision">
            <span className="mv-card__label">OUR VISION</span>
            <h3 className="mv-card__title">India's Most Trusted Messaging Partner</h3>
            <p className="mv-card__text">To become the go-to communication infrastructure for every business in India, enabling seamless multi-channel engagement at any scale.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> CORE VALUES</p>
          <h2 className="section-title">What <span className="c-green">Drives Us</span></h2>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="card value-card">
                <span className="value-card__icon">{v.icon}</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="about-stats__grid">
            {stats.map((s) => (
              <div key={s.label} className="about-stat">
                <strong className="about-stat__value">{s.value}</strong>
                <span className="about-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> OUR JOURNEY</p>
          <h2 className="section-title">Milestones That <span className="c-green">Define Us</span></h2>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={t.year} className={"timeline__item" + (i % 2 === 0 ? " timeline__item--left" : " timeline__item--right")}>
                <div className="timeline__card">
                  <span className="timeline__year">{t.year}</span>
                  <h3 className="timeline__title">{t.title}</h3>
                  <p className="timeline__text">{t.text}</p>
                </div>
                <div className="timeline__dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> OUR TEAM</p>
          <h2 className="section-title">The People Behind <span className="c-green">Our Success</span></h2>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="card team-card">
                <div className="team-card__avatar">{m.name.charAt(0)}</div>
                <h3 className="team-card__name">{m.name}</h3>
                <p className="team-card__role">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta">
            <h2 className="about-cta__title">Ready to Work With Us?</h2>
            <p className="about-cta__text">Join 10,000+ businesses already growing with Vishnneshwara Groups.</p>
            <div className="about-cta__btns">
              <button className="btn btn--green">Get Started Now <ArrowRight /></button>
              <button className="btn btn--outline">Contact Us <ArrowRight /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
