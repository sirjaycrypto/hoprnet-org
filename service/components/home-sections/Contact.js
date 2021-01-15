import React, { useRef, useEffect } from 'react';

import SubStrack from '../molecules/sub-strack';

export default function Contact() {
  return (
    <div className="container the-aux-margin">
      <div className="container sub-title">
        <h2 className="the-aux-margin">Get All Our Latest Updates!</h2>
      </div>
      <SubStrack />
    </div>
  );
}
