import React from 'react';
import { Link } from 'react-router-dom';
import './Projet.css';
import { FaTools } from "react-icons/fa"; // icône outils
import { FaLaptopCode } from "react-icons/fa"; // icône code
import { FaCogs } from "react-icons/fa"; // icône engrenagesb
import { FaRocket } from "react-icons/fa";


const Projet = () => {
  const projects = [
    {
      id: 1,
      image: 'loca.png',
      title: "Car Rental Platform",
      description: "Plateforme complète de location de voitures avec interface client et administration.",
      technologies: ["HTML5", "CSS", "Bootstrap", "Laravel", "React JS"],
      route: "/p1"
    },
    {
      id: 2,
      image: 'cash.png',
      title: "Cash Plus Management",
      description: "Solution de gestion d'agence Cash Plus avec espace client et tableau de bord administrateur.",
      technologies: ["HTML5", "CSS", "Bootstrap", "Laravel", "React JS"],
      route: "/p2"
    },
    {
      id: 3,
      image: 'portfolio.png',
      title: "ImaDev",
      description: "Mon portfolio personnel présentant mes compétences en développement web full-stack, mes projets et mon parcours.",
      technologies: ["HTML5", "CSS", "Bootstrap", "React JS"],
      route: "/p3"
    },
    {
      id: 4,
      image: 'test.png',
      title: "EasyCV",
      description: "EasyCV : générateur de CV rapide et facile en quelques clics.",
      technologies: ["HTML5", "CSS", "Bootstrap","Laravel","React JS"],
    }
  ];

  return (
    <section id="projet" className="projet-section">
      <h2 className="section-title">Mes Projets</h2>
      <p className="section-subtitle">Découvrez mes réalisations récentes</p>

      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>

            <div className="project-details">
              <p className="project-description">{project.description}</p>

              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-item">{tech}</span>
                ))}
              </div>

              <div className="project-btn">
                {project.route ? (
                  <Link to={project.route} className="btn-link">
                    Voir les détails
                    <span className="btn-arrow">→</span>
                  </Link>
                ) : (
                  <span className="btn-disabled" >
                    En cours de développement <FaCogs className="dev-icon" />
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projet;
