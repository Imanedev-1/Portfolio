import React, { useState, useEffect } from 'react';
import './Accueil.css';

function Accueil() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Préchargement de l'image pour éviter les flashs
    const img = new Image();
    img.src = "hero.png";
  }, []);

  return (
    <div className="accueil-container" id='accueil'>
      {/* Sidebar Réseaux Sociaux - Desktop seulement */}
      <div className="social-sidebar">
        <div className="vertical-line"></div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/imane-belouarrat-b728a3340" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/ima11____" target="_blank" rel="noopener noreferrer" aria-label="Profil Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="vertical-line"></div>
      </div>

      {/* Contenu principal */}
      <div className="content-wrapper">
        {/* Section texte */}
        <div className={`text-section ${isLoaded ? 'fade-in' : ''}`}>
          <div className="title-container">
            <h1 className="accueil-title animate-title">Bonjour, je suis Imane</h1>
          </div>
          
          {/* Sous-titre avec ligne fixe */}
          <div className="subtitle-with-line">
            <h3 className="accueil-subtitle typewriter">Développeuse Web Full-Stack</h3>
            <div className="fixed-line"></div>
          </div>
          
          <p className="accueil-description">
           Spécialisée dans le développement web, je conçois des plateformes performantes et ergonomiques, adaptées aux besoins des utilisateurs
          </p>

          <a href="#contact" className="contact-button">
            <span>Collaborons ensemble</span>
            <i className="fas fa-handshake"></i>
          </a>
        </div>

        {/* Section image */}
        <div className="image-section">
          <img 
            src="hero.png" 
            alt="Imane - Développeuse Web Full-Stack" 
            className="breathing-image" 
            loading="eager"
          />
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
}

export default Accueil;