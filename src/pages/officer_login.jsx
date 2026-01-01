import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import BackButton from '../components/BackButton'
import "../styles/login.css"
import logoDial from '../assets/logo-dial-112.jpg'

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    captcha: "",
    rememberMe: false,
  })

  const [captchaText, setCaptchaText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const { login, user } = useAuth()
  const navigate = useNavigate()

  // Redirect to admin dashboard if already logged in
  useEffect(() => {
    if (user) {
      navigate('/admin', { replace: true })
    }
  }, [user, navigate])

  // Generate random captcha (simplified for easier testing)
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  useEffect(() => {
    setCaptchaText(generateCaptcha())
  }, [])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.username.trim()) {
      newErrors.username = "Username is required"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    if (!formData.captcha.trim()) {
      newErrors.captcha = "Captcha is required"
    } else if (formData.captcha.toLowerCase() !== captchaText.toLowerCase()) {
      newErrors.captcha = "Captcha does not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors({}) // Clear any previous errors

    try {
      // Use the login function from AuthContext
      const result = await login(formData.username, formData.password)
      
      if (result.success) {
        // Navigate to admin panel on successful login
        navigate('/admin')
      } else {
        // Set error message from the login result
        setErrors({ general: result.message || 'Login failed. Please check your credentials.' })
        // Refresh captcha after failed login attempt
        setCaptchaText(generateCaptcha())
        setFormData(prev => ({ ...prev, captcha: "" }))
      }
    } catch (error) {
      console.error('Login error:', error)
      setErrors({ general: 'An unexpected error occurred. Please try again.' })
      // Refresh captcha after error
      setCaptchaText(generateCaptcha())
      setFormData(prev => ({ ...prev, captcha: "" }))
    } finally {
      setIsLoading(false)
    }
  }

  const refreshCaptcha = () => {
    setCaptchaText(generateCaptcha())
    setFormData(prev => ({ ...prev, captcha: "" }))
    if (errors.captcha) {
      setErrors(prev => ({ ...prev, captcha: "" }))
    }
  }

  return (
    <div className="login-container">
      <BackButton />
      <div className="login-background-orb login-orb-1"></div>
      <div className="login-background-orb login-orb-2"></div>
      <div className="login-background-orb login-orb-3"></div>

      <div className="login-content">
        {/* Left Section - Title */}
        <div className="login-title-section">
          <div className="login-logo-container">
            <img
              src={logoDial}
              alt="Emergency Response Support System - Dial 112"
              className="login-logo-image"
            />
          </div>

          <h1 className="system-title">
            TELANGANA EMERGENCY
            <br />
            RESPONSE SUPPORT SYSTEM
          </h1>
          <h2 className="login-title">OFFICER LOGIN</h2>

          <div className="login-security-badge">
            <span className="security-badge-text">Secure Access Portal</span>
          </div>
        </div>

        {/* Right Section - Login Form */} 
        <div className="login-form-section">
          <div className="login-form-container">


            <h3 className="login-form-title">Secure Login</h3>  
                      

            <form onSubmit={handleSubmit} className="login-form">
              {errors.general && (
                <div className="error-message general-error">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                  </svg>
                  {errors.general}
                </div>
              )}

              <div className="form-group">
                <label>
                  Username<span className="required">*</span>
                </label>
                <div className={`input-wrapper ${errors.username ? 'error' : ''}`}>
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                      fill="currentColor"
                    />
                  </svg>
                  <input
                    type="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter your username"
                    disabled={isLoading}
                    required
                  />
                </div>
                {errors.username && <span className="error-text">{errors.username}</span>}
              </div>

              <div className="form-group">
                <label>
                  Password<span className="required">*</span>
                </label>
                <div className={`input-wrapper ${errors.password ? 'error' : ''}`}>
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                      fill="currentColor"
                    />
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9ZM12 4.5C17 4.5 21.27 7.61 23 12C21.27 16.39 17 19.5 12 19.5C7 19.5 2.73 16.39 1 12C2.73 7.61 7 4.5 12 4.5Z" fill="currentColor"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7C9.24 7 7 9.24 7 12C7 12.65 7.13 13.26 7.36 13.82L9.13 12.05C9.57 11.61 10.27 11.61 10.71 12.05C11.15 12.49 11.15 13.19 10.71 13.63L8.94 15.4C10.06 16.05 11.03 16.5 12 16.5C14.76 16.5 17 14.26 17 11.5C17 8.74 14.76 6.5 12 6.5ZM2 4.27L4.28 2L22 19.72L19.73 22L17.73 20C15.49 21.13 12.84 21.5 12 21.5C7 21.5 2.73 18.39 1 14C2.13 10.36 4.41 7.68 7.73 6.27L2 4.27Z" fill="currentColor"/>
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              <div className="captcha-group">
                <label>
                  Captcha Verification<span className="required">*</span>
                </label>
                <div className="captcha-display">
                  <span className="captcha-text">{captchaText}</span>
                  <button type="button" onClick={refreshCaptcha} className="captcha-refresh" disabled={isLoading}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className={`input-wrapper ${errors.captcha ? 'error' : ''}`}>
                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleInputChange}
                    placeholder="Enter captcha text"
                    className="captcha-input"
                    disabled={isLoading}
                    required
                  />
                </div>
                {errors.captcha && <span className="error-text">{errors.captcha}</span>}
              </div>

              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <label htmlFor="rememberMe">Remember me on this device</label>
              </div>

              <button type="submit" className={`login-button ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span className="login-button-text">Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span className="login-button-text">Login to Portal</span>
                    <svg className="login-button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor" />
                    </svg>
                  </>
                )}
              </button>

              <div className="login-security-notice">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
                    fill="currentColor"
                  />
                </svg>
                <span>This is a secure government portal. Unauthorized access is prohibited.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
