import React from "react";
import Accueil from "./Accueil";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Menu from "./Menu";
import Projet from "./Projet";
import App from "../App";
import './Portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <Menu/>
      <Accueil />
      <About />
      <Skills />
      <Projet/>
      <Contact />
      <Footer />
    </div>
  );
}
