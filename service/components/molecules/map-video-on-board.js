import React, { useEffect, useRef, useState } from 'react';
import Vimeo from '@vimeo/player';

const MapVideoOnBoard = ({ src, img }) => {
  const frameRef = useRef();
  const [loadVideo, setLoadVideo] = useState(true);

  useEffect(() => {
    if (frameRef) {
      onPlayVideo();
    }
  }, [frameRef]);

  const onPlayVideo = () => {
    const player = new Vimeo(frameRef.current);

    player.on('play', function () {
      setLoadVideo(false);
    });
  };

  return (
    <>
      <section className="section-hop-on-board section-map-video">
        {loadVideo ? (
          <img src={img} alt="img" className="background-video" />
        ) : null}

        <iframe
          ref={frameRef}
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
