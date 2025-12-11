import '../styles/works.css';

const Works = () => {
  return (
    <div className="works-container">
      <div className="works-content">
        {/* Left Section - How it Works */}
        <div className="how-it-works-section">
          <h1 className="main-title">HOW DIAL 112 WORKS IN TELANGANA</h1>
          
          <p className="description">
            When you dial 112, your call is automatically routed to the nearest emergency 
            response centre. Here's how the system works
          </p>

          <div className="steps-list">
            <div className="step">
              <span className="step-number">1.</span>
              <div className="step-content">
                <strong>Call Reception :</strong> The operators receives your call and assesses the emergency.
              </div>
            </div>

            <div className="step">
              <span className="step-number">2.</span>
              <div className="step-content">
                <strong>Location Detection:</strong> Your GPS data is shared with the operator to determine 
                your location.
              </div>
            </div>

            <div className="step">
              <span className="step-number">3.</span>
              <div className="step-content">
                <strong>Dispatch Assistance:</strong> The appropriate emergency team( police, fire, 
                ambulance) is dispatched to your location.
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Video and Notices */}
        <div className="video-section">
          <div className="video-header">
            <h2>HOW IT WORKS</h2>
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
            <span className="request-help-text">Request Help</span>
          </div>

          <div className="emergency-notice">
            <div className="notice-icon">⚠️</div>
            <div className="notice-content">
              <strong>Emergency Notice:</strong> This is an emergency facility. Use this service responsibly and only in genuine cases.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;