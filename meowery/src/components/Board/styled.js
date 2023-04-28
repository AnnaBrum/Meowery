//import React from "react";

import styled from "styled-components";

export const BoardStyled = styled.div`
  height: fit-content;
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  padding: 1rem;
  gap: 1em;
`;
