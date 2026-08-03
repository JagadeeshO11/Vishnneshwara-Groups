import { useState } from "react"
import "./Dashboard.css"
import { ChatIcon, WhatsAppIcon, MailIcon, Chart, Users, Send, Headset, ArrowRight, Bolt } from "../Icons.jsx"

const navItems = [
  { icon: <Chart size={18} />,      label: "Dashboard",   active: true },
  { icon: <Send size={18} />,       label: "Campaigns",   active: false },
  { icon: <ChatIcon size={18} />,   label: "SMS",         active: false },
  { icon: <WhatsAppIcon size={18}/>, label: "WhatsApp",   active: false },
  { icon: <MailIcon size={18} />,   label: "Email",       active: false },
  { icon: <Users size={18} />,      label: "Contacts",    active: false },
  { icon: <Chart size={18} />,      label: "Reports",     active: false },
  { icon: <Bolt size={18} />,       label: "API Keys",    active: false },
  { icon: <Headset size={18} />,    label: "Support",     active: false },
]

const stats = [
  { label: "SMS Credits",       value: "12,450",  sub: "+2,000 this month",  color: "blue",  icon: <ChatIcon size={20} /> },
  { label: "WhatsApp Credits",  value: "3,200",   sub: "+500 this month",    color: "green", icon: <WhatsAppIcon size={20} /> },
  { label: "Emails Sent",       value: "48,320",  sub: "98.2% delivered",    color: "blue",  icon: <MailIcon size={20} /> },
  { label: "Active Campaigns",  value: "7",       sub: "3 scheduled",        color: "green", icon: <Send size={20} /> },
]

const campaigns = [
  { name: "Diwali Promo SMS",       channel: "SMS",       status: "Completed", sent: "5,000",  delivered: "4,950", date: "Dec 10" },
  { name: "WhatsApp Flash Sale",    channel: "WhatsApp",  status: "Running",   sent: "1,200",  delivered: "1,180", date: "Dec 12" },
  { name: "Newsletter Dec 2024",    channel: "Email",     status: "Scheduled", sent: "—",      delivered: "—",     date: "Dec 15" },
  { name: "OTP Verification Blast", channel: "SMS",       status: "Completed", sent: "10,000", delivered: "9,980", date: "Dec 8" },
]

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="dash-layout">
      {/* Sidebar */}
      <aside className={"dash-sidebar" + (sidebarOpen ? " open" : "")} aria-label="Dashboard navigation">
        <div className="dash-sidebar__brand">
          <img src="/vg-mark.png" alt="VG" className="dash-sidebar__logo" />
          <span className="dash-sidebar__name">VG Panel</span>
        </div>
        <nav className="dash-nav">
          {navItems.map((n) => (
            <a key={n.label} href="#" className={"dash-nav__item" + (n.active ? " active" : "")}>
              <span className="dash-nav__icon">{n.icon}</span>
              <span className="dash-nav__label">{n.label}</span>
            </a>
          ))}
        </nav>
        <div className="dash-sidebar__footer">
          <div className="dash-user">
            <div className="dash-user__avatar">R</div>
            <div className="dash-user__info">
              <strong>Rajesh Kumar</strong>
              <span>Professional Plan</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="dash-main">
        {/* Topbar */}
        <header className="dash-topbar">
          <button className="dash-hamburger" aria-label="Toggle sidebar" onClick={() => setSidebarOpen((o) => !o)}>
            <span /><span /><span />
          </button>
          <h1 className="dash-topbar__title">Dashboard</h1>
          <div className="dash-topbar__right">
            <button className="btn btn--green dash-topbar__btn">New Campaign <ArrowRight /></button>
            <div className="dash-topbar__avatar">R</div>
          </div>
        </header>

        <div className="dash-content">
          {/* Stats */}
          <div className="dash-stats">
            {stats.map((s) => (
              <div key={s.label} className={"dash-stat dash-stat--" + s.color}>
                <div className="dash-stat__top">
                  <span className="dash-stat__icon">{s.icon}</span>
                  <span className="dash-stat__label">{s.label}</span>
                </div>
                <strong className="dash-stat__value">{s.value}</strong>
                <span className="dash-stat__sub">{s.sub}</span>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="dash-chart-wrap">
            <div className="dash-section-header">
              <h2 className="dash-section-title">Message Delivery Overview</h2>
              <select className="dash-select" aria-label="Time range">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>
            <div className="dash-chart">
              {[65, 80, 55, 90, 70, 85, 95].map((h, i) => (
                <div key={i} className="dash-bar-wrap">
                  <div className="dash-bar" style={{ height: h + "%" }} />
                  <span className="dash-bar__label">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Campaigns */}
          <div className="dash-table-wrap">
            <div className="dash-section-header">
              <h2 className="dash-section-title">Recent Campaigns</h2>
              <a href="#" className="dash-link">View All <ArrowRight /></a>
            </div>
            <div className="dash-table-scroll">
              <table className="dash-table" aria-label="Recent campaigns">
                <thead>
                  <tr>
                    <th>Campaign</th><th>Channel</th><th>Status</th><th>Sent</th><th>Delivered</th><th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((c) => (
                    <tr key={c.name}>
                      <td className="dash-table__name">{c.name}</td>
                      <td><span className={"dash-channel dash-channel--" + c.channel.toLowerCase()}>{c.channel}</span></td>
                      <td><span className={"dash-status dash-status--" + c.status.toLowerCase()}>{c.status}</span></td>
                      <td>{c.sent}</td>
                      <td>{c.delivered}</td>
                      <td className="dash-table__date">{c.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
