import NavBar from './components/NavBar';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import ConnectFooter from './components/ConnectFooter';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <NavBar /> */}
      <Home />
      <Projects />
      <ConnectFooter />
    </div>
  );
}

export default App;
