import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css" 
import L from "leaflet"
import "../styles/sos.css"
import RequiredLabel from "../components/RequiredLabel"

// Fix for default marker icon
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

function LocationMarker({ position, setPosition }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Emergency Location</Popup>
    </Marker>
  )
}

function SOS() {
  const [position, setPosition] = useState({ lat: 17.385, lng: 78.4866 }) // Default to Hyderabad
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  }

  return (
    <div className="sos-container">
      <div className="sos-header">
        <h1>{t('sos.title')}</h1>
        <p>{t('sos.subtitle')}</p>
      </div>

      <div className="sos-form-card">
        <form onSubmit={handleSubmit}>
          {/* Section 1: Personal Information */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">👤</span> {t('sos.personalInfo.title')}
            </h3>
            <div className="form-grid">
              <div className="form-group">
                <RequiredLabel>{t('sos.personalInfo.name')}</RequiredLabel>
                <input type="text" className="form-input" placeholder={t('sos.personalInfo.namePlaceholder')} />
              </div>
              <div className="form-group">
                <RequiredLabel>{t('sos.personalInfo.mobile')}</RequiredLabel>
                <input type="tel" className="form-input" placeholder={t('sos.personalInfo.mobilePlaceholder')} />
              </div>
              <div className="form-group">
                <label className="form-label">{t('sos.personalInfo.email')}</label>
                <input type="email" className="form-input" placeholder={t('sos.personalInfo.emailPlaceholder')} />
              </div>
            </div>
          </div>

          <div className="form-divider"></div>

          {/* Section 2: Emergency Details */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">🚨</span> {t('sos.emergencyDetails.title')}
            </h3>
            
            <div className="form-group">
              <RequiredLabel>{t('sos.emergencyDetails.nature')}</RequiredLabel>
              <select className="form-select">
                <option value="">{t('sos.emergencyDetails.selectNature')}</option>
                <option value="medical">{t('sos.emergencyDetails.medical')}</option>
                <option value="fire">{t('sos.emergencyDetails.fire')}</option>
                <option value="police">{t('sos.emergencyDetails.police')}</option>
                <option value="accident">{t('sos.emergencyDetails.accident')}</option>
                <option value="women_safety">{t('sos.emergencyDetails.womenSafety')}</option>
                <option value="other">{t('sos.emergencyDetails.other')}</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">{t('sos.emergencyDetails.description')}</label>
              <textarea 
                className="form-textarea" 
                rows="3" 
                placeholder={t('sos.emergencyDetails.descriptionPlaceholder')}
              ></textarea>
            </div>
            
            <div className="form-group">
              <label className="form-label">{t('sos.emergencyDetails.severity')}</label>
              <div className="radio-group">
                <label className="radio-label critical">
                  <input type="radio" name="severity" value="critical" />
                  <span className="radio-custom"></span>
                  {t('sos.emergencyDetails.critical')}
                </label>
                <label className="radio-label moderate">
                  <input type="radio" name="severity" value="moderate" />
                  <span className="radio-custom"></span>
                  {t('sos.emergencyDetails.moderate')}
                </label>
                <label className="radio-label low">
                  <input type="radio" name="severity" value="low" />
                  <span className="radio-custom"></span>
                  {t('sos.emergencyDetails.low')}
                </label>
              </div>
            </div>
          </div>

          <div className="form-divider"></div>

          {/* Section 3: Location Details */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">📍</span> {t('sos.locationDetails.title')}
            </h3>
            
            <div className="form-info-box">
              <p>
                <strong>{t('sos.locationDetails.note')}:</strong> {t('sos.locationDetails.instruction')}
              </p>
            </div>

            <div className="map-container">
              <MapContainer 
                center={[17.385, 78.4866]} 
                zoom={13} 
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker position={position} setPosition={setPosition} />
              </MapContainer>
            </div>
            
            <div className="location-inputs">
               <div className="form-group">
                <RequiredLabel>{t('sos.locationDetails.address')}</RequiredLabel>
                <input type="text" className="form-input" placeholder={t('sos.locationDetails.addressPlaceholder')} />
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">{t('sos.locationDetails.district')}</label>
                  <input type="text" className="form-input" placeholder={t('sos.locationDetails.districtPlaceholder')} />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('sos.locationDetails.pincode')}</label>
                  <input type="text" className="form-input" placeholder={t('sos.locationDetails.pincodePlaceholder')} />
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              <span className="btn-icon">🚨</span> {t('sos.submitBtn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SOS