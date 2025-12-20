import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/LoginForm.css'; // Reusing Login styles for consistency

const OfficerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    const result = await login(username, password);
    if (result.success) {
      navigate('/admin');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/23/Telangana_Police_Logo.png"
          alt="Gov Logo"
          className="login-top-image"
        />
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#1a3c6e' }}>Officer Login</h2>
        
        {error && <div style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username (ID)</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Officer ID"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>

          <button type="submit" className="login-btn">
            Login as Officer
          </button>
        </form>
      </div>
    </div>
  );
};

export default OfficerLogin;