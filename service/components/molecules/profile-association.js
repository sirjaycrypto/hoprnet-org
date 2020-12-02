import React from "react";

import { motion } from "framer-motion";
import {
  stagger,
  fadeInUp,
} from "../../util/motionConfig";

const data = [
  {
    link: "https://www.linkedin.com/in/scbuergel/",
    img: "/assets/images/team/sebastian_burgel.png",
    name: "Dr. Sebastian Bürgel",
    label: "President",
  },
  {
    link: "https://www.linkedin.com/in/cluchsinger/",
    img: "/assets/images/team/catrina_luchsinger.jpg",
    name: "Dr. Catrina Luchsinger",
    label: "Board Member",
  },
  {
    link: "https://www.linkedin.com/in/ronald-kogens/",
    img: "/assets/images/team/ronald_kogens.jpg",
    name: "Ronald Kogens",
    label: "Board Member",
  },
];

export default function ProfileAssociation() {
  return (
    <div className="container container-profile padding-section-aux">
      <motion.div variants={stagger}>
        {data.map((e, index) => {
          const { link,img, name, label } = e;
          return (
            <a href={link} target="_blank" rel="noopener noreferrer">
        
              <motion.div
              key={index}
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
  );
}
