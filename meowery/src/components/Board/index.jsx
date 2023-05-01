import React, { useState, useEffect } from "react";
import { BoardStyled } from "./styled";
import Card from "../Card";

function Board() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // add loading state

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const api = `https://api.thecatapi.com/v1/images/search?limit=10`;

    fetch(api, {headers: {"x-api-key": apiKey}})
      .then((response) => response.json())
      .then((data) => {
        const catImages = data.slice(0, 8).map((cat) => {
          return {
            id: cat.id,
            url: cat.url,
            status: "", // indicates if card is flipped, same or wrong when clicked
          };
        });
        const duplicatedImages = [...catImages, ...catImages];
        setImages(duplicatedImages.sort(() => Math.random() - 0.5));
        setLoading(false); // set loading to false when images are loaded
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(images);


  // const deep = JSON.parse(JSON.stringify(images));

  const [firstCard, setFirstCard] = useState(-1);

  function compare(secondCard) {
  
  // returns if the same image is being clicked twice
  if (firstCard === secondCard) {
    return;
  }

    // const firstCardId = images[firstCard].id;
    // const secondCardId = images[secondCard].id;

    
    /* if the cards have the same id, add status "same"*/
    if (images[firstCard].id === images[secondCard].id) {
      setImages(prevImages => {
        const newImages = [...prevImages];
        newImages[secondCard].status = " same";
        newImages[firstCard].status = " same";
        return newImages;
      });
      setFirstCard(-1);
    } else {
      setImages(prevImages => {
        const newImages = [...prevImages];
        newImages[secondCard].status = " wrong";
        newImages[firstCard].status = " wrong";
        return newImages
      });
      setTimeout(() => {
        /* Make the status empty again after 1 sec */
        setImages(prevImages => {
          const newImages = [...prevImages];
          newImages[secondCard].status = "";
          newImages[firstCard].status = "";
          return newImages;
        });
        // setFirstCard(-1);
      }, 1000);
    }
     setFirstCard(-1);
  }

  function handleClick(id) {
    if (loading) { // don't allow clicks if images are still loading
      <p>Loading...</p>
      return;
    }
    const index = images.findIndex((image) => image.id === id)
    if (firstCard === -1) {
      const updatedImages = [...images];
      updatedImages[index].status = " flipped";
      setImages(updatedImages);
      setFirstCard(index);
    } else if (index !== -1 && index !== firstCard) {
      const updatedImages = [...images];
      updatedImages[index].status = " flipped";
      setImages(updatedImages);
      compare(index);
    }
  }

  


  return (   
    <BoardStyled>
      {images.map((image, i) => (
        <Card key={i} id={image.id} image={image} handleClick={handleClick} />
      ))}
    </BoardStyled>
  );
}

export default Board;
