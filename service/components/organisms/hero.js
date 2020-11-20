import React from "react";

export default function Hero() {
  return (
    <>
      <section className="section-hero">        <div id="background-video">
          <iframe
            frameborder="0"
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/t-nsBEAFZ3o?autoplay=1&amp;controls=0&amp;showinfo=0&amp;loop=1"
            allowFullScreen
          ></iframe>
        </div>

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
