import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/translation';
import Marquee from 'react-fast-marquee';

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
      <div className="section-top center-on-the-box container ">
        <div className="main-labels ">
          <h1>{t('home:welcome.title')}</h1>
          <div className="help-box">
            <p>{t('home:welcome.subTitle')}</p>
          </div>
        </div>
      </div>
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
          <img src='/assets/images/hopr-train.jpg'/>
        </Marquee>
      </div>
    </div>
  );
}
