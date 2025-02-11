import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css"; 

const projects = [
  {
    title: "E-Commerce Website",
    description: "Full-featured platform.",
    link: "https://mart-7irgmv5xv-priyanshu-kumars-projects-dccb45ab.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Education Platform",
    description: "Deployment link soon....",
    link: "https://github.com/PriyanshuKumar-45/courses.git",
    tech: ["React", "Next.js", "Firebase"],
  },
  {
    title: "Portfolio Website",
    description: " Build a Portfolio to showcase my skills & work",
    link: "",
    tech: ["React"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;