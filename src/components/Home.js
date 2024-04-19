import React from "react";
import styled from 'styled-components'

const StyledIntroContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
  margin-left: auto;
  margin-right: auto;
`;

const HeroName = styled.h1`
  color: #5C95FF;
  text-shadow: 3px 2px 0 #F17F29;
  font-size: 5rem;
  margin: 0;
`

export default function Home() {

  return (
    <div>
      <StyledIntroContainer>
        <div>HELLO, my name is</div>
        <HeroName>Caleb Evans</HeroName>
        <h2>I build things for the web</h2>
      </StyledIntroContainer>
    </div>
  );

}
