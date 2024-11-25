import "./nav-modal.scss";
import cv from "../../assets/pictures/Maeva_Delrue_CV.pdf";
import { useEffect } from "react";

const NavModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <section className="nav-modal">
      <menu>
        <div>
          <h2>Parcourir</h2>
          <svg
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              d="m6 6l12 12m0-12L6 18"
            />
          </svg>
        </div>
        <nav>
          <a href="#about-me">À propos de moi</a>
          <a href="#projects">Projets</a>
          <a href="#contact-me">Me contacter</a>
          <a href={cv} download="CV_Maeva_Delrue_DEVWEB.pdf">
            CV
          </a>
        </nav>
      </menu>
    </section>
  );
};

export default NavModal;
