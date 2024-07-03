import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styling/Navbar.css';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const  toggleNavbar = ()=>{
        setIsOpen(!isOpen);
    }

    return(
        <nav className="navBar">
            <div className="navbar-container">
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/playground">Playground</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;