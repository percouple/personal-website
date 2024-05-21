import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavStack from '../data/icons/NavStack.svg';

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

const NavButton = styled.button`
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  min-height: 1rem;
  min-width: 5rem;
  border: black 2px solid;
  font-family: "Space Grotesk";
  font-weight: 700;
  font-size: 1.25rem;
  color: #bdc4a7;
  background-color: #317a23;
  box-shadow: 1px 1px 10px rgba(100, 100, 100, 0.3);
  transition: background-color 0.2s ease, box-shadow 0.2s, color 0.5s ease, transform 0.2s;

  &:hover {
    background-color: #5c95ff;
    box-shadow: 0px 4px 0 #000000;
    color: #222222;
    transform: translate(0px, -4px);
  }
`;

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 1rem;
`;

export default function NavBar() {

    let [navOpen, setNavOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    console.log(navOpen)
  }, [navOpen]);

  return (
    <StyledNav>
      <div style={{ paddingLeft: "2rem" }}></div>
      <img src={NavStack} onClick={() => setNavOpen(!navOpen)}></img>
    </StyledNav>
  );
}
