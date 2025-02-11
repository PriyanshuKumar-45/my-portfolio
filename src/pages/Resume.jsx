import React from "react";
import { motion } from "framer-motion";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <motion.div
        className="resume-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>My Resume</h2>
        <p>Download my resume to see my skills and experience.</p>
        <motion.a
          href="/PriyanshuResume2025.pdf" 
          download="PriyanshuResume2025.pdf"
          className="download-button"
          whileHover={{ scale: 1.1 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Resume;
