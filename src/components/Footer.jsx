import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import '../styles/Footer.css';
import instagramIcon from '../assets/instagram-icon.png'
import facebookIcon from '../assets/facebook-icon.png'
import youtubeIcon from '../assets/youtube-icon.png'
import xIcon from '../assets/x-icon.png'
import '../styles/copyright.css';
import '../styles/terms.css';
import '../styles/privacy.css';


const Footer = () => {
  const { t } = useTranslation();

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
            {/* <li>
              <Link to="/request-help">
                <span className="link-icon">→</span>{t('footer.links.requestHelp')}
              </Link>
            </li> */}
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
            {/* <li>
              <Link to="/officer-login">
                <span className="link-icon">→</span>{t('footer.links.officerLogin')}
              </Link>
            </li> */}
            <li>
               <a href="https://play.google.com/store/apps/details?id=in.cdac.ners.psa.mobile.android.national&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <span className="link-icon">→</span>{t('footer.links.downloadApp')}
              </a>
            </li>
             {/* <li>
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
              <a href="https://www.tspolice.gov.in/jsp/homePage?method=getHomePageElements#" target="_blank" rel="noopener noreferrer">
                <span className="link-icon">→</span>{t('footer.links.police')}
              </a>
            </li>
            {/* <li>
              <Link to="/success-stories">
                <span className="link-icon">→</span>{t('footer.links.stories')}
              </Link>
            </li>
            <li>
              <Link to="/image-gallery">
                <span className="link-icon">→</span>{t('navbar.links.imageGallery')}
              </Link>
            </li> */}
            <li>
              <Link to="/about">
                <span className="link-icon">→</span>{t('footer.links.about')}
              </Link>
            </li>
            {/* <li>
              <Link to="/contact">
                <span className="link-icon">→</span>{t('footer.links.contact')}
              </Link>
            </li> */}
            <li>
              <Link to="/Terms-and-Conditions">
                <span className="link-icon">→</span>{t('footer.links.terms')}
              </Link>
            </li>
            <li>
              <Link to="/Privacy-Policy">
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
                <span>X</span>
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

        {/* Location & Contact Section */}
         <div
        className="footer-section location-section"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h3 className="footer-title">{t('footer.location')}</h3>

        <div className="location-content">

          {/* Desktop Map */}
          {/* <div className="map-container desktop-map">
            <a
              href="https://maps.app.goo.gl/N92U6FUJZEZUvZw7A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
              style={{ display: "block" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.4267!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI2LjAiTiA3OMKwMjUnMzYuMSJF!5e0!3m2!1sen!2sin!4v1735142400000!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{
                  border: 0,
                  borderRadius: "8px",
                  pointerEvents: "none"
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TSICCC Location - Road No. 12, Banjara Hills"
              />
            </a>
          </div> */}
            {/* <div className="contact-details">
              <div className="contact-item">
                <div className="contact-info">
                  <div className="contact-row">
                    <span className="contact-icon">📍</span>
                    <div className="contact-text">
                      <strong>{t('footer.contact.address')}:</strong>
                      <p>{t('footer.contact.addressText')}</p>
                    </div>
                  </div> */}
                  <div className="contact-row">
                    <span className="contact-icon">📞</span>
                    <div className="contact-text">
                      <strong>{t('footer.contact.phone')}:</strong>
                      <p><a href="tel:112">112</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div>
        </div> */}

        {/* Map Section - Separate for mobile layout */}
        {/* <div
        className="footer-section map-section mobile-map"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="map-container">
          <a
            href="https://maps.app.goo.gl/N92U6FUJZEZUvZw7A"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open location in Google Maps"
            style={{ display: "block" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.4267!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI2LjAiTiA3OMKwMjUnMzYuMSJF!5e0!3m2!1sen!2sin!4v1735142400000!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{
                border: 0,
                borderRadius: "8px",
                pointerEvents: "none"
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TSICCC Location - Road No. 12, Banjara Hills"
            />
          </a>
        </div>
      </div> */}
{/* </div> */}

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="copyright">
          <Link to="/Copyright">
            <Trans i18nKey="footer.copyright" components={{ span: <span className="highlight" /> }} />
          </Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer
