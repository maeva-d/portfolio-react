import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// styles
import "../../common-rules.scss";
import "./projects.scss";
// Components
import CTAButton from "../CTA-button/CTAButton";

// pictures
import tripadvisor from "../../assets/pictures/tripadvisor.png";
// import vinted from "../../assets/pictures/vinted.png";
import marvel from "../../assets/pictures/marvel.png";

const Projects = () => {
  const [showDescription1, setShowDescription1] = useState(false);
  // const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  // const [showDescription4, setShowDescription4] = useState(false);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const redirectToProject = (url) => {
    window.open(url, "_blank");
  };

  console.log(viewportWidth); // OK !

  return (
    <section id="projects" className="projects">
      <div className="container sections">
        <h2>Projets</h2>
        <menu>
          <article>
            <LazyLoadImage
              src={tripadvisor}
              alt="projet-tripadvisor"
              onMouseEnter={() => setShowDescription1(true)}
              // onMouseLeave={() => setShowDescription1(false)}
            />
            {
              showDescription1 && (
                // ||
                //   (viewportWidth < 640 && (
                <div
                  className="description"
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
                    onClick={() => {
                      redirectToProject(
                        "https://tripadvisor-lereacteur.netlify.app/"
                      );
                    }}
                  ></CTAButton>
                </div>
              )
              // ))
            }
          </article>
          {/* VINTED */}
          {/* <article>
            <LazyLoadImage
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
          </article> */}
          {/* MARVEL */}
          <article>
            <LazyLoadImage
              src={marvel}
              alt="projet-marvel"
              onMouseEnter={() => setShowDescription3(true)}
              // onMouseLeave={() => setShowDescription3(false)}
            />
            {
              showDescription3 && (
                // ||
                //   (viewportWidth <= 640 && (
                <div
                  className="description"
                  onMouseEnter={() => setShowDescription3(true)}
                  onMouseLeave={() => setShowDescription3(false)}
                >
                  <ul>
                    <h4>L'univers Marvel</h4>
                    <h5>
                      Projet full-stack : React, SCSS, NodeJS, MongoDB, express
                    </h5>
                    {/* <li>Inscription et connexion</li> */}
                    <li>Favoris grâce au local storage </li>
                    <li>Récupération de données</li>
                    <li>Pagination</li>
                    <li>Barre de recherche</li>
                  </ul>
                  <CTAButton
                    text={"Découvrir"}
                    className="button"
                    onClick={() => {
                      redirectToProject("https://maeva-d-marvel.netlify.app/");
                    }}
                  ></CTAButton>
                </div>
              )
              // ))
            }
          </article>
        </menu>
      </div>
    </section>
  );
};

export default Projects;
