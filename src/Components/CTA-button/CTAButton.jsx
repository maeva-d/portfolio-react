import "./CTAButton.scss";

// import PropTypes from "prop-types";

const CTAButton = ({ text, onClick }) => {
  return (
    <button className="CTA-Button" onClick={onClick}>
      <span className={text === "Explorer" ? "explore" : "discover"}>
        {text}
      </span>
    </button>
  );
};

// CTAButton.propTypes = {
//   text: PropTypes.node,
//   onClick: PropTypes.node,
// };

export default CTAButton;
