import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import '../styles/Navbar.css';
import govLogo from '../assets/logo-nav-1.jpg';
import erssLogo from '../assets/logo-nav-2.png';
import policeLogo from '../assets/logo-nav-3.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>{t('navbar.contact')}</span>
        </div>
        <div className="social-icons">
          {/* Placeholders for social icons */}
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>
        </div>
        <div className="app-download">
          <LanguageSelector />
          <button className="download-btn">
            <span className="android-icon">🤖</span> {t('navbar.downloadApp')}
          </button>
        </div>
      </div>

      {/* Middle Branding Section */}
      <div className={`branding-section ${isMenuOpen ? 'open' : ''}`}>
        <div className="brand-left">
          <img src={govLogo} alt={t('navbar.govTitle')} className="logo" />
          <h1 className="brand-text">{t('navbar.govTitle')}</h1>
        </div>
        
        <div className="brand-center">
           <img src={erssLogo} alt={t('navbar.erssTitle')} className="center-logo" />
        </div>

        <div className="brand-right">
          <h2 className="brand-text">{t('navbar.erssTitle')}</h2>
          <img src={policeLogo} alt="Telangana Police" className="logo" />
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <nav className="main-nav">
        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>HOME</NavLink></li>
          <li><NavLink to="/features" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>KEY FEATURES</NavLink></li>
          <li><NavLink to="/how-it-works" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>HOW IT WORKS</NavLink></li>
          <li><NavLink to="/request-help" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>REQUEST HELP</NavLink></li>
          <li><NavLink to="/citizen-login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>CITIZEN LOGIN</NavLink></li>
          <li><NavLink to="/officer-login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>OFFICER LOGIN</NavLink></li>
          <li><NavLink to="/media" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>MEDIA GALLERY</NavLink></li>
          <li><NavLink to="/success-stories" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>SUCCESS STORIES</NavLink></li>
          <li><NavLink to="/faqs" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>FAQs</NavLink></li>
          <li><NavLink to="/feedback" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>FEEDBACK</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

