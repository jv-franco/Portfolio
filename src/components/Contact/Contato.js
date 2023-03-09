import React from "react";
import "./Contato.css";
import GitHub from "../../images/github.svg";
import Linkedin from "../../images/LinkedIn1.svg";
import Email from "../../images/email.svg";
const Contato = () => {
  return (
    <div className="contact-section">
      <h2 className="section-title">Contato</h2>
      <div className="contact-container">
        <a
          className="github"
          href="https://github.com/jv-franco"
          target="_blank"
        >
          <img className="contact-icon" src={GitHub} alt={GitHub}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/joãovitor-franco/"
          target="_blank"
          className="linkedin"
        >
          <img className="contact-icon" src={Linkedin} alt={Linkedin}></img>
        </a>
        <a className="email">
          <img className="contact-icon" src={Email} alt={Email}></img>
        </a>
      </div>
    </div>
  );
};

export default Contato;
