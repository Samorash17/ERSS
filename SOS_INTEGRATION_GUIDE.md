# SOS Form Integration Guide

## Setup Instructions

### 1. Google Maps API Key Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Geocoding API (optional, for address lookup)
4. Create credentials (API Key)
5. Copy the API key

### 2. Environment Configuration

1. Create a `.env` file in the ERSS directory:
   ```bash
   cp .env.example .env
   ```

2. Add your Google Maps API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. Update `sos.jsx` to use the environment variable:
   ```javascript
   <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
   ```

### 3. Add Route to Your App

Update your `App.jsx` or router configuration to include the SOS page:

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SOS from './pages/sos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sos" element={<SOS />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}
```

## Database Integration (Future)

The form is structured to easily integrate with a backend. Here's how:

### Form Data Structure

```javascript
{
  name: string,
  mobile: string,
  eventType: string,
  additionalInfo: string,
  gender: string,
  state: string,
  district: string,
  place: string,
  address: string,
  latitude: string,
  longitude: string,
  captcha: string,
  timestamp: Date (add when submitting)
}
```

### API Integration Steps

1. **Create API endpoint** (e.g., `/api/emergency-requests`)

2. **Update handleSubmit function**:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validation
  if (!formData.name || !formData.mobile || !formData.eventType) {
    alert('Please fill all mandatory fields');
    return;
  }

  try {
    const response = await fetch('/api/emergency-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      })
    });

    if (response.ok) {
      alert('Emergency request submitted successfully!');
      handleClear();
    } else {
      alert('Failed to submit request. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred. Please try again.');
  }
};
```

### Database Schema Example (MongoDB)

```javascript
const emergencyRequestSchema = {
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  eventType: { type: String, required: true },
  additionalInfo: String,
  gender: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  place: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
};
```

## Features Implemented

✅ Three-section form layout (Personal Info, Location Map, Location Info)
✅ Google Maps integration with draggable marker
✅ Click-to-place marker functionality
✅ Automatic latitude/longitude capture
✅ Form validation
✅ Responsive design
✅ Emergency banner warning
✅ Captcha placeholder (implement actual captcha service later)
✅ Clear and Submit buttons
✅ Static data structure ready for database integration

## Next Steps

1. Set up Google Maps API key
2. Implement actual captcha (e.g., Google reCAPTCHA)
3. Create backend API endpoints
4. Add database connection
5. Implement real-time location tracking (optional)
6. Add notification system for emergency responders
7. Implement authentication if needed
