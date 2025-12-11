import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const govLogo = "https://placehold.co/80x80?text=Gov+Logo";
const erssLogo = "https://placehold.co/80x80?text=ERSS+Logo";
const policeLogo = "https://placehold.co/80x80?text=Police+Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>helpline@telangana.gov.in, mobile:+918712674000</span>
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
          <button className="download-btn">
            <span className="android-icon">🤖</span> Download 112 App
          </button>
        </div>
      </div>

      {/* Middle Branding Section */}
      <div className={`branding-section ${isMenuOpen ? 'open' : ''}`}>
        <div className="brand-left">
          <img src={govLogo} alt="Government of Telangana" className="logo" />
          <h1 className="brand-text">GOVERNMENT OF TELANGANA</h1>
        </div>
        
        <div className="brand-center">
           <img src={erssLogo} alt="ERSS Dial 112" className="center-logo" />
        </div>

        <div className="brand-right">
          <h2 className="brand-text">EMERGENCY RESPONSE SUPPORT SYSTEM</h2>
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
          <li><Link to="/" className="nav-link active" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/features" className="nav-link" onClick={() => setIsMenuOpen(false)}>KEY FEATURES</Link></li>
          <li><Link to="/how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>HOW IT WORKS</Link></li>
          <li><Link to="/request-help" className="nav-link" onClick={() => setIsMenuOpen(false)}>REQUEST HELP</Link></li>
          <li><Link to="/citizen-login" className="nav-link" onClick={() => setIsMenuOpen(false)}>CITIZEN LOGIN</Link></li>
          <li><Link to="/officer-login" className="nav-link" onClick={() => setIsMenuOpen(false)}>OFFICER LOGIN</Link></li>
          <li><Link to="/media" className="nav-link" onClick={() => setIsMenuOpen(false)}>MEDIA GALLERY</Link></li>
          <li><Link to="/success-stories" className="nav-link" onClick={() => setIsMenuOpen(false)}>SUCCESS STORIES</Link></li>
          <li><Link to="/faqs" className="nav-link" onClick={() => setIsMenuOpen(false)}>FAQs</Link></li>
          <li><Link to="/feedback" className="nav-link" onClick={() => setIsMenuOpen(false)}>FEEDBACK</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;