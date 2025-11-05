import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Accueil from './pages/Accueil';
import About from './pages/About';
import Skills from './pages/Skills';
import Projet from './pages/Projet';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Footer from './pages/Footer';
import Rent from './pages/Rent';
import CashPlus from './pages/CashPlus';
import PortfolioDemo from "./pages/PortfolioDemo";
import ScrollToTop from "./ScrollToTop";

import './App.css';

function App() {
  const location = useLocation();

  // Cacher Menu et Footer uniquement dans PortfolioDemo
const hideLayout = location.pathname === "/p3" || location.pathname === "/p1"|| location.pathname === "/p2";
  

  return (
    <>
      {!hideLayout && <Menu />}
<ScrollToTop />
      <Routes>
        {/* Page principale avec toutes les sections */}
        <Route
          path="/"
          element={
            <>
              <Accueil />
              <About />
              <Skills />
              <Projet />
              <Contact />
            </>
          }
        />

        {/* Routes spécifiques si besoin */}
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/contact" element={<Contact />} />

        {/* Autres pages */}
        <Route path="/p1" element={<Rent />} />
        <Route path="/p2" element={<CashPlus />} />

        {/* Portfolio Demo */}
        <Route path="/p3" element={<PortfolioDemo />} />

        {/* Route fallback (404) */}
        <Route path="*" element={<Accueil />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
