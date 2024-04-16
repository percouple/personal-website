import React from "react";
import styled from 'styled-components'

const StyledNewStuffContainer = styled.div`
border-radius: 10px;
border-style: solid;
border-width: 2px;
margin: 10px;
`;

export default function Home() {

  return (
    <div>
      <div>What's new: </div>
      <StyledNewStuffContainer className="newStuffContainer" >
      </StyledNewStuffContainer>
    </div>
  );

}
