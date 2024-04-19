// import NavBar from './components/NavBar';
import "./App.css";
import About from "./components/About";
// import Header from './components/Header';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Connect from "./components/Footers/Connect";

function App() {

  return (
    <div className='App'>
      {/* <NavBar /> */}
      <Home />
      <About />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
