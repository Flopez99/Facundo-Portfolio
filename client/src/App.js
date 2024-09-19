import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PlaygroundPage from './pages/PlaygroundPage'
import ProjectsPage from './pages/ProjectsPage'

import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/playground" element={<PlaygroundPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </BrowserRouter>
  </React.StrictMode>
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;