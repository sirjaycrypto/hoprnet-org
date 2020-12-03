import React from "react";
import useTranslation from "next-translate/useTranslation";
export default function HomeTokenFeatures() {
  const { t } = useTranslation();
  const dataInfo = [
    {
      img: "/assets/icons/icon-pay.svg",
      title: "homeTokFea:pay",
      paragraph:"homeTokFea:payMain",
    },
    {
      img: "/assets/icons/icon-stake.svg",
      title: "homeTokFea:stake",
      paragraph: "homeTokFea:stakeMain",
    },
    {
      img: "/assets/icons/icon-vote.svg",
      title: "homeTokFea:vote",
      paragraph: "homeTokFea:voteMain",
    },
  ];

  return (
    <>
      <section
        id="TOKEN-FEATURES"
        className="section-token-fea padding-section-aux"
      >
        <div className="container">
          <div className="container-center-center">
            <h2>{t("homeTokFea:title")}</h2>
          </div>
          <div className="container-items">
            <div className="element-boxing">
              {dataInfo.map((e, index) => {
                const { img, title, paragraph } = e;
                return (
                  <div key={index} className="item">
                    <div className="icon-toke-show">
                      <img src={img} alt={t(title)} />
                    </div>
                    <div className="info-cont">
                      <h4>{t(title)}</h4>
                      <p>{t(paragraph)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
