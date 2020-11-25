import React, { useState, useEffect } from "react";
import Layout from "../../components/organisms/layout";
import HeroInternal from "../../components/organisms/hero-internal";
import { motion } from "framer-motion";
import insertScript from '../../util/insertScript'
// Our custom easing
let easing = [0.25, 0.1, 0.25, 1];

// Custom variant
const fadeInUp = {
  initial: {
    y: 80,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const fadeInDown = {
  initial: {
    y: -80,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const dataInfo = [
  {
    img: "assets/images/icons/twitter.svg",
    link: "https://twitter.com/hoprnet",
  },
  {
    img: "assets/images/icons/telegram.svg",
    link: "https://t.me/hoprnet",
  },
  {
    img: "assets/images/icons/linkedin.svg",
    link: "https://www.linkedin.com/company/hoprnet",
  },
  {
    img: "assets/images/icons/github.svg",
    link: "https://github.com/hoprnet",
  },
  {
    img: "assets/images/icons/medium.svg",
    link: "https://medium.com/hoprnet",
  },
  {
    img: "assets/images/icons/youtube.svg",
    link: "https://www.youtube.com/channel/UC2DzUtC90LXdW7TfT3igasA",
  },
  {
    img: "assets/images/icons/discord.svg",
    link: "https://discord.gg/dEAWC4G",
  },
];

const youtubeIds = [
  "mcnezYJXuXw",
  "wH48dy6PjVg",
  "YN8BEF1JIQ0",
  "lHQBiZmCLBY",
  "kZiCoR1DYSg",
];

export default function Index() {
  useEffect(() => {
    const script = insertScript(
      "https://medium-widget.pixelpoint.io/widget.js"
    );

    script.onload = () => {
      // eslint-disable-next-line
      MediumWidget.Init({
        renderTo: "#medium-widget",
        params: {
          resource: "https://medium.com/hoprnet",
          postsPerLine: 2,
          limit: undefined,
          picture: "big",
          fields: ["author", "publishAt"],
          ratio: "landscape",
        },
      });
    };
  }, []);

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <HeroInternal>
          <motion.div variants={stagger}>
            <motion.h1 animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              Join The HOPR Community
            </motion.h1>
            <motion.div>
              <motion.h3 variants={fadeInDown} transition={{ delay: 0.8 }}>
                You can reach us on any of these channels:
              </motion.h3>
              <div>
                <ul className="social-list-blog">
                  {dataInfo.map((e, index) => {
                    const { img, link } = e;
                    return (
                      <motion.li
                        key={index}
                        variants={fadeInDown}
                        transition={{ delay: 0.8 }}
                      >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={img} alt="The HOPR-Token NOW" />
                        </a>
                      </motion.li>
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
              Video
            </motion.h2>
            <motion.div variants={stagger} div className="container-block">
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
                .. check out more videos in our
                <motion.a
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  href="https://www.youtube.com/channel/UC2DzUtC90LXdW7TfT3igasA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-color-high underline"
                >
                  youtube channel
                </motion.a>
                .
              </div>
            </motion.div>
          </motion.div>
        </section>
        {/*  */}
        <section className="section-blog  padding-section-aux">
          <div className="container-sm">
            <h2 className=" padding-section-aux">Blog</h2>
            <div>
              <div id="medium-widget" />
            </div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
}
