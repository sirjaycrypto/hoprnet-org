import React from "react";
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

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Hero />
      <HomeMatter />
      <section className="video-home ">
        <video controls>
          <source src="/assets/video/about.mp4" type="video/mp4" />
          {t("common:noSupport")}
        </video>
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
          <div className="type-btn">
            <span>{t("common:btn-token")}</span>
          </div>
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
