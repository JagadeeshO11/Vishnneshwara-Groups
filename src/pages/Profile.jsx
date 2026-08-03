import { useState } from "react"
import "./Profile.css"
import { ArrowRight, Shield, Bolt } from "../Icons.jsx"

const tabs = ["Personal", "Company", "Password", "API Keys", "Notifications", "Security"]

export default function Profile() {
  const [tab, setTab] = useState("Personal")
  const [form, setForm] = useState({ name: "Rajesh Kumar", email: "rajesh@example.com", phone: "+91 XXXXXXXXXX", company: "My Company", website: "", plan: "Professional" })
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="prof-page">
      <div className="prof-header">
        <h1 className="prof-header__title">Profile Settings</h1>
        <p className="prof-header__sub">Manage your account details and preferences</p>
      </div>

      <div className="prof-layout">
        {/* Sidebar */}
        <nav className="prof-sidebar" aria-label="Settings sections">
          {tabs.map((t) => (
            <button key={t} className={"prof-sidebar__item" + (tab === t ? " active" : "")} onClick={() => setTab(t)}>{t}</button>
          ))}
        </nav>

        {/* Content */}
        <div className="prof-content">
          {tab === "Personal" && (
            <div className="prof-section">
              <h2 className="prof-section__title">Personal Details</h2>
              <div className="prof-avatar-row">
                <div className="prof-avatar">R</div>
                <div>
                  <button className="btn btn--outline-dark prof-avatar-btn">Change Photo</button>
                  <p className="prof-avatar-hint">JPG, PNG up to 2MB</p>
                </div>
              </div>
              <form className="prof-form" onSubmit={(e) => e.preventDefault()}>
                <div className="prof-form__row">
                  <div className="auth-field"><label>Full Name</label><input name="name" value={form.name} onChange={change} /></div>
                  <div className="auth-field"><label>Email Address</label><input name="email" type="email" value={form.email} onChange={change} /></div>
                </div>
                <div className="prof-form__row">
                  <div className="auth-field"><label>Phone Number</label><input name="phone" value={form.phone} onChange={change} /></div>
                  <div className="auth-field"><label>Current Plan</label><input value={form.plan} readOnly className="prof-readonly" /></div>
                </div>
                <button type="submit" className="btn btn--green">Save Changes <ArrowRight /></button>
              </form>
            </div>
          )}

          {tab === "Company" && (
            <div className="prof-section">
              <h2 className="prof-section__title">Company Details</h2>
              <form className="prof-form" onSubmit={(e) => e.preventDefault()}>
                <div className="auth-field"><label>Company Name</label><input name="company" value={form.company} onChange={change} /></div>
                <div className="auth-field"><label>Website</label><input name="website" placeholder="https://yourcompany.com" value={form.website} onChange={change} /></div>
                <button type="submit" className="btn btn--green">Save Changes <ArrowRight /></button>
              </form>
            </div>
          )}

          {tab === "Password" && (
            <div className="prof-section">
              <h2 className="prof-section__title">Change Password</h2>
              <form className="prof-form" onSubmit={(e) => e.preventDefault()}>
                <div className="auth-field"><label>Current Password</label><input type="password" placeholder="Enter current password" /></div>
                <div className="auth-field"><label>New Password</label><input type="password" placeholder="Enter new password" /></div>
                <div className="auth-field"><label>Confirm New Password</label><input type="password" placeholder="Confirm new password" /></div>
                <button type="submit" className="btn btn--green">Update Password <ArrowRight /></button>
              </form>
            </div>
          )}

          {tab === "API Keys" && (
            <div className="prof-section">
              <h2 className="prof-section__title">API Keys</h2>
              <p className="prof-section__desc">Use these keys to authenticate API requests. Keep them secret.</p>
              <div className="api-key-card">
                <div className="api-key-card__top">
                  <span className="api-key-card__label">Live API Key</span>
                  <span className="dash-status dash-status--completed">Active</span>
                </div>
                <div className="api-key-card__key">
                  <code>vg_live_••••••••••••••••••••••••••••••••</code>
                  <button className="btn btn--outline-dark api-key-card__copy">Copy</button>
                </div>
              </div>
              <button className="btn btn--outline-dark" style={{marginTop:"16px"}}>Generate New Key <ArrowRight /></button>
            </div>
          )}

          {tab === "Notifications" && (
            <div className="prof-section">
              <h2 className="prof-section__title">Notification Preferences</h2>
              <div className="notif-list">
                {["Campaign completion alerts", "Low credit warnings", "Delivery failure alerts", "Weekly performance reports", "Product updates & news", "Billing reminders"].map((n) => (
                  <label key={n} className="notif-item">
                    <span className="notif-item__label">{n}</span>
                    <input type="checkbox" defaultChecked className="notif-toggle" />
                  </label>
                ))}
              </div>
              <button className="btn btn--green" style={{marginTop:"24px"}}>Save Preferences <ArrowRight /></button>
            </div>
          )}

          {tab === "Security" && (
            <div className="prof-section">
              <h2 className="prof-section__title">Security Settings</h2>
              <div className="security-items">
                <div className="security-item">
                  <span className="security-item__icon"><Shield size={20} /></span>
                  <div className="security-item__body">
                    <h3>Two-Factor Authentication</h3>
                    <p>Add an extra layer of security to your account</p>
                  </div>
                  <button className="btn btn--green">Enable</button>
                </div>
                <div className="security-item">
                  <span className="security-item__icon"><Bolt size={20} /></span>
                  <div className="security-item__body">
                    <h3>Active Sessions</h3>
                    <p>Manage devices where you're logged in</p>
                  </div>
                  <button className="btn btn--outline-dark">View All</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
