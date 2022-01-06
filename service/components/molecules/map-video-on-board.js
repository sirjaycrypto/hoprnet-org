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
      <section className="section-hero section-hop-on-board section-map-video">
        <iframe
          allow="autoplay; fullscreen"
          className="background-video"
          src={src}
          frameBorder="0"
          allowFullScreen
          width="100%"
        ></iframe>
      </section>
    </>
  );
};

export default MapVideoOnBoard;
