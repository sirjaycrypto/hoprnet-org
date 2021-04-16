import React from 'react';
import { motion } from 'framer-motion';
import { stagger } from '../../util/motionConfig';
import { MemberProfile } from '..';

const data = [
  {
    link: 'https://www.linkedin.com/in/scbuergel/',
    img: '/assets/images/team/sebastian_burgel.png',
    name: 'Dr. Sebastian Bürgel',
    label: 'President',
  },
  {
    link: 'https://www.linkedin.com/in/ronald-kogens/',
    img: '/assets/images/team/rik_krieger.png',
    name: 'Rik Krieger, eMBA',
    label: 'Co-Founder, Commercial',
  },
  {
    link: 'https://www.linkedin.com/in/ronald-kogens/',
    img: '/assets/images/team/robert_kiel.png',
    name: 'Robert Kiel',
    label: 'Co-Founder, Crypto',
  },
];

export default function ProfileAssociation() {
  return (
    <div className="container container-profile padding-section-aux">
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
