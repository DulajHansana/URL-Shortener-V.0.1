
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Background from './pages/background';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;