import React, { useEffect } from 'react';
import insertScript from '../../util/insertScript';

export default function Jobs() {
  useEffect(() => {
    insertScript('https://hoprnet.jobbase.io/widget/iframe.js');
  }, []);

  return (
    <>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        className="padding-section-aux"
        id="psJobWidget"
      />
    </>
  );
}
