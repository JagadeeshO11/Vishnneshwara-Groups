import "./Reports.css"
import { ArrowRight, Chart, Send, MailIcon, ChatIcon, WhatsAppIcon } from "../Icons.jsx"

const summary = [
  { label: "Total Sent",      value: "1,24,320", change: "+12%",  color: "blue",  icon: <Send size={18} /> },
  { label: "Delivered",       value: "1,22,890", change: "+11%",  color: "green", icon: <Chart size={18} /> },
  { label: "Failed",          value: "1,430",    change: "-3%",   color: "red",   icon: <Send size={18} /> },
  { label: "Delivery Rate",   value: "98.8%",    change: "+0.4%", color: "green", icon: <Chart size={18} /> },
]

const channelStats = [
  { channel: "SMS",      icon: <ChatIcon size={20} />,    sent: "80,000",  delivered: "79,200", rate: "99.0%", opens: "—",    clicks: "—" },
  { channel: "WhatsApp", icon: <WhatsAppIcon size={20} />, sent: "24,320",  delivered: "23,890", rate: "98.2%", opens: "72%",  clicks: "18%" },
  { channel: "Email",    icon: <MailIcon size={20} />,    sent: "20,000",  delivered: "19,800", rate: "99.0%", opens: "28%",  clicks: "6%" },
]

export default function Reports() {
  return (
    <div className="rep-page">
      <div className="rep-header">
        <div>
          <h1 className="rep-header__title">Reports & Analytics</h1>
          <p className="rep-header__sub">Track performance across all your messaging channels</p>
        </div>
        <div className="rep-header__actions">
          <select className="dash-select" aria-label="Date range">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 3 months</option>
          </select>
          <button className="btn btn--outline-dark">Export PDF <ArrowRight /></button>
          <button className="btn btn--green">Export Excel <ArrowRight /></button>
        </div>
      </div>

      {/* Summary */}
      <div className="rep-summary">
        {summary.map((s) => (
          <div key={s.label} className={"rep-stat rep-stat--" + s.color}>
            <div className="rep-stat__top">
              <span className="rep-stat__icon">{s.icon}</span>
              <span className={"rep-stat__change rep-stat__change--" + (s.change.startsWith("+") ? "up" : "down")}>{s.change}</span>
            </div>
            <strong className="rep-stat__value">{s.value}</strong>
            <span className="rep-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="rep-chart-wrap">
        <div className="dash-section-header">
          <h2 className="dash-section-title">Delivery Trend</h2>
        </div>
        <div className="rep-chart">
          {[72, 85, 68, 92, 78, 88, 95, 80, 90, 85, 93, 97].map((h, i) => (
            <div key={i} className="dash-bar-wrap">
              <div className="dash-bar" style={{ height: h + "%" }} />
              <span className="dash-bar__label">{["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Channel breakdown */}
      <div className="rep-channels-wrap">
        <h2 className="dash-section-title" style={{marginBottom:"16px"}}>Channel Breakdown</h2>
        <div className="rep-table-scroll">
          <table className="camp-table" aria-label="Channel breakdown">
            <thead>
              <tr><th>Channel</th><th>Sent</th><th>Delivered</th><th>Delivery Rate</th><th>Open Rate</th><th>Click Rate</th></tr>
            </thead>
            <tbody>
              {channelStats.map((c) => (
                <tr key={c.channel}>
                  <td>
                    <div className="rep-channel">
                      <span className={"dash-channel dash-channel--" + c.channel.toLowerCase()}>{c.icon}</span>
                      <span className="rep-channel__name">{c.channel}</span>
                    </div>
                  </td>
                  <td>{c.sent}</td>
                  <td>{c.delivered}</td>
                  <td className="camp-table__rate">{c.rate}</td>
                  <td>{c.opens}</td>
                  <td>{c.clicks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
