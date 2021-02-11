import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { SectionContainer } from '../../components';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';

export const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="win-page">
      <Layout>
        <SectionContainer align="center" extraClass="header">
          <h1 data-aos="fade-down" data-aos-delay="150">
            HOPR JUNGFRAU: 24TH FEB 2021
          </h1>
          <p>Hop around the world with HOPR, and win a share of 500,000 HOPR tokens and a trip to Switzerland!</p>
        </SectionContainer>
      </Layout>
    </div>
  );
};

export default Index;

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(
        ['common', 'menu'],
        locale,
      ),
    },
  };
}
