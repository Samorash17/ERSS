import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import '../styles/HelplineSection.css';
import agentImage from '../assets/helpline-homepage.png';
import icon247 from '../assets/helpline-icon.png';

const HelplineSection = () => {
  const { t } = useTranslation();

  return (
    <section className="helpline-container">
      <div className="helpline-banner">
        <h4 className="helpline-banner-subtitle">{t('helpline.bannerSubtitle')}</h4>
        <h2 className="helpline-banner-title">
          <Trans i18nKey="helpline.bannerTitle" />
        </h2>
        <p className="helpline-banner-text">{t('helpline.bannerText')}</p>
      </div>

      <div className="helpline-content">
        <div className="helpline-image-wrapper">
          <img src={agentImage} alt="Helpline Agent" className="agent-image" />
          <div className="icon-wrapper">
             <img src={icon247} alt={t('helpline.bannerSubtitle')} className="icon-247" />
          </div>
        </div>

        <div className="helpline-text-wrapper">
          <h3 className="helpline-heading">{t('helpline.heading')}</h3>
          <h4 className="helpline-subheading">{t('helpline.subheading')}</h4>
          
          <p className="helpline-paragraph">
             <Trans i18nKey="helpline.paragraph1" components={{ strong: <strong /> }} />
          </p>
          
          <p className="helpline-paragraph">
             {t('helpline.paragraph2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelplineSection;
