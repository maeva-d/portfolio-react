import { useState } from "react";

// styles
import "../../common-rules.scss";
import "./projects.scss";
// Components
import CTAButton from "../CTA-button/CTAButton";

// pictures
import tripadvisor from "../../assets/pictures/tripadvisor.png";

const Projects = () => {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);

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
                <CTAButton text={"Découvrez"} className="button"></CTAButton>
              </div>
            )}
          </article>
          <article>
            <img
              src={tripadvisor}
              alt="projet tripadvisor"
              onMouseEnter={() => setShowDescription2(true)}
              onMouseLeave={() => setShowDescription2(false)}
            />
            {showDescription2 && (
              <ul
                className="description"
                onMouseEnter={() => setShowDescription2(true)}
                onMouseLeave={() => setShowDescription2(false)}
              >
                <h4>Trip Advisor</h4>
                <h5>Projet front-end : HTML, CSS, Vanilla JS</h5>
                <li>Responsive sur 3 breakpoints</li>
                <li>Carousel de photos</li>
                <li>Envoi automatisé de mail</li>
              </ul>
            )}
          </article>
          <article>
            <img
              src={tripadvisor}
              alt="projet tripadvisor"
              onMouseEnter={() => setShowDescription3(true)}
              onMouseLeave={() => setShowDescription3(false)}
            />
            {showDescription3 && (
              <ul
                className="description"
                onMouseEnter={() => setShowDescription3(true)}
                onMouseLeave={() => setShowDescription3(false)}
              >
                <li>Responsive sur 3 breakpoints</li>
                <li>Carousel de photos</li>
                <li>Envoi automatisé de mail</li>
              </ul>
            )}
          </article>
          <article>
            <img
              src={tripadvisor}
              alt="projet tripadvisor"
              onMouseEnter={() => setShowDescription4(true)}
              onMouseLeave={() => setShowDescription4(false)}
            />
            {showDescription4 && (
              <ul
                className="description"
                onMouseEnter={() => setShowDescription4(true)}
                onMouseLeave={() => setShowDescription4(false)}
              >
                <li>Responsive sur 3 breakpoints</li>
                <li>Carousel de photos</li>
                <li>Envoi automatisé de mail</li>
              </ul>
            )}
          </article>
        </menu>
      </div>
    </section>
  );
};

export default Projects;
