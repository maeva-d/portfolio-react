// styles
import "../../common-rules.scss";
import "./contactMe.scss";

//pictures & icons
import image from "../../assets/pictures/laptop-jewels-unsplash.jpg";

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-me">
      <img src={image} alt="keyboard" />
      <aside>
        <h2>Contactez-moi</h2>
        <p>Pour échanger, ou convenir d'un entretien.</p>
        <nav>
          <a href="https://www.linkedin.com/in/maeva-d/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/maeva-d" target="_blank">
            GitHub
          </a>
        </nav>
      </aside>
    </section>
  );
};

export default ContactMe;
