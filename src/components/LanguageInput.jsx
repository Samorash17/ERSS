import React from 'react';

const LanguageInput = ({ label, value, onChange, required = false, type = 'text' }) => {
  const handleChange = (lang, val) => {
    onChange({ ...value, [lang]: val });
  };

  return (
    <div className="form-row">
      <label>{label} {required && '*'}</label>
      <div className="language-inputs">
        <div className="input-group">
          <span className="lang-label">EN</span>
          {type === 'textarea' ? (
            <textarea 
              className="admin-textarea"
              value={value?.en || ''} 
              onChange={e => handleChange('en', e.target.value)}
              required={required}
            />
          ) : (
            <input 
              type="text" 
              className="admin-input"
              value={value?.en || ''} 
              onChange={e => handleChange('en', e.target.value)}
              required={required}
            />
          )}
        </div>
        <div className="input-group">
          <span className="lang-label">HI</span>
          {type === 'textarea' ? (
            <textarea 
              className="admin-textarea"
              value={value?.hi || ''} 
              onChange={e => handleChange('hi', e.target.value)}
            />
          ) : (
            <input 
              type="text" 
              className="admin-input"
              value={value?.hi || ''} 
              onChange={e => handleChange('hi', e.target.value)}
            />
          )}
        </div>
        <div className="input-group">
          <span className="lang-label">TE</span>
          {type === 'textarea' ? (
            <textarea 
              className="admin-textarea"
              value={value?.te || ''} 
              onChange={e => handleChange('te', e.target.value)}
            />
          ) : (
            <input 
              type="text" 
              className="admin-input"
              value={value?.te || ''} 
              onChange={e => handleChange('te', e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageInput;
