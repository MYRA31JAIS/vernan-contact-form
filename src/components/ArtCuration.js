import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css';

const ArtCuration = () => {
  const navigate = useNavigate();

  return (
    <div className="service-detail-container">
      <div className="services-logo" onClick={() => navigate('/')}>
        <span className="v-letter-small">V</span>
        <span className="films-text-small">Films</span>
      </div>
      <div className="menu-icon" onClick={() => navigate('/')}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>

      <div className="service-detail-content">
        <h2 className="service-quote">"V take art where it belongs, to the people." - Vernita Verma</h2>
        
        <button className="back-btn" onClick={() => navigate('/services')}>← Back</button>

        <div className="service-layout">
          <div className="service-image-section">
            <div className="service-image art-curation-img"></div>
            <button className="cta-btn">Let's bring V what you love</button>
          </div>

          <div className="service-info-section">
            <h3 className="service-name">Art Curation</h3>
            <button className="explore-btn" onClick={() => navigate('/portfolio')}>
              Explore Now →
            </button>

            <div className="service-description">
              <p>Art isn't meant to sit on distant walls - it's meant to breathe, to travel, to inspire.</p>
              <p>Through every festival, every performance, and every gathering, we help stories find their audience and their people.</p>
              <p>V curates:</p>
              <ul>
                <li>Art Festivals</li>
                <li>Live Performances</li>
                <li>Community Events</li>
                <li>Cultural Storytelling</li>
              </ul>
            </div>

            <div className="service-icons">
              <div className="icon-item">
                <div className="icon gallery-icon"></div>
              </div>
              <div className="icon-item">
                <div className="icon event-icon"></div>
              </div>
              <div className="icon-item">
                <div className="icon community-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCuration;
