import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";
import HeroInfo from "../molecules/hero-info";

const Hero = forwardRef(({}, ref) => {
  const { t } = useTranslation();

  return (
    <>
      <section ref={ref} className="section-hero">
        <HeroInfo />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video display-desktop"
          src="/assets/video/hero.mp4"
        ></video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video display-tablet"
          src="/assets/video/hopr_Drone_Tablet-Portrait.mp4"
        ></video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video display-phone"
          src="/assets/video/hopr_Drone_Mobile.mp4"
        ></video>

        <div className="container">
          <div className="text-wrapper">
            <h4>{t("home:hero.subtitle")}</h4>
            {!dateFinal ? (
              <div id="clockDiv">
                <div>
                  <span className="days">{days}</span>
                </div>
                <span>:</span>
                <div>
                  <span className="hours">{hours}</span>
                </div>
                <span>:</span>
                <div>
                  <span className="minutes">{minutes}</span>
                </div>
                <span>:</span>
                <div>
                  <span className="seconds">{seconds}</span>
                </div>
              </div>
            ) : (
              <h1>IS Today</h1>
            )}

            <div>
              <div onClick={() => clickBtn()} className="btn-banner ">
                <span>{t("common:getHorp")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Hero;
