import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation();
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{t('notFound.title')}</h1>
            <p>{t('notFound.message')}</p>
            <Link to="/">{t('notFound.backHome')}</Link>
        </div>
    );
}
 
export default NotFound;
