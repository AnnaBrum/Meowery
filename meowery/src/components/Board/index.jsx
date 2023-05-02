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
            id: cat.id,
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
    if (images[firstCard].id === images[secondCard].id) {
      images[secondCard].status = "flipped same";
      images[firstCard].status = "flipped same";
      setFirstCard(-1);
    } else {
      images[secondCard].status = "flipped";
      setImages([...images]);
      setTimeout(() => {
        // Make the status empty again after 1 sec 
        setFirstCard(-1);
        images[secondCard].status = " wrong";
        images[firstCard].status = " wrong";
        // Set cards back to face-down
      }, 1300);
      setImages([...images]);
    }
  }

  function handleClick(index) {
    if (loading) {
      // don't allow clicks if images are still loading
      <p>Loading...</p>;
      return;
    }
    if (index !== firstCardIndex.current) {
      if (images[index].status === "flipped same") {
        <p>Meeeoow it's a match!</p>;
      } else {
        if (firstCard === -1) {
          firstCardIndex.current = index;
          images[index].status = " flipped";
          setImages([...images]);
          setFirstCard(index);
        } else {
          compare(index);
          firstCardIndex.current = -1;
        }
      }
    } else {
      return;
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
