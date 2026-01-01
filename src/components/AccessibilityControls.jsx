import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/AccessibilityControls.css';

const AccessibilityControls = () => {
  const { i18n } = useTranslation();
  const [fontSize, setFontSize] = useState('medium');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' }
  ];

  // Sync state with current i18n language
  const currentLang = languages.find(l => l.code === i18n.resolvedLanguage) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    i18n.changeLanguage(lang.code);
    setShowLanguageDropdown(false);
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
      <div className="language-selector" ref={dropdownRef}>
        <button 
          className="language-btn"
          onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
        >
          {currentLang.name} ▼
        </button>
        
        {showLanguageDropdown && (
          <div className="language-dropdown">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`language-option ${i18n.resolvedLanguage === lang.code ? 'active' : ''}`}
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