import React from 'react';

const HeroHoprOnBoard = ({ src, text, isAssetVideo, controls, loop, muted, autoplay }) => {
  return (
    <>
      <section className="section-hero section-hop-on-board">
        {isAssetVideo ? (
          <video
            controls={controls}
            loop={loop}
            muted={muted}
            autoPlay={autoplay}
            className="background-video"
            width="100%"
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <iframe
            allow="autoplay; fullscreen"
            className="background-video"
            src={src}
            frameBorder="0"
            allowFullScreen
            width="100%"
          ></iframe>
        )}

        {text ? (
          <div className="container">
            <div className="text-wrapper text-video-hop">
              <span>{text}</span>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
};
export default HeroHoprOnBoard;
