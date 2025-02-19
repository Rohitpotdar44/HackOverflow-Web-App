import React, { useState, useEffect, useCallback } from 'react';
import './gal.css';
import { filterableData } from '../FaceGallery/filterableData';

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState('hackoverflow1');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const filterImages = useCallback((category) => {
    return filterableData.filter(item => item.category === category);
  }, []);

  useEffect(() => {
    setLoading(true);
    const filteredImages = filterImages(selectedTab);
    setImages(filteredImages);
    setLoading(false);
  }, [selectedTab, filterImages]);

  const tabs = [
    { id: 'hackoverflow1', label: 'HackOverflow 1.0' },
    { id: 'hackoverflow2', label: 'HackOverflow 2.0' },
    { id: 'winners', label: "Winners" },
    { id: 'home', label: 'Back to Home', href: '/#home' }
  ];

  const handleTabClick = (tab) => {
    if (tab.href) {
      window.location.href = tab.href;
    } else {
      setSelectedTab(tab.id);
      setLoading(true);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title gradient-text">Memories of HackOverflow</h1>
      
      <div className="tabs-container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${selectedTab === tab.id ? 'active' : ''} ${tab.href ? 'home-tab' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <div className="image-box">
          <div className="image-grid">
            {images.map((item, index) => (
              <div 
                key={index} 
                className="image-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleImageClick(item.image)}
              >
                <img
                  src={item.image}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Selected" 
              onClick={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

