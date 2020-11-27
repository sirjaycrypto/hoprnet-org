import React, { useState, useEffect } from "react";
import Layout from "../../components/organisms/layout";
import HeroInternal from "../../components/organisms/hero-internal";
import { motion } from "framer-motion";
import {
  stagger,
  staggerHaft,
  fadeInUp,
  fadeInDown,
} from "../../util/motionConfig";

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
          <motion.div variants={stagger}>
            <motion.h2 variants={fadeInUp} transition={{ delay: 0.8 }}>
              How? The HOPR Protocol
            </motion.h2>

            <div className="container-sm two-block">
              <div className="block-left">
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  The HOPR protocol provides network-level and metadata privacy
                  for every kind of data exchange. A mixnet protects the
                  identity of both sender and recipe ent by routing data via
                  multiple intermediate relay hops that mix traffic.
                </motion.p>
                <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                  Payments are handled via probabilistic micropayments, our
                  custom layer-2 scaling solution on top of the Ethereum
                  blockchain.
                </motion.p>
              </div>
              <div className="block-right">
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  Relay mix nodes are rewarded for their work in HOPR tokens.
                  Our proof-of-relay mechanism protects everyone from dishonest
                  behaviour.
                </motion.p>
                <motion.p variants={fadeInUp} transition={{ delay: 1 }}>
                  HOPR thus provides economic incentives to run a global privacy
                  network sustainably - and at scale - without compromising
                  privacy.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </section>
        {/*  */}
        <section className="section-source padding-section-aux">
          <div>
            <h2>Open Source Support</h2>
          </div>
          <div className="container-sm">
            <p>
              At HOPR, we embrace and live the ethos of free and open source
              software – especially when making claims about privacy.
            </p>
            <p>
              It's important that you can check and challenge every bit of our
              work.
            </p>
            <p>
              We want to take it further: we support the vision of Web 3 as an
              open and collaborative ecosystem. Therefore, we walk the talk and
              contribute to a range of open source projects beyond our primary
              project, the HOPR protocol:
            </p>
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
                is a fundamental building block for a range of decentralized
                projects such as Ethereum, Filecoin, IPFS, Polkadot and many
                more. We've solved{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-id/pull/115"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  several
                </a>{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-libp2p/pull/608"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  issues
                </a>{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-id/pull/116"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  and
                </a>{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-libp2p/pull/330"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contributed
                </a>{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-info/pull/91"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  various
                </a>{" "}
                <a
                  className="underline"
                  href="https://github.com/libp2p/js-peer-info/pull/89"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  improvements
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
                  Multiformats
                </a>{" "}
                is a general-purpose value description format used by a range of
                decentralized networks to which we contributed some{" "}
                <a
                  className="underline"
                  href="https://github.com/multiformats/js-multiaddr/pull/112"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fixes and testing
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
                  Pull-length-prefixed
                </a>{" "}
                is a data transmission mechanism for decentralized applications
                where we{" "}
                <a
                  className="underline"
                  href="https://github.com/dignifiedquire/pull-length-prefixed/pull/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resolved a critical issue
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
                  DefinitelyTyped
                </a>{" "}
                is a repository for TypeScript definitions used in over 3
                million projects where we{" "}
                <a
                  className="underline"
                  href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/42559"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  identified and resolved an implementation issue
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
              Documentation
            </motion.h2>
            <div className="container-sm">
              <p>
                Find out more on how to join the HOPR network, run your own
                node, and dive deeper into how to BUIDL with HOPR.
              </p>
              <p>Do you want to become a member of the association?</p>
              <div className="btn-align">
                <a
                  href="https://docs.hoprnet.org/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-out"
                >
                  <div className="type-btn">
                    <span>START NOW</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </section>
        {/*  */}
        <section className="section-bounties padding-section-aux">
          <div className="container-sm">
            <h2>Work On Bounties</h2>
            <div>
              <p>
                Why wouldn't you get paid for developing open source software?
                Check out our bounties o{" "}
                <a
                  className="underline"
                  href="https://gitcoin.co/hoprnet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gitcoin
                </a>{" "}
                - some are fairly beginner-friendly, while some require more
                in-depth knowledge of the HOPR protocol. HOPR is built by the
                community for the community.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
}
lls