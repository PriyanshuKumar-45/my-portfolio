import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="navbar">
      <ul>
        {["home", "projects", "resume", "contact"].map((section) => (
          <li key={section}>
            <button
              className={activeSection === section ? "active" : ""}
              onClick={() => handleScroll(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;