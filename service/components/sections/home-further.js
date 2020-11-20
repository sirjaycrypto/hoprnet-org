import React, { useEffect, useState } from 'react'

export default function HomeFurther() {
  const infoTop = [
    {
      img: "/assets/brand/logo.svg",
      title: "Install HOPR-Node for free via GitHub",
      paragraph:
        "Anyone can run a HOPR node on their own hardware! We provide easy-to-install software for Linux, macOS, Windows, Docker and Cloud Environments.",
    },
    {
      img: "/assets/brand/logo.svg",
      title: "Buy HOPR-Node",
      paragraph: `We need a copy. Anyone can run a HOPR node on their own hardware! We provide easy-to-install software for Linux, macOS, Windows, Docker and Cloud Environments.`,
    },
  ];

  const infoDown = [
    {
      img: "/assets/brand/logo.svg",
      title: "Our Blog",
    },
    {
      img: "/assets/brand/logo.svg",
      title: "Our Values",
    },
    {
      img: "/assets/brand/logo.svg",
      title: "Our Whitepaper",
    },
    {
      img: "/assets/brand/logo.svg",
      title: "Our organizational structure: Decent Gov",
    },
    {
      img: "/assets/brand/logo.svg",
      title: "HOPR in the Media",
    },

  ];

  return (
    <>
      <section className="section-further padding-section-aux invert-color ">
        <div className="container">
          <h2>FURTHER READING</h2>
          <div className="list-top">
          {infoTop.map((e, index) => {
                const { img, title, paragraph } = e;
                return (
                  <div key={index} className="element-future">
                    <div className="icon">
                      <img src={img} alt={title} />
                    </div>
                    <div className="info">
                      <h5>{title}</h5>
                      <p>{paragraph}</p>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="list-down">
          {infoDown.map((e, index) => {
                const { img, title } = e;
                return (
                  <div key={index} className="element-future">
                    <div className="icon">
                      <img src={img} alt={title} />
                    </div>
                    <div className="info">
                      <h5>{title}</h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  )
}
