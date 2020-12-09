import React, { useState, useEffect } from "react";
import Layout from "../../components/organisms/layout";
import HeroInternal from "../../components/organisms/hero-internal";
import SubStrack from "../../components/molecules/sub-strack";
import Jobs from "../../components/molecules/jobs";
import ProfileAssociation from "../../components/molecules/profile-association";
import ContactPlus from "../../components/molecules/contact-plus";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../util/motionConfig";
import { loadNamespaces } from "../_app";
import useTranslation from "next-translate/useTranslation";

import AOS from "aos";
import "aos/dist/aos.css";

const dataInfo = [
  {
    img: "assets/partners/avado.svg",
  },
  {
    img: "assets/partners/froriep.png",
  },
  {
    img: "assets/partners/elrond.png",
  },
  {
    img: "assets/partners/health_tech_cluster.png",
  },
  {
    img: "assets/partners/sedimentum.png",
  },
  {
    img: "assets/partners/download.png",
  },
  {
    img: "assets/partners/swiss_medtech.png",
  },
  {
    img: "assets/partners/swiss_healthcare_startups.png",
  },
];

const dataVALUES = [
  {
    img: "assets/icons/with-yellow-ball/protection-shield.png",
    title: "aboutValu:itemTitleA",
    text: "aboutValu:itemAboutA",
  },
  {
    img: "assets/icons/with-yellow-ball/light-bulb-shine.png",
    title: "aboutValu:itemTitleB",
    text: "aboutValu:itemAboutB",
  },
  {
    img: "assets/icons/with-yellow-ball/multiple-users-1.png",
    title: "aboutValu:itemTitleC",
    text: "aboutValu:itemAboutC",
  },
];

export default function Index() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <HeroInternal>
          <motion.div variants={stagger}>
            <h1 data-aos="fade-up" data-aos-duration="150"  data-aos-easing="linear">
              {t("aboutHero:title")}
            </h1>
            <div>
              <motion.p variants={fadeInUp} transition={{ delay: 0.2 }}>
                {t("aboutHero:paragraphA")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
                {t("aboutHero:paragraphB")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.6 }}>
                {t("aboutHero:paragraphC")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.8 }}>
                {t("aboutHero:paragraphD")}
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                {t("aboutHero:paragraphE")}
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
              <h2> {t("aboutSecundSection:title")}</h2>
            </div>
            <div className="container-sm two-block">
              <div className="block-left">
                <p>{t("aboutSecundSection:paragraphLeftA")}</p>
                <p>{t("aboutSecundSection:paragraphLeftB")}</p>
              </div>
              <div className="block-right">
                <p>{t("aboutSecundSection:paragraphRightA")}</p>
                <p>{t("aboutSecundSection:paragraphRightB")}</p>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="section-partners padding-section-aux">
          <div className="container">
            <h2>{t("aboutPart:title")}</h2>
            <div className="container-sm">
              <ul>
                {dataInfo.map((e, index) => {
                  const { img } = e;
                  return (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      transition={{ delay: 0.8 }}
                    >
                      <img src={img} alt="The HOPR-Token NOW" />
                    </motion.li>
                  );
                })}
              </ul>
              <div className="btn-align">
                <div className="type-btn">
                  <span>{t("aboutPart:btnLabel")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
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
        {/*  */}
        <section className="section-HOPR-values padding-section-aux">
          <div className="container">
            <div>
              <h2>{t("aboutValu:title")}</h2>
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
        {/*  */}
        <section className="section-board-association continue-yellow padding-section-aux invert-color">
          <div>
            <h2>{t("aboutAssoci:title")}</h2>
          </div>
          <div>
            <ProfileAssociation />
            <div className="container">
              <p>
                {t("aboutAssoci:paragraphA")}
                <a href="https://hopr.swiss/who-is-HOPR#team">
                  {t("common:HOPRServices")}
                </a>
              </p>
              <div className="section-receivers">
                <h3>{t("aboutAssoci:subtitle")}</h3>

                <ul>
                  <li>{t("aboutAssoci:itemA")}</li>
                  <li>{t("aboutAssoci:itemB")}</li>
                  <li>{t("aboutAssoci:itemC")}</li>
                  <li>{t("aboutAssoci:itemD")}</li>
                </ul>
              </div>
              <div>
                <p> {t("aboutAssoci:paragraphB")}</p>
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
        {/*  */}
        <section className="section-jobs padding-section-aux">
          <div className="container">
            <div>
              <h2>{t("common:jobs")}</h2>
              <p>{t("common:jobsLabel")}</p>
            </div>
            <Jobs />
          </div>
        </section>
        {/*  */}
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
        [
          "common",
          "menu",
          "aboutHero",
          "aboutSecundSection",
          "aboutPart",
          "aboutAssoci",
          "aboutValu",
        ],
        locale
      ),
    },
  };
}
