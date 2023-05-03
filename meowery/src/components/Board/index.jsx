import React, { useState, useEffect, useRef } from "react";
import { BoardStyled } from "./styled";
import Card from "../Card";

function Board() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // add loading state

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const api = `https://api.thecatapi.com/v1/images/search?limit=10`;

    fetch(api, { headers: { "x-api-key": apiKey } })
      .then((response) => response.json())
      .then((data) => {
        const catImages = data.slice(0, 8).map((cat) => {
          return {
            pairId: cat.id,
            url: cat.url,
            status: "", // indicates if card is flipped, same or wrong when clicked
          };
        });
        //Duplicate all images
        const duplicatedImages = [...catImages, ...catImages];
        setImages(duplicatedImages.sort(() => Math.random() - 0.5));
        setLoading(false); // set loading to false when images are loaded
      })
      .catch((error) => console.error(error));
  }, []);

  const [firstCard, setFirstCard] = useState(-1);
  const firstCardIndex = useRef(-1); // stops a re-render, returns only a value that stays the same between renders.

  // Funcion that compares the first selected card with the second
  function compare(secondCard) {
    if (images[firstCard].pairId === images[secondCard].pairId) {
      images[secondCard].status = "flipped same";
      console.log("It's a match");
      setFirstCard(-1);
    } else {
      images[secondCard].status = "flipped";
      setImages([...images]);
      setTimeout(() => {
        images[secondCard].status = " ";
        images[firstCard].status = " ";
        setFirstCard(-1);
        setImages([...images]);
      }, 1500);
    }
  }

  function handleClick(index) {
    // console.log(id);
    // don't allow clicks if images are still loading
    if (loading) {
      <p>Loading...</p>;
      return;
    }
    // setFirstCard(index);
    switch (index !== firstCardIndex.current) {
      case images[index].status === "flipped same":
      <p>Meeeoow it's a match!</p>
      break;
      case firstCard === -1: 
      firstCardIndex.current = index;
      images[index].status = " flipped";
      setImages([...images]);
      setFirstCard(index);
      break;
      default: compare(index);
      firstCardIndex.current = -1;
    }
  }

  console.log("images", images);

  return (
    <BoardStyled>
      {images.map((image, index) => (
        <Card
          key={index}
          index={index}
          id={image.id}
          image={image}
          handleClick={handleClick}
        />
      ))}
    </BoardStyled>
  );
}

export default Board;
