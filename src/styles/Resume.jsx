import React from 'react';
import { Element } from 'react-scroll';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <Element name="resume" className="resume-section">
      <div className="resume-container" data-aos="fade-up">
        <h2>My Resume</h2>
        <p>
          Below is a brief overview of my experience and skills. For a detailed
          version, please download my full resume.
        </p>
        <a
          href="/path-to-your-resume.pdf"
          download
          className="download-button"
        >
          Download Resume
        </a>
      </div>
    </Element>
  );
};

export default Resume;