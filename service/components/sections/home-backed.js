import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";

const HomeBacked = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const data = [
    {
      img: "/assets/backed_by_logo/Binance_labs.png",
      url: "https://binancelabs.substack.com/",
      title: "Binance_labs",
    },
    {
      img: "/assets/backed_by_logo/01_Caballeros_Logo.svg",
      url: "http://caballeroscapital.com/",
      title: "caballeros-capital",
    },
    {
      img: "/assets/backed_by_logo/02_Spark_Logo.png",
      url: "https://www.sparkdigitalcapital.com/",
      title: "spark-digital-capital",
    },
    {
      img: "/assets/backed_by_logo/03_Focus_Labs_Logo.png",
      url: "https://focuslabs.io/",
      title: "focus-labs",
    },
    {
      img: "/assets/backed_by_logo/04_AU21CAPITAL_Logo.png",
      url: "https://au21.capital/",
      title: "au21",
    },
  ];

  const dataInfoPartners = [
    "assets/partners/avado.svg",
    "assets/partners/froriep.png",
    "assets/partners/elrond.png",
    "assets/partners/health_tech_cluster.png",
    "assets/partners/sedimentum.png",
    "assets/partners/download.png",
    "assets/partners/swiss_medtech.png",
    "assets/partners/swiss_healthcare_startups.png",
  ];

  const dataInfoAssSee = [
    "assets/as_see/coindesk.svg",
    "assets/as_see/coint.svg",
    "assets/as_see/money.svg",
  ];

  return (
    <>
      <section
        ref={ref}
        id="BACKED-BY"
        className="section-backed invert-color "
      >
        <div className="container">
          <h2>{t("home:back.title")}</h2>
          <div className="item-back-container">
            {data.map((e, index) => {
              const { img, url, title } = e;
              return (
                <a
                  href={url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="item-logo-element">
                    <img src={img} alt={title} />
                  </div>
                </a>
              );
            })}
          </div>
          <h2>{t("home:back.titleA")}</h2>
          <div className="item-back-container">
            {dataInfoPartners.map((e, index) => {
            
              return (
                <a
                href="#"
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="item-logo-element">
                  <img src={e} alt={e} />
                </div>
              </a>
              );


              
            })}
          </div>

          <h2>{t("home:back.titleB")}</h2>
          <div className="item-back-container">
            {dataInfoAssSee.map((e, index) => {

              return (
                <a
                href="#"
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="item-logo-element">
                  <img src={e} alt={e} />
                </div>
              </a>
              );

            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeBacked;
