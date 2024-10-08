import "./addToCart.scss";

const AddToCart = ({ onClick }) => {
  return (
    <button className="add-to-cart" onClick={onClick}>
      <span>Ajouter au panier</span>
    </button>
  );
};

export default AddToCart;
