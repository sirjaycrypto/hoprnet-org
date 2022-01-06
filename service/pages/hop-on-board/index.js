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
        src={require('../../public/assets/video/Hop_on_board.mp4')}
        isAssetVideo={true}
        text={t('home:hopOnBoard.titleVideos.title1')}
        controls={false}
        loop={true}
        muted={true}
        autoplay={true}
      />
      <SectionHopOnBoard />
      <MapVideoOnBoard
        src={require('../../public/assets/video/Animation_HOP_ON_BOARD.mp4')}
        controls={false}
        loop={true}
        muted={true}
        autoplay={true}
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
