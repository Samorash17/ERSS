import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './i18n/config';
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
)
