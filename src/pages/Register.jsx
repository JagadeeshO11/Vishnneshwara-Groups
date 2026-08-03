import { useState } from "react"
import "./Register.css"
import { ArrowRight } from "../Icons.jsx"

const steps = ["Account", "Company", "Verify"]

function passwordStrength(pw) {
  if (!pw) return 0
  let s = 0
  if (pw.length >= 8) s++
  if (/[A-Z]/.test(pw)) s++
  if (/[0-9]/.test(pw)) s++
  if (/[^A-Za-z0-9]/.test(pw)) s++
  return s
}

export default function Register() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ name: "", email: "", password: "", company: "", phone: "", otp: "", terms: false })
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value })
  const strength = passwordStrength(form.password)
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength]
  const strengthClass = ["", "weak", "fair", "good", "strong"][strength]

  return (
    <div className="auth-page">
      {/* Brand panel */}
      <div className="auth-panel auth-panel--brand">
        <div className="auth-brand">
          <img src="/vg-mark.png" alt="Vishnneshwara Groups" className="auth-brand__mark" />
          <div className="auth-brand__text">
            <strong>VISHNNESHWARA</strong>
            <em>GROUPS</em>
          </div>
        </div>
        <div className="auth-panel__body">
          <h2 className="auth-panel__title">Start Sending Today</h2>
          <p className="auth-panel__sub">Join 10,000+ businesses using Vishnneshwara Groups to power their messaging campaigns.</p>
          <ul className="auth-panel__perks">
            <li><span className="auth-perk-dot" />Free 14-day trial — no credit card</li>
            <li><span className="auth-perk-dot" />Setup in under 5 minutes</li>
            <li><span className="auth-perk-dot" />Full access to all features</li>
          </ul>
        </div>
        <div className="auth-panel__bg" aria-hidden="true" />
      </div>

      {/* Form panel */}
      <div className="auth-panel auth-panel--form">
        <div className="auth-form-wrap">
          {/* Progress */}
          <div className="reg-steps">
            {steps.map((s, i) => (
              <div key={s} className={"reg-step" + (i === step ? " active" : i < step ? " done" : "")}>
                <span className="reg-step__dot">{i < step ? "✓" : i + 1}</span>
                <span className="reg-step__label">{s}</span>
              </div>
            ))}
          </div>

          <h1 className="auth-form__title">{step === 0 ? "Create Account" : step === 1 ? "Company Details" : "Verify Email"}</h1>
          <p className="auth-form__sub">
            {step === 0 ? <>Already have an account? <a href="#login" className="auth-link">Sign in</a></> : step === 1 ? "Tell us about your business" : "Enter the OTP sent to your email"}
          </p>

          <form className="auth-form" onSubmit={(e) => { e.preventDefault(); if (step < 2) setStep(step + 1) }} noValidate>
            {step === 0 && (
              <>
                <div className="auth-field">
                  <label htmlFor="reg-name">Full Name</label>
                  <input id="reg-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={change} required />
                </div>
                <div className="auth-field">
                  <label htmlFor="reg-email">Email Address</label>
                  <input id="reg-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={change} required />
                </div>
                <div className="auth-field">
                  <label htmlFor="reg-password">Password</label>
                  <input id="reg-password" name="password" type="password" placeholder="Create a strong password" value={form.password} onChange={change} required />
                  {form.password && (
                    <div className="pw-strength">
                      <div className="pw-strength__bar">
                        {[1,2,3,4].map((n) => (
                          <span key={n} className={"pw-strength__seg" + (strength >= n ? " pw-strength__seg--" + strengthClass : "")} />
                        ))}
                      </div>
                      <span className={"pw-strength__label pw-strength__label--" + strengthClass}>{strengthLabel}</span>
                    </div>
                  )}
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <div className="auth-field">
                  <label htmlFor="reg-company">Company Name</label>
                  <input id="reg-company" name="company" type="text" placeholder="Your company name" value={form.company} onChange={change} required />
                </div>
                <div className="auth-field">
                  <label htmlFor="reg-phone">Phone Number</label>
                  <input id="reg-phone" name="phone" type="tel" placeholder="+91 XXXXXXXXXX" value={form.phone} onChange={change} required />
                </div>
                <label className="auth-checkbox">
                  <input type="checkbox" name="terms" checked={form.terms} onChange={change} required />
                  <span>I agree to the <a href="#terms" className="auth-link">Terms & Conditions</a> and <a href="#privacy" className="auth-link">Privacy Policy</a></span>
                </label>
              </>
            )}
            {step === 2 && (
              <div className="auth-field">
                <label htmlFor="reg-otp">OTP Code</label>
                <input id="reg-otp" name="otp" type="text" placeholder="Enter 6-digit OTP" maxLength={6} value={form.otp} onChange={change} required />
                <p className="auth-field__hint">OTP sent to {form.email || "your email"}</p>
              </div>
            )}
            <button type="submit" className="btn btn--green auth-form__submit">
              {step < 2 ? "Continue" : "Create Account"} <ArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
