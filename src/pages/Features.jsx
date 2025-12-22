import React from "react";
import "../styles/Features.css"
import quickRescueImage from "../assets/quick-rescue.jpg"
import gpsLocationImage from "../assets/gps-location-tracking-map-pin-icon.jpg"
import multiTranslationImage from "../assets/multi-translation.jpg"
import availability from "../assets/24-by-7.jpg"
import multiService from "../assets/multi-service.jpg"
import advancedIvrImage from "../assets/advanced.png"
import gps from "../assets/GPS.png"
import vehicletracking from "../assets/vehicletracking.png"
import forensic from "../assets/forensic.png"
import drone from "../assets/drone.png"
import ai from "../assets/AI.png"

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
          <div className="feature-card" style={{ "--delay": "0.1s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={multiService} alt="112 Emergency Services" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">{t('features.items.oneNumber.title')}</h3>
            <p className="feature-description">
              {t('features.items.oneNumber.desc')}
            </p>
          </div>

          {/* Feature 2 - Quick Response */}
          <div className="feature-card" style={{ "--delay": "0.2s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={quickRescueImage} alt="Quick Response Time" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">{t('features.items.quickResponse.title')}</h3>
            <p className="feature-description">
              {t('features.items.quickResponse.desc')}
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

          {/* Feature 4 - 24/7 Availability */}
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
          </div>

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
            <h3 className="feature-title">Advanced IVR Filtering</h3>
            <p className="feature-description">
              ERSS uses an intelligent Interactive Voice Response (IVR) system to quickly filter and prioritize emergency calls, ensuring critical cases are routed to the right responders without delay.
            </p>
          </div>

          <div className="feature-card" style={{ "--delay": "0.7s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={ai} alt="Artificial Intelligence" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">Artificial Intelligence</h3>
            <p className="feature-description">
              By leveraging Artificial Intelligence, ERSS analyzes incoming data to assess emergency severity, recommend actions, and support faster, smarter decision-making. 
            </p>
          </div>

          <div className="feature-card" style={{ "--delay": "0.8s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={drone} alt="Drone Patrolling & Surveillance" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">Drone Patrolling & Surveillance</h3>
            <p className="feature-description">
              Autonomous drone patrolling enables real-time aerial monitoring of emergency locations, helping authorities assess situations quickly and respond more effectively. 
            </p>
          </div>

          <div className="feature-card" style={{ "--delay": "0.9s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={gps} alt="Advanced IVR Filtering" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">Advanced Location Tracking System</h3>
            <p className="feature-description">
              An enhanced location detection system provides precise, real-time tracking of caller and incidents, ensuring accurate navigation and faster emergency response. 
            </p>
          </div>

          <div className="feature-card" style={{ "--delay": "1.0s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={vehicletracking} alt="Active Vehicle Tracking" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">Active Vehicle Tracking</h3>
            <p className="feature-description">
              ERSS enables real-time tracking of emergency vehicles, allowing control centers to monitor movement, optimize routes, and ensure the fastest possible response to incidents. 
            </p>
          </div>

          <div className="feature-card" style={{ "--delay": "1.1s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={forensic} alt="Forensic Desk (Live Video Assistance)" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">Forensic Desk (Live Video Assistance)</h3>
            <p className="feature-description">
              The Forensic Desk feature enables real-time video communication between victims, field officers, and forensic experts. Through secure video calls, experts can visually assess the situation, guide immediate actions, and help collect critical evidence during emergencies. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
