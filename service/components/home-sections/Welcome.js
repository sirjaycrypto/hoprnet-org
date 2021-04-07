import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Welcome({ welcomeAnimate }) {
  const [initialAni, setInitialAni] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialAni(true);
    }, 400);
  }, []);

  return (
    <div className={'welcome-section invert-color ' + (initialAni ? 'show-hi' : '')}>
      <div className="section-top center-on-the-box container ">
        <div className="main-labels ">
          <h1> Changing Data Privacy For Good</h1>
          <div className="help-box">
            <p>
              Whether it’s individuals, companies or institutions – the HOPR protocol provides full control over privacy, data and metadata. HOPR lays the groundwork for a more sovereign and safe internet. For everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="section-bottom">
        <Link href="/token">
          <a className="right-container center-on-the-box welcome welcome--left">
            <div className="text-area">
              <h2>HOPR TOKEN</h2>
            </div>
          </a>
        </Link>
        <Link href="/win">
          <a className="left-container center-on-the-box welcome welcome--right">
            <div className="text-area">
              <h2>JUNGFRAU RELEASE</h2>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
