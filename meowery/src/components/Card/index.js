import React from "react";
import PropTypes from "prop-types";
import {
  CardStyled,
  CardStyledInner,
  CardStyledFront,
  CardStyledBack,
  CardImageStyled,
} from "./styles";

const Card = (props) => {
  return (
    <CardStyled>
      <CardStyledInner>
        <CardStyledFront>
          <CardImageStyled src={props.image} alt="cat-image"></CardImageStyled>
        </CardStyledFront>
        <CardStyledBack>hej</CardStyledBack>
      </CardStyledInner>
    </CardStyled>
  );
};
export default Card;

Card.propTypes = {
  image: PropTypes.string,
};
