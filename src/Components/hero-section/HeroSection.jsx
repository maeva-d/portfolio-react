// import { useRef } from "react";
// Style
import "../hero-section/heroSection.scss";
// Components
import heroImage from "../../assets/pictures/neon-keyboard-unsplash.jpg";
import CTAButton from "../CTA-button/CTAButton.jsx";

const handleClick = () => {
  const element = document.getElementById("about-me");
  element?.scrollIntoView();
};

const HeroSection = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="hero-image-JS" />
      <div>
        <h2>
          Une conception exquise, codée avec précision pour un portfolio élégant
          et percutant.
        </h2>
        <CTAButton onClick={handleClick} text="Explorer"></CTAButton>
      </div>
    </section>
  );
};

export default HeroSection;
