import React, { forwardRef, useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import HeroInfo from "../molecules/hero-info";

const Hero = forwardRef(({}, ref) => {
  const [videoL, setVideoL] = useState(false);
  const [videoM, setVideoM] = useState(false);
  const [videoS, setVideoS] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(min-width: 1080px)").matches) {
        setVideoL(true);
        console.log("L");
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setVideoM(true);
        console.log("M");
      } else if (window.matchMedia("(max-width: 639px)").matches) {
        setVideoS(true);
        console.log("S");
      } else if (window.matchMedia("(min-width: 639px)").matches) {
        setVideoS(true);
        console.log("MAnd");
      } 
    }
  }, []);

  return (
    <>
      <section ref={ref} className="section-hero">
        <HeroInfo />
        {videoL && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
            src="/assets/video/hero.mp4"
          ></video>
        )}
        {videoM && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
            src="/assets/video/hopr_Drone_Tablet-Portrait.mp4"
          ></video>
        )}
        {videoS && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
            src="/assets/video/hopr_Drone_Mobile.mp4"
          ></video>
        )}

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
