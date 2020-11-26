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
export default function Home() {
  return (
    <Layout>
      <Hero />
      <HomeMatter />
      <section className="video-home padding-section-aux">
      <div className="container">
      <iframe  src="https://www.youtube.com/embed/tMzW64tbUQU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
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
            <span>Get HOPR-Token on SECRET</span>
          </div>
        </div>
      </section>
      <HomeFurther />
    </Layout>
  );
}
