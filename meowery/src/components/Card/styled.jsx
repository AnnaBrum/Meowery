import styled from "styled-components";

export const CardStyled = styled.div`
  width: 100px;
  height: 100px;
  perspective: 1000px;
  background-color: transparent;
  border-radius: 10px;
  border: .5px solid black;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const CardStyledInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 10px;

 &.flipped {
    transform: rotateY(180deg);
 }

 &.wrong {
  border: 3px solid black;
 }

 &.same {
  border: 3px solid lightgreen;
 }
  
`;


export const CardStyledBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 200, 240);
  backface-visibility: hidden;
  border-radius: 10px;
`;


export const CardStyledFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  border-radius: 10px;
`;

export const CardImageStyled = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  object-fit: fill;
  border-radius: 10px;
`;
