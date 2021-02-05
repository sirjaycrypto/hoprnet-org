import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AccordionItem = ({ active = false, children, className, title, ...props }) => {
  const [isActive, setActive] = useState(active);
  const itemRef = createRef();

  return (
    <li {...props} className={`${active ? 'is-active' : ''} ${className || ''}`}>
      <div className="accordion-header text-sm">
        <span className="h6 m-0">{title}</span>
        <div className="accordion-icon"></div>
      </div>
      <div ref={itemRef} className="accordion-content text-xs">
        <p>{children}</p>
      </div>
    </li>
  );
};

AccordionItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
};

AccordionItem.defaultProps = {
  active: false,
  children: null,
  title: '',
};
