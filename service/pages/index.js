import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/organisms/layout';
import HoprCircle from '../components/home-sections/HoprCircle';
import HeroFull from '../components/home-sections/HeroFull';
import useTranslation from 'next-translate/useTranslation';

import { loadNamespaces } from './_app';

import HoperFor from "../components/home-sections/HoperFor";
import News from '../components/home-sections/News';
import Blog from '../components/home-sections/Blogs';
import Partners from '../components/home-sections/Partners';
import Products from '../components/home-sections/Products';
import Contact from '../components/home-sections/Contact';
export default function Home() {
  return (
    <Layout>
      <div id="the-old-home">
        {/* <HoprCircle /> */}
        <HeroFull />
        <News />
        <HoperFor/>
        <Products />
        <Blog />
        <Partners />
        <Contact />
      </div>
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
