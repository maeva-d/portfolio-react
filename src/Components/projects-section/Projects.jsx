// styles
import "../../common-rules.scss";
import "./projects.scss";
// Components
import OneProject from "./OneProject";
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
          {/* -- VINTED -- */}
          {/* <OneProject
            img={vinted}
            alt="vinted"
            title="Vinted"
            stack="Full-stack : React, NodeJS, MongoDB, Express"
            feature1="Inscription et connexion"
            feature2="Récupération de données"
            feature3="Publication d'annonces"
            feature4="Barre de recherche"
            feature5="Upload de photos"
            feature6="Paiement (Stripe)"
            projectURL="foo"
          /> */}
        </menu>
      </div>
    </section>
  );
};

export default Projects;
