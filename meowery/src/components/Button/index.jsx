import React from "react";
import { ButtonStyled } from "./styled";

function Button({createDeck}) {

  const handleClick = () => {
    createDeck();
  }

    return (
    <ButtonStyled className="start-btn" onClick={handleClick}>
      New Game!
    </ButtonStyled>
    )
};

export default Button;

