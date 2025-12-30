import "../styles/copyright.css";
import { useTranslation } from 'react-i18next';

const Copyright = () => {
    const { t } = useTranslation();
    
    return (
        <div className="copyright-container">
            {/* Background Effects */}
            <div className="copyright-background">
                <div className="copyright-orb copyright-orb-1"></div>
                <div className="copyright-orb copyright-orb-2"></div>
            </div>

            {/* Main Card */}
            <div className="copyright-card">
                <h1 className="copyright-title">{t('copyright.title')}</h1>
            <br/>

                <div className="copyright-section">
                    <p>
                        {t('copyright.content')}
                    </p>
                </div>

                <div className="copyright-footer">
                    © {new Date().getFullYear()} {t('copyright.footer')}
                </div>
            </div>
        </div>
    );
};

export default Copyright;
