// Styles
import "../../common-rules.scss";
import "./skills.scss";
// Components
import AddToCart from "../add-to-cart/AddToCart";

const Skills = () => {
  return (
    <section className="skill">
      <div className="container">
        {/* <h2>
          Du front-end au back-end, la maîtrise de ces technos incarne
          <span> polyvalence </span> et la <span>passion</span> du
          <span> développement web et mobile</span>.
        </h2>
        <menu className="row">
          <div className="column">
            <p>HTML</p>
            <AddToCart></AddToCart>
          </div>
          <div className="column">
            <p>CSS / SCSS</p>
            <AddToCart></AddToCart>
          </div>
          <div className="column">
            <p>JavaScript</p>
            <AddToCart></AddToCart>
          </div>
          <div className="column">
            <p>React</p>
            <AddToCart></AddToCart>
          </div>
        </menu>
        <menu className="row">
          <div className="column">
            <p>NodeJS</p>
            <AddToCart></AddToCart>
          </div>
          <div className="column">
            <p>Express</p>
            <AddToCart></AddToCart>
          </div>
          <div className="column">
            <p>MongoDB</p>
            <AddToCart></AddToCart>
          </div>
          <div className="column">
            <p>React Native</p>
            <AddToCart></AddToCart>
          </div>
        </menu> */}
        <h2>
          Lalliance entre expérience en entreprise et cours est le moyen idéal
          pour améliorer mes compétences, mais aussi pour me permettre de me
          former à dautres technologies, telles que :
        </h2>
        <menu className="row">
          <div className="column">
            <p>TypeScript</p>
            <AddToCart></AddToCart>
          </div>
          <div className="column">
            <p>SQL</p>
            <AddToCart></AddToCart>
          </div>
          <div className="column">
            <p>Next.js</p>
            <AddToCart></AddToCart>
          </div>
          <div className="column">
            <p>Redux</p>
            <AddToCart></AddToCart>
          </div>
        </menu>
      </div>
    </section>
  );
};

export default Skills;
