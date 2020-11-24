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
              Join The HOPR Community{" "}
            </motion.h1>
          </motion.div>
        </HeroInternal>
        <section className="continue-hero-internal padding-section-aux invert-color ">
          <motion.div variants={stagger} className="container">
            <motion.h2 variants={fadeInUp} transition={{ delay: 0.8 }}>
              Governance
            </motion.h2>
            <div className="container-block">
              <div className="block-left">
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  At HOPR we're building the foundations for a more private and
                  resilient web. But to succeed, we also need to challenge the
                  economic power structures that shackle today's web to
                  unhealthy and unsustainable business models.
                </motion.p>
                <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                  We need natively digital organizations to drive the next wave
                  of inclusive innovation. Open technology platforms rely on and
                  enable communities instead of emperors and shareholders.
                </motion.p>
              </div>
              <div className="block-right">
                <motion.p variants={fadeInUp} transition={{ delay: 1.1 }}>
                  The recent movement of Decentralized Autonomous Organizations
                  (DAOs), provides participatory governance and economies for
                  the blockchain era. However, DAOs cannot reach their full
                  potential until they can co-exist with existing legal
                  frameworks.
                </motion.p>
                <motion.p variants={fadeInUp} transition={{ delay: 1.2 }}>
                  HOPR is pioneering decentralized, community-enabling
                  governance (DecenGov) as a techno-legal framework that
                  combines the dynamics of communities with the efficiencies of
                  crypto networks and the advantages of established legal bodies
                  to govern collective efforts.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </section>
      </Layout>
    </motion.div>
  );
}
