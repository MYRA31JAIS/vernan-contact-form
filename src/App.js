import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import Services from './components/Services';
import ArtCuration from './components/ArtCuration';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/art-curation" element={<ArtCuration />} />
          <Route path="/services/film-production" element={<ArtCuration />} />
          <Route path="/services/branding" element={<ArtCuration />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
