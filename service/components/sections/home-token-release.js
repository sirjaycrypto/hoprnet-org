import React, { useState, useEffect, forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";
import { Line, Pie } from "react-chartjs-2";

import dataSupply from "../../public/assets/json/dataSupply.json";

function intlFormat(num) {
  return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
}

function makeFriendly(num) {
  if (num >= 1000000) return intlFormat(num / 1000000) + "M";
  if (num >= 1000) return intlFormat(num / 1000) + "k";
  return intlFormat(num);
}

const HomeTokenRelease = forwardRef(({ setVisibleNow }, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (window.matchMedia("screen and (max-width: 797px)").matches) {
      setIsMobile(true);
    }
  }, []);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      mode: "x-axis",
      bodyFontFamily: "Source Code Pro",
    },
    legend: {
      display: true,
      position: isMobile ? "bottom" : "right",
      responsive: false,
      maintainAspectRatio: false,
      labels: {
        fontFamily: "Source Code Pro",
        fontSize: 14,
        fontColor: "#414141",
        padding: 18,
        boxWidth: 21,
        usePointStyle: false,
      },
    },
  };

  const data = {
    labels: [
      t("home:graphic.public"),
      t("home:graphic.cover"),
      t("home:graphic.bounties"),
      t("home:graphic.early"),
      t("home:graphic.team"),
      t("home:graphic.treasury"),
    ],
    datasets: [
      {
        label: t("home:graphic.votes"),
        data: [75000000, 250000000, 56875000, 180000000, 200000000, 238125000],
        backgroundColor: [
          "#FEFDAF",
          "#FEFDAF",
          "#C0F3FF",
          "#4B79B4",
          "#1423C1",
          "#060D62",
        ],
        borderColor:'#fff',
        borderWidth: 3,
  
      },
    ],
  };

  const dataDate = dataSupply.map((item) => item.Date);
  const dataTreasury = dataSupply.map((item) => item.Treasury);
  const dataTeamNAdvisors = dataSupply.map((item) => item[t("home:graphic.team")]);
  const dataEarlyTokenBuyers = dataSupply.map(
    (item) => item[t("home:graphic.early")]
  );
  const dataBounties = dataSupply.map((item) => item.Bounties);
  const dataCoverTraffic = dataSupply.map((item) => item[t("home:graphic.cover")]);
  const dataPublicSale = dataSupply.map((item) => item[t("home:graphic.public")]);

  function cleanData(elements) {
    return elements.map(function (elem) {
      return parseFloat(
        elem.split(",").join("").trim()
      );
    });
  }

  const dataOption = {
    maintainAspectRatio: !1,
    elements: {
      point: {
        radius: 0,
        borderWidth: 0,
      },
    },
    tooltips: {
      mode: "x-axis",
      bodyFontFamily: "Source Code Pro",
      callbacks: {
        label: function (e, t) {
          return ""
            .concat(t.legend[e.datasetIndex], " ")
            .concat(
              e.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
              " HOPR"
            );
        },
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
          },
          stacked: !0,
          beginAtZero: true,
          ticks: {
            fontFamily: "Source Code Pro",
            fontSize: 14,
            fontColor: "#414141",
            padding: 18,
            max: 1000000000,
            min: 0.0,
            stepSize: 250000000,
            callback: function (value) {
              return makeFriendly(value);
            },
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            maxRotation: 100,
            minRotation: 90,
            maxTicksLimit: 12,
          },
        },
      ],
    },
    legend: {
      position: isMobile ? "bottom" : "right",
      labels: {
        fontFamily: "Source Code Pro",
        fontSize: 14,
        fontColor: "#414141",
        padding: 18,
        boxWidth: 16,
        usePointStyle: false,
      },
    },
  };

  const dataTokenSupply = {
    legend: [
      t("home:graphic.public"),
      t("home:graphic.cover"),
      t("home:graphic.bounties"),
      t("home:graphic.early"),
      t("home:graphic.team"),
      t("home:graphic.treasury"),
    ],
    labels: dataDate,
    datasets: [
      {
        label: t("home:graphic.public"),
        data: cleanData(dataPublicSale),
        backgroundColor: ["#FEFDAF"],
        pointBackgroundColor: "#FEFDAF",
        borderColor:'#fff',
        borderWidth: 2,
        pointBorderWidth: 0,
        lineTension: 0,
      },
      {
        label: t("home:graphic.cover"),
        data: cleanData(dataCoverTraffic),
        backgroundColor: ["#FEFDAF"],
        pointBackgroundColor: "#FEFDAF",
        borderWidth: 0,
        pointBorderWidth: 0,
        lineTension: 0,
      },
      {
        label: t("home:graphic.bounties"),
        data: cleanData(dataBounties),
        backgroundColor: ["#C0F3FF"],
        pointBackgroundColor: "#C0F3FF",
        borderColor:'#fff',
        borderWidth: 2,
        pointBorderWidth: 0,
        lineTension: 0,
      },
      {
        label: t("home:graphic.early"),
        data: cleanData(dataEarlyTokenBuyers),
        backgroundColor: ["#4B79B4"],
        pointBackgroundColor: "#4B79B4",
        borderColor:'#fff',
        borderWidth: 2,
        pointBorderWidth: 0,
        lineTension: 0,
      },
      {
        label: t("home:graphic.team"),
        data: cleanData(dataTeamNAdvisors),
        backgroundColor: ["#1423C1"],
        pointBackgroundColor: "#1423C1",
        borderColor:'#fff',
        borderWidth: 2,
        pointBorderWidth: 0,
        lineTension: 0,
      },
      {
        label: t("home:graphic.treasury"),
        data: cleanData(dataTreasury),
        backgroundColor: ["#060D62"],
        pointBackgroundColor: "#060D62",
        borderColor:'#fff',
        borderWidth: 2,
        pointBorderWidth: 0,
        lineTension: 0,
      },
    ],
  };

  return (
    <>
      <section
        ref={ref}
        id="TOKEN-RELEASE"
        className="section-token-release padding-section-aux"
      >
        <div className="container">
          <div>
            <h2>{t("home:token.title")}</h2>
            <p>{t("home:token.about")}</p>
          </div>
          <div className="table-info">
            <div className="container-table">
              <div className="title">
                <h4>{t("home:token.subTitle")}</h4>
              </div>
              <div className="list-table">
                <ul>
                  <li>{t("home:token.listItemA")}</li>
                  <li>{t("home:token.listItemB")}</li>
                  <li>{t("home:token.listItemC")}</li>
                  <li>{t("home:token.listItemD")}</li>
                  <li>{t("home:token.listItemE")}</li>
                  <li>{t("home:token.listItemF")}</li>
                  <li>{t("home:token.listItemG")}</li>
                  <li>
                    <a
                      href="https://coinmarketcap.com/currencies/hopr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      KEY METRICS-box
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3>{t("home:token.secondSubTitle")} (%)</h3>
            <p>{t("home:token.secondSubAbout")}</p>
            <div>
              <Pie data={data} width={100} height={420} options={options} />
            </div>
            <p></p>
          </div>
          <div>
            <h3>{t("home:token.thirdSubTitle")} (%)</h3>
            <div className="container-chart">
              <div className="help-scroll">
                <Line data={dataTokenSupply} options={dataOption} />
              </div>
            </div>
            <p>
            <p>{t("home:token.textEnding")}</p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeTokenRelease;
