import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export const BannerItem = ({
  alt,
  blindText,
  children,
  height,
  onClick,
  src,
  video,
  width
}) => {

  const renderContent = () => (
    <div className="banner-element">
      <span>{blindText}</span>
      {!children ?
        video ? (
          <div className="embed-container">
            <iframe
              allowFullScreen
              className="video"
              frameBorder="0"
              src={`${video}?title=0&byline=0&portrait=0&playsinline=0&controls=1&loop=0&app_id=122963&width=100%`}
            ></iframe>
          </div>
        ) : src ? (
          <img
            alt={alt}
            height={height}
            src={src}
            width={width}
          />
        ) : null
      : children}
    </div>
  );

  return onClick ? (
    <a href={onClick} download>
      {renderContent()}
    </a>
  ) : (
    renderContent()
  );
};

BannerItem.propTypes = {
  alt: PropTypes.string,
  blindText: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string,
};
