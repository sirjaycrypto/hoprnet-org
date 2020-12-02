import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import useTranslation from "next-translate/useTranslation";
export default function Slide() {
  const { t } = useTranslation();
  const dataInfo = {
    0: {
      title: "homeSlide:slideA",
      paragraph:"homeSlide:slideAMain"
    },
    1: {
      title: "homeSlide:slideB",
      paragraph:"homeSlide:slideBMain"
    },
    2: {
      title: "homeSlide:slideC",
      paragraph:"homeSlide:slideCMain"
    },
  };

  const [current, setCurrent] = useState(dataInfo[0]);
  const [active, setActive] = useState(0);

  const handleSetClick = (event) => {
    console.log(event);
    setCurrent(dataInfo[event.target.getAttribute("data-quote")]);
    setActive(event.target.getAttribute("data-quote"));
  };
  let aux = 0;
  let numList = Object.keys(dataInfo).length;
  useEffect(() => {
    setInterval(() => {
      if (aux < numList) {
        setCurrent(dataInfo[aux]);
        setActive(aux);
        aux++;
      } else {
        aux = 0;
      }
    }, 3000);
  }, []);
  return (
    <div className="slider invert-color ">
      <div className="main-slide container">
        <div>
          <p className="text-info">«{t(current.title)}»</p>
          <p className="text-label-data">{t(current.paragraph)}</p>
        </div>
        <div
          className={css`
          position: absolute;
          bottom: 13%;
            display: flex;
            justify-content: center;
            span {
              height: 20px;
              width: 20px;
              margin: 0 3px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              border: 2px solid #0000b4;
              border-radius: 100%;
              @media (max-width: 50em) {
                height: 10px;
                width: 10px;
              }
            }

            span:hover {
              background-color: #0000b4;
            }
            span[data-quote="${active}"] {
              background-color: #0000b4;
            }
          `}
        >
          {Object.keys(dataInfo).map((index) => (
            <span
              onClick={(event) => handleSetClick(event)}
              data-quote={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
