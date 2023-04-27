
import {
  CardStyled,
  CardStyledInner,
  CardStyledFront,
  CardStyledBack,
  CardImageStyled,
} from "./styles";

function Card({cat, id, handleClick}) {

  const imageClass = cat.status ? " flipped" + cat.status : "";
  
  return (
    <CardStyled  onClick={() => handleClick(id)}>
      <CardStyledInner className={imageClass}>
        <CardStyledFront>
          <CardImageStyled
            src={cat.cat_img}
            alt="cat-image"
          />
        </CardStyledFront>
        <CardStyledBack>hej</CardStyledBack>
      </CardStyledInner>
    </CardStyled>
    
  );
};
export default Card;

