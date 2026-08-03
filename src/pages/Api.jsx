import "./Api.css"
import { ArrowRight, Shield, Bolt, Chart, Target } from "../Icons.jsx"

const sdks = [
  { lang: "Node.js",  color: "green", snippet: `const vg = require('vg-sdk');\nvg.sms.send({\n  to: '+91XXXXXXXXXX',\n  message: 'Hello from VG!'\n});` },
  { lang: "Python",   color: "blue",  snippet: `import vg_sdk as vg\nvg.sms.send(\n  to='+91XXXXXXXXXX',\n  message='Hello from VG!'\n)` },
  { lang: "PHP",      color: "blue",  snippet: `$vg = new VGClient('<api_key>');\n$vg->sms->send([\n  'to' => '+91XXXXXXXXXX',\n  'message' => 'Hello from VG!'\n]);` },
  { lang: "cURL",     color: "green", snippet: `curl -X POST https://api.vg.com/v1/sms \\\n  -H "Authorization: Bearer <api_key>" \\\n  -d '{"to":"+91XXXXXXXXXX","message":"Hello!"}'` },
]

const endpoints = [
  { method: "POST", path: "/v1/sms/send",        desc: "Send a single or bulk SMS message" },
  { method: "POST", path: "/v1/whatsapp/send",   desc: "Send WhatsApp message via Business API" },
  { method: "POST", path: "/v1/email/send",      desc: "Send transactional or bulk email" },
  { method: "POST", path: "/v1/otp/send",        desc: "Send OTP via SMS or WhatsApp" },
  { method: "GET",  path: "/v1/reports/delivery",desc: "Fetch delivery reports for campaigns" },
  { method: "GET",  path: "/v1/contacts",        desc: "List and manage contact groups" },
]

const highlights = [
  { icon: <Bolt size={26} />,   title: "RESTful API",       text: "Simple, predictable REST endpoints with JSON request/response." },
  { icon: <Shield size={26} />, title: "Secure Auth",       text: "Bearer token authentication with IP whitelisting support." },
  { icon: <Chart size={26} />,  title: "Webhooks",          text: "Real-time delivery status callbacks to your endpoint." },
  { icon: <Target size={26} />, title: "99.9% Uptime SLA",  text: "Enterprise-grade reliability with redundant infrastructure." },
]

export default function Api() {
  return (
    <>
      {/* Hero */}
      <section className="api-hero">
        <div className="container api-hero__inner">
          <span className="badge">DEVELOPER API</span>
          <h1 className="api-hero__title">Integrate Messaging into <span className="c-green">Your App</span></h1>
          <p className="api-hero__sub">Powerful REST APIs to send SMS, WhatsApp, and Email from any application. Get started in minutes with our SDKs and documentation.</p>
          <div className="api-hero__cta">
            <button className="btn btn--green">Get API Key <ArrowRight /></button>
            <button className="btn btn--outline">View Docs <ArrowRight /></button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="api-highlights">
        <div className="container">
          <div className="api-highlights__grid">
            {highlights.map((h) => (
              <div key={h.title} className="api-highlight">
                <span className="api-highlight__icon">{h.icon}</span>
                <div>
                  <h3 className="api-highlight__title">{h.title}</h3>
                  <p className="api-highlight__text">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="api-auth">
        <div className="container api-auth__inner">
          <div className="api-auth__text">
            <p className="eyebrow"><span className="eyebrow__dash" /> AUTHENTICATION</p>
            <h2 className="section-title" style={{textAlign:"left"}}>Simple <span className="c-green">Bearer Token</span> Auth</h2>
            <p className="api-auth__body">All API requests must include your API key in the Authorization header. Generate your key from the dashboard.</p>
            <ul className="api-auth__list">
              <li><span className="svc-check">✓</span> API key generated instantly from dashboard</li>
              <li><span className="svc-check">✓</span> IP whitelisting for added security</li>
              <li><span className="svc-check">✓</span> Key rotation without downtime</li>
            </ul>
          </div>
          <div className="api-code-block">
            <div className="api-code-block__header">
              <span className="api-code-block__lang">HTTP Header</span>
            </div>
            <pre className="api-code-block__body"><code>{`Authorization: Bearer <api_key>\nContent-Type: application/json`}</code></pre>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="api-endpoints">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> ENDPOINTS</p>
          <h2 className="section-title">API <span className="c-green">Reference</span></h2>
          <div className="endpoints-table-wrap">
            <table className="endpoints-table" aria-label="API endpoints">
              <thead>
                <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
              </thead>
              <tbody>
                {endpoints.map((e) => (
                  <tr key={e.path}>
                    <td><span className={"ep-method ep-method--" + e.method.toLowerCase()}>{e.method}</span></td>
                    <td className="ep-path"><code>{e.path}</code></td>
                    <td className="ep-desc">{e.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="api-sdks">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> SDKs</p>
          <h2 className="section-title">Code <span className="c-green">Samples</span></h2>
          <div className="sdk-grid">
            {sdks.map((s) => (
              <div key={s.lang} className="api-code-block">
                <div className="api-code-block__header">
                  <span className={"api-code-block__lang api-code-block__lang--" + s.color}>{s.lang}</span>
                </div>
                <pre className="api-code-block__body"><code>{s.snippet}</code></pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="api-limits">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> RATE LIMITS</p>
          <h2 className="section-title">Fair <span className="c-green">Usage Policy</span></h2>
          <div className="limits-grid">
            {[
              { plan: "Starter",      sms: "100/min",  wa: "50/min",  email: "200/min" },
              { plan: "Professional", sms: "500/min",  wa: "200/min", email: "1000/min" },
              { plan: "Business",     sms: "2000/min", wa: "1000/min",email: "5000/min" },
              { plan: "Enterprise",   sms: "Custom",   wa: "Custom",  email: "Custom" },
            ].map((r) => (
              <div key={r.plan} className="card limit-card">
                <h3 className="limit-card__plan">{r.plan}</h3>
                <div className="limit-card__rows">
                  <div className="limit-row"><span>SMS</span><strong>{r.sms}</strong></div>
                  <div className="limit-row"><span>WhatsApp</span><strong>{r.wa}</strong></div>
                  <div className="limit-row"><span>Email</span><strong>{r.email}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="api-cta-section">
        <div className="container">
          <div className="api-cta">
            <h2 className="api-cta__title">Start Building Today</h2>
            <p className="api-cta__text">Get your API key and start sending messages in under 5 minutes.</p>
            <div className="api-cta__btns">
              <button className="btn btn--green">Get API Key <ArrowRight /></button>
              <button className="btn btn--outline">Read Full Docs <ArrowRight /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
