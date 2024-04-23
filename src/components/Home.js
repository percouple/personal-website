import React from "react";
import styled from "styled-components";

const StyledIntroContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 15rem;
  background-color: #222222;
  max-width: 500px;
  padding-right: 13px;
  padding-bottom: 13px;
  min-width: max-content;
  scroll-margin-top: 25vh;
`;

const StyledWelcomeParagraph = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  text-align: right;
  max-width: 66vw;
  max-width: 500px;
`;

const StyledCorner = styled.div`
  position: absolute;
  width: 384px;
  height: 46px;
  top: 420px;
  background-color: #5C95FF;
  z-index: -1;
  margin-left: 135px;
`;

const HeroName = styled.h1`
  color: #F17F29;
  text-shadow: 3px 2px 0 #BDC4A7;
  font-size: 5rem;
  margin: 0;
`;

export default function Home() {
  return (
    <div style={{display: "flex", justifyContent: "center", marginBottom: "7rem"}}>
      <StyledCorner></StyledCorner>
      <StyledIntroContainer id="home">
        <h3 style={{ marginBottom: "0px", fontStyle: "italic" }}>Hello, I'm</h3>
        <HeroName>Caleb.</HeroName>
        <StyledWelcomeParagraph>
          I'm a software developer eager to craft engaging experiences tailored
          for entry-level learners. Currently, I'm building projects geared
          towards expanding my proficiency across various coding languages and
          platforms, enriching my versatility in software development.
        </StyledWelcomeParagraph>
      </StyledIntroContainer>
    </div>
  );
}
