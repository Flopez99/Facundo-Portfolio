import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styling/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navBar">       
        <a class="navbar-brand" href="/"> &lt;/&gt; Facundo Lopez</a>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/playground">Playground</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
    </nav>
  );
}

export default Navbar;
