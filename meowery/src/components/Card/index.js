
import {
  CardStyled,
  CardStyledInner,
  CardStyledFront,
  CardStyledBack,
  CardImageStyled,
} from "./styles";

function Card({image, id, handleClick}) {

  const imageClass = image.status ? " flipped" + image.status : "";
  
  return (
    <CardStyled  onClick={() => handleClick(id)}>
      <CardStyledInner className={imageClass}>
        <CardStyledFront>
          <CardImageStyled
            src={image.url}
            alt="cat-image"
          />
        </CardStyledFront>
        <CardStyledBack></CardStyledBack>
      </CardStyledInner>
    </CardStyled>
    
  );
};
export default Card;

