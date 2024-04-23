import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  color: #222222;
  background-color: #bdc4a7;
  width: 100vw;
  height: auto;
  margin-bottom: 2rem;
  padding-top: .5rem;
  position: sticky;
  top: 0px;
  z-index: 1000;
  box-shadow: 0px 3px 0px #f17f29;
  min-width: 600px;
`;

const NavButton = styled.button`
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  min-height: 1rem;
  min-width: 5rem;
  border: solid #222222 1px;
  font-family: "Space Grotesk";
  font-weight: 500;
  color: #bdc4a7;
  background-color: #317a23;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #5c95ff;
  }
`;

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
      <div style={{ paddingLeft: "2rem" }}>Contact me!</div>
      <NavButtonContainer>
        {/* prettier-ignore */}
        <NavButton onClick={() => scrollToSection("about")}>About</NavButton>
        {/* prettier-ignore */}
        <NavButton onClick={() => scrollToSection("projects")}>Projects</NavButton>
        {/* prettier-ignore */}
        <NavButton onClick={() => scrollToSection("connect")}>Connect</NavButton>
        <NavButton onClick={() => scrollToSection("home")}>Top</NavButton>
      </NavButtonContainer>
    </StyledNav>
  );
}
