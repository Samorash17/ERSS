import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#2980b9' }}>Success Stories</h3>
          <p>Manage stories shared by citizens and officers.</p>
          <Link to="/admin/stories" style={{ display: 'inline-block', marginTop: '10px', color: '#2980b9', textDecoration: 'none', fontWeight: 'bold' }}>Manage Stories &rarr;</Link>
        </div>

        <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#27ae60' }}>FAQs</h3>
          <p>Update Frequently Asked Questions.</p>
          <Link to="/admin/faqs" style={{ display: 'inline-block', marginTop: '10px', color: '#27ae60', textDecoration: 'none', fontWeight: 'bold' }}>Manage FAQs &rarr;</Link>
        </div>

        <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#8e44ad' }}>Media Gallery</h3>
          <p>Upload and manage images in the gallery.</p>
          <Link to="/admin/gallery" style={{ display: 'inline-block', marginTop: '10px', color: '#8e44ad', textDecoration: 'none', fontWeight: 'bold' }}>Manage Gallery &rarr;</Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
