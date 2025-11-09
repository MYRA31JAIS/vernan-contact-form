import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-links">
          <button onClick={() => navigate('/services')} className="nav-link-btn">Services</button>
          <button onClick={() => navigate('/portfolio')} className="nav-link-btn">Portfolio</button>
          <a href="#story">Our Story</a>
          <a href="#varnan">Varnan</a>
          <button className="get-in-touch-btn" onClick={() => navigate('/contact')}>
            Get in Touch
          </button>
        </div>
      </nav>

      <div className="home-content">
        <div className="logo-section">
          <div className="mandala-bg"></div>
          <div className="logo">
            <span className="v-letter">V</span>
            <span className="films-text">Films</span>
          </div>
        </div>

        <div className="hero-section">
          <h1 className="hero-title">Varnan is where stories find their voice and form</h1>
          <p className="hero-subtitle">Films . Brands . Art</p>
          
          <div className="hero-description">
            <p>Since 2009, V'ne been telling stories - stories of people, their journeys, and the causes that shape them.</p>
            <p>Some begin in polished boardrooms, others in humble village squares. But every story starts the same way: with a conversation, a vision, and a promise to capture what truly matters.</p>
            <p>V doesn't just tell stories. - V honors them.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
