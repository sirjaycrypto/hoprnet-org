import React, { useState, useEffect, forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";
import { Line, Pie } from "react-chartjs-2";

import dataSupply from "../../public/assets/json/dataSupply.json";

const HomeTokenRelease = forwardRef(({ setVisibleNow }, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (window.matchMedia("screen and (max-width: 797px)").matches) {
      setIsMobile(true);
    }
  }, []);

  var yLabels = {
    0: "0.00",
    1: "250,000.000",
    2: "500.000.000",
    6: "750.000.000",
    8: "1000.000.000",
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,

    legend: {
      display: true,
      // position: "right",
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

  const optionsLine = {
    maintainAspectRatio: false,
    responsive: true,

    legend: {
      display: true,
      position: "bottom",
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
    scales: {
      y: {
        ticks: {
          crossAlign: "far",
        },
      },

      xAxes: [
        {
          ticks: {
            maxRotation: 100,
            minRotation: 90,
          },
        },
      ],
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

  const dataDate = dataSupply.map((item, index) =>
    index % 2 !== 0 ? item.Date : ""
  );

  const dataTreasury = dataSupply.map((item) => item.Treasury);
  const dataTeamNAdvisors = dataSupply.map((item) => item["Team & Advisors"]);
  const dataEarlyTokenBuyers = dataSupply.map(
    (item) => item["Early Token Buyers"]
  );
  const dataBounties = dataSupply.map((item) => item.Bounties);
  const dataCoverTraffic = dataSupply.map((item) => item["Cover Traffic"]);
  const dataPublicSale = dataSupply.map((item) => item["Public Sale"]);

  function cleanData(elements) {
    return elements.map(function (elem) {
      let aux = elem.split("").join("");
      aux = aux.split(",").join("");
      return aux;
    });
  }

  const dataTokenSupply = {
    labels: dataDate,
    datasets: [
      {
        label: "Team & Advisors",
        data: cleanData(dataTeamNAdvisors),
        fill: true,
        backgroundColor: "#FBFB3B",
        borderWidth: 0,
        borderColor: "rgba(0, 0, 0, 0.34)",
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        pointBorderWidth: 1,
        lineTension: 0,
      },

      {
        label: "Bounties",
        data: cleanData(dataBounties),
        fill: true,
        backgroundColor: "#7E7E1E",
        borderWidth: 0,
        borderColor: "rgba(0, 0, 0, 0.34)",
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        pointBorderWidth: 0,
        lineTension: 0,
      },
      {
        label: "Early Token Buyers",
        data: cleanData(dataEarlyTokenBuyers),
        fill: true,
        backgroundColor: "#BCBC2A",
        borderWidth: 0,
        borderColor: "rgba(0, 0, 0, 0.34)",
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        pointBorderWidth: 0,
        lineTension: 0,
      },
      {
        label: "Public Sale",
        data: cleanData(dataPublicSale),
        fill: true,
        backgroundColor: "#020250",
        borderWidth: 0,
        borderColor: "rgba(0, 0, 0, 0.34)",
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        pointBorderWidth: 0,
        lineTension: 0,
      },
      {
        label: "Treasury",
        data: cleanData(dataTreasury),
        fill: true,
        backgroundColor: "#FDFFA2",
        borderWidth: 0,
        borderColor: "rgba(0, 0, 0, 0.34)",
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        pointBorderWidth: 0,
        lineTension: 0,
      },
      {
        label: "Cover Traffic",
        data: cleanData(dataCoverTraffic),
        fill: true,
        backgroundColor: "#0E01B4",
        borderWidth: 0,
        borderColor: "rgba(0, 0, 0, 0.34)",
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
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
            <h2>{t("homeToken:title")}</h2>
            <p>{t("homeToken:about")}</p>
          </div>
          <div className="table-info">
            <div className="container-table">
              <div className="title">
                <h4>{t("homeToken:subTitle")}</h4>
              </div>
              <div className="list-table">
                <ul>
                  <li>{t("homeToken:listItemA")}</li>
                  <li>{t("homeToken:listItemB")}</li>
                  <li>{t("homeToken:listItemC")}</li>
                  <li>{t("homeToken:listItemD")}</li>
                  <li>{t("homeToken:listItemE")}</li>
                  <li>{t("homeToken:listItemF")}</li>
                  <li>{t("homeToken:listItemG")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3>{t("homeToken:secondSubTitle")} (%)</h3>
            <div>
              <Pie data={data} width={100} height={539} options={options} />
            </div>
            <p></p>
          </div>
          <div>
            <h3>{t("homeToken:thirdSubTitle")} (%)</h3>
            <div className="container-chart">
              <div className="help-scroll">
                <Line data={dataTokenSupply} options={optionsLine} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeTokenRelease;
