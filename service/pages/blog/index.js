import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BlogLayout } from '../../components/molecules/blogLayout';
import Layout from '../../components/organisms/layout';
import { Loader } from '../../components';
import { loadNamespaces } from '../_app';

export default function Index() {
  const [type, setType] = useState('blog');
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loader />}
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Layout>
          <section className="section-blog">
            <div className="tabs">
              <div className="container-sm">
                <button
                  className={type === 'blog' ? 'active' : ''}
                  onClick={() => setType('blog')}
                >
                  HOPR BLOG
                </button>
                <button
                  className={type === 'hunt' ? 'active' : ''}
                  onClick={() => setType('hunt')}
                >
                  HOPR HUNT
                </button>
              </div>
            </div>
          </section>
          {type === 'blog' ? (
            <BlogLayout setLoading={setLoading} type={type} />
          ) : (
            <BlogLayout setLoading={setLoading} type={type} />
          )}
        </Layout>
      </motion.div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu', 'blog'], locale),
    },
  };
}
