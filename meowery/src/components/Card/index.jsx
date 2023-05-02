import {
  CardStyled,
  CardStyledInner,
  CardStyledFront,
  CardStyledBack,
  CardImageStyled,
} from "./styled";

function Card({ image, index, handleClick }) {

  // const cardClassName = image.status ? "flipped" : "";

  return (
    <CardStyled onClick={() => handleClick(index)}>
      <CardStyledInner className={image.status}>
        <CardStyledFront>
          <CardImageStyled src={image.url} alt="cat-image" />
        </CardStyledFront>
        <CardStyledBack></CardStyledBack>
      </CardStyledInner>
    </CardStyled>
  );
}
export default Card;
