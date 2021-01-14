import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../../util/motionConfig';
import HeroInternal from '../../components/organisms/hero-internal';

export default function Hero() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <HeroInternal>
        <motion.div variants={stagger}>
          <h1 className="reveal-from-top " data-reveal-delay="150">
            Changing Data Privacy For Good
          </h1>
          <div>
            <motion.p variants={fadeInUp} transition={{ delay: 0.2 }}>
              The HOPR protocol ensures everyone has control of their privacy,
              data, and identity.
            </motion.p>
            <div className="btn-banner ">
              <span>Join Incentivized Testnet</span>
            </div>
          </div>
        </motion.div>
      </HeroInternal>
    </motion.div>
  );
}
