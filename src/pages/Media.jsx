import { useTranslation } from 'react-i18next';

const Media = () => {
    const { t } = useTranslation();
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>{t('media.title')}</h1>
            <p>{t('media.message')}</p>
        </div>
    );
}
 
export default Media;
