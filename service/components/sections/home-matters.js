import React, { forwardRef, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { Line } from "react-chartjs-2";

const HomeMatter = forwardRef(({ setVisibleNow }, ref) => {
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
        borderDash: [1, 0],
        fill: false,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#648CFA",
      },
    ],
  };

  const optionsLine = {
    maintainAspectRatio: !1,
    legend: {
      display: false,
      spanGaps: false,
    },
    responsive: true,
    borderCapStyle: "round",
    elements: {
      point: {
        radius: 0,
        borderWidth: 0,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            max: 5000000,
            min: 0.0,
            stepSize: 1000000,
            callback: function (value, index, values) {
              return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit: 7,
          },
        },
      ],
    },
  };

  return (
    <section
      ref={ref}
      id="WHY-IT-MATTERS"
      className="section-why-matters padding-section-aux invert-color "
    >
      <div className="container">
        <div className="container-center-center">
          <h2>{t("homeWhyMatt:title")}</h2>
        </div>
        <div className="flex-line-row">
          <div className="aux-padding-box-read">
            <p>"{t("homeWhyMatt:mainText")}"</p>
          </div>
          <div>
            <div className="container-char">
              <Line data={data} options={optionsLine} />
            </div>
            <div className="center-help">
              <p className="link-out">{t("homeWhyMatt:labelDate")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HomeMatter;
