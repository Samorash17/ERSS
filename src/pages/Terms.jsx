import { useTranslation } from "react-i18next";
import BackButton from "../components/BackButton";
import "../styles/terms.css";

export default function Terms() {
    const { t } = useTranslation();

    return (
        <div className="terms-container">
            <BackButton />
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
                    <p style={{ textIndent: '80px' }}>{t('terms.intro')}</p>
                    
                    <p style={{ textIndent: '80px' }}>{t('terms.accuracy')}</p>

                    <p style={{ textIndent: '80px' }}>{t('terms.liability')}</p>

                    <p style={{ textIndent: '80px' }}>{t('terms.links')}</p>
                    
                    <p style={{ textIndent: '80px' }}>{t('terms.jurisdiction')}</p>
                </div>
            </div>
        </div>
    );
}

