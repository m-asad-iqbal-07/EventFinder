import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h1>Discover Amazing Events Across Pakistan</h1>
        <p className="hero-subtitle">From cultural festivals to tech conferences - find your next experience</p>
        
        <div className="hero-features">
          <div className="feature">
            <span>🎪</span>
            <p>100+ events monthly</p>
          </div>
          <div className="feature">
            <span>📍</span>
            <p>All major cities</p>
          </div>
          <div className="feature">
            <span>🎟️</span>
            <p>Easy registration</p>
          </div>
        </div>

        <button className="cta-button">Explore Events</button>
      </div>
    </section>
  );
};

export default Hero;