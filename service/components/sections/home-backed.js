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

  return (
    <>
      <section
        ref={ref}
        id="BACKED-BY"
        className="section-backed invert-color "
      >
        <div className="container">
          <h2>{t("homeBack:title")}</h2>
          <div className="item-back-container">
            {data.map((e, index) => {
              const { img, url, title } = e;
              return (
                <a href={url} key={index} target="_blank" rel="noopener noreferrer">
                  <div className="item-logo-element">
                    <img src={img} alt={title} />
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
