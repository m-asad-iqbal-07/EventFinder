import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p className="event-meta">📅 {event.date} | ⏰ {event.time}</p>
      <p className="event-location">📍 {event.location}</p>
      <p className="event-description">{event.description}</p>
      <button className="register-btn">Register Now</button>
    </div>
  );
};

export default EventCard;
