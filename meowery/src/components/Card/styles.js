import styled from "styled-components";

export const CardStyledInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

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
  background-color: red;
  backface-visibility: hidden;
`;

export const CardStyled = styled.div`
  width: 100px;
  height: 100px;
  perspective: 1000px;
  background-color: transparent;
  border-radius: 4px;
`;

export const CardStyledFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

export const CardImageStyled = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  object-fit: contain;
`;
