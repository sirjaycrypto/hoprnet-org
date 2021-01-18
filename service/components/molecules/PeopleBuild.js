import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../../util/motionConfig';

const data = [
  {
    link: 'https://www.linkedin.com/in/ronald-kogens/',
    img: '/assets/images/team/robert_kiel.png',
    name: 'Robert Kiel',
    label: 'Co-Founder, Crypto',
  },
  {
    link: 'https://www.linkedin.com/in/ronald-kogens/',
    img: '/assets/images/team/rik_krieger.png',
    name: 'Rik Krieger, eMBA',
    label: 'Co-Founder, Commercial',
  },
  {
    link: '#',
    img: '/assets/images/team/meredith_bachma.png',
    name: 'Meredith Bachman',
    label: 'Graphic Designer',
  },

  {
    link: '#',
    img: '/assets/images/team/jose_aguinaga.png',
    name: 'José Aguinaga',
    label: 'Head of Engineering',
  },
  {
    link: '#',
    img: '/assets/images/team/steven_nonis.png',
    name: 'Steven Nonis',
    label: 'Software Engineer',
  },
  {
    link: '#',
    img: '/assets/images/team/peter_braden.png',
    name: 'Peter Braden',
    label: 'Software Engineer',
  },
  {
    link: '#',
    img: '/assets/images/team/the_wandering_editor.png',
    name: 'The Wandering Editor',
    label: 'Content Creator',
  },
];

export default function PeopleBuild() {
  return (
    <div className="people-area">
      <div className="container-sm">
        <h2>People building the HOPR Network</h2>
      </div>
      <div className="container padding-section-aux">
        <motion.div className="people-faces" variants={stagger}>
          {data.map((e, index) => {
            const { link, img, name, label } = e;
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
          })}
        </motion.div>
      </div>
    </div>
  );
}
