import React, { useState, useEffect } from "react";

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
    setCurrent(dataInfo[event.target.getAttribute("data-quote")]);
    setActive(event.target.getAttribute("data-quote"));
  };
  
  let numList = Object.keys(dataInfo).length;
  useEffect(()=>{
    
  },[])
  return (
    <div className="slider">
      <div className="main-slide">
        <p className="text-info">«{current.paragraph}»</p>
        <p className="text-label-data">{current.title}</p>
        <div className="bullets" >
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
