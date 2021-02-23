import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../molecules/navbar';

export function Loader() {
  return (
    <motion.div
      animate="animate"
      className="main-loader"
      exit={{ opacity: 0 }}
      initial="initial"
    >
      <Navbar />
      <div className="the-loader">
        <div className="element"></div>
      </div>
    </motion.div>
  );
}

export default Loader;
