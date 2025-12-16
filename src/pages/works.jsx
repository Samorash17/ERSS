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

          <div className="steps-list">
            <div className="step">
              <span className="step-number">1.</span>
              <div className="step-content">
                <strong><Trans i18nKey="works.steps.reception.title" /> :</strong> {t('works.steps.reception.desc')}
              </div>
            </div>

            <div className="step">
              <span className="step-number">2.</span>
              <div className="step-content">
                <strong><Trans i18nKey="works.steps.location.title" />:</strong> {t('works.steps.location.desc')}
              </div>
            </div>

            <div className="step">
              <span className="step-number">3.</span>
              <div className="step-content">
                <strong><Trans i18nKey="works.steps.dispatch.title" />:</strong> {t('works.steps.dispatch.desc')}
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