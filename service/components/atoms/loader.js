import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  stagger,
  staggerHaft,
  fadeInUp,
  fadeInDown,
} from '../../util/motionConfig';
import Navbar from '../molecules/navbar';

export default function Loader() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Navbar />
      <div className="the-loader">
        <div className="element">
          <span></span>
        </div>
      </div>
    </motion.div>
  );
}
