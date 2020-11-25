import React, { useState, useEffect } from "react";
import Layout from "../../components/organisms/layout";
import HeroInternal from "../../components/organisms/hero-internal";
import { motion } from "framer-motion";

// Our custom easing
let easing = [0.25, 0.1, 0.25, 1];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

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
      staggerChildren: 0.3,
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
              Enabling Data Privacy
            </motion.h1>

            <div>
              <motion.p
                variants={fadeInUp}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                Everything we do, we get tracked–often without even knowing it.
                And this data is then used to influence us and our decisions. We
                believe that everyone should have the chance to make their own
                decisions in their lives, as freely and uninfluenced as
                possible. HOPR has set out to protect your privacy, data, and
                ultimately, your identity.
              </motion.p>

              <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
                The speed of innovation is increasing on a daily basis and so is
                the amount of data harvested about us. We have the dream that
                digitalization can improve our lives without costing us all of
                our privacy. We have the dream that everyone can own their
                personal data again.
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 0.6 }}>
                Your data, your decision.
              </motion.p>
            </div>
          </motion.div>
        </HeroInternal>
        <section className="continue-hero-internal padding-section-aux invert-color ">
          <motion.div variants={stagger} className="container">
            <motion.h2 variants={fadeInUp} transition={{ delay: 0.8 }}>
              How? The HOPR Protocol
            </motion.h2>

            <div>
              <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                The HOPR protocol provides network-level and metadata privacy
                for every kind of data exchange. A mixnet protects the identity
                of both sender and recipe ent by routing data via multiple
                intermediate relay hops that mix traffic.
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                Payments are handled via probabilistic micropayments, our custom
                layer-2 scaling solution on top of the Ethereum blockchain.
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 1.1 }}>
                Relay mix nodes are rewarded for their work in HOPR tokens. Our
                proof-of-relay mechanism protects everyone from dishonest
                behaviour.
              </motion.p>
              <motion.p variants={fadeInUp} transition={{ delay: 1.2 }}>
                HOPR thus provides economic incentives to run a global privacy
                network sustainably - and at scale - without compromising
                privacy.
              </motion.p>
            </div>
          </motion.div>
        </section>
      </Layout>
    </motion.div>
  );
}
