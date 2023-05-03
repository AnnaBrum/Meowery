import React from "react";
import { ButtonStyled } from "./styled";

function Button({shuffleCards}) {

  const handleClick = () => {
    shuffleCards();
  }

    return (
    <ButtonStyled className="start-btn" onClick={handleClick}>
      New Game!
    </ButtonStyled>
    )
};

export default Button;

