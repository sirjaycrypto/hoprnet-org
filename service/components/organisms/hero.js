import React, { useRef, forwardRef, useState, useEffect } from 'react';
import Countdown from '../atoms/countdown';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import AlertMsg from '../atoms/alertMsg';
import HeroInfo from '../molecules/hero-info';

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
    const [showMsg, setShowMsg] = useState(false);
    const [btnPreSalesFollow, setBtnPreSalesFollow] = useState(false);
    const theAreaBtn = useRef(null);
    const area = useRef(null);

    const { t } = useTranslation();

    const showActiveMsg = () => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        setShowMsg(!showMsg);
      }, 200);
    };

    const isPhone = () => {
      if (window.innerWidth <= 750) {
        setVideoMobile(true);
      }
    };

    const onScrollGlobal = () => {
      if (theAreaBtn.current && !videoMobile) {
        const elementHeight = theAreaBtn.current.clientHeight;
        const elementTop = theAreaBtn.current.scrollWidth;
        const elementPlus = elementTop + elementHeight;

        if (window.pageYOffset > elementPlus) {
          setBtnPreSalesFollow(true);
        } else {
          setBtnPreSalesFollow(false);
        }
      }
    };

    useEffect(() => {
      isPhone();
    }, []);

    useEffect(() => {
      window.addEventListener('scroll', onScrollGlobal);
      return () => window.removeEventListener('scroll', onScrollGlobal);
    }, [theAreaBtn, modePreSales, videoMobile]);

    return (
      <>
        <section ref={area} className="section-hero">
          <HeroInfo />
          <div onClick={() => changeModePreSale()} className="changeBtn-style">
            <p>Show Pre-sale</p>
          </div>

          {videoMobile ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="background-video"
              src="/assets/video/hopr_Drone_Mobile.mp4"
              type="video/mp4"
            ></video>
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="background-video"
              src="/assets/video/hero.mp4"
              type="video/mp4"
            ></video>
          )}

          <div className="container">
            <div className="text-wrapper">
              <>
                <h4>{modePreSales ? t('home:hero.subtitlePre') : t('home:hero.subtitle')}</h4>
                <Countdown />
                {modePreSales ? (
                  <div
                    className={
                      'helperSpaceBtn ' + (btnPreSalesFollow ? 'auxScroll' : '')
                    }
                  >
                    {showMsg ? (
                      <AlertMsg showActiveMsg={() => showActiveMsg()} />
                    ) : (
                      <div
                        ref={theAreaBtn}
                        className={
                          'preSales-btn ' + (btnPreSalesFollow ? 'nowFollowUs' : '')
                        }
                      >
                        <div onClick={() => setShowModal(true)} className="btn">
                          <div>{t('common:btnCommunity1')}</div>
                          <div>{t('common:btnCommunity2')}</div>
                        </div>
                        <div onClick={() => showActiveMsg()} className="btn">
                          <div>{t('common:btnPublic1')}</div>
                          <div>{t('common:btnPublic2')}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    onClick={() => setShowModal(true)}
                    className="btn-banner "
                  >
                    <span>{t('common:getHorpFull')}</span>
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
