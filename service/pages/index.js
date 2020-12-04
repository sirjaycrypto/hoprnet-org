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
//
import ChooseLanguage from "../components/molecules/choose-language";
export default function Home() {
  const [visibleNow, setVisibleNow] = useState("");
  const { t } = useTranslation();
  return (
    <Layout visibleNow={visibleNow}>
      <ChooseLanguage />
      <Hero />
      <HomeMatter setVisibleNow={setVisibleNow} />
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

      <HomeHomeItWork />
      <HomeTokenFeatures />
      <Slide />
      <HomeHardware />
      <HomeTokenReleas />
      <HomeBacked />
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
      <HomeFurther />
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
