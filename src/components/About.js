import React from "react";
import styled from "styled-components";

const StyledWelcomeCard = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr;
  margin: 2rem;
`;

const StyledBackground = styled.div``;

const AboutText = styled.h2`
  font-weight: 900;
  font-size: 36px;
  margin-bottom: 0px;
  margin-top: 0;
`;

const AboutCard = styled.span`
  text-align: left;
  padding: 4px;
  margin-bottom: 3rem;
  grid-column: 1;
`;

const AboutParagraph = styled.div`
  grid-row: 1;
  max-height: auto;
  max-width: auto;
  font-size: 14px;
  margin-bottom: 14px;
`;

const PortraitCard = styled.img`
  max-width: 200px;
  max-height: auto;
  box-shadow: 0px 10px 0 0 #ffffff;
  padding: 10px;
  border: solid #5c95ff 4px;
  grid-column: 2;
  grid-row: span 2;
`;

export default function About() {
  return (
    <div id="about" style={{scrollMargin: "90px"}}>
      <StyledBackground></StyledBackground>
      <StyledWelcomeCard>
        <AboutText>About</AboutText>
        <PortraitCard src="/photos/portrait.jpeg"></PortraitCard>
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
      </StyledWelcomeCard>
    </div>
  );
}
