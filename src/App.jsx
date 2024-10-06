// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/header/Header";
import HeroSection from "./Components/hero-section/HeroSection";
import AboutMe from "./Components/about-me-section/AboutMe";
import Skills from "./Components/skills-section/Skills";
import Projects from "./Components/projects-section/Projects";
import ContactMe from "./Components/contactMe-section/ContactMe";

const App = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </>
  );
};

export default App;
