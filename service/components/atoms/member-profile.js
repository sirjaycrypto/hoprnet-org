import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../util/motionConfig';

export const MemberProfile = ({ img, label, link, name }) => {
  return (
    <a
      rel="noopener noreferrer"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
    >
      <motion.div
        variants={fadeInUp}
        transition={{ delay: 0.8 }}
        className="item-profile"
      >
        <motion.img variants={fadeInUp} src={img} alt={name} />
        <div>
          <motion.h5 variants={fadeInUp} transition={{ delay: 0.8 }}>
            {name}
          </motion.h5>
          <motion.p variants={fadeInUp} transition={{ delay: 0.8 }}>
            {label}
          </motion.p>
        </div>
      </motion.div>
    </a>
  );
};
