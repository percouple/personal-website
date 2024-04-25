import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Connect from "./components/Footers/Connect";
import SocialLinks from "./components/SocialLinks";
import styled from "styled-components";

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
  min-width: 600px;
  overflow: hidden;
  overflow-y: scroll;
`;

const Scrollbar = styled.div`
  width: 20px;
`;

function App() {
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
}

export default App;
