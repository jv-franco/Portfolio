import React from "react";
import "../Conhecimentos/conhecimento.css";

import HabilityData from "../Conhecimentos/HabilityData";
const Conhecimentos = () => {
  return (
    <div className="container-conhecimentos">
      <h2 className="section-title">Conhecimentos</h2>
      <div className="hability-container">
        {HabilityData.map((item) => (
          <div className="card-container">
            <div className="card">
              <div className="front">
                <img src={item.img}></img>
              </div>
              <div className="back">
                <h4>{item.name}</h4>
                <div className="card-desc">
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conhecimentos;
