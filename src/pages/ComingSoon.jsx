import { useState, useEffect } from "react"
import "./ComingSoon.css"
import { ArrowRight, MailIcon } from "../Icons.jsx"

function useCountdown(target) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return time
}

const LAUNCH = Date.now() + 30 * 24 * 60 * 60 * 1000 // 30 days from now

export default function ComingSoon() {
  const { d, h, m, s } = useCountdown(LAUNCH)
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  return (
    <div className="cs-page">
      <div className="cs-inner">
        <div className="cs-brand">
          <img src="/vg-mark.png" alt="Vishnneshwara Groups" className="cs-logo" />
          <div className="cs-brand__text">
            <strong>VISHNNESHWARA</strong>
            <em>GROUPS</em>
          </div>
        </div>

        <span className="badge cs-badge">SOMETHING EXCITING IS COMING</span>
        <h1 className="cs-title">We're <span className="c-green">Launching Soon</span></h1>
        <p className="cs-sub">We're working hard to bring you an even better messaging experience. Stay tuned for our big launch!</p>

        {/* Countdown */}
        <div className="cs-countdown" aria-label="Countdown to launch">
          {[{ v: d, l: "Days" }, { v: h, l: "Hours" }, { v: m, l: "Minutes" }, { v: s, l: "Seconds" }].map(({ v, l }) => (
            <div key={l} className="cs-unit">
              <span className="cs-unit__val">{String(v).padStart(2, "0")}</span>
              <span className="cs-unit__label">{l}</span>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        {done ? (
          <p className="cs-done">🎉 You're on the list! We'll notify you at launch.</p>
        ) : (
          <form className="cs-form" onSubmit={(e) => { e.preventDefault(); setDone(true) }}>
            <input
              type="email"
              placeholder="Enter your email to get notified"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="cs-input"
              aria-label="Email for launch notification"
              required
            />
            <button type="submit" className="btn btn--green">Notify Me <ArrowRight /></button>
          </form>
        )}

        <a href="#home" className="cs-back">← Back to Home</a>
      </div>
      <div className="cs-bg" aria-hidden="true" />
    </div>
  )
}
