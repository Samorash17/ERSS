import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import '../styles/Footer.css';
import '../styles/copyright.css';
import '../styles/terms.css';
import '../styles/privacy.css';


const Footer = () => {
  const [pageviews, setPageviews] = useState(0)

  useEffect(() => {
    // Animated counter for pageviews
    const targetViews = 140354
    const duration = 2000
    const increment = targetViews / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetViews) {
        setPageviews(targetViews)
        clearInterval(timer)
      } else {
        setPageviews(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-orb footer-orb-1"></div>
        <div className="footer-orb footer-orb-2"></div>
        <div className="footer-orb footer-orb-3"></div>
      </div>

      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/request-help">
                <span className="link-icon">→</span>Request Help
              </Link>
            </li>
            <li>
              <Link to="/citizen-login">
                <span className="link-icon">→</span>Citizen Signup
              </Link>
            </li>
            <li>
              <Link to="/citizen-login">
                <span className="link-icon">→</span>Citizen Signin
              </Link>
            </li>
            <li>
              <Link to="/complaint-status">
                <span className="link-icon">→</span>Complaint Status
              </Link>
            </li>
            <li>
              <Link to="/officer-login">
                <span className="link-icon">→</span>Officer Login
              </Link>
            </li>
            <li>
              <Link to="/download-app">
                <span className="link-icon">→</span>Download 112 India App
              </Link>
            </li>
            <li>
              <Link to="/feedback">
                <span className="link-icon">→</span>Mobile App Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* Additional Links Section */}
        <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-links">
            <li>
              <Link to="/faqs">
                <span className="link-icon">→</span>FAQ
              </Link>
            </li>
            <li>
              <Link to="/telangana-police">
                <span className="link-icon">→</span>Telangana Police
              </Link>
            </li>
            <li>
              <Link to="/success-stories">
                <span className="link-icon">→</span>Success Stories
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="link-icon">→</span>About Us
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="link-icon">→</span>Contact
              </Link>
            </li>
            <li>
              <Link to="/Terms-and-Conditions">
                <span className="link-icon">→</span>Terms & Condition
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy">
                <span className="link-icon">→</span>Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section" data-aos="fade-up" data-aos-delay="300">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="footer-links social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon facebook-icon"></span>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon twitter-icon"></span>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon instagram-icon"></span>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon youtube-icon"></span>
                <span>Youtube</span>
              </a>
            </li>
            <li>
              <a href="mailto:ts112@gov.in">
                <span className="social-icon email-icon"></span>
                <span>ts112@gov.in</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Total Pageviews Section */}
        <div className="footer-section pageviews-section" data-aos="fade-up" data-aos-delay="400">
          <h3 className="footer-title">Total Pageviews</h3>
          <div className="pageview-counter">
            <div className="counter-glow"></div>
            <span className="pageview-number">{pageviews.toLocaleString()}</span>
            <span className="pageview-label">Visitors</span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="copyright">
          <Link to="/Copyright" className="highlight">
            Copyright
          </Link> © 2025 <span className="highlight">Telangana Police</span> All rights reserved
        </div>
      </div>

    </footer>
  )
}

export default Footer
