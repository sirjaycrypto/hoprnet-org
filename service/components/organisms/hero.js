import React, { useRef, forwardRef, useState, useEffect } from 'react';
import Countdown from '../atoms/countdown';
import useTranslation from 'next-translate/useTranslation';
import Modal from '../atoms/modal';
import AlertMsg from '../atoms/alertMsg';
import HeroInfo from '../molecules/hero-info';

const Hero = forwardRef(
  (
    {
      thisBanner,
      modePreSales,
      showModalActive,
      changeModePreSale,
      activeModeFollowMain,
      removeModeFollowMain,
    },
    ref
  ) => {
    const [videoMobile, setVideoMobile] = useState(false);
    const [showMsg, setShowMsg] = useState(false);

    const [btnPreSalesFollow, setBtnPreSalesFollow] = useState(false);
    const theAreaBtn = useRef('');
    const area = useRef('');

    const { t } = useTranslation();

    const showActiveMsg = () => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        setShowMsg(!showMsg);
      }, 200);
    };

    const isPhone = () => {
      if (window.innerWidth <= 768) {
        setVideoMobile(true);
      }
    };

    useEffect(() => {
      isPhone();
      const theHeight = area?.current?.clientHeight;
      const elementHeight = theAreaBtn?.current?.clientHeight;
      const elementTop = theAreaBtn?.current?.scrollWidth;
      const elementPlus = elementTop + elementHeight;

      window.onscroll = function () {
        if (
          window.pageYOffset >= elementTop &&
          window.pageYOffset <= elementPlus
        ) {
          setBtnPreSalesFollow(true);
        } else if (window.pageYOffset <= elementPlus) {
          setBtnPreSalesFollow(false);
        }
        if (
          window.pageYOffset >= thisBanner ||
          window.pageYOffset <= theHeight
        ) {
          removeModeFollowMain();
        } else if (window.pageYOffset >= theHeight) {
          activeModeFollowMain();
        }
      };
    }, [
      modePreSales,
      activeModeFollowMain,
      removeModeFollowMain,
      showModalActive,
    ]);

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
            ></video>
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="background-video"
              src="/assets/video/hero.mp4"
            ></video>
          )}

          <div className="container">
            <div className="text-wrapper">
              <>
                <h4>{t('home:hero.subtitlePre')}</h4>
                <Countdown />
                {modePreSales ? (
                  <div
                    className={
                      'helperSpaceBtn ' + (btnPreSalesFollow && 'auxScroll')
                    }
                  >
                    {showMsg ? (
                      <AlertMsg showActiveMsg={() => showActiveMsg()} />
                    ) : (
                      <div
                        ref={theAreaBtn}
                        className={
                          'preSales-btn ' + (btnPreSalesFollow && 'nowFollowUs')
                        }
                      >
                        <div>
                          <div
                            onClick={() => showModalActive()}
                            className="btn "
                          >
                            <span>{t('common:btn-comumnity')}</span>
                          </div>
                        </div>

                        <div>
                          <div onClick={() => showActiveMsg()} className="btn ">
                            <span>{t('common:btn-public')}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div
                      onClick={() => showModalActive()}
                      className="btn-banner "
                    >
                      <span>{t('common:getHorpFull')}</span>
                    </div>
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
