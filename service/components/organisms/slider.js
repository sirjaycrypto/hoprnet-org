import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";

export default function Slide() {
  const dataInfo = {
    0: {
      title: "Name, Position",
      paragraph:
        "This is a quote that should address HOPRS’ vision and it’s added value",
    },
    1: {
      title: "test-test",
      paragraph: `Lock HOPR tokens in your node to relay user data and cover traffic. The more you stake, the more data you can relay, and the more you earn.`,
    },
    2: {
      title: "test-test-test",
      paragraph: `A quarter of all HOPR tokens are available only to stake's as a reward for relaying cover traffic.`,
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
    <div className="slider">
      <div className="main-slide">
        <div>
          <p className="text-info">«{current.paragraph}»</p>
          <p className="text-label-data">{current.title}</p>
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
