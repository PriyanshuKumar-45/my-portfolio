import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./styles/Resume";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;