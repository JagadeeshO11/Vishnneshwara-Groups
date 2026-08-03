import { useState } from "react"
import "./Login.css"
import { ArrowRight } from "../Icons.jsx"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", remember: false })
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value })

  return (
    <div className="auth-page">
      {/* Left panel */}
      <div className="auth-panel auth-panel--brand">
        <div className="auth-brand">
          <img src="/vg-mark.png" alt="Vishnneshwara Groups" className="auth-brand__mark" />
          <div className="auth-brand__text">
            <strong>VISHNNESHWARA</strong>
            <em>GROUPS</em>
          </div>
        </div>
        <div className="auth-panel__body">
          <h2 className="auth-panel__title">Welcome Back!</h2>
          <p className="auth-panel__sub">Log in to manage your campaigns, contacts, and analytics — all in one place.</p>
          <ul className="auth-panel__perks">
            <li><span className="auth-perk-dot" />99% delivery rate across all channels</li>
            <li><span className="auth-perk-dot" />Real-time analytics dashboard</li>
            <li><span className="auth-perk-dot" />24/7 dedicated support</li>
          </ul>
        </div>
        <div className="auth-panel__bg" aria-hidden="true" />
      </div>

      {/* Right panel */}
      <div className="auth-panel auth-panel--form">
        <div className="auth-form-wrap">
          <h1 className="auth-form__title">Sign In</h1>
          <p className="auth-form__sub">Don't have an account? <a href="#register" className="auth-link">Create one free</a></p>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()} noValidate>
            <div className="auth-field">
              <label htmlFor="login-email">Email Address</label>
              <input id="login-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={change} required />
            </div>
            <div className="auth-field">
              <label htmlFor="login-password">
                Password
                <a href="#forgot" className="auth-field__forgot">Forgot password?</a>
              </label>
              <input id="login-password" name="password" type="password" placeholder="Enter your password" value={form.password} onChange={change} required />
            </div>
            <label className="auth-checkbox">
              <input type="checkbox" name="remember" checked={form.remember} onChange={change} />
              <span>Remember me for 30 days</span>
            </label>
            <button type="submit" className="btn btn--green auth-form__submit">Sign In <ArrowRight /></button>
          </form>

          <div className="auth-divider"><span>or continue with</span></div>
          <div className="auth-socials">
            <button className="auth-social-btn" aria-label="Sign in with Google">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
