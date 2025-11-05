import React, { useEffect, useState } from 'react';
import './Skills.css';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // State pour gérer les catégories dépliées/repliées
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    backend: true,
    methodology: true // Masqué par défaut
  });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 }
    })
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const renderCategory = (category, title, skills) => (
    <motion.div
      className={`skills-category ${!expandedCategories[category] ? 'collapsed' : ''}`}
      variants={itemVariants}
    >
      <div 
        className="skills-title-toggle" 
        onClick={() => toggleCategory(category)}
        aria-expanded={expandedCategories[category]}
        aria-controls={`${category}-skills`}
      >
        <h3 className="skills-title">{title}</h3>
        <span className="toggle-icon">
          {expandedCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      <AnimatePresence>
        {expandedCategories[category] && (
          <motion.div
            id={`${category}-skills`}
            className="skills-list"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {skills.map((skill, i) => (
              <motion.div 
                className="skill-item" 
                variants={itemVariants} 
                key={`${category}-skill-${i}`}
              >
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    variants={progressVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate="visible"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={itemVariants}
        >
          COMPÉTENCES
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={itemVariants}
          transition={{ delay: 0.2 }}
        >
          Mon niveau technique
        </motion.p>

        <motion.div
          className="skills-container"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {renderCategory(
            "frontend",
            "Frontend",
            [
              { name: 'HTML', level: 95 },
              { name: 'CSS', level: 95 },
              { name: 'Bootstrap', level: 90 },
              { name: 'JavaScript', level: 70 },
              { name: 'React Js', level: 85 },
              { name: 'Figma', level: 75 }
            ]
          )}

          {renderCategory(
            "backend",
            "Backend",
            [
              { name: 'PHP', level: 70 },
              { name: 'Laravel', level: 85 },
              { name: 'MongoDB', level: 80 },
              { name: 'MySQL', level: 70 },
              { name: 'Python', level: 70 }
            ]
          )}

          {renderCategory(
            "methodology",
            "Méthodologie",
            [
              { name: 'UML', level: 90 },
              { name: 'Merise', level: 85 },
              { name: 'Agile (Scrum)', level: 80 },
            ]
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;