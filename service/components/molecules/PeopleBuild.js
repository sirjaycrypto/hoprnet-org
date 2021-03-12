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
    img: '/assets/images/team/reinhard.jpg',
    name: 'Reinhard Schmidt',
    label: 'Graphic Designer',
  },
  {
    link: '#',
    img: '/assets/images/team/simona_fontanella.png',
    name: 'Simona Fontanella',
    label: 'Operations Manager',
  },
  {
    link: '#',
    img: '/assets/images/team/william_richter.png',
    name: 'William Richter',
    label: 'Communication Coordinator',
  },
  {
    link: '#',
    img: '/assets/images/team/the_wandering_editor.png',
    name: 'The Wandering Editor',
    label: 'Content Creator',
  },
  {
    link: '#',
    img: '/assets/images/team/matthew_edwards.png',
    name: 'Matthew Edwards',
    label: 'Community Manager',
  },
  {
    link: '#',
    img: '/assets/images/team/qianchen_yu.png',
    name: 'Qianchen "Q" Yu',
    label: 'Decentralized Technology Architect',
  },
  {
    link: '#',
    img: '/assets/images/team/amira_bouguera.png',
    name: 'Amira Bouguera',
    label: 'Cryptographer and protocol engineer',
  },
];

export default function PeopleBuild() {
  return (
    <div className="people-area">
      <div
        className="container-sm"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
      >
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
          })}
        </motion.div>
      </div>
    </div>
  );
}
