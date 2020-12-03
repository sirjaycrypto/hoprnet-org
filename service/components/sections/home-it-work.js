import React from "react";
import useTranslation from "next-translate/useTranslation";
export default function HomeHomeItWork() {
  const { t } = useTranslation();
  const dataInfo = [
    {
      img: "/assets/images/how-work-1.svg",
      title: "homeHowWor:private",
      paragraph: "homeHowWor:privateMain",
      mirrorBox: false,
    },
    {
      img: "/assets/images/how-work-2.svg",
      title: "homeHowWor:profitable",
      paragraph: "homeHowWor:profitableMain",
      mirrorBox: true,
    },
    {
      img: "/assets/images/how-work-2.svg",
      title: "homeHowWor:private",
      paragraph: "homeHowWor:privateMain",
      mirrorBox: false,
    },
  ];

  return (
    <>
      <section
        id="HOW-DOES-IT-WORK"
        className="section-how-work padding-section-aux"
      >
        <div className="container">
          <div className="container-center-center">
            <h2>{t("homeHowWor:title")}</h2>
          </div>
          {/*  */}
          <div className="element-boxing">
            {dataInfo.map((e, index) => {
              const { img, title, paragraph, mirrorBox } = e;
              return (
                <div
                  key={index}
                  className={"info-box-line " + (mirrorBox ? "flex-line" : "")}
                >
                  <div className="info-cont aux-padding-box-read">
                    <h3>{t(title)}</h3>
                    <p className="padding-bottom">{t(paragraph)}</p>
                  </div>
                  <div>
                    <img src={img} alt={t(title)} />
                  </div>
                </div>
              );
            })}
          </div>
          {/*  */}
        </div>
      </section>
    </>
  );
}
