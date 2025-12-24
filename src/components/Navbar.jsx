import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';
import AccessibilityControls from './AccessibilityControls';
import govLogo from '../assets/gov-logo.jpeg';
import erssLogo from '../assets/logo-dial-112.jpg';
import policeLogo from '../assets/tg-police-logo.jpg';
import instagramIcon from '../assets/instagram-icon.png'
import facebookIcon from '../assets/facebook-icon.png'
import youtubeIcon from '../assets/youtube-icon.png'
import xIcon from '../assets/x-icon.png'
import gmailIcon from '../assets/gmail-icon.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation();

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
    <>
    <header className={`header-container ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <img src={gmailIcon} alt="Gmail" className="contact-icon-img" />
          <span>112telangana@gmail.com</span>
        </div>
        <div className="social-icons">
          <a href="#" className="icon facebook" aria-label="Facebook">
            <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
          </a>
          <a href="https://x.com/112Telangana" className="icon twitter" aria-label="Twitter">
            <img src={xIcon} alt="X (Twitter)" className="social-icon-img" />
          </a>
          <a href="https://www.youtube.com/@112-Telangana" className="icon youtube" aria-label="YouTube">
            <img src={youtubeIcon} alt="YouTube" className="social-icon-img" />
          </a>
          <a href="https://www.instagram.com/112telangana?igsh=MTNnOWxheGp0Z3IwMA==" className="icon instagram" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
          </a>
        </div>
        <div className="top-bar-right">
          <AccessibilityControls />
          <div className="app-download">
            <button className="download-btn">
              <span className="android-icon">📱</span> {t('navbar.downloadApp')}
            </button>
          </div>
        </div>
      </div>

      {/* Middle Branding Section */}
      <div className={`branding-section ${isMenuOpen ? "open" : ""}`}>
        <div className="brand-left">
          <img src={govLogo} alt={t('navbar.govTitle')} className="logo" />
          <div className="brand-text-wrapper">
            <h1 className="brand-text">{t('navbar.govTitle')}</h1>
            <div className="brand-subtitle">{t('navbar.govSubtitle')}</div>
          </div>
        </div>

        <div className="brand-center">
          <img src={erssLogo} alt={t('navbar.erssTitle')} className="center-logo" />
          <div className="emergency-pulse"></div>
        </div>

        <div className="brand-right">
          <div className="brand-text-wrapper">
            <h2 className="brand-text">{t('navbar.erssTitle')}</h2>
            <div className="brand-subtitle">{t('navbar.erssSubtitle')}</div>
          </div>
          <img src={policeLogo} alt="Telangana Police" className="logo" />
        </div>
      </div>

      </header>

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
              {t('navbar.links.home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/features"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.links.features')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.links.howItWorks')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/request-help"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.links.requestHelp')}
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/citizen-login"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.links.citizenLogin')}
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/officer-login"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.links.officerLogin')}
            </NavLink>
          </li>
          <li className="dropdown-container">
            <span className="nav-link dropdown-trigger">
              {t('navbar.links.mediaGallery')}
              <span className="dropdown-arrow">▼</span>
            </span>
            <div className="dropdown-menu">
              <NavLink to="/awards" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                {t('navbar.links.awards')}
              </NavLink>

              <NavLink to="/image-gallery" className="dropdown-item highlighted" onClick={() => setIsMenuOpen(false)}>
                {t('navbar.links.imageGallery')}
              </NavLink>
              <NavLink to="/video-gallery" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                 {t('navbar.links.videoGallery')}
              </NavLink>
              <NavLink to="/press-release" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                {t('navbar.links.pressRelease')}
              </NavLink>
              <NavLink to="/articles" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                {t('navbar.links.articles')}
              </NavLink>
              <NavLink to="/112-news" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                {t('navbar.links.news')}
              </NavLink>

            </div>
          </li>
          <li>
            <NavLink
              to="/success-stories"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.links.successStories')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.links.faqs')}
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/feedback"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.links.feedback')}
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
