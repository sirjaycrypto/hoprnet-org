import React from "react";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../util/motionConfig";

export default function ContactPlus() {
  const { t } = useTranslation();
  const data = [
    {
      link: "https://github.com/hoprnet",
      img: "assets/images/icons/original/shield.png",
      label: "common:privacyExperts",
    },
    {
      link: "https://github.com/hoprnet",
      img: "assets/images/icons/original/lock-4.png",
      label: "common:cryptographers",
    },
    {
      link: "https://docs.hoprnet.org/home/",
      img: "assets/images/icons/original/programming-team-chat-3.png",
      label: "common:techies",
    },
    {
      link: "",
      img: "assets/images/icons/original/light-bulb-shine.png",
      label: "common:entrepreneurs",
    },

    {
      link: "https://docs.hoprnet.org/home/",
      img: "assets/images/icons/original/outdoors-mining.png",
      label: "common:miners&Stakers",
    },
    {
      link: "mailto:sebastian.buergel@hoprnet.org?subject=Investment",
      img: "assets/images/icons/original/professions-man-office-1.png",
      label: "common:investors",
    },
  ];
  
  return (
    <div className="container  padding-section-aux">
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
