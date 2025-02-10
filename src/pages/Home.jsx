import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hi, I'm <span>Priyanshu Kumar</span>
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I am a passionate Web Developer 🚀
      </motion.p>
      <motion.a 
        href="/resume.pdf" 
        download 
        className="btn"
        whileHover={{ scale: 1.1 }}
      >
        Download Resume
      </motion.a>
    </motion.div>
  );
};

export default Home;