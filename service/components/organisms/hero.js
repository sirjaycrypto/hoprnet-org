import React, { useRef, forwardRef, useState, useEffect } from 'react';
import Countdown from '../atoms/countdown';
import useTranslation from 'next-translate/useTranslation';
import Modal from '../atoms/modal';
import AlertMsg from '../atoms/alertMsg';
import HeroInfo from '../molecules/hero-info';

const Hero = forwardRef(
  ({ modePreSales, changeModePreSale, setVisibleNow }, ref) => {
    const [videoMobile, setVideoMobile] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [btnPreSalesFollow, setBtnPreSalesFollow] = useState(false);
    const theAreaBtn = useRef('');
    const { t } = useTranslation();

    const showModalActive = () => {
      setShowModal(!showModal);
    };

    const showActiveMsg = () => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        setShowMsg(!showMsg);
      }, 200);
    };

    useEffect(() => {
      if (window.matchMedia('screen and (min-width: 797px)').matches) {
        setVideoMobile(true);
      }
      const elementTop = theAreaBtn?.current?.clientHeight;
      const elementPlus = theAreaBtn?.current?.scrollWidth + elementTop;
      window.onscroll = function () {
        if (
          window.pageYOffset >= elementTop &&
          window.pageYOffset <= elementPlus
        ) {
          setBtnPreSalesFollow(true);
        } else if (window.pageYOffset <= elementPlus) {
          setBtnPreSalesFollow(false);
        }
      };
    }, {});

    return (
      <>
        <section ref={ref} className="section-hero">
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
              className="background-video "
              src="/assets/video/hero.mp4"
            ></video>
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="background-video display-phone"
              src="/assets/video/hopr_Drone_Mobile.mp4"
            ></video>
          )}

          <div className="container">
            <div className="text-wrapper">
              {showModal ? (
                <Modal
                  showModal={showModal}
                  showModalActive={() => showModalActive()}
                />
              ) : (
                <>
                  <h4>{t('home:hero.subtitle')}</h4>

                  <Countdown />
                  {showMsg ? (
                    <AlertMsg showActiveMsg={() => showActiveMsg()} />
                  ) : (
                    <div
                      ref={theAreaBtn}
                      className={
                        'preSales-btn ' +
                        (btnPreSalesFollow ? 'nowFollowUs' : 'e')
                      }
                    >
                      <div>
                        <div onClick={() => showModalActive()} className="btn ">
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
                </>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
);

export default Hero;
