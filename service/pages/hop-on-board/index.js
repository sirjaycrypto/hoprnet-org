import React from 'react';
import HeroHoprOnBoard from '../../components/molecules/hero-hop-on-board';
import MapVideoOnBoard from '../../components/molecules/map-video-on-board';
import SectionHopOnBoard from '../../components/molecules/section-hop-on-board';
import SectionRoadMapHop from '../../components/organisms/section-road-map-hop';
import SectionJobsHopOnBoard from '../../components/molecules/jobs-hop-on-board';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';
import useTranslation from 'next-translate/useTranslation';
import SectionBuildHop from '../../components/molecules/section-build';
import SectionBountiesHop from '../../components/molecules/section-bounties';

export default function Index() {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* https://player.vimeo.com/video/673666043?background=1&autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false&app_id=122963 */}
      <HeroHoprOnBoard
        img="/assets/images/HOP_ON_BOARD_HERO.jpg"
        text={t('home:hopOnBoard.titleVideos.title1')}
      />
      <SectionHopOnBoard />
      <MapVideoOnBoard
        src="https://player.vimeo.com/video/673669586?background=1&autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false&app_id=122963"
      />
      <SectionRoadMapHop />
      <SectionBuildHop />
      <SectionBountiesHop />
      <SectionJobsHopOnBoard />
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
