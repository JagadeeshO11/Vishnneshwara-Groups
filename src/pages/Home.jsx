import "./Home.css"
import { useTypewriter } from "../hooks/useTypewriter.js"
import { useCountUp }    from "../hooks/useCountUp.js"
import { useScrollReveal } from "../hooks/useScrollReveal.js"
import {
  ArrowRight, ChatIcon, WhatsAppIcon, MailIcon,
  Gauge, Bolt, Shield, Users, Chart, Headset,
  UsersSolid, Send, ShieldSolid, Clipboard, Target,
} from "../Icons.jsx"

const services = [
  { icon: <ChatIcon size={30} />,     color: "green", title: "SMS Broadcast",      text: "Send bulk SMS instantly to thousands of mobile numbers with high delivery and speed." },
  { icon: <WhatsAppIcon size={30} />, color: "green", title: "WhatsApp Broadcast", text: "Engage your customers on WhatsApp with personalized and interactive messages." },
  { icon: <MailIcon size={30} />,     color: "blue",  title: "Email Broadcast",    text: "Send professional emails to large audiences and boost your business communication." },
]

const features = [
  { icon: <Gauge />,   title: "High Delivery Rate" },
  { icon: <Bolt />,    title: "Instant Delivery" },
  { icon: <Shield />,  title: "Secure & Reliable" },
  { icon: <Users />,   title: "Easy to Use Platform" },
  { icon: <Chart />,   title: "Detailed Reports & Analytics" },
  { icon: <Headset />, title: "24/7 Customer Support" },
]

const statsData = [
  { icon: <UsersSolid />,        end: 10000, suffix: "+",    label: "Happy Clients" },
  { icon: <Send />,              end: 100,   suffix: "+ Cr", label: "Messages Delivered" },
  { icon: <MailIcon size={24}/>, end: 5,     suffix: "+ Cr", label: "Emails Sent" },
  { icon: <ShieldSolid />,       end: 99,    suffix: "%",    label: "Delivery Rate" },
]

const steps = [
  { num: "01", icon: <Clipboard />,     title: "Upload", text: "Upload your contacts or create a group." },
  { num: "02", icon: <Send size={28}/>, title: "Create", text: "Create your message and choose channel." },
  { num: "03", icon: <Target />,        title: "Send",   text: "Send and reach your audience instantly." },
]

/* ── individual stat with its own countup ── */
function StatItem({ icon, end, suffix, label }) {
  const { count, ref } = useCountUp(end, 2000)
  return (
    <div className="stat" ref={ref}>
      <span className="stat__icon">{icon}</span>
      <span className="stat__body">
        <strong className="stat__value count-up">
          {end >= 1000 ? count.toLocaleString() : count}{suffix}
        </strong>
        <span className="stat__label">{label}</span>
      </span>
    </div>
  )
}

export default function Home() {
  const typed = useTypewriter(["SMS Broadcast", "WhatsApp Blast", "Email Campaigns", "Bulk Messaging"], 75, 45, 1600)

  const heroReveal    = useScrollReveal(0.1)
  const servicesReveal = useScrollReveal(0.1)
  const whyReveal     = useScrollReveal(0.1)
  const stepsReveal   = useScrollReveal(0.1)
  const ctaReveal     = useScrollReveal(0.1)

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="hero" id="home">
        <div className="container hero__inner">
          <div
            className={"hero__left reveal-left" + (heroReveal.visible ? " visible" : "")}
            ref={heroReveal.ref}
          >
            <span className="badge">SMARTER MESSAGING. STRONGER CONNECTIONS.</span>
            <h1 className="hero__title">
              <span className="hero__title-line">
                Powerful{" "}
                <span className="c-green typewriter-word">
                  {typed}
                  <span className="typewriter-cursor" aria-hidden="true" />
                </span>
              </span>
            </h1>
            <p className="hero__sub">
              Reach the right audience instantly with our reliable, fast and secure messaging solutions.
            </p>

            <div className="channels">
              {[
                { icon: <ChatIcon size={22} />,     color: "blue",  label: "SMS" },
                { icon: <WhatsAppIcon size={22} />, color: "green", label: "WhatsApp" },
                { icon: <MailIcon size={22} />,     color: "blue",  label: "Email" },
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

          <div className="hero__right reveal-right visible">
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
          <div className={"reveal" + (servicesReveal.visible ? " visible" : "")} ref={servicesReveal.ref}>
            <p className="eyebrow"><span className="eyebrow__dash" /> OUR SERVICES</p>
            <h2 className="section-title">Comprehensive <span className="c-green">Broadcast Solutions</span></h2>
            <p className="section-sub">All your communication needs in one powerful platform</p>
          </div>
          <div className={"cards stagger" + (servicesReveal.visible ? " visible" : "")}>
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
          <div className={"reveal" + (whyReveal.visible ? " visible" : "")} ref={whyReveal.ref}>
            <p className="eyebrow eyebrow--light">WHY CHOOSE US</p>
            <h2 className="section-title section-title--light">Smart Platform. <span className="c-green">Great Results.</span></h2>
          </div>
          <div className={"features-grid stagger" + (whyReveal.visible ? " visible" : "")}>
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
            {statsData.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="steps-section">
        <div className="container">
          <div className={"reveal" + (stepsReveal.visible ? " visible" : "")} ref={stepsReveal.ref}>
            <p className="eyebrow"><span className="eyebrow__dash" /> HOW IT WORKS</p>
            <h2 className="section-title">Just 3 <span className="c-green">Simple Steps</span></h2>
          </div>
          <div className={"steps stagger" + (stepsReveal.visible ? " visible" : "")}>
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
          <div className={"cta reveal-scale" + (ctaReveal.visible ? " visible" : "")} ref={ctaReveal.ref}>
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
