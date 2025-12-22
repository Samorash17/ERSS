import '../styles/MarqueeBanner.css';

const MarqueeBanner = () => {
  const announcements = [
    "🚨 Emergency Helpline: Dial 112 for immediate assistance",
    "⚡ 24/7 Emergency Response Services Available",
    "🏥 Medical, Police, Fire & Disaster Response - All in One Call",
    "📱 Download the Telangana 112 App for Quick Access",
    "🎯 Your Safety is Our Priority - Stay Alert, Stay Safe",
    "🚑 Fastest Response Time in Emergency Services",
  ];

  return (
    <div className="marquee-banner">
      <div className="marquee-content">
        <div className="marquee-text">
          {announcements.map((announcement, index) => (
            <span key={index} className="marquee-item">
              {announcement}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {announcements.map((announcement, index) => (
            <span key={`duplicate-${index}`} className="marquee-item">
              {announcement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
