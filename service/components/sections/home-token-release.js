import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

export default function HomeTokenRelease() {
  const options = {
    maintainAspectRatio: false,

    legend: {
      display: true,
      position: "right",
      labels: {
        fontFamily: "Source Code Pro",
        fontSize: 14,
        fontColor: "#414141",
        padding: 18,
        boxWidth: 47,
        usePointStyle: false,
      },
    },
  };

  const data = {
    labels: [
      "Public Sale",
      "Cover Traffic",
      "Bounties",
      "Early Token Buyers",
      "Team & Advisors",
      "Treasury",
    ],

    datasets: [
      {
        label: "# of Votes",
        data: [75000000, 250000000, 56875000, 180000000, 200000000, 238125000],
        backgroundColor: [
          "#0B005D",
          "#2200C2",
          "#878A01",
          "#C1C500",
          "#F8FE00",
          "#FDFFA2",
        ],

        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <section
        id="TOKEN-RELEASE"
        className="section-token-release padding-section-aux"
      >
        <div className="container">
          <div>
            <h2>TOKEN RELEASE</h2>
            <p>
              Lock HOPR tokens in your node to relay user data and cover
              traffic. The more you stake, the more data you can relay, and the
              more you earn. A quarter of all HOPR tokens are available only to
              stake's as a reward for relaying cover traffic.
            </p>
          </div>
          <div className="table-info">
            <div className="container-table">
              <div className="title">
                <h4>KEY METRICS</h4>
              </div>
              <div className="list-table">
                <ul>
                  <li>Token Name: HOPR Token</li>
                  <li>Token Symbol: HOPR</li>
                  <li>Network: Ethereum</li>
                  <li>Standards: ERC20, ERC777</li>
                  <li>Total supply: X HOPR</li>
                  <li>Initial circulating supply: X HOPR</li>
                  <li>Token price: X USD / HOPR</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3>Token Allocation (%)</h3>
            <div>
              <Pie data={data} width={100} height={539} options={options} />
            </div>
            <p>
              Lock HOPR tokens in your node to relay user data and cover
              traffic. The more you stake, the more data you can relay, and the
              more you earn. A quarter of all HOPR tokens are available only to
              stake's as a reward for relaying cover traffic.
            </p>
          </div>
          <div>
            <h3>Token Supply Distribution (%)</h3>
          </div>
        </div>
      </section>
    </>
  );
}
