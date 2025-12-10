// src/App.jsx

import React from 'react';
import FAQ from './pages/FAQ.jsx';   // ✅ correct path
import './App.css';
import './index.css';
import './styles/faq.css';           // also adjust path

function App() {
  return (
    <div className="erss-layout">
      {/* 3. Main Content */}
      <main className="erss-main-content">
        <FAQ />
      </main>
    </div>
  );
}

export default App;
