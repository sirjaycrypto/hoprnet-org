import React, { useState, useRef, useEffect } from 'react';
import { AlertMsg } from '../../components';
import Layout from '../../components/organisms/layout';
import Hero from '../../components/organisms/hero';
import HomeHeadline from '../../components/sections/home-headline';
import HomeTokenFeatures from '../../components/sections/home-token-features';
import HomeHomeItWork from '../../components/sections/home-it-work';
import HomeHardware from '../../components/sections/home-hardware';
import HomeBacked from '../../components/sections/home-backed';
import Slide from '../../components/organisms/slider';
import HomeTokenReleas from '../../components/sections/home-token-release';
import HomeRoadMap from '../../components/sections/home-road';
import { loadNamespaces } from '../_app';
import useTranslation from 'next-translate/useTranslation';

import ChooseLanguage from '../../components/molecules/choose-language';
import useVisibility from '../../components/hooks/useVisibility';
import Footer from '../../components/molecules/footer';

import Modal from '../../components/atoms/modal';

export default function Index() {
  const [visibleNow, setVisibleNow] = useState('');
  const [modePreSales, setModePreSales] = useState(false);
  const [showModal, setShowModal] = useState(undefined);
  const [showPublicMsg, setShowPublicMsg] = useState(false);

  const [thisBanner, setThisBanner] = useState(0);
  const heroInfo = useRef();
  const btnToFollow = useRef();
  const bannerArea = useRef();
  const videoRef = useRef();

  const [isVisibleTokenRel, currentElementTokenRel] = useVisibility(0);
  const [animateChart, setAnimateChart] = useState(false);
  const [btnFollow, srtBtnFollow] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isVisibleTokenRel) {
      setVisibleNow(currentElementTokenRel.current.id);
    }

    if (bannerArea.current) {
      setThisBanner(bannerArea.current.offsetTop - (bannerArea.current.clientHeight / 2));
    }
  }, [isVisibleTokenRel, currentElementTokenRel]);

  useEffect(() => {
    if (visibleNow === 'TOKEN-RELEASE' && !animateChart) {
      setAnimateChart(true);
    }
  }, [visibleNow]);

  useEffect(() => {
    const location = document.location.href;

    if (location.indexOf('#') > -1) {
      const id = location.substr(location.indexOf('#') + 1, location.length),
        element = document.getElementById(id);

      if (element) {
        setTimeout(function () {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 1400);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () =>
      window.removeEventListener('scroll', onScroll);
  }, [videoRef, modePreSales, thisBanner]);

  const onScroll = () => {
    const elemntY = videoRef?.current.scrollWidth;
    const scrollY = window.pageYOffset;

    if (scrollY - elemntY >= 0 && scrollY < thisBanner) {
      srtBtnFollow(true);
    } else {
      srtBtnFollow(false);
    }
  };

  const changeModePreSale = () => {
    setModePreSales(!modePreSales);
  };

  const activeModeFollowMain = () => {
    srtBtnFollow(true);
  };
  const removeModeFollowMain = () => {
    srtBtnFollow(false);
  };

  const togglePublicMsg = () => {
    setTimeout(() => {
      setShowPublicMsg(!showPublicMsg);
    }, 200);
  };

  return (
    <Layout visibleNow={visibleNow}>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ChooseLanguage />
      <Hero
        ref={heroInfo}
        setVisibleNow={setVisibleNow}
        modePreSales={modePreSales}
        setShowModal={setShowModal}
        changeModePreSale={changeModePreSale}
      />
      <HomeHeadline modePreSales={modePreSales} setShowModal={setShowModal} />
      <section id="video-area" className="video-home" ref={videoRef}>
        <iframe
          src="https://player.vimeo.com/video/492666726?title=0&byline=0&portrait=0&playsinline=0&muted=1&autopause=0&controls=0&loop=1&app_id=122963"
          frameBorder="0"
        ></iframe>
      </section>
      <HomeTokenFeatures setVisibleNow={setVisibleNow} />
      <HomeHomeItWork setVisibleNow={setVisibleNow} />
      <HomeHardware setVisibleNow={setVisibleNow} />
      <HomeBacked setVisibleNow={setVisibleNow} />
      <Slide />
      <HomeTokenReleas
        start={animateChart}
        setVisibleNow={setVisibleNow}
        ref={currentElementTokenRel}
      />
      <section id="BANNER" className="banner-CTA" ref={bannerArea}>
        <div className="container">
          <h3>{!modePreSales ? t('home:banner.label') : t('home:banner.labelPreSales')}</h3>
        </div>
        <div className={btnFollow ? 'content-buttons nowFollowUs' : 'content-buttons'} ref={btnToFollow}>
          {modePreSales ? (
            showPublicMsg ? (
              <AlertMsg floating showActiveMsg={togglePublicMsg} />
            ) : (
              <>
                <div onClick={() => setShowModal(true)} className="btn-banner first-button">
                  <div>{t('home:banner.btnCommunity1')}</div>
                  <div>{t('home:banner.btnCommunity2')}</div>
                </div>
                <div className="btn-banner" onClick={togglePublicMsg}>
                  <div>{t('home:banner.btnPublic1')}</div>
                  <div>{t('home:banner.btnPublic2')}</div>
                </div>
              </>
            )
          ) : (
            <div className="btn-banner" onClick={() => setShowModal(true)}>
              <span>{t('home:banner.button')}</span>
            </div>
          )}
        </div>
      </section>
      <HomeRoadMap />
      <Footer setVisibleNow={setVisibleNow} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu', 'home'], locale),
    },
  };
}
