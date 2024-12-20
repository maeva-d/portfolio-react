import "../../common-rules.scss";
import "./aboutMe.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
// picture
import image from "../../assets/pictures/blurry-unsplash.jpg";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <div className="container sections">
        <aside>
          <h4>
            <span>/ma.e.va/</span>, Paris - Rennes
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
        </aside>
        <LazyLoadImage src={image} alt="code" />
      </div>
    </section>
  );
};

export default AboutMe;
