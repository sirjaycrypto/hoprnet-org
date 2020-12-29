import React, { useState, useEffect } from "react";
import Layout from "../components/organisms/layout";
import Hero from "../components/organisms/hero";
import HomeMatter from "../components/sections/home-matters";
import HomeHomeItWork from "../components/sections/home-it-work";
import HomeTokenFeatures from "../components/sections/home-token-features";
import HomeHardware from "../components/sections/home-hardware";
import HomeTokenReleas from "../components/sections/home-token-release";
import HomeBacked from "../components/sections/home-backed";
import HomeFurther from "../components/sections/home-further";
import Slide from "../components/organisms/slider";
import { loadNamespaces } from "./_app";
import useTranslation from "next-translate/useTranslation";

import ChooseLanguage from "../components/molecules/choose-language";

import ReactPlayer from "react-player/lazy";
import useVisibility from "../components/hooks/useVisibility";
import Footer from "../components/molecules/footer";
import { css, keyframes } from "@emotion/css";

export default function Home() {
  const [fontSize, setFontSize] = useState(34);
  const [visibleNow, setVisibleNow] = useState("");
  const [videoAutoPLay, setVideoAutoPlay] = useState(false);
  const [showBtnBanner, setShowBtnBanner] = useState();
  const [btnBanner, setBtnBanner] = useState(false);
  const [isVisibleVideo, currentElementVideo] = useVisibility(100);
  const [isVisibleHero, currentElementHero] = useVisibility(100);
  const [isVisibleWhy, currentElement] = useVisibility(100);
  const [isVisibleHow, currentElementAlt] = useVisibility(100);
  const [isVisibleTokenFea, currentElementTokenFea] = useVisibility(100);
  const [isVisibleNode, currentElementNode] = useVisibility(100);
  const [isVisibleTokenRel, currentElementTokenRel] = useVisibility(100);
  const [isVisibleBack, currentElementVisibleBack] = useVisibility(100);
  const [isVisibleBanner, currentElementVisibleBanner] = useVisibility(100);
  const [isVisibleTokenFuture, currentElementTokenFuture] = useVisibility(100);
  const [isVisibleFooter, currentElementTokenFooter] = useVisibility(100);
  const { t } = useTranslation();

  useEffect(() => {
    if (isVisibleHero) setVisibleNow("");
    if (isVisibleVideo) {
      setVideoAutoPlay(true);
    } else if (currentElementVideo.current.id === "video-area") {
      setVideoAutoPlay(false);
    }

    if (
      visibleNow === "BANNER" ||
      visibleNow === "FURTHER-READING" ||
      visibleNow === "FOOTER"
    ) {
      setBtnBanner(true);
    } else {
      setBtnBanner(false);
    }

    if (isVisibleBanner) setShowBtnBanner(true);
    if (isVisibleTokenFuture) setShowBtnBanner(true);
    if (isVisibleBanner) setVisibleNow(currentElementVisibleBanner.current.id);
    if (isVisibleWhy) setVisibleNow(currentElement.current.id);
    if (isVisibleHow) setVisibleNow(currentElementAlt.current.id);
    if (isVisibleTokenFea) setVisibleNow(currentElementTokenFea.current.id);
    if (isVisibleNode) setVisibleNow(currentElementNode.current.id);
    if (isVisibleTokenRel) setVisibleNow(currentElementTokenRel.current.id);
    if (isVisibleBack) setVisibleNow(currentElementVisibleBack.current.id);
    if (isVisibleTokenFuture)
      setVisibleNow(currentElementTokenFuture.current.id);
    if (isVisibleFooter) setVisibleNow(currentElementTokenFooter.current.id);

    if (window.pageYOffset === 0) {
      setFontSize(34);
    } else {
      setFontSize(14);
      if (
        visibleNow === "BANNER" ||
        visibleNow === "FURTHER-READING" ||
        visibleNow === "FOOTER"
      ) {
        setFontSize(34);
      }
    }
  }, [
    videoAutoPLay,
    isVisibleHero,
    isVisibleWhy,
    isVisibleHow,
    isVisibleVideo,
    isVisibleTokenFea,
    isVisibleNode,
    isVisibleTokenRel,
    isVisibleBack,
    isVisibleTokenFuture,
    isVisibleBanner,
    isVisibleFooter,
    currentElementVisibleBanner,
    currentElementVideo,
    currentElement,
    currentElementAlt,
    currentElementTokenFea,
    currentElementNode,
    currentElementTokenRel,
    currentElementVisibleBack,
    currentElementTokenFuture,
    currentElementTokenFooter,
  ]);

  const clickBtn = () => {
    console.log("Click");
  };

  return (
    <Layout visibleNow={visibleNow}>
      <ChooseLanguage />

      <Hero setVisibleNow={setVisibleNow} ref={currentElementHero} />
      <HomeMatter setVisibleNow={setVisibleNow} ref={currentElement} />
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

      <HomeHomeItWork setVisibleNow={setVisibleNow} ref={currentElementAlt} />
      <HomeTokenFeatures
        setVisibleNow={setVisibleNow}
        ref={currentElementTokenFea}
      />
      <Slide />
      <HomeHardware setVisibleNow={setVisibleNow} ref={currentElementNode} />
      <HomeTokenReleas
        setVisibleNow={setVisibleNow}
        ref={currentElementTokenRel}
      />
      <HomeBacked
        setVisibleNow={setVisibleNow}
        ref={currentElementVisibleBack}
      />
      <section
        id="BANNER"
        className="banner-CTA"
        ref={currentElementVisibleBanner}
      >
        <div className={"btn-follow " + (btnBanner ? "change-mode" : "")}>
          <div onClick={() => clickBtn()} className="btn-banner ">
            <span
              className={css`
                font-size: ${fontSize}px;
              `}
            >
              {t("common:btn-token")}
            </span>
          </div>
        </div>
      </section>
      <HomeFurther
        setVisibleNow={setVisibleNow}
        ref={currentElementTokenFuture}
      />
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
