import "../../common-rules.scss";
import "./projects.scss";
// Components
import OneProject from "./OneProject";
// pictures
import marvel from "../../assets/pictures/marvel.png";
import vinted from "../../assets/pictures/vinted.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container sections">
        <h2>Projets</h2>
        <menu>
          {/* -- Marvel -- */}
          <OneProject
            img={marvel}
            alt="univers-marvel"
            title="L'univers Marvel"
            stack="UI Design / full-stack : React, SCSS, Node.js, Express"
            feature2="Serveur back-end intermédiaire"
            feature3="Récupération de données"
            feature1="Favoris dans le local storage"
            feature5="Barre de recherche"
            feature4="Pagination"
            projectURL="https://maeva-d-marvel.netlify.app/"
          />
          {/* -- VINTED -- */}
          <OneProject
            img={vinted}
            alt="vinted"
            title="Vinted"
            stack="Full-stack : React, SCSS, Node.js, MongoDB, Express"
            feature1="Inscription et connexion"
            feature2="Récupération de données"
            feature3="Publication d'annonces"
            feature4="Barre de recherche et filtres"
            feature5="Upload de photos"
            feature6="Paiement (Stripe)"
            projectURL="https://maeva-d-vinted.netlify.app/"
          />
        </menu>
      </div>
    </section>
  );
};

export default Projects;
