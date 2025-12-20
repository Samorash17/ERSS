import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1>Dashboard Overview</h1>
          <p>Welcome back, {user?.username || 'Officer'}!</p>
        </div>
      </div>
      
      <div className="dashboard-grid">
        <Link to="/admin/stories" className="dashboard-card">
          <h3>Success Stories</h3>
          <p>Manage stories shared by citizens and officers.</p>
          <span className="card-link">Manage Stories &rarr;</span>
        </Link>

        <Link to="/admin/faqs" className="dashboard-card">
          <h3>FAQs</h3>
          <p>Update Frequently Asked Questions.</p>
          <span className="card-link">Manage FAQs &rarr;</span>
        </Link>

        <Link to="/admin/gallery" className="dashboard-card">
          <h3>Media Gallery</h3>
          <p>Upload and manage images in the gallery.</p>
          <span className="card-link">Manage Gallery &rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
