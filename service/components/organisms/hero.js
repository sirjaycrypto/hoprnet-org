import React, { forwardRef, useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import HeroInfo from "../molecules/hero-info";

const Hero = forwardRef(({ setVisibleNow }, ref) => {
  const [videoActive, setVideoActive] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(min-width: 1080px)").matches) {
        setVideoActive("/assets/video/hero.mp4");
      } else if (window.matchMedia("(max-width: 797px)").matches) {
        setVideoActive("/assets/video/hopr_Drone_Tablet-Portrait.mp4");
      } else if (window.matchMedia("(max-width: 370px)").matches) {
        setVideoActive("/assets/video/hopr_Drone_Mobile.mp4");
      }
    }
  });

  return (
    <>
      <section ref={ref} className="section-hero">
        <HeroInfo />
        <video id="background-video" autoPlay loop muted>
          <source
            src="/assets/video/hopr_Drone_Tablet-Portrait.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="container">
          <div className="text-wrapper">
            <h4>{t("homeHero:subtitle")}</h4>
            <h1>{t("homeHero:title")}</h1>
          </div>
        </div>
      </section>
    </>
  );
});

export default Hero;
