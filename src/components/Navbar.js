// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" className="nav-link"><FaHome /> Home</Link></li>
        <li><Link to="/about" className="nav-link"><FaUser /> About</Link></li>
        <li><Link to="/contact" className="nav-link"><FaEnvelope /> Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
