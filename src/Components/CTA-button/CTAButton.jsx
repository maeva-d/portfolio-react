import "./CTAButton.scss";

import PropTypes from "prop-types";

const CTAButton = ({ text, onClick }) => {
  return (
    <button className="CTA-Button" onClick={onClick}>
      {text}
    </button>
  );
};

CTAButton.propTypes = {
  text: PropTypes.node,
  onClick: PropTypes.node,
};

export default CTAButton;
