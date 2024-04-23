import React from "react";
import styled from "styled-components";

const StyledIntroContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 15rem;
  background-color: #222222;
  box-shadow: -10px -10px 0 10px green;  

`;

const StyledWelcomeParagraph = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  text-align: right;
  max-width: 66vw;
  max-width: 500px;
`;

const HeroName = styled.h1`
  color: #5c95ff;
  text-shadow: 3px 2px 0 #f17f29;
  font-size: 5rem;
  margin: 0;
`;

export default function Home() {
  return (
    <div id="home" style={{backgroundColor: "#BDC4A7" }}>
      <StyledIntroContainer> Styled intro container
        <h3 style={{marginBottom: "0px", fontStyle: "italic"}}>Hello, I'm</h3>
        <HeroName>Caleb.</HeroName>
        <StyledWelcomeParagraph>
          I'm a software developer eager to craft engaging experiences
          tailored for entry-level learners. Currently, I'm building projects
          geared towards expanding my proficiency across various coding
          languages and platforms, enriching my versatility in
          software development.
        </StyledWelcomeParagraph>
      </StyledIntroContainer>
    </div>
  );
}
