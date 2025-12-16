import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/LoginForm.css";
import RequiredLabel from "../components/RequiredLabel";

function LoginForm() {
    const { t } = useTranslation();
    const [mobileNo, setMobileNo] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [captcha, setCaptcha] = useState(generateCaptcha());

    // Generate random captcha
    function generateCaptcha() {
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        let text = "";
        for (let i = 0; i < 5; i++) {
            text += chars[Math.floor(Math.random() * chars.length)];
        }
        return text;
    }

    const refreshCaptcha = () => setCaptcha(generateCaptcha());

    const handleSubmit = (event) => {
        event.preventDefault();

        if (captchaInput.toLowerCase() !== captcha.toLowerCase()) {
            alert(t('loginForm.alerts.invalidCaptcha'));
            return;
        }

        alert(t('loginForm.alerts.success'));

        setMobileNo("");
        setDateOfBirth("");
        setCaptchaInput("");
        setRememberMe(false);
        refreshCaptcha();
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <RequiredLabel>Mobile No</RequiredLabel>
                    <input
                        type="text"
                        id="mobileNo"
                        value={mobileNo}
                        placeholder={t('loginForm.mobileNo')}
                        onChange={(e) => setMobileNo(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <RequiredLabel>Date of Birth</RequiredLabel>
                    <input
                        type="date"
                        id="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group captcha-group">
                    <RequiredLabel>Captcha</RequiredLabel>

                    <div className="captcha-display-area">
                        <span className="captcha-image">{captcha}</span>
                        <button
                            type="button"
                            className="refresh-btn"
                            onClick={refreshCaptcha}
                        >
                            ↻
                        </button>
                    </div>

                    <input
                        type="text"
                        id="captchaInput"
                        placeholder={t('loginForm.captchaPlaceholder')}
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        required
                    />
                </div>

                <div className="remember-me-group">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="rememberMe">{t('loginForm.rememberMe')}</label>
                </div>

                <button type="submit" className="login-btn">
                    {t('loginForm.login')}
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
