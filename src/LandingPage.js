import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar'; // Import Navbar component
import HomeSection from './HomeSection'; // Import HomeSection component

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar /> {/* Navbar component */}
      
      {/* Home Section */}
      <HomeSection /> {/* Use HomeSection component */}

      {/* About Section */}
      <section id="about-section" className="about-section">
        <h2>About Me</h2>
        <p>I am passionate about web development, mobile app development, and software engineering.</p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio-section" className="portfolio-section">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Project 1: Web Application</h3>
            <p>A React-based web application I built.</p>
          </div>
          <div className="project-item">
            <h3>Project 2: Mobile App</h3>
            <p>A mobile app built using Kotlin.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="contact-section">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me at: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>Thank you for visiting my portfolio!</p>
      </footer>
    </div>
  );
}

export default LandingPage;
