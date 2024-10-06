// Style
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Développeuse web et mobile</h1>
      <nav>
        <a href="">À propos de moi</a>
        <a href="">Compétences</a>
        <a href="">Projets</a>
        <a href="">Contactez-moi</a>
      </nav>
      <ion-icon name="cart-outline"></ion-icon>
    </header>
  );
};

export default Header;
