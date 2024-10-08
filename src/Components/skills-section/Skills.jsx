import { useState } from "react";
// Styles
import "../../common-rules.scss";
import "./skills.scss";
// Components
import AddToCart from "../add-to-cart/AddToCart";

const Skills = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const add = () => {
    setShowErrorMessage(true);
  };

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
          <span> former à d'autres technologies</span>, telles que :
        </h2>
        <menu className="row">
          <div className="column">
            <p>TypeScript</p>
            <AddToCart onClick={add}></AddToCart>
          </div>
          <div className="column">
            <p>SQL</p>
            <AddToCart onClick={add}></AddToCart>
          </div>
          <div className="column">
            <p>Next.js</p>
            <AddToCart onClick={add}></AddToCart>
          </div>
          <div className="column">
            <p>Redux</p>
            <AddToCart onClick={add}></AddToCart>
          </div>
        </menu>
        {showErrorMessage && (
          <small>
            Cette option est disponible uniquement avec un contrat
            d'apprentissage!
          </small>
        )}
      </div>
    </section>
  );
};

export default Skills;
