// Style
import "../hero-section/heroSection.scss";
// Components
import heroImage from "../../assets/pictures/neon-keyboard-unsplash.jpg";
import CTAButton from "../CTA-button/CTAButton.jsx";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="hero-image-JS" />
      <div>
        <h2>
          Une conception exquise, codée avec précision pour un portfolio élégant
          et percutant.
        </h2>
        <CTAButton text={"Explorer"}></CTAButton>
      </div>
    </section>
  );
};

export default HeroSection;
