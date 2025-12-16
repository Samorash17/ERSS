import { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captcha: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.username || !formData.password || !formData.captcha) {
      alert('Please fill all required fields');
      return;
    }

    // For now, just log the data (will be replaced with authentication)
    console.log('Login attempt:', formData);
    alert('Login functionality will be integrated later');
  };

  const refreshCaptcha = () => {
    // Generate new captcha (static for now)
    console.log('Captcha refreshed');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Left Section - Title */}
        <div className="login-title-section">
          <h1 className="system-title">
            TELANGANA EMERGENCY<br/>
            RESPONSE SUPPORT SYSTEM<br/>
            DIAL - 112
          </h1>
          <h2 className="login-title">OFFICER LOGIN</h2>
        </div>

        {/* Right Section - Login Form */}
        <div className="login-form-section">
          <div className="login-form-container">
            {/* Security Icon */}
            <div className="security-icon">
              <div className="officer-icon">👮‍♂️</div>
              <div className="lock-icon">🔒</div>
              <div className="key-icon">🔑</div>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label>Username<span className="required">*</span> :</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password<span className="required">*</span> :</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
              </div>

              <div className="captcha-group">
                <div className="captcha-display">
                  <span className="captcha-text">1n6e</span>
                  <button type="button" onClick={refreshCaptcha} className="captcha-refresh">
                    🔄
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Captcha<span className="required">*</span> :</label>
                <input
                  type="text"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleInputChange}
                  placeholder="Enter captcha here"
                  className="captcha-input"
                  required
                />
              </div>

              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>

              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;