import "./CTAButton.scss";

import PropTypes from "prop-types";

const CTAButton = ({ text }) => {
  return <button className="CTA-Button">{text}</button>;
};

CTAButton.propTypes = {
  text: PropTypes.node,
};

export default CTAButton;
