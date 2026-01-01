import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import BackButton from '../components/BackButton';
import "../styles/LoginForm.css"
import RequiredLabel from "../components/RequiredLabel";

export default function LoginForm() {
  const [mobileNumber, setMobileNumber] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const { t } = useTranslation();

  const handleSendOTP = (e) => {
    e.preventDefault()
    if (mobileNumber.length === 10) {
      setOtpSent(true)
      alert(t('login.otpSentAlert'))
    } else {
      alert(t('login.invalidMobileAlert'))
    }
  }

  return (
    <div className="login-container">
      <BackButton />
      {/* Background Orbs */}
      <div className="login-orb login-orb-1"></div>
      <div className="login-orb login-orb-2"></div>

      <div className="login-card">
        <h2 className="login-title">{t('login.title')}</h2>
        
        <form className="login-form">
          <div className="form-group">
            <RequiredLabel>{t('login.mobileLabel')}</RequiredLabel>
            <div className="input-wrapper">
              <span className="input-icon">📱</span>
              <input
                type="tel"
                className="form-input"
                placeholder={t('login.mobilePlaceholder')}
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                maxLength="10"
              />
            </div>
          </div>

          {otpSent && (
            <div className="form-group fade-in">
              <RequiredLabel>{t('login.otpLabel')}</RequiredLabel>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder={t('login.otpPlaceholder')} 
                  maxLength="6" 
                />
              </div>
            </div>
          )}

          <button 
            className="login-btn" 
            onClick={handleSendOTP}
          >
            {otpSent ? t('login.loginBtn') : t('login.sendOtpBtn')}
          </button>
          
          <div className="login-footer">
            <p>{t('login.registerPrompt')} <a href="#" className="register-link">{t('login.registerLink')}</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}