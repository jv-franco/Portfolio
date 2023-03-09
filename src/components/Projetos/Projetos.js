import React, { useEffect, useState, Link } from "react";
import "./Projetos.css";

import Data from "./ProjectData";

const Projetos = (props) => {
  const [isHover, setIsHover] = useState(-1);

  return (
    <div className="project">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="container-project">
        {Data.map((item, index) => (
          <div key={item.id}>
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className="project-img"
              onMouseEnter={() => setIsHover(index)}
              onMouseLeave={() => setIsHover(-1)}
            >
              <h3 className="project-tittle">{item.name}</h3>
              <div
                className={
                  isHover == index ? "project-btn show" : "project-btn hidden"
                }
              >
                <a href={item.demo} target="_blank" className="btn-demo">
                  Demo
                </a>
                <a href={item.code} target="_blank" className="btn-code">
                  Code
                </a>
                <a href={item.more} target="_self" className="btn-more">
                  Detalhes
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;
