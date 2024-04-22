import React from "react";
import styled from "styled-components";

const StyledWelcomeCard = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr;
  margin: 2rem;
`;

const AboutText = styled.h2`
  grid-column: span 2;
  font-weight: 900;
  font-size: 36px;
  margin-bottom: 0px;
`;

const AboutCard = styled.span`
  display: flex;
  text-align: left;
  background-color: #bdc4a7;
  color: #222222;
  padding: 4px;
  margin-bottom: 3rem;
`;

const AboutParagraph = styled.div`
  max-height: auto;
  max-width: auto;
`;

const PortraitCard = styled.img`
  max-width: 200px;
  max-height: auto;
  box-shadow: 10px 10px 0 0 #ffffff;
  padding: 10px;
  border: solid #5c95ff 4px;
  border-radius: 5%;
  z-index: 1;
`;

const PortraitCardBoxShadow = styled.div``;

export default function About() {
  return (
    <StyledWelcomeCard>
      <AboutText>About</AboutText>
      <AboutCard>
        <AboutParagraph>{`I’m a professional software engineer interested in creating experiences that apply at the local level. The question that I aim to answer boils down to: “how do we use technology and the internet to create a better community life?” 
                
                Through my skills gained as a professional musician and educator, I’m uniquely suited to learning and perfecting new technologies, assisting and educating others, and creating refined, polished products that stand up to rigorous testing.`}</AboutParagraph>
      </AboutCard>
      <PortraitCardBoxShadow>
        <PortraitCard src="/photos/portrait.jpeg"></PortraitCard>
      </PortraitCardBoxShadow>
    </StyledWelcomeCard>
  );
}
