import React, { useRef, forwardRef, useState, useEffect } from 'react';
import Countdown from '../atoms/countdown';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import HeroInfo from '../molecules/hero-info';
import { AlertMsg } from '..';

const Hero = forwardRef(
  (
    {
      thisBanner,
      modePreSales,
      setShowModal,
      changeModePreSale,
      activeModeFollowMain,
      removeModeFollowMain,
    },
    ref
  ) => {
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
      if (window.innerWidth <= 750) {
        setVideoMobile(true);
      } else if (window.innerWidth <= 1000) {
        setVideoTablet(true);
      }
    }


    const onScrollGlobal = () => {
      if (area.current && !videoMobile) {
        const breakOffset = area.current.clientHeight * 0.87;

        if (
          window.pageYOffset >= thisBanner ||
          window.pageYOffset <= breakOffset
        ) {
          removeModeFollowMain();
        } else if (window.pageYOffset >= breakOffset) {
          activeModeFollowMain();
        }
      }
    };

    useEffect(() => {
      setDeviceType();
    }, []);

    useEffect(() => {
      window.addEventListener('scroll', onScrollGlobal);
      return () => window.removeEventListener('scroll', onScrollGlobal);
    }, [theAreaBtn, modePreSales, videoMobile, thisBanner]);

    return (
      <>
        <section ref={area} className="section-hero">
          <HeroInfo />
          <div onClick={() => changeModePreSale()} className="changeBtn-style">
            <p>Show Pre-sale</p>
          </div>

          {videoMobile ? (
            <iframe
              allow="autoplay; fullscreen"
              className="background-video"
              src="https://player.vimeo.com/video/508845856/56eac0bbe9?autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false"
              frameBorder="0"
              allowFullScreen
              width="100%"
            ></iframe>
          ) : videoTablet ? (
            <iframe
              allow="autoplay; fullscreen"
              className="background-video"
              src="https://player.vimeo.com/video/508847974/b5664eda0e?autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false"
              frameBorder="0"
              allowFullScreen
              width="100%"
            ></iframe>
          ) : (
            <iframe
              allow="autoplay; fullscreen"
              className="background-video"
              src="https://player.vimeo.com/video/508834454/e3a6ac3248?autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false"
              frameBorder="0"
              allowFullScreen
              width="100%"
            ></iframe>
          )}

          <div className="container">
            <div className="text-wrapper">
              <>
                <h4>
                  {modePreSales
                    ? t('home:hero.subtitlePre')
                    : t('home:hero.subtitle')}
                </h4>
                <Countdown />
                {modePreSales ? (
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
                ) : (
                  <div onClick={() => setShowModal(true)} className="btn-banner">
                    <span>{t('home:banner.button')}</span>
                  </div>
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
