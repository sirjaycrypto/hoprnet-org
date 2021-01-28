import React, { useState, useRef, useEffect } from 'react';
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
  const [showModal, setShowModal] = useState(false);
  //
  const [thisBanner, setThisBanner] = useState('');
  const heroInfo = useRef('');
  const btnToFollow = useRef('');
  const bannerArea = useRef('');
  //false
  const [isVisibleTokenRel, currentElementTokenRel] = useVisibility(0);
  const [animateChart, setAnimateChart] = useState(false);
  const [btnFollow, srtBtnFollow] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isVisibleTokenRel) {
      setVisibleNow(currentElementTokenRel.current.id);
    }
    if (visibleNow === 'TOKEN-RELEASE') {
      setAnimateChart(true);
    }
    const scrollByBanner = bannerArea.current.offsetTop;
    setThisBanner(scrollByBanner);
  }, [isVisibleTokenRel, currentElementTokenRel]);

  const changeModePreSale = () => {
    setModePreSales(!modePreSales);
  };

  const showModalActive = () => {
    setShowModal(!showModal);
  };

  const activeModeFollowMain = () => {
    srtBtnFollow(true);
  };
  const removeModeFollowMain = () => {
    srtBtnFollow(false);
  };

  return (
    <Layout visibleNow={visibleNow}>
      <Modal showModal={showModal} showModalActive={() => showModalActive()} />
      <ChooseLanguage />
      <Hero
        ref={heroInfo}
        setVisibleNow={setVisibleNow}
        modePreSales={modePreSales}
        thisBanner={thisBanner}
        showModalActive={() => showModalActive()}
        changeModePreSale={() => changeModePreSale()}
        activeModeFollowMain={() => activeModeFollowMain()}
        removeModeFollowMain={() => removeModeFollowMain()}
      />
      <HomeHeadline modePreSales={modePreSales} />
      <section id="video-area" className="video-home ">
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
          <h3>{t('home:banner.label')}</h3>
        </div>
        <div
          className={!modePreSales ? (btnFollow ? 'nowFollowUs' : '') : ''}
          ref={btnToFollow}
        >
          <div className="btn-banner" onClick={() => showModalActive()}>
            <span>{t('home:banner.button')}</span>
          </div>
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
