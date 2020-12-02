import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Pie } from "react-chartjs-2";

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
          </div>
        </div>
      </section>
    </>
  );
}
