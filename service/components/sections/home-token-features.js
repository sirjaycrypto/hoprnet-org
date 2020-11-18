import React, { useEffect, useState } from "react";

export default function HomeTokenFeatures() {
  const dataInfo = [
    {
      img: "/assets/icons/icon-pay.svg",
      title: "Pay",
      paragraph:
        "Spend HOPR tokens to send data through the HOPR network with complete data and metadata privacy. Spent HOPR tokens are paid to the node runners who relay the data as it hops through the network.",
    },
    {
      img: "/assets/icons/icon-stake.svg",
      title: "Stake",
      paragraph: `Lock HOPR tokens in your node to relay user data and cover traffic. The more you stake, the more data you can relay, and the more you earn. A quarter of all HOPR tokens are available only to stake's as a reward for relaying cover traffic.`,
    },
    {
      img: "/assets/icons/icon-vote.svg",
      title: "Vote",
      paragraph:
        "Participate in decentralized, community-enabling governance decisions to shape the future of HOPR, from technical parameters to the composition of the HOPR Association’s board of directors. ",
    },
  ];

  return (
    <>
      <section className="section-token-fea padding-section-aux">
        <div className="aux-container">
          <div className="container-center-center">
            <h2>TOKEN FEATURES</h2>
          </div>
          <div className="container-items">
            <div className="element-boxing">
              {dataInfo.map((e, index) => {
                const { img, title, paragraph } = e;
                return (
                  <div key={index} className="item">
                    <div className="icon-toke-show">
                      <img src={img} alt={title} />
                    </div>
                    <div className="info-cont">
                      <h4>{title}</h4>
                      <p>{paragraph}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
