import React from 'react';

const MapVideoOnBoard = ({
  src,
  controls,
  loop,
  muted,
  autoplay,
}) => {
  return (
    <>
      <section className="section-hop-on-board section-map-video">
        <video
          controls={controls}
          loop={loop}
          muted={muted}
          autoPlay={autoplay}
        >
          <source src={src} type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default MapVideoOnBoard;
