import React from 'react';

export const Accordion = ({ classname, ...props }) => {
  return <ul {...props} className={`accordion list-reset mb-0 ${classname || ''}`} />
};
