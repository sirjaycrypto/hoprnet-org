import React, { useState, useEffect } from "react";
import Layout from "../components/organisms/layout";
import Hero from "../components/organisms/hero";
import HomeHeadline from "../components/sections/home-headline";
import { loadNamespaces } from "./_app";
import useTranslation from "next-translate/useTranslation";

import ChooseLanguage from "../components/molecules/choose-language";
import useVisibility from "../components/hooks/useVisibility";
import Footer from "../components/molecules/footer";

export default function Home() {
  const [visibleNow, setVisibleNow] = useState("");
  const [isVisibleHero, currentElementHero] = useVisibility(100);
  const [isVisibleFooter, currentElementTokenFooter] = useVisibility(100);
  const { t } = useTranslation();

  useEffect(() => {
    if (isVisibleFooter) setVisibleNow(currentElementTokenFooter.current.id);
  }, [isVisibleFooter, currentElementTokenFooter]);

  return (
    <Layout visibleNow={visibleNow}>
      <ChooseLanguage />
      <Hero setVisibleNow={setVisibleNow} ref={currentElementHero} />
      <HomeHeadline />
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
