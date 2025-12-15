import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import '../styles/Navbar.css';

const govLogo = "https://placehold.co/80x80?text=Gov+Logo";
const erssLogo = "https://placehold.co/80x80?text=ERSS+Logo";
const policeLogo = "https://placehold.co/80x80?text=Police+Logo";

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
          <li><Link to="/" className="nav-link active" onClick={() => setIsMenuOpen(false)}>{t('navbar.links.home')}</Link></li>
          <li><Link to="/features" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navbar.links.features')}</Link></li>
          <li><Link to="/how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navbar.links.howItWorks')}</Link></li>
          <li><Link to="/request-help" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navbar.links.requestHelp')}</Link></li>
          <li><Link to="/citizen-login" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navbar.links.citizenLogin')}</Link></li>
          <li><Link to="/officer-login" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navbar.links.officerLogin')}</Link></li>
          <li><Link to="/media" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navbar.links.media')}</Link></li>
          <li><Link to="/success-stories" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navbar.links.stories')}</Link></li>
          <li><Link to="/faqs" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navbar.links.faqs')}</Link></li>
          <li><Link to="/feedback" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navbar.links.feedback')}</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
