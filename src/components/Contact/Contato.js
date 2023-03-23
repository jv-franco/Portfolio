import React from "react";
import "./Contato.css";
import GitHub from "../../images/github.svg";
import Linkedin from "../../images/LinkedIn1.svg";
import Email from "../../images/email.svg";
import { RxGithubLogo, RxLinkedinLogo, RxEnvelopeClosed } from "react-icons/rx";
const Contato = () => {
  return (
    <div className="contact-section" id="contato" data-aos="zoom-in-up">
      <h2 className="section-title">Contato</h2>
      <div className="contact-container">
        <a
          data-aos="zoom-in-up"
          className="github"
          href="https://github.com/jv-franco"
          target="_blank"
        >
          <RxGithubLogo />
        </a>
        <a
          data-aos="zoom-in-up"
          href="https://www.linkedin.com/in/joãovitor-franco/"
          target="_blank"
          className="linkedin"
        >
          <RxLinkedinLogo />
        </a>
        <a
          data-aos="zoom-in-up"
          className="email"
          href="mailto:jv_franco@outlook.com?subject=Acessei seu Portfólio"
        >
          <RxEnvelopeClosed />
        </a>
      </div>
    </div>
  );
};

export default Contato;
