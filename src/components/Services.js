import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <div className="services-logo" onClick={() => navigate('/')}>
        <span className="v-letter-small">V</span>
        <span className="films-text-small">Films</span>
      </div>
      <div className="menu-icon" onClick={() => navigate('/')}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>

      <div className="services-content">
        <h1 className="services-title">The storyboard reveals the breadth of our craft.</h1>
        
        <div className="services-grid">
          <div className="service-card" onClick={() => navigate('/services/film-production')}>
            <div className="polaroid">
              <div className="polaroid-image film-production"></div>
              <p className="polaroid-label">Film Production</p>
            </div>
          </div>

          <div className="service-card" onClick={() => navigate('/services/branding')}>
            <div className="polaroid">
              <div className="polaroid-image branding"></div>
              <p className="polaroid-label">Branding</p>
            </div>
          </div>

          <div className="service-card" onClick={() => navigate('/services/art-curation')}>
            <div className="polaroid">
              <div className="polaroid-image art-curation"></div>
              <p className="polaroid-label">Art Curation</p>
            </div>
          </div>
        </div>

        <div className="mandala-border"></div>
      </div>
    </div>
  );
};

export default Services;
