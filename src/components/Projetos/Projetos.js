import React, { useState, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Projetos.css";

import Data from "./ProjectData";

const Projetos = (props) => {
  const windowSize = useRef([window.innerWidth]);
  const [selectItem, setSelectItem] = useState({});
  const [isHover, setIsHover] = useState(-1);
  const [showDetails, setShowDetails] = useState(false);
  function OpenDetails(item) {
    setSelectItem(item);
    setShowDetails(!showDetails);
  }

  function CloseDetails() {
    setSelectItem({});
    setShowDetails(!showDetails);
  }

  if (windowSize < 1200) {
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
              id={item.id}
              onMouseEnter={() => setIsHover(index)}
              onMouseLeave={() => setIsHover(-1)}
            >
              <h3 className="project-tittle">{item.name}</h3>
              {item.demo === "" ? (
                <div
                  className={
                    windowSize.current[0] < 1200
                      ? "project-btn show"
                      : isHover === index
                      ? "project-btn show"
                      : "project-btn hidden"
                  }
                >
                  <a
                    href={item.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-code project-btns"
                  >
                    Code
                  </a>
                  <button
                    target="_self"
                    className="btn-more project-btns"
                    onClick={() => OpenDetails(item)}
                  >
                    Detalhes
                  </button>
                </div>
              ) : (
                <div
                  className={
                    windowSize.current[0] < 1200
                      ? "project-btn show"
                      : isHover === index
                      ? "project-btn show"
                      : "project-btn hidden"
                  }
                >
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-demo project-btns"
                  >
                    Demo
                  </a>
                  <a
                    href={item.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-code project-btns"
                  >
                    Code
                  </a>
                  <button
                    target="_self"
                    className="btn-more project-btns"
                    onClick={() => OpenDetails(item)}
                  >
                    Detalhes
                  </button>
                </div>
              )}

              {showDetails && (
                <div className="details-container">
                  <div className="details">
                    <RxCross1
                      className="close-details-btn"
                      onClick={() => CloseDetails()}
                    />
                    <div className="details-demo">
                      <div className="video">
                        {selectItem.video === "" ? (
                          <div className="andamento">
                            <h3 className="andamento-text">EM BREVE</h3>
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
                      {selectItem.demo === "" ? (
                        <div className="details-demo-btn">
                          <a
                            href={selectItem?.code}
                            target="_blank"
                            rel="noreferrer"
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
                            rel="noreferrer"
                            className="details-btn-demo"
                          >
                            Demo
                          </a>
                          <a
                            href={selectItem?.code}
                            target="_blank"
                            rel="noreferrer"
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
