
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../../util/motionConfig';

export default function HoperFor() {
  const { t } = useTranslation();
  const data = [
    {
      link: 'https://github.com/hoprnet',
      img: 'assets/icons/with-yellow-ball/shield.png',
      label: 'Privacy Blog',
    },
    {
      link: 'https://github.com/hoprnet',
      img: 'assets/icons/with-yellow-ball/lock-4.png',
      label: 'common:cryptographers',
    },
    {
      link: 'https://docs.hoprnet.org/home/',
      img: 'assets/icons/with-yellow-ball/programming-team-chat-3.png',
      label: 'common:techies',
    },
    {
      link: '',
      img: 'assets/icons/with-yellow-ball/light-bulb-shine.png',
      label: 'common:entrepreneurs',
    },

    {
      link: 'https://docs.hoprnet.org/home/',
      img: 'assets/icons/with-yellow-ball/outdoors-mining.png',
      label: 'common:miners&Stakers',
    },
    {
      link: 'mailto:sebastian.buergel@hoprnet.org?subject=Investment',
      img: 'assets/icons/with-yellow-ball/professions-man-office-1.png',
      label: 'common:investors',
    },
  ];
  return (
    <div className="container  padding-section-aux">
      <div className="container">
        <h2>HOPR For</h2>
      </div>
      <motion.div variants={stagger} className="contact-plus-element">
        {data.map((e, index) => {
          const { link, img, label } = e;

          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
                className="item-contact-plus"
              >
                <div className="bg-img">
                  <motion.img variants={fadeInUp} src={img} alt={t(label)} />
                </div>
                <div>
                  <motion.h6 variants={fadeInUp} transition={{ delay: 0.2 }}>
                    {t(label)}
                  </motion.h6>
                </div>
              </motion.div>
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
