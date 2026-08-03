import { useState } from "react"
import "./Campaigns.css"
import { ArrowRight, ChatIcon, WhatsAppIcon, MailIcon, Send, Target, Clipboard } from "../Icons.jsx"

const campaigns = [
  { name: "Diwali Promo SMS",       channel: "SMS",      status: "Completed", sent: 5000,  delivered: 4950, date: "Dec 10, 2024" },
  { name: "WhatsApp Flash Sale",    channel: "WhatsApp", status: "Running",   sent: 1200,  delivered: 1180, date: "Dec 12, 2024" },
  { name: "Newsletter Dec 2024",    channel: "Email",    status: "Scheduled", sent: 0,     delivered: 0,    date: "Dec 15, 2024" },
  { name: "OTP Verification Blast", channel: "SMS",      status: "Completed", sent: 10000, delivered: 9980, date: "Dec 8, 2024" },
  { name: "Product Launch Email",   channel: "Email",    status: "Draft",     sent: 0,     delivered: 0,    date: "Dec 20, 2024" },
]

const templates = [
  { icon: <ChatIcon size={22} />,    color: "blue",  title: "Promotional SMS",    desc: "Hi {name}, get 20% off on your next order! Use code SAVE20. Valid till {date}." },
  { icon: <WhatsAppIcon size={22} />, color: "green", title: "WhatsApp Welcome",  desc: "Welcome to {brand}! 🎉 We're excited to have you. Reply HELP for assistance." },
  { icon: <MailIcon size={22} />,    color: "blue",  title: "Email Newsletter",   desc: "Subject: {subject} | Hi {name}, here's what's new this month at {brand}..." },
]

export default function Campaigns() {
  const [tab, setTab] = useState("all")

  const filtered = tab === "all" ? campaigns : campaigns.filter((c) => c.status.toLowerCase() === tab)

  return (
    <div className="camp-page">
      {/* Header */}
      <div className="camp-header">
        <div>
          <h1 className="camp-header__title">Campaigns</h1>
          <p className="camp-header__sub">Manage and track all your broadcast campaigns</p>
        </div>
        <button className="btn btn--green">New Campaign <ArrowRight /></button>
      </div>

      {/* Tabs */}
      <div className="camp-tabs">
        {["all", "running", "completed", "scheduled", "draft"].map((t) => (
          <button key={t} className={"camp-tab" + (tab === t ? " active" : "")} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="camp-table-wrap">
        <div className="camp-table-scroll">
          <table className="camp-table" aria-label="Campaigns list">
            <thead>
              <tr><th>Campaign Name</th><th>Channel</th><th>Status</th><th>Sent</th><th>Delivered</th><th>Rate</th><th>Date</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.name}>
                  <td className="camp-table__name">{c.name}</td>
                  <td><span className={"dash-channel dash-channel--" + c.channel.toLowerCase()}>{c.channel}</span></td>
                  <td><span className={"dash-status dash-status--" + c.status.toLowerCase()}>{c.status}</span></td>
                  <td>{c.sent.toLocaleString()}</td>
                  <td>{c.delivered.toLocaleString()}</td>
                  <td className="camp-table__rate">{c.sent > 0 ? ((c.delivered / c.sent) * 100).toFixed(1) + "%" : "—"}</td>
                  <td className="camp-table__date">{c.date}</td>
                  <td>
                    <div className="camp-actions">
                      <button className="camp-action" aria-label="View campaign">👁</button>
                      <button className="camp-action" aria-label="Edit campaign">✏️</button>
                      <button className="camp-action camp-action--del" aria-label="Delete campaign">🗑</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Templates */}
      <div className="camp-templates">
        <h2 className="camp-section-title">Message Templates</h2>
        <div className="camp-templates__grid">
          {templates.map((t) => (
            <div key={t.title} className="card camp-tpl">
              <div className="camp-tpl__top">
                <span className={"camp-tpl__icon camp-tpl__icon--" + t.color}>{t.icon}</span>
                <h3 className="camp-tpl__title">{t.title}</h3>
              </div>
              <p className="camp-tpl__desc">{t.desc}</p>
              <button className="btn btn--outline-dark camp-tpl__btn">Use Template <ArrowRight /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
