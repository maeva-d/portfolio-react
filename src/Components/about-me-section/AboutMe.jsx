import "../../common-rules.scss";
import "./aboutMe.scss";
import image from "../../assets/pictures/blurry-unsplash.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <aside>
          <h4>L'alternance, une opportunité</h4>
          <h2>Développeuse React</h2>
          <h3>Full-stack MERN</h3>
          <p>
            Laissez-vous tenter par le contract d'apprentissage, pour une durée
            de 15 à 17 mois.
          </p>
        </aside>
        <img src={image} alt="code" />
      </div>
    </section>
  );
};

export default AboutMe;
