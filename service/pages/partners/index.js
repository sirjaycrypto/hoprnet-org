import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

import { Button, SectionContainer } from '../../components';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';

export default function Index() {
  const { t } = useTranslation();

  const onClickApply = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfpw9alXYGO4WvWS8HTF-5keGk_OFshrIIcGzifhfuWs7IN7g/viewform'
    );
  };

  return (
    <div className="partners-page">
      <Layout>
        <SectionContainer align="center" extraClass="header">
          <h1 data-aos="fade-down" data-aos-delay="150">
            {t('partners:hero.title')}
          </h1>
          <div data-aos="fade-down" data-aos-delay="300">
            <Trans
              i18nKey="partners:hero.content"
              components={{
                paragraph: <p />,
                breakLine: <br />,
              }}
            />
            <Trans
              i18nKey="partners:hero.list"
              components={{
                list: <ol />,
                child: <li />,
              }}
            />
          </div>
        </SectionContainer>
        <SectionContainer align="center" invert={true}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
            <h2>{t('partners:video.title')}</h2>
          </div>
          <iframe
            title="The HOPR Advantage"
            width="800"
            height="500"
            src="https://www.youtube-nocookie.com/embed/vb7mD8dp11Q"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </SectionContainer>
        <SectionContainer align="center" containerSize='sm'>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
            <h2> {t('partners:protocol.title')}</h2>
          </div>
          <div className="content-columns">
            <div className="col col-9" data-aos="fade-down">
              <Trans
                i18nKey="partners:protocol.leftContent"
                components={{
                  paragraph: <p data-aos="fade-down" data-aos-delay="300" />,
                  breakLine: <br />,
                }}
              />
            </div>
            <div className="col col-9" data-aos="fade-down">
              <Trans
                i18nKey="partners:protocol.rightContent"
                components={{
                  paragraph: <p data-aos="fade-down" data-aos-delay="300" />,
                  breakLine: <br />,
                }}
              />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer align="center" invert={true}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
            <h2>{t('partners:partnerSection.title')}</h2>
          </div>
          <Trans
            i18nKey="partners:partnerSection.content"
            components={{
              paragraph: <p data-aos="fade-down" data-aos-delay="300" />,
              breakLine: <br />,
            }}
          />
          <div>
            <Button
              type="link"
              target="_blank"
              content={t('partners:partnerSection.button')}
              to="https://docs.google.com/forms/d/e/1FAIpQLSfpw9alXYGO4WvWS8HTF-5keGk_OFshrIIcGzifhfuWs7IN7g/viewform"
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
        ['common', 'menu', 'partners', 'about'],
        locale
      ),
    },
  };
}
