import React, { useState, useEffect } from 'react';
import Countdown from '../atoms/countdown';
import Link from 'next/link';
import Image from 'next/image';

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
              The HOPR protocol ensures everyone has control of their privacy,
              data, and identity.
            </p>
          </div>
        </div>
      </div>
      <div className="section-bottom">
        <Link href="/token">
          <a className="right-container center-on-the-box">
            <Image
              alt="HOPR Token-SALE"
              layout="fill"
              src="/assets/images/welcomeLeft.jpg"
            />
            <div className="text-area">
              <h2>HOPR TOKEN LAUNCH</h2>
              <Countdown />
            </div>
          </a>
        </Link>
        <Link href="/win">
          <a className="left-container center-on-the-box">
            <Image
              alt="COUNTDOWN TO HOPR JUNGFRAU"
              layout="fill"
              src="/assets/images/Bildschirmfoto.jpg"
            />
            <div className="text-area">
              <h2>COUNTDOWN TO HOPR JUNGFRAU</h2>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
