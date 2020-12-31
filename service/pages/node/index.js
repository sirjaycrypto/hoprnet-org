import React from "react";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";

import Layout from "../../components/organisms/layout";
import HeroInternal from "../../components/organisms/hero-internal";
import { stagger, fadeInUp } from "../../util/motionConfig";
import { loadNamespaces } from "../_app";

export default function Index() {
  const { t } = useTranslation();

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <HeroInternal>
          <motion.div variants={stagger}>
            <motion.h1 animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              {t("node:hero.title")}
            </motion.h1>
            <div>
              <motion.p
                variants={fadeInUp}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t("node:hero.paragraphA")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
                {t("node:hero.paragraphB")}
              </motion.p>
            </div>
          </motion.div>
        </HeroInternal>
        <section>
          <div
            className="banner-node"
            style={{
              backgroundImage: "url(assets/images/banner-ardware.jpg)",
            }}
          ></div>
        </section>
        <section className="continue-hero-internal padding-section-aux invert-color node-section-about">
          <motion.div variants={stagger}>
            <div className="container-sm two-block">
              <div className="block-left ">
                <div className="help-icon-node">
                  <img
                    src="assets/images/icons/github.svg"
                    alt=""
                  />
                </div>
                <motion.h3 animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                  {t("node:second.leftTitle")}
                </motion.h3>
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  {t("node:second.leftParagraphA")}
                  <a
                    href="https://docs.hoprnet.org/home/getting-started/hopr-chat"
                    className="text-color-high underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("node:second.leftLink")}
                  </a>
                  {t("node:second.leftParagraphB")}
                </motion.p>
                <div className="btn-align">
                  <a
                    href="https://docs.hoprnet.org/home/getting-started/hopr-chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-out"
                  >
                    <div className="type-btn">
                      <span>{t("common:startNow")}</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="block-right">
                <div className="help-icon-node">
                  <img
                    src="assets/images/icons/original/light-bulb-shine.png"
                    alt=""
                  />
                </div>
                <motion.h3 animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                  {t("node:second.rightTitle")}
                </motion.h3>
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  {t("node:second.rightParagraphA")}
                  <a
                    href="https://docs.hoprnet.org/home/getting-started/hopr-chat"
                    className="text-color-high underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("node:second.rightLink")}
                  </a>
                  {t("node:second.rightParagraphB")}
                </motion.p>
                <div className="btn-align">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeiZ76QfvcbpbBJk-DJDE5IfYmzkuUfUOM-j4btBviTbBNn2w/viewform?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-out"
                  >
                    <div className="type-btn">
                      <span>{t("common:orderNow")}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="section-source padding-section-aux">
          <div>
            <h2>{t("node:specifications.title")}</h2>
          </div>
          <div className="container-sm">
            <p>
              {t("node:specifications.paragraphA")}
              <a
                href="https://ava.do/avado-i2"
                className="text-color-high underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("node:specifications.link")}
              </a>
              {t("node:specifications.paragraphB")}
            </p>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(
        ["common", "menu", "node"],
        locale
      ),
    },
  };
}
