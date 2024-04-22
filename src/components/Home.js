import React from "react";
import styled from "styled-components";

const StyledIntroContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 6rem;
`;

const StyledWelcomeParagraph = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  text-align: right;
  max-width: 66vw;
`;

const HeroName = styled.h1`
  color: #5c95ff;
  text-shadow: 3px 2px 0 #f17f29;
  font-size: 5rem;
  margin: 0;
`;

export default function Home() {
  return (
    <div>
      <StyledIntroContainer>
        <h3 style={{marginBottom: "0px"}}>HELLO, I'm</h3>
        <HeroName>Caleb</HeroName>
        <StyledWelcomeParagraph>
          I'm a developer eager to craft engaging experiences
          tailored for entry-level learners, fostering a supportive environment
          for growth and skill development. Currently, I'm building projects
          geared towards expanding my proficiency across various coding
          languages and platforms, enriching my versatility in
          software development.
        </StyledWelcomeParagraph>
      </StyledIntroContainer>
    </div>
  );
}
