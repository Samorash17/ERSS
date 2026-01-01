import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import "../styles/works.css"
import callOperatorImage from "../assets/emergency-call-operator-receiving-phone-call.jpg"
import gpsLocationImage from "../assets/gps-location-tracking-map-pin-icon.jpg"
import emergencyVehiclesImage from "../assets/emergency-vehicles-police-ambulance-fire-dispatch.jpg"

const Works = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRequestHelp = () => {
    navigate('/request-help');
  };

  return (
    <div className="works-container">
      <BackButton />
      <div className="works-background-orbs">
        <div className="works-orb works-orb-1"></div>
        <div className="works-orb works-orb-2"></div>
        <div className="works-orb works-orb-3"></div>
      </div>

      <div className="works-content">
        {/* Left Section - How it Works */}
        <div className="how-it-works-section">
          <h1 className="main-title">
            <Trans i18nKey="works.title" />
          </h1>

          <p className="description">
            <Trans i18nKey="works.description" components={{ span: <span className="emergency-number-inline" /> }} />
          </p>

          <div className="steps-works-list">
            <div className="steps-works" data-step="1">
              <div className="step-image-container">
                <img src={callOperatorImage} alt="Call Reception" className="step-image" />
                <div className="step-number-badge">01</div>
              </div>
              <div className="step-text-content">
                <h3 className="step-title">{t('works.steps.reception.title')}</h3>
                <p className="steps-works-content">
                  {t('works.steps.reception.desc')}
                </p>
              </div>
            </div>

            <div className="steps-works" data-step="2">
              <div className="step-image-container">
                <img src={gpsLocationImage} alt="Location Detection" className="step-image" />
                <div className="step-number-badge">02</div>
              </div>
              <div className="step-text-content">
                <h3 className="step-title">{t('works.steps.location.title')}</h3>
                <p className="steps-works-content">
                 {t('works.steps.location.desc')}
                </p>
              </div>
            </div>

            <div className="steps-works" data-step="3">
              <div className="step-image-container">
                <img src={emergencyVehiclesImage} alt="Dispatch Assistance" className="step-image" />
                <div className="step-number-badge">03</div>
              </div>
              <div className="step-text-content">
                <h3 className="step-title">{t('works.steps.dispatch.title')}</h3>
                <p className="steps-works-content">
                  {t('works.steps.dispatch.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Video and Notices */}
        <div className="video-section">
          <div className="video-header">
            <h2>{t('works.videoHeader')}</h2>
            <div className="video-header-line"></div>
          </div>

          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zCZfvffsTTE?rel=0"
              title="How it Works - Emergency Response System"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="request-help-section" onClick={handleRequestHelp}>
            <div className="request-help-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="request-help-text">{t('works.requestHelp')}</span>
          </div>

          <div className="emergency-notice">
            <div className="notice-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 19H22L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="17" r="1" fill="currentColor" />
              </svg>
            </div>
            <div className="notice-content">
              <strong>{t('works.notice.label')}:</strong> {t('works.notice.text')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
