import React from 'react';

const MapVideoOnBoard = ({ src }) => {
  return (
    <>
      <section className="section-hop-on-board section-map-video">
        <iframe
          allow="autoplay; fullscreen"
          src={src}
          frameBorder="0"
          allowFullScreen
          width="100%"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default MapVideoOnBoard;
