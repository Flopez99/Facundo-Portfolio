import React from 'react';
import './styling/index.css';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PlaygroundPage from './pages/PlaygroundPage'
import ProjectsPage from './pages/ProjectsPage'

import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
      <Footer/>
    </>

  );
}

export default App;