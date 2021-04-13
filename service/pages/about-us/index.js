import React, { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

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
  'assets/partners/BLOCKARK-LOGO2.png',
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

export default function Index() {
  const { t } = useTranslation();

  useEffect(() => {
    const location = document.location.href;

    if (location.indexOf('#') > -1) {
      const id = location.substr(location.indexOf('#') + 1, location.length),
        element = document.getElementById(id);

      if (element) {
        setTimeout(function () {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 1400);
      }
    }
  }, []);

  return (
    <div>
      <Layout>
        <HeroInternal>
          <div className="about-us">
            <h1
              data-aos="fade-down"
              data-aos-delay="150"
              className="hero-title"
            >
              {t('about:hero.title')}
            </h1>
          </div>
        </HeroInternal>
        <section className="continue-hero-internal padding-section-aux invert-color">
          <div>
            <p data-aos="fade-down" data-aos-delay="300">
              {t('about:hero.paragraphA')}
              <br />
              <br />
              {t('about:hero.paragraphB')}
              <br />
              <br />
              {t('about:hero.paragraphC')}
              <br />
              <br />
              {t('about:hero.paragraphD')}
              <br />
              <br />
              {t('about:hero.paragraphE')}
              <a
                className="link-out"
                href="https://hopr.swiss/who-is-HOPR#team"
                target="_blank"
                rel="noopener"
              >
                {t('common:hereLabel')}
              </a>
            </p>
          </div>
        </section>
        <section className="section-HOPR-values padding-section-aux">
          <div className="container">
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
              <h2>{t('about:values.title')}</h2>
            </div>
            <div className="element-value">
              {dataVALUES.map((e, index) => {
                const { img, title, text, delayTime } = e;
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={delayTime}
                    className="element-item"
                  >
                    <img src={img} alt={t(title)} />
                    <div>
                      <h4>{t(title)}</h4>
                      <p>{t(text)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="continue-hero-internal padding-section-aux invert-color">
          <div className="">
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
              <h2> {t('about:governance.title')}</h2>
            </div>
            <div className="container-sm two-block">
              <div className="block-left" data-aos="fade-down">
                <p>{t('about:governance.paragraphLeftA')}</p>
                <p>{t('about:governance.paragraphLeftB')}</p>
              </div>
              <div className="block-right" data-aos="fade-down">
                <p>{t('about:governance.paragraphRightA')}</p>
                <p>{t('about:governance.paragraphRightB')}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-partners padding-section-aux">
          <div className="container">
            <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
              {t('about:partners.title')}
            </h2>
            <div className="container-sm">
              <ul>
                {dataInfo.map((item, index) => {
                  return (
                    <li
                      key={index}
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                    >
                      <img src={item} alt="The HOPR-Token NOW" />
                    </li>
                  );
                })}
              </ul>
              <div className="btn-align">
                <div className="type-btn">
                  <span>{t('about:partners.btnLabel')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomeInvestors />
        <section className="continue-yellow padding-section-aux invert-color ">
          <div className="container">
            <div>
              <h2>{t('common:HOPRToken')}</h2>
              <p>{t('common:subscribeHere')}</p>
            </div>
            <div className="container-help-newsletter">
              <div>
                <SubStrack />
              </div>
            </div>
          </div>
        </section>
        <section
          id="team-section"
          className="section-board-association continue-yellow padding-section-aux invert-color"
        >
          <div>
            <h2>{t('about:association.title')}</h2>
          </div>
          <div>
            <ProfileAssociation />
            <div className="container">
              <p>
                {t('about:association.paragraphA')}
                <a href="https://hopr.swiss/who-is-HOPR#team">
                  {t('common:HOPRServices')}
                </a>
              </p>
              <div className="section-receivers">
                <h3>{t('about:association.subtitle')}</h3>
                <ul>
                  <li>{t('about:association.itemA')}</li>
                  <li>{t('about:association.itemB')}</li>
                  <li>{t('about:association.itemC')}</li>
                  <li>{t('about:association.itemD')}</li>
                </ul>
              </div>

              <PeopleBuild />

              <div>
                <p>{t('about:association.paragraphB')}</p>
                <div className="btn-align">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeiZ76QfvcbpbBJk-DJDE5IfYmzkuUfUOM-j4btBviTbBNn2w/viewform?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-out"
                  >
                    <div className="type-btn">
                      <span>{t('common:APPLY')}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-jobs padding-section-aux">
          <div className="container">
            <div>
              <h2>{t('common:jobs')}</h2>
              <p>{t('common:jobsLabel')}</p>
            </div>
            <Jobs />
          </div>
        </section>
        <section className="section-board-contact continue-yellow padding-section-aux invert-color">
          <div>
            <h2>{t('common:contactUs')}</h2>
          </div>
          <ContactPlus />
        </section>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu', 'about'], locale),
    },
  };
}
