import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="hero-title"
      >
        Hi, I'm <span className="highlight">Priyanshu Kumar</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="hero-text"
      >
        I build modern and high-performance web applications.
      </motion.p>
      <motion.a 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        href="#projects" 
        className="hero-button"
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;