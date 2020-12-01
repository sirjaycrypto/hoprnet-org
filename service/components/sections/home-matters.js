import React, { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import { Line } from "react-chartjs-2";

export default function HomeMatter({ isVisible }) {
  const data = {
    labels: [
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        data: [
          176232,
          241812,
          368808,
          522840,
          614016,
          718176,
          869112,
          1152648,
          1464000,
          1810908,
          2237436,
          2740932,
          3337284,
          4200000,
        ],
        fill: false,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#648CFA",
      },
    ],
  };

  const options = {
    legend: {
      display: false,
      spanGaps: false,
    },
    borderCapStyle: "round",
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
  return (
    <section
            id="WHY-IT-MATTERS"
            className="section-why-matters padding-section-aux invert-color "
          >
    <TrackVisibility partialVisibility>
{({ isVisible }) =>
        isVisible && (
            
            <div className="container ">
              <h2>WHY IT MATTERS…</h2>

              <div className="container-sm">
                <div className="container-char">
                  <Line data={data} options={options} />
                </div>
              </div>
              <div>
                <p className="link-out">
                  Source: Cisco Visual Networking Index
                </p>
              </div>
              <p>
                "Millions of Gigabytes are transmitted across the globe every
                minute. The global internet bandwidth is still growing
                exponentially due to new technologies such as 5G. A lot of this
                massive amount of data is confidentially transmitted by people
                or corporations that need protection. The HOPR protocol brings
                metadata privacy on the network level for all of them. The HOPR
                network is driven by the HOPR token."
              </p>
              <div className="container-center-center">
                <div className="type-btn">
                  <span>Get HOPR-Token on SECRET</span>
                </div>
              </div>
            </div>
              )
            }
          </TrackVisibility>
          </section>
      
  );
}
