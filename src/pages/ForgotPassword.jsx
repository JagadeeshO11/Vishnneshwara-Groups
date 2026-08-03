import { useState } from "react"
import "./ForgotPassword.css"
import { ArrowRight } from "../Icons.jsx"

const STEPS = ["Email", "OTP", "Reset", "Done"]

export default function ForgotPassword() {
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [pw, setPw] = useState("")
  const [cpw, setCpw] = useState("")

  return (
    <div className="fp-page">
      <div className="fp-card">
        <img src="/vg-mark.png" alt="Vishnneshwara Groups" className="fp-logo" />
        <div className="fp-steps">
          {STEPS.map((s, i) => (
            <span key={s} className={"fp-step" + (i === step ? " active" : i < step ? " done" : "")}>{s}</span>
          ))}
        </div>

        {step === 0 && (
          <>
            <h1 className="fp-title">Forgot Password?</h1>
            <p className="fp-sub">Enter your email address and we'll send you an OTP to reset your password.</p>
            <form className="fp-form" onSubmit={(e) => { e.preventDefault(); setStep(1) }}>
              <div className="auth-field">
                <label htmlFor="fp-email">Email Address</label>
                <input id="fp-email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn--green fp-btn">Send OTP <ArrowRight /></button>
              <a href="#login" className="fp-back">← Back to Sign In</a>
            </form>
          </>
        )}

        {step === 1 && (
          <>
            <h1 className="fp-title">Enter OTP</h1>
            <p className="fp-sub">We sent a 6-digit OTP to <strong>{email}</strong>. Enter it below.</p>
            <form className="fp-form" onSubmit={(e) => { e.preventDefault(); setStep(2) }}>
              <div className="auth-field">
                <label htmlFor="fp-otp">OTP Code</label>
                <input id="fp-otp" type="text" placeholder="Enter 6-digit OTP" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn--green fp-btn">Verify OTP <ArrowRight /></button>
              <button type="button" className="fp-resend" onClick={() => {}}>Resend OTP</button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="fp-title">Reset Password</h1>
            <p className="fp-sub">Create a new strong password for your account.</p>
            <form className="fp-form" onSubmit={(e) => { e.preventDefault(); setStep(3) }}>
              <div className="auth-field">
                <label htmlFor="fp-pw">New Password</label>
                <input id="fp-pw" type="password" placeholder="New password" value={pw} onChange={(e) => setPw(e.target.value)} required />
              </div>
              <div className="auth-field">
                <label htmlFor="fp-cpw">Confirm Password</label>
                <input id="fp-cpw" type="password" placeholder="Confirm new password" value={cpw} onChange={(e) => setCpw(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn--green fp-btn">Reset Password <ArrowRight /></button>
            </form>
          </>
        )}

        {step === 3 && (
          <div className="fp-success">
            <span className="fp-success__icon" aria-hidden="true">✓</span>
            <h1 className="fp-title">Password Reset!</h1>
            <p className="fp-sub">Your password has been successfully reset. You can now sign in with your new password.</p>
            <a href="#login" className="btn btn--green fp-btn">Sign In Now <ArrowRight /></a>
          </div>
        )}
      </div>
    </div>
  )
}
