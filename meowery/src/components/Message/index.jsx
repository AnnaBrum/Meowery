import { MessageStyled } from "./styled";

function Message({ matched }) {

  return matched && ( 
    <MessageStyled>
      <p>I'ts a match!</p>
    </MessageStyled>
  );
}

export default Message;
