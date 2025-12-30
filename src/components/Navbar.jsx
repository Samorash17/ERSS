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
import playStoreIcon from '../assets/playstore-icon.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when sidebar is open
    if (isMobileSidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileSidebarOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false)
    setMobileDropdownOpen(false)
  }

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen)
  }

  return (
    <>
      {/* Mobile Top Header */}
      <div className="mobile-top-header">
        <div className="mobile-header-left">
          <div className="mobile-logo-wrapper">
            <img src={erssLogo} alt={t('navbar.erssTitle')} className="mobile-header-logo" />
            <div className="mobile-logo-pulse"></div>
          </div>
          <div className="mobile-header-text">
            <div className="mobile-header-title">
              Government of Telangana<br />
              Official Portal
            </div>
            <div className="mobile-header-subtitle">
              Emergency Response Support System<br />
              24/7 Emergency Services
            </div>
          </div>
        </div>
        <button 
          className={`floating-hamburger ${isMobileSidebarOpen ? 'open' : ''}`}
          onClick={toggleMobileSidebar}
          aria-label="Toggle mobile menu"
        >
          <span className="floating-hamburger-line"></span>
          <span className="floating-hamburger-line"></span>
          <span className="floating-hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`mobile-sidebar-overlay ${isMobileSidebarOpen ? 'open' : ''}`}
        onClick={closeMobileSidebar}
      ></div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMobileSidebarOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
              onClick={closeMobileSidebar}
            >
              {t('navbar.links.home')}
            </NavLink>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              to="/features"
              className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
              onClick={closeMobileSidebar}
            >
              {t('navbar.links.features')}
            </NavLink>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              to="/how-it-works"
              className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
              onClick={closeMobileSidebar}
            >
              {t('navbar.links.howItWorks')}
            </NavLink>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              to="/request-help"
              className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
              onClick={closeMobileSidebar}
            >
              {t('navbar.links.requestHelp')}
            </NavLink>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              to="/officer-login"
              className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
              onClick={closeMobileSidebar}
            >
              {t('navbar.links.officerLogin')}
            </NavLink>
          </li>
          <li className={`mobile-nav-item mobile-dropdown-container ${mobileDropdownOpen ? 'open' : ''}`}>
            <div className="mobile-nav-link mobile-dropdown-trigger" onClick={toggleMobileDropdown}>
              <span>{t('navbar.links.mediaGallery')}</span>
              <span className="mobile-dropdown-arrow">▼</span>
            </div>
            <div className="mobile-dropdown-menu">
              <NavLink to="/awards" className="mobile-dropdown-item" onClick={closeMobileSidebar}>
                {t('navbar.links.awards')}
              </NavLink>
              <NavLink to="/image-gallery" className="mobile-dropdown-item highlighted" onClick={closeMobileSidebar}>
                {t('navbar.links.imageGallery')}
              </NavLink>
              <NavLink to="/video-gallery" className="mobile-dropdown-item" onClick={closeMobileSidebar}>
                {t('navbar.links.videoGallery')}
              </NavLink>
              <NavLink to="/press-release" className="mobile-dropdown-item" onClick={closeMobileSidebar}>
                {t('navbar.links.pressRelease')}
              </NavLink>
              <NavLink to="/articles" className="mobile-dropdown-item" onClick={closeMobileSidebar}>
                {t('navbar.links.articles')}
              </NavLink>
              <NavLink to="/112-news" className="mobile-dropdown-item" onClick={closeMobileSidebar}>
                {t('navbar.links.news')}
              </NavLink>
            </div>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              to="/success-stories"
              className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
              onClick={closeMobileSidebar}
            >
              {t('navbar.links.successStories')}
            </NavLink>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              to="/faqs"
              className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
              onClick={closeMobileSidebar}
            >
              {t('navbar.links.faqs')}
            </NavLink>
          </li>
        </ul>

        <div className="mobile-sidebar-accessibility">
          <div className="mobile-accessibility-title">Accessibility</div>
          <AccessibilityControls />
        </div>
      </div>

      {/* Desktop Header */}
      <header className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        {/* Top Bar */}
        <div className="top-bar">
          <div className="contact-info-gmail">
            <img src={gmailIcon} alt="Gmail" className="contact-icon-img-gmail" /><span>112telangana@gmail.com</span>
          </div>
          <div className="top-bar-right">
            <AccessibilityControls />
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
            <NavLink to='/image-gallery' className="nav-link dropdown-trigger">
              {t('navbar.links.imageGallery')}
              {/* <span className="dropdown-arrow">▼</span> */}
            </NavLink>
            {/* <div className="dropdown-menu">
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
            </div> */}
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
        </ul>
      </nav>
    </>
  )
}

export default Navbar
