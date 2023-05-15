import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Board from "./components/Board/";
import Card from "./components/Card";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Message from "./components/Message";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //starting with no points
  let points = 0;

  const createDeck = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const api = `https://api.thecatapi.com/v1/images/search?limit=10`;

    let deck = [];

    fetch(api, { headers: { "x-api-key": apiKey } })
      .then((response) => response.json())
      .then((data) => {
        const images = data.slice(0, 8);
        deck = [...images, ...images]
          .sort(() => Math.random() - 0.5)
          .map((card) => ({ ...card, matched: false, id: Math.random() }));
        setCards(deck);
        setTurns(0);
      })
      .catch((error) => console.error(error));
  };

  //handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.url === choiceTwo.url) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.url === choiceOne.url) {
              return { ...card, matched: true }
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //

  const countScore = () => {
    
  }

  return (
    <div className="App">
      <Header />
      <Button createDeck={createDeck} buttonText="New Game!"/>
      <div className="info-box">
        <Counter turns={turns} counterText="Turns: "/>
        <Message messageText={"sålänge"}/> 
      </div>
      <Board>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </Board>
    </div>
  );
}

export default App;
