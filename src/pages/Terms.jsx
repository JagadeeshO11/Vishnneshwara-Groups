import "./Terms.css"

const sections = [
  { id: "acceptance",    title: "Acceptance of Terms",         content: "By accessing or using the Vishnneshwara Groups platform, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, you may not access or use our services. These terms apply to all users, including browsers, vendors, customers, merchants, and contributors of content." },
  { id: "services",      title: "Description of Services",     content: "Vishnneshwara Groups provides bulk SMS, WhatsApp Business API, and Email broadcast services. We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of services." },
  { id: "account",       title: "Account Registration",        content: "To use our services, you must register for an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account." },
  { id: "usage",         title: "Acceptable Use Policy",       content: "You agree not to use our services to send spam, unsolicited messages, or messages to users who have not opted in. You must comply with all applicable laws including TRAI regulations, DLT requirements, and anti-spam laws. Prohibited uses include sending illegal content, phishing messages, malware, or any content that violates third-party rights." },
  { id: "payment",       title: "Payment Terms",               content: "All fees are due in advance and are non-refundable except as expressly stated in our refund policy. We reserve the right to change our pricing at any time with 30 days notice. Failure to pay may result in suspension or termination of your account. All prices are in Indian Rupees (INR) unless otherwise stated." },
  { id: "ip",            title: "Intellectual Property",       content: "The Vishnneshwara Groups platform, including all software, content, and trademarks, is owned by us and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use our services for your internal business purposes only. You may not copy, modify, or distribute our platform." },
  { id: "privacy",       title: "Privacy",                     content: "Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of your information as described in our Privacy Policy." },
  { id: "liability",     title: "Limitation of Liability",     content: "To the maximum extent permitted by law, Vishnneshwara Groups shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill. Our total liability for any claim arising from these terms shall not exceed the amount you paid us in the 3 months preceding the claim." },
  { id: "termination",   title: "Termination",                 content: "We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the services will immediately cease. All provisions that should survive termination shall survive." },
  { id: "governing",     title: "Governing Law",               content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India. You waive any objection to the laying of venue of any such proceeding in India." },
  { id: "contact",       title: "Contact Information",         content: "If you have any questions about these Terms and Conditions, please contact us at: legal@vishnneshwaragroups.com or write to our registered office address in India." },
]

export default function Terms() {
  return (
    <>
      <section className="legal-hero">
        <div className="container legal-hero__inner">
          <span className="badge">LEGAL</span>
          <h1 className="legal-hero__title">Terms & <span className="c-green">Conditions</span></h1>
          <p className="legal-hero__sub">Last updated: December 2024</p>
          <p className="legal-hero__desc">Please read these Terms and Conditions carefully before using the Vishnneshwara Groups platform and services.</p>
        </div>
      </section>

      <section className="legal-main">
        <div className="container legal-main__inner">
          <nav className="legal-sidebar" aria-label="Terms sections">
            <p className="legal-sidebar__heading">Contents</p>
            {sections.map((s, i) => (
              <a key={s.id} href={"#" + s.id} className="legal-sidebar__link">
                <span className="legal-sidebar__num">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </a>
            ))}
          </nav>

          <article className="legal-content">
            <p className="legal-intro">These Terms and Conditions govern your use of the Vishnneshwara Groups platform. By using our services, you agree to these terms. Please read them carefully.</p>
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
