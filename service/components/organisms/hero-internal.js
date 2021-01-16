import React from 'react';

export default function Hero({ noNeedFull, children }) {
  return (
    <>
      <section
        className={
          'section-hero-internal ' + (noNeedFull ? 'no-full-height' : '')
        }
      >
        <div className="container-sm">{children}</div>
      </section>
    </>
  );
}
