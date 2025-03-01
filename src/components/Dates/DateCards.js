import React, { useEffect, useRef } from 'react';
import './DateCards.css';

const DateCards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Only apply intersection observer for mobile devices
    if (window.innerWidth <= 768) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Check if the card is mostly visible
            if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
              // Remove active class from all other cards
              cardRefs.current.forEach(card => {
                if (card && card !== entry.target) {
                  card.classList.remove('card-active');
                }
              });
              // Add active class to current card
              entry.target.classList.add('card-active');
            } else {
              entry.target.classList.remove('card-active');
            }
          });
        },
        {
          threshold: 0.8, // Increased threshold to ensure card is mostly visible
          rootMargin: '-10% 0px', // Adjust trigger area to be more precise
        }
      );

      // Observe all cards
      cardRefs.current.forEach((card) => {
        if (card) observer.observe(card);
      });

      return () => {
        cardRefs.current.forEach((card) => {
          if (card) observer.unobserve(card);
        });
      };
    }
  }, []);

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
      date: "10th",
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
          <div 
            className="date-card"
            key={index}
            ref={el => cardRefs.current[index] = el}
          >
            <div className="face face1">
              <div className="content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
            <div className="face face2">
              <div className="date-text" id='light-green-grey'>
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