import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import EventCard from './components/EventCard';
import './components/styles/App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    import('./data/events.json').then(data => {
      setEvents(data.default);
      setFilteredEvents(data.default);
    });
  }, []);

  const handleSearch = (query) => {
    const filtered = events.filter(event =>
      event.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <h2 id="events">Featured Events</h2>
        <div className="events-grid">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
