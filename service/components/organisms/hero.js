import React, { useRef, forwardRef, useState, useEffect } from 'react';
import { Button, Countdown } from '..';
import useTranslation from 'next-translate/useTranslation';
import HeroInfo from '../molecules/hero-info';
import { AlertMsg } from '..';

const Hero = forwardRef(
  ({ launchMode, modePreSales , setShowModal }, ref) => {
    const [videoMobile, setVideoMobile] = useState(false);
    const [videoTablet, setVideoTablet] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const theAreaBtn = useRef(null);
    const area = useRef(null);
    const { t } = useTranslation();

    const showActiveMsg = () => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        setShowMsg(!showMsg);
      }, 200);
    };

    const setDeviceType = () => {
      if (window.innerWidth <= 480) {
        setVideoMobile(true);
      } else if (window.innerWidth <= 768) {
        setVideoTablet(true);
      }
    };

    useEffect(() => {
      setDeviceType();
    }, []);

    return (
      <>
        <section ref={area} className="section-hero">
          <HeroInfo />

          {videoMobile ? (
            <iframe
              allow="autoplay; fullscreen"
              className="background-video"
              src="https://player.vimeo.com/video/508845856?autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false&app_id=122963"
              frameBorder="0"
              allowFullScreen
              width="100%"
              loading="lazy"
            ></iframe>
          ) : videoTablet ? (
            <iframe
              allow="autoplay; fullscreen"
              className="background-video"
              src="https://player.vimeo.com/video/508847974?autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false&app_id=122963"
              frameBorder="0"
              allowFullScreen
              width="100%"
              loading="lazy"
            ></iframe>
          ) : (
            <iframe
              allow="autoplay; fullscreen"
              className="background-video"
              src="https://player.vimeo.com/video/508834454?autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false&app_id=122963"
              frameBorder="0"
              allowFullScreen
              width="100%"
              loading="lazy"
            ></iframe>
          )}

          <div className="container">
            <div className="text-wrapper">
              <>
                {/* <h4>
                  {modePreSales
                    ? t('home:hero.subtitlePre')
                    : t('home:hero.subtitle')}
                </h4> */}
                <Countdown title="Now available on Uniswap!" />
                {modePreSales && (
                  <div className="helperSpaceBtn">
                    {showMsg ? (
                      <AlertMsg showActiveMsg={() => showActiveMsg()} />
                    ) : (
                      <div ref={theAreaBtn} className="preSales-btn">
                        <div onClick={() => setShowModal(true)} className="btn">
                          <div>{t('home:banner.btnCommunity1')}</div>
                          <div>{t('home:banner.btnCommunity2')}</div>
                        </div>
                        <div onClick={() => showActiveMsg()} className="btn">
                          <div>{t('home:banner.btnPublic1')}</div>
                          <div>{t('home:banner.btnPublic2')}</div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {launchMode && (
                  <Button
                    type="button"
                    className="btn-banner"
                    content={t('home:banner.button')}
                    onClick={() => setShowModal(true)}
                  />
                )}
              </>
            </div>
          </div>
        </section>
      </>
    );
  }
);

export default Hero;
