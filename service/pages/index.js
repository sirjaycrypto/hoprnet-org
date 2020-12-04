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
//
import Zoom from "react-reveal/Zoom";
import ReactPlayer from "react-player/lazy";
import useVisibility from "../components/hooks/useVisibility";
//
import ChooseLanguage from "../components/molecules/choose-language";
export default function Home() {
  const [visibleNow, setVisibleNow] = useState("");
  const [isVisibleWhy, currentElement] = useVisibility(100);
  const [isVisibleHow, currentElementAlt] = useVisibility(100);
  const [isVisibleTokenFea, currentElementTokenFea] = useVisibility(100);
  const [isVisibleNode, currentElementNode] = useVisibility(100);
  const [isVisibleTokenRele, currentElementTokenRele] = useVisibility(100);

  const [isVisibleBack, currentElementVisibleBack] = useVisibility(100);
  const [isVisibleTokenFuture, currentElementTokenFuture] = useVisibility(100);
  const { t } = useTranslation();

  useEffect(() => {
    if (isVisibleWhy) setVisibleNow(currentElement.current.id);
    if (isVisibleHow) setVisibleNow(currentElementAlt.current.id);
    if (isVisibleTokenFea) setVisibleNow(currentElementTokenFea.current.id);

    if (isVisibleNode) setVisibleNow(currentElementNode.current.id);
    if (isVisibleTokenRele) setVisibleNow(currentElementTokenRele.current.id);

    if (isVisibleBack) setVisibleNow(currentElementVisibleBack.current.id);
    if (isVisibleTokenFuture)
      setVisibleNow(currentElementTokenFuture.current.id);
  }, [
    isVisibleWhy,
    isVisibleHow,
    currentElement,
    currentElementAlt,
    isVisibleTokenFea,
    currentElementTokenFea,
    isVisibleNode,
    currentElementNode,
    isVisibleTokenRele,
    currentElementTokenRele,
    isVisibleBack,
    currentElementVisibleBack,
    isVisibleTokenFuture,
    currentElementTokenFuture,
  ]);

  return (
    <Layout visibleNow={visibleNow}>
      <ChooseLanguage />
      <Hero />
      <HomeMatter setVisibleNow={setVisibleNow} ref={currentElement} />
      <section className="video-home ">
        <ReactPlayer
          className="react-player"
          url="/assets/video/about.mp4"
          width="100%"
          height="100%"
          muted={true}
          playing={true}
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
        ref={currentElementTokenRele}
      />
      <HomeBacked
        setVisibleNow={setVisibleNow}
        ref={currentElementVisibleBack}
      />
      <section className="banner-CTA">
        <img src="/assets/images/banner.png" alt="The HOPR-Token NOW" />
        <div className="container-btn">
          <Zoom bottom>
            <div className="type-btn">
              <span>{t("common:btn-token")}</span>
            </div>
          </Zoom>
        </div>
      </section>
      <HomeFurther
        setVisibleNow={setVisibleNow}
        ref={currentElementTokenFuture}
      />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(
        [
          "common",
          "homeHero",
          "menu",
          "homeWhyMatt",
          "homeHowWor",
          "homeTokFea",
          "homeSlide",
          "homeHard",
          "homeToken",
          "homeBack",
          "homeFut",
        ],
        locale
      ),
    },
  };
}
