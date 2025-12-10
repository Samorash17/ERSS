// src/App.jsx

import React from 'react';
import FAQ from './FAQ';
import './App.css';
import './index.css';
import './faq.css';

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
