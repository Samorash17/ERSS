import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BackButton from '../components/BackButton';

function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="not-found-container" style={{ textAlign: "center", padding: "50px" }}>
      <BackButton />
      <h1>{t('notFound.title', '404 - Page Not Found')}</h1>
      <p>{t('notFound.message', 'The page you are looking for does not exist.')}</p>
      <Link to="/" className="home-link" style={{ color: "#007bff", textDecoration: "none", fontSize: "1.2rem" }}>
        {t('notFound.homeLink', 'Go Back to Home')}
      </Link>
    </div>
  )
}
 
export default NotFound;
