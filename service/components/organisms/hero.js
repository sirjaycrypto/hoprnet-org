import React, { forwardRef, useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import Modal from "../atoms/modal";
import HeroInfo from "../molecules/hero-info";

const Hero = forwardRef(({}, ref) => {
  const [dateFinal, setDateFinal] = useState(true);
  
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const { t } = useTranslation();

  useEffect(() => {}, []);

  const changeItemVisible = ()=>{
    setDateFinal(false)
  }

  const clickBtn = () => {
    console.log("Click");
  };

  const countDownDate = new Date("Jan 31, 2021 0:00:00").getTime();
  function addCeroIfNeed(num) {
    let result = ("0" + num).slice(-2);
    return result;
  }

  var time = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(
      addCeroIfNeed(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      )
    );
    setMinutes(
      addCeroIfNeed(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    );
    setSeconds(addCeroIfNeed(Math.floor((distance % (1000 * 60)) / 1000)));
    if (distance < 0) {
      clearInterval(time);
      setDateFinal(true);
    }
  }, 1000);

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
            {!dateFinal ? (
              <>
                <h4>{t("home:hero.subtitle")}</h4>

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

                <div>
                  <div onClick={() => clickBtn()} className="btn-banner ">
                    <span>{t("common:getHorp")}</span>
                  </div>
                </div>
              </>
            ) : (
              <Modal dateFinal={dateFinal} changeItemVisible={()=>changeItemVisible()} />
            )}
          </div>
        </div>
      </section>
    </>
  );
});

export default Hero;
