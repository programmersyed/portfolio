import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact-section" className="contact-section section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via email, phone, or check out my LinkedIn and GitHub profiles below:</p>
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:asyed20@student.gsu.edu">asyed20@student.gsu.edu</a> or <a href="mailto:abrahamsyed10@gmail.com">abrahamsyed10@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+14706525531">470-652-5531</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abraham-syed/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/abraham-syed/</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/programmersyed" target="_blank" rel="noopener noreferrer">github.com/programmersyed</a></p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
