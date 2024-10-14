// import { useState } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// styles
import "../../common-rules.scss";
import "./projects.scss";
// Components
import OneProject from "./OneProject";
// import CTAButton from "../CTA-button/CTAButton";
// pictures
import tripadvisor from "../../assets/pictures/tripadvisor.png";
// import vinted from "../../assets/pictures/vinted.png";
import marvel from "../../assets/pictures/marvel.png";

const Projects = () => {
  // const [showDescTripAdvisor, setShowDescTripAdvisor] = useState(false);
  // const [showDescriptionVinted, setShowDescriptionVinted] = useState(false);
  // const [showDescMarvel, setShowDescMarvel] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setViewportWidth(window.innerWidth);
  //     window.addEventListener("resize", handleResize);
  //   };

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // console.log(window.innerWidth);

  return (
    <section id="projects" className="projects">
      <div className="container sections">
        <h2>Projets</h2>
        <menu>
          {/* -- Trip Advisor -- */}
          <OneProject
            img={tripadvisor}
            alt="trip-advisor"
            title="Trip Advisor"
            stack="Front-end : HTML, CSS, Vanilla JS"
            feature1="Responsive sur 3 breakpoints"
            feature2="Carousel de photos"
            feature3="Envoi automatisé de mail"
            projectURL="https://maeva-delrue-tripadvisor.netlify.app/"
          />
          {/* -- Marvel -- */}
          <OneProject
            img={marvel}
            alt="univers-marvel"
            title="L'univers Marvel"
            stack="UI Design / full-stack : React, SCSS, NodeJS, MongoDB, express"
            feature2="Serveur back-end intermédiaire"
            feature3="Récupération de données"
            feature1="Favoris grâce au local storage"
            feature5="Barre de recherche"
            feature4="Pagination"
            projectURL="https://maeva-d-marvel.netlify.app/"
          />
          {/* <article>
            <LazyLoadImage
              src={tripadvisor}
              alt="projet-tripadvisor"
            />
            <div
              className="description"
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
                onClick={() => {
                  redirectToProject(
                    "https://maeva-delrue-tripadvisor.netlify.app/"
                  );
                }}
              ></CTAButton>
            </div>
          </article> */}
          {/* VINTED */}
          {/* <article>
            <LazyLoadImage
              src={vinted}
              alt="projet-vinted"
              onMouseEnter={() => setShowDescriptionVinted(true)}
              onMouseLeave={() => setShowDescriptionVinted(false)}
            />
            {showDescriptionVinted && (
              <div
                className="description"
                onMouseEnter={() => setShowDescriptionVinted(true)}
                onMouseLeave={() => setShowDescriptionVinted(false)}
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
          </article> */}
        </menu>
      </div>
    </section>
  );
};

export default Projects;
