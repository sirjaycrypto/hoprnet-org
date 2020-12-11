import React, { forwardRef} from "react";
import useTranslation from "next-translate/useTranslation";

const HomeHomeItWork = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const dataInfo = [
    {
      img: "/assets/images/01_hopr_Private_Animation.gif",
      title: "homeHowWor:private",
      paragraph: "homeHowWor:privateMain",
      mirrorBox: false,
    },
    {
      img: "/assets/images/02_hopr_Profitable_Animation.gif",
      title: "homeHowWor:profitable",
      paragraph: "homeHowWor:profitableMain",
      mirrorBox: true,
    },
    {
      img: "/assets/images/03_hopr_Performant.png",
      title: "homeHowWor:performant",
      paragraph: "homeHowWor:performantMain",
      mirrorBox: false,
    },
  ];

  return (
    <>
      <section
        ref={ref}
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
});

export default HomeHomeItWork