import { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import RequiredLabel from '../components/RequiredLabel';  // <-- imported component
import '../styles/sos.css';

const SOS = () => {
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
      alert('Please fill all mandatory fields');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Emergency request submitted successfully!');
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

  return (
    <div className="sos-container">
      <div className="emergency-banner">
        <span className="warning-icon">⚠️</span>
        THIS IS AN EMERGENCY FACILITY. USERS ARE ADVISED TO USE THIS SERVICE CAREFULLY.
      </div>

      <h1 className="page-title">Request Help</h1>

      <form onSubmit={handleSubmit} className="sos-form">
        <div className="form-sections">

          {/* SECTION 1: PERSONAL INFO */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-icon">👤</span>
              <h2>Personal Info</h2>
              <span className="step-badge">1</span>
            </div>

            <div className="form-group">
              <RequiredLabel>Name</RequiredLabel>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group">
              <RequiredLabel>Mobile No</RequiredLabel>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile No"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group">
              <RequiredLabel>Event Type</RequiredLabel>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
              >
                <option value="">-- Select --</option>
                <option value="Medical Emergency">Medical Emergency</option>
                <option value="Fire">Fire</option>
                <option value="Accident">Accident</option>
                <option value="Crime">Crime</option>
                <option value="Natural Disaster">Natural Disaster</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <RequiredLabel>Gender</RequiredLabel>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleInputChange}
                  />
                  Male
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleInputChange}
                  />
                  Female
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Transgender"
                    checked={formData.gender === 'Transgender'}
                    onChange={handleInputChange}
                  />
                  Transgender
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Additional Info :</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Additional Information"
                rows="4"
              />
            </div>

            <p className="mandatory-note">* fields are mandatory</p>
          </div>

          {/* SECTION 2: MAP */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-icon">📍</span>
              <h2>Location Map</h2>
              <span className="step-badge">2</span>
            </div>

            <div className="form-group">
              <input
                type="text"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                placeholder="Type your location here"
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

            <p className="map-note">NB: Drag the marker to redefine the position</p>
          </div>

          {/* SECTION 3: LOCATION INFO */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-icon">📋</span>
              <h2>Location Info</h2>
              <span className="step-badge">3</span>
            </div>

            <div className="form-group">
              <RequiredLabel>State</RequiredLabel>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <RequiredLabel>District</RequiredLabel>
              <select
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                required
              >
                <option value="">-- Select --</option>
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

            <div className="form-group">
              <RequiredLabel>Place</RequiredLabel>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                placeholder="Place"
                required
              />
            </div>

            <div className="form-group">
              <RequiredLabel>Address</RequiredLabel>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <RequiredLabel>Latitude</RequiredLabel>
              <input
                type="text"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
                placeholder="Latitude"
                readOnly
              />
            </div>

            <div className="form-group">
              <RequiredLabel>Longitude</RequiredLabel>
              <input
                type="text"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
                placeholder="Longitude"
                readOnly
              />
            </div>

            <p className="mandatory-note">* fields are mandatory</p>
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
            placeholder="Enter captcha here"
            className="captcha-input"
          />
        </div>

        {/* BUTTONS */}
        <div className="form-actions">
          <button type="button" onClick={handleClear} className="btn-clear">
            Clear
          </button>
          <button type="submit" className="btn-submit">
            Request Help
          </button>
        </div>
      </form>
    </div>
  );
};

export default SOS;