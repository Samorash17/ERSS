import "../styles/privacy.css";
import { useTranslation } from 'react-i18next';

const Privacy = () => {
    const { t } = useTranslation();
    
    return (
        <div className="privacy-container">
            {/* Background Effects */}
            <div className="privacy-background">
                <div className="privacy-orb privacy-orb-1"></div>
                <div className="privacy-orb privacy-orb-2"></div>
            </div>

            {/* Main Card */}
            <div className="privacy-card">
                <h1  className="privacy-title">{t('privacy.title')}</h1>
                <br/>

                <div className="privacy-section">
                    
                    <p style={{ textIndent: '80px' }}>{t('privacy.content1')}</p>
                    <p style={{ textIndent: '80px' }}>{t('privacy.content2')}</p>
                    <p style={{ textIndent: '80px' }}>{t('privacy.content3')}</p>
                    <p style={{ textIndent: '80px' }}>{t('privacy.content4')}</p>
                </div>
                <div className="privacy-footer">
                    {t('privacy.lastUpdated')}
                </div>
            </div>
        </div>
    );
};

export default Privacy;
