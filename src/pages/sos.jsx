import { useState, useCallback, useEffect } from "react"
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
  const [locationLoading, setLocationLoading] = useState(false)
  const [locationError, setLocationError] = useState("")

  // List of valid Telangana districts for matching
  const telanganaDistricts = [
    "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagitial", "Jangaon",
    "Jayashankar Bhupalapally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar",
    "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad", "Mahabubnagar",
    "Mancherial", "Medak", "Medchal–Malkajgiri", "Mulugu", "Nagarkurnool",
    "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli",
    "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet",
    "Vikarabad", "Wanaparthy", "Warangal Rural", "Yadadri Bhuvanagiri"
  ]

  // Match district name from Google Maps to our dropdown options
  const matchDistrict = (googleDistrict) => {
    if (!googleDistrict) return ""
    
    const normalizedInput = googleDistrict.toLowerCase().replace(/[^a-z]/g, '')
    
    // Direct match first
    const exactMatch = telanganaDistricts.find(d => 
      d.toLowerCase() === googleDistrict.toLowerCase()
    )
    if (exactMatch) return exactMatch
    
    // Fuzzy match - check if district name contains or is contained
    const fuzzyMatch = telanganaDistricts.find(d => {
      const normalizedDistrict = d.toLowerCase().replace(/[^a-z]/g, '')
      return normalizedDistrict.includes(normalizedInput) || 
             normalizedInput.includes(normalizedDistrict)
    })
    if (fuzzyMatch) return fuzzyMatch
    
    // Common variations
    const variations = {
      'rangareddy': 'Ranga Reddy',
      'rangareddi': 'Ranga Reddy',
      'medchalmalkajgiri': 'Medchal–Malkajgiri',
      'medchal': 'Medchal–Malkajgiri',
      'warangal': 'Warangal Rural',
      'bhadradrikothagudem': 'Bhadradri Kothagudem',
      'jayashankarbhupalapally': 'Jayashankar Bhupalapally',
      'jogulambagadwal': 'Jogulamba Gadwal',
      'kurumbheemasiabad': 'Kumuram Bheem Asifabad',
      'asifabad': 'Kumuram Bheem Asifabad',
      'rajannasircilla': 'Rajanna Sircilla',
      'sircilla': 'Rajanna Sircilla',
      'yadadribhuvanagiri': 'Yadadri Bhuvanagiri',
    }
    
    return variations[normalizedInput] || ""
  }

  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  }

  // Reverse geocode coordinates to get address details
  const reverseGeocode = async (lat, lng) => {
    try {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      if (!apiKey) {
        console.warn("Google Maps API key not found")
        return null
      }

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
      )
      const data = await response.json()

      if (data.status === "OK" && data.results.length > 0) {
        const result = data.results[0]
        const addressComponents = result.address_components

        let state = ""
        let district = ""
        let place = ""
        let fullAddress = result.formatted_address || ""

        // Parse address components
        addressComponents.forEach((component) => {
          const types = component.types

          if (types.includes("administrative_area_level_1")) {
            state = component.long_name
          }
          if (types.includes("administrative_area_level_3") || types.includes("locality")) {
            district = component.long_name
          }
          if (types.includes("sublocality_level_1") || types.includes("sublocality")) {
            place = component.long_name
          }
          if (!place && types.includes("neighborhood")) {
            place = component.long_name
          }
        })

        return { state, district, place, address: fullAddress }
      }
      return null
    } catch (error) {
      console.error("Reverse geocoding error:", error)
      return null
    }
  }

  // Get user's current location
  const getCurrentLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      setLocationError(t('sos.location.notSupported', 'Geolocation is not supported by your browser'))
      return
    }

    setLocationLoading(true)
    setLocationError("")

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        // Update marker and coordinates
        setMarkerPosition({ lat, lng })
        setFormData((prev) => ({
          ...prev,
          latitude: lat.toFixed(6),
          longitude: lng.toFixed(6),
        }))

        // Reverse geocode to get address details
        const addressData = await reverseGeocode(lat, lng)
        if (addressData) {
          const matchedDistrict = matchDistrict(addressData.district)
          setFormData((prev) => ({
            ...prev,
            latitude: lat.toFixed(6),
            longitude: lng.toFixed(6),
            state: addressData.state || prev.state,
            district: matchedDistrict || prev.district,
            place: addressData.place || prev.place,
            address: addressData.address || prev.address,
          }))
          setLocationInput(addressData.address || "")
        }

        setLocationLoading(false)
      },
      (error) => {
        setLocationLoading(false)
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError(t('sos.location.permissionDenied', 'Location access denied. Please enable location permissions.'))
            break
          case error.POSITION_UNAVAILABLE:
            setLocationError(t('sos.location.unavailable', 'Location information is unavailable.'))
            break
          case error.TIMEOUT:
            setLocationError(t('sos.location.timeout', 'Location request timed out.'))
            break
          default:
            setLocationError(t('sos.location.error', 'An error occurred while getting your location.'))
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }, [t])

  // Request location on component mount
  useEffect(() => {
    getCurrentLocation()
  }, [getCurrentLocation])

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
  const onMapClick = useCallback(async (e) => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()

    setMarkerPosition({ lat, lng })
    setFormData((prev) => ({
      ...prev,
      latitude: lat.toFixed(6),
      longitude: lng.toFixed(6),
    }))

    // Reverse geocode to fill address details
    const addressData = await reverseGeocode(lat, lng)
    if (addressData) {
      const matchedDistrict = matchDistrict(addressData.district)
      setFormData((prev) => ({
        ...prev,
        state: addressData.state || prev.state,
        district: matchedDistrict || prev.district,
        place: addressData.place || prev.place,
        address: addressData.address || prev.address,
      }))
      setLocationInput(addressData.address || "")
    }
  }, [])

  // Marker drag
  const onMarkerDragEnd = useCallback(async (e) => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()

    setMarkerPosition({ lat, lng })
    setFormData((prev) => ({
      ...prev,
      latitude: lat.toFixed(6),
      longitude: lng.toFixed(6),
    }))

    // Reverse geocode to fill address details
    const addressData = await reverseGeocode(lat, lng)
    if (addressData) {
      const matchedDistrict = matchDistrict(addressData.district)
      setFormData((prev) => ({
        ...prev,
        state: addressData.state || prev.state,
        district: matchedDistrict || prev.district,
        place: addressData.place || prev.place,
        address: addressData.address || prev.address,
      }))
      setLocationInput(addressData.address || "")
    }
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
              <button 
                type="button" 
                className="sos-get-location-btn"
                onClick={getCurrentLocation}
                disabled={locationLoading}
              >
                {locationLoading ? (
                  <span>📍 {t('sos.location.detecting', 'Detecting...')}</span>
                ) : (
                  <span>📍 {t('sos.location.useMyLocation', 'Use My Location')}</span>
                )}
              </button>
            </div>

            {locationError && (
              <div className="sos-location-error">
                <span>⚠️ {locationError}</span>
              </div>
            )}

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
