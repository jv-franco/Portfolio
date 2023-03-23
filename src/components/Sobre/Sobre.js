import React from "react";
import "./sobre.css";
import Eu from "../../images/eu.jpeg";
import { Link } from "react-scroll";
const Sobre = () => {
  return (
    <div className="container-sobre" id="sobre">
      <div className="sobre">
        <div
          className="sobre-text"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="sobre-title">Olá, eu sou o João Vitor! </h2>

          <p>
            Sou um desenvolvedor web apaixonado por tecnologia desde jovem. Com
            conhecimentos em HTML, CSS, JS e React, crio projetos envolventes e
            funcionais. Busco constantemente novos desafios e aprendizados na
            área, que considero fascinante e emocionante. Me dedico a entregar
            sempre o melhor resultado em meus projetos e estou animado para ver
            onde minha paixão pela tecnologia me levará.
          </p>
        </div>
        <div
          className="sobre-img"
          data-aos="fade-left"
          data-aos-duration="1000"
          style={{ backgroundImage: { Eu } }}
        ></div>
      </div>
      <Link
        to="contato"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        delay={10}
        className="toContact"
      >
        Entrar em Contato
      </Link>
    </div>
  );
};

export default Sobre;
