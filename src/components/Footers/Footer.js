import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export default function Footer() {
  return (
    <StyledDiv>
      <h6>Created by Caleb Evans</h6>
    </StyledDiv>
  );
}
