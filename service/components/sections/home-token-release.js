import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Line, Pie } from "react-chartjs-2";
import dataSupply from "../../public/assets/json/dataSupply.json";

export default function HomeTokenRelease() {
  const { t } = useTranslation();
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


  
  const dataDate = dataSupply.map((item) => item.Date);
  const dataTreasury = dataSupply.map((item) => item.Treasury).join('');
  const dataTeamNAdvisors = dataSupply.map((item) => item["Team & Advisors"]).join('');
  const dataEarlyTokenBuyers = dataSupply.map((item) => item["Early Token Buyers"]).join('');
  const dataBounties = dataSupply.map((item) => item.Bounties).join('');
  const dataCoverTraffic = dataSupply.map((item) => item["Cover Traffic"]).join('');
  const dataPublicSale = dataSupply.map((item) => item["Public Sale"]).join('');

  console.log(dataBounties)

  const dataTokenSupply = {
    labels: dataDate,
    datasets: [
      {
        label: "Treasury",
        data: dataTreasury,
        fill: true,
        backgroundColor: "#FEFFA0",
        borderWidth: 0,
      },
      {
        label: "Team & Advisors",
        data: dataTeamNAdvisors,
        fill: true,
        backgroundColor: "#FBFB3B",
        borderWidth: 0,
      },
      {
        label: "Early Token Buyers",
        data: dataEarlyTokenBuyers,
        fill: true,
        backgroundColor: "#BCBC2A",
        borderWidth: 0,
      },
      {
        label: "Bounties",
        data: dataBounties,
        fill: true,
        backgroundColor: "#7E7E1E",
        borderWidth: 0,
      },
      {
        label: "Cover Traffic",
        data: dataCoverTraffic,
        fill: true,
        backgroundColor: "#0E01B4",
        borderWidth: 0,
      },
      {
        label: "Public Sale",
        data: dataPublicSale,
        fill: true,
        backgroundColor: "#020250",
        borderWidth: 0,
      },
    ],
  };

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // }

  return (
    <>
      <section
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
            <Line data={dataTokenSupply} options={options} />
          </div>
        </div>
      </section>
    </>
  );
}
