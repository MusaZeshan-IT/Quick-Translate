import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer.jsx';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Services from './pages/Services.jsx';
import AboutUs from './pages/AboutUs.jsx';
import './App.css';
import NavMenu from './components/common/NavMenu.jsx';

const App = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  function handleCloseNavMenu() {
    setShowNavMenu(false);
  }
  function handleOpenNavMenu() {
    setShowNavMenu(true);
  }

  return (
    <div className='app'>
      <Router>
        <NavMenu showNavMenu={showNavMenu} handleCloseNavMenu={handleCloseNavMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
