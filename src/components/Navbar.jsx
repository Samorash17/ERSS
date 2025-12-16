import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import AccessibilityControls from './AccessibilityControls';
import govLogo from '../assets/logo-nav-1.jpg';
import erssLogo from '../assets/logo-nav-2.png';
import policeLogo from '../assets/logo-nav-3.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`header-container ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span className="contact-icon">📧</span>
          <span>helpline@telangana.gov.in</span>
          <span className="divider">|</span>
          <span className="contact-icon">📱</span>
          <span>+91 8712674000</span>
        </div>
        <div className="social-icons">
          <a href="#" className="icon facebook" aria-label="Facebook">
            f
          </a>
          <a href="#" className="icon twitter" aria-label="Twitter">
            𝕏
          </a>
          <a href="#" className="icon youtube" aria-label="YouTube">
            ▶
          </a>
          <a href="#" className="icon instagram" aria-label="Instagram">
            📷
          </a>
          <a href="#" className="icon linkedin" aria-label="LinkedIn">
            in
          </a>
        </div>
        <div className="top-bar-right">
          <AccessibilityControls />
          <div className="app-download">
            <button className="download-btn">
              <span className="android-icon">📱</span> Download 112 App
            </button>
          </div>
        </div>
      </div>

      {/* Middle Branding Section */}
      <div className={`branding-section ${isMenuOpen ? "open" : ""}`}>
        <div className="brand-left">
          <img src={govLogo} alt="Government of Telangana" className="logo" />
          <div className="brand-text-wrapper">
            <h1 className="brand-text">GOVERNMENT OF TELANGANA</h1>
            <div className="brand-subtitle">Official Portal</div>
          </div>
        </div>

        <div className="brand-center">
          <img src={erssLogo} alt="ERSS Dial 112" className="center-logo" />
          <div className="emergency-pulse"></div>
        </div>

        <div className="brand-right">
          <div className="brand-text-wrapper">
            <h2 className="brand-text">EMERGENCY RESPONSE SUPPORT SYSTEM</h2>
            <div className="brand-subtitle">24/7 Emergency Services</div>
          </div>
          <img src={policeLogo} alt="Telangana Police" className="logo" />
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <nav className="main-nav">
        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/features"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              KEY FEATURES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              HOW IT WORKS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/request-help"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              REQUEST HELP
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/citizen-login"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              CITIZEN LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/officer-login"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              OFFICER LOGIN
            </NavLink>
          </li>
          <li className="dropdown-container">
            <span className="nav-link dropdown-trigger">
              MEDIA GALLERY
              <span className="dropdown-arrow">▼</span>
            </span>
            <div className="dropdown-menu">
              <NavLink to="/awards" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Awards and Recognition
              </NavLink>

              <NavLink to="/image-gallery" className="dropdown-item highlighted" onClick={() => setIsMenuOpen(false)}>
                Image Gallery
              </NavLink>
              <NavLink to="/video-gallery" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Video Gallery
              </NavLink>
              <NavLink to="/press-release" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Press Release
              </NavLink>
              <NavLink to="/articles" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                Articles
              </NavLink>
              <NavLink to="/112-news" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                112 News
              </NavLink>

            </div>
          </li>
          <li>
            <NavLink
              to="/success-stories"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              SUCCESS STORIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              FEEDBACK
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
