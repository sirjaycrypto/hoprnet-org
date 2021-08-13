import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../../components/organisms/layout';
import HeroInternal from '../../components/organisms/hero-internal';
import { loadNamespaces } from '../_app';

export default function Index() {
  const { t } = useTranslation();

  return (
    <div>
      <Layout>
        <HeroInternal>
          <div>
            <h1 data-aos="fade-down" data-aos-delay="150">
              {t('tech:hero.title')}
            </h1>
            <div>
              <p data-aos="fade-down" data-aos-delay="300">
                {t('tech:hero.paragraphA')}
                <br />
                <br />
                {t('tech:hero.paragraphB')}
                <br />
                <br />
                {t('tech:hero.paragraphC')}
              </p>
            </div>
          </div>
        </HeroInternal>
        <section
          className="continue-hero-internal padding-section-aux invert-color "
          id="hopr-protocol"
        >
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
            <h2>{t('tech:second.title')}</h2>

            <div className="container-sm two-block">
              <div className="block-left" data-aos="fade-down">
                <p>{t('tech:second.paragraphA')}</p>
                <p>{t('tech:second.paragraphB')}</p>
              </div>
              <div className="block-right" data-aos="fade-down">
                <p>{t('tech:second.paragraphC')}</p>
                <p>{t('tech:second.paragraphD')}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-source padding-section-aux">
          <div data-aos="fade-down">
            <h2> {t('tech:open.title')} </h2>
          </div>
          <div className="container-sm" data-aos="fade-down">
            <p>{t('tech:open.paragraphA')}</p>
            <p>{t('tech:open.paragraphB')}</p>
            <p>{t('tech:open.paragraphC')}</p>
            <ul className="external-links">
              <li>
                <a
                  className="underline"
                  href="https://libp2p.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Libp2p
                </a>
                {t('tech:open.paragraphD')}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-id/pull/115"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:several')}
                </a>{' '}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-libp2p/pull/608"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:issues')}
                </a>{' '}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-id/pull/116"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:and')}
                </a>{' '}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-libp2p/pull/330"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:contributed')}
                </a>{' '}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-info/pull/91"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:various')}
                </a>{' '}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-info/pull/89"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pull-requests
                </a>
                .
              </li>
              <li>
                <a
                  className="underline"
                  href="https://multiformats.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:multiformats')}
                </a>
                {t('tech:open.paragraphF')}
                <a
                  className="underline"
                  href="https://github.com/multiformats/js-multiaddr/pull/112"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:fixes&testing')}
                </a>
                .
              </li>
              <li>
                <a
                  className="underline"
                  href="https://github.com/dignifiedquire/pull-length-prefixed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:pullPrefixed')}
                </a>
                {t('tech:open.paragraphF')}
                <a
                  className="underline"
                  href="https://github.com/dignifiedquire/pull-length-prefixed/pull/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:resolIssue')}
                </a>
                .
              </li>
              <li>
                <a
                  className="underline"
                  href="http://definitelytyped.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:definitelyTyped')}
                </a>
                {t('tech:open.paragraphG')}
                <a
                  className="underline"
                  href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/42559"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('tech:open.paragraphJ')}
                </a>
                .
              </li>
            </ul>
          </div>
        </section>
        <section className="section-documentation padding-section-aux invert-color ">
          <div>
            <h2 data-aos="fade-down">{t('tech:doc.title')}</h2>
            <div className="container-sm" data-aos="fade-down">
              <p>{t('tech:doc.paragraphA')}</p>
              <div className="btn-align">
                <a
                  href="https://docs.hoprnet.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-out"
                >
                  <div className="type-btn">
                    <span> {t('common:startNow')}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section-bounties padding-section-aux">
          <div className="container-sm" data-aos="fade-down">
            <h2> {t('tech:work.title')}</h2>
            <div data-aos="fade-down">
              <p>
                {t('tech:work.paragraphA')}{' '}
                <a
                  className="underline"
                  href="https://gitcoin.co/hoprnet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common:gitcoin')}
                </a>{' '}
                - {t('tech:work.paragraphB')}
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu', 'tech'], locale),
    },
  };
}
