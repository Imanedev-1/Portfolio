import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // 🔹 Ouvrir / fermer menu mobile
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // 🌗 Charger le thème depuis le localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  // 🌗 Appliquer le thème à chaque changement
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
    
    // Mettre à jour les variables CSS selon le thème
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--text-primary', '#1a1a1a');
      root.style.setProperty('--text-secondary', '#666666');
      root.style.setProperty('--nav-bg', 'rgba(255, 255, 255, 0.95)');
      root.style.setProperty('--menu-backdrop', 'rgba(255, 255, 255, 0.98)');
      root.style.setProperty('--hamburger-layer-color', '#1a1a1a');
      root.style.setProperty('--hover-bg', 'rgba(229, 62, 62, 0.08)');
    } else {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#aaaaaa');
      root.style.setProperty('--nav-bg', 'rgba(18, 18, 18, 0.95)');
      root.style.setProperty('--menu-backdrop', 'rgba(18, 18, 18, 0.98)');
      root.style.setProperty('--hamburger-layer-color', '#ffffff');
      root.style.setProperty('--hover-bg', 'rgba(229, 62, 62, 0.1)');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // 📍 Détection du scroll pour l'effet de navigation
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Détection de la section active
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔗 Scroll automatique si l'URL contient #id
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(location.hash.substring(1));
      }
    }
  }, [location]);

  // 🖱️ Fermer menu si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('.hamburger')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // 🚫 Empêcher scroll du body quand menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [menuOpen]);

  // 📱 Fermer le menu quand on redimensionne vers desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Liens de navigation
  const navLinks = [
    { to: "/#accueil", text: "Accueil", id: "accueil" },
    { to: "/#about", text: "À propos", id: "about" },
    { to: "/#skills", text: "Compétences", id: "skills" },
    { to: "/#projet", text: "Projets", id: "projet" },
    { to: "/#contact", text: "Contact", id: "contact" }
  ];

  return (
    <div className="menu-container" ref={menuRef}>
      {/* En-tête mobile */}
      <div className={`mobile-header ${scrolled ? 'scrolled' : ''}`}>
        <img 
          src="/logo.png" 
          alt="Logo" 
          className='mobile-logo'
          onClick={closeMenu}
        />
        <div className="mobile-controls">
          {/* 🌙🌞 Bouton Dark/Light version mobile - ICÔNES INVERSÉES */}
          <button 
            className="theme-switcher-mobile" 
            onClick={toggleTheme}
            aria-label={`Changer vers le mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
          >
            {theme === 'dark' ? (
  <img src="/moon.png" alt="Mode sombre" />
) : (
  <img src="/sun.png" alt="Mode clair" />
)}

          </button>
          <button 
            className={`hamburger ${menuOpen ? 'is-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Navigation principale */}
      <nav 
        id="main-navigation"
        className={`${menuOpen ? "open" : ""} ${scrolled ? "scrolled" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="nav-content">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className='logo'
            onClick={closeMenu}
          />

          <div className="nav-links">
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                to={link.to}
                onClick={closeMenu}
                className={activeSection === link.id ? 'active' : ''}
                role="menuitem"
                tabIndex={menuOpen ? 0 : -1}
                style={{ '--i': index + 1 }}
              >
                <span className="link-text">{link.text}</span>
                <span className="link-underline"></span>
              </Link>
            ))}
          </div>

          {/* 🌙🌞 Bouton Dark/Light version desktop - ICÔNES INVERSÉES */}
          <div className="theme-switcher-desktop">
            <button 
              onClick={toggleTheme}
              className={`theme-btn ${theme === 'light' ? 'light-active' : ''}`}
              aria-label={`Changer vers le mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
            >
              <span className="theme-icon">
                        {theme === 'dark' ? (
  <img src="/moon.png" alt="Mode sombre" />
) : (
  <img src="/sun.png" alt="Mode clair" />
)}
              </span>
            
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;