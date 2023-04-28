import React, { useState, useEffect } from "react";
import { BoardStyled } from "./styled";
import Card from "../Card/";


function Board() {

  const apiKey = process.env.REACT_APP_API_KEY;

  let [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://cors.iamnd.eu.org/?url=https://api.thecatapi.com/v1/images/search?limit=8?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => setImages(data))
    .catch(error => console.error(error));
    
  }, []);
  
images.map(image => {
  return {...image, status: " "};

  
})

  // images.push(...data);

 
  
  /* Create shuffled image-array */
 //const [images, setImages] = useState([
    // { id: 1, url: "../images/cat01.jpeg", status: "" },
    // { id: 2, url: "../images/cat02.jpeg", status: "" },
    // { id: 3, url: "../images/cat03.jpeg", status: "" },
    // { id: 4, url: "../images/cat04.jpeg", status: "" },
    // { id: 5, url: "../images/cat05.jpeg", status: "" },
    // { id: 6, url: "../images/cat06.jpeg", status: "" },
    // { id: 7, url: "../images/cat07.jpeg", status: "" },
    // { id: 8, url: "../images/cat08.jpeg", status: "" },
    // { id: 1, url: "../images/cat01.jpeg", status: "" },
    // { id: 2, url: "../images/cat02.jpeg", status: "" },
    // { id: 3, url: "../images/cat03.jpeg", status: "" },
    // { id: 4, url: "../images/cat04.jpeg", status: "" },
    // { id: 5, url: "../images/cat05.jpeg", status: "" },
    // { id: 6, url: "../images/cat06.jpeg", status: "" },
    // { id: 7, url: "../images/cat07.jpeg", status: "" },
    // { id: 8, url: "../images/cat08.jpeg", status: "" },
  // ].sort(() => Math.random() - 0.5));
  // ;
  
  const [firstCard, setFirstCard] = useState(-1);

  function compare(secondCard) {
    
    /* if the cards have the same id, add status "same"*/
    if (images[secondCard].id === images[firstCard].id) {
      images[secondCard].status = " same";
      images[firstCard].status = " same";
      setImages([...images]);
      setFirstCard(-1);
    } else {
      images[secondCard].status = " wrong";
      images[firstCard].status = " wrong";
      setImages([...images]);
      setTimeout(() => {
        /* Make the status empty again after 2 sec */
        images[secondCard].status = "";
        images[firstCard].status = "";
        setImages([...images]);
        setFirstCard(-1);
      }, 2000);
    }
  }

  function handleClick(id) {
    if (firstCard === -1) {
      images[id].status = " flipped";
      setImages([...images]);
      setFirstCard(id);
    } else {
      compare(id);
    }
  }

  return (
    <BoardStyled>
      {images
      .sort(() => Math.random() - 0.5)
      .map((image, i) => (
        <Card key={i} id={image.id} image={image} handleClick={handleClick} />
      ))}
    </BoardStyled>
  );
}

export default Board;
