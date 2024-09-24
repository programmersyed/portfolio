import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home-section">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#portfolio-section">My Portfolio</a>
        </li>
        <li className="navbar-item">
          <a href="#about-section">About</a>
        </li>
        <li className="navbar-item">
          <a href="#contact-section">Contact Me</a> {/* Correct link to contact section */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
