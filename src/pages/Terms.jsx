import { useTranslation } from "react-i18next";
import "../styles/terms.css";

export default function Terms() {
    const { t } = useTranslation();

    return (
        <div className="terms-container">
            {/* Background Effects */}
            <div className="terms-background">
                <div className="terms-orb terms-orb-1"></div>
                <div className="terms-orb terms-orb-2"></div>
            </div>

            {/* Content */}
            <div className="terms-card">
                <h1 className="terms-title">{t('terms.title')}</h1>
                <br/>

                <div className="terms-section">
                    <p>{t('terms.intro')}</p>
                    
                    <p>{t('terms.accuracy')}</p>

                    <p>{t('terms.liability')}</p>

                    <p>{t('terms.links')}</p>
                    
                    <p>{t('terms.jurisdiction')}</p>
                </div>
            </div>
        </div>
    );
}

