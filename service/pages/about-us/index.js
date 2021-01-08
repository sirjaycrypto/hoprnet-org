import React from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

import Layout from "../../components/organisms/layout";
import HeroInternal from "../../components/organisms/hero-internal";
import SubStrack from "../../components/molecules/sub-strack";
import Jobs from "../../components/molecules/jobs";
import ProfileAssociation from "../../components/molecules/profile-association";
import ContactPlus from "../../components/molecules/contact-plus";
import { stagger, fadeInUp } from "../../util/motionConfig";
import { loadNamespaces } from "../_app";

const dataInfo = [
  "assets/partners/01_avado.svg",
    "assets/partners/02_froriep.svg",
    "assets/partners/03_elrond.svg",
    "assets/partners/04_sedimentum.svg",
    "assets/partners/05_swiss_medtech.svg",
    "assets/partners/06_dai_logo.svg",
    "assets/partners/07_health_tech_cluster.svg",
    "assets/partners/08_swiss_healthcare_startups.svg",
];

const dataVALUES = [
  {
    img: "assets/icons/with-yellow-ball/protection-shield.png",
    title: "about:values.itemTitleA",
    text: "about:values.itemAboutA",
  },
  {
    img: "assets/icons/with-yellow-ball/light-bulb-shine.png",
    title: "about:values.itemTitleB",
    text: "about:values.itemAboutB",
  },
  {
    img: "assets/icons/with-yellow-ball/multiple-users-1.png",
    title: "about:values.itemTitleC",
    text: "about:values.itemAboutC",
  },
];

export default function Index() {
  const { t } = useTranslation();

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <HeroInternal>
          <motion.div variants={stagger}>
            <h1 className="reveal-from-top "  data-reveal-delay="150">
              {t("about:hero.title")}
            </h1>
            <div>
              <motion.p variants={fadeInUp} transition={{ delay: 0.2 }}>
                {t("about:hero.paragraphA")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
                {t("about:hero.paragraphB")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.6 }}>
                {t("about:hero.paragraphC")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.8 }}>
                {t("about:hero.paragraphD")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                {t("about:hero.paragraphE")}
                <a
                  className="link-out"
                  href="https://hopr.swiss/who-is-HOPR#team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common:hereLabel")}
                </a>
              </motion.p>
            </div>
          </motion.div>
        </HeroInternal>
        <section className="continue-hero-internal padding-section-aux invert-color ">
          <div className="">
            <div>
              <h2> {t("about:governance.title")}</h2>
            </div>
            <div className="container-sm two-block">
              <div className="block-left">
                <p>{t("about:governance.paragraphLeftA")}</p>
                <p>{t("about:governance.paragraphLeftB")}</p>
              </div>
              <div className="block-right">
                <p>{t("about:governance.paragraphRightA")}</p>
                <p>{t("about:governance.paragraphRightB")}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-partners padding-section-aux">
          <div className="container">
            <h2>{t("about:partners.title")}</h2>
            <div className="container-sm">
              <ul>
                {dataInfo.map((item, index) => {
                  return (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      transition={{ delay: 0.8 }}
                    >
                      <img src={item} alt="The HOPR-Token NOW" />
                    </motion.li>
                  );
                })}
              </ul>
              <div className="btn-align">
                <div className="type-btn">
                  <span>{t("about:partners.btnLabel")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="continue-yellow padding-section-aux invert-color ">
          <div className="container">
            <div>
              <h2>{t("common:HOPRToken")}</h2>
              <p>{t("common:subscribeHere")}</p>
            </div>
            <div className="container-help-newsletter">
              <div>
                <SubStrack />
              </div>
            </div>
          </div>
        </section>
        <section className="section-HOPR-values padding-section-aux">
          <div className="container">
            <div>
              <h2>{t("about:values.title")}</h2>
            </div>
            <div className="element-value">
              {dataVALUES.map((e, index) => {
                const { img, title, text } = e;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ delay: 0.8 }}
                    className="element-item"
                  >
                    <img src={img} alt={t(title)} />
                    <div>
                      <h4>{t(title)}</h4>
                      <p>{t(text)}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section-board-association continue-yellow padding-section-aux invert-color">
          <div>
            <h2>{t("about:association.title")}</h2>
          </div>
          <div>
            <ProfileAssociation />
            <div className="container">
              <p>
                {t("about:association.paragraphA")}
                <a href="https://hopr.swiss/who-is-HOPR#team">
                  {t("common:HOPRServices")}
                </a>
              </p>
              <div className="section-receivers">
                <h3>{t("about:association.subtitle")}</h3>
                <ul>
                  <li>{t("about:association.itemA")}</li>
                  <li>{t("about:association.itemB")}</li>
                  <li>{t("about:association.itemC")}</li>
                  <li>{t("about:association.itemD")}</li>
                </ul>
              </div>
              <div>
                <p>{t("about:association.paragraphB")}</p>
                <div className="btn-align">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeiZ76QfvcbpbBJk-DJDE5IfYmzkuUfUOM-j4btBviTbBNn2w/viewform?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-out"
                  >
                    <div className="type-btn">
                      <span>{t("common:APPLY")}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-jobs padding-section-aux">
          <div className="container">
            <div>
              <h2>{t("common:jobs")}</h2>
              <p>{t("common:jobsLabel")}</p>
            </div>
            <Jobs />
          </div>
        </section>
        <section className="section-board-contact continue-yellow padding-section-aux invert-color">
          <div>
            <h2>{t("common:contactUs")}</h2>
          </div>
          <ContactPlus />
        </section>
      </Layout>
    </motion.div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(
        [ "common", "menu", "about" ],
        locale
      ),
    },
  };
}
