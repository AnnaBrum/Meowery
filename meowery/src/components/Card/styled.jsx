import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
`;

export const CardFront = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  object-fit: fill;
  border-radius: 10px;
`;

export const CardInner = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  object-fit: contain;
`;

export const CardFrontInner = styled(CardInner)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  transform: rotateY(180deg);
  transition: all ease-in 0.2s;
  backface-visibility: hidden;
  border-radius: 10px;
`;

export const CardBack = styled(CardInner)`
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
  background-color: rgb(255, 200, 240);
  border-radius: 10px;
  cursor: pointer;
`;

export const FlippedCardFrontInner = styled(CardFrontInner)`
  transform: rotateY(0deg);
  transition-delay: 0.4s;
`;

export const FlippedCardBack = styled(CardBack)`
  transform: rotateY(90deg);
  transition-delay: 0s;
`;