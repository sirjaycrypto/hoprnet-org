import React from 'react';
import PropTypes from 'prop-types';

export const SectionContainer = ({
  align,
  children,
  containerSize = '',
  extraClass,
  invert = false,
}) => {
  let sClassName = 'section-container';
  if (invert) {
    sClassName += ' invert-color';
  }
  if (align) {
    sClassName += ' align-' + align;
  }
  if (extraClass) {
    sClassName += ' custom-' + extraClass;
  }

  return (
    <section className={sClassName}>
      <div className={`container${containerSize !== '' ? ' size-' + containerSize : ''}`}>{children}</div>
    </section>
  );
};

SectionContainer.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  containerSize: PropTypes.string,
  extraClass: PropTypes.string,
  invert: PropTypes.bool,
};
