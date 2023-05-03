import React from "react";
import { ButtonStyled } from "./styled";

function Button({shuffleCards}) {

  const handleClick = () => {
    shuffleCards();
  }

    return (
    <ButtonStyled className="start-btn" onClick={handleClick}>
      Start Playing!
    </ButtonStyled>
    )
};

export default Button;

