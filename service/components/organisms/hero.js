import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";
import HeroInfo from "../molecules/hero-info";

const Hero = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();

  return (
    <>
      <section ref={ref} className="section-hero">
        <HeroInfo />
        <video id="background-video" autoPlay loop muted>
          <source src="/assets/video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container">
          <div className="text-wrapper">
            <h4>{t("homeHero:subtitle")}</h4>
            <h1>{t("homeHero:title")}</h1>
          </div>
        </div>
        <div className="container-bottom">
          <div className="type-btn btn-hero">
            <span>{t("homeHero:btnLabel")}</span>
          </div>
        </div>
      </section>
    </>
  );
});

export default Hero;
