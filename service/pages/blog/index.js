import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BlogLayout } from '../../components/molecules/blogLayout';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';

export default function Index() {
  const [active, setActive] = useState(true);
  const [limit, setLimit] = useState(7);
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <section className="section-blog">
          <div className="tabs">
            <div className="container-sm">
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
          </div>
        </section>
        {active ? (
          <BlogLayout
            url={`https://medium-widget-api.pixelpoint.io/api/v1/articles?fields[0]=author&fields[1]=description&fields[2]=publishAt&fields[3]=avatar&resource=https://medium.com/hoprnet&limit=${limit}&picture=big`}
            setLimit={setLimit}
            limit={limit}
          />
        ) : (
          <BlogLayout
            url="https://medium-widget-api.pixelpoint.io/api/v1/articles?fields[0]=author&fields[1]=description&fields[2]=publishAt&fields[3]=avatar&resource=https://medium.com/hoprhunt&limit&picture=big"
            setLimit={setLimit}
            limit={limit}
          />
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
