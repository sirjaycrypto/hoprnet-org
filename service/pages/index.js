import React, { useState, useEffect } from "react";
import Layout from "../components/organisms/layout";
import Hero from "../components/organisms/hero";
import HomeHeadline from "../components/sections/home-headline";
import HomeTokenFeatures from "../components/sections/home-token-features";
import HomeHomeItWork from "../components/sections/home-it-work";
import HomeHardware from "../components/sections/home-hardware";
import HomeBacked from "../components/sections/home-backed";
import Slide from "../components/organisms/slider";
import HomeTokenReleas from "../components/sections/home-token-release";
import HomeRoadMap from '../components/sections/home-road'
import { loadNamespaces } from "./_app";
import useTranslation from "next-translate/useTranslation";

import ChooseLanguage from "../components/molecules/choose-language";
import useVisibility from "../components/hooks/useVisibility";
import Footer from "../components/molecules/footer";
import ReactPlayer from "react-player/lazy";
export default function Home() {
  const [visibleNow, setVisibleNow] = useState("");
  const [videoAutoPLay, setVideoAutoPlay] = useState(false);
  const [isVisibleHero, currentElementHero] = useVisibility(100);
  const [isVisibleVideo, currentElementVideo] = useVisibility(100);
  const [isVisibleTokenFea, currentElementTokenFea] = useVisibility(100);
  const [isVisibleHow, currentElementAlt] = useVisibility(100);
  const [isVisibleBack, currentElementVisibleBack] = useVisibility(100);
  const [isVisibleNode, currentElementNode] = useVisibility(100);
  const [isVisibleTokenRel, currentElementTokenRel] = useVisibility(100);
  const [isVisibleBanner, currentElementVisibleBanner] = useVisibility(100);
  const [isVisibleFooter, currentElementTokenFooter] = useVisibility(100);
  const { t } = useTranslation();

  useEffect(() => {
    if (isVisibleFooter) setVisibleNow(currentElementTokenFooter.current.id);
    if (isVisibleTokenFea) setVisibleNow(currentElementTokenFea.current.id);
    if (isVisibleHow) setVisibleNow(currentElementAlt.current.id);
    if (isVisibleNode) setVisibleNow(currentElementNode.current.id);
    if (isVisibleBack) setVisibleNow(currentElementVisibleBack.current.id);
    if (isVisibleBanner) setVisibleNow(currentElementVisibleBanner.current.id);
    if (isVisibleTokenRel) setVisibleNow(currentElementTokenRel.current.id);
  }, [
    isVisibleHero,
    isVisibleVideo,
    isVisibleFooter,
    isVisibleHow,
    isVisibleTokenRel,
    isVisibleBanner,
    currentElementVisibleBanner,
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
      <HomeHeadline />
      <section
        id="video-area"
        className="video-home "
        ref={currentElementVideo}
      >
        <ReactPlayer
          className="react-player"
          config={{
            vimeo: {
              playerVars: { showInfo: 1 },
            },
          }}
          url={"https://vimeo.com/492666726"}
          width="100%"
          height="100%"
          muted={!videoAutoPLay}
          playing={videoAutoPLay}
          loop={true}
        />
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
        setVisibleNow={setVisibleNow}
        ref={currentElementTokenRel}
      />
      <section
        id="BANNER"
        className="banner-CTA"
        ref={currentElementVisibleBanner}
      >
        <div className="container">
          <h3>
          {t("home:banner.label")}
          </h3>
        </div>
        <div className="btn-follow " >
          <div onClick={() => clickBtn()} className="btn-banner ">
            <span
            >
              {t("common:btn-token")}
            </span>
          </div>
        </div>
      </section>
      <HomeRoadMap/>
      <Footer setVisibleNow={setVisibleNow} ref={currentElementTokenFooter} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(["common", "menu", "home"], locale),
    },
  };
}
