import React from "react";
import TrackVisibility from "react-on-screen";
import { Line } from "react-chartjs-2";
import useTranslation from "next-translate/useTranslation";
export default function HomeMatter({ isVisible }) {
  const { t } = useTranslation();
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

  const optionsLine = {
    legend: {
      display: false,
      spanGaps: false,
    },
    responsive:true,
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
              <h2>{t("homeWhyMatt:title")}…</h2>

              <div className="container">
                <div className="container-char">
                  <Line data={data} options={optionsLine} />
                </div>
              </div>
              <div>
                <p className="link-out">{t("homeWhyMatt:labelDate")}</p>
              </div>
              <p>"{t("homeWhyMatt:mainText")}"</p>
              <div className="container-center-center">
                <div className="type-btn">
                  <span>{t("homeWhyMatt:btnLabel")}</span>
                </div>
              </div>
            </div>
          )
        }
      </TrackVisibility>
    </section>
  );
}
