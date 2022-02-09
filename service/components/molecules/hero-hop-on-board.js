import React, { useEffect } from 'react';

const HeroHoprOnBoard = ({ src, text }) => {
  return (
    <>
      {/* section-board-top-video */}
      <section className="section-hero section-hop-on-board">
        <iframe
          allow="autoplay; fullscreen"
          src={src}
          frameBorder="0"
          className="background-video"
          allowFullScreen
          height="100%"
          width="100%"
        ></iframe>

        {text ? (
          <div className="container">
            <div className="text-wrapper text-video-hop">
              <span className="main-title">{text}</span>
              <span className="buttons-hero">6th Jan. - 27th Apr.</span>
              <div className="bottom-buttons">
                <span className="buttons-hero">Programme</span>
                <span className="buttons-hero">Bounties</span>
                <a href="#jobs-hop-on-board">
                  <span className="buttons-hero">Jobs</span>
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
};
export default HeroHoprOnBoard;
