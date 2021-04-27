import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const Button = ({
  content,
  onClick,
  to = '#',
  type,
  target = '_self',
  className,
  ...props
}) => {
  return (
    type === 'button' ? (
      <button
        type="button"
        className={`btn${className ? ' ' + className : ''}`}
        onClick={onClick} { ...props }
      >
        <span>{content}</span>
      </button>
    ) : type === 'link' ? (
      <Link href={to}>
        <a className={`btn${className ? ' ' + className : ''}`}>
          <span>{content}</span>
        </a>
      </Link>
    ) : (
      <a
        href={to}
        target={target}
        className={`btn${className ? ' ' + className : ''}`}
        { ...props }
      >
        <span>{content}</span>
      </a>
    )
  );
};

Button.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
  target: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
};
