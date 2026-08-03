import { useState } from "react"
import "./Contact.css"
import { ArrowRight, Phone, MailIcon, Pin, Headset } from "../Icons.jsx"

const faqs = [
  { q: "How quickly can I get started?", a: "You can sign up and start sending messages within minutes. Our onboarding is fully self-service." },
  { q: "Do you offer a free trial?", a: "Yes, we offer a 14-day free trial on the Professional plan with no credit card required." },
  { q: "What is DLT registration?", a: "DLT (Distributed Ledger Technology) is a TRAI mandate for SMS senders in India. We help you register." },
  { q: "Can I integrate with my CRM?", a: "Yes, our REST API integrates with any CRM, ERP, or custom application." },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <>
      {/* Hero */}
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <span className="badge">GET IN TOUCH</span>
          <h1 className="contact-hero__title">We'd Love to <span className="c-green">Hear From You</span></h1>
          <p className="contact-hero__sub">Have a question, need a demo, or want to discuss a custom plan? Our team is ready to help.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-main">
        <div className="container contact-main__inner">
          {/* Form */}
          <div className="contact-form-wrap">
            <h2 className="contact-form__title">Send Us a Message</h2>
            {sent ? (
              <div className="contact-success">
                <span className="contact-success__icon" aria-hidden="true">✓</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn btn--green" onClick={() => setSent(false)}>Send Another <ArrowRight /></button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 XXXXXXXXXX" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Sales / Pricing</option>
                      <option>Technical Support</option>
                      <option>API Integration</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>
                <div className="contact-form__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn--green contact-form__submit">Send Message <ArrowRight /></button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact-info">
            <div className="contact-info__card">
              <span className="contact-info__icon"><Phone size={20} /></span>
              <div>
                <h3 className="contact-info__label">Phone</h3>
                <p className="contact-info__value">+91 XXXXXXXXXX</p>
                <p className="contact-info__note">Mon–Sat, 9am–7pm IST</p>
              </div>
            </div>
            <div className="contact-info__card">
              <span className="contact-info__icon"><MailIcon size={20} /></span>
              <div>
                <h3 className="contact-info__label">Email</h3>
                <p className="contact-info__value">info@vishnneshwaragroups.com</p>
                <p className="contact-info__note">We reply within 24 hours</p>
              </div>
            </div>
            <div className="contact-info__card">
              <span className="contact-info__icon"><Pin size={20} /></span>
              <div>
                <h3 className="contact-info__label">Office</h3>
                <p className="contact-info__value">India</p>
                <p className="contact-info__note">Serving clients nationwide</p>
              </div>
            </div>
            <div className="contact-info__card">
              <span className="contact-info__icon"><Headset size={20} /></span>
              <div>
                <h3 className="contact-info__label">Live Support</h3>
                <p className="contact-info__value">24/7 Chat Support</p>
                <p className="contact-info__note">Available for all paid plans</p>
              </div>
            </div>

            <div className="contact-hours">
              <h3 className="contact-hours__title">Business Hours</h3>
              <div className="contact-hours__rows">
                <div className="contact-hours__row"><span>Monday – Friday</span><strong>9:00 AM – 7:00 PM</strong></div>
                <div className="contact-hours__row"><span>Saturday</span><strong>10:00 AM – 5:00 PM</strong></div>
                <div className="contact-hours__row"><span>Sunday</span><strong>Closed</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> FAQ</p>
          <h2 className="section-title">Quick <span className="c-green">Answers</span></h2>
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
    </>
  )
}
