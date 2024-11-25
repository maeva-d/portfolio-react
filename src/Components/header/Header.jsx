import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import cv from "../../assets/pictures/Maeva_Delrue_CV.pdf";
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
  }, [showModal]);

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
        <nav>
          <a href="#about-me">À propos de moi</a>
          <a href="#projects">Projets</a>
          <a href="#contact-me">Me contacter</a>
          <a href={cv} download="CV_Maeva_Delrue_DEVWEB.pdf">
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
