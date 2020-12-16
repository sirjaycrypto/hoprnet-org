import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";

const HomeFurther = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const infoTop = [
    {
      img: "/assets/brand/logo.svg",
      title: "homeFut:infoTopTitleA",
      paragraph: "homeFut:infoTopTitleAAbout",
    },
    {
      img: "/assets/brand/logo.svg",
      title: "homeFut:infoTopTitleB",
      paragraph: "homeFut:infoTopTitleBAbout",
    },
  ];

  const infoDown = [
    {
      img: "/assets/brand/logo.svg",
      title: "homeFut:infoBottomATitle",
    },
    {
      img: "/assets/brand/logo.svg",
      title: "homeFut:infoBottomBTitle",
    },
    {
      img: "/assets/brand/logo.svg",
      title: "homeFut:infoBottomCTitle",
    },
    {
      img: "/assets/brand/logo.svg",
      title: "homeFut:infoBottomDTitle",
    },
    {
      img: "/assets/brand/logo.svg",
      title: "homeFut:infoBottomETitle",
    },
  ];

  return (
    <>
      <section
        ref={ref}
        id="FURTHER-READING"
        className="section-further  invert-color "
      >
        <div className="container">
          <h2>{t("homeFut:title")}</h2>
          <div className="list-top">
            {infoTop.map((e, index) => {
              const { img, title, paragraph } = e;
              return (
                <div key={index} className="element-future">
                  <div className="icon">
                    <img src={img} alt={t(title)} />
                  </div>
                  <div className="info">
                    <h5>{t(title)}</h5>
                    <p>{t(paragraph)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {/* className="list-top" */}
            <div className="row">
              <div className="item">
                <div className="icon">
                  <img
                    src="/assets/brand/logo.svg"
                    alt={t("homeFut:infoTopTitleA")}
                  />
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <img
                    src="/assets/brand/logo.svg"
                    alt={t("homeFut:infoTopTitleB")}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <h5>{t("homeFut:infoTopTitleA")}</h5>
              </div>
              <div className="item">
                <h5>{t("homeFut:infoTopTitleB")}</h5>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <p>{t("homeFut:infoTopTitleAAbout")}</p>
              </div>
              <div className="item">
                <p>{t("homeFut:infoTopTitleBAbout")}</p>
              </div>
            </div>
            {/*  */}
          </div>

          <div className="list-down">
            {infoDown.map((e, index) => {
              const { img, title } = e;
              return (
                <div key={index} className="element-future">
                  <div className="icon">
                    <img src={img} alt={t(title)} />
                  </div>
                  <div className="info">
                    <h5>{t(title)}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeFurther;
