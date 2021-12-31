import React from 'react';
import HeroHoprOnBoard from '../../components/molecules/hero-hop-on-board';
import SectionHopOnBoard from '../../components/molecules/section-hop-on-board';
import SectionPorgrammeHop from '../../components/molecules/section-programme-hop';
import SectionRoadMapHop from '../../components/molecules/section-road-map-hop';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';
import useTranslation from 'next-translate/useTranslation';

export default function Index({}) {
  const { t } = useTranslation();
  return (
    <Layout>
      <HeroHoprOnBoard
        src={
          'https://player.vimeo.com/video/508834454?background=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false&app_id=122963'
        }
        text={t('home:hopOnBoard.titleVideos.title1')}
      />
      <SectionHopOnBoard />
      <SectionPorgrammeHop />
      <HeroHoprOnBoard
        src={
          'https://player.vimeo.com/video/508840889?background=1&loop=1&muted=true&responsive=true&controls=false&app_id=122963'
        }
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
