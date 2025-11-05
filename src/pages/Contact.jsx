import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/manbrwwj', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Message envoyé avec succès !');
        form.reset();
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setStatus('Une erreur est survenue. Réessayez plus tard.');
      console.error('Erreur:', error);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contactez-moi</h2>
        <p className="section-subtitle">Ouverte à toute collaboration ou nouveau projet. N'hésitez pas à me contacter !</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-title">Informations de contact</h3>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <p className="info-label">Email</p>
                          <a   className='a' href="mailto:imaneb.dev@gmail.com">imaneb.dev@gmail.com</a>

              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-content">
                <p className="info-label">Téléphone</p>
                <p className="info-detail">
                 <a  className='a' href="tel:+212650731204">+212 650-731204</a>
                  </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <p className="info-label">Adresse</p>
                <p className="ab">Rabat, Morocco</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/imane-belouarrat-b728a3340" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/ima11____" className="social-link" target="_blank" rel="noopener noreferrer">
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
          
          <form onSubmit={handleSubmit} className="contact-form">
            <h3 className="contact-title">Envoyez un message</h3>
            <div className="form-group">
              <input type="text" name="name" className="form-input" placeholder="Votre nom complet" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" className="form-input" placeholder="Votre email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" className="form-input" placeholder="Sujet" required />
            </div>
            <div className="form-group">
              <textarea name="message" className="form-textarea" placeholder="Votre message" required rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Envoyer <i className="fas fa-paper-plane"></i>
            </button>
            {status && <p className={`form-status ${status.includes('succès') ? 'success' : 'error'}`}>
              {status}
              <button className="close-status" onClick={() => setStatus('')}>&times;</button>
            </p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;