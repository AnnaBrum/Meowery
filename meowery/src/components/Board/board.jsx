import React, { useState } from "react";
import { BoardStyled } from "./styled";
import Card from "../Card/card.jsx";

import img1 from "../images/cat01.jpeg";
import img2 from "../../images/cat02.jpeg";
import img3 from "../../images/cat03.jpeg";
import img4 from "../../images/cat04.jpeg";
import img5 from "../../images/cat05.jpeg";
import img6 from "../../images/cat06.jpeg";
import img7 from "../../images/cat07.jpeg";
import img8 from "../../images/cat08.jpeg";

const images = [
  { id: 1, name: img1 },
  { id: 2, name: img2 },
  { id: 3, name: img3 },
  { id: 4, name: img4 },
  { id: 5, name: img5 },
  { id: 6, name: img6 },
  { id: 7, name: img7 },
  { id: 8, name: img8 },
];

const Board = () => {
  const [cards, setCards] = useState(
    images.concat(images).sort(() => Math.random() - 0.5)
  );
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (id, image) => {
    const card = { id, image };

    // If two cards have been selected, check if they match
    if (selectedCards.length === 2) {
      if (selectedCards[0].image === selectedCards[1].image) {
        setCards(
          cards.map((card) => {
            if (
              card.id === selectedCards[0].id ||
              card.id === selectedCards[1].id
            ) {
              return { ...card, matched: true };
            }
            return card;
          })
        );
      }
      setSelectedCards([card]);
    } else {
      setSelectedCards((prev) => [...prev, card]);
    }
  };

  return (
    <BoardStyled>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.i}
          image={card.name}
          matched={card.matched}
          onClick={handleCardClick}
          flipped={selectedCards.find((c) => c.id === card.id)}
        />
      ))}
    </BoardStyled>
  );
};

export default Board;
