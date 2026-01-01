import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/BackButton.css';

const BackButton = ({ className = '', style = {} }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <button 
      className={`enhanced-back-button ${className}`}
      onClick={handleBackToHome}
      style={style}
      aria-label={t('common.backToHome', 'Back to Home')}
    >
      <div className="back-button-circle">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="back-icon"
        >
          <path 
            d="M19 12H5M12 19L5 12L12 5" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="back-tooltip">{t('common.backToHome', 'Back to Home')}</span>
    </button>
  );
};

export default BackButton;