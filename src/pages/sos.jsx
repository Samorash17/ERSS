import { useState, useCallback } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { useTranslation } from 'react-i18next'
import "../styles/sos.css"

const SOS = () => {
  const { t } = useTranslation();
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    eventType: "",
    additionalInfo: "",
    gender: "",
    state: "Telangana",
    district: "",
    place: "",
    address: "",
    latitude: "",
    longitude: "",
    captcha: "",
  })

  // Map state
  const [markerPosition, setMarkerPosition] = useState({
    lat: 17.4065,
    lng: 78.4772,
  })

  const [locationInput, setLocationInput] = useState("")
  const [captchaText, setCaptchaText] = useState("gfy5yi")

  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  }

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setCaptchaText(result)
  }

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Map click
  const onMapClick = useCallback((e) => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()

    setMarkerPosition({ lat, lng })
    setFormData((prev) => ({
      ...prev,
      latitude: lat.toFixed(6),
      longitude: lng.toFixed(6),
    }))
  }, [])

  // Marker drag
  const onMarkerDragEnd = useCallback((e) => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()

    setMarkerPosition({ lat, lng })
    setFormData((prev) => ({
      ...prev,
      latitude: lat.toFixed(6),
      longitude: lng.toFixed(6),
    }))
  }, [])

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.mobile || !formData.eventType) {
      alert(t('sos.validation.mandatoryFields'))
      return
    }

    if (formData.captcha !== captchaText) {
      alert(t('sos.validation.invalidCaptcha'))
      generateCaptcha()
      setFormData((prev) => ({ ...prev, captcha: "" }))
      return
    }

    console.log("Form submitted:", formData)
    alert(t('sos.validation.successMessage'))
    handleClear()
  }

  // Clear
  const handleClear = () => {
    setFormData({
      name: "",
      mobile: "",
      eventType: "",
      additionalInfo: "",
      gender: "",
      state: "Telangana",
      district: "",
      place: "",
      address: "",
      latitude: "",
      longitude: "",
      captcha: "",
    })
    setLocationInput("")
    generateCaptcha()
  }

  return (
    <div className="sos-container">
      {/* Animated floating orbs background */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      <div className="sos-emergency-banner">
        <span className="warning-icon">⚠️</span>
        <span>{t('sos.warningBanner')}</span>
      </div>

      <h1 className="sos-page-title">
        <span className="sos-title-gradient">{t('sos.pageTitle')}</span>
      </h1>

      <form onSubmit={handleSubmit} className="sos-form">
        <div className="sos-form-sections">
          {/* SECTION 1: PERSONAL INFO */}
          <div className="sos-form-section">
            <div className="sos-section-header">
              <span className="sos-section-icon">👤</span>
              <h2>{t('sos.personalInfo.title')}</h2>
              <span className="sos-step-badge">1</span>
            </div>

            <div className="sos-form-group">
              <label>
                {t('sos.personalInfo.name')} <span className="sos-required-star">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('sos.personalInfo.namePlaceholder')}
                required
              />
            </div>
              
            <div className="sos-form-group">
              <label>
                {t('sos.personalInfo.mobile')} <span className="sos-required-star">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder={t('sos.personalInfo.mobilePlaceholder')}
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="sos-form-group">
              <label>
                {/* Event Type <span className="sos-required-star">*</span> */}
              </label>
              <select name="eventType" value={formData.eventType} onChange={handleInputChange} required>
                <option value="">{t('sos.emergencyDetails.selectEmergencyType')}</option>
                <option value="Medical Emergency">🏥 {t('sos.emergencyDetails.medical')}</option>
                <option value="Fire">🔥 {t('sos.emergencyDetails.fire')}</option>
                <option value="Accident">🚗 {t('sos.emergencyDetails.accident')}</option>
                <option value="Crime">🚨 {t('sos.emergencyDetails.crime')}</option>
                <option value="Natural Disaster">🌪️ {t('sos.emergencyDetails.naturalDisaster')}</option>
                <option value="Other">📋 {t('sos.emergencyDetails.other')}</option>
              </select>
            </div>

            <div className="sos-form-group sos-gender-group">
              <label>
                {t('sos.personalInfo.gender')} <span className="sos-required-star">*</span>
              </label>
              <div className="sos-radio-group">
                <label className="sos-radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleInputChange}
                  />
                  <span>{t('sos.personalInfo.male')}</span>
                </label>
                <label className="sos-radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleInputChange}
                  />
                  <span>{t('sos.personalInfo.female')}</span>
                </label>
                <label className="sos-radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Transgender"
                    checked={formData.gender === "Transgender"}
                    onChange={handleInputChange}
                  />
                  <span>{t('sos.personalInfo.transgender')}</span>
                </label>
              </div>
            </div>

            <div className="sos-form-group sos-textarea-group">
              <label>{t('sos.personalInfo.additionalInfo')}</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder={t('sos.personalInfo.additionalInfoPlaceholder')}
                rows="4"
              />
            </div>

            <p className="sos-mandatory-note">{t('sos.mandatoryNote')}</p>
          </div>

          {/* <div className="form-divider"></div> */}

          {/* Section 3: Location Details */}
          <div className="sos-form-section">
            <div className="sos-section-header">
              <span className="sos-section-icon">📍</span>
              <h2>{t('sos.locationDetails.emergencyLocation')}</h2>
              <span className="sos-step-badge">2</span>
            </div>

            <div className="sos-form-group">
              <input
                type="text"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                placeholder={`🔍 ${t('sos.locationDetails.searchLocation')}`}
                className="sos-location-input"
              />
            </div>

            <div className="sos-map-container">
              <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
                <GoogleMap mapContainerStyle={mapContainerStyle} center={markerPosition} zoom={13} onClick={onMapClick}>
                  <Marker position={markerPosition} draggable={true} onDragEnd={onMarkerDragEnd} />
                </GoogleMap>
              </LoadScript>
            </div>

            <p className="sos-map-note">💡 {t('sos.locationDetails.mapNote')}</p>

            <div className="sos-coordinates-display">
              <div className="sos-coordinate-item">
                <span className="sos-coord-label">{t('sos.locationDetails.latitude')}:</span>
                <span className="sos-coord-value">{formData.latitude || "---"}</span>
              </div>
              <div className="sos-coordinate-item">
                <span className="sos-coord-label">{t('sos.locationDetails.longitude')}:</span>
                <span className="sos-coord-value">{formData.longitude || "---"}</span>
              </div>
            </div>
          </div>

          {/*SECTION 3: LOCATION INFO*/}
          <div className="sos-form-section">
            <div className="sos-section-header">
              <span className="sos-section-icon">📋</span>
              <h2>{t('sos.locationDetails.addressDetails')}</h2>
              <span className="sos-step-badge">3</span>
            </div>

            <div className="sos-form-group">
              <label>
                {t('sos.locationDetails.state')} <span className="sos-required-star">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder={t('sos.locationDetails.state')}
                required
              />
            </div>

            <div className="sos-form-group">
              <label>
                {t('sos.locationDetails.district')} <span className="sos-required-star">*</span>
              </label>
              <select name="district" value={formData.district} onChange={handleInputChange} required>
                <option value="">{t('sos.locationDetails.selectDistrict')}</option>
                <option value="Adilabad">Adilabad</option>
                <option value="Bhadradri Kothagudem">Bhadradri Kothagudem</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Jagitial">Jagitial</option>
                <option value="Jangaon">Jangaon</option>
                <option value="Jayashankar Bhupalapally">Jayashankar Bhupalapally</option>
                <option value="Jogulamba Gadwal">Jogulamba Gadwal</option>
                <option value="Kamareddy">Kamareddy</option>
                <option value="Karimnagar">Karimnagar</option>
                <option value="Khammam">Khammam</option>
                <option value="Kumuram Bheem Asifabad">Kumuram Bheem Asifabad</option>
                <option value="Mahabubabad">Mahabubabad</option>
                <option value="Mahabubnagar">Mahabubnagar</option>
                <option value="Mancherial">Mancherial</option>
                <option value="Medak">Medak</option>
                <option value="Medchal–Malkajgiri">Medchal–Malkajgiri</option>
                <option value="Mulugu">Mulugu</option>
                <option value="Nagarkurnool">Nagarkurnool</option>
                <option value="Nalgonda">Nalgonda</option>
                <option value="Narayanpet">Narayanpet</option>
                <option value="Nirmal">Nirmal</option>
                <option value="Nizamabad">Nizamabad</option>
                <option value="Peddapalli">Peddapalli</option>
                <option value="Rajanna Sircilla">Rajanna Sircilla</option>
                <option value="Ranga Reddy">Ranga Reddy</option>
                <option value="Sangareddy">Sangareddy</option>
                <option value="Siddipet">Siddipet</option>
                <option value="Suryapet">Suryapet</option>
                <option value="Vikarabad">Vikarabad</option>
                <option value="Wanaparthy">Wanaparthy</option>
                <option value="Warangal Rural">Warangal Rural</option>
                <option value="Yadadri Bhuvanagiri">Yadadri Bhuvanagiri</option>
              </select>
            </div>

            <div className="sos-form-group">
              <label>
                {t('sos.locationDetails.place')} <span className="sos-required-star">*</span>
              </label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                placeholder={t('sos.locationDetails.placePlaceholder')}
                required
              />
            </div>

            <div className="sos-form-group sos-textarea-group">
              <label>
                {t('sos.locationDetails.fullAddress')} <span className="sos-required-star">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder={t('sos.locationDetails.fullAddressPlaceholder')}
                rows="4"
                required
              />
            </div>

            <p className="sos-mandatory-note">{t('sos.mandatoryNote')}</p>
          </div>
        </div>

        {/* CAPTCHA */}
        <div className="sos-captcha-section">
          <div className="sos-captcha-display">
            <span className="sos-captcha-text">{captchaText}</span>
            <button type="button" className="sos-captcha-refresh" onClick={generateCaptcha} aria-label={t('sos.captcha.refresh')}>
              🔄
            </button>
          </div>

          <input
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleInputChange}
            placeholder={t('sos.captcha.placeholder')}
            className="sos-captcha-input"
            required
          />
        </div>

        {/* BUTTONS */}
        <div className="sos-form-actions">
          <button type="button" onClick={handleClear} className="sos-btn-clear">
            <span>{t('sos.buttons.clearForm')}</span>
          </button>
          <button type="submit" className="sos-btn-submit">
            <span>🚨 {t('sos.buttons.submitRequest')}</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SOS
