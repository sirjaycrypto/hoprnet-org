import React from 'react';
import HeroHoprOnBoard from '../../components/molecules/hero-hop-on-board';
import MapVideoOnBoard from '../../components/molecules/map-video-on-board';
import SectionHopOnBoard from '../../components/molecules/section-hop-on-board';
import SectionRoadMapHop from '../../components/organisms/section-road-map-hop';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';
import useTranslation from 'next-translate/useTranslation';

export default function Index({}) {
  const { t } = useTranslation();
  return (
    <Layout>
      <HeroHoprOnBoard
        src="https://player.vimeo.com/video/663035309?background=1&autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false&app_id=122963"
        text={t('home:hopOnBoard.titleVideos.title1')}
      />
      <SectionHopOnBoard />
      <MapVideoOnBoard
        src="https://player.vimeo.com/video/662893108?background=1&autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false&app_id=122963"
      />
      <SectionRoadMapHop />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['about', 'common', 'menu', 'home'], locale),
    },
  };
}
