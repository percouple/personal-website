import React from "react";
import Home from "./Home";
import About from "./Footers/Connect";
import Thoughts from "./Legacy/Thoughts";
import Projects from "./Projects";
import styled from "styled-components";
import {StyledButton} from "../styles/universalStyles";

const StyledNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  background-color: #BDC4A7;
  width: 100vw;
`;

const NavButton = styled.button`

`;

const NavButtonContainer = styled.div`
  
`;

export default function NavBar() {

  const scrollToSection = (e) => {
    const section = document.getElementById(`${e.target.textContent}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledNav id="nav">
      <div>
        bfbfb
      </div>
      <NavButtonContainer>
        <NavButton onClick={scrollToSection}>About</NavButton>
        <NavButton onClick={scrollToSection}>Projects</NavButton>
        <NavButton onClick={scrollToSection}>Connect</NavButton>
      </NavButtonContainer>
    </StyledNav>
  );
}
