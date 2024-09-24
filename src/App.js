import React from 'react';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import PortfolioSection from './PortfolioSection';
import AboutSection from '../src/AboutSection';
import ContactSection from './ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection /> {/* Add Contact Section here */}
    </div>
  );
}

export default App;
