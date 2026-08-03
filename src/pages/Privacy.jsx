import "./Privacy.css"

const sections = [
  { id: "collection",  title: "Information We Collect",    content: "We collect information you provide directly to us, such as when you create an account, subscribe to a plan, or contact support. This includes your name, email address, phone number, company name, and billing information. We also automatically collect usage data, log files, device information, and cookies when you use our platform." },
  { id: "use",         title: "How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services; process transactions and send related information; send promotional communications (with your consent); respond to comments and questions; monitor and analyze usage patterns; detect and prevent fraudulent transactions; and comply with legal obligations." },
  { id: "sharing",     title: "Information Sharing",        content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or servicing you, as long as those parties agree to keep this information confidential. We may also disclose information when required by law." },
  { id: "security",    title: "Data Security",              content: "We implement industry-standard security measures including SSL/TLS encryption, data encryption at rest, regular security audits, and access controls to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security." },
  { id: "cookies",     title: "Cookies & Tracking",         content: "We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our service may not function properly." },
  { id: "retention",   title: "Data Retention",             content: "We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data at any time by contacting our support team. We will respond to deletion requests within 30 days." },
  { id: "rights",      title: "Your Rights",                content: "You have the right to access, update, or delete your personal information at any time. You may also opt out of marketing communications, request data portability, and lodge a complaint with a supervisory authority. To exercise these rights, please contact us at privacy@vishnneshwaragroups.com." },
  { id: "children",    title: "Children's Privacy",         content: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information." },
  { id: "changes",     title: "Changes to This Policy",     content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date. We encourage you to review this policy periodically for any changes." },
  { id: "contact",     title: "Contact Us",                 content: "If you have any questions about this Privacy Policy, please contact us at: privacy@vishnneshwaragroups.com or write to us at our registered office address in India." },
]

export default function Privacy() {
  return (
    <>
      <section className="legal-hero">
        <div className="container legal-hero__inner">
          <span className="badge">LEGAL</span>
          <h1 className="legal-hero__title">Privacy <span className="c-green">Policy</span></h1>
          <p className="legal-hero__sub">Last updated: December 2024</p>
          <p className="legal-hero__desc">This Privacy Policy describes how Vishnneshwara Groups collects, uses, and shares information about you when you use our services.</p>
        </div>
      </section>

      <section className="legal-main">
        <div className="container legal-main__inner">
          {/* Sticky Sidebar */}
          <nav className="legal-sidebar" aria-label="Privacy policy sections">
            <p className="legal-sidebar__heading">Contents</p>
            {sections.map((s, i) => (
              <a key={s.id} href={"#" + s.id} className="legal-sidebar__link">
                <span className="legal-sidebar__num">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </a>
            ))}
          </nav>

          {/* Content */}
          <article className="legal-content">
            <p className="legal-intro">At Vishnneshwara Groups, we are committed to protecting your privacy and ensuring the security of your personal information. Please read this policy carefully to understand our practices.</p>
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">{i + 1}.</span> {s.title}</h2>
                <p className="legal-section__body">{s.content}</p>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
