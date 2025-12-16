import { useTranslation, Trans } from 'react-i18next';
import '../styles/works.css';

const Works = () => {
  const { t } = useTranslation();

  return (
    <div className="works-container">
      <div className="works-content">
        {/* Left Section - How it Works */}
        <div className="how-it-works-section">
          <h1 className="main-title">{t('works.title')}</h1>
          
          <p className="description">
            {t('works.description')}
          </p>

          <div className="steps-works-list">
            <div className="steps-works">
              <span className="steps-works-number">1.</span>
              <div className="steps-works-content">
                <strong>Call Reception :</strong> The operators receives your call and assesses the emergency.
              </div>
            </div>

            <div className="steps-works">
              <span className="steps-works-number">2.</span>
              <div className="steps-works-content">
                <strong>Location Detection:</strong> Your GPS data is shared with the operator to determine 
                your location.
              </div>
            </div>

            <div className="steps-works">
              <span className="steps-works-number">3.</span>
              <div className="steps-works-content">
                <strong>Dispatch Assistance:</strong> The appropriate emergency team( police, fire, 
                ambulance) is dispatched to your location.
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Video and Notices */}
        <div className="video-section">
          <div className="video-header">
            <h2>{t('works.videoHeader')}</h2>
          </div>

          <div className="video-container">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/zCZfvffsTTE"
              title="How it Works - Emergency Response System"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="request-help-section">
            <div className="request-help-icon">⚠️</div>
            <span className="request-help-text">{t('works.requestHelp')}</span>
          </div>

          <div className="emergency-notice">
            <div className="notice-icon">⚠️</div>
            <div className="notice-content">
              <strong>{t('works.notice.label')}:</strong> {t('works.notice.text')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;