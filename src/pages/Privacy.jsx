import "../styles/privacy.css";
import { useTranslation } from 'react-i18next';
import BackButton from '../components/BackButton';

const Privacy = () => {
    const { t } = useTranslation();
    
    return (
        <div className="privacy-container">
            <BackButton />
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
                    
                    <p>{t('privacy.content1')}</p>
                    <p>{t('privacy.content2')}</p>
                    <p>{t('privacy.content3')}</p>
                    <p>{t('privacy.content4')}</p>
                </div>
                <div className="privacy-footer">
                    {t('privacy.lastUpdated')}
                </div>
            </div>
        </div>
    );
};

export default Privacy;
