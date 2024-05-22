import NavBar from "./components/Nav/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Connect from "./components/Footers/Connect";
import SocialLinks from "./components/SocialLinks";
import ExpandableNav from './components/Nav/ExpandableNav';
import styled from "styled-components";
import React, { useState, useEffect } from "react";

const PageStyle = styled.div`
  position: relative;
  overflow-x: clip;
`;

const BodyWithSide = styled.div`
  display: flex;
  justify-content: start;
  position: relative;
`;

const BodyStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
`;

const Scrollbar = styled.div`
  width: 20px;
`;

function App() {

  let [curScreenWidth, setCurScreenWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setCurScreenWidth(window.innerWidth);
  })
  
  if (curScreenWidth > 766) {
    return ( 
      <PageStyle >
        <NavBar />
        <BodyWithSide>
          <SocialLinks />
          <BodyStyles>
            <Home />
            <About />
            <Projects />
            <Connect />
          </BodyStyles>
          <Scrollbar />
        </BodyWithSide>
      </PageStyle>
    );
  } else {
    return (
      <PageStyle >
        <ExpandableNav/>
          <BodyStyles>
            <Home />
            <About />
            <Projects />
            <Connect />
          </BodyStyles>
          <Scrollbar />
      </PageStyle>
    )
  }

}

export default App;
