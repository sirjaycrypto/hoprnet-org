import React from "react";
import { motion } from "framer-motion";
import {
  stagger,
  staggerHaft,
  fadeInUp,
  fadeInDown,
} from "../../util/motionConfig";

const data = [
  {
    link: "https://github.com/hoprnet",
    img: "assets/images/icons/original/shield.png",
    label: "Privacy Experts",
  },
  {
    link: "https://github.com/hoprnet",
    img: "assets/images/icons/original/lock-4.png",
    label: "Cryptographers",
  },
  {
    link: "https://docs.hoprnet.org/home/",
    img: "assets/images/icons/original/programming-team-chat-3.png",
    label: "Techies",
  },
  {
    link: "",
    img: "assets/images/icons/original/light-bulb-shine.png",
    label: "Entrepreneurs",
  },

  {
    link: "https://docs.hoprnet.org/home/",
    img: "assets/images/icons/original/outdoors-mining.png",
    label: "Miners & Stakers",
  },
  {
    link: "mailto:sebastian.buergel@hoprnet.org?subject=Investment",
    img: "assets/images/icons/original/professions-man-office-1.png",
    label: "Entrepreneurs",
  },
];

export default function ContactPlus() {
  return (
    <div className="container  padding-section-aux">
      <motion.div variants={stagger} className="contact-plus-element">
        {data.map((e, index) => {
          const { link, img, label } = e;
          return (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
                className="item-contact-plus"
              >
                <div className="bg-img">
                  <motion.img variants={fadeInUp} src={img} alt={label} />
                </div>
                <div>
                  <motion.h6 variants={fadeInUp} transition={{ delay: 0.2 }}>
                    {label}
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
