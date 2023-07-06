import React from "react";
import "./header.css";
import { Link } from "react-scroll";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import { useState } from "react";

const Header = () => {
  const [onTop, setOnTop] = useState(false);
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  const headerActive = () => {
    if (window.scrollY >= 100) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };
  window.addEventListener("scroll", headerActive);

  return (
    <header className={onTop ? "headerOn" : ""}>
      <h3>Portfólio</h3>
      <div className="mobile-btn" onClick={ToggleMode}>
        {active ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>

      <nav>
        <ul className="desktop-menu">
          <Link
            to="sobre"
            spy={true}
            offset={-70}
            smooth={true}
            duration={500}
            className="link-menu"
          >
            Sobre mim
          </Link>
          <Link
            to="projetos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link-menu"
          >
            Projetos
          </Link>
          <Link
            to="conhecimentos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link-menu"
          >
            Conhecimentos
          </Link>
          <Link
            to="contato"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link-menu"
          >
            Contato
          </Link>
        </ul>
        <ul
          className={active ? "mobile-menu menuOpen" : "mobile-menu menuClose"}
        >
          <Link
            to="sobre"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mobilelink-menu"
            onClick={ToggleMode}
          >
            Sobre mim
          </Link>
          <Link
            to="projetos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mobilelink-menu"
            onClick={ToggleMode}
          >
            Projetos
          </Link>
          <Link
            to="conhecimentos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mobilelink-menu"
            onClick={ToggleMode}
          >
            Conhecimentos
          </Link>
          <Link
            to="contato"
            spy={true}
            smooth={true}
            duration={500}
            className="mobilelink-menu"
            onClick={ToggleMode}
          >
            Contato
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
