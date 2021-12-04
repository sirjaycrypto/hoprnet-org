import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
          <section className="section-hopr-blog">
            <iframe src="https://medium.com/hoprhunt" />
          </section>
        ) : (
          <section>
            <h1>Hola2</h1>
          </section>
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
