import { useState } from "react"
import "./Faq.css"
import { ArrowRight } from "../Icons.jsx"

const sections = [
  {
    title: "Billing & Payments",
    items: [
      { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, net banking, and bank transfers for annual plans." },
      { q: "Can I change my plan anytime?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately." },
      { q: "Do unused credits roll over?", a: "Credits do not roll over to the next billing cycle. We recommend choosing a plan that matches your usage." },
      { q: "Is there a refund policy?", a: "We offer a 7-day refund policy for new subscriptions. Contact support to initiate a refund." },
    ],
  },
  {
    title: "SMS",
    items: [
      { q: "What is DLT registration?", a: "DLT (Distributed Ledger Technology) is a TRAI mandate for all SMS senders in India. We assist with registration." },
      { q: "What is the maximum SMS length?", a: "A standard SMS is 160 characters. Unicode messages (Hindi, etc.) support 70 characters per part." },
      { q: "Can I send promotional SMS?", a: "Yes, with proper DLT registration and approved templates, you can send promotional SMS to opted-in users." },
      { q: "What delivery rate can I expect?", a: "We maintain a 99%+ delivery rate through intelligent routing and multiple operator connections." },
    ],
  },
  {
    title: "WhatsApp",
    items: [
      { q: "Do I need a WhatsApp Business account?", a: "Yes, you need a WhatsApp Business API account. We help you set it up and get verified." },
      { q: "What types of messages can I send?", a: "You can send template messages (pre-approved), session messages, and rich media like images and documents." },
      { q: "What is a WhatsApp template message?", a: "Template messages are pre-approved message formats required for outbound WhatsApp communication." },
      { q: "Is there a per-message cost?", a: "WhatsApp charges per conversation (24-hour window). Our plans include a set number of conversations." },
    ],
  },
  {
    title: "Email",
    items: [
      { q: "How do I improve email deliverability?", a: "Set up SPF, DKIM, and DMARC records. Use a verified sending domain and maintain a clean list." },
      { q: "Can I use my own domain?", a: "Yes, you can send emails from your own domain after completing domain verification." },
      { q: "What is the maximum email size?", a: "We support emails up to 10MB including attachments." },
      { q: "Do you handle unsubscribes?", a: "Yes, we automatically process unsubscribe requests and maintain suppression lists." },
    ],
  },
  {
    title: "Technical & API",
    items: [
      { q: "What is the API rate limit?", a: "Rate limits vary by plan: Starter (100/min), Professional (500/min), Business (2000/min), Enterprise (custom)." },
      { q: "Do you provide webhooks?", a: "Yes, we support webhooks for delivery status, inbound messages, and campaign events." },
      { q: "Is there a sandbox environment?", a: "Yes, all plans include a sandbox environment for testing without sending real messages." },
      { q: "What SDKs are available?", a: "We provide official SDKs for Node.js, Python, PHP, and Java. REST API works with any language." },
    ],
  },
  {
    title: "Support",
    items: [
      { q: "What support channels are available?", a: "We offer email, live chat, and phone support. Enterprise plans include a dedicated account manager." },
      { q: "What are your support hours?", a: "Email and chat support is available 24/7. Phone support is available Mon–Sat, 9am–7pm IST." },
      { q: "How do I report a bug?", a: "You can report bugs via our support portal or email support@vishnneshwaragroups.com." },
    ],
  },
]

export default function Faq() {
  const [search, setSearch] = useState("")
  const [openItem, setOpenItem] = useState(null)

  const filtered = sections.map((s) => ({
    ...s,
    items: s.items.filter(
      (i) => !search || i.q.toLowerCase().includes(search.toLowerCase()) || i.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((s) => s.items.length > 0)

  return (
    <>
      {/* Hero */}
      <section className="faq-hero">
        <div className="container faq-hero__inner">
          <span className="badge">HELP CENTER</span>
          <h1 className="faq-hero__title">Frequently Asked <span className="c-green">Questions</span></h1>
          <p className="faq-hero__sub">Find answers to common questions about our platform, billing, and services.</p>
          <div className="faq-search">
            <input
              type="search"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="faq-search__input"
              aria-label="Search FAQ"
            />
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="faq-main">
        <div className="container faq-main__inner">
          {/* Sidebar */}
          <nav className="faq-sidebar" aria-label="FAQ categories">
            {sections.map((s) => (
              <a key={s.title} href={"#" + s.title.replace(/\s+/g, "-").toLowerCase()} className="faq-sidebar__link">{s.title}</a>
            ))}
          </nav>

          {/* Content */}
          <div className="faq-content">
            {filtered.length === 0 ? (
              <p className="faq-empty">No results found for "<strong>{search}</strong>". Try a different search term.</p>
            ) : (
              filtered.map((s) => (
                <div key={s.title} id={s.title.replace(/\s+/g, "-").toLowerCase()} className="faq-section">
                  <h2 className="faq-section__title">{s.title}</h2>
                  <div className="faq-list">
                    {s.items.map((item, i) => {
                      const key = s.title + i
                      return (
                        <div key={key} className={"faq-item" + (openItem === key ? " open" : "")}>
                          <button className="faq-item__q" onClick={() => setOpenItem(openItem === key ? null : key)} aria-expanded={openItem === key}>
                            {item.q}
                            <span className="faq-item__arrow" aria-hidden="true">{openItem === key ? "−" : "+"}</span>
                          </button>
                          {openItem === key && <p className="faq-item__a">{item.a}</p>}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta-section">
        <div className="container">
          <div className="faq-cta">
            <h2 className="faq-cta__title">Still Have Questions?</h2>
            <p className="faq-cta__text">Our support team is available 24/7 to help you with anything.</p>
            <div className="faq-cta__btns">
              <button className="btn btn--green">Contact Support <ArrowRight /></button>
              <button className="btn btn--outline">Live Chat <ArrowRight /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
