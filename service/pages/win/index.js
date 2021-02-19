import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import HeroInternal from '../../components/organisms/hero-internal';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';

export const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="win-page">
      <Layout>
        <HeroInternal>
          <h1 data-aos="fade-down" data-aos-delay="150">
            HOPR JUNGFRAU: 24TH FEB 2021
          </h1>
          <img src="assets/images/hopr_seal.png" alt="HOPR" width="175px" />
          <p>
            Hop around the world with HOPR, and win a share of 100,000 HOPR
            tokens and a trip to Switzerland!
          </p>
          <p style={{ marginBottom: '80px' }}>More coming soon.</p>
        </HeroInternal>
      </Layout>
    </div>
  );
};

export default Index;

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu'], locale),
    },
  };
}
