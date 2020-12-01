import React from "react";
import HeroInfo from "../molecules/hero-info";
import useTranslation from 'next-translate/useTranslation';
export default function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <section className="section-hero">
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
          <div className="type-btn">
            <span>{t("homeHero:btn-label")}</span>
          </div>
        </div>
       
      </section>
    </>
  );
}
