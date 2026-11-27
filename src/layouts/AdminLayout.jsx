import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import '../styles/AdminDashboard.css';

const AdminLayout = () => {
  const { logout, user } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/officer-login');
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h3>{t('admin.panel')}</h3>
          <p>{t('admin.welcome')}, {user?.name}</p>
        </div>
        <nav className="admin-nav">
          <NavLink to="/admin" end className={({ isActive }) => (isActive ? 'active' : '')}>
            {t('admin.dashboard')}
          </NavLink>
          <NavLink to="/admin/stories" className={({ isActive }) => (isActive ? 'active' : '')}>
            {t('admin.successStories')}
          </NavLink>
          <NavLink to="/admin/faqs" className={({ isActive }) => (isActive ? 'active' : '')}>
            {t('navbar.links.faqs')}
          </NavLink>
          <NavLink to="/admin/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>
            {t('admin.mediaGallery')}
          </NavLink>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          {t('admin.logout')}
        </button>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
