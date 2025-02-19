import React from 'react';
import './DateCards.css';

const DateCards = () => {
  const dates = [
    {
      title: "Registration Start",
      description: "Registrations starts, register yourself as soon as possible.",
      date: "5th",
      month: "February"
    },
    {
      title: "Registration Ends",
      description: "Registrations ends, get your name registered by this date",
      date: "5th",
      month: "March"
    },
    {
      title: "Hackathon Starts",
      description: "Get your programming skills ready as the event will start soon.",
      date: "20th",
      month: "March"
    },
    {
      title: "Hackathon Ends",
      description: "36 hour long hackathon will end and winners will be announced.",
      date: "22nd",
      month: "March"
    }
  ];

  return (
    <div className="dates-wrapper">
      <div className="dates-grid">
        {dates.map((item, index) => (
          <div className="date-card" key={index}>
            <div className="face face1">
              <div className="content">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
            <div className="face face2">
              <div className="date-text">
                {item.date} {item.month}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateCards; 