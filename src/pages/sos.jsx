import { useState, useCallback } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import "../styles/sos.css"

const SOS = () => {
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
      alert("Please fill all mandatory fields")
      return
    }

    if (formData.captcha !== captchaText) {
      alert("Invalid captcha. Please try again.")
      generateCaptcha()
      setFormData((prev) => ({ ...prev, captcha: "" }))
      return
    }

    console.log("Form submitted:", formData)
    alert("Emergency request submitted successfully!")
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
        <span>THIS IS AN EMERGENCY FACILITY. USERS ARE ADVISED TO USE THIS SERVICE CAREFULLY.</span>
      </div>

      <h1 className="sos-page-title">
        <span className="sos-title-gradient">Request Emergency Help</span>
      </h1>

      <form onSubmit={handleSubmit} className="sos-form">
        <div className="sos-form-sections">
          {/* SECTION 1: PERSONAL INFO */}
          <div className="sos-form-section">
            <div className="sos-section-header">
              <span className="sos-section-icon">👤</span>
              <h2>Personal Information</h2>
              <span className="sos-step-badge">1</span>
            </div>

            <div className="sos-form-group">
              <label>
                Name <span className="sos-required-star">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
              
            <div className="sos-form-group">
              <label>
                Mobile No <span className="sos-required-star">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter 10 digit mobile number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="sos-form-group">
              <label>
                {/* Event Type <span className="sos-required-star">*</span> */}
              </label>
              <select name="eventType" value={formData.eventType} onChange={handleInputChange} required>
                <option value="">-- Select Emergency Type --</option>
                <option value="Medical Emergency">🏥 Medical Emergency</option>
                <option value="Fire">🔥 Fire</option>
                <option value="Accident">🚗 Accident</option>
                <option value="Crime">🚨 Crime</option>
                <option value="Natural Disaster">🌪️ Natural Disaster</option>
                <option value="Other">📋 Other</option>
              </select>
            </div>

            <div className="sos-form-group sos-gender-group">
              <label>
                Gender <span className="sos-required-star">*</span>
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
                  <span>Male</span>
                </label>
                <label className="sos-radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleInputChange}
                  />
                  <span>Female</span>
                </label>
                <label className="sos-radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Transgender"
                    checked={formData.gender === "Transgender"}
                    onChange={handleInputChange}
                  />
                  <span>Transgender</span>
                </label>
              </div>
            </div>

            <div className="sos-form-group sos-textarea-group">
              <label>Additional Info</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Provide any additional details about the emergency"
                rows="4"
              />
            </div>

            <p className="sos-mandatory-note">* Fields are mandatory</p>
          </div>

          {/* <div className="form-divider"></div> */}

          {/* Section 3: Location Details */}
          <div className="sos-form-section">
            <div className="sos-section-header">
              <span className="sos-section-icon">📍</span>
              <h2>Emergency Location</h2>
              <span className="sos-step-badge">2</span>
            </div>

            <div className="sos-form-group">
              <input
                type="text"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                placeholder="🔍 Search your location here..."
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

            <p className="sos-map-note">💡 Drag the marker to adjust your exact location</p>

            <div className="sos-coordinates-display">
              <div className="sos-coordinate-item">
                <span className="sos-coord-label">Latitude:</span>
                <span className="sos-coord-value">{formData.latitude || "---"}</span>
              </div>
              <div className="sos-coordinate-item">
                <span className="sos-coord-label">Longitude:</span>
                <span className="sos-coord-value">{formData.longitude || "---"}</span>
              </div>
            </div>
          </div>

          {/*SECTION 3: LOCATION INFO*/}
          <div className="sos-form-section">
            <div className="sos-section-header">
              <span className="sos-section-icon">📋</span>
              <h2>Address Details</h2>
              <span className="sos-step-badge">3</span>
            </div>

            <div className="sos-form-group">
              <label>
                State <span className="sos-required-star">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
                required
              />
            </div>

            <div className="sos-form-group">
              <label>
                District <span className="sos-required-star">*</span>
              </label>
              <select name="district" value={formData.district} onChange={handleInputChange} required>
                <option value="">-- Select District --</option>
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
                Place <span className="sos-required-star">*</span>
              </label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                placeholder="Enter area/locality name"
                required
              />
            </div>

            <div className="sos-form-group sos-textarea-group">
              <label>
                Address <span className="sos-required-star">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter complete address with landmarks"
                rows="4"
                required
              />
            </div>

            <p className="sos-mandatory-note">* Fields are mandatory</p>
          </div>
        </div>

        {/* CAPTCHA */}
        <div className="sos-captcha-section">
          <div className="sos-captcha-display">
            <span className="sos-captcha-text">{captchaText}</span>
            <button type="button" className="sos-captcha-refresh" onClick={generateCaptcha} aria-label="Refresh captcha">
              🔄
            </button>
          </div>

          <input
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleInputChange}
            placeholder="Enter the characters shown above"
            className="sos-captcha-input"
            required
          />
        </div>

        {/* BUTTONS */}
        <div className="sos-form-actions">
          <button type="button" onClick={handleClear} className="sos-btn-clear">
            <span>Clear Form</span>
          </button>
          <button type="submit" className="sos-btn-submit">
            <span>🚨 Request Emergency Help</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SOS
