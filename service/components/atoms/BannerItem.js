import React from 'react';
import PropTypes from 'prop-types';

export const BannerItem = ({
  alt,
  blindText,
  height,
  src,
  width
}) => {
  return (
    <div className="banner-element">
      <span>{blindText}</span>
      <img
        alt={alt}
        height={height}
        src={src}
        width={width}
      />
    </div>
  );
};

BannerItem.propTypes = {
  alt: PropTypes.string,
  blindText: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string,
};
