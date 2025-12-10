import React from "react";
import "../styles/Features.css";

function Features() {
  return (
    <div className="features-wrapper">
      <h1 className="features-heading">Key Features of Dial 112 in Telangana</h1>

      <div className="features-list">
        <div className="feature-item">
          <h3>One Number for All Emergencies</h3>
          <p>
            Whether it's a medical emergency, fire, law enforcement, or a road 
            accident, you can dial 112 to reach the relevant emergency services instantly.
          </p>
        </div>

        <div className="feature-item">
          <h3>Quick Response</h3>
          <p>
            The system quickly connects callers to the appropriate response 
            teams, reducing delays in crucial situations.
          </p>
        </div>

        <div className="feature-item">
          <h3>Geolocation Technology</h3>
          <p>
            Uses GPS and mapping technology to pinpoint your location 
            accurately for faster assistance.
          </p>
        </div>

        <div className="feature-item">
          <h3>24/7 Availability</h3>
          <p>
            Help is available at all times — day or night — with dedicated teams on standby.
          </p>
        </div>

        <div className="feature-item">
          <h3>Multi-Language Support</h3>
          <p>
            Available in multiple languages to ensure accessibility for all citizens of Telangana.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
