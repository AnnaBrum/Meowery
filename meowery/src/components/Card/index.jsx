import "./card.css";

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.url} alt="cat" />
        <div className="back" onClick={handleClick}></div>
      </div>
    </div>
  );
}

export default Card;
