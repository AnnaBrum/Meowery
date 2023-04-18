import React, { useState } from "react";
//import PropTypes from "prop-types";
import {
  CardStyled,
  CardStyledInner,
  CardStyledFront,
  CardStyledBack,
  CardImageStyled,
} from "./styles";

const Card = ({ id, image, flipped, onClick, matched }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!matched) {
      setIsFlipped(!isFlipped);
      onClick(id, image);
    }
  };
  return (
    <CardStyled onClick={handleClick} matched={matched}>
      <CardStyledInner flipped={isFlipped}>
        <CardStyledFront>
          <CardImageStyled src={image} alt="cat-image"></CardImageStyled>
        </CardStyledFront>
        <CardStyledBack flipped={!isFlipped}>hej</CardStyledBack>
      </CardStyledInner>
    </CardStyled>
  );
};

export default Card;
