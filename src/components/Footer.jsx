import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import { useTranslation, Trans } from 'react-i18next';
import '../styles/Footer.css';
import instagramIcon from '../assets/instagram-icon.png'
import facebookIcon from '../assets/facebook-icon.png'
import youtubeIcon from '../assets/youtube-icon.png'
import xIcon from '../assets/x-icon.png'
import gmailIcon from '../assets/gmail-icon.png'


const Footer = () => {
  const { t } = useTranslation();
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
          <h3 className="footer-title">{t('footer.quickLinks')}</h3>
          <ul className="footer-links">
            <li>
              <Link to="/request-help">
                <span className="link-icon">→</span>{t('footer.links.requestHelp')}
              </Link>
            </li>
            {/* <li>
              {/* <Link to="/citizen-login">
                <span className="link-icon">→</span>Citizen Signup
              </Link>
            </li>
            <li>
              <Link to="/citizen-login">
                <span className="link-icon">→</span>Citizen Signin
              </Link>
            </li> */} 
            {/* <li>
              <Link to="/complaint-status">
                <span className="link-icon">→</span>Complaint Status
              </Link>
            </li> */}
            <li>
              <Link to="/officer-login">
                <span className="link-icon">→</span>{t('footer.links.officerLogin')}
              </Link>
            </li>
            {/* <li> */}
              {/* <Link to="/download-app">
                <span className="link-icon">→</span>Download 112 India App
              </Link>
            </li>
            <li>
              <Link to="/feedback">
                <span className="link-icon">→</span>Mobile App Feedback
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Additional Links Section */}
        <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
          <h3 className="footer-title">{t('footer.resources')}</h3>
          <ul className="footer-links">
            <li>
              <Link to="/faqs">
                <span className="link-icon">→</span>{t('footer.links.faq')}
              </Link>
            </li>
            <li>
              <Link to="/telangana-police">
                <span className="link-icon">→</span>{t('footer.links.police')}
              </Link>
            </li>
            <li>
              <Link to="/success-stories">
                <span className="link-icon">→</span>{t('footer.links.stories')}
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="link-icon">→</span>{t('footer.links.about')}
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="link-icon">→</span>{t('footer.links.contact')}
              </Link>
            </li>
            <li>
              <Link to="/terms">
                <span className="link-icon">→</span>{t('footer.links.terms')}
              </Link>
            </li>
            <li>
              <Link to="/privacy">
                <span className="link-icon">→</span>{t('footer.links.privacy')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section" data-aos="fade-up" data-aos-delay="300">
          <h3 className="footer-title">{t('footer.followUs')}</h3>
          <ul className="footer-links social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">
                  <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
                </span>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/112Telangana" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">
                  <img src={xIcon} alt="X (Twitter)" className="social-icon-img" />
                </span>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/112telangana?igsh=MTNnOWxheGp0Z3IwMA==" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">
                  <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
                </span>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@112-Telangana" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">
                  <img src={youtubeIcon} alt="YouTube" className="social-icon-img" />
                </span>
                <span>Youtube</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Total Pageviews Section
        <div className="footer-section pageviews-section" data-aos="fade-up" data-aos-delay="400">
          <h3 className="footer-title">Total Pageviews</h3>
          <div className="pageview-counter">
            <div className="counter-glow"></div>
            <span className="pageview-number">{pageviews.toLocaleString()}</span>
            <span className="pageview-label">Visitors</span>
          </div>
        </div> */}
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="copyright">
          <Trans i18nKey="footer.copyright" components={{ span: <span className="highlight" /> }} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
