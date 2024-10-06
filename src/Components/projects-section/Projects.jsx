import { useState } from "react";

// styles
import "../../common-rules.scss";
import "./projects.scss";
// Components
import CTAButton from "../CTA-button/CTAButton";

// pictures
import tripadvisor from "../../assets/pictures/tripadvisor.png";
import vinted from "../../assets/pictures/vinted.png";

const Projects = () => {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  // const [showDescription4, setShowDescription4] = useState(false);

  const openExternalLink = (link) => {
    const url = link; // Specify the URL of the external website here
    window.open(url, "_blank");
  };

  return (
    <section className="projects">
      <div className="container sections">
        <h2>Projets</h2>
        <menu>
          <article>
            <img
              src={tripadvisor}
              alt="projet-tripadvisor"
              onMouseEnter={() => setShowDescription1(true)}
              onMouseLeave={() => setShowDescription1(false)}
            />
            {showDescription1 && (
              <div
                //Ne me sert à rien mais utile de savoir qu'on peut faire ça:
                className={`description ${showDescription1 && "visible"}`}
                onMouseEnter={() => setShowDescription1(true)}
                onMouseLeave={() => setShowDescription1(false)}
              >
                <ul>
                  <h4>Trip Advisor</h4>
                  <h5>Projet front-end : HTML, CSS, Vanilla JS</h5>
                  <li>Responsive sur 3 breakpoints</li>
                  <li>Carousel de photos</li>
                  <li>Envoi automatisé de mail</li>
                </ul>
                <CTAButton
                  text={"Découvrir"}
                  className="button"
                  onClick={(event) => {
                    event.preventDefault();
                    openExternalLink(
                      "https://tripadvisor-lereacteur.netlify.app/"
                    );
                  }}
                ></CTAButton>
              </div>
            )}
          </article>
          <article>
            <img
              src={vinted}
              alt="projet-vinted"
              onMouseEnter={() => setShowDescription2(true)}
              onMouseLeave={() => setShowDescription2(false)}
            />
            {showDescription2 && (
              <div
                className="description"
                onMouseEnter={() => setShowDescription2(true)}
                onMouseLeave={() => setShowDescription2(false)}
              >
                <ul>
                  <h4>Vinted</h4>
                  <h5>Projet full-stack : React, NodeJS, MongoDB, express</h5>
                  <li>Inscription et connexion</li>
                  <li>Récupération de données</li>
                  <li>Publication dannonces</li>
                  <li>Barre de recherche</li>
                  <li>Paiement</li>
                  <li>Upload de photos</li>
                </ul>
                <CTAButton
                  text={"Découvrir"}
                  className="button"
                  // onClick={() => openExternalLink("foo")}
                ></CTAButton>
              </div>
            )}
          </article>
          <article>
            <img
              src={vinted}
              alt="projet-marvel"
              onMouseEnter={() => setShowDescription3(true)}
              onMouseLeave={() => setShowDescription3(false)}
            />
            {showDescription3 && (
              <div
                className="description"
                onMouseEnter={() => setShowDescription3(true)}
                onMouseLeave={() => setShowDescription3(false)}
              >
                <ul>
                  <h4>Marvel</h4>
                  <h5>
                    Projet full-stack : React, SCSS, NodeJS, MongoDB, express
                  </h5>
                  <li>Inscription et connexion</li>
                  <li>Récupération de données</li>
                  <li>Système de favoris</li>
                  <li>Pagination</li>
                  <li>Barre de recherche</li>
                </ul>
                <CTAButton
                  text={"Découvrez"}
                  className="button"
                  // onClick={() => openExternalLink("foo")}
                ></CTAButton>
              </div>
            )}
          </article>
        </menu>
      </div>
    </section>
  );
};

export default Projects;
