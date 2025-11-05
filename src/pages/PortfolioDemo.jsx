import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioDemo.css';

function PortfolioDemo() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleClose = () => {
    navigate("/"); // revenir à la page principale
    setTimeout(() => {
      const projetSection = document.getElementById("projet");
      if (projetSection) {
        projetSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const images = [
    { src: "image.png", alt: "Aperçu principal du portfolio" },
    { src: "Capture d'écran 2025-08-19 040500.png", alt: "Section projets" },
    { src: "Capture d'écran 2025-08-19 040611.png", alt: "Section compétences" },
    { src: "Capture d'écran 2025-08-19 040819.png", alt: "Section contact" },
    { src: "Capture d'écran 2024-10-21 031447.png", alt: "Footer" }
  ];

  const features = [
    {
      title: "Design moderne et épuré",
      description: "Mise en page élégante et professionnelle avec des couleurs douces, des coins arrondis et un espacement clair."
    },
    {
      title: "Présentation des projets",
      description: "Mise en avant de mes meilleurs projets avec descriptions détaillées et technologies utilisées."
    },
    {
      title: "Aperçu des compétences",
      description: "Présentation de mes compétences en front-end, back-end, méthodologie de travail."
    },
    {
      title: "Optimisation mobile",
      description: "Expérience fluide et adaptée sur tous les appareils et écrans."
    },
    {
      title: "Performances optimisées",
      description: "Temps de chargement rapides et navigation agréable, même en cas de fort trafic."
    }
  ];

  const techStack = ["HTML5", "CSS3", "React", "Bootstrap"];

  return (
    <div className={`portfolio-demo ${isVisible ? 'visible' : ''}`}>
      <div className="portfolio-demo__background">
        <div className="portfolio-demo__orb portfolio-demo__orb--1"></div>
        <div className="portfolio-demo__orb portfolio-demo__orb--2"></div>
        <div className="portfolio-demo__orb portfolio-demo__orb--3"></div>
      </div>

      <div className="portfolio-demo__header">
        <button className="portfolio-demo__close-btn" onClick={handleClose}>
          Fermer
        </button>
        <h1 className="portfolio-demo__title">
          <span className="portfolio-demo__title-text">ImaDev</span>
        </h1>
        <p className="portfolio-demo__intro">
Un portfolio personnel mettant en avant mes compétences en développement web full-stack. Il présente mes projets, mon expertise et une section contact élégante        </p> <br />
        <img src="image.png" alt="" className="portfolio-demo__deco"/>
      </div>

      <div className="portfolio-demo__content">
        {/* Galerie */}
        <div className="portfolio-demo__gallery">
          <h2 className="portfolio-demo__section-title">Quelques images</h2>
          <div className="portfolio-demo__image-grid">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="portfolio-demo__image-card"
                onClick={() => setSelectedImage(image.src)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="portfolio-demo__image-wrapper">
                  <img src={image.src} alt={image.alt} />
                  <div className="portfolio-demo__image-overlay">
                    <div className="portfolio-demo__zoom-indicator">
                      <svg className="portfolio-demo__zoom-icon" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                      </svg>
                      <span>Cliquer pour agrandir</span>
                    </div>
                  </div>
                </div>
                <p className="portfolio-demo__image-caption">{image.alt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fonctionnalités */}
        <div className="portfolio-demo__features">
          <div className="portfolio-demo__card portfolio-demo__card--floating">
            <h2 className="portfolio-demo__section-title">Fonctionnalités Clés</h2>
            <div className="portfolio-demo__features-list">
              {features.map((feature, index) => (
                <div key={index} className="portfolio-demo__feature-item" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <div className="portfolio-demo__feature-icon">✓</div>
                  <div className="portfolio-demo__feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stack Tech */}
          <div className="portfolio-demo__card portfolio-demo__card--floating">
            <h2 className="portfolio-demo__section-title">Stack Technologique</h2>
            <div className="portfolio-demo__tech-bubbles">
              {techStack.map((tech, index) => (
                <div key={index} className="portfolio-demo__tech-bubble" style={{ animationDelay: `${0.8 + index * 0.05}s` }}>
                  {tech}
                </div>
              ))}
            </div>
            
          </div>
          
<a 
            href="https://imaneb-dev.netlify.app" 
            className={`portfolio-demo__link ${isHoveringLink ? 'hovered' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHoveringLink(true)}
            onMouseLeave={() => setIsHoveringLink(false)}
          >
            <span>Visiter le Portfolio</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
        
      </div>
      {/* Modal image */}
      {selectedImage && (
        <div className="portfolio-demo__modal active" onClick={() => setSelectedImage(null)}>
          <div className="portfolio-demo__modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="portfolio-demo__modal-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage} alt="Agrandissement" />
          </div>

        </div>
      )}
    </div>
  );
}

export default PortfolioDemo;
