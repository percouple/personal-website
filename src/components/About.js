import React from "react";
import styled from "styled-components";

const StyledWelcomeCard = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr;
  margin: 2rem auto;
  max-width: 600px;
`;

const AboutText = styled.h2`
  font-weight: 900;
  font-size: 36px;
  margin-bottom: 0px;
  margin-top: 0;
  margin-right: 0.5rem;
  text-align: right;
  background-color: #222222;
`;

const AboutCard = styled.span`
  text-align: left;
  padding: 4px;
  margin-bottom: 3rem;
  grid-column: 1;
  box-shadow: -20px 10px 0 #5c95ff;
`;

const AboutParagraph = styled.div`
  max-height: auto;
  max-width: auto;
  font-size: 14px;
  padding: 14px;
  background-color: #bdc4a7;
  color: #222222;
`;

const PortraitContainer = styled.div`
  margin-top: 1.5rem;
  grid-column: 2;
  grid-row: 1 / span 2;
  overflow: hidden;
`;

const PortraitCard = styled.img`
  max-height: 9.5rem;
  object-fit: cover;
  clip-path: circle(40%);

  &hover {
  }
`;

const AboutLiner = styled.div`
  position: relative;
  background-color: #f17f29;
  margin-right: 390px;
  width: 220px;
  height: 30px;
  bottom: 388px;
  z-index: -1;
`;

const PortraitLiner = styled.div`
  position: relative;
  background-color: #317a23;
  width: 130px;
  height: 100px;
  top: 320px;
  left: 220px;
  z-index: -2;
`;

const PortraitLinerBackground = styled.div`
  position: relative;
  background-color: #222222;
  width: 150px;
  height: 100px;
  top: 315px;
  left: 65px;
  z-index: -1;
`;

export default function About() {
  return (
    <div id="about" style={{ scrollMarginTop: "10vh", paddingLeft: "3rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
      <PortraitLiner></PortraitLiner>
      <PortraitLinerBackground></PortraitLinerBackground>
      </div>
      <StyledWelcomeCard>
        <AboutText>About</AboutText>
        <AboutCard>
          <AboutParagraph>
            I’m a professional software engineer interested in creating
            experiences that apply at the local level. The question that I aim
            to answer boils down to: “how do we use technology and the internet
            to create a better community life?”
          </AboutParagraph>
          <AboutParagraph>
            Through my skills gained as a professional musician and educator,
            I’m uniquely suited to learning and perfecting new technologies,
            assisting and educating others, and creating refined, polished
            products that stand up to rigorous testing.
          </AboutParagraph>
        </AboutCard>
        <PortraitContainer>
          <PortraitCard src="/photos/portrait.jpeg"></PortraitCard>
        </PortraitContainer>
      </StyledWelcomeCard>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AboutLiner></AboutLiner>
      </div>
    </div>
  );
}
