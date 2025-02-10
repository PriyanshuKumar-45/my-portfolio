import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;