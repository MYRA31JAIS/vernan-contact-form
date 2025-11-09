import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    { id: 1, title: 'Project 1' },
    { id: 2, title: 'Project 2' },
    { id: 3, title: 'Project 3' },
    { id: 4, title: 'Project 4' },
    { id: 5, title: 'Project 5' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="portfolio-container">
      <div className="services-logo" onClick={() => navigate('/')}>
        <span className="v-letter-small">V</span>
        <span className="films-text-small">Films</span>
      </div>
      <div className="menu-icon" onClick={() => navigate('/')}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>

      <div className="portfolio-content">
        <div className="camera-illustration"></div>
        
        <div className="portfolio-main">
          <h1 className="portfolio-title">The Highlight Reel</h1>
          <p className="portfolio-subtitle">Watch the magic we've captured</p>

          <div className="video-carousel">
            <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
            
            <div className="carousel-container">
              <div className="film-strip-top">
                {[...Array(12)].map((_, i) => (
                  <div key={`top-${i}`} className="film-hole"></div>
                ))}
              </div>

              <div className="video-display">
                <div className="play-button">▶</div>
                <div className="video-placeholder">
                  <p>Video {currentSlide + 1}</p>
                </div>
              </div>

              <div className="film-strip-bottom">
                {[...Array(12)].map((_, i) => (
                  <div key={`bottom-${i}`} className="film-hole"></div>
                ))}
              </div>
            </div>

            <button className="carousel-btn next" onClick={nextSlide}>›</button>
          </div>

          <div className="carousel-indicators">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="mandala-decoration"></div>
      </div>
    </div>
  );
};

export default Portfolio;
