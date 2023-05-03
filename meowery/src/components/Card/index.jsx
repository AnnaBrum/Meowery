// import {
//   CardStyled,
//   CardStyledInner,
//   CardStyledFront,
//   CardStyledBack,
//   CardImageStyled,
// } from "./styled";
import "./card.css";

function Card({ card, handleChoice, flipped }) {

  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.url} alt="cat" />
        <div className="back" onClick={handleClick}></div>
      </div>
    </div>
  )
};

export default Card;
