import React from "react";
import Layout from "../../components/organisms/layout";
import HeroInternal from "../../components/organisms/hero-internal";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../util/motionConfig";
import { loadNamespaces } from "../_app";
import useTranslation from "next-translate/useTranslation";
export default function Index() {
  const { t } = useTranslation();
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <HeroInternal>
          <motion.div variants={stagger}>
            <motion.h1 animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              {t("techHero:title")}
            </motion.h1>
            <div>
              <motion.p
                variants={fadeInUp}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t("techHero:paragraphA")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
                {t("techHero:paragraphB")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.6 }}>
                {t("techHero:paragraphC")}
              </motion.p>
            </div>
          </motion.div>
        </HeroInternal>
        <section className="continue-hero-internal padding-section-aux invert-color ">
          <motion.div variants={stagger}>
            <motion.h2 variants={fadeInUp} transition={{ delay: 0.8 }}>
              {t("techHero:title")}
            </motion.h2>

            <div className="container-sm two-block">
              <div className="block-left">
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  {t("techHero:paragraphA")}
                </motion.p>
                <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                  {t("techHero:paragraphB")}
                </motion.p>
              </div>
              <div className="block-right">
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  {t("techHero:paragraphC")}
                </motion.p>
                <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                  {t("techHero:paragraphD")}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </section>
        {/*  */}
        <section className="section-source padding-section-aux">
          <div>
            <h2> {t("techOpen:title")} </h2>
          </div>
          <div className="container-sm">
            <p>{t("techOpen:paragraphA")}</p>
            <p>{t("techOpen:paragraphB")}</p>
            <p>{t("techOpen:paragraphC")}</p>
            <ul className="external-links">
              <li>
                <a
                  className="underline"
                  href="https://libp2p.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Libp2p
                </a>{" "}
                {t("techOpen:paragraphD")}{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-id/pull/115"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common:several")}
                </a>{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-libp2p/pull/608"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common:issues")}
                </a>{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-id/pull/116"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common:and")}
                </a>{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-libp2p/pull/330"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common:contributed")}
                </a>{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-info/pull/91"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common:various")}
                </a>{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-info/pull/89"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common:contributed")}
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
                  {t("common:multiformats")}
                </a>{" "}
                {t("techOpen:paragraphF")}{" "}
                <a
                  className="underline"
                  href="https://github.com/multiformats/js-multiaddr/pull/112"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common:fixes&testing")}
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
                  {t("common:pullPrefixed")}
                </a>{" "}
                {t("techOpen:paragraphF")}{" "}
                <a
                  className="underline"
                  href="https://github.com/dignifiedquire/pull-length-prefixed/pull/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common:resolIssue")}
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
                  {t("common:definitelyTyped")}
                </a>{" "}
                {t("techOpen:paragraphG")}{" "}
                <a
                  className="underline"
                  href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/42559"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("techOpen:paragraphJ")}
                </a>
                .
              </li>
            </ul>
          </div>
        </section>
        {/*  */}
        <section className="section-documentation padding-section-aux invert-color ">
          <motion.div variants={stagger}>
            <motion.h2 variants={fadeInUp} transition={{ delay: 0.8 }}>
              {t("techDoc:title")}
            </motion.h2>
            <div className="container-sm">
              <p>{t("techDoc:paragraphA")}</p>
              <p>{t("techDoc:paragraphB")}</p>
              <div className="btn-align">
                <a
                  href="https://docs.hoprnet.org/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-out"
                >
                  <div className="type-btn">
                    <span> {t("common:startNow")}</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </section>
        {/*  */}
        <section className="section-bounties padding-section-aux">
          <div className="container-sm">
            <h2> {t("techWork:title")}</h2>
            <div>
              <p>
                {t("techWork:paragraphA")}{" "}
                <a
                  className="underline"
                  href="https://gitcoin.co/hoprnet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common:gitcoin")}
                </a>{" "}
                - {t("techWork:paragraphB")}
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
      _ns: await loadNamespaces(
        [
          "common",
          "menu",
          "techHero",
          "techSecundSec",
          "techOpen",
          "techDoc",
          "techWork",
        ],
        locale
      ),
    },
  };
}
