import { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';
import RequiredLabel from '../components/RequiredLabel';  // <-- imported component
import '../styles/sos.css';

const SOS = () => {
  const { t } = useTranslation();
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    eventType: '',
    additionalInfo: '',
    gender: '',
    state: 'Telangana',
    district: '',
    place: '',
    address: '',
    latitude: '',
    longitude: '',
    captcha: ''
  });

  // Map state
  const [markerPosition, setMarkerPosition] = useState({
    lat: 17.4065,
    lng: 78.4772
  });

  const [locationInput, setLocationInput] = useState('');

  const mapContainerStyle = {
    width: '100%',
    height: '300px'
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Map click
  const onMapClick = useCallback((e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    
    setMarkerPosition({ lat, lng });
    setFormData(prev => ({
      ...prev,
      latitude: lat.toFixed(6),
      longitude: lng.toFixed(6)
    }));
  }, []);

  // Marker drag
  const onMarkerDragEnd = useCallback((e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    setMarkerPosition({ lat, lng });
    setFormData(prev => ({
      ...prev,
      latitude: lat.toFixed(6),
      longitude: lng.toFixed(6)
    }));
  }, []);

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.eventType) {
      alert(t('sos.alerts.fillMandatory'));
      return;
    }

    console.log('Form submitted:', formData);
    alert(t('sos.alerts.success'));
    handleClear();
  };

  // Clear
  const handleClear = () => {
    setFormData({
      name: '',
      mobile: '',
      eventType: '',
      additionalInfo: '',
      gender: '',
      state: '',
      district: '',
      place: '',
      address: '',
      latitude: '',
      longitude: '',
      captcha: ''
    });
    setLocationInput('');
  };

  const districts = [
    "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagitial", "Jangaon", "Jayashankar Bhupalapally",
    "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad",
    "Mahabubnagar", "Mancherial", "Medak", "Medchal–Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda",
    "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy",
    "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Yadadri Bhuvanagiri"
  ];

  return (
    <div className="sos-container">
      <div className="emergency-banner">
        <span className="warning-icon">⚠️</span>
        {t('sos.banner')}
      </div>

      <h1 className="page-title">{t('sos.title')}</h1>

      <form onSubmit={handleSubmit} className="sos-form">
        <div className="form-sections">

          {/* SECTION 1: PERSONAL INFO */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-icon">👤</span>
              <h2>{t('sos.sections.personal')}</h2>
              <span className="step-badge">1</span>
            </div>

            <div className="form-group">
              <RequiredLabel>{t('sos.fields.name')}</RequiredLabel>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('sos.fields.name')}
                required
              />
            </div>

            <div className="form-group">
              <RequiredLabel>{t('sos.fields.mobile')}</RequiredLabel>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder={t('sos.fields.mobile')}
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group">
              <RequiredLabel>{t('sos.fields.eventType')}</RequiredLabel>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
              >
                <option value="">{t('sos.options.select')}</option>
                <option value="Medical Emergency">{t('sos.options.medical')}</option>
                <option value="Fire">{t('sos.options.fire')}</option>
                <option value="Accident">{t('sos.options.accident')}</option>
                <option value="Crime">{t('sos.options.crime')}</option>
                <option value="Natural Disaster">{t('sos.options.naturalDisaster')}</option>
                <option value="Other">{t('sos.options.other')}</option>
              </select>
            </div>

            <div className="form-group">
              <RequiredLabel>{t('sos.fields.gender')}</RequiredLabel>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleInputChange}
                  />
                  {t('sos.options.male')}
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleInputChange}
                  />
                  {t('sos.options.female')}
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Transgender"
                    checked={formData.gender === 'Transgender'}
                    onChange={handleInputChange}
                  />
                  {t('sos.options.transgender')}
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>{t('sos.fields.additionalInfo')} :</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder={t('sos.fields.additionalInfo')}
                rows="4"
              />
            </div>

            <p className="mandatory-note">{t('sos.notes.mandatory')}</p>
          </div>

          {/* SECTION 2: MAP */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-icon">📍</span>
              <h2>{t('sos.sections.map')}</h2>
              <span className="step-badge">2</span>
            </div>

            <div className="form-group">
              <input
                type="text"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                placeholder={t('sos.fields.locationInput')}
                className="location-input"
              />
            </div>

            <div className="map-container">
              <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={markerPosition}
                  zoom={13}
                  onClick={onMapClick}
                >
                  <Marker
                    position={markerPosition}
                    draggable={true}
                    onDragEnd={onMarkerDragEnd}
                  />
                </GoogleMap>
              </LoadScript>
            </div>

            <p className="map-note">{t('sos.notes.mapDrag')}</p>
          </div>

          {/* SECTION 3: LOCATION INFO */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-icon">📋</span>
              <h2>{t('sos.sections.location')}</h2>
              <span className="step-badge">3</span>
            </div>

            <div className="form-group">
              <RequiredLabel>{t('sos.fields.state')}</RequiredLabel>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <RequiredLabel>{t('sos.fields.district')}</RequiredLabel>
              <select
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                required
              >
                <option value="">{t('sos.options.select')}</option>
                {districts.map(district => (
                     <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <RequiredLabel>{t('sos.fields.place')}</RequiredLabel>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                placeholder={t('sos.fields.place')}
                required
              />
            </div>

            <div className="form-group">
              <RequiredLabel>{t('sos.fields.address')}</RequiredLabel>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder={t('sos.fields.address')}
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <RequiredLabel>{t('sos.fields.latitude')}</RequiredLabel>
              <input
                type="text"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
                placeholder={t('sos.fields.latitude')}
                readOnly
              />
            </div>

            <div className="form-group">
              <RequiredLabel>{t('sos.fields.longitude')}</RequiredLabel>
              <input
                type="text"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
                placeholder={t('sos.fields.longitude')}
                readOnly
              />
            </div>

            <p className="mandatory-note">{t('sos.notes.mandatory')}</p>
          </div>
        </div>

        {/* CAPTCHA */}
        <div className="captcha-section">
          <div className="captcha-display">
            <span className="captcha-text">gfy5yi</span>
            <button type="button" className="captcha-refresh">🔄</button>
          </div>

          <input
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleInputChange}
            placeholder={t('sos.fields.captchaPlaceholder')}
            className="captcha-input"
          />
        </div>

        {/* BUTTONS */}
        <div className="form-actions">
          <button type="button" onClick={handleClear} className="btn-clear">
            {t('sos.buttons.clear')}
          </button>
          <button type="submit" className="btn-submit">
            {t('sos.buttons.submit')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SOS;