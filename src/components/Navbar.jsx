import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    eventsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">EventFinder</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#events" onClick={scrollToEvents}>Events</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;