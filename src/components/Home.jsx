import React from "react";
import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";
import "../styles/Home.css";

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
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ReactTyped
          strings={[
            "A Passionate Web Developer 🚀",
            "Building Responsive & Interactive Websites",
            "Creating Stunning UI/UX Experiences"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </motion.h2>
      
    </motion.div>
  );
};

export default Home;