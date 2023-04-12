import React from "react";
//import PropTypes from "prop-types";
import { BoardStyled } from "./styled";
import Card from "../Card/";

import img1 from "../../images/cat01.jpeg";
import img2 from "../../images/cat02.jpeg";
import img3 from "../../images/cat03.jpeg";
import img4 from "../../images/cat04.jpeg";
import img5 from "../../images/cat05.jpeg";
import img6 from "../../images/cat06.jpeg";
import img7 from "../../images/cat07.jpeg";
import img8 from "../../images/cat08.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const ids = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

const Board = () => {
  return (
    <BoardStyled>
      {ids.map((id) => {
        return <Card image={images[id]}></Card>;
      })}
    </BoardStyled>
  );
};

export default Board;
