import { useTranslation } from 'react-i18next';

function Media() {
  const { t } = useTranslation();
  return (
    <div className="media-container" style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1>{t('media.title', 'Media Gallery')}</h1>
      <p>{t('media.comingSoon', 'Coming Soon...')}</p>
    </div>
  )
}
 
export default Media;
