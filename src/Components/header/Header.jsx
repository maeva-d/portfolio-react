import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import cv from "../../assets/pictures/alternance.pdf";
// Style
import "./header.scss";
import "../../common-rules.scss";
// Components
import NavModal from "../nav-Modal/NavModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 88) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled && "transparent"}`}>
      <div className="container">
        <svg
          onClick={() => setShowModal(true)}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6.001H21M3 12.001H21M3 18.001H21"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1>Développeuse web et mobile</h1>
        {/* <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 30px 30px"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              color="currentColor"
            >
              <path d="m3.062 14.441l.365-2.142c.432-2.533.647-3.8 1.502-4.55C5.784 7 7.012 7 9.467 7h5.066c2.455 0 3.683 0 4.538.75s1.07 2.016 1.502 4.549l.365 2.142c.598 3.505.896 5.257-.023 6.408C19.995 22 18.295 22 14.898 22H9.102c-3.398 0-5.097 0-6.017-1.15c-.92-1.152-.62-2.904-.023-6.409" />
              <path d="m7.5 9l.215-3.01a4.296 4.296 0 0 1 8.57 0L16.5 9" />
            </g>
          </svg>
          <figure className="cart-item"></figure>
        </div> */}
        <nav>
          <a href="#about-me">À propos de moi</a>
          <a href="#projects">Projets</a>
          <a href="#contact-me">Me contacter</a>
          <a href={cv} download="My_CV.pdf">
            CV
          </a>
        </nav>
        {showModal &&
          createPortal(
            <NavModal onClose={() => setShowModal(false)} />,
            modalRoot
          )}
      </div>
    </header>
  );
};

export default Header;
