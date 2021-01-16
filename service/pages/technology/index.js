import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

import Layout from '../../components/organisms/layout';
import HeroInternal from '../../components/organisms/hero-internal';
import { stagger, fadeInUp, fadeInDown } from '../../util/motionConfig';
import { loadNamespaces } from '../_app';

export default function Index() {
  const { t } = useTranslation();

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <HeroInternal>
          <motion.div variants={stagger}>
            <motion.h1 variants={fadeInDown} transition={{ delay: 0.2 }}>
              {t('tech:hero.title')}
            </motion.h1>
            <div>
              <motion.p
                variants={fadeInDown}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('tech:hero.paragraphA')}
                <br />
                <br />
                {t('tech:hero.paragraphB')}
                <br />
                <br />
                {t('tech:hero.paragraphC')}
              </motion.p>
            </div>
          </motion.div>
        </HeroInternal>
        <section className="continue-hero-internal padding-section-aux invert-color ">
          <motion.div variants={stagger}>
            <motion.h2 variants={fadeInUp} transition={{ delay: 0.8 }}>
              {t('tech:second.title')}
            </motion.h2>

            <div className="container-sm two-block">
              <div className="block-left">
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  {t('tech:second.paragraphA')}
                </motion.p>
                <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                  {t('tech:second.paragraphB')}
                </motion.p>
              </div>
              <div className="block-right">
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  {t('tech:second.paragraphC')}
                </motion.p>
                <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                  {t('tech:second.paragraphD')}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="section-source padding-section-aux">
          <div>
            <h2> {t('tech:open.title')} </h2>
          </div>
          <div className="container-sm">
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
                  {t('common:contributed')}
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
          <motion.div variants={stagger}>
            <motion.h2 variants={fadeInUp} transition={{ delay: 0.8 }}>
              {t('tech:doc.title')}
            </motion.h2>
            <div className="container-sm">
              <p>{t('tech:doc.paragraphA')}</p>
              <p>{t('tech:doc.paragraphB')}</p>
              <div className="btn-align">
                <a
                  href="https://docs.hoprnet.org/home/"
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
          </motion.div>
        </section>
        <section className="section-bounties padding-section-aux">
          <div className="container-sm">
            <h2> {t('tech:work.title')}</h2>
            <div>
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
    </motion.div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu', 'tech'], locale),
    },
  };
}
