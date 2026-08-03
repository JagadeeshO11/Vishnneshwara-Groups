import { useState } from "react"
import "./Blog.css"
import { ArrowRight, MailIcon } from "../Icons.jsx"

const categories = ["All", "SMS", "WhatsApp", "Email", "API", "Business Tips", "Case Studies"]

const posts = [
  { id: 1, cat: "SMS",           title: "10 Best Practices for Bulk SMS Campaigns in 2024",          excerpt: "Learn how to maximize delivery rates and engagement with these proven SMS campaign strategies.", date: "Dec 10, 2024", readTime: "5 min read", featured: true },
  { id: 2, cat: "WhatsApp",      title: "How WhatsApp Business API is Transforming Customer Support", excerpt: "Discover how businesses are using WhatsApp API to reduce support costs and improve satisfaction.", date: "Dec 8, 2024",  readTime: "7 min read", featured: false },
  { id: 3, cat: "Email",         title: "Email Deliverability: A Complete Guide for 2024",            excerpt: "Everything you need to know about landing in the inbox and avoiding spam filters.", date: "Dec 5, 2024",  readTime: "9 min read", featured: false },
  { id: 4, cat: "API",           title: "Getting Started with the VG Messaging API",                  excerpt: "A step-by-step tutorial to integrate SMS and WhatsApp into your application in under 30 minutes.", date: "Dec 3, 2024",  readTime: "6 min read", featured: false },
  { id: 5, cat: "Business Tips", title: "How to Build a Multi-Channel Messaging Strategy",            excerpt: "Combine SMS, WhatsApp, and Email for a cohesive customer communication strategy.", date: "Nov 28, 2024", readTime: "8 min read", featured: false },
  { id: 6, cat: "Case Studies",  title: "How RetailCo Increased Sales by 40% with SMS Campaigns",    excerpt: "A real-world case study on how a retail brand used bulk SMS to drive repeat purchases.", date: "Nov 25, 2024", readTime: "4 min read", featured: false },
]

const topics = ["Bulk SMS", "WhatsApp API", "Email Marketing", "OTP Services", "DLT Registration", "Campaign Analytics", "Contact Management", "Message Templates"]

export default function Blog() {
  const [activeCat, setActiveCat] = useState("All")
  const [email, setEmail] = useState("")

  const filtered = activeCat === "All" ? posts : posts.filter((p) => p.cat === activeCat)
  const featured = posts.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured || activeCat !== "All")

  return (
    <>
      {/* Hero */}
      <section className="blog-hero">
        <div className="container blog-hero__inner">
          <span className="badge">INSIGHTS & RESOURCES</span>
          <h1 className="blog-hero__title">The <span className="c-green">VG Blog</span></h1>
          <p className="blog-hero__sub">Tips, guides, and case studies to help you get the most out of your messaging campaigns.</p>
          <div className="blog-search">
            <input type="search" placeholder="Search articles..." aria-label="Search blog articles" className="blog-search__input" />
            <button className="btn btn--green blog-search__btn">Search</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="blog-main">
        <div className="container">
          <div className="blog-cats" role="list">
            {categories.map((c) => (
              <button key={c} role="listitem" className={"blog-cat" + (activeCat === c ? " active" : "")} onClick={() => setActiveCat(c)}>{c}</button>
            ))}
          </div>

          {/* Featured */}
          {activeCat === "All" && featured && (
            <article className="blog-featured">
              <div className="blog-featured__img" aria-hidden="true" />
              <div className="blog-featured__body">
                <span className="blog-cat-tag">{featured.cat}</span>
                <h2 className="blog-featured__title">{featured.title}</h2>
                <p className="blog-featured__excerpt">{featured.excerpt}</p>
                <div className="blog-meta">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <button className="btn btn--green blog-featured__btn">Read Article <ArrowRight /></button>
              </div>
            </article>
          )}

          {/* Grid */}
          <div className="blog-grid">
            {rest.map((p) => (
              <article key={p.id} className="card blog-card">
                <div className="blog-card__img" aria-hidden="true" />
                <div className="blog-card__body">
                  <span className="blog-cat-tag">{p.cat}</span>
                  <h3 className="blog-card__title">{p.title}</h3>
                  <p className="blog-card__excerpt">{p.excerpt}</p>
                  <div className="blog-meta">
                    <span>{p.date}</span><span>·</span><span>{p.readTime}</span>
                  </div>
                  <a href="#" className="blog-card__link">Read More <ArrowRight /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="blog-topics">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow__dash" /> POPULAR TOPICS</p>
          <h2 className="section-title">Browse by <span className="c-green">Topic</span></h2>
          <div className="topics-grid">
            {topics.map((t) => (
              <button key={t} className="topic-pill">{t}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter">
            <span className="newsletter__icon" aria-hidden="true"><MailIcon size={28} /></span>
            <h2 className="newsletter__title">Stay in the Loop</h2>
            <p className="newsletter__text">Get the latest articles, tips, and product updates delivered to your inbox.</p>
            <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="newsletter__input" aria-label="Email for newsletter" required />
              <button type="submit" className="btn btn--green">Subscribe <ArrowRight /></button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
