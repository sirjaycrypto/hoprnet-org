import React, { useState, useEffect } from "react";
import Layout from "../../components/organisms/layout";
import HeroInternal from "../../components/organisms/hero-internal";
import SubStrack from "../../components/molecules/sub-strack";
import Jobs from "../../components/molecules/jobs";
import ProfileAssociation from "../../components/molecules/profile-association";
import ContactPlus from "../../components/molecules/contact-plus";
import { motion } from "framer-motion";
import {
  stagger,
  staggerHaft,
  fadeInUp,
  fadeInDown,
} from "../../util/motionConfig";

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
    title: "GUARDIAN OF CHOICES",
    text:
      "Everyone should have the chance to make decisions in their lives as freely and uninfluenced as possible. This is exactly what we are committed to - neutrally and transparently.",
  },
  {
    img: "assets/icons/with-yellow-ball/light-bulb-shine.png",
    title: "CURIOUS PIONEER",
    text:
      "We want to improve the privacy standards of the digital world and are always looking for new ways to do so. We boldly go new ways. And when we find a suitable way, we do everything we can to make it work for our community and society.",
  },
  {
    img: "assets/icons/with-yellow-ball/multiple-users-1.png",
    title: "VIVID ORGANISM",
    text:
      "HOPR is a living ecosystem made up of many different people who share the same goal. We want everyone to have the space for their own ideas and to be able to develop freely. To achieve this, we create a climate of fairness and trust in which it is fun to work together towards our goal.",
  },
];

export default function Index() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <HeroInternal>
          <motion.div variants={stagger}>
            <motion.h1 animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              Independent, Incorruptible, And Indestructible
            </motion.h1>
            <div>
              <motion.p variants={fadeInUp} transition={{ delay: 0.2 }}>
                We're a team of highly motivated experts with a single shared
                goal: universal data privacy.
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
                With the HOPR protocol, companies and users can decide for
                themselves who can view their data and who can't.
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.6 }}>
                With the HOPR protocol, data security is solved, letting
                everyone focus on helping people through digitalization.
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.8 }}>
                The HOPR community is building the digital privacy landscape of
                tomorrow. We invite everybody to join our movement.
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                Learn more about the team that builds the HOPR network{" "}
                <a
                  className="link-out"
                  href="https://hopr.swiss/who-is-HOPR#team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here.
                </a>
              </motion.p>
            </div>
          </motion.div>
        </HeroInternal>
        <section className="continue-hero-internal padding-section-aux invert-color ">
          <div className="">
            <div>
              <h2>Governance</h2>
            </div>
            <div className="container-sm two-block">
              <div className="block-left">
                <p>
                  At HOPR we're building the foundations for a more private and
                  resilient web. But to succeed, we also need to challenge the
                  economic power structures that shackle today's web to
                  unhealthy and unsustainable business models.
                </p>
                <p>
                  We need natively digital organizations to drive the next wave
                  of inclusive innovation. Open technology platforms rely on and
                  enable communities instead of emperors and shareholders.
                </p>
              </div>
              <div className="block-right">
                <p>
                  The recent movement of Decentralized Autonomous Organizations
                  (DAOs), provides participatory governance and economies for
                  the blockchain era. However, DAOs cannot reach their full
                  potential until they can co-exist with existing legal
                  frameworks.
                </p>
                <p>
                  HOPR is pioneering decentralized, community-enabling
                  governance (DecenGov) as a techno-legal framework that
                  combines the dynamics of communities with the efficiencies of
                  crypto networks and the advantages of established legal bodies
                  to govern collective efforts.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="section-partners padding-section-aux">
          <div className="container">
            <h2>Partners</h2>
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
                  <span>Want to become our partner?</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="continue-yellow padding-section-aux invert-color ">
          <div className="container">
            <div>
              <h2>HOPR Token</h2>
              <p>Want to know more about our token sale? Subscribe here:</p>
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
              <h2>Our HOPR Values</h2>
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
                    <img src={img} alt={title} />
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
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
            <h2>Board Of Association</h2>
          </div>
          <div>
            <ProfileAssociation />
            <div className="container">
              <p>
                The HOPR protocol is a digital commons that is currently being
                built by
                <a href="https://hopr.swiss/who-is-HOPR#team">
                  HOPR Services AG.
                </a>
              </p>
              <div className="section-receivers">
                <h3>Grant Receivers</h3>

                <ul>
                  <li>Avado, CH</li>
                  <li>Empathy PR, US</li>
                  <li>S.N. NONI CORPORATION LTD, CY</li>
                  <li>The Wandering Editor, UK</li>
                </ul>
              </div>
              <div>
                <p>Do you want to become a member of the association?</p>
                <div className="btn-align">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeiZ76QfvcbpbBJk-DJDE5IfYmzkuUfUOM-j4btBviTbBNn2w/viewform?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-out"
                  >
                    <div className="type-btn">
                      <span>APPLY</span>
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
              <h2>Jobs</h2>
              <p>Companies building the HOPR ecosystem</p>
            </div>
            <Jobs />
          </div>
        </section>
        {/*  */}
        <section className="section-board-contact continue-yellow padding-section-aux invert-color">
          <div>
            <h2>Contact Us</h2>
          </div>
          <ContactPlus />
        </section>
      </Layout>
    </motion.div>
  );
}
