import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}>
        ERSS
      </Link>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/sos" style={{ color: 'white', textDecoration: 'none' }}>
          SOS
        </Link>
        <Link to="/works" style={{ color: 'white', textDecoration: 'none' }}>
          Works
        </Link>
      </div>
    </nav>
  );
};




export default Navbar;
