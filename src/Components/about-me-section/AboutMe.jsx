// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// styles
import "../../common-rules.scss";
import "./aboutMe.scss";
// picture
import image from "../../assets/pictures/blurry-unsplash.jpg";

const AboutMe = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 1000) {
  //       setIsVisible(true);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section
      id="about-me"
      // className={`about-me ${isVisible ? "visible" : "hidden"}`}
      className="about-me"
    >
      <div className="container sections">
        <aside>
          <h4>
            <span>/ma.e.va/</span>, Paris
          </h4>
          <h2>Développeuse React</h2>
          <h3>Full-stack MERN</h3>
          <p>
            Laissez-vous tenter par le contract d'apprentissage, pour une durée
            de 15 à 17 mois.
          </p>
          {/* <Link to="/learn-more">En savoir plus</Link> */}
        </aside>
        <img src={image} alt="code" />
      </div>
    </section>
  );
};

export default AboutMe;
