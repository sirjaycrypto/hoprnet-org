import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

import Layout from '../../components/organisms/layout';
import HeroInternal from '../../components/organisms/hero-internal';
import SubStrack from '../../components/molecules/sub-strack';
import Jobs from '../../components/molecules/jobs';
import ProfileAssociation from '../../components/molecules/profile-association';
import PeopleBuild from '../../components/molecules/PeopleBuild';
import ContactPlus from '../../components/molecules/contact-plus';
import HomeInvestors from '../../components/sections/home-investors';

import { loadNamespaces } from '../_app';

const dataInfo = [
  'assets/partners/01_avado.svg',
  'assets/partners/02_froriep.svg',
  'assets/partners/03_elrond.svg',
  'assets/partners/04_sedimentum.svg',
  'assets/partners/05_swiss_medtech.svg',
  'assets/partners/06_dai_logo.svg',
  'assets/partners/07_health_tech_cluster.svg',
  'assets/partners/08_swiss_healthcare_startups.svg',
];

const dataVALUES = [
  {
    img: 'assets/icons/with-yellow-ball/protection-shield.png',
    title: 'about:values.itemTitleA',
    text: 'about:values.itemAboutA',
    delayTime: '100',
  },
  {
    img: 'assets/icons/with-yellow-ball/light-bulb-shine.png',
    title: 'about:values.itemTitleB',
    text: 'about:values.itemAboutB',
    delayTime: '150',
  },
  {
    img: 'assets/icons/with-yellow-ball/multiple-users-1.png',
    title: 'about:values.itemTitleC',
    text: 'about:values.itemAboutC',
    delayTime: '200',
  },
];

const SectionContainer = ({ children }) => {
  return (
    <section className="continue-hero-internal padding-section-aux invert-color ">
      <div className="container">{children}</div>
    </section>
  );
};
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
        <HeroInternal>
          <h1 data-aos="fade-down" data-aos-delay="150">
            {t('partners:hero.title')}
          </h1>
          <div>
            <Trans
              i18nKey="partners:hero.content"
              components={{
                paragraph: <p data-aos="fade-down" data-aos-delay="300" />,
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
        </HeroInternal>
        <SectionContainer>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
            <h2>{t('partners:video.title')}</h2>
          </div>
          <div className="container-sm two-block">
            <iframe
              title="The HOPR Advantage"
              width="800"
              height="500"
              src="https://www.youtube-nocookie.com/embed/vb7mD8dp11Q"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </SectionContainer>
        <section className="section-partners padding-section-aux">
          <div className="container">
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
              <h2> {t('partners:protocol.title')}</h2>
            </div>
            <div className="container-sm two-block">
              <div className="block-left" data-aos="fade-down">
                <Trans
                  i18nKey="partners:protocol.leftContent"
                  components={{
                    paragraph: <p data-aos="fade-down" data-aos-delay="300" />,
                    breakLine: <br />,
                  }}
                />
              </div>
              <div className="block-right" data-aos="fade-down">
                <Trans
                  i18nKey="partners:protocol.rightContent"
                  components={{
                    paragraph: <p data-aos="fade-down" data-aos-delay="300" />,
                    breakLine: <br />,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <SectionContainer>
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
          <div className="btn-align" onClick={onClickApply}>
            <div className="type-btn">
              <span>{t('partners:partnerSection.button')}</span>
            </div>
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
