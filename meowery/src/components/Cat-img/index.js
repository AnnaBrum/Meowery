import React from "react";
import PropTypes from "prop-types";
import "./button.css";

// const Button = props => {
//   return <button className="btn">{props.buttonText}</button>;
// };

const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className="btn">
      {children}
    </button>
  );
};

// Hjälpreda som visar vilka argument som är fel i konsollen.
Button.propTypes = {
  handleClick: PropTypes.func,
};

export default Button;
