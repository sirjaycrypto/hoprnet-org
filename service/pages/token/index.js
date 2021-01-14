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

export default function Index() {
  const [visibleNow, setVisibleNow] = useState('');
  const btnMainPoint = useRef('');

  const [activeBtn, setActiveBtn] = useState(false);
  const [animateChart, setAnimateChart] = useState(false);
  const [isVisibleHero, currentElementHero] = useVisibility(0);
  const [isVisibleInvestData, currentInvestData] = useVisibility(0);
  const [isVisibleVideo, currentElementVideo] = useVisibility(0);
  const [isVisibleTokenFea, currentElementTokenFea] = useVisibility(0);
  const [isVisibleHow, currentElementAlt] = useVisibility(0);
  const [isVisibleBack, currentElementVisibleBack] = useVisibility(0);
  const [isVisibleNode, currentElementNode] = useVisibility(0);
  const [isVisibleTokenRel, currentElementTokenRel] = useVisibility(0);
  const [isVisibleBanner, currentElementVisibleBanner] = useVisibility(0);
  const [isVisibleFooter, currentElementTokenFooter] = useVisibility();
  const { t } = useTranslation();

  useEffect(() => {
    if (isVisibleFooter) setVisibleNow(currentElementTokenFooter.current.id);
    if (isVisibleInvestData) setVisibleNow(currentInvestData.current.id);
    if (isVisibleTokenFea) setVisibleNow(currentElementTokenFea.current.id);
    if (isVisibleVideo) setVisibleNow(currentElementVideo.current.id);
    if (isVisibleHow) setVisibleNow(currentElementAlt.current.id);
    if (isVisibleNode) setVisibleNow(currentElementNode.current.id);
    if (isVisibleBack) setVisibleNow(currentElementVisibleBack.current.id);
    if (isVisibleBanner) setVisibleNow(currentElementVisibleBanner.current.id);
    if (isVisibleTokenRel) setVisibleNow(currentElementTokenRel.current.id);
    if (visibleNow == 'TOKEN-RELEASE') {
      setAnimateChart(true);
    }
    if (
      visibleNow == '' ||
      visibleNow == 'BANNER' ||
      visibleNow == 'blindText' ||
      visibleNow == 'FOOTER'
    ) {
      setActiveBtn(false);
    } else {
      setActiveBtn(true);
    }
  }, [
    isVisibleHero,
    setVisibleNow,
    isVisibleVideo,
    isVisibleFooter,
    isVisibleHow,
    isVisibleTokenRel,
    isVisibleBanner,
    currentElementVisibleBanner,
    currentInvestData,
    currentElementAlt,
    currentElementHero,
    currentElementVideo,
    currentElementNode,
    currentElementTokenRel,
    currentElementTokenFooter,
  ]);

  return (
    <Layout visibleNow={visibleNow}>
      <ChooseLanguage />
      <Hero setVisibleNow={setVisibleNow} ref={currentElementHero} />
      <HomeHeadline ref={currentInvestData} />
      <section
        id="video-area"
        className="video-home "
        ref={currentElementVideo}
      >
        <iframe
          src="https://player.vimeo.com/video/492666726?title=0&byline=0&portrait=0&playsinline=0&muted=1&autopause=0&controls=0&loop=1&app_id=122963"
          frameBorder="0"
        ></iframe>
      </section>
      <HomeTokenFeatures
        setVisibleNow={setVisibleNow}
        ref={currentElementTokenFea}
      />
      <HomeHomeItWork setVisibleNow={setVisibleNow} ref={currentElementAlt} />
      <HomeHardware setVisibleNow={setVisibleNow} ref={currentElementNode} />
      <HomeBacked
        setVisibleNow={setVisibleNow}
        ref={currentElementVisibleBack}
      />
      <Slide />
      <HomeTokenReleas
        start={animateChart}
        setVisibleNow={setVisibleNow}
        ref={currentElementTokenRel}
      />
      <section
        id="BANNER"
        className="banner-CTA"
        ref={currentElementVisibleBanner}
      >
        <div className="container">
          <h3>{t('home:banner.label')}</h3>
        </div>
        <div
          className={'btn-follow ' + (activeBtn ? 'modeFollow' : 'fixOnBanner')}
          ref={activeBtn ? btnMainPoint : null}
        >
          <div onClick={() => clickBtn()} className="btn-banner">
            <span>{t('home:banner.button')}</span>
          </div>
        </div>
      </section>
      <HomeRoadMap />
      <Footer setVisibleNow={setVisibleNow} ref={currentElementTokenFooter} />
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
