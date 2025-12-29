import '../styles/MarqueeBanner.css';
import { useTranslation } from 'react-i18next';

const MarqueeBanner = () => {
  const { t } = useTranslation();
  
  const announcements = [
    t('marquee.item1'),
    t('marquee.item2'),
    t('marquee.item3'),
    t('marquee.item4'),
    t('marquee.item5'),
    t('marquee.item6'),
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
