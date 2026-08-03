import "./NotFound.css"
import { ArrowRight } from "../Icons.jsx"

export default function NotFound() {
  return (
    <div className="nf-page">
      <div className="nf-inner">
        <div className="nf-code" aria-hidden="true">404</div>
        <img src="/vg-mark.png" alt="" className="nf-logo" aria-hidden="true" />
        <h1 className="nf-title">Page Not Found</h1>
        <p className="nf-sub">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
        <div className="nf-btns">
          <a href="#home" className="btn btn--green">Go to Home <ArrowRight /></a>
          <a href="#contact" className="btn btn--outline-dark">Contact Support <ArrowRight /></a>
        </div>
      </div>
    </div>
  )
}
