import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/Features.css";

function Features() {
  const { t } = useTranslation();

  return (
    <div className="features-wrapper">
      <h1 className="features-heading">{t('features.heading')}</h1>

      <div className="features-list">
        <div className="feature-item">
          <h3>{t('features.items.oneNumber.title')}</h3>
          <p>{t('features.items.oneNumber.desc')}</p>
        </div>

        <div className="feature-item">
          <h3>{t('features.items.quickResponse.title')}</h3>
          <p>{t('features.items.quickResponse.desc')}</p>
        </div>

        <div className="feature-item">
          <h3>{t('features.items.geolocation.title')}</h3>
          <p>{t('features.items.geolocation.desc')}</p>
        </div>

        <div className="feature-item">
          <h3>{t('features.items.availability.title')}</h3>
          <p>{t('features.items.availability.desc')}</p>
        </div>

        <div className="feature-item">
          <h3>{t('features.items.multiLanguage.title')}</h3>
          <p>{t('features.items.multiLanguage.desc')}</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
