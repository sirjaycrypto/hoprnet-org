import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const BannerItem = ({
  alt,
  blindText,
  children,
  height,
  link,
  onClick,
  playing,
  src,
  video,
  width
}) => {
  const [isDesktop, setDesktop] = useState(true);

  const setDeviceType = () => {
    if (window.innerWidth < 1024) {
      setDesktop(false);
    } else  {
      setDesktop(true);
    }
  };

  useEffect(() => {
    setDeviceType();
  }, []);

  const renderContent = (link) => {
    const ImgWrapper = () => (<img
      alt={alt}
      height={height}
      src={src}
      width={width}
    />)
    return (
    <div className="banner-element" onClick={onClick}>
      <span>{blindText}</span>
      {!children ?
        video ? (
          <div className={`embed-container`}>
            <iframe
              allowFullScreen
              allow="autoplay; fullscreen"
              className="video"
              frameBorder="0"
              src={`${video}?title=0&autoplay=${playing}&byline=0&portrait=0&playsinline=0&controls=${isDesktop ? 0 : 1}&loop=0&app_id=122963`}
            ></iframe>
          </div>
        ) : src ? (
          link ?
          <a href={link} download target="_blank">
            <ImgWrapper/>
          </a> :
          <ImgWrapper/>
        ) : null
        : children}
    </div>
  )};

  return link ? renderContent(link) : renderContent();
};

BannerItem.propTypes = {
  alt: PropTypes.string,
  blindText: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  playing: PropTypes.number,
  src: PropTypes.string,
  video: PropTypes.string,
  width: PropTypes.string,
};
