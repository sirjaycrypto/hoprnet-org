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
    "assets/partners/01_avado.svg",
    "assets/partners/02_froriep.png",
    "assets/partners/03_elrond.png",
    "assets/partners/04_sedimentum.png",
    "assets/partners/05_swiss_medtech.png",
    "assets/partners/06_dai_logo.png",
    "assets/partners/07_health_tech_cluster.png",
    "assets/partners/08_swiss_healthcare_startups.png",
  ];

  const dataInfoAssSee = [
    "assets/as_see/coindesk.png",
    "assets/as_see/cointelegraph.png",
    "assets/as_see/moneytoday.png",
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
                    <img src={img} alt={title} />
                 
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
                  
                    <img src={e} alt={e} />
                 
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
                  
                    <img src={e} alt={e} />
                 
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
