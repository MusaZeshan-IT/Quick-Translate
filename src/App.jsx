import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavMenu from './components/common/NavMenu.jsx';
import Footer from './components/common/Footer.jsx';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Services from './pages/Services.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Faq from './pages/Faq.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import { NavMenuProvider } from './context/NavMenuContext';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <NavMenuProvider>
        <Router>
          <NavMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogDetails />} />
          </Routes>
          <Footer />
        </Router>
      </NavMenuProvider>
    </div>
  );
};

export default App;
