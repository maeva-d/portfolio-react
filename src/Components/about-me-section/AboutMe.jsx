// import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
    <section id="about-me" className="about-me">
      <div className="container sections">
        <aside>
          <h4>
            <span>/ma.e.va/</span>, Paris
          </h4>
          <h2>Développeuse React</h2>
          <h3>Full-stack MERN</h3>
          <p>
            Laissez-vous tenter par le contrat d'apprentissage, pour une durée
            de 15 à 17 mois.
          </p>
          <br />
          <small>
            Le saviez-vous? Tout contrat signé avant la fin de l'année 2024 vous
            donne droit à une prime de{" "}
            <a href="https://entreprendre.service-public.fr/vosdroits/F23556">
              6000€
            </a>
            .
          </small>
          {/* <Link to="/learn-more">En savoir plus</Link> */}
        </aside>
        <LazyLoadImage src={image} alt="code" />
      </div>
    </section>
  );
};

export default AboutMe;
