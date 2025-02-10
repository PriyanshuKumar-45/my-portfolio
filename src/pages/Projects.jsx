import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Full-featured platform with cart, checkout & payments.",
    image: "/ecommerce.png",
    link: "https://your-ecommerce-link.com",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Education Platform",
    description: "Interactive online learning platform with courses.",
    image: "/education.png",
    link: "https://your-education-link.com",
    tech: ["React", "Next.js", "Firebase"],
  },
  {
    title: "Video Chat App",
    description: "Real-time video chat app using WebRTC & Socket.io.",
    image: "/videochat.png",
    link: "https://your-videochat-link.com",
    tech: ["React", "WebRTC", "Socket.io"],
  },
];

const Projects = () => {
  return (
    <Element name="projects">
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
    </Element>
  );
};

export default Projects;
