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
];

window.addEventListener("click", function handleClick(e) {
  const selectedElement = e.target;
  console.log(selectedElement.id);
});

function SelectedImg() {
  const [cardsChosen, setCardsChosen] = useState([]);
  //console.log(image, index);

  if (cardsChosen?.length < 2) {
    setCardsChosen((cardsChosen) => cardsChosen?.concat(image.id));
    // setCardsChosenIds(cardsChosenIds => cardsChosenIds?.concat(index))

    if (cardsChosen?.length === 1) {
      // Check if images are the same
      if (cardsChosen[0] === image.id) {
        //setPoints(points => points + 2)
        setOpenCards((openCards) =>
          openCards?.concat([cardsChosen[0], image.id])
        );
      }
      // setTimeout(() => {
      //     setCardsChosenIds([])
      //     setCardsChosen([])
      // }, 700)
    }
  }
}

images.push(...images);

const Board = () => {
  return (
    <BoardStyled>
      {images
        .sort(() => Math.random() - 0.5)
        .map((image, i) => (
          <Card key={i} id={image.id} image={image.name} />
        ))}
    </BoardStyled>
  );
};

export default Board;
