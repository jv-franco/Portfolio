import React, { useEffect, useState, Link } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Projetos.css";

import Data from "./ProjectData";

const Projetos = (props) => {
  const [selectItem, setSelectItem] = useState({});
  const [isHover, setIsHover] = useState(-1);
  const [showDetails, setShowDetails] = useState(false);
  function OpenDetails(item) {
    setSelectItem(item);
    setShowDetails(!showDetails);
  }

  function CloseDetails() {
    setShowDetails(!showDetails);
    selectItem({});
  }

  return (
    <div className="project" id="projetos">
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
              {item.demo == "" ? (
                <div
                  className={
                    isHover == index ? "project-btn show" : "project-btn hidden"
                  }
                >
                  <a href={item.code} target="_blank" className="btn-code">
                    Code
                  </a>
                  <a
                    target="_self"
                    className="btn-more"
                    onClick={() => OpenDetails(item)}
                  >
                    Detalhes
                  </a>
                </div>
              ) : (
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
                  <a
                    target="_self"
                    className="btn-more"
                    onClick={() => OpenDetails(item)}
                  >
                    Detalhes
                  </a>
                </div>
              )}

              {showDetails && (
                <div className="details-container">
                  <div className="details">
                    <RxCross1
                      className="close-details-btn"
                      onClick={CloseDetails}
                    />
                    <div className="details-demo">
                      <div>
                        {selectItem.video == "" ? (
                          <div className="andamento">
                            {" "}
                            <h3 className="andamento-text">EM BREVE</h3>{" "}
                          </div>
                        ) : (
                          <video
                            className="details-video"
                            width="440px"
                            height="280px"
                            src={selectItem?.video}
                            controls
                            autoPlay
                            loop
                            muted
                          ></video>
                        )}
                      </div>
                      {selectItem.name == "Portfólio" ? (
                        <div className="details-demo-btn">
                          <a
                            href={selectItem?.code}
                            target="_blank"
                            className="details-btn-code"
                          >
                            Code
                          </a>
                        </div>
                      ) : (
                        <div className="details-demo-btn">
                          <a
                            href={selectItem?.demo}
                            target="_blank"
                            className="details-btn-demo"
                          >
                            Demo
                          </a>
                          <a
                            href={selectItem?.code}
                            target="_blank"
                            className="details-btn-code"
                          >
                            Code
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="details-desc">
                      <h4 className="details-title">{selectItem?.name}</h4>{" "}
                      <p className="details-p">{selectItem?.desc}</p>
                      <h5 className="details-data">
                        {selectItem?.detailsData}
                      </h5>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;
