import React, { useEffect } from 'react';
import './PortfolioSection.css';
import OwnCheffImage from './OwnCheff.png';
import GithubGoImage from './GithubGo.png';
import MealFinderImage from './MealFinder.png';
import FocusTimeImage from './FocusTime.png';  // Add FocusTime image

function PortfolioSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);  // Stop observing once animation is triggered
        }
      });
    }, {
      threshold: 0.1,  // 10% of the section is visible before triggering the animation
    });

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <section id="portfolio-section" className="portfolio-section section">
      <div className="portfolio-content">
        <h2>My Portfolio</h2>
        <div className="project-grid">

          {/* GitHubGo Project */}
          <div className="project-item">
            <img src={GithubGoImage} alt="GitHubGo" className="project-image" />
            <div className="project-details">
              <h3>
                <a href="https://github.com/programmersyed/github-go" target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHubGo
                </a>
              </h3>
              <p>A powerful GitHub profile analyzer that provides detailed insights into repositories and contributions, highlighting data-driven problem-solving skills.</p>
              <p className="technologies">
                <strong>Technologies:</strong> React, JavaScript, GitHub API, HTML, CSS, AWS Lambda
              </p>
            </div>
          </div>

          {/* OwnCheff Project */}
          <div className="project-item">
            <img src={OwnCheffImage} alt="OwnCheff" className="project-image" />
            <div className="project-details">
              <h3>
                <a href="https://github.com/android102-spring23-group4/OwnChe5" target="_blank" rel="noopener noreferrer" className="project-link">
                  OwnCheff
                </a>
              </h3>
              <p>An Android app that generates random recipes from around the world, featuring API integration and local data storage for an enriched user experience.</p>
              <p className="technologies">
                <strong>Technologies:</strong> Kotlin, SQLite, API Integration, GitHub
              </p>
            </div>
          </div>

          {/* MealFinder Project */}
          <div className="project-item">
            <img src={MealFinderImage} alt="MealFinder" className="project-image" />
            <div className="project-details">
              <h3>
                <a href="https://github.com/Zeraiz-Shabbir/MealProject" target="_blank" rel="noopener noreferrer" className="project-link">
                  MealFinder 
                </a>
              </h3>
              <p>A recipe search app that lets users find recipes based on available ingredients, making meal planning simple and intuitive.</p>
              <p className="technologies">
                <strong>Technologies:</strong> Kotlin, Android Studio, GitHub, API
              </p>
            </div>
          </div>

          {/* FocusTime Project */}
          <div className="project-item">
            <img src={FocusTimeImage} alt="FocusTime" className="project-image" />
            <div className="project-details">
              <h3>
                <a href="https://github.com/programmersyed/focustime" target="_blank" rel="noopener noreferrer" className="project-link">
                  FocusTime
                </a>
              </h3>
              <p>A productivity app that helps users manage tasks with customizable focus sessions and goal tracking for improved efficiency.</p>
              <p className="technologies">
                <strong>Technologies:</strong> React Native, JavaScript, GitHub
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
