import React from "react";
import styled from "styled-components";
import { NavButton } from "../../styles/universalStyles";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  color: #222222;
  background-color: #bdc4a7;
  width: 100vw;
  height: auto;
  padding-top: 1rem;
  position: sticky;
  top: 0px;
  z-index: 1000;
  box-shadow: 0px 3px 0px #f17f29;
  min-width: 600px;
`;

const FullNavButton = styled(NavButton)`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  min-height: 1rem;
  min-width: 5rem;
  font-size: 1.25rem;
`;

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 1rem;
`;

export default function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledNav>
      <div style={{ paddingLeft: "2rem" }}></div>
      <NavButtonContainer>
        {/* prettier-ignore */}
        <FullNavButton onClick={() => scrollToSection("about")}>About</FullNavButton>
        {/* prettier-ignore */}
        <FullNavButton onClick={() => scrollToSection("projects")}>Projects</FullNavButton>
        {/* prettier-ignore */}
        <FullNavButton onClick={() => scrollToSection("connect")}>Connect</FullNavButton>
        <FullNavButton onClick={() => scrollToSection("home")}>Top</FullNavButton>
      </NavButtonContainer>
    </StyledNav>
  );
}
