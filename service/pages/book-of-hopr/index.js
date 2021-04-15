import React from 'react';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { fadeInDown } from '../../util/motionConfig';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';

export default function Index() {
  const { t } = useTranslation();

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <motion.div className="container-book">
          <div className="over-img">
            <motion.div
              className="type-btn"
              variants={fadeInDown}
              transition={{ delay: 0.2 }}
            >
              <a
                href="assets/documents/Book_of_HOPR_v1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-reveal-delay="300"
              >
                <span>{t('common:btn-download')}</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
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
