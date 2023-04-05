import React from "react";
//import PropTypes from "prop-types";
import { BoradStyled } from "./styled";
import Card from "../Card/";
import img from "../../images/cat01.jpeg";

// const catImgArray=[
//   'id' = 1,
//   'url' = img
// ];

const Board = () => {
  return (
    <BoradStyled>
      <Card image={img} />
      <Card image={img} />
      <Card image={img} />
      <Card image={img} />
      <Card image={img} />
      <Card image={img} />
      <Card image={img} />
      <Card image={img} />
    </BoradStyled>
  );
};

export default Board;
