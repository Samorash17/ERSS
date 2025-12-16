import React from "react";
import "../styles/Features.css"
import quickRescueImage from "../assets/quick-rescue.jpg"
import gpsLocationImage from "../assets/gps-location-tracking-map-pin-icon.jpg"
import multiTranslationImage from "../assets/multi-translation.jpg"
import availability from "../assets/24-by-7.jpg"
import multiService from "../assets/multi-service.jpg"

function Features() {
  return (
    <div className="features-section">
      {/* Background animated orbs */}
      <div className="features-orb features-orb-1"></div>
      <div className="features-orb features-orb-2"></div>
      <div className="features-orb features-orb-3"></div>

      <div className="features-container">
        <h1 className="features-title">Key Features of Dial 112 in Telangana</h1>
        <p className="features-subtitle">
          Advanced emergency response system powered by technology and dedicated teams
        </p>

        <div className="features-grid">
          {/* Feature 1 - One Number for All */}
          <div className="feature-card" style={{ "--delay": "0.1s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={multiService} alt="112 Emergency Services" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">One Number for All Emergencies</h3>
            <p className="feature-description">
              Whether it's a medical emergency, fire, law enforcement, or a road accident, you can dial 112 to reach the
              relevant emergency services instantly.
            </p>
          </div>

          {/* Feature 2 - Quick Response */}
          <div className="feature-card" style={{ "--delay": "0.2s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={quickRescueImage} alt="Quick Response Time" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">Quick Response</h3>
            <p className="feature-description">
              The system quickly connects callers to the appropriate response teams, reducing delays in crucial
              situations.
            </p>
          </div>

          {/* Feature 3 - Geolocation */}
          <div className="feature-card" style={{ "--delay": "0.3s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={gpsLocationImage} alt="GPS Geolocation Technology" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">Geolocation Technology</h3>
            <p className="feature-description">
              Uses GPS and mapping technology to pinpoint your location accurately for faster assistance.
            </p>
          </div>

          {/* Feature 4 - 24/7 Availability */}
          <div className="feature-card" style={{ "--delay": "0.4s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={availability} alt="24/7 Availability" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">24/7 Availability</h3>
            <p className="feature-description">
              Help is available at all times — day or night — with dedicated teams on standby.
            </p>
          </div>

          {/* Feature 5 - Multi-Language Support */}
          <div className="feature-card" style={{ "--delay": "0.5s" }}>
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <img src={multiTranslationImage} alt="Multi-Language Support" className="feature-icon-img" />
              </div>
            </div>
            <h3 className="feature-title">Multi-Language Support</h3>
            <p className="feature-description">
              Available in multiple languages to ensure accessibility for all citizens of Telangana.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
