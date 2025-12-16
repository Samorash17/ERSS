import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back, {user?.username || 'Officer'}!</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <Link to="/admin/stories" className="dashboard-card" style={{ borderLeft: '4px solid #2980b9' }}>
          <h3 style={{ color: '#2980b9' }}>Success Stories</h3>
          <p>Manage stories shared by citizens and officers.</p>
          <span className="card-link" style={{ color: '#2980b9' }}>Manage Stories &rarr;</span>
        </Link>

        <Link to="/admin/faqs" className="dashboard-card" style={{ borderLeft: '4px solid #27ae60' }}>
          <h3 style={{ color: '#27ae60' }}>FAQs</h3>
          <p>Update Frequently Asked Questions.</p>
          <span className="card-link" style={{ color: '#27ae60' }}>Manage FAQs &rarr;</span>
        </Link>

        <Link to="/admin/gallery" className="dashboard-card" style={{ borderLeft: '4px solid #8e44ad' }}>
          <h3 style={{ color: '#8e44ad' }}>Media Gallery</h3>
          <p>Upload and manage images in the gallery.</p>
          <span className="card-link" style={{ color: '#8e44ad' }}>Manage Gallery &rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
