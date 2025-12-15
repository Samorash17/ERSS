import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import '../styles/Hero.css';
import mapImage from '../assets/pic-hero-1.png';
import policeLogo from '../assets/pic-hero-2.jpg';
import cmImage from '../assets/pic-hero-3_mod.png';
import dgpImage from '../assets/pic-hero-4_mod.png';
import buildingImage from '../assets/pic-hero-5.jpg';
import risingLogo from '../assets/pic-hero-rising.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-container">
      <div className="hero-left">
        <div className="hero-top-logos">
          <img src={mapImage} alt="Telangana Map" className="hero-map" />
          <img src={policeLogo} alt="Telangana Police Logo" className="hero-police-logo" />
        </div>
        
        <div className="hero-text-content">
          <h3 className="hero-subtitle">{t('hero.subtitle')}</h3>
          <h1 className="hero-title">
            <Trans i18nKey="hero.title" />
          </h1>
          <h2 className="hero-section-title">{t('hero.leadership')}</h2>
        </div>

        <div className="hero-leadership">
          <div className="leader-profile">
            <div className="leader-img-wrapper">
              <img src={cmImage} alt={t('hero.cmName')} />
            </div>
            <h4 className="leader-name">{t('hero.cmName')}</h4>
            <p className="leader-title">
              <Trans i18nKey="hero.cmTitle" />
            </p>
          </div>
          <div className="leader-profile">
            <div className="leader-img-wrapper">
              <img src={dgpImage} alt={t('hero.dgpName')} />
            </div>
            <h4 className="leader-name">{t('hero.dgpName')}</h4>
            <p className="leader-title">
              <Trans i18nKey="hero.dgpTitle" />
            </p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-container">
            <img src={buildingImage} alt="Command Control Centre" className="hero-main-image" />
            <img src={risingLogo} alt="Telangana Rising 2047" className="hero-overlay-logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
