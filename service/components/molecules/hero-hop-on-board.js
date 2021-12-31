import React from 'react';

const HeroHoprOnBoard = ({src, text}) => {
  return (
    <>
      <section className="section-hero">
        <iframe
          allow="autoplay; fullscreen"
          className="background-video"
          src={src}
          frameBorder="0"
          allowFullScreen
          width="100%"
        ></iframe>
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
