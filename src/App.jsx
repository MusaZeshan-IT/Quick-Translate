import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavMenu from './components/common/NavMenu.jsx';
import Footer from './components/common/Footer.jsx';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Services from './pages/Services.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Faq from './pages/Faq.jsx';
import Error404 from './pages/Error404.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import Courses from './pages/Courses.jsx';
import CourseDetails from './pages/CourseDetails.jsx';
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
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseUrlName" element={<CourseDetails />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <Footer />
        </Router>
      </NavMenuProvider>
    </div>
  );
};

export default App;
