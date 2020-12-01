import React from "react";
import HeroInfo from "../molecules/hero-info";
export default function Hero() {
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
            <h4>The HOPR-Token</h4>
            <h1>Changing Data Privacy for Good</h1>
          </div>
        </div>
        <div className="container-bottom">
          <div className="type-btn">
            <span>Get HOPR-Token on SECRET</span>
          </div>
        </div>
       
      </section>
    </>
  );
}
