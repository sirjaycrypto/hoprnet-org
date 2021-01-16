import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../../components/organisms/layout';
import HeroInternal from '../../components/organisms/hero-internal';
import {
  stagger,
  staggerHaft,
  fadeInUp,
  fadeInDown,
} from '../../util/motionConfig';
import insertScript from '../../util/insertScript';
import { loadNamespaces } from '../_app';

const dataInfo = [
  {
    img: 'assets/images/icons/twitter.svg',
    link: 'https://twitter.com/hoprnet',
  },
  {
    img: 'assets/images/icons/telegram.svg',
    link: 'https://t.me/hoprnet',
  },
  {
    img: 'assets/images/icons/linkedin.svg',
    link: 'https://www.linkedin.com/company/hoprnet',
  },
  {
    img: 'assets/images/icons/github.svg',
    link: 'https://github.com/hoprnet',
  },
  {
    img: 'assets/images/icons/medium.svg',
    link: 'https://medium.com/hoprnet',
  },
  {
    img: 'assets/images/icons/youtube.svg',
    link: 'https://www.youtube.com/channel/UC2DzUtC90LXdW7TfT3igasA',
  },
  {
    img: 'assets/images/icons/discord.svg',
    link: 'https://discord.gg/dEAWC4G',
  },
];

const youtubeIds = [
  'mcnezYJXuXw',
  'wH48dy6PjVg',
  'YN8BEF1JIQ0',
  'lHQBiZmCLBY',
  'kZiCoR1DYSg',
];

export default function Index() {
  const { t } = useTranslation();
  useEffect(() => {
    const script = insertScript(
      'https://medium-widget.pixelpoint.io/widget.js'
    );

    script.onload = () => {
      MediumWidget.Init({
        renderTo: '#medium-widget',
        params: {
          resource: 'https://medium.com/hoprnet',
          postsPerLine: 2,
          limit: undefined,
          picture: 'big',
          fields: ['author', 'publishAt'],
          ratio: 'landscape',
        },
      });
    };
  }, []);

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <HeroInternal noNeedFull={true}>
          <motion.div variants={staggerHaft}>
            <motion.h1 variants={fadeInDown} transition={{ delay: 0.2 }}>
              {t('blog:hero.title')}
            </motion.h1>
            <motion.div variants={fadeInDown} transition={{ delay: 0.5 }}>
              <h3>{t('blog:hero.paragraphA')}</h3>
              <div>
                <ul className="social-list-blog">
                  {dataInfo.map((e, index) => {
                    const { img, link } = e;
                    return (
                      <li key={index}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={img} alt="The HOPR-Token NOW" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </HeroInternal>
        <section className="continue-hero-internal padding-section-aux invert-color ">
          <motion.div variants={stagger} className="container">
            <motion.h2 variants={fadeInUp} transition={{ delay: 0.8 }}>
              {t('blog:second.title')}
            </motion.h2>
            <motion.div variants={stagger} className="container-block">
              <div className="block-video">
                {youtubeIds.map((id) => (
                  <motion.iframe
                    variants={fadeInUp}
                    transition={{ delay: 0.8 }}
                    key={id}
                    title={id}
                    width="400"
                    height="225"
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ))}
              </div>
              <div className="see-my-youtube">
                .. {t('blog:second.subTitle')}
                <motion.a
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  href="https://www.youtube.com/channel/UC2DzUtC90LXdW7TfT3igasA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-color-high underline"
                >
                  {t('blog:second.youtubeChannel')}
                </motion.a>
                .
              </div>
            </motion.div>
          </motion.div>
        </section>
        <section id="post-blog" className="section-blog  padding-section-aux">
          <div className="container-sm">
            <h2 className=" padding-section-aux">{t('menu:blog')}</h2>
            <div>
              <div id="medium-widget" />
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
      _ns: await loadNamespaces(['common', 'menu', 'blog'], locale),
    },
  };
}
