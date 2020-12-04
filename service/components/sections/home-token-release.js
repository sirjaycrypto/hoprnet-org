import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";
import { Line, Pie } from "react-chartjs-2";
import dataSupply from "../../public/assets/json/dataSupply.json";

const HomeTokenRelease = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const options = {
    maintainAspectRatio: false,
    responsive: true,
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
  const dataTreasury = dataSupply.map((item) => item.Treasury).join("");
  const dataTeamNAdvisors = dataSupply
    .map((item) => item["Team & Advisors"])
    .join("");
  const dataEarlyTokenBuyers = dataSupply
    .map((item) => item["Early Token Buyers"])
    .join("");
  const dataBounties = dataSupply.map((item) => item.Bounties).join("");
  const dataCoverTraffic = dataSupply
    .map((item) => item["Cover Traffic"])
    .join("");
  const dataPublicSale = dataSupply.map((item) => item["Public Sale"]).join("");

  const dataTokenSupply = {
    labels: dataDate,


  
    datasets: [
      {
        label: "Treasury",
        data: dataTreasury,
        fill: true,
        backgroundColor: "#FEFFA0",
        borderWidth: 0,


        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
       
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      
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
              <Line data={dataTokenSupply} options={options} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeTokenRelease;
