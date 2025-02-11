import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      {/* ✅ IDs Added for Scrolling */}
      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
};

export default App;