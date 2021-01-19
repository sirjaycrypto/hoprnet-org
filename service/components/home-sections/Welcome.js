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
    <div className={'welcome-section ' + (initialAni ? 'show-hi' : '')}>
      <div className="section-top center-on-the-box container">
        <div className="main-labels ">
          <h1> Changing Data Privacy For Good</h1>
          <div className="help-box">
            <p>
              The HOPR protocol ensures everyone has control of their privacy,
              data, and identity.
            </p>
          </div>
        </div>
      </div>
      <div className="section-bottom">
        <div className="right-container center-on-the-box">
          <a>
            <img
              src="/assets/images/Bildschirmfoto.jpg"
              alt="COUNTDOWN THE HOPR MAINNET"
            />
            <div className="text-area">
              <h2>COUNTDOWN THE HOPR MAINNET</h2>
            </div>
          </a>
        </div>
        <div className="left-container center-on-the-box">
          <Link href="/token">
            <a>
              <img src="/assets/images/welcomeLeft.png" alt="HOPR Token-SALE" />
              <div className="text-area">
                <h2>HOPR Token-SALE 02:09:26:41 </h2>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
