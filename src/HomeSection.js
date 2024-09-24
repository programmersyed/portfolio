import React, { useState, useEffect } from 'react';
import './HomeSection.css';
import profileImage from './ibrahim.jpg'; // Adjust the path to where your image is stored

function HomeSection() {
  const titles = ["Programmer", "Web Developer", "Mobile App Developer", "Software Developer"];
  const [currentTitle, setCurrentTitle] = useState(0);

  // Cycle through the titles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [titles.length]);

  return (
    <section id="home-section" className="home-section">
      <div className="home-content">
        <div className="profile-container">
          <img src={profileImage} alt="Ibrahim Syed" className="profile-image" />
        </div>
        <div className="text-content">
          <h1>Ibrahim Syed</h1>
          <p className="animated-text">{titles[currentTitle]}</p>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
