import React from "react";
import "./Contato.css";
import GitHub from "../../images/github.svg";
import Linkedin from "../../images/LinkedIn1.svg";
import Email from "../../images/email.svg";
import { RxGithubLogo, RxLinkedinLogo, RxEnvelopeClosed } from "react-icons/rx";
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
          <RxGithubLogo />
        </a>
        <a
          href="https://www.linkedin.com/in/joãovitor-franco/"
          target="_blank"
          className="linkedin"
        >
          <RxLinkedinLogo />
        </a>
        <a className="email">
          <RxEnvelopeClosed />
        </a>
      </div>
    </div>
  );
};

export default Contato;
