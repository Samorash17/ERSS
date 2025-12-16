import { useState, useEffect } from 'react';
import '../styles/AccessibilityControls.css';

const AccessibilityControls = () => {
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' }
  ];

  // Apply font size to document root
  useEffect(() => {
    const root = document.documentElement;
    switch (fontSize) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'medium':
        root.style.fontSize = '16px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
      default:
        root.style.fontSize = '16px';
    }
  }, [fontSize]);

  const increaseFontSize = () => {
    if (fontSize === 'small') setFontSize('medium');
    else if (fontSize === 'medium') setFontSize('large');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'large') setFontSize('medium');
    else if (fontSize === 'medium') setFontSize('small');
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang.name);
    setShowLanguageDropdown(false);
    // Here you would typically implement actual language switching logic
    console.log(`Language changed to: ${lang.name} (${lang.code})`);
  };

  return (
    <div className="accessibility-controls">
      {/* Font Size Controls */}
      <div className="font-controls">
        <button 
          className="font-btn decrease"
          onClick={decreaseFontSize}
          disabled={fontSize === 'small'}
          title="Decrease font size"
        >
          A⁻
        </button>
        <button 
          className="font-btn normal"
          onClick={() => setFontSize('medium')}
          title="Normal font size"
        >
          A
        </button>
        <button 
          className="font-btn increase"
          onClick={increaseFontSize}
          disabled={fontSize === 'large'}
          title="Increase font size"
        >
          A⁺
        </button>
      </div>

      {/* Language Selector */}
      <div className="language-selector">
        <button 
          className="language-btn"
          onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
        >
          Language ▼
        </button>
        
        {showLanguageDropdown && (
          <div className="language-dropdown">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`language-option ${language === lang.name ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang)}
              >
                <span className="lang-english">{lang.name}</span>
                {lang.code !== 'en' && (
                  <span className="lang-native">{lang.nativeName}</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessibilityControls;