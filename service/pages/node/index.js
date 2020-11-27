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
              Guardians Of Privacy
            </motion.h1>

            <div>
              <motion.p
                variants={fadeInUp}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                To the HOPR Node Runners, we dedicate this page to you. Online
                privacy, personal data control, and Ethereum blockchain
                integrity all owe you a debt of gratitude. Although, you’ll get
                more than just gratitude, as you’ll earn upcoming HOPR token
                incentives (coming Q4!) from our plug-and-earn mixnet node PC.
              </motion.p>

              <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
                HOPR makes no profit from the first-of-its-kind custom node PC.
                Instead, we thank you for helping ensure a decentralized Web3
                future, where everyone has control of their own data.
              </motion.p>
            </div>
          </motion.div>
        </HeroInternal>
        <section>
          <div
            className="banner-node"
            style={{
              backgroundImage: "url(assets/images/banner-ardware.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              widows: "100%",
              height: "550px",
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
                    alt="Run Your Own Metal"
                  />
                </div>
                <motion.h3 animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                  Run Your Own Metal
                </motion.h3>
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  If you want to run a node on your own hardware without the
                  HOPR Node PC, that’s perfectly acceptable and possible as
                  well! Check out our{" "}
                  <a
                    href="https://docs.hoprnet.org/home/getting-started/hopr-chat"
                    className="text-color-high underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitBook instructions
                  </a>{" "}
                  for details on how to install.
                </motion.p>
                <div className="btn-align">
                  <a
                    href="https://docs.hoprnet.org/home/getting-started/hopr-chat"
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
              <div className="block-right">
                <div className="help-icon-node">
                  <img
                    src="assets/images/icons/original/light-bulb-shine.png"
                    alt=" Your HOPR Hardware Node"
                  />
                </div>
                <motion.h3 animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                  Your HOPR Hardware Node
                </motion.h3>
                <motion.p variants={fadeInUp} transition={{ delay: 0.9 }}>
                  If you want to run a node on your own hardware without the
                  HOPR Node PC, that’s perfectly acceptable and possible as
                  well! Check out our{" "}
                  <a
                    href="https://docs.hoprnet.org/home/getting-started/hopr-chat"
                    className="text-color-high underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitBook instructions
                  </a>{" "}
                  for details on how to install.
                </motion.p>
                <div className="btn-align">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeiZ76QfvcbpbBJk-DJDE5IfYmzkuUfUOM-j4btBviTbBNn2w/viewform?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-out"
                  >
                    <div className="type-btn">
                      <span>ORDER NOW</span>
                    </div>
                  </a>
                </div>
                {/*  */}
              </div>
            </div>
          </motion.div>
        </section>
        {/*  */}
        <section className="section-source padding-section-aux">
          <div>
            <h2>Specifications of HOPR Node PC</h2>
          </div>
          <div className="container-sm">
            <p>
              The HOPR Node PC is a pre-configured version of the{" "}
              <a
                href="https://ava.do/avado-i2"
                className="text-color-high underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                AVADO i2
              </a>
              , a plug-and-play blockchain-ready node. It has high
              specifications (8GB RAM, Intel Pentium 4415) with upgraded SSD
              storage (1TB), making it more than powerful enough to install and
              run an Ethereum full node. The HOPR Node PC contains the first
              release of HOPR Alpha, a layer-0 privacy software able to connect
              to the HOPR Network. The HOPR Node PC is ready to use: just
              connect it to your router! You can also use it to run other kinds
              of nodes, making it a viable IPFS, Filecoin, or ETH2 node.
            </p>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
}
