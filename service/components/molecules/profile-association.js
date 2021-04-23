import React from 'react';
import { motion } from 'framer-motion';
import { stagger } from '../../util/motionConfig';
import { MemberProfile } from '..';

export default function ProfileAssociation({ data = [], justify = '' }) {
  return (
    <div className={`container container-profile ${justify}`}>
      <motion.div variants={stagger}>
        {data.map((e, index) => (
          <MemberProfile
            {...e}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
}
