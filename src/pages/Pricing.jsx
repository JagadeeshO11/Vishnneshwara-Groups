import { useState } from "react"
import "./Pricing.css"
import { ArrowRight, Shield, Bolt, Chart, Headset, Users, Target } from "../Icons.jsx"

const plans = [
  {
    name: "Starter",
    color: "blue",
    monthlyPrice: 999,
    yearlyPrice: 799,
    desc: "Perfect for small businesses getting started with broadcast messaging.",
    features: ["5,000 SMS / month", "1,000 WhatsApp msgs", "10,000 Emails", "Basic analytics", "Email support", "API access"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    color: "green",
    monthlyPrice: 2999,
    yearlyPrice: 2399,
    desc: "Ideal for growing businesses that need more volume and advanced features.",
    features: ["25,000 SMS / month", "10,000 WhatsApp msgs", "1,00,000 Emails", "Advanced analytics", "Priority support", "Campaign scheduler", "Contact management", "Message templates"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    color: "blue",
    monthlyPrice: 7999,
    yearlyPrice: 6399,
    desc: "For established businesses with high-volume messaging requirements.",
    features: ["1,00,000 SMS / month", "50,000 WhatsApp msgs", "5,00,000 Emails", "Full analytics suite", "Dedicated manager", "All Pro features", "White-label option", "SLA guarantee"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Enterprise",
    color: "navy",
    monthlyPrice: null,
    yearlyPrice: null,
    desc: "Custom solutions for large enterprises with dedicated infrastructure.",
    features: ["Unlimited SMS", "Unlimited WhatsApp", "Unlimited Emails", "Custom analytics", "24/7 phone support", "On-premise option", "Custom SLA", "Dedicated infra"],
    cta: "Contact Sales",
    popular: false,
  },
]

const faqs = [
  { q: "Can I change my plan anytime?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately." },
  { q: "Is there a free trial?", a: "Yes, the Professional plan comes with a 14-day free trial. No credit card required." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, net banking, and bank transfers." },
  { q: "Are there any setup fees?", a: "No setup fees. You only pay the plan price. Enterprise plans may have custom onboarding." },
  { q: "What happens if I exceed my limits?", a: "You'll be notified and can purchase add-on credits or upgrade your plan." },
  { q: "Do unused credits roll over?", a: "Credits do not roll over to the next month. We recommend choosing a plan that fits your usage." },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      {/* Hero */}
      <section className="price-hero">
        <div className="container price-hero__inner">
          <span className="badge">TRANSPARENT PRICING</span>
          <h1 className="price-hero__title">Simple Plans for <span className="c-green">Every Business</span></h1>
          <p className="price-hero__sub">No hidden fees. No surprises. Choose the plan that fits your needs and scale as you grow.</p>
          <div className="price-toggle" role="group" aria-label="Billing period">
            <button className={"price-toggle__btn" + (!yearly ? " active" : "")} onClick={() => setYearly(false)}>Monthly</button>
            <button className={"price-toggle__btn" + (yearly ? " active" : "")} onClick={() => setYearly(true)}>
              Yearly <span className="price-toggle__save">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="price-plans">
        <div className="container">
          <div className="price-grid">
            {plans.map((p) => (
              <article key={p.name} className={"card price-card" + (p.popular ? " price-card--popular" : "")}>
                {p.popular && <span className="price-card__badge">Most Popular</span>}
                <h3 className={"price-card__name price-card__name--" + p.color}>{p.name}</h3>
                <p className="price-card__desc">{p.desc}</p>
                <div className="price-card__price">
                  {p.monthlyPrice ? (
                    <>
                      <span className="price-card__currency">₹</span>
                      <span className="price-card__amount">{yearly ? p.yearlyPrice.toLocaleString() : p.monthlyPrice.toLocaleString()}</span>
                      <span className="price-card__period">/mo</span>
                    </>
                  ) : (
                    <span className="price-card__custom">Custom</span>
                  )}
                </div>
                <ul className="price-card__features">
                  {p.features.map((f) => (
                    <li key={f}><span className="price-check" aria-hidden="true">✓</span>{f}</li>
                  ))}
                </ul>
                <button className={"btn price-card__cta" + (p.popular ? " btn--green" : " btn--outline-dark")}>
                  {p.cta} <ArrowRight />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="price-compare">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> COMPARE PLANS</p>
          <h2 className="section-title">Feature <span className="c-green">Comparison</span></h2>
          <div className="compare-table-wrap">
            <table className="compare-table" aria-label="Plan comparison">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th>Professional</th>
                  <th>Business</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SMS Volume",          "5K",    "25K",    "1L",      "Unlimited"],
                  ["WhatsApp Messages",   "1K",    "10K",    "50K",     "Unlimited"],
                  ["Email Volume",        "10K",   "1L",     "5L",      "Unlimited"],
                  ["Analytics",          "Basic", "Advanced","Full",    "Custom"],
                  ["API Access",         "✓",     "✓",       "✓",       "✓"],
                  ["Campaign Scheduler", "—",     "✓",       "✓",       "✓"],
                  ["Dedicated Manager",  "—",     "—",       "✓",       "✓"],
                  ["White-label",        "—",     "—",       "✓",       "✓"],
                  ["SLA Guarantee",      "—",     "—",       "✓",       "Custom"],
                  ["Support",            "Email", "Priority","Dedicated","24/7 Phone"],
                ].map(([feat, ...vals]) => (
                  <tr key={feat}>
                    <td className="compare-table__feat">{feat}</td>
                    {vals.map((v, i) => (
                      <td key={i} className={v === "✓" ? "compare-table__yes" : v === "—" ? "compare-table__no" : ""}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="price-faq">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> FAQ</p>
          <h2 className="section-title">Frequently Asked <span className="c-green">Questions</span></h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={"faq-item" + (openFaq === i ? " open" : "")}>
                <button className="faq-item__q" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  {f.q}
                  <span className="faq-item__arrow" aria-hidden="true">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className="faq-item__a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="price-cta-section">
        <div className="container">
          <div className="price-cta">
            <h2 className="price-cta__title">Need a Custom Plan?</h2>
            <p className="price-cta__text">Talk to our sales team for a tailored solution that fits your exact requirements.</p>
            <div className="price-cta__btns">
              <button className="btn btn--green">Contact Sales <ArrowRight /></button>
              <button className="btn btn--outline">View All Features <ArrowRight /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
