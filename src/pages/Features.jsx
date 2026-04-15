import React from "react";
import "../styles/Features.css"
import quickRescueImage from "../assets/quick-rescue.jpg"
import gpsLocationImage from "../assets/gps-location-tracking-map-pin-icon.jpg"
import multiTranslationImage from "../assets/multi-translation.jpg"
import availability from "../assets/24-7.png"
import multiService from "../assets/multi-service.png"
import advancedIvrImage from "../assets/advanced.png"
import ai from "../assets/AI.png"
import drone from "../assets/drone.png"

import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();

  return (
    <div className="features-section">
      {/* Background animated orbs */}
      <div className="features-orb features-orb-1"></div>
      <div className="features-orb features-orb-2"></div>
      <div className="features-orb features-orb-3"></div>

      <div className="features-container">
        <h1 className="features-title">{t('features.heading')}</h1>
        <p className="features-subtitle">
          {t('features.subtitle', 'Advanced emergency response system powered by technology and dedicated teams')}
        </p>

        <div className="features-grid">
          {/* Feature 1 - One Number for All */}
          {/* <div className="feature-card" style={{ "--delay": "0.1s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={multiService} alt="112 Emergency Services" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">{t('features.items.oneNumber.title')}</h3>
            <p className="feature-description">
              {t('features.items.oneNumber.desc')}
            </p>
          </div> */}

          {/* Feature 2 - Quick Response */}
          <div className="feature-card" style={{ "--delay": "0.2s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={quickRescueImage} alt="Quick Response Time" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">{t('features.items.unifiedEmergencyResponse.title')}</h3>
            <p className="feature-description">
              {t('features.items.unifiedEmergencyResponse.desc')}
            </p>
          </div>

          {/* Feature 3 - Geolocation */}
          <div className="feature-card" style={{ "--delay": "0.3s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={gpsLocationImage} alt="GPS Geolocation Technology" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">{t('features.items.geolocation.title')}</h3>
            <p className="feature-description">
              {t('features.items.geolocation.desc')}
            </p>
          </div>

          {/* Feature 4 - 24/7 Availability
          <div className="feature-card" style={{ "--delay": "0.4s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={availability} alt="24/7 Availability" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">{t('features.items.availability.title')}</h3>
            <p className="feature-description">
              {t('features.items.availability.desc')}
            </p>
          </div> */}

          {/* Feature 5 - Multi-Language Support */}
          <div className="feature-card" style={{ "--delay": "0.5s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={multiTranslationImage} alt="Multi-Language Support" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">{t('features.items.multiLanguage.title')}</h3>
            <p className="feature-description">
              {t('features.items.multiLanguage.desc')}
            </p>
          </div>

          <div className="feature-card" style={{ "--delay": "0.6s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={advancedIvrImage} alt="Advanced IVR Filtering" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">{t('features.items.advancedIvr.title')}</h3>
            <p className="feature-description">
              {t('features.items.advancedIvr.desc')}
            </p>
          </div>

          <div className="feature-card" style={{ "--delay": "0.7s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={ai} alt="Artificial Intelligence" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">{t('features.items.artificialIntelligence.title')}</h3>
            <p className="feature-description">
              {t('features.items.artificialIntelligence.desc')}
            </p>
          </div>

          <div className="feature-card" style={{ "--delay": "0.8s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={drone} alt="Drone Patrolling & Surveillance" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">{t('features.items.dronePatrolling.title')}</h3>
            <p className="feature-description">
              {t('features.items.dronePatrolling.desc')}
            </p>
          </div>
</div>
          </div>
    </div>
  )
}

export default Features
