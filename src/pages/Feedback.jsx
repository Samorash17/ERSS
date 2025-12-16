import { useTranslation } from 'react-i18next';

const Feedback = () => {
    const { t } = useTranslation();
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>{t('feedback.title')}</h1>
            <p>{t('feedback.message')}</p>
        </div>
    );
}
 
export default Feedback;
