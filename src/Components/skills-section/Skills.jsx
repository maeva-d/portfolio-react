// import { useState } from "react";
// Styles
import "../../common-rules.scss";
import "./skills.scss";
// Components
import AddToCart from "../add-to-cart/AddToCart";

const Skills = () => {
  // const [cart, setCart] = useState([]);

  // // const skillTab = Array.from({ length: 4 }, (_, index) => index);

  // // const handleClick = () => {
  // //   const cartCopy = [...cart];
  // //   let itemSpotted = cartCopy.find((elem) => )
  // // }

  return (
    <section id="skills" className="skills">
      <div className="container sections">
        <h2>
          L'alliance entre expérience en entreprise et cours est le moyen idéal
          pour améliorer mes compétences, mais aussi pour me permettre de me
          former à d'autres technologies, telles que :
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
