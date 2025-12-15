import { useTranslation } from 'react-i18next';
import '../styles/LanguageSelector.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-selector">
            <button 
                className={`lang-btn ${i18n.language === 'en' || i18n.resolvedLanguage === 'en' ? 'active' : ''}`} 
                onClick={() => changeLanguage('en')}
                aria-label="Switch to English"
            >
                EN
            </button>
            <span className="divider">|</span>
            <button 
                className={`lang-btn ${i18n.language === 'te' || i18n.resolvedLanguage === 'te' ? 'active' : ''}`} 
                onClick={() => changeLanguage('te')}
                aria-label="Switch to Telugu"
            >
                TE
            </button>
        </div>
    );
};

export default LanguageSelector;
