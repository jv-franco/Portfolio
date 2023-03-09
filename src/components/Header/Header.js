import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import { useState } from "react";

const Header = () => {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  return (
    <header>
      <h3>Portfólio</h3>
      <div className="mobile-btn" onClick={ToggleMode}>
        {active ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>

      <nav>
        <ul className="desktop-menu">
          <li className="link-menu">Sobre mim</li>
          <li className="link-menu">Projetos</li>
          <li className="link-menu">Conhecimentos</li>
          <li className="link-menu">Contato</li>
        </ul>
        <ul
          className={active ? "mobile-menu menuOpen" : "mobile-menu menuClose"}
        >
          <li className="mobilelink-menu" onClick={ToggleMode}>
            Sobre mim
          </li>
          <li className="mobilelink-menu" onClick={ToggleMode}>
            Projetos
          </li>
          <li className="mobilelink-menu" onClick={ToggleMode}>
            Conhecimentos
          </li>
          <li className="mobilelink-menu" onClick={ToggleMode}>
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
