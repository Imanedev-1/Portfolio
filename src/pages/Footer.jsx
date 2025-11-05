import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Créer des particules de feu
    const newParticles = Array(5).fill().map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 30 + 35,
      size: Math.random() * 5 + 3,
      duration: Math.random() * 0.5 + 0.5,
    }));

    setParticles(newParticles);

    // Supprimer les particules après animation
    setTimeout(() => {
      setParticles([]);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer" aria-label="Pied de page">
      <div className="footer-divider"></div>

      <div className="footer-container">
        <div className="footer-left">
          <h2><span className="name animate-char">Imane</span></h2>
          <p className="footer-subtitle">Full stack web developer</p>
        </div>

       <div className="footer-navigation">
  <a href="#about" className="footer-nav-link">À propos</a>
  <a href="#skills" className="footer-nav-link">Compétences</a>
  <a href="#projet" className="footer-nav-link">Projets</a>
  <a href="#contact" className="footer-nav-link">Contact</a>
</div>


        <div className="footer-right">
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/imane-belouarrat-b728a3340"
              className="social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://www.instagram.com/ima11____"
              className="social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://github.com/imanedev-1"
             className="social-link"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
                <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>

    <div className="footer-bottom">
  <p>© {new Date().getFullYear()} Développé par Imane❤️ — Tous droits réservés</p>
</div>


      <button
        className={`up-arrow ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Retour en haut"
        title="Retour en haut"
      >
        <i className="fas fa-arrow-up"></i>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="fire-particle"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `fireParticle ${particle.duration}s ease-out forwards`,
            }}
          />
        ))}
      </button>
    </footer>
  );
};

export default Footer;
