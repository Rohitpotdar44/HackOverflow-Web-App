import React from 'react';
import './Winners.css';

// CDN URLs for winner images
const winnerImages = [
  {
    id: 1,
    src: "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/Gallery/Winners/First.webp",
    alt: "First Place Winner"
  },
  {
    id: 2,
    src: "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/Gallery/Winners/Second.webp",
    alt: "Second Place Winner"
  },
  {
    id: 3,
    src: "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/Gallery/Winners/Third.webp",
    alt: "Third Place Winner"
  },
  // Add more winners if needed
];

const Winners = () => {
  return (
    <section className="winners-section">
      <h2 className="winners-title">Winners of HackOverflow</h2>
      <div className="winners-gallery">
        {winnerImages.map((winner) => (
          <div key={winner.id} className="winner-card">
            <img src={winner.src} alt={winner.alt} className="winner-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Winners;
