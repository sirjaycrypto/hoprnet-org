import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

import { SectionContainer } from '../../components';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="disclaimer-page">
      <Layout>
        <SectionContainer containerSize="sm">
          <h2 className="text-center" data-aos="fade-down" data-aos-delay="150">
            {t('disclaimer:hero.title')}
          </h2>
          <div data-aos="fade-down" data-aos-delay="300">
            <Trans
              i18nKey="disclaimer:hero.content"
              components={{
                paragraph: <p />,
                breakLine: <br />,
              }}
            />
          </div>
        </SectionContainer>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(
        ['common', 'menu', 'disclaimer'],
        locale
      ),
    },
  };
}
