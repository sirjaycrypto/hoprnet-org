import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

export const BannerItem = ({
  alt,
  blindText,
  children,
  link,
  onClick,
  preview,
  src,
  video,
}) => {
  const [show, setShow] = useState(true);
  const [played, setPlayed] = useState(false);
  const [entered, setMouseEnter] = useState(false);

  useEffect(() => {
    if (played) {
      setShow(false);
    } else {
      if (entered) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
  }, [played, entered]);

  const renderContent = (link) => {
    const ImgWrapper = () => (
      <div className="image-wrapper" style={{ backgroundImage: `url(${src})`}} />
    );

    return (
      <div
        className="banner-element"
        onClick={onClick}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        <span>{blindText}</span>
        {!children ? (
          video ? (
            <>
              <div className={`embed-container${show ? ' show-prev' : ' hide-prev'}`}>
                <div className="image-wrapper" style={{ backgroundImage: `url(${preview})`}} />
                <ReactPlayer
                  url={video}
                  controls={true}
                  className="video"
                  height="100%"
                  width="100%"
                  onPlay={() => setPlayed(true)}
                  onPause={() => setPlayed(false)}
                />
              </div>
            </>
          ) : src ? (
            link ? (
              <a className='embed-container' href={link} download target="_blank">
                <ImgWrapper />
              </a>
            ) : (
              <ImgWrapper />
            )
          ) : null
        ) : (
          children
        )}
      </div>
    );
  };

  return link ? renderContent(link) : renderContent();
};

BannerItem.propTypes = {
  alt: PropTypes.string,
  blindText: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.string,
  onClick: PropTypes.func,
  playing: PropTypes.number,
  preview: PropTypes.string,
  src: PropTypes.string,
  video: PropTypes.string,
};
