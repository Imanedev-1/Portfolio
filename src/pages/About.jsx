import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="about.jpeg" 
              alt="Photo de Imane, développeuse full-stack" 
              className="profile-image"
            />
          </div>
          
          <div className="about-text">
            <p className="about-paragraph">
              En tant que développeuse web full-stack spécialisée et passionnée, je conçois des solutions web modernes alliant esthétique soignée, performance optimale et expérience utilisateur de qualité.
            </p>

            <p className="about-paragraph">
              Ma formation spécialisée à l'OFPPT, combinée à mes projets personnels, m'a permis d'acquérir une expertise avancée en technologies front-end (<strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>, <strong>React</strong>) ainsi qu'en back-end (<strong>PHP</strong>, <strong>Laravel</strong>, <strong>MySQL</strong>).
            </p>

            <p className="about-paragraph">
              Au sein de l'OFPPT, j'ai eu l'opportunité de travailler sur des projets concrets, d'approfondir mes compétences techniques et de me former aux bonnes pratiques du développement web, tant du côté client que serveur.
            </p>

            <p className="about-paragraph">
              Rigoureuse et attentive à la qualité, je porte un intérêt particulier à l'accessibilité, à l'ergonomie, ainsi qu'à la rédaction d'un code propre et structuré.
            </p>

            <p className="about-paragraph">
              Ce site a été créé pour présenter une sélection de projets réalisés, témoignant de mon évolution et de mes progrès dans le domaine du développement web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;