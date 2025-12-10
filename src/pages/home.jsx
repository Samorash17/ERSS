import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Emergency Response System</h1>
      <p>Welcome to the Emergency Response System</p>
      <Link to="/works">
        <button style={{ 
          padding: '15px 30px', 
          fontSize: '18px', 
          backgroundColor: '#ff8c42',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Request Emergency Help
        </button>
      </Link>
    </div>
  );
};

export default Home;
