import "./Home.css"
import {
  ArrowRight, ChatIcon, WhatsAppIcon, MailIcon,
  Gauge, Bolt, Shield, Users, Chart, Headset,
  UsersSolid, Send, ShieldSolid, Clipboard, Target,
} from "../Icons.jsx"

const services = [
  { icon: <ChatIcon size={30} />,    color: "green", title: "SMS Broadcast",      text: "Send bulk SMS instantly to thousands of mobile numbers with high delivery and speed." },
  { icon: <WhatsAppIcon size={30} />, color: "green", title: "WhatsApp Broadcast", text: "Engage your customers on WhatsApp with personalized and interactive messages." },
  { icon: <MailIcon size={30} />,    color: "blue",  title: "Email Broadcast",    text: "Send professional emails to large audiences and boost your business communication." },
]

const features = [
  { icon: <Gauge />,   title: "High Delivery Rate" },
  { icon: <Bolt />,    title: "Instant Delivery" },
  { icon: <Shield />,  title: "Secure & Reliable" },
  { icon: <Users />,   title: "Easy to Use Platform" },
  { icon: <Chart />,   title: "Detailed Reports & Analytics" },
  { icon: <Headset />, title: "24/7 Customer Support" },
]

const stats = [
  { icon: <UsersSolid />,       value: "10,000+",  label: "Happy Clients" },
  { icon: <Send />,             value: "100+ Cr",  label: "Messages Delivered" },
  { icon: <MailIcon size={24}/>, value: "5+ Cr",   label: "Emails Sent" },
  { icon: <ShieldSolid />,      value: "99%",      label: "Delivery Rate" },
]

const steps = [
  { num: "01", icon: <Clipboard />,    title: "Upload", text: "Upload your contacts or create a group." },
  { num: "02", icon: <Send size={28}/>, title: "Create", text: "Create your message and choose channel." },
  { num: "03", icon: <Target />,       title: "Send",   text: "Send and reach your audience instantly." },
]

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="hero" id="home">
        <div className="container hero__inner">
          <div className="hero__left">
            <span className="badge">SMARTER MESSAGING. STRONGER CONNECTIONS.</span>
            <h1 className="hero__title">
              Powerful <span className="c-green">SMS</span>, <span className="c-green">WhatsApp</span> &amp;{" "}
              <span className="c-blue">Email</span> Broadcast Services
            </h1>
            <p className="hero__sub">
              Reach the right audience instantly with our reliable, fast and secure messaging solutions.
            </p>

            <div className="channels">
              {[
                { icon: <ChatIcon size={22} />,    color: "blue",  label: "SMS" },
                { icon: <WhatsAppIcon size={22} />, color: "green", label: "WhatsApp" },
                { icon: <MailIcon size={22} />,    color: "blue",  label: "Email" },
              ].map(({ icon, color, label }) => (
                <div key={label} className="channel">
                  <span className={"channel__icon channel__icon--" + color}>{icon}</span>
                  <span className="channel__text">
                    <strong>{label}</strong>Broadcast
                  </span>
                </div>
              ))}
            </div>

            <div className="hero__cta">
              <button className="btn btn--green">Get Started Now <ArrowRight /></button>
              <button className="btn btn--outline">Explore Services <ArrowRight /></button>
            </div>
          </div>

          <div className="hero__right">
            <div className="hero__logo-wrap">
              <div className="hero__logo-ring" aria-hidden="true" />
              <img src="/vg-mark.png" alt="Vishnneshwara Groups emblem" className="hero__logo" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="services" id="services">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> OUR SERVICES</p>
          <h2 className="section-title">Comprehensive <span className="c-green">Broadcast Solutions</span></h2>
          <p className="section-sub">All your communication needs in one powerful platform</p>
          <div className="cards">
            {services.map((s) => (
              <article key={s.title} className="card">
                <span className={"card__icon card__icon--" + s.color}>{s.icon}</span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__text">{s.text}</p>
                <a href="#" className={"learn learn--" + s.color}>Learn More <ArrowRight /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="why" id="features">
        <div className="container">
          <p className="eyebrow eyebrow--light">WHY CHOOSE US</p>
          <h2 className="section-title section-title--light">Smart Platform. <span className="c-green">Great Results.</span></h2>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature">
                <span className="feature__icon">{f.icon}</span>
                <p className="feature__title">{f.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="stats-wrap">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__icon">{s.icon}</span>
                <span className="stat__body">
                  <strong className="stat__value">{s.value}</strong>
                  <span className="stat__label">{s.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="steps-section">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> HOW IT WORKS</p>
          <h2 className="section-title">Just 3 <span className="c-green">Simple Steps</span></h2>
          <div className="steps">
            {steps.map((st, i) => (
              <div key={st.num} className="steps__item">
                <article className="step">
                  <span className="step__num">{st.num}</span>
                  <span className="step__icon">{st.icon}</span>
                  <div className="step__body">
                    <h3 className="step__title">{st.title}</h3>
                    <p className="step__text">{st.text}</p>
                  </div>
                </article>
                {i < steps.length - 1 && <span className="steps__arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Banner ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta">
            <img src="/megaphone.png" alt="" className="cta__img" aria-hidden="true" />
            <div className="cta__body">
              <h2 className="cta__title">Ready to Grow Your Business?</h2>
              <p className="cta__text">Start sending powerful messages that deliver results.</p>
              <div className="cta__buttons">
                <button className="btn btn--green">Get Started Now <ArrowRight /></button>
                <button className="btn btn--outline">Contact Us <ArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
