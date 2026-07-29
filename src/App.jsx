import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />

      <div className="scroll-content">
        <Intro />
        <Projects />
      </div>
    </div>
  );
}

export default App;