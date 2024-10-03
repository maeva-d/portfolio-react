// import { useState } from "react";

// styles
import "../../common-rules.scss";
import "./projects.scss";
// Components
// import CTAButton from "../CTA-button/CTAButton";

// pictures
import tripadvisor from "../../assets/pictures/tripadvisor.png";

const Projects = () => {
  //   const [showDescription, setShowDescription] = useState(false);

  return (
    <section className="projects">
      <div className="container sections">
        <h2>Projets</h2>
        <menu>
          {/* <nav> */}
          <article>
            <img
              src={tripadvisor}
              alt="projet tripadvisor"
              // onMouseEnter={() => setShowDescription(true)}
              // onMouseLeave={() => setShowDescription(false)}
            />
            {/* {showDescription && ( */}

            <ul className="description">
              <li>Responsive sur 3 breakpoints</li>
              <li>Carousel de photos</li>
              <li>Envoi automatisé de mail</li>
            </ul>

            {/* )} */}
          </article>
          <aside></aside>
          {/* </nav> */}
          {/* <nav>
            <aside></aside>
            <aside></aside>
          </nav> */}
        </menu>
      </div>
    </section>
  );
};

export default Projects;
