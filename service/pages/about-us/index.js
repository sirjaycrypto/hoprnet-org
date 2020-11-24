import React, { useState, useEffect } from "react";
import Layout from "../../components/organisms/layout";
import HeroInternal from "../../components/organisms/hero-internal";

import { motion } from "framer-motion";
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

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
          <div className="container">
            <div>
              <h2>Governance</h2>
            </div>
            <div className="container-block">
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
      </Layout>
    </motion.div>
  );
}
