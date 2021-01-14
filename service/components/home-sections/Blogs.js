import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../../util/motionConfig';

export default function Blogs() {
  const { t } = useTranslation();
  const data = [
    {
      link: '/blog#post-blog',
      img: 'assets/icons/with-yellow-ball/shield.png',
      label: 'Privacy Blog',
    },
    {
      link: '/blog#post-blog',
      img: 'assets/icons/with-yellow-ball/lock-4.png',
      label: 'Crypto Blog',
    },
    {
      link: '/blog#post-blog',
      img: 'assets/icons/with-yellow-ball/programming-team-chat-3.png',
      label: 'Tech Blog',
    },
    {
      link: '/blog#post-blog',
      img: 'assets/icons/with-yellow-ball/light-bulb-shine.png',
      label: 'News Blog',
    },
  ];

  return (
    <div className="container  padding-section-aux">
      <div className="container-sm sub-title">
        <h2>HOPR Blogs</h2>
      </div>
      <motion.div variants={stagger} className=" list-items">
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
