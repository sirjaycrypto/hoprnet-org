import React from 'react';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../../components/organisms/layout';
import HeroInternal from '../../components/organisms/hero-internal';
import { staggerHaft, fadeInDown } from '../../util/motionConfig';
import { loadNamespaces } from '../_app';

export default function Index() {
  const { t } = useTranslation();

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <HeroInternal noNeedFull={true}>
          <motion.div variants={staggerHaft}>
            <motion.h1 variants={fadeInDown} transition={{ delay: 0.2 }}>
              {t('support:hero.title')}
            </motion.h1>
            <motion.div variants={fadeInDown} transition={{ delay: 0.5 }}>
              <h3>{t('support:hero.paragraphA')}</h3>
            </motion.div>
          </motion.div>
        </HeroInternal>
      </Layout>
    </motion.div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu', 'blog'], locale),
    },
  };
}
