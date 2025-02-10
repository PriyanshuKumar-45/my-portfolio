import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="resume" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;