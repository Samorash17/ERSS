import React from 'react';
import '../styles/HelplineSection.css';

const agentImage = "https://placehold.co/300x400?text=Agent";
const icon247 = "https://placehold.co/80x80?text=24/7";

const HelplineSection = () => {
  return (
    <section className="helpline-container">
      <div className="helpline-banner">
        <h4 className="helpline-banner-subtitle">24/7 HELPLINE SUPPORT</h4>
        <h2 className="helpline-banner-title">Welcome to<br />Telangana Emergency Response Support System<br />Dial - 112</h2>
        <p className="helpline-banner-text">Telangana-Helpline, empowers the caller to get prompt response from the Police response team.</p>
      </div>

      <div className="helpline-content">
        <div className="helpline-image-wrapper">
          <img src={agentImage} alt="Helpline Agent" className="agent-image" />
          <div className="icon-wrapper">
             <img src={icon247} alt="24/7 Support" className="icon-247" />
          </div>
        </div>

        <div className="helpline-text-wrapper">
          <h3 className="helpline-heading">HELPLINE 112</h3>
          <h4 className="helpline-subheading">Call us for any emergency support response immediately</h4>
          
          <p className="helpline-paragraph">
            Dial 112 is a nationwide emergency helpline implemented by Government of India designed to 
            provide swift and efficient responses during emergencies. In Telangana this services is available 
            24*7 ensuring that citizens can easily connect with emergency services like police, fire, and 
            medical assistance all through a single number <strong>112</strong>.
          </p>
          
          <p className="helpline-paragraph">
            The Telangana Government in collaboration with various services, aims to offer timely help in 
            critical situations, reducing responses times, saving lives and improving the overall safety of its 
            citizen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelplineSection;
