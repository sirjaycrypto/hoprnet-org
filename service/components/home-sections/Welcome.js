import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/translation';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

export default function Welcome() {
  const [initialAni, setInitialAni] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setInitialAni(true);
    }, 400);
  }, []);

  return (
    <div
      className={
        'welcome-section invert-color ' + (initialAni ? 'show-hi' : '')
      }
    >
      <div className="section-top container ">
        <div className="main-labels ">
          <h1>{t('home:welcome.title')}</h1>
          <div className="help-box">
            <p>{t('home:welcome.subTitle')}</p>
          </div>
        </div>
      </div>
      <Link href="/hop-on-board">
        <div className="section-bottom">
          <Marquee className="welcome" speed={100} gradient={false}>
            <div className="welcome-text">
              <h1>HOP ON BOARD</h1>
              <div className="bubble"></div>
            </div>
            <div className="welcome-text">
              <h1>HOP ON BOARD</h1>
              <div className="bubble"></div>
            </div>
            <div className="welcome-text">
              <h1>HOP ON BOARD</h1>
              <div className="bubble"></div>
            </div>
            <div className="welcome-text">
              <h1>HOP ON BOARD</h1>
              <div className="bubble"></div>
            </div>
          </Marquee>
          <Marquee speed={100} gradient={false}>
            <img
              src="/assets/images/hopr-train.png"
              height="200"
              className="train-hop-on-board"
            />
          </Marquee>
        </div>
      </Link>
    </div>
  );
}
