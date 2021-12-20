import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BlogLayout } from '../../components/molecules/blogLayout';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';

export default function Index() {
  const [active, setActive] = useState(true);
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <section className="section-blog">
          <div className="tabs">
            <button
              className={active ? 'active' : ''}
              onClick={() => setActive(!active)}
            >
              <p>HOPR BLOG</p>
            </button>
            <button
              className={!active ? 'active' : ''}
              onClick={() => setActive(!active)}
            >
              <p>HOPR HUNT</p>
            </button>
          </div>
        </section>
        {active ? (
          <BlogLayout url="https://medium-widget-api.pixelpoint.io/api/v1/articles?fields[0]=author&fields[1]=description&fields[2]=publishAt&fields[3]=avatar&resource=https://medium.com/hoprnet&limit&picture=big" />
        ) : (
          <BlogLayout url="https://medium-widget-api.pixelpoint.io/api/v1/articles?fields[0]=author&fields[1]=description&fields[2]=publishAt&fields[3]=avatar&resource=https://medium.com/hoprhunt&limit&picture=big" />
        )}
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
