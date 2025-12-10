import React from 'react';
import '../styles/Hero.css';

// Placeholders for images - replace these with actual assets later
const mapImage = "https://placehold.co/150x150?text=Map";
const policeLogo = "https://placehold.co/150x150?text=Police+Logo";
const cmImage = "https://placehold.co/100x100?text=CM";
const dgpImage = "https://placehold.co/100x100?text=DGP";
const buildingImage = "https://placehold.co/600x400?text=Building";
const risingLogo = "https://placehold.co/80x80?text=Rising+2047";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <div className="hero-top-logos">
          <img src={mapImage} alt="Telangana Map" className="hero-map" />
          <img src={policeLogo} alt="Telangana Police Logo" className="hero-police-logo" />
        </div>
        
        <div className="hero-text-content">
          <h3 className="hero-subtitle">TELANGANA 112</h3>
          <h1 className="hero-title">
            EMERGENCY RESPONSE SUPPORT SYSTEM<br />
            TELANGANA POLICE<br />
            WELCOMES YOU
          </h1>
          <h2 className="hero-section-title">OUR LEADERSHIP</h2>
        </div>

        <div className="hero-leadership">
          <div className="leader-profile">
            <div className="leader-img-wrapper">
              <img src={cmImage} alt="A. Revanth Reddy" />
            </div>
            <h4 className="leader-name">A. REVANTH REDDY</h4>
            <p className="leader-title">HON'BLE CHIEF MINISTER,<br />TELANGANA</p>
          </div>
          <div className="leader-profile">
            <div className="leader-img-wrapper">
              <img src={dgpImage} alt="B. Shivader Reddy" />
            </div>
            <h4 className="leader-name">B. SHIVADER REDDY</h4>
            <p className="leader-title">DIRECTOR GENERAL OF POLICE,<br />TELANGANA</p>
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
