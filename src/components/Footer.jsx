import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/request-help">Request Help</Link></li>
            <li><Link to="/citizen-login">Citizen Signup</Link></li>
            <li><Link to="/citizen-login">Citizen Signin</Link></li>
            <li><Link to="/complaint-status">Complaint Status</Link></li>
            <li><Link to="/officer-login">Officer Login</Link></li>
            <li><Link to="/download-app">Download 112 India App</Link></li>
            <li><Link to="/feedback">Mobile App Feedback</Link></li>
          </ul>
        </div>

        {/* Additional Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">&nbsp;</h3>
          <ul className="footer-links">
            <li><Link to="/faqs">FAQ</Link></li>
            <li><Link to="/telangana-police">Telangana Police</Link></li>
            <li><Link to="/success-stories">Success Stories</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms & Condition</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="footer-links social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">📘</span> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">🐦</span> Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">📷</span> Instagram
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">📺</span> Youtube
              </a>
            </li>
            <li>
              <a href="mailto:ts112@gov.in">
                <span className="social-icon">✉️</span> ts112@gov.in
              </a>
            </li>
          </ul>
        </div>

        {/* Total Pageviews Section */}
        <div className="footer-section pageviews-section">
          <h3 className="footer-title">Total Pageviews</h3>
          <div className="pageview-counter">
            <span className="pageview-number">140,354</span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="copyright">
          Copyright © 2025 <span className="highlight">Telangana Police</span> All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;