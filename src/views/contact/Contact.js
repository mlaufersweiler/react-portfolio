import React from "react";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-body">
      <div className="contact-header">Contact Me</div>

      <div className="contact-links">
        <a href="https://www.linkedin.com/in/michael-laufersweiler/" target="_blank">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/mlaufersweiler" target="_blank">
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
