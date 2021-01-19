import React from 'react';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { stagger, fadeInUp } from '../../util/motionConfig';
const data = [
  {
    link:
      'https://www.coindesk.com/binance-labs-leads-1m-seed-round-in-crypto-tor-alternative-hopr',
    img: 'assets/as_see/coindesk.svg',
    about:
      'Binance Labs, the incubation and seed funding arm of the world’s largest crypto exchange, has made its first investment this year, backing decentralized privacy startup HOPR.',
    btn: 'Read more',
  },
  {
    link:
      'https://cointelegraph.com/news/hopr-data-privacy-testnet-to-launch-following-investment-by-binance',
    img: 'assets/as_see/cointelegraph.svg',
    about:
      'The privacy-focused network allows users to run HOPR nodes, stake and get rewards with HOPR tokens while providing privacy for Web 3.',
    btn: 'Read more',
  },
  {
    link:
      'https://www.moneytoday.ch/news/das-schweizer-tech-startup-hopr-sammelt-1-million-dollar-ein-binance-labs-fuehrt-die-investitionsru/',
    img: 'assets/as_see/moneytoday.svg',
    about:
      'From award-winning blockchain hackers, Silicon Valley tech veterans and a bold vision that could become a reality in Switzerland.',
    btn: 'Read more',
  },
];

export default function News() {
  const { t } = useTranslation();
  return (
    <>
      <section className="section-InTheNews the-aux-margin container">
        <div className="container-sm sub-title">
          <h2>In The News</h2>
        </div>
        <div className="items">
          {data.map((e, index) => {
            const { link, img, about, btn } = e;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
                className="element-item"
              >
                <div className="main">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className="container-img mb-12">
                      <img src={img} alt={about} />
                    </div>
                  </a>
                  <div>
                    <p className="mb-16 quote">{about}</p>
                    <div>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-color-high underline"
                      >
                        {btn}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
