import React, { useState, useEffect } from "react";
import Layout from "../components/organisms/layout";
import Hero from "../components/organisms/hero";
import HomeMatter from "../components/sections/home-matters";
import HomeHomeItWork from "../components/sections/home-it-work";
import HomeTokenFeatures from "../components/sections/home-token-features";
import HomeHardware from "../components/sections/home-hardware";
import HomeTokenReleas from "../components/sections/home-token-release";
import HomeBacked from "../components/sections/home-backed";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HomeMatter />
      <section className="aux-img-home">
        <div>
          <img src="/assets/images/aux-visual.svg" alt="The HOPR-Token" />
        </div>
      </section>
      <HomeHomeItWork />
      <HomeTokenFeatures />
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
    </Layout>
  );
}
