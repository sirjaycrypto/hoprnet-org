import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function ContactPlus() {
  const { t } = useTranslation();
  const data = [
    {
      link: 'https://github.com/hoprnet',
      img: 'assets/images/icons/original/shield.png',
      label: 'Privacy Blog',
      delayTime: '100',
    },
    {
      link: 'https://github.com/hoprnet',
      img: 'assets/images/icons/original/lock-4.png',
      label: 'common:cryptographers',
      delayTime: '150',
    },
    {
      link: 'https://docs.hoprnet.org/home/',
      img: 'assets/images/icons/original/programming-team-chat-3.png',
      label: 'common:techies',
      delayTime: '200',
    },
    {
      link: '',
      img: 'assets/images/icons/original/light-bulb-shine.png',
      label: 'common:entrepreneurs',
      delayTime: '250',
    },

    {
      link: 'https://docs.hoprnet.org/home/',
      img: 'assets/images/icons/original/outdoors-mining.png',
      label: 'common:miners&Stakers',
      delayTime: '300',
    },
    {
      link: 'mailto:sebastian.buergel@hoprnet.org?subject=Investment',
      img: 'assets/images/icons/original/professions-man-office-1.png',
      label: 'common:investors',
      delayTime: '350',
    },
  ];

  return (
    <div className="container  padding-section-aux">
      <div className="contact-plus-element">
        {data.map((e, index) => {
          const { link, img, label, delayTime } = e;

          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noReferrer"
            >
              <div
                data-aos="fade-up"
                data-aos-delay={delayTime}
                className="item-contact-plus"
              >
                <div className="bg-img">
                  <img src={img} alt={t(label)} />
                </div>
                <div>
                  <h6>{t(label)}</h6>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
