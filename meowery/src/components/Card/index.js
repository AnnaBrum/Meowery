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
  // const [sameName, setSameName] = useState("");

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <CardStyled onClick={handleClick}>
      <CardStyledInner flipped={flipped}>
        <CardStyledFront>
          <CardImageStyled
            src={props.image}
            id={props.id}
            alt="cat-image"
          ></CardImageStyled>
        </CardStyledFront>
        <CardStyledBack id={props.id}>hej</CardStyledBack>
      </CardStyledInner>
    </CardStyled>
  );
};
export default Card;

Card.propTypes = {
  image: PropTypes.string,
  id: PropTypes.string,
};
