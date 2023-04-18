import React from "react";
import PropTypes from "prop-types";
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

let images = [
  { id: "1", name: img1 },
  { id: "2", name: img2 },
  { id: "3", name: img3 },
  { id: "4", name: img4 },
  { id: "5", name: img5 },
  { id: "6", name: img6 },
  { id: "7", name: img7 },
  { id: "8", name: img8 },
  { id: "9", name: img1 },
  { id: "10", name: img2 },
  { id: "11", name: img3 },
  { id: "12", name: img4 },
  { id: "13", name: img5 },
  { id: "14", name: img6 },
  { id: "15", name: img7 },
  { id: "16", name: img8 },
];

// images.push(...images);

const Board = () => {
  return (
    <BoardStyled>
      {images
        .sort(() => Math.random() - 0.5)
        .map((image) => (
          <Card key={image.id} image={image.name} />
        ))}
    </BoardStyled>
  );
};

export default Board;
