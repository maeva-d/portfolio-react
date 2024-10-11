import "./nav-modal.scss";

const NavModal = ({ onClose }) => {
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
        </nav>
      </menu>
    </section>
  );
};

export default NavModal;
