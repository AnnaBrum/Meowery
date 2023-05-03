import { MessageStyled } from "./styled";

function Message({ matched }) {

  // const displayMessage = () => {
  //   if(matched) {
  //     return "It's a match!";
  //   }
  // }
  return matched && ( 
    <MessageStyled>
      <p>It's a match!</p>
    </MessageStyled>
  );
}

export default Message;
