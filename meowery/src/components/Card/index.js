import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  CardStyled,
  CardStyledInner,
  CardStyledFront,
  CardStyledBack,
  CardImageStyled,
} from "./styles";

const Card = (props) => {
  const [flipped, setFlipped] = useState(false);
  const [id, setSameId] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };
  const handleClickId = () => {
    id(!setSameId);
  };
  return (
    <CardStyled onClick={handleClick} id={id}>
      <CardStyledInner onClick={handleClick} flipped={flipped}>
        <CardStyledFront>
          <CardImageStyled
            src={props.image}
            id={props.id}
            alt="cat-image"
          ></CardImageStyled>
        </CardStyledFront>
        <CardStyledBack>hej</CardStyledBack>
      </CardStyledInner>
    </CardStyled>
  );
};
export default Card;

Card.propTypes = {
  image: PropTypes.string,
  id: PropTypes.string,
};
