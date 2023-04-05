import React from "react";
import PropTypes from "prop-types";
import { CardStyled, CardImageStyled } from "./styles";

const Card = (props) => {
  return (
    <CardStyled href={props.link} {...props}>
      <CardImageStyled src={props.image} alt=""></CardImageStyled>
    </CardStyled>
  );
};
export default Card;

Card.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string,
};
