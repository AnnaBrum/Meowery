import { CounterStyled } from "./styled";

function Counter({ turns }) {
  return (
    <CounterStyled>
      <p>Turns: {turns}</p>
    </CounterStyled>
  );
}

export default Counter;
