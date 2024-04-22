import NavBar from "./components/NavBar";
import "./App.css";
import About from "./components/About";
// import Header from './components/Header';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Connect from "./components/Footers/Connect";
import styled from "styled-components";

const BodyStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 26px;
  scroll-behavior: smooth;
  min-width: 600px;

  ::-webkit-scrollbar {
    background-color: #fff;
    width: 26px;
  }

  ::-webkit-scrollbar-track {
    background-color: #222222;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5c95ff;
    border: solid #222222 8px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;

function App() {
  return (
    <>
      <NavBar />
      <BodyStyles>
        <Home />
        <About />
        <Projects />
        <Connect />
      </BodyStyles>
    </>
  );
}

export default App;
