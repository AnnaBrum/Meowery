import React, { useState } from "react";
//import PropTypes from "prop-types";
import {
  CardStyled,
  CardStyledInner,
  CardStyledFront,
  CardStyledBack,
  CardImageStyled,
} from "./styles";

const Card = (props) => {
  const [flipped, setFlipped] = useState(false);
  // const [name, setSameName] = useState("false");

  const handleClick = () => {
    setFlipped(!flipped);

    const onMouseTarget = (e) => {
      e.target.addEventListener("click");
    };
  };

  // const handleClickName = () => {
  //   name(!setSameName);
  // };
  return (
    <CardStyled>
      <CardStyledInner onClick={handleClick} flipped={flipped}>
        <CardStyledFront>
          <CardImageStyled src={props.image} alt="cat-image"></CardImageStyled>
        </CardStyledFront>
        <CardStyledBack>hej</CardStyledBack>
      </CardStyledInner>
    </CardStyled>
  );
};
export default Card;

// Card.propTypes = {
//   image: PropTypes.string,
//   id: PropTypes.string,
// };
