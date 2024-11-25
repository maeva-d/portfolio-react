import "../../common-rules.scss";
import "./contactMe.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
//pictures
import image from "../../assets/pictures/laptop-jewels-unsplash.jpg";

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-me">
      <LazyLoadImage src={image} alt="keyboard" />
      <aside>
        <div>
          <h2>Contactez-moi</h2>
          <p>Pour échanger, ou convenir d'un entretien.</p>
        </div>
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
