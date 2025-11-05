import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioDemo.css';

function CashPlus() {
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
    { src: "casha.png", alt: "Aperçu principal du portfolio" },
    { src: "cash2.png", alt: "Section projets" },
    { src: "cash3.png", alt: "Section compétences" },
    { src: "cash contact.png", alt: "Section contact" },
    { src: "cash recla.png", alt: "Footer" },
        { src: "con cash.png", alt: "Footer" },
         { src: "cash insc.png", alt: "Footer" },
                  { src: "dash user.png", alt: "Footer" },
                                    { src: "dash recla.png", alt: "Footer" },

    { src: "dash service.png", alt: "Footer" },
        { src: "dash hour.png", alt: "Footer" },




  ];
const features = [
  {
    title: "Design moderne et ergonomique",
    description: "Interface claire et professionnelle avec une navigation fluide et intuitive."
  },
  {
    title: "Page des services",
    description: "Présentation des différents services proposés par l’agence de manière détaillée et accessible."
  },
  {
    title: "Page de contact",
    description: "Formulaire permettant aux clients de poser leurs questions ou demander des informations."
  },
  {
    title: "Page de réclamation",
    description: "Espace dédié pour soumettre une réclamation en ligne et faciliter le suivi des demandes."
  },
  {
    title: "Consultation des horaires de travail",
    description: "Affichage clair des heures d’ouverture et de fermeture de l’agence."
  },
  {
    title: "Gestion des services (admin)",
    description: "Ajout, modification et suppression des services proposés par l’agence."
  },
  {
    title: "Gestion des réclamations (admin)",
    description: "Consultation et traitement des réclamations envoyées par les clients."
  },
  {
    title: "Gestion des utilisateurs (admin)",
    description: "Administration des comptes clients et administrateurs."
  },
  {
    title: "Gestion des horaires (admin)",
    description: "Mise à jour et personnalisation des horaires de travail."
  },
  {
    title: "Optimisation mobile",
    description: "Expérience responsive et adaptée à tous les écrans (mobile, tablette, desktop)."
  },
  {
    title: "Performances optimisées",
    description: "Chargement rapide des pages et communication fluide entre front-end et back-end."
  }
];

  const techStack = ["HTML5", "CSS3", "React", "Bootstrap","Laravel"];

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
          <span className="portfolio-demo__title-text">Cash Plus Management
</span>
        </h1>
        <p className="portfolio-demo__intro">
            Une plateforme web conçue pour digitaliser les services d’une agence et améliorer la relation client. 
Elle permet aux utilisateurs de consulter les services proposés, de contacter l’agence, de soumettre des réclamations en ligne et de consulter les horaires de travail. 
Un tableau de bord administrateur a également été intégré pour gérer les services, les réclamations, les utilisateurs et les horaires de manière simple et efficace.
 </p> <br />
    <img src="casha.png" alt="" className="portfolio-demo__dec"/>
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

export default CashPlus;
