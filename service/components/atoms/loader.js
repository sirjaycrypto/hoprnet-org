import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../molecules/navbar';

export default function Loader() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Navbar />
      <div className="the-loader">
        <div className="element"></div>
      </div>
    </motion.div>
  );
}
