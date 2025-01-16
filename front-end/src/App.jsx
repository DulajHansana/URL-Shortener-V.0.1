
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/Home" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;