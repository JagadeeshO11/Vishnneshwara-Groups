import { useState, useEffect } from "react"
import "./styles/globals.css"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

import Home           from "./pages/Home.jsx"
import About          from "./pages/About.jsx"
import Services       from "./pages/Services.jsx"
import Features       from "./pages/Features.jsx"
import Pricing        from "./pages/Pricing.jsx"
import Api            from "./pages/Api.jsx"
import Contact        from "./pages/Contact.jsx"
import Blog           from "./pages/Blog.jsx"
import Faq            from "./pages/Faq.jsx"
import Privacy        from "./pages/Privacy.jsx"
import Terms          from "./pages/Terms.jsx"
import Login          from "./pages/Login.jsx"
import Register       from "./pages/Register.jsx"
import ForgotPassword from "./pages/ForgotPassword.jsx"
import Dashboard      from "./pages/Dashboard.jsx"
import Campaigns      from "./pages/Campaigns.jsx"
import Reports        from "./pages/Reports.jsx"
import Profile        from "./pages/Profile.jsx"
import NotFound       from "./pages/NotFound.jsx"
import ComingSoon     from "./pages/ComingSoon.jsx"

const ROUTES = {
  "home":         { page: <Home />,           nav: "Home" },
  "about":        { page: <About />,          nav: "About Us" },
  "services":     { page: <Services />,       nav: "Services" },
  "features":     { page: <Features />,       nav: "Features" },
  "pricing":      { page: <Pricing />,        nav: "Pricing" },
  "api":          { page: <Api />,            nav: "API" },
  "contact":      { page: <Contact />,        nav: "Contact Us" },
  "blog":         { page: <Blog />,           nav: null },
  "faq":          { page: <Faq />,            nav: null },
  "privacy":      { page: <Privacy />,        nav: null },
  "terms":        { page: <Terms />,          nav: null },
  "login":        { page: <Login />,          nav: null, bare: true },
  "register":     { page: <Register />,       nav: null, bare: true },
  "forgot":       { page: <ForgotPassword />, nav: null, bare: true },
  "dashboard":    { page: <Dashboard />,      nav: null, bare: true },
  "campaigns":    { page: <Campaigns />,      nav: null, bare: true },
  "reports":      { page: <Reports />,        nav: null, bare: true },
  "profile":      { page: <Profile />,        nav: null, bare: true },
  "coming-soon":  { page: <ComingSoon />,     nav: null, bare: true },
  "404":          { page: <NotFound />,       nav: null, bare: true },
}

function getPage() {
  return window.location.pathname.replace(/^\//, "") || "home"
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onNav = () => {
      setPage(getPage())
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    window.addEventListener("popstate", onNav)
    return () => window.removeEventListener("popstate", onNav)
  }, [])

  // intercept all <a> clicks for SPA navigation
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a")
      if (!a) return
      const href = a.getAttribute("href")
      if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") || href.startsWith("//")) return
      e.preventDefault()
      const target = "/" + href.replace(/^[\/#+]/, "")
      history.pushState(null, "", target)
      setPage(target.replace("/", "") || "home")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  const route = ROUTES[page] || ROUTES["404"]

  if (route.bare) return route.page

  return (
    <div className="page">
      <Navbar activePage={route.nav} />
      <main>{route.page}</main>
      <Footer />
    </div>
  )
}
